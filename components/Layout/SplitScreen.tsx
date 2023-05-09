import styled from "styled-components";

type SplitScreenProps = {
  leftWeight: number;
  rightWeight: number;
  children?: React.ReactNode[];
  backgroundColor?:string;
};

type RootProps = {
  bgColor? : string;
};

const SplitScreenRoot = styled.div<RootProps>`
  display: flex;
  width: 100%;
  flex-wrap: wrap ;
   background-color:${(props) => props.bgColor||"none"} ;
`;

interface PaneProps {
  weight: number;
}

const Pane = styled.div<PaneProps>`
  flex: ${(Props) => Props.weight};
`;

function SplitScreen({
  children = [],
  leftWeight,
  rightWeight,
  backgroundColor
}: SplitScreenProps) {
  const [left, right] = children;

  return (
    backgroundColor? 
    <SplitScreenRoot bgColor = {backgroundColor}>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </SplitScreenRoot>
    :
    <SplitScreenRoot>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </SplitScreenRoot>
  );
}

export default SplitScreen;