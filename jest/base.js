module.exports = {
  rootDir: '../src/',
  testRegex: '.spec.js$',
  testURL: 'http://localhost',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '../jest/baseSetupScript.js',
  coverageDirectory: '../coverage',
  moduleNameMapper: {
    '^.+\\.(css|scss|sass|svg)$': 'identity-obj-proxy',
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
