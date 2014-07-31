<button class="btn btn-primary" ng-click="create()">Add New Task</button>

<table class="table">

	<tr>
		<td style="width:5%">ID</td>
		<td style="width:20%">Subject</td>
		<td style="width:10%">Options</td>
	</tr>

	<tr ng-repeat="task in tasks">
		<td>
			<span editable-text="task.id" e-form="taskRow" e-name="id">
				{{ task.id }}
			</span>
		</td>
		<td>
			<span editable-text="task.subject" e-form="taskRow" e-name="subject">
				{{ task.subject }}
			</span>
		</td>
		<td>
			<form editable-form name="taskRow" onbeforesave="update($data, task.id)" ng-show="taskRow.$visible" class="form-button form-inline" shown="inserted == task">
				<button type="submit" ng-disabled="taskRow.$waiting" class="btn btn-xs btn-primary">Save</button>
				<button type="button" ng-disabled="taskRow.$waiting" class="btn btn-xs btn-danger" ng-click="taskRow.$hide()">Cancel</button>
			</form>
			<div class="buttons" ng-show="!taskRow.$visible">
          		<button class="btn btn-xs btn-primary" ng-click="taskRow.$show()">Edit</button>
          		<button class="btn btn-xs btn-danger" ng-click="delete($index, task.id)">Delete</button>
        	</div>  
		</td>
	</tr>

</table>