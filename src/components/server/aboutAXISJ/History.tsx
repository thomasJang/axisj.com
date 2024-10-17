import { useTranslations } from "next-intl";
import * as React from "react";
import "./History.scss";

interface Props {}

export function History({}: Props) {
  const t = useTranslations("pages.history");

  return (
    <div className={"history-section"}>
      <div className={"container"}>
        <h3>{t("title")}</h3>

        <div className={"historySymbol"}></div>

        <div className={"timeline"}>
          <ul>
            <li className={"li-5 left"}>
              <div className={"historyBox"}>
                <span className={"ball red"}></span>
                <span className={"textYear"}>2024.2</span>
                <span className={"textDone"}>{t("7")}</span>
              </div>
            </li>
            <li className={"li-5 right"}>
              <div className={"historyBox"}>
                <span className={"ball red"}></span>
                <span className={"textYear"}>2023.10</span>
                <span className={"textDone"}>{t("6")}</span>
              </div>
            </li>
            <li className={"li-5 right"} style={{ marginBottom: "3rem" }}>
              <div className={"historyBox"}>
                <span className={"ball red"}></span>
                <span className={"textYear"}>2023</span>
                <span className={"textDone"}>{t("5")}</span>
              </div>
            </li>
            <li className={"li-4 right"} style={{ marginBottom: "1rem" }}>
              <div className={"historyBox"}>
                <span className={"ball red"}></span>
                <span className={"textYear"}>2018</span>
                <span className={"textDone"}>{t("4")}</span>
              </div>
            </li>
            <li className={"li-3 left"}>
              <div className={"historyBox"}>
                <span className={"ball blue"}></span>
                <span className={"textYear"}>2016</span>
                <span className={"textDone"}>{t("31")}</span>
              </div>
            </li>
            <li className={"li-3 right"}>
              <div className={"historyBox"}>
                <span className={"ball blue"}></span>
                <span className={"textYear"}>2015</span>
                <span className={"textDone"}>{t("3")}</span>
              </div>
            </li>
            <li className={"li-3 left"}>
              <div className={"historyBox"}>
                <span className={"ball blue"}></span>
                <span className={"textYear"}>2014</span>
                <span className={"textDone"}>{t("21")}</span>
              </div>
            </li>
            <li className={"li-2 right"}>
              <div className={"historyBox"}>
                <span className={"ball blue"}></span>
                <span className={"textYear"}>2013</span>
                <span className={"textDone"}>{t("2")}</span>
              </div>
            </li>
            <li className={"li-2 left"}>
              <div className={"historyBox"}>
                <span className={"ball blue"}></span>
                <span className={"textYear"}>2012</span>
                <span className={"textDone"}>{t("1")}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
