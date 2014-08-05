angular.module('Task').service('Task', function($http, $resource) {

		return $resource('api/v1/projects/:ProjectID/tasklists/:TaskListID/tasks/:Id', {TaskListID: '@TaskListID', ProjectID: '@ProjectID', Id: '@Id'},  
		{
	    	'update': {method:'PUT'},
		});

});

