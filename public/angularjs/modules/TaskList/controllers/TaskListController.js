angular.module('TaskList').controller('TaskListController', function($scope, TaskListService, TaskService) {

	$scope.tasklists = {};

	TaskListService.loadTaskLists().then(function(tasklists) {
		$scope.tasklists = tasklists;
	});

	$scope.createTaskList = function()
	{
		TaskListService.create();
	}

	$scope.editTaskList = function(tasklist, index)
	{
		TaskListService.edit(tasklist, index);
	}

	$scope.deleteTaskList = function(tasklist, index)
	{
		TaskListService.delete(tasklist, index);
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