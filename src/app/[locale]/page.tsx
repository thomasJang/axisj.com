import { PageParams } from "@/app/@types";
import { AboutAXISJ } from "@/components/server/aboutAXISJ/AboutAXISJ";
import { History } from "@/components/server/aboutAXISJ/History";
import { Symbol } from "@/components/server/aboutAXISJ/Symbol";
import { MainVisual } from "@/components/client/mainVisual/MainVisual";
import { AXFrame } from "@/components/server/axframe/AXFrame";
import { Contact } from "@/components/server/contact/Contact";
import { Service } from "@/components/server/service/Service";
import { Solution } from "@/components/server/solution/Solution";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

const pageRoutePath = "pages.index";

export default function HomePage({}: any) {
  const t = useTranslations(pageRoutePath);

  return (
    <main>
      <h1 style={{ position: "fixed" }}>The AXISJ - www.axisj.com</h1>

      <a id={"HOME"} className={"anchorPoint home"} />
      <Suspense>
        <MainVisual />
      </Suspense>

      <div id={"index-content-wrapper"} className={"index-content-wrapper"}>
        <a id={"axisj"} className={"anchorPoint"} />
        <AboutAXISJ />
        <History />
        <Symbol />
        <a id={"service"} className={"anchorPoint"} />
        <Service />
        <Solution />
        <a id={"axboot"} className={"anchorPoint"} />
        <AXFrame />

        <a id={"contact"} className={"anchorPoint"} />
        <Contact />
      </div>
    </main>
  );
}

export async function generateMetadata(p: PageParams) {
  const t = await getTranslations({ locale: p.params.locale, namespace: `${pageRoutePath}.@metadata` });

  return {
    title: t("title"),
    description: t("description"),
  };
}
