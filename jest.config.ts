export default {
  roots: ['<rootDir>/test'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
};
