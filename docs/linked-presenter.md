# Linked presenter guide — development review

Not live or fully browser-verified. Current live release remains editorial-14. See HANDOFF.md and docs/evidence/linked-presenter-editorial-15.json before publishing.

## The classroom problem

The first live session used extended displays: notes on the laptop and the Academy on the ViewSonic. The presenter had to advance two pages and move the cursor between displays. Students engaged with the visuals, leadership discussion and physical card draft. The requested improvement is control from the laptop while the audience sees the corresponding visuals.

## Intended setup

1. Open the online host guide in the same browser/profile on the presentation computer.
2. Select Open classroom screen. If the browser blocks the popup, allow it for this site and try again. If it opens as a tab, detach that tab into a separate window.
3. Move that classroom window to the ViewSonic once and choose Full screen there. The laptop keeps the guide and its interactive preview.
4. Use Next stop & screen, Previous stop & screen or the cue selector. Notes and classroom visuals follow the same page. Next from page 8 skips optional Matchday; select Matchday explicitly when wanted.
5. Use the preview for role reveals, questions, player selection, Draft Day and the Vault. The classroom is a display-only copy; no teacher notes are sent there.
6. Keep the guide open during activities. Reopen a closed classroom window from the same guide to resume. Reloading the guide resets the activity state; it is intentionally not stored.

This does not pair separate phones/tablets. It needs two windows on the same computer/browser. Official film sites still open separately. True full screen needs a click in the classroom window; a focus-view fallback is available if the browser blocks it.

## Implementation

- The existing host guide remains the source for all spoken cues. Its builder adds the optional presenter enhancement. `--html-only` updates the web guide while retaining the unchanged Word document.
- presenter-link.js owns the canonical interactive legacy.html preview and a reference to its classroom popup. The guide’s existing controls retain cue order and reading/print functions.
- presenter-bridge.js opts in only for an embedded preview with presenter=control. It copies the active rendered Academy view after changes, removing teacher notes, narration and journal controls. Coalescing uses a short timer, because rAF pauses in background tabs.
- classroom.js accepts messages only from its opener at the exact origin, acknowledges an actual stage render, keeps the last visual on disconnect and resends it after stage reload. The popup has its own fullscreen control.
- classroom-stage.js accepts only its parent, sanitizes the visual fragment and presents it without interaction or teacher controls. Existing CSS and local photos render at the classroom window’s own size.
- The existing Academy logic is unchanged. A second randomized draft is never used for the classroom view: it displays the canonical preview’s exact revealed numbers. Reopening the display does not reset the canonical preview.
- No persistent browser storage, student records, external sync service or backend was added.

## Remaining verification

The resumed 23 November Safari review passed guide Next/Previous/jump, all twelve preview-to-guide pages, all 21 exact draft turns, reopening/reloading the display without losing the pick, all six Vault stories and completion, native fullscreen and teacher-note privacy. The classroom fullscreen screenshot is saved. Remaining items are in HANDOFF.md and the resumedReview evidence: Chrome paired navigation, final laptop image/layout checks, expanded history/Matchday spot checks and the ordinary-site regression. The Mac locked again during that review. Eight automated protocol/guide tests pass. Publish only after the remaining review, any corrections and owner approval.
