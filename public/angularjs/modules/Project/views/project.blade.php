<div class="pcontroller" ng-controller="ProjectController" ng-model="project">
	<div class="main-heading">
		<span>
			<h4 class="section-title">
				{{ project.title }}
				<a class="projectSettings" ng-show="project.title" tooltip-placement="bottom" tooltip="Project Settings"><i class="fa fa-cog"></i></a>
			</h4>
		</span>
		<span class="pull-right">Search</span>
		<div class="clearfix"></div>
	</div>
	<tabset>
    <tab>
    	<tab-heading><i class="fa fa-check-circle"></i> Tasks</tab-heading>
    	<ng-include
			  src="'angularjs/modules/Project/views/project.tasks.php'">
			</ng-include>
		</tab>
		<tab>
			<tab-heading><i class="fa fa-comments-o"></i> Conversations</tab-heading>
    	<!--<ng-include
			  src="'angularjs/modules/Project/views/project.tasks.php'">
			</ng-include>-->Conversations
		</tab>
		<tab>
			<tab-heading><i class="rotate90 fa fa-file-text"></i> Notes</tab-heading>
    	<!--<ng-include
			  src="'angularjs/modules/Project/views/project.tasks.php'">
			</ng-include>-->Conversations
		</tab>
		<tab>
			<tab-heading><i class="fa fa-clock-o"></i> History</tab-heading>
    	<!--<ng-include
			  src="'angularjs/modules/Project/views/project.tasks.php'">
			</ng-include>-->Conversations
		</tab>
  </tabset>
</div>