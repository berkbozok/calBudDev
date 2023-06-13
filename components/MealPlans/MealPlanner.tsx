import React, { useState } from "react";

interface MealOptions {
  [key: string]: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    mealTime: string;
  };
}

const mealOptions: MealOptions = {
  chicken: {
    calories: 250,
    protein: 30,
    carbs: 0,
    fat: 10,
    mealTime: "dinner",
  },
  egg: {
    calories: 80,
    protein: 6,
    carbs: 1,
    fat: 5,
    mealTime: "breakfast",
  },
  salmon: {
    calories: 350,
    protein: 25,
    carbs: 0,
    fat: 20,
    mealTime: "lunch",
  },
  beef: {
    calories: 300,
    protein: 26,
    carbs: 0,
    fat: 22,
    mealTime: "dinner",
  },
  spinach: {
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    mealTime: "lunch",
  },
  broccoli: {
    calories: 55,
    protein: 3.7,
    carbs: 11.2,
    fat: 0.6,
    mealTime: "lunch",
  },
  carrot: {
    calories: 41,
    protein: 0.9,
    carbs: 9.6,
    fat: 0.2,
    mealTime: "lunch",
  },
  potato: {
    calories: 130,
    protein: 2,
    carbs: 30,
    fat: 0.2,
    mealTime: "dinner",
  },
  rice: {
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    mealTime: "dinner",
  },
  pasta: {
    calories: 131,
    protein: 5,
    carbs: 25,
    fat: 1,
    mealTime: "dinner",
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
    let totalWeight = 0;
    selectedMeals.forEach((meal) => {
      const mealCalories = mealOptions[meal].calories;
      const mealWeight = (mealCalories / totalCalories) * desiredCalories;
      adjustedPortionSizes[meal] = mealWeight;
      totalWeight += mealWeight;
    });

    let mealPlanReport = "Meal Plan Report:\n";
    mealPlanReport += "------------------\n";
    selectedMeals.forEach((meal) => {
      const portionSize = adjustedPortionSizes[meal] / totalWeight;
      const mealNutrition = mealOptions[meal];
      const portionCalories = portionSize * totalCalories;
      const portionProtein = portionSize * totalProtein;
      const portionCarbs = portionSize * totalCarbs;
      const portionFat = portionSize * totalFat;

      mealPlanReport += `${meal} (${
        mealNutrition.mealTime
      }) - ${portionSize.toFixed(2)} portion(s) (${adjustedPortionSizes[
        meal
      ].toFixed(2)} grams):\n`;
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
