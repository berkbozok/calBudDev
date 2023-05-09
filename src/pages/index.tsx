import React, { useState, createContext } from "react";
import { Layout } from "antd";
import CalculateMacros from "../../components/Index/CalculateMacros";

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

  const { Content } = Layout;

  return (
    <GlobalContext.Provider value={globalContextValues}>
      <>
        <Layout>
          <Content>
            <div className="line" />
            <CalculateMacros />
          </Content>
        </Layout>
      </>
    </GlobalContext.Provider>
  );
}
