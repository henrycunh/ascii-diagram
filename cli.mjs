#!/usr/bin/env node

import { renderMermaidASCII } from 'beautiful-mermaid'
import { readFileSync } from 'fs'

const help = `
  ascii-diagram — Mermaid diagrams as ASCII art

  Usage
    $ ascii-diagram -e 'graph LR\\n  A --> B --> C'
    $ ascii-diagram -f diagram.mmd
    $ cat diagram.mmd | ascii-diagram

  Options
    -e, --expr <text>   Diagram as inline string
    -f, --file <path>   Read from file
    --ascii             Pure ASCII (no Unicode box-drawing)
    --no-color          Strip ANSI colors
    --px <n>            Horizontal spacing  (default: 5)
    --py <n>            Vertical spacing    (default: 5)
    -h, --help          Show this help
`.trim()

const args = process.argv.slice(2)
let input = null
const opts = { useAscii: false, paddingX: 5, paddingY: 5, colorMode: 'auto' }

for (let i = 0; i < args.length; i++) {
  switch (args[i]) {
    case '-h': case '--help':    console.log(help); process.exit(0)
    case '-e': case '--expr':    input = args[++i]; break
    case '-f': case '--file':    input = readFileSync(args[++i], 'utf-8'); break
    case '--ascii':              opts.useAscii = true; break
    case '--no-color':           opts.colorMode = 'none'; break
    case '--px':                 opts.paddingX = Number(args[++i]); break
    case '--py':                 opts.paddingY = Number(args[++i]); break
  }
}

if (!input) input = readFileSync('/dev/stdin', 'utf-8')

if (!input?.trim()) {
  console.error('No input. Use -e, -f, or pipe via stdin. Try --help.')
  process.exit(1)
}

try {
  console.log(renderMermaidASCII(input.trim(), opts))
} catch (e) {
  console.error(e.message)
  process.exit(1)
}
