<?php

class BaseModel extends Eloquent {
 
	protected $input = array();
	protected $rules = array();
	protected $messages = array();
	protected $validator = null;
 
	use SoftDeletingTrait;

    protected $dates = ['created_at','updated_at','deleted_at'];

    protected $guarded = array('id');

    public function validate()
    {
    	$this->validator = Validator::make($this->input, $this->rules, $this->messages);
    	return $this->validator->passes();
    }

    public function getValidationError()
    {
    	$messages = $this->validator->messages();
    	return $messages->first();
    }

}

?>