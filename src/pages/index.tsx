import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { Button, Radio, Slider, Space } from "antd";
import {
  CalculatorFilled,
  HeartFilled,
  PercentageOutlined,
  PieChartFilled,
} from "@ant-design/icons";
import React, { useState } from "react";
import Protein from "../../shared/protein";
import Fat from "../../shared/fat";
import Carbs from "../../shared/carbs";
const inter = Inter({ subsets: ["latin"] });

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
  const [fieldsFilled, setFieldsFilled] = useState(false);

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
    setFieldsFilled(!!activityLevel && !!goal && !!sex);
  };

  const handleBmrComputation = () => {
    let bmr;
    let BmrValueComputation;
    if (sex === "male") {
      bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
      BmrValueComputation = parseInt(bmr.toFixed(0)) * activityLevel * goal;

      setBmrValue(BmrValueComputation);
    } else {
      bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
      BmrValueComputation = parseInt(bmr.toFixed(0)) * activityLevel * goal;
      setBmrValue(BmrValueComputation);
    }

    const proteinIntake = Number(
      (0.825 * weight * activityLevel * goal).toFixed(2)
    );
    setProteinIntake(proteinIntake); // for protein only
    const carbIntake = Number(
      (((BmrValueComputation * 0.5) / 4) * activityLevel * goal).toFixed(2)
    );
    setCarbIntake(carbIntake);
    const fatIntake = Number(
      (((BmrValueComputation * 0.3) / 9) * activityLevel * goal).toFixed(2)
    );
    setFatIntake(fatIntake);
  };

  const handleSex = (event: any) => {
    setSex(event.target.value);
    setFieldsFilled(!!activityLevel && !!goal && !!sex);
  };

  const handleActivityLevel = (event: any) => {
    const value = event.target.value;
    if (!value) {
      setGoal(value);
    }

    switch (value) {
      case "sedentary":
        setActivityLevel(1.2);
        break;
      case "moderate":
        setActivityLevel(1.55);

        break;
      case "active":
        setActivityLevel(1.9);
        break;
      default:
        setActivityLevel(1.0);
    }
    setFieldsFilled(!!activityLevel && !!goal && !!sex);
  };

  // const fieldsFilled = activityLevel > 0 && goal > 0 && sex !== "";

  return (
    <>
      <div className="navigation-side">
        <div className="nav-bar">
          <div className="title">CalBud</div>
          <div className="nav-item-list">
            <a>
              <div className="items">
                <PieChartFilled className="icon" />
                Macros Cals
              </div>
            </a>
            <a>
              <div className="items">
                <CalculatorFilled className="icon" />
                BMI Calc
              </div>
            </a>
            <a>
              <div className="items">
                <PercentageOutlined className="icon" />
                Body Fat Calc
              </div>
            </a>
            <a>
              <div className="items">
                <HeartFilled className="icon" />
                Ideal Weight
              </div>
            </a>
          </div>
          <div className="button-div">
            <Button className="upgrade-button">Upgrade</Button>
          </div>
        </div>
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
                <Radio.Group onChange={(e) => {}}>
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
              <div>
                <p>What is your main weight goal?</p>
                <Radio.Group onChange={handleGoal}>
                  <Radio.Button value="lose">Lose</Radio.Button>
                  <Radio.Button value="maintain">Maintain</Radio.Button>
                  <Radio.Button value="gain">Gain</Radio.Button>
                </Radio.Group>
              </div>
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
                <Radio.Group onChange={handleActivityLevel}>
                  <Radio.Button value="sedentary">Sedentary</Radio.Button>
                  <Radio.Button value="moderate">Moderate</Radio.Button>
                  <Radio.Button value="active">Active</Radio.Button>
                </Radio.Group>
              </div>
              <div className="calculate-macros-div">
                <Button
                  className="calculate-macros-button"
                  onClick={() => handleBmrComputation()}
                  disabled={!fieldsFilled}
                >
                  Calculate Macros
                </Button>
              </div>
            </div>
            <div className="daily-macro-title">
              <h2 className="right-side-title">Your Daily Macro Goals</h2>
              <h3>Total {BmrValue} kcal</h3>
              <h4>Daily Macros</h4>
              <div className="daily-macro-value">
                <div className="macro-value-div">
                  <div className="value-box-alignment">
                    <Protein />
                    <span>{proteinIntake}gr protein</span>
                  </div>
                </div>
                <div className="macro-value-div">
                  <div className="value-box-alignment">
                    <Carbs />
                    <span>{carbIntake}gr carbs</span>
                  </div>
                </div>
                <div className="macro-value-div">
                  <div className="value-box-alignment">
                    <Fat />
                    <span>{fatIntake}gr fat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
