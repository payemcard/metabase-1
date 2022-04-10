import {
  registerVisualization,
  setDefaultVisualization,
} from "metabase/visualizations";

import Scalar from "./visualizations/basic/Scalar";
import SmartScalar from "./visualizations/basic/SmartScalar";
import Progress from "./visualizations/basic/Progress";
import Table from "./visualizations/basic/Table";
import Text from "./visualizations/basic/Text";
import LineChart from "./visualizations/basic/LineChart";
import BarChart from "./visualizations/basic/BarChart";
import WaterfallChart from "./visualizations/basic/WaterfallChart";
import RowChart from "./visualizations/basic/RowChart";
import PieChart from "./visualizations/basic/PieChart";
import AreaChart from "./visualizations/basic/AreaChart";
import ComboChart from "./visualizations/basic/ComboChart";
import MapViz from "./visualizations/basic/Map";
import ScatterPlot from "./visualizations/basic/ScatterPlot";
import Funnel from "./visualizations/basic/Funnel";
import Gauge from "./visualizations/basic/Gauge";
import ObjectDetail from "./visualizations/basic/ObjectDetail";
import PivotTable from "./visualizations/basic/PivotTable";
import MinimalLineChart from "./visualizations/minimal/MinimalLineChart";
import MinimalPieChart from "./visualizations/minimal/MinimalPieChart";

export default function() {
  // basic
  registerVisualization(Scalar);
  registerVisualization(SmartScalar);
  registerVisualization(Progress);
  registerVisualization(Gauge);
  registerVisualization(Table);
  registerVisualization(Text);
  registerVisualization(LineChart);
  registerVisualization(AreaChart);
  registerVisualization(BarChart);
  registerVisualization(WaterfallChart);
  registerVisualization(ComboChart);
  registerVisualization(RowChart);
  registerVisualization(ScatterPlot);
  registerVisualization(PieChart);
  registerVisualization(MapViz);
  registerVisualization(Funnel);
  registerVisualization(ObjectDetail);
  registerVisualization(PivotTable);

  // minimal
  registerVisualization(MinimalLineChart);
  registerVisualization(MinimalPieChart);

  setDefaultVisualization(Table);
}
