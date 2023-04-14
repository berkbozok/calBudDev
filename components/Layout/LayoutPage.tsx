import React from "react";
import { PieChartFilled } from "@ant-design/icons";
import Navigation from "../../components/Navigation";
import { Layout } from "antd";

export default function LayoutPage({ children }: any) {

  const { Header, Content } = Layout;

  return (
      <>
        <Layout>
          <Navigation />
          <Layout>
            <Header className="main-title">
              <PieChartFilled className="icon-title" />
              Macros Calculator
            </Header>
            <Content>
              <div className="line"></div>
              <div className="main-page-layout">
               {children}
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
  );
}
