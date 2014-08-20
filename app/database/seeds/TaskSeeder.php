<?php

class TaskSeeder extends BaseSeeder {

    public function run()
    {
        DB::table('tasks')->delete();

        Task::create(
        	array(
                'tasks_lists_id' => 1,
        		'user_id' => 1,
                'assigned_to' => 1,
                'due_date' => '2014-08-04 23:00:00',
        		'title' => 'Task #1',
        	)
        );

        Task::create(
            array(
                'tasks_lists_id' => 1,
                'user_id' => 1,
                'assigned_to' => 1,
                'due_date' => '2014-08-04 23:00:00',
                'title' => 'Task #2',
            )
        );

        Task::create(
            array(
                'tasks_lists_id' => 2,
                'user_id' => 1,
                'assigned_to' => 1,
                'due_date' => '2014-08-04 23:00:00',
                'title' => 'Task #1',
            )
        );

        Task::create(
            array(
                'tasks_lists_id' => 2,
                'user_id' => 1,
                'assigned_to' => 1,
                'due_date' => '2014-08-04 23:00:00',
                'title' => 'Task #2',
            )
        );

        Task::create(
            array(
                'tasks_lists_id' => 3,
                'user_id' => 1,
                'assigned_to' => 1,
                'due_date' => '2014-08-04 23:00:00',
                'title' => 'Task #1',
            )
        );

        Task::create(
            array(
                'tasks_lists_id' => 4,
                'user_id' => 1,
                'assigned_to' => 1,
                'due_date' => '2014-08-04 23:00:00',
                'title' => 'Task #1',
            )
        );
    }

}

?>