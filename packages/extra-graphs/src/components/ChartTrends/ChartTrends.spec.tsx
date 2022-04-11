import { ChartTrendsDriver } from './ChartTrends.driver';

describe('ChartTrends', () => {
    let driver: ChartTrendsDriver;

    beforeAll(() => {
        driver = new ChartTrendsDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ChartTrends-container');
    });
});

describe('ChartTrends snapshots', () => {
    let driver: ChartTrendsDriver;

    beforeAll(() => {
        driver = new ChartTrendsDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
