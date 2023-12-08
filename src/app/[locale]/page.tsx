"use client";
import { MainVisual } from "@/app/[locale]/mainVisual/MainVisual";
import { AboutAXISJ } from "@/app/[locale]/aboutAXISJ/AboutAXISJ";
import { useState } from "react";
import styled from "@emotion/styled";
import { History } from "@/app/[locale]/aboutAXISJ/History";
import { Symbol } from "@/app/[locale]/aboutAXISJ/Symbol";
import { Design } from "@/app/[locale]/design/Design";

interface Props {
  params: {
    locale: string;
  };
}

function Home({ params: { locale } }: Props) {
  const [visualHeight, setVisualHeight] = useState(0);
  return (
    <main>
      <MainVisual onChangeVisualHeight={(height) => setVisualHeight(height)} />
      <ContentWrapper style={{ marginTop: visualHeight }}>
        <AboutAXISJ />
        <History />
        <Symbol />
        <Design />
      </ContentWrapper>
    </main>
  );
}
export default Home;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  background: var(--white);
`;
