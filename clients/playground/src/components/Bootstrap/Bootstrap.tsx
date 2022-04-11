import { useCallback, useMemo, useState } from "react";
import {
  ThemeProvider,
  GraphPie,
  GraphLines,
  ChartPie,
  ChartLines,
  ChartBars,
  ChartTrends,
  Table,
} from "extra-graphs";
import { Content, Row, Item } from "./Bootstrap.style";

export const Bootstrap = (props: any) => {
  return (
    <ThemeProvider>
      <Content>
        <Row>
          <Item>
            <img width="900px" src="/pie.png" />
          </Item>
          <Item>
            <ChartPie />
          </Item>
        </Row>
        <Row>
          <Item>
            <img width="900px" src="/bars.png" />
          </Item>
          <Item>
            <ChartBars />
          </Item>
        </Row>
        <Row>
          <Item>
            <img width="900px" src="/trends.png" />
          </Item>
          <Item>
            <ChartTrends />
          </Item>
        </Row>
        <Row>
          <Item>
            <img width="900px" src="/lines.png" />
          </Item>
          <Item>
            <ChartLines />
          </Item>
        </Row>
        <Row>
          <Item>
            <img width="900px" src="/table.png" />
          </Item>
          <Item>
            <Table />
          </Item>
        </Row>
      </Content>
    </ThemeProvider>
  );
};

export default Bootstrap;
