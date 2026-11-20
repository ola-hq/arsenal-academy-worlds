# Arsenal Academy — current project status

## Linked presenter development editorial 15 — browser review incomplete

20 November 2026. Owner reported that extended-display presentation required repeated cursor travel and advancing the host guide and slides separately. Asked to connect Next on the guide with the classroom visuals. Development branch `codex/arsenal-linked-presenter`; **not published, editorial-14 remains live**. No publication approval requested yet: browser review is unfinished.

Built an opt-in linked host-guide mode: Open classroom screen launches a separate audience window; the existing guide owns the interactive Academy preview and its in-memory draft/Vault state. Next/Previous/jump change the cue and room/page; preview interaction follows the matching notes. Optional Matchday stays optional in the linked sequential flow. All 16 spoken cue sections, lesson data, player media, existing activity scripts, source JSON and Word guide are unchanged. Ordinary Academy use remains independent. Only the active classroom visual fragment is transmitted through same-origin/exact-window postMessage; teacher notes and guide controls are removed, and the audience fragment is sanitized. No names, storage or server writes added.

Eight automated checks passed: source isolation, connection/render acknowledgement, disconnect/recovery, stage reload, guide step behavior, optional Matchday and Vault → Draft → discoveries order. All new JS syntax checks and 41 local asset references passed; zero duplicate IDs/missing assets. Native Chrome observed the guide, interactive preview, and **Connected · Journal page 9 / 12**. Fixed initial rAF background-tab suspension by using a coalescing timer. The Mac locked again before the paired Next test completed. **Do not claim full browser testing, final screenshots, full-screen or linked draft/Vault success.** User unlock request is pending. Evidence: `docs/evidence/linked-presenter-editorial-15.json`; setup/architecture: `docs/linked-presenter.md`.

Next: unlock Mac, finish actual two-window Next/Previous/jump and preview actions, no-notes display check, full draft/Vault mirror and reopen/reload recovery, native fullscreen and desktop/classroom/phone visual QA; correct any issues; save actual screenshots; then request scoped publication approval. Same computer/browser only; no phone remote. External videos open separately. Keep the guide open during a draw; reloading it resets its in-memory activity state. Local preview stopped at handoff; owned local guide/classroom review tabs may remain due to the lock. Preserve the unrelated live classroom window. Current live host guide and standard host kit remain editorial-14.

## Live presentation-day polish editorial 14

Published 20 November 2026 after the owner answered **“Publish the tested polish.”** Reviewed implementation `780622a` and approval `125d53d` are on main and `codex/arsenal-presentation-day-polish`. GitHub Pages run [44780248941](https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44780248941) completed successfully. Earlier pending-review notes below are historical and superseded.

Live site: https://ola-hq.github.io/arsenal-academy-worlds/?v=editorial-14 . The existing host guide at https://ola-hq.github.io/arsenal-academy-worlds/docs/host-script.html remains correct and unchanged. Cinema now has the reviewed warm marquee and velvet/gold framing; OLA HQ and La Ola FC appear on activity-room bands, card paper, draft surround and quiet footer. No lesson, portrait, video, script or activity-logic change.

Actual public browser checks confirmed the new styling and release marker, Merino selection with its correct 1:01 source link, Draft shuffle/reveal/clear, all 24 Scouting entries and the loaded Saka profile, journal entrance and return to clubhouse. No captured browser warning/error entries. Twenty public files, including the new stylesheet and both brand marks, returned 200 and exactly matched the reviewed source. Evidence: `docs/evidence/editorial-14-public-checks.json`; screenshots: `docs/screenshots/showtime-14-live-*.jpg`. The complete rehearsal (all 12 pages, all 21 draft turns, six Vault stories and 24 loaded portraits, desktop/classroom/phone and native Chrome fullscreen) remains in `docs/evidence/showtime-editorial-14.json`.

Publication browser was returned to the starting clubhouse and retained as a useful live-site tab; temporary viewport override reset. Local preview is stopped and fixture removed. Current local host guide/kit remain valid. Only the physical classroom display and school-network/video access require an on-site check; prior media screening and image-rights limits remain. No further changes or publication approvals are pending for this polish.

