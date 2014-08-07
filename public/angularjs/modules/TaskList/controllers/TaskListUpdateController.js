angular.module('TaskList').controller('TaskListUpdateController', function($scope, $routeParams, Task, RedirectTo, Session) {

	$scope.update = function(ProjectID, TaskListID, data)
	{
		alert('Updating ProjectID: ' + ProjectID + ' TaskListID: ' + TaskListID);
		console.log(data);
	}

});

