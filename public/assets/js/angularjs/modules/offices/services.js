angular.module('Offices').service('Office', function($http, $resource) {

	return $resource('api/v1/offices/:id', {id: '@id'},  
		{
			'get':    {method:'GET'},
	    	'save':   {method:'POST'},
	    	'update': {method:'PUT'},
		    'query':  {method:'GET', isArray:true},
		    'remove': {method:'DELETE'},
		    'delete': {method:'DELETE'} 
		}
     );

	//return $resource('api/v1/offices');

});

