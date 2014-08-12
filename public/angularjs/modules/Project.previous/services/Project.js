angular.module('Project').service('Project', function($http, $resource) {

		return $resource('api/v1/projects/:ProjectID', { ProjectID: '@ProjectID'},  
		{
	    	'update': {method:'PUT'},
		});

});

