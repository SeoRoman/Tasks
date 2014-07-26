forumApp.factory('AuthService', function($http, Session) {

	var authService = {};

	authService.login = function(credentials) {
		return $http.post('auth/login', credentials)
		.then(function(response) {	
			Session.create(response.data.user.id);
			return response.data.user;
		});
	};

	authService.check = function() {
		return $http.get('auth/check').then(function(response) {
			return response.data;
		});
	};

	authService.logout = function() {
		$http.get('auth/logout').then(function() {
			Session.destroy();
		});		
	}

	authService.isAuthenticated = function() {
		return !!Session.userId;
	};

	return authService;

});