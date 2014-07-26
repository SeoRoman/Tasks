<?php

class DatabaseSeeder extends Seeder {

    public function run()
    {
        $this->call('UserSeeder');

        $this->command->info('User table seeded!');
    }

}

?>