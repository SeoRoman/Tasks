angular.module('Project').controller('ProjectController', function($scope, $routeParams, ProjectService, TaskListService) {

	// Load the Project
	ProjectService.fetchProject($routeParams.ProjectID).$promise.then(function(project) {

		TaskListService.fetchTaskLists(project).$promise.then(function(tasklists) {
			
			project.tasklists = tasklists;

			$scope.project = project;

		});

	});

});