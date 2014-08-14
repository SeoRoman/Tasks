angular.module('Task').service('TaskService', function(ProjectService, TaskListService, Task, TaskComment, Dialog) {

	var _task = null;

	var addComment = function(task, comment)
	{
		Dialog.wait('task-comment-create', 'Adding Comment to Task: ' + task.title);

		return TaskComment.save( comment, { ProjectID: ProjectService.getId(), TaskListID: task.tasks_lists_id, TaskID: task.id }, function(response) {
			Dialog.close('task-comment-create');
			task.comments.unshift(response.comment);
		}).$promise;
	}

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

	this.storeComment = function(task, comment)
	{
		comment.commentable_type = 'Task';
		comment.commentable_id = task.id;
		comment.created_by = 1;

		return addComment(task, comment);
	}

	this.store = function(task, tasklistIndex)
	{
		Dialog.wait('task-create', 'Creating Task: ' + task.title);

		var tasklist = TaskListService.getTaskList(tasklistIndex);

		task.created_by = 1;
		task.tasks_lists_id = tasklist.id;

		console.log(task);

		// tasklist = the object we are storing...
		return Task.save( task, { ProjectID: ProjectService.getId(), TaskListID: tasklist.id }, function(response) {

			task.comments = {};

			console.log(response);

			var comment = {};
			comment.created_by = 1;
			comment.commentable_id = response.task.id;
			comment.commentable_type = 'Task';
			comment.body = '{Roman Lopez} created this task - ' + response.task.created_at

			addComment(response.task, comment);

			Dialog.close('task-create');		

			TaskListService.addTask(tasklistIndex, response.task);

		}).$promise;
	}

	this.update = function(task)
	{
		Dialog.wait('task-update', 'Updating Task');

		task.updated_by = 1;

		return Task.update( { ProjectID: ProjectService.getId(), TaskListID: task.tasks_lists_id, TaskID: task.id }, task, function() {
			Dialog.close('task-update');
		});
	}

	this.loadTask = function(ProjectID, TaskListID, TaskID)
	{
		Dialog.wait('task-load', 'Loading Task');

		var data = { ProjectID: ProjectID, TaskListID: TaskListID, TaskID: TaskID };
		return Task.get(data, function() {
			Dialog.close('task-load');
		}).$promise;
	}

	this.loadTasks = function(tasklist)
	{
		Dialog.wait('tasks-load', 'Loading Tasks for Tasklist: ' + tasklist.title);

		var data = { ProjectID: ProjectService.getId(), TaskListID: tasklist.id };
		return Task.query( data , function() {
			Dialog.close('tasks-load');
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

});

