import React, { useState } from "react";

interface BmiCalculatorProps {
  gender: "male" | "female";
  age: number;
}

const BmiCalculator: React.FC<BmiCalculatorProps> = ({ gender, age }) => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [selectedGender, setGender] = useState<"male" | "female">(gender);
  const [selectedAge, setAge] = useState<number>(age);

  const calculateBmi = () => {
    const bmiValue = weight / (height / 100) ** 2;
    setBmi(bmiValue);
  };

  const getBmiStatus = () => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const getBmiRange = () => {
    const minWeight = Math.round(18.5 * (height / 100) ** 2);
    const maxWeight = Math.round(24.9 * (height / 100) ** 2);
    return `${minWeight} - ${maxWeight} kg`;
  };

  const getBmiStatusByAgeAndGender = () => {
    if (gender === "male") {
      if (age >= 18 && age <= 24) {
        return "Normal BMI range: 19-24 kg/m²";
      } else if (age >= 25 && age <= 34) {
        return "Normal BMI range: 20-25 kg/m²";
      } else if (age >= 35 && age <= 44) {
        return "Normal BMI range: 21-26 kg/m²";
      } else if (age >= 45 && age <= 54) {
        return "Normal BMI range: 22-27 kg/m²";
      } else if (age >= 55 && age <= 64) {
        return "Normal BMI range: 23-28 kg/m²";
      } else {
        return "Normal BMI range: 24-29 kg/m²";
      }
    } else {
      if (age >= 18 && age <= 24) {
        return "Normal BMI range: 19-23 kg/m²";
      } else if (age >= 25 && age <= 34) {
        return "Normal BMI range: 20-24 kg/m²";
      } else if (age >= 35 && age <= 44) {
        return "Normal BMI range: 21-25 kg/m²";
      } else if (age >= 45 && age <= 54) {
        return "Normal BMI range: 22-26 kg/m²";
      } else if (age >= 55 && age <= 64) {
        return "Normal BMI range: 23-27 kg/m²";
      } else {
        return "Normal BMI range: 24-28 kg/m²";
      }
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value as "male" | "female")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <button onClick={calculateBmi}>Calculate BMI</button>
      </div>
      <div>
        {bmi > 0 && (
          <div>
            <p>Your BMI is: {bmi.toFixed(1)}</p>
            <p>Your BMI status is: {getBmiStatus()}</p>
            <p>
              Normal BMI range for your age and gender is:{" "}
              {getBmiStatusByAgeAndGender()}
            </p>
            <p>Normal BMI range for your height is: {getBmiRange()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiCalculator;
