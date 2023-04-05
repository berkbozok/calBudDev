import React, { useState, useEffect, createContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Radio, Slider, Space, Progress, Tooltip, Select } from 'antd'
import {
  CalculatorFilled,
  HeartFilled,
  PercentageOutlined,
  PieChartFilled,
} from '@ant-design/icons'
import Protein from '../../shared/protein'
import Fat from '../../shared/fat'
import Carbs from '../../shared/carbs'
import DemoPie from '../../components/Charts/PieChart'
import Link from 'next/link'
import Navigation from '../../components/Navigation'
import CalculateMacros from '../../components/Index/CalculateMacros'

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
export default function Home() {
  const [goal, setGoal] = useState<number>(1.0)
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
    setFatIntake
  }

  let totalCal = proteinIntake + carbIntake + fatIntake
  let proteinPercentage = Math.ceil((proteinIntake / totalCal) * 100)
  let carbsPercentage = Math.ceil((carbIntake / totalCal) * 100)
  let fatPercentage = Math.ceil((fatIntake / totalCal) * 100)

  return (
   <GlobalContext.Provider value={globalContextValues} >
    <>
      <div className='navigation-side'>
        <Navigation />
        <div className='page-layout'>
          <div className='main-title'>
            <PieChartFilled className='icon-title' />
            Macros Calculator
          </div>
          <div className='line'></div>
          <div className='main-page-layout'>
            <CalculateMacros />
            <div className='daily-macro-title'>
              <h2 className='right-side-title'>Your Daily Macro Goals</h2>
              <div className='ring'>
                <h3>Total Maintain</h3>
                <h3 className='bmr'> {bmrValue} </h3>
                <h3> kcal</h3>
              </div>

              {proteinIntake !== 0 || carbIntake !== 0 || fatIntake !== 0 ? (
                <>
                  <div className='table'>
                    <div className='row'></div>

                    <div className='row'>
                      <div className='cell'>
                        Mild weight loss <div>(0.25 kg/week)</div>
                      </div>
                      <div className='cell'>
                        <b>{Math.ceil(bmrValue * 0.92)}</b> <span>(92%)</span>
                        <div>Calories/day</div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='cell'>
                        Weight loss <div>(0.5 kg/week)</div>
                      </div>
                      <div className='cell'>
                        <b> {Math.ceil(bmrValue * 0.83)}</b> <span>(83%)</span>
                        <div>Calories/day</div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='cell'>
                        Extreme weight loss <div>(1 kg/week)</div>
                      </div>
                      <div className='cell'>
                        <b> {Math.ceil(bmrValue * 0.66)}</b> <span>(66%)</span>
                        <div>Calories/day</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className='daily-macro-value'>
                <div className='macro-value-div'>
                  <div className='value-box-alignment'>
                    <Protein />
                    <span className='value-title'>{proteinIntake}g</span>
                    <span> Protein</span>
                  </div>
                </div>
                <div className='macro-value-div'>
                  <div className='value-box-alignment'>
                    <Carbs />
                    <span className='value-title'>{carbIntake}g</span>
                    <span> Carbs</span>
                  </div>
                </div>
                <div className='macro-value-div'>
                  <div className='value-box-alignment'>
                    <Fat />
                    <span className='value-title'>{fatIntake}g</span>
                    <span> Fat</span>
                  </div>
                </div>
              </div>
              {proteinIntake !== 0 || carbIntake !== 0 || fatIntake !== 0 ? (
                <>
                  <div className='formula-title'>Our formula for you</div>
                  <div className='pie-chart-alignment'>
                    <div className='info-panel'>
                      If you are counting macros for bodybuilding and muscle
                      gain, you will want to add overall calories to put on
                      weight. Try this range of macro ratio:&nbsp;
                      <div>
                        <b>{proteinPercentage}</b>% protein, &nbsp;
                        <b>{carbsPercentage}%</b> carbs, and&nbsp;
                        <b>{fatPercentage}%</b> fat.
                      </div>
                    </div>
                    <DemoPie
                      proteinIntake={proteinIntake}
                      carbIntake={carbIntake}
                      fatIntake={fatIntake}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className='replacement-title'>
                    Calculate Macros to see a detailed review
                  </div>
                </>
              )}
              <Link href='/trainers'>
                <Button className='find-trainer'>Consult with a Trainer</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
    </GlobalContext.Provider>
  )
}
