import React from "react";
import { Container } from "./ChartLines.style";
import ReactApexChart from "react-apexcharts";
import { transformLineChart } from "../../transformers/transformLineChart";
import * as data from "../../data/data.lines";
import { ChartType } from "../../components/types";
import { linesOptions } from "../../config/apexOptions";

export type ChartLinesProps = {};

const CHART_DATA = transformLineChart(data.dataLinesOneSeries);

// const CHART_DATA = [
//   {
//     name: "Total Income",
//     data: [10, 41, 35, 151, 49, 62, 69, 91, 48],
//   },
// ];

export function ChartLines(_props: ChartLinesProps) {
  return (
    <Container
      className="ChartLines-container"
      data-testid="ChartLines-container"
    >
      <ReactApexChart
        type={ChartType.area}
        series={CHART_DATA}
        options={linesOptions}
        height={324}
      />
    </Container>
  );
}

export default ChartLines;
