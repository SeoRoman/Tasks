angular.module('Task').controller('TaskReadController', function($rootScope, $scope, $routeParams, Task, project) {

	var params = $routeParams;

	$scope.project = project;
	
	$scope.task = Task.get( { ProjectID: params.ProjectID, TaskListID: params.TaskListID, Id: params.id } );
	
	console.log(params);

	$rootScope.$broadcast('open-task', { projectId: params.ProjectID, taskListId: params.TaskListID, taskId: params.id, task: $scope.task });

});