angular.module('Task').controller('TaskCreateController', function($rootScope, $scope, Dialog) {

	$scope.create = function(ProjectID, TaskListID)
	{
		var view = 'angularjs/modules/Task/views/dialogs/create.html';
		var controller = 'TaskStoreController';
		var data = { ProjectID: ProjectID, TaskListID: TaskListID };
		var options = {};

		Dialog.create(view, controller, data, options);
	}

});