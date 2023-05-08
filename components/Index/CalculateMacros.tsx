import { PieChartOutlined } from "@ant-design/icons";
import { Button, InputNumber, Radio, Select, Slider } from "antd";
import styled from "styled-components";
import SplitScreen from "../Layout/SplitScreen";
import { globalContextTypes, GlobalContext } from "@/pages";
import { useContext, useState } from "react";
import DailyMacro from "./DailyMacro";

const CalculateMacrosRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fef6e4;
  min-height: 55rem;
`;

const CalculateMacrosHeader = styled.div`
  display: flex;
  background-color: #fef6e4;
  font-size: 1.5rem;
  font-weight: 600;
  color: #596996;
  padding: 1rem 1rem 1rem 1rem;
`;

const CalculateMacrosPage = styled.div`
  display: flex;
  flex-direction: row;
`;

const MacrosMainPage = styled.div`
  background-color: #feece4;
  max-height: 100%;
  padding: 5%; 0 0 0 ;
`;

const TitleMacros = styled.h2`
  color: #001858;
  font-weight: 700;
`;

const CalculateMacrosDiv = styled.div`
  /* margin-top: 40px; */
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

function CalculateMacros() {
  const {
    setBmrValue,
    setProteinIntake,
    setCarbIntake,
    setFatIntake,
  }: globalContextTypes = useContext(GlobalContext);

  const [sex, setSex] = useState<string>("");
  const [fieldsFilled, setFieldsFilled] = useState([false, false, false]);
  const [activityLevel, setActivityLevel] = useState<number>(1.0);
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [unitMeasure, setUnitMeaure] = useState<string>("metric");

  const handleSex = (event: any) => {
    setSex(event.target.value);
    setFieldsFilled([true, true, false]);
  };

  const handleHeight = (value: number | null) => {
    if (typeof value === "number") {
      setHeight(value);
    }
  };

  const handleWeight = (value: number | null) => {
    if (typeof value === "number") {
      setWeight(value);
    }
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
  const handleAge = (value: number | null) => {
    if (typeof value === "number") {
      setAge(value);
    }
  };

  const handleUnitMeasure = (event: any) => {
    setWeight(0);
    setHeight(0);
    console.log("event", event.target.value);
    const unitMeasure = event.target.value;
    if (unitMeasure === "imperial") {
      setUnitMeaure("imperial");
    } else {
      setUnitMeaure("metric");
    }
  };

  return (
    <CalculateMacrosRoot>
      <CalculateMacrosHeader>
        {" "}
        <PieChartOutlined className="icon-title" />
        Macros Calculator
      </CalculateMacrosHeader>
      <CalculateMacrosPage>
        <SplitScreen leftWeight={1} rightWeight={1}>
          <MacrosMainPage>

          <TitleMacros>Calculate Your Macros</TitleMacros>
        <p>
          Craft your ideal macronutrient ratio now using our macros calculator
        </p>
        <div>
          <p>System</p>
          <Radio.Group defaultValue="metric" onChange={handleUnitMeasure}>
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
          <p>
            I am <b>{age}</b> years old
          </p>
          <InputNumber
            min={1}
            max={100}
            value={age}
            onChange={handleAge}
            style={{ width: 100 }}
          />
        </div>
        <div>
          <p>
            My Height: <b>{height}</b>{" "}
            {unitMeasure === "metric" ? "cm" : "inch"}
          </p>
          <InputNumber
            min={1}
            max={400}
            value={height}
            onChange={handleHeight}
            style={{ width: 100 }}
          />
        </div>
        <div>
          <p>
            Current Weight: <b>{weight}</b>{" "}
            {unitMeasure === "metric" ? "kg" : "pounds"}
          </p>
          <InputNumber
            min={1}
            max={400}
            value={weight}
            onChange={handleWeight}
            style={{ width: 100 }}
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
        <CalculateMacrosDiv>
          <Button
            className="calculate-macros-button"
            onClick={() => handleBmrComputation()}
          >
            Calculate Macros
          </Button>
        </CalculateMacrosDiv>
          </MacrosMainPage>
          <DailyMacro />
        </SplitScreen>
      </CalculateMacrosPage>
    </CalculateMacrosRoot>
  );
}

export default CalculateMacros;
