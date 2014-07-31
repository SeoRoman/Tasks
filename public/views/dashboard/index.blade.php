<div ng-controller="DashboardController">

<div class="container-fluid" ng-controller="TaskController">

	<div class="row">

		<p>Welcome, {{ currentUser.username }}</p>

		<button class="btn btn-primary" ng-click="create()">Create New Task</button>

	</div>

	<div class="row">

		<div class="col-lg-3">
			<h3>
			<!--<select class="form-control">
				<option>Empty</option>
				<option>Unassigned Tasks</option>
				<optgroup label="My Tasks">
					<option>Open Tasks</option>
					<option>Closed Tasks</option>
				</optgroup>
				<optgroup label="Tasks for Nathon Shultz">
					<option>Open Tasks</option>
					<option>Closed Tasks</option>
				</optgroup>
			</select>-->
			My Tasks
			<div class="clearfix"></div>
			</h3>

			<div class="columnOne" ng-repeat="task in tasks">

	            <div class="panel panel-info">
	              <div class="panel-heading"><a href="javascript:void(0);" ng-click="togglePanel(task)">{{ task.subject }} <span class="pull-right"><i ng-hide="task.show" class="fa fa-plus"></i><i ng-show="task.show" class="fa fa-minus"></i></span></a></div>
	              <div class="panel-body" ng-show="task.show" ng-animate="customClass">
	                Panel content
	              </div>
	            </div>

			</div>

		</div>

		<div class="col-lg-3">
			<h3>
			<select class="form-control">
				<option>Empty</option>
				<option>Unassigned Tasks</option>
				<optgroup label="My Tasks">
					<option>Open Tasks</option>
					<option>Closed Tasks</option>
				</optgroup>
				<optgroup label="Tasks for Nathon Shultz">
					<option>Open Tasks</option>
					<option>Closed Tasks</option>
				</optgroup>
			</select>
			</h3>

			<div class="columnTwo" ng-repeat="task in tasks">

	            <div class="panel panel-info">
	              <div class="panel-heading">{{ task.subject }} <span class="pull-right"><a href="javascript:void();" ng-click="togglePanel(task)"><i ng-hide="task.show" class="fa fa-plus"></i><i ng-show="task.show" class="fa fa-minus"></i></a></span></div>
	              <div class="panel-body" ng-show="task.show">
	                Panel content
	              </div>
	            </div>

			</div>

		</div>

		<div class="col-lg-3">
			<h3>
			<select class="form-control">
				<option>Empty</option>
				<option>Unassigned Tasks</option>
				<optgroup label="My Tasks">
					<option>Open Tasks</option>
					<option>Closed Tasks</option>
				</optgroup>
				<optgroup label="Tasks for Nathon Shultz">
					<option>Open Tasks</option>
					<option>Closed Tasks</option>
				</optgroup>
			</select>
			</h3>

			<div class="columnThree" ng-repeat="task in tasks">

	            <div class="panel panel-info">
	              <div class="panel-heading">{{ task.subject }} <span class="pull-right"><a href="javascript:void();" ng-click="togglePanel(task)"><i ng-hide="task.show" class="fa fa-plus"></i><i ng-show="task.show" class="fa fa-minus"></i></a></span></div>
	              <div class="panel-body" ng-show="task.show">
	                Panel content
	              </div>
	            </div>

			</div>

		</div>

		<div class="col-lg-3">
			<h3>
			<select class="form-control">
				<option>Empty</option>
				<option>Unassigned Tasks</option>
				<optgroup label="My Tasks">
					<option>Open Tasks</option>
					<option>Closed Tasks</option>
				</optgroup>
				<optgroup label="Tasks for Nathon Shultz">
					<option>Open Tasks</option>
					<option>Closed Tasks</option>
				</optgroup>
			</select>
			</h3>

			<div class="columnFour" ng-repeat="task in tasks">

	            <div class="panel panel-info">
	              <div class="panel-heading">{{ task.subject }} <span class="pull-right"><a href="javascript:void();" ng-click="togglePanel(task)"><i ng-hide="task.show" class="fa fa-plus"></i><i ng-show="task.show" class="fa fa-minus"></i></a></span></div>
	              <div class="panel-body" ng-show="task.show">
	                Panel content
	              </div>
	            </div>

			</div>
		</div>

	</div>

</div>
</div>