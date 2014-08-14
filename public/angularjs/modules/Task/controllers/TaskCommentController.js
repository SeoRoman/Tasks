angular.module('Task').controller('TaskCommentController', function($scope, TaskService) {

	$scope.comment = {};

	$scope.storeTaskComment = function(task)
	{
		TaskService.storeComment(task, $scope.comment).then(function() {
			$scope.comment = {};
		});
	}

});