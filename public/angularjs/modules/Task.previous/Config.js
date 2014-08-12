angular.module('Task').config(function($routeProvider) {

	$routeProvider.when('/projects/:ProjectID/tasklists/:TaskListID/tasks/:TaskID', {
		templateUrl: '/angularjs/modules/Project/views/project.blade.php'
	});

});