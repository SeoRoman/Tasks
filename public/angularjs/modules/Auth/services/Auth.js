angular.module('Auth').service('Auth', function($http, Session, $q) {

	this.login = function(credentials) {
		return $http.post('auth/login', credentials).then(function(response) {
			return response.data.user;
		});
	}

	this.logout = function() {
		return $http.get('auth/logout').then(function(response) { });
	}

	this.isAuthenticated = function($location) {
		var deferred = $q.defer();

		if (!Session.get('authenticated')) {
			deferred.reject();
		}
		else {
			deferred.resolve();
		}

		return deferred.promise;
	}

});