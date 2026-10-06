(function () {
'use strict';
var KEY = 'nm-prep-v2';

// [question, [ [followup L1, [ [followup L2, [L3, L3]], ... ]], ... ]]
var Q = [
['Who is the site for first - talent, or issuers and partners?', [
  ['If talent: which roles are hardest to hire right now?', [
    ['What do strong candidates need to believe about Nine Mile before applying?', ['Which firms do they compare you to (Optiver, Citadel, IMC)?', 'What makes people say yes once they are in the process?']],
    ['Where do candidates come from today - LinkedIn, referrals, universities?', ['Should the site speak to graduates and experienced hires differently?', 'Should applicants apply on the site, or start a conversation?']]]],
  ['If issuers / partners: what should they do after visiting?', [
    ['What proof do they need first - awards, venues, track record, people?', ['Do you have approved numbers, or only qualitative claims?', 'Who at Nine Mile fronts these relationships?']],
    ['Which markets matter most for them - Japan, Korea, Hong Kong, Europe?', ['One global story, or pages per market?', 'Do any markets need another language (Japanese, Korean, Chinese)?']]]]
]],
['Is the new part-time Marketing Lead involved? Will they own the site after launch?', [
  ['Has the Marketing Lead role been filled?', [
    ['If filled: when do they start, and will they work with us directly?', ['Can we meet them in a discovery session?', 'Will they own content and updates after launch?']],
    ['If not: who runs the project until then - you?', ['Should the timeline wait for the hire?', 'Who sets priorities in the meantime?']]]],
  ['Who signs off on scope and budget?', [
    ['Is Morgan Potter involved in the decision?', ['Can we get 30 minutes with him in discovery?', 'What does he care about most - talent, brand or partners?']],
    ['Who supplies content and owns updates?', ['Is there a backlog of news, awards and bios ready to go?', 'Do you want a CMS the team can edit without a developer?']]]]
]],
['Refresh of the current WordPress site, or a full rebuild?', [
  ['What works on the current site and should stay?', [
    ['Is the look and feel (deep blue, big type) a keeper?', ['Keep the brand and rebuild the structure?', 'Or open to a new visual direction?']],
    ['Is "the only Australian-owned HFT" the core message?', ['Is it fine to lead with it on the home page?', 'Is any of that wording restricted?']]]],
  ['What is not working today?', [
    ['Is it traffic, enquiries, hires, or how it looks to partners?', ['Do you have analytics we can look at?', 'Any feedback from candidates or partners?']],
    ['Any CMS, integrations or careers tools to plan for?', ['Is the jobs list fed by an ATS?', 'Does hosting stay on WordPress?']]]]
]],
['Timeline and budget band?', [
  ['Is the launch tied to a date?', [
    ['An event, market entry or hiring push?', ['What is the earliest date that helps?', 'What happens if it slips a month?']],
    ['When does the Marketing Lead want it live?', ['Is a phased launch OK (home first, rest later)?', 'Who needs to review before launch?']]]],
  ['Has a budget been set?', [
    ['Is there an approved range, or should we propose options?', ['Can I propose 2-3 phased packages?', 'Is the budget one-off, or does it include ongoing work?']],
    ['Are you talking to other agencies?', ['What matters most in choosing - portfolio, price, speed?', 'When do you plan to decide?']]]]
]],
['Any compliance constraints on content given the AFSL - who reviews copy before it ships?', [
  ['Which claims or numbers can we not publish?', [
    ['Can performance figures or volumes be shown?', ['Is there a pre-approved facts sheet?', 'Do market references need disclaimers?']],
    ['Are there rules for showing awards and rankings?', ['Is the TSE award fine to feature?', 'Any limit on naming exchanges or partners?']]]],
  ['Who reviews content before it ships?', [
    ['How long does review usually take?', ['Can we build review checkpoints into the schedule?', 'Is there a compliance contact we can meet?']],
    ['Do different audiences need different disclaimers?', ['Is the site for institutional readers only?', 'Do we need a region notice or gate?']]]]
]],
['What does success look like in six months - applications, partner inbound, press?', [
  ['Which one matters most?', [
    ['What is the baseline today?', ['Do you track applications or enquiries now?', 'What would a good result look like in six months?']],
    ['Who measures it after launch?', ['Do you want a simple dashboard?', 'Should analytics setup be part of the project?']]]],
  ['What would make this a win internally?', [
    ['What would Morgan say makes it a win?', ['Does the founder story need to be prominent?', 'Is there a competitor site you admire?']],
    ['Which sites do you like or dislike?', ['Any examples in finance or tech?', 'What should we definitely avoid?']]]]
]]
];

var CONTEXT = [
'MEETING',
'- Wed Oct 7, 2026, 6:00-6:30 AM GMT+7 (10:00 AM Sydney), 30 min, Microsoft Teams.',
'- With Maddie Doran, Head of Business Development, Nine Mile (Sydney). Call set up by Cohen Allingham (cohen@bear.plus).',
'- Her ask: planning a website refresh. Wants to see United Carriers (a Bearplus project) and Barrett\'s first take on where to start with the Nine Mile site.',
'- Barrett Le runs Bearplus (bear.plus), an independent digital design studio from Vietnam with a decade of work and clients like BCG and MYOB.',
'',
'COMPANY',
'- Nine Mile Financial Pty Ltd, Sydney (Level 11, 39 Martin Place), AFSL 518735. Founded 2016. Electronic principal trading firm: ETF market making across APAC plus a high-frequency futures desk.',
'- Pitches itself as the only Australian-owned HFT firm, competing with Susquehanna, Optiver, IMC and Citadel Securities (AFR, Mar 2026).',
'- Founder/MD Morgan Potter, ex-Macquarie Group MD and Goldman Sachs JBWere MD. About 20-30 people, growing ~40% YoY. Staff in Australia, Sri Lanka, Hong Kong; site lists Sydney and Shanghai.',
'- Momentum: TSE Best ETF Market Maker 2026 and Best Market Maker for CONNEQTOR (May 2026); Korea launch (Apr 2026); HKEX approval (2025); first Australian Authorised Participant on ETPLink (Feb 2026); hiring hints at European expansion.',
'- Hiring their first-ever marketing person (part-time Marketing Lead covering website, socials, events; posted Aug 2026). Also hiring traders, quants and engineers.',
'',
'CURRENT SITE (nmftrading.com)',
'- WordPress one-pager, deep blue, big type, animated digits. Confident look, thin content.',
'- Gaps: no news/proof (awards, Korea, HKEX invisible); no global footprint story; little for ETF issuers, exchanges and partners; careers is a plain jobs list; founder/culture story claimed in one paragraph, not shown.',
'',
'BEARPLUS ANGLE',
'- United Carriers parallel: an invisible B2B industry (freight) made 12M+ combined creator views in two weeks; site won FWA, CSSDA and Awwwards Site of the Day (Aug-Sep 2026).',
'- Two jobs for the site: win quant/engineering talent from Optiver/Citadel, and give issuers, exchanges and partners institutional confidence.',
'- Propose a discovery phase first (audiences, content, compliance review given the AFSL), then design; quote scope after discovery.',
'',
'OPEN POINT',
'- Maddie\'s LinkedIn also lists Head of BD at BoardRoom Australia (since Jun 2024). She may be consulting to Nine Mile, so confirm who owns the budget.'
].join('\n');

var state = load();
function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); setStatus('Saved in this browser'); } catch (e) { setStatus('Could not save in this browser'); } }
function qs(i) { if (!state[i]) state[i] = { path: [], done: false, ans: '', fu: {} }; return state[i]; }
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function $(id) { return document.getElementById(id); }
function setStatus(t) { var e = $('p-status'); if (e) e.textContent = t; }

