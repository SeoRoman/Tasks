angular.module('Project').controller('ProjectController', function($scope, $routeParams, Project, TaskList, Dialog) {

	console.log('Loaded Project Controller');

	// Initialize Scope Variable
	$scope.project = null;
	$scope.droppables = [];
	$scope.task = null;

	// Check Loaded Params
	if ($routeParams.ProjectID !== 'undefined')
	{
		Dialog.loading('project-loader', 'Loading Project');
		$scope.project = Project.get( { ProjectID: $routeParams.ProjectID }, function() {

			Dialog.close('project-loader');
			Dialog.loading('tasklist-loader', 'Loading Tasklists');

			$scope.project.tasklists = TaskList.query( { ProjectID: $routeParams.ProjectID } , function() {
				Dialog.close('tasklist-loader');
			});	
		});
		
	}

});