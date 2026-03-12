# ascii-diagram

Render Mermaid diagrams as ASCII/Unicode art in the terminal. Powered by [`beautiful-mermaid`](https://github.com/lukilabs/beautiful-mermaid).

```
┌──────────┐
│          │
│  Start   │
│          │
└─────┬────┘
      │
      ▼
◇──────────◇
│          │
│ Decision ├────────┐
│          │        │
◇─────┬────◇       No
      │             │
     Yes            │
      │             │
      ▼             ▼
┌──────────┐     ┌─────┐
│          │     │     │
│  Action  │     │ End │
│          │     │     │
└──────────┘     └─────┘
```

## Install

```bash
npx skills add henrycunh/ascii-diagram
```

This installs the skill for any supported AI coding agent (Claude Code, Cursor, Codex, Copilot, Windsurf, etc.).

To install globally (all projects):

```bash
npx skills add henrycunh/ascii-diagram -g
```

To target a specific agent:

```bash
npx skills add henrycunh/ascii-diagram -a claude-code
```

After installing, run `npm install` inside the skill directory to fetch dependencies:

```bash
cd ~/.claude/skills/ascii-diagram && npm install
```

## Supported Diagrams

| Type | Header |
|------|--------|
| Flowchart | `graph TD`, `graph LR`, `flowchart TD` |
| Sequence | `sequenceDiagram` |
| State | `stateDiagram-v2` |
| Class | `classDiagram` |
| ER | `erDiagram` |
| XY Chart | `xychart-beta` |

## CLI Usage

```bash
# inline
node cli.mjs --no-color -e $'graph LR\n  A --> B --> C'

# from file
node cli.mjs --no-color -f diagram.mmd

# pipe
cat diagram.mmd | node cli.mjs --no-color

# pure ASCII (no unicode)
node cli.mjs --no-color --ascii -e $'graph LR\n  A --> B'
```

## License

MIT
