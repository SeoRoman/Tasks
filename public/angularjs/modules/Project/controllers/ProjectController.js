angular.module('Project').controller('ProjectController', function($scope, $routeParams, $location, Dialog, ProjectService, TaskListService, TaskService, UserService) {

	// Init Variables to be Used
	$scope.project = null;
	$scope.tasklist = null;
	$scope.task = null;
	$scope.users = {};

	Dialog.wait('project-loader', 'Loading Project');

	// Load the Project
	ProjectService.fetchProject($routeParams.ProjectID).$promise.then(function(project) {

		// Assign the Project to the Scope
		$scope.project = project;

		Dialog.wait('tasklists-loader', 'Loading TaskLists');

		// Fetch the Tasks for the Project
		TaskListService.fetchTaskLists(project).$promise.then(function(tasklists) {

			// Assign the TaskLists to the Project
			$scope.project.tasklists = tasklists;

			// If a TaskList Exists
			if ($routeParams.TaskListID !== undefined)
			{
				$scope.tasklist = TaskListService.getTaskList($routeParams.TaskListID);

				if ($scope.tasklist === undefined)
				{
					Dialog.close();
					Dialog.errorMessage('TaskList Not Found', 'TaskList does not exist (REDIRECT)');
				}

				if (!TaskListService.belongsTo($scope.tasklist, $scope.project))
				{
					Dialog.close();
					Dialog.errorMessage('TaskList Error', 'TaskList does not belong to this Project. (Need an Error Redirect)');
				};
			}

			Dialog.wait('users-loader', 'Loading Users');

			// Fetch User Accounts
		 	UserService.fetchUsers().$promise.then(function(users) {

		 		// Assign the Users to the Scope
		 		$scope.users = users;

				if ($routeParams.TaskID !== undefined)
				{
					Dialog.wait('task-loader', 'Loading Task');

					TaskService.fetchTask($scope.project, $scope.tasklist, $routeParams.TaskID).$promise.then(function(task) {

						Dialog.close();

						$scope.task = task;

						if ($scope.task === undefined)
						{
							Dialog.errorMessage('Task Not Found', 'Task does not exist');
						}

						if (!TaskService.belongsTo($scope.task, $scope.tasklist))
						{
							Dialog.errorMessage('Task Error', 'Task does not belongs to this TaskList (Need an Error Redirect)');
						}

					});
				}		 

		 	});					

		});

	}, function() {

		Dialog.errorMessage('Invalid Project Found', 'Please Add a Redirect to Error Page Here');

	});

});