<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends BaseModel implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');

	// Boot Function
	public static function boot()
	{
		parent::boot();

		// Creating Method
		User::creating(function($user) {
			$user->password = Hash::make($user->password);
		});

	}

	// Relationships
	public function history()
	{
		return $this->hasMany('History', 'user_id');
	}
}
