# Arsenal Academy — project status

Updated November 18, 2026 (Pacific). Current build: **editorial-3**.

## Website locations

- Updated interactive private review: https://arsenal-academy-classroom-review.ola-hq.chatgpt.site
- Existing public site: https://ola-hq.github.io/arsenal-academy-worlds/
- Development branch: `codex/arsenal-editorial-classroom`.
- Public release: the owner explicitly approved making this version live on November 18, 2026. Publish the current completed pass to GitHub main and verify the public Pages deployment. The private Site is optional and is not required for the classroom URL.

## Original request — implementation completed for review

- Investigated Pages deployments, exact deployed HTML, project-relative assets, cache headers and browser errors. The base live HTML matched main and the latest deployment succeeded. HTML caching was ten minutes; presentation layout and repeated flat artwork were separate visual problems.
- Rebuilt all twelve classroom pages into an editorial journal with local football photography, richer academy artwork, distinct compositions, accessible controls and interactive moments.
- Replaced the flat trophy/Cinema placeholders, added a collector’s desk composition, a stadium panorama reading band, textured unbeaten record, embossed leadership reveals and focused draft/captain rooms.
- Redesigned Draft Day around the live student number. Re-tested all 21 unique numbers and the completed/clear states.
- Redesigned the captain ceremony around one legend at a time. Re-tested six unique stories, two per legend, completion and reset.
- Improved top-level Journal navigation so it returns to the page you left. Contents, previous/next, keyboard navigation and embedded clubhouse return remain working.
- Preserved all twelve lesson topics, all twenty player profiles and all six captain stories. Scouting keeps the chosen passport beside the cards on desktop and uses stacked layouts on phones.
- Cinema has four specific official sources. Replaced the open-ended Wenger search with a specific official FA Cup celebrations video page. Owner-disabled embeds open official players instead of displaying a broken player.
- Classroom privacy remains unchanged: no student names/photos/records, no analytics/browser storage or third-party video requests before choosing an external link. Draft, profiles, screening marks and ceremony results stay in page memory.

## Approved classroom language and imagery — implemented

- The Arsenal Academy Journal.
- “Lights down. Leaders rise.”
- “Our North London home,” Arsenal / Arsenal FC and red-and-white football descriptions.
- Avoided nicknames removed from interface, metadata and narration source.
- Clubhouse bitmap ribbon now says “TEAMWORK • NORTH LONDON • 1886.” Cannon motifs in that original illustration were replaced with footballs or an adapted letter-A emblem. Entrance positions were preserved and checked.
- Sword emoji removed from the Newman Knights lesson. Its respectful/responsible/safe content remains.
- Official documentary photographs and external club videos can still contain original club crests. Generated classroom illustrations are identified as illustrations and do not claim official affiliation.

## Verification completed

- All twelve pages rendered and measured at 1920×1080 and 1366×768: loaded imagery, visible page controls, no checked text/action clipping or horizontal overflow.
- All twelve at 390×844: no horizontal/text overflow; vertical scrolling is intentional.
- Embedded Draft and Vault full journeys; Journal return to the original page; twenty player profiles and filters; all four Cinema sources; no site console errors observed in tested flows.
- Actual screenshots refreshed. Script syntax and local document paths checked.
- Separate owner-only review site published through Sites; it does not change the GitHub Pages site. Owner sign-in may be required before viewing.

## Remaining external checks and decisions

1. Owner review of the revised visual experience. The previous version was judged halfway there; this is the completed second implementation pass, not assumed owner acceptance.
2. Actual ViewSonic hardware, school-network and sound-output rehearsal. That hardware is not accessible from this computer. Classroom view works; native full screen/voices depend on the device. Teacher notes remain available.
3. Teacher review of exact footage, audio, captions, ads and autoplay. Site availability is not a suitability review. No clips are automatically marked screened.
4. Public release is now approved. Wait for Pages success and verify the released embedded journeys before reporting completion. The final deployment result is recorded in the task’s exported verification report.

## Continuation

Use this file and `VERIFICATION.md` to preserve scope. Update the existing private Site, not a new duplicate: its manifest is in the task workspace at `work/arsenal-private-review/.openai/hosting.json`. Keep the private Site owner-only. The owner’s explicit “make it live” approval authorizes the current public release; use fresh review for future unrelated major changes.
