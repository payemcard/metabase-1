import * as datasets from "../data/data.pie";
import { transformPieChart } from "./transformPieChart";

describe("Pie chart", () => {
  it("data: one series", () => {
    expect(transformPieChart(datasets.dataChartPieSixSections)).toEqual([
      1295.51, 158.97, 136.06, 2642.0, 5976.6, 940.11,
    ]);
  });
});
