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
const { Meta } = Card;

export default function Navigation() {
  return (
    <>
      <div className="nav-bar">
        <Link href="/">
          <div className="title">CalBud</div>
        </Link>
        <div className="nav-item-list">
          <a>
            <div className="items">
              <PieChartFilled className="icon" />
              Macros Cals
            </div>
          </a>
          <a>
            <div className="items">
              <CalculatorFilled className="icon" />
              BMI Calc
            </div>
          </a>
          <a>
            <div className="items">
              <PercentageOutlined className="icon" />
              Body Fat Calc
            </div>
          </a>
          <a>
            <div className="items">
              <HeartFilled className="icon" />
              Ideal Weight
            </div>
          </a>
        </div>
        <div className="button-div">
          <Button className="upgrade-button">Upgrade</Button>
        </div>
      </div>
    </>
  );
}
