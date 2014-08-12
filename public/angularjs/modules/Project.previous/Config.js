angular.module('Project').config(function($routeProvider) {

	$routeProvider.when('/projects/:ProjectID', {
		templateUrl: '/angularjs/modules/Project/views/project.blade.php'
	});

});