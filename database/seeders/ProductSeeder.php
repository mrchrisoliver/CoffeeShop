<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Variation;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Product::factory(10)->create();

		$variations = Variation::factory()->count(3)->state(new Sequence(
			['name' => '350g', 'type_id' => 1],
			['name' => '1kg', 'type_id' => 1]
		))->state(new Sequence(
			['name' => 'Wholebean', 'type_id' => 2],
			['name' => 'Espresso', 'type_id' => 2],
			['name' => 'French Press', 'type_id' => 2],
		));

		Product::factory()
            ->count(1000)
            ->has($variations)
            ->create();
    }
}
