/*
 * Module: Auth
 *
 * Controller: AuthController
 *
 * Handles: login, logout
 * Directives: $scope, dialogs, Router, UserService
 */

angular.module('Auth').controller('AuthController', function($scope, dialogs, RedirectTo, AuthService) {


	// Process a Login Request
	$scope.login = function() {

		// Display Processing Dialog
		var dlg = dialogs.wait('Processing Request', 'Please wait while we authenticate your credentials');

		// Attempt to Log the User In
		AuthService.login($scope.creds).then(

			// Success Function
			function(user) {

				// Store the Current User into Application.scope
				$scope.setCurrentUser(user);

				// Close Dialog Box
				dlg.close();

				// Redirect to Dashboard
				RedirectTo.dashboard();

			}, 

			// Failed Function
			function() {

				// Close Previous Dialog
				dlg.close();

				// Dialog with Error
				dlg = dialogs.error('Login Error', 'Invalid User Credentials');
			}
		);
	};

	// Process a Logout Request
	$scope.logout = function() {

		// Display Confirmation Dialog
		dlg = dialogs.confirm('Logout', 'Are you sure you want to logout?', { dialogFade: true, backdropFade: true});

		// Check Result of Option Selected
		dlg.result.then(

			// Yes Option Selected
			function(button) {

				// Processing Logout Request Dialog
				dlg = dialogs.wait('Processing Request', 'Logging you out...');

				// Attempt to Log User Out
				AuthService.logout().then(

					// Successful
					function() {

						// Clear Current User
						$scope.clearCurrentUser();

						// Close Previous Dialog
						dlg.close();

						// Redirect to Login Page
						RedirectTo.login();

					}, 
					
					// Failed (User Not Logged In)
					function() {

						// Close Previous Dialog
						dlg.close();

						// Dialog with Error
						dlg = dialogs.error('Logout Error', 'You are not logged in...');
					}
				);
			
			
		}, 

			// No Option Selected
			function(button) {

				// Close Dialog Box
				dlg.close();
			}
		);
	};

});