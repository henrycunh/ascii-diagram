---
name: ascii-diagram
description: Use when the user asks to visualize a diagram, flowchart, sequence diagram, state machine, class diagram, ER diagram, or chart as ASCII/Unicode art in the terminal. Triggers on requests like "draw a flowchart", "show me a diagram", "ASCII chart", "visualize this architecture".
---

# ASCII Diagram

Render Mermaid diagrams as ASCII/Unicode art in the terminal using `beautiful-mermaid`.

## How to Use

```bash
npx ascii-diagram --no-color -e $'graph TD\n  A[Start] --> B{Decision}\n  B -->|Yes| C[Do it]\n  B -->|No| D[End]'
```

**Important:** Requires multiline Mermaid syntax. Use `$'...\n...'` for newlines — semicolons don't work.

### Options

| Flag | Description |
|------|-------------|
| `-e '<mermaid>'` | Inline diagram (`$'...\n...'` for newlines) |
| `-f <path>` | Read from `.mmd` file |
| `--ascii` | Pure ASCII (`+---+` instead of `┌───┐`) |
| `--no-color` | Strip ANSI colors (always use this) |
| `--px <n>` | Horizontal spacing (default: 5) |
| `--py <n>` | Vertical spacing (default: 5) |

**Always pass `--no-color`** so output renders cleanly in conversation.

### Supported Diagrams

`graph TD/LR/BT/RL`, `flowchart`, `sequenceDiagram`, `stateDiagram-v2`, `classDiagram`, `erDiagram`, `xychart-beta`

### Mermaid Quick Reference

**Nodes:** `A[rect]` `B(rounded)` `C{diamond}` `D([stadium])` `E((circle))`
**Edges:** `-->` solid, `-.->` dotted, `==>` thick, `-->|label|` labeled
**Sequence:** `Alice->>Bob: msg` solid, `Bob-->>Alice: reply` dashed
**State:** `[*] --> Idle`, `Idle --> Running: start`

## Workflow

1. Write valid multiline Mermaid syntax
2. Run with `--no-color -e $'...'`
3. Show output; iterate if needed
