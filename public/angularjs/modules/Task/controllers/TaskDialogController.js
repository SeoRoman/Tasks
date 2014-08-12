angular.module('Task').controller('TaskDialogController', function($scope, $modalInstance, TaskService, data) {

	$scope.task = data.task;

	$scope.update = function()
	{
		TaskService.update(data.task, data.index).then(function() {
			$modalInstance.close();
		});
	}

	$scope.store = function()
	{
		TaskService.store($scope.task, data.index).then(function() {
			$modalInstance.close();
		});
	}

	$scope.cancel = function()
	{
		$modalInstance.close();
	}
	
});