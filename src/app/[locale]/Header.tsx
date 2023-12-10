"use client";

import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { LogoAXSymbol } from "@/components/common/LogoAXSymbol";
import LangSelector from "@/components/common/LangSelector";
import { PageContainer } from "@/styles/Layouts";
import { Button, Drawer, Menu, Progress, Space } from "antd";
import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
  useScopedI18n,
} from "@/locales/client";
import { IconMenu } from "@/components/common/IconMenu";
import { mediaMax } from "@/styles/media";
import { ScrollIndicator } from "@/components/common/ScrollIndicator";
import { useAppStore } from "@/store/useAppStore";
import { useRouter } from "next/navigation";

interface Props {}

export function Header({}: Props) {
  const t = useScopedI18n("menu");
  const tt = useI18n();
  const cl = useCurrentLocale(); // 현재 언어
  const changeLocale = useChangeLocale(); // 언어 변경하기
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [scrollPercent, setScrollPercent] = React.useState(0);
  const headerWrapRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const visualHeight = useAppStore((state) => state.visualHeight);
  const router = useRouter();

  const items = [
    {
      key: "axisj",
      label: t("axisj"),
      onClick: () => {
        router.push(`/${cl}#AXISJ`);
      },
    },
    {
      key: "service",
      label: t("service"),
      onClick: () => {
        router.push(`/${cl}#SERVICE`);
      },
    },
    {
      key: "solution",
      label: t("solution"),
      onClick: () => {
        router.push(`/${cl}#AXFRAME`);
      },
    },
    {
      key: "contact",
      label: t("contact"),
      onClick: () => {
        router.push(`/${cl}#CONTACT`);
      },
    },
    {
      key: "blog",
      label: t("blog"),
      onClick: () => {
        router.push("/blog");
      },
    },
  ];

  const handleScroll = useCallback(() => {
    const headerWarpHeight = headerWrapRef.current?.clientHeight;
    const heightGap = visualHeight - headerWarpHeight;
    setScroll(window.scrollY > heightGap);
    setScrollPercent(
      (window.scrollY /
        (window.document.body.clientHeight - window.innerHeight)) *
        100
    );
  }, [visualHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Layer className={scroll ? "scrolled" : ""} ref={headerWrapRef}>
      <ScrollIndicator percent={scrollPercent} />

      <Container>
        <div className={"gnbWrapper"}>
          <div className={"left"}>
            <Link href={`/${cl}#HOME`}>
              <LogoAXSymbol className={"logo"} />
            </Link>
          </div>
          <div className={"center"}>
            <Menu mode="horizontal" items={items} />
          </div>
          <div className={"right show-sm"}>
            <LangSelector size={"1.5rem"} />
          </div>
          <div className={"right show-xs"}>
            <IconMenu
              size={"1.5rem"}
              onClick={() => {
                setIsOpen(true);
              }}
            />
          </div>
        </div>
      </Container>

      <Drawer
        title="AXISJ"
        placement="right"
        onClose={() => {
          setIsOpen(false);
        }}
        closable={false}
        open={isOpen}
        styles={{
          body: {
            padding: 10,
          },
        }}
        extra={
          <Space>
            <Button type="link" onClick={() => {}} className={"menuButton"}>
              {/*<IconMenuClose width={24} height={24} fill={`${colors.ax_text_black}`} />*/}
            </Button>
          </Space>
        }
      >
        <MobileMenuWrap>
          <Menu
            mode="vertical"
            className={"mobile-menu"}
            items={[
              ...items,
              {
                type: "group", // Must have
                label: t("group.lang"),
              },
              {
                label: `한국어`,
                key: "ko",
                onClick: () => {
                  changeLocale("ko");
                },
              },
              {
                label: `English`,
                key: "en",
                onClick: () => {
                  changeLocale("en");
                },
              },
            ]}
          />
        </MobileMenuWrap>
      </Drawer>
    </Layer>
  );
}

const Container = styled(PageContainer)``;

const Layer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  -webkit-backdrop-filter: blur(0.2rem);
  backdrop-filter: blur(0.2rem);
  transition: all 0.2s ease-out;

  &.scrolled {
    background: rgba(255, 255, 255, 0.9);
    .gnbWrapper {
      .logo {
        svg {
          path {
            fill: var(--ax_text_black);
          }
        }
      }
    }
  }

  .gnbWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 5.5rem;
    ${mediaMax.md} {
      height: 3rem;
    }

    .logo {
      width: 2rem;
      height: 2rem;
      cursor: pointer;

      ${mediaMax.md} {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .left {
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      ${mediaMax.md} {
        padding: 0 1rem;
      }
    }
    .right {
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      ${mediaMax.md} {
        padding: 0 1rem;
      }
    }
    .center {
      flex-grow: 1;
      flex-shrink: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      ${mediaMax.md} {
        .ant-menu {
          display: none;
        }
      }
    }

    .show-xs {
      display: none;
      ${mediaMax.md} {
        display: flex;
      }
    }
    .show-sm {
      display: flex;
      ${mediaMax.md} {
        display: none;
      }
    }
  }

  //ANTD Override....
  .ant-menu {
    //ul...
    font-family: "Gmarket Sans", "NotoSansKR", "sans-serif";
    flex-grow: 1;
    flex-shrink: 1;
    align-items: center;
    justify-content: center;
    background: transparent;
    border-bottom: none;
    &.ant-menu-horizontal {
      line-height: 2rem;
    }
    .ant-menu-item {
      //li...
      color: var(--ax_deep_black);
      font-size: 1rem;
    }
    .ant-menu-item:hover,
    .ant-menu-item-selected,
    .ant-menu-item-active {
      color: var(--ax_deep_black);
      &:after {
        border-bottom-color: var(--ax_deep_black);
      }
    }
    .ant-menu-title-content {
    }
  }
`;

const MobileMenuWrap = styled.div`
  .ant-menu {
    border: 0 none !important;
  }
  .ant-menu-item {
    margin: 4px 0;
  }
`;
