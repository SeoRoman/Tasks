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
  <%js('menu.js')%>

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

<<<<<<< HEAD
  @include('includes/modules/application')
  <%js('angularjs/modules/application/directives.js')%>
=======
  <!-- Module: Application -->
  <%js('angularjs/modules/application/Application.js')%>
  <%js('angularjs/modules/application/config.js')%>
  <%js('angularjs/modules/application/services/Broadcast.js')%>
  <%js('angularjs/modules/application/services/Dialog.js')%>
  <%js('angularjs/modules/application/services/RedirectTo.js')%>
  <%js('angularjs/modules/application/services/CRUD.js')%>
  <%js('angularjs/modules/application/controllers/ApplicationController.js')%>
>>>>>>> origin/master

  <!-- Module: Auth -->
  <%js('angularjs/modules/auth/config.js')%> 
  <%js('angularjs/modules/auth/controllers.js')%>
  <%js('angularjs/modules/auth/services.js')%>
  <%js('angularjs/modules/auth/constants.js')%>

  <!-- Module: Dashboard -->
  <%js('angularjs/modules/dashboard/config.js')%> 
  <%js('angularjs/modules/dashboard/controllers.js')%>

  <!-- Module: Tasks -->
  <%js('angularjs/modules/tasks/config.js')%> 
  <%js('angularjs/modules/tasks/controllers.js')%>

  <!-- Module: Offices -->
  <%js('angularjs/modules/offices/config.js')%>
  <%js('angularjs/modules/offices/controllers/OfficeController.js')%>
  <%js('angularjs/modules/offices/controllers/EditOfficeController.js')%>
  <%js('angularjs/modules/offices/controllers/CreateOfficeController.js')%>
  <%js('angularjs/modules/offices/services/Office.js')%>

  <!-- Module: Users -->
  <%js('angularjs/modules/tasks/config.js')%>
  <%js('angularjs/modules/tasks/controllers.js')%>

 <base href="/#/">
</head>
<body ng-controller="ApplicationController">
  <!-- HEADER 
    <header id="header" class="animated fadeInDown">
      <div id="logo-group">
        <!-- PLACE LOGO HERE 
        <span id="logo"> Worth Tasks </span>-->
        <!-- END LOGO PLACEHOLDER 
      </div>-->

      <!-- pulled right: nav area 
      <div class="pull-right">-->

        <!-- fullscreen button 
        <div id="fullscreen" class="btn-header transparent pull-right">
          <span> <a href="javascript:void(0);" action="launchFullscreen" title="Full Screen"><i class="fa fa-arrows-alt"></i></a> </span>
        </div>-->
        <!-- end fullscreen button -->
        
        <!-- logout button 
        <div id="logout" class="btn-header transparent pull-right" ng-controller="AuthController">
          <span> <a title="Sign Out" ng-click="logout()"><i class="fa fa-sign-out"></i></a> </span>
        </div>-->
        <!-- end logout button 

      </div>-->
      <!-- end pulled right: nav area 
    </header>-->
    <aside id="left-panel">
      <div class="header">
        <span>Worth Finance</span>
      </div>
      <navigation>
        <nav:item view="/office/test" icon="fa fa-lg fa-fw fa-home" title="Office" />
        <nav:group data-icon="fa fa-lg fa-fw fa-code" title="Angular Docs" >
          <nav:item data-view="/guide" title="Developer Guide" />
          <nav:item data-view="/api" title="API Reference" />
        </nav:group>
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