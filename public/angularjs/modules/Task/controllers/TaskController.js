angular.module('Task').controller('TaskController', function($scope, $location, Dialog, TaskService) {

	$scope.task = null;

	$scope.closeTaskPane = function()
	{
		$location.path('/projects/' + $scope.project.id, false);
		$scope.task = null;
	}	

	$scope.openTask = function(task)
	{
		$scope.task = task;
	}

	$scope.updateTask = function()
	{	
		return TaskService.update($scope.task);
	}

});