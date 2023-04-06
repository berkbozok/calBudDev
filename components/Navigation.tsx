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
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
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
          {/* <div
            style={{
              height: 32,
              margin: 16,
              background: "rgba(255, 255, 255, 0.2)",
            }}
          >
            CalBud
          </div> */}

          <Link href="/">
            <div className="title">
              <div>
                <div>
                  <Logo />
                </div>
                <div>
                  <span className={collapsed ? "hidden" : ""}>CalBud</span>
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
      {/* <div className="nav-bar">
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
      </div> */}
    </>
  );
}
