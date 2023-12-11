import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { useScopedI18n } from "@/locales/client";
import { Col, Row } from "antd";
import { dangerouslySetInnerHTML } from "@/utils/string/dangerouslySetInnerHTML";
import { SMixinFlexColumn } from "@/styles/emotion";
import { mediaMax } from "@/styles/media";
import Link from "next/link";

interface Props {}

export function AXFrame({}: Props) {
  const t = useScopedI18n("axframe");

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
                  src={"/images/axframe-img.jpg"}
                  alt={"axframe-img.jpg"}
                  style={{ width: "100%", borderRadius: 10 }}
                />
              </Col>
              <Col sm={24} md={12}>
                <p {...dangerouslySetInnerHTML(t("desc"))} />
              </Col>
            </Row>
          </Col>
        </Row>

        <h3>{t("use-case")}</h3>
        <UseCaseWrap>
          <UseCase>
            <img src={"/images/planeat.jpg"} alt={"PlanEAT Choice"} />
            <div className={"meta"}>
              <div className={"titles"}>
                <h5>{t("use-case.planeat.title")}</h5>
                <span>{t("use-case.planeat.customer")}</span>
              </div>
              <p {...dangerouslySetInnerHTML(t("use-case.planeat.desc"))} />
            </div>
          </UseCase>
          <UseCase>
            <img src={"/images/bh.jpg"} alt={"SH project"} />
            <div className={"meta"}>
              <div className={"titles"}>
                <h5>{t("use-case.bh.title")}</h5>
                <span>{t("use-case.bh.customer")}</span>
              </div>
              <p {...dangerouslySetInnerHTML(t("use-case.bh.desc"))} />
            </div>
          </UseCase>
          <UseCase>
            <img src={"/images/wefor.jpg"} alt={"TeleMarketing Solution"} />
            <div className={"meta"}>
              <div className={"titles"}>
                <h5>{t("use-case.tm.title")}</h5>
                <span>{t("use-case.tm.customer")}</span>
              </div>
              <p {...dangerouslySetInnerHTML(t("use-case.tm.desc"))} />

              <Link href={`/blog/tm-solution`} role={"read"}>
                Read More {`>>`}
              </Link>
            </div>
          </UseCase>
          <UseCase>
            <img src={"/images/gms.jpg"} alt={"We"} />
            <div className={"meta"}>
              <div className={"titles"}>
                <h5>{t("use-case.gms.title")}</h5>
                <span>{t("use-case.gms.customer")}</span>
              </div>
              <p {...dangerouslySetInnerHTML(t("use-case.gms.desc"))} />
            </div>
          </UseCase>
        </UseCaseWrap>
      </Container>
    </Layer>
  );
}

const Container = styled(PageContainer)``;
const Layer = styled.div`
  background: var(--ax_space_blue);
  padding: 5rem 2rem;

  ${mediaMax.md} {
    padding: 3rem 1rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: normal;
    margin-bottom: 3rem;
    color: var(--white);
    text-align: center;
  }

  h3 {
    font-size: 1.8rem;
    color: var(--white);
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    margin: 0;
    line-height: 1.4rem;
    color: var(--white);
  }
`;

const UseCaseWrap = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  ${mediaMax.md} {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
const UseCase = styled.div`
  background: var(--white);
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
  img {
    width: 100%;
    border-radius: 10px;
  }
  .meta {
    ${SMixinFlexColumn("stretch", "stretch")};
    gap: 1rem;
    padding: 1.5rem;

    ${mediaMax.md} {
      padding: 1rem;
    }

    .titles {
      ${SMixinFlexColumn("flex-start", "center")};
      gap: 0.5rem;
      h5 {
        text-align: center;
      }
    }
    p {
      font-family: var(--font-body);
      color: var(--txt-body);
      font-size: 0.9rem;
      line-height: 1.2rem;
    }
    [role="read"] {
      font-size: 14px;
      font-weight: bold;
      &:hover {
        color: var(--txt-link-hover);
      }
    }
  }
`;
