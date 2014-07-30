// Edit Office Controller
angular.module('Offices').controller('EditOfficeController', function($scope, $q, Dialog, Broadcast, Office) {
	
	$scope.delete = function(id, index)
	{
		dlg = Dialog.loading('loader');

		$scope.offices.splice(index, 1);

		Office.delete({ Id: id }, function() {
			Dialog.close('loader');
		});
	}


	// But the actual update() function should return TRUE or FALSE...
	// Problem is, Office.update() returns a Resource object and not BOOLEAN...
	// and if I return TRUE/FALSE within the update callback function it doesn't
	// actually trigger a return TRUE / FALSE....
	$scope.update = function(office, id)
	{
		Dialog.loading('loader');

		console.log(office, id);

		var officeTest = Office.update({ Id: id }, office, function() {
			Dialog.close('loader');
		}, function(response) {
			Dialog.close('loader');
			Dialog.error('error', response);
			// See here, I should return true / false
		});

		return officeTest.$promise;

	}
});