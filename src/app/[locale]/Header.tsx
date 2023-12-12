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
import { usePathname, useRouter } from "next/navigation";
import { ArrowRightOutlined } from "@ant-design/icons";

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
  const pathname = usePathname();

  const items = [
    {
      key: "axisj",
      label: t("axisj"),
    },
    {
      key: "service",
      label: t("service"),
    },
    {
      key: "solution",
      label: t("solution"),
    },
    {
      key: "contact",
      label: t("contact"),
    },
    {
      key: "blog",
      label: t("blog"),
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

  const onClickMenu = useCallback(
    (info: any) => {
      switch (info.key) {
        case "axisj": {
          router.push(`/${cl}#AXISJ`);
          break;
        }
        case "service": {
          router.push(`/${cl}#SERVICE`);
          break;
        }
        case "solution": {
          router.push(`/${cl}#AXFRAME`);
          break;
        }
        case "contact": {
          router.push(`/${cl}#CONTACT`);
          break;
        }
        case "blog": {
          router.push("/blog");
          break;
        }
        case "ko": {
          changeLocale("ko");
          break;
        }
        case "en": {
          changeLocale("en");
          break;
        }
      }
      setIsOpen(false);
    },
    [changeLocale, cl, router]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Layer
        className={
          scroll || pathname.replace(`/${cl}`, "") !== "" ? "scrolled" : ""
        }
        ref={headerWrapRef}
      >
        <ScrollIndicator percent={scrollPercent} />

        <Container>
          <div className={"gnbWrapper"}>
            <div className={"left"}>
              <Link href={`/${cl}#HOME`}>
                <LogoAXSymbol className={"logo"} />
              </Link>
            </div>
            <div className={"center"}>
              <Menu
                mode="horizontal"
                selectedKeys={[]}
                items={items}
                onClick={onClickMenu}
              />
            </div>
            <div className={"right show-sm"}>
              <LangSelector size={"1.5rem"} />
            </div>
            <div className={"right show-xs"}>
              <Link href={`/blog`}>{t("blog")}</Link>
              <LangSelector size={"1.5rem"} />
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
          title="AXISJ.com"
          placement="right"
          width={260}
          onClose={() => {
            setIsOpen(false);
          }}
          closable={true}
          open={isOpen}
          styles={{
            body: {
              padding: 10,
            },
          }}
        >
          <MobileMenuWrap>
            <Menu
              mode="vertical"
              className={"mobile-menu"}
              items={[...items]}
              onClick={onClickMenu}
            />
          </MobileMenuWrap>
        </Drawer>
      </Layer>
      <Dummy />
    </>
  );
}

const Container = styled(PageContainer)``;
const Dummy = styled.div`
  height: 5.5rem;
  ${mediaMax.md} {
    height: 3rem;
    padding-top: 3px;
  }
`;
const Layer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  transition: all 0.2s ease-out;

  &.scrolled {
    -webkit-backdrop-filter: blur(0.2rem);
    backdrop-filter: blur(0.2rem);
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid var(--border-color);
    .gnbWrapper {
      .logo {
        svg {
          path {
            fill: var(--black);
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
      padding-top: 3px;
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
      svg {
        display: block;
      }
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
      gap: 1.2rem;
      svg {
        display: block;
      }
      a {
        font-weight: 700;
      }
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
    font-family: var(--font-display);
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
    font-weight: 700;
  }
  .ant-menu-item-selected,
  .ant-menu-item-active {
    background: var(--ax_gray_1);
  }
`;
