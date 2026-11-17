# System Directives & Execution Protocol

## 1. Automated Sub-Agent Delegation (Mandatory)
- **Primary Agents (`plan` / `build`):** You are FORBIDDEN from running broad `grep` or `glob` searches across the repository directly. Whenever you need to locate files, trace symbols, or inspect unfamiliar modules, you MUST spawn the `explore` sub-agent via the `task` tool.
- Only call `read` directly when you already have exact file paths.

## 2. Startup Verification & Dirty-Tree Resolution
Before trusting `.context/CURRENT_STATE.md` or modifying any file, execute `git status -s && git log -n 3 --oneline`:
- **Clean working tree:** Proceed from `.context/CURRENT_STATE.md`.
- **Dirty working tree (uncommitted changes exist):** Assume the prior session crashed or aborted mid-task. Run `git diff` to inspect uncommitted edits, reconcile them against `.context/MILESTONES.md`, and either finish/verify them or revert broken partial changes (`git checkout -- <file>`) before starting new work. Never blindly overwrite uncommitted code.

## 3. Static Prefix Cache Lock (Mid-Session Rules)
- `AGENTS.md` and `.context/CONVENTIONS.md` are **STRICTLY READ-ONLY** during active implementation (both are injected into the static system prompt prefix).
- Do NOT edit `.context/CONVENTIONS.md` mid-session when discovering framework quirks or failed approaches; hold all learnings in working memory until **Session Closure** so prefix caching remains intact for the entire session.

## 4. Atomic Scoping & Coupling Rule
- Target 1–3 files per milestone by default.
- **Coupling Exception:** If modifying a shared type, schema, or API contract breaks downstream consumers, update all tightly coupled callers in the same session so the repository never ends a session in a broken build state.

## 5. Strict Verification & Anti-Stub Gate
Before marking any item `[x]` in `.context/MILESTONES.md`, run all applicable checks with zero errors:
1. `npm run typecheck` (if configured in `package.json`)
2. `npm run build`
3. `npm test -- --run` (once tests exist)
- **Zero-Bypass Rule:** You are prohibited from introducing new `as any`, `@ts-ignore`, `@ts-expect-error`, or empty `catch {}` blocks to force a passing build.

## 6. Session Closure Protocol
When completing a milestone or before ending a session, execute in this exact order:
1. **Log Gotchas & Dead Ends:** Append newly discovered framework quirks or rejected approaches (including why they failed) to `.context/CONVENTIONS.md`.
2. **Archive Completed Phases:** Move finished phase blocks from `.context/MILESTONES.md` to `.context/ARCHIVE.md`.
3. **Compress State:** Overwrite `.context/CURRENT_STATE.md` (strictly ≤ 15 lines) using this exact template:
   - `Last Completed:` [Milestone ID + short commit hash]
   - `Active Files:` [Modified file paths]
   - `Next Step:` [Exact next atomic task]
   - `Rejected Approaches:` [1-line summary of what NOT to retry, or None]
   - `Blockers:` [None or exact error]