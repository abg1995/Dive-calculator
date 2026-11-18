# Koh Lipe Instructor Earnings Calculator — 1.1.0

Live site: https://abg1995.github.io/Dive-calculator/

## Publish (GitHub Pages)

Copy all files in this directory to the root of the `Dive-calculator` repository and push to `main`. GitHub Pages should be set to **Deploy from a branch → main / root**. `index.html` must be at the repository root. Once deployed, open the site online to refresh the offline cache. If your installed iPhone/Android app still displays an old version, close/reopen and refresh while online. Take a JSON backup before updating.

## Editing commissions

At the **top of `app.js`**, update only the relevant values inside `RATES`:

```javascript
const RATES = Object.freeze({
  double:400, afternoon:200, owd:3200, aow:2650, dsd:1000,
  third:500, refresher:null, night:null, sales:0.05, tanks:200
});
```

Change `refresher:null` and `night:null` to confirmed commission per participant, e.g. `refresher:250`. **Do not use zero to mean unknown**: `null` displays Rate pending and excludes that category from totals. Note that the additional third DSD dive payment (฿500) and additive 5% sales commission are unverified assumptions. `tanks:200` preserves historical entries from v1.0.0, not a new category.

## Data compatibility

Uses existing localStorage key `koh-lipe-instructor-earnings-v1`. Does not overwrite old history or migrate old tank units into new categories. Existing entries with `tanks` are shown as **Legacy recreational tanks** in totals, included at ฿200 per tank, and preserved when editing and backing up. New entries use double-tank clients (฿400/client) and afternoon dive clients (฿200/client). No cloud synchronization is implemented.

## Languages

Interface languages: English, Spanish, French, Portuguese, German. They share **one** `index.html`; the text dictionary is `LANG` at the beginning of `app.js`. Translation choice is stored locally under `koh-lipe-language`. User guide remains in English as previously requested. To add a language, add a `<option>` in `index.html` and a new dictionary in `app.js`. All entries and calculations are language-independent.

## Versioning (Semantic Versioning)

`MAJOR.MINOR.PATCH`:
- MAJOR: incompatible data schema or breaking behavior.
- MINOR: backwards-compatible feature (new activity, localization).
- PATCH: backwards-compatible bug or UI fix.

Before each release change `VERSION` in `app.js`, app footer/title, service worker `CACHE`, README and user guide; optionally tag the Git commit `vX.Y.Z`. Data schema compatibility takes priority over visual labels. A release must not delete old earnings silently.

### Historical changelog

- **1.1.0 (18 Nov 2026)**: Double Tank and Afternoon Dive separated; Refresher and Night Dive with editable pending rates; 5 languages; instructions/back buttons; compatible historical tank totals and backups; offline cache updated.
- **1.0.0 (baseline for former V5)**: PWA for iOS/Android, offline cache, local storage/backup, monthly chart and CSV export. This baseline maps the previous informal V5 to a SemVer starting point, not an originally tagged Git release.
- **Legacy V4**: OWD split over 3 calendar days and AOWD over 2, including month boundaries.
- **Legacy V2–V3**: Touch controls, mobile fixes and runtime check.
- **Legacy V1**: Initial daily/monthly commission calculator.

## Open questions

Employer must confirm Refresher and Night Dive instructor rates, DSD third-dive instructor commission and whether the 5% sales commission is additional to instructor pay.
