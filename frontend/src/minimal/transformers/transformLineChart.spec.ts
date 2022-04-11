import { transformerLineChart } from "./transformLineChart";

describe("Line chart", () => {
  it("only data", () => {
    expect(transformerLineChart()).toEqual(1);
  });
});
