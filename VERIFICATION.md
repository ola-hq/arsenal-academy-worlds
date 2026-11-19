# Review verification — November 18, 2026 (Pacific)

Base: main commit `9b462ca56ac923b4fe2dc22a503b0e33acd629c7`.
Review branch: `codex/arsenal-editorial-classroom`. Major changes have not been merged or deployed.

## Live-site diagnosis

- The latest GitHub Pages run at the base commit succeeded: https://github.com/ola-hq/arsenal-academy-worlds/actions/runs/44442132085 . Earlier runs included cancellations, followed by two successful deployments.
- Downloaded live `legacy.html` was byte-for-byte identical to the base repository file. The latest delegated Start the Draft and Vault portals already worked when tested live.
- Live HTML returned HTTP 200, `cache-control: max-age=600`, and a last-modified time matching the successful deployment. Ten-minute edge/browser caching can delay visibility, but the inspected response was current.
- No broken project-relative asset path was found. There is no service worker. The current deployment is a simple root static site; the repository contains no custom deployment workflow. Pages administration settings were not changed.
- The old iframe contained the large dashboard hero and a fixed-height presentation, plus navigation below it. This required scrolling and made the magazine feel disconnected from the clubhouse. Twelve pages reused only three illustrations. The redesign removes that stack and gives the journal its own viewport-sized layout.
- Captured console warnings came from a browser extension. No site JavaScript errors were observed in the tested flows.

## Browser verification

Actual Chrome rendering was used, not mocked screenshots. Layout measurements were read from the rendered DOM.

- All twelve pages at **1920×1080**: images loaded, main text/action bounds contained, no horizontal overflow, Previous / Contents / Next controls visible.
- All twelve pages at **1366×768**: same bounds, overflow, text-width and control checks passed.
- All twelve pages at **390×844**: stacked layouts, no horizontal overflow or text-width overflow after correcting the cover headline. Vertical scrolling is intentional on phones.
- Embedded clubhouse entry and close were exercised. The journal’s final Back to clubhouse action closed the parent overlay and restored focus to the launch button.
- Contents navigation, previous/next, left-arrow keyboard navigation, browser back and activity return-to-page behavior were exercised.
- Interactive goalkeeper selection displayed the goalkeeper lesson. Adams’ leadership card expanded to its classroom lesson.
- Draft: shuffled, revealed all **21 unique numbers 1–21**, disabled further reveals and showed completion. Shuffle cannot silently replace an active order; Clear draft enables a new order.
- Vault: all **six unique stories**, exactly **two Adams / two Campbell / two Wenger**, then a completed ceremony. Reveals require continuing between captains.
- Scouting: **20 profiles**, **13 men / 7 women**; both filters worked. Kim Little’s passport displayed the retained country, position, superpower, story and accomplishment.
- Cinema: all four selections updated the official-source URL and selected state. The official men’s compilation opened in a new tab and was observed playing on the verified Arsenal channel. Known owner-disabled embedded players were removed. Clear monitor resets selection and source. No video is marked classroom-cleared by this test.
- Classroom view toggled on and off. Native full screen was declined in the test browser; the on-screen browser-control fallback was verified. A physical ViewSonic display was not available.
- Teacher notes opened. Device narration was invoked and stopped; reliable audible playback could not be established in this browser, so notes remain the dependable fallback. Cancelling speech does not let a stale speech callback overwrite the stopped status.
- JavaScript syntax checks passed for `academy.js`, `clubhouse.js` and `content.js`.

## Remaining limits before classroom use

- These are development-preview checks. The redesigned version has not been verified on the live Pages URL because merging/publishing requires owner approval.
- The actual classroom ViewSonic hardware, its browser, sound output and school network still need an on-device rehearsal.
- Arsenal videos cannot play inline under their current owner restrictions. Cinema intentionally opens official sources instead. Women’s footage opens an exact Arsenal video page; Wenger remains an explicitly labelled official-channel search requiring clip selection. Availability, sign-in prompts, ads, captions and recommendations can change.
- Teacher screening is required for exact footage. Browser/video availability is not a suitability review.
- Physical card stock and student assignments are managed offline. Player profiles describe the supplied card set, not a live roster.
- Classroom state deliberately clears when the frame closes or the page reloads. No student records are persisted.

## Release check after approval

Merge only the approved review branch into `main`. Wait for Pages success at the merge commit. Open the published clubhouse, confirm `Review build: editorial-1`, and repeat the embedded draft, cinema-source and vault journeys. Verify imagery and controls on the classroom display. Do not call the deployment finished based on Git alone.
