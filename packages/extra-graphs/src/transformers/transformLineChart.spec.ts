import * as datasets from "../data/data.chart";
import { transformerLineChart, sum } from "./transformLineChart";

describe("Line chart", () => {
  it("one series", () => {
    expect(transformerLineChart(datasets.simpleChart)).toEqual([]);
  });
});
