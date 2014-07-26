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
  <% css('site_default.css') %>
  <% css('badges.css') %>
  <% css('animate.css') %>
  <% css('dialogs.css')%>

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
  <%js('notification/Notification.js')%>

  <!-- Angular Core -->
  <%js('dependencies/angular.js')%>
  <%js('dependencies/angular-route.js')%>
  <%js('dependencies/angular-ui-router.js')%>
  <%js('dependencies/angular-animate.js')%>
  <%js('dependencies/angular-resource.js')%> 
  <%js('dependencies/angular-sanitize.js')%> 
  <%js('dependencies/angular-translate.js')%>

  <!-- Angular Add Ons -->
  <%js('extras/angular-translate/service/translate.js')%>
  <%js('extras/dialogs-default-translations.js')%>
  <%js('extras/ui-bootstrap-tpls-0.11.0.min.js')%>
  <%js('extras/dialogs.js')%>

  <!-- Angular App -->
  <%js('angularjs/modules/application/Application.js')%>

  <!-- Routes -->
  <%js('angularjs/modules/application/config.js')%>
  <%js('angularjs/modules/auth/config.js')%> 

  <!-- Controllers -->
  <%js('angularjs/modules/application/controllers.js')%> 
  <%js('angularjs/modules/auth/controllers.js')%>

  <!-- Factories -->

  <!-- Services -->
  <%js('angularjs/modules/auth/services.js')%>
  <%js('angularjs/modules/notifications/services.js')%>

  <!-- Constants -->
  <%js('angularjs/modules/auth/constants.js')%>

 <base href="/#/">
</head>
<body ng-controller="ApplicationController">
  <!-- HEADER -->
    <header id="header" class="animated fadeInDown">
      <div id="logo-group">
        <!-- PLACE LOGO HERE -->
        <span id="logo"> Worth Tasks </span>
        <!-- END LOGO PLACEHOLDER -->
      </div>

      <!-- pulled right: nav area -->
      <div class="pull-right">

        <!-- fullscreen button -->
        <div id="fullscreen" class="btn-header transparent pull-right">
          <span> <a href="javascript:void(0);" action="launchFullscreen" title="Full Screen"><i class="fa fa-arrows-alt"></i></a> </span>
        </div>
        <!-- end fullscreen button -->
        
        <!-- logout button -->
        <div id="logout" class="btn-header transparent pull-right" ng-controller="AuthLogoutController">
          <span> <a title="Sign Out" ng-click="logout()"><i class="fa fa-sign-out"></i></a> </span>
        </div>
        <!-- end logout button -->

      </div>
      <!-- end pulled right: nav area -->
    </header>
    <div class="container-fluid">
      <div class="row" ng-show="message">
        <div class="col-lg-6 col-lg-offset-3">
          <div id="message" class="alert alert-{{ alert }}">{{ message }}</div>
        </div>
      </div>
      <div class="spacer-10"></div>
      <div ng-view></div>
</body>
</html>