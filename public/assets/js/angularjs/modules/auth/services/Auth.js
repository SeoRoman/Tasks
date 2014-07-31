angular.module('Auth').service('Auth', function($http) {

	this.login = function(credentials) {
		return $http.post('auth/login', credentials).then(function(response) {
			return response.data.user;
		});
	}

	this.logout = function() {
		return $http.get('auth/logout').then(function(response) { });
	}

});