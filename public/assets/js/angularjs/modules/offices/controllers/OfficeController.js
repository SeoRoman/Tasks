// Office Page Controller
angular.module('Offices').controller('OfficeController', function($scope, Dialog, Office) {

	// Gather All Current Offices
	Office.query(function(offices) {
		$scope.offices = offices;
	});

	// Launch the Create Office Dialog
	$scope.create = function() {
		Dialog.create('create-office-form', '/views/dialogs/offices/create.php', 'CreateOfficeController');
	}

	// Listeners
	$scope.$on('offices-create', function(event, args) {

		// Push New Office into the Table Data
		$scope.offices.push(args.office);
		
	});

});