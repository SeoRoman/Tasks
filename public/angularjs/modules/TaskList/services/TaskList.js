angular.module('TaskList').service('TaskList', function($http, $resource) {

		return $resource('api/v1/projects/:ProjectID/tasklists/:TaskListID', {ProjectID: '@ProjectID', TaskListID: '@TaskListID'},  
		{
	    	'update': {method:'PUT'},
		});

});

