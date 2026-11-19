# Arsenal Academy Worlds

An independent, static Arsenal classroom experience. No build, package installation, account or database is required.

## Current live version

Development branch: `codex/arsenal-matchday-cinema`. Current application release: **editorial-7**, approved, deployed and browser-verified. **Start with [HANDOFF.md](HANDOFF.md)** to continue this project; it indexes decisions, testing, content review and remaining checks.

Public website for presenting and sharing: https://ola-hq.github.io/arsenal-academy-worlds/ . No login is needed. The old private review copy is not the classroom website. Editorial-3 was the initial redesign; later releases are recorded in PROJECT_STATUS.md.

The illustrated clubhouse opens a twelve-page editorial journal with locally hosted photography, interactive football positions, leadership reveals, teacher notes, device narration and a classroom display mode. Draft Day generates a permutation of classroom numbers 1–21 and reveals one pick at a time. Captain’s Vault reveals six distinct stories, two per legend. All 20 original physical-card profiles remain available.

## Local preview

Serve this directory over HTTP (opening files directly does not provide the same iframe and origin behavior):

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`. The standalone journal is `legacy.html#slides/1`. Room links use `#draft`, `#scout`, `#cinema` and `#captains`.

## Classroom flow

Open the ViewSonic Journal, use Previous / Next or keyboard left / right, and use Contents to jump to any page. Activity portals enter the relevant room; Return to journal preserves the page. The final page and the academy wordmark return to the illustrated clubhouse. Browser back and forward follow the room and page history.

Classroom view reduces navigation clutter and requests native full screen. If the browser declines, the classroom layout still works and explains how to use the browser’s own full-screen control. Teacher notes are available without a voice service. Device narration depends on the browser and installed voices.

## Student privacy

No names, student photos, student records, logins, analytics, browser storage or form submissions. Classroom state exists only in memory. Reloading or closing the embedded experience clears draft order, player selection, screening checks and badge results. Physical stock and card assignments remain offline. Use student numbers, not names.

All journal imagery is local. Cinema opens official sources externally; it does not load third-party thumbnails or embedded players. Arsenal’s owner-disabled embeds were tested and replaced with direct official-player links. External sites receive normal browser requests and can show ads and recommendations. A teacher must review the exact footage, audio, captions, ads and autoplay before projecting. Screening flags cover only the exact listed video, never a search result.

## GitHub Pages and publication

The existing live site uses GitHub Pages on `main` at the repository root. Major application changes stay on a development branch until the owner approves publication. This project has no custom workflow that publishes development branches. Versioned CSS/JS references and a visible `editorial-7` label help identify old pages. The deployment investigation observed ten-minute HTML caching and found no service worker. After an approved merge, wait for the Pages deployment to succeed, verify the new version label, then test the deployed experience again. A successful commit is not proof of a successful deployment.

See `PROJECT_STATUS.md` for approved decisions, completed work and the remaining design backlog. See `VERIFICATION.md` for the browser checks and limitations. `credits.html` contains photography attribution, licence links and historical sources. Photo files were resized for web delivery; adapted photographic presentations retain their source licences. This fan experience is not affiliated with Arsenal FC.

Current scouting profiles use licensed local player photos and SVG flags, with source credits in credits.html and art/players/sources.json. Newman’s pop-up uses the official school logo and both Three/Four B’s with source links.

Full screen is available in the clubhouse and all activity rooms. Options provides room labels. Background audio and its controls were removed after owner feedback; read-aloud and Cinema remain available. Display support includes a clean-focus fallback when a browser refuses native full screen.

Editorial-7 review: a dated 2026/27 Matchday room, class challenge, eight-film Cinema catalogue with short/highlights/stories filters, per-film watch missions and access notes. Source record: season-sources.json. Update seasonSnapshot in season-content.js after checking the official combined table; never describe this as an auto-updating feed. Quiz points and explanations derive from the snapshot. All new classroom state stays in memory. Source film suitability remains a teacher check. Publication requires owner approval.

Editorial-7 publication approval received: “Publish this update.” The completed Matchday/Cinema review was approved for the existing public classroom website. Consult the exported release report for deployment and public verification results.

The latest free image/video screening and the owner’s scoped Merino trailer approval are recorded in CONTENT_REVIEW.md. Machine-readable browser results are preserved in docs/evidence; docs/present-today.md contains the teacher plan. Other films are not fully cleared.
