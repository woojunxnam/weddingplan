# Tupper Manor Wedding Cost Planner

A one-page GitHub Pages-compatible static wedding venue cost planner and PDF summary for comparing Tupper Manor 2027 wedding package scenarios.

## Project purpose

This planner helps compare Tupper Manor wedding estimates across seasons, months, day types, guest counts, bar packages, ceremony choices, add-ons, discounts, administrative fee assumptions, and tax assumptions. It also summarizes the important PDF details so a couple can understand package inclusions, date pricing, bar choices, add-ons, taxes, and venue-confirmation questions without reading the full PDF first.

## How to run locally

No build step is required.

1. Clone the repository.
2. Open `index.html` directly in a browser, or run a local static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## How to deploy with GitHub Pages

1. Commit and push these files to GitHub.
2. In the repository, go to **Settings → Pages**.
3. Set the source to deploy from the desired branch, usually `main`, and the repository root.
4. Save the Pages settings and open the generated GitHub Pages URL after deployment completes.

## Data source note

The project treats `2027 tupper wedding package.pdf` on `main` as the source of truth. The centralized `TUPPER_MANOR_2027` object in `assets/js/app.js` was checked against that PDF for package price, date minimums, rental fees, discounts, ceremony timing, bar pricing, add-ons, taxes, administrative fee language, sold-out notes, and market-price warnings.

## Page features

- PDF-at-a-glance summary cards for the package, date costs, timing, and contract checks.
- Dynamic month/day options that avoid showing NYE outside December.
- Live estimate with per-guest total, warnings, cost tiles, and a detailed line-item table.
- Season cards summarizing published F&B minimums and property-rental pricing.
- All-date comparison table using the active guest, bar, add-on, tax, and fee assumptions.
- Save, rename, load, and delete browser-local scenarios with `localStorage`.
- Package guide for included items, bar tiers, and common per-guest add-ons.

## Important calculation assumptions

- Base wedding package: `$140/person`.
- Default guest count: `100`.
- Default bar: Tupper Brands + Beer, Wine & Non-Alcoholic at `$58/person`.
- Default ceremony: onsite ceremony enabled at `$1,000`.
- Raw F&B includes base package, bar, optional appetizer, duet upgrades, cocktail enhancements, late-night snacks, and custom F&B amount.
- Applied F&B is the greater of raw F&B and the selected date's F&B minimum.
- Engagement gift discount applies only to property rental when enabled.
- Default tax is `7%`, modeled as `6.25%` MA tax plus `0.75%` city tax.
- Default tax mode uses a PDF-style taxable scope: applied F&B, property rental, ceremony, and taxable administrative fee.
- Spring Saturday is marked sold out and reference-only because the PDF does not provide a bookable Spring Saturday price.
- NYE is only shown for December, uses Holiday Saturday/NYE pricing, and does not automatically receive the engagement gift discount because the discount text does not list NYE.

## Admin fee uncertainty note

The default administrative fee is `22%` and defaults to the scope "Food & beverage only." The planner also supports these alternate assumptions:

- Food & beverage + rental + ceremony.
- Everything taxable / conservative estimate.
- Custom admin rate on F&B.
- Custom/manual administrative amount.

The page clearly states that the 22% administrative fee is not a gratuity and that additional gratuity may still be expected.

## Discount confirmation note

The engagement gift discount toggle is enabled by default but is not treated as guaranteed. When enabled, the page displays this warning:

> This estimate applies the engagement gift discount from the PDF. The PDF states this special is valid through June 1, 2026 and must be confirmed with the venue.

## Known limitations

- Market-price items require manual estimates and venue confirmation.
- Taxes and administrative fee scope may differ in the final venue contract.
- Saved scenarios are stored per browser/device with `localStorage` and are not synced.
- The calculator is an estimate only and does not include outside vendors, gratuity, attire, music, photography, floral, transportation, lodging, or personal items.

## Future improvement ideas

- Add CSV export for saved scenarios.
- Add a PDF print template.
- Add separate vendor budget categories for a full wedding budget.
- Add a manual date availability tracker after venue outreach.
- Add tests with a browser automation suite once a package manager or test framework is introduced.
