import React from 'react';
import { Container } from './ChartBars.style';

export type ChartBarsProps = {};

export function ChartBars(_props: ChartBarsProps) {
    return (
        <Container className="ChartBars-container" data-testid="ChartBars-container">
            ChartBars
        </Container>
    );
}

export default ChartBars;
