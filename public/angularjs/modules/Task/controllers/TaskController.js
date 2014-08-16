angular.module('Task').controller('TaskController', function($scope, $routeParams, $location, Dialog, TaskList, TaskService, ProjectService, TaskListService, TaskCommentService) {

	$scope.task = null;
	$scope.tasklist = null;

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
		$scope.task = task;
		$scope.tasklist = tasklist;

		$location.path('/projects/' + ProjectService.getId() + '/tasklists/' + task.tasks_lists_id + '/tasks/' + task.id, false);

		 TaskCommmentService.fetchComments(task).then(function(comments) {
		 	task.comments = comments;
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

});