// Create Office Dialog Controller
angular.module('Offices').controller('CreateOfficeController', function($scope, $modalInstance, Dialog, Office, Broadcast) {

	// Init an Empty Scope Property
	$scope.office = {};

	// Attempt to Save the Model
	$scope.save = function()
	{	
		// Launch Confirmation Dialog
		var confirm = Dialog.confirm('create-office-confirm', 'Confirmation Required', 'Are you sure you wish to use the ID: ' + $scope.office.id + '. This action cannot be changed.');

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
				Dialog.error('error', response);
			});
			
		}, function() {

			// Close the Confirmation
			Dialog.close('create-office-confirm');

		});

	}	

	// Form was Cancelled
	$scope.cancel = function()
	{
		// Close the Original Create Form
		$modalInstance.close();
	}

});