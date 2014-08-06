<?php

	class Conversation extends BaseModel {

		protected $table = 'tasks_projects_conversations';

		protected $guarded = array('id');

		public function project()
		{
			return $this->belongsTo('Project','tasks_projects_id');
		}

	}

?>