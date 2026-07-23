/* ============================================================
   ⚙️  CONFIG
   ============================================================ */
const CONFIG = {
  PREORDER_SHEET_ID:  '1cVy0tjGz6uoh5lis0Bqe7-GZ2Zv7UU1Kygtk0mJo53I',
  PREORDER_SHEET_GID: '0',
  INSTOCK_SHEET_ID:   '1DCvNBnImX3Aktwdc32f9LzHhWuffcYTSLhj9d05XFT0',
  INSTOCK_SHEET_GID:  '0',

  // Site Content sheet — powers the home "favourites" trio + all Reviews.
  // Paste the ID of your "Anggun Pesona — Site Content" Google Sheet below.
  // Leave blank to keep using the built-in defaults further down this file.
  CONTENT_SHEET_ID:   '1pegGwEjddFshFg9MoV51r2PfLwa3Ls76YUv_vEUakLA',
  FEATURED_TAB:       'Featured',
  REVIEWS_TAB:        'Reviews',
  BRIDAL_TAB:         'BridalReviews',
  SOURCED_TAB:        'Sourced',
  REALLIFE_TAB:       'RealLife',
  NEWS_TAB:           'News',
  NEWS_GID:           '1967713786',   // stable ID of the News tab (name-based fetch is unreliable)

  WHATSAPP: '6737471323',
  WA_MSG_PREORDER: 'Hi Anggun Pesona! I\'d like to pre-order 🛍️',
  WA_MSG_INSTOCK:  'Hi Anggun Pesona! I\'d like to order an in-stock item ⚡',
  WA_MSG_BRIDAL:   'Hi Anggun Pesona! I\'d like to enquire about your Bridal Concierge services 💍',
  WA_MSG_GENERAL:  'Hi Anggun Pesona! I have an enquiry 👋',
  WA_MSG_NOTIFY:   'Hi! I\'d like to be notified when your own collection launches 🎉',

  INSTAGRAM: 'anggunpesona.co',
  CURRENCY:  'B$',
  DEMO_MODE: false,
};

const COLOUR_MAP = {
  'Black':'#1C1C1C','White':'#FFFFFF','Ivory':'#FFFFF0','Cream':'#FDF6E3','Nude':'#D2A679',
  'Beige':'#C8A882','Tan':'#B8894A','Brown':'#7B4B2A','Chocolate':'#5C3317','Pink':'#F2A4BB',
  'Blush':'#F9C5C5','Rose':'#D4758A','Dusty Rose':'#C08070','Red':'#CC2222','Burgundy':'#800020',
  'Maroon':'#6B0F1A','Navy':'#1B2A4A','Blue':'#3355AA','Green':'#3D7A5A','Sage':'#8FAF8A',
  'Gold':'#C9A96E','Silver':'#B0B0B0','Grey':'#888888','Camel':'#C19A6B',
};

const DEFAULT_CATEGORIES = ['Chic Finds', 'Flats', 'Heels', 'Sandals', 'Sneakers', 'Boots', 'Bags', 'Leopard Series', 'Tabi', 'Bag Finds'];

const DEMO_PREORDERS = [
  { category:'Flats', name:'Ribbed Ballet Flats', brand:'Studio Chic', price:'89', qty:'8', photo:'', photos:'', sizeChart:'', desc:'Minimalist ribbed ballet flats in ivory. The perfect elevated basic.', colors:'Ivory, Black, Nude', sizes:'Ivory:35,36,37,38,39|Black:36,37,38,39,40|Nude:35,36,37,38', popular:'x' },
  { category:'Heels', name:'Block Heel Mule', brand:'Elara Co.', price:'149', qty:'5', photo:'', photos:'', sizeChart:'', desc:'Structured block heel mule in nude beige. Office to dinner, effortlessly.', colors:'Nude, Black, Cream', sizes:'Nude:35,36,37,38,39|Black:36,37,38,39|Cream:35,36,37', popular:'x' },
  { category:'Sandals', name:'Woven Kitten Heel', brand:'Maeve Label', price:'119', qty:'10', photo:'', photos:'', sizeChart:'', desc:'Delicate woven kitten heel sandal in tan. Summer-ready chic.', colors:'Tan, Black, Brown', sizes:'36, 37, 38, 39, 40' },
  { category:'Heels', name:'Pointed Toe Pump', brand:'Studio Chic', price:'139', qty:'3', photo:'', photos:'', sizeChart:'', desc:'Classic pointed-toe pump in dusty rose. A timeless wardrobe staple.', colors:'Dusty Rose, Black, Nude', sizes:'35, 36, 37, 38, 39, 40', popular:'x' },
  { category:'Chic Finds', name:'Platform Loafer', brand:'Elara Co.', price:'159', qty:'12', photo:'', photos:'', sizeChart:'', desc:'Chunky platform loafer in chocolate brown. Bold, grounded, chic.', colors:'Chocolate, Black, Camel', sizes:'36, 37, 38, 39, 40, 41' },
  { category:'Sandals', name:'Strappy Sandal', brand:'Lumière', price:'129', qty:'7', photo:'', photos:'', sizeChart:'', desc:'Delicate strappy sandal with gold hardware. Made for golden hour.', colors:'Nude, Gold, Black', sizes:'35, 36, 37, 38, 39, 40' },
  { category:'Heels', name:'Slingback Kitten Heel', brand:'Maeve Label', price:'135', qty:'0', photo:'', photos:'', sizeChart:'', desc:'Elegant slingback in cream patent. Barely-there, completely chic.', colors:'Cream, Black', sizes:'Cream:36,37,38,39,40|Black:36,37,38,39,40' },
];

const DEMO_INSTOCKS = [
  { category:'Heels', name:'Asymmetric Sling Heel', brand:'Lumière', price:'179', photo:'', photos:'', sizeChart:'', desc:'Architectural asymmetric heel in cream suede. For the bold and beautiful.', colors:'Cream, Black', sizes:'Cream:36,37,38,39|Black:36,37,38,39,40' },
  { category:'Flats', name:'Velvet Mary Jane', brand:'Maeve Label', price:'99', photo:'', photos:'', sizeChart:'', desc:'Retro-inspired velvet Mary Jane in deep burgundy. Nostalgic and chic.', colors:'Burgundy, Black', sizes:'35, 36, 37, 38, 39' },
  { category:'Sandals', name:'Clear Strap Heeled Sandal', brand:'Studio Chic', price:'159', photo:'', photos:'', sizeChart:'', desc:'Barely-there clear strap sandal on a slim heel. Invisible, irresistible.', colors:'Nude, Silver', sizes:'35, 36, 37, 38, 39, 40' },
  { category:'Sneakers', name:'Slip-On Sneaker', brand:'AVRE', price:'89', photo:'', photos:'', sizeChart:'', desc:'Clean minimalist slip-on in white canvas. Casual, elevated.', colors:'White, Black', sizes:'36, 37, 38, 39, 40, 41' },
];

// REVIEW_SCREENSHOTS: Array of customer reviews with photos and optional captions.
// Format: [
//   { photo: 'Google Drive URL', caption: 'Optional caption text', product: 'Optional product name' },
//   { photos: 'URL1, URL2, URL3', caption: 'Multiple photos', product: 'Dr Cardin Drift Ballet' }
// ]
// The optional "product" field links a review to a specific shoe. When set, the
// review ALSO appears on that product's detail page (matched loosely, so small
// spelling/spacing differences still work). Leave it blank for general/service
// reviews — those land in the "Service & kind words" group.
//
// On the Reviews page, reviews are auto-sorted into three groups: Shoes, Bags,
// and Service. Blank product = Service; a product name containing "bag/tote/
// pouch/clutch" = Bags; everything else = Shoes. To force a group, add an
// optional "category" field (e.g. category: 'bags').
const REVIEW_SCREENSHOTS = [
  {photos: 'https://drive.google.com/file/d/1sByTAeX6INMrnq8TbJc2HZWt3Ul240DG/view?usp=drive_link, https://drive.google.com/file/d/1kCP6eui-s0GIvkhp_18r_oNPBpLSjXHv/view?usp=drive_link, https://drive.google.com/file/d/1BGybdGrzSFstnuTuJrH8Rd1D-NTikEwT/view?usp=drive_link,https://drive.google.com/file/d/1wsJ8ySasCV003gySHKf_yQldazG0BIys/view?usp=drive_link, https://drive.google.com/file/d/1_scTc1IS4WiVk18h_HglUGCcV45nMFNc/view?usp=drive_link, https://drive.google.com/file/d/1QDxxQA2dezaj8oW3v4YhRnTm5-aibSN9/view?usp=drive_link', caption: 'Kind words from our new and regular Angguns for our service experiences!!', product: ''},
  {photos: 'https://drive.google.com/file/d/1d6j2d06GaOyUxybBB6JU2rQnGoGttGDN/view?usp=drive_link, https://drive.google.com/file/d/1gQ-UYandm6lAALw7Q1MA-6iMUc155YB_/view?usp=drive_link, https://drive.google.com/file/d/1lOwXs43gNwQcsgRt1CrcAto9I6PzLnvL/view?usp=drive_link,https://drive.google.com/file/d/1-wCbng6yiBjGBoySu_stHEmI6CMLjtCz/view?usp=drive_link', caption:'Review on Flowerstrap Ballerina & Compliments to Anggun Pesona!', product: 'Flowerstrap Ballerina'},
  {photos: 'https://drive.google.com/file/d/1r_XNA_Z05vSU6zEZIsL9iQh8izCs1XQp/view?usp=drive_link, https://drive.google.com/file/d/1IxigyeXKvzumTaD4r007q8gWs-dPDlzl/view?usp=drive_link, https://drive.google.com/file/d/1BGAqESXPpNv4ouE4TN44pGHpNdfsJQCF/view?usp=drive_link, https://drive.google.com/file/d/1CZdtXB2e4OaAOdMVK7LLd8kwGvkQ8zLD/view?usp=drive_link', caption: 'Review on Dr Cardin Drift Ballet', product: 'Dr Cardin Drift Ballet'},
  {photos: 'https://drive.google.com/file/d/1yNjl1c8CSrrKtLEoxPucn7qMjy8sofEw/view?usp=drive_link, https://drive.google.com/file/d/1ZTrMYg7igotdQg7-ebtuui3HwqY1TLx_/view?usp=drive_link, https://drive.google.com/file/d/18nuMPd4N_UUaq8QLBGWhv33f23hlX_92/view?usp=drive_link, https://drive.google.com/file/d/1EbGJT50QFheCMkAaMNlin84ItTWKYLyd/view?usp=drive_link', caption: 'Review on Sport Ballerina and our service', product: 'Sport Ballerina'},
  {photo: 'https://drive.google.com/file/d/1xIuYX9qHsVLkJYNevBQXCwhFgVCmYzGl/view?usp=drive_link, https://drive.google.com/file/d/1ZmPUQ0_3mvg5bnP7FcGtGp4GjHDVWYNf/view?usp=drive_link', caption: 'Receiving defect item can happen and being transparent matters, we worked it out with our Anggun, always.'}
];

