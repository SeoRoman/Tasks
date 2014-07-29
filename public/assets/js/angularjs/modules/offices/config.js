angular.module('Offices').config(function($routeProvider) {

	$routeProvider.when('/office/test', {
		templateUrl: 'views/offices/test.blade.php',
		controller: 'OfficeController'
	});

});