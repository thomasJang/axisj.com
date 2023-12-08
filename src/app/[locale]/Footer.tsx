"use client";

import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { Col, Divider, Row, Select } from "antd";
import Link from "next/link";
import { mediaMax } from "@/styles/media";
import { useI18n } from "@/locales/client";
import { IconInstagram } from "@/app/components/common/IconInstagram";
import { IconGithub } from "@/app/components/common/IconGithub";

interface Props {}

export function Footer({}: Props) {
  const t = useI18n();
  return (
    <Div>
      <Container>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32 }}>
          <Col
            span={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            className={"colLeft"}
          >
            <span className={"fcopyright"}>
              ⓒ AXISJ Inc. All rights reserved.
            </span>
          </Col>
          <Col
            span={14}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            className={"colRight"}
          >
            <div className={"foptions"}>
              <Select
                defaultValue={t("footer-family")}
                style={{
                  width: 200,
                }}
                // onChange={handleFamilyChange}
                options={[
                  { label: `${t("footer-select-1")}`, value: "axisj.com" },
                  {
                    label: `${t("footer-select-2")}`,
                    value: "axframe.axisj.com",
                  },
                ]}
                className={"fopt1"}
              />
              <Link
                href={"https://www.instagram.com/axisj_official/"}
                target={"_blank"}
                className={"fopt2"}
              >
                <IconInstagram size={"1.5rem"} />
              </Link>
              <Link
                href={"https://github.com/axisj"}
                target={"_blank"}
                className={"fopt3"}
              >
                <IconGithub size={"1.5rem"} />
              </Link>
            </div>
          </Col>
        </Row>
        <Divider className={"divider"} />
        <Row>
          <Col>
            <span className={"faddr"}>{t("footer-addr")}</span>
          </Col>
        </Row>
      </Container>
    </Div>
  );
}

const Container = styled(PageContainer)``;

const Div = styled.div`
  font-size: 0.875rem;
  padding: 3rem 0;
  position: relative;
  z-index: 5;
  overflow-x: hidden;
  border-top: 1px solid var(--border-color);

  .colLeft {
    align-items: center;
    justify-content: flex-start;
    display: flex;
  }
  .colRight {
    align-items: center;
    justify-content: flex-end;
    display: flex;
  }
  .fcopyright {
    font-size: 0.75rem;
    color: var(--txt-body);
  }
  .foptions {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    svg [fill="white"] {
      fill: var(--txt-body);
      display: block;
    }
    .fopt1 {
      //antd selector...
      .ant-select-selector {
        color: var(--txt-body);
        background: transparent;
        border: 0.063rem solid var(--border-color);
      }
      .ant-select-arrow {
        color: var(--txt-body);
      }
    }
    .fopt2 {
    }
    .fopt3 {
    }
  }
  .faddr {
    font-size: 0.75rem;
    color: var(--txt-body);
  }
  .divider {
    border-top: 0.063rem solid var(--border-color);
  }
  ${mediaMax.md} {
    padding: 6rem 2rem;
    .colLeft {
      padding: 1rem 0;
    }
    .colRight {
      justify-content: flex-start;
    }
  }
`;
