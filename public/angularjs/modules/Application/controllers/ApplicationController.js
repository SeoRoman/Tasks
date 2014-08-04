angular.module('Application').controller('ApplicationController', function($scope, RedirectTo, Session) {


	Session.check().then(function(response) {
		$scope.currentUser = response.data.user;
		Session.add('authenticated', true);
	}, function() {
		$scope.currentUser = null;
		RedirectTo.login();
	});

	$scope.previousUrl = null; 

	$scope.setCurrentUser = function(user) {
		$scope.currentUser = user;
	}

	$scope.clearCurrentUser = function() {
		$scope.currentUser = null;
	}

});