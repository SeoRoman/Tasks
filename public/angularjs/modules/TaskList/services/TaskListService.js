angular.module('TaskList').service('TaskListService', function($http, $resource, Dialog, TaskList, ProjectService) {

	var _tasklists = {};
	var _tasklist = {};

	this.update = function(project, tasklist, index)
	{
		return TaskList.update(tasklist, { ProjectID: project.id, TaskListID: tasklist.id }, function() {
			
			_tasklists[index] = tasklist;

		});
	}

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

	this.delete = function(project, tasklist)
	{
		return TaskList.delete( { ProjectID: project.id, TaskListID: tasklist.id } );
	}

	this.store = function(project, tasklist)
	{
		return TaskList.save( tasklist, { ProjectID: project.id }, function(tasklist) {

			tasklist.taskCount = 0;

		});
	}

	this.add = function(tasklist)
	{
		_tasklists.push(tasklist);
	}

	this.remove = function(tasklist)
	{
		var index = _tasklists.indexOf(tasklist);
		_tasklists.splice(index, 1);
	}

});
