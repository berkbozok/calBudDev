import '@/styles/globals.css'
import React, { useState, createContext } from 'react'

import type { AppProps } from 'next/app'
// ant design
import 'antd/dist/reset.css'
import LayoutPage from '../../components/Layout/LayoutPage'
export const GlobalContext = createContext<any>(null)
export type globalContextTypes = {
  bmrValue: number
  setBmrValue: React.Dispatch<React.SetStateAction<number>>
  proteinIntake: number
  setProteinIntake: React.Dispatch<React.SetStateAction<number>>
  carbIntake: number
  setCarbIntake: React.Dispatch<React.SetStateAction<number>>
  fatIntake: number
  setFatIntake: React.Dispatch<React.SetStateAction<number>>
}
export default function App({ Component, pageProps }: AppProps) {
  const [proteinIntake, setProteinIntake] = useState<number>(0)
  const [carbIntake, setCarbIntake] = useState<number>(0)
  const [fatIntake, setFatIntake] = useState<number>(0)
  const [bmrValue, setBmrValue] = useState<number>(0)
  const globalContextValues: globalContextTypes = {
    bmrValue,
    setBmrValue,
    proteinIntake,
    setProteinIntake,
    carbIntake,
    setCarbIntake,
    fatIntake,
    setFatIntake,
  }

  return (
    <GlobalContext.Provider value={globalContextValues}>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </GlobalContext.Provider>
  )
}
