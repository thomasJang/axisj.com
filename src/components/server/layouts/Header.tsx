import LangSelector from "@/components/client/LangSelector";
import { MobileMenu } from "@/components/client/MobileMenu";
import { OnScrollHeader } from "@/components/client/OnScrollHeader";
import { LogoAXSymbol } from "@/components/server/common/LogoAXSymbol";
import { DeskTopMenu } from "@/components/server/layouts/DeskTopMenu";
import { Link } from "@/i18n/routing";
import { getLocale, getTranslations } from "next-intl/server";
import * as React from "react";

interface Props {}

export async function Header({}: Props) {
  const locale = await getLocale();
  const t = await getTranslations();

  return (
    <>
      <nav id={"layout-header"} className={"header"}>
        <OnScrollHeader />

        <div className={"container"}>
          <div className={"gnbWrapper"}>
            <div className={"left"}>
              <Link href={`/#HOME`}>
                <LogoAXSymbol className={"logo"} />
              </Link>
            </div>
            <div className={"center"}>
              <DeskTopMenu />
            </div>
            <div className={`right`}>
              <Link href={`/blog`} className={"hideLg"}>
                {t("router.blog.label")}
              </Link>
              <LangSelector size={24} />

              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
      <div className={"header-dummy"} />
    </>
  );
}
