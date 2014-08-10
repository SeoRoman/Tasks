<div ng-controller="ProjectController" ng-model="project">
	<div id="main" class="tasklist">
		<h2 class="section-title">{{ project.title }}</h2>
		<div class="panel-group accordion" ng-controller="TaskListController">
			
			<div class="panel panel-custom-grey">
				<div class="panel-body">
					<a href="" ng-click="create()">
						<span class="smbtn"><i class="fa fa-plus"></i></span>
						<span>Add New Task List</span>
					</a>
				</div>
			</div>

			<div class="panel panel-custom-grey" ng-repeat="tasklist in project.tasklists" ng-controller="TaskListDroppableController" data-drop="true" ng-model="droppables[tasklist.id]" data-jqyoui-options="tasklist.opts" jqyoui-droppable="{multiple: true, onDrop: 'dropCallBack($index, tasklist.id, tasklist)'}">	
				<div class="panel-heading">
					{{ tasklist.title }}
					<span class="badge">{{ tasklist.taskCount }}</span>
					<span class="pull-right buttons">
						<div class="btn-group">
							<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
								<i class="fa fa-pencil"></i>
							</button>
							<ul class="editTaskList dropdown-menu dropdown-menu-right" role="menu">
								<li><a href="" ng-click="edit(tasklist, $index)">Edit</a></li><!--  -->
								<li><a href="" ng-click="delete(tasklist)"><span class="delete">Delete</span></a></li>
							</ul>
						</div>
						<a ng-click="loadTasks()" ng-show="!taskListEditForm.$visible" data-toggle="collapse" data-parent="" href=".collapse{{$index}}" class="expand">
							<i class="fa fa-sort"></i>
						</a>
					</span>
					<span class="clearfix"></span>
				</div>
				<ul id="" class="list-group panel-collapse collapse collapse{{$index}}" ng-controller="TaskDraggableController">
					<li class="list-group-item addNew">
						<a href="" ng-click="create($index)">
							<span class="smbtn"><i class="fa fa-plus"></i></span>
							<span>Add New Task</span>
						</a>
					</li>
					<li data-tasklist-id="{{ tasklist.id }}" data-drag="true" jqyoui-draggable="{ index: $index, onStart: 'startCallBack(tasklist)', animate: true }" data-jqyoui-options="{revert: 'invalid' }" ng-model="$parent.droppables[tasklist.id]" jqyoui-draggable="{index: {{ $index }}, animate:true}" class="list-group-item" ng-repeat="task in droppables[tasklist.id]">
						<a class="smbtn moveTask"><i class="fa fa-ellipsis-v"></i><i class="fa fa-ellipsis-v"></i></a>
						<a class="openTask" ng-click="open(task)">
							{{ task.subject }}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div ng-controller="TaskController" id="tasks" class="tasks">

		<div ng-if="task">
			<div>
				<span class="closeTask pull-right">
					<a ng-click="close()" title="Close the Task"><i class="fa fa-times"></i></a>
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
					{{ tasklist.title }} 
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