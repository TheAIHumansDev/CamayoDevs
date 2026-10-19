/* AI HUMANS — Bilingual home page (EN / ES)
   Language is chosen in this order:
     1. ?lang=en|es in the URL
     2. The visitor's own choice (EN/ES switch), remembered in this browser
     3. The physical keyboard layout, where the browser exposes it
        (Keyboard Map API — Chrome/Edge/Opera on desktop, HTTPS only):
        a key that types "ñ" ⇒ Spanish layout ⇒ ES; a US/UK-style layout ⇒ EN
     4. The browser / OS language list (navigator.languages)
     5. English
   Strings are generated from build_index3.py — edit them there, or edit DICT below. */
(() => {
  'use strict';
  var DICT = {
"en": {
"meta.title": "AI Humans — We build what's next.",
"meta.desc": "AI Humans builds digital products, custom apps, enterprise software and practical AI solutions that move businesses forward.",
"nav.menu": "Open menu",
"nav.menuClose": "Close menu",
"hero.h1b": "what's next.",
"f.h2b": "one ecosystem.",
"hero.eyebrow": "Technology company",
"hero.h1a": "We build",
"hero.lede": "We create digital products, powerful applications, enterprise platforms and intelligent solutions that move businesses forward.",
"hero.cta1": "Explore Our Core",
"hero.cta2": "Start a Project",
"core.dp.tag0": "AI Geo",
"core.dp.tag1": "AI Visibility",
"core.dp.tag2": "AI Engage",
"core.dp.tag3": "AI Health",
"core.dp.name": "Digital Products",
"core.dp.desc": "Subscription software that solves specific business problems — ready to configure and use.",
"core.explore0": "Explore",
"core.as.tag0": "Mobile",
"core.as.tag1": "Web",
"core.as.tag2": "Integrations",
"core.as.tag3": "UI/UX",
"core.as.name": "Apps &amp; Software",
"core.as.desc": "Custom mobile apps, web platforms and enterprise systems built around how you operate.",
"core.explore1": "Explore",
"core.ai.tag0": "Agents",
"core.ai.tag1": "Digital humans",
"core.ai.tag2": "RAG",
"core.ai.tag3": "Workflows",
"core.ai.name": "AI &amp; Automation",
"core.ai.desc": "Conversational agents, digital humans and workflow automation tied to measurable outcomes.",
"core.explore2": "Explore",
"core.en.tag0": "Aviation",
"core.en.tag1": "Healthcare",
"core.en.tag2": "Retail",
"core.en.tag3": "Operations",
"core.en.name": "Enterprise Solutions",
"core.en.desc": "Integrated platforms for aviation, healthcare, distribution and corporate operations at scale.",
"core.explore3": "Explore",
"core.eyebrow": "Our core",
"core.title": "Four ways we build what's next.",
"core.pill": "One team",
"core.foot": "Products, custom software, AI and enterprise platforms — designed, built and supported end to end.",
"core.catalog": "View catalog →",
"hero.scroll": "Scroll",
"dash.title": "AI Geo · Overview",
"dash.sca": "412 chats today",
"dash.scaS": "WhatsApp + web · auto-resolved",
"dash.scb": "▲ 3 positions",
"dash.scbS": "Brand mentions in AI answers",
"p.c1": "Geographic intelligence",
"p.c2": "Search &amp; AI discovery",
"p.c3": "Conversational engagement",
"p.c4": "Clinical management",
"p.eb": "Digital Products",
"p.h2": "Products that solve real problems.",
"p.kick": "Products built to scale.",
"p.body": "Subscription software you can start using without a custom build — configured for your organization and connected to your systems.",
"p.link": "Explore Digital Products",
"eco.hi": "Good morning, Operations.",
"eco.chk": "Checklist",
"s.eb": "Apps &amp; Software",
"s.h2": "Built for every screen. Designed for every challenge.",
"s.kick": "Software built around your business.",
"s.body": "Mobile applications, web platforms and enterprise software tailored to real operational needs.",
"s.c1": "iOS &amp; Android apps",
"s.c2": "Web applications",
"s.c3": "Enterprise software",
"s.c4": "Systems integration",
"s.c5": "UI/UX design",
"s.link": "Explore Apps &amp; Software",
"hub.b1": "Hi! How can I help you today?",
"hub.b2": "Move my order to Friday delivery.",
"hub.b3": "Done — updated in your account and ERP. ✓",
"hub.dh": "Digital Human",
"a.l1": "Conversational AI",
"a.l2": "Digital humans",
"a.l3": "Business automation",
"a.l4": "Enterprise AI agents",
"a.l5": "AI integration",
"a.eb": "AI &amp; Automation",
"a.h2": "Make technology work smarter.",
"a.kick": "Intelligence where it matters.",
"a.body": "We implement artificial intelligence and automation into business systems, customer experiences and operational workflows.",
"a.link": "Explore AI &amp; Automation",
"i.note": "Reorder suggested for 14 SKUs before Friday",
"i1.l": "Aviation",
"i1.p": "Live ops",
"i1.h": "Every turnaround, on time.",
"i1.d": "Ground operations, ramp inspections, passenger assistance and irregular-operations support, coordinated across stations.",
"i2.l": "Healthcare",
"i2.p": "Clinics",
"i2.h": "Care that runs smoothly.",
"i2.d": "Clinical management, electronic records, scheduling and patient communication for modern practices.",
"i3.l": "Retail &amp; Distribution",
"i3.p": "ERP sync",
"i3.h": "Inventory that thinks ahead.",
"i3.d": "Geographic intelligence, sales analytics and customer engagement integrated with ERP systems like SAP Business One.",
"i4.l": "Enterprise Operations",
"i4.p": "Analytics",
"i4.h": "One view of the business.",
"i4.d": "Dashboards, workflows and enterprise integrations that align every department around the same data.",
"i.eb": "Industries",
"i.h2": "Technology for every industry.",
"i.body": "Industry-focused platforms, integrations and software for organizations with demanding operational requirements.",
"i.link": "Explore Enterprise Solutions",
"f.s1t": "Design",
"f.s1d": "Product discovery, UX research and interface design that make complex tools easy to use.",
"f.s2t": "Engineer",
"f.s2d": "Web, mobile and backend development with clean, maintainable architecture.",
"f.s3t": "Integrate",
"f.s3d": "APIs, CRMs, ERPs and AI models connected into one reliable system.",
"f.s4t": "Maintain",
"f.s4d": "Deployment, monitoring and continuous improvement after launch.",
"g.dp": "Digital Products",
"g.as": "Apps &amp; Software",
"g.ai": "AI &amp; Automation",
"g.en": "Enterprise",
"g.da": "Data",
"g.cl": "Cloud",
"f.eb": "The Next Chapter",
"f.h2a": "Everything connects into",
"f.body": "Products, platforms and intelligence — connected into one ecosystem, built by one accountable team.",
"f.eb2": "Engineering capabilities",
"f.h2c": "From concept to deployment.",
"f.body2": "We design, engineer, integrate and maintain technology solutions across the entire product lifecycle.",
"c.eb": "Build with us",
"c.h2": "Let's build what's next.",
"c.body": "Tell us what you're trying to solve. We'll come back with a clear recommendation — product, custom build, or both.",
"c.b1": "Start a Conversation",
"c.b2": "Browse products",
"nav.home": "Home",
"nav.dp": "Digital Products",
"nav.as": "Apps &amp; Software",
"nav.ai": "AI &amp; Automation",
"nav.en": "Enterprise",
"nav.co": "Company",
"nav.ct": "Contact",
"nav.talk": "Let's Talk",
"nav.talk2": "Let's Talk",
"dot.core": "Our core",
"dot.products": "Products",
"dot.software": "Software",
"dot.ai": "Intelligence",
"dot.ind": "Industries",
"dot.next": "Next chapter",
"ft.tag": "Technology built to move business forward.",
"ft.h1": "Company",
"ft.a1": "About AI Humans",
"ft.a2": "How we work",
"ft.a3": "Contact",
"ft.h2": "Products",
"ft.h3": "Solutions",
"ft.s1": "Digital Products",
"ft.s2": "Apps &amp; Software",
"ft.s3": "AI &amp; Automation",
"ft.s4": "Enterprise Solutions",
"ft.h4": "Resources",
"ft.r1": "Product catalog",
"ft.r2": "Product FAQ",
"ft.r3": "Responsible AI",
"ft.r4": "Engagement model",
"ft.h5": "Contact",
"ft.c1": "Start a project",
"ft.c3": "Privacy notice",
"ft.rights": "All rights reserved.",
"ft.priv": "Privacy",
"ft.info": "Company information"
},
"es": {
"meta.title": "AI Humans — Construimos lo que sigue.",
"meta.desc": "AI Humans crea productos digitales, apps a la medida, software empresarial y soluciones de IA prácticas que impulsan a las empresas.",
"nav.menu": "Abrir menú",
"nav.menuClose": "Cerrar menú",
"hero.h1b": "lo que sigue.",
"f.h2b": "un solo ecosistema.",
"hero.eyebrow": "Empresa de tecnología",
"hero.h1a": "Construimos",
"hero.lede": "Creamos productos digitales, aplicaciones potentes, plataformas empresariales y soluciones inteligentes que impulsan a las empresas.",
"hero.cta1": "Conoce nuestro core",
"hero.cta2": "Inicia un proyecto",
"core.dp.tag0": "AI Geo",
"core.dp.tag1": "AI Visibility",
"core.dp.tag2": "AI Engage",
"core.dp.tag3": "AI Health",
"core.dp.name": "Productos Digitales",
"core.dp.desc": "Software por suscripción que resuelve problemas concretos del negocio — listo para configurar y usar.",
"core.explore0": "Explorar",
"core.as.tag0": "Móvil",
"core.as.tag1": "Web",
"core.as.tag2": "Integraciones",
"core.as.tag3": "UI/UX",
"core.as.name": "Apps y Software",
"core.as.desc": "Apps móviles, plataformas web y sistemas empresariales a la medida de cómo opera tu negocio.",
"core.explore1": "Explorar",
"core.ai.tag0": "Agentes",
"core.ai.tag1": "Humanos digitales",
"core.ai.tag2": "RAG",
"core.ai.tag3": "Flujos",
"core.ai.name": "IA y Automatización",
"core.ai.desc": "Agentes conversacionales, humanos digitales y automatización de procesos con resultados medibles.",
"core.explore2": "Explorar",
"core.en.tag0": "Aviación",
"core.en.tag1": "Salud",
"core.en.tag2": "Retail",
"core.en.tag3": "Operaciones",
"core.en.name": "Soluciones Empresariales",
"core.en.desc": "Plataformas integradas para aviación, salud, distribución y operaciones corporativas a escala.",
"core.explore3": "Explorar",
"core.eyebrow": "Nuestro core",
"core.title": "Cuatro formas de construir lo que sigue.",
"core.pill": "Un solo equipo",
"core.foot": "Productos, software a la medida, IA y plataformas empresariales — diseñados, construidos y soportados de principio a fin.",
"core.catalog": "Ver catálogo →",
"hero.scroll": "Desliza",
"dash.title": "AI Geo · Resumen",
"dash.sca": "412 chats hoy",
"dash.scaS": "WhatsApp + web · resueltos por IA",
"dash.scb": "▲ 3 posiciones",
"dash.scbS": "Menciones de marca en respuestas de IA",
"p.c1": "Inteligencia geográfica",
"p.c2": "Búsqueda y descubrimiento en IA",
"p.c3": "Atención conversacional",
"p.c4": "Gestión clínica",
"p.eb": "Productos Digitales",
"p.h2": "Productos que resuelven problemas reales.",
"p.kick": "Productos hechos para escalar.",
"p.body": "Software por suscripción que puedes empezar a usar sin un desarrollo a la medida — configurado para tu organización y conectado a tus sistemas.",
"p.link": "Explorar Productos Digitales",
"eco.hi": "Buenos días, Operaciones.",
"eco.chk": "Checklist",
"s.eb": "Apps y Software",
"s.h2": "Hecho para cada pantalla. Diseñado para cada reto.",
"s.kick": "Software construido alrededor de tu negocio.",
"s.body": "Aplicaciones móviles, plataformas web y software empresarial adaptados a necesidades operativas reales.",
"s.c1": "Apps iOS y Android",
"s.c2": "Aplicaciones web",
"s.c3": "Software empresarial",
"s.c4": "Integración de sistemas",
"s.c5": "Diseño UI/UX",
"s.link": "Explorar Apps y Software",
"hub.b1": "¡Hola! ¿En qué te puedo ayudar hoy?",
"hub.b2": "Pasa mi pedido a entrega el viernes.",
"hub.b3": "Listo — actualizado en tu cuenta y en el ERP. ✓",
"hub.dh": "Humano Digital",
"a.l1": "IA conversacional",
"a.l2": "Humanos digitales",
"a.l3": "Automatización de procesos",
"a.l4": "Agentes de IA empresariales",
"a.l5": "Integración de IA",
"a.eb": "IA y Automatización",
"a.h2": "Haz que la tecnología trabaje de forma más inteligente.",
"a.kick": "Inteligencia donde importa.",
"a.body": "Implementamos inteligencia artificial y automatización en sistemas de negocio, experiencias de cliente y flujos operativos.",
"a.link": "Explorar IA y Automatización",
"i.note": "Reorden sugerida para 14 SKUs antes del viernes",
"i1.l": "Aviación",
"i1.p": "Operación en vivo",
"i1.h": "Cada turnaround, a tiempo.",
"i1.d": "Operaciones en tierra, inspecciones de rampa, asistencia a pasajeros y soporte en operaciones irregulares, coordinados entre estaciones.",
"i2.l": "Salud",
"i2.p": "Clínicas",
"i2.h": "Atención que fluye.",
"i2.d": "Gestión clínica, expediente electrónico, agenda y comunicación con pacientes para consultorios modernos.",
"i3.l": "Retail y Distribución",
"i3.p": "Sincronía ERP",
"i3.h": "Inventario que se anticipa.",
"i3.d": "Inteligencia geográfica, analítica de ventas y atención al cliente integradas con ERPs como SAP Business One.",
"i4.l": "Operaciones Empresariales",
"i4.p": "Analítica",
"i4.h": "Una sola vista del negocio.",
"i4.d": "Dashboards, flujos de trabajo e integraciones que alinean a cada área alrededor de los mismos datos.",
"i.eb": "Industrias",
"i.h2": "Tecnología para cada industria.",
"i.body": "Plataformas, integraciones y software especializados para organizaciones con exigencias operativas altas.",
"i.link": "Explorar Soluciones Empresariales",
"f.s1t": "Diseñar",
"f.s1d": "Descubrimiento de producto, investigación UX y diseño de interfaces que hacen fáciles las herramientas complejas.",
"f.s2t": "Construir",
"f.s2d": "Desarrollo web, móvil y backend con arquitectura limpia y mantenible.",
"f.s3t": "Integrar",
"f.s3d": "APIs, CRMs, ERPs y modelos de IA conectados en un solo sistema confiable.",
"f.s4t": "Mantener",
"f.s4d": "Despliegue, monitoreo y mejora continua después del lanzamiento.",
"g.dp": "Productos Digitales",
"g.as": "Apps y Software",
"g.ai": "IA y Automatización",
"g.en": "Empresas",
"g.da": "Datos",
"g.cl": "Nube",
"f.eb": "El siguiente capítulo",
"f.h2a": "Todo se conecta en",
"f.body": "Productos, plataformas e inteligencia — conectados en un solo ecosistema, construido por un solo equipo responsable.",
"f.eb2": "Capacidades de ingeniería",
"f.h2c": "Del concepto al despliegue.",
"f.body2": "Diseñamos, construimos, integramos y mantenemos soluciones tecnológicas en todo el ciclo de vida del producto.",
"c.eb": "Construye con nosotros",
"c.h2": "Construyamos lo que sigue.",
"c.body": "Cuéntanos qué necesitas resolver. Te responderemos con una recomendación clara — producto, desarrollo a la medida, o ambos.",
"c.b1": "Iniciemos una conversación",
"c.b2": "Ver productos",
"nav.home": "Inicio",
"nav.dp": "Productos Digitales",
"nav.as": "Apps y Software",
"nav.ai": "IA y Automatización",
"nav.en": "Empresarial",
"nav.co": "Nosotros",
"nav.ct": "Contacto",
"nav.talk": "Hablemos",
"nav.talk2": "Hablemos",
"dot.core": "Nuestro core",
"dot.products": "Productos",
"dot.software": "Software",
"dot.ai": "Inteligencia",
"dot.ind": "Industrias",
"dot.next": "Lo que sigue",
"ft.tag": "Tecnología creada para impulsar a las empresas.",
"ft.h1": "Empresa",
"ft.a1": "Sobre AI Humans",
"ft.a2": "Cómo trabajamos",
"ft.a3": "Contacto",
"ft.h2": "Productos",
"ft.h3": "Soluciones",
"ft.s1": "Productos Digitales",
"ft.s2": "Apps y Software",
"ft.s3": "IA y Automatización",
"ft.s4": "Soluciones Empresariales",
"ft.h4": "Recursos",
"ft.r1": "Catálogo de productos",
"ft.r2": "Preguntas frecuentes",
"ft.r3": "IA responsable",
"ft.r4": "Modelo de trabajo",
"ft.h5": "Contacto",
"ft.c1": "Inicia un proyecto",
"ft.c3": "Aviso de privacidad",
"ft.rights": "Todos los derechos reservados.",
"ft.priv": "Privacidad",
"ft.info": "Información de la empresa"
}
};
  const STORE = 'aih-lang';
  const root = document.documentElement;
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  const apply = (lang) => {
    if (!DICT[lang]) lang = 'en';
    const d = DICT[lang];
    $$('[data-i18n]').forEach((el) => {
      const v = d[el.dataset.i18n];
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    });
    $$('[data-i18n-aria]').forEach((el) => {
      const open = el.getAttribute('aria-expanded') === 'true';
      const key = open ? 'nav.menuClose' : el.dataset.i18nAria;
      if (d[key]) el.setAttribute('aria-label', d[key]);
    });
    const meta = document.querySelector('meta[data-i18n-meta]');
    if (meta && d[meta.dataset.i18nMeta]) meta.setAttribute('content', d[meta.dataset.i18nMeta]);
    if (d['meta.title']) document.title = d['meta.title'];
    root.lang = lang;
    root.setAttribute('data-lang', lang);
    $$('.lang [data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    root.classList.remove('i18n-pending');
    if (window.ScrollTrigger) requestAnimationFrame(() => window.ScrollTrigger.refresh());
    document.dispatchEvent(new CustomEvent('aih:lang', { detail: { lang } }));
  };

  let explicit = false;
  try {
    const q = new URLSearchParams(location.search).get('lang');
    explicit = q === 'es' || q === 'en' || !!localStorage.getItem(STORE);
  } catch (e) { /* storage unavailable */ }

  apply(root.getAttribute('data-lang') || 'en');

  /* Manual switch (remembered) */
  document.addEventListener('click', (e) => {
    const b = e.target.closest('.lang [data-lang]');
    if (!b) return;
    explicit = true;
    try { localStorage.setItem(STORE, b.dataset.lang); } catch (err) { /* ignore */ }
    apply(b.dataset.lang);
  });

  /* Keep the menu button label in the current language */
  const tg = document.querySelector('.nav-toggle');
  if (tg) tg.addEventListener('click', () => setTimeout(() => apply(root.getAttribute('data-lang')), 0));

  /* Keyboard layout detection */
  const fromLayout = (map) => {
    const semi = map.get('Semicolon'), quote = map.get('Quote'), bracket = map.get('BracketLeft');
    if (semi === 'ñ' || quote === 'ñ') return 'es';
    if (semi === ';' && (quote === "'" || quote === '#') && bracket === '[') return 'en';
    return null; // other layouts (e.g. German, French): fall back to browser language
  };
  if (!explicit && navigator.keyboard && typeof navigator.keyboard.getLayoutMap === 'function') {
    navigator.keyboard.getLayoutMap()
      .then((map) => { const l = fromLayout(map); if (l && !explicit && l !== root.getAttribute('data-lang')) apply(l); })
      .catch(() => { /* not allowed here (e.g. iframe / insecure context) */ });
  }

  /* Typing hint: if the visitor types Spanish-only characters before choosing, switch once */
  if (!explicit) {
    const onKey = (e) => {
      if (explicit) return window.removeEventListener('keydown', onKey);
      if (/^[ñÑ¿¡]$/.test(e.key) && root.getAttribute('data-lang') !== 'es') { apply('es'); window.removeEventListener('keydown', onKey); }
    };
    window.addEventListener('keydown', onKey);
  }
})();
