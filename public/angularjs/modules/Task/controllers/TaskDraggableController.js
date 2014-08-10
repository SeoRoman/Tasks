angular.module('Task').controller('TaskDraggableController', function($rootScope, $scope, $location, Dialog) {

	$scope.startCallBack = function(event, ui, tasklist)
	{	
		tasklist.taskCount = $scope.droppables[tasklist.id].length - 1;	
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

	$scope.open = function(task)
	{		
		console.log('called');

		var project = $scope.project;
		var tasklist = $scope.tasklist;

		$rootScope.$broadcast('task-open', { task: task, tasklist: tasklist });

		$location.path('/projects/' + project.id + '/tasklists/' + tasklist.id + '/tasks/' + task.id, false);		
	}	


});