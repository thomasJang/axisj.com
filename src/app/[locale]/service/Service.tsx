import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { useI18n } from "@/locales/client";
import { IconDesign1 } from "@/components/common/IconDesign1";
import { IconDesign2 } from "@/components/common/IconDesign2";
import { IconDesign3 } from "@/components/common/IconDesign3";
import { Col, Row } from "antd";
import { dangerouslySetInnerHTML } from "@/utils/string/dangerouslySetInnerHTML";

interface Props {}

export function Service({}: Props) {
  const t = useI18n();

  return (
    <Layer>
      <Container>
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
      </Container>
    </Layer>
  );
}

const Container = styled(PageContainer)``;
const Layer = styled.div`
  background-image: url("/images/bg-service.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 5rem 2rem;

  h2 {
    font-size: 2.5rem;
    font-weight: normal;
    margin-bottom: 3rem;
  }

  .titIcon {
    font-size: 4rem;
    padding-bottom: 1rem;

    &.ti1 {
      [stroke="#E0D0A6"] {
        stroke: var(--ax_supernova_red);
        stroke-width: 5px;
      }
    }
    &.ti2 {
      [stroke="#E0D0A6"] {
        stroke: #324b7b;
        stroke-width: 5px;
      }
      [fill="#E0D0A6"] {
        fill: #324b7b;
      }
    }
    &.ti3 {
      [stroke="#E0D0A6"] {
        stroke: var(--ax_supernova_red);
        stroke-width: 5px;
      }
    }
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: var(--font-display);
  }

  p {
    margin: 1rem 0;
    color: var(--txt-body);
    line-height: 1.5;
    font-size: 0.975rem;
  }
`;
