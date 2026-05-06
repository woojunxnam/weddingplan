'use strict';

const TUPPER_MANOR_2027 = {
  venue: 'Tupper Manor',
  location: 'Beverly, MA',
  packageYear: 2027,
  sourceNote: '2027 Tupper Manor wedding package PDF in this repository',
  assumptions: {
    defaultGuests: 100,
    budgetMin: 25000,
    budgetMax: 35000,
    packagePricePerPerson: 140,
    ceremonyFee: 1000,
    ceremonyMinutesAdded: 30,
    receptionHours: 5,
    barHours: 4.5,
    adminRate: 22,
    taxRate: 7,
    discountWarning: 'This estimate applies the engagement gift discount from the PDF. The PDF states this special is valid through June 1, 2026 and must be confirmed with the venue.',
    adminWarning: 'The 22% administrative fee is not a gratuity. Additional staff gratuity may still be expected.',
    soldOutWarning: 'This date is listed as sold out in the PDF. Confirm availability directly with the venue.',
    barNote: 'Open bar pricing is based on 4.5 hours. Bar closes 30 minutes before event end.',
    quantitiesNote: 'Recommended quantities may vary. Confirm with the event manager.'
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
  dateRates: {
    'Summer & Fall': {
      Friday: { fbMinimum: 17000, rentalFee: 7500, discountRate: 0.20 },
      Saturday: { fbMinimum: 20000, rentalFee: 10000, discountRate: 0.15, soldOutMonths: ['June', 'August'], note: 'June and August Saturdays are listed as sold out in the PDF.' },
      Sunday: { fbMinimum: 15000, rentalFee: 5500, discountRate: 0.20 },
      'Holiday Sunday': { fbMinimum: 17000, rentalFee: 7500, discountRate: 0.20 }
    },
    Holiday: {
      Friday: { fbMinimum: 15000, rentalFee: 5500, discountRate: 0.50 },
      Saturday: { fbMinimum: 18000, rentalFee: 7500, discountRate: 0.50 },
      Sunday: { fbMinimum: 13000, rentalFee: 3500, discountRate: 0.50 },
      NYE: { fbMinimum: 18000, rentalFee: 7500, discountRate: 0, discountNote: 'The PDF lists Holiday Saturday & NYE pricing, but the engagement gift discount text lists Holiday/Winter/Spring Fri/Sat/Sun only. Confirm NYE discount treatment with the venue.' }
    },
    Winter: {
      Friday: { fbMinimum: 10000, rentalFee: 1000, discountRate: 0.50 },
      Saturday: { fbMinimum: 12000, rentalFee: 1000, discountRate: 0.50 },
      Sunday: { fbMinimum: 10000, rentalFee: 1000, discountRate: 0.50 }
    },
    Spring: {
      Friday: { fbMinimum: 10000, rentalFee: 2000, discountRate: 0.50 },
      Saturday: { fbMinimum: 10000, rentalFee: 2000, discountRate: 0.50, soldOut: true, referenceOnly: true, note: 'Spring Saturday is listed as sold out in the PDF. Friday/Sunday pricing is shown only as a reference.' },
      Sunday: { fbMinimum: 10000, rentalFee: 2000, discountRate: 0.50 }
    }
  },
  includedItems: {
    'Cocktail Hour': ['Five butler-passed hors d\'oeuvres'],
    Toast: ['Champagne toast, with non-alcoholic options available'],
    Dinner: [
      'Fresh baked rolls and butter',
      'One salad',
      'Two protein entrees and one vegetarian OR one duet entree and one vegetarian',
      'House red and white wine service with dinner'
    ],
    Dessert: [
      'Cutting and presentation of couple-provided cake',
      'Mini Italian pastries',
      'Coffee, decaf coffee, and tea'
    ],
    'Table / Rental Items': [
      'Elegant floor-length ivory linen and napkin',
      'Bright white china',
      'Stainless steel flatware',
      'Classic stemware',
      'House fruitwood Chiavari chairs'
    ]
  },
  informationalMenuOptions: {
    horsDoeuvres: [
      {
        group: 'Hot',
        items: [
          ['Parmesan Artichoke Popper', 'spicy red pepper aioli'],
          ['Coconut Chicken', 'sweet chili dipping sauce'],
          ['Fig & Goat Cheese Flat Bread', ''],
          ['Maryland Style Crab Cake', ''],
          ['Buffalo Chicken Eggroll', 'blue cheese sauce'],
          ['Chicken Tandoori', 'cilantro yogurt sauce'],
          ['Beef Taquito', 'avocado ranch sauce'],
          ['Butternut Squash Arancini', 'sage honey'],
          ['Fresh Bay Scallops wrapped in Bacon', ''],
          ['Vegetable Empanada', 'mole sauce'],
          ['Mini Stuffed Potatoes', 'Gorgonzola Sauce'],
          ['Spanakopita', ''],
          ['Truffle Potato Croquette', 'tarragon mayonnaise'],
          ['Short Rib Hand Pie', 'cilantro lime crema'],
          ['Edamame Dumpling', 'soy dipping sauce'],
          ['French Onion Boule', ''],
          ['Crispy Parmesan Crusted Asparagus Spears', ''],
          ['Beef Wellington', ''],
          ['Chicken & Lemongrass Pot-sticker', ''],
          ['Cheese Steak Spring Roll', ''],
          ['Pastrami Spring Roll', ''],
          ['Bocconcini Bufala', ''],
          ['Arancini Vegano', ''],
          ['Coconut Shrimp', 'sweet chili dipping sauce'],
          ['Samosa', ''],
          ['Raspberry, Toasted Almonds & Brie Phyllo', ''],
          ['Cauliflower Tempura', ''],
          ['Lamb Marrakech Skewer', 'creme fraiche'],
          ['Waffle Fried Chicken', 'maple hot honey']
        ]
      },
      {
        group: 'Cold',
        items: [
          ['Chilled Jumbo Shrimp Cocktail', 'lemon cocktail sauce'],
          ['Tuna Tartare', 'Soy pearls, micro greens'],
          ['Fresh Mozzarella, Tomato, & Basil Skewer', 'balsamic drizzle'],
          ['Antipasto Skewer', 'Kalamata olives, aged provolone, salami, grape tomatoes'],
          ['Lobster Phyllo Cup', ''],
          ['Ratatouille Crostini', ''],
          ['Polenta Cake & Fig Jam & Goat Cheese', ''],
          ['Seared Beef Tenderloin Crostini', 'smoked horseradish cream']
        ]
      }
    ],
    salads: [
      ['Tupper Wedge', 'Iceberg wedge, crumbled blue cheese, vine ripened tomatoes, bacon, served with a blue cheese dressing'],
      ['Caprese Salad', 'Heirloom tomatoes, fresh mozzarella, basil chiffonade, served with a balsamic glaze'],
      ['Water\'s Edge Salad', 'Baby field greens, red berries, biscotti, crumbled blue cheese, candid pecans, served with a raspberry vinaigrette'],
      ['Burrata, Prosciutto & Pear Salad', 'Fresh Burrata, Roasted Pear, Prosciutto di Parma, Arugula, Balsamic Glaze'],
      ['Caesar Salad', 'Crispy romaine, roasted red tomatoes, panko parmesan dust, served with Caesar Dressing'],
      ['Classic Garden Salad', 'Trio of lettuce, English cucumber, grape tomatoes, shredded carrots, served with balsamic or ranch dressing'],
      ['Cobb Salad', 'Chopped romaine, diced tomatoes, hard boiled eggs, avocado, smoked bacon, served with a blue cheese dressing'],
      ['Beet Salad', 'Roasted red and golden beets, shallots, green apple, goat cheese, toasted walnuts, arugula, served with a balsamic drizzle']
    ],
    entrees: {
      Beef: [
        ['Grilled Marinated Bistro Steak', 'Shallot butter, twice baked mashed potatoes, and roasted Brussels sprouts'],
        ['Tupper Beef Wellington', 'Seasoned and grilled beef tenderloin atop mushroom Duxelles, puff pastry triangle, herb red wine reduction, mashed potatoes, and roasted asparagus'],
        ['Vermouth Braised Short Ribs', 'Tri-colored carrots, onion straws, and baked mashed potatoes'],
        ['Slow Roasted Sirloin Steak', 'Grain mustard demi-glaze, cippolini onions, haricot verts, and wild rice'],
        ['Grilled Beef Filet Mignon', 'Roasted garlic demi-glace OR gorgonzola demi glace, potatoes au gratin, and baby broccolini']
      ],
      Poultry: [
        ['Stuffed Chicken', 'Apricot, wild rice, corn bread stuffed chicken, pomegranate orange glaze, rissole potatoes, and roasted root vegetables'],
        ['Chicken Saltimbocca', 'Pan roasted chicken with prosciutto, fontina cheese, fried sage, forest mushroom risotto cake, and wilted spinach'],
        ['Garlic & Thyme Roasted Chicken', 'Glazed carrots and roasted sweet potatoes'],
        ['Cranberry Maple Chicken', 'Crispy chicken breast with cranberry maple glaze, roasted potatoes, and braised butternut squash'],
        ['Chicken Marsala', 'Sauteed chicken cutlets, wild mushrooms, sweet marsala sauce, linguine, and broccoli rabe'],
        ['Chicken Victoria', 'Seared chicken cutlets with caramelized apples, creamy brie sauce, broccolini, and fingerling potatoes'],
        ['Herb Roasted Chicken', 'Artichoke and basil cream sauce, fingerling potatoes, and broccolini']
      ],
      Seafood: [
        ['Baked New England Haddock', 'Buttery herb crumb topping with potato pancakes, glazed carrots, and lemon sauce'],
        ['Tupper Seafood Trio', 'Maryland style crab cake, baked stuffed shrimp, baked haddock, rice pilaf, vegetable stack, and remoulade sauce'],
        ['Honey Pecan Crusted Salmon', 'Pan seared, finished with orange butter, basmati rice, and steamed asparagus'],
        ['Grilled Scallops & Mango', 'Citrus marinade with bell peppers and onions over lime scented jasmine rice with roasted fennel'],
        ['Miso Glazed Sea Bass', 'Slow roasted with miso Asian glaze, mustard greens, and farro'],
        ['Spinach Stuffed Salmon Roulade', 'Lemon beurre blanc, lemon orzo, and charred asparagus']
      ],
      Duet: [
        ['Statler Chicken Breast & Petite Filet Mignon', 'Dry marsala sauce and roasted shallot demi-glaze'],
        ['Charbroiled Chicken & Salmon', 'Wild mushroom sauce and tarragon beurre blanc sauce'],
        ['Petite Filet Mignon & Baked Stuffed Shrimp', 'Herbed garlic butter; $10 additional per guest'],
        ['Petite Filet Mignon & Crab Cakes', 'Remoulade sauce; $10 additional per guest'],
        ['Petite Filet Mignon & Seared Sea Scallops', 'Herbed garlic butter; $10 additional per guest'],
        ['Petite Filet Mignon & Broiled Lobster Tail', 'Lobster bisque sauce; Market Price']
      ]
    },
    vegetarian: [
      ['Crispy Massaman Tofu Curry', 'Crispy pan-fried tofu, vegetables, and sweet potatoes simmered in peanut Thai spiced curry with pineapple salsa and scallion rice', true],
      ['Spanakopita Roasted Cauliflower Steak', 'Over pine nut couscous and topped with phyllo strings', true],
      ['Vegan Quinoa Stuffed Mushrooms', 'Spinach forest mushrooms and roasted shallots on top of cauliflower puree', true],
      ['Butternut Squash Ravioli', 'Amaretto cream sauce, spinach, cranberries, and toasted almonds', false],
      ['Vegan Pasta', 'Seasonal', true],
      ['Mushroom Risotto', 'Arborio rice, wild forest mushrooms, and fresh herbs', false],
      ['Napoleon', 'Roasted red pepper polenta, grilled zucchini, yellow squash, Portobello mushroom, heirloom tomatoes, herb tomato pesto, and balsamic reduction', false],
      ['Farmer\'s Market Napoleon', 'Grilled Portobello mushroom, zucchini, squash, roasted red pepper, spinach and goat cheese with tomato veloute sauce', false]
    ],
    dessert: [
      'You may coordinate your own wedding cake.',
      'Tupper Culinary cuts, plates, and stations it with mini Italian pastries.',
      'Freshly brewed coffee, decaffeinated coffee, and a selection of teas are included.'
    ]
  },
  paidUpgrades: {
    appetizerCourse: {
      pricePerPerson: 8,
      examples: [
        'New England Clam Chowder',
        'Carrot Ginger Soup',
        'Tomato Basil Soup',
        'Lobster Bisque',
        'Butternut Squash Bisque',
        'Potato Gnocchi, lemon basil sauce',
        'Penne Pasta & Roasted Tomatoes, basil pesto sauce',
        'Three Cheese Ravioli, fresh marinara sauce',
        'Butternut Squash Ravioli, sage cream sauce'
      ]
    },
    duetUpgrades: [
      { id: 'none', label: 'No duet upgrade', pricePerPerson: 0 },
      { id: 'shrimp', label: 'Petite Filet Mignon & Baked Stuffed Shrimp', pricePerPerson: 10 },
      { id: 'crab-cakes', label: 'Petite Filet Mignon & Crab Cakes', pricePerPerson: 10 },
      { id: 'scallops', label: 'Petite Filet Mignon & Seared Sea Scallops', pricePerPerson: 10 },
      { id: 'lobster-tail', label: 'Petite Filet Mignon & Broiled Lobster Tail', pricePerPerson: 0, custom: true, marketWarning: true }
    ],
    cocktailEnhancements: [
      { id: 'cheese', label: 'Taste of Tupper Cheese Display', description: 'Domestic and imported cheeses served with crackers and garnished with fresh fruit.', pricePerPerson: 16 },
      { id: 'charcuterie', label: 'Charcuterie', description: 'Roasted specialty wild game sausages, pates, smoked salmon mousse, breads, crackers, crostini, dried fruits, nuts, mustards, and assorted cheeses.', pricePerPerson: 28 },
      { id: 'crudite', label: 'Vegetable Crudite', description: 'Crisp vegetables including carrots, celery, red peppers, broccoli, and seasonal tomatoes with creamy dips.', pricePerPerson: 10 },
      { id: 'raw-bar', label: 'Water\'s Edge Raw Bar', description: 'East coast oysters, littleneck clams, jumbo shrimp, lobster tails, lemons, cocktail sauce, horseradish, tabasco, and remoulade.', pricePerPerson: 30, marketWarning: true },
      { id: 'trio', label: 'Cheese, Crudite & Baked Brie Trio', description: 'Baked brie in puff pastry with fresh and dried fruits, nuts, fig spread, and gourmet crackers.', pricePerPerson: 20 },
      { id: 'olive', label: 'Olive & Crostini Bar', description: 'Olives and antipasti with house-made olive oil crisps and toppings such as ricotta, tapenade, roasted peppers, and pesto.', pricePerPerson: 18 }
    ],
    lateNightSnacks: [
      { id: 'tot-fry', label: 'Tater Tot or French Fry Bar', description: 'Choice of tater tots or French fries with nacho, buffalo, or poutine toppings.', pricePerPerson: 14 },
      { id: 'chinese', label: 'Chinese Take Out', description: 'Crab rangoon, Peking ravioli, beef teriyaki, boneless spare ribs, lo mein noodles, fried rice, tempura chicken, sauces, and fortune cookies.', pricePerPerson: 14 },
      { id: 'new-england', label: 'New England', description: 'Mini lobster salad rolls, Cape Cod Potato Chips, and whoopie pies.', pricePerPerson: 16 },
      { id: 'pizzettas', label: 'Pizzettas', description: 'Pepperoni, margherita, and goat cheese served on focaccia.', pricePerPerson: 12 },
      { id: 'wings', label: 'Wings & Things', description: 'Honey stung wings, popcorn chicken, hand cut French fries, onion rings, zucchini sticks, condiments, and dipping sauces.', pricePerPerson: 14 },
      { id: 'sliders', label: 'Slider Station', description: 'Choice of two: pulled pork sliders, North Shore roast beef sliders, veggie burgers, cheeseburgers, and condiments.', pricePerPerson: 14 },
      { id: 'sundae', label: 'Ice Cream Sundae Station', description: 'Chocolate, vanilla, and coffee ice cream with sauces, toppings, cones, and waffle bowls.', pricePerPerson: 9 }
    ]
  },
  barOptions: [
    { id: 'none', label: 'No hosted bar', pricePerPerson: 0, note: 'Comparison only. Confirm with the venue if no hosted bar is available for the event.' },
    { id: 'beer-wine', label: 'Beer, Wine & Non-Alcoholic', pricePerPerson: 48 },
    { id: 'tupper', label: 'Tupper Brands + Beer, Wine & Non-Alcoholic', pricePerPerson: 58, default: true, details: ['Tito\'s Vodka', 'Tanqueray Gin', 'Bacardi Silver Rum', 'Captain Morgan Rum', 'Jose Cuervo Silver Tequila', 'Johnnie Walker Red', 'Seagram\'s 7 Whiskey', 'Jim Beam Bourbon'] },
    { id: 'premium', label: 'Premium Brands + Beer, Wine & Non-Alcoholic', pricePerPerson: 63, details: ['Grey Goose Vodka', 'Bombay Sapphire Gin', 'Mount Gay Rum', 'Captain Morgan Rum', 'Don Julio Blanco', 'Glenlivet Scotch Crown Royal', 'Maker\'s Mark Bourbon'] },
    { id: 'cash', label: 'Cash bar (guest-paid)', pricePerPerson: 0, note: 'Cash bar: guests pay for their own beverages.' },
    { id: 'consumption', label: 'Consumption tab', pricePerPerson: 0, custom: true, note: 'The PDF notes an option to host on consumption tab. Enter a custom estimate.' }
  ],
  adminModes: [
    { id: 'fb-only', label: 'Food & beverage only', default: true },
    { id: 'fb-rental-ceremony', label: 'Food & beverage + rental + ceremony' },
    { id: 'everything', label: 'Conservative estimate / everything taxable' },
    { id: 'manual', label: 'Custom/manual' }
  ],
  taxModes: [
    { id: 'pdf-style', label: 'F&B + rental + ceremony + admin', default: true },
    { id: 'fb-admin', label: 'F&B + admin only' },
    { id: 'everything', label: 'Everything taxable / conservative' },
    { id: 'none', label: 'No tax (comparison only)' }
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

const STORAGE_KEY = 'tupperManorGuidedPlannerScenarios';
const $ = (id) => (typeof document === 'undefined' ? null : document.getElementById(id));
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function clampNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? number : fallback;
}

function formatMoney(value) {
  return currency.format(Math.round(value || 0));
}

function formatPercent(value) {
  return `${Math.round((value || 0) * 100)}%`;
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
    dateRate: TUPPER_MANOR_2027.dateRates[season][resolvedDay]
  };
}

function isSoldOut(month, day) {
  const resolved = resolveDate(month, day);
  const rate = resolved.dateRate;
  return Boolean(rate.soldOut || (rate.soldOutMonths || []).includes(resolved.month));
}

function getDayLabel(month, day) {
  const resolved = resolveDate(month, day);
  const rate = TUPPER_MANOR_2027.dateRates[resolved.season][day];
  if (day === 'NYE') return 'NYE';
  if (rate.soldOut || (rate.soldOutMonths || []).includes(month)) return `${day} (sold out)`;
  return day;
}

function getDefaultOptionId(options) {
  return (options.find((option) => option.default) || options[0]).id;
}

function selectedValues(name) {
  return [...document.querySelectorAll(`[name="${name}"]:checked`)].map((item) => item.value);
}

function selectedRadio(name) {
  const item = document.querySelector(`[name="${name}"]:checked`);
  return item ? item.value : '';
}

function collectInput() {
  return {
    guestCount: $('guestCount').value,
    month: $('month').value,
    day: $('dayType').value,
    budgetMin: $('budgetMin').value,
    budgetMax: $('budgetMax').value,
    engagementDiscountEnabled: $('engagementDiscountEnabled').checked,
    ceremonyEnabled: selectedRadio('ceremonyEnabled') !== 'no',
    barOption: $('barOption').value,
    consumptionTabAmount: $('consumptionTabAmount').value,
    optionalAppetizer: $('optionalAppetizer').checked,
    duetUpgrade: $('duetUpgrade').value,
    marketDuetAmount: $('marketDuetAmount').value,
    cocktailEnhancements: selectedValues('cocktailEnhancement'),
    lateNightSnacks: selectedValues('lateNightSnack'),
    adminMode: $('adminMode').value,
    adminRate: $('adminRate').value,
    manualAdminAmount: $('manualAdminAmount').value,
    taxRate: $('taxRate').value,
    taxMode: $('taxMode').value,
    customFoodBeverageAmount: $('customFoodBeverageAmount').value,
    favoriteHorsDoeuvres: selectedValues('favoriteHorsDoeuvre'),
    saladChoice: selectedRadio('saladChoice'),
    entreeChoices: selectedValues('entreeChoice'),
    vegetarianChoice: selectedRadio('vegetarianChoice')
  };
}

function sumSelected(items, ids, guests) {
  const selected = items.filter((item) => ids.includes(item.id));
  return {
    selected,
    total: selected.reduce((sum, item) => sum + item.pricePerPerson * guests, 0)
  };
}

function getBudgetStatus(total, budgetMin, budgetMax, soldOut) {
  if (soldOut) return { label: 'Sold out', className: 'badge--sold' };
  if (total < 30000) return { label: 'Strong value', className: 'badge--strong' };
  if (total >= 30000 && total <= 35000) return { label: 'Within budget', className: 'badge--ok' };
  if (total > 35000 && total <= budgetMax) return { label: 'Tight but possible', className: 'badge--tight' };
  if (total > 35000 && total < 40000) return { label: 'Over preferred budget', className: 'badge--over' };
  return { label: 'High-cost option', className: 'badge--high' };
}

function calculateEstimate(input) {
  const guests = Math.max(1, Math.round(clampNumber(input.guestCount, TUPPER_MANOR_2027.assumptions.defaultGuests)));
  const resolved = resolveDate(input.month || 'May', input.day || 'Friday');
  const rate = resolved.dateRate;
  const bar = TUPPER_MANOR_2027.barOptions.find((item) => item.id === input.barOption) || TUPPER_MANOR_2027.barOptions.find((item) => item.default);
  const duet = TUPPER_MANOR_2027.paidUpgrades.duetUpgrades.find((item) => item.id === input.duetUpgrade) || TUPPER_MANOR_2027.paidUpgrades.duetUpgrades[0];
  const adminMode = input.adminMode || getDefaultOptionId(TUPPER_MANOR_2027.adminModes);
  const taxMode = input.taxMode || getDefaultOptionId(TUPPER_MANOR_2027.taxModes);

  const basePackage = guests * TUPPER_MANOR_2027.assumptions.packagePricePerPerson;
  const barCost = bar.custom ? clampNumber(input.consumptionTabAmount) : guests * bar.pricePerPerson;
  const optionalAppetizer = input.optionalAppetizer ? guests * TUPPER_MANOR_2027.paidUpgrades.appetizerCourse.pricePerPerson : 0;
  const duetUpgrade = duet.custom ? clampNumber(input.marketDuetAmount) : guests * duet.pricePerPerson;
  const cocktail = sumSelected(TUPPER_MANOR_2027.paidUpgrades.cocktailEnhancements, input.cocktailEnhancements || [], guests);
  const snacks = sumSelected(TUPPER_MANOR_2027.paidUpgrades.lateNightSnacks, input.lateNightSnacks || [], guests);
  const customFoodBeverageAmount = clampNumber(input.customFoodBeverageAmount);
  const rawFB = basePackage + barCost + optionalAppetizer + duetUpgrade + cocktail.total + snacks.total + customFoodBeverageAmount;
  const appliedFB = Math.max(rawFB, rate.fbMinimum);
  const minimumAdjustment = appliedFB - rawFB;

  const originalRental = rate.rentalFee;
  const discountRate = input.engagementDiscountEnabled ? rate.discountRate : 0;
  const discountAmount = originalRental * discountRate;
  const discountedRental = originalRental - discountAmount;
  const ceremonyCost = input.ceremonyEnabled ? TUPPER_MANOR_2027.assumptions.ceremonyFee : 0;

  const adminRate = clampNumber(input.adminRate, TUPPER_MANOR_2027.assumptions.adminRate) / 100;
  let adminBase = appliedFB;
  if (adminMode === 'fb-rental-ceremony' || adminMode === 'everything') adminBase = appliedFB + discountedRental + ceremonyCost;
  let adminFee = adminBase * adminRate;
  if (adminMode === 'manual') adminFee = clampNumber(input.manualAdminAmount);

  const taxRate = clampNumber(input.taxRate, TUPPER_MANOR_2027.assumptions.taxRate) / 100;
  let taxBase = appliedFB + discountedRental + ceremonyCost + adminFee;
  if (taxMode === 'fb-admin') taxBase = appliedFB + adminFee;
  if (taxMode === 'everything') taxBase = appliedFB + discountedRental + ceremonyCost + adminFee;
  if (taxMode === 'none') taxBase = 0;
  const tax = taxBase * taxRate;

  const estimatedTotal = appliedFB + discountedRental + ceremonyCost + adminFee + tax;
  const soldOut = isSoldOut(resolved.month, resolved.day);
  const budgetStatus = getBudgetStatus(
    estimatedTotal,
    clampNumber(input.budgetMin, TUPPER_MANOR_2027.assumptions.budgetMin),
    clampNumber(input.budgetMax, TUPPER_MANOR_2027.assumptions.budgetMax),
    soldOut
  );

  const warnings = [];
  if (input.engagementDiscountEnabled && rate.discountRate > 0) warnings.push(TUPPER_MANOR_2027.assumptions.discountWarning);
  if (input.engagementDiscountEnabled && rate.discountRate === 0 && rate.discountNote) warnings.push(rate.discountNote);
  if (soldOut) warnings.push(rate.note || TUPPER_MANOR_2027.assumptions.soldOutWarning);
  if (duet.marketWarning) warnings.push('The lobster tail duet is market price. Enter a custom estimate and confirm current pricing with the venue.');
  if (cocktail.selected.some((item) => item.marketWarning)) warnings.push('Water\'s Edge Raw Bar is listed at $30/person with market prices subject to change. Confirm current pricing with the venue.');
  if (bar.note) warnings.push(bar.note);

  const addOnCount = (input.optionalAppetizer ? 1 : 0)
    + (duet.id !== 'none' ? 1 : 0)
    + cocktail.selected.length
    + snacks.selected.length
    + (customFoodBeverageAmount > 0 ? 1 : 0);

  return {
    guests,
    month: resolved.month,
    day: resolved.day,
    season: resolved.season,
    dateRate: rate,
    soldOut,
    bar,
    duet,
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
    fbMinimum: rate.fbMinimum,
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
    warnings,
    addOnCount
  };
}

function renderQuickFacts() {
  const facts = [
    ['Venue', TUPPER_MANOR_2027.venue],
    ['Location', TUPPER_MANOR_2027.location],
    ['Package year', TUPPER_MANOR_2027.packageYear],
    ['Default guests', TUPPER_MANOR_2027.assumptions.defaultGuests],
    ['Default budget', `${formatMoney(TUPPER_MANOR_2027.assumptions.budgetMin)}-${formatMoney(TUPPER_MANOR_2027.assumptions.budgetMax)}`],
    ['Estimate basis', 'Attached 2027 wedding package PDF']
  ];
  $('quickFacts').innerHTML = facts.map(([label, value]) => `<div class="fact"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join('');
}

function renderHowSteps() {
  const steps = [
    ['Choose your date and guest count.'],
    ['Choose ceremony and bar options.'],
    ['Review what is already included in the base package.'],
    ['Add optional food upgrades only if desired.'],
    ['Review fees, tax, discounts, and budget status.'],
    ['Save scenarios and compare options.']
  ];
  $('howSteps').innerHTML = steps.map((step, index) => `<article class="guide-step"><b>${index + 1}</b><strong>Step ${index + 1}</strong><p>${escapeHtml(step[0])}</p></article>`).join('');
}

function renderTimeline() {
  const items = [
    {
      title: 'Cocktail Hour',
      included: ['Five butler-passed hors d\'oeuvres'],
      optional: ['Cocktail hour enhancements such as cheese display, charcuterie, raw bar, crudite, and more']
    },
    {
      title: 'Dinner',
      included: ['Rolls and butter', 'One salad', 'Two protein entrees and one vegetarian OR one duet entree and one vegetarian'],
      optional: ['Optional appetizer course', 'Premium duet entree upgrades where explicitly priced']
    },
    {
      title: 'Dessert',
      included: ['Cake cutting and presentation for couple-provided cake', 'Mini Italian pastries', 'Coffee, decaf, and tea'],
      optional: []
    },
    {
      title: 'Late Reception',
      included: [],
      optional: ['Late-night snacks such as fries, pizzettas, sliders, ice cream, and more']
    }
  ];
  $('eventTimeline').innerHTML = items.map((item, index) => `
    <article class="timeline-card">
      <b>${index + 1}</b>
      <strong>${escapeHtml(item.title)}</strong>
      ${item.included.length ? `<span class="tag">Included</span><ul>${item.included.map((text) => `<li>${escapeHtml(text)}</li>`).join('')}</ul>` : ''}
      ${item.optional.length ? `<span class="tag tag--cost">Optional upgrade</span><ul>${item.optional.map((text) => `<li>${escapeHtml(text)}</li>`).join('')}</ul>` : ''}
    </article>
  `).join('');
}

function syncDayOptions(preferredDay) {
  const month = $('month').value || 'May';
  const days = getAvailableDayTypes(month);
  const current = preferredDay || $('dayType').value;
  const selected = days.includes(current) ? current : days[0];
  $('dayType').innerHTML = days.map((day) => `<option value="${escapeHtml(day)}" ${day === selected ? 'selected' : ''}>${escapeHtml(getDayLabel(month, day))}</option>`).join('');
}

function renderIncludedGroups() {
  $('includedSummaryTitle').textContent = `What is included in the ${formatMoney(TUPPER_MANOR_2027.assumptions.packagePricePerPerson)}/person base wedding package?`;
  $('includedGroups').innerHTML = Object.entries(TUPPER_MANOR_2027.includedItems).map(([group, items]) => `
    <article class="included-group">
      <h4>${escapeHtml(group)}</h4>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function optionCard({ name, description, controlHtml = '', tags = '' }) {
  return `<article class="menu-card">${controlHtml}<strong>${escapeHtml(name)}</strong>${description ? `<p>${escapeHtml(description)}</p>` : ''}${tags}</article>`;
}

function renderMenuOptions() {
  $('horsDoeuvresOptions').innerHTML = TUPPER_MANOR_2027.informationalMenuOptions.horsDoeuvres.map((group) => `
    <div class="menu-group">
      <h4>${escapeHtml(group.group)}</h4>
      <div class="menu-grid">
        ${group.items.map(([name, description]) => optionCard({
          name,
          description,
          controlHtml: `<label class="check-row"><input type="checkbox" name="favoriteHorsDoeuvre" value="${escapeHtml(name)}"><span>Favorite</span></label>`,
          tags: '<span class="tag">Informational only</span>'
        })).join('')}
      </div>
    </div>
  `).join('');

  $('saladOptions').innerHTML = TUPPER_MANOR_2027.informationalMenuOptions.salads.map(([name, description]) => optionCard({
    name,
    description,
    controlHtml: `<label class="radio-row"><input type="radio" name="saladChoice" value="${escapeHtml(name)}"><span>Select for planning</span></label>`,
    tags: '<span class="tag">Included</span>'
  })).join('');

  $('entreeOptions').innerHTML = Object.entries(TUPPER_MANOR_2027.informationalMenuOptions.entrees).map(([group, items]) => `
    <div class="menu-group">
      <h4>${escapeHtml(group)}</h4>
      <div class="menu-grid">
        ${items.map(([name, description]) => optionCard({
          name,
          description,
          controlHtml: `<label class="check-row"><input type="checkbox" name="entreeChoice" value="${escapeHtml(name)}"><span>Mark for planning</span></label>`,
          tags: name.includes('$10') || description.includes('$10') || description.includes('Market') ? '<span class="tag tag--cost">Adds cost only if selected below</span>' : '<span class="tag">Informational only</span>'
        })).join('')}
      </div>
    </div>
  `).join('');

  $('vegetarianOptions').innerHTML = TUPPER_MANOR_2027.informationalMenuOptions.vegetarian.map(([name, description, vegan]) => optionCard({
    name,
    description,
    controlHtml: `<label class="radio-row"><input type="radio" name="vegetarianChoice" value="${escapeHtml(name)}"><span>Select for planning</span></label>`,
    tags: `<span class="tag">Included</span>${vegan ? '<span class="tag">Can be prepared vegan</span>' : ''}`
  })).join('');

  $('dessertIncluded').innerHTML = `<ul>${TUPPER_MANOR_2027.informationalMenuOptions.dessert.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function renderAddOnCards(containerId, name, items) {
  $(containerId).innerHTML = items.map((item) => `
    <article class="addon-card">
      <label>
        <input type="checkbox" name="${escapeHtml(name)}" value="${escapeHtml(item.id)}">
        <span><strong>${escapeHtml(item.label)}</strong></span>
      </label>
      <p>${escapeHtml(item.description)}</p>
      <div class="addon-price">
        ${formatMoney(item.pricePerPerson)}/person
        <span data-addon-total="${escapeHtml(item.id)}"></span>
        ${item.marketWarning ? '<span class="tag tag--confirm">Confirm with venue</span>' : '<span class="tag tag--cost">Adds cost</span>'}
      </div>
    </article>
  `).join('');
}

function updateAddOnTotals(guests) {
  [...document.querySelectorAll('[data-addon-total]')].forEach((node) => {
    const id = node.dataset.addonTotal;
    const item = [...TUPPER_MANOR_2027.paidUpgrades.cocktailEnhancements, ...TUPPER_MANOR_2027.paidUpgrades.lateNightSnacks].find((entry) => entry.id === id);
    if (item) node.textContent = ` - ${formatMoney(item.pricePerPerson * guests)} for ${guests} guests before admin/tax`;
  });
}

function populateOptions() {
  $('month').innerHTML = TUPPER_MANOR_2027.months.map((month) => `<option value="${escapeHtml(month.name)}" ${month.name === 'May' ? 'selected' : ''}>${escapeHtml(month.name)} (${escapeHtml(month.season)})</option>`).join('');
  syncDayOptions('Friday');
  $('barOption').innerHTML = TUPPER_MANOR_2027.barOptions.map((bar) => `<option value="${escapeHtml(bar.id)}" ${bar.default ? 'selected' : ''}>${escapeHtml(bar.label)} - ${bar.custom ? 'custom estimate' : formatMoney(bar.pricePerPerson) + '/person'}</option>`).join('');
  $('barHelper').textContent = TUPPER_MANOR_2027.assumptions.barNote;
  $('ceremonyHelper').textContent = `Onsite ceremony: ${formatMoney(TUPPER_MANOR_2027.assumptions.ceremonyFee)} and adds ${TUPPER_MANOR_2027.assumptions.ceremonyMinutesAdded} minutes.`;
  $('duetUpgrade').innerHTML = TUPPER_MANOR_2027.paidUpgrades.duetUpgrades.map((duet) => `<option value="${escapeHtml(duet.id)}">${escapeHtml(duet.label)} - ${duet.custom ? 'market price/custom estimate' : formatMoney(duet.pricePerPerson) + '/person'}</option>`).join('');
  $('optionalAppetizerLabel').textContent = `Add optional appetizer course - +${formatMoney(TUPPER_MANOR_2027.paidUpgrades.appetizerCourse.pricePerPerson)}/person`;
  $('appetizerExamples').innerHTML = TUPPER_MANOR_2027.paidUpgrades.appetizerCourse.examples.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join('');
  $('adminMode').innerHTML = TUPPER_MANOR_2027.adminModes.map((mode) => `<option value="${escapeHtml(mode.id)}" ${mode.default ? 'selected' : ''}>${escapeHtml(mode.label)}</option>`).join('');
  $('taxMode').innerHTML = TUPPER_MANOR_2027.taxModes.map((mode) => `<option value="${escapeHtml(mode.id)}" ${mode.default ? 'selected' : ''}>${escapeHtml(mode.label)}</option>`).join('');
  $('presetButtons').innerHTML = TUPPER_MANOR_2027.presets.map((preset, index) => `<button class="button button--small button--secondary" type="button" data-preset="${index}">${escapeHtml(preset.label)}</button>`).join('');
  $('questionChecklist').innerHTML = TUPPER_MANOR_2027.confirmationQuestions.map((question, index) => `<label class="check-row"><input type="checkbox" id="question-${index}"><span>${escapeHtml(question)}</span></label>`).join('');
  renderQuickFacts();
  renderHowSteps();
  renderTimeline();
  renderIncludedGroups();
  renderMenuOptions();
  renderAddOnCards('cocktailOptions', 'cocktailEnhancement', TUPPER_MANOR_2027.paidUpgrades.cocktailEnhancements);
  renderAddOnCards('snackOptions', 'lateNightSnack', TUPPER_MANOR_2027.paidUpgrades.lateNightSnacks);
}

function renderDateFacts(estimate) {
  const facts = [
    ['Season', estimate.season],
    ['F&B minimum', formatMoney(estimate.fbMinimum)],
    ['Original rental', formatMoney(estimate.originalRental)],
    ['Discount amount', `${formatMoney(estimate.discountAmount)} (${formatPercent(estimate.discountRate)})`],
    ['Discounted rental', formatMoney(estimate.discountedRental)]
  ];
  $('dateFacts').innerHTML = facts.map(([label, value]) => `<div class="date-fact"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join('');
}

function renderSummary(estimate) {
  $('estimatedTotal').textContent = formatMoney(estimate.estimatedTotal);
  $('perGuestTotal').textContent = `${formatMoney(estimate.perGuestTotal)} per guest`;
  $('budgetBadge').textContent = estimate.budgetStatus.label;
  $('budgetBadge').className = `badge ${estimate.budgetStatus.className}`;
  $('warningCount').textContent = `${estimate.warnings.length} warning${estimate.warnings.length === 1 ? '' : 's'}`;
  $('summaryRows').innerHTML = [
    ['Raw F&B subtotal', estimate.rawFB],
    ['F&B minimum adjustment', estimate.minimumAdjustment],
    ['Property rental after discount', estimate.discountedRental],
    ['Ceremony cost', estimate.ceremonyCost],
    ['Admin fee', estimate.adminFee],
    ['Tax', estimate.tax]
  ].map(([label, value]) => `<div class="summary-row"><span>${escapeHtml(label)}</span><strong>${formatMoney(value)}</strong></div>`).join('');
  $('activeWarnings').innerHTML = estimate.warnings.map((warning) => `<div class="notice ${estimate.soldOut ? 'notice--danger' : ''}">${escapeHtml(warning)}</div>`).join('');
  $('recommendation').innerHTML = getRecommendation(estimate).map((text) => `<p>${escapeHtml(text)}</p>`).join('');
}

function getRecommendation(estimate) {
  const messages = [];
  if (estimate.estimatedTotal < 30000) messages.push('This looks like a strong value option and leaves more room for photography, music, floral, attire, and other wedding expenses.');
  else if (estimate.estimatedTotal <= 35000) messages.push('This is within the preferred venue budget, but add-ons and outside vendors should be controlled carefully.');
  else messages.push('This may exceed the preferred venue budget once outside vendors, gratuity, and personal items are included.');
  if (estimate.day === 'Friday') messages.push('Friday may be better for an evening celebration and wedding-weekend feel, but some guests may need to leave work early.');
  if (estimate.day === 'Sunday' || estimate.day === 'Holiday Sunday') messages.push('Sunday may be easier for some local guests and can be a good value, but Monday work schedules may limit late-night celebration.');
  if (estimate.day === 'Saturday') messages.push('Saturday is usually guest-friendly, but it may be the least budget-friendly option.');
  if (estimate.soldOut) messages.push('This date should be treated as reference only until the venue confirms availability.');
  return messages;
}

function formatList(items) {
  return items.length ? items.join(', ') : 'None selected';
}

function renderBreakdown(estimate) {
  const rows = [
    ['Guest count', estimate.guests],
    ['Season', estimate.season],
    ['Month', estimate.month],
    ['Day', estimate.day],
    ['Sold-out status / warning', estimate.soldOut ? (estimate.dateRate.note || TUPPER_MANOR_2027.assumptions.soldOutWarning) : 'No sold-out warning for this selection'],
    ['Base package subtotal', `${formatMoney(estimate.basePackage)} (${formatMoney(TUPPER_MANOR_2027.assumptions.packagePricePerPerson)}/person)`],
    ['Bar subtotal', `${formatMoney(estimate.barCost)} - ${estimate.bar.label}`],
    ['Optional appetizer', formatMoney(estimate.optionalAppetizer)],
    ['Duet upgrade', `${formatMoney(estimate.duetUpgrade)} - ${estimate.duet.label}`],
    ['Cocktail hour enhancements', `${formatMoney(estimate.cocktailEnhancements)} - ${formatList(estimate.cocktailLabels)}`],
    ['Late-night snacks', `${formatMoney(estimate.lateNightSnacks)} - ${formatList(estimate.snackLabels)}`],
    ['Custom F&B amount', formatMoney(estimate.customFoodBeverageAmount)],
    ['Raw F&B subtotal', formatMoney(estimate.rawFB)],
    ['F&B minimum', formatMoney(estimate.fbMinimum)],
    ['Minimum adjustment', formatMoney(estimate.minimumAdjustment)],
    ['Applied F&B', formatMoney(estimate.appliedFB)],
    ['Original property rental', formatMoney(estimate.originalRental)],
    ['Engagement gift discount amount', `${formatMoney(estimate.discountAmount)} (${formatPercent(estimate.discountRate)})`],
    ['Discounted property rental', formatMoney(estimate.discountedRental)],
    ['Ceremony fee', formatMoney(estimate.ceremonyCost)],
    ['Administrative fee', formatMoney(estimate.adminFee)],
    ['Tax', formatMoney(estimate.tax)],
    ['Estimated total', formatMoney(estimate.estimatedTotal)],
    ['Budget status', estimate.budgetStatus.label]
  ];
  $('estimateRows').innerHTML = rows.map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`).join('');
}

function renderDateComparison(input) {
  const rows = [];
  TUPPER_MANOR_2027.months.forEach((month) => {
    getAvailableDayTypes(month.name).forEach((day) => {
      rows.push(calculateEstimate({ ...input, month: month.name, day }));
    });
  });
  rows.sort((a, b) => {
    if (a.soldOut !== b.soldOut) return a.soldOut ? 1 : -1;
    return a.estimatedTotal - b.estimatedTotal;
  });
  $('dateComparisonRows').innerHTML = rows.map((row) => `
    <tr class="${row.soldOut ? 'row-warning' : ''}">
      <td><strong>${escapeHtml(row.month)} ${escapeHtml(row.day)}</strong><span class="row-note">${escapeHtml(row.season)}</span></td>
      <td>${formatMoney(row.fbMinimum)}</td>
      <td>${formatMoney(row.discountedRental)}<span class="row-note">${formatMoney(row.discountAmount)} discount</span></td>
      <td>${row.soldOut ? 'Sold out / confirm with venue' : 'Priced in PDF'}</td>
      <td><strong>${formatMoney(row.estimatedTotal)}</strong></td>
      <td>${escapeHtml(row.budgetStatus.label)}</td>
    </tr>
  `).join('');
}

function renderEstimate() {
  const input = collectInput();
  const estimate = calculateEstimate(input);
  updateAddOnTotals(estimate.guests);
  renderDateFacts(estimate);
  renderSummary(estimate);
  renderBreakdown(estimate);
  renderDateComparison(input);
  $('consumptionTabWrap').classList.toggle('hidden', input.barOption !== 'consumption');
  $('marketDuetWrap').classList.toggle('hidden', input.duetUpgrade !== 'lobster-tail');
  $('manualAdminWrap').classList.toggle('hidden', input.adminMode !== 'manual');
  return estimate;
}

function safeReadScenarios() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
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
      <td>${escapeHtml(scenario.month)} ${escapeHtml(scenario.day)}</td>
      <td>${escapeHtml(scenario.guests)}</td>
      <td>${escapeHtml(scenario.bar)}</td>
      <td>${scenario.ceremony ? 'Yes' : 'No'}</td>
      <td>${escapeHtml(scenario.addOnCount)}</td>
      <td>${formatMoney(scenario.rawFB)}</td>
      <td>${formatMoney(scenario.appliedFB)}</td>
      <td>${formatMoney(scenario.discountedRental)}</td>
      <td>${formatMoney(scenario.adminTax)}</td>
      <td><strong>${formatMoney(scenario.estimatedTotal)}</strong></td>
      <td>${escapeHtml(scenario.budgetStatus)}</td>
      <td>${escapeHtml(scenario.warningCount)}</td>
      <td>
        <button type="button" class="button button--small button--secondary" data-load="${escapeHtml(scenario.id)}">Load</button>
        <button type="button" class="button button--small button--danger" data-delete="${escapeHtml(scenario.id)}">Delete</button>
      </td>
    </tr>
  `).join('') : '<tr><td colspan="14">No saved scenarios yet.</td></tr>';
}

function saveScenario() {
  const input = collectInput();
  const estimate = calculateEstimate(input);
  const scenarios = safeReadScenarios();
  scenarios.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: $('scenarioName').value.trim() || `${estimate.month} ${estimate.day}`,
    month: estimate.month,
    day: estimate.day,
    guests: estimate.guests,
    bar: estimate.bar.label,
    ceremony: input.ceremonyEnabled,
    addOnCount: estimate.addOnCount,
    rawFB: estimate.rawFB,
    appliedFB: estimate.appliedFB,
    discountedRental: estimate.discountedRental,
    adminTax: estimate.adminFee + estimate.tax,
    estimatedTotal: estimate.estimatedTotal,
    budgetStatus: estimate.budgetStatus.label,
    warningCount: estimate.warnings.length,
    input
  });
  safeWriteScenarios(scenarios);
  renderScenarios();
}

