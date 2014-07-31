angular.module('Application').service('CRUD', function($rootScope, Dialog) {

	var _model = null;
	var _createForm = null;

	this.setModel = function(model)
	{
		_model = model;
	}

	this.query = function()
	{
		console.log('get all');
		return _model.query();
	}

	this.create = function()
	{
		_createForm = Dialog.create('/views/dialogs/offices/create.php', 'CreateOfficeController');
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
			Broadcast.send(broadcast, { data: resource });	

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

});