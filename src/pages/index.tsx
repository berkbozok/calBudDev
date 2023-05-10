import React from "react";
import { Layout } from "antd";
import Home from './home';



export default function Index() {


  const { Content } = Layout;

  return (
      <>
        <Layout>
          <Content>
            <div className="line" />
             <Home />
          </Content>
        </Layout>
      </>
  );
}
