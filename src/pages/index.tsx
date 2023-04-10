import React, { useState, createContext } from "react";
import { PieChartFilled } from "@ant-design/icons";
import Navigation from "../../components/Navigation";
import CalculateMacros from "../../components/Index/CalculateMacros";
import DailyMacro from "../../components/Index/DailyMacro";
import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";

export const GlobalContext = createContext<any>(null);

export type globalContextTypes = {
  bmrValue: number;
  setBmrValue: React.Dispatch<React.SetStateAction<number>>;
  proteinIntake: number;
  setProteinIntake: React.Dispatch<React.SetStateAction<number>>;
  carbIntake: number;
  setCarbIntake: React.Dispatch<React.SetStateAction<number>>;
  fatIntake: number;
  setFatIntake: React.Dispatch<React.SetStateAction<number>>;
};

const NavigationSide = styled.div`
  display: flex;
  flex-direction: row;
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const LineDivider = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: rgba(18, 18, 18, 0.125);
`;

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fef6e4;
  color: #b2b4ba;

  @media only screen and (max-width: 767px) {
    .main-page-layout {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default function Home() {
  const [proteinIntake, setProteinIntake] = useState<number>(0);
  const [carbIntake, setCarbIntake] = useState<number>(0);
  const [fatIntake, setFatIntake] = useState<number>(0);
  const [bmrValue, setBmrValue] = useState<number>(0);
  const globalContextValues: globalContextTypes = {
    bmrValue,
    setBmrValue,
    proteinIntake,
    setProteinIntake,
    carbIntake,
    setCarbIntake,
    fatIntake,
    setFatIntake,
  };
  const { Header } = Layout;

  return (
    <GlobalContext.Provider value={globalContextValues}>
      <>
        <Layout>
          <div className="navigation-side">
            <Navigation />
            <Layout>
              <PageLayout>
                <Header className="main-title">
                  <PieChartFilled className="icon-title" />
                  Macros Calculator
                </Header>
                <LineDivider></LineDivider>
                <MainPageLayout>
                  <CalculateMacros />
                  <DailyMacro />
                </MainPageLayout>
              </PageLayout>
            </Layout>
          </div>
        </Layout>
      </>
    </GlobalContext.Provider>
  );
}
