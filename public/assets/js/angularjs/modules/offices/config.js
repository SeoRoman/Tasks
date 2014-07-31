angular.module('Offices').config(function($routeProvider) {

	$routeProvider.when('/offices', {
		templateUrl: 'views/offices/index.blade.php',
		controller: 'OfficeController'
	});

});