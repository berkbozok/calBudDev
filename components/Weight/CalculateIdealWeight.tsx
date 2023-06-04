import { Select, Button, Typography, Form, InputNumber } from "antd";
import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons";
import { useState } from "react";
import SplitScreen from "../Layout/SplitScreen";

interface CalculateIdealWeightProps {
  gender: "male" | "female";
  age: number;
  height: number;
}
const { Option } = Select;

const CalculateBodyFatRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  // min-height: 55rem;
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

const IdealWeightInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 24px;
  background: #f5f5f5;
  padding: 15px;
  width: 50%;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #fd3d0d;
  border-radius: 15px;
  min-width: 15rem;
  margin: 1rem;
`;

const CalculateBodyFatButton = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  padding: 0 0 30px 0;
`;

function CalculateIdealWeight({
  gender,
  age,
  height,
}: CalculateIdealWeightProps) {
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
    <CalculateBodyFatRoot>
      <CalculateBodyFatHeader>
        <HeartOutlined className="icon-title" />
        Ideal Weight
      </CalculateBodyFatHeader>
      <CalculateBodyFatMainPage>
        <SplitScreen leftWeight={1} rightWeight={1}>
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
                    <button
                      className="btn btn-secondary"
                      onClick={calculateIdealWeight}
                    >
                      Calculate Ideal Weight
                    </button>
                  </CalculateBodyFatButton>
                </ButtonContainer>
              </Form>
            </FormContainer>
          </IdealWeightInput>
          {idealWeight !== 0 && (
            <Results>
              <ResultContainer>
                <Title level={4} className="results-text">
                  Your Ideal Weight:
                </Title>
                <Typography.Paragraph className="results-text">
                  {idealWeight.toFixed(2)} kg
                </Typography.Paragraph>
              </ResultContainer>
            </Results>
          )}
        </SplitScreen>
      </CalculateBodyFatMainPage>
    </CalculateBodyFatRoot>
  );
}

export default CalculateIdealWeight;
