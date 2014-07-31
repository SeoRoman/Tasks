angular.module('Tasks').config(function($routeProvider) {

	$routeProvider.when('/tasks', {
		templateUrl: 'views/tasks/index.blade.php',
		controller: 'TaskController'
	});

});
