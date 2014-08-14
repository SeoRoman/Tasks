angular.module('Task').controller('TaskCommentController', function($scope, TaskService) {

	$scope.comment = {};

	$scope.storeTaskComment = function(task)
	{
		$scope.comment.commentable_type = 'Task';
		$scope.comment.commentable_id = task.id;
		$scope.comment.creator = 1;

		TaskService.storeComment(task, $scope.comment).then(function() {
			$scope.comment = {};
		});
	}

});