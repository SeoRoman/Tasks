angular.module('Auth').config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'views/auth/index.blade.php',
		controller: 'AuthController'
	});

	$routeProvider.when('/auth/logout', {
		controller: 'AuthController',
	});

	$routeProvider.when('/auth/register', {
		templateUrl: 'views/auth/register.blade.php',
		controller: 'AuthController'
	});

});