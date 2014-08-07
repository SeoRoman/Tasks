angular.module('TaskList').controller('TaskListCreateController', function($scope, $routeParams, Dialog, TaskList, RedirectTo, Session) {

	$scope.create = function(ProjectID)
	{
		Dialog.create('/angularjs/modules/TaskList/views/dialogs/create.html','TaskListStoreController', { ProjectID: ProjectID }, {});
	}

});


