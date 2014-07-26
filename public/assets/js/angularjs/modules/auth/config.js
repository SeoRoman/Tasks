angular.module('Auth').config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'views/auth/login.blade.php',
		controller: 'AuthLoginController'
	});

	$routeProvider.when('/auth/logout', {
		controller: 'AuthLogoutController',
	});

	$routeProvider.when('/auth/register', {
		templateUrl: 'views/auth/register.blade.php',
		controller: 'AuthRegisterController'
	});

});