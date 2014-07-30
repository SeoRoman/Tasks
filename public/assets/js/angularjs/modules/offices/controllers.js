

angular.module('Offices').controller('OfficeController2', function($rootScope, $scope, $resource, dialogs, Office) {

	$scope.offices = [];
	$scope.office = {};	
	
	Office.query(function(res) {
		$scope.offices = res;
	});		

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

});
