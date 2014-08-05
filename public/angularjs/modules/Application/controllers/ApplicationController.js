angular.module('Application').controller('ApplicationController', function($scope, RedirectTo, Session) {

	Session.update().then(function(session) {
		$scope.session = session;
	});

	$scope.previousUrl = null; 

	$scope.setCurrentUser = function(user) {
		$scope.currentUser = user;
	}

	$scope.clearCurrentUser = function() {
		$scope.currentUser = null;
	}

});

