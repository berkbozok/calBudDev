import React from "react";
import PersonalTrainerList from "../../components/Trainer/PersonalTrainerList";
import styled from "styled-components";
import { Card } from "antd";
const { Meta } = Card;

export default function Trainers() {
  return (
    <>
      <PersonalTrainerList />
    </>
  );
}
