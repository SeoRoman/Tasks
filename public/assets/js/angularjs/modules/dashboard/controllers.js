angular.module('Dashboard').controller('DashboardController', function($scope, RedirectTo) {

	if (!$scope.currentUser) { RedirectTo.login(); }

});