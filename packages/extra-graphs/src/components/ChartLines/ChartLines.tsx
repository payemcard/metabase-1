import React from 'react';
import { Container } from './ChartLines.style';

export type ChartLinesProps = {};

export function ChartLines(_props: ChartLinesProps) {
    return (
        <Container className="ChartLines-container" data-testid="ChartLines-container">
            ChartLines
        </Container>
    );
}

export default ChartLines;
