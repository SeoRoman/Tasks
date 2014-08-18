angular.module('Task').controller('TaskCommentController', function($scope, TaskCommentService) {

	$scope.comment = {};

	$scope.storeTaskComment = function()
	{
		TaskCommentService.store($scope.task, $scope.comment).$promise.then(function() {
			$scope.comment = {};
		});
	}

});