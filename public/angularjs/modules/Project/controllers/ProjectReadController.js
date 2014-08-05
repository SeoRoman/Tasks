angular.module('Project').controller('ProjectReadController', function($window, $rootScope, $scope, $routeParams, Dialog, RedirectTo, Project, $location) {

	console.log('entered');

	var params = $routeParams;
	$scope.project = Project.get( { Id: params.id });

	$rootScope.$on('open-task', function(event, data) {

		console.log(data);
		console.log(data.task);
		console.log(data.task.id);

		$location.path('/projects/'+data.projectId+'/tasklists/'+data.taskListId+'/tasks/'+data.taskId, false);

		$scope.task = data.task;
	});

});