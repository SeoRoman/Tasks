angular.module('Application').controller('ApplicationController', function($scope, UserService, NotificationService) {

	$scope.notification = NotificationService;

	$scope.currentUser = null;

	$scope.setCurrentUser = function(user) {
		$scope.currentUser = user;
	}

	$scope.$on('auth-login-attempt', function(event, args) {

		$scope.notification.loading();

	});

	$scope.$on('auth-login-success', function(event, args) {

		$scope.notification.success(args.message);

	});

	$scope.$on('auth-login-failure', function(event, args) {

		$scope.notification.error(args.message);

	});

});