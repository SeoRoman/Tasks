angular.module('Application').controller('DemoController', function($scope, User) {

	$scope.testpage = '';

	$scope.module = function(module)
	{
		$scope.testpage = module;
	}

});