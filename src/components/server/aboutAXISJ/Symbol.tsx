import { LogoAXSymbol } from "@/components/server/common/LogoAXSymbol";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import * as React from "react";
import "./Symbol.scss";

interface Props {}

export function Symbol({}: Props) {
  const t = useTranslations("pages.symbol");

  return (
    <div className={"symbol-section"}>
      <div className={"container"}>
        <h3>{t("title-ci")}</h3>
        <Row className={"ciTitleBox"} gutter={32} justify='start' align={"middle"}>
          <Col>
            <LogoAXSymbol style={{ margin: "1rem 0", width: "8rem" }} />
          </Col>
          <Col xs={24} sm={18} md={20} lg={16} xl={12}>
            <p>{t("ci-desc")}</p>
          </Col>
        </Row>

        <div className={"colorBox"}>
          <h4>{t("title-color-primary")}</h4>
          <Row gutter={32} justify='start' align={"middle"}>
            <Col>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_supernova_red"}></span>
                <span className={"colorName"}>{t("color-primary-1")}</span>
              </div>
            </Col>
            <Col>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_space_blue"}></span>
                <span className={"colorName"}>{t("color-primary-2")}</span>
              </div>
            </Col>
            <Col>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_deep_black"}></span>
                <span className={"colorName"}>{t("color-primary-3")}</span>
              </div>
            </Col>
          </Row>
        </div>

        <div className={"colorBox"}>
          <h4>{t("title-color-wild")}</h4>
          <Row gutter={32} justify='start' align={"middle"}>
            <Col>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_desert_yellow"}></span>
                <span className={"colorName"}>{t("color-wild-1")}</span>
              </div>
            </Col>
            <Col>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_leaf_green"}></span>
                <span className={"colorName"}>{t("color-wild-2")}</span>
              </div>
            </Col>
            <Col>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_sandy_brown"}></span>
                <span className={"colorName"}>{t("color-wild-3")}</span>
              </div>
            </Col>
            <Col>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_skyblue"}></span>
                <span className={"colorName"}>{t("color-wild-4")}</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
