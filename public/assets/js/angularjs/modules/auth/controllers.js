angular.module('Auth').controller('AuthController', function() {

});

angular.module('Auth').controller('AuthLoginController', function($scope, dialogs, UserService, NotificationService, AUTH_EVENTS) {

	$scope.creds = {
		username: '',
		password: ''
	};

	$scope.submit = function() {
		UserService.login($scope.creds).then(function(user) {
			$scope.$root.$broadcast(AUTH_EVENTS.loginSuccess, { message: 'Login Successul!' });				
		}, function() {
			dlg = dialogs.error('Login Error', 'Invalid User Credentials');
		});
	};

});

angular.module('Auth').controller('AuthLogoutController', function($scope) {

	$scope.logout = function() {
		console.log('I should logout now...');
	}

});

angular.module('Auth').controller('AuthRegisterController', function() {

});