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
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  HomeModernIcon,
  UsersIcon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";
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
const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon, count: "5", current: true },
  { name: "Trainers", href: "/trainers", icon: UsersIcon, current: false },
  {
    name: "Macros Calc",
    href: "/macros",
    icon: FolderIcon,
    count: "12",
    current: false,
  },
  {
    name: "BMI Calc",
    href: "/bmi",
    icon: CalendarIcon,
    count: "20+",
    current: false,
  },
  {
    name: "Body Fat Calc",
    href: "/bodyfat",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Ideal Weight",
    href: "/idealweight",
    icon: ChartPieIcon,
    current: false,
  },
  { name: "Meal Plan", href: "/mealplan", icon: ChartPieIcon, current: false },
];

const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

export default function Navigation() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const [iconOnly, setIconOnly] = useState(false);
  
  const [sidebarShrunk, setSidebarShrunk] = useState(false);

  const toggleIconOnly = () => {
    setIconOnly(!iconOnly);
    setSidebarShrunk(!iconOnly);
  };

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
      {/* <div
        className={classNames(
          "flex",
          sidebarShrunk ? "max-w-5" : "", // Apply the 'w-20' class when sidebarShrunk is true
          "grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 "
        )}
      >
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        iconOnly ? "justify-center" : "",
                        item.current
                          ? "bg-indigo-700 text-white"
                          : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                        "group flex gap-x-3 rounded-md p-2 text-2xl leading-6 font-semibold"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-indigo-200 group-hover:text-white",
                          "h-12 w-12 shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {!iconOnly && item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <button
              className="px-6 py-3 text-2xl font-semibold leading-6 text-white hover:bg-indigo-700"
              onClick={toggleIconOnly}
            >
              {iconOnly ? "Show Labels" : "Hide Labels"}
            </button>
          </ul>
        </nav>
      </div> */}
    </>
  );
}
