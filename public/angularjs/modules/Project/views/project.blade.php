<div ng-controller="ProjectReadController" ng-model="project">
	<div id="main" class="tasklist">
		<h2 class="section-title">{{ project.title }}</h2>
		<div class="panel-group accordion">
			<div class="panel panel-primary" ng-repeat="tasklist in project.tasklists" ng-controller="TaskListController as TaskListCtrl"  data-drop="true" ng-model="droppables[tasklist.id]" jqyoui-droppable="{multiple: true, onDrop: 'dropCallBack($index, tasklist.id, tasklist)'}">
				<div class="panel-heading" ng-controller="TaskListUpdateController">
					<div editable-text="tasklist.title" e-form="taskListEditForm" e-name="title" onbeforesave="updateTitle(project.id, tasklist, $data)">
				    {{ tasklist.title || 'empty' }}
				    
				  </div>
					<span class="pull-right buttons">
						<button type="button" class="btn btn-default"  ng-click="taskListEditForm.$show()" ng-show="!taskListEditForm.$visible"><i class="fa fa-pencil"></i></button>
						<a data-toggle="collapse" data-parent=".accordion" href=".collapse{{$index}}">
		          [+]
		        </a>
					</span>
					<span class="clearfix"></span>
			  </div>
				<ul id="" class="list-group panel-collapse collapse collapse{{$index}}">
					<li class="list-group-item addNew">
						<a href="">
							<span class="smbtn"><i class="fa fa-plus"></i></span>
							<span>Add New Task</span>
						</a>
					</li>
					<li data-drag="true" data-jqyoui-options="{revert: 'invalid', onStop: 'TaskListCtrl.stopCallBack(task.id)'}" ng-model="$parent.droppables[tasklist.id]" jqyoui-draggable="{index: {{ $index }}, animate:true}" class="list-group-item moveTask" ng-repeat="task in droppables[tasklist.id]">
						<a class="openTask" ng-click="openTask( project.id, tasklist.id, task.id )">
							{{ task.subject }}
						</a>
						<span class="pull-right"><a class="smbtn"><i class="fa fa-arrows"></i></a></span>
					</li>
				</ul>
			</div>
		</div>
		<div class="panel panel-primary" ng-controller="TaskListCreateController">
			<div class="panel-body">
				<a href="" ng-click="create(project.id)">
					<span class="smbtn"><i class="fa fa-plus"></i></span>
					<span>Add New Task List</span>
				</a>
			</div>
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
				<div class="taskCrumbs">
					<small>
						Tasklist Title: {{tasklist.title}} 
						<i class="fa fa-angle-double-right"></i> 
						{{task.subject}}
					</small>
				</div>
				<div class="taskDesc">{{task.notes}}</div>
				<div class="taskByline">
					<small>
						Edited by {Nathon Shultz} {8:23 PM}
					</small>
				</div>
			</div>

			<div ng-if="!task">
				<h3>No Task Loaded</h3>
			</div>
		</div>

	</div>

</div>