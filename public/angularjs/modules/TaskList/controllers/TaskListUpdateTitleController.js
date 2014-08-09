angular.module('TaskList').controller('TaskListUpdateTitleController', function($scope, $routeParams, Dialog, TaskList, RedirectTo, Session) {

  $scope.update = function(ProjectID, TaskListID)
  {
    Dialog.create('/angularjs/modules/TaskList/views/dialogs/update.html','TaskListUpdateController', { ProjectID: ProjectID, TaskListID: TaskListID }, {});
  }

});