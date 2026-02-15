# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use **Bun** as the package manager.

```sh
bun run dev        # start dev server
bun run build      # production build
bun run preview    # preview production build
bun run check      # svelte-kit sync + svelte-check (TypeScript)
bun run lint       # prettier --check + eslint
bun run format     # prettier --write (auto-format)
```

There are no tests.

## Architecture

Single-page SvelteKit portfolio site. There is one route (`src/routes/+page.svelte`) that contains all page content. The layout (`src/routes/+layout.svelte`) only sets the favicon and imports global CSS.

**Design system** — terminal/hacker aesthetic. Custom Tailwind v4 tokens are defined in `src/routes/layout.css`:

- `terminal-bg` / `terminal-surface` — background layers
- `terminal-green` — primary accent (`#00ff41`)
- `terminal-amber` — secondary accent / prompts (`#f0a500`)
- `terminal-muted` — body text
- `terminal-border` — borders/dividers
- Font: Space Mono (monospace)

**Component library** (`src/lib/components/`) — primitive reusable components. All use Svelte 5 `$props()` runes and `Snippet` for children:

- `Card` — base bordered container (`fill`, `padding` props)
- `Window` — `Card` with a filename header bar (wraps `Card`)
- `Accordion` — collapsible section with amber heading text
- `Skill` — inline tech badge with icon + label
- `Link` — external link with an icon
- `Command` — renders a terminal prompt line (`$ <command>`)
- `TableOfContents` — stub component (not yet implemented)

**Icons** — `@iconify/svelte`. Pass iconify icon name strings (e.g. `"mdi:github"`, `"ri:svelte-fill"`).

**Utilities** (`src/lib/util/`) — `age.ts` exports `getAge()` which computes current age from a hardcoded birthdate using `luxon`.

**Projects data** — currently inline in `+page.svelte` (the `src/lib/constants/projects.ts` file is empty).

## Svelte MCP Tools

You have access to the Svelte MCP server with comprehensive Svelte 5 and SvelteKit documentation.

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.
