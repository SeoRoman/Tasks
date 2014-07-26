angular.module('Auth').controller('AuthController', function() {

});

angular.module('Auth').controller('AuthLoginController', function($scope, $window, dialogs, UserService, AUTH_EVENTS, Router) {

	$scope.creds = {
		username: '',
		password: ''
	};

	$scope.submit = function() {
		var dlg = dialogs.wait('Processing Request', 'Please wait while we authenticate your credentials');

		UserService.login($scope.creds).then(function(user) {
			dlg.close();
			Router.dashboard();
		}, function() {
			dlg.close();
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