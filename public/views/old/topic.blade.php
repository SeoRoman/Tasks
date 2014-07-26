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
  <% css('animate.css') %>

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
      <div class="row fadeInDownBig animated">
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
          <h4><span class="flipInY animated">Topic Title</span></h4>
        </div>
      </div>
      <div id="topics" class="row rotateInDownLeft animated">
        <div id="board-topic" class="col-xs-12">
          <div class="topic-content col-xs-9">
            <div class="topic-heading">
              <h4>Topic Title</h4>
              <div class="pull-right">
                <button class="btn btn-primary btn-xs">EDIT</button>
              </div>
            </div>
            <div class="byline">by <a href="#">nashultz</a> on Tue Mar 02, 2014 12:31 am</div>
            <br>
            <div class="topic-message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla euismod. Donec viverra sapien at vehicula aliquet. Sed vel imperdiet magna, quis hendrerit libero. Fusce id massa nec justo dapibus rhoncus. Cras imperdiet, purus sit amet cursus bibendum, est eros sagittis dui, quis ultrices neque urna eget dolor. Morbi eleifend vestibulum lectus ac dictum. Ut vitae odio metus. Sed a augue accumsan orci adipiscing sollicitudin non id augue.
              <br>
              Proin tincidunt accumsan porta. Nam porta, felis id tincidunt varius, eros felis tincidunt sem, in mattis nibh erat quis augue. Praesent non tellus hendrerit, placerat risus eu, lobortis nisi. Integer et nisl eu neque tristique volutpat luctus in orci. Duis sed nisl quam. Vestibulum nec erat gravida, cursus magna a, elementum lorem. Aenean eleifend ligula urna, at viverra eros porttitor quis. Nam in varius velit. Donec ultrices euismod dolor, non egestas lorem pretium at. In ac tellus ut dui pellentesque feugiat. Morbi at nibh non urna porttitor euismod. Aenean semper dignissim placerat. In tincidunt justo quis risus dapibus euismod. In eget pretium nibh.
            </div>
          </div>
          <div class="user-content col-xs-3">
            <a href="<% URL::to('/home/user') %>">nashultz</a> <br>
            <span class="badge badge-danger">Admin</span><br>
            <br>
            Posts: 5<br>
            Joined: Mon Jul 16, 2013 12:31 pm<br>
            <br>
            <button class="btn btn-primary btn-xs">PM</button> <button class="btn btn-primary btn-xs"><i class="fa fa-envelope"></i></button>
          </div>
        </div>
      </div>
      <div id="topics" class="row  rotateInDownRight animated">
        <div id="board-topic" class="col-xs-12">
          <div class="topic-content col-xs-9">
            <div class="topic-heading">
              <h4>Re: Topic Title</h4>
              <div class="pull-right">
                <!--<button class="btn btn-primary btn-xs">EDIT</button>-->
              </div>
            </div>
            <div class="byline">by <a href="#">nashultz</a> on Tue Mar 02, 2014 12:31 am</div>
            <br>
            <div class="topic-message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum fringilla euismod. Donec viverra sapien at vehicula aliquet. Sed vel imperdiet magna, quis hendrerit libero. Fusce id massa nec justo dapibus rhoncus. Cras imperdiet, purus sit amet cursus bibendum, est eros sagittis dui, quis ultrices neque urna eget dolor. Morbi eleifend vestibulum lectus ac dictum. Ut vitae odio metus. Sed a augue accumsan orci adipiscing sollicitudin non id augue.
              <br>
              Proin tincidunt accumsan porta. Nam porta, felis id tincidunt varius, eros felis tincidunt sem, in mattis nibh erat quis augue. Praesent non tellus hendrerit, placerat risus eu, lobortis nisi. Integer et nisl eu neque tristique volutpat luctus in orci. Duis sed nisl quam. Vestibulum nec erat gravida, cursus magna a, elementum lorem. Aenean eleifend ligula urna, at viverra eros porttitor quis. Nam in varius velit. Donec ultrices euismod dolor, non egestas lorem pretium at. In ac tellus ut dui pellentesque feugiat. Morbi at nibh non urna porttitor euismod. Aenean semper dignissim placerat. In tincidunt justo quis risus dapibus euismod. In eget pretium nibh.
            </div>
          </div>
          <div class="user-content col-xs-3">
            <a href="<% URL::to('/home/user') %>">nashultz</a> <br>
            <span class="badge badge-danger">Admin</span><br>
            <br>
            Posts: 5<br>
            Joined: Mon Jul 16, 2013 12:31 pm<br>
            <br>
            <button class="btn btn-primary btn-xs">PM</button> <button class="btn btn-primary btn-xs"><i class="fa fa-envelope"></i></button>
          </div>
        </div>
      </div>
    </div>
    <div class="spacer-40"></div>
</body>
</html>