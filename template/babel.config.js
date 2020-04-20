module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          esmodules: true
        }
      }
    ]
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true
            }
          }
        ]
      ],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./'],
            alias: {
              '@': './',
              '~': './'
            }
          }
        ]
      ],
      ignore: ['ava.config.cjs']
    }
  }
}
