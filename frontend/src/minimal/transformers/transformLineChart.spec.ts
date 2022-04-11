import { transformerLineChart } from "./transformLineChart";

describe("Line chart", () => {
  it("one series", () => {
    expect(transformerLineChart()).toEqual(1);
  });
});
