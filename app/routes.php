<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

// Blade Tag Replacement
Blade::setContentTags('<%', '%>'); // for variables and all things Blade
Blade::setEscapedContentTags('<%%', '%%>'); // for escaped data

// Model Bindings
Route::model('users','User');

Route::controller('auth', 'AuthController');

// API v1 Resources
Route::group(array('prefix'=>'api/v1'), function() {
	Route::resource('offices','OfficeController');	
	Route::resource('tasks','TaskController');	
});


Route::get('/', function()
{
	return View::make('index');
});