<button class="btn btn-primary" ng-click="create()">Add New Office</button>

<table class="table" ng-controller="EditOfficeController">

	<tr>
		<td style="width:5%">ID</td>
		<td style="width:20%">Name</td>
		<td style="width:25%">Address</td>
		<td style="width:20%">City</td>
		<td style="width:10%">State</td>
		<td style="width:10%">Zip</td>
		<td style="width:10%">Options</td>
	</tr>

	<tr ng-repeat="office in offices">
		<td>
			<span editable-text="office.id" e-form="officeRow" e-name="id">
				{{ office.id }}
			</span>
		</td>
		<td>
			<span editable-text="office.name" e-form="officeRow" e-name="name">
				{{ office.name }}
			</span>
		</td>
		<td>
			<span editable-text="office.address" e-form="officeRow" e-name="address">
				{{ office.address }}
			</span>
		</td>
		<td>
			<span editable-text="office.city" e-form="officeRow" e-name="city">
				{{ office.city }}
			</span>
		</td>
		<td>
			<span editable-text="office.state" e-form="officeRow" e-name="state">
				{{ office.state }}
			</span>
		</td>
		<td>
			<span editable-text="office.zip" e-form="officeRow" e-name="zip">
				{{ office.zip }}
			</span>
		</td>
		<td>
			<form editable-form name="officeRow" onbeforesave="update($data, office.id)" ng-show="officeRow.$visible" class="form-button form-inline" shown="inserted == office">
				<button type="submit" ng-disabled="officeRow.$waiting" class="btn btn-xs btn-primary">Save</button>
				<button ng-disabled="officeRow.$waiting" class="btn btn-xs btn-danger" ng-click="officeRow.$cancel()">Cancel</button>
			</form>
			<div class="buttons" ng-show="!officeRow.$visible">
          		<button class="btn btn-xs btn-primary" ng-click="officeRow.$show()">Edit</button>
          		<button class="btn btn-xs btn-danger" ng-click="delete(office.id, $index)">Delete</button>
        </div>  
		</td>
	</tr>

</table>