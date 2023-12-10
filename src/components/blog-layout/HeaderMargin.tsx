"use client";
import * as React from "react";
import styled from "@emotion/styled";
import { mediaMax } from "@/styles/media";

interface Props {}

export function HeaderMargin({}: Props) {
  return <Container />;
}

const Container = styled.div`
  height: 5.5rem;
  ${mediaMax.md} {
    height: 3rem;
  }
`;
