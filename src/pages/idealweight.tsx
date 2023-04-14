import React from "react";

import Navigation from "../../components/Navigation";
import PersonalTrainerList from "../../components/Trainer/PersonalTrainerList";
import CalculateBmi from "../../components/BMI/CalculateBmi";
import CalculateIdealWeight from "../../components/Weight/CalculateIdealWeight";

function IdealWeight() {
  return (
      <CalculateIdealWeight gender={"male"} age={0} height={0} />
  );
}

export default IdealWeight;
