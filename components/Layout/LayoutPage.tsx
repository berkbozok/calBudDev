import React from "react";
import Navigation from "../../components/Navigation";
import { Layout } from "antd";
import styled from "styled-components";

const LayoutRoot = styled.div`
  display: flex;
  min-height: 95vh;
`;

export default function LayoutPage({ children }: any) {
  const { Content } = Layout;

  return (
    <LayoutRoot>
      <Layout>
        <Navigation />
        <Layout>
          <Content>
            <div className="line" />
            <div className="main-page-layout">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </LayoutRoot>
  );
}
