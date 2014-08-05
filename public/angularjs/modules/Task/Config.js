angular.module('Task').config(function($routeProvider) {

	$routeProvider.when('/projects/:ProjectID/tasklists/:TaskListID/tasks/:id', {
		templateUrl: '/angularjs/modules/Project/views/project.blade.php',
		controller: 'TaskReadController',
		resolve: {
			project: function(Project, $route) 
			{
				return Project.get( { Id: $route.current.params.ProjectID });
			}
		}
	});

});