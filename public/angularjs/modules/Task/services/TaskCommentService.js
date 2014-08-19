angular.module('Task').service('TaskCommentService', function(Dialog, ProjectService, TaskListService, TaskComment) {

	this.fetchComments = function(project, tasklist, task)
	{
		return TaskComment.query( { ProjectID: project.id, TaskListID: tasklist.id, TaskID: task.id } );
	}	

	this.store = function(task, comment, push)
	{
		project = ProjectService.getProject();

		Dialog.wait('task-comment-create', 'Adding Comment to Task: ' + task.title);

		var data = { ProjectID: project.id, TaskListID: task.tasks_lists_id, TaskID: task.id };

		comment.commentable_type = 'Task';
		comment.commentable_id = task.id;
		comment.created_by = 1;
		comment.class_type = 'comment';	

		return TaskComment.save( comment, data, function(comment) {

			console.log(task.comments);
			console.log(comment);

			if (push !== false ) {
				task.comments.unshift(comment);
			}

			Dialog.close('task-comment-create');

		});
	}

	this.storeComment = function(task, comment, push)
	{
		project = ProjectService.getProject();

		Dialog.wait('task-comment-create', 'Adding Comment to Task: ' + task.title);

		var data = { ProjectID: project.id, TaskListID: task.tasks_lists_id, TaskID: task.id };

		return TaskComment.save( comment, data, function(comment) {

			if (push !== false ) {
				task.comments.unshift(comment);
			}

			Dialog.close('task-comment-create');

		});		
	}

	this.read = function()
	{

	}

	this.update = function()
	{

	}

	this.delete = function()
	{

	}

});

