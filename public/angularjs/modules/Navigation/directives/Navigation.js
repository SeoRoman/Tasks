angular.module('Navigation')
  .directive('navigation', function() {
    return {
      restrict: 'AE',
      controller: 'NavigationController',
      transclude: true,
      replace: true,
      link: function(scope, element, attrs) {
        element.first().menu({
          accordion: true,
          speed: 235,
          closedSign: '<i class="fa fa-plus"></i>',
          openedSign: '<i class="fa fa-minus"></i>'
        });
        scope.getElement = function() {
          return element;
        }
      },
      template: '<nav><ul ng-transclude=""></ul></nav>'
    };
  })/*
  .directive('navGroup', function() {
    return {
      require: ['^navigation'],
      restrict: 'AE',
      controller: 'NavGroupController',
      transclude: true,
      replace: true,
      scope: {
        navicon: '@',
        orgname: '@',
        navIconCaption: '@',
        active: '=?'
      },
      template: 'angularjs/modules/Navigation/views/navGroup.html'
    };
  })
  .directive('navItem', function($window) {
    return {
      require: ['^navigation','^?navGroup'],
      restrict: 'AE',
      controller: 'NavItemController',
      scope: {
        title: '@',
        view: '@',
        click: '@',
        icon: '@',
        iconCaption: '@',
        href: '@',
        target: '@'
      },
      link: function(scope, element, attrs, parentCtrls) {
        var navCtrl = parentCtrls[0],
            navgroupCtrl = parentCtrls[1];
        scope.$watch('active', function(newVal, oldVal) {
          if(newVal) {
            if(angular.isDefined(navgroupCtrl)) navgroupCtrl.setActive(true);
            $window.document.title = scope.title;
          } else {
            if(angular.isDefined(navgroupCtrl)) navgroupCtrl.setActive(false);
          }
        });
        scope.openParents = scope.isActive(scope.view);
        scope.isChild = angular.isDefined(navgroupCtrl);
        scope.openParents = false;
      },
      transclude: true,
      replace: true,
      template: 'angularjs/modules/Navigation/views/navItem.html'
    };
  })*/
;