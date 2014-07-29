angular.module('Auth').service('AuthService', function($http) {

	this.login = function(credentials) {
		return $http.post('auth/login', credentials).then(function(response) {
			return response.data.user;
		});
	}

	this.logout = function() {
		return $http.get('auth/logout').then(function(response) { });
	}

});

angular.module('Auth').service('UserService', function($http) {

	this.register = function() {

	}

	this.save = function() {

	}

	this.update = function() {

	}

	this.create = function() {

	}

	this.destroy = function() {

	}

	this.isLoggedIn = function() {
		return _loggedIn;
	}

	this.fails = function() {
		console.log(_error);
		return _error;
	}

	this.getErrorMessage = function() {
		return _error_message;
	}

});