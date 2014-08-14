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

		// Get Task Comments 

		 TaskService.loadComments(task).then(function(comments) {
		 	task.comments = comments;
		 });
	}

	$scope.updateTask = function()
	{	
		return TaskService.update($scope.task);
	}

});