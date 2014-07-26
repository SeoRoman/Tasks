$.root_ = $('body');

var forumApp = angular.module('forumApp', ['ngRoute', 'ngAnimate', 'ngResource']);

forumApp.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'views/auth/site_login.blade.php',
		controller: 'AuthController',
		data: {
			requireAuth: false
		}
	});

	$routeProvider.when('/auth/logout', {
		controller: 'AuthController',
		data: {
			requireAuth: true
		}
	});

	// Forum Index
	$routeProvider.when('/home', {
		templateUrl: 'views/forum/index.blade.php',
		data: {
			requireAuth: true
		}
	});

	// Default Error Route
	$routeProvider.otherwise({
		templateUrl: 'views/error.blade.php',
		data: {
			requireAuth: false
		}
	});

});


forumApp.run(function ($rootScope, $location, AUTH_EVENTS, AuthService, Session) {

  $rootScope.$on('$routeChangeStart', function (event, next) {

  	AuthService.check().then(function(user) {

  		$rootScope.setCurrentUser(user);
  		Session.create(user.id);

		/* Check for Valid Authentication Clientside */
	    if (next.data.requireAuth === true && !AuthService.isAuthenticated()) {	    	
	    	$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
	    	$location.path('/');
	    }

  	}, function() {
  		$location.path('/');
  	})

  });

})
