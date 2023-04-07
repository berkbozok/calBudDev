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
  Menu,
  MenuProps,
  theme,
  Layout,
} from "antd";
import {
  CalculatorFilled,
  HeartFilled,
  PercentageOutlined,
  PieChartFilled,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  ToolOutlined,
  CalculatorOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "next/link";
import Logo from "../shared/logo";

const { Meta } = Card;

const { Header, Content, Footer, Sider } = Layout;

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
  getItem("Macros Calc", "1", <PieChartOutlined />),
  getItem("BMI Calc", "2", <CalculatorOutlined />),
  getItem("Body Fat Calc", "3", <PercentageOutlined />),
  getItem("Ideal Weight", "4", <HeartOutlined />),
  // getItem("Option 2", "5", <DesktopOutlined />),
  // getItem("User", "sub1", <UserOutlined />, [
  //   getItem("Tom", "6"),
  //   getItem("Bill", "7"),
  //   getItem("Alex", "8"),
  // ]),
  getItem("Trainers", "5", <TeamOutlined />),
  getItem("Settings", "6", <ToolOutlined />),
];

export default function Navigation() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          theme="light"
        >
          <Link href="/">
            <div className="title">
              <div>
                <div>
                  <Logo />
                </div>
                <div>
                  <span className={collapsed ? "hidden" : ""}>FITracker</span>
                </div>
              </div>
            </div>
          </Link>
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
      </Layout>
    </>
  );
}
