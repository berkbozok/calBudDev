import React, { useState, useContext } from 'react'
import { Button, Radio, Select, Slider } from 'antd'
import { GlobalContext, globalContextTypes} from '@/pages'

function CalculateMacros() {

    const {setBmrValue, setProteinIntake, setCarbIntake
    , setFatIntake} : globalContextTypes= useContext(GlobalContext)

  const [sex, setSex] = useState<string>('')
  const [fieldsFilled, setFieldsFilled] = useState([false, false, false])
  const [activityLevel, setActivityLevel] = useState<number>(1.0)
  const [age, setAge] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)


  const handleSex = (event: any) => {
    setSex(event.target.value)
    setFieldsFilled([true, true, false])
  }
  
  const handleHeight = (value: number | [number, number]) => {
    if (typeof value === 'number') {
      setHeight(value)
    }
  }

  const handleWeight = (value: number | [number, number]) => {
    if (typeof value === 'number') {
      setWeight(value)
    }
  }

  const handleActivityLevel = (value: any) => {
    switch (value) {
      case 'sedentary':
        setActivityLevel(1.18)
        break
      case 'light':
        setActivityLevel(1.35)
        break
      case 'moderate':
        setActivityLevel(1.44)
        break
      case 'active':
        setActivityLevel(1.52)
        break
      case 'very-active':
        setActivityLevel(1.69)
        break
      case 'extra-active':
        setActivityLevel(1.865)
        break
      default:
        setActivityLevel(1.44)
    }
    setFieldsFilled([true, true, true])
  }
  const handleBmrComputation = () => {
    let bmr
    let BmrValueComputation
    if (sex === 'male') {
      bmr = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age
      BmrValueComputation = parseInt(bmr.toFixed(0)) * activityLevel
      setBmrValue(Math.floor(BmrValueComputation))
    } else {
      bmr = 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age
      BmrValueComputation = parseInt(bmr.toFixed(0)) * activityLevel
      setBmrValue(Math.floor(BmrValueComputation))
    }

    const proteinIntake = Math.floor(1.4 * weight)
    setProteinIntake(proteinIntake)

    const carbIntake = Math.floor((BmrValueComputation * 0.5) / 4)
    setCarbIntake(carbIntake)

    const fatIntake = Math.floor((BmrValueComputation * 0.3) / 9)
    setFatIntake(fatIntake)

    const totalCalDirectComputation =
      proteinIntake * 4 + carbIntake * 4 + fatIntake * 9
    if (BmrValueComputation === totalCalDirectComputation) {
      setBmrValue(Math.floor(BmrValueComputation))
    } else {
      setBmrValue(totalCalDirectComputation)
    }
  }
  const handleAge = (value: number | [number, number]) => {
    if (typeof value === 'number') {
      setAge(value)
    }
  }
  return (
    <div className='main-page'>
      <h2 className='title-macros'>Calculate Your Macros</h2>
      <p>
        Craft your ideal macronutrient ratio now using our macros calculator
      </p>
      <div>
        <p>System</p>
        <Radio.Group defaultValue='metric' onChange={(e) => {}}>
          <Radio.Button value='imperial'>Imperial</Radio.Button>
          <Radio.Button value='metric'>Metric</Radio.Button>
        </Radio.Group>
      </div>
      <div>
        <p>I am a</p>
        <Radio.Group onChange={handleSex}>
          <Radio.Button value='male'>Male</Radio.Button>
          <Radio.Button value='female'>Female</Radio.Button>
        </Radio.Group>
      </div>
      <div>
        <p>
          I am <b>{age}</b> years old
        </p>
        <Slider defaultValue={age} onAfterChange={handleAge} />
      </div>
      <div>
        <p>
          My Height: <b>{height}</b> cm
        </p>
        <Slider
          min={0}
          max={250}
          defaultValue={height}
          onAfterChange={handleHeight}
        />
      </div>
      <div>
        <p>
          Current Weight: <b>{weight}</b> kg
        </p>
        <Slider
          min={0}
          max={200}
          defaultValue={weight}
          onAfterChange={handleWeight}
        />
      </div>
      <div>
        <p>Activity Level</p>

        <Select
          defaultValue='choose'
          style={{ width: 420 }}
          onChange={handleActivityLevel}
          options={[
            {
              value: 'choose',
              label: 'Select activity level',
            },
            {
              value: 'sedentary',
              label: 'Sedentary: little or no exercise',
            },
            { value: 'light', label: 'Light: exercise 1-3 times/week' },
            {
              value: 'moderate',
              label: 'Moderate: exercise 4-5 times/week',
            },
            {
              value: 'active',
              label:
                'Active: daily exercise or intense exercise 3-4 times/week',
            },
            {
              value: 'very-active',
              label: 'Very Active: intense exercise 6-7 times/week',
            },
            {
              value: 'extra-active',
              label:
                'Extra Active: very intense exercise daily, or physical jobk',
            },
          ]}
        />
      </div>
      <div className='calculate-macros-div'>
        <Button
          className='calculate-macros-button'
          onClick={() => handleBmrComputation()}
          // disabled={fieldsFilled.some((value) => value === false)}
        >
          Calculate Macros
        </Button>
      </div>
    </div>
  )
}

export default CalculateMacros
