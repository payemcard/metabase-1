import { ChartBarsDriver } from './ChartBars.driver';

describe('ChartBars', () => {
    let driver: ChartBarsDriver;

    beforeAll(() => {
        driver = new ChartBarsDriver();
    });

    it('should render component', () => {
        const containerClassName = driver.given //
            .props({})
            .when.rendered()
            .get.containerClassName();

        expect(containerClassName).toBe('ChartBars-container');
    });
});

describe('ChartBars snapshots', () => {
    let driver: ChartBarsDriver;

    beforeAll(() => {
        driver = new ChartBarsDriver();
    });

    it('should render component', () => {
        expect(driver.when.snapshot()).toMatchSnapshot();
    });
});
