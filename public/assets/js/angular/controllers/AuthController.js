forumApp.controller('AuthController', function($rootScope, $scope, $route, $http, $location, AUTH_EVENTS, AuthService, NotificationService) {

	$scope.submitted = false;

	$scope.submit = function() {

		$scope.submitted = true;
		$scope.notification = NotificationService;
		$rootScope.$broadcast(AUTH_EVENTS.clear);

		AuthService.login($scope.creds).then(function(response) {
			$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
			$scope.setCurrentUser(response);
		}, function(response) {
			$rootScope.$broadcast(AUTH_EVENTS.loginFailed, { message: response.data.message });
		});
			
	};

	$scope.$on('auth-clear', function() {
		$scope.notification.loading();
	});

	$scope.$on('auth-login-success', function() {
		$scope.notification.success('Login Successful');
		$location.path('/home');
	});

	$scope.$on('auth-login-failed', function(event, data) {
		$scope.notification.error('Error: ' + data.message);
	});

	$scope.$on('auth-session-timeout', function() {

	});

});