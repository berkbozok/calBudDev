import React from "react";
import { TeamOutlined } from "@ant-design/icons";
import { useState } from "react";
import styled from "styled-components";
import { Button, Modal } from "antd";
import { Card } from "antd";
import Link from "next/link";
import Logo from "../../shared/logo";

const HomeRoot = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const ContentText = styled.div`
  font-size: 4em;
  text-shadow: 3px 3px 4px rgba(244, 151, 151, 0.9);
`;

const ContentSpan = styled.div`
  color: #f582ae;
  text-shadow: 3px 3px 4px rgba(62, 62, 62, 0.9);
  text-align: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

function HomePage() {
  return (
    <>
      <HomeRoot>
        <ContentText>
          Take Control of Your Fitness Journey with
          <ContentSpan>
            <Logo />
            FiTracker
          </ContentSpan>
        </ContentText>
        <ButtonDiv>
          <Link href="/trainers">
            <Button className="find-trainer">Consult with a Trainer</Button>
          </Link>
          <Link href="/plans">
            <Button className="find-trainer">Check out our plans</Button>
          </Link>
        </ButtonDiv>
      </HomeRoot>
    </>
  );
}

export default HomePage;