## Editorial 14 publication approved

20 November 2026. The owner answered **“Publish the tested polish”** to the scoped approval for the warmer Cinema and subtle OLA HQ / La Ola FC framing, with the lesson and host script unchanged. This authorizes reviewed implementation `780622a` for the existing public Academy website. Publication and public verification follow. Earlier awaiting-approval entries below are historical.

## Presentation-day visual review editorial 14 — awaiting approval

20 November 2026. Review branch `codex/arsenal-presentation-day-polish`, based on live baseline 939a11c. **Not published; editorial-13 remains live.** The owner requested a final rehearsal, more Cinema atmosphere and subtle OLA HQ / La Ola FC branding around the interface. New `showtime.css` adds a warm cinema marquee, velvet/navy and gold framing, room bands and quiet footer, and low-opacity crests on card paper and the draft console. The established OLA brand assets are copied unchanged and recorded in `art/ola/sources.json`. Portraits and event artwork remain untouched. Phone posters use a readable single column at narrow widths.

Lesson data, activity logic, media selections and all host-guide formats are byte-identical to the baseline. The short page 9, optional Scouting histories, Vault-before-Draft order, flexible card table, all 24 players, audio-free default and privacy behavior are preserved. HTML changes reduce exactly to decorative additions and the editorial-14 version increment.

Actual browser rehearsal: all 12 journal pages; full 21-number draft with every number once and end/clear states; all six unique Vault stories with two each of Adams, Campbell and Wenger; all 24 selected portraits loaded, men/women counts 16/8; all five Cinema categories and selected Merino watch control; all four championship photos; Newman values; all three Matchday challenge answers. Native Chrome played the existing one-minute Merino trailer and passed true full-screen entry/exit and return to clubhouse. In-app browser focus fallback also passed. Reviewed 1366×768 desktop, 1920×1080 classroom and 390×844 phone layouts. Phone poster crowding was found and corrected. In-app captured warning/error logs were empty; no native DevTools audit claimed.

Evidence: `docs/evidence/showtime-editorial-14.json`; actual `docs/screenshots/showtime-14-*.jpg`. No physical ViewSonic/school-network test or fresh complete video/audio screening. Dated Matchday snapshot and existing rights/review limits remain. Owned browser test tabs/window closed, viewport override reset; temporary review fixture removed and local server stopped before handoff. Next step: owner approval for this visual polish, then deployment and actual public verification. The current live host guide remains valid and unchanged.

## Live focused classroom revision editorial 13

Published 19 November 2026 after the owner answered “Publish the focused revision.” Implementation cfb8dd4 and approval 78ef62c91a45925bf9b6e5ee64f5eb320aafcb21 are on main and codex/arsenal-classroom-focus. Pages run 44667595780 completed successfully: https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44667595780 . Earlier pending-review entries below are historical and superseded.

Live site: https://ola-hq.github.io/arsenal-academy-worlds/?v=editorial-13 . Host guide: https://ola-hq.github.io/arsenal-academy-worlds/docs/host-script.html ; Word copy alongside. Page 9 is again a brief card-choice moment with the collector-desk illustration and one reveal question. Main narration is 71 words, planned for 45–60 seconds. The three complete player histories remain in Scouting; matching optional spoken cues follow Draft Day and students’ choices. The twelve-page journal, all 24 players, the six Vault stories, random draw, flexible physical card table, two cards per student, Cinema and audio-free/privacy preferences are retained.

Actual public native Chrome checks verified the presentation entrance, Contents → page 9, question reveal, full-screen entry/exit, complete expanded composition, Scouting entrance/count 24, all three Saka/Dowman/Salmon history expansions, host-guide page 9 → page 10, and the final post-draft stop with all three stories explicitly IF NEEDED. Actual public screenshot: docs/screenshots/focus-13-live.jpg. Sixteen public files returned 200 and exact tested-source hashes, including both guide formats and retained portraits. Evidence: docs/evidence/editorial-13-public-checks.json. This completes the optional-cue browser check that was not observed at review time. Isolated publication-check window closed; unrelated tabs preserved. Local preview remains stopped.

