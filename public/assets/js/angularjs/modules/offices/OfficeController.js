	/*
 * Module   : Offices
 * Contains : 
 *   - OfficeController( $scope, Office, CRUD )
 * Services :
 *   - $scope    : Localized Scope of OfficeController
 *   - Office    : /modules/offices/services/Office.js
 *   - CRUD      : /modules/application/services/CRUD.js
 * Author   : Roman Lopez
 * Version  : 1.0
 *
 **********************************************************************************/

 angular.module('Offices').controller('OfficeController', function($scope, Dialog, Office, CRUD) {

 	CRUD.setModel(Office.resource());

 	$scope.offices = CRUD.query();
 	$scope.office = {};

 	$scope.create = function()
 	{
 		CRUD.create('/views/dialogs/offices/create.php', 'OfficeController');
 	}

	// update(office, id) function bound to ng-click method form view
	$scope.update = function(resource, id)
	{
		return CRUD.update(resource, id);
	}

	// delete() function bound to a ng-click method from view
	$scope.delete = function(index, id)
	{
		$scope.offices.splice(index, 1);	

		CRUD.delete(id);
	}

	$scope.store = function()
	{
		CRUD.save($scope.office, 'offices-create');
	}

	// Form was Cancelled
	$scope.cancel = function()
	{
		CRUD.createCancel();
	} 	

	// Listener 'offices-create' from a Broadcast or Emit
	$scope.$on('offices-create', function(event, args) {

		console.log(args);

		// Push New Office into the Table Data
		$scope.offices.push(args.resource.data);

		Dialog.notify('Office Created', 'Your office was created successfully');

	});

});