<div ng-controller="ProjectReadController">

	<h2 class="section-title">{{ project.title }}</h2>

	<div class="panel panel-primary" ng-repeat="tasklist in project.tasklists" ng-controller="TaskListController">
		<div class="panel-heading">
	    {{ tasklist.title }}
	  </div>
		<ul class="list-group">
			<li class="list-group-item" ng-repeat="task in tasklist.tasks" ng-controller="TaskController">
				<a href="/#/projects/{{project.id}}/tasklists/{{tasklist.id}}/tasks/{{task.id}}">
					{{ task.subject }}
				</a>
			</li>
		</ul>
	</div>

	<div id="tasks" class="tasks">
	  
		{{ task.subject }}

	</div>

</div>