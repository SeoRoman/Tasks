angular.module('Application', ['ngRoute', 'ngAnimate', 'ngResource', 'ngStorage', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'xeditable', 'dialogs.main', 'dialogs.default-translations', 'pascalprecht.translate', 'Auth', 'Navigation', 'Dashboard', 'Project', 'Task']);

angular.module('Auth', []);

angular.module('Session', []);

angular.module('Organization', ['Project']);

angular.module('Project', ['TaskList']);

angular.module('Navigation', ['Organization']);

angular.module('TaskList', ['Task']);

angular.module('Task', []);

angular.module('Dashboard', []);

angular.module('User', []);

angular.module('Office', []);