// walk the chosen path, return [{text, key}] and the options available next
function walk(i) {
  var s = qs(i), nodes = Q[i][1], chosen = [], opts = nodes, depth = 0;
  for (var d = 0; d < s.path.length; d++) {
    var n = opts[s.path[d]]; if (n === undefined) { s.path = s.path.slice(0, d); break; }
    var text = typeof n === 'string' ? n : n[0];
    chosen.push({ text: text, key: s.path.slice(0, d + 1).join('.') });
    opts = typeof n === 'string' ? [] : n[1];
    depth = d + 1;
  }
  if (s.done || depth >= 3) opts = [];
  return { chosen: chosen, opts: opts, depth: depth, finished: s.done || depth >= 3 };
}

function treeHTML(i) {
  var w = walk(i), h = '<div class="fu">';
  if (w.chosen.length) {
    h += '<ol class="trail">';
    w.chosen.forEach(function (c, k) {
      h += '<li><span class="lvl">L' + (k + 1) + '</span><span class="ft">' + esc(c.text) + '</span>' +
        '<button class="link" data-act="back" data-q="' + i + '" data-to="' + k + '" type="button">change</button></li>';
    });
    h += '</ol>';
  }
  if (w.opts.length) {
    h += '<div class="fu-label">' + (w.depth === 0 ? 'Follow up if useful' : 'Go deeper') + ' (level ' + (w.depth + 1) + ' of 3)</div><div class="opts">';
    w.opts.forEach(function (o, k) {
      var text = typeof o === 'string' ? o : o[0];
      h += '<button class="opt" data-act="pick" data-q="' + i + '" data-i="' + k + '" type="button">' + esc(text) + '</button>';
    });
    h += '<button class="opt skip" data-act="skip" data-q="' + i + '" type="button">' + (w.depth === 0 ? 'Skip - no follow-up' : 'Stop here - no more follow-ups') + '</button></div>';
  } else {
    h += '<div class="fu-done">' + (w.chosen.length ? 'Follow-up path done.' : 'No follow-up chosen.') +
      ' <button class="link" data-act="reset" data-q="' + i + '" type="button">' + (w.chosen.length ? 'Try another path' : 'Pick a follow-up') + '</button></div>';
  }
  return h + '</div>';
}

