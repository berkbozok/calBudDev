import styled from "styled-components";
import CalculateMacros from "./CalculateMacros";
import DailyMacro from "./DailyMacro";
import SplitScreen from "../Layout/SplitScreen";

const MacrosRoot = styled.div`
  display: flex;
  height: 90vh;
`;

function Macros() {
  return (
    <MacrosRoot>
      <SplitScreen leftWeight={1} rightWeight={1}>
        <CalculateMacros />
        <DailyMacro />
      </SplitScreen>
    </MacrosRoot>
  );
}

export default Macros;
