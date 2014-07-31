angular.module('Application').service('RedirectTo', function($http, $location) {

	this.home = function() {
		return $location.path('/').absUrl();
	}

	this.login = function() {
		return this.home();
	}

	this.logout = function() {
		return $location.path('/auth/logout').absUrl();
	}

	this.dashboard = function() {
		return $location.path('/dashboard').absUrl();
	}

});