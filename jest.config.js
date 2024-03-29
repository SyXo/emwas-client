module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
    'ts',
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)',
  ],
  verbose: true,
  testURL: 'http://localhost/',
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{ts,vue}', '!**/node_modules/**', '!src/main.ts', '!src/router.ts', '!tests/**'],
  coverageReporters: ['json', 'text'],
};
