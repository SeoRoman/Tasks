angular.module('Application', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'xeditable', 'dialogs.main', 'dialogs.default-translations', 'pascalprecht.translate', 'Auth', 'Dashboard']);

angular.module('Auth', []);

angular.module('Dashboard', ['Tasks', 'Offices', 'Users']);

angular.module('Users', []);

angular.module('Offices', []);

angular.module('Tasks', []);

