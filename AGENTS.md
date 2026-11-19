# System Directives & Execution Protocol

## 1. Automated Sub-Agent Delegation & PRD Discipline
- **Repo-Wide Discovery (`plan` / `build`):** You are FORBIDDEN from running multi-file or repository-wide `grep` or `glob` searches directly. Whenever you need to locate files, trace cross-file symbols, or inspect unfamiliar modules, spawn the `explore` sub-agent via the `task` tool.
- **Direct Access:** Only call `read` (or a targeted `grep`) directly on exact, already-known file paths.
- **PRD Discipline:** Never read `docs/PRD.md` in full during `build` sessions. Use `explore` to extract only the specific section relevant to the active milestone when exact acceptance criteria are not already provided in the prompt.

## 2. Startup Verification & Safe Dirty-Tree Rule
- **`Build` Mode Only:** Before trusting `.context/CURRENT_STATE.md` or modifying any file, run `git status -s && git log -n 3 --oneline`.
  - **Clean working tree:** Proceed from `.context/CURRENT_STATE.md`.
  - **Dirty working tree:** Run `git diff --stat` (and `git diff` if needed). **NEVER** run `git checkout --`, `git reset`, or `git clean` autonomously. Stop and report the uncommitted changes in `Blockers / Decisions Needed` unless the user explicitly tells you to continue on top of them.
- **`Plan` Mode:** `bash` is disabled by design. Skip git commands and rely on `.context/CURRENT_STATE.md` and `explore`.

## 3. Static Prefix Cache Lock (Mid-Session Rules)
- `AGENTS.md` and `.context/CONVENTIONS.md` are **STRICTLY READ-ONLY** during active implementation (both are auto-injected into the static system prompt prefix).
- Hold newly discovered gotchas or failed approaches in working memory until **Session Closure** (unless the user explicitly asks to edit those files).

## 4. Atomic Scoping & Multi-File Rule
- **Default Target:** Aim for 1–3 files per milestone (one cohesive responsibility) so every commit stays small, auditable, and easy to roll back.
- **Cohesive Slice & Coupling Exception:** Expanding to 4–6 files is permitted when either:
  1. Modifying a shared type, schema, store, or API contract breaks downstream callers (update all tightly coupled consumers in the same session so the build stays green), OR
  2. A single minimal vertical slice (e.g., component + styles + hook + page wiring) cannot be split without leaving dead or unwired code.
- **Hard Split Trigger:** Never attempt >6 files or span unrelated domains in one session—stop and recommend splitting into sequential buildable milestones.

## 5. Strict Verification & Anti-Stub Gate
Before marking any item `[x]` in `.context/MILESTONES.md`, run all applicable one-shot checks with zero errors:
1. `npm run typecheck` (if configured in `package.json`)
2. `npm run build`
3. `npm test -- --run` (once tests exist)
- **No Hanging Commands:** Never launch dev servers (`npm run dev`, `vite`) or watch-mode test runners in `bash`.
- **Zero-Bypass & Anti-Stub Rule:** You are prohibited from introducing new `as any`, `@ts-ignore`, `@ts-expect-error`, empty `catch {}` blocks, `.skip`/deleted tests, or `// TODO` placeholder stubs to force a passing build.

## 6. Session Closure Protocol
Execute **only** after all Section 5 checks pass (or when the user explicitly requests session closure). Never run `git commit` unless explicitly instructed.
1. **Log Durable Gotchas Only:** Append *only* genuinely new, non-obvious framework quirks or rejected approaches (with why they failed) to `.context/CONVENTIONS.md`. Skip if nothing new was learned.
2. **Archive Completed Phases:** Move finished phase blocks from `.context/MILESTONES.md` to `.context/ARCHIVE.md`.
3. **Compress State:** Overwrite `.context/CURRENT_STATE.md` (strictly <= 15 lines) using this exact template:
   - `Last Completed:` [Milestone ID] (verified, pending commit)
   - `Active Files:` [Modified file paths]
   - `Next Step:` [Exact next atomic task]
   - `Rejected Approaches:` [1-line summary of what NOT to retry, or None]
   - `Blockers:` [None or exact error]

## 7. Mediator Handoff Format
End every completed task or audit with a compact block titled `### HANDOFF REPORT` containing only:
- **Mode & Task:** [Plan/Build + Milestone ID]
- **Files Touched:** [List of paths, or "Read-Only Audit"]
- **Verification:** [Exact pass/fail for typecheck, build, tests]
- **Key Findings / Diff Summary:** [Max 5 bullet points + any assumptions made]
- **Blockers / Decisions Needed:** [None or exact error/question]

- **Zero Narration:** Do not print step-by-step explanations or code walkthroughs in your final message—output **only** the `### HANDOFF REPORT` block.