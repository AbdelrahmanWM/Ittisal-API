export default {
    transform: {
      '^.+\\.ts?$': 'babel-jest',
    },
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.test.ts'],
  };
  