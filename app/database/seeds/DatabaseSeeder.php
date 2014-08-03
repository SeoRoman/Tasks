<?php

class DatabaseSeeder extends Seeder {

    public function run()
    {
        $this->call('UserSeeder');
        $this->command->info('User table seeded!');

        $this->call('OrganizationSeeder');
        $this->command->info('Organization table seeded!');

        $this->call('ProjectSeeder');
        $this->command->info('Project table seeded!');
    }

}

?>