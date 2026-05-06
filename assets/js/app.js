'use strict';

const TUPPER_MANOR_2027 = {
  venue: 'Tupper Manor',
  location: 'Beverly, MA',
  packageYear: 2027,
  sourceNote: 'Values are checked against the 2027 Tupper Manor wedding package PDF stored on the main branch.',
  assumptions: {
    defaultGuests: 100,
    budgetMin: 25000,
    budgetMax: 35000,
    packagePricePerPerson: 140,
    appetizerPricePerPerson: 8,
    ceremonyFee: 1000,
    ceremonyNote: 'Adds 30 minutes',
    receptionHours: 5,
    barHours: 4.5,
    maTaxRate: 0.0625,
    cityTaxRate: 0.0075,
    adminRate: 0.22,
    discountWarning: 'The PDF lists the engagement gift special as valid through June 1, 2026. Confirm availability with the venue before relying on the discount.',
    soldOutWarning: 'The PDF lists this date option as sold out. Confirm availability directly with the venue.',
    gratuityWarning: 'The 22% administrative fee is retained by the hotel and is not a gratuity or service charge for employees.',
    barNote: 'Hosted bar prices are per guest for 4.5 hours. Bar closes 30 minutes before event end.'
  },
  months: [
    { name: 'January', season: 'Winter' },
    { name: 'February', season: 'Winter' },
    { name: 'March', season: 'Winter' },
    { name: 'April', season: 'Spring' },
    { name: 'May', season: 'Spring' },
    { name: 'June', season: 'Summer & Fall' },
    { name: 'July', season: 'Summer & Fall' },
    { name: 'August', season: 'Summer & Fall' },
    { name: 'September', season: 'Summer & Fall' },
    { name: 'October', season: 'Summer & Fall' },
    { name: 'November', season: 'Holiday' },
    { name: 'December', season: 'Holiday' }
  ],
  dayOrder: ['Friday', 'Saturday', 'Sunday', 'Holiday Sunday', 'NYE'],
  seasonSummaries: {
    'Summer & Fall': 'June through October. Saturdays are the premium option; June and August Saturdays are listed as sold out.',
    Holiday: 'November and December. NYE has the Holiday Saturday/NYE rate, but the gift discount text does not list NYE.',
    Winter: 'January through March. Lowest published rental fees in the PDF.',
    Spring: 'April and May. Fridays and Sundays are priced; Saturdays are listed as sold out.'
  },
  dateRates: {
    'Summer & Fall': {
      Friday: { fbMinimum: 17000, rentalFee: 7500, discountRate: 0.20 },
      Saturday: { fbMinimum: 20000, rentalFee: 10000, discountRate: 0.15, soldOutMonths: ['June', 'August'] },
      Sunday: { fbMinimum: 15000, rentalFee: 5500, discountRate: 0.20 },
      'Holiday Sunday': { fbMinimum: 17000, rentalFee: 7500, discountRate: 0.20 }
    },
    Holiday: {
      Friday: { fbMinimum: 15000, rentalFee: 5500, discountRate: 0.50 },
      Saturday: { fbMinimum: 18000, rentalFee: 7500, discountRate: 0.50 },
      Sunday: { fbMinimum: 13000, rentalFee: 3500, discountRate: 0.50 },
      NYE: { fbMinimum: 18000, rentalFee: 7500, discountRate: 0, discountNote: 'The PDF lists NYE with Holiday Saturday pricing, but the engagement gift discount text only names Fri/Sat/Sun for Holiday, Winter, and Spring.' }
    },
    Winter: {
      Friday: { fbMinimum: 10000, rentalFee: 1000, discountRate: 0.50 },
      Saturday: { fbMinimum: 12000, rentalFee: 1000, discountRate: 0.50 },
      Sunday: { fbMinimum: 10000, rentalFee: 1000, discountRate: 0.50 }
    },
    Spring: {
      Friday: { fbMinimum: 10000, rentalFee: 2000, discountRate: 0.50 },
      Saturday: { fbMinimum: 10000, rentalFee: 2000, discountRate: 0.50, soldOut: true, referenceOnly: true, note: 'Spring Saturday is sold out in the PDF. Friday/Sunday pricing is shown only as a reference.' },
      Sunday: { fbMinimum: 10000, rentalFee: 2000, discountRate: 0.50 }
    }
  },
  included: [
    'Five butler-passed hors d\'oeuvres',
    'Champagne toast with non-alcoholic options',
    'Fresh baked rolls and butter',
    'One salad selection',
    'Two protein entrees and one vegetarian OR one duet entree and one vegetarian',
    'House red and white wine service with dinner',
    'Cake cutting and presentation with mini Italian pastries',
    'Coffee, decaffeinated coffee, and tea',
    'Floor-length ivory linen and napkin',
    'White china, flatware, and stemware',
    'House fruitwood Chiavari chairs',
    'Exclusive use of the mansion and grounds during the event period plus two hours before start'
  ],
  barOptions: [
    { id: 'none', label: 'No hosted bar', pricePerPerson: 0, note: 'Use only if the venue confirms no hosted bar is required.' },
    { id: 'beer-wine', label: 'Beer, Wine & Non-Alcoholic', pricePerPerson: 48 },
    { id: 'tupper', label: 'Tupper Brands + Beer, Wine & Non-Alcoholic', pricePerPerson: 58, default: true },
    { id: 'premium', label: 'Premium Brands + Beer, Wine & Non-Alcoholic', pricePerPerson: 63 },
    { id: 'cash', label: 'Cash bar (guest-paid)', pricePerPerson: 0, note: 'Guests pay for their own beverages.' },
    { id: 'consumption', label: 'Consumption tab', pricePerPerson: 0, custom: true, note: 'Enter the expected hosted consumption amount.' }
  ],
  duetUpgrades: [
    { id: 'none', label: 'No duet upgrade', pricePerPerson: 0 },
    { id: 'shrimp', label: 'Petite Filet Mignon & Baked Stuffed Shrimp', pricePerPerson: 10 },
    { id: 'crab-cakes', label: 'Petite Filet Mignon & Crab Cakes', pricePerPerson: 10 },
    { id: 'scallops', label: 'Petite Filet Mignon & Seared Sea Scallops', pricePerPerson: 10 },
    { id: 'lobster-tail', label: 'Petite Filet Mignon & Broiled Lobster Tail', pricePerPerson: 0, custom: true, marketWarning: true }
  ],
  cocktailEnhancements: [
    { id: 'cheese', label: 'Taste of Tupper Cheese Display', pricePerPerson: 16 },
    { id: 'charcuterie', label: 'Charcuterie', pricePerPerson: 28 },
    { id: 'crudite', label: 'Vegetable Crudite', pricePerPerson: 10 },
    { id: 'raw-bar', label: 'Water\'s Edge Raw Bar', pricePerPerson: 30, marketWarning: true },
    { id: 'trio', label: 'Cheese, Crudite & Baked Brie Trio', pricePerPerson: 20 },
    { id: 'olive', label: 'Olive & Crostini Bar', pricePerPerson: 18 }
  ],
  lateNightSnacks: [
    { id: 'tot-fry', label: 'Tater Tot or French Fry Bar', pricePerPerson: 14 },
    { id: 'chinese', label: 'Chinese Take Out', pricePerPerson: 14 },
    { id: 'new-england', label: 'New England', pricePerPerson: 16 },
    { id: 'pizzettas', label: 'Pizzettas', pricePerPerson: 12 },
    { id: 'wings', label: 'Wings & Things', pricePerPerson: 14 },
    { id: 'sliders', label: 'Slider Station', pricePerPerson: 14 },
    { id: 'sundae', label: 'Ice Cream Sundae Station', pricePerPerson: 9 }
  ],
  adminModes: [
    { id: 'fb-only', label: 'PDF default: food & beverage only', default: true },
    { id: 'fb-rental-ceremony', label: 'F&B + rental + ceremony' },
    { id: 'custom-rate', label: 'Custom admin rate on F&B' },
    { id: 'manual', label: 'Custom/manual admin amount' }
  ],
  taxModes: [
    { id: 'fb-rental-ceremony-admin', label: 'PDF-style: F&B + rental + ceremony + taxable admin', default: true },
    { id: 'fb-admin', label: 'F&B + administrative fee only' },
    { id: 'everything', label: 'Everything taxable / conservative estimate' },
    { id: 'none', label: 'No tax (comparison only)' }
  ],
  confirmationQuestions: [
    'Does the 22% administrative fee apply only to food and beverage?',
    'Does the F&B minimum include the hosted bar?',
    'Do cocktail enhancements and late-night snacks count toward the F&B minimum?',
    'Is the engagement gift discount still available for the selected date?',
    'Is the selected date actually available?',
    'Does the NYE date receive any engagement gift discount?',
    'Is staff gratuity expected in addition to the administrative fee?',
    'Are ceremony chairs and setup included in the ceremony fee?',
    'What is the exact all-in estimate for the guest count?',
    'Are vendor meals charged separately?',
    'What is the deposit and cancellation policy?',
    'Are service, setup, AV, staffing, overtime, or room fees not shown in the PDF?'
  ],
  presets: [
    { label: 'May Friday value', month: 'May', day: 'Friday' },
    { label: 'May Sunday value', month: 'May', day: 'Sunday' },
    { label: 'June Friday', month: 'June', day: 'Friday' },
    { label: 'June Sunday', month: 'June', day: 'Sunday' },
    { label: 'September Friday', month: 'September', day: 'Friday' },
    { label: 'September Sunday', month: 'September', day: 'Sunday' },
    { label: 'Winter Saturday', month: 'January', day: 'Saturday' },
    { label: 'December NYE', month: 'December', day: 'NYE' }
  ]
};

