/*
 * Module   : Offices
 * Contains : OfficeController, CreateOfficeController, EditOfficeController
 * Author   : Roman Lopez
 * Version  : 1.0
 *
 **********************************************************************************/


/*
 * Controller : OfficeController
 * Methods    : create()
 * Listeners  : 'offices-create'
 *
 **********************************************************************************/
angular.module('Offices').controller('OfficeController', function($scope, Dialog, Office) {

	// Gather All Current Offices
	Office.query(function(offices) {
		$scope.offices = offices;
	});

	// Launch the Create Office Dialog
	$scope.create = function() {
		Dialog.create('/views/dialogs/offices/create.php', 'CreateOfficeController');
	}

	// Listener 'offices-create' from a Broadcast or Emit
	$scope.$on('offices-create', function(event, args) {

		// Push New Office into the Table Data
		$scope.offices.push(args.office);

		// Show Notification Dialog

	});

});

/*
 * Controller : CreateOfficeController
 * Methods    : save(), cancel()
 * Broadcasts : 'offices-create'
 *
 **********************************************************************************/
angular.module('Offices').controller('CreateOfficeController', function($scope, $modalInstance, Dialog, Office, Broadcast) {

	// Init an Empty Scope Property
	$scope.office = {};

	// save() function bound to a click method from view
	$scope.save = function()
	{	
		// Launch Confirmation Dialog
		var confirm = Dialog.confirm('Confirm', 'Are you sure you wish to create this office?');

		// Get Confirmation Response (Yes(), No())
		confirm.result.then(function() {
		
			// Show the Loader Dialog
			Dialog.loading('loader');

			// Attempt to Create New Office
			Office.save($scope.office, function(office) {

				// Close the Original Create Form
				$modalInstance.close();

				// Close the Loader Dialog
				Dialog.close('loader');

				// Send out the Notice
				Broadcast.send('offices-create', { office: $scope.office });	

			}, function(response) {

				// Close the Loader Dialog
				Dialog.close('loader');

				// Show the Error Dialog
				Dialog.error(response);
			});
			
		}, function() {

			// Close the Confirmation
			Dialog.closeAll();

		});

	}	

	// Form was Cancelled
	$scope.cancel = function()
	{
		// Close the Original Create Form
		$modalInstance.close();
	}

});

/*
 * Controller : EditOfficeController
 * Methods    : delete(index, id), update(office, id),
 *
 **********************************************************************************/
angular.module('Offices').controller('EditOfficeController', function($scope, Dialog, Office) {
	
	// delete() function bound to a ng-click method from view
	$scope.delete = function(index, id)
	{
		// Show Loading Dialog
		Dialog.loading('loader');

		// Remove Office from Specified Index
		$scope.offices.splice(index, 1);

		// Resource Delete Request ( data, success(), failure() )
		Office.delete({ Id: id }, function() {

			// CLose the Loading Dialog	
			Dialog.close('loader');
		});
	}

	// update(office, id) function bound to ng-click method form view
	$scope.update = function(office, id)
	{
		// Show Loading Dialog
		Dialog.loading('loader');

		// Resource Update Request - Returns Resource Object with HttpPromise
		// ( parameters, data, success(), failure() )
		var officeTest = Office.update({ Id: id }, office, function() {

			// Close Loading Dialog
			Dialog.close('loader');

		}, function(response) {
			
			// Close Loading Dialogs
			Dialog.close('loader');

			// Show Error Dialog 
			Dialog.error(response);
			
		});

		// Return HttpPromise 
		return officeTest.$promise;

	}
});
