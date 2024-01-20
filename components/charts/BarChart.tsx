"use client";

import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

export default function BarChart({
  seriesdata,
  labels,
}: {
  seriesdata: any;
  labels: any;
}) {
  const options: ApexOptions = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: [...labels],
    },
    title: {
      text: "Students number of each batch",
    },
  };

  const series = [
    {
      name: "Students",
      data: [...seriesdata],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={200} />;
}
