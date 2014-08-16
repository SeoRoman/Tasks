angular.module('Task').service('TaskService', function(ProjectService, TaskListService, TaskCommentService, Task, TaskComment, Dialog) {

	var _task =null;
	var _tasks = {};

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

	this.updateTitle = function(task)
	{
		Dialog.wait('task-update', 'Updating Task');

		task.updated_by = 1;

		return Task.update( { ProjectID: ProjectService.getId(), TaskListID: task.tasks_lists_id, TaskID: task.id }, task, function() {

			var comment = {};
			comment.created_by = 1;
			comment.commentable_id = task.id;
			comment.commentable_type = 'Task';
			comment.class_type = 'system';
			comment.body = '{Roman Lopez} Updated Task Title: ' + task.title;

			addComment(task, comment);

			Dialog.close('task-update');
		}).$promise;
	}

	this.updateDescription = function(task)
	{
		Dialog.wait('task-update', 'Updating Task');

		task.updated_by = 1;

		return Task.update( { ProjectID: ProjectService.getId(), TaskListID: task.tasks_lists_id, TaskID: task.id }, task, function() {

			var comment = {};
			comment.created_by = 1;
			comment.commentable_id = task.id;
			comment.commentable_type = 'Task';
			comment.class_type = 'system';
			comment.body = '{Roman Lopez} Updated Task Desciption: ' + task.description;

			addComment(task, comment);

			Dialog.close('task-update');
		}).$promise;
	}

	this.loadComments = function(task)
	{
		Dialog.wait('task-comments-load', 'Loading Comments for Task: ' + task.title);

		var data = { ProjectID: ProjectService.getId(), TaskListID: task.tasks_lists_id, TaskID: task.id };
		return TaskComment.query( data, function() {
			Dialog.close('task-comments-load');
		}).$promise;
	}	

	this.storeComment = function(task, comment)
	{
		comment.class_type = "comment";
		comment.commentable_type = 'Task';
		comment.commentable_id = task.id;
		comment.created_by = 1;

		return addComment(task, comment);
	}

});

