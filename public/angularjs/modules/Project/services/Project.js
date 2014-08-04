angular.module('Project').service('Project', function($http, $resource) {

		return $resource('api/v1/projects/:Id', { Id: '@id'},  
		{
	    	'update': {method:'PUT'},
		});

});

