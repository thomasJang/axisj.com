import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { mediaMax } from "@/styles/media";
import { IconDesign } from "@/app/components/common/IconDesign";
import { Col, Row } from "antd";
import { IconDesign1 } from "@/app/components/common/IconDesign1";
import { IconDesign2 } from "@/app/components/common/IconDesign2";
import { IconDesign3 } from "@/app/components/common/IconDesign3";
import { IconDesign4 } from "@/app/components/common/IconDesign4";
import { dangerouslySetInnerHTML } from "@/utils/string/dangerouslySetInnerHTML";
import { useI18n } from "@/locales/client";

interface Props {}

export function Design({}: Props) {
  const t = useI18n();

  return (
    <Layer>
      <Container>
        <div className={"axBox axDesignWrapper"}>
          <h2>{t("title-design")}</h2>
          <div className={"titleDesignIcon"}>
            <IconDesign />
          </div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32 }}>
            <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <dl>
                <dt className={"titIcon"}>
                  <IconDesign1 />
                </dt>
                <dt>
                  <span>{t("design-1-title")}</span>
                  <span className={"titEn"}>Trust</span>
                </dt>
                <dd {...dangerouslySetInnerHTML(t("design-1-desc"))} />
              </dl>
            </Col>
            <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <dl>
                <dt className={"titIcon"}>
                  <IconDesign2 />
                </dt>
                <dt>
                  <span>{t("design-2-title")}</span>
                  <span className={"titEn"}>Connect</span>
                </dt>
                <dd {...dangerouslySetInnerHTML(t("design-2-desc"))} />
              </dl>
            </Col>
            <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <dl>
                <dt className={"titIcon"}>
                  <IconDesign3 />
                </dt>
                <dt>
                  <span>{t("design-3-title")}</span>
                  <span className={"titEn"}>Growth</span>
                </dt>
                <dd {...dangerouslySetInnerHTML(t("design-3-desc"))} />
              </dl>
            </Col>
            <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <dl>
                <dt className={"titIcon"}>
                  <IconDesign4 />
                </dt>
                <dt>
                  <span>{t("design-4-title")}</span>
                  <span className={"titEn"}>Balance</span>
                </dt>
                <dd {...dangerouslySetInnerHTML(t("design-4-desc"))} />
              </dl>
            </Col>
          </Row>
        </div>
      </Container>
    </Layer>
  );
}

const Container = styled(PageContainer)``;
const Layer = styled.div`
  background: var(--line-gr);
  border-top: 1px solid var(--border-color);
  &.customersLayer {
    padding: 4rem 0;
  }
  .axBox {
    padding: 5rem 0;
    h2 {
      text-align: center;
      font-size: 2.5rem;
      font-weight: normal;
    }
    dl {
      margin-top: 4rem;
      color: var(--txt-body);
      dt {
        font-size: 1.5rem;
        color: var(--txt-display);
      }
      dd {
        font-size: 0.875rem;
        line-height: 1.25rem;
        word-break: keep-all;
        padding: 1rem 0;
        margin: 0;
        white-space: pre-line;
      }
    }
  }
  ${mediaMax.md} {
    .axBox {
      padding: 5rem 2rem;
      h2 {
        font-size: 2rem;
      }
    }
  }
  .badge {
    display: inline-block;
    font-size: 0.75rem;
    color: var(--ax_sandy_brown);
    padding: 0.25rem 0.5rem;
    border-radius: 5rem;
    border: 0.063rem solid var(--ax_sandy_brown);
  }
  .axTechWrapper {
    dl {
      dt {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.5rem;
        color: var(--white);
      }
      dd {
        color: var(--white);
      }
    }
  }
  .axServiceWrapper {
    dl {
      dt {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
        &.titIcon {
          padding-bottom: 1rem;
        }
        .titEn {
          font-size: 1rem;
        }
      }
      dd {
      }
    }
  }
  .axDesignWrapper {
    .titleDesignIcon {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
    }
    dl {
      dt {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
        &.titIcon {
          padding-bottom: 1rem;
        }
        .titEn {
          font-size: 1rem;
        }
      }
      dd {
      }
    }
  }

  &.bgTech {
    background-color: var(--black);
    color: var(--white);
  }
  &.bgService {
    background-image: url("/images/bg-service.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
