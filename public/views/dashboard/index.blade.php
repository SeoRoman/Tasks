<div class="container-fluid" ng-controller="TasksController">

	<div class="row">

		<button class="btn btn-primary" ng-click="create()">Create New Task</button>

	</div>

	<div class="row">

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

			<div class="columnOne" ng-repeat="task in data.columnOne">

	            <div class="panel panel-info">
	              <div class="panel-heading">{{ task.title }} <span class="pull-right"><a href="javascript:void();" ng-click="togglePanel(task)"><i ng-hide="task.show" class="fa fa-plus"></i><i ng-show="task.show" class="fa fa-minus"></i></a></span></div>
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

			<div class="columnTwo" ng-repeat="task in data.columnTwo">

	            <div class="panel panel-info">
	              <div class="panel-heading">{{ task.title }} <span class="pull-right"><a href="javascript:void();" ng-click="togglePanel(task)"><i ng-hide="task.show" class="fa fa-plus"></i><i ng-show="task.show" class="fa fa-minus"></i></a></span></div>
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

			<div class="columnThree" ng-repeat="task in data.columnThree">

	            <div class="panel panel-info">
	              <div class="panel-heading">{{ task.title }} <span class="pull-right"><a href="javascript:void();" ng-click="togglePanel(task)"><i ng-hide="task.show" class="fa fa-plus"></i><i ng-show="task.show" class="fa fa-minus"></i></a></span></div>
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

			<div class="columnFour" ng-repeat="task in data.columnFour">

	            <div class="panel panel-info">
	              <div class="panel-heading">{{ task.title }} <span class="pull-right"><a href="javascript:void();" ng-click="togglePanel(task)"><i ng-hide="task.show" class="fa fa-plus"></i><i ng-show="task.show" class="fa fa-minus"></i></a></span></div>
	              <div class="panel-body" ng-show="task.show">
	                Panel content
	              </div>
	            </div>

			</div>
		</div>

	</div>

</div>