angular.module('Project').controller('ProjectController', function($scope, $routeParams, $location, Dialog, ProjectService, TaskListService, UserService) {

	Dialog.wait('project-loader', 'Loading Project');

	// Load the Project
	ProjectService.fetchProject($routeParams.ProjectID).$promise.then(function(project) {

		Dialog.wait('tasklists-loader', 'Loading Tasks');

		// Fetch the Tasks for the Project
		TaskListService.fetchTaskLists(project).$promise.then(function(tasklists) {

			// Assign the TaskLists to the Project
			project.tasklists = tasklists;

			// Assign the Project to the Scope
			$scope.project = project;

			Dialog.wait('users-loader', 'Loading Users');

			// Fetch User Accounts
		 	UserService.fetchUsers().$promise.then(function(users) {

		 		Dialog.close();

		 		// Assign the Users to the Scope
		 		$scope.users = users;

		 	});

		});

	}, function() {

		Dialog.errorMessage('Invalid Project Found', 'Please Add a Redirect to Error Page Here');

	});

});