Current local guide and host kit now match the live release. The presentation-day checklist was reconciled to this same sequence, removing the superseded long page-9 instruction and old Draft-before-Vault order. Fourteen Word pages were pixel-identical to the previous inspected guide; both changed pages were rendered and inspected; total sixteen. Desktop/classroom/phone viewport review evidence remains in docs/evidence/classroom-focus-editorial-13.json. No physical ViewSonic test, fresh console audit or new full Draft/Vault draw was claimed. Existing external-video review and image-rights limits remain. Next useful step is a classroom rehearsal of this established flow, with additions driven by observed need.

## Focused revision publication approved

On 19 November 2026 the owner answered “Publish the focused revision” to the scoped approval covering a brief card-choice page 9, full histories retained in Scouting and optional story cues after Draft Day. Implementation cfb8dd4 is approved for the existing public website after desktop/classroom/phone/full-screen review. Deployment and public verification follow; preceding pending-review notes are historical.

## Classroom focus review editorial 13

19 November 2026. Development branch codex/arsenal-classroom-focus. Not published: editorial-12 remains live. Owner asked whether recent additions had drifted from the original classroom experience. The main structure, educational focus and eleven other journal pages are intact; the specific drift was page 9’s density. Its main spoken cue grew from about 30 words before the history addition to 263 words. This revision uses 71 spoken words, intended for a 45–60 second card-choice conversation.

Page 9 returns to the existing collector-desk illustration, one reveal question and the original Scouting entrance. The three full player histories and sources are kept intact in Scouting. Short read-aloud versions move to the optional post-draft discovery cue, following the students’ chosen players. All 24 player records, all three complete histories, all six Vault stories and the other eleven journal data records exactly match editorial-12. The fair 21-student random draw, two-card plan, flexible physical quantities, audio-free default, Cinema selections and privacy behavior are retained. No new image, video or outside service was added.

Actual public editorial-12 spot checks covered the roles page and Substitute reveal, Cinema transition, page 9, leadership/Adams reveal and Vault entrance. The complete page-9 reflection was visible in the public windowed layout, resolving the previous Mac-lock verification limit. Local editorial-13 checks covered 1366×768, 1920×1080, 390×844, question reveal, full-screen entry/exit, Scouting entrance and Saka history expansion, journal 9→10 and host-guide 9→10. The guide remains 16 pages: fourteen pixel-identical prior pages plus both changed pages rendered and inspected. Optional post-draft cues were checked in source and rendered Word; do not claim their final anchor view was observed in the browser. No new full Draft/Vault run or console audit. Evidence: docs/evidence/classroom-focus-editorial-13.json. Screenshots focus-13-* are local review; focus-audit-live-before.jpg shows the live page before this proposed trim.

Review files: outputs/classroom-focus-review/arsenal-academy-host-script.html and .docx; separate review kit in that folder. Standard current live guide/kit remain editorial-12 until approval. Isolated review Chrome window closed; temporary viewport fixture removed; local server stopped. Remaining: owner approval before publishing this focused trim, then public verification. Preserve the existing image-rights and external-video limitations. Recommendation: finish this narrow pacing correction, then rehearse the established experience rather than add more sections.

## Live player stories editorial 12

Published 19 November 2026 after the owner answered “Publish the player stories.” Implementation 4b6f706 and approval cf786a6511e23264a0810796717f24e73134e995 were deployed by successful Pages run 44664326992. The narrow-window correction c7cf13bbc984e93387e9f689feab835af41b5094 was deployed successfully by run 44665072771: https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44665072771 . Earlier pending-review entries are historical and superseded.

Live: https://ola-hq.github.io/arsenal-academy-worlds/?v=editorial-12-fit . Guide: https://ola-hq.github.io/arsenal-academy-worlds/docs/host-script.html . Editable Word is alongside it. Page 9 now has three photo-led journeys; Saka, Dowman and Salmon passports have expandable sourced histories; matching host cues retain all twelve journal pages and the existing activity flow. No extra player, audio, video or data collection was added. Standard local host guide and host kit now match editorial-12.

