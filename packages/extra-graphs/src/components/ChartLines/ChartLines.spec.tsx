import { ChartLinesDriver } from './ChartLines.driver';

describe('ChartLines', () => {
    let driver: ChartLinesDriver;

    beforeAll(() => {
        driver = new ChartLinesDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ChartLines-container');
    });
});

describe('ChartLines snapshots', () => {
    let driver: ChartLinesDriver;

    beforeAll(() => {
        driver = new ChartLinesDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
