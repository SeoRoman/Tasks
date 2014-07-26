<?php

class BaseSeeder extends Seeder {

	protected $faker;

	public function __construct()
	{
		$this->faker = Faker\Factory::create();

		$this->faker->addProvider(new Faker\Provider\en_US\Person($this->faker));
		$this->faker->addProvider(new Faker\Provider\en_US\Address($this->faker));
		$this->faker->addProvider(new Faker\Provider\en_US\PhoneNumber($this->faker));
		$this->faker->addProvider(new Faker\Provider\en_US\Company($this->faker));
		$this->faker->addProvider(new Faker\Provider\en_US\Text($this->faker));
		
		$this->faker->addProvider(new Faker\Provider\Base($this->faker));
		$this->faker->addProvider(new Faker\Provider\Lorem($this->faker));
		$this->faker->addProvider(new Faker\Provider\Internet($this->faker));
		$this->faker->addProvider(new Faker\Provider\DateTime($this->faker));
		$this->faker->addProvider(new Faker\Provider\UserAgent($this->faker));
		$this->faker->addProvider(new Faker\Provider\Color($this->faker));
		$this->faker->addProvider(new Faker\Provider\File($this->faker));
		$this->faker->addProvider(new Faker\Provider\Image($this->faker));
		$this->faker->addProvider(new Faker\Provider\Uuid($this->faker));
		$this->faker->addProvider(new Faker\Provider\Barcode($this->faker));
		$this->faker->addProvider(new Faker\Provider\Miscellaneous($this->faker));
	}

}

?>