angular.module('Project').controller('ProjectController', function($scope, $routeParams, Dialog, Project, TaskList) {

	// Core Variables
	var params = $routeParams;

	// Initialize All Variables
	$scope.project = {};
	$scope.project.tasklists = {};

	// Loading Project Dialog
	Dialog.wait('project-loader', 'Loading Project');

	// Load the Project
	$scope.project = Project.get( { ProjectID: params.ProjectID }, function() {
		
		// Project Loading Complete
		Dialog.close('project-loader');

		// Loading TaskList Dialog
		Dialog.wait('tasklist-loader');

		// Once Project is Received Load the TaskLists...
		$scope.project.tasklists = TaskList.query( { ProjectID: params.ProjectID }, function() {

			// TaskList Loading Complete
			Dialog.close('tasklist-loader');

		});

		// Loop Through TaskLists
		angular.forEach($scope.project.tasklists, function(tasklist, index) {
			
			// Initialize Global Scope Variable for Tasks on Each Tasklist
			$scope.project.tasklists[index].tasks = {};

		});

	}, function() {

		// Project Loading Complete
		Dialog.close('project-loader');

		// Invalid Project Found
		Dialog.errorMessage('Invalid Project', 'Project Not Found');
	});



});