<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<h4 class="modal-title"><span class="fa fa-plus"></span> Create Task</h4>
		</div>
		<div class="modal-body">
			<label class="control-label" for="id">Subject:</label>
			<input type="text" class="form-control" id="subject" ng-model="task.subject" ng-keyup="hitEnter($event)">
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button>
			<button type="button" class="btn btn-default" ng-click="store()">Create Task</button>
		</div>
	</div>
</div>