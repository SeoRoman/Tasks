angular.module('TaskList').controller('TaskListStoreController', function($scope, $routeParams, $modalInstance, TaskList, RedirectTo, Session, data) {

	$scope.cancel = function()
	{
		$modalInstance.close();
	}

	$scope.store = function()
	{
		console.log('Adding to Project: #' + data.ProjectID);
		console.log(data);
	}

});

