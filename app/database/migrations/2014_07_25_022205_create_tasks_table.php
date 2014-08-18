<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTasksTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//
		Schema::create('tasks', function($table) {

			$table->increments('id');

			$table->integer('tasks_lists_id');

			$table->integer('user_id');

			$table->integer('office_id');

			$table->integer('assigned_to');

			$table->date('due_date')->nullable();

			$table->string('title');

			$table->text('description')->nullable();

			$table->boolean('completed')->default(0);

			$table->integer('created_by');

			$table->integer('updated_by');

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
		Schema::drop('tasks');
	}

}
