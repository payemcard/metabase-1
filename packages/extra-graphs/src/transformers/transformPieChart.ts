export const transformPieChart = (input: any) => {
  return input.rows.map((i: any) => i[1]);
};
