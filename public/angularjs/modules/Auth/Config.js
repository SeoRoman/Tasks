angular.module('Auth').config(function($routeProvider) {

	$routeProvider.when('/', {
		redirectTo: '/auth/login'
	});

	$routeProvider.when('/auth/login', {
		templateUrl: '/angularjs/modules/Auth/views/Login.blade.php',
		controller: 'AuthLoginController'
	});

	$routeProvider.when('/auth/logout', {
		controller: 'AuthLogoutController'
	});

});