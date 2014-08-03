<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksProjectsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('tasks_projects', function($table) {

			$table->increments('id');

			$table->integer('user_id');

			$table->integer('tasks_organizations_id');

			$table->string('title');

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
		Schema::drop('tasks_projects');
	}

}
