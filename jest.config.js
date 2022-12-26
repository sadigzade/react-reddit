/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest', // 'ts-jest/presets/js-with-ts' - для jsx
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(scss)': 'identity-obj-proxy',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
