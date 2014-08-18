// Fetch = Retrieve from DB
// Get   = Retrieve from Javascript

angular.module('Project').service('ProjectService', function($http, $resource, Dialog, Project) {

	var _project;
		
	this.fetchProject = function(id) {
		return Project.get( { ProjectID: id } , function(project) {
			_project = project;
		});
	}

	this.setProject = function(project)
	{
		_project = project;
	}

	this.getProject = function()
	{
		return _project;
	}

	this.setTitle = function(title)
	{
		_project.title = title;
	}

	this.getTitle = function()
	{
		return _project.title;
	}

	this.getId = function()
	{
		return _project.id;
	}
		

});

