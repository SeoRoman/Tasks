angular.module('Application', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'dialogs.main', 'dialogs.default-translations', 'pascalprecht.translate', 'Auth', 'Dashboard']);

angular.module('Auth', []);

angular.module('Users', []);

angular.module('Offices', []);

angular.module('Dashboard', ['Tasks']);

angular.module('Tasks', ['ui.bootstrap']);

