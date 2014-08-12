angular.module('Task').service('Task', function($http, $resource) {

		return $resource('api/v1/projects/:ProjectID/tasklists/:TaskListID/tasks/:TaskID', {TaskListID: '@TaskListID', ProjectID: '@ProjectID', TaskID: '@TaskID'},  
		{
	    	'update': {method:'PUT'},
		});

});

