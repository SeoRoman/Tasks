angular.module('TaskList').controller('TaskListStoreController', function($rootScope, $scope, $routeParams, $modalInstance, TaskList, RedirectTo, Session, data) {

	$scope.tasklist = {};

	$scope.cancel = function()
	{
		$modalInstance.close();
	}

	$scope.store = function()
	{
		var tasklist = $scope.tasklist;

		tasklist.tasks_projects_id = data.ProjectID;

		tasklist = TaskList.save(tasklist);

		console.log(tasklist);

		//$rootScope.$broadcast('tasklist-create', { tasklist: tasklist });
	}

});

