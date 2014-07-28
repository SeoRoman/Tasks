angular.module('Auth').controller('AuthController', function() {

});

angular.module('Auth').controller('AuthLoginController', function($scope, $window, dialogs, UserService, AUTH_EVENTS, Router) {

	// Clear any previous information
	$scope.creds = {
		username: '',
		password: ''
	};

	$scope.submit = function() {

		// Display Processing Dialog
		var dlg = dialogs.wait('Processing Request', 'Please wait while we authenticate your credentials');

		UserService.login($scope.creds).then(function(user) {

			// Store the Current User into Application.scope
			$scope.setCurrentUser(user);

			// Close Dialog Box
			dlg.close();

			// Redirect to Dashboard
			Router.dashboard();

		}, function() {

			// Close Dialog Box
			dlg.close();

			// Display Dialog Error
			dlg = dialogs.error('Login Error', 'Invalid User Credentials');
		});
	};

});

angular.module('Auth').controller('AuthLogoutController', function($scope, dialogs, Router, UserService) {

	$scope.logout = function() {
		dlg = dialogs.confirm('Logout', 'Are you sure you want to logout?', { dialogFade: true, backdropFade: true});

		dlg.result.then(function(button) {

			UserService.logout().then(function() {
				dlg.close();
				Router.login();
			}, function() {
				dlg = dialogs.error('Logout Error', 'You are not logged in...');
			});
			
			// Yes
		}, function(button) {
			// No
			dlg.close();
		});
	}

});

angular.module('Auth').controller('AuthRegisterController', function() {

});