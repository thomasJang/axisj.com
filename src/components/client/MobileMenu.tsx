"use client";
import { IconMenu } from "@/components/client/common/IconMenu";
import { useRouter } from "@/i18n/routing";
import styled from "@emotion/styled";
import { Drawer, Menu } from "antd";
import { useTranslations } from "next-intl";
import * as React from "react";
import { useState } from "react";

interface Props {}

export function MobileMenu({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const router = useRouter();

  const items = [
    {
      key: "axisj",
      label: t("router.axisj"),
      onClick: () => {
        router.push(`/#AXISJ`);
      },
    },
    {
      key: "service",
      label: t("router.service"),
      onClick: () => {
        router.push(`/#SERVICE`);
      },
    },
    {
      key: "solution",
      label: t("router.solution"),
      onClick: () => {
        router.push(`/#AXFRAME`);
      },
    },
    {
      key: "contact",
      label: t("router.contact"),
      onClick: () => {
        router.push(`/#CONTACT`);
      },
    },
    {
      key: "blog",
      label: t("router.blog.title"),
      onClick: () => {
        router.push(`/blog`);
      },
    },
  ];

  return (
    <div className={"hideLg"}>
      <IconMenu
        size={"1.5rem"}
        onClick={() => {
          setIsOpen(true);
        }}
      />

      <Drawer
        title='AXISJ.com'
        placement='right'
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
          <Menu mode='vertical' className={"mobile-menu"} items={[...items]} onClick={() => setIsOpen(false)} />
        </MobileMenuWrap>
      </Drawer>
    </div>
  );
}

const Div = styled.div``;

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