Actual public native Chrome checks verified the clubhouse presentation entrance, Contents → page 9, all three selected journey states/content, full-screen Saka story with complete question, 24-player Scouting count, all three new history expansions/source links and host-guide page 9 → 10. Actual public full-screen screenshot: docs/screenshots/journeys-12-live.jpg. Sixteen public files returned 200 and exact reviewed-source hashes, including corrected CSS/cache paths, both guide formats and portraits. Evidence: docs/evidence/editorial-12-public-checks.json.

Public testing found the last question could be obscured in a narrower window. A small responsive correction lets this spread grow below 1251px; the same embedded layout was visually checked locally with the full question visible, then its exact public files were verified. The final public clubhouse reload succeeded, but the Mac locked before the last journal click. Do not claim that final corrected windowed public visual check was completed. Full-screen public screenshot remains representative: this correction applies only to narrower windows. One owned Chrome verification window remains open because lock prevented cleanup; local server stopped. Use Full screen for classroom presentation. No physical ViewSonic test or fresh console audit; earlier external-video and portrait rights limits remain.

## Player stories publication approved

On 19 November 2026 the owner answered “Publish the player stories” to the scoped approval covering Saka, Dowman and Salmon’s photo-led journeys, expandable Scouting histories and matching host cues, following desktop/classroom/phone browser verification. Implementation 4b6f706 is approved for the existing public GitHub Pages website. Publication and public verification follow; earlier pending-review notes are historical.

## Player journeys editorial 12 ready for review

19 November 2026. Development branch codex/arsenal-player-journeys. Not published: editorial-11 remains live. The owner requested meaningful history and growth for the restored Saka, Dowman and Salmon profiles, while preserving the experience’s focus.

Journal page 9 now has three real-photo buttons and one selected academy journey with three historical milestones, an explicitly classroom-created team lesson and a reflection question. Saka: academy, 2018 debut and resilience from the saved 2021 final penalty to scoring in the 2024 England shoot-out. Dowman: under-18 debut at 13, 2025 league debut from the bench, youngest Premier League goalscorer on 14 March 2026. Salmon: joined at nine in 2019, 2025 tour and competitive senior debut that December. No claims that children must match their unusually young debuts. The other eleven journal pages and the 24-player collection remain; the card-table plan, Draft, Vault, Cinema and privacy behavior are retained.

Their Scouting passports have optional From academy to first team expansions with the same milestones and official sources. Page 9 and post-draft host cues match; all twelve teacher notes remain. Historical dates avoid stale “current age” claims. Official source records and access limits are in docs/player-journey-sources.json. Classroom lessons are editorial connections, not attributed player quotes. Existing approved images and credits are reused; no new video, generated image or sound.

Native Chrome checks passed for the changed spread at 1366×768 and 1920×1080, plus a 390×844 phone viewport. Corrected photo framing, gold-on-navy kicker contrast and a cramped phone name label. All three story buttons and Scouting expansions were checked; 24 profiles remain. Guide Next moves page 9 to 10 correctly. Word guide remains 16 pages: fourteen pixel-identical prior pages, both changed pages rendered and visually inspected. Evidence: docs/evidence/player-journeys-editorial-12.json. Actual review screenshots: docs/screenshots/journeys-12-*.jpg. These are local review screenshots, not live-site screenshots.

Remaining: scoped owner publication approval, deploy to main, then verify public files and actual public browser. No physical classroom-device test or fresh console audit. Earlier portrait rights/video review limits remain. Host-guide review files are in outputs/player-journeys-review. Temporary fixture removed and isolated Chrome window closed.

## Live roster update editorial 11

Published 19 November 2026 after the owner answered “Publish this roster update.” Implementation c4cb583 and approval 05fbd41b3898b7e297f3bb071131efe3bf480256 are on main and codex/arsenal-full-roster. GitHub Pages run 44645068765 completed successfully: https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44645068765 . Earlier awaiting-publication entries below are historical and superseded.

