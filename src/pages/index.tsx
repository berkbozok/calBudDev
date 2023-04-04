import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Radio, Slider, Space, Progress, Tooltip, Select } from "antd";
import {
  CalculatorFilled,
  HeartFilled,
  PercentageOutlined,
  PieChartFilled,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import Protein from "../../shared/protein";
import Fat from "../../shared/fat";
import Carbs from "../../shared/carbs";
import DemoPie from "../../components/Charts/PieChart";
import Link from "next/link";
import Navigation from "../../components/Navigation";

export default function Home() {
  const [BmrValue, setBmrValue] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [sex, setSex] = useState<string>("");
  const [weight, setWeight] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [goal, setGoal] = useState<number>(1.0);
  const [activityLevel, setActivityLevel] = useState<number>(1.0);
  const [proteinIntake, setProteinIntake] = useState<number>(0);
  const [carbIntake, setCarbIntake] = useState<number>(0);
  const [fatIntake, setFatIntake] = useState<number>(0);
  const [fieldsFilled, setFieldsFilled] = useState([false, false, false]);

  const handleAge = (value: number | [number, number]) => {
    if (typeof value === "number") {
      setAge(value);
    }
  };

  const handleHeight = (value: number | [number, number]) => {
    if (typeof value === "number") {
      setHeight(value);
    }
  };

  const handleWeight = (value: number | [number, number]) => {
    if (typeof value === "number") {
      setWeight(value);
    }
  };

  const handleGoal = (event: any) => {
    const value = event.target.value;
    if (!value) {
      setGoal(value);
    }

    switch (value) {
      case "lose":
        setGoal(0.8); // aim for 20% calorie deficit
        break;
      case "maintain":
        setGoal(1.0); // aim to maintain current weight
        break;
      case "gain":
        setGoal(1.2); // aim for 20% calorie surplus
        break;
      default:
        setGoal(1.0);
    }
    setFieldsFilled([false, true, false]);
  };

  const handleBmrComputation = () => {
    let bmr;
    let BmrValueComputation;
    if (sex === "male") {
      bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
      BmrValueComputation = parseInt(bmr.toFixed(0)) * activityLevel;
      setBmrValue(Math.floor(BmrValueComputation));
    } else {
      bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
      BmrValueComputation = parseInt(bmr.toFixed(0)) * activityLevel;
      setBmrValue(Math.floor(BmrValueComputation));
    }

    const proteinIntake = Math.floor(1.4 * weight);
    setProteinIntake(proteinIntake);

    const carbIntake = Math.floor((BmrValueComputation * 0.5) / 4);
    setCarbIntake(carbIntake);

    const fatIntake = Math.floor((BmrValueComputation * 0.3) / 9);
    setFatIntake(fatIntake);

    const totalCalDirectComputation =
      proteinIntake * 4 + carbIntake * 4 + fatIntake * 9;
    if (BmrValueComputation === totalCalDirectComputation) {
      setBmrValue(Math.floor(BmrValueComputation));
    } else {
      setBmrValue(totalCalDirectComputation);
    }
  };
  //protein = 1gr ---> 4cal
  //carb = 1gr --->4cal
  //fat =1gr --->9cal

  const handleSex = (event: any) => {
    setSex(event.target.value);
    setFieldsFilled([true, true, false]);
  };

  const handleActivityLevel = (value: any) => {
    switch (value) {
      case "sedentary":
        setActivityLevel(1.18);
        break;
      case "light":
        setActivityLevel(1.35);
        break;
      case "moderate":
        setActivityLevel(1.44);
        break;
      case "active":
        setActivityLevel(1.52);
        break;
      case "very-active":
        setActivityLevel(1.69);
        break;
      case "extra-active":
        setActivityLevel(1.865);
        break;
      default:
        setActivityLevel(1.44);
    }
    setFieldsFilled([true, true, true]);
  };
  let totalCal = proteinIntake + carbIntake + fatIntake;
  let proteinPercentage = Math.ceil((proteinIntake / totalCal) * 100);
  let carbsPercentage = Math.ceil((carbIntake / totalCal) * 100);
  let fatPercentage = Math.ceil((fatIntake / totalCal) * 100);
  const { Option } = Select;
  return (
    <>
      <div className="navigation-side">
        <Navigation />
        <div className="page-layout">
          <div className="main-title">
            <PieChartFilled className="icon-title" />
            Macros Calculator
          </div>
          <div className="line"></div>
          <div className="main-page-layout">
            <div className="main-page">
              <h2 className="title-macros">Calculate Your Macros</h2>
              <p>
                Craft your ideal macronutrient ratio now using our macros
                calculator
              </p>
              <div>
                <p>System</p>
                <Radio.Group defaultValue="metric" onChange={(e) => {}}>
                  <Radio.Button value="imperial">Imperial</Radio.Button>
                  <Radio.Button value="metric">Metric</Radio.Button>
                </Radio.Group>
              </div>
              <div>
                <p>I am a</p>
                <Radio.Group onChange={handleSex}>
                  <Radio.Button value="male">Male</Radio.Button>
                  <Radio.Button value="female">Female</Radio.Button>
                </Radio.Group>
              </div>
              {/* <div>
                <p>What is your main weight goal?</p>
                <Radio.Group onChange={handleGoal}>
                  <Radio.Button value="lose">Lose</Radio.Button>
                  <Radio.Button value="maintain">Maintain</Radio.Button>
                  <Radio.Button value="gain">Gain</Radio.Button>
                </Radio.Group>
              </div> */}
              <div>
                <p>
                  I am <b>{age}</b> years old
                </p>
                <Slider defaultValue={age} onAfterChange={handleAge} />
              </div>
              <div>
                <p>
                  My Height: <b>{height}</b> cm
                </p>
                <Slider
                  min={0}
                  max={250}
                  defaultValue={height}
                  onAfterChange={handleHeight}
                />
              </div>
              <div>
                <p>
                  Current Weight: <b>{weight}</b> kg
                </p>
                <Slider
                  min={0}
                  max={200}
                  defaultValue={weight}
                  onAfterChange={handleWeight}
                />
              </div>
              <div>
                <p>Activity Level</p>

                <Select
                  defaultValue="choose"
                  style={{ width: 420 }}
                  onChange={handleActivityLevel}
                  options={[
                    {
                      value: "choose",
                      label: "Select activity level",
                    },
                    {
                      value: "sedentary",
                      label: "Sedentary: little or no exercise",
                    },
                    { value: "light", label: "Light: exercise 1-3 times/week" },
                    {
                      value: "moderate",
                      label: "Moderate: exercise 4-5 times/week",
                    },
                    {
                      value: "active",
                      label:
                        "Active: daily exercise or intense exercise 3-4 times/week",
                    },
                    {
                      value: "very-active",
                      label: "Very Active: intense exercise 6-7 times/week",
                    },
                    {
                      value: "extra-active",
                      label:
                        "Extra Active: very intense exercise daily, or physical jobk",
                    },
                  ]}
                />
              </div>
              <div className="calculate-macros-div">
                <Button
                  className="calculate-macros-button"
                  onClick={() => handleBmrComputation()}
                  // disabled={fieldsFilled.some((value) => value === false)}
                >
                  Calculate Macros
                </Button>
              </div>
            </div>
            <div className="daily-macro-title">
              <h2 className="right-side-title">Your Daily Macro Goals</h2>
              <div className="ring">
                <h3>Total Maintain</h3>
                <h3 className="bmr"> {BmrValue} </h3>
                <h3> kcal</h3>
              </div>

              {proteinIntake !== 0 || carbIntake !== 0 || fatIntake !== 0 ? (
                <>
                  <div className="table">
                    <div className="row"></div>

                    <div className="row">
                      <div className="cell">
                        Mild weight loss <div>(0.25 kg/week)</div>
                      </div>
                      <div className="cell">
                        <b>{Math.ceil(BmrValue * 0.92)}</b> <span>(92%)</span>
                        <div>Calories/day</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell">
                        Weight loss <div>(0.5 kg/week)</div>
                      </div>
                      <div className="cell">
                        <b> {Math.ceil(BmrValue * 0.83)}</b> <span>(83%)</span>
                        <div>Calories/day</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="cell">
                        Extreme weight loss <div>(1 kg/week)</div>
                      </div>
                      <div className="cell">
                        <b> {Math.ceil(BmrValue * 0.66)}</b> <span>(66%)</span>
                        <div>Calories/day</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="daily-macro-value">
                <div className="macro-value-div">
                  <div className="value-box-alignment">
                    <Protein />
                    <span className="value-title">{proteinIntake}g</span>
                    <span> Protein</span>
                  </div>
                </div>
                <div className="macro-value-div">
                  <div className="value-box-alignment">
                    <Carbs />
                    <span className="value-title">{carbIntake}g</span>
                    <span> Carbs</span>
                  </div>
                </div>
                <div className="macro-value-div">
                  <div className="value-box-alignment">
                    <Fat />
                    <span className="value-title">{fatIntake}g</span>
                    <span> Fat</span>
                  </div>
                </div>
              </div>
              {proteinIntake !== 0 || carbIntake !== 0 || fatIntake !== 0 ? (
                <>
                  <div className="formula-title">Our formula for you</div>
                  <div className="pie-chart-alignment">
                    <div className="info-panel">
                      If you are counting macros for bodybuilding and muscle
                      gain, you will want to add overall calories to put on
                      weight. Try this range of macro ratio:&nbsp;
                      <div>
                        <b>{proteinPercentage}</b>% protein, &nbsp;
                        <b>{carbsPercentage}%</b> carbs, and&nbsp;
                        <b>{fatPercentage}%</b> fat.
                      </div>
                    </div>
                    <DemoPie
                      proteinIntake={proteinIntake}
                      carbIntake={carbIntake}
                      fatIntake={fatIntake}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="replacement-title">
                    Calculate Macros to see a detailed review
                  </div>
                </>
              )}
              <Link href="/trainers">
                <Button className="find-trainer">Consult with a Trainer</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
