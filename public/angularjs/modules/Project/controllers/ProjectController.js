angular.module('Project').controller('ProjectController', function($scope, $routeParams, Project) {

	$scope.project = null;
	$scope.tasklist = null;
	$scope.task = null;

	var _projectID = $routeParams.ProjectID;

	var _activeProject = null;
	var _activeTasklist = null;
	var _activeTask = null;

	// Check Loaded Params
	if ($routeParams.ProjectID !== 'undefined')
	{
		$scope.project = Project.get( { ProjectID: _projectID });
	}

	$scope.setActiveProject = function(project)
	{
		_activeProject = project;
	}

	$scope.setActiveTasklist = function(tasklist)
	{
		_activeTasklist = tasklist;
	}

	$scope.setActiveTask = function(task)
	{
		_activeTask = task;
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

	$scope.getActiveProject = function()
	{
		return _activeProject;
	}

	$scope.getActiveTasklist = function()
	{
		return _activeTasklist;
	}

	$scope.getActiveTask = function()
	{
		return _activeTask;
	}
});