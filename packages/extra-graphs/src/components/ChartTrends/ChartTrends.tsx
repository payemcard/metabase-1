import React from 'react';
import { Container } from './ChartTrends.style';

export type ChartTrendsProps = {};

export function ChartTrends(_props: ChartTrendsProps) {
    return (
        <Container className="ChartTrends-container" data-testid="ChartTrends-container">
            ChartTrends
        </Container>
    );
}

export default ChartTrends;
