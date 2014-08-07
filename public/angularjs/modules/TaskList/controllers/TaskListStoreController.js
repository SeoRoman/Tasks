angular.module('TaskList').controller('TaskListStoreController', function($scope, $routeParams, TaskList, RedirectTo, Session) {

	$scope.store = function(ProjectID, tasklist)
	{
		console.log('Adding to Project: #' + ProjectID);
		console.log(tasklist);
	}

});

