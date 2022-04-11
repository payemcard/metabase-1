export const transformLineChart = (input: any) => {
  const data = input.rows.map((i: any) => i[1]);

  const xAxisName = input.cols[0].name;

  return [
    {
      name: xAxisName,
      data,
    },
  ];
};
