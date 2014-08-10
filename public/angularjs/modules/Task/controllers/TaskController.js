angular.module('Task').controller('TaskController', function($rootScope, $location, $scope, Task, Dialog) {

	$scope.task = null;

	// listen for open task
	$rootScope.$on('task-open', function(event, data) {
		$scope.project = $scope.getProject();
		$scope.tasklist = $scope.getTasklist();
		$scope.task = $scope.getTask();
	});	

	$scope.open = function(task)
	{		
		var project = $scope.project;
		var tasklist = $scope.tasklist;

		$scope.setProject(project);
		$scope.setTasklist(tasklist);
		$scope.setTask(task);

		$location.path('/projects/' + project.id + '/tasklists/' + tasklist.id + '/tasks/' + task.id, false);

		$rootScope.$broadcast('task-open', { task: task });
	}


	$scope.create = function(index)
	{
		var project = $scope.project;
		var tasklist = $scope.tasklist;

		var view = 'angularjs/modules/Task/views/dialogs/create.html';
		var controller = 'TaskStoreController';
		var data = { ProjectID: project.id, TaskListID: tasklist.id, index: index };
		var options = {};

		Dialog.create(view, controller, data, options);
	}

	$scope.close = function()
	{
		$location.path('/projects/' + $scope.project.id, false);
		$scope.task = null;
	}	

});