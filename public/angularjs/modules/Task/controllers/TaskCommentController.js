angular.module('Task').controller('TaskCommentController', function($scope, TaskCommentService) {

	$scope.comment = {};

	$scope.store = function()
	{
		TaskCommentService.storeComment($scope.task, $scope.comment).$promise.then(function() {
			$scope.comment = {};
		});
	}

});