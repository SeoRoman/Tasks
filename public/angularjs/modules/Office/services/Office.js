angular.module('Offices').service('Office', function($http, $resource) {

		return $resource('api/v1/offices/:Id', {Id: '@Id'},  
		{
	    	'update': {method:'PUT'},
		});

});

