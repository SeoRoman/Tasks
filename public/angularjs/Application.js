angular.module('Application', ['ngRoute', 'ngAnimate', 'ngResource', 'ngStorage', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'xeditable', 'dialogs.main', 'dialogs.default-translations', 'pascalprecht.translate', 'Auth', 'Navigation', 'Dashboard']);

angular.module('Organization', []);

angular.module('Navigation', ['Organization']);

angular.module('Auth', []);

angular.module('Session', []);

angular.module('Dashboard', []);

angular.module('User', []);

angular.module('Office', []);

angular.module('Task', []);

