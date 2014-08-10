angular.module('TaskList').controller('TaskListDroppableController', function($rootScope, $scope, $routeParams, Task, RedirectTo, Dialog) {

	$scope.droppables[$scope.tasklist.id] = $scope.tasklist.tasks;

	$scope.tasklist.opened = false;

	console.log($scope.tasklist);

	$scope.loadTasks = function()
	{	
		$scope.tasklist.opened = !$scope.tasklist.opened;

		if ($scope.tasklist.opened) 
		{
			Dialog.loading('tasks-loader', 'Loading Tasks');
			$scope.droppables[$scope.tasklist.id] = Task.query( { ProjectID: $scope.project.id, TaskListID: $scope.tasklist.id } , function() {
				Dialog.close('tasks-loader');


				$scope.tasklist.opts = {
					accept: function(element)
					{
						console.log($(element).data('tasklist-id'));
						console.log($scope.tasklist.id);
						console.log($(element).data('tasklist-id') != $scope.tasklist.id);
						if ($(element).data('tasklist-id') !== $scope.tasklist.id) return true;			
						return false;
					}

				}		

				console.log($scope.droppables[$scope.tasklist.id]);

				$scope.tasklist.taskCount = $scope.droppables[$scope.tasklist.id].length;	
			});
			
		}
		
	}	

	$scope.dropCallBack = function(event, ui, title, $index, tasklist)
	{
		// Here we will update SQL to assign the task to the TaskList
		angular.forEach($scope.droppables[$index], function(task, index) {

			if (task.tasks_lists_id !== $index)
			{

				$scope.tasklist.taskCount = $scope.droppables[$scope.tasklist.id].length;	
				
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