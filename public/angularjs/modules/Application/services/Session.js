angular.module('Auth').service('Session', function($http, $sessionStorage) {

	this.data = {};

	this.save = function() {

	}

	this.update = function() {
		return $http.get('session/retrieve').then(function(response) {
			return response.data;
		})
	}

	this.check = function()
	{
		return $http.get('auth/check');
	}

	this.has = function(key)
	{
		return typeof $sessionStorage[key] !== 'undefined';
	}

	this.add = function(key, value)
	{
		$sessionStorage[key] = value;
	}

	this.remove = function(key)
	{
		delete $sessionStorage[key];
	}

	this.destroy = function()
	{
		$sessionStorage.$reset();
	}

	this.get = function(key)
	{
		return $sessionStorage[key];
	}

});