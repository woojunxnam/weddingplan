# Tupper Manor Wedding Cost Planner

A GitHub Pages wedding venue decision tool for the 2027 Tupper Manor wedding package.

## Project Purpose

This page helps a couple understand the attached Tupper Manor 2027 wedding package PDF without reading the full document first. It explains what is included, what is informational only, what adds cost, how the event food flow works, and how F&B minimums, property rental, engagement gift discount, ceremony, admin fee, and tax affect an estimated venue total.

The page is intentionally guided and beginner-friendly rather than spreadsheet-first.

## How To Run Locally

No build step is required.

1. Clone the repository.
2. Open `index.html` directly in a browser, or run a static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## How To Deploy With GitHub Pages

1. Commit and push changes to the branch configured in GitHub Pages.
2. In GitHub, open **Settings -> Pages**.
3. Confirm the Pages source branch and folder.
4. Wait for GitHub Pages to publish the updated static files.

## PDF As Source Of Truth

The source of truth is `2027 tupper wedding package.pdf` in this repository.

The JavaScript data model keeps PDF facts centralized in `assets/js/app.js`, including:

- package year, venue, and location
- included base package items
- informational menu options
- paid upgrades
- bar options
- date rates
- engagement gift discount rules
- sold-out warnings
- admin fee and tax assumptions
- venue confirmation checklist

## Pricing Assumptions

- Base package: `$140/person`.
- Bar is separate from the `$140/person` base package.
- Optional appetizer course: `+$8/person`.
- Explicitly priced duet upgrades: `+$10/person`.
- Lobster tail duet: market price / custom estimate.
- Cocktail enhancements and late-night snacks add per-person cost.
- Raw F&B equals base package, bar, paid upgrades, enhancements, snacks, and custom F&B.
- Applied F&B is the greater of raw F&B and the selected date's F&B minimum.
- Engagement gift discount applies only to property rental.
- Ceremony is separate: `$1,000`, adds 30 minutes.
- Estimated total equals applied F&B, discounted rental, ceremony, admin fee, and tax according to selected assumptions.

## Admin Fee Uncertainty

The PDF states that a 22% administrative fee applies and that it is not a gratuity. The calculator defaults to a configurable admin model and keeps alternate assumptions available because final contract treatment should be confirmed with the venue.

## Discount Confirmation Warning

The engagement gift discount is not treated as guaranteed. When enabled, the page warns:

> This estimate applies the engagement gift discount from the PDF. The PDF states this special is valid through June 1, 2026 and must be confirmed with the venue.

NYE is modeled without an automatic engagement gift discount because the PDF discount text lists Holiday/Winter/Spring Fri/Sat/Sun, while NYE is separately named in the Holiday rate line.

## Known Limitations

- Final pricing and availability must be confirmed directly with Tupper Manor.
- Market-price items require venue confirmation.
- Taxes, admin fee scope, and gratuity expectations may differ in the final contract.
- Saved scenarios use browser `localStorage` and are not synced between devices.
- This planner estimates venue cost only; it does not include photography, music, floral, attire, transportation, lodging, or personal items.

## Future Improvement Ideas

- Add CSV export for saved scenarios.
- Add shareable scenario links.
- Add full wedding budget categories outside the venue estimate.
- Add a dedicated print/PDF estimate template.
- Add automated browser tests if a package manager is introduced.
