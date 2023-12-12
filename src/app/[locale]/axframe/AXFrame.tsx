import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { useScopedI18n } from "@/locales/client";
import { Col, Row } from "antd";
import { dangerouslySetInnerHTML } from "@/utils/string/dangerouslySetInnerHTML";
import { SMixinFlexColumn, SMixinFlexRow } from "@/styles/emotion";
import { mediaMax } from "@/styles/media";
import Link from "next/link";

interface Props {}

export function AXFrame({}: Props) {
  const t = useScopedI18n("axframe");

  return (
    <Layer>
      <Container>
        <h2>{t("tit")}</h2>

        <Row
          gutter={[
            { xs: 16, sm: 16, md: 32, lg: 64 },
            { xs: 16, sm: 16, md: 64 },
          ]}
        >
          <Col sm={24} md={12}>
            <img
              src={"/images/axframe-isometric.png"}
              alt={"axframe-img.jpg"}
              style={{ width: "100%", borderRadius: 10 }}
            />
          </Col>
          <Col sm={24} md={12}>
            <p {...dangerouslySetInnerHTML(t("desc"))} />
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
    line-height: 1.2;
    font-weight: normal;
    margin-bottom: 3rem;
    color: var(--white);
    text-align: center;
    font-family: var(--font-display);
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
    color: var(--white);
    font-size: 1.05rem;
  }
`;

const UseCaseWrap = styled.div`
  ${SMixinFlexColumn("stretch", "stretch")};
  gap: 2rem;
`;
const UseCase = styled.div`
  ${SMixinFlexRow("stretch", "flex-start")};
  background: var(--white);
  border-radius: 10px;
  margin: 0 auto;
  padding: 1.5rem;
  gap: 1.5rem;

  ${mediaMax.md} {
    ${SMixinFlexColumn("stretch", "flex-start")};
    padding: 0;
    gap: 0.5rem;
  }

  img {
    width: 300px;
    border-radius: 10px;
    ${mediaMax.md} {
      width: 100%;
    }
  }
  .meta {
    ${SMixinFlexColumn("stretch", "stretch")};
    gap: 1rem;

    ${mediaMax.md} {
      padding: 1rem;
    }

    .titles {
      ${SMixinFlexColumn("flex-start", "flex-start")};
      gap: 0.5rem;
      font-family: var(--font-display);
      h5 {
        text-align: center;
        font-size: 1.1rem;
      }
    }
    p {
      color: var(--txt-body);
      font-size: 0.96rem;
      line-height: 1.4;
    }
    [role="read"] {
      font-size: 14px;
      font-weight: bold;
      font-family: var(--font-display);
      &:hover {
        color: var(--txt-link-hover);
      }
    }
  }
`;
