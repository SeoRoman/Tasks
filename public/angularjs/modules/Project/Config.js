angular.module('Project').config(function($routeProvider) {

	$routeProvider.when('/project/:id', {
		templateUrl: '/angularjs/modules/Project/views/project.blade.php',
		controller: 'ProjectReadController'
	});

});