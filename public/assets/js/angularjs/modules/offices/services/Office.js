angular.module('Offices').service('Office', function($http, $resource) {

	this.test = function()
	{
		alert('woot');
	}

	this.resource = function() {
		return $resource('api/v1/offices/:Id', {Id: '@Id'},  
		{
			'get':    {method:'GET'},
	    	'save':   {method:'POST'},
	    	'update': {method:'PUT'},
		    'query':  {method:'GET', isArray:true},
		    'remove': {method:'DELETE'},
		    'delete': {method:'DELETE'} 
		});
	}

});

