angular.module('Project').controller('ProjectController', function($scope, $routeParams, Project) {

	// Core Variables
	var params = $routeParams;

	// Initialize All Variables
	$scope.project = {};
	$scope.project.tasklists = {};

	// Load the Project
	var project = Project.get( { ProjectID: params.ProjectID }, function() {
		$scope.project = project;
	}, function() {
		Dialog.errorMessage('Invalid Project', 'Project Not Found');
	});



});