// BRIDAL_REVIEWS: Array of bridal customer reviews with photos and optional captions
// Format: [
//   { photo: 'Google Drive URL', caption: 'Optional caption text' },
//   { photos: 'URL1, URL2, URL3', caption: 'Multiple photos' }
// ]
const BRIDAL_REVIEWS = [
  {photos: 'https://drive.google.com/file/d/1m2Veyula4FxyxxLu4y9ufXIx-OfchDkP/view?usp=drive_link, https://drive.google.com/file/d/1FAaamm4l5R4T8xIY04lFW38I-An_Hnnj/view?usp=drive_link, https://drive.google.com/file/d/1bgXfxDRqVEoFYgthuButl563Q5-U49iz/view?usp=drive_link, https://drive.google.com/file/d/15p71RyViUK_xINkDoLV7L1IGus9JYbpt/view?usp=drive_link, https://drive.google.com/file/d/1qTICbBh2HIC8gNelI-mJpyf14hgJ8HqA/view?usp=drive_link', caption: 'Sourced bridal heels our first Anggun Bride-to-be during our Saigon Trip 2026'}
];

// SOURCED_PHOTOS: Array of sourced finds with optional captions
// Format: [
//   { url: 'Google Drive URL or direct image URL', caption: 'Optional caption' },
//   { url: 'URL2', caption: 'Another caption' }
// ]
const SOURCED_PHOTOS = [
  {url: 'https://drive.google.com/file/d/1uBJanc_FeFrPyQuygWI2Rsz3IBBbIthf/view?usp=sharing', caption: 'Mid June Batch'},
  {url: 'https://drive.google.com/file/d/1vf0ji53iZg2we4BD7B9HCjIvVeIcAJVK/view?usp=drive_link, https://drive.google.com/file/d/1s2Wa7-cep28jl0wJ-U1G2Lr6sIkH6gJr/view?usp=sharing, https://drive.google.com/file/d/1zNcQDW4Jev3FFjSWbbkWwnv51_wEdsrN/view?usp=sharing, https://drive.google.com/file/d/1O8u_kw4t--bPr1tGQNdPX1YqNGUtOcUe/view?usp=sharing, https://drive.google.com/file/d/1rVqIcvKJSbkvvqUsMRkLjgCPrm_DRxap/view?usp=sharing', caption: 'Machino sourced'},
  {url: 'https://drive.google.com/file/d/1pptnQX6PpK-x2konvb744d-Md5mlrWrD/view?usp=sharing', caption: '8th PO Batch 2026'},
  {url: 'https://drive.google.com/file/d/1XVmZTyUQck_bW40lzVjtqtqX60r6KpEx/view?usp=sharing', caption: '7th PO Batch 2026' },
  {url: 'https://drive.google.com/file/d/1SmU885pv1uRaxZHZpV90i33TRIgF_0VJ/view?usp=sharing', caption: '6th PO Batch 2026' },
  {url: 'https://drive.google.com/file/d/1BZL1h1Y_aPCl-9aFCZWlwM0c_HXB73fw/view?usp=drive_link', caption: 'Delayed Batch 5th PO 2026'},
  {url: 'https://drive.google.com/file/d/1QvLQdqmnhYo_dtGVm8x-xy1C5V-xaw4R/view?usp=drive_link', caption: '5th PO Batch 2026'},
  {url: 'https://drive.google.com/file/d/1kLTo4BlS3U1AUShdrze41-PQvombnrcN/view?usp=drive_link', caption: 'Delayed Batch 4th RAYA PO 2026'},
  {url:'https://drive.google.com/file/d/1Li4j1qbChNIJyPptz4SetkhnPkWOJShQ/view?usp=drive_link', caption: '4th RAYA PO Batch 2026'},
  {url:'https://drive.google.com/file/d/1cQggDVESv0i1Iobqetn-tF9zCnALb1k5/view?usp=drive_link', caption: '3rd RAYA PO Batch 2026'},
  {url: 'https://drive.google.com/file/d/1TFgUi5ahZzq7vjsw63YklRIX4x-Q3gxm/view?usp=drive_link', caption: '2nd RAYA PO Batch 2026'},
  {url: 'https://drive.google.com/file/d/1SUt77Uj5khyEDvzYcfj9G8RlqGZz3DCX/view?usp=drive_link', caption: '1st RAYA PO Batch 2026'}
];

// REALLIFE_PHOTOS: "How it looks like" — our own real-life photos of a shoe
// order after we've sourced/received it. Shown on that shoe's PRE-ORDER detail
// page (matched by the "product" column, same loose matching as reviews).
// Format: [
//   { product: 'Flowerstrap Ballerina', photos: 'URL1, URL2, URL3', caption: 'Mid June batch' }
// ]
// Leave this empty — real entries come from the "RealLife" tab of the Content
// sheet (columns: product, photos, caption). Nothing shows until a product is tagged.
const REALLIFE_PHOTOS = [];

// DEFAULT_FEATURED: home page "favourites last batch" trio.
// Used only when CONTENT_SHEET_ID is blank OR the Featured tab is empty.
const DEFAULT_FEATURED = [
  {photo: 'https://lh3.googleusercontent.com/d/1tFEE8oN1Tfn-XxGIZWmV7kpGkBhPO1WD', caption: 'Clogs with Bow (B$38)'},
  {photo: 'https://lh3.googleusercontent.com/d/11MypY-y9POdsxTxA12hxCxC6Q3cyxtJ_', caption: 'Polkadot Ballerina (B$35)'},
  {photo: 'https://lh3.googleusercontent.com/d/1EKNs5-SPX0DJc0N7OU12OVupgfV6wTSo', caption: 'Dusto Casual Sneaker (B$38)'}
];

// DEFAULT_NEWS: home page "What's New" chips (+ ticker headlines).
// Used only when CONTENT_SHEET_ID is blank OR the News tab is empty.
// One entry = one chip. Newest first. Sheet columns: chip_text, headline, blurb, link, link_text
//   chip_text = short label shown on the chip (e.g. "Chic Finds dropped")
//   headline  = title shown when the chip is tapped + the line in the scrolling ticker
//   blurb     = short paragraph revealed in the panel when the chip is tapped
//   link      = where the panel button goes (e.g. /preorders) — optional
//   link_text = label on that button (e.g. "Browse Chic Finds") — optional
const DEFAULT_NEWS = [
  {chip_text: 'Chic Finds dropped', headline: 'New “Chic Finds” category just dropped', blurb: 'Our new curated edit of everyday elevated pairs is now live in pre-orders — go take a peek.', link: '/preorders', link_text: 'Browse Chic Finds'},
  {chip_text: 'New in-stocks',      headline: 'More in-stocks added this week',           blurb: 'Fresh ready-to-ship pieces just landed. Limited pairs, no restock — if you see it, grab it.', link: '/instocks', link_text: 'Shop in-stocks'},
  {chip_text: 'Bridal slots open',  headline: 'Bridal concierge slots open for August',   blurb: 'Booking bridal shoes for August? A few curation and custom-heel slots just opened up.', link: '/bridal', link_text: 'Book bridal'}
];

// Live content — starts as the built-in defaults, replaced by sheet rows when loaded.
let featuredData = DEFAULT_FEATURED;
let newsData     = [];   // stays empty (What's New hidden) until a real News tab is found
let newsItems    = [];   // filtered list currently on screen (used by the chip panel toggle)
let reviewsData  = REVIEW_SCREENSHOTS;
let bridalData   = BRIDAL_REVIEWS;
let sourcedData  = SOURCED_PHOTOS;
let reallifeData = REALLIFE_PHOTOS;
let reviewContentLoaded = false;   // true once the Reviews sheet has been fetched
let _reviewsLoadPromise = null;    // de-dupes concurrent loads

/* ============================================================
   STATE
   ============================================================ */
let poLoaded = false, isLoaded = false;
let poProducts = [], isProducts = [];
let prevPage = 'preorders';
/* Filter selections are arrays (multi-select). Empty array = no filter / "all". */
let currentPoFilter = [], currentPoBrand = [], currentPoSize = [], currentPoSort = 'default';
let currentIsFilter = [], currentIsBrand = [], currentIsSize = [];
let poCurrentPage = 1;
const PO_PER_PAGE = 24;

/* ============================================================
   PRODUCT URL ROUTING
   ============================================================ */
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function getProductParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('product');
}

function getPageParam() {
  const params = new URLSearchParams(window.location.search);
  const p = parseInt(params.get('page'));
  return (p && p > 0) ? p : 1;
}

function setPageUrl(n) {
  const page = getCurrentPage();
  const basePath = '/' + page;
  const url = n > 1 ? `${basePath}?page=${n}` : basePath;
  history.pushState({ page: n }, '', url);
}

function setProductUrl(product, source) {
  const slug = slugify(product.name);
  const basePath = source === 'preorders' ? '/preorders' : '/instocks';
  const newUrl = `${basePath}?product=${encodeURIComponent(slug)}`;
  history.pushState({ productSlug: slug, source: source }, '', newUrl);
}

function clearProductUrl() {
  const page = getCurrentPage();
  const basePath = page === 'home' ? '/' : '/' + page;
  const pageNum = page === 'preorders' ? poCurrentPage : 1;
  const url = (page === 'preorders' && pageNum > 1) ? `${basePath}?page=${pageNum}` : basePath;
  history.pushState({ catalog: true }, '', url);
}

function findProductBySlug(slug, source) {
  const products = source === 'preorders' ? poProducts : isProducts;
  const decodedSlug = decodeURIComponent(slug);
  for (let i = 0; i < products.length; i++) {
    if (slugify(products[i].name) === decodedSlug) return i;
  }
  return -1;
}

/* Listen for browser back/forward */
window.addEventListener('popstate', function(e) {
  const page = getCurrentPage();
  if (page !== 'preorders' && page !== 'instocks') return;

  const slug = getProductParam();
  if (slug) {
    const idx = findProductBySlug(slug, page);
    if (idx >= 0) {
      renderDetail(idx, page);
      return;
    }
  }
  /* No product param — show catalog */
  hideDetail(true);
  /* Apply page number from URL (handles back/forward through paginated pages) */
  if (page === 'preorders') {
    poCurrentPage = getPageParam();
    renderPreorders();
  }
});

