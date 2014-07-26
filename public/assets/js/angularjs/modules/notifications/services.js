angular.module('Application').service('NotificationService', function() {

	var _status = '';
	var _message = '';

	this.clear = function() {
		_status = null;
		_message = null;
	}

	this.loading = function() {
		_status = 'loading';
		_message = 'Processing Request...';
	}

	this.success = function(message) {
		_status = 'success';
		_message = message;
	}

	this.danger = function(message) {
		this.error(message);
	}

	this.error = function(message) {
		_status = 'error';
		_message = message;
	}

	this.info = function(message) {
		_status = 'info';
		_message = 'message';
	}

	this.setStatus = function(status)
	{
		_status = status;
	}

	this.setMessage = function(message)
	{
		_message = message;
	}

 	this.getStatus = function() {
 		return _status;
 	}

 	this.getMessage = function() {
 		return _message;
 	}

});