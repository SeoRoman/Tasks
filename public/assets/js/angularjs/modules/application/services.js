angular.module('Application').service('RedirectTo', function($http, $location) {

	this.home = function() {
		return $location.path('/').absUrl();
	}

	this.login = function() {
		return this.home();
	}

	this.logout = function() {
		return $location.path('/auth/logout').absUrl();
	}

	this.dashboard = function() {
		return $location.path('/dashboard').absUrl();
	}

});

angular.module('Application').service('Broadcast', function($rootScope) {

	this.send = function(listener, data)
	{
		$rootScope.$broadcast(listener, data);
	}

});

angular.module('Application').service('Dialog', function(dialogs) {

	var _dialogs = Object();

	this.loading = function(name) 
	{
		_dialogs[name] = dialogs.wait('Processing Request', 'Please wait while your request is processed');
	}

	this.create = function(name, template, controller, data, options)
	{
		_template = template;
		_controller = controller;
		_data = (data !== undefined ? data : {});
		_options = (options !== undefined ? options : {});

		_dialogs[name] = dialogs.create(_template, _controller, _data, _options);
	}

	this.error = function(name, response) {
		_status = response.status ? ' (' + response.status + ') ' : '';
		_data_status = response.data.status ? ' (' + response.data.status + ') ' : '';

		_dialogs[name] = dialogs.error(response.statusText + _status, response.data.message + _data_status);
	}

	this.confirm = function(name, title, message)
	{
		_title = (title ? title : '');
		_message = (message ? message : '');

		_dialogs[name] = dialogs.confirm(title, message);

		return _dialogs[name];	
	}

	this.close = function(name) {
		var dialog = _dialogs[name];
		dialog.close();
	}

	this.closeAll = function() {
		_dialogs.forEach(function(dialog, index) {
			dialog.close();
		});
	}

});