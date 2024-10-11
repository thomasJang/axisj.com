"use client";

import { getLayoutHeader } from "@/utils/dom/getContainer";
import { useCallback, useEffect, useState } from "react";
import styles from "./OnScrollHeader.module.scss";

interface Props {}
export function OnScrollHeader({}: Props) {
  const [scroll, setScroll] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = useCallback(() => {
    const visualHeight = 300;
    const headerWarpHeight = getLayoutHeader()?.clientHeight ?? 0;

    const heightGap = visualHeight - headerWarpHeight;
    console.debug("visualHeight", heightGap, window.scrollY);
    setScroll(window.scrollY > heightGap);
    setScrollPercent((window.scrollY / (window.document.body.clientHeight - window.innerHeight)) * 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (scroll) {
      getLayoutHeader()?.classList.add("scroll");
    } else {
      getLayoutHeader()?.classList.remove("scroll");
    }
  }, [scroll]);

  return (
    <div className={styles.container}>
      <div className={styles.bar} style={{ width: `${scrollPercent}%` }} />
    </div>
  );
}
