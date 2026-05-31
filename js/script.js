'use strict';

/* =====================================================
   NEXUSGEAR — SHARED SCRIPT (ALL PAGES)
   ===================================================== */

/* ── PRODUCT SPECS by category ── */
var SPECS = {
  controllers: ['Wireless connectivity (2.4GHz / Bluetooth)', 'Hall-effect analog sticks — zero drift', 'Adaptive haptic feedback triggers', 'Built-in rechargeable battery (up to 40h)', 'Programmable rear paddles', 'USB-C fast charging'],
  headsets:    ['50mm neodymium speaker drivers', '360° spatial surround sound', 'Retractable noise-cancelling mic', 'Memory foam ear cushions', 'Discord & TeamSpeak certified', 'Wireless range up to 20 metres'],
  gpu:         ['GDDR6X high-bandwidth memory', 'PCIe 4.0 x16 interface', 'DirectX 12 Ultimate & Vulkan support', 'Hardware ray tracing & AI acceleration', 'DLSS 3 / FSR 3 upscaling support', 'Triple 4K display output'],
  monitors:    ['IPS / OLED panel — wide colour gamut', 'AMD FreeSync Premium & NVIDIA G-Sync', 'VESA HDR400 / HDR600 certified', 'Height, tilt & swivel adjustable stand', '1ms GtG response time', 'HDMI 2.1 + DisplayPort 1.4'],
  peripherals: ['Per-key RGB backlighting (16.8M colours)', 'N-key rollover & anti-ghosting', 'Aircraft-grade aluminium top plate', 'Detachable braided USB-C cable', 'On-board profile storage', 'Ergonomic palm-rest included'],
  chairs:      ['Cold-cure foam lumbar & headrest', '4D adjustable armrests', 'Class-4 hydraulic gas lift', 'Full 180° recline range', 'Stainless-steel frame & wheelbase', 'PU leather / fabric hybrid cover'],
};

var DESCRIPTIONS = {
  controllers: 'Built for competitive and casual gaming alike, this controller delivers tournament-level precision with customisable inputs, ultra-low latency wireless, and ergonomics shaped by pro player feedback.',
  headsets:    'Immerse yourself in every audio cue. Crystal-clear positional audio helps you hear footsteps, reloads and ambience with pinpoint accuracy — giving you the edge in every match.',
  gpu:         'Unleash next-generation graphics with real-time ray tracing, AI-powered upscaling and massive VRAM for 4K gaming, creative workloads and VR at maximum detail settings.',
  monitors:    'Silky-smooth refresh rates and ultra-fast response times mean motion blur is history. From competitive eSports to immersive open worlds, every frame looks exactly as the developer intended.',
  peripherals: 'Precision-engineered tools trusted by pro players worldwide. Tactile switches, optimised sensor tracking and zero-compromise build quality separate good players from great ones.',
  chairs:      'Engineered for marathon sessions. Ergonomic lumbar support, breathable materials and fully adjustable positioning keep you comfortable and focused from warm-up to final match.',
};

