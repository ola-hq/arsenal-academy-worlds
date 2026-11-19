# Arsenal Academy — verification record

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


## Current record index — 19 November 2026

Application release editorial-7 is live. HANDOFF.md indexes the current state. Machine-readable current-release browser results are retained in docs/evidence; selected actual public/classroom/phone screenshots are in docs/screenshots. CONTENT_REVIEW.md separately records the latest free caption/frame checks and their limits. Historical availability checks below are not full content clearances.

A fresh access audit opened the canonical public URL without sign-in, confirmed the illustrated clubhouse and editorial-7 footer, and captured no site console errors. GitHub main and successful Pages run 44569694478 were independently confirmed. This audit did not repeat the complete earlier interaction suite or test physical classroom hardware.

The completed editorial-3 redesign was publicly deployed with owner approval at commit dc144e756df31f241365ec18f2a9f7771035b93d. Pages run: https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44459442868 . Public Draft produced 21 unique numbers; Vault produced all six stories with two per legend; Cinema and navigation worked. Every journal page was checked locally at classroom, desktop and phone dimensions. The earlier deployment matched main; ten-minute HTML caching, repeated artwork and presentation layout were separate issues. No service worker or broken project asset path was found.

## Editorial-4 classroom edits

The five team roles were exercised and Manager visually inspected; checked text containment and horizontal overflow passed at 1366×768 and 390×844. Cinema now has three choices after removal of the flagged Invincibles external story. Women’s and men’s source URLs are retained. Wenger opens https://www.youtube.com/watch?v=xtM3k5NWUwQ — the verified Premier League channel’s Hall of Fame video, with a player duration of 4:30 observed in Chrome. This is a specific video, not a search or playlist. Availability and duration were checked; this does not establish complete classroom suitability. The teacher-review checkbox starts unchecked.

The current task’s exported report and screenshots contain the final public deployment result and after-deployment checks. Source status alone is not proof that a release has deployed.

## External limits

Physical ViewSonic, school network and speakers are unavailable from this computer. Exact video footage, audio, captions, ads and recommendations require teacher review. External videos remain external official players because embedded playback is owner-restricted. Device narration/fullscreen support varies. Classroom data remains in memory and clears on reload/close. No student records are entered or persisted.

## Editorial-5 checks

All 20 local player selections updated name, portrait and country. The image and flag had nonzero natural dimensions in every selection; exactly one card was selected; no horizontal overflow. Country names remain visible independently of flags. Photo ordering was checked against content.js and all 20 author/licence records are present. Flags were checked for active scripting. Scouting and Newman were visually checked at classroom, desktop and phone widths. On phones, selecting a card brings the passport into view and Back to player cards returns focus to the selected card. Newman includes both the Three B’s and the PBIS fourth B after the owner answered “both.” Its logo and both source URLs are local/explicit links; Escape restores the launch-button focus. The public release must be verified after successful deployment; exported screenshots and report record that final result.

## Editorial-6 (audio superseded by editorial-6b)



- A shared Full screen control covers the clubhouse, journal and activity rooms. It requests native full screen from the top-level page and preserves the mode through room entry and return. Introductory text, quick links, duplicate navigation and footers leave the stage in this mode.
- Native Chrome full-screen entry was verified through a direct native browser click. Chrome showed its full-screen confirmation and an Exit full screen control; the browser frame disappeared. Entering the embedded journal retained the full-screen control. Escape restored the normal view without resetting the journal.
- If a browser refuses native full screen, the uncluttered focus view still works and explains how to use the browser’s own display control. This fallback was also tested.
- Optional Stadium ambience and Calm music are original 32-second stereo audio loops. They contain no recorded chants, speech, commercial songs or student voices. Sound starts off, with no audio file source assigned until it is enabled. Initial volume is 15%, with a 0–50% control and immediate sound-off action.
- Sound stays with the clubhouse while activity frames open and close. It automatically pauses in Cinema and during read-aloud, resumes on return/stop, and pauses while the page is hidden. Volume and mode stay in this page session only.
- Options includes Show room labels so students can discover the interactive places without relying on hover. Phone display controls are compact; pop-up dialogs retain a sound-off control.

## Verification

Actual Chrome browser and native app controls were used. Both audio sources played with advancing media time and a 32-second duration. Changing to calm music and 20% volume was exercised. Cinema and read-aloud each produced a paused media element and Sound paused state; return/Stop reading resumed playback. Sound was turned off after testing.

All twelve journal pages were checked at 1366×768 in normal and clean display modes, and at 1920×1080 in clean mode. Checked visible text stayed in the spread and page controls stayed visible. The embedded cover, trophy, team-role and final Vault pages were checked at desktop size. The 390×844 phone layout, sound menu and compact display bar were visually checked with no horizontal overflow. A collapsed disclosure’s non-visible paragraph was excluded from the visible-text bounds check.

The original draft, player profiles, Vault stories, source links and student privacy model are retained. No analytics, accounts, browser storage or third-party sound requests are added. Original audio sample peaks were below full scale and loop boundaries were softened; objective audio statistics are in art/audio/audio-checks.json.

## Remaining external checks

A physical ViewSonic, school browser/network and speakers still need an on-device rehearsal. Native fullscreen support varies by device, with the clean-view fallback available. Playback behavior was verified; comfortable speaker volume and subjective sound quality need a classroom listen. Exact Cinema footage, ads, captions and audio still need teacher screening. These are the remaining external checks, not unimplemented application features.

## Editorial-6b

Owner feedback rejected the audio atmosphere. Removed the background player, tracks, controls and related integration calls. No background audio is created or fetched. Full screen, room labels, read-aloud and Cinema are retained. Earlier audio checks are historical, not current features. Final public browser checks are recorded in the exported release report.

## Editorial-7 review checks

Measured embedded viewports were 1920×1018, 1366×706 and 390×744 (the activity areas below the shared controls). A temporary local review page set iframe dimensions, and DOM measurements confirmed these sizes. Browser screenshots are real rendered captures; classroom-size captures may be scaled by the review page to fit the desktop. New Matchday/Cinema sections had no checked horizontal/text overflow or broken images. All 12 journal pages passed desktop spread bounds; all 20 scouting portraits/flags loaded; full Draft and Vault journeys completed. Quiz, category filters, exact film links, watch missions, per-film review isolation and reload clearing passed. Parent title follows room changes; Newman logo/values and focus return passed. No captured site console errors.

New short-film players showed 1:01 for Merino and 1:49 for Only In The Land. The producer’s State of Mind Vimeo player exposed a 77-second duration and was playable. Playback was paused after source checks. These are availability/timing checks, not a complete suitability certification. Official current-highlight catalogue pages showed 10:00 and 2:00; the men’s source required sign-in. No account creation or restricted-content bypass was attempted. The full film/source record is season-sources.json.
