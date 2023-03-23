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

  const onChange1 = (value: number | [number, number]) => {
    console.log("onChange: ", value);
    if (typeof value === "number") {
      setSliderValue1(value);
    }
  };
  const onAfterChange1 = (value: number | [number, number]) => {
    if (typeof value === "number") {
      setSliderValue1(value);
    }
  };
  const onChange2 = (value: number | [number, number]) => {
    console.log("onChange2: ", value);
    if (typeof value === "number") {
      setSliderValue2(value);
    }
  };

  const onAfterChange2 = (value: number | [number, number]) => {
    console.log("onAfterChange2: ", value);
    if (typeof value === "number") {
      setSliderValue2(value);
    }
  };

  const onChange3 = (value: number | [number, number]) => {
    console.log("onChange3: ", value);
    if (typeof value === "number") {
      setSliderValue3(value);
    }
  };

  const onAfterChange3 = (value: number | [number, number]) => {
    console.log("onAfterChange3: ", value);
    if (typeof value === "number") {
      setSliderValue3(value);
    }
  };

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
              <h2>Calculate Your Macros</h2>
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
                <p>I'm a</p>
                <Radio.Group>
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
                  I am <b>{sliderValue1}</b> years old
                </p>
                <Slider
                  defaultValue={25}
                  onChange={onChange1}
                  onAfterChange={onAfterChange1}
                />
              </div>
              <div>
                <p>
                  My Height: <b>{sliderValue2}</b> cm
                </p>
                <Slider
                  min={0}
                  max={250}
                  defaultValue={170}
                  onChange={onChange2}
                  onAfterChange={onAfterChange2}
                />
              </div>
              <div>
                <p>
                  Current Weight: <b>{sliderValue3}</b> kg
                </p>
                <Slider
                  min={0}
                  max={200}
                  defaultValue={75}
                  onChange={onChange3}
                  onAfterChange={onAfterChange3}
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
                <Button className="calculate-macros-button">
                  Calculate Macros
                </Button>
              </div>
            </div>
            <div className="daily-macro-title">
              <h2 className="right-side-title">Your Daily Macro Goals</h2>
              <h3>Total 2300 kcal</h3>
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
