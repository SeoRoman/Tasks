angular.module('Dashboard').config(function($routeProvider) {

	$routeProvider.when('/dashboard', {
		templateUrl: 'views/dashboard/index.blade.php',
		controller: 'DashboardController'
	});

});