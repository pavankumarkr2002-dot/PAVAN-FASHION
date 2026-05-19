const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const new_goto = `      // Nav
      window.goTo = (page) => {
        document.body.style.opacity = 0;
        setTimeout(() => {
          window.scrollTo(0,0);
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('nav-on'));
          if(page !== 'home') {
            const link = document.querySelector(\`.nav-\${page}\`);
            if(link) link.classList.add('nav-on');
          }
          document.querySelectorAll('.page').forEach(p => {
             p.style.display = 'none';
             p.classList.remove('active');
          });
          const targetPage = document.getElementById('page-' + page);
          if(targetPage) {
             targetPage.style.display = 'block';
             targetPage.classList.add('active');
          } else {
             const homePage = document.getElementById('page-home');
             if(homePage) {
                 homePage.style.display = 'block';
                 homePage.classList.add('active');
             }
          }
          document.body.style.opacity = 1;
        }, 400);
      };`;

html = html.replace(/      \/\/ Nav\s+window\.goTo = \(page\) => \{[\s\S]*?\};/, new_goto);

const man_css = `
    /* MAN PAGE CSS */
    .sub-nav { width: 100%; background: #FAFAFA; height: 36px; border-top: 1px solid rgba(0,0,0,0.06); border-bottom: 1px solid rgba(0,0,0,0.06); display: flex; align-items: center; overflow-x: auto; scrollbar-width: none; white-space: nowrap; }
    .sub-nav::-webkit-scrollbar { display: none; }
    .sub-nav-link { font-size: 9.5px; letter-spacing: 0.14em; color: #555; text-transform: uppercase; padding: 0 16px; transition: color 0.2s; }
    .sub-nav-link:hover, .sub-nav-link.active { color: #000; }
    
    .breadcrumb { font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; border-bottom: 1px solid rgba(0,0,0,0.07); padding: 16px 32px; color: #888; }
    .breadcrumb span { color: #000; }
    .breadcrumb .sep { color: #CCC; margin: 0 4px; }
    
    .man-ed-1 { height: 90vh; position: relative; overflow: hidden; }
    .man-ed-1 img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.9s ease; }
    .man-ed-1:hover img { transform: scale(1.03); }
    .man-ed-1-grad { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.55), transparent); pointer-events: none; }
    .man-ed-1-text { position: absolute; bottom: 0; left: 0; padding: 52px 60px; z-index: 2; }
    .man-ed-1-tag { font-size: 9px; color: var(--white); letter-spacing: 0.28em; text-transform: uppercase; margin-bottom: 16px; }
    .man-ed-1-heading { font-family: 'Cormorant Garamond', serif; font-size: 78px; font-style: italic; font-weight: 300; color: var(--white); line-height: 1; margin-bottom: 16px; }
    .man-ed-1-sub { font-size: 10px; color: rgba(255,255,255,0.75); text-transform: uppercase; margin-bottom: 24px; letter-spacing: 0.18em; }
    
    .man-ed-row-2 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; height: 68vh; }
    .man-ed-row-2 > div { position: relative; overflow: hidden; }
    .man-ed-row-2 img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.85s ease; }
    .man-ed-row-2 > div:hover img { transform: scale(1.04); }
    .man-ed-col-label { position: absolute; bottom: 30px; left: 30px; pointer-events: none; }
    .man-ed-col-num { font-size: 9px; color: rgba(255,255,255,0.75); letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 6px; }
    .man-ed-col-name { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-style: italic; font-weight: 300; color: var(--white); }
    @media (max-width: 900px) { .man-ed-row-2 { grid-template-columns: 1fr; height: auto; } .man-ed-row-2 > div { height: 68vh; } }

    .man-ed-row-3 { height: 65vh; position: relative; overflow: hidden; }
    .man-ed-row-3 img { position: absolute; top: -15%; left: 0; width: 100%; height: 115%; object-fit: cover; will-change: transform; }
    .man-ed-row-3-grad { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.55), transparent 50%); pointer-events: none; }
    
    .man-ed-row-4 { display: flex; gap: 2px; height: 88vh; }
    .man-ed-row-4-left { width: 65%; overflow: hidden; position: relative; }
    .man-ed-row-4-left img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.85s ease; }
    .man-ed-row-4-left:hover img { transform: scale(1.04); }
    .man-ed-row-4-right { width: 35%; display: flex; flex-direction: column; gap: 2px; }
    .man-ed-row-4-r-top { flex: 1; overflow: hidden; position: relative; }
    .man-ed-row-4-r-top img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.85s ease; }
    .man-ed-row-4-r-top:hover img { transform: scale(1.04); }
    .man-ed-row-4-r-bot { background: var(--white); padding: 44px 40px; flex-shrink: 0; }
    .mer4-tag { font-size: 9px; color: #AAA; letter-spacing: 0.28em; text-transform: uppercase; margin-bottom: 16px; }
    .mer4-heading { font-family: 'Cormorant Garamond', serif; font-size: 48px; font-style: italic; font-weight: 300; color: var(--black); line-height: 1; margin-bottom: 16px; }
    .mer4-desc { font-size: 10.5px; color: #555; line-height: 1.85; margin-bottom: 24px; }
    .mer4-cta { font-size: 9.5px; color: var(--black); text-decoration: underline; text-transform: uppercase; letter-spacing: 0.16em; }
    @media (max-width: 900px) { .man-ed-row-4 { flex-direction: column; height: auto; } .man-ed-row-4-left, .man-ed-row-4-right { width: 100%; } .man-ed-row-4-left { height: 88vh; } .man-ed-row-4-r-top { height: 50vh; } }

    .man-ed-row-5 { display: flex; gap: 2px; height: 80vh; }
    .man-ed-row-5-left { width: 35%; background: var(--white); padding: 44px 40px; display: flex; flex-direction: column; justify-content: flex-end; }
    .man-ed-row-5-right { width: 65%; overflow: hidden; position: relative; }
    .man-ed-row-5-right img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.85s ease; }
    .man-ed-row-5-right:hover img { transform: scale(1.04); }
    @media (max-width: 900px) { .man-ed-row-5 { flex-direction: column; height: auto; } .man-ed-row-5-left, .man-ed-row-5-right { width: 100%; } .man-ed-row-5-right { height: 80vh; } }

    .collab-sec { background: #000; padding: 2px; display: flex; gap: 2px; margin-top: 60px; }
    .collab-left { width: 55%; height: 85vh; overflow: hidden; position: relative; }
    .collab-left img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.4s ease; }
    .collab-left:hover img { transform: scale(1.025); }
    .collab-right { width: 45%; background: #000; padding: 52px; display: flex; flex-direction: column; justify-content: center; color: var(--white); }
    .collab-tag { font-size: 9px; color: rgba(255,255,255,0.5); letter-spacing: 0.28em; text-transform: uppercase; margin-bottom: 20px; }
    .collab-heading { font-family: 'Cormorant Garamond', serif; font-size: 62px; font-style: italic; font-weight: 300; line-height: 0.9; margin-bottom: 8px; }
    .collab-sub { font-size: 9px; color: rgba(255,255,255,0.6); letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 28px; }
    .collab-div { width: 100%; height: 1px; background: rgba(255,255,255,0.15); margin-bottom: 28px; }
    .collab-desc { font-size: 10.5px; color: rgba(255,255,255,0.6); line-height: 1.85; margin-bottom: 28px; max-width: 400px; }
    .collab-cta { display: inline-block; background: var(--white); color: var(--black); font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; padding: 14px 36px; margin-bottom: 14px; text-align: center; width: fit-content; }
    .collab-sub-cta { font-size: 9px; color: rgba(255,255,255,0.5); text-decoration: underline; }
    @media (max-width: 900px) { .collab-sec { flex-direction: column; } .collab-left, .collab-right { width: 100%; } }

    .filter-bar { position: sticky; top: 94px; z-index: 10; background: rgba(255,255,255,0.97); backdrop-filter: blur(8px); border-top: 1px solid rgba(0,0,0,0.08); border-bottom: 1px solid rgba(0,0,0,0.08); height: 50px; display: flex; justify-content: space-between; align-items: center; padding: 0 32px; margin-top: 60px; margin-bottom: 2px; }
    .filter-left { display: flex; gap: 4px; overflow-x: auto; scrollbar-width: none; }
    .filter-left::-webkit-scrollbar { display: none; }
    .filter-pill { font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.14em; border: 1px solid transparent; padding: 8px 16px; transition: border 0.2s, background 0.2s; white-space: nowrap; }
    .filter-pill:hover { border-color: rgba(0,0,0,0.25); background: #F5F5F5; }
    .filter-right { display: flex; gap: 24px; align-items: center; white-space: nowrap; }
    .fr-items { font-size: 9.5px; color: #888; text-transform: uppercase; }
    .fr-sort { font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.12em; }
    @media (max-width: 900px) { .filter-bar { top: 56px; padding: 0 16px; } .filter-right { display: none; } }

    .load-more { display: block; margin: 48px auto; border: 1px solid rgba(0,0,0,0.22); background: transparent; font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; padding: 13px 48px; transition: background 0.3s, color 0.3s; }
    .load-more:hover { background: var(--black); color: var(--white); }

    .style-notes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
    .sn-item { height: 75vh; position: relative; overflow: hidden; }
    .sn-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.85s ease; }
    .sn-item:hover img { transform: scale(1.04); }
    .sn-grad { position: absolute; bottom: 0; left: 0; width: 100%; height: 50%; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); pointer-events: none; }
    .sn-text { position: absolute; bottom: 28px; left: 28px; color: var(--white); }
    .sn-look { font-size: 9px; color: rgba(255,255,255,0.7); letter-spacing: 0.22em; margin-bottom: 12px; }
    .sn-pieces { font-size: 10px; text-transform: uppercase; line-height: 1.6; }
    @media (max-width: 900px) { .style-notes-grid { grid-template-columns: 1fr; } }

    .origins-sec { background: var(--black); }
    .origins-img { width: 100%; height: 85vh; object-fit: cover; }
    .origins-text { padding: 56px 40px; text-align: center; color: var(--white); }
    .og-tag { font-size: 9px; color: #AAA; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 18px; }
    .og-heading { font-family: 'Cormorant Garamond', serif; font-size: 64px; font-style: italic; font-weight: 300; margin-bottom: 18px; }
    .og-desc { font-size: 11px; color: rgba(255,255,255,0.55); line-height: 1.85; max-width: 520px; margin: 0 auto 32px; }

    .active-sec { background: #F5F5F5; padding: 2px; display: flex; gap: 2px; }
    .ac-left { width: 50%; height: 80vh; overflow: hidden; }
    .ac-left img { width: 100%; height: 100%; object-fit: cover; transition: transform 1s ease; }
    .ac-left:hover img { transform: scale(1.04); }
    .ac-right { width: 50%; display: flex; flex-direction: column; gap: 2px; }
    .ac-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
    .ac-cell { aspect-ratio: 1/1; overflow: hidden; }
    .ac-cell img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease; }
    .ac-cell:hover img { transform: scale(1.03); }
    .ac-bot { background: var(--white); padding: 36px; flex: 1; display: flex; flex-direction: column; justify-content: center; }
    .ac-btn { background: var(--black); color: var(--white); font-size: 9px; letter-spacing: 0.22em; text-transform: uppercase; padding: 14px; text-align: center; width: 100%; margin-top: 24px; }
    @media (max-width: 900px) { .active-sec { flex-direction: column; } .ac-left, .ac-right { width: 100%; } }

    .the-piece { display: flex; align-items: stretch; margin-top: 60px; }
    .tp-left { width: 68%; height: 90vh; overflow: hidden; }
    .tp-left img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s ease; }
    .tp-left:hover img { transform: scale(1.03); }
    .tp-right { width: 32%; background: var(--white); padding: 60px 48px; display: flex; flex-direction: column; justify-content: center; }
    .tp-tag { font-size: 9px; color: #AAA; letter-spacing: 0.28em; text-transform: uppercase; margin-bottom: 20px; }
    .tp-name { font-family: 'Cormorant Garamond', serif; font-size: 44px; font-style: italic; font-weight: 300; color: var(--black); margin-bottom: 6px; line-height: 1; }
    .tp-price { font-size: 16px; color: var(--black); margin-bottom: 24px; }
    .tp-col-lbl { font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.14em; margin-bottom: 10px; }
    .tp-swatches { display: flex; gap: 8px; margin-bottom: 24px; }
    .tp-swatch { width: 14px; height: 14px; border-radius: 50%; border: 1px solid rgba(0,0,0,0.15); transition: transform 0.2s; }
    .tp-swatch:hover { transform: scale(1.2); }
    .tp-swatch.active { border: 2px solid var(--black); }
    .tp-size-head { display: flex; justify-content: space-between; margin-bottom: 12px; }
    .tp-size-lbl { font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.14em; }
    .tp-size-guide { font-size: 9px; text-decoration: underline; color: #888; }
    .tp-sizes { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 24px; }
    .tp-size { border: 1px solid rgba(0,0,0,0.18); padding: 10px 20px; font-size: 9.5px; text-transform: uppercase; letter-spacing: 0.1em; transition: background 0.2s, color 0.2s; }
    .tp-size:hover { background: var(--black); color: var(--white); }
    .tp-size.oos { color: #CCC; border-color: #EEE; pointer-events: none; }
    .tp-add { background: var(--black); color: var(--white); font-size: 9.5px; letter-spacing: 0.22em; text-transform: uppercase; padding: 16px; text-align: center; width: 100%; margin-bottom: 10px; border: none; }
    .tp-add:hover { background: #222; }
    .tp-wish { background: var(--white); color: var(--black); border: 1.5px solid var(--black); font-size: 9.5px; letter-spacing: 0.22em; text-transform: uppercase; padding: 16px; text-align: center; width: 100%; margin-bottom: 28px; transition: background 0.2s; }
    .tp-wish:hover { background: #F5F5F5; }
    .tp-acc { border-top: 1px solid rgba(0,0,0,0.09); }
    .tp-acc:last-child { border-bottom: 1px solid rgba(0,0,0,0.09); }
    .tp-acc-head { display: flex; justify-content: space-between; padding: 16px 0; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; }
    .tp-acc-icon { font-size: 14px; transition: transform 0.3s; }
    .tp-acc-body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; font-size: 10.5px; color: #555; line-height: 1.8; }
    .tp-acc.open .tp-acc-body { max-height: 200px; padding-bottom: 16px; }
    .tp-acc.open .tp-acc-icon { transform: rotate(45deg); }
    @media (max-width: 900px) { .the-piece { flex-direction: column; } .tp-left, .tp-right { width: 100%; } .tp-left { height: 70vh; } }

    .white-edit { height: 80vh; position: relative; overflow: hidden; margin-top: 60px; }
    .white-edit img { width: 100%; height: 100%; object-fit: cover; transition: transform 1s ease; }
    .white-edit:hover img { transform: scale(1.03); }
    .we-grad { position: absolute; bottom: 0; left: 0; width: 100%; height: 50%; background: linear-gradient(to top, rgba(0,0,0,0.4), transparent); pointer-events: none; }
    .we-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; width: 100%; }
    .we-tag { font-size: 9px; color: #333; letter-spacing: 0.28em; margin-bottom: 16px; }
    .we-heading { font-family: 'Cormorant Garamond', serif; font-size: 80px; font-style: italic; font-weight: 300; color: var(--black); line-height: 1; margin-bottom: 16px; }
    .we-sub { font-size: 10px; color: #333; text-transform: uppercase; letter-spacing: 0.18em; margin-bottom: 32px; }

    .match-card { width: 280px; height: 420px; flex-shrink: 0; position: relative; overflow: hidden; }

    .linen-edit { display: flex; gap: 2px; margin-top: 60px; }
    .le-left { width: 40%; background: var(--white); padding: 52px 44px; display: flex; flex-direction: column; justify-content: flex-end; }
    .le-right { width: 60%; display: flex; flex-direction: column; gap: 2px; }
    .le-r-top { height: 60vh; overflow: hidden; }
    .le-r-bot { height: 40vh; overflow: hidden; }
    .le-right img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.85s ease; }
    .le-right > div:hover img { transform: scale(1.04); }
    @media (max-width: 900px) { .linen-edit { flex-direction: column; } .le-left, .le-right { width: 100%; } }
    
    .page { display: none; }
    .page.active { display: block; animation: fadeIn 0.4s ease forwards; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

html = html.replace('</style>', man_css + '\n  </style>');

// Wrap homepage and insert MAN page structure
if (html.includes('<!-- Hero -->') && html.includes('<!-- Footer -->')) {
    let parts = html.split('<!-- Hero -->');
    let before_hero = parts[0];
    let rest = parts.slice(1).join('<!-- Hero -->');
    
    let parts_bot = rest.split('<!-- Footer -->');
    let home_content = parts_bot[0];
    let footer_content = parts_bot.slice(1).join('<!-- Footer -->');
    
    let man_html = `
  <div id="page-man" class="page">
    <div class="sub-nav">
      <a href="javascript:void(0)" class="sub-nav-link active">THE DROP</a>
      <a href="javascript:void(0)" class="sub-nav-link">STYLE NOTES</a>
      <a href="javascript:void(0)" class="sub-nav-link">WANDERLUST EDIT</a>
      <a href="javascript:void(0)" class="sub-nav-link">P FASHION ORIGINS</a>
      <a href="javascript:void(0)" class="sub-nav-link">P FASHION ACTIVE</a>
      <a href="javascript:void(0)" class="sub-nav-link">BEST SELLERS</a>
      <a href="javascript:void(0)" class="sub-nav-link">LINEN EDIT</a>
      <a href="javascript:void(0)" class="sub-nav-link">WHITE EDIT</a>
      <a href="javascript:void(0)" class="sub-nav-link">T-SHIRTS</a>
      <a href="javascript:void(0)" class="sub-nav-link">SHIRTS</a>
      <a href="javascript:void(0)" class="sub-nav-link">POLO SHIRTS</a>
      <a href="javascript:void(0)" class="sub-nav-link">MATCHING SETS</a>
      <a href="javascript:void(0)" class="sub-nav-link">SHORTS</a>
      <a href="javascript:void(0)" class="sub-nav-link">TROUSERS</a>
      <a href="javascript:void(0)" class="sub-nav-link">JEANS</a>
      <a href="javascript:void(0)" class="sub-nav-link">SUITS</a>
      <a href="javascript:void(0)" class="sub-nav-link">JACKETS</a>
      <a href="javascript:void(0)" class="sub-nav-link">SWIMWEAR</a>
      <a href="javascript:void(0)" class="sub-nav-link">HOODIES</a>
      <a href="javascript:void(0)" class="sub-nav-link">SHOES</a>
      <a href="javascript:void(0)" class="sub-nav-link">BAGS</a>
      <a href="javascript:void(0)" class="sub-nav-link">ACCESSORIES</a>
    </div>

    <!-- Hero -->
    <section class="hero">
      <div class="slide active">
        <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=1920&h=1080&fit=crop&auto=format&q=85" alt="The Drop">
        <div class="hero-overlay" style="background: linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%), linear-gradient(to right, rgba(0,0,0,0.35), transparent 45%);"></div>
        <div class="slide-content sc-1" style="left:64px; bottom:72px; width:auto; text-align:left;">
          <div class="ov-hide"><div class="slide-label anim-el del-1">MAN | THE DROP</div></div>
          <div class="ov-hide"><div class="slide-heading anim-el del-2">The New<br>Season</div></div>
          <div class="ov-hide"><div class="slide-sub anim-el del-3">P Fashion Man &mdash; Updated Weekly</div></div>
          <div class="ov-hide"><div class="cta-wrap anim-el del-4"><a href="javascript:void(0)" class="btn btn-white" style="border-radius:0;">SHOP NOW</a></div></div>
        </div>
      </div>
      <div class="slide">
        <img src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1920&h=1080&fit=crop&auto=format&q=85" alt="Origins">
        <div class="hero-overlay"></div>
        <div class="slide-content sc-2" style="text-align: right; left: auto; right: 64px; bottom: 72px;">
          <div class="ov-hide"><div class="slide-label anim-el del-1">P FASHION ORIGINS</div></div>
          <div class="ov-hide"><div class="slide-heading anim-el del-2">Rooted in<br>Craft</div></div>
          <div class="ov-hide"><div class="slide-sub anim-el del-3">Natural materials. Timeless silhouettes.</div></div>
          <div class="ov-hide"><div class="cta-wrap anim-el del-4" style="justify-content: flex-end;"><a href="javascript:void(0)" class="btn btn-ghost" style="border-radius:0;">DISCOVER ORIGINS</a></div></div>
        </div>
      </div>
      <div class="slide">
        <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=1080&fit=crop&auto=format&q=85" alt="Wanderlust">
        <div class="hero-overlay"></div>
        <div class="slide-content sc-3" style="text-align: center; left: 50%; transform: translateX(-50%); width: 100%; bottom: 80px;">
          <div class="ov-hide"><div class="slide-label anim-el del-1">WANDERLUST EDIT</div></div>
          <div class="ov-hide"><div class="slide-heading anim-el del-2">Summer<br>Style</div></div>
          <div class="ov-hide"><div class="slide-sub anim-el del-3">The warm-weather wardrobe for men</div></div>
          <div class="ov-hide"><div class="cta-wrap anim-el del-4" style="justify-content: center; gap: 12px;"><a href="javascript:void(0)" class="btn btn-white" style="border-radius:0;">SHOP THE EDIT</a><a href="javascript:void(0)" class="btn btn-ghost" style="border-radius:0;">EXPLORE ALL</a></div></div>
        </div>
      </div>
      <div class="hero-dots">
        <div class="dot active" onclick="goToSlide(0)"></div><div class="dot" onclick="goToSlide(1)"></div><div class="dot" onclick="goToSlide(2)"></div>
      </div>
      <div class="scroll-indicator">SCROLL</div>
    </section>

    <div class="breadcrumb">P FASHION <span class="sep">&gt;</span> MAN <span class="sep">&gt;</span> <span>THE DROP</span></div>

    <!-- Editorial Lookbook -->
    <section>
      <div class="man-ed-1 reveal-item">
        <img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=1920&h=1200&fit=crop&auto=format&q=85">
        <div class="man-ed-1-grad"></div>
        <div class="man-ed-1-text anim-el">
          <div class="man-ed-1-tag">01 &mdash; THE DROP</div>
          <div class="man-ed-1-heading">New Arrivals</div>
          <div class="man-ed-1-sub">The Season's Essential Pieces</div>
          <a href="javascript:void(0)" class="btn btn-white" style="border-radius:0;">SHOP ALL</a>
        </div>
      </div>
      <div class="man-ed-row-2 reveal-item">
        <div><img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=800&fit=crop&auto=format&q=80"><div class="man-ed-col-label"><div class="man-ed-col-num">01</div><div class="man-ed-col-name">LINEN EDIT</div></div></div>
        <div><img src="https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&h=800&fit=crop&auto=format&q=80"><div class="man-ed-col-label"><div class="man-ed-col-num">02</div><div class="man-ed-col-name">WHITE EDIT</div></div></div>
        <div><img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop&auto=format&q=80"><div class="man-ed-col-label"><div class="man-ed-col-num">03</div><div class="man-ed-col-name">SUITS</div></div></div>
      </div>
      <div class="man-ed-row-3 reveal-item" id="man-parallax-1">
        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1920&h=900&fit=crop&auto=format&q=85" class="man-px-img">
        <div class="man-ed-row-3-grad"></div>
        <div class="camp-content" style="padding: 0 80px;">
          <div class="ov-hide"><div class="camp-tag anim-el del-1">WANDERLUST EDIT</div></div>
          <div class="ov-hide"><div class="camp-heading anim-el del-2">Sun &amp;<br>Style</div></div>
          <div class="ov-hide"><div class="camp-sub anim-el del-3">The warm-weather wardrobe</div></div>
          <div class="ov-hide"><div class="anim-el del-4"><a href="javascript:void(0)" class="btn btn-ghost" style="border-color:#fff; border-radius:0;">DISCOVER MORE &rarr;</a></div></div>
        </div>
      </div>
      <div class="man-ed-row-4 reveal-item">
        <div class="man-ed-row-4-left"><img src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7d3?w=1000&h=1400&fit=crop&auto=format&q=80"></div>
        <div class="man-ed-row-4-right">
          <div class="man-ed-row-4-r-top"><img src="https://images.unsplash.com/photo-1603217192987-e5e5b0c5e40a?w=500&h=500&fit=crop&auto=format&q=80"></div>
          <div class="man-ed-row-4-r-bot">
            <div class="mer4-tag">P FASHION ORIGINS</div>
            <div class="mer4-heading">Craft &amp;<br>Character</div>
            <div class="mer4-desc">Inspired by heritage. Natural materials,<br>timeless silhouettes, made to last.</div>
            <a href="javascript:void(0)" class="mer4-cta">EXPLORE ORIGINS &rarr;</a>
          </div>
        </div>
      </div>
      <div class="man-ed-row-5 reveal-item">
        <div class="man-ed-row-5-left">
            <div class="mer4-tag">P FASHION ACTIVE</div>
            <div class="mer4-heading">Move with<br>Purpose</div>
            <div class="mer4-desc">Performance meets minimal design.<br>Built for the modern man.</div>
            <a href="javascript:void(0)" class="mer4-cta" style="text-decoration:none;border-bottom:1px solid #000;">SHOP ACTIVE &rarr;</a>
        </div>
        <div class="man-ed-row-5-right"><img src="https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=1000&h=1200&fit=crop&auto=format&q=80"></div>
      </div>
    </section>

    <!-- Collab Spotlight -->
    <section class="collab-sec reveal-item">
      <div class="collab-left"><img src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1000&h=1400&fit=crop&auto=format&q=80"></div>
      <div class="collab-right">
        <div class="collab-tag">COLLABORATION</div>
        <div class="collab-heading">Designer<br>x P Fashion</div>
        <div class="collab-sub">DROP 02 &mdash; AVAILABLE NOW</div>
        <div class="collab-div"></div>
        <div class="collab-desc">An exclusive collaboration bringing together contemporary design and P Fashion's signature minimalist aesthetic.</div>
        <a href="javascript:void(0)" class="collab-cta">SHOP THE DROP</a>
        <a href="javascript:void(0)" class="collab-sub-cta">or EXPLORE THE STORY &rarr;</a>
      </div>
    </section>

    <div class="strip-wrapper reveal-item" style="margin-top:2px;">
      <button class="strip-arrow sa-left" onclick="document.getElementById('drag-strip-collab').scrollBy({left:-580, behavior:'smooth'})"><svg class="svg-icon" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
      <div class="strip" id="drag-strip-collab"></div>
      <button class="strip-arrow sa-right" onclick="document.getElementById('drag-strip-collab').scrollBy({left:580, behavior:'smooth'})"><svg class="svg-icon" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
    </div>

    <!-- Filter Bar -->
    <div class="filter-bar">
      <div class="filter-left">
        <button class="filter-pill" style="cursor:none;">THE DROP ▾</button>
        <button class="filter-pill" style="cursor:none;">SIZE ▾</button>
        <button class="filter-pill" style="cursor:none;">COLOR ▾</button>
        <button class="filter-pill" style="cursor:none;">PRICE ▾</button>
        <button class="filter-pill" style="cursor:none;">FIT ▾</button>
      </div>
      <div class="filter-right">
        <span class="fr-items">312 ITEMS</span>
        <button class="filter-pill" style="border:none;cursor:none;">SORT BY: FEATURED ▾</button>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="featured-grid" id="man-products-grid" style="padding-top:2px;"></div>
    <button class="load-more">LOAD MORE</button>

    <!-- Style Notes -->
    <section class="reveal-item">
      <div style="padding: 72px 32px 28px; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;">STYLE NOTES</div>
      <div style="padding: 0 32px 36px; font-size: 9.5px; color: #888; letter-spacing: 0.14em; text-transform: uppercase;">How to wear the season's key pieces</div>
      <div class="style-notes-grid">
        <div class="sn-item">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=900&fit=crop&auto=format&q=80">
          <div class="sn-grad"></div>
          <div class="sn-text">
            <div class="sn-look">LOOK 01</div>
            <div class="sn-pieces">Linen Shirt &rarr;<br>Linen Trousers &rarr;<br>Derby Shoes &rarr;</div>
          </div>
        </div>
        <div class="sn-item">
          <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=900&fit=crop&auto=format&q=80">
          <div class="sn-grad"></div>
          <div class="sn-text">
            <div class="sn-look">LOOK 02</div>
            <div class="sn-pieces">Polo Shirt &rarr;<br>Slim Jeans &rarr;<br>White Sneakers &rarr;</div>
          </div>
        </div>
        <div class="sn-item">
          <img src="https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&h=900&fit=crop&auto=format&q=80">
          <div class="sn-grad"></div>
          <div class="sn-text">
            <div class="sn-look">LOOK 03</div>
            <div class="sn-pieces">Overshirt &rarr;<br>Cargo Shorts &rarr;<br>Sandals &rarr;</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Origins Editorial -->
    <section class="origins-sec reveal-item">
      <img src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7d3?w=1920&h=1080&fit=crop&auto=format&q=85" class="origins-img">
      <div class="origins-text anim-el">
        <div class="og-tag">P FASHION ORIGINS</div>
        <div class="og-heading">Rooted in Craft</div>
        <div class="og-desc">Inspired by our brand's heritage.<br>Natural materials, timeless silhouettes,<br>made to last a lifetime.</div>
        <a href="javascript:void(0)" class="btn btn-ghost" style="border-color: rgba(255,255,255,0.5); border-radius:0;">SHOP ORIGINS</a>
      </div>
    </section>

    <!-- P Fashion Active -->
    <section class="active-sec reveal-item">
      <div class="ac-left"><img src="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=900&h=1200&fit=crop&auto=format&q=80"></div>
      <div class="ac-right">
        <div class="ac-grid">
          <div class="ac-cell"><img src="https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&h=400&fit=crop&auto=format&q=80"></div>
          <div class="ac-cell"><img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop&auto=format&q=80"></div>
          <div class="ac-cell"><img src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=400&h=400&fit=crop&auto=format&q=80"></div>
          <div class="ac-cell"><img src="https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&h=400&fit=crop&auto=format&q=80"></div>
        </div>
        <div class="ac-bot">
          <div class="mer4-tag" style="margin-bottom:8px;">P FASHION ACTIVE</div>
          <div class="mer4-heading" style="font-size:42px;">Built for<br>Motion</div>
          <div class="mer4-desc">Performance meets minimal design. Built for the modern man.</div>
          <button class="ac-btn">SHOP ACTIVE</button>
        </div>
      </div>
    </section>

    <!-- The Piece -->
    <section class="the-piece reveal-item">
      <div class="tp-left"><img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=1200&h=1600&fit=crop&auto=format&q=80"></div>
      <div class="tp-right">
        <div class="tp-tag">THE PIECE</div>
        <div class="tp-name">Structured Wool<br>Blazer</div>
        <div class="tp-price">₹ 5,990</div>
        
        <div class="tp-col-lbl">COLOUR: CAMEL</div>
        <div class="tp-swatches">
          <div class="tp-swatch active" style="background: #C4A882;"></div>
          <div class="tp-swatch" style="background: #3A3A3A;"></div>
          <div class="tp-swatch" style="background: #1A3A5C;"></div>
        </div>
        
        <div class="tp-size-head">
          <span class="tp-size-lbl">SELECT SIZE</span><span class="tp-size-guide">SIZE GUIDE ↗</span>
        </div>
        <div class="tp-sizes">
          <div class="tp-size oos">XS</div><div class="tp-size">S</div><div class="tp-size">M</div><div class="tp-size">L</div><div class="tp-size">XL</div><div class="tp-size oos">XXL</div>
        </div>
        
        <button class="tp-add" onclick="addToCart(event)">ADD TO BAG</button>
        <button class="tp-wish" onclick="toggleWishlist(event, this)">ADD TO WISHLIST</button>
        
        <div class="tp-acc" onclick="this.classList.toggle('open')">
          <div class="tp-acc-head"><span>DESCRIPTION</span><span class="tp-acc-icon">+</span></div>
          <div class="tp-acc-body">Tailored wool-blend blazer with structured shoulders and a slim fit. Fully lined interior.</div>
        </div>
        <div class="tp-acc" onclick="this.classList.toggle('open')">
          <div class="tp-acc-head"><span>COMPOSITION &amp; CARE</span><span class="tp-acc-icon">+</span></div>
          <div class="tp-acc-body">Outer: 70% Wool, 30% Polyester. Dry clean only.</div>
        </div>
        <div class="tp-acc" onclick="this.classList.toggle('open')">
          <div class="tp-acc-head"><span>DELIVERY &amp; RETURNS</span><span class="tp-acc-icon">+</span></div>
          <div class="tp-acc-body">Free delivery on orders above ₹5,000. Free returns within 30 days.</div>
        </div>
      </div>
    </section>

    <!-- White Edit Campaign -->
    <section class="white-edit reveal-item">
      <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1920&h=1080&fit=crop&auto=format&q=85">
      <div class="we-grad"></div>
      <div class="we-text anim-el">
        <div class="we-tag">WHITE EDIT</div>
        <div class="we-heading">The White<br>Edit</div>
        <div class="we-sub">Clean. Minimal. Essential.</div>
        <button class="btn btn-black" style="background:#000;color:#fff;padding:13px 34px;font-size:9px;letter-spacing:0.24em;border:none;">SHOP WHITE</button>
      </div>
    </section>

    <div class="strip-wrapper reveal-item" style="margin-top:2px;">
      <button class="strip-arrow sa-left" onclick="document.getElementById('drag-strip-white').scrollBy({left:-580, behavior:'smooth'})"><svg class="svg-icon" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
      <div class="strip" id="drag-strip-white"></div>
      <button class="strip-arrow sa-right" onclick="document.getElementById('drag-strip-white').scrollBy({left:580, behavior:'smooth'})"><svg class="svg-icon" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
    </div>

    <!-- Matching Sets Strip -->
    <section class="reveal-item">
      <div class="section-header" style="display:flex; justify-content:space-between; padding: 72px 32px 28px;">
        <div class="sh-left" style="font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;">MATCHING SETS</div>
        <div class="sh-right" style="text-decoration:underline; font-size:9.5px; letter-spacing:0.14em; cursor:none;">VIEW ALL &rarr;</div>
      </div>
      <div class="strip-wrapper">
        <button class="strip-arrow sa-left" onclick="document.getElementById('drag-strip-match').scrollBy({left:-580, behavior:'smooth'})"><svg class="svg-icon" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
        <div class="strip" id="drag-strip-match"></div>
        <button class="strip-arrow sa-right" onclick="document.getElementById('drag-strip-match').scrollBy({left:580, behavior:'smooth'})"><svg class="svg-icon" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
      </div>
    </section>

    <!-- Linen Edit Editorial -->
    <section class="linen-edit reveal-item">
      <div class="le-left">
        <div class="mer4-tag">THE LINEN EDIT</div>
        <div class="mer4-heading" style="font-size:56px;">Natural<br>Textures</div>
        <div class="mer4-desc">Breathable linen and linen blends for the season's warmest days.</div>
        <a href="javascript:void(0)" class="mer4-cta">SHOP LINEN &rarr;</a>
      </div>
      <div class="le-right">
        <div class="le-r-top"><img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=700&fit=crop&auto=format&q=80"></div>
        <div class="le-r-bot"><img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&h=500&fit=crop&auto=format&q=80"></div>
      </div>
    </section>

    <!-- You May Also Like -->
    <section class="reveal-item" style="margin-bottom:60px;">
      <div style="text-align: center; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; padding: 72px 32px 28px;">YOU MAY ALSO LIKE</div>
      <div class="featured-grid" id="man-also-like"></div>
    </section>
  </div>
