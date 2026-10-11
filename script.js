/* byu. · landing v2 — HTML/CSS/JS propio (sin dependencias) */
(() => {
  'use strict';

  // ===== CONFIGURACIÓN =====
  // Número de WhatsApp con código de país, sin + ni espacios (ej: 5491112345678).
  // Mientras esté vacío, los botones llevan al formulario y el formulario muestra el mensaje en modo prueba.
  const NUMERO = '';
  // Instagram: completar cuando esté confirmado el usuario (ej: 'https://instagram.com/byusoftware').
  const INSTAGRAM_URL = '';

  // ===== CONTENIDO =====
  const DATA = {
    comun: { costo: 300 },
    clinica: {
      hero: { pre: ['Tu', 'clínica,', 'funcionando'], key: 'sola' },
      heroBajada: 'Atendemos tu WhatsApp las 24 horas, confirmamos turnos, cobramos cuotas y te mostramos cuánta plata recuperaste.',
      heroLoss: 'Una clínica con 6 profesionales y 15% de ausentismo pierde unos USD 3.500 por mes.',
      waText: 'Hola byu., tengo una clínica y quiero dejar de perder turnos.',
      chatName: 'Consultorios Sur',
      chat: [
        { who: 'in', text: 'Hola! ¿Tienen turno con la Dra. Paz esta semana?', time: '23:41' },
        { who: 'out', text: '¡Hola Sofi! Sí: jueves 10:30 o viernes 16:00. ¿Cuál te queda mejor?', time: '23:41' },
        { who: 'in', text: 'Jueves 10:30.', time: '23:42' },
        { who: 'card', title: 'Turno confirmado', detail: 'Jueves 10:30 · Dra. Paz', note: 'Te lo recordamos 48 h y 24 h antes.', time: '23:42' }
      ],
      probSub: 'Cuatro fugas de plata que vemos en casi todas las clínicas.',
      cards: [
        { hoy: 'La recepción no da abasto: más de 100 WhatsApps por día.', con: 'Recepcionista en WhatsApp conectada a tu agenda.' },
        { hoy: 'Pacientes que faltan sin avisar.', con: 'Recordatorios a 48 h y 24 h con confirmación y lista de espera.' },
        { hoy: 'Consultas de noche que nadie responde.', con: 'Atención 24/7 que reserva el turno en el momento.' },
        { hoy: 'Pacientes que no vuelven.', con: 'Reactivación automática cuando toca volver.' }
      ],
      calcSub: 'Mové los números de tu clínica. La cuenta es simple.',
      calc: [
        { key: 'prof', label: 'Profesionales', min: 1, max: 30, step: 1, def: 6 },
        { key: 'turnos', label: 'Turnos por día, por profesional', min: 4, max: 30, step: 1, def: 12 },
        { key: 'valor', label: 'Valor del turno', min: 5, max: 120, step: 1, def: 15, pre: 'USD ' },
        { key: 'aus', label: 'Ausentismo', min: 0, max: 40, step: 1, def: 15, suf: '%' }
      ],
      formula: 'Pérdida = profesionales × turnos por día × 22 días × valor del turno × ausentismo. Plata recuperada: un tercio de esa pérdida.',
      nightSub: 'De noche entran consultas. El búho responde, reserva el turno y deja todo listo para la mañana.',
      night: [
        { who: 'in', text: 'Hola, ¿mañana hay turno con traumatología?', time: '23:12' },
        { who: 'out', text: 'Hola Marta. Sí: 9:15 o 11:40 con el Dr. Ruiz. ¿Cuál te reservo?', time: '23:12' },
        { who: 'in', text: '9:15', time: '23:14' },
        { who: 'out', text: 'Listo, turno confirmado. Te recuerdo mañana a las 8.', time: '23:14' }
      ],
      copiloto: { saludo: 'Buen lunes. Esta semana:', items: [
        '9 pacientes no vuelven hace 6 meses. Ya les escribimos.',
        'Los martes a la mañana tenés 30% de huecos: abrimos la lista de espera.',
        'El ausentismo bajó del 15% al 7%. Revisá quién sigue faltando.'
      ] }
    },
    gimnasio: {
      hero: { pre: ['Tu', 'gimnasio,', 'funcionando'], key: 'solo' },
      heroBajada: 'Atendemos tu WhatsApp las 24 horas, reservamos clases, cobramos cuotas y te mostramos cuánta plata recuperaste.',
      heroLoss: 'Un gimnasio con 300 socios pierde unos USD 1.000 por mes entre bajas y consultas sin responder.',
      waText: 'Hola byu., tengo un gimnasio y quiero dejar de perder socios.',
      chatName: 'Gimnasio Norte',
      chat: [
        { who: 'in', text: 'Hola, ¿cuánto sale la cuota? Quiero arrancar', time: '22:15' },
        { who: 'out', text: '¡Hola Nico! USD 30 por mes, pase libre. ¿Querés una clase de prueba gratis?', time: '22:15' },
        { who: 'in', text: 'Dale, mañana a la tarde', time: '22:16' },
        { who: 'card', title: 'Clase reservada', detail: 'Mañana 19:00 · Funcional', note: 'Te avisamos 2 h antes.', time: '22:16' }
      ],
      probSub: 'Cuatro fugas de plata que vemos en casi todos los gimnasios.',
      cards: [
        { hoy: 'Consultas de Instagram y WhatsApp sin responder.', con: 'Respuesta inmediata, clase de prueba y seguimiento.' },
        { hoy: 'Socios que se van sin que nadie lo note.', con: 'Alertas de inactividad y mensaje del coach.' },
        { hoy: 'Cuotas cobradas a mano.', con: 'Cobranza automática con link de Mercado Pago.' },
        { hoy: 'Reservas anotadas en un cuaderno.', con: 'Reservas por WhatsApp con cupo automático.' }
      ],
      calcSub: 'Mové los números de tu gimnasio. La cuenta es simple.',
      calc: [
        { key: 'socios', label: 'Socios activos', min: 50, max: 2000, step: 10, def: 300 },
        { key: 'bajas', label: 'Bajas por mes', min: 1, max: 20, step: 1, def: 6, suf: '%' },
        { key: 'cuota', label: 'Cuota mensual', min: 10, max: 120, step: 1, def: 30, pre: 'USD ' },
        { key: 'consultas', label: 'Consultas sin responder por mes', min: 0, max: 300, step: 5, def: 80 }
      ],
      formula: 'Pérdida = socios × bajas × cuota + consultas sin responder × 20% × cuota. Plata recuperada: un tercio de esa pérdida.',
      nightSub: 'De noche entran consultas. El búho responde, reserva la clase y deja todo listo para la mañana.',
      night: [
        { who: 'in', text: '¿Mañana abren a las 7?', time: '00:41' },
        { who: 'out', text: 'Sí, de 7 a 23. ¿Te reservo lugar en funcional de las 7:30?', time: '00:41' },
        { who: 'in', text: 'Dale', time: '00:42' },
        { who: 'out', text: 'Reservado. Quedan 3 lugares y el tuyo ya está.', time: '00:42' }
      ],
      copiloto: { saludo: 'Buen lunes. Esta semana:', items: [
        '4 socios no vienen hace 10 días. Ya les escribimos.',
        'Funcional de las 19 se llena los martes: sumá un horario.',
        '12 cuotas vencen el viernes. El link de Mercado Pago ya salió.'
      ] }
    }
  };
  // ===== FIN CONTENIDO =====

  const d = document, $ = (s, r = d) => r.querySelector(s), $$ = (s, r = d) => [...r.querySelectorAll(s)];
  const E = 'cubic-bezier(.34,1.56,.64,1)';
  const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = matchMedia('(hover: none)').matches;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmt = n => Math.round(n).toLocaleString('es-AR');
  const clamp01 = x => Math.max(0, Math.min(1, x));
  const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
                  set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };

  // ----- estado -----
  const vals = {};
  ['clinica', 'gimnasio'].forEach(k => { vals[k] = {}; DATA[k].calc.forEach(s => { vals[k][s.key] = s.def; }); });
  const saved = store.get('byu_rubro');
  const S = { rubro: saved === 'gimnasio' ? 'gimnasio' : 'clinica', night: 0, nightManual: false, calcSeen: false, flown: false, compact: null };
  const T = () => DATA[S.rubro];
  const timers = [];
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  let chatTimers = [];

  // ----- WhatsApp -----
  const numero = () => NUMERO.replace(/\D/g, '');
  const wa = txt => numero() ? 'https://wa.me/' + numero() + '?text=' + encodeURIComponent(txt) : '#contacto';
  function setLinks() {
    const isC = S.rubro === 'clinica';
    $$('[data-wa]').forEach(a => { a.href = wa(T().waText); toggleTarget(a); });
    $$('[data-plan]').forEach(a => { a.href = wa('Hola byu., quiero el plan ' + a.dataset.plan + ' para mi ' + (isC ? 'clínica' : 'gimnasio') + '.'); toggleTarget(a); });
  }
  function toggleTarget(a) { if (numero()) a.target = '_blank'; else a.removeAttribute('target'); }

  // ----- animaciones reutilizables -----
  function dropKF() {
    const IN = 'cubic-bezier(.55,0,1,.45)', OUT = 'cubic-bezier(0,.55,.45,1)';
    return [
      { transform: 'translateY(-2.2em) scale(.85,1.2)', opacity: 0, easing: IN },
      { transform: 'translateY(0) scale(1.45,.6)', opacity: 1, offset: 0.42, easing: OUT },
      { transform: 'translateY(-.5em) scale(.9,1.12)', offset: 0.62, easing: IN },
      { transform: 'translateY(0) scale(1.18,.84)', offset: 0.8, easing: OUT },
      { transform: 'translateY(-.12em)', offset: 0.9, easing: IN },
      { transform: 'none' }
    ];
  }
  function logoDrop() {
    const IN = 'cubic-bezier(.55,0,1,.45)', OUT = 'cubic-bezier(0,.55,.45,1)';
    return [
      { transform: 'translateY(-1100px) scale(.85,1.2)', easing: IN },
      { transform: 'translateY(0) scale(1.4,.62)', offset: 0.4, easing: OUT },
      { transform: 'translateY(-300px) scale(.92,1.1)', offset: 0.58, easing: IN },
      { transform: 'translateY(0) scale(1.22,.8)', offset: 0.74, easing: OUT },
      { transform: 'translateY(-90px) scale(.97,1.04)', offset: 0.85, easing: IN },
      { transform: 'translateY(0) scale(1.08,.93)', offset: 0.94 },
      { transform: 'none' }
    ];
  }
  function popIn(el) {
    if (rm) return;
    el.animate([{ opacity: 0, transform: 'translateY(14px) scale(.92)' }, { opacity: 1, transform: 'none' }], { duration: 460, easing: E });
    const cd = $('[data-cdot]', el);
    if (cd) cd.animate(dropKF(), { duration: 720, delay: 260, fill: 'backwards' });
  }

  // ----- títulos: palabra por palabra + punto naranja -----
  function splitTitle(h, words) {
    let pre, key, post;
    if (words) { pre = words.pre; key = words.key; post = words.post || []; }
    else {
      const em = $('em', h);
      const before = [], after = [];
      let seen = false;
      h.childNodes.forEach(n => { if (n === em) { seen = true; return; } (seen ? after : before).push(n.textContent); });
      pre = before.join('').trim().split(/\s+/).filter(Boolean);
      key = em ? em.textContent.trim() : '';
      post = after.join('').trim().split(/\s+/).filter(Boolean);
    }
    h.innerHTML =
      pre.map(w => `<span class="w-mask"><span class="w" data-w>${esc(w)}</span></span>`).join('') +
      (key ? `<span class="w-key"><span class="w" data-w data-k>${esc(key)}</span></span>` : '') +
      post.map(w => `<span class="w-mask w-mask--post"><span class="w" data-w>${esc(w)}</span></span>`).join('') +
      `<span class="w-dotwrap"><span class="tdot" data-dot>.</span></span>`;
    h._done = false;
  }
  function prime(h) {
    if (rm) return;
    $$('[data-w]:not([data-k])', h).forEach(w => { w.style.transform = 'translateY(115%)'; });
    const k = $('[data-k]', h); if (k) k.style.opacity = '0';
    const dot = $('[data-dot]', h); if (dot) dot.style.opacity = '0';
  }
  function reveal(h) {
    if (h._done) return; h._done = true;
    if (rm) return;
    const words = $$('[data-w]:not([data-k])', h), k = $('[data-k]', h), dot = $('[data-dot]', h);
    words.forEach((w, i) => { w.style.transform = ''; w.animate([{ transform: 'translateY(115%)' }, { transform: 'none' }], { duration: 620, delay: i * 80, easing: 'cubic-bezier(.2,.85,.25,1)', fill: 'backwards' }); });
    const kd = words.length * 80 + 120;
    if (k) { k.style.opacity = ''; k.animate([{ opacity: 0, transform: 'translateY(45%) scale(1.3)' }, { opacity: 1, transform: 'translateY(0) scale(1.3)', offset: 0.5 }, { opacity: 1, transform: 'none' }], { duration: 760, delay: kd, easing: E, fill: 'backwards' }); }
    const dd = kd + 620;
    if (dot) {
      if (h.hasAttribute('data-first') && !S.flown) later(() => fly(dot), dd);
      else { dot.style.opacity = ''; dot.animate(dropKF(), { duration: 720, delay: dd, fill: 'backwards' }); }
    }
  }
  // El punto se despega del logo del hero y baja hasta el primer título
  function fly(dot) {
    const src = $('[data-hero-logo] [data-ldot]');
    const finish = () => { dot.style.opacity = ''; dot.animate([{ transform: 'scale(1.5,.6)' }, { transform: 'scale(.9,1.12)', offset: 0.5 }, { transform: 'none' }], { duration: 420, easing: E }); };
    if (!src) { finish(); return; }
    S.flown = true;
    const a = src.getBoundingClientRect(), b = dot.getBoundingClientRect(), fs = parseFloat(getComputedStyle(dot).fontSize);
    const tcx = b.left + b.width / 2, tcy = b.top + fs * 0.72, ts = fs * 0.24;
    const dx = tcx - (a.left + a.width / 2), dy = tcy - (a.top + a.height / 2), s = ts / a.width;
    const f = d.createElement('div');
    Object.assign(f.style, { position: 'fixed', left: a.left + 'px', top: a.top + 'px', width: a.width + 'px', height: a.height + 'px', borderRadius: '50%', background: '#FF6A2B', zIndex: '60', pointerEvents: 'none' });
    d.body.appendChild(f);
    src.style.opacity = '0';
    const an = f.animate([
      { transform: 'translate(0,0) scale(1.15,.85)' },
      { transform: `translate(${dx * 0.3}px,${dy * 0.3 - 70}px) scale(.9,1.1)`, offset: 0.3 },
      { transform: `translate(${dx}px,${dy}px) scale(${s * 1.5},${s * 0.6})`, offset: 0.86 },
      { transform: `translate(${dx}px,${dy}px) scale(${s})` }
    ], { duration: 950, easing: 'cubic-bezier(.5,0,.3,1)', fill: 'forwards' });
    an.onfinish = () => { f.remove(); finish(); };
  }
  function heroBack() {
    if (!S.flown || rm) return;
    const src = $('[data-hero-logo] [data-ldot]');
    if (src && src.style.opacity === '0') { src.style.opacity = ''; src.animate(logoDrop(), { duration: 1100 }); }
  }

  // ----- logo -----
  function primeLogo(svg) {
    $$('[data-l]', svg).forEach(l => { l.style.transform = 'translateY(1000px)'; });
    const dot = $('[data-ldot]', svg); if (dot) dot.style.transform = 'translateY(-1100px)';
  }
  function logoIn(svg) {
    if (rm || !svg) return;
    $$('[data-l]', svg).forEach((l, i) => { l.style.transform = ''; l.animate([{ transform: 'translateY(1000px)' }, { transform: 'none' }], { duration: 720, delay: i * 80, easing: 'cubic-bezier(.2,.9,.25,1.05)', fill: 'backwards' }); });
    const dot = $('[data-ldot]', svg);
    if (dot) { dot.style.transform = ''; dot.style.opacity = ''; dot.animate(logoDrop(), { duration: 1150, delay: 420, fill: 'backwards' }); }
  }
  function navCompact(c) {
    const s = $('[data-nav-svg]'); if (!s) return;
    const y = $('[data-nl="y"]', s), u = $('[data-nl="u"]', s), dot = $('[data-nl="dot"]', s);
    const tr = rm ? 'none' : `transform .55s ${E}, opacity .3s ease`;
    [y, u, dot].forEach(e => { e.style.transition = tr; });
    y.style.transform = c ? 'translateX(-200px) scale(.3)' : ''; y.style.opacity = c ? '0' : '1';
    u.style.transform = c ? 'translateX(-700px) scale(.3)' : ''; u.style.opacity = c ? '0' : '1';
    dot.style.transform = c ? 'translateX(-1589px)' : '';
  }

  // ----- textos que cambian por rubro -----
  function renderText() {
    $$('[data-t]').forEach(el => { const v = T()[el.dataset.t]; if (v != null) el.textContent = v; });
    const h = $('[data-hero-title]');
    splitTitle(h, T().hero);
    $$('[data-rubro]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.rubro === S.rubro)));
    $('[data-chat-aria]').setAttribute('aria-label', 'Demo de chat: ' + T().chat.map(m => m.text || (m.title + ', ' + m.detail)).join(' / '));
    $('[data-form-rubro]').value = S.rubro;
  }

  // ----- demo de chat -----
  const chatBox = $('[data-chat]');
  function msgEl(m) {
    const el = d.createElement('div');
    if (m.who === 'card') {
      el.className = 'msg-card';
      el.innerHTML = `<div class="ct">${esc(m.title)}<span class="tdot" data-cdot>.</span></div><div class="cd">${esc(m.detail)}</div><div class="cn">${esc(m.note)}</div><time>${m.time}</time>`;
    } else {
      el.className = 'msg ' + (m.who === 'in' ? 'msg-in' : 'msg-out');
      el.innerHTML = `${esc(m.text)}<time>${m.time}</time>`;
    }
    return el;
  }
  let typingEl = null;
  function setTyping(on) {
    if (on && !typingEl) {
      typingEl = d.createElement('div'); typingEl.className = 'typing';
      typingEl.innerHTML = '<span></span><span></span><span></span>';
      chatBox.appendChild(typingEl); popIn(typingEl);
      if (!rm) $$('span', typingEl).forEach((s, i) => s.animate([{ transform: 'translateY(0)', opacity: .5 }, { transform: 'translateY(-4px)', opacity: 1, offset: .3 }, { transform: 'translateY(0)', opacity: .5, offset: .6 }, { transform: 'translateY(0)', opacity: .5 }], { duration: 900, delay: i * 140, iterations: Infinity }));
    } else if (!on && typingEl) { typingEl.remove(); typingEl = null; }
  }
  function startChat() {
    chatTimers.forEach(clearTimeout); chatTimers = [];
    chatBox.innerHTML = ''; typingEl = null;
    const msgs = T().chat;
    if (rm) { msgs.forEach(m => chatBox.appendChild(msgEl(m))); return; }
    let t = 700;
    msgs.forEach(m => {
      if (m.who !== 'in') { chatTimers.push(setTimeout(() => setTyping(true), t)); t += 1300; } else t += 200;
      chatTimers.push(setTimeout(() => { setTyping(false); const el = msgEl(m); chatBox.appendChild(el); popIn(el); }, t));
      t += 1000;
    });
  }

  // ----- tarjetas Hoy / Con byu. -----
  const cardsBox = $('[data-cards]'), flipLabel = $('[data-flip-label]');
  function renderCards() {
    cardsBox.innerHTML = T().cards.map((c, i) => `
      <button type="button" class="card" data-card="${i}" aria-pressed="false" aria-label="Hoy: ${esc(c.hoy)} Tocá para ver la solución.">
        <div class="card-inner">
          <div class="face"><div class="face-tag">Hoy</div><p>${esc(c.hoy)}</p><div class="face-foot"><span>Ver con byu.</span><span aria-hidden="true">↻</span></div></div>
          <div class="face face-back"><div class="face-tag">Con byu.</div><p>${esc(c.con)}</p><div class="face-foot">Resuelto</div></div>
        </div>
      </button>`).join('');
    syncFlipLabel();
  }
  function setCard(btn, on) {
    const c = T().cards[+btn.dataset.card];
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? 'Con byu.: ' + c.con : 'Hoy: ' + c.hoy + ' Tocá para ver la solución.');
  }
  function syncFlipLabel() {
    const all = $$('.card', cardsBox).every(b => b.getAttribute('aria-pressed') === 'true');
    flipLabel.textContent = all ? 'Volver a hoy' : 'Ver todo con byu.';
  }
  cardsBox.addEventListener('click', e => {
    const b = e.target.closest('.card'); if (!b) return;
    setCard(b, b.getAttribute('aria-pressed') !== 'true'); syncFlipLabel();
  });
  $('[data-flip-all]').addEventListener('click', () => {
    const cards = $$('.card', cardsBox), all = cards.every(b => b.getAttribute('aria-pressed') === 'true');
    cards.forEach(b => setCard(b, !all)); syncFlipLabel();
  });

  // ----- calculadora + La Y -----
  const slidersBox = $('[data-sliders]');
  function nums() {
    const v = vals[S.rubro];
    const loss = S.rubro === 'clinica' ? v.prof * v.turnos * 22 * v.valor * v.aus / 100 : v.socios * v.bajas / 100 * v.cuota + v.consultas * 0.2 * v.cuota;
    return { loss, rec: loss / 3 };
  }
  const shown = sl => (sl.pre || '') + fmt(vals[S.rubro][sl.key]) + (sl.suf || '');
  function renderSliders() {
    slidersBox.innerHTML = T().calc.map(sl => `
      <label class="slider"><span class="slider-top"><span class="slider-label">${esc(sl.label)}</span><span class="slider-val" data-shown="${sl.key}">${shown(sl)}</span></span>
      <input type="range" min="${sl.min}" max="${sl.max}" step="${sl.step}" value="${vals[S.rubro][sl.key]}" data-key="${sl.key}" aria-valuetext="${shown(sl)}"></label>`).join('');
  }
  slidersBox.addEventListener('input', e => {
    const k = e.target.dataset.key; if (!k) return;
    const before = nums();
    vals[S.rubro][k] = +e.target.value;
    const sl = T().calc.find(s => s.key === k);
    $(`[data-shown="${k}"]`, slidersBox).textContent = shown(sl);
    e.target.setAttribute('aria-valuetext', shown(sl));
    calcChanged(before);
  });
  function calcChanged(before) {
    const after = nums();
    renderCalcStatic();
    if (!S.calcSeen || Math.round(before.loss) === Math.round(after.loss)) return;
    tween(false); hop(); updateY(after.rec);
    if (before.rec <= DATA.comun.costo && after.rec > DATA.comun.costo) celebrate();
  }
  function renderCalcStatic() {
    const { loss, rec } = nums(), cost = DATA.comun.costo, max = Math.max(rec, cost) * 1.15;
    $('[data-bar-fill]').style.transform = `scaleX(${(rec / max).toFixed(4)})`;
    $('[data-bar-cost]').style.left = (cost / max * 100).toFixed(2) + '%';
    $('[data-cost-txt]').textContent = 'USD ' + fmt(cost);
    $('[data-verdict]').textContent = rec > cost
      ? `Te quedan USD ${fmt(rec - cost)} por mes después de pagar byu.`
      : 'Con estos números todavía no se paga solo. Escribinos y vemos por dónde conviene empezar.';
    $('[data-loss-sr]').textContent = 'Perdés USD ' + fmt(loss) + ' por mes. Plata recuperada: USD ' + fmt(rec) + ' por mes.';
  }
  function tween(fromZero) {
    const n = nums();
    [['loss', n.loss], ['rec', n.rec]].forEach(([k, v]) => {
      const el = $(`[data-num="${k}"]`);
      const from = fromZero ? 0 : (el._v || 0);
      cancelAnimationFrame(el._raf);
      if (rm) { el._v = v; el.textContent = fmt(v); return; }
      const t0 = performance.now(), dur = fromZero ? 1100 : 550;
      const step = t => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3), x = from + (v - from) * e; el._v = x; el.textContent = fmt(x); if (p < 1) el._raf = requestAnimationFrame(step); };
      el._raf = requestAnimationFrame(step);
    });
  }
  function updateY(rec) {
    const k = 1 + Math.min(rec / 4000, 0.45);
    $('[data-ypath]').style.transform = `scaleY(${k.toFixed(3)})`;
    $('[data-yheadpos]').style.transform = `translateY(${(-(k - 1) * 132).toFixed(1)}px)`;
  }
  function hop() {
    const h = $('[data-yhead]'); if (!h || rm) return;
    h.animate([{ transform: 'none' }, { transform: 'translateY(-22px) scale(.9,1.1)', offset: 0.4 }, { transform: 'translateY(0) scale(1.18,.82)', offset: 0.75 }, { transform: 'none' }], { duration: 420, easing: 'ease-out' });
  }
  function celebrate() {
    if (rm) return;
    const j = $('[data-yjump]'), cf = $('[data-confetti]');
    j.animate([{ transform: 'none' }, { transform: 'scale(1.15,.8)', offset: 0.15 }, { transform: 'translateY(-60px) scale(.9,1.12)', offset: 0.45 }, { transform: 'translateY(0) scale(1.12,.88)', offset: 0.75 }, { transform: 'none' }], { duration: 760, easing: 'ease-in-out' });
    for (let i = 0; i < 22; i++) {
      const p = d.createElement('span'), sz = 6 + Math.random() * 8;
      Object.assign(p.style, { position: 'absolute', left: -sz / 2 + 'px', top: -sz / 2 + 'px', width: sz + 'px', height: sz + 'px', borderRadius: '50%', background: '#FF6A2B' });
      cf.appendChild(p);
      const ang = Math.random() * Math.PI * 2, r = 70 + Math.random() * 120, x = Math.cos(ang) * r, y = Math.sin(ang) * r - 60;
      p.animate([{ transform: 'translate(0,0) scale(.3)', opacity: 1 }, { transform: `translate(${x}px,${y}px) scale(1)`, opacity: 1, offset: 0.55 }, { transform: `translate(${x * 1.1}px,${y + 100}px) scale(.6)`, opacity: 0 }], { duration: 1000 + Math.random() * 400, delay: 200, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'backwards' }).onfinish = () => p.remove();
    }
  }
  function calcIn() {
    if (S.calcSeen) return; S.calcSeen = true;
    const { rec } = nums();
    tween(true); updateY(rec);
    if (rec > DATA.comun.costo) later(celebrate, 1150);
  }

  // ----- noche -----
  const night = $('[data-night]'), nightChat = $('[data-night-chat]'), nightEmpty = $('[data-night-empty]'), nightRange = $('[data-night-range]');
  (function stars() {
    $('[data-stars]').innerHTML = Array.from({ length: 36 }, (_, i) => {
      const r = k => { const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };
      const s = (1.5 + r(3) * 2.5).toFixed(1);
      return `<span style="left:${(r(1) * 100).toFixed(2)}%;top:${(r(2) * 75).toFixed(2)}%;width:${s}px;height:${s}px"></span>`;
    }).join('');
  })();
  let nightShown = 0;
  function renderNight(resetMsgs) {
    const n = S.night, msgs = T().night;
    const mins = 18 * 60 + Math.round(n * 9 * 60), hh = Math.floor(mins / 60) % 24, mm = mins % 60;
    const hour = String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
    $('[data-hour]').textContent = hour;
    nightRange.setAttribute('aria-valuetext', hour);
    if (!S.nightManual) nightRange.value = Math.round(n * 100);
    $('[data-night-bg]').style.opacity = n.toFixed(3);
    $('[data-stars]').style.opacity = clamp01((n - 0.35) / 0.5).toFixed(3);
    night.classList.toggle('is-dark', n > 0.42);
    $('.owl-day', night).style.opacity = (1 - clamp01((n - 0.35) / 0.3)).toFixed(3);
    $('.owl-night', night).style.opacity = clamp01((n - 0.35) / 0.3).toFixed(3);
    $$('.eyes', night).forEach(e => { e.style.transform = `scale(${(1 + 0.16 * n).toFixed(3)})`; });
    $$('[data-glow]', night).forEach(g => { g.style.opacity = (clamp01((n - 0.55) * 2.2) * 0.6).toFixed(3); });
    const count = n < 0.5 ? 0 : Math.min(msgs.length, Math.ceil((n - 0.5) / 0.11));
    if (resetMsgs) { $$('.nmsg', nightChat).forEach(e => e.remove()); nightShown = 0; }
    while (nightShown < count) {
      const m = msgs[nightShown++], el = d.createElement('div');
      el.className = 'nmsg ' + (m.who === 'in' ? 'nmsg-in' : 'nmsg-out');
      el.innerHTML = `${esc(m.text)}<time>${m.time}${m.who === 'in' ? '' : ' · búho'}</time>`;
      nightChat.appendChild(el); popIn(el);
    }
    while (nightShown > count) { const els = $$('.nmsg', nightChat); els[els.length - 1].remove(); nightShown--; }
    nightEmpty.hidden = count > 0;
  }
  nightRange.addEventListener('input', () => { S.nightManual = true; S.night = +nightRange.value / 100; renderNight(); });

  // ----- copiloto -----
  const copi = $('[data-copi]');
  function renderCopi() {
    const c = T().copiloto;
    copi.innerHTML = `<p>${esc(c.saludo)}</p>` + c.items.map((t, i) => `<div class="copi-item"><span class="copi-n">${i + 1}</span><span class="copi-t">${esc(t)}</span><span class="copi-done" aria-label="hecho"></span></div>`).join('');
    if (!rm && !copi._done) $$(':scope > *', copi).forEach(e => { e.style.opacity = '0'; e.style.transform = 'translateY(16px)'; });
  }
  function stagger(t) {
    if (t._done) return; t._done = true;
    [...t.children].forEach((c, i) => { c.style.opacity = ''; c.style.transform = ''; if (!rm) c.animate([{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }], { duration: 520, delay: i * 240, easing: E, fill: 'backwards' }); });
  }

  // ----- preguntas -----
  $$('.faq-q').forEach(q => q.addEventListener('click', () => {
    const open = q.getAttribute('aria-expanded') === 'true';
    $$('.faq-q').forEach(o => { o.setAttribute('aria-expanded', 'false'); d.getElementById(o.getAttribute('aria-controls')).hidden = true; });
    if (!open) { q.setAttribute('aria-expanded', 'true'); const a = d.getElementById(q.getAttribute('aria-controls')); a.hidden = false; popIn(a); }
  }));

  // ----- formulario -----
  $('[data-form]').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target, rub = f.rubro.value === 'clinica' ? 'una clínica' : 'un gimnasio';
    const txt = `Hola byu., soy ${f.nombre.value.trim()}. Tengo ${rub} y quiero dejar de perder plata. Mi WhatsApp: ${f.wa.value.trim()}.`;
    const test = $('[data-form-test]');
    if (numero()) { test.hidden = true; window.open(wa(txt), '_blank', 'noopener'); }
    else { test.innerHTML = '<b>Modo prueba:</b> todavía no cargamos el número de WhatsApp. Este es el mensaje que se va a mandar: “' + esc(txt) + '”'; test.hidden = false; popIn(test); }
  });

  // ----- footer -----
  if (INSTAGRAM_URL) { const ig = $('[data-instagram]'); ig.href = INSTAGRAM_URL; ig.hidden = false; }

  // ----- cambio de rubro -----
  function setRubro(r, first) {
    if (!first && r === S.rubro) return;
    S.rubro = r; store.set('byu_rubro', r);
    renderText(); renderCards(); renderSliders(); renderCalcStatic(); renderCopi(); renderNight(true); setLinks();
    if (!first) {
      if (copi._done) { copi._done = false; stagger(copi); }
      const h = $('[data-hero-title]'); h._done = true;   // ya visible: sin animar de nuevo
      if (S.calcSeen) { tween(false); updateY(nums().rec); }
      startChat();
    }
  }
  $$('[data-rubro]').forEach(b => b.addEventListener('click', () => setRubro(b.dataset.rubro)));
  $('[data-replay-chat]').addEventListener('click', startChat);

  // ----- búhos con vida -----
  let ptr = null;
  addEventListener('pointermove', e => { if (e.pointerType === 'mouse') ptr = { x: e.clientX, y: e.clientY }; }, { passive: true });
  function pupils() {
    const vh = innerHeight;
    $$('svg[data-owl]').forEach(o => {
      const r = o.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh || r.width === 0) return;
      let tx, ty;
      if (touch || !ptr) { const s = scrollY / 160; tx = Math.sin(s) * 6; ty = Math.cos(s * 0.7) * 3; }
      else {
        const dx = ptr.x - (r.left + r.width / 2), dy = ptr.y - (r.top + r.height * 0.48), dist = Math.hypot(dx, dy) || 1;
        const m = Math.min(7, dist / 30); tx = dx / dist * m; ty = dy / dist * m;
      }
      const st = o._p || (o._p = { x: 4, y: 2 });
      st.x += (tx - st.x) * 0.16; st.y += (ty - st.y) * 0.16;
      const v = `translate(${(st.x - 4).toFixed(2)} ${(st.y - 2).toFixed(2)})`;
      $$('[data-pupil]', o).forEach(p => p.setAttribute('transform', v));
    });
  }
  function owlLife() {
    $$('svg[data-owl]').forEach(o => {
      const blink = () => {
        $$('[data-eye]', o).forEach(e => e.animate([{ transform: 'scaleY(1)' }, { transform: 'scaleY(.08)', offset: 0.5 }, { transform: 'scaleY(1)' }], { duration: 120, easing: 'ease-in-out' }));
        later(blink, 4000 + Math.random() * 3000);
      };
      later(blink, 1500 + Math.random() * 3000);
      const ear = () => {
        const i = Math.random() < 0.5 ? 0 : 1, e = $$('[data-ear]', o)[i], sg = i ? 1 : -1;
        if (e) e.animate([{ transform: 'rotate(0)' }, { transform: `rotate(${sg * 14}deg)`, offset: 0.3 }, { transform: `rotate(${-sg * 6}deg)`, offset: 0.65 }, { transform: 'rotate(0)' }], { duration: 540, easing: 'ease-in-out' });
        later(ear, 3500 + Math.random() * 4000);
      };
      later(ear, 2500 + Math.random() * 3000);
    });
    const fo = $('[data-owl-float]');
    if (fo) {
      fo.animate([{ transform: 'translateY(100%)' }, { transform: 'none' }], { duration: 650, delay: 1400, easing: E, fill: 'backwards' });
      const head = $('[data-head]', fo);
      const wave = () => head.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(-18deg)', offset: 0.25 }, { transform: 'rotate(10deg)', offset: 0.55 }, { transform: 'rotate(-5deg)', offset: 0.8 }, { transform: 'rotate(0)' }], { duration: 1000, easing: 'ease-in-out' });
      later(wave, 3200); setInterval(wave, 20000);
    }
  }

  // ----- botones: el punto crece y llena el botón -----
  function btnFill(b, on) {
    const dot = $('.bdot', b), arr = $('.barrow', b); if (!dot) return;
    const br = b.getBoundingClientRect(), dr = dot.getBoundingClientRect();
    const cx = dr.left + dr.width / 2, cy = dr.top + dr.height / 2;
    const far = Math.max(Math.hypot(cx - br.left, cy - br.top), Math.hypot(cx - br.right, cy - br.top), Math.hypot(cx - br.left, cy - br.bottom), Math.hypot(cx - br.right, cy - br.bottom));
    dot.style.transition = 'transform .5s cubic-bezier(.3,1.2,.5,1)';
    dot.style.transform = on ? `scale(${(far * 2 / dr.width + 1).toFixed(2)})` : 'scale(1)';
    if (arr) { arr.style.transition = `transform .35s ${E}`; arr.style.transform = on ? 'translateX(5px)' : 'none'; }
    b.style.transition = 'color .25s'; b.style.color = on ? '#1E3150' : '';
  }
  d.addEventListener('pointerover', e => hover(e, true));
  d.addEventListener('pointerout', e => hover(e, false));
  function hover(e, on) {
    const t = e.target; if (!t || !t.closest || (e.pointerType && e.pointerType !== 'mouse')) return;
    const b = t.closest('[data-btn]');
    if (b && !(e.relatedTarget && b.contains(e.relatedTarget))) btnFill(b, on);
    const nl = t.closest('[data-navlogo]');
    if (nl && on && !(e.relatedTarget && nl.contains(e.relatedTarget)) && !rm) {
      const dot = $('[data-nl="dot"]', nl), base = dot.style.transform || '';
      dot.animate([
        { transform: base + ' translateY(0)', easing: 'cubic-bezier(0,.55,.45,1)' },
        { transform: base + ' translateY(-420px) scale(.9,1.1)', offset: 0.4, easing: 'cubic-bezier(.55,0,1,.45)' },
        { transform: base + ' translateY(0) scale(1.3,.72)', offset: 0.78 },
        { transform: base + ' translateY(0)' }
      ], { duration: 560 });
    }
  }
  d.addEventListener('pointerdown', e => {
    const b = e.target && e.target.closest && e.target.closest('[data-btn]');
    if (b && !rm) b.animate([{ transform: 'scale(1)' }, { transform: 'scale(.94)', offset: 0.35 }, { transform: 'scale(1.03)', offset: 0.7 }, { transform: 'scale(1)' }], { duration: 380 });
  });

  // ----- loop: ticker, pupilas y scroll -----
  let dirty = true;
  addEventListener('scroll', () => { dirty = true; }, { passive: true });
  addEventListener('resize', () => { dirty = true; });
  const ticker = $('[data-ticker]'), prog = $('[data-prog]'), steps = $('[data-steps]');
  function scrolled() {
    const y = scrollY, vh = innerHeight, H = d.documentElement.scrollHeight - vh;
    const c = y > 60; if (c !== S.compact) { S.compact = c; navCompact(c); }
    prog.style.transform = `translateY(${(H > 0 ? y / H : 0) * 130}px)`;
    if (!rm) {
      const r = steps.getBoundingClientRect();
      const p = clamp01((vh * 0.85 - r.top) / (r.height + vh * 0.25));
      const segs = $$('[data-seg]', steps), dots = $$('[data-sdot]', steps), n = segs.length;
      segs.forEach((s, i) => { s.style.transform = `scaleX(${clamp01(p * n - i).toFixed(3)})`; });
      dots.forEach((e, i) => { if (p * n > i + 0.02 && !e._on) { e._on = true; e.style.transform = ''; e.animate([{ transform: 'scale(0)' }, { transform: 'scale(1.5)', offset: 0.6 }, { transform: 'scale(1)' }], { duration: 520, easing: E }); } });
    }
    if (!S.nightManual) {
      const r = night.getBoundingClientRect();
      const p = clamp01((vh * 0.55 - r.top) / (r.height * 0.5));
      if (Math.abs(p - S.night) > 0.012 || (p === 1 && S.night !== 1) || (p === 0 && S.night !== 0)) { S.night = p; renderNight(); }
    }
  }
  function loop(t) {
    if (!rm) {
      const W = ticker.scrollWidth / 2;
      if (W > 0) ticker.style.transform = `translate3d(${-(((t / 1000) * 40 + scrollY * 0.45) % W)}px,0,0)`;
      pupils();
    }
    if (dirty) { dirty = false; scrolled(); }
    requestAnimationFrame(loop);
  }

  // ----- arranque -----
  $$('[data-reveal]:not([data-hero-title])').forEach(h => splitTitle(h));
  setRubro(S.rubro, true);
  if (!rm) {
    $$('[data-reveal]').forEach(prime);
    $$('[data-hero-logo],[data-replay]').forEach(primeLogo);
    $$('[data-sdot]').forEach(e => { e.style.transform = 'scale(0)'; });
    $$('[data-seg]').forEach(e => { e.style.transform = 'scaleX(0)'; });
  }
  const io = new IntersectionObserver(es => es.forEach(e => {
    const t = e.target;
    if (t.hasAttribute('data-hero-logo')) { if (e.isIntersecting) heroBack(); return; }
    if (!e.isIntersecting) return;
    if (t.hasAttribute('data-reveal')) reveal(t);
    else if (t.hasAttribute('data-replay')) logoIn(t);
    else if (t.hasAttribute('data-stagger')) stagger(t);
  }), { threshold: 0.3 });
  $$('[data-reveal]:not([data-hero-title]),[data-replay],[data-stagger],[data-hero-logo]').forEach(e => io.observe(e));
  const ioCalc = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) calcIn(); }), { threshold: 0.12 });
  ioCalc.observe($('[data-num="loss"]'));

  if (!rm) {
    owlLife();
    $$('[data-caret]').forEach(c => c.animate([{ opacity: 1 }, { opacity: 1, offset: 0.5 }, { opacity: 0, offset: 0.51 }, { opacity: 0 }], { duration: 1000, iterations: Infinity }));
  }
  requestAnimationFrame(loop);

  function startHero() {
    logoIn($('[data-hero-logo]'));
    reveal($('[data-hero-title]'));
    startChat();
  }
  if (d.documentElement.classList.contains('show-loader')) {
    const dot = $('[data-lpulse]');
    if (dot) dot.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.4)' }, { transform: 'scale(1)' }], { duration: 500, iterations: Infinity, easing: 'ease-in-out' });
    later(() => {
      const L = $('[data-loader]');
      L.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 260, fill: 'forwards' }).onfinish = () => {
        store.set('byu_visto', '1'); d.documentElement.classList.remove('show-loader'); startHero();
      };
    }, 800);
  } else startHero();
})();
