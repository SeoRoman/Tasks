<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<h4 class="modal-title"><span class="fa fa-plus"></span> View Office</h4>
		</div>
		<div class="modal-body">

			<p>{{ office.id }}</p>

			<p>{{ office.name }}</p>

			<p>{{ office.address }}</p>

			<p>{{ office.city }}</p>

			<p>{{ office.state }}</p>

			<p>{{ office.zip }}</p>

		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button>
			<button type="button" class="btn btn-default" ng-click="store()">Create Office</button>
		</div>
	</div>
</div>