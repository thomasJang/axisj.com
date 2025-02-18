"use client";
import { LinkOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
                { xs: 16, sm: 16, md: 24, lg: 32 },
                { xs: 16, sm: 16, md: 24 },
              ]}
            >
              <Col sm={24} md={14}>
                <Image
                  src={"/images/axisj-map.png"}
                  alt={"AXISJ MAP"}
                  width={1186}
                  height={1004}
                  sizes='100vw'
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 10,
                  }}
                  loading={"lazy"}
                />
              </Col>
              <Col sm={24} md={10}>
                <dl>
                  <dt>{t("address")}</dt>
                  <dd>
                    <p>서울 영등포구 선유로49길 4, 604호</p>
                    <p>604, 4, Seonyu-ro 49-gil, Yeongdeungpo-gu, Seoul</p>
                  </dd>
                  <dt>{t("zipcode")}</dt>
                  <dd>
                    <p>07208</p>
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
                      window.open("https://naver.me/GQ1QLsIi", "_blank");
                    }}
                  >
                    {t("naver-map")}
                  </Button>
                  <Button
                    icon={<LinkOutlined />}
                    onClick={() => {
                      window.open("https://kko.kakao.com/ctVFXQ0Moz", "_blank");
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
