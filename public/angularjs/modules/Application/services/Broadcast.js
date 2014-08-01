angular.module('Application').service('Broadcast', function($rootScope) {

	this.send = function(listener, data)
	{
		$rootScope.$broadcast(listener, data);
	}

});