const STORAGE_KEY = 'tupperManor2027Scenarios';
const $ = (id) => (typeof document === 'undefined' ? null : document.getElementById(id));
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function clampNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : fallback;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatMoney(value) {
  return currency.format(Math.round(value || 0));
}

function formatPercent(value) {
  return `${Math.round((value || 0) * 100)}%`;
}

function formatList(items) {
  return items.length ? items.join(', ') : 'None selected';
}

function getSeason(month) {
  return (TUPPER_MANOR_2027.months.find((item) => item.name === month) || TUPPER_MANOR_2027.months[0]).season;
}

function getAvailableDayTypes(month) {
  const season = getSeason(month);
  const rates = TUPPER_MANOR_2027.dateRates[season];
  return TUPPER_MANOR_2027.dayOrder.filter((day) => {
    if (!rates[day]) return false;
    if (day === 'NYE' && month !== 'December') return false;
    return true;
  });
}

function resolveDate(month, day) {
  const selectedMonth = month || 'May';
  const season = getSeason(selectedMonth);
  const availableDays = getAvailableDayTypes(selectedMonth);
  const resolvedDay = availableDays.includes(day) ? day : availableDays[0];
  return {
    month: selectedMonth,
    season,
    day: resolvedDay,
    dateRate: TUPPER_MANOR_2027.dateRates[season][resolvedDay],
    availableDays
  };
}

