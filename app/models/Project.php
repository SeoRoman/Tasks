<?php

	class Project extends BaseModel {

		protected $table = 'tasks_projects';

		protected $guarded = array();

		public function Organization()
		{
			return $this->belongsTo('Organization', 'tasks_organizations_id');
		}

		public function tasklists()
		{
			return $this->hasMany('TaskList', 'tasks_projects_id');
		}

	}

?>