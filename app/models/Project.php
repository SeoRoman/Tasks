<?php

	class Project extends BaseModel {

		protected $table = 'tasks_projects';

		protected $guarded = array();

		public function organization()
		{
			return $this->belongsTo('Organization', 'tasks_organizations_id');
		}

		public function tasklists()
		{
			return $this->hasMany('TaskList', 'tasks_projects_id');
		}

		public function conversations()
		{
			return $this->hasMany('Conversations', 'tasks_projects_id');
		}

		public function notes()
		{
			return $this->hasMany('Note','tasks_projects_id');
		}

	}

?>