"use client";

import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { Col, Divider, Row, Select, Space, Dropdown } from "antd";
import Link from "next/link";
import { mediaMax } from "@/styles/media";
import { useI18n } from "@/locales/client";
import { IconInstagram } from "@/components/common/IconInstagram";
import { IconGithub } from "@/components/common/IconGithub";
import { DownOutlined } from "@ant-design/icons";
import { SMixinFlexRow } from "@/styles/emotion";

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
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            className={"colRight"}
          >
            <div className={"foptions"}>
              <Dropdown
                menu={{
                  items: [
                    {
                      label: `${t("footer-select-1")}`,
                      key: "https://axisj.com",
                    },
                    {
                      label: `${t("footer-select-2")}`,
                      key: "https://axframe.axisj.com",
                    },
                  ],
                  onClick: (info) => {
                    window.open(info.key, "_blank");
                  },
                }}
              >
                <a>
                  <Space>
                    {t("footer-family")}
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>

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
          <Col span={24} className={"faddr"}>
            <span>{t("footer-addr")}</span>
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
  background: var(--background);

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
    gap: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;

    svg {
      display: block;
    }
    svg [fill] {
      fill: var(--txt-body);
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
    padding: 1rem;
    .divider {
      margin: 1rem auto;
      width: 50%;
      min-width: auto;
    }
    .colLeft {
      padding: 1rem 0;
      ${SMixinFlexRow("center", "center")};
    }
    .colRight {
      ${SMixinFlexRow("center", "center")};
    }
    .faddr {
      text-align: center;
      line-height: 1.5;
    }
  }
`;
