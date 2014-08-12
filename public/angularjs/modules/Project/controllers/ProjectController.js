angular.module('Project').controller('ProjectController', function($scope, $routeParams, Dialog, ProjectService, TaskList) {

	// Core Variables
	var params = $routeParams;

	// Initialize All Variables
	$scope.project = {};

	// Load the Project
	$scope.project = ProjectService.loadProject(params.ProjectID);


});