angular.module('Task').controller('TaskReadController', function($rootScope, $scope, $routeParams, Task, project, task) {
	$scope.project = project;
	$scope.task = task;
});