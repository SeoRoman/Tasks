angular.module('Auth').controller('AuthLoginController', function($scope, Dialog, RedirectTo, Auth) {

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
	
});
