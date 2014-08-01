angular.module('Auth').controller('AuthLogoutController', function($scope, Dialog, RedirectTo, Auth) {	

		if ($scope.currentUser) {
				// Display Confirmation Dialog
				confirmDialog = Dialog.confirm('Logout', 'Are you sure you want to logout?', { dialogFade: true, backdropFade: true});

				// Check Result of Option Selected
				confirmDialog.result.then(

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
					confirmDialog.close();
				}
			);
		}
		{
			Dialog.notify('Not Logged In', 'You have not authenticated to the server');
			RedirectTo.login();
		}			
});