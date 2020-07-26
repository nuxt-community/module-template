import { PackageOptions } from 'siroc'
import copyPlugin from 'rollup-plugin-copy'

const config: PackageOptions = {
  rollup: {
    plugins: [
      copyPlugin({
        targets: [{ src: 'src/templates/*', dest: 'lib/templates' }]
      })
    ]
  }
}

export default config
