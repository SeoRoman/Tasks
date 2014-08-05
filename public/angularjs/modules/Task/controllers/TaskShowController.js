angular.module('Task').controller('TaskShowController', function($rootScope, $scope, $routeParams, Task) {

	$rootScope.$on('open-task', function(event, data) {
		$scope.task = data.task;
	});

	$scope.closeTask = function()
	{
		$scope.task = null;
	}
});