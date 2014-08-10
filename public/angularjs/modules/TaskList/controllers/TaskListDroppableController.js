angular.module('TaskList').controller('TaskListDroppableController', function($rootScope, $scope, $routeParams, Task, RedirectTo, Session) {

	$scope.tasklist.opened = false;

	$scope.droppables = {};
	$scope.droppables[$scope.tasklist.id] = $scope.tasklist.tasks;

	$scope.loadTasks = function()
	{	
		$scope.tasklist.opened = !$scope.tasklist.opened;

		if ($scope.tasklist.opened) 
		{
			$scope.droppables[$scope.tasklist.id] = Task.query( { ProjectID: $scope.project.id, TaskListID: $scope.tasklist.id } );
		}
		
	}	

	$scope.dropCallBack = function(event, ui, title, $index, tasklist)
	{
		// Here we will update SQL to assign the task to the TaskList
		angular.forEach($scope.droppables[$index], function(task, index) {

			if (task.tasks_lists_id !== $index)
			{
				//Update the Task's TaskList ID
				var task = Task.get( { ProjectID: $routeParams.ProjectID, TaskListID: task.tasks_lists_id, TaskID: task.id }, function() {
					task.tasks_lists_id = $index;
					task.$update( { ProjectID: $routeParams.ProjectID, TaskListID: task.tasks_lists_id, TaskID: task.id });
				});
			}

			;
		});

		// TaskList ID = $index
		// taskIdArray = Array of 
	}

	$scope.stopCallBack = function(event, ui, TaskID)
	{
		alert(TaskID);
	}


});