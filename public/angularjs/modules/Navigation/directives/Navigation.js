angular.module('Application')
  .directive('navigation', function() {
    return {
      restrict: 'AE',
      controller: 'NavigationController',
      transclude: true,
      replace: true,
      template: '<nav><ul ng-transclude=""></ul></nav>'
    };
  })
  .directive('navOrganizations', function() {
    return {
      require: ['^navigation'],
      restrict: 'AE',
      transclude: true,
      replace: true,
      controller: function($scope, $element)
      {
        $scope.click = function()
        {
          var status = $element.attr('showSlide');

          var status = status == 'true' ? 'false' : 'true';

          $element.attr('showSlide', status);
          console.log($element);
        }
      },
      link: function(scope, element, attrs) {

        var closedSign = '<i class="fa fa-plus"></i>';
        var openedSign = '<i class="fa fa-minus"></i>';

        element.find('a').append("<b class='collapse-sign'>" + closedSign + "</b>");

        console.log(attrs.showslide);

        //set up the watch to toggle the element.
        scope.$watch(attrs.showslide, function(v) {
           
          console.log('V='+v);

           /*if(v == 'true') {
              element.find('.items').slideDown();
           }
           else {
              element.find('.items').slideUp();
           }*/
        });

        console.log(attrs);

      },
      scope: {
        title: '@',
        active: '=?'
      },
      templateUrl: 'angularjs/modules/Navigation/views/navGroup.html'
    };
  })

  .directive('navGroup', function() {
    return {
      require: ['^navigation'],
      restrict: 'AE',
      transclude: true,
      replace: true,
      link: function(scope, element, attrs) {

        // Somwhere in here... do the accordion based on a toggle...

        var closedSign = '<i class="fa fa-plus"></i>';
        var openedSign = '<i class="fa fa-minus"></i>';

        element.find('a').append("<b class='collapse-sign'>" + closedSign + "</b>");

        if (element.hasClass('opened'))
        {
            element.toggleClass('opened');
            element.find('a').append("<b class='collapse-sign'>" + openedSign + "</b>");
        }
        else
        {
            element.toggleClass('opened');
            element.find('a').append("<b class='collapse-sign'>" + closedSign + "</b>");
        }

        console.log(attrs);

      },
      scope: {
        title: '@',
        active: '=?'
      },
      templateUrl: 'angularjs/modules/Navigation/views/navGroup.html'
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
        href: '@',
        target: '@'
      },
      link: function(scope, element, attrs, parentCtrls) {

        var nav = element.parent().parent().parent().parent();

        /*$(nav).first().menu({
          accordion: true,
          speed: 235,
          closedSign: '<i class="fa fa-plus"></i>',
          openedSign: '<i class="fa fa-minus"></i>'
        });
        scope.getElement = function() {
          return element;
        }*/

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
      templateUrl: 'angularjs/modules/Navigation/views/navItem.html'
    };
  })
  .directive('navMenu', function($window) {
    return {
      require: ['^navigation','^?navGroup'],
      restrict: 'AE',
      controller: 'NavMenuController',
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
          if (newVal) {
            if (angular.isDefined(navgroupCtrl)) navgroupCtrl.setActive(true);
            $window.document.title = scope.title;
            //scope.setBreadcrumb();
          } else {
            if (angular.isDefined(navgroupCtrl)) navgroupCtrl.setActive(false);
          }
        });

        scope.openParents = scope.isActive(scope.view);
        scope.isChild = angular.isDefined(navgroupCtrl);

          // this should be only fired upon first load so let's set this to false now
          scope.openParents = false;
      },
      transclude: true,
      replace: true,
      template: '\
      <li ng-class="{active: isActive(view)}">\
      <a href="{{ href }}" ng-click="getClick(click)" target="{{ target }}" title="{{ title }}">\
      <i ng-if="hasIcon" class="{{ icon }}"><em ng-if="hasIconCaption">{{ iconCaption }}</em></i>\
      <span ng-class="{\'menu-item-parent\': !isChild}">{{ title }}</span>\
      </a></li>'
    };
  })
;