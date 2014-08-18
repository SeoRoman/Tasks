angular.module('TaskList').controller('TaskListController', function($scope, Dialog, ProjectService, TaskListService, TaskService) {

	$scope.createTaskList = function()
	{
		TaskListService.create();
	}

	$scope.editTaskList = function(tasklist, index)
	{
		TaskListService.edit(tasklist, index);
	}

	$scope.deleteTaskList = function(tasklist)
	{
		var project = ProjectService.getProject();

		var confirm = Dialog.confirm('Delete TaskList', 'Are you sure you want to delete TaskList: ' + tasklist.title);

		confirm.result.then(function() {

			Dialog.wait('tasklist-delete', 'Deleting Tasklist: ' + tasklist.title);

			TaskListService.delete(project, tasklist).$promise.then(function() {

				Dialog.close('tasklist-delete');

				TaskListService.remove(tasklist);

				confirm.close();

			});

		}, function() {

			confirm.close();

		});
	}

	$scope.loadTasks = function(index)
	{
		var tasklist = TaskListService.getTaskList(index);

		tasklist.opened = !tasklist.opened;

		if (tasklist.opened)
		{
			TaskService.loadTasks(tasklist).then(function(tasks) {
				tasklist.tasks = tasks;
			});			
		}
	}

});