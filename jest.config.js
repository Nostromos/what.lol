/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@site/static/(.*)\\.(jpg|jpeg|png|gif|svg|ico)$': '<rootDir>/__mocks__/fileMock.js',
    '^@site/(.*)$': '<rootDir>/$1',
    '^@docusaurus/Link$': '<rootDir>/__mocks__/DocusaurusLink.js',
    '^@theme/Layout$': '<rootDir>/__mocks__/Layout.js',
    '^@docusaurus/(.*)$': '<rootDir>/node_modules/@docusaurus/$1',
    '^@theme/(.*)$': '<rootDir>/node_modules/@docusaurus/theme-classic/src/theme/$1',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|svg|ico)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest', {
      tsconfig: {
        jsx: 'react-jsx',
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
      },
    }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/__tests__/**',
  ],
};