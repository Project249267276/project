import { n as R, u as A, v as L, x as X, p as b, c as N, r as D, t as d, i as w, o as j, y as z } from "./index-8f8a42cc.js";
/*!
 * MotionPathPlugin 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var U = "x,translateX,left,marginLeft,xPercent".split(","),
    H = "y,translateY,top,marginTop,yPercent".split(","),
    I = Math.PI / 180,
    P, Y, g, m, S, v, V = function() {
        return P || typeof window < "u" && (P = window.gsap) && P.registerPlugin && P
    },
    T = function(i, t, e, o) {
        for (var n = t.length, a = o === 2 ? 0 : o, r = 0; r < n; r++)
            i[a] = parseFloat(t[r][e]),
            o === 2 && (i[a + 1] = 0),
            a += 2;
        return i
    },
    _ = function(i, t, e) {
        return parseFloat(i._gsap.get(i, t, e || "px")) || 0
    },
    C = function(i) {
        var t = i[0],
            e = i[1],
            o;
        for (o = 2; o < i.length; o += 2)
            t = i[o] += t,
            e = i[o + 1] += e
    },
    B = function(i, t, e, o, n, a, r, p, l) {
        if (r.type === "cubic")
            t = [t];
        else {
            r.fromCurrent !== !1 && t.unshift(_(e, o, p), n ? _(e, n, l) : 0),
                r.relative && C(t);
            var u = n ? b : z;
            t = [u(t, r.curviness)]
        }
        return t = a(G(t, e, r)),
            M(i, e, o, t, "x", p),
            n && M(i, e, n, t, "y", l),
            A(t, r.resolution || (r.curviness === 0 ? 20 : 12))
    },
    W = function(i) {
        return i
    },
    $ = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
    F = function(i, t, e) {
        var o = w(i),
            n = 0,
            a = 0,
            r;
        return (i.tagName + "").toLowerCase() === "svg" ? (r = i.viewBox.baseVal,
                r.width || (r = {
                    width: +i.getAttribute("width"),
                    height: +i.getAttribute("height")
                })) : r = t && i.getBBox && i.getBBox(),
            t && t !== "auto" && (n = t.push ? t[0] * (r ? r.width : i.offsetWidth || 0) : t.x,
                a = t.push ? t[1] * (r ? r.height : i.offsetHeight || 0) : t.y),
            e.apply(n || a ? o.apply({
                x: n,
                y: a
            }) : {
                x: o.e,
                y: o.f
            })
    },
    O = function(i, t, e, o) {
        var n = w(i.parentNode, !0, !0),
            a = n.clone().multiply(w(t)),
            r = F(i, e, n),
            p = F(t, o, n),
            l = p.x,
            u = p.y,
            s;
        return a.e = a.f = 0,
            o === "auto" && t.getTotalLength && t.tagName.toLowerCase() === "path" && (s = t.getAttribute("d").match($) || [],
                s = a.apply({
                    x: +s[0],
                    y: +s[1]
                }),
                l += s.x,
                u += s.y),
            s && (s = a.apply(t.getBBox()),
                l -= s.x,
                u -= s.y),
            a.e = l - r.x,
            a.f = u - r.y,
            a
    },
    G = function(i, t, e) {
        var o = e.align,
            n = e.matrix,
            a = e.offsetX,
            r = e.offsetY,
            p = e.alignOrigin,
            l = i[0][0],
            u = i[0][1],
            s = _(t, "x"),
            y = _(t, "y"),
            x, h, c;
        return !i || !i.length ? R("M0,0L0,0") : (o && (o === "self" || (x = m(o)[0] || t) === t ? d(i, 1, 0, 0, 1, s - l, y - u) : (p && p[2] !== !1 ? P.set(t, {
                    transformOrigin: p[0] * 100 + "% " + p[1] * 100 + "%"
                }) : p = [_(t, "xPercent") / -100, _(t, "yPercent") / -100],
                h = O(t, x, p, "auto"),
                c = h.apply({
                    x: l,
                    y: u
                }),
                d(i, h.a, h.b, h.c, h.d, s + h.e - (c.x - h.e), y + h.f - (c.y - h.f)))),
            n ? d(i, n.a, n.b, n.c, n.d, n.e, n.f) : (a || r) && d(i, 1, 0, 0, 1, a || 0, r || 0),
            i)
    },
    M = function(i, t, e, o, n, a) {
        var r = t._gsap,
            p = r.harness,
            l = p && p.aliases && p.aliases[e],
            u = l && l.indexOf(",") < 0 ? l : e,
            s = i._pt = new Y(i._pt, t, u, 0, 0, W, 0, r.set(t, u, i));
        s.u = g(r.get(t, u, a)) || 0,
            s.path = o,
            s.pp = n,
            i._props.push(u)
    },
    k = function(i, t) {
        return function(e) {
            return i || t !== 1 ? X(e, i, t) : e
        }
    },
    q = {
        version: "3.11.3",
        name: "motionPath",
        register: function(i, t, e) {
            P = i,
                g = P.utils.getUnit,
                m = P.utils.toArray,
                S = P.core.getStyleSaver,
                v = P.core.reverting || function() {},
                Y = e
        },
        init: function(i, t, e) {
            if (!P)
                return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
            (!(typeof t == "object" && !t.style) || !t.path) && (t = {
                path: t
            });
            var o = [],
                n = t,
                a = n.path,
                r = n.autoRotate,
                p = n.unitX,
                l = n.unitY,
                u = n.x,
                s = n.y,
                y = a[0],
                x = k(t.start, "end" in t ? t.end : 1),
                h, c;
            if (this.rawPaths = o,
                this.target = i,
                this.tween = e,
                this.styles = S && S(i, "transform"),
                (this.rotate = r || r === 0) && (this.rOffset = parseFloat(r) || 0,
                    this.radians = !!t.useRadians,
                    this.rProp = t.rotation || "rotation",
                    this.rSet = i._gsap.set(i, this.rProp, this),
                    this.ru = g(i._gsap.get(i, this.rProp)) || 0),
                Array.isArray(a) && !("closed" in a) && typeof y != "number") {
                for (c in y)
                    !u && ~U.indexOf(c) ? u = c : !s && ~H.indexOf(c) && (s = c);
                u && s ? o.push(B(this, T(T([], a, u, 0), a, s, 1), i, u, s, x, t, p || g(a[0][u]), l || g(a[0][s]))) : u = s = 0;
                for (c in y)
                    c !== u && c !== s && o.push(B(this, T([], a, c, 2), i, c, 0, x, t, g(a[0][c])))
            } else
                h = x(G(R(t.path), i, t)),
                A(h, t.resolution),
                o.push(h),
                M(this, i, t.x || "x", h, "x", t.unitX || "px"),
                M(this, i, t.y || "y", h, "y", t.unitY || "px")
        },
        render: function(i, t) {
            var e = t.rawPaths,
                o = e.length,
                n = t._pt;
            if (t.tween._time || !v()) {
                for (i > 1 ? i = 1 : i < 0 && (i = 0); o--;)
                    L(e[o], i, !o && t.rotate, e[o]);
                for (; n;)
                    n.set(n.t, n.p, n.path[n.pp] + n.u, n.d, i),
                    n = n._next;
                t.rotate && t.rSet(t.target, t.rProp, e[0].angle * (t.radians ? I : 1) + t.rOffset + t.ru, t, i)
            } else
                t.styles.revert()
        },
        getLength: function(i) {
            return A(R(i)).totalLength
        },
        sliceRawPath: X,
        getRawPath: R,
        pointsToSegment: b,
        stringToRawPath: N,
        rawPathToString: D,
        transformRawPath: d,
        getGlobalMatrix: w,
        getPositionOnPath: L,
        cacheRawPathMeasurements: A,
        convertToPath: function(i, t) {
            return m(i).map(function(e) {
                return j(e, t !== !1)
            })
        },
        convertCoordinates: function(i, t, e) {
            var o = w(t, !0, !0).multiply(w(i));
            return e ? o.apply(e) : o
        },
        getAlignMatrix: O,
        getRelativePosition: function(i, t, e, o) {
            var n = O(i, t, e, o);
            return {
                x: n.e,
                y: n.f
            }
        },
        arrayToRawPath: function(i, t) {
            t = t || {};
            var e = T(T([], i, t.x || "x", 0), i, t.y || "y", 1);
            return t.relative && C(e), [t.type === "cubic" ? e : b(e, t.curviness)]
        }
    };
V() && P.registerPlugin(q);
export { q as M };
//# sourceMappingURL=MotionPathPlugin-d04939d5.js.map