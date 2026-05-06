'use strict';

const TUPPER_MANOR_2027 = {
  venue: 'Tupper Manor',
  location: 'Beverly, MA',
  packageYear: 2027,
  sourceNote: 'PDF attachment was not present in the workspace; values come from the project request, which says they are from the 2027 Tupper Manor wedding package PDF.',
  assumptions: {
    defaultGuests: 100,
    budgetMin: 25000,
    budgetMax: 35000,
    packagePricePerPerson: 140,
    appetizerPricePerPerson: 8,
    ceremonyFee: 1000,
    ceremonyNote: 'Adds 30 minutes',
    maTaxRate: 0.0625,
    cityTaxRate: 0.0075,
    adminRate: 0.22,
    discountWarning: 'This estimate applies the engagement gift discount from the PDF. The PDF states this special is valid through June 1, 2026 and must be confirmed with the venue.',
    soldOutWarning: 'This date is listed as sold out in the PDF. Confirm availability directly with the venue.',
    gratuityWarning: 'The 22% administrative fee is not a gratuity. Additional gratuity may still be expected.',
    barNote: 'Open bar pricing is based on 4.5 hours. Bar closes 30 minutes before event end.'
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
  dayTypes: ['Friday', 'Saturday', 'Sunday', 'Holiday Sunday', 'NYE'],
  dateRates: {
    'Summer & Fall': {
      Saturday: { fbMinimum: 20000, rentalFee: 10000, discountRate: 0.15 },
      Friday: { fbMinimum: 17000, rentalFee: 7500, discountRate: 0.20 },
      'Holiday Sunday': { fbMinimum: 17000, rentalFee: 7500, discountRate: 0.20 },
      Sunday: { fbMinimum: 15000, rentalFee: 5500, discountRate: 0.20 },
      NYE: { fbMinimum: 17000, rentalFee: 7500, discountRate: 0.20 }
    },
    Holiday: {
      Saturday: { fbMinimum: 18000, rentalFee: 7500, discountRate: 0.50 },
      NYE: { fbMinimum: 18000, rentalFee: 7500, discountRate: 0.50 },
      Friday: { fbMinimum: 15000, rentalFee: 5500, discountRate: 0.50 },
      Sunday: { fbMinimum: 13000, rentalFee: 3500, discountRate: 0.50 },
      'Holiday Sunday': { fbMinimum: 13000, rentalFee: 3500, discountRate: 0.50 }
    },
    Winter: {
      Saturday: { fbMinimum: 12000, rentalFee: 1000, discountRate: 0.50 },
      Friday: { fbMinimum: 10000, rentalFee: 1000, discountRate: 0.50 },
      Sunday: { fbMinimum: 10000, rentalFee: 1000, discountRate: 0.50 },
      'Holiday Sunday': { fbMinimum: 10000, rentalFee: 1000, discountRate: 0.50 },
      NYE: { fbMinimum: 12000, rentalFee: 1000, discountRate: 0.50 }
    },
    Spring: {
      Saturday: { fbMinimum: 10000, rentalFee: 2000, discountRate: 0.50, soldOut: true, note: 'Spring Saturday is sold out; prompt did not provide separate Saturday pricing, so Friday/Sunday pricing is shown as a reference.' },
      Friday: { fbMinimum: 10000, rentalFee: 2000, discountRate: 0.50 },
      Sunday: { fbMinimum: 10000, rentalFee: 2000, discountRate: 0.50 },
      'Holiday Sunday': { fbMinimum: 10000, rentalFee: 2000, discountRate: 0.50 },
      NYE: { fbMinimum: 10000, rentalFee: 2000, discountRate: 0.50 }
    }
  },
  soldOutRules: [
    { season: 'Spring', day: 'Saturday' },
    { month: 'June', day: 'Saturday' },
    { month: 'August', day: 'Saturday' }
  ],
  included: [
    'Five butler-passed hors d’oeuvres',
    'Champagne toast',
    'Rolls and butter',
    'One salad',
    'Two protein entrées and one vegetarian OR one duet entrée and one vegetarian',
    'House red and white wine service with dinner',
    'Cake cutting and presentation',
    'Mini Italian pastries',
    'Coffee, decaf, tea',
    'Ivory linen and napkin',
    'White china, flatware, stemware',
    'Fruitwood Chiavari chairs'
  ],
  barOptions: [
    { id: 'none', label: 'No hosted bar', pricePerPerson: 0 },
    { id: 'beer-wine', label: 'Beer, Wine & Non-Alcoholic', pricePerPerson: 48 },
    { id: 'tupper', label: 'Tupper Brands + Beer, Wine & Non-Alcoholic', pricePerPerson: 58, default: true },
    { id: 'premium', label: 'Premium Brands + Beer, Wine & Non-Alcoholic', pricePerPerson: 63 },
    { id: 'cash', label: 'Cash bar (guest-paid)', pricePerPerson: 0, note: 'Guest-paid; $0 venue estimate entered here.' },
    { id: 'consumption', label: 'Consumption tab', pricePerPerson: 0, custom: true }
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
    { id: 'crudite', label: 'Vegetable Crudité', pricePerPerson: 10 },
    { id: 'raw-bar', label: 'Water’s Edge Raw Bar', pricePerPerson: 30, marketWarning: true },
    { id: 'trio', label: 'Cheese, Crudité & Baked Brie Trio', pricePerPerson: 20 },
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
    { id: 'fb-only', label: 'Food & beverage only' },
    { id: 'fb-rental-ceremony', label: 'Food & beverage + rental + ceremony' },
    { id: 'everything', label: 'Everything taxable / conservative estimate' },
    { id: 'custom-rate', label: 'Custom admin rate on F&B' },
    { id: 'manual', label: 'Custom/manual admin amount' }
  ],
  taxModes: [
    { id: 'fb-admin', label: 'Applied F&B + administrative fee' },
    { id: 'fb-rental-ceremony-admin', label: 'F&B + rental + ceremony + admin' },
    { id: 'everything', label: 'Everything taxable / conservative estimate' },
    { id: 'none', label: 'No tax (for comparison only)' }
  ],
  confirmationQuestions: [
    'Does the 22% administrative fee apply only to food and beverage?',
    'Does the F&B minimum include open bar?',
    'Does the F&B minimum include cocktail enhancements and late-night snacks?',
    'Is the engagement gift discount still available for our selected date?',
    'Is our selected date actually available?',
    'Is staff gratuity expected in addition to the administrative fee?',
    'What is the exact all-in estimate for our guest count?',
    'Are vendor meals charged separately?',
    'Are ceremony chairs and setup included in the ceremony fee?',
    'What is the rain plan?',
    'What is the final guest count deadline?',
    'What is the deposit and cancellation policy?',
    'Are there service, setup, AV, staffing, or overtime fees not shown in the PDF?'
  ],
  presets: [
    { label: 'May Friday', month: 'May', day: 'Friday' },
    { label: 'May Sunday', month: 'May', day: 'Sunday' },
    { label: 'June Sunday', month: 'June', day: 'Sunday' },
    { label: 'June Friday', month: 'June', day: 'Friday' },
    { label: 'September Sunday', month: 'September', day: 'Sunday' },
    { label: 'September Friday', month: 'September', day: 'Friday' },
    { label: 'Winter Saturday', month: 'January', day: 'Saturday' },
    { label: 'Holiday Sunday', month: 'November', day: 'Sunday' }
  ]
};

const STORAGE_KEY = 'tupperManor2027Scenarios';
const $ = (id) => (typeof document === 'undefined' ? null : document.getElementById(id));
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function clampNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : fallback;
}

