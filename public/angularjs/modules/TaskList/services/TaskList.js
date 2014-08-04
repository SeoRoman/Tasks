angular.module('TaskList').service('TaskList', function($http, $resource) {

		return $resource('api/v1/tasklist/:TaskListId/tasks/:Id', {TaskListId: '@TaskListId', Id: '@Id'},  
		{
	    	'update': {method:'PUT'},
		});

});

