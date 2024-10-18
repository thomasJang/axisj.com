"use client";
import { LinkOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { useTranslations } from "next-intl";
import * as React from "react";
import "./Contact.scss";

interface Props {}

export function Contact({}: Props) {
  const t = useTranslations("pages.contact");

  return (
    <div className={"contact-section"}>
      <div className={"container"}>
        <h2>{t("tit")}</h2>

        <Row>
          <Col sm={24} lg={24} xl={{ offset: 2, span: 20 }}>
            <Row
              gutter={[
                { xs: 16, sm: 16, md: 32, lg: 64 },
                { xs: 16, sm: 16, md: 64 },
              ]}
            >
              <Col sm={24} md={12}>
                <img src={"/images/axisj-map.png"} alt={"AXISJ MAP"} style={{ width: "100%", borderRadius: 10 }} />
              </Col>
              <Col sm={24} md={12}>
                <dl>
                  <dt>{t("address")}</dt>
                  <dd>
                    <p>서울 영등포구 양평로14길 13 3층</p>
                    <p>3F, 13, Yangpyeong-ro 14-gil, Yeongdeungpo-gu, Seoul.</p>
                  </dd>
                  <dt>{t("zipcode")}</dt>
                  <dd>
                    <p>07222</p>
                  </dd>
                  <dt>{t("tel")}</dt>
                  <dd>
                    <p>
                      <a href={"tel:+82 02-2088-5725"}>+82 02-2088-5725</a>
                    </p>
                  </dd>
                  <dt>{t("email")}</dt>
                  <dd>
                    <p>
                      <a href={"mailto:sales@axisj.com"} target='_blank'>
                        sales@axisj.com
                      </a>
                    </p>
                  </dd>
                </dl>

                <div className={"buttonWrap"}>
                  <Button
                    icon={<LinkOutlined />}
                    onClick={() => {
                      window.open("https://naver.me/xiw19Q1h", "_blank");
                    }}
                  >
                    {t("naver-map")}
                  </Button>
                  <Button
                    icon={<LinkOutlined />}
                    onClick={() => {
                      window.open("https://kko.to/QiXd4lAnyd", "_blank");
                    }}
                  >
                    {t("daum-map")}
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
