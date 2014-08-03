angular.module('Organization').service('Organization', function($http, $resource) {

	this.icon = function()
	{
		return 'fa fa-lg fa-fw fa-home';
	}

	this.route = function()
	{
		return 'organization';
	}

	this.resource = function() {
		return $resource('api/v1/organizations/:Id', {Id: '@id'},  
		{
	    	'update': {method:'PUT'}
		});
	}

});

