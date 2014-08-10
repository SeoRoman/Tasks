angular.module('TaskList').controller('TaskListStoreController', function($rootScope, $scope, $routeParams, $modalInstance, TaskList, Dialog, data) {

	$scope.tasklist = {};

	$scope.cancel = function()
	{
		$modalInstance.close();
	}

	$scope.store = function()
	{
		var tasklist = $scope.tasklist;

		tasklist.tasks_projects_id = data.ProjectID;

		Dialog.loading('tasklist-create');

		TaskList.save(tasklist, { ProjectID: data.ProjectID }, function(tasklist) {
			$modalInstance.close();
			Dialog.close('tasklist-create');
			$rootScope.$broadcast('tasklist-create', { tasklist: tasklist });
		});

	}

});

