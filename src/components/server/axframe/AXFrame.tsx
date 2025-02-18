import { Link } from "@/i18n/routing";
import { dangerouslySetInnerHTML } from "@/utils/string/dangerouslySetInnerHTML";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as React from "react";
import "./AXFrame.scss";

interface Props {}

export function AXFrame({}: Props) {
  const t = useTranslations("pages.axframe");

  return (
    <div className={"axframe-section"}>
      <div className={"container"}>
        <h2>{t("tit")}</h2>

        <Row
          gutter={[
            { xs: 16, sm: 16, md: 32, lg: 64 },
            { xs: 16, sm: 16, md: 64 },
          ]}
        >
          <Col sm={24} md={12}>
            <Image
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 10,
              }}
              loading={"lazy"}
              src={"/images/axframe-isometric.png"}
              alt={"axframe-img.jpg"}
              width={1220}
              height={810}
            />
          </Col>
          <Col sm={24} md={12}>
            <p {...dangerouslySetInnerHTML(t("desc"))} />
          </Col>
        </Row>

        <h3>{t("use-case.title")}</h3>
        <div className={"useCaseWrap"}>
          <div className={"useCase"}>
            <Image
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 10,
              }}
              loading={"lazy"}
              src={"/images/gms.jpg"}
              alt={"We"}
              width={600}
              height={450}
              quality={100}
            />
            <div className={"meta"}>
              <div className={"titles"}>
                <h5>{t("use-case.gms.title")}</h5>
                <span>{t("use-case.gms.customer")}</span>
              </div>
              <p {...dangerouslySetInnerHTML(t("use-case.gms.desc"))} />

              <Link href={`/blog/weight-lifting`} role={"read"}>
                Read More {`>>`}
              </Link>
            </div>
          </div>

          <div className={"useCase"}>
            <Image
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 10,
              }}
              loading={"lazy"}
              src={"/images/wefor.jpg"}
              alt={"TeleMarketing Solution"}
              width={600}
              height={450}
              quality={100}
            />
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
          </div>

          <div className={"useCase"}>
            <Image
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 10,
              }}
              loading={"lazy"}
              src={"/images/bh.jpg"}
              alt={"SH project"}
              width={600}
              height={450}
              quality={100}
            />
            <div className={"meta"}>
              <div className={"titles"}>
                <h5>{t("use-case.bh.title")}</h5>
                <span>{t("use-case.bh.customer")}</span>
              </div>
              <p {...dangerouslySetInnerHTML(t("use-case.bh.desc"))} />
            </div>
          </div>

          <div className={"useCase"}>
            <Image
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 10,
              }}
              loading={"lazy"}
              src={"/images/planeat.jpg"}
              alt={"PlanEAT Choice"}
              width={600}
              height={450}
              quality={100}
            />

            <div className={"meta"}>
              <div className={"titles"}>
                <h5>{t("use-case.planeat.title")}</h5>
                <span>{t("use-case.planeat.customer")}</span>
              </div>
              <p {...dangerouslySetInnerHTML(t("use-case.planeat.desc"))} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
