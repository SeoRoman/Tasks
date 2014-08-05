angular.module('Task').config(function($routeProvider) {

	$routeProvider.when('/projects/:ProjectID/tasklists/:TaskListID/tasks/:TaskID', {
		templateUrl: '/angularjs/modules/Project/views/project.blade.php',
		controller: 'TaskReadController',
		resolve: {
			project: function(Project, $route) 
			{
				var params = $route.current.params;
				return Project.get( { ProjectID: params.ProjectID });
			},
			task: function(Task, $route)
			{
				var params = $route.current.params;
				return Task.get( { ProjectID: params.ProjectID, TaskListID: params.TaskListID, TaskID: params.TaskID } );
			}
		}
	});

});