/* ============================================================
   ROUTER (hash-based SPA — pages live in /pages/<name>.html)
   ============================================================ */
const PAGE_TITLES = {
  home:      'Anggun Pesona — Curated Footwear',
  preorders: 'Pre-Orders · Anggun Pesona',
  instocks:  'Limited In-Stocks · Anggun Pesona',
  detail:    'Product · Anggun Pesona',
  bridal:    'Bridal Concierge · Anggun Pesona',
  shop:      'Coming Soon · Anggun Pesona',
  about:     'About · Anggun Pesona',
  reviews:   'Reviews & Finds · Anggun Pesona',
};

/* Multi-page: detect current page from URL */
const PAGE_ROUTES = {
  '/': 'home',
  '/preorders': 'preorders',
  '/instocks': 'instocks',
  '/bridal': 'bridal',
  '/reviews': 'reviews',
  '/shop': 'shop',
  '/about': 'about',
};

function getCurrentPage() {
  let path = window.location.pathname.replace(/\/index\.html$/, '').replace(/\/$/, '') || '/';
  return PAGE_ROUTES[path] || 'home';
}

function showPage(page) {
  /* In multi-page mode, this is used for detail toggling within a page */
  if (page === 'detail') {
    const detailEl = document.getElementById('page-detail');
    const catalogEl = document.querySelector('.page-catalog');
    if (detailEl) detailEl.style.display = 'block';
    if (catalogEl) catalogEl.style.display = 'none';
    const pageWrapper = detailEl?.closest('.page');
    if (pageWrapper) pageWrapper.classList.add('detail-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  /* For non-detail, navigate to the actual page */
  const url = page === 'home' ? '/' : '/' + page;
  window.location.href = url;
}

function hideDetail(skipUrlUpdate) {
  const detailEl = document.getElementById('page-detail');
  const catalogEl = document.querySelector('.page-catalog');
  if (detailEl) detailEl.style.display = 'none';
  if (catalogEl) catalogEl.style.display = 'block';
  const pageWrapper = detailEl?.closest('.page');
  if (pageWrapper) pageWrapper.classList.remove('detail-active');
  if (!skipUrlUpdate) clearProductUrl();
  /* Restore page title */
  const page = getCurrentPage();
  document.title = PAGE_TITLES[page] || PAGE_TITLES.home;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nav(page) {
  const url = page === 'home' ? '/' : '/' + page;
  window.location.href = url;
}

function initCurrentPage() {
  const page = getCurrentPage();
  document.title = PAGE_TITLES[page] || PAGE_TITLES.home;

  /* Set active nav link */
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    const linkPage = PAGE_ROUTES[href] || '';
    a.classList.toggle('active', linkPage === page);
  });

  /* Page-specific init */
  const productSlug = getProductParam();

  if (page === 'preorders') {
    /* Restore pagination page from URL on load/refresh */
    if (!productSlug) poCurrentPage = getPageParam();
    if (!poLoaded) loadPreorders().then(() => {
      if (productSlug) openProductBySlug(productSlug, 'preorders');
    });
    else {
      renderPreorders();
      if (productSlug) openProductBySlug(productSlug, 'preorders');
    }
    // Load reviews in the background so "★ Reviewed" badges appear on cards.
    ensureReviewsLoaded(() => renderPreorders());
  }
  if (page === 'instocks') {
    if (!isLoaded) loadInstocks().then(() => {
      if (productSlug) openProductBySlug(productSlug, 'instocks');
    });
    else {
      renderInstocks();
      if (productSlug) openProductBySlug(productSlug, 'instocks');
    }
    // Load reviews in the background so "★ Reviewed" badges appear on cards.
    ensureReviewsLoaded(() => renderInstocks());
  }
  if (page === 'reviews')   { renderReviews(); loadReviewContent().then(renderReviews); }
  if (page === 'bridal')    { applyContactLinks(); }
  if (page === 'about')     { applyContactLinks(); initBrandsList(); }
  if (page === 'home')      { applyContactLinks(); renderFeatured(); loadFeatured().then(renderFeatured); renderNews(); loadNews().then(renderNews); }
}

function openProductBySlug(slug, source) {
  const idx = findProductBySlug(slug, source);
  if (idx >= 0) renderDetail(idx, source);
}

function toggleNav() { document.getElementById('navLinks').classList.toggle('open'); }

/* ============================================================
   SHEETS + DRIVE
   ============================================================ */
async function fetchSheet(id, gid) {
  const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&gid=${gid}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} — check Sheet ID and sharing settings`);
  const csv = await res.text();
  if (csv.toLowerCase().includes('<!doctype html>')) throw new Error('Sheet is private — share as "Anyone with the link can view"');
  return new Promise((resolve, reject) => {
    Papa.parse(csv, { header: true, skipEmptyLines: true, transformHeader: h => h.trim(), complete: r => resolve(r.data), error: e => reject(e) });
  });
}

/* Fetch a tab by its NAME (friendlier than GID for non-technical editors). */
async function fetchSheetByName(id, sheetName) {
  const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} — check Sheet ID and sharing settings`);
  const csv = await res.text();
  if (csv.toLowerCase().includes('<!doctype html>')) throw new Error('Sheet is private — share as "Anyone with the link can view"');
  return new Promise((resolve, reject) => {
    Papa.parse(csv, { header: true, skipEmptyLines: true, transformHeader: h => h.trim(), complete: r => resolve(r.data), error: e => reject(e) });
  });
}

/* Load the home "favourites" trio from the Featured tab (falls back to defaults). */
async function loadFeatured() {
  if (!CONFIG.CONTENT_SHEET_ID) return;
  try {
    const rows = await fetchSheetByName(CONFIG.CONTENT_SHEET_ID, CONFIG.FEATURED_TAB);
    const clean = (rows || []).filter(r => (r.photo || r.photos || '').trim());
    if (clean.length) featuredData = clean;
  } catch (e) { console.warn('Featured content load failed — using defaults', e); }
}

/* Load the home "What's New" news column from the News tab (falls back to defaults). */
async function loadNews() {
  if (!CONFIG.CONTENT_SHEET_ID) return;
  try {
    // Fetch the News tab by its stable GID, NOT by name. Google Sheets' gviz "sheet="
    // name parameter is unreliable and can silently return the FIRST tab (Featured)
    // instead of News — which is why the ticker was showing nothing. The GID always
    // resolves to the correct tab. (GID stays fixed even if the tab is renamed.)
    const rows = CONFIG.NEWS_GID
      ? await fetchSheet(CONFIG.CONTENT_SHEET_ID, CONFIG.NEWS_GID)
      : await fetchSheetByName(CONFIG.CONTENT_SHEET_ID, CONFIG.NEWS_TAB);

    // Accept either the rich columns (chip_text/headline) or the simple photo+caption format.
    const clean = (rows || []).filter(r => (r.chip_text || r.headline || r.caption || '').trim());

    // Newest first: sheet is edited top-to-bottom, so reverse to show latest rows first.
    newsData = clean.length ? clean.slice().reverse() : [];
  } catch (e) { console.warn('News content load failed — using defaults', e); }
}

/* Load Reviews / Bridal / Sourced tabs (each falls back to defaults on failure). */
async function loadReviewContent() {
  if (!CONFIG.CONTENT_SHEET_ID) return;
  const grab = async (tab) => {
    const rows = await fetchSheetByName(CONFIG.CONTENT_SHEET_ID, tab);
    return (rows || []).filter(r => (r.photos || r.photo || r.url || '').trim());
  };
  const [rev, bri, sou, rea] = await Promise.allSettled([
    grab(CONFIG.REVIEWS_TAB), grab(CONFIG.BRIDAL_TAB), grab(CONFIG.SOURCED_TAB), grab(CONFIG.REALLIFE_TAB)
  ]);
  if (rev.status === 'fulfilled' && rev.value.length) reviewsData = rev.value;
  if (bri.status === 'fulfilled' && bri.value.length) bridalData  = bri.value;
  if (sou.status === 'fulfilled' && sou.value.length) sourcedData = sou.value;
  if (rea.status === 'fulfilled' && rea.value.length) reallifeData = rea.value;
  if (rev.status === 'rejected') console.warn('Reviews load failed — using defaults', rev.reason);
  reviewContentLoaded = true;
}

/* Fetch the Reviews sheet at most once, then run cb. Used by product detail
   pages so tagged reviews show there too (the Reviews page loads it directly). */
function ensureReviewsLoaded(cb) {
  if (reviewContentLoaded) { if (cb) cb(); return; }
  if (!_reviewsLoadPromise) _reviewsLoadPromise = loadReviewContent().catch(() => {});
  _reviewsLoadPromise.then(() => { if (cb) cb(); });
}

