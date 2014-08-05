<div ng-controller="ProjectReadController" ng-model="project">

	<h2 class="section-title">{{ project.title }}</h2>

	<div class="panel panel-primary" ng-repeat="tasklist in project.tasklists" ng-controller="TaskListController as TaskListCtrl"  data-drop="true" ng-model="droppables[tasklist.id]" jqyoui-droppable="{multiple: true, onDrop: 'dropCallBack($index, tasklist.id)'}">
		<div class="panel-heading">
	    {{ tasklist.title }}
	  </div>
		<ul class="list-group">
			<li data-drag="true" data-jqyoui-options="{revert: 'invalid', onStop: 'TaskListCtrl.stopCallBack(task.id)'}" ng-model="$parent.droppables[tasklist.id]" jqyoui-draggable="{index: {{ $index }}, animate:true}" class="list-group-item" ng-repeat="task in droppables[tasklist.id]">
				<a ng-click="openTask( project.id, tasklist.id, task.id )">
					{{ task.subject }}
				</a>
			</li>
		</ul>
	</div>

	<div ng-controller="TaskShowController" id="tasks" class="tasks">
			
			<div ng-if="task">
				<a ng-click="closeTask()">Close the Task</a>
				<p>{{ task.subject }}</p>
			</div>

			<div ng-if="!task">
				No Task Loaded
			</div>
		</div>

	</div>

</div>