`;

    let full_html = before_hero + '\n  <div id="page-home" class="page active">\n    <!-- Hero -->' + home_content + '\n  </div>\n\n' + man_html + '\n  <!-- Footer -->' + footer_content;
    
    // We also need to add JS to render MAN products
    let man_js = `
    const manProducts = [
      { img1: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=533&fit=crop&auto=format&q=80', name: 'LINEN SHIRT', price: '₹ 2,990', colors: ['#F5F0E8', '#1A3A5C', '#4A5240'], badge: 'NEW DROP' },
      { img1: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=533&fit=crop&auto=format&q=80', name: 'SLIM FIT TROUSERS', price: '₹ 3,490', colors: ['#C4A882', '#1A1A1A', '#8B8680'] },
      { img1: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=400&h=533&fit=crop&auto=format&q=80', name: 'POLO SHIRT', price: '₹ 1,990', colors: ['#FFFFFF', '#1A3A5C', '#2C4A2E', '#8B0000'], badge: 'BESTSELLER' },
      { img1: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=533&fit=crop&auto=format&q=80', name: 'RELAXED LINEN SET', price: '₹ 5,490', colors: ['#F5F0E8', '#C4A882', '#4A5240'], badge: 'NEW DROP' },
      { img1: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&h=533&fit=crop&auto=format&q=80', name: 'GRAPHIC TEE', price: '₹ 1,290', colors: ['#FFFFFF', '#1A1A1A', '#888888'], badge: 'COLLAB' },
      { img1: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&h=533&fit=crop&auto=format&q=80', name: 'CARGO SHORTS', price: '₹ 2,190', colors: ['#4A5240', '#C4A882', '#1A1A1A', '#1A3A5C'] },
      { img1: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=533&fit=crop&auto=format&q=80', name: 'STRUCTURED BLAZER', price: '₹ 5,990', colors: ['#C4A882', '#3A3A3A', '#1A3A5C'] },
      { img1: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=533&fit=crop&auto=format&q=80', name: 'SLIM JEANS', price: '₹ 3,290', colors: ['#4A6FA5', '#2A2A2A', '#1A1A1A'], badge: 'BESTSELLER' },
      { img1: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1603217192987-e5e5b0c5e40a?w=400&h=533&fit=crop&auto=format&q=80', name: 'TEXTURED KNIT POLO', price: '₹ 2,490', colors: ['#F5F0E8', '#7C9A8A', '#8B7355'], badge: 'NEW DROP' },
      { img1: 'https://images.unsplash.com/photo-1594938298603-c8148c4b4c7c?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1571945192237-8d80d6f04736?w=400&h=533&fit=crop&auto=format&q=80', name: 'SWIM SHORTS', price: '₹ 1,790', colors: ['#1A3A5C', '#4A5240', '#1A1A1A'] },
      { img1: 'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7d3?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=533&fit=crop&auto=format&q=80', name: 'OVERSHIRT JACKET', price: '₹ 3,990', colors: ['#C4A882', '#8B7355', '#4A5240'] },
      { img1: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=533&fit=crop&auto=format&q=80', name: 'STRIPED CASUAL SHIRT', price: '₹ 2,790', colors: ['#4A6FA5', '#1A3A5C', '#8B7355'] },
      { img1: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&h=533&fit=crop&auto=format&q=80', name: 'MATCHING TRACK SET', price: '₹ 4,990', colors: ['#1A1A1A', '#C4A882', '#1A3A5C'], badge: 'NEW DROP' },
      { img1: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=533&fit=crop&auto=format&q=80', name: 'LINEN SHORTS', price: '<span style="color:#8B0000">₹ 1,490</span> <span style="text-decoration:line-through;color:#888;font-size:9.5px;">₹ 1,990</span>', colors: ['#F5F0E8', '#FFFFFF', '#C4A882'], badge: 'SALE' },
      { img1: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=400&h=533&fit=crop&auto=format&q=80', name: 'COLLAB GRAPHIC TEE', price: '₹ 2,290', colors: ['#FFFFFF', '#1A1A1A'], badge: 'COLLAB' },
      { img1: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=533&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=533&fit=crop&auto=format&q=80', name: 'LEATHER DERBY SHOES', price: '₹ 7,990', colors: ['#C4A882', '#1A1A1A', '#FFFFFF'] }
    ];

    function genManCard(p, delay=0, reveal=false) {
      let colorsHtml = p.colors.map(c => \`<div class="cdot" style="background:\${c}"></div>\`).join('');
      let badgeHtml = p.badge ? \`<div class="badge" \${p.badge==='SALE'?'style="background:#8B0000"':p.badge==='COLLAB'?'style="background:#1A1A2E"':''}>\${p.badge}</div>\` : '';
      let cls = reveal ? \`product-card reveal-item\` : \`product-card match-card\`;
      let innerCls = reveal ? '' : 'style="height:100%"';
      return \`
        <div class="\${cls}" style="\${reveal ? \`transition-delay: \${delay}s\` : ''}">
          <div class="pc-img-area" \${innerCls}>
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
    
    document.getElementById('man-products-grid').innerHTML = manProducts.map((p, i) => genManCard(p, (i%4)*0.12, true)).join('');
    
    document.getElementById('drag-strip-collab').innerHTML = [manProducts[4], manProducts[14], manProducts[10], manProducts[11]].map(p => genManCard(p)).join('');
    document.getElementById('drag-strip-white').innerHTML = [manProducts[2], manProducts[3], manProducts[8], manProducts[11]].map(p => genManCard(p)).join('');
    
    // Matching sets
    const matchSets = [
      { img1: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=600&fit=crop&auto=format&q=80', name: 'LINEN CO-ORD', price: '₹ 5,490', colors: ['#C4A882'] },
      { img1: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&h=600&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&h=600&fit=crop&auto=format&q=80', name: 'TRACK SET', price: '₹ 4,990', colors: ['#1A1A1A'] },
      { img1: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=600&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=600&fit=crop&auto=format&q=80', name: 'CASUAL SHIRT SET', price: '₹ 4,290', colors: ['#FFFFFF'] },
      { img1: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=400&h=600&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1603217192987-e5e5b0c5e40a?w=400&h=600&fit=crop&auto=format&q=80', name: 'RESORT SET', price: '₹ 4,990', colors: ['#F5F0E8'] },
      { img1: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=600&fit=crop&auto=format&q=80', img2: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=600&fit=crop&auto=format&q=80', name: 'KNIT CO-ORD', price: '₹ 3,990', colors: ['#F5F0E8'] },
    ];
    document.getElementById('drag-strip-match').innerHTML = matchSets.map(p => genManCard(p)).join('');
    
    // Also like
    document.getElementById('man-also-like').innerHTML = [manProducts[0], manProducts[2], manProducts[7], manProducts[10]].map((p, i) => genManCard(p, i*0.12, true)).join('');
`;

    full_html = full_html.replace("document.getElementById('featured-grid').innerHTML = products.map((p, i) => genCard(p, (i%4)*0.12, true)).join('');", "document.getElementById('featured-grid').innerHTML = products.map((p, i) => genCard(p, (i%4)*0.12, true)).join('');\n" + man_js);
    
    // We also need to add parallax for man-parallax-1
    let man_parallax_js = `
      const manBanner = document.getElementById('man-parallax-1');
      if(manBanner) {
        const manImg = manBanner.querySelector('.man-px-img');
        window.addEventListener('scroll', () => {
          const rect = manBanner.getBoundingClientRect();
          if(rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = (rect.top + rect.height/2 - window.innerHeight/2) * 0.12;
            manImg.style.transform = \`translateY(\${offset}px)\`;
          }
        });
      }
      
      const stripIds = ['drag-strip', 'drag-strip-collab', 'drag-strip-white', 'drag-strip-match'];
      stripIds.forEach(id => {
          const s = document.getElementById(id);
          if(!s) return;
          let isD=false, stX, svS;
          s.addEventListener('mousedown', e => { isD=true; s.classList.add('grabbing'); stX = e.pageX - s.offsetLeft; svS = s.scrollLeft; });
          document.addEventListener('mouseup', () => { isD=false; s.classList.remove('grabbing'); });
          document.addEventListener('mouseleave', () => { isD=false; s.classList.remove('grabbing'); });
          s.addEventListener('mousemove', e => {
            if(!isD) return; e.preventDefault();
            const x = e.pageX - s.offsetLeft;
            s.scrollLeft = svS - (x-stX)*1.8;
          });
      });
`;
    full_html = full_html.replace("const banner = document.getElementById('campaign-banner');", man_parallax_js + "\n      const banner = document.getElementById('campaign-banner');");
    
    // remove old drag strip code so it doesn't double run
    let old_drag_strip = `      // Drag strip
      const strip = document.getElementById('drag-strip');
      let isDragging=false, startX, savedScroll;
      strip.addEventListener('mousedown', e => { isDragging=true; strip.classList.add('grabbing'); startX = e.pageX - strip.offsetLeft; savedScroll = strip.scrollLeft; });
      document.addEventListener('mouseup', () => { isDragging=false; strip.classList.remove('grabbing'); });
      document.addEventListener('mouseleave', () => { isDragging=false; strip.classList.remove('grabbing'); });
      strip.addEventListener('mousemove', e => {
        if(!isDragging) return; e.preventDefault();
        const x = e.pageX - strip.offsetLeft;
        strip.scrollLeft = savedScroll - (x-startX)*1.8;
      });`;
    full_html = full_html.replace(old_drag_strip, "// Drag strips initialized above");
    
    fs.writeFileSync('index.html', full_html, 'utf8');
}
