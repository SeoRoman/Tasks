angular.module('Tasks').controller('TasksController', function($scope, dialogs) {

	$scope.data = {

		columnOne: [

			{
				id: 1,
				title: 'Column One Task #1'
			},
			{
				id: 2,
				title: 'Column One Task #2'
			}

		],

		columnTwo: [

			{
				id: 3,
				title: 'Column Two Task #1'
			}

		],

		columnThree: [

			{
				id: 4,
				title: 'Column Three Task #1'
			},
			{
				id: 5,
				title: 'Column Three Task #2'
			}

		],

		columnFour: [

			{
				id: 6,
				title: 'Column Four Task #1'
			},
			{
				id: 7,
				title: 'Column Four Task #2'
			},
			{
				id: 8,
				title: 'Column Four Task #3'
			},
			{
				id: 9,
				title: 'Column Four Task #4'
			},
			{
				id: 10,
				title: 'Column Four Task #5'
			}

		]

	}

	$scope.togglePanel = function(task)
	{
		if (task.show) { task.show = false; }
		else { task.show = true; }
	}

	$scope.create = function()
	{
		dlg = dialogs.create('/dialogs/tasks/create.html', 'CreateTaskController', {}, {});
	}

});

angular.module('Tasks').controller('CreateTaskController', function($scope, $modalInstance, data) {

	$scope.data = data;

	$scope.hitEnter = function(evt)
	{
		if(angular.equals(evt.keyCode,13))
			$scope.done();
	}

	$scope.save = function()
	{
		
	}

	$scope.done = function()
	{
		$modalInstance.close($scope.data);
	}

});