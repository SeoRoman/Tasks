<div ng-switch="testpage" ng-controller="DemoController">

	<h2>Modules</h2>
	<ul class="list-inline">
		<li><a href="javascript:void(0);" ng-click="module(null)">Auth</li>
		<li><a href="javascript:void(0);" ng-click="module('dashboard')">Dashboard</li>
		<li><a href="javascript:void(0);" ng-click="module('offices')">Offices</a></li>
		<li><a href="javascript:void(0);" ng-click="module('tasks')">Tasks</a></li>
	</ul>

	<!-- Auth Demo -->
	<div ng-switch-default>
		<h2>Auth</h2>
		<div ng-controller="AuthController">
			@include('auth/index')
		</div>
	</div>

	<!-- Dashboard Demo -->
	<div ng-switch-when='dashboard'>
		<h2>Dashboard</h2>
		<div ng-controller="DashboardController">
			@include('dashboard/index')
		</div>
	</div>	

	<!-- Office Demo -->
	<div ng-switch-when="offices">
		<h2>Offices</h2>
		<div ng-controller="OfficeController">
			@include('offices/index')
		</div>
	</div>

	<!-- Tasks Demo -->
	<div ng-switch-when="tasks">
		<h2>Tasks</h2>
		<div ng-controller="TaskController">
			@include('tasks/index')
		</div>
	</div>	

</div>