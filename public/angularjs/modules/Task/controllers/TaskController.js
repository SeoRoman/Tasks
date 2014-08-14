angular.module('Task').controller('TaskController', function($scope, $location, Dialog, TaskService) {

	$scope.task = null;

	$scope.createTask = function(index)
	{
		TaskService.create(index);
	}

	$scope.closeTaskPane = function()
	{
		$location.path('/projects/' + $scope.project.id, false);
		$scope.task = null;
	}	

	$scope.openTask = function(task)
	{
		$scope.task = task;
	}

	$scope.updateTaskTitle = function(task)
	{	
		console.log(task);

		return TaskService.update(task);
	}

});