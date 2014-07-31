/*
 * Module   : Offices
 * Contains : 
 *   - EditOfficeController( $scope, Dialog, Office )
 * Services :
 *   - $scope         : Localized Scope of EditOfficeController
 *   - $modalInstance : Instance of Opened Create Form Dialog
 *   - Dialog         : /modules/application/services/Dialog.js
 *   - Office         : /modules/offices/services/Office.js
 *   - Broadcast      : /modules/application/services/Broadcast.js
 * Author   : Roman Lopez
 * Version  : 1.0
 *
 **********************************************************************************/

 angular.module('Offices').controller('CreateOfficeController', function($scope, Dialog, Office, Broadcast, CRUD) {

	// Init an Empty Scope Property
	$scope.office = {};

	CRUD.setModel(Office);

	$scope.save = function()
	{
		CRUD.save($scope.office, 'offices-create');
	}

	// Form was Cancelled
	$scope.cancel = function()
	{
		CRUD.createCancel();
	}

});