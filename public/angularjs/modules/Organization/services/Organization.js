angular.module('Organization').service('Organization', function($http, $resource) {
	
	return $resource('api/v1/organizations/:OrgID', {OrgID: '@OrgID'},  
	{
    	'update': {method:'PUT'}
	});

});

