"use client";
import { useState } from "react";
import { NaverMap, useMap, useNavermaps } from "react-naver-maps";

interface Props {}

export function MyMap({}: Props) {
  const naverMap = useMap();
  const navermaps = useNavermaps();
  const [latlng, setLatlng] = useState([37.5297133, 126.9225843]);

  return (
    <NaverMap
      center={new navermaps.LatLng(latlng[0], latlng[1])}
      defaultZoom={12}
      zoomControl
      zoomControlOptions={{
        position: navermaps.Position.TOP_RIGHT,
      }}
      mapTypeControl
      onCenterChanged={(center) => {
        // setLatlng([center.lat(), center.lng()]);
      }}
    ></NaverMap>
  );
}
