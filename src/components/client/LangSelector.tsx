"use client";

import { IconLangEn, IconLangKo } from "@/components/icon";
import { LangType, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

import React from "react";

interface Props {
  size?: number;
}
const LangSelector = ({ size }: Props) => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const changeLocale = (locale: LangType) => {
    router.replace(pathName, { locale });
  };

  return (
    <button
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
        margin: 0,
        cursor: "pointer",
      }}
      onClick={() => {
        changeLocale(locale === "ko" ? "en" : "ko");
      }}
    >
      {locale === "ko" ? <IconLangEn size={size} /> : <IconLangKo size={size} />}
    </button>
  );
};

export default LangSelector;
