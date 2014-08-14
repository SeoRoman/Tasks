angular.module('Application', ['ngDragDrop', 'ngRoute', 'ngAnimate', 'ngResource', 'ngStorage', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'xeditable', 'dialogs.main', 'dialogs.default-translations', 'pascalprecht.translate', 'angularMoment', 'Auth', 'Navigation', 'Dashboard', 'Project', 'Task']);

angular.module('Auth', []);

angular.module('Session', []);

angular.module('Navigation', ['Organization']);

angular.module('Organization', ['Project']);

angular.module('Project', ['TaskList']);

angular.module('TaskList', ['Task']);

angular.module('Task', []);

angular.module('Dashboard', []);

angular.module('User', []);

angular.module('Office', []);

angular.module('Application').constant('angularMomentConfig', {
    preprocess: null, // optional
    timezone: 'America/Chicago' // optional
});

