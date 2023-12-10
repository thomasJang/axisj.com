"use client";
import { MainVisual } from "@/app/[locale]/mainVisual/MainVisual";
import { AboutAXISJ } from "@/app/[locale]/aboutAXISJ/AboutAXISJ";
import styled from "@emotion/styled";
import { History } from "@/app/[locale]/aboutAXISJ/History";
import { Symbol } from "@/app/[locale]/aboutAXISJ/Symbol";
import { useAppStore } from "@/store/useAppStore";
import { Service } from "@/app/[locale]/service/Service";
import { AXFrame } from "@/app/[locale]/axframe/AXFrame";
import { Contact } from "@/app/[locale]/contact/Contact";

interface Props {
  params: {
    locale: string;
  };
}

function Home({ params: { locale } }: Props) {
  const setVisualHeight = useAppStore((state) => state.setVisualHeight);
  const visualHeight = useAppStore((state) => state.visualHeight);
  return (
    <main>
      <a id={"HOME"} className={"anchorPoint home"} />
      <MainVisual onChangeVisualHeight={(height) => setVisualHeight(height)} />
      <ContentWrapper style={{ marginTop: visualHeight }}>
        <a id={"AXISJ"} className={"anchorPoint"} />
        <AboutAXISJ />
        <History />
        <Symbol />
        {/*<Design />*/}
        <a id={"SERVICE"} className={"anchorPoint"} />
        <Service />
        <a id={"AXFRAME"} className={"anchorPoint"} />
        <AXFrame />
        <a id={"CONTACT"} className={"anchorPoint"} />
        <Contact />
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
