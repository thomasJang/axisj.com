import { useTranslations } from "next-intl";
import * as React from "react";
import styled from "@emotion/styled";
import { SMixinFlexColumn } from "@/styles/emotion";

interface Props {}

export function PostTitle({}: Props) {
  const t = useTranslations();
  return (
    <Layer>
      <div className={"container"}>{t("router.blog.title")}</div>
    </Layer>
  );
}

const Layer = styled.div`
  .container {
    ${SMixinFlexColumn("center", "center")};
  }

  padding: 4rem 0;
  background: var(--line-gr);
  font-size: 2.5rem;
  font-family: var(--font-display);
`;
