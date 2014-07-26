<?php

class BaseModel extends Eloquent {
 
	use SoftDeletingTrait;

    protected $dates = ['created_at','updated_at','deleted_at'];

    protected $guarded = array('id');

}

?>