function getSeason(month) {
  return (TUPPER_MANOR_2027.months.find((item) => item.name === month) || TUPPER_MANOR_2027.months[0]).season;
}

function getDateRate(month, day) {
  const season = getSeason(month);
  return TUPPER_MANOR_2027.dateRates[season][day] || TUPPER_MANOR_2027.dateRates[season].Sunday;
}

function isSoldOut(month, day) {
  const season = getSeason(month);
  return TUPPER_MANOR_2027.soldOutRules.some((rule) => (!rule.month || rule.month === month) && (!rule.season || rule.season === season) && rule.day === day);
}

function getBudgetStatus(total, budgetMin, budgetMax) {
  if (total < 30000) return { label: 'Strong value', className: 'badge--strong' };
  if (total >= 30000 && total <= 35000) return { label: 'Within budget', className: 'badge--ok' };
  if (total > 35000 && total <= budgetMax) return { label: 'Tight but possible', className: 'badge--tight' };
  if (total > 35000 && total < 40000) return { label: 'Over preferred budget', className: 'badge--over' };
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
  const month = input.month || 'May';
  const day = input.day || 'Friday';
  const season = getSeason(month);
  const dateRate = getDateRate(month, day);
  const bar = TUPPER_MANOR_2027.barOptions.find((item) => item.id === input.barOption) || TUPPER_MANOR_2027.barOptions.find((item) => item.default);
  const duet = TUPPER_MANOR_2027.duetUpgrades.find((item) => item.id === input.duetUpgrade) || TUPPER_MANOR_2027.duetUpgrades[0];
  const adminRate = clampNumber(input.adminRate, 22) / 100;
  const taxRate = (clampNumber(input.maTaxRate, 6.25) + clampNumber(input.cityTaxRate, 0.75)) / 100;

  // Core F&B calculation: package, bar, appetizer, add-ons, duet, and custom F&B are added before comparing to the date minimum.
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

  // Rental discount is explicitly optional and applied only to property rental, not F&B or fees.
  const originalRental = dateRate.rentalFee;
  const discountAmount = input.engagementDiscountEnabled ? originalRental * dateRate.discountRate : 0;
  const discountedRental = originalRental - discountAmount;
  const ceremonyCost = input.ceremonyEnabled ? TUPPER_MANOR_2027.assumptions.ceremonyFee : 0;

  let adminBase = appliedFB;
  if (input.adminMode === 'fb-rental-ceremony') adminBase = appliedFB + discountedRental + ceremonyCost;
  if (input.adminMode === 'everything') adminBase = appliedFB + discountedRental + ceremonyCost;
  let adminFee = adminBase * adminRate;
  if (input.adminMode === 'manual') adminFee = clampNumber(input.manualAdminAmount);

  let taxBase = appliedFB + adminFee;
  if (input.taxMode === 'fb-rental-ceremony-admin') taxBase = appliedFB + discountedRental + ceremonyCost + adminFee;
  if (input.taxMode === 'everything') taxBase = appliedFB + discountedRental + ceremonyCost + adminFee;
  if (input.taxMode === 'none') taxBase = 0;
  const tax = taxBase * taxRate;
  const estimatedTotal = appliedFB + adminFee + tax + discountedRental + ceremonyCost;
  const budgetStatus = getBudgetStatus(estimatedTotal, clampNumber(input.budgetMin, 25000), clampNumber(input.budgetMax, 35000));

  const warnings = [];
  if (input.engagementDiscountEnabled) warnings.push(TUPPER_MANOR_2027.assumptions.discountWarning);
  if (isSoldOut(month, day)) warnings.push(TUPPER_MANOR_2027.assumptions.soldOutWarning);
  if (duet.marketWarning) warnings.push('The lobster tail duet is market price. Enter a custom estimate and confirm current pricing with the venue.');
  if (cocktail.selected.some((item) => item.marketWarning)) warnings.push('Water’s Edge Raw Bar has a market-price warning. Confirm current pricing with the venue.');

  return {
    guests, month, day, season, dateRate, soldOut: isSoldOut(month, day), bar, duet,
    basePackage, barCost, optionalAppetizer, duetUpgrade, cocktailEnhancements: cocktail.total,
    cocktailLabels: cocktail.selected.map((item) => item.label), lateNightSnacks: snacks.total,
    snackLabels: snacks.selected.map((item) => item.label), customFoodBeverageAmount,
    rawFB, fbMinimum: dateRate.fbMinimum, minimumAdjustment, appliedFB, originalRental,
    discountRate: dateRate.discountRate, discountAmount, discountedRental, ceremonyCost,
    adminFee, tax, estimatedTotal, budgetStatus, warnings
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

function formatMoney(value) { return currency.format(Math.round(value)); }
function formatList(items) { return items.length ? items.join(', ') : 'None selected'; }

function renderEstimate() {
  const input = collectInput();
  const estimate = calculateEstimate(input);
  $('estimatedTotal').textContent = formatMoney(estimate.estimatedTotal);
  $('budgetBadge').textContent = estimate.budgetStatus.label;
  $('budgetBadge').className = `badge ${estimate.budgetStatus.className}`;

  const rows = [
    ['Guest count', estimate.guests], ['Season', estimate.season], ['Month', estimate.month], ['Day', estimate.day],
    ['Sold-out status / warning', estimate.soldOut ? TUPPER_MANOR_2027.assumptions.soldOutWarning : 'No sold-out warning for this selection'],
    ['Base package subtotal', formatMoney(estimate.basePackage)], ['Bar subtotal', `${formatMoney(estimate.barCost)} · ${estimate.bar.label}`],
    ['Optional appetizer', formatMoney(estimate.optionalAppetizer)], ['Duet upgrade', `${formatMoney(estimate.duetUpgrade)} · ${estimate.duet.label}`],
    ['Cocktail hour enhancements', `${formatMoney(estimate.cocktailEnhancements)} · ${formatList(estimate.cocktailLabels)}`],
    ['Late-night snacks', `${formatMoney(estimate.lateNightSnacks)} · ${formatList(estimate.snackLabels)}`],
    ['Custom F&B amount', formatMoney(estimate.customFoodBeverageAmount)], ['Raw F&B subtotal', formatMoney(estimate.rawFB)],
    ['F&B minimum', formatMoney(estimate.fbMinimum)], ['Minimum adjustment', formatMoney(estimate.minimumAdjustment)], ['Applied F&B', formatMoney(estimate.appliedFB)],
    ['Original property rental', formatMoney(estimate.originalRental)], ['Engagement gift discount amount', `${formatMoney(estimate.discountAmount)} (${Math.round(estimate.discountRate * 100)}% when enabled)`],
    ['Discounted property rental', formatMoney(estimate.discountedRental)], ['Ceremony fee', formatMoney(estimate.ceremonyCost)],
    ['Administrative fee', formatMoney(estimate.adminFee)], ['Tax', formatMoney(estimate.tax)], ['Estimated total', formatMoney(estimate.estimatedTotal)],
    ['Budget status', estimate.budgetStatus.label]
  ];
  $('estimateRows').innerHTML = rows.map(([label, value]) => `<tr><th>${label}</th><td>${value}</td></tr>`).join('');
  $('activeWarnings').innerHTML = estimate.warnings.map((warning) => `<div class="notice notice--warning">${warning}</div>`).join('');
  $('recommendation').innerHTML = getRecommendation(estimate).map((item) => `<p>${item}</p>`).join('');
  $('consumptionTabWrap').classList.toggle('hidden', input.barOption !== 'consumption');
  $('marketDuetWrap').classList.toggle('hidden', input.duetUpgrade !== 'lobster-tail');
  $('manualAdminWrap').classList.toggle('hidden', input.adminMode !== 'manual');
  return estimate;
}

function getRecommendation(estimate) {
  const messages = [];
  if (estimate.estimatedTotal < 30000) messages.push('This looks like a strong value option and leaves more room for photography, music, floral, attire, and other wedding expenses.');
  else if (estimate.estimatedTotal <= 35000) messages.push('This is within the preferred venue budget, but add-ons and outside vendors should be controlled carefully.');
  else messages.push('This may exceed the preferred venue budget once outside vendors, gratuity, and personal items are included.');
  if (estimate.day === 'Friday') messages.push('Friday may be better for an evening celebration and wedding-weekend feel, but some guests may need to leave work early.');
  if (estimate.day === 'Sunday' || estimate.day === 'Holiday Sunday') messages.push('Sunday may be easier for some local guests and can be a good value, but Monday work schedules may limit late-night celebration.');
  if (estimate.day === 'Saturday') messages.push('Saturday is usually guest-friendly, but it may be the least budget-friendly option.');
  return messages;
}

function safeReadScenarios() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}
function safeWriteScenarios(scenarios) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(scenarios)); return true; } catch { return false; }
}
function renderScenarios() {
  const scenarios = safeReadScenarios();
  $('scenarioRows').innerHTML = scenarios.length ? scenarios.map((scenario) => `
    <tr>
      <td><input class="rename-input" data-id="${scenario.id}" value="${scenario.name}"></td>
      <td>${scenario.month}</td><td>${scenario.day}</td><td>${scenario.guests}</td><td>${scenario.bar}</td>
      <td>${formatMoney(scenario.discountedRental)}</td><td>${formatMoney(scenario.appliedFB)}</td><td><strong>${formatMoney(scenario.estimatedTotal)}</strong></td>
      <td><button type="button" class="button button--small button--danger" data-delete="${scenario.id}">Delete</button></td>
    </tr>`).join('') : '<tr><td colspan="9">No saved scenarios yet.</td></tr>';
}

