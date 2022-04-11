import React from 'react';
import { t } from "ttag";
import LineAreaBarChart from "../../components/LineAreaBarChart.jsx";
import {
  GRAPH_DATA_SETTINGS,
  LINE_SETTINGS,
  GRAPH_GOAL_SETTINGS,
  GRAPH_COLORS_SETTINGS,
  GRAPH_AXIS_SETTINGS,
  GRAPH_DISPLAY_VALUES_SETTINGS,
} from "../../lib/settings/graph";
import {ThemeProvider, GraphPie} from 'minimal'

export default class MinimalTrends extends LineAreaBarChart {
  static uiName = t`Pie`;
  static identifier = "minimal_pie";
  static iconName = "pie";
  static noun = t`pie chart`;

  static settings = {
    ...LINE_SETTINGS,
    ...GRAPH_GOAL_SETTINGS,
    ...GRAPH_COLORS_SETTINGS,
    ...GRAPH_AXIS_SETTINGS,
    ...GRAPH_DISPLAY_VALUES_SETTINGS,
    ...GRAPH_DATA_SETTINGS,
  };

  render() {
    return <ThemeProvider>
      <GraphPie />
    </ThemeProvider>
  }
}
