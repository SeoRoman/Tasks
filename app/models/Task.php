	<?php

	class Task extends BaseModel {

		protected $table = 'tasks';

		protected $guarded = array();

		public function tasklist()
		{
			return $this->belongsTo('TaskList', 'tasks_lists_id');
		}

		public function subtasks()
		{
			return $this->hasMany('SubTask', 'tasks_id');
		}

		public function comments()
		{
			return  $this->morphMany('Comment','commentable');
		}

	}

?>