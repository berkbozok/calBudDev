import React from "react";
import Navigation from "../../components/Navigation";
import { Layout } from "antd";
import styled from "styled-components";

const LayoutRoot = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function LayoutPage({ children }: any) {
  const { Content } = Layout;

  return (
    <>
      <LayoutRoot>
        <Layout>
          <Navigation />

          <Content>
            <div className="main-page-layout">{children}</div>
          </Content>
        </Layout>
      </LayoutRoot>
    </>
  );
}
