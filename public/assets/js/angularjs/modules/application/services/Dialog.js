angular.module('Application').service('Dialog', function(dialogs) {

	var _dialogs = Object();

	this.loading = function(name) 
	{
		_dialogs[name] = dialogs.wait('Processing Request', 'Please wait while your request is processed');
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