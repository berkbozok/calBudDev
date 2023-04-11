import React, { useState, createContext } from "react";
import { PieChartFilled } from "@ant-design/icons";
import Navigation from "../../components/Navigation";
import CalculateMacros from "../../components/Index/CalculateMacros";
import DailyMacro from "../../components/Index/DailyMacro";
import { Layout } from "antd";

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
  const { Header, Content } = Layout;

  return (
    <GlobalContext.Provider value={globalContextValues}>
      <>
        <Layout>
          <Navigation />
          <Layout>
            <Header className="main-title">
              <PieChartFilled className="icon-title" />
              Macros Calculator
            </Header>
            <Content>
              <div className="line"></div>
              <div className="main-page-layout">
                <CalculateMacros />
                <DailyMacro />
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    </GlobalContext.Provider>
  );
}
