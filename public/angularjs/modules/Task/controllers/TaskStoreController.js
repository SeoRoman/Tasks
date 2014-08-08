angular.module('Task').controller('TaskStoreController', function($rootScope, $location, $scope, $modalInstance, Task, data) {

	$scope.task = {};

	$scope.cancel = function()
	{
		$modalInstance.close();
	}

	$scope.store = function()
	{

		var task = $scope.task;

		task.tasks_lists_id = data.TaskListID;
		task.user_id = 1;
		task.office_id = 1;

		Task.save(task, data, function(task) {
			$modalInstance.close();
			
			$rootScope.$broadcast('task-create', { task: task });
		});

	}

});