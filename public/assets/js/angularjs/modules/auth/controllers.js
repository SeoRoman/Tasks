/*
 * Module: Auth
 *
 * Controller: AuthController
 *
 * Handles: login, logout
 * Directives: $scope, dialogs, Router, UserService
 */

angular.module('Auth').controller('AuthController', function($scope, Dialog, RedirectTo, Auth) {


	// Process a Login Request
	$scope.login = function() {

		// Display Processing Dialog
		Dialog.loading('loader');

		// Attempt to Log the User In
		Auth.login($scope.creds).then(

			// Success Function
			function(user) {

				// Store the Current User into Application.scope
				$scope.setCurrentUser(user);

				// Close Dialog Box
				Dialog.close('loader');

				// Redirect to Dashboard
				RedirectTo.dashboard();

			}, 

			// Failed Function
			function(response) {

				// Close Previous Dialog
				Dialog.close('loader');

				// Dialog with Error
				Dialog.error(response);
			}
		);
	};

	// Process a Logout Request
	$scope.logout = function() {

		if ($scope.currentUser) {
				// Display Confirmation Dialog
				dlg = Dialog.confirm('Logout', 'Are you sure you want to logout?', { dialogFade: true, backdropFade: true});

				// Check Result of Option Selected
				dlg.result.then(

					// Yes Option Selected
					function(button) {

						// Processing Logout Request Dialog
						Dialog.loading('loader');

						// Attempt to Log User Out
						Auth.logout().then(

							// Successful
							function() {

								// Clear Current User
								$scope.clearCurrentUser();

								// Close Previous Dialog
								Dialog.close('loader');

								// Redirect to Login Page
								RedirectTo.login();

							}, 
							
							// Failed (User Not Logged In)
							function(response) {

								// Close Previous Dialog
								Dialog.close('loader');

								// Dialog with Error
								Dialog.error(response);
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
	}	

});