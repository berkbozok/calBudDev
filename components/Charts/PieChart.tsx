import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Pie = dynamic(() => import("@ant-design/plots").then(({ Pie }) => Pie), {
  ssr: false,
});

export default function DemoPie({
  proteinIntake,
  carbIntake,
  fatIntake,
}: {
  proteinIntake: number;
  carbIntake: number;
  fatIntake: number;
}) {
  const data = [
    {
      type: "Protein",
      value: proteinIntake,
      color: "#8BD3DD",
    },
    {
      type: "Carb",
      value: carbIntake,
      color: "#172C66",
    },
    {
      type: "Fat",
      value: fatIntake,
      color: "#F582AE",
    },
  ];
  const config = {
    legend: undefined,
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    color: ["#8BD3DD", "#172C66", "#F582AE"],
    radius: 1,
    innerRadius: 0.3,
    label: {
      type: "inner",
      offset: "-50%",
      content: ({ percent }: { percent: number }) =>
        `${(percent * 100).toFixed(0)}%`,
      style: {
        textAlign: "center",
        fontSize: 18,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "",
      },
    },
    autoFit: true,
  };
  return <Pie {...config} style={{ width: "200px", height: "200px" }} />;
}
