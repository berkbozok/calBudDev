import {
  Button,
  Radio,
  Slider,
  Space,
  Progress,
  Tooltip,
  Modal,
  Input,
  Form,
} from "antd";
import {
  CalculatorFilled,
  HeartFilled,
  PercentageOutlined,
  PieChartFilled,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import PersonalTrainerList from "../../components/Trainer/PersonalTrainerList";
import styled from "styled-components";
const { Meta } = Card;

const NavigationSide = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Trainers() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  const showModal = (index: number) => {
    setSelectedCardIndex(index);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <NavigationSide>
        <Navigation />
        <PersonalTrainerList />
      </NavigationSide>
    </>
  );
}
