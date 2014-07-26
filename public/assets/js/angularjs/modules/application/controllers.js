angular.module('Application').controller('ApplicationController', function($scope, UserService) {

	$scope.currentUser = null;

	$scope.setCurrentUser = function(user) {
		$scope.currentUser = user;
	}

});