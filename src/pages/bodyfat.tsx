import React from 'react'

import Navigation from '../../components/Navigation'
import PersonalTrainerList from '../../components/Trainer/PersonalTrainerList'
import CalculateBodyFat from '../../components/BodyFat/CalculateBodyFat'

export default function BodyFat() {
  return (
      <CalculateBodyFat gender={'male'} age={0} />
  )
}
