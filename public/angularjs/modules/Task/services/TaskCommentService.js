angular.module('Task').service('TaskCommentService', function(Dialog, ProjectService, TaskListService, TaskComment) {

	this.fetchComments = function(task)
	{
		Dialog.wait('task-comments-load', 'Loading Comments for Task: ' + task.title);

		var data = { ProjectID: ProjectService.getId(), TaskListID: task.tasks_lists_id, TaskID: task.id };
		return TaskComment.query( data, function() {
			Dialog.close('task-comments-load');
		}).$promise;
	}	

	this.store = function(task, comment)
	{
		project = ProjectService.getProject();

		Dialog.wait('task-comment-create', 'Adding Comment to Task: ' + task.title);

		var data = { ProjectID: project.id, TaskListID: task.tasks_lists_id, TaskID: task.id };

		return TaskComment.save( comment, data, function(comment) {

			console.log(task.comments);
			console.log(comment);

			task.comments.unshift(comment);

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
