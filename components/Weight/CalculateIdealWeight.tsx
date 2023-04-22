import React, { useState } from "react";
import { Input, Select, Button, Typography, Form, InputNumber } from "antd";
import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons";
import { Layout } from "antd";
interface CalculateIdealWeightProps {
  gender: "male" | "female";
  age: number;
  height: number;
}
const { Option } = Select;

const Title = styled(Typography.Title)`
  text-align: center;
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
`;

const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column !important;
  }
`;

const IdealWeightInput = styled.div`
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

const CalculateBodyFatButton = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  padding: 0 0 30px 0;
`;

const CalculateIdealWeight: React.FC<CalculateIdealWeightProps> = ({
  gender,
  age,
  height,
}) => {
  const [selectedGender, setGender] = useState<"male" | "female">(gender);
  const [selectedAge, setAge] = useState<number>(age);
  const [selectedHeight, setHeight] = useState<number>(height);
  const [idealWeight, setIdealWeight] = useState<number>(0);

  const calculateIdealWeight = () => {
    let idealWeightValue;
    if (selectedGender === "male") {
      idealWeightValue =
        52 +
        1.9 * (selectedHeight / 2.54 - 60) +
        (selectedHeight / 2.54 - 60) * ((selectedAge - 18) / 10);
    } else {
      idealWeightValue =
        49 +
        1.7 * (selectedHeight / 2.54 - 60) +
        (selectedHeight / 2.54 - 60) * ((selectedAge - 18) / 10);
    }
    setIdealWeight(idealWeightValue);
  };

  const { Header } = Layout;

  return (
    <>
      <Header className="main-title">
        <HeartOutlined className="icon-title" />
        Macros Calculator
      </Header>
      <MainPage>
        <IdealWeightInput>
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
                  value={selectedHeight}
                  onChange={(value) => setHeight(value ?? 0)}
                />
              </Label>
              <ButtonContainer>
                <CalculateBodyFatButton>
                  <Button
                    className="calculate-bmi-button"
                    onClick={calculateIdealWeight}
                  >
                    Calculate Ideal Weight
                  </Button>
                </CalculateBodyFatButton>
              </ButtonContainer>
            </Form>
          </FormContainer>
        </IdealWeightInput>
        {idealWeight !== 0 && (
          <Results>
            <ResultContainer>
              <Title level={4}>Your Ideal Weight:</Title>
              <Typography.Paragraph>
                {idealWeight.toFixed(2)} kg
              </Typography.Paragraph>
            </ResultContainer>
          </Results>
        )}
      </MainPage>
    </>
  );
};

export default CalculateIdealWeight;
