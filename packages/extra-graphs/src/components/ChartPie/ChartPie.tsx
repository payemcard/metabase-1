import React from "react";
import { Container } from "./ChartPie.style";
import ReactApexChart from "react-apexcharts";
import { transformLineChart } from "../../transformers/transformLineChart";
import * as data from "../../data/data.pie";
import { ChartType } from "../types";

export type ChartPieProps = {};

const CHART_DATA = transformLineChart(data.dataChartPieSixSections);

export function ChartPie(_props: ChartPieProps) {
  return (
    <Container className="ChartPie-container" data-testid="ChartPie-container">
      <ReactApexChart
        type={ChartType.donut}
        series={CHART_DATA}
        options={{}}
        height={310}
      />
    </Container>
  );
}

export default ChartPie;
