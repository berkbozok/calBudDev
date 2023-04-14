import React, { useState } from "react";
import { Input, Select, Button, Typography, Form, InputNumber } from "antd";
import styled from "styled-components";

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

  return (
    <>
      <Title level={2}>Ideal Weight Calculator</Title>
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
            <Button type="primary" onClick={calculateIdealWeight}>
              Calculate Ideal Weight
            </Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
      {idealWeight !== 0 && (
        <ResultContainer>
          <Title level={4}>Your Ideal Weight:</Title>
          <Typography.Paragraph>
            {idealWeight.toFixed(2)} kg
          </Typography.Paragraph>
        </ResultContainer>
      )}
    </>
  );
};

export default CalculateIdealWeight;
