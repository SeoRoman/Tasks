angular.module('Task').service('TaskService', function($location, ProjectService, TaskListService, TaskCommentService, Task, TaskComment, Dialog) {

	var _task =null;
	var _tasks = {};

	this.complete = function(task, tasklist, push)
	{
		var project = ProjectService.getProject();

		updateTask(task, 'Marked Task as Complete', push);
	}

	this.reopen = function(task, tasklist, push)
	{
		var project = ProjectService.getProject();

		updateTask(task, 'Reopened Task', push);
	}

	this.fetchTasks = function(project, tasklist)
	{
        Dialog.wait('tasks-load', 'Loading Tasks for Tasklist: ' + tasklist.title);
		
		return Task.query( { ProjectID: project.id, TaskListID: tasklist.id } , function(tasks) {

			_tasks = tasks;

			Dialog.close('tasks-load');

		});
	}	

	var addComment = function(task, comment)
	{
		
	}	

	this.setActiveTask = function(task)
	{
		_task = task;
	}

	this.getActiveTask = function()
	{
		return _task;
	}

	this.setTaskTitle = function(title)
	{
		_task.title = title;
	}

	this.getTaskTitle = function()
	{
		return _task.title;
	}

	this.setTaskDescription = function(description)
	{
		_task.description = description;
	}	

	this.getTaskDescription = function()
	{
		return _task.description;
	}

	this.create = function()
	{
		Dialog.create('angularjs/modules/Task/views/dialogs/create.html', 'TaskDialogController', { task: {} }, {} );		
	}

	this.store = function(task)
	{
		var project = ProjectService.getProject();
		var tasklist = TaskListService.getActiveTaskList();

		Dialog.wait('task-create', 'Creating Task: ' + task.title);

		task.created_by = 1;
		task.tasks_lists_id = tasklist.id;

		// tasklist = the object we are storing...
		return Task.save( task, { ProjectID: project.id, TaskListID: tasklist.id }, function(task) {

			task.comments = [];

			var comment = new TaskComment(
				{
					created_by: 1,
					commentable_id: task.id,
					commentable_type: 'Task',
					class_type: 'system',
				 	body: ' created task '
				}
			);

			TaskCommentService.store(task, comment).$promise.then(function(comment) {

				task.comments.push(comment);

				Dialog.close('task-create');		

				TaskListService.addTask(tasklist, task);
			});

		});
	}

	var updateTask = function(task, commentBody, push)
	{
		var project = ProjectService.getProject();

		console.log(task);

		Dialog.wait('task-update', 'Updating Task');

		task.updated_by = 1;

		var data = { ProjectID: project.id, TaskListID: task.tasks_lists_id, TaskID: task.id }

		return Task.update( data, task, function() {

			var comment = new TaskComment(
				{
					created_by: 1,
					commentable_id: task.id,
					commentable_type: 'Task',
					class_type: 'system',
				 	body: commentBody
				}
			);

			TaskCommentService.store(task, comment, push).$promise.then(function(comment) {

				//task.comments.push(comment);

				Dialog.close('task-update');		

			});			

		});
	}

	this.updateTitle = function(task)
	{
		updateTask(task, ' updated title: ' + task.title);
	}

	this.updateDescription = function(task)
	{
		updateTask(task, 'Updated Task Description: ' + task.description);
	}

	this.storeComment = function(task, comment)
	{
		comment.class_type = "comment";
		comment.commentable_type = 'Task';
		comment.commentable_id = task.id;
		comment.created_by = 1;

		return addComment(task, comment);
	}	

	this.delete = function(tasklist, task)
	{
		var project = ProjectService.getProject();

		var data = { ProjectID: project.id, TaskListID: tasklist.id, TaskID: task.id };

		var confirm = Dialog.confirm('Delete Task?', 'Are you sure you want to delete task: ' + task.title);

		return confirm.result.then(function() {
			// Yep
			Dialog.wait('task-delete', 'Deleting Task: ' + task.title);

			return Task.delete( data, function() {
				confirm.close();
				Dialog.close('task-delete');

				$location.path('/projects/' + project.id, false);

				TaskListService.removeTask(tasklist, task);
			});
			
		}, function() {
			// Nope...
			confirm.close();
		});

	}	

});

