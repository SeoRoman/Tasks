<?php

class UserSeeder extends BaseSeeder {

    public function run()
    {
        DB::table('users')->delete();

        // Create Roman Account
        User::create(
        	array(
        		'username' => 'roman',
        		'password' => 'roman',
        		'email' => 'roman@testforum.com'
        	)
        );

        // Create Nathon Account
        User::create(
        	array(
        		'username' => 'nathon',
        		'password' => 'nathon',
        		'email' => 'nathon@testforum.com'
        	)
        );        
    }

}

?>