function getDateRate(month, day) {
  return resolveDate(month, day).dateRate;
}

function isSoldOut(month, day) {
  const resolved = resolveDate(month, day);
  const rate = resolved.dateRate;
  return Boolean(rate.soldOut || (rate.soldOutMonths || []).includes(resolved.month));
}

function getDayLabel(month, day) {
  const resolved = resolveDate(month, day);
  const rate = TUPPER_MANOR_2027.dateRates[resolved.season][day];
  if (!rate) return day;
  if (day === 'NYE') return 'NYE';
  if (rate.soldOut || (rate.soldOutMonths || []).includes(month)) return `${day} (sold out)`;
  if (rate.referenceOnly) return `${day} (reference only)`;
  return day;
}

function getDefaultOptionId(options) {
  return (options.find((item) => item.default) || options[0]).id;
}

function getBudgetStatus(total, budgetMin, budgetMax, soldOut) {
  if (soldOut) return { label: 'Sold out', className: 'badge--sold' };
  if (total < budgetMin) return { label: 'Below target', className: 'badge--strong' };
  if (total <= budgetMax) return { label: 'Within target', className: 'badge--ok' };
  if (total <= budgetMax * 1.1) return { label: 'Tight but possible', className: 'badge--tight' };
  if (total < budgetMax * 1.25) return { label: 'Over target', className: 'badge--over' };
  return { label: 'High-cost option', className: 'badge--high' };
}

function sumSelectedPerPerson(items, selectedIds, guests) {
  const selected = items.filter((item) => selectedIds.includes(item.id));
  return {
    selected,
    total: selected.reduce((sum, item) => sum + item.pricePerPerson * guests, 0)
  };
}

