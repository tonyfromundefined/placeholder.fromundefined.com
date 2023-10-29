import type OpenColor from "open-color";
import oc from "open-color";
import { rgba } from "polished";
import React from "react";
import satori from "satori";
import { hash } from "./hash";

const PRETENDARD_MEDIUM_OTF = "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/packages/pretendard/dist/public/static/Pretendard-Medium.otf"

export async function createPlaceholder({ name, theme }: { name: string, theme: 'light' | 'dark' }) {
  const fontDataResponse = await fetch(PRETENDARD_MEDIUM_OTF);

  const colorNames = Object.keys(oc)
    .filter((k) => k !== "white")
    .filter((k) => k !== "black");
  const colorName = colorNames[hash(name) % colorNames.length];
  const bgColorValue = oc[colorName as keyof OpenColor][5];
  const textColorValue = theme === 'light' ? oc[colorName as keyof OpenColor][9] : oc[colorName as keyof OpenColor][2];

  const firstChar = name[0]?.toUpperCase() ?? "";

  const svgString = await satori(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: rgba(bgColorValue, theme === 'light' ? 0.2 : 0.4),
      }}
    >
      <div
        style={{
          fontSize: "24px",
          color: textColorValue,
        }}
      >
        {firstChar}
      </div>
    </div>,
    {
      width: 48,
      height: 48,
      fonts: [
        {
          data: await fontDataResponse.arrayBuffer(),
          name: "Pretendard",
          style: "normal",
          weight: 400,
        },
      ],
    },
  );

  return svgString;
}
