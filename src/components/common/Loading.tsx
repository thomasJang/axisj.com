import React from "react";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

interface Props {
  active?: boolean;
  size?: "small" | "normal";
  message?: string;
}

export function Loading({ active, size = "small", message }: Props) {
  if (!active) {
    return null;
  }

  return (
    <Container active={active} size={size}>
      <div role="rft-spinner-box">
        <div role="rft-spinner" />
        {size === "normal" && (
          <div role="rft-spinner-text">{message ?? "Loading"}</div>
        )}
      </div>
    </Container>
  );
}

const SpinnerRotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div<Props>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  user-select: none;
  -webkit-user-select: none;

  [role="rft-spinner-box"] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;

    ${({ size, theme }) => {
      if (size === "normal") {
        return css`
          padding: 20px;
          font-size: 14px;
          color: var(--ax_space_blue);
        `;
      }
    }}
  }

  [role="rft-spinner"] {
    position: relative;

    ${({ size }) => {
      if (size === "normal") {
        return css`
          width: 2em;
          height: 2em;
          margin: 1em;
        `;
      } else if (size === "small") {
        return css`
          width: 2em;
          height: 2em;
          margin: 0.3em;
        `;
      }
    }}
    &:before {
      box-sizing: border-box;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 0.5em solid transparent;
    }

    &:after {
      box-sizing: border-box;
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border-color: var(--ax_space_blue) transparent transparent;
      border-style: solid;
      border-width: 0.3em;
      -webkit-box-shadow: 0 0 0 1px transparent;
      box-shadow: 0 0 0 1px transparent;

      animation: ${SpinnerRotate} 1s linear infinite;
    }
  }

  [role="rft-spinner-text"] {
    margin: 0.3em;
  }
`;
