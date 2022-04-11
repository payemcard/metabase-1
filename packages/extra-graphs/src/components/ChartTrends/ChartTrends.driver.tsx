import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ChartTrends, ChartTrendsProps } from './ChartTrends';
import { BaseComponentDriver } from '@payem/testing-base';

export class ChartTrendsDriver extends BaseComponentDriver {
    private props: Partial<ChartTrendsProps> = {};

    constructor() {
        super('ChartTrends');
    }

    when: any = {
        rendered: () => {
            render(<ChartTrends {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ChartTrendsProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        containerClassName: () => {
            return this.container.className;
        },
    };
}
