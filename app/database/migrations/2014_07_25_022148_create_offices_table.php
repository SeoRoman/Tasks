<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOfficesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('offices', function($table) {

			$table->integer('id');

			$table->integer('user_id');

			$table->string('name');

			$table->string('address');

			$table->string('city');

			$table->string('state');

			$table->string('zip');

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
		Schema::drop('offices');
	}

}
