module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.jsx$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    moduleNameMapper: {
        '@payem/forms': '<rootDir>/packages/web-forms',
        '@payem/tables': '<rootDir>/packages/web-tables',
        '@payem/details': '<rootDir>/packages/web-details',
        '@payem/devtools': '<rootDir>/packages/web-devtools',
        '@payem/ui': '<rootDir>/packages/web-ui/src',
        '@payem/base-ui': '<rootDir>/packages/web-base-ui/src',
        '@payem/testing-base': '<rootDir>/packages/web-testing-base',
        '@payem/hooks': '<rootDir>/packages/hooks',
        '@payem/root-types': '<rootDir>/packages/root-types',
        '@payem/themes': '<rootDir>/packages/web-themes',
    },
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
};
