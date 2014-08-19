angular.module('Project').controller('ProjectController', function($scope, $routeParams, $location, Dialog, ProjectService, TaskListService, TaskService, TaskCommentService, UserService) {

	// Init Variables to be Used
	$scope.project = null;
	$scope.tasklist = null;
	$scope.task = {};
	$scope.users = {};
	
	//Dialog.wait('project-loader', 'Loading Project');

	// Load the Project
	ProjectService.fetchProject($routeParams.ProjectID).$promise.then(function(project) {

		// Assign the Project to the Scope
		$scope.project = project;

		//Dialog.wait('tasklists-loader', 'Loading TaskLists');

		// Fetch the Tasks for the Project
		TaskListService.fetchTaskLists(project).$promise.then(function(tasklists) {

			// Assign the TaskLists to the Project
			$scope.project.tasklists = tasklists;

			// If a TaskList Exists
			if ($routeParams.TaskListID !== undefined)
			{
				tasklist = TaskListService.getTaskList($routeParams.TaskListID);

				if (tasklist === undefined)
				{
					//Dialog.close();
					//Dialog.errorMessage('TaskList Not Found', 'TaskList does not exist (NEED REDIRECT)');
				}

				else if (!TaskListService.belongsTo(tasklist, $scope.project))
				{
					//Dialog.close();
					//Dialog.errorMessage('TaskList Error', 'TaskList does not belong to this Project. (NEED REDIRECT)');
				}

				else 
				{
					$scope.tasklist = tasklist;
				}
			}

			//Dialog.wait('users-loader', 'Loading Users');

			// Fetch User Accounts
		 	UserService.fetchUsers().$promise.then(function(users) {

		 		// Assign the Users to the Scope
		 		$scope.users = users;

				if ($routeParams.TaskID !== undefined)
				{
					//Dialog.wait('task-loader', 'Loading Task');

					TaskService.fetchTask($scope.project, $scope.tasklist, $routeParams.TaskID).$promise.then(function(task) {

						if (task === undefined)
						{
							Dialog.errorMessage('Task Not Found', 'Task does not exist (NEED REDIRECT)');
						}

						else if (!TaskService.belongsTo(task, $scope.tasklist))
						{
							Dialog.errorMessage('Task Error', 'Task does not belongs to this TaskList (NEED REDIRECT)');
						}

						else
						{
							$scope.task = task;

							//Dialog.wait('comments-loader', 'Loading Comments');

							TaskCommentService.fetchComments(project, tasklist, task).$promise.then(function(comments) {

								$scope.task.comments = comments;

								Dialog.close();
							});							
						} 

					});
				}	
				else
				{
					$scope.task = null;
					Dialog.close();
				}	 

		 	});					

		});

	}, function() {

		Dialog.errorMessage('Invalid Project Found', 'Project not found in Database. (NEED REDIRECT)');

	});

});