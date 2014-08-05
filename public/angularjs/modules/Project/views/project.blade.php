<h2 class="section-title">{{ project.title }}</h2>

<div class="panel panel-primary" ng-repeat="TaskList in project.tasklists" ng-controller="TaskListController">
	<div class="panel-heading">
    {{ TaskList.title }}
  </div>
	<ul class="list-group">
		<li class="list-group-item" ng-repeat="Task in TaskList.tasks">{{ Task.subject }}</li>
	</ul>
</div>

<div id="tasks" class="tasks">
  Something here
</div>