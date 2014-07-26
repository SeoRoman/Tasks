angular.module('flApp', ['ngAnimate'])

.controller('FormCtrl', ['$scope', '$animate', '$http', '$window', function($scope, $animate, $http, $window) {

  // hide error messages until 'submit' event
  $scope.submitted = false;

  // hide success message
  $scope.showMessage = false;

  $scope.showError = false;

  // method called from shakeThat directive
  $scope.submit = function() {
    // Send credentials to Laravel's Auth Controller to the postLogin Method
      var login = $http.post("/auth/login", $scope.creds);
      $scope.showError = false;
      $scope.showMessage = true;
      // If error, show error through MessageService
      login.error(function(message, alert)
      {
        $scope.showError = true;
        // hide success message
        $scope.showMessage = false;
      });
      // If success, redirect user to main page
      login.success(function()
      {
        // show success message
        $scope.showMessage = true;
        $window.location.href = '/';
      });
    
  };

}])

.directive('shakeThat', ['$animate', function($animate) {

  return {
    require: '^form',
    scope: {
      submit: '&',
      submitted: '='
    },
    link: function(scope, element, attrs, form) {

      // listen on submit event
      element.on('submit', function() {

        // tell angular to update scope
        scope.$apply(function() {

          // everything ok -> call submit fn from controller
          if (form.$valid) return scope.submit();

          // show error messages on submit
          scope.submitted = true;

          // shake that form
          $animate.addClass(element, 'animated shake', function() {
            $animate.removeClass(element, 'animated shake');
          });

        });

      });

    }
  };

}]);