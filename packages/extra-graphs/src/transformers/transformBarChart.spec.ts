import * as datasets from "../data/data.bars";
import { transformBarChart } from "./transformBarChart";

describe("Bar chart", () => {
  it("data: one series", () => {
    expect(transformBarChart(datasets.dataBarsOneSeries)).toEqual([
      {
        name: "RATING",
        data: [
          1295.5182200311058, 158.97077886392242, 136.0659178113363,
          2642.0018554790117, 5976.603527316442, 940.1196340823326,
        ],
      },
    ]);
  });
});
