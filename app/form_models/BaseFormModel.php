<?php

class BaseFormModel
{
  protected $validator;

  public function __construct()
  {

  }

  public function validate($input)
  {
    $this->validator = Validator::make($input, $this->rules, $this->messages);
    return $this->validator->passes();
  }

  public function getValidationError()
  {
    $messages = $this->validator->messages();
    return $messages->first();
  }
}