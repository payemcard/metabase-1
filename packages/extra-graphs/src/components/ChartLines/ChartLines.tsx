import React from "react";
import { Container } from "./ChartLines.style";
import ReactApexChart from "react-apexcharts";

export type ChartLinesProps = {};

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

export function ChartLines(_props: ChartLinesProps) {
  return (
    <Container
      className="ChartLines-container"
      data-testid="ChartLines-container"
    >
      <ReactApexChart
        type="area"
        series={CHART_DATA}
        options={{}}
        height={324}
      />
    </Container>
  );
}

export default ChartLines;
