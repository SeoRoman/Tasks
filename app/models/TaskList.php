<?php

	class TaskList extends BaseModel {

		protected $table = 'tasks_projects_lists';

		protected $guarded = array();

		public function project()
		{
			return $this->belongsTo('Project', 'tasks_projects_id');
		}

		public function tasks()
		{
			return $this->hasMany('Task', 'tasks_lists_id');
		}

	}

?>