/* ── PRODUCTS ── */
window.PRODUCTS = [
  { id:1,  brand:'Sony',        name:'DualSense Edge Wireless Controller',    price:14990, was:19990, rating:4.9, reviews:4821, cat:'controllers', tag:'new',  img:'../images/ctrl_sony_dualsense.png', disc:25 },
  { id:2,  brand:'Xbox',        name:'Elite Series 2 Controller Black',       price:17990, was:20990, rating:4.8, reviews:3214, cat:'controllers', tag:'',    img:'../images/ctrl_xbox_elite.png', disc:14 },
  { id:3,  brand:'8BitDo',      name:'Ultimate 2.4G Wireless Controller',     price:5490,  was:7490,  rating:4.7, reviews:2198, cat:'controllers', tag:'sale',img:'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=600&q=85', disc:27 },
  { id:4,  brand:'Razer',       name:'Wolverine V3 Pro Gaming Controller',    price:22990, was:27990, rating:4.6, reviews:1432, cat:'controllers', tag:'',    img:'https://images.unsplash.com/photo-1600080972464-8e5f35802d1a?w=600&q=85', disc:18 },
  { id:5,  brand:'HyperX',      name:'Cloud Alpha Wireless Gaming Headset',   price:12490, was:16990, rating:4.8, reviews:5621, cat:'headsets',    tag:'new',  img:'../images/headset_hyperx_cloud.png', disc:26 },
  { id:6,  brand:'SteelSeries', name:'Arctis Nova Pro Wireless',              price:29990, was:35990, rating:4.9, reviews:2109, cat:'headsets',    tag:'',    img:'../images/headset_steelseries_arctis.png', disc:17 },
  { id:7,  brand:'Corsair',     name:'HS80 RGB Wireless Gaming Headset',      price:8990,  was:12990, rating:4.6, reviews:3411, cat:'headsets',    tag:'sale',img:'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=85', disc:31 },
  { id:8,  brand:'Logitech',    name:'G Pro X 2 Lightspeed Headset',         price:18990, was:23990, rating:4.7, reviews:1876, cat:'headsets',    tag:'',    img:'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=85', disc:21 },
  { id:9,  brand:'NVIDIA',      name:'GeForce RTX 4090 24GB Founders Ed.',   price:164990,was:199990,rating:4.9, reviews:3201, cat:'gpu',         tag:'new',  img:'../images/gpu_rtx4090.png', disc:17 },
  { id:10, brand:'AMD',         name:'Radeon RX 7900 XTX 24GB',              price:89990, was:109990,rating:4.7, reviews:1987, cat:'gpu',         tag:'',    img:'../images/gpu_rx7900.png', disc:18 },
  { id:11, brand:'NVIDIA',      name:'GeForce RTX 4070 Super 12GB',          price:54990, was:64990, rating:4.8, reviews:4312, cat:'gpu',         tag:'sale',img:'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=85', disc:15 },
  { id:12, brand:'AMD',         name:'Radeon RX 7800 XT 16GB',               price:39990, was:49990, rating:4.6, reviews:2134, cat:'gpu',         tag:'',    img:'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=85', disc:20 },
  { id:13, brand:'LG',          name:'UltraGear 27" 4K 144Hz OLED Monitor',  price:74990, was:89990, rating:4.9, reviews:2876, cat:'monitors',    tag:'new',  img:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&q=85', disc:17 },
  { id:14, brand:'Samsung',     name:'Odyssey G9 49" Ultra-Wide 240Hz',      price:99990, was:129990,rating:4.8, reviews:1654, cat:'monitors',    tag:'',    img:'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=600&q=85', disc:23 },
  { id:15, brand:'ASUS',        name:'ROG Swift 360Hz FHD 1ms Monitor',      price:42990, was:54990, rating:4.7, reviews:3298, cat:'monitors',    tag:'sale',img:'https://images.unsplash.com/photo-1551645121-d1034da75057?w=600&q=85', disc:22 },
  { id:16, brand:'BenQ',        name:'MOBIUZ EX2780Q 27" QHD 165Hz IPS',    price:34990, was:42990, rating:4.6, reviews:1876, cat:'monitors',    tag:'',    img:'https://images.unsplash.com/photo-1586210579191-33b2659b1c92?w=600&q=85', disc:19 },
  { id:17, brand:'Razer',       name:'BlackWidow V4 Pro Mechanical Keyboard',price:18990, was:22990, rating:4.8, reviews:5432, cat:'peripherals', tag:'new',  img:'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=85', disc:17 },
  { id:18, brand:'Logitech',    name:'G Pro X Superlight 2 Mouse',           price:11990, was:14990, rating:4.9, reviews:7891, cat:'peripherals', tag:'',    img:'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=85', disc:20 },
  { id:19, brand:'SteelSeries', name:'QcK Prism XL RGB Mousepad',            price:5990,  was:8990,  rating:4.7, reviews:2341, cat:'peripherals', tag:'sale',img:'https://images.unsplash.com/photo-1625842268584-8f3290455651?w=600&q=85', disc:33 },
  { id:20, brand:'Corsair',     name:'K100 Air Wireless Keyboard',           price:24990, was:29990, rating:4.6, reviews:1654, cat:'peripherals', tag:'',    img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=85', disc:17 },
  { id:21, brand:'Secretlab',   name:'TITAN Evo 2022 L Gaming Chair',        price:39990, was:49990, rating:4.9, reviews:3421, cat:'chairs',      tag:'new',  img:'https://images.unsplash.com/photo-1684369175833-3d07590d96d2?w=600&q=85', disc:20 },
  { id:22, brand:'DXRacer',     name:'Formula Series Racing Chair',          price:19990, was:27990, rating:4.6, reviews:2134, cat:'chairs',      tag:'',    img:'https://images.unsplash.com/photo-1684369175833-3d07590d96d2?w=600&q=85', disc:29 },
  { id:23, brand:'Herman Miller',name:'Embody Gaming Chair x Logitech G',    price:149990,was:169990,rating:4.8, reviews:876,  cat:'chairs',      tag:'',    img:'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=600&q=85', disc:12 },
  { id:24, brand:'AndaSeat',    name:'Kaiser 4 XL Premium Gaming Chair',     price:24990, was:32990, rating:4.7, reviews:1987, cat:'chairs',      tag:'sale',img:'https://images.unsplash.com/photo-1684369175833-3d07590d96d2?w=600&q=85', disc:24 },
];

const COUPONS = {
  NEXUS15:  { type:'pct',  val:15,   min:0 },
  SAVE25:   { type:'pct',  val:25,   min:5000 },
  FLAT1000: { type:'flat', val:1000, min:8000 },
  GAMER50:  { type:'pct',  val:50,   min:20000 },
};

/* ── HELPERS ── */
const $       = id => document.getElementById(id);
const fmt     = n  => '₹' + n.toLocaleString('en-IN');
const stars   = r  => '★'.repeat(Math.floor(r)) + (r % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.floor(r) - (r % 1 >= 0.5 ? 1 : 0));
const getCart = () => {
  var c = JSON.parse(localStorage.getItem('ng_cart') || '[]');
  return c.map(function(item) {
    item.id = +item.id;
    item.qty = +item.qty || 1;
    return item;
  });
};
const setCart = c  => localStorage.setItem('ng_cart', JSON.stringify(c));
const getWish = () => {
  var w = JSON.parse(localStorage.getItem('ng_wish') || '[]');
  return w.map(Number);
};
const setWish = w  => localStorage.setItem('ng_wish', JSON.stringify(w));

const getOrders = () => {
  var o = JSON.parse(localStorage.getItem('ng_orders') || '[]');
  return o;
};
const setOrders = o => localStorage.setItem('ng_orders', JSON.stringify(o));

/* ── CART BADGE ── */
function updateCartBadge() {
  const el = $('cartCount');
  if (!el) return;
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  el.textContent = count;
  el.style.display = count > 0 ? 'inline-flex' : 'none';
}

/* ── WISHLIST BADGE ── */
function updateWishlistBadge() {
  const el = $('wishCount');
  if (!el) return;
  const count = getWish().length;
  el.textContent = count;
  el.style.display = count > 0 ? 'inline-flex' : 'none';
}

/* ── TOAST ── */
window.toast = function(msg, type) {
  const wrap = $('toastWrap');
  if (!wrap) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = (type === 'success' ? '✅' : type === 'error' ? '❌' : '🎮') + ' ' + msg;
  wrap.appendChild(el);
  setTimeout(function() {
    el.classList.add('removing');
    setTimeout(function() { el.remove(); }, 320);
  }, 3000);
};

/* ── ADD TO CART ── */
function addToCart(id) {
  id = +id;
  const cart = getCart();
  const p = window.PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else cart.push({ id: id, qty: 1 });
  setCart(cart);
  updateCartBadge();
  window.toast('<strong>' + p.name + '</strong> added to cart', 'success');
}

/* ── TOGGLE WISHLIST ── */
function toggleWish(id) {
  id = +id;
  const wish = getWish();
  const idx = wish.indexOf(id);
  if (idx >= 0) { wish.splice(idx, 1); window.toast('Removed from wishlist', 'info'); }
  else { wish.push(id); window.toast('Saved to wishlist ❤️', 'success'); }
  setWish(wish);
  var btn = document.querySelector('.card-wish[data-id="' + id + '"]');
  if (btn) btn.classList.toggle('active', wish.includes(id));
  updateWishlistBadge();
  if (typeof window.renderWishlist === 'function') {
    window.renderWishlist();
  }
}

/* ── PRODUCT CARD HTML ── */
window.productCardHTML = function(p) {
  var inWish = getWish().includes(p.id);
  var badge = p.tag === 'new'  ? '<span class="card-badge new">New</span>' :
              p.tag === 'sale' ? '<span class="card-badge sale">Sale</span>' :
              p.disc >= 20     ? '<span class="card-badge">' + p.disc + '% off</span>' : '';
  return '<article class="product-card" tabindex="0">' +
    '<div class="card-thumb">' +
      badge +
      '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=85\'"/>' +
      '<button class="card-wish' + (inWish ? ' active' : '') + '" data-id="' + p.id + '" title="Wishlist">♡</button>' +
    '</div>' +
    '<div class="card-body">' +
      '<p class="card-brand">' + p.brand + '</p>' +
      '<h3 class="card-name">' + p.name + '</h3>' +
      '<div class="card-rating">' +
        '<span class="card-stars">' + stars(p.rating) + '</span>' +
        '<span class="card-rev">(' + p.reviews.toLocaleString() + ')</span>' +
      '</div>' +
      '<div class="card-footer">' +
        '<div class="card-price">' +
          '<span class="price-now">' + fmt(p.price) + '</span>' +
          '<span class="price-was">' + fmt(p.was) + '</span>' +
        '</div>' +
        '<button class="card-add" data-id="' + p.id + '" title="Add to cart">+</button>' +
      '</div>' +
    '</div>' +
  '</article>';
};

/* ── ATTACH CARD EVENTS ── */
window.attachCardEvents = function(container) {
  container.querySelectorAll('.card-add').forEach(function(btn) {
    btn.addEventListener('click', function(e) { e.stopPropagation(); addToCart(+btn.dataset.id); });
  });
  container.querySelectorAll('.card-wish').forEach(function(btn) {
    btn.addEventListener('click', function(e) { e.stopPropagation(); toggleWish(+btn.dataset.id); });
  });
  /* Click anywhere on card → open modal */
  container.querySelectorAll('.product-card').forEach(function(card) {
    card.addEventListener('click', function(e) {
      if (e.target.closest('.card-add') || e.target.closest('.card-wish')) return;
      var pid = card.querySelector('.card-add') && +card.querySelector('.card-add').dataset.id;
      if (pid) openProductModal(pid);
    });
    card.style.cursor = 'pointer';
  });
};

/* ══════════════════════════════════════════
   PRODUCT MODAL
══════════════════════════════════════════ */
function injectModal() {
  if (document.getElementById('productModal')) return;
  var el = document.createElement('div');
  el.id = 'productModal';
  el.className = 'pm-overlay';
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('role', 'dialog');
  el.innerHTML =
    '<div class="pm-box" id="pmBox">' +
      '<button class="pm-close" id="pmClose" aria-label="Close">✕</button>' +
      '<div class="pm-body" id="pmBody"></div>' +
    '</div>';
  document.body.appendChild(el);

  /* Close handlers */
  document.getElementById('pmClose').addEventListener('click', closeProductModal);
  el.addEventListener('click', function(e) { if (e.target === el) closeProductModal(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeProductModal(); });
}

function openProductModal(id) {
  var p = window.PRODUCTS.find(function(x) { return x.id === id; });
  if (!p) return;

  injectModal();
  var body = document.getElementById('pmBody');
  var inWish = getWish().includes(id);
  var specList = (SPECS[p.cat] || []).map(function(s) {
    return '<li><span class="pm-spec-dot"></span>' + s + '</li>';
  }).join('');
  var desc = DESCRIPTIONS[p.cat] || '';
  var saved = fmt(p.was - p.price);
  var badge = p.tag === 'new' ? '<span class="pm-badge pm-badge--new">New Arrival</span>' :
              p.tag === 'sale' ? '<span class="pm-badge pm-badge--sale">On Sale</span>' : '';

  body.innerHTML =
    '<div class="pm-img-col">' +
      '<div class="pm-img-wrap">' +
        '<img src="' + p.img + '" alt="' + p.name + '" id="pmImg"/>' +
      '</div>' +
      '<div class="pm-trust">' +
        '<span>✅ In Stock</span>' +
        '<span>🚀 Ships in 2-4 days</span>' +
        '<span>↩️ 30-day returns</span>' +
      '</div>' +
    '</div>' +
    '<div class="pm-info-col">' +
      '<div class="pm-top">' +
        badge +
        '<p class="pm-brand">' + p.brand + '</p>' +
        '<h2 class="pm-name">' + p.name + '</h2>' +
        '<div class="pm-rating">' +
          '<span class="pm-stars">' + stars(p.rating) + '</span>' +
          '<span class="pm-rating-num">' + p.rating + '</span>' +
          '<span class="pm-reviews">(' + p.reviews.toLocaleString() + ' reviews)</span>' +
        '</div>' +
      '</div>' +

      '<div class="pm-price-block">' +
        '<span class="pm-price-now">' + fmt(p.price) + '</span>' +
        '<span class="pm-price-was">' + fmt(p.was) + '</span>' +
        '<span class="pm-price-off">' + p.disc + '% OFF</span>' +
      '</div>' +
      '<p class="pm-saving">You save ' + saved + ' on this product</p>' +

      '<p class="pm-desc">' + desc + '</p>' +

      '<div class="pm-specs">' +
        '<p class="pm-specs-title">Key Specifications</p>' +
        '<ul class="pm-specs-list">' + specList + '</ul>' +
      '</div>' +

      '<div class="pm-actions">' +
        '<button class="pm-cart-btn" id="pmCartBtn">Add to Cart</button>' +
        '<button class="pm-wish-btn' + (inWish ? ' wishlisted' : '') + '" id="pmWishBtn" title="Wishlist">' +
          (inWish ? '❤️' : '♡') +
        '</button>' +
      '</div>' +

      '<a href="cart.html" class="pm-checkout-link">Go to Cart & Checkout →</a>' +
    '</div>';

  /* Image fade-in */
  var pmImg = document.getElementById('pmImg');
  pmImg.style.opacity = '0';
  pmImg.addEventListener('load', function() { pmImg.style.transition='opacity 0.4s'; pmImg.style.opacity='1'; });
  if (pmImg.complete) { pmImg.style.opacity = '1'; }

  /* Button events */
  document.getElementById('pmCartBtn').addEventListener('click', function() {
    addToCart(id);
  });
  document.getElementById('pmWishBtn').addEventListener('click', function() {
    toggleWish(id);
    var btn = document.getElementById('pmWishBtn');
    var w = getWish().includes(id);
    btn.classList.toggle('wishlisted', w);
    btn.textContent = w ? '❤️' : '♡';
  });

  /* Show modal */
  var modal = document.getElementById('productModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  /* Animate box in */
  setTimeout(function() {
    document.getElementById('pmBox').classList.add('enter');
  }, 10);
}

function closeProductModal() {
  var modal = document.getElementById('productModal');
  if (!modal) return;
  var box = document.getElementById('pmBox');
  box.classList.remove('enter');
  setTimeout(function() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }, 280);
}

/* ── MOBILE NAV ── */
function initNav() {
  var toggle = $('navToggle');
  var nav = $('siteNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function() { nav.classList.toggle('open'); });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.site-header')) nav.classList.remove('open');
  });
}

