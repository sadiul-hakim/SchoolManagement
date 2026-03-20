<?php

namespace Database\Factories;

use App\Models\Section;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Section>
 */
class SectionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->randomElement([
                'Morning Section',
                'Day Section',
                'Evening Section',
                'Science Section',
                'Commerce Section',
            ]),
            'active' => fake()->boolean()
        ];
    }
}
