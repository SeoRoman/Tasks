angular.module('Application').service('CRUD', function($rootScope, Dialog, Broadcast) {

	var _model = null;
	var _createForm = null;

	this.setModel = function(model)
	{
		_model = model;
	}

	this.query = function()
	{
		return _model.query();
	}

	this.create = function(templateUrl, controller)
	{
		_createForm = Dialog.create(templateUrl, controller);
	}

	this.save = function(resource, broadcast)
	{	
		// Show the Loader Dialog
		Dialog.loading('loader');

		// Attempt to Create New Office
		_model.save(resource, function(resource) {

			// Close the Original Create Form
			_createForm.close();

			// Close the Loader Dialog
			Dialog.close('loader');

			// Send out the Notice
			Broadcast.send(broadcast, { resource: resource });	

		}, function(response) {

			// Close the Loader Dialog
			Dialog.close('loader');

			// Show the Error Dialog
			Dialog.error(response);
		});		
	}

	this.createCancel = function()
	{
		_createForm.close();
	}

	this.update = function(resource, id)
	{
		// Show Loading Dialog
		Dialog.loading('loader');

		// Resource Update Request - Returns Resource Object with HttpPromise
		// ( parameters, data, success(), failure() )
		var resourceResponse = _model.update({ Id: id }, resource, function() {

			// Close Loading Dialog
			Dialog.close('loader');

		}, function(response) {
			
			// Close Loading Dialogs
			Dialog.close('loader');

			// Show Error Dialog 
			Dialog.error(response);
			
		});

		// Return HttpPromise 
		return resourceResponse.$promise;		
	}

	this.delete = function()
	{
		// Show Loading Dialog
		Dialog.loading('loader');

		// Resource Delete Request ( data, success(), failure() )
		_model.delete({ Id: id }, function() {

			// CLose the Loading Dialog	
			Dialog.close('loader');
		});		
	}

});