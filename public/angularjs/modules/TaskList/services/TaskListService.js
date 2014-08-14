angular.module('TaskList').service('TaskListService', function($http, $resource, Dialog, TaskList, ProjectService) {

	var _tasklists = {};

	var addTaskList = function(tasklist)
	{
		_tasklists.push(tasklist);
	}

	var removeTaskList = function(index)
	{
		_tasklists.splice(index, 1);
	}

	this.addTask = function(index, task)
	{
		var tasklist = _tasklists[index];
		
		tasklist.taskCount += 1;
		tasklist.tasks.push(task);
	}

	this.getTaskList = function(index) {
		return _tasklists[index];
	}

	this.loadTaskLists = function(project)
	{
		return ProjectService.getProject().$promise.then(function() {
			// Loading TaskList Dialog
			Dialog.wait('tasklist-loader', 'Loading TaskLists for ' + ProjectService.getTitle());

			// Once Project is Received Load the TaskLists...
			_tasklists = TaskList.query( { ProjectID: ProjectService.getId() }, function() {

				// TaskList Loading Complete
				Dialog.close('tasklist-loader');

			});

			return _tasklists;
		});
	}

	this.showTasks = function(tasks, index)
	{	

	}

	this.create = function()
	{
		Dialog.create('angularjs/modules/TaskList/views/dialogs/create.html', 'TaskListDialogController', { tasklist: {} }, {} );
	}

	this.edit = function(tasklist, index)
	{
		Dialog.create('angularjs/modules/TaskList/views/dialogs/update.html', 'TaskListDialogController', { tasklist: tasklist, index: index }, {});
	}

	this.delete = function(tasklist, index)
	{

		Dialog.wait('tasklist-delete', 'Deleting Tasklist: ' + tasklist.title);

		TaskList.delete( { ProjectID: ProjectService.getId(), TaskListID: tasklist.id }, function() {

			Dialog.close('tasklist-delete');

			removeTaskList(index);
			
		});
	}

	this.store = function(tasklist)
	{

		Dialog.wait('tasklist-create', 'Creating Tasklist: ' + tasklist.title);

		// tasklist = the object we are storing...
		return TaskList.save( tasklist, { ProjectID: ProjectService.getId() }, function(response) {

			Dialog.close('tasklist-create');

			tasklist.taskCount = 0;

			addTaskList(response.tasklist);

		}).$promise;
	}

	this.update = function(tasklist, index)
	{
		Dialog.wait('tasklist-update', 'Updating Tasklist');

		return TaskList.update(tasklist, { ProjectID: ProjectService.getId(), TaskListID: tasklist.id }, function() {

			Dialog.close('tasklist-update');
			
			_tasklists[index] = tasklist;

		}).$promise;
	}

});
