angular.module('Task').service('Task', function($http, $resource) {

		return $resource('api/v1/project/:ProjId/tasks/:Id', {OrgId: '@OrgId', ProjId: '@ProjId', Id: '@Id'},  
		{
	    	'update': {method:'PUT'},
		});

});

