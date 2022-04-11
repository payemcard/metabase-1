import * as datasets from "../data/data.lines";
import { transformLineChart } from "./transformLineChart";

describe("Line chart", () => {
  it("data: one series", () => {
    expect(transformLineChart(datasets.dataLinesOneSeries)).toEqual([
      {
        name: "RATING",
        data: [1295.51, 158.97, 136.06, 2642.0, 5976.6, 940.11],
      },
    ]);
  });
});
