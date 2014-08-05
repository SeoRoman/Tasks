angular.module('Task').controller('TaskReadController', function($scope, $routeParams, Dialog, RedirectTo, Project) {

  var params = $routeParams;
  $scope.task = Task.get( { ProjId: params.ProjId, Id: params.Id }, function(response ){
    console.log(response);
  });

});