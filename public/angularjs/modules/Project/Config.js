angular.module('Project').config(function($routeProvider) {

	$routeProvider.when('/projects/:id', {
		templateUrl: '/angularjs/modules/Project/views/project.blade.php'
	});

});