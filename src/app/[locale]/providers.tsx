"use client";

import type { ReactNode } from "react";
import * as React from "react";
import { useEffect } from "react";
import { I18nProviderClient, useCurrentLocale } from "@/locales/client";
import { Loading } from "@/components/common/Loading";
import { ConfigProvider } from "antd";
import {StoreSpinner} from "@/components/common/StoreSpinner";

type ProviderProps = {
  children: ReactNode;
};

export function Providers({ children }: ProviderProps) {
  const [loaded, setLoaded] = React.useState(false);
  const locale = useCurrentLocale();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded ? (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
        },
      }}
    >
      <I18nProviderClient locale={locale} fallback={<StoreSpinner spinning />}>
        {children}
      </I18nProviderClient>
    </ConfigProvider>
  ) : (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Loading size={"normal"} active={true} message={"Loading contents"} />
    </div>
  );
}
