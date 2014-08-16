angular.module('TaskList').service('TaskListService', function($http, $resource, Dialog, TaskList, ProjectService) {

	var _tasklists = {};
	var _tasklist = {};

	this.fetchTaskLists = function(project)
	{
			
		Dialog.wait('tasklists-loader', 'Loading TaskLists for ' + project.title);

		return TaskList.query( { ProjectID: project.id }, function(tasklists) {

			_tasklists = tasklists;

			// TaskList Loading Complete
			Dialog.close('tasklists-loader');

			console.log('TaskLists Loaded Successfully');

		});
	}

	this.setActiveTaskList = function(index)
	{
		_tasklist = _tasklists[index];
	}

	this.getActiveTaskList = function()
	{
		return _tasklist;
	}

	this.getTaskList = function(index)
	{
		return _tasklists[index];
	}

	this.getTaskLists = function()
	{
		return _tasklists;
	}	

	var addTaskList = function(tasklist)
	{
		_tasklists.push(tasklist);
	}

	var removeTaskList = function(index)
	{
		_tasklists.splice(index, 1);
	}

	this.addTask = function(tasklist, task)
	{
		tasklist.taskCount += 1;
		tasklist.tasks.push(task);
	}

	this.removeTask = function(tasklist, task)
	{
		var index = tasklist.tasks.indexOf(task);
		tasklist.tasks.splice(index, 1);
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

		var project = ProjectService.getProject();

		var confirm = Dialog.confirm('Delete TaskList', 'Are you sure you want to delete TaskList: ' + tasklist.title);

		confirm.result.then(function() {

			// Yes, delete it...
			Dialog.wait('tasklist-delete', 'Deleting Tasklist: ' + tasklist.title);

			TaskList.delete( { ProjectID: project.id, TaskListID: tasklist.id }, function() {

				removeTaskList(index);

				Dialog.close('tasklist-delete');

				confirm.close();
				
			});

		}, function() {

			// No, Please don't....
			confirm.close();
		});

	}

	this.store = function(tasklist)
	{
		var project = ProjectService.getProject();

		Dialog.wait('tasklist-create', 'Creating Tasklist: ' + tasklist.title);

		// tasklist = the object we are storing...
		return TaskList.save( tasklist, { ProjectID: project.id }, function(tasklist) {

			Dialog.close('tasklist-create');

			tasklist.taskCount = 0;

			addTaskList(tasklist);

		});
	}

	this.update = function(tasklist, index)
	{
		var project = ProjectService.getProject();

		Dialog.wait('tasklist-update', 'Updating Tasklist');

		return TaskList.update(tasklist, { ProjectID: project.id, TaskListID: tasklist.id }, function() {

			Dialog.close('tasklist-update');
			
			_tasklists[index] = tasklist;

		});
	}

});
