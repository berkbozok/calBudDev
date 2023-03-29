import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'
const Pie = dynamic(() => import('@ant-design/plots').then(({ Pie }) => Pie), { ssr: false, });

export default function DemoPie({ proteinIntake, carbIntake, fatIntake }: { proteinIntake: number, carbIntake: number, fatIntake: number }) {
 
  const data = [
    {
      type: 'Protein',
      value: proteinIntake,
    },
    {
      type: 'Carb',
      value: carbIntake,
    },
    {
      type: 'Fat',
      value: fatIntake,
    }
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'AntV\nG2Plot',
      },
    },
  };
  return <Pie {...config} />;
};



