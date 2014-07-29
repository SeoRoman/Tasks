angular.module('Offices').controller('OfficeController', function($scope, $resource, dialogs, Office) {

	$scope.offices = [];
	
	Office.query(function(res) {
		$scope.offices = res;
	});		

	$scope.create = function()
	{
		dlg = dialogs.create('/views/dialogs/offices/create.html', 'CreateOfficeController', {}, {});
	}

	$scope.update = function(office, id)
	{
		Office.update({ Id: id }, office);
	}

	// Watchers
	$scope.$on('offices-create', function(event, args) {
		$scope.offices.push(args.office);
	});

});


angular.module('Offices').controller('CreateOfficeController', function($rootScope, $scope, $modalInstance, Office) {

	$scope.office = {};

	$scope.cancel = function()
	{
		$modalInstance.close();
	}

	$scope.store = function()
	{	
		console.log($scope.office);

		var resource = Office.save($scope.office);

		$rootScope.$broadcast('offices-create', { office: resource } );

		$modalInstance.close();	
	}

});