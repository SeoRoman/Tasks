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

	$scope.updateTaskTitle = function(task, title)
	{	

		console.log('Scope Task');
		console.log($scope.task);
		var data = { id: task.id, title: title };

		return TaskService.update(task, data);
	}

});