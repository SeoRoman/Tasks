<?php

	class Organization extends BaseModel {

		protected $table = 'tasks_organizations';

		protected $guarded = array('id');

		public function Projects()
		{
			return $this->hasMany('Project', 'tasks_organizations_id');
		}

	}

?>