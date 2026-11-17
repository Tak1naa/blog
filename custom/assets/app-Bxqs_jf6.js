function Ge(s) {
  return typeof s == "number";
}
function He(s) {
  return typeof s == "string";
}
function Le(s) {
  return typeof s == "boolean";
}
function rt(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
function V(s) {
  return Math.abs(s);
}
function Re(s) {
  return Math.sign(s);
}
function ge(s, n) {
  return V(s - n);
}
function $t(s, n) {
  if (s === 0 || n === 0 || V(s) <= V(n)) return 0;
  const e = ge(V(s), V(n));
  return V(e / s);
}
function Gt(s) {
  return Math.round(s * 100) / 100;
}
function _e(s) {
  return ve(s).map(Number);
}
function Z(s) {
  return s[we(s)];
}
function we(s) {
  return Math.max(0, s.length - 1);
}
function je(s, n) {
  return n === we(s);
}
function st(s, n = 0) {
  return Array.from(Array(s), (e, i) => n + i);
}
function ve(s) {
  return Object.keys(s);
}
function vt(s, n) {
  return [s, n].reduce((e, i) => (ve(i).forEach((r) => {
    const c = e[r], u = i[r], m = rt(c) && rt(u);
    e[r] = m ? vt(c, u) : u;
  }), e), {});
}
function Be(s, n) {
  return typeof n.MouseEvent < "u" && s instanceof n.MouseEvent;
}
function Rt(s, n) {
  const e = {
    start: i,
    center: r,
    end: c
  };
  function i() {
    return 0;
  }
  function r(f) {
    return c(f) / 2;
  }
  function c(f) {
    return n - f;
  }
  function u(f, g) {
    return He(s) ? e[s](f) : s(n, f, g);
  }
  return {
    measure: u
  };
}
function ye() {
  let s = [];
  function n(r, c, u, m = {
    passive: !0
  }) {
    let f;
    if ("addEventListener" in r)
      r.addEventListener(c, u, m), f = () => r.removeEventListener(c, u, m);
    else {
      const g = r;
      g.addListener(u), f = () => g.removeListener(u);
    }
    return s.push(f), i;
  }
  function e() {
    s = s.filter((r) => r());
  }
  const i = {
    add: n,
    clear: e
  };
  return i;
}
function jt(s, n, e, i) {
  const r = ye(), c = 1e3 / 60;
  let u = null, m = 0, f = 0;
  function g() {
    r.add(s, "visibilitychange", () => {
      s.hidden && l();
    });
  }
  function v() {
    a(), r.clear();
  }
  function t(h) {
    if (!f) return;
    u || (u = h, e(), e());
    const d = h - u;
    for (u = h, m += d; m >= c; )
      e(), m -= c;
    const _ = m / c;
    i(_), f && (f = n.requestAnimationFrame(t));
  }
  function o() {
    f || (f = n.requestAnimationFrame(t));
  }
  function a() {
    n.cancelAnimationFrame(f), u = null, m = 0, f = 0;
  }
  function l() {
    u = null, m = 0;
  }
  return {
    init: g,
    destroy: v,
    start: o,
    stop: a,
    update: e,
    render: i
  };
}
function Wt(s, n) {
  const e = n === "rtl", i = s === "y", r = i ? "y" : "x", c = i ? "x" : "y", u = !i && e ? -1 : 1, m = v(), f = t();
  function g(l) {
    const {
      height: p,
      width: h
    } = l;
    return i ? p : h;
  }
  function v() {
    return i ? "top" : e ? "right" : "left";
  }
  function t() {
    return i ? "bottom" : e ? "left" : "right";
  }
  function o(l) {
    return l * u;
  }
  return {
    scroll: r,
    cross: c,
    startEdge: m,
    endEdge: f,
    measureSize: g,
    direction: o
  };
}
function ce(s = 0, n = 0) {
  const e = V(s - n);
  function i(g) {
    return g < s;
  }
  function r(g) {
    return g > n;
  }
  function c(g) {
    return i(g) || r(g);
  }
  function u(g) {
    return c(g) ? i(g) ? s : n : g;
  }
  function m(g) {
    return e ? g - e * Math.ceil((g - n) / e) : g;
  }
  return {
    length: e,
    max: n,
    min: s,
    constrain: u,
    reachedAny: c,
    reachedMax: r,
    reachedMin: i,
    removeOffset: m
  };
}
function yt(s, n, e) {
  const {
    constrain: i
  } = ce(0, s), r = s + 1;
  let c = u(n);
  function u(o) {
    return e ? V((r + o) % r) : i(o);
  }
  function m() {
    return c;
  }
  function f(o) {
    return c = u(o), t;
  }
  function g(o) {
    return v().set(m() + o);
  }
  function v() {
    return yt(s, m(), e);
  }
  const t = {
    get: m,
    set: f,
    add: g,
    clone: v
  };
  return t;
}
function zt(s, n, e, i, r, c, u, m, f, g, v, t, o, a, l, p, h, d, _) {
  const {
    cross: y,
    direction: S
  } = s, M = ["INPUT", "SELECT", "TEXTAREA"], x = {
    passive: !1
  }, A = ye(), L = ye(), w = ce(50, 225).constrain(a.measure(20)), H = {
    mouse: 300,
    touch: 400
  }, P = {
    mouse: 500,
    touch: 600
  }, G = l ? 43 : 25;
  let z = !1, b = 0, T = 0, E = !1, O = !1, I = !1, C = !1;
  function F(k) {
    if (!_) return;
    function B(Y) {
      (Le(_) || _(k, Y)) && fe(Y);
    }
    const R = n;
    A.add(R, "dragstart", (Y) => Y.preventDefault(), x).add(R, "touchmove", () => {
    }, x).add(R, "touchend", () => {
    }).add(R, "touchstart", B).add(R, "mousedown", B).add(R, "touchcancel", U).add(R, "contextmenu", U).add(R, "click", te, !0);
  }
  function q() {
    A.clear(), L.clear();
  }
  function $() {
    const k = C ? e : n;
    L.add(k, "touchmove", X, x).add(k, "touchend", U).add(k, "mousemove", X, x).add(k, "mouseup", U);
  }
  function j(k) {
    const B = k.nodeName || "";
    return M.includes(B);
  }
  function W() {
    return (l ? P : H)[C ? "mouse" : "touch"];
  }
  function ee(k, B) {
    const R = t.add(Re(k) * -1), Y = v.byDistance(k, !l).distance;
    return l || V(k) < w ? Y : h && B ? Y * 0.5 : v.byIndex(R.get(), 0).distance;
  }
  function fe(k) {
    const B = Be(k, i);
    C = B, I = l && B && !k.buttons && z, z = ge(r.get(), u.get()) >= 2, !(B && k.button !== 0) && (j(k.target) || (E = !0, c.pointerDown(k), g.useFriction(0).useDuration(0), r.set(u), $(), b = c.readPoint(k), T = c.readPoint(k, y), o.emit("pointerDown")));
  }
  function X(k) {
    if (!Be(k, i) && k.touches.length >= 2) return U(k);
    const R = c.readPoint(k), Y = c.readPoint(k, y), J = ge(R, b), ne = ge(Y, T);
    if (!O && !C && (!k.cancelable || (O = J > ne, !O)))
      return U(k);
    const re = c.pointerMove(k);
    J > p && (I = !0), g.useFriction(0.3).useDuration(0.75), m.start(), r.add(S(re)), k.preventDefault();
  }
  function U(k) {
    const R = v.byDistance(0, !1).index !== t.get(), Y = c.pointerUp(k) * W(), J = ee(S(Y), R), ne = $t(Y, J), re = G - 10 * ne, oe = d + ne / 50;
    O = !1, E = !1, L.clear(), g.useDuration(re).useFriction(oe), f.distance(J, !l), C = !1, o.emit("pointerUp");
  }
  function te(k) {
    I && (k.stopPropagation(), k.preventDefault(), I = !1);
  }
  function Q() {
    return E;
  }
  return {
    init: F,
    destroy: q,
    pointerDown: Q
  };
}
function Ut(s, n) {
  let i, r;
  function c(t) {
    return t.timeStamp;
  }
  function u(t, o) {
    const l = `client${(o || s.scroll) === "x" ? "X" : "Y"}`;
    return (Be(t, n) ? t : t.touches[0])[l];
  }
  function m(t) {
    return i = t, r = t, u(t);
  }
  function f(t) {
    const o = u(t) - u(r), a = c(t) - c(i) > 170;
    return r = t, a && (i = t), o;
  }
  function g(t) {
    if (!i || !r) return 0;
    const o = u(r) - u(i), a = c(t) - c(i), l = c(t) - c(r) > 170, p = o / a;
    return a && !l && V(p) > 0.1 ? p : 0;
  }
  return {
    pointerDown: m,
    pointerMove: f,
    pointerUp: g,
    readPoint: u
  };
}
function Yt() {
  function s(e) {
    const {
      offsetTop: i,
      offsetLeft: r,
      offsetWidth: c,
      offsetHeight: u
    } = e;
    return {
      top: i,
      right: r + c,
      bottom: i + u,
      left: r,
      width: c,
      height: u
    };
  }
  return {
    measure: s
  };
}
function Xt(s) {
  function n(i) {
    return s * (i / 100);
  }
  return {
    measure: n
  };
}
function Qt(s, n, e, i, r, c, u) {
  const m = [s].concat(i);
  let f, g, v = [], t = !1;
  function o(h) {
    return r.measureSize(u.measure(h));
  }
  function a(h) {
    if (!c) return;
    g = o(s), v = i.map(o);
    function d(_) {
      for (const y of _) {
        if (t) return;
        const S = y.target === s, M = i.indexOf(y.target), x = S ? g : v[M], A = o(S ? s : i[M]);
        if (V(A - x) >= 0.5) {
          h.reInit(), n.emit("resize");
          break;
        }
      }
    }
    f = new ResizeObserver((_) => {
      (Le(c) || c(h, _)) && d(_);
    }), e.requestAnimationFrame(() => {
      m.forEach((_) => f.observe(_));
    });
  }
  function l() {
    t = !0, f && f.disconnect();
  }
  return {
    init: a,
    destroy: l
  };
}
function Zt(s, n, e, i, r, c) {
  let u = 0, m = 0, f = r, g = c, v = s.get(), t = 0;
  function o() {
    const x = i.get() - s.get(), A = !f;
    let L = 0;
    return A ? (u = 0, e.set(i), s.set(i), L = x) : (e.set(s), u += x / f, u *= g, v += u, s.add(u), L = v - t), m = Re(L), t = v, M;
  }
  function a() {
    const x = i.get() - n.get();
    return V(x) < 1e-3;
  }
  function l() {
    return f;
  }
  function p() {
    return m;
  }
  function h() {
    return u;
  }
  function d() {
    return y(r);
  }
  function _() {
    return S(c);
  }
  function y(x) {
    return f = x, M;
  }
  function S(x) {
    return g = x, M;
  }
  const M = {
    direction: p,
    duration: l,
    velocity: h,
    seek: o,
    settled: a,
    useBaseFriction: _,
    useBaseDuration: d,
    useFriction: S,
    useDuration: y
  };
  return M;
}
function Kt(s, n, e, i, r) {
  const c = r.measure(10), u = r.measure(50), m = ce(0.1, 0.99);
  let f = !1;
  function g() {
    return !(f || !s.reachedAny(e.get()) || !s.reachedAny(n.get()));
  }
  function v(a) {
    if (!g()) return;
    const l = s.reachedMin(n.get()) ? "min" : "max", p = V(s[l] - n.get()), h = e.get() - n.get(), d = m.constrain(p / u);
    e.subtract(h * d), !a && V(h) < c && (e.set(s.constrain(e.get())), i.useDuration(25).useBaseFriction());
  }
  function t(a) {
    f = !a;
  }
  return {
    shouldConstrain: g,
    constrain: v,
    toggleActive: t
  };
}
function Jt(s, n, e, i, r) {
  const c = ce(-n + s, 0), u = t(), m = v(), f = o();
  function g(l, p) {
    return ge(l, p) <= 1;
  }
  function v() {
    const l = u[0], p = Z(u), h = u.lastIndexOf(l), d = u.indexOf(p) + 1;
    return ce(h, d);
  }
  function t() {
    return e.map((l, p) => {
      const {
        min: h,
        max: d
      } = c, _ = c.constrain(l), y = !p, S = je(e, p);
      return y ? d : S || g(h, _) ? h : g(d, _) ? d : _;
    }).map((l) => parseFloat(l.toFixed(3)));
  }
  function o() {
    if (n <= s + r) return [c.max];
    if (i === "keepSnaps") return u;
    const {
      min: l,
      max: p
    } = m;
    return u.slice(l, p);
  }
  return {
    snapsContained: f,
    scrollContainLimit: m
  };
}
function en(s, n, e) {
  const i = n[0], r = e ? i - s : Z(n);
  return {
    limit: ce(r, i)
  };
}
function tn(s, n, e, i) {
  const c = n.min + 0.1, u = n.max + 0.1, {
    reachedMin: m,
    reachedMax: f
  } = ce(c, u);
  function g(o) {
    return o === 1 ? f(e.get()) : o === -1 ? m(e.get()) : !1;
  }
  function v(o) {
    if (!g(o)) return;
    const a = s * (o * -1);
    i.forEach((l) => l.add(a));
  }
  return {
    loop: v
  };
}
function nn(s) {
  const {
    max: n,
    length: e
  } = s;
  function i(c) {
    const u = c - n;
    return e ? u / -e : 0;
  }
  return {
    get: i
  };
}
function on(s, n, e, i, r) {
  const {
    startEdge: c,
    endEdge: u
  } = s, {
    groupSlides: m
  } = r, f = t().map(n.measure), g = o(), v = a();
  function t() {
    return m(i).map((p) => Z(p)[u] - p[0][c]).map(V);
  }
  function o() {
    return i.map((p) => e[c] - p[c]).map((p) => -V(p));
  }
  function a() {
    return m(g).map((p) => p[0]).map((p, h) => p + f[h]);
  }
  return {
    snaps: g,
    snapsAligned: v
  };
}
function rn(s, n, e, i, r, c) {
  const {
    groupSlides: u
  } = r, {
    min: m,
    max: f
  } = i, g = v();
  function v() {
    const o = u(c), a = !s || n === "keepSnaps";
    return e.length === 1 ? [c] : a ? o : o.slice(m, f).map((l, p, h) => {
      const d = !p, _ = je(h, p);
      if (d) {
        const y = Z(h[0]) + 1;
        return st(y);
      }
      if (_) {
        const y = we(c) - Z(h)[0] + 1;
        return st(y, Z(h)[0]);
      }
      return l;
    });
  }
  return {
    slideRegistry: g
  };
}
function sn(s, n, e, i, r) {
  const {
    reachedAny: c,
    removeOffset: u,
    constrain: m
  } = i;
  function f(l) {
    return l.concat().sort((p, h) => V(p) - V(h))[0];
  }
  function g(l) {
    const p = s ? u(l) : m(l), h = n.map((_, y) => ({
      diff: v(_ - p, 0),
      index: y
    })).sort((_, y) => V(_.diff) - V(y.diff)), {
      index: d
    } = h[0];
    return {
      index: d,
      distance: p
    };
  }
  function v(l, p) {
    const h = [l, l + e, l - e];
    if (!s) return l;
    if (!p) return f(h);
    const d = h.filter((_) => Re(_) === p);
    return d.length ? f(d) : Z(h) - e;
  }
  function t(l, p) {
    const h = n[l] - r.get(), d = v(h, p);
    return {
      index: l,
      distance: d
    };
  }
  function o(l, p) {
    const h = r.get() + l, {
      index: d,
      distance: _
    } = g(h), y = !s && c(h);
    if (!p || y) return {
      index: d,
      distance: l
    };
    const S = n[d] - _, M = l + v(S, 0);
    return {
      index: d,
      distance: M
    };
  }
  return {
    byDistance: o,
    byIndex: t,
    shortcut: v
  };
}
function an(s, n, e, i, r, c, u) {
  function m(t) {
    const o = t.distance, a = t.index !== n.get();
    c.add(o), o && (i.duration() ? s.start() : (s.update(), s.render(1), s.update())), a && (e.set(n.get()), n.set(t.index), u.emit("select"));
  }
  function f(t, o) {
    const a = r.byDistance(t, o);
    m(a);
  }
  function g(t, o) {
    const a = n.clone().set(t), l = r.byIndex(a.get(), o);
    m(l);
  }
  return {
    distance: f,
    index: g
  };
}
function cn(s, n, e, i, r, c, u, m) {
  const f = {
    passive: !0,
    capture: !0
  };
  let g = 0;
  function v(a) {
    if (!m) return;
    function l(p) {
      if ((/* @__PURE__ */ new Date()).getTime() - g > 10) return;
      u.emit("slideFocusStart"), s.scrollLeft = 0;
      const _ = e.findIndex((y) => y.includes(p));
      Ge(_) && (r.useDuration(0), i.index(_, 0), u.emit("slideFocus"));
    }
    c.add(document, "keydown", t, !1), n.forEach((p, h) => {
      c.add(p, "focus", (d) => {
        (Le(m) || m(a, d)) && l(h);
      }, f);
    });
  }
  function t(a) {
    a.code === "Tab" && (g = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: v
  };
}
function me(s) {
  let n = s;
  function e() {
    return n;
  }
  function i(f) {
    n = u(f);
  }
  function r(f) {
    n += u(f);
  }
  function c(f) {
    n -= u(f);
  }
  function u(f) {
    return Ge(f) ? f : f.get();
  }
  return {
    get: e,
    set: i,
    add: r,
    subtract: c
  };
}
function bt(s, n) {
  const e = s.scroll === "x" ? u : m, i = n.style;
  let r = null, c = !1;
  function u(o) {
    return `translate3d(${o}px,0px,0px)`;
  }
  function m(o) {
    return `translate3d(0px,${o}px,0px)`;
  }
  function f(o) {
    if (c) return;
    const a = Gt(s.direction(o));
    a !== r && (i.transform = e(a), r = a);
  }
  function g(o) {
    c = !o;
  }
  function v() {
    c || (i.transform = "", n.getAttribute("style") || n.removeAttribute("style"));
  }
  return {
    clear: v,
    to: f,
    toggleActive: g
  };
}
function ln(s, n, e, i, r, c, u, m, f) {
  const v = _e(r), t = _e(r).reverse(), o = d().concat(_());
  function a(A, L) {
    return A.reduce((w, H) => w - r[H], L);
  }
  function l(A, L) {
    return A.reduce((w, H) => a(w, L) > 0 ? w.concat([H]) : w, []);
  }
  function p(A) {
    return c.map((L, w) => ({
      start: L - i[w] + 0.5 + A,
      end: L + n - 0.5 + A
    }));
  }
  function h(A, L, w) {
    const H = p(L);
    return A.map((P) => {
      const G = w ? 0 : -e, z = w ? e : 0, b = w ? "end" : "start", T = H[P][b];
      return {
        index: P,
        loopPoint: T,
        slideLocation: me(-1),
        translate: bt(s, f[P]),
        target: () => m.get() > T ? G : z
      };
    });
  }
  function d() {
    const A = u[0], L = l(t, A);
    return h(L, e, !1);
  }
  function _() {
    const A = n - u[0] - 1, L = l(v, A);
    return h(L, -e, !0);
  }
  function y() {
    return o.every(({
      index: A
    }) => {
      const L = v.filter((w) => w !== A);
      return a(L, n) <= 0.1;
    });
  }
  function S() {
    o.forEach((A) => {
      const {
        target: L,
        translate: w,
        slideLocation: H
      } = A, P = L();
      P !== H.get() && (w.to(P), H.set(P));
    });
  }
  function M() {
    o.forEach((A) => A.translate.clear());
  }
  return {
    canLoop: y,
    clear: M,
    loop: S,
    loopPoints: o
  };
}
function un(s, n, e) {
  let i, r = !1;
  function c(f) {
    if (!e) return;
    function g(v) {
      for (const t of v)
        if (t.type === "childList") {
          f.reInit(), n.emit("slidesChanged");
          break;
        }
    }
    i = new MutationObserver((v) => {
      r || (Le(e) || e(f, v)) && g(v);
    }), i.observe(s, {
      childList: !0
    });
  }
  function u() {
    i && i.disconnect(), r = !0;
  }
  return {
    init: c,
    destroy: u
  };
}
function dn(s, n, e, i) {
  const r = {};
  let c = null, u = null, m, f = !1;
  function g() {
    m = new IntersectionObserver((l) => {
      f || (l.forEach((p) => {
        const h = n.indexOf(p.target);
        r[h] = p;
      }), c = null, u = null, e.emit("slidesInView"));
    }, {
      root: s.parentElement,
      threshold: i
    }), n.forEach((l) => m.observe(l));
  }
  function v() {
    m && m.disconnect(), f = !0;
  }
  function t(l) {
    return ve(r).reduce((p, h) => {
      const d = parseInt(h), {
        isIntersecting: _
      } = r[d];
      return (l && _ || !l && !_) && p.push(d), p;
    }, []);
  }
  function o(l = !0) {
    if (l && c) return c;
    if (!l && u) return u;
    const p = t(l);
    return l && (c = p), l || (u = p), p;
  }
  return {
    init: g,
    destroy: v,
    get: o
  };
}
function fn(s, n, e, i, r, c) {
  const {
    measureSize: u,
    startEdge: m,
    endEdge: f
  } = s, g = e[0] && r, v = l(), t = p(), o = e.map(u), a = h();
  function l() {
    if (!g) return 0;
    const _ = e[0];
    return V(n[m] - _[m]);
  }
  function p() {
    if (!g) return 0;
    const _ = c.getComputedStyle(Z(i));
    return parseFloat(_.getPropertyValue(`margin-${f}`));
  }
  function h() {
    return e.map((_, y, S) => {
      const M = !y, x = je(S, y);
      return M ? o[y] + v : x ? o[y] + t : S[y + 1][m] - _[m];
    }).map(V);
  }
  return {
    slideSizes: o,
    slideSizesWithGaps: a,
    startGap: v,
    endGap: t
  };
}
function pn(s, n, e, i, r, c, u, m, f) {
  const {
    startEdge: g,
    endEdge: v,
    direction: t
  } = s, o = Ge(e);
  function a(d, _) {
    return _e(d).filter((y) => y % _ === 0).map((y) => d.slice(y, y + _));
  }
  function l(d) {
    return d.length ? _e(d).reduce((_, y, S) => {
      const M = Z(_) || 0, x = M === 0, A = y === we(d), L = r[g] - c[M][g], w = r[g] - c[y][v], H = !i && x ? t(u) : 0, P = !i && A ? t(m) : 0, G = V(w - P - (L + H));
      return S && G > n + f && _.push(y), A && _.push(d.length), _;
    }, []).map((_, y, S) => {
      const M = Math.max(S[y - 1] || 0);
      return d.slice(M, _);
    }) : [];
  }
  function p(d) {
    return o ? a(d, e) : l(d);
  }
  return {
    groupSlides: p
  };
}
function hn(s, n, e, i, r, c, u) {
  const {
    align: m,
    axis: f,
    direction: g,
    startIndex: v,
    loop: t,
    duration: o,
    dragFree: a,
    dragThreshold: l,
    inViewThreshold: p,
    slidesToScroll: h,
    skipSnaps: d,
    containScroll: _,
    watchResize: y,
    watchSlides: S,
    watchDrag: M,
    watchFocus: x
  } = c, A = 2, L = Yt(), w = L.measure(n), H = e.map(L.measure), P = Wt(f, g), G = P.measureSize(w), z = Xt(G), b = Rt(m, G), T = !t && !!_, E = t || !!_, {
    slideSizes: O,
    slideSizesWithGaps: I,
    startGap: C,
    endGap: F
  } = fn(P, w, H, e, E, r), q = pn(P, G, h, t, w, H, C, F, A), {
    snaps: $,
    snapsAligned: j
  } = on(P, b, w, H, q), W = -Z($) + Z(I), {
    snapsContained: ee,
    scrollContainLimit: fe
  } = Jt(G, W, j, _, A), X = T ? ee : j, {
    limit: U
  } = en(W, X, t), te = yt(we(X), v, t), Q = te.clone(), N = _e(e), k = ({
    dragHandler: ue,
    scrollBody: Oe,
    scrollBounds: Ce,
    options: {
      loop: ke
    }
  }) => {
    ke || Ce.constrain(ue.pointerDown()), Oe.seek();
  }, B = ({
    scrollBody: ue,
    translate: Oe,
    location: Ce,
    offsetLocation: ke,
    previousLocation: Ct,
    scrollLooper: Ft,
    slideLooper: Dt,
    dragHandler: qt,
    animation: Ht,
    eventHandler: Je,
    scrollBounds: Bt,
    options: {
      loop: et
    }
  }, tt) => {
    const nt = ue.settled(), Nt = !Bt.shouldConstrain(), ot = et ? nt : nt && Nt, it = ot && !qt.pointerDown();
    it && Ht.stop();
    const Vt = Ce.get() * tt + Ct.get() * (1 - tt);
    ke.set(Vt), et && (Ft.loop(ue.direction()), Dt.loop()), Oe.to(ke.get()), it && Je.emit("settle"), ot || Je.emit("scroll");
  }, R = jt(i, r, () => k(Pe), (ue) => B(Pe, ue)), Y = 0.68, J = X[te.get()], ne = me(J), re = me(J), oe = me(J), se = me(J), pe = Zt(ne, oe, re, se, o, Y), Ee = sn(t, X, W, U, se), Ie = an(R, te, Q, pe, Ee, se, u), Qe = nn(U), Ze = ye(), Pt = dn(n, e, u, p), {
    slideRegistry: Ke
  } = rn(T, _, X, fe, q, N), Ot = cn(s, e, Ke, Ie, pe, Ze, u, x), Pe = {
    ownerDocument: i,
    ownerWindow: r,
    eventHandler: u,
    containerRect: w,
    slideRects: H,
    animation: R,
    axis: P,
    dragHandler: zt(P, s, i, r, se, Ut(P, r), ne, R, Ie, pe, Ee, te, u, z, a, l, d, Y, M),
    eventStore: Ze,
    percentOfView: z,
    index: te,
    indexPrevious: Q,
    limit: U,
    location: ne,
    offsetLocation: oe,
    previousLocation: re,
    options: c,
    resizeHandler: Qt(n, u, r, e, P, y, L),
    scrollBody: pe,
    scrollBounds: Kt(U, oe, se, pe, z),
    scrollLooper: tn(W, U, oe, [ne, oe, re, se]),
    scrollProgress: Qe,
    scrollSnapList: X.map(Qe.get),
    scrollSnaps: X,
    scrollTarget: Ee,
    scrollTo: Ie,
    slideLooper: ln(P, G, W, O, I, $, X, oe, e),
    slideFocus: Ot,
    slidesHandler: un(n, u, S),
    slidesInView: Pt,
    slideIndexes: N,
    slideRegistry: Ke,
    slidesToScroll: q,
    target: se,
    translate: bt(P, n)
  };
  return Pe;
}
function mn() {
  let s = {}, n;
  function e(g) {
    n = g;
  }
  function i(g) {
    return s[g] || [];
  }
  function r(g) {
    return i(g).forEach((v) => v(n, g)), f;
  }
  function c(g, v) {
    return s[g] = i(g).concat([v]), f;
  }
  function u(g, v) {
    return s[g] = i(g).filter((t) => t !== v), f;
  }
  function m() {
    s = {};
  }
  const f = {
    init: e,
    emit: r,
    off: u,
    on: c,
    clear: m
  };
  return f;
}
const gn = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function _n(s) {
  function n(c, u) {
    return vt(c, u || {});
  }
  function e(c) {
    const u = c.breakpoints || {}, m = ve(u).filter((f) => s.matchMedia(f).matches).map((f) => u[f]).reduce((f, g) => n(f, g), {});
    return n(c, m);
  }
  function i(c) {
    return c.map((u) => ve(u.breakpoints || {})).reduce((u, m) => u.concat(m), []).map(s.matchMedia);
  }
  return {
    mergeOptions: n,
    optionsAtMedia: e,
    optionsMediaQueries: i
  };
}
function vn(s) {
  let n = [];
  function e(c, u) {
    return n = u.filter(({
      options: m
    }) => s.optionsAtMedia(m).active !== !1), n.forEach((m) => m.init(c, s)), u.reduce((m, f) => Object.assign(m, {
      [f.name]: f
    }), {});
  }
  function i() {
    n = n.filter((c) => c.destroy());
  }
  return {
    init: e,
    destroy: i
  };
}
function We(s, n, e) {
  const i = s.ownerDocument, r = i.defaultView, c = _n(r), u = vn(c), m = ye(), f = mn(), {
    mergeOptions: g,
    optionsAtMedia: v,
    optionsMediaQueries: t
  } = c, {
    on: o,
    off: a,
    emit: l
  } = f, p = P;
  let h = !1, d, _ = g(gn, We.globalOptions), y = g(_), S = [], M, x, A;
  function L() {
    const {
      container: N,
      slides: k
    } = y;
    x = (He(N) ? s.querySelector(N) : N) || s.children[0];
    const R = He(k) ? x.querySelectorAll(k) : k;
    A = [].slice.call(R || x.children);
  }
  function w(N) {
    const k = hn(s, x, A, i, r, N, f);
    if (N.loop && !k.slideLooper.canLoop()) {
      const B = Object.assign({}, N, {
        loop: !1
      });
      return w(B);
    }
    return k;
  }
  function H(N, k) {
    h || (_ = g(_, N), y = v(_), S = k || S, L(), d = w(y), t([_, ...S.map(({
      options: B
    }) => B)]).forEach((B) => m.add(B, "change", P)), y.active && (d.translate.to(d.location.get()), d.animation.init(), d.slidesInView.init(), d.slideFocus.init(Q), d.eventHandler.init(Q), d.resizeHandler.init(Q), d.slidesHandler.init(Q), d.options.loop && d.slideLooper.loop(), x.offsetParent && A.length && d.dragHandler.init(Q), M = u.init(Q, S)));
  }
  function P(N, k) {
    const B = q();
    G(), H(g({
      startIndex: B
    }, N), k), f.emit("reInit");
  }
  function G() {
    d.dragHandler.destroy(), d.eventStore.clear(), d.translate.clear(), d.slideLooper.clear(), d.resizeHandler.destroy(), d.slidesHandler.destroy(), d.slidesInView.destroy(), d.animation.destroy(), u.destroy(), m.clear();
  }
  function z() {
    h || (h = !0, m.clear(), G(), f.emit("destroy"), f.clear());
  }
  function b(N, k, B) {
    !y.active || h || (d.scrollBody.useBaseFriction().useDuration(k === !0 ? 0 : y.duration), d.scrollTo.index(N, B || 0));
  }
  function T(N) {
    const k = d.index.add(1).get();
    b(k, N, -1);
  }
  function E(N) {
    const k = d.index.add(-1).get();
    b(k, N, 1);
  }
  function O() {
    return d.index.add(1).get() !== q();
  }
  function I() {
    return d.index.add(-1).get() !== q();
  }
  function C() {
    return d.scrollSnapList;
  }
  function F() {
    return d.scrollProgress.get(d.offsetLocation.get());
  }
  function q() {
    return d.index.get();
  }
  function $() {
    return d.indexPrevious.get();
  }
  function j() {
    return d.slidesInView.get();
  }
  function W() {
    return d.slidesInView.get(!1);
  }
  function ee() {
    return M;
  }
  function fe() {
    return d;
  }
  function X() {
    return s;
  }
  function U() {
    return x;
  }
  function te() {
    return A;
  }
  const Q = {
    canScrollNext: O,
    canScrollPrev: I,
    containerNode: U,
    internalEngine: fe,
    destroy: z,
    off: a,
    on: o,
    emit: l,
    plugins: ee,
    previousScrollSnap: $,
    reInit: p,
    rootNode: X,
    scrollNext: T,
    scrollPrev: E,
    scrollProgress: F,
    scrollSnapList: C,
    scrollTo: b,
    selectedScrollSnap: q,
    slideNodes: te,
    slidesInView: j,
    slidesNotInView: W
  };
  return H(n, e), setTimeout(() => f.emit("init"), 0), Q;
}
We.globalOptions = void 0;
const yn = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null
};
function bn(s, n) {
  const e = s.scrollSnapList();
  return typeof n == "number" ? e.map(() => n) : n(e, s);
}
function wn(s, n) {
  const e = s.rootNode();
  return n && n(e) || e;
}
function ze(s = {}) {
  let n, e, i, r, c = null, u = 0, m = !1, f = !1, g = !1, v = !1;
  function t(b, T) {
    e = b;
    const {
      mergeOptions: E,
      optionsAtMedia: O
    } = T, I = E(yn, ze.globalOptions), C = E(I, s);
    if (n = O(C), e.scrollSnapList().length <= 1) return;
    v = n.jump, i = !1, r = bn(e, n.delay);
    const {
      eventStore: F,
      ownerDocument: q
    } = e.internalEngine(), $ = !!e.internalEngine().options.watchDrag, j = wn(e, n.rootNode);
    F.add(q, "visibilitychange", d), $ && e.on("pointerDown", y), $ && !n.stopOnInteraction && e.on("pointerUp", S), n.stopOnMouseEnter && F.add(j, "mouseenter", M), n.stopOnMouseEnter && !n.stopOnInteraction && F.add(j, "mouseleave", x), n.stopOnFocusIn && e.on("slideFocusStart", h), n.stopOnFocusIn && !n.stopOnInteraction && F.add(e.containerNode(), "focusout", p), n.playOnInit && p();
  }
  function o() {
    e.off("pointerDown", y).off("pointerUp", S).off("slideFocusStart", h), h(), i = !0, m = !1;
  }
  function a() {
    const {
      ownerWindow: b
    } = e.internalEngine();
    b.clearTimeout(u), u = b.setTimeout(P, r[e.selectedScrollSnap()]), c = (/* @__PURE__ */ new Date()).getTime(), e.emit("autoplay:timerset");
  }
  function l() {
    const {
      ownerWindow: b
    } = e.internalEngine();
    b.clearTimeout(u), u = 0, c = null, e.emit("autoplay:timerstopped");
  }
  function p() {
    if (!i) {
      if (_()) {
        g = !0;
        return;
      }
      m || e.emit("autoplay:play"), a(), m = !0;
    }
  }
  function h() {
    i || (m && e.emit("autoplay:stop"), l(), m = !1);
  }
  function d() {
    if (_())
      return g = m, h();
    g && p();
  }
  function _() {
    const {
      ownerDocument: b
    } = e.internalEngine();
    return b.visibilityState === "hidden";
  }
  function y() {
    f || h();
  }
  function S() {
    f || p();
  }
  function M() {
    f = !0, h();
  }
  function x() {
    f = !1, p();
  }
  function A(b) {
    typeof b < "u" && (v = b), p();
  }
  function L() {
    m && h();
  }
  function w() {
    m && p();
  }
  function H() {
    return m;
  }
  function P() {
    const {
      index: b
    } = e.internalEngine(), T = b.clone().add(1).get(), E = e.scrollSnapList().length - 1, O = n.stopOnLastSnap && T === E;
    if (e.canScrollNext() ? e.scrollNext(v) : e.scrollTo(0, v), e.emit("autoplay:select"), O) return h();
    p();
  }
  function G() {
    if (!c) return null;
    const b = r[e.selectedScrollSnap()], T = (/* @__PURE__ */ new Date()).getTime() - c;
    return b - T;
  }
  return {
    name: "autoplay",
    options: s,
    init: t,
    destroy: o,
    play: A,
    stop: L,
    reset: w,
    isPlaying: H,
    timeUntilNext: G
  };
}
ze.globalOptions = void 0;
function at(s, n, e) {
  return Math.min(Math.max(s, n), e);
}
function Fe(s) {
  return typeof s == "number" && !isNaN(s);
}
function wt(s = {}) {
  let r, c = [], u, m = 0, f = 0, g = 0, v = !1, t, o;
  function a(b) {
    r = b;
    const T = r.selectedScrollSnap(), {
      scrollBody: E,
      containerRect: O,
      axis: I
    } = r.internalEngine(), C = I.measureSize(O);
    u = at(C * 0.75, 200, 500), v = !1, c = r.scrollSnapList().map((F, q) => q === T ? 1 : 0), t = E.settled, o = r.scrollProgress, E.settled = P, r.scrollProgress = G, r.on("select", _).on("slideFocus", p).on("pointerDown", d).on("pointerUp", h), S(), p();
  }
  function l() {
    const {
      scrollBody: b
    } = r.internalEngine();
    b.settled = t, r.scrollProgress = o, r.off("select", _).off("slideFocus", p).off("pointerDown", d).off("pointerUp", h), r.slideNodes().forEach((T) => {
      const E = T.style;
      E.opacity = "", E.transform = "", E.pointerEvents = "", T.getAttribute("style") || T.removeAttribute("style");
    });
  }
  function p() {
    const b = r.selectedScrollSnap();
    x(b, 1);
  }
  function h() {
    v = !1;
  }
  function d() {
    v = !1, m = 0, f = 0;
  }
  function _() {
    const b = r.internalEngine().scrollBody.duration();
    f = b ? 0 : 1, v = !0, b || p();
  }
  function y(b) {
    const {
      axis: T
    } = r.internalEngine();
    return `translate${T.scroll.toUpperCase()}(${T.direction(b)}px)`;
  }
  function S() {
    const {
      translate: b,
      slideLooper: T
    } = r.internalEngine();
    b.clear(), b.toggleActive(!1), T.loopPoints.forEach(({
      translate: E
    }) => {
      E.clear(), E.toggleActive(!1);
    });
  }
  function M(b) {
    const {
      scrollSnaps: T,
      location: E,
      target: O
    } = r.internalEngine();
    !Fe(b) || c[b] < 0.5 || (E.set(T[b]), O.set(E));
  }
  function x(b, T) {
    r.scrollSnapList().forEach((O, I) => {
      const C = Math.abs(T), F = c[I], q = I === b, $ = q ? F + C : F - C, j = at($, 0, 1);
      c[I] = j;
      const W = q && v, ee = r.previousScrollSnap();
      W && (c[ee] = 1 - j), q && L(b, j), A(I);
    });
  }
  function A(b) {
    const T = r.internalEngine().slideRegistry[b], {
      scrollSnaps: E,
      containerRect: O
    } = r.internalEngine(), I = c[b];
    T.forEach((C) => {
      const F = r.slideNodes()[C].style, q = parseFloat(I.toFixed(2)), $ = q > 0, j = $ ? E[b] : O.width + 2, W = y(j);
      $ && (F.transform = W), F.opacity = q.toString(), F.pointerEvents = I > 0.5 ? "auto" : "none", $ || (F.transform = W);
    });
  }
  function L(b, T) {
    const {
      index: E,
      dragHandler: O,
      scrollSnaps: I
    } = r.internalEngine(), C = O.pointerDown(), F = 1 / (I.length - 1);
    let q = b, $ = C ? r.selectedScrollSnap() : r.previousScrollSnap();
    if (C && q === $) {
      const ee = Math.sign(m) * -1;
      q = $, $ = E.clone().set($).add(ee).get();
    }
    const j = $ * F, W = (q - $) * F;
    g = j + W * T;
  }
  function w() {
    const {
      dragHandler: b,
      index: T,
      scrollBody: E
    } = r.internalEngine(), O = r.selectedScrollSnap();
    if (!b.pointerDown()) return O;
    const I = Math.sign(E.velocity()), C = Math.sign(m), F = T.clone().set(O).add(I * -1).get();
    return !I || !C ? null : C === I ? F : O;
  }
  function H(b) {
    const {
      dragHandler: T,
      scrollBody: E
    } = b.internalEngine(), O = T.pointerDown(), I = E.velocity(), C = E.duration(), F = w(), q = !Fe(F);
    if (O) {
      if (!I) return;
      m += I, f = Math.abs(I / u), M(F);
    }
    if (!O) {
      if (!C || q) return;
      f += (1 - c[F]) / C, f *= 0.68;
    }
    q || x(F, f);
  }
  function P() {
    const {
      target: b,
      location: T
    } = r.internalEngine(), E = b.get() - T.get(), O = Math.abs(E) >= 1, I = w(), C = !Fe(I);
    return H(r), C || O ? !1 : c[I] > 0.999;
  }
  function G() {
    return g;
  }
  return {
    name: "fade",
    options: s,
    init: a,
    destroy: l
  };
}
wt.globalOptions = void 0;
class kn {
  constructor(n, e, i) {
    this.config = n, this.onFallback = i, this.settings = e, this.mode = e.backgroundMode, this.isMobile = matchMedia(`(max-width: ${n.mobile.breakpoint - 1}px)`).matches, this.reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches, this.root.id = "ff-media-background", this.root.setAttribute("aria-hidden", "true"), this.viewport.className = "ff-wallpaper-viewport", this.container.className = "ff-wallpaper-container", this.overlay.className = "ff-background-overlay", this.overlay.style.setProperty("--ff-overlay", String(e.overlayOpacity)), this.viewport.append(this.container), this.root.append(this.viewport, this.overlay), document.body.prepend(this.root), this.createSlides(), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("scroll", this.onScroll, { passive: !0 }), window.addEventListener("resize", this.onScroll, { passive: !0 }), this.applyMode(this.allowedMode(this.mode)), this.updateRecede();
  }
  root = document.createElement("div");
  viewport = document.createElement("div");
  container = document.createElement("div");
  overlay = document.createElement("div");
  embla;
  autoplay;
  video;
  hls;
  loadTimer;
  mode;
  settings;
  isMobile;
  reducedMotion;
  onVisibility = () => this.handleVisibility();
  onScroll = () => this.scheduleRecede();
  recedeFrame;
  recede = -1;
  updateSettings(n) {
    const e = n.carousel !== this.settings.carousel;
    this.settings = n, this.overlay.style.setProperty("--ff-overlay", String(n.overlayOpacity)), e && (this.embla?.destroy(), this.container.replaceChildren(), this.createSlides()), this.applyMode(this.allowedMode(n.backgroundMode));
  }
  getMode() {
    return this.mode;
  }
  destroy() {
    document.removeEventListener("visibilitychange", this.onVisibility), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onScroll), this.recedeFrame !== void 0 && cancelAnimationFrame(this.recedeFrame), this.destroyVideo(), this.embla?.destroy(), this.root.remove();
  }
  allowedMode(n) {
    return Sn(n, {
      enabled: this.config.background.video.enabled,
      userEnabled: this.settings.video,
      mobileBlocked: this.isMobile && !this.config.mobile.video,
      reducedMotion: this.reducedMotion
    });
  }
  createSlides() {
    const e = this.reducedMotion || this.isMobile && !this.config.mobile.carousel ? this.config.background.wallpapers.slice(0, 1) : this.config.background.wallpapers;
    for (const c of e) {
      const u = document.createElement("div");
      u.className = "ff-wallpaper-slide";
      const m = document.createElement("img");
      m.src = c.src, m.alt = c.alt, m.decoding = "async", m.addEventListener("error", () => u.classList.add("is-failed"), { once: !0 }), u.append(m), this.container.append(u);
    }
    const i = this.settings.carousel && !this.reducedMotion && (!this.isMobile || this.config.mobile.carousel), r = [wt()];
    i ? (this.autoplay = ze({ delay: this.config.background.intervalMs, stopOnInteraction: !1 }), r.push(this.autoplay)) : this.autoplay = void 0, this.embla = We(this.viewport, { loop: !0 }, r);
  }
  applyMode(n) {
    this.mode = n, this.root.dataset.mode = n, n === "video" ? this.createVideo() : this.destroyVideo();
  }
  createVideo() {
    if (this.video) return;
    const n = document.createElement("video");
    n.className = "ff-background-video", n.muted = !0, n.loop = !0, n.autoplay = !0, n.playsInline = !0, n.preload = "metadata", n.poster = this.config.background.video.poster;
    const e = this.config.background.video.sources.find(
      (i) => i.src.toLowerCase().includes(".m3u8")
    );
    if (e) this.attachHls(n, e.src);
    else
      for (const i of this.config.background.video.sources) {
        const r = document.createElement("source");
        r.src = i.src, r.type = i.type, n.append(r);
      }
    n.addEventListener("playing", () => this.clearTimer(), { once: !0 }), n.addEventListener("error", () => this.fallbackToWallpaper(), { once: !0 }), this.loadTimer = window.setTimeout(
      () => this.fallbackToWallpaper(),
      this.config.background.video.timeoutMs
    ), this.root.insertBefore(n, this.overlay), this.video = n, n.play().catch(() => this.fallbackToWallpaper());
  }
  async attachHls(n, e) {
    if (n.canPlayType("application/vnd.apple.mpegurl")) {
      n.src = e;
      return;
    }
    const { default: i } = await import("./hls-DoAwJBhU.js");
    if (!i.isSupported() || this.video !== n) return this.fallbackToWallpaper();
    const r = new i({ enableWorker: !0 });
    r.loadSource(e), r.attachMedia(n), r.on(i.Events.ERROR, (c, u) => {
      u.fatal && this.fallbackToWallpaper();
    }), this.hls = r;
  }
  fallbackToWallpaper() {
    this.applyMode("wallpaper"), this.onFallback();
  }
  destroyVideo() {
    this.clearTimer(), this.hls?.destroy(), this.hls = void 0, this.video && (this.video.pause(), this.video.removeAttribute("src"), this.video.querySelectorAll("source").forEach((n) => n.remove()), this.video.load(), this.video.remove(), this.video = void 0);
  }
  clearTimer() {
    this.loadTimer !== void 0 && window.clearTimeout(this.loadTimer), this.loadTimer = void 0;
  }
  scheduleRecede() {
    this.recedeFrame === void 0 && (this.recedeFrame = requestAnimationFrame(() => {
      this.recedeFrame = void 0, this.updateRecede();
    }));
  }
  // Set on the stage root rather than :root so a scroll frame only restyles the stage.
  updateRecede() {
    const n = document.querySelector("#page-header, #home_top"), e = An(window.scrollY, n?.offsetHeight || window.innerHeight);
    e !== this.recede && (this.recede = e, this.root.style.setProperty("--recede", String(e)));
  }
  handleVisibility() {
    document.hidden ? this.autoplay?.stop() : this.autoplay?.play(), this.video && (document.hidden ? this.video.pause() : this.mode === "video" && this.video.play().catch(() => this.fallbackToWallpaper()));
  }
}
function Sn(s, n) {
  return s === "video" && (!n.enabled || !n.userEnabled || n.mobileBlocked || n.reducedMotion) ? "wallpaper" : s;
}
function An(s, n) {
  const e = Math.min(Math.max(s / Math.max(n, 1), 0), 1);
  return Math.round(e * 100) / 100;
}
const kt = "blog-experience:v1", St = "blog-music:v1", At = "blog-locale:v1";
function Tn(s) {
  try {
    const n = JSON.parse(localStorage.getItem(kt) ?? "null");
    return !n || n.schema !== 1 ? s : {
      ...s,
      ...n,
      schema: 1,
      overlayOpacity: Tt(Number(n.overlayOpacity ?? s.overlayOpacity), 0, 0.85)
    };
  } catch {
    return s;
  }
}
function xn(s) {
  try {
    localStorage.setItem(kt, JSON.stringify(s));
  } catch {
  }
}
function Ln(s, n) {
  try {
    const e = JSON.parse(localStorage.getItem(St) ?? "null");
    return {
      trackId: e?.trackId,
      volume: Tt(Number(e?.volume ?? s), 0, 1),
      order: e?.order ?? n,
      seek: Math.max(0, Number(e?.seek ?? 0))
    };
  } catch {
    return { volume: s, order: n, seek: 0 };
  }
}
function Mn(s) {
  try {
    localStorage.setItem(St, JSON.stringify(s));
  } catch {
  }
}
function En() {
  try {
    return localStorage.getItem(At) ?? void 0;
  } catch {
    return;
  }
}
function In(s) {
  try {
    localStorage.setItem(At, s);
  } catch {
  }
}
function Tt(s, n, e) {
  return Math.min(e, Math.max(n, s));
}
const Pn = "takina-live2d-position-v1";
function On() {
  try {
    localStorage.removeItem(Pn);
  } catch {
  }
}
const Me = "en", de = {
  "media.play": "Play",
  "media.pause": "Pause",
  "media.openPlayer": "Open music player",
  "media.closePlayer": "Close music player",
  "bento.label": "Highlights",
  "bento.featured.eyebrow": "Featured Project",
  "bento.featured.title": "High-Performance Self-Hosted Speedtest Architecture",
  "bento.featured.description": "Browser-side measurement in Web Workers, HAProxy TLS termination and Redis rate limiting, tuned for gigabit local links.",
  "bento.featured.technologies": "Technologies",
  "bento.featured.latencyChart": "Latency trending down from {from} to {to} milliseconds",
  "bento.featured.latencyUnit": "ms p50",
  "bento.featured.throughputUnit": "Mbps",
  "bento.featured.cta": "Read the architecture",
  "bento.bio.eyebrow": "About Me",
  "bento.bio.name": "Takina",
  "bento.bio.tagline": "Developer · Tinkerer",
  "bento.bio.description": "Writing down things I've built, broken, and figured out along the way.",
  "bento.bio.focusLabel": "Interests",
  "bento.bio.focus.distributedSystems": "Systems & Infra",
  "bento.bio.focus.frontendCraft": "Web & UI",
  "bento.bio.focus.webPerformance": "Self-Hosting",
  "bento.audio.eyebrow": "Now Playing",
  "bento.audio.idleTitle": "Ambient soundtrack",
  "bento.audio.playing": "Playing",
  "bento.audio.paused": "Paused",
  "bento.audio.unavailable": "Audio unavailable",
  "bento.audio.player": "Player",
  "bento.writing.eyebrow": "Recent Writing",
  "bento.writing.archive": "Archive →",
  "bento.writing.epigraph": "“Make it work, make it right, make it fast.”",
  "bento.writing.epigraphAuthor": "Kent Beck",
  "bento.writing.browseAll": "Browse all articles",
  "bento.writing.untitled": "Untitled",
  "dock.label": "Quick controls",
  "dock.background.label": "Video background",
  "dock.background.video": "Video background (switch to wallpaper)",
  "dock.background.wallpaper": "Wallpaper background (switch to video)",
  "dock.background.unavailable": "Video background unavailable",
  "dock.theme.label": "Dark theme",
  "dock.theme.toLight": "Switch to light theme",
  "dock.theme.toDark": "Switch to dark theme",
  "dock.top": "Back to top",
  "dock.companion.label": "Takina companion",
  "dock.companion.call": "Call Takina",
  "dock.companion.dismiss": "Dismiss Takina",
  "music.title": "Music Player",
  "music.hint": "Click to play",
  "music.ready": "Ready",
  "music.instrumental": "Instrumental",
  "music.coverAlt": "Current Track Cover",
  "music.togglePlaylist": "Toggle playlist",
  "music.progress": "Track progress",
  "music.previous": "Previous Track",
  "music.next": "Next Track",
  "music.volume": "Volume",
  "music.playlist": "Playlist",
  "music.order.toggle": "Toggle Playback Mode",
  "music.order.current": "Playback Mode: {mode}",
  "music.order.list": "list",
  "music.order.loop": "loop",
  "music.order.single": "single",
  "music.order.random": "random",
  "settings.trigger": "Visual & Motion Settings",
  "settings.title": "Atmosphere & Motion",
  "settings.video": "Background Video",
  "settings.carousel": "Wallpaper Carousel",
  "settings.effects": "Ambient Effects",
  "settings.live2d": "Companion Widget (Off by default)",
  "settings.overlay": "Overlay Dimming",
  "settings.mode.wallpaper": "Wallpaper",
  "settings.mode.video": "Video",
  "settings.language": "Language",
  "live2d.dragTitle": "Drag companion",
  "live2d.canvasLabel": "Companion widget: drag to reposition, hover or focus to toggle expression",
  "live2d.loadFailed": "Live2D failed to load, downgraded gracefully.",
  "live2d.unavailable": "Companion widget unavailable, other features unaffected.",
  "quotes.source": "《{work}》 · {character}",
  "quotes.sourceTitle": "View quote source and original work",
  "app.initFailed": "Dynamic experience failed to initialize, running in fallback mode.",
  "nav.home": "Home",
  "nav.articles": "Articles",
  "nav.archives": "Archives",
  "nav.categories": "Categories",
  "nav.tags": "Tags",
  "nav.community": "Community",
  "nav.links": "Links",
  "nav.profile": "Profile",
  "nav.music": "Music",
  "nav.about": "About",
  "nav.backHome": "Back to home",
  "nav.backToTop": "Back to top",
  "nav.randomPost": "Random post",
  "nav.search": "Search",
  "sidebar.function": "Function",
  "sidebar.displayMode": "Display mode",
  "sidebar.tags": "Tags",
  "categoryBar.featured": "Featured",
  "categoryBar.featuredTip": "View all recommended posts",
  "categoryBar.allPosts": "All posts",
  "categoryBar.allPostsTip": "View all posts",
  "categoryBar.more": "More",
  "categoryBar.moreTip": "View all categories",
  "categoryBar.categoryTip": "View posts in {name}",
  "aside.greeting.morning": "✨ Good morning, ready for a new day",
  "aside.greeting.noon": "🍲 Lunch break",
  "aside.greeting.afternoon": "🌞 Good afternoon",
  "aside.greeting.night": "🌙 Welcome back into the night",
  "aside.greeting.goodnight": "Good night 😴",
  "aside.greeting.longTimeNoSee": "Long time no see, {name}",
  "aside.greeting.welcomeBack": "Welcome back, {name}",
  "aside.avatarAlt": "Avatar",
  "aside.bioDescription": "A personal space for code, anime, and daily life.",
  "aside.bioTagline": "Building tools, breaking things, and taking notes.",
  "aside.recentPosts": "Recent posts",
  "aside.postsCount": "Posts:",
  "aside.runtime": "Runtime:",
  "aside.lastUpdate": "Last update:",
  "aside.daysUnit": "{count} days",
  "time.justNow": "now",
  "time.minutesAgo": "{count} minutes ago",
  "time.hoursAgo": "{count} hours ago",
  "time.daysAgo": "{count} days ago",
  "time.monthsAgo": "{count} months ago",
  "post.new": "New",
  "post.unread": "Unread",
  "footer.navigation": "Navigation",
  "footer.resources": "Resources",
  "footer.archives": "Archives",
  "footer.tags": "Tags",
  "footer.about": "About",
  "footer.credits": "Credits",
  "footer.copyright": "© {years} By",
  "footer.framework": "Framework: {name}",
  "footer.theme": "Theme: {name}",
  "visits.label": "Site visits",
  "visits.today": "Today’s visits",
  "visits.total": "Total visits",
  "visits.unit": "views",
  "visits.loading": "Loading visit counts…",
  "visits.ready": "Site-wide page views · Busuanzi",
  "visits.local": "Local previews are not counted. Visit counts appear on the public domain.",
  "visits.unavailable": "Visit counts are temporarily unavailable.",
  "pages.comments": "Comment on the server edition"
}, Cn = /^[a-z]{2,3}(-[a-z0-9]{2,8})*$/i, K = /* @__PURE__ */ new Map([[Me, { label: "English", messages: {} }]]), Ne = /* @__PURE__ */ new Set(), Ve = /* @__PURE__ */ new Set();
let ae = Me, ct = 0;
function Ue(s) {
  const n = s.trim().replace(/_/g, "-");
  if (!Cn.test(n)) throw new TypeError(`Invalid locale code: "${s}"`);
  return n.split("-").map((e, i) => i === 0 ? e.toLowerCase() : e.length === 2 ? e.toUpperCase() : e.length === 4 ? e[0].toUpperCase() + e.slice(1).toLowerCase() : e.toLowerCase()).join("-");
}
function xt(s) {
  const n = {};
  if (!s || typeof s != "object") return n;
  for (const [e, i] of Object.entries(s))
    e in de && typeof i == "string" && (n[e] = i);
  return n;
}
function Lt() {
  Ve.forEach((s) => {
    try {
      s();
    } catch (n) {
      console.error(n);
    }
  });
}
function Mt() {
  Ne.forEach((s) => {
    try {
      s(ae);
    } catch (n) {
      console.error(n);
    }
  });
}
function lt(s, n, e = {}) {
  const i = Ue(s), r = K.get(i);
  K.set(i, {
    ...r,
    label: n || r?.label || i,
    messages: { ...r?.messages, ...xt(e) }
  }), Lt(), Xe().includes(i) && Mt();
}
function Fn(s) {
  const n = Ue(s.code), e = K.get(n);
  K.set(n, {
    ...e,
    label: s.label || e?.label || n,
    messages: e?.messages ?? {},
    load: () => Nn(s.url)
  }), Lt();
}
function Et() {
  return [...K].map(([s, n]) => ({ code: s, label: n.label }));
}
function be() {
  return ae;
}
function Ye(s) {
  return Te(s, !0);
}
async function Te(s, n) {
  const e = qn(s);
  if (!e) return !1;
  const i = ++ct;
  let r = !1;
  const [c, ...u] = Xe(e).map((f) => Dn(f)), m = Promise.all(u.map((f) => f.catch(() => !1)));
  try {
    r = await c;
  } catch (f) {
    return console.warn(`Locale "${e}" could not be loaded, keeping "${ae}".`, f), !1;
  }
  return r = (await m).includes(!0) || r, i !== ct ? !1 : (n && In(e), e === ae && !r || (ae = e, Mt()), !0);
}
function Dn(s) {
  const n = K.get(s);
  return n?.load ? (n.pending ??= n.load().then((e) => {
    const i = e && typeof e == "object" && "messages" in e ? e.messages : e, r = K.get(s);
    return r.pack = xt(i), delete r.load, delete r.pending, !0;
  }, (e) => {
    throw delete K.get(s)?.pending, e;
  }), n.pending) : Promise.resolve(!1);
}
function Xe(s = ae) {
  return [.../* @__PURE__ */ new Set([s, It(s), Me])];
}
function qn(s) {
  let n;
  try {
    n = Ue(s);
  } catch {
    return;
  }
  if (K.has(n)) return n;
  const e = It(n);
  return K.has(e) ? e : void 0;
}
function It(s) {
  return s.split("-")[0];
}
function le(s) {
  return Ne.add(s), () => Ne.delete(s);
}
function Hn(s) {
  return Ve.add(s), () => Ve.delete(s);
}
function ut(s, n) {
  return n ? s.replace(/\{(\w+)\}/g, (e, i) => Object.hasOwn(n, i) ? String(n[i]) : e) : s;
}
function D(s, n) {
  for (const e of Xe()) {
    const i = K.get(e), r = i?.messages[s] ?? i?.pack?.[s];
    if (r !== void 0) return ut(r, n);
  }
  return ut(de[s] ?? s, n);
}
function ie(s) {
  s.setAttribute("lang", ae);
  const n = [s, ...s.querySelectorAll("[data-i18n], [data-i18n-attr]")];
  for (const e of n) {
    if (!(e instanceof HTMLElement || e instanceof SVGElement)) continue;
    const i = Bn(e.dataset.i18nParams), r = e.dataset.i18n;
    r && r in de && (e.textContent = D(r, i));
    for (const c of e.dataset.i18nAttr?.split(";") ?? []) {
      const [u, m] = c.split(":").map((f) => f.trim());
      u && m && m in de && e.setAttribute(u, D(m, i));
    }
  }
}
function Bn(s) {
  if (s)
    try {
      return JSON.parse(s);
    } catch {
      return;
    }
}
async function Nn(s) {
  const n = await fetch(s, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(6e3)
  });
  if (!n.ok) throw new Error(`Locale request failed: ${n.status}`);
  return n.json();
}
async function Vn(s = {}) {
  const n = typeof window > "u" ? void 0 : window.__NOVA_LOCALES__;
  for (const [i, r] of Object.entries(n ?? {}))
    try {
      lt(i, r.label, r.messages);
    } catch (c) {
      console.warn("Ignoring invalid injected locale pack.", c);
    }
  for (const i of s.locales ?? [])
    try {
      Fn(i);
    } catch (r) {
      console.warn("Ignoring invalid locale pack entry.", r);
    }
  typeof window < "u" && (window.__NOVA_I18N__ = { registerLocale: lt, setLocale: Ye, getLocale: be, listLocales: Et, t: D });
  const e = En();
  e && await Te(e, !1) || s.defaultLocale && await Te(s.defaultLocale, !1) || await Te(Me, !1);
}
const $n = 3, Se = [14, 12, 15, 11, 9, 10, 8, 9, 7, 8, 6, 7, 6, 5, 6];
function dt(s, n, e) {
  const i = Math.max(...s), r = Math.min(...s), c = n / (s.length - 1);
  return s.map((u, m) => {
    const f = e - (i - u) / (i - r || 1) * (e - 8) - 4;
    return `${m ? "L" : "M"}${(m * c).toFixed(1)} ${f.toFixed(1)}`;
  }).join(" ");
}
class Gn {
  constructor(n, e) {
    this.homePath = n, this.music = e;
  }
  root;
  unsubscribeMusic;
  unsubscribeLocale;
  snapshot;
  /** Mount on home, unmount elsewhere. Safe to call repeatedly. */
  refresh() {
    if (!this.isHome()) {
      this.unmount();
      return;
    }
    const n = document.querySelector("#home_top");
    n && (this.root?.isConnected && n.contains(this.root) || (this.unmount(), this.mount(n)));
  }
  unmount() {
    this.unsubscribeMusic?.(), this.unsubscribeMusic = void 0, this.unsubscribeLocale?.(), this.unsubscribeLocale = void 0, this.snapshot = void 0, this.root?.removeEventListener("click", this.onClick), this.root?.remove(), this.root = void 0;
  }
  destroy() {
    this.unmount();
  }
  isHome() {
    return (window.location.pathname.replace(/\/+$/, "") || "/") === (this.homePath.replace(/\/+$/, "") || "/");
  }
  mount(n) {
    const e = document.createElement("section");
    e.className = "ff-bento", e.setAttribute("aria-label", "Highlights"), e.dataset.i18nAttr = "aria-label:bento.label";
    const i = { from: Se[0], to: Se.at(-1) };
    e.innerHTML = `
      <article class="ff-bento-card ff-bento-featured">
        <header class="ff-bento-eyebrow"><span data-i18n="bento.featured.eyebrow"></span><span class="ff-bento-dot" aria-hidden="true"></span></header>
        <h2 class="ff-bento-title">
          <a href="/blog/posts/speedtest-architecture/" data-i18n="bento.featured.title"></a>
        </h2>
        <p class="ff-bento-text" data-i18n="bento.featured.description"></p>
        <ul class="ff-bento-badges" data-i18n-attr="aria-label:bento.featured.technologies">
          <li>WebWorker</li><li>TLS</li><li>Redis</li>
        </ul>
        <figure class="ff-bento-graph">
          <svg viewBox="0 0 240 64" preserveAspectRatio="none" role="img"
            data-i18n-attr="aria-label:bento.featured.latencyChart" data-i18n-params='${JSON.stringify(i)}'>
            <defs>
              <linearGradient id="ff-bento-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stop-color="currentColor" stop-opacity="0.32"/>
                <stop offset="1" stop-color="currentColor" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <path class="ff-bento-graph-area" d="${dt(Se, 240, 64)} L240 64 L0 64 Z"/>
            <path class="ff-bento-graph-line" d="${dt(Se, 240, 64)}"/>
          </svg>
          <figcaption>
            <span><strong>${i.to}</strong> <span data-i18n="bento.featured.latencyUnit"></span></span>
            <span><strong>940</strong> <span data-i18n="bento.featured.throughputUnit"></span></span>
          </figcaption>
        </figure>
        <a class="ff-bento-link" href="/blog/posts/speedtest-architecture/"><span data-i18n="bento.featured.cta"></span> <span aria-hidden="true">→</span></a>
      </article>

      <article class="ff-bento-card ff-bento-bio">
        <header class="ff-bento-eyebrow"><span data-i18n="bento.bio.eyebrow"></span></header>
        <div class="ff-bento-profile">
          <img src="/blog/media/takina/avatar.png" alt="" width="48" height="48" loading="lazy">
          <div><h2 class="ff-bento-title" data-i18n="bento.bio.name"></h2><p class="ff-bento-muted" data-i18n="bento.bio.tagline"></p></div>
        </div>
        <p class="ff-bento-text" data-i18n="bento.bio.description"></p>
        <ul class="ff-bento-focus" data-i18n-attr="aria-label:bento.bio.focusLabel">
          <li data-i18n="bento.bio.focus.distributedSystems"></li><li data-i18n="bento.bio.focus.frontendCraft"></li><li data-i18n="bento.bio.focus.webPerformance"></li>
        </ul>
      </article>

      <article class="ff-bento-card ff-bento-audio" data-state="idle">
        <header class="ff-bento-eyebrow"><span data-i18n="bento.audio.eyebrow"></span>
          <span class="ff-bento-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
        </header>
        <div class="ff-bento-track">
          <strong data-bento="title"></strong>
          <span class="ff-bento-muted" data-bento="artists"></span>
        </div>
        <div class="ff-bento-audio-controls">
          <button type="button" data-bento="play">▶</button>
          <button type="button" data-bento="open" aria-controls="ff-music-player" aria-expanded="false" data-i18n="bento.audio.player"></button>
        </div>
      </article>

      <article class="ff-bento-card ff-bento-writing">
        <header class="ff-bento-eyebrow"><span data-i18n="bento.writing.eyebrow"></span><a href="/blog/archives/" data-i18n="bento.writing.archive"></a></header>
        <blockquote class="ff-bento-epigraph"><span data-i18n="bento.writing.epigraph"></span><cite data-i18n="bento.writing.epigraphAuthor"></cite></blockquote>
        <ol class="ff-bento-posts"></ol>
      </article>`, this.renderPosts(e.querySelector(".ff-bento-posts")), e.addEventListener("click", this.onClick);
    const r = e.querySelector(".ff-bento-audio"), c = () => {
      ie(e), this.renderMusic(r);
    };
    c(), this.unsubscribeLocale = le(c), this.music ? this.unsubscribeMusic = this.music.subscribe((m) => {
      this.snapshot = m, this.renderMusic(r);
    }) : r.querySelectorAll("button").forEach((m) => {
      m.disabled = !0;
    });
    const u = n.querySelector(":scope > .ff-hero-copy");
    u ? u.after(e) : n.prepend(e), this.root = e;
  }
  /** Recent posts come from the rendered home list, so the grid never drifts from the content. */
  renderPosts(n) {
    const e = this.collectPosts();
    if (!e.length) {
      const i = document.createElement("li"), r = document.createElement("a");
      r.href = "/blog/archives/", r.dataset.i18n = "bento.writing.browseAll", i.append(r), n.append(i);
      return;
    }
    for (const i of e) {
      const r = document.createElement("li"), c = document.createElement("a");
      c.href = i.href, c.textContent = i.title;
      const u = document.createElement("span");
      if (u.className = "ff-bento-meta", i.date) {
        const m = document.createElement("time");
        m.textContent = i.date, i.datetime && (m.dateTime = i.datetime), u.append(m);
      }
      for (const m of i.tags.slice(0, 2)) {
        const f = document.createElement("span");
        f.textContent = `#${m}`, u.append(f);
      }
      r.append(c, u), n.append(r);
    }
  }
  collectPosts() {
    const n = document.querySelectorAll("#recent-posts .recent-post-item"), e = [];
    for (const i of n) {
      const r = i.querySelector("a.article-title");
      if (!r?.href) continue;
      const c = i.querySelector(".post-meta-date time");
      if (e.push({
        title: r.title || r.textContent?.trim() || D("bento.writing.untitled"),
        href: r.getAttribute("href") ?? r.href,
        date: c?.textContent?.trim() || void 0,
        datetime: c?.getAttribute("datetime") ?? void 0,
        tags: [...i.querySelectorAll(".article-meta__tags")].map((u) => u.textContent?.replace(/^#/, "").trim() ?? "").filter(Boolean)
      }), e.length === $n) break;
    }
    return e;
  }
  /** Before the player reports (or without one), the card shows its idle copy. */
  renderMusic(n) {
    const e = this.snapshot, i = n.querySelector("[data-bento=title]"), r = n.querySelector("[data-bento=artists]"), c = n.querySelector("[data-bento=play]"), u = n.querySelector("[data-bento=open]");
    if (!e) {
      n.dataset.state = this.music ? "idle" : "offline", i.textContent = D("bento.audio.idleTitle"), r.textContent = D(this.music ? "bento.audio.paused" : "bento.audio.unavailable"), c.setAttribute("aria-label", D("media.play")), u.setAttribute("aria-label", D("media.openPlayer"));
      return;
    }
    n.dataset.state = e.playing ? "playing" : "idle", i.textContent = e.title, r.textContent = e.artists || D(e.playing ? "bento.audio.playing" : "bento.audio.paused"), c.textContent = e.playing ? "⏸" : "▶", c.setAttribute("aria-label", D(e.playing ? "media.pause" : "media.play")), u.setAttribute("aria-expanded", String(e.open)), u.setAttribute("aria-label", D(e.open ? "media.closePlayer" : "media.openPlayer"));
  }
  onClick = (n) => {
    const e = n.target.closest("button[data-bento]");
    !e || e.disabled || !this.music || (e.dataset.bento === "play" && this.music.toggle(), e.dataset.bento === "open" && this.music.setOpen(!this.music.isOpen()));
  };
}
const Rn = 160, jn = 12;
class Wn {
  constructor(n, e) {
    this.actions = n, this.music = e, this.root.className = "ff-dock", this.root.dataset.i18nAttr = "aria-label:dock.label", this.root.innerHTML = `
      <div class="ff-dock-slot ff-dock-audio" data-slot="audio">
        <button type="button" data-dock="play" data-i18n-attr="aria-label:media.play">▶</button>
        <div class="ff-dock-marquee"><span></span></div>
        <button type="button" data-dock="expand" data-i18n-attr="aria-label:media.openPlayer"
          aria-controls="ff-music-player" aria-expanded="false">⌃</button>
      </div>
      <div class="ff-dock-slot" data-slot="atmosphere">
        <button type="button" data-dock="background" data-i18n-attr="aria-label:dock.background.label" aria-pressed="false">◉</button>
        <button type="button" data-dock="theme" data-i18n-attr="aria-label:dock.theme.label" aria-pressed="false">☾</button>
      </div>
      <div class="ff-dock-slot" data-slot="top">
        <button type="button" data-dock="top" data-i18n-attr="aria-label:dock.top">↑</button>
      </div>
      <div class="ff-dock-slot" data-slot="companion">
        <button type="button" data-dock="companion" data-i18n-attr="aria-label:dock.companion.label" aria-pressed="false">
          <img alt="" src="/blog/media/takina/avatar.png" width="28" height="28">
        </button>
      </div>`, e || this.root.querySelector("[data-slot=audio]")?.remove(), document.body.append(this.root), this.root.addEventListener("click", this.onClick), this.root.addEventListener("transitionend", this.onTransitionEnd), document.addEventListener("keydown", this.onKeydown), window.addEventListener("scroll", this.onScroll, { passive: !0 }), window.addEventListener("resize", this.notifyMove, { passive: !0 }), this.themeObserver = new MutationObserver(() => this.syncTheme()), this.themeObserver.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-theme"] }), ie(this.root), this.syncTheme(), this.unsubscribeLocale = le(() => this.renderLocale()), e && (e.setDocked(!0), this.unsubscribeMusic = e.subscribe((i) => {
      this.snapshot = i, this.renderMusic();
    }));
  }
  root = document.createElement("nav");
  moveListeners = /* @__PURE__ */ new Set();
  reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  themeObserver;
  unsubscribeMusic;
  unsubscribeLocale;
  state;
  snapshot;
  hidden = !1;
  lastScrollY = window.scrollY;
  travel = 0;
  scrollFrame;
  /** The capsule's live box (including the hide transform) for anything perched on it. */
  anchor() {
    return this.root.isConnected ? this.root.getBoundingClientRect() : null;
  }
  onMove(n) {
    return this.moveListeners.add(n), () => this.moveListeners.delete(n);
  }
  sync(n) {
    this.state = n;
    const e = this.button("background");
    if (e) {
      const r = n.backgroundMode === "video";
      e.disabled = !n.videoAvailable, e.textContent = r ? "◉" : "▦", e.setAttribute("aria-pressed", String(r)), e.title = D(n.videoAvailable ? r ? "dock.background.video" : "dock.background.wallpaper" : "dock.background.unavailable");
    }
    const i = this.button("companion");
    i && (i.closest(".ff-dock-slot").hidden = !n.companionAvailable, i.setAttribute("aria-pressed", String(n.companion)), i.title = D(n.companion ? "dock.companion.dismiss" : "dock.companion.call")), this.root.classList.toggle("has-companion", n.companionAvailable && n.companion), this.notifyMove();
  }
  /** PJAX lifecycle hook: re-attach if needed and reveal the dock on the new page. */
  refresh() {
    this.root.isConnected || document.body.append(this.root), this.lastScrollY = window.scrollY, this.travel = 0, this.setHidden(!1), this.updateMarquee();
  }
  destroy() {
    this.root.removeEventListener("click", this.onClick), this.root.removeEventListener("transitionend", this.onTransitionEnd), document.removeEventListener("keydown", this.onKeydown), window.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.notifyMove), this.scrollFrame !== void 0 && cancelAnimationFrame(this.scrollFrame), this.themeObserver.disconnect(), this.unsubscribeLocale(), this.unsubscribeMusic?.(), this.music?.setDocked(!1), this.moveListeners.clear(), this.root.remove();
  }
  onClick = (n) => {
    const e = n.target.closest("[data-dock]");
    if (!e || e.disabled) return;
    const i = e.dataset.dock;
    i === "play" && this.music?.toggle(), i === "expand" && this.music?.setOpen(!this.music.isOpen()), i === "background" && this.actions.toggleBackground(), i === "theme" && this.toggleTheme(), i === "top" && this.toTop(), i === "companion" && this.actions.toggleCompanion();
  };
  onKeydown = (n) => {
    n.key !== "Escape" || !this.music?.isOpen() || (this.music.setOpen(!1), this.button("expand")?.focus());
  };
  onScroll = () => {
    this.scrollFrame === void 0 && (this.scrollFrame = requestAnimationFrame(() => {
      this.scrollFrame = void 0;
      const n = window.scrollY, e = n - this.lastScrollY;
      this.lastScrollY = n, this.travel = Math.sign(e) === Math.sign(this.travel) ? this.travel + e : e;
      const i = this.root.matches(":focus-within") || this.music?.isOpen();
      n < Rn || i || this.travel < -6 ? this.setHidden(!1) : this.travel > jn && this.setHidden(!0);
    }));
  };
  onTransitionEnd = (n) => {
    n.target === this.root && this.notifyMove();
  };
  notifyMove = () => {
    this.moveListeners.forEach((n) => n());
  };
  setHidden(n) {
    n !== this.hidden && (this.hidden = n, this.root.classList.toggle("is-hidden", n), this.notifyMove());
  }
  /** Re-apply every translated string; widths change, so the marquee is re-measured. */
  renderLocale() {
    ie(this.root), this.syncTheme(), this.state && this.sync(this.state), this.renderMusic(), this.updateMarquee();
  }
  renderMusic() {
    const n = this.snapshot;
    if (!n) return;
    const e = this.button("play");
    e && (e.textContent = n.playing ? "⏸" : "▶", e.setAttribute("aria-label", D(n.playing ? "media.pause" : "media.play")));
    const i = this.button("expand");
    i && (i.setAttribute("aria-expanded", String(n.open)), i.setAttribute("aria-label", D(n.open ? "media.closePlayer" : "media.openPlayer")));
    const r = this.root.querySelector(".ff-dock-marquee span"), c = n.artists ? `${n.title} · ${n.artists}` : n.title;
    r && r.textContent !== c && (r.textContent = c, this.updateMarquee()), this.root.classList.toggle("is-playing", n.playing), n.open && this.setHidden(!1);
  }
  /** Scroll the title only when it overflows, by exactly the overflow distance. */
  updateMarquee() {
    const n = this.root.querySelector(".ff-dock-marquee"), e = n?.querySelector("span");
    if (!n || !e) return;
    const i = e.scrollWidth - n.clientWidth;
    n.classList.toggle("is-overflowing", i > 1), n.style.setProperty("--ff-marquee-distance", `${-Math.ceil(Math.max(0, i))}px`), n.style.setProperty("--ff-marquee-duration", `${Math.max(6, i / 18 + 4).toFixed(1)}s`);
  }
  toggleTheme() {
    const n = window.Solitude;
    if (n?.switchDarkMode) n.switchDarkMode();
    else {
      const e = document.documentElement;
      e.setAttribute("data-theme", e.getAttribute("data-theme") === "dark" ? "light" : "dark");
    }
  }
  syncTheme() {
    const n = document.documentElement.getAttribute("data-theme") === "dark", e = this.button("theme");
    e && (e.textContent = n ? "☾" : "☀", e.setAttribute("aria-pressed", String(n)), e.title = D(n ? "dock.theme.toLight" : "dock.theme.toDark"));
  }
  toTop() {
    window.scrollTo({ top: 0, behavior: this.reducedMotion.matches ? "auto" : "smooth" });
  }
  button(n) {
    return this.root.querySelector(`[data-dock=${n}]`);
  }
}
class zn {
  constructor(n) {
    this.config = n;
  }
  // Only the reviewed build-time catalog can enter the rotation.
  index = 1;
  async next() {
    const n = this.config.subtitle, e = n[this.index % n.length];
    if (!e) throw new Error("The reviewed quote catalog is empty");
    return this.index += 1, e;
  }
}
function $e(s, n) {
  const e = s.querySelector(".ff-quote-source");
  e && (e.textContent = D("quotes.source", { work: n.work, character: n.character }), e.href = n.originalSource ?? n.source, e.title = D("quotes.sourceTitle"), e.dataset.work = n.work, e.dataset.character = n.character);
}
function Un(s = document) {
  s.querySelectorAll(".ff-quote-source[data-work]").forEach((n) => {
    n.textContent = D("quotes.source", { work: n.dataset.work ?? "", character: n.dataset.character ?? "" }), n.title = D("quotes.sourceTitle");
  });
}
class Yn {
  constructor(n) {
    this.config = n, this.quotes = new zn(n.site);
  }
  canvas;
  worker;
  typingTimer;
  quotes;
  quoteGeneration = 0;
  fallbackFrame;
  visibilityHandler = () => this.setPaused(document.hidden);
  start() {
    this.config.effects.enabled && (this.config.effects.sakura && this.startSakura(), document.addEventListener("visibilitychange", this.visibilityHandler), this.refreshPage());
  }
  refreshPage() {
    this.stopTypewriter(), this.config.effects.typewriter && this.isHome() && this.startTypewriter();
  }
  stop() {
    document.removeEventListener("visibilitychange", this.visibilityHandler), this.stopTypewriter(), this.worker?.terminate(), this.worker = void 0, this.canvas?.remove(), this.canvas = void 0, this.fallbackFrame !== void 0 && cancelAnimationFrame(this.fallbackFrame), this.fallbackFrame = void 0;
  }
  startSakura() {
    if (this.canvas) return;
    const n = document.createElement("canvas");
    if (n.className = "ff-sakura-canvas", n.setAttribute("aria-hidden", "true"), document.body.append(n), this.canvas = n, "transferControlToOffscreen" in n) {
      const e = n.transferControlToOffscreen(), i = new Worker(new URL(
        /* @vite-ignore */
        "/blog/custom/assets/sakura.worker-BZc_27Px.js",
        import.meta.url
      ), { type: "module" });
      i.postMessage(
        {
          type: "init",
          canvas: e,
          width: window.innerWidth,
          height: window.innerHeight,
          dpr: Math.min(window.devicePixelRatio, 2),
          count: this.config.effects.maxParticles
        },
        [e]
      ), this.worker = i;
    } else this.startSakuraFallback(n);
  }
  startTypewriter() {
    const n = document.querySelector(".ff-hero-copy .ff-quote-zh"), e = document.querySelector(".ff-hero-copy .ff-quote-ja");
    if (!n || !e) return;
    n.classList.add("ff-typing-subtitle");
    let i = 0, r = !1;
    const c = this.config.site.subtitle[0];
    if (!c) return;
    let u = c;
    $e(n.parentElement, u);
    const m = ++this.quoteGeneration, f = () => {
      if (m !== this.quoteGeneration || !n.isConnected) return;
      const g = Array.from(u.text), v = Array.from(u.ja ?? "");
      i += r ? -1 : 1, n.textContent = g.slice(0, Math.max(0, i)).join(""), e.textContent = v.slice(0, Math.max(0, i)).join("");
      let t = r ? 50 : 90;
      if (!r && i >= Math.max(g.length, v.length))
        r = !0, t = 5e3;
      else if (r && i <= 0) {
        r = !1, this.quotes.next().then((o) => {
          m === this.quoteGeneration && (u = o, $e(n.parentElement, u), this.typingTimer = window.setTimeout(f, 350));
        });
        return;
      }
      this.typingTimer = window.setTimeout(f, t);
    };
    n.textContent = "", e.textContent = "", f();
  }
  stopTypewriter() {
    this.quoteGeneration += 1, this.typingTimer !== void 0 && window.clearTimeout(this.typingTimer), this.typingTimer = void 0, document.querySelector(".ff-hero-copy .ff-quote-zh")?.classList.remove("ff-typing-subtitle");
  }
  setPaused(n) {
    this.worker?.postMessage({ type: n ? "pause" : "resume" });
  }
  isHome() {
    return (window.location.pathname.replace(/\/+$/, "") || "/") === (this.config.site.homePath.replace(/\/+$/, "") || "/");
  }
  beforeNavigate() {
    this.stopTypewriter();
  }
  startSakuraFallback(n) {
    const e = n.getContext("2d");
    if (!e) return;
    const i = Math.min(window.devicePixelRatio, 2);
    n.width = window.innerWidth * i, n.height = window.innerHeight * i, e.setTransform(i, 0, 0, i, 0, 0);
    const r = Array.from({ length: Math.min(this.config.effects.maxParticles, 24) }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speed: 0.35 + Math.random() * 0.65,
      size: 3 + Math.random() * 4
    }));
    let c = 0;
    const u = (m) => {
      if (m - c >= 32 && !document.hidden) {
        c = m, e.clearRect(0, 0, window.innerWidth, window.innerHeight), e.fillStyle = "rgba(182,178,255,.68)";
        for (const f of r)
          f.y += f.speed, f.x += Math.sin((f.y + f.x) / 70) * 0.3, f.y > window.innerHeight + 12 && (f.y = -12, f.x = Math.random() * window.innerWidth), e.beginPath(), e.ellipse(f.x, f.y, f.size, f.size * 0.55, f.y / 90, 0, Math.PI * 2), e.fill();
      }
      this.fallbackFrame = requestAnimationFrame(u);
    };
    this.fallbackFrame = requestAnimationFrame(u);
  }
}
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, De = {};
/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
var ft;
function Xn() {
  return ft || (ft = 1, function(s) {
    (function() {
      var n = function() {
        this.init();
      };
      n.prototype = {
        /**
         * Initialize the global Howler object.
         * @return {Howler}
         */
        init: function() {
          var t = this || e;
          return t._counter = 1e3, t._html5AudioPool = [], t.html5PoolSize = 10, t._codecs = {}, t._howls = [], t._muted = !1, t._volume = 1, t._canPlayEvent = "canplaythrough", t._navigator = typeof window < "u" && window.navigator ? window.navigator : null, t.masterGain = null, t.noAudio = !1, t.usingWebAudio = !0, t.autoSuspend = !0, t.ctx = null, t.autoUnlock = !0, t._setup(), t;
        },
        /**
         * Get/set the global volume for all sounds.
         * @param  {Float} vol Volume from 0.0 to 1.0.
         * @return {Howler/Float}     Returns self or current volume.
         */
        volume: function(t) {
          var o = this || e;
          if (t = parseFloat(t), o.ctx || v(), typeof t < "u" && t >= 0 && t <= 1) {
            if (o._volume = t, o._muted)
              return o;
            o.usingWebAudio && o.masterGain.gain.setValueAtTime(t, e.ctx.currentTime);
            for (var a = 0; a < o._howls.length; a++)
              if (!o._howls[a]._webAudio)
                for (var l = o._howls[a]._getSoundIds(), p = 0; p < l.length; p++) {
                  var h = o._howls[a]._soundById(l[p]);
                  h && h._node && (h._node.volume = h._volume * t);
                }
            return o;
          }
          return o._volume;
        },
        /**
         * Handle muting and unmuting globally.
         * @param  {Boolean} muted Is muted or not.
         */
        mute: function(t) {
          var o = this || e;
          o.ctx || v(), o._muted = t, o.usingWebAudio && o.masterGain.gain.setValueAtTime(t ? 0 : o._volume, e.ctx.currentTime);
          for (var a = 0; a < o._howls.length; a++)
            if (!o._howls[a]._webAudio)
              for (var l = o._howls[a]._getSoundIds(), p = 0; p < l.length; p++) {
                var h = o._howls[a]._soundById(l[p]);
                h && h._node && (h._node.muted = t ? !0 : h._muted);
              }
          return o;
        },
        /**
         * Handle stopping all sounds globally.
         */
        stop: function() {
          for (var t = this || e, o = 0; o < t._howls.length; o++)
            t._howls[o].stop();
          return t;
        },
        /**
         * Unload and destroy all currently loaded Howl objects.
         * @return {Howler}
         */
        unload: function() {
          for (var t = this || e, o = t._howls.length - 1; o >= 0; o--)
            t._howls[o].unload();
          return t.usingWebAudio && t.ctx && typeof t.ctx.close < "u" && (t.ctx.close(), t.ctx = null, v()), t;
        },
        /**
         * Check for codec support of specific extension.
         * @param  {String} ext Audio file extention.
         * @return {Boolean}
         */
        codecs: function(t) {
          return (this || e)._codecs[t.replace(/^x-/, "")];
        },
        /**
         * Setup various state values for global tracking.
         * @return {Howler}
         */
        _setup: function() {
          var t = this || e;
          if (t.state = t.ctx && t.ctx.state || "suspended", t._autoSuspend(), !t.usingWebAudio)
            if (typeof Audio < "u")
              try {
                var o = new Audio();
                typeof o.oncanplaythrough > "u" && (t._canPlayEvent = "canplay");
              } catch {
                t.noAudio = !0;
              }
            else
              t.noAudio = !0;
          try {
            var o = new Audio();
            o.muted && (t.noAudio = !0);
          } catch {
          }
          return t.noAudio || t._setupCodecs(), t;
        },
        /**
         * Check for browser support for various codecs and cache the results.
         * @return {Howler}
         */
        _setupCodecs: function() {
          var t = this || e, o = null;
          try {
            o = typeof Audio < "u" ? new Audio() : null;
          } catch {
            return t;
          }
          if (!o || typeof o.canPlayType != "function")
            return t;
          var a = o.canPlayType("audio/mpeg;").replace(/^no$/, ""), l = t._navigator ? t._navigator.userAgent : "", p = l.match(/OPR\/(\d+)/g), h = p && parseInt(p[0].split("/")[1], 10) < 33, d = l.indexOf("Safari") !== -1 && l.indexOf("Chrome") === -1, _ = l.match(/Version\/(.*?) /), y = d && _ && parseInt(_[1], 10) < 15;
          return t._codecs = {
            mp3: !!(!h && (a || o.canPlayType("audio/mp3;").replace(/^no$/, ""))),
            mpeg: !!a,
            opus: !!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(o.canPlayType('audio/wav; codecs="1"') || o.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!o.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!o.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(o.canPlayType("audio/x-m4a;") || o.canPlayType("audio/m4a;") || o.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(o.canPlayType("audio/x-m4b;") || o.canPlayType("audio/m4b;") || o.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(o.canPlayType("audio/x-mp4;") || o.canPlayType("audio/mp4;") || o.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!(!y && o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !!(!y && o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(o.canPlayType("audio/x-flac;") || o.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, t;
        },
        /**
         * Some browsers/devices will only allow audio to be played after a user interaction.
         * Attempt to automatically unlock audio on the first user interaction.
         * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
         * @return {Howler}
         */
        _unlockAudio: function() {
          var t = this || e;
          if (!(t._audioUnlocked || !t.ctx)) {
            t._audioUnlocked = !1, t.autoUnlock = !1, !t._mobileUnloaded && t.ctx.sampleRate !== 44100 && (t._mobileUnloaded = !0, t.unload()), t._scratchBuffer = t.ctx.createBuffer(1, 1, 22050);
            var o = function(a) {
              for (; t._html5AudioPool.length < t.html5PoolSize; )
                try {
                  var l = new Audio();
                  l._unlocked = !0, t._releaseHtml5Audio(l);
                } catch {
                  t.noAudio = !0;
                  break;
                }
              for (var p = 0; p < t._howls.length; p++)
                if (!t._howls[p]._webAudio)
                  for (var h = t._howls[p]._getSoundIds(), d = 0; d < h.length; d++) {
                    var _ = t._howls[p]._soundById(h[d]);
                    _ && _._node && !_._node._unlocked && (_._node._unlocked = !0, _._node.load());
                  }
              t._autoResume();
              var y = t.ctx.createBufferSource();
              y.buffer = t._scratchBuffer, y.connect(t.ctx.destination), typeof y.start > "u" ? y.noteOn(0) : y.start(0), typeof t.ctx.resume == "function" && t.ctx.resume(), y.onended = function() {
                y.disconnect(0), t._audioUnlocked = !0, document.removeEventListener("touchstart", o, !0), document.removeEventListener("touchend", o, !0), document.removeEventListener("click", o, !0), document.removeEventListener("keydown", o, !0);
                for (var S = 0; S < t._howls.length; S++)
                  t._howls[S]._emit("unlock");
              };
            };
            return document.addEventListener("touchstart", o, !0), document.addEventListener("touchend", o, !0), document.addEventListener("click", o, !0), document.addEventListener("keydown", o, !0), t;
          }
        },
        /**
         * Get an unlocked HTML5 Audio object from the pool. If none are left,
         * return a new Audio object and throw a warning.
         * @return {Audio} HTML5 Audio object.
         */
        _obtainHtml5Audio: function() {
          var t = this || e;
          if (t._html5AudioPool.length)
            return t._html5AudioPool.pop();
          var o = new Audio().play();
          return o && typeof Promise < "u" && (o instanceof Promise || typeof o.then == "function") && o.catch(function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
          }), new Audio();
        },
        /**
         * Return an activated HTML5 Audio object to the pool.
         * @return {Howler}
         */
        _releaseHtml5Audio: function(t) {
          var o = this || e;
          return t._unlocked && o._html5AudioPool.push(t), o;
        },
        /**
         * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
         * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
         * @return {Howler}
         */
        _autoSuspend: function() {
          var t = this;
          if (!(!t.autoSuspend || !t.ctx || typeof t.ctx.suspend > "u" || !e.usingWebAudio)) {
            for (var o = 0; o < t._howls.length; o++)
              if (t._howls[o]._webAudio) {
                for (var a = 0; a < t._howls[o]._sounds.length; a++)
                  if (!t._howls[o]._sounds[a]._paused)
                    return t;
              }
            return t._suspendTimer && clearTimeout(t._suspendTimer), t._suspendTimer = setTimeout(function() {
              if (t.autoSuspend) {
                t._suspendTimer = null, t.state = "suspending";
                var l = function() {
                  t.state = "suspended", t._resumeAfterSuspend && (delete t._resumeAfterSuspend, t._autoResume());
                };
                t.ctx.suspend().then(l, l);
              }
            }, 3e4), t;
          }
        },
        /**
         * Automatically resume the Web Audio AudioContext when a new sound is played.
         * @return {Howler}
         */
        _autoResume: function() {
          var t = this;
          if (!(!t.ctx || typeof t.ctx.resume > "u" || !e.usingWebAudio))
            return t.state === "running" && t.ctx.state !== "interrupted" && t._suspendTimer ? (clearTimeout(t._suspendTimer), t._suspendTimer = null) : t.state === "suspended" || t.state === "running" && t.ctx.state === "interrupted" ? (t.ctx.resume().then(function() {
              t.state = "running";
              for (var o = 0; o < t._howls.length; o++)
                t._howls[o]._emit("resume");
            }), t._suspendTimer && (clearTimeout(t._suspendTimer), t._suspendTimer = null)) : t.state === "suspending" && (t._resumeAfterSuspend = !0), t;
        }
      };
      var e = new n(), i = function(t) {
        var o = this;
        if (!t.src || t.src.length === 0) {
          console.error("An array of source files must be passed with any new Howl.");
          return;
        }
        o.init(t);
      };
      i.prototype = {
        /**
         * Initialize a new Howl group object.
         * @param  {Object} o Passed in properties for this group.
         * @return {Howl}
         */
        init: function(t) {
          var o = this;
          return e.ctx || v(), o._autoplay = t.autoplay || !1, o._format = typeof t.format != "string" ? t.format : [t.format], o._html5 = t.html5 || !1, o._muted = t.mute || !1, o._loop = t.loop || !1, o._pool = t.pool || 5, o._preload = typeof t.preload == "boolean" || t.preload === "metadata" ? t.preload : !0, o._rate = t.rate || 1, o._sprite = t.sprite || {}, o._src = typeof t.src != "string" ? t.src : [t.src], o._volume = t.volume !== void 0 ? t.volume : 1, o._xhr = {
            method: t.xhr && t.xhr.method ? t.xhr.method : "GET",
            headers: t.xhr && t.xhr.headers ? t.xhr.headers : null,
            withCredentials: t.xhr && t.xhr.withCredentials ? t.xhr.withCredentials : !1
          }, o._duration = 0, o._state = "unloaded", o._sounds = [], o._endTimers = {}, o._queue = [], o._playLock = !1, o._onend = t.onend ? [{ fn: t.onend }] : [], o._onfade = t.onfade ? [{ fn: t.onfade }] : [], o._onload = t.onload ? [{ fn: t.onload }] : [], o._onloaderror = t.onloaderror ? [{ fn: t.onloaderror }] : [], o._onplayerror = t.onplayerror ? [{ fn: t.onplayerror }] : [], o._onpause = t.onpause ? [{ fn: t.onpause }] : [], o._onplay = t.onplay ? [{ fn: t.onplay }] : [], o._onstop = t.onstop ? [{ fn: t.onstop }] : [], o._onmute = t.onmute ? [{ fn: t.onmute }] : [], o._onvolume = t.onvolume ? [{ fn: t.onvolume }] : [], o._onrate = t.onrate ? [{ fn: t.onrate }] : [], o._onseek = t.onseek ? [{ fn: t.onseek }] : [], o._onunlock = t.onunlock ? [{ fn: t.onunlock }] : [], o._onresume = [], o._webAudio = e.usingWebAudio && !o._html5, typeof e.ctx < "u" && e.ctx && e.autoUnlock && e._unlockAudio(), e._howls.push(o), o._autoplay && o._queue.push({
            event: "play",
            action: function() {
              o.play();
            }
          }), o._preload && o._preload !== "none" && o.load(), o;
        },
        /**
         * Load the audio file.
         * @return {Howler}
         */
        load: function() {
          var t = this, o = null;
          if (e.noAudio) {
            t._emit("loaderror", null, "No audio support.");
            return;
          }
          typeof t._src == "string" && (t._src = [t._src]);
          for (var a = 0; a < t._src.length; a++) {
            var l, p;
            if (t._format && t._format[a])
              l = t._format[a];
            else {
              if (p = t._src[a], typeof p != "string") {
                t._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                continue;
              }
              l = /^data:audio\/([^;,]+);/i.exec(p), l || (l = /\.([^.]+)$/.exec(p.split("?", 1)[0])), l && (l = l[1].toLowerCase());
            }
            if (l || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), l && e.codecs(l)) {
              o = t._src[a];
              break;
            }
          }
          if (!o) {
            t._emit("loaderror", null, "No codec support for selected audio sources.");
            return;
          }
          return t._src = o, t._state = "loading", window.location.protocol === "https:" && o.slice(0, 5) === "http:" && (t._html5 = !0, t._webAudio = !1), new r(t), t._webAudio && u(t), t;
        },
        /**
         * Play a sound or resume previous playback.
         * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Number}          Sound ID.
         */
        play: function(t, o) {
          var a = this, l = null;
          if (typeof t == "number")
            l = t, t = null;
          else {
            if (typeof t == "string" && a._state === "loaded" && !a._sprite[t])
              return null;
            if (typeof t > "u" && (t = "__default", !a._playLock)) {
              for (var p = 0, h = 0; h < a._sounds.length; h++)
                a._sounds[h]._paused && !a._sounds[h]._ended && (p++, l = a._sounds[h]._id);
              p === 1 ? t = null : l = null;
            }
          }
          var d = l ? a._soundById(l) : a._inactiveSound();
          if (!d)
            return null;
          if (l && !t && (t = d._sprite || "__default"), a._state !== "loaded") {
            d._sprite = t, d._ended = !1;
            var _ = d._id;
            return a._queue.push({
              event: "play",
              action: function() {
                a.play(_);
              }
            }), _;
          }
          if (l && !d._paused)
            return o || a._loadQueue("play"), d._id;
          a._webAudio && e._autoResume();
          var y = Math.max(0, d._seek > 0 ? d._seek : a._sprite[t][0] / 1e3), S = Math.max(0, (a._sprite[t][0] + a._sprite[t][1]) / 1e3 - y), M = S * 1e3 / Math.abs(d._rate), x = a._sprite[t][0] / 1e3, A = (a._sprite[t][0] + a._sprite[t][1]) / 1e3;
          d._sprite = t, d._ended = !1;
          var L = function() {
            d._paused = !1, d._seek = y, d._start = x, d._stop = A, d._loop = !!(d._loop || a._sprite[t][2]);
          };
          if (y >= A) {
            a._ended(d);
            return;
          }
          var w = d._node;
          if (a._webAudio) {
            var H = function() {
              a._playLock = !1, L(), a._refreshBuffer(d);
              var b = d._muted || a._muted ? 0 : d._volume;
              w.gain.setValueAtTime(b, e.ctx.currentTime), d._playStart = e.ctx.currentTime, typeof w.bufferSource.start > "u" ? d._loop ? w.bufferSource.noteGrainOn(0, y, 86400) : w.bufferSource.noteGrainOn(0, y, S) : d._loop ? w.bufferSource.start(0, y, 86400) : w.bufferSource.start(0, y, S), M !== 1 / 0 && (a._endTimers[d._id] = setTimeout(a._ended.bind(a, d), M)), o || setTimeout(function() {
                a._emit("play", d._id), a._loadQueue();
              }, 0);
            };
            e.state === "running" && e.ctx.state !== "interrupted" ? H() : (a._playLock = !0, a.once("resume", H), a._clearTimer(d._id));
          } else {
            var P = function() {
              w.currentTime = y, w.muted = d._muted || a._muted || e._muted || w.muted, w.volume = d._volume * e.volume(), w.playbackRate = d._rate;
              try {
                var b = w.play();
                if (b && typeof Promise < "u" && (b instanceof Promise || typeof b.then == "function") ? (a._playLock = !0, L(), b.then(function() {
                  a._playLock = !1, w._unlocked = !0, o ? a._loadQueue() : a._emit("play", d._id);
                }).catch(function() {
                  a._playLock = !1, a._emit("playerror", d._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), d._ended = !0, d._paused = !0;
                })) : o || (a._playLock = !1, L(), a._emit("play", d._id)), w.playbackRate = d._rate, w.paused) {
                  a._emit("playerror", d._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  return;
                }
                t !== "__default" || d._loop ? a._endTimers[d._id] = setTimeout(a._ended.bind(a, d), M) : (a._endTimers[d._id] = function() {
                  a._ended(d), w.removeEventListener("ended", a._endTimers[d._id], !1);
                }, w.addEventListener("ended", a._endTimers[d._id], !1));
              } catch (T) {
                a._emit("playerror", d._id, T);
              }
            };
            w.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (w.src = a._src, w.load());
            var G = window && window.ejecta || !w.readyState && e._navigator.isCocoonJS;
            if (w.readyState >= 3 || G)
              P();
            else {
              a._playLock = !0, a._state = "loading";
              var z = function() {
                a._state = "loaded", P(), w.removeEventListener(e._canPlayEvent, z, !1);
              };
              w.addEventListener(e._canPlayEvent, z, !1), a._clearTimer(d._id);
            }
          }
          return d._id;
        },
        /**
         * Pause playback and save current position.
         * @param  {Number} id The sound ID (empty to pause all in group).
         * @return {Howl}
         */
        pause: function(t) {
          var o = this;
          if (o._state !== "loaded" || o._playLock)
            return o._queue.push({
              event: "pause",
              action: function() {
                o.pause(t);
              }
            }), o;
          for (var a = o._getSoundIds(t), l = 0; l < a.length; l++) {
            o._clearTimer(a[l]);
            var p = o._soundById(a[l]);
            if (p && !p._paused && (p._seek = o.seek(a[l]), p._rateSeek = 0, p._paused = !0, o._stopFade(a[l]), p._node))
              if (o._webAudio) {
                if (!p._node.bufferSource)
                  continue;
                typeof p._node.bufferSource.stop > "u" ? p._node.bufferSource.noteOff(0) : p._node.bufferSource.stop(0), o._cleanBuffer(p._node);
              } else (!isNaN(p._node.duration) || p._node.duration === 1 / 0) && p._node.pause();
            arguments[1] || o._emit("pause", p ? p._id : null);
          }
          return o;
        },
        /**
         * Stop playback and reset to start.
         * @param  {Number} id The sound ID (empty to stop all in group).
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Howl}
         */
        stop: function(t, o) {
          var a = this;
          if (a._state !== "loaded" || a._playLock)
            return a._queue.push({
              event: "stop",
              action: function() {
                a.stop(t);
              }
            }), a;
          for (var l = a._getSoundIds(t), p = 0; p < l.length; p++) {
            a._clearTimer(l[p]);
            var h = a._soundById(l[p]);
            h && (h._seek = h._start || 0, h._rateSeek = 0, h._paused = !0, h._ended = !0, a._stopFade(l[p]), h._node && (a._webAudio ? h._node.bufferSource && (typeof h._node.bufferSource.stop > "u" ? h._node.bufferSource.noteOff(0) : h._node.bufferSource.stop(0), a._cleanBuffer(h._node)) : (!isNaN(h._node.duration) || h._node.duration === 1 / 0) && (h._node.currentTime = h._start || 0, h._node.pause(), h._node.duration === 1 / 0 && a._clearSound(h._node))), o || a._emit("stop", h._id));
          }
          return a;
        },
        /**
         * Mute/unmute a single sound or all sounds in this Howl group.
         * @param  {Boolean} muted Set to true to mute and false to unmute.
         * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
         * @return {Howl}
         */
        mute: function(t, o) {
          var a = this;
          if (a._state !== "loaded" || a._playLock)
            return a._queue.push({
              event: "mute",
              action: function() {
                a.mute(t, o);
              }
            }), a;
          if (typeof o > "u")
            if (typeof t == "boolean")
              a._muted = t;
            else
              return a._muted;
          for (var l = a._getSoundIds(o), p = 0; p < l.length; p++) {
            var h = a._soundById(l[p]);
            h && (h._muted = t, h._interval && a._stopFade(h._id), a._webAudio && h._node ? h._node.gain.setValueAtTime(t ? 0 : h._volume, e.ctx.currentTime) : h._node && (h._node.muted = e._muted ? !0 : t), a._emit("mute", h._id));
          }
          return a;
        },
        /**
         * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
         *   volume() -> Returns the group's volume value.
         *   volume(id) -> Returns the sound id's current volume.
         *   volume(vol) -> Sets the volume of all sounds in this Howl group.
         *   volume(vol, id) -> Sets the volume of passed sound id.
         * @return {Howl/Number} Returns self or current volume.
         */
        volume: function() {
          var t = this, o = arguments, a, l;
          if (o.length === 0)
            return t._volume;
          if (o.length === 1 || o.length === 2 && typeof o[1] > "u") {
            var p = t._getSoundIds(), h = p.indexOf(o[0]);
            h >= 0 ? l = parseInt(o[0], 10) : a = parseFloat(o[0]);
          } else o.length >= 2 && (a = parseFloat(o[0]), l = parseInt(o[1], 10));
          var d;
          if (typeof a < "u" && a >= 0 && a <= 1) {
            if (t._state !== "loaded" || t._playLock)
              return t._queue.push({
                event: "volume",
                action: function() {
                  t.volume.apply(t, o);
                }
              }), t;
            typeof l > "u" && (t._volume = a), l = t._getSoundIds(l);
            for (var _ = 0; _ < l.length; _++)
              d = t._soundById(l[_]), d && (d._volume = a, o[2] || t._stopFade(l[_]), t._webAudio && d._node && !d._muted ? d._node.gain.setValueAtTime(a, e.ctx.currentTime) : d._node && !d._muted && (d._node.volume = a * e.volume()), t._emit("volume", d._id));
          } else
            return d = l ? t._soundById(l) : t._sounds[0], d ? d._volume : 0;
          return t;
        },
        /**
         * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id (omit to fade all sounds).
         * @return {Howl}
         */
        fade: function(t, o, a, l) {
          var p = this;
          if (p._state !== "loaded" || p._playLock)
            return p._queue.push({
              event: "fade",
              action: function() {
                p.fade(t, o, a, l);
              }
            }), p;
          t = Math.min(Math.max(0, parseFloat(t)), 1), o = Math.min(Math.max(0, parseFloat(o)), 1), a = parseFloat(a), p.volume(t, l);
          for (var h = p._getSoundIds(l), d = 0; d < h.length; d++) {
            var _ = p._soundById(h[d]);
            if (_) {
              if (l || p._stopFade(h[d]), p._webAudio && !_._muted) {
                var y = e.ctx.currentTime, S = y + a / 1e3;
                _._volume = t, _._node.gain.setValueAtTime(t, y), _._node.gain.linearRampToValueAtTime(o, S);
              }
              p._startFadeInterval(_, t, o, a, h[d], typeof l > "u");
            }
          }
          return p;
        },
        /**
         * Starts the internal interval to fade a sound.
         * @param  {Object} sound Reference to sound to fade.
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id to fade.
         * @param  {Boolean} isGroup   If true, set the volume on the group.
         */
        _startFadeInterval: function(t, o, a, l, p, h) {
          var d = this, _ = o, y = a - o, S = Math.abs(y / 0.01), M = Math.max(4, S > 0 ? l / S : l), x = Date.now();
          t._fadeTo = a, t._interval = setInterval(function() {
            var A = (Date.now() - x) / l;
            x = Date.now(), _ += y * A, _ = Math.round(_ * 100) / 100, y < 0 ? _ = Math.max(a, _) : _ = Math.min(a, _), d._webAudio ? t._volume = _ : d.volume(_, t._id, !0), h && (d._volume = _), (a < o && _ <= a || a > o && _ >= a) && (clearInterval(t._interval), t._interval = null, t._fadeTo = null, d.volume(a, t._id), d._emit("fade", t._id));
          }, M);
        },
        /**
         * Internal method that stops the currently playing fade when
         * a new fade starts, volume is changed or the sound is stopped.
         * @param  {Number} id The sound id.
         * @return {Howl}
         */
        _stopFade: function(t) {
          var o = this, a = o._soundById(t);
          return a && a._interval && (o._webAudio && a._node.gain.cancelScheduledValues(e.ctx.currentTime), clearInterval(a._interval), a._interval = null, o.volume(a._fadeTo, t), a._fadeTo = null, o._emit("fade", t)), o;
        },
        /**
         * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
         *   loop() -> Returns the group's loop value.
         *   loop(id) -> Returns the sound id's loop value.
         *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
         *   loop(loop, id) -> Sets the loop value of passed sound id.
         * @return {Howl/Boolean} Returns self or current loop value.
         */
        loop: function() {
          var t = this, o = arguments, a, l, p;
          if (o.length === 0)
            return t._loop;
          if (o.length === 1)
            if (typeof o[0] == "boolean")
              a = o[0], t._loop = a;
            else
              return p = t._soundById(parseInt(o[0], 10)), p ? p._loop : !1;
          else o.length === 2 && (a = o[0], l = parseInt(o[1], 10));
          for (var h = t._getSoundIds(l), d = 0; d < h.length; d++)
            p = t._soundById(h[d]), p && (p._loop = a, t._webAudio && p._node && p._node.bufferSource && (p._node.bufferSource.loop = a, a && (p._node.bufferSource.loopStart = p._start || 0, p._node.bufferSource.loopEnd = p._stop, t.playing(h[d]) && (t.pause(h[d], !0), t.play(h[d], !0)))));
          return t;
        },
        /**
         * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   rate() -> Returns the first sound node's current playback rate.
         *   rate(id) -> Returns the sound id's current playback rate.
         *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
         *   rate(rate, id) -> Sets the playback rate of passed sound id.
         * @return {Howl/Number} Returns self or the current playback rate.
         */
        rate: function() {
          var t = this, o = arguments, a, l;
          if (o.length === 0)
            l = t._sounds[0]._id;
          else if (o.length === 1) {
            var p = t._getSoundIds(), h = p.indexOf(o[0]);
            h >= 0 ? l = parseInt(o[0], 10) : a = parseFloat(o[0]);
          } else o.length === 2 && (a = parseFloat(o[0]), l = parseInt(o[1], 10));
          var d;
          if (typeof a == "number") {
            if (t._state !== "loaded" || t._playLock)
              return t._queue.push({
                event: "rate",
                action: function() {
                  t.rate.apply(t, o);
                }
              }), t;
            typeof l > "u" && (t._rate = a), l = t._getSoundIds(l);
            for (var _ = 0; _ < l.length; _++)
              if (d = t._soundById(l[_]), d) {
                t.playing(l[_]) && (d._rateSeek = t.seek(l[_]), d._playStart = t._webAudio ? e.ctx.currentTime : d._playStart), d._rate = a, t._webAudio && d._node && d._node.bufferSource ? d._node.bufferSource.playbackRate.setValueAtTime(a, e.ctx.currentTime) : d._node && (d._node.playbackRate = a);
                var y = t.seek(l[_]), S = (t._sprite[d._sprite][0] + t._sprite[d._sprite][1]) / 1e3 - y, M = S * 1e3 / Math.abs(d._rate);
                (t._endTimers[l[_]] || !d._paused) && (t._clearTimer(l[_]), t._endTimers[l[_]] = setTimeout(t._ended.bind(t, d), M)), t._emit("rate", d._id);
              }
          } else
            return d = t._soundById(l), d ? d._rate : t._rate;
          return t;
        },
        /**
         * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   seek() -> Returns the first sound node's current seek position.
         *   seek(id) -> Returns the sound id's current seek position.
         *   seek(seek) -> Sets the seek position of the first sound node.
         *   seek(seek, id) -> Sets the seek position of passed sound id.
         * @return {Howl/Number} Returns self or the current seek position.
         */
        seek: function() {
          var t = this, o = arguments, a, l;
          if (o.length === 0)
            t._sounds.length && (l = t._sounds[0]._id);
          else if (o.length === 1) {
            var p = t._getSoundIds(), h = p.indexOf(o[0]);
            h >= 0 ? l = parseInt(o[0], 10) : t._sounds.length && (l = t._sounds[0]._id, a = parseFloat(o[0]));
          } else o.length === 2 && (a = parseFloat(o[0]), l = parseInt(o[1], 10));
          if (typeof l > "u")
            return 0;
          if (typeof a == "number" && (t._state !== "loaded" || t._playLock))
            return t._queue.push({
              event: "seek",
              action: function() {
                t.seek.apply(t, o);
              }
            }), t;
          var d = t._soundById(l);
          if (d)
            if (typeof a == "number" && a >= 0) {
              var _ = t.playing(l);
              _ && t.pause(l, !0), d._seek = a, d._ended = !1, t._clearTimer(l), !t._webAudio && d._node && !isNaN(d._node.duration) && (d._node.currentTime = a);
              var y = function() {
                _ && t.play(l, !0), t._emit("seek", l);
              };
              if (_ && !t._webAudio) {
                var S = function() {
                  t._playLock ? setTimeout(S, 0) : y();
                };
                setTimeout(S, 0);
              } else
                y();
            } else if (t._webAudio) {
              var M = t.playing(l) ? e.ctx.currentTime - d._playStart : 0, x = d._rateSeek ? d._rateSeek - d._seek : 0;
              return d._seek + (x + M * Math.abs(d._rate));
            } else
              return d._node.currentTime;
          return t;
        },
        /**
         * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
         * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
         * @return {Boolean} True if playing and false if not.
         */
        playing: function(t) {
          var o = this;
          if (typeof t == "number") {
            var a = o._soundById(t);
            return a ? !a._paused : !1;
          }
          for (var l = 0; l < o._sounds.length; l++)
            if (!o._sounds[l]._paused)
              return !0;
          return !1;
        },
        /**
         * Get the duration of this sound. Passing a sound id will return the sprite duration.
         * @param  {Number} id The sound id to check. If none is passed, return full source duration.
         * @return {Number} Audio duration in seconds.
         */
        duration: function(t) {
          var o = this, a = o._duration, l = o._soundById(t);
          return l && (a = o._sprite[l._sprite][1] / 1e3), a;
        },
        /**
         * Returns the current loaded state of this Howl.
         * @return {String} 'unloaded', 'loading', 'loaded'
         */
        state: function() {
          return this._state;
        },
        /**
         * Unload and destroy the current Howl object.
         * This will immediately stop all sound instances attached to this group.
         */
        unload: function() {
          for (var t = this, o = t._sounds, a = 0; a < o.length; a++)
            o[a]._paused || t.stop(o[a]._id), t._webAudio || (t._clearSound(o[a]._node), o[a]._node.removeEventListener("error", o[a]._errorFn, !1), o[a]._node.removeEventListener(e._canPlayEvent, o[a]._loadFn, !1), o[a]._node.removeEventListener("ended", o[a]._endFn, !1), e._releaseHtml5Audio(o[a]._node)), delete o[a]._node, t._clearTimer(o[a]._id);
          var l = e._howls.indexOf(t);
          l >= 0 && e._howls.splice(l, 1);
          var p = !0;
          for (a = 0; a < e._howls.length; a++)
            if (e._howls[a]._src === t._src || t._src.indexOf(e._howls[a]._src) >= 0) {
              p = !1;
              break;
            }
          return c && p && delete c[t._src], e.noAudio = !1, t._state = "unloaded", t._sounds = [], t = null, null;
        },
        /**
         * Listen to a custom event.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
         * @return {Howl}
         */
        on: function(t, o, a, l) {
          var p = this, h = p["_on" + t];
          return typeof o == "function" && h.push(l ? { id: a, fn: o, once: l } : { id: a, fn: o }), p;
        },
        /**
         * Remove a custom event. Call without parameters to remove all events.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to remove. Leave empty to remove all.
         * @param  {Number}   id    (optional) Only remove events for this sound.
         * @return {Howl}
         */
        off: function(t, o, a) {
          var l = this, p = l["_on" + t], h = 0;
          if (typeof o == "number" && (a = o, o = null), o || a)
            for (h = 0; h < p.length; h++) {
              var d = a === p[h].id;
              if (o === p[h].fn && d || !o && d) {
                p.splice(h, 1);
                break;
              }
            }
          else if (t)
            l["_on" + t] = [];
          else {
            var _ = Object.keys(l);
            for (h = 0; h < _.length; h++)
              _[h].indexOf("_on") === 0 && Array.isArray(l[_[h]]) && (l[_[h]] = []);
          }
          return l;
        },
        /**
         * Listen to a custom event and remove it once fired.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @return {Howl}
         */
        once: function(t, o, a) {
          var l = this;
          return l.on(t, o, a, 1), l;
        },
        /**
         * Emit all events of a specific type and pass the sound id.
         * @param  {String} event Event name.
         * @param  {Number} id    Sound ID.
         * @param  {Number} msg   Message to go with event.
         * @return {Howl}
         */
        _emit: function(t, o, a) {
          for (var l = this, p = l["_on" + t], h = p.length - 1; h >= 0; h--)
            (!p[h].id || p[h].id === o || t === "load") && (setTimeout((function(d) {
              d.call(this, o, a);
            }).bind(l, p[h].fn), 0), p[h].once && l.off(t, p[h].fn, p[h].id));
          return l._loadQueue(t), l;
        },
        /**
         * Queue of actions initiated before the sound has loaded.
         * These will be called in sequence, with the next only firing
         * after the previous has finished executing (even if async like play).
         * @return {Howl}
         */
        _loadQueue: function(t) {
          var o = this;
          if (o._queue.length > 0) {
            var a = o._queue[0];
            a.event === t && (o._queue.shift(), o._loadQueue()), t || a.action();
          }
          return o;
        },
        /**
         * Fired when playback ends at the end of the duration.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _ended: function(t) {
          var o = this, a = t._sprite;
          if (!o._webAudio && t._node && !t._node.paused && !t._node.ended && t._node.currentTime < t._stop)
            return setTimeout(o._ended.bind(o, t), 100), o;
          var l = !!(t._loop || o._sprite[a][2]);
          if (o._emit("end", t._id), !o._webAudio && l && o.stop(t._id, !0).play(t._id), o._webAudio && l) {
            o._emit("play", t._id), t._seek = t._start || 0, t._rateSeek = 0, t._playStart = e.ctx.currentTime;
            var p = (t._stop - t._start) * 1e3 / Math.abs(t._rate);
            o._endTimers[t._id] = setTimeout(o._ended.bind(o, t), p);
          }
          return o._webAudio && !l && (t._paused = !0, t._ended = !0, t._seek = t._start || 0, t._rateSeek = 0, o._clearTimer(t._id), o._cleanBuffer(t._node), e._autoSuspend()), !o._webAudio && !l && o.stop(t._id, !0), o;
        },
        /**
         * Clear the end timer for a sound playback.
         * @param  {Number} id The sound ID.
         * @return {Howl}
         */
        _clearTimer: function(t) {
          var o = this;
          if (o._endTimers[t]) {
            if (typeof o._endTimers[t] != "function")
              clearTimeout(o._endTimers[t]);
            else {
              var a = o._soundById(t);
              a && a._node && a._node.removeEventListener("ended", o._endTimers[t], !1);
            }
            delete o._endTimers[t];
          }
          return o;
        },
        /**
         * Return the sound identified by this ID, or return null.
         * @param  {Number} id Sound ID
         * @return {Object}    Sound object or null.
         */
        _soundById: function(t) {
          for (var o = this, a = 0; a < o._sounds.length; a++)
            if (t === o._sounds[a]._id)
              return o._sounds[a];
          return null;
        },
        /**
         * Return an inactive sound from the pool or create a new one.
         * @return {Sound} Sound playback object.
         */
        _inactiveSound: function() {
          var t = this;
          t._drain();
          for (var o = 0; o < t._sounds.length; o++)
            if (t._sounds[o]._ended)
              return t._sounds[o].reset();
          return new r(t);
        },
        /**
         * Drain excess inactive sounds from the pool.
         */
        _drain: function() {
          var t = this, o = t._pool, a = 0, l = 0;
          if (!(t._sounds.length < o)) {
            for (l = 0; l < t._sounds.length; l++)
              t._sounds[l]._ended && a++;
            for (l = t._sounds.length - 1; l >= 0; l--) {
              if (a <= o)
                return;
              t._sounds[l]._ended && (t._webAudio && t._sounds[l]._node && t._sounds[l]._node.disconnect(0), t._sounds.splice(l, 1), a--);
            }
          }
        },
        /**
         * Get all ID's from the sounds pool.
         * @param  {Number} id Only return one ID if one is passed.
         * @return {Array}    Array of IDs.
         */
        _getSoundIds: function(t) {
          var o = this;
          if (typeof t > "u") {
            for (var a = [], l = 0; l < o._sounds.length; l++)
              a.push(o._sounds[l]._id);
            return a;
          } else
            return [t];
        },
        /**
         * Load the sound back into the buffer source.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _refreshBuffer: function(t) {
          var o = this;
          return t._node.bufferSource = e.ctx.createBufferSource(), t._node.bufferSource.buffer = c[o._src], t._panner ? t._node.bufferSource.connect(t._panner) : t._node.bufferSource.connect(t._node), t._node.bufferSource.loop = t._loop, t._loop && (t._node.bufferSource.loopStart = t._start || 0, t._node.bufferSource.loopEnd = t._stop || 0), t._node.bufferSource.playbackRate.setValueAtTime(t._rate, e.ctx.currentTime), o;
        },
        /**
         * Prevent memory leaks by cleaning up the buffer source after playback.
         * @param  {Object} node Sound's audio node containing the buffer source.
         * @return {Howl}
         */
        _cleanBuffer: function(t) {
          var o = this, a = e._navigator && e._navigator.vendor.indexOf("Apple") >= 0;
          if (!t.bufferSource)
            return o;
          if (e._scratchBuffer && t.bufferSource && (t.bufferSource.onended = null, t.bufferSource.disconnect(0), a))
            try {
              t.bufferSource.buffer = e._scratchBuffer;
            } catch {
            }
          return t.bufferSource = null, o;
        },
        /**
         * Set the source to a 0-second silence to stop any downloading (except in IE).
         * @param  {Object} node Audio node to clear.
         */
        _clearSound: function(t) {
          var o = /MSIE |Trident\//.test(e._navigator && e._navigator.userAgent);
          o || (t.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
        }
      };
      var r = function(t) {
        this._parent = t, this.init();
      };
      r.prototype = {
        /**
         * Initialize a new Sound object.
         * @return {Sound}
         */
        init: function() {
          var t = this, o = t._parent;
          return t._muted = o._muted, t._loop = o._loop, t._volume = o._volume, t._rate = o._rate, t._seek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = ++e._counter, o._sounds.push(t), t.create(), t;
        },
        /**
         * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
         * @return {Sound}
         */
        create: function() {
          var t = this, o = t._parent, a = e._muted || t._muted || t._parent._muted ? 0 : t._volume;
          return o._webAudio ? (t._node = typeof e.ctx.createGain > "u" ? e.ctx.createGainNode() : e.ctx.createGain(), t._node.gain.setValueAtTime(a, e.ctx.currentTime), t._node.paused = !0, t._node.connect(e.masterGain)) : e.noAudio || (t._node = e._obtainHtml5Audio(), t._errorFn = t._errorListener.bind(t), t._node.addEventListener("error", t._errorFn, !1), t._loadFn = t._loadListener.bind(t), t._node.addEventListener(e._canPlayEvent, t._loadFn, !1), t._endFn = t._endListener.bind(t), t._node.addEventListener("ended", t._endFn, !1), t._node.src = o._src, t._node.preload = o._preload === !0 ? "auto" : o._preload, t._node.volume = a * e.volume(), t._node.load()), t;
        },
        /**
         * Reset the parameters of this sound to the original state (for recycle).
         * @return {Sound}
         */
        reset: function() {
          var t = this, o = t._parent;
          return t._muted = o._muted, t._loop = o._loop, t._volume = o._volume, t._rate = o._rate, t._seek = 0, t._rateSeek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = ++e._counter, t;
        },
        /**
         * HTML5 Audio error listener callback.
         */
        _errorListener: function() {
          var t = this;
          t._parent._emit("loaderror", t._id, t._node.error ? t._node.error.code : 0), t._node.removeEventListener("error", t._errorFn, !1);
        },
        /**
         * HTML5 Audio canplaythrough listener callback.
         */
        _loadListener: function() {
          var t = this, o = t._parent;
          o._duration = Math.ceil(t._node.duration * 10) / 10, Object.keys(o._sprite).length === 0 && (o._sprite = { __default: [0, o._duration * 1e3] }), o._state !== "loaded" && (o._state = "loaded", o._emit("load"), o._loadQueue()), t._node.removeEventListener(e._canPlayEvent, t._loadFn, !1);
        },
        /**
         * HTML5 Audio ended listener callback.
         */
        _endListener: function() {
          var t = this, o = t._parent;
          o._duration === 1 / 0 && (o._duration = Math.ceil(t._node.duration * 10) / 10, o._sprite.__default[1] === 1 / 0 && (o._sprite.__default[1] = o._duration * 1e3), o._ended(t)), t._node.removeEventListener("ended", t._endFn, !1);
        }
      };
      var c = {}, u = function(t) {
        var o = t._src;
        if (c[o]) {
          t._duration = c[o].duration, g(t);
          return;
        }
        if (/^data:[^;]+;base64,/.test(o)) {
          for (var a = atob(o.split(",")[1]), l = new Uint8Array(a.length), p = 0; p < a.length; ++p)
            l[p] = a.charCodeAt(p);
          f(l.buffer, t);
        } else {
          var h = new XMLHttpRequest();
          h.open(t._xhr.method, o, !0), h.withCredentials = t._xhr.withCredentials, h.responseType = "arraybuffer", t._xhr.headers && Object.keys(t._xhr.headers).forEach(function(d) {
            h.setRequestHeader(d, t._xhr.headers[d]);
          }), h.onload = function() {
            var d = (h.status + "")[0];
            if (d !== "0" && d !== "2" && d !== "3") {
              t._emit("loaderror", null, "Failed loading audio file with status: " + h.status + ".");
              return;
            }
            f(h.response, t);
          }, h.onerror = function() {
            t._webAudio && (t._html5 = !0, t._webAudio = !1, t._sounds = [], delete c[o], t.load());
          }, m(h);
        }
      }, m = function(t) {
        try {
          t.send();
        } catch {
          t.onerror();
        }
      }, f = function(t, o) {
        var a = function() {
          o._emit("loaderror", null, "Decoding audio data failed.");
        }, l = function(p) {
          p && o._sounds.length > 0 ? (c[o._src] = p, g(o, p)) : a();
        };
        typeof Promise < "u" && e.ctx.decodeAudioData.length === 1 ? e.ctx.decodeAudioData(t).then(l).catch(a) : e.ctx.decodeAudioData(t, l, a);
      }, g = function(t, o) {
        o && !t._duration && (t._duration = o.duration), Object.keys(t._sprite).length === 0 && (t._sprite = { __default: [0, t._duration * 1e3] }), t._state !== "loaded" && (t._state = "loaded", t._emit("load"), t._loadQueue());
      }, v = function() {
        if (e.usingWebAudio) {
          try {
            typeof AudioContext < "u" ? e.ctx = new AudioContext() : typeof webkitAudioContext < "u" ? e.ctx = new webkitAudioContext() : e.usingWebAudio = !1;
          } catch {
            e.usingWebAudio = !1;
          }
          e.ctx || (e.usingWebAudio = !1);
          var t = /iP(hone|od|ad)/.test(e._navigator && e._navigator.platform), o = e._navigator && e._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), a = o ? parseInt(o[1], 10) : null;
          if (t && a && a < 9) {
            var l = /safari/.test(e._navigator && e._navigator.userAgent.toLowerCase());
            e._navigator && !l && (e.usingWebAudio = !1);
          }
          e.usingWebAudio && (e.masterGain = typeof e.ctx.createGain > "u" ? e.ctx.createGainNode() : e.ctx.createGain(), e.masterGain.gain.setValueAtTime(e._muted ? 0 : e._volume, e.ctx.currentTime), e.masterGain.connect(e.ctx.destination)), e._setup();
        }
      };
      s.Howler = e, s.Howl = i, typeof he < "u" ? (he.HowlerGlobal = n, he.Howler = e, he.Howl = i, he.Sound = r) : typeof window < "u" && (window.HowlerGlobal = n, window.Howler = e, window.Howl = i, window.Sound = r);
    })();
    /*!
     *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
     *  
     *  howler.js v2.2.4
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     */
    (function() {
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(e) {
        var i = this;
        if (!i.ctx || !i.ctx.listener)
          return i;
        for (var r = i._howls.length - 1; r >= 0; r--)
          i._howls[r].stereo(e);
        return i;
      }, HowlerGlobal.prototype.pos = function(e, i, r) {
        var c = this;
        if (!c.ctx || !c.ctx.listener)
          return c;
        if (i = typeof i != "number" ? c._pos[1] : i, r = typeof r != "number" ? c._pos[2] : r, typeof e == "number")
          c._pos = [e, i, r], typeof c.ctx.listener.positionX < "u" ? (c.ctx.listener.positionX.setTargetAtTime(c._pos[0], Howler.ctx.currentTime, 0.1), c.ctx.listener.positionY.setTargetAtTime(c._pos[1], Howler.ctx.currentTime, 0.1), c.ctx.listener.positionZ.setTargetAtTime(c._pos[2], Howler.ctx.currentTime, 0.1)) : c.ctx.listener.setPosition(c._pos[0], c._pos[1], c._pos[2]);
        else
          return c._pos;
        return c;
      }, HowlerGlobal.prototype.orientation = function(e, i, r, c, u, m) {
        var f = this;
        if (!f.ctx || !f.ctx.listener)
          return f;
        var g = f._orientation;
        if (i = typeof i != "number" ? g[1] : i, r = typeof r != "number" ? g[2] : r, c = typeof c != "number" ? g[3] : c, u = typeof u != "number" ? g[4] : u, m = typeof m != "number" ? g[5] : m, typeof e == "number")
          f._orientation = [e, i, r, c, u, m], typeof f.ctx.listener.forwardX < "u" ? (f.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, 0.1), f.ctx.listener.forwardY.setTargetAtTime(i, Howler.ctx.currentTime, 0.1), f.ctx.listener.forwardZ.setTargetAtTime(r, Howler.ctx.currentTime, 0.1), f.ctx.listener.upX.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), f.ctx.listener.upY.setTargetAtTime(u, Howler.ctx.currentTime, 0.1), f.ctx.listener.upZ.setTargetAtTime(m, Howler.ctx.currentTime, 0.1)) : f.ctx.listener.setOrientation(e, i, r, c, u, m);
        else
          return g;
        return f;
      }, Howl.prototype.init = /* @__PURE__ */ function(e) {
        return function(i) {
          var r = this;
          return r._orientation = i.orientation || [1, 0, 0], r._stereo = i.stereo || null, r._pos = i.pos || null, r._pannerAttr = {
            coneInnerAngle: typeof i.coneInnerAngle < "u" ? i.coneInnerAngle : 360,
            coneOuterAngle: typeof i.coneOuterAngle < "u" ? i.coneOuterAngle : 360,
            coneOuterGain: typeof i.coneOuterGain < "u" ? i.coneOuterGain : 0,
            distanceModel: typeof i.distanceModel < "u" ? i.distanceModel : "inverse",
            maxDistance: typeof i.maxDistance < "u" ? i.maxDistance : 1e4,
            panningModel: typeof i.panningModel < "u" ? i.panningModel : "HRTF",
            refDistance: typeof i.refDistance < "u" ? i.refDistance : 1,
            rolloffFactor: typeof i.rolloffFactor < "u" ? i.rolloffFactor : 1
          }, r._onstereo = i.onstereo ? [{ fn: i.onstereo }] : [], r._onpos = i.onpos ? [{ fn: i.onpos }] : [], r._onorientation = i.onorientation ? [{ fn: i.onorientation }] : [], e.call(this, i);
        };
      }(Howl.prototype.init), Howl.prototype.stereo = function(e, i) {
        var r = this;
        if (!r._webAudio)
          return r;
        if (r._state !== "loaded")
          return r._queue.push({
            event: "stereo",
            action: function() {
              r.stereo(e, i);
            }
          }), r;
        var c = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
        if (typeof i > "u")
          if (typeof e == "number")
            r._stereo = e, r._pos = [e, 0, 0];
          else
            return r._stereo;
        for (var u = r._getSoundIds(i), m = 0; m < u.length; m++) {
          var f = r._soundById(u[m]);
          if (f)
            if (typeof e == "number")
              f._stereo = e, f._pos = [e, 0, 0], f._node && (f._pannerAttr.panningModel = "equalpower", (!f._panner || !f._panner.pan) && n(f, c), c === "spatial" ? typeof f._panner.positionX < "u" ? (f._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), f._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), f._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : f._panner.setPosition(e, 0, 0) : f._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)), r._emit("stereo", f._id);
            else
              return f._stereo;
        }
        return r;
      }, Howl.prototype.pos = function(e, i, r, c) {
        var u = this;
        if (!u._webAudio)
          return u;
        if (u._state !== "loaded")
          return u._queue.push({
            event: "pos",
            action: function() {
              u.pos(e, i, r, c);
            }
          }), u;
        if (i = typeof i != "number" ? 0 : i, r = typeof r != "number" ? -0.5 : r, typeof c > "u")
          if (typeof e == "number")
            u._pos = [e, i, r];
          else
            return u._pos;
        for (var m = u._getSoundIds(c), f = 0; f < m.length; f++) {
          var g = u._soundById(m[f]);
          if (g)
            if (typeof e == "number")
              g._pos = [e, i, r], g._node && ((!g._panner || g._panner.pan) && n(g, "spatial"), typeof g._panner.positionX < "u" ? (g._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), g._panner.positionY.setValueAtTime(i, Howler.ctx.currentTime), g._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime)) : g._panner.setPosition(e, i, r)), u._emit("pos", g._id);
            else
              return g._pos;
        }
        return u;
      }, Howl.prototype.orientation = function(e, i, r, c) {
        var u = this;
        if (!u._webAudio)
          return u;
        if (u._state !== "loaded")
          return u._queue.push({
            event: "orientation",
            action: function() {
              u.orientation(e, i, r, c);
            }
          }), u;
        if (i = typeof i != "number" ? u._orientation[1] : i, r = typeof r != "number" ? u._orientation[2] : r, typeof c > "u")
          if (typeof e == "number")
            u._orientation = [e, i, r];
          else
            return u._orientation;
        for (var m = u._getSoundIds(c), f = 0; f < m.length; f++) {
          var g = u._soundById(m[f]);
          if (g)
            if (typeof e == "number")
              g._orientation = [e, i, r], g._node && (g._panner || (g._pos || (g._pos = u._pos || [0, 0, -0.5]), n(g, "spatial")), typeof g._panner.orientationX < "u" ? (g._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime), g._panner.orientationY.setValueAtTime(i, Howler.ctx.currentTime), g._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime)) : g._panner.setOrientation(e, i, r)), u._emit("orientation", g._id);
            else
              return g._orientation;
        }
        return u;
      }, Howl.prototype.pannerAttr = function() {
        var e = this, i = arguments, r, c, u;
        if (!e._webAudio)
          return e;
        if (i.length === 0)
          return e._pannerAttr;
        if (i.length === 1)
          if (typeof i[0] == "object")
            r = i[0], typeof c > "u" && (r.pannerAttr || (r.pannerAttr = {
              coneInnerAngle: r.coneInnerAngle,
              coneOuterAngle: r.coneOuterAngle,
              coneOuterGain: r.coneOuterGain,
              distanceModel: r.distanceModel,
              maxDistance: r.maxDistance,
              refDistance: r.refDistance,
              rolloffFactor: r.rolloffFactor,
              panningModel: r.panningModel
            }), e._pannerAttr = {
              coneInnerAngle: typeof r.pannerAttr.coneInnerAngle < "u" ? r.pannerAttr.coneInnerAngle : e._coneInnerAngle,
              coneOuterAngle: typeof r.pannerAttr.coneOuterAngle < "u" ? r.pannerAttr.coneOuterAngle : e._coneOuterAngle,
              coneOuterGain: typeof r.pannerAttr.coneOuterGain < "u" ? r.pannerAttr.coneOuterGain : e._coneOuterGain,
              distanceModel: typeof r.pannerAttr.distanceModel < "u" ? r.pannerAttr.distanceModel : e._distanceModel,
              maxDistance: typeof r.pannerAttr.maxDistance < "u" ? r.pannerAttr.maxDistance : e._maxDistance,
              refDistance: typeof r.pannerAttr.refDistance < "u" ? r.pannerAttr.refDistance : e._refDistance,
              rolloffFactor: typeof r.pannerAttr.rolloffFactor < "u" ? r.pannerAttr.rolloffFactor : e._rolloffFactor,
              panningModel: typeof r.pannerAttr.panningModel < "u" ? r.pannerAttr.panningModel : e._panningModel
            });
          else
            return u = e._soundById(parseInt(i[0], 10)), u ? u._pannerAttr : e._pannerAttr;
        else i.length === 2 && (r = i[0], c = parseInt(i[1], 10));
        for (var m = e._getSoundIds(c), f = 0; f < m.length; f++)
          if (u = e._soundById(m[f]), u) {
            var g = u._pannerAttr;
            g = {
              coneInnerAngle: typeof r.coneInnerAngle < "u" ? r.coneInnerAngle : g.coneInnerAngle,
              coneOuterAngle: typeof r.coneOuterAngle < "u" ? r.coneOuterAngle : g.coneOuterAngle,
              coneOuterGain: typeof r.coneOuterGain < "u" ? r.coneOuterGain : g.coneOuterGain,
              distanceModel: typeof r.distanceModel < "u" ? r.distanceModel : g.distanceModel,
              maxDistance: typeof r.maxDistance < "u" ? r.maxDistance : g.maxDistance,
              refDistance: typeof r.refDistance < "u" ? r.refDistance : g.refDistance,
              rolloffFactor: typeof r.rolloffFactor < "u" ? r.rolloffFactor : g.rolloffFactor,
              panningModel: typeof r.panningModel < "u" ? r.panningModel : g.panningModel
            };
            var v = u._panner;
            v || (u._pos || (u._pos = e._pos || [0, 0, -0.5]), n(u, "spatial"), v = u._panner), v.coneInnerAngle = g.coneInnerAngle, v.coneOuterAngle = g.coneOuterAngle, v.coneOuterGain = g.coneOuterGain, v.distanceModel = g.distanceModel, v.maxDistance = g.maxDistance, v.refDistance = g.refDistance, v.rolloffFactor = g.rolloffFactor, v.panningModel = g.panningModel;
          }
        return e;
      }, Sound.prototype.init = /* @__PURE__ */ function(e) {
        return function() {
          var i = this, r = i._parent;
          i._orientation = r._orientation, i._stereo = r._stereo, i._pos = r._pos, i._pannerAttr = r._pannerAttr, e.call(this), i._stereo ? r.stereo(i._stereo) : i._pos && r.pos(i._pos[0], i._pos[1], i._pos[2], i._id);
        };
      }(Sound.prototype.init), Sound.prototype.reset = /* @__PURE__ */ function(e) {
        return function() {
          var i = this, r = i._parent;
          return i._orientation = r._orientation, i._stereo = r._stereo, i._pos = r._pos, i._pannerAttr = r._pannerAttr, i._stereo ? r.stereo(i._stereo) : i._pos ? r.pos(i._pos[0], i._pos[1], i._pos[2], i._id) : i._panner && (i._panner.disconnect(0), i._panner = void 0, r._refreshBuffer(i)), e.call(this);
        };
      }(Sound.prototype.reset);
      var n = function(e, i) {
        i = i || "spatial", i === "spatial" ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.panningModel = e._pannerAttr.panningModel, typeof e._panner.positionX < "u" ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime), e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime), e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), typeof e._panner.orientationX < "u" ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime), e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime), e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
      };
    })();
  }(De)), De;
}
var qe = Xn();
const pt = /\[(\d{1,3}):(\d{2})(?:[.:](\d{1,3}))?\]/g;
function Qn(s) {
  const n = [];
  for (const e of s.split(/\r?\n/)) {
    const i = [...e.matchAll(pt)], r = e.replace(pt, "").trim();
    if (!(!r || i.length === 0))
      for (const c of i) {
        const u = Number(c[1]), m = Number(c[2]), f = c[3] ?? "0", g = Number(f) / 10 ** f.length;
        n.push({ time: u * 60 + m + g, text: r });
      }
  }
  return n.sort((e, i) => e.time - i.time);
}
function Zn(s, n) {
  let e = -1;
  for (let i = 0; i < s.length && !((s[i]?.time ?? Number.POSITIVE_INFINITY) > n); i += 1)
    e = i;
  return e;
}
class Kn {
  constructor(n) {
    this.config = n, this.state = Ln(n.initialVolume, n.order), qe.Howler.volume(this.state.volume), this.root.id = "ff-music-player", this.root.className = "ff-music-player", this.root.dataset.i18nAttr = "aria-label:music.title", this.root.innerHTML = `
      <button class="ff-music-cover" type="button" data-action="expand" data-i18n-attr="aria-label:music.togglePlaylist">
        <img data-i18n-attr="alt:music.coverAlt" src="/blog/media/takina/avatar.png">
      </button>
      <div class="ff-music-main">
        <div class="ff-music-meta"><strong data-i18n="music.title"></strong><span data-i18n="music.hint"></span></div>
        <div class="ff-music-lyric" aria-live="polite" data-i18n="music.ready"></div>
        <input class="ff-music-progress" type="range" min="0" max="1000" value="0" data-i18n-attr="aria-label:music.progress">
        <div class="ff-music-controls">
          <button type="button" data-action="previous" data-i18n-attr="aria-label:music.previous">⏮</button>
          <button type="button" data-action="toggle">▶</button>
          <button type="button" data-action="next" data-i18n-attr="aria-label:music.next">⏭</button>
          <button type="button" data-action="order" data-i18n-attr="aria-label:music.order.toggle">↻</button>
          <input class="ff-music-volume" type="range" min="0" max="100" data-i18n-attr="aria-label:music.volume">
        </div>
      </div>
      <div class="ff-music-list" data-i18n-attr="aria-label:music.playlist"></div>`, this.renderLocale(), this.unsubscribeLocale = le(() => this.renderLocale()), document.body.append(this.root), this.alignToSidebar(), window.addEventListener("resize", this.onResize), this.bind(), this.loadPlaylist();
  }
  root = document.createElement("section");
  tracks = [];
  currentIndex = 0;
  sound;
  state;
  lyrics = [];
  frame;
  expanded = !1;
  docked = !1;
  open = !1;
  listeners = /* @__PURE__ */ new Set();
  onResize = () => this.alignToSidebar();
  unsubscribeLocale;
  destroy() {
    window.removeEventListener("resize", this.onResize), this.unsubscribeLocale(), this.frame !== void 0 && cancelAnimationFrame(this.frame), this.sound?.unload(), this.listeners.clear(), this.root.remove();
  }
  /** Listeners receive the current snapshot immediately, then every change. */
  subscribe(n) {
    return this.listeners.add(n), n(this.snapshot()), () => this.listeners.delete(n);
  }
  /** A docked player is a popover of the dock, hidden until opened. */
  setDocked(n) {
    this.docked = n, this.root.classList.toggle("is-docked", n), n || this.setOpen(!1), this.alignToSidebar();
  }
  setOpen(n) {
    this.open = n && this.docked, this.root.classList.toggle("is-open", this.open), this.emit();
  }
  isOpen() {
    return this.open;
  }
  alignToSidebar() {
    const e = (!this.docked && window.innerWidth > 1200 ? document.querySelector("#aside-content .card-widget") : null)?.getBoundingClientRect();
    if (!e?.width) {
      this.root.style.removeProperty("left"), this.root.style.removeProperty("width");
      return;
    }
    this.root.style.left = `${Math.round(e.left)}px`, this.root.style.width = `${Math.round(e.width)}px`;
  }
  async loadPlaylist() {
    this.tracks = [...this.config.localTracks];
    try {
      if (this.config.apiBase) {
        const e = await fetch(`${this.config.apiBase}/playlist`, {
          headers: { Accept: "application/json" },
          signal: AbortSignal.timeout(6e3)
        });
        if (e.ok) {
          const i = await e.json(), r = new Set(this.tracks.map((c) => `${c.source}:${c.id}`));
          for (const c of i.tracks ?? []) {
            const u = `${c.source}:${c.id}`;
            r.has(u) || this.tracks.push(c);
          }
        }
      }
    } catch {
    }
    const n = this.tracks.findIndex((e) => e.id === this.state.trackId);
    this.currentIndex = n >= 0 ? n : 0, this.renderTrack(), this.renderList();
  }
  bind() {
    this.root.addEventListener("click", (e) => {
      const i = e.target.closest("[data-action]");
      if (!i) return;
      const r = i.dataset.action;
      r === "toggle" && this.toggle(), r === "previous" && this.previous(), r === "next" && this.next(!1), r === "order" && this.cycleOrder(), r === "expand" && this.setExpanded(!this.expanded), r === "select" && this.select(Number(i.dataset.index));
    }), this.root.querySelector(".ff-music-volume")?.addEventListener("input", (e) => {
      this.state.volume = Number(e.target.value) / 100, qe.Howler.volume(this.state.volume), this.persist();
    }), this.root.querySelector(".ff-music-progress")?.addEventListener("change", (e) => {
      const i = this.sound?.duration() ?? 0;
      i > 0 && this.sound?.seek(Number(e.target.value) / 1e3 * i);
    });
    const n = this.root.querySelector(".ff-music-volume");
    n && (n.value = String(Math.round(this.state.volume * 100))), this.installMediaSession();
  }
  toggle() {
    if (this.tracks.length) {
      if (!this.sound) {
        this.loadCurrent(!0);
        return;
      }
      this.sound.playing() ? this.sound.pause() : this.sound.play();
    }
  }
  async loadCurrent(n) {
    const e = this.tracks[this.currentIndex];
    if (!e) return;
    this.sound?.unload();
    const i = e.source === "local" ? e.url : `${this.config.apiBase}/tracks/${encodeURIComponent(e.neteaseId)}/stream`;
    this.sound = new qe.Howl({
      src: [i],
      html5: !0,
      volume: this.state.volume,
      onplay: () => this.onPlay(),
      onpause: () => this.onPause(),
      onstop: () => this.onPause(),
      onend: () => this.next(!0),
      onloaderror: () => this.skipUnavailable(),
      onplayerror: () => this.onPause()
    }), await this.loadLyrics(e), this.renderTrack(), this.updateMediaMetadata(e), n && this.sound.play();
  }
  async loadLyrics(n) {
    const e = n.source === "local" ? n.lyric : `${this.config.apiBase}/tracks/${n.neteaseId}/lyric`;
    if (!e) {
      this.lyrics = [];
      return;
    }
    try {
      const i = await fetch(e, { signal: AbortSignal.timeout(5e3) }), r = i.headers.get("content-type")?.includes("json") ? (await i.json()).lyric ?? "" : await i.text();
      this.lyrics = Qn(r);
    } catch {
      this.lyrics = [];
    }
  }
  onPlay() {
    this.root.classList.add("is-playing"), this.renderToggle(!0), "mediaSession" in navigator && (navigator.mediaSession.playbackState = "playing"), this.emit(), this.tick();
  }
  onPause() {
    this.root.classList.remove("is-playing"), this.renderToggle(!1), "mediaSession" in navigator && (navigator.mediaSession.playbackState = "paused"), this.persist(), this.emit();
  }
  tick = () => {
    const n = Number(this.sound?.seek() ?? 0), e = this.sound?.duration() ?? 0, i = this.root.querySelector(".ff-music-progress");
    i && e > 0 && (i.value = String(Math.round(n / e * 1e3))), this.renderLyric(n), this.sound?.playing() && (this.frame = requestAnimationFrame(this.tick));
  };
  previous() {
    this.currentIndex = (this.currentIndex - 1 + this.tracks.length) % this.tracks.length, this.loadCurrent(!0);
  }
  next(n) {
    if (!this.tracks.length) return;
    if (n && this.state.order === "single") return void this.loadCurrent(!0);
    const e = Jn(this.currentIndex, this.tracks.length, this.state.order, n);
    if (e === -1) return this.onPause();
    this.currentIndex = e, this.loadCurrent(!0);
  }
  select(n) {
    !Number.isInteger(n) || n < 0 || n >= this.tracks.length || (this.currentIndex = n, this.loadCurrent(!0));
  }
  skipUnavailable() {
    if (this.tracks.length <= 1) return this.onPause();
    this.next(!1);
  }
  cycleOrder() {
    const n = ["list", "loop", "single", "random"], e = n.indexOf(this.state.order);
    this.state.order = n[(e + 1) % n.length] ?? "loop", this.renderOrder(), this.persist();
  }
  renderTrack() {
    const n = this.tracks[this.currentIndex];
    if (!n) return;
    const e = this.root.querySelector(".ff-music-meta strong"), i = this.root.querySelector(".ff-music-meta span"), r = this.root.querySelector(".ff-music-cover img");
    e && (delete e.dataset.i18n, e.textContent = n.title), i && (delete i.dataset.i18n, i.textContent = n.artists.join(" / ")), r && (r.src = n.cover ?? "/blog/media/takina/avatar.png"), this.state.trackId = n.id, this.persist(), this.emit();
  }
  renderList() {
    const n = this.root.querySelector(".ff-music-list");
    n && (n.replaceChildren(), this.tracks.forEach((e, i) => {
      const r = document.createElement("button");
      r.type = "button", r.dataset.action = "select", r.dataset.index = String(i), r.textContent = `${e.title} · ${e.artists.join(" / ")}`, n.append(r);
    }));
  }
  setExpanded(n) {
    this.expanded = n, this.root.classList.toggle("is-expanded", n);
  }
  renderLocale() {
    ie(this.root), this.renderToggle(), this.renderOrder(), this.sound && this.renderLyric(Number(this.sound.seek() ?? 0)), this.emit();
  }
  renderToggle(n = this.sound?.playing() ?? !1) {
    const e = this.root.querySelector("[data-action=toggle]");
    e && (e.textContent = n ? "⏸" : "▶", e.setAttribute("aria-label", D(n ? "media.pause" : "media.play")));
  }
  renderOrder() {
    const n = this.root.querySelector("[data-action=order]"), e = D(`music.order.${this.state.order}`);
    n && (n.title = D("music.order.current", { mode: e }));
  }
  renderLyric(n) {
    const e = this.root.querySelector(".ff-music-lyric");
    if (!e) return;
    delete e.dataset.i18n;
    const i = this.lyrics[Zn(this.lyrics, n)]?.text;
    e.textContent = i ?? (this.lyrics.length ? "♪" : D("music.instrumental"));
  }
  snapshot() {
    const n = this.tracks[this.currentIndex];
    return {
      title: n?.title ?? D("music.title"),
      artists: n?.artists.join(" / ") ?? "",
      playing: this.sound?.playing() ?? !1,
      open: this.open
    };
  }
  emit() {
    const n = this.snapshot();
    this.listeners.forEach((e) => e(n));
  }
  persist() {
    Mn({ ...this.state, seek: Number(this.sound?.seek() ?? 0) });
  }
  installMediaSession() {
    "mediaSession" in navigator && (navigator.mediaSession.setActionHandler("play", () => this.toggle()), navigator.mediaSession.setActionHandler("pause", () => this.toggle()), navigator.mediaSession.setActionHandler("previoustrack", () => this.previous()), navigator.mediaSession.setActionHandler("nexttrack", () => this.next(!1)));
  }
  updateMediaMetadata(n) {
    "mediaSession" in navigator && (navigator.mediaSession.metadata = new MediaMetadata({
      title: n.title,
      artist: n.artists.join(" / "),
      album: n.source === "netease" ? n.album : "Takina Ying",
      artwork: n.cover ? [{ src: n.cover }] : void 0
    }));
  }
}
function Jn(s, n, e, i, r = Math.random) {
  return n <= 0 ? -1 : e === "single" && i ? s : e === "random" ? Math.floor(r() * n) : s + 1 < n ? s + 1 : e === "list" && i ? -1 : 0;
}
class eo {
  unsubscribeLocale;
  constructor() {
    document.addEventListener("click", this.onClick), this.unsubscribeLocale = le((n) => {
      this.sync(this.normalizeLang(n));
    }), this.refresh();
  }
  refresh() {
    const e = this.langFromHash() ?? this.normalizeLang(be());
    this.sync(e);
  }
  destroy() {
    document.removeEventListener("click", this.onClick), this.unsubscribeLocale();
  }
  onClick = (n) => {
    const e = n.target?.closest("[data-switch-lang]");
    if (!e) return;
    const i = e.dataset.switchLang;
    if (!i) return;
    n.preventDefault();
    const r = this.normalizeLang(i);
    this.sync(r), history.replaceState && history.replaceState(null, "", `#${r}`), Ye(r);
  };
  langFromHash() {
    const n = window.location.hash.replace(/^#/, "").trim();
    if (!n) return;
    const e = this.normalizeLang(n);
    return document.querySelector(`[data-post-lang="${e}"]`) ? e : void 0;
  }
  normalizeLang(n) {
    return n.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
  }
  sync(n) {
    const e = [...document.querySelectorAll("[data-post-lang]")];
    if (e.length === 0) return;
    const r = new Set(e.map((c) => c.dataset.postLang)).has(n) ? n : e[0]?.dataset.postLang ?? "en";
    for (const c of e) {
      const u = c.dataset.postLang === r;
      c.hidden = !u;
    }
    document.querySelectorAll("[data-switch-lang]").forEach((c) => {
      const u = this.normalizeLang(c.dataset.switchLang ?? "") === r;
      c.classList.toggle("is-active", u), c.setAttribute("aria-current", u ? "true" : "false");
    });
  }
}
class to {
  constructor(n, e) {
    this.settings = n, this.onChange = e, this.root.className = "ff-settings", this.root.innerHTML = `
      <button class="ff-settings-trigger" type="button" data-i18n-attr="aria-label:settings.trigger" aria-expanded="false">✦</button>
      <div class="ff-settings-panel" hidden>
        <strong data-i18n="settings.title"></strong>
        <label><span data-i18n="settings.video"></span><input type="checkbox" data-setting="video"></label>
        <label><span data-i18n="settings.carousel"></span><input type="checkbox" data-setting="carousel"></label>
        <label><span data-i18n="settings.effects"></span><input type="checkbox" data-setting="effects"></label>
        <label><span data-i18n="settings.live2d"></span><input type="checkbox" data-setting="live2d"></label>
        <label><span data-i18n="settings.overlay"></span><input type="range" min="0" max="85" data-setting="overlayOpacity"></label>
        <label class="ff-settings-locale" hidden><span data-i18n="settings.language"></span><select data-locale></select></label>
        <div class="ff-settings-mode">
          <button type="button" data-mode="wallpaper" data-i18n="settings.mode.wallpaper"></button>
          <button type="button" data-mode="video" data-i18n="settings.mode.video"></button>
        </div>
      </div>`, ie(this.root), this.renderLocales(), document.body.append(this.root), this.sync(), this.bind(), this.disposers.push(
      le(() => {
        ie(this.root), this.renderLocales();
      }),
      Hn(() => this.renderLocales())
    );
  }
  root = document.createElement("aside");
  disposers = [];
  destroy() {
    this.disposers.forEach((n) => n()), this.root.remove();
  }
  /** External controls (the dock) change settings through the same commit path. */
  patch(n) {
    this.settings = { ...this.settings, ...n }, this.commit();
  }
  setVideoFallback() {
    this.settings = { ...this.settings, backgroundMode: "wallpaper" }, this.commit();
  }
  bind() {
    const n = this.root.querySelector(".ff-settings-trigger"), e = this.root.querySelector(".ff-settings-panel");
    n?.addEventListener("click", () => {
      e && (e.hidden = !e.hidden, n.setAttribute("aria-expanded", String(!e.hidden)));
    }), this.root.querySelectorAll("[data-setting]").forEach((r) => {
      r.addEventListener("input", () => {
        const c = r.dataset.setting;
        c === "overlayOpacity" ? this.settings.overlayOpacity = Number(r.value) / 100 : c === "video" ? this.settings.video = r.checked : c === "carousel" ? this.settings.carousel = r.checked : c === "effects" ? this.settings.effects = r.checked : c === "live2d" && (this.settings.live2d = r.checked), this.commit();
      });
    });
    const i = this.root.querySelector("[data-locale]");
    i?.addEventListener("change", () => {
      Ye(i.value).then((r) => {
        r || (i.value = be());
      });
    }), this.root.querySelectorAll("[data-mode]").forEach((r) => {
      r.addEventListener("click", () => {
        this.settings.backgroundMode = r.dataset.mode === "video" ? "video" : "wallpaper", this.commit();
      });
    });
  }
  /** One option per registered locale; the row stays hidden until there is a choice. */
  renderLocales() {
    const n = this.root.querySelector(".ff-settings-locale"), e = n?.querySelector("select");
    if (!n || !e) return;
    const i = Et();
    n.hidden = i.length < 2, e.replaceChildren(...i.map(({ code: r, label: c }) => {
      const u = document.createElement("option");
      return u.value = r, u.lang = r, u.textContent = c === r ? r : `${c} (${r})`, u;
    })), e.value = be();
  }
  commit() {
    xn(this.settings), this.sync(), this.onChange({ ...this.settings });
  }
  sync() {
    for (const e of ["video", "carousel", "effects", "live2d"]) {
      const i = this.root.querySelector(`[data-setting=${e}]`);
      i && (i.checked = this.settings[e]);
    }
    const n = this.root.querySelector("[data-setting=overlayOpacity]");
    n && (n.value = String(Math.round(this.settings.overlayOpacity * 100))), this.root.querySelectorAll("[data-mode]").forEach((e) => {
      e.classList.toggle("is-active", e.dataset.mode === this.settings.backgroundMode);
    });
  }
}
const no = ["title", "heotip", "alt"], oo = [
  "nav.home",
  "nav.articles",
  "nav.archives",
  "nav.categories",
  "nav.tags",
  "nav.community",
  "nav.links",
  "nav.profile",
  "nav.music",
  "nav.about"
], io = ["time.justNow", "time.minutesAgo", "time.hoursAgo", "time.daysAgo", "time.monthsAgo"], ro = [
  {
    selector: "#nav .menus_items a.site-page, #sidebar-menus .menus_items a.site-page",
    label: ":scope > span",
    keys: oo
  },
  {
    selector: "#site-name, #page-name-text, #randomPost_button > a, #search-button > a, #nav-totop",
    attributesOnly: !0,
    keys: ["nav.backHome", "nav.backToTop", "nav.randomPost", "nav.search"]
  },
  { selector: "#sidebar-menus .site-data .headline", keys: ["nav.archives", "nav.categories", "nav.tags"] },
  { selector: "#sidebar-menus > .sidebar-menu-item-title", keys: ["sidebar.function", "sidebar.tags"] },
  { selector: "#sidebar-menus .darkmode_switchbutton > span", keys: ["sidebar.displayMode"] },
  {
    selector: "#category-bar .category-bar-item > a, #category-bar .category-bar-more",
    label: ":scope > span:not(.category-bar-link-icon)",
    keys: [
      "categoryBar.featured",
      "categoryBar.featuredTip",
      "categoryBar.allPosts",
      "categoryBar.allPostsTip",
      "categoryBar.more",
      "categoryBar.moreTip",
      "categoryBar.categoryTip"
    ]
  },
  {
    selector: "#aside-content #sayhi",
    keys: [
      "aside.greeting.morning",
      "aside.greeting.noon",
      "aside.greeting.afternoon",
      "aside.greeting.night",
      "aside.greeting.goodnight",
      "aside.greeting.longTimeNoSee",
      "aside.greeting.welcomeBack"
    ]
  },
  { selector: "#aside-content .card-info .avatar img", attributesOnly: !0, keys: ["aside.avatarAlt"] },
  { selector: "#aside-content .card-info .description", keys: ["aside.bioDescription"] },
  { selector: "#aside-content .card-info .bottom-group .desc", keys: ["aside.bioTagline"] },
  { selector: "#aside-content .card-recent-post .item-headline > span", keys: ["aside.recentPosts"] },
  { selector: "#aside-content .webinfo-item .item-name", keys: ["aside.postsCount", "aside.runtime", "aside.lastUpdate"] },
  { selector: "#aside-content #runtimeshow", keys: ["aside.daysUnit"] },
  { selector: "#aside-content .webinfo-item time, #recent-posts .post-meta-date time", keys: io },
  { selector: "#recent-posts .recent-post-info-top-tips > span.original", keys: ["post.new"] },
  { selector: "#recent-posts .recent-post-info-top-tips > .unvisited-post", keys: ["post.unread"] },
  { selector: "#st-footer .footer-title", keys: ["footer.navigation", "footer.resources"] },
  { selector: "#st-footer .footer-item", keys: ["footer.archives", "footer.tags", "footer.about", "footer.credits"] },
  { selector: "#footer_mini_logo, #footer_mini_logo img", attributesOnly: !0, keys: ["nav.backToTop"] },
  { selector: "#footer-bar .copyright", keys: ["footer.copyright"] },
  { selector: "#footer-bar .beian-group > .footer-bar-link", keys: ["footer.framework", "footer.theme"] }
], Ae = /* @__PURE__ */ new WeakMap(), ht = /* @__PURE__ */ new Map();
function xe(s) {
  return s.replace(/\s+/g, " ").trim();
}
function so(s) {
  let n = ht.get(s);
  if (!n) {
    const e = [], i = xe(de[s]).split(/(\{\w+\})/).map((r) => {
      const c = /^\{(\w+)\}$/.exec(r)?.[1];
      return c ? (e.push(c), "(.+?)") : r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }).join("");
    n = { regex: new RegExp(`^${i}$`), names: e }, ht.set(s, n);
  }
  return n;
}
function ao(s, n) {
  const e = xe(s);
  if (e)
    for (const i of n) {
      const { regex: r, names: c } = so(i), u = r.exec(e);
      if (u)
        return c.length ? { key: i, params: Object.fromEntries(c.map((m, f) => [m, u[f + 1]])) } : { key: i };
    }
}
function co(s, n) {
  if (!n.attributesOnly) {
    if (n.label) {
      const e = s.querySelector(n.label);
      if (e) return e;
    }
    return s.children.length ? [...s.childNodes].find((e) => e.nodeType === Node.TEXT_NODE && !!e.textContent?.trim()) : s;
  }
}
function lo(s, n, e) {
  return n !== "text" ? s.getAttribute(n) : e?.textContent ?? null;
}
function uo(s, n, e, i) {
  n !== "text" ? s.setAttribute(n, e) : i && (i.textContent = e);
}
function fo(s) {
  return `data-theme-i18n-${s}`;
}
function mt(s, n, e, i) {
  const r = lo(s, n, i);
  if (r === null) return;
  const c = xe(r), u = Ae.get(s)?.get(n), m = fo(n);
  let f = s.getAttribute(m), g = po(s.getAttribute(`${m}-params`));
  if (!f || u !== c) {
    const o = ao(c, e);
    if (o)
      f = o.key, g = o.params, s.setAttribute(m, f), g ? s.setAttribute(`${m}-params`, JSON.stringify(g)) : s.removeAttribute(`${m}-params`);
    else if (u !== void 0 || !f || !(f in de)) {
      s.removeAttribute(m), s.removeAttribute(`${m}-params`), Ae.get(s)?.delete(n);
      return;
    }
  }
  const v = D(f, g);
  r !== v && uo(s, n, v, i);
  let t = Ae.get(s);
  t || Ae.set(s, t = /* @__PURE__ */ new Map()), t.set(n, xe(v));
}
function po(s) {
  if (s)
    try {
      return JSON.parse(s);
    } catch {
      return;
    }
}
function gt(s = document) {
  for (const n of ro)
    for (const e of s.querySelectorAll(n.selector)) {
      const i = co(e, n);
      i && mt(e, "text", n.keys, i);
      for (const r of no) mt(e, r, n.keys);
    }
}
const ho = "#sayhi, #runtimeshow, .webinfo-item time, .post-meta-date time";
class mo {
  observer = new MutationObserver(() => this.schedule());
  scheduled = !1;
  refresh() {
    gt(), document.querySelectorAll(".ff-pages-comments").forEach(ie), this.observer.disconnect();
    for (const n of document.querySelectorAll(ho))
      this.observer.observe(n, { childList: !0, characterData: !0, subtree: !0 });
  }
  destroy() {
    this.observer.disconnect();
  }
  schedule() {
    this.scheduled || (this.scheduled = !0, queueMicrotask(() => {
      this.scheduled = !1, gt();
    }));
  }
}
function go(s) {
  if (!s || typeof s != "object") return;
  const n = s, e = (c) => {
    if (typeof c != "number" && !(typeof c == "string" && /^\d+$/.test(c))) return;
    const u = Number(c);
    return Number.isSafeInteger(u) && u >= 0 ? u : void 0;
  }, i = e(n.busuanzi_today_pv), r = e(n.busuanzi_site_pv);
  if (!(i === void 0 || r === void 0 || r < i))
    return { today: i, total: r };
}
class _o {
  page;
  counts;
  status = "loading";
  request;
  unsubscribe = le(() => this.render());
  refresh() {
    if (!document.querySelector("[data-visit-stats]")) return;
    const n = location.origin + location.pathname;
    if (this.page === n) {
      this.render();
      return;
    }
    this.page = n, this.request?.abort(), this.counts = void 0;
    const e = location.hostname;
    if (e === "localhost" || e.endsWith(".localhost") || !e.includes(".") || e.includes(":") || /^(\d{1,3}\.){3}\d{1,3}$/.test(e)) {
      this.status = "local", this.render();
      return;
    }
    this.status = "loading", this.render();
    const i = new AbortController();
    this.request = i;
    const r = window.setTimeout(() => i.abort(), 6e3);
    let c = "";
    try {
      document.referrer && (c = new URL(document.referrer).origin);
    } catch {
    }
    fetch("https://cdn.busuanzi.cc/api.php", {
      method: "POST",
      body: JSON.stringify({ url: n, referrer: c }),
      credentials: "omit",
      referrerPolicy: "no-referrer",
      cache: "no-store",
      signal: i.signal
    }).then(async (u) => {
      if (!u.ok) throw new Error("Visit counts unavailable");
      const m = go(await u.json());
      if (!m) throw new Error("Invalid visit counts");
      this.request === i && (this.counts = m, this.status = "ready");
    }).catch(() => {
      this.request === i && (this.counts = void 0, this.status = "unavailable");
    }).finally(() => {
      window.clearTimeout(r), this.request === i && this.render();
    });
  }
  render() {
    const n = document.querySelector("[data-visit-stats]");
    if (n) {
      ie(n), n.dataset.status = this.status, n.title = D(`visits.${this.status}`), n.setAttribute("aria-busy", String(this.status === "loading"));
      for (const e of ["today", "total"]) {
        const i = n.querySelector(`[data-visit-${e}]`);
        i && (i.textContent = this.counts ? new Intl.NumberFormat(be()).format(this.counts[e]) : "—");
      }
    }
  }
  destroy() {
    this.unsubscribe(), this.request?.abort(), this.request = void 0;
  }
}
class vo {
  constructor(n) {
    this.config = n, this.ensureHomeHero(), this.isMobile = matchMedia(`(max-width: ${n.mobile.breakpoint - 1}px)`).matches;
    const e = {
      schema: 1,
      backgroundMode: n.background.defaultMode,
      carousel: !0,
      video: n.background.video.enabled,
      overlayOpacity: n.background.overlayOpacity,
      effects: n.effects.enabled,
      live2d: n.live2d.defaultEnabled
    };
    this.settings = Tn(e), this.background = new kn(
      n,
      this.settings,
      () => this.settingsPanel?.setVideoFallback()
    ), n.music.enabled && (this.music = new Kn(n.music)), this.settingsPanel = new to({ ...this.settings }, (i) => this.applySettings(i)), this.dock = new Wn({
      toggleBackground: () => this.toggleBackground(),
      toggleCompanion: () => this.toggleCompanion()
    }, this.music), this.dock.onMove(() => this.live2d?.followPerch()), this.bento = new Gn(n.site.homePath, this.music), this.bento.refresh(), this.syncDock(), this.applyEffects(), this.applyLive2D(), this.bindLifecycle(), this.themeI18n.refresh(), this.visitStats.refresh(), this.disposers.push(le(() => {
      Un(), this.themeI18n.refresh();
    }));
  }
  background;
  music;
  live2d;
  live2dGeneration = 0;
  effects;
  settingsPanel;
  dock;
  bento;
  themeI18n = new mo();
  postBilingual = new eo();
  visitStats = new _o();
  settings;
  disposers = [];
  reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  isMobile;
  refreshPage() {
    this.ensureHomeHero(), this.bento.refresh(), this.effects?.refreshPage(), this.dock.refresh(), this.themeI18n.refresh(), this.postBilingual.refresh(), this.visitStats.refresh(), requestAnimationFrame(() => this.music?.alignToSidebar());
  }
  ensureHomeHero() {
    const n = document.querySelector("#home_top");
    if (!n || n.querySelector(".ff-hero-copy")) return;
    const e = document.createElement("div");
    e.className = "ff-hero-copy";
    const i = document.createElement("strong");
    i.textContent = this.config.site.title;
    const r = document.createElement("span");
    r.className = "ff-quote-zh", r.lang = "zh-CN";
    const c = document.createElement("span");
    c.className = "ff-quote-ja", c.lang = "ja";
    const u = this.config.site.subtitle[0];
    if (!u) return;
    r.textContent = u.text, c.textContent = u.ja ?? "";
    const m = document.createElement("a");
    m.className = "ff-quote-source", m.target = "_blank", m.rel = "noopener noreferrer", e.append(i, c, r, m), $e(e, u), n.prepend(e);
  }
  destroy() {
    this.disposers.forEach((n) => n()), this.bento.destroy(), this.dock.destroy(), this.background.destroy(), this.music?.destroy(), this.live2dGeneration++, this.live2d?.stop(), this.effects?.stop(), this.settingsPanel.destroy(), this.themeI18n.destroy(), this.postBilingual.destroy(), this.visitStats.destroy(), delete window.__fireflyEnhancements;
  }
  applySettings(n) {
    const e = n.effects !== this.settings.effects, i = n.live2d !== this.settings.live2d;
    this.settings = n, this.background.updateSettings(n), e && this.applyEffects(), (e || i) && (this.live2d?.stop(), this.live2d = void 0, this.applyLive2D()), this.syncDock();
  }
  get videoAvailable() {
    return this.config.background.video.enabled && !this.reducedMotion && !(this.isMobile && !this.config.mobile.video);
  }
  get companionAvailable() {
    return this.config.live2d.enabled && !this.reducedMotion && !(this.isMobile && !this.config.mobile.live2d);
  }
  syncDock() {
    this.dock.sync({
      backgroundMode: this.background.getMode(),
      videoAvailable: this.videoAvailable,
      companion: this.settings.live2d && this.settings.effects,
      companionAvailable: this.companionAvailable
    });
  }
  toggleBackground() {
    this.background.getMode() === "video" ? this.settingsPanel.patch({ backgroundMode: "wallpaper" }) : this.settingsPanel.patch({ backgroundMode: "video", video: !0 });
  }
  toggleCompanion() {
    if (this.settings.live2d && this.settings.effects) {
      this.settingsPanel.patch({ live2d: !1 });
      return;
    }
    On(), this.settingsPanel.patch({ live2d: !0, effects: !0 });
  }
  applyEffects() {
    this.effects?.stop(), this.effects = void 0, !(!this.settings.effects || this.reducedMotion || this.isMobile) && (this.effects = new Yn(this.config), this.effects.start());
  }
  async applyLive2D() {
    const n = ++this.live2dGeneration;
    if (!(!this.settings.live2d || !this.settings.effects || !this.config.live2d.enabled || this.reducedMotion || this.isMobile && !this.config.mobile.live2d))
      try {
        const { Live2DManager: e } = await import("./live2d-NWDPna_Q.js");
        if (n !== this.live2dGeneration) return;
        this.live2d = new e(this.config.live2d, { perch: () => this.dock.anchor() }), await this.live2d.start();
      } catch (e) {
        console.warn(D("live2d.unavailable"), e);
      }
  }
  bindLifecycle() {
    const n = () => this.effects?.beforeNavigate(), e = () => this.refreshPage();
    document.addEventListener("solitude:beforeNavigate", n), document.addEventListener("solitude:afterNavigate", e), window.addEventListener("pjax:send", n), document.addEventListener("pjax:complete", e), this.disposers.push(
      () => document.removeEventListener("solitude:beforeNavigate", n),
      () => document.removeEventListener("solitude:afterNavigate", e),
      () => window.removeEventListener("pjax:send", n),
      () => document.removeEventListener("pjax:complete", e)
    );
  }
}
async function _t() {
  if (!window.__fireflyEnhancements)
    try {
      const s = await fetch("/blog/custom/config.json", {
        headers: { Accept: "application/json" },
        cache: "no-cache"
      });
      if (!s.ok) throw new Error(`Configuration request failed: ${s.status}`);
      const n = await s.json();
      await Vn(n.i18n), window.__fireflyEnhancements = new vo(n), document.documentElement.classList.add("ff-enhancements-ready");
    } catch (s) {
      console.error(D("app.initFailed"), s);
    }
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => void _t(), { once: !0 }) : _t();
export {
  Pn as C,
  On as c,
  be as g,
  ut as i,
  le as o,
  D as t
};
