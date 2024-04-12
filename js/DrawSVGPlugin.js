/*!
 * DrawSVGPlugin 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var h, M, S, V, E, T, A, G, B = function() {
        return typeof window < "u"
    },
    q = function() {
        return h || B() && (h = window.gsap) && h.registerPlugin && h
    },
    j = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    D = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"]
    },
    y = function(i) {
        return Math.round(i * 1e4) / 1e4
    },
    c = function(i) {
        return parseFloat(i) || 0
    },
    v = function(i, e) {
        var o = c(i);
        return ~i.indexOf("%") ? o / 100 * e : o
    },
    m = function(i, e) {
        return c(i.getAttribute(e))
    },
    k = Math.sqrt,
    O = function(i, e, o, r, n, s) {
        return k(Math.pow((c(o) - c(i)) * n, 2) + Math.pow((c(r) - c(e)) * s, 2))
    },
    L = function(i) {
        return console.warn(i)
    },
    I = function(i) {
        return i.getAttribute("vector-effect") === "non-scaling-stroke"
    },
    F = 1,
    W = function(i, e, o) {
        var r = i.indexOf(" "),
            n, s;
        return r < 0 ? (n = o !== void 0 ? o + "" : i,
                s = i) : (n = i.substr(0, r),
                s = i.substr(r + 1)),
            n = v(n, e),
            s = v(s, e),
            n > s ? [s, n] : [n, s]
    },
    P = function(i) {
        if (i = M(i)[0], !i)
            return 0;
        var e = i.tagName.toLowerCase(),
            o = i.style,
            r = 1,
            n = 1,
            s, _, t, p, d, w, g;
        I(i) && (n = i.getScreenCTM(),
            r = k(n.a * n.a + n.b * n.b),
            n = k(n.d * n.d + n.c * n.c));
        try {
            _ = i.getBBox()
        } catch {
            L("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
        }
        var x = _ || {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            a = x.x,
            b = x.y,
            u = x.width,
            l = x.height;
        if ((!_ || !u && !l) && D[e] && (u = m(i, D[e][0]),
                l = m(i, D[e][1]),
                e !== "rect" && e !== "line" && (u *= 2,
                    l *= 2),
                e === "line" && (a = m(i, "x1"),
                    b = m(i, "y1"),
                    u = Math.abs(u - a),
                    l = Math.abs(l - b))),
            e === "path")
            p = o.strokeDasharray,
            o.strokeDasharray = "none",
            s = i.getTotalLength() || 0,
            y(r) !== y(n) && !T && (T = 1) && L("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),
            s *= (r + n) / 2,
            o.strokeDasharray = p;
        else if (e === "rect")
            s = u * 2 * r + l * 2 * n;
        else if (e === "line")
            s = O(a, b, a + u, b + l, r, n);
        else if (e === "polyline" || e === "polygon")
            for (t = i.getAttribute("points").match(j) || [],
                e === "polygon" && t.push(t[0], t[1]),
                s = 0,
                d = 2; d < t.length; d += 2)
                s += O(t[d - 2], t[d - 1], t[d], t[d + 1], r, n) || 0;
        else
            (e === "circle" || e === "ellipse") && (w = u / 2 * r,
                g = l / 2 * n,
                s = Math.PI * (3 * (w + g) - k((3 * w + g) * (w + 3 * g))));
        return s || 0
    },
    N = function(i, e) {
        if (i = M(i)[0], !i)
            return [0, 0];
        e || (e = P(i) + 1);
        var o = S.getComputedStyle(i),
            r = o.strokeDasharray || "",
            n = c(o.strokeDashoffset),
            s = r.indexOf(",");
        return s < 0 && (s = r.indexOf(" ")),
            r = s < 0 ? e : c(r.substr(0, s)),
            r > e && (r = e), [-n || 0, r - n || 0]
    },
    C = function() {
        B() && (S = window,
            E = h = q(),
            M = h.utils.toArray,
            A = h.core.getStyleSaver,
            G = h.core.reverting || function() {},
            V = ((S.navigator || {}).userAgent || "").indexOf("Edge") !== -1)
    },
    X = {
        version: "3.11.3",
        name: "drawSVG",
        register: function(i) {
            h = i,
                C()
        },
        init: function(i, e, o, r, n) {
            if (!i.getBBox)
                return !1;
            E || C();
            var s = P(i),
                _, t, p;
            return this.styles = A && A(i, "strokeDashoffset,strokeDasharray,strokeMiterlimit"),
                this.tween = o,
                this._style = i.style,
                this._target = i,
                e + "" == "true" ? e = "0 100%" : e ? (e + "").indexOf(" ") === -1 && (e = "0 " + e) : e = "0 0",
                _ = N(i, s),
                t = W(e, s, _[0]),
                this._length = y(s),
                this._dash = y(_[1] - _[0]),
                this._offset = y(-_[0]),
                this._dashPT = this.add(this, "_dash", this._dash, y(t[1] - t[0]), 0, 0, 0, 0, 0, 1),
                this._offsetPT = this.add(this, "_offset", this._offset, y(-t[0]), 0, 0, 0, 0, 0, 1),
                V && (p = S.getComputedStyle(i),
                    p.strokeLinecap !== p.strokeLinejoin && (t = c(p.strokeMiterlimit),
                        this.add(i.style, "strokeMiterlimit", t, t + .01))),
                this._live = I(i) || ~(e + "").indexOf("live"),
                this._nowrap = ~(e + "").indexOf("nowrap"),
                this._props.push("drawSVG"),
                F
        },
        render: function(i, e) {
            if (e.tween._time || !G()) {
                var o = e._pt,
                    r = e._style,
                    n, s, _, t;
                if (o) {
                    for (e._live && (n = P(e._target),
                            n !== e._length && (s = n / e._length,
                                e._length = n,
                                e._offsetPT && (e._offsetPT.s *= s,
                                    e._offsetPT.c *= s),
                                e._dashPT ? (e._dashPT.s *= s,
                                    e._dashPT.c *= s) : e._dash *= s)); o;)
                        o.r(i, o.d),
                        o = o._next;
                    _ = e._dash || i && i !== 1 && 1e-4 || 0,
                        n = e._length - _ + .1,
                        t = e._offset,
                        _ && t && _ + Math.abs(t % e._length) > e._length - .2 && (t += t < 0 ? .1 : -.1) && (n += .1),
                        r.strokeDashoffset = _ ? t : t + .001,
                        r.strokeDasharray = n < .2 ? "none" : _ ? _ + "px," + (e._nowrap ? 999999 : n) + "px" : "0px, 999999px"
                }
            } else
                e.styles.revert()
        },
        getLength: P,
        getPosition: N
    };
q() && h.registerPlugin(X);
export { X as D };
//# sourceMappingURL=DrawSVGPlugin-c9943948.js.map