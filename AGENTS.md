# Code Review Guidelines

Review every Pull Request against the criteria below. Post inline comments
only on changed lines. Start with a short summary (verdict + issue count
by severity). Do not repeat the same issue more than once — if a pattern
appears multiple times, mention it once and list the locations.

## Severity levels
- **Blocker**: must be fixed before merge
- **Warning**: should be fixed, but does not block
- **Suggestion**: optional improvement

## 1. Security — Blocker
- Hardcoded secrets, API tokens, passwords, or private keys in source code.
- Sensitive data or tokens printed via `console.log` or returned in responses.
- SQL queries built with string concatenation/interpolation (use parameterized queries).

## 2. TypeScript — Warning
- `any` type in non-test source files (`src/**/*.ts`). Explicit typing required
  on exported functions' parameters and return types.
- Loose equality (`==`, `!=`). Exception: `== null` is allowed when checking
  for both `null` and `undefined` intentionally.

## 3. Out of scope — do NOT comment on
- Formatting, semicolons, import ordering, or naming style.
- `any` or loose patterns inside `*.spec.ts` / `*.test.ts` files.
- Changes in `node_modules`, lockfiles, or generated code.