Live website: https://ola-hq.github.io/arsenal-academy-worlds/?v=editorial-11 . Guide: https://ola-hq.github.io/arsenal-academy-worlds/docs/host-script.html (Word copy alongside). All 24 classroom profiles are present, including Saka, Dowman, Holmberg and Salmon. Fixed table-card totals are removed; two available cards per student remain. Guide order: journal and Captain’s Vault → Draft Day → optional chosen-player discoveries.

After deployment, actual native Chrome public checks confirmed the editorial-11 clubhouse label, 24-player Scouting count, matching photos and selected passport information for all four restored players, and public host-guide Draft Day → final player-discoveries transition with the last Next button disabled. The isolated review window was closed. Actual public screenshot: docs/screenshots/roster-11-live.jpg. Fifteen public files returned HTTP 200 and exact reviewed-source hashes, including both guide formats and all four new photos; evidence: docs/evidence/editorial-11-public-checks.json. Desktop and classroom layout checks are recorded in the preceding review evidence.

Outstanding: final phone visual screenshot was not completed (owner approved publication with that limit); no fresh console-error audit or physical ViewSonic test. Salmon’s UEFA portrait remains credited but has no confirmed open reuse licence or third-party permission; publication approval is not a copyright licence. Existing external-video audio/review limitations remain. No student names, ownership or card inventory are recorded. No new films or audio were introduced.

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

Development branch codex/arsenal-host-script-chants contains the requested teacher script (docs/host-script.html, docs/host-script.docx and editable content in docs/host-script.json), two teacher-led classroom cheers and one official 27-second Emirates Stadium source under Stadium voices. Release label: editorial-8. The owner explicitly approved this completed patch with “Publish the cheers and stadium link.” Published successfully through Pages run 44587600696 (https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44587600696), then checked in the public browser. The clubhouse opens legacy.html?v=editorial-9#cinema; cheers expand, the stadium source URL and teacher-preview note are correct, the review box starts unchecked, local images load and no site errors were captured. The public hosting script opens and Next cue works. Evidence: docs/evidence/editorial-8-public-checks.json and docs/screenshots/cinema-cheers-live-editorial-8.jpg.

All 14 script cue cards, navigation/dropdown, text enlargement and spoken-only toggle were browser-checked. All 14 Word pages were rendered and visually inspected. Cinema was checked at measured 1920×1018, 1366×706 and 390×844; no checked horizontal overflow or broken images, 3/4/3/1/9 collection counts, correct source URL, initially unchecked and reload-cleared review state, no background audio and no captured errors. Script phone width 390 had no horizontal overflow. Evidence: docs/evidence/host-script-chants-review.json and docs/screenshots.

Official stadium source: https://www.youtube.com/watch?v=7AycooCU0-k . Channel and 0:27 duration verified. Available sampled frames show the stadium/pitch/stands/roof/sky. Player reports captions unavailable; no complete independent audio listen. Keep teacher preview required; do not describe it as fully cleared. No paid credits, lyrics reproduction, remote embeds or audio downloads. The script works with the existing live site and its own classroom cheers without this new clip.


Current release: editorial-9. The owner explicitly approved the completed Matchday, class challenge, Cinema additions and navigation polish with “Publish this update.” Successful deployment and public browser results are recorded in the task’s exported release report.

Public classroom website: https://ola-hq.github.io/arsenal-academy-worlds/?v=editorial-8
Development branch: codex/arsenal-photo-popups.

## Current handoff and content review — 19 November 2026

Start with HANDOFF.md. Current-release browser records and selected actual screenshots now live in docs/evidence and docs/screenshots, alongside the teacher plan in docs/present-today.md. CONTENT_REVIEW.md records free screening of 30 images and the video sources, including the owner-approved brief shirtless scenes in A Champion’s Story. Other films are not fully cleared; no independent complete audio listen was performed. This documentation refresh changes no application behavior.

