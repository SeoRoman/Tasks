angular.module('TaskList').service('TaskList', function($http, $resource) {

		return $resource('api/v1/projects/:ProjectID/tasklists/:TaskListId', {ProjectID: '@ProjectID', TaskListId: '@TaskListId'},  
		{
	    	'update': {method:'PUT'},
		});

});

