angular.module('Application').controller('ApplicationController', function($scope) {

	$scope.currentUser = null;

	$scope.setCurrentUser = function(user) {
		$scope.currentUser = user;
	}

	$scope.clearCurrentUser = function() {
		$scope.currentUser = null;
	}

});