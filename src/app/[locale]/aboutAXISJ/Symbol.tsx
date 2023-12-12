import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { media } from "@/styles/media";
import { LogoAXSymbol } from "@/components/common/LogoAXSymbol";
import { useI18n } from "@/locales/client";
import { SMixinFlexRow } from "@/styles/emotion";
import { Col, Row } from "antd";

interface Props {}

export function Symbol({}: Props) {
  const t = useI18n();

  return (
    <Layer>
      <Container>
        <h3>{t("title-ci")}</h3>
        <Row
          className={"ciTitleBox"}
          gutter={32}
          justify="start"
          align={"middle"}
        >
          <Col>
            <LogoAXSymbol size={"5rem"} style={{ margin: "1rem 0" }} />
          </Col>
          <Col xs={24} sm={18} md={20} lg={16} xl={12}>
            <p>{t("ci-desc")}</p>
          </Col>
        </Row>

        <div className={"colorBox"}>
          <h4>{t("title-color-primary")}</h4>
          <Row gutter={32} justify="start" align={"middle"}>
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
          <Row gutter={32} justify="start" align={"middle"}>
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
      </Container>
    </Layer>
  );
}

const Container = styled(PageContainer)``;
const Layer = styled.div`
  border-top: 1px solid var(--border-color);
  padding: 5rem 2rem;

  h3 {
    font-size: 2rem;
    line-height: 1.75rem;
    margin-bottom: 1.5rem;
    font-weight: normal;
  }
  h4 {
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .ciTitleBox {
    p {
      font-size: 1rem;
      line-height: 1.5rem;
      word-break: keep-all;
      color: var(--txt-body);
    }
  }
  .colorBox {
    //dl...
    margin-top: 2rem;
    .colorPallet {
      flex: 0 0 auto;
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border-radius: 100rem;

      &.ax_supernova_red {
        background-color: var(--ax_supernova_red);
      }
      &.ax_space_blue {
        background-color: var(--ax_space_blue);
      }
      &.ax_deep_black {
        background-color: var(--ax_deep_black);
      }
      &.ax_desert_yellow {
        background-color: var(--ax_desert_yellow);
      }
      &.ax_leaf_green {
        background-color: var(--ax_leaf_green);
      }
      &.ax_sandy_brown {
        background-color: var(--ax_sandy_brown);
      }
      &.ax_skyblue {
        background-color: var(--ax_skyblue);
      }
    }
    .colorName {
      font-size: 0.75rem;
      line-height: 1rem;
      word-break: keep-all;
    }
    .palletBox {
      padding: 0.3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      //flex-wrap:no-wrap
    }
  }
`;
