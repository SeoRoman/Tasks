angular.module('Project').service('ProjectService', function($http, $resource, Dialog, Project) {

	var _project;
		
	this.loadProject = function(id) {

		Dialog.wait('project-loader', 'Loading Project');

		_project = Project.get( { ProjectID: id } , function() {

			Dialog.close('project-loader');

		}, function() {

			Dialog.errorMessage('fuck');

		});

		return _project;

	}

	this.getProject = function()
	{
		return _project;
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

