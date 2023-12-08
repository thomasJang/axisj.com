import React from "react";
import styled from "@emotion/styled";
import { LangEn } from "@/app/components/common/LangEn";
import { LangKo } from "@/app/components/common/LangKo";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

interface Props {
  size?: string;
}
const LangSelector = ({ size }: Props) => {
  // const router = useRouter();
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale(); // 언어 변경하기

  return (
    <Button
      onClick={() => {
        changeLocale(locale === "ko" ? "en" : "ko");
      }}
    >
      {locale === "ko" ? <LangEn size={size} /> : <LangKo size={size} />}
    </Button>
  );
};

const Button = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export default LangSelector;
