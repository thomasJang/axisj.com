"use client";
import * as React from "react";
import styled from "@emotion/styled";

interface Props {
  size?: string;
  onClick?: () => void;
}

export function IconDesign3({ size, onClick }: Props) {
  return (
    <Container size={size} onClick={onClick}>
      <svg viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M52.5 57.5C52.5 57.5 65.8 54.0001 67.1 53.9001C68.3 53.7001 73.2 52.2 74.1 56C75 59.8 71.8 61.3 71.8 61.3C71.8 61.3 57.5 68.6 50.1 72.7C42.7 76.8 37.7 74.2 37.7 74.2C37.7 74.2 28.6 69.8 24.4 67.1C20.2 64.4 16.4 66.0001 11.7 67.4001C7 68.8001 6.5 65 6.5 65V50.6C6.5 50.6 6.5 48.2001 10.1 47.7001C13.7 47.2001 22.2 46.3 22.2 46.3C22.2 46.3 28.4 46.5 31.3 48.3C34.2 50.1 39.9 52.2001 39.9 52.2001C39.9 52.2001 43.5 53.3 46.1 53.3C48.3 53.4 51.6 53.7 52.5 57.5Z'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M52.5001 57.5C52.5001 57.5 52.2001 60.2 49.5001 61.4C46.8001 62.6 43.0001 64.3 38.3001 62.6C33.6001 60.9 31.6001 59.9 31.6001 59.9'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M30.7 47.2999C30.7 47.2999 31.9999 39.6999 39.0999 41.2999C39.0999 41.2999 42.7999 36.4999 47.0999 38.3999C47.0999 38.3999 51.6 35.0999 57.7 39.4999C61.9 42.4999 61.9 47.4999 61.9 47.4999C61.9 47.4999 65.7999 49.2999 67.0999 53.8999'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M47.4001 37.6001C47.4001 37.6001 46.4001 27.7001 50.3001 19.6001C50.3001 19.6001 47.3001 14.7001 49.6001 11.0001C51.9001 7.3001 57.7001 5.6001 57.7001 5.6001C57.7001 5.6001 59.5001 9.9001 58.6001 14.6001C57.7001 19.3001 50.8001 19.8001 50.8001 19.8001'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M47.5 35.4001C47.5 35.4001 48.3 30.0001 53.3 29.1001C53.3 29.1001 54.2 23.2001 60.5 21.9001C66.8 20.6001 70.4 24.5001 70.4 24.5001C70.4 24.5001 68.1 31.5001 62.4 32.9001C56.7 34.3001 53.4 29.3001 53.4 29.3001'
          stroke='#E0D0A6'
          strokeWidth='2.8346'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
        <path
          d='M46.9999 31.8999C46.9999 31.8999 45.9999 25.0999 41.2999 22.1999C41.2999 22.1999 42.0999 14.5999 37.0999 11.5999C32.0999 8.59988 21.3999 11.6999 21.3999 11.6999C21.3999 11.6999 20.2999 20.0999 28.8999 24.8999C34.9999 28.2999 41.3999 22.0999 41.3999 22.0999'
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
