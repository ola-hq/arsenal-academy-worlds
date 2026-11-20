# Arsenal Academy project handoff

## Roster publication approved

On 19 November 2026 the owner explicitly answered “Publish this roster update” after the scoped review of 24 player profiles, flexible card-table wording and journal → Draft Day → optional player discoveries. The approval disclosed the incomplete final phone screenshot due to the Mac lock and the credited UEFA Salmon portrait with no open reuse licence confirmed. This authorizes editorial-11 publication to the existing public GitHub Pages site. Implementation: c4cb583. Deployment and public verification follow. Earlier pending-approval notes below are review history.

## Full classroom roster and flexible card table awaiting publication

19 November 2026. Development branch `codex/arsenal-full-roster`, review release editorial-11. The public website remains the approved editorial-10 release. Fresh publication approval is required for this patch.

Owner restored the four previously excluded players and no longer wants a fixed 42-card table total. Added Bukayo Saka (England, winger), Max Dowman (England, midfielder), Smilla Holmberg (Sweden, defender/right-back) and Marli Salmon (England, defender) to the existing 20 profiles: 24 total, 16 men and eight women. This is the classroom collection, not the entire current Arsenal squad. Website profile order is not an asserted physical card checklist number. No exact physical copy quantities or student ownership are recorded. The owner may put one or several copies of each card on the table.

Removed the fixed table-card total from the clubhouse, journal, Draft Day and host guide. Two available cards per student and the existing random 21-student order remain. The guide now follows the journal and Vault, then Draft Day, then optional discoveries about students’ chosen players. Journal pages 9 and 10 preview their activities without requiring them immediately. All 12 teacher notes remain included. HTML guide controls understand the two extra activity stops; Word guide has 16 clean cue pages.

Browser verification used an isolated native Chrome window because the in-app browser connection was unavailable. All four restored profiles showed matching photos, names, flags and information; filters showed 24 / 16 / 8; rendered iframe review sizes were 1366×768 and 1920×1080. The 390×844 phone layout rendered and selecting Saka reached the correct profile heading/image in accessibility state, but the saved screenshot was taken during smooth scrolling. The Mac subsequently locked before the final phone screenshot could be repeated. Do not claim a completed final phone visual check or console-error audit. Host guide Next moved page 12 → Draft Day → optional player discoveries, with correct labels and final button state. All 16 Word pages were checked: nine unchanged pages were pixel-identical to the previously inspected render; seven changed/new pages were opened and inspected. JS syntax, all 24 media/name/source alignments, file existence, credit anchors, teacher-note equality and removal of fixed totals passed.

Saka and Dowman photographs: Chensiyuan, CC BY-SA 4.0. Holmberg: Mikael Hervestad, CC BY-SA 4.0. Salmon: official UEFA 2026/27 portrait; no open reuse licence or third-party permission confirmed. Preserve that disclosure; do not call all 24 images openly licensed. Source pages, authors and licences are in art/players/sources.json and credits.html. No image was generated or substituted for a different person; portraits were visually inspected. No new Cinema films or audio were added.

Remaining: final phone visual check when the Mac is unlocked, owner approval, publication, then public verification. One isolated Chrome review window may remain open because the Mac locked before cleanup. The temporary layout fixture is removed before commit. Review evidence: docs/evidence/roster-review-editorial-11.json and docs/screenshots/roster-11-*.jpg. Current script source: docs/host-script.json; reproducible builder: scripts/build-host-script.py.

## Live presentation update editorial 10

Published 19 November 2026 after the owner answered “Publish this presentation update.” Release approval commit d4bd0bd923628f481d69380c7b14ced8a358f652. GitHub Pages run 44620594047 completed successfully: https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44620594047 .

Public website: https://ola-hq.github.io/arsenal-academy-worlds/?v=editorial-10 . Host guide: https://ola-hq.github.io/arsenal-academy-worlds/docs/host-script.html . Editable Word guide is alongside it as host-script.docx. Direct public HTTP checks returned 200 and exact reviewed-source hash matches for index, activity HTML, Academy/clubhouse/content/film scripts, presenter CSS, both guide formats and the Women event photograph. Evidence: docs/evidence/editorial-10-public-checks.json.

Actual visual and interaction checks were completed on the review website before publication: all 12 classroom pages, changed desktop pages, phone roles/leadership/Cinema/script, the complete 21-pick Draft, all six Vault stories and the embedded Women film/return path. Screenshots in docs/screenshots/presenter-10-*.jpg show that tested review version, whose deployed files now match. After an interruption the browser connection became unavailable, so a fresh public visual check could not be performed. Do not describe HTTP checks as a live-browser visual check. Physical classroom device and external-video access/audio still need rehearsal.

