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
  background: #rgb(254, 246, 228);
`;

const ContentText = styled.div``;

const ContentSpan = styled.div`
  text-align: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubDiv = styled.div`
  margin: 1.5rem;
`;

const Title = styled.div`
  color: #fff;
  font-family: "Work Sans", sans-serif;
  font-weight: 900;
  p {
    font-size: 5vw;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
  }
  .fancy {
    @supports (background-clip: text) or (-webkit-background-clip: text) {
      background-image: url("data:image/svg+xml,%3Csvg width='2250' height='900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='%2300A080' d='M0 0h2255v899H0z'/%3E%3Ccircle cx='366' cy='207' r='366' fill='%2300FDCF'/%3E%3Ccircle cx='1777.5' cy='318.5' r='477.5' fill='%2300FDCF'/%3E%3Ccircle cx='1215' cy='737' r='366' fill='%23008060'/%3E%3C/g%3E%3C/svg%3E%0A");
      background-size: 110% auto;
      background-position: center;
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
`;

const CompanyName = styled.div`
  p {
    color: #152a63 !important;
  }

  .home-logo {
    height: 6rem;
    width: 6rem;
    margin-bot: -80px;
  }
`;

const Check = styled.div`
  display: flex;
  color: #152a63;
  font-family: "Work Sans", sans-serif;
  font-weight: 900;
  font-size: 1.5vw;
  line-height: 1;
  flex-direction: column !important;
  margin: 1.25rem;
`;

function HomePage() {
  return (
    <>
      <Check>
        <div>Check out our free</div>
        <div>Calculators</div>
        <span>&#10550;</span>
      </Check>
      <HomeRoot>
        <ContentText>
          <Title>
            <p>TAKE CONTROL OF YOUR</p>
            <p>
              <span className="fancy">Fitness Journey with</span>
            </p>
            <CompanyName>
              <p>
                <Logo />
                FiTracker
              </p>
            </CompanyName>
          </Title>
          <ContentSpan></ContentSpan>
        </ContentText>
        <ButtonDiv>
          <SubDiv>
            <Link href="/trainers">
              <Button className="find-trainer">Consult with a Trainer</Button>
            </Link>
          </SubDiv>
          <SubDiv>
            <Link href="/plans">
              <Button className="find-trainer">Check out our plans</Button>
            </Link>
          </SubDiv>
        </ButtonDiv>
      </HomeRoot>
    </>
  );
}

export default HomePage;
