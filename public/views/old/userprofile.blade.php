<!doctype html>
<html lang="en">
<head>
  <!-- TITLE -->
  <title>Home - Forum using AngularJS and Laravel Frameworks</title>

  <!-- META DATA -->
  <meta charset="UTF-8">
  <meta name="description" content="">
  <meta name="authors" content="">

  <!-- ICONS -->
  <link rel="icon" href="favicon.ico" type="image/x-icon" />

  <!-- STYLESHEETS -->
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet">
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
  <% css('site_default.css') %>
  <% css('badges.css') %>

  <!-- JAVASCRIPT -->
  <script src="http://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>
  <script src="http://code.jquery.com/ui/1.11.0/jquery-ui.min.js" type="text/javascript"></script>
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.js" type="text/javascript"></script>

</head>
<body>
  <!-- HEADER -->
    <header id="header">
      <div id="logo-group">
        <!-- PLACE LOGO HERE -->
        <span id="logo"> TEST FORUM </span>
        <!-- END LOGO PLACEHOLDER -->
      </div>

      <!-- pulled right: nav area -->
      <div class="pull-right">

        <!-- fullscreen button -->
        <div id="fullscreen" class="btn-header transparent pull-right">
          <span> <a href="javascript:void(0);" data-action="launchFullscreen" title="Full Screen"><i class="fa fa-arrows-alt"></i></a> </span>
        </div>
        <!-- end fullscreen button -->
        
        <!-- input: search field -->
        <form class="hidden-xs header-search pull-right">
          <input id="search-fld"  type="text" name="param" placeholder="Find reports and more">
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
        <!-- end input: search field -->

        <!-- logout button -->
        <div id="logout" class="btn-header transparent pull-right">
          <span> <a href="<% URL::to('/') %>" title="Sign Out" data-action="userLogout"><i class="fa fa-sign-out"></i></a> </span>
        </div>
        <!-- end logout button -->

      </div>
      <!-- end pulled right: nav area -->
    </header>

    <div class="container-fluid">
      <div class="row">
        <!--<div class="alert alert-info">
          this is an info alert
        </div>
      </div>
      <div class="row">
        <div class="alert alert-warning">
          this is an warning alert
        </div>
      </div>
      <div class="row">
        <div class="alert alert-danger">
          this is an danger alert
        </div>
      </div>
      <div class="row">
        <div class="alert alert-success">
          this is an success alert
        </div>-->&nbsp;
      </div>
      <div class="row">
        <div id="board-header" class="col-xs-12">
          <a href="<% URL::to('/home') %>"><i class="fa fa-home"></i> Board Index</a> / <a class="active">sample link</a>
          <a href="#" class="pull-right"><i class="fa fa-comments"></i> FAQ</a>
        </div>
        <div class="col-xs-12 pull-right">
          <div class="pull-right">It is currently <?php echo date('D M j\, Y g:i a'); ?></div>
        </div>
      </div>
      <div class="row">
        <div class="category-title">
          <h4>User Profile: nashultz</h4>
        </div>
      </div>
      <div id="topics" class="row">
        <div id="board-topic" class="col-xs-12">
          <div class="head-content col-xs-12">
            <div class="topic-heading">
              <h4>nashultz</h4>
            </div>
            <span class="badge badge-danger">Admin</span>
          </div>
          <div class="topic-content col-xs-6">
            <div class="topic-heading">
              <h5 class="info-head">contact nashultz</h5>
            </div>
            Email Address: <button class="btn btn-primary btn-xs"><i class="fa fa-envelope"></i></button><br>
            Private Message:<button class="btn btn-primary btn-xs">PM</button>
          </div>
          <div class="user-content col-xs-6">
            <div class="topic-heading">
              <h5 class="info-head">statistics</h5>
            </div>
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-sm-3 control-label">Joined:</label>
                <div class="col-sm-9">
                  <p class="form-control-static">Mon Jul 16, 2013 12:31 pm</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">Last Visited:</label>
                <div class="col-sm-9">
                  <p class="form-control-static">Tue Mar 02, 2014 12:31 am</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">Warnings:</label>
                <div class="col-sm-9">
                  <p class="form-control-static"><strong>0</strong></p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">Total posts:</label>
                <div class="col-sm-9">
                  <p class="form-control-static">25 (100% of all posts / 0.00 posts per day)</p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">Most active forum:</label>
                <div class="col-sm-9">
                  <p class="form-control-static"><a href="<% URL::to('/home/category/forum') %>">Some forum</a></p>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label"> Most active topic:</label>
                <div class="col-sm-9">
                  <p class="form-control-static"><a href="<% URL::to('/home/category/forum/topic') %>">Some Topic</a></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer-40"></div>
</body>
</html>