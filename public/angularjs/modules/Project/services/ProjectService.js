// Fetch = Retrieve from DB
// Get   = Retrieve from Javascript

angular.module('Project').service('ProjectService', function($http, $resource, Dialog, Project) {

	var _project;
		
	this.fetchProject = function(ProjectID) {

		Dialog.wait('project-loader', 'Loading Project');

		return Project.get( { ProjectID: ProjectID } , function(project) {

			_project = project;

			Dialog.close('project-loader');

		}, function() {

			Dialog.errorMessage('fuck');

		});

		//return _project;

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

