import { t } from "ttag";
import BaseOptionChart from "../utils/chart/BaseOptionChart";
// import Iconify from "../Iconify";
import merge from "lodash/merge";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, Stack, Typography } from "@mui/material";
import { fCurrency, fPercent } from "../utils/formatNumber";
import { styled, useTheme } from "@mui/material/styles";

type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error";

const RootStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  boxShadow: "none",
  position: "relative",
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  width: 48,
  height: 48,
  display: "flex",
  borderRadius: "50%",
  position: "absolute",
  alignItems: "center",
  top: theme.spacing(3),
  right: theme.spacing(3),
  justifyContent: "center",
}));

type Props = {
  title: string;
  total: number;
  percent: number;
  chartData: number[];
  color?: ColorSchema;
  icon: string;
};

function Graph2Wrapper(props: any) {
  const { title, total, icon, percent, color = "primary", chartData } = props;

  const theme = useTheme();

  const chartOptions = merge(BaseOptionChart(), {
    colors: [(theme.palette as any)[color].main],
    chart: { sparkline: { enabled: true } },
    xaxis: { labels: { show: false } },
    yaxis: { labels: { show: false } },
    stroke: { width: 4 },
    legend: { show: false },
    grid: { show: false },
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName: string) => fCurrency(seriesName),
        title: {
          formatter: () => "",
        },
      },
    },
    fill: { gradient: { opacityFrom: 0.56, opacityTo: 0.56 } },
  });

  return (
    <RootStyle
      sx={{
        color: theme => (theme as any).palette[color].darker,
        bgcolor: theme => (theme as any).palette[color].lighter,
      }}
    >
      <IconWrapperStyle
        sx={{
          color: theme => (theme as any).palette[color].lighter,
          bgcolor: theme => (theme as any).palette[color].dark,
        }}
      >
        {/* <Iconify icon={icon} width={24} height={24} /> */}
      </IconWrapperStyle>

      <Stack spacing={1} sx={{ p: 3 }}>
        <Typography sx={{ typography: "subtitle2" }}>{title}</Typography>
        <Typography sx={{ typography: "h3" }}>{fCurrency(total)}</Typography>
        <Stack direction="row" alignItems="center" flexWrap="wrap">
          {/* <Iconify
            width={20}
            height={20}
            icon={
              percent >= 0 ? "eva:trending-up-fill" : "eva:trending-down-fill"
            }
          /> */}
          <Typography variant="subtitle2" component="span" sx={{ ml: 0.5 }}>
            {percent > 0 && "+"}
            {fPercent(percent)}
          </Typography>
          <Typography variant="body2" component="span" sx={{ opacity: 0.72 }}>
            &nbsp;than last month
          </Typography>
        </Stack>
      </Stack>

      <ReactApexChart
        type="area"
        series={[{ data: chartData }]}
        options={chartOptions}
        height={120}
      />
    </RootStyle>
  );
}

export class Graph2 extends React.Component<any, any> {
  static uiName = t`Line`;
  static identifier = "line";
  static iconName = "line";
  static noun = t`line chart`;

  render() {
    return <Graph2Wrapper />;
  }
}
