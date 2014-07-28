<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksProjectsConversationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('tasks_projects_conversations', function($table) {

			$table->increments('id');

			$table->integer('tasks_projects_id');

			$table->integer('creator');

			$table->string('title');

			$table->text('body');

			$table->boolean('public');

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
		Schema::drop('tasks_projects_conversations');
	}

}
