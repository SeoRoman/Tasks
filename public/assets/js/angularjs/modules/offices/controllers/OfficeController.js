/*
 * Module   : Offices
 * Contains : 
 *   - OfficeController( $scope, Dialog, Office )
 * Services :
 *   - $scope    : Localized Scope of OfficeController
 *   - Dialog    : /modules/application/services/Dialog.js
 *   - Office    : /modules/offices/services/Office.js
 * Author   : Roman Lopez
 * Version  : 1.0
 *
 **********************************************************************************/

 angular.module('Offices').controller('OfficeController', function($scope, Dialog, Office, CRUD) {

 	CRUD.setModel(Office);

 	$scope.offices = CRUD.query();

 	$scope.create = function()
 	{
 		CRUD.create('/views/dialogs/offices/create.php', 'OfficeController');
 	}

	// Listener 'offices-create' from a Broadcast or Emit
	$scope.$on('offices-create', function(event, args) {

		// Push New Office into the Table Data
		$scope.offices.push(args.data);

	});

});