import * as datasets from "../data/data.bars";
import { transformBarChart } from "./transformBarChart";

describe("Bar chart", () => {
  it("data: one series", () => {
    expect(transformBarChart(datasets.dataBarsOneSeries)).toEqual([
      {
        name: "RATING",
        data: [1295.51, 158.97, 136.06, 2642.0, 5976.6, 940.11],
      },
    ]);
  });
});
