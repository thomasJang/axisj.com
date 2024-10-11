import { OnScrollHeader } from "@/components/client/OnScrollHeader";
import { LogoAXSymbol } from "@/components/server/common/LogoAXSymbol";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";
import "@/styles/Layout.scss";

interface Props {
  locale: string;
}

export function Header({ locale }: Props) {
  const t = useTranslations();

  const items = [
    {
      key: "axisj",
      label: t("router.axisj"),
    },
    {
      key: "service",
      label: t("router.service"),
    },
    {
      key: "solution",
      label: t("router.solution"),
    },
    {
      key: "contact",
      label: t("router.contact"),
    },
    {
      key: "blog",
      label: t("router.blog.title"),
    },
  ];

  return (
    <div id={"layout-header"} className={"header"}>
      <OnScrollHeader />

      <div className={"container"}>
        <div className={"gnbWrapper"}>
          <div className={"left"}>
            <Link href={`/${locale}#HOME`}>
              <LogoAXSymbol className={"logo"} />
            </Link>
          </div>
          <div className={"center"}>
            {/*<Menu mode='horizontal' selectedKeys={[]} items={items} onClick={onClickMenu} />*/}
          </div>
          <div className={`center showSm`}>{/*<LangSelector size={"1.5rem"} />*/}</div>
          <div className={`center showXs`}>
            <Link href={`/blog`}>{t("router.blog.title")}</Link>
            {/*<LangSelector size={"1.5rem"} />*/}
            {/*<IconMenu*/}
            {/*  size={"1.5rem"}*/}
            {/*  onClick={() => {*/}
            {/*    setIsOpen(true);*/}
            {/*  }}*/}
            {/*/>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
