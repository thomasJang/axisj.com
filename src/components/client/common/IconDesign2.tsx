"use client";
import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  size?: string;
  onClick?: () => void;
}

export function IconDesign2({ size, onClick }: Props) {
  return (
    <Container size={size} onClick={onClick}>
      <svg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M39.7001 51.8C46.2722 51.8 51.6 46.4722 51.6 39.9C51.6 33.3278 46.2722 28 39.7001 28C33.1279 28 27.8 33.3278 27.8 39.9C27.8 46.4722 33.1279 51.8 39.7001 51.8Z'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M13.4999 22.5999C18.5257 22.5999 22.5999 18.5257 22.5999 13.4999C22.5999 8.47411 18.5257 4.3999 13.4999 4.3999C8.47411 4.3999 4.3999 8.47411 4.3999 13.4999C4.3999 18.5257 8.47411 22.5999 13.4999 22.5999Z'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M23.7 75.4C27.4003 75.4 30.4 72.4003 30.4 68.7C30.4 64.9997 27.4003 62 23.7 62C19.9997 62 17 64.9997 17 68.7C17 72.4003 19.9997 75.4 23.7 75.4Z'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M71.7001 37.5999C75.069 37.5999 77.8001 34.8688 77.8001 31.4999C77.8001 28.131 75.069 25.3999 71.7001 25.3999C68.3312 25.3999 65.6001 28.131 65.6001 31.4999C65.6001 34.8688 68.3312 37.5999 71.7001 37.5999Z'
          fill='#E0D0A6'
        />
        <path
          d='M51.1001 37.4001L69.0001 32.3'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M31.4001 31.5001L20.1001 20.1001'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M34.1 50.5L27.3 62.8'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
      </svg>
    </Container>
  );
}

const Container = styled.div<Props>`
  cursor: pointer;
  svg {
    width: ${(props) => (props.size ? `${props.size}` : "1em")};
    height: ${(props) => (props.size ? `${props.size}` : "1em")};
  }
`;
