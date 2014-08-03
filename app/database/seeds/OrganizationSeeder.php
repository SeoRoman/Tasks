<?php

class OrganizationSeeder extends BaseSeeder {

    public function run()
    {
        DB::table('tasks_organizations')->delete();

        // Create Roman Account
        Organization::create(
        	array(
        		'user_id' => 1,
        		'title' => 'Organization #1',
        	)
        );

        Organization::create(
            array(
                'user_id' => 1,
                'title' => 'Organization #2',
            )
        );
    }

}

?>