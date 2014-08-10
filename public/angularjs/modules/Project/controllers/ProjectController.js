angular.module('Project').controller('ProjectController', function($scope, $routeParams, Project, TaskList) {

	console.log('Loaded Project Controller');

	// Initialize Scope Variable
	$scope.project = null;

	// Check Loaded Params
	if ($routeParams.ProjectID !== 'undefined')
	{
		$scope.project = Project.get( { ProjectID: $routeParams.ProjectID }, function() {
			$scope.project.tasklists = TaskList.query( { ProjectID: $routeParams.ProjectID } );	
		});
		
	}

});