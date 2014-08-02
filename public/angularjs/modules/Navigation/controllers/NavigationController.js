angular.module('Navigation').controller('NavigationController', function($scope) {
    $scope.orgs = [
      {
        navicon: 'code',
        navIconCaption: '',
        orgname: 'SysEdge',
        projs: [
          {
            title: 'Project1',
            view: '',
            click: '',
            icon: 'globe',
            iconCaption: '',
            href: 'javascript:void(0)',
            target: ''
          },
          {
            title: 'Project2',
            view: '',
            click: '',
            icon: 'globe',
            iconCaption: '',
            href: 'javascript:void(0)',
            target: ''
          }
        ]
      },
      {
        navicon: 'home',
        navIconCaption: '',
        orgname: 'Worth Finance',
        projs: [
          {
            title: 'Project1',
            view: '',
            click: '',
            icon: 'globe',
            iconCaption: '',
            href: 'javascript:void(0)',
            target: ''
          }
        ]
      }
    ];
  })
  .controller('NavGroupController', function($scope) {
    $scope.active = false;
    $scope.hasIcon = angular.isDefined($scope.org.navicon);
    $scope.hasIconCaption = angular.isDefined($scope.org.navIconCaption);
    this.setActive = function() {
      $scope.active = active;
    }
  })
  .controller('NavItemController', function($rootScope, $scope, $location, RedirectTo) {
    $scope.isChild = false;
    $scope.active = false;
    $scope.isActive = function(viewLocation) {
      $scope.active = viewLocation === $location.path();
      return $scope.active;
    };
    $scope.hasIcon = angular.isDefined($scope.proj.icon);
    $scope.hasIconCaption = angular.isDefined($scope.proj.iconCaption);
    $scope.getClick = function(data) {
      if(!angular.isDefined(data)) return '';
      if(angular.isDefined($scope.click)) RedirectTo[data]();
    }
  })
;