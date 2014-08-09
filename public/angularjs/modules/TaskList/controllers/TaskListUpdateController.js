angular.module('TaskList').controller('TaskListUpdateController', function($rootScope, $scope, $routeParams, $modalInstance, TaskList, RedirectTo, Session, data) {

	/*$scope.updateTitle = function(ProjectID, tasklist, data)
	{
		tasklist.title = data;

		console.log(tasklist);

		TaskList.update( { ProjectID: ProjectID, TaskListID: tasklist.id }, tasklist);
	}
  */

  $scope.tasklist = {};

  $scope.cancel = function()
  {
    $modalInstance.close();
  }

  $scope.store = function()
  {
    var tasklist = $scope.tasklist;

    tasklist.tasks_projects_id = data.ProjectID;

    tasklist.id = data.TaskListID;

    tasklist.title = data;

    console.log('Tasklist ID: '+tasklist.id);
    console.log('Tasklist Title: '+tasklist.title);
    console.log('Tasklist Scope: '+tasklist);

    TaskList.update( { ProjectID: data.ProjectID, TaskListID: data.TaskListID }, function(tasklist) {
      $modalInstance.close();
      $rootScope.$broadcast('tasklist-update', { tasklist: tasklist });
    });

  }

});

