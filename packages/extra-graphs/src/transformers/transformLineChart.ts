export const transformLineChart = (input: any) => {
  const data = input.rows.map((i: any) => i[1]);

  return [
    {
      name: "Total Income",
      data,
    },
  ];
};
