angular.module('Task').controller('TaskShowController', function($rootScope, $location, $scope, $routeParams, Task) {

	$rootScope.$on('open-task', function(event, data) {
		$scope.task = data.task;
	});

	$scope.closeTask = function()
	{
		$location.path('/projects/' + $routeParams.ProjectID, false);
		$scope.task = null;
	}
});