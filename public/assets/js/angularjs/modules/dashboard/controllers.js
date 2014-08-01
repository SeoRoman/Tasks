angular.module('Dashboard').controller('DashboardController', function($scope, User, Dialog, RedirectTo) {

	User.isLoggedIn().then(function(response) {
		$scope.setCurrentUser(response.data.user);
	}, function() {
		$scope.setCurrentUser(null);
		Dialog.authRequired();
		RedirectTo.login();
	})

});