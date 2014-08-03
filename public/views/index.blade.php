<!doctype html>
<html lang="en" ng-app="Application">
<head>
  <!-- TITLE -->
  <title>Worth Tasks</title>

  <!-- META DATA -->
  <meta charset="UTF-8">
  <meta name="description" content="">
  <meta name="authors" content="">

  <!-- ICONS -->
  <link rel="icon" href="favicon.ico" type="image/x-icon" />

  <!-- STYLESHEETS -->
  <!--<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">-->
  <% css('dependencies/bootstrap.css') %>
  <% css('dependencies/font-awesome.css') %>
  <% css('badges.css') %>
  <% css('animate.css') %>
  <% css('dialogs.css')%>
  <% css('site_default.css') %>

  <% css('dependencies/xeditable.css') %>

  <!-- JAVASCRIPT -->
  <!--<script src="http://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>
  <script src="http://code.jquery.com/ui/1.11.0/jquery-ui.min.js" type="text/javascript"></script>
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.js" type="text/javascript"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.20/angular.js" type="text/javascript"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.20/angular-route.js" type="text/javascript"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.js" type="text/javascript"></script>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.20/angular-animate.js" type="text/javascript"></script>-->
  <%js('dependencies/jquery-2.1.1.min.js')%>
  <%js('dependencies/jquery-ui.min.js')%>
  <%js('dependencies/bootstrap.js')%>

  <!-- Angular Core -->
  <%js('dependencies/angular.js')%>
  <%js('dependencies/angular-route.js')%>
  <%js('dependencies/angular-ui-router.js')%>
  <%js('dependencies/angular-animate.js')%>
  <%js('dependencies/angular-resource.js')%> 
  <%js('dependencies/angular-sanitize.js')%> 
  <%js('dependencies/angular-translate.js')%>
  <%js('dependencies/xeditable.js')%>

  <!-- Angular Add Ons -->
  <%js('extras/dialogs.js')%>
  <%js('extras/angular-translate/service/default-interpolation.js')%>
  <%js('extras/angular-translate/service/storage-key.js')%>
  <%js('extras/angular-translate/service/translate.js')%>
  <%js('extras/angular-translate/filter/translate.js')%>
  <%js('extras/dialogs-default-translations.js')%>
  <%js('extras/ui-bootstrap-tpls-0.11.0.min.js')%>

  <!-- Main Application -->?
  <% angularjs('Application.js') %>

  <!-- Module: Application -->
  <% angularjs('modules/Application/controllers/ApplicationController.js') %>
  <% angularjs('modules/Application/services/Broadcast.js') %>
  <% angularjs('modules/Application/services/Dialog.js') %>
  <% angularjs('modules/Application/services/RedirectTo.js') %>
  <% angularjs('modules/Application/Config.js') %>

  <!-- Module: Navigation -->
  <% angularjs('modules/Navigation/controllers/NavigationController.js') %>
  <% angularjs('modules/Navigation/directives/Navigation.js') %>

  <!-- Module: Organization -->
  <% angularjs('modules/Organization/controllers/OrganizationController.js') %>
  <% angularjs('modules/Organization/services/Organization.js') %>  
  <% angularjs('modules/Organization/Config.js') %>  

  <!-- Module: Auth -->
  <% angularjs('modules/Auth/controllers/AuthLoginController.js') %>
  <% angularjs('modules/Auth/controllers/AuthLogoutController.js') %>
  <% angularjs('modules/Auth/services/Auth.js') %>
  <% angularjs('modules/Auth/services/User.js') %>
  <% angularjs('modules/Auth/Config.js') %>

  <% js('menu.js') %>

 <base href="/#/">
</head>
<body ng-controller="ApplicationController">

    
    <aside id="left-panel">
      <div class="header">
        <span>Worth Finance</span>
      </div>

      <navigation>
        <nav:menu ng-hide="currentUser" click="login" icon="fa fa-lg fa-fw fa-sign-in" title="Login"></nav:menu>
        <nav:menu ng-show="currentUser" click="logout" icon="fa fa-lg fa-fw fa-sign-out" title="Logout"></nav:menu>
        <nav:menu ng-show="currentUser" view="/office/test" icon="fa fa-lg fa-fw fa-home" title="Office"></nav:menu>
        <nav:organizations ng-repeat="org in orgs" title="{{org.title}}" showSlide="false">
          <span class="items">
            <nav:item view="" href="" target="" click="" ng-repeat="project in org.projects" title="{{ project.title }}"></nav:item>
          </span>
        </nav:orgnanizations>      
      </navigation>
    </aside>
    <div id="main">
      <div class="container-fluid">
        <div class="row" ng-show="message">
          <div class="col-lg-6 col-lg-offset-3">
            <div id="message" class="alert alert-{{ alert }}">{{ message }}</div>
          </div>
        </div>
        <div class="spacer-10"></div>
        <div ng-view></div>
      </div>
    </div>
</body>
</html>