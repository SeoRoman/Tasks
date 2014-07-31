angular.module('Application')
  .directive('navigation', function() {
    return {
      restrict: 'AE',
      controller: ['$scope',function($scope) {

      }],
      transclude: true,
      replace: true,
      link: function(scope, element, attrs) {
        element.first().menu({
          accordion : true,
          speed : 235,
          closedSign : '<i class="fa fa-plus"></i>',
          openedSign : '<i class="fa fa-minus"></i>'
        });

        scope.getElement = function() {
          return element;
        }
      },
      template: '<nav><ul ng-transclude=""></ul></nav>'
    };
  })
  .controller('NavGroupController', function($scope) {
    $scope.active = false;
    $scope.hasIcon = angular.isDefined($scope.icon);
    $scope.hasIconCaption = angular.isDefined($scope.iconCaption);

    this.setActive = function(active) {
      $scope.active = active;
    }
  })
  .directive('navGroup', function() {
    return {
      restrict: 'AE',
      controller: 'NavGroupController',
      transclude: true,
      replace: true,
      scope: {
        icon: '@',
        title: '@',
        iconCaption: '@',
        active: '=?'
      },
      template: '\
      <li ng-class="{active: active}">\
      <a href="">\
      <i ng-if="hasIcon" class="{{ icon }}"><em ng-if="hasIconCaption">{{ iconCaption }}</em></i>\
      <span class="menu-item-parent">{{ title }}</span>\
      </a>\
      <ul ng-transclude=""></ul>\
      </li>',
    };
  })
  .controller('NavItemController', function($rootScope, $scope, $location) {
    $scope.isChild = false;
    $scope.active = false;
    $scope.isActive = function (viewLocation) {
          $scope.active = viewLocation === $location.path();
          return $scope.active;
      };

      $scope.hasIcon = angular.isDefined($scope.icon);
      $scope.hasIconCaption = angular.isDefined($scope.iconCaption);

      $scope.getItemUrl = function(view) {
        if (angular.isDefined($scope.href)) return $scope.href;
        if (!angular.isDefined(view)) return '';
        return '#' + view;
      };

      $scope.getItemTarget = function() {
        return angular.isDefined($scope.target) ? $scope.target : '_self';
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
        icon: '@',
        iconCaption: '@',
        href: '@',
        target: '@'
      },
      link: function(scope, element, attrs, parentCtrls) {
        var navCtrl = parentCtrls[0],
            navgroupCtrl = parentCtrls[1];

        scope.$watch('active', function(newVal, oldVal) {
          if (newVal) {
            if (angular.isDefined(navgroupCtrl)) navgroupCtrl.setActive(true);
            $window.document.title = scope.title;
            scope.setBreadcrumb();
          } else {
            if (angular.isDefined(navgroupCtrl)) navgroupCtrl.setActive(false);
          }
        });

        scope.openParents = scope.isActive(scope.view);
        scope.isChild = angular.isDefined(navgroupCtrl);
        scope.setBreadcrumb = function() {
            var crumbs = [];
            crumbs.push(scope.title);
            // get parent menus
          var test = element.parents('nav li').each(function() {
            var el = angular.element(this);
            var parent = el.find('.menu-item-parent:eq(0)');
            crumbs.push(parent.data('localize').trim());
            if (scope.openParents) {
              // open menu on first load
              parent.trigger('click');
            }
          });
          // this should be only fired upon first load so let's set this to false now
          scope.openParents = false;
        };
      },
      transclude: true,
      replace: true,
      template: '\
      <li ng-class="{active: isActive(view)}">\
      <a href="{{ getItemUrl(view) }}" target="{{ getItemTarget() }}" title="{{ title}}">\
      <i ng-if="hasIcon" class="{{ icon }}"><em ng-if="hasIconCaption">{{ iconCaption }}</em></i>\
      <span ng-class="{\'menu-item-parent\': !isChild}">{{ title }}</span>\
      <span ng-transclude=""></span>\
      </a>\
      </li>'
    };
  })
;