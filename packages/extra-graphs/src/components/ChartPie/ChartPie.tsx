import React from "react";
import { Container } from "./ChartPie.style";
import ReactApexChart from "react-apexcharts";
import * as data from "../../data/data.pie";
import { ChartType } from "../types";
import { transformPieChart } from "../../transformers/transformPieChart";
import { pieOptions } from "../../config/apexOptions";

export type ChartPieProps = {};

const CHART_DATA = transformPieChart(data.dataChartPieSixSections);

export function ChartPie(_props: ChartPieProps) {
  return (
    <Container className="ChartPie-container" data-testid="ChartPie-container">
      <ReactApexChart
        type={ChartType.donut}
        series={CHART_DATA}
        options={pieOptions}
        height={310}
      />
    </Container>
  );
}

export default ChartPie;
