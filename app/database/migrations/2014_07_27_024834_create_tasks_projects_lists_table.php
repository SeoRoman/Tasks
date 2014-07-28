<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksProjectsListsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('tasks_projects_lists', function($table) {

			$table->increments('id');

			$table->integer('user_id');

			$table->integer('tasks_projects_id');

			$table->string('name');

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
		Schema::drop('tasks_projects_lists');
	}

}
