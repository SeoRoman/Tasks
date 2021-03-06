<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('users', function($table) {

			$table->increments('id');

			$table->string('firstname');

			$table->string('lastname');

			$table->string('username');

			$table->string('password', 512);

			$table->string('email');

			$table->string('image');

			$table->string('remember_token', 512);

			$table->timestamps();

			$table->softDeletes();

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
		Schema::drop('users');
	}

}
