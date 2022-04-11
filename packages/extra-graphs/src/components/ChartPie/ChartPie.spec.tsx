import { ChartPieDriver } from './ChartPie.driver';

describe('ChartPie', () => {
    let driver: ChartPieDriver;

    beforeAll(() => {
        driver = new ChartPieDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ChartPie-container');
    });
});

describe('ChartPie snapshots', () => {
    let driver: ChartPieDriver;

    beforeAll(() => {
        driver = new ChartPieDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
