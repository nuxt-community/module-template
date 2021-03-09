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
    'npm_package/templates/(.*)': '<rootDir>/dist/templates/$1',
    npm_package: '<rootDir>/src'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**', '!templates/**']
}
