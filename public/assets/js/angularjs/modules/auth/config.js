angular.module('Auth').config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'views/demo/index.blade.php'
	});
	/*
	$routeProvider.when('/', {
		templateUrl: 'views/auth/login.blade.php',
		controller: 'AuthController'
	});
*/

	$routeProvider.when('/auth/logout', {
		controller: 'AuthController',
	});

	$routeProvider.when('/auth/register', {
		templateUrl: 'views/auth/register.blade.php',
		controller: 'AuthController'
	});

});