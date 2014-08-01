angular.module('Auth').service('User', function($http, RedirectTo, Dialog) {

	this.isLoggedIn = function()
	{
		return $http.get('/auth/user');
	}

});