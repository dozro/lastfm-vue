// jest.config.ts
import type { Config } from '@jest/types';

/** @type {import('jest').Config} */
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  automock: false
};

export default config;
