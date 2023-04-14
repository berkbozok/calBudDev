import React from "react";

import Navigation from "../../components/Navigation";
import PersonalTrainerList from "../../components/Trainer/PersonalTrainerList";
import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

const NavigationSide = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Trainers() {
  return (
    <>
      <NavigationSide>
        <Navigation />
        <PersonalTrainerList />
      </NavigationSide>
    </>
  );
}
