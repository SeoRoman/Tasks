angular.module('Tasks').controller('TaskController', function($scope, User, Dialog, Task, CRUD) {

	//User.requireAuth($scope.currentUser);

 	CRUD.setModel(Task.resource());

 	$scope.tasks = CRUD.query();
 	$scope.task = {};

 	$scope.create = function()
 	{
 		CRUD.create('/views/dialogs/tasks/create.php', 'TaskController');
 	}

	// update(office, id) function bound to ng-click method form view
	$scope.update = function(resource, id)
	{
		return CRUD.update(resource, id);
	}

	// delete() function bound to a ng-click method from view
	$scope.delete = function(index, id)
	{
		$scope.tasks.splice(index, 1);	

		CRUD.delete(id);
	}

	$scope.store = function()
	{
		CRUD.save($scope.task, 'tasks-create');
	}

	// Form was Cancelled
	$scope.cancel = function()
	{
		CRUD.createCancel();
	} 	

	// Listener 'offices-create' from a Broadcast or Emit
	$scope.$on('tasks-create', function(event, args) {

		// Push New Office into the Table Data
		$scope.tasks.push(args.resource.data);

		Dialog.notify('Task Created', 'Your task was created successfully');

	});

	/* Specitifcs */

});