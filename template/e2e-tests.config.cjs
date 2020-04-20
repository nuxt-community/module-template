const baseConfig = require('./ava.config.cjs')

module.exports = {
  ...baseConfig,
  files: ['./test/e2e/**/*']
}
