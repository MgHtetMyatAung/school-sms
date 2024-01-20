"use client";
import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

export default function DonutChart({
  series,
  labels,
}: {
  series: any;
  labels: any;
}) {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: [...labels],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    title: {
      text: "Teachers number of each course",
    },
  };
  return (
    <div>
      <Chart options={options} series={series} type="donut" height={200} />
    </div>
  );
}