/* Render the home "favourites" trio. */
function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const items = (featuredData && featuredData.length) ? featuredData : DEFAULT_FEATURED;
  grid.innerHTML = items.map(it => {
    const first = (it.photo || it.photos || '').split(',')[0].trim();
    const src = driveUrl(first);
    const cap = (it.caption || '').replace(/</g, '&lt;');
    return `<div class="gallery-card">
      <div class="gallery-img-ph">
        ${src ? `<span class="wm-box" style="width:100%;height:100%;"><img src="${src}" alt="${cap.replace(/"/g, '&quot;')}" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="reviewImgFail(this)"></span>` : ''}
      </div>
      <p class="caption">${cap}</p>
    </div>`;
  }).join('');
}

/* Render the home "What's New" hero chips + the scrolling ticker bar. */
function renderNews() {
  const esc = s => String(s || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const items = (newsData || []).filter(n => (n.headline || n.caption || n.chip_text || '').trim());
  const wrap   = document.getElementById('hero-news');
  const chips  = document.getElementById('hero-news-chips');
  const ticker = document.getElementById('news-ticker');

  // Hide both blocks entirely when there's no news.
  if (!items.length) {
    if (wrap)   wrap.style.display   = 'none';
    if (ticker) ticker.style.display = 'none';
    return;
  }

  newsItems = items;   // remember for toggleNewsPanel()

  if (chips) {
    // Only rows that have chip_text become chips. A row with a headline but a
    // BLANK chip_text is "ticker-only" — it's skipped here but still scrolls in
    // the ticker below. (Index i is kept aligned with newsItems for the panel.)
    const chipHTML = items.map((n, i) => {
      const label = (n.chip_text || '').trim();
      if (!label) return '';   // no chip_text = ticker-only, no chip
      const cls = 'nc' + ((i % 3) + 1);   // cycle 3 soft colour variants
      return `<button type="button" class="hero-chip ${cls}" aria-expanded="false" onclick="toggleNewsPanel(this, ${i})"><span class="chip-dot"></span>${esc(label)}<span class="chip-caret">⌄</span></button>`;
    }).join('');
    chips.innerHTML = chipHTML;
    // Hide the whole "What's New" chip block if no row has chip_text.
    if (wrap) wrap.style.display = chipHTML ? '' : 'none';
    // Reset any open panel on re-render (and restore the "tap a tag" hint).
    const panel = document.getElementById('hero-news-panel');
    if (panel) panel.classList.remove('open');
    const hint = document.getElementById('hero-news-hint');
    if (hint) hint.style.display = '';
  }

  if (ticker) {
    ticker.style.display = '';
    // Duplicate the headline set so the marquee loops seamlessly.
    const heads = items.map(n => `<span>✦ ${esc((n.headline || n.caption || n.chip_text || '').trim())}</span>`).join('');
    ticker.innerHTML = `<div class="ticker-track">${heads}${heads}</div>`;
  }
}

/* Expand/collapse the "What's New" info panel under the chips. */
function toggleNewsPanel(btn, i) {
  const panel = document.getElementById('hero-news-panel');
  const chips = document.getElementById('hero-news-chips');
  const hint  = document.getElementById('hero-news-hint');
  if (!panel || !chips) return;
  const item = newsItems[i] || {};
  const wasActive = btn.classList.contains('active');

  // Clear all chips, then re-activate this one (unless we're closing it).
  chips.querySelectorAll('.hero-chip').forEach(c => { c.classList.remove('active'); c.setAttribute('aria-expanded', 'false'); });

  if (wasActive) { panel.classList.remove('open'); if (hint) hint.style.display = ''; return; }

  // A panel is opening — retire the "tap a tag" nudge.
  if (hint) hint.style.display = 'none';

  panel.querySelector('.np-title').textContent = (item.headline || item.caption || item.chip_text || '').trim();

  // Optional photo (from a "photo" column of Google Drive links).
  const imgEl = panel.querySelector('.np-img');
  const photo = driveUrl((item.photo || item.photos || '').split(',')[0].trim());
  if (photo) {
    imgEl.src = photo;
    imgEl.style.display = '';
    imgEl.onerror = () => { imgEl.style.display = 'none'; };
  } else {
    imgEl.style.display = 'none';
  }

  const blurbEl = panel.querySelector('.np-blurb');
  const blurb = (item.blurb || '').trim();
  blurbEl.textContent = blurb;
  blurbEl.style.display = blurb ? '' : 'none';

  const linkEl = panel.querySelector('.np-link');
  const link = (item.link || '').trim();
  if (link) {
    linkEl.setAttribute('href', link);
    linkEl.textContent = (item.link_text || 'View more').trim() + ' →';
    linkEl.style.display = '';
  } else {
    linkEl.style.display = 'none';
  }

  btn.classList.add('active');
  btn.setAttribute('aria-expanded', 'true');
  panel.classList.add('open');
}

function driveUrl(raw) {
  if (!raw || !raw.trim()) return '';
  const m = raw.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? `https://lh3.googleusercontent.com/d/${m[1]}` : raw.trim();
}

function imgOrPlaceholder(url, emoji = '👠') {
  const src = driveUrl(url);
  if (src) return `<div class="wm-box"><img class="product-image" src="${src}" alt="Product" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="product-img-placeholder" style="display:none">${emoji}</div></div>`;
  return `<div class="product-img-placeholder">${emoji}</div>`;
}

function fmtPrice(p) {
  if (!p) return '—';
  return (String(p).startsWith('B$') || String(p).startsWith('RM')) ? p : CONFIG.CURRENCY + p;
}

/* Parse comma-separated categories into trimmed array */
function parseCats(raw) {
  if (!raw) return ['Other'];
  return raw.split(',').map(c => c.trim()).filter(Boolean);
}

/* Check if product matches the selected categories.
   filters is an array; empty = match all; otherwise OR (product in ANY selected cat). */
function matchesCat(product, filters) {
  if (!filters || !filters.length) return true;
  const cats = parseCats(product.category);
  return filters.some(f => cats.includes(f));
}

/* Is this product flagged as "popular"? Accepts x, yes, y, true, ✓, 1 (any case). */
function isPopular(product) {
  const v = String(product && product.popular != null ? product.popular : '').trim().toLowerCase();
  return ['x', 'yes', 'y', 'true', '✓', '1'].includes(v);
}

/* Get all unique sizes available for a product
   Handles both "35,36,37" and "Color1:35,36|Color2:37,38" formats */
function getProductSizes(product) {
  if (!product || !product.sizes) return [];
  const variants = parseSizeVariants(product.sizes);
  const all = new Set();
  Object.values(variants.map).forEach(arr => arr.forEach(s => all.add(s)));
  return [...all];
}

/* Check if a product has ANY of the selected sizes available.
   sizes is an array; empty = match all. */
function matchesSize(product, sizes) {
  if (!sizes || !sizes.length) return true;
  const ps = getProductSizes(product);
  return sizes.some(s => ps.includes(s));
}

