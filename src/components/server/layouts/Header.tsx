import LangSelector from "@/components/client/LangSelector";
import { OnScrollHeader } from "@/components/client/OnScrollHeader";
import { LogoAXSymbol } from "@/components/server/common/LogoAXSymbol";
import { Container } from "@/components/server/layouts/Container";
import { DeskTopMenu } from "@/components/server/layouts/DeskTopMenu";
import { LangType } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";

interface Props {
  locale: LangType;
}

export function Header({ locale }: Props) {
  const t = useTranslations();

  return (
    <nav id={"layout-header"} className={"header"}>
      <OnScrollHeader />

      <Container>
        <div className={"gnbWrapper"}>
          <div className={"left"}>
            <Link href={`/${locale}#HOME`}>
              <LogoAXSymbol className={"logo"} />
            </Link>
          </div>
          <div className={"center"}>
            <DeskTopMenu />
          </div>
          <div className={`right`}>
            <Link href={`/blog`} className={"hideLg"}>
              {t("router.blog.title")}
            </Link>
            <LangSelector size={20} locale={locale} />
            {/*<IconMenu*/}
            {/*  size={"1.5rem"}*/}
            {/*  onClick={() => {*/}
            {/*    setIsOpen(true);*/}
            {/*  }}*/}
            {/*/>*/}
          </div>
        </div>
      </Container>
    </nav>
  );
}