function setCheckboxGroup(name, values) {
  document.querySelectorAll(`[name="${name}"]`).forEach((item) => {
    item.checked = (values || []).includes(item.value);
  });
}

function setRadio(name, value) {
  const radio = document.querySelector(`[name="${name}"][value="${CSS.escape(value)}"]`);
  if (radio) radio.checked = true;
}

function applyInput(input) {
  $('guestCount').value = input.guestCount || TUPPER_MANOR_2027.assumptions.defaultGuests;
  $('month').value = input.month || 'May';
  syncDayOptions(input.day || 'Friday');
  $('dayType').value = resolveDate($('month').value, input.day || 'Friday').day;
  $('budgetMin').value = input.budgetMin || TUPPER_MANOR_2027.assumptions.budgetMin;
  $('budgetMax').value = input.budgetMax || TUPPER_MANOR_2027.assumptions.budgetMax;
  $('engagementDiscountEnabled').checked = input.engagementDiscountEnabled !== false;
  setRadio('ceremonyEnabled', input.ceremonyEnabled === false ? 'no' : 'yes');
  $('barOption').value = input.barOption || getDefaultOptionId(TUPPER_MANOR_2027.barOptions);
  $('consumptionTabAmount').value = input.consumptionTabAmount || 0;
  $('optionalAppetizer').checked = Boolean(input.optionalAppetizer);
  $('duetUpgrade').value = input.duetUpgrade || 'none';
  $('marketDuetAmount').value = input.marketDuetAmount || 0;
  setCheckboxGroup('cocktailEnhancement', input.cocktailEnhancements || []);
  setCheckboxGroup('lateNightSnack', input.lateNightSnacks || []);
  $('adminMode').value = input.adminMode || getDefaultOptionId(TUPPER_MANOR_2027.adminModes);
  $('adminRate').value = input.adminRate || TUPPER_MANOR_2027.assumptions.adminRate;
  $('manualAdminAmount').value = input.manualAdminAmount || 0;
  $('taxRate').value = input.taxRate || TUPPER_MANOR_2027.assumptions.taxRate;
  $('taxMode').value = input.taxMode || getDefaultOptionId(TUPPER_MANOR_2027.taxModes);
  $('customFoodBeverageAmount').value = input.customFoodBeverageAmount || 0;
  setCheckboxGroup('favoriteHorsDoeuvre', input.favoriteHorsDoeuvres || []);
  setRadio('saladChoice', input.saladChoice || '');
  setCheckboxGroup('entreeChoice', input.entreeChoices || []);
  setRadio('vegetarianChoice', input.vegetarianChoice || '');
  renderEstimate();
}