/* ---- Multi-select filter helpers (shared by pre-orders + in-stocks) ---- */
function toggleVal(arr, v) {
  const i = arr.indexOf(v);
  if (i >= 0) arr.splice(i, 1); else arr.push(v);
  return arr;
}
function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}
/* Build the HTML for one row of filter chips */
function buildChips(values, selected, toggleFn) {
  return values.map(v =>
    `<button type="button" class="fchip${selected.includes(v) ? ' on' : ''}" ` +
    `data-v="${escAttr(v)}" onclick="${toggleFn}(this.dataset.v)">${v}</button>`
  ).join('');
}
function openFilterSheet(ns) {
  const sheet = document.getElementById(ns === 'po' ? 'poFilterSheet' : 'isFilterSheet');
  const back  = document.getElementById(ns === 'po' ? 'poSheetBackdrop' : 'isSheetBackdrop');
  if (sheet) sheet.classList.add('open');
  if (back)  back.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeFilterSheet(ns) {
  const sheet = document.getElementById(ns === 'po' ? 'poFilterSheet' : 'isFilterSheet');
  const back  = document.getElementById(ns === 'po' ? 'poSheetBackdrop' : 'isSheetBackdrop');
  if (sheet) sheet.classList.remove('open');
  if (back)  back.classList.remove('open');
  document.body.style.overflow = '';
}
function clearFilters(ns) {
  if (ns === 'po') {
    currentPoFilter = []; currentPoBrand = []; currentPoSize = [];
    poCurrentPage = 1; renderPreorders();
  } else {
    currentIsFilter = []; currentIsBrand = []; currentIsSize = [];
    renderInstocks();
  }
}
/* Update the little count badge on the Filters button */
function updateFilterCount(ns) {
  const groups = ns === 'po'
    ? [currentPoFilter, currentPoBrand, currentPoSize]
    : [currentIsFilter, currentIsBrand, currentIsSize];
  const n = groups.reduce((acc, arr) => acc + arr.length, 0);
  const badge = document.getElementById(ns === 'po' ? 'poFilterCount' : 'isFilterCount');
  if (!badge) return;
  badge.textContent = n;
  badge.style.display = n > 0 ? '' : 'none';
}

/* Sort sizes numerically when possible (EU sizes like 35, 36, 37.5) */
function sortSizes(sizes) {
  return [...sizes].sort((a, b) => {
    const na = parseFloat(a), nb = parseFloat(b);
    if (!isNaN(na) && !isNaN(nb)) return na - nb;
    return String(a).localeCompare(String(b));
  });
}

/* ============================================================
   PRE-ORDERS
   ============================================================ */
async function loadPreorders() {
  poLoaded = true;
  const $load  = document.getElementById('po-loading');
  const $grid  = document.getElementById('po-grid');
  const $empty = document.getElementById('po-empty');
  const $demo  = document.getElementById('po-demo-notice');
  const $setup = document.getElementById('po-setup-notice');

  $load.style.display = 'block'; $grid.innerHTML = ''; $empty.style.display = 'none';

  if (!CONFIG.PREORDER_SHEET_ID || CONFIG.DEMO_MODE) {
    $demo.style.display = 'block';
    $setup.style.display = CONFIG.PREORDER_SHEET_ID ? 'none' : 'block';
    poProducts = DEMO_PREORDERS;
  } else {
    $demo.style.display = 'none'; $setup.style.display = 'none';
    try {
      const rows = await fetchSheet(CONFIG.PREORDER_SHEET_ID, CONFIG.PREORDER_SHEET_GID);
      poProducts = rows.map(r => ({
        category: r['Category'] || r['category'] || 'Other',
        name: r['Product Name'] || r['name'] || '',
        brand: r['Brand'] || r['brand'] || '',
        price: r['Price (BND)'] || r['Price'] || r['price'] || '',
        qty: r['Quantity'] || r['qty'] || '',
        photo: r['Photo URL'] || r['photo'] || '',
        photos: r['Photos'] || r['photos'] || '',
        desc: r['Description'] || r['desc'] || '',
        colors: r['Colors'] || r['colors'] || '',
        sizes: r['Sizes'] || r['sizes'] || '',
        sizeChart: r['Size Chart'] || r['sizeChart'] || '',
        popular: r['Popular'] || r['popular'] || '',
      }));
    } catch(e) {
      poProducts = DEMO_PREORDERS;
      $demo.style.display = 'block';
      $demo.innerHTML = `⚠️ <strong>Could not load sheet:</strong> ${e.message}. Showing demo data.`;
      console.error('Pre-order fetch error:', e);
    }
  }
  $load.style.display = 'none';
  currentPoFilter = []; currentPoBrand = []; currentPoSize = [];
  renderPreorders();
}

/* Build compact page number list with ellipsis, e.g. 1 2 ... 5 6 */
function buildPageNumbers(current, total) {
  if (total <= 7) return Array.from({length: total}, (_, i) => i + 1);
  const pages = [];
  pages.push(1);
  if (current > 3) pages.push('...');
  for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
  if (current < total - 2) pages.push('...');
  pages.push(total);
  return pages;
}

function togglePoFilter(v) { toggleVal(currentPoFilter, v); poCurrentPage = 1; history.replaceState({}, '', '/preorders'); renderPreorders(); }
function togglePoBrand(v)  { toggleVal(currentPoBrand, v);  poCurrentPage = 1; history.replaceState({}, '', '/preorders'); renderPreorders(); }
function togglePoSize(v)   { toggleVal(currentPoSize, v);   poCurrentPage = 1; history.replaceState({}, '', '/preorders'); renderPreorders(); }
function setPoSort(s)   { currentPoSort   = s; poCurrentPage = 1; history.replaceState({}, '', '/preorders'); renderPreorders(); }

/* Extract a numeric price for sorting. Strips currency prefixes (B$, RM) and
   any non-numeric characters. Returns NaN when no number is present. */
function priceValue(p) {
  const raw = String(p == null ? '' : p).replace(/[^0-9.]/g, '');
  const n = parseFloat(raw);
  return isNaN(n) ? NaN : n;
}

/* Sort a product list in place according to the current sort option.
   Items without a valid price are pushed to the end for price sorts. */
function sortProducts(list, sortKey) {
  if (sortKey === 'price-asc' || sortKey === 'price-desc') {
    const dir = sortKey === 'price-asc' ? 1 : -1;
    return list.sort((a, b) => {
      const pa = priceValue(a.price), pb = priceValue(b.price);
      const aNaN = isNaN(pa), bNaN = isNaN(pb);
      if (aNaN && bNaN) return 0;
      if (aNaN) return 1;
      if (bNaN) return -1;
      return (pa - pb) * dir;
    });
  }
  if (sortKey === 'name-asc') {
    return list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }
  if (sortKey === 'popular') {
    /* Popular items float to the top; everything else keeps its original order. */
    return list.sort((a, b) => (isPopular(b) ? 1 : 0) - (isPopular(a) ? 1 : 0));
  }
  return list;
}
function goPoPage(n) { poCurrentPage = n; setPageUrl(n); renderPreorders(); window.scrollTo({ top: document.querySelector('.products-section')?.offsetTop - 80 || 0, behavior: 'smooth' }); }

function renderPreorders() {
  const filter      = currentPoFilter;
  const brandFilter = currentPoBrand;
  const sizeFilter  = currentPoSize;
  const $grid       = document.getElementById('po-grid');
  const $empty      = document.getElementById('po-empty');
  const $catChips   = document.getElementById('poCatChips');
  const $brandChips = document.getElementById('poBrandChips');
  const $brandRow   = document.getElementById('poBrandRow');
  const $sizeChips  = document.getElementById('poSizeChips');
  const $sizeRow    = document.getElementById('poSizeRow');
  // SPA partial may have been swapped out while async load was in flight.
  if (!$grid || !$catChips) return;

  /* Show "Most Popular" as a sort option only when at least one item is tagged. */
  const $popularOpt = document.querySelector('#sortSelectPO option[value="popular"]');
  if ($popularOpt) $popularOpt.style.display = poProducts.some(isPopular) ? '' : 'none';

  const sheetCats   = [...new Set(poProducts.flatMap(p => parseCats(p.category)))];
  const orderedCats = [...sheetCats].sort((a, b) => a.localeCompare(b));
  $catChips.innerHTML = buildChips(orderedCats, filter, 'togglePoFilter');

  const brands = [...new Set(poProducts.map(p => p.brand).filter(Boolean))].sort();
  if (brands.length > 1) {
    $brandRow.style.display = 'block';
    $brandChips.innerHTML = buildChips(brands, brandFilter, 'togglePoBrand');
  } else {
    $brandRow.style.display = 'none';
  }

  /* Populate size chips from all products' sizes */
  const allSizes = sortSizes([...new Set(poProducts.flatMap(p => getProductSizes(p)))]);
  if ($sizeRow && $sizeChips) {
    if (allSizes.length > 0) {
      $sizeRow.style.display = 'block';
      $sizeChips.innerHTML = buildChips(allSizes, sizeFilter, 'togglePoSize');
    } else {
      $sizeRow.style.display = 'none';
    }
  }

  updateFilterCount('po');

  /* Search filter */
  const searchEl = document.getElementById('poSearchInput');
  const searchTerm = searchEl ? searchEl.value.trim().toLowerCase() : '';

  const list = poProducts.filter(p =>
    matchesCat(p, filter) &&
    (brandFilter.length === 0 || brandFilter.includes(p.brand)) &&
    matchesSize(p, sizeFilter) &&
    (!searchTerm || p.name.toLowerCase().includes(searchTerm) || (p.brand || '').toLowerCase().includes(searchTerm) || (p.category || '').toLowerCase().includes(searchTerm))
  );
  if (!list.length) { $grid.innerHTML = ''; $empty.style.display = 'block'; document.getElementById('po-pagination') && (document.getElementById('po-pagination').innerHTML = ''); return; }
  $empty.style.display = 'none';

  /* Sort (applied after filtering, before pagination) */
  const $sortSel = document.getElementById('sortSelectPO');
  if ($sortSel && $sortSel.value !== currentPoSort) $sortSel.value = currentPoSort;
  sortProducts(list, currentPoSort);

  /* Pagination */
  const totalPages = Math.ceil(list.length / PO_PER_PAGE);
  if (poCurrentPage > totalPages) poCurrentPage = totalPages;
  const startIdx = (poCurrentPage - 1) * PO_PER_PAGE;
  const pageItems = list.slice(startIdx, startIdx + PO_PER_PAGE);

  $grid.innerHTML = pageItems.map((p, i) => {
    const origIndex = poProducts.indexOf(p);
    const qty = parseInt(p.qty) || 0;
    const qc = qty <= 0 ? 'qty-none' : qty <= 3 ? 'qty-low' : 'qty-ok';
    const qt = qty <= 0 ? 'Sold Out' : qty <= 3 ? `Only ${qty} left` : `${qty} available`;
    const price = fmtPrice(p.price);
    const firstPhoto = (p.photos || p.photo || '').split(',')[0];
    return `
    <div class="product-card" onclick="openProduct(${origIndex}, 'preorders')">
      ${productHasReviews(p) ? '<span class="review-badge">★ Reviewed</span>' : ''}
      ${imgOrPlaceholder(firstPhoto)}
      <div class="product-info">
        <div>${parseCats(p.category).map(c => `<span class="tag tag-cat">${c}</span>`).join('')}</div>
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-footer">
          <span class="product-price">${price}</span>
        </div>
        <div class="product-cta">
          <button class="btn-details" onclick="event.stopPropagation();openProduct(${origIndex},'preorders')">View Details →</button>
        </div>
      </div>
    </div>`;
  }).join('');

  /* Render pagination controls */
  const $pag = document.getElementById('po-pagination');
  if ($pag) {
    if (totalPages <= 1) { $pag.innerHTML = ''; }
    else {
      let html = `<button class="page-btn" onclick="goPoPage(${poCurrentPage - 1})" ${poCurrentPage === 1 ? 'disabled' : ''}>‹</button>`;
      const pages = buildPageNumbers(poCurrentPage, totalPages);
      pages.forEach(pg => {
        if (pg === '...') html += `<span class="page-ellipsis">…</span>`;
        else html += `<button class="page-btn${pg === poCurrentPage ? ' active' : ''}" onclick="goPoPage(${pg})">${pg}</button>`;
      });
      html += `<button class="page-btn" onclick="goPoPage(${poCurrentPage + 1})" ${poCurrentPage === totalPages ? 'disabled' : ''}>›</button>`;
      $pag.innerHTML = html;
    }
  }
}

/* ============================================================
   IN-STOCKS
   ============================================================ */
async function loadInstocks() {
  isLoaded = true;
  const $load  = document.getElementById('is-loading');
  const $grid  = document.getElementById('is-grid');
  const $empty = document.getElementById('is-empty');
  const $demo  = document.getElementById('is-demo-notice');

  $load.style.display = 'block'; $grid.innerHTML = ''; $empty.style.display = 'none';

  if (!CONFIG.INSTOCK_SHEET_ID || CONFIG.DEMO_MODE) {
    $demo.style.display = 'block'; isProducts = DEMO_INSTOCKS;
  } else {
    $demo.style.display = 'none';
    try {
      const rows = await fetchSheet(CONFIG.INSTOCK_SHEET_ID, CONFIG.INSTOCK_SHEET_GID);
      isProducts = rows.map(r => ({
        category: r['Category'] || r['category'] || 'Other',
        name: r['Product Name'] || '',
        brand: r['Brand'] || '',
        price: r['Price (BND)'] || r['Price'] || '',
        photo: r['Photo URL'] || '',
        photos: r['Photos'] || '',
        desc: r['Description'] || '',
        colors: r['Colors'] || '',
        sizes: r['Sizes'] || '',
        sizeChart: r['Size Chart'] || '',
      }));
    } catch(e) {
      isProducts = DEMO_INSTOCKS;
      $demo.style.display = 'block';
      $demo.innerHTML = `⚠️ <strong>Could not load sheet:</strong> ${e.message}. Showing demo data.`;
      console.error('In-stock fetch error:', e);
    }
  }
  $load.style.display = 'none';
  currentIsFilter = []; currentIsBrand = []; currentIsSize = [];
  renderInstocks();
}

function toggleIsFilter(v) { toggleVal(currentIsFilter, v); renderInstocks(); }
function toggleIsBrand(v)  { toggleVal(currentIsBrand, v);  renderInstocks(); }
function toggleIsSize(v)   { toggleVal(currentIsSize, v);   renderInstocks(); }

function renderInstocks() {
  const filter      = currentIsFilter;
  const brandFilter = currentIsBrand;
  const sizeFilter  = currentIsSize;
  const $filterBar  = document.getElementById('isFilterBar');
  const $catRow     = document.getElementById('isCatRow');
  const $brandRow   = document.getElementById('isBrandRow');
  const $sizeRow    = document.getElementById('isSizeRow');
  const $catChips   = document.getElementById('isCatChips');
  const $brandChips = document.getElementById('isBrandChips');
  const $sizeChips  = document.getElementById('isSizeChips');
  const $grid       = document.getElementById('is-grid');
  const $empty      = document.getElementById('is-empty');
  if (!$grid || !$filterBar) return; // partial was swapped out

  if (!isProducts.length) {
    $grid.innerHTML = ''; $empty.style.display = 'block';
    $filterBar.style.display = 'none';
    return;
  }
  $empty.style.display = 'none';

  const cats = [...new Set(isProducts.flatMap(p => parseCats(p.category)))];
  const orderedCats = [...cats].sort((a, b) => a.localeCompare(b));
  if (orderedCats.length > 1) {
    $filterBar.style.display = 'flex';
    $catRow.style.display = 'block';
    $catChips.innerHTML = buildChips(orderedCats, filter, 'toggleIsFilter');
  } else {
    $catRow.style.display = 'none';
  }

  const brands = [...new Set(isProducts.map(p => p.brand).filter(Boolean))].sort();
  if (brands.length > 1) {
    $filterBar.style.display = 'flex';
    $brandRow.style.display = 'block';
    $brandChips.innerHTML = buildChips(brands, brandFilter, 'toggleIsBrand');
  } else {
    $brandRow.style.display = 'none';
  }

  /* Populate size chips from all products' sizes */
  const allSizes = sortSizes([...new Set(isProducts.flatMap(p => getProductSizes(p)))]);
  if ($sizeRow && $sizeChips) {
    if (allSizes.length > 0) {
      $filterBar.style.display = 'flex';
      $sizeRow.style.display = 'block';
      $sizeChips.innerHTML = buildChips(allSizes, sizeFilter, 'toggleIsSize');
    } else {
      $sizeRow.style.display = 'none';
    }
  }

  updateFilterCount('is');

  const list = isProducts.filter(p =>
    matchesCat(p, filter) &&
    (brandFilter.length === 0 || brandFilter.includes(p.brand)) &&
    matchesSize(p, sizeFilter)
  );
  if (!list.length) { $grid.innerHTML = ''; $empty.style.display = 'block'; return; }

  $grid.innerHTML = list.map((p, i) => {
    const origIndex = isProducts.indexOf(p);
    const firstPhoto = (p.photos || p.photo || '').split(',')[0];
    return `
    <div class="product-card" onclick="openProduct(${origIndex}, 'instocks')">
      ${productHasReviews(p) ? '<span class="review-badge">★ Reviewed</span>' : ''}
      ${imgOrPlaceholder(firstPhoto, '⚡')}
      <div class="product-info">
        ${parseCats(p.category).map(c => `<span class="tag tag-cat">${c}</span>`).join('')}
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-footer">
          <span class="product-price">${fmtPrice(p.price)}</span>
        </div>
        <div class="product-cta">
          <button class="btn-details" onclick="event.stopPropagation();openProduct(${origIndex},'instocks')">View Details →</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ============================================================
   PRODUCT DETAIL
   ============================================================ */
function openProduct(index, source) {
  const products = source === 'preorders' ? poProducts : isProducts;
  const p = products[index];
  if (p) setProductUrl(p, source);
  renderDetail(index, source);
}

function renderDetail(index, source) {
  const p = source === 'preorders' ? poProducts[index] : isProducts[index];
  if (!p) { return; }
  prevPage = source;

  /* Update page title for shareability */
  document.title = `${p.name} · Anggun Pesona`;

  document.querySelector('.detail-back').textContent =
    `← Back to ${source === 'preorders' ? 'Pre-Orders' : 'In-Stocks'}`;

  const $imgPanel  = document.getElementById('detail-image-panel');
  const $infoPanel = document.getElementById('detail-info-panel');

  const photoRaw   = (p.photos && p.photos.trim()) ? p.photos : (p.photo || '');
  const photoList  = photoRaw.split(',').map(u => driveUrl(u.trim())).filter(Boolean);
  const mainSrc    = photoList[0] || '';
  const hasMultiple = photoList.length > 1;
  const arrowsHtml = hasMultiple
    ? `<button class="detail-arrow detail-arrow-left" onclick="event.stopPropagation();detailImgPrev()">‹</button>
       <button class="detail-arrow detail-arrow-right" onclick="event.stopPropagation();detailImgNext()">›</button>
       <div class="detail-counter">${1} / ${photoList.length}</div>`
    : '';
  const dotsHtml = hasMultiple
    ? `<div class="detail-dots">${photoList.map((_, i) => `<span class="detail-dot${i===0?' active':''}" onclick="event.stopPropagation();detailImgGoTo(${i})"></span>`).join('')}</div>`
    : '';
  const thumbsHtml = hasMultiple
    ? `<div class="detail-thumbs">${photoList.map((src, i) =>
        `<img class="detail-thumb${i===0?' active':''}" src="${src}" alt="Photo ${i+1}" onclick="event.stopPropagation();detailImgGoTo(${i})" onerror="reviewImgFail(this)">`
      ).join('')}</div>`
    : '';
  window._detailPhotos = photoList;
  window._detailPhotoIdx = 0;
  $imgPanel.innerHTML = mainSrc
    ? `<div class="detail-image-viewer" onclick="openCarousel(window._detailPhotos, window._detailPhotoIdx)">
         <img id="detail-main-img" class="detail-image" src="${mainSrc}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
         <div class="detail-img-placeholder" style="display:none">👠</div>
         ${arrowsHtml}
       </div>${dotsHtml}${thumbsHtml}`
    : `<div class="detail-img-placeholder">👠</div>`;
  // Add touch swipe to detail image viewer
  setupDetailSwipe();

  const isPreorder = source === 'preorders';
  const qty = parseInt(p.qty) || (isPreorder ? 0 : 1);
  const qc = qty <= 0 ? 'qty-none' : qty <= 3 ? 'qty-low' : 'qty-ok';
  const qt = qty <= 0 ? 'Sold Out' : qty <= 3 ? `Only ${qty} left` : `${qty} available`;
  const price = fmtPrice(p.price);
  const wa = `https://wa.me/${CONFIG.WHATSAPP}`;
  const ig = `https://instagram.com/${CONFIG.INSTAGRAM}`;
  window._waCtx = { isPreorder, name: p.name, price, wa };
  const ctaLabel = isPreorder ? 'Pre-order via WhatsApp' : 'Order via WhatsApp';

  const colourList = (p.colors || '').split(',').map(c => c.trim()).filter(Boolean);
  const coloursHtml = colourList.length ? `
    <div class="detail-section-label">Available Colours</div>
    <div class="colour-swatches" id="colour-swatches">
      ${colourList.map(c => `<button class="colour-pill" onclick="selectColour(this,'${c}')">${c}</button>`).join('')}
    </div>` : '';

  const sizeVariants = parseSizeVariants(p.sizes);
  window._currentSizeVariants = sizeVariants;
  let initialSizes;
  if (sizeVariants.isVariant) {
    const all = new Set();
    Object.values(sizeVariants.map).forEach(arr => arr.forEach(s => all.add(s)));
    initialSizes = [...all];
  } else {
    initialSizes = sizeVariants.map['*'];
  }
  const hasSizeChart = p.sizeChart && p.sizeChart.trim();
  const sizeChartBlock = hasSizeChart
    ? `<button class="size-chart-toggle" onclick="toggleSizeChart()">📏 View size chart</button>
       <div class="size-chart-table" id="sizeChartTable"><img src="${driveUrl(p.sizeChart)}" class="size-chart-img" alt="Size chart"></div>`
    : `<p class="size-chart-note">Not sure about your size? Contact us — we'll help you find the right fit.</p>`;
  const sizesHtml = initialSizes.length ? `
    <div class="detail-section-label">Available Sizes (EU)${sizeVariants.isVariant ? ' — select a colour to filter' : ''}</div>
    <div class="size-row" id="size-row">
      ${initialSizes.map(s => `<button class="size-btn" onclick="selectSize(this,'${s}')">${s}</button>`).join('')}
    </div>
    ${sizeChartBlock}` : '';

  const tagsHtml = [
    p.category ? `<span class="tag tag-cat">${p.category}</span>` : '',
  ].filter(Boolean).join('');

  const descLabel = 'Description';

  $infoPanel.innerHTML = `
    <div class="detail-tags">${tagsHtml}</div>
    <div class="detail-brand">${p.brand}</div>
    <h1 class="detail-name">${p.name}</h1>
    <div class="detail-price">${price}</div>
    <div class="detail-section-label" style="margin-bottom:0.5rem;">${descLabel}</div>
    <p class="detail-desc">${p.desc || 'No description available.'}</p>
    ${coloursHtml}
    ${sizesHtml}
    <div class="detail-cta">
      <div class="cta-row">
        <a id="wa-cta-btn" href="${wa}" target="_blank" class="btn btn-whatsapp">${ctaLabel}</a>
        <a href="${ig}" target="_blank" class="btn btn-instagram">DM on Instagram</a>
      </div>
      <p class="detail-cta-note">${isPreorder ? 'select your preferred colour and size above, then tap to order — we\'ll confirm availability!' : 'select your preferred colour and size above, then tap to order — we\'ll assist you from there!'}</p>
    </div>`;

  showPage('detail');
  buildWaLink();
  window._currentDetailProduct = p;
  renderProductRealLife(p);
  renderProductReviews(p);
  // Product pages don't fetch the Content sheet on load — do it lazily the first
  // time a detail page is opened, then re-render the real-life + reviews sections.
  ensureReviewsLoaded(() => {
    if (window._currentDetailProduct === p) { renderProductRealLife(p); renderProductReviews(p); }
  });
}

/* Detail image navigation */
function detailImgGoTo(idx) {
  const photos = window._detailPhotos;
  if (!photos || idx < 0 || idx >= photos.length) return;
  window._detailPhotoIdx = idx;
  const main = document.getElementById('detail-main-img');
  if (main) main.src = photos[idx];
  const counter = document.querySelector('.detail-counter');
  if (counter) counter.textContent = `${idx + 1} / ${photos.length}`;
  document.querySelectorAll('.detail-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  document.querySelectorAll('.detail-thumb').forEach((t, i) => t.classList.toggle('active', i === idx));
}
function detailImgNext() {
  const photos = window._detailPhotos;
  if (!photos) return;
  const next = (window._detailPhotoIdx + 1) % photos.length;
  detailImgGoTo(next);
}
function detailImgPrev() {
  const photos = window._detailPhotos;
  if (!photos) return;
  const prev = (window._detailPhotoIdx - 1 + photos.length) % photos.length;
  detailImgGoTo(prev);
}
function setupDetailSwipe() {
  const viewer = document.querySelector('.detail-image-viewer');
  if (!viewer) return;
  let startX = 0;
  viewer.addEventListener('touchstart', e => { startX = e.changedTouches[0].screenX; }, { passive: true });
  viewer.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) detailImgNext(); else detailImgPrev();
      e.preventDefault();
    }
  });
}

