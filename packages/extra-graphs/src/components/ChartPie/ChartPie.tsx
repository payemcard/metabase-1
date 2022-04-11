import React from "react";
import { Container } from "./ChartPie.style";
import ReactApexChart from "react-apexcharts";

export type ChartPieProps = {};

const CHART_DATA = [44, 75];

export function ChartPie(_props: ChartPieProps) {
  return (
    <Container className="ChartPie-container" data-testid="ChartPie-container">
      <ReactApexChart
        type="radialBar"
        series={CHART_DATA}
        options={{}}
        height={310}
      />
    </Container>
  );
}

export default ChartPie;
