angular.module('Organization').config(function($routeProvider) {

	$routeProvider.when('/organization/:id', {
		templateUrl: "angularjs/modules/Organization/views/Organization.blade.php",
		controller: "OrganizationController"
	});

});