The canonical public website was opened again during the access audit: clubhouse rendered, editorial-7 footer visible, no sign-in and no captured site console errors. Existing main SHA and the successful Pages release were confirmed through GitHub. Historical sound and access notes below are release-specific; current background audio is removed, and external club-player access varied between Chrome and the in-app browser.

## Completed original scope

The editorial-3 release was approved, published to main and verified on the public website: twelve illustrated journal pages; repaired Draft Day, navigation and six-story Vault; twenty retained profiles; classroom artwork and language cleanup; no student records or persistent classroom data. Pages run 44459442868 succeeded. Full Draft and Vault journeys were repeated publicly. All twelve pages were checked at 1920×1080, 1366×768 and 390×844.

## Latest classroom feedback — editorial-4

- Every player matters now includes Forward, Midfielder, Defender, Goalkeeper and Manager. All five are interactive. Manager explains planning, encouragement and belonging without playing on the pitch; teacher narration includes the same message. No staff category was added.
- Removed the flagged Invincibles illustrated story from Cinema, including its external link. The historical Invincibles lesson remains in the journal.
- Replaced the Wenger trophy-page link with one specific Premier League Hall of Fame video about his legacy, labelled with its verified 4:30 duration. It is a focused profile rather than a playlist or search. Teacher screening remains incomplete until the teacher marks the exact selection.
- Arsenal Women and Arsenal Men selections remain unchanged. Poster artwork is assigned by story rather than card order so removing a selection cannot mismatch imagery.
- Existing privacy behavior and session-only screening marks retained. No new external requests occur before a source is opened.

## Checks

All five roles were exercised at 1366×768 and 390×844; Manager was visually inspected at 1920×1080. Checked lesson containment and horizontal overflow passed. Cinema selection, links, screening state and artwork are checked in the browser. JavaScript syntax and whitespace checks passed. Public deployment and browser release results are recorded in the task’s exported verification report; do not infer publication from a commit alone.

## Remaining external checks

Physical ViewSonic, network, speakers and native device voice rehearsal. Teacher screening of exact videos, audio, captions, ads and recommendations. The 4:30 Wenger video is longer than the suggested two-to-three-minute target; its duration is displayed rather than described as shorter. No replacement Invincibles video has been added: that selection was removed as requested. Further visual feedback can be incorporated as the owner explores the live version.

The private preview is optional and unrelated to the no-login public classroom URL. Do not divert the classroom to a sign-in screen. Future unrelated major changes require fresh approval; these are the owner-requested bounded classroom edits.

The owner answered “Publish these changes” after reviewing the patch summary. This explicitly authorizes publication of editorial-4 to the existing public website. Final deployment and live-browser results are recorded in the exported task report.

## Editorial-5 scouting and Newman corrections

The owner requested country/image corrections and trusted the remaining scoped polish, then asked to finish this out. Reproduced the public scouting bug: selection inserted flags/football into the portrait slot, with no player-photo assets. England and Scotland were inconsistent across grid and passport.

- Added 20 locally served documentary player photographs, with individual author/source/CC licence credits. Both grid cards and the selected passport show the matching player. These are original digital profiles, not scans or inventory of the physical cards.
- Added 12 local SVG country flags with written country labels, including England and Scotland. Preserved the supplied 20-player set, biographies and nationalities.
- Added an explicit Viewing indicator, clear selected-profile status, filter-consistent selection, a phone return-to-cards action and a nonblank failure message if an image ever fails. Card selection no longer rebuilds the entire grid on every tap.
- Newman uses the real school logo and official source links, plus both the Three B’s and PBIS’s Be College Ready at the owner’s explicit request to include both. Activity examples are adapted and labelled. No student photos, feeds or school-site scripts are imported.
- Added a visible Newman Knights entry in the clubhouse, a top close button, heading focus, Escape close and focus return.
- Actual Chrome checks: all 20 portraits/countries selected; correct single selected state; 20/all, 13/men and 7/women filtering; classroom 1920×1080, desktop 1366×768, phone 390×844; no checked text/horizontal overflow; Newman logo and both sources; keyboard close and focus return. Final public release result is recorded in the task’s exported report.

External classroom hardware/sound and exact video screening remain as previously recorded.

