<?php

class ListSeeder extends BaseSeeder {

    public function run()
    {
        DB::table('tasks_projects_lists')->delete();

        TaskList::create(
          array(
            'user_id' => 1,
            'tasks_projects_id' => 1,
            'title' => 'Task List #1',
          )
        );

        TaskList::create(
          array(
            'user_id' => 1,
            'tasks_projects_id' => 1,
            'title' => 'Task List #2',
          )
        );

        TaskList::create(
          array(
            'user_id' => 1,
            'tasks_projects_id' => 1,
            'title' => 'Task List #3',
          )
        );

        TaskList::create(
          array(
            'user_id' => 1,
            'tasks_projects_id' => 1,
            'title' => 'Task List #4',
          )
        );

        TaskList::create(
          array(
            'user_id' => 1,
            'tasks_projects_id' => 1,
            'title' => 'Task List #5',
          )
        );

        TaskList::create(
          array(
            'user_id' => 1,
            'tasks_projects_id' => 1,
            'title' => 'Task List #6',
          )
        );

        TaskList::create(
          array(
            'user_id' => 1,
            'tasks_projects_id' => 1,
            'title' => 'Task List #7',
          )
        );

        TaskList::create(
          array(
            'user_id' => 1,
            'tasks_projects_id' => 1,
            'title' => 'Task List #8',
          )
        );

        TaskList::create(
          array(
            'user_id' => 1,
            'tasks_projects_id' => 2,
            'title' => 'Task List #1',
          )
        );

        TaskList::create(
          array(
            'user_id' => 1,
            'tasks_projects_id' => 3,
            'title' => 'Task List #1',
          )
        );
    }

}

?>