import * as React from "react";
import styled from "@emotion/styled";
import { PageContainer } from "@/styles/Layouts";
import { media } from "@/styles/media";
import { LogoAXSymbol } from "@/app/components/common/LogoAXSymbol";
import { useI18n } from "@/locales/client";

interface Props {}

export function Symbol({}: Props) {
  const t = useI18n();

  return (
    <Layer>
      <Container>
        <div className={"ciTitleBox"}>
          <div className={"left"}>
            <h2>{t("title-ci")}</h2>
            <p>{t("ci-desc")}</p>
          </div>
          <div className={"right"}>
            <LogoAXSymbol size={"5rem"} />
          </div>
        </div>

        <div className={"colorBox primary"}>
          <h3>{t("title-color-primary")}</h3>
          <ul>
            <li>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_supernova_red"}></span>
                <span className={"colorName"}>{t("color-primary-1")}</span>
              </div>
            </li>
            <li>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_space_blue"}></span>
                <span className={"colorName"}>{t("color-primary-2")}</span>
              </div>
            </li>
            <li>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_deep_black"}></span>
                <span className={"colorName"}>{t("color-primary-3")}</span>
              </div>
            </li>
          </ul>
        </div>

        <div className={"colorBox wild"}>
          <h3>{t("title-color-wild")}</h3>
          <ul>
            <li>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_desert_yellow"}></span>
                <span className={"colorName"}>{t("color-wild-1")}</span>
              </div>
            </li>
            <li>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_leaf_green"}></span>
                <span className={"colorName"}>{t("color-wild-2")}</span>
              </div>
            </li>
            <li>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_sandy_brown"}></span>
                <span className={"colorName"}>{t("color-wild-3")}</span>
              </div>
            </li>
            <li>
              <div className={"palletBox"}>
                <span className={"colorPallet ax_skyblue"}></span>
                <span className={"colorName"}>{t("color-wild-4")}</span>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </Layer>
  );
}

const Container = styled(PageContainer)``;
const Layer = styled.div`
  background: var(--line-gr);
  padding: 5rem 2rem;
  .ciTitleBox {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .left {
      width: 100%;
      flex-wrap: wrap;
      flex-grow: 0;
      flex-shrink: 0;
      h2 {
        font-size: 1.5rem;
        font-weight: normal;
      }
      p {
        padding: 2rem 0;
        font-size: 1rem;
        line-height: 1.3rem;
        word-break: keep-all;
        color: var(--txt-body);
      }
    }
    .right {
      width: 100%;
      display: flex;
      flex-grow: 1;
      flex-shrink: 1;
      justify-content: center;
      align-items: center;
    }
  }
  .colorBox {
    //dl...
    margin-top: 3rem;
    h3 {
      font-size: 1.25rem;
      font-weight: normal;
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      list-style: none;
      margin: 2rem 0;
      padding: 0;
      li {
        width: 100%;
        span {
          vertical-align: middle;
        }
      }
    }
    .colorPallet {
      flex: 0 0 auto;
      display: inline-block;
      width: 3.75rem;
      height: 3.75rem;
      border-radius: 100rem;

      &.ax_supernova_red {
        background-color: var(--ax_supernova_red);
      }
      &.ax_space_blue {
        background-color: var(--ax_space_blue);
      }
      &.ax_deep_black {
        background-color: var(--ax_deep_black);
      }
      &.ax_desert_yellow {
        background-color: var(--ax_desert_yellow);
      }
      &.ax_leaf_green {
        background-color: var(--ax_leaf_green);
      }
      &.ax_sandy_brown {
        background-color: var(--ax_sandy_brown);
      }
      &.ax_skyblue {
        background-color: var(--ax_skyblue);
      }
    }
    .colorName {
      font-size: 0.75rem;
      line-height: 1rem;
      word-break: keep-all;
    }
    .palletBox {
      padding: 0.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 1rem;
      //flex-wrap:no-wrap
    }
  }

  ${media.md} {
    padding: 5rem 0;
    .ciTitleBox {
      .left {
        width: 60%;
      }
      .right {
        width: 40%;
      }
    }
    .colorBox.primary {
      ul {
        li {
          width: 33.33%;
        }
      }
    }
    .colorBox.wild {
      ul {
        li {
          width: 50%;
        }
      }
    }
  }
  ${media.lg} {
    .colorBox.primary {
      ul {
        li {
          width: 33.33%;
        }
      }
    }
    .colorBox.wild {
      ul {
        li {
          width: 25%;
        }
      }
    }
  }
`;
