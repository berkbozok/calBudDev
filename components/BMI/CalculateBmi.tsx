import styled from "styled-components";
import { CalculatorOutlined } from "@ant-design/icons";
import { Select, Button, Typography, Form, InputNumber } from "antd";
import { useState } from "react";
import { Gauge } from "@ant-design/plots";
import SplitScreen from "../Layout/SplitScreen";

interface BmiCalculatorProps {
  gender: "male" | "female";
  age: number;
}

const CalculateBmiRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  min-height: 55rem;
`;

const CalculateBmiHeader = styled.div`
  display: flex;
  background-color: #f5f5f5;
  font-size: 1.5rem;
  font-weight: 600;
  color: #596996;
  padding: 1rem 1rem 1rem 1rem;
`;

const CalculateBmiMainPage = styled.div`
  display: flex;
  flex-direction: row;
`;

const BmiInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
  background: #f5f5f5;
  padding: 1rem;
  min-width: 50%;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #f1ead9;
`;

const CalculateBmiButton = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  padding: 0 0 30px 0;
`;

function CalculateBmi({ gender, age }: BmiCalculatorProps) {
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

  interface GaugeConfig {
    percent: number;
    range: {
      color: string;
    };
    indicator: {
      pointer: {
        style: {
          stroke: string;
        };
      };
      pin: {
        style: {
          stroke: string;
        };
      };
    };
    axis: {
      label: {
        formatter(v: number): number;
      };
      subTickLine: {
        count: number;
      };
    };
    statistic?: {
      title?: "hello" | false | undefined;
      content?: "hi" | undefined;
      style?: "red" | undefined;
    };
  }
  return (
    <CalculateBmiRoot>
      <CalculateBmiHeader>
        <CalculatorOutlined className="icon-title" />
        BMI Calculator
      </CalculateBmiHeader>
      <CalculateBmiMainPage>
        <SplitScreen leftWeight={1} rightWeight={1}>
          <BmiInputs>
            <Typography.Title level={5}>Calculate your BMI</Typography.Title>
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <Form.Item>
                <Typography>Height (cm): </Typography>
                <InputNumber
                  value={height}
                  onChange={(value) => setHeight(value ? +value : 0)}
                />
              </Form.Item>
              <Form.Item>
                <Typography>Weight (kg): </Typography>
                <InputNumber
                  value={weight}
                  onChange={(value) => setWeight(value ? +value : 0)}
                />
              </Form.Item>
              <Form.Item>
                <Typography>Age: </Typography>
                <InputNumber
                  value={selectedAge}
                  onChange={(value) => setAge(value ? +value : 0)}
                />
              </Form.Item>
              <Form.Item>
                <Typography>Gender: </Typography>
                <Select value={selectedGender} onChange={setGender}>
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <CalculateBmiButton>
                  <Button
                    className="calculate-bmi-button"
                    onClick={calculateBmi}
                  >
                    Calculate BMI
                  </Button>
                </CalculateBmiButton>
              </Form.Item>
            </Form>
          </BmiInputs>
          {bmi > 0 && (
            <Results>
              <Typography.Paragraph>
                Your BMI is: <b>{bmi.toFixed(1)}</b>
              </Typography.Paragraph>
              <Typography.Paragraph>
                Your BMI status is: <b>{getBmiStatus()}</b>
              </Typography.Paragraph>
              <Typography.Paragraph>
                Normal BMI range for your age and gender is:
                <b> {getBmiStatusByAgeAndGender()}</b>
              </Typography.Paragraph>
              <Typography.Paragraph>
                Normal BMI range for your height is: <b>{getBmiRange()}</b>
              </Typography.Paragraph>
              <Gauge
                percent={bmi / 100}
                range={{
                  color: "#30bf78",
                }}
                indicator={{
                  pointer: {
                    style: {
                      stroke: "#30bf78",
                    },
                  },
                  pin: {
                    style: {
                      stroke: "#30bf78",
                    },
                  },
                }}
                axis={{
                  label: {
                    formatter: (v) => `${+v * 100}`,
                  },
                  subTickLine: {
                    count: 5,
                  },
                }}
                statistic={{
                  title: false,
                }}
              />
            </Results>
          )}
        </SplitScreen>
      </CalculateBmiMainPage>
    </CalculateBmiRoot>
  );
}

export default CalculateBmi;
