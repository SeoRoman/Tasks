angular.module('Task').controller('TaskController', function($scope, $routeParams, $location, Dialog, TaskList, TaskService, ProjectService, TaskListService) {

	$scope.task = null;

	$scope.createTask = function(index)
	{
		TaskListService.setActiveTaskList(index);

		TaskService.create();
	}

	$scope.closeTaskPane = function()
	{
		$location.path('/projects/' + $scope.project.id, false);
		$scope.task = null;
	}	

	$scope.openTask = function(task, index)
	{
		$scope.task = task;

		if (index !== 'undefined') {
			$scope.task.tasklist = TaskListService.getTaskList(index);
		}


		$location.path('/projects/' + ProjectService.getId() + '/tasklists/' + task.tasks_lists_id + '/tasks/' + task.id, false);

		 TaskService.loadComments(task).then(function(comments) {
		 	task.comments = comments;
		 });
	}

	$scope.updateTaskTitle = function(data)
	{	
		TaskService.setTaskTitle(data);

		//return TaskService.updateTitle($scope.task).then(function(response) {
		//	$scope.task = response.task;
		//});
	}

	$scope.updateTaskDescription = function()
	{
		return TaskService.updateDescription($scope.task).then(function(response) {
			$scope.task = response.task;
		});
	}

});