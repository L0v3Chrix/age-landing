# Typography Spec — AGE Site
_2026-03-14 | Mobile legibility pass_

## The Problem
Dark background (#080608) + low-opacity white text = unreadable on mobile in daylight.
Currently: 33 instances of rgba(255,255,255,0.4) and 14 at 0.25. Way too dim.

## Text Opacity Scale (all pages, all components)

| Use Case | Old Value | New Value |
|----------|-----------|-----------|
| Timestamps, tiny labels | 0.2–0.3 | 0.45 |
| Secondary / subdued text | 0.4 | 0.65 |
| Captions / metadata | 0.45–0.5 | 0.72 |
| Subtext | 0.55 | 0.78 |
| Body copy | 0.6–0.65 | 0.85 |
| Important body | 0.7–0.75 | 0.92 |
| Near-full | 0.82–0.88 | keep or bump to 0.95 |
| Full white #fff | keep | keep |

## Find/Replace Map (sed-friendly)
rgba(255,255,255,0.2)  → rgba(255,255,255,0.40)
rgba(255,255,255,0.25) → rgba(255,255,255,0.45)
rgba(255,255,255,0.3)  → rgba(255,255,255,0.50)
rgba(255,255,255,0.35) → rgba(255,255,255,0.55)
rgba(255,255,255,0.4)  → rgba(255,255,255,0.65)
rgba(255,255,255,0.45) → rgba(255,255,255,0.72)
rgba(255,255,255,0.5)  → rgba(255,255,255,0.78)
rgba(255,255,255,0.55) → rgba(255,255,255,0.82)
rgba(255,255,255,0.6)  → rgba(255,255,255,0.85)
rgba(255,255,255,0.65) → rgba(255,255,255,0.88)
rgba(255,255,255,0.7)  → rgba(255,255,255,0.92)
rgba(255,255,255,0.75) → rgba(255,255,255,0.94)

## Also Check
- font-size on mobile: body should be min 14px, prefer 15-16px
- line-height on body: 1.65-1.75 minimum for readability
- font-weight on subtext: bump 400 → 500 on anything below 13px

## Applies To
ALL tsx files under app/ — including new quiz and dossier pages
