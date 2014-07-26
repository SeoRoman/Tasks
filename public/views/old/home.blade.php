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
  <% css('button-overrides.css') %>
  <% css('site_default.css') %>

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
        <div class="post-links">
          <a href="#">View unanswered posts</a> &#8226; <a href="#">View active topics</a>
        </div>
      </div>
      <div id="boards" class="row">
        <div id="board-content" class="col-xs-12">
          <table class="table table-striped" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th><a href="<% URL::to('/home/category') %>">Category 1</a></th>
                <th>Topics</th>
                <th>Posts</th>
                <th>Last Post</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div><a href="<% URL::to('/home/category/forum') %>">Some forum</a></div>
                  <small>Some description here</small>
                </td>
                <td>4</td>
                <td>12</td>
                <td>
                  <div>by <a href="<% URL::to('/home/user') %>">nashultz</a></div>
                  <small>Tue Mar 02, 2014 12:31 am</small>
                </td>
              </tr>
              <tr>
                <td>
                  <div><a href="<% URL::to('/home/category/forum') %>">Another forum</a></div>
                  <small>This is a second forum within Category 1</small>
                </td>
                <td>4</td>
                <td>12</td>
                <td>
                  <div>by <a href="<% URL::to('/home/user') %>">nashultz</a></div>
                  <small>Tue Mar 02, 2014 12:31 am</small>
                </td>
              </tr>
              <tr>
                <td>
                  <div><a href="<% URL::to('/home/category/forum') %>">Another forum</a></div>
                  <small>This is a second forum within Category 1</small>
                </td>
                <td>4</td>
                <td>12</td>
                <td>
                  <div>by <a href="<% URL::to('/home/user') %>">nashultz</a></div>
                  <small>Tue Mar 02, 2014 12:31 am</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="boards" class="row">
        <div id="board-content" class="col-xs-12">
          <table class="table" cellspacing="0" cellpadding="0">
            <thead>
              <tr>
                <th><a href="<% URL::to('/home/category') %>">Category 2</a></th>
                <th>Topics</th>
                <th>Posts</th>
                <th>Last Post</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div><a href="<% URL::to('/home/category/forum') %>">Some Forum</a></div>
                  <small>Some description here</small>
                </td>
                <td>4</td>
                <td>12</td>
                <td>
                  <div>by <a href="<% URL::to('/home/user') %>">nashultz</a></div>
                  <small>Tue Mar 02, 2014 12:31 am</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</body>
</html>