The owner explicitly approved the completed editorial-5 patch with “Publish these fixes.” Final public deployment and browser verification are recorded in the exported release report.

## Editorial-6 full-screen and sound review

The owner requested full-screen immersion, optional stadium/music background sound and a final polish pass. Implementation and local browser checks are complete. The owner explicitly approved publication with “Publish full screen and sound.” The successful deployment and post-release public checks are recorded in the task’s exported verification report.

Shared top-level native fullscreen/focus mode; optional original stadium and calm instrumental loops, default off at 15%; session-only volume/mode; automatic Cinema/read-aloud/hidden-page pause; room-label option; compact phone and pop-up controls. Native Chrome full-screen entry/room transition/Escape exit were verified using native UI. Browser playback, mode/volume, automatic pauses and resume were verified. All twelve pages passed desktop normal/clean and classroom-size clean layout checks; key embedded layouts and phone controls passed. Source educational content, student privacy and previous activities are retained. Review evidence: the task outputs fullscreen-sound-review.html and fullscreen-sound-verification.md.

Remaining external checks are the physical ViewSonic, school network/speakers, comfortable audio level and teacher screening of exact Cinema footage.

Editorial-6 publication authorization: “Publish full screen and sound.” This applies to the reviewed full-screen/focus controls, optional original stadium and calm audio, automatic pauses, room labels and associated display polish.

## Editorial-6b audio removal

Removed both background tracks, the audio player, sound controls and audio pause integrations after the owner reported that the loops sounded like ocean/guitar rather than the desired football atmosphere. Full-screen/focus mode, room labels, teacher read-aloud, Cinema and all classroom activities are retained. The previous editorial-6 audio notes above describe the superseded release. Current browser and deployment results are in the exported verification report.

## Editorial-7 Matchday and Cinema review

Owner requested a full polish/interaction audit, current-season performance and a broader set of short football films. Work is on codex/arsenal-matchday-cinema. Publication was explicitly approved with “Publish this update.”

- New Matchday entry and illustrated-room hotspot, with a dated Arsenal Men Premier League 2026/27 snapshot: 1st, 27 points, 10 played, 9 wins, 0 draws, 1 loss. Verified against the official combined table in Chrome on 19 November 2026. This is not an automatic feed; the latest-table link and stale-snapshot notice remain visible. Latest league result in the snapshot: Arsenal 1–0 Hull City.
- Three-question cooperative classroom challenge, encouraging retry, completion message and reset. No names, ranking, tracking or persistence.
- Eight Cinema selections: three short films, two current club highlights pages and the three existing archive/leadership sources. Filters, labelled timings, exact source links, per-film access notes and watch/discussion missions. Archive photos are explicitly identified as poster artwork, not video stills.
- New short selections: Merino documentary trailer (1:01), Only In The Land trailer (1:49), Arsenal State of Mind campaign film (1:17). The latter opens the producer’s page rather than a YouTube page whose title contains the supporter nickname the owner wanted to avoid. It includes music and kit promotion.
- Account/network-restricted Rice/Henry and NBC videos, location-restricted Sky highlights, long adult documentary episodes and unreviewed fan edits are not student Cinema choices. Current club highlights need teacher access checking; the men’s 10:00 page requires adult sign-in. No student account is requested here.
- Parent room heading now follows embedded navigation; phone Cinema has Back to films. All twelve journal pages remain, with an additional Matchday link on the Cinema spread. Full screen/focus, room labels and audio-free behavior are retained.

Browser checks: Matchday/Cinema rendered at measured embedded widths 1920, 1366 and 390 CSS pixels with no checked overflow or broken local images; all 12 journal pages at desktop width; all 20 player portraits/flags with correct single selection; 13/7 filters; complete 21-number draft; six unique Vault stories; Cinema filters/links/posters, isolated review marks and reload clearing; quiz retry/completion/reset; school logo and all four values; heading synchronization and focus return. Source syntax and local asset checks pass. Actual screenshots and check records are exported in the task outputs. Physical classroom rehearsal and exact film/audio screening remain external checks.
