angular.module('Session').controller('SessionController', function($scope) {

	var _id;
	var _userId;
	var _username;
	var _firstName
	var _lastName;

	// Standard API CRUD
		$scope.create = function(user)
		{
			_userId = user.id;
		}	

		$scope.destroy = function ()
		{

		}

});