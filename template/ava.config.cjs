module.exports = {
  require: ['./test/helpers/ava.setup.js'],
  ignoredByWatcher: ['!**/*.{js,vue}'],
  snapshotDir: './test/snapshot',
  babel: true,
  tap: false,
  verbose: true,
  color: true
}
