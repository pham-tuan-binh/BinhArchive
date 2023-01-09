!(function t(e, n, i) {
  function r(s, a) {
    if (!n[s]) {
      if (!e[s]) {
        var c = "function" == typeof require && require;
        if (!a && c) return c(s, !0);
        if (o) return o(s, !0);
        var u = new Error("Cannot find module '" + s + "'");
        throw ((u.code = "MODULE_NOT_FOUND"), u);
      }
      var p = (n[s] = { exports: {} });
      e[s][0].call(
        p.exports,
        function (t) {
          return r(e[s][1][t] || t);
        },
        p,
        p.exports,
        t,
        e,
        n,
        i
      );
    }
    return n[s].exports;
  }
  for (
    var o = "function" == typeof require && require, s = 0;
    s < i.length;
    s++
  )
    r(i[s]);
  return r;
})(
  {
    1: [
      function (t, e, n) {
        var i = t("seed-random"),
          r = t("simplex-noise"),
          o = t("defined");
        e.exports = (function t(e) {
          e = o(e, null);
          var n,
            s,
            a,
            c = Math.random,
            u = null,
            p = !1;
          return (
            f(e),
            {
              value: h,
              createRandom: function (e) {
                return t(e);
              },
              setSeed: f,
              getSeed: function () {
                return n;
              },
              getRandomSeed: function () {
                return String(Math.floor(1e6 * Math.random()));
              },
              valueNonZero: function () {
                var t = 0;
                for (; 0 === t; ) t = h();
                return t;
              },
              permuteNoise: function () {
                a = l();
              },
              noise1D: function (t, e, n) {
                if (!isFinite(t))
                  throw new TypeError("x component for noise() must be finite");
                return (e = o(e, 1)), (n = o(n, 1)) * a.noise2D(t * e, 0);
              },
              noise2D: function (t, e, n, i) {
                if (!isFinite(t))
                  throw new TypeError("x component for noise() must be finite");
                if (!isFinite(e))
                  throw new TypeError("y component for noise() must be finite");
                return (n = o(n, 1)), (i = o(i, 1)) * a.noise2D(t * n, e * n);
              },
              noise3D: function (t, e, n, i, r) {
                if (!isFinite(t))
                  throw new TypeError("x component for noise() must be finite");
                if (!isFinite(e))
                  throw new TypeError("y component for noise() must be finite");
                if (!isFinite(n))
                  throw new TypeError("z component for noise() must be finite");
                return (
                  (i = o(i, 1)), (r = o(r, 1)) * a.noise3D(t * i, e * i, n * i)
                );
              },
              noise4D: function (t, e, n, i, r, s) {
                if (!isFinite(t))
                  throw new TypeError("x component for noise() must be finite");
                if (!isFinite(e))
                  throw new TypeError("y component for noise() must be finite");
                if (!isFinite(n))
                  throw new TypeError("z component for noise() must be finite");
                if (!isFinite(i))
                  throw new TypeError("w component for noise() must be finite");
                return (
                  (r = o(r, 1)),
                  (s = o(s, 1)) * a.noise4D(t * r, e * r, n * r, i * r)
                );
              },
              sign: function () {
                return d() ? 1 : -1;
              },
              boolean: d,
              chance: function (t) {
                if ("number" != typeof (t = o(t, 0.5)))
                  throw new TypeError("expected n to be a number");
                return h() < t;
              },
              range: m,
              rangeFloor: y,
              pick: function (t) {
                return 0 === t.length ? void 0 : t[y(0, t.length)];
              },
              shuffle: function (t) {
                if (!Array.isArray(t))
                  throw new TypeError("Expected Array, got " + typeof t);
                var e,
                  n,
                  i = t.length,
                  r = t.slice();
                for (; i; )
                  (e = Math.floor(h() * i--)),
                    (n = r[i]),
                    (r[i] = r[e]),
                    (r[e] = n);
                return r;
              },
              onCircle: g,
              insideCircle: function (t, e) {
                (t = o(t, 1)), g(1, (e = e || []));
                var n = t * Math.sqrt(h());
                return (e[0] *= n), (e[1] *= n), e;
              },
              onSphere: function (t, e) {
                (t = o(t, 1)), (e = e || []);
                var n = h() * Math.PI * 2,
                  i = 2 * h() - 1,
                  r = n,
                  s = Math.acos(i);
                return (
                  (e[0] = t * Math.sin(s) * Math.cos(r)),
                  (e[1] = t * Math.sin(s) * Math.sin(r)),
                  (e[2] = t * Math.cos(s)),
                  e
                );
              },
              insideSphere: function (t, e) {
                (t = o(t, 1)), (e = e || []);
                var n = h() * Math.PI * 2,
                  i = 2 * h() - 1,
                  r = h(),
                  s = n,
                  a = Math.acos(i),
                  c = t * Math.cbrt(r);
                return (
                  (e[0] = c * Math.sin(a) * Math.cos(s)),
                  (e[1] = c * Math.sin(a) * Math.sin(s)),
                  (e[2] = c * Math.cos(a)),
                  e
                );
              },
              quaternion: function (t) {
                t = t || [];
                var e = h(),
                  n = h(),
                  i = h(),
                  r = Math.sqrt(1 - e),
                  o = Math.sqrt(e),
                  s = 2 * Math.PI * n,
                  a = 2 * Math.PI * i,
                  c = Math.sin(s) * r,
                  u = Math.cos(s) * r,
                  p = Math.sin(a) * o,
                  f = Math.cos(a) * o;
                return (t[0] = c), (t[1] = u), (t[2] = p), (t[3] = f), t;
              },
              weighted: w,
              weightedSet: function (t) {
                return 0 === (t = t || []).length ? null : t[v(t)].value;
              },
              weightedSetIndex: v,
              gaussian: function (t, e) {
                if (((t = o(t, 0)), (e = o(e, 1)), p)) {
                  p = !1;
                  var n = u;
                  return (u = null), t + e * n;
                }
                var i = 0,
                  r = 0,
                  s = 0;
                do {
                  s = (i = 2 * h() - 1) * i + (r = 2 * h() - 1) * r;
                } while (s >= 1 || 0 === s);
                var a = Math.sqrt((-2 * Math.log(s)) / s);
                return (u = r * a), (p = !0), t + e * (i * a);
              },
            }
          );
          function f(t, e) {
            "number" == typeof t || "string" == typeof t
              ? (s = i((n = t), e))
              : ((n = void 0), (s = c)),
              (a = l()),
              (u = null),
              (p = !1);
          }
          function h() {
            return s();
          }
          function l() {
            return new r(s);
          }
          function d() {
            return h() > 0.5;
          }
          function m(t, e) {
            if (
              (void 0 === e && ((e = t), (t = 0)),
              "number" != typeof t || "number" != typeof e)
            )
              throw new TypeError("Expected all arguments to be numbers");
            return h() * (e - t) + t;
          }
          function y(t, e) {
            if (
              (void 0 === e && ((e = t), (t = 0)),
              "number" != typeof t || "number" != typeof e)
            )
              throw new TypeError("Expected all arguments to be numbers");
            return Math.floor(m(t, e));
          }
          function g(t, e) {
            (t = o(t, 1)), (e = e || []);
            var n = 2 * h() * Math.PI;
            return (e[0] = t * Math.cos(n)), (e[1] = t * Math.sin(n)), e;
          }
          function v(t) {
            return 0 === (t = t || []).length
              ? -1
              : w(
                  t.map(function (t) {
                    return t.weight;
                  })
                );
          }
          function w(t) {
            if (0 === (t = t || []).length) return -1;
            var e,
              n = 0;
            for (e = 0; e < t.length; e++) n += t[e];
            if (n <= 0) throw new Error("Weights must sum to > 0");
            var i = h() * n;
            for (e = 0; e < t.length; e++) {
              if (i < t[e]) return e;
              i -= t[e];
            }
            return 0;
          }
        })();
      },
      { defined: 3, "seed-random": 4, "simplex-noise": 5 },
    ],
    2: [
      function (t, e, n) {
        (function (t) {
          (function () {
            !(function (t, i) {
              "object" == typeof n && void 0 !== e
                ? (e.exports = i())
                : "function" == typeof define && define.amd
                ? define(i)
                : (t.canvasSketch = i());
            })(this, function () {
              var e = Object.getOwnPropertySymbols,
                n = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable;
              function r(t) {
                if (null == t)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(t);
              }
              var o = (function () {
                  try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (
                      ((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0])
                    )
                      return !1;
                    for (var e = {}, n = 0; n < 10; n++)
                      e["_" + String.fromCharCode(n)] = n;
                    if (
                      "0123456789" !==
                      Object.getOwnPropertyNames(e)
                        .map(function (t) {
                          return e[t];
                        })
                        .join("")
                    )
                      return !1;
                    var i = {};
                    return (
                      "abcdefghijklmnopqrst".split("").forEach(function (t) {
                        i[t] = t;
                      }),
                      "abcdefghijklmnopqrst" ===
                        Object.keys(Object.assign({}, i)).join("")
                    );
                  } catch (t) {
                    return !1;
                  }
                })()
                  ? Object.assign
                  : function (t, o) {
                      for (
                        var s, a, c = r(t), u = 1;
                        u < arguments.length;
                        u++
                      ) {
                        for (var p in (s = Object(arguments[u])))
                          n.call(s, p) && (c[p] = s[p]);
                        if (e) {
                          a = e(s);
                          for (var f = 0; f < a.length; f++)
                            i.call(s, a[f]) && (c[a[f]] = s[a[f]]);
                        }
                      }
                      return c;
                    },
                s =
                  "undefined" != typeof window
                    ? window
                    : void 0 !== t
                    ? t
                    : "undefined" != typeof self
                    ? self
                    : {};
              function a(t, e) {
                return t((e = { exports: {} }), e.exports), e.exports;
              }
              var c =
                  s.performance && s.performance.now
                    ? function () {
                        return performance.now();
                      }
                    : Date.now ||
                      function () {
                        return +new Date();
                      },
                u = function (t) {
                  return (
                    !!t &&
                    ("object" == typeof t || "function" == typeof t) &&
                    "function" == typeof t.then
                  );
                };
              var p = function (t) {
                return (
                  !(!t || "object" != typeof t) &&
                  ("object" == typeof window && "object" == typeof window.Node
                    ? t instanceof window.Node
                    : "number" == typeof t.nodeType &&
                      "string" == typeof t.nodeName)
                );
              };
              function f() {
                return (
                  "undefined" != typeof window && window["canvas-sketch-cli"]
                );
              }
              function h() {
                for (var t = arguments, e = 0; e < arguments.length; e++)
                  if (null != t[e]) return t[e];
              }
              function l() {
                return "undefined" != typeof document;
              }
              var d,
                m = a(function (t, e) {
                  function n(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e;
                  }
                  (t.exports =
                    "function" == typeof Object.keys ? Object.keys : n).shim =
                    n;
                }),
                y = a(function (t, e) {
                  var n =
                    "[object Arguments]" ==
                    (function () {
                      return Object.prototype.toString.call(arguments);
                    })();
                  function i(t) {
                    return (
                      "[object Arguments]" == Object.prototype.toString.call(t)
                    );
                  }
                  function r(t) {
                    return (
                      (t &&
                        "object" == typeof t &&
                        "number" == typeof t.length &&
                        Object.prototype.hasOwnProperty.call(t, "callee") &&
                        !Object.prototype.propertyIsEnumerable.call(
                          t,
                          "callee"
                        )) ||
                      !1
                    );
                  }
                  ((e = t.exports = n ? i : r).supported = i),
                    (e.unsupported = r);
                }),
                g = a(function (t) {
                  var e = Array.prototype.slice,
                    n = (t.exports = function (t, o, s) {
                      return (
                        s || (s = {}),
                        t === o ||
                          (t instanceof Date && o instanceof Date
                            ? t.getTime() === o.getTime()
                            : !t ||
                              !o ||
                              ("object" != typeof t && "object" != typeof o)
                            ? s.strict
                              ? t === o
                              : t == o
                            : (function (t, o, s) {
                                var a, c;
                                if (i(t) || i(o)) return !1;
                                if (t.prototype !== o.prototype) return !1;
                                if (y(t))
                                  return (
                                    !!y(o) &&
                                    ((t = e.call(t)),
                                    (o = e.call(o)),
                                    n(t, o, s))
                                  );
                                if (r(t)) {
                                  if (!r(o)) return !1;
                                  if (t.length !== o.length) return !1;
                                  for (a = 0; a < t.length; a++)
                                    if (t[a] !== o[a]) return !1;
                                  return !0;
                                }
                                try {
                                  var u = m(t),
                                    p = m(o);
                                } catch (t) {
                                  return !1;
                                }
                                if (u.length != p.length) return !1;
                                for (
                                  u.sort(), p.sort(), a = u.length - 1;
                                  a >= 0;
                                  a--
                                )
                                  if (u[a] != p[a]) return !1;
                                for (a = u.length - 1; a >= 0; a--)
                                  if (!n(t[(c = u[a])], o[c], s)) return !1;
                                return typeof t == typeof o;
                              })(t, o, s))
                      );
                    });
                  function i(t) {
                    return null == t;
                  }
                  function r(t) {
                    return (
                      !(
                        !t ||
                        "object" != typeof t ||
                        "number" != typeof t.length
                      ) &&
                      "function" == typeof t.copy &&
                      "function" == typeof t.slice &&
                      !(t.length > 0 && "number" != typeof t[0])
                    );
                  }
                }),
                v = a(function (t, e) {
                  !(function (e) {
                    var n,
                      i,
                      r,
                      o =
                        ((n =
                          /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g),
                        (i =
                          /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g),
                        (r = /[^-+\dA-Z]/g),
                        function (t, e, p, f) {
                          if (
                            (1 !== arguments.length ||
                              "string" !== u(t) ||
                              /\d/.test(t) ||
                              ((e = t), (t = void 0)),
                            (t = t || new Date()) instanceof Date ||
                              (t = new Date(t)),
                            isNaN(t))
                          )
                            throw TypeError("Invalid date");
                          var h = (e = String(
                            o.masks[e] || e || o.masks.default
                          )).slice(0, 4);
                          ("UTC:" !== h && "GMT:" !== h) ||
                            ((e = e.slice(4)),
                            (p = !0),
                            "GMT:" === h && (f = !0));
                          var l = p ? "getUTC" : "get",
                            d = t[l + "Date"](),
                            m = t[l + "Day"](),
                            y = t[l + "Month"](),
                            g = t[l + "FullYear"](),
                            v = t[l + "Hours"](),
                            w = t[l + "Minutes"](),
                            b = t[l + "Seconds"](),
                            x = t[l + "Milliseconds"](),
                            M = p ? 0 : t.getTimezoneOffset(),
                            _ = a(t),
                            k = c(t),
                            T = {
                              d: d,
                              dd: s(d),
                              ddd: o.i18n.dayNames[m],
                              dddd: o.i18n.dayNames[m + 7],
                              m: y + 1,
                              mm: s(y + 1),
                              mmm: o.i18n.monthNames[y],
                              mmmm: o.i18n.monthNames[y + 12],
                              yy: String(g).slice(2),
                              yyyy: g,
                              h: v % 12 || 12,
                              hh: s(v % 12 || 12),
                              H: v,
                              HH: s(v),
                              M: w,
                              MM: s(w),
                              s: b,
                              ss: s(b),
                              l: s(x, 3),
                              L: s(Math.round(x / 10)),
                              t:
                                v < 12
                                  ? o.i18n.timeNames[0]
                                  : o.i18n.timeNames[1],
                              tt:
                                v < 12
                                  ? o.i18n.timeNames[2]
                                  : o.i18n.timeNames[3],
                              T:
                                v < 12
                                  ? o.i18n.timeNames[4]
                                  : o.i18n.timeNames[5],
                              TT:
                                v < 12
                                  ? o.i18n.timeNames[6]
                                  : o.i18n.timeNames[7],
                              Z: f
                                ? "GMT"
                                : p
                                ? "UTC"
                                : (String(t).match(i) || [""])
                                    .pop()
                                    .replace(r, ""),
                              o:
                                (M > 0 ? "-" : "+") +
                                s(
                                  100 * Math.floor(Math.abs(M) / 60) +
                                    (Math.abs(M) % 60),
                                  4
                                ),
                              S: ["th", "st", "nd", "rd"][
                                d % 10 > 3
                                  ? 0
                                  : (((d % 100) - (d % 10) != 10) * d) % 10
                              ],
                              W: _,
                              N: k,
                            };
                          return e.replace(n, function (t) {
                            return t in T ? T[t] : t.slice(1, t.length - 1);
                          });
                        });
                    function s(t, e) {
                      for (t = String(t), e = e || 2; t.length < e; )
                        t = "0" + t;
                      return t;
                    }
                    function a(t) {
                      var e = new Date(
                        t.getFullYear(),
                        t.getMonth(),
                        t.getDate()
                      );
                      e.setDate(e.getDate() - ((e.getDay() + 6) % 7) + 3);
                      var n = new Date(e.getFullYear(), 0, 4);
                      n.setDate(n.getDate() - ((n.getDay() + 6) % 7) + 3);
                      var i = e.getTimezoneOffset() - n.getTimezoneOffset();
                      return (
                        e.setHours(e.getHours() - i),
                        1 + Math.floor((e - n) / 6048e5)
                      );
                    }
                    function c(t) {
                      var e = t.getDay();
                      return 0 === e && (e = 7), e;
                    }
                    function u(t) {
                      return null === t
                        ? "null"
                        : void 0 === t
                        ? "undefined"
                        : "object" != typeof t
                        ? typeof t
                        : Array.isArray(t)
                        ? "array"
                        : {}.toString.call(t).slice(8, -1).toLowerCase();
                    }
                    (o.masks = {
                      default: "ddd mmm dd yyyy HH:MM:ss",
                      shortDate: "m/d/yy",
                      mediumDate: "mmm d, yyyy",
                      longDate: "mmmm d, yyyy",
                      fullDate: "dddd, mmmm d, yyyy",
                      shortTime: "h:MM TT",
                      mediumTime: "h:MM:ss TT",
                      longTime: "h:MM:ss TT Z",
                      isoDate: "yyyy-mm-dd",
                      isoTime: "HH:MM:ss",
                      isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
                      isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
                      expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z",
                    }),
                      (o.i18n = {
                        dayNames: [
                          "Sun",
                          "Mon",
                          "Tue",
                          "Wed",
                          "Thu",
                          "Fri",
                          "Sat",
                          "Sunday",
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday",
                        ],
                        monthNames: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December",
                        ],
                        timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"],
                      }),
                      (t.exports = o);
                  })();
                }),
                w = "",
                b = function (t, e) {
                  if ("string" != typeof t)
                    throw new TypeError("expected a string");
                  if (1 === e) return t;
                  if (2 === e) return t + t;
                  var n = t.length * e;
                  if (d !== t || void 0 === d) (d = t), (w = "");
                  else if (w.length >= n) return w.substr(0, n);
                  for (; n > w.length && e > 1; )
                    1 & e && (w += t), (e >>= 1), (t += t);
                  return (w = (w += t).substr(0, n));
                };
              var x,
                M = function () {},
                _ = { extension: "", prefix: "", suffix: "" },
                k = ["image/png", "image/jpeg", "image/webp"];
              function T(t, e) {
                return (
                  void 0 === e && (e = {}),
                  new Promise(function (n, i) {
                    e = o({}, _, e);
                    var r = P(
                        Object.assign({}, e, { extension: "", frame: void 0 })
                      ),
                      s = t ? "streamStart" : "streamEnd",
                      a = f();
                    return a && a.output && "function" == typeof a[s]
                      ? a[s](o({}, e, { filename: r })).then(function (t) {
                          return n(t);
                        })
                      : n({ filename: r, client: !1 });
                  })
                );
              }
              function E(t, e) {
                return (
                  void 0 === e && (e = {}),
                  (function (t) {
                    return new Promise(function (e) {
                      var n = t.indexOf(",");
                      if (-1 !== n) {
                        for (
                          var i = t.slice(n + 1),
                            r = window.atob(i),
                            o = t.slice(0, n),
                            s = /data:([^;]+)/.exec(o),
                            a = (s ? s[1] : "") || void 0,
                            c = new ArrayBuffer(r.length),
                            u = new Uint8Array(c),
                            p = 0;
                          p < r.length;
                          p++
                        )
                          u[p] = r.charCodeAt(p);
                        e(new window.Blob([c], { type: a }));
                      } else e(new window.Blob());
                    });
                  })(t).then(function (t) {
                    return F(t, e);
                  })
                );
              }
              function F(t, e) {
                return (
                  void 0 === e && (e = {}),
                  new Promise(function (n) {
                    var i = (e = o({}, _, e)).filename,
                      r = f();
                    if (r && "function" == typeof r.saveBlob && r.output)
                      return r
                        .saveBlob(t, o({}, e, { filename: i }))
                        .then(function (t) {
                          return n(t);
                        });
                    x ||
                      (((x = document.createElement("a")).style.visibility =
                        "hidden"),
                      (x.target = "_blank")),
                      (x.download = i),
                      (x.href = window.URL.createObjectURL(t)),
                      document.body.appendChild(x),
                      (x.onclick = function () {
                        (x.onclick = M),
                          setTimeout(function () {
                            window.URL.revokeObjectURL(t),
                              x.parentElement && x.parentElement.removeChild(x),
                              x.removeAttribute("href"),
                              n({ filename: i, client: !1 });
                          });
                      }),
                      x.click();
                  })
                );
              }
              function P(t) {
                if (
                  (void 0 === t && (t = {}),
                  "function" == typeof (t = o({}, t)).file)
                )
                  return t.file(t);
                if (t.file) return t.file;
                var e,
                  n,
                  i,
                  r,
                  s = null,
                  a = "";
                ("string" == typeof t.extension && (a = t.extension),
                "number" == typeof t.frame) &&
                  ((e =
                    "number" == typeof t.totalFrames
                      ? t.totalFrames
                      : Math.max(1e4, t.frame)),
                  (n = String(t.frame)),
                  (i = String(e).length),
                  (r = "0"),
                  (n = n.toString()),
                  (s =
                    void 0 === i
                      ? n
                      : ((r = 0 === r ? "0" : r ? r.toString() : " "),
                        b(r, i - n.length) + n)));
                var c =
                  isFinite(t.totalLayers) &&
                  isFinite(t.layer) &&
                  t.totalLayers > 1
                    ? "" + t.layer
                    : "";
                return null != s
                  ? [c, s].filter(Boolean).join("-") + a
                  : [t.prefix, t.name || t.timeStamp, c, t.hash, t.suffix]
                      .filter(Boolean)
                      .join("-") + a;
              }
              var S = {
                  dimension: "dimensions",
                  animated: "animate",
                  animating: "animate",
                  unit: "units",
                  P5: "p5",
                  pixellated: "pixelated",
                  looping: "loop",
                  pixelPerInch: "pixels",
                },
                R = [
                  "dimensions",
                  "units",
                  "pixelsPerInch",
                  "orientation",
                  "scaleToFit",
                  "scaleToView",
                  "bleed",
                  "pixelRatio",
                  "exportPixelRatio",
                  "maxPixelRatio",
                  "scaleContext",
                  "resizeCanvas",
                  "styleCanvas",
                  "canvas",
                  "context",
                  "attributes",
                  "parent",
                  "file",
                  "name",
                  "prefix",
                  "suffix",
                  "animate",
                  "playing",
                  "loop",
                  "duration",
                  "totalFrames",
                  "fps",
                  "playbackRate",
                  "timeScale",
                  "frame",
                  "time",
                  "flush",
                  "pixelated",
                  "hotkeys",
                  "p5",
                  "id",
                  "scaleToFitPadding",
                  "data",
                  "params",
                  "encoding",
                  "encodingQuality",
                ],
                C = function (t) {
                  Object.keys(t).forEach(function (t) {
                    t in S
                      ? console.warn(
                          '[canvas-sketch] Could not recognize the setting "' +
                            t +
                            '", did you mean "' +
                            S[t] +
                            '"?'
                        )
                      : R.includes(t) ||
                        console.warn(
                          '[canvas-sketch] Could not recognize the setting "' +
                            t +
                            '"'
                        );
                  });
                };
              var j = [
                  ["postcard", 101.6, 152.4],
                  ["poster-small", 280, 430],
                  ["poster", 460, 610],
                  ["poster-large", 610, 910],
                  ["business-card", 50.8, 88.9],
                  ["2r", 64, 89],
                  ["3r", 89, 127],
                  ["4r", 102, 152],
                  ["5r", 127, 178],
                  ["6r", 152, 203],
                  ["8r", 203, 254],
                  ["10r", 254, 305],
                  ["11r", 279, 356],
                  ["12r", 305, 381],
                  ["a0", 841, 1189],
                  ["a1", 594, 841],
                  ["a2", 420, 594],
                  ["a3", 297, 420],
                  ["a4", 210, 297],
                  ["a5", 148, 210],
                  ["a6", 105, 148],
                  ["a7", 74, 105],
                  ["a8", 52, 74],
                  ["a9", 37, 52],
                  ["a10", 26, 37],
                  ["2a0", 1189, 1682],
                  ["4a0", 1682, 2378],
                  ["b0", 1e3, 1414],
                  ["b1", 707, 1e3],
                  ["b1+", 720, 1020],
                  ["b2", 500, 707],
                  ["b2+", 520, 720],
                  ["b3", 353, 500],
                  ["b4", 250, 353],
                  ["b5", 176, 250],
                  ["b6", 125, 176],
                  ["b7", 88, 125],
                  ["b8", 62, 88],
                  ["b9", 44, 62],
                  ["b10", 31, 44],
                  ["b11", 22, 32],
                  ["b12", 16, 22],
                  ["c0", 917, 1297],
                  ["c1", 648, 917],
                  ["c2", 458, 648],
                  ["c3", 324, 458],
                  ["c4", 229, 324],
                  ["c5", 162, 229],
                  ["c6", 114, 162],
                  ["c7", 81, 114],
                  ["c8", 57, 81],
                  ["c9", 40, 57],
                  ["c10", 28, 40],
                  ["c11", 22, 32],
                  ["c12", 16, 22],
                  ["half-letter", 5.5, 8.5, "in"],
                  ["letter", 8.5, 11, "in"],
                  ["legal", 8.5, 14, "in"],
                  ["junior-legal", 5, 8, "in"],
                  ["ledger", 11, 17, "in"],
                  ["tabloid", 11, 17, "in"],
                  ["ansi-a", 8.5, 11, "in"],
                  ["ansi-b", 11, 17, "in"],
                  ["ansi-c", 17, 22, "in"],
                  ["ansi-d", 22, 34, "in"],
                  ["ansi-e", 34, 44, "in"],
                  ["arch-a", 9, 12, "in"],
                  ["arch-b", 12, 18, "in"],
                  ["arch-c", 18, 24, "in"],
                  ["arch-d", 24, 36, "in"],
                  ["arch-e", 36, 48, "in"],
                  ["arch-e1", 30, 42, "in"],
                  ["arch-e2", 26, 38, "in"],
                  ["arch-e3", 27, 39, "in"],
                ].reduce(function (t, e) {
                  var n = { units: e[3] || "mm", dimensions: [e[1], e[2]] };
                  return (t[e[0]] = n), (t[e[0].replace(/-/g, " ")] = n), t;
                }, {}),
                D = ["mm", "cm", "m", "pc", "pt", "in", "ft", "px"],
                O = {
                  m: { system: "metric", factor: 1 },
                  cm: { system: "metric", factor: 0.01 },
                  mm: { system: "metric", factor: 0.001 },
                  pt: { system: "imperial", factor: 1 / 72 },
                  pc: { system: "imperial", factor: 1 / 6 },
                  in: { system: "imperial", factor: 1 },
                  ft: { system: "imperial", factor: 12 },
                };
              const A = {
                metric: { unit: "m", ratio: 1 / 0.0254 },
                imperial: { unit: "in", ratio: 0.0254 },
              };
              var N = function (t, e, n, i) {
                if ("number" != typeof t || !isFinite(t))
                  throw new Error("Value must be a finite number");
                if (!e || !n) throw new Error("Must specify from and to units");
                var r = (function () {
                    for (var t = 0; t < arguments.length; t++)
                      if (void 0 !== arguments[t]) return arguments[t];
                  })((i = i || {}).pixelsPerInch, 96),
                  o = i.precision,
                  s = !1 !== i.roundPixel;
                if (
                  ((e = e.toLowerCase()),
                  (n = n.toLowerCase()),
                  -1 === D.indexOf(e))
                )
                  throw new Error(
                    'Invalid from unit "' +
                      e +
                      '", must be one of: ' +
                      D.join(", ")
                  );
                if (-1 === D.indexOf(n))
                  throw new Error(
                    'Invalid from unit "' +
                      n +
                      '", must be one of: ' +
                      D.join(", ")
                  );
                if (e === n) return t;
                var a = 1,
                  c = 1,
                  u = !1;
                "px" === e && ((c = 1 / r), (e = "in")),
                  "px" === n && ((u = !0), (a = r), (n = "in"));
                var p = O[e],
                  f = O[n],
                  h = t * p.factor * c;
                p.system !== f.system && (h *= A[p.system].ratio);
                var l = (h / f.factor) * a;
                return (
                  u && s
                    ? (l = Math.round(l))
                    : "number" == typeof o &&
                      isFinite(o) &&
                      (l = (function (t, e) {
                        return Number(Math.round(t + "e" + e) + "e-" + e);
                      })(l, o)),
                  l
                );
              };
              function H(t, e, n, i) {
                return (
                  void 0 === e && (e = "px"),
                  void 0 === n && (n = "px"),
                  void 0 === i && (i = 72),
                  N(t, e, n, { pixelsPerInch: i, precision: 4, roundPixel: !0 })
                );
              }
              function z(t, e) {
                var n,
                  i,
                  r,
                  o,
                  s,
                  a,
                  c = l(),
                  u = e.dimensions,
                  p = (function (t) {
                    return !(
                      !t.dimensions ||
                      ("string" != typeof t.dimensions &&
                        !(
                          Array.isArray(t.dimensions) &&
                          t.dimensions.length >= 2
                        ))
                    );
                  })(e),
                  f = t.exporting,
                  d = !!p && !1 !== e.scaleToFit,
                  m = !(!f && p) || e.scaleToView;
                c || (d = m = !1);
                var y,
                  g,
                  v = e.units,
                  w =
                    "number" == typeof e.pixelsPerInch &&
                    isFinite(e.pixelsPerInch)
                      ? e.pixelsPerInch
                      : 72,
                  b = h(e.bleed, 0),
                  x = c ? window.devicePixelRatio : 1,
                  M = m ? x : 1;
                "number" == typeof e.pixelRatio && isFinite(e.pixelRatio)
                  ? (g = h(e.exportPixelRatio, (y = e.pixelRatio)))
                  : p
                  ? ((y = M), (g = h(e.exportPixelRatio, 1)))
                  : (g = h(e.exportPixelRatio, (y = x))),
                  "number" == typeof e.maxPixelRatio &&
                    isFinite(e.maxPixelRatio) &&
                    (y = Math.min(e.maxPixelRatio, y)),
                  f && (y = g);
                var _,
                  k,
                  T = (function (t, e) {
                    if (!l()) return [300, 150];
                    var n = e.parent || window;
                    if (n === window || n === document || n === document.body)
                      return [window.innerWidth, window.innerHeight];
                    var i = n.getBoundingClientRect();
                    return [i.width, i.height];
                  })(0, e),
                  E = T[0],
                  F = T[1];
                if (p) {
                  var P = (function (t, e, n) {
                      if (
                        (void 0 === e && (e = "px"),
                        void 0 === n && (n = 72),
                        "string" == typeof t)
                      ) {
                        var i = t.toLowerCase();
                        if (!(i in j))
                          throw new Error(
                            'The dimension preset "' +
                              t +
                              '" is not supported or could not be found; try using a4, a3, postcard, letter, etc.'
                          );
                        var r = j[i];
                        return r.dimensions.map(function (t) {
                          return H(t, r.units, e, n);
                        });
                      }
                      return t;
                    })(u, v, w),
                    S = Math.max(P[0], P[1]),
                    R = Math.min(P[0], P[1]);
                  if (e.orientation) {
                    var C = "landscape" === e.orientation;
                    (n = C ? S : R), (i = C ? R : S);
                  } else (n = P[0]), (i = P[1]);
                  (_ = n), (k = i), (n += 2 * b), (i += 2 * b);
                } else (_ = n = E), (k = i = F);
                var D = n,
                  O = i;
                if (
                  (p && v && ((D = H(n, v, "px", w)), (O = H(i, v, "px", w))),
                  (r = Math.round(D)),
                  (o = Math.round(O)),
                  d && !f && p)
                ) {
                  var A = n / i,
                    N = E / F,
                    z = h(e.scaleToFitPadding, 40),
                    I = Math.round(E - 2 * z),
                    L = Math.round(F - 2 * z);
                  (r > I || o > L) &&
                    (N > A
                      ? ((o = L), (r = Math.round(o * A)))
                      : ((r = I), (o = Math.round(r / A))));
                }
                return {
                  bleed: b,
                  pixelRatio: y,
                  width: n,
                  height: i,
                  dimensions: [n, i],
                  units: v || "px",
                  scaleX: (s = m ? Math.round(y * r) : Math.round(y * D)) / n,
                  scaleY: (a = m ? Math.round(y * o) : Math.round(y * O)) / i,
                  pixelsPerInch: w,
                  viewportWidth: m ? Math.round(r) : Math.round(D),
                  viewportHeight: m ? Math.round(o) : Math.round(O),
                  canvasWidth: s,
                  canvasHeight: a,
                  trimWidth: _,
                  trimHeight: k,
                  styleWidth: r,
                  styleHeight: o,
                };
              }
              N.units = D;
              var I = function (t, e) {
                if ("string" != typeof t)
                  throw new TypeError("must specify type string");
                if (
                  ((e = e || {}), "undefined" == typeof document && !e.canvas)
                )
                  return null;
                var n = e.canvas || document.createElement("canvas");
                "number" == typeof e.width && (n.width = e.width);
                "number" == typeof e.height && (n.height = e.height);
                var i,
                  r = e;
                try {
                  var o = [t];
                  0 === t.indexOf("webgl") && o.push("experimental-" + t);
                  for (var s = 0; s < o.length; s++)
                    if ((i = n.getContext(o[s], r))) return i;
                } catch (t) {
                  i = null;
                }
                return i || null;
              };
              function L(t) {
                var e, n;
                void 0 === t && (t = {});
                var i = !1;
                if (!1 !== t.canvas) {
                  if (!(e = t.context) || "string" == typeof e) {
                    var r = t.canvas;
                    r ||
                      ((r = (function () {
                        if (!l())
                          throw new Error(
                            "It appears you are runing from Node.js or a non-browser environment. Try passing in an existing { canvas } interface instead."
                          );
                        return document.createElement("canvas");
                      })()),
                      (i = !0));
                    var s = e || "2d";
                    if ("function" != typeof r.getContext)
                      throw new Error(
                        "The specified { canvas } element does not have a getContext() function, maybe it is not a <canvas> tag?"
                      );
                    if (!(e = I(s, o({}, t.attributes, { canvas: r }))))
                      throw new Error(
                        "Failed at canvas.getContext('" +
                          s +
                          "') - the browser may not support this context, or a different context may already be in use with this canvas."
                      );
                  }
                  if (((n = e.canvas), t.canvas && n !== t.canvas))
                    throw new Error(
                      "The { canvas } and { context } settings must point to the same underlying canvas element"
                    );
                  t.pixelated &&
                    ((e.imageSmoothingEnabled = !1),
                    (e.mozImageSmoothingEnabled = !1),
                    (e.oImageSmoothingEnabled = !1),
                    (e.webkitImageSmoothingEnabled = !1),
                    (e.msImageSmoothingEnabled = !1),
                    (n.style["image-rendering"] = "pixelated"));
                }
                return { canvas: n, context: e, ownsCanvas: i };
              }
              var U = function () {
                  var t = this;
                  (this._settings = {}),
                    (this._props = {}),
                    (this._sketch = void 0),
                    (this._raf = null),
                    (this._recordTimeout = null),
                    (this._lastRedrawResult = void 0),
                    (this._isP5Resizing = !1),
                    (this._keyboardShortcuts = (function (t) {
                      void 0 === t && (t = {});
                      var e = function (e) {
                        if (t.enabled()) {
                          var n = f();
                          83 !== e.keyCode ||
                          e.altKey ||
                          (!e.metaKey && !e.ctrlKey)
                            ? 32 === e.keyCode
                              ? t.togglePlay(e)
                              : n &&
                                !e.altKey &&
                                75 === e.keyCode &&
                                (e.metaKey || e.ctrlKey) &&
                                (e.preventDefault(), t.commit(e))
                            : (e.preventDefault(), t.save(e));
                        }
                      };
                      return {
                        attach: function () {
                          window.addEventListener("keydown", e);
                        },
                        detach: function () {
                          window.removeEventListener("keydown", e);
                        },
                      };
                    })({
                      enabled: function () {
                        return !1 !== t.settings.hotkeys;
                      },
                      save: function (e) {
                        e.shiftKey
                          ? t.props.recording
                            ? (t.endRecord(), t.run())
                            : t.record()
                          : t.props.recording || t.exportFrame();
                      },
                      togglePlay: function () {
                        t.props.playing ? t.pause() : t.play();
                      },
                      commit: function (e) {
                        t.exportFrame({ commit: !0 });
                      },
                    })),
                    (this._animateHandler = function () {
                      return t.animate();
                    }),
                    (this._resizeHandler = function () {
                      t.resize() && t.render();
                    });
                },
                W = {
                  sketch: { configurable: !0 },
                  settings: { configurable: !0 },
                  props: { configurable: !0 },
                };
              (W.sketch.get = function () {
                return this._sketch;
              }),
                (W.settings.get = function () {
                  return this._settings;
                }),
                (W.props.get = function () {
                  return this._props;
                }),
                (U.prototype._computePlayhead = function (t, e) {
                  return "number" == typeof e && isFinite(e) ? t / e : 0;
                }),
                (U.prototype._computeFrame = function (t, e, n, i) {
                  return isFinite(n) && n > 1
                    ? Math.floor(t * (n - 1))
                    : Math.floor(i * e);
                }),
                (U.prototype._computeCurrentFrame = function () {
                  return this._computeFrame(
                    this.props.playhead,
                    this.props.time,
                    this.props.totalFrames,
                    this.props.fps
                  );
                }),
                (U.prototype._getSizeProps = function () {
                  var t = this.props;
                  return {
                    width: t.width,
                    height: t.height,
                    pixelRatio: t.pixelRatio,
                    canvasWidth: t.canvasWidth,
                    canvasHeight: t.canvasHeight,
                    viewportWidth: t.viewportWidth,
                    viewportHeight: t.viewportHeight,
                  };
                }),
                (U.prototype.run = function () {
                  if (!this.sketch)
                    throw new Error(
                      "should wait until sketch is loaded before trying to play()"
                    );
                  return (
                    !1 !== this.settings.playing && this.play(),
                    "function" == typeof this.sketch.dispose &&
                      console.warn(
                        "In canvas-sketch@0.0.23 the dispose() event has been renamed to unload()"
                      ),
                    this.props.started ||
                      (this._signalBegin(), (this.props.started = !0)),
                    this.tick(),
                    this.render(),
                    this
                  );
                }),
                (U.prototype._cancelTimeouts = function () {
                  null != this._raf &&
                    "undefined" != typeof window &&
                    "function" == typeof window.cancelAnimationFrame &&
                    (window.cancelAnimationFrame(this._raf),
                    (this._raf = null)),
                    null != this._recordTimeout &&
                      (clearTimeout(this._recordTimeout),
                      (this._recordTimeout = null));
                }),
                (U.prototype.play = function () {
                  var t = this.settings.animate;
                  "animation" in this.settings &&
                    ((t = !0),
                    console.warn(
                      "[canvas-sketch] { animation } has been renamed to { animate }"
                    )),
                    t &&
                      (l()
                        ? this.props.playing ||
                          (this.props.started ||
                            (this._signalBegin(), (this.props.started = !0)),
                          (this.props.playing = !0),
                          this._cancelTimeouts(),
                          (this._lastTime = c()),
                          (this._raf = window.requestAnimationFrame(
                            this._animateHandler
                          )))
                        : console.error(
                            "[canvas-sketch] WARN: Using { animate } in Node.js is not yet supported"
                          ));
                }),
                (U.prototype.pause = function () {
                  this.props.recording && this.endRecord(),
                    (this.props.playing = !1),
                    this._cancelTimeouts();
                }),
                (U.prototype.togglePlay = function () {
                  this.props.playing ? this.pause() : this.play();
                }),
                (U.prototype.stop = function () {
                  this.pause(),
                    (this.props.frame = 0),
                    (this.props.playhead = 0),
                    (this.props.time = 0),
                    (this.props.deltaTime = 0),
                    (this.props.started = !1),
                    this.render();
                }),
                (U.prototype.record = function () {
                  var t = this;
                  if (!this.props.recording)
                    if (l()) {
                      this.stop(),
                        (this.props.playing = !0),
                        (this.props.recording = !0);
                      var e = this._createExportOptions({ sequence: !0 }),
                        n = 1 / this.props.fps;
                      this._cancelTimeouts();
                      var i,
                        r = function () {
                          return t.props.recording
                            ? ((t.props.deltaTime = n),
                              t.tick(),
                              t.exportFrame(e).then(function () {
                                t.props.recording &&
                                  ((t.props.deltaTime = 0),
                                  t.props.frame++,
                                  t.props.frame < t.props.totalFrames
                                    ? ((t.props.time += n),
                                      (t.props.playhead = t._computePlayhead(
                                        t.props.time,
                                        t.props.duration
                                      )),
                                      (t._recordTimeout = setTimeout(r, 0)))
                                    : (console.log("Finished recording"),
                                      t._signalEnd(),
                                      t.endRecord(),
                                      t.stop(),
                                      t.run()));
                              }))
                            : Promise.resolve();
                        };
                      this.props.started ||
                        (this._signalBegin(), (this.props.started = !0)),
                        this.sketch &&
                          "function" == typeof this.sketch.beginRecord &&
                          this._wrapContextScale(function (e) {
                            return t.sketch.beginRecord(e);
                          }),
                        ((i = e), void 0 === i && (i = {}), T(!0, i))
                          .catch(function (t) {
                            console.error(t);
                          })
                          .then(function (e) {
                            t._raf = window.requestAnimationFrame(r);
                          });
                    } else
                      console.error(
                        "[canvas-sketch] WARN: Recording from Node.js is not yet supported"
                      );
                }),
                (U.prototype._signalBegin = function () {
                  var t = this;
                  this.sketch &&
                    "function" == typeof this.sketch.begin &&
                    this._wrapContextScale(function (e) {
                      return t.sketch.begin(e);
                    });
                }),
                (U.prototype._signalEnd = function () {
                  var t = this;
                  this.sketch &&
                    "function" == typeof this.sketch.end &&
                    this._wrapContextScale(function (e) {
                      return t.sketch.end(e);
                    });
                }),
                (U.prototype.endRecord = function () {
                  var t,
                    e = this,
                    n = this.props.recording;
                  return (
                    this._cancelTimeouts(),
                    (this.props.recording = !1),
                    (this.props.deltaTime = 0),
                    (this.props.playing = !1),
                    (void 0 === t && (t = {}), T(!1, t))
                      .catch(function (t) {
                        console.error(t);
                      })
                      .then(function () {
                        n &&
                          e.sketch &&
                          "function" == typeof e.sketch.endRecord &&
                          e._wrapContextScale(function (t) {
                            return e.sketch.endRecord(t);
                          });
                      })
                  );
                }),
                (U.prototype._createExportOptions = function (t) {
                  return (
                    void 0 === t && (t = {}),
                    {
                      sequence: t.sequence,
                      save: t.save,
                      fps: this.props.fps,
                      frame: t.sequence ? this.props.frame : void 0,
                      file: this.settings.file,
                      name: this.settings.name,
                      prefix: this.settings.prefix,
                      suffix: this.settings.suffix,
                      encoding: this.settings.encoding,
                      encodingQuality: this.settings.encodingQuality,
                      timeStamp:
                        t.timeStamp || v(new Date(), "yyyy.mm.dd-HH.MM.ss"),
                      totalFrames: isFinite(this.props.totalFrames)
                        ? Math.max(0, this.props.totalFrames)
                        : 1e3,
                    }
                  );
                }),
                (U.prototype.exportFrame = function (t) {
                  var e = this;
                  if ((void 0 === t && (t = {}), !this.sketch))
                    return Promise.all([]);
                  "function" == typeof this.sketch.preExport &&
                    this.sketch.preExport();
                  var n = this._createExportOptions(t),
                    i = f(),
                    r = Promise.resolve();
                  if (i && t.commit && "function" == typeof i.commit) {
                    var s = o({}, n),
                      a = i.commit(s);
                    r = u(a) ? a : Promise.resolve(a);
                  }
                  return r
                    .then(function (t) {
                      return e._doExportFrame(o({}, n, { hash: t || "" }));
                    })
                    .then(function (t) {
                      return 1 === t.length ? t[0] : t;
                    });
                }),
                (U.prototype._doExportFrame = function (t) {
                  var e = this;
                  void 0 === t && (t = {}),
                    (this._props.exporting = !0),
                    this.resize();
                  var n = this.render();
                  return (
                    void 0 === n && (n = [this.props.canvas]),
                    (n = (n = [].concat(n).filter(Boolean)).map(function (e) {
                      var n,
                        i =
                          "object" == typeof e &&
                          e &&
                          ("data" in e || "dataURL" in e),
                        r = i ? e.data : e,
                        s = i ? o({}, e, { data: r }) : { data: r };
                      if (
                        p((n = r)) &&
                        /canvas/i.test(n.nodeName) &&
                        "function" == typeof n.getContext
                      ) {
                        var a = (function (t, e) {
                          void 0 === e && (e = {});
                          var n = e.encoding || "image/png";
                          if (!k.includes(n))
                            throw new Error("Invalid canvas encoding " + n);
                          var i = (n.split("/")[1] || "").replace(
                            /jpeg/i,
                            "jpg"
                          );
                          return (
                            i && (i = ("." + i).toLowerCase()),
                            {
                              extension: i,
                              type: n,
                              dataURL: t.toDataURL(n, e.encodingQuality),
                            }
                          );
                        })(r, {
                          encoding: s.encoding || t.encoding,
                          encodingQuality: h(
                            s.encodingQuality,
                            t.encodingQuality,
                            0.95
                          ),
                        });
                        return Object.assign(s, {
                          dataURL: a.dataURL,
                          extension: a.extension,
                          type: a.type,
                        });
                      }
                      return s;
                    })),
                    (this._props.exporting = !1),
                    this.resize(),
                    this.render(),
                    Promise.all(
                      n.map(function (e, n, i) {
                        var r = o(
                            { extension: "", prefix: "", suffix: "" },
                            t,
                            e,
                            { layer: n, totalLayers: i.length }
                          ),
                          s = !1 !== t.save && e.save;
                        for (var a in ((r.save = !1 !== s),
                        (r.filename = P(r)),
                        delete r.encoding,
                        delete r.encodingQuality,
                        r))
                          void 0 === r[a] && delete r[a];
                        var c = Promise.resolve({});
                        if (r.save) {
                          var u = r.data;
                          if (r.dataURL) c = E(r.dataURL, r);
                          else
                            c = (function (t, e) {
                              void 0 === e && (e = {});
                              var n = Array.isArray(t) ? t : [t];
                              return F(
                                new window.Blob(n, { type: e.type || "" }),
                                e
                              );
                            })(u, r);
                        }
                        return c.then(function (t) {
                          return Object.assign({}, r, t);
                        });
                      })
                    ).then(function (n) {
                      var i = n.filter(function (t) {
                        return t.save;
                      });
                      if (i.length > 0) {
                        var r,
                          o = i.find(function (t) {
                            return t.outputName;
                          }),
                          s = i.some(function (t) {
                            return t.client;
                          }),
                          a = i.some(function (t) {
                            return t.stream;
                          });
                        r =
                          i.length > 1
                            ? i.length
                            : o
                            ? o.outputName + "/" + i[0].filename
                            : "" + i[0].filename;
                        var c = "";
                        if (t.sequence)
                          c = isFinite(e.props.totalFrames)
                            ? " (frame " +
                              (t.frame + 1) +
                              " / " +
                              e.props.totalFrames +
                              ")"
                            : " (frame " + t.frame + ")";
                        else i.length > 1 && (c = " files");
                        console.log(
                          "%c[" +
                            (s ? "canvas-sketch-cli" : "canvas-sketch") +
                            "]%c " +
                            (a ? "Streaming into" : "Exported") +
                            " %c" +
                            r +
                            "%c" +
                            c,
                          "color: #8e8e8e;",
                          "color: initial;",
                          "font-weight: bold;",
                          "font-weight: initial;"
                        );
                      }
                      return (
                        "function" == typeof e.sketch.postExport &&
                          e.sketch.postExport(),
                        n
                      );
                    })
                  );
                }),
                (U.prototype._wrapContextScale = function (t) {
                  this._preRender(), t(this.props), this._postRender();
                }),
                (U.prototype._preRender = function () {
                  var t = this.props;
                  this.props.gl || !t.context || t.p5
                    ? t.p5 &&
                      t.p5.scale(
                        t.scaleX / t.pixelRatio,
                        t.scaleY / t.pixelRatio
                      )
                    : (t.context.save(),
                      !1 !== this.settings.scaleContext &&
                        t.context.scale(t.scaleX, t.scaleY));
                }),
                (U.prototype._postRender = function () {
                  var t = this.props;
                  this.props.gl || !t.context || t.p5 || t.context.restore(),
                    t.gl && !1 !== this.settings.flush && !t.p5 && t.gl.flush();
                }),
                (U.prototype.tick = function () {
                  this.sketch &&
                    "function" == typeof this.sketch.tick &&
                    (this._preRender(),
                    this.sketch.tick(this.props),
                    this._postRender());
                }),
                (U.prototype.render = function () {
                  return this.props.p5
                    ? ((this._lastRedrawResult = void 0),
                      this.props.p5.redraw(),
                      this._lastRedrawResult)
                    : this.submitDrawCall();
                }),
                (U.prototype.submitDrawCall = function () {
                  if (this.sketch) {
                    var t,
                      e = this.props;
                    return (
                      this._preRender(),
                      "function" == typeof this.sketch
                        ? (t = this.sketch(e))
                        : "function" == typeof this.sketch.render &&
                          (t = this.sketch.render(e)),
                      this._postRender(),
                      t
                    );
                  }
                }),
                (U.prototype.update = function (t) {
                  var e = this;
                  void 0 === t && (t = {});
                  var n = ["animate"];
                  Object.keys(t).forEach(function (t) {
                    if (n.indexOf(t) >= 0)
                      throw new Error(
                        "Sorry, the { " +
                          t +
                          " } option is not yet supported with update()."
                      );
                  });
                  var i = this._settings.canvas,
                    r = this._settings.context;
                  for (var o in t) {
                    var s = t[o];
                    void 0 !== s && (e._settings[o] = s);
                  }
                  var a = Object.assign({}, this._settings, t);
                  if ("time" in t && "frame" in t)
                    throw new Error(
                      "You should specify { time } or { frame } but not both"
                    );
                  if (
                    ("time" in t
                      ? delete a.frame
                      : "frame" in t && delete a.time,
                    "duration" in t && "totalFrames" in t)
                  )
                    throw new Error(
                      "You should specify { duration } or { totalFrames } but not both"
                    );
                  "duration" in t
                    ? delete a.totalFrames
                    : "totalFrames" in t && delete a.duration,
                    "data" in t && (this._props.data = t.data);
                  var c = this.getTimeProps(a);
                  if (
                    (Object.assign(this._props, c),
                    i !== this._settings.canvas || r !== this._settings.context)
                  ) {
                    var u = L(this._settings),
                      p = u.context;
                    (this.props.canvas = u.canvas),
                      (this.props.context = p),
                      this._setupGLKey(),
                      this._appendCanvasIfNeeded();
                  }
                  return (
                    t.p5 &&
                      "function" != typeof t.p5 &&
                      ((this.props.p5 = t.p5),
                      (this.props.p5.draw = function () {
                        e._isP5Resizing ||
                          (e._lastRedrawResult = e.submitDrawCall());
                      })),
                    "playing" in t && (t.playing ? this.play() : this.pause()),
                    C(this._settings),
                    this.resize(),
                    this.render(),
                    this.props
                  );
                }),
                (U.prototype.resize = function () {
                  var t = this._getSizeProps(),
                    e = this.settings,
                    n = this.props,
                    i = z(n, e);
                  Object.assign(this._props, i);
                  var r = this.props,
                    o = r.pixelRatio,
                    s = r.canvasWidth,
                    a = r.canvasHeight,
                    c = r.styleWidth,
                    u = r.styleHeight,
                    p = this.props.canvas;
                  p &&
                    !1 !== e.resizeCanvas &&
                    (n.p5
                      ? (p.width === s && p.height === a) ||
                        ((this._isP5Resizing = !0),
                        n.p5.pixelDensity(o),
                        n.p5.resizeCanvas(s / o, a / o, !1),
                        (this._isP5Resizing = !1))
                      : (p.width !== s && (p.width = s),
                        p.height !== a && (p.height = a)),
                    l() &&
                      !1 !== e.styleCanvas &&
                      ((p.style.width = c + "px"),
                      (p.style.height = u + "px")));
                  var f = this._getSizeProps(),
                    h = !g(t, f);
                  return h && this._sizeChanged(), h;
                }),
                (U.prototype._sizeChanged = function () {
                  this.sketch &&
                    "function" == typeof this.sketch.resize &&
                    this.sketch.resize(this.props);
                }),
                (U.prototype.animate = function () {
                  if (this.props.playing)
                    if (l()) {
                      this._raf = window.requestAnimationFrame(
                        this._animateHandler
                      );
                      var t = c(),
                        e = 1e3 / this.props.fps,
                        n = t - this._lastTime,
                        i = this.props.duration,
                        r = "number" == typeof i && isFinite(i),
                        o = !0,
                        s = this.settings.playbackRate;
                      "fixed" === s
                        ? (n = e)
                        : "throttle" === s
                        ? n > e
                          ? (this._lastTime = t -= n % e)
                          : (o = !1)
                        : (this._lastTime = t);
                      var a = n / 1e3,
                        u = this.props.time + a * this.props.timeScale;
                      u < 0 && r && (u = i + u);
                      var p = !1,
                        f = !1;
                      if (
                        (r &&
                          u >= i &&
                          (!1 !== this.settings.loop
                            ? ((o = !0), (u %= i), (f = !0))
                            : ((o = !1), (u = i), (p = !0)),
                          this._signalEnd()),
                        o)
                      ) {
                        (this.props.deltaTime = a),
                          (this.props.time = u),
                          (this.props.playhead = this._computePlayhead(u, i));
                        var h = this.props.frame;
                        (this.props.frame = this._computeCurrentFrame()),
                          f && this._signalBegin(),
                          h !== this.props.frame && this.tick(),
                          this.render(),
                          (this.props.deltaTime = 0);
                      }
                      p && this.pause();
                    } else
                      console.error(
                        "[canvas-sketch] WARN: Animation in Node.js is not yet supported"
                      );
                }),
                (U.prototype.dispatch = function (t) {
                  if ("function" != typeof t)
                    throw new Error("must pass function into dispatch()");
                  t(this.props), this.render();
                }),
                (U.prototype.mount = function () {
                  this._appendCanvasIfNeeded();
                }),
                (U.prototype.unmount = function () {
                  l() &&
                    (window.removeEventListener("resize", this._resizeHandler),
                    this._keyboardShortcuts.detach()),
                    this.props.canvas.parentElement &&
                      this.props.canvas.parentElement.removeChild(
                        this.props.canvas
                      );
                }),
                (U.prototype._appendCanvasIfNeeded = function () {
                  l() &&
                    !1 !== this.settings.parent &&
                    this.props.canvas &&
                    !this.props.canvas.parentElement &&
                    (this.settings.parent || document.body).appendChild(
                      this.props.canvas
                    );
                }),
                (U.prototype._setupGLKey = function () {
                  var t;
                  this.props.context &&
                    ("function" == typeof (t = this.props.context).clear &&
                    "function" == typeof t.clearColor &&
                    "function" == typeof t.bufferData
                      ? (this._props.gl = this.props.context)
                      : delete this._props.gl);
                }),
                (U.prototype.getTimeProps = function (t) {
                  void 0 === t && (t = {});
                  var e = t.duration,
                    n = t.totalFrames,
                    i = h(t.timeScale, 1),
                    r = h(t.fps, 24),
                    o = "number" == typeof e && isFinite(e),
                    s = "number" == typeof n && isFinite(n),
                    a = o ? Math.floor(r * e) : void 0,
                    c = s ? n / r : void 0;
                  if (o && s && a !== n)
                    throw new Error(
                      "You should specify either duration or totalFrames, but not both. Or, they must match exactly."
                    );
                  void 0 === t.dimensions &&
                    void 0 !== t.units &&
                    console.warn(
                      "You've specified a { units } setting but no { dimension }, so the units will be ignored."
                    ),
                    (n = h(n, a, Infinity)),
                    (e = h(e, c, Infinity));
                  var u = t.time,
                    p = t.frame,
                    f = "number" == typeof u && isFinite(u),
                    l = "number" == typeof p && isFinite(p),
                    d = 0,
                    m = 0,
                    y = 0;
                  if (f && l)
                    throw new Error(
                      "You should specify either start frame or time, but not both."
                    );
                  return (
                    f
                      ? ((y = this._computePlayhead((d = u), e)),
                        (m = this._computeFrame(y, d, n, r)))
                      : l && (y = this._computePlayhead((d = (m = p) / r), e)),
                    {
                      playhead: y,
                      time: d,
                      frame: m,
                      duration: e,
                      totalFrames: n,
                      fps: r,
                      timeScale: i,
                    }
                  );
                }),
                (U.prototype.setup = function (t) {
                  var e = this;
                  if ((void 0 === t && (t = {}), this.sketch))
                    throw new Error(
                      "Multiple setup() calls not yet supported."
                    );
                  (this._settings = Object.assign({}, t, this._settings)),
                    C(this._settings);
                  var n = L(this._settings),
                    i = n.context,
                    r = n.canvas,
                    o = this.getTimeProps(this._settings);
                  (this._props = Object.assign({}, o, {
                    canvas: r,
                    context: i,
                    deltaTime: 0,
                    started: !1,
                    exporting: !1,
                    playing: !1,
                    recording: !1,
                    settings: this.settings,
                    data: this.settings.data,
                    render: function () {
                      return e.render();
                    },
                    togglePlay: function () {
                      return e.togglePlay();
                    },
                    dispatch: function (t) {
                      return e.dispatch(t);
                    },
                    tick: function () {
                      return e.tick();
                    },
                    resize: function () {
                      return e.resize();
                    },
                    update: function (t) {
                      return e.update(t);
                    },
                    exportFrame: function (t) {
                      return e.exportFrame(t);
                    },
                    record: function () {
                      return e.record();
                    },
                    play: function () {
                      return e.play();
                    },
                    pause: function () {
                      return e.pause();
                    },
                    stop: function () {
                      return e.stop();
                    },
                  })),
                    this._setupGLKey(),
                    this.resize();
                }),
                (U.prototype.loadAndRun = function (t, e) {
                  var n = this;
                  return this.load(t, e).then(function () {
                    return n.run(), n;
                  });
                }),
                (U.prototype.unload = function () {
                  var t = this;
                  this.pause(),
                    this.sketch &&
                      ("function" == typeof this.sketch.unload &&
                        this._wrapContextScale(function (e) {
                          return t.sketch.unload(e);
                        }),
                      (this._sketch = null));
                }),
                (U.prototype.destroy = function () {
                  this.unload(), this.unmount();
                }),
                (U.prototype.load = function (t, e) {
                  var n = this;
                  if ("function" != typeof t)
                    throw new Error(
                      "The function must take in a function as the first parameter. Example:\n  canvasSketcher(() => { ... }, settings)"
                    );
                  this.sketch && this.unload(),
                    void 0 !== e && this.update(e),
                    this._preRender();
                  var i = Promise.resolve();
                  if (this.settings.p5) {
                    if (!l())
                      throw new Error(
                        "[canvas-sketch] ERROR: Using p5.js in Node.js is not supported"
                      );
                    i = new Promise(function (t) {
                      var e,
                        i = n.settings.p5;
                      i.p5 && ((e = i.preload), (i = i.p5));
                      var r = function (i) {
                        e &&
                          (i.preload = function () {
                            return e(i);
                          }),
                          (i.setup = function () {
                            var e = n.props,
                              r = "webgl" === n.settings.context,
                              o = r ? i.WEBGL : i.P2D;
                            i.noLoop(),
                              i.pixelDensity(e.pixelRatio),
                              i.createCanvas(
                                e.viewportWidth,
                                e.viewportHeight,
                                o
                              ),
                              r &&
                                n.settings.attributes &&
                                i.setAttributes(n.settings.attributes),
                              n.update({
                                p5: i,
                                canvas: i.canvas,
                                context: i._renderer.drawingContext,
                              }),
                              t();
                          });
                      };
                      if ("function" == typeof i) new i(r);
                      else {
                        if ("function" != typeof window.createCanvas)
                          throw new Error(
                            "{ p5 } setting is passed but can't find p5.js in global (window) scope. Maybe you did not create it globally?\nnew p5(); // <-- attaches to global scope"
                          );
                        r(window);
                      }
                    });
                  }
                  return i
                    .then(function () {
                      var e = t(n.props);
                      return u(e) || (e = Promise.resolve(e)), e;
                    })
                    .then(function (t) {
                      return (
                        t || (t = {}),
                        (n._sketch = t),
                        l() &&
                          (n._keyboardShortcuts.attach(),
                          window.addEventListener("resize", n._resizeHandler)),
                        n._postRender(),
                        n._sizeChanged(),
                        n
                      );
                    })
                    .catch(function (t) {
                      throw (
                        (console.warn(
                          "Could not start sketch, the async loading function rejected with an error:\n    Error: " +
                            t.message
                        ),
                        t)
                      );
                    });
                }),
                Object.defineProperties(U.prototype, W);
              var q = "hot-id-cache",
                B = [];
              function Y(t, e) {
                if ((void 0 === e && (e = {}), e.p5)) {
                  if (e.canvas || (e.context && "string" != typeof e.context))
                    throw new Error(
                      'In { p5 } mode, you can\'t pass your own canvas or context, unless the context is a "webgl" or "2d" string'
                    );
                  e = Object.assign({}, e, {
                    canvas: !1,
                    context: "string" == typeof e.context && e.context,
                  });
                }
                var n,
                  i,
                  r = (n = f()) && n.hot;
                r && (i = h(e.id, "$__DEFAULT_CANVAS_SKETCH_ID__$"));
                var o = r && "string" == typeof i;
                o &&
                  B.includes(i) &&
                  (console.warn(
                    "Warning: You have multiple calls to canvasSketch() in --hot mode. You must pass unique { id } strings in settings to enable hot reload across multiple sketches. ",
                    i
                  ),
                  (o = !1));
                var s = Promise.resolve();
                if (o) {
                  B.push(i);
                  var a = (function (t) {
                    var e = f();
                    if (e) return (e[q] = e[q] || {}), e[q][t];
                  })(i);
                  if (a) {
                    var c = function () {
                      var t,
                        n =
                          ((t = a.manager),
                          e.animate ? { time: t.props.time } : void 0);
                      return a.manager.destroy(), n;
                    };
                    s = a.load.then(c).catch(c);
                  }
                }
                return s.then(function (n) {
                  var r,
                    s = new U();
                  return (
                    t
                      ? ((e = Object.assign({}, e, n)),
                        s.setup(e),
                        s.mount(),
                        (r = s.loadAndRun(t)))
                      : (r = Promise.resolve(s)),
                    o &&
                      (function (t, e) {
                        var n = f();
                        n && ((n[q] = n[q] || {}), (n[q][t] = e));
                      })(i, { load: r, manager: s }),
                    r
                  );
                });
              }
              return (Y.canvasSketch = Y), (Y.PaperSizes = j), Y;
            });
          }.call(this));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    3: [
      function (t, e, n) {
        "use strict";
        e.exports = function () {
          for (var t = 0; t < arguments.length; t++)
            if (void 0 !== arguments[t]) return arguments[t];
        };
      },
      {},
    ],
    4: [
      function (t, e, n) {
        (function (t) {
          (function () {
            "use strict";
            var n = 256,
              i = [],
              r = void 0 === t ? window : t,
              o = Math.pow(n, 6),
              s = Math.pow(2, 52),
              a = 2 * s,
              c = 255,
              u = Math.random;
            function p(t) {
              var e,
                i = t.length,
                r = this,
                o = 0,
                s = (r.i = r.j = 0),
                a = (r.S = []);
              for (i || (t = [i++]); o < n; ) a[o] = o++;
              for (o = 0; o < n; o++)
                (a[o] = a[(s = c & (s + t[o % i] + (e = a[o])))]), (a[s] = e);
              (r.g = function (t) {
                for (var e, i = 0, o = r.i, s = r.j, a = r.S; t--; )
                  (e = a[(o = c & (o + 1))]),
                    (i =
                      i * n +
                      a[c & ((a[o] = a[(s = c & (s + e))]) + (a[s] = e))]);
                return (r.i = o), (r.j = s), i;
              })(n);
            }
            function f(t, e) {
              var n,
                i = [],
                r = (typeof t)[0];
              if (e && "o" == r)
                for (n in t)
                  try {
                    i.push(f(t[n], e - 1));
                  } catch (t) {}
              return i.length ? i : "s" == r ? t : t + "\0";
            }
            function h(t, e) {
              for (var n, i = t + "", r = 0; r < i.length; )
                e[c & r] = c & ((n ^= 19 * e[c & r]) + i.charCodeAt(r++));
              return d(e);
            }
            function l(t) {
              try {
                return r.crypto.getRandomValues((t = new Uint8Array(n))), d(t);
              } catch (t) {
                return [
                  +new Date(),
                  r,
                  r.navigator && r.navigator.plugins,
                  r.screen,
                  d(i),
                ];
              }
            }
            function d(t) {
              return String.fromCharCode.apply(0, t);
            }
            (e.exports = function (t, r) {
              if (r && !0 === r.global)
                return (
                  (r.global = !1),
                  (Math.random = e.exports(t, r)),
                  (r.global = !0),
                  Math.random
                );
              var c = (r && r.entropy) || !1,
                u = [],
                m =
                  (h(f(c ? [t, d(i)] : 0 in arguments ? t : l(), 3), u),
                  new p(u));
              return (
                h(d(m.S), i),
                function () {
                  for (var t = m.g(6), e = o, i = 0; t < s; )
                    (t = (t + i) * n), (e *= n), (i = m.g(1));
                  for (; t >= a; ) (t /= 2), (e /= 2), (i >>>= 1);
                  return (t + i) / e;
                }
              );
            }),
              (e.exports.resetGlobal = function () {
                Math.random = u;
              }),
              h(Math.random(), i);
          }.call(this));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    5: [
      function (t, e, n) {
        !(function () {
          "use strict";
          var t = 0.5 * (Math.sqrt(3) - 1),
            i = (3 - Math.sqrt(3)) / 6,
            r = 1 / 6,
            o = (Math.sqrt(5) - 1) / 4,
            s = (5 - Math.sqrt(5)) / 20;
          function a(t) {
            var e;
            (e =
              "function" == typeof t
                ? t
                : t
                ? (function () {
                    var t = 0,
                      e = 0,
                      n = 0,
                      i = 1,
                      r = u();
                    (t = r(" ")), (e = r(" ")), (n = r(" "));
                    for (var o = 0; o < arguments.length; o++)
                      (t -= r(arguments[o])) < 0 && (t += 1),
                        (e -= r(arguments[o])) < 0 && (e += 1),
                        (n -= r(arguments[o])) < 0 && (n += 1);
                    return (
                      (r = null),
                      function () {
                        var r = 2091639 * t + 2.3283064365386963e-10 * i;
                        return (t = e), (e = n), (n = r - (i = 0 | r));
                      }
                    );
                  })(t)
                : Math.random),
              (this.p = c(e)),
              (this.perm = new Uint8Array(512)),
              (this.permMod12 = new Uint8Array(512));
            for (var n = 0; n < 512; n++)
              (this.perm[n] = this.p[255 & n]),
                (this.permMod12[n] = this.perm[n] % 12);
          }
          function c(t) {
            var e,
              n = new Uint8Array(256);
            for (e = 0; e < 256; e++) n[e] = e;
            for (e = 0; e < 255; e++) {
              var i = e + ~~(t() * (256 - e)),
                r = n[e];
              (n[e] = n[i]), (n[i] = r);
            }
            return n;
          }
          function u() {
            var t = 4022871197;
            return function (e) {
              e = e.toString();
              for (var n = 0; n < e.length; n++) {
                var i = 0.02519603282416938 * (t += e.charCodeAt(n));
                (i -= t = i >>> 0),
                  (t = (i *= t) >>> 0),
                  (t += 4294967296 * (i -= t));
              }
              return 2.3283064365386963e-10 * (t >>> 0);
            };
          }
          (a.prototype = {
            grad3: new Float32Array([
              1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0,
              -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
            ]),
            grad4: new Float32Array([
              0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1,
              0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1,
              -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0,
              -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1,
              0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1,
              1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1,
              1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0,
            ]),
            noise2D: function (e, n) {
              var r,
                o,
                s = this.permMod12,
                a = this.perm,
                c = this.grad3,
                u = 0,
                p = 0,
                f = 0,
                h = (e + n) * t,
                l = Math.floor(e + h),
                d = Math.floor(n + h),
                m = (l + d) * i,
                y = e - (l - m),
                g = n - (d - m);
              y > g ? ((r = 1), (o = 0)) : ((r = 0), (o = 1));
              var v = y - r + i,
                w = g - o + i,
                b = y - 1 + 2 * i,
                x = g - 1 + 2 * i,
                M = 255 & l,
                _ = 255 & d,
                k = 0.5 - y * y - g * g;
              if (k >= 0) {
                var T = 3 * s[M + a[_]];
                u = (k *= k) * k * (c[T] * y + c[T + 1] * g);
              }
              var E = 0.5 - v * v - w * w;
              if (E >= 0) {
                var F = 3 * s[M + r + a[_ + o]];
                p = (E *= E) * E * (c[F] * v + c[F + 1] * w);
              }
              var P = 0.5 - b * b - x * x;
              if (P >= 0) {
                var S = 3 * s[M + 1 + a[_ + 1]];
                f = (P *= P) * P * (c[S] * b + c[S + 1] * x);
              }
              return 70 * (u + p + f);
            },
            noise3D: function (t, e, n) {
              var i,
                o,
                s,
                a,
                c,
                u,
                p,
                f,
                h,
                l,
                d = this.permMod12,
                m = this.perm,
                y = this.grad3,
                g = 0.3333333333333333 * (t + e + n),
                v = Math.floor(t + g),
                w = Math.floor(e + g),
                b = Math.floor(n + g),
                x = (v + w + b) * r,
                M = t - (v - x),
                _ = e - (w - x),
                k = n - (b - x);
              M >= _
                ? _ >= k
                  ? ((c = 1), (u = 0), (p = 0), (f = 1), (h = 1), (l = 0))
                  : M >= k
                  ? ((c = 1), (u = 0), (p = 0), (f = 1), (h = 0), (l = 1))
                  : ((c = 0), (u = 0), (p = 1), (f = 1), (h = 0), (l = 1))
                : _ < k
                ? ((c = 0), (u = 0), (p = 1), (f = 0), (h = 1), (l = 1))
                : M < k
                ? ((c = 0), (u = 1), (p = 0), (f = 0), (h = 1), (l = 1))
                : ((c = 0), (u = 1), (p = 0), (f = 1), (h = 1), (l = 0));
              var T = M - c + r,
                E = _ - u + r,
                F = k - p + r,
                P = M - f + 2 * r,
                S = _ - h + 2 * r,
                R = k - l + 2 * r,
                C = M - 1 + 0.5,
                j = _ - 1 + 0.5,
                D = k - 1 + 0.5,
                O = 255 & v,
                A = 255 & w,
                N = 255 & b,
                H = 0.6 - M * M - _ * _ - k * k;
              if (H < 0) i = 0;
              else {
                var z = 3 * d[O + m[A + m[N]]];
                i = (H *= H) * H * (y[z] * M + y[z + 1] * _ + y[z + 2] * k);
              }
              var I = 0.6 - T * T - E * E - F * F;
              if (I < 0) o = 0;
              else {
                var L = 3 * d[O + c + m[A + u + m[N + p]]];
                o = (I *= I) * I * (y[L] * T + y[L + 1] * E + y[L + 2] * F);
              }
              var U = 0.6 - P * P - S * S - R * R;
              if (U < 0) s = 0;
              else {
                var W = 3 * d[O + f + m[A + h + m[N + l]]];
                s = (U *= U) * U * (y[W] * P + y[W + 1] * S + y[W + 2] * R);
              }
              var q = 0.6 - C * C - j * j - D * D;
              if (q < 0) a = 0;
              else {
                var B = 3 * d[O + 1 + m[A + 1 + m[N + 1]]];
                a = (q *= q) * q * (y[B] * C + y[B + 1] * j + y[B + 2] * D);
              }
              return 32 * (i + o + s + a);
            },
            noise4D: function (t, e, n, i) {
              var r,
                a,
                c,
                u,
                p,
                f,
                h,
                l,
                d,
                m,
                y,
                g,
                v,
                w,
                b,
                x,
                M,
                _ = this.perm,
                k = this.grad4,
                T = (t + e + n + i) * o,
                E = Math.floor(t + T),
                F = Math.floor(e + T),
                P = Math.floor(n + T),
                S = Math.floor(i + T),
                R = (E + F + P + S) * s,
                C = t - (E - R),
                j = e - (F - R),
                D = n - (P - R),
                O = i - (S - R),
                A = 0,
                N = 0,
                H = 0,
                z = 0;
              C > j ? A++ : N++,
                C > D ? A++ : H++,
                C > O ? A++ : z++,
                j > D ? N++ : H++,
                j > O ? N++ : z++,
                D > O ? H++ : z++;
              var I = C - (f = A >= 3 ? 1 : 0) + s,
                L = j - (h = N >= 3 ? 1 : 0) + s,
                U = D - (l = H >= 3 ? 1 : 0) + s,
                W = O - (d = z >= 3 ? 1 : 0) + s,
                q = C - (m = A >= 2 ? 1 : 0) + 2 * s,
                B = j - (y = N >= 2 ? 1 : 0) + 2 * s,
                Y = D - (g = H >= 2 ? 1 : 0) + 2 * s,
                K = O - (v = z >= 2 ? 1 : 0) + 2 * s,
                G = C - (w = A >= 1 ? 1 : 0) + 3 * s,
                Q = j - (b = N >= 1 ? 1 : 0) + 3 * s,
                Z = D - (x = H >= 1 ? 1 : 0) + 3 * s,
                J = O - (M = z >= 1 ? 1 : 0) + 3 * s,
                V = C - 1 + 4 * s,
                X = j - 1 + 4 * s,
                $ = D - 1 + 4 * s,
                tt = O - 1 + 4 * s,
                et = 255 & E,
                nt = 255 & F,
                it = 255 & P,
                rt = 255 & S,
                ot = 0.6 - C * C - j * j - D * D - O * O;
              if (ot < 0) r = 0;
              else {
                var st = (_[et + _[nt + _[it + _[rt]]]] % 32) * 4;
                r =
                  (ot *= ot) *
                  ot *
                  (k[st] * C + k[st + 1] * j + k[st + 2] * D + k[st + 3] * O);
              }
              var at = 0.6 - I * I - L * L - U * U - W * W;
              if (at < 0) a = 0;
              else {
                var ct =
                  (_[et + f + _[nt + h + _[it + l + _[rt + d]]]] % 32) * 4;
                a =
                  (at *= at) *
                  at *
                  (k[ct] * I + k[ct + 1] * L + k[ct + 2] * U + k[ct + 3] * W);
              }
              var ut = 0.6 - q * q - B * B - Y * Y - K * K;
              if (ut < 0) c = 0;
              else {
                var pt =
                  (_[et + m + _[nt + y + _[it + g + _[rt + v]]]] % 32) * 4;
                c =
                  (ut *= ut) *
                  ut *
                  (k[pt] * q + k[pt + 1] * B + k[pt + 2] * Y + k[pt + 3] * K);
              }
              var ft = 0.6 - G * G - Q * Q - Z * Z - J * J;
              if (ft < 0) u = 0;
              else {
                var ht =
                  (_[et + w + _[nt + b + _[it + x + _[rt + M]]]] % 32) * 4;
                u =
                  (ft *= ft) *
                  ft *
                  (k[ht] * G + k[ht + 1] * Q + k[ht + 2] * Z + k[ht + 3] * J);
              }
              var lt = 0.6 - V * V - X * X - $ * $ - tt * tt;
              if (lt < 0) p = 0;
              else {
                var dt =
                  (_[et + 1 + _[nt + 1 + _[it + 1 + _[rt + 1]]]] % 32) * 4;
                p =
                  (lt *= lt) *
                  lt *
                  (k[dt] * V + k[dt + 1] * X + k[dt + 2] * $ + k[dt + 3] * tt);
              }
              return 27 * (r + a + c + u + p);
            },
          }),
            (a._buildPermutationTable = c),
            "undefined" != typeof define &&
              define.amd &&
              define(function () {
                return a;
              }),
            void 0 !== n
              ? (n.SimplexNoise = a)
              : "undefined" != typeof window && (window.SimplexNoise = a),
            void 0 !== e && (e.exports = a);
        })();
      },
      {},
    ],
    6: [
      function (t, e, n) {
        const i = t("canvas-sketch"),
          r = t("canvas-sketch-util/random"),
          o = [
            "#f1faee",
            "#a8dadc",
            "#457b9d",
            "#1d3557",
            "#fcbf49",
            "#f77f00",
            "#e63946",
          ];
        function s(t, e, n, i, r, o, s) {
          t.beginPath(),
            t.ellipse(e, n, i, r, o, 0, 2 * s * Math.PI),
            t.fill(),
            t.stroke();
        }
        function a(t, e, n, i, r, o) {
          s(t, e, n, i / 2, o, 0, 0.5),
            t.rect(e - i / 2, n - r, i, r),
            t.fill(),
            t.stroke(),
            (function (t, e, n, i, r, o, s) {
              t.beginPath(),
                t.ellipse(e, n, i, r, o, 0, 2 * s * Math.PI),
                t.fill();
            })(t, e, n, i / 2 - t.lineWidth / 2, o - t.lineWidth / 2, 0, 1),
            s(t, e, n - r, i / 2, o, 0, 1);
        }
        function c(t, e, n, i, r) {
          a(t, e, n, i, r, r / 2), a(t, e, n - r, i / 2, r / 3, r / 4);
        }
        function u(t, e, n, i, r, s) {
          for (let a = 0; a < s; a++)
            (t.fillStyle = o[a]), c(t, e, n - r * a, i, r);
        }
        i(
          () =>
            ({ context: t, width: e, height: n, time: i }) => {
              const s = o.length;
              (t.strokeStyle = "black"),
                (t.lineWidth = 4),
                (t.fillStyle = "#f1faee"),
                t.beginPath(),
                t.rect(0, 0, e, n),
                t.fill();
              for (let i = 1; i < 15; i++)
                for (let r = 1; r < 12; r++)
                  a(t, (e / 12) * r, 45 + (n / 15) * i, 45, 15, 45 / 4);
              for (let o = 1; o < 15; o++)
                for (let a = 1; a < 12; a++) {
                  let c = r.noise3D(a, o, i, 0.09);
                  u(
                    t,
                    (e / 12) * a,
                    45 + (n / 15) * o,
                    90,
                    45,
                    Math.ceil(c * s)
                  );
                }
            },
          { dimensions: [2048, 2048], animate: !0, fps: 20, timeScale: 0.8 }
        );
      },
      { "canvas-sketch": 2, "canvas-sketch-util/random": 1 },
    ],
    7: [
      function (t, e, n) {
        (function (t) {
          (function () {
            t.CANVAS_SKETCH_DEFAULT_STORAGE_KEY = window.location.href;
          }.call(this));
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
  },
  {},
  [6, 7]
);
//# sourceMappingURL=index.js.map
