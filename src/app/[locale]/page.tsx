import { PageParams } from "@/app/@types";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const pageRoutePath = "pages.index";

export default function HomePage({}: any) {
  const t = useTranslations(pageRoutePath);

  return (
    <div style={{ paddingTop: 100, height: 1500 }}>
      <h1>INDEX PAGE</h1>
      <p>{t("title")}</p>
    </div>
  );
}

export async function generateMetadata(p: PageParams) {
  const t = await getTranslations({ locale: p.params.locale, namespace: `${pageRoutePath}.@metadata` });

  return {
    title: t("title"),
    description: t("description"),
  };
}
