angular.module('Auth').service('User', function($http, RedirectTo, Dialog) {

	this.requireAuth = function(user)
	{
		if (!user) { 		
			RedirectTo.login(); 
			Dialog.authRequired();
		}
	}

});