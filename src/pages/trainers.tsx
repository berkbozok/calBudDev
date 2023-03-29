import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Radio, Slider, Space, Progress, Tooltip } from "antd";
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

export default function Trainers() {
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
      BmrValueComputation = parseInt(bmr.toFixed(0)) * activityLevel * goal;

      setBmrValue(Math.floor(BmrValueComputation));
    } else {
      bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
      BmrValueComputation = parseInt(bmr.toFixed(0)) * activityLevel * goal;
      setBmrValue(Math.floor(BmrValueComputation));
    }

    const proteinIntake = Math.floor(1.4 * weight);
    setProteinIntake(proteinIntake);

    const carbIntake = Math.floor((BmrValueComputation * 0.5) / 4);
    setCarbIntake(carbIntake);

    const fatIntake = Math.floor((BmrValueComputation * 0.3) / 9);
    setFatIntake(fatIntake);
  };
  //protein = 1gr ---> 4cal
  //carb = 1gr --->4cal
  //fat =1gr --->9cal

  const handleSex = (event: any) => {
    setSex(event.target.value);
    setFieldsFilled([true, true, false]);
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
    setFieldsFilled([true, true, true]);
  };

  //test disability
  // const fieldsFilled = activityLevel > 0 && goal > 0 && sex !== "";
  // const proteinPercent = (proteinIntake * 60) / 100;
  // const fatPercent = (fatIntake * 20) / 100;
  // const carbsPercent = (carbIntake * 20) / 100;

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
