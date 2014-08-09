angular.module('Project').controller('ProjectReadController', function($window, $rootScope, $scope, $routeParams, Dialog, RedirectTo, Project, Task, $location) {

	var params = $routeParams;

	$scope.project = Project.get( { ProjectID: params.ProjectID });

	$scope.openTask = function(ProjectID, TaskListID, TaskID)
	{		
		Dialog.loading('open-task');

		var task = Task.get( { ProjectID: ProjectID, TaskListID: TaskListID, TaskID: TaskID } , function() {
			Dialog.close('open-task');
		});

		$location.path('/projects/' + ProjectID + '/tasklists/' + TaskListID + '/tasks/' + TaskID, false);

		$rootScope.$broadcast('open-task', { task: task });
	}

	$rootScope.$on('tasklist-create', function(event, data) {

		$scope.project.tasklists.push(data.tasklist.data);

	});

	$rootScope.$on('tasklist-update', function(event, data) {
		$scope.project.tasklists.push(data.tasklist.data);
	});

});