<?php

	class SubTask extends BaseModel {

		protected $table = 'tasks_subtasks';

		protected $guarded = array('id');

		public function task()
		{
			return $this->belongsTo('Task','tasks_id');
		}

	}

?>