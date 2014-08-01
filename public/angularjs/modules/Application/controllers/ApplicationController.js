angular.module('Application').controller('ApplicationController', function($scope, RedirectTo) {

	$scope.currentUser = null;
	$scope.previousUrl = null; /////

	$scope.setCurrentUser = function(user) {
		$scope.currentUser = user;
	}

	$scope.clearCurrentUser = function() {
		$scope.currentUser = null;
	}

});