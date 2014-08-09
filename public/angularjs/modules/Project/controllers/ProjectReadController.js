angular.module('Project').controller('ProjectReadController', function($scope, $routeParams, Project) {

	// Get Project 
	$scope.project = Project.get( { ProjectID: $routeParams.ProjectID });
	$scope.project.tasklists = null;	

});