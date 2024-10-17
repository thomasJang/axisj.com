"use client";
import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  size?: string;
  onClick?: () => void;
}

export function IconMenu({ size, onClick }: Props) {
  return (
    <Container size={size} onClick={onClick}>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M2 4H22V6H2V4Z' fill='black' />
        <path d='M2 11H22V13H2V11Z' fill='black' />
        <path d='M22 18H2V20H22V18Z' fill='black' />
      </svg>
    </Container>
  );
}

const Container = styled.div<Props>`
  cursor: pointer;
  svg {
    width: ${(props) => (props.size ? `${props.size}` : "100%")};
    height: ${(props) => (props.size ? `${props.size}` : "100%")};
  }
`;
