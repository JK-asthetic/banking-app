"use client";
import React from "react";
import DonutChart from "react-donut-chart";

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  return (
    <DonutChart
      height={120}
      width={120}
      legend = {false}
      data={[
        {
          label: "Bank 1",
          value: 1200,
        },
        {
          label: "Bank 2",
          value: 2000,
        },
      ]}
      colors={["#0746b6", "#2265d8"]}
    />
  );
};

export default DoughnutChart;
