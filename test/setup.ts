import { join } from 'path'
import { mkdist } from 'mkdist'

const path = join(__dirname, '../src/templates')
export default async function compileTemplates () {
  await mkdist({
    srcDir: path,
    distDir: join(__dirname, '../dist/templates')
  })
}
