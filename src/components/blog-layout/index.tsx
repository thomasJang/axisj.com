"use client";
import React from "react";
import styled from "@emotion/styled";
import { mediaMax } from "@/styles/media";
import { PageContainer } from "@/styles/Layouts";
import {useI18n} from "@/locales/client";

type Props = {
  name: string;
  children: React.ReactNode;
  type: "page" | "layout";
};

function Outline({ name, children, type }: Props) {
  const t = useI18n();
  return (
    <>
      <BlogTitle>
        <Container>
          {name}/{type}
        {t("menu.blog")}
        </Container>
      </BlogTitle>
      <Layer>
        <Container>
          {children}
        </Container>
      </Layer>
    </>
  );
}

const Container = styled(PageContainer)``;
const Layer = styled.div`
  padding: 5rem 0;
`;
const BlogTitle = styled.div`
  padding: 8rem 0 5rem 0;
  
  ${mediaMax.md} {
    padding-top: 3rem;
  }
  font-size: 2.5rem;
  background: var(--line-gr);
`;

export default Outline;
