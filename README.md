# Tupper Manor Wedding Cost Planner

A one-page GitHub Pages-compatible static wedding venue cost planner for comparing Tupper Manor 2027 wedding package scenarios.

## Project purpose

This planner helps compare Tupper Manor wedding estimates across seasons, months, day types, guest counts, bar packages, ceremony choices, add-ons, discounts, administrative fee assumptions, and tax assumptions. It is designed for transparent line-item planning with a save-and-compare scenario table backed by browser `localStorage`.

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

The project request says the Tupper Manor 2027 wedding package PDF should be treated as the source of truth. The PDF attachment was not available in this workspace, so this implementation uses the pricing, package details, warnings, and assumptions supplied in the request as the data source. If the PDF differs, update the centralized `TUPPER_MANOR_2027` object in `assets/js/app.js`.

## Important calculation assumptions

- Base wedding package: `$140/person`.
- Default guest count: `100`.
- Default bar: Tupper Brands + Beer, Wine & Non-Alcoholic at `$58/person`.
- Default ceremony: onsite ceremony enabled at `$1,000`.
- Raw F&B includes base package, bar, optional appetizer, duet upgrades, cocktail enhancements, late-night snacks, and custom F&B amount.
- Applied F&B is the greater of raw F&B and the selected date's F&B minimum.
- Engagement gift discount applies only to property rental when enabled.
- Default tax is `7%`, modeled as `6.25%` MA tax plus `0.75%` city tax.
- Default tax mode taxes applied F&B plus administrative fee.
- Spring Saturday is marked sold out. Because the request did not provide distinct Spring Saturday pricing, the calculator displays Spring Friday/Sunday pricing as a reference while showing the sold-out warning.

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

- The actual PDF was not available in this workspace, so PDF conflicts could not be independently checked.
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
