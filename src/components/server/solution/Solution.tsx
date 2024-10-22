import { dangerouslySetInnerHTML } from "@/utils/string/dangerouslySetInnerHTML";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import * as React from "react";
import "./Solution.scss";
import { IconSolution1 } from "@/components/client/common/IconSolution1";
import { IconSolution2 } from "@/components/client/common/IconSolution2";
import { IconSolution3 } from "@/components/client/common/IconSolution3";


interface Props {}

export function Solution({}: Props) {
  const t = useTranslations("pages.solution");
  return (
    <div className={"solution-section"}>
      <div className={"container"}>
        <h2>{t("title-solution")}</h2>

        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32, xl: 64 }, 24]}>
          <Col span={24} sm={24} md={12} lg={12} xl={8}>
            <div className={"titIcon ti1"}>
              <IconSolution1 size={"1"} />
            </div>

            <span className={"title"}>{t("solution-1-title")}</span>
            <p {...dangerouslySetInnerHTML(t("solution-1-desc"))}></p>
          </Col>
          <Col span={24} sm={24} md={12} lg={12} xl={8}>
            <div className={"titIcon ti2"}>
              <IconSolution2 size={"1"} />
            </div>
            <span className={"title"}>{t("solution-2-title")}</span>
            <p {...dangerouslySetInnerHTML(t("solution-2-desc"))}></p>
          </Col>
          <Col span={24} sm={24} md={12} lg={12} xl={8}>
            <div className={"titIcon  ti3"}>
              <IconSolution3 size={"1"} />
            </div>
            <span className={"title"}>{t("solution-3-title")}</span>
            <p {...dangerouslySetInnerHTML(t("solution-3-desc"))}></p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
