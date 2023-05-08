import styled from "styled-components";
import CalculateMacros from "./CalculateMacros";
import DailyMacro from "./DailyMacro";
import SplitScreen from "../Layout/SplitScreen";

const MacrosRoot = styled.div`
  display: flex;
  min-height: 88vh;
`;

function Macros() {
  return (
    <MacrosRoot>
      <SplitScreen leftWeight={1} rightWeight={1} backgroundColor="#f1ead9">
        <CalculateMacros />
        <DailyMacro />
      </SplitScreen>
    </MacrosRoot>
  );
}

export default Macros;
