import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button, Radio, Slider, Space } from "antd";
import {
  CalculatorFilled,
  HeartFilled,
  PercentageOutlined,
  PieChartFilled,
} from "@ant-design/icons";
import React, { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [sliderValue1, setSliderValue1] = useState<number>(25);
  const [sliderValue2, setSliderValue2] = useState<number>(170);
  const [sliderValue3, setSliderValue3] = useState<number>(75);
  const [BmrValue, setBmrValue] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [sex, setSex] = useState<string>('')
  const [weight, setWeight] = useState<number>(0)
  const [age, setAge] = useState<number>(0)

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

  const handleBmrComputation = () => {
    let bmr;
    if (sex === 'male') {
      bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)
      setBmrValue(bmr)
    } else {
      bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
      setBmrValue(bmr)
    }
  }

  const handleSex = (event: any) => {
    setSex(event.target.value)
  }

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
                <Radio.Group>
                  <Radio.Button value="imperial">Imperial</Radio.Button>
                  <Radio.Button value="metric">Metric</Radio.Button>
                </Radio.Group>
              </div>
              <div>
                <p>I am a</p>
                <Radio.Group onChange={ handleSex}>
                  <Radio.Button value="male">Male</Radio.Button>
                  <Radio.Button value="female">Female</Radio.Button>
                </Radio.Group>
              </div>
              <div>
                <p>What is your main weight goal?</p>
                <Radio.Group>
                  <Radio.Button value="lose">Lose</Radio.Button>
                  <Radio.Button value="maintain">Maintain</Radio.Button>
                  <Radio.Button value="gain">Gain</Radio.Button>
                </Radio.Group>
              </div>
              <div>
                <p>
                  I am <b>{age}</b> years old
                </p>
                <Slider
                  defaultValue={25}
                  onAfterChange={handleAge}
                />
              </div>
              <div>
                <p>
                  My Height: <b>{height}</b> cm
                </p>
                <Slider
                  min={0}
                  max={250}
                  defaultValue={170}
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
                  defaultValue={75}
                  onAfterChange={handleWeight}
                />
              </div>
              <div>
                <p>Activity Level</p>
                <Radio.Group>
                  <Radio.Button value="sedentary">Sedentary</Radio.Button>
                  <Radio.Button value="moderate">Moderate</Radio.Button>
                  <Radio.Button value="active">Active</Radio.Button>
                </Radio.Group>
              </div>
              <div className="calculate-macros-div">
                <Button className="calculate-macros-button" onClick={() => handleBmrComputation()}>
                  Calculate Macros
                </Button>
              </div>
            </div>
            <div className="daily-macro-title">
              <h2 className="right-side-title">Your Daily Macro Goals</h2>
              <h3>Total {BmrValue} kcal</h3>
              <h4>Daily Macros</h4>
              <div className="daily-macro-value">
                <div className="macro-value-div">75gr protein</div>
                <div className="macro-value-div">36gr carbs</div>
                <div className="macro-value-div">62gr fat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
