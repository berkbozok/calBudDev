import { Menu, MenuProps, theme, Layout } from "antd";
import {
  PercentageOutlined,
  PieChartOutlined,
  TeamOutlined,
  ToolOutlined,
  CalculatorOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import React, { useState} from "react";
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
    "Macros Calc",
    "1",
    <Link href="/">
      <PieChartOutlined />
    </Link>
  ),
  getItem(
    "BMI Calc",
    "2",
    <Link href="/bmi">
      <CalculatorOutlined />
    </Link>
  ),
  getItem(
    "Body Fat Calc",
    "3",
    <Link href="/bodyfat">
      <PercentageOutlined />
    </Link>
  ),
  getItem(
    "Ideal Weight",
    "4",
    <Link href="/idealweight">
      <HeartOutlined />
    </Link>
  ),
  getItem(
    "Trainers",
    "5",
    <Link href="/trainers">
      <TeamOutlined />
    </Link>
  ),
  getItem("Settings", "6", <ToolOutlined />),
];

const Title = styled.div`
  text-align: center;
  font-size: 30px;
  padding: 10px 0 50px 0;
  font-weight: bold;
  color: #152a63;
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
                FITracker
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
