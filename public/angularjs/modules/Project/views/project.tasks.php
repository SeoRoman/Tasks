<div class="pcontroller" ng-controller="TaskController">
    <div id="main" class="tasklist col-md-4">
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
          <accordion-group tasklist="{{ tasklist.id }}" ng-repeat="tasklist in project.tasklists" ng-controller="TaskListDroppableController" data-drop="true" ng-model="droppables[tasklist.id]" data-jqyoui-options="tasklist.opts" jqyoui-droppable="{multiple: true, onDrop: 'dropCallBack($index, tasklist.id, tasklist)'}"  is-open="tasklist.open">
            <accordion-heading>
              <i class="tasklistToggle fa"  ng-class="{'fa-chevron-down': tasklist.open, 'fa-chevron-right': !tasklist.open}"></i>
              <div class="tasklistTitle">{{tasklist.title}}</div>
              <div class="tasklistBadge badge">{{tasklist.taskCount}}</div>
              <div class="pull-right buttons">
                <div class="btn-group">
                  <button type="button" class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
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
            <li class="list-group-item addNew">
              <a href="" ng-click="createTask($index)">
                <span class="smbtn"><i class="fa fa-plus"></i></span>
                <span>Add New Task</span>
              </a>
            </li>
            <li data-tasklist-id="{{ tasklist.id }}" data-drag="true" class="list-group-item" ng-repeat="task in tasklist.tasks">
              <a class="smbtn moveTask"><i class="fa fa-ellipsis-v"></i><i class="fa fa-ellipsis-v"></i></a>

              <div class="squaredOne-{{task.id}}">
                <input type="checkbox" id="squaredOne-{{task.id}}" ng-true-value="'1'" ng-false-value="'0'" ng-model="task.completed" ng-change="completeTask(task, tasklist)" name="check" />
                <label for="squaredOne-{{task.id}}"></label>
              </div>
              <a class="task-item" ng-click="openTask(task, tasklist)">{{ task.completed }} - {{ task.title }}</a>

            </li>
          </accordion-group>
        </accordion>
            <!--<li data-tasklist-id="{{ tasklist.id }}" data-drag="true" jqyoui-draggable="{ index: $index, onStart: 'startCallBack(tasklist)', animate: true }" data-jqyoui-options="{revert: 'invalid' }" ng-model="$parent.droppables[tasklist.id]" jqyoui-draggable="{index: {{ $index }}, animate:true}" class="list-group-item" ng-repeat="task in tasklist.tasks">-->
        
      </div>
    </div>

    <div id="tasks" class="tasks col-md-8">
      <div ng-if="task">
        <div>
          <span class="closeTask pull-right">
            <button ng-click="closeTaskPane()" title="Close the Task" class="btn btn-sm btn-danger"><i class="fa fa-times"></i> Close Task</button>
          </span>
          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
        <div class="taskHeader">

          <div class="squaredOne-{{task.id}}">
            <input type="checkbox" id="squaredOne-{{task.id}}"  ng-true-value="'1'" ng-false-value="'0'" ng-model="task.completed" ng-change="completeTask(task, tasklist)" name="check" />
            <label for="squaredOne-{{task.id}}"></label>
          </div>
          <span class="taskSubject"><a href="javascript:void(0)" editable-text="task.title" onaftersave="updateTaskTitle()">{{ task.title }}</a></span>

          <span class="pull-right btn-group">
            <button type="button" class="btn btn-xs btn-default dropdown-toggle" data-toggle="dropdown">
              <span class="caret"></span>
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <ul class="editTask dropdown-menu dropdown-menu-right" role="menu">
              <li><a href="" ng-click="moveTask()">Move to...</a></li>
              <li><a href="" ng-click="deleteTask()"><span class="delete">Delete</span></a></li>
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
        <div class="taskOptions">
          <div class="assignmentSelection">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown">
                <span><i class="fa fa-user"></i></span>
                &nbsp;&nbsp;Unassigned&nbsp;&nbsp;
                <span class="caret"></span>
                <span class="sr-only">Toggle Dropdown</span>
              </button>
              <div class="taskAssignment dropdown-menu" role="menu">
                <ul class="list-group">
                  <!--<li class="list-group-item" ng-repeat=""><a href="" ng-click="assignTask()">Nathon Shultz</a></li>-->
                  <li class="list-group-item" ng-repeat="user in users">
                    <a href="" ng-click="assignTask()">{{ user.username }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="dueDateSelection">
            <div class="input-group form-inline">
              <input type="text" class="form-control" datepicker-popup="MMM dd" show-weeks="false" ng-model="task.due_date" is-open="openedCal" min-date="minDate" date-disabled="disabled(date, mode)" ng-required="true" close-text="Close"/>
              <span class="input-group-btn">
                <button type="button" class="btn btn-default" ng-click="openCalendar($event)"><i class="fa fa-calendar"></i></button>
              </span>
            </div>
          </div>
        </div>
        <div class="taskDesc">
          <a href="" ng-if="!task.description" editable-textarea="task.description" onaftersave="updateTaskDescription()">
            <i class="fa fa-pencil"></i> Add a description      
          </a>
          <div class="showTaskDescEdit" ng-if="task.description">
            <span editable-textarea="task.description" e-form="editTaskDescBtn" onaftersave="updateTaskDescription()">{{task.description}}</span>
            <button class="pull-right btn btn-xs btn-default" ng-click="editTaskDescBtn.$show()" ng-hide="editTaskDescBtn.$visible"><i class="fa fa-pencil"></i></button>
          </div>
          
        </div>
        <div class="taskByline" ng-if="task.description">
          <small>
            Edited by {{ task.author.username }} on <span>{{task.updated_at | amDateFormat:'MMMM Do YYYY \\a\\t h:mm a'}}</span> 
          </small>
        </div>
        <div class="subTasks">
          <a href=""><i class="fa fa-list"></i> Add subtasks</a>
        </div>
        <div ng-controller="TaskCommentController">         
          <div class="addComment">
            <form ng-submit="storeTaskComment(task)" name="TaskCommentForm">
              <textarea class="form-control" rows="3" placeholder="Write a comment..." ng-model="comment.body"></textarea>
              <div class="spacer-5"></div>
              <input type="submit" value="COMMENT" class="btn btn-info pull-right">
            </form>
            <div class="clearfix"></div>
          </div>

          <div class="commentsList" ng-repeat="comment in task.comments">

            <div ng-switch="comment.class_type">

              <div ng-switch-when="comment">
                <div class="commentFrom">
                  <span>{{ comment.author.username }}</span>
                </div>
                <div class="commentspacer"></div>
                <div class="commentBody">
                  <span>
                    {{ comment.body }}
                  </span>
                </div>
                <div class="commentspacer"></div>
                <div class="commentTime">
                  <span>{{comment.created_at | amDateFormat:'MMM Do, YYYY \\a\\t h:mm a'}}</span> (<span am-time-ago="comment.created_at"></span>)
                </div>
              </div>

              <div ng-switch-when="system">
                <div class="systemFrom">
                  <span>{{ comment.author.username }}</span>
                </div>
                <div class="systemspacer"></div>
                <div class="systemBody">
                  <span>
                    {{ comment.body }}
                  </span> 
                </div>
                <div class="systemspacer"></div>
                <div class="systemTime">
                  <span>{{comment.created_at | amDateFormat:'MMM Do, YYYY \\a\\t h:mm a'}}</span> <!--(<span am-time-ago="comment.created_at"></span>)-->
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ng-if="!task">
        <h3>No Task Loaded</h3>
      </div>
    </div>
  </div>