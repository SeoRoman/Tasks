angular.module('TaskList').service('TaskListService', function($http, $resource, Dialog, TaskList, ProjectService) {

	var _tasklists = {};
	var _tasklist = {};

	// DEBUG
	this.retrieveTasklists = function()
	{
		return _tasklists;
	}

	this.fetchTaskLists = function(project)
	{
		console.log(project);

		var a = TaskList.query( { ProjectID: project.id }, function(tasklists) {
			angular.forEach(tasklists, function(tasklist) {
				_tasklists[tasklist.id] = tasklist;
			});
		});

		console.log(a);

		return a;
	}

	this.belongsTo = function(tasklist, project)
	{
		console.log('--- TASKLIST BELONGS TO');

		console.log(tasklist);
		console.log(project);

		console.log('--- END');

		return tasklist.tasks_projects_id == project.id;
	}

	this.getTaskList = function(id)
	{
		console.log('TaskList ID: ' + id);

		if (_tasklists[id] !== 'undefined')
		{
			_tasklist = _tasklists[id];
			return _tasklists[id];	
		}
		
		return {};
	}

	this.create = function()
	{
		Dialog.create('angularjs/modules/TaskList/views/dialogs/create.html', 'TaskListDialogController', { tasklist: {} }, {} );
	}

	this.edit = function(tasklist)
	{
		Dialog.create('angularjs/modules/TaskList/views/dialogs/update.html', 'TaskListDialogController', { tasklist: tasklist }, {});
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

	this.update = function(project, tasklist, index)
	{
		return TaskList.update(tasklist, { ProjectID: project.id, TaskListID: tasklist.id }, function() {
			
			_tasklists[tasklist.id] = tasklist;

		});
	}	

	this.add = function(tasklist, project)
	{
		project.tasklists[tasklist.id] = tasklist;
	}

	this.remove = function(tasklist)
	{
		_tasklists.splice(tasklist.id, 1);
	}

// OLD
	this.setActiveTaskList = function(index)
	{
		_tasklist = _tasklists[index];
	}

	this.getActiveTaskList = function()
	{
		return _tasklist;
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

});
