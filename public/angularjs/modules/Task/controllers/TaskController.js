angular.module('Task').controller('TaskController', function($scope, $routeParams, $location, Dialog, TaskList, TaskService, ProjectService, TaskListService, TaskCommentService, UserService) {

	// Check If URL Contains a Task
	if ($routeParams.TaskID !== 'undefined')
	{
			
	}

	$scope.task = null;
	$scope.tasklist = null;

	// CREATE
	$scope.createTask = function(index)
	{
		TaskListService.setActiveTaskList(index);
		TaskService.create();
	}

	// READ
	$scope.openTask = function(task, tasklist)
	{
		$location.path('/projects/' + $scope.project.id + '/tasklists/' + tasklist.id + '/tasks/' + task.id, false);

		$scope.task = task;
		$scope.tasklist = tasklist;

		TaskService.setActiveTask(task);

		 TaskCommentService.fetchComments(task).$promise.then(function(comments) {
		 	$scope.task.comments = comments;
		 });
	}


	// UPDATE

	// DELETE

	$scope.completeTask = function(task, tasklist)
	{
		var push = true;

		$scope.task = TaskService.getActiveTask();

		if ($scope.task !== task) { 
			push = false;
		}

		if (task.completed == '1') {
			$scope.task.completed = '1';
			TaskService.complete(task, tasklist, push);
		}
		else {
			$scope.task.completed = '0';
			TaskService.reopen(task, tasklist, push);
		}

	}

	$scope.closeTaskPane = function()
	{
		$location.path('/projects/' + $scope.project.id, false);
		$scope.task = null;
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
			//$scope.task = null;
		});
	}

	$scope.openCalendar = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.openedCal = true;
  };

});