function applyPreset(preset) {
  applyInput({
    guestCount: 100,
    month: preset.month,
    day: preset.day,
    budgetMin: 25000,
    budgetMax: 35000,
    engagementDiscountEnabled: true,
    ceremonyEnabled: true,
    barOption: 'tupper',
    adminMode: getDefaultOptionId(TUPPER_MANOR_2027.adminModes),
    adminRate: 22,
    taxRate: 7,
    taxMode: getDefaultOptionId(TUPPER_MANOR_2027.taxModes),
    duetUpgrade: 'none',
    cocktailEnhancements: [],
    lateNightSnacks: []
  });
  $('scenarioName').value = `${preset.label}, 100 guests, Tupper bar, ceremony yes`;
}

function loadScenario(id) {
  const scenario = safeReadScenarios().find((item) => item.id === id);
  if (scenario && scenario.input) applyInput(scenario.input);
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
  $('presetButtons').addEventListener('click', (event) => {
    const index = event.target.dataset.preset;
    if (index !== undefined) applyPreset(TUPPER_MANOR_2027.presets[Number(index)]);
  });
  $('saveScenario').addEventListener('click', saveScenario);
  $('clearScenarios').addEventListener('click', () => { safeWriteScenarios([]); renderScenarios(); });
  $('printButton').addEventListener('click', () => window.print());
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
  getAvailableDayTypes,
  getSeason,
  isSoldOut
};
