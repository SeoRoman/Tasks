angular.module('Task').controller('TaskDraggableController', function($rootScope, $scope, $location, Dialog) {

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

	$scope.open = function(task)
	{		
		console.log('called');

		var project = $scope.project;
		var tasklist = $scope.tasklist;

		$scope.setActiveProject(project);
		$scope.setActiveTasklist(tasklist);
		$scope.setActiveTask(task);

		$location.path('/projects/' + project.id + '/tasklists/' + tasklist.id + '/tasks/' + task.id, false);

		$rootScope.$broadcast('task-open', { task: task });
	}	


});