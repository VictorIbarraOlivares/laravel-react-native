<?php

namespace Database\Factories;

use App\Models\Programmer;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProgrammerFactory extends Factory
{
   /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Programmer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        $skills = ["PHP", "Node.js", "JavaScript", "Rust", "React Native"];
        $randomSkills = $this->faker->randomElements($skills, rand(1, 3));
        return [
            "name" => $this->faker->name,
            "summary" => $this->faker->text(150),
            "photo" => $this->faker->image(storage_path("app/public/programmers"), "140", "200", "people", false),
            "skills" => implode(", ", $randomSkills),
        ];
    }
}
