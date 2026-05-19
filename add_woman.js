const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const woman_products = `
    const womanProducts = [
      { id: 1, name: 'FLORAL MIDI DRESS', price: '₹ 3,490', img1: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#F5F0E8', '#1A1A1A', '#D4A5A0'], badge: 'NEW DROP' },
      { id: 2, name: 'LINEN BLAZER', price: '₹ 4,990', img1: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#F5F0E8', '#F5F5F5', '#C4A882'] },
      { id: 3, name: 'PLEATED TROUSER', price: '₹ 2,790', img1: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#F5F0E8', '#1A1A1A', '#888888'] },
      { id: 4, name: 'RIBBED BODYSUIT', price: '₹ 1,490', img1: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#1A1A1A', '#FFFFFF', '#C17F3E'], badge: 'BESTSELLER' },
      { id: 5, name: 'FLOWING MIDI SKIRT', price: '<span style="color:#8B0000">₹ 1,590</span> <span style="text-decoration:line-through;color:#888;font-size:9.5px;">₹ 2,290</span>', img1: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#FFFFFF', '#7C9A8A', '#1A3A5C'], badge: 'SALE' },
      { id: 6, name: 'LINEN SHIRT', price: '₹ 2,990', img1: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#FFFFFF', '#4A6FA5', '#1A1A1A'] },
      { id: 7, name: 'STRUCTURED BLAZER', price: '₹ 5,990', img1: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#C4A882', '#1A1A1A', '#C8C0C0'], badge: 'NEW DROP' },
      { id: 8, name: 'WIDE LEG JEANS', price: '₹ 3,290', img1: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#4A6FA5', '#2A2A2A', '#F5F0E8'], badge: 'BESTSELLER' },
      { id: 9, name: 'HALTER NECK TOP', price: '₹ 1,790', img1: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#1A1A1A', '#FFFFFF', '#8B7355'] },
      { id: 10, name: 'CO-ORD LINEN SET', price: '₹ 5,490', img1: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#F5F0E8', '#C17F3E'], badge: 'BESTSELLER' },
      { id: 11, name: 'KNIT CARDIGAN', price: '₹ 2,490', img1: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#F5F0E8', '#D4A5A0', '#8B7355'] },
      { id: 12, name: 'PRINTED WRAP DRESS', price: '₹ 3,990', img1: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#F5F0E8', '#1A1A1A'], badge: 'NEW DROP' },
      { id: 13, name: 'SILK BLEND SHIRT', price: '₹ 2,990', img1: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#FFFFFF', '#F5F0E8', '#1A1A1A'] },
      { id: 14, name: 'PLEATED MIDI SKIRT', price: '₹ 2,190', img1: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#1A1A1A', '#7C9A8A', '#F5F0E8'] },
      { id: 15, name: 'OVERSIZED BLAZER', price: '₹ 5,490', img1: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#C4A882', '#1A1A1A'], badge: 'NEW DROP' },
      { id: 16, name: 'STRAPPY HEELED SANDALS', price: '₹ 4,990', img1: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=533&fit=crop&auto=format&q=80', colors: ['#C4A882', '#1A1A1A', '#FFFFFF'] }
    ];

    function genWomanCard(p, delay=0, reveal=false) {
      let colorsHtml = p.colors.map(c => \`<div class="cdot" style="background:\${c}"></div>\`).join('');
      let badgeHtml = p.badge ? \`<div class="badge" \${p.badge==='SALE'?'style="background:#8B0000"':p.badge==='COLLAB'?'style="background:#1A1A2E"':''}>\${p.badge}</div>\` : '';
      let cls = reveal ? \`product-card reveal-item\` : \`product-card match-card\`;
      return \`
        <div class="\${cls}" style="\${reveal ? \`transition-delay: \${delay}s\` : ''}">
          <div class="pc-img-area">
            <img src="\${p.img1}" class="pc-img i1">
            <img src="\${p.img2}" class="pc-img i2">
            \${badgeHtml}
            <div class="wishlist-btn" onclick="toggleWishlist(event, this)">♡</div>
            <div class="add-to-bag" onclick="addToCart(event)">ADD TO BAG</div>
          </div>
          <div class="pc-info">
            <div class="pc-name">\${p.name}</div>
            <div class="pc-price">\${p.price}</div>
            <div class="color-dots">\${colorsHtml}</div>
          </div>
        </div>
      \`;
    }
\`;

const woman_css = \`
    /* WOMAN PAGE CSS */
    .woman-ed-row-4 { display: flex; gap: 2px; min-height: 88vh; }
    .woman-ed-row-4-left { width: 62%; overflow: hidden; position: relative; }
    .woman-ed-row-4-left img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.85s ease; }
    .woman-ed-row-4-left:hover img { transform: scale(1.04); }
    .woman-ed-row-4-right { width: 38%; display: flex; flex-direction: column; gap: 2px; }
    
    .palette-sec { background: var(--white); padding: 72px 40px; text-align: center; }
    .swatch-row { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-top: 36px; }
    .swatch-item { display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .swatch-circle { width: 36px; height: 36px; border: 1px solid rgba(0,0,0,0.12); border-radius: 50%; transition: transform 0.2s ease; }
    .swatch-circle:hover { transform: scale(1.2); }
    .swatch-name { font-size: 8.5px; color: #888; text-transform: uppercase; letter-spacing: 0.1em; }
    
    @media (max-width: 900px) {
        .woman-ed-row-4 { flex-direction: column; height: auto; }
        .woman-ed-row-4-left, .woman-ed-row-4-right { width: 100%; }
        .woman-ed-row-4-left { height: 88vh; }
        .swatch-row { display: grid; grid-template-columns: repeat(4, 1fr); }
    }
\`;

const woman_html = \`
  <div id="page-woman" class="page">
    <div class="sub-nav">
      <a href="javascript:void(0)" class="sub-nav-link active">THE DROP</a>
      <a href="javascript:void(0)" class="sub-nav-link">STYLE NOTES</a>
      <a href="javascript:void(0)" class="sub-nav-link">WANDERLUST EDIT</a>
      <a href="javascript:void(0)" class="sub-nav-link">THE OCCASION</a>
      <a href="javascript:void(0)" class="sub-nav-link">CO-ORD SETS</a>
      <a href="javascript:void(0)" class="sub-nav-link">LINEN EDIT</a>
      <a href="javascript:void(0)" class="sub-nav-link">BEST SELLERS</a>
      <a href="javascript:void(0)" class="sub-nav-link">DRESSES</a>
      <a href="javascript:void(0)" class="sub-nav-link">TOPS</a>
      <a href="javascript:void(0)" class="sub-nav-link">SHIRTS</a>
      <a href="javascript:void(0)" class="sub-nav-link">T-SHIRTS</a>
      <a href="javascript:void(0)" class="sub-nav-link">KNITWEAR</a>
      <a href="javascript:void(0)" class="sub-nav-link">TROUSERS</a>
      <a href="javascript:void(0)" class="sub-nav-link">JEANS</a>
      <a href="javascript:void(0)" class="sub-nav-link">SKIRTS</a>
      <a href="javascript:void(0)" class="sub-nav-link">SHORTS</a>
      <a href="javascript:void(0)" class="sub-nav-link">BLAZERS</a>
      <a href="javascript:void(0)" class="sub-nav-link">JACKETS</a>
      <a href="javascript:void(0)" class="sub-nav-link">CARDIGANS</a>
      <a href="javascript:void(0)" class="sub-nav-link">SHOES</a>
      <a href="javascript:void(0)" class="sub-nav-link">BAGS</a>
      <a href="javascript:void(0)" class="sub-nav-link">SWIMWEAR</a>
      <a href="javascript:void(0)" class="sub-nav-link">ACCESSORIES</a>
      <a href="javascript:void(0)" class="sub-nav-link">SPECIAL PRICES</a>
    </div>

    <!-- Hero -->
    <section class="hero">
      <div class="slide active">
        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop&auto=format&q=85" alt="The Drop">
        <div class="hero-overlay" style="background: linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%), linear-gradient(to right, rgba(0,0,0,0.35), transparent 45%);"></div>
        <div class="slide-content sc-1">
          <div class="ov-hide"><div class="slide-label anim-el del-1">WOMAN | THE DROP</div></div>
          <div class="ov-hide"><div class="slide-heading anim-el del-2">The New<br>Season</div></div>
          <div class="ov-hide"><div class="slide-sub anim-el del-3">P Fashion Woman — Updated Weekly</div></div>
          <div class="ov-hide"><div class="cta-wrap anim-el del-4"><a href="javascript:void(0)" class="btn btn-white">SHOP NOW</a></div></div>
        </div>
      </div>
      <div class="slide">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=1080&fit=crop&auto=format&q=85" alt="Summer">
        <div class="hero-overlay"></div>
        <div class="slide-content sc-2">
          <div class="ov-hide"><div class="slide-label anim-el del-1">WANDERLUST EDIT</div></div>
          <div class="ov-hide"><div class="slide-heading anim-el del-2">Summer<br>Calling</div></div>
          <div class="ov-hide"><div class="slide-sub anim-el del-3">The Warm-Weather Wardrobe</div></div>
          <div class="ov-hide"><div class="cta-wrap anim-el del-4" style="justify-content:flex-end;"><a href="javascript:void(0)" class="btn btn-ghost">DISCOVER MORE</a></div></div>
        </div>
      </div>
      <div class="slide">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&auto=format&q=85" alt="Occasion">
        <div class="hero-overlay"></div>
        <div class="slide-content sc-3">
          <div class="ov-hide"><div class="slide-label anim-el del-1">NEW ARRIVALS</div></div>
          <div class="ov-hide"><div class="slide-heading anim-el del-2">The<br>Occasion</div></div>
          <div class="ov-hide"><div class="slide-sub anim-el del-3">Dressed for Every Moment</div></div>
          <div class="ov-hide"><div class="cta-wrap anim-el del-4"><a href="javascript:void(0)" class="btn btn-white">SHOP WOMAN</a><a href="javascript:void(0)" class="btn btn-ghost">EXPLORE ALL</a></div></div>
        </div>
      </div>
      <div class="hero-dots">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="scroll-tag">SCROLL</div>
    </section>

    <div class="breadcrumb">P FASHION <span class="sep">></span> WOMAN <span class="sep">></span> <span>THE DROP</span></div>

    <!-- Editorial Lookbook -->
    <section class="man-ed-1 reveal-item">
      <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&h=1400&fit=crop&auto=format&q=85" class="man-px-img">
      <div class="man-ed-1-grad"></div>
      <div class="man-ed-1-text anim-el">
        <div class="man-ed-1-tag">01 — THE DROP</div>
        <div class="man-ed-1-heading">New Arrivals</div>
        <div class="man-ed-1-sub">The Season's Most Wanted Pieces</div>
        <a href="javascript:void(0)" class="btn btn-white" style="padding:12px 30px">SHOP NOW</a>
      </div>
    </section>

    <section class="man-ed-row-2 reveal-item">
      <div>
        <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=900&fit=crop&auto=format&q=80">
        <div class="man-ed-col-label"><div class="man-ed-col-num">01</div><div class="man-ed-col-name">DRESSES</div></div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=900&fit=crop&auto=format&q=80">
        <div class="man-ed-col-label"><div class="man-ed-col-num">02</div><div class="man-ed-col-name">KNITWEAR</div></div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&h=900&fit=crop&auto=format&q=80">
        <div class="man-ed-col-label"><div class="man-ed-col-num">03</div><div class="man-ed-col-name">TROUSERS</div></div>
      </div>
    </section>

    <section class="man-ed-row-3 reveal-item">
      <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1920&h=900&fit=crop&auto=format&q=85" class="man-px-img">
      <div class="man-ed-row-3-grad"></div>
      <div class="camp-content anim-el" style="left:0; padding:0 80px;">
        <div class="camp-tag">WANDERLUST EDIT</div>
        <div class="camp-heading" style="font-size: clamp(38px,5vw,72px);">Summer<br>Calling</div>
        <div class="camp-sub">Effortless warm-weather style</div>
        <a href="javascript:void(0)" class="mer4-cta" style="color:#fff; text-decoration:none;">DISCOVER MORE &rarr;</a>
      </div>
    </section>

    <section class="woman-ed-row-4 reveal-item">
      <div class="woman-ed-row-4-left"><img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1000&h=1400&fit=crop&auto=format&q=80"></div>
      <div class="woman-ed-row-4-right">
        <div class="man-ed-row-4-r-top"><img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=600&h=500&fit=crop&auto=format&q=80"></div>
        <div class="man-ed-row-4-r-bot">
          <div class="mer4-tag">THE COLLECTION</div>
          <div class="mer4-heading">Effortless<br>Style</div>
          <div class="mer4-desc">The season's most coveted pieces. Crafted for the modern woman.</div>
          <a href="javascript:void(0)" class="mer4-cta">EXPLORE &rarr;</a>
        </div>
      </div>
    </section>

    <section class="man-ed-row-2 reveal-item">
       <div>
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=900&fit=crop&auto=format&q=80">
        <div class="man-ed-col-label"><div class="man-ed-col-num">01</div><div class="man-ed-col-name">THE OCCASION</div></div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=900&fit=crop&auto=format&q=80">
        <div class="man-ed-col-label"><div class="man-ed-col-num">02</div><div class="man-ed-col-name">CO-ORD SETS</div></div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=900&fit=crop&auto=format&q=80">
        <div class="man-ed-col-label"><div class="man-ed-col-num">03</div><div class="man-ed-col-name">LINEN EDIT</div></div>
      </div>
    </section>

    <!-- The Piece -->
    <section class="the-piece reveal-item">
      <div class="tp-left"><img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&h=1600&fit=crop&auto=format&q=80" style="transition-duration:1.2s"></div>
      <div class="tp-right">
        <div class="tp-tag">THE PIECE</div>
        <div class="tp-name">Flowing Midi<br>Dress</div>
        <div class="tp-price">₹ 3,990</div>
        <div class="tp-col-lbl">COLOUR: IVORY</div>
        <div class="tp-swatches">
          <div class="tp-swatch active" style="background: #F5F0E8;"></div>
          <div class="tp-swatch" style="background: #000000;"></div>
          <div class="tp-swatch" style="background: #D4A5A0;"></div>
        </div>
        <div class="tp-size-head">
          <span class="tp-size-lbl">SELECT SIZE</span><span class="tp-size-guide">SIZE GUIDE ↗</span>
        </div>
        <div class="tp-sizes">
          <div class="tp-size">XS</div><div class="tp-size">S</div><div class="tp-size">M</div><div class="tp-size">L</div><div class="tp-size oos">XL</div><div class="tp-size oos">XXL</div>
        </div>
        <button class="tp-add" onclick="addToCart(event)">ADD TO BAG</button>
        <button class="tp-wish" onclick="toggleWishlist(event, this)">ADD TO WISHLIST</button>
        <div class="tp-acc" onclick="this.classList.toggle('open')">
          <div class="tp-acc-head"><span>DESCRIPTION</span><span class="tp-acc-icon">+</span></div>
          <div class="tp-acc-body">Flowing midi dress in a lightweight fluid fabric. Relaxed fit with a subtle wrap detail at the waist.</div>
        </div>
        <div class="tp-acc" onclick="this.classList.toggle('open')">
          <div class="tp-acc-head"><span>COMPOSITION &amp; CARE</span><span class="tp-acc-icon">+</span></div>
          <div class="tp-acc-body">100% Viscose. Hand wash cold. Do not tumble dry.</div>
        </div>
        <div class="tp-acc" onclick="this.classList.toggle('open')">
          <div class="tp-acc-head"><span>DELIVERY &amp; RETURNS</span><span class="tp-acc-icon">+</span></div>
          <div class="tp-acc-body">Free delivery on orders above ₹5,000. Free returns within 30 days.</div>
        </div>
      </div>
    </section>

    <!-- Filter + Grid -->
    <div class="filter-bar">
      <div class="filter-left">
        <div class="filter-pill">THE DROP ▾</div><div class="filter-pill">SIZE ▾</div><div class="filter-pill">COLOR ▾</div><div class="filter-pill">PRICE ▾</div><div class="filter-pill">CATEGORY ▾</div>
      </div>
      <div class="filter-right"><div class="fr-items">247 ITEMS</div><div class="fr-sort">SORT BY: FEATURED ▾</div></div>
    </div>
    <div class="featured-grid" id="woman-products-grid"></div>
    <button class="load-more">LOAD MORE</button>

    <!-- Campaign Parallax -->
    <section class="campaign reveal-item" id="woman-campaign-banner" style="height:95vh;">
      <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1920&h=1200&fit=crop&auto=format&q=85" class="man-px-img" style="height:115%;">
      <div class="man-ed-row-3-grad"></div>
      <div class="man-ed-1-text anim-el" style="padding: 52px 64px">
        <div class="man-ed-1-tag">THE CAMPAIGN</div>
        <div class="man-ed-1-heading" style="font-size: clamp(48px,7vw,90px); line-height:0.9;">Wanderlust<br>Edit</div>
        <div class="man-ed-1-sub">Effortless warm-weather style</div>
        <a href="javascript:void(0)" class="btn btn-white">SHOP THE EDIT</a>
      </div>
    </section>

    <section class="man-ed-row-2 reveal-item">
       <div>
        <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop&auto=format&q=80">
        <div class="man-ed-col-label"><div class="man-ed-col-num">01</div><div class="man-ed-col-name">DRESSES</div></div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop&auto=format&q=80">
        <div class="man-ed-col-label"><div class="man-ed-col-num">02</div><div class="man-ed-col-name">RESORT WEAR</div></div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop&auto=format&q=80">
        <div class="man-ed-col-label"><div class="man-ed-col-num">03</div><div class="man-ed-col-name">ACCESSORIES</div></div>
      </div>
    </section>

    <!-- Co-ord Strip -->
    <div class="section-header">
      <div class="sh-left">CO-ORD SETS</div>
      <div class="sh-right">VIEW ALL &rarr;</div>
    </div>
    <div class="drag-strip-wrap" style="position:relative;">
      <div class="drag-strip" id="drag-strip-woman-coords"></div>
    </div>

    <!-- Linen Editorial -->
    <section class="man-ed-row-5 reveal-item" style="margin-top:60px;">
      <div class="man-ed-row-5-left">
        <div class="mer4-tag">THE LINEN EDIT</div>
        <div class="mer4-heading">Natural<br>Luxury</div>
        <div class="mer4-desc">Breathable linen and linen blends for the season's most effortless days.</div>
        <a href="javascript:void(0)" class="mer4-cta">SHOP LINEN &rarr;</a>
      </div>
      <div class="man-ed-row-5-right">
        <div style="height:60%; overflow:hidden;"><img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=700&fit=crop&auto=format&q=80"></div>
        <div style="height:40%; overflow:hidden; margin-top:2px;"><img src="https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&h=500&fit=crop&auto=format&q=80"></div>
      </div>
    </section>

    <!-- Palette -->
    <section class="palette-sec reveal-item">
      <div class="we-heading" style="font-size:38px; color:#000;">The Season's Palette</div>
      <div class="we-sub">COLOURS OF THE COLLECTION</div>
      <div class="swatch-row anim-el">
        <div class="swatch-item"><div class="swatch-circle" style="background:#F5F0E8"></div><div class="swatch-name">Ivory</div></div>
        <div class="swatch-item"><div class="swatch-circle" style="background:#D4A5A0"></div><div class="swatch-name">Dusty Rose</div></div>
        <div class="swatch-item"><div class="swatch-circle" style="background:#C17F3E"></div><div class="swatch-name">Terracotta</div></div>
        <div class="swatch-item"><div class="swatch-circle" style="background:#7C9A8A"></div><div class="swatch-name">Sage Green</div></div>
        <div class="swatch-item"><div class="swatch-circle" style="background:#1A3A5C"></div><div class="swatch-name">Navy</div></div>
        <div class="swatch-item"><div class="swatch-circle" style="background:#C4A882"></div><div class="swatch-name">Camel</div></div>
        <div class="swatch-item"><div class="swatch-circle" style="background:#000000"></div><div class="swatch-name">Black</div></div>
        <div class="swatch-item"><div class="swatch-circle" style="background:#FFFFFF; border: 1px solid #DDD;"></div><div class="swatch-name">White</div></div>
      </div>
    </section>

    <!-- Style Notes -->
    <div class="section-header">
      <div class="sh-left">STYLE NOTES</div>
    </div>
    <div class="we-sub" style="padding:0 32px 36px">How to wear the season's key pieces</div>
    <div class="style-notes-grid reveal-item">
       <div class="sn-item">
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=900&fit=crop&auto=format&q=80">
        <div class="sn-grad"></div>
        <div class="sn-text">
          <div class="sn-look">LOOK 01</div>
          <div class="sn-pieces">Linen Blazer &rarr;<br>Wide Leg Trousers &rarr;<br>Strappy Sandals &rarr;</div>
        </div>
      </div>
      <div class="sn-item">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=900&fit=crop&auto=format&q=80">
        <div class="sn-grad"></div>
        <div class="sn-text">
          <div class="sn-look">LOOK 02</div>
          <div class="sn-pieces">Midi Dress &rarr;<br>Knit Cardigan &rarr;<br>Heeled Sandals &rarr;</div>
        </div>
      </div>
      <div class="sn-item">
        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=900&fit=crop&auto=format&q=80">
        <div class="sn-grad"></div>
        <div class="sn-text">
          <div class="sn-look">LOOK 03</div>
          <div class="sn-pieces">Co-ord Linen Set &rarr;<br>Halter Top &rarr;<br>Tote Bag &rarr;</div>
        </div>
      </div>
    </div>

    <!-- Also Like -->
    <div style="text-align: center; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; padding: 72px 32px 28px;">YOU MAY ALSO LIKE</div>
    <div class="featured-grid reveal-item" id="woman-also-like"></div>

    <!-- Shared Footer will be visible -->
  </div>
\`;

const woman_js_init = \`
    // WOMAN PAGE INIT
    document.getElementById('woman-products-grid').innerHTML = womanProducts.map((p, i) => genWomanCard(p, (i%4)*0.12, true)).join('');
    document.getElementById('drag-strip-woman-coords').innerHTML = [womanProducts[9], womanProducts[10], womanProducts[2], womanProducts[7], womanProducts[4]].map(p => genWomanCard(p)).join('');
    document.getElementById('woman-also-like').innerHTML = [womanProducts[0], womanProducts[3], womanProducts[8], womanProducts[9]].map((p, i) => genWomanCard(p, i*0.12, true)).join('');
\`;

// 1. Insert CSS
html = html.replace('/* MAN PAGE CSS */', woman_css + '\\n    /* MAN PAGE CSS */');

// 2. Insert HTML (before footer)
html = html.replace('<div id="page-man" class="page">', woman_html + '\\n    <div id="page-man" class="page">');

// 3. Insert JS Data & Init
html = html.replace('// Drag strips initialized above', woman_products + '\\n' + woman_js_init + '\\n    // Drag strips initialized above');

// 4. Update goTo handle nav-woman
html = fs.writeFileSync('index.html', html, 'utf8');
console.log('WOMAN page integrated successfully');
