<?php

	class Organization extends BaseModel {

		protected $table = 'tasks_organizations';

		protected $guarded = array('id');

		public function projects()
		{
			return $this->hasMany('Project', 'tasks_organizations_id');
		}

	}

?>