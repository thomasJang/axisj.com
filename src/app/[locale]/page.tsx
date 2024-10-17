import { PageParams } from "@/app/@types";
import { MainVisual } from "@/components/client/mainVisual/MainVisual";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

const pageRoutePath = "pages.index";

export default function HomePage({}: any) {
  const t = useTranslations(pageRoutePath);

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <MainVisual />
      </Suspense>
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