function calculateEstimate(input) {
  const guests = Math.max(1, Math.round(clampNumber(input.guestCount, TUPPER_MANOR_2027.assumptions.defaultGuests)));
  const resolved = resolveDate(input.month || 'May', input.day || 'Friday');
  const dateRate = resolved.dateRate;
  const bar = TUPPER_MANOR_2027.barOptions.find((item) => item.id === input.barOption) || TUPPER_MANOR_2027.barOptions.find((item) => item.default);
  const duet = TUPPER_MANOR_2027.duetUpgrades.find((item) => item.id === input.duetUpgrade) || TUPPER_MANOR_2027.duetUpgrades[0];
  const adminMode = input.adminMode || getDefaultOptionId(TUPPER_MANOR_2027.adminModes);
  const taxMode = input.taxMode || getDefaultOptionId(TUPPER_MANOR_2027.taxModes);
  const adminRate = clampNumber(input.adminRate, 22) / 100;
  const taxRate = (clampNumber(input.maTaxRate, 6.25) + clampNumber(input.cityTaxRate, 0.75)) / 100;

  const basePackage = guests * TUPPER_MANOR_2027.assumptions.packagePricePerPerson;
  const barCost = bar.custom ? clampNumber(input.consumptionTabAmount) : guests * bar.pricePerPerson;
  const optionalAppetizer = input.optionalAppetizer ? guests * TUPPER_MANOR_2027.assumptions.appetizerPricePerPerson : 0;
  const duetUpgrade = duet.custom ? clampNumber(input.marketDuetAmount) : guests * duet.pricePerPerson;
  const cocktail = sumSelectedPerPerson(TUPPER_MANOR_2027.cocktailEnhancements, input.cocktailEnhancements || [], guests);
  const snacks = sumSelectedPerPerson(TUPPER_MANOR_2027.lateNightSnacks, input.lateNightSnacks || [], guests);
  const customFoodBeverageAmount = clampNumber(input.customFoodBeverageAmount);
  const rawFB = basePackage + barCost + optionalAppetizer + duetUpgrade + cocktail.total + snacks.total + customFoodBeverageAmount;
  const appliedFB = Math.max(rawFB, dateRate.fbMinimum);
  const minimumAdjustment = appliedFB - rawFB;

  const originalRental = dateRate.rentalFee;
  const discountRate = input.engagementDiscountEnabled ? dateRate.discountRate : 0;
  const discountAmount = originalRental * discountRate;
  const discountedRental = originalRental - discountAmount;
  const ceremonyCost = input.ceremonyEnabled ? TUPPER_MANOR_2027.assumptions.ceremonyFee : 0;

  let adminBase = appliedFB;
  if (adminMode === 'fb-rental-ceremony') adminBase = appliedFB + discountedRental + ceremonyCost;
  let adminFee = adminBase * adminRate;
  if (adminMode === 'manual') adminFee = clampNumber(input.manualAdminAmount);

  let taxBase = appliedFB + discountedRental + ceremonyCost + adminFee;
  if (taxMode === 'fb-admin') taxBase = appliedFB + adminFee;
  if (taxMode === 'everything') taxBase = appliedFB + discountedRental + ceremonyCost + adminFee;
  if (taxMode === 'none') taxBase = 0;

  const tax = taxBase * taxRate;
  const estimatedTotal = appliedFB + adminFee + tax + discountedRental + ceremonyCost;
  const soldOut = isSoldOut(resolved.month, resolved.day);
  const budgetStatus = getBudgetStatus(
    estimatedTotal,
    clampNumber(input.budgetMin, TUPPER_MANOR_2027.assumptions.budgetMin),
    clampNumber(input.budgetMax, TUPPER_MANOR_2027.assumptions.budgetMax),
    soldOut
  );

  const warnings = [];
  if (input.engagementDiscountEnabled && dateRate.discountRate > 0) warnings.push(TUPPER_MANOR_2027.assumptions.discountWarning);
  if (input.engagementDiscountEnabled && dateRate.discountRate === 0 && dateRate.discountNote) warnings.push(dateRate.discountNote);
  if (soldOut) warnings.push(dateRate.note || TUPPER_MANOR_2027.assumptions.soldOutWarning);
  if (duet.marketWarning) warnings.push('The lobster tail duet is market price. Enter a custom estimate and confirm current pricing with the venue.');
  if (cocktail.selected.some((item) => item.marketWarning)) warnings.push('Water\'s Edge Raw Bar is marked market price and subject to change.');
  if (bar.note) warnings.push(bar.note);

  return {
    guests,
    month: resolved.month,
    day: resolved.day,
    season: resolved.season,
    dateRate,
    soldOut,
    referenceOnly: Boolean(dateRate.referenceOnly),
    bar,
    duet,
    adminMode,
    taxMode,
    basePackage,
    barCost,
    optionalAppetizer,
    duetUpgrade,
    cocktailEnhancements: cocktail.total,
    cocktailLabels: cocktail.selected.map((item) => item.label),
    lateNightSnacks: snacks.total,
    snackLabels: snacks.selected.map((item) => item.label),
    customFoodBeverageAmount,
    rawFB,
    fbMinimum: dateRate.fbMinimum,
    minimumAdjustment,
    appliedFB,
    originalRental,
    discountRate,
    discountAmount,
    discountedRental,
    ceremonyCost,
    adminFee,
    tax,
    taxRate,
    estimatedTotal,
    perGuestTotal: estimatedTotal / guests,
    budgetStatus,
    warnings
  };
}

function collectInput() {
  return {
    guestCount: $('guestCount').value,
    month: $('month').value,
    day: $('dayType').value,
    budgetMin: $('budgetMin').value,
    budgetMax: $('budgetMax').value,
    ceremonyEnabled: $('ceremonyEnabled').checked,
    engagementDiscountEnabled: $('engagementDiscountEnabled').checked,
    customFoodBeverageAmount: $('customFoodBeverageAmount').value,
    barOption: $('barOption').value,
    consumptionTabAmount: $('consumptionTabAmount').value,
    optionalAppetizer: $('optionalAppetizer').checked,
    duetUpgrade: $('duetUpgrade').value,
    marketDuetAmount: $('marketDuetAmount').value,
    cocktailEnhancements: [...document.querySelectorAll('[name="cocktailEnhancement"]:checked')].map((item) => item.value),
    lateNightSnacks: [...document.querySelectorAll('[name="lateNightSnack"]:checked')].map((item) => item.value),
    adminMode: $('adminMode').value,
    adminRate: $('adminRate').value,
    manualAdminAmount: $('manualAdminAmount').value,
    maTaxRate: $('maTaxRate').value,
    cityTaxRate: $('cityTaxRate').value,
    taxMode: $('taxMode').value
  };
}

function renderDateInsight(estimate) {
  const discountText = estimate.discountRate > 0
    ? `${formatPercent(estimate.discountRate)} gift discount on property rental when enabled`
    : 'No property-rental gift discount is modeled for this date';
  const status = estimate.soldOut ? 'Sold out in PDF' : 'Priced in PDF';
  $('dateInsight').innerHTML = `
    <strong>${escapeHtml(estimate.month)} ${escapeHtml(estimate.day)} · ${escapeHtml(estimate.season)} · ${status}</strong>
    <p>Published minimum ${formatMoney(estimate.fbMinimum)} · rental ${formatMoney(estimate.originalRental)} before discount · ${escapeHtml(discountText)}.</p>
  `;
}

