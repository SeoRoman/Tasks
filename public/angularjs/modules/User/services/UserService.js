angular.module('User').service('UserService', function($http, $resource, Dialog, User) {

	var _users = {};
	var _user = {};

	this.fetchUsers = function()
	{
		return User.query( { }, function(users) {
			_users = users;
		});		
	}

});
