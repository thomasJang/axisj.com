import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { useScopedI18n } from "@/locales/client";
import { Button, Col, Row } from "antd";
import { SMixinFlexRow } from "@/styles/emotion";
import { mediaMax } from "@/styles/media";
import { LinkOutlined } from "@ant-design/icons";

interface Props {}

export function Contact({}: Props) {
  const t = useScopedI18n("contact");

  return (
    <Layer>
      <Container>
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
                <img
                  src={"/images/axisj-map.png"}
                  alt={"AXISJ MAP"}
                  style={{ width: "100%", borderRadius: 10 }}
                />
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
                      <a href={"mailto:sales@axisj.com"} target="_blank">
                        sales@axisj.com
                      </a>
                    </p>
                  </dd>
                </dl>

                <ButtonWrap>
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
                </ButtonWrap>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layer>
  );
}

const Container = styled(PageContainer)``;
const Layer = styled.div`
  background: var(--line-gr);
  border-top: 1px solid var(--border-color);

  padding: 5rem 2rem;

  ${mediaMax.md} {
    padding: 3rem 1rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: normal;
    margin-bottom: 3rem;
    text-align: center;
    font-family: var(--font-display);
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  dl {
  }
  dt {
    font-weight: 700;
    margin-top: 1rem;
    font-family: var(--font-display);
  }
  dd {
    padding: 0.5rem 0;
    p {
      font-size: 1.1rem;
      line-height: 1.4rem;
      color: var(--txt-body);
      margin-bottom: 0.5rem;
    }
  }
`;
const ButtonWrap = styled.div`
  ${SMixinFlexRow("flex-start", "center")};
  gap: 1rem;
  padding: 1rem 0;
`;