function renderCostTiles(estimate) {
  const pieces = [
    { label: 'Applied F&B', value: estimate.appliedFB, detail: `${formatMoney(estimate.rawFB)} raw subtotal` },
    { label: 'Rental + ceremony', value: estimate.discountedRental + estimate.ceremonyCost, detail: `${formatMoney(estimate.discountAmount)} rental discount` },
    { label: 'Administrative fee', value: estimate.adminFee, detail: `${formatPercent(TUPPER_MANOR_2027.assumptions.adminRate)} default rate` },
    { label: 'Estimated tax', value: estimate.tax, detail: `${formatPercent(estimate.taxRate)} combined MA/city` }
  ];
  const total = Math.max(estimate.estimatedTotal, 1);
  $('costTiles').innerHTML = pieces.map((piece) => {
    const width = Math.max(3, Math.min(100, (piece.value / total) * 100));
    return `
      <div class="cost-tile">
        <span>${escapeHtml(piece.label)}</span>
        <strong>${formatMoney(piece.value)}</strong>
        <small>${escapeHtml(piece.detail)}</small>
        <div class="cost-bar"><span style="width:${width.toFixed(1)}%"></span></div>
      </div>
    `;
  }).join('');
}

function renderEstimate() {
  const input = collectInput();
  const estimate = calculateEstimate(input);
  $('estimatedTotal').textContent = formatMoney(estimate.estimatedTotal);
  $('perGuestTotal').textContent = `${formatMoney(estimate.perGuestTotal)} per guest`;
  $('budgetBadge').textContent = estimate.budgetStatus.label;
  $('budgetBadge').className = `badge ${estimate.budgetStatus.className}`;

  renderDateInsight(estimate);
  renderCostTiles(estimate);

  const rows = [
    ['Guest count', estimate.guests],
    ['Season', estimate.season],
    ['Month / day', `${estimate.month} ${estimate.day}`],
    ['Availability', estimate.soldOut ? 'Sold out or unavailable in the PDF' : 'Priced in the PDF'],
    ['Base package subtotal', `${formatMoney(estimate.basePackage)} (${formatMoney(TUPPER_MANOR_2027.assumptions.packagePricePerPerson)}/guest)`],
    ['Bar subtotal', `${formatMoney(estimate.barCost)} · ${estimate.bar.label}`],
    ['Optional appetizer', formatMoney(estimate.optionalAppetizer)],
    ['Duet upgrade', `${formatMoney(estimate.duetUpgrade)} · ${estimate.duet.label}`],
    ['Cocktail enhancements', `${formatMoney(estimate.cocktailEnhancements)} · ${formatList(estimate.cocktailLabels)}`],
    ['Late-night snacks', `${formatMoney(estimate.lateNightSnacks)} · ${formatList(estimate.snackLabels)}`],
    ['Custom F&B amount', formatMoney(estimate.customFoodBeverageAmount)],
    ['Raw F&B subtotal', formatMoney(estimate.rawFB)],
    ['Published F&B minimum', formatMoney(estimate.fbMinimum)],
    ['Minimum adjustment', formatMoney(estimate.minimumAdjustment)],
    ['Applied F&B', formatMoney(estimate.appliedFB)],
    ['Property rental before discount', formatMoney(estimate.originalRental)],
    ['Engagement gift discount', `${formatMoney(estimate.discountAmount)} (${formatPercent(estimate.discountRate)})`],
    ['Property rental after discount', formatMoney(estimate.discountedRental)],
    ['Ceremony fee', formatMoney(estimate.ceremonyCost)],
    ['Administrative fee', formatMoney(estimate.adminFee)],
    ['Tax', formatMoney(estimate.tax)],
    ['Estimated total', formatMoney(estimate.estimatedTotal)]
  ];
  $('estimateRows').innerHTML = rows.map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join('');
  $('activeWarnings').innerHTML = estimate.warnings.map((warning) => `<div class="notice notice--warning">${escapeHtml(warning)}</div>`).join('');
  $('recommendation').innerHTML = getRecommendation(estimate).map((item) => `<p>${escapeHtml(item)}</p>`).join('');
  $('consumptionTabWrap').classList.toggle('hidden', input.barOption !== 'consumption');
  $('marketDuetWrap').classList.toggle('hidden', input.duetUpgrade !== 'lobster-tail');
  $('manualAdminWrap').classList.toggle('hidden', input.adminMode !== 'manual');
  renderComparison(input);
  return estimate;
}

function getRecommendation(estimate) {
  const messages = [];
  if (estimate.soldOut) messages.push('Treat this as a reference only because the PDF marks the date option as sold out or not normally sellable.');
  else if (estimate.estimatedTotal <= 30000) messages.push('This is one of the cleaner value ranges for the venue, leaving more room for outside vendors and personal details.');
  else if (estimate.estimatedTotal <= 35000) messages.push('This is within a common venue-only target range, but bar tier and add-ons should be watched carefully.');
  else messages.push('This may become expensive once outside vendors, gratuity, attire, music, floral, photography, and transportation are added.');
  if (estimate.minimumAdjustment > 0) messages.push('Your selected guest count and add-ons do not reach the published F&B minimum, so the calculator adds the minimum adjustment.');
  if (estimate.day === 'Friday') messages.push('Friday usually prices better than Saturday while preserving an evening celebration feel.');
  if (estimate.day === 'Sunday') messages.push('Sunday can be a strong value, though guests may leave earlier because of Monday schedules.');
  if (estimate.day === 'NYE') messages.push('NYE uses Holiday Saturday/NYE pricing and should be confirmed carefully because the gift discount language does not list NYE.');
  return messages;
}

