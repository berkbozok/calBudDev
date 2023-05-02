import styled from "styled-components";

type SplitScreenProps = {
  leftWeight: number;
  rightWeight: number;
  children?: React.ReactNode[];
};

const SplitScreenRoot = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap ;
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
}: SplitScreenProps) {
  const [left, right] = children;

  return (
    <SplitScreenRoot>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </SplitScreenRoot>
  );
}

export default SplitScreen;