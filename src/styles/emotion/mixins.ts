import React from "react";
import { css } from "@emotion/react";

type FlexDirection = React.CSSProperties["flexDirection"];
type FlexWrap = React.CSSProperties["flexWrap"];
type JustifyContent = React.CSSProperties["justifyContent"];
type AlignItems = React.CSSProperties["alignItems"];

export interface ISMixinFlex {
  direction?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flexWrap?: FlexWrap;
}

export const SMixinFlex = ({
  direction = "row",
  justifyContent = "stretch",
  alignItems = "center",
  flexWrap = "nowrap",
}: ISMixinFlex = {}) => css`
  display: flex;
  flex-wrap: ${flexWrap};
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const SMixinFlexRow = (
  justifyContent: JustifyContent = "stretch",
  alignItems: AlignItems = "center",
  flexWrap: FlexWrap = "nowrap"
) => SMixinFlex({ direction: "row", justifyContent, alignItems, flexWrap });

export const SMixinFlexColumn = (
  justifyContent: JustifyContent = "stretch",
  alignItems: AlignItems = "center",
  flexWrap: FlexWrap = "nowrap"
) => SMixinFlex({ direction: "column", justifyContent, alignItems, flexWrap });

export const SMixinEllipsis = () => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
