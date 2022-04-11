import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ChartBars, ChartBarsProps } from './ChartBars';
import { BaseComponentDriver } from '@payem/testing-base';

export class ChartBarsDriver extends BaseComponentDriver {
    private props: Partial<ChartBarsProps> = {};

    constructor() {
        super('ChartBars');
    }

    when: any = {
        rendered: () => {
            render(<ChartBars {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ChartBarsProps>) => {
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