function buildWaLink() {
  const ctx = window._waCtx;
  if (!ctx) return;
  const colour = document.querySelector('.colour-pill.selected')?.textContent?.trim() || '';
  const size   = document.querySelector('.size-btn.selected')?.textContent?.trim() || '';
  const lines = [ctx.isPreorder
    ? `Hi Anggun Pesona! I'd like to pre-order 🛍️`
    : `Hi Anggun Pesona! I'd like to order ⚡`,
    ``,
    `Product: ${ctx.name}`];
  if (ctx.price && ctx.price !== '—') lines.push(`Price: ${ctx.price}`);
  if (colour) lines.push(`Colour: ${colour}`);
  if (size)   lines.push(`Size: EU ${size}`);
  const btn = document.getElementById('wa-cta-btn');
  if (btn) btn.href = `${ctx.wa}?text=${encodeURIComponent(lines.join('\n'))}`;
}

function parseSizeVariants(sizesStr) {
  if (!sizesStr) return { isVariant: false, map: { '*': [] } };
  if (sizesStr.includes(':')) {
    const map = {};
    sizesStr.split('|').forEach(part => {
      const idx = part.indexOf(':');
      if (idx === -1) return;
      const colour = part.slice(0, idx).trim();
      const sizes  = part.slice(idx + 1).split(',').map(s => s.trim()).filter(Boolean);
      if (colour) map[colour] = sizes;
    });
    return { isVariant: true, map };
  }
  return { isVariant: false, map: { '*': sizesStr.split(',').map(s => s.trim()).filter(Boolean) } };
}

