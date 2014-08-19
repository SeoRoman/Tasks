angular.module('TaskList').controller('TaskListDialogController', function($scope, $modalInstance, TaskListService, ProjectService, Dialog, data) {

	$scope.tasklist = data.tasklist;

	$scope.update = function()
	{
		var project = ProjectService.getProject();
		var tasklist = data.tasklist;

		Dialog.wait('tasklist-update', 'Updating Tasklist');

		TaskListService.update(project, tasklist).$promise.then(function(tasklist) {
			
			Dialog.close('tasklist-update');

			$modalInstance.close();
		});
	}

	$scope.store = function()
	{
		var project = ProjectService.getProject();
		var tasklist = $scope.tasklist;

		console.log($scope.tasklist);

		Dialog.wait('tasklist-create', 'Creating Tasklist: ' + tasklist.title);

		TaskListService.store(project, tasklist).$promise.then(function(tasklist) {
			
			Dialog.close('tasklist-create');

			TaskListService.add(tasklist, project);

			$modalInstance.close();
		});
	}

	$scope.cancel = function()
	{
		$modalInstance.close();
	}
	
});