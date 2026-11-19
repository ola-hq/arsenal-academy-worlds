# Arsenal Academy project handoff

## Approved photo stories and tighter targets

Development branch: codex/arsenal-photo-popups. Release label: editorial-9. The owner explicitly approved this completed patch with “Publish the photo pop-ups.” Publication is authorized; verify Pages deployment and the public site before reporting completion.

Owner requested tighter outlines around the clubhouse buttons and richer pop-ups using photographs from the represented events. Replaced the four small text-only banner dialogs with a photo-led Hall of Champions: four dated photographs, event captions and source credits, clear statistics, a retry-friendly team question, four story tabs and Next story navigation. Existing historical lessons are retained. The 2007/2025 European story uses the actual 2025 final ceremony photo; it does not claim a 2007 photograph.

Banner targets now follow their pennant shapes and correct positions. Presentation screen, scouting, Vault, Cinema, Matchday and Knights targets were aligned to the illustration. Measured target rectangles do not overlap at 1920, 1366 or 390 widths. Added four accessible phone story-entry buttons to supplement the small illustrated banners.

Actual browser verification: all four stories at measured 1920×1080, 1366×768 and 390×844; all photos loaded; dialog stays within viewport with internal vertical scrolling; no checked horizontal overflow; retry/correct feedback and reset; exactly one story tab selected; Escape close and return to originating trigger; complete four-story Next cycle; Journal, Scouting, Vault and Cinema portals use editorial-9 activity URLs; Newman still opens/closes; no captured site errors. The in-app browser declined native fullscreen, and its working focus fallback was observed. Physical ViewSonic remains untested. Evidence: docs/evidence/popup-review-editorial-9.json and docs/screenshots/*editorial-9.jpg.

Photo sources are in art/moments/sources.json and credits.html. The 2004 photo is public domain, the 2019 photo CC BY-SA 4.0 and the 2026 parade photo CC0. The 2025 photo is credited to Arsenal FC via Getty Images from UEFA’s event report; no open licence or third-party reuse permission is claimed. Original rights remain with the photographer/rights holder. No paid image service was purchased. Rejected the obstructed 2026 sample and UEFA’s promotional collage in favor of actual event photographs. Do not describe every image as Creative Commons licensed.

No names, student records, analytics, storage or automatic video/audio were added. The four team questions reset on opening or changing story; they are not student assessments or saved scores.

## Live host script and Cinema cheers

Development branch codex/arsenal-host-script-chants contains the requested teacher script (docs/host-script.html, docs/host-script.docx and editable content in docs/host-script.json), two teacher-led classroom cheers and one official 27-second Emirates Stadium source under Stadium voices. Release label: editorial-8. The owner explicitly approved this completed patch with “Publish the cheers and stadium link.” Published successfully through Pages run 44587600696 (https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44587600696), then checked in the public browser. The clubhouse opens legacy.html?v=editorial-8#cinema; cheers expand, the stadium source URL and teacher-preview note are correct, the review box starts unchecked, local images load and no site errors were captured. The public hosting script opens and Next cue works. Evidence: docs/evidence/editorial-8-public-checks.json and docs/screenshots/cinema-cheers-live-editorial-8.jpg.

All 14 script cue cards, navigation/dropdown, text enlargement and spoken-only toggle were browser-checked. All 14 Word pages were rendered and visually inspected. Cinema was checked at measured 1920×1018, 1366×706 and 390×844; no checked horizontal overflow or broken images, 3/4/3/1/9 collection counts, correct source URL, initially unchecked and reload-cleared review state, no background audio and no captured errors. Script phone width 390 had no horizontal overflow. Evidence: docs/evidence/host-script-chants-review.json and docs/screenshots.

Official stadium source: https://www.youtube.com/watch?v=7AycooCU0-k . Channel and 0:27 duration verified. Available sampled frames show the stadium/pitch/stands/roof/sky. Player reports captions unavailable; no complete independent audio listen. Keep teacher preview required; do not describe it as fully cleared. No paid credits, lyrics reproduction, remote embeds or audio downloads. The script works with the existing live site and its own classroom cheers without this new clip.


Updated 19 November 2026. Start here when continuing the project. The classroom site is live and public at https://ola-hq.github.io/arsenal-academy-worlds/ . Application release editorial-8 is approved, deployed and public-browser-verified, as described above.

## Access and source of truth

- Repository: https://github.com/ola-hq/arsenal-academy-worlds . GitHub Pages serves `main` at the repository root.
- Working development branch: `codex/arsenal-photo-popups` (pending patch); the previous editorial-8 release branch was `codex/arsenal-host-script-chants`.
- Editorial-8 feature commit: `8cd3b9ec2ec7c5c60dda562a5aeacfb43aa5e8dd`; publication approval commit: `2e1c52e92a3c6766e2e1cbe5438642714586ab68`; activity URL cache correction: `b78111fe454c3ce258abe0336da2f6a6c78bbbaa`. Later documentation-only commits retain editorial-8.
- Previous editorial-7 feature commit: `91e8fee5dc03341493e4ec5896fc4d5522d52eac`; approval record: `1ac8b45c2bacfb38677f89e9e82e713b58bd7b20`. Those hashes describe the earlier editorial-7 release.
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

Twelve editorial journal pages; twenty local player portraits and twelve flags; 13 men / 7 women filters; complete 21-number Draft without duplicates; six distinct Vault stories; five team roles; Newman logo/four values; full screen/focus and room labels; Matchday snapshot and quiz retry/completion/reset; nine Cinema links with filters, missions and independent session-only review marks; parent room headings, focus return and phone navigation.

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
