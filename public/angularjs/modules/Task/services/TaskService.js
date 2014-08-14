angular.module('Task').service('TaskService', function(ProjectService, TaskListService, Task, Dialog) {

	var _task = null;

	this.setActiveTask = function(task)
	{
		_task = task;
	}

	this.getActiveTask = function()
	{
		return _task;
	}

	this.create = function(tasklistIndex)
	{
		Dialog.create('angularjs/modules/Task/views/dialogs/create.html', 'TaskDialogController', { task: {}, index: tasklistIndex }, {} );		
	}

	this.store = function(task, tasklistIndex)
	{
		Dialog.wait('task-create', 'Creating Task: ' + task.title);

		var tasklist = TaskListService.getTaskList(tasklistIndex);

		task.user_id = 1;
		task.tasks_lists_id = tasklist.id;

		console.log(task);

		// tasklist = the object we are storing...
		return Task.save( task, { ProjectID: ProjectService.getId(), TaskListID: tasklist.id }, function() {

			Dialog.close('task-create');

			TaskListService.addTask(tasklistIndex, task);

		}).$promise;
	}

	this.update = function(task, data)
	{
		console.log('Task in Update Function');
		console.log(task);

		Dialog.wait('task-update', 'Updating Task');

		return Task.update( { ProjectID: ProjectService.getId(), TaskListID: task.tasks_lists_id, TaskID: task.id }, task, function() {
			Dialog.close('task-update');
		});

		//return Task.update(task, { ProjectID: ProjectService.getId(), TaskListID: task.tasks_lists_id, TaskID: task.id } , function(response) {
		//	console.log('Server Response');
		//	console.log(response);
		//	Dialog.close('task-update');
		//	return response.task;
		//}).$promise;
	}

	this.loadTasks = function(tasklist)
	{
		console.log('---Loading Tasks---');
		console.log(tasklist);
		Dialog.wait('tasks-load', 'Loading Tasks for Tasklist: ' + tasklist.title);

		var data = { ProjectID: ProjectService.getId(), TaskListID: tasklist.id };
		return Task.query( data , function() {
			Dialog.close('tasks-load');
		}).$promise;
	}

});

