# Road sign images

Drop the 85 PNG files from `ltm-signs.zip` directly into this directory.
The final layout should be `public/signs/<filename>.png`, e.g.
`public/signs/no-left-turn.png`. Do not nest them inside another folder.

The data file (`src/data/road-signs.ts`) references each image at
`/signs/<id>.png`. A handful of entries (red markings, red reflectors,
unmarked two-lane roads, out-of-service signals) intentionally use an
empty string and will render a styled fallback in `SignImage.tsx`.