function saveScenario() {
  const estimate = renderEstimate();
  const input = collectInput();
  const scenarios = safeReadScenarios();
  scenarios.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: $('scenarioName').value.trim() || `${estimate.month} ${estimate.day}`,
    month: estimate.month, day: estimate.day, guests: estimate.guests, bar: estimate.bar.label,
    discountedRental: estimate.discountedRental, appliedFB: estimate.appliedFB, estimatedTotal: estimate.estimatedTotal,
    input
  });
  safeWriteScenarios(scenarios);
  renderScenarios();
}

function applyPreset(preset) {
  $('guestCount').value = 100;
  $('month').value = preset.month;
  $('dayType').value = preset.day;
  $('barOption').value = 'tupper';
  $('ceremonyEnabled').checked = true;
  $('engagementDiscountEnabled').checked = true;
  $('scenarioName').value = `${preset.label}, 100 guests, Tupper bar, ceremony yes`;
  renderEstimate();
}

function populateOptions() {
  $('month').innerHTML = TUPPER_MANOR_2027.months.map((month) => `<option value="${month.name}" ${month.name === 'May' ? 'selected' : ''}>${month.name} (${month.season})</option>`).join('');
  $('dayType').innerHTML = TUPPER_MANOR_2027.dayTypes.map((day) => `<option value="${day}" ${day === 'Friday' ? 'selected' : ''}>${day}</option>`).join('');
  $('barOption').innerHTML = TUPPER_MANOR_2027.barOptions.map((bar) => `<option value="${bar.id}" ${bar.default ? 'selected' : ''}>${bar.label} · ${bar.custom ? 'custom estimate' : formatMoney(bar.pricePerPerson) + '/person'}</option>`).join('');
  $('duetUpgrade').innerHTML = TUPPER_MANOR_2027.duetUpgrades.map((duet) => `<option value="${duet.id}">${duet.label} · ${duet.custom ? 'market price/custom' : formatMoney(duet.pricePerPerson) + '/person'}</option>`).join('');
  $('adminMode').innerHTML = TUPPER_MANOR_2027.adminModes.map((mode) => `<option value="${mode.id}">${mode.label}</option>`).join('');
  $('taxMode').innerHTML = TUPPER_MANOR_2027.taxModes.map((mode) => `<option value="${mode.id}">${mode.label}</option>`).join('');
  $('includedList').innerHTML = TUPPER_MANOR_2027.included.map((item) => `<li>${item}</li>`).join('');
  $('cocktailOptions').innerHTML = TUPPER_MANOR_2027.cocktailEnhancements.map((item) => checkboxHtml('cocktailEnhancement', item)).join('');
  $('snackOptions').innerHTML = TUPPER_MANOR_2027.lateNightSnacks.map((item) => checkboxHtml('lateNightSnack', item)).join('');
  $('questionChecklist').innerHTML = TUPPER_MANOR_2027.confirmationQuestions.map((question, index) => `<label class="check-row"><input type="checkbox" id="question-${index}"><span>${question}</span></label>`).join('');
  $('presetButtons').innerHTML = TUPPER_MANOR_2027.presets.map((preset, index) => `<button class="button button--small button--secondary" type="button" data-preset="${index}">${preset.label}</button>`).join('');
}
function checkboxHtml(name, item) {
  const warning = item.marketWarning ? ' · market price warning' : '';
  return `<label class="check-row"><input type="checkbox" name="${name}" value="${item.id}"><span>${item.label} · ${formatMoney(item.pricePerPerson)}/person${warning}</span></label>`;
}

function bindEvents() {
  $('plannerForm').addEventListener('input', renderEstimate);
  $('plannerForm').addEventListener('change', renderEstimate);
  $('saveScenario').addEventListener('click', saveScenario);
  $('clearScenarios').addEventListener('click', () => { safeWriteScenarios([]); renderScenarios(); });
  $('printButton').addEventListener('click', () => window.print());
  $('presetButtons').addEventListener('click', (event) => {
    const index = event.target.dataset.preset;
    if (index !== undefined) applyPreset(TUPPER_MANOR_2027.presets[Number(index)]);
  });
  $('scenarioRows').addEventListener('click', (event) => {
    const id = event.target.dataset.delete;
    if (!id) return;
    safeWriteScenarios(safeReadScenarios().filter((scenario) => scenario.id !== id));
    renderScenarios();
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
if (typeof module !== 'undefined') module.exports = { TUPPER_MANOR_2027, calculateEstimate, getSeason, isSoldOut };