function answeredCount(i) { var s = qs(i); return (s.ans && s.ans.trim() ? 1 : 0) + Object.keys(s.fu).filter(function (k) { return s.fu[k].trim(); }).length; }

function renderList() {
  var h = '';
  Q.forEach(function (q, i) {
    var n = answeredCount(i);
    h += '<article class="q" id="q' + i + '"><div class="q-head"><h3><span class="num">' + String(i + 1).padStart(2, '0') + '</span>' + esc(q[0]) + '</h3>' +
      '<button class="btn answer" data-act="answer" data-q="' + i + '" type="button">Answer' + (n ? '<span class="dot">' + n + '</span>' : '') + '</button></div>' +
      '<div class="tree" data-tree="' + i + '">' + treeHTML(i) + '</div></article>';
  });
  $('qlist').innerHTML = h;
}
function refreshTree(i) {
  var t = document.querySelector('[data-tree="' + i + '"]'); if (t) t.innerHTML = treeHTML(i);
  if (openQ === i) renderPanel(i, true);
}

var openQ = -1, lastFocus = null;
function renderPanel(i, keepFocus) {
  var s = qs(i), w = walk(i);
  $('p-num').textContent = 'Question ' + (i + 1) + ' of ' + Q.length;
  $('p-title').textContent = Q[i][0];
  var active = document.activeElement && document.activeElement.dataset ? document.activeElement.dataset.fk : null;
  var h = '<label class="fld"><span>Her answer</span><textarea data-fk="ans" rows="6" placeholder="Type what Maddie says...">' + esc(s.ans) + '</textarea></label>';
  w.chosen.forEach(function (c) {
    h += '<label class="fld sub"><span>Follow-up: ' + esc(c.text) + '</span><textarea data-fk="' + c.key + '" rows="3" placeholder="Answer...">' + esc(s.fu[c.key] || '') + '</textarea></label>';
  });
  h += '<div class="panel-tree">' + treeHTML(i) + '</div>';
  if (i < Q.length - 1) h += '<button class="btn ghost" data-act="answer" data-q="' + (i + 1) + '" type="button">Next question &rarr;</button>';
  $('p-body').innerHTML = h;
  if (keepFocus && active) { var el = $('p-body').querySelector('[data-fk="' + active + '"]'); if (el) { el.focus(); el.selectionStart = el.selectionEnd = el.value.length; } }
}
function openPanel(i) {
  var wasOpen = openQ >= 0;
  openQ = i; renderPanel(i);
  var p = $('panel'); p.classList.add('open'); p.setAttribute('aria-hidden', 'false');
  $('scrim').hidden = false; document.body.classList.add('lock');
  if (!wasOpen) lastFocus = document.activeElement;
  var ta = p.querySelector('textarea'); if (ta) ta.focus();
  $('p-body').scrollTop = 0;
}
function closePanel() {
  openQ = -1; var p = $('panel'); p.classList.remove('open'); p.setAttribute('aria-hidden', 'true');
  $('scrim').hidden = true; document.body.classList.remove('lock');
  renderList(); if (lastFocus && lastFocus.focus) lastFocus.focus();
}

