angular.module('Offices').controller('EditOfficeController', function($scope, dialogs, Office) {
	
	$scope.update = function(data, index)
	{
		dlg = dialogs.wait('Updating Office', 'Please wait...');

		var originalOffice = $scope.offices[index];

		Office.update({ Id: originalOffice.id }, data, function() {
			dlg.close();
		}, function(response) {
			dlg.close();
			dlg = dialogs.error('Database Error', response.data.message);
			return originalOffice;
		});
	}
});