import type OpenColor from "open-color";
import oc from "open-color";
import { rgba } from "polished";
import React from "react";
import satori from "satori";
import { hash } from "./hash";

const PRETENDARD_MEDIUM_OTF = "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/packages/pretendard/dist/public/static/Pretendard-Medium.otf"

export async function createPlaceholder({ name }: { name: string }) {
  const fontDataResponse = await fetch(PRETENDARD_MEDIUM_OTF);

  const colorNames = Object.keys(oc)
    .filter((k) => k !== "white")
    .filter((k) => k !== "black");
  const colorName = colorNames[hash(name) % colorNames.length];
  const colorValue = oc[colorName as keyof OpenColor][9];

  const firstChar = name[0]?.toUpperCase() ?? "";

  const svgString = await satori(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: rgba(colorValue, 0.25),
      }}
    >
      <div
        style={{
          fontSize: "24px",
          color: colorValue,
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
