angular.module('Project').controller('ProjectController', function($scope, $routeParams, ProjectService, TaskListService, UserService) {

	// Load the Project
	ProjectService.fetchProject($routeParams.ProjectID).$promise.then(function(project) {

		// Fetch the Tasks for the Project
		TaskListService.fetchTaskLists(project).$promise.then(function(tasklists) {

			project.tasklists = tasklists;

			$scope.project = project;

			ProjectService.setProject(project);

			// Fetch User Accounts
		 	UserService.fetchUsers().$promise.then(function(users) {

		 		$scope.users = users;

		 	});

		});

	});

});