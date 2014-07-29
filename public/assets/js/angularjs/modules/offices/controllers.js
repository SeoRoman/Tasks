angular.module('Offices').controller('OfficeController', function($scope, $resource, dialogs, Office) {

	$scope.data = {};

	$scope.data.offices = null;

	Office.query(function(res) {
		$scope.data.offices = res;
	});

	$scope.create = function()
	{
		dlg = dialogs.create('/views/dialogs/offices/create.html', 'OfficeController', {}, {});
	}

	$scope.cancel = function()
	{
		dlg.close();
	}

	$scope.store = function()
	{	
		console.log('Saving Office...');
		console.log($scope.new);
		Office.save($scope.new);
		dlg.close();	
	}

	$scope.update = function(office, id)
	{
		Office.update({ id: id }, office);
	}

});