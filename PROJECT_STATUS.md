# Arsenal Academy — current project status

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
