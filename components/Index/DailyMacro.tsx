import React, { useContext } from "react";
import Protein from "../../shared/protein";
import Fat from "../../shared/fat";
import Carbs from "../../shared/carbs";
import DemoPie from "../../components/Charts/PieChart";
import Link from "next/link";
import { GlobalContext, globalContextTypes } from "@/pages/_app";
import { Button } from "antd";
import styled from "styled-components";

const DailyMacroRoot = styled.div`
  display: flex;
  height: 100%;
  background: #f5f5f5;
`;

const DailyMacroTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin: 0 auto;
`;

const RightSideTitle = styled.div`
  color: #001858;
  font-weight: 740;
  margin-bottom: 40px;
  margin-top: -20px;
  font-size: 25px;
`;

const Ring = styled.div`
  width: 220px;
  height: 220px;
  border: 20px solid pink;
  border-radius: 50%;
  box-sizing: border-box;
  text-align: center;
  line-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }
`;

const RingText = styled.h3`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  color: rgb(127, 135, 157);
  font-weight: 600;
  font-size: 17px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.div`
  flex-basis: 50%;
  margin-left: 30px;
`;

const DailyMacroValue = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const MacroValueDiv = styled.div`
  background-color: #fd3d0d;
  margin: 10px;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const ValueBoxAlignment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const ValueTitle = styled.div`
  font-weight: 700;
  color: rgb(0, 24, 88);
  font-size: 25px !important;
`;

const ValueName = styled.span`
  color: #001858;
  font-weight: 700;
  margin-top: 0.3rem;
`;

const FormulaTitle = styled.div`
  color: #001858;
  font-size: 35px;
  font-weight: 600;
  margin-top: 10px;
`;

const PieChartAlignment = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
`;

const InfoPanel = styled.div`
  width: 60%;
  line-height: 1.5;
  color: #697491;
  margin-top: 10px;
`;

const ReplacementTitle = styled.div`
  margin: 10px;
  color: #001858;
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  text-align: center;
`;

const Bmr = styled.h3`
  font-weight: 700;
  color: rgb(0, 24, 88);
  font-size: 38px !important;
`;

const BmrCalculate = styled.h3`
  font-weight: 700;
  color: rgb(0, 24, 88);
  font-size: 35px !important;
  margin: 3px;
`;

function DailyMacro() {
  const { fatIntake, carbIntake, proteinIntake, bmrValue }: globalContextTypes =
    useContext(GlobalContext);

  let totalCal = proteinIntake + carbIntake + fatIntake;
  let proteinPercentage = Math.ceil((proteinIntake / totalCal) * 100);
  let carbsPercentage = Math.ceil((carbIntake / totalCal) * 100);
  let fatPercentage = Math.ceil((fatIntake / totalCal) * 100);
  return (
    <DailyMacroRoot>
      <DailyMacroTitle>
        <RightSideTitle>Your Daily Macro Goals</RightSideTitle>
        <Ring>
          <RingText>Total Maintain</RingText>
          {bmrValue !== 0 ? (
            <Bmr> {bmrValue} </Bmr>
          ) : (
            <BmrCalculate> Calculate </BmrCalculate>
          )}
          <RingText> kcal</RingText>
        </Ring>
        {proteinIntake !== 0 || carbIntake !== 0 || fatIntake !== 0 ? (
          <>
            <Table>
              <TableRow></TableRow>
              <TableRow>
                <TableCell>
                  Mild weight loss <div>(0.25 kg/week)</div>
                </TableCell>
                <TableCell>
                  <b>{Math.ceil(bmrValue * 0.92)}</b> <span>(92%)</span>
                  <div>Calories/day</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Weight loss <div>(0.5 kg/week)</div>
                </TableCell>
                <TableCell>
                  <b> {Math.ceil(bmrValue * 0.83)}</b> <span>(83%)</span>
                  <div>Calories/day</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Extreme weight loss <div>(1 kg/week)</div>
                </TableCell>
                <TableCell>
                  <b> {Math.ceil(bmrValue * 0.66)}</b> <span>(66%)</span>
                  <div>Calories/day</div>
                </TableCell>
              </TableRow>
            </Table>
          </>
        ) : (
          <></>
        )}
        <DailyMacroValue>
          <MacroValueDiv>
            <ValueBoxAlignment>
              <Protein />
              <ValueTitle>{proteinIntake}g</ValueTitle>
              <ValueName> Protein</ValueName>
            </ValueBoxAlignment>
          </MacroValueDiv>
          <MacroValueDiv>
            <ValueBoxAlignment>
              <Carbs />
              <ValueTitle>{carbIntake}g</ValueTitle>
              <ValueName> Carbs</ValueName>
            </ValueBoxAlignment>
          </MacroValueDiv>
          <MacroValueDiv>
            <ValueBoxAlignment>
              <Fat />
              <ValueTitle>{fatIntake}g</ValueTitle>
              <ValueName> Fat</ValueName>
            </ValueBoxAlignment>
          </MacroValueDiv>
        </DailyMacroValue>
        {proteinIntake !== 0 || carbIntake !== 0 || fatIntake !== 0 ? (
          <>
            <FormulaTitle>Our formula for you</FormulaTitle>
            <PieChartAlignment>
              <InfoPanel>
                If you are counting macros for bodybuilding and muscle gain, you
                will want to add overall calories to put on weight. Try this
                range of macro ratio:&nbsp;
                <div>
                  <b>{proteinPercentage}</b>% protein, &nbsp;
                  <b>{carbsPercentage}%</b> carbs, and&nbsp;
                  <b>{fatPercentage}%</b> fat.
                </div>
              </InfoPanel>
              <DemoPie
                proteinIntake={proteinIntake}
                carbIntake={carbIntake}
                fatIntake={fatIntake}
              />
            </PieChartAlignment>
          </>
        ) : (
          <>
            <ReplacementTitle>
              Calculate Macros to see a detailed review
            </ReplacementTitle>
          </>
        )}
        <Link href="/trainers">
          <Button className="find-trainer">Consult with a Trainer</Button>
        </Link>
      </DailyMacroTitle>
    </DailyMacroRoot>
  );
}

export default DailyMacro;