document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-act]'); if (!b) return;
  var i = +b.dataset.q, s = i >= 0 ? qs(i) : null, act = b.dataset.act;
  if (act === 'answer') { openPanel(i); return; }
  if (act === 'pick') { s.path.push(+b.dataset.i); s.done = false; }
  else if (act === 'skip') { s.done = true; }
  else if (act === 'back') { var to = +b.dataset.to; Object.keys(s.fu).forEach(function (k) { if (k.split('.').length > to) delete s.fu[k]; }); s.path = s.path.slice(0, to); s.done = false; }
  else if (act === 'reset') { s.path = []; s.done = false; s.fu = {}; }
  save(); refreshTree(i);
});
document.addEventListener('input', function (e) {
  var t = e.target; if (!t.dataset || !t.dataset.fk || openQ < 0) return;
  var s = qs(openQ); if (t.dataset.fk === 'ans') s.ans = t.value; else s.fu[t.dataset.fk] = t.value;
  save();
});
$('p-close').onclick = closePanel; $('p-done').onclick = closePanel; $('scrim').onclick = closePanel;
document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && openQ >= 0) closePanel(); });

function qaText(md) {
  var out = [];
  Q.forEach(function (q, i) {
    var s = qs(i), w = walk(i), ans = (s.ans || '').trim();
    var lines = [md ? '### Q' + (i + 1) + '. ' + q[0] : 'Q' + (i + 1) + '. ' + q[0], 'Answer: ' + (ans || '(not noted)')];
    w.chosen.forEach(function (c) { lines.push('- Follow-up asked: ' + c.text, '  Answer: ' + ((s.fu[c.key] || '').trim() || '(not noted)')); });
    out.push(lines.join('\n'));
  });
  return out.join('\n\n');
}
function buildPrompt(kind) {
  var task = 'You are my sales and strategy partner. Using the lead context and my call notes, (1) summarise what I learned and what is still unclear, (2) score how qualified this lead is and why, (3) draft a short follow-up email to Maddie Doran that proposes the next step, and (4) outline a discovery-phase proposal for a Nine Mile website refresh. Keep it concrete. Ask me for anything missing before you guess.';
  if (kind === 'claude') {
    return '<role>You are my sales and strategy partner at Bearplus, a digital design studio. I just had (or am about to have) a discovery call with a lead.</role>\n\n<lead_context>\n' + CONTEXT + '\n</lead_context>\n\n<call_notes>\n' + qaText(false) + '\n</call_notes>\n\n<task>\n' + task + '\n</task>';
  }
  return '# Role\nYou are my sales and strategy partner at Bearplus, a digital design studio. I just had (or am about to have) a discovery call with a lead.\n\n# Lead context\n' + CONTEXT + '\n\n# My call notes\n' + qaText(true) + '\n\n# Task\n' + task;
}
function toast(m) { var t = $('toast'); t.textContent = m; t.classList.add('show'); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove('show'); }, 2200); }
function copy(text, label) {
  function fallback() {
    var ta = document.createElement('textarea'); ta.value = text; ta.style.cssText = 'position:fixed;opacity:0;top:0'; document.body.appendChild(ta); ta.select();
    var ok = false; try { ok = document.execCommand('copy'); } catch (e) {} document.body.removeChild(ta);
    toast(ok ? label + ' copied' : 'Copy failed - select and copy manually');
  }
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(function () { toast(label + ' copied'); }, fallback); else fallback();
}
$('copy-claude').onclick = function () { copy(buildPrompt('claude'), 'Claude prompt'); };
$('copy-gpt').onclick = function () { copy(buildPrompt('gpt'), 'ChatGPT prompt'); };
window.__nmPrompt = buildPrompt;

renderList();
})();
