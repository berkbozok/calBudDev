import React, { useState } from "react";

interface MealOptions {
  [key: string]: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

const MealPlanner = () => {
  const [calories, setCalories] = useState("");
  const [goal, setGoal] = useState("");
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);
  const [mealPlanReport, setMealPlanReport] = useState("");

  const handleCaloriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCalories(e.target.value);
  };

  const handleGoalChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGoal(e.target.value);
  };

  const handleMealSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const meal = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedMeals((prevSelectedMeals) => [...prevSelectedMeals, meal]);
    } else {
      setSelectedMeals((prevSelectedMeals) =>
        prevSelectedMeals.filter((selectedMeal) => selectedMeal !== meal)
      );
    }
  };

  const generateMealPlan = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Define the meal options with their respective nutritional values
    const mealOptions: MealOptions = {
      chicken: {
        calories: 250,
        protein: 30,
        carbs: 0,
        fat: 10,
      },
      egg: {
        calories: 80,
        protein: 6,
        carbs: 1,
        fat: 5,
      },
      salmon: {
        calories: 350,
        protein: 25,
        carbs: 0,
        fat: 20,
      },
      beef: {
        calories: 300,
        protein: 26,
        carbs: 0,
        fat: 22,
      },
    };

    // Calculate the total nutritional values based on the selected meals
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    selectedMeals.forEach((meal) => {
      const mealNutrition = mealOptions[meal];
      totalCalories += mealNutrition.calories;
      totalProtein += mealNutrition.protein;
      totalCarbs += mealNutrition.carbs;
      totalFat += mealNutrition.fat;
    });

    // Adjust the meal plan based on the desired calorie intake and goal
    if (goal === "lose") {
      const calorieReduction = Math.floor(Number(calories) * 0.2); // Reduce calorie intake by 20%
      totalCalories -= calorieReduction;
    } else if (goal === "gain") {
      const calorieIncrease = Math.floor(Number(calories) * 0.2); // Increase calorie intake by 20%
      totalCalories += calorieIncrease;
    }

    // Generate the meal plan report
    const report = `
      Meal Plan Report:
      ------------------
      Selected Meals: ${selectedMeals.join(", ")}
      Total Calories: ${totalCalories} calories
      Total Protein: ${totalProtein} grams
      Total Carbs: ${totalCarbs} grams
      Total Fat: ${totalFat} grams
    `;

    setMealPlanReport(report);
  };

  return (
    <div>
      <h1>Meal Planner</h1>
      <form onSubmit={generateMealPlan}>
        <div>
          <label htmlFor="calories">Desired Calorie Intake:</label>
          <input
            type="text"
            id="calories"
            value={calories}
            onChange={handleCaloriesChange}
          />
        </div>
        <div>
          <label htmlFor="goal">Goal:</label>
          <select id="goal" value={goal} onChange={handleGoalChange}>
            <option value="">Select a goal</option>
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>
        <div>
          <h2>Select Meals:</h2>
          <label htmlFor="chicken">
            <input
              type="checkbox"
              id="chicken"
              value="chicken"
              onChange={handleMealSelection}
            />
            Chicken
          </label>
          <br />
          <label htmlFor="egg">
            <input
              type="checkbox"
              id="egg"
              value="egg"
              onChange={handleMealSelection}
            />
            Egg
          </label>
          <br />
          <label htmlFor="salmon">
            <input
              type="checkbox"
              id="salmon"
              value="salmon"
              onChange={handleMealSelection}
            />
            Salmon
          </label>
          <br />
          <label htmlFor="beef">
            <input
              type="checkbox"
              id="beef"
              value="beef"
              onChange={handleMealSelection}
            />
            Beef
          </label>
          <br />
        </div>
        <button type="submit">Generate Meal Plan</button>
      </form>

      {mealPlanReport && (
        <div>
          <h2>Meal Plan Report</h2>
          <pre>{mealPlanReport}</pre>
        </div>
      )}
    </div>
  );
};

export default MealPlanner;
