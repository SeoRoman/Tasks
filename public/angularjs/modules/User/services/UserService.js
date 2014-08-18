angular.module('User').service('UserService', function($http, $resource, Dialog, User) {

	var _users = {};
	var _user = {};

	this.fetchUsers = function()
	{
	
		Dialog.wait('users-loader', 'Loading Users');

		return User.query( { }, function(users) {

			_users = users;

			// TaskList Loading Complete
			Dialog.close('users-loader');

			console.log('Users Loaded Successfully');

		});		
	}

});
