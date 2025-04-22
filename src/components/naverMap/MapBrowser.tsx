"use client";

import { Container, NavermapsProvider } from "react-naver-maps";
import { MyMap } from "./MyMap";
import "./naver.map.scss";

interface Props {}

export function MapBrowser({}: Props) {
  return (
    <NavermapsProvider
      ncpClientId='9obqs3x5sb'
      // or finClientId, govClientId
    >
      <Container
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <MyMap />
      </Container>
    </NavermapsProvider>
  );
}