function getComparableInputs(baseInput, month, day) {
  return {
    ...baseInput,
    month,
    day,
    budgetMin: baseInput.budgetMin || TUPPER_MANOR_2027.assumptions.budgetMin,
    budgetMax: baseInput.budgetMax || TUPPER_MANOR_2027.assumptions.budgetMax
  };
}

function buildComparisonRows(baseInput) {
  const rows = [];
  TUPPER_MANOR_2027.months.forEach((month) => {
    getAvailableDayTypes(month.name).forEach((day) => {
      const estimate = calculateEstimate(getComparableInputs(baseInput, month.name, day));
      rows.push(estimate);
    });
  });
  return rows.sort((a, b) => {
    if (a.soldOut !== b.soldOut) return a.soldOut ? 1 : -1;
    return a.estimatedTotal - b.estimatedTotal;
  });
}

function renderComparison(baseInput) {
  const rows = buildComparisonRows(baseInput);
  const current = calculateEstimate(baseInput);
  const availableRows = rows.filter((row) => !row.soldOut);
  const lowest = availableRows[0];
  const currentRank = availableRows.findIndex((row) => row.month === current.month && row.day === current.day) + 1;

  $('comparisonSummary').innerHTML = lowest ? `
    <strong>Lowest available shown:</strong> ${escapeHtml(lowest.month)} ${escapeHtml(lowest.day)} at ${formatMoney(lowest.estimatedTotal)}.
    <span class="row-note">Current selection ${current.soldOut ? 'is sold out/reference only' : `ranks #${currentRank || 'n/a'} among available options`} using the active guest, bar, add-on, fee, and tax assumptions.</span>
  ` : 'No available date options found.';

  $('comparisonRows').innerHTML = rows.map((estimate) => {
    const isCurrent = estimate.month === current.month && estimate.day === current.day;
    const isLowest = lowest && estimate.month === lowest.month && estimate.day === lowest.day;
    const classes = [
      isCurrent ? 'is-current' : '',
      isLowest ? 'is-lowest' : '',
      estimate.soldOut ? 'is-soldout' : ''
    ].filter(Boolean).join(' ');
    const availability = estimate.soldOut ? 'Sold out / reference only' : 'Priced';
    const note = estimate.dateRate.discountNote || estimate.dateRate.note || '';
    return `
      <tr class="${classes}">
        <td><strong>${escapeHtml(estimate.month)} ${escapeHtml(estimate.day)}</strong><span class="row-note">${escapeHtml(estimate.season)}${isCurrent ? ' · current' : ''}${isLowest ? ' · lowest available' : ''}</span></td>
        <td>${formatMoney(estimate.fbMinimum)}</td>
        <td>${formatMoney(estimate.discountedRental)}<span class="row-note">${formatMoney(estimate.discountAmount)} discount</span></td>
        <td>${escapeHtml(availability)}${note ? `<span class="row-note">${escapeHtml(note)}</span>` : ''}</td>
        <td><strong>${formatMoney(estimate.estimatedTotal)}</strong></td>
        <td>${formatMoney(estimate.perGuestTotal)}</td>
      </tr>
    `;
  }).join('');
}

function renderSeasonCards() {
  const seasons = ['Winter', 'Spring', 'Summer & Fall', 'Holiday'];
  $('seasonCards').innerHTML = seasons.map((season) => {
    const months = TUPPER_MANOR_2027.months.filter((month) => month.season === season).map((month) => month.name).join(', ');
    const rows = TUPPER_MANOR_2027.dayOrder
      .filter((day) => TUPPER_MANOR_2027.dateRates[season][day])
      .map((day) => {
        const rate = TUPPER_MANOR_2027.dateRates[season][day];
        const discountText = rate.discountRate > 0 ? `${formatMoney(rate.rentalFee * (1 - rate.discountRate))} after ${formatPercent(rate.discountRate)} gift` : `${formatMoney(rate.rentalFee)} rental`;
        return `<div><dt>${escapeHtml(day)}</dt><dd>${formatMoney(rate.fbMinimum)} min · ${discountText}</dd></div>`;
      }).join('');
    return `
      <article class="season-card">
        <h3>${escapeHtml(season)}</h3>
        <p>${escapeHtml(months)}</p>
        <dl>${rows}</dl>
      </article>
    `;
  }).join('');
}

function safeReadScenarios() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}

function safeWriteScenarios(scenarios) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scenarios));
    return true;
  } catch {
    return false;
  }
}

function renderScenarios() {
  const scenarios = safeReadScenarios();
  $('scenarioRows').innerHTML = scenarios.length ? scenarios.map((scenario) => `
    <tr>
      <td><input class="rename-input" data-id="${escapeHtml(scenario.id)}" value="${escapeHtml(scenario.name)}"></td>
      <td>${escapeHtml(scenario.month)}</td>
      <td>${escapeHtml(scenario.day)}</td>
      <td>${escapeHtml(scenario.guests)}</td>
      <td>${escapeHtml(scenario.bar)}</td>
      <td>${formatMoney(scenario.discountedRental)}</td>
      <td>${formatMoney(scenario.appliedFB)}</td>
      <td><strong>${formatMoney(scenario.estimatedTotal)}</strong></td>
      <td>
        <button type="button" class="button button--small button--secondary" data-load="${escapeHtml(scenario.id)}">Load</button>
        <button type="button" class="button button--small button--danger" data-delete="${escapeHtml(scenario.id)}">Delete</button>
      </td>
    </tr>`).join('') : '<tr><td colspan="9">No saved scenarios yet.</td></tr>';
}

function saveScenario() {
  const estimate = renderEstimate();
  const input = collectInput();
  const scenarios = safeReadScenarios();
  scenarios.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: $('scenarioName').value.trim() || `${estimate.month} ${estimate.day}`,
    month: estimate.month,
    day: estimate.day,
    guests: estimate.guests,
    bar: estimate.bar.label,
    discountedRental: estimate.discountedRental,
    appliedFB: estimate.appliedFB,
    estimatedTotal: estimate.estimatedTotal,
    input
  });
  safeWriteScenarios(scenarios);
  renderScenarios();
}

function setCheckboxGroup(name, selectedIds) {
  document.querySelectorAll(`[name="${name}"]`).forEach((item) => {
    item.checked = (selectedIds || []).includes(item.value);
  });
}

function applyInput(input) {
  $('guestCount').value = input.guestCount || TUPPER_MANOR_2027.assumptions.defaultGuests;
  $('month').value = input.month || 'May';
  syncDayOptions(input.day || 'Friday');
  $('dayType').value = resolveDate($('month').value, input.day || 'Friday').day;
  $('budgetMin').value = input.budgetMin || TUPPER_MANOR_2027.assumptions.budgetMin;
  $('budgetMax').value = input.budgetMax || TUPPER_MANOR_2027.assumptions.budgetMax;
  $('ceremonyEnabled').checked = Boolean(input.ceremonyEnabled);
  $('engagementDiscountEnabled').checked = Boolean(input.engagementDiscountEnabled);
  $('customFoodBeverageAmount').value = input.customFoodBeverageAmount || 0;
  $('barOption').value = input.barOption || getDefaultOptionId(TUPPER_MANOR_2027.barOptions);
  $('consumptionTabAmount').value = input.consumptionTabAmount || 0;
  $('optionalAppetizer').checked = Boolean(input.optionalAppetizer);
  $('duetUpgrade').value = input.duetUpgrade || 'none';
  $('marketDuetAmount').value = input.marketDuetAmount || 0;
  $('adminMode').value = input.adminMode || getDefaultOptionId(TUPPER_MANOR_2027.adminModes);
  $('adminRate').value = input.adminRate || 22;
  $('manualAdminAmount').value = input.manualAdminAmount || 0;
  $('maTaxRate').value = input.maTaxRate || 6.25;
  $('cityTaxRate').value = input.cityTaxRate || 0.75;
  $('taxMode').value = input.taxMode || getDefaultOptionId(TUPPER_MANOR_2027.taxModes);
  setCheckboxGroup('cocktailEnhancement', input.cocktailEnhancements || []);
  setCheckboxGroup('lateNightSnack', input.lateNightSnacks || []);
  renderEstimate();
}

function loadScenario(id) {
  const scenario = safeReadScenarios().find((item) => item.id === id);
  if (scenario && scenario.input) applyInput(scenario.input);
}

function applyPreset(preset) {
  applyInput({
    guestCount: 100,
    month: preset.month,
    day: preset.day,
    barOption: 'tupper',
    ceremonyEnabled: true,
    engagementDiscountEnabled: true,
    budgetMin: 25000,
    budgetMax: 35000,
    adminMode: getDefaultOptionId(TUPPER_MANOR_2027.adminModes),
    adminRate: 22,
    taxMode: getDefaultOptionId(TUPPER_MANOR_2027.taxModes),
    maTaxRate: 6.25,
    cityTaxRate: 0.75,
    duetUpgrade: 'none',
    cocktailEnhancements: [],
    lateNightSnacks: []
  });
  $('scenarioName').value = `${preset.label}, 100 guests, Tupper bar, ceremony yes`;
}

function syncDayOptions(preferredDay) {
  const month = $('month').value || 'May';
  const availableDays = getAvailableDayTypes(month);
  const selectedDay = availableDays.includes(preferredDay || $('dayType').value) ? (preferredDay || $('dayType').value) : availableDays[0];
  $('dayType').innerHTML = availableDays.map((day) => `<option value="${escapeHtml(day)}" ${day === selectedDay ? 'selected' : ''}>${escapeHtml(getDayLabel(month, day))}</option>`).join('');
}

function checkboxHtml(name, item) {
  const warning = item.marketWarning ? ' · market price' : '';
  return `<label class="check-row"><input type="checkbox" name="${name}" value="${escapeHtml(item.id)}"><span>${escapeHtml(item.label)} · ${formatMoney(item.pricePerPerson)}/person${escapeHtml(warning)}</span></label>`;
}

function renderPackageGuide() {
  $('includedList').innerHTML = TUPPER_MANOR_2027.included.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  $('barGuide').innerHTML = TUPPER_MANOR_2027.barOptions
    .filter((bar) => bar.id !== 'none' && bar.id !== 'cash' && bar.id !== 'consumption')
    .map((bar) => `<div><span>${escapeHtml(bar.label)}</span><strong>${formatMoney(bar.pricePerPerson)}/guest</strong></div>`)
    .join('');
  const addOns = [
    { label: 'Optional appetizer course', price: TUPPER_MANOR_2027.assumptions.appetizerPricePerPerson },
    { label: 'Duet upgrades except lobster tail', price: 10 },
    { label: 'Cocktail enhancements', price: '10-30' },
    { label: 'Late-night snacks', price: '9-16' }
  ];
  $('addOnGuide').innerHTML = addOns.map((item) => `<div><span>${escapeHtml(item.label)}</span><strong>$${escapeHtml(item.price)}/guest</strong></div>`).join('');
}

function populateOptions() {
  $('month').innerHTML = TUPPER_MANOR_2027.months.map((month) => `<option value="${escapeHtml(month.name)}" ${month.name === 'May' ? 'selected' : ''}>${escapeHtml(month.name)} (${escapeHtml(month.season)})</option>`).join('');
  syncDayOptions('Friday');
  $('barOption').innerHTML = TUPPER_MANOR_2027.barOptions.map((bar) => `<option value="${escapeHtml(bar.id)}" ${bar.default ? 'selected' : ''}>${escapeHtml(bar.label)} · ${bar.custom ? 'custom estimate' : formatMoney(bar.pricePerPerson) + '/person'}</option>`).join('');
  $('duetUpgrade').innerHTML = TUPPER_MANOR_2027.duetUpgrades.map((duet) => `<option value="${escapeHtml(duet.id)}">${escapeHtml(duet.label)} · ${duet.custom ? 'market price/custom' : formatMoney(duet.pricePerPerson) + '/person'}</option>`).join('');
  $('adminMode').innerHTML = TUPPER_MANOR_2027.adminModes.map((mode) => `<option value="${escapeHtml(mode.id)}" ${mode.default ? 'selected' : ''}>${escapeHtml(mode.label)}</option>`).join('');
  $('taxMode').innerHTML = TUPPER_MANOR_2027.taxModes.map((mode) => `<option value="${escapeHtml(mode.id)}" ${mode.default ? 'selected' : ''}>${escapeHtml(mode.label)}</option>`).join('');
  $('cocktailOptions').innerHTML = TUPPER_MANOR_2027.cocktailEnhancements.map((item) => checkboxHtml('cocktailEnhancement', item)).join('');
  $('snackOptions').innerHTML = TUPPER_MANOR_2027.lateNightSnacks.map((item) => checkboxHtml('lateNightSnack', item)).join('');
  $('questionChecklist').innerHTML = TUPPER_MANOR_2027.confirmationQuestions.map((question, index) => `<label class="check-row"><input type="checkbox" id="question-${index}"><span>${escapeHtml(question)}</span></label>`).join('');
  $('presetButtons').innerHTML = TUPPER_MANOR_2027.presets.map((preset, index) => `<button class="button button--small button--secondary" type="button" data-preset="${index}">${escapeHtml(preset.label)}</button>`).join('');
  renderPackageGuide();
  renderSeasonCards();
}

function bindEvents() {
  $('plannerForm').addEventListener('input', (event) => {
    if (event.target.id === 'month') syncDayOptions();
    renderEstimate();
  });
  $('plannerForm').addEventListener('change', (event) => {
    if (event.target.id === 'month') syncDayOptions();
    renderEstimate();
  });
  $('saveScenario').addEventListener('click', saveScenario);
  $('clearScenarios').addEventListener('click', () => { safeWriteScenarios([]); renderScenarios(); });
  $('printButton').addEventListener('click', () => window.print());
  $('presetButtons').addEventListener('click', (event) => {
    const index = event.target.dataset.preset;
    if (index !== undefined) applyPreset(TUPPER_MANOR_2027.presets[Number(index)]);
  });
  $('scenarioRows').addEventListener('click', (event) => {
    const deleteId = event.target.dataset.delete;
    const loadId = event.target.dataset.load;
    if (deleteId) {
      safeWriteScenarios(safeReadScenarios().filter((scenario) => scenario.id !== deleteId));
      renderScenarios();
    }
    if (loadId) loadScenario(loadId);
  });
  $('scenarioRows').addEventListener('change', (event) => {
    const id = event.target.dataset.id;
    if (!id) return;
    const scenarios = safeReadScenarios().map((scenario) => scenario.id === id ? { ...scenario, name: event.target.value.trim() || scenario.name } : scenario);
    safeWriteScenarios(scenarios);
    renderScenarios();
  });
}

function init() {
  populateOptions();
  bindEvents();
  renderEstimate();
  renderScenarios();
}

if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', init);
if (typeof module !== 'undefined') module.exports = {
  TUPPER_MANOR_2027,
  calculateEstimate,
  getSeason,
  getAvailableDayTypes,
  getDateRate,
  isSoldOut,
  buildComparisonRows
};
