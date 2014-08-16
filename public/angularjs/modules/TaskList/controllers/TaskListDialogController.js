angular.module('TaskList').controller('TaskListDialogController', function($scope, $modalInstance, TaskListService, Dialog, data) {

	$scope.tasklist = data.tasklist;

	$scope.update = function()
	{
		TaskListService.update(data.tasklist, data.index).$promise.then(function() {
			$modalInstance.close();
		});
	}

	$scope.store = function()
	{
		TaskListService.store($scope.tasklist).$promise.then(function() {
			$modalInstance.close();
		});
	}

	$scope.cancel = function()
	{
		$modalInstance.close();
	}
	
});