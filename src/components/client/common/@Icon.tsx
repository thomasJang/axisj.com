"use client";
import styled from "@emotion/styled";

export interface IconsProps {
  size?: string;
  onClick?: () => void;
}

const Icons = styled.div<IconsProps>`
  cursor: pointer;
  svg {
    width: ${(props) => (props.size ? `${props.size}` : "1em")};
    height: ${(props) => (props.size ? `${props.size}` : "1em")};
  }
`;
export default Icons;
