<ul class="list-inline">
	<li ng-if="!currentUser"><a href="/#/auth/login" class="btn btn-primary">Login</a></li>
	<li><a href="/#/dashboard" class="btn btn-primary">Dashboard</a></li>
	<li><a href="/#/offices" class="btn btn-primary">Offices</a></li>
	<li><a href="/#/tasks" class="btn btn-primary">Tasks</a></li>
	<li ng-if="currentUser"><a href="javascript:void(0)" ng-click="logout()" ng-controller="AuthLogoutController" class="btn btn-primary">Logout</a></li>
</ul>