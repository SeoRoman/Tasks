<?php

class ProjectSeeder extends BaseSeeder {

    public function run()
    {
        DB::table('tasks_projects')->delete();

        // Create Roman Account
        Project::create(
        	array(
        		'user_id' => 1,
                'tasks_organizations_id' => 1,
        		'title' => 'Project #1',
        	)
        );

        Project::create(
            array(
                'user_id' => 1,
                'tasks_organizations_id' => 1,
                'title' => 'Project #2',
            )
        );
    }

}

?>