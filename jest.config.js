module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [ '<rootDir>/test'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testRegex: '/test/.*\\.(test|spec)\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
