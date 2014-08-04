angular.module('Project').controller('ProjectReadController', function($scope, $routeParams, Dialog, RedirectTo, Project) {

	var params = $routeParams;
	$scope.project = Project.get( { Id: params.id }, function(response ){
		console.log(response);
	});

});