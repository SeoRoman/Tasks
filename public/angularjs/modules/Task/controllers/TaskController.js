angular.module('Task').controller('TaskController', function($scope, $routeParams, $location, Dialog, TaskList, TaskService, ProjectService, TaskListService, TaskCommentService) {

	$scope.task = null;
	$scope.tasklist = null;

	$scope.completeTask = function(task, tasklist)
	{
		var push = true;

		if ($scope.task !== task) { 
			push = false;
		}

		task.completed = task.completed == 1 ? 0 : 1;

		if (task.completed) {
			TaskService.complete(task, tasklist, push);
		}
		else {
			TaskService.reopen(task, tasklist, push);
		}

	}

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

	$scope.openTask = function(task, tasklist)
	{
		$location.path('/projects/' + $scope.project.id + '/tasklists/' + tasklist.id + '/tasks/' + task.id, false);

		$scope.task = task;

		 TaskCommentService.fetchComments(task).then(function(comments) {
		 	$scope.task.comments = comments;		 	
		 });
	}

	$scope.updateTaskTitle = function()
	{	
		return TaskService.updateTitle($scope.task);
	}

	$scope.updateTaskDescription = function()
	{
		return TaskService.updateDescription($scope.task);
	}

	$scope.deleteTask = function()
	{
		return TaskService.delete($scope.tasklist, $scope.task).then(function() {
			$scope.task = null;
		});
	}

});