/* ══════════════════════════════════════════
   SHOP PAGE
══════════════════════════════════════════ */
function initShop() {
  var grid = $('shopGrid');
  if (!grid) return;

  var state = { cat:'all', maxPrice:200000, rating:0, disc:0, sort:'default', page:1, perPage:12 };

  // URL param
  var params = new URLSearchParams(location.search);
  if (params.get('cat')) {
    state.cat = params.get('cat');
    var radio = document.querySelector('input[name="cat"][value="' + state.cat + '"]');
    if (radio) radio.checked = true;
  }

  function filtered() {
    var list = window.PRODUCTS.slice();
    if (state.cat === 'new') list = list.filter(function(p) { return p.tag === 'new'; });
    else if (state.cat === 'sale') list = list.filter(function(p) { return p.tag === 'sale'; });
    else if (state.cat !== 'all') list = list.filter(function(p) { return p.cat === state.cat; });
    list = list.filter(function(p) { return p.price <= state.maxPrice; });
    if (state.rating) list = list.filter(function(p) { return p.rating >= state.rating; });
    if (state.disc)   list = list.filter(function(p) { return p.disc >= state.disc; });
    if (state.sort === 'price-asc')  list.sort(function(a,b){ return a.price - b.price; });
    if (state.sort === 'price-desc') list.sort(function(a,b){ return b.price - a.price; });
    if (state.sort === 'rating')     list.sort(function(a,b){ return b.rating - a.rating; });
    if (state.sort === 'discount')   list.sort(function(a,b){ return b.disc - a.disc; });
    return list;
  }

  function render() {
    var list = filtered();
    var visible = list.slice(0, state.page * state.perPage);
    var info = $('resultsInfo');
    var more = $('loadMore');
    if (info) info.textContent = visible.length + ' of ' + list.length + ' products';
    if (more) more.style.display = list.length > visible.length ? 'inline-flex' : 'none';
    grid.innerHTML = visible.length
      ? visible.map(function(p) { return window.productCardHTML(p); }).join('')
      : '<div style="grid-column:1/-1;padding:60px;text-align:center;color:var(--ink-3)"><div style="font-size:2.5rem;margin-bottom:12px">🎮</div><p>No products match your filters.</p></div>';
    window.attachCardEvents(grid);
  }

  document.querySelectorAll('input[name="cat"]').forEach(function(r) {
    r.addEventListener('change', function() { state.cat = r.value; state.page = 1; render(); });
  });

  var priceSlider = $('priceMax');
  if (priceSlider) {
    priceSlider.addEventListener('input', function() {
      state.maxPrice = +priceSlider.value;
      var lbl = $('priceMaxLbl');
      if (lbl) lbl.textContent = '₹' + (+priceSlider.value).toLocaleString('en-IN');
      state.page = 1; render();
    });
  }

  document.querySelectorAll('input[name="rating"]').forEach(function(r) {
    r.addEventListener('change', function() { state.rating = +r.value; state.page = 1; render(); });
  });
  document.querySelectorAll('input[name="disc"]').forEach(function(r) {
    r.addEventListener('change', function() { state.disc = +r.value; state.page = 1; render(); });
  });

  var sortSel = $('sortSel');
  if (sortSel) sortSel.addEventListener('change', function() { state.sort = sortSel.value; state.page = 1; render(); });

  var loadMore = $('loadMore');
  if (loadMore) loadMore.addEventListener('click', function() { state.page++; render(); });

  var clearAll = $('clearAll');
  if (clearAll) {
    clearAll.addEventListener('click', function() {
      state = { cat:'all', maxPrice:200000, rating:0, disc:0, sort:'default', page:1, perPage:12 };
      var r1 = document.querySelector('input[name="cat"][value="all"]');   if(r1) r1.checked = true;
      var r2 = document.querySelector('input[name="rating"][value="0"]');  if(r2) r2.checked = true;
      var r3 = document.querySelector('input[name="disc"][value="0"]');    if(r3) r3.checked = true;
      if (priceSlider) { priceSlider.value = 200000; var l=$('priceMaxLbl'); if(l) l.textContent='₹2,00,000'; }
      if (sortSel) sortSel.value = 'default';
      render();
    });
  }

  render();
}

