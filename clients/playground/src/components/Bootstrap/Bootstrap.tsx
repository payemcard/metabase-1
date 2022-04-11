import { useCallback, useMemo, useState } from "react";
import { ThemeProvider, GraphPie, GraphLines } from "extra-graphs";
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
            <GraphPie />
          </Item>
        </Row>
        <Row>
          <Item>
            <img width="900px" src="/bars.png" />
          </Item>
          <Item>
            <GraphLines />
          </Item>
        </Row>
        <Row>
          <Item>
            <img width="900px" src="/trends.png" />
          </Item>
          <Item>
            <GraphPie />
          </Item>
        </Row>
        <Row>
          <Item>
            <img width="900px" src="/lines.png" />
          </Item>
          <Item>
            <GraphPie />
          </Item>
        </Row>
        <Row>
          <Item>
            <img width="900px" src="/table.png" />
          </Item>
          <Item>
            <GraphPie />
          </Item>
        </Row>
      </Content>
    </ThemeProvider>
  );
};

export default Bootstrap;
