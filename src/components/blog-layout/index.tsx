"use client";
import React from "react";
import styled from "@emotion/styled";
import { mediaMax } from "@/styles/media";
import { PageContainer } from "@/styles/Layouts";

type Props = {
  name: string;
  children: React.ReactNode;
  type: "page" | "layout";
};

function Outline({ name, children, type }: Props) {
  return (
    <Layer>
      <Container>
        {/*<div className={styles['label-container']}>*/}
        {/*  <div className={styles.label}>{name}</div>*/}
        {/*</div>*/}
        {children}
      </Container>
    </Layer>
  );
}

const Container = styled(PageContainer)``;
const Layer = styled.div`
  padding-top: 5.5rem;
  ${mediaMax.md} {
    padding-top: 3rem;
  }
`;

export default Outline;
