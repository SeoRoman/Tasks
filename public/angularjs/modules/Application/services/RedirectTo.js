angular.module('Application').service('RedirectTo', function($http, $location) {

	this.default = function()
	{
		return this.home();
	}

	this.home = function() {
		return $location.path('/').absUrl();
	}

	this.login = function() {
		return this.home();
	}

	this.logout = function() {
		return $location.path('/auth/logout').absUrl();
	}

	this.organization = function(args) {
		args = args.split(',');
		return $location.path('organization/' + args[0]).absUrl();
	}

	this.dashboard = function() {
		return $location.path('/dashboard').absUrl();
	}

	this.offices = function() {
		return $location.path('/dashboard/offices');
	}

});