<div class="pcontroller" ng-controller="ProjectController" ng-model="project">
	<div class="pcontroller" ng-controller="TaskController">
		<div id="main" class="tasklist col-md-5">
			<h2 class="section-title">{{ project.title }}</h2>

			<div ng-controller="TaskListController">
				
				<div class="panel panel-custom-color">
					<div class="panel-body">
						<a href="" ng-click="createTaskList()">
							<span class="smbtn"><i class="fa fa-plus"></i></span>
							<span>Add New Task List</span>
						</a>
					</div>
				</div>
				<accordion>
					<accordion-group ng-repeat="tasklist in tasklists" ng-controller="TaskListDroppableController" data-drop="true" ng-model="droppables[tasklist.id]" data-jqyoui-options="tasklist.opts" jqyoui-droppable="{multiple: true, onDrop: 'dropCallBack($index, tasklist.id, tasklist)'}"  is-open="status.open">
						<accordion-heading>
							<div class="tasklistTitle">{{tasklist.title}}</div>
							<div class="tasklistBadge badge">{{tasklist.taskCount}}</div>
							<i class="pull-right fa"  ng-class="{'fa-chevron-down': status.open, 'fa-chevron-right': !status.open}"></i>
							<div class="clearfix"></div>
						</accordion-heading>
						<li class="list-group-item addNew">
							<a href="" ng-click="createTask($index)">
								<span class="smbtn"><i class="fa fa-plus"></i></span>
								<span>Add New Task</span>
							</a>
						</li>
						<li data-tasklist-id="{{ tasklist.id }}" data-drag="true" class="list-group-item" ng-repeat="task in tasklist.tasks">
							<a class="smbtn moveTask"><i class="fa fa-ellipsis-v"></i><i class="fa fa-ellipsis-v"></i></a>
							<a class="openTask" ng-click="openTask(task)">
								{{ task.title }}
							</a>
						</li>
					</accordion-group>
				</accordion>
						<!--<li data-tasklist-id="{{ tasklist.id }}" data-drag="true" jqyoui-draggable="{ index: $index, onStart: 'startCallBack(tasklist)', animate: true }" data-jqyoui-options="{revert: 'invalid' }" ng-model="$parent.droppables[tasklist.id]" jqyoui-draggable="{index: {{ $index }}, animate:true}" class="list-group-item" ng-repeat="task in tasklist.tasks">-->
				<!-- <accordion>
					<accordion-group ng-repeat="tasklist in tasklists" ng-controller="TaskListDroppableController" data-drop="true" ng-model="droppables[tasklist.id]" data-jqyoui-options="tasklist.opts" jqyoui-droppable="{multiple: true, onDrop: 'dropCallBack($index, tasklist.id, tasklist)'}"  is-open="status.open">
						<accordion-heading>
							<div class="tasklistTitle">{{ tasklist.title }}</div>
							<div class="tasklistBadge badge">{{ tasklist.taskCount }}</div>
							<i class="pull-right fa"  ng-class="{'fa-chevron-down': status.open, 'fa-chevron-right': !status.open}"></i>
							<div class="pull-right buttons">
								<div class="btn-group">
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
										<i class="fa fa-pencil"></i>
									</button>
									<ul class="editTaskList dropdown-menu dropdown-menu-right" role="menu">
										<li><a href="" ng-click="editTaskList(tasklist, $index)">Edit</a></li>
										<li><a href="" ng-click="deleteTaskList(tasklist, $index)"><span class="delete">Delete</span></a></li>
									</ul>
								</div>
							</div>
							<div class="clearfix"></div>
						</accordion-heading>
						<div class="panelProgress">
							<div class="pprogress sampleprog"></div>
						</div>
						<ul class="list-group panel-collapse collapse collapse{{$index}}">
							
						</ul>
					</accordion-group>
				</accordion> -->	
			</div>
		</div>

		<div id="tasks" class="tasks col-md-7">
			<div ng-if="task">
				<div>
					<span class="closeTask pull-right">
						<button ng-click="closeTaskPane()" title="Close the Task" class="btn btn-sm btn-danger"><i class="fa fa-times"></i> Close Task</button>
					</span>
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
				<div class="taskHeader">
					<i class="fa fa-check taskDone"></i>
					<span class="taskSubject"><a href="javascript:void(0)" editable-text="task.title" onbeforesave="updateTaskTitle($data, task)">{{ task.title }}</a></span>
					<span class="pull-right btn-group">
						<button type="button" class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
							<span class="caret"></span>
							<span class="sr-only">Toggle Dropdown</span>
						</button>
						<ul class="editTask dropdown-menu dropdown-menu-right" role="menu">
							<li><a href="" ng-click=""><span class="delete">Delete</span></a></li>
						</ul>
					</span>
				</div>
				<div class="taskCrumbs">
					<small>
						{{ tasklist.title }} 
						<i class="fa fa-angle-double-right"></i> 
						{{task.title}}
					</small>
				</div>
				<div class="taskDesc">
					<a href="" ng-if="!task.description" editable-textarea="task.description">
						<i class="fa fa-pencil"></i> Add a description			
					</a>
					<div ng-if="task.description">
						<span editable-textarea="task.description" e-form="editTaskDescBtn" onbeforesave="updateTaskDescription(task)">{{task.description}}</span>
						<i class="pull-right fa fa-pencil" ng-click="editTaskDescBtn.$show()" ng-hide="editTaskDescBtn.$visible"></i>
					</div>
					
				</div>
				<div class="taskByline" ng-if="task.description">
					<small>
						Edited by {Nathon Shultz} {{ task.updated_at }} 
					</small>
				</div>
				<div class="subTasks">
					<a href=""><i class="fa fa-list"></i> Add subtasks</a>
				</div>
				<div class="addComment">
					<form>
						<textarea class="form-control" rows="3" placeholder="Write a comment..."></textarea>
						<div class="spacer-5"></div>
						<input type="submit" value="COMMENT" class="btn btn-info pull-right">
					</form>
					<div class="clearfix"></div>
				</div>
				<div class="commentList">
					<div class="commentFrom">
						<span>Nathon Shultz</span>
					</div>
					<div class="commentspacer"></div>
					<div class="commentBody">
						<span>
							Are we currently able to add comments to a task?
						</span>
					</div>
					<div class="commentspacer"></div>
					<div class="commentTime">
						<span>
							Yesterday 11:09 pm
						</span>
					</div>
				</div>
			</div>

			<div ng-if="!task">
				<h3>No Task Loaded</h3>
			</div>
		</div>
	</div>
</div>