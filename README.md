# Vikrant Neb — portfolio

Rebuild of [vikrantneb.com](https://www.vikrantneb.com). Currently ships the **loader, hero, book, podcast and Writing sections**, and Vikrant's **articles** as pages of
their own:

- The loader draws Vikrant's signature mid-screen, then flies it up into the navigation bar as the logo while the
  page fades in.
- The hero is an interactive WebGL particle portrait, centred as on the current site, with the headline beside it.
- The book section: a 3D hardcover of _Execution Under Pressure_ turns, opens on its printed first page, and the
  camera dives into the page.
- The podcast section, _Execution at Scale_, arrives on the page the camera dives into. The title and the latest
  episode, open with its video, come first, with a 3D bust of Vikrant locked in place beside them while the episodes
  scroll past; a sign-up band pops up over him at the end.
- Then the page moves on to Writing, _Notes from the floor_: the sign-up band pops up and away, Vikrant dips and glides
  across to the left of the page, turning to face it, and Writing slides in beside him.
- Each article has its own page on this site, `/blogs/[slug]`, with the full text, and `/blogs` lists them all.
- Testimonials, _Kind words from our readers_: a deck of cards that stack as you scroll, a highlighter sweeping each
  reader's key line as their card lands.
- Resources, _Tools for operators, not observers_: his free white papers as paper stacks, each with its own page,
  `/resources/[slug]`, with a reader and a download (the PDFs are hosted here).
- A small footer on every page: the sign-off line, his signature writing itself out beside it, then the page links,
  Connect, YouTube / LinkedIn / email icons and the book (Amazon).

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · three.js · GSAP · Lenis

**Type:** Grift (served from `app/fonts`): Bold for titles, labels and buttons, Medium for body text; Swarsh Daisy
Italic for the accents. Every title, the hero's included, uses one lockup: heavy capitals
with the joining words in blue serif italic, lowercase ("EXECUTION _is the_ JOB.", "NOTES _from the_ FLOOR"), a
blue label above it, and a muted line under it ending on a serif accent. Both load through `next/font/local`.

**Buttons:** one system in `globals.css`: `.btn` (outlined), `.btn-solid` (signal), `.btn-ink` (ink), `.btn-sm`.
Square-cut, uppercase and tracked, with a panel that wipes across from the left on hover. Use these for any new button.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script              | What it does                                                             |
| ------------------- | ------------------------------------------------------------------------ |
| `npm run dev`       | Dev server                                                               |
| `npm run build`     | Production build (the page prerenders as static HTML)                    |
| `npm run lint`      | ESLint                                                                   |
| `npm run typecheck` | `tsc --noEmit`                                                           |
| `npm run format`    | Prettier                                                                 |
| `npm run portrait`  | Rebuilds the particle source image (see [Portrait](#portrait))           |
| `npm run signature` | Rebuilds the signature ink and pen strokes (see [Signature](#signature)) |
| `npm run bust`      | Rebuilds the podcast's 3D bust from the source scan (see [Bust](#bust))  |

## Structure

```
app/
  layout.tsx            fonts, metadata, Navbar + SmoothScroll
  page.tsx              section order
  blogs/
    page.tsx            all articles
    [slug]/page.tsx     one article in full, prerendered for every slug
    blog.css            article and index styles
  podcast/
    [slug]/page.tsx     one episode: video, summary, guest, the full transcript
  resources/
    [slug]/page.tsx     one white paper as a reading page, its contents pinned beside it
    resource.css
  globals.css           design tokens (@theme), type utilities, intro keyframes
components/
  hero/
    Hero.tsx            hero layout and copy (server component)
    PortraitStage.tsx   mounts the WebGL portrait, syncs it to the DOM, scroll and pointer
  layout/
    Loader.tsx          signature loader, flies the signature into the nav bar (visits that start on /)
    Navbar.tsx          the bar (signature, theme, Connect, Menu) and the menu sheet that unfolds out of the Menu button
    SectionLink.tsx     a link to a home-page section that works from any page
    Footer.tsx          site footer (FooterSignature draws the signature, BackToTop scrolls via Lenis)
    SmoothScroll.tsx    Lenis on the shared GSAP ticker
  signature/
    Signature.tsx       the signature SVG, optionally drawn stroke by stroke
    strokes.ts          generated pen strokes (scripts/trace-signature.py)
    timeline.ts         when each stroke starts and how long it takes
  motion/
    ScrollFade.tsx      first-viewport drift and fade on scroll
    Reveal.tsx          lifts content in once as it scrolls into view
  sections/
    BookSection.tsx     the 3D book, scrubbed by scroll; drives the hand-offs on either side of it
    Studio.tsx          wraps the podcast and Writing pages; the rail the shared 3D bust rides on
    StudioBust.tsx      mounts the bust; drives the sideways pan, arrival, drag-to-spin, cursor light
    PodcastSection.tsx  "Execution at Scale" layout, pitch and sign-up band (server component)
    Episodes.tsx        the newest three episodes as pills that open to their video; "Show all" → /podcast
    WritingSection.tsx  "Notes from the floor": pinned header with the latest article, then the rest
  ui/                   ThemeToggle, Magnetic, AmazonLogo, icons
content/site.ts         all copy and links: edit words here, not in JSX
content/blogs.ts        the articles, in full (one string per paragraph)
content/episodes.ts     every podcast episode (1–7 from the live site, 8–10 from YouTube)
content/transcripts.ts  episode transcripts as speaker turns (only the episode pages import it)
content/resources.ts    the white papers: summaries, quotes, PDF and cover paths
content/papers.ts       the white papers' full text and figures, converted from the PDFs and HTML pages
lib/
  webgl/
    ParticlePortrait.ts the particle engine (framework-agnostic)
    BookScene.ts        the scroll-scrubbed book
    BustScene.ts        Vikrant's 3D bust: lighting, arrival, the turn as he crosses, idle breath, spin
    TouchTexture.ts     cursor trail painted into a texture the shader samples
    shaders/            GLSL as template strings
  intro.ts              loader ↔ hero handshake (signature drawn → portrait ready → play → done)
  scroll.ts             scroll lock that works with or without Lenis
  theme.ts              per-theme colours the shader and browser chrome need, mirrors globals.css
  theme-mode.ts         theme state, pre-paint script, animated switch
scripts/
  prepare-portrait.mjs
  prepare-bust.mjs
  trace-signature.py
assets/source/          full-resolution source photo, signature and 3D scan (not served)
public/images/          the 720px portrait WebP and the recoloured signature ink
public/assets/          the book model and cover, podcast and article covers, the bust model and its still
```

## How the intro works

1. **Loader.** It is server-rendered, so the curtain covers the page from the first paint. The signature starts drawing
   in CSS before hydration. The pen strokes are the ink's traced centreline. They animate as a thick mask over the real
   ink, so the result looks signed rather than wiped.
2. **Setup during the hold.** The portrait downloads in parallel, but its main-thread work (WebGL context, geometry,
   shader compile) waits until the pen stops. A hitch during the still hold is invisible; during the stroke animation it
   would show.
3. **Flight.** Once the signature is finished and the portrait is ready, the signature shrinks and flies up into the
   navigation bar's top-left corner. At the same moment the curtain fades, the particles assemble, the hero copy rises
   in and the bar's buttons fade up. The CSS animations are paused until `:root[data-intro]`.
4. **Handoff.** The bar's own signature, hidden until `data-intro="done"`, takes over from the flying copy at exactly
   the same spot. The bar's signature never animates in itself, so the landing spot can't shift under the flight.

With `prefers-reduced-motion`, the signature appears already drawn and the loader simply fades out.

## Light and dark theme

The toggle in the navbar (sun/moon) switches themes. Light is the default, and the choice is remembered in
`localStorage`.

- **One attribute.** Colours are tokens named by role (`canvas`, `raised`, `fg`, `muted`, `subtle`, `line`,
  `signal`, `on-signal`) in `app/globals.css`. `:root[data-theme="light"]` swaps their values, so components never
  branch on the theme. Use these tokens, not raw hex, in new sections. Light is pure white (no grain); `signal` is
  the original site's blue (`#1a60e0`, `#3a78ee` in dark mode). Only the particle portrait keeps orange.
- **No flash.** A tiny inline script in `<head>` (`themeInitScript` in `lib/theme-mode.ts`) applies the saved theme
  before first paint.
- **Transition.** Where the View Transitions API exists, the new theme is revealed by a circle growing out of the
  toggle. Elsewhere every colour eases across for 650ms (`.theme-fading`). Reduced motion switches instantly.
- **Portrait.** In light mode the shader's `uInvert` turns the glowing photo into a halftone print: dark pixels become
  large press-black dots on paper. The palettes live in `lib/theme.ts`.
- **Signature.** The ink PNG is a white mask filled with `currentColor`, so it follows the text colour.

## How the hero works

- **One particle per opaque pixel.** The portrait WebP is drawn into a small canvas at grid size (about 290 columns on
  desktop and 140–230 on phones, chosen from the frame width). Each opaque pixel becomes an instance of one quad. Its
  luminance and random seeds are baked into attributes, so the shader never samples the photo. Based on Bruno
  Imbrizi's [Interactive Particles](https://github.com/brunoimbrizi/interactive-particles) (MIT).
- **Hover.** Pointer motion is stamped into a 96px canvas texture as soft blobs that swell and fade. Particles under a
  blob are pushed apart and flare to the accent orange. The portrait itself never moves with the cursor. Force follows
  pointer speed in uv/second, so 60Hz and 120Hz feel the same.
- **Assembly.** Each particle swirls in from a dust cloud on its own clock, starting at the hairline. An oval vignette
  dissolves the shoulders before they reach the copy on either side.
- **Scroll out.** As the hero leaves, particles lift toward the camera and fade, and the bust drifts at 35% of scroll
  speed.
- **Layout comes from CSS.** The portrait fills the `frameClassName` box in `Hero.tsx`. The camera is placed so one
  world unit equals one CSS pixel, so to move or resize the portrait you only edit Tailwind classes.

### Smoothness rules (keep these when adding sections)

1. **One clock.** Lenis, the WebGL render and scroll effects all run on `gsap.ticker`. Lenis is added with
   `prioritize`, so everything after it reads the current frame's scroll.
2. **One smoothing filter.** Lenis already eases scroll. Read `window.scrollY` directly and don't lerp it again: two
   filters make layers drift apart.
3. **No layout reads per frame.** Measure in `ResizeObserver` callbacks, cache the numbers, and write only
   `transform` and `opacity`.
4. **Pause off screen.** `PortraitStage` stops rendering when the hero isn't intersecting.
5. Pixel ratio is capped at 2; three.js loads as a separate chunk after hydration.

`prefers-reduced-motion` turns off Lenis and the intro animations. If WebGL is unavailable, a still greyscale portrait
is shown instead.

## Book section

**Hand-off from the hero.** The hero pins on a track (`.hero-pin` in `app/page.tsx` and `globals.css`) that is
`--handoff` (130svh) longer than itself. The book section is pulled up over that track, and BookSection stages the
entrance across it, all scrubbed by scroll:

1. The hero fades out and eases back, while its particles scatter.
2. The black backdrop settles in.
3. "Execution Under Pressure" fades up while moving right to left. Its path is one straight line at constant speed,
   from its entrance to the end of the book's scroll, so it never changes direction.
4. The book grows into place. It stays centred throughout: it only rotates and opens.
5. The name lockup, Amazon badge and CTA settle in.

Phases overlap with smoothstep easing, so there are no seams. When the hero is fully faded it is parked off-screen,
which pauses its WebGL loop. Clicks pass through to the hero until the book has arrived.

`components/sections/BookSection.tsx` pins a stage for about 3.2 screens of scroll. `lib/webgl/BookScene.ts`
scrubs the GLB from `public/assets/book/` against that scroll:

| Scroll    | What happens                                                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0.04–0.46 | The book turns over exactly **180°**, back cover → spine → front cover                                                                                                                     |
| 0.50–0.66 | The front cover swings open in place; the camera eases in to reading distance                                                                                                              |
| 0.70–0.82 | A slow push while the first page is read: the quote and "150 Copies Gone in 1.5 Days!" (`lib/webgl/FirstPage.ts`). It never holds still, because a dead stop while scrolling reads as jank |
| 0.82–0.98 | The camera glides on into the page's open middle until paper fills the screen. One monotone curve covers 0.56–0.98                                                                         |
| 0.88–0.98 | `.book-exit` fades the page onto the site background                                                                                                                                       |
| 0.90–1.00 | The podcast section fades up onto that paper, arriving exactly in place as the stage unpins                                                                                                |

- **Follows the theme, except the pages.** The stage is paper in light mode and black in dark mode, but the open book's
  pages are always white paper (`lib/webgl/FirstPage.ts`). In dark mode the dive lands on white, and `.book-exit`
  (0.88–0.98) eases it into the dark next section.
- **Material fix.** The model leaves `metallicFactor` unset, which glTF treats as fully metallic. Untextured materials
  are forced to non-metal so cloth and paper don't mirror the studio light.
- **Cover.** The front, spine and back are the print cover PDF's own art (one-off conversion: CMYK to sRGB with Apple's
  Generic CMYK profile, the PDF's baked-in guide lines removed, WebP textures, poster from the front). The model is
  proportioned like the printed book (5.5 × 8.5 in, 0.49 in spine), so the art maps on without stretching.

## Podcast and Writing (the studio)

The two pages are wrapped in `Studio.tsx`, because Vikrant's 3D bust is shared between them: it rides a rail
(`.studio__rail`, absolute over the whole studio) and its stage is `position: sticky`, so it stays pinned from the
podcast's arrival to the end of Writing.

**Hand-off from the book.** The studio (`data-book-next`) is pulled up over the book stage's last screen
(`--book-stage-h`) and is transparent, so while the stage is pinned it sits on top, invisible. BookSection writes
`--book-next-in` on it from the book's progress (0.90–1.00), and the content fades up onto the paper the camera has just
dived into. At 1 the section is exactly in place and the stage unpins beneath it, so there is no blank stretch of
scroll between the book and the podcast. Clicks pass through until it has arrived. Without the scrubbed book (WebGL
fallback, reduced motion, no script) it is an ordinary section.

**Podcast layout.** Two columns. Left: the title, then the episodes, the latest open with its video straight away,
and the show's pitch, scrolling as normal. Right: Vikrant's 3D bust, with YouTube's mark and name ghosted behind him,
pinned at the same height the page starts at, so once it has arrived he never moves vertically. Last, the sign-up band
spans both columns, above the rail, and pops up over him (`.reveal--pop`).

**The cross-over to Writing.** Writing is pulled up over the podcast's last screen, so its header pins
(`data-studio-pin`) exactly when the podcast has scrolled to its end. It stays pinned for `--writing-shift` (110svh) of
scroll, and across that stretch `StudioBust` writes `--studio-move` (0 → 1) and `--studio-dip` (0 → 1 → 0, a sine)
on every `[data-studio-move]` element:

| Element              | Across the cross-over                                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| the sign-up band     | pops up and off the top, over his head: it scrolls up as normal plus an extra 38svh, growing slightly and fading                                                                                                      |
| the rest of the page | scrolls up as normal, fading                                                                                                                                                                                          |
| the bust             | crosses from the right column to the left (13/11 of its width plus the gap), dipping up to 22svh down on the way; he turns from facing left to facing right on the way down (done by 55%), then rises back into place |
| Writing's header     | slides in from the right (from 30%) and fades up (from 45%), as he rises                                                                                                                                              |

YouTube's ghost swaps for "Blogs" as he crosses. After it, Writing's header scrolls on
as normal and the next two articles follow in the right column while he stays pinned on the left. The "Writing" nav link
lands at the end of the cross-over. Below 1024px the studio is one column: the bust stands at the top, then the
podcast, then Writing, with no cross-over.

**Bust.** `lib/webgl/BustScene.ts`, mounted by `StudioBust.tsx` once the intro has played, at the first quiet moment
after the book has loaded (no scrolling for 700ms), or when the studio comes near if the reader never pauses. Its
one-off GPU set-up (second WebGL context, environment, textures, shaders, one warm-up frame) used to land in the
book's dive and freeze it for up to half a second; now it happens off-screen beforehand. It draws only while on screen
and once the studio has started arriving, and fades its own waist into the page in the shader rather than through a
CSS mask, which would make the browser composite the canvas through an extra pass every frame. A still render
(`vikrant-neb-bust.webp`) stands in until it's ready and without WebGL. It is a single scanned mesh with no rig, so
every motion moves the whole bust:

- **Arrival:** as the section lands from the book's dive he fades in and turns to face the copy, in place. While the
  section is still rising, BookSection's `--book-next-lift` holds his column at its final spot, so he never moves
  vertically: not on arrival, not while scrolling, and not when scrolling back up into the book.
- **Idle:** a slight breath and sway. Scrolling never moves him, except the cross-over to Writing.
- **Drag:** grab him to spin him; let go and a spring brings him back the short way round. Only horizontal drags
  turn him (`touch-action: pan-y`), so a vertical swipe on a phone still scrolls.
- **Cursor:** a blue rim light swings around behind him with the pointer.

**Episodes.** Each episode is a pill; the open one shows its video, guest, summary, and YouTube link. The
video (`components/podcast/LiteYouTube.tsx`, also on the episode pages) is a still cover until pressed, then YouTube's
privacy-enhanced embed, so nothing loads from YouTube before someone asks to watch; opening another episode stops it.
Episodes, guests and links are from the live site's `/episodes` pages and live in `content/episodes.ts`; covers are the
YouTube thumbnails, saved as WebP in `public/assets/podcast/`. To add an episode, add its entry at the top of
`episodes` and its cover beside the others.

**Writing.** The newest article is featured in the pinned header and the next two follow, then "Show all blogs"
opens `/blogs`; each opens its own page on this site. "Notes from the floor" is his own phrase for this writing.

## Articles

`content/blogs.ts` holds the articles in full, as written on the current vikrantneb.com `/blogs` pages, one string per
paragraph, newest first; covers are its illustrations, saved as WebP in `public/assets/writing/`. To add one, put its
entry at the top with its paragraphs and add its cover beside the others.

- `/blogs/[slug]` shows one article: header (category, date, reading time, title), cover, the text in a 680px reading
  column (the first paragraph as a lead, short standalone lines set heavier), an author card, then two more articles.
  A signal hairline along the top tracks reading progress (a CSS scroll-driven animation; it simply doesn't show in
  browsers without them). Every slug is prerendered (`generateStaticParams`); unknown slugs 404.
- The slug is read inside `<Suspense>`, as Next 16's instant-navigation check asks, so a navigation can show the
  page shell at once.
- `/blogs` lists them all, the newest full width.
- **Intro on other pages.** The loader only plays when a visit starts on the home page; an article opened directly
  marks the intro as played at once, so going to the home page afterwards simply animates the hero in.
- **Navbar on other pages.** Section links lead back to the home page (`/#writing` etc.) with client-side navigation,
  so the loader doesn't replay, and "Writing" shows as current on article pages.

## Bust

```bash
npm run bust                                      # assets/source/vikrant-neb-bust.glb
npm run bust -- path/to/model.glb                 # any single-material glTF binary
```

The source scan is 29 MB (593k triangles, 2K textures). The script drops its black emissive map, welds and simplifies
the mesh to about 150k triangles, re-encodes the textures as WebP (colour 2048px, normal and metal/roughness 1024px)
and meshopt-compresses the geometry, writing `public/assets/podcast/vikrant-neb-bust.glb` at about 2.5 MB. The
still that stands in while it loads, `vikrant-neb-bust.webp`, is a transparent render from the same camera and lights.

## Portrait

The source is a transparent-background PNG. The script also accepts a Figma-style SVG with an embedded raster:

```bash
npm run portrait                                  # assets/source/vikrant-neb.png
npm run portrait -- "~/Downloads/new-photo.svg"   # any PNG/JPG/WebP, or an SVG wrapping one
```

It finds the head from the alpha channel, crops a square around it, and writes
`public/images/portrait/vikrant-neb.webp`, about 50 KB.

## Signature

```bash
npm run signature                                 # assets/source/vikrant-neb-signature.png
npm run signature -- path/to/signature.png        # transparent PNG, or dark ink on white
```

It needs Python 3 with numpy and Pillow. It crops the ink and recolours it to bone, writing
`public/images/signature/vikrant-neb-signature.png`. It then thins the ink to its centreline (Zhang–Suen), walks the
skeleton into strokes in writing order (left to right, underline last, then dots), and writes
`components/signature/strokes.ts`. The source PNG comes from the current vikrantneb.com.

## Credits

- Particle technique: Bruno Imbrizi, _Interactive Particles_ (Codrops), MIT.
- Simplex noise: Ian McEwan & Stefan Gustavson (Ashima Arts), MIT.

## Testimonials, Resources and the footer

- **Testimonials** (`TestimonialsSection.tsx`, `DeckMotion.tsx`): each card is `position: sticky`, pinning 16px lower
  than the one before, so the cards land on a stack as the page scrolls. All cards are one height, so where each pins
  is known from layout; DeckMotion measures on resize and writes `--arrive`, `--land` (the highlighter sweep) and
  `--depth` (how far back in the stack: smaller, tilted, faded) per card, and lifts the newest reader's face.
  Quotes and photos are from the live site's "Kind Words From Our Readers"; `mark` is the line highlighted.
- **Resources** (`ResourcesSection.tsx`, `app/resources`): the home page shows two papers (`resourcesIntro.home`)
  as an editorial index, big numbered rows that wipe in from the left as they scroll in (a CSS scroll-driven
  animation), each showing its cover beside it on hover (inline on phones), then "Show all". `/resources` is a
  bookshelf: every paper as a 3D booklet (cover plus page edges) on a lit stage, turning in as it scrolls into view
  and straightening on hover, the newest featured large and the rest in a grid with their buttons lined up. Each
  paper's own page still shows its `PaperCover` stack. The PDFs and covers are in `public/assets/resources`; download
  buttons use the `download` attribute. Titles and descriptions follow the live /resources pages; note the PDFs' own
  cover titles differ ("Pricing What Actually Got Picked", "From Pallet In, Pallet Out to 10,000 Orders a Day").
- **Phones** (under 768px): the hero's particle portrait runs from under the menu to the bottom, the copy over it;
  the 3D bust is left out (not even loaded); the book rests between its heading and buttons (`BookScene` takes that
  band), returning to centre for the dive; the menu's links sit right under its bar; every group of buttons stacks
  into full-width buttons of one height (globals.css). On About the portrait fills the first screen, then stays
  pinned behind the text, dimming as it scrolls.
- **Footer** (`components/layout/Footer.tsx`): in the root layout, so it's on every page. One small panel: the signed
  sign-off on the left; on the right the page links, Connect, icon links (YouTube and LinkedIn from `footer.socials`
  in `content/site.ts`, plus the contact email) and a slim book link; the last line under both.

## Episodes, transcripts and white papers

- **Episodes** (`content/episodes.ts`): 1–7 come from the current vikrantneb.com episode pages (its Framer CMS data),
  8–10 from their YouTube pages; covers are the YouTube thumbnails. The home page lists the newest three and "Show all"
  opens `/podcast`, which lists every one. Each has a page at `/podcast/[slug]`: the video (loaded on press), title and
  brief pinned on the left while what you'll learn, the guest and, the full transcript
  (`content/transcripts.ts`: 1–7 from the old site, 8–10 from their transcript PDFs) scroll past on the right. The guest card carries their
  headshot (`public/assets/podcast/guests/<slug>.webp`, 320px: from the old site's episode pages for 1–7, cropped
  from the episode thumbnail for 8–10); a new episode needs one there. The left column pins where it
  starts and is one screen tall: the video shrinks to leave the text room, so it never scrolls on screens from 1280×720
  up; on shorter ones it scrolls by itself (`data-scroll-own`, which SmoothScroll leaves to the wheel).
  Phones stack them.
- **White papers** (`content/papers.ts`): converted from the PDFs into headings, paragraphs, his quotes, callout
  panels, numbered points and checklists; charts and tables are images in `public/assets/resources/figures`. The paper
  page shows it as a reading page with its contents (built from the headings) pinned beside it, and keeps the PDF
  download. The two web papers (_Every Line on the Invoice_, _Every Minute on the Floor_) came as HTML pages: their
  text, tables and flows are blocks in the same file, and their ten interactive exhibits are live components
  (`components/resources/Exhibits.tsx`, same maths and defaults as the originals). Their PDFs are prints of the
  original pages, and their covers follow the PDF covers' layout with the paper's own invoice / shift log as the art.
- **Menu** (`Navbar.tsx`): a signal sheet across the top of the screen that unfolds out of the Menu button (Close lands
  where Menu was) over a dimmed page, its links rising in one by one, the current section marked. It replaces the old
  link row on every screen size.
- **Connect** (`components/connect`): every "Connect" / "Get in touch" button opens the query form, revealed by the
  theme switch's circle (`lib/reveal.ts`). Sending posts it to Formspree (`contact.form` in `content/site.ts`), which
  delivers it to Vikrant's inbox with the visitor's email as reply-to and "Topic · Name" as the subject; a hidden
  `_gotcha` field catches bots. If it fails, the form keeps what was typed and shows me@vikrantneb.com as a fallback.

## Pages

The site is one long home page and a set of pages. The menu and footer open the pages; on the home page the menu
marks the section you're in, and each section links to its page.

| Page         | File                     | Layout                                                                                                                                                                                |
| ------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/about`     | `app/about/page.tsx`     | A split: his black-and-white portrait pinned on the left (the page in its dark backdrop, both themes), the italic title, statement, story, facts and companies scrolling on the right |
| `/book`      | `app/book/page.tsx`      | CSS 3D cover; the back cover word for word (pitch, five hidden reasons, quote); every reader; details                                                                                 |
| `/podcast`   | `app/podcast/page.tsx`   | The show; the newest episode playing in place; every earlier episode as a card                                                                                                        |
| `/blogs`     | `app/blogs/page.tsx`     | Every article                                                                                                                                                                         |
| `/resources` | `app/resources/page.tsx` | The bookshelf: every paper as a 3D booklet, the newest featured, each with what you'll learn and its buttons                                                                          |

Shared page chrome is `components/page/page.css`; copy lives in `content/site.ts` (`about`, `book.back`,
`podcast.page`). The white papers on `/resources/[slug]` are complete: `content/papers.ts` carries every line of each
paper, cover and About the Author included; in the PDF papers charts, tables and diagrams are images of the PDF
itself, in the web papers they are real tables and live exhibits.

**Horizontal overflow.** Writing's header waits off to the right before sliding in, so `.studio` clips horizontal
overflow (`overflow-x: clip`, which keeps sticky working); otherwise a sideways swipe slid the whole page.

**One scroll read per frame.** Per-frame effects read `frameScroll()` (lib/scroll.ts), taken once at the top of the
frame; reading `window.scrollY` after another effect has written a style forces Chrome to restyle there and then.

## Search engines and AI answers

Everything is generated from `content/`, so new episodes, articles and papers are covered automatically.

- **Metadata.** The home `<title>` (`site.title`) leads with his name, then the book, 3PLs and warehousing. Every page
  sets its own canonical URL and link preview; `app/opengraph-image.jpg` is the default preview image.
- **Structured data** (`lib/schema.ts`, rendered by `components/seo/JsonLd.tsx`): the home page describes the
  Person (role, Purdue, expertise, LinkedIn and YouTube), Leanafy and Kurieta, the Book (with ISBN) and the
  PodcastSeries; articles are BlogPostings, episodes PodcastEpisodes with their YouTube VideoObject and guest,
  papers Reports with their PDF, each with breadcrumbs. Validate at https://validator.schema.org.
- **`/sitemap.xml`, `/robots.txt`** (`app/sitemap.ts`, `app/robots.ts`): every page with its date; all crawlers,
  search and AI, are allowed.
- **`/llms.txt`** (`app/llms.txt/route.ts`): the site summarised in Markdown for AI assistants (llmstxt.org).
- **Copy deterrent** (`components/layout/CopyGuard.tsx`, `body` in `globals.css`): visitors can't select, copy,
  right-click, drag images out or print the pages; form fields and links behave normally. It runs only in the
  browser, so crawlers still read every word. It stops casual copying, not screenshots or developer tools.
- **Redirects** (`next.config.ts`): the old Framer addresses (`/episodes/*`, `/about`, `/resources`, the misspelt
  Kurieta article…) redirect permanently to their new homes, so links and rankings carry over at launch.

## Sharing a preview

`.claude/launch.json` (in the parent folder) has `vikrant-neb-prod`, which serves the production build on port 3223.
Build, start it, then tunnel it, e.g. `ngrok http 3223`. Rebuild and restart it to update what the link shows.
