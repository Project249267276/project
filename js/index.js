(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        t(i);
    new MutationObserver(i => {
        for (const n of i)
            if (n.type === "childList")
                for (const s of n.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && t(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(i) {
        const n = {};
        return i.integrity && (n.integrity = i.integrity),
            i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? n.credentials = "include" : i.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
            n
    }

    function t(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const n = r(i);
        fetch(i.href, n)
    }
})();
class rh {
    constructor() {
        this.blocks = document.querySelectorAll("[data-block]"),
            this.init()
    }
    init() {
        this.blocks.forEach(e => {
            const r = e.getAttribute("data-block");
            this.createBlock(r, e)
        })
    }
    createBlock() {
        return console.error("No createBlock for this factory"),
            null
    }
}

function Ir(o) {
    if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}

function Xu(o, e) {
    o.prototype = Object.create(e.prototype),
        o.prototype.constructor = o,
        o.__proto__ = e
}
/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Zt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    vn = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Ua, zt, lt, lr = 1e8,
    Fe = 1 / lr,
    ua = Math.PI * 2,
    ih = ua / 4,
    nh = 0,
    Yu = Math.sqrt,
    oh = Math.cos,
    sh = Math.sin,
    gt = function(e) {
        return typeof e == "string"
    },
    et = function(e) {
        return typeof e == "function"
    },
    Wr = function(e) {
        return typeof e == "number"
    },
    Ka = function(e) {
        return typeof e > "u"
    },
    Rr = function(e) {
        return typeof e == "object"
    },
    qt = function(e) {
        return e !== !1
    },
    Gu = function() {
        return typeof window < "u"
    },
    Mo = function(e) {
        return et(e) || gt(e)
    },
    Hu = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    kt = Array.isArray,
    ca = /(?:-?\.?\d|\.)+/gi,
    Wu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Fs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ju = /[+-]=-?[.\d]+/,
    Uu = /[^,'"\[\]\s]+/gi,
    ah = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Ke, sr, fa, Qa, Jt = {},
    ls = {},
    Ku, Qu = function(e) {
        return (ls = Bi(e, Jt)) && er
    },
    Za = function(e, r) {
        return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()")
    },
    us = function(e, r) {
        return !r && console.warn(e)
    },
    Zu = function(e, r) {
        return e && (Jt[e] = r) && ls && (ls[e] = r) || Jt
    },
    co = function() {
        return 0
    },
    lh = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    Ho = {
        suppressEvents: !0,
        kill: !1
    },
    uh = {
        suppressEvents: !0
    },
    Ja = {},
    si = [],
    ha = {},
    Ju, jt = {},
    Ns = {},
    Ml = 30,
    Wo = [],
    el = "",
    tl = function(e) {
        var r = e[0],
            t, i;
        if (Rr(r) || et(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
            for (i = Wo.length; i-- && !Wo[i].targetTest(r);)
            ;
            t = Wo[i]
        }
        for (i = e.length; i--;)
            e[i] && (e[i]._gsap || (e[i]._gsap = new wc(e[i], t))) || e.splice(i, 1);
        return e
    },
    Oi = function(e) {
        return e._gsap || tl(ur(e))[0]._gsap
    },
    ec = function(e, r, t) {
        return (t = e[r]) && et(t) ? e[r]() : Ka(t) && e.getAttribute && e.getAttribute(r) || t
    },
    Vt = function(e, r) {
        return (e = e.split(",")).forEach(r) || e
    },
    ot = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    vt = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    un = function(e, r) {
        var t = r.charAt(0),
            i = parseFloat(r.substr(2));
        return e = parseFloat(e),
            t === "+" ? e + i : t === "-" ? e - i : t === "*" ? e * i : e / i
    },
    ch = function(e, r) {
        for (var t = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < t;)
        ;
        return i < t
    },
    cs = function() {
        var e = si.length,
            r = si.slice(0),
            t, i;
        for (ha = {},
            si.length = 0,
            t = 0; t < e; t++)
            i = r[t],
            i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    },
    tc = function(e, r, t, i) {
        si.length && cs(),
            e.render(r, t, i || zt && r < 0 && (e._initted || e._startAt)),
            si.length && cs()
    },
    rc = function(e) {
        var r = parseFloat(e);
        return (r || r === 0) && (e + "").match(Uu).length < 2 ? r : gt(e) ? e.trim() : e
    },
    ic = function(e) {
        return e
    },
    dr = function(e, r) {
        for (var t in r)
            t in e || (e[t] = r[t]);
        return e
    },
    fh = function(e) {
        return function(r, t) {
            for (var i in t)
                i in r || i === "duration" && e || i === "ease" || (r[i] = t[i])
        }
    },
    Bi = function(e, r) {
        for (var t in r)
            e[t] = r[t];
        return e
    },
    Pl = function o(e, r) {
        for (var t in r)
            t !== "__proto__" && t !== "constructor" && t !== "prototype" && (e[t] = Rr(r[t]) ? o(e[t] || (e[t] = {}), r[t]) : r[t]);
        return e
    },
    fs = function(e, r) {
        var t = {},
            i;
        for (i in e)
            i in r || (t[i] = e[i]);
        return t
    },
    Wn = function(e) {
        var r = e.parent || Ke,
            t = e.keyframes ? fh(kt(e.keyframes)) : dr;
        if (qt(e.inherit))
            for (; r;)
                t(e, r.vars.defaults),
                r = r.parent || r._dp;
        return e
    },
    hh = function(e, r) {
        for (var t = e.length, i = t === r.length; i && t-- && e[t] === r[t];)
        ;
        return t < 0
    },
    nc = function(e, r, t, i, n) {
        t === void 0 && (t = "_first"),
            i === void 0 && (i = "_last");
        var s = e[i],
            a;
        if (n)
            for (a = r[n]; s && s[n] > a;)
                s = s._prev;
        return s ? (r._next = s._next,
                s._next = r) : (r._next = e[t],
                e[t] = r),
            r._next ? r._next._prev = r : e[i] = r,
            r._prev = s,
            r.parent = r._dp = e,
            r
    },
    Es = function(e, r, t, i) {
        t === void 0 && (t = "_first"),
            i === void 0 && (i = "_last");
        var n = r._prev,
            s = r._next;
        n ? n._next = s : e[t] === r && (e[t] = s),
            s ? s._prev = n : e[i] === r && (e[i] = n),
            r._next = r._prev = r.parent = null
    },
    ci = function(e, r) {
        e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove(e),
            e._act = 0
    },
    Di = function(e, r) {
        if (e && (!r || r._end > e._dur || r._start < 0))
            for (var t = e; t;)
                t._dirty = 1,
                t = t.parent;
        return e
    },
    dh = function(e) {
        for (var r = e.parent; r && r.parent;)
            r._dirty = 1,
            r.totalDuration(),
            r = r.parent;
        return e
    },
    da = function(e, r, t, i) {
        return e._startAt && (zt ? e._startAt.revert(Ho) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(r, !0, i))
    },
    ph = function o(e) {
        return !e || e._ts && o(e.parent)
    },
    El = function(e) {
        return e._repeat ? bn(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    bn = function(e, r) {
        var t = Math.floor(e /= r);
        return e && t === e ? t - 1 : t
    },
    hs = function(e, r) {
        return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    },
    Os = function(e) {
        return e._end = vt(e._start + (e._tDur / Math.abs(e._ts || e._rts || Fe) || 0))
    },
    Ds = function(e, r) {
        var t = e._dp;
        return t && t.smoothChildTiming && e._ts && (e._start = vt(t._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)),
                Os(e),
                t._dirty || Di(t, e)),
            e
    },
    oc = function(e, r) {
        var t;
        if ((r._time || r._initted && !r._dur) && (t = hs(e.rawTime(), r),
                (!r._dur || So(0, r.totalDuration(), t) - r._tTime > Fe) && r.render(t, !0)),
            Di(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (t = e; t._dp;)
                    t.rawTime() >= 0 && t.totalTime(t._tTime),
                    t = t._dp;
            e._zTime = -Fe
        }
    },
    Or = function(e, r, t, i) {
        return r.parent && ci(r),
            r._start = vt((Wr(t) ? t : t || e !== Ke ? or(e, t, r) : e._time) + r._delay),
            r._end = vt(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)),
            nc(e, r, "_first", "_last", e._sort ? "_start" : 0),
            pa(r) || (e._recent = r),
            i || oc(e, r),
            e._ts < 0 && Ds(e, e._tTime),
            e
    },
    sc = function(e, r) {
        return (Jt.ScrollTrigger || Za("scrollTrigger", r)) && Jt.ScrollTrigger.create(r, e)
    },
    ac = function(e, r, t, i, n) {
        if (il(e, r, n), !e._initted)
            return 1;
        if (!t && e._pt && !zt && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Ju !== Ut.frame)
            return si.push(e),
                e._lazy = [n, i],
                1
    },
    gh = function o(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || o(r))
    },
    pa = function(e) {
        var r = e.data;
        return r === "isFromStart" || r === "isStart"
    },
    mh = function(e, r, t, i) {
        var n = e.ratio,
            s = r < 0 || !r && (!e._start && gh(e) && !(!e._initted && pa(e)) || (e._ts < 0 || e._dp._ts < 0) && !pa(e)) ? 0 : 1,
            a = e._rDelay,
            l = 0,
            c, f, h;
        if (a && e._repeat && (l = So(0, e._tDur, r),
                f = bn(l, a),
                e._yoyo && f & 1 && (s = 1 - s),
                f !== bn(e._tTime, a) && (n = 1 - s,
                    e.vars.repeatRefresh && e._initted && e.invalidate())),
            s !== n || zt || i || e._zTime === Fe || !r && e._zTime) {
            if (!e._initted && ac(e, r, i, t, l))
                return;
            for (h = e._zTime,
                e._zTime = r || (t ? Fe : 0),
                t || (t = r && !h),
                e.ratio = s,
                e._from && (s = 1 - s),
                e._time = 0,
                e._tTime = l,
                c = e._pt; c;)
                c.r(s, c.d),
                c = c._next;
            r < 0 && da(e, r, t, !0),
                e._onUpdate && !t && cr(e, "onUpdate"),
                l && e._repeat && !t && e.parent && cr(e, "onRepeat"),
                (r >= e._tDur || r < 0) && e.ratio === s && (s && ci(e, 1), !t && !zt && (cr(e, s ? "onComplete" : "onReverseComplete", !0),
                    e._prom && e._prom()))
        } else
            e._zTime || (e._zTime = r)
    },
    _h = function(e, r, t) {
        var i;
        if (t > r)
            for (i = e._first; i && i._start <= t;) {
                if (i.data === "isPause" && i._start > r)
                    return i;
                i = i._next
            }
        else
            for (i = e._last; i && i._start >= t;) {
                if (i.data === "isPause" && i._start < r)
                    return i;
                i = i._prev
            }
    },
    wn = function(e, r, t, i) {
        var n = e._repeat,
            s = vt(r) || 0,
            a = e._tTime / e._tDur;
        return a && !i && (e._time *= s / e._dur),
            e._dur = s,
            e._tDur = n ? n < 0 ? 1e10 : vt(s * (n + 1) + e._rDelay * n) : s,
            a > 0 && !i && Ds(e, e._tTime = e._tDur * a),
            e.parent && Os(e),
            t || Di(e.parent, e),
            e
    },
    Ol = function(e) {
        return e instanceof Bt ? Di(e) : wn(e, e._dur)
    },
    yh = {
        _start: 0,
        endTime: co,
        totalDuration: co
    },
    or = function o(e, r, t) {
        var i = e.labels,
            n = e._recent || yh,
            s = e.duration() >= lr ? n.endTime(!1) : e._dur,
            a, l, c;
        return gt(r) && (isNaN(r) || r in i) ? (l = r.charAt(0),
            c = r.substr(-1) === "%",
            a = r.indexOf("="),
            l === "<" || l === ">" ? (a >= 0 && (r = r.replace(/=/, "")),
                (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (c ? (a < 0 ? n : t).totalDuration() / 100 : 1)) : a < 0 ? (r in i || (i[r] = s),
                i[r]) : (l = parseFloat(r.charAt(a - 1) + r.substr(a + 1)),
                c && t && (l = l / 100 * (kt(t) ? t[0] : t).totalDuration()),
                a > 1 ? o(e, r.substr(0, a - 1), t) + l : s + l)) : r == null ? s : +r
    },
    jn = function(e, r, t) {
        var i = Wr(r[1]),
            n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            s = r[n],
            a, l;
        if (i && (s.duration = r[1]),
            s.parent = t,
            e) {
            for (a = s,
                l = t; l && !("immediateRender" in a);)
                a = l.vars.defaults || {},
                l = qt(l.vars.inherit) && l.parent;
            s.immediateRender = qt(a.immediateRender),
                e < 2 ? s.runBackwards = 1 : s.startAt = r[n - 1]
        }
        return new ft(r[0], s, r[n + 1])
    },
    pi = function(e, r) {
        return e || e === 0 ? r(e) : r
    },
    So = function(e, r, t) {
        return t < e ? e : t > r ? r : t
    },
    Tt = function(e, r) {
        return !gt(e) || !(r = ah.exec(e)) ? "" : r[1]
    },
    vh = function(e, r, t) {
        return pi(t, function(i) {
            return So(e, r, i)
        })
    },
    ga = [].slice,
    lc = function(e, r) {
        return e && Rr(e) && "length" in e && (!r && !e.length || e.length - 1 in e && Rr(e[0])) && !e.nodeType && e !== sr
    },
    bh = function(e, r, t) {
        return t === void 0 && (t = []),
            e.forEach(function(i) {
                var n;
                return gt(i) && !r || lc(i, 1) ? (n = t).push.apply(n, ur(i)) : t.push(i)
            }) || t
    },
    ur = function(e, r, t) {
        return lt && !r && lt.selector ? lt.selector(e) : gt(e) && !t && (fa || !xn()) ? ga.call((r || Qa).querySelectorAll(e), 0) : kt(e) ? bh(e, t) : lc(e) ? ga.call(e, 0) : e ? [e] : []
    },
    ma = function(e) {
        return e = ur(e)[0] || us("Invalid scope") || {},
            function(r) {
                var t = e.current || e.nativeElement || e;
                return ur(r, t.querySelectorAll ? t : t === e ? us("Invalid scope") || Qa.createElement("div") : e)
            }
    },
    uc = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    },
    cc = function(e) {
        if (et(e))
            return e;
        var r = Rr(e) ? e : {
                each: e
            },
            t = Ci(r.ease),
            i = r.from || 0,
            n = parseFloat(r.base) || 0,
            s = {},
            a = i > 0 && i < 1,
            l = isNaN(i) || a,
            c = r.axis,
            f = i,
            h = i;
        return gt(i) ? f = h = {
                center: .5,
                edges: .5,
                end: 1
            }[i] || 0 : !a && l && (f = i[0],
                h = i[1]),
            function(d, u, p) {
                var g = (p || r).length,
                    m = s[g],
                    v, y, _, w, b, T, k, S, D;
                if (!m) {
                    if (D = r.grid === "auto" ? 0 : (r.grid || [1, lr])[1], !D) {
                        for (k = -lr; k < (k = p[D++].getBoundingClientRect().left) && D < g;)
                        ;
                        D--
                    }
                    for (m = s[g] = [],
                        v = l ? Math.min(D, g) * f - .5 : i % D,
                        y = D === lr ? 0 : l ? g * h / D - .5 : i / D | 0,
                        k = 0,
                        S = lr,
                        T = 0; T < g; T++)
                        _ = T % D - v,
                        w = y - (T / D | 0),
                        m[T] = b = c ? Math.abs(c === "y" ? w : _) : Yu(_ * _ + w * w),
                        b > k && (k = b),
                        b < S && (S = b);
                    i === "random" && uc(m),
                        m.max = k - S,
                        m.min = S,
                        m.v = g = (parseFloat(r.amount) || parseFloat(r.each) * (D > g ? g - 1 : c ? c === "y" ? g / D : D : Math.max(D, g / D)) || 0) * (i === "edges" ? -1 : 1),
                        m.b = g < 0 ? n - g : n,
                        m.u = Tt(r.amount || r.each) || 0,
                        t = t && g < 0 ? yc(t) : t
                }
                return g = (m[d] - m.min) / m.max || 0,
                    vt(m.b + (t ? t(g) : g) * m.v) + m.u
            }
    },
    _a = function(e) {
        var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(t) {
            var i = vt(Math.round(parseFloat(t) / e) * e * r);
            return (i - i % 1) / r + (Wr(t) ? 0 : Tt(t))
        }
    },
    fc = function(e, r) {
        var t = kt(e),
            i, n;
        return !t && Rr(e) && (i = t = e.radius || lr,
                e.values ? (e = ur(e.values),
                    (n = !Wr(e[0])) && (i *= i)) : e = _a(e.increment)),
            pi(r, t ? et(e) ? function(s) {
                    return n = e(s),
                        Math.abs(n - s) <= i ? n : s
                } :
                function(s) {
                    for (var a = parseFloat(n ? s.x : s), l = parseFloat(n ? s.y : 0), c = lr, f = 0, h = e.length, d, u; h--;)
                        n ? (d = e[h].x - a,
                            u = e[h].y - l,
                            d = d * d + u * u) : d = Math.abs(e[h] - a),
                        d < c && (c = d,
                            f = h);
                    return f = !i || c <= i ? e[f] : s,
                        n || f === s || Wr(s) ? f : f + Tt(s)
                } :
                _a(e))
    },
    hc = function(e, r, t, i) {
        return pi(kt(e) ? !r : t === !0 ? !!(t = 0) : !i, function() {
            return kt(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (r - e + t * .99)) / t) * t * i) / i
        })
    },
    wh = function() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
        return function(i) {
            return r.reduce(function(n, s) {
                return s(n)
            }, i)
        }
    },
    xh = function(e, r) {
        return function(t) {
            return e(parseFloat(t)) + (r || Tt(t))
        }
    },
    Th = function(e, r, t) {
        return pc(e, r, 0, 1, t)
    },
    dc = function(e, r, t) {
        return pi(t, function(i) {
            return e[~~r(i)]
        })
    },
    Sh = function o(e, r, t) {
        var i = r - e;
        return kt(e) ? dc(e, o(0, e.length), r) : pi(t, function(n) {
            return (i + (n - e) % i) % i + e
        })
    },
    kh = function o(e, r, t) {
        var i = r - e,
            n = i * 2;
        return kt(e) ? dc(e, o(0, e.length - 1), r) : pi(t, function(s) {
            return s = (n + (s - e) % n) % n || 0,
                e + (s > i ? n - s : s)
        })
    },
    fo = function(e) {
        for (var r = 0, t = "", i, n, s, a; ~(i = e.indexOf("random(", r));)
            s = e.indexOf(")", i),
            a = e.charAt(i + 7) === "[",
            n = e.substr(i + 7, s - i - 7).match(a ? Uu : ca),
            t += e.substr(r, i - r) + hc(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5),
            r = s + 1;
        return t + e.substr(r, e.length - r)
    },
    pc = function(e, r, t, i, n) {
        var s = r - e,
            a = i - t;
        return pi(n, function(l) {
            return t + ((l - e) / s * a || 0)
        })
    },
    Mh = function o(e, r, t, i) {
        var n = isNaN(e + r) ? 0 : function(u) {
            return (1 - u) * e + u * r
        };
        if (!n) {
            var s = gt(e),
                a = {},
                l, c, f, h, d;
            if (t === !0 && (i = 1) && (t = null),
                s)
                e = {
                    p: e
                },
                r = {
                    p: r
                };
            else if (kt(e) && !kt(r)) {
                for (f = [],
                    h = e.length,
                    d = h - 2,
                    c = 1; c < h; c++)
                    f.push(o(e[c - 1], e[c]));
                h--,
                n = function(p) {
                        p *= h;
                        var g = Math.min(d, ~~p);
                        return f[g](p - g)
                    },
                    t = r
            } else
                i || (e = Bi(kt(e) ? [] : {}, e));
            if (!f) {
                for (l in r)
                    rl.call(a, e, l, "get", r[l]);
                n = function(p) {
                    return sl(p, a) || (s ? e.p : e)
                }
            }
        }
        return pi(t, n)
    },
    Dl = function(e, r, t) {
        var i = e.labels,
            n = lr,
            s, a, l;
        for (s in i)
            a = i[s] - r,
            a < 0 == !!t && a && n > (a = Math.abs(a)) && (l = s,
                n = a);
        return l
    },
    cr = function(e, r, t) {
        var i = e.vars,
            n = i[r],
            s = lt,
            a = e._ctx,
            l, c, f;
        if (n)
            return l = i[r + "Params"],
                c = i.callbackScope || e,
                t && si.length && cs(),
                a && (lt = a),
                f = l ? n.apply(c, l) : n.call(c),
                lt = s,
                f
    },
    Nn = function(e) {
        return ci(e),
            e.scrollTrigger && e.scrollTrigger.kill(!!zt),
            e.progress() < 1 && cr(e, "onInterrupt"),
            e
    },
    nn, Ph = function(e) {
        e = !e.name && e.default || e;
        var r = e.name,
            t = et(e),
            i = r && !t && e.init ? function() {
                this._props = []
            } :
            e,
            n = {
                init: co,
                render: sl,
                add: rl,
                kill: Xh,
                modifier: Vh,
                rawVars: 0
            },
            s = {
                targetTest: 0,
                get: 0,
                getSetter: ol,
                aliases: {},
                register: 0
            };
        if (xn(),
            e !== i) {
            if (jt[r])
                return;
            dr(i, dr(fs(e, n), s)),
                Bi(i.prototype, Bi(n, fs(e, s))),
                jt[i.prop = r] = i,
                e.targetTest && (Wo.push(i),
                    Ja[r] = 1),
                r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin"
        }
        Zu(r, i),
            e.register && e.register(er, i, Xt)
    },
    $e = 255,
    In = {
        aqua: [0, $e, $e],
        lime: [0, $e, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, $e],
        navy: [0, 0, 128],
        white: [$e, $e, $e],
        olive: [128, 128, 0],
        yellow: [$e, $e, 0],
        orange: [$e, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [$e, 0, 0],
        pink: [$e, 192, 203],
        cyan: [0, $e, $e],
        transparent: [$e, $e, $e, 0]
    },
    Is = function(e, r, t) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0,
            (e * 6 < 1 ? r + (t - r) * e * 6 : e < .5 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r) * $e + .5 | 0
    },
    gc = function(e, r, t) {
        var i = e ? Wr(e) ? [e >> 16, e >> 8 & $e, e & $e] : 0 : In.black,
            n, s, a, l, c, f, h, d, u, p;
        if (!i) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
                In[e])
                i = In[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (n = e.charAt(1),
                        s = e.charAt(2),
                        a = e.charAt(3),
                        e = "#" + n + n + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
                    e.length === 9)
                    return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & $e, i & $e, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16),
                    i = [e >> 16, e >> 8 & $e, e & $e]
            } else if (e.substr(0, 3) === "hsl") {
                if (i = p = e.match(ca), !r)
                    l = +i[0] % 360 / 360,
                    c = +i[1] / 100,
                    f = +i[2] / 100,
                    s = f <= .5 ? f * (c + 1) : f + c - f * c,
                    n = f * 2 - s,
                    i.length > 3 && (i[3] *= 1),
                    i[0] = Is(l + 1 / 3, n, s),
                    i[1] = Is(l, n, s),
                    i[2] = Is(l - 1 / 3, n, s);
                else if (~e.indexOf("="))
                    return i = e.match(Wu),
                        t && i.length < 4 && (i[3] = 1),
                        i
            } else
                i = e.match(ca) || In.transparent;
            i = i.map(Number)
        }
        return r && !p && (n = i[0] / $e,
                s = i[1] / $e,
                a = i[2] / $e,
                h = Math.max(n, s, a),
                d = Math.min(n, s, a),
                f = (h + d) / 2,
                h === d ? l = c = 0 : (u = h - d,
                    c = f > .5 ? u / (2 - h - d) : u / (h + d),
                    l = h === n ? (s - a) / u + (s < a ? 6 : 0) : h === s ? (a - n) / u + 2 : (n - s) / u + 4,
                    l *= 60),
                i[0] = ~~(l + .5),
                i[1] = ~~(c * 100 + .5),
                i[2] = ~~(f * 100 + .5)),
            t && i.length < 4 && (i[3] = 1),
            i
    },
    mc = function(e) {
        var r = [],
            t = [],
            i = -1;
        return e.split(ai).forEach(function(n) {
                var s = n.match(rn) || [];
                r.push.apply(r, s),
                    t.push(i += s.length + 1)
            }),
            r.c = t,
            r
    },
    Cl = function(e, r, t) {
        var i = "",
            n = (e + i).match(ai),
            s = r ? "hsla(" : "rgba(",
            a = 0,
            l, c, f, h;
        if (!n)
            return e;
        if (n = n.map(function(d) {
                return (d = gc(d, r, 1)) && s + (r ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")"
            }),
            t && (f = mc(e),
                l = t.c,
                l.join(i) !== f.c.join(i)))
            for (c = e.replace(ai, "1").split(rn),
                h = c.length - 1; a < h; a++)
                i += c[a] + (~l.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : t).shift());
        if (!c)
            for (c = e.split(ai),
                h = c.length - 1; a < h; a++)
                i += c[a] + n[a];
        return i + c[h]
    },
    ai = function() {
        var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in In)
            o += "|" + e + "\\b";
        return new RegExp(o + ")", "gi")
    }(),
    Eh = /hsl[a]?\(/,
    _c = function(e) {
        var r = e.join(" "),
            t;
        if (ai.lastIndex = 0,
            ai.test(r))
            return t = Eh.test(r),
                e[1] = Cl(e[1], t),
                e[0] = Cl(e[0], t, mc(e[1])), !0
    },
    ho, Ut = function() {
        var o = Date.now,
            e = 500,
            r = 33,
            t = o(),
            i = t,
            n = 1e3 / 240,
            s = n,
            a = [],
            l, c, f, h, d, u, p = function g(m) {
                var v = o() - i,
                    y = m === !0,
                    _, w, b, T;
                if (v > e && (t += v - r),
                    i += v,
                    b = i - t,
                    _ = b - s,
                    (_ > 0 || y) && (T = ++h.frame,
                        d = b - h.time * 1e3,
                        h.time = b = b / 1e3,
                        s += _ + (_ >= n ? 4 : n - _),
                        w = 1),
                    y || (l = c(g)),
                    w)
                    for (u = 0; u < a.length; u++)
                        a[u](b, d, T, m)
            };
        return h = {
                time: 0,
                frame: 0,
                tick: function() {
                    p(!0)
                },
                deltaRatio: function(m) {
                    return d / (1e3 / (m || 60))
                },
                wake: function() {
                    Ku && (!fa && Gu() && (sr = fa = window,
                            Qa = sr.document || {},
                            Jt.gsap = er,
                            (sr.gsapVersions || (sr.gsapVersions = [])).push(er.version),
                            Qu(ls || sr.GreenSockGlobals || !sr.gsap && sr || {}),
                            f = sr.requestAnimationFrame),
                        l && h.sleep(),
                        c = f || function(m) {
                            return setTimeout(m, s - h.time * 1e3 + 1 | 0)
                        },
                        ho = 1,
                        p(2))
                },
                sleep: function() {
                    (f ? sr.cancelAnimationFrame : clearTimeout)(l),
                    ho = 0,
                        c = co
                },
                lagSmoothing: function(m, v) {
                    e = m || 1 / Fe,
                        r = Math.min(v, e, 0)
                },
                fps: function(m) {
                    n = 1e3 / (m || 240),
                        s = h.time * 1e3 + n
                },
                add: function(m, v, y) {
                    var _ = v ? function(w, b, T, k) {
                            m(w, b, T, k),
                                h.remove(_)
                        } :
                        m;
                    return h.remove(m),
                        a[y ? "unshift" : "push"](_),
                        xn(),
                        _
                },
                remove: function(m, v) {
                    ~(v = a.indexOf(m)) && a.splice(v, 1) && u >= v && u--
                },
                _listeners: a
            },
            h
    }(),
    xn = function() {
        return !ho && Ut.wake()
    },
    Se = {},
    Oh = /^[\d.\-M][\d.\-,\s]/,
    Dh = /["']/g,
    Ch = function(e) {
        for (var r = {}, t = e.substr(1, e.length - 3).split(":"), i = t[0], n = 1, s = t.length, a, l, c; n < s; n++)
            l = t[n],
            a = n !== s - 1 ? l.lastIndexOf(",") : l.length,
            c = l.substr(0, a),
            r[i] = isNaN(c) ? c.replace(Dh, "").trim() : +c,
            i = l.substr(a + 1).trim();
        return r
    },
    Lh = function(e) {
        var r = e.indexOf("(") + 1,
            t = e.indexOf(")"),
            i = e.indexOf("(", r);
        return e.substring(r, ~i && i < t ? e.indexOf(")", t + 1) : t)
    },
    Ah = function(e) {
        var r = (e + "").split("("),
            t = Se[r[0]];
        return t && r.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [Ch(r[1])] : Lh(e).split(",").map(rc)) : Se._CE && Oh.test(e) ? Se._CE("", e) : t
    },
    yc = function(e) {
        return function(r) {
            return 1 - e(1 - r)
        }
    },
    vc = function o(e, r) {
        for (var t = e._first, i; t;)
            t instanceof Bt ? o(t, r) : t.vars.yoyoEase && (!t._yoyo || !t._repeat) && t._yoyo !== r && (t.timeline ? o(t.timeline, r) : (i = t._ease,
                t._ease = t._yEase,
                t._yEase = i,
                t._yoyo = r)),
            t = t._next
    },
    Ci = function(e, r) {
        return e && (et(e) ? e : Se[e] || Ah(e)) || r
    },
    Hi = function(e, r, t, i) {
        t === void 0 && (t = function(l) {
                return 1 - r(1 - l)
            }),
            i === void 0 && (i = function(l) {
                return l < .5 ? r(l * 2) / 2 : 1 - r((1 - l) * 2) / 2
            });
        var n = {
                easeIn: r,
                easeOut: t,
                easeInOut: i
            },
            s;
        return Vt(e, function(a) {
                Se[a] = Jt[a] = n,
                    Se[s = a.toLowerCase()] = t;
                for (var l in n)
                    Se[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Se[a + "." + l] = n[l]
            }),
            n
    },
    bc = function(e) {
        return function(r) {
            return r < .5 ? (1 - e(1 - r * 2)) / 2 : .5 + e((r - .5) * 2) / 2
        }
    },
    Bs = function o(e, r, t) {
        var i = r >= 1 ? r : 1,
            n = (t || (e ? .3 : .45)) / (r < 1 ? r : 1),
            s = n / ua * (Math.asin(1 / i) || 0),
            a = function(f) {
                return f === 1 ? 1 : i * Math.pow(2, -10 * f) * sh((f - s) * n) + 1
            },
            l = e === "out" ? a : e === "in" ? function(c) {
                return 1 - a(1 - c)
            } :
            bc(a);
        return n = ua / n,
            l.config = function(c, f) {
                return o(e, c, f)
            },
            l
    },
    $s = function o(e, r) {
        r === void 0 && (r = 1.70158);
        var t = function(s) {
                return s ? --s * s * ((r + 1) * s + r) + 1 : 0
            },
            i = e === "out" ? t : e === "in" ? function(n) {
                return 1 - t(1 - n)
            } :
            bc(t);
        return i.config = function(n) {
                return o(e, n)
            },
            i
    };
Vt("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, e) {
    var r = e < 5 ? e + 1 : e;
    Hi(o + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } :
        function(t) {
            return t
        },
        function(t) {
            return 1 - Math.pow(1 - t, r)
        },
        function(t) {
            return t < .5 ? Math.pow(t * 2, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
        })
});
Se.Linear.easeNone = Se.none = Se.Linear.easeIn;
Hi("Elastic", Bs("in"), Bs("out"), Bs());
(function(o, e) {
    var r = 1 / e,
        t = 2 * r,
        i = 2.5 * r,
        n = function(a) {
            return a < r ? o * a * a : a < t ? o * Math.pow(a - 1.5 / e, 2) + .75 : a < i ? o * (a -= 2.25 / e) * a + .9375 : o * Math.pow(a - 2.625 / e, 2) + .984375
        };
    Hi("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
})(7.5625, 2.75);
Hi("Expo", function(o) {
    return o ? Math.pow(2, 10 * (o - 1)) : 0
});
Hi("Circ", function(o) {
    return -(Yu(1 - o * o) - 1)
});
Hi("Sine", function(o) {
    return o === 1 ? 1 : -oh(o * ih) + 1
});
Hi("Back", $s("in"), $s("out"), $s());
Se.SteppedEase = Se.steps = Jt.SteppedEase = {
    config: function(e, r) {
        e === void 0 && (e = 1);
        var t = 1 / e,
            i = e + (r ? 0 : 1),
            n = r ? 1 : 0,
            s = 1 - Fe;
        return function(a) {
            return ((i * So(0, s, a) | 0) + n) * t
        }
    }
};
vn.ease = Se["quad.out"];
Vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
    return el += o + "," + o + "Params,"
});
var wc = function(e, r) {
        this.id = nh++,
            e._gsap = this,
            this.target = e,
            this.harness = r,
            this.get = r ? r.get : ec,
            this.set = r ? r.getSetter : ol
    },
    Tn = function() {
        function o(r) {
            this.vars = r,
                this._delay = +r.delay || 0,
                (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0,
                    this._yoyo = !!r.yoyo || !!r.yoyoEase),
                this._ts = 1,
                wn(this, +r.duration, 1, 1),
                this.data = r.data,
                lt && (this._ctx = lt,
                    lt.data.push(this)),
                ho || Ut.wake()
        }
        var e = o.prototype;
        return e.delay = function(t) {
                return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
                    this._delay = t,
                    this) : this._delay
            },
            e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            },
            e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0,
                    wn(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            },
            e.totalTime = function(t, i) {
                if (xn(), !arguments.length)
                    return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (Ds(this, t), !n._dp || n.parent || oc(n, this); n && n.parent;)
                        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                        n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Or(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !i || this._initted && Math.abs(this._zTime) === Fe || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
                        tc(this, t, i)),
                    this
            },
            e.time = function(t, i) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + El(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), i) : this._time
            },
            e.totalProgress = function(t, i) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            },
            e.progress = function(t, i) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + El(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            },
            e.iteration = function(t, i) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * n, i) : this._repeat ? bn(this._tTime, n) + 1 : 1
            },
            e.timeScale = function(t) {
                if (!arguments.length)
                    return this._rts === -Fe ? 0 : this._rts;
                if (this._rts === t)
                    return this;
                var i = this.parent && this._ts ? hs(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0,
                    this._ts = this._ps || t === -Fe ? 0 : this._rts,
                    this.totalTime(So(-this._delay, this._tDur, i), !0),
                    Os(this),
                    dh(this)
            },
            e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t,
                        t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                            this._ts = this._act = 0) : (xn(),
                            this._ts = this._rts,
                            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== Fe && (this._tTime -= Fe)))),
                    this) : this._ps
            },
            e.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var i = this.parent || this._dp;
                    return i && (i._sort || !this.parent) && Or(i, this, t - this._delay),
                        this
                }
                return this._start
            },
            e.endTime = function(t) {
                return this._start + (qt(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            },
            e.rawTime = function(t) {
                var i = this.parent || this._dp;
                return i ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? hs(i.rawTime(t), this) : this._tTime : this._tTime
            },
            e.revert = function(t) {
                t === void 0 && (t = uh);
                var i = zt;
                return zt = t,
                    (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
                        this.totalTime(-.01, t.suppressEvents)),
                    this.data !== "nested" && t.kill !== !1 && this.kill(),
                    zt = i,
                    this
            },
            e.globalTime = function(t) {
                for (var i = this, n = arguments.length ? t : i.rawTime(); i;)
                    n = i._start + n / (i._ts || 1),
                    i = i._dp;
                return !this.parent && this.vars.immediateRender ? -1 : n
            },
            e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
                    Ol(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
            },
            e.repeatDelay = function(t) {
                if (arguments.length) {
                    var i = this._time;
                    return this._rDelay = t,
                        Ol(this),
                        i ? this.time(i) : this
                }
                return this._rDelay
            },
            e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t,
                    this) : this._yoyo
            },
            e.seek = function(t, i) {
                return this.totalTime(or(this, t), qt(i))
            },
            e.restart = function(t, i) {
                return this.play().totalTime(t ? -this._delay : 0, qt(i))
            },
            e.play = function(t, i) {
                return t != null && this.seek(t, i),
                    this.reversed(!1).paused(!1)
            },
            e.reverse = function(t, i) {
                return t != null && this.seek(t || this.totalDuration(), i),
                    this.reversed(!0).paused(!1)
            },
            e.pause = function(t, i) {
                return t != null && this.seek(t, i),
                    this.paused(!0)
            },
            e.resume = function() {
                return this.paused(!1)
            },
            e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Fe : 0)),
                    this) : this._rts < 0
            },
            e.invalidate = function() {
                return this._initted = this._act = 0,
                    this._zTime = -Fe,
                    this
            },
            e.isActive = function() {
                var t = this.parent || this._dp,
                    i = this._start,
                    n;
                return !!(!t || this._ts && this._initted && t.isActive() && (n = t.rawTime(!0)) >= i && n < this.endTime(!0) - Fe)
            },
            e.eventCallback = function(t, i, n) {
                var s = this.vars;
                return arguments.length > 1 ? (i ? (s[t] = i,
                        n && (s[t + "Params"] = n),
                        t === "onUpdate" && (this._onUpdate = i)) : delete s[t],
                    this) : s[t]
            },
            e.then = function(t) {
                var i = this;
                return new Promise(function(n) {
                    var s = et(t) ? t : ic,
                        a = function() {
                            var c = i.then;
                            i.then = null,
                                et(s) && (s = s(i)) && (s.then || s === i) && (i.then = c),
                                n(s),
                                i.then = c
                        };
                    i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a
                })
            },
            e.kill = function() {
                Nn(this)
            },
            o
    }();
dr(Tn.prototype, {
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
    _zTime: -Fe,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Bt = function(o) {
    Xu(e, o);

    function e(t, i) {
        var n;
        return t === void 0 && (t = {}),
            n = o.call(this, t) || this,
            n.labels = {},
            n.smoothChildTiming = !!t.smoothChildTiming,
            n.autoRemoveChildren = !!t.autoRemoveChildren,
            n._sort = qt(t.sortChildren),
            Ke && Or(t.parent || Ke, Ir(n), i),
            t.reversed && n.reverse(),
            t.paused && n.paused(!0),
            t.scrollTrigger && sc(Ir(n), t.scrollTrigger),
            n
    }
    var r = e.prototype;
    return r.to = function(i, n, s) {
            return jn(0, arguments, this),
                this
        },
        r.from = function(i, n, s) {
            return jn(1, arguments, this),
                this
        },
        r.fromTo = function(i, n, s, a) {
            return jn(2, arguments, this),
                this
        },
        r.set = function(i, n, s) {
            return n.duration = 0,
                n.parent = this,
                Wn(n).repeatDelay || (n.repeat = 0),
                n.immediateRender = !!n.immediateRender,
                new ft(i, n, or(this, s), 1),
                this
        },
        r.call = function(i, n, s) {
            return Or(this, ft.delayedCall(0, i, n), s)
        },
        r.staggerTo = function(i, n, s, a, l, c, f) {
            return s.duration = n,
                s.stagger = s.stagger || a,
                s.onComplete = c,
                s.onCompleteParams = f,
                s.parent = this,
                new ft(i, s, or(this, l)),
                this
        },
        r.staggerFrom = function(i, n, s, a, l, c, f) {
            return s.runBackwards = 1,
                Wn(s).immediateRender = qt(s.immediateRender),
                this.staggerTo(i, n, s, a, l, c, f)
        },
        r.staggerFromTo = function(i, n, s, a, l, c, f, h) {
            return a.startAt = s,
                Wn(a).immediateRender = qt(a.immediateRender),
                this.staggerTo(i, n, a, l, c, f, h)
        },
        r.render = function(i, n, s) {
            var a = this._time,
                l = this._dirty ? this.totalDuration() : this._tDur,
                c = this._dur,
                f = i <= 0 ? 0 : vt(i),
                h = this._zTime < 0 != i < 0 && (this._initted || !c),
                d, u, p, g, m, v, y, _, w, b, T, k;
            if (this !== Ke && f > l && i >= 0 && (f = l),
                f !== this._tTime || s || h) {
                if (a !== this._time && c && (f += this._time - a,
                        i += this._time - a),
                    d = f,
                    w = this._start,
                    _ = this._ts,
                    v = !_,
                    h && (c || (a = this._zTime),
                        (i || !n) && (this._zTime = i)),
                    this._repeat) {
                    if (T = this._yoyo,
                        m = c + this._rDelay,
                        this._repeat < -1 && i < 0)
                        return this.totalTime(m * 100 + i, n, s);
                    if (d = vt(f % m),
                        f === l ? (g = this._repeat,
                            d = c) : (g = ~~(f / m),
                            g && g === f / m && (d = c,
                                g--),
                            d > c && (d = c)),
                        b = bn(this._tTime, m), !a && this._tTime && b !== g && (b = g),
                        T && g & 1 && (d = c - d,
                            k = 1),
                        g !== b && !this._lock) {
                        var S = T && b & 1,
                            D = S === (T && g & 1);
                        if (g < b && (S = !S),
                            a = S ? 0 : c,
                            this._lock = 1,
                            this.render(a || (k ? 0 : vt(g * m)), n, !c)._lock = 0,
                            this._tTime = f, !n && this.parent && cr(this, "onRepeat"),
                            this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1),
                            a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (c = this._dur,
                            l = this._tDur,
                            D && (this._lock = 2,
                                a = S ? c : -1e-4,
                                this.render(a, !0),
                                this.vars.repeatRefresh && !k && this.invalidate()),
                            this._lock = 0, !this._ts && !v)
                            return this;
                        vc(this, k)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (y = _h(this, vt(a), vt(d)),
                        y && (f -= d - (d = y._start))),
                    this._tTime = f,
                    this._time = d,
                    this._act = !_,
                    this._initted || (this._onUpdate = this.vars.onUpdate,
                        this._initted = 1,
                        this._zTime = i,
                        a = 0), !a && d && !n && (cr(this, "onStart"),
                        this._tTime !== f))
                    return this;
                if (d >= a && i >= 0)
                    for (u = this._first; u;) {
                        if (p = u._next,
                            (u._act || d >= u._start) && u._ts && y !== u) {
                            if (u.parent !== this)
                                return this.render(i, n, s);
                            if (u.render(u._ts > 0 ? (d - u._start) * u._ts : (u._dirty ? u.totalDuration() : u._tDur) + (d - u._start) * u._ts, n, s),
                                d !== this._time || !this._ts && !v) {
                                y = 0,
                                    p && (f += this._zTime = -Fe);
                                break
                            }
                        }
                        u = p
                    }
                else {
                    u = this._last;
                    for (var $ = i < 0 ? i : d; u;) {
                        if (p = u._prev,
                            (u._act || $ <= u._end) && u._ts && y !== u) {
                            if (u.parent !== this)
                                return this.render(i, n, s);
                            if (u.render(u._ts > 0 ? ($ - u._start) * u._ts : (u._dirty ? u.totalDuration() : u._tDur) + ($ - u._start) * u._ts, n, s || zt && (u._initted || u._startAt)),
                                d !== this._time || !this._ts && !v) {
                                y = 0,
                                    p && (f += this._zTime = $ ? -Fe : Fe);
                                break
                            }
                        }
                        u = p
                    }
                }
                if (y && !n && (this.pause(),
                        y.render(d >= a ? 0 : -Fe)._zTime = d >= a ? 1 : -1,
                        this._ts))
                    return this._start = w,
                        Os(this),
                        this.render(i, n, s);
                this._onUpdate && !n && cr(this, "onUpdate", !0),
                    (f === l && this._tTime >= this.totalDuration() || !f && a) && (w === this._start || Math.abs(_) !== Math.abs(this._ts)) && (this._lock || ((i || !c) && (f === l && this._ts > 0 || !f && this._ts < 0) && ci(this, 1), !n && !(i < 0 && !a) && (f || a || !l) && (cr(this, f === l && i >= 0 ? "onComplete" : "onReverseComplete", !0),
                        this._prom && !(f < l && this.timeScale() > 0) && this._prom())))
            }
            return this
        },
        r.add = function(i, n) {
            var s = this;
            if (Wr(n) || (n = or(this, n, i)), !(i instanceof Tn)) {
                if (kt(i))
                    return i.forEach(function(a) {
                            return s.add(a, n)
                        }),
                        this;
                if (gt(i))
                    return this.addLabel(i, n);
                if (et(i))
                    i = ft.delayedCall(0, i);
                else
                    return this
            }
            return this !== i ? Or(this, i, n) : this
        },
        r.getChildren = function(i, n, s, a) {
            i === void 0 && (i = !0),
                n === void 0 && (n = !0),
                s === void 0 && (s = !0),
                a === void 0 && (a = -lr);
            for (var l = [], c = this._first; c;)
                c._start >= a && (c instanceof ft ? n && l.push(c) : (s && l.push(c),
                    i && l.push.apply(l, c.getChildren(!0, n, s)))),
                c = c._next;
            return l
        },
        r.getById = function(i) {
            for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
                if (n[s].vars.id === i)
                    return n[s]
        },
        r.remove = function(i) {
            return gt(i) ? this.removeLabel(i) : et(i) ? this.killTweensOf(i) : (Es(this, i),
                i === this._recent && (this._recent = this._last),
                Di(this))
        },
        r.totalTime = function(i, n) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = vt(Ut.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
                o.prototype.totalTime.call(this, i, n),
                this._forcing = 0,
                this) : this._tTime
        },
        r.addLabel = function(i, n) {
            return this.labels[i] = or(this, n),
                this
        },
        r.removeLabel = function(i) {
            return delete this.labels[i],
                this
        },
        r.addPause = function(i, n, s) {
            var a = ft.delayedCall(0, n || co, s);
            return a.data = "isPause",
                this._hasPause = 1,
                Or(this, a, or(this, i))
        },
        r.removePause = function(i) {
            var n = this._first;
            for (i = or(this, i); n;)
                n._start === i && n.data === "isPause" && ci(n),
                n = n._next
        },
        r.killTweensOf = function(i, n, s) {
            for (var a = this.getTweensOf(i, s), l = a.length; l--;)
                Jr !== a[l] && a[l].kill(i, n);
            return this
        },
        r.getTweensOf = function(i, n) {
            for (var s = [], a = ur(i), l = this._first, c = Wr(n), f; l;)
                l instanceof ft ? ch(l._targets, a) && (c ? (!Jr || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && s.push(l) : (f = l.getTweensOf(a, n)).length && s.push.apply(s, f),
                l = l._next;
            return s
        },
        r.tweenTo = function(i, n) {
            n = n || {};
            var s = this,
                a = or(s, i),
                l = n,
                c = l.startAt,
                f = l.onStart,
                h = l.onStartParams,
                d = l.immediateRender,
                u, p = ft.to(s, dr({
                    ease: n.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: a,
                    overwrite: "auto",
                    duration: n.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale()) || Fe,
                    onStart: function() {
                        if (s.pause(), !u) {
                            var m = n.duration || Math.abs((a - (c && "time" in c ? c.time : s._time)) / s.timeScale());
                            p._dur !== m && wn(p, m, 0, 1).render(p._time, !0, !0),
                                u = 1
                        }
                        f && f.apply(p, h || [])
                    }
                }, n));
            return d ? p.render(0) : p
        },
        r.tweenFromTo = function(i, n, s) {
            return this.tweenTo(n, dr({
                startAt: {
                    time: or(this, i)
                }
            }, s))
        },
        r.recent = function() {
            return this._recent
        },
        r.nextLabel = function(i) {
            return i === void 0 && (i = this._time),
                Dl(this, or(this, i))
        },
        r.previousLabel = function(i) {
            return i === void 0 && (i = this._time),
                Dl(this, or(this, i), 1)
        },
        r.currentLabel = function(i) {
            return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + Fe)
        },
        r.shiftChildren = function(i, n, s) {
            s === void 0 && (s = 0);
            for (var a = this._first, l = this.labels, c; a;)
                a._start >= s && (a._start += i,
                    a._end += i),
                a = a._next;
            if (n)
                for (c in l)
                    l[c] >= s && (l[c] += i);
            return Di(this)
        },
        r.invalidate = function(i) {
            var n = this._first;
            for (this._lock = 0; n;)
                n.invalidate(i),
                n = n._next;
            return o.prototype.invalidate.call(this, i)
        },
        r.clear = function(i) {
            i === void 0 && (i = !0);
            for (var n = this._first, s; n;)
                s = n._next,
                this.remove(n),
                n = s;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
                i && (this.labels = {}),
                Di(this)
        },
        r.totalDuration = function(i) {
            var n = 0,
                s = this,
                a = s._last,
                l = lr,
                c, f, h;
            if (arguments.length)
                return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
            if (s._dirty) {
                for (h = s.parent; a;)
                    c = a._prev,
                    a._dirty && a.totalDuration(),
                    f = a._start,
                    f > l && s._sort && a._ts && !s._lock ? (s._lock = 1,
                        Or(s, a, f - a._delay, 1)._lock = 0) : l = f,
                    f < 0 && a._ts && (n -= f,
                        (!h && !s._dp || h && h.smoothChildTiming) && (s._start += f / s._ts,
                            s._time -= f,
                            s._tTime -= f),
                        s.shiftChildren(-f, !1, -1 / 0),
                        l = 0),
                    a._end > n && a._ts && (n = a._end),
                    a = c;
                wn(s, s === Ke && s._time > n ? s._time : n, 1, 1),
                    s._dirty = 0
            }
            return s._tDur
        },
        e.updateRoot = function(i) {
            if (Ke._ts && (tc(Ke, hs(i, Ke)),
                    Ju = Ut.frame),
                Ut.frame >= Ml) {
                Ml += Zt.autoSleep || 120;
                var n = Ke._first;
                if ((!n || !n._ts) && Zt.autoSleep && Ut._listeners.length < 2) {
                    for (; n && !n._ts;)
                        n = n._next;
                    n || Ut.sleep()
                }
            }
        },
        e
}(Tn);
dr(Bt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Rh = function(e, r, t, i, n, s, a) {
        var l = new Xt(this._pt, e, r, 0, 1, Pc, null, n),
            c = 0,
            f = 0,
            h, d, u, p, g, m, v, y;
        for (l.b = t,
            l.e = i,
            t += "",
            i += "",
            (v = ~i.indexOf("random(")) && (i = fo(i)),
            s && (y = [t, i],
                s(y, e, r),
                t = y[0],
                i = y[1]),
            d = t.match(Fs) || []; h = Fs.exec(i);)
            p = h[0],
            g = i.substring(c, h.index),
            u ? u = (u + 1) % 5 : g.substr(-5) === "rgba(" && (u = 1),
            p !== d[f++] && (m = parseFloat(d[f - 1]) || 0,
                l._pt = {
                    _next: l._pt,
                    p: g || f === 1 ? g : ",",
                    s: m,
                    c: p.charAt(1) === "=" ? un(m, p) - m : parseFloat(p) - m,
                    m: u && u < 4 ? Math.round : 0
                },
                c = Fs.lastIndex);
        return l.c = c < i.length ? i.substring(c, i.length) : "",
            l.fp = a,
            (ju.test(i) || v) && (l.e = 0),
            this._pt = l,
            l
    },
    rl = function(e, r, t, i, n, s, a, l, c, f) {
        et(i) && (i = i(n || 0, e, s));
        var h = e[r],
            d = t !== "get" ? t : et(h) ? c ? e[r.indexOf("set") || !et(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](c) : e[r]() : h,
            u = et(h) ? c ? $h : kc : nl,
            p;
        if (gt(i) && (~i.indexOf("random(") && (i = fo(i)),
                i.charAt(1) === "=" && (p = un(d, i) + (Tt(d) || 0),
                    (p || p === 0) && (i = p))), !f || d !== i || ya)
            return !isNaN(d * i) && i !== "" ? (p = new Xt(this._pt, e, r, +d || 0, i - (d || 0), typeof h == "boolean" ? qh : Mc, 0, u),
                c && (p.fp = c),
                a && p.modifier(a, this, e),
                this._pt = p) : (!h && !(r in e) && Za(r, i),
                Rh.call(this, e, r, d, i, u, l || Zt.stringFilter, c))
    },
    Fh = function(e, r, t, i, n) {
        if (et(e) && (e = Un(e, n, r, t, i)), !Rr(e) || e.style && e.nodeType || kt(e) || Hu(e))
            return gt(e) ? Un(e, n, r, t, i) : e;
        var s = {},
            a;
        for (a in e)
            s[a] = Un(e[a], n, r, t, i);
        return s
    },
    xc = function(e, r, t, i, n, s) {
        var a, l, c, f;
        if (jt[e] && (a = new jt[e]).init(n, a.rawVars ? r[e] : Fh(r[e], i, n, s, t), t, i, s) !== !1 && (t._pt = l = new Xt(t._pt, n, e, 0, 1, a.render, a, 0, a.priority),
                t !== nn))
            for (c = t._ptLookup[t._targets.indexOf(n)],
                f = a._props.length; f--;)
                c[a._props[f]] = l;
        return a
    },
    Jr, ya, il = function o(e, r, t) {
        var i = e.vars,
            n = i.ease,
            s = i.startAt,
            a = i.immediateRender,
            l = i.lazy,
            c = i.onUpdate,
            f = i.onUpdateParams,
            h = i.callbackScope,
            d = i.runBackwards,
            u = i.yoyoEase,
            p = i.keyframes,
            g = i.autoRevert,
            m = e._dur,
            v = e._startAt,
            y = e._targets,
            _ = e.parent,
            w = _ && _.data === "nested" ? _.vars.targets : y,
            b = e._overwrite === "auto" && !Ua,
            T = e.timeline,
            k, S, D, $, B, P, E, F, q, R, X, G, ne;
        if (T && (!p || !n) && (n = "none"),
            e._ease = Ci(n, vn.ease),
            e._yEase = u ? yc(Ci(u === !0 ? n : u, vn.ease)) : 0,
            u && e._yoyo && !e._repeat && (u = e._yEase,
                e._yEase = e._ease,
                e._ease = u),
            e._from = !T && !!i.runBackwards, !T || p && !i.stagger) {
            if (F = y[0] ? Oi(y[0]).harness : 0,
                G = F && i[F.prop],
                k = fs(i, Ja),
                v && (v._zTime < 0 && v.progress(1),
                    r < 0 && d && a && !g ? v.render(-1, !0) : v.revert(d && m ? Ho : lh),
                    v._lazy = 0),
                s) {
                if (ci(e._startAt = ft.set(y, dr({
                        data: "isStart",
                        overwrite: !1,
                        parent: _,
                        immediateRender: !0,
                        lazy: qt(l),
                        startAt: null,
                        delay: 0,
                        onUpdate: c,
                        onUpdateParams: f,
                        callbackScope: h,
                        stagger: 0
                    }, s))),
                    e._startAt._dp = 0,
                    r < 0 && (zt || !a && !g) && e._startAt.revert(Ho),
                    a && m && r <= 0 && t <= 0) {
                    r && (e._zTime = r);
                    return
                }
            } else if (d && m && !v) {
                if (r && (a = !1),
                    D = dr({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: a && qt(l),
                        immediateRender: a,
                        stagger: 0,
                        parent: _
                    }, k),
                    G && (D[F.prop] = G),
                    ci(e._startAt = ft.set(y, D)),
                    e._startAt._dp = 0,
                    r < 0 && (zt ? e._startAt.revert(Ho) : e._startAt.render(-1, !0)),
                    e._zTime = r, !a)
                    o(e._startAt, Fe, Fe);
                else if (!r)
                    return
            }
            for (e._pt = e._ptCache = 0,
                l = m && qt(l) || l && !m,
                S = 0; S < y.length; S++) {
                if (B = y[S],
                    E = B._gsap || tl(y)[S]._gsap,
                    e._ptLookup[S] = R = {},
                    ha[E.id] && si.length && cs(),
                    X = w === y ? S : w.indexOf(B),
                    F && (q = new F).init(B, G || k, e, X, w) !== !1 && (e._pt = $ = new Xt(e._pt, B, q.name, 0, 1, q.render, q, 0, q.priority),
                        q._props.forEach(function(O) {
                            R[O] = $
                        }),
                        q.priority && (P = 1)), !F || G)
                    for (D in k)
                        jt[D] && (q = xc(D, k, e, X, B, w)) ? q.priority && (P = 1) : R[D] = $ = rl.call(e, B, D, "get", k[D], X, w, 0, i.stringFilter);
                e._op && e._op[S] && e.kill(B, e._op[S]),
                    b && e._pt && (Jr = e,
                        Ke.killTweensOf(B, R, e.globalTime(r)),
                        ne = !e.parent,
                        Jr = 0),
                    e._pt && l && (ha[E.id] = 1)
            }
            P && Ec(e),
                e._onInit && e._onInit(e)
        }
        e._onUpdate = c,
            e._initted = (!e._op || e._pt) && !ne,
            p && r <= 0 && T.render(lr, !0, !0)
    },
    Nh = function(e, r, t, i, n, s, a) {
        var l = (e._pt && e._ptCache || (e._ptCache = {}))[r],
            c, f, h, d;
        if (!l)
            for (l = e._ptCache[r] = [],
                h = e._ptLookup,
                d = e._targets.length; d--;) {
                if (c = h[d][r],
                    c && c.d && c.d._pt)
                    for (c = c.d._pt; c && c.p !== r && c.fp !== r;)
                        c = c._next;
                if (!c)
                    return ya = 1,
                        e.vars[r] = "+=0",
                        il(e, a),
                        ya = 0,
                        1;
                l.push(c)
            }
        for (d = l.length; d--;)
            f = l[d],
            c = f._pt || f,
            c.s = (i || i === 0) && !n ? i : c.s + (i || 0) + s * c.c,
            c.c = t - c.s,
            f.e && (f.e = ot(t) + Tt(f.e)),
            f.b && (f.b = c.s + Tt(f.b))
    },
    Ih = function(e, r) {
        var t = e[0] ? Oi(e[0]).harness : 0,
            i = t && t.aliases,
            n, s, a, l;
        if (!i)
            return r;
        n = Bi({}, r);
        for (s in i)
            if (s in n)
                for (l = i[s].split(","),
                    a = l.length; a--;)
                    n[l[a]] = n[s];
        return n
    },
    Bh = function(e, r, t, i) {
        var n = r.ease || i || "power1.inOut",
            s, a;
        if (kt(r))
            a = t[e] || (t[e] = []),
            r.forEach(function(l, c) {
                return a.push({
                    t: c / (r.length - 1) * 100,
                    v: l,
                    e: n
                })
            });
        else
            for (s in r)
                a = t[s] || (t[s] = []),
                s === "ease" || a.push({
                    t: parseFloat(e),
                    v: r[s],
                    e: n
                })
    },
    Un = function(e, r, t, i, n) {
        return et(e) ? e.call(r, t, i, n) : gt(e) && ~e.indexOf("random(") ? fo(e) : e
    },
    Tc = el + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Sc = {};
Vt(Tc + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
    return Sc[o] = 1
});
var ft = function(o) {
    Xu(e, o);

    function e(t, i, n, s) {
        var a;
        typeof i == "number" && (n.duration = i,
                i = n,
                n = null),
            a = o.call(this, s ? i : Wn(i)) || this;
        var l = a.vars,
            c = l.duration,
            f = l.delay,
            h = l.immediateRender,
            d = l.stagger,
            u = l.overwrite,
            p = l.keyframes,
            g = l.defaults,
            m = l.scrollTrigger,
            v = l.yoyoEase,
            y = i.parent || Ke,
            _ = (kt(t) || Hu(t) ? Wr(t[0]) : "length" in i) ? [t] : ur(t),
            w, b, T, k, S, D, $, B;
        if (a._targets = _.length ? tl(_) : us("GSAP target " + t + " not found. https://greensock.com", !Zt.nullTargetWarn) || [],
            a._ptLookup = [],
            a._overwrite = u,
            p || d || Mo(c) || Mo(f)) {
            if (i = a.vars,
                w = a.timeline = new Bt({
                    data: "nested",
                    defaults: g || {},
                    targets: y && y.data === "nested" ? y.vars.targets : _
                }),
                w.kill(),
                w.parent = w._dp = Ir(a),
                w._start = 0,
                d || Mo(c) || Mo(f)) {
                if (k = _.length,
                    $ = d && cc(d),
                    Rr(d))
                    for (S in d)
                        ~Tc.indexOf(S) && (B || (B = {}),
                            B[S] = d[S]);
                for (b = 0; b < k; b++)
                    T = fs(i, Sc),
                    T.stagger = 0,
                    v && (T.yoyoEase = v),
                    B && Bi(T, B),
                    D = _[b],
                    T.duration = +Un(c, Ir(a), b, D, _),
                    T.delay = (+Un(f, Ir(a), b, D, _) || 0) - a._delay, !d && k === 1 && T.delay && (a._delay = f = T.delay,
                        a._start += f,
                        T.delay = 0),
                    w.to(D, T, $ ? $(b, D, _) : 0),
                    w._ease = Se.none;
                w.duration() ? c = f = 0 : a.timeline = 0
            } else if (p) {
                Wn(dr(w.vars.defaults, {
                        ease: "none"
                    })),
                    w._ease = Ci(p.ease || i.ease || "none");
                var P = 0,
                    E, F, q;
                if (kt(p))
                    p.forEach(function(R) {
                        return w.to(_, R, ">")
                    }),
                    w.duration();
                else {
                    T = {};
                    for (S in p)
                        S === "ease" || S === "easeEach" || Bh(S, p[S], T, p.easeEach);
                    for (S in T)
                        for (E = T[S].sort(function(R, X) {
                                return R.t - X.t
                            }),
                            P = 0,
                            b = 0; b < E.length; b++)
                            F = E[b],
                            q = {
                                ease: F.e,
                                duration: (F.t - (b ? E[b - 1].t : 0)) / 100 * c
                            },
                            q[S] = F.v,
                            w.to(_, q, P),
                            P += q.duration;
                    w.duration() < c && w.to({}, {
                        duration: c - w.duration()
                    })
                }
            }
            c || a.duration(c = w.duration())
        } else
            a.timeline = 0;
        return u === !0 && !Ua && (Jr = Ir(a),
                Ke.killTweensOf(_),
                Jr = 0),
            Or(y, Ir(a), n),
            i.reversed && a.reverse(),
            i.paused && a.paused(!0),
            (h || !c && !p && a._start === vt(y._time) && qt(h) && ph(Ir(a)) && y.data !== "nested") && (a._tTime = -Fe,
                a.render(Math.max(0, -f) || 0)),
            m && sc(Ir(a), m),
            a
    }
    var r = e.prototype;
    return r.render = function(i, n, s) {
            var a = this._time,
                l = this._tDur,
                c = this._dur,
                f = i < 0,
                h = i > l - Fe && !f ? l : i < Fe ? 0 : i,
                d, u, p, g, m, v, y, _, w;
            if (!c)
                mh(this, i, n, s);
            else if (h !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
                if (d = h,
                    _ = this.timeline,
                    this._repeat) {
                    if (g = c + this._rDelay,
                        this._repeat < -1 && f)
                        return this.totalTime(g * 100 + i, n, s);
                    if (d = vt(h % g),
                        h === l ? (p = this._repeat,
                            d = c) : (p = ~~(h / g),
                            p && p === h / g && (d = c,
                                p--),
                            d > c && (d = c)),
                        v = this._yoyo && p & 1,
                        v && (w = this._yEase,
                            d = c - d),
                        m = bn(this._tTime, g),
                        d === a && !s && this._initted)
                        return this._tTime = h,
                            this;
                    p !== m && (_ && this._yEase && vc(_, v),
                        this.vars.repeatRefresh && !v && !this._lock && (this._lock = s = 1,
                            this.render(vt(g * p), !0).invalidate()._lock = 0))
                }
                if (!this._initted) {
                    if (ac(this, f ? i : d, s, n, h))
                        return this._tTime = 0,
                            this;
                    if (a !== this._time)
                        return this;
                    if (c !== this._dur)
                        return this.render(i, n, s)
                }
                if (this._tTime = h,
                    this._time = d, !this._act && this._ts && (this._act = 1,
                        this._lazy = 0),
                    this.ratio = y = (w || this._ease)(d / c),
                    this._from && (this.ratio = y = 1 - y),
                    d && !a && !n && (cr(this, "onStart"),
                        this._tTime !== h))
                    return this;
                for (u = this._pt; u;)
                    u.r(y, u.d),
                    u = u._next;
                _ && _.render(i < 0 ? i : !d && v ? -Fe : _._dur * _._ease(d / this._dur), n, s) || this._startAt && (this._zTime = i),
                    this._onUpdate && !n && (f && da(this, i, n, s),
                        cr(this, "onUpdate")),
                    this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && cr(this, "onRepeat"),
                    (h === this._tDur || !h) && this._tTime === h && (f && !this._onUpdate && da(this, i, !0, !0),
                        (i || !c) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && ci(this, 1), !n && !(f && !a) && (h || a || v) && (cr(this, h === l ? "onComplete" : "onReverseComplete", !0),
                            this._prom && !(h < l && this.timeScale() > 0) && this._prom()))
            }
            return this
        },
        r.targets = function() {
            return this._targets
        },
        r.invalidate = function(i) {
            return (!i || !this.vars.runBackwards) && (this._startAt = 0),
                this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
                this._ptLookup = [],
                this.timeline && this.timeline.invalidate(i),
                o.prototype.invalidate.call(this, i)
        },
        r.resetTo = function(i, n, s, a) {
            ho || Ut.wake(),
                this._ts || this.play();
            var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
                c;
            return this._initted || il(this, l),
                c = this._ease(l / this._dur),
                Nh(this, i, n, s, a, c, l) ? this.resetTo(i, n, s, a) : (Ds(this, 0),
                    this.parent || nc(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                    this.render(0))
        },
        r.kill = function(i, n) {
            if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
                return this._lazy = this._pt = 0,
                    this.parent ? Nn(this) : this;
            if (this.timeline) {
                var s = this.timeline.totalDuration();
                return this.timeline.killTweensOf(i, n, Jr && Jr.vars.overwrite !== !0)._first || Nn(this),
                    this.parent && s !== this.timeline.totalDuration() && wn(this, this._dur * this.timeline._tDur / s, 0, 1),
                    this
            }
            var a = this._targets,
                l = i ? ur(i) : a,
                c = this._ptLookup,
                f = this._pt,
                h, d, u, p, g, m, v;
            if ((!n || n === "all") && hh(a, l))
                return n === "all" && (this._pt = 0),
                    Nn(this);
            for (h = this._op = this._op || [],
                n !== "all" && (gt(n) && (g = {},
                        Vt(n, function(y) {
                            return g[y] = 1
                        }),
                        n = g),
                    n = Ih(a, n)),
                v = a.length; v--;)
                if (~l.indexOf(a[v])) {
                    d = c[v],
                        n === "all" ? (h[v] = n,
                            p = d,
                            u = {}) : (u = h[v] = h[v] || {},
                            p = n);
                    for (g in p)
                        m = d && d[g],
                        m && ((!("kill" in m.d) || m.d.kill(g) === !0) && Es(this, m, "_pt"),
                            delete d[g]),
                        u !== "all" && (u[g] = 1)
                }
            return this._initted && !this._pt && f && Nn(this),
                this
        },
        e.to = function(i, n) {
            return new e(i, n, arguments[2])
        },
        e.from = function(i, n) {
            return jn(1, arguments)
        },
        e.delayedCall = function(i, n, s, a) {
            return new e(n, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: i,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: s,
                onReverseCompleteParams: s,
                callbackScope: a
            })
        },
        e.fromTo = function(i, n, s) {
            return jn(2, arguments)
        },
        e.set = function(i, n) {
            return n.duration = 0,
                n.repeatDelay || (n.repeat = 0),
                new e(i, n)
        },
        e.killTweensOf = function(i, n, s) {
            return Ke.killTweensOf(i, n, s)
        },
        e
}(Tn);
dr(ft.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Vt("staggerTo,staggerFrom,staggerFromTo", function(o) {
    ft[o] = function() {
        var e = new Bt,
            r = ga.call(arguments, 0);
        return r.splice(o === "staggerFromTo" ? 5 : 4, 0, 0),
            e[o].apply(e, r)
    }
});
var nl = function(e, r, t) {
        return e[r] = t
    },
    kc = function(e, r, t) {
        return e[r](t)
    },
    $h = function(e, r, t, i) {
        return e[r](i.fp, t)
    },
    zh = function(e, r, t) {
        return e.setAttribute(r, t)
    },
    ol = function(e, r) {
        return et(e[r]) ? kc : Ka(e[r]) && e.setAttribute ? zh : nl
    },
    Mc = function(e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r)
    },
    qh = function(e, r) {
        return r.set(r.t, r.p, !!(r.s + r.c * e), r)
    },
    Pc = function(e, r) {
        var t = r._pt,
            i = "";
        if (!e && r.b)
            i = r.b;
        else if (e === 1 && r.e)
            i = r.e;
        else {
            for (; t;)
                i = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + i,
                t = t._next;
            i += r.c
        }
        r.set(r.t, r.p, i, r)
    },
    sl = function(e, r) {
        for (var t = r._pt; t;)
            t.r(e, t.d),
            t = t._next
    },
    Vh = function(e, r, t, i) {
        for (var n = this._pt, s; n;)
            s = n._next,
            n.p === i && n.modifier(e, r, t),
            n = s
    },
    Xh = function(e) {
        for (var r = this._pt, t, i; r;)
            i = r._next,
            r.p === e && !r.op || r.op === e ? Es(this, r, "_pt") : r.dep || (t = 1),
            r = i;
        return !t
    },
    Yh = function(e, r, t, i) {
        i.mSet(e, r, i.m.call(i.tween, t, i.mt), i)
    },
    Ec = function(e) {
        for (var r = e._pt, t, i, n, s; r;) {
            for (t = r._next,
                i = n; i && i.pr > r.pr;)
                i = i._next;
            (r._prev = i ? i._prev : s) ? r._prev._next = r: n = r,
                (r._next = i) ? i._prev = r : s = r,
                r = t
        }
        e._pt = n
    },
    Xt = function() {
        function o(r, t, i, n, s, a, l, c, f) {
            this.t = t,
                this.s = n,
                this.c = s,
                this.p = i,
                this.r = a || Mc,
                this.d = l || this,
                this.set = c || nl,
                this.pr = f || 0,
                this._next = r,
                r && (r._prev = this)
        }
        var e = o.prototype;
        return e.modifier = function(t, i, n) {
                this.mSet = this.mSet || this.set,
                    this.set = Yh,
                    this.m = t,
                    this.mt = n,
                    this.tween = i
            },
            o
    }();
Vt(el + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
    return Ja[o] = 1
});
Jt.TweenMax = Jt.TweenLite = ft;
Jt.TimelineLite = Jt.TimelineMax = Bt;
Ke = new Bt({
    sortChildren: !1,
    defaults: vn,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Zt.stringFilter = _c;
var Sn = [],
    jo = {},
    Gh = [],
    Ll = 0,
    zs = function(e) {
        return (jo[e] || Gh).map(function(r) {
            return r()
        })
    },
    va = function() {
        var e = Date.now(),
            r = [];
        e - Ll > 2 && (zs("matchMediaInit"),
            Sn.forEach(function(t) {
                var i = t.queries,
                    n = t.conditions,
                    s, a, l, c;
                for (a in i)
                    s = sr.matchMedia(i[a]).matches,
                    s && (l = 1),
                    s !== n[a] && (n[a] = s,
                        c = 1);
                c && (t.revert(),
                    l && r.push(t))
            }),
            zs("matchMediaRevert"),
            r.forEach(function(t) {
                return t.onMatch(t)
            }),
            Ll = e,
            zs("matchMedia"))
    },
    Oc = function() {
        function o(r, t) {
            this.selector = t && ma(t),
                this.data = [],
                this._r = [],
                this.isReverted = !1,
                r && this.add(r)
        }
        var e = o.prototype;
        return e.add = function(t, i, n) {
                et(t) && (n = i,
                    i = t,
                    t = et);
                var s = this,
                    a = function() {
                        var c = lt,
                            f = s.selector,
                            h;
                        return c && c !== s && c.data.push(s),
                            n && (s.selector = ma(n)),
                            lt = s,
                            h = i.apply(s, arguments),
                            et(h) && s._r.push(h),
                            lt = c,
                            s.selector = f,
                            s.isReverted = !1,
                            h
                    };
                return s.last = a,
                    t === et ? a(s) : t ? s[t] = a : a
            },
            e.ignore = function(t) {
                var i = lt;
                lt = null,
                    t(this),
                    lt = i
            },
            e.getTweens = function() {
                var t = [];
                return this.data.forEach(function(i) {
                        return i instanceof o ? t.push.apply(t, i.getTweens()) : i instanceof ft && !(i.parent && i.parent.data === "nested") && t.push(i)
                    }),
                    t
            },
            e.clear = function() {
                this._r.length = this.data.length = 0
            },
            e.kill = function(t, i) {
                var n = this;
                if (t) {
                    var s = this.getTweens();
                    this.data.forEach(function(l) {
                            l.data === "isFlip" && (l.revert(),
                                l.getChildren(!0, !0, !1).forEach(function(c) {
                                    return s.splice(s.indexOf(c), 1)
                                }))
                        }),
                        s.map(function(l) {
                            return {
                                g: l.globalTime(0),
                                t: l
                            }
                        }).sort(function(l, c) {
                            return c.g - l.g || -1
                        }).forEach(function(l) {
                            return l.t.revert(t)
                        }),
                        this.data.forEach(function(l) {
                            return !(l instanceof Tn) && l.revert && l.revert(t)
                        }),
                        this._r.forEach(function(l) {
                            return l(t, n)
                        }),
                        this.isReverted = !0
                } else
                    this.data.forEach(function(l) {
                        return l.kill && l.kill()
                    });
                if (this.clear(),
                    i) {
                    var a = Sn.indexOf(this);
                    ~a && Sn.splice(a, 1)
                }
            },
            e.revert = function(t) {
                this.kill(t || {})
            },
            o
    }(),
    Hh = function() {
        function o(r) {
            this.contexts = [],
                this.scope = r
        }
        var e = o.prototype;
        return e.add = function(t, i, n) {
                Rr(t) || (t = {
                    matches: t
                });
                var s = new Oc(0, n || this.scope),
                    a = s.conditions = {},
                    l, c, f;
                this.contexts.push(s),
                    i = s.add("onMatch", i),
                    s.queries = t;
                for (c in t)
                    c === "all" ? f = 1 : (l = sr.matchMedia(t[c]),
                        l && (Sn.indexOf(s) < 0 && Sn.push(s),
                            (a[c] = l.matches) && (f = 1),
                            l.addListener ? l.addListener(va) : l.addEventListener("change", va)));
                return f && i(s),
                    this
            },
            e.revert = function(t) {
                this.kill(t || {})
            },
            e.kill = function(t) {
                this.contexts.forEach(function(i) {
                    return i.kill(t, !0)
                })
            },
            o
    }(),
    ds = {
        registerPlugin: function() {
            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
                r[t] = arguments[t];
            r.forEach(function(i) {
                return Ph(i)
            })
        },
        timeline: function(e) {
            return new Bt(e)
        },
        getTweensOf: function(e, r) {
            return Ke.getTweensOf(e, r)
        },
        getProperty: function(e, r, t, i) {
            gt(e) && (e = ur(e)[0]);
            var n = Oi(e || {}).get,
                s = t ? ic : rc;
            return t === "native" && (t = ""),
                e && (r ? s((jt[r] && jt[r].get || n)(e, r, t, i)) : function(a, l, c) {
                    return s((jt[a] && jt[a].get || n)(e, a, l, c))
                })
        },
        quickSetter: function(e, r, t) {
            if (e = ur(e),
                e.length > 1) {
                var i = e.map(function(f) {
                        return er.quickSetter(f, r, t)
                    }),
                    n = i.length;
                return function(f) {
                    for (var h = n; h--;)
                        i[h](f)
                }
            }
            e = e[0] || {};
            var s = jt[r],
                a = Oi(e),
                l = a.harness && (a.harness.aliases || {})[r] || r,
                c = s ? function(f) {
                    var h = new s;
                    nn._pt = 0,
                        h.init(e, t ? f + t : f, nn, 0, [e]),
                        h.render(1, h),
                        nn._pt && sl(1, nn)
                } :
                a.set(e, l);
            return s ? c : function(f) {
                return c(e, l, t ? f + t : f, a, 1)
            }
        },
        quickTo: function(e, r, t) {
            var i, n = er.to(e, Bi((i = {},
                    i[r] = "+=0.1",
                    i.paused = !0,
                    i), t || {})),
                s = function(l, c, f) {
                    return n.resetTo(r, l, c, f)
                };
            return s.tween = n,
                s
        },
        isTweening: function(e) {
            return Ke.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Ci(e.ease, vn.ease)),
                Pl(vn, e || {})
        },
        config: function(e) {
            return Pl(Zt, e || {})
        },
        registerEffect: function(e) {
            var r = e.name,
                t = e.effect,
                i = e.plugins,
                n = e.defaults,
                s = e.extendTimeline;
            (i || "").split(",").forEach(function(a) {
                    return a && !jt[a] && !Jt[a] && us(r + " effect requires " + a + " plugin.")
                }),
                Ns[r] = function(a, l, c) {
                    return t(ur(a), dr(l || {}, n), c)
                },
                s && (Bt.prototype[r] = function(a, l, c) {
                    return this.add(Ns[r](a, Rr(l) ? l : (c = l) && {}, this), c)
                })
        },
        registerEase: function(e, r) {
            Se[e] = Ci(r)
        },
        parseEase: function(e, r) {
            return arguments.length ? Ci(e, r) : Se
        },
        getById: function(e) {
            return Ke.getById(e)
        },
        exportRoot: function(e, r) {
            e === void 0 && (e = {});
            var t = new Bt(e),
                i, n;
            for (t.smoothChildTiming = qt(e.smoothChildTiming),
                Ke.remove(t),
                t._dp = 0,
                t._time = t._tTime = Ke._time,
                i = Ke._first; i;)
                n = i._next,
                (r || !(!i._dur && i instanceof ft && i.vars.onComplete === i._targets[0])) && Or(t, i, i._start - i._delay),
                i = n;
            return Or(Ke, t, 0),
                t
        },
        context: function(e, r) {
            return e ? new Oc(e, r) : lt
        },
        matchMedia: function(e) {
            return new Hh(e)
        },
        matchMediaRefresh: function() {
            return Sn.forEach(function(e) {
                var r = e.conditions,
                    t, i;
                for (i in r)
                    r[i] && (r[i] = !1,
                        t = 1);
                t && e.revert()
            }) || va()
        },
        addEventListener: function(e, r) {
            var t = jo[e] || (jo[e] = []);
            ~t.indexOf(r) || t.push(r)
        },
        removeEventListener: function(e, r) {
            var t = jo[e],
                i = t && t.indexOf(r);
            i >= 0 && t.splice(i, 1)
        },
        utils: {
            wrap: Sh,
            wrapYoyo: kh,
            distribute: cc,
            random: hc,
            snap: fc,
            normalize: Th,
            getUnit: Tt,
            clamp: vh,
            splitColor: gc,
            toArray: ur,
            selector: ma,
            mapRange: pc,
            pipe: wh,
            unitize: xh,
            interpolate: Mh,
            shuffle: uc
        },
        install: Qu,
        effects: Ns,
        ticker: Ut,
        updateRoot: Bt.updateRoot,
        plugins: jt,
        globalTimeline: Ke,
        core: {
            PropTween: Xt,
            globals: Zu,
            Tween: ft,
            Timeline: Bt,
            Animation: Tn,
            getCache: Oi,
            _removeLinkedListItem: Es,
            reverting: function() {
                return zt
            },
            context: function(e) {
                return e && lt && (lt.data.push(e),
                        e._ctx = lt),
                    lt
            },
            suppressOverwrites: function(e) {
                return Ua = e
            }
        }
    };
Vt("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
    return ds[o] = ft[o]
});
Ut.add(Bt.updateRoot);
nn = ds.to({}, {
    duration: 0
});
var Wh = function(e, r) {
        for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r;)
            t = t._next;
        return t
    },
    jh = function(e, r) {
        var t = e._targets,
            i, n, s;
        for (i in r)
            for (n = t.length; n--;)
                s = e._ptLookup[n][i],
                s && (s = s.d) && (s._pt && (s = Wh(s, i)),
                    s && s.modifier && s.modifier(r[i], e, t[n], i))
    },
    qs = function(e, r) {
        return {
            name: e,
            rawVars: 1,
            init: function(i, n, s) {
                s._onInit = function(a) {
                    var l, c;
                    if (gt(n) && (l = {},
                            Vt(n, function(f) {
                                return l[f] = 1
                            }),
                            n = l),
                        r) {
                        l = {};
                        for (c in n)
                            l[c] = r(n[c]);
                        n = l
                    }
                    jh(a, n)
                }
            }
        }
    },
    er = ds.registerPlugin({
        name: "attr",
        init: function(e, r, t, i, n) {
            var s, a, l;
            this.tween = t;
            for (s in r)
                l = e.getAttribute(s) || "",
                a = this.add(e, "setAttribute", (l || 0) + "", r[s], i, n, 0, 0, s),
                a.op = s,
                a.b = l,
                this._props.push(s)
        },
        render: function(e, r) {
            for (var t = r._pt; t;)
                zt ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d),
                t = t._next
        }
    }, {
        name: "endArray",
        init: function(e, r) {
            for (var t = r.length; t--;)
                this.add(e, t, e[t] || 0, r[t], 0, 0, 0, 0, 0, 1)
        }
    }, qs("roundProps", _a), qs("modifiers"), qs("snap", fc)) || ds;
ft.version = Bt.version = er.version = "3.11.3";
Ku = 1;
Gu() && xn();
Se.Power0;
Se.Power1;
Se.Power2;
Se.Power3;
Se.Power4;
Se.Linear;
Se.Quad;
Se.Cubic;
Se.Quart;
Se.Quint;
Se.Strong;
Se.Elastic;
Se.Back;
Se.SteppedEase;
Se.Bounce;
Se.Sine;
Se.Expo;
Se.Circ;
/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Al, ei, cn, al, Pi, Rl, ll, Uh = function() {
        return typeof window < "u"
    },
    jr = {},
    wi = 180 / Math.PI,
    fn = Math.PI / 180,
    Wi = Math.atan2,
    Fl = 1e8,
    ul = /([A-Z])/g,
    Kh = /(left|right|width|margin|padding|x)/i,
    Qh = /[\s,\(]\S/,
    Vr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    ba = function(e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    },
    Zh = function(e, r) {
        return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    },
    Jh = function(e, r) {
        return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r)
    },
    ed = function(e, r) {
        var t = r.s + r.c * e;
        r.set(r.t, r.p, ~~(t + (t < 0 ? -.5 : .5)) + r.u, r)
    },
    Dc = function(e, r) {
        return r.set(r.t, r.p, e ? r.e : r.b, r)
    },
    Cc = function(e, r) {
        return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r)
    },
    td = function(e, r, t) {
        return e.style[r] = t
    },
    rd = function(e, r, t) {
        return e.style.setProperty(r, t)
    },
    id = function(e, r, t) {
        return e._gsap[r] = t
    },
    nd = function(e, r, t) {
        return e._gsap.scaleX = e._gsap.scaleY = t
    },
    od = function(e, r, t, i, n) {
        var s = e._gsap;
        s.scaleX = s.scaleY = t,
            s.renderTransform(n, s)
    },
    sd = function(e, r, t, i, n) {
        var s = e._gsap;
        s[r] = t,
            s.renderTransform(n, s)
    },
    Qe = "transform",
    xr = Qe + "Origin",
    ad = function(e, r) {
        var t = this,
            i = this.target,
            n = i.style;
        if (e in jr) {
            if (this.tfm = this.tfm || {},
                e !== "transform" && (e = Vr[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
                    return t.tfm[s] = Br(i, s)
                }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : Br(i, e)),
                this.props.indexOf(Qe) >= 0)
                return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"),
                    this.props.push(xr, r, "")),
                e = Qe
        }
        (n || r) && this.props.push(e, r, n[e])
    },
    Lc = function(e) {
        e.translate && (e.removeProperty("translate"),
            e.removeProperty("scale"),
            e.removeProperty("rotate"))
    },
    ld = function() {
        var e = this.props,
            r = this.target,
            t = r.style,
            i = r._gsap,
            n, s;
        for (n = 0; n < e.length; n += 3)
            e[n + 1] ? r[e[n]] = e[n + 2] : e[n + 2] ? t[e[n]] = e[n + 2] : t.removeProperty(e[n].replace(ul, "-$1").toLowerCase());
        if (this.tfm) {
            for (s in this.tfm)
                i[s] = this.tfm[s];
            i.svg && (i.renderTransform(),
                    r.setAttribute("data-svg-origin", this.svgo || "")),
                n = ll(),
                n && !n.isStart && !t[Qe] && (Lc(t),
                    i.uncache = 1)
        }
    },
    Ac = function(e, r) {
        var t = {
            target: e,
            props: [],
            revert: ld,
            save: ad
        };
        return r && r.split(",").forEach(function(i) {
                return t.save(i)
            }),
            t
    },
    Rc, wa = function(e, r) {
        var t = ei.createElementNS ? ei.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ei.createElement(e);
        return t.style ? t : ei.createElement(e)
    },
    Lr = function o(e, r, t) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace(ul, "-$1").toLowerCase()) || i.getPropertyValue(r) || !t && o(e, kn(r) || r, 1) || ""
    },
    Nl = "O,Moz,ms,Ms,Webkit".split(","),
    kn = function(e, r, t) {
        var i = r || Pi,
            n = i.style,
            s = 5;
        if (e in n && !t)
            return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Nl[s] + e in n);)
        ;
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Nl[s] : "") + e
    },
    xa = function() {
        Uh() && window.document && (Al = window,
            ei = Al.document,
            cn = ei.documentElement,
            Pi = wa("div") || {
                style: {}
            },
            wa("div"),
            Qe = kn(Qe),
            xr = Qe + "Origin",
            Pi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
            Rc = !!kn("perspective"),
            ll = er.core.reverting,
            al = 1)
    },
    Vs = function o(e) {
        var r = wa("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            t = this.parentNode,
            i = this.nextSibling,
            n = this.style.cssText,
            s;
        if (cn.appendChild(r),
            r.appendChild(this),
            this.style.display = "block",
            e)
            try {
                s = this.getBBox(),
                    this._gsapBBox = this.getBBox,
                    this.getBBox = o
            } catch {}
        else
            this._gsapBBox && (s = this._gsapBBox());
        return t && (i ? t.insertBefore(this, i) : t.appendChild(this)),
            cn.removeChild(r),
            this.style.cssText = n,
            s
    },
    Il = function(e, r) {
        for (var t = r.length; t--;)
            if (e.hasAttribute(r[t]))
                return e.getAttribute(r[t])
    },
    Fc = function(e) {
        var r;
        try {
            r = e.getBBox()
        } catch {
            r = Vs.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Vs || (r = Vs.call(e, !0)),
            r && !r.width && !r.x && !r.y ? {
                x: +Il(e, ["x", "cx", "x1"]) || 0,
                y: +Il(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            } : r
    },
    Nc = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Fc(e))
    },
    po = function(e, r) {
        if (r) {
            var t = e.style;
            r in jr && r !== xr && (r = Qe),
                t.removeProperty ? ((r.substr(0, 2) === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
                    t.removeProperty(r.replace(ul, "-$1").toLowerCase())) : t.removeAttribute(r)
        }
    },
    ti = function(e, r, t, i, n, s) {
        var a = new Xt(e._pt, r, t, 0, 1, s ? Cc : Dc);
        return e._pt = a,
            a.b = i,
            a.e = n,
            e._props.push(t),
            a
    },
    Bl = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    ud = {
        grid: 1,
        flex: 1
    },
    fi = function o(e, r, t, i) {
        var n = parseFloat(t) || 0,
            s = (t + "").trim().substr((n + "").length) || "px",
            a = Pi.style,
            l = Kh.test(r),
            c = e.tagName.toLowerCase() === "svg",
            f = (c ? "client" : "offset") + (l ? "Width" : "Height"),
            h = 100,
            d = i === "px",
            u = i === "%",
            p, g, m, v;
        return i === s || !n || Bl[i] || Bl[s] ? n : (s !== "px" && !d && (n = o(e, r, t, "px")),
            v = e.getCTM && Nc(e),
            (u || s === "%") && (jr[r] || ~r.indexOf("adius")) ? (p = v ? e.getBBox()[l ? "width" : "height"] : e[f],
                ot(u ? n / p * h : n / 100 * p)) : (a[l ? "width" : "height"] = h + (d ? s : i),
                g = ~r.indexOf("adius") || i === "em" && e.appendChild && !c ? e : e.parentNode,
                v && (g = (e.ownerSVGElement || {}).parentNode),
                (!g || g === ei || !g.appendChild) && (g = ei.body),
                m = g._gsap,
                m && u && m.width && l && m.time === Ut.time && !m.uncache ? ot(n / m.width * h) : ((u || s === "%") && !ud[Lr(g, "display")] && (a.position = Lr(e, "position")),
                    g === e && (a.position = "static"),
                    g.appendChild(Pi),
                    p = Pi[f],
                    g.removeChild(Pi),
                    a.position = "absolute",
                    l && u && (m = Oi(g),
                        m.time = Ut.time,
                        m.width = g[f]),
                    ot(d ? p * n / h : p && n ? h / p * n : 0))))
    },
    Br = function(e, r, t, i) {
        var n;
        return al || xa(),
            r in Vr && r !== "transform" && (r = Vr[r], ~r.indexOf(",") && (r = r.split(",")[0])),
            jr[r] && r !== "transform" ? (n = mo(e, i),
                n = r !== "transformOrigin" ? n[r] : n.svg ? n.origin : gs(Lr(e, xr)) + " " + n.zOrigin + "px") : (n = e.style[r],
                (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = ps[r] && ps[r](e, r, t) || Lr(e, r) || ec(e, r) || (r === "opacity" ? 1 : 0))),
            t && !~(n + "").trim().indexOf(" ") ? fi(e, r, n, t) + t : n
    },
    cd = function(e, r, t, i) {
        if (!t || t === "none") {
            var n = kn(r, e, 1),
                s = n && Lr(e, n, 1);
            s && s !== t ? (r = n,
                t = s) : r === "borderColor" && (t = Lr(e, "borderTopColor"))
        }
        var a = new Xt(this._pt, e.style, r, 0, 1, Pc),
            l = 0,
            c = 0,
            f, h, d, u, p, g, m, v, y, _, w, b;
        if (a.b = t,
            a.e = i,
            t += "",
            i += "",
            i === "auto" && (e.style[r] = i,
                i = Lr(e, r) || i,
                e.style[r] = t),
            f = [t, i],
            _c(f),
            t = f[0],
            i = f[1],
            d = t.match(rn) || [],
            b = i.match(rn) || [],
            b.length) {
            for (; h = rn.exec(i);)
                m = h[0],
                y = i.substring(l, h.index),
                p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1),
                m !== (g = d[c++] || "") && (u = parseFloat(g) || 0,
                    w = g.substr((u + "").length),
                    m.charAt(1) === "=" && (m = un(u, m) + w),
                    v = parseFloat(m),
                    _ = m.substr((v + "").length),
                    l = rn.lastIndex - _.length,
                    _ || (_ = _ || Zt.units[r] || w,
                        l === i.length && (i += _,
                            a.e += _)),
                    w !== _ && (u = fi(e, r, g, _) || 0),
                    a._pt = {
                        _next: a._pt,
                        p: y || c === 1 ? y : ",",
                        s: u,
                        c: v - u,
                        m: p && p < 4 || r === "zIndex" ? Math.round : 0
                    });
            a.c = l < i.length ? i.substring(l, i.length) : ""
        } else
            a.r = r === "display" && i === "none" ? Cc : Dc;
        return ju.test(i) && (a.e = 0),
            this._pt = a,
            a
    },
    $l = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    fd = function(e) {
        var r = e.split(" "),
            t = r[0],
            i = r[1] || "50%";
        return (t === "top" || t === "bottom" || i === "left" || i === "right") && (e = t,
                t = i,
                i = e),
            r[0] = $l[t] || t,
            r[1] = $l[i] || i,
            r.join(" ")
    },
    hd = function(e, r) {
        if (r.tween && r.tween._time === r.tween._dur) {
            var t = r.t,
                i = t.style,
                n = r.u,
                s = t._gsap,
                a, l, c;
            if (n === "all" || n === !0)
                i.cssText = "",
                l = 1;
            else
                for (n = n.split(","),
                    c = n.length; --c > -1;)
                    a = n[c],
                    jr[a] && (l = 1,
                        a = a === "transformOrigin" ? xr : Qe),
                    po(t, a);
            l && (po(t, Qe),
                s && (s.svg && t.removeAttribute("transform"),
                    mo(t, 1),
                    s.uncache = 1,
                    Lc(i)))
        }
    },
    ps = {
        clearProps: function(e, r, t, i, n) {
            if (n.data !== "isFromStart") {
                var s = e._pt = new Xt(e._pt, r, t, 0, 0, hd);
                return s.u = i,
                    s.pr = -10,
                    s.tween = n,
                    e._props.push(t),
                    1
            }
        }
    },
    go = [1, 0, 0, 1, 0, 0],
    Ic = {},
    Bc = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    zl = function(e) {
        var r = Lr(e, Qe);
        return Bc(r) ? go : r.substr(7).match(Wu).map(ot)
    },
    cl = function(e, r) {
        var t = e._gsap || Oi(e),
            i = e.style,
            n = zl(e),
            s, a, l, c;
        return t.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix,
            n = [l.a, l.b, l.c, l.d, l.e, l.f],
            n.join(",") === "1,0,0,1,0,0" ? go : n) : (n === go && !e.offsetParent && e !== cn && !t.svg && (l = i.display,
                i.display = "block",
                s = e.parentNode,
                (!s || !e.offsetParent) && (c = 1,
                    a = e.nextElementSibling,
                    cn.appendChild(e)),
                n = zl(e),
                l ? i.display = l : po(e, "display"),
                c && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : cn.removeChild(e))),
            r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    Ta = function(e, r, t, i, n, s) {
        var a = e._gsap,
            l = n || cl(e, !0),
            c = a.xOrigin || 0,
            f = a.yOrigin || 0,
            h = a.xOffset || 0,
            d = a.yOffset || 0,
            u = l[0],
            p = l[1],
            g = l[2],
            m = l[3],
            v = l[4],
            y = l[5],
            _ = r.split(" "),
            w = parseFloat(_[0]) || 0,
            b = parseFloat(_[1]) || 0,
            T, k, S, D;
        t ? l !== go && (k = u * m - p * g) && (S = w * (m / k) + b * (-g / k) + (g * y - m * v) / k,
                D = w * (-p / k) + b * (u / k) - (u * y - p * v) / k,
                w = S,
                b = D) : (T = Fc(e),
                w = T.x + (~_[0].indexOf("%") ? w / 100 * T.width : w),
                b = T.y + (~(_[1] || _[0]).indexOf("%") ? b / 100 * T.height : b)),
            i || i !== !1 && a.smooth ? (v = w - c,
                y = b - f,
                a.xOffset = h + (v * u + y * g) - v,
                a.yOffset = d + (v * p + y * m) - y) : a.xOffset = a.yOffset = 0,
            a.xOrigin = w,
            a.yOrigin = b,
            a.smooth = !!i,
            a.origin = r,
            a.originIsAbsolute = !!t,
            e.style[xr] = "0px 0px",
            s && (ti(s, a, "xOrigin", c, w),
                ti(s, a, "yOrigin", f, b),
                ti(s, a, "xOffset", h, a.xOffset),
                ti(s, a, "yOffset", d, a.yOffset)),
            e.setAttribute("data-svg-origin", w + " " + b)
    },
    mo = function(e, r) {
        var t = e._gsap || new wc(e);
        if ("x" in t && !r && !t.uncache)
            return t;
        var i = e.style,
            n = t.scaleX < 0,
            s = "px",
            a = "deg",
            l = getComputedStyle(e),
            c = Lr(e, xr) || "0",
            f, h, d, u, p, g, m, v, y, _, w, b, T, k, S, D, $, B, P, E, F, q, R, X, G, ne, O, W, ee, re, le, Ce;
        return f = h = d = g = m = v = y = _ = w = 0,
            u = p = 1,
            t.svg = !!(e.getCTM && Nc(e)),
            l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[Qe] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Qe] !== "none" ? l[Qe] : "")),
                i.scale = i.rotate = i.translate = "none"),
            k = cl(e, t.svg),
            t.svg && (t.uncache ? (G = e.getBBox(),
                    c = t.xOrigin - G.x + "px " + (t.yOrigin - G.y) + "px",
                    X = "") : X = !r && e.getAttribute("data-svg-origin"),
                Ta(e, X || c, !!X || t.originIsAbsolute, t.smooth !== !1, k)),
            b = t.xOrigin || 0,
            T = t.yOrigin || 0,
            k !== go && (B = k[0],
                P = k[1],
                E = k[2],
                F = k[3],
                f = q = k[4],
                h = R = k[5],
                k.length === 6 ? (u = Math.sqrt(B * B + P * P),
                    p = Math.sqrt(F * F + E * E),
                    g = B || P ? Wi(P, B) * wi : 0,
                    y = E || F ? Wi(E, F) * wi + g : 0,
                    y && (p *= Math.abs(Math.cos(y * fn))),
                    t.svg && (f -= b - (b * B + T * E),
                        h -= T - (b * P + T * F))) : (Ce = k[6],
                    re = k[7],
                    O = k[8],
                    W = k[9],
                    ee = k[10],
                    le = k[11],
                    f = k[12],
                    h = k[13],
                    d = k[14],
                    S = Wi(Ce, ee),
                    m = S * wi,
                    S && (D = Math.cos(-S),
                        $ = Math.sin(-S),
                        X = q * D + O * $,
                        G = R * D + W * $,
                        ne = Ce * D + ee * $,
                        O = q * -$ + O * D,
                        W = R * -$ + W * D,
                        ee = Ce * -$ + ee * D,
                        le = re * -$ + le * D,
                        q = X,
                        R = G,
                        Ce = ne),
                    S = Wi(-E, ee),
                    v = S * wi,
                    S && (D = Math.cos(-S),
                        $ = Math.sin(-S),
                        X = B * D - O * $,
                        G = P * D - W * $,
                        ne = E * D - ee * $,
                        le = F * $ + le * D,
                        B = X,
                        P = G,
                        E = ne),
                    S = Wi(P, B),
                    g = S * wi,
                    S && (D = Math.cos(S),
                        $ = Math.sin(S),
                        X = B * D + P * $,
                        G = q * D + R * $,
                        P = P * D - B * $,
                        R = R * D - q * $,
                        B = X,
                        q = G),
                    m && Math.abs(m) + Math.abs(g) > 359.9 && (m = g = 0,
                        v = 180 - v),
                    u = ot(Math.sqrt(B * B + P * P + E * E)),
                    p = ot(Math.sqrt(R * R + Ce * Ce)),
                    S = Wi(q, R),
                    y = Math.abs(S) > 2e-4 ? S * wi : 0,
                    w = le ? 1 / (le < 0 ? -le : le) : 0),
                t.svg && (X = e.getAttribute("transform"),
                    t.forceCSS = e.setAttribute("transform", "") || !Bc(Lr(e, Qe)),
                    X && e.setAttribute("transform", X))),
            Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (u *= -1,
                y += g <= 0 ? 180 : -180,
                g += g <= 0 ? 180 : -180) : (p *= -1,
                y += y <= 0 ? 180 : -180)),
            r = r || t.uncache,
            t.x = f - ((t.xPercent = f && (!r && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + s,
            t.y = h - ((t.yPercent = h && (!r && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + s,
            t.z = d + s,
            t.scaleX = ot(u),
            t.scaleY = ot(p),
            t.rotation = ot(g) + a,
            t.rotationX = ot(m) + a,
            t.rotationY = ot(v) + a,
            t.skewX = y + a,
            t.skewY = _ + a,
            t.transformPerspective = w + s,
            (t.zOrigin = parseFloat(c.split(" ")[2]) || 0) && (i[xr] = gs(c)),
            t.xOffset = t.yOffset = 0,
            t.force3D = Zt.force3D,
            t.renderTransform = t.svg ? pd : Rc ? $c : dd,
            t.uncache = 0,
            t
    },
    gs = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    Xs = function(e, r, t) {
        var i = Tt(r);
        return ot(parseFloat(r) + parseFloat(fi(e, "x", t + "px", i))) + i
    },
    dd = function(e, r) {
        r.z = "0px",
            r.rotationY = r.rotationX = "0deg",
            r.force3D = 0,
            $c(e, r)
    },
    gi = "0deg",
    Cn = "0px",
    mi = ") ",
    $c = function(e, r) {
        var t = r || this,
            i = t.xPercent,
            n = t.yPercent,
            s = t.x,
            a = t.y,
            l = t.z,
            c = t.rotation,
            f = t.rotationY,
            h = t.rotationX,
            d = t.skewX,
            u = t.skewY,
            p = t.scaleX,
            g = t.scaleY,
            m = t.transformPerspective,
            v = t.force3D,
            y = t.target,
            _ = t.zOrigin,
            w = "",
            b = v === "auto" && e && e !== 1 || v === !0;
        if (_ && (h !== gi || f !== gi)) {
            var T = parseFloat(f) * fn,
                k = Math.sin(T),
                S = Math.cos(T),
                D;
            T = parseFloat(h) * fn,
                D = Math.cos(T),
                s = Xs(y, s, k * D * -_),
                a = Xs(y, a, -Math.sin(T) * -_),
                l = Xs(y, l, S * D * -_ + _)
        }
        m !== Cn && (w += "perspective(" + m + mi),
            (i || n) && (w += "translate(" + i + "%, " + n + "%) "),
            (b || s !== Cn || a !== Cn || l !== Cn) && (w += l !== Cn || b ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + mi),
            c !== gi && (w += "rotate(" + c + mi),
            f !== gi && (w += "rotateY(" + f + mi),
            h !== gi && (w += "rotateX(" + h + mi),
            (d !== gi || u !== gi) && (w += "skew(" + d + ", " + u + mi),
            (p !== 1 || g !== 1) && (w += "scale(" + p + ", " + g + mi),
            y.style[Qe] = w || "translate(0, 0)"
    },
    pd = function(e, r) {
        var t = r || this,
            i = t.xPercent,
            n = t.yPercent,
            s = t.x,
            a = t.y,
            l = t.rotation,
            c = t.skewX,
            f = t.skewY,
            h = t.scaleX,
            d = t.scaleY,
            u = t.target,
            p = t.xOrigin,
            g = t.yOrigin,
            m = t.xOffset,
            v = t.yOffset,
            y = t.forceCSS,
            _ = parseFloat(s),
            w = parseFloat(a),
            b, T, k, S, D;
        l = parseFloat(l),
            c = parseFloat(c),
            f = parseFloat(f),
            f && (f = parseFloat(f),
                c += f,
                l += f),
            l || c ? (l *= fn,
                c *= fn,
                b = Math.cos(l) * h,
                T = Math.sin(l) * h,
                k = Math.sin(l - c) * -d,
                S = Math.cos(l - c) * d,
                c && (f *= fn,
                    D = Math.tan(c - f),
                    D = Math.sqrt(1 + D * D),
                    k *= D,
                    S *= D,
                    f && (D = Math.tan(f),
                        D = Math.sqrt(1 + D * D),
                        b *= D,
                        T *= D)),
                b = ot(b),
                T = ot(T),
                k = ot(k),
                S = ot(S)) : (b = h,
                S = d,
                T = k = 0),
            (_ && !~(s + "").indexOf("px") || w && !~(a + "").indexOf("px")) && (_ = fi(u, "x", s, "px"),
                w = fi(u, "y", a, "px")),
            (p || g || m || v) && (_ = ot(_ + p - (p * b + g * k) + m),
                w = ot(w + g - (p * T + g * S) + v)),
            (i || n) && (D = u.getBBox(),
                _ = ot(_ + i / 100 * D.width),
                w = ot(w + n / 100 * D.height)),
            D = "matrix(" + b + "," + T + "," + k + "," + S + "," + _ + "," + w + ")",
            u.setAttribute("transform", D),
            y && (u.style[Qe] = D)
    },
    gd = function(e, r, t, i, n) {
        var s = 360,
            a = gt(n),
            l = parseFloat(n) * (a && ~n.indexOf("rad") ? wi : 1),
            c = l - i,
            f = i + c + "deg",
            h, d;
        return a && (h = n.split("_")[1],
                h === "short" && (c %= s,
                    c !== c % (s / 2) && (c += c < 0 ? s : -s)),
                h === "cw" && c < 0 ? c = (c + s * Fl) % s - ~~(c / s) * s : h === "ccw" && c > 0 && (c = (c - s * Fl) % s - ~~(c / s) * s)),
            e._pt = d = new Xt(e._pt, r, t, i, c, Zh),
            d.e = f,
            d.u = "deg",
            e._props.push(t),
            d
    },
    ql = function(e, r) {
        for (var t in r)
            e[t] = r[t];
        return e
    },
    md = function(e, r, t) {
        var i = ql({}, t._gsap),
            n = "perspective,force3D,transformOrigin,svgOrigin",
            s = t.style,
            a, l, c, f, h, d, u, p;
        i.svg ? (c = t.getAttribute("transform"),
            t.setAttribute("transform", ""),
            s[Qe] = r,
            a = mo(t, 1),
            po(t, Qe),
            t.setAttribute("transform", c)) : (c = getComputedStyle(t)[Qe],
            s[Qe] = r,
            a = mo(t, 1),
            s[Qe] = c);
        for (l in jr)
            c = i[l],
            f = a[l],
            c !== f && n.indexOf(l) < 0 && (u = Tt(c),
                p = Tt(f),
                h = u !== p ? fi(t, l, c, p) : parseFloat(c),
                d = parseFloat(f),
                e._pt = new Xt(e._pt, a, l, h, d - h, ba),
                e._pt.u = p || 0,
                e._props.push(l));
        ql(a, i)
    };
Vt("padding,margin,Width,Radius", function(o, e) {
    var r = "Top",
        t = "Right",
        i = "Bottom",
        n = "Left",
        s = (e < 3 ? [r, t, i, n] : [r + n, r + t, i + t, i + n]).map(function(a) {
            return e < 2 ? o + a : "border" + a + o
        });
    ps[e > 1 ? "border" + o : o] = function(a, l, c, f, h) {
        var d, u;
        if (arguments.length < 4)
            return d = s.map(function(p) {
                    return Br(a, p, c)
                }),
                u = d.join(" "),
                u.split(d[0]).length === 5 ? d[0] : u;
        d = (f + "").split(" "),
            u = {},
            s.forEach(function(p, g) {
                return u[p] = d[g] = d[g] || d[(g - 1) / 2 | 0]
            }),
            a.init(l, u, h)
    }
});
var zc = {
    name: "css",
    register: xa,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, r, t, i, n) {
        var s = this._props,
            a = e.style,
            l = t.vars.startAt,
            c, f, h, d, u, p, g, m, v, y, _, w, b, T, k, S;
        al || xa(),
            this.styles = this.styles || Ac(e),
            S = this.styles.props,
            this.tween = t;
        for (g in r)
            if (g !== "autoRound" && (f = r[g], !(jt[g] && xc(g, r, t, i, e, n)))) {
                if (u = typeof f,
                    p = ps[g],
                    u === "function" && (f = f.call(t, i, e, n),
                        u = typeof f),
                    u === "string" && ~f.indexOf("random(") && (f = fo(f)),
                    p)
                    p(this, e, g, f, t) && (k = 1);
                else if (g.substr(0, 2) === "--")
                    c = (getComputedStyle(e).getPropertyValue(g) + "").trim(),
                    f += "",
                    ai.lastIndex = 0,
                    ai.test(c) || (m = Tt(c),
                        v = Tt(f)),
                    v ? m !== v && (c = fi(e, g, c, v) + v) : m && (f += m),
                    this.add(a, "setProperty", c, f, i, n, 0, 0, g),
                    s.push(g),
                    S.push(g, 0, a[g]);
                else if (u !== "undefined") {
                    if (l && g in l ? (c = typeof l[g] == "function" ? l[g].call(t, i, e, n) : l[g],
                            gt(c) && ~c.indexOf("random(") && (c = fo(c)),
                            Tt(c + "") || (c += Zt.units[g] || Tt(Br(e, g)) || ""),
                            (c + "").charAt(1) === "=" && (c = Br(e, g))) : c = Br(e, g),
                        d = parseFloat(c),
                        y = u === "string" && f.charAt(1) === "=" && f.substr(0, 2),
                        y && (f = f.substr(2)),
                        h = parseFloat(f),
                        g in Vr && (g === "autoAlpha" && (d === 1 && Br(e, "visibility") === "hidden" && h && (d = 0),
                                S.push("visibility", 0, a.visibility),
                                ti(this, a, "visibility", d ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)),
                            g !== "scale" && g !== "transform" && (g = Vr[g], ~g.indexOf(",") && (g = g.split(",")[0]))),
                        _ = g in jr,
                        _) {
                        if (this.styles.save(g),
                            w || (b = e._gsap,
                                b.renderTransform && !r.parseTransform || mo(e, r.parseTransform),
                                T = r.smoothOrigin !== !1 && b.smooth,
                                w = this._pt = new Xt(this._pt, a, Qe, 0, 1, b.renderTransform, b, 0, -1),
                                w.dep = 1),
                            g === "scale")
                            this._pt = new Xt(this._pt, b, "scaleY", d, (y ? un(d, y + h) : h) - d || 0, ba),
                            this._pt.u = 0,
                            s.push("scaleY", g),
                            g += "X";
                        else if (g === "transformOrigin") {
                            S.push(xr, 0, a[xr]),
                                f = fd(f),
                                b.svg ? Ta(e, f, 0, T, 0, this) : (v = parseFloat(f.split(" ")[2]) || 0,
                                    v !== b.zOrigin && ti(this, b, "zOrigin", b.zOrigin, v),
                                    ti(this, a, g, gs(c), gs(f)));
                            continue
                        } else if (g === "svgOrigin") {
                            Ta(e, f, 1, T, 0, this);
                            continue
                        } else if (g in Ic) {
                            gd(this, b, g, d, y ? un(d, y + f) : f);
                            continue
                        } else if (g === "smoothOrigin") {
                            ti(this, b, "smooth", b.smooth, f);
                            continue
                        } else if (g === "force3D") {
                            b[g] = f;
                            continue
                        } else if (g === "transform") {
                            md(this, f, e);
                            continue
                        }
                    } else
                        g in a || (g = kn(g) || g);
                    if (_ || (h || h === 0) && (d || d === 0) && !Qh.test(f) && g in a)
                        m = (c + "").substr((d + "").length),
                        h || (h = 0),
                        v = Tt(f) || (g in Zt.units ? Zt.units[g] : m),
                        m !== v && (d = fi(e, g, c, v)),
                        this._pt = new Xt(this._pt, _ ? b : a, g, d, (y ? un(d, y + h) : h) - d, !_ && (v === "px" || g === "zIndex") && r.autoRound !== !1 ? ed : ba),
                        this._pt.u = v || 0,
                        m !== v && v !== "%" && (this._pt.b = c,
                            this._pt.r = Jh);
                    else if (g in a)
                        cd.call(this, e, g, c, y ? y + f : f);
                    else if (g in e)
                        this.add(e, g, c || e[g], y ? y + f : f, i, n);
                    else {
                        Za(g, f);
                        continue
                    }
                    _ || (g in a ? S.push(g, 0, a[g]) : S.push(g, 1, c || e[g])),
                        s.push(g)
                }
            }
        k && Ec(this)
    },
    render: function(e, r) {
        if (r.tween._time || !ll())
            for (var t = r._pt; t;)
                t.r(e, t.d),
                t = t._next;
        else
            r.styles.revert()
    },
    get: Br,
    aliases: Vr,
    getSetter: function(e, r, t) {
        var i = Vr[r];
        return i && i.indexOf(",") < 0 && (r = i),
            r in jr && r !== xr && (e._gsap.x || Br(e, "x")) ? t && Rl === t ? r === "scale" ? nd : id : (Rl = t || {}) && (r === "scale" ? od : sd) : e.style && !Ka(e.style[r]) ? td : ~r.indexOf("-") ? rd : ol(e, r)
    },
    core: {
        _removeProperty: po,
        _getMatrix: cl
    }
};
er.utils.checkPrefix = kn;
er.core.getStyleSaver = Ac;
(function(o, e, r, t) {
    var i = Vt(o + "," + e + "," + r, function(n) {
        jr[n] = 1
    });
    Vt(e, function(n) {
            Zt.units[n] = "deg",
                Ic[n] = 1
        }),
        Vr[i[13]] = o + "," + e,
        Vt(t, function(n) {
            var s = n.split(":");
            Vr[s[1]] = i[s[0]]
        })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
    Zt.units[o] = "px"
});
er.registerPlugin(zc);
var H = er.registerPlugin(zc) || er;
H.core.Tween;
/*!
 * paths 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var _d = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    yd = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
    vd = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
    bd = /(^[#\.][a-z]|[a-y][a-z])/i,
    wd = Math.PI / 180,
    xd = 180 / Math.PI,
    Po = Math.sin,
    Eo = Math.cos,
    $t = Math.abs,
    zr = Math.sqrt,
    Td = Math.atan2,
    _o = 1e8,
    Vl = function(e) {
        return typeof e == "string"
    },
    qc = function(e) {
        return typeof e == "number"
    },
    Sd = function(e) {
        return typeof e > "u"
    },
    kd = {},
    Md = {},
    ms = 1e5,
    Vc = function(e) {
        return Math.round((e + _o) % 1 * ms) / ms || (e < 0 ? 0 : 1)
    },
    Oe = function(e) {
        return Math.round(e * ms) / ms || 0
    },
    Xl = function(e) {
        return Math.round(e * 1e10) / 1e10 || 0
    },
    Yl = function(e, r, t, i) {
        var n = e[r],
            s = i === 1 ? 6 : Sa(n, t, i);
        if (s && s + t + 2 < n.length)
            return e.splice(r, 0, n.slice(0, t + s + 2)),
                n.splice(0, t + s),
                1
    },
    Xc = function(e, r, t) {
        var i = e.length,
            n = ~~(t * i);
        if (e[n] > r) {
            for (; --n && e[n] > r;)
            ;
            n < 0 && (n = 0)
        } else
            for (; e[++n] < r && n < i;)
        ;
        return n < i ? n : i - 1
    },
    Pd = function(e, r) {
        var t = e.length;
        for (r || e.reverse(); t--;)
            e[t].reversed || Dd(e[t])
    },
    Gl = function(e, r) {
        return r.totalLength = e.totalLength,
            e.samples ? (r.samples = e.samples.slice(0),
                r.lookup = e.lookup.slice(0),
                r.minLength = e.minLength,
                r.resolution = e.resolution) : e.totalPoints && (r.totalPoints = e.totalPoints),
            r
    },
    Ed = function(e, r) {
        var t = e.length,
            i = e[t - 1] || [],
            n = i.length;
        t && r[0] === i[n - 2] && r[1] === i[n - 1] && (r = i.concat(r.slice(2)),
                t--),
            e[t] = r
    },
    Kn;

function Pg(o) {
    o = Vl(o) && bd.test(o) && document.querySelector(o) || o;
    var e = o.getAttribute ? o : 0,
        r;
    return e && (o = o.getAttribute("d")) ? (e._gsPath || (e._gsPath = {}),
        r = e._gsPath[o],
        r && !r._dirty ? r : e._gsPath[o] = _s(o)) : o ? Vl(o) ? _s(o) : qc(o[0]) ? [o] : o : console.warn("Expecting a <path> element or an SVG path data string")
}

function Od(o) {
    for (var e = [], r = 0; r < o.length; r++)
        e[r] = Gl(o[r], o[r].slice(0));
    return Gl(o, e)
}

function Dd(o) {
    var e = 0,
        r;
    for (o.reverse(); e < o.length; e += 2)
        r = o[e],
        o[e] = o[e + 1],
        o[e + 1] = r;
    o.reversed = !o.reversed
}
var Cd = function(e, r) {
        var t = document.createElementNS("http://www.w3.org/2000/svg", "path"),
            i = [].slice.call(e.attributes),
            n = i.length,
            s;
        for (r = "," + r + ","; --n > -1;)
            s = i[n].nodeName.toLowerCase(),
            r.indexOf("," + s + ",") < 0 && t.setAttributeNS(null, s, i[n].nodeValue);
        return t
    },
    Ld = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    },
    Ad = function(e, r) {
        for (var t = r ? r.split(",") : [], i = {}, n = t.length; --n > -1;)
            i[t[n]] = +e.getAttribute(t[n]) || 0;
        return i
    };

function Eg(o, e) {
    var r = o.tagName.toLowerCase(),
        t = .552284749831,
        i, n, s, a, l, c, f, h, d, u, p, g, m, v, y, _, w, b, T, k, S, D;
    return r === "path" || !o.getBBox ? o : (c = Cd(o, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),
        D = Ad(o, Ld[r]),
        r === "rect" ? (a = D.rx,
            l = D.ry || a,
            n = D.x,
            s = D.y,
            u = D.width - a * 2,
            p = D.height - l * 2,
            a || l ? (g = n + a * (1 - t),
                m = n + a,
                v = m + u,
                y = v + a * t,
                _ = v + a,
                w = s + l * (1 - t),
                b = s + l,
                T = b + p,
                k = T + l * t,
                S = T + l,
                i = "M" + _ + "," + b + " V" + T + " C" + [_, k, y, S, v, S, v - (v - m) / 3, S, m + (v - m) / 3, S, m, S, g, S, n, k, n, T, n, T - (T - b) / 3, n, b + (T - b) / 3, n, b, n, w, g, s, m, s, m + (v - m) / 3, s, v - (v - m) / 3, s, v, s, y, s, _, w, _, b].join(",") + "z") : i = "M" + (n + u) + "," + s + " v" + p + " h" + -u + " v" + -p + " h" + u + "z") : r === "circle" || r === "ellipse" ? (r === "circle" ? (a = l = D.r,
                h = a * t) : (a = D.rx,
                l = D.ry,
                h = l * t),
            n = D.cx,
            s = D.cy,
            f = a * t,
            i = "M" + (n + a) + "," + s + " C" + [n + a, s + h, n + f, s + l, n, s + l, n - f, s + l, n - a, s + h, n - a, s, n - a, s - h, n - f, s - l, n, s - l, n + f, s - l, n + a, s - h, n + a, s].join(",") + "z") : r === "line" ? i = "M" + D.x1 + "," + D.y1 + " L" + D.x2 + "," + D.y2 : (r === "polyline" || r === "polygon") && (d = (o.getAttribute("points") + "").match(yd) || [],
            n = d.shift(),
            s = d.shift(),
            i = "M" + n + "," + s + " L" + d.join(","),
            r === "polygon" && (i += "," + n + "," + s + "z")),
        c.setAttribute("d", Wc(c._gsRawPath = _s(i))),
        e && o.parentNode && (o.parentNode.insertBefore(c, o),
            o.parentNode.removeChild(o)),
        c)
}

function Yc(o, e, r) {
    var t = o[e],
        i = o[e + 2],
        n = o[e + 4],
        s;
    return t += (i - t) * r,
        i += (n - i) * r,
        t += (i - t) * r,
        s = i + (n + (o[e + 6] - n) * r - i) * r - t,
        t = o[e + 1],
        i = o[e + 3],
        n = o[e + 5],
        t += (i - t) * r,
        i += (n - i) * r,
        t += (i - t) * r,
        Oe(Td(i + (n + (o[e + 7] - n) * r - i) * r - t, s) * xd)
}

function Og(o, e, r) {
    r = Sd(r) ? 1 : Xl(r) || 0,
        e = Xl(e) || 0;
    var t = Math.max(0, ~~($t(r - e) - 1e-8)),
        i = Od(o);
    if (e > r && (e = 1 - e,
            r = 1 - r,
            Pd(i),
            i.totalLength = 0),
        e < 0 || r < 0) {
        var n = Math.abs(~~Math.min(e, r)) + 1;
        e += n,
            r += n
    }
    i.totalLength || Gc(i);
    var s = r > 1,
        a = Hl(i, e, kd, !0),
        l = Hl(i, r, Md),
        c = l.segment,
        f = a.segment,
        h = l.segIndex,
        d = a.segIndex,
        u = l.i,
        p = a.i,
        g = d === h,
        m = u === p && g,
        v, y, _, w, b, T, k, S;
    if (s || t) {
        for (v = h < d || g && u < p || m && l.t < a.t,
            Yl(i, d, p, a.t) && (d++,
                v || (h++,
                    m ? (l.t = (l.t - a.t) / (1 - a.t),
                        u = 0) : g && (u -= p))),
            Math.abs(1 - (r - e)) < 1e-5 ? h = d - 1 : !l.t && h ? h-- : Yl(i, h, u, l.t) && v && d++,
            a.t === 1 && (d = (d + 1) % i.length),
            b = [],
            T = i.length,
            k = 1 + T * t,
            S = d,
            k += (T - d + h) % T,
            w = 0; w < k; w++)
            Ed(b, i[S++ % T]);
        i = b
    } else if (_ = l.t === 1 ? 6 : Sa(c, u, l.t),
        e !== r)
        for (y = Sa(f, p, m ? a.t / l.t : a.t),
            g && (_ += y),
            c.splice(u + _ + 2),
            (y || p) && f.splice(0, p + y),
            w = i.length; w--;)
            (w < d || w > h) && i.splice(w, 1);
    else
        c.angle = Yc(c, u + _, 0),
        u += _,
        a = c[u],
        l = c[u + 1],
        c.length = c.totalLength = 0,
        c.totalPoints = i.totalPoints = 8,
        c.push(a, l, a, l, a, l, a, l);
    return i.totalLength = 0,
        i
}

function Rd(o, e, r) {
    e = e || 0,
        o.samples || (o.samples = [],
            o.lookup = []);
    var t = ~~o.resolution || 12,
        i = 1 / t,
        n = r ? e + r * 6 + 1 : o.length,
        s = o[e],
        a = o[e + 1],
        l = e ? e / 6 * t : 0,
        c = o.samples,
        f = o.lookup,
        h = (e ? o.minLength : _o) || _o,
        d = c[l + r * t - 1],
        u = e ? c[l - 1] : 0,
        p, g, m, v, y, _, w, b, T, k, S, D, $, B, P, E, F;
    for (c.length = f.length = 0,
        g = e + 2; g < n; g += 6) {
        if (m = o[g + 4] - s,
            v = o[g + 2] - s,
            y = o[g] - s,
            b = o[g + 5] - a,
            T = o[g + 3] - a,
            k = o[g + 1] - a,
            _ = w = S = D = 0,
            $t(m) < .01 && $t(b) < .01 && $t(y) + $t(k) < .01)
            o.length > 8 && (o.splice(g, 6),
                g -= 6,
                n -= 6);
        else
            for (p = 1; p <= t; p++)
                B = i * p,
                $ = 1 - B,
                _ = w - (w = (B * B * m + 3 * $ * (B * v + $ * y)) * B),
                S = D - (D = (B * B * b + 3 * $ * (B * T + $ * k)) * B),
                E = zr(S * S + _ * _),
                E < h && (h = E),
                u += E,
                c[l++] = u;
        s += m,
            a += b
    }
    if (d)
        for (d -= u; l < c.length; l++)
            c[l] += d;
    if (c.length && h) {
        if (o.totalLength = F = c[c.length - 1] || 0,
            o.minLength = h,
            F / h < 9999)
            for (E = P = 0,
                p = 0; p < F; p += h)
                f[E++] = c[P] < p ? ++P : P
    } else
        o.totalLength = c[0] = 0;
    return e ? u - c[e / 2 - 1] : u
}

function Gc(o, e) {
    var r, t, i;
    for (i = r = t = 0; i < o.length; i++)
        o[i].resolution = ~~e || 12,
        t += o[i].length,
        r += Rd(o[i]);
    return o.totalPoints = t,
        o.totalLength = r,
        o
}

function Sa(o, e, r) {
    if (r <= 0 || r >= 1)
        return 0;
    var t = o[e],
        i = o[e + 1],
        n = o[e + 2],
        s = o[e + 3],
        a = o[e + 4],
        l = o[e + 5],
        c = o[e + 6],
        f = o[e + 7],
        h = t + (n - t) * r,
        d = n + (a - n) * r,
        u = i + (s - i) * r,
        p = s + (l - s) * r,
        g = h + (d - h) * r,
        m = u + (p - u) * r,
        v = a + (c - a) * r,
        y = l + (f - l) * r;
    return d += (v - d) * r,
        p += (y - p) * r,
        o.splice(e + 2, 4, Oe(h), Oe(u), Oe(g), Oe(m), Oe(g + (d - g) * r), Oe(m + (p - m) * r), Oe(d), Oe(p), Oe(v), Oe(y)),
        o.samples && o.samples.splice(e / 6 * o.resolution | 0, 0, 0, 0, 0, 0, 0, 0),
        6
}

function Hl(o, e, r, t) {
    r = r || {},
        o.totalLength || Gc(o),
        (e < 0 || e > 1) && (e = Vc(e));
    var i = 0,
        n = o[0],
        s, a, l, c, f, h, d;
    if (!e)
        d = h = i = 0,
        n = o[0];
    else if (e === 1)
        d = 1,
        i = o.length - 1,
        n = o[i],
        h = n.length - 8;
    else {
        if (o.length > 1) {
            for (l = o.totalLength * e,
                f = h = 0;
                (f += o[h++].totalLength) < l;)
                i = h;
            n = o[i],
                c = f - n.totalLength,
                e = (l - c) / (f - c) || 0
        }
        s = n.samples,
            a = n.resolution,
            l = n.totalLength * e,
            h = n.lookup.length ? n.lookup[~~(l / n.minLength)] || 0 : Xc(s, l, e),
            c = h ? s[h - 1] : 0,
            f = s[h],
            f < l && (c = f,
                f = s[++h]),
            d = 1 / a * ((l - c) / (f - c) + h % a),
            h = ~~(h / a) * 6,
            t && d === 1 && (h + 6 < n.length ? (h += 6,
                d = 0) : i + 1 < o.length && (h = d = 0,
                n = o[++i]))
    }
    return r.t = d,
        r.i = h,
        r.path = o,
        r.segment = n,
        r.segIndex = i,
        r
}

function Dg(o, e, r, t) {
    var i = o[0],
        n = t || {},
        s, a, l, c, f, h, d, u, p;
    if ((e < 0 || e > 1) && (e = Vc(e)),
        o.length > 1) {
        for (l = o.totalLength * e,
            f = h = 0;
            (f += o[h++].totalLength) < l;)
            i = o[h];
        c = f - i.totalLength,
            e = (l - c) / (f - c) || 0
    }
    return s = i.samples,
        a = i.resolution,
        l = i.totalLength * e,
        h = i.lookup.length ? i.lookup[e < 1 ? ~~(l / i.minLength) : i.lookup.length - 1] || 0 : Xc(s, l, e),
        c = h ? s[h - 1] : 0,
        f = s[h],
        f < l && (c = f,
            f = s[++h]),
        d = 1 / a * ((l - c) / (f - c) + h % a) || 0,
        p = 1 - d,
        h = ~~(h / a) * 6,
        u = i[h],
        n.x = Oe((d * d * (i[h + 6] - u) + 3 * p * (d * (i[h + 4] - u) + p * (i[h + 2] - u))) * d + u),
        n.y = Oe((d * d * (i[h + 7] - (u = i[h + 1])) + 3 * p * (d * (i[h + 5] - u) + p * (i[h + 3] - u))) * d + u),
        r && (n.angle = i.totalLength ? Yc(i, h, d >= 1 ? 1 - 1e-9 : d || 1e-9) : i.angle || 0),
        n
}

function Fd(o, e, r, t, i, n, s) {
    for (var a = o.length, l, c, f, h, d; --a > -1;)
        for (l = o[a],
            c = l.length,
            f = 0; f < c; f += 2)
            h = l[f],
            d = l[f + 1],
            l[f] = h * e + d * t + n,
            l[f + 1] = h * r + d * i + s;
    return o._dirty = 1,
        o
}

function Nd(o, e, r, t, i, n, s, a, l) {
    if (!(o === a && e === l)) {
        r = $t(r),
            t = $t(t);
        var c = i % 360 * wd,
            f = Eo(c),
            h = Po(c),
            d = Math.PI,
            u = d * 2,
            p = (o - a) / 2,
            g = (e - l) / 2,
            m = f * p + h * g,
            v = -h * p + f * g,
            y = m * m,
            _ = v * v,
            w = y / (r * r) + _ / (t * t);
        w > 1 && (r = zr(w) * r,
            t = zr(w) * t);
        var b = r * r,
            T = t * t,
            k = (b * T - b * _ - T * y) / (b * _ + T * y);
        k < 0 && (k = 0);
        var S = (n === s ? -1 : 1) * zr(k),
            D = S * (r * v / t),
            $ = S * -(t * m / r),
            B = (o + a) / 2,
            P = (e + l) / 2,
            E = B + (f * D - h * $),
            F = P + (h * D + f * $),
            q = (m - D) / r,
            R = (v - $) / t,
            X = (-m - D) / r,
            G = (-v - $) / t,
            ne = q * q + R * R,
            O = (R < 0 ? -1 : 1) * Math.acos(q / zr(ne)),
            W = (q * G - R * X < 0 ? -1 : 1) * Math.acos((q * X + R * G) / zr(ne * (X * X + G * G)));
        isNaN(W) && (W = d), !s && W > 0 ? W -= u : s && W < 0 && (W += u),
            O %= u,
            W %= u;
        var ee = Math.ceil($t(W) / (u / 4)),
            re = [],
            le = W / ee,
            Ce = 4 / 3 * Po(le / 2) / (1 + Eo(le / 2)),
            fe = f * r,
            Le = h * r,
            ge = h * -t,
            Yt = f * t,
            de;
        for (de = 0; de < ee; de++)
            i = O + de * le,
            m = Eo(i),
            v = Po(i),
            q = Eo(i += le),
            R = Po(i),
            re.push(m - Ce * v, v + Ce * m, q + Ce * R, R - Ce * q, q, R);
        for (de = 0; de < re.length; de += 2)
            m = re[de],
            v = re[de + 1],
            re[de] = m * fe + v * ge + E,
            re[de + 1] = m * Le + v * Yt + F;
        return re[de - 2] = a,
            re[de - 1] = l,
            re
    }
}

function _s(o) {
    var e = (o + "").replace(vd, function(D) {
            var $ = +D;
            return $ < 1e-4 && $ > -1e-4 ? 0 : $
        }).match(_d) || [],
        r = [],
        t = 0,
        i = 0,
        n = 2 / 3,
        s = e.length,
        a = 0,
        l = "ERROR: malformed path: " + o,
        c, f, h, d, u, p, g, m, v, y, _, w, b, T, k, S = function($, B, P, E) {
            y = (P - $) / 3,
                _ = (E - B) / 3,
                g.push($ + y, B + _, P - y, E - _, P, E)
        };
    if (!o || !isNaN(e[0]) || isNaN(e[1]))
        return console.log(l),
            r;
    for (c = 0; c < s; c++)
        if (b = u,
            isNaN(e[c]) ? (u = e[c].toUpperCase(),
                p = u !== e[c]) : c--,
            h = +e[c + 1],
            d = +e[c + 2],
            p && (h += t,
                d += i),
            c || (m = h,
                v = d),
            u === "M")
            g && (g.length < 8 ? r.length -= 1 : a += g.length),
            t = m = h,
            i = v = d,
            g = [h, d],
            r.push(g),
            c += 2,
            u = "L";
        else if (u === "C")
        g || (g = [0, 0]),
        p || (t = i = 0),
        g.push(h, d, t + e[c + 3] * 1, i + e[c + 4] * 1, t += e[c + 5] * 1, i += e[c + 6] * 1),
        c += 6;
    else if (u === "S")
        y = t,
        _ = i,
        (b === "C" || b === "S") && (y += t - g[g.length - 4],
            _ += i - g[g.length - 3]),
        p || (t = i = 0),
        g.push(y, _, h, d, t += e[c + 3] * 1, i += e[c + 4] * 1),
        c += 4;
    else if (u === "Q")
        y = t + (h - t) * n,
        _ = i + (d - i) * n,
        p || (t = i = 0),
        t += e[c + 3] * 1,
        i += e[c + 4] * 1,
        g.push(y, _, t + (h - t) * n, i + (d - i) * n, t, i),
        c += 4;
    else if (u === "T")
        y = t - g[g.length - 4],
        _ = i - g[g.length - 3],
        g.push(t + y, i + _, h + (t + y * 1.5 - h) * n, d + (i + _ * 1.5 - d) * n, t = h, i = d),
        c += 2;
    else if (u === "H")
        S(t, i, t = h, i),
        c += 1;
    else if (u === "V")
        S(t, i, t, i = h + (p ? i - t : 0)),
        c += 1;
    else if (u === "L" || u === "Z")
        u === "Z" && (h = m,
            d = v,
            g.closed = !0),
        (u === "L" || $t(t - h) > .5 || $t(i - d) > .5) && (S(t, i, h, d),
            u === "L" && (c += 2)),
        t = h,
        i = d;
    else if (u === "A") {
        if (T = e[c + 4],
            k = e[c + 5],
            y = e[c + 6],
            _ = e[c + 7],
            f = 7,
            T.length > 1 && (T.length < 3 ? (_ = y,
                    y = k,
                    f--) : (_ = k,
                    y = T.substr(2),
                    f -= 2),
                k = T.charAt(1),
                T = T.charAt(0)),
            w = Nd(t, i, +e[c + 1], +e[c + 2], +e[c + 3], +T, +k, (p ? t : 0) + y * 1, (p ? i : 0) + _ * 1),
            c += f,
            w)
            for (f = 0; f < w.length; f++)
                g.push(w[f]);
        t = g[g.length - 2],
            i = g[g.length - 1]
    } else
        console.log(l);
    return c = g.length,
        c < 6 ? (r.pop(),
            c = 0) : g[0] === g[c - 2] && g[1] === g[c - 1] && (g.closed = !0),
        r.totalPoints = a + c,
        r
}

function Wl(o, e, r, t, i, n, s, a, l, c, f) {
    var h = (o + r) / 2,
        d = (e + t) / 2,
        u = (r + i) / 2,
        p = (t + n) / 2,
        g = (i + s) / 2,
        m = (n + a) / 2,
        v = (h + u) / 2,
        y = (d + p) / 2,
        _ = (u + g) / 2,
        w = (p + m) / 2,
        b = (v + _) / 2,
        T = (y + w) / 2,
        k = s - o,
        S = a - e,
        D = $t((r - s) * S - (t - a) * k),
        $ = $t((i - s) * S - (n - a) * k),
        B;
    return c || (c = [o, e, s, a],
            f = 2),
        c.splice(f || c.length - 2, 0, b, T),
        (D + $) * (D + $) > l * (k * k + S * S) && (B = c.length,
            Wl(o, e, h, d, v, y, b, T, l, c, f),
            Wl(b, T, _, w, g, m, s, a, l, c, f + 2 + (c.length - B))),
        c
}

function Cg(o, e) {
    e === void 0 && (e = 1);
    for (var r = o[0], t = 0, i = [r, t], n = 2; n < o.length; n += 2)
        i.push(r, t, o[n], t = (o[n] - r) * e / 2, r = o[n], -t);
    return i
}

function Lg(o, e) {
    $t(o[0] - o[2]) < 1e-4 && $t(o[1] - o[3]) < 1e-4 && (o = o.slice(2));
    var r = o.length - 2,
        t = +o[0],
        i = +o[1],
        n = +o[2],
        s = +o[3],
        a = [t, i, t, i],
        l = n - t,
        c = s - i,
        f = Math.abs(o[r] - t) < .001 && Math.abs(o[r + 1] - i) < .001,
        h, d, u, p, g, m, v, y, _, w, b, T, k, S, D;
    for (f && (o.push(n, s),
            n = t,
            s = i,
            t = o[r - 2],
            i = o[r - 1],
            o.unshift(t, i),
            r += 4),
        e = e || e === 0 ? +e : 1,
        u = 2; u < r; u += 2)
        h = t,
        d = i,
        t = n,
        i = s,
        n = +o[u + 2],
        s = +o[u + 3], !(t === n && i === s) && (p = l,
            g = c,
            l = n - t,
            c = s - i,
            m = zr(p * p + g * g),
            v = zr(l * l + c * c),
            y = zr(Math.pow(l / v + p / m, 2) + Math.pow(c / v + g / m, 2)),
            _ = (m + v) * e * .25 / y,
            w = t - (t - h) * (m ? _ / m : 0),
            b = t + (n - t) * (v ? _ / v : 0),
            T = t - (w + ((b - w) * (m * 3 / (m + v) + .5) / 4 || 0)),
            k = i - (i - d) * (m ? _ / m : 0),
            S = i + (s - i) * (v ? _ / v : 0),
            D = i - (k + ((S - k) * (m * 3 / (m + v) + .5) / 4 || 0)),
            (t !== h || i !== d) && a.push(Oe(w + T), Oe(k + D), Oe(t), Oe(i), Oe(b + T), Oe(S + D)));
    return t !== n || i !== s || a.length < 4 ? a.push(Oe(n), Oe(s), Oe(n), Oe(s)) : a.length -= 2,
        a.length === 2 ? a.push(t, i, t, i, t, i) : f && (a.splice(0, 6),
            a.length = a.length - 6),
        a
}

function Id(o, e, r, t, i, n) {
    var s = i - r,
        a = n - t,
        l;
    return (s || a) && (l = ((o - r) * s + (e - t) * a) / (s * s + a * a),
            l > 1 ? (r = i,
                t = n) : l > 0 && (r += s * l,
                t += a * l)),
        Math.pow(o - r, 2) + Math.pow(e - t, 2)
}

function ka(o, e, r, t, i) {
    var n = t,
        s = o[e],
        a = o[e + 1],
        l = o[r],
        c = o[r + 1],
        f, h, d;
    for (h = e + 2; h < r; h += 2)
        d = Id(o[h], o[h + 1], s, a, l, c),
        d > n && (f = h,
            n = d);
    n > t && (f - e > 2 && ka(o, e, f, t, i),
        i.push(o[f], o[f + 1]),
        r - f > 2 && ka(o, f, r, t, i))
}

function Ag(o, e) {
    var r = parseFloat(o[0]),
        t = parseFloat(o[1]),
        i = [r, t],
        n = o.length - 2,
        s, a, l, c, f, h, d;
    for (e = Math.pow(e || 1, 2),
        s = 2; s < n; s += 2)
        a = parseFloat(o[s]),
        l = parseFloat(o[s + 1]),
        c = r - a,
        f = t - l,
        c * c + f * f > e && (i.push(a, l),
            r = a,
            t = l);
    return i.push(parseFloat(o[n]), parseFloat(o[n + 1])),
        d = i.length - 2,
        h = [i[0], i[1]],
        ka(i, 0, d, e, h),
        h.push(i[d], i[d + 1]),
        h
}

function Hc(o, e, r, t, i, n, s, a, l, c, f, h, d, u) {
    var p = (i - t) / n,
        g = 0,
        m = t,
        v, y, _, w, b, T;
    for (Kn = _o; m <= i;)
        T = 1 - m,
        v = T * T * T * s + 3 * T * T * m * l + 3 * T * m * m * f + m * m * m * d,
        y = T * T * T * a + 3 * T * T * m * c + 3 * T * m * m * h + m * m * m * u,
        w = v - e,
        b = y - r,
        _ = w * w + b * b,
        _ < Kn && (Kn = _,
            g = m),
        m += p;
    return o > 1 ? Hc(o - 1, e, r, Math.max(g - p, 0), Math.min(g + p, 1), n, s, a, l, c, f, h, d, u) : g
}

function Rg(o, e, r, t) {
    var i = {
            j: 0,
            i: 0,
            t: 0
        },
        n = _o,
        s, a, l, c;
    for (a = 0; a < o.length; a++)
        for (c = o[a],
            s = 0; s < c.length; s += 6)
            l = Hc(1, e, r, 0, 1, t || 20, c[s], c[s + 1], c[s + 2], c[s + 3], c[s + 4], c[s + 5], c[s + 6], c[s + 7]),
            n > Kn && (n = Kn,
                i.j = a,
                i.i = s,
                i.t = l);
    return i
}

function Wc(o) {
    qc(o[0]) && (o = [o]);
    var e = "",
        r = o.length,
        t, i, n, s;
    for (i = 0; i < r; i++) {
        for (s = o[i],
            e += "M" + Oe(s[0]) + "," + Oe(s[1]) + " C",
            t = s.length,
            n = 2; n < t; n++)
            e += Oe(s[n++]) + "," + Oe(s[n++]) + " " + Oe(s[n++]) + "," + Oe(s[n++]) + " " + Oe(s[n++]) + "," + Oe(s[n]) + " ";
        s.closed && (e += "z")
    }
    return e
}
/*!
 * CustomEase 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var It, jc, Uc = function() {
        return It || typeof window < "u" && (It = window.gsap) && It.registerPlugin && It
    },
    jl = function() {
        It = Uc(),
            It ? (It.registerEase("_CE", Mn.create),
                jc = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
    },
    Bd = 1e20,
    Oo = function(e) {
        return ~~(e * 1e3 + (e < 0 ? -.5 : .5)) / 1e3
    },
    $d = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    zd = /[cLlsSaAhHvVtTqQ]/g,
    qd = function(e) {
        var r = e.length,
            t = Bd,
            i;
        for (i = 1; i < r; i += 6)
            +
            e[i] < t && (t = +e[i]);
        return t
    },
    Vd = function(e, r, t) {
        !t && t !== 0 && (t = Math.max(+e[e.length - 1], +e[1]));
        var i = +e[0] * -1,
            n = -t,
            s = e.length,
            a = 1 / (+e[s - 2] + i),
            l = -r || (Math.abs(+e[s - 1] - +e[1]) < .01 * (+e[s - 2] - +e[0]) ? qd(e) + n : +e[s - 1] + n),
            c;
        for (l ? l = 1 / l : l = -a,
            c = 0; c < s; c += 2)
            e[c] = (+e[c] + i) * a,
            e[c + 1] = (+e[c + 1] + n) * l
    },
    Xd = function o(e, r, t, i, n, s, a, l, c, f, h) {
        var d = (e + t) / 2,
            u = (r + i) / 2,
            p = (t + n) / 2,
            g = (i + s) / 2,
            m = (n + a) / 2,
            v = (s + l) / 2,
            y = (d + p) / 2,
            _ = (u + g) / 2,
            w = (p + m) / 2,
            b = (g + v) / 2,
            T = (y + w) / 2,
            k = (_ + b) / 2,
            S = a - e,
            D = l - r,
            $ = Math.abs((t - a) * D - (i - l) * S),
            B = Math.abs((n - a) * D - (s - l) * S),
            P;
        return f || (f = [{
                    x: e,
                    y: r
                }, {
                    x: a,
                    y: l
                }],
                h = 1),
            f.splice(h || f.length - 1, 0, {
                x: T,
                y: k
            }),
            ($ + B) * ($ + B) > c * (S * S + D * D) && (P = f.length,
                o(e, r, d, u, y, _, T, k, c, f, h),
                o(T, k, w, b, m, v, a, l, c, f, h + 1 + (f.length - P))),
            f
    },
    Mn = function() {
        function o(r, t, i) {
            jc || jl(),
                this.id = r,
                this.setData(t, i)
        }
        var e = o.prototype;
        return e.setData = function(t, i) {
                i = i || {},
                    t = t || "0,0,1,1";
                var n = t.match($d),
                    s = 1,
                    a = [],
                    l = [],
                    c = i.precision || 1,
                    f = c <= 1,
                    h, d, u, p, g, m, v, y, _;
                if (this.data = t,
                    (zd.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (n = _s(t)[0]),
                    h = n.length,
                    h === 4)
                    n.unshift(0, 0),
                    n.push(1, 1),
                    h = 8;
                else if ((h - 2) % 6)
                    throw "Invalid CustomEase";
                for ((+n[0] != 0 || +n[h - 2] != 1) && Vd(n, i.height, i.originY),
                    this.segment = n,
                    p = 2; p < h; p += 6)
                    d = {
                        x: +n[p - 2],
                        y: +n[p - 1]
                    },
                    u = {
                        x: +n[p + 4],
                        y: +n[p + 5]
                    },
                    a.push(d, u),
                    Xd(d.x, d.y, +n[p], +n[p + 1], +n[p + 2], +n[p + 3], u.x, u.y, 1 / (c * 2e5), a, a.length - 1);
                for (h = a.length,
                    p = 0; p < h; p++)
                    v = a[p],
                    y = a[p - 1] || v,
                    (v.x > y.x || y.y !== v.y && y.x === v.x || v === y) && v.x <= 1 ? (y.cx = v.x - y.x,
                        y.cy = v.y - y.y,
                        y.n = v,
                        y.nx = v.x,
                        f && p > 1 && Math.abs(y.cy / y.cx - a[p - 2].cy / a[p - 2].cx) > 2 && (f = 0),
                        y.cx < s && (y.cx ? s = y.cx : (y.cx = .001,
                            p === h - 1 && (y.x -= .001,
                                s = Math.min(s, .001),
                                f = 0)))) : (a.splice(p--, 1),
                        h--);
                if (h = 1 / s + 1 | 0,
                    g = 1 / h,
                    m = 0,
                    v = a[0],
                    f) {
                    for (p = 0; p < h; p++)
                        _ = p * g,
                        v.nx < _ && (v = a[++m]),
                        d = v.y + (_ - v.x) / v.cx * v.cy,
                        l[p] = {
                            x: _,
                            cx: g,
                            y: d,
                            cy: 0,
                            nx: 9
                        },
                        p && (l[p - 1].cy = d - l[p - 1].y);
                    l[h - 1].cy = a[a.length - 1].y - d
                } else {
                    for (p = 0; p < h; p++)
                        v.nx < p * g && (v = a[++m]),
                        l[p] = v;
                    m < a.length - 1 && (l[p - 1] = a[a.length - 2])
                }
                return this.ease = function(w) {
                        var b = l[w * h | 0] || l[h - 1];
                        return b.nx < w && (b = b.n),
                            b.y + (w - b.x) / b.cx * b.cy
                    },
                    this.ease.custom = this,
                    this.id && It && It.registerEase(this.id, this.ease),
                    this
            },
            e.getSVGData = function(t) {
                return o.getSVGData(this, t)
            },
            o.create = function(t, i, n) {
                return new o(t, i, n).ease
            },
            o.register = function(t) {
                It = t,
                    jl()
            },
            o.get = function(t) {
                return It.parseEase(t)
            },
            o.getSVGData = function(t, i) {
                i = i || {};
                var n = i.width || 100,
                    s = i.height || 100,
                    a = i.x || 0,
                    l = (i.y || 0) + s,
                    c = It.utils.toArray(i.path)[0],
                    f, h, d, u, p, g, m, v, y, _;
                if (i.invert && (s = -s,
                        l = 0),
                    typeof t == "string" && (t = It.parseEase(t)),
                    t.custom && (t = t.custom),
                    t instanceof o)
                    f = Wc(Fd([t.segment], n, 0, 0, -s, a, l));
                else {
                    for (f = [a, l],
                        m = Math.max(5, (i.precision || 1) * 200),
                        u = 1 / m,
                        m += 2,
                        v = 5 / m,
                        y = Oo(a + u * n),
                        _ = Oo(l + t(u) * -s),
                        h = (_ - l) / (y - a),
                        d = 2; d < m; d++)
                        p = Oo(a + d * u * n),
                        g = Oo(l + t(d * u) * -s),
                        (Math.abs((g - _) / (p - y) - h) > v || d === m - 1) && (f.push(y, _),
                            h = (g - _) / (p - y)),
                        y = p,
                        _ = g;
                    f = "M" + f.join(",")
                }
                return c && c.setAttribute("d", f),
                    f
            },
            o
    }();
Uc() && It.registerPlugin(Mn);
Mn.version = "3.11.3";
/*!
 * matrix 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Xr, Li, fl, hn, Bn, Uo, ys, Qn, fr = "transform",
    Ma = fr + "Origin",
    Kc, Qc = function(e) {
        var r = e.ownerDocument || e;
        for (!(fr in e.style) && ("msTransform" in e.style) && (fr = "msTransform",
                Ma = fr + "Origin"); r.parentNode && (r = r.parentNode);)
        ;
        if (Li = window,
            ys = new $i,
            r) {
            Xr = r,
                fl = r.documentElement,
                hn = r.body,
                Qn = Xr.createElementNS("http://www.w3.org/2000/svg", "g"),
                Qn.style.transform = "none";
            var t = r.createElement("div"),
                i = r.createElement("div");
            hn.appendChild(t),
                t.appendChild(i),
                t.style.position = "static",
                t.style[fr] = "translate3d(0,0,1px)",
                Kc = i.offsetParent !== t,
                hn.removeChild(t)
        }
        return r
    },
    Yd = function(e) {
        for (var r, t; e && e !== hn;)
            t = e._gsap,
            t && t.uncache && t.get(e, "x"),
            t && !t.scaleX && !t.scaleY && t.renderTransform && (t.scaleX = t.scaleY = 1e-4,
                t.renderTransform(1, t),
                r ? r.push(t) : r = [t]),
            e = e.parentNode;
        return r
    },
    Zc = [],
    Jc = [],
    Gd = function() {
        return Li.pageYOffset || Xr.scrollTop || fl.scrollTop || hn.scrollTop || 0
    },
    Hd = function() {
        return Li.pageXOffset || Xr.scrollLeft || fl.scrollLeft || hn.scrollLeft || 0
    },
    hl = function(e) {
        return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null)
    },
    Wd = function o(e) {
        if (Li.getComputedStyle(e).position === "fixed")
            return !0;
        if (e = e.parentNode,
            e && e.nodeType === 1)
            return o(e)
    },
    Ys = function o(e, r) {
        if (e.parentNode && (Xr || Qc(e))) {
            var t = hl(e),
                i = t ? t.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                n = t ? r ? "rect" : "g" : "div",
                s = r !== 2 ? 0 : 100,
                a = r === 3 ? 100 : 0,
                l = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                c = Xr.createElementNS ? Xr.createElementNS(i.replace(/^https/, "http"), n) : Xr.createElement(n);
            return r && (t ? (Uo || (Uo = o(e)),
                    c.setAttribute("width", .01),
                    c.setAttribute("height", .01),
                    c.setAttribute("transform", "translate(" + s + "," + a + ")"),
                    Uo.appendChild(c)) : (Bn || (Bn = o(e),
                        Bn.style.cssText = l),
                    c.style.cssText = l + "width:0.1px;height:0.1px;top:" + a + "px;left:" + s + "px",
                    Bn.appendChild(c))),
                c
        }
        throw "Need document and parent."
    },
    jd = function(e) {
        for (var r = new $i, t = 0; t < e.numberOfItems; t++)
            r.multiply(e.getItem(t).matrix);
        return r
    },
    Ud = function(e) {
        var r = e.getCTM(),
            t;
        return r || (t = e.style[fr],
                e.style[fr] = "none",
                e.appendChild(Qn),
                r = Qn.getCTM(),
                e.removeChild(Qn),
                t ? e.style[fr] = t : e.style.removeProperty(fr.replace(/([A-Z])/g, "-$1").toLowerCase())),
            r || ys.clone()
    },
    Kd = function(e, r) {
        var t = hl(e),
            i = e === t,
            n = t ? Zc : Jc,
            s = e.parentNode,
            a, l, c, f, h, d;
        if (e === Li)
            return e;
        if (n.length || n.push(Ys(e, 1), Ys(e, 2), Ys(e, 3)),
            a = t ? Uo : Bn,
            t)
            i ? (c = Ud(e),
                f = -c.e / c.a,
                h = -c.f / c.d,
                l = ys) : e.getBBox ? (c = e.getBBox(),
                l = e.transform ? e.transform.baseVal : {},
                l = l.numberOfItems ? l.numberOfItems > 1 ? jd(l) : l.getItem(0).matrix : ys,
                f = l.a * c.x + l.c * c.y,
                h = l.b * c.x + l.d * c.y) : (l = new $i,
                f = h = 0),
            r && e.tagName.toLowerCase() === "g" && (f = h = 0),
            (i ? t : s).appendChild(a),
            a.setAttribute("transform", "matrix(" + l.a + "," + l.b + "," + l.c + "," + l.d + "," + (l.e + f) + "," + (l.f + h) + ")");
        else {
            if (f = h = 0,
                Kc)
                for (l = e.offsetParent,
                    c = e; c && (c = c.parentNode) && c !== l && c.parentNode;)
                    (Li.getComputedStyle(c)[fr] + "").length > 4 && (f = c.offsetLeft,
                        h = c.offsetTop,
                        c = 0);
            if (d = Li.getComputedStyle(e),
                d.position !== "absolute" && d.position !== "fixed")
                for (l = e.offsetParent; s && s !== l;)
                    f += s.scrollLeft || 0,
                    h += s.scrollTop || 0,
                    s = s.parentNode;
            c = a.style,
                c.top = e.offsetTop - h + "px",
                c.left = e.offsetLeft - f + "px",
                c[fr] = d[fr],
                c[Ma] = d[Ma],
                c.position = d.position === "fixed" ? "fixed" : "absolute",
                e.parentNode.appendChild(a)
        }
        return a
    },
    Gs = function(e, r, t, i, n, s, a) {
        return e.a = r,
            e.b = t,
            e.c = i,
            e.d = n,
            e.e = s,
            e.f = a,
            e
    },
    $i = function() {
        function o(r, t, i, n, s, a) {
            r === void 0 && (r = 1),
                t === void 0 && (t = 0),
                i === void 0 && (i = 0),
                n === void 0 && (n = 1),
                s === void 0 && (s = 0),
                a === void 0 && (a = 0),
                Gs(this, r, t, i, n, s, a)
        }
        var e = o.prototype;
        return e.inverse = function() {
                var t = this.a,
                    i = this.b,
                    n = this.c,
                    s = this.d,
                    a = this.e,
                    l = this.f,
                    c = t * s - i * n || 1e-10;
                return Gs(this, s / c, -i / c, -n / c, t / c, (n * l - s * a) / c, -(t * l - i * a) / c)
            },
            e.multiply = function(t) {
                var i = this.a,
                    n = this.b,
                    s = this.c,
                    a = this.d,
                    l = this.e,
                    c = this.f,
                    f = t.a,
                    h = t.c,
                    d = t.b,
                    u = t.d,
                    p = t.e,
                    g = t.f;
                return Gs(this, f * i + d * s, f * n + d * a, h * i + u * s, h * n + u * a, l + p * i + g * s, c + p * n + g * a)
            },
            e.clone = function() {
                return new o(this.a, this.b, this.c, this.d, this.e, this.f)
            },
            e.equals = function(t) {
                var i = this.a,
                    n = this.b,
                    s = this.c,
                    a = this.d,
                    l = this.e,
                    c = this.f;
                return i === t.a && n === t.b && s === t.c && a === t.d && l === t.e && c === t.f
            },
            e.apply = function(t, i) {
                i === void 0 && (i = {});
                var n = t.x,
                    s = t.y,
                    a = this.a,
                    l = this.b,
                    c = this.c,
                    f = this.d,
                    h = this.e,
                    d = this.f;
                return i.x = n * a + s * c + h || 0,
                    i.y = n * l + s * f + d || 0,
                    i
            },
            o
    }();

function ki(o, e, r, t) {
    if (!o || !o.parentNode || (Xr || Qc(o)).documentElement === o)
        return new $i;
    var i = Yd(o),
        n = hl(o),
        s = n ? Zc : Jc,
        a = Kd(o, r),
        l = s[0].getBoundingClientRect(),
        c = s[1].getBoundingClientRect(),
        f = s[2].getBoundingClientRect(),
        h = a.parentNode,
        d = !t && Wd(o),
        u = new $i((c.left - l.left) / 100, (c.top - l.top) / 100, (f.left - l.left) / 100, (f.top - l.top) / 100, l.left + (d ? 0 : Hd()), l.top + (d ? 0 : Gd()));
    if (h.removeChild(a),
        i)
        for (l = i.length; l--;)
            c = i[l],
            c.scaleX = c.scaleY = 0,
            c.renderTransform(1, c);
    return e ? u.inverse() : u
}

function Qd(o) {
    if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}

function Zd(o, e) {
    o.prototype = Object.create(e.prototype),
        o.prototype.constructor = o,
        o.__proto__ = e
}
var ke, ze, Kt, Tr, Yr, Hs, $r, Pa, $n, ri, ef, Ea, yo, dl, zn, _r, qn, Ko, vs = 0,
    tf = function() {
        return typeof window < "u"
    },
    rf = function() {
        return ke || tf() && (ke = window.gsap) && ke.registerPlugin && ke
    },
    Zr = function(e) {
        return typeof e == "function"
    },
    Zn = function(e) {
        return typeof e == "object"
    },
    wr = function(e) {
        return typeof e > "u"
    },
    Qo = function() {
        return !1
    },
    Jn = "transform",
    Oa = "transformOrigin",
    Ur = function(e) {
        return Math.round(e * 1e4) / 1e4
    },
    Ln = Array.isArray,
    Do = function(e, r) {
        var t = Kt.createElementNS ? Kt.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Kt.createElement(e);
        return t.style ? t : Kt.createElement(e)
    },
    Ul = 180 / Math.PI,
    _i = 1e20,
    Jd = new $i,
    Kr = Date.now || function() {
        return new Date().getTime()
    },
    Ai = [],
    dn = {},
    ep = 0,
    tp = /^(?:a|input|textarea|button|select)$/i,
    Kl = 0,
    ji = {},
    Nr = {},
    nf = function(e, r) {
        var t = {},
            i;
        for (i in e)
            t[i] = r ? e[i] * r : e[i];
        return t
    },
    rp = function(e, r) {
        for (var t in r)
            t in e || (e[t] = r[t]);
        return e
    },
    Ql = function o(e, r) {
        for (var t = e.length, i; t--;)
            r ? e[t].style.touchAction = r : e[t].style.removeProperty("touch-action"),
            i = e[t].children,
            i && i.length && o(i, r)
    },
    of = function() {
        return Ai.forEach(function(e) {
            return e()
        })
    },
    ip = function(e) {
        Ai.push(e),
            Ai.length === 1 && ke.ticker.add(of)
    },
    Zl = function() {
        return !Ai.length && ke.ticker.remove(of)
    },
    Jl = function(e) {
        for (var r = Ai.length; r--;)
            Ai[r] === e && Ai.splice(r, 1);
        ke.to(Zl, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: Zl,
            data: "_draggable"
        })
    },
    np = function(e, r) {
        for (var t in r)
            t in e || (e[t] = r[t]);
        return e
    },
    ut = function(e, r, t, i) {
        if (e.addEventListener) {
            var n = yo[r];
            i = i || (ef ? {
                    passive: !1
                } : null),
                e.addEventListener(n || r, t, i),
                n && r !== n && e.addEventListener(r, t, i)
        }
    },
    at = function(e, r, t) {
        if (e.removeEventListener) {
            var i = yo[r];
            e.removeEventListener(i || r, t),
                i && r !== i && e.removeEventListener(r, t)
        }
    },
    rr = function(e) {
        e.preventDefault && e.preventDefault(),
            e.preventManipulation && e.preventManipulation()
    },
    op = function(e, r) {
        for (var t = e.length; t--;)
            if (e[t].identifier === r)
                return !0
    },
    sp = function o(e) {
        dl = e.touches && vs < e.touches.length,
            at(e.target, "touchend", o)
    },
    eu = function(e) {
        dl = e.touches && vs < e.touches.length,
            ut(e.target, "touchend", sp)
    },
    pn = function(e) {
        return ze.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
    },
    gn = function(e) {
        return ze.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
    },
    tu = function o(e, r) {
        ut(e, "scroll", r),
            Pn(e.parentNode) || o(e.parentNode, r)
    },
    ru = function o(e, r) {
        at(e, "scroll", r),
            Pn(e.parentNode) || o(e.parentNode, r)
    },
    Pn = function(e) {
        return !e || e === Tr || e.nodeType === 9 || e === Kt.body || e === ze || !e.nodeType || !e.parentNode
    },
    iu = function(e, r) {
        var t = r === "x" ? "Width" : "Height",
            i = "scroll" + t,
            n = "client" + t;
        return Math.max(0, Pn(e) ? Math.max(Tr[i], Yr[i]) - (ze["inner" + t] || Tr[n] || Yr[n]) : e[i] - e[n])
    },
    Ws = function o(e, r) {
        var t = iu(e, "x"),
            i = iu(e, "y");
        Pn(e) ? e = Nr : o(e.parentNode, r),
            e._gsMaxScrollX = t,
            e._gsMaxScrollY = i,
            r || (e._gsScrollX = e.scrollLeft || 0,
                e._gsScrollY = e.scrollTop || 0)
    },
    js = function(e, r, t) {
        var i = e.style;
        i && (wr(i[r]) && (r = $n(r, e) || r),
            t == null ? i.removeProperty && i.removeProperty(r.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[r] = t)
    },
    vo = function(e) {
        return ze.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e)
    },
    yi = {},
    Ui = function(e) {
        if (e === ze)
            return yi.left = yi.top = 0,
                yi.width = yi.right = Tr.clientWidth || e.innerWidth || Yr.clientWidth || 0,
                yi.height = yi.bottom = (e.innerHeight || 0) - 20 < Tr.clientHeight ? Tr.clientHeight : e.innerHeight || Yr.clientHeight || 0,
                yi;
        var r = e.ownerDocument || Kt,
            t = wr(e.pageX) ? !e.nodeType && !wr(e.left) && !wr(e.top) ? e : ri(e)[0].getBoundingClientRect() : {
                left: e.pageX - gn(r),
                top: e.pageY - pn(r),
                right: e.pageX - gn(r) + 1,
                bottom: e.pageY - pn(r) + 1
            };
        return wr(t.right) && !wr(t.width) ? (t.right = t.left + t.width,
                t.bottom = t.top + t.height) : wr(t.width) && (t = {
                width: t.right - t.left,
                height: t.bottom - t.top,
                right: t.right,
                left: t.left,
                bottom: t.bottom,
                top: t.top
            }),
            t
    },
    it = function(e, r, t) {
        var i = e.vars,
            n = i[t],
            s = e._listeners[r],
            a;
        return Zr(n) && (a = n.apply(i.callbackScope || e, i[t + "Params"] || [e.pointerEvent])),
            s && e.dispatchEvent(r) === !1 && (a = !1),
            a
    },
    nu = function(e, r) {
        var t = ri(e)[0],
            i, n, s;
        return !t.nodeType && t !== ze ? wr(e.left) ? (n = e.min || e.minX || e.minRotation || 0,
            i = e.min || e.minY || 0, {
                left: n,
                top: i,
                width: (e.max || e.maxX || e.maxRotation || 0) - n,
                height: (e.max || e.maxY || 0) - i
            }) : (s = {
            x: 0,
            y: 0
        }, {
            left: e.left - s.x,
            top: e.top - s.y,
            width: e.width,
            height: e.height
        }) : ap(t, r)
    },
    ir = {},
    ap = function(e, r) {
        r = ri(r)[0];
        var t = e.getBBox && e.ownerSVGElement,
            i = e.ownerDocument || Kt,
            n, s, a, l, c, f, h, d, u, p, g, m, v;
        if (e === ze)
            a = pn(i),
            n = gn(i),
            s = n + (i.documentElement.clientWidth || e.innerWidth || i.body.clientWidth || 0),
            l = a + ((e.innerHeight || 0) - 20 < i.documentElement.clientHeight ? i.documentElement.clientHeight : e.innerHeight || i.body.clientHeight || 0);
        else {
            if (r === ze || wr(r))
                return e.getBoundingClientRect();
            n = a = 0,
                t ? (p = e.getBBox(),
                    g = p.width,
                    m = p.height) : (e.viewBox && (p = e.viewBox.baseVal) && (n = p.x || 0,
                        a = p.y || 0,
                        g = p.width,
                        m = p.height),
                    g || (v = vo(e),
                        p = v.boxSizing === "border-box",
                        g = (parseFloat(v.width) || e.clientWidth || 0) + (p ? 0 : parseFloat(v.borderLeftWidth) + parseFloat(v.borderRightWidth)),
                        m = (parseFloat(v.height) || e.clientHeight || 0) + (p ? 0 : parseFloat(v.borderTopWidth) + parseFloat(v.borderBottomWidth)))),
                s = g,
                l = m
        }
        return e === r ? {
            left: n,
            top: a,
            width: s - n,
            height: l - a
        } : (c = ki(r, !0).multiply(ki(e)),
            f = c.apply({
                x: n,
                y: a
            }),
            h = c.apply({
                x: s,
                y: a
            }),
            d = c.apply({
                x: s,
                y: l
            }),
            u = c.apply({
                x: n,
                y: l
            }),
            n = Math.min(f.x, h.x, d.x, u.x),
            a = Math.min(f.y, h.y, d.y, u.y), {
                left: n,
                top: a,
                width: Math.max(f.x, h.x, d.x, u.x) - n,
                height: Math.max(f.y, h.y, d.y, u.y) - a
            })
    },
    Us = function(e, r, t, i, n, s) {
        var a = {},
            l, c, f;
        if (r)
            if (n !== 1 && r instanceof Array) {
                if (a.end = l = [],
                    f = r.length,
                    Zn(r[0]))
                    for (c = 0; c < f; c++)
                        l[c] = nf(r[c], n);
                else
                    for (c = 0; c < f; c++)
                        l[c] = r[c] * n;
                t += 1.1,
                    i -= 1.1
            } else
                Zr(r) ? a.end = function(h) {
                    var d = r.call(e, h),
                        u, p;
                    if (n !== 1)
                        if (Zn(d)) {
                            u = {};
                            for (p in d)
                                u[p] = d[p] * n;
                            d = u
                        } else
                            d *= n;
                    return d
                } :
                a.end = r;
        return (t || t === 0) && (a.max = t),
            (i || i === 0) && (a.min = i),
            s && (a.velocity = 0),
            a
    },
    lp = function o(e) {
        var r;
        return !e || !e.getAttribute || e === Yr ? !1 : (r = e.getAttribute("data-clickable")) === "true" || r !== "false" && (e.onclick || tp.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true") ? !0 : o(e.parentNode)
    },
    Co = function(e, r) {
        for (var t = e.length, i; t--;)
            i = e[t],
            i.ondragstart = i.onselectstart = r ? null : Qo,
            ke.set(i, {
                lazy: !0,
                userSelect: r ? "text" : "none"
            })
    },
    up = function o(e) {
        if (vo(e).position === "fixed")
            return !0;
        if (e = e.parentNode,
            e && e.nodeType === 1)
            return o(e)
    },
    sf, Da, cp = function(e, r) {
        e = ke.utils.toArray(e)[0],
            r = r || {};
        var t = document.createElement("div"),
            i = t.style,
            n = e.firstChild,
            s = 0,
            a = 0,
            l = e.scrollTop,
            c = e.scrollLeft,
            f = e.scrollWidth,
            h = e.scrollHeight,
            d = 0,
            u = 0,
            p = 0,
            g, m, v, y, _, w;
        sf && r.force3D !== !1 ? (_ = "translate3d(",
                w = "px,0px)") : Jn && (_ = "translate(",
                w = "px)"),
            this.scrollTop = function(b, T) {
                if (!arguments.length)
                    return -this.top();
                this.top(-b, T)
            },
            this.scrollLeft = function(b, T) {
                if (!arguments.length)
                    return -this.left();
                this.left(-b, T)
            },
            this.left = function(b, T) {
                if (!arguments.length)
                    return -(e.scrollLeft + a);
                var k = e.scrollLeft - c,
                    S = a;
                if ((k > 2 || k < -2) && !T) {
                    c = e.scrollLeft,
                        ke.killTweensOf(this, {
                            left: 1,
                            scrollLeft: 1
                        }),
                        this.left(-c),
                        r.onKill && r.onKill();
                    return
                }
                b = -b,
                    b < 0 ? (a = b - .5 | 0,
                        b = 0) : b > u ? (a = b - u | 0,
                        b = u) : a = 0,
                    (a || S) && (this._skip || (i[Jn] = _ + -a + "px," + -s + w),
                        a + d >= 0 && (i.paddingRight = a + d + "px")),
                    e.scrollLeft = b | 0,
                    c = e.scrollLeft
            },
            this.top = function(b, T) {
                if (!arguments.length)
                    return -(e.scrollTop + s);
                var k = e.scrollTop - l,
                    S = s;
                if ((k > 2 || k < -2) && !T) {
                    l = e.scrollTop,
                        ke.killTweensOf(this, {
                            top: 1,
                            scrollTop: 1
                        }),
                        this.top(-l),
                        r.onKill && r.onKill();
                    return
                }
                b = -b,
                    b < 0 ? (s = b - .5 | 0,
                        b = 0) : b > p ? (s = b - p | 0,
                        b = p) : s = 0,
                    (s || S) && (this._skip || (i[Jn] = _ + -a + "px," + -s + w)),
                    e.scrollTop = b | 0,
                    l = e.scrollTop
            },
            this.maxScrollTop = function() {
                return p
            },
            this.maxScrollLeft = function() {
                return u
            },
            this.disable = function() {
                for (n = t.firstChild; n;)
                    y = n.nextSibling,
                    e.appendChild(n),
                    n = y;
                e === t.parentNode && e.removeChild(t)
            },
            this.enable = function() {
                if (n = e.firstChild,
                    n !== t) {
                    for (; n;)
                        y = n.nextSibling,
                        t.appendChild(n),
                        n = y;
                    e.appendChild(t),
                        this.calibrate()
                }
            },
            this.calibrate = function(b) {
                var T = e.clientWidth === g,
                    k, S, D;
                l = e.scrollTop,
                    c = e.scrollLeft, !(T && e.clientHeight === m && t.offsetHeight === v && f === e.scrollWidth && h === e.scrollHeight && !b) && ((s || a) && (S = this.left(),
                            D = this.top(),
                            this.left(-e.scrollLeft),
                            this.top(-e.scrollTop)),
                        k = vo(e),
                        (!T || b) && (i.display = "block",
                            i.width = "auto",
                            i.paddingRight = "0px",
                            d = Math.max(0, e.scrollWidth - e.clientWidth),
                            d && (d += parseFloat(k.paddingLeft) + (Da ? parseFloat(k.paddingRight) : 0))),
                        i.display = "inline-block",
                        i.position = "relative",
                        i.overflow = "visible",
                        i.verticalAlign = "top",
                        i.boxSizing = "content-box",
                        i.width = "100%",
                        i.paddingRight = d + "px",
                        Da && (i.paddingBottom = k.paddingBottom),
                        g = e.clientWidth,
                        m = e.clientHeight,
                        f = e.scrollWidth,
                        h = e.scrollHeight,
                        u = e.scrollWidth - g,
                        p = e.scrollHeight - m,
                        v = t.offsetHeight,
                        i.display = "block",
                        (S || D) && (this.left(S),
                            this.top(D)))
            },
            this.content = t,
            this.element = e,
            this._skip = !1,
            this.enable()
    },
    Ks = function(e) {
        if (tf() && document.body) {
            var r = window && window.navigator;
            ze = window,
                Kt = document,
                Tr = Kt.documentElement,
                Yr = Kt.body,
                Hs = Do("div"),
                Ko = !!window.PointerEvent,
                $r = Do("div"),
                $r.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",
                qn = $r.style.cursor === "grab" ? "grab" : "move",
                zn = r && r.userAgent.toLowerCase().indexOf("android") !== -1,
                Ea = "ontouchstart" in Tr && "orientation" in ze || r && (r.MaxTouchPoints > 0 || r.msMaxTouchPoints > 0),
                Da = function() {
                    var t = Do("div"),
                        i = Do("div"),
                        n = i.style,
                        s = Yr,
                        a;
                    return n.display = "inline-block",
                        n.position = "relative",
                        t.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",
                        t.appendChild(i),
                        s.appendChild(t),
                        a = i.offsetHeight + 18 > t.scrollHeight,
                        s.removeChild(t),
                        a
                }(),
                yo = function(t) {
                    for (var i = t.split(","), n = ("onpointerdown" in Hs ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in Hs ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : t).split(","), s = {}, a = 4; --a > -1;)
                        s[i[a]] = n[a],
                        s[n[a]] = i[a];
                    try {
                        Tr.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function() {
                                ef = 1
                            }
                        }))
                    } catch {}
                    return s
                }("touchstart,touchmove,touchend,touchcancel"),
                ut(Kt, "touchcancel", Qo),
                ut(ze, "touchmove", Qo),
                Yr && Yr.addEventListener("touchstart", Qo),
                ut(Kt, "contextmenu", function() {
                    for (var t in dn)
                        dn[t].isPressed && dn[t].endDrag()
                }),
                ke = Pa = rf()
        }
        ke ? (_r = ke.plugins.inertia,
            $n = ke.utils.checkPrefix,
            Jn = $n(Jn),
            Oa = $n(Oa),
            ri = ke.utils.toArray,
            sf = !!$n("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
    },
    fp = function() {
        function o(r) {
            this._listeners = {},
                this.target = r || this
        }
        var e = o.prototype;
        return e.addEventListener = function(t, i) {
                var n = this._listeners[t] || (this._listeners[t] = []);
                ~n.indexOf(i) || n.push(i)
            },
            e.removeEventListener = function(t, i) {
                var n = this._listeners[t],
                    s = n && n.indexOf(i);
                s >= 0 && n.splice(s, 1)
            },
            e.dispatchEvent = function(t) {
                var i = this,
                    n;
                return (this._listeners[t] || []).forEach(function(s) {
                        return s.call(i, {
                            type: t,
                            target: i.target
                        }) === !1 && (n = !1)
                    }),
                    n
            },
            o
    }(),
    zi = function(o) {
        Zd(e, o);

        function e(r, t) {
            var i;
            i = o.call(this) || this,
                Pa || Ks(1),
                r = ri(r)[0],
                _r || (_r = ke.plugins.inertia),
                i.vars = t = nf(t || {}),
                i.target = r,
                i.x = i.y = i.rotation = 0,
                i.dragResistance = parseFloat(t.dragResistance) || 0,
                i.edgeResistance = isNaN(t.edgeResistance) ? 1 : parseFloat(t.edgeResistance) || 0,
                i.lockAxis = t.lockAxis,
                i.autoScroll = t.autoScroll || 0,
                i.lockedAxis = null,
                i.allowEventDefault = !!t.allowEventDefault,
                ke.getProperty(r, "x");
            var n = (t.type || "x,y").toLowerCase(),
                s = ~n.indexOf("x") || ~n.indexOf("y"),
                a = n.indexOf("rotation") !== -1,
                l = a ? "rotation" : s ? "x" : "left",
                c = s ? "y" : "top",
                f = !!(~n.indexOf("x") || ~n.indexOf("left") || n === "scroll"),
                h = !!(~n.indexOf("y") || ~n.indexOf("top") || n === "scroll"),
                d = t.minimumMovement || 2,
                u = Qd(i),
                p = ri(t.trigger || t.handle || r),
                g = {},
                m = 0,
                v = !1,
                y = t.autoScrollMarginTop || 40,
                _ = t.autoScrollMarginRight || 40,
                w = t.autoScrollMarginBottom || 40,
                b = t.autoScrollMarginLeft || 40,
                T = t.clickableTest || lp,
                k = 0,
                S = r._gsap || ke.core.getCache(r),
                D = up(r),
                $ = function(M, I) {
                    return parseFloat(S.get(r, M, I))
                },
                B = r.ownerDocument || Kt,
                P, E, F, q, R, X, G, ne, O, W, ee, re, le, Ce, fe, Le, ge, Yt, de, He, ue, qe, V, A, U, C, Z, ie, Ne, he, oe, De, Ie, st = function(M) {
                    return rr(M),
                        M.stopImmediatePropagation && M.stopImmediatePropagation(), !1
                },
                ce = function j(M) {
                    if (u.autoScroll && u.isDragging && (v || ge)) {
                        var I = r,
                            x = u.autoScroll * 15,
                            L, N, z, K, Y, se, Q, pe;
                        for (v = !1,
                            Nr.scrollTop = ze.pageYOffset != null ? ze.pageYOffset : B.documentElement.scrollTop != null ? B.documentElement.scrollTop : B.body.scrollTop,
                            Nr.scrollLeft = ze.pageXOffset != null ? ze.pageXOffset : B.documentElement.scrollLeft != null ? B.documentElement.scrollLeft : B.body.scrollLeft,
                            K = u.pointerX - Nr.scrollLeft,
                            Y = u.pointerY - Nr.scrollTop; I && !N;)
                            N = Pn(I.parentNode),
                            L = N ? Nr : I.parentNode,
                            z = N ? {
                                bottom: Math.max(Tr.clientHeight, ze.innerHeight || 0),
                                right: Math.max(Tr.clientWidth, ze.innerWidth || 0),
                                left: 0,
                                top: 0
                            } : L.getBoundingClientRect(),
                            se = Q = 0,
                            h && (pe = L._gsMaxScrollY - L.scrollTop,
                                pe < 0 ? Q = pe : Y > z.bottom - w && pe ? (v = !0,
                                    Q = Math.min(pe, x * (1 - Math.max(0, z.bottom - Y) / w) | 0)) : Y < z.top + y && L.scrollTop && (v = !0,
                                    Q = -Math.min(L.scrollTop, x * (1 - Math.max(0, Y - z.top) / y) | 0)),
                                Q && (L.scrollTop += Q)),
                            f && (pe = L._gsMaxScrollX - L.scrollLeft,
                                pe < 0 ? se = pe : K > z.right - _ && pe ? (v = !0,
                                    se = Math.min(pe, x * (1 - Math.max(0, z.right - K) / _) | 0)) : K < z.left + b && L.scrollLeft && (v = !0,
                                    se = -Math.min(L.scrollLeft, x * (1 - Math.max(0, K - z.left) / b) | 0)),
                                se && (L.scrollLeft += se)),
                            N && (se || Q) && (ze.scrollTo(L.scrollLeft, L.scrollTop),
                                Be(u.pointerX + se, u.pointerY + Q)),
                            I = L
                    }
                    if (ge) {
                        var ae = u.x,
                            be = u.y;
                        a ? (u.deltaX = ae - parseFloat(S.rotation),
                                u.rotation = ae,
                                S.rotation = ae + "deg",
                                S.renderTransform(1, S)) : E ? (h && (u.deltaY = be - E.top(),
                                    E.top(be)),
                                f && (u.deltaX = ae - E.left(),
                                    E.left(ae))) : s ? (h && (u.deltaY = be - parseFloat(S.y),
                                    S.y = be + "px"),
                                f && (u.deltaX = ae - parseFloat(S.x),
                                    S.x = ae + "px"),
                                S.renderTransform(1, S)) : (h && (u.deltaY = be - parseFloat(r.style.top || 0),
                                    r.style.top = be + "px"),
                                f && (u.deltaX = ae - parseFloat(r.style.left || 0),
                                    r.style.left = ae + "px")),
                            ne && !M && !ie && (ie = !0,
                                it(u, "drag", "onDrag") === !1 && (f && (u.x -= u.deltaX),
                                    h && (u.y -= u.deltaY),
                                    j(!0)),
                                ie = !1)
                    }
                    ge = !1
                },
                Ve = function(M, I) {
                    var x = u.x,
                        L = u.y,
                        N, z;
                    r._gsap || (S = ke.core.getCache(r)),
                        S.uncache && ke.getProperty(r, "x"),
                        s ? (u.x = parseFloat(S.x),
                            u.y = parseFloat(S.y)) : a ? u.x = u.rotation = parseFloat(S.rotation) : E ? (u.y = E.top(),
                            u.x = E.left()) : (u.y = parseFloat(r.style.top || (z = vo(r)) && z.top) || 0,
                            u.x = parseFloat(r.style.left || (z || {}).left) || 0),
                        (de || He || ue) && !I && (u.isDragging || u.isThrowing) && (ue && (ji.x = u.x,
                                ji.y = u.y,
                                N = ue(ji),
                                N.x !== u.x && (u.x = N.x,
                                    ge = !0),
                                N.y !== u.y && (u.y = N.y,
                                    ge = !0)),
                            de && (N = de(u.x),
                                N !== u.x && (u.x = N,
                                    a && (u.rotation = N),
                                    ge = !0)),
                            He && (N = He(u.y),
                                N !== u.y && (u.y = N),
                                ge = !0)),
                        ge && ce(!0),
                        M || (u.deltaX = u.x - x,
                            u.deltaY = u.y - L,
                            it(u, "throwupdate", "onThrowUpdate"))
                },
                Ye = function(M, I, x, L) {
                    return I == null && (I = -_i),
                        x == null && (x = _i),
                        Zr(M) ? function(N) {
                            var z = u.isPressed ? 1 - u.edgeResistance : 1;
                            return M.call(u, (N > x ? x + (N - x) * z : N < I ? I + (N - I) * z : N) * L) * L
                        } :
                        Ln(M) ? function(N) {
                            for (var z = M.length, K = 0, Y = _i, se, Q; --z > -1;)
                                se = M[z],
                                Q = se - N,
                                Q < 0 && (Q = -Q),
                                Q < Y && se >= I && se <= x && (K = z,
                                    Y = Q);
                            return M[K]
                        } :
                        isNaN(M) ? function(N) {
                            return N
                        } :
                        function() {
                            return M * L
                        }
                },
                Sr = function(M, I, x, L, N, z, K) {
                    return z = z && z < _i ? z * z : _i,
                        Zr(M) ? function(Y) {
                            var se = u.isPressed ? 1 - u.edgeResistance : 1,
                                Q = Y.x,
                                pe = Y.y,
                                ae, be, rt;
                            return Y.x = Q = Q > x ? x + (Q - x) * se : Q < I ? I + (Q - I) * se : Q,
                                Y.y = pe = pe > N ? N + (pe - N) * se : pe < L ? L + (pe - L) * se : pe,
                                ae = M.call(u, Y),
                                ae !== Y && (Y.x = ae.x,
                                    Y.y = ae.y),
                                K !== 1 && (Y.x *= K,
                                    Y.y *= K),
                                z < _i && (be = Y.x - Q,
                                    rt = Y.y - pe,
                                    be * be + rt * rt > z && (Y.x = Q,
                                        Y.y = pe)),
                                Y
                        } :
                        Ln(M) ? function(Y) {
                            for (var se = M.length, Q = 0, pe = _i, ae, be, rt, we; --se > -1;)
                                rt = M[se],
                                ae = rt.x - Y.x,
                                be = rt.y - Y.y,
                                we = ae * ae + be * be,
                                we < pe && (Q = se,
                                    pe = we);
                            return pe <= z ? M[Q] : Y
                        } :
                        function(Y) {
                            return Y
                        }
                },
                We = function() {
                    var M, I, x, L;
                    G = !1,
                        E ? (E.calibrate(),
                            u.minX = ee = -E.maxScrollLeft(),
                            u.minY = le = -E.maxScrollTop(),
                            u.maxX = W = u.maxY = re = 0,
                            G = !0) : t.bounds && (M = nu(t.bounds, r.parentNode),
                            a ? (u.minX = ee = M.left,
                                u.maxX = W = M.left + M.width,
                                u.minY = le = u.maxY = re = 0) : !wr(t.bounds.maxX) || !wr(t.bounds.maxY) ? (M = t.bounds,
                                u.minX = ee = M.minX,
                                u.minY = le = M.minY,
                                u.maxX = W = M.maxX,
                                u.maxY = re = M.maxY) : (I = nu(r, r.parentNode),
                                u.minX = ee = Math.round($(l, "px") + M.left - I.left),
                                u.minY = le = Math.round($(c, "px") + M.top - I.top),
                                u.maxX = W = Math.round(ee + (M.width - I.width)),
                                u.maxY = re = Math.round(le + (M.height - I.height))),
                            ee > W && (u.minX = W,
                                u.maxX = W = ee,
                                ee = u.minX),
                            le > re && (u.minY = re,
                                u.maxY = re = le,
                                le = u.minY),
                            a && (u.minRotation = ee,
                                u.maxRotation = W),
                            G = !0),
                        t.liveSnap && (x = t.liveSnap === !0 ? t.snap || {} : t.liveSnap,
                            L = Ln(x) || Zr(x),
                            a ? (de = Ye(L ? x : x.rotation, ee, W, 1),
                                He = null) : x.points ? ue = Sr(L ? x : x.points, ee, W, le, re, x.radius, E ? -1 : 1) : (f && (de = Ye(L ? x : x.x || x.left || x.scrollLeft, ee, W, E ? -1 : 1)),
                                h && (He = Ye(L ? x : x.y || x.top || x.scrollTop, le, re, E ? -1 : 1))))
                },
                mt = function() {
                    u.isThrowing = !1,
                        it(u, "throwcomplete", "onThrowComplete")
                },
                pr = function() {
                    u.isThrowing = !1
                },
                dt = function(M, I) {
                    var x, L, N, z;
                    M && _r ? (M === !0 && (x = t.snap || t.liveSnap || {},
                            L = Ln(x) || Zr(x),
                            M = {
                                resistance: (t.throwResistance || t.resistance || 1e3) / (a ? 10 : 1)
                            },
                            a ? M.rotation = Us(u, L ? x : x.rotation, W, ee, 1, I) : (f && (M[l] = Us(u, L ? x : x.points || x.x || x.left, W, ee, E ? -1 : 1, I || u.lockedAxis === "x")),
                                h && (M[c] = Us(u, L ? x : x.points || x.y || x.top, re, le, E ? -1 : 1, I || u.lockedAxis === "y")),
                                (x.points || Ln(x) && Zn(x[0])) && (M.linkedProps = l + "," + c,
                                    M.radius = x.radius))),
                        u.isThrowing = !0,
                        z = isNaN(t.overshootTolerance) ? t.edgeResistance === 1 ? 0 : 1 - u.edgeResistance + .2 : t.overshootTolerance,
                        M.duration || (M.duration = {
                            max: Math.max(t.minDuration || 0, "maxDuration" in t ? t.maxDuration : 2),
                            min: isNaN(t.minDuration) ? z === 0 || Zn(M) && M.resistance > 1e3 ? 0 : .5 : t.minDuration,
                            overshoot: z
                        }),
                        u.tween = N = ke.to(E || r, {
                            inertia: M,
                            data: "_draggable",
                            onComplete: mt,
                            onInterrupt: pr,
                            onUpdate: t.fastMode ? it : Ve,
                            onUpdateParams: t.fastMode ? [u, "onthrowupdate", "onThrowUpdate"] : x && x.radius ? [!1, !0] : []
                        }),
                        t.fastMode || (E && (E._skip = !0),
                            N.render(1e9, !0, !0),
                            Ve(!0, !0),
                            u.endX = u.x,
                            u.endY = u.y,
                            a && (u.endRotation = u.x),
                            N.play(0),
                            Ve(!0, !0),
                            E && (E._skip = !1))) : G && u.applyBounds()
                },
                Gt = function(M) {
                    var I = A,
                        x;
                    A = ki(r.parentNode, !0),
                        M && u.isPressed && !A.equals(I || new $i) && (x = I.inverse().apply({
                                x: F,
                                y: q
                            }),
                            A.apply(x, x),
                            F = x.x,
                            q = x.y),
                        A.equals(Jd) && (A = null)
                },
                bt = function() {
                    var M = 1 - u.edgeResistance,
                        I = D ? gn(B) : 0,
                        x = D ? pn(B) : 0,
                        L, N, z;
                    s && (S.x = $(l, "px") + "px",
                            S.y = $(c, "px") + "px",
                            S.renderTransform()),
                        Gt(!1),
                        ir.x = u.pointerX - I,
                        ir.y = u.pointerY - x,
                        A && A.apply(ir, ir),
                        F = ir.x,
                        q = ir.y,
                        ge && (Be(u.pointerX, u.pointerY),
                            ce(!0)),
                        De = ki(r),
                        E ? (We(),
                            X = E.top(),
                            R = E.left()) : (te() ? (Ve(!0, !0),
                                We()) : u.applyBounds(),
                            a ? (L = r.ownerSVGElement ? [S.xOrigin - r.getBBox().x, S.yOrigin - r.getBBox().y] : (vo(r)[Oa] || "0 0").split(" "),
                                Le = u.rotationOrigin = ki(r).apply({
                                    x: parseFloat(L[0]) || 0,
                                    y: parseFloat(L[1]) || 0
                                }),
                                Ve(!0, !0),
                                N = u.pointerX - Le.x - I,
                                z = Le.y - u.pointerY + x,
                                R = u.x,
                                X = u.y = Math.atan2(z, N) * Ul) : (X = $(c, "px"),
                                R = $(l, "px"))),
                        G && M && (R > W ? R = W + (R - W) / M : R < ee && (R = ee - (ee - R) / M),
                            a || (X > re ? X = re + (X - re) / M : X < le && (X = le - (le - X) / M))),
                        u.startX = R = Ur(R),
                        u.startY = X = Ur(X)
                },
                te = function() {
                    return u.tween && u.tween.isActive()
                },
                je = function() {
                    $r.parentNode && !te() && !u.isDragging && $r.parentNode.removeChild($r)
                },
                Xe = function(M, I) {
                    var x;
                    if (!P || u.isPressed || !M || (M.type === "mousedown" || M.type === "pointerdown") && !I && Kr() - k < 30 && yo[u.pointerEvent.type]) {
                        oe && M && P && rr(M);
                        return
                    }
                    if (U = te(),
                        Ie = !1,
                        u.pointerEvent = M,
                        yo[M.type] ? (V = ~M.type.indexOf("touch") ? M.currentTarget || M.target : B,
                            ut(V, "touchend", Ae),
                            ut(V, "touchmove", Ge),
                            ut(V, "touchcancel", Ae),
                            ut(B, "touchstart", eu)) : (V = null,
                            ut(B, "mousemove", Ge)),
                        Z = null,
                        (!Ko || !V) && (ut(B, "mouseup", Ae),
                            M && M.target && ut(M.target, "mouseup", Ae)),
                        qe = T.call(u, M.target) && t.dragClickables === !1 && !I,
                        qe) {
                        ut(M.target, "change", Ae),
                            it(u, "pressInit", "onPressInit"),
                            it(u, "press", "onPress"),
                            Co(p, !0),
                            oe = !1;
                        return
                    }
                    if (C = !V || f === h || u.vars.allowNativeTouchScrolling === !1 || u.vars.allowContextMenu && M && (M.ctrlKey || M.which > 2) ? !1 : f ? "y" : "x",
                        oe = !C && !u.allowEventDefault,
                        oe && (rr(M),
                            ut(ze, "touchforcechange", rr)),
                        M.changedTouches ? (M = Ce = M.changedTouches[0],
                            fe = M.identifier) : M.pointerId ? fe = M.pointerId : Ce = fe = null,
                        vs++,
                        ip(ce),
                        q = u.pointerY = M.pageY,
                        F = u.pointerX = M.pageX,
                        it(u, "pressInit", "onPressInit"),
                        (C || u.autoScroll) && Ws(r.parentNode),
                        r.parentNode && u.autoScroll && !E && !a && r.parentNode._gsMaxScrollX && !$r.parentNode && !r.getBBox && ($r.style.width = r.parentNode.scrollWidth + "px",
                            r.parentNode.appendChild($r)),
                        bt(),
                        u.tween && u.tween.kill(),
                        u.isThrowing = !1,
                        ke.killTweensOf(E || r, g, !0),
                        E && ke.killTweensOf(r, {
                            scrollTo: 1
                        }, !0),
                        u.tween = u.lockedAxis = null,
                        (t.zIndexBoost || !a && !E && t.zIndexBoost !== !1) && (r.style.zIndex = e.zIndex++),
                        u.isPressed = !0,
                        ne = !!(t.onDrag || u._listeners.drag),
                        O = !!(t.onMove || u._listeners.move),
                        t.cursor !== !1 || t.activeCursor)
                        for (x = p.length; --x > -1;)
                            ke.set(p[x], {
                                cursor: t.activeCursor || t.cursor || (qn === "grab" ? "grabbing" : qn)
                            });
                    it(u, "press", "onPress")
                },
                Ge = function(M) {
                    var I = M,
                        x, L, N, z, K, Y;
                    if (!P || dl || !u.isPressed || !M) {
                        oe && M && P && rr(M);
                        return
                    }
                    if (u.pointerEvent = M,
                        x = M.changedTouches,
                        x) {
                        if (M = x[0],
                            M !== Ce && M.identifier !== fe) {
                            for (z = x.length; --z > -1 && (M = x[z]).identifier !== fe && M.target !== r;)
                            ;
                            if (z < 0)
                                return
                        }
                    } else if (M.pointerId && fe && M.pointerId !== fe)
                        return;
                    if (V && C && !Z && (ir.x = M.pageX - (D ? gn(B) : 0),
                            ir.y = M.pageY - (D ? pn(B) : 0),
                            A && A.apply(ir, ir),
                            L = ir.x,
                            N = ir.y,
                            K = Math.abs(L - F),
                            Y = Math.abs(N - q),
                            (K !== Y && (K > d || Y > d) || zn && C === Z) && (Z = K > Y && f ? "x" : "y",
                                C && Z !== C && ut(ze, "touchforcechange", rr),
                                u.vars.lockAxisOnTouchScroll !== !1 && f && h && (u.lockedAxis = Z === "x" ? "y" : "x",
                                    Zr(u.vars.onLockAxis) && u.vars.onLockAxis.call(u, I)),
                                zn && C === Z))) {
                        Ae(I);
                        return
                    }!u.allowEventDefault && (!C || Z && C !== Z) && I.cancelable !== !1 ? (rr(I),
                            oe = !0) : oe && (oe = !1),
                        u.autoScroll && (v = !0),
                        Be(M.pageX, M.pageY, O)
                },
                Be = function(M, I, x) {
                    var L = 1 - u.dragResistance,
                        N = 1 - u.edgeResistance,
                        z = u.pointerX,
                        K = u.pointerY,
                        Y = X,
                        se = u.x,
                        Q = u.y,
                        pe = u.endX,
                        ae = u.endY,
                        be = u.endRotation,
                        rt = ge,
                        we, Me, me, Re, mr, Pe;
                    u.pointerX = M,
                        u.pointerY = I,
                        D && (M -= gn(B),
                            I -= pn(B)),
                        a ? (Re = Math.atan2(Le.y - I, M - Le.x) * Ul,
                            mr = u.y - Re,
                            mr > 180 ? (X -= 360,
                                u.y = Re) : mr < -180 && (X += 360,
                                u.y = Re),
                            u.x !== R || Math.abs(X - Re) > d ? (u.y = Re,
                                me = R + (X - Re) * L) : me = R) : (A && (Pe = M * A.a + I * A.c + A.e,
                                I = M * A.b + I * A.d + A.f,
                                M = Pe),
                            Me = I - q,
                            we = M - F,
                            Me < d && Me > -d && (Me = 0),
                            we < d && we > -d && (we = 0),
                            (u.lockAxis || u.lockedAxis) && (we || Me) && (Pe = u.lockedAxis,
                                Pe || (u.lockedAxis = Pe = f && Math.abs(we) > Math.abs(Me) ? "y" : h ? "x" : null,
                                    Pe && Zr(u.vars.onLockAxis) && u.vars.onLockAxis.call(u, u.pointerEvent)),
                                Pe === "y" ? Me = 0 : Pe === "x" && (we = 0)),
                            me = Ur(R + we * L),
                            Re = Ur(X + Me * L)),
                        (de || He || ue) && (u.x !== me || u.y !== Re && !a) && (ue && (ji.x = me,
                                ji.y = Re,
                                Pe = ue(ji),
                                me = Ur(Pe.x),
                                Re = Ur(Pe.y)),
                            de && (me = Ur(de(me))),
                            He && (Re = Ur(He(Re)))),
                        G && (me > W ? me = W + Math.round((me - W) * N) : me < ee && (me = ee + Math.round((me - ee) * N)),
                            a || (Re > re ? Re = Math.round(re + (Re - re) * N) : Re < le && (Re = Math.round(le + (Re - le) * N)))),
                        (u.x !== me || u.y !== Re && !a) && (a ? (u.endRotation = u.x = u.endX = me,
                            ge = !0) : (h && (u.y = u.endY = Re,
                                ge = !0),
                            f && (u.x = u.endX = me,
                                ge = !0)), !x || it(u, "move", "onMove") !== !1 ? !u.isDragging && u.isPressed && (u.isDragging = Ie = !0,
                            it(u, "dragstart", "onDragStart")) : (u.pointerX = z,
                            u.pointerY = K,
                            X = Y,
                            u.x = se,
                            u.y = Q,
                            u.endX = pe,
                            u.endY = ae,
                            u.endRotation = be,
                            ge = rt))
                },
                Ae = function j(M, I) {
                    if (!P || !u.isPressed || M && fe != null && !I && (M.pointerId && M.pointerId !== fe && M.target !== r || M.changedTouches && !op(M.changedTouches, fe))) {
                        oe && M && P && rr(M);
                        return
                    }
                    u.isPressed = !1;
                    var x = M,
                        L = u.isDragging,
                        N = u.vars.allowContextMenu && M && (M.ctrlKey || M.which > 2),
                        z = ke.delayedCall(.001, je),
                        K, Y, se, Q, pe;
                    if (V ? (at(V, "touchend", j),
                            at(V, "touchmove", Ge),
                            at(V, "touchcancel", j),
                            at(B, "touchstart", eu)) : at(B, "mousemove", Ge),
                        at(ze, "touchforcechange", rr),
                        (!Ko || !V) && (at(B, "mouseup", j),
                            M && M.target && at(M.target, "mouseup", j)),
                        ge = !1,
                        L && (m = Kl = Kr(),
                            u.isDragging = !1),
                        Jl(ce),
                        qe && !N) {
                        M && (at(M.target, "change", j),
                                u.pointerEvent = x),
                            Co(p, !1),
                            it(u, "release", "onRelease"),
                            it(u, "click", "onClick"),
                            qe = !1;
                        return
                    }
                    for (Y = p.length; --Y > -1;)
                        js(p[Y], "cursor", t.cursor || (t.cursor !== !1 ? qn : null));
                    if (vs--,
                        M) {
                        if (K = M.changedTouches,
                            K && (M = K[0],
                                M !== Ce && M.identifier !== fe)) {
                            for (Y = K.length; --Y > -1 && (M = K[Y]).identifier !== fe && M.target !== r;)
                            ;
                            if (Y < 0 && !I)
                                return
                        }
                        u.pointerEvent = x,
                            u.pointerX = M.pageX,
                            u.pointerY = M.pageY
                    }
                    return N && x ? (rr(x),
                            oe = !0,
                            it(u, "release", "onRelease")) : x && !L ? (oe = !1,
                            U && (t.snap || t.bounds) && dt(t.inertia || t.throwProps),
                            it(u, "release", "onRelease"),
                            (!zn || x.type !== "touchmove") && x.type.indexOf("cancel") === -1 && (it(u, "click", "onClick"),
                                Kr() - k < 300 && it(u, "doubleclick", "onDoubleClick"),
                                Q = x.target || r,
                                k = Kr(),
                                pe = function() {
                                    k !== Ne && u.enabled() && !u.isPressed && !x.defaultPrevented && (Q.click ? Q.click() : B.createEvent && (se = B.createEvent("MouseEvents"),
                                        se.initMouseEvent("click", !0, !0, ze, 1, u.pointerEvent.screenX, u.pointerEvent.screenY, u.pointerX, u.pointerY, !1, !1, !1, !1, 0, null),
                                        Q.dispatchEvent(se)))
                                }, !zn && !x.defaultPrevented && ke.delayedCall(.05, pe))) : (dt(t.inertia || t.throwProps), !u.allowEventDefault && x && (t.dragClickables !== !1 || !T.call(u, x.target)) && L && (!C || Z && C === Z) && x.cancelable !== !1 ? (oe = !0,
                                rr(x)) : oe = !1,
                            it(u, "release", "onRelease")),
                        te() && z.duration(u.tween.duration()),
                        L && it(u, "dragend", "onDragEnd"), !0
                },
                wt = function(M) {
                    if (M && u.isDragging && !E) {
                        var I = M.target || r.parentNode,
                            x = I.scrollLeft - I._gsScrollX,
                            L = I.scrollTop - I._gsScrollY;
                        (x || L) && (A ? (F -= x * A.a + L * A.c,
                                q -= L * A.d + x * A.b) : (F -= x,
                                q -= L),
                            I._gsScrollX += x,
                            I._gsScrollY += L,
                            Be(u.pointerX, u.pointerY))
                    }
                },
                gr = function(M) {
                    var I = Kr(),
                        x = I - k < 100,
                        L = I - m < 50,
                        N = x && Ne === k,
                        z = u.pointerEvent && u.pointerEvent.defaultPrevented,
                        K = x && he === k,
                        Y = M.isTrusted || M.isTrusted == null && x && N;
                    if ((N || L && u.vars.suppressClickOnDrag !== !1) && M.stopImmediatePropagation && M.stopImmediatePropagation(),
                        x && !(u.pointerEvent && u.pointerEvent.defaultPrevented) && (!N || Y && !K)) {
                        Y && N && (he = k),
                            Ne = k;
                        return
                    }
                    (u.isPressed || L || x) && (!Y || !M.detail || !x || z) && rr(M), !x && !L && !Ie && (M && M.target && (u.pointerEvent = M),
                        it(u, "click", "onClick"))
                },
                tr = function(M) {
                    return A ? {
                        x: M.x * A.a + M.y * A.c + A.e,
                        y: M.x * A.b + M.y * A.d + A.f
                    } : {
                        x: M.x,
                        y: M.y
                    }
                };
            return Yt = e.get(r),
                Yt && Yt.kill(),
                i.startDrag = function(j, M) {
                    var I, x, L, N;
                    Xe(j || u.pointerEvent, !0),
                        M && !u.hitTest(j || u.pointerEvent) && (I = Ui(j || u.pointerEvent),
                            x = Ui(r),
                            L = tr({
                                x: I.left + I.width / 2,
                                y: I.top + I.height / 2
                            }),
                            N = tr({
                                x: x.left + x.width / 2,
                                y: x.top + x.height / 2
                            }),
                            F -= L.x - N.x,
                            q -= L.y - N.y),
                        u.isDragging || (u.isDragging = Ie = !0,
                            it(u, "dragstart", "onDragStart"))
                },
                i.drag = Ge,
                i.endDrag = function(j) {
                    return Ae(j || u.pointerEvent, !0)
                },
                i.timeSinceDrag = function() {
                    return u.isDragging ? 0 : (Kr() - m) / 1e3
                },
                i.timeSinceClick = function() {
                    return (Kr() - k) / 1e3
                },
                i.hitTest = function(j, M) {
                    return e.hitTest(u.target, j, M)
                },
                i.getDirection = function(j, M) {
                    var I = j === "velocity" && _r ? j : Zn(j) && !a ? "element" : "start",
                        x, L, N, z, K, Y;
                    return I === "element" && (K = Ui(u.target),
                            Y = Ui(j)),
                        x = I === "start" ? u.x - R : I === "velocity" ? _r.getVelocity(r, l) : K.left + K.width / 2 - (Y.left + Y.width / 2),
                        a ? x < 0 ? "counter-clockwise" : "clockwise" : (M = M || 2,
                            L = I === "start" ? u.y - X : I === "velocity" ? _r.getVelocity(r, c) : K.top + K.height / 2 - (Y.top + Y.height / 2),
                            N = Math.abs(x / L),
                            z = N < 1 / M ? "" : x < 0 ? "left" : "right",
                            N < M && (z !== "" && (z += "-"),
                                z += L < 0 ? "up" : "down"),
                            z)
                },
                i.applyBounds = function(j, M) {
                    var I, x, L, N, z, K;
                    if (j && t.bounds !== j)
                        return t.bounds = j,
                            u.update(!0, M);
                    if (Ve(!0),
                        We(),
                        G && !te()) {
                        if (I = u.x,
                            x = u.y,
                            I > W ? I = W : I < ee && (I = ee),
                            x > re ? x = re : x < le && (x = le),
                            (u.x !== I || u.y !== x) && (L = !0,
                                u.x = u.endX = I,
                                a ? u.endRotation = I : u.y = u.endY = x,
                                ge = !0,
                                ce(!0),
                                u.autoScroll && !u.isDragging))
                            for (Ws(r.parentNode),
                                N = r,
                                Nr.scrollTop = ze.pageYOffset != null ? ze.pageYOffset : B.documentElement.scrollTop != null ? B.documentElement.scrollTop : B.body.scrollTop,
                                Nr.scrollLeft = ze.pageXOffset != null ? ze.pageXOffset : B.documentElement.scrollLeft != null ? B.documentElement.scrollLeft : B.body.scrollLeft; N && !K;)
                                K = Pn(N.parentNode),
                                z = K ? Nr : N.parentNode,
                                h && z.scrollTop > z._gsMaxScrollY && (z.scrollTop = z._gsMaxScrollY),
                                f && z.scrollLeft > z._gsMaxScrollX && (z.scrollLeft = z._gsMaxScrollX),
                                N = z;
                        u.isThrowing && (L || u.endX > W || u.endX < ee || u.endY > re || u.endY < le) && dt(t.inertia || t.throwProps, L)
                    }
                    return u
                },
                i.update = function(j, M, I) {
                    if (M && u.isPressed) {
                        var x = ki(r),
                            L = De.apply({
                                x: u.x - R,
                                y: u.y - X
                            }),
                            N = ki(r.parentNode, !0);
                        N.apply({
                                x: x.e - L.x,
                                y: x.f - L.y
                            }, L),
                            u.x -= L.x - N.e,
                            u.y -= L.y - N.f,
                            ce(!0),
                            bt()
                    }
                    var z = u.x,
                        K = u.y;
                    return Gt(!M),
                        j ? u.applyBounds() : (ge && I && ce(!0),
                            Ve(!0)),
                        M && (Be(u.pointerX, u.pointerY),
                            ge && ce(!0)),
                        u.isPressed && !M && (f && Math.abs(z - u.x) > .01 || h && Math.abs(K - u.y) > .01 && !a) && bt(),
                        u.autoScroll && (Ws(r.parentNode, u.isDragging),
                            v = u.isDragging,
                            ce(!0),
                            ru(r, wt),
                            tu(r, wt)),
                        u
                },
                i.enable = function(j) {
                    var M = {
                            lazy: !0
                        },
                        I, x, L;
                    if (t.cursor !== !1 && (M.cursor = t.cursor || qn),
                        ke.utils.checkPrefix("touchCallout") && (M.touchCallout = "none"),
                        j !== "soft") {
                        for (Ql(p, f === h ? "none" : t.allowNativeTouchScrolling && r.scrollHeight === r.clientHeight == (r.scrollWidth === r.clientHeight) || t.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"),
                            x = p.length; --x > -1;)
                            L = p[x],
                            Ko || ut(L, "mousedown", Xe),
                            ut(L, "touchstart", Xe),
                            ut(L, "click", gr, !0),
                            ke.set(L, M),
                            L.getBBox && L.ownerSVGElement && f !== h && ke.set(L.ownerSVGElement, {
                                touchAction: t.allowNativeTouchScrolling || t.allowEventDefault ? "manipulation" : f ? "pan-y" : "pan-x"
                            }),
                            t.allowContextMenu || ut(L, "contextmenu", st);
                        Co(p, !1)
                    }
                    return tu(r, wt),
                        P = !0,
                        _r && j !== "soft" && _r.track(E || r, s ? "x,y" : a ? "rotation" : "top,left"),
                        r._gsDragID = I = "d" + ep++,
                        dn[I] = u,
                        E && (E.enable(),
                            E.element._gsDragID = I),
                        (t.bounds || a) && bt(),
                        t.bounds && u.applyBounds(),
                        u
                },
                i.disable = function(j) {
                    for (var M = u.isDragging, I = p.length, x; --I > -1;)
                        js(p[I], "cursor", null);
                    if (j !== "soft") {
                        for (Ql(p, null),
                            I = p.length; --I > -1;)
                            x = p[I],
                            js(x, "touchCallout", null),
                            at(x, "mousedown", Xe),
                            at(x, "touchstart", Xe),
                            at(x, "click", gr),
                            at(x, "contextmenu", st);
                        Co(p, !0),
                            V && (at(V, "touchcancel", Ae),
                                at(V, "touchend", Ae),
                                at(V, "touchmove", Ge)),
                            at(B, "mouseup", Ae),
                            at(B, "mousemove", Ge)
                    }
                    return ru(r, wt),
                        P = !1,
                        _r && j !== "soft" && _r.untrack(E || r, s ? "x,y" : a ? "rotation" : "top,left"),
                        E && E.disable(),
                        Jl(ce),
                        u.isDragging = u.isPressed = qe = !1,
                        M && it(u, "dragend", "onDragEnd"),
                        u
                },
                i.enabled = function(j, M) {
                    return arguments.length ? j ? u.enable(M) : u.disable(M) : P
                },
                i.kill = function() {
                    return u.isThrowing = !1,
                        u.tween && u.tween.kill(),
                        u.disable(),
                        ke.set(p, {
                            clearProps: "userSelect"
                        }),
                        delete dn[r._gsDragID],
                        u
                }, ~n.indexOf("scroll") && (E = i.scrollProxy = new cp(r, rp({
                        onKill: function() {
                            u.isPressed && Ae(null)
                        }
                    }, t)),
                    r.style.overflowY = h && !Ea ? "auto" : "hidden",
                    r.style.overflowX = f && !Ea ? "auto" : "hidden",
                    r = E.content),
                a ? g.rotation = 1 : (f && (g[l] = 1),
                    h && (g[c] = 1)),
                S.force3D = "force3D" in t ? t.force3D : !0,
                i.enable(),
                i
        }
        return e.register = function(t) {
                ke = t,
                    Ks()
            },
            e.create = function(t, i) {
                return Pa || Ks(!0),
                    ri(t).map(function(n) {
                        return new e(n, i)
                    })
            },
            e.get = function(t) {
                return dn[(ri(t)[0] || {})._gsDragID]
            },
            e.timeSinceDrag = function() {
                return (Kr() - Kl) / 1e3
            },
            e.hitTest = function(t, i, n) {
                if (t === i)
                    return !1;
                var s = Ui(t),
                    a = Ui(i),
                    l = s.top,
                    c = s.left,
                    f = s.right,
                    h = s.bottom,
                    d = s.width,
                    u = s.height,
                    p = a.left > f || a.right < c || a.top > h || a.bottom < l,
                    g, m, v;
                return p || !n ? !p : (v = (n + "").indexOf("%") !== -1,
                    n = parseFloat(n) || 0,
                    g = {
                        left: Math.max(c, a.left),
                        top: Math.max(l, a.top)
                    },
                    g.width = Math.min(f, a.right) - g.left,
                    g.height = Math.min(h, a.bottom) - g.top,
                    g.width < 0 || g.height < 0 ? !1 : v ? (n *= .01,
                        m = g.width * g.height,
                        m >= d * u * n || m >= a.width * a.height * n) : g.width > n && g.height > n)
            },
            e
    }(fp);
np(zi.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1
});
zi.zIndex = 1e3;
zi.version = "3.11.3";
rf() && ke.registerPlugin(zi);

function ou(o, e) {
    for (var r = 0; r < e.length; r++) {
        var t = e[r];
        t.enumerable = t.enumerable || !1,
            t.configurable = !0,
            "value" in t && (t.writable = !0),
            Object.defineProperty(o, t.key, t)
    }
}

function hp(o, e, r) {
    return e && ou(o.prototype, e),
        r && ou(o, r),
        o
}
/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var St, Ca, Qt, ii, ni, mn, af, xi, eo, lf, Gr, yr, uf = function() {
        return St || typeof window < "u" && (St = window.gsap) && St.registerPlugin && St
    },
    cf = 1,
    on = [],
    Te = [],
    Ar = [],
    to = Date.now,
    La = function(e, r) {
        return r
    },
    dp = function() {
        var e = eo.core,
            r = e.bridge || {},
            t = e._scrollers,
            i = e._proxies;
        t.push.apply(t, Te),
            i.push.apply(i, Ar),
            Te = t,
            Ar = i,
            La = function(s, a) {
                return r[s](a)
            }
    },
    li = function(e, r) {
        return ~Ar.indexOf(e) && Ar[Ar.indexOf(e) + 1][r]
    },
    ro = function(e) {
        return !!~lf.indexOf(e)
    },
    At = function(e, r, t, i, n) {
        return e.addEventListener(r, t, {
            passive: !i,
            capture: !!n
        })
    },
    Pt = function(e, r, t, i) {
        return e.removeEventListener(r, t, !!i)
    },
    Lo = "scrollLeft",
    Ao = "scrollTop",
    Aa = function() {
        return Gr && Gr.isPressed || Te.cache++
    },
    bs = function(e, r) {
        var t = function i(n) {
            if (n || n === 0) {
                cf && (Qt.history.scrollRestoration = "manual");
                var s = Gr && Gr.isPressed;
                n = i.v = Math.round(n) || (Gr && Gr.iOS ? 1 : 0),
                    e(n),
                    i.cacheID = Te.cache,
                    s && La("ss", n)
            } else
                (r || Te.cache !== i.cacheID || La("ref")) && (i.cacheID = Te.cache,
                    i.v = e());
            return i.v + i.offset
        };
        return t.offset = 0,
            e && t
    },
    Ct = {
        s: Lo,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: bs(function(o) {
            return arguments.length ? Qt.scrollTo(o, ht.sc()) : Qt.pageXOffset || ii[Lo] || ni[Lo] || mn[Lo] || 0
        })
    },
    ht = {
        s: Ao,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Ct,
        sc: bs(function(o) {
            return arguments.length ? Qt.scrollTo(Ct.sc(), o) : Qt.pageYOffset || ii[Ao] || ni[Ao] || mn[Ao] || 0
        })
    },
    Nt = function(e) {
        return St.utils.toArray(e)[0] || (typeof e == "string" && St.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    },
    hi = function(e, r) {
        var t = r.s,
            i = r.sc;
        ro(e) && (e = ii.scrollingElement || ni);
        var n = Te.indexOf(e),
            s = i === ht.sc ? 1 : 2;
        !~n && (n = Te.push(e) - 1),
            Te[n + s] || e.addEventListener("scroll", Aa);
        var a = Te[n + s],
            l = a || (Te[n + s] = bs(li(e, t), !0) || (ro(e) ? i : bs(function(c) {
                return arguments.length ? e[t] = c : e[t]
            })));
        return l.target = e,
            a || (l.smooth = St.getProperty(e, "scrollBehavior") === "smooth"),
            l
    },
    Ra = function(e, r, t) {
        var i = e,
            n = e,
            s = to(),
            a = s,
            l = r || 50,
            c = Math.max(500, l * 3),
            f = function(p, g) {
                var m = to();
                g || m - s > l ? (n = i,
                    i = p,
                    a = s,
                    s = m) : t ? i += p : i = n + (p - n) / (m - a) * (s - a)
            },
            h = function() {
                n = i = t ? 0 : i,
                    a = s = 0
            },
            d = function(p) {
                var g = a,
                    m = n,
                    v = to();
                return (p || p === 0) && p !== i && f(p),
                    s === a || v - a > c ? 0 : (i + (t ? m : -m)) / ((t ? v : s) - g) * 1e3
            };
        return {
            update: f,
            reset: h,
            getVelocity: d
        }
    },
    An = function(e, r) {
        return r && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
    },
    su = function(e) {
        var r = Math.max.apply(Math, e),
            t = Math.min.apply(Math, e);
        return Math.abs(r) >= Math.abs(t) ? r : t
    },
    ff = function() {
        eo = St.core.globals().ScrollTrigger,
            eo && eo.core && dp()
    },
    hf = function(e) {
        return St = e || uf(),
            St && typeof document < "u" && document.body && (Qt = window,
                ii = document,
                ni = ii.documentElement,
                mn = ii.body,
                lf = [Qt, ii, ni, mn],
                St.utils.clamp,
                xi = "onpointerenter" in mn ? "pointer" : "mouse",
                af = tt.isTouch = Qt.matchMedia && Qt.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Qt || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
                yr = tt.eventTypes = ("ontouchstart" in ni ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in ni ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
                setTimeout(function() {
                    return cf = 0
                }, 500),
                ff(),
                Ca = 1),
            Ca
    };
Ct.op = ht;
Te.cache = 0;
var tt = function() {
    function o(r) {
        this.init(r)
    }
    var e = o.prototype;
    return e.init = function(t) {
            Ca || hf(St) || console.warn("Please gsap.registerPlugin(Observer)"),
                eo || ff();
            var i = t.tolerance,
                n = t.dragMinimum,
                s = t.type,
                a = t.target,
                l = t.lineHeight,
                c = t.debounce,
                f = t.preventDefault,
                h = t.onStop,
                d = t.onStopDelay,
                u = t.ignore,
                p = t.wheelSpeed,
                g = t.event,
                m = t.onDragStart,
                v = t.onDragEnd,
                y = t.onDrag,
                _ = t.onPress,
                w = t.onRelease,
                b = t.onRight,
                T = t.onLeft,
                k = t.onUp,
                S = t.onDown,
                D = t.onChangeX,
                $ = t.onChangeY,
                B = t.onChange,
                P = t.onToggleX,
                E = t.onToggleY,
                F = t.onHover,
                q = t.onHoverEnd,
                R = t.onMove,
                X = t.ignoreCheck,
                G = t.isNormalizer,
                ne = t.onGestureStart,
                O = t.onGestureEnd,
                W = t.onWheel,
                ee = t.onEnable,
                re = t.onDisable,
                le = t.onClick,
                Ce = t.scrollSpeed,
                fe = t.capture,
                Le = t.allowClicks,
                ge = t.lockAxis,
                Yt = t.onLockAxis;
            this.target = a = Nt(a) || ni,
                this.vars = t,
                u && (u = St.utils.toArray(u)),
                i = i || 1e-9,
                n = n || 0,
                p = p || 1,
                Ce = Ce || 1,
                s = s || "wheel,touch,pointer",
                c = c !== !1,
                l || (l = parseFloat(Qt.getComputedStyle(mn).lineHeight) || 22);
            var de, He, ue, qe, V, A, U, C = this,
                Z = 0,
                ie = 0,
                Ne = hi(a, Ct),
                he = hi(a, ht),
                oe = Ne(),
                De = he(),
                Ie = ~s.indexOf("touch") && !~s.indexOf("pointer") && yr[0] === "pointerdown",
                st = ro(a),
                ce = a.ownerDocument || ii,
                Ve = [0, 0, 0],
                Ye = [0, 0, 0],
                Sr = 0,
                We = function() {
                    return Sr = to()
                },
                mt = function(x, L) {
                    return (C.event = x) && u && ~u.indexOf(x.target) || L && Ie && x.pointerType !== "touch" || X && X(x, L)
                },
                pr = function() {
                    C._vx.reset(),
                        C._vy.reset(),
                        He.pause(),
                        h && h(C)
                },
                dt = function() {
                    var x = C.deltaX = su(Ve),
                        L = C.deltaY = su(Ye),
                        N = Math.abs(x) >= i,
                        z = Math.abs(L) >= i;
                    B && (N || z) && B(C, x, L, Ve, Ye),
                        N && (b && C.deltaX > 0 && b(C),
                            T && C.deltaX < 0 && T(C),
                            D && D(C),
                            P && C.deltaX < 0 != Z < 0 && P(C),
                            Z = C.deltaX,
                            Ve[0] = Ve[1] = Ve[2] = 0),
                        z && (S && C.deltaY > 0 && S(C),
                            k && C.deltaY < 0 && k(C),
                            $ && $(C),
                            E && C.deltaY < 0 != ie < 0 && E(C),
                            ie = C.deltaY,
                            Ye[0] = Ye[1] = Ye[2] = 0),
                        (qe || ue) && (R && R(C),
                            ue && (y(C),
                                ue = !1),
                            qe = !1),
                        A && !(A = !1) && Yt && Yt(C),
                        V && (W(C),
                            V = !1),
                        de = 0
                },
                Gt = function(x, L, N) {
                    Ve[N] += x,
                        Ye[N] += L,
                        C._vx.update(x),
                        C._vy.update(L),
                        c ? de || (de = requestAnimationFrame(dt)) : dt()
                },
                bt = function(x, L) {
                    ge && !U && (C.axis = U = Math.abs(x) > Math.abs(L) ? "x" : "y",
                            A = !0),
                        U !== "y" && (Ve[2] += x,
                            C._vx.update(x, !0)),
                        U !== "x" && (Ye[2] += L,
                            C._vy.update(L, !0)),
                        c ? de || (de = requestAnimationFrame(dt)) : dt()
                },
                te = function(x) {
                    if (!mt(x, 1)) {
                        x = An(x, f);
                        var L = x.clientX,
                            N = x.clientY,
                            z = L - C.x,
                            K = N - C.y,
                            Y = C.isDragging;
                        C.x = L,
                            C.y = N,
                            (Y || Math.abs(C.startX - L) >= n || Math.abs(C.startY - N) >= n) && (y && (ue = !0),
                                Y || (C.isDragging = !0),
                                bt(z, K),
                                Y || m && m(C))
                    }
                },
                je = C.onPress = function(I) {
                    mt(I, 1) || (C.axis = U = null,
                        He.pause(),
                        C.isPressed = !0,
                        I = An(I),
                        Z = ie = 0,
                        C.startX = C.x = I.clientX,
                        C.startY = C.y = I.clientY,
                        C._vx.reset(),
                        C._vy.reset(),
                        At(G ? a : ce, yr[1], te, f, !0),
                        C.deltaX = C.deltaY = 0,
                        _ && _(C))
                },
                Xe = function(x) {
                    if (!mt(x, 1)) {
                        Pt(G ? a : ce, yr[1], te, !0);
                        var L = C.isDragging && (Math.abs(C.x - C.startX) > 3 || Math.abs(C.y - C.startY) > 3),
                            N = An(x);
                        L || (C._vx.reset(),
                                C._vy.reset(),
                                f && Le && St.delayedCall(.08, function() {
                                    if (to() - Sr > 300 && !x.defaultPrevented) {
                                        if (x.target.click)
                                            x.target.click();
                                        else if (ce.createEvent) {
                                            var z = ce.createEvent("MouseEvents");
                                            z.initMouseEvent("click", !0, !0, Qt, 1, N.screenX, N.screenY, N.clientX, N.clientY, !1, !1, !1, !1, 0, null),
                                                x.target.dispatchEvent(z)
                                        }
                                    }
                                })),
                            C.isDragging = C.isGesturing = C.isPressed = !1,
                            h && !G && He.restart(!0),
                            v && L && v(C),
                            w && w(C, L)
                    }
                },
                Ge = function(x) {
                    return x.touches && x.touches.length > 1 && (C.isGesturing = !0) && ne(x, C.isDragging)
                },
                Be = function() {
                    return (C.isGesturing = !1) || O(C)
                },
                Ae = function(x) {
                    if (!mt(x)) {
                        var L = Ne(),
                            N = he();
                        Gt((L - oe) * Ce, (N - De) * Ce, 1),
                            oe = L,
                            De = N,
                            h && He.restart(!0)
                    }
                },
                wt = function(x) {
                    if (!mt(x)) {
                        x = An(x, f),
                            W && (V = !0);
                        var L = (x.deltaMode === 1 ? l : x.deltaMode === 2 ? Qt.innerHeight : 1) * p;
                        Gt(x.deltaX * L, x.deltaY * L, 0),
                            h && !G && He.restart(!0)
                    }
                },
                gr = function(x) {
                    if (!mt(x)) {
                        var L = x.clientX,
                            N = x.clientY,
                            z = L - C.x,
                            K = N - C.y;
                        C.x = L,
                            C.y = N,
                            qe = !0,
                            (z || K) && bt(z, K)
                    }
                },
                tr = function(x) {
                    C.event = x,
                        F(C)
                },
                j = function(x) {
                    C.event = x,
                        q(C)
                },
                M = function(x) {
                    return mt(x) || An(x, f) && le(C)
                };
            He = C._dc = St.delayedCall(d || .25, pr).pause(),
                C.deltaX = C.deltaY = 0,
                C._vx = Ra(0, 50, !0),
                C._vy = Ra(0, 50, !0),
                C.scrollX = Ne,
                C.scrollY = he,
                C.isDragging = C.isGesturing = C.isPressed = !1,
                C.enable = function(I) {
                    return C.isEnabled || (At(st ? ce : a, "scroll", Aa),
                            s.indexOf("scroll") >= 0 && At(st ? ce : a, "scroll", Ae, f, fe),
                            s.indexOf("wheel") >= 0 && At(a, "wheel", wt, f, fe),
                            (s.indexOf("touch") >= 0 && af || s.indexOf("pointer") >= 0) && (At(a, yr[0], je, f, fe),
                                At(ce, yr[2], Xe),
                                At(ce, yr[3], Xe),
                                Le && At(a, "click", We, !1, !0),
                                le && At(a, "click", M),
                                ne && At(ce, "gesturestart", Ge),
                                O && At(ce, "gestureend", Be),
                                F && At(a, xi + "enter", tr),
                                q && At(a, xi + "leave", j),
                                R && At(a, xi + "move", gr)),
                            C.isEnabled = !0,
                            I && I.type && je(I),
                            ee && ee(C)),
                        C
                },
                C.disable = function() {
                    C.isEnabled && (on.filter(function(I) {
                            return I !== C && ro(I.target)
                        }).length || Pt(st ? ce : a, "scroll", Aa),
                        C.isPressed && (C._vx.reset(),
                            C._vy.reset(),
                            Pt(G ? a : ce, yr[1], te, !0)),
                        Pt(st ? ce : a, "scroll", Ae, fe),
                        Pt(a, "wheel", wt, fe),
                        Pt(a, yr[0], je, fe),
                        Pt(ce, yr[2], Xe),
                        Pt(ce, yr[3], Xe),
                        Pt(a, "click", We, !0),
                        Pt(a, "click", M),
                        Pt(ce, "gesturestart", Ge),
                        Pt(ce, "gestureend", Be),
                        Pt(a, xi + "enter", tr),
                        Pt(a, xi + "leave", j),
                        Pt(a, xi + "move", gr),
                        C.isEnabled = C.isPressed = C.isDragging = !1,
                        re && re(C))
                },
                C.kill = function() {
                    C.disable();
                    var I = on.indexOf(C);
                    I >= 0 && on.splice(I, 1),
                        Gr === C && (Gr = 0)
                },
                on.push(C),
                G && ro(a) && (Gr = C),
                C.enable(g)
        },
        hp(o, [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }]),
        o
}();
tt.version = "3.11.3";
tt.create = function(o) {
    return new tt(o)
};
tt.register = hf;
tt.getAll = function() {
    return on.slice()
};
tt.getById = function(o) {
    return on.filter(function(e) {
        return e.vars.id === o
    })[0]
};
uf() && St.registerPlugin(tt);
/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var J, Ji, xe, Ue, Dr, Je, df, ws, xs, sn, Zo, Ro, xt, Cs, Fa, Ot, au, lu, en, pf, Qs, gf, Ht, mf, _f, yf, Qr, Na, pl, Zs, Fo = 1,
    Dt = Date.now,
    Js = Dt(),
    hr = 0,
    No = 0,
    uu = function() {
        return Cs = 1
    },
    cu = function() {
        return Cs = 0
    },
    Mr = function(e) {
        return e
    },
    Vn = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    vf = function() {
        return typeof window < "u"
    },
    bf = function() {
        return J || vf() && (J = window.gsap) && J.registerPlugin && J
    },
    qi = function(e) {
        return !!~df.indexOf(e)
    },
    wf = function(e) {
        return li(e, "getBoundingClientRect") || (qi(e) ? function() {
                return ns.width = xe.innerWidth,
                    ns.height = xe.innerHeight,
                    ns
            } :
            function() {
                return qr(e)
            }
        )
    },
    pp = function(e, r, t) {
        var i = t.d,
            n = t.d2,
            s = t.a;
        return (s = li(e, "getBoundingClientRect")) ? function() {
                return s()[i]
            } :
            function() {
                return (r ? xe["inner" + n] : e["client" + n]) || 0
            }
    },
    gp = function(e, r) {
        return !r || ~Ar.indexOf(e) ? wf(e) : function() {
            return ns
        }
    },
    oi = function(e, r) {
        var t = r.s,
            i = r.d2,
            n = r.d,
            s = r.a;
        return (t = "scroll" + i) && (s = li(e, t)) ? s() - wf(e)()[n] : qi(e) ? (Dr[t] || Je[t]) - (xe["inner" + i] || Dr["client" + i] || Je["client" + i]) : e[t] - e["offset" + i]
    },
    Io = function(e, r) {
        for (var t = 0; t < en.length; t += 3)
            (!r || ~r.indexOf(en[t + 1])) && e(en[t], en[t + 1], en[t + 2])
    },
    vr = function(e) {
        return typeof e == "string"
    },
    Lt = function(e) {
        return typeof e == "function"
    },
    Xn = function(e) {
        return typeof e == "number"
    },
    Jo = function(e) {
        return typeof e == "object"
    },
    Rn = function(e, r, t) {
        return e && e.progress(r ? 0 : 1) && t && e.pause()
    },
    ea = function(e, r) {
        if (e.enabled) {
            var t = r(e);
            t && t.totalTime && (e.callbackAnimation = t)
        }
    },
    Ki = Math.abs,
    xf = "left",
    Tf = "top",
    gl = "right",
    ml = "bottom",
    Ri = "width",
    Fi = "height",
    io = "Right",
    no = "Left",
    oo = "Top",
    so = "Bottom",
    nt = "padding",
    ar = "margin",
    En = "Width",
    _l = "Height",
    _t = "px",
    Cr = function(e) {
        return xe.getComputedStyle(e)
    },
    mp = function(e) {
        var r = Cr(e).position;
        e.style.position = r === "absolute" || r === "fixed" ? r : "relative"
    },
    fu = function(e, r) {
        for (var t in r)
            t in e || (e[t] = r[t]);
        return e
    },
    qr = function(e, r) {
        var t = r && Cr(e)[Fa] !== "matrix(1, 0, 0, 1, 0, 0)" && J.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            i = e.getBoundingClientRect();
        return t && t.progress(0).kill(),
            i
    },
    Ia = function(e, r) {
        var t = r.d2;
        return e["offset" + t] || e["client" + t] || 0
    },
    Sf = function(e) {
        var r = [],
            t = e.labels,
            i = e.duration(),
            n;
        for (n in t)
            r.push(t[n] / i);
        return r
    },
    _p = function(e) {
        return function(r) {
            return J.utils.snap(Sf(e), r)
        }
    },
    yl = function(e) {
        var r = J.utils.snap(e),
            t = Array.isArray(e) && e.slice(0).sort(function(i, n) {
                return i - n
            });
        return t ? function(i, n, s) {
                s === void 0 && (s = .001);
                var a;
                if (!n)
                    return r(i);
                if (n > 0) {
                    for (i -= s,
                        a = 0; a < t.length; a++)
                        if (t[a] >= i)
                            return t[a];
                    return t[a - 1]
                } else
                    for (a = t.length,
                        i += s; a--;)
                        if (t[a] <= i)
                            return t[a];
                return t[0]
            } :
            function(i, n, s) {
                s === void 0 && (s = .001);
                var a = r(i);
                return !n || Math.abs(a - i) < s || a - i < 0 == n < 0 ? a : r(n < 0 ? i - e : i + e)
            }
    },
    yp = function(e) {
        return function(r, t) {
            return yl(Sf(e))(r, t.direction)
        }
    },
    Bo = function(e, r, t, i) {
        return t.split(",").forEach(function(n) {
            return e(r, n, i)
        })
    },
    yt = function(e, r, t, i, n) {
        return e.addEventListener(r, t, {
            passive: !i,
            capture: !!n
        })
    },
    pt = function(e, r, t, i) {
        return e.removeEventListener(r, t, !!i)
    },
    $o = function(e, r, t) {
        return t && t.wheelHandler && e(r, "wheel", t)
    },
    hu = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    zo = {
        toggleActions: "play",
        anticipatePin: 0
    },
    Ts = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    es = function(e, r) {
        if (vr(e)) {
            var t = e.indexOf("="),
                i = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (i *= r / 100),
                    e = e.substr(0, t - 1)),
                e = i + (e in Ts ? Ts[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0)
        }
        return e
    },
    qo = function(e, r, t, i, n, s, a, l) {
        var c = n.startColor,
            f = n.endColor,
            h = n.fontSize,
            d = n.indent,
            u = n.fontWeight,
            p = Ue.createElement("div"),
            g = qi(t) || li(t, "pinType") === "fixed",
            m = e.indexOf("scroller") !== -1,
            v = g ? Je : t,
            y = e.indexOf("start") !== -1,
            _ = y ? c : f,
            w = "border-color:" + _ + ";font-size:" + h + ";color:" + _ + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return w += "position:" + ((m || l) && g ? "fixed;" : "absolute;"),
            (m || l || !g) && (w += (i === ht ? gl : ml) + ":" + (s + parseFloat(d)) + "px;"),
            a && (w += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
            p._isStart = y,
            p.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")),
            p.style.cssText = w,
            p.innerText = r || r === 0 ? e + "-" + r : e,
            v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
            p._offset = p["offset" + i.op.d2],
            ts(p, 0, i, y),
            p
    },
    ts = function(e, r, t, i) {
        var n = {
                display: "block"
            },
            s = t[i ? "os2" : "p2"],
            a = t[i ? "p2" : "os2"];
        e._isFlipped = i,
            n[t.a + "Percent"] = i ? -100 : 0,
            n[t.a] = i ? "1px" : 0,
            n["border" + s + En] = 1,
            n["border" + a + En] = 0,
            n[t.p] = r + "px",
            J.set(e, n)
    },
    _e = [],
    Ba = {},
    bo, du = function() {
        return Dt() - hr > 34 && (bo || (bo = requestAnimationFrame(Yi)))
    },
    Qi = function() {
        (!Ht || !Ht.isPressed || Ht.startX > Je.clientWidth) && (Te.cache++,
            Ht ? bo || (bo = requestAnimationFrame(Yi)) : Yi(),
            hr || Xi("scrollStart"),
            hr = Dt())
    },
    ta = function() {
        yf = xe.innerWidth,
            _f = xe.innerHeight
    },
    Yn = function() {
        Te.cache++, !xt && !gf && !Ue.fullscreenElement && !Ue.webkitFullscreenElement && (!mf || yf !== xe.innerWidth || Math.abs(xe.innerHeight - _f) > xe.innerHeight * .25) && ws.restart(!0)
    },
    Vi = {},
    vp = [],
    kf = function o() {
        return pt(ve, "scrollEnd", o) || Ei(!0)
    },
    Xi = function(e) {
        return Vi[e] && Vi[e].map(function(r) {
            return r()
        }) || vp
    },
    Wt = [],
    Mf = function(e) {
        for (var r = 0; r < Wt.length; r += 5)
            (!e || Wt[r + 4] && Wt[r + 4].query === e) && (Wt[r].style.cssText = Wt[r + 1],
                Wt[r].getBBox && Wt[r].setAttribute("transform", Wt[r + 2] || ""),
                Wt[r + 3].uncache = 1)
    },
    vl = function(e, r) {
        var t;
        for (Ot = 0; Ot < _e.length; Ot++)
            t = _e[Ot],
            t && (!r || t._ctx === r) && (e ? t.kill(1) : t.revert(!0, !0));
        r && Mf(r),
            r || Xi("revert")
    },
    Pf = function(e, r) {
        Te.cache++,
            (r || !br) && Te.forEach(function(t) {
                return Lt(t) && t.cacheID++ && (t.rec = 0)
            }),
            vr(e) && (xe.history.scrollRestoration = pl = e)
    },
    br, Ni = 0,
    pu, bp = function() {
        if (pu !== Ni) {
            var e = pu = Ni;
            requestAnimationFrame(function() {
                return e === Ni && Ei(!0)
            })
        }
    },
    Ei = function(e, r) {
        if (hr && !e) {
            yt(ve, "scrollEnd", kf);
            return
        }
        br = ve.isRefreshing = !0,
            Te.forEach(function(i) {
                return Lt(i) && i.cacheID++ && (i.rec = i())
            });
        var t = Xi("refreshInit");
        pf && ve.sort(),
            r || vl(),
            Te.forEach(function(i) {
                Lt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"),
                    i(0))
            }),
            _e.slice(0).forEach(function(i) {
                return i.refresh()
            }),
            _e.forEach(function(i, n) {
                if (i._subPinOffset && i.pin) {
                    var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
                        a = i.pin[s];
                    i.revert(!0, 1),
                        i.adjustPinSpacing(i.pin[s] - a),
                        i.revert(!1, 1)
                }
            }),
            _e.forEach(function(i) {
                return i.vars.end === "max" && i.setPositions(i.start, Math.max(i.start + 1, oi(i.scroller, i._dir)))
            }),
            t.forEach(function(i) {
                return i && i.render && i.render(-1)
            }),
            Te.forEach(function(i) {
                Lt(i) && (i.smooth && requestAnimationFrame(function() {
                        return i.target.style.scrollBehavior = "smooth"
                    }),
                    i.rec && i(i.rec))
            }),
            Pf(pl, 1),
            ws.pause(),
            Ni++,
            Yi(2),
            _e.forEach(function(i) {
                return Lt(i.vars.onRefresh) && i.vars.onRefresh(i)
            }),
            br = ve.isRefreshing = !1,
            Xi("refresh")
    },
    gu = 0,
    rs = 1,
    Mi, Yi = function(e) {
        if (!br || e === 2) {
            ve.isUpdating = !0,
                Mi && Mi.update(0);
            var r = _e.length,
                t = Dt(),
                i = t - Js >= 50,
                n = r && _e[0].scroll();
            if (rs = gu > n ? -1 : 1,
                gu = n,
                i && (hr && !Cs && t - hr > 200 && (hr = 0,
                        Xi("scrollEnd")),
                    Zo = Js,
                    Js = t),
                rs < 0) {
                for (Ot = r; Ot-- > 0;)
                    _e[Ot] && _e[Ot].update(0, i);
                rs = 1
            } else
                for (Ot = 0; Ot < r; Ot++)
                    _e[Ot] && _e[Ot].update(0, i);
            ve.isUpdating = !1
        }
        bo = 0
    },
    $a = [xf, Tf, ml, gl, ar + so, ar + io, ar + oo, ar + no, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    is = $a.concat([Ri, Fi, "boxSizing", "max" + En, "max" + _l, "position", ar, nt, nt + oo, nt + io, nt + so, nt + no]),
    wp = function(e, r, t) {
        _n(t);
        var i = e._gsap;
        if (i.spacerIsNative)
            _n(i.spacerState);
        else if (e._gsap.swappedIn) {
            var n = r.parentNode;
            n && (n.insertBefore(e, r),
                n.removeChild(r))
        }
        e._gsap.swappedIn = !1
    },
    ra = function(e, r, t, i) {
        if (!e._gsap.swappedIn) {
            for (var n = $a.length, s = r.style, a = e.style, l; n--;)
                l = $a[n],
                s[l] = t[l];
            s.position = t.position === "absolute" ? "absolute" : "relative",
                t.display === "inline" && (s.display = "inline-block"),
                a[ml] = a[gl] = "auto",
                s.flexBasis = t.flexBasis || "auto",
                s.overflow = "visible",
                s.boxSizing = "border-box",
                s[Ri] = Ia(e, Ct) + _t,
                s[Fi] = Ia(e, ht) + _t,
                s[nt] = a[ar] = a[Tf] = a[xf] = "0",
                _n(i),
                a[Ri] = a["max" + En] = t[Ri],
                a[Fi] = a["max" + _l] = t[Fi],
                a[nt] = t[nt],
                e.parentNode !== r && (e.parentNode.insertBefore(r, e),
                    r.appendChild(e)),
                e._gsap.swappedIn = !0
        }
    },
    xp = /([A-Z])/g,
    _n = function(e) {
        if (e) {
            var r = e.t.style,
                t = e.length,
                i = 0,
                n, s;
            for ((e.t._gsap || J.core.getCache(e.t)).uncache = 1; i < t; i += 2)
                s = e[i + 1],
                n = e[i],
                s ? r[n] = s : r[n] && r.removeProperty(n.replace(xp, "-$1").toLowerCase())
        }
    },
    Vo = function(e) {
        for (var r = is.length, t = e.style, i = [], n = 0; n < r; n++)
            i.push(is[n], t[is[n]]);
        return i.t = e,
            i
    },
    Tp = function(e, r, t) {
        for (var i = [], n = e.length, s = t ? 8 : 0, a; s < n; s += 2)
            a = e[s],
            i.push(a, a in r ? r[a] : e[s + 1]);
        return i.t = e.t,
            i
    },
    ns = {
        left: 0,
        top: 0
    },
    mu = function(e, r, t, i, n, s, a, l, c, f, h, d, u) {
        Lt(e) && (e = e(l)),
            vr(e) && e.substr(0, 3) === "max" && (e = d + (e.charAt(4) === "=" ? es("0" + e.substr(3), t) : 0));
        var p = u ? u.time() : 0,
            g, m, v;
        if (u && u.seek(0),
            Xn(e))
            a && ts(a, t, i, !0);
        else {
            Lt(r) && (r = r(l));
            var y = (e || "0").split(" "),
                _, w, b, T;
            v = Nt(r) || Je,
                _ = qr(v) || {},
                (!_ || !_.left && !_.top) && Cr(v).display === "none" && (T = v.style.display,
                    v.style.display = "block",
                    _ = qr(v),
                    T ? v.style.display = T : v.style.removeProperty("display")),
                w = es(y[0], _[i.d]),
                b = es(y[1] || "0", t),
                e = _[i.p] - c[i.p] - f + w + n - b,
                a && ts(a, b, i, t - b < 20 || a._isStart && b > 20),
                t -= t - b
        }
        if (s) {
            var k = e + t,
                S = s._isStart;
            g = "scroll" + i.d2,
                ts(s, k, i, S && k > 20 || !S && (h ? Math.max(Je[g], Dr[g]) : s.parentNode[g]) <= k + 1),
                h && (c = qr(a),
                    h && (s.style[i.op.p] = c[i.op.p] - i.op.m - s._offset + _t))
        }
        return u && v && (g = qr(v),
                u.seek(d),
                m = qr(v),
                u._caScrollDist = g[i.p] - m[i.p],
                e = e / u._caScrollDist * d),
            u && u.seek(p),
            u ? e : Math.round(e)
    },
    Sp = /(webkit|moz|length|cssText|inset)/i,
    _u = function(e, r, t, i) {
        if (e.parentNode !== r) {
            var n = e.style,
                s, a;
            if (r === Je) {
                e._stOrig = n.cssText,
                    a = Cr(e);
                for (s in a)
                    !+s && !Sp.test(s) && a[s] && typeof n[s] == "string" && s !== "0" && (n[s] = a[s]);
                n.top = t,
                    n.left = i
            } else
                n.cssText = e._stOrig;
            J.core.getCache(e).uncache = 1,
                r.appendChild(e)
        }
    },
    yu = function(e, r) {
        var t = hi(e, r),
            i = "_scroll" + r.p2,
            n, s, a = function l(c, f, h, d, u) {
                var p = l.tween,
                    g = f.onComplete,
                    m = {};
                return h = h || t(),
                    u = d && u || 0,
                    d = d || c - h,
                    p && p.kill(),
                    n = Math.round(h),
                    f[i] = c,
                    f.modifiers = m,
                    m[i] = function(v) {
                        return v = Math.round(t()),
                            v !== n && v !== s && Math.abs(v - n) > 3 && Math.abs(v - s) > 3 ? (p.kill(),
                                l.tween = 0) : v = h + d * p.ratio + u * p.ratio * p.ratio,
                            s = n,
                            n = Math.round(v)
                    },
                    f.onComplete = function() {
                        l.tween = 0,
                            g && g.call(p)
                    },
                    p = l.tween = J.to(e, f),
                    p
            };
        return e[i] = t,
            t.wheelHandler = function() {
                return a.tween && a.tween.kill() && (a.tween = 0)
            },
            yt(e, "wheel", t.wheelHandler),
            a
    },
    ve = function() {
        function o(r, t) {
            Ji || o.register(J) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                this.init(r, t)
        }
        var e = o.prototype;
        return e.init = function(t, i) {
                if (this.progress = this.start = 0,
                    this.vars && this.kill(!0, !0), !No) {
                    this.update = this.refresh = this.kill = Mr;
                    return
                }
                t = fu(vr(t) || Xn(t) || t.nodeType ? {
                    trigger: t
                } : t, zo);
                var n = t,
                    s = n.onUpdate,
                    a = n.toggleClass,
                    l = n.id,
                    c = n.onToggle,
                    f = n.onRefresh,
                    h = n.scrub,
                    d = n.trigger,
                    u = n.pin,
                    p = n.pinSpacing,
                    g = n.invalidateOnRefresh,
                    m = n.anticipatePin,
                    v = n.onScrubComplete,
                    y = n.onSnapComplete,
                    _ = n.once,
                    w = n.snap,
                    b = n.pinReparent,
                    T = n.pinSpacer,
                    k = n.containerAnimation,
                    S = n.fastScrollEnd,
                    D = n.preventOverlaps,
                    $ = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? Ct : ht,
                    B = !h && h !== 0,
                    P = Nt(t.scroller || xe),
                    E = J.core.getCache(P),
                    F = qi(P),
                    q = ("pinType" in t ? t.pinType : li(P, "pinType") || F && "fixed") === "fixed",
                    R = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                    X = B && t.toggleActions.split(" "),
                    G = "markers" in t ? t.markers : zo.markers,
                    ne = F ? 0 : parseFloat(Cr(P)["border" + $.p2 + En]) || 0,
                    O = this,
                    W = t.onRefreshInit && function() {
                        return t.onRefreshInit(O)
                    },
                    ee = pp(P, F, $),
                    re = gp(P, F),
                    le = 0,
                    Ce = 0,
                    fe = hi(P, $),
                    Le, ge, Yt, de, He, ue, qe, V, A, U, C, Z, ie, Ne, he, oe, De, Ie, st, ce, Ve, Ye, Sr, We, mt, pr, dt, Gt, bt, te, je, Xe, Ge, Be, Ae, wt, gr, tr;
                if (Na(O),
                    O._dir = $,
                    m *= 45,
                    O.scroller = P,
                    O.scroll = k ? k.time.bind(k) : fe,
                    de = fe(),
                    O.vars = t,
                    i = i || t.animation,
                    "refreshPriority" in t && (pf = 1,
                        t.refreshPriority === -9999 && (Mi = O)),
                    E.tweenScroll = E.tweenScroll || {
                        top: yu(P, ht),
                        left: yu(P, Ct)
                    },
                    O.tweenTo = Le = E.tweenScroll[$.p],
                    O.scrubDuration = function(x) {
                        je = Xn(x) && x,
                            je ? te ? te.duration(x) : te = J.to(i, {
                                ease: "expo",
                                totalProgress: "+=0.001",
                                duration: je,
                                paused: !0,
                                onComplete: function() {
                                    return v && v(O)
                                }
                            }) : (te && te.progress(1).kill(),
                                te = 0)
                    },
                    i && (i.vars.lazy = !1,
                        i._initted || i.vars.immediateRender !== !1 && t.immediateRender !== !1 && i.duration() && i.render(0, !0, !0),
                        O.animation = i.pause(),
                        i.scrollTrigger = O,
                        O.scrubDuration(h),
                        Gt = 0,
                        l || (l = i.vars.id)),
                    _e.push(O),
                    w && ((!Jo(w) || w.push) && (w = {
                            snapTo: w
                        }),
                        "scrollBehavior" in Je.style && J.set(F ? [Je, Dr] : P, {
                            scrollBehavior: "auto"
                        }),
                        Te.forEach(function(x) {
                            return Lt(x) && x.target === (F ? Ue.scrollingElement || Dr : P) && (x.smooth = !1)
                        }),
                        Yt = Lt(w.snapTo) ? w.snapTo : w.snapTo === "labels" ? _p(i) : w.snapTo === "labelsDirectional" ? yp(i) : w.directional !== !1 ? function(x, L) {
                            return yl(w.snapTo)(x, Dt() - Ce < 500 ? 0 : L.direction)
                        } :
                        J.utils.snap(w.snapTo),
                        Xe = w.duration || {
                            min: .1,
                            max: 2
                        },
                        Xe = Jo(Xe) ? sn(Xe.min, Xe.max) : sn(Xe, Xe),
                        Ge = J.delayedCall(w.delay || je / 2 || .1, function() {
                            var x = fe(),
                                L = Dt() - Ce < 500,
                                N = Le.tween;
                            if ((L || Math.abs(O.getVelocity()) < 10) && !N && !Cs && le !== x) {
                                var z = (x - ue) / ie,
                                    K = i && !B ? i.totalProgress() : z,
                                    Y = L ? 0 : (K - bt) / (Dt() - Zo) * 1e3 || 0,
                                    se = J.utils.clamp(-z, 1 - z, Ki(Y / 2) * Y / .185),
                                    Q = z + (w.inertia === !1 ? 0 : se),
                                    pe = sn(0, 1, Yt(Q, O)),
                                    ae = Math.round(ue + pe * ie),
                                    be = w,
                                    rt = be.onStart,
                                    we = be.onInterrupt,
                                    Me = be.onComplete;
                                if (x <= qe && x >= ue && ae !== x) {
                                    if (N && !N._initted && N.data <= Ki(ae - x))
                                        return;
                                    w.inertia === !1 && (se = pe - z),
                                        Le(ae, {
                                            duration: Xe(Ki(Math.max(Ki(Q - K), Ki(pe - K)) * .185 / Y / .05 || 0)),
                                            ease: w.ease || "power3",
                                            data: Ki(ae - x),
                                            onInterrupt: function() {
                                                return Ge.restart(!0) && we && we(O)
                                            },
                                            onComplete: function() {
                                                O.update(),
                                                    le = fe(),
                                                    Gt = bt = i && !B ? i.totalProgress() : O.progress,
                                                    y && y(O),
                                                    Me && Me(O)
                                            }
                                        }, x, se * ie, ae - x - se * ie),
                                        rt && rt(O, Le.tween)
                                }
                            } else
                                O.isActive && le !== x && Ge.restart(!0)
                        }).pause()),
                    l && (Ba[l] = O),
                    d = O.trigger = Nt(d || u),
                    tr = d && d._gsap && d._gsap.stRevert,
                    tr && (tr = tr(O)),
                    u = u === !0 ? d : Nt(u),
                    vr(a) && (a = {
                        targets: d,
                        className: a
                    }),
                    u && (p === !1 || p === ar || (p = !p && u.parentNode && u.parentNode.style && Cr(u.parentNode).display === "flex" ? !1 : nt),
                        O.pin = u,
                        ge = J.core.getCache(u),
                        ge.spacer ? Ne = ge.pinState : (T && (T = Nt(T),
                                T && !T.nodeType && (T = T.current || T.nativeElement),
                                ge.spacerIsNative = !!T,
                                T && (ge.spacerState = Vo(T))),
                            ge.spacer = De = T || Ue.createElement("div"),
                            De.classList.add("pin-spacer"),
                            l && De.classList.add("pin-spacer-" + l),
                            ge.pinState = Ne = Vo(u)),
                        t.force3D !== !1 && J.set(u, {
                            force3D: !0
                        }),
                        O.spacer = De = ge.spacer,
                        dt = Cr(u),
                        Sr = dt[p + $.os2],
                        st = J.getProperty(u),
                        ce = J.quickSetter(u, $.a, _t),
                        ra(u, De, dt),
                        oe = Vo(u)),
                    G) {
                    Z = Jo(G) ? fu(G, hu) : hu,
                        U = qo("scroller-start", l, P, $, Z, 0),
                        C = qo("scroller-end", l, P, $, Z, 0, U),
                        Ie = U["offset" + $.op.d2];
                    var j = Nt(li(P, "content") || P);
                    V = this.markerStart = qo("start", l, j, $, Z, Ie, 0, k),
                        A = this.markerEnd = qo("end", l, j, $, Z, Ie, 0, k),
                        k && (gr = J.quickSetter([V, A], $.a, _t)), !q && !(Ar.length && li(P, "fixedMarkers") === !0) && (mp(F ? Je : P),
                            J.set([U, C], {
                                force3D: !0
                            }),
                            mt = J.quickSetter(U, $.a, _t),
                            pr = J.quickSetter(C, $.a, _t))
                }
                if (k) {
                    var M = k.vars.onUpdate,
                        I = k.vars.onUpdateParams;
                    k.eventCallback("onUpdate", function() {
                        O.update(0, 0, 1),
                            M && M.apply(I || [])
                    })
                }
                O.previous = function() {
                        return _e[_e.indexOf(O) - 1]
                    },
                    O.next = function() {
                        return _e[_e.indexOf(O) + 1]
                    },
                    O.revert = function(x, L) {
                        if (!L)
                            return O.kill(!0);
                        var N = x !== !1 || !O.enabled,
                            z = xt;
                        N !== O.isReverted && (N && (Ae = Math.max(fe(), O.scroll.rec || 0),
                                Be = O.progress,
                                wt = i && i.progress()),
                            V && [V, A, U, C].forEach(function(K) {
                                return K.style.display = N ? "none" : "block"
                            }),
                            N && (xt = 1,
                                O.update(N)),
                            u && (N ? wp(u, De, Ne) : (!b || !O.isActive) && ra(u, De, Cr(u), We)),
                            N || O.update(N),
                            xt = z,
                            O.isReverted = N)
                    },
                    O.refresh = function(x, L) {
                        if (!((xt || !O.enabled) && !L)) {
                            if (u && x && hr) {
                                yt(o, "scrollEnd", kf);
                                return
                            }!br && W && W(O),
                                xt = 1,
                                Ce = Dt(),
                                Le.tween && (Le.tween.kill(),
                                    Le.tween = 0),
                                te && te.pause(),
                                g && i && i.revert({
                                    kill: !1
                                }).invalidate(),
                                O.isReverted || O.revert(!0, !0),
                                O._subPinOffset = !1;
                            for (var N = ee(), z = re(), K = k ? k.duration() : oi(P, $), Y = 0, se = 0, Q = t.end, pe = t.endTrigger || d, ae = t.start || (t.start === 0 || !d ? 0 : u ? "0 0" : "0 100%"), be = O.pinnedContainer = t.pinnedContainer && Nt(t.pinnedContainer), rt = d && Math.max(0, _e.indexOf(O)) || 0, we = rt, Me, me, Re, mr, Pe, Ze, Fr, Rs, kl, On; we--;)
                                Ze = _e[we],
                                Ze.end || Ze.refresh(0, 1) || (xt = 1),
                                Fr = Ze.pin,
                                Fr && (Fr === d || Fr === u) && !Ze.isReverted && (On || (On = []),
                                    On.unshift(Ze),
                                    Ze.revert(!0, !0)),
                                Ze !== _e[we] && (rt--,
                                    we--);
                            for (Lt(ae) && (ae = ae(O)),
                                ue = mu(ae, d, N, $, fe(), V, U, O, z, ne, q, K, k) || (u ? -.001 : 0),
                                Lt(Q) && (Q = Q(O)),
                                vr(Q) && !Q.indexOf("+=") && (~Q.indexOf(" ") ? Q = (vr(ae) ? ae.split(" ")[0] : "") + Q : (Y = es(Q.substr(2), N),
                                    Q = vr(ae) ? ae : ue + Y,
                                    pe = d)),
                                qe = Math.max(ue, mu(Q || (pe ? "100% 0" : K), pe, N, $, fe() + Y, A, C, O, z, ne, q, K, k)) || -.001,
                                ie = qe - ue || (ue -= .01) && .001,
                                Y = 0,
                                we = rt; we--;)
                                Ze = _e[we],
                                Fr = Ze.pin,
                                Fr && Ze.start - Ze._pinPush <= ue && !k && Ze.end > 0 && (Me = Ze.end - Ze.start,
                                    (Fr === d && Ze.start - Ze._pinPush < ue || Fr === be) && !Xn(ae) && (Y += Me * (1 - Ze.progress)),
                                    Fr === u && (se += Me));
                            if (ue += Y,
                                qe += Y,
                                O._pinPush = se,
                                V && Y && (Me = {},
                                    Me[$.a] = "+=" + Y,
                                    be && (Me[$.p] = "-=" + fe()),
                                    J.set([V, A], Me)),
                                u)
                                Me = Cr(u),
                                mr = $ === ht,
                                Re = fe(),
                                Ve = parseFloat(st($.a)) + se, !K && qe > 1 && ((F ? Je : P).style["overflow-" + $.a] = "scroll"),
                                ra(u, De, Me),
                                oe = Vo(u),
                                me = qr(u, !0),
                                Rs = q && hi(P, mr ? Ct : ht)(),
                                p && (We = [p + $.os2, ie + se + _t],
                                    We.t = De,
                                    we = p === nt ? Ia(u, $) + ie + se : 0,
                                    we && We.push($.d, we + _t),
                                    _n(We),
                                    be && _e.forEach(function(Dn) {
                                        Dn.pin === be && Dn.vars.pinSpacing !== !1 && (Dn._subPinOffset = !0)
                                    }),
                                    q && fe(Ae)),
                                q && (Pe = {
                                        top: me.top + (mr ? Re - ue : Rs) + _t,
                                        left: me.left + (mr ? Rs : Re - ue) + _t,
                                        boxSizing: "border-box",
                                        position: "fixed"
                                    },
                                    Pe[Ri] = Pe["max" + En] = Math.ceil(me.width) + _t,
                                    Pe[Fi] = Pe["max" + _l] = Math.ceil(me.height) + _t,
                                    Pe[ar] = Pe[ar + oo] = Pe[ar + io] = Pe[ar + so] = Pe[ar + no] = "0",
                                    Pe[nt] = Me[nt],
                                    Pe[nt + oo] = Me[nt + oo],
                                    Pe[nt + io] = Me[nt + io],
                                    Pe[nt + so] = Me[nt + so],
                                    Pe[nt + no] = Me[nt + no],
                                    he = Tp(Ne, Pe, b),
                                    br && fe(0)),
                                i ? (kl = i._initted,
                                    Qs(1),
                                    i.render(i.duration(), !0, !0),
                                    Ye = st($.a) - Ve + ie + se,
                                    ie !== Ye && q && he.splice(he.length - 2, 2),
                                    i.render(0, !0, !0),
                                    kl || i.invalidate(!0),
                                    i.parent || i.totalTime(i.totalTime()),
                                    Qs(0)) : Ye = ie;
                            else if (d && fe() && !k)
                                for (me = d.parentNode; me && me !== Je;)
                                    me._pinOffset && (ue -= me._pinOffset,
                                        qe -= me._pinOffset),
                                    me = me.parentNode;
                            On && On.forEach(function(Dn) {
                                    return Dn.revert(!1, !0)
                                }),
                                O.start = ue,
                                O.end = qe,
                                de = He = br ? Ae : fe(), !k && !br && (de < Ae && fe(Ae),
                                    O.scroll.rec = 0),
                                O.revert(!1, !0),
                                Ge && (le = -1,
                                    O.isActive && fe(ue + ie * Be),
                                    Ge.restart(!0)),
                                xt = 0,
                                i && B && (i._initted || wt) && i.progress() !== wt && i.progress(wt, !0).render(i.time(), !0, !0),
                                (Be !== O.progress || k) && (i && !B && i.totalProgress(Be, !0),
                                    O.progress = (de - ue) / ie === Be ? 0 : Be),
                                u && p && (De._pinOffset = Math.round(O.progress * Ye)),
                                f && !br && f(O)
                        }
                    },
                    O.getVelocity = function() {
                        return (fe() - He) / (Dt() - Zo) * 1e3 || 0
                    },
                    O.endAnimation = function() {
                        Rn(O.callbackAnimation),
                            i && (te ? te.progress(1) : i.paused() ? B || Rn(i, O.direction < 0, 1) : Rn(i, i.reversed()))
                    },
                    O.labelToScroll = function(x) {
                        return i && i.labels && (ue || O.refresh() || ue) + i.labels[x] / i.duration() * ie || 0
                    },
                    O.getTrailing = function(x) {
                        var L = _e.indexOf(O),
                            N = O.direction > 0 ? _e.slice(0, L).reverse() : _e.slice(L + 1);
                        return (vr(x) ? N.filter(function(z) {
                            return z.vars.preventOverlaps === x
                        }) : N).filter(function(z) {
                            return O.direction > 0 ? z.end <= ue : z.start >= qe
                        })
                    },
                    O.update = function(x, L, N) {
                        if (!(k && !N && !x)) {
                            var z = br ? Ae : O.scroll(),
                                K = x ? 0 : (z - ue) / ie,
                                Y = K < 0 ? 0 : K > 1 ? 1 : K || 0,
                                se = O.progress,
                                Q, pe, ae, be, rt, we, Me, me;
                            if (L && (He = de,
                                    de = k ? fe() : z,
                                    w && (bt = Gt,
                                        Gt = i && !B ? i.totalProgress() : Y)),
                                m && !Y && u && !xt && !Fo && hr && ue < z + (z - He) / (Dt() - Zo) * m && (Y = 1e-4),
                                Y !== se && O.enabled) {
                                if (Q = O.isActive = !!Y && Y < 1,
                                    pe = !!se && se < 1,
                                    we = Q !== pe,
                                    rt = we || !!Y != !!se,
                                    O.direction = Y > se ? 1 : -1,
                                    O.progress = Y,
                                    rt && !xt && (ae = Y && !se ? 0 : Y === 1 ? 1 : se === 1 ? 2 : 3,
                                        B && (be = !we && X[ae + 1] !== "none" && X[ae + 1] || X[ae],
                                            me = i && (be === "complete" || be === "reset" || be in i))),
                                    D && (we || me) && (me || h || !i) && (Lt(D) ? D(O) : O.getTrailing(D).forEach(function(Ze) {
                                        return Ze.endAnimation()
                                    })),
                                    B || (te && !xt && !Fo ? ((k || Mi && Mi !== O) && te.render(te._dp._time - te._start),
                                        te.resetTo ? te.resetTo("totalProgress", Y, i._tTime / i._tDur) : (te.vars.totalProgress = Y,
                                            te.invalidate().restart())) : i && i.totalProgress(Y, !!xt)),
                                    u) {
                                    if (x && p && (De.style[p + $.os2] = Sr), !q)
                                        ce(Vn(Ve + Ye * Y));
                                    else if (rt) {
                                        if (Me = !x && Y > se && qe + 1 > z && z + 1 >= oi(P, $),
                                            b)
                                            if (!x && (Q || Me)) {
                                                var Re = qr(u, !0),
                                                    mr = z - ue;
                                                _u(u, Je, Re.top + ($ === ht ? mr : 0) + _t, Re.left + ($ === ht ? 0 : mr) + _t)
                                            } else
                                                _u(u, De);
                                        _n(Q || Me ? he : oe),
                                            Ye !== ie && Y < 1 && Q || ce(Ve + (Y === 1 && !Me ? Ye : 0))
                                    }
                                }
                                w && !Le.tween && !xt && !Fo && Ge.restart(!0),
                                    a && (we || _ && Y && (Y < 1 || !Zs)) && xs(a.targets).forEach(function(Ze) {
                                        return Ze.classList[Q || _ ? "add" : "remove"](a.className)
                                    }),
                                    s && !B && !x && s(O),
                                    rt && !xt ? (B && (me && (be === "complete" ? i.pause().totalProgress(1) : be === "reset" ? i.restart(!0).pause() : be === "restart" ? i.restart(!0) : i[be]()),
                                            s && s(O)),
                                        (we || !Zs) && (c && we && ea(O, c),
                                            R[ae] && ea(O, R[ae]),
                                            _ && (Y === 1 ? O.kill(!1, 1) : R[ae] = 0),
                                            we || (ae = Y === 1 ? 1 : 3,
                                                R[ae] && ea(O, R[ae]))),
                                        S && !Q && Math.abs(O.getVelocity()) > (Xn(S) ? S : 2500) && (Rn(O.callbackAnimation),
                                            te ? te.progress(1) : Rn(i, be === "reverse" ? 1 : !Y, 1))) : B && s && !xt && s(O)
                            }
                            if (pr) {
                                var Pe = k ? z / k.duration() * (k._caScrollDist || 0) : z;
                                mt(Pe + (U._isFlipped ? 1 : 0)),
                                    pr(Pe)
                            }
                            gr && gr(-z / k.duration() * (k._caScrollDist || 0))
                        }
                    },
                    O.enable = function(x, L) {
                        O.enabled || (O.enabled = !0,
                            yt(P, "resize", Yn),
                            yt(F ? Ue : P, "scroll", Qi),
                            W && yt(o, "refreshInit", W),
                            x !== !1 && (O.progress = Be = 0,
                                de = He = le = fe()),
                            L !== !1 && O.refresh())
                    },
                    O.getTween = function(x) {
                        return x && Le ? Le.tween : te
                    },
                    O.setPositions = function(x, L) {
                        u && (Ve += x - ue,
                                Ye += L - x - ie,
                                p === nt && O.adjustPinSpacing(L - x - ie)),
                            O.start = ue = x,
                            O.end = qe = L,
                            ie = L - x,
                            O.update()
                    },
                    O.adjustPinSpacing = function(x) {
                        if (We) {
                            var L = We.indexOf($.d) + 1;
                            We[L] = parseFloat(We[L]) + x + _t,
                                We[1] = parseFloat(We[1]) + x + _t,
                                _n(We)
                        }
                    },
                    O.disable = function(x, L) {
                        if (O.enabled && (x !== !1 && O.revert(!0, !0),
                                O.enabled = O.isActive = !1,
                                L || te && te.pause(),
                                Ae = 0,
                                ge && (ge.uncache = 1),
                                W && pt(o, "refreshInit", W),
                                Ge && (Ge.pause(),
                                    Le.tween && Le.tween.kill() && (Le.tween = 0)), !F)) {
                            for (var N = _e.length; N--;)
                                if (_e[N].scroller === P && _e[N] !== O)
                                    return;
                            pt(P, "resize", Yn),
                                pt(P, "scroll", Qi)
                        }
                    },
                    O.kill = function(x, L) {
                        O.disable(x, L),
                            te && !L && te.kill(),
                            l && delete Ba[l];
                        var N = _e.indexOf(O);
                        N >= 0 && _e.splice(N, 1),
                            N === Ot && rs > 0 && Ot--,
                            N = 0,
                            _e.forEach(function(z) {
                                return z.scroller === O.scroller && (N = 1)
                            }),
                            N || br || (O.scroll.rec = 0),
                            i && (i.scrollTrigger = null,
                                x && i.revert({
                                    kill: !1
                                }),
                                L || i.kill()),
                            V && [V, A, U, C].forEach(function(z) {
                                return z.parentNode && z.parentNode.removeChild(z)
                            }),
                            Mi === O && (Mi = 0),
                            u && (ge && (ge.uncache = 1),
                                N = 0,
                                _e.forEach(function(z) {
                                    return z.pin === u && N++
                                }),
                                N || (ge.spacer = 0)),
                            t.onKill && t.onKill(O)
                    },
                    O.enable(!1, !1),
                    tr && tr(O), !i || !i.add || ie ? O.refresh() : J.delayedCall(.01, function() {
                        return ue || qe || O.refresh()
                    }) && (ie = .01) && (ue = qe = 0),
                    u && bp()
            },
            o.register = function(t) {
                return Ji || (J = t || bf(),
                        vf() && window.document && o.enable(),
                        Ji = No),
                    Ji
            },
            o.defaults = function(t) {
                if (t)
                    for (var i in t)
                        zo[i] = t[i];
                return zo
            },
            o.disable = function(t, i) {
                No = 0,
                    _e.forEach(function(s) {
                        return s[i ? "kill" : "disable"](t)
                    }),
                    pt(xe, "wheel", Qi),
                    pt(Ue, "scroll", Qi),
                    clearInterval(Ro),
                    pt(Ue, "touchcancel", Mr),
                    pt(Je, "touchstart", Mr),
                    Bo(pt, Ue, "pointerdown,touchstart,mousedown", uu),
                    Bo(pt, Ue, "pointerup,touchend,mouseup", cu),
                    ws.kill(),
                    Io(pt);
                for (var n = 0; n < Te.length; n += 3)
                    $o(pt, Te[n], Te[n + 1]),
                    $o(pt, Te[n], Te[n + 2])
            },
            o.enable = function() {
                if (xe = window,
                    Ue = document,
                    Dr = Ue.documentElement,
                    Je = Ue.body,
                    J && (xs = J.utils.toArray,
                        sn = J.utils.clamp,
                        Na = J.core.context || Mr,
                        Qs = J.core.suppressOverwrites || Mr,
                        pl = xe.history.scrollRestoration || "auto",
                        J.core.globals("ScrollTrigger", o),
                        Je)) {
                    No = 1,
                        tt.register(J),
                        o.isTouch = tt.isTouch,
                        Qr = tt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                        yt(xe, "wheel", Qi),
                        df = [xe, Ue, Dr, Je],
                        J.matchMedia ? (o.matchMedia = function(l) {
                                var c = J.matchMedia(),
                                    f;
                                for (f in l)
                                    c.add(f, l[f]);
                                return c
                            },
                            J.addEventListener("matchMediaInit", function() {
                                return vl()
                            }),
                            J.addEventListener("matchMediaRevert", function() {
                                return Mf()
                            }),
                            J.addEventListener("matchMedia", function() {
                                Ei(0, 1),
                                    Xi("matchMedia")
                            }),
                            J.matchMedia("(orientation: portrait)", function() {
                                return ta(),
                                    ta
                            })) : console.warn("Requires GSAP 3.11.0 or later"),
                        ta(),
                        yt(Ue, "scroll", Qi);
                    var t = Je.style,
                        i = t.borderTopStyle,
                        n = J.core.Animation.prototype,
                        s, a;
                    for (n.revert || Object.defineProperty(n, "revert", {
                            value: function() {
                                return this.time(-.01, !0)
                            }
                        }),
                        t.borderTopStyle = "solid",
                        s = qr(Je),
                        ht.m = Math.round(s.top + ht.sc()) || 0,
                        Ct.m = Math.round(s.left + Ct.sc()) || 0,
                        i ? t.borderTopStyle = i : t.removeProperty("border-top-style"),
                        Ro = setInterval(du, 250),
                        J.delayedCall(.5, function() {
                            return Fo = 0
                        }),
                        yt(Ue, "touchcancel", Mr),
                        yt(Je, "touchstart", Mr),
                        Bo(yt, Ue, "pointerdown,touchstart,mousedown", uu),
                        Bo(yt, Ue, "pointerup,touchend,mouseup", cu),
                        Fa = J.utils.checkPrefix("transform"),
                        is.push(Fa),
                        Ji = Dt(),
                        ws = J.delayedCall(.2, Ei).pause(),
                        en = [Ue, "visibilitychange", function() {
                            var l = xe.innerWidth,
                                c = xe.innerHeight;
                            Ue.hidden ? (au = l,
                                lu = c) : (au !== l || lu !== c) && Yn()
                        }, Ue, "DOMContentLoaded", Ei, xe, "load", Ei, xe, "resize", Yn],
                        Io(yt),
                        _e.forEach(function(l) {
                            return l.enable(0, 1)
                        }),
                        a = 0; a < Te.length; a += 3)
                        $o(pt, Te[a], Te[a + 1]),
                        $o(pt, Te[a], Te[a + 2])
                }
            },
            o.config = function(t) {
                "limitCallbacks" in t && (Zs = !!t.limitCallbacks);
                var i = t.syncInterval;
                i && clearInterval(Ro) || (Ro = i) && setInterval(du, i),
                    "ignoreMobileResize" in t && (mf = o.isTouch === 1 && t.ignoreMobileResize),
                    "autoRefreshEvents" in t && (Io(pt) || Io(yt, t.autoRefreshEvents || "none"),
                        gf = (t.autoRefreshEvents + "").indexOf("resize") === -1)
            },
            o.scrollerProxy = function(t, i) {
                var n = Nt(t),
                    s = Te.indexOf(n),
                    a = qi(n);
                ~s && Te.splice(s, a ? 6 : 2),
                    i && (a ? Ar.unshift(xe, i, Je, i, Dr, i) : Ar.unshift(n, i))
            },
            o.clearMatchMedia = function(t) {
                _e.forEach(function(i) {
                    return i._ctx && i._ctx.query === t && i._ctx.kill(!0, !0)
                })
            },
            o.isInViewport = function(t, i, n) {
                var s = (vr(t) ? Nt(t) : t).getBoundingClientRect(),
                    a = s[n ? Ri : Fi] * i || 0;
                return n ? s.right - a > 0 && s.left + a < xe.innerWidth : s.bottom - a > 0 && s.top + a < xe.innerHeight
            },
            o.positionInViewport = function(t, i, n) {
                vr(t) && (t = Nt(t));
                var s = t.getBoundingClientRect(),
                    a = s[n ? Ri : Fi],
                    l = i == null ? a / 2 : i in Ts ? Ts[i] * a : ~i.indexOf("%") ? parseFloat(i) * a / 100 : parseFloat(i) || 0;
                return n ? (s.left + l) / xe.innerWidth : (s.top + l) / xe.innerHeight
            },
            o.killAll = function(t) {
                if (_e.forEach(function(n) {
                        return n.vars.id !== "ScrollSmoother" && n.kill()
                    }),
                    t !== !0) {
                    var i = Vi.killAll || [];
                    Vi = {},
                        i.forEach(function(n) {
                            return n()
                        })
                }
            },
            o
    }();
ve.version = "3.11.3";
ve.saveStyles = function(o) {
    return o ? xs(o).forEach(function(e) {
        if (e && e.style) {
            var r = Wt.indexOf(e);
            r >= 0 && Wt.splice(r, 5),
                Wt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), J.core.getCache(e), Na())
        }
    }) : Wt
};
ve.revert = function(o, e) {
    return vl(!o, e)
};
ve.create = function(o, e) {
    return new ve(o, e)
};
ve.refresh = function(o) {
    return o ? Yn() : (Ji || ve.register()) && Ei(!0)
};
ve.update = Yi;
ve.clearScrollMemory = Pf;
ve.maxScroll = function(o, e) {
    return oi(o, e ? Ct : ht)
};
ve.getScrollFunc = function(o, e) {
    return hi(Nt(o), e ? Ct : ht)
};
ve.getById = function(o) {
    return Ba[o]
};
ve.getAll = function() {
    return _e.filter(function(o) {
        return o.vars.id !== "ScrollSmoother"
    })
};
ve.isScrolling = function() {
    return !!hr
};
ve.snapDirectional = yl;
ve.addEventListener = function(o, e) {
    var r = Vi[o] || (Vi[o] = []);
    ~r.indexOf(e) || r.push(e)
};
ve.removeEventListener = function(o, e) {
    var r = Vi[o],
        t = r && r.indexOf(e);
    t >= 0 && r.splice(t, 1)
};
ve.batch = function(o, e) {
    var r = [],
        t = {},
        i = e.interval || .016,
        n = e.batchMax || 1e9,
        s = function(c, f) {
            var h = [],
                d = [],
                u = J.delayedCall(i, function() {
                    f(h, d),
                        h = [],
                        d = []
                }).pause();
            return function(p) {
                h.length || u.restart(!0),
                    h.push(p.trigger),
                    d.push(p),
                    n <= h.length && u.progress(1)
            }
        },
        a;
    for (a in e)
        t[a] = a.substr(0, 2) === "on" && Lt(e[a]) && a !== "onRefreshInit" ? s(a, e[a]) : e[a];
    return Lt(n) && (n = n(),
            yt(ve, "refresh", function() {
                return n = e.batchMax()
            })),
        xs(o).forEach(function(l) {
            var c = {};
            for (a in t)
                c[a] = t[a];
            c.trigger = l,
                r.push(ve.create(c))
        }),
        r
};
var vu = function(e, r, t, i) {
        return r > i ? e(i) : r < 0 && e(0),
            t > i ? (i - r) / (t - r) : t < 0 ? r / (r - t) : 1
    },
    ia = function o(e, r) {
        r === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (tt.isTouch ? " pinch-zoom" : "") : "none",
            e === Dr && o(Je, r)
    },
    bu = {
        auto: 1,
        scroll: 1
    },
    kp = function(e) {
        var r = e.event,
            t = e.target,
            i = e.axis,
            n = (r.changedTouches ? r.changedTouches[0] : r).target,
            s = n._gsap || J.core.getCache(n),
            a = Dt(),
            l;
        if (!s._isScrollT || a - s._isScrollT > 2e3) {
            for (; n && n.scrollHeight <= n.clientHeight;)
                n = n.parentNode;
            s._isScroll = n && !qi(n) && n !== t && (bu[(l = Cr(n)).overflowY] || bu[l.overflowX]),
                s._isScrollT = a
        }
        (s._isScroll || i === "x") && (r.stopPropagation(),
            r._gsapAllow = !0)
    },
    Ef = function(e, r, t, i) {
        return tt.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: r,
            onWheel: i = i && kp,
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function() {
                return t && yt(Ue, tt.eventTypes[0], xu, !1, !0)
            },
            onDisable: function() {
                return pt(Ue, tt.eventTypes[0], xu, !0)
            }
        })
    },
    Mp = /(input|label|select|textarea)/i,
    wu, xu = function(e) {
        var r = Mp.test(e.target.tagName);
        (r || wu) && (e._gsapAllow = !0,
            wu = r)
    },
    Pp = function(e) {
        Jo(e) || (e = {}),
            e.preventDefault = e.isNormalizer = e.allowClicks = !0,
            e.type || (e.type = "wheel,touch"),
            e.debounce = !!e.debounce,
            e.id = e.id || "normalizer";
        var r = e,
            t = r.normalizeScrollX,
            i = r.momentum,
            n = r.allowNestedScroll,
            s, a, l = Nt(e.target) || Dr,
            c = J.core.globals().ScrollSmoother,
            f = c && c.get(),
            h = Qr && (e.content && Nt(e.content) || f && e.content !== !1 && !f.smooth() && f.content()),
            d = hi(l, ht),
            u = hi(l, Ct),
            p = 1,
            g = (tt.isTouch && xe.visualViewport ? xe.visualViewport.scale * xe.visualViewport.width : xe.outerWidth) / xe.innerWidth,
            m = 0,
            v = Lt(i) ? function() {
                return i(s)
            } :
            function() {
                return i || 2.8
            },
            y, _, w = Ef(l, e.type, !0, n),
            b = function() {
                return _ = !1
            },
            T = Mr,
            k = Mr,
            S = function() {
                a = oi(l, ht),
                    k = sn(Qr ? 1 : 0, a),
                    t && (T = sn(0, oi(l, Ct))),
                    y = Ni
            },
            D = function() {
                h._gsap.y = Vn(parseFloat(h._gsap.y) + d.offset) + "px",
                    h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)",
                    d.offset = d.cacheID = 0
            },
            $ = function() {
                if (_) {
                    requestAnimationFrame(b);
                    var X = Vn(s.deltaY / 2),
                        G = k(d.v - X);
                    if (h && G !== d.v + d.offset) {
                        d.offset = G - d.v;
                        var ne = Vn((parseFloat(h && h._gsap.y) || 0) - d.offset);
                        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + ne + ", 0, 1)",
                            h._gsap.y = ne + "px",
                            d.cacheID = Te.cache,
                            Yi()
                    }
                    return !0
                }
                d.offset && D(),
                    _ = !0
            },
            B, P, E, F, q = function() {
                S(),
                    B.isActive() && B.vars.scrollY > a && (d() > a ? B.progress(1) && d(a) : B.resetTo("scrollY", a))
            };
        return h && J.set(h, {
                y: "+=0"
            }),
            e.ignoreCheck = function(R) {
                return Qr && R.type === "touchmove" && $() || p > 1.05 && R.type !== "touchstart" || s.isGesturing || R.touches && R.touches.length > 1
            },
            e.onPress = function() {
                var R = p;
                p = Vn((xe.visualViewport && xe.visualViewport.scale || 1) / g),
                    B.pause(),
                    R !== p && ia(l, p > 1.01 ? !0 : t ? !1 : "x"),
                    P = u(),
                    E = d(),
                    S(),
                    y = Ni
            },
            e.onRelease = e.onGestureStart = function(R, X) {
                if (d.offset && D(), !X)
                    F.restart(!0);
                else {
                    Te.cache++;
                    var G = v(),
                        ne, O;
                    t && (ne = u(),
                            O = ne + G * .05 * -R.velocityX / .227,
                            G *= vu(u, ne, O, oi(l, Ct)),
                            B.vars.scrollX = T(O)),
                        ne = d(),
                        O = ne + G * .05 * -R.velocityY / .227,
                        G *= vu(d, ne, O, oi(l, ht)),
                        B.vars.scrollY = k(O),
                        B.invalidate().duration(G).play(.01),
                        (Qr && B.vars.scrollY >= a || ne >= a - 1) && J.to({}, {
                            onUpdate: q,
                            duration: G
                        })
                }
            },
            e.onWheel = function() {
                B._ts && B.pause(),
                    Dt() - m > 1e3 && (y = 0,
                        m = Dt())
            },
            e.onChange = function(R, X, G, ne, O) {
                if (Ni !== y && S(),
                    X && t && u(T(ne[2] === X ? P + (R.startX - R.x) : u() + X - ne[1])),
                    G) {
                    d.offset && D();
                    var W = O[2] === G,
                        ee = W ? E + R.startY - R.y : d() + G - O[1],
                        re = k(ee);
                    W && ee !== re && (E += re - ee),
                        d(re)
                }
                (G || X) && Yi()
            },
            e.onEnable = function() {
                ia(l, t ? !1 : "x"),
                    ve.addEventListener("refresh", q),
                    yt(xe, "resize", q),
                    d.smooth && (d.target.style.scrollBehavior = "auto",
                        d.smooth = u.smooth = !1),
                    w.enable()
            },
            e.onDisable = function() {
                ia(l, !0),
                    pt(xe, "resize", q),
                    ve.removeEventListener("refresh", q),
                    w.kill()
            },
            e.lockAxis = e.lockAxis !== !1,
            s = new tt(e),
            s.iOS = Qr,
            Qr && !d() && d(1),
            Qr && J.ticker.add(Mr),
            F = s._dc,
            B = J.to(s, {
                ease: "power4",
                paused: !0,
                scrollX: t ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                onComplete: F.vars.onComplete
            }),
            s
    };
ve.sort = function(o) {
    return _e.sort(o || function(e, r) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (r.start + (r.vars.refreshPriority || 0) * -1e6)
    })
};
ve.observe = function(o) {
    return new tt(o)
};
ve.normalizeScroll = function(o) {
    if (typeof o > "u")
        return Ht;
    if (o === !0 && Ht)
        return Ht.enable();
    if (o === !1)
        return Ht && Ht.kill();
    var e = o instanceof tt ? o : Pp(o);
    return Ht && Ht.target === e.target && Ht.kill(),
        qi(e.target) && (Ht = e),
        e
};
ve.core = {
    _getVelocityProp: Ra,
    _inputObserver: Ef,
    _scrollers: Te,
    _proxies: Ar,
    bridge: {
        ss: function() {
            hr || Xi("scrollStart"),
                hr = Dt()
        },
        ref: function() {
            return xt
        }
    }
};
bf() && J.registerPlugin(ve);
/*!
 * VelocityTracker: 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Pr, za, ao, Of, tn, an, qa, Df, Cf = function() {
        return Pr || typeof window < "u" && (Pr = window.gsap)
    },
    Va = {},
    Ep = function(e) {
        return Math.round(e * 1e4) / 1e4
    },
    Xa = function(e) {
        return Df(e).id
    },
    Gn = function(e) {
        return Va[Xa(typeof e == "string" ? ao(e)[0] : e)]
    },
    Tu = function(e) {
        var r = tn,
            t;
        if (e - qa >= .05)
            for (qa = e; r;)
                t = r.g(r.t, r.p),
                (t !== r.v1 || e - r.t1 > .2) && (r.v2 = r.v1,
                    r.v1 = t,
                    r.t2 = r.t1,
                    r.t1 = e),
                r = r._next
    },
    Op = {
        deg: 360,
        rad: Math.PI * 2
    },
    na = function() {
        Pr = Cf(),
            Pr && (ao = Pr.utils.toArray,
                Of = Pr.utils.getUnit,
                Df = Pr.core.getCache,
                an = Pr.ticker,
                za = 1)
    },
    Dp = function(e, r, t, i) {
        this.t = e,
            this.p = r,
            this.g = e._gsap.get,
            this.rCap = Op[t || Of(this.g(e, r))],
            this.v1 = this.v2 = 0,
            this.t1 = this.t2 = an.time,
            i && (this._next = i,
                i._prev = this)
    },
    ko = function() {
        function o(r, t) {
            za || na(),
                this.target = ao(r)[0],
                Va[Xa(this.target)] = this,
                this._props = {},
                t && this.add(t)
        }
        o.register = function(t) {
            Pr = t,
                na()
        };
        var e = o.prototype;
        return e.get = function(t, i) {
                var n = this._props[t] || console.warn("Not tracking " + t + " velocity."),
                    s, a, l;
                return s = parseFloat(i ? n.v1 : n.g(n.t, n.p)),
                    a = s - parseFloat(n.v2),
                    l = n.rCap,
                    l && (a = a % l,
                        a !== a % (l / 2) && (a = a < 0 ? a + l : a - l)),
                    Ep(a / ((i ? n.t1 : an.time) - n.t2))
            },
            e.getAll = function() {
                var t = {},
                    i = this._props,
                    n;
                for (n in i)
                    t[n] = this.get(n);
                return t
            },
            e.isTracking = function(t) {
                return t in this._props
            },
            e.add = function(t, i) {
                t in this._props || (tn || (an.add(Tu),
                        qa = an.time),
                    tn = this._props[t] = new Dp(this.target, t, i, tn))
            },
            e.remove = function(t) {
                var i = this._props[t],
                    n, s;
                i && (n = i._prev,
                    s = i._next,
                    n && (n._next = s),
                    s ? s._prev = n : tn === i && (an.remove(Tu),
                        tn = 0),
                    delete this._props[t])
            },
            e.kill = function(t) {
                for (var i in this._props)
                    this.remove(i);
                t || delete Va[Xa(this.target)]
            },
            o.track = function(t, i, n) {
                za || na();
                for (var s = [], a = ao(t), l = i.split(","), c = (n || "").split(","), f = a.length, h, d; f--;) {
                    for (h = Gn(a[f]) || new o(a[f]),
                        d = l.length; d--;)
                        h.add(l[d], c[d] || c[0]);
                    s.push(h)
                }
                return s
            },
            o.untrack = function(t, i) {
                var n = (i || "").split(",");
                ao(t).forEach(function(s) {
                    var a = Gn(s);
                    a && (n.length ? n.forEach(function(l) {
                        return a.remove(l)
                    }) : a.kill(1))
                })
            },
            o.isTracking = function(t, i) {
                var n = Gn(t);
                return n && n.isTracking(i)
            },
            o.getVelocity = function(t, i) {
                var n = Gn(t);
                return !n || !n.isTracking(i) ? console.warn("Not tracking velocity of " + i) : n.get(i)
            },
            o
    }();
ko.getByTarget = Gn;
Cf() && Pr.registerPlugin(ko);
/*!
 * InertiaPlugin 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var ct, Lf, Su, Af, Ya, lo, Rf, Ff, Nf, bl, If, uo, Ga, Bf, Ss = ko.getByTarget,
    $f = function() {
        return ct || typeof window < "u" && (ct = window.gsap) && ct.registerPlugin && ct
    },
    Cp = function(e) {
        return typeof e == "string"
    },
    wo = function(e) {
        return typeof e == "number"
    },
    ui = function(e) {
        return typeof e == "object"
    },
    Ha = function(e) {
        return typeof e == "function"
    },
    Lp = 1,
    zf = Array.isArray,
    Ap = function(e) {
        return e
    },
    Ii = 1e10,
    ku = 1 / Ii,
    qf = .05,
    Rp = function(e) {
        return Math.round(e * 1e4) / 1e4
    },
    Fp = function(e, r, t) {
        for (var i in r)
            !(i in e) && i !== t && (e[i] = r[i]);
        return e
    },
    Np = function o(e) {
        var r = {},
            t, i;
        for (t in e)
            r[t] = ui(i = e[t]) && !zf(i) ? o(i) : i;
        return r
    },
    Mu = function(e, r, t, i, n) {
        var s = r.length,
            a = 0,
            l = Ii,
            c, f, h, d;
        if (ui(e)) {
            for (; s--;) {
                c = r[s],
                    f = 0;
                for (h in e)
                    d = c[h] - e[h],
                    f += d * d;
                f < l && (a = s,
                    l = f)
            }
            if ((n || Ii) < Ii && n < Math.sqrt(l))
                return e
        } else
            for (; s--;)
                c = r[s],
                f = c - e,
                f < 0 && (f = -f),
                f < l && c >= i && c <= t && (a = s,
                    l = f);
        return r[a]
    },
    Vf = function(e, r, t, i, n, s, a) {
        if (e.end === "auto")
            return e;
        var l = e.end,
            c, f;
        if (t = isNaN(t) ? Ii : t,
            i = isNaN(i) ? -Ii : i,
            ui(r)) {
            if (c = r.calculated ? r : (Ha(l) ? l(r, a) : Mu(r, l, t, i, s)) || r, !r.calculated) {
                for (f in c)
                    r[f] = c[f];
                r.calculated = !0
            }
            c = c[n]
        } else
            c = Ha(l) ? l(r, a) : zf(l) ? Mu(r, l, t, i, s) : parseFloat(l);
        return c > t ? c = t : c < i && (c = i), {
            max: c,
            min: c,
            unitFactor: e.unitFactor
        }
    },
    ks = function(e, r, t) {
        return isNaN(e[r]) ? t : +e[r]
    },
    wl = function(e, r) {
        return r * qf * e / bl
    },
    Pu = function(e, r, t) {
        return Math.abs((r - e) * bl / t / qf)
    },
    Xf = {
        resistance: 1,
        checkpoint: 1,
        preventOvershoot: 1,
        linkedProps: 1,
        radius: 1,
        duration: 1
    },
    Yf = function(e, r, t, i) {
        if (r.linkedProps) {
            var n = r.linkedProps.split(","),
                s = {},
                a, l, c, f, h, d;
            for (a = 0; a < n.length; a++)
                l = n[a],
                c = r[l],
                c && (wo(c.velocity) ? f = c.velocity : (h = h || Ss(e),
                        f = h && h.isTracking(l) ? h.get(l) : 0),
                    d = Math.abs(f / ks(c, "resistance", i)),
                    s[l] = parseFloat(t(e, l)) + wl(f, d));
            return s
        }
    },
    Ip = function(e, r, t, i, n, s) {
        if (t === void 0 && (t = 10),
            i === void 0 && (i = .2),
            n === void 0 && (n = 1),
            s === void 0 && (s = 0),
            Cp(e) && (e = Af(e)[0]), !e)
            return 0;
        var a = 0,
            l = Ii,
            c = r.inertia || r,
            f = Nf(e).get,
            h = ks(c, "resistance", lo.resistance),
            d, u, p, g, m, v, y, _, w, b;
        b = Yf(e, c, f, h);
        for (d in c)
            Xf[d] || (u = c[d],
                ui(u) || (_ = _ || Ss(e),
                    _ && _.isTracking(d) ? u = wo(u) ? {
                        velocity: u
                    } : {
                        velocity: _.get(d)
                    } : (g = +u || 0,
                        p = Math.abs(g / h))),
                ui(u) && (wo(u.velocity) ? g = u.velocity : (_ = _ || Ss(e),
                        g = _ && _.isTracking(d) ? _.get(d) : 0),
                    p = If(i, t, Math.abs(g / ks(u, "resistance", h))),
                    m = parseFloat(f(e, d)) || 0,
                    v = m + wl(g, p),
                    "end" in u && (u = Vf(u, b && d in b ? b : v, u.max, u.min, d, c.radius, g),
                        s && (uo === r && (uo = c = Np(r)),
                            c[d] = Fp(u, c[d], "end"))),
                    "max" in u && v > +u.max + ku ? (w = u.unitFactor || lo.unitFactors[d] || 1,
                        y = m > u.max && u.min !== u.max || g * w > -15 && g * w < 45 ? i + (t - i) * .1 : Pu(m, u.max, g),
                        y + n < l && (l = y + n)) : "min" in u && v < +u.min - ku && (w = u.unitFactor || lo.unitFactors[d] || 1,
                        y = m < u.min && u.min !== u.max || g * w > -45 && g * w < 15 ? i + (t - i) * .1 : Pu(m, u.min, g),
                        y + n < l && (l = y + n)),
                    y > a && (a = y)),
                p > a && (a = p));
        return a > l && (a = l),
            a > t ? t : a < i ? i : a
    },
    Eu = function() {
        ct = $f(),
            ct && (Su = ct.parseEase,
                Af = ct.utils.toArray,
                Rf = ct.utils.getUnit,
                Nf = ct.core.getCache,
                If = ct.utils.clamp,
                Ga = ct.core.getStyleSaver,
                Bf = ct.core.reverting || function() {},
                Ya = Su("power3"),
                bl = Ya(.05),
                Ff = ct.core.PropTween,
                ct.config({
                    resistance: 100,
                    unitFactors: {
                        time: 1e3,
                        totalTime: 1e3,
                        progress: 1e3,
                        totalProgress: 1e3
                    }
                }),
                lo = ct.config(),
                ct.registerPlugin(ko),
                Lf = 1)
    },
    xl = {
        version: "3.11.3",
        name: "inertia",
        register: function(e) {
            ct = e,
                Eu()
        },
        init: function(e, r, t, i, n) {
            Lf || Eu();
            var s = Ss(e);
            if (r === "auto") {
                if (!s) {
                    console.warn("No inertia tracking on " + e + ". InertiaPlugin.track(target) first.");
                    return
                }
                r = s.getAll()
            }
            this.styles = Ga && typeof e.style == "object" && Ga(e),
                this.target = e,
                this.tween = t,
                uo = r;
            var a = e._gsap,
                l = a.get,
                c = r.duration,
                f = ui(c),
                h = r.preventOvershoot || f && c.overshoot === 0,
                d = ks(r, "resistance", lo.resistance),
                u = wo(c) ? c : Ip(e, r, f && c.max || 10, f && c.min || .2, f && "overshoot" in c ? +c.overshoot : h ? 0 : 1, !0),
                p, g, m, v, y, _, w, b, T;
            r = uo,
                uo = 0,
                T = Yf(e, r, l, d);
            for (p in r)
                Xf[p] || (g = r[p],
                    Ha(g) && (g = g(i, e, n)),
                    wo(g) ? y = g : ui(g) && !isNaN(g.velocity) ? y = +g.velocity : s && s.isTracking(p) ? y = s.get(p) : console.warn("ERROR: No velocity was defined for " + e + " property: " + p),
                    _ = wl(y, u),
                    b = 0,
                    m = l(e, p),
                    v = Rf(m),
                    m = parseFloat(m),
                    ui(g) && (w = m + _,
                        "end" in g && (g = Vf(g, T && p in T ? T : w, g.max, g.min, p, r.radius, y)),
                        "max" in g && +g.max < w ? h || g.preventOvershoot ? _ = g.max - m : b = g.max - m - _ : "min" in g && +g.min > w && (h || g.preventOvershoot ? _ = g.min - m : b = g.min - m - _)),
                    this._props.push(p),
                    this.styles && this.styles.save(p),
                    this._pt = new Ff(this._pt, e, p, m, 0, Ap, 0, a.set(e, p, this)),
                    this._pt.u = v || 0,
                    this._pt.c1 = _,
                    this._pt.c2 = b);
            return t.duration(u),
                Lp
        },
        render: function(e, r) {
            var t = r._pt;
            if (e = Ya(r.tween._time / r.tween._dur),
                e || !Bf())
                for (; t;)
                    t.set(t.t, t.p, Rp(t.s + t.c1 * e + t.c2 * e * e) + t.u, t.d, e),
                    t = t._next;
            else
                r.styles.revert()
        }
    };
"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(o) {
    return xl[o] = ko[o]
});
$f() && ct.registerPlugin(xl);

function Ou(o, e) {
    for (var r = 0; r < e.length; r++) {
        var t = e[r];
        t.enumerable = t.enumerable || !1,
            t.configurable = !0,
            "value" in t && (t.writable = !0),
            Object.defineProperty(o, t.key, t)
    }
}

function Bp(o, e, r) {
    return e && Ou(o.prototype, e),
        r && Ou(o, r),
        o
}
/*!
 * ScrollSmoother 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Ee, Xo, Rt, ln, Hn, kr, Ti, Du, ye, Er, Yo, Cu, Lu, Au, Ru, Gf = function() {
        return typeof window < "u"
    },
    Hf = function() {
        return Ee || Gf() && (Ee = window.gsap) && Ee.registerPlugin && Ee
    },
    $p = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    zp = function(e, r) {
        var t = e.parentNode || Hn,
            i = e.getBoundingClientRect(),
            n = t.getBoundingClientRect(),
            s = n.top - i.top,
            a = n.bottom - i.bottom,
            l = (Math.abs(s) > Math.abs(a) ? s : a) / (1 - r),
            c = -l * r,
            f, h;
        return l > 0 && (f = n.height / (Rt.innerHeight + n.height),
            h = f === .5 ? n.height * 2 : Math.min(n.height, -l * f / (2 * f - 1)) * 2 * (r || 1),
            c += r ? -h * r : -h / 2,
            l += h), {
            change: l,
            offset: c
        }
    },
    qp = function(e) {
        var r = ln.querySelector(".ScrollSmoother-wrapper");
        return r || (r = ln.createElement("div"),
                r.classList.add("ScrollSmoother-wrapper"),
                e.parentNode.insertBefore(r, e),
                r.appendChild(e)),
            r
    },
    di = function() {
        function o(e) {
            var r = this;
            Xo || o.register(Ee) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
                e = this.vars = e || {},
                Er && Er.kill(),
                Er = this,
                Au(this);
            var t = e,
                i = t.smoothTouch,
                n = t.onUpdate,
                s = t.onStop,
                a = t.smooth,
                l = t.onFocusIn,
                c = t.normalizeScroll,
                f, h, d, u, p, g, m, v, y, _, w, b, T, k = this,
                S = typeof ResizeObserver < "u" && e.autoResize !== !1 && new ResizeObserver(function() {
                    return ye.isRefreshing || Ru.restart(!0)
                }),
                D = e.effectsPrefix || "",
                $ = ye.getScrollFunc(Rt),
                B = ye.isTouch === 1 ? i === !0 ? .8 : parseFloat(i) || 0 : a === 0 || a === !1 ? 0 : parseFloat(a) || .8,
                P = 0,
                E = 0,
                F = 1,
                q = Cu(0),
                R = function() {
                    return q.update(-P)
                },
                X = {
                    y: 0
                },
                G = function() {
                    return f.style.overflow = "visible"
                },
                ne, O = function(A) {
                    A.update();
                    var U = A.getTween();
                    U && (U.pause(),
                            U._time = U._dur,
                            U._tTime = U._tDur),
                        ne = !1,
                        A.animation.progress(A.progress, !0)
                },
                W = function(A, U) {
                    (A !== P && !_ || U) && (B && (f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + A + ", 0, 1)",
                            f._gsap.y = A + "px"),
                        E = A - P,
                        P = A,
                        ye.isUpdating || ye.update())
                },
                ee = function(A) {
                    return arguments.length ? (A < 0 && (A = 0),
                        X.y = -A,
                        ne = !0,
                        _ ? P = -A : W(-A),
                        ye.isRefreshing ? u.update() : $(A),
                        this) : -P
                },
                re, le = function(A) {
                    h.scrollTop = 0, !(A.target.contains && A.target.contains(h) || l && l(r, A) === !1) && (ye.isInViewport(A.target) || A.target === re || r.scrollTo(A.target, !1, "center center"),
                        re = A.target)
                },
                Ce = function(A, U) {
                    var C, Z, ie, Ne;
                    p.forEach(function(he) {
                        C = he.pins,
                            Ne = he.markers,
                            A.forEach(function(oe) {
                                he.trigger && oe.trigger && he !== oe && (oe.trigger === he.trigger || oe.pinnedContainer === he.trigger || he.trigger.contains(oe.trigger)) && (Z = oe.start,
                                    ie = (Z - he.start - he.offset) / he.ratio - (Z - he.start),
                                    C.forEach(function(De) {
                                        return ie -= De.distance / he.ratio - De.distance
                                    }),
                                    oe.setPositions(Z + ie, oe.end + ie),
                                    oe.markerStart && Ne.push(Ee.quickSetter([oe.markerStart, oe.markerEnd], "y", "px")),
                                    oe.pin && oe.end > 0 && (ie = oe.end - oe.start,
                                        C.push({
                                            start: oe.start,
                                            end: oe.end,
                                            distance: ie,
                                            trig: oe
                                        }),
                                        he.setPositions(he.start, he.end + ie),
                                        he.vars.onRefresh(he)))
                            })
                    })
                },
                fe = function() {
                    G(),
                        requestAnimationFrame(G),
                        p && (p.forEach(function(A) {
                                var U = A.start,
                                    C = A.auto ? Math.min(ye.maxScroll(A.scroller), A.end) : U + (A.end - U) / A.ratio,
                                    Z = (C - A.end) / 2;
                                U -= Z,
                                    C -= Z,
                                    A.offset = Z || 1e-4,
                                    A.pins.length = 0,
                                    A.setPositions(Math.min(U, C), Math.max(U, C)),
                                    A.vars.onRefresh(A)
                            }),
                            Ce(ye.sort())),
                        q.reset()
                },
                Le = function() {
                    return ye.addEventListener("refresh", fe)
                },
                ge = function() {
                    return p && p.forEach(function(A) {
                        return A.vars.onRefresh(A)
                    })
                },
                Yt = function() {
                    return p && p.forEach(function(A) {
                            return A.vars.onRefreshInit(A)
                        }),
                        ge
                },
                de = function(A, U, C, Z) {
                    return function() {
                        var ie = typeof U == "function" ? U(C, Z) : U;
                        return ie || ie === 0 || (ie = Z.getAttribute("data-" + D + A) || (A === "speed" ? 1 : 0)),
                            Z.setAttribute("data-" + D + A, ie),
                            ie === "auto" ? ie : parseFloat(ie)
                    }
                },
                He = function(A, U, C, Z) {
                    var ie = de("speed", U, Z, A),
                        Ne = de("lag", C, Z, A),
                        he = Ee.getProperty(A, "y"),
                        oe = A._gsap,
                        De, Ie, st, ce, Ve, Ye, Sr = function() {
                            U = ie(),
                                C = Ne(),
                                De = parseFloat(U) || 1,
                                st = U === "auto",
                                Ve = st ? 0 : .5,
                                ce && ce.kill(),
                                ce = C && Ee.to(A, {
                                    ease: Yo,
                                    overwrite: !1,
                                    y: "+=0",
                                    duration: C
                                }),
                                Ie && (Ie.ratio = De,
                                    Ie.autoSpeed = st)
                        },
                        We = function() {
                            oe.y = he + "px",
                                oe.renderTransform(1),
                                Sr()
                        },
                        mt = [],
                        pr = [],
                        dt = 0,
                        Gt = function(te) {
                            if (st) {
                                We();
                                var je = zp(A, Du(0, 1, -te.start / (te.end - te.start)));
                                dt = je.change,
                                    Ye = je.offset
                            } else
                                dt = (te.end - te.start) * (1 - De),
                                Ye = 0;
                            mt.forEach(function(Xe) {
                                    return dt -= Xe.distance * (1 - De)
                                }),
                                te.vars.onUpdate(te),
                                ce && ce.progress(1)
                        };
                    return Sr(),
                        (De !== 1 || st || ce) && (Ie = ye.create({
                                trigger: st ? A.parentNode : A,
                                scroller: h,
                                scrub: !0,
                                refreshPriority: -999,
                                onRefreshInit: We,
                                onRefresh: Gt,
                                onKill: function(te) {
                                    var je = p.indexOf(te);
                                    je >= 0 && p.splice(je, 1),
                                        We()
                                },
                                onUpdate: function(te) {
                                    var je = he + dt * (te.progress - Ve),
                                        Xe = mt.length,
                                        Ge = 0,
                                        Be, Ae, wt;
                                    if (te.offset) {
                                        if (Xe) {
                                            for (Ae = -P,
                                                wt = te.end; Xe--;) {
                                                if (Be = mt[Xe],
                                                    Be.trig.isActive || Ae >= Be.start && Ae <= Be.end) {
                                                    ce && (Be.trig.progress += Be.trig.direction < 0 ? .001 : -.001,
                                                        Be.trig.update(0, 0, 1),
                                                        ce.resetTo("y", parseFloat(oe.y), -E, !0),
                                                        F && ce.progress(1));
                                                    return
                                                }
                                                Ae > Be.end && (Ge += Be.distance),
                                                    wt -= Be.distance
                                            }
                                            je = he + Ge + dt * ((Ee.utils.clamp(te.start, te.end, Ae) - te.start - Ge) / (wt - te.start) - Ve)
                                        }
                                        je = $p(je + Ye),
                                            pr.length && !st && pr.forEach(function(gr) {
                                                return gr(je - Ge)
                                            }),
                                            ce ? (ce.resetTo("y", je, -E, !0),
                                                F && ce.progress(1)) : (oe.y = je + "px",
                                                oe.renderTransform(1))
                                    }
                                }
                            }),
                            Gt(Ie),
                            Ee.core.getCache(Ie.trigger).stRevert = Yt,
                            Ie.startY = he,
                            Ie.pins = mt,
                            Ie.markers = pr,
                            Ie.ratio = De,
                            Ie.autoSpeed = st,
                            A.style.willChange = "transform"),
                        Ie
                };
            Le(),
                ye.addEventListener("killAll", Le),
                Ee.delayedCall(.5, function() {
                    return F = 0
                }),
                this.scrollTop = ee,
                this.scrollTo = function(V, A, U) {
                    var C = Ee.utils.clamp(0, ye.maxScroll(Rt), isNaN(V) ? r.offset(V, U) : +V);
                    A ? _ ? Ee.to(r, {
                        duration: B,
                        scrollTop: C,
                        overwrite: "auto",
                        ease: Yo
                    }) : $(C) : ee(C)
                },
                this.offset = function(V, A) {
                    V = Ti(V)[0];
                    var U = V.style.cssText,
                        C = ye.create({
                            trigger: V,
                            start: A || "top top"
                        }),
                        Z;
                    return p && Ce([C]),
                        Z = C.start,
                        C.kill(!1),
                        V.style.cssText = U,
                        Ee.core.getCache(V).uncache = 1,
                        Z
                };

            function ue() {
                return d = f.clientHeight,
                    f.style.overflow = "visible",
                    kr.style.height = d + "px",
                    d - Rt.innerHeight
            }
            this.content = function(V) {
                    if (arguments.length) {
                        var A = Ti(V || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || kr.children[0];
                        return A !== f && (f = A,
                                y = f.getAttribute("style") || "",
                                S && S.observe(f),
                                Ee.set(f, {
                                    overflow: "visible",
                                    width: "100%",
                                    boxSizing: "border-box",
                                    y: "+=0"
                                }),
                                B || Ee.set(f, {
                                    clearProps: "transform"
                                })),
                            this
                    }
                    return f
                },
                this.wrapper = function(V) {
                    return arguments.length ? (h = Ti(V || "#smooth-wrapper")[0] || qp(f),
                        v = h.getAttribute("style") || "",
                        ue(),
                        Ee.set(h, B ? {
                            overflow: "hidden",
                            position: "fixed",
                            height: "100%",
                            width: "100%",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        } : {
                            overflow: "visible",
                            position: "relative",
                            width: "100%",
                            height: "auto",
                            top: "auto",
                            bottom: "auto",
                            left: "auto",
                            right: "auto"
                        }),
                        this) : h
                },
                this.effects = function(V, A) {
                    var U;
                    if (p || (p = []), !V)
                        return p.slice(0);
                    V = Ti(V),
                        V.forEach(function(De) {
                            for (var Ie = p.length; Ie--;)
                                p[Ie].trigger === De && p[Ie].kill()
                        }),
                        A = A || {};
                    var C = A,
                        Z = C.speed,
                        ie = C.lag,
                        Ne = [],
                        he, oe;
                    for (he = 0; he < V.length; he++)
                        oe = He(V[he], Z, ie, he),
                        oe && Ne.push(oe);
                    return (U = p).push.apply(U, Ne),
                        Ne
                },
                this.sections = function(V, A) {
                    var U;
                    if (g || (g = []), !V)
                        return g.slice(0);
                    var C = Ti(V).map(function(Z) {
                        return ye.create({
                            trigger: Z,
                            start: "top 120%",
                            end: "bottom -20%",
                            onToggle: function(Ne) {
                                Z.style.opacity = Ne.isActive ? "1" : "0",
                                    Z.style.pointerEvents = Ne.isActive ? "all" : "none"
                            }
                        })
                    });
                    return A && A.add ? (U = g).push.apply(U, C) : g = C.slice(0),
                        C
                },
                this.content(e.content),
                this.wrapper(e.wrapper),
                this.render = function(V) {
                    return W(V || V === 0 ? V : P)
                },
                this.getVelocity = function() {
                    return q.getVelocity(-P)
                },
                ye.scrollerProxy(h, {
                    scrollTop: ee,
                    scrollHeight: function() {
                        return ue() && kr.scrollHeight
                    },
                    fixedMarkers: e.fixedMarkers !== !1 && !!B,
                    content: f,
                    getBoundingClientRect: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: Rt.innerWidth,
                            height: Rt.innerHeight
                        }
                    }
                }),
                ye.defaults({
                    scroller: h
                });
            var qe = ye.getAll().filter(function(V) {
                return V.scroller === Rt || V.scroller === h
            });
            qe.forEach(function(V) {
                    return V.revert(!0)
                }),
                u = ye.create({
                    animation: Ee.fromTo(X, {
                        y: 0
                    }, {
                        y: function() {
                            return -ue()
                        },
                        immediateRender: !1,
                        ease: "none",
                        data: "ScrollSmoother",
                        duration: 100,
                        onUpdate: function() {
                            if (this._dur) {
                                var A = ne;
                                A && (O(u),
                                        X.y = P),
                                    W(X.y, A),
                                    R(),
                                    n && !_ && n(k)
                            }
                        }
                    }),
                    onRefreshInit: function(A) {
                        if (p) {
                            var U = ye.getAll().filter(function(Z) {
                                return !!Z.pin
                            });
                            p.forEach(function(Z) {
                                Z.vars.pinnedContainer || U.forEach(function(ie) {
                                    if (ie.pin.contains(Z.trigger)) {
                                        var Ne = Z.vars;
                                        Ne.pinnedContainer = ie.pin,
                                            Z.vars = null,
                                            Z.init(Ne, Z.animation)
                                    }
                                })
                            })
                        }
                        var C = A.getTween();
                        T = C && C._end > C._dp._time,
                            b = P,
                            X.y = 0,
                            B && (h.style.pointerEvents = "none",
                                h.scrollTop = 0,
                                setTimeout(function() {
                                    return h.style.removeProperty("pointer-events")
                                }, 50))
                    },
                    onRefresh: function(A) {
                        A.animation.invalidate(),
                            A.setPositions(A.start, ue()),
                            T || O(A),
                            X.y = -$(),
                            W(X.y),
                            F || A.animation.progress(Ee.utils.clamp(0, 1, b / -A.end)),
                            T && (A.progress -= .001,
                                A.update())
                    },
                    id: "ScrollSmoother",
                    scroller: Rt,
                    invalidateOnRefresh: !0,
                    start: 0,
                    refreshPriority: -9999,
                    end: ue,
                    onScrubComplete: function() {
                        q.reset(),
                            s && s(r)
                    },
                    scrub: B || !0
                }),
                this.smooth = function(V) {
                    return arguments.length && (B = V || 0),
                        arguments.length ? u.scrubDuration(V) : u.getTween() ? u.getTween().duration() : 0
                },
                u.getTween() && (u.getTween().vars.ease = e.ease || Yo),
                this.scrollTrigger = u,
                e.effects && this.effects(e.effects === !0 ? "[data-" + D + "speed], [data-" + D + "lag]" : e.effects, {}),
                e.sections && this.sections(e.sections === !0 ? "[data-section]" : e.sections),
                qe.forEach(function(V) {
                    V.vars.scroller = h,
                        V.init(V.vars, V.animation)
                }),
                this.paused = function(V, A) {
                    return arguments.length ? (!!_ !== V && (V ? (u.getTween() && u.getTween().pause(),
                            $(-P),
                            q.reset(),
                            w = ye.normalizeScroll(),
                            w && w.disable(),
                            _ = ye.observe({
                                preventDefault: !0,
                                type: "wheel,touch,scroll",
                                debounce: !1,
                                allowClicks: !0,
                                onChangeY: function() {
                                    return ee(-P)
                                }
                            }),
                            _.nested = Lu(Hn, "wheel,touch,scroll", !0, A !== !1)) : (_.nested.kill(),
                            _.kill(),
                            _ = 0,
                            w && w.enable(),
                            u.progress = (-P - u.start) / (u.end - u.start),
                            O(u))),
                        this) : !!_
                },
                this.kill = this.revert = function() {
                    r.paused(!1),
                        O(u),
                        u.kill();
                    for (var V = (p || []).concat(g || []), A = V.length; A--;)
                        V[A].kill();
                    ye.scrollerProxy(h),
                        ye.removeEventListener("killAll", Le),
                        ye.removeEventListener("refresh", fe),
                        h.style.cssText = v,
                        f.style.cssText = y;
                    var U = ye.defaults({});
                    U && U.scroller === h && ye.defaults({
                            scroller: Rt
                        }),
                        r.normalizer && ye.normalizeScroll(!1),
                        clearInterval(m),
                        Er = null,
                        S && S.disconnect(),
                        kr.style.removeProperty("height"),
                        Rt.removeEventListener("focusin", le)
                },
                this.refresh = function(V, A) {
                    return u.refresh(V, A)
                },
                c && (this.normalizer = ye.normalizeScroll(c === !0 ? {
                    debounce: !0,
                    content: !B && f
                } : c)),
                ye.config(e),
                "overscrollBehavior" in Rt.getComputedStyle(kr) && Ee.set([kr, Hn], {
                    overscrollBehavior: "none"
                }),
                "scrollBehavior" in Rt.getComputedStyle(kr) && Ee.set([kr, Hn], {
                    scrollBehavior: "auto"
                }),
                Rt.addEventListener("focusin", le),
                m = setInterval(R, 250),
                ln.readyState === "loading" || requestAnimationFrame(function() {
                    return ye.refresh()
                })
        }
        return o.register = function(r) {
                return Xo || (Ee = r || Hf(),
                        Gf() && window.document && (Rt = window,
                            ln = document,
                            Hn = ln.documentElement,
                            kr = ln.body),
                        Ee && (Ti = Ee.utils.toArray,
                            Du = Ee.utils.clamp,
                            Yo = Ee.parseEase("expo"),
                            Au = Ee.core.context || function() {},
                            Ru = Ee.delayedCall(.2, function() {
                                return ye.isRefreshing || Er && Er.refresh()
                            }).pause(),
                            ye = Ee.core.globals().ScrollTrigger,
                            Ee.core.globals("ScrollSmoother", o),
                            kr && ye && (Cu = ye.core._getVelocityProp,
                                Lu = ye.core._inputObserver,
                                o.refresh = ye.refresh,
                                Xo = 1))),
                    Xo
            },
            Bp(o, [{
                key: "progress",
                get: function() {
                    return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
                }
            }]),
            o
    }();
di.version = "3.11.3";
di.create = function(o) {
    return Er && o && Er.content() === Ti(o.content)[0] ? Er : new di(o)
};
di.get = function() {
    return Er
};
Hf() && Ee.registerPlugin(di);
class Mt {
    constructor(e) {
        this.block = e,
            this.init(),
            this.initEvents()
    }
    init() {}
    initEvents() {}
}
const Ls = (o = () => {}) => {
    H.matchMedia().add("(prefers-reduced-motion: no-preference)", o)
};
class Vp extends Mt {
    init() {
        let e = "%c 💚 Our site is very new. Let us know if you find any issues 💚",
            r = ["font-size: 12px", "color: #fffce1", "font-family: monospace", "background: #0e100f", "display: inline-block", "padding: 1rem 3rem", "border: 1px solid #fffce1", "border-radius: 4px;"].join(";");
        console.log(e, r),
            this.selector = H.utils.selector("header.header");
        const t = {
            toggle: document.getElementById("menu-toggle"),
            notifsToggle: document.querySelectorAll(".js-repopulate"),
            userHeader: document.querySelector(".js-account-dropdown"),
            headerLinks: document.querySelectorAll(".header__menu-link"),
            mobileNav: document.getElementById("mobile-nav"),
            mobileNavToggle: document.getElementById("mobile-nav-toggle"),
            mobileNavBackground: document.getElementById("mobile-nav-background"),
            mobileNavPanel1: document.getElementById("mobile-nav-panel-1"),
            mobileNavPanel2: document.getElementById("mobile-nav-panel-2"),
            accordion: document.getElementById("mobile-nav-accordion"),
            accordionIconPaths: document.querySelectorAll("#accordion-icon path"),
            get togglePaths() {
                return t.toggle.querySelectorAll("path")
            },
            get togglePathTop() {
                return t.togglePaths[0]
            },
            get togglePathMiddle() {
                return t.togglePaths[1]
            },
            get togglePathBottom() {
                return t.togglePaths[2]
            },
            subMenus: document.querySelectorAll(".header__menu-item--has-submenu"),
            logo: this.selector(".header__logo")[0],
            logoLetters: this.selector(".header__logo-text svg"),
            logoLettersPath: this.selector(".header__logo-text svg path"),
            logoG: this.selector(".header__logo-text svg:first-of-type path"),
            logoGLine: this.selector(".header__logo-text span"),
            logoS: this.selector(".header__logo-text svg:last-of-type path:first-of-type"),
            logoA: this.selector(".header__logo-text svg:last-of-type path:nth-of-type(2)"),
            logoP: this.selector(".header__logo-text svg:last-of-type path:last-of-type"),
            logoTimer: this.selector(".header__logo > svg:nth-of-type(1)"),
            logoBolt: this.selector(".header__logo > svg:nth-of-type(2)"),
            logoKeyHole: this.selector(".header__logo > svg:nth-of-type(3)"),
            logoFlower: this.selector(".header__logo > svg:nth-of-type(4)"),
            logoLine: this.selector(".header__logo-text-line"),
            mobileLoginOpen: document.getElementById("mobile-login-open"),
            mobileLoginClose: document.getElementById("mobile-login-close"),
            mobileAccountOpen: document.getElementById("mobile-account-open"),
            mobileAccountClose: document.getElementById("mobile-account-close")
        };
        this.DOM = t,
            this.state = {
                isOpen: !1,
                logoIsAnimating: !1,
                mobileSubMenuIsOpen: !1,
                scrollTop: 0
            },
            this.openMenuClassList = ["mobile-menu-isopen", "disable-page-scroll"],
            this.openAccountClassList = ["mobile-account-isopen"],
            this.openLoginClassList = ["mobile-login-isopen"],
            this.openSubMenuClass = "submenu-is-open",
            H.set(this.DOM.mobileNav, {
                visibility: "hidden"
            }),
            H.set(this.DOM.mobileNavPanel1, {
                xPercent: -100
            }),
            H.set(this.DOM.mobileNavPanel2, {
                xPercent: 100
            }),
            this.logoTlEvents = {
                onComplete: () => {
                    this.state.logoIsAnimating = !1
                }
            },
            this.setupLogoTimeline1(),
            this.setupLogoTimeline2(),
            this.setupLogoTimeline3(),
            this.setupLogoTimeline4(),
            this.setupLogoTimeline5(),
            this.setupMenuTimelines(),
            this.setupAccordionTimelines(),
            this.handleScrollBarsOnMenuOpen = this.handleScrollBarsOnMenuOpen.bind(this),
            this.handleScrollBarsOnMenuClose = this.handleScrollBarsOnMenuClose.bind(this),
            this.populateHeader(),
            setInterval(this.populateHeader, 3e5)
    }
    populateHeader(e = !1) {
            function r(l) {
                const c = new Date,
                    f = new Date(l * 1e3),
                    h = c - f,
                    d = Math.floor(h / 6e4),
                    u = Math.floor(d / 60);
                if (d < 1)
                    return "Just now";
                if (d < 60)
                    return `${d} minute${d !== 1 ? "s" : ""} ago`;
                if (u < 24)
                    return `${u} hour${u !== 1 ? "s" : ""} ago`;
                var p = {
                    month: "short",
                    day: "numeric"
                };
                return f.toLocaleDateString(void 0, p)
            }

            function t(l) {
                function c(h) {
                    let d;
                    try {
                        d = new URL(h)
                    } catch {
                        return !1
                    }
                    return d.protocol === "http:" || d.protocol === "https:"
                }
                if (c(l))
                    return l;
                let f = JSON.parse(l);
                return "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style="background:#' + f.color + '"><g><text text-anchor="middle" dy=".35em" x="512" y="512" fill="#fffce4" font-size="700" font-family="-apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif">' + f.letter + "</text></g></svg>")
            }

            function i(l, c) {
                if (!l.length)
                    return;
                let f = document.querySelector(".feed--messages .feed__scroll"),
                    h = document.querySelector(".js-messages-button");
                h.dataset.count = c,
                    c < 1 ? h.classList.add("hide-pseudo") : h.classList.remove("hide-pseudo");
                let d = "";
                l.forEach(u => {
                            var p = u.lastCommentDate,
                                g = r(p);
                            let m = `<article class="feed__item">
<div class="user user--dark">
<div class="user__avatar"><img
				src="${t(u.author.photo)}"
				alt="${u.author.name}"></div>
<div class="user__details">
		<p class="user__name">${u.author.name}</p>
		<p class="user__date">${g}</p>
</div>
</div>
<div class="feed__item-content"><a class="feed__item-link heading-s truncate" href="${u.url.full}">${u.title}</a>
<p class="body-s truncate">${u.content.plain}</p>
</div>
${u.commentCount >= 1 ? `<div class="feed__item-comment"><span>${u.commentCount}</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
		<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
				d="M1 18a1 1 0 0 0 1.707.707l3.263-3.263h10.252A2.778 2.778 0 0 0 19 12.667v-8.89A2.778 2.778 0 0 0 16.222 1H3.778A2.778 2.778 0 0 0 1 3.778V18Z">
		</path>
</svg></div>` : ""}
</article>
				`;
                d += m
            }
            ),
            f.innerHTML = d
        }
        function n(l, c) {
            if (!l.length)
                return;
            let f = document.querySelector(".feed--notifications .feed__scroll")
              , h = document.querySelector(".js-notifications-button");
            h.dataset.count = c,
            c < 1 ? h.classList.add("hide-pseudo") : h.classList.remove("hide-pseudo");
            let d = "";
            l.forEach(u=>{
                var p = u.sentDate
                  , g = r(p);
                let m = `<article class="feed__item">
<div class="user user--dark">
<div class="user__avatar">
		<img src="${t(u.author.photo)}" alt="${u.author.name}" />
</div>
</div>
<div class="feed__item-content">
<a class="feed__item-link heading-s truncate" href="${u.url.full}">
		${u.title}
</a>
<p class="body-s truncate">
		${g}
</p>
</div>
</article>`;
                d += m
            }
            ),
            f.innerHTML = d
        }
        function s(l) {
            let c = document.querySelector(".js-account-dropdown")
              , f = `<div class="user__avatar user__avatar--${l.group.name}">
																								<img
																										src="${t(l.photo)}"
																										alt="${l.name}"
																								/>
																						</div>
																						<div class="user__details">
																								<p class="user__name">${l.name}</p>
																								<p class="user__email">${l.email}</p>
																								<p class="user__plan user__plan--${l.group.name}">${l.group.name}</p>
																						</div>`;
            c.innerHTML = f
        }
        function a(l) {
            let c = document.querySelector(".js-account-mobile")
              , f = document.querySelector(".js-account-submenu");
            function h(d) {
                return `<div class="user user--light ${d ? "user--small" : ""}">
									<div class="user__avatar">
											<img src="${t(l.photo)}" alt="${l.name}" />
									</div>
									<div class="user__details">
											<p class="user__name">${l.name}</p>
											<p class="user__email">${l.email}</p>
											<p class="user__plan">${l.group.name}</p>
									</div>
							</div>`
            }
            c.innerHTML = h(!0),
            f.innerHTML = h()
        }
        try {
            fetch("/community/index.php?app=gspages&module=ajax&controller=api", {
                method: "POST",
                body: JSON.stringify({
                    query: "{core{me{name,email,group{name},photo,notificationCount,notifications(limit:30){title,content{plain},sentDate,unread,author{name,photo,url},url{full}},messengerNewCount},messengerConversations(limit:30){title,url{full},commentCount,author{name,photo,url},content{plain},lastCommentDate,isUnread}}}"
                })
            }).then(f=>{
                if (!f.ok)
                    throw new Error(`HTTP error! Status: ${f.status}`);
                const h = f.headers.get("X-IPS-CSRFKEY");
                window.csrfKey = h;
                const d = document.querySelectorAll('input[name="csrfKey"]');
                d.length && h && d.forEach(p=>{
                    p.defaultValue = h
                }
                );
                const u = document.querySelectorAll(".js-logout");
                return u.length && h && u.forEach(p=>{
                    p.href = `/community/logout/?csrfKey=${h}`
                }
                ),
                f.json()
            }
            ).then(f=>{
                f.core.me.email ? document.body.dataset.member = "true" : document.body.dataset.member = "false",
                n(f.core.me.notifications, f.core.me.notificationCount),
                i(f.core.messengerConversations, f.core.me.messengerNewCount),
                e || (s(f.core.me),
                a(f.core.me))
            }
            ).catch(f=>{
                document.body.dataset.member = "false",
                console.error("An error occurred:", f)
            }
            )
        } catch (l) {
            document.body.dataset.member = "false",
            console.error("An error occurred:", l)
        }
    }
    setupLogoTimeline1() {
        const e = {
            ease: "power4.inOut",
            duration: .5
        };
        this.tlLogo = H.timeline({
            paused: !0,
            ...this.logoTlEvents
        }),
        this.tlLogo.to(this.DOM.logoLetters[1], {
            keyframes: [{
                x: 20,
                ...e
            }, {
                x: 0,
                delay: .1,
                ...e
            }]
        }),
        this.tlLogo.to(this.DOM.logoLine, {
            keyframes: [{
                scaleX: 1,
                ...e
            }, {
                scaleX: .4,
                delay: .1,
                ...e
            }]
        }, 0)
    }
    setupLogoTimeline2() {
        this.tlLogo2 = H.timeline({
            paused: !0,
            defaults: {
                duration: 1
            },
            ...this.logoTlEvents
        }),
        this.tlLogo2.to(this.DOM.logoS, {
            keyframes: [{
                opacity: 0
            }, {
                opacity: 1,
                delay: 1
            }],
            duration: .8,
            ease: "none"
        }),
        this.tlLogo2.to(this.DOM.logoBolt, {
            keyframes: [{
                opacity: 1,
                scale: 1
            }, {
                opacity: 0,
                scale: 0,
                delay: 1
            }],
            duration: .8,
            ease: "none"
        }, 0)
    }
    setupLogoTimeline3() {
        this.tlLogo3 = H.timeline({
            paused: !0,
            defaults: {
                duration: 1
            },
            ...this.logoTlEvents
        }),
        this.tlLogo3.to(this.DOM.logoA, {
            keyframes: [{
                opacity: 0
            }, {
                opacity: 1,
                delay: 1
            }],
            duration: .8,
            ease: "none"
        }),
        this.tlLogo3.to(this.DOM.logoKeyHole, {
            keyframes: [{
                opacity: 1,
                scale: 1
            }, {
                opacity: 0,
                scale: 0,
                delay: 1
            }],
            duration: .8,
            ease: "none"
        }, 0),
        this.tlLogo3.to(this.DOM.logoP, {
            keyframes: [{
                x: 13
            }, {
                x: 0,
                delay: 1
            }],
            duration: .8,
            ease: "none"
        }, 0)
    }
    setupLogoTimeline4() {
        this.tlLogo4 = H.timeline({
            paused: !0,
            defaults: {
                duration: 1
            },
            ...this.logoTlEvents
        }),
        this.tlLogo4.to([this.DOM.logoG, this.DOM.logoGLine], {
            keyframes: [{
                opacity: 0
            }, {
                opacity: 1,
                delay: 1
            }],
            duration: 1.2,
            ease: "none"
        }),
        this.tlLogo4.to(this.DOM.logoTimer, {
            keyframes: [{
                opacity: 1,
                scale: .95,
                rotate: 360
            }, {
                opacity: 0,
                scale: 0,
                delay: 1
            }],
            duration: 1.2,
            ease: "none"
        }, 0),
        this.tlLogo4.to(this.DOM.logoLetters[1], {
            keyframes: [{
                x: 8
            }, {
                x: 0,
                delay: 1
            }],
            duration: 1.2,
            ease: "none"
        }, 0)
    }
    setupLogoTimeline5() {
        this.tlLogo5 = H.timeline({
            paused: !0,
            defaults: {
                duration: 1
            },
            ...this.logoTlEvents
        }),
        this.tlLogo5.to(this.DOM.logoP, {
            keyframes: [{
                opacity: 0
            }, {
                opacity: 1,
                delay: 1.3
            }],
            duration: 1.2,
            ease: "none"
        }),
        this.tlLogo5.to(this.DOM.logoFlower, {
            keyframes: [{
                opacity: 1,
                scale: 1
            }, {
                opacity: 0,
                scale: 0,
                rotate: 360,
                delay: 1
            }],
            duration: 1.2,
            ease: "none"
        }, 0)
    }
    setupMenuTimelines() {
        this.tlMenuToggle = H.timeline({
            paused: !0,
            defaults: {
                duration: .13,
                ease: "power2.inOut"
            }
        }),
        this.tlMenuToggle.to(this.DOM.togglePathMiddle, {
            opacity: 0,
            scaleX: 0,
            transformOrigin: "50% 50%"
        }).to(this.DOM.togglePathTop, {
            y: 6,
            rotate: 45,
            scaleX: .625,
            transformOrigin: "50% 50%"
        }, ">-0.1").to(this.DOM.togglePathBottom, {
            y: -6,
            rotate: -45,
            scaleX: .625,
            transformOrigin: "50% 50%"
        }, "<").to(this.DOM.togglePaths, {
            x: 4
        }, 0),
        this.tlMobileMenu = H.timeline({
            paused: !0,
            onReverseComplete: ()=>{
                H.set(this.DOM.mobileNav, {
                    scrollTop: 0
                })
            }
        }),
        this.tlMobileMenu.fromTo(this.DOM.mobileNav, {
            visibility: "hidden"
        }, {
            visibility: "visible"
        }).to(this.DOM.mobileNavBackground, {
            opacity: 1,
            ease: "power3.out",
            duration: .3
        }, 0).to(this.DOM.toggle, {
            color: "#0e100f"
        }, 0).to([this.DOM.logoG, this.DOM.logoLettersPath], {
            fill: "#0E100F"
        }, 0).to([this.DOM.logoGLine], {
            backgroundColor: "#0E100F"
        }, 0).fromTo(this.DOM.mobileNavPanel1, {
            xPercent: -100
        }, {
            xPercent: 0,
            ease: "power3.out",
            duration: .3
        }, .2).fromTo(this.DOM.mobileNavPanel2, {
            xPercent: 100
        }, {
            xPercent: 0,
            ease: "power3.out",
            duration: .3
        }, "<+0.1")
    }
    setupAccordionTimelines() {
        this.tlAccordionOpen = H.timeline({
            paused: !0,
            onComplete: ()=>{
                this.state.mobileSubMenuIsOpen = !0
            }
        }),
        this.tlAccordionClose = H.timeline({
            paused: !0,
            onComplete: ()=>{
                this.state.mobileSubMenuIsOpen = !1
            }
        }),
        H.set(this.DOM.accordion, {
            height: 0
        }),
        this.tlAccordionOpen.to(this.DOM.accordionIconPaths, {
            rotate: 90,
            transformOrigin: "50% 50%",
            duration: .2,
            ease: "power3.out"
        }).to(this.DOM.accordionIconPaths[1], {
            scale: 0,
            transformOrigin: "50% 50%",
            duration: .2,
            ease: "power3.out"
        }, 0).to(this.DOM.accordion, {
            height: ()=>this.DOM.accordion.scrollHeight,
            ease: "power3.out",
            duration: .4
        }, 0),
        this.tlAccordionClose.to(this.DOM.accordionIconPaths, {
            rotate: 0,
            transformOrigin: "50% 50%",
            duration: .2,
            ease: "power3.in"
        }).to(this.DOM.accordionIconPaths[1], {
            scale: 1,
            transformOrigin: "50% 50%",
            duration: .2,
            ease: "power3.in"
        }, 0).to(this.DOM.accordion, {
            height: 0,
            ease: "power3.in",
            duration: .3
        }, 0)
    }
    handleScrollBarsOnMenuClose() {
        this.scrollSmoother ? this.scrollSmoother.paused(!1) : document.documentElement.scrollTop = this.state.scrollTop
    }
    handleScrollBarsOnMenuOpen() {
        this.scrollSmoother = di.get(),
        this.scrollSmoother ? this.scrollSmoother.paused(!0) : (this.state.scrollTop = document.documentElement.scrollTop,
        document.body.style.setProperty("--scrollTop", `${-this.state.scrollTop}px`))
    }
    closeMenu() {
        document.body.classList.remove(...this.openMenuClassList, ...this.openAccountClassList, ...this.openLoginClassList),
        this.handleScrollBarsOnMenuClose(),
        this.tlMenuToggle.reverse(),
        this.tlMobileMenu.reverse(),
        this.state.mobileSubMenuIsOpen && this.tlAccordionClose.play(0),
        this.state.isOpen = !1
    }
    toggleMenu() {
        this.state.isOpen ? this.closeMenu() : (this.handleScrollBarsOnMenuOpen(),
        document.body.classList.add(...this.openMenuClassList),
        this.tlMenuToggle.play(),
        this.tlMobileMenu.play(),
        this.state.isOpen = !0)
    }
    toggleAccordion() {
        this.state.mobileSubMenuIsOpen ? this.tlAccordionClose.play(0) : this.tlAccordionOpen.play(0)
    }
    playLogoTl() {
        if (this.state.logoIsAnimating)
            return;
        this.state.logoIsAnimating = !0,
        H.utils.random([this.tlLogo, this.tlLogo2, this.tlLogo3, this.tlLogo4, this.tlLogo5]).play(0)
    }
    closeAccessibleSubMenus() {
        Array.prototype.forEach.call(this.DOM.subMenus, e=>{
            e.querySelector(".header__submenu-toggle").setAttribute("aria-expanded", !1),
            e.classList.remove(this.openSubMenuClass)
        }
        )
    }
    initEvents() {
        this.DOM.toggle.addEventListener("click", ()=>{
            this.toggleMenu()
        }
        ),
        this.DOM.mobileNavToggle.addEventListener("click", ()=>{
            this.toggleAccordion()
        }
        ),
        this.DOM.mobileAccountOpen.addEventListener("click", ()=>{
            document.body.classList.add(...this.openAccountClassList)
        }
        ),
        this.DOM.userHeader.addEventListener("click", ()=>{
            window.location.href = "/community/account-dashboard"
        }
        ),
        this.DOM.mobileAccountClose.addEventListener("click", ()=>{
            document.body.classList.remove(...this.openAccountClassList)
        }
        ),
        this.DOM.mobileLoginOpen.addEventListener("click", ()=>{
            document.body.classList.add(...this.openLoginClassList)
        }
        ),
        this.DOM.mobileLoginClose.addEventListener("click", ()=>{
            document.body.classList.remove(...this.openLoginClassList)
        }
        ),
        Array.prototype.forEach.call(this.DOM.notifsToggle, e=>{
            e.addEventListener("mouseenter", ()=>{
                this.killViewedNotifications()
            }
            )
        }
        ),
        Array.prototype.forEach.call(this.DOM.notifsToggle, e=>{
            e.addEventListener("mouseleave", ()=>{
                this.populateHeader(!1)
            }
            )
        }
        ),
        Array.prototype.forEach.call(this.DOM.headerLinks, e=>{
            e.addEventListener("focus", ()=>{
                this.closeAccessibleSubMenus()
            }
            ),
            e.addEventListener("mouseenter", ()=>{
                this.closeAccessibleSubMenus()
            }
            )
        }
        ),
        Array.prototype.forEach.call(this.DOM.subMenus, e=>{
            const r = e.querySelector(".header__submenu-toggle");
            r.addEventListener("click", ()=>{
                r.setAttribute("aria-expanded", !e.classList.contains(this.openSubMenuClass)),
                e.classList.toggle(this.openSubMenuClass)
            }
            )
        }
        ),
        document.addEventListener("click", e=>{
            const r = document.getElementById("header");
            !r.contains(e.target) && e.target !== r && this.closeAccessibleSubMenus()
        }
        ),
        window.addEventListener("resize", ()=>{
            window.innerWidth >= 1240 && this.state.isOpen && this.closeMenu()
        }
        ),
        Ls(()=>{
            this.DOM.logo.addEventListener("mousemove", ()=>{
                this.playLogoTl()
            }
            )
        }
        )
    }
    async killViewedNotifications() {
        const e = `
      mutation markNotificationsRead {
		mutateCore {
			markNotificationRead {
				id
			}
		}
	}
    `;
        try {
            let i = function() {
                let n = document.querySelector(".js-notifications-button");
                n.dataset.count = 0,
                n.classList.add("hide-pseudo")
            };
            if (!(await fetch("/community/index.php?app=gspages&module=ajax&controller=api", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: e
                })
            })).ok)
                throw new Error("Request failed");
            H.delayedCall(.3, i)
        } catch {}
    }
}
class Xp extends Mt {
    init() {
        const e = {
            emailForm: document.querySelector(".footer-global__form"),
            emailInput: document.querySelector("#email"),
            emailFeedback: document.querySelector(".js-email-feedback")
        };
        this.DOM = e
    }
    initEvents() {
        this.DOM.emailForm.addEventListener("submit", async e=>{
            await this.submitForm(e)
        }
        )
    }
    async submitForm(e) {
        e.preventDefault();
        const t = `/community/index.php?app=gspages&module=ajax&controller=subscribe&email=${this.DOM.emailInput.value}&csrfKey=${window.csrfKey}`;
        try {
            (await fetch(t, {
                method: "POST"
            })).ok ? (this.DOM.emailFeedback.style.color = "#0ae448",
            this.DOM.emailFeedback.innerText = "Success - Chat soon!") : (this.DOM.emailFeedback.style.color = "#e40a40",
            this.DOM.emailFeedback.innerText = "Subscription failed")
        } catch (i) {
            console.error("Network error:", i)
        }
    }
}
class Yp extends Mt {
    init() {
        this.DOM = {
            columns: this.block.querySelectorAll(".brands__item")
        },
        this.column = {
            one: this.DOM.columns[0].innerHTML,
            two: this.DOM.columns[1].innerHTML,
            three: this.DOM.columns[2].innerHTML,
            four: this.DOM.columns[3].innerHTML,
            five: this.DOM.columns[4].innerHTML,
            six: this.DOM.columns[5].innerHTML
        },
        this.createTimeline()
    }
    createTimeline() {
        H.matchMedia().add({
            isMobile: "(max-width: 768px)",
            isDesktop: "(min-width: 769px ) and (max-width: 1240px)",
            isLargeDesktop: "(min-width: 1241px)"
        }, r=>{
            let t;
            r.conditions.isMobile ? (t = 3,
            this.DOM.columns[0].innerHTML = [this.column.one + this.column.two],
            this.DOM.columns[1].innerHTML = [this.column.three + this.column.four],
            this.DOM.columns[2].innerHTML = [this.column.five + this.column.six]) : r.conditions.isDesktop ? (t = 5,
            this.DOM.columns[0].innerHTML = [this.column.one + this.column.two],
            this.DOM.columns[1].innerHTML = this.column.three,
            this.DOM.columns[2].innerHTML = this.column.four,
            this.DOM.columns[3].innerHTML = this.column.five,
            this.DOM.columns[4].innerHTML = this.column.six) : r.conditions.isLargeDesktop && (t = 6,
            this.DOM.columns[0].innerHTML = this.column.one,
            this.DOM.columns[1].innerHTML = this.column.two,
            this.DOM.columns[2].innerHTML = this.column.three,
            this.DOM.columns[3].innerHTML = this.column.four,
            this.DOM.columns[4].innerHTML = this.column.five,
            this.DOM.columns[5].innerHTML = this.column.six),
            Ls(()=>{
                for (let i = 0; i < t; i++) {
                    const s = this.DOM.columns[i].querySelectorAll("svg")
                      , a = H.utils.random(["-200%", "200%"])
                      , l = i % 2 === 0
                      , c = H.timeline({
                        repeat: -1,
                        delay: -t + i * .2
                    });
                    s.forEach(f=>{
                        c.to(f, {
                            keyframes: [{
                                y: l ? a : 0,
                                x: l ? 0 : a,
                                duration: .3
                            }, {
                                autoAlpha: 1,
                                x: 0,
                                y: 0,
                                duration: .5,
                                ease: "power2.out"
                            }, {
                                delay: 3,
                                y: l ? 0 : a,
                                x: l ? a : 0,
                                duration: .3,
                                ease: "power2.in"
                            }]
                        }).set(f, {
                            autoAlpha: 0
                        })
                    }
                    )
                }
            }
            )
        }
        )
    }
}
class Gp extends Mt {
    init() {
        const e = H.utils.selector(this.block);
        this.DOM = {
            button: this.block,
            flair: e(".button__flair")
        },
        this.xSet = H.quickSetter(this.DOM.flair, "xPercent"),
        this.ySet = H.quickSetter(this.DOM.flair, "yPercent"),
        this.hasFill = this.DOM.button.classList.contains("button--fill")
    }
    getXY(e) {
        const {left: r, top: t, width: i, height: n} = this.DOM.button.getBoundingClientRect()
          , s = H.utils.pipe(H.utils.mapRange(0, i, 0, 100), H.utils.clamp(0, 100))
          , a = H.utils.pipe(H.utils.mapRange(0, n, 0, 100), H.utils.clamp(0, 100));
        return {
            x: s(e.clientX - r),
            y: a(e.clientY - t)
        }
    }
    initEvents() {
        this.DOM.button.addEventListener("mouseenter", e=>{
            const {x: r, y: t} = this.getXY(e);
            this.xSet(r),
            this.ySet(t),
            this.hasFill ? H.to(this.DOM.flair, {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }) : H.to(this.DOM.flair, {
                scale: 1,
                duration: .4,
                ease: "power2.out"
            })
        }
        ),
        this.DOM.button.addEventListener("mouseleave", e=>{
            const {x: r, y: t} = this.getXY(e);
            H.killTweensOf(this.DOM.flair),
            this.hasFill ? H.to(this.DOM.flair, {
                xPercent: r > 90 ? r + 20 : r < 10 ? r - 20 : r,
                yPercent: t > 90 ? t + 20 : t < 10 ? t - 20 : t,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            }) : H.to(this.DOM.flair, {
                xPercent: r > 90 ? r + 20 : r < 10 ? r - 20 : r,
                yPercent: t > 90 ? t + 20 : t < 10 ? t - 20 : t,
                scale: 0,
                duration: .3,
                ease: "power2.out"
            })
        }
        ),
        this.DOM.button.addEventListener("mousemove", e=>{
            const {x: r, y: t} = this.getXY(e);
            H.to(this.DOM.flair, {
                xPercent: r,
                yPercent: t,
                duration: this.hasFill ? 1 : .4,
                ease: "power2"
            })
        }
        )
    }
}
H.registerPlugin(tt);
class Hp extends Mt {
    init() {
        this.wrapper = this.block.querySelector(".showcase__wrap"),
        this.items = this.wrapper.querySelectorAll(".showcase__item"),
        this.titles = this.wrapper.querySelectorAll(".showcase__titles p"),
        this.titleLinks = this.wrapper.querySelectorAll(".showcase__titles a"),
        this.tools = this.wrapper.querySelectorAll(".showcase__tools p"),
        this.videos = this.wrapper.querySelectorAll(".showcase__video"),
        this.previous = this.block.querySelector(".button.prev"),
        this.next = this.block.querySelector(".button.next"),
        this.loopItems = this.loopItems.bind(this),
        this.loop = this.loopItems()
    }
    initEvents() {
        const e = "is-moving";
        this.previous.addEventListener("click", this.loop.previous),
        this.next.addEventListener("click", this.loop.next),
        tt.create({
            target: this.wrapper,
            type: "touch,pointer",
            dragMinimum: 10,
            onPress: ()=>{
                this.wrapper.classList.add(e)
            }
            ,
            onRelease: ()=>{
                this.wrapper.classList.remove(e)
            }
            ,
            onLeft: ()=>{
                this.loop.next()
            }
            ,
            onRight: ()=>{
                this.loop.previous()
            }
        }),
        ve.create({
            trigger: this.wrapper,
            start: "top bottom",
            end: "bottom top",
            once: !0,
            onEnter: ()=>{
                this.videos[1].play()
            }
        })
    }
    loopItems() {
        const e = H.utils.toArray(this.items);
        let r = H.timeline({
            paused: !0,
            draggable: !0,
            defaults: {
                ease: "none"
            },
            onReverseComplete: ()=>r.totalTime(r.rawTime() + r.duration() * 100)
        }), t = e.length, i = e[0].offsetLeft, n = [], s = [], a = [], l = 0, c = 1e3, f = H.utils.snap(1), h = ()=>e.forEach((b,T)=>{
            s[T] = parseFloat(H.getProperty(b, "width", "px")),
            a[T] = f(parseFloat(H.getProperty(b, "x", "px")) / s[T] * 100 + H.getProperty(b, "xPercent"))
        }
        ), d = ()=>e[t - 1].offsetLeft + a[t - 1] / 100 * s[t - 1] - i + e[t - 1].offsetWidth * H.getProperty(e[t - 1], "scaleX"), u, p, g, m, v, y;
        for (h(),
        H.set(e, {
            xPercent: b=>a[b]
        }),
        H.set(e, {
            x: 0
        }),
        u = d(),
        y = 0; y < t; y++)
            v = e[y],
            p = a[y] / 100 * s[y],
            g = v.offsetLeft + p - i,
            m = g + s[y] * H.getProperty(v, "scaleX"),
            r.to(v, {
                xPercent: f((p - m) / s[y] * 100),
                duration: m / c
            }, 0).fromTo(v, {
                xPercent: f((p - m + u) / s[y] * 100)
            }, {
                xPercent: a[y],
                duration: (p - m + u - p) / c,
                immediateRender: !1
            }, m / c).add("label" + y, g / c),
            n[y] = g / c;
        const _ = b=>{
            e.forEach(k=>k.classList.remove("showcase__item--active")),
            this.titles.forEach(k=>k.classList.remove("active")),
            this.titleLinks.forEach(k=>{
                k.setAttribute("tabindex", "-1"),
                k.setAttribute("aria-hidden", "true")
            }
            ),
            this.tools.forEach(k=>{
                k.setAttribute("tabindex", "-1"),
                k.setAttribute("aria-hidden", "true")
            }
            ),
            this.tools.forEach(k=>k.classList.remove("active")),
            this.videos.forEach(k=>k.pause());
            let T = H.utils.wrap(0, e.length);
            e[T(b)].classList.add("showcase__item--active"),
            this.titles[T(b)].classList.add("active"),
            this.titleLinks[T(b)].removeAttribute("tabindex"),
            this.titleLinks[T(b)].removeAttribute("aria-hidden"),
            this.tools[T(b)].removeAttribute("tabindex"),
            this.tools[T(b)].removeAttribute("aria-hidden"),
            this.tools[T(b)].classList.add("active"),
            this.videos[T(b)].play()
        }
          , w = b=>{
            const T = {
                duration: .8,
                ease: "back.out(.95)"
            };
            Math.abs(b - l) > t / 2 && (b += b > l ? -t : t);
            let k = H.utils.wrap(0, t, b)
              , S = n[k];
            return S > r.time() != b > l && (T.modifiers = {
                time: H.utils.wrap(0, r.duration())
            },
            S += r.duration() * (b > l ? 1 : -1)),
            l = k,
            T.overwrite = !0,
            r.tweenTo(S, T)
        }
        ;
        return r.next = ()=>{
            this.animating || (this.animating = !0,
            this.timeout = setTimeout(()=>{
                this.animating = !1
            }
            , 800),
            w(l + 1) && _(l + 1))
        }
        ,
        r.previous = ()=>{
            this.animating || (this.animating = !0,
            this.timeout = setTimeout(()=>{
                this.animating = !1
            }
            , 800),
            w(l - 1) && _(l + 1))
        }
        ,
        r.toIndex = b=>w(b),
        r.updateIndex = ()=>l = Math.round(r.progress() * e.length),
        r.times = n,
        r.progress(1, !0).progress(0, !0),
        r
    }
}
/*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */
function Fu(o, e) {
    var r = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(o);
        e && (t = t.filter(function(i) {
            return Object.getOwnPropertyDescriptor(o, i).enumerable
        })),
        r.push.apply(r, t)
    }
    return r
}
function Nu(o) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Fu(Object(r), !0).forEach(function(t) {
            os(o, t, r[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : Fu(Object(r)).forEach(function(t) {
            Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(r, t))
        })
    }
    return o
}
function Et() {
    Et = function() {
        return o
    }
    ;
    var o = {}
      , e = Object.prototype
      , r = e.hasOwnProperty
      , t = Object.defineProperty || function(P, E, F) {
        P[E] = F.value
    }
      , i = typeof Symbol == "function" ? Symbol : {}
      , n = i.iterator || "@@iterator"
      , s = i.asyncIterator || "@@asyncIterator"
      , a = i.toStringTag || "@@toStringTag";
    function l(P, E, F) {
        return Object.defineProperty(P, E, {
            value: F,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }),
        P[E]
    }
    try {
        l({}, "")
    } catch {
        l = function(E, F, q) {
            return E[F] = q
        }
    }
    function c(P, E, F, q) {
        var R = E && E.prototype instanceof d ? E : d
          , X = Object.create(R.prototype)
          , G = new D(q || []);
        return t(X, "_invoke", {
            value: b(P, F, G)
        }),
        X
    }
    function f(P, E, F) {
        try {
            return {
                type: "normal",
                arg: P.call(E, F)
            }
        } catch (q) {
            return {
                type: "throw",
                arg: q
            }
        }
    }
    o.wrap = c;
    var h = {};
    function d() {}
    function u() {}
    function p() {}
    var g = {};
    l(g, n, function() {
        return this
    });
    var m = Object.getPrototypeOf
      , v = m && m(m($([])));
    v && v !== e && r.call(v, n) && (g = v);
    var y = p.prototype = d.prototype = Object.create(g);
    function _(P) {
        ["next", "throw", "return"].forEach(function(E) {
            l(P, E, function(F) {
                return this._invoke(E, F)
            })
        })
    }
    function w(P, E) {
        function F(R, X, G, ne) {
            var O = f(P[R], P, X);
            if (O.type !== "throw") {
                var W = O.arg
                  , ee = W.value;
                return ee && typeof ee == "object" && r.call(ee, "__await") ? E.resolve(ee.__await).then(function(re) {
                    F("next", re, G, ne)
                }, function(re) {
                    F("throw", re, G, ne)
                }) : E.resolve(ee).then(function(re) {
                    W.value = re,
                    G(W)
                }, function(re) {
                    return F("throw", re, G, ne)
                })
            }
            ne(O.arg)
        }
        var q;
        t(this, "_invoke", {
            value: function(R, X) {
                function G() {
                    return new E(function(ne, O) {
                        F(R, X, ne, O)
                    }
                    )
                }
                return q = q ? q.then(G, G) : G()
            }
        })
    }
    function b(P, E, F) {
        var q = "suspendedStart";
        return function(R, X) {
            if (q === "executing")
                throw new Error("Generator is already running");
            if (q === "completed") {
                if (R === "throw")
                    throw X;
                return B()
            }
            for (F.method = R,
            F.arg = X; ; ) {
                var G = F.delegate;
                if (G) {
                    var ne = T(G, F);
                    if (ne) {
                        if (ne === h)
                            continue;
                        return ne
                    }
                }
                if (F.method === "next")
                    F.sent = F._sent = F.arg;
                else if (F.method === "throw") {
                    if (q === "suspendedStart")
                        throw q = "completed",
                        F.arg;
                    F.dispatchException(F.arg)
                } else
                    F.method === "return" && F.abrupt("return", F.arg);
                q = "executing";
                var O = f(P, E, F);
                if (O.type === "normal") {
                    if (q = F.done ? "completed" : "suspendedYield",
                    O.arg === h)
                        continue;
                    return {
                        value: O.arg,
                        done: F.done
                    }
                }
                O.type === "throw" && (q = "completed",
                F.method = "throw",
                F.arg = O.arg)
            }
        }
    }
    function T(P, E) {
        var F = E.method
          , q = P.iterator[F];
        if (q === void 0)
            return E.delegate = null,
            F === "throw" && P.iterator.return && (E.method = "return",
            E.arg = void 0,
            T(P, E),
            E.method === "throw") || F !== "return" && (E.method = "throw",
            E.arg = new TypeError("The iterator does not provide a '" + F + "' method")),
            h;
        var R = f(q, P.iterator, E.arg);
        if (R.type === "throw")
            return E.method = "throw",
            E.arg = R.arg,
            E.delegate = null,
            h;
        var X = R.arg;
        return X ? X.done ? (E[P.resultName] = X.value,
        E.next = P.nextLoc,
        E.method !== "return" && (E.method = "next",
        E.arg = void 0),
        E.delegate = null,
        h) : X : (E.method = "throw",
        E.arg = new TypeError("iterator result is not an object"),
        E.delegate = null,
        h)
    }
    function k(P) {
        var E = {
            tryLoc: P[0]
        };
        1 in P && (E.catchLoc = P[1]),
        2 in P && (E.finallyLoc = P[2],
        E.afterLoc = P[3]),
        this.tryEntries.push(E)
    }
    function S(P) {
        var E = P.completion || {};
        E.type = "normal",
        delete E.arg,
        P.completion = E
    }
    function D(P) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        P.forEach(k, this),
        this.reset(!0)
    }
    function $(P) {
        if (P) {
            var E = P[n];
            if (E)
                return E.call(P);
            if (typeof P.next == "function")
                return P;
            if (!isNaN(P.length)) {
                var F = -1
                  , q = function R() {
                    for (; ++F < P.length; )
                        if (r.call(P, F))
                            return R.value = P[F],
                            R.done = !1,
                            R;
                    return R.value = void 0,
                    R.done = !0,
                    R
                };
                return q.next = q
            }
        }
        return {
            next: B
        }
    }
    function B() {
        return {
            value: void 0,
            done: !0
        }
    }
    return u.prototype = p,
    t(y, "constructor", {
        value: p,
        configurable: !0
    }),
    t(p, "constructor", {
        value: u,
        configurable: !0
    }),
    u.displayName = l(p, a, "GeneratorFunction"),
    o.isGeneratorFunction = function(P) {
        var E = typeof P == "function" && P.constructor;
        return !!E && (E === u || (E.displayName || E.name) === "GeneratorFunction")
    }
    ,
    o.mark = function(P) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(P, p) : (P.__proto__ = p,
        l(P, a, "GeneratorFunction")),
        P.prototype = Object.create(y),
        P
    }
    ,
    o.awrap = function(P) {
        return {
            __await: P
        }
    }
    ,
    _(w.prototype),
    l(w.prototype, s, function() {
        return this
    }),
    o.AsyncIterator = w,
    o.async = function(P, E, F, q, R) {
        R === void 0 && (R = Promise);
        var X = new w(c(P, E, F, q),R);
        return o.isGeneratorFunction(E) ? X : X.next().then(function(G) {
            return G.done ? G.value : X.next()
        })
    }
    ,
    _(y),
    l(y, a, "Generator"),
    l(y, n, function() {
        return this
    }),
    l(y, "toString", function() {
        return "[object Generator]"
    }),
    o.keys = function(P) {
        var E = Object(P)
          , F = [];
        for (var q in E)
            F.push(q);
        return F.reverse(),
        function R() {
            for (; F.length; ) {
                var X = F.pop();
                if (X in E)
                    return R.value = X,
                    R.done = !1,
                    R
            }
            return R.done = !0,
            R
        }
    }
    ,
    o.values = $,
    D.prototype = {
        constructor: D,
        reset: function(P) {
            if (this.prev = 0,
            this.next = 0,
            this.sent = this._sent = void 0,
            this.done = !1,
            this.delegate = null,
            this.method = "next",
            this.arg = void 0,
            this.tryEntries.forEach(S),
            !P)
                for (var E in this)
                    E.charAt(0) === "t" && r.call(this, E) && !isNaN(+E.slice(1)) && (this[E] = void 0)
        },
        stop: function() {
            this.done = !0;
            var P = this.tryEntries[0].completion;
            if (P.type === "throw")
                throw P.arg;
            return this.rval
        },
        dispatchException: function(P) {
            if (this.done)
                throw P;
            var E = this;
            function F(O, W) {
                return X.type = "throw",
                X.arg = P,
                E.next = O,
                W && (E.method = "next",
                E.arg = void 0),
                !!W
            }
            for (var q = this.tryEntries.length - 1; q >= 0; --q) {
                var R = this.tryEntries[q]
                  , X = R.completion;
                if (R.tryLoc === "root")
                    return F("end");
                if (R.tryLoc <= this.prev) {
                    var G = r.call(R, "catchLoc")
                      , ne = r.call(R, "finallyLoc");
                    if (G && ne) {
                        if (this.prev < R.catchLoc)
                            return F(R.catchLoc, !0);
                        if (this.prev < R.finallyLoc)
                            return F(R.finallyLoc)
                    } else if (G) {
                        if (this.prev < R.catchLoc)
                            return F(R.catchLoc, !0)
                    } else {
                        if (!ne)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < R.finallyLoc)
                            return F(R.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(P, E) {
            for (var F = this.tryEntries.length - 1; F >= 0; --F) {
                var q = this.tryEntries[F];
                if (q.tryLoc <= this.prev && r.call(q, "finallyLoc") && this.prev < q.finallyLoc) {
                    var R = q;
                    break
                }
            }
            R && (P === "break" || P === "continue") && R.tryLoc <= E && E <= R.finallyLoc && (R = null);
            var X = R ? R.completion : {};
            return X.type = P,
            X.arg = E,
            R ? (this.method = "next",
            this.next = R.finallyLoc,
            h) : this.complete(X)
        },
        complete: function(P, E) {
            if (P.type === "throw")
                throw P.arg;
            return P.type === "break" || P.type === "continue" ? this.next = P.arg : P.type === "return" ? (this.rval = this.arg = P.arg,
            this.method = "return",
            this.next = "end") : P.type === "normal" && E && (this.next = E),
            h
        },
        finish: function(P) {
            for (var E = this.tryEntries.length - 1; E >= 0; --E) {
                var F = this.tryEntries[E];
                if (F.finallyLoc === P)
                    return this.complete(F.completion, F.afterLoc),
                    S(F),
                    h
            }
        },
        catch: function(P) {
            for (var E = this.tryEntries.length - 1; E >= 0; --E) {
                var F = this.tryEntries[E];
                if (F.tryLoc === P) {
                    var q = F.completion;
                    if (q.type === "throw") {
                        var R = q.arg;
                        S(F)
                    }
                    return R
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(P, E, F) {
            return this.delegate = {
                iterator: $(P),
                resultName: E,
                nextLoc: F
            },
            this.method === "next" && (this.arg = void 0),
            h
        }
    },
    o
}
function Iu(o, e, r, t, i, n, s) {
    try {
        var a = o[n](s)
          , l = a.value
    } catch (c) {
        r(c);
        return
    }
    a.done ? e(l) : Promise.resolve(l).then(t, i)
}
function Si(o) {
    return function() {
        var e = this
          , r = arguments;
        return new Promise(function(t, i) {
            var n = o.apply(e, r);
            function s(l) {
                Iu(n, t, i, s, a, "next", l)
            }
            function a(l) {
                Iu(n, t, i, s, a, "throw", l)
            }
            s(void 0)
        }
        )
    }
}
function Wf(o, e) {
    if (!(o instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function Bu(o, e) {
    for (var r = 0; r < e.length; r++) {
        var t = e[r];
        t.enumerable = t.enumerable || !1,
        t.configurable = !0,
        "value"in t && (t.writable = !0),
        Object.defineProperty(o, Kf(t.key), t)
    }
}
function jf(o, e, r) {
    return e && Bu(o.prototype, e),
    r && Bu(o, r),
    Object.defineProperty(o, "prototype", {
        writable: !1
    }),
    o
}
function os(o, e, r) {
    return e = Kf(e),
    e in o ? Object.defineProperty(o, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[e] = r,
    o
}
function Wp(o, e) {
    if (typeof e != "function" && e !== null)
        throw new TypeError("Super expression must either be null or a function");
    o.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: o,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(o, "prototype", {
        writable: !1
    }),
    e && To(o, e)
}
function xo(o) {
    return xo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    xo(o)
}
function To(o, e) {
    return To = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, i) {
        return t.__proto__ = i,
        t
    }
    ,
    To(o, e)
}
function Uf() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
function ss(o, e, r) {
    return Uf() ? ss = Reflect.construct.bind() : ss = function(i, n, s) {
        var a = [null];
        a.push.apply(a, n);
        var l = Function.bind.apply(i, a)
          , c = new l;
        return s && To(c, s.prototype),
        c
    }
    ,
    ss.apply(null, arguments)
}
function jp(o) {
    return Function.toString.call(o).indexOf("[native code]") !== -1
}
function Wa(o) {
    var e = typeof Map == "function" ? new Map : void 0;
    return Wa = function(t) {
        if (t === null || !jp(t))
            return t;
        if (typeof t != "function")
            throw new TypeError("Super expression must either be null or a function");
        if (typeof e < "u") {
            if (e.has(t))
                return e.get(t);
            e.set(t, i)
        }
        function i() {
            return ss(t, arguments, xo(this).constructor)
        }
        return i.prototype = Object.create(t.prototype, {
            constructor: {
                value: i,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        To(i, t)
    }
    ,
    Wa(o)
}
function as(o) {
    if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}
function Up(o, e) {
    if (e && (typeof e == "object" || typeof e == "function"))
        return e;
    if (e !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return as(o)
}
function Kp(o) {
    var e = Uf();
    return function() {
        var t = xo(o), i;
        if (e) {
            var n = xo(this).constructor;
            i = Reflect.construct(t, arguments, n)
        } else
            i = t.apply(this, arguments);
        return Up(this, i)
    }
}
function Qp(o, e) {
    if (typeof o != "object" || o === null)
        return o;
    var r = o[Symbol.toPrimitive];
    if (r !== void 0) {
        var t = r.call(o, e || "default");
        if (typeof t != "object")
            return t;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(o)
}
function Kf(o) {
    var e = Qp(o, "string");
    return typeof e == "symbol" ? e : String(e)
}
var Qf = typeof global < "u" && {}.toString.call(global) === "[object global]";
function $u(o, e) {
    return o.indexOf(e.toLowerCase()) === 0 ? o : "".concat(e.toLowerCase()).concat(o.substr(0, 1).toUpperCase()).concat(o.substr(1))
}
function Zp(o) {
    return !!(o && o.nodeType === 1 && "nodeName"in o && o.ownerDocument && o.ownerDocument.defaultView)
}
function Jp(o) {
    return !isNaN(parseFloat(o)) && isFinite(o) && Math.floor(o) == o
}
function Gi(o) {
    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(o)
}
function Zf(o) {
    var e = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
    return e.test(o)
}
function Jf() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , e = o.id
      , r = o.url
      , t = e || r;
    if (!t)
        throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
    if (Jp(t))
        return "https://vimeo.com/".concat(t);
    if (Gi(t))
        return t.replace("http:", "https:");
    throw e ? new TypeError("“".concat(e, "” is not a valid video id.")) : new TypeError("“".concat(t, "” is not a vimeo.com url."))
}
var zu = function(e, r, t) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "addEventListener"
      , n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "removeEventListener"
      , s = typeof r == "string" ? [r] : r;
    return s.forEach(function(a) {
        e[i](a, t)
    }),
    {
        cancel: function() {
            return s.forEach(function(l) {
                return e[n](l, t)
            })
        }
    }
}
  , eg = typeof Array.prototype.indexOf < "u"
  , tg = typeof window < "u" && typeof window.postMessage < "u";
if (!Qf && (!eg || !tg))
    throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
var yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rg(o, e) {
    return e = {
        exports: {}
    },
    o(e, e.exports),
    e.exports
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
(function(o) {
    if (o.WeakMap)
        return;
    var e = Object.prototype.hasOwnProperty
      , r = Object.defineProperty && function() {
        try {
            return Object.defineProperty({}, "x", {
                value: 1
            }).x === 1
        } catch {}
    }()
      , t = function(n, s, a) {
        r ? Object.defineProperty(n, s, {
            configurable: !0,
            writable: !0,
            value: a
        }) : n[s] = a
    };
    o.WeakMap = function() {
        function n() {
            if (this === void 0)
                throw new TypeError("Constructor WeakMap requires 'new'");
            if (t(this, "_id", a("_WeakMap")),
            arguments.length > 0)
                throw new TypeError("WeakMap iterable is not supported")
        }
        t(n.prototype, "delete", function(c) {
            if (s(this, "delete"),
            !i(c))
                return !1;
            var f = c[this._id];
            return f && f[0] === c ? (delete c[this._id],
            !0) : !1
        }),
        t(n.prototype, "get", function(c) {
            if (s(this, "get"),
            !!i(c)) {
                var f = c[this._id];
                if (f && f[0] === c)
                    return f[1]
            }
        }),
        t(n.prototype, "has", function(c) {
            if (s(this, "has"),
            !i(c))
                return !1;
            var f = c[this._id];
            return !!(f && f[0] === c)
        }),
        t(n.prototype, "set", function(c, f) {
            if (s(this, "set"),
            !i(c))
                throw new TypeError("Invalid value used as weak map key");
            var h = c[this._id];
            return h && h[0] === c ? (h[1] = f,
            this) : (t(c, this._id, [c, f]),
            this)
        });
        function s(c, f) {
            if (!i(c) || !e.call(c, "_id"))
                throw new TypeError(f + " method called on incompatible receiver " + typeof c)
        }
        function a(c) {
            return c + "_" + l() + "." + l()
        }
        function l() {
            return Math.random().toString().substring(2)
        }
        return t(n, "_polyfill", !0),
        n
    }();
    function i(n) {
        return Object(n) === n
    }
}
)(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : yn);
var nr = rg(function(o) {
    /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
    (function(r, t, i) {
        t[r] = t[r] || i(),
        o.exports && (o.exports = t[r])
    }
    )("Promise", yn, function() {
        var r, t, i, n = Object.prototype.toString, s = typeof setImmediate < "u" ? function(_) {
            return setImmediate(_)
        }
        : setTimeout;
        try {
            Object.defineProperty({}, "x", {}),
            r = function(_, w, b, T) {
                return Object.defineProperty(_, w, {
                    value: b,
                    writable: !0,
                    configurable: T !== !1
                })
            }
        } catch {
            r = function(w, b, T) {
                return w[b] = T,
                w
            }
        }
        i = function() {
            var _, w, b;
            function T(k, S) {
                this.fn = k,
                this.self = S,
                this.next = void 0
            }
            return {
                add: function(S, D) {
                    b = new T(S,D),
                    w ? w.next = b : _ = b,
                    w = b,
                    b = void 0
                },
                drain: function() {
                    var S = _;
                    for (_ = w = t = void 0; S; )
                        S.fn.call(S.self),
                        S = S.next
                }
            }
        }();
        function a(y, _) {
            i.add(y, _),
            t || (t = s(i.drain))
        }
        function l(y) {
            var _, w = typeof y;
            return y != null && (w == "object" || w == "function") && (_ = y.then),
            typeof _ == "function" ? _ : !1
        }
        function c() {
            for (var y = 0; y < this.chain.length; y++)
                f(this, this.state === 1 ? this.chain[y].success : this.chain[y].failure, this.chain[y]);
            this.chain.length = 0
        }
        function f(y, _, w) {
            var b, T;
            try {
                _ === !1 ? w.reject(y.msg) : (_ === !0 ? b = y.msg : b = _.call(void 0, y.msg),
                b === w.promise ? w.reject(TypeError("Promise-chain cycle")) : (T = l(b)) ? T.call(b, w.resolve, w.reject) : w.resolve(b))
            } catch (k) {
                w.reject(k)
            }
        }
        function h(y) {
            var _, w = this;
            if (!w.triggered) {
                w.triggered = !0,
                w.def && (w = w.def);
                try {
                    (_ = l(y)) ? a(function() {
                        var b = new p(w);
                        try {
                            _.call(y, function() {
                                h.apply(b, arguments)
                            }, function() {
                                d.apply(b, arguments)
                            })
                        } catch (T) {
                            d.call(b, T)
                        }
                    }) : (w.msg = y,
                    w.state = 1,
                    w.chain.length > 0 && a(c, w))
                } catch (b) {
                    d.call(new p(w), b)
                }
            }
        }
        function d(y) {
            var _ = this;
            _.triggered || (_.triggered = !0,
            _.def && (_ = _.def),
            _.msg = y,
            _.state = 2,
            _.chain.length > 0 && a(c, _))
        }
        function u(y, _, w, b) {
            for (var T = 0; T < _.length; T++)
                (function(S) {
                    y.resolve(_[S]).then(function($) {
                        w(S, $)
                    }, b)
                }
                )(T)
        }
        function p(y) {
            this.def = y,
            this.triggered = !1
        }
        function g(y) {
            this.promise = y,
            this.state = 0,
            this.triggered = !1,
            this.chain = [],
            this.msg = void 0
        }
        function m(y) {
            if (typeof y != "function")
                throw TypeError("Not a function");
            if (this.__NPO__ !== 0)
                throw TypeError("Not a promise");
            this.__NPO__ = 1;
            var _ = new g(this);
            this.then = function(b, T) {
                var k = {
                    success: typeof b == "function" ? b : !0,
                    failure: typeof T == "function" ? T : !1
                };
                return k.promise = new this.constructor(function(D, $) {
                    if (typeof D != "function" || typeof $ != "function")
                        throw TypeError("Not a function");
                    k.resolve = D,
                    k.reject = $
                }
                ),
                _.chain.push(k),
                _.state !== 0 && a(c, _),
                k.promise
            }
            ,
            this.catch = function(b) {
                return this.then(void 0, b)
            }
            ;
            try {
                y.call(void 0, function(b) {
                    h.call(_, b)
                }, function(b) {
                    d.call(_, b)
                })
            } catch (w) {
                d.call(_, w)
            }
        }
        var v = r({}, "constructor", m, !1);
        return m.prototype = v,
        r(v, "__NPO__", 0, !1),
        r(m, "resolve", function(_) {
            var w = this;
            return _ && typeof _ == "object" && _.__NPO__ === 1 ? _ : new w(function(T, k) {
                if (typeof T != "function" || typeof k != "function")
                    throw TypeError("Not a function");
                T(_)
            }
            )
        }),
        r(m, "reject", function(_) {
            return new this(function(b, T) {
                if (typeof b != "function" || typeof T != "function")
                    throw TypeError("Not a function");
                T(_)
            }
            )
        }),
        r(m, "all", function(_) {
            var w = this;
            return n.call(_) != "[object Array]" ? w.reject(TypeError("Not an array")) : _.length === 0 ? w.resolve([]) : new w(function(T, k) {
                if (typeof T != "function" || typeof k != "function")
                    throw TypeError("Not a function");
                var S = _.length
                  , D = Array(S)
                  , $ = 0;
                u(w, _, function(P, E) {
                    D[P] = E,
                    ++$ === S && T(D)
                }, k)
            }
            )
        }),
        r(m, "race", function(_) {
            var w = this;
            return n.call(_) != "[object Array]" ? w.reject(TypeError("Not an array")) : new w(function(T, k) {
                if (typeof T != "function" || typeof k != "function")
                    throw TypeError("Not a function");
                u(w, _, function(D, $) {
                    T($)
                }, k)
            }
            )
        }),
        m
    })
})
  , Hr = new WeakMap;
function Fn(o, e, r) {
    var t = Hr.get(o.element) || {};
    e in t || (t[e] = []),
    t[e].push(r),
    Hr.set(o.element, t)
}
function Ms(o, e) {
    var r = Hr.get(o.element) || {};
    return r[e] || []
}
function Ps(o, e, r) {
    var t = Hr.get(o.element) || {};
    if (!t[e])
        return !0;
    if (!r)
        return t[e] = [],
        Hr.set(o.element, t),
        !0;
    var i = t[e].indexOf(r);
    return i !== -1 && t[e].splice(i, 1),
    Hr.set(o.element, t),
    t[e] && t[e].length === 0
}
function ig(o, e) {
    var r = Ms(o, e);
    if (r.length < 1)
        return !1;
    var t = r.shift();
    return Ps(o, e, t),
    t
}
function ng(o, e) {
    var r = Hr.get(o);
    Hr.set(e, r),
    Hr.delete(o)
}
function As(o) {
    if (typeof o == "string")
        try {
            o = JSON.parse(o)
        } catch (e) {
            return console.warn(e),
            {}
        }
    return o
}
function vi(o, e, r) {
    if (!(!o.element.contentWindow || !o.element.contentWindow.postMessage)) {
        var t = {
            method: e
        };
        r !== void 0 && (t.value = r);
        var i = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
        i >= 8 && i < 10 && (t = JSON.stringify(t)),
        o.element.contentWindow.postMessage(t, o.origin)
    }
}
function og(o, e) {
    e = As(e);
    var r = [], t;
    if (e.event) {
        if (e.event === "error") {
            var i = Ms(o, e.data.method);
            i.forEach(function(s) {
                var a = new Error(e.data.message);
                a.name = e.data.name,
                s.reject(a),
                Ps(o, e.data.method, s)
            })
        }
        r = Ms(o, "event:".concat(e.event)),
        t = e.data
    } else if (e.method) {
        var n = ig(o, e.method);
        n && (r.push(n),
        t = e.value)
    }
    r.forEach(function(s) {
        try {
            if (typeof s == "function") {
                s.call(o, t);
                return
            }
            s.resolve(t)
        } catch {}
    })
}
var sg = ["autopause", "autoplay", "background", "byline", "color", "colors", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
function eh(o) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return sg.reduce(function(r, t) {
        var i = o.getAttribute("data-vimeo-".concat(t));
        return (i || i === "") && (r[t] = i === "" ? 1 : i),
        r
    }, e)
}
function Tl(o, e) {
    var r = o.html;
    if (!e)
        throw new TypeError("An element must be provided");
    if (e.getAttribute("data-vimeo-initialized") !== null)
        return e.querySelector("iframe");
    var t = document.createElement("div");
    return t.innerHTML = r,
    e.appendChild(t.firstChild),
    e.setAttribute("data-vimeo-initialized", "true"),
    e.querySelector("iframe")
}
function th(o) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , r = arguments.length > 2 ? arguments[2] : void 0;
    return new Promise(function(t, i) {
        if (!Gi(o))
            throw new TypeError("“".concat(o, "” is not a vimeo.com url."));
        var n = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(o));
        for (var s in e)
            e.hasOwnProperty(s) && (n += "&".concat(s, "=").concat(encodeURIComponent(e[s])));
        var a = "XDomainRequest"in window ? new XDomainRequest : new XMLHttpRequest;
        a.open("GET", n, !0),
        a.onload = function() {
            if (a.status === 404) {
                i(new Error("“".concat(o, "” was not found.")));
                return
            }
            if (a.status === 403) {
                i(new Error("“".concat(o, "” is not embeddable.")));
                return
            }
            try {
                var l = JSON.parse(a.responseText);
                if (l.domain_status_code === 403) {
                    Tl(l, r),
                    i(new Error("“".concat(o, "” is not embeddable.")));
                    return
                }
                t(l)
            } catch (c) {
                i(c)
            }
        }
        ,
        a.onerror = function() {
            var l = a.status ? " (".concat(a.status, ")") : "";
            i(new Error("There was an error fetching the embed code from Vimeo".concat(l, ".")))
        }
        ,
        a.send()
    }
    )
}
function ag() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document
      , e = [].slice.call(o.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"))
      , r = function(i) {
        "console"in window && console.error && console.error("There was an error creating an embed: ".concat(i))
    };
    e.forEach(function(t) {
        try {
            if (t.getAttribute("data-vimeo-defer") !== null)
                return;
            var i = eh(t)
              , n = Jf(i);
            th(n, i, t).then(function(s) {
                return Tl(s, t)
            }).catch(r)
        } catch (s) {
            r(s)
        }
    })
}
function lg() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoPlayerResizeEmbeds_) {
        window.VimeoPlayerResizeEmbeds_ = !0;
        var e = function(t) {
            if (Gi(t.origin) && !(!t.data || t.data.event !== "spacechange")) {
                for (var i = o.querySelectorAll("iframe"), n = 0; n < i.length; n++)
                    if (i[n].contentWindow === t.source) {
                        var s = i[n].parentElement;
                        s.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
                        break
                    }
            }
        };
        window.addEventListener("message", e)
    }
}
function ug() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoSeoMetadataAppended) {
        window.VimeoSeoMetadataAppended = !0;
        var e = function(t) {
            if (Gi(t.origin)) {
                var i = As(t.data);
                if (!(!i || i.event !== "ready"))
                    for (var n = o.querySelectorAll("iframe"), s = 0; s < n.length; s++) {
                        var a = n[s]
                          , l = a.contentWindow === t.source;
                        if (Zf(a.src) && l) {
                            var c = new Sl(a);
                            c.callMethod("appendVideoMetadata", window.location.href)
                        }
                    }
            }
        };
        window.addEventListener("message", e)
    }
}
function cg() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    if (!window.VimeoCheckedUrlTimeParam) {
        window.VimeoCheckedUrlTimeParam = !0;
        var e = function(i) {
            "console"in window && console.error && console.error("There was an error getting video Id: ".concat(i))
        }
          , r = function(i) {
            if (Gi(i.origin)) {
                var n = As(i.data);
                if (!(!n || n.event !== "ready"))
                    for (var s = o.querySelectorAll("iframe"), a = function() {
                        var f = s[l]
                          , h = f.contentWindow === i.source;
                        if (Zf(f.src) && h) {
                            var d = new Sl(f);
                            d.getVideoId().then(function(u) {
                                var p = new RegExp("[?&]vimeo_t_".concat(u, "=([^&#]*)")).exec(window.location.href);
                                if (p && p[1]) {
                                    var g = decodeURI(p[1]);
                                    d.setCurrentTime(g)
                                }
                            }).catch(e)
                        }
                    }, l = 0; l < s.length; l++)
                        a()
            }
        };
        window.addEventListener("message", r)
    }
}
function fg() {
    var o = function() {
        for (var t, i = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, s = i.length, a = {}; n < s; n++)
            if (t = i[n],
            t && t[1]in document) {
                for (n = 0; n < t.length; n++)
                    a[i[0][n]] = t[n];
                return a
            }
        return !1
    }()
      , e = {
        fullscreenchange: o.fullscreenchange,
        fullscreenerror: o.fullscreenerror
    }
      , r = {
        request: function(i) {
            return new Promise(function(n, s) {
                var a = function c() {
                    r.off("fullscreenchange", c),
                    n()
                };
                r.on("fullscreenchange", a),
                i = i || document.documentElement;
                var l = i[o.requestFullscreen]();
                l instanceof Promise && l.then(a).catch(s)
            }
            )
        },
        exit: function() {
            return new Promise(function(i, n) {
                if (!r.isFullscreen) {
                    i();
                    return
                }
                var s = function l() {
                    r.off("fullscreenchange", l),
                    i()
                };
                r.on("fullscreenchange", s);
                var a = document[o.exitFullscreen]();
                a instanceof Promise && a.then(s).catch(n)
            }
            )
        },
        on: function(i, n) {
            var s = e[i];
            s && document.addEventListener(s, n)
        },
        off: function(i, n) {
            var s = e[i];
            s && document.removeEventListener(s, n)
        }
    };
    return Object.defineProperties(r, {
        isFullscreen: {
            get: function() {
                return !!document[o.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return document[o.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return !!document[o.fullscreenEnabled]
            }
        }
    }),
    r
}
var hg = {
    role: "viewer",
    autoPlayMuted: !0,
    allowedDrift: .3,
    maxAllowedDrift: 1,
    minCheckInterval: .1,
    maxRateAdjustment: .2,
    maxTimeToCatchUp: 1
}
  , dg = function(o) {
    Wp(r, o);
    var e = Kp(r);
    function r(t, i) {
        var n, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
        return Wf(this, r),
        n = e.call(this),
        os(as(n), "logger", void 0),
        os(as(n), "speedAdjustment", 0),
        os(as(n), "adjustSpeed", function() {
            var l = Si(Et().mark(function c(f, h) {
                var d;
                return Et().wrap(function(p) {
                    for (; ; )
                        switch (p.prev = p.next) {
                        case 0:
                            if (n.speedAdjustment !== h) {
                                p.next = 2;
                                break
                            }
                            return p.abrupt("return");
                        case 2:
                            return p.next = 4,
                            f.getPlaybackRate();
                        case 4:
                            return p.t0 = p.sent,
                            p.t1 = n.speedAdjustment,
                            p.t2 = p.t0 - p.t1,
                            p.t3 = h,
                            d = p.t2 + p.t3,
                            n.log("New playbackRate:  ".concat(d)),
                            p.next = 12,
                            f.setPlaybackRate(d);
                        case 12:
                            n.speedAdjustment = h;
                        case 13:
                        case "end":
                            return p.stop()
                        }
                }, c)
            }));
            return function(c, f) {
                return l.apply(this, arguments)
            }
        }()),
        n.logger = a,
        n.init(i, t, Nu(Nu({}, hg), s)),
        n
    }
    return jf(r, [{
        key: "disconnect",
        value: function() {
            this.dispatchEvent(new Event("disconnect"))
        }
    }, {
        key: "init",
        value: function() {
            var t = Si(Et().mark(function n(s, a, l) {
                var c = this, f, h, d;
                return Et().wrap(function(p) {
                    for (; ; )
                        switch (p.prev = p.next) {
                        case 0:
                            return p.next = 2,
                            this.waitForTOReadyState(s, "open");
                        case 2:
                            if (l.role !== "viewer") {
                                p.next = 10;
                                break
                            }
                            return p.next = 5,
                            this.updatePlayer(s, a, l);
                        case 5:
                            f = zu(s, "change", function() {
                                return c.updatePlayer(s, a, l)
                            }),
                            h = this.maintainPlaybackPosition(s, a, l),
                            this.addEventListener("disconnect", function() {
                                h.cancel(),
                                f.cancel()
                            }),
                            p.next = 14;
                            break;
                        case 10:
                            return p.next = 12,
                            this.updateTimingObject(s, a);
                        case 12:
                            d = zu(a, ["seeked", "play", "pause", "ratechange"], function() {
                                return c.updateTimingObject(s, a)
                            }, "on", "off"),
                            this.addEventListener("disconnect", function() {
                                return d.cancel()
                            });
                        case 14:
                        case "end":
                            return p.stop()
                        }
                }, n, this)
            }));
            function i(n, s, a) {
                return t.apply(this, arguments)
            }
            return i
        }()
    }, {
        key: "updateTimingObject",
        value: function() {
            var t = Si(Et().mark(function n(s, a) {
                return Et().wrap(function(c) {
                    for (; ; )
                        switch (c.prev = c.next) {
                        case 0:
                            return c.t0 = s,
                            c.next = 3,
                            a.getCurrentTime();
                        case 3:
                            return c.t1 = c.sent,
                            c.next = 6,
                            a.getPaused();
                        case 6:
                            if (!c.sent) {
                                c.next = 10;
                                break
                            }
                            c.t2 = 0,
                            c.next = 13;
                            break;
                        case 10:
                            return c.next = 12,
                            a.getPlaybackRate();
                        case 12:
                            c.t2 = c.sent;
                        case 13:
                            c.t3 = c.t2,
                            c.t4 = {
                                position: c.t1,
                                velocity: c.t3
                            },
                            c.t0.update.call(c.t0, c.t4);
                        case 16:
                        case "end":
                            return c.stop()
                        }
                }, n)
            }));
            function i(n, s) {
                return t.apply(this, arguments)
            }
            return i
        }()
    }, {
        key: "updatePlayer",
        value: function() {
            var t = Si(Et().mark(function n(s, a, l) {
                var c, f, h;
                return Et().wrap(function(u) {
                    for (; ; )
                        switch (u.prev = u.next) {
                        case 0:
                            if (c = s.query(),
                            f = c.position,
                            h = c.velocity,
                            typeof f == "number" && a.setCurrentTime(f),
                            typeof h != "number") {
                                u.next = 25;
                                break
                            }
                            if (h !== 0) {
                                u.next = 11;
                                break
                            }
                            return u.next = 6,
                            a.getPaused();
                        case 6:
                            if (u.t0 = u.sent,
                            u.t0 !== !1) {
                                u.next = 9;
                                break
                            }
                            a.pause();
                        case 9:
                            u.next = 25;
                            break;
                        case 11:
                            if (!(h > 0)) {
                                u.next = 25;
                                break
                            }
                            return u.next = 14,
                            a.getPaused();
                        case 14:
                            if (u.t1 = u.sent,
                            u.t1 !== !0) {
                                u.next = 19;
                                break
                            }
                            return u.next = 18,
                            a.play().catch(function() {
                                var p = Si(Et().mark(function g(m) {
                                    return Et().wrap(function(y) {
                                        for (; ; )
                                            switch (y.prev = y.next) {
                                            case 0:
                                                if (!(m.name === "NotAllowedError" && l.autoPlayMuted)) {
                                                    y.next = 5;
                                                    break
                                                }
                                                return y.next = 3,
                                                a.setMuted(!0);
                                            case 3:
                                                return y.next = 5,
                                                a.play().catch(function(_) {
                                                    return console.error("Couldn't play the video from TimingSrcConnector. Error:", _)
                                                });
                                            case 5:
                                            case "end":
                                                return y.stop()
                                            }
                                    }, g)
                                }));
                                return function(g) {
                                    return p.apply(this, arguments)
                                }
                            }());
                        case 18:
                            this.updatePlayer(s, a, l);
                        case 19:
                            return u.next = 21,
                            a.getPlaybackRate();
                        case 21:
                            if (u.t2 = u.sent,
                            u.t3 = h,
                            u.t2 === u.t3) {
                                u.next = 25;
                                break
                            }
                            a.setPlaybackRate(h);
                        case 25:
                        case "end":
                            return u.stop()
                        }
                }, n, this)
            }));
            function i(n, s, a) {
                return t.apply(this, arguments)
            }
            return i
        }()
    }, {
        key: "maintainPlaybackPosition",
        value: function(i, n, s) {
            var a = this
              , l = s.allowedDrift
              , c = s.maxAllowedDrift
              , f = s.minCheckInterval
              , h = s.maxRateAdjustment
              , d = s.maxTimeToCatchUp
              , u = Math.min(d, Math.max(f, c)) * 1e3
              , p = function() {
                var m = Si(Et().mark(function v() {
                    var y, _, w, b, T;
                    return Et().wrap(function(S) {
                        for (; ; )
                            switch (S.prev = S.next) {
                            case 0:
                                if (S.t0 = i.query().velocity === 0,
                                S.t0) {
                                    S.next = 6;
                                    break
                                }
                                return S.next = 4,
                                n.getPaused();
                            case 4:
                                S.t1 = S.sent,
                                S.t0 = S.t1 === !0;
                            case 6:
                                if (!S.t0) {
                                    S.next = 8;
                                    break
                                }
                                return S.abrupt("return");
                            case 8:
                                return S.t2 = i.query().position,
                                S.next = 11,
                                n.getCurrentTime();
                            case 11:
                                if (S.t3 = S.sent,
                                y = S.t2 - S.t3,
                                _ = Math.abs(y),
                                a.log("Drift: ".concat(y)),
                                !(_ > c)) {
                                    S.next = 22;
                                    break
                                }
                                return S.next = 18,
                                a.adjustSpeed(n, 0);
                            case 18:
                                n.setCurrentTime(i.query().position),
                                a.log("Resync by currentTime"),
                                S.next = 29;
                                break;
                            case 22:
                                if (!(_ > l)) {
                                    S.next = 29;
                                    break
                                }
                                return w = _ / d,
                                b = h,
                                T = w < b ? (b - w) / 2 : b,
                                S.next = 28,
                                a.adjustSpeed(n, T * Math.sign(y));
                            case 28:
                                a.log("Resync by playbackRate");
                            case 29:
                            case "end":
                                return S.stop()
                            }
                    }, v)
                }));
                return function() {
                    return m.apply(this, arguments)
                }
            }()
              , g = setInterval(function() {
                return p()
            }, u);
            return {
                cancel: function() {
                    return clearInterval(g)
                }
            }
        }
    }, {
        key: "log",
        value: function(i) {
            var n;
            (n = this.logger) === null || n === void 0 || n.call(this, "TimingSrcConnector: ".concat(i))
        }
    }, {
        key: "waitForTOReadyState",
        value: function(i, n) {
            return new Promise(function(s) {
                var a = function l() {
                    i.readyState === n ? s() : i.addEventListener("readystatechange", l, {
                        once: !0
                    })
                };
                a()
            }
            )
        }
    }]),
    r
}(Wa(EventTarget))
  , Zi = new WeakMap
  , oa = new WeakMap
  , Ft = {}
  , Sl = function() {
    function o(e) {
        var r = this
          , t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (Wf(this, o),
        window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."),
        e = e[0]),
        typeof document < "u" && typeof e == "string" && (e = document.getElementById(e)),
        !Zp(e))
            throw new TypeError("You must pass either a valid element or a valid id.");
        if (e.nodeName !== "IFRAME") {
            var i = e.querySelector("iframe");
            i && (e = i)
        }
        if (e.nodeName === "IFRAME" && !Gi(e.getAttribute("src") || ""))
            throw new Error("The player element passed isn’t a Vimeo embed.");
        if (Zi.has(e))
            return Zi.get(e);
        this._window = e.ownerDocument.defaultView,
        this.element = e,
        this.origin = "*";
        var n = new nr(function(a, l) {
            if (r._onMessage = function(h) {
                if (!(!Gi(h.origin) || r.element.contentWindow !== h.source)) {
                    r.origin === "*" && (r.origin = h.origin);
                    var d = As(h.data)
                      , u = d && d.event === "error"
                      , p = u && d.data && d.data.method === "ready";
                    if (p) {
                        var g = new Error(d.data.message);
                        g.name = d.data.name,
                        l(g);
                        return
                    }
                    var m = d && d.event === "ready"
                      , v = d && d.method === "ping";
                    if (m || v) {
                        r.element.setAttribute("data-ready", "true"),
                        a();
                        return
                    }
                    og(r, d)
                }
            }
            ,
            r._window.addEventListener("message", r._onMessage),
            r.element.nodeName !== "IFRAME") {
                var c = eh(e, t)
                  , f = Jf(c);
                th(f, c, e).then(function(h) {
                    var d = Tl(h, e);
                    return r.element = d,
                    r._originalElement = e,
                    ng(e, d),
                    Zi.set(r.element, r),
                    h
                }).catch(l)
            }
        }
        );
        if (oa.set(this, n),
        Zi.set(this.element, this),
        this.element.nodeName === "IFRAME" && vi(this, "ping"),
        Ft.isEnabled) {
            var s = function() {
                return Ft.exit()
            };
            this.fullscreenchangeHandler = function() {
                Ft.isFullscreen ? Fn(r, "event:exitFullscreen", s) : Ps(r, "event:exitFullscreen", s),
                r.ready().then(function() {
                    vi(r, "fullscreenchange", Ft.isFullscreen)
                })
            }
            ,
            Ft.on("fullscreenchange", this.fullscreenchangeHandler)
        }
        return this
    }
    return jf(o, [{
        key: "callMethod",
        value: function(r) {
            var t = this
              , i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return new nr(function(n, s) {
                return t.ready().then(function() {
                    Fn(t, r, {
                        resolve: n,
                        reject: s
                    }),
                    vi(t, r, i)
                }).catch(s)
            }
            )
        }
    }, {
        key: "get",
        value: function(r) {
            var t = this;
            return new nr(function(i, n) {
                return r = $u(r, "get"),
                t.ready().then(function() {
                    Fn(t, r, {
                        resolve: i,
                        reject: n
                    }),
                    vi(t, r)
                }).catch(n)
            }
            )
        }
    }, {
        key: "set",
        value: function(r, t) {
            var i = this;
            return new nr(function(n, s) {
                if (r = $u(r, "set"),
                t == null)
                    throw new TypeError("There must be a value to set.");
                return i.ready().then(function() {
                    Fn(i, r, {
                        resolve: n,
                        reject: s
                    }),
                    vi(i, r, t)
                }).catch(s)
            }
            )
        }
    }, {
        key: "on",
        value: function(r, t) {
            if (!r)
                throw new TypeError("You must pass an event name.");
            if (!t)
                throw new TypeError("You must pass a callback function.");
            if (typeof t != "function")
                throw new TypeError("The callback must be a function.");
            var i = Ms(this, "event:".concat(r));
            i.length === 0 && this.callMethod("addEventListener", r).catch(function() {}),
            Fn(this, "event:".concat(r), t)
        }
    }, {
        key: "off",
        value: function(r, t) {
            if (!r)
                throw new TypeError("You must pass an event name.");
            if (t && typeof t != "function")
                throw new TypeError("The callback must be a function.");
            var i = Ps(this, "event:".concat(r), t);
            i && this.callMethod("removeEventListener", r).catch(function(n) {})
        }
    }, {
        key: "loadVideo",
        value: function(r) {
            return this.callMethod("loadVideo", r)
        }
    }, {
        key: "ready",
        value: function() {
            var r = oa.get(this) || new nr(function(t, i) {
                i(new Error("Unknown player. Probably unloaded."))
            }
            );
            return nr.resolve(r)
        }
    }, {
        key: "addCuePoint",
        value: function(r) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return this.callMethod("addCuePoint", {
                time: r,
                data: t
            })
        }
    }, {
        key: "removeCuePoint",
        value: function(r) {
            return this.callMethod("removeCuePoint", r)
        }
    }, {
        key: "enableTextTrack",
        value: function(r, t) {
            if (!r)
                throw new TypeError("You must pass a language.");
            return this.callMethod("enableTextTrack", {
                language: r,
                kind: t
            })
        }
    }, {
        key: "disableTextTrack",
        value: function() {
            return this.callMethod("disableTextTrack")
        }
    }, {
        key: "pause",
        value: function() {
            return this.callMethod("pause")
        }
    }, {
        key: "play",
        value: function() {
            return this.callMethod("play")
        }
    }, {
        key: "requestFullscreen",
        value: function() {
            return Ft.isEnabled ? Ft.request(this.element) : this.callMethod("requestFullscreen")
        }
    }, {
        key: "exitFullscreen",
        value: function() {
            return Ft.isEnabled ? Ft.exit() : this.callMethod("exitFullscreen")
        }
    }, {
        key: "getFullscreen",
        value: function() {
            return Ft.isEnabled ? nr.resolve(Ft.isFullscreen) : this.get("fullscreen")
        }
    }, {
        key: "requestPictureInPicture",
        value: function() {
            return this.callMethod("requestPictureInPicture")
        }
    }, {
        key: "exitPictureInPicture",
        value: function() {
            return this.callMethod("exitPictureInPicture")
        }
    }, {
        key: "getPictureInPicture",
        value: function() {
            return this.get("pictureInPicture")
        }
    }, {
        key: "remotePlaybackPrompt",
        value: function() {
            return this.callMethod("remotePlaybackPrompt")
        }
    }, {
        key: "unload",
        value: function() {
            return this.callMethod("unload")
        }
    }, {
        key: "destroy",
        value: function() {
            var r = this;
            return new nr(function(t) {
                if (oa.delete(r),
                Zi.delete(r.element),
                r._originalElement && (Zi.delete(r._originalElement),
                r._originalElement.removeAttribute("data-vimeo-initialized")),
                r.element && r.element.nodeName === "IFRAME" && r.element.parentNode && (r.element.parentNode.parentNode && r._originalElement && r._originalElement !== r.element.parentNode ? r.element.parentNode.parentNode.removeChild(r.element.parentNode) : r.element.parentNode.removeChild(r.element)),
                r.element && r.element.nodeName === "DIV" && r.element.parentNode) {
                    r.element.removeAttribute("data-vimeo-initialized");
                    var i = r.element.querySelector("iframe");
                    i && i.parentNode && (i.parentNode.parentNode && r._originalElement && r._originalElement !== i.parentNode ? i.parentNode.parentNode.removeChild(i.parentNode) : i.parentNode.removeChild(i))
                }
                r._window.removeEventListener("message", r._onMessage),
                Ft.isEnabled && Ft.off("fullscreenchange", r.fullscreenchangeHandler),
                t()
            }
            )
        }
    }, {
        key: "getAutopause",
        value: function() {
            return this.get("autopause")
        }
    }, {
        key: "setAutopause",
        value: function(r) {
            return this.set("autopause", r)
        }
    }, {
        key: "getBuffered",
        value: function() {
            return this.get("buffered")
        }
    }, {
        key: "getCameraProps",
        value: function() {
            return this.get("cameraProps")
        }
    }, {
        key: "setCameraProps",
        value: function(r) {
            return this.set("cameraProps", r)
        }
    }, {
        key: "getChapters",
        value: function() {
            return this.get("chapters")
        }
    }, {
        key: "getCurrentChapter",
        value: function() {
            return this.get("currentChapter")
        }
    }, {
        key: "getColor",
        value: function() {
            return this.get("color")
        }
    }, {
        key: "getColors",
        value: function() {
            return nr.all([this.get("colorOne"), this.get("colorTwo"), this.get("colorThree"), this.get("colorFour")])
        }
    }, {
        key: "setColor",
        value: function(r) {
            return this.set("color", r)
        }
    }, {
        key: "setColors",
        value: function(r) {
            if (!Array.isArray(r))
                return new nr(function(n, s) {
                    return s(new TypeError("Argument must be an array."))
                }
                );
            var t = new nr(function(n) {
                return n(null)
            }
            )
              , i = [r[0] ? this.set("colorOne", r[0]) : t, r[1] ? this.set("colorTwo", r[1]) : t, r[2] ? this.set("colorThree", r[2]) : t, r[3] ? this.set("colorFour", r[3]) : t];
            return nr.all(i)
        }
    }, {
        key: "getCuePoints",
        value: function() {
            return this.get("cuePoints")
        }
    }, {
        key: "getCurrentTime",
        value: function() {
            return this.get("currentTime")
        }
    }, {
        key: "setCurrentTime",
        value: function(r) {
            return this.set("currentTime", r)
        }
    }, {
        key: "getDuration",
        value: function() {
            return this.get("duration")
        }
    }, {
        key: "getEnded",
        value: function() {
            return this.get("ended")
        }
    }, {
        key: "getLoop",
        value: function() {
            return this.get("loop")
        }
    }, {
        key: "setLoop",
        value: function(r) {
            return this.set("loop", r)
        }
    }, {
        key: "setMuted",
        value: function(r) {
            return this.set("muted", r)
        }
    }, {
        key: "getMuted",
        value: function() {
            return this.get("muted")
        }
    }, {
        key: "getPaused",
        value: function() {
            return this.get("paused")
        }
    }, {
        key: "getPlaybackRate",
        value: function() {
            return this.get("playbackRate")
        }
    }, {
        key: "setPlaybackRate",
        value: function(r) {
            return this.set("playbackRate", r)
        }
    }, {
        key: "getPlayed",
        value: function() {
            return this.get("played")
        }
    }, {
        key: "getQualities",
        value: function() {
            return this.get("qualities")
        }
    }, {
        key: "getQuality",
        value: function() {
            return this.get("quality")
        }
    }, {
        key: "setQuality",
        value: function(r) {
            return this.set("quality", r)
        }
    }, {
        key: "getRemotePlaybackAvailability",
        value: function() {
            return this.get("remotePlaybackAvailability")
        }
    }, {
        key: "getRemotePlaybackState",
        value: function() {
            return this.get("remotePlaybackState")
        }
    }, {
        key: "getSeekable",
        value: function() {
            return this.get("seekable")
        }
    }, {
        key: "getSeeking",
        value: function() {
            return this.get("seeking")
        }
    }, {
        key: "getTextTracks",
        value: function() {
            return this.get("textTracks")
        }
    }, {
        key: "getVideoEmbedCode",
        value: function() {
            return this.get("videoEmbedCode")
        }
    }, {
        key: "getVideoId",
        value: function() {
            return this.get("videoId")
        }
    }, {
        key: "getVideoTitle",
        value: function() {
            return this.get("videoTitle")
        }
    }, {
        key: "getVideoWidth",
        value: function() {
            return this.get("videoWidth")
        }
    }, {
        key: "getVideoHeight",
        value: function() {
            return this.get("videoHeight")
        }
    }, {
        key: "getVideoUrl",
        value: function() {
            return this.get("videoUrl")
        }
    }, {
        key: "getVolume",
        value: function() {
            return this.get("volume")
        }
    }, {
        key: "setVolume",
        value: function(r) {
            return this.set("volume", r)
        }
    }, {
        key: "setTimingSrc",
        value: function() {
            var e = Si(Et().mark(function t(i, n) {
                var s = this, a;
                return Et().wrap(function(c) {
                    for (; ; )
                        switch (c.prev = c.next) {
                        case 0:
                            if (i) {
                                c.next = 2;
                                break
                            }
                            throw new TypeError("A Timing Object must be provided.");
                        case 2:
                            return c.next = 4,
                            this.ready();
                        case 4:
                            return a = new dg(this,i,n),
                            vi(this, "notifyTimingObjectConnect"),
                            a.addEventListener("disconnect", function() {
                                return vi(s, "notifyTimingObjectDisconnect")
                            }),
                            c.abrupt("return", a);
                        case 8:
                        case "end":
                            return c.stop()
                        }
                }, t, this)
            }));
            function r(t, i) {
                return e.apply(this, arguments)
            }
            return r
        }()
    }]),
    o
}();
Qf || (Ft = fg(),
ag(),
lg(),
ug(),
cg());
class pg extends Mt {
    init() {
        this.id = this.block.getAttribute("data-id"),
        this.cover = this.block.classList.contains("video--cover");
        var e = {
            id: this.id,
            background: this.cover
        };
        this.player = new Sl(this.block,e),
        this.cover && Promise.all([this.player.getVideoWidth(), this.player.getVideoHeight()]).then(r=>{
            const [t,i] = r;
            this.aspectRatio = t / i,
            this.updatePosition()
        }
        ),
        this.updatePosition = this.updatePosition.bind(this)
    }
    initEvents() {
        this.cover && window.addEventListener("resize", this.updatePosition)
    }
    updatePosition() {
        const e = this.block.getBoundingClientRect()
          , r = e.width / e.height;
        r < this.aspectRatio ? (this.player.element.style.width = `${this.aspectRatio / r * 100}%`,
        this.player.element.style.height = "") : (this.player.element.style.height = `${r / this.aspectRatio * 100}%`,
        this.player.element.style.width = "")
    }
}
H.registerPlugin(ve);
class gg extends Mt {
    init() {
        const e = {
            wrap: this.block,
            braces: this.block.querySelectorAll(".subtitle__brace"),
            label: this.block.querySelectorAll(".subtitle__label")
        };
        this.DOM = e,
        this.startDelay = Number(this.block.dataset.delay),
        this.buildOn()
    }
    buildOn() {
        const e = H.timeline({
            defaults: {
                ease: "power3.out",
                duration: .3
            },
            scrollTrigger: {
                trigger: this.block,
                start: "top 90%",
                once: !0
            }
        });
        H.set(this.DOM.wrap, {
            autoAlpha: 1
        }),
        Ls(()=>{
            e.from(this.DOM.label, {
                opacity: 0,
                duration: .7,
                delay: this.startDelay
            }).from(this.DOM.braces[0], {
                opacity: 0,
                xPercent: 100
            }, "<0.1").from(this.DOM.braces[1], {
                opacity: 0,
                xPercent: -100
            }, "<")
        }
        )
    }
}
H.registerPlugin(zi, xl);
class mg extends Mt {
    init() {
        const e = {
            wrapper: this.block,
            container: this.block.querySelector(".tools-morelinks__main"),
            carousel: this.block.querySelector(".tools-morelinks__items"),
            items: this.block.querySelectorAll(".tools-morelinks__item")
        };
        this.DOM = e,
        this.initMoreLinks()
    }
    setBounds() {
        zi.get(this.DOM.carousel).applyBounds({
            minX: -this.DOM.carousel.offsetWidth + this.DOM.container.offsetWidth + 16,
            maxX: 0
        })
    }
    createCarousel() {
        zi.create(this.DOM.carousel, {
            type: "x",
            edgeResistance: 1,
            inertia: !0,
            maxDuration: .5,
            snap: {
                x: e=>{
                    const r = this.DOM.items[0].offsetWidth
                      , t = H.utils.snap(r, e);
                    return t === 0 ? 0 : t
                }
            }
        }),
        this.setBounds()
    }
    initMoreLinks() {
        this.DOM.items && (this.createCarousel(),
        window.addEventListener("resize", this.setBounds.bind(this)))
    }
}
H.registerPlugin(ve);
class _g extends Mt {
    init() {
        const e = {
            select: this.block.querySelector(".demos__plugins-groups-select"),
            pluginSelect: this.block.querySelector(".demos__plugin-select"),
            plugins: this.block.querySelectorAll(".demos__plugins-groups-plugins"),
            buttons: this.block.querySelectorAll("[data-demos-btn]"),
            demoButton: this.block.querySelector("[data-js=demo-button]"),
            docsButton: this.block.querySelector("[data-js=docs-button]"),
            iframe: this.block.querySelector(".js-demo-iframe")
        };
        this.DOM = e,
        !(!this.DOM.select || !this.DOM.plugins) && (this.demos = [{
            label: "Draggable",
            demo: "https://gsap.com/demos/draggable-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/yLGqXzZ/4b6f3a7c39c03c70f5714fcaeb621b74"
        }, {
            label: "Flip",
            demo: "https://gsap.com/demos/flip-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/abPjLXM/8d966ec68b6049e6e2ef0e8a103350f1"
        }, {
            label: "MotionPath",
            docs: "/docs/v3/Plugins/MotionPathPlugin/",
            demo: "https://gsap.com/demos/motionpath-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/XWoBypQ/6e2b1f4aa6f8d3eaf58b5dee14dcc047"
        }, {
            label: "Observer",
            demo: "https://gsap.com/demos/observer-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/MWZBzVx/10b5c6ff57817ae73521e89507b6b098"
        }, {
            label: "Pixi",
            docs: "/docs/v3/Plugins/PixiPlugin/",
            demo: "https://gsap.com/demos/pixi-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/RwEBEGM/60c48f7b8759c3dfc1d968b7933662ac"
        }, {
            label: "ScrollTo",
            docs: "/docs/v3/Plugins/ScrollToPlugin/",
            demo: "https://gsap.com/demos/scrollto-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/abPjMPv/c8b66b7c95249052b3ed9083b312c223"
        }, {
            label: "ScrollTrigger",
            demo: "https://gsap.com/demos/scrolltrigger-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/abPampm/a2d12f3d8397078d3f031aaaba1b5166"
        }, {
            label: "Text",
            docs: "/docs/v3/Plugins/TextPlugin/",
            demo: "https://gsap.com/demos/text-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/gOZdRqG/5a078fd21ea63c46923f739f2acd35be"
        }, {
            label: "Physics2D",
            docs: "/docs/v3/Plugins/Physics2DPlugin/",
            demo: "https://gsap.com/demos/physics2d-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/YzdOVbK/9d71c2a8fba370750b141cc79e3b6e78"
        }, {
            label: "DrawSVG",
            docs: "/docs/v3/Plugins/DrawSVGPlugin/",
            demo: "https://gsap.com/demos/drawsvg-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/VwqEYdr/92153ee6bedcb123888a24e670ce80d0 "
        }, {
            label: "PhysicsProps",
            docs: "/docs/v3/Plugins/PhysicsPropsPlugin/",
            demo: "https://gsap.com/demos/physicsprops-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/ZEVqYmb/cac05879b8b3e6c0ffdcac81f02c9371"
        }, {
            label: "ScrambleText",
            docs: "/docs/v3/Plugins/ScrambleTextPlugin/",
            demo: "https://gsap.com/demos/scrambletext-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/QWzZwxR/3cd896781ae5d2a4525bf403f610718c"
        }, {
            label: "CustomBounce",
            docs: "/docs/v3/Easing/CustomBounce/",
            demo: "https://gsap.com/demos/custombounce-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/poqxvOz/7abe6c897f47831196296e71f5fa6ea1"
        }, {
            label: "CustomWiggle",
            docs: "/docs/v3/Easing/CustomWiggle/",
            demo: "https://gsap.com/demos/customwiggle-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/OJrBPoB/c29b6c31b7bf45b8ab0f7c6bb12fe26d"
        }, {
            label: "MorphSVG",
            docs: "/docs/v3/Plugins/MorphSVGPlugin/",
            demo: "https://gsap.com/demos/morphsvg-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/BavOJVM/5912e6c31ea671cd3bc347b5adf0a599"
        }, {
            label: "Inertia",
            docs: "/docs/v3/Plugins/InertiaPlugin/",
            demo: "https://gsap.com/demos/inertia-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/NWeLyrq/d669938b4b29c7fcec771f9e6a378382"
        }, {
            label: "SplitText",
            demo: "https://gsap.com/demos/splittext-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/xxmaNYj/231e5c51fb2885bdeea366bfe5c63c22"
        }, {
            label: "MotionPathHelper",
            demo: "https://gsap.com/demos/motionpathhelper-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/WNLgVbg/b1f427b4b5ab608a0e5eac3856aed105"
        }, {
            label: "GSDevTools",
            demo: "https://gsap.com/demos/gsdevtools-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/bGOmbNX/6a7faddc3ec1abab17d9213aee03832a "
        }, {
            label: "ScrollSmoother",
            demo: "https://gsap.com/demos/scrollsmoother-demo.html",
            codepen: "https://codepen.io/GreenSock/pen/GRPYKQb/ba77b64f5f959d5847a0abf52f1f702b"
        }],
        this.handleSelect(),
        this.handlePluginSelect())
    }
    initEvents() {
        const e = "is-active";
        this.DOM.buttons.forEach(r=>{
            r.addEventListener("click", t=>{
                this.updateDemo(t.target.innerText),
                this.DOM.buttons.forEach(i=>{
                    i.classList.remove(e)
                }
                ),
                r.classList.add(e)
            }
            )
        }
        )
    }
    handleSelect() {
        this.DOM.select.addEventListener("change", e=>{
            this.DOM.plugins.forEach(r=>{
                r.classList.remove("demos__plugins-groups-plugins--active")
            }
            ),
            this.DOM.plugins[this.DOM.select.value].classList.add("demos__plugins-groups-plugins--active")
        }
        )
    }
    handlePluginSelect() {
        this.DOM.pluginSelect.addEventListener("change", e=>{
            this.updateDemo(this.DOM.pluginSelect.value)
        }
        )
    }
    findDemosByLabel(e) {
        const r = e.toLowerCase();
        for (const t of this.demos)
            if (t.label.toLowerCase() === r)
                return {
                    demo: t.demo,
                    codepen: t.codepen,
                    docs: t.docs
                };
        return {
            demo: null,
            codepen: null
        }
    }
    updateDemo(e) {
        const {demo: r, codepen: t, docs: i} = this.findDemosByLabel(e);
        this.DOM.iframe.src = r,
        this.DOM.demoButton.setAttribute("href", t);
        let n = i && i.length ? i : `/docs/v3/Plugins/${e}`;
        this.DOM.docsButton.setAttribute("href", n)
    }
}
class yg extends Mt {
    init() {
        const e = {
            items: this.block.querySelectorAll(".testimonials__item"),
            controls: this.block.querySelectorAll(".testimonials__control--button"),
            previous: this.block.querySelector(".prev"),
            next: this.block.querySelector(".next")
        };
        this.el = e,
        this.previousIndex = 0,
        this.currentIndex = 0,
        this.controlIndex = 0,
        this.handleNavigation(),
        this.navigateToNextSlide = this.navigateToNextSlide.bind(this)
    }
    handleNavigation() {
        this.el.controls.forEach(e=>{
            e.addEventListener("click", r=>{
                const t = parseInt(r.target.dataset.index);
                this.updateCurrent(t)
            }
            )
        }
        ),
        this.el.previous.addEventListener("click", ()=>{
            this.navigateToPreviousSlide()
        }
        ),
        this.el.next.addEventListener("click", ()=>{
            this.navigateToNextSlide()
        }
        )
    }
    navigateToPreviousSlide() {
        const e = this.currentIndex > 0 ? this.currentIndex - 1 : this.el.items.length - 1;
        this.updateCurrent(e)
    }
    navigateToNextSlide() {
        const e = this.currentIndex < this.el.items.length - 1 ? this.currentIndex + 1 : 0;
        this.updateCurrent(e)
    }
    updateCurrent(e) {
        this.disableButtons(),
        this.currentIndex = e,
        this.handleTestimonialState(),
        this.transitionOut()
    }
    transitionOut() {
        const e = this.previousIndex
          , t = this.el.items[e]
          , i = {
            authorName: t.querySelector(".testimonials__author--name"),
            authorFlair: t.querySelector(".testimonials__author--flair"),
            quote: t.querySelector(".testimonials__quote"),
            image: t.querySelector(".testimonials__image"),
            imageClip: t.querySelector(".tesimonials__image--clip")
        };
        H.timeline({
            default: {
                ease: "power3.in"
            },
            onComplete: ()=>{
                this.transitionIn()
            }
        }).to([i.authorName, i.quote], {
            x: -40,
            autoAlpha: 0,
            duration: .3
        }, 0).to(i.image, {
            autoAlpha: 0,
            duration: .3
        }, 0).to(i.authorFlair, {
            scaleX: 0,
            duration: .3
        }, 0)
    }
    transitionIn() {
        const e = this.currentIndex
          , t = this.el.items[e]
          , i = {
            authorName: t.querySelector(".testimonials__author--name"),
            authorFlair: t.querySelector(".testimonials__author--flair"),
            quote: t.querySelector(".testimonials__quote"),
            image: t.querySelector(".testimonials__image"),
            imageClip: t.querySelector(".tesimonials__image--clip")
        };
        H.timeline({
            delay: .1,
            defaults: {
                ease: "power3.out"
            },
            onComplete: ()=>{
                this.enableButtons()
            }
        }).fromTo(i.image, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: .4
        }).fromTo(i.quote, {
            x: -40,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            duration: .4
        }, .05).fromTo(i.authorName, {
            x: -40,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            duration: .4
        }, .15).fromTo(i.authorFlair, {
            scaleX: 0
        }, {
            scaleX: 1,
            duration: .4
        }, .15)
    }
    disableButtons() {
        this.el.controls.forEach(e=>{
            e.disabled = !0
        }
        ),
        this.el.previous.disabled = !0,
        this.el.next.disabled = !0
    }
    enableButtons() {
        this.previousIndex = this.currentIndex,
        this.el.controls.forEach(e=>{
            e.disabled = !1
        }
        ),
        this.el.previous.disabled = !1,
        this.el.next.disabled = !1
    }
    handleTestimonialState() {
        const e = this.currentIndex
          , r = this.el.items
          , t = this.el.controls;
        this.el.items.forEach(i=>i.classList.remove("testimonials__item--active")),
        this.el.controls.forEach(i=>i.classList.remove("testimonials__control--active")),
        r[e].classList.add("testimonials__item--active"),
        t[e].classList.add("testimonials__control--active")
    }
}
H.registerPlugin(Mn);
class vg extends Mt {
    init() {
        const e = H.utils.selector(this.block)
          , r = {
            block: this.block,
            get: e(".get-gsap-btn__word:first-child"),
            gsap: e(".get-gsap-btn__word:last-child"),
            icons: e(".get-gsap-btn__button svg"),
            circles: e("#btn-circles"),
            windmill: e("#btn-windmill"),
            square: e("#btn-square"),
            star: e("#btn-star")
        };
        this.DOM = r,
        this.eases = {
            airtime: Mn.create("custom", "M0,0 C0.05,0.356 0.377,0.435 0.5,0.5 0.61,0.558 0.948,0.652 1,1 "),
            rotaaaaate: Mn.create("custom", "M0,0 C0.148,0.346 0.254,0.444 0.5,0.5 0.751,0.557 0.852,0.646 1,1 ")
        },
        this.playing = !1,
        this.tl = this.createTimeline(),
        this.playTimeline = this.playTimeline.bind(this)
    }
    initEvents() {
        H.matchMedia().add("(min-width: 1240px) and (prefers-reduced-motion: no-preference)", ()=>(this.DOM.block.addEventListener("mouseenter", this.playTimeline),
        ()=>{
            this.DOM.block.removeEventListener("mouseenter", this.playTimeline)
        }
        ))
    }
    createTimeline() {
        const e = H.timeline({
            defaults: {
                duration: 1
            },
            paused: !0,
            onStart: ()=>{
                this.playing = !0
            }
            ,
            onComplete: ()=>{
                this.playing = !1
            }
        });
        return H.set([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            scale: 0
        }),
        e.set([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            scale: 0,
            x: 0,
            y: 10,
            rotateZ: 0
        }).set(this.DOM.icons[0], {
            yPercent: -140
        }).set(this.DOM.icons[1], {
            yPercent: 0
        }).to(this.DOM.get, {
            keyframes: [{
                x: -30,
                ease: "power4.out"
            }, {
                x: 0,
                ease: "power4.in"
            }]
        }).to(this.DOM.gsap, {
            keyframes: [{
                x: 30,
                ease: "power4.out"
            }, {
                x: 0,
                ease: "power4.in"
            }]
        }, "<").to(this.DOM.icons[0], {
            yPercent: 0,
            duration: .6,
            ease: "power3.in"
        }, "<.3").to(this.DOM.icons[1], {
            yPercent: 140,
            duration: .6,
            ease: "power3.out"
        }, "<").to([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            keyframes: [{
                scale: 0,
                zIndex: 2,
                duration: 0
            }, {
                y: ()=>H.utils.random(-80, -120),
                scale: 1
            }, {
                zIndex: -1,
                duration: .05
            }, {
                y: 0,
                scale: .3
            }],
            ease: this.eases.airtime,
            stagger: .15
        }, "<").to([this.DOM.circles, this.DOM.windmill, this.DOM.square, this.DOM.star], {
            x: ()=>H.utils.random(-50, 100),
            rotateZ: ()=>-360,
            ease: this.eases.rotaaaaate,
            stagger: .15
        }, "<"),
        e
    }
    playTimeline() {
        this.playing || this.tl.invalidate().play(0)
    }
}
class bg extends Mt {
    init() {
        const e = {
            block: this.block,
            video: this.block.querySelector("video")
        };
        this.DOM = e
    }
    initEvents() {
        H.matchMedia().add("(prefers-reduced-motion: no-preference) and (min-width: 1240px)", ()=>{
            this.DOM.block.addEventListener("mouseenter", ()=>{
                this.playVideo()
            }
            ),
            this.DOM.block.addEventListener("mouseleave", ()=>{
                this.stopVideo()
            }
            )
        }
        )
    }
    playVideo() {
        this.pauseTimeout && clearTimeout(this.pauseTimeout),
        this.DOM.video.currentTime = 0,
        this.DOM.video.play()
    }
    stopVideo() {
        this.pauseTimeout = setTimeout(()=>{
            this.DOM.video.pause()
        }
        , 1e3)
    }
}
H.registerPlugin(di);
class wg extends Mt {
    init() {
        Ls(()=>{
            di.create({
                smooth: 1.8,
                effects: !0
            }),
            document.body.classList.add("has-smooth-scroll")
        }
        )
    }
}
function xg(o, e) {
    for (var r = 0; r < e.length; r++) {
        var t = e[r];
        t.enumerable = t.enumerable || !1,
        t.configurable = !0,
        "value"in t && (t.writable = !0),
        Object.defineProperty(o, t.key, t)
    }
}
function Go(o) {
    return function(e) {
        if (Array.isArray(e))
            return sa(e)
    }(o) || function(e) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(e))
            return Array.from(e)
    }(o) || function(e, r) {
        if (e) {
            if (typeof e == "string")
                return sa(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (t === "Object" && e.constructor && (t = e.constructor.name),
            t === "Map" || t === "Set")
                return Array.from(e);
            if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return sa(e, r)
        }
    }(o) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }()
}
function sa(o, e) {
    (e == null || e > o.length) && (e = o.length);
    for (var r = 0, t = new Array(e); r < e; r++)
        t[r] = o[r];
    return t
}
var qu, aa, bi, la, Vu, ja = (qu = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'],
aa = function() {
    function o(t) {
        var i = t.targetModal
          , n = t.triggers
          , s = n === void 0 ? [] : n
          , a = t.onShow
          , l = a === void 0 ? function() {}
        : a
          , c = t.onClose
          , f = c === void 0 ? function() {}
        : c
          , h = t.openTrigger
          , d = h === void 0 ? "data-micromodal-trigger" : h
          , u = t.closeTrigger
          , p = u === void 0 ? "data-micromodal-close" : u
          , g = t.openClass
          , m = g === void 0 ? "is-open" : g
          , v = t.disableScroll
          , y = v !== void 0 && v
          , _ = t.disableFocus
          , w = _ !== void 0 && _
          , b = t.awaitCloseAnimation
          , T = b !== void 0 && b
          , k = t.awaitOpenAnimation
          , S = k !== void 0 && k
          , D = t.debugMode
          , $ = D !== void 0 && D;
        (function(B, P) {
            if (!(B instanceof P))
                throw new TypeError("Cannot call a class as a function")
        }
        )(this, o),
        this.modal = document.getElementById(i),
        this.config = {
            debugMode: $,
            disableScroll: y,
            openTrigger: d,
            closeTrigger: p,
            openClass: m,
            onShow: l,
            onClose: f,
            awaitCloseAnimation: T,
            awaitOpenAnimation: S,
            disableFocus: w
        },
        s.length > 0 && this.registerTriggers.apply(this, Go(s)),
        this.onClick = this.onClick.bind(this),
        this.onKeydown = this.onKeydown.bind(this)
    }
    var e, r;
    return e = o,
    (r = [{
        key: "registerTriggers",
        value: function() {
            for (var t = this, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                n[s] = arguments[s];
            n.filter(Boolean).forEach(function(a) {
                a.addEventListener("click", function(l) {
                    return t.showModal(l)
                })
            })
        }
    }, {
        key: "showModal",
        value: function() {
            var t = this
              , i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            if (this.activeElement = document.activeElement,
            this.modal.setAttribute("aria-hidden", "false"),
            this.modal.classList.add(this.config.openClass),
            this.scrollBehaviour("disable"),
            this.addEventListeners(),
            this.config.awaitOpenAnimation) {
                var n = function s() {
                    t.modal.removeEventListener("animationend", s, !1),
                    t.setFocusToFirstNode()
                };
                this.modal.addEventListener("animationend", n, !1)
            } else
                this.setFocusToFirstNode();
            this.config.onShow(this.modal, this.activeElement, i)
        }
    }, {
        key: "closeModal",
        value: function() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null
              , i = this.modal;
            if (this.modal.setAttribute("aria-hidden", "true"),
            this.removeEventListeners(),
            this.scrollBehaviour("enable"),
            this.activeElement && this.activeElement.focus && this.activeElement.focus(),
            this.config.onClose(this.modal, this.activeElement, t),
            this.config.awaitCloseAnimation) {
                var n = this.config.openClass;
                this.modal.addEventListener("animationend", function s() {
                    i.classList.remove(n),
                    i.removeEventListener("animationend", s, !1)
                }, !1)
            } else
                i.classList.remove(this.config.openClass)
        }
    }, {
        key: "closeModalById",
        value: function(t) {
            this.modal = document.getElementById(t),
            this.modal && this.closeModal()
        }
    }, {
        key: "scrollBehaviour",
        value: function(t) {
            if (this.config.disableScroll) {
                var i = document.querySelector("body");
                switch (t) {
                case "enable":
                    Object.assign(i.style, {
                        overflow: ""
                    });
                    break;
                case "disable":
                    Object.assign(i.style, {
                        overflow: "hidden"
                    })
                }
            }
        }
    }, {
        key: "addEventListeners",
        value: function() {
            this.modal.addEventListener("touchstart", this.onClick),
            this.modal.addEventListener("click", this.onClick),
            document.addEventListener("keydown", this.onKeydown)
        }
    }, {
        key: "removeEventListeners",
        value: function() {
            this.modal.removeEventListener("touchstart", this.onClick),
            this.modal.removeEventListener("click", this.onClick),
            document.removeEventListener("keydown", this.onKeydown)
        }
    }, {
        key: "onClick",
        value: function(t) {
            (t.target.hasAttribute(this.config.closeTrigger) || t.target.parentNode.hasAttribute(this.config.closeTrigger)) && (t.preventDefault(),
            t.stopPropagation(),
            this.closeModal(t))
        }
    }, {
        key: "onKeydown",
        value: function(t) {
            t.keyCode === 27 && this.closeModal(t),
            t.keyCode === 9 && this.retainFocus(t)
        }
    }, {
        key: "getFocusableNodes",
        value: function() {
            var t = this.modal.querySelectorAll(qu);
            return Array.apply(void 0, Go(t))
        }
    }, {
        key: "setFocusToFirstNode",
        value: function() {
            var t = this;
            if (!this.config.disableFocus) {
                var i = this.getFocusableNodes();
                if (i.length !== 0) {
                    var n = i.filter(function(s) {
                        return !s.hasAttribute(t.config.closeTrigger)
                    });
                    n.length > 0 && n[0].focus(),
                    n.length === 0 && i[0].focus()
                }
            }
        }
    }, {
        key: "retainFocus",
        value: function(t) {
            var i = this.getFocusableNodes();
            if (i.length !== 0)
                if (i = i.filter(function(s) {
                    return s.offsetParent !== null
                }),
                this.modal.contains(document.activeElement)) {
                    var n = i.indexOf(document.activeElement);
                    t.shiftKey && n === 0 && (i[i.length - 1].focus(),
                    t.preventDefault()),
                    !t.shiftKey && i.length > 0 && n === i.length - 1 && (i[0].focus(),
                    t.preventDefault())
                } else
                    i[0].focus()
        }
    }]) && xg(e.prototype, r),
    o
}(),
bi = null,
la = function(o) {
    if (!document.getElementById(o))
        return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(o, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."),
        console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(o, '"></div>')),
        !1
}
,
Vu = function(o, e) {
    if (function(t) {
        t.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."),
        console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'))
    }(o),
    !e)
        return !0;
    for (var r in e)
        la(r);
    return !0
}
,
{
    init: function(o) {
        var e = Object.assign({}, {
            openTrigger: "data-micromodal-trigger"
        }, o)
          , r = Go(document.querySelectorAll("[".concat(e.openTrigger, "]")))
          , t = function(s, a) {
            var l = [];
            return s.forEach(function(c) {
                var f = c.attributes[a].value;
                l[f] === void 0 && (l[f] = []),
                l[f].push(c)
            }),
            l
        }(r, e.openTrigger);
        if (e.debugMode !== !0 || Vu(r, t) !== !1)
            for (var i in t) {
                var n = t[i];
                e.targetModal = i,
                e.triggers = Go(n),
                bi = new aa(e)
            }
    },
    show: function(o, e) {
        var r = e || {};
        r.targetModal = o,
        r.debugMode === !0 && la(o) === !1 || (bi && bi.removeEventListeners(),
        (bi = new aa(r)).showModal())
    },
    close: function(o) {
        o ? bi.closeModalById(o) : bi.closeModal()
    }
});
typeof window < "u" && (window.MicroModal = ja);
class Tg extends Mt {
    init() {
        this.DOM = {
            buttons: this.block.querySelectorAll(".button")
        },
        ja.init({
            disableScroll: !0
        })
    }
    initEvents() {
        this.DOM.buttons.forEach(e=>{
            e.addEventListener("click", ()=>{
                setTimeout(()=>{
                    ja.close(this.block.id)
                }
                , 10)
            }
            )
        }
        )
    }
}
class Sg extends Mt {
    init() {}
}
class kg extends Mt {
    init() {
        this.plugins = document.querySelectorAll("[data-plugin]"),
        this.DOM = {
            clubGsapBadges: this.block.querySelectorAll("[data-club-gsap-badge]")
        },
        this.createPlugins()
    }
    createPlugins() {
        this.plugins.forEach(e=>{
            switch (e.getAttribute("data-plugin")) {
            case "svg-morph-plugin":
                return new Sg(e);
            default:
                return null
            }
        }
        )
    }
    initEvents() {
        this.DOM.clubGsapBadges.length && this.DOM.clubGsapBadges.forEach(e=>{
            const r = e.querySelector("svg")
              , t = r.querySelector("path")
              , i = H.timeline({
                paused: !0
            });
            i.to(r, {
                rotateY: 90,
                duration: .3,
                ease: "power2.in"
            }).set(t, {
                fill: "var(--color-shockingly-green)"
            }).to(r, {
                rotateY: 180,
                duration: .3,
                ease: "power2.out"
            }),
            e.addEventListener("mouseenter", ()=>{
                i.play()
            }
            ),
            e.addEventListener("mouseleave", ()=>{
                i.reverse()
            }
            )
        }
        )
    }
}
new Vp;
new Xp;
class Mg extends rh {
    createBlock(e, r) {
        switch (e) {
        case "scroll-hero":
            return new wg(r);
        case "brands":
            return new Yp(r);
        case "button":
            return new Gp(r);
        case "demos":
            return new _g(r);
        case "get-gsap-btn":
            return new vg(r);
        case "hover-video":
            return new bg(r);
        case "showcase":
            return new Hp(r);
        case "subtitle":
            return new gg(r);
        case "video":
            return new pg(r);
        case "more-links":
            return new mg(r);
        case "testimonials":
            return new yg(r);
        case "tooltip":
            return new Tg(r);
        case "plugins":
            return new kg(r);
        default:
            return null
        }
    }
}
new Mg;
export {Mn as C, Mt as D, xl as I, $i as M, ve as S, Qc as _, di as a, rh as b, _s as c, Wl as d, Rg as e, Sa as f, H as g, Od as h, ki as i, zi as j, Hd as k, Gd as l, Ud as m, Pg as n, Eg as o, Lg as p, Dd as q, Wc as r, Ag as s, Fd as t, Gc as u, Dg as v, Ls as w, Og as x, Cg as y};
//# sourceMappingURL=index-8f8a42cc.js.map