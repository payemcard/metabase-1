import React from "react";
import merge from "lodash/merge";
import ReactApexChart from "react-apexcharts";
import { useTheme, styled } from "@mui/material/styles";
import { CardHeader } from "@mui/material";
import { fNumber } from "../../utils/formatNumber";
import { BaseOptionChart } from "../../utils/chart";
import { ThemeProvider } from "../../theme";

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled("div")(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(2),
  "& .apexcharts-canvas svg": { height: CHART_HEIGHT },
  "& .apexcharts-canvas svg,.apexcharts-canvas foreignObject": {
    overflow: "visible",
  },
  "& .apexcharts-legend": {
    height: LEGEND_HEIGHT,
    alignContent: "center",
    position: "relative !important" as "relative",
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

const CHART_DATA = [44, 75];

export function GraphPie() {
  const theme = useTheme();

  console.log("base options", JSON.stringify(BaseOptionChart()));

  const chartOptions = merge(BaseOptionChart(), {
    labels: ["Marketing", "Sales"],
    legend: { floating: true, horizontalAlign: "center" },
    fill: {
      type: "gradient",
      gradient: {
        colorStops: [
          [
            {
              offset: 0,
              color: theme.palette.primary.light,
            },
            {
              offset: 100,
              color: theme.palette.primary.main,
            },
          ],
          [
            {
              offset: 0,
              color: theme.palette.warning.light,
            },
            {
              offset: 100,
              color: theme.palette.warning.main,
            },
          ],
        ],
      },
    },
    plotOptions: {
      radialBar: {
        hollow: { size: "68%" },
        dataLabels: {
          value: { offsetY: 16 },
          total: {
            formatter: () => fNumber(2324),
          },
        },
      },
    },
  });

  console.log("JSON.stringify(chartOptions) ->", JSON.stringify(chartOptions));

  return (
    <ThemeProvider>
      <CardHeader title="Spend By Department" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart
          type="radialBar"
          series={CHART_DATA}
          options={chartOptions}
          height={310}
        />
      </ChartWrapperStyle>
    </ThemeProvider>
  );
}
