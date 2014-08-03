angular.module('Navigation')
  .controller('NavigationController', function($scope, Organization) {

  	o = Organization.resource();
  	$scope.orgs = o.query();

  	console.log($scope.orgs);

    /*$scope.orgs = [
      {
        icon: 'fa fa-lg fa-fw fa-code',
        iconCaption: 'SysEdge',
        title: 'SysEdge',
        projs: [
          {
            title: 'Project1',
            view: '',
            click: '',
            icon: 'fa fa-lg fa-fw fa-globe',
            iconCaption: 'Project1',
            href: 'javascript:void(0)',
            target: ''
          },
          {
            title: 'Project2',
            view: '',
            click: '',
            icon: 'fa fa-lg fa-fw fa-globe',
            iconCaption: 'Project2',
            href: 'javascript:void(0)',
            target: ''
          }
        ]
      },
      {
        icon: 'fa fa-lg fa-fw fa-home',
        iconCaption: 'Worth Finance',
        title: 'Worth Finance',
        projs: [
          {
            title: 'Project1',
            view: '',
            click: '',
            icon: 'fa fa-lg fa-fw fa-globe',
            iconCaption: 'Project1',
            href: 'javascript:void(0)',
            target: ''
          }
        ]
      }
    ];
    */
  })
  .controller('NavGroupController', function($scope) {
    $scope.active = false;
    this.setActive = function(active) {
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
    $scope.hasIcon = angular.isDefined($scope.icon);
    $scope.hasIconCaption = angular.isDefined($scope.iconCaption);
    $scope.getClick = function(data) {
      if(!angular.isDefined(data)) return '';
      if(angular.isDefined($scope.click)) RedirectTo[data]();
    }
  })
  .controller('NavMenuController', function($rootScope, $scope, $location, RedirectTo) {
    $scope.isChild = false;
    $scope.active = false;

    $scope.isActive = function (viewLocation) {
          $scope.active = viewLocation === $location.path();
          return $scope.active;
      };

      $scope.hasIcon = angular.isDefined($scope.icon);
      $scope.hasIconCaption = angular.isDefined($scope.iconCaption);

      $scope.getClick = function(data) {
        if(!angular.isDefined(data)) return '';
        if(angular.isDefined($scope.click)) RedirectTo[data]();
      }

  })
;