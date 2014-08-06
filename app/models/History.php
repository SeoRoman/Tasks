<?php

	class History extends BaseModel {

		protected $table = 'tasks_history';

		protected $guarded = array('id');

		public function user()
		{
			return $this->belongsTo('User','users_id');
		}

	}

?>