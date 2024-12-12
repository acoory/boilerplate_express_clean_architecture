export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts', '**/tests/**/*.test.js'],
    clearMocks: true,
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!module-name-to-transform)'],
};
