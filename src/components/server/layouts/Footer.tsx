import { IconGithub } from "@/components/client/common/IconGithub";
import { IconInstagram } from "@/components/client/common/IconInstagram";
import { Col, Divider, Row } from "antd";
import { useTranslations } from "next-intl";
import Link from "next/link";
import * as React from "react";

interface Props {}

export function Footer({}: Props) {
  const t = useTranslations();
  return (
    <div className={"footer"}>
      <div className={"container"}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32 }}>
          <Col span={24} sm={24} md={12} lg={12} xl={12} xxl={12} className={"colLeft"}>
            <span className={"fcopyright"}>ⓒ AXISJ Inc. All rights reserved.</span>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className={"colRight"}>
            <div className={"foptions"}>
              {/*<Dropdown*/}
              {/*  menu={{*/}
              {/*    items: [*/}
              {/*      {*/}
              {/*        label: `${t("footer-select-1")}`,*/}
              {/*        key: "https://axisj.com",*/}
              {/*      },*/}
              {/*      {*/}
              {/*        label: `${t("footer-select-2")}`,*/}
              {/*        key: "https://axframe.axisj.com",*/}
              {/*      },*/}
              {/*    ],*/}
              {/*    onClick: (info) => {*/}
              {/*      window.open(info.key, "_blank");*/}
              {/*    },*/}
              {/*  }}*/}
              {/*>*/}
              {/*  <a>*/}
              {/*    <Space>*/}
              {/*      {t("footer-family")}*/}
              {/*      <DownOutlined />*/}
              {/*    </Space>*/}
              {/*  </a>*/}
              {/*</Dropdown>*/}

              <Link href={"https://www.instagram.com/axisj_official/"} target={"_blank"} className={"fopt2"}>
                <IconInstagram size={"1.5rem"} />
              </Link>
              <Link href={"https://github.com/axisj"} target={"_blank"} className={"fopt3"}>
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
      </div>
    </div>
  );
}
