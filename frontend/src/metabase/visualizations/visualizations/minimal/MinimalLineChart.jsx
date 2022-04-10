import React from 'react';
import { t } from "ttag";
import LineAreaBarChart from "../../components/LineAreaBarChart.jsx";
import { lineRenderer, areaRenderer } from "../../lib/LineAreaBarRenderer";

import {
  GRAPH_DATA_SETTINGS,
  LINE_SETTINGS,
  GRAPH_GOAL_SETTINGS,
  GRAPH_COLORS_SETTINGS,
  GRAPH_AXIS_SETTINGS,
  GRAPH_DISPLAY_VALUES_SETTINGS,
} from "../../lib/settings/graph";

export default class MinimalLineChart extends LineAreaBarChart {
  static uiName = t`Line`;
  static identifier = "minimal_bar";
  static iconName = "line";
  static noun = t`line chart`;

  static settings = {
    ...LINE_SETTINGS,
    ...GRAPH_GOAL_SETTINGS,
    ...GRAPH_COLORS_SETTINGS,
    ...GRAPH_AXIS_SETTINGS,
    ...GRAPH_DISPLAY_VALUES_SETTINGS,
    ...GRAPH_DATA_SETTINGS,
  };

  render() {
    console.log('this.props ->', this.props);
    
    return <div>Minimal</div>
  }
}
