angular.module('Task').service('TaskComment', function($http, $resource) {

		return $resource('api/v1/projects/:ProjectID/tasklists/:TaskListID/tasks/:TaskID/comments/:CommentID', {TaskListID: '@TaskListID', ProjectID: '@ProjectID', TaskID: '@TaskID', CommentID: '@CommentID'},  
		{
	    	'update': {method:'PUT'},
		});

});

