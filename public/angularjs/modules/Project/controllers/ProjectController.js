angular.module('Project').controller('ProjectController', function($scope, $routeParams, Dialog, RedirectTo, Auth) {

	var _project = null;
	var _tasklist = null;
	var _task = null;

	$scope.setProject = function(project)
	{
		_project = project;
	}

	$scope.setTasklist = function(tasklist)
	{
		_tasklist = tasklist;
	}

	$scope.setTask = function(task)
	{
		_task = task;
	}

	$scope.getProject = function()
	{
		return _project;
	}

	$scope.getTasklist = function()
	{
		return _tasklist;
	}

	$scope.getTask = function()
	{
		return _task;
	}

});