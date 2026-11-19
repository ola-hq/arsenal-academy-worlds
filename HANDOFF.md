# Arsenal Academy project handoff

Updated 19 November 2026. Start here when continuing the project. The classroom site is live and public at https://ola-hq.github.io/arsenal-academy-worlds/ . Application release editorial-7 was approved, deployed and browser-verified. No feature publication is pending.

## Access and source of truth

- Repository: https://github.com/ola-hq/arsenal-academy-worlds . GitHub Pages serves `main` at the repository root.
- Working development branch: `codex/arsenal-matchday-cinema`.
- Feature commit: `91e8fee5dc03341493e4ec5896fc4d5522d52eac`; approval record: `1ac8b45c2bacfb38677f89e9e82e713b58bd7b20`. Later documentation-only commits retain the editorial-7 application label.
- Successful release deployment: https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44569694478 . Fresh access audit on 19 November: the canonical public URL rendered the illustrated clubhouse, footer showed editorial-7, no sign-in appeared and captured site error log was empty.
- Local repository: `work/arsenal-academy-worlds` within this task workspace. Reports, packages and screenshots are in `outputs` two directories above the repository. Private screening working files are in sibling `work/content-screening`; they are not website assets.
- A new agent needs repository access and its own connected credentials. Credentials are not stored here. Chat history and local output files do not automatically accompany a fresh clone; key decisions and current QA records are tracked in this repository.

## Documentation index

| Record | Purpose |
| --- | --- |
| README.md | Website, local preview and publication model |
| PROJECT_STATUS.md | Release history, changes and owner approvals |
| VERIFICATION.md | Browser checks and limits |
| CONTENT_REVIEW.md | Free screening, scoped approval and presentation pick |
| docs/evidence/*.json | Current-release browser results and screening scope |
| docs/present-today.md | Teacher plan and film review matrix |
| season-sources.json, credits.html, art/players/sources.json | Season, film, image and licence sources |
| docs/screenshots | Selected actual public, classroom and phone captures, portable with a clone |
| Local outputs/screenshots and outputs/matchday-cinema-gallery.html | Full local screenshot gallery |

These records cover implementation, decisions, approvals and verification. They are not a verbatim automatic log of every conversation or tool action. Historical sections describe their named release; this handoff describes current behavior.

## Decisions to preserve

- Classroom wording avoids encouraging Gunners/Gooners or weapon terminology; teaching art uses an A emblem and teamwork wording. External source titles/content can differ.
- Keep Forward, Midfielder, Defender, Goalkeeper and Manager as interactive roles. Manager emphasizes participation, planning and encouragement without playing. No generic Staff category was added.
- Background audio is intentionally removed. Preserve full screen/focus, room labels and device read-aloud.
- Newman includes both Three B’s and PBIS’s Be College Ready with official logo/source links. Do not import student photos or feeds.
- No student names, images, accounts, analytics, storage, rankings or form submissions. Classroom state stays in memory. Draft uses numbers 1–21; physical card inventory/assignments remain offline.
- The earlier shirtless Henry/Invincibles external selection was removed. The owner separately accepted the brief shirtless scenes in the exact 1:01 A Champion’s Story Merino trailer. This exception does not approve other clips.
- Free browser screening only: no paid analysis credits were authorized or used. Do not auto-check teacher review boxes or equate captions/frame samples with full audio clearance.
- Major live changes require explicit owner approval. Recorded approvals cover their specific releases, not unrelated redesigns.

## Implemented and verified

Twelve editorial journal pages; twenty local player portraits and twelve flags; 13 men / 7 women filters; complete 21-number Draft without duplicates; six distinct Vault stories; five team roles; Newman logo/four values; full screen/focus and room labels; Matchday snapshot and quiz retry/completion/reset; eight Cinema links with filters, missions and independent session-only review marks; parent room headings, focus return and phone navigation.

Measured activity layouts: 1920×1018, 1366×706 and 390×744 below shared controls. Earlier journal checks also covered 1920×1080, 1366×768 and 390×844. Classroom screenshots are real browser renders, sometimes scaled to fit the review window. Public checks followed successful deployment. Current evidence is retained in docs/evidence.

## Remaining work and maintenance

1. Physical ViewSonic and school-network rehearsal remain unperformed. Native fullscreen was checked on Mac Chrome; device support varies, with a focus fallback.
2. Matchday is a manual snapshot dated 19 November 2026. Recheck official sources before claiming current standings later. The latest-table link and stale notice remain; no scheduled updater exists.
3. A Champion’s Story is the presentation pick based on available auto-captions, 61 sampled frames and the owner’s visual exception. No independent complete audio listen. Other films remain optional and not fully cleared; external ads/recommendations/access vary.
4. The Women’s archive celebration photo shows a bottle spraying liquid; contents were not verified and no drinking is shown. Uniformed player portraits are an alternative if avoiding it. No replacement was requested or published.
5. Further design feedback can be a new scoped patch. No known core interaction defect remains in the verified release.

## File map and continuation checks

The clubhouse uses index.html and clubhouse.js. The journal/activities use legacy.html, academy.js, academy.css, content.js and player-media.js. Shared display controls use experience.js / experience.css. Matchday and the film catalogue use matchday.js / matchday.css and season-content.js. Confirm the exact code path before editing.

Serve the repository over HTTP as described in README. Perform relevant syntax/asset checks and actual browser checks after changes. Update seasonSnapshot and related dates/results/opponent only after checking official combined standings; record sources in season-sources.json and verify dependent quiz behavior. Update documentation and evidence with each patch. After an approved application release, check Pages success, the public version and changed behavior. Do not divert users to the obsolete private preview or infer deployment from Git success.
