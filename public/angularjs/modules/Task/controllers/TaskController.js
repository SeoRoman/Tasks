angular.module('Task').controller('TaskController', function($rootScope, $location, $scope, Task, Dialog) {

	$scope.task = null;

	// listen for open task
	$rootScope.$on('task-open', function(event, data) {
		console.log(data);
		$scope.task = data.task;
	});	

	$scope.open = function(task)
	{		
		console.log(task);

		var project = $scope.project;
		var tasklist = $scope.tasklist;

		$location.path('/projects/' + project.id + '/tasklists/' + tasklist.id + '/tasks/' + task.id, false);

		$rootScope.$broadcast('task-open', { task: task });
	}


	$scope.create = function()
	{
		var project = $scope.project;
		var tasklist = $scope.tasklist;

		var view = 'angularjs/modules/Task/views/dialogs/create.html';
		var controller = 'TaskStoreController';
		var data = { ProjectID: project.id, TaskListID: tasklist.id };
		var options = {};

		Dialog.create(view, controller, data, options);
	}

	$scope.close = function()
	{
		$location.path('/projects/' + $scope.project.id, false);
		$scope.task = null;
	}	

});