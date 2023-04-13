import React from "react";

import Navigation from "../../components/Navigation";
import PersonalTrainerList from "../../components/Trainer/PersonalTrainerList";
import CalculateBodyFat from "../../components/BodyFat/CalculateBodyFat";

export default function BodyFat() {
  return (
    <>
      <div className="navigation-side">
        <Navigation />
        <CalculateBodyFat gender={"male"} age={0} />
      </div>
    </>
  );
}