/* ══════════════════════════════════════════
   CART PAGE
══════════════════════════════════════════ */
function initCart() {
  if (!$('cartItemsList')) return;

  var couponCode   = null;
  var deliveryType = 'standard';

  function showTab(tab) {
    ['panelCart','panelDelivery','panelPayment','panelConfirm'].forEach(function(id) {
      var el = $(id); if (el) el.style.display = 'none';
    });
    var panel = $('panel' + tab.charAt(0).toUpperCase() + tab.slice(1));
    if (panel) panel.style.display = 'block';

    var stepMap = { cart:1, delivery:2, payment:3, confirm:4 };
    var cur = stepMap[tab] || 1;
    [1,2,3,4].forEach(function(n) {
      var s = $('step' + n);
      if (!s) return;
      s.classList.toggle('active', n === cur);
      s.classList.toggle('done', n < cur);
    });
    document.querySelectorAll('.cart-tab').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });
  }

  function calcTotals() {
    var cart = getCart();
    var subtotal = cart.reduce(function(s, i) {
      var p = window.PRODUCTS.find(function(x) { return x.id === i.id; });
      return s + (p ? p.price * i.qty : 0);
    }, 0);
    var discount = 0;
    if (couponCode && COUPONS[couponCode] && subtotal >= COUPONS[couponCode].min) {
      var c = COUPONS[couponCode];
      discount = c.type === 'pct' ? Math.round(subtotal * c.val / 100) : c.val;
    }
    var delivery = deliveryType === 'express' ? 149 : 0;
    return { subtotal: subtotal, discount: discount, delivery: delivery, total: Math.max(0, subtotal - discount + delivery) };
  }

  function renderSummary() {
    var t = calcTotals();
    var miniEl = $('orderMiniCart');
    if (miniEl) {
      var cart = getCart();
      miniEl.innerHTML = cart.map(function(i) {
        var p = window.PRODUCTS.find(function(x) { return x.id === i.id; });
        if (!p) return '';
        return '<div style="display:flex;justify-content:space-between;font-size:0.82rem;color:var(--ink-2);padding:4px 0"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px">' + p.name + ' × ' + i.qty + '</span><span style="color:var(--ink);font-weight:600;margin-left:8px">' + fmt(p.price * i.qty) + '</span></div>';
      }).join('') || '<p style="font-size:0.82rem;color:var(--ink-3)">No items</p>';
    }
    var sub = $('sumSub');      if (sub) sub.textContent = fmt(t.subtotal);
    var tot = $('sumTotal');    if (tot) tot.textContent = fmt(t.total);
    var del = $('sumDelivery'); if (del) del.textContent = t.delivery > 0 ? fmt(t.delivery) : 'Free';
    var dRow = $('discRow');
    if (dRow) {
      dRow.style.display = t.discount > 0 ? 'flex' : 'none';
      var cl = $('couponLabel'); if (cl) cl.textContent = couponCode || '';
      var ds = $('sumDisc');     if (ds) ds.textContent = '-' + fmt(t.discount);
    }
    var sv = $('savingMsg'); if (sv) sv.textContent = t.discount > 0 ? 'You save ' + fmt(t.discount) + ' 🎉' : '';
  }

  function renderCartItems() {
    var cart = getCart();
    var listEl = $('cartItemsList');
    var emptyEl = $('cartEmpty');
    var footerEl = $('cartItemsFooter');
    if (!listEl) return;
    if (!cart.length) {
      listEl.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'block';
      if (footerEl) footerEl.style.display = 'none';
      var dt = $('tabDelivery'); if (dt) dt.disabled = true;
      renderSummary(); return;
    }
    if (emptyEl) emptyEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'flex';
    var dt2 = $('tabDelivery'); if (dt2) dt2.disabled = false;

    listEl.innerHTML = cart.map(function(i) {
      var p = window.PRODUCTS.find(function(x) { return x.id === i.id; });
      if (!p) return '';
      return '<div class="cart-item">' +
        '<div class="cart-item-img"><img src="' + p.img + '" alt="' + p.name + '" loading="lazy"/></div>' +
        '<div class="cart-item-info">' +
          '<p class="cart-item-brand">' + p.brand + '</p>' +
          '<p class="cart-item-name">' + p.name + '</p>' +
          '<div class="item-controls">' +
            '<button class="qty-btn" data-id="' + p.id + '" data-d="-1">−</button>' +
            '<span class="qty-num">' + i.qty + '</span>' +
            '<button class="qty-btn" data-id="' + p.id + '" data-d="1">+</button>' +
            '<span class="item-price">' + fmt(p.price * i.qty) + '</span>' +
            '<button class="item-del" data-id="' + p.id + '">Remove</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    listEl.querySelectorAll('.qty-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var c = getCart();
        var it = c.find(function(i) { return i.id === +btn.dataset.id; });
        if (it) { it.qty = Math.max(1, it.qty + +btn.dataset.d); setCart(c); updateCartBadge(); renderCartItems(); renderSummary(); }
      });
    });
    listEl.querySelectorAll('.item-del').forEach(function(btn) {
      btn.addEventListener('click', function() {
        setCart(getCart().filter(function(i) { return i.id !== +btn.dataset.id; }));
        updateCartBadge(); renderCartItems(); renderSummary();
      });
    });
    renderSummary();
  }

  // Coupon
  var applyBtn = $('applyCoupon');
  if (applyBtn) {
    applyBtn.addEventListener('click', function() {
      var code = ($('couponInput').value || '').trim().toUpperCase();
      var msgEl = $('couponMsg');
      if (!code) { if (msgEl) { msgEl.textContent = 'Enter a code.'; msgEl.className = 'coupon-msg err'; } return; }
      if (!COUPONS[code]) { if (msgEl) { msgEl.textContent = 'Invalid code.'; msgEl.className = 'coupon-msg err'; } return; }
      if (calcTotals().subtotal < COUPONS[code].min) {
        if (msgEl) { msgEl.textContent = 'Min order ' + fmt(COUPONS[code].min) + ' required.'; msgEl.className = 'coupon-msg err'; } return;
      }
      couponCode = code;
      var c2 = COUPONS[code];
      if (msgEl) { msgEl.textContent = '✓ ' + code + ': ' + (c2.type === 'pct' ? c2.val + '% off' : fmt(c2.val) + ' off') + ' applied'; msgEl.className = 'coupon-msg ok'; }
      renderSummary();
    });
  }

  // Delivery
  document.querySelectorAll('input[name="delivery"]').forEach(function(r) {
    r.addEventListener('change', function() { deliveryType = r.value; renderSummary(); });
  });

  // Nav buttons
  var goDelivery = $('goToDelivery');
  if (goDelivery) goDelivery.addEventListener('click', function() {
    if (!getCart().length) { window.toast('Add items first', 'error'); return; }
    showTab('delivery');
    var t2 = $('tabDelivery'); if (t2) t2.disabled = false;
  });
  var backToCart = $('backToCart');
  if (backToCart) backToCart.addEventListener('click', function() { showTab('cart'); });
  var backToDelivery = $('backToDelivery');
  if (backToDelivery) backToDelivery.addEventListener('click', function() { showTab('delivery'); });

  // Address form
  var addrForm = $('addressForm');
  if (addrForm) {
    addrForm.addEventListener('submit', function(e) {
      e.preventDefault();
      showTab('payment');
      var tp = $('tabPayment'); if (tp) tp.disabled = false;
    });
  }

  // Payment method switching
  document.querySelectorAll('input[name="pay"]').forEach(function(r) {
    r.addEventListener('change', function() {
      ['formUpi','formCard','formNetbanking','formCod'].forEach(function(id) { var el=$(id); if(el) el.style.display='none'; });
      var map = { upi:'formUpi', card:'formCard', netbanking:'formNetbanking', cod:'formCod' };
      var el = $(map[r.value]); if (el) el.style.display = 'block';
    });
  });

  // Place order
  var placeBtn = $('placeOrder');
  if (placeBtn) {
    placeBtn.addEventListener('click', function() {
      var orderId = '#NG-' + Math.random().toString(36).substr(2,6).toUpperCase();
      var tag = $('orderIdTag'); if (tag) tag.textContent = orderId;
      var days = deliveryType === 'express' ? 2 : 5;
      var d = new Date(); d.setDate(d.getDate() + days);
      var dateEl = $('deliveryDate');
      if (dateEl) dateEl.textContent = d.toLocaleDateString('en-IN', { weekday:'long', day:'numeric', month:'long' });
      
      var cart = getCart();
      var orderItems = cart.map(function(i) {
        var p = window.PRODUCTS.find(function(x) { return x.id === i.id; });
        return {
          id: i.id,
          name: p ? p.name : 'Unknown Product',
          brand: p ? p.brand : '',
          img: p ? p.img : '',
          price: p ? p.price : 0,
          qty: i.qty
        };
      });

      var payInput = document.querySelector('input[name="pay"]:checked');
      var payMethod = payInput ? payInput.value : 'upi';
      var orderTotal = calcTotals().total;

      var newOrder = {
        id: orderId,
        date: new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }),
        deliveryDate: d.toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }),
        items: orderItems,
        total: orderTotal,
        status: 'Processing',
        deliveryType: deliveryType,
        paymentMethod: payMethod
      };

      var orders = getOrders();
      orders.unshift(newOrder);
      setOrders(orders);

      var ci = $('confirmedItems');
      if (ci) {
        ci.innerHTML = '<div style="border:1px solid var(--border);border-radius:10px;overflow:hidden">' +
          cart.map(function(i, idx) {
            var p = window.PRODUCTS.find(function(x) { return x.id === i.id; });
            if (!p) return '';
            return '<div style="display:flex;justify-content:space-between;font-size:0.83rem;padding:10px 14px;' + (idx ? 'border-top:1px solid var(--border)' : '') + '"><span style="color:var(--ink-2)">' + p.name + ' × ' + i.qty + '</span><span style="font-weight:600">' + fmt(p.price * i.qty) + '</span></div>';
          }).join('') + '</div>';
      }
      setCart([]); updateCartBadge(); showTab('confirm');
    });
  }

  renderCartItems();
  showTab('cart');
}

