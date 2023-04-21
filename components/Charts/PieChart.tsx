import React from "react";
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
  const totalIntake = proteinIntake + carbIntake + fatIntake;
  const data = [
    {
      type: "Protein",
      value: Math.ceil((proteinIntake / totalIntake) * 100),
      color: "#8BD3DD",
    },
    {
      type: "Carb",
      value: Math.ceil((carbIntake / totalIntake) * 100),
      color: "#172C66",
    },
    {
      type: "Fat",
      value: Math.ceil((fatIntake / totalIntake) * 100),
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
      content: "{value}",
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
