angular.module('TaskList').controller('TaskListController', function($scope, $routeParams, Task, RedirectTo, Session) {

	$scope.droppables = {};
	$scope.droppables[$scope.tasklist.id] = $scope.tasklist.tasks;

	$scope.create = function(ProjectID)
	{
		Dialog.create('','TaskListStoreController', { ProjectID: ProjectID }, {});
	}

	$scope.dropCallBack = function(event, ui, title, $index)
	{

		// Here we will update SQL to assign the task to the TaskList
		angular.forEach($scope.droppables[$index], function(task, index) {

			if (task.tasks_lists_id !== $index)
			{

				console.log('ProjectID: ' + $routeParams.ProjectID);
				console.log('TaskListID: ' + task.tasks_lists_id);
				console.log('TaskID: ' + task.id);

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

