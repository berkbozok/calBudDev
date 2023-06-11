import React, { useState } from "react";

interface MealOptions {
  [key: string]: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

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
  spinach: {
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
  },
  broccoli: {
    calories: 55,
    protein: 3.7,
    carbs: 11.2,
    fat: 0.6,
  },
  carrot: {
    calories: 41,
    protein: 0.9,
    carbs: 9.6,
    fat: 0.2,
  },
  potato: {
    calories: 130,
    protein: 2,
    carbs: 30,
    fat: 0.2,
  },
  rice: {
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
  },
  pasta: {
    calories: 131,
    protein: 5,
    carbs: 25,
    fat: 1,
  },
};

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

    const desiredCalories = parseInt(calories);
    if (goal === "lose") {
      const calorieReduction = Math.floor(desiredCalories * 0.2); // Reduce calorie intake by 20%
      totalCalories -= calorieReduction;
    } else if (goal === "gain") {
      const calorieIncrease = Math.floor(desiredCalories * 0.2); // Increase calorie intake by 20%
      totalCalories += calorieIncrease;
    }

    const adjustedPortionSizes: { [key: string]: number } = {};
    selectedMeals.forEach((meal) => {
      const mealCalories = mealOptions[meal].calories;
      const mealPortionSize = desiredCalories / totalCalories;
      adjustedPortionSizes[meal] = mealPortionSize;
    });

    // Generate the meal plan report
    let mealPlanReport = "Meal Plan Report:\n";
    mealPlanReport += "------------------\n";
    selectedMeals.forEach((meal) => {
      const portionSize = adjustedPortionSizes[meal];
      const mealNutrition = mealOptions[meal];
      const portionCalories = portionSize * mealNutrition.calories;
      const portionProtein = portionSize * mealNutrition.protein;
      const portionCarbs = portionSize * mealNutrition.carbs;
      const portionFat = portionSize * mealNutrition.fat;

      mealPlanReport += `${meal} - ${portionSize.toFixed(2)} portion(s):\n`;
      mealPlanReport += `Calories: ${portionCalories.toFixed(2)} calories\n`;
      mealPlanReport += `Protein: ${portionProtein.toFixed(2)} grams\n`;
      mealPlanReport += `Carbs: ${portionCarbs.toFixed(2)} grams\n`;
      mealPlanReport += `Fat: ${portionFat.toFixed(2)} grams\n\n`;
    });

    setMealPlanReport(mealPlanReport);
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
          {Object.keys(mealOptions).map((meal) => (
            <label key={meal} htmlFor={meal}>
              <input
                type="checkbox"
                id={meal}
                value={meal}
                onChange={handleMealSelection}
              />
              {meal}
            </label>
          ))}
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
