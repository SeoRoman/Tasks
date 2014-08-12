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

	$scope.updateTaskTitle = function(title, task)
	{		
		return TaskService.update(data, task.tasks_lists_id, task.id).then(function(task) {
			console.log(task); 
		});
	}

	$scope.updateTaskDescription = function(description)
	{
		$scope.task.description
	}

});