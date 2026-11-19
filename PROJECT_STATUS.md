# Arsenal Academy — project status

Last updated: November 18, 2026 (Pacific).
Working branch: `codex/arsenal-editorial-classroom`.
Current review build: `editorial-2`.
Publication: not approved; keep major changes off `main`.

## Current quality assessment

The owner considers the visuals approximately halfway to the desired quality. The screenshots demonstrate progress, not final acceptance. Preserve the illustrated clubhouse as the visual reference. The ViewSonic experience should become a premium, immersive football magazine with distinct compositions, rich imagery, readable classroom content and purposeful interactions.

## Approved classroom language

- Use Arsenal / Arsenal FC as the proper club name.
- Use “the North London club,” “our North London home,” and “the red-and-white team” as descriptive alternatives, not invented official nicknames.
- Journal title: **The Arsenal Academy Journal**.
- Cinema heading: **Lights down. Leaders rise.** (editorial wording selected from the owner’s leadership-focused suggestions).
- Avoid Gunners and Gooners in student-facing written copy and narration. Do not introduce the unrelated adult meanings of supporter slang to students.
- Keep “The Invincibles” for the historic unbeaten 2003–04 team.
- Emphasize teamwork, belonging, responsibility, courage, composure and helping others.
- Keep all twelve lesson topics, twenty physical-card player profiles and six distinct captain stories.

## Completed and checked

- Investigated the live Pages deployment; the base live HTML matched main. Deployment succeeded; ten-minute caching and the old presentation layout explained different parts of the visibility concern.
- Created and pushed a separate development branch. Main has not been changed.
- Rebuilt twelve magazine pages with local, credited photography, an interactive team sheet and leadership reveals.
- Exercised all 21 unique draft picks, draft clear/reset, all six unique captain stories, vault reset and activity return-to-page navigation.
- Retained and checked twenty player profiles, including both team filters.
- Replaced owner-blocked video embeds with explicit official-source links. Observed the official men’s compilation playing on YouTube.
- Checked all twelve pages at 1920×1080, 1366×768 and 390×844; corrected the phone cover overflow.
- Kept classroom numbers/results only in memory, without names, records, analytics or browser storage.
- Applied approved written language throughout the interface, fallback clubhouse label, page metadata and narration source in editorial-2.

## Remaining work, in priority order

### 1. Visual refinement — active next pass

- Audit each page against the clubhouse reference; record page-specific gaps rather than declaring the set finished.
- Refine the weakest compositions and improve the balance of football imagery, editorial typography and interactive elements. Reduce repetitive split-page treatments where they feel generic.
- Give Cinema, Draft Day and the captain ceremony the same visual quality as the best journal pages.
- Retain classroom legibility and clear controls while improving visual richness.
- Acceptance: actual updated screenshots at desktop and classroom-display sizes, with content and interaction checks after meaningful layout changes.

### 2. Artwork language and imagery cleanup — still open

- The existing clubhouse bitmap contains “THE GUNNERS” within the artwork. Text replacement in HTML does not remove those baked-in pixels.
- Revise that embedded wording while preserving the clubhouse’s composition and visual quality.
- Review cannon and sword imagery against the owner’s classroom preference. The club crest and current room art include such imagery; the project must not be described as entirely free of it.
- Acceptance: inspect the actual edited artwork and its alignment with every interactive hotspot. Do not cover or silently break the classroom entrances.

### 3. Classroom-device rehearsal — pending access

- Test on the real ViewSonic display, classroom browser, school network and sound output.
- Device narration is optional; written teacher notes remain the fallback. Native full screen was declined in the test browser; classroom view and its visible fallback work.
- Teacher must select and screen exact footage, captions, audio, ads and autoplay. The Wenger entry remains a clearly labelled official-channel search, not a preselected screened clip.
- Confirm the physical-card distribution flow and six-captain ceremony with the actual classroom setup; manage student identities and stock offline.

### 4. Final review and approved release — not authorized yet

- Present the refined experience and screenshots for owner review.
- Obtain explicit approval before merging major changes into main or publishing.
- After approval, verify Pages at the merge commit, check the visible review label and repeat the live embedded draft/Cinema/vault journeys.

## Working rule

Update this file after each meaningful pass. Keep completed work, unresolved issues, verified evidence and release approval separate. Trust to continue development does not replace the owner’s explicit no-publication-without-approval instruction.