This published release supersedes earlier “awaiting approval” entries below. Cinema’s checkbox was intentionally removed at the owner’s request; do not restore it as a regression fix. New Merino highlights are optional: source/playability and five visual samples checked, betting signs observed, captions unavailable and full crowd audio not independently cleared. The owner approved publication with these limits disclosed. North London Forever remains their selected stadium clip. Handoff, source records and guide builder are committed on the development and live branches.

## Publication approved for presentation update

On 19 November 2026 the owner answered “Publish this presentation update” to the scoped approval covering the revised host script, aligned journal cues, Substitute/Merino story, Women film button, expanded leadership and Cinema without the review checkbox. The approval question disclosed that the new optional Merino highlights have unverified full crowd audio and visible stadium betting signs. This authorizes editorial-10 publication to the existing public GitHub Pages website. Implementation through baba90e; deployment and public verification follow. Earlier “awaiting approval” entries below are review history.

## Presentation refinement awaiting publication approval

Updated 19 November 2026. Development branch `codex/arsenal-presenter-polish`, review label `editorial-10`. The public website remains the approved editorial-9 release. Do not publish this new update to main until the owner approves this specific patch.

The host guide now opens with friendly “best club in the world” fan banter, student club suggestions, soccer experience, World Cup and favorite-player questions. Its headings and progress use the actual journal page numbers and titles; setup and optional Matchday no longer shift those numbers. All 12 original journal teacher notes are explicitly included, with fuller read-aloud stories about belonging, cooperation, Wenger, substitutes and the three leadership examples.

Journal changes: clear 26 wins + 12 draws question; a practical coaching scenario; the existing 2025 European celebration photograph becomes a keyboard-accessible Women film button; Substitute joins the five retained roles; expanded Adams, Campbell and Wenger reveals. The Women image selects the exact 1:49 Only In The Land trailer in Cinema, and Return to journal restores page 6. Reused the already-published Arsenal FC via Getty Images photograph with its existing source/rights disclosure; no open licence is claimed.

Cinema: removed the per-selection “I reviewed this exact selection for my class” checkbox, its stored-in-memory marks and screening status language at the owner's explicit request. Films remain external and only open on a click. Access and review details are available in collapsed source notes. Added the official 2:04 Leicester 0–2 Arsenal highlights as Merino: The Super Sub. The selected North London Forever source remains available. No background audio, student data collection or persistent storage was added.

Historical distinction: Arsenal were the first unbeaten Premier League champions; Preston also went unbeaten in the older English top division in 1888/89. Verified the Premier League archive and the completed 2025/26 table (Arsenal had five defeats that season). Merino example is specifically Leicester, 15 February 2025: entered at 69 minutes, scored at 81 and 87. Do not invent a current late-goal total. Sources are recorded in season-sources.json.

Validation: all 12 pages checked at measured 1920×1080; changed journal pages checked at 1366×768; Women film selection, Substitute and expanded leadership checked at 390×844. Corrected expanded Wenger text clipping at desktop height and leadership card clipping on phone. Full 21-pick Draft and six-story Vault journeys passed. Embedded clubhouse journal → Women film → return to page 6 passed with editorial-10 iframe URL. Script Previous/Next, dropdown, spoken-only mode and journal numbering passed; repaired a builder placeholder bug that corrupted PAUSE labels. All 14 Word pages rendered and visually inspected. No captured site errors in the checked sessions. Evidence: docs/evidence/presenter-review-editorial-10.json and docs/screenshots/presenter-10-*.jpg.

The new match highlights source was playable on verified Arsenal YouTube; five visual samples at approximately 0:00, 0:37, 1:02, 1:27 and 1:52 were inspected. Pitch-side betting advertisements appear in match footage. Captions were unavailable; full commentary/crowd audio was not independently cleared. No paid credits were used. The familiar Merino trailer and owner-selected stadium clip remain the main short route. Other earlier video review limitations still apply; removing the checkbox is not a full safety certification.

Remaining before release: owner approval, Pages deployment, and verification of the published update. Physical classroom display, school network and external-player ads/audio need device rehearsal. Existing editorial-9 public verification remains valid for the live release, not evidence that editorial-10 is already published.

The editable guide is docs/host-script.json; generated HTML and DOCX are alongside it. Rebuild with the bundled Python runtime: `scripts/build-host-script.py --output-dir /absolute/output/path`. Use the supplied Word renderer and inspect all pages after content changes. The builder is now tracked so another agent can reproduce the outputs. Documentation stays in this repository and local outputs; no Drive copy was created.

## Live photo stories and tighter targets

