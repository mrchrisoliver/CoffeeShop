<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{

	protected $modal = Product::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
		$country = $this->faker->unique()->words(3, true);
        return [
            'name' => $country,
            'price' => $this->faker->randomFloat(2, 10, 20),
            'description' => $this->faker->paragraph(),
            'image' => 'https://images.unsplash.com/photo-1623658179698-ec7b295754d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
            'slug' => $country,
        ];
    }
}