/* ══════════════════════════════════════════
   BOOT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  initNav();
  updateCartBadge();
  updateWishlistBadge();
  initShop();
  initCart();
  initWishlist();
  initOrders();
});

/* ══════════════════════════════════════════
   WISHLIST PAGE
   ══════════════════════════════════════════ */
function initWishlist() {
  var grid = $('wishlistGrid');
  if (!grid) return;

  window.renderWishlist = function() {
    var wish = getWish();
    var list = window.PRODUCTS.filter(function(p) { return wish.indexOf(p.id) >= 0; });
    var emptyEl = $('wishlistEmpty');
    var headerActions = $('wishlistActions');

    if (!list.length) {
      grid.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'block';
      if (headerActions) headerActions.style.display = 'none';
      return;
    }

    if (emptyEl) emptyEl.style.display = 'none';
    if (headerActions) headerActions.style.display = 'flex';

    grid.innerHTML = list.map(function(p) {
      return window.productCardHTML(p);
    }).join('');

    window.attachCardEvents(grid);
  };

  var clearWishBtn = $('clearWishlist');
  if (clearWishBtn) {
    clearWishBtn.addEventListener('click', function() {
      setWish([]);
      updateWishlistBadge();
      window.renderWishlist();
      window.toast('Wishlist cleared', 'info');
    });
  }

  var addAllBtn = $('addAllToCart');
  if (addAllBtn) {
    addAllBtn.addEventListener('click', function() {
      var wish = getWish();
      if (!wish.length) return;
      var cart = getCart();
      var addedCount = 0;
      wish.forEach(function(id) {
        var existing = cart.find(function(i) { return i.id === id; });
        if (existing) {
          existing.qty++;
        } else {
          cart.push({ id: id, qty: 1 });
        }
        addedCount++;
      });
      setCart(cart);
      updateCartBadge();
      window.toast('Added ' + addedCount + ' items to cart! 🛒', 'success');
    });
  }

  window.renderWishlist();
}

