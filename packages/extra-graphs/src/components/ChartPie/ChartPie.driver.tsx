import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ChartPie, ChartPieProps } from './ChartPie';
import { BaseComponentDriver } from '@payem/testing-base';

export class ChartPieDriver extends BaseComponentDriver {
    private props: Partial<ChartPieProps> = {};

    constructor() {
        super('ChartPie');
    }

    when: any = {
        rendered: () => {
            render(<ChartPie {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ChartPieProps>) => {
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
