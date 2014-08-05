<?php

class DatabaseSeeder extends Seeder {

    public function run()
    {
        $this->call('UserSeeder');
        $this->command->info('User table seeded!');

        $this->call('OfficeSeeder');
        $this->command->info('Office table seeded!');

        $this->call('OrganizationSeeder');
        $this->command->info('Organization table seeded!');

        $this->call('ProjectSeeder');
        $this->command->info('Project table seeded!');

        $this->call('ListSeeder');
        $this->command->info('Task List table seeded!');

        $this->call('TaskSeeder');
        $this->command->info('Task table seeded!');
    }

}

?>