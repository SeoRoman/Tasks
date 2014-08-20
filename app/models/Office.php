<?php

	/*protected $rules = array(
		'user_id'	=> 'required',
		'name' 		=> 'required',
		'address' 	=> 'required',
		'city' 		=> 'required',
		'state' 	=> 'required',
		'zip' 		=> 'required'
	);*/

	class Office extends BaseModel {

		protected $table = 'offices';

		protected $guarded = array();

	}

?>