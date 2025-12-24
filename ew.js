(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) t(i);
  new MutationObserver((i) => {
    for (const n of i)
      if (n.type === "childList")
        for (const s of n.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && t(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const n = {};
    return (
      i.integrity && (n.integrity = i.integrity),
      i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function t(i) {
    if (i.ep) return;
    i.ep = !0;
    const n = r(i);
    fetch(i.href, n);
  }
})();
function br(a) {
  if (a === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return a;
}
function ba(a, e) {
  (a.prototype = Object.create(e.prototype)),
    (a.prototype.constructor = a),
    (a.__proto__ = e);
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Vt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Mi = { duration: 0.5, overwrite: !1, delay: 0 },
  to,
  lt,
  ke,
  Qt = 1e8,
  xe = 1 / Qt,
  Ps = Math.PI * 2,
  Kl = Ps / 4,
  Ql = 0,
  Ta = Math.sqrt,
  Zl = Math.cos,
  Jl = Math.sin,
  it = function (e) {
    return typeof e == "string";
  },
  ze = function (e) {
    return typeof e == "function";
  },
  kr = function (e) {
    return typeof e == "number";
  },
  ro = function (e) {
    return typeof e > "u";
  },
  vr = function (e) {
    return typeof e == "object";
  },
  Et = function (e) {
    return e !== !1;
  },
  io = function () {
    return typeof window < "u";
  },
  bn = function (e) {
    return ze(e) || it(e);
  },
  Sa =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  mt = Array.isArray,
  ks = /(?:-?\.?\d|\.)+/gi,
  Ca = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  wi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  fs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Pa = /[+-]=-?[.\d]+/,
  ka = /[^,'"\[\]\s]+/gi,
  eu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Re,
  hr,
  Os,
  no,
  Ut = {},
  Hn = {},
  Oa,
  Ea = function (e) {
    return (Hn = Ri(e, Ut)) && At;
  },
  so = function (e, r) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      r,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  fn = function (e, r) {
    return !r && console.warn(e);
  },
  Ma = function (e, r) {
    return (e && (Ut[e] = r) && Hn && (Hn[e] = r)) || Ut;
  },
  cn = function () {
    return 0;
  },
  tu = { suppressEvents: !0, isStart: !0, kill: !1 },
  Ln = { suppressEvents: !0, kill: !1 },
  ru = { suppressEvents: !0 },
  oo = {},
  Br = [],
  Es = {},
  Ra,
  Bt = {},
  cs = {},
  Eo = 30,
  Nn = [],
  ao = "",
  lo = function (e) {
    var r = e[0],
      t,
      i;
    if ((vr(r) || ze(r) || (e = [e]), !(t = (r._gsap || {}).harness))) {
      for (i = Nn.length; i-- && !Nn[i].targetTest(r); );
      t = Nn[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new tl(e[i], t)))) ||
        e.splice(i, 1);
    return e;
  },
  ti = function (e) {
    return e._gsap || lo(Zt(e))[0]._gsap;
  },
  Da = function (e, r, t) {
    return (t = e[r]) && ze(t)
      ? e[r]()
      : (ro(t) && e.getAttribute && e.getAttribute(r)) || t;
  },
  Mt = function (e, r) {
    return (e = e.split(",")).forEach(r) || e;
  },
  Ne = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Xe = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Si = function (e, r) {
    var t = r.charAt(0),
      i = parseFloat(r.substr(2));
    return (
      (e = parseFloat(e)),
      t === "+" ? e + i : t === "-" ? e - i : t === "*" ? e * i : e / i
    );
  },
  iu = function (e, r) {
    for (var t = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < t; );
    return i < t;
  },
  qn = function () {
    var e = Br.length,
      r = Br.slice(0),
      t,
      i;
    for (Es = {}, Br.length = 0, t = 0; t < e; t++)
      (i = r[t]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  uo = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  Aa = function (e, r, t, i) {
    Br.length && !lt && qn(),
      e.render(r, t, !!(lt && r < 0 && uo(e))),
      Br.length && !lt && qn();
  },
  Fa = function (e) {
    var r = parseFloat(e);
    return (r || r === 0) && (e + "").match(ka).length < 2
      ? r
      : it(e)
      ? e.trim()
      : e;
  },
  za = function (e) {
    return e;
  },
  Ht = function (e, r) {
    for (var t in r) t in e || (e[t] = r[t]);
    return e;
  },
  nu = function (e) {
    return function (r, t) {
      for (var i in t)
        i in r || (i === "duration" && e) || i === "ease" || (r[i] = t[i]);
    };
  },
  Ri = function (e, r) {
    for (var t in r) e[t] = r[t];
    return e;
  },
  Mo = function a(e, r) {
    for (var t in r)
      t !== "__proto__" &&
        t !== "constructor" &&
        t !== "prototype" &&
        (e[t] = vr(r[t]) ? a(e[t] || (e[t] = {}), r[t]) : r[t]);
    return e;
  },
  Gn = function (e, r) {
    var t = {},
      i;
    for (i in e) i in r || (t[i] = e[i]);
    return t;
  },
  Qi = function (e) {
    var r = e.parent || Re,
      t = e.keyframes ? nu(mt(e.keyframes)) : Ht;
    if (Et(e.inherit))
      for (; r; ) t(e, r.vars.defaults), (r = r.parent || r._dp);
    return e;
  },
  su = function (e, r) {
    for (var t = e.length, i = t === r.length; i && t-- && e[t] === r[t]; );
    return t < 0;
  },
  Ia = function (e, r, t, i, n) {
    var s = e[i],
      o;
    if (n) for (o = r[n]; s && s[n] > o; ) s = s._prev;
    return (
      s ? ((r._next = s._next), (s._next = r)) : ((r._next = e[t]), (e[t] = r)),
      r._next ? (r._next._prev = r) : (e[i] = r),
      (r._prev = s),
      (r.parent = r._dp = e),
      r
    );
  },
  ss = function (e, r, t, i) {
    t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
    var n = r._prev,
      s = r._next;
    n ? (n._next = s) : e[t] === r && (e[t] = s),
      s ? (s._prev = n) : e[i] === r && (e[i] = n),
      (r._next = r._prev = r.parent = null);
  },
  Wr = function (e, r) {
    e.parent &&
      (!r || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  ri = function (e, r) {
    if (e && (!r || r._end > e._dur || r._start < 0))
      for (var t = e; t; ) (t._dirty = 1), (t = t.parent);
    return e;
  },
  ou = function (e) {
    for (var r = e.parent; r && r.parent; )
      (r._dirty = 1), r.totalDuration(), (r = r.parent);
    return e;
  },
  Ms = function (e, r, t, i) {
    return (
      e._startAt &&
      (lt
        ? e._startAt.revert(Ln)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(r, !0, i))
    );
  },
  au = function a(e) {
    return !e || (e._ts && a(e.parent));
  },
  Ro = function (e) {
    return e._repeat ? Di(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Di = function (e, r) {
    var t = Math.floor((e = Xe(e / r)));
    return e && t === e ? t - 1 : t;
  },
  jn = function (e, r) {
    return (
      (e - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    );
  },
  os = function (e) {
    return (e._end = Xe(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || xe) || 0)
    ));
  },
  as = function (e, r) {
    var t = e._dp;
    return (
      t &&
        t.smoothChildTiming &&
        e._ts &&
        ((e._start = Xe(
          t._time -
            (e._ts > 0
              ? r / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)
        )),
        os(e),
        t._dirty || ri(t, e)),
      e
    );
  },
  La = function (e, r) {
    var t;
    if (
      ((r._time ||
        (!r._dur && r._initted) ||
        (r._start < e._time && (r._dur || !r.add))) &&
        ((t = jn(e.rawTime(), r)),
        (!r._dur || vn(0, r.totalDuration(), t) - r._tTime > xe) &&
          r.render(t, !0)),
      ri(e, r)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (t = e; t._dp; )
          t.rawTime() >= 0 && t.totalTime(t._tTime), (t = t._dp);
      e._zTime = -xe;
    }
  },
  pr = function (e, r, t, i) {
    return (
      r.parent && Wr(r),
      (r._start = Xe(
        (kr(t) ? t : t || e !== Re ? Gt(e, t, r) : e._time) + r._delay
      )),
      (r._end = Xe(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
      )),
      Ia(e, r, "_first", "_last", e._sort ? "_start" : 0),
      Rs(r) || (e._recent = r),
      i || La(e, r),
      e._ts < 0 && as(e, e._tTime),
      e
    );
  },
  Na = function (e, r) {
    return (
      (Ut.ScrollTrigger || so("scrollTrigger", r)) &&
      Ut.ScrollTrigger.create(r, e)
    );
  },
  Ba = function (e, r, t, i, n) {
    if ((co(e, r, n), !e._initted)) return 1;
    if (
      !t &&
      e._pt &&
      !lt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      Ra !== $t.frame
    )
      return Br.push(e), (e._lazy = [n, i]), 1;
  },
  lu = function a(e) {
    var r = e.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || a(r));
  },
  Rs = function (e) {
    var r = e.data;
    return r === "isFromStart" || r === "isStart";
  },
  uu = function (e, r, t, i) {
    var n = e.ratio,
      s =
        r < 0 ||
        (!r &&
          ((!e._start && lu(e) && !(!e._initted && Rs(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Rs(e))))
          ? 0
          : 1,
      o = e._rDelay,
      l = 0,
      u,
      f,
      d;
    if (
      (o &&
        e._repeat &&
        ((l = vn(0, e._tDur, r)),
        (f = Di(l, o)),
        e._yoyo && f & 1 && (s = 1 - s),
        f !== Di(e._tTime, o) &&
          ((n = 1 - s), e.vars.repeatRefresh && e._initted && e.invalidate())),
      s !== n || lt || i || e._zTime === xe || (!r && e._zTime))
    ) {
      if (!e._initted && Ba(e, r, i, t, l)) return;
      for (
        d = e._zTime,
          e._zTime = r || (t ? xe : 0),
          t || (t = r && !d),
          e.ratio = s,
          e._from && (s = 1 - s),
          e._time = 0,
          e._tTime = l,
          u = e._pt;
        u;

      )
        u.r(s, u.d), (u = u._next);
      r < 0 && Ms(e, r, t, !0),
        e._onUpdate && !t && Xt(e, "onUpdate"),
        l && e._repeat && !t && e.parent && Xt(e, "onRepeat"),
        (r >= e._tDur || r < 0) &&
          e.ratio === s &&
          (s && Wr(e, 1),
          !t &&
            !lt &&
            (Xt(e, s ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = r);
  },
  fu = function (e, r, t) {
    var i;
    if (t > r)
      for (i = e._first; i && i._start <= t; ) {
        if (i.data === "isPause" && i._start > r) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= t; ) {
        if (i.data === "isPause" && i._start < r) return i;
        i = i._prev;
      }
  },
  Ai = function (e, r, t, i) {
    var n = e._repeat,
      s = Xe(r) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !i && (e._time *= s / e._dur),
      (e._dur = s),
      (e._tDur = n ? (n < 0 ? 1e10 : Xe(s * (n + 1) + e._rDelay * n)) : s),
      o > 0 && !i && as(e, (e._tTime = e._tDur * o)),
      e.parent && os(e),
      t || ri(e.parent, e),
      e
    );
  },
  Do = function (e) {
    return e instanceof Ct ? ri(e) : Ai(e, e._dur);
  },
  cu = { _start: 0, endTime: cn, totalDuration: cn },
  Gt = function a(e, r, t) {
    var i = e.labels,
      n = e._recent || cu,
      s = e.duration() >= Qt ? n.endTime(!1) : e._dur,
      o,
      l,
      u;
    return it(r) && (isNaN(r) || r in i)
      ? ((l = r.charAt(0)),
        (u = r.substr(-1) === "%"),
        (o = r.indexOf("=")),
        l === "<" || l === ">"
          ? (o >= 0 && (r = r.replace(/=/, "")),
            (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (u ? (o < 0 ? n : t).totalDuration() / 100 : 1))
          : o < 0
          ? (r in i || (i[r] = s), i[r])
          : ((l = parseFloat(r.charAt(o - 1) + r.substr(o + 1))),
            u && t && (l = (l / 100) * (mt(t) ? t[0] : t).totalDuration()),
            o > 1 ? a(e, r.substr(0, o - 1), t) + l : s + l))
      : r == null
      ? s
      : +r;
  },
  Zi = function (e, r, t) {
    var i = kr(r[1]),
      n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      s = r[n],
      o,
      l;
    if ((i && (s.duration = r[1]), (s.parent = t), e)) {
      for (o = s, l = t; l && !("immediateRender" in o); )
        (o = l.vars.defaults || {}), (l = Et(l.vars.inherit) && l.parent);
      (s.immediateRender = Et(o.immediateRender)),
        e < 2 ? (s.runBackwards = 1) : (s.startAt = r[n - 1]);
    }
    return new We(r[0], s, r[n + 1]);
  },
  Ur = function (e, r) {
    return e || e === 0 ? r(e) : r;
  },
  vn = function (e, r, t) {
    return t < e ? e : t > r ? r : t;
  },
  pt = function (e, r) {
    return !it(e) || !(r = eu.exec(e)) ? "" : r[1];
  },
  hu = function (e, r, t) {
    return Ur(t, function (i) {
      return vn(e, r, i);
    });
  },
  Ds = [].slice,
  Ya = function (e, r) {
    return (
      e &&
      vr(e) &&
      "length" in e &&
      ((!r && !e.length) || (e.length - 1 in e && vr(e[0]))) &&
      !e.nodeType &&
      e !== hr
    );
  },
  du = function (e, r, t) {
    return (
      t === void 0 && (t = []),
      e.forEach(function (i) {
        var n;
        return (it(i) && !r) || Ya(i, 1)
          ? (n = t).push.apply(n, Zt(i))
          : t.push(i);
      }) || t
    );
  },
  Zt = function (e, r, t) {
    return ke && !r && ke.selector
      ? ke.selector(e)
      : it(e) && !t && (Os || !Fi())
      ? Ds.call((r || no).querySelectorAll(e), 0)
      : mt(e)
      ? du(e, t)
      : Ya(e)
      ? Ds.call(e, 0)
      : e
      ? [e]
      : [];
  },
  As = function (e) {
    return (
      (e = Zt(e)[0] || fn("Invalid scope") || {}),
      function (r) {
        var t = e.current || e.nativeElement || e;
        return Zt(
          r,
          t.querySelectorAll
            ? t
            : t === e
            ? fn("Invalid scope") || no.createElement("div")
            : e
        );
      }
    );
  },
  $a = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Wa = function (e) {
    if (ze(e)) return e;
    var r = vr(e) ? e : { each: e },
      t = ii(r.ease),
      i = r.from || 0,
      n = parseFloat(r.base) || 0,
      s = {},
      o = i > 0 && i < 1,
      l = isNaN(i) || o,
      u = r.axis,
      f = i,
      d = i;
    return (
      it(i)
        ? (f = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !o && l && ((f = i[0]), (d = i[1])),
      function (h, c, p) {
        var _ = (p || r).length,
          m = s[_],
          T,
          b,
          C,
          v,
          x,
          P,
          S,
          k,
          O;
        if (!m) {
          if (((O = r.grid === "auto" ? 0 : (r.grid || [1, Qt])[1]), !O)) {
            for (
              S = -Qt;
              S < (S = p[O++].getBoundingClientRect().left) && O < _;

            );
            O < _ && O--;
          }
          for (
            m = s[_] = [],
              T = l ? Math.min(O, _) * f - 0.5 : i % O,
              b = O === Qt ? 0 : l ? (_ * d) / O - 0.5 : (i / O) | 0,
              S = 0,
              k = Qt,
              P = 0;
            P < _;
            P++
          )
            (C = (P % O) - T),
              (v = b - ((P / O) | 0)),
              (m[P] = x = u ? Math.abs(u === "y" ? v : C) : Ta(C * C + v * v)),
              x > S && (S = x),
              x < k && (k = x);
          i === "random" && $a(m),
            (m.max = S - k),
            (m.min = k),
            (m.v = _ =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (O > _
                    ? _ - 1
                    : u
                    ? u === "y"
                      ? _ / O
                      : O
                    : Math.max(O, _ / O)) ||
                0) * (i === "edges" ? -1 : 1)),
            (m.b = _ < 0 ? n - _ : n),
            (m.u = pt(r.amount || r.each) || 0),
            (t = t && _ < 0 ? Za(t) : t);
        }
        return (
          (_ = (m[h] - m.min) / m.max || 0),
          Xe(m.b + (t ? t(_) : _) * m.v) + m.u
        );
      }
    );
  },
  Fs = function (e) {
    var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (t) {
      var i = Xe(Math.round(parseFloat(t) / e) * e * r);
      return (i - (i % 1)) / r + (kr(t) ? 0 : pt(t));
    };
  },
  Xa = function (e, r) {
    var t = mt(e),
      i,
      n;
    return (
      !t &&
        vr(e) &&
        ((i = t = e.radius || Qt),
        e.values
          ? ((e = Zt(e.values)), (n = !kr(e[0])) && (i *= i))
          : (e = Fs(e.increment))),
      Ur(
        r,
        t
          ? ze(e)
            ? function (s) {
                return (n = e(s)), Math.abs(n - s) <= i ? n : s;
              }
            : function (s) {
                for (
                  var o = parseFloat(n ? s.x : s),
                    l = parseFloat(n ? s.y : 0),
                    u = Qt,
                    f = 0,
                    d = e.length,
                    h,
                    c;
                  d--;

                )
                  n
                    ? ((h = e[d].x - o), (c = e[d].y - l), (h = h * h + c * c))
                    : (h = Math.abs(e[d] - o)),
                    h < u && ((u = h), (f = d));
                return (
                  (f = !i || u <= i ? e[f] : s),
                  n || f === s || kr(s) ? f : f + pt(s)
                );
              }
          : Fs(e)
      )
    );
  },
  Va = function (e, r, t, i) {
    return Ur(mt(e) ? !r : t === !0 ? !!(t = 0) : !i, function () {
      return mt(e)
        ? e[~~(Math.random() * e.length)]
        : (t = t || 1e-5) &&
            (i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - t / 2 + Math.random() * (r - e + t * 0.99)) / t) *
                t *
                i
            ) / i;
    });
  },
  _u = function () {
    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
      r[t] = arguments[t];
    return function (i) {
      return r.reduce(function (n, s) {
        return s(n);
      }, i);
    };
  },
  pu = function (e, r) {
    return function (t) {
      return e(parseFloat(t)) + (r || pt(t));
    };
  },
  gu = function (e, r, t) {
    return Ha(e, r, 0, 1, t);
  },
  Ua = function (e, r, t) {
    return Ur(t, function (i) {
      return e[~~r(i)];
    });
  },
  mu = function a(e, r, t) {
    var i = r - e;
    return mt(e)
      ? Ua(e, a(0, e.length), r)
      : Ur(t, function (n) {
          return ((i + ((n - e) % i)) % i) + e;
        });
  },
  yu = function a(e, r, t) {
    var i = r - e,
      n = i * 2;
    return mt(e)
      ? Ua(e, a(0, e.length - 1), r)
      : Ur(t, function (s) {
          return (s = (n + ((s - e) % n)) % n || 0), e + (s > i ? n - s : s);
        });
  },
  hn = function (e) {
    for (var r = 0, t = "", i, n, s, o; ~(i = e.indexOf("random(", r)); )
      (s = e.indexOf(")", i)),
        (o = e.charAt(i + 7) === "["),
        (n = e.substr(i + 7, s - i - 7).match(o ? ka : ks)),
        (t +=
          e.substr(r, i - r) + Va(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
        (r = s + 1);
    return t + e.substr(r, e.length - r);
  },
  Ha = function (e, r, t, i, n) {
    var s = r - e,
      o = i - t;
    return Ur(n, function (l) {
      return t + (((l - e) / s) * o || 0);
    });
  },
  vu = function a(e, r, t, i) {
    var n = isNaN(e + r)
      ? 0
      : function (c) {
          return (1 - c) * e + c * r;
        };
    if (!n) {
      var s = it(e),
        o = {},
        l,
        u,
        f,
        d,
        h;
      if ((t === !0 && (i = 1) && (t = null), s))
        (e = { p: e }), (r = { p: r });
      else if (mt(e) && !mt(r)) {
        for (f = [], d = e.length, h = d - 2, u = 1; u < d; u++)
          f.push(a(e[u - 1], e[u]));
        d--,
          (n = function (p) {
            p *= d;
            var _ = Math.min(h, ~~p);
            return f[_](p - _);
          }),
          (t = r);
      } else i || (e = Ri(mt(e) ? [] : {}, e));
      if (!f) {
        for (l in r) fo.call(o, e, l, "get", r[l]);
        n = function (p) {
          return po(p, o) || (s ? e.p : e);
        };
      }
    }
    return Ur(t, n);
  },
  Ao = function (e, r, t) {
    var i = e.labels,
      n = Qt,
      s,
      o,
      l;
    for (s in i)
      (o = i[s] - r),
        o < 0 == !!t && o && n > (o = Math.abs(o)) && ((l = s), (n = o));
    return l;
  },
  Xt = function (e, r, t) {
    var i = e.vars,
      n = i[r],
      s = ke,
      o = e._ctx,
      l,
      u,
      f;
    if (n)
      return (
        (l = i[r + "Params"]),
        (u = i.callbackScope || e),
        t && Br.length && qn(),
        o && (ke = o),
        (f = l ? n.apply(u, l) : n.call(u)),
        (ke = s),
        f
      );
  },
  Xi = function (e) {
    return (
      Wr(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!lt),
      e.progress() < 1 && Xt(e, "onInterrupt"),
      e
    );
  },
  bi,
  qa = [],
  Ga = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), io() || e.headless)) {
        var r = e.name,
          t = ze(e),
          i =
            r && !t && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          n = {
            init: cn,
            render: po,
            add: fo,
            kill: zu,
            modifier: Fu,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: _o,
            aliases: {},
            register: 0,
          };
        if ((Fi(), e !== i)) {
          if (Bt[r]) return;
          Ht(i, Ht(Gn(e, n), s)),
            Ri(i.prototype, Ri(n, Gn(e, s))),
            (Bt[(i.prop = r)] = i),
            e.targetTest && (Nn.push(i), (oo[r] = 1)),
            (r =
              (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) +
              "Plugin");
        }
        Ma(r, i), e.register && e.register(At, i, Rt);
      } else qa.push(e);
  },
  ve = 255,
  Vi = {
    aqua: [0, ve, ve],
    lime: [0, ve, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ve],
    navy: [0, 0, 128],
    white: [ve, ve, ve],
    olive: [128, 128, 0],
    yellow: [ve, ve, 0],
    orange: [ve, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ve, 0, 0],
    pink: [ve, 192, 203],
    cyan: [0, ve, ve],
    transparent: [ve, ve, ve, 0],
  },
  hs = function (e, r, t) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? r + (t - r) * e * 6
        : e < 0.5
        ? t
        : e * 3 < 2
        ? r + (t - r) * (2 / 3 - e) * 6
        : r) *
        ve +
        0.5) |
        0
    );
  },
  ja = function (e, r, t) {
    var i = e ? (kr(e) ? [e >> 16, (e >> 8) & ve, e & ve] : 0) : Vi.black,
      n,
      s,
      o,
      l,
      u,
      f,
      d,
      h,
      c,
      p;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Vi[e]))
        i = Vi[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((n = e.charAt(1)),
            (s = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              "#" +
              n +
              n +
              s +
              s +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & ve, i & ve, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & ve, e & ve]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = p = e.match(ks)), !r))
          (l = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (f = +i[2] / 100),
            (s = f <= 0.5 ? f * (u + 1) : f + u - f * u),
            (n = f * 2 - s),
            i.length > 3 && (i[3] *= 1),
            (i[0] = hs(l + 1 / 3, n, s)),
            (i[1] = hs(l, n, s)),
            (i[2] = hs(l - 1 / 3, n, s));
        else if (~e.indexOf("="))
          return (i = e.match(Ca)), t && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(ks) || Vi.transparent;
      i = i.map(Number);
    }
    return (
      r &&
        !p &&
        ((n = i[0] / ve),
        (s = i[1] / ve),
        (o = i[2] / ve),
        (d = Math.max(n, s, o)),
        (h = Math.min(n, s, o)),
        (f = (d + h) / 2),
        d === h
          ? (l = u = 0)
          : ((c = d - h),
            (u = f > 0.5 ? c / (2 - d - h) : c / (d + h)),
            (l =
              d === n
                ? (s - o) / c + (s < o ? 6 : 0)
                : d === s
                ? (o - n) / c + 2
                : (n - s) / c + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(f * 100 + 0.5))),
      t && i.length < 4 && (i[3] = 1),
      i
    );
  },
  Ka = function (e) {
    var r = [],
      t = [],
      i = -1;
    return (
      e.split(Yr).forEach(function (n) {
        var s = n.match(wi) || [];
        r.push.apply(r, s), t.push((i += s.length + 1));
      }),
      (r.c = t),
      r
    );
  },
  Fo = function (e, r, t) {
    var i = "",
      n = (e + i).match(Yr),
      s = r ? "hsla(" : "rgba(",
      o = 0,
      l,
      u,
      f,
      d;
    if (!n) return e;
    if (
      ((n = n.map(function (h) {
        return (
          (h = ja(h, r, 1)) &&
          s +
            (r ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) +
            ")"
        );
      })),
      t && ((f = Ka(e)), (l = t.c), l.join(i) !== f.c.join(i)))
    )
      for (u = e.replace(Yr, "1").split(wi), d = u.length - 1; o < d; o++)
        i +=
          u[o] +
          (~l.indexOf(o)
            ? n.shift() || s + "0,0,0,0)"
            : (f.length ? f : n.length ? n : t).shift());
    if (!u)
      for (u = e.split(Yr), d = u.length - 1; o < d; o++) i += u[o] + n[o];
    return i + u[d];
  },
  Yr = (function () {
    var a =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in Vi) a += "|" + e + "\\b";
    return new RegExp(a + ")", "gi");
  })(),
  xu = /hsl[a]?\(/,
  Qa = function (e) {
    var r = e.join(" "),
      t;
    if (((Yr.lastIndex = 0), Yr.test(r)))
      return (
        (t = xu.test(r)),
        (e[1] = Fo(e[1], t)),
        (e[0] = Fo(e[0], t, Ka(e[1]))),
        !0
      );
  },
  dn,
  $t = (function () {
    var a = Date.now,
      e = 500,
      r = 33,
      t = a(),
      i = t,
      n = 1e3 / 240,
      s = n,
      o = [],
      l,
      u,
      f,
      d,
      h,
      c,
      p = function _(m) {
        var T = a() - i,
          b = m === !0,
          C,
          v,
          x,
          P;
        if (
          ((T > e || T < 0) && (t += T - r),
          (i += T),
          (x = i - t),
          (C = x - s),
          (C > 0 || b) &&
            ((P = ++d.frame),
            (h = x - d.time * 1e3),
            (d.time = x = x / 1e3),
            (s += C + (C >= n ? 4 : n - C)),
            (v = 1)),
          b || (l = u(_)),
          v)
        )
          for (c = 0; c < o.length; c++) o[c](x, h, P, m);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (m) {
          return h / (1e3 / (m || 60));
        },
        wake: function () {
          Oa &&
            (!Os &&
              io() &&
              ((hr = Os = window),
              (no = hr.document || {}),
              (Ut.gsap = At),
              (hr.gsapVersions || (hr.gsapVersions = [])).push(At.version),
              Ea(Hn || hr.GreenSockGlobals || (!hr.gsap && hr) || {}),
              qa.forEach(Ga)),
            (f = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && d.sleep(),
            (u =
              f ||
              function (m) {
                return setTimeout(m, (s - d.time * 1e3 + 1) | 0);
              }),
            (dn = 1),
            p(2));
        },
        sleep: function () {
          (f ? cancelAnimationFrame : clearTimeout)(l), (dn = 0), (u = cn);
        },
        lagSmoothing: function (m, T) {
          (e = m || 1 / 0), (r = Math.min(T || 33, e));
        },
        fps: function (m) {
          (n = 1e3 / (m || 240)), (s = d.time * 1e3 + n);
        },
        add: function (m, T, b) {
          var C = T
            ? function (v, x, P, S) {
                m(v, x, P, S), d.remove(C);
              }
            : m;
          return d.remove(m), o[b ? "unshift" : "push"](C), Fi(), C;
        },
        remove: function (m, T) {
          ~(T = o.indexOf(m)) && o.splice(T, 1) && c >= T && c--;
        },
        _listeners: o,
      }),
      d
    );
  })(),
  Fi = function () {
    return !dn && $t.wake();
  },
  fe = {},
  wu = /^[\d.\-M][\d.\-,\s]/,
  bu = /["']/g,
  Tu = function (e) {
    for (
      var r = {},
        t = e.substr(1, e.length - 3).split(":"),
        i = t[0],
        n = 1,
        s = t.length,
        o,
        l,
        u;
      n < s;
      n++
    )
      (l = t[n]),
        (o = n !== s - 1 ? l.lastIndexOf(",") : l.length),
        (u = l.substr(0, o)),
        (r[i] = isNaN(u) ? u.replace(bu, "").trim() : +u),
        (i = l.substr(o + 1).trim());
    return r;
  },
  Su = function (e) {
    var r = e.indexOf("(") + 1,
      t = e.indexOf(")"),
      i = e.indexOf("(", r);
    return e.substring(r, ~i && i < t ? e.indexOf(")", t + 1) : t);
  },
  Cu = function (e) {
    var r = (e + "").split("("),
      t = fe[r[0]];
    return t && r.length > 1 && t.config
      ? t.config.apply(
          null,
          ~e.indexOf("{") ? [Tu(r[1])] : Su(e).split(",").map(Fa)
        )
      : fe._CE && wu.test(e)
      ? fe._CE("", e)
      : t;
  },
  Za = function (e) {
    return function (r) {
      return 1 - e(1 - r);
    };
  },
  Ja = function a(e, r) {
    for (var t = e._first, i; t; )
      t instanceof Ct
        ? a(t, r)
        : t.vars.yoyoEase &&
          (!t._yoyo || !t._repeat) &&
          t._yoyo !== r &&
          (t.timeline
            ? a(t.timeline, r)
            : ((i = t._ease),
              (t._ease = t._yEase),
              (t._yEase = i),
              (t._yoyo = r))),
        (t = t._next);
  },
  ii = function (e, r) {
    return (e && (ze(e) ? e : fe[e] || Cu(e))) || r;
  },
  di = function (e, r, t, i) {
    t === void 0 &&
      (t = function (l) {
        return 1 - r(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? r(l * 2) / 2 : 1 - r((1 - l) * 2) / 2;
        });
    var n = { easeIn: r, easeOut: t, easeInOut: i },
      s;
    return (
      Mt(e, function (o) {
        (fe[o] = Ut[o] = n), (fe[(s = o.toLowerCase())] = t);
        for (var l in n)
          fe[
            s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = fe[o + "." + l] = n[l];
      }),
      n
    );
  },
  el = function (e) {
    return function (r) {
      return r < 0.5 ? (1 - e(1 - r * 2)) / 2 : 0.5 + e((r - 0.5) * 2) / 2;
    };
  },
  ds = function a(e, r, t) {
    var i = r >= 1 ? r : 1,
      n = (t || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      s = (n / Ps) * (Math.asin(1 / i) || 0),
      o = function (f) {
        return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Jl((f - s) * n) + 1;
      },
      l =
        e === "out"
          ? o
          : e === "in"
          ? function (u) {
              return 1 - o(1 - u);
            }
          : el(o);
    return (
      (n = Ps / n),
      (l.config = function (u, f) {
        return a(e, u, f);
      }),
      l
    );
  },
  _s = function a(e, r) {
    r === void 0 && (r = 1.70158);
    var t = function (s) {
        return s ? --s * s * ((r + 1) * s + r) + 1 : 0;
      },
      i =
        e === "out"
          ? t
          : e === "in"
          ? function (n) {
              return 1 - t(1 - n);
            }
          : el(t);
    return (
      (i.config = function (n) {
        return a(e, n);
      }),
      i
    );
  };
Mt("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, e) {
  var r = e < 5 ? e + 1 : e;
  di(
    a + ",Power" + (r - 1),
    e
      ? function (t) {
          return Math.pow(t, r);
        }
      : function (t) {
          return t;
        },
    function (t) {
      return 1 - Math.pow(1 - t, r);
    },
    function (t) {
      return t < 0.5
        ? Math.pow(t * 2, r) / 2
        : 1 - Math.pow((1 - t) * 2, r) / 2;
    }
  );
});
fe.Linear.easeNone = fe.none = fe.Linear.easeIn;
di("Elastic", ds("in"), ds("out"), ds());
(function (a, e) {
  var r = 1 / e,
    t = 2 * r,
    i = 2.5 * r,
    n = function (o) {
      return o < r
        ? a * o * o
        : o < t
        ? a * Math.pow(o - 1.5 / e, 2) + 0.75
        : o < i
        ? a * (o -= 2.25 / e) * o + 0.9375
        : a * Math.pow(o - 2.625 / e, 2) + 0.984375;
    };
  di(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n
  );
})(7.5625, 2.75);
di("Expo", function (a) {
  return Math.pow(2, 10 * (a - 1)) * a + a * a * a * a * a * a * (1 - a);
});
di("Circ", function (a) {
  return -(Ta(1 - a * a) - 1);
});
di("Sine", function (a) {
  return a === 1 ? 1 : -Zl(a * Kl) + 1;
});
di("Back", _s("in"), _s("out"), _s());
fe.SteppedEase =
  fe.steps =
  Ut.SteppedEase =
    {
      config: function (e, r) {
        e === void 0 && (e = 1);
        var t = 1 / e,
          i = e + (r ? 0 : 1),
          n = r ? 1 : 0,
          s = 1 - xe;
        return function (o) {
          return (((i * vn(0, s, o)) | 0) + n) * t;
        };
      },
    };
Mi.ease = fe["quad.out"];
Mt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (a) {
    return (ao += a + "," + a + "Params,");
  }
);
var tl = function (e, r) {
    (this.id = Ql++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = r),
      (this.get = r ? r.get : Da),
      (this.set = r ? r.getSetter : _o);
  },
  _n = (function () {
    function a(r) {
      (this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        Ai(this, +r.duration, 1, 1),
        (this.data = r.data),
        ke && ((this._ctx = ke), ke.data.push(this)),
        dn || $t.wake();
    }
    var e = a.prototype;
    return (
      (e.delay = function (t) {
        return t || t === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (e.duration = function (t) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
            Ai(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (t, i) {
        if ((Fi(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (as(this, t), !n._dp || n.parent || La(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && t < this._tDur) ||
              (this._ts < 0 && t > 0) ||
              (!this._tDur && !t)) &&
            pr(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === xe) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), Aa(this, t, i)),
          this
        );
      }),
      (e.time = function (t, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Ro(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (t, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (e.progress = function (t, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) +
                Ro(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.iteration = function (t, i) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * n, i)
          : this._repeat
          ? Di(this._tTime, n) + 1
          : 1;
      }),
      (e.timeScale = function (t, i) {
        if (!arguments.length) return this._rts === -xe ? 0 : this._rts;
        if (this._rts === t) return this;
        var n =
          this.parent && this._ts ? jn(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -xe ? 0 : this._rts),
          this.totalTime(
            vn(-Math.abs(this._delay), this.totalDuration(), n),
            i !== !1
          ),
          os(this),
          ou(this)
        );
      }),
      (e.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t),
              t
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Fi(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== xe &&
                      (this._tTime -= xe)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && pr(i, this, t - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (t) {
        return (
          this._start +
          (Et(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (t) {
        var i = this.parent || this._dp;
        return i
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? jn(i.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (t) {
        t === void 0 && (t = ru);
        var i = lt;
        return (
          (lt = t),
          uo(this) &&
            (this.timeline && this.timeline.revert(t),
            this.totalTime(-0.01, t.suppressEvents)),
          this.data !== "nested" && t.kill !== !1 && this.kill(),
          (lt = i),
          this
        );
      }),
      (e.globalTime = function (t) {
        for (var i = this, n = arguments.length ? t : i.rawTime(); i; )
          (n = i._start + n / (Math.abs(i._ts) || 1)), (i = i._dp);
        return !this.parent && this._sat ? this._sat.globalTime(t) : n;
      }),
      (e.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), Do(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (t) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = t), Do(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (e.seek = function (t, i) {
        return this.totalTime(Gt(this, t), Et(i));
      }),
      (e.restart = function (t, i) {
        return (
          this.play().totalTime(t ? -this._delay : 0, Et(i)),
          this._dur || (this._zTime = -xe),
          this
        );
      }),
      (e.play = function (t, i) {
        return t != null && this.seek(t, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (t, i) {
        return (
          t != null && this.seek(t || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (t, i) {
        return t != null && this.seek(t, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -xe : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -xe), this;
      }),
      (e.isActive = function () {
        var t = this.parent || this._dp,
          i = this._start,
          n;
        return !!(
          !t ||
          (this._ts &&
            this._initted &&
            t.isActive() &&
            (n = t.rawTime(!0)) >= i &&
            n < this.endTime(!0) - xe)
        );
      }),
      (e.eventCallback = function (t, i, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (i
              ? ((s[t] = i),
                n && (s[t + "Params"] = n),
                t === "onUpdate" && (this._onUpdate = i))
              : delete s[t],
            this)
          : s[t];
      }),
      (e.then = function (t) {
        var i = this;
        return new Promise(function (n) {
          var s = ze(t) ? t : za,
            o = function () {
              var u = i.then;
              (i.then = null),
                ze(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
                n(s),
                (i.then = u);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? o()
            : (i._prom = o);
        });
      }),
      (e.kill = function () {
        Xi(this);
      }),
      a
    );
  })();
Ht(_n.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -xe,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Ct = (function (a) {
  ba(e, a);
  function e(t, i) {
    var n;
    return (
      t === void 0 && (t = {}),
      (n = a.call(this, t) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!t.smoothChildTiming),
      (n.autoRemoveChildren = !!t.autoRemoveChildren),
      (n._sort = Et(t.sortChildren)),
      Re && pr(t.parent || Re, br(n), i),
      t.reversed && n.reverse(),
      t.paused && n.paused(!0),
      t.scrollTrigger && Na(br(n), t.scrollTrigger),
      n
    );
  }
  var r = e.prototype;
  return (
    (r.to = function (i, n, s) {
      return Zi(0, arguments, this), this;
    }),
    (r.from = function (i, n, s) {
      return Zi(1, arguments, this), this;
    }),
    (r.fromTo = function (i, n, s, o) {
      return Zi(2, arguments, this), this;
    }),
    (r.set = function (i, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        Qi(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new We(i, n, Gt(this, s), 1),
        this
      );
    }),
    (r.call = function (i, n, s) {
      return pr(this, We.delayedCall(0, i, n), s);
    }),
    (r.staggerTo = function (i, n, s, o, l, u, f) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || o),
        (s.onComplete = u),
        (s.onCompleteParams = f),
        (s.parent = this),
        new We(i, s, Gt(this, l)),
        this
      );
    }),
    (r.staggerFrom = function (i, n, s, o, l, u, f) {
      return (
        (s.runBackwards = 1),
        (Qi(s).immediateRender = Et(s.immediateRender)),
        this.staggerTo(i, n, s, o, l, u, f)
      );
    }),
    (r.staggerFromTo = function (i, n, s, o, l, u, f, d) {
      return (
        (o.startAt = s),
        (Qi(o).immediateRender = Et(o.immediateRender)),
        this.staggerTo(i, n, o, l, u, f, d)
      );
    }),
    (r.render = function (i, n, s) {
      var o = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        f = i <= 0 ? 0 : Xe(i),
        d = this._zTime < 0 != i < 0 && (this._initted || !u),
        h,
        c,
        p,
        _,
        m,
        T,
        b,
        C,
        v,
        x,
        P,
        S;
      if (
        (this !== Re && f > l && i >= 0 && (f = l), f !== this._tTime || s || d)
      ) {
        if (
          (o !== this._time &&
            u &&
            ((f += this._time - o), (i += this._time - o)),
          (h = f),
          (v = this._start),
          (C = this._ts),
          (T = !C),
          d && (u || (o = this._zTime), (i || !n) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((P = this._yoyo),
            (m = u + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(m * 100 + i, n, s);
          if (
            ((h = Xe(f % m)),
            f === l
              ? ((_ = this._repeat), (h = u))
              : ((x = Xe(f / m)),
                (_ = ~~x),
                _ && _ === x && ((h = u), _--),
                h > u && (h = u)),
            (x = Di(this._tTime, m)),
            !o &&
              this._tTime &&
              x !== _ &&
              this._tTime - x * m - this._dur <= 0 &&
              (x = _),
            P && _ & 1 && ((h = u - h), (S = 1)),
            _ !== x && !this._lock)
          ) {
            var k = P && x & 1,
              O = k === (P && _ & 1);
            if (
              (_ < x && (k = !k),
              (o = k ? 0 : f % u ? u : f),
              (this._lock = 1),
              (this.render(o || (S ? 0 : Xe(_ * m)), n, !u)._lock = 0),
              (this._tTime = f),
              !n && this.parent && Xt(this, "onRepeat"),
              this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
              (o && o !== this._time) ||
                T !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (l = this._tDur),
              O &&
                ((this._lock = 2),
                (o = k ? u : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !S && this.invalidate()),
              (this._lock = 0),
              !this._ts && !T)
            )
              return this;
            Ja(this, S);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((b = fu(this, Xe(o), Xe(h))), b && (f -= h - (h = b._start))),
          (this._tTime = f),
          (this._time = h),
          (this._act = !C),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (o = 0)),
          !o && f && !n && !x && (Xt(this, "onStart"), this._tTime !== f))
        )
          return this;
        if (h >= o && i >= 0)
          for (c = this._first; c; ) {
            if (
              ((p = c._next), (c._act || h >= c._start) && c._ts && b !== c)
            ) {
              if (c.parent !== this) return this.render(i, n, s);
              if (
                (c.render(
                  c._ts > 0
                    ? (h - c._start) * c._ts
                    : (c._dirty ? c.totalDuration() : c._tDur) +
                        (h - c._start) * c._ts,
                  n,
                  s
                ),
                h !== this._time || (!this._ts && !T))
              ) {
                (b = 0), p && (f += this._zTime = -xe);
                break;
              }
            }
            c = p;
          }
        else {
          c = this._last;
          for (var M = i < 0 ? i : h; c; ) {
            if (((p = c._prev), (c._act || M <= c._end) && c._ts && b !== c)) {
              if (c.parent !== this) return this.render(i, n, s);
              if (
                (c.render(
                  c._ts > 0
                    ? (M - c._start) * c._ts
                    : (c._dirty ? c.totalDuration() : c._tDur) +
                        (M - c._start) * c._ts,
                  n,
                  s || (lt && uo(c))
                ),
                h !== this._time || (!this._ts && !T))
              ) {
                (b = 0), p && (f += this._zTime = M ? -xe : xe);
                break;
              }
            }
            c = p;
          }
        }
        if (
          b &&
          !n &&
          (this.pause(),
          (b.render(h >= o ? 0 : -xe)._zTime = h >= o ? 1 : -1),
          this._ts)
        )
          return (this._start = v), os(this), this.render(i, n, s);
        this._onUpdate && !n && Xt(this, "onUpdate", !0),
          ((f === l && this._tTime >= this.totalDuration()) || (!f && o)) &&
            (v === this._start || Math.abs(C) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !u) &&
                ((f === l && this._ts > 0) || (!f && this._ts < 0)) &&
                Wr(this, 1),
              !n &&
                !(i < 0 && !o) &&
                (f || o || !l) &&
                (Xt(
                  this,
                  f === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(f < l && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (r.add = function (i, n) {
      var s = this;
      if ((kr(n) || (n = Gt(this, n, i)), !(i instanceof _n))) {
        if (mt(i))
          return (
            i.forEach(function (o) {
              return s.add(o, n);
            }),
            this
          );
        if (it(i)) return this.addLabel(i, n);
        if (ze(i)) i = We.delayedCall(0, i);
        else return this;
      }
      return this !== i ? pr(this, i, n) : this;
    }),
    (r.getChildren = function (i, n, s, o) {
      i === void 0 && (i = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        o === void 0 && (o = -Qt);
      for (var l = [], u = this._first; u; )
        u._start >= o &&
          (u instanceof We
            ? n && l.push(u)
            : (s && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, s)))),
          (u = u._next);
      return l;
    }),
    (r.getById = function (i) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === i) return n[s];
    }),
    (r.remove = function (i) {
      return it(i)
        ? this.removeLabel(i)
        : ze(i)
        ? this.killTweensOf(i)
        : (i.parent === this && ss(this, i),
          i === this._recent && (this._recent = this._last),
          ri(this));
    }),
    (r.totalTime = function (i, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Xe(
              $t.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          a.prototype.totalTime.call(this, i, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (i, n) {
      return (this.labels[i] = Gt(this, n)), this;
    }),
    (r.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (r.addPause = function (i, n, s) {
      var o = We.delayedCall(0, n || cn, s);
      return (
        (o.data = "isPause"), (this._hasPause = 1), pr(this, o, Gt(this, i))
      );
    }),
    (r.removePause = function (i) {
      var n = this._first;
      for (i = Gt(this, i); n; )
        n._start === i && n.data === "isPause" && Wr(n), (n = n._next);
    }),
    (r.killTweensOf = function (i, n, s) {
      for (var o = this.getTweensOf(i, s), l = o.length; l--; )
        Fr !== o[l] && o[l].kill(i, n);
      return this;
    }),
    (r.getTweensOf = function (i, n) {
      for (var s = [], o = Zt(i), l = this._first, u = kr(n), f; l; )
        l instanceof We
          ? iu(l._targets, o) &&
            (u
              ? (!Fr || (l._initted && l._ts)) &&
                l.globalTime(0) <= n &&
                l.globalTime(l.totalDuration()) > n
              : !n || l.isActive()) &&
            s.push(l)
          : (f = l.getTweensOf(o, n)).length && s.push.apply(s, f),
          (l = l._next);
      return s;
    }),
    (r.tweenTo = function (i, n) {
      n = n || {};
      var s = this,
        o = Gt(s, i),
        l = n,
        u = l.startAt,
        f = l.onStart,
        d = l.onStartParams,
        h = l.immediateRender,
        c,
        p = We.to(
          s,
          Ht(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (o - (u && "time" in u ? u.time : s._time)) / s.timeScale()
                ) ||
                xe,
              onStart: function () {
                if ((s.pause(), !c)) {
                  var m =
                    n.duration ||
                    Math.abs(
                      (o - (u && "time" in u ? u.time : s._time)) /
                        s.timeScale()
                    );
                  p._dur !== m && Ai(p, m, 0, 1).render(p._time, !0, !0),
                    (c = 1);
                }
                f && f.apply(p, d || []);
              },
            },
            n
          )
        );
      return h ? p.render(0) : p;
    }),
    (r.tweenFromTo = function (i, n, s) {
      return this.tweenTo(n, Ht({ startAt: { time: Gt(this, i) } }, s));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (i) {
      return i === void 0 && (i = this._time), Ao(this, Gt(this, i));
    }),
    (r.previousLabel = function (i) {
      return i === void 0 && (i = this._time), Ao(this, Gt(this, i), 1);
    }),
    (r.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + xe);
    }),
    (r.shiftChildren = function (i, n, s) {
      s === void 0 && (s = 0);
      for (var o = this._first, l = this.labels, u; o; )
        o._start >= s && ((o._start += i), (o._end += i)), (o = o._next);
      if (n) for (u in l) l[u] >= s && (l[u] += i);
      return ri(this);
    }),
    (r.invalidate = function (i) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(i), (n = n._next);
      return a.prototype.invalidate.call(this, i);
    }),
    (r.clear = function (i) {
      i === void 0 && (i = !0);
      for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        ri(this)
      );
    }),
    (r.totalDuration = function (i) {
      var n = 0,
        s = this,
        o = s._last,
        l = Qt,
        u,
        f,
        d;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -i : i)
        );
      if (s._dirty) {
        for (d = s.parent; o; )
          (u = o._prev),
            o._dirty && o.totalDuration(),
            (f = o._start),
            f > l && s._sort && o._ts && !s._lock
              ? ((s._lock = 1), (pr(s, o, f - o._delay, 1)._lock = 0))
              : (l = f),
            f < 0 &&
              o._ts &&
              ((n -= f),
              ((!d && !s._dp) || (d && d.smoothChildTiming)) &&
                ((s._start += f / s._ts), (s._time -= f), (s._tTime -= f)),
              s.shiftChildren(-f, !1, -1 / 0),
              (l = 0)),
            o._end > n && o._ts && (n = o._end),
            (o = u);
        Ai(s, s === Re && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((Re._ts && (Aa(Re, jn(i, Re)), (Ra = $t.frame)), $t.frame >= Eo)) {
        Eo += Vt.autoSleep || 120;
        var n = Re._first;
        if ((!n || !n._ts) && Vt.autoSleep && $t._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || $t.sleep();
        }
      }
    }),
    e
  );
})(_n);
Ht(Ct.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Pu = function (e, r, t, i, n, s, o) {
    var l = new Rt(this._pt, e, r, 0, 1, al, null, n),
      u = 0,
      f = 0,
      d,
      h,
      c,
      p,
      _,
      m,
      T,
      b;
    for (
      l.b = t,
        l.e = i,
        t += "",
        i += "",
        (T = ~i.indexOf("random(")) && (i = hn(i)),
        s && ((b = [t, i]), s(b, e, r), (t = b[0]), (i = b[1])),
        h = t.match(fs) || [];
      (d = fs.exec(i));

    )
      (p = d[0]),
        (_ = i.substring(u, d.index)),
        c ? (c = (c + 1) % 5) : _.substr(-5) === "rgba(" && (c = 1),
        p !== h[f++] &&
          ((m = parseFloat(h[f - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: _ || f === 1 ? _ : ",",
            s: m,
            c: p.charAt(1) === "=" ? Si(m, p) - m : parseFloat(p) - m,
            m: c && c < 4 ? Math.round : 0,
          }),
          (u = fs.lastIndex));
    return (
      (l.c = u < i.length ? i.substring(u, i.length) : ""),
      (l.fp = o),
      (Pa.test(i) || T) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  fo = function (e, r, t, i, n, s, o, l, u, f) {
    ze(i) && (i = i(n || 0, e, s));
    var d = e[r],
      h =
        t !== "get"
          ? t
          : ze(d)
          ? u
            ? e[
                r.indexOf("set") || !ze(e["get" + r.substr(3)])
                  ? r
                  : "get" + r.substr(3)
              ](u)
            : e[r]()
          : d,
      c = ze(d) ? (u ? Ru : sl) : ho,
      p;
    if (
      (it(i) &&
        (~i.indexOf("random(") && (i = hn(i)),
        i.charAt(1) === "=" &&
          ((p = Si(h, i) + (pt(h) || 0)), (p || p === 0) && (i = p))),
      !f || h !== i || zs)
    )
      return !isNaN(h * i) && i !== ""
        ? ((p = new Rt(
            this._pt,
            e,
            r,
            +h || 0,
            i - (h || 0),
            typeof d == "boolean" ? Au : ol,
            0,
            c
          )),
          u && (p.fp = u),
          o && p.modifier(o, this, e),
          (this._pt = p))
        : (!d && !(r in e) && so(r, i),
          Pu.call(this, e, r, h, i, c, l || Vt.stringFilter, u));
  },
  ku = function (e, r, t, i, n) {
    if (
      (ze(e) && (e = Ji(e, n, r, t, i)),
      !vr(e) || (e.style && e.nodeType) || mt(e) || Sa(e))
    )
      return it(e) ? Ji(e, n, r, t, i) : e;
    var s = {},
      o;
    for (o in e) s[o] = Ji(e[o], n, r, t, i);
    return s;
  },
  rl = function (e, r, t, i, n, s) {
    var o, l, u, f;
    if (
      Bt[e] &&
      (o = new Bt[e]()).init(
        n,
        o.rawVars ? r[e] : ku(r[e], i, n, s, t),
        t,
        i,
        s
      ) !== !1 &&
      ((t._pt = l = new Rt(t._pt, n, e, 0, 1, o.render, o, 0, o.priority)),
      t !== bi)
    )
      for (u = t._ptLookup[t._targets.indexOf(n)], f = o._props.length; f--; )
        u[o._props[f]] = l;
    return o;
  },
  Fr,
  zs,
  co = function a(e, r, t) {
    var i = e.vars,
      n = i.ease,
      s = i.startAt,
      o = i.immediateRender,
      l = i.lazy,
      u = i.onUpdate,
      f = i.runBackwards,
      d = i.yoyoEase,
      h = i.keyframes,
      c = i.autoRevert,
      p = e._dur,
      _ = e._startAt,
      m = e._targets,
      T = e.parent,
      b = T && T.data === "nested" ? T.vars.targets : m,
      C = e._overwrite === "auto" && !to,
      v = e.timeline,
      x,
      P,
      S,
      k,
      O,
      M,
      Y,
      E,
      F,
      I,
      U,
      $,
      L;
    if (
      (v && (!h || !n) && (n = "none"),
      (e._ease = ii(n, Mi.ease)),
      (e._yEase = d ? Za(ii(d === !0 ? n : d, Mi.ease)) : 0),
      d &&
        e._yoyo &&
        !e._repeat &&
        ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
      (e._from = !v && !!i.runBackwards),
      !v || (h && !i.stagger))
    ) {
      if (
        ((E = m[0] ? ti(m[0]).harness : 0),
        ($ = E && i[E.prop]),
        (x = Gn(i, oo)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          r < 0 && f && o && !c ? _.render(-1, !0) : _.revert(f && p ? Ln : tu),
          (_._lazy = 0)),
        s)
      ) {
        if (
          (Wr(
            (e._startAt = We.set(
              m,
              Ht(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: T,
                  immediateRender: !0,
                  lazy: !_ && Et(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return Xt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                s
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          r < 0 && (lt || (!o && !c)) && e._startAt.revert(Ln),
          o && p && r <= 0 && t <= 0)
        ) {
          r && (e._zTime = r);
          return;
        }
      } else if (f && p && !_) {
        if (
          (r && (o = !1),
          (S = Ht(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !_ && Et(l),
              immediateRender: o,
              stagger: 0,
              parent: T,
            },
            x
          )),
          $ && (S[E.prop] = $),
          Wr((e._startAt = We.set(m, S))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          r < 0 && (lt ? e._startAt.revert(Ln) : e._startAt.render(-1, !0)),
          (e._zTime = r),
          !o)
        )
          a(e._startAt, xe, xe);
        else if (!r) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (p && Et(l)) || (l && !p), P = 0;
        P < m.length;
        P++
      ) {
        if (
          ((O = m[P]),
          (Y = O._gsap || lo(m)[P]._gsap),
          (e._ptLookup[P] = I = {}),
          Es[Y.id] && Br.length && qn(),
          (U = b === m ? P : b.indexOf(O)),
          E &&
            (F = new E()).init(O, $ || x, e, U, b) !== !1 &&
            ((e._pt = k =
              new Rt(e._pt, O, F.name, 0, 1, F.render, F, 0, F.priority)),
            F._props.forEach(function (j) {
              I[j] = k;
            }),
            F.priority && (M = 1)),
          !E || $)
        )
          for (S in x)
            Bt[S] && (F = rl(S, x, e, U, O, b))
              ? F.priority && (M = 1)
              : (I[S] = k =
                  fo.call(e, O, S, "get", x[S], U, b, 0, i.stringFilter));
        e._op && e._op[P] && e.kill(O, e._op[P]),
          C &&
            e._pt &&
            ((Fr = e),
            Re.killTweensOf(O, I, e.globalTime(r)),
            (L = !e.parent),
            (Fr = 0)),
          e._pt && l && (Es[Y.id] = 1);
      }
      M && ll(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !L),
      h && r <= 0 && v.render(Qt, !0, !0);
  },
  Ou = function (e, r, t, i, n, s, o, l) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[r],
      f,
      d,
      h,
      c;
    if (!u)
      for (
        u = e._ptCache[r] = [], h = e._ptLookup, c = e._targets.length;
        c--;

      ) {
        if (((f = h[c][r]), f && f.d && f.d._pt))
          for (f = f.d._pt; f && f.p !== r && f.fp !== r; ) f = f._next;
        if (!f)
          return (
            (zs = 1),
            (e.vars[r] = "+=0"),
            co(e, o),
            (zs = 0),
            l ? fn(r + " not eligible for reset") : 1
          );
        u.push(f);
      }
    for (c = u.length; c--; )
      (d = u[c]),
        (f = d._pt || d),
        (f.s = (i || i === 0) && !n ? i : f.s + (i || 0) + s * f.c),
        (f.c = t - f.s),
        d.e && (d.e = Ne(t) + pt(d.e)),
        d.b && (d.b = f.s + pt(d.b));
  },
  Eu = function (e, r) {
    var t = e[0] ? ti(e[0]).harness : 0,
      i = t && t.aliases,
      n,
      s,
      o,
      l;
    if (!i) return r;
    n = Ri({}, r);
    for (s in i)
      if (s in n) for (l = i[s].split(","), o = l.length; o--; ) n[l[o]] = n[s];
    return n;
  },
  Mu = function (e, r, t, i) {
    var n = r.ease || i || "power1.inOut",
      s,
      o;
    if (mt(r))
      (o = t[e] || (t[e] = [])),
        r.forEach(function (l, u) {
          return o.push({ t: (u / (r.length - 1)) * 100, v: l, e: n });
        });
    else
      for (s in r)
        (o = t[s] || (t[s] = [])),
          s === "ease" || o.push({ t: parseFloat(e), v: r[s], e: n });
  },
  Ji = function (e, r, t, i, n) {
    return ze(e)
      ? e.call(r, t, i, n)
      : it(e) && ~e.indexOf("random(")
      ? hn(e)
      : e;
  },
  il = ao + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  nl = {};
Mt(il + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
  return (nl[a] = 1);
});
var We = (function (a) {
  ba(e, a);
  function e(t, i, n, s) {
    var o;
    typeof i == "number" && ((n.duration = i), (i = n), (n = null)),
      (o = a.call(this, s ? i : Qi(i)) || this);
    var l = o.vars,
      u = l.duration,
      f = l.delay,
      d = l.immediateRender,
      h = l.stagger,
      c = l.overwrite,
      p = l.keyframes,
      _ = l.defaults,
      m = l.scrollTrigger,
      T = l.yoyoEase,
      b = i.parent || Re,
      C = (mt(t) || Sa(t) ? kr(t[0]) : "length" in i) ? [t] : Zt(t),
      v,
      x,
      P,
      S,
      k,
      O,
      M,
      Y;
    if (
      ((o._targets = C.length
        ? lo(C)
        : fn(
            "GSAP target " + t + " not found. https://gsap.com",
            !Vt.nullTargetWarn
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = c),
      p || h || bn(u) || bn(f))
    ) {
      if (
        ((i = o.vars),
        (v = o.timeline =
          new Ct({
            data: "nested",
            defaults: _ || {},
            targets: b && b.data === "nested" ? b.vars.targets : C,
          })),
        v.kill(),
        (v.parent = v._dp = br(o)),
        (v._start = 0),
        h || bn(u) || bn(f))
      ) {
        if (((S = C.length), (M = h && Wa(h)), vr(h)))
          for (k in h) ~il.indexOf(k) && (Y || (Y = {}), (Y[k] = h[k]));
        for (x = 0; x < S; x++)
          (P = Gn(i, nl)),
            (P.stagger = 0),
            T && (P.yoyoEase = T),
            Y && Ri(P, Y),
            (O = C[x]),
            (P.duration = +Ji(u, br(o), x, O, C)),
            (P.delay = (+Ji(f, br(o), x, O, C) || 0) - o._delay),
            !h &&
              S === 1 &&
              P.delay &&
              ((o._delay = f = P.delay), (o._start += f), (P.delay = 0)),
            v.to(O, P, M ? M(x, O, C) : 0),
            (v._ease = fe.none);
        v.duration() ? (u = f = 0) : (o.timeline = 0);
      } else if (p) {
        Qi(Ht(v.vars.defaults, { ease: "none" })),
          (v._ease = ii(p.ease || i.ease || "none"));
        var E = 0,
          F,
          I,
          U;
        if (mt(p))
          p.forEach(function ($) {
            return v.to(C, $, ">");
          }),
            v.duration();
        else {
          P = {};
          for (k in p)
            k === "ease" || k === "easeEach" || Mu(k, p[k], P, p.easeEach);
          for (k in P)
            for (
              F = P[k].sort(function ($, L) {
                return $.t - L.t;
              }),
                E = 0,
                x = 0;
              x < F.length;
              x++
            )
              (I = F[x]),
                (U = {
                  ease: I.e,
                  duration: ((I.t - (x ? F[x - 1].t : 0)) / 100) * u,
                }),
                (U[k] = I.v),
                v.to(C, U, E),
                (E += U.duration);
          v.duration() < u && v.to({}, { duration: u - v.duration() });
        }
      }
      u || o.duration((u = v.duration()));
    } else o.timeline = 0;
    return (
      c === !0 && !to && ((Fr = br(o)), Re.killTweensOf(C), (Fr = 0)),
      pr(b, br(o), n),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      (d ||
        (!u &&
          !p &&
          o._start === Xe(b._time) &&
          Et(d) &&
          au(br(o)) &&
          b.data !== "nested")) &&
        ((o._tTime = -xe), o.render(Math.max(0, -f) || 0)),
      m && Na(br(o), m),
      o
    );
  }
  var r = e.prototype;
  return (
    (r.render = function (i, n, s) {
      var o = this._time,
        l = this._tDur,
        u = this._dur,
        f = i < 0,
        d = i > l - xe && !f ? l : i < xe ? 0 : i,
        h,
        c,
        p,
        _,
        m,
        T,
        b,
        C,
        v;
      if (!u) uu(this, i, n, s);
      else if (
        d !== this._tTime ||
        !i ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== f) ||
        this._lazy
      ) {
        if (((h = d), (C = this.timeline), this._repeat)) {
          if (((_ = u + this._rDelay), this._repeat < -1 && f))
            return this.totalTime(_ * 100 + i, n, s);
          if (
            ((h = Xe(d % _)),
            d === l
              ? ((p = this._repeat), (h = u))
              : ((m = Xe(d / _)),
                (p = ~~m),
                p && p === m ? ((h = u), p--) : h > u && (h = u)),
            (T = this._yoyo && p & 1),
            T && ((v = this._yEase), (h = u - h)),
            (m = Di(this._tTime, _)),
            h === o && !s && this._initted && p === m)
          )
            return (this._tTime = d), this;
          p !== m &&
            (C && this._yEase && Ja(C, T),
            this.vars.repeatRefresh &&
              !T &&
              !this._lock &&
              h !== _ &&
              this._initted &&
              ((this._lock = s = 1),
              (this.render(Xe(_ * p), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Ba(this, f ? i : h, s, n, d)) return (this._tTime = 0), this;
          if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
            return this;
          if (u !== this._dur) return this.render(i, n, s);
        }
        if (
          ((this._tTime = d),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = b = (v || this._ease)(h / u)),
          this._from && (this.ratio = b = 1 - b),
          !o && d && !n && !m && (Xt(this, "onStart"), this._tTime !== d))
        )
          return this;
        for (c = this._pt; c; ) c.r(b, c.d), (c = c._next);
        (C && C.render(i < 0 ? i : C._dur * C._ease(h / this._dur), n, s)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !n &&
            (f && Ms(this, i, n, s), Xt(this, "onUpdate")),
          this._repeat &&
            p !== m &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            Xt(this, "onRepeat"),
          (d === this._tDur || !d) &&
            this._tTime === d &&
            (f && !this._onUpdate && Ms(this, i, !0, !0),
            (i || !u) &&
              ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
              Wr(this, 1),
            !n &&
              !(f && !o) &&
              (d || o || T) &&
              (Xt(this, d === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        a.prototype.invalidate.call(this, i)
      );
    }),
    (r.resetTo = function (i, n, s, o, l) {
      dn || $t.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        f;
      return (
        this._initted || co(this, u),
        (f = this._ease(u / this._dur)),
        Ou(this, i, n, s, o, f, u, l)
          ? this.resetTo(i, n, s, o, 1)
          : (as(this, 0),
            this.parent ||
              Ia(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (r.kill = function (i, n) {
      if ((n === void 0 && (n = "all"), !i && (!n || n === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Xi(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!lt),
          this
        );
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, n, Fr && Fr.vars.overwrite !== !0)
            ._first || Xi(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            Ai(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var o = this._targets,
        l = i ? Zt(i) : o,
        u = this._ptLookup,
        f = this._pt,
        d,
        h,
        c,
        p,
        _,
        m,
        T;
      if ((!n || n === "all") && su(o, l))
        return n === "all" && (this._pt = 0), Xi(this);
      for (
        d = this._op = this._op || [],
          n !== "all" &&
            (it(n) &&
              ((_ = {}),
              Mt(n, function (b) {
                return (_[b] = 1);
              }),
              (n = _)),
            (n = Eu(o, n))),
          T = o.length;
        T--;

      )
        if (~l.indexOf(o[T])) {
          (h = u[T]),
            n === "all"
              ? ((d[T] = n), (p = h), (c = {}))
              : ((c = d[T] = d[T] || {}), (p = n));
          for (_ in p)
            (m = h && h[_]),
              m &&
                ((!("kill" in m.d) || m.d.kill(_) === !0) && ss(this, m, "_pt"),
                delete h[_]),
              c !== "all" && (c[_] = 1);
        }
      return this._initted && !this._pt && f && Xi(this), this;
    }),
    (e.to = function (i, n) {
      return new e(i, n, arguments[2]);
    }),
    (e.from = function (i, n) {
      return Zi(1, arguments);
    }),
    (e.delayedCall = function (i, n, s, o) {
      return new e(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: o,
      });
    }),
    (e.fromTo = function (i, n, s) {
      return Zi(2, arguments);
    }),
    (e.set = function (i, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(i, n);
    }),
    (e.killTweensOf = function (i, n, s) {
      return Re.killTweensOf(i, n, s);
    }),
    e
  );
})(_n);
Ht(We.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Mt("staggerTo,staggerFrom,staggerFromTo", function (a) {
  We[a] = function () {
    var e = new Ct(),
      r = Ds.call(arguments, 0);
    return r.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), e[a].apply(e, r);
  };
});
var ho = function (e, r, t) {
    return (e[r] = t);
  },
  sl = function (e, r, t) {
    return e[r](t);
  },
  Ru = function (e, r, t, i) {
    return e[r](i.fp, t);
  },
  Du = function (e, r, t) {
    return e.setAttribute(r, t);
  },
  _o = function (e, r) {
    return ze(e[r]) ? sl : ro(e[r]) && e.setAttribute ? Du : ho;
  },
  ol = function (e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r);
  },
  Au = function (e, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * e), r);
  },
  al = function (e, r) {
    var t = r._pt,
      i = "";
    if (!e && r.b) i = r.b;
    else if (e === 1 && r.e) i = r.e;
    else {
      for (; t; )
        (i =
          t.p +
          (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) +
          i),
          (t = t._next);
      i += r.c;
    }
    r.set(r.t, r.p, i, r);
  },
  po = function (e, r) {
    for (var t = r._pt; t; ) t.r(e, t.d), (t = t._next);
  },
  Fu = function (e, r, t, i) {
    for (var n = this._pt, s; n; )
      (s = n._next), n.p === i && n.modifier(e, r, t), (n = s);
  },
  zu = function (e) {
    for (var r = this._pt, t, i; r; )
      (i = r._next),
        (r.p === e && !r.op) || r.op === e
          ? ss(this, r, "_pt")
          : r.dep || (t = 1),
        (r = i);
    return !t;
  },
  Iu = function (e, r, t, i) {
    i.mSet(e, r, i.m.call(i.tween, t, i.mt), i);
  },
  ll = function (e) {
    for (var r = e._pt, t, i, n, s; r; ) {
      for (t = r._next, i = n; i && i.pr > r.pr; ) i = i._next;
      (r._prev = i ? i._prev : s) ? (r._prev._next = r) : (n = r),
        (r._next = i) ? (i._prev = r) : (s = r),
        (r = t);
    }
    e._pt = n;
  },
  Rt = (function () {
    function a(r, t, i, n, s, o, l, u, f) {
      (this.t = t),
        (this.s = n),
        (this.c = s),
        (this.p = i),
        (this.r = o || ol),
        (this.d = l || this),
        (this.set = u || ho),
        (this.pr = f || 0),
        (this._next = r),
        r && (r._prev = this);
    }
    var e = a.prototype;
    return (
      (e.modifier = function (t, i, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = Iu),
          (this.m = t),
          (this.mt = n),
          (this.tween = i);
      }),
      a
    );
  })();
Mt(
  ao +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (a) {
    return (oo[a] = 1);
  }
);
Ut.TweenMax = Ut.TweenLite = We;
Ut.TimelineLite = Ut.TimelineMax = Ct;
Re = new Ct({
  sortChildren: !1,
  defaults: Mi,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
Vt.stringFilter = Qa;
var ni = [],
  Bn = {},
  Lu = [],
  zo = 0,
  Nu = 0,
  ps = function (e) {
    return (Bn[e] || Lu).map(function (r) {
      return r();
    });
  },
  Is = function () {
    var e = Date.now(),
      r = [];
    e - zo > 2 &&
      (ps("matchMediaInit"),
      ni.forEach(function (t) {
        var i = t.queries,
          n = t.conditions,
          s,
          o,
          l,
          u;
        for (o in i)
          (s = hr.matchMedia(i[o]).matches),
            s && (l = 1),
            s !== n[o] && ((n[o] = s), (u = 1));
        u && (t.revert(), l && r.push(t));
      }),
      ps("matchMediaRevert"),
      r.forEach(function (t) {
        return t.onMatch(t, function (i) {
          return t.add(null, i);
        });
      }),
      (zo = e),
      ps("matchMedia"));
  },
  ul = (function () {
    function a(r, t) {
      (this.selector = t && As(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Nu++),
        r && this.add(r);
    }
    var e = a.prototype;
    return (
      (e.add = function (t, i, n) {
        ze(t) && ((n = i), (i = t), (t = ze));
        var s = this,
          o = function () {
            var u = ke,
              f = s.selector,
              d;
            return (
              u && u !== s && u.data.push(s),
              n && (s.selector = As(n)),
              (ke = s),
              (d = i.apply(s, arguments)),
              ze(d) && s._r.push(d),
              (ke = u),
              (s.selector = f),
              (s.isReverted = !1),
              d
            );
          };
        return (
          (s.last = o),
          t === ze
            ? o(s, function (l) {
                return s.add(null, l);
              })
            : t
            ? (s[t] = o)
            : o
        );
      }),
      (e.ignore = function (t) {
        var i = ke;
        (ke = null), t(this), (ke = i);
      }),
      (e.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof a
              ? t.push.apply(t, i.getTweens())
              : i instanceof We &&
                  !(i.parent && i.parent.data === "nested") &&
                  t.push(i);
          }),
          t
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (t, i) {
        var n = this;
        if (
          (t
            ? (function () {
                for (var o = n.getTweens(), l = n.data.length, u; l--; )
                  (u = n.data[l]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (f) {
                        return o.splice(o.indexOf(f), 1);
                      }));
                for (
                  o
                    .map(function (f) {
                      return {
                        g:
                          f._dur ||
                          f._delay ||
                          (f._sat && !f._sat.vars.immediateRender)
                            ? f.globalTime(0)
                            : -1 / 0,
                        t: f,
                      };
                    })
                    .sort(function (f, d) {
                      return d.g - f.g || -1 / 0;
                    })
                    .forEach(function (f) {
                      return f.t.revert(t);
                    }),
                    l = n.data.length;
                  l--;

                )
                  (u = n.data[l]),
                    u instanceof Ct
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof We) && u.revert && u.revert(t);
                n._r.forEach(function (f) {
                  return f(t, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (o) {
                return o.kill && o.kill();
              }),
          this.clear(),
          i)
        )
          for (var s = ni.length; s--; )
            ni[s].id === this.id && ni.splice(s, 1);
      }),
      (e.revert = function (t) {
        this.kill(t || {});
      }),
      a
    );
  })(),
  Bu = (function () {
    function a(r) {
      (this.contexts = []), (this.scope = r), ke && ke.data.push(this);
    }
    var e = a.prototype;
    return (
      (e.add = function (t, i, n) {
        vr(t) || (t = { matches: t });
        var s = new ul(0, n || this.scope),
          o = (s.conditions = {}),
          l,
          u,
          f;
        ke && !s.selector && (s.selector = ke.selector),
          this.contexts.push(s),
          (i = s.add("onMatch", i)),
          (s.queries = t);
        for (u in t)
          u === "all"
            ? (f = 1)
            : ((l = hr.matchMedia(t[u])),
              l &&
                (ni.indexOf(s) < 0 && ni.push(s),
                (o[u] = l.matches) && (f = 1),
                l.addListener
                  ? l.addListener(Is)
                  : l.addEventListener("change", Is)));
        return (
          f &&
            i(s, function (d) {
              return s.add(null, d);
            }),
          this
        );
      }),
      (e.revert = function (t) {
        this.kill(t || {});
      }),
      (e.kill = function (t) {
        this.contexts.forEach(function (i) {
          return i.kill(t, !0);
        });
      }),
      a
    );
  })(),
  Kn = {
    registerPlugin: function () {
      for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
        r[t] = arguments[t];
      r.forEach(function (i) {
        return Ga(i);
      });
    },
    timeline: function (e) {
      return new Ct(e);
    },
    getTweensOf: function (e, r) {
      return Re.getTweensOf(e, r);
    },
    getProperty: function (e, r, t, i) {
      it(e) && (e = Zt(e)[0]);
      var n = ti(e || {}).get,
        s = t ? za : Fa;
      return (
        t === "native" && (t = ""),
        e &&
          (r
            ? s(((Bt[r] && Bt[r].get) || n)(e, r, t, i))
            : function (o, l, u) {
                return s(((Bt[o] && Bt[o].get) || n)(e, o, l, u));
              })
      );
    },
    quickSetter: function (e, r, t) {
      if (((e = Zt(e)), e.length > 1)) {
        var i = e.map(function (f) {
            return At.quickSetter(f, r, t);
          }),
          n = i.length;
        return function (f) {
          for (var d = n; d--; ) i[d](f);
        };
      }
      e = e[0] || {};
      var s = Bt[r],
        o = ti(e),
        l = (o.harness && (o.harness.aliases || {})[r]) || r,
        u = s
          ? function (f) {
              var d = new s();
              (bi._pt = 0),
                d.init(e, t ? f + t : f, bi, 0, [e]),
                d.render(1, d),
                bi._pt && po(1, bi);
            }
          : o.set(e, l);
      return s
        ? u
        : function (f) {
            return u(e, l, t ? f + t : f, o, 1);
          };
    },
    quickTo: function (e, r, t) {
      var i,
        n = At.to(
          e,
          Ht(
            ((i = {}), (i[r] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
            t || {}
          )
        ),
        s = function (l, u, f) {
          return n.resetTo(r, l, u, f);
        };
      return (s.tween = n), s;
    },
    isTweening: function (e) {
      return Re.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = ii(e.ease, Mi.ease)), Mo(Mi, e || {});
    },
    config: function (e) {
      return Mo(Vt, e || {});
    },
    registerEffect: function (e) {
      var r = e.name,
        t = e.effect,
        i = e.plugins,
        n = e.defaults,
        s = e.extendTimeline;
      (i || "").split(",").forEach(function (o) {
        return (
          o && !Bt[o] && !Ut[o] && fn(r + " effect requires " + o + " plugin.")
        );
      }),
        (cs[r] = function (o, l, u) {
          return t(Zt(o), Ht(l || {}, n), u);
        }),
        s &&
          (Ct.prototype[r] = function (o, l, u) {
            return this.add(cs[r](o, vr(l) ? l : (u = l) && {}, this), u);
          });
    },
    registerEase: function (e, r) {
      fe[e] = ii(r);
    },
    parseEase: function (e, r) {
      return arguments.length ? ii(e, r) : fe;
    },
    getById: function (e) {
      return Re.getById(e);
    },
    exportRoot: function (e, r) {
      e === void 0 && (e = {});
      var t = new Ct(e),
        i,
        n;
      for (
        t.smoothChildTiming = Et(e.smoothChildTiming),
          Re.remove(t),
          t._dp = 0,
          t._time = t._tTime = Re._time,
          i = Re._first;
        i;

      )
        (n = i._next),
          (r ||
            !(
              !i._dur &&
              i instanceof We &&
              i.vars.onComplete === i._targets[0]
            )) &&
            pr(t, i, i._start - i._delay),
          (i = n);
      return pr(Re, t, 0), t;
    },
    context: function (e, r) {
      return e ? new ul(e, r) : ke;
    },
    matchMedia: function (e) {
      return new Bu(e);
    },
    matchMediaRefresh: function () {
      return (
        ni.forEach(function (e) {
          var r = e.conditions,
            t,
            i;
          for (i in r) r[i] && ((r[i] = !1), (t = 1));
          t && e.revert();
        }) || Is()
      );
    },
    addEventListener: function (e, r) {
      var t = Bn[e] || (Bn[e] = []);
      ~t.indexOf(r) || t.push(r);
    },
    removeEventListener: function (e, r) {
      var t = Bn[e],
        i = t && t.indexOf(r);
      i >= 0 && t.splice(i, 1);
    },
    utils: {
      wrap: mu,
      wrapYoyo: yu,
      distribute: Wa,
      random: Va,
      snap: Xa,
      normalize: gu,
      getUnit: pt,
      clamp: hu,
      splitColor: ja,
      toArray: Zt,
      selector: As,
      mapRange: Ha,
      pipe: _u,
      unitize: pu,
      interpolate: vu,
      shuffle: $a,
    },
    install: Ea,
    effects: cs,
    ticker: $t,
    updateRoot: Ct.updateRoot,
    plugins: Bt,
    globalTimeline: Re,
    core: {
      PropTween: Rt,
      globals: Ma,
      Tween: We,
      Timeline: Ct,
      Animation: _n,
      getCache: ti,
      _removeLinkedListItem: ss,
      reverting: function () {
        return lt;
      },
      context: function (e) {
        return e && ke && (ke.data.push(e), (e._ctx = ke)), ke;
      },
      suppressOverwrites: function (e) {
        return (to = e);
      },
    },
  };
Mt("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
  return (Kn[a] = We[a]);
});
$t.add(Ct.updateRoot);
bi = Kn.to({}, { duration: 0 });
var Yu = function (e, r) {
    for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r; )
      t = t._next;
    return t;
  },
  $u = function (e, r) {
    var t = e._targets,
      i,
      n,
      s;
    for (i in r)
      for (n = t.length; n--; )
        (s = e._ptLookup[n][i]),
          s &&
            (s = s.d) &&
            (s._pt && (s = Yu(s, i)),
            s && s.modifier && s.modifier(r[i], e, t[n], i));
  },
  gs = function (e, r) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (i, n, s) {
        s._onInit = function (o) {
          var l, u;
          if (
            (it(n) &&
              ((l = {}),
              Mt(n, function (f) {
                return (l[f] = 1);
              }),
              (n = l)),
            r)
          ) {
            l = {};
            for (u in n) l[u] = r(n[u]);
            n = l;
          }
          $u(o, n);
        };
      },
    };
  },
  At =
    Kn.registerPlugin(
      {
        name: "attr",
        init: function (e, r, t, i, n) {
          var s, o, l;
          this.tween = t;
          for (s in r)
            (l = e.getAttribute(s) || ""),
              (o = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                r[s],
                i,
                n,
                0,
                0,
                s
              )),
              (o.op = s),
              (o.b = l),
              this._props.push(s);
        },
        render: function (e, r) {
          for (var t = r._pt; t; )
            lt ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), (t = t._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (e, r) {
          for (var t = r.length; t--; )
            this.add(e, t, e[t] || 0, r[t], 0, 0, 0, 0, 0, 1);
        },
      },
      gs("roundProps", Fs),
      gs("modifiers"),
      gs("snap", Xa)
    ) || Kn;
We.version = Ct.version = At.version = "3.13.0";
Oa = 1;
io() && Fi();
fe.Power0;
fe.Power1;
fe.Power2;
fe.Power3;
fe.Power4;
fe.Linear;
fe.Quad;
fe.Cubic;
fe.Quart;
fe.Quint;
fe.Strong;
fe.Elastic;
fe.Back;
fe.SteppedEase;
fe.Bounce;
fe.Sine;
fe.Expo;
fe.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Io,
  zr,
  Ci,
  go,
  Jr,
  Lo,
  mo,
  Wu = function () {
    return typeof window < "u";
  },
  Or = {},
  jr = 180 / Math.PI,
  Pi = Math.PI / 180,
  _i = Math.atan2,
  No = 1e8,
  yo = /([A-Z])/g,
  Xu = /(left|right|width|margin|padding|x)/i,
  Vu = /[\s,\(]\S/,
  gr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Ls = function (e, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r);
  },
  Uu = function (e, r) {
    return r.set(
      r.t,
      r.p,
      e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u,
      r
    );
  },
  Hu = function (e, r) {
    return r.set(
      r.t,
      r.p,
      e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b,
      r
    );
  },
  qu = function (e, r) {
    var t = r.s + r.c * e;
    r.set(r.t, r.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + r.u, r);
  },
  fl = function (e, r) {
    return r.set(r.t, r.p, e ? r.e : r.b, r);
  },
  cl = function (e, r) {
    return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r);
  },
  Gu = function (e, r, t) {
    return (e.style[r] = t);
  },
  ju = function (e, r, t) {
    return e.style.setProperty(r, t);
  },
  Ku = function (e, r, t) {
    return (e._gsap[r] = t);
  },
  Qu = function (e, r, t) {
    return (e._gsap.scaleX = e._gsap.scaleY = t);
  },
  Zu = function (e, r, t, i, n) {
    var s = e._gsap;
    (s.scaleX = s.scaleY = t), s.renderTransform(n, s);
  },
  Ju = function (e, r, t, i, n) {
    var s = e._gsap;
    (s[r] = t), s.renderTransform(n, s);
  },
  De = "transform",
  Dt = De + "Origin",
  ef = function a(e, r) {
    var t = this,
      i = this.target,
      n = i.style,
      s = i._gsap;
    if (e in Or && n) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = gr[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (t.tfm[o] = Tr(i, o));
              })
            : (this.tfm[e] = s.x ? s[e] : Tr(i, e)),
          e === Dt && (this.tfm.zOrigin = s.zOrigin);
      else
        return gr.transform.split(",").forEach(function (o) {
          return a.call(t, o, r);
        });
      if (this.props.indexOf(De) >= 0) return;
      s.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(Dt, r, "")),
        (e = De);
    }
    (n || r) && this.props.push(e, r, n[e]);
  },
  hl = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  tf = function () {
    var e = this.props,
      r = this.target,
      t = r.style,
      i = r._gsap,
      n,
      s;
    for (n = 0; n < e.length; n += 3)
      e[n + 1]
        ? e[n + 1] === 2
          ? r[e[n]](e[n + 2])
          : (r[e[n]] = e[n + 2])
        : e[n + 2]
        ? (t[e[n]] = e[n + 2])
        : t.removeProperty(
            e[n].substr(0, 2) === "--"
              ? e[n]
              : e[n].replace(yo, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) i[s] = this.tfm[s];
      i.svg &&
        (i.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        (n = mo()),
        (!n || !n.isStart) &&
          !t[De] &&
          (hl(t),
          i.zOrigin &&
            t[Dt] &&
            ((t[Dt] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  },
  dl = function (e, r) {
    var t = { target: e, props: [], revert: tf, save: ef };
    return (
      e._gsap || At.core.getCache(e),
      r &&
        e.style &&
        e.nodeType &&
        r.split(",").forEach(function (i) {
          return t.save(i);
        }),
      t
    );
  },
  _l,
  Ns = function (e, r) {
    var t = zr.createElementNS
      ? zr.createElementNS(
          (r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : zr.createElement(e);
    return t && t.style ? t : zr.createElement(e);
  },
  Jt = function a(e, r, t) {
    var i = getComputedStyle(e);
    return (
      i[r] ||
      i.getPropertyValue(r.replace(yo, "-$1").toLowerCase()) ||
      i.getPropertyValue(r) ||
      (!t && a(e, zi(r) || r, 1)) ||
      ""
    );
  },
  Bo = "O,Moz,ms,Ms,Webkit".split(","),
  zi = function (e, r, t) {
    var i = r || Jr,
      n = i.style,
      s = 5;
    if (e in n && !t) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      s-- && !(Bo[s] + e in n);

    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Bo[s] : "") + e;
  },
  Bs = function () {
    Wu() &&
      window.document &&
      ((Io = window),
      (zr = Io.document),
      (Ci = zr.documentElement),
      (Jr = Ns("div") || { style: {} }),
      Ns("div"),
      (De = zi(De)),
      (Dt = De + "Origin"),
      (Jr.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (_l = !!zi("perspective")),
      (mo = At.core.reverting),
      (go = 1));
  },
  Yo = function (e) {
    var r = e.ownerSVGElement,
      t = Ns(
        "svg",
        (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      i = e.cloneNode(!0),
      n;
    (i.style.display = "block"), t.appendChild(i), Ci.appendChild(t);
    try {
      n = i.getBBox();
    } catch {}
    return t.removeChild(i), Ci.removeChild(t), n;
  },
  $o = function (e, r) {
    for (var t = r.length; t--; )
      if (e.hasAttribute(r[t])) return e.getAttribute(r[t]);
  },
  pl = function (e) {
    var r, t;
    try {
      r = e.getBBox();
    } catch {
      (r = Yo(e)), (t = 1);
    }
    return (
      (r && (r.width || r.height)) || t || (r = Yo(e)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +$o(e, ["x", "cx", "x1"]) || 0,
            y: +$o(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : r
    );
  },
  gl = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && pl(e));
  },
  li = function (e, r) {
    if (r) {
      var t = e.style,
        i;
      r in Or && r !== Dt && (r = De),
        t.removeProperty
          ? ((i = r.substr(0, 2)),
            (i === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
            t.removeProperty(
              i === "--" ? r : r.replace(yo, "-$1").toLowerCase()
            ))
          : t.removeAttribute(r);
    }
  },
  Ir = function (e, r, t, i, n, s) {
    var o = new Rt(e._pt, r, t, 0, 1, s ? cl : fl);
    return (e._pt = o), (o.b = i), (o.e = n), e._props.push(t), o;
  },
  Wo = { deg: 1, rad: 1, turn: 1 },
  rf = { grid: 1, flex: 1 },
  Xr = function a(e, r, t, i) {
    var n = parseFloat(t) || 0,
      s = (t + "").trim().substr((n + "").length) || "px",
      o = Jr.style,
      l = Xu.test(r),
      u = e.tagName.toLowerCase() === "svg",
      f = (u ? "client" : "offset") + (l ? "Width" : "Height"),
      d = 100,
      h = i === "px",
      c = i === "%",
      p,
      _,
      m,
      T;
    if (i === s || !n || Wo[i] || Wo[s]) return n;
    if (
      (s !== "px" && !h && (n = a(e, r, t, "px")),
      (T = e.getCTM && gl(e)),
      (c || s === "%") && (Or[r] || ~r.indexOf("adius")))
    )
      return (
        (p = T ? e.getBBox()[l ? "width" : "height"] : e[f]),
        Ne(c ? (n / p) * d : (n / 100) * p)
      );
    if (
      ((o[l ? "width" : "height"] = d + (h ? s : i)),
      (_ =
        (i !== "rem" && ~r.indexOf("adius")) ||
        (i === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      T && (_ = (e.ownerSVGElement || {}).parentNode),
      (!_ || _ === zr || !_.appendChild) && (_ = zr.body),
      (m = _._gsap),
      m && c && m.width && l && m.time === $t.time && !m.uncache)
    )
      return Ne((n / m.width) * d);
    if (c && (r === "height" || r === "width")) {
      var b = e.style[r];
      (e.style[r] = d + i), (p = e[f]), b ? (e.style[r] = b) : li(e, r);
    } else
      (c || s === "%") &&
        !rf[Jt(_, "display")] &&
        (o.position = Jt(e, "position")),
        _ === e && (o.position = "static"),
        _.appendChild(Jr),
        (p = Jr[f]),
        _.removeChild(Jr),
        (o.position = "absolute");
    return (
      l && c && ((m = ti(_)), (m.time = $t.time), (m.width = _[f])),
      Ne(h ? (p * n) / d : p && n ? (d / p) * n : 0)
    );
  },
  Tr = function (e, r, t, i) {
    var n;
    return (
      go || Bs(),
      r in gr &&
        r !== "transform" &&
        ((r = gr[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
      Or[r] && r !== "transform"
        ? ((n = gn(e, i)),
          (n =
            r !== "transformOrigin"
              ? n[r]
              : n.svg
              ? n.origin
              : Zn(Jt(e, Dt)) + " " + n.zOrigin + "px"))
        : ((n = e.style[r]),
          (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) &&
            (n =
              (Qn[r] && Qn[r](e, r, t)) ||
              Jt(e, r) ||
              Da(e, r) ||
              (r === "opacity" ? 1 : 0))),
      t && !~(n + "").trim().indexOf(" ") ? Xr(e, r, n, t) + t : n
    );
  },
  nf = function (e, r, t, i) {
    if (!t || t === "none") {
      var n = zi(r, e, 1),
        s = n && Jt(e, n, 1);
      s && s !== t
        ? ((r = n), (t = s))
        : r === "borderColor" && (t = Jt(e, "borderTopColor"));
    }
    var o = new Rt(this._pt, e.style, r, 0, 1, al),
      l = 0,
      u = 0,
      f,
      d,
      h,
      c,
      p,
      _,
      m,
      T,
      b,
      C,
      v,
      x;
    if (
      ((o.b = t),
      (o.e = i),
      (t += ""),
      (i += ""),
      i.substring(0, 6) === "var(--" &&
        (i = Jt(e, i.substring(4, i.indexOf(")")))),
      i === "auto" &&
        ((_ = e.style[r]),
        (e.style[r] = i),
        (i = Jt(e, r) || i),
        _ ? (e.style[r] = _) : li(e, r)),
      (f = [t, i]),
      Qa(f),
      (t = f[0]),
      (i = f[1]),
      (h = t.match(wi) || []),
      (x = i.match(wi) || []),
      x.length)
    ) {
      for (; (d = wi.exec(i)); )
        (m = d[0]),
          (b = i.substring(l, d.index)),
          p
            ? (p = (p + 1) % 5)
            : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (p = 1),
          m !== (_ = h[u++] || "") &&
            ((c = parseFloat(_) || 0),
            (v = _.substr((c + "").length)),
            m.charAt(1) === "=" && (m = Si(c, m) + v),
            (T = parseFloat(m)),
            (C = m.substr((T + "").length)),
            (l = wi.lastIndex - C.length),
            C ||
              ((C = C || Vt.units[r] || v),
              l === i.length && ((i += C), (o.e += C))),
            v !== C && (c = Xr(e, r, _, C) || 0),
            (o._pt = {
              _next: o._pt,
              p: b || u === 1 ? b : ",",
              s: c,
              c: T - c,
              m: (p && p < 4) || r === "zIndex" ? Math.round : 0,
            }));
      o.c = l < i.length ? i.substring(l, i.length) : "";
    } else o.r = r === "display" && i === "none" ? cl : fl;
    return Pa.test(i) && (o.e = 0), (this._pt = o), o;
  },
  Xo = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  sf = function (e) {
    var r = e.split(" "),
      t = r[0],
      i = r[1] || "50%";
    return (
      (t === "top" || t === "bottom" || i === "left" || i === "right") &&
        ((e = t), (t = i), (i = e)),
      (r[0] = Xo[t] || t),
      (r[1] = Xo[i] || i),
      r.join(" ")
    );
  },
  of = function (e, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var t = r.t,
        i = t.style,
        n = r.u,
        s = t._gsap,
        o,
        l,
        u;
      if (n === "all" || n === !0) (i.cssText = ""), (l = 1);
      else
        for (n = n.split(","), u = n.length; --u > -1; )
          (o = n[u]),
            Or[o] && ((l = 1), (o = o === "transformOrigin" ? Dt : De)),
            li(t, o);
      l &&
        (li(t, De),
        s &&
          (s.svg && t.removeAttribute("transform"),
          (i.scale = i.rotate = i.translate = "none"),
          gn(t, 1),
          (s.uncache = 1),
          hl(i)));
    }
  },
  Qn = {
    clearProps: function (e, r, t, i, n) {
      if (n.data !== "isFromStart") {
        var s = (e._pt = new Rt(e._pt, r, t, 0, 0, of));
        return (s.u = i), (s.pr = -10), (s.tween = n), e._props.push(t), 1;
      }
    },
  },
  pn = [1, 0, 0, 1, 0, 0],
  ml = {},
  yl = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  Vo = function (e) {
    var r = Jt(e, De);
    return yl(r) ? pn : r.substr(7).match(Ca).map(Ne);
  },
  vo = function (e, r) {
    var t = e._gsap || ti(e),
      i = e.style,
      n = Vo(e),
      s,
      o,
      l,
      u;
    return t.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
        n.join(",") === "1,0,0,1,0,0" ? pn : n)
      : (n === pn &&
          !e.offsetParent &&
          e !== Ci &&
          !t.svg &&
          ((l = i.display),
          (i.display = "block"),
          (s = e.parentNode),
          (!s || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((u = 1), (o = e.nextElementSibling), Ci.appendChild(e)),
          (n = Vo(e)),
          l ? (i.display = l) : li(e, "display"),
          u &&
            (o
              ? s.insertBefore(e, o)
              : s
              ? s.appendChild(e)
              : Ci.removeChild(e))),
        r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  Ys = function (e, r, t, i, n, s) {
    var o = e._gsap,
      l = n || vo(e, !0),
      u = o.xOrigin || 0,
      f = o.yOrigin || 0,
      d = o.xOffset || 0,
      h = o.yOffset || 0,
      c = l[0],
      p = l[1],
      _ = l[2],
      m = l[3],
      T = l[4],
      b = l[5],
      C = r.split(" "),
      v = parseFloat(C[0]) || 0,
      x = parseFloat(C[1]) || 0,
      P,
      S,
      k,
      O;
    t
      ? l !== pn &&
        (S = c * m - p * _) &&
        ((k = v * (m / S) + x * (-_ / S) + (_ * b - m * T) / S),
        (O = v * (-p / S) + x * (c / S) - (c * b - p * T) / S),
        (v = k),
        (x = O))
      : ((P = pl(e)),
        (v = P.x + (~C[0].indexOf("%") ? (v / 100) * P.width : v)),
        (x = P.y + (~(C[1] || C[0]).indexOf("%") ? (x / 100) * P.height : x))),
      i || (i !== !1 && o.smooth)
        ? ((T = v - u),
          (b = x - f),
          (o.xOffset = d + (T * c + b * _) - T),
          (o.yOffset = h + (T * p + b * m) - b))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = v),
      (o.yOrigin = x),
      (o.smooth = !!i),
      (o.origin = r),
      (o.originIsAbsolute = !!t),
      (e.style[Dt] = "0px 0px"),
      s &&
        (Ir(s, o, "xOrigin", u, v),
        Ir(s, o, "yOrigin", f, x),
        Ir(s, o, "xOffset", d, o.xOffset),
        Ir(s, o, "yOffset", h, o.yOffset)),
      e.setAttribute("data-svg-origin", v + " " + x);
  },
  gn = function (e, r) {
    var t = e._gsap || new tl(e);
    if ("x" in t && !r && !t.uncache) return t;
    var i = e.style,
      n = t.scaleX < 0,
      s = "px",
      o = "deg",
      l = getComputedStyle(e),
      u = Jt(e, Dt) || "0",
      f,
      d,
      h,
      c,
      p,
      _,
      m,
      T,
      b,
      C,
      v,
      x,
      P,
      S,
      k,
      O,
      M,
      Y,
      E,
      F,
      I,
      U,
      $,
      L,
      j,
      V,
      g,
      te,
      ce,
      Te,
      he,
      Ae;
    return (
      (f = d = h = _ = m = T = b = C = v = 0),
      (c = p = 1),
      (t.svg = !!(e.getCTM && gl(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[De] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[De] !== "none" ? l[De] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (S = vo(e, t.svg)),
      t.svg &&
        (t.uncache
          ? ((j = e.getBBox()),
            (u = t.xOrigin - j.x + "px " + (t.yOrigin - j.y) + "px"),
            (L = ""))
          : (L = !r && e.getAttribute("data-svg-origin")),
        Ys(e, L || u, !!L || t.originIsAbsolute, t.smooth !== !1, S)),
      (x = t.xOrigin || 0),
      (P = t.yOrigin || 0),
      S !== pn &&
        ((Y = S[0]),
        (E = S[1]),
        (F = S[2]),
        (I = S[3]),
        (f = U = S[4]),
        (d = $ = S[5]),
        S.length === 6
          ? ((c = Math.sqrt(Y * Y + E * E)),
            (p = Math.sqrt(I * I + F * F)),
            (_ = Y || E ? _i(E, Y) * jr : 0),
            (b = F || I ? _i(F, I) * jr + _ : 0),
            b && (p *= Math.abs(Math.cos(b * Pi))),
            t.svg && ((f -= x - (x * Y + P * F)), (d -= P - (x * E + P * I))))
          : ((Ae = S[6]),
            (Te = S[7]),
            (g = S[8]),
            (te = S[9]),
            (ce = S[10]),
            (he = S[11]),
            (f = S[12]),
            (d = S[13]),
            (h = S[14]),
            (k = _i(Ae, ce)),
            (m = k * jr),
            k &&
              ((O = Math.cos(-k)),
              (M = Math.sin(-k)),
              (L = U * O + g * M),
              (j = $ * O + te * M),
              (V = Ae * O + ce * M),
              (g = U * -M + g * O),
              (te = $ * -M + te * O),
              (ce = Ae * -M + ce * O),
              (he = Te * -M + he * O),
              (U = L),
              ($ = j),
              (Ae = V)),
            (k = _i(-F, ce)),
            (T = k * jr),
            k &&
              ((O = Math.cos(-k)),
              (M = Math.sin(-k)),
              (L = Y * O - g * M),
              (j = E * O - te * M),
              (V = F * O - ce * M),
              (he = I * M + he * O),
              (Y = L),
              (E = j),
              (F = V)),
            (k = _i(E, Y)),
            (_ = k * jr),
            k &&
              ((O = Math.cos(k)),
              (M = Math.sin(k)),
              (L = Y * O + E * M),
              (j = U * O + $ * M),
              (E = E * O - Y * M),
              ($ = $ * O - U * M),
              (Y = L),
              (U = j)),
            m &&
              Math.abs(m) + Math.abs(_) > 359.9 &&
              ((m = _ = 0), (T = 180 - T)),
            (c = Ne(Math.sqrt(Y * Y + E * E + F * F))),
            (p = Ne(Math.sqrt($ * $ + Ae * Ae))),
            (k = _i(U, $)),
            (b = Math.abs(k) > 2e-4 ? k * jr : 0),
            (v = he ? 1 / (he < 0 ? -he : he) : 0)),
        t.svg &&
          ((L = e.getAttribute("transform")),
          (t.forceCSS = e.setAttribute("transform", "") || !yl(Jt(e, De))),
          L && e.setAttribute("transform", L))),
      Math.abs(b) > 90 &&
        Math.abs(b) < 270 &&
        (n
          ? ((c *= -1), (b += _ <= 0 ? 180 : -180), (_ += _ <= 0 ? 180 : -180))
          : ((p *= -1), (b += b <= 0 ? 180 : -180))),
      (r = r || t.uncache),
      (t.x =
        f -
        ((t.xPercent =
          f &&
          ((!r && t.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetWidth * t.xPercent) / 100
          : 0) +
        s),
      (t.y =
        d -
        ((t.yPercent =
          d &&
          ((!r && t.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
          ? (e.offsetHeight * t.yPercent) / 100
          : 0) +
        s),
      (t.z = h + s),
      (t.scaleX = Ne(c)),
      (t.scaleY = Ne(p)),
      (t.rotation = Ne(_) + o),
      (t.rotationX = Ne(m) + o),
      (t.rotationY = Ne(T) + o),
      (t.skewX = b + o),
      (t.skewY = C + o),
      (t.transformPerspective = v + s),
      (t.zOrigin = parseFloat(u.split(" ")[2]) || (!r && t.zOrigin) || 0) &&
        (i[Dt] = Zn(u)),
      (t.xOffset = t.yOffset = 0),
      (t.force3D = Vt.force3D),
      (t.renderTransform = t.svg ? lf : _l ? vl : af),
      (t.uncache = 0),
      t
    );
  },
  Zn = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  ms = function (e, r, t) {
    var i = pt(r);
    return Ne(parseFloat(r) + parseFloat(Xr(e, "x", t + "px", i))) + i;
  },
  af = function (e, r) {
    (r.z = "0px"),
      (r.rotationY = r.rotationX = "0deg"),
      (r.force3D = 0),
      vl(e, r);
  },
  qr = "0deg",
  Bi = "0px",
  Gr = ") ",
  vl = function (e, r) {
    var t = r || this,
      i = t.xPercent,
      n = t.yPercent,
      s = t.x,
      o = t.y,
      l = t.z,
      u = t.rotation,
      f = t.rotationY,
      d = t.rotationX,
      h = t.skewX,
      c = t.skewY,
      p = t.scaleX,
      _ = t.scaleY,
      m = t.transformPerspective,
      T = t.force3D,
      b = t.target,
      C = t.zOrigin,
      v = "",
      x = (T === "auto" && e && e !== 1) || T === !0;
    if (C && (d !== qr || f !== qr)) {
      var P = parseFloat(f) * Pi,
        S = Math.sin(P),
        k = Math.cos(P),
        O;
      (P = parseFloat(d) * Pi),
        (O = Math.cos(P)),
        (s = ms(b, s, S * O * -C)),
        (o = ms(b, o, -Math.sin(P) * -C)),
        (l = ms(b, l, k * O * -C + C));
    }
    m !== Bi && (v += "perspective(" + m + Gr),
      (i || n) && (v += "translate(" + i + "%, " + n + "%) "),
      (x || s !== Bi || o !== Bi || l !== Bi) &&
        (v +=
          l !== Bi || x
            ? "translate3d(" + s + ", " + o + ", " + l + ") "
            : "translate(" + s + ", " + o + Gr),
      u !== qr && (v += "rotate(" + u + Gr),
      f !== qr && (v += "rotateY(" + f + Gr),
      d !== qr && (v += "rotateX(" + d + Gr),
      (h !== qr || c !== qr) && (v += "skew(" + h + ", " + c + Gr),
      (p !== 1 || _ !== 1) && (v += "scale(" + p + ", " + _ + Gr),
      (b.style[De] = v || "translate(0, 0)");
  },
  lf = function (e, r) {
    var t = r || this,
      i = t.xPercent,
      n = t.yPercent,
      s = t.x,
      o = t.y,
      l = t.rotation,
      u = t.skewX,
      f = t.skewY,
      d = t.scaleX,
      h = t.scaleY,
      c = t.target,
      p = t.xOrigin,
      _ = t.yOrigin,
      m = t.xOffset,
      T = t.yOffset,
      b = t.forceCSS,
      C = parseFloat(s),
      v = parseFloat(o),
      x,
      P,
      S,
      k,
      O;
    (l = parseFloat(l)),
      (u = parseFloat(u)),
      (f = parseFloat(f)),
      f && ((f = parseFloat(f)), (u += f), (l += f)),
      l || u
        ? ((l *= Pi),
          (u *= Pi),
          (x = Math.cos(l) * d),
          (P = Math.sin(l) * d),
          (S = Math.sin(l - u) * -h),
          (k = Math.cos(l - u) * h),
          u &&
            ((f *= Pi),
            (O = Math.tan(u - f)),
            (O = Math.sqrt(1 + O * O)),
            (S *= O),
            (k *= O),
            f &&
              ((O = Math.tan(f)),
              (O = Math.sqrt(1 + O * O)),
              (x *= O),
              (P *= O))),
          (x = Ne(x)),
          (P = Ne(P)),
          (S = Ne(S)),
          (k = Ne(k)))
        : ((x = d), (k = h), (P = S = 0)),
      ((C && !~(s + "").indexOf("px")) || (v && !~(o + "").indexOf("px"))) &&
        ((C = Xr(c, "x", s, "px")), (v = Xr(c, "y", o, "px"))),
      (p || _ || m || T) &&
        ((C = Ne(C + p - (p * x + _ * S) + m)),
        (v = Ne(v + _ - (p * P + _ * k) + T))),
      (i || n) &&
        ((O = c.getBBox()),
        (C = Ne(C + (i / 100) * O.width)),
        (v = Ne(v + (n / 100) * O.height))),
      (O =
        "matrix(" + x + "," + P + "," + S + "," + k + "," + C + "," + v + ")"),
      c.setAttribute("transform", O),
      b && (c.style[De] = O);
  },
  uf = function (e, r, t, i, n) {
    var s = 360,
      o = it(n),
      l = parseFloat(n) * (o && ~n.indexOf("rad") ? jr : 1),
      u = l - i,
      f = i + u + "deg",
      d,
      h;
    return (
      o &&
        ((d = n.split("_")[1]),
        d === "short" && ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -s)),
        d === "cw" && u < 0
          ? (u = ((u + s * No) % s) - ~~(u / s) * s)
          : d === "ccw" && u > 0 && (u = ((u - s * No) % s) - ~~(u / s) * s)),
      (e._pt = h = new Rt(e._pt, r, t, i, u, Uu)),
      (h.e = f),
      (h.u = "deg"),
      e._props.push(t),
      h
    );
  },
  Uo = function (e, r) {
    for (var t in r) e[t] = r[t];
    return e;
  },
  ff = function (e, r, t) {
    var i = Uo({}, t._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = t.style,
      o,
      l,
      u,
      f,
      d,
      h,
      c,
      p;
    i.svg
      ? ((u = t.getAttribute("transform")),
        t.setAttribute("transform", ""),
        (s[De] = r),
        (o = gn(t, 1)),
        li(t, De),
        t.setAttribute("transform", u))
      : ((u = getComputedStyle(t)[De]),
        (s[De] = r),
        (o = gn(t, 1)),
        (s[De] = u));
    for (l in Or)
      (u = i[l]),
        (f = o[l]),
        u !== f &&
          n.indexOf(l) < 0 &&
          ((c = pt(u)),
          (p = pt(f)),
          (d = c !== p ? Xr(t, l, u, p) : parseFloat(u)),
          (h = parseFloat(f)),
          (e._pt = new Rt(e._pt, o, l, d, h - d, Ls)),
          (e._pt.u = p || 0),
          e._props.push(l));
    Uo(o, i);
  };
Mt("padding,margin,Width,Radius", function (a, e) {
  var r = "Top",
    t = "Right",
    i = "Bottom",
    n = "Left",
    s = (e < 3 ? [r, t, i, n] : [r + n, r + t, i + t, i + n]).map(function (o) {
      return e < 2 ? a + o : "border" + o + a;
    });
  Qn[e > 1 ? "border" + a : a] = function (o, l, u, f, d) {
    var h, c;
    if (arguments.length < 4)
      return (
        (h = s.map(function (p) {
          return Tr(o, p, u);
        })),
        (c = h.join(" ")),
        c.split(h[0]).length === 5 ? h[0] : c
      );
    (h = (f + "").split(" ")),
      (c = {}),
      s.forEach(function (p, _) {
        return (c[p] = h[_] = h[_] || h[((_ - 1) / 2) | 0]);
      }),
      o.init(l, c, d);
  };
});
var xl = {
  name: "css",
  register: Bs,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, r, t, i, n) {
    var s = this._props,
      o = e.style,
      l = t.vars.startAt,
      u,
      f,
      d,
      h,
      c,
      p,
      _,
      m,
      T,
      b,
      C,
      v,
      x,
      P,
      S,
      k;
    go || Bs(),
      (this.styles = this.styles || dl(e)),
      (k = this.styles.props),
      (this.tween = t);
    for (_ in r)
      if (_ !== "autoRound" && ((f = r[_]), !(Bt[_] && rl(_, r, t, i, e, n)))) {
        if (
          ((c = typeof f),
          (p = Qn[_]),
          c === "function" && ((f = f.call(t, i, e, n)), (c = typeof f)),
          c === "string" && ~f.indexOf("random(") && (f = hn(f)),
          p)
        )
          p(this, e, _, f, t) && (S = 1);
        else if (_.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(_) + "").trim()),
            (f += ""),
            (Yr.lastIndex = 0),
            Yr.test(u) || ((m = pt(u)), (T = pt(f))),
            T ? m !== T && (u = Xr(e, _, u, T) + T) : m && (f += m),
            this.add(o, "setProperty", u, f, i, n, 0, 0, _),
            s.push(_),
            k.push(_, 0, o[_]);
        else if (c !== "undefined") {
          if (
            (l && _ in l
              ? ((u = typeof l[_] == "function" ? l[_].call(t, i, e, n) : l[_]),
                it(u) && ~u.indexOf("random(") && (u = hn(u)),
                pt(u + "") ||
                  u === "auto" ||
                  (u += Vt.units[_] || pt(Tr(e, _)) || ""),
                (u + "").charAt(1) === "=" && (u = Tr(e, _)))
              : (u = Tr(e, _)),
            (h = parseFloat(u)),
            (b = c === "string" && f.charAt(1) === "=" && f.substr(0, 2)),
            b && (f = f.substr(2)),
            (d = parseFloat(f)),
            _ in gr &&
              (_ === "autoAlpha" &&
                (h === 1 && Tr(e, "visibility") === "hidden" && d && (h = 0),
                k.push("visibility", 0, o.visibility),
                Ir(
                  this,
                  o,
                  "visibility",
                  h ? "inherit" : "hidden",
                  d ? "inherit" : "hidden",
                  !d
                )),
              _ !== "scale" &&
                _ !== "transform" &&
                ((_ = gr[_]), ~_.indexOf(",") && (_ = _.split(",")[0]))),
            (C = _ in Or),
            C)
          ) {
            if (
              (this.styles.save(_),
              c === "string" &&
                f.substring(0, 6) === "var(--" &&
                ((f = Jt(e, f.substring(4, f.indexOf(")")))),
                (d = parseFloat(f))),
              v ||
                ((x = e._gsap),
                (x.renderTransform && !r.parseTransform) ||
                  gn(e, r.parseTransform),
                (P = r.smoothOrigin !== !1 && x.smooth),
                (v = this._pt =
                  new Rt(this._pt, o, De, 0, 1, x.renderTransform, x, 0, -1)),
                (v.dep = 1)),
              _ === "scale")
            )
              (this._pt = new Rt(
                this._pt,
                x,
                "scaleY",
                x.scaleY,
                (b ? Si(x.scaleY, b + d) : d) - x.scaleY || 0,
                Ls
              )),
                (this._pt.u = 0),
                s.push("scaleY", _),
                (_ += "X");
            else if (_ === "transformOrigin") {
              k.push(Dt, 0, o[Dt]),
                (f = sf(f)),
                x.svg
                  ? Ys(e, f, 0, P, 0, this)
                  : ((T = parseFloat(f.split(" ")[2]) || 0),
                    T !== x.zOrigin && Ir(this, x, "zOrigin", x.zOrigin, T),
                    Ir(this, o, _, Zn(u), Zn(f)));
              continue;
            } else if (_ === "svgOrigin") {
              Ys(e, f, 1, P, 0, this);
              continue;
            } else if (_ in ml) {
              uf(this, x, _, h, b ? Si(h, b + f) : f);
              continue;
            } else if (_ === "smoothOrigin") {
              Ir(this, x, "smooth", x.smooth, f);
              continue;
            } else if (_ === "force3D") {
              x[_] = f;
              continue;
            } else if (_ === "transform") {
              ff(this, f, e);
              continue;
            }
          } else _ in o || (_ = zi(_) || _);
          if (C || ((d || d === 0) && (h || h === 0) && !Vu.test(f) && _ in o))
            (m = (u + "").substr((h + "").length)),
              d || (d = 0),
              (T = pt(f) || (_ in Vt.units ? Vt.units[_] : m)),
              m !== T && (h = Xr(e, _, u, T)),
              (this._pt = new Rt(
                this._pt,
                C ? x : o,
                _,
                h,
                (b ? Si(h, b + d) : d) - h,
                !C && (T === "px" || _ === "zIndex") && r.autoRound !== !1
                  ? qu
                  : Ls
              )),
              (this._pt.u = T || 0),
              m !== T && T !== "%" && ((this._pt.b = u), (this._pt.r = Hu));
          else if (_ in o) nf.call(this, e, _, u, b ? b + f : f);
          else if (_ in e) this.add(e, _, u || e[_], b ? b + f : f, i, n);
          else if (_ !== "parseTransform") {
            so(_, f);
            continue;
          }
          C ||
            (_ in o
              ? k.push(_, 0, o[_])
              : typeof e[_] == "function"
              ? k.push(_, 2, e[_]())
              : k.push(_, 1, u || e[_])),
            s.push(_);
        }
      }
    S && ll(this);
  },
  render: function (e, r) {
    if (r.tween._time || !mo())
      for (var t = r._pt; t; ) t.r(e, t.d), (t = t._next);
    else r.styles.revert();
  },
  get: Tr,
  aliases: gr,
  getSetter: function (e, r, t) {
    var i = gr[r];
    return (
      i && i.indexOf(",") < 0 && (r = i),
      r in Or && r !== Dt && (e._gsap.x || Tr(e, "x"))
        ? t && Lo === t
          ? r === "scale"
            ? Qu
            : Ku
          : (Lo = t || {}) && (r === "scale" ? Zu : Ju)
        : e.style && !ro(e.style[r])
        ? Gu
        : ~r.indexOf("-")
        ? ju
        : _o(e, r)
    );
  },
  core: { _removeProperty: li, _getMatrix: vo },
};
At.utils.checkPrefix = zi;
At.core.getStyleSaver = dl;
(function (a, e, r, t) {
  var i = Mt(a + "," + e + "," + r, function (n) {
    Or[n] = 1;
  });
  Mt(e, function (n) {
    (Vt.units[n] = "deg"), (ml[n] = 1);
  }),
    (gr[i[13]] = a + "," + e),
    Mt(t, function (n) {
      var s = n.split(":");
      gr[s[1]] = i[s[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Mt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (a) {
    Vt.units[a] = "px";
  }
);
At.registerPlugin(xl);
var Pe = At.registerPlugin(xl) || At;
Pe.core.Tween;
function cf(a, e) {
  for (var r = 0; r < e.length; r++) {
    var t = e[r];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      "value" in t && (t.writable = !0),
      Object.defineProperty(a, t.key, t);
  }
}
function hf(a, e, r) {
  return e && cf(a.prototype, e), a;
}
/*!
 * ScrollSmoother 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ge,
  Tn,
  wt,
  Ar,
  Ui,
  wr,
  Kr,
  Ho,
  ee,
  _r,
  Sn,
  qo,
  Go,
  jo,
  Ko,
  wl = function () {
    return typeof window < "u";
  },
  bl = function () {
    return ge || (wl() && (ge = window.gsap) && ge.registerPlugin && ge);
  },
  df = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Rr = function (e) {
    return ee.maxScroll(e || wt);
  },
  _f = function (e, r) {
    var t = e.parentNode || Ui,
      i = e.getBoundingClientRect(),
      n = t.getBoundingClientRect(),
      s = n.top - i.top,
      o = n.bottom - i.bottom,
      l = (Math.abs(s) > Math.abs(o) ? s : o) / (1 - r),
      u = -l * r,
      f,
      d;
    return (
      l > 0 &&
        ((f = n.height / (wt.innerHeight + n.height)),
        (d =
          f === 0.5
            ? n.height * 2
            : Math.min(n.height, Math.abs((-l * f) / (2 * f - 1))) *
              2 *
              (r || 1)),
        (u += r ? -d * r : -d / 2),
        (l += d)),
      { change: l, offset: u }
    );
  },
  pf = function (e) {
    var r = Ar.querySelector(".ScrollSmoother-wrapper");
    return (
      r ||
        ((r = Ar.createElement("div")),
        r.classList.add("ScrollSmoother-wrapper"),
        e.parentNode.insertBefore(r, e),
        r.appendChild(e)),
      r
    );
  },
  ui = (function () {
    function a(e) {
      var r = this;
      Tn ||
        a.register(ge) ||
        console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        (e = this.vars = e || {}),
        _r && _r.kill(),
        (_r = this),
        jo(this);
      var t = e,
        i = t.smoothTouch,
        n = t.onUpdate,
        s = t.onStop,
        o = t.smooth,
        l = t.onFocusIn,
        u = t.normalizeScroll,
        f = t.wholePixels,
        d,
        h,
        c,
        p,
        _,
        m,
        T,
        b,
        C,
        v,
        x,
        P,
        S,
        k,
        O = this,
        M = e.effectsPrefix || "",
        Y = ee.getScrollFunc(wt),
        E =
          ee.isTouch === 1
            ? i === !0
              ? 0.8
              : parseFloat(i) || 0
            : o === 0 || o === !1
            ? 0
            : parseFloat(o) || 0.8,
        F = (E && +e.speed) || 1,
        I = 0,
        U = 0,
        $ = 1,
        L = qo(0),
        j = function () {
          return L.update(-I);
        },
        V = { y: 0 },
        g = function () {
          return (d.style.overflow = "visible");
        },
        te,
        ce = function (y) {
          y.update();
          var R = y.getTween();
          R && (R.pause(), (R._time = R._dur), (R._tTime = R._tDur)),
            (te = !1),
            y.animation.progress(y.progress, !0);
        },
        Te = function (y, R) {
          ((y !== I && !v) || R) &&
            (f && (y = Math.round(y)),
            E &&
              ((d.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                y +
                ", 0, 1)"),
              (d._gsap.y = y + "px")),
            (U = y - I),
            (I = y),
            ee.isUpdating || a.isRefreshing || ee.update());
        },
        he = function (y) {
          return arguments.length
            ? (y < 0 && (y = 0),
              (V.y = -y),
              (te = !0),
              v ? (I = -y) : Te(-y),
              ee.isRefreshing ? p.update() : Y(y / F),
              this)
            : -I;
        },
        Ae =
          typeof ResizeObserver < "u" &&
          e.autoResize !== !1 &&
          new ResizeObserver(function () {
            if (!ee.isRefreshing) {
              var D = Rr(h) * F;
              D < -I && he(D), Ko.restart(!0);
            }
          }),
        Ve,
        Oe = function (y) {
          (h.scrollTop = 0),
            !(
              (y.target.contains && y.target.contains(h)) ||
              (l && l(r, y) === !1)
            ) &&
              (ee.isInViewport(y.target) ||
                y.target === Ve ||
                r.scrollTo(y.target, !1, "center center"),
              (Ve = y.target));
        },
        je = function (y, R) {
          if (y < R.start) return y;
          var B = isNaN(R.ratio) ? 1 : R.ratio,
            H = R.end - R.start,
            K = y - R.start,
            ie = R.offset || 0,
            Ie = R.pins || [],
            J = Ie.offset || 0,
            we =
              (R._startClamp && R.start <= 0) || (R.pins && R.pins.offset)
                ? 0
                : R._endClamp && R.end === Rr()
                ? 1
                : 0.5;
          return (
            Ie.forEach(function (de) {
              (H -= de.distance), de.nativeStart <= y && (K -= de.distance);
            }),
            J && (K *= (H - J / B) / H),
            y + (K - ie * we) / B - K
          );
        },
        Ke = function D(y, R, B) {
          B || (y.pins.length = y.pins.offset = 0);
          var H = y.pins,
            K = y.markers,
            ie,
            Ie,
            J,
            we,
            de,
            oe,
            Ue,
            N;
          for (Ue = 0; Ue < R.length; Ue++)
            if (
              ((N = R[Ue]),
              y.trigger &&
                N.trigger &&
                y !== N &&
                (N.trigger === y.trigger ||
                  N.pinnedContainer === y.trigger ||
                  y.trigger.contains(N.trigger)) &&
                ((de = N._startNative || N._startClamp || N.start),
                (oe = N._endNative || N._endClamp || N.end),
                (J = je(de, y)),
                (we = N.pin && oe > 0 ? J + (oe - de) : je(oe, y)),
                N.setPositions(
                  J,
                  we,
                  !0,
                  (N._startClamp ? Math.max(0, J) : J) - de
                ),
                N.markerStart &&
                  K.push(
                    ge.quickSetter([N.markerStart, N.markerEnd], "y", "px")
                  ),
                N.pin && N.end > 0 && !B))
            ) {
              if (
                ((ie = N.end - N.start),
                (Ie = y._startClamp && N.start < 0),
                Ie)
              ) {
                if (y.start > 0) {
                  y.setPositions(0, y.end + (y._startNative - y.start), !0),
                    D(y, R);
                  return;
                }
                (ie += N.start), (H.offset = -N.start);
              }
              H.push({
                start: N.start,
                nativeStart: de,
                end: N.end,
                distance: ie,
                trig: N,
              }),
                y.setPositions(y.start, y.end + (Ie ? -N.start : ie), !0);
            }
        },
        tr = function (y, R) {
          _.forEach(function (B) {
            return Ke(B, y, R);
          });
        },
        Qe = function () {
          (Ui = Ar.documentElement),
            (wr = Ar.body),
            g(),
            requestAnimationFrame(g),
            _ &&
              (ee.getAll().forEach(function (y) {
                (y._startNative = y.start), (y._endNative = y.end);
              }),
              _.forEach(function (y) {
                var R = y._startClamp || y.start,
                  B = y.autoSpeed
                    ? Math.min(Rr(), y.end)
                    : R + Math.abs((y.end - R) / y.ratio),
                  H = B - y.end;
                if (((R -= H / 2), (B -= H / 2), R > B)) {
                  var K = R;
                  (R = B), (B = K);
                }
                y._startClamp && R < 0
                  ? ((B = y.ratio < 0 ? Rr() : y.end / y.ratio),
                    (H = B - y.end),
                    (R = 0))
                  : (y.ratio < 0 || (y._endClamp && B >= Rr())) &&
                    ((B = Rr()),
                    (R =
                      y.ratio < 0 || y.ratio > 1
                        ? 0
                        : B - (B - y.start) / y.ratio),
                    (H = (B - R) * y.ratio - (y.end - y.start))),
                  (y.offset = H || 1e-4),
                  (y.pins.length = y.pins.offset = 0),
                  y.setPositions(R, B, !0);
              }),
              tr(ee.sort())),
            L.reset();
        },
        Ze = function () {
          return ee.addEventListener("refresh", Qe);
        },
        le = function () {
          return (
            _ &&
            _.forEach(function (y) {
              return y.vars.onRefresh(y);
            })
          );
        },
        Ee = function () {
          return (
            _ &&
              _.forEach(function (y) {
                return y.vars.onRefreshInit(y);
              }),
            le
          );
        },
        nt = function (y, R, B, H) {
          return function () {
            var K = typeof R == "function" ? R(B, H) : R;
            K ||
              K === 0 ||
              (K = H.getAttribute("data-" + M + y) || (y === "speed" ? 1 : 0)),
              H.setAttribute("data-" + M + y, K);
            var ie = (K + "").substr(0, 6) === "clamp(";
            return { clamp: ie, value: ie ? K.substr(6, K.length - 7) : K };
          };
        },
        yt = function (y, R, B, H, K) {
          K = (typeof K == "function" ? K(H, y) : K) || 0;
          var ie = nt("speed", R, H, y),
            Ie = nt("lag", B, H, y),
            J = ge.getProperty(y, "y"),
            we = y._gsap,
            de,
            oe,
            Ue,
            N,
            Er,
            kt,
            Ft = [],
            xr = function () {
              (R = ie()),
                (B = parseFloat(Ie().value)),
                (de = parseFloat(R.value) || 1),
                (Ue = R.value === "auto"),
                (Er =
                  Ue || (oe && oe._startClamp && oe.start <= 0) || Ft.offset
                    ? 0
                    : oe && oe._endClamp && oe.end === Rr()
                    ? 1
                    : 0.5),
                N && N.kill(),
                (N =
                  B &&
                  ge.to(y, { ease: Sn, overwrite: !1, y: "+=0", duration: B })),
                oe && ((oe.ratio = de), (oe.autoSpeed = Ue));
            },
            qt = function () {
              (we.y = J + "px"), we.renderTransform(1), xr();
            },
            rr = [],
            G = 0,
            ar = function (pe) {
              if (Ue) {
                qt();
                var Se = _f(y, Ho(0, 1, -pe.start / (pe.end - pe.start)));
                (G = Se.change), (kt = Se.offset);
              } else
                (kt = Ft.offset || 0),
                  (G = (pe.end - pe.start - kt) * (1 - de));
              Ft.forEach(function (zt) {
                return (G -= zt.distance * (1 - de));
              }),
                (pe.offset = G || 0.001),
                pe.vars.onUpdate(pe),
                N && N.progress(1);
            };
          return (
            xr(),
            (de !== 1 || Ue || N) &&
              ((oe = ee.create({
                trigger: Ue ? y.parentNode : y,
                start: function () {
                  return R.clamp
                    ? "clamp(top bottom+=" + K + ")"
                    : "top bottom+=" + K;
                },
                end: function () {
                  return R.value < 0
                    ? "max"
                    : R.clamp
                    ? "clamp(bottom top-=" + K + ")"
                    : "bottom top-=" + K;
                },
                scroller: h,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: qt,
                onRefresh: ar,
                onKill: function (pe) {
                  var Se = _.indexOf(pe);
                  Se >= 0 && _.splice(Se, 1), qt();
                },
                onUpdate: function (pe) {
                  var Se = J + G * (pe.progress - Er),
                    zt = Ft.length,
                    ir = 0,
                    Ye,
                    nr,
                    q;
                  if (pe.offset) {
                    if (zt) {
                      for (nr = -I, q = pe.end; zt--; ) {
                        if (
                          ((Ye = Ft[zt]),
                          Ye.trig.isActive || (nr >= Ye.start && nr <= Ye.end))
                        ) {
                          N &&
                            ((Ye.trig.progress +=
                              Ye.trig.direction < 0 ? 0.001 : -0.001),
                            Ye.trig.update(0, 0, 1),
                            N.resetTo("y", parseFloat(we.y), -U, !0),
                            $ && N.progress(1));
                          return;
                        }
                        nr > Ye.end && (ir += Ye.distance), (q -= Ye.distance);
                      }
                      Se =
                        J +
                        ir +
                        G *
                          ((ge.utils.clamp(pe.start, pe.end, nr) -
                            pe.start -
                            ir) /
                            (q - pe.start) -
                            Er);
                    }
                    rr.length &&
                      !Ue &&
                      rr.forEach(function (X) {
                        return X(Se - ir);
                      }),
                      (Se = df(Se + kt)),
                      N
                        ? (N.resetTo("y", Se, -U, !0), $ && N.progress(1))
                        : ((we.y = Se + "px"), we.renderTransform(1));
                  }
                },
              })),
              ar(oe),
              (ge.core.getCache(oe.trigger).stRevert = Ee),
              (oe.startY = J),
              (oe.pins = Ft),
              (oe.markers = rr),
              (oe.ratio = de),
              (oe.autoSpeed = Ue),
              (y.style.willChange = "transform")),
            oe
          );
        };
      Ze(),
        ee.addEventListener("killAll", Ze),
        ge.delayedCall(0.5, function () {
          return ($ = 0);
        }),
        (this.scrollTop = he),
        (this.scrollTo = function (D, y, R) {
          var B = ge.utils.clamp(
            0,
            Rr(),
            isNaN(D) ? r.offset(D, R, !!y && !v) : +D
          );
          y
            ? v
              ? ge.to(r, {
                  duration: E,
                  scrollTop: B,
                  overwrite: "auto",
                  ease: Sn,
                })
              : Y(B)
            : he(B);
        }),
        (this.offset = function (D, y, R) {
          D = Kr(D)[0];
          var B = D.style.cssText,
            H = ee.create({ trigger: D, start: y || "top top" }),
            K;
          return (
            _ && ($ ? ee.refresh() : tr([H], !0)),
            (K = H.start / (R ? F : 1)),
            H.kill(!1),
            (D.style.cssText = B),
            (ge.core.getCache(D).uncache = 1),
            K
          );
        });
      function w() {
        return (
          (c = d.clientHeight),
          (d.style.overflow = "visible"),
          (wr.style.height = wt.innerHeight + (c - wt.innerHeight) / F + "px"),
          c - wt.innerHeight
        );
      }
      (this.content = function (D) {
        if (arguments.length) {
          var y =
            Kr(D || "#smooth-content")[0] ||
            console.warn("ScrollSmoother needs a valid content element.") ||
            wr.children[0];
          return (
            y !== d &&
              ((d = y),
              (C = d.getAttribute("style") || ""),
              Ae && Ae.observe(d),
              ge.set(d, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0",
              }),
              E || ge.set(d, { clearProps: "transform" })),
            this
          );
        }
        return d;
      }),
        (this.wrapper = function (D) {
          return arguments.length
            ? ((h = Kr(D || "#smooth-wrapper")[0] || pf(d)),
              (b = h.getAttribute("style") || ""),
              w(),
              ge.set(
                h,
                E
                  ? {
                      overflow: "hidden",
                      position: "fixed",
                      height: "100%",
                      width: "100%",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }
                  : {
                      overflow: "visible",
                      position: "relative",
                      width: "100%",
                      height: "auto",
                      top: "auto",
                      bottom: "auto",
                      left: "auto",
                      right: "auto",
                    }
              ),
              this)
            : h;
        }),
        (this.effects = function (D, y) {
          var R;
          if ((_ || (_ = []), !D)) return _.slice(0);
          (D = Kr(D)),
            D.forEach(function (de) {
              for (var oe = _.length; oe--; )
                _[oe].trigger === de && _[oe].kill();
            }),
            (y = y || {});
          var B = y,
            H = B.speed,
            K = B.lag,
            ie = B.effectsPadding,
            Ie = [],
            J,
            we;
          for (J = 0; J < D.length; J++)
            (we = yt(D[J], H, K, J, ie)), we && Ie.push(we);
          return (
            (R = _).push.apply(R, Ie), y.refresh !== !1 && ee.refresh(), Ie
          );
        }),
        (this.sections = function (D, y) {
          var R;
          if ((m || (m = []), !D)) return m.slice(0);
          var B = Kr(D).map(function (H) {
            return ee.create({
              trigger: H,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: function (ie) {
                (H.style.opacity = ie.isActive ? "1" : "0"),
                  (H.style.pointerEvents = ie.isActive ? "all" : "none");
              },
            });
          });
          return y && y.add ? (R = m).push.apply(R, B) : (m = B.slice(0)), B;
        }),
        this.content(e.content),
        this.wrapper(e.wrapper),
        (this.render = function (D) {
          return Te(D || D === 0 ? D : I);
        }),
        (this.getVelocity = function () {
          return L.getVelocity(-I);
        }),
        ee.scrollerProxy(h, {
          scrollTop: he,
          scrollHeight: function () {
            return w() && wr.scrollHeight;
          },
          fixedMarkers: e.fixedMarkers !== !1 && !!E,
          content: d,
          getBoundingClientRect: function () {
            return {
              top: 0,
              left: 0,
              width: wt.innerWidth,
              height: wt.innerHeight,
            };
          },
        }),
        ee.defaults({ scroller: h });
      var ut = ee.getAll().filter(function (D) {
        return D.scroller === wt || D.scroller === h;
      });
      ut.forEach(function (D) {
        return D.revert(!0, !0);
      }),
        (p = ee.create({
          animation: ge.fromTo(
            V,
            {
              y: function () {
                return (k = 0), 0;
              },
            },
            {
              y: function () {
                return (k = 1), -w();
              },
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function () {
                if (k) {
                  var y = te;
                  y && (ce(p), (V.y = I)), Te(V.y, y), j(), n && !v && n(O);
                }
              },
            }
          ),
          onRefreshInit: function (y) {
            if (!a.isRefreshing) {
              if (((a.isRefreshing = !0), _)) {
                var R = ee.getAll().filter(function (H) {
                  return !!H.pin;
                });
                _.forEach(function (H) {
                  H.vars.pinnedContainer ||
                    R.forEach(function (K) {
                      if (K.pin.contains(H.trigger)) {
                        var ie = H.vars;
                        (ie.pinnedContainer = K.pin),
                          (H.vars = null),
                          H.init(ie, H.animation);
                      }
                    });
                });
              }
              var B = y.getTween();
              (S = B && B._end > B._dp._time),
                (P = I),
                (V.y = 0),
                E &&
                  (ee.isTouch === 1 && (h.style.position = "absolute"),
                  (h.scrollTop = 0),
                  ee.isTouch === 1 && (h.style.position = "fixed"));
            }
          },
          onRefresh: function (y) {
            y.animation.invalidate(),
              y.setPositions(y.start, w() / F),
              S || ce(y),
              (V.y = -Y() * F),
              Te(V.y),
              $ ||
                (S && (te = !1),
                y.animation.progress(ge.utils.clamp(0, 1, P / F / -y.end))),
              S && ((y.progress -= 0.001), y.update()),
              (a.isRefreshing = !1);
          },
          id: "ScrollSmoother",
          scroller: wt,
          invalidateOnRefresh: !0,
          start: 0,
          refreshPriority: -9999,
          end: function () {
            return w() / F;
          },
          onScrubComplete: function () {
            L.reset(), s && s(r);
          },
          scrub: E || !0,
        })),
        (this.smooth = function (D) {
          return (
            arguments.length &&
              ((E = D || 0), (F = (E && +e.speed) || 1), p.scrubDuration(D)),
            p.getTween() ? p.getTween().duration() : 0
          );
        }),
        p.getTween() && (p.getTween().vars.ease = e.ease || Sn),
        (this.scrollTrigger = p),
        e.effects &&
          this.effects(
            e.effects === !0
              ? "[data-" + M + "speed], [data-" + M + "lag]"
              : e.effects,
            { effectsPadding: e.effectsPadding, refresh: !1 }
          ),
        e.sections &&
          this.sections(e.sections === !0 ? "[data-section]" : e.sections),
        ut.forEach(function (D) {
          (D.vars.scroller = h), D.revert(!1, !0), D.init(D.vars, D.animation);
        }),
        (this.paused = function (D, y) {
          return arguments.length
            ? (!!v !== D &&
                (D
                  ? (p.getTween() && p.getTween().pause(),
                    Y(-I / F),
                    L.reset(),
                    (x = ee.normalizeScroll()),
                    x && x.disable(),
                    (v = ee.observe({
                      preventDefault: !0,
                      type: "wheel,touch,scroll",
                      debounce: !1,
                      allowClicks: !0,
                      onChangeY: function () {
                        return he(-I);
                      },
                    })),
                    (v.nested = Go(Ui, "wheel,touch,scroll", !0, y !== !1)))
                  : (v.nested.kill(),
                    v.kill(),
                    (v = 0),
                    x && x.enable(),
                    (p.progress = (-I / F - p.start) / (p.end - p.start)),
                    ce(p))),
              this)
            : !!v;
        }),
        (this.kill = this.revert =
          function () {
            r.paused(!1), ce(p), p.kill();
            for (var D = (_ || []).concat(m || []), y = D.length; y--; )
              D[y].kill();
            ee.scrollerProxy(h),
              ee.removeEventListener("killAll", Ze),
              ee.removeEventListener("refresh", Qe),
              (h.style.cssText = b),
              (d.style.cssText = C);
            var R = ee.defaults({});
            R && R.scroller === h && ee.defaults({ scroller: wt }),
              r.normalizer && ee.normalizeScroll(!1),
              clearInterval(T),
              (_r = null),
              Ae && Ae.disconnect(),
              wr.style.removeProperty("height"),
              wt.removeEventListener("focusin", Oe);
          }),
        (this.refresh = function (D, y) {
          return p.refresh(D, y);
        }),
        u &&
          (this.normalizer = ee.normalizeScroll(
            u === !0 ? { debounce: !0, content: !E && d } : u
          )),
        ee.config(e),
        "scrollBehavior" in wt.getComputedStyle(wr) &&
          ge.set([wr, Ui], { scrollBehavior: "auto" }),
        wt.addEventListener("focusin", Oe),
        (T = setInterval(j, 250)),
        Ar.readyState === "loading" ||
          requestAnimationFrame(function () {
            return ee.refresh();
          });
    }
    return (
      (a.register = function (r) {
        return (
          Tn ||
            ((ge = r || bl()),
            wl() &&
              window.document &&
              ((wt = window),
              (Ar = document),
              (Ui = Ar.documentElement),
              (wr = Ar.body)),
            ge &&
              ((Kr = ge.utils.toArray),
              (Ho = ge.utils.clamp),
              (Sn = ge.parseEase("expo")),
              (jo = ge.core.context || function () {}),
              (ee = ge.core.globals().ScrollTrigger),
              ge.core.globals("ScrollSmoother", a),
              wr &&
                ee &&
                ((Ko = ge
                  .delayedCall(0.2, function () {
                    return ee.isRefreshing || (_r && _r.refresh());
                  })
                  .pause()),
                (qo = ee.core._getVelocityProp),
                (Go = ee.core._inputObserver),
                (a.refresh = ee.refresh),
                (Tn = 1)))),
          Tn
        );
      }),
      hf(a, [
        {
          key: "progress",
          get: function () {
            return this.scrollTrigger
              ? this.scrollTrigger.animation._time / 100
              : 0;
          },
        },
      ]),
      a
    );
  })();
ui.version = "3.13.0";
ui.create = function (a) {
  return _r && a && _r.content() === Kr(a.content)[0] ? _r : new ui(a);
};
ui.get = function () {
  return _r;
};
bl() && ge.registerPlugin(ui);
function gf(a, e) {
  for (var r = 0; r < e.length; r++) {
    var t = e[r];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      "value" in t && (t.writable = !0),
      Object.defineProperty(a, t.key, t);
  }
}
function mf(a, e, r) {
  return e && gf(a.prototype, e), a;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var at,
  Yn,
  Wt,
  Lr,
  Nr,
  ki,
  Tl,
  Qr,
  en,
  Sl,
  Cr,
  or,
  Cl,
  Pl = function () {
    return (
      at ||
      (typeof window < "u" && (at = window.gsap) && at.registerPlugin && at)
    );
  },
  kl = 1,
  Ti = [],
  se = [],
  yr = [],
  tn = Date.now,
  $s = function (e, r) {
    return r;
  },
  yf = function () {
    var e = en.core,
      r = e.bridge || {},
      t = e._scrollers,
      i = e._proxies;
    t.push.apply(t, se),
      i.push.apply(i, yr),
      (se = t),
      (yr = i),
      ($s = function (s, o) {
        return r[s](o);
      });
  },
  $r = function (e, r) {
    return ~yr.indexOf(e) && yr[yr.indexOf(e) + 1][r];
  },
  rn = function (e) {
    return !!~Sl.indexOf(e);
  },
  xt = function (e, r, t, i, n) {
    return e.addEventListener(r, t, { passive: i !== !1, capture: !!n });
  },
  vt = function (e, r, t, i) {
    return e.removeEventListener(r, t, !!i);
  },
  Cn = "scrollLeft",
  Pn = "scrollTop",
  Ws = function () {
    return (Cr && Cr.isPressed) || se.cache++;
  },
  Jn = function (e, r) {
    var t = function i(n) {
      if (n || n === 0) {
        kl && (Wt.history.scrollRestoration = "manual");
        var s = Cr && Cr.isPressed;
        (n = i.v = Math.round(n) || (Cr && Cr.iOS ? 1 : 0)),
          e(n),
          (i.cacheID = se.cache),
          s && $s("ss", n);
      } else
        (r || se.cache !== i.cacheID || $s("ref")) &&
          ((i.cacheID = se.cache), (i.v = e()));
      return i.v + i.offset;
    };
    return (t.offset = 0), e && t;
  },
  Pt = {
    s: Cn,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Jn(function (a) {
      return arguments.length
        ? Wt.scrollTo(a, Ge.sc())
        : Wt.pageXOffset || Lr[Cn] || Nr[Cn] || ki[Cn] || 0;
    }),
  },
  Ge = {
    s: Pn,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Pt,
    sc: Jn(function (a) {
      return arguments.length
        ? Wt.scrollTo(Pt.sc(), a)
        : Wt.pageYOffset || Lr[Pn] || Nr[Pn] || ki[Pn] || 0;
    }),
  },
  Ot = function (e, r) {
    return (
      ((r && r._ctx && r._ctx.selector) || at.utils.toArray)(e)[0] ||
      (typeof e == "string" && at.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  vf = function (e, r) {
    for (var t = r.length; t--; ) if (r[t] === e || r[t].contains(e)) return !0;
    return !1;
  },
  Vr = function (e, r) {
    var t = r.s,
      i = r.sc;
    rn(e) && (e = Lr.scrollingElement || Nr);
    var n = se.indexOf(e),
      s = i === Ge.sc ? 1 : 2;
    !~n && (n = se.push(e) - 1), se[n + s] || xt(e, "scroll", Ws);
    var o = se[n + s],
      l =
        o ||
        (se[n + s] =
          Jn($r(e, t), !0) ||
          (rn(e)
            ? i
            : Jn(function (u) {
                return arguments.length ? (e[t] = u) : e[t];
              })));
    return (
      (l.target = e),
      o || (l.smooth = at.getProperty(e, "scrollBehavior") === "smooth"),
      l
    );
  },
  Xs = function (e, r, t) {
    var i = e,
      n = e,
      s = tn(),
      o = s,
      l = r || 50,
      u = Math.max(500, l * 3),
      f = function (p, _) {
        var m = tn();
        _ || m - s > l
          ? ((n = i), (i = p), (o = s), (s = m))
          : t
          ? (i += p)
          : (i = n + ((p - n) / (m - o)) * (s - o));
      },
      d = function () {
        (n = i = t ? 0 : i), (o = s = 0);
      },
      h = function (p) {
        var _ = o,
          m = n,
          T = tn();
        return (
          (p || p === 0) && p !== i && f(p),
          s === o || T - o > u
            ? 0
            : ((i + (t ? m : -m)) / ((t ? T : s) - _)) * 1e3
        );
      };
    return { update: f, reset: d, getVelocity: h };
  },
  Yi = function (e, r) {
    return (
      r && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Qo = function (e) {
    var r = Math.max.apply(Math, e),
      t = Math.min.apply(Math, e);
    return Math.abs(r) >= Math.abs(t) ? r : t;
  },
  Ol = function () {
    (en = at.core.globals().ScrollTrigger), en && en.core && yf();
  },
  El = function (e) {
    return (
      (at = e || Pl()),
      !Yn &&
        at &&
        typeof document < "u" &&
        document.body &&
        ((Wt = window),
        (Lr = document),
        (Nr = Lr.documentElement),
        (ki = Lr.body),
        (Sl = [Wt, Lr, Nr, ki]),
        at.utils.clamp,
        (Cl = at.core.context || function () {}),
        (Qr = "onpointerenter" in ki ? "pointer" : "mouse"),
        (Tl = Be.isTouch =
          Wt.matchMedia &&
          Wt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Wt ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (or = Be.eventTypes =
          (
            "ontouchstart" in Nr
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Nr
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (kl = 0);
        }, 500),
        Ol(),
        (Yn = 1)),
      Yn
    );
  };
Pt.op = Ge;
se.cache = 0;
var Be = (function () {
  function a(r) {
    this.init(r);
  }
  var e = a.prototype;
  return (
    (e.init = function (t) {
      Yn || El(at) || console.warn("Please gsap.registerPlugin(Observer)"),
        en || Ol();
      var i = t.tolerance,
        n = t.dragMinimum,
        s = t.type,
        o = t.target,
        l = t.lineHeight,
        u = t.debounce,
        f = t.preventDefault,
        d = t.onStop,
        h = t.onStopDelay,
        c = t.ignore,
        p = t.wheelSpeed,
        _ = t.event,
        m = t.onDragStart,
        T = t.onDragEnd,
        b = t.onDrag,
        C = t.onPress,
        v = t.onRelease,
        x = t.onRight,
        P = t.onLeft,
        S = t.onUp,
        k = t.onDown,
        O = t.onChangeX,
        M = t.onChangeY,
        Y = t.onChange,
        E = t.onToggleX,
        F = t.onToggleY,
        I = t.onHover,
        U = t.onHoverEnd,
        $ = t.onMove,
        L = t.ignoreCheck,
        j = t.isNormalizer,
        V = t.onGestureStart,
        g = t.onGestureEnd,
        te = t.onWheel,
        ce = t.onEnable,
        Te = t.onDisable,
        he = t.onClick,
        Ae = t.scrollSpeed,
        Ve = t.capture,
        Oe = t.allowClicks,
        je = t.lockAxis,
        Ke = t.onLockAxis;
      (this.target = o = Ot(o) || Nr),
        (this.vars = t),
        c && (c = at.utils.toArray(c)),
        (i = i || 1e-9),
        (n = n || 0),
        (p = p || 1),
        (Ae = Ae || 1),
        (s = s || "wheel,touch,pointer"),
        (u = u !== !1),
        l || (l = parseFloat(Wt.getComputedStyle(ki).lineHeight) || 22);
      var tr,
        Qe,
        Ze,
        le,
        Ee,
        nt,
        yt,
        w = this,
        ut = 0,
        D = 0,
        y = t.passive || (!f && t.passive !== !1),
        R = Vr(o, Pt),
        B = Vr(o, Ge),
        H = R(),
        K = B(),
        ie =
          ~s.indexOf("touch") &&
          !~s.indexOf("pointer") &&
          or[0] === "pointerdown",
        Ie = rn(o),
        J = o.ownerDocument || Lr,
        we = [0, 0, 0],
        de = [0, 0, 0],
        oe = 0,
        Ue = function () {
          return (oe = tn());
        },
        N = function (X, _e) {
          return (
            ((w.event = X) && c && vf(X.target, c)) ||
            (_e && ie && X.pointerType !== "touch") ||
            (L && L(X, _e))
          );
        },
        Er = function () {
          w._vx.reset(), w._vy.reset(), Qe.pause(), d && d(w);
        },
        kt = function () {
          var X = (w.deltaX = Qo(we)),
            _e = (w.deltaY = Qo(de)),
            A = Math.abs(X) >= i,
            Q = Math.abs(_e) >= i;
          Y && (A || Q) && Y(w, X, _e, we, de),
            A &&
              (x && w.deltaX > 0 && x(w),
              P && w.deltaX < 0 && P(w),
              O && O(w),
              E && w.deltaX < 0 != ut < 0 && E(w),
              (ut = w.deltaX),
              (we[0] = we[1] = we[2] = 0)),
            Q &&
              (k && w.deltaY > 0 && k(w),
              S && w.deltaY < 0 && S(w),
              M && M(w),
              F && w.deltaY < 0 != D < 0 && F(w),
              (D = w.deltaY),
              (de[0] = de[1] = de[2] = 0)),
            (le || Ze) &&
              ($ && $(w),
              Ze && (m && Ze === 1 && m(w), b && b(w), (Ze = 0)),
              (le = !1)),
            nt && !(nt = !1) && Ke && Ke(w),
            Ee && (te(w), (Ee = !1)),
            (tr = 0);
        },
        Ft = function (X, _e, A) {
          (we[A] += X),
            (de[A] += _e),
            w._vx.update(X),
            w._vy.update(_e),
            u ? tr || (tr = requestAnimationFrame(kt)) : kt();
        },
        xr = function (X, _e) {
          je &&
            !yt &&
            ((w.axis = yt = Math.abs(X) > Math.abs(_e) ? "x" : "y"), (nt = !0)),
            yt !== "y" && ((we[2] += X), w._vx.update(X, !0)),
            yt !== "x" && ((de[2] += _e), w._vy.update(_e, !0)),
            u ? tr || (tr = requestAnimationFrame(kt)) : kt();
        },
        qt = function (X) {
          if (!N(X, 1)) {
            X = Yi(X, f);
            var _e = X.clientX,
              A = X.clientY,
              Q = _e - w.x,
              W = A - w.y,
              Z = w.isDragging;
            (w.x = _e),
              (w.y = A),
              (Z ||
                ((Q || W) &&
                  (Math.abs(w.startX - _e) >= n ||
                    Math.abs(w.startY - A) >= n))) &&
                ((Ze = Z ? 2 : 1), Z || (w.isDragging = !0), xr(Q, W));
          }
        },
        rr = (w.onPress = function (q) {
          N(q, 1) ||
            (q && q.button) ||
            ((w.axis = yt = null),
            Qe.pause(),
            (w.isPressed = !0),
            (q = Yi(q)),
            (ut = D = 0),
            (w.startX = w.x = q.clientX),
            (w.startY = w.y = q.clientY),
            w._vx.reset(),
            w._vy.reset(),
            xt(j ? o : J, or[1], qt, y, !0),
            (w.deltaX = w.deltaY = 0),
            C && C(w));
        }),
        G = (w.onRelease = function (q) {
          if (!N(q, 1)) {
            vt(j ? o : J, or[1], qt, !0);
            var X = !isNaN(w.y - w.startY),
              _e = w.isDragging,
              A =
                _e &&
                (Math.abs(w.x - w.startX) > 3 || Math.abs(w.y - w.startY) > 3),
              Q = Yi(q);
            !A &&
              X &&
              (w._vx.reset(),
              w._vy.reset(),
              f &&
                Oe &&
                at.delayedCall(0.08, function () {
                  if (tn() - oe > 300 && !q.defaultPrevented) {
                    if (q.target.click) q.target.click();
                    else if (J.createEvent) {
                      var W = J.createEvent("MouseEvents");
                      W.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Wt,
                        1,
                        Q.screenX,
                        Q.screenY,
                        Q.clientX,
                        Q.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        q.target.dispatchEvent(W);
                    }
                  }
                })),
              (w.isDragging = w.isGesturing = w.isPressed = !1),
              d && _e && !j && Qe.restart(!0),
              Ze && kt(),
              T && _e && T(w),
              v && v(w, A);
          }
        }),
        ar = function (X) {
          return (
            X.touches &&
            X.touches.length > 1 &&
            (w.isGesturing = !0) &&
            V(X, w.isDragging)
          );
        },
        Je = function () {
          return (w.isGesturing = !1) || g(w);
        },
        pe = function (X) {
          if (!N(X)) {
            var _e = R(),
              A = B();
            Ft((_e - H) * Ae, (A - K) * Ae, 1),
              (H = _e),
              (K = A),
              d && Qe.restart(!0);
          }
        },
        Se = function (X) {
          if (!N(X)) {
            (X = Yi(X, f)), te && (Ee = !0);
            var _e =
              (X.deltaMode === 1 ? l : X.deltaMode === 2 ? Wt.innerHeight : 1) *
              p;
            Ft(X.deltaX * _e, X.deltaY * _e, 0), d && !j && Qe.restart(!0);
          }
        },
        zt = function (X) {
          if (!N(X)) {
            var _e = X.clientX,
              A = X.clientY,
              Q = _e - w.x,
              W = A - w.y;
            (w.x = _e),
              (w.y = A),
              (le = !0),
              d && Qe.restart(!0),
              (Q || W) && xr(Q, W);
          }
        },
        ir = function (X) {
          (w.event = X), I(w);
        },
        Ye = function (X) {
          (w.event = X), U(w);
        },
        nr = function (X) {
          return N(X) || (Yi(X, f) && he(w));
        };
      (Qe = w._dc = at.delayedCall(h || 0.25, Er).pause()),
        (w.deltaX = w.deltaY = 0),
        (w._vx = Xs(0, 50, !0)),
        (w._vy = Xs(0, 50, !0)),
        (w.scrollX = R),
        (w.scrollY = B),
        (w.isDragging = w.isGesturing = w.isPressed = !1),
        Cl(this),
        (w.enable = function (q) {
          return (
            w.isEnabled ||
              (xt(Ie ? J : o, "scroll", Ws),
              s.indexOf("scroll") >= 0 && xt(Ie ? J : o, "scroll", pe, y, Ve),
              s.indexOf("wheel") >= 0 && xt(o, "wheel", Se, y, Ve),
              ((s.indexOf("touch") >= 0 && Tl) || s.indexOf("pointer") >= 0) &&
                (xt(o, or[0], rr, y, Ve),
                xt(J, or[2], G),
                xt(J, or[3], G),
                Oe && xt(o, "click", Ue, !0, !0),
                he && xt(o, "click", nr),
                V && xt(J, "gesturestart", ar),
                g && xt(J, "gestureend", Je),
                I && xt(o, Qr + "enter", ir),
                U && xt(o, Qr + "leave", Ye),
                $ && xt(o, Qr + "move", zt)),
              (w.isEnabled = !0),
              (w.isDragging = w.isGesturing = w.isPressed = le = Ze = !1),
              w._vx.reset(),
              w._vy.reset(),
              (H = R()),
              (K = B()),
              q && q.type && rr(q),
              ce && ce(w)),
            w
          );
        }),
        (w.disable = function () {
          w.isEnabled &&
            (Ti.filter(function (q) {
              return q !== w && rn(q.target);
            }).length || vt(Ie ? J : o, "scroll", Ws),
            w.isPressed &&
              (w._vx.reset(), w._vy.reset(), vt(j ? o : J, or[1], qt, !0)),
            vt(Ie ? J : o, "scroll", pe, Ve),
            vt(o, "wheel", Se, Ve),
            vt(o, or[0], rr, Ve),
            vt(J, or[2], G),
            vt(J, or[3], G),
            vt(o, "click", Ue, !0),
            vt(o, "click", nr),
            vt(J, "gesturestart", ar),
            vt(J, "gestureend", Je),
            vt(o, Qr + "enter", ir),
            vt(o, Qr + "leave", Ye),
            vt(o, Qr + "move", zt),
            (w.isEnabled = w.isPressed = w.isDragging = !1),
            Te && Te(w));
        }),
        (w.kill = w.revert =
          function () {
            w.disable();
            var q = Ti.indexOf(w);
            q >= 0 && Ti.splice(q, 1), Cr === w && (Cr = 0);
          }),
        Ti.push(w),
        j && rn(o) && (Cr = w),
        w.enable(_);
    }),
    mf(a, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    a
  );
})();
Be.version = "3.13.0";
Be.create = function (a) {
  return new Be(a);
};
Be.register = El;
Be.getAll = function () {
  return Ti.slice();
};
Be.getById = function (a) {
  return Ti.filter(function (e) {
    return e.vars.id === a;
  })[0];
};
Pl() && at.registerPlugin(Be);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var z,
  vi,
  ne,
  be,
  Yt,
  me,
  xo,
  es,
  mn,
  nn,
  Hi,
  kn,
  dt,
  ls,
  Vs,
  Tt,
  Zo,
  Jo,
  xi,
  Ml,
  ys,
  Rl,
  bt,
  Us,
  Dl,
  Al,
  Dr,
  Hs,
  wo,
  Oi,
  bo,
  ts,
  qs,
  vs,
  On = 1,
  _t = Date.now,
  xs = _t(),
  er = 0,
  qi = 0,
  ea = function (e, r, t) {
    var i = Nt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (t["_" + r + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
  },
  ta = function (e, r) {
    return r && (!Nt(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  xf = function a() {
    return qi && requestAnimationFrame(a);
  },
  ra = function () {
    return (ls = 1);
  },
  ia = function () {
    return (ls = 0);
  },
  dr = function (e) {
    return e;
  },
  Gi = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Fl = function () {
    return typeof window < "u";
  },
  zl = function () {
    return z || (Fl() && (z = window.gsap) && z.registerPlugin && z);
  },
  fi = function (e) {
    return !!~xo.indexOf(e);
  },
  Il = function (e) {
    return (
      (e === "Height" ? bo : ne["inner" + e]) ||
      Yt["client" + e] ||
      me["client" + e]
    );
  },
  Ll = function (e) {
    return (
      $r(e, "getBoundingClientRect") ||
      (fi(e)
        ? function () {
            return (Un.width = ne.innerWidth), (Un.height = bo), Un;
          }
        : function () {
            return Sr(e);
          })
    );
  },
  wf = function (e, r, t) {
    var i = t.d,
      n = t.d2,
      s = t.a;
    return (s = $r(e, "getBoundingClientRect"))
      ? function () {
          return s()[i];
        }
      : function () {
          return (r ? Il(n) : e["client" + n]) || 0;
        };
  },
  bf = function (e, r) {
    return !r || ~yr.indexOf(e)
      ? Ll(e)
      : function () {
          return Un;
        };
  },
  mr = function (e, r) {
    var t = r.s,
      i = r.d2,
      n = r.d,
      s = r.a;
    return Math.max(
      0,
      (t = "scroll" + i) && (s = $r(e, t))
        ? s() - Ll(e)()[n]
        : fi(e)
        ? (Yt[t] || me[t]) - Il(i)
        : e[t] - e["offset" + i]
    );
  },
  En = function (e, r) {
    for (var t = 0; t < xi.length; t += 3)
      (!r || ~r.indexOf(xi[t + 1])) && e(xi[t], xi[t + 1], xi[t + 2]);
  },
  Nt = function (e) {
    return typeof e == "string";
  },
  gt = function (e) {
    return typeof e == "function";
  },
  ji = function (e) {
    return typeof e == "number";
  },
  Zr = function (e) {
    return typeof e == "object";
  },
  $i = function (e, r, t) {
    return e && e.progress(r ? 0 : 1) && t && e.pause();
  },
  ws = function (e, r) {
    if (e.enabled) {
      var t = e._ctx
        ? e._ctx.add(function () {
            return r(e);
          })
        : r(e);
      t && t.totalTime && (e.callbackAnimation = t);
    }
  },
  pi = Math.abs,
  Nl = "left",
  Bl = "top",
  To = "right",
  So = "bottom",
  si = "width",
  oi = "height",
  sn = "Right",
  on = "Left",
  an = "Top",
  ln = "Bottom",
  $e = "padding",
  jt = "margin",
  Ii = "Width",
  Co = "Height",
  qe = "px",
  Kt = function (e) {
    return ne.getComputedStyle(e);
  },
  Tf = function (e) {
    var r = Kt(e).position;
    e.style.position = r === "absolute" || r === "fixed" ? r : "relative";
  },
  na = function (e, r) {
    for (var t in r) t in e || (e[t] = r[t]);
    return e;
  },
  Sr = function (e, r) {
    var t =
        r &&
        Kt(e)[Vs] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        z
          .to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      i = e.getBoundingClientRect();
    return t && t.progress(0).kill(), i;
  },
  rs = function (e, r) {
    var t = r.d2;
    return e["offset" + t] || e["client" + t] || 0;
  },
  Yl = function (e) {
    var r = [],
      t = e.labels,
      i = e.duration(),
      n;
    for (n in t) r.push(t[n] / i);
    return r;
  },
  Sf = function (e) {
    return function (r) {
      return z.utils.snap(Yl(e), r);
    };
  },
  Po = function (e) {
    var r = z.utils.snap(e),
      t =
        Array.isArray(e) &&
        e.slice(0).sort(function (i, n) {
          return i - n;
        });
    return t
      ? function (i, n, s) {
          s === void 0 && (s = 0.001);
          var o;
          if (!n) return r(i);
          if (n > 0) {
            for (i -= s, o = 0; o < t.length; o++) if (t[o] >= i) return t[o];
            return t[o - 1];
          } else for (o = t.length, i += s; o--; ) if (t[o] <= i) return t[o];
          return t[0];
        }
      : function (i, n, s) {
          s === void 0 && (s = 0.001);
          var o = r(i);
          return !n || Math.abs(o - i) < s || o - i < 0 == n < 0
            ? o
            : r(n < 0 ? i - e : i + e);
        };
  },
  Cf = function (e) {
    return function (r, t) {
      return Po(Yl(e))(r, t.direction);
    };
  },
  Mn = function (e, r, t, i) {
    return t.split(",").forEach(function (n) {
      return e(r, n, i);
    });
  },
  rt = function (e, r, t, i, n) {
    return e.addEventListener(r, t, { passive: !i, capture: !!n });
  },
  tt = function (e, r, t, i) {
    return e.removeEventListener(r, t, !!i);
  },
  Rn = function (e, r, t) {
    (t = t && t.wheelHandler), t && (e(r, "wheel", t), e(r, "touchmove", t));
  },
  sa = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Dn = { toggleActions: "play", anticipatePin: 0 },
  is = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  $n = function (e, r) {
    if (Nt(e)) {
      var t = e.indexOf("="),
        i = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
      ~t && (e.indexOf("%") > t && (i *= r / 100), (e = e.substr(0, t - 1))),
        (e =
          i +
          (e in is
            ? is[e] * r
            : ~e.indexOf("%")
            ? (parseFloat(e) * r) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  An = function (e, r, t, i, n, s, o, l) {
    var u = n.startColor,
      f = n.endColor,
      d = n.fontSize,
      h = n.indent,
      c = n.fontWeight,
      p = be.createElement("div"),
      _ = fi(t) || $r(t, "pinType") === "fixed",
      m = e.indexOf("scroller") !== -1,
      T = _ ? me : t,
      b = e.indexOf("start") !== -1,
      C = b ? u : f,
      v =
        "border-color:" +
        C +
        ";font-size:" +
        d +
        ";color:" +
        C +
        ";font-weight:" +
        c +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (v += "position:" + ((m || l) && _ ? "fixed;" : "absolute;")),
      (m || l || !_) &&
        (v += (i === Ge ? To : So) + ":" + (s + parseFloat(h)) + "px;"),
      o &&
        (v +=
          "box-sizing:border-box;text-align:left;width:" +
          o.offsetWidth +
          "px;"),
      (p._isStart = b),
      p.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")),
      (p.style.cssText = v),
      (p.innerText = r || r === 0 ? e + "-" + r : e),
      T.children[0] ? T.insertBefore(p, T.children[0]) : T.appendChild(p),
      (p._offset = p["offset" + i.op.d2]),
      Wn(p, 0, i, b),
      p
    );
  },
  Wn = function (e, r, t, i) {
    var n = { display: "block" },
      s = t[i ? "os2" : "p2"],
      o = t[i ? "p2" : "os2"];
    (e._isFlipped = i),
      (n[t.a + "Percent"] = i ? -100 : 0),
      (n[t.a] = i ? "1px" : 0),
      (n["border" + s + Ii] = 1),
      (n["border" + o + Ii] = 0),
      (n[t.p] = r + "px"),
      z.set(e, n);
  },
  re = [],
  Gs = {},
  yn,
  oa = function () {
    return _t() - er > 34 && (yn || (yn = requestAnimationFrame(Pr)));
  },
  gi = function () {
    (!bt || !bt.isPressed || bt.startX > me.clientWidth) &&
      (se.cache++,
      bt ? yn || (yn = requestAnimationFrame(Pr)) : Pr(),
      er || hi("scrollStart"),
      (er = _t()));
  },
  bs = function () {
    (Al = ne.innerWidth), (Dl = ne.innerHeight);
  },
  Ki = function (e) {
    se.cache++,
      (e === !0 ||
        (!dt &&
          !Rl &&
          !be.fullscreenElement &&
          !be.webkitFullscreenElement &&
          (!Us ||
            Al !== ne.innerWidth ||
            Math.abs(ne.innerHeight - Dl) > ne.innerHeight * 0.25))) &&
        es.restart(!0);
  },
  ci = {},
  Pf = [],
  $l = function a() {
    return tt(ae, "scrollEnd", a) || ei(!0);
  },
  hi = function (e) {
    return (
      (ci[e] &&
        ci[e].map(function (r) {
          return r();
        })) ||
      Pf
    );
  },
  Lt = [],
  Wl = function (e) {
    for (var r = 0; r < Lt.length; r += 5)
      (!e || (Lt[r + 4] && Lt[r + 4].query === e)) &&
        ((Lt[r].style.cssText = Lt[r + 1]),
        Lt[r].getBBox && Lt[r].setAttribute("transform", Lt[r + 2] || ""),
        (Lt[r + 3].uncache = 1));
  },
  ko = function (e, r) {
    var t;
    for (Tt = 0; Tt < re.length; Tt++)
      (t = re[Tt]),
        t && (!r || t._ctx === r) && (e ? t.kill(1) : t.revert(!0, !0));
    (ts = !0), r && Wl(r), r || hi("revert");
  },
  Xl = function (e, r) {
    se.cache++,
      (r || !St) &&
        se.forEach(function (t) {
          return gt(t) && t.cacheID++ && (t.rec = 0);
        }),
      Nt(e) && (ne.history.scrollRestoration = wo = e);
  },
  St,
  ai = 0,
  aa,
  kf = function () {
    if (aa !== ai) {
      var e = (aa = ai);
      requestAnimationFrame(function () {
        return e === ai && ei(!0);
      });
    }
  },
  Vl = function () {
    me.appendChild(Oi),
      (bo = (!bt && Oi.offsetHeight) || ne.innerHeight),
      me.removeChild(Oi);
  },
  la = function (e) {
    return mn(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (r) {
      return (r.style.display = e ? "none" : "block");
    });
  },
  ei = function (e, r) {
    if (
      ((Yt = be.documentElement),
      (me = be.body),
      (xo = [ne, be, Yt, me]),
      er && !e && !ts)
    ) {
      rt(ae, "scrollEnd", $l);
      return;
    }
    Vl(),
      (St = ae.isRefreshing = !0),
      se.forEach(function (i) {
        return gt(i) && ++i.cacheID && (i.rec = i());
      });
    var t = hi("refreshInit");
    Ml && ae.sort(),
      r || ko(),
      se.forEach(function (i) {
        gt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
      }),
      re.slice(0).forEach(function (i) {
        return i.refresh();
      }),
      (ts = !1),
      re.forEach(function (i) {
        if (i._subPinOffset && i.pin) {
          var n = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
            s = i.pin[n];
          i.revert(!0, 1), i.adjustPinSpacing(i.pin[n] - s), i.refresh();
        }
      }),
      (qs = 1),
      la(!0),
      re.forEach(function (i) {
        var n = mr(i.scroller, i._dir),
          s = i.vars.end === "max" || (i._endClamp && i.end > n),
          o = i._startClamp && i.start >= n;
        (s || o) &&
          i.setPositions(
            o ? n - 1 : i.start,
            s ? Math.max(o ? n : i.start + 1, n) : i.end,
            !0
          );
      }),
      la(!1),
      (qs = 0),
      t.forEach(function (i) {
        return i && i.render && i.render(-1);
      }),
      se.forEach(function (i) {
        gt(i) &&
          (i.smooth &&
            requestAnimationFrame(function () {
              return (i.target.style.scrollBehavior = "smooth");
            }),
          i.rec && i(i.rec));
      }),
      Xl(wo, 1),
      es.pause(),
      ai++,
      (St = 2),
      Pr(2),
      re.forEach(function (i) {
        return gt(i.vars.onRefresh) && i.vars.onRefresh(i);
      }),
      (St = ae.isRefreshing = !1),
      hi("refresh");
  },
  js = 0,
  Xn = 1,
  un,
  Pr = function (e) {
    if (e === 2 || (!St && !ts)) {
      (ae.isUpdating = !0), un && un.update(0);
      var r = re.length,
        t = _t(),
        i = t - xs >= 50,
        n = r && re[0].scroll();
      if (
        ((Xn = js > n ? -1 : 1),
        St || (js = n),
        i &&
          (er && !ls && t - er > 200 && ((er = 0), hi("scrollEnd")),
          (Hi = xs),
          (xs = t)),
        Xn < 0)
      ) {
        for (Tt = r; Tt-- > 0; ) re[Tt] && re[Tt].update(0, i);
        Xn = 1;
      } else for (Tt = 0; Tt < r; Tt++) re[Tt] && re[Tt].update(0, i);
      ae.isUpdating = !1;
    }
    yn = 0;
  },
  Ks = [
    Nl,
    Bl,
    So,
    To,
    jt + ln,
    jt + sn,
    jt + an,
    jt + on,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Vn = Ks.concat([
    si,
    oi,
    "boxSizing",
    "max" + Ii,
    "max" + Co,
    "position",
    jt,
    $e,
    $e + an,
    $e + sn,
    $e + ln,
    $e + on,
  ]),
  Of = function (e, r, t) {
    Ei(t);
    var i = e._gsap;
    if (i.spacerIsNative) Ei(i.spacerState);
    else if (e._gsap.swappedIn) {
      var n = r.parentNode;
      n && (n.insertBefore(e, r), n.removeChild(r));
    }
    e._gsap.swappedIn = !1;
  },
  Ts = function (e, r, t, i) {
    if (!e._gsap.swappedIn) {
      for (var n = Ks.length, s = r.style, o = e.style, l; n--; )
        (l = Ks[n]), (s[l] = t[l]);
      (s.position = t.position === "absolute" ? "absolute" : "relative"),
        t.display === "inline" && (s.display = "inline-block"),
        (o[So] = o[To] = "auto"),
        (s.flexBasis = t.flexBasis || "auto"),
        (s.overflow = "visible"),
        (s.boxSizing = "border-box"),
        (s[si] = rs(e, Pt) + qe),
        (s[oi] = rs(e, Ge) + qe),
        (s[$e] = o[jt] = o[Bl] = o[Nl] = "0"),
        Ei(i),
        (o[si] = o["max" + Ii] = t[si]),
        (o[oi] = o["max" + Co] = t[oi]),
        (o[$e] = t[$e]),
        e.parentNode !== r &&
          (e.parentNode.insertBefore(r, e), r.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  Ef = /([A-Z])/g,
  Ei = function (e) {
    if (e) {
      var r = e.t.style,
        t = e.length,
        i = 0,
        n,
        s;
      for ((e.t._gsap || z.core.getCache(e.t)).uncache = 1; i < t; i += 2)
        (s = e[i + 1]),
          (n = e[i]),
          s
            ? (r[n] = s)
            : r[n] && r.removeProperty(n.replace(Ef, "-$1").toLowerCase());
    }
  },
  Fn = function (e) {
    for (var r = Vn.length, t = e.style, i = [], n = 0; n < r; n++)
      i.push(Vn[n], t[Vn[n]]);
    return (i.t = e), i;
  },
  Mf = function (e, r, t) {
    for (var i = [], n = e.length, s = t ? 8 : 0, o; s < n; s += 2)
      (o = e[s]), i.push(o, o in r ? r[o] : e[s + 1]);
    return (i.t = e.t), i;
  },
  Un = { left: 0, top: 0 },
  ua = function (e, r, t, i, n, s, o, l, u, f, d, h, c, p) {
    gt(e) && (e = e(l)),
      Nt(e) &&
        e.substr(0, 3) === "max" &&
        (e = h + (e.charAt(4) === "=" ? $n("0" + e.substr(3), t) : 0));
    var _ = c ? c.time() : 0,
      m,
      T,
      b;
    if ((c && c.seek(0), isNaN(e) || (e = +e), ji(e)))
      c &&
        (e = z.utils.mapRange(
          c.scrollTrigger.start,
          c.scrollTrigger.end,
          0,
          h,
          e
        )),
        o && Wn(o, t, i, !0);
    else {
      gt(r) && (r = r(l));
      var C = (e || "0").split(" "),
        v,
        x,
        P,
        S;
      (b = Ot(r, l) || me),
        (v = Sr(b) || {}),
        (!v || (!v.left && !v.top)) &&
          Kt(b).display === "none" &&
          ((S = b.style.display),
          (b.style.display = "block"),
          (v = Sr(b)),
          S ? (b.style.display = S) : b.style.removeProperty("display")),
        (x = $n(C[0], v[i.d])),
        (P = $n(C[1] || "0", t)),
        (e = v[i.p] - u[i.p] - f + x + n - P),
        o && Wn(o, P, i, t - P < 20 || (o._isStart && P > 20)),
        (t -= t - P);
    }
    if ((p && ((l[p] = e || -0.001), e < 0 && (e = 0)), s)) {
      var k = e + t,
        O = s._isStart;
      (m = "scroll" + i.d2),
        Wn(
          s,
          k,
          i,
          (O && k > 20) ||
            (!O && (d ? Math.max(me[m], Yt[m]) : s.parentNode[m]) <= k + 1)
        ),
        d &&
          ((u = Sr(o)),
          d && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + qe));
    }
    return (
      c &&
        b &&
        ((m = Sr(b)),
        c.seek(h),
        (T = Sr(b)),
        (c._caScrollDist = m[i.p] - T[i.p]),
        (e = (e / c._caScrollDist) * h)),
      c && c.seek(_),
      c ? e : Math.round(e)
    );
  },
  Rf = /(webkit|moz|length|cssText|inset)/i,
  fa = function (e, r, t, i) {
    if (e.parentNode !== r) {
      var n = e.style,
        s,
        o;
      if (r === me) {
        (e._stOrig = n.cssText), (o = Kt(e));
        for (s in o)
          !+s &&
            !Rf.test(s) &&
            o[s] &&
            typeof n[s] == "string" &&
            s !== "0" &&
            (n[s] = o[s]);
        (n.top = t), (n.left = i);
      } else n.cssText = e._stOrig;
      (z.core.getCache(e).uncache = 1), r.appendChild(e);
    }
  },
  Ul = function (e, r, t) {
    var i = r,
      n = i;
    return function (s) {
      var o = Math.round(e());
      return (
        o !== i &&
          o !== n &&
          Math.abs(o - i) > 3 &&
          Math.abs(o - n) > 3 &&
          ((s = o), t && t()),
        (n = i),
        (i = Math.round(s)),
        i
      );
    };
  },
  zn = function (e, r, t) {
    var i = {};
    (i[r.p] = "+=" + t), z.set(e, i);
  },
  ca = function (e, r) {
    var t = Vr(e, r),
      i = "_scroll" + r.p2,
      n = function s(o, l, u, f, d) {
        var h = s.tween,
          c = l.onComplete,
          p = {};
        u = u || t();
        var _ = Ul(t, u, function () {
          h.kill(), (s.tween = 0);
        });
        return (
          (d = (f && d) || 0),
          (f = f || o - u),
          h && h.kill(),
          (l[i] = o),
          (l.inherit = !1),
          (l.modifiers = p),
          (p[i] = function () {
            return _(u + f * h.ratio + d * h.ratio * h.ratio);
          }),
          (l.onUpdate = function () {
            se.cache++, s.tween && Pr();
          }),
          (l.onComplete = function () {
            (s.tween = 0), c && c.call(h);
          }),
          (h = s.tween = z.to(e, l)),
          h
        );
      };
    return (
      (e[i] = t),
      (t.wheelHandler = function () {
        return n.tween && n.tween.kill() && (n.tween = 0);
      }),
      rt(e, "wheel", t.wheelHandler),
      ae.isTouch && rt(e, "touchmove", t.wheelHandler),
      n
    );
  },
  ae = (function () {
    function a(r, t) {
      vi ||
        a.register(z) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Hs(this),
        this.init(r, t);
    }
    var e = a.prototype;
    return (
      (e.init = function (t, i) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !qi)
        ) {
          this.update = this.refresh = this.kill = dr;
          return;
        }
        t = na(Nt(t) || ji(t) || t.nodeType ? { trigger: t } : t, Dn);
        var n = t,
          s = n.onUpdate,
          o = n.toggleClass,
          l = n.id,
          u = n.onToggle,
          f = n.onRefresh,
          d = n.scrub,
          h = n.trigger,
          c = n.pin,
          p = n.pinSpacing,
          _ = n.invalidateOnRefresh,
          m = n.anticipatePin,
          T = n.onScrubComplete,
          b = n.onSnapComplete,
          C = n.once,
          v = n.snap,
          x = n.pinReparent,
          P = n.pinSpacer,
          S = n.containerAnimation,
          k = n.fastScrollEnd,
          O = n.preventOverlaps,
          M =
            t.horizontal || (t.containerAnimation && t.horizontal !== !1)
              ? Pt
              : Ge,
          Y = !d && d !== 0,
          E = Ot(t.scroller || ne),
          F = z.core.getCache(E),
          I = fi(E),
          U =
            ("pinType" in t
              ? t.pinType
              : $r(E, "pinType") || (I && "fixed")) === "fixed",
          $ = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          L = Y && t.toggleActions.split(" "),
          j = "markers" in t ? t.markers : Dn.markers,
          V = I ? 0 : parseFloat(Kt(E)["border" + M.p2 + Ii]) || 0,
          g = this,
          te =
            t.onRefreshInit &&
            function () {
              return t.onRefreshInit(g);
            },
          ce = wf(E, I, M),
          Te = bf(E, I),
          he = 0,
          Ae = 0,
          Ve = 0,
          Oe = Vr(E, M),
          je,
          Ke,
          tr,
          Qe,
          Ze,
          le,
          Ee,
          nt,
          yt,
          w,
          ut,
          D,
          y,
          R,
          B,
          H,
          K,
          ie,
          Ie,
          J,
          we,
          de,
          oe,
          Ue,
          N,
          Er,
          kt,
          Ft,
          xr,
          qt,
          rr,
          G,
          ar,
          Je,
          pe,
          Se,
          zt,
          ir,
          Ye;
        if (
          ((g._startClamp = g._endClamp = !1),
          (g._dir = M),
          (m *= 45),
          (g.scroller = E),
          (g.scroll = S ? S.time.bind(S) : Oe),
          (Qe = Oe()),
          (g.vars = t),
          (i = i || t.animation),
          "refreshPriority" in t &&
            ((Ml = 1), t.refreshPriority === -9999 && (un = g)),
          (F.tweenScroll = F.tweenScroll || {
            top: ca(E, Ge),
            left: ca(E, Pt),
          }),
          (g.tweenTo = je = F.tweenScroll[M.p]),
          (g.scrubDuration = function (A) {
            (ar = ji(A) && A),
              ar
                ? G
                  ? G.duration(A)
                  : (G = z.to(i, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: ar,
                      paused: !0,
                      onComplete: function () {
                        return T && T(g);
                      },
                    }))
                : (G && G.progress(1).kill(), (G = 0));
          }),
          i &&
            ((i.vars.lazy = !1),
            (i._initted && !g.isReverted) ||
              (i.vars.immediateRender !== !1 &&
                t.immediateRender !== !1 &&
                i.duration() &&
                i.render(0, !0, !0)),
            (g.animation = i.pause()),
            (i.scrollTrigger = g),
            g.scrubDuration(d),
            (qt = 0),
            l || (l = i.vars.id)),
          v &&
            ((!Zr(v) || v.push) && (v = { snapTo: v }),
            "scrollBehavior" in me.style &&
              z.set(I ? [me, Yt] : E, { scrollBehavior: "auto" }),
            se.forEach(function (A) {
              return (
                gt(A) &&
                A.target === (I ? be.scrollingElement || Yt : E) &&
                (A.smooth = !1)
              );
            }),
            (tr = gt(v.snapTo)
              ? v.snapTo
              : v.snapTo === "labels"
              ? Sf(i)
              : v.snapTo === "labelsDirectional"
              ? Cf(i)
              : v.directional !== !1
              ? function (A, Q) {
                  return Po(v.snapTo)(A, _t() - Ae < 500 ? 0 : Q.direction);
                }
              : z.utils.snap(v.snapTo)),
            (Je = v.duration || { min: 0.1, max: 2 }),
            (Je = Zr(Je) ? nn(Je.min, Je.max) : nn(Je, Je)),
            (pe = z
              .delayedCall(v.delay || ar / 2 || 0.1, function () {
                var A = Oe(),
                  Q = _t() - Ae < 500,
                  W = je.tween;
                if (
                  (Q || Math.abs(g.getVelocity()) < 10) &&
                  !W &&
                  !ls &&
                  he !== A
                ) {
                  var Z = (A - le) / R,
                    et = i && !Y ? i.totalProgress() : Z,
                    ue = Q ? 0 : ((et - rr) / (_t() - Hi)) * 1e3 || 0,
                    Le = z.utils.clamp(-Z, 1 - Z, (pi(ue / 2) * ue) / 0.185),
                    ft = Z + (v.inertia === !1 ? 0 : Le),
                    Fe,
                    Ce,
                    ye = v,
                    sr = ye.onStart,
                    Me = ye.onInterrupt,
                    It = ye.onComplete;
                  if (
                    ((Fe = tr(ft, g)),
                    ji(Fe) || (Fe = ft),
                    (Ce = Math.max(0, Math.round(le + Fe * R))),
                    A <= Ee && A >= le && Ce !== A)
                  ) {
                    if (W && !W._initted && W.data <= pi(Ce - A)) return;
                    v.inertia === !1 && (Le = Fe - Z),
                      je(
                        Ce,
                        {
                          duration: Je(
                            pi(
                              (Math.max(pi(ft - et), pi(Fe - et)) * 0.185) /
                                ue /
                                0.05 || 0
                            )
                          ),
                          ease: v.ease || "power3",
                          data: pi(Ce - A),
                          onInterrupt: function () {
                            return pe.restart(!0) && Me && Me(g);
                          },
                          onComplete: function () {
                            g.update(),
                              (he = Oe()),
                              i &&
                                !Y &&
                                (G
                                  ? G.resetTo(
                                      "totalProgress",
                                      Fe,
                                      i._tTime / i._tDur
                                    )
                                  : i.progress(Fe)),
                              (qt = rr =
                                i && !Y ? i.totalProgress() : g.progress),
                              b && b(g),
                              It && It(g);
                          },
                        },
                        A,
                        Le * R,
                        Ce - A - Le * R
                      ),
                      sr && sr(g, je.tween);
                  }
                } else g.isActive && he !== A && pe.restart(!0);
              })
              .pause())),
          l && (Gs[l] = g),
          (h = g.trigger = Ot(h || (c !== !0 && c))),
          (Ye = h && h._gsap && h._gsap.stRevert),
          Ye && (Ye = Ye(g)),
          (c = c === !0 ? h : Ot(c)),
          Nt(o) && (o = { targets: h, className: o }),
          c &&
            (p === !1 ||
              p === jt ||
              (p =
                !p &&
                c.parentNode &&
                c.parentNode.style &&
                Kt(c.parentNode).display === "flex"
                  ? !1
                  : $e),
            (g.pin = c),
            (Ke = z.core.getCache(c)),
            Ke.spacer
              ? (B = Ke.pinState)
              : (P &&
                  ((P = Ot(P)),
                  P && !P.nodeType && (P = P.current || P.nativeElement),
                  (Ke.spacerIsNative = !!P),
                  P && (Ke.spacerState = Fn(P))),
                (Ke.spacer = ie = P || be.createElement("div")),
                ie.classList.add("pin-spacer"),
                l && ie.classList.add("pin-spacer-" + l),
                (Ke.pinState = B = Fn(c))),
            t.force3D !== !1 && z.set(c, { force3D: !0 }),
            (g.spacer = ie = Ke.spacer),
            (xr = Kt(c)),
            (Ue = xr[p + M.os2]),
            (J = z.getProperty(c)),
            (we = z.quickSetter(c, M.a, qe)),
            Ts(c, ie, xr),
            (K = Fn(c))),
          j)
        ) {
          (D = Zr(j) ? na(j, sa) : sa),
            (w = An("scroller-start", l, E, M, D, 0)),
            (ut = An("scroller-end", l, E, M, D, 0, w)),
            (Ie = w["offset" + M.op.d2]);
          var nr = Ot($r(E, "content") || E);
          (nt = this.markerStart = An("start", l, nr, M, D, Ie, 0, S)),
            (yt = this.markerEnd = An("end", l, nr, M, D, Ie, 0, S)),
            S && (ir = z.quickSetter([nt, yt], M.a, qe)),
            !U &&
              !(yr.length && $r(E, "fixedMarkers") === !0) &&
              (Tf(I ? me : E),
              z.set([w, ut], { force3D: !0 }),
              (Er = z.quickSetter(w, M.a, qe)),
              (Ft = z.quickSetter(ut, M.a, qe)));
        }
        if (S) {
          var q = S.vars.onUpdate,
            X = S.vars.onUpdateParams;
          S.eventCallback("onUpdate", function () {
            g.update(0, 0, 1), q && q.apply(S, X || []);
          });
        }
        if (
          ((g.previous = function () {
            return re[re.indexOf(g) - 1];
          }),
          (g.next = function () {
            return re[re.indexOf(g) + 1];
          }),
          (g.revert = function (A, Q) {
            if (!Q) return g.kill(!0);
            var W = A !== !1 || !g.enabled,
              Z = dt;
            W !== g.isReverted &&
              (W &&
                ((Se = Math.max(Oe(), g.scroll.rec || 0)),
                (Ve = g.progress),
                (zt = i && i.progress())),
              nt &&
                [nt, yt, w, ut].forEach(function (et) {
                  return (et.style.display = W ? "none" : "block");
                }),
              W && ((dt = g), g.update(W)),
              c &&
                (!x || !g.isActive) &&
                (W ? Of(c, ie, B) : Ts(c, ie, Kt(c), N)),
              W || g.update(W),
              (dt = Z),
              (g.isReverted = W));
          }),
          (g.refresh = function (A, Q, W, Z) {
            if (!((dt || !g.enabled) && !Q)) {
              if (c && A && er) {
                rt(a, "scrollEnd", $l);
                return;
              }
              !St && te && te(g),
                (dt = g),
                je.tween && !W && (je.tween.kill(), (je.tween = 0)),
                G && G.pause(),
                _ &&
                  i &&
                  (i.revert({ kill: !1 }).invalidate(),
                  i.getChildren &&
                    i.getChildren(!0, !0, !1).forEach(function (Mr) {
                      return Mr.vars.immediateRender && Mr.render(0, !0, !0);
                    })),
                g.isReverted || g.revert(!0, !0),
                (g._subPinOffset = !1);
              var et = ce(),
                ue = Te(),
                Le = S ? S.duration() : mr(E, M),
                ft = R <= 0.01 || !R,
                Fe = 0,
                Ce = Z || 0,
                ye = Zr(W) ? W.end : t.end,
                sr = t.endTrigger || h,
                Me = Zr(W)
                  ? W.start
                  : t.start || (t.start === 0 || !h ? 0 : c ? "0 0" : "0 100%"),
                It = (g.pinnedContainer =
                  t.pinnedContainer && Ot(t.pinnedContainer, g)),
                lr = (h && Math.max(0, re.indexOf(g))) || 0,
                st = lr,
                ot,
                ct,
                Hr,
                xn,
                ht,
                He,
                ur,
                us,
                Oo,
                Li,
                fr,
                Ni,
                wn;
              for (
                j &&
                Zr(W) &&
                ((Ni = z.getProperty(w, M.p)), (wn = z.getProperty(ut, M.p)));
                st-- > 0;

              )
                (He = re[st]),
                  He.end || He.refresh(0, 1) || (dt = g),
                  (ur = He.pin),
                  ur &&
                    (ur === h || ur === c || ur === It) &&
                    !He.isReverted &&
                    (Li || (Li = []), Li.unshift(He), He.revert(!0, !0)),
                  He !== re[st] && (lr--, st--);
              for (
                gt(Me) && (Me = Me(g)),
                  Me = ea(Me, "start", g),
                  le =
                    ua(
                      Me,
                      h,
                      et,
                      M,
                      Oe(),
                      nt,
                      w,
                      g,
                      ue,
                      V,
                      U,
                      Le,
                      S,
                      g._startClamp && "_startClamp"
                    ) || (c ? -0.001 : 0),
                  gt(ye) && (ye = ye(g)),
                  Nt(ye) &&
                    !ye.indexOf("+=") &&
                    (~ye.indexOf(" ")
                      ? (ye = (Nt(Me) ? Me.split(" ")[0] : "") + ye)
                      : ((Fe = $n(ye.substr(2), et)),
                        (ye = Nt(Me)
                          ? Me
                          : (S
                              ? z.utils.mapRange(
                                  0,
                                  S.duration(),
                                  S.scrollTrigger.start,
                                  S.scrollTrigger.end,
                                  le
                                )
                              : le) + Fe),
                        (sr = h))),
                  ye = ea(ye, "end", g),
                  Ee =
                    Math.max(
                      le,
                      ua(
                        ye || (sr ? "100% 0" : Le),
                        sr,
                        et,
                        M,
                        Oe() + Fe,
                        yt,
                        ut,
                        g,
                        ue,
                        V,
                        U,
                        Le,
                        S,
                        g._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  Fe = 0,
                  st = lr;
                st--;

              )
                (He = re[st]),
                  (ur = He.pin),
                  ur &&
                    He.start - He._pinPush <= le &&
                    !S &&
                    He.end > 0 &&
                    ((ot =
                      He.end -
                      (g._startClamp ? Math.max(0, He.start) : He.start)),
                    ((ur === h && He.start - He._pinPush < le) || ur === It) &&
                      isNaN(Me) &&
                      (Fe += ot * (1 - He.progress)),
                    ur === c && (Ce += ot));
              if (
                ((le += Fe),
                (Ee += Fe),
                g._startClamp && (g._startClamp += Fe),
                g._endClamp &&
                  !St &&
                  ((g._endClamp = Ee || -0.001), (Ee = Math.min(Ee, mr(E, M)))),
                (R = Ee - le || ((le -= 0.01) && 0.001)),
                ft && (Ve = z.utils.clamp(0, 1, z.utils.normalize(le, Ee, Se))),
                (g._pinPush = Ce),
                nt &&
                  Fe &&
                  ((ot = {}),
                  (ot[M.a] = "+=" + Fe),
                  It && (ot[M.p] = "-=" + Oe()),
                  z.set([nt, yt], ot)),
                c && !(qs && g.end >= mr(E, M)))
              )
                (ot = Kt(c)),
                  (xn = M === Ge),
                  (Hr = Oe()),
                  (de = parseFloat(J(M.a)) + Ce),
                  !Le &&
                    Ee > 1 &&
                    ((fr = (I ? be.scrollingElement || Yt : E).style),
                    (fr = {
                      style: fr,
                      value: fr["overflow" + M.a.toUpperCase()],
                    }),
                    I &&
                      Kt(me)["overflow" + M.a.toUpperCase()] !== "scroll" &&
                      (fr.style["overflow" + M.a.toUpperCase()] = "scroll")),
                  Ts(c, ie, ot),
                  (K = Fn(c)),
                  (ct = Sr(c, !0)),
                  (us = U && Vr(E, xn ? Pt : Ge)()),
                  p
                    ? ((N = [p + M.os2, R + Ce + qe]),
                      (N.t = ie),
                      (st = p === $e ? rs(c, M) + R + Ce : 0),
                      st &&
                        (N.push(M.d, st + qe),
                        ie.style.flexBasis !== "auto" &&
                          (ie.style.flexBasis = st + qe)),
                      Ei(N),
                      It &&
                        re.forEach(function (Mr) {
                          Mr.pin === It &&
                            Mr.vars.pinSpacing !== !1 &&
                            (Mr._subPinOffset = !0);
                        }),
                      U && Oe(Se))
                    : ((st = rs(c, M)),
                      st &&
                        ie.style.flexBasis !== "auto" &&
                        (ie.style.flexBasis = st + qe)),
                  U &&
                    ((ht = {
                      top: ct.top + (xn ? Hr - le : us) + qe,
                      left: ct.left + (xn ? us : Hr - le) + qe,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (ht[si] = ht["max" + Ii] = Math.ceil(ct.width) + qe),
                    (ht[oi] = ht["max" + Co] = Math.ceil(ct.height) + qe),
                    (ht[jt] =
                      ht[jt + an] =
                      ht[jt + sn] =
                      ht[jt + ln] =
                      ht[jt + on] =
                        "0"),
                    (ht[$e] = ot[$e]),
                    (ht[$e + an] = ot[$e + an]),
                    (ht[$e + sn] = ot[$e + sn]),
                    (ht[$e + ln] = ot[$e + ln]),
                    (ht[$e + on] = ot[$e + on]),
                    (H = Mf(B, ht, x)),
                    St && Oe(0)),
                  i
                    ? ((Oo = i._initted),
                      ys(1),
                      i.render(i.duration(), !0, !0),
                      (oe = J(M.a) - de + R + Ce),
                      (kt = Math.abs(R - oe) > 1),
                      U && kt && H.splice(H.length - 2, 2),
                      i.render(0, !0, !0),
                      Oo || i.invalidate(!0),
                      i.parent || i.totalTime(i.totalTime()),
                      ys(0))
                    : (oe = R),
                  fr &&
                    (fr.value
                      ? (fr.style["overflow" + M.a.toUpperCase()] = fr.value)
                      : fr.style.removeProperty("overflow-" + M.a));
              else if (h && Oe() && !S)
                for (ct = h.parentNode; ct && ct !== me; )
                  ct._pinOffset &&
                    ((le -= ct._pinOffset), (Ee -= ct._pinOffset)),
                    (ct = ct.parentNode);
              Li &&
                Li.forEach(function (Mr) {
                  return Mr.revert(!1, !0);
                }),
                (g.start = le),
                (g.end = Ee),
                (Qe = Ze = St ? Se : Oe()),
                !S && !St && (Qe < Se && Oe(Se), (g.scroll.rec = 0)),
                g.revert(!1, !0),
                (Ae = _t()),
                pe && ((he = -1), pe.restart(!0)),
                (dt = 0),
                i &&
                  Y &&
                  (i._initted || zt) &&
                  i.progress() !== zt &&
                  i.progress(zt || 0, !0).render(i.time(), !0, !0),
                (ft || Ve !== g.progress || S || _ || (i && !i._initted)) &&
                  (i &&
                    !Y &&
                    (i._initted || Ve || i.vars.immediateRender !== !1) &&
                    i.totalProgress(
                      S && le < -0.001 && !Ve
                        ? z.utils.normalize(le, Ee, 0)
                        : Ve,
                      !0
                    ),
                  (g.progress = ft || (Qe - le) / R === Ve ? 0 : Ve)),
                c && p && (ie._pinOffset = Math.round(g.progress * oe)),
                G && G.invalidate(),
                isNaN(Ni) ||
                  ((Ni -= z.getProperty(w, M.p)),
                  (wn -= z.getProperty(ut, M.p)),
                  zn(w, M, Ni),
                  zn(nt, M, Ni - (Z || 0)),
                  zn(ut, M, wn),
                  zn(yt, M, wn - (Z || 0))),
                ft && !St && g.update(),
                f && !St && !y && ((y = !0), f(g), (y = !1));
            }
          }),
          (g.getVelocity = function () {
            return ((Oe() - Ze) / (_t() - Hi)) * 1e3 || 0;
          }),
          (g.endAnimation = function () {
            $i(g.callbackAnimation),
              i &&
                (G
                  ? G.progress(1)
                  : i.paused()
                  ? Y || $i(i, g.direction < 0, 1)
                  : $i(i, i.reversed()));
          }),
          (g.labelToScroll = function (A) {
            return (
              (i &&
                i.labels &&
                (le || g.refresh() || le) + (i.labels[A] / i.duration()) * R) ||
              0
            );
          }),
          (g.getTrailing = function (A) {
            var Q = re.indexOf(g),
              W = g.direction > 0 ? re.slice(0, Q).reverse() : re.slice(Q + 1);
            return (
              Nt(A)
                ? W.filter(function (Z) {
                    return Z.vars.preventOverlaps === A;
                  })
                : W
            ).filter(function (Z) {
              return g.direction > 0 ? Z.end <= le : Z.start >= Ee;
            });
          }),
          (g.update = function (A, Q, W) {
            if (!(S && !W && !A)) {
              var Z = St === !0 ? Se : g.scroll(),
                et = A ? 0 : (Z - le) / R,
                ue = et < 0 ? 0 : et > 1 ? 1 : et || 0,
                Le = g.progress,
                ft,
                Fe,
                Ce,
                ye,
                sr,
                Me,
                It,
                lr;
              if (
                (Q &&
                  ((Ze = Qe),
                  (Qe = S ? Oe() : Z),
                  v && ((rr = qt), (qt = i && !Y ? i.totalProgress() : ue))),
                m &&
                  c &&
                  !dt &&
                  !On &&
                  er &&
                  (!ue && le < Z + ((Z - Ze) / (_t() - Hi)) * m
                    ? (ue = 1e-4)
                    : ue === 1 &&
                      Ee > Z + ((Z - Ze) / (_t() - Hi)) * m &&
                      (ue = 0.9999)),
                ue !== Le && g.enabled)
              ) {
                if (
                  ((ft = g.isActive = !!ue && ue < 1),
                  (Fe = !!Le && Le < 1),
                  (Me = ft !== Fe),
                  (sr = Me || !!ue != !!Le),
                  (g.direction = ue > Le ? 1 : -1),
                  (g.progress = ue),
                  sr &&
                    !dt &&
                    ((Ce = ue && !Le ? 0 : ue === 1 ? 1 : Le === 1 ? 2 : 3),
                    Y &&
                      ((ye =
                        (!Me && L[Ce + 1] !== "none" && L[Ce + 1]) || L[Ce]),
                      (lr =
                        i &&
                        (ye === "complete" || ye === "reset" || ye in i)))),
                  O &&
                    (Me || lr) &&
                    (lr || d || !i) &&
                    (gt(O)
                      ? O(g)
                      : g.getTrailing(O).forEach(function (Hr) {
                          return Hr.endAnimation();
                        })),
                  Y ||
                    (G && !dt && !On
                      ? (G._dp._time - G._start !== G._time &&
                          G.render(G._dp._time - G._start),
                        G.resetTo
                          ? G.resetTo("totalProgress", ue, i._tTime / i._tDur)
                          : ((G.vars.totalProgress = ue),
                            G.invalidate().restart()))
                      : i && i.totalProgress(ue, !!(dt && (Ae || A)))),
                  c)
                ) {
                  if ((A && p && (ie.style[p + M.os2] = Ue), !U))
                    we(Gi(de + oe * ue));
                  else if (sr) {
                    if (
                      ((It = !A && ue > Le && Ee + 1 > Z && Z + 1 >= mr(E, M)),
                      x)
                    )
                      if (!A && (ft || It)) {
                        var st = Sr(c, !0),
                          ot = Z - le;
                        fa(
                          c,
                          me,
                          st.top + (M === Ge ? ot : 0) + qe,
                          st.left + (M === Ge ? 0 : ot) + qe
                        );
                      } else fa(c, ie);
                    Ei(ft || It ? H : K),
                      (kt && ue < 1 && ft) ||
                        we(de + (ue === 1 && !It ? oe : 0));
                  }
                }
                v && !je.tween && !dt && !On && pe.restart(!0),
                  o &&
                    (Me || (C && ue && (ue < 1 || !vs))) &&
                    mn(o.targets).forEach(function (Hr) {
                      return Hr.classList[ft || C ? "add" : "remove"](
                        o.className
                      );
                    }),
                  s && !Y && !A && s(g),
                  sr && !dt
                    ? (Y &&
                        (lr &&
                          (ye === "complete"
                            ? i.pause().totalProgress(1)
                            : ye === "reset"
                            ? i.restart(!0).pause()
                            : ye === "restart"
                            ? i.restart(!0)
                            : i[ye]()),
                        s && s(g)),
                      (Me || !vs) &&
                        (u && Me && ws(g, u),
                        $[Ce] && ws(g, $[Ce]),
                        C && (ue === 1 ? g.kill(!1, 1) : ($[Ce] = 0)),
                        Me || ((Ce = ue === 1 ? 1 : 3), $[Ce] && ws(g, $[Ce]))),
                      k &&
                        !ft &&
                        Math.abs(g.getVelocity()) > (ji(k) ? k : 2500) &&
                        ($i(g.callbackAnimation),
                        G
                          ? G.progress(1)
                          : $i(i, ye === "reverse" ? 1 : !ue, 1)))
                    : Y && s && !dt && s(g);
              }
              if (Ft) {
                var ct = S ? (Z / S.duration()) * (S._caScrollDist || 0) : Z;
                Er(ct + (w._isFlipped ? 1 : 0)), Ft(ct);
              }
              ir && ir((-Z / S.duration()) * (S._caScrollDist || 0));
            }
          }),
          (g.enable = function (A, Q) {
            g.enabled ||
              ((g.enabled = !0),
              rt(E, "resize", Ki),
              I || rt(E, "scroll", gi),
              te && rt(a, "refreshInit", te),
              A !== !1 && ((g.progress = Ve = 0), (Qe = Ze = he = Oe())),
              Q !== !1 && g.refresh());
          }),
          (g.getTween = function (A) {
            return A && je ? je.tween : G;
          }),
          (g.setPositions = function (A, Q, W, Z) {
            if (S) {
              var et = S.scrollTrigger,
                ue = S.duration(),
                Le = et.end - et.start;
              (A = et.start + (Le * A) / ue), (Q = et.start + (Le * Q) / ue);
            }
            g.refresh(
              !1,
              !1,
              {
                start: ta(A, W && !!g._startClamp),
                end: ta(Q, W && !!g._endClamp),
              },
              Z
            ),
              g.update();
          }),
          (g.adjustPinSpacing = function (A) {
            if (N && A) {
              var Q = N.indexOf(M.d) + 1;
              (N[Q] = parseFloat(N[Q]) + A + qe),
                (N[1] = parseFloat(N[1]) + A + qe),
                Ei(N);
            }
          }),
          (g.disable = function (A, Q) {
            if (
              g.enabled &&
              (A !== !1 && g.revert(!0, !0),
              (g.enabled = g.isActive = !1),
              Q || (G && G.pause()),
              (Se = 0),
              Ke && (Ke.uncache = 1),
              te && tt(a, "refreshInit", te),
              pe && (pe.pause(), je.tween && je.tween.kill() && (je.tween = 0)),
              !I)
            ) {
              for (var W = re.length; W--; )
                if (re[W].scroller === E && re[W] !== g) return;
              tt(E, "resize", Ki), I || tt(E, "scroll", gi);
            }
          }),
          (g.kill = function (A, Q) {
            g.disable(A, Q), G && !Q && G.kill(), l && delete Gs[l];
            var W = re.indexOf(g);
            W >= 0 && re.splice(W, 1),
              W === Tt && Xn > 0 && Tt--,
              (W = 0),
              re.forEach(function (Z) {
                return Z.scroller === g.scroller && (W = 1);
              }),
              W || St || (g.scroll.rec = 0),
              i &&
                ((i.scrollTrigger = null),
                A && i.revert({ kill: !1 }),
                Q || i.kill()),
              nt &&
                [nt, yt, w, ut].forEach(function (Z) {
                  return Z.parentNode && Z.parentNode.removeChild(Z);
                }),
              un === g && (un = 0),
              c &&
                (Ke && (Ke.uncache = 1),
                (W = 0),
                re.forEach(function (Z) {
                  return Z.pin === c && W++;
                }),
                W || (Ke.spacer = 0)),
              t.onKill && t.onKill(g);
          }),
          re.push(g),
          g.enable(!1, !1),
          Ye && Ye(g),
          i && i.add && !R)
        ) {
          var _e = g.update;
          (g.update = function () {
            (g.update = _e), se.cache++, le || Ee || g.refresh();
          }),
            z.delayedCall(0.01, g.update),
            (R = 0.01),
            (le = Ee = 0);
        } else g.refresh();
        c && kf();
      }),
      (a.register = function (t) {
        return (
          vi ||
            ((z = t || zl()), Fl() && window.document && a.enable(), (vi = qi)),
          vi
        );
      }),
      (a.defaults = function (t) {
        if (t) for (var i in t) Dn[i] = t[i];
        return Dn;
      }),
      (a.disable = function (t, i) {
        (qi = 0),
          re.forEach(function (s) {
            return s[i ? "kill" : "disable"](t);
          }),
          tt(ne, "wheel", gi),
          tt(be, "scroll", gi),
          clearInterval(kn),
          tt(be, "touchcancel", dr),
          tt(me, "touchstart", dr),
          Mn(tt, be, "pointerdown,touchstart,mousedown", ra),
          Mn(tt, be, "pointerup,touchend,mouseup", ia),
          es.kill(),
          En(tt);
        for (var n = 0; n < se.length; n += 3)
          Rn(tt, se[n], se[n + 1]), Rn(tt, se[n], se[n + 2]);
      }),
      (a.enable = function () {
        if (
          ((ne = window),
          (be = document),
          (Yt = be.documentElement),
          (me = be.body),
          z &&
            ((mn = z.utils.toArray),
            (nn = z.utils.clamp),
            (Hs = z.core.context || dr),
            (ys = z.core.suppressOverwrites || dr),
            (wo = ne.history.scrollRestoration || "auto"),
            (js = ne.pageYOffset || 0),
            z.core.globals("ScrollTrigger", a),
            me))
        ) {
          (qi = 1),
            (Oi = document.createElement("div")),
            (Oi.style.height = "100vh"),
            (Oi.style.position = "absolute"),
            Vl(),
            xf(),
            Be.register(z),
            (a.isTouch = Be.isTouch),
            (Dr =
              Be.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Us = Be.isTouch === 1),
            rt(ne, "wheel", gi),
            (xo = [ne, be, Yt, me]),
            z.matchMedia
              ? ((a.matchMedia = function (u) {
                  var f = z.matchMedia(),
                    d;
                  for (d in u) f.add(d, u[d]);
                  return f;
                }),
                z.addEventListener("matchMediaInit", function () {
                  return ko();
                }),
                z.addEventListener("matchMediaRevert", function () {
                  return Wl();
                }),
                z.addEventListener("matchMedia", function () {
                  ei(0, 1), hi("matchMedia");
                }),
                z.matchMedia().add("(orientation: portrait)", function () {
                  return bs(), bs;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            bs(),
            rt(be, "scroll", gi);
          var t = me.hasAttribute("style"),
            i = me.style,
            n = i.borderTopStyle,
            s = z.core.Animation.prototype,
            o,
            l;
          for (
            s.revert ||
              Object.defineProperty(s, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              i.borderTopStyle = "solid",
              o = Sr(me),
              Ge.m = Math.round(o.top + Ge.sc()) || 0,
              Pt.m = Math.round(o.left + Pt.sc()) || 0,
              n ? (i.borderTopStyle = n) : i.removeProperty("border-top-style"),
              t || (me.setAttribute("style", ""), me.removeAttribute("style")),
              kn = setInterval(oa, 250),
              z.delayedCall(0.5, function () {
                return (On = 0);
              }),
              rt(be, "touchcancel", dr),
              rt(me, "touchstart", dr),
              Mn(rt, be, "pointerdown,touchstart,mousedown", ra),
              Mn(rt, be, "pointerup,touchend,mouseup", ia),
              Vs = z.utils.checkPrefix("transform"),
              Vn.push(Vs),
              vi = _t(),
              es = z.delayedCall(0.2, ei).pause(),
              xi = [
                be,
                "visibilitychange",
                function () {
                  var u = ne.innerWidth,
                    f = ne.innerHeight;
                  be.hidden
                    ? ((Zo = u), (Jo = f))
                    : (Zo !== u || Jo !== f) && Ki();
                },
                be,
                "DOMContentLoaded",
                ei,
                ne,
                "load",
                ei,
                ne,
                "resize",
                Ki,
              ],
              En(rt),
              re.forEach(function (u) {
                return u.enable(0, 1);
              }),
              l = 0;
            l < se.length;
            l += 3
          )
            Rn(tt, se[l], se[l + 1]), Rn(tt, se[l], se[l + 2]);
        }
      }),
      (a.config = function (t) {
        "limitCallbacks" in t && (vs = !!t.limitCallbacks);
        var i = t.syncInterval;
        (i && clearInterval(kn)) || ((kn = i) && setInterval(oa, i)),
          "ignoreMobileResize" in t &&
            (Us = a.isTouch === 1 && t.ignoreMobileResize),
          "autoRefreshEvents" in t &&
            (En(tt) || En(rt, t.autoRefreshEvents || "none"),
            (Rl = (t.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (a.scrollerProxy = function (t, i) {
        var n = Ot(t),
          s = se.indexOf(n),
          o = fi(n);
        ~s && se.splice(s, o ? 6 : 2),
          i && (o ? yr.unshift(ne, i, me, i, Yt, i) : yr.unshift(n, i));
      }),
      (a.clearMatchMedia = function (t) {
        re.forEach(function (i) {
          return i._ctx && i._ctx.query === t && i._ctx.kill(!0, !0);
        });
      }),
      (a.isInViewport = function (t, i, n) {
        var s = (Nt(t) ? Ot(t) : t).getBoundingClientRect(),
          o = s[n ? si : oi] * i || 0;
        return n
          ? s.right - o > 0 && s.left + o < ne.innerWidth
          : s.bottom - o > 0 && s.top + o < ne.innerHeight;
      }),
      (a.positionInViewport = function (t, i, n) {
        Nt(t) && (t = Ot(t));
        var s = t.getBoundingClientRect(),
          o = s[n ? si : oi],
          l =
            i == null
              ? o / 2
              : i in is
              ? is[i] * o
              : ~i.indexOf("%")
              ? (parseFloat(i) * o) / 100
              : parseFloat(i) || 0;
        return n ? (s.left + l) / ne.innerWidth : (s.top + l) / ne.innerHeight;
      }),
      (a.killAll = function (t) {
        if (
          (re.slice(0).forEach(function (n) {
            return n.vars.id !== "ScrollSmoother" && n.kill();
          }),
          t !== !0)
        ) {
          var i = ci.killAll || [];
          (ci = {}),
            i.forEach(function (n) {
              return n();
            });
        }
      }),
      a
    );
  })();
ae.version = "3.13.0";
ae.saveStyles = function (a) {
  return a
    ? mn(a).forEach(function (e) {
        if (e && e.style) {
          var r = Lt.indexOf(e);
          r >= 0 && Lt.splice(r, 5),
            Lt.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              z.core.getCache(e),
              Hs()
            );
        }
      })
    : Lt;
};
ae.revert = function (a, e) {
  return ko(!a, e);
};
ae.create = function (a, e) {
  return new ae(a, e);
};
ae.refresh = function (a) {
  return a ? Ki(!0) : (vi || ae.register()) && ei(!0);
};
ae.update = function (a) {
  return ++se.cache && Pr(a === !0 ? 2 : 0);
};
ae.clearScrollMemory = Xl;
ae.maxScroll = function (a, e) {
  return mr(a, e ? Pt : Ge);
};
ae.getScrollFunc = function (a, e) {
  return Vr(Ot(a), e ? Pt : Ge);
};
ae.getById = function (a) {
  return Gs[a];
};
ae.getAll = function () {
  return re.filter(function (a) {
    return a.vars.id !== "ScrollSmoother";
  });
};
ae.isScrolling = function () {
  return !!er;
};
ae.snapDirectional = Po;
ae.addEventListener = function (a, e) {
  var r = ci[a] || (ci[a] = []);
  ~r.indexOf(e) || r.push(e);
};
ae.removeEventListener = function (a, e) {
  var r = ci[a],
    t = r && r.indexOf(e);
  t >= 0 && r.splice(t, 1);
};
ae.batch = function (a, e) {
  var r = [],
    t = {},
    i = e.interval || 0.016,
    n = e.batchMax || 1e9,
    s = function (u, f) {
      var d = [],
        h = [],
        c = z
          .delayedCall(i, function () {
            f(d, h), (d = []), (h = []);
          })
          .pause();
      return function (p) {
        d.length || c.restart(!0),
          d.push(p.trigger),
          h.push(p),
          n <= d.length && c.progress(1);
      };
    },
    o;
  for (o in e)
    t[o] =
      o.substr(0, 2) === "on" && gt(e[o]) && o !== "onRefreshInit"
        ? s(o, e[o])
        : e[o];
  return (
    gt(n) &&
      ((n = n()),
      rt(ae, "refresh", function () {
        return (n = e.batchMax());
      })),
    mn(a).forEach(function (l) {
      var u = {};
      for (o in t) u[o] = t[o];
      (u.trigger = l), r.push(ae.create(u));
    }),
    r
  );
};
var ha = function (e, r, t, i) {
    return (
      r > i ? e(i) : r < 0 && e(0),
      t > i ? (i - r) / (t - r) : t < 0 ? r / (r - t) : 1
    );
  },
  Ss = function a(e, r) {
    r === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          r === !0
            ? "auto"
            : r
            ? "pan-" + r + (Be.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Yt && a(me, r);
  },
  In = { auto: 1, scroll: 1 },
  Df = function (e) {
    var r = e.event,
      t = e.target,
      i = e.axis,
      n = (r.changedTouches ? r.changedTouches[0] : r).target,
      s = n._gsap || z.core.getCache(n),
      o = _t(),
      l;
    if (!s._isScrollT || o - s._isScrollT > 2e3) {
      for (
        ;
        n &&
        n !== me &&
        ((n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth) ||
          !(In[(l = Kt(n)).overflowY] || In[l.overflowX]));

      )
        n = n.parentNode;
      (s._isScroll =
        n &&
        n !== t &&
        !fi(n) &&
        (In[(l = Kt(n)).overflowY] || In[l.overflowX])),
        (s._isScrollT = o);
    }
    (s._isScroll || i === "x") && (r.stopPropagation(), (r._gsapAllow = !0));
  },
  Hl = function (e, r, t, i) {
    return Be.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: r,
      onWheel: (i = i && Df),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return t && rt(be, Be.eventTypes[0], _a, !1, !0);
      },
      onDisable: function () {
        return tt(be, Be.eventTypes[0], _a, !0);
      },
    });
  },
  Af = /(input|label|select|textarea)/i,
  da,
  _a = function (e) {
    var r = Af.test(e.target.tagName);
    (r || da) && ((e._gsapAllow = !0), (da = r));
  },
  Ff = function (e) {
    Zr(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var r = e,
      t = r.normalizeScrollX,
      i = r.momentum,
      n = r.allowNestedScroll,
      s = r.onRelease,
      o,
      l,
      u = Ot(e.target) || Yt,
      f = z.core.globals().ScrollSmoother,
      d = f && f.get(),
      h =
        Dr &&
        ((e.content && Ot(e.content)) ||
          (d && e.content !== !1 && !d.smooth() && d.content())),
      c = Vr(u, Ge),
      p = Vr(u, Pt),
      _ = 1,
      m =
        (Be.isTouch && ne.visualViewport
          ? ne.visualViewport.scale * ne.visualViewport.width
          : ne.outerWidth) / ne.innerWidth,
      T = 0,
      b = gt(i)
        ? function () {
            return i(o);
          }
        : function () {
            return i || 2.8;
          },
      C,
      v,
      x = Hl(u, e.type, !0, n),
      P = function () {
        return (v = !1);
      },
      S = dr,
      k = dr,
      O = function () {
        (l = mr(u, Ge)),
          (k = nn(Dr ? 1 : 0, l)),
          t && (S = nn(0, mr(u, Pt))),
          (C = ai);
      },
      M = function () {
        (h._gsap.y = Gi(parseFloat(h._gsap.y) + c.offset) + "px"),
          (h.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(h._gsap.y) +
            ", 0, 1)"),
          (c.offset = c.cacheID = 0);
      },
      Y = function () {
        if (v) {
          requestAnimationFrame(P);
          var j = Gi(o.deltaY / 2),
            V = k(c.v - j);
          if (h && V !== c.v + c.offset) {
            c.offset = V - c.v;
            var g = Gi((parseFloat(h && h._gsap.y) || 0) - c.offset);
            (h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              g +
              ", 0, 1)"),
              (h._gsap.y = g + "px"),
              (c.cacheID = se.cache),
              Pr();
          }
          return !0;
        }
        c.offset && M(), (v = !0);
      },
      E,
      F,
      I,
      U,
      $ = function () {
        O(),
          E.isActive() &&
            E.vars.scrollY > l &&
            (c() > l ? E.progress(1) && c(l) : E.resetTo("scrollY", l));
      };
    return (
      h && z.set(h, { y: "+=0" }),
      (e.ignoreCheck = function (L) {
        return (
          (Dr && L.type === "touchmove" && Y()) ||
          (_ > 1.05 && L.type !== "touchstart") ||
          o.isGesturing ||
          (L.touches && L.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        v = !1;
        var L = _;
        (_ = Gi(((ne.visualViewport && ne.visualViewport.scale) || 1) / m)),
          E.pause(),
          L !== _ && Ss(u, _ > 1.01 ? !0 : t ? !1 : "x"),
          (F = p()),
          (I = c()),
          O(),
          (C = ai);
      }),
      (e.onRelease = e.onGestureStart =
        function (L, j) {
          if ((c.offset && M(), !j)) U.restart(!0);
          else {
            se.cache++;
            var V = b(),
              g,
              te;
            t &&
              ((g = p()),
              (te = g + (V * 0.05 * -L.velocityX) / 0.227),
              (V *= ha(p, g, te, mr(u, Pt))),
              (E.vars.scrollX = S(te))),
              (g = c()),
              (te = g + (V * 0.05 * -L.velocityY) / 0.227),
              (V *= ha(c, g, te, mr(u, Ge))),
              (E.vars.scrollY = k(te)),
              E.invalidate().duration(V).play(0.01),
              ((Dr && E.vars.scrollY >= l) || g >= l - 1) &&
                z.to({}, { onUpdate: $, duration: V });
          }
          s && s(L);
        }),
      (e.onWheel = function () {
        E._ts && E.pause(), _t() - T > 1e3 && ((C = 0), (T = _t()));
      }),
      (e.onChange = function (L, j, V, g, te) {
        if (
          (ai !== C && O(),
          j && t && p(S(g[2] === j ? F + (L.startX - L.x) : p() + j - g[1])),
          V)
        ) {
          c.offset && M();
          var ce = te[2] === V,
            Te = ce ? I + L.startY - L.y : c() + V - te[1],
            he = k(Te);
          ce && Te !== he && (I += he - Te), c(he);
        }
        (V || j) && Pr();
      }),
      (e.onEnable = function () {
        Ss(u, t ? !1 : "x"),
          ae.addEventListener("refresh", $),
          rt(ne, "resize", $),
          c.smooth &&
            ((c.target.style.scrollBehavior = "auto"),
            (c.smooth = p.smooth = !1)),
          x.enable();
      }),
      (e.onDisable = function () {
        Ss(u, !0),
          tt(ne, "resize", $),
          ae.removeEventListener("refresh", $),
          x.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (o = new Be(e)),
      (o.iOS = Dr),
      Dr && !c() && c(1),
      Dr && z.ticker.add(dr),
      (U = o._dc),
      (E = z.to(o, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: t ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Ul(c, c(), function () {
            return E.pause();
          }),
        },
        onUpdate: Pr,
        onComplete: U.vars.onComplete,
      })),
      o
    );
  };
ae.sort = function (a) {
  if (gt(a)) return re.sort(a);
  var e = ne.pageYOffset || 0;
  return (
    ae.getAll().forEach(function (r) {
      return (r._sortY = r.trigger
        ? e + r.trigger.getBoundingClientRect().top
        : r.start + ne.innerHeight);
    }),
    re.sort(
      a ||
        function (r, t) {
          return (
            (r.vars.refreshPriority || 0) * -1e6 +
            (r.vars.containerAnimation ? 1e6 : r._sortY) -
            ((t.vars.containerAnimation ? 1e6 : t._sortY) +
              (t.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
ae.observe = function (a) {
  return new Be(a);
};
ae.normalizeScroll = function (a) {
  if (typeof a > "u") return bt;
  if (a === !0 && bt) return bt.enable();
  if (a === !1) {
    bt && bt.kill(), (bt = a);
    return;
  }
  var e = a instanceof Be ? a : Ff(a);
  return bt && bt.target === e.target && bt.kill(), fi(e.target) && (bt = e), e;
};
ae.core = {
  _getVelocityProp: Xs,
  _inputObserver: Hl,
  _scrollers: se,
  _proxies: yr,
  bridge: {
    ss: function () {
      er || hi("scrollStart"), (er = _t());
    },
    ref: function () {
      return dt;
    },
  },
};
zl() && z.registerPlugin(ae);
/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */ let Wi,
  mi,
  Qs,
  zf = () => Qs || cr.register(window.gsap),
  pa = typeof Intl < "u" ? new Intl.Segmenter() : 0,
  ns = (a) =>
    typeof a == "string"
      ? ns(document.querySelectorAll(a))
      : "length" in a
      ? Array.from(a)
      : [a],
  ga = (a) => ns(a).filter((e) => e instanceof HTMLElement),
  Zs = [],
  Cs = function () {},
  If = /\s+/g,
  ma = new RegExp(
    "\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.",
    "gu"
  ),
  ya = { left: 0, top: 0, width: 0, height: 0 },
  va = (a, e) => {
    if (e) {
      let r = new Set(a.join("").match(e) || Zs),
        t = a.length,
        i,
        n,
        s,
        o;
      if (r.size)
        for (; --t > -1; ) {
          n = a[t];
          for (s of r)
            if (s.startsWith(n) && s.length > n.length) {
              for (
                i = 0, o = n;
                s.startsWith((o += a[t + ++i])) && o.length < s.length;

              );
              if (i && o.length === s.length) {
                (a[t] = s), a.splice(t + 1, i);
                break;
              }
            }
        }
    }
    return a;
  },
  xa = (a) =>
    window.getComputedStyle(a).display === "inline" &&
    (a.style.display = "inline-block"),
  yi = (a, e, r) =>
    e.insertBefore(typeof a == "string" ? document.createTextNode(a) : a, r),
  Js = (a, e, r) => {
    let t = e[a + "sClass"] || "",
      { tag: i = "div", aria: n = "auto", propIndex: s = !1 } = e,
      o = a === "line" ? "block" : "inline-block",
      l = t.indexOf("++") > -1,
      u = (f) => {
        let d = document.createElement(i),
          h = r.length + 1;
        return (
          t && (d.className = t + (l ? " " + t + h : "")),
          s && d.style.setProperty("--" + a, h + ""),
          n !== "none" && d.setAttribute("aria-hidden", "true"),
          i !== "span" &&
            ((d.style.position = "relative"), (d.style.display = o)),
          (d.textContent = f),
          r.push(d),
          d
        );
      };
    return l && (t = t.replace("++", "")), (u.collection = r), u;
  },
  Lf = (a, e, r, t) => {
    let i = Js("line", r, t),
      n = window.getComputedStyle(a).textAlign || "left";
    return (s, o) => {
      let l = i("");
      for (l.style.textAlign = n, a.insertBefore(l, e[s]); s < o; s++)
        l.appendChild(e[s]);
      l.normalize();
    };
  },
  ql = (a, e, r, t, i, n, s, o, l, u) => {
    var f;
    let d = Array.from(a.childNodes),
      h = 0,
      { wordDelimiter: c, reduceWhiteSpace: p = !0, prepareText: _ } = e,
      m = a.getBoundingClientRect(),
      T = m,
      b = !p && window.getComputedStyle(a).whiteSpace.substring(0, 3) === "pre",
      C = 0,
      v = r.collection,
      x,
      P,
      S,
      k,
      O,
      M,
      Y,
      E,
      F,
      I,
      U,
      $,
      L,
      j,
      V,
      g,
      te,
      ce;
    for (
      typeof c == "object"
        ? ((S = c.delimiter || c), (P = c.replaceWith || ""))
        : (P = c === "" ? "" : c || " "),
        x = P !== " ";
      h < d.length;
      h++
    )
      if (((k = d[h]), k.nodeType === 3)) {
        for (
          V = k.textContent || "",
            p
              ? (V = V.replace(If, " "))
              : b &&
                (V = V.replace(
                  /\n/g,
                  P +
                    `
`
                )),
            _ && (V = _(V, a)),
            k.textContent = V,
            O = P || S ? V.split(S || P) : V.match(o) || Zs,
            te = O[O.length - 1],
            E = x ? te.slice(-1) === " " : !te,
            te || O.pop(),
            T = m,
            Y = x ? O[0].charAt(0) === " " : !O[0],
            Y && yi(" ", a, k),
            O[0] || O.shift(),
            va(O, l),
            (n && u) || (k.textContent = ""),
            F = 1;
          F <= O.length;
          F++
        )
          if (
            ((g = O[F - 1]),
            !p &&
              b &&
              g.charAt(0) ===
                `
` &&
              ((f = k.previousSibling) == null || f.remove(),
              yi(document.createElement("br"), a, k),
              (g = g.slice(1))),
            !p && g === "")
          )
            yi(P, a, k);
          else if (g === " ") a.insertBefore(document.createTextNode(" "), k);
          else {
            if (
              (x && g.charAt(0) === " " && yi(" ", a, k),
              C && F === 1 && !Y && v.indexOf(C.parentNode) > -1
                ? ((M = v[v.length - 1]),
                  M.appendChild(document.createTextNode(t ? "" : g)))
                : ((M = r(t ? "" : g)),
                  yi(M, a, k),
                  C && F === 1 && !Y && M.insertBefore(C, M.firstChild)),
              t)
            )
              for (
                U = pa
                  ? va(
                      [...pa.segment(g)].map((Te) => Te.segment),
                      l
                    )
                  : g.match(o) || Zs,
                  ce = 0;
                ce < U.length;
                ce++
              )
                M.appendChild(
                  U[ce] === " " ? document.createTextNode(" ") : t(U[ce])
                );
            if (n && u) {
              if (
                ((V = k.textContent = V.substring(g.length + 1, V.length)),
                (I = M.getBoundingClientRect()),
                I.top > T.top && I.left <= T.left)
              ) {
                for ($ = a.cloneNode(), L = a.childNodes[0]; L && L !== M; )
                  (j = L), (L = L.nextSibling), $.appendChild(j);
                a.parentNode.insertBefore($, a), i && xa($);
              }
              T = I;
            }
            (F < O.length || E) &&
              yi(
                F >= O.length ? " " : x && g.slice(-1) === " " ? " " + P : P,
                a,
                k
              );
          }
        a.removeChild(k), (C = 0);
      } else
        k.nodeType === 1 &&
          (s && s.indexOf(k) > -1
            ? (v.indexOf(k.previousSibling) > -1 &&
                v[v.length - 1].appendChild(k),
              (C = k))
            : (ql(k, e, r, t, i, n, s, o, l, !0), (C = 0)),
          i && xa(k));
  };
const Gl = class jl {
  constructor(e, r) {
    (this.isSplit = !1),
      zf(),
      (this.elements = ga(e)),
      (this.chars = []),
      (this.words = []),
      (this.lines = []),
      (this.masks = []),
      (this.vars = r),
      (this._split = () => this.isSplit && this.split(this.vars));
    let t = [],
      i,
      n = () => {
        let s = t.length,
          o;
        for (; s--; ) {
          o = t[s];
          let l = o.element.offsetWidth;
          if (l !== o.width) {
            (o.width = l), this._split();
            return;
          }
        }
      };
    (this._data = {
      orig: t,
      obs:
        typeof ResizeObserver < "u" &&
        new ResizeObserver(() => {
          clearTimeout(i), (i = setTimeout(n, 200));
        }),
    }),
      Cs(this),
      this.split(r);
  }
  split(e) {
    this.isSplit && this.revert(), (this.vars = e = e || this.vars || {});
    let {
        type: r = "chars,words,lines",
        aria: t = "auto",
        deepSlice: i = !0,
        smartWrap: n,
        onSplit: s,
        autoSplit: o = !1,
        specialChars: l,
        mask: u,
      } = this.vars,
      f = r.indexOf("lines") > -1,
      d = r.indexOf("chars") > -1,
      h = r.indexOf("words") > -1,
      c = d && !h && !f,
      p = l && ("push" in l ? new RegExp("(?:" + l.join("|") + ")", "gu") : l),
      _ = p ? new RegExp(p.source + "|" + ma.source, "gu") : ma,
      m = !!e.ignore && ga(e.ignore),
      { orig: T, animTime: b, obs: C } = this._data,
      v;
    return (
      (d || h || f) &&
        (this.elements.forEach((x, P) => {
          (T[P] = {
            element: x,
            html: x.innerHTML,
            ariaL: x.getAttribute("aria-label"),
            ariaH: x.getAttribute("aria-hidden"),
          }),
            t === "auto"
              ? x.setAttribute("aria-label", (x.textContent || "").trim())
              : t === "hidden" && x.setAttribute("aria-hidden", "true");
          let S = [],
            k = [],
            O = [],
            M = d ? Js("char", e, S) : null,
            Y = Js("word", e, k),
            E,
            F,
            I,
            U;
          if ((ql(x, e, Y, M, c, i && (f || c), m, _, p, !1), f)) {
            let $ = ns(x.childNodes),
              L = Lf(x, $, e, O),
              j,
              V = [],
              g = 0,
              te = $.map((Te) =>
                Te.nodeType === 1 ? Te.getBoundingClientRect() : ya
              ),
              ce = ya;
            for (E = 0; E < $.length; E++)
              (j = $[E]),
                j.nodeType === 1 &&
                  (j.nodeName === "BR"
                    ? (V.push(j), L(g, E + 1), (g = E + 1), (ce = te[g]))
                    : (E &&
                        te[E].top > ce.top &&
                        te[E].left <= ce.left &&
                        (L(g, E), (g = E)),
                      (ce = te[E])));
            g < E && L(g, E),
              V.forEach((Te) => {
                var he;
                return (he = Te.parentNode) == null
                  ? void 0
                  : he.removeChild(Te);
              });
          }
          if (!h) {
            for (E = 0; E < k.length; E++)
              if (
                ((F = k[E]),
                d || !F.nextSibling || F.nextSibling.nodeType !== 3)
              )
                if (n && !f) {
                  for (
                    I = document.createElement("span"),
                      I.style.whiteSpace = "nowrap";
                    F.firstChild;

                  )
                    I.appendChild(F.firstChild);
                  F.replaceWith(I);
                } else F.replaceWith(...F.childNodes);
              else
                (U = F.nextSibling),
                  U &&
                    U.nodeType === 3 &&
                    ((U.textContent =
                      (F.textContent || "") + (U.textContent || "")),
                    F.remove());
            (k.length = 0), x.normalize();
          }
          this.lines.push(...O), this.words.push(...k), this.chars.push(...S);
        }),
        u &&
          this[u] &&
          this.masks.push(
            ...this[u].map((x) => {
              let P = x.cloneNode();
              return (
                x.replaceWith(P),
                P.appendChild(x),
                x.className &&
                  (P.className = x.className.replace(/(\b\w+\b)/g, "$1-mask")),
                (P.style.overflow = "clip"),
                P
              );
            })
          )),
      (this.isSplit = !0),
      mi &&
        (o
          ? mi.addEventListener("loadingdone", this._split)
          : mi.status === "loading" &&
            console.warn("SplitText called before fonts loaded")),
      (v = s && s(this)) &&
        v.totalTime &&
        (this._data.anim = b ? v.totalTime(b) : v),
      f &&
        o &&
        this.elements.forEach((x, P) => {
          (T[P].width = x.offsetWidth), C && C.observe(x);
        }),
      this
    );
  }
  revert() {
    var e, r;
    let { orig: t, anim: i, obs: n } = this._data;
    return (
      n && n.disconnect(),
      t.forEach(({ element: s, html: o, ariaL: l, ariaH: u }) => {
        (s.innerHTML = o),
          l ? s.setAttribute("aria-label", l) : s.removeAttribute("aria-label"),
          u
            ? s.setAttribute("aria-hidden", u)
            : s.removeAttribute("aria-hidden");
      }),
      (this.chars.length =
        this.words.length =
        this.lines.length =
        t.length =
        this.masks.length =
          0),
      (this.isSplit = !1),
      mi?.removeEventListener("loadingdone", this._split),
      i && ((this._data.animTime = i.totalTime()), i.revert()),
      (r = (e = this.vars).onRevert) == null || r.call(e, this),
      this
    );
  }
  static create(e, r) {
    return new jl(e, r);
  }
  static register(e) {
    (Wi = Wi || e || window.gsap),
      Wi && ((ns = Wi.utils.toArray), (Cs = Wi.core.context || Cs)),
      !Qs && window.innerWidth > 0 && ((mi = document.fonts), (Qs = !0));
  }
};
Gl.version = "3.13.0";
let cr = Gl;
Pe.registerPlugin(ae, ui);
const Nf = ui.create({ smooth: 2, effects: !0, smoothTouch: 0.1 });
Nf.effects(".landing-page img", { speed: 0.6 });
const Bf = document.querySelector(".counter");
window.addEventListener("DOMContentLoaded", () => {
  const a = document.querySelector("canvas"),
    e = a.getContext("2d"),
    r = { currentIndex: 0, maxIndex: 250 };
  let t = 0;
  const i = [],
    n = () => {
      for (let h = 1; h <= r.maxIndex; h++) {
        const c = `./CompressedAnimationImages/${h
            .toString()
            .padStart(4, "0")}.jpg`,
          p = new Image();
        (p.src = c),
          (p.onload = () => {
            t++;
            const _ = ((t / r.maxIndex) * 100).toFixed(0);
            (Bf.textContent = `${_}%`),
              t === r.maxIndex &&
                (s(r.currentIndex),
                o(),
                Pe.to(".loader", { opacity: 0, ease: "expo.out", duration: 1 }),
                d());
          }),
          i.push(p);
      }
    },
    s = (h) => {
      if (h >= 0 && h <= r.maxIndex) {
        const c = i[h];
        (a.width = window.innerWidth), (a.height = window.innerHeight);
        const p = a.width / c.width,
          _ = a.height / c.height,
          m = Math.max(p, _),
          T = c.width * m,
          b = c.height * m,
          C = (a.width - T) / 2,
          v = (a.height - b) / 2;
        e.clearRect(0, 0, a.width, a.height),
          (e.imageSmoothingQuality = "high"),
          (e.imageSmoothingEnabled = !0),
          e.drawImage(c, C, v, T, b),
          (r.currentIndex = h);
      }
    };
  window.addEventListener("resize", () => {
    s(Math.floor(r.currentIndex));
  });
  const o = () => {
    const h = (v) => ({
      currentIndex: v,
      onUpdate: () => s(Math.floor(r.currentIndex)),
    });
    let c = cr.create(".text1 h2", {
        type: "words, lines",
        mask: "lines",
        wordsClass: "wordClass",
      }),
      p = cr.create(".text2 h2", {
        type: "words, lines",
        mask: "lines",
        wordsClass: "wordClass",
      });
    Pe.set(p.words, { yPercent: 100 });
    let _ = cr.create(".text3 h2", {
      type: "words, lines",
      mask: "lines",
      wordsClass: "wordClass",
    });
    Pe.set(_.words, { yPercent: 100 });
    let m = cr.create(".text4 h2", {
      type: "words, lines",
      mask: "lines",
      wordsClass: "wordClass",
    });
    Pe.set(m.words, { yPercent: 100 });
    let T = cr.create(".text5 h2", {
      type: "words, lines",
      mask: "lines",
      wordsClass: "wordClass",
    });
    Pe.set(T.words, { yPercent: 100 });
    let b = cr.create(".text6 h2", {
      type: "words, lines",
      mask: "lines",
      wordsClass: "wordClass",
    });
    Pe.set(b.words, { yPercent: 100 });
    let C = cr.create(".footertext h2", {
      type: "words, lines",
      mask: "lines",
      wordsClass: "wordClass",
    });
    Pe.set(C.words, { yPercent: 100 }),
      Pe.timeline({
        scrollTrigger: {
          trigger: ".scroll-div",
          start: "top top",
          scrub: 1,
          ease: "expo.out",
        },
      })
        .to(r, h(30), "a")
        .to(
          c.words,
          { yPercent: 100, stagger: { each: "0.007", from: "random" } },
          "a"
        )
        .to(r, h(40), "b")
        .to(
          p.words,
          { yPercent: 0, stagger: { each: "0.006", from: "random" } },
          "b"
        )
        .to(r, h(90), "c")
        .to(r, h(110), "d")
        .to(
          p.words,
          { yPercent: 100, stagger: { each: "0.006", from: "random" } },
          "d"
        )
        .to(r, h(145), "e")
        .to(
          _.words,
          { yPercent: 0, stagger: { each: "0.011", from: "random" } },
          "e"
        )
        .to(r, h(155), "f")
        .to(r, h(165), "g")
        .to(
          _.words,
          { yPercent: 100, stagger: { each: "0.008", from: "random" } },
          "g"
        )
        .to(r, h(175), "h")
        .to(
          m.words,
          { yPercent: 0, stagger: { each: "0.01", from: "random" } },
          "h"
        )
        .to(r, h(185), "i")
        .to(r, h(195), "j")
        .to(
          m.words,
          { yPercent: 100, stagger: { each: "0.008", from: "random" } },
          "j"
        )
        .to(r, h(205), "k")
        .to(
          T.words,
          { yPercent: 0, stagger: { each: "0.01", from: "random" } },
          "k"
        )
        .to(r, h(215), "l")
        .to(r, h(225), "m")
        .to(
          T.words,
          { yPercent: 100, stagger: { each: "0.008", from: "random" } },
          "m"
        )
        .to(r, h(235), "n")
        .to(
          b.words,
          { yPercent: 0, stagger: { each: "0.01", from: "random" } },
          "n"
        )
        .to(r, h(237), "o")
        .to(r, h(241), "p")
        .to(
          b.words,
          { yPercent: 100, stagger: { each: "0.0085", from: "random" } },
          "p"
        )
        .to(r, h(249), "q")
        .to(C.words, { yPercent: 0, duration: 1 }, "q")
        .to(r, h(249), "r")
        .to(C.words, { yPercent: 0, duration: 1 }, "r")
        .to(".detail", { opacity: 1, duration: 0.2 }, "r");
  };
  n();
  let l = document.querySelector(".stick").parentElement.offsetHeight;
  Pe.timeline({
    scrollTrigger: {
      trigger: ".stick",
      start: "top top",
      end: () => "+=" + l,
      scrub: !0,
      pin: !0,
      pinType: "transform",
      onEnter() {},
    },
  });
  let u = cr.create(".landing-text h1", {
      type: "words, lines",
      mask: "lines",
      wordsClass: "wordClass1",
    }),
    f = cr.create(".loader h2", {
      type: "words, lines",
      mask: "lines",
      wordsClass: "wordClass",
    });
  Pe.fromTo(
    f.words,
    { yPercent: 100 },
    {
      yPercent: 0,
      duration: 0.5,
      stagger: { each: 0.2, from: "random" },
      repeat: -1,
      repeatRefresh: !0,
      yoyo: !0,
    }
  ),
    Pe.set([u.words], { yPercent: 100 }),
    Pe.set(".landing-page img", { scale: 1.4 }),
    Pe.set(".scrolltext", { opacity: 0 }),
    Pe.set(".sameline-text h2", { opacity: 0, yPercent: 60 });
  const d = () => {
    Pe.to(".landing-page img", { scale: 1, duration: 2.1, ease: "expo.out" }),
      Pe.to(u.words, {
        yPercent: 0,
        duration: 1,
        stagger: { each: 0.05, from: "random" },
        ease: "expo.out",
      }),
      Pe.to(".sameline-text h2", {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "expo.out",
      }),
      Pe.to(".scrolltext", { opacity: 1, duration: 1.5, ease: "expo.out" });
  };
  Pe.fromTo(
    ".movingdiv",
    { xPercent: -100 },
    { xPercent: 100, duration: 2.5, ease: "expo.inOut", repeat: -1 }
  );
});
const eo = document.querySelector(".custom-cursor");
let wa;
Pe.set("cursor", {});
document.addEventListener("mousemove", (a) => {
  Pe.to(eo, { x: a.clientX, y: a.clientY, duration: 0.2, ease: "power2.out" });
});
window.addEventListener("scroll", () => {
  Pe.to(eo, { opacity: 0, duration: 1.5 }),
    clearTimeout(wa),
    (wa = setTimeout(() => {
      eo.style.opacity = 1;
    }, 200));
});
