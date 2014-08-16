angular.module('Task').service('TaskCommentService', function(Dialog, ProjectService, TaskListService, TaskComment) {

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

