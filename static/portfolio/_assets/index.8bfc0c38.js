function e(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let e = 0; e < s.length; e++) n[s[e]] = !0;
  return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
}
function t(e) {
  if (w(e)) {
    const n = {};
    for (let s = 0; s < e.length; s++) {
      const o = e[s],
        l = P(o) ? r(o) : t(o);
      if (l) for (const e in l) n[e] = l[e];
    }
    return n;
  }
  return P(e) || O(e) ? e : void 0;
}
const n = /;(?![^(]*\))/g,
  s = /:([^]+)/,
  o = /\/\*.*?\*\//gs;
function r(e) {
  const t = {};
  return (
    e
      .replace(o, "")
      .split(n)
      .forEach((e) => {
        if (e) {
          const n = e.split(s);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function l(e) {
  let t = "";
  if (P(e)) t = e;
  else if (w(e))
    for (let n = 0; n < e.length; n++) {
      const s = l(e[n]);
      s && (t += s + " ");
    }
  else if (O(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const i = e(
  "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
);
function c(e) {
  return !!e || "" === e;
}
const a = (e) =>
    P(e)
      ? e
      : null == e
      ? ""
      : w(e) || (O(e) && (e.toString === T || !k(e.toString)))
      ? JSON.stringify(e, u, 2)
      : String(e),
  u = (e, t) =>
    t && t.__v_isRef
      ? u(e, t.value)
      : S(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (e, [t, n]) => ((e[`${t} =>`] = n), e),
            {}
          ),
        }
      : C(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : !O(t) || w(t) || M(t)
      ? t
      : String(t),
  p = {},
  f = [],
  d = () => {},
  h = () => !1,
  g = /^on[^a-z]/,
  m = (e) => g.test(e),
  v = (e) => e.startsWith("onUpdate:"),
  y = Object.assign,
  _ = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  x = Object.prototype.hasOwnProperty,
  b = (e, t) => x.call(e, t),
  w = Array.isArray,
  S = (e) => "[object Map]" === E(e),
  C = (e) => "[object Set]" === E(e),
  k = (e) => "function" == typeof e,
  P = (e) => "string" == typeof e,
  j = (e) => "symbol" == typeof e,
  O = (e) => null !== e && "object" == typeof e,
  F = (e) => O(e) && k(e.then) && k(e.catch),
  T = Object.prototype.toString,
  E = (e) => T.call(e),
  M = (e) => "[object Object]" === E(e),
  R = (e) => P(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
  A = e(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  I = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  N = /-(\w)/g,
  B = I((e) => e.replace(N, (e, t) => (t ? t.toUpperCase() : ""))),
  $ = /\B([A-Z])/g,
  V = I((e) => e.replace($, "-$1").toLowerCase()),
  U = I((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  L = I((e) => (e ? `on${U(e)}` : "")),
  D = (e, t) => !Object.is(e, t),
  W = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  z = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  H = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let J;
let q;
class G {
  constructor(e = !1) {
    (this.detached = e),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = q),
      !e && q && (this.index = (q.scopes || (q.scopes = [])).push(this) - 1);
  }
  run(e) {
    if (this.active) {
      const t = q;
      try {
        return (q = this), e();
      } finally {
        q = t;
      }
    }
  }
  on() {
    q = this;
  }
  off() {
    q = this.parent;
  }
  stop(e) {
    if (this.active) {
      let t, n;
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
      for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !e) {
        const e = this.parent.scopes.pop();
        e &&
          e !== this &&
          ((this.parent.scopes[this.index] = e), (e.index = this.index));
      }
      (this.parent = void 0), (this.active = !1);
    }
  }
}
const K = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  X = (e) => (e.w & ee) > 0,
  Q = (e) => (e.n & ee) > 0,
  Z = new WeakMap();
let Y = 0,
  ee = 1;
let te;
const ne = Symbol(""),
  se = Symbol("");
class oe {
  constructor(e, t = null, n) {
    (this.fn = e),
      (this.scheduler = t),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      (function (e, t = q) {
        t && t.active && t.effects.push(e);
      })(this, n);
  }
  run() {
    if (!this.active) return this.fn();
    let e = te,
      t = le;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = te),
        (te = this),
        (le = !0),
        (ee = 1 << ++Y),
        Y <= 30
          ? (({ deps: e }) => {
              if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ee;
            })(this)
          : re(this),
        this.fn()
      );
    } finally {
      Y <= 30 &&
        ((e) => {
          const { deps: t } = e;
          if (t.length) {
            let n = 0;
            for (let s = 0; s < t.length; s++) {
              const o = t[s];
              X(o) && !Q(o) ? o.delete(e) : (t[n++] = o),
                (o.w &= ~ee),
                (o.n &= ~ee);
            }
            t.length = n;
          }
        })(this),
        (ee = 1 << --Y),
        (te = this.parent),
        (le = t),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    te === this
      ? (this.deferStop = !0)
      : this.active &&
        (re(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function re(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let le = !0;
const ie = [];
function ce() {
  ie.push(le), (le = !1);
}
function ae() {
  const e = ie.pop();
  le = void 0 === e || e;
}
function ue(e, t, n) {
  if (le && te) {
    let t = Z.get(e);
    t || Z.set(e, (t = new Map()));
    let s = t.get(n);
    s || t.set(n, (s = K())), pe(s);
  }
}
function pe(e, t) {
  let n = !1;
  Y <= 30 ? Q(e) || ((e.n |= ee), (n = !X(e))) : (n = !e.has(te)),
    n && (e.add(te), te.deps.push(e));
}
function fe(e, t, n, s, o, r) {
  const l = Z.get(e);
  if (!l) return;
  let i = [];
  if ("clear" === t) i = [...l.values()];
  else if ("length" === n && w(e)) {
    const e = H(s);
    l.forEach((t, n) => {
      ("length" === n || n >= e) && i.push(t);
    });
  } else
    switch ((void 0 !== n && i.push(l.get(n)), t)) {
      case "add":
        w(e)
          ? R(n) && i.push(l.get("length"))
          : (i.push(l.get(ne)), S(e) && i.push(l.get(se)));
        break;
      case "delete":
        w(e) || (i.push(l.get(ne)), S(e) && i.push(l.get(se)));
        break;
      case "set":
        S(e) && i.push(l.get(ne));
    }
  if (1 === i.length) i[0] && de(i[0]);
  else {
    const e = [];
    for (const t of i) t && e.push(...t);
    de(K(e));
  }
}
function de(e, t) {
  const n = w(e) ? e : [...e];
  for (const e of n) e.computed && he(e);
  for (const e of n) e.computed || he(e);
}
function he(e, t) {
  (e !== te || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const ge = e("__proto__,__v_isRef,__isVue"),
  me = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => "arguments" !== e && "caller" !== e)
      .map((e) => Symbol[e])
      .filter(j)
  ),
  ve = we(),
  ye = we(!1, !0),
  _e = we(!0),
  xe = be();
function be() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...e) {
        const n = lt(this);
        for (let e = 0, t = this.length; e < t; e++) ue(n, 0, e + "");
        const s = n[t](...e);
        return -1 === s || !1 === s ? n[t](...e.map(lt)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...e) {
        ce();
        const n = lt(this)[t].apply(this, e);
        return ae(), n;
      };
    }),
    e
  );
}
function we(e = !1, t = !1) {
  return function (n, s, o) {
    if ("__v_isReactive" === s) return !e;
    if ("__v_isReadonly" === s) return e;
    if ("__v_isShallow" === s) return t;
    if ("__v_raw" === s && o === (e ? (t ? Qe : Xe) : t ? Ke : Ge).get(n))
      return n;
    const r = w(n);
    if (!e && r && b(xe, s)) return Reflect.get(xe, s, o);
    const l = Reflect.get(n, s, o);
    return (j(s) ? me.has(s) : ge(s))
      ? l
      : (e || ue(n, 0, s),
        t
          ? l
          : ut(l)
          ? r && R(s)
            ? l
            : l.value
          : O(l)
          ? e
            ? et(l)
            : Ye(l)
          : l);
  };
}
function Se(e = !1) {
  return function (t, n, s, o) {
    let r = t[n];
    if (st(r) && ut(r) && !ut(s)) return !1;
    if (
      !e &&
      (ot(s) || st(s) || ((r = lt(r)), (s = lt(s))), !w(t) && ut(r) && !ut(s))
    )
      return (r.value = s), !0;
    const l = w(t) && R(n) ? Number(n) < t.length : b(t, n),
      i = Reflect.set(t, n, s, o);
    return (
      t === lt(o) && (l ? D(s, r) && fe(t, "set", n, s) : fe(t, "add", n, s)), i
    );
  };
}
const Ce = {
    get: ve,
    set: Se(),
    deleteProperty: function (e, t) {
      const n = b(e, t);
      e[t];
      const s = Reflect.deleteProperty(e, t);
      return s && n && fe(e, "delete", t, void 0), s;
    },
    has: function (e, t) {
      const n = Reflect.has(e, t);
      return (j(t) && me.has(t)) || ue(e, 0, t), n;
    },
    ownKeys: function (e) {
      return ue(e, 0, w(e) ? "length" : ne), Reflect.ownKeys(e);
    },
  },
  ke = { get: _e, set: (e, t) => !0, deleteProperty: (e, t) => !0 },
  Pe = y({}, Ce, { get: ye, set: Se(!0) }),
  je = (e) => e,
  Oe = (e) => Reflect.getPrototypeOf(e);
function Fe(e, t, n = !1, s = !1) {
  const o = lt((e = e.__v_raw)),
    r = lt(t);
  n || (t !== r && ue(o, 0, t), ue(o, 0, r));
  const { has: l } = Oe(o),
    i = s ? je : n ? at : ct;
  return l.call(o, t)
    ? i(e.get(t))
    : l.call(o, r)
    ? i(e.get(r))
    : void (e !== o && e.get(t));
}
function Te(e, t = !1) {
  const n = this.__v_raw,
    s = lt(n),
    o = lt(e);
  return (
    t || (e !== o && ue(s, 0, e), ue(s, 0, o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function Ee(e, t = !1) {
  return (e = e.__v_raw), !t && ue(lt(e), 0, ne), Reflect.get(e, "size", e);
}
function Me(e) {
  e = lt(e);
  const t = lt(this);
  return Oe(t).has.call(t, e) || (t.add(e), fe(t, "add", e, e)), this;
}
function Re(e, t) {
  t = lt(t);
  const n = lt(this),
    { has: s, get: o } = Oe(n);
  let r = s.call(n, e);
  r || ((e = lt(e)), (r = s.call(n, e)));
  const l = o.call(n, e);
  return (
    n.set(e, t), r ? D(t, l) && fe(n, "set", e, t) : fe(n, "add", e, t), this
  );
}
function Ae(e) {
  const t = lt(this),
    { has: n, get: s } = Oe(t);
  let o = n.call(t, e);
  o || ((e = lt(e)), (o = n.call(t, e))), s && s.call(t, e);
  const r = t.delete(e);
  return o && fe(t, "delete", e, void 0), r;
}
function Ie() {
  const e = lt(this),
    t = 0 !== e.size,
    n = e.clear();
  return t && fe(e, "clear", void 0, void 0), n;
}
function Ne(e, t) {
  return function (n, s) {
    const o = this,
      r = o.__v_raw,
      l = lt(r),
      i = t ? je : e ? at : ct;
    return !e && ue(l, 0, ne), r.forEach((e, t) => n.call(s, i(e), i(t), o));
  };
}
function Be(e, t, n) {
  return function (...s) {
    const o = this.__v_raw,
      r = lt(o),
      l = S(r),
      i = "entries" === e || (e === Symbol.iterator && l),
      c = "keys" === e && l,
      a = o[e](...s),
      u = n ? je : t ? at : ct;
    return (
      !t && ue(r, 0, c ? se : ne),
      {
        next() {
          const { value: e, done: t } = a.next();
          return t
            ? { value: e, done: t }
            : { value: i ? [u(e[0]), u(e[1])] : u(e), done: t };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function $e(e) {
  return function (...t) {
    return "delete" !== e && this;
  };
}
function Ve() {
  const e = {
      get(e) {
        return Fe(this, e);
      },
      get size() {
        return Ee(this);
      },
      has: Te,
      add: Me,
      set: Re,
      delete: Ae,
      clear: Ie,
      forEach: Ne(!1, !1),
    },
    t = {
      get(e) {
        return Fe(this, e, !1, !0);
      },
      get size() {
        return Ee(this);
      },
      has: Te,
      add: Me,
      set: Re,
      delete: Ae,
      clear: Ie,
      forEach: Ne(!1, !0),
    },
    n = {
      get(e) {
        return Fe(this, e, !0);
      },
      get size() {
        return Ee(this, !0);
      },
      has(e) {
        return Te.call(this, e, !0);
      },
      add: $e("add"),
      set: $e("set"),
      delete: $e("delete"),
      clear: $e("clear"),
      forEach: Ne(!0, !1),
    },
    s = {
      get(e) {
        return Fe(this, e, !0, !0);
      },
      get size() {
        return Ee(this, !0);
      },
      has(e) {
        return Te.call(this, e, !0);
      },
      add: $e("add"),
      set: $e("set"),
      delete: $e("delete"),
      clear: $e("clear"),
      forEach: Ne(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Be(o, !1, !1)),
        (n[o] = Be(o, !0, !1)),
        (t[o] = Be(o, !1, !0)),
        (s[o] = Be(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [Ue, Le, De, We] = Ve();
function ze(e, t) {
  const n = t ? (e ? We : De) : e ? Le : Ue;
  return (t, s, o) =>
    "__v_isReactive" === s
      ? !e
      : "__v_isReadonly" === s
      ? e
      : "__v_raw" === s
      ? t
      : Reflect.get(b(n, s) && s in t ? n : t, s, o);
}
const He = { get: ze(!1, !1) },
  Je = { get: ze(!1, !0) },
  qe = { get: ze(!0, !1) },
  Ge = new WeakMap(),
  Ke = new WeakMap(),
  Xe = new WeakMap(),
  Qe = new WeakMap();
function Ze(e) {
  return e.__v_skip || !Object.isExtensible(e)
    ? 0
    : (function (e) {
        switch (e) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      })(((e) => E(e).slice(8, -1))(e));
}
function Ye(e) {
  return st(e) ? e : tt(e, !1, Ce, He, Ge);
}
function et(e) {
  return tt(e, !0, ke, qe, Xe);
}
function tt(e, t, n, s, o) {
  if (!O(e)) return e;
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
  const r = o.get(e);
  if (r) return r;
  const l = Ze(e);
  if (0 === l) return e;
  const i = new Proxy(e, 2 === l ? s : n);
  return o.set(e, i), i;
}
function nt(e) {
  return st(e) ? nt(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function st(e) {
  return !(!e || !e.__v_isReadonly);
}
function ot(e) {
  return !(!e || !e.__v_isShallow);
}
function rt(e) {
  return nt(e) || st(e);
}
function lt(e) {
  const t = e && e.__v_raw;
  return t ? lt(t) : e;
}
function it(e) {
  return z(e, "__v_skip", !0), e;
}
const ct = (e) => (O(e) ? Ye(e) : e),
  at = (e) => (O(e) ? et(e) : e);
function ut(e) {
  return !(!e || !0 !== e.__v_isRef);
}
const pt = {
  get: (e, t, n) => {
    return ut((s = Reflect.get(e, t, n))) ? s.value : s;
    var s;
  },
  set: (e, t, n, s) => {
    const o = e[t];
    return ut(o) && !ut(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function ft(e) {
  return nt(e) ? e : new Proxy(e, pt);
}
var dt;
class ht {
  constructor(e, t, n, s) {
    (this._setter = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[dt] = !1),
      (this._dirty = !0),
      (this.effect = new oe(e, () => {
        var e;
        this._dirty ||
          ((this._dirty = !0), (e = lt((e = this))).dep && de(e.dep));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = n);
  }
  get value() {
    const e = lt(this);
    var t;
    return (
      (t = e),
      le && te && pe((t = lt(t)).dep || (t.dep = K())),
      (!e._dirty && e._cacheable) ||
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function gt(e, t, n, s) {
  let o;
  try {
    o = s ? e(...s) : e();
  } catch (e) {
    vt(e, t, n);
  }
  return o;
}
function mt(e, t, n, s) {
  if (k(e)) {
    const o = gt(e, t, n, s);
    return (
      o &&
        F(o) &&
        o.catch((e) => {
          vt(e, t, n);
        }),
      o
    );
  }
  const o = [];
  for (let r = 0; r < e.length; r++) o.push(mt(e[r], t, n, s));
  return o;
}
function vt(e, t, n, s = !0) {
  t && t.vnode;
  if (t) {
    let s = t.parent;
    const o = t.proxy,
      r = n;
    for (; s; ) {
      const t = s.ec;
      if (t)
        for (let n = 0; n < t.length; n++) if (!1 === t[n](e, o, r)) return;
      s = s.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) return void gt(l, null, 10, [e, o, r]);
  }
  !(function (e, t, n, s = !0) {
    console.error(e);
  })(e, 0, 0, s);
}
dt = "__v_isReadonly";
let yt = !1,
  _t = !1;
const xt = [];
let bt = 0;
const wt = [];
let St = null,
  Ct = 0;
const kt = Promise.resolve();
let Pt = null;
function jt(e) {
  const t = Pt || kt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ot(e) {
  (xt.length && xt.includes(e, yt && e.allowRecurse ? bt + 1 : bt)) ||
    (null == e.id
      ? xt.push(e)
      : xt.splice(
          (function (e) {
            let t = bt + 1,
              n = xt.length;
            for (; t < n; ) {
              const s = (t + n) >>> 1;
              Mt(xt[s]) < e ? (t = s + 1) : (n = s);
            }
            return t;
          })(e.id),
          0,
          e
        ),
    Ft());
}
function Ft() {
  yt || _t || ((_t = !0), (Pt = kt.then(At)));
}
function Tt(e, t = yt ? bt + 1 : 0) {
  for (; t < xt.length; t++) {
    const e = xt[t];
    e && e.pre && (xt.splice(t, 1), t--, e());
  }
}
function Et(e) {
  if (wt.length) {
    const e = [...new Set(wt)];
    if (((wt.length = 0), St)) return void St.push(...e);
    for (St = e, St.sort((e, t) => Mt(e) - Mt(t)), Ct = 0; Ct < St.length; Ct++)
      St[Ct]();
    (St = null), (Ct = 0);
  }
}
const Mt = (e) => (null == e.id ? 1 / 0 : e.id),
  Rt = (e, t) => {
    const n = Mt(e) - Mt(t);
    if (0 === n) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function At(e) {
  (_t = !1), (yt = !0), xt.sort(Rt);
  try {
    for (bt = 0; bt < xt.length; bt++) {
      const e = xt[bt];
      e && !1 !== e.active && gt(e, null, 14);
    }
  } finally {
    (bt = 0),
      (xt.length = 0),
      Et(),
      (yt = !1),
      (Pt = null),
      (xt.length || wt.length) && At();
  }
}
function It(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || p;
  let o = n;
  const r = t.startsWith("update:"),
    l = r && t.slice(7);
  if (l && l in s) {
    const e = `${"modelValue" === l ? "model" : l}Modifiers`,
      { number: t, trim: r } = s[e] || p;
    r && (o = n.map((e) => (P(e) ? e.trim() : e))), t && (o = n.map(H));
  }
  let i,
    c = s[(i = L(t))] || s[(i = L(B(t)))];
  !c && r && (c = s[(i = L(V(t)))]), c && mt(c, e, 6, o);
  const a = s[i + "Once"];
  if (a) {
    if (e.emitted) {
      if (e.emitted[i]) return;
    } else e.emitted = {};
    (e.emitted[i] = !0), mt(a, e, 6, o);
  }
}
function Nt(e, t, n = !1) {
  const s = t.emitsCache,
    o = s.get(e);
  if (void 0 !== o) return o;
  const r = e.emits;
  let l = {},
    i = !1;
  if (!k(e)) {
    const s = (e) => {
      const n = Nt(e, t, !0);
      n && ((i = !0), y(l, n));
    };
    !n && t.mixins.length && t.mixins.forEach(s),
      e.extends && s(e.extends),
      e.mixins && e.mixins.forEach(s);
  }
  return r || i
    ? (w(r) ? r.forEach((e) => (l[e] = null)) : y(l, r), O(e) && s.set(e, l), l)
    : (O(e) && s.set(e, null), null);
}
function Bt(e, t) {
  return (
    !(!e || !m(t)) &&
    ((t = t.slice(2).replace(/Once$/, "")),
    b(e, t[0].toLowerCase() + t.slice(1)) || b(e, V(t)) || b(e, t))
  );
}
let $t = null,
  Vt = null;
function Ut(e) {
  const t = $t;
  return ($t = e), (Vt = (e && e.type.__scopeId) || null), t;
}
function Lt(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    props: r,
    propsOptions: [l],
    slots: i,
    attrs: c,
    emit: a,
    render: u,
    renderCache: p,
    data: f,
    setupState: d,
    ctx: h,
    inheritAttrs: g,
  } = e;
  let m, y;
  const _ = Ut(e);
  try {
    if (4 & n.shapeFlag) {
      const e = o || s;
      (m = ws(u.call(e, e, p, r, d, f, h))), (y = c);
    } else {
      const e = t;
      0,
        (m = ws(
          e.length > 1 ? e(r, { attrs: c, slots: i, emit: a }) : e(r, null)
        )),
        (y = t.props ? c : Dt(c));
    }
  } catch (t) {
    (ls.length = 0), vt(t, e, 1), (m = ys(os));
  }
  let x = m;
  if (y && !1 !== g) {
    const e = Object.keys(y),
      { shapeFlag: t } = x;
    e.length && 7 & t && (l && e.some(v) && (y = Wt(y, l)), (x = _s(x, y)));
  }
  return (
    n.dirs && ((x = _s(x)), (x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (x.transition = n.transition),
    (m = x),
    Ut(_),
    m
  );
}
const Dt = (e) => {
    let t;
    for (const n in e)
      ("class" === n || "style" === n || m(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Wt = (e, t) => {
    const n = {};
    for (const s in e) (v(s) && s.slice(9) in t) || (n[s] = e[s]);
    return n;
  };
function zt(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !Bt(n, r)) return !0;
  }
  return !1;
}
function Ht(e, t, n = !1) {
  const s = Os || $t;
  if (s) {
    const o =
      null == s.parent
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && k(t) ? t.call(s.proxy) : t;
  }
}
const Jt = {};
function qt(e, t, n) {
  return Gt(e, t, n);
}
function Gt(
  e,
  t,
  { immediate: n, deep: s, flush: o, onTrack: r, onTrigger: l } = p
) {
  const i = Os;
  let c,
    a,
    u = !1,
    f = !1;
  if (
    (ut(e)
      ? ((c = () => e.value), (u = ot(e)))
      : nt(e)
      ? ((c = () => e), (s = !0))
      : w(e)
      ? ((f = !0),
        (u = e.some((e) => nt(e) || ot(e))),
        (c = () =>
          e.map((e) =>
            ut(e) ? e.value : nt(e) ? Qt(e) : k(e) ? gt(e, i, 2) : void 0
          )))
      : (c = k(e)
          ? t
            ? () => gt(e, i, 2)
            : () => {
                if (!i || !i.isUnmounted) return a && a(), mt(e, i, 3, [g]);
              }
          : d),
    t && s)
  ) {
    const e = c;
    c = () => Qt(e());
  }
  let h,
    g = (e) => {
      a = x.onStop = () => {
        gt(e, i, 4);
      };
    };
  if (Ms) {
    if (
      ((g = d),
      t ? n && mt(t, i, 3, [c(), f ? [] : void 0, g]) : c(),
      "sync" !== o)
    )
      return d;
    {
      const e = $s();
      h = e.__watcherHandles || (e.__watcherHandles = []);
    }
  }
  let m = f ? new Array(e.length).fill(Jt) : Jt;
  const v = () => {
    if (x.active)
      if (t) {
        const e = x.run();
        (s || u || (f ? e.some((e, t) => D(e, m[t])) : D(e, m))) &&
          (a && a(),
          mt(t, i, 3, [e, m === Jt ? void 0 : f && m[0] === Jt ? [] : m, g]),
          (m = e));
      } else x.run();
  };
  let y;
  (v.allowRecurse = !!t),
    "sync" === o
      ? (y = v)
      : "post" === o
      ? (y = () => Zn(v, i && i.suspense))
      : ((v.pre = !0), i && (v.id = i.uid), (y = () => Ot(v)));
  const x = new oe(c, y);
  t
    ? n
      ? v()
      : (m = x.run())
    : "post" === o
    ? Zn(x.run.bind(x), i && i.suspense)
    : x.run();
  const b = () => {
    x.stop(), i && i.scope && _(i.scope.effects, x);
  };
  return h && h.push(b), b;
}
function Kt(e, t, n) {
  const s = this.proxy,
    o = P(e) ? (e.includes(".") ? Xt(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  k(t) ? (r = t) : ((r = t.handler), (n = t));
  const l = Os;
  Fs(this);
  const i = Gt(o, r.bind(s), n);
  return l ? Fs(l) : Ts(), i;
}
function Xt(e, t) {
  const n = t.split(".");
  return () => {
    let t = e;
    for (let e = 0; e < n.length && t; e++) t = t[n[e]];
    return t;
  };
}
function Qt(e, t) {
  if (!O(e) || e.__v_skip) return e;
  if ((t = t || new Set()).has(e)) return e;
  if ((t.add(e), ut(e))) Qt(e.value, t);
  else if (w(e)) for (let n = 0; n < e.length; n++) Qt(e[n], t);
  else if (C(e) || S(e))
    e.forEach((e) => {
      Qt(e, t);
    });
  else if (M(e)) for (const n in e) Qt(e[n], t);
  return e;
}
const Zt = (e) => !!e.type.__asyncLoader,
  Yt = (e) => e.type.__isKeepAlive;
function en(e, t) {
  nn(e, "a", t);
}
function tn(e, t) {
  nn(e, "da", t);
}
function nn(e, t, n = Os) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let t = n;
      for (; t; ) {
        if (t.isDeactivated) return;
        t = t.parent;
      }
      return e();
    });
  if ((on(t, s, n), n)) {
    let e = n.parent;
    for (; e && e.parent; )
      Yt(e.parent.vnode) && sn(s, t, n, e), (e = e.parent);
  }
}
function sn(e, t, n, s) {
  const o = on(t, e, s, !0);
  fn(() => {
    _(s[t], o);
  }, n);
}
function on(e, t, n = Os, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...s) => {
          if (n.isUnmounted) return;
          ce(), Fs(n);
          const o = mt(t, n, e, s);
          return Ts(), ae(), o;
        });
    return s ? o.unshift(r) : o.push(r), r;
  }
}
const rn =
    (e) =>
    (t, n = Os) =>
      (!Ms || "sp" === e) && on(e, (...e) => t(...e), n),
  ln = rn("bm"),
  cn = rn("m"),
  an = rn("bu"),
  un = rn("u"),
  pn = rn("bum"),
  fn = rn("um"),
  dn = rn("sp"),
  hn = rn("rtg"),
  gn = rn("rtc");
function mn(e, t = Os) {
  on("ec", e, t);
}
function vn(e, t, n, s) {
  const o = e.dirs,
    r = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const i = o[l];
    r && (i.oldValue = r[l].value);
    let c = i.dir[s];
    c && (ce(), mt(c, n, 8, [e.el, i, e, t]), ae());
  }
}
const yn = Symbol();
function _n(e, t, n, s) {
  let o;
  const r = n && n[s];
  if (w(e) || P(e)) {
    o = new Array(e.length);
    for (let n = 0, s = e.length; n < s; n++)
      o[n] = t(e[n], n, void 0, r && r[n]);
  } else if ("number" == typeof e) {
    o = new Array(e);
    for (let n = 0; n < e; n++) o[n] = t(n + 1, n, void 0, r && r[n]);
  } else if (O(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (e, n) => t(e, n, void 0, r && r[n]));
    else {
      const n = Object.keys(e);
      o = new Array(n.length);
      for (let s = 0, l = n.length; s < l; s++) {
        const l = n[s];
        o[s] = t(e[l], l, s, r && r[s]);
      }
    }
  else o = [];
  return n && (n[s] = o), o;
}
const xn = (e) => (e ? (Es(e) ? Is(e) || e.proxy : xn(e.parent)) : null),
  bn = y(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => xn(e.parent),
    $root: (e) => xn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => On(e),
    $forceUpdate: (e) => e.f || (e.f = () => Ot(e.update)),
    $nextTick: (e) => e.n || (e.n = jt.bind(e.proxy)),
    $watch: (e) => Kt.bind(e),
  }),
  wn = (e, t) => e !== p && !e.__isScriptSetup && b(e, t),
  Sn = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: o,
        props: r,
        accessCache: l,
        type: i,
        appContext: c,
      } = e;
      let a;
      if ("$" !== t[0]) {
        const i = l[t];
        if (void 0 !== i)
          switch (i) {
            case 1:
              return s[t];
            case 2:
              return o[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (wn(s, t)) return (l[t] = 1), s[t];
          if (o !== p && b(o, t)) return (l[t] = 2), o[t];
          if ((a = e.propsOptions[0]) && b(a, t)) return (l[t] = 3), r[t];
          if (n !== p && b(n, t)) return (l[t] = 4), n[t];
          Cn && (l[t] = 0);
        }
      }
      const u = bn[t];
      let f, d;
      return u
        ? ("$attrs" === t && ue(e, 0, t), u(e))
        : (f = i.__cssModules) && (f = f[t])
        ? f
        : n !== p && b(n, t)
        ? ((l[t] = 4), n[t])
        : ((d = c.config.globalProperties), b(d, t) ? d[t] : void 0);
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: o, ctx: r } = e;
      return wn(o, t)
        ? ((o[t] = n), !0)
        : s !== p && b(s, t)
        ? ((s[t] = n), !0)
        : !b(e.props, t) &&
          ("$" !== t[0] || !(t.slice(1) in e)) &&
          ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: o,
          propsOptions: r,
        },
      },
      l
    ) {
      let i;
      return (
        !!n[l] ||
        (e !== p && b(e, l)) ||
        wn(t, l) ||
        ((i = r[0]) && b(i, l)) ||
        b(s, l) ||
        b(bn, l) ||
        b(o.config.globalProperties, l)
      );
    },
    defineProperty(e, t, n) {
      return (
        null != n.get
          ? (e._.accessCache[t] = 0)
          : b(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Cn = !0;
function kn(e) {
  const t = On(e),
    n = e.proxy,
    s = e.ctx;
  (Cn = !1), t.beforeCreate && Pn(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: r,
    methods: l,
    watch: i,
    provide: c,
    inject: a,
    created: u,
    beforeMount: p,
    mounted: f,
    beforeUpdate: h,
    updated: g,
    activated: m,
    deactivated: v,
    beforeDestroy: y,
    beforeUnmount: _,
    destroyed: x,
    unmounted: b,
    render: S,
    renderTracked: C,
    renderTriggered: P,
    errorCaptured: j,
    serverPrefetch: F,
    expose: T,
    inheritAttrs: E,
    components: M,
    directives: R,
    filters: A,
  } = t;
  if (
    (a &&
      (function (e, t, n = d, s = !1) {
        w(e) && (e = Mn(e));
        for (const n in e) {
          const o = e[n];
          let r;
          (r = O(o)
            ? "default" in o
              ? Ht(o.from || n, o.default, !0)
              : Ht(o.from || n)
            : Ht(o)),
            ut(r) && s
              ? Object.defineProperty(t, n, {
                  enumerable: !0,
                  configurable: !0,
                  get: () => r.value,
                  set: (e) => (r.value = e),
                })
              : (t[n] = r);
        }
      })(a, s, null, e.appContext.config.unwrapInjectedRef),
    l)
  )
    for (const e in l) {
      const t = l[e];
      k(t) && (s[e] = t.bind(n));
    }
  if (o) {
    const t = o.call(n, n);
    O(t) && (e.data = Ye(t));
  }
  if (((Cn = !0), r))
    for (const e in r) {
      const t = r[e],
        o = k(t) ? t.bind(n, n) : k(t.get) ? t.get.bind(n, n) : d,
        l = !k(t) && k(t.set) ? t.set.bind(n) : d,
        i = Ns({ get: o, set: l });
      Object.defineProperty(s, e, {
        enumerable: !0,
        configurable: !0,
        get: () => i.value,
        set: (e) => (i.value = e),
      });
    }
  if (i) for (const e in i) jn(i[e], s, n, e);
  if (c) {
    const e = k(c) ? c.call(n) : c;
    Reflect.ownKeys(e).forEach((t) => {
      !(function (e, t) {
        if (Os) {
          let n = Os.provides;
          const s = Os.parent && Os.parent.provides;
          s === n && (n = Os.provides = Object.create(s)), (n[e] = t);
        }
      })(t, e[t]);
    });
  }
  function I(e, t) {
    w(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
  }
  if (
    (u && Pn(u, e, "c"),
    I(ln, p),
    I(cn, f),
    I(an, h),
    I(un, g),
    I(en, m),
    I(tn, v),
    I(mn, j),
    I(gn, C),
    I(hn, P),
    I(pn, _),
    I(fn, b),
    I(dn, F),
    w(T))
  )
    if (T.length) {
      const t = e.exposed || (e.exposed = {});
      T.forEach((e) => {
        Object.defineProperty(t, e, {
          get: () => n[e],
          set: (t) => (n[e] = t),
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === d && (e.render = S),
    null != E && (e.inheritAttrs = E),
    M && (e.components = M),
    R && (e.directives = R);
}
function Pn(e, t, n) {
  mt(w(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function jn(e, t, n, s) {
  const o = s.includes(".") ? Xt(n, s) : () => n[s];
  if (P(e)) {
    const n = t[e];
    k(n) && qt(o, n);
  } else if (k(e)) qt(o, e.bind(n));
  else if (O(e))
    if (w(e)) e.forEach((e) => jn(e, t, n, s));
    else {
      const s = k(e.handler) ? e.handler.bind(n) : t[e.handler];
      k(s) && qt(o, s, e);
    }
}
function On(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: o,
      optionsCache: r,
      config: { optionMergeStrategies: l },
    } = e.appContext,
    i = r.get(t);
  let c;
  return (
    i
      ? (c = i)
      : o.length || n || s
      ? ((c = {}), o.length && o.forEach((e) => Fn(c, e, l, !0)), Fn(c, t, l))
      : (c = t),
    O(t) && r.set(t, c),
    c
  );
}
function Fn(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Fn(e, r, n, !0), o && o.forEach((t) => Fn(e, t, n, !0));
  for (const o in t)
    if (s && "expose" === o);
    else {
      const s = Tn[o] || (n && n[o]);
      e[o] = s ? s(e[o], t[o]) : t[o];
    }
  return e;
}
const Tn = {
  data: En,
  props: An,
  emits: An,
  methods: An,
  computed: An,
  beforeCreate: Rn,
  created: Rn,
  beforeMount: Rn,
  mounted: Rn,
  beforeUpdate: Rn,
  updated: Rn,
  beforeDestroy: Rn,
  beforeUnmount: Rn,
  destroyed: Rn,
  unmounted: Rn,
  activated: Rn,
  deactivated: Rn,
  errorCaptured: Rn,
  serverPrefetch: Rn,
  components: An,
  directives: An,
  watch: function (e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = y(Object.create(null), e);
    for (const s in t) n[s] = Rn(e[s], t[s]);
    return n;
  },
  provide: En,
  inject: function (e, t) {
    return An(Mn(e), Mn(t));
  },
};
function En(e, t) {
  return t
    ? e
      ? function () {
          return y(
            k(e) ? e.call(this, this) : e,
            k(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Mn(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Rn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function An(e, t) {
  return e ? y(y(Object.create(null), e), t) : t;
}
function In(e, t, n, s = !1) {
  const o = {},
    r = {};
  z(r, hs, 1), (e.propsDefaults = Object.create(null)), Nn(e, t, o, r);
  for (const t in e.propsOptions[0]) t in o || (o[t] = void 0);
  n
    ? (e.props = s ? o : tt(o, !1, Pe, Je, Ke))
    : e.type.props
    ? (e.props = o)
    : (e.props = r),
    (e.attrs = r);
}
function Nn(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let l,
    i = !1;
  if (t)
    for (let c in t) {
      if (A(c)) continue;
      const a = t[c];
      let u;
      o && b(o, (u = B(c)))
        ? r && r.includes(u)
          ? ((l || (l = {}))[u] = a)
          : (n[u] = a)
        : Bt(e.emitsOptions, c) ||
          (c in s && a === s[c]) ||
          ((s[c] = a), (i = !0));
    }
  if (r) {
    const t = lt(n),
      s = l || p;
    for (let l = 0; l < r.length; l++) {
      const i = r[l];
      n[i] = Bn(o, t, i, s[i], e, !b(s, i));
    }
  }
  return i;
}
function Bn(e, t, n, s, o, r) {
  const l = e[n];
  if (null != l) {
    const e = b(l, "default");
    if (e && void 0 === s) {
      const e = l.default;
      if (l.type !== Function && k(e)) {
        const { propsDefaults: r } = o;
        n in r ? (s = r[n]) : (Fs(o), (s = r[n] = e.call(null, t)), Ts());
      } else s = e;
    }
    l[0] &&
      (r && !e ? (s = !1) : !l[1] || ("" !== s && s !== V(n)) || (s = !0));
  }
  return s;
}
function $n(e, t, n = !1) {
  const s = t.propsCache,
    o = s.get(e);
  if (o) return o;
  const r = e.props,
    l = {},
    i = [];
  let c = !1;
  if (!k(e)) {
    const s = (e) => {
      c = !0;
      const [n, s] = $n(e, t, !0);
      y(l, n), s && i.push(...s);
    };
    !n && t.mixins.length && t.mixins.forEach(s),
      e.extends && s(e.extends),
      e.mixins && e.mixins.forEach(s);
  }
  if (!r && !c) return O(e) && s.set(e, f), f;
  if (w(r))
    for (let e = 0; e < r.length; e++) {
      const t = B(r[e]);
      Vn(t) && (l[t] = p);
    }
  else if (r)
    for (const e in r) {
      const t = B(e);
      if (Vn(t)) {
        const n = r[e],
          s = (l[t] = w(n) || k(n) ? { type: n } : Object.assign({}, n));
        if (s) {
          const e = Dn(Boolean, s.type),
            n = Dn(String, s.type);
          (s[0] = e > -1),
            (s[1] = n < 0 || e < n),
            (e > -1 || b(s, "default")) && i.push(t);
        }
      }
    }
  const a = [l, i];
  return O(e) && s.set(e, a), a;
}
function Vn(e) {
  return "$" !== e[0];
}
function Un(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/);
  return t ? t[1] : null === e ? "null" : "";
}
function Ln(e, t) {
  return Un(e) === Un(t);
}
function Dn(e, t) {
  return w(t) ? t.findIndex((t) => Ln(t, e)) : k(t) && Ln(t, e) ? 0 : -1;
}
const Wn = (e) => "_" === e[0] || "$stable" === e,
  zn = (e) => (w(e) ? e.map(ws) : [ws(e)]),
  Hn = (e, t, n) => {
    if (t._n) return t;
    const s = (function (e, t = $t, n) {
      if (!t) return e;
      if (e._n) return e;
      const s = (...n) => {
        s._d && us(-1);
        const o = Ut(t);
        let r;
        try {
          r = e(...n);
        } finally {
          Ut(o), s._d && us(1);
        }
        return r;
      };
      return (s._n = !0), (s._c = !0), (s._d = !0), s;
    })((...e) => zn(t(...e)), n);
    return (s._c = !1), s;
  },
  Jn = (e, t, n) => {
    const s = e._ctx;
    for (const n in e) {
      if (Wn(n)) continue;
      const o = e[n];
      if (k(o)) t[n] = Hn(0, o, s);
      else if (null != o) {
        const e = zn(o);
        t[n] = () => e;
      }
    }
  },
  qn = (e, t) => {
    const n = zn(t);
    e.slots.default = () => n;
  };
function Gn() {
  return {
    app: null,
    config: {
      isNativeTag: h,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Kn = 0;
function Xn(e, t) {
  return function (n, s = null) {
    k(n) || (n = Object.assign({}, n)), null == s || O(s) || (s = null);
    const o = Gn(),
      r = new Set();
    let l = !1;
    const i = (o.app = {
      _uid: Kn++,
      _component: n,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Vs,
      get config() {
        return o.config;
      },
      set config(e) {},
      use: (e, ...t) => (
        r.has(e) ||
          (e && k(e.install)
            ? (r.add(e), e.install(i, ...t))
            : k(e) && (r.add(e), e(i, ...t))),
        i
      ),
      mixin: (e) => (o.mixins.includes(e) || o.mixins.push(e), i),
      component: (e, t) => (t ? ((o.components[e] = t), i) : o.components[e]),
      directive: (e, t) => (t ? ((o.directives[e] = t), i) : o.directives[e]),
      mount(r, c, a) {
        if (!l) {
          const u = ys(n, s);
          return (
            (u.appContext = o),
            c && t ? t(u, r) : e(u, r, a),
            (l = !0),
            (i._container = r),
            (r.__vue_app__ = i),
            Is(u.component) || u.component.proxy
          );
        }
      },
      unmount() {
        l && (e(null, i._container), delete i._container.__vue_app__);
      },
      provide: (e, t) => ((o.provides[e] = t), i),
    });
    return i;
  };
}
function Qn(e, t, n, s, o = !1) {
  if (w(e))
    return void e.forEach((e, r) => Qn(e, t && (w(t) ? t[r] : t), n, s, o));
  if (Zt(s) && !o) return;
  const r = 4 & s.shapeFlag ? Is(s.component) || s.component.proxy : s.el,
    l = o ? null : r,
    { i: i, r: c } = e,
    a = t && t.r,
    u = i.refs === p ? (i.refs = {}) : i.refs,
    f = i.setupState;
  if (
    (null != a &&
      a !== c &&
      (P(a)
        ? ((u[a] = null), b(f, a) && (f[a] = null))
        : ut(a) && (a.value = null)),
    k(c))
  )
    gt(c, i, 12, [l, u]);
  else {
    const t = P(c),
      s = ut(c);
    if (t || s) {
      const i = () => {
        if (e.f) {
          const n = t ? (b(f, c) ? f[c] : u[c]) : c.value;
          o
            ? w(n) && _(n, r)
            : w(n)
            ? n.includes(r) || n.push(r)
            : t
            ? ((u[c] = [r]), b(f, c) && (f[c] = u[c]))
            : ((c.value = [r]), e.k && (u[e.k] = c.value));
        } else
          t
            ? ((u[c] = l), b(f, c) && (f[c] = l))
            : s && ((c.value = l), e.k && (u[e.k] = l));
      };
      l ? ((i.id = -1), Zn(i, n)) : i();
    }
  }
}
const Zn = function (e, t) {
  var n;
  t && t.pendingBranch
    ? w(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : (w((n = e))
        ? wt.push(...n)
        : (St && St.includes(n, n.allowRecurse ? Ct + 1 : Ct)) || wt.push(n),
      Ft());
};
function Yn(e) {
  return (function (e, t) {
    (
      J ||
      (J =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : {})
    ).__VUE__ = !0;
    const {
        insert: n,
        remove: s,
        patchProp: o,
        createElement: r,
        createText: l,
        createComment: i,
        setText: c,
        setElementText: a,
        parentNode: u,
        nextSibling: h,
        setScopeId: g = d,
        insertStaticContent: m,
      } = e,
      v = (
        e,
        t,
        n,
        s = null,
        o = null,
        r = null,
        l = !1,
        i = null,
        c = !!t.dynamicChildren
      ) => {
        if (e === t) return;
        e && !ds(e, t) && ((s = te(e)), X(e, o, r, !0), (e = null)),
          -2 === t.patchFlag && ((c = !1), (t.dynamicChildren = null));
        const { type: a, ref: u, shapeFlag: p } = t;
        switch (a) {
          case ss:
            _(e, t, n, s);
            break;
          case os:
            x(e, t, n, s);
            break;
          case rs:
            null == e && w(t, n, s, l);
            break;
          case ns:
            R(e, t, n, s, o, r, l, i, c);
            break;
          default:
            1 & p
              ? k(e, t, n, s, o, r, l, i, c)
              : 6 & p
              ? I(e, t, n, s, o, r, l, i, c)
              : (64 & p || 128 & p) && a.process(e, t, n, s, o, r, l, i, c, se);
        }
        null != u && o && Qn(u, e && e.ref, r, t || e, !t);
      },
      _ = (e, t, s, o) => {
        if (null == e) n((t.el = l(t.children)), s, o);
        else {
          const n = (t.el = e.el);
          t.children !== e.children && c(n, t.children);
        }
      },
      x = (e, t, s, o) => {
        null == e ? n((t.el = i(t.children || "")), s, o) : (t.el = e.el);
      },
      w = (e, t, n, s) => {
        [e.el, e.anchor] = m(e.children, t, n, s, e.el, e.anchor);
      },
      S = ({ el: e, anchor: t }, s, o) => {
        let r;
        for (; e && e !== t; ) (r = h(e)), n(e, s, o), (e = r);
        n(t, s, o);
      },
      C = ({ el: e, anchor: t }) => {
        let n;
        for (; e && e !== t; ) (n = h(e)), s(e), (e = n);
        s(t);
      },
      k = (e, t, n, s, o, r, l, i, c) => {
        (l = l || "svg" === t.type),
          null == e ? P(t, n, s, o, r, l, i, c) : T(e, t, o, r, l, i, c);
      },
      P = (e, t, s, l, i, c, u, p) => {
        let f, d;
        const { type: h, props: g, shapeFlag: m, transition: v, dirs: y } = e;
        if (
          ((f = e.el = r(e.type, c, g && g.is, g)),
          8 & m
            ? a(f, e.children)
            : 16 & m &&
              O(e.children, f, null, l, i, c && "foreignObject" !== h, u, p),
          y && vn(e, null, l, "created"),
          g)
        ) {
          for (const t in g)
            "value" === t ||
              A(t) ||
              o(f, t, null, g[t], c, e.children, l, i, ee);
          "value" in g && o(f, "value", null, g.value),
            (d = g.onVnodeBeforeMount) && ks(d, l, e);
        }
        j(f, e, e.scopeId, u, l), y && vn(e, null, l, "beforeMount");
        const _ = (!i || (i && !i.pendingBranch)) && v && !v.persisted;
        _ && v.beforeEnter(f),
          n(f, t, s),
          ((d = g && g.onVnodeMounted) || _ || y) &&
            Zn(() => {
              d && ks(d, l, e), _ && v.enter(f), y && vn(e, null, l, "mounted");
            }, i);
      },
      j = (e, t, n, s, o) => {
        if ((n && g(e, n), s)) for (let t = 0; t < s.length; t++) g(e, s[t]);
        if (o) {
          if (t === o.subTree) {
            const t = o.vnode;
            j(e, t, t.scopeId, t.slotScopeIds, o.parent);
          }
        }
      },
      O = (e, t, n, s, o, r, l, i, c = 0) => {
        for (let a = c; a < e.length; a++) {
          const c = (e[a] = i ? Ss(e[a]) : ws(e[a]));
          v(null, c, t, n, s, o, r, l, i);
        }
      },
      T = (e, t, n, s, r, l, i) => {
        const c = (t.el = e.el);
        let { patchFlag: u, dynamicChildren: f, dirs: d } = t;
        u |= 16 & e.patchFlag;
        const h = e.props || p,
          g = t.props || p;
        let m;
        n && es(n, !1),
          (m = g.onVnodeBeforeUpdate) && ks(m, n, t, e),
          d && vn(t, e, n, "beforeUpdate"),
          n && es(n, !0);
        const v = r && "foreignObject" !== t.type;
        if (
          (f
            ? E(e.dynamicChildren, f, c, n, s, v, l)
            : i || D(e, t, c, null, n, s, v, l, !1),
          u > 0)
        ) {
          if (16 & u) M(c, t, h, g, n, s, r);
          else if (
            (2 & u && h.class !== g.class && o(c, "class", null, g.class, r),
            4 & u && o(c, "style", h.style, g.style, r),
            8 & u)
          ) {
            const l = t.dynamicProps;
            for (let t = 0; t < l.length; t++) {
              const i = l[t],
                a = h[i],
                u = g[i];
              (u === a && "value" !== i) ||
                o(c, i, a, u, r, e.children, n, s, ee);
            }
          }
          1 & u && e.children !== t.children && a(c, t.children);
        } else i || null != f || M(c, t, h, g, n, s, r);
        ((m = g.onVnodeUpdated) || d) &&
          Zn(() => {
            m && ks(m, n, t, e), d && vn(t, e, n, "updated");
          }, s);
      },
      E = (e, t, n, s, o, r, l) => {
        for (let i = 0; i < t.length; i++) {
          const c = e[i],
            a = t[i],
            p =
              c.el && (c.type === ns || !ds(c, a) || 70 & c.shapeFlag)
                ? u(c.el)
                : n;
          v(c, a, p, null, s, o, r, l, !0);
        }
      },
      M = (e, t, n, s, r, l, i) => {
        if (n !== s) {
          if (n !== p)
            for (const c in n)
              A(c) || c in s || o(e, c, n[c], null, i, t.children, r, l, ee);
          for (const c in s) {
            if (A(c)) continue;
            const a = s[c],
              u = n[c];
            a !== u && "value" !== c && o(e, c, u, a, i, t.children, r, l, ee);
          }
          "value" in s && o(e, "value", n.value, s.value);
        }
      },
      R = (e, t, s, o, r, i, c, a, u) => {
        const p = (t.el = e ? e.el : l("")),
          f = (t.anchor = e ? e.anchor : l(""));
        let { patchFlag: d, dynamicChildren: h, slotScopeIds: g } = t;
        g && (a = a ? a.concat(g) : g),
          null == e
            ? (n(p, s, o), n(f, s, o), O(t.children, s, f, r, i, c, a, u))
            : d > 0 && 64 & d && h && e.dynamicChildren
            ? (E(e.dynamicChildren, h, s, r, i, c, a),
              (null != t.key || (r && t === r.subTree)) && ts(e, t, !0))
            : D(e, t, s, f, r, i, c, a, u);
      },
      I = (e, t, n, s, o, r, l, i, c) => {
        (t.slotScopeIds = i),
          null == e
            ? 512 & t.shapeFlag
              ? o.ctx.activate(t, n, s, l, c)
              : N(t, n, s, o, r, l, c)
            : $(e, t, c);
      },
      N = (e, t, n, s, o, r, l) => {
        const i = (e.component = (function (e, t, n) {
          const s = e.type,
            o = (t ? t.appContext : e.appContext) || Ps,
            r = {
              uid: js++,
              vnode: e,
              type: s,
              parent: t,
              appContext: o,
              root: null,
              next: null,
              subTree: null,
              effect: null,
              update: null,
              scope: new G(!0),
              render: null,
              proxy: null,
              exposed: null,
              exposeProxy: null,
              withProxy: null,
              provides: t ? t.provides : Object.create(o.provides),
              accessCache: null,
              renderCache: [],
              components: null,
              directives: null,
              propsOptions: $n(s, o),
              emitsOptions: Nt(s, o),
              emit: null,
              emitted: null,
              propsDefaults: p,
              inheritAttrs: s.inheritAttrs,
              ctx: p,
              data: p,
              props: p,
              attrs: p,
              slots: p,
              refs: p,
              setupState: p,
              setupContext: null,
              suspense: n,
              suspenseId: n ? n.pendingId : 0,
              asyncDep: null,
              asyncResolved: !1,
              isMounted: !1,
              isUnmounted: !1,
              isDeactivated: !1,
              bc: null,
              c: null,
              bm: null,
              m: null,
              bu: null,
              u: null,
              um: null,
              bum: null,
              da: null,
              a: null,
              rtg: null,
              rtc: null,
              ec: null,
              sp: null,
            };
          (r.ctx = { _: r }),
            (r.root = t ? t.root : r),
            (r.emit = It.bind(null, r)),
            e.ce && e.ce(r);
          return r;
        })(e, s, o));
        if (
          (Yt(e) && (i.ctx.renderer = se),
          (function (e, t = !1) {
            Ms = t;
            const { props: n, children: s } = e.vnode,
              o = Es(e);
            In(e, n, o, t),
              ((e, t) => {
                if (32 & e.vnode.shapeFlag) {
                  const n = t._;
                  n ? ((e.slots = lt(t)), z(t, "_", n)) : Jn(t, (e.slots = {}));
                } else (e.slots = {}), t && qn(e, t);
                z(e.slots, hs, 1);
              })(e, s);
            const r = o
              ? (function (e, t) {
                  const n = e.type;
                  (e.accessCache = Object.create(null)),
                    (e.proxy = it(new Proxy(e.ctx, Sn)));
                  const { setup: s } = n;
                  if (s) {
                    const n = (e.setupContext =
                      s.length > 1
                        ? (function (e) {
                            const t = (t) => {
                              e.exposed = t || {};
                            };
                            let n;
                            return {
                              get attrs() {
                                return (
                                  n ||
                                  (n = (function (e) {
                                    return new Proxy(e.attrs, {
                                      get: (t, n) => (ue(e, 0, "$attrs"), t[n]),
                                    });
                                  })(e))
                                );
                              },
                              slots: e.slots,
                              emit: e.emit,
                              expose: t,
                            };
                          })(e)
                        : null);
                    Fs(e), ce();
                    const o = gt(s, e, 0, [e.props, n]);
                    if ((ae(), Ts(), F(o))) {
                      if ((o.then(Ts, Ts), t))
                        return o
                          .then((n) => {
                            Rs(e, n, t);
                          })
                          .catch((t) => {
                            vt(t, e, 0);
                          });
                      e.asyncDep = o;
                    } else Rs(e, o, t);
                  } else As(e, t);
                })(e, t)
              : void 0;
            Ms = !1;
          })(i),
          i.asyncDep)
        ) {
          if ((o && o.registerDep(i, U), !e.el)) {
            const e = (i.subTree = ys(os));
            x(null, e, t, n);
          }
        } else U(i, e, t, n, o, r, l);
      },
      $ = (e, t, n) => {
        const s = (t.component = e.component);
        if (
          (function (e, t, n) {
            const { props: s, children: o, component: r } = e,
              { props: l, children: i, patchFlag: c } = t,
              a = r.emitsOptions;
            if (t.dirs || t.transition) return !0;
            if (!(n && c >= 0))
              return (
                !((!o && !i) || (i && i.$stable)) ||
                (s !== l && (s ? !l || zt(s, l, a) : !!l))
              );
            if (1024 & c) return !0;
            if (16 & c) return s ? zt(s, l, a) : !!l;
            if (8 & c) {
              const e = t.dynamicProps;
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (l[n] !== s[n] && !Bt(a, n)) return !0;
              }
            }
            return !1;
          })(e, t, n)
        ) {
          if (s.asyncDep && !s.asyncResolved) return void L(s, t, n);
          (s.next = t),
            (function (e) {
              const t = xt.indexOf(e);
              t > bt && xt.splice(t, 1);
            })(s.update),
            s.update();
        } else (t.el = e.el), (s.vnode = t);
      },
      U = (e, t, n, s, o, r, l) => {
        const i = () => {
            if (e.isMounted) {
              let t,
                { next: n, bu: s, u: i, parent: c, vnode: a } = e,
                p = n;
              es(e, !1),
                n ? ((n.el = a.el), L(e, n, l)) : (n = a),
                s && W(s),
                (t = n.props && n.props.onVnodeBeforeUpdate) && ks(t, c, n, a),
                es(e, !0);
              const f = Lt(e),
                d = e.subTree;
              (e.subTree = f),
                v(d, f, u(d.el), te(d), e, o, r),
                (n.el = f.el),
                null === p &&
                  (function ({ vnode: e, parent: t }, n) {
                    for (; t && t.subTree === e; )
                      ((e = t.vnode).el = n), (t = t.parent);
                  })(e, f.el),
                i && Zn(i, o),
                (t = n.props && n.props.onVnodeUpdated) &&
                  Zn(() => ks(t, c, n, a), o);
            } else {
              let l;
              const { el: i, props: c } = t,
                { bm: a, m: u, parent: p } = e,
                f = Zt(t);
              if (
                (es(e, !1),
                a && W(a),
                !f && (l = c && c.onVnodeBeforeMount) && ks(l, p, t),
                es(e, !0),
                i && le)
              ) {
                const n = () => {
                  (e.subTree = Lt(e)), le(i, e.subTree, e, o, null);
                };
                f
                  ? t.type.__asyncLoader().then(() => !e.isUnmounted && n())
                  : n();
              } else {
                const l = (e.subTree = Lt(e));
                v(null, l, n, s, e, o, r), (t.el = l.el);
              }
              if ((u && Zn(u, o), !f && (l = c && c.onVnodeMounted))) {
                const e = t;
                Zn(() => ks(l, p, e), o);
              }
              (256 & t.shapeFlag ||
                (p && Zt(p.vnode) && 256 & p.vnode.shapeFlag)) &&
                e.a &&
                Zn(e.a, o),
                (e.isMounted = !0),
                (t = n = s = null);
            }
          },
          c = (e.effect = new oe(i, () => Ot(a), e.scope)),
          a = (e.update = () => c.run());
        (a.id = e.uid), es(e, !0), a();
      },
      L = (e, t, n) => {
        t.component = e;
        const s = e.vnode.props;
        (e.vnode = t),
          (e.next = null),
          (function (e, t, n, s) {
            const {
                props: o,
                attrs: r,
                vnode: { patchFlag: l },
              } = e,
              i = lt(o),
              [c] = e.propsOptions;
            let a = !1;
            if (!(s || l > 0) || 16 & l) {
              let s;
              Nn(e, t, o, r) && (a = !0);
              for (const r in i)
                (t && (b(t, r) || ((s = V(r)) !== r && b(t, s)))) ||
                  (c
                    ? !n ||
                      (void 0 === n[r] && void 0 === n[s]) ||
                      (o[r] = Bn(c, i, r, void 0, e, !0))
                    : delete o[r]);
              if (r !== i)
                for (const e in r) (t && b(t, e)) || (delete r[e], (a = !0));
            } else if (8 & l) {
              const n = e.vnode.dynamicProps;
              for (let s = 0; s < n.length; s++) {
                let l = n[s];
                if (Bt(e.emitsOptions, l)) continue;
                const u = t[l];
                if (c)
                  if (b(r, l)) u !== r[l] && ((r[l] = u), (a = !0));
                  else {
                    const t = B(l);
                    o[t] = Bn(c, i, t, u, e, !1);
                  }
                else u !== r[l] && ((r[l] = u), (a = !0));
              }
            }
            a && fe(e, "set", "$attrs");
          })(e, t.props, s, n),
          ((e, t, n) => {
            const { vnode: s, slots: o } = e;
            let r = !0,
              l = p;
            if (32 & s.shapeFlag) {
              const e = t._;
              e
                ? n && 1 === e
                  ? (r = !1)
                  : (y(o, t), n || 1 !== e || delete o._)
                : ((r = !t.$stable), Jn(t, o)),
                (l = t);
            } else t && (qn(e, t), (l = { default: 1 }));
            if (r) for (const e in o) Wn(e) || e in l || delete o[e];
          })(e, t.children, n),
          ce(),
          Tt(),
          ae();
      },
      D = (e, t, n, s, o, r, l, i, c = !1) => {
        const u = e && e.children,
          p = e ? e.shapeFlag : 0,
          f = t.children,
          { patchFlag: d, shapeFlag: h } = t;
        if (d > 0) {
          if (128 & d) return void q(u, f, n, s, o, r, l, i, c);
          if (256 & d) return void H(u, f, n, s, o, r, l, i, c);
        }
        8 & h
          ? (16 & p && ee(u, o, r), f !== u && a(n, f))
          : 16 & p
          ? 16 & h
            ? q(u, f, n, s, o, r, l, i, c)
            : ee(u, o, r, !0)
          : (8 & p && a(n, ""), 16 & h && O(f, n, s, o, r, l, i, c));
      },
      H = (e, t, n, s, o, r, l, i, c) => {
        t = t || f;
        const a = (e = e || f).length,
          u = t.length,
          p = Math.min(a, u);
        let d;
        for (d = 0; d < p; d++) {
          const s = (t[d] = c ? Ss(t[d]) : ws(t[d]));
          v(e[d], s, n, null, o, r, l, i, c);
        }
        a > u ? ee(e, o, r, !0, !1, p) : O(t, n, s, o, r, l, i, c, p);
      },
      q = (e, t, n, s, o, r, l, i, c) => {
        let a = 0;
        const u = t.length;
        let p = e.length - 1,
          d = u - 1;
        for (; a <= p && a <= d; ) {
          const s = e[a],
            u = (t[a] = c ? Ss(t[a]) : ws(t[a]));
          if (!ds(s, u)) break;
          v(s, u, n, null, o, r, l, i, c), a++;
        }
        for (; a <= p && a <= d; ) {
          const s = e[p],
            a = (t[d] = c ? Ss(t[d]) : ws(t[d]));
          if (!ds(s, a)) break;
          v(s, a, n, null, o, r, l, i, c), p--, d--;
        }
        if (a > p) {
          if (a <= d) {
            const e = d + 1,
              p = e < u ? t[e].el : s;
            for (; a <= d; )
              v(null, (t[a] = c ? Ss(t[a]) : ws(t[a])), n, p, o, r, l, i, c),
                a++;
          }
        } else if (a > d) for (; a <= p; ) X(e[a], o, r, !0), a++;
        else {
          const h = a,
            g = a,
            m = new Map();
          for (a = g; a <= d; a++) {
            const e = (t[a] = c ? Ss(t[a]) : ws(t[a]));
            null != e.key && m.set(e.key, a);
          }
          let y,
            _ = 0;
          const x = d - g + 1;
          let b = !1,
            w = 0;
          const S = new Array(x);
          for (a = 0; a < x; a++) S[a] = 0;
          for (a = h; a <= p; a++) {
            const s = e[a];
            if (_ >= x) {
              X(s, o, r, !0);
              continue;
            }
            let u;
            if (null != s.key) u = m.get(s.key);
            else
              for (y = g; y <= d; y++)
                if (0 === S[y - g] && ds(s, t[y])) {
                  u = y;
                  break;
                }
            void 0 === u
              ? X(s, o, r, !0)
              : ((S[u - g] = a + 1),
                u >= w ? (w = u) : (b = !0),
                v(s, t[u], n, null, o, r, l, i, c),
                _++);
          }
          const C = b
            ? (function (e) {
                const t = e.slice(),
                  n = [0];
                let s, o, r, l, i;
                const c = e.length;
                for (s = 0; s < c; s++) {
                  const c = e[s];
                  if (0 !== c) {
                    if (((o = n[n.length - 1]), e[o] < c)) {
                      (t[s] = o), n.push(s);
                      continue;
                    }
                    for (r = 0, l = n.length - 1; r < l; )
                      (i = (r + l) >> 1), e[n[i]] < c ? (r = i + 1) : (l = i);
                    c < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
                  }
                }
                (r = n.length), (l = n[r - 1]);
                for (; r-- > 0; ) (n[r] = l), (l = t[l]);
                return n;
              })(S)
            : f;
          for (y = C.length - 1, a = x - 1; a >= 0; a--) {
            const e = g + a,
              p = t[e],
              f = e + 1 < u ? t[e + 1].el : s;
            0 === S[a]
              ? v(null, p, n, f, o, r, l, i, c)
              : b && (y < 0 || a !== C[y] ? K(p, n, f, 2) : y--);
          }
        }
      },
      K = (e, t, s, o, r = null) => {
        const { el: l, type: i, transition: c, children: a, shapeFlag: u } = e;
        if (6 & u) return void K(e.component.subTree, t, s, o);
        if (128 & u) return void e.suspense.move(t, s, o);
        if (64 & u) return void i.move(e, t, s, se);
        if (i === ns) {
          n(l, t, s);
          for (let e = 0; e < a.length; e++) K(a[e], t, s, o);
          return void n(e.anchor, t, s);
        }
        if (i === rs) return void S(e, t, s);
        if (2 !== o && 1 & u && c)
          if (0 === o) c.beforeEnter(l), n(l, t, s), Zn(() => c.enter(l), r);
          else {
            const { leave: e, delayLeave: o, afterLeave: r } = c,
              i = () => n(l, t, s),
              a = () => {
                e(l, () => {
                  i(), r && r();
                });
              };
            o ? o(l, i, a) : a();
          }
        else n(l, t, s);
      },
      X = (e, t, n, s = !1, o = !1) => {
        const {
          type: r,
          props: l,
          ref: i,
          children: c,
          dynamicChildren: a,
          shapeFlag: u,
          patchFlag: p,
          dirs: f,
        } = e;
        if ((null != i && Qn(i, null, n, e, !0), 256 & u))
          return void t.ctx.deactivate(e);
        const d = 1 & u && f,
          h = !Zt(e);
        let g;
        if ((h && (g = l && l.onVnodeBeforeUnmount) && ks(g, t, e), 6 & u))
          Y(e.component, n, s);
        else {
          if (128 & u) return void e.suspense.unmount(n, s);
          d && vn(e, null, t, "beforeUnmount"),
            64 & u
              ? e.type.remove(e, t, n, o, se, s)
              : a && (r !== ns || (p > 0 && 64 & p))
              ? ee(a, t, n, !1, !0)
              : ((r === ns && 384 & p) || (!o && 16 & u)) && ee(c, t, n),
            s && Q(e);
        }
        ((h && (g = l && l.onVnodeUnmounted)) || d) &&
          Zn(() => {
            g && ks(g, t, e), d && vn(e, null, t, "unmounted");
          }, n);
      },
      Q = (e) => {
        const { type: t, el: n, anchor: o, transition: r } = e;
        if (t === ns) return void Z(n, o);
        if (t === rs) return void C(e);
        const l = () => {
          s(n), r && !r.persisted && r.afterLeave && r.afterLeave();
        };
        if (1 & e.shapeFlag && r && !r.persisted) {
          const { leave: t, delayLeave: s } = r,
            o = () => t(n, l);
          s ? s(e.el, l, o) : o();
        } else l();
      },
      Z = (e, t) => {
        let n;
        for (; e !== t; ) (n = h(e)), s(e), (e = n);
        s(t);
      },
      Y = (e, t, n) => {
        const { bum: s, scope: o, update: r, subTree: l, um: i } = e;
        s && W(s),
          o.stop(),
          r && ((r.active = !1), X(l, e, t, n)),
          i && Zn(i, t),
          Zn(() => {
            e.isUnmounted = !0;
          }, t),
          t &&
            t.pendingBranch &&
            !t.isUnmounted &&
            e.asyncDep &&
            !e.asyncResolved &&
            e.suspenseId === t.pendingId &&
            (t.deps--, 0 === t.deps && t.resolve());
      },
      ee = (e, t, n, s = !1, o = !1, r = 0) => {
        for (let l = r; l < e.length; l++) X(e[l], t, n, s, o);
      },
      te = (e) =>
        6 & e.shapeFlag
          ? te(e.component.subTree)
          : 128 & e.shapeFlag
          ? e.suspense.next()
          : h(e.anchor || e.el),
      ne = (e, t, n) => {
        null == e
          ? t._vnode && X(t._vnode, null, null, !0)
          : v(t._vnode || null, e, t, null, null, null, n),
          Tt(),
          Et(),
          (t._vnode = e);
      },
      se = {
        p: v,
        um: X,
        m: K,
        r: Q,
        mt: N,
        mc: O,
        pc: D,
        pbc: E,
        n: te,
        o: e,
      };
    let re, le;
    t && ([re, le] = t(se));
    return { render: ne, hydrate: re, createApp: Xn(ne, re) };
  })(e);
}
function es({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ts(e, t, n = !1) {
  const s = e.children,
    o = t.children;
  if (w(s) && w(o))
    for (let e = 0; e < s.length; e++) {
      const t = s[e];
      let r = o[e];
      1 & r.shapeFlag &&
        !r.dynamicChildren &&
        ((r.patchFlag <= 0 || 32 === r.patchFlag) &&
          ((r = o[e] = Ss(o[e])), (r.el = t.el)),
        n || ts(t, r)),
        r.type === ss && (r.el = t.el);
    }
}
const ns = Symbol(void 0),
  ss = Symbol(void 0),
  os = Symbol(void 0),
  rs = Symbol(void 0),
  ls = [];
let is = null;
function cs(e = !1) {
  ls.push((is = e ? null : []));
}
let as = 1;
function us(e) {
  as += e;
}
function ps(e) {
  return (
    (e.dynamicChildren = as > 0 ? is || f : null),
    ls.pop(),
    (is = ls[ls.length - 1] || null),
    as > 0 && is && is.push(e),
    e
  );
}
function fs(e, t, n, s, o, r) {
  return ps(vs(e, t, n, s, o, r, !0));
}
function ds(e, t) {
  return e.type === t.type && e.key === t.key;
}
const hs = "__vInternal",
  gs = ({ key: e }) => (null != e ? e : null),
  ms = ({ ref: e, ref_key: t, ref_for: n }) =>
    null != e
      ? P(e) || ut(e) || k(e)
        ? { i: $t, r: e, k: t, f: !!n }
        : e
      : null;
function vs(
  e,
  t = null,
  n = null,
  s = 0,
  o = null,
  r = e === ns ? 0 : 1,
  l = !1,
  i = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gs(t),
    ref: t && ms(t),
    scopeId: Vt,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: $t,
  };
  return (
    i
      ? (Cs(c, n), 128 & r && e.normalize(c))
      : n && (c.shapeFlag |= P(n) ? 8 : 16),
    as > 0 &&
      !l &&
      is &&
      (c.patchFlag > 0 || 6 & r) &&
      32 !== c.patchFlag &&
      is.push(c),
    c
  );
}
const ys = function (e, n = null, s = null, o = 0, r = null, i = !1) {
  (e && e !== yn) || (e = os);
  if (((c = e), c && !0 === c.__v_isVNode)) {
    const t = _s(e, n, !0);
    return (
      s && Cs(t, s),
      as > 0 &&
        !i &&
        is &&
        (6 & t.shapeFlag ? (is[is.indexOf(e)] = t) : is.push(t)),
      (t.patchFlag |= -2),
      t
    );
  }
  var c;
  (function (e) {
    return k(e) && "__vccOpts" in e;
  })(e) && (e = e.__vccOpts);
  if (n) {
    n = (function (e) {
      return e ? (rt(e) || hs in e ? y({}, e) : e) : null;
    })(n);
    let { class: e, style: s } = n;
    e && !P(e) && (n.class = l(e)),
      O(s) && (rt(s) && !w(s) && (s = y({}, s)), (n.style = t(s)));
  }
  const a = P(e)
    ? 1
    : ((e) => e.__isSuspense)(e)
    ? 128
    : ((e) => e.__isTeleport)(e)
    ? 64
    : O(e)
    ? 4
    : k(e)
    ? 2
    : 0;
  return vs(e, n, s, o, r, a, i, !0);
};
function _s(e, n, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: c } = e,
    a = n
      ? (function (...e) {
          const n = {};
          for (let s = 0; s < e.length; s++) {
            const o = e[s];
            for (const e in o)
              if ("class" === e)
                n.class !== o.class && (n.class = l([n.class, o.class]));
              else if ("style" === e) n.style = t([n.style, o.style]);
              else if (m(e)) {
                const t = n[e],
                  s = o[e];
                !s ||
                  t === s ||
                  (w(t) && t.includes(s)) ||
                  (n[e] = t ? [].concat(t, s) : s);
              } else "" !== e && (n[e] = o[e]);
          }
          return n;
        })(o || {}, n)
      : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && gs(a),
    ref:
      n && n.ref ? (s && r ? (w(r) ? r.concat(ms(n)) : [r, ms(n)]) : ms(n)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: n && e.type !== ns ? (-1 === i ? 16 : 16 | i) : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && _s(e.ssContent),
    ssFallback: e.ssFallback && _s(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
  };
}
function xs(e = " ", t = 0) {
  return ys(ss, null, e, t);
}
function bs(e, t) {
  const n = ys(rs, null, e);
  return (n.staticCount = t), n;
}
function ws(e) {
  return null == e || "boolean" == typeof e
    ? ys(os)
    : w(e)
    ? ys(ns, null, e.slice())
    : "object" == typeof e
    ? Ss(e)
    : ys(ss, null, String(e));
}
function Ss(e) {
  return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : _s(e);
}
function Cs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (null == t) t = null;
  else if (w(t)) n = 16;
  else if ("object" == typeof t) {
    if (65 & s) {
      const n = t.default;
      return void (n && (n._c && (n._d = !1), Cs(e, n()), n._c && (n._d = !0)));
    }
    {
      n = 32;
      const s = t._;
      s || hs in t
        ? 3 === s &&
          $t &&
          (1 === $t.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        : (t._ctx = $t);
    }
  } else
    k(t)
      ? ((t = { default: t, _ctx: $t }), (n = 32))
      : ((t = String(t)), 64 & s ? ((n = 16), (t = [xs(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function ks(e, t, n, s = null) {
  mt(e, t, 7, [n, s]);
}
const Ps = Gn();
let js = 0;
let Os = null;
const Fs = (e) => {
    (Os = e), e.scope.on();
  },
  Ts = () => {
    Os && Os.scope.off(), (Os = null);
  };
function Es(e) {
  return 4 & e.vnode.shapeFlag;
}
let Ms = !1;
function Rs(e, t, n) {
  k(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : O(t) && (e.setupState = ft(t)),
    As(e, n);
}
function As(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || d), Fs(e), ce(), kn(e), ae(), Ts();
}
function Is(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(ft(it(e.exposed)), {
        get: (t, n) => (n in t ? t[n] : n in bn ? bn[n](e) : void 0),
        has: (e, t) => t in e || t in bn,
      }))
    );
}
const Ns = (e, t) =>
    (function (e, t, n = !1) {
      let s, o;
      const r = k(e);
      return (
        r ? ((s = e), (o = d)) : ((s = e.get), (o = e.set)),
        new ht(s, o, r || !o, n)
      );
    })(e, 0, Ms),
  Bs = Symbol(""),
  $s = () => Ht(Bs),
  Vs = "3.2.45",
  Us = "undefined" != typeof document ? document : null,
  Ls = Us && Us.createElement("template"),
  Ds = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const o = t
        ? Us.createElementNS("http://www.w3.org/2000/svg", e)
        : Us.createElement(e, n ? { is: n } : void 0);
      return (
        "select" === e &&
          s &&
          null != s.multiple &&
          o.setAttribute("multiple", s.multiple),
        o
      );
    },
    createText: (e) => Us.createTextNode(e),
    createComment: (e) => Us.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Us.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, o, r) {
      const l = n ? n.previousSibling : t.lastChild;
      if (o && (o === r || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n), o !== r && (o = o.nextSibling);

        );
      else {
        Ls.innerHTML = s ? `<svg>${e}</svg>` : e;
        const o = Ls.content;
        if (s) {
          const e = o.firstChild;
          for (; e.firstChild; ) o.appendChild(e.firstChild);
          o.removeChild(e);
        }
        t.insertBefore(o, n);
      }
      return [
        l ? l.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
const Ws = /\s*!important$/;
function zs(e, t, n) {
  if (w(n)) n.forEach((n) => zs(e, t, n));
  else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = (function (e, t) {
      const n = Js[t];
      if (n) return n;
      let s = B(t);
      if ("filter" !== s && s in e) return (Js[t] = s);
      s = U(s);
      for (let n = 0; n < Hs.length; n++) {
        const o = Hs[n] + s;
        if (o in e) return (Js[t] = o);
      }
      return t;
    })(e, t);
    Ws.test(n)
      ? e.setProperty(V(s), n.replace(Ws, ""), "important")
      : (e[s] = n);
  }
}
const Hs = ["Webkit", "Moz", "ms"],
  Js = {};
const qs = "http://www.w3.org/1999/xlink";
function Gs(e, t, n, s, o = null) {
  const r = e._vei || (e._vei = {}),
    l = r[t];
  if (s && l) l.value = s;
  else {
    const [n, i] = (function (e) {
      let t;
      if (Ks.test(e)) {
        let n;
        for (t = {}; (n = e.match(Ks)); )
          (e = e.slice(0, e.length - n[0].length)),
            (t[n[0].toLowerCase()] = !0);
      }
      const n = ":" === e[2] ? e.slice(3) : V(e.slice(2));
      return [n, t];
    })(t);
    if (s) {
      const l = (r[t] = (function (e, t) {
        const n = (e) => {
          if (e._vts) {
            if (e._vts <= n.attached) return;
          } else e._vts = Date.now();
          mt(
            (function (e, t) {
              if (w(t)) {
                const n = e.stopImmediatePropagation;
                return (
                  (e.stopImmediatePropagation = () => {
                    n.call(e), (e._stopped = !0);
                  }),
                  t.map((e) => (t) => !t._stopped && e && e(t))
                );
              }
              return t;
            })(e, n.value),
            t,
            5,
            [e]
          );
        };
        return (
          (n.value = e),
          (n.attached = (() =>
            Xs || (Qs.then(() => (Xs = 0)), (Xs = Date.now())))()),
          n
        );
      })(s, o));
      !(function (e, t, n, s) {
        e.addEventListener(t, n, s);
      })(e, n, l, i);
    } else
      l &&
        (!(function (e, t, n, s) {
          e.removeEventListener(t, n, s);
        })(e, n, l, i),
        (r[t] = void 0));
  }
}
const Ks = /(?:Once|Passive|Capture)$/;
let Xs = 0;
const Qs = Promise.resolve();
const Zs = /^on[a-z]/;
const Ys = y(
  {
    patchProp: (e, t, n, s, o = !1, r, l, a, u) => {
      "class" === t
        ? (function (e, t, n) {
            const s = e._vtc;
            s && (t = (t ? [t, ...s] : [...s]).join(" ")),
              null == t
                ? e.removeAttribute("class")
                : n
                ? e.setAttribute("class", t)
                : (e.className = t);
          })(e, s, o)
        : "style" === t
        ? (function (e, t, n) {
            const s = e.style,
              o = P(n);
            if (n && !o) {
              for (const e in n) zs(s, e, n[e]);
              if (t && !P(t)) for (const e in t) null == n[e] && zs(s, e, "");
            } else {
              const r = s.display;
              o ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
                "_vod" in e && (s.display = r);
            }
          })(e, n, s)
        : m(t)
        ? v(t) || Gs(e, t, 0, s, l)
        : (
            "." === t[0]
              ? ((t = t.slice(1)), 1)
              : "^" === t[0]
              ? ((t = t.slice(1)), 0)
              : (function (e, t, n, s) {
                  if (s)
                    return (
                      "innerHTML" === t ||
                      "textContent" === t ||
                      !!(t in e && Zs.test(t) && k(n))
                    );
                  if (
                    "spellcheck" === t ||
                    "draggable" === t ||
                    "translate" === t
                  )
                    return !1;
                  if ("form" === t) return !1;
                  if ("list" === t && "INPUT" === e.tagName) return !1;
                  if ("type" === t && "TEXTAREA" === e.tagName) return !1;
                  if (Zs.test(t) && P(n)) return !1;
                  return t in e;
                })(e, t, s, o)
          )
        ? (function (e, t, n, s, o, r, l) {
            if ("innerHTML" === t || "textContent" === t)
              return s && l(s, o, r), void (e[t] = null == n ? "" : n);
            if (
              "value" === t &&
              "PROGRESS" !== e.tagName &&
              !e.tagName.includes("-")
            ) {
              e._value = n;
              const s = null == n ? "" : n;
              return (
                (e.value === s && "OPTION" !== e.tagName) || (e.value = s),
                void (null == n && e.removeAttribute(t))
              );
            }
            let i = !1;
            if ("" === n || null == n) {
              const s = typeof e[t];
              "boolean" === s
                ? (n = c(n))
                : null == n && "string" === s
                ? ((n = ""), (i = !0))
                : "number" === s && ((n = 0), (i = !0));
            }
            try {
              e[t] = n;
            } catch (e) {}
            i && e.removeAttribute(t);
          })(e, t, s, r, l, a, u)
        : ("true-value" === t
            ? (e._trueValue = s)
            : "false-value" === t && (e._falseValue = s),
          (function (e, t, n, s, o) {
            if (s && t.startsWith("xlink:"))
              null == n
                ? e.removeAttributeNS(qs, t.slice(6, t.length))
                : e.setAttributeNS(qs, t, n);
            else {
              const s = i(t);
              null == n || (s && !c(n))
                ? e.removeAttribute(t)
                : e.setAttribute(t, s ? "" : n);
            }
          })(e, t, s, o));
    },
  },
  Ds
);
let eo;
const to = ["src"],
  no = { class: "flex w-full p-2" },
  so = {
    class:
      "flex justify-start h-full flex-col place-start w-full text-left pt-4",
  },
  oo = { class: "text-xl font-extrabold leading-6" },
  ro = { class: "text-xs" };
var lo = {
  __name: "Project",
  props: { heading: String, caption: String, src: String, href: String },
  setup(e) {
    const t = e;
    function n(e) {
      window.open(t.href);
    }
    return (t, s) => (
      cs(),
      fs(
        "div",
        {
          onClick: n,
          class:
            "w-full md:w-80 p-4 bg-white container rounded-lg drop-shadow-sm",
        },
        [
          vs(
            "img",
            { class: "w-full object-cover rounded-lg", src: e.src },
            null,
            8,
            to
          ),
          vs("div", no, [
            vs("div", so, [
              vs("span", oo, a(e.heading), 1),
              vs("span", ro, a(e.caption), 1),
            ]),
          ]),
        ]
      )
    );
  },
};
const io = { class: "flex flex-col items-start p-4 gap-4" },
  co = { class: "flex flex-col items-start gap-4" },
  ao = { class: "text-3xl font-bold ml-4" },
  uo = { class: "ml-4 max-w-xl" },
  po = { class: "flex gap-4 flex-wrap" };
var fo = {
  __name: "ProjectsContainer",
  props: { heading: String, caption: String, content: Object },
  setup: (e) => (t, n) => (
    cs(),
    fs("div", io, [
      vs("div", co, [
        vs("span", ao, a(e.heading), 1),
        vs("span", uo, a(e.caption), 1),
      ]),
      vs("div", po, [
        (cs(!0),
        fs(
          ns,
          null,
          _n(e.content, (e) => {
            return (
              cs(),
              (t = lo),
              (n = {
                heading: e.heading,
                caption: e.caption,
                src: e.src,
                href: e.href,
                key: e.heading,
              }),
              ps(ys(t, n, null, 8, ["heading", "caption", "src", "href"], !0))
            );
            var t, n;
          }),
          128
        )),
      ]),
    ])
  ),
};
const ho = { class: "flex flex-col items-start gap-4" },
  go = bs(
    '<div class="flex flex-col items-start p-4 gap-4"><img src="/portfolio/_assets/avatar.fa61a697.jpg" class="w-40 ml-4 rounded-full"><span class="text-3xl font-bold ml-4">Hello, I&#39;m Binh Pham.</span><span class="ml-4 max-w-xl text-left">I’m multi-disciplined engineer who has his hand on a wide range of fields including FullStack IoT, Illustrations, Graphic Design, Photography and Creative Coding.</span></div><div class="flex flex-row flex-wrap gap-4"><div class="flex flex-col items-start p-4 gap-4"><span class="text-3xl font-bold ml-4">Education</span><div class="flex flex-col items-start px-4"><span class="font-bold">Budapest University of Technology and Economics</span><span class="text-xs">BSc in Electrical Engineering 2022-2026</span></div><div class="flex flex-col items-start px-4"><span class="font-bold">Tran Phu Highschool For The Gifted, Viet Nam</span><span class="text-xs">Major in Physics</span></div></div><div class="flex flex-col items-start p-4 gap-4"><span class="text-3xl font-bold ml-4">Skills</span><div class="grid grid-cols-2 grid-rows-3 gap-4"><div class="flex flex-col items-start px-4"><span class="font-bold">Programming Languages</span><span class="text-xs">C/C++, JavaScript, Python</span></div><div class="flex flex-col items-start px-4"><span class="font-bold">Database</span><span class="text-xs">SQL, MongoDb, Firestore(Firebase)</span></div><div class="flex flex-col items-start px-4"><span class="font-bold">Backend</span><span class="text-xs">NodeJS, ExpressJS, Flask, Django</span></div><div class="flex flex-col items-start px-4"><span class="font-bold">Project Management</span><span class="text-xs">Jira</span></div><div class="flex flex-col items-start px-4"><span class="font-bold">Frontend</span><span class="text-xs">ReactJS/Native, VueJS, Svelte</span></div><div class="flex flex-col items-start px-4"><span class="font-bold">Other</span><span class="text-xs">Photoshop, Illustrator, TouchDesigner</span></div></div></div></div>',
    2
  );
var mo = {
  __name: "Portfolio",
  setup(e) {
    const t = [
        {
          heading: "Neocoat",
          caption: "March 1, 2022 · Binh Pham",
          src: "/portfolio/images/fullstack/neocoat.png",
          href: "https://binhph.am/posts/neocoat-intro/",
        },
        {
          heading: "Memory Catalog",
          caption: "May 27, 2022 · Binh Pham",
          src: "/portfolio/images/fullstack/memory-catalog.jpeg",
          href: "https://binhph.am/posts/memory-catalog/",
        },
        {
          heading: "EThrift",
          caption: "August 15, 2022 · Binh Pham, Hiep Nguyen",
          src: "/portfolio/images/fullstack/ethrift.jpeg",
          href: "https://github.com/hiepnnguyentcu/EThrift",
        },
        {
          heading: "365Days",
          caption: "September 25, 2022 · Binh Pham",
          src: "/portfolio/images/fullstack/365days.jpeg",
          href: "https://binhph.am/posts/365days/",
        },
      ],
      n = [
        {
          heading: "Lego",
          caption: "January 9, 2023 · Binh Pham",
          src: "/portfolio/images/creative/lego.png",
          href: "https://binhph.am/posts/neocoat-intro/",
        },
        {
          heading: "square()",
          caption: "January 14, 2023 · Binh Pham",
          src: "/portfolio/images/creative/square.jpg",
          href: "https://binhph.am/posts/memory-catalog/",
        },
      ],
      s = [
        {
          heading: "Trà đá kí hoạ",
          caption: "March 6, 2020 · Binh Pham",
          src: "/portfolio/images/illus/trada.png",
          href: "https://www.behance.net/gallery/93353075/Tra-da-ki-ho",
        },
        {
          heading: "Symbols of Việt Nam",
          caption: "July 2, 2020 · Binh Pham",
          src: "/portfolio/images/illus/symbols.png",
          href: "https://www.behance.net/gallery/99939753/Symbols-Of-Vit-Nam",
        },
      ],
      o = [
        {
          heading: "Broken on 365days",
          caption: "August 30, 2022 · Binh Pham",
          src: "/portfolio/images/photos/broken.jpeg",
          href: "https://www.instagram.com/p/Ch4SSuiBpuX/",
        },
      ];
    return (e, r) => (
      cs(),
      fs("div", ho, [
        go,
        ys(fo, {
          content: t,
          heading: "Fullstack Projects",
          caption:
            "These are projects in which I utilize my skills as a Fullstack Developer, building applications and products from the ground up.",
        }),
        ys(fo, {
          content: n,
          heading: "Creative Coding Projects",
          caption:
            "These are projects in which I utilize my skills in Creative Coding, merging the technical and creative worlds.",
        }),
        ys(fo, {
          content: s,
          heading: "Illustration Projects",
          caption: "These are my illustration albums.",
        }),
        ys(fo, {
          content: o,
          heading: "Photography Projects",
          caption: "These are my artsy photograph albums.",
        }),
      ])
    );
  },
};
const vo = { class: "m-4 md:mx-20 md:mt-20" },
  yo = [
    vs(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "{1.5}",
        stroke: "currentColor",
        class: "w-6 h-6 ml-4 mb-1",
      },
      [
        vs("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3",
        }),
      ],
      -1
    ),
    vs("span", { class: "align-center" }, " Homepage ", -1),
  ],
  _o = vs(
    "footer",
    { class: "footer my-8 mx-4 flex flex-col items-center justify-center" },
    [
      vs("img", {
        src: "/portfolio/_assets/vaselogo.a62a24df.png",
        class: "w-24",
      }),
      vs("span", { class: "" }, [
        xs("© 2023 "),
        vs("a", { href: "https://binhph.am" }, "Binh's Archive"),
      ]),
    ],
    -1
  );
((...e) => {
  const t = (eo || (eo = Yn(Ys))).createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (e) => {
      const s = (function (e) {
        if (P(e)) {
          return document.querySelector(e);
        }
        return e;
      })(e);
      if (!s) return;
      const o = t._component;
      k(o) || o.render || o.template || (o.template = s.innerHTML),
        (s.innerHTML = "");
      const r = n(s, !1, s instanceof SVGElement);
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        r
      );
    }),
    t
  );
})({
  __name: "App",
  setup(e) {
    const t = () => {
      window.open("https://binhph.am");
    };
    return (e, n) => (
      cs(),
      fs("div", vo, [
        vs("header", { class: "ml-4 mb-24" }, [
          vs(
            "div",
            {
              class:
                "flex flex-row gap-4 items-center bg-white w-40 h-12 rounded-full",
              onClick: t,
            },
            yo
          ),
        ]),
        ys(mo),
        _o,
      ])
    );
  },
}).mount("#app");
