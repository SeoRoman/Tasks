angular.module('Project').controller('ProjectReadController', function($window, $rootScope, $scope, $routeParams, Dialog, RedirectTo, Project, Task, $location) {

	var params = $routeParams;

	$scope.project = Project.get( { ProjectID: params.ProjectID });

	$scope.openTask = function(ProjectID, TaskListID, TaskID)
	{
		var task = Task.get( { ProjectID: ProjectID, TaskListID: TaskListID, TaskID: TaskID } );

		$location.path('/projects/' + ProjectID + '/tasklists/' + TaskListID + '/tasks/' + TaskID, false);

		$rootScope.$broadcast('open-task', { task: task });
	}

	$rootScope.$on('tasklist-create', function(data) {

		$scope.project.tasklists.push(data.tasklist);

	});

});