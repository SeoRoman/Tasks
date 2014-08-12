angular.module('Application').service('Dialog', function(dialogs) {

	var _dialogs = Object();

	this.wait = function(name, title, message) 
	{
		_title = (title !== undefined ? title : 'Processing Request');
		_message = (message != undefined ? message : 'Please wait while your request is processed');

		_dialogs[name] = dialogs.wait(title, message);
	}

	this.authRequired = function()
	{		
		var dialog = _dialogs['authRequired'];

		if (typeof _dialogs['authRequired'] !== undefined || typeof dialog.opened !== undefined || !dialog.opened)
		{
			_dialogs['authRequired'] = dialogs.error('Authentication Required', 'You must be authenticated');
		}
	}

	this.create = function(template, controller, data, options)
	{
		_template = template;
		_controller = controller;
		_data = (data !== undefined ? data : {});
		_options = (options !== undefined ? options : {});

		return dialogs.create(_template, _controller, _data, _options);
	}

	this.notify = function(title, message)
	{
		_title = (title !== undefined ? title : 'Notification');
		_message = (message !== undefined ? message : 'You have been notified');

		dialogs.notify(title, message);
	}

	this.error = function(response) {
		_status = response.status ? ' (' + response.status + ') ' : '';
		_data_status = response.data.status ? ' (' + response.data.status + ') ' : '';

		dialogs.error(response.statusText + _status, response.data.message + _data_status);
	}

	this.errorMessage = function(title, message)
	{
		_title = title ? title : 'Default Title';
		_message = message ? message : 'Default Message';

		dialogs.error(_title, _message);
	}

	this.confirm = function(title, message)
	{
		_title = (title ? title : '');
		_message = (message ? message : '');

		var dialog = dialogs.confirm(title, message);

		return dialog;	
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