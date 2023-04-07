import React from "react";

import Navigation from "../../components/Navigation";
import PersonalTrainerList from '../../components/Trainer/PersonalTrainerList';

export default function Trainers() {
  return (
    <>
      <div className="navigation-side">
        <Navigation />
      <PersonalTrainerList />
      </div>
    </>
  );
}
