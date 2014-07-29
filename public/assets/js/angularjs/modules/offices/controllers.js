angular.module('Offices').controller('OfficeController', function($rootScope, $scope, $resource, dialogs, Office) {

	$scope.offices = [];
	$scope.error = false;
	
	Office.query(function(res) {
		$scope.offices = res;
	});		

	$scope.create = function()
	{
		createDialog = dialogs.create('/views/dialogs/offices/create.php', 'CreateOfficeController', {}, {});
	}	

	$scope.update = function(data, id)
	{
		dlg = dialogs.wait('Updating Office', 'Please wait...');

		Office.update({ Id: id }, data, function() {
			dlg.close();
		});
	}

	$scope.delete = function(officeId, index)
	{
		dlg = dialogs.wait('Delete Office', 'Please wait...');

		$scope.offices.splice(index, 1);

		Office.delete({ Id: officeId }, function() {
			dlg.close();
		});
	}

	// Validators
	$scope.validateId = function(id, officeId)
	{
		angular.forEach($scope.offices, function(office, index) {
			if (id !== officeId)
			{
				if (id === office.id)
				{
					dlg = dialogs.error('Validation Error', 'ID must be unique');
				}				
			}
		});

		return false;
	}

	$scope.validateName = function(name, officeId)
	{
		angular.forEach($scope.offices, function(office, index) {
			if (office.id !== officeId)
			{
				if (name === office.name)
				{
					dlg = dialogs.error('Validation Error', 'Name must be unique');
				}
			}
		});

		return false;
	}	

	$scope.$on('offices-create', function(event, args) {
		if (!$scope.validateId(args.office.id, args.office.id))
		{
			
		}
		$scope.offices.push(args.office);
	});
});

angular.module('Offices').controller('CreateOfficeController', function($rootScope, $scope, $modalInstance, dialogs, Office) {
	
	$scope.office = {};

	$scope.save = function()
	{	
		$modalInstance.close();
		loader = dialogs.wait('Creating Office', 'Please wait...');

		Office.save($scope.office, function(office) {
			
			$rootScope.$broadcast('offices-create', { office: $scope.office });
			loader.close();

		}, function() {
			loader.close();
			error = dialogs.error('Error', 'There was a problem with your request');
		});
	}	

	$scope.cancel = function()
	{
		$modalInstance.close();
	}

});