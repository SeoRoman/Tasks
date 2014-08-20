<?php

class CommentSeeder extends BaseSeeder {

    public function run()
    {
        DB::table('tasks_comments')->delete();

        Comment::create(
          array(
            'commentable_id' => 1,
            'commentable_type' => 'Task',
            'class_type' => 'system',
            'created_by' => 1,
            'body' => 'created task title: Task #1',
          )
        );
    }

}

?>