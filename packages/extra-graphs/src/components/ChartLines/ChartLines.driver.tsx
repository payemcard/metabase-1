import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ChartLines, ChartLinesProps } from './ChartLines';
import { BaseComponentDriver } from '@payem/testing-base';

export class ChartLinesDriver extends BaseComponentDriver {
    private props: Partial<ChartLinesProps> = {};

    constructor() {
        super('ChartLines');
    }

    when: any = {
        rendered: () => {
            render(<ChartLines {...this.props} />);
            return this;
        },
        click: () => {
            fireEvent.click(this.container);
            return this;
        },
    };

    given: any = {
        props: (props: Partial<ChartLinesProps>) => {
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
