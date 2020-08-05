module.exports = {
  transform: {
    '\\.(js|ts)$': [
      'babel-jest',
      {
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        plugins: ['@babel/plugin-transform-runtime']
      }
    ]
  },
  moduleNameMapper: {
    npm_package: '<rootDir>/src/module.ts'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**', '!templates/**']
}
