import Color from "color";
import { merge } from "lodash";
import { fNumber } from "../utils/formatNumber";
import { PRIMARY, WARNING } from "./themeColors";

const colors = [
  "#00AB55",
  "#FFE700",
  "#2D99FF",
  "#826AF9",
  "#2CD9C5",
  "#FF6C40",
];

const colorStops = colors.map((color) => {
  return [
    { offset: 0, color: color },
    { offset: 100, color: Color(color).lighten(0.2) },
  ];
});

export const baseApexOptions = {
  colors,
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: "#919EAB",
    fontFamily: "Public Sans, sans-serif",
  },
  states: {
    hover: { filter: { type: "lighten", value: 0.04 } },
    active: { filter: { type: "darken", value: 0.88 } },
  },
  fill: {
    opacity: 1,
    gradient: {
      type: "vertical",
      shadeIntensity: 0,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
  dataLabels: { enabled: false },
  stroke: { width: 3, curve: "smooth", lineCap: "round" },
  grid: { strokeDashArray: 3, borderColor: "rgba(145, 158, 171, 0.24)" },
  xaxis: { axisBorder: { show: false }, axisTicks: { show: false } },
  markers: { size: 0, strokeColors: "#fff" },
  tooltip: { x: { show: false } },
  legend: {
    show: true,
    fontSize: "13",
    position: "left",
    horizontalAlign: "right",
    markers: { radius: 12 },
    fontWeight: 500,
    itemMargin: { horizontal: 12 },
    labels: { colors: "#212B36" },
  },
  plotOptions: {
    bar: { columnWidth: "28%", borderRadius: 4 },
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            offsetY: 8,
            color: "#212B36",
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.5,
          },
          total: {
            show: true,
            label: "Total",
            color: "#637381",
            fontSize: "0.875rem",
            fontWeight: 600,
            lineHeight: 1.5714285714285714,
          },
        },
      },
    },
    radialBar: {
      track: { strokeWidth: "100%", background: "rgba(145, 158, 171, 0.16)" },
      dataLabels: {
        value: {
          offsetY: 8,
          color: "#212B36",
          fontSize: "1.5rem",
          fontWeight: 700,
          lineHeight: 1.5,
        },
        total: {
          show: true,
          label: "Total",
          color: "#637381",
          fontSize: "0.875rem",
          fontWeight: 600,
          lineHeight: 1.5714285714285714,
        },
      },
    },
    radar: {
      polygons: {
        fill: { colors: ["transparent"] },
        strokeColors: "rgba(145, 158, 171, 0.24)",
        connectorColors: "rgba(145, 158, 171, 0.24)",
      },
    },
    polarArea: {
      rings: { strokeColor: "rgba(145, 158, 171, 0.24)" },
      spokes: { connectorColors: "rgba(145, 158, 171, 0.24)" },
    },
  },
  responsive: [
    {
      breakpoint: 600,
      options: { plotOptions: { bar: { columnWidth: "40%" } } },
    },
    {
      breakpoint: 900,
      options: { plotOptions: { bar: { columnWidth: "32%" } } },
    },
  ],
};

export const pieOptions = merge(
  { ...baseApexOptions },
  {
    labels: [
      "Marketing",
      "Sales",
      "R&D",
      "Travel",
      "Administration",
      "Finance",
    ],
    legend: {
      floating: true,
      horizontalAlign: "center",
      position: "left",
    },
    fill: {
      type: "gradient",
      gradient: {
        colorStops,
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
  }
);

export const linesOptions = merge(
  { ...baseApexOptions },
  {
    legend: { position: "left", horizontalAlign: "right" },
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
  }
);

export const barsOptions = merge(
  { ...baseApexOptions },
  {
    legend: { position: "left", horizontalAlign: "right" },
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
  }
);
