import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { useI18n } from "@/locales/client";
import { SMixinFlexColumn } from "@/styles/emotion";

interface Props {}

export function PostTitle({}: Props) {
  const t = useI18n();
  return (
    <Layer>
      <Container>{t("menu.blog.title")}</Container>
    </Layer>
  );
}

const Container = styled(PageContainer)`
  ${SMixinFlexColumn("center", "center")};
`;
const Layer = styled.div`
  padding: 4rem 0;
  background: var(--line-gr);
  font-size: 2.5rem;
`;