function switchPhoto(url, el) {
  const main = document.getElementById('detail-main-img');
  if (main) main.src = url;
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectColour(el, colour) {
  document.querySelectorAll('.colour-pill').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  const variantData = window._currentSizeVariants;
  if (variantData && variantData.isVariant) {
    const sizes = variantData.map[colour] || [];
    const sizeRow = document.getElementById('size-row');
    if (sizeRow) sizeRow.innerHTML = sizes.map(s => `<button class="size-btn" onclick="selectSize(this,'${s}')">${s}</button>`).join('');
  }
  buildWaLink();
}

function selectSize(el, size) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  buildWaLink();
}

function toggleSizeChart() {
  document.getElementById('sizeChartTable').classList.toggle('open');
}

/* ============================================================
   REVIEWS
   ============================================================ */
function getPhotoList(item) {
  const raw = (item.photos && item.photos.trim()) ? item.photos : (item.photo || '');
  return raw.split(',').map(u => driveUrl(u.trim())).filter(Boolean);
}

/* ------------------------------------------------------------------
   Review ↔ product matching (forgiving)
   A review is linked to a product via the "product" column in the
   Reviews sheet. Matching is deliberately loose so small differences
   don't break it: case-insensitive, punctuation-insensitive, and a
   "contains" test in BOTH directions — so a tag of "Drift Ballet"
   still matches the product "Dr Cardin Drift Ballet", and vice versa.
   ------------------------------------------------------------------ */
function normStr(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
}
function reviewMatchesProduct(review, productName) {
  const tag  = normStr(review && review.product);
  const name = normStr(productName);
  // Require a real tag of at least 3 chars so a stray letter can't match everything.
  if (tag.length < 3 || name.length < 3) return false;
  return name.includes(tag) || tag.includes(name);
}
function getReviewsForProduct(productName) {
  return (reviewsData || []).filter(r => reviewMatchesProduct(r, productName));
}
function productHasReviews(p) {
  return !!(p && p.name) && getReviewsForProduct(p.name).some(r => getPhotoList(r).length);
}
// Same loose product matching, but for our own "real life" (sourced) photos.
function getRealLifeForProduct(productName) {
  return (reallifeData || []).filter(r => reviewMatchesProduct(r, productName));
}

/* Build one review "polaroid" card from a review/bridal item.
   Returns '' when the item has no usable photos. Shared by the Reviews
   page groups AND the product-detail reviews section. */
