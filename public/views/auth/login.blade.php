  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-lg-offset-3">
        <h1 class="text-center"> WorthTasks </h1>
      </div>
    </div>
  </div>
  <div class="container animated flipInY">
    <div class="row">
      <div class="col-lg-6 col-lg-offset-3">

        <div ng-switch on="notification.getStatus()">
          <div ng-switch-default></div>
          <div class="alert alert-info message" ng-switch-when="loading"><i class="fa fa-cog fa-spin fa-fw"></i> {{ notification.getMessage() }}</div>
          <div class="alert alert-danger message" ng-switch-when="error"><i class="fa fa-exclamation-triangle fa-fw"></i> {{ notification.getMessage() }}</div>
          <div class="alert alert-info message" ng-switch-when="info"><i class="fa fa-fw"></i> {{ notification.getMessage() }}</div>
          <div class="alert alert-success message" ng-switch-when="success"><i class="fa fa-check fa-fw"></i> {{ notification.getMessage() }}</div>
        </div>

        <form name="form" autocomplete="off" class="form-horizontal" novalidate ng-submit="submit()">
          <div class="panel panel-default box-shadow">
            <div class="panel-heading">
              <h3 class="panel-title">
                Login
              </h3>
            </div>
            <div class="panel-body">
              <div class="form-group" ng-class="{'has-error': form.username.$invalid && submitted}">
                <label for="username" class="col-sm-2 control-label">Username</label>
                <div class="col-sm-10">
                  <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                  ng-model="creds.username"
                  ng-model-options="{updateOn: 'blur'}"
                  required>
                </div>
              </div>
              <div class="form-group" ng-class="{'has-error': form.password.$invalid && submitted}">
                <label for="password" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-10">
                  <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  ng-model="creds.password"
                  required>
                </div>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class='container'>
    <div class="row">
      <div class='col-lg-6 col-lg-offset-3 text-center'>
        &nbsp;
      </div>
      <div class='col-lg-6 col-lg-offset-3 text-center'>
        Copyright &copy; <?php echo date('Y'); ?> - Systems Edge Online, LLC - All Rights Reserved.
      </div>
      <div class="clearfix"></div>
    </div>
  </div>