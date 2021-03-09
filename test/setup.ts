import { join } from 'path'
import { mkdist } from 'mkdist'

export default async function compileTemplates () {
  await mkdist({
    srcDir: join(__dirname, '../src/templates'),
    distDir: join(__dirname, '../dist/templates')
  })
}
