import merge from "lodash/merge";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { BaseOptionChart } from "../utils/chart";
import { Box, CardHeader, TextField } from "@mui/material";
import { useState } from "react";

const CHART_DATA = [
  {
    name: "Total Income",
    data: [10, 41, 35, 151, 49, 62, 69, 91, 48],
  },
  {
    name: "Total Expenses",
    data: [10, 34, 13, 56, 77, 88, 99, 77, 45],
  },
];

export function Graph3() {
  const chartOptions = merge(BaseOptionChart(), {
    legend: { position: "top", horizontalAlign: "right" },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  });

  return (
    <ReactApexChart
      type="area"
      series={CHART_DATA}
      options={chartOptions}
      height={324}
    />
  );
}
