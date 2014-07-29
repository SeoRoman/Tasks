<?php

class OfficeSeeder extends BaseSeeder {

    public function run()
    {
        DB::table('offices')->delete();

        // Create Roman Account
        Office::create(
        	array(
        		'id' => '1',
        		'name' => 'Home Office',
        		'address' => '11671 Jollyville Rd #204',
                'city' => 'Austin',
                'state' => 'TX',
                'zip' => '78759'
        	)
        );

        Office::create(
            array(
                'id' => '2',
                'name' => 'Test Branch #2',
                'address' => '11671 Jollyville Rd #204',
                'city' => 'Austin',
                'state' => 'TX',
                'zip' => '78759'
            )
        );

    }

}

?>