Development branch: codex/arsenal-photo-popups. Release label: editorial-9. The owner explicitly approved this completed patch with “Publish the photo pop-ups.” Published through successful Pages run 44594956544 (https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44594956544) and verified on the public website. All four dated photos loaded; the corrected women’s banner measures 71.8% left and 10.7% width with a pennant-shaped target; retry/correct feedback, story navigation and wrapping passed. No captured site errors. Public evidence: docs/evidence/editorial-9-public-checks.json and docs/screenshots/event-popup-live-editorial-9.jpg.

Owner requested tighter outlines around the clubhouse buttons and richer pop-ups using photographs from the represented events. Replaced the four small text-only banner dialogs with a photo-led Hall of Champions: four dated photographs, event captions and source credits, clear statistics, a retry-friendly team question, four story tabs and Next story navigation. Existing historical lessons are retained. The 2007/2025 European story uses the actual 2025 final ceremony photo; it does not claim a 2007 photograph.

Banner targets now follow their pennant shapes and correct positions. Presentation screen, scouting, Vault, Cinema, Matchday and Knights targets were aligned to the illustration. Measured target rectangles do not overlap at 1920, 1366 or 390 widths. Added four accessible phone story-entry buttons to supplement the small illustrated banners.

Actual browser verification: all four stories at measured 1920×1080, 1366×768 and 390×844; all photos loaded; dialog stays within viewport with internal vertical scrolling; no checked horizontal overflow; retry/correct feedback and reset; exactly one story tab selected; Escape close and return to originating trigger; complete four-story Next cycle; Journal, Scouting, Vault and Cinema portals use editorial-9 activity URLs; Newman still opens/closes; no captured site errors. The in-app browser declined native fullscreen, and its working focus fallback was observed. Physical ViewSonic remains untested. Evidence: docs/evidence/popup-review-editorial-9.json and docs/screenshots/*editorial-9.jpg.

Photo sources are in art/moments/sources.json and credits.html. The 2004 photo is public domain, the 2019 photo CC BY-SA 4.0 and the 2026 parade photo CC0. The 2025 photo is credited to Arsenal FC via Getty Images from UEFA’s event report; no open licence or third-party reuse permission is claimed. Original rights remain with the photographer/rights holder. No paid image service was purchased. Rejected the obstructed 2026 sample and UEFA’s promotional collage in favor of actual event photographs. Do not describe every image as Creative Commons licensed.

No names, student records, analytics, storage or automatic video/audio were added. The four team questions reset on opening or changing story; they are not student assessments or saved scores.

## Live host script and Cinema cheers

Development branch codex/arsenal-host-script-chants contains the requested teacher script (docs/host-script.html, docs/host-script.docx and editable content in docs/host-script.json), two teacher-led classroom cheers and one official 27-second Emirates Stadium source under Stadium voices. Release label: editorial-8. The owner explicitly approved this completed patch with “Publish the cheers and stadium link.” Published successfully through Pages run 44587600696 (https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44587600696), then checked in the public browser. The clubhouse opens legacy.html?v=editorial-8#cinema; cheers expand, the stadium source URL and teacher-preview note are correct, the review box starts unchecked, local images load and no site errors were captured. The public hosting script opens and Next cue works. Evidence: docs/evidence/editorial-8-public-checks.json and docs/screenshots/cinema-cheers-live-editorial-8.jpg.

All 14 script cue cards, navigation/dropdown, text enlargement and spoken-only toggle were browser-checked. All 14 Word pages were rendered and visually inspected. Cinema was checked at measured 1920×1018, 1366×706 and 390×844; no checked horizontal overflow or broken images, 3/4/3/1/9 collection counts, correct source URL, initially unchecked and reload-cleared review state, no background audio and no captured errors. Script phone width 390 had no horizontal overflow. Evidence: docs/evidence/host-script-chants-review.json and docs/screenshots.

Official stadium source: https://www.youtube.com/watch?v=7AycooCU0-k . Channel and 0:27 duration verified. Available sampled frames show the stadium/pitch/stands/roof/sky. Player reports captions unavailable; no complete independent audio listen. Keep teacher preview required; do not describe it as fully cleared. No paid credits, lyrics reproduction, remote embeds or audio downloads. The script works with the existing live site and its own classroom cheers without this new clip.


Updated 19 November 2026. Start here when continuing the project. The classroom site is live and public at https://ola-hq.github.io/arsenal-academy-worlds/ . Application release editorial-9 is approved, deployed and public-browser-verified, as described above.

## Access and source of truth

Editorial-9 implementation: 06fca0fd5378d578ae56fef230bc03c1e5968436. Publication approval: c3b33bff0b2d644f774c47769e7b618c383b83c8. Later documentation commits record the live checks without changing the application release.

- Repository: https://github.com/ola-hq/arsenal-academy-worlds . GitHub Pages serves `main` at the repository root.
- Working development branch: `codex/arsenal-photo-popups` (current release); the previous editorial-8 release branch was `codex/arsenal-host-script-chants`.
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
