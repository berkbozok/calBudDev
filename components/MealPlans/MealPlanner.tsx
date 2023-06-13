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
  // Existing meal options
  chicken: {
    calories: 250,
    protein: 30,
    carbs: 0,
    fat: 10,
    mealTime: "Dinner",
  },
  egg: {
    calories: 80,
    protein: 6,
    carbs: 1,
    fat: 5,
    mealTime: "Breakfast",
  },
  salmon: {
    calories: 350,
    protein: 25,
    carbs: 0,
    fat: 20,
    mealTime: "Lunch",
  },
  beef: {
    calories: 300,
    protein: 26,
    carbs: 0,
    fat: 22,
    mealTime: "Lunch",
  },
  spinach: {
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    mealTime: "Lunch",
  },
  broccoli: {
    calories: 55,
    protein: 3.7,
    carbs: 11.2,
    fat: 0.6,
    mealTime: "Dinner",
  },
  carrot: {
    calories: 41,
    protein: 0.9,
    carbs: 9.6,
    fat: 0.2,
    mealTime: "Dinner",
  },
  potato: {
    calories: 130,
    protein: 2,
    carbs: 30,
    fat: 0.2,
    mealTime: "Dinner",
  },
  rice: {
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    mealTime: "Lunch",
  },
  pasta: {
    calories: 131,
    protein: 5,
    carbs: 25,
    fat: 1,
    mealTime: "Dinner",
  },

  // Additional popular food options
  oatmeal: {
    calories: 150,
    protein: 6,
    carbs: 27,
    fat: 2,
    mealTime: "Breakfast",
  },
  avocado: {
    calories: 160,
    protein: 2,
    carbs: 9,
    fat: 15,
    mealTime: "Lunch",
  },
  quinoa: {
    calories: 222,
    protein: 8,
    carbs: 39,
    fat: 4,
    mealTime: "Lunch",
  },
  banana: {
    calories: 96,
    protein: 1,
    carbs: 23,
    fat: 0,
    mealTime: "Breakfast",
  },
  apple: {
    calories: 52,
    protein: 0.3,
    carbs: 14,
    fat: 0.2,
    mealTime: "Breakfast",
  },
  yogurt: {
    calories: 150,
    protein: 12,
    carbs: 17,
    fat: 5,
    mealTime: "Breakfast",
  },
  almonds: {
    calories: 160,
    protein: 6,
    carbs: 6,
    fat: 14,
    mealTime: "Snack",
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

    let mealPlanReport = "Meal Plan Report:\n";
    mealPlanReport += "------------------\n";

    const mealTimes: { [key: string]: string[] } = {
      Breakfast: [],
      Lunch: [],
      Dinner: [],
      Snack: [],
    };

    selectedMeals.forEach((meal) => {
      const portionSize = adjustedPortionSizes[meal];
      const mealNutrition = mealOptions[meal];
      const portionCalories = portionSize * mealNutrition.calories;
      const portionProtein = portionSize * mealNutrition.protein;
      const portionCarbs = portionSize * mealNutrition.carbs;
      const portionFat = portionSize * mealNutrition.fat;

      mealTimes[mealNutrition.mealTime].push(
        `${meal} - ${portionSize.toFixed(
          2
        )} portion(s) (${portionCalories.toFixed(2)} calories)`
      );
      mealPlanReport += `${meal} - ${portionSize.toFixed(2)} portion(s):\n`;
      mealPlanReport += `Calories: ${portionCalories.toFixed(2)} calories\n`;
      mealPlanReport += `Protein: ${portionProtein.toFixed(2)} grams\n`;
      mealPlanReport += `Carbs: ${portionCarbs.toFixed(2)} grams\n`;
      mealPlanReport += `Fat: ${portionFat.toFixed(2)} grams\n\n`;
    });

    mealPlanReport += "Meal Plan:\n";
    mealPlanReport += "-----------\n";
    mealPlanReport += "Breakfast:\n";
    mealPlanReport += mealTimes["Breakfast"].join("\n");
    mealPlanReport += "\n\n";
    mealPlanReport += "Lunch:\n";
    mealPlanReport += mealTimes["Lunch"].join("\n");
    mealPlanReport += "\n\n";
    mealPlanReport += "Dinner:\n";
    mealPlanReport += mealTimes["Dinner"].join("\n");
    mealPlanReport += "\n\n";
    mealPlanReport += "Snacks:\n";
    mealPlanReport += mealTimes["Snack"].join("\n");

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
          <label>Meal Options:</label>
          <br />
          {Object.keys(mealOptions).map((meal) => (
            <div key={meal}>
              <input
                type="checkbox"
                id={meal}
                value={meal}
                onChange={handleMealSelection}
              />
              <label htmlFor={meal}>{meal}</label>
            </div>
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
