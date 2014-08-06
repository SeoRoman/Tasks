<?php

	class Note extends BaseModel {

		protected $table = 'tasks_projects_notes';

		protected $guarded = array('id');

		public function project()
		{
			return $this->belongsTo('Project','tasks_projects_id');
		}

	}

?>