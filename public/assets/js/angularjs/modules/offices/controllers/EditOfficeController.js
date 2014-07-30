// Edit Office Controller
angular.module('Offices').controller('EditOfficeController', function($scope, Dialog, Broadcast, Office) {
	
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
		_status = true;

		Dialog.loading('loader');

		return Office.update({ Id: id }, office, function() {
			Dialog.close('loader');

			// See here, I should return true / false
		}, function(response) {
			Dialog.close('loader');
			Dialog.error('error', response);

			_status = false;
			// See here, I should return true / false
		});

		console.log(_status);
		return _status;
	}
});