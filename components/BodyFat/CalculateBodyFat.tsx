import { PercentageOutlined } from "@ant-design/icons";
import { Select, Typography, Form, InputNumber } from "antd";
import { useState } from "react";
import styled from "styled-components";
import SplitScreen from "../Layout/SplitScreen";

interface CalculateBodyFatProps {
  gender: "male" | "female";
  age: number;
}

const CalculateBodyFatRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
`;

const CalculateBodyFatHeader = styled.div`
  display: flex;
  background-color: #f5f5f5;
  font-size: 1.5rem;
  font-weight: 600;
  color: #596996;
  padding: 1rem 1rem 1rem 1rem;
`;

const CalculateBodyFatMainPage = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled(Typography.Title)`
  text-align: center;
  color: white !important;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const Label = styled(Form.Item)`
  margin-bottom: 8px;
`;

const ButtonContainer = styled(Form.Item)`
  margin-top: 24px;
  text-align: center;
`;

const ResultContainer = styled.div`
  margin-top: 24px;
  text-align: center;
  color: white !important;
`;

const BodyFatInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
  background: #f5f5f5;
  padding: 2.41rem;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #fd3d0d;
  border-radius: 15px;
  min-width: 10rem;
  margin: 1rem;
`;

const CalculateBodyFatButton = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  padding: 0 0 30px 0;
`;

const { Option } = Select;

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

function CalculateBodyFat({ gender, age }: CalculateBodyFatProps) {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [neckSize, setNeckSize] = useState(0);
  const [waistSize, setWaistSize] = useState(0);
  const [bodyFat, setBodyFat] = useState(0);
  const [selectedGender, setGender] = useState<"male" | "female">(gender);
  const [selectedAge, setAge] = useState<number>(age);

  const calculateBodyFat = () => {
    let bodyFatValue;
    if (selectedGender === "male") {
      bodyFatValue =
        495 /
          (1.0324 -
            0.19077 * Math.log10(waistSize - neckSize) +
            0.15456 * Math.log10(height)) -
        450;
    } else {
      bodyFatValue =
        495 /
          (1.29579 -
            0.35004 * Math.log10(waistSize + height - neckSize) +
            0.221 * Math.log10(height)) -
        450;
    }
    setBodyFat(bodyFatValue);
  };
  const getBodyFatStatus = () => {
    if (selectedGender === "male") {
      if (bodyFat < 6) {
        return "Essential Fat";
      } else if (bodyFat >= 6 && bodyFat <= 24) {
        return "Athletic";
      } else if (bodyFat >= 25 && bodyFat <= 29) {
        return "Fitness";
      } else if (bodyFat >= 30 && bodyFat <= 37) {
        return "Acceptable";
      } else {
        return "Obese";
      }
    } else {
      if (bodyFat < 16) {
        return "Essential Fat";
      } else if (bodyFat >= 16 && bodyFat <= 30) {
        return "Athletic";
      } else if (bodyFat >= 31 && bodyFat <= 35) {
        return "Fitness";
      } else if (bodyFat >= 36 && bodyFat <= 42) {
        return "Acceptable";
      } else {
        return "Obese";
      }
    }
  };

  return (
    <CalculateBodyFatRoot>
      <CalculateBodyFatHeader>
        <PercentageOutlined className="icon-title" />
        Body Fat Calculator
      </CalculateBodyFatHeader>
      <CalculateBodyFatMainPage>
        <SplitScreen leftWeight={1} rightWeight={1}>
          <BodyFatInput>
            <FormContainer>
              <Form layout="vertical">
                <Label label="Gender">
                  <Select
                    defaultValue={selectedGender}
                    onChange={(value: "male" | "female") => setGender(value)}
                  >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                </Label>
                <Label label="Age">
                  <InputNumber
                    value={selectedAge}
                    onChange={(value) => setAge(value ?? 0)}
                  />
                </Label>
                <Label label="Height (cm)">
                  <InputNumber
                    value={height}
                    onChange={(value) => setHeight(value ?? 0)}
                  />
                </Label>
                <Label label="Weight (kg)">
                  <InputNumber
                    value={weight}
                    onChange={(value) => setWeight(value ?? 0)}
                  />
                </Label>
                <Label label="Neck Size (cm)">
                  <InputNumber
                    value={neckSize}
                    onChange={(value) => setNeckSize(value ?? 0)}
                  />
                </Label>
                <Label label="Waist Size (cm)">
                  <InputNumber
                    value={waistSize}
                    onChange={(value) => setWaistSize(value ?? 0)}
                  />
                </Label>
                <ButtonContainer>
                  <CalculateBodyFatButton>
                    <button
                      className="btn btn-secondary"
                      onClick={calculateBodyFat}
                    >
                      Calculate Body Fat
                    </button>
                  </CalculateBodyFatButton>
                </ButtonContainer>
              </Form>
            </FormContainer>
          </BodyFatInput>
          {bodyFat !== 0 && (
            <Results>
              <ResultContainer>
                <Title level={4}>Your Body Fat Percentage:</Title>
                <Typography.Paragraph className="results-text">
                  {bodyFat.toFixed(2)}%
                </Typography.Paragraph>
                <Title level={4}>Body Fat Status:</Title>
                <Typography.Paragraph className="results-text">
                  {getBodyFatStatus()}
                </Typography.Paragraph>
              </ResultContainer>
            </Results>
          )}
        </SplitScreen>
      </CalculateBodyFatMainPage>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CalculateBodyFatRoot>
  );
}

export default CalculateBodyFat;
