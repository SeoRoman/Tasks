forumApp.controller('ApplicationController', function($rootScope, $scope, $http, $window, AuthService) {

	$scope.currentUser = null;
	/*AuthService.check().then(function(user) {
		$scope.setCurrentUser(user);
	}, function() { return null; })*/
	$scope.isAuthorized = false;

	$rootScope.setCurrentUser = function(user) {
		$scope.currentUser = user;
	}

	$scope.logout = function() {		
		AuthService.logout();
		$scope.setCurrentUser(null);
		$window.location.href = '/#/';
	}

});