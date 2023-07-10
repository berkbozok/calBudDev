import React, { useState } from "react";
import * as mealOptionsData from "./mealOptions.json";
import styled from "styled-components";

interface MealOptions {
  [key: string]: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    mealTime: string;
    type: string;
  };
}
const OptionsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const MealOptions = styled.div`
  margin-right: 5rem;
`;

const Container = styled.div`
  padding: 24px;
  height: 100vh;
`;
const MealReport = styled.div`
  margin-top: 30px;
`;

const OptionContatiner = styled.div`
  width: 100%;
`;

const OptionName = styled.div`
  display: flex;
  align-items: center;
  input[type="checkbox"] {
    margin-right: 5px;
  }
  label {
    margin-left: 10px;
  }
`;
const mealOptions: MealOptions = mealOptionsData as MealOptions;

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
    <Container>
      <h1>Meal Planner</h1>
      <form onSubmit={generateMealPlan}>
        <label htmlFor="calories">Desired Calories:</label>
        <input
          type="text"
          id="calories"
          value={calories}
          onChange={handleCaloriesChange}
        />

        <label htmlFor="goal">Goal:</label>
        <select id="goal" value={goal} onChange={handleGoalChange}>
          <option value="">Select Goal</option>
          <option value="lose">Lose Weight</option>
          <option value="maintain">Maintain Weight</option>
          <option value="gain">Gain Weight</option>
        </select>
        <OptionsRow>
          <MealOptions>
            <label>Meat Options:</label>
            <div className="column">
              {Object.entries(mealOptions).map(
                ([meal, details]) =>
                  details.type === "meat" && (
                    <OptionContatiner key={meal}>
                      <OptionName>
                        <label>{meal}</label>
                        <input
                          type="checkbox"
                          value={meal}
                          checked={selectedMeals.includes(meal)}
                          onChange={handleMealSelection}
                        />
                      </OptionName>
                    </OptionContatiner>
                  )
              )}
            </div>
          </MealOptions>
          <MealOptions>
            <label>Veggie Options:</label>
            <div className="column">
              {Object.entries(mealOptions).map(
                ([meal, details]) =>
                  details.type === "veggies" && (
                    <OptionContatiner key={meal}>
                      <OptionName>
                        <label>{meal}</label>
                        <input
                          type="checkbox"
                          value={meal}
                          checked={selectedMeals.includes(meal)}
                          onChange={handleMealSelection}
                        />
                      </OptionName>
                    </OptionContatiner>
                  )
              )}
            </div>
          </MealOptions>
          <MealOptions>
            <label>Carb Options:</label>
            <div className="column">
              {Object.entries(mealOptions).map(
                ([meal, details]) =>
                  details.type === "carbs" && (
                    <OptionContatiner key={meal}>
                      <OptionName>
                        <label>{meal}</label>
                        <input
                          type="checkbox"
                          value={meal}
                          checked={selectedMeals.includes(meal)}
                          onChange={handleMealSelection}
                        />
                      </OptionName>
                    </OptionContatiner>
                  )
              )}
            </div>
          </MealOptions>
        </OptionsRow>

        <button className="btn btn-secondary" type="submit">
          Generate Meal Plan
        </button>
      </form>
      <MealReport>
        <pre>{mealPlanReport}</pre>
      </MealReport>
    </Container>
  );
};

export default MealPlanner;
