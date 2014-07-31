/*
 * Module   : Offices
 * Contains : 
 *   - EditOfficeController( $scope, Dialog, Office )
 * Services :
 *   - $scope    : Localized Scope of EditOfficeController
 *   - Dialog    : /modules/application/services/Dialog.js
 *   - Office    : /modules/offices/services/Office.js
 * Author   : Roman Lopez
 * Version  : 1.0
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
