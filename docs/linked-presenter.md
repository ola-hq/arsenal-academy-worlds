# Linked presenter guide

Approved, published and verified on the public website on 23 November 2026. Current release is editorial-15. Online guide: https://ola-hq.github.io/arsenal-academy-worlds/docs/host-script.html?v=editorial-15 . See HANDOFF.md and docs/evidence/editorial-15-public-checks.json for release evidence.

## The classroom problem

The first live session used extended displays: notes on the laptop and the Academy on the ViewSonic. The presenter had to advance two pages and move the cursor between displays. Students engaged with the visuals, leadership discussion and physical card draft. The requested improvement is control from the laptop while the audience sees the corresponding visuals.

## Setup

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

## Verification and publication

Chrome and Safari both passed paired navigation and native fullscreen entry/exit. The full Safari rehearsal covered all twelve journal pages, all 21 mirrored draft picks, audience close/reopen and reload without losing the pick, all six Vault reveals and completion, keeping teacher notes off the audience view, Cinema selection, expanded Saka history and the complete Matchday challenge. Ordinary browsing remained independent of the linked session. Actual 1366×768 linked-guide, 1920×1080 classroom-stage and 390×844 standalone-guide layouts were checked in temporary scaled browser fixtures; native laptop and fullscreen windows were inspected too. Eight automated protocol/guide tests passed. Runtime files remain identical to reviewed implementation 6cb39e4.

Actual screenshots and detailed evidence are under docs/screenshots/presenter-15-* and docs/evidence/linked-presenter-editorial-15.json. Temporary fixtures were removed, the preview server stopped and owned review windows closed. The owner approved publication; deployment and actual public two-window/Next/privacy/fullscreen/Draft checks passed, with all 29 public file hashes matching the reviewed release. Physical classroom display and school-network access still require an on-site check. The Word guide remains an independent printable companion; linked control is a web-guide feature.
