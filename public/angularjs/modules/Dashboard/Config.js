angular.module('Dashboard').config(function($routeProvider) {

	$routeProvider.when('/dashboard', {
		templateUrl: 'angularjs/modules/Dashboard/views/index.blade.php',
		controller: 'DashboardController',
		resolve: {
			auth: function(Session)
			{
				return false;
			}
		}
	});

});

angular.module('Dashboard').run(function($rootScope, $location, RedirectTo) {

	$rootScope.$on('$routeChangeError', function(current, previous, rejection) {
		console.log('fired');
		RedirectTo.login();
	});

});