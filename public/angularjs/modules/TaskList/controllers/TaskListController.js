angular.module('TaskList').controller('TaskListController', function($rootScope, $scope, $routeParams, Task, RedirectTo, Session) {

	$scope.droppables = {};
	$scope.droppables[$scope.tasklist.id] = $scope.tasklist.tasks;

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

	$rootScope.$on('task-create', function(event, data) {

		var task = data.task.data;

		$scope.droppables[task.tasks_lists_id].push(task);

	});

});

