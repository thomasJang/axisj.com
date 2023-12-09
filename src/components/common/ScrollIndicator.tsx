import styled from "@emotion/styled";

interface Props {
  percent: number;
}
export function ScrollIndicator({ percent }: Props) {
  return <Container>
    <Bar style={{width: `${percent}%`}} />
  </Container>
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
`;
const Bar = styled.div`
  transition: all 0.2s ease-in;
  height: 3px;
  background: var(--ax_space_blue);
`;
