angular.module('Task').controller('TaskController', function($rootScope, $location, $scope, $routeParams, Task, Dialog) {

	// listen for open task
	$rootScope.$on('task-open', function(event, data) {
		$scope.tasklist = $scope.getActiveTasklist();
		$scope.task = $scope.getActiveTask();
	});	

	$scope.close = function()
	{
		$location.path('/projects/' + $scope.project.id, false);
		$scope.task = null;
	}	

});