angular.module('TaskList').controller('TaskListUpdateController', function($scope, $routeParams, TaskList, RedirectTo, Session) {

	$scope.updateTitle = function(ProjectID, tasklist, data)
	{
		tasklist.title = data;
		TaskList.update( { ProjectID: ProjectID, TaskListID: tasklist.id }, tasklist);
	}

});

