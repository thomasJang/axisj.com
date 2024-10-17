import { IconDesign1 } from "@/components/client/common/IconDesign1";
import { IconDesign2 } from "@/components/client/common/IconDesign2";
import { IconDesign3 } from "@/components/client/common/IconDesign3";
import { dangerouslySetInnerHTML } from "@/utils/string/dangerouslySetInnerHTML";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import * as React from "react";
import "./Service.scss";

interface Props {}

export function Service({}: Props) {
  const t = useTranslations("pages.service");

  return (
    <div className={"service-section"}>
      <div className={"container"}>
        <h2>{t("title-service")}</h2>

        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32, xl: 64 }, 24]}>
          <Col span={24} sm={24} md={12} lg={12} xl={8}>
            <div className={"titIcon ti1"}>
              <IconDesign1 />
            </div>

            <span className={"title"}>{t("service-1-title")}</span>
            <p {...dangerouslySetInnerHTML(t("service-1-desc"))}></p>
          </Col>
          <Col span={24} sm={24} md={12} lg={12} xl={8}>
            <div className={"titIcon ti2"}>
              <IconDesign2 />
            </div>
            <span className={"title"}>{t("service-2-title")}</span>
            <p {...dangerouslySetInnerHTML(t("service-2-desc"))}></p>
          </Col>
          <Col span={24} sm={24} md={12} lg={12} xl={8}>
            <div className={"titIcon  ti3"}>
              <IconDesign3 />
            </div>
            <span className={"title"}>{t("service-3-title")}</span>
            <p {...dangerouslySetInnerHTML(t("service-3-desc"))}></p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
