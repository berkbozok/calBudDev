import React from "react";
import PersonalTrainerList from "../../components/Trainer/PersonalTrainerList";
import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

const NavigationSide = styled.div`
  display: flex;
  flex-direction: row;
  height:100%;
`;

export default function Trainers() {
  return (
    <>
      <NavigationSide>
        <PersonalTrainerList />
      </NavigationSide>
    </>
  );
}
