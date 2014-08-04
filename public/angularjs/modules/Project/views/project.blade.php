This is Project: {{ project.title }}<br><br>

This project has the following Task Lists<br>

<div ng-repeat="TaskList in project.tasklists" ng-controller="TaskListController">
	<h2>{{ TaskList.name }}</h2>
	<ul>
		<li ng-repeat="Task in TaskList.tasks">{{ Task.subject }}</li>
	</ul>
</div>