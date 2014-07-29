<button class="btn btn-primary" ng-click="create()">Add New Office</button>

<table class="table">

	<tr>
		<td>Office ID</td>
	</tr>

	<tr ng-repeat="office in offices">
		<td>{{ office.id || '0' }}</td>
		<td>
			<a href="javascript:void(0)" editable-text="office.name" onaftersave="update(office, office.id)">
				{{ office.name }}
			</a>
		</td>
		<td>
			<a href="javascript:void(0)" editable-text="office.address" onaftersave="update(office, office.id)">
				{{ office.address }}
			</a>
		</td>
		<td>
			<a href="javascript:void(0)" editable-text="office.city" onaftersave="update(office, office.id)">
				{{ office.city }}
			</a>
		</td>
		<td>
			<a href="javascript:void(0)" editable-text="office.state" onaftersave="update(office, office.id)">
				{{ office.state }}
			</a>
		</td>
		<td>
			<a href="javascript:void(0)" editable-text="office.zip" onaftersave="update(office, office.id)">
				{{ office.zip }}
			</a>
		</td>
	</tr>

</table>