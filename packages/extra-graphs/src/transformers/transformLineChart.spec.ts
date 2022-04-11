import { transformerLineChart, sum } from "./transformLineChart";

const a = 10;
const b = 5;

describe("Line chart", () => {
  it("one series", () => {
    expect(sum(a, b)).toEqual(15);
  });
});
