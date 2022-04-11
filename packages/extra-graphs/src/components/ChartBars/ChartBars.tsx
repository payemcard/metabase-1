import React from "react";
import { Container } from "./ChartBars.style";
import ReactApexChart from "react-apexcharts";
import * as data from "../../data/data.bars";
import { ChartType } from "../types";
import { transformBarChart } from "../../transformers/transformBarChart";
import { barsOptions } from "../../config/apexOptions";

const CHART_DATA = transformBarChart(data.dataBarsOneSeries);

export type ChartBarsProps = {};

export function ChartBars(_props: ChartBarsProps) {
  return (
    <Container
      className="ChartBars-container"
      data-testid="ChartBars-container"
    >
      <ReactApexChart
        type={ChartType.bar}
        series={CHART_DATA}
        options={barsOptions}
        height={310}
      />
    </Container>
  );
}

export default ChartBars;
