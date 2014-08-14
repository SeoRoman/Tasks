<?php

	class Comment extends BaseModel {

		protected $table = 'tasks_comments';

		protected $guarded = array('id');

		public function commentable()
		{
			return $this->morphTo();
		}

		public function author()
		{
			return $this->belongsTo('User', 'created_by');
		}

	}

?>