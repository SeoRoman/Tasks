angular.module('TaskList').controller('TaskListUpdateController', function($rootScope, $scope, $routeParams, $modalInstance, TaskList, Dialog, data) {

  $scope.tasklist = data.tasklist;

  $scope.cancel = function()
  {
    $modalInstance.close();
  }

  $scope.store = function()
  {
    var tasklist = $scope.tasklist;

    Dialog.loading('update-task');

    TaskList.update( { ProjectID: tasklist.tasks_projects_id, TaskListID: tasklist.id }, tasklist, function(response) {
      $modalInstance.close();
      Dialog.close('update-task');
      $rootScope.$broadcast('tasklist-update', { newTaskList: response.data, index: data.index });
    });

  }

});

