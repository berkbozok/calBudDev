import { Menu, MenuProps, theme, Layout } from "antd";
import {
  PercentageOutlined,
  PieChartOutlined,
  TeamOutlined,
  ToolOutlined,
  CalculatorOutlined,
  HeartOutlined,
  OrderedListOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../shared/logo";
import styled from "styled-components";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    "Home",
    "1",
    <Link href="/">
      <HomeOutlined style={{ color: "white", fontSize: "32px" }} />
    </Link>
  ),
  getItem(
    "Macros Calc",
    "2",
    <Link href="/macros">
      <PieChartOutlined style={{ color: "white", fontSize: "32px" }} />
    </Link>
  ),
  getItem(
    "BMI Calc",
    "3",
    <Link href="/bmi">
      <CalculatorOutlined style={{ color: "white", fontSize: "32px" }} />
    </Link>
  ),
  getItem(
    "Body Fat Calc",
    "4",
    <Link href="/bodyfat">
      <PercentageOutlined style={{ color: "white", fontSize: "32px" }} />
    </Link>
  ),
  getItem(
    "Ideal Weight",
    "5",
    <Link href="/idealweight">
      <HeartOutlined style={{ color: "white", fontSize: "32px" }} />
    </Link>
  ),

  getItem(
    "Meal Plan",
    "6",
    <Link href="/mealplan">
      <OrderedListOutlined style={{ color: "white", fontSize: "32px" }} />
    </Link>
  ),
  getItem(
    "Trainers",
    "7",
    <Link href="/trainers">
      <TeamOutlined style={{ color: "white", fontSize: "32px" }} />
    </Link>
  ),
  getItem(
    "Settings",
    "8",
    <ToolOutlined style={{ color: "white", fontSize: "32px" }} />
  ),
];

const Title = styled.div`
  text-align: center;
  font-size: 30px !important;
  padding: 10px 0 50px 0 !important;
  font-weight: bold !important;
  color: #152a63 !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Navigation() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <Link href="/">
          <Title>
            <div>
              <span className={collapsed ? "hidden" : ""}>
                <Logo />
                <div>FITracker</div>
              </span>
            </div>
          </Title>
        </Link>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </>
  );
}
