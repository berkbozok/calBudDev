import React from "react";
import styled from "styled-components";
import MealPlanner from "../../components/MealPlans/MealPlanner";

const Body = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300");
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif !important;
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 140px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MealPlans() {
  return (
    <>
      {/* <Body>
        <Section>hello</Section>
      </Body> */}
      <MealPlanner />
    </>
  );
}