function buildReviewCard(item, altLabel) {
  const photos = getPhotoList(item);
  if (!photos.length) return '';
  const photosJson = JSON.stringify(photos).replace(/'/g, "&apos;").replace(/"/g, "&quot;");
  let photosHtml = '';
  if (photos.length > 1) {
    const moreCnt = photos.length - 4;
    const moreBadge = moreCnt > 0
      ? `<div class="review-photos-more-badge" onclick="event.stopPropagation();openCarouselFromBadge('${photosJson}', 4)" style="cursor:pointer;">+${moreCnt} more</div>`
      : '';
    photosHtml = `<div class="review-photos-container">
      <div class="review-photos-grid review-photos-grid-wrapper" data-count="${photos.length}">
        ${photos.map((src, i) => `<span class="wm-box"><img src="${src}" alt="Photo ${i+1}" onclick="event.stopPropagation();openCarouselFromBadge('${photosJson}', ${i})" style="cursor:pointer;" onerror="reviewImgFail(this)"></span>`).join('')}
        ${moreBadge}
      </div>
    </div>`;
  } else {
    photosHtml = `<div class="review-photos-container">
      <div class="review-photos-grid review-photos-grid-wrapper" data-count="1">
        <span class="wm-box" style="width:100%;height:100%;"><img src="${photos[0]}" alt="${altLabel || 'Customer review'}" onclick="event.stopPropagation();openCarouselFromBadge('${photosJson}', 0)" style="cursor:pointer;width:100%;height:100%;object-fit:cover;display:block;" onerror="reviewImgFail(this)"></span>
      </div>
    </div>`;
  }
  return `<div class="review-card" onclick="event.stopPropagation()">
    ${photosHtml}
    ${item.caption ? `<div class="review-caption">${item.caption}</div>` : ''}
  </div>`;
}

/* Inject the "reviews for this pair" section on a product detail page.
   Hidden entirely (nothing rendered) when the product has no tagged reviews. */
function renderProductReviews(p) {
  const body = document.querySelector('#page-detail .detail-body');
  if (!body) return;
  const existing = document.getElementById('detail-reviews-section');
  if (existing) existing.remove();
  if (!p || !p.name) return;

  const matches = getReviewsForProduct(p.name);
  if (!matches.length) return;

  const cards = matches.map(item => buildReviewCard(item, 'Customer review')).filter(Boolean).join('');
  if (!cards) return;

  const n = matches.length;
  const safeName = String(p.name).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const sec = document.createElement('div');
  sec.id = 'detail-reviews-section';
  sec.className = 'product-reviews';
  sec.innerHTML = `
    <div class="product-reviews-inner">
      <div style="text-align:center"><span class="eyebrow">Real reviews</span></div>
      <h2 class="section-title" style="margin-top:0.5rem;">What our <em>angguns</em> say about this pair</h2>
      <p class="section-sub">${n} ${n === 1 ? 'review' : 'reviews'} from customers who bought the ${safeName}</p>
      <div class="reviews-grid">${cards}</div>
      <div class="pr-more"><a href="/reviews" class="pr-more-link">See all reviews →</a></div>
    </div>`;
  body.appendChild(sec);
}

/* Inject the "How it looks like" section — our own real-life photos of a shoe
   we've sourced for our angguns. Pre-order pages only. Hidden entirely when the
   product has no tagged real-life photos. */
function renderProductRealLife(p) {
  const body = document.querySelector('#page-detail .detail-body');
  if (!body) return;
  const existing = document.getElementById('detail-reallife-section');
  if (existing) existing.remove();
  // Pre-orders only.
  if (!/\/preorders/.test(window.location.pathname)) return;
  if (!p || !p.name) return;

  const matches = getRealLifeForProduct(p.name);
  if (!matches.length) return;

  const cards = matches.map(item => buildReviewCard(item, 'Real-life photo')).filter(Boolean).join('');
  if (!cards) return;

  const safeName = String(p.name).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const sec = document.createElement('div');
  sec.id = 'detail-reallife-section';
  sec.className = 'product-reviews product-reallife';
  sec.innerHTML = `
    <div class="product-reviews-inner">
      <div style="text-align:center"><span class="eyebrow">How it looks like</span></div>
      <h2 class="section-title" style="margin-top:0.5rem;">The <em>${safeName}</em> in real life</h2>
      <p class="section-sub">the actual pairs we’ve sourced for our angguns</p>
      <div class="reviews-grid">${cards}</div>
    </div>`;
  body.appendChild(sec);
}

// When a review photo fails to load, hide it. If a card ends up with no visible
// photos, hide the whole card so its decorative "tape" strip doesn't float alone.
function reviewImgFail(img) {
  img.style.display = 'none';
  const card = img.closest('.review-card');
  if (!card) return;
  const anyLeft = [...card.querySelectorAll('.review-photos-grid img')]
    .some(i => i.style.display !== 'none');
  if (!anyLeft) card.style.display = 'none';
}

// Sort one review into 'shoes', 'bags', or 'service'.
// An optional "category" field on the review wins; otherwise we guess from
// the product name (blank product = service, name mentions a bag = bags).
function reviewCategory(item) {
  const explicit = (item.category || '').trim().toLowerCase();
  if (explicit) {
    if (/serv|kind|word/.test(explicit)) return 'service';
    if (/bag|tote|pouch|clutch|purse|backpack/.test(explicit)) return 'bags';
    return 'shoes';
  }
  const prod = (item.product || '').trim().toLowerCase();
  if (!prod) return 'service';
  if (/bag|tote|pouch|clutch|purse|backpack|handbag/.test(prod)) return 'bags';
  return 'shoes';
}

function renderReviews() {
  const $rFilter = document.getElementById('reviews-filter');
  const $rGroups = document.getElementById('reviews-groups');
  const $rEmpty  = document.getElementById('reviews-empty');
  const $bGrid   = document.getElementById('bridal-reviews-grid');
  const $bEmpty  = document.getElementById('bridal-reviews-empty');
  const $sGrid   = document.getElementById('sourced-grid');
  const $sEmpty  = document.getElementById('sourced-empty');
  if (!$rGroups || !$bGrid || !$sGrid) return; // not on reviews page

  // The filter bar is retired — reviews are now grouped into three simple
  // categories, so a chip filter would just duplicate the group headings.
  if ($rFilter) { $rFilter.innerHTML = ''; $rFilter.style.display = 'none'; }

  // Render regular reviews — sorted into three fixed categories.
  const usable = (reviewsData || []).filter(it => getPhotoList(it).length);
  if (usable.length) {
    $rEmpty.style.display = 'none';

    // Three buckets, shown in this order. Each review is sorted by
    // reviewCategory() — blank product = service, "bag/tote/…" = bags,
    // everything else = shoes.
    const CATS = [
      { key: 'shoes',   label: 'Shoe reviews' },
      { key: 'bags',    label: 'Bag reviews' },
      { key: 'service', label: 'Service &amp; kind words' }
    ];
    const buckets = { shoes: [], bags: [], service: [] };
    usable.forEach(item => buckets[reviewCategory(item)].push(item));

    // Only render categories that actually have reviews. Show the heading
    // only when more than one category is present (a lone group needs none).
    const present = CATS.filter(c => buckets[c.key].length);
    const multi = present.length > 1;
    $rGroups.innerHTML = present.map(c => {
      const cards = buckets[c.key].map(it => buildReviewCard(it, 'Customer review')).filter(Boolean).join('');
      return `<div class="review-group" data-group="${c.key}">
        ${multi ? `<h3 class="review-group-title">${c.label}</h3>` : ''}
        <div class="reviews-grid">${cards}</div>
      </div>`;
    }).join('');
  } else {
    $rGroups.innerHTML = '';
    $rEmpty.style.display = 'block';
  }

  // Render bridal reviews
  if (bridalData.length) {
    $bEmpty.style.display = 'none';
    $bGrid.innerHTML = bridalData.map(item => buildReviewCard(item, 'Bridal review')).filter(Boolean).join('');
  } else {
    $bGrid.innerHTML = '';
    $bEmpty.style.display = 'block';
  }

  // Render sourced photos
  if (sourcedData.length) {
    $sEmpty.style.display = 'none';
    $sGrid.innerHTML = sourcedData.map((item, idx) => {
      // Handle both string URLs and objects with url/photo/photos properties
      let photos = [];
      let caption = '';

      if (typeof item === 'string') {
        // If item is a URL string, convert it using driveUrl
        const convertedUrl = driveUrl(item);
        if (convertedUrl) photos = [convertedUrl];
      } else if (typeof item === 'object' && item !== null) {
        // If item is an object, check for url property (new format) or photo/photos (old format)
        if (item.url) {
          // Support comma-separated URLs in url field (same as photos field)
          photos = item.url.split(',').map(u => driveUrl(u.trim())).filter(Boolean);
        } else {
          photos = getPhotoList(item);
        }
        caption = item.caption || '';
      }

      if (!photos.length) return '';

      // Generate grid for multiple photos (2 columns)
      let photosHtml = '';
      let moreBadge = '';
      if (photos.length > 1) {
        const photosJson = JSON.stringify(photos).replace(/'/g, "&apos;").replace(/"/g, "&quot;");
        const moreCnt = photos.length - 4;
        if (moreCnt > 0) {
          moreBadge = `<div class="sourced-photos-more-badge" onclick="event.stopPropagation();openCarouselFromBadge('${photosJson}', 4)" style="cursor:pointer;">+${moreCnt} more</div>`;
        }
        photosHtml = `<div class="sourced-photos-container">
          <div class="sourced-photos-grid sourced-photos-grid-wrapper" data-count="${photos.length}">
            ${photos.map((src, i) => `<span class="wm-box"><img src="${src}" alt="Photo ${i+1}" onclick="event.stopPropagation();openCarouselFromBadge('${photosJson}', ${i})" style="cursor:pointer;" onerror="reviewImgFail(this)"></span>`).join('')}
            ${moreBadge}
          </div>
        </div>`;
      } else if (photos.length === 1) {
        const photosJson = JSON.stringify(photos).replace(/'/g, "&apos;").replace(/"/g, "&quot;");
        photosHtml = `<div class="sourced-photos-container">
          <div class="sourced-photos-grid sourced-photos-grid-wrapper" data-count="1">
            <span class="wm-box" style="width:100%;height:100%;"><img src="${photos[0]}" alt="Sourced find" onclick="event.stopPropagation();openCarouselFromBadge('${photosJson}', 0)" style="cursor:pointer;width:100%;height:100%;object-fit:cover;display:block;" onerror="reviewImgFail(this)"></span>
          </div>
        </div>`;
      }

      return `<div class="sourced-item" onclick="event.stopPropagation()">
        ${photosHtml}
        ${caption ? `<div class="sourced-caption">${caption}</div>` : ''}
      </div>`;
    }).join('');
  } else {
    $sGrid.innerHTML = '';
    $sEmpty.style.display = 'block';
  }
}

function switchReviewPhoto(thumb, mainId, src) {
  document.getElementById(mainId).src = src;
  thumb.closest('.review-thumbs').querySelectorAll('.review-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   PHOTO CAROUSEL
   ============================================================ */
let carouselState = {
  photos: [],
  currentIndex: 0,
  touchStart: 0,
  touchEnd: 0
};

function openCarousel(photos, startIndex = 0) {
  if (!photos || photos.length === 0) return;
  carouselState.photos = photos;
  carouselState.currentIndex = Math.max(0, Math.min(startIndex, photos.length - 1));
  const modal = document.getElementById('carousel-modal');
  modal.classList.add('open');
  // Default: assume product photos (supplier shots on pre-orders stay clean).
  // openCarouselFromBadge re-adds 'wm-content' for our review/real-life photos.
  modal.classList.remove('wm-content');
  document.body.style.overflow = 'hidden';
  updateCarousel();

  // Add touch listeners
  const viewer = modal.querySelector('.carousel-viewer');
  viewer.addEventListener('touchstart', handleTouchStart, false);
  viewer.addEventListener('touchend', handleTouchEnd, false);
}

function openCarouselFromBadge(photosJson, startIndex) {
  try {
    const photos = JSON.parse(photosJson);
    openCarousel(photos, startIndex);
    // These are our own review / real-life photos, so mark the enlarged
    // viewer as watermarkable even on pre-order pages (body.wm-off).
    document.getElementById('carousel-modal').classList.add('wm-content');
  } catch (e) {
    console.error('Failed to parse photos:', e);
  }
}

function closeCarousel() {
  carouselState.photos = [];
  const modal = document.getElementById('carousel-modal');
  modal.classList.remove('open');
  document.body.style.overflow = '';

  // Remove touch listeners
  const viewer = modal.querySelector('.carousel-viewer');
  viewer.removeEventListener('touchstart', handleTouchStart);
  viewer.removeEventListener('touchend', handleTouchEnd);
}

function carouselNext() {
  if (carouselState.currentIndex < carouselState.photos.length - 1) {
    carouselState.currentIndex++;
    updateCarousel();
  }
}

function carouselPrev() {
  if (carouselState.currentIndex > 0) {
    carouselState.currentIndex--;
    updateCarousel();
  }
}

function updateCarousel() {
  const photo = carouselState.photos[carouselState.currentIndex];
  document.getElementById('carousel-img').src = photo;
  document.getElementById('carousel-counter-text').textContent =
    `${carouselState.currentIndex + 1} / ${carouselState.photos.length}`;

  // Update nav button states
  document.querySelector('.carousel-prev').classList.toggle('disabled', carouselState.currentIndex === 0);
  document.querySelector('.carousel-next').classList.toggle('disabled', carouselState.currentIndex === carouselState.photos.length - 1);
}

function handleTouchStart(e) {
  carouselState.touchStart = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  carouselState.touchEnd = e.changedTouches[0].screenX;
  handleSwipe();
}

function handleSwipe() {
  const diff = carouselState.touchStart - carouselState.touchEnd;
  const threshold = 50; // pixels

  if (Math.abs(diff) > threshold) {
    if (diff > 0) {
      carouselNext();
    } else {
      carouselPrev();
    }
  }
}

// Update keyboard listener to handle carousel
document.addEventListener('keydown', e => {
  const modal = document.getElementById('carousel-modal');
  if (modal.classList.contains('open')) {
    if (e.key === 'Escape') closeCarousel();
    if (e.key === 'ArrowLeft') carouselPrev();
    if (e.key === 'ArrowRight') carouselNext();
  } else {
    if (e.key === 'Escape') closeLightbox();
  }
});

/* ============================================================
   CONTACT LINKS
   ============================================================ */
function applyContactLinks() {
  const wa = `https://wa.me/${CONFIG.WHATSAPP}`;
  const ig = `https://instagram.com/${CONFIG.INSTAGRAM}`;
  const map = {
    'bridal-wa':           `${wa}?text=${encodeURIComponent(CONFIG.WA_MSG_BRIDAL)}`,
    'bridal-ig':           ig,
    'bridal-wa-catalogue': `${wa}?text=${encodeURIComponent('Hi Anggun Pesona! I\'d love to see a sample bridal catalogue 📖')}`,
    'about-wa':            `${wa}?text=${encodeURIComponent(CONFIG.WA_MSG_GENERAL)}`,
    'about-ig':            ig,
    'footer-wa':           `${wa}?text=${encodeURIComponent(CONFIG.WA_MSG_GENERAL)}`,
    'footer-ig':           ig,
  };
  for (const [id, href] of Object.entries(map)) { const el = document.getElementById(id); if (el) el.href = href; }
}

/* ============================================================
   NOTIFY SIGNUPS
   ============================================================ */
function handleNotify() {
  const email = document.getElementById('notifyEmail').value.trim();
  const $msg  = document.getElementById('notifyMsg');
  if (!email.includes('@')) { $msg.textContent = 'please enter a valid email address'; $msg.style.display='block'; return; }
  window.open(`https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent(CONFIG.WA_MSG_NOTIFY + ' My email: ' + email)}`, '_blank');
  $msg.textContent = '✨ redirecting to whatsapp — see you soon!'; $msg.style.display='block';
  document.getElementById('notifyEmail').value = '';
}

function handleShopNotify() {
  const email = document.getElementById('shopEmail').value.trim();
  const $msg  = document.getElementById('shopMsg');
  if (!email.includes('@')) { $msg.textContent = 'please enter a valid email address'; $msg.style.display='block'; return; }
  window.open(`https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent(CONFIG.WA_MSG_NOTIFY + ' My email: ' + email)}`, '_blank');
  $msg.textContent = '✨ redirecting to whatsapp — talk soon!'; $msg.style.display='block';
  document.getElementById('shopEmail').value = '';
}

/* ============================================================
   ABOUT — BRANDS LIST
   ============================================================ */
const DEFAULT_BRANDS = ['Dr Cardin','KEEP HOUSE','My Ballerine','Milliot & Co','Happy2U','Nazifi Nasri','Brik','Machino','Christy Ng','Atikota','Fayt','Cekhas','Berlynn','Hello Daisy Club'];

function initBrandsList() {
  const $list = document.getElementById('brandPillList');
  if (!$list) return;
  if (!DEFAULT_BRANDS.length) {
    $list.innerHTML = '<span style="font-family:\'Caveat\',cursive;font-size:1.1rem;color:var(--text-light);">brands coming soon</span>';
    return;
  }
  $list.innerHTML = DEFAULT_BRANDS.map(b => `<span class="brand-pill">${b}</span>`).join('');
}

/* ============================================================
   SCROLL + INIT
   ============================================================ */
window.addEventListener('scroll', () => {
  document.getElementById('scrollTop').classList.toggle('vis', window.scrollY > 400);
});
document.addEventListener('DOMContentLoaded', () => {
  initCurrentPage();
});

/* ============================================================
   PHOTO PROTECTION — deters casual saving of images.
   NOTE: a determined person can still capture images (screenshots,
   dev tools). This stops right-click "Save Image As" and drag-saving,
   and every photo also carries a visible watermark (see styles.css).
   ============================================================ */
// Pre-order catalogue photos come from suppliers (not our own shots),
// so they are left unwatermarked. This flag turns the watermark off
// for the whole pre-orders page (grid, detail, carousel & lightbox).
if (/\/preorders/.test(window.location.pathname)) {
  document.body.classList.add('wm-off');
}
document.addEventListener('contextmenu', e => {
  if (e.target.closest('img, .wm-box, .detail-image-viewer, .carousel-viewer, .lightbox, .product-img-placeholder')) {
    e.preventDefault();
  }
});
document.addEventListener('dragstart', e => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});
