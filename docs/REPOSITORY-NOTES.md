# Repository Notes

A concise guide to this repository, compiled from the supplied analyst reports.

## Source behavior

`src/greeting.js` exports a single named function, `greeting(name)`, which returns the template-string result `` `Hello, ${name}` `` — the string `"Hello, "` followed directly by the `name` argument, with no trailing punctuation or whitespace.

- **Export:** `export function greeting(name)` (src/greeting.js:1) — an ES module named export; there are no other exports or module-level state.
- **Behavior:** returns `` `Hello, ${name}` `` (src/greeting.js:2) — an interpolated greeting string built from the single parameter.
- The file is dependency-free and contains only this function.

## Test conventions

`test/greeting.test.js` is a minimal, dependency-free ESM unit test using Node.js's built-in test runner and assertion library (no third-party frameworks like Jest or Mocha):

- **Line 1:** `import assert from 'node:assert/strict';` — strict assertion mode from Node's core `assert` module.
- **Line 2:** `import test from 'node:test';` — Node's native `node:test` runner (run via `node --test`, consistent with `npm test`).
- **Line 4:** The unit under test is imported directly: `import { greeting } from '../src/greeting.js';`
- **Lines 6–8:** A single test case is declared with `test('greets a name', () => {...})` and asserts with `assert.equal(greeting('Ada'), 'Hello, Ada');` — a simple behavioral assertion that `greeting` concatenates `'Hello, '` before the given name.

Overall style: lightweight ESM (`import`), native Node test runner, strict `assert.equal`, one behavior per test, zero external dependencies.

## Current README coverage

`README.md` (lines 1–3) is a very short, three-line document that documents only two things:

1. **Project title** (line 1): "Flue managed-agent proof"
2. **Purpose statement** (line 3): "A minimal repository used to prove policy-driven onboarding and managed background coding without a Flue deployment."

It contains no setup instructions, usage documentation, API description, or contribution guidance — only the title and the one-sentence purpose statement.
