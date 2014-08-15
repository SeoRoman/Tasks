angular.module('Task').controller('TaskController', function($scope, $routeParams, $location, Dialog, TaskService, ProjectService) {

	$scope.task = null;

	if ($routeParams.TaskID !== 'undefined')
	{
		TaskService.loadTask($routeParams.ProjectID, $routeParams.TaskListID, $routeParams.TaskID).then(function(response) {
			$scope.openTask(response.task);
		});
	}	

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

		$location.path('/projects/' + ProjectService.getId() + '/tasklists/' + task.tasks_lists_id + '/tasks/' + task.id, false);

		 TaskService.loadComments(task).then(function(comments) {
		 	task.comments = comments;
		 });
	}

	$scope.updateTask = function()
	{	
		return TaskService.update($scope.task);
	}

});