/* ══════════════════════════════════════════
   ORDERS PAGE
   ══════════════════════════════════════════ */
function initOrders() {
  var listEl = $('ordersList');
  if (!listEl) return;

  function renderOrders() {
    var orders = getOrders();
    var emptyEl = $('ordersEmpty');

    if (!orders.length) {
      listEl.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'block';
      return;
    }

    if (emptyEl) emptyEl.style.display = 'none';

    listEl.innerHTML = orders.map(function(o) {
      var statusClass = o.status.toLowerCase();
      var itemsHTML = o.items.map(function(item) {
        return '<div class="order-item-row">' +
          '<div style="display:flex;align-items:center;gap:14px">' +
            '<img src="' + item.img + '" alt="' + item.name + '" class="order-item-img" onerror="this.src=\'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=85\'"/>' +
            '<div>' +
              '<p class="order-item-brand">' + item.brand + '</p>' +
              '<p class="order-item-name">' + item.name + '</p>' +
              '<p class="order-item-qty">Qty: ' + item.qty + ' · ' + fmt(item.price) + ' each</p>' +
            '</div>' +
          '</div>' +
          '<span class="order-item-subtotal">' + fmt(item.price * item.qty) + '</span>' +
        '</div>';
      }).join('');

      var isProcessing = o.status === 'Processing';
      var actionButton = isProcessing
        ? '<button class="btn btn-outline btn-sm cancel-order-btn" data-id="' + o.id + '">Cancel Order</button>'
        : '';

      var statusLabel = o.status === 'Cancelled' ? '❌ Cancelled' :
                        o.status === 'Processing' ? '⏳ Processing' : '✅ Delivered';

      return '<div class="order-card">' +
        '<div class="order-card-header">' +
          '<div>' +
            '<p class="order-card-id">Order ID: <span>' + o.id + '</span></p>' +
            '<p class="order-card-meta">Placed on ' + o.date + ' · Paid via ' + o.paymentMethod.toUpperCase() + '</p>' +
          '</div>' +
          '<div style="text-align:right">' +
            '<span class="order-status-badge ' + statusClass + '">' + statusLabel + '</span>' +
            '<p class="order-card-total" style="margin-top:6px">Total: <span>' + fmt(o.total) + '</span></p>' +
          '</div>' +
        '</div>' +
        '<div class="order-card-body">' +
          '<div class="order-items-container">' + itemsHTML + '</div>' +
          '<div class="order-card-footer">' +
            '<div class="order-est">' +
              (o.status === 'Processing' ? '🚚 Expected delivery: <strong>' + o.deliveryDate + '</strong>' : '') +
              (o.status === 'Cancelled' ? '❌ This order was cancelled.' : '') +
            '</div>' +
            '<div class="order-actions-bar">' +
              actionButton +
              '<button class="btn btn-primary btn-sm reorder-btn" data-id="' + o.id + '">Reorder Items</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    // Attach cancellation event
    listEl.querySelectorAll('.cancel-order-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var id = btn.dataset.id;
        var orders = getOrders();
        var order = orders.find(function(o) { return o.id === id; });
        if (order) {
          order.status = 'Cancelled';
          setOrders(orders);
          renderOrders();
          window.toast('Order ' + id + ' has been cancelled.', 'info');
        }
      });
    });

    // Attach reorder event
    listEl.querySelectorAll('.reorder-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var id = btn.dataset.id;
        var orders = getOrders();
        var order = orders.find(function(o) { return o.id === id; });
        if (order) {
          var cart = getCart();
          var reorderCount = 0;
          order.items.forEach(function(item) {
            var existing = cart.find(function(i) { return i.id === item.id; });
            if (existing) {
              existing.qty += item.qty;
            } else {
              cart.push({ id: item.id, qty: item.qty });
            }
            reorderCount += item.qty;
          });
          setCart(cart);
          updateCartBadge();
          window.toast('Added ' + reorderCount + ' items back to your cart! 🛒', 'success');
        }
      });
    });
  }

  renderOrders();
}
