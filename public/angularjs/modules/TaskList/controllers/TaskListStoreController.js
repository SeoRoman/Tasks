angular.module('TaskList').controller('TaskListStoreController', function($scope, $routeParams, $modalInstance, TaskList, RedirectTo, Session) {

	$scope.cancel = function()
	{
		$modalInstance.close();
	}

	$scope.store = function(ProjectID, tasklist)
	{
		console.log('Adding to Project: #' + ProjectID);
		console.log(tasklist);
	}

});

