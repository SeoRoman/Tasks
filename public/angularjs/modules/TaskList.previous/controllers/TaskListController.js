angular.module('TaskList').controller('TaskListController', function($rootScope, $scope, $routeParams, TaskList, Dialog) {

	// Listeners
	$rootScope.$on('tasklist-create', function(event, data) {
		$scope.project.tasklists.push(data.tasklist.data);
	});

	$rootScope.$on('tasklist-delete', function(event, data) {	
		var index = $scope.project.tasklists.indexOf(data.tasklist);
		$scope.project.tasklists.splice(index, 1);
	});

	$rootScope.$on('tasklist-update', function(event, data) {
		$scope.project.tasklists[data.index] = data.newTaskList;
	});	

	$rootScope.$on('task-create', function(event, data) {
		$scope.droppables[data.task.data.tasks_lists_id].push(data.task.data);
	});		

	$scope.getNumberOfTasks = function(tasklist)
	{
		return tasklist.tasks.length;
	}

	// Create Dialog Function
	$scope.create = function()
	{
		Dialog.create('/angularjs/modules/TaskList/views/dialogs/create.html','TaskListStoreController', { ProjectID: $scope.project.id }, {});
	}

	$scope.delete = function(tasklist)
	{	
		confirm = Dialog.confirm('Are you sure you want to delete?', 'This action cannot be undone.');

		confirm.result.then(function() {
			var data = { ProjectID: $scope.project.id, TaskListID: tasklist.id };
			
			Dialog.loading('deleting-tasklist');

			TaskList.delete( data, function() {
				
				// Broadcast Delete
				$rootScope.$broadcast('tasklist-delete', { tasklist: tasklist });

				Dialog.close('deleting-tasklist');
			});

		}, function() {
			// No
			confirm.close();
		});
	
	}

	$scope.edit = function(tasklist, index)
	{
		var view = '/angularjs/modules/TaskList/views/dialogs/update.html';
		var controller = 'TaskListUpdateController';
		var data = { ProjectID: $scope.project.id, tasklist: tasklist, index: index };
		var options = {};

		Dialog.create(view, controller, data, options);
	}

});

