import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { useI18n, useScopedI18n } from "@/locales/client";
import { IconDesign1 } from "@/components/common/IconDesign1";
import { IconDesign2 } from "@/components/common/IconDesign2";
import { IconDesign3 } from "@/components/common/IconDesign3";
import { IconDesign4 } from "@/components/common/IconDesign4";
import { Col, Row } from "antd";
import { dangerouslySetInnerHTML } from "@/utils/string/dangerouslySetInnerHTML";
import Image from "next/image";
import { SMixinFlexColumn, SMixinFlexRow } from "@/styles/emotion";
import { mediaMax } from "@/styles/media";

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
                  src={"/images/axframe-isometric.png"}
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
                <h5>PlanEAT Choice</h5>
                <span>SAMSUNG, IMTSoft</span>
              </div>
              <p>
                PlanEAT Choice는 삼성전자 임직원들을 위한 삼성 그룹사 급식 관리
                솔루션입니다. 2022년 하반기부터 프로젝트를 준비하기 시작하여
                2023년 12월에 되어서 프로젝트를 마무리 할 수 있었습니다. <br />
                본 프로젝트는 ASP(급식업체 관리자) PORTAL(임직원 포털)
                모바일APP로 구성되며 삼성그룹사 마다 별도의 인스턴스가를
                구성해야 했기에 프로젝트 규모나 설치면에서 블록버스터 급이라
                말할 수 있었습니다.
                <br />
                AXFrame의 다양한 기능들을 대규모 프로젝트에 적용해볼 수 있었고
                다양한 사용자들이 사용하는 폐쇄망환경에서 AXFrame이 검증될 수
                있었던 좋은 기회 였습니다.
              </p>
            </div>
          </UseCase>
          <UseCase>
            <img src={"/images/bh.jpg"} alt={"SH project"} />
            <div className={"meta"}>
              <div className={"titles"}>
                <h5>주거상향 전문가 시스템</h5>
                <span>서울주택도시공사</span>
              </div>
              <p>
                PlanEAT Choice는 삼성전자 임직원들을 위한 삼성 그룹사 급식 관리
                솔루션입니다. 2022년 하반기부터 프로젝트를 준비하기 시작하여
                2023년 12월에 되어서 프로젝트를 마무리 할 수 있었습니다. 본
                프로젝트는 ASP(급식업체 관리자) PORTAL(임직원 포털) 모바일APP로
                구성되며 삼성그룹사 마다 별도의 인스턴스가를 구성해야 했기에
                프로젝트 규모나 설치면에서 블록버스터 급이라 말할 수 있었습니다.
                AXFrame의 다양한 기능들을 대규모 프로젝트에 적용해볼 수 있었고
                다양한 사용자들이 사용하는 폐쇄망환경에서 AXFrame이 검증될 수
                있었던 좋은 기회 였습니다.
              </p>
            </div>
          </UseCase>
          <UseCase>
            <img src={"/images/wefor.jpg"} alt={"TeleMarketing Solution"} />
            <div className={"meta"}>
              <div className={"titles"}>
                <h5>TeleMarketing Solution</h5>
                <span>weFor, AXISJ</span>
              </div>
              <p>
                PlanEAT Choice는 삼성전자 임직원들을 위한 삼성 그룹사 급식 관리
                솔루션입니다. 2022년 하반기부터 프로젝트를 준비하기 시작하여
                2023년 12월에 되어서 프로젝트를 마무리 할 수 있었습니다. 본
                프로젝트는 ASP(급식업체 관리자) PORTAL(임직원 포털) 모바일APP로
                구성되며 삼성그룹사 마다 별도의 인스턴스가를 구성해야 했기에
                프로젝트 규모나 설치면에서 블록버스터 급이라 말할 수 있었습니다.
                AXFrame의 다양한 기능들을 대규모 프로젝트에 적용해볼 수 있었고
                다양한 사용자들이 사용하는 폐쇄망환경에서 AXFrame이 검증될 수
                있었던 좋은 기회 였습니다.
              </p>
            </div>
          </UseCase>
          <UseCase>
            <img src={"/images/gms.jpg"} alt={"We"} />
            <div className={"meta"}>
              <div className={"titles"}>
                <h5>역도경기관리시스템</h5>
                <span>AXISJ</span>
              </div>
              <p>
                PlanEAT Choice는 삼성전자 임직원들을 위한 삼성 그룹사 급식 관리
                솔루션입니다. 2022년 하반기부터 프로젝트를 준비하기 시작하여
                2023년 12월에 되어서 프로젝트를 마무리 할 수 있었습니다. 본
                프로젝트는 ASP(급식업체 관리자) PORTAL(임직원 포털) 모바일APP로
                구성되며 삼성그룹사 마다 별도의 인스턴스가를 구성해야 했기에
                프로젝트 규모나 설치면에서 블록버스터 급이라 말할 수 있었습니다.
                AXFrame의 다양한 기능들을 대규모 프로젝트에 적용해볼 수 있었고
                다양한 사용자들이 사용하는 폐쇄망환경에서 AXFrame이 검증될 수
                있었던 좋은 기회 였습니다.
              </p>
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
    }
    p {
      color: var(--txt-body);
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }
`;
