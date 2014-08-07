<div ng-controller="ProjectReadController" ng-model="project">
	<div id="main" class="tasklist">
		<h2 class="section-title">{{ project.title }}</h2>

		<div class="panel panel-primary" ng-repeat="tasklist in project.tasklists" ng-controller="TaskListController as TaskListCtrl"  data-drop="true" ng-model="droppables[tasklist.id]" jqyoui-droppable="{multiple: true, onDrop: 'dropCallBack($index, tasklist.id)'}">
			<div class="panel-heading" ng-controller="TaskListUpdateController">
				<span editable-text="tasklist.title" e-form="taskListEditForm" e-name="title" onbeforesave="update(project.id, tasklist.id, $data)">
			    {{ tasklist.title || 'empty' }}
			  </span>
				<span class="pull-right buttons">
					<button type="button" class="btn btn-default"  ng-click="taskListEditForm.$show()" ng-show="!taskListEditForm.$visible"><i class="fa fa-pencil"></i></button>
				</span>
				<span class="clearfix"></span>
		  </div>
			<ul class="list-group">
				<li class="list-group-item addNew">
					<a href="javascript.void(0)">
						<span class="smbtn"><i class="fa fa-plus"></i></span>
						<span>Add New Task</span>
					</a>
				</li>
				<li data-drag="true" data-jqyoui-options="{revert: 'invalid', onStop: 'TaskListCtrl.stopCallBack(task.id)'}" ng-model="$parent.droppables[tasklist.id]" jqyoui-draggable="{index: {{ $index }}, animate:true}" class="list-group-item moveTask" ng-repeat="task in droppables[tasklist.id]">
					<a ng-click="openTask( project.id, tasklist.id, task.id )">
						{{ task.subject }}
					</a>
					<span class="pull-right"><a class="smbtn"><i class="fa fa-arrows"></i></a></span>
				</li>
			</ul>
		</div>
  </div>

	<div ng-controller="TaskShowController" id="tasks" class="tasks">
			
			<div ng-if="task">
				<div>
					<span class="closeTask pull-right">
						<a ng-click="closeTask()" title="Close the Task"><i class="fa fa-times"></i></a>
					</span>
					<div class="clearfix"></div>
				</div>
				<div class="taskHeader">
					<i class="fa fa-check taskDone"></i>
					<span class="taskSubject"><a href="javascript:void(0)">{{ task.subject }}</a></span>
					<span class="pull-right"><select></select></span>
				</div>
			</div>

			<div ng-if="!task">
				<h3>No Task Loaded</h3>
			</div>
		</div>

	</div>

</div>