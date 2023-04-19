import React, { useState, createContext, useEffect } from "react";
import { PieChartFilled } from "@ant-design/icons";
import Navigation from "../../components/Navigation";
import CalculateMacros from "../../components/Index/CalculateMacros";
import DailyMacro from "../../components/Index/DailyMacro";
import { Layout } from "antd";
import styled from "styled-components";

enum PageName {
  Home = "/",
  BmiCalculator = "/bmi",
  BodyFatCalculator = "/bodyfa",
  IdealWeight = "/idealweight",
  Trainers = "/trainers",
}

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

  function renderPage(pathname: string) {
    let pageTitle: string;
    switch (pathname) {
      case PageName.BmiCalculator:
        pageTitle = "BMI Calculator";
        break;
      case PageName.BodyFatCalculator:
        pageTitle = "Body Fat Calculator";
        break;
      case PageName.IdealWeight:
        pageTitle = "Ideal Weight Calculator";
        break;
      case PageName.Trainers:
        pageTitle = "Our Trainers";
        break;
      default:
        pageTitle = "Macro Calculator";
        break;
    }
    return <h1>{pageTitle}</h1>;
  }
  return (
    <GlobalContext.Provider value={globalContextValues}>
      <>
        <Layout>
          {/* {typeof window !== "undefined" &&
            renderPage(window.location.pathname)} */}
          {/* <Navigation /> */}
          <Layout>
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
