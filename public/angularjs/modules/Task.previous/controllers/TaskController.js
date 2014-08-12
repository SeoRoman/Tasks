angular.module('Task').controller('TaskController', function($rootScope, $location, $scope, $routeParams, Task, Dialog) {

	// listen for open task
	$rootScope.$on('task-open', function(event, data) {

		console.log('Event Fired');

		console.log(data);

		$scope.tasklist = data.tasklist;
		$scope.task = data.task;
	});	

	$scope.close = function()
	{
		$location.path('/projects/' + $scope.project.id, false);
		$scope.task = null;
	}	

});