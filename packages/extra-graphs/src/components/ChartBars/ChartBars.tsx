import React from "react";
import { Container } from "./ChartBars.style";
import ReactApexChart from "react-apexcharts";
import * as data from "../../data/data.lines";

const CHART_DATA = [44, 75];

export type ChartBarsProps = {};

export function ChartBars(_props: ChartBarsProps) {
  return (
    <Container
      className="ChartBars-container"
      data-testid="ChartBars-container"
    >
      <ReactApexChart
        type="bar"
        series={CHART_DATA}
        options={{}}
        height={310}
      />
    </Container>
  );
}

export default ChartBars;
