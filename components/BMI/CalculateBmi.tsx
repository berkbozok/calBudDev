import React, { useState } from "react";
import {
  Input,
  Select,
  Button,
  Typography,
  Form,
  InputNumber,
  Row,
  Col,
} from "antd";
import styled from "styled-components";

interface BmiCalculatorProps {
  gender: "male" | "female";
  age: number;
}
const { Option } = Select;

const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column !important;
  }
`;

const BmiInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
  background: #fef6e4;
  padding: 15px;
  width: 50%;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #f1ead9;
`;

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
    <>
      <MainPage>
        <BmiInputs>
          <Typography.Title level={2}>BMI Calculator</Typography.Title>
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
              <Typography>Gender: </Typography>
              <Select value={selectedGender} onChange={setGender}>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Typography>Age: </Typography>
              <InputNumber
                value={selectedAge}
                onChange={(value) => setAge(value ? +value : 0)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={calculateBmi}>
                Calculate BMI
              </Button>
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
          </Results>
        )}
      </MainPage>
    </>
  );
};

export default BmiCalculator;
