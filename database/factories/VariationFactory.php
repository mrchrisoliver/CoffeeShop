<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class VariationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'price' => $this->faker->randomFloat(2, 10, 20),
			'quantity' => $this->faker->randomNumber(2, false),
        ];
    }
}
