/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function(t) { var e = {};

    function r(n) { if (e[n]) return e[n].exports; var i = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports }
    r.m = t, r.c = e, r.d = function(t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, r.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, r.t = function(t, e) { if (1 & e && (t = r(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var i in t) r.d(n, i, function(e) { return t[e] }.bind(null, i)); return n }, r.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return r.d(e, "a", e), e }, r.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, r.p = "", r(r.s = 191) }([function(t, e, r) {
    (function(e) { var r = function(t) { return t && t.Math == Math && t };
        t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof e && e) || function() { return this }() || Function("return this")() }).call(this, r(60)) }, function(t, e, r) { var n = r(0),
        i = r(95).f,
        a = r(71),
        o = r(27),
        s = r(98),
        l = r(273),
        h = r(105);
    t.exports = function(t, e) { var r, c, u, f, p, d = t.target,
            m = t.global,
            v = t.stat; if (r = m ? n : v ? n[d] || s(d, {}) : (n[d] || {}).prototype)
            for (c in e) { if (f = e[c], u = t.noTargetGet ? (p = i(r, c)) && p.value : r[c], !h(m ? c : d + (v ? "." : "#") + c, t.forced) && void 0 !== u) { if (typeof f == typeof u) continue;
                    l(f, u) }(t.sham || u && u.sham) && a(f, "sham", !0), o(r, c, f, t) } } }, function(t, e) { var r = Function.prototype,
        n = r.bind,
        i = r.call,
        a = n && n.bind(i);
    t.exports = n ? function(t) { return t && a(i, t) } : function(t) { return t && function() { return i.apply(t, arguments) } } }, function(t, e) { t.exports = function(t) { return t && t.__esModule ? t : { default: t } } }, function(t, e, r) { var n = r(275);
    t.exports = function(t) { return n(t.length) } }, function(t, e) { t.exports = function(t) { return "function" == typeof t } }, function(t, e, r) { var n = r(0),
        i = r(149),
        a = r(17),
        o = r(99),
        s = r(148),
        l = r(147),
        h = i("wks"),
        c = n.Symbol,
        u = c && c.for,
        f = l ? c : c && c.withoutSetter || o;
    t.exports = function(t) { if (!a(h, t) || !s && "string" != typeof h[t]) { var e = "Symbol." + t;
            s && a(c, t) ? h[t] = c[t] : h[t] = l && u ? u(e) : f(e) } return h[t] } }, function(t, e, r) { var n = r(0),
        i = r(96),
        a = n.Object;
    t.exports = function(t) { return a(i(t)) } }, function(t, e, r) { var n = r(6),
        i = r(36),
        a = r(18),
        o = n("unscopables"),
        s = Array.prototype;
    null == s[o] && a.f(s, o, { configurable: !0, value: i(null) }), t.exports = function(t) { s[o][t] = !0 } }, function(t, e) { t.exports = function(t) { try { return !!t() } catch (t) { return !0 } } }, function(t, e) { var r = Array.isArray;
    t.exports = r }, function(t, e, r) { var n = r(0),
        i = r(12),
        a = n.String,
        o = n.TypeError;
    t.exports = function(t) { if (i(t)) return t; throw o(a(t) + " is not an object") } }, function(t, e, r) { var n = r(5);
    t.exports = function(t) { return "object" == typeof t ? null !== t : n(t) } }, function(t, e, r) { "use strict"; var n = {},
        i = {},
        a = [],
        o = window.Webflow || [],
        s = window.jQuery,
        l = s(window),
        h = s(document),
        c = s.isFunction,
        u = n._ = r(193),
        f = n.tram = r(125) && s.tram,
        p = !1,
        d = !1;

    function m(t) { n.env() && (c(t.design) && l.on("__wf_design", t.design), c(t.preview) && l.on("__wf_preview", t.preview)), c(t.destroy) && l.on("__wf_destroy", t.destroy), t.ready && c(t.ready) && function(t) { if (p) return void t.ready(); if (u.contains(a, t.ready)) return;
            a.push(t.ready) }(t) }

    function v(t) { c(t.design) && l.off("__wf_design", t.design), c(t.preview) && l.off("__wf_preview", t.preview), c(t.destroy) && l.off("__wf_destroy", t.destroy), t.ready && c(t.ready) && function(t) { a = u.filter(a, function(e) { return e !== t.ready }) }(t) }
    f.config.hideBackface = !1, f.config.keepInherited = !0, n.define = function(t, e, r) { i[t] && v(i[t]); var n = i[t] = e(s, u, r) || {}; return m(n), n }, n.require = function(t) { return i[t] }, n.push = function(t) { p ? c(t) && t() : o.push(t) }, n.env = function(t) { var e = window.__wf_design,
            r = void 0 !== e; return t ? "design" === t ? r && e : "preview" === t ? r && !e : "slug" === t ? r && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : r }; var y, g = navigator.userAgent.toLowerCase(),
        E = n.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        b = n.env.chrome = /chrome/.test(g) && /Google/.test(navigator.vendor) && parseInt(g.match(/chrome\/(\d+)\./)[1], 10),
        _ = n.env.ios = /(ipod|iphone|ipad)/.test(g);
    n.env.safari = /safari/.test(g) && !b && !_, E && h.on("touchstart mousedown", function(t) { y = t.target }), n.validClick = E ? function(t) { return t === y || s.contains(t, y) } : function() { return !0 }; var x, T = "resize.webflow orientationchange.webflow load.webflow";

    function S(t, e) { var r = [],
            n = {}; return n.up = u.throttle(function(t) { u.each(r, function(e) { e(t) }) }), t && e && t.on(e, n.up), n.on = function(t) { "function" == typeof t && (u.contains(r, t) || r.push(t)) }, n.off = function(t) { r = arguments.length ? u.filter(r, function(e) { return e !== t }) : [] }, n }

    function I(t) { c(t) && t() }

    function A() { x && (x.reject(), l.off("load", x.resolve)), x = new s.Deferred, l.on("load", x.resolve) }
    n.resize = S(l, T), n.scroll = S(l, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), n.redraw = S(), n.location = function(t) { window.location = t }, n.env() && (n.location = function() {}), n.ready = function() { p = !0, d ? (d = !1, u.each(i, m)) : u.each(a, I), u.each(o, I), n.resize.up() }, n.load = function(t) { x.then(t) }, n.destroy = function(t) { t = t || {}, d = !0, l.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), u.each(i, v), n.resize.off(), n.scroll.off(), n.redraw.off(), a = [], o = [], "pending" === x.state() && A() }, s(n.ready), A(), t.exports = window.Webflow = n }, function(t, e, r) { "use strict"; var n = r(56);
    Object.defineProperty(e, "__esModule", { value: !0 }); var i = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0; var a = r(386);
    Object.keys(a).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return a[t] } })) }); var o = r(175);
    Object.keys(o).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return o[t] } })) }); var s = r(387);
    Object.keys(s).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return s[t] } })) }); var l = r(388);
    Object.keys(l).forEach(function(t) { "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, { enumerable: !0, get: function() { return l[t] } })) }); var h = n(r(389));
    e.IX2EngineActionTypes = h; var c = n(r(390));
    e.IX2EngineConstants = c }, function(t, e) { var r = Function.prototype.call;
    t.exports = r.bind ? r.bind(r) : function() { return r.apply(r, arguments) } }, function(t, e, r) { var n = r(0),
        i = r(5);
    t.exports = function(t, e) { return arguments.length < 2 ? (r = n[t], i(r) ? r : void 0) : n[t] && n[t][e]; var r } }, function(t, e, r) { var n = r(2),
        i = r(7),
        a = n({}.hasOwnProperty);
    t.exports = Object.hasOwn || function(t, e) { return a(i(t), e) } }, function(t, e, r) { var n = r(0),
        i = r(20),
        a = r(150),
        o = r(11),
        s = r(68),
        l = n.TypeError,
        h = Object.defineProperty;
    e.f = i ? h : function(t, e, r) { if (o(t), e = s(e), o(r), a) try { return h(t, e, r) } catch (t) {}
        if ("get" in r || "set" in r) throw l("Accessors not supported"); return "value" in r && (t[e] = r.value), t } }, function(t, e, r) { var n = r(130),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = n || i || Function("return this")();
    t.exports = a }, function(t, e, r) { var n = r(9);
    t.exports = !n(function() { return 7 != Object.defineProperty({}, 1, { get: function() { return 7 } })[1] }) }, function(t, e, r) { var n = r(0),
        i = r(5),
        a = r(69),
        o = n.TypeError;
    t.exports = function(t) { if (i(t)) return t; throw o(a(t) + " is not a function") } }, function(t, e, r) { var n = r(2),
        i = r(21),
        a = n(n.bind);
    t.exports = function(t, e) { return i(t), void 0 === e ? t : a ? a(t, e) : function() { return t.apply(e, arguments) } } }, function(t, e) { t.exports = function(t) { var e = typeof t; return null != t && ("object" == e || "function" == e) } }, function(t, e, r) { var n = r(40),
        i = r(96);
    t.exports = function(t) { return n(i(t)) } }, function(t, e, r) { var n = r(22),
        i = r(2),
        a = r(40),
        o = r(7),
        s = r(4),
        l = r(43),
        h = i([].push),
        c = function(t) { var e = 1 == t,
                r = 2 == t,
                i = 3 == t,
                c = 4 == t,
                u = 6 == t,
                f = 7 == t,
                p = 5 == t || u; return function(d, m, v, y) { for (var g, E, b = o(d), _ = a(b), x = n(m, v), T = s(_), S = 0, I = y || l, A = e ? I(d, T) : r || f ? I(d, 0) : void 0; T > S; S++)
                    if ((p || S in _) && (E = x(g = _[S], S, b), t))
                        if (e) A[S] = E;
                        else if (E) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return g;
                    case 6:
                        return S;
                    case 2:
                        h(A, g) } else switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        h(A, g) }
                return u ? -1 : i || c ? c : A } };
    t.exports = { forEach: c(0), map: c(1), filter: c(2), some: c(3), every: c(4), find: c(5), findIndex: c(6), filterReject: c(7) } }, function(t, e, r) { "use strict"; var n = r(9);
    t.exports = function(t, e) { var r = [][t]; return !!r && n(function() { r.call(null, e || function() { throw 1 }, 1) }) } }, function(t, e, r) { var n = r(0),
        i = r(5),
        a = r(17),
        o = r(71),
        s = r(98),
        l = r(72),
        h = r(41),
        c = r(151).CONFIGURABLE,
        u = h.get,
        f = h.enforce,
        p = String(String).split("String");
    (t.exports = function(t, e, r, l) { var h, u = !!l && !!l.unsafe,
            d = !!l && !!l.enumerable,
            m = !!l && !!l.noTargetGet,
            v = l && void 0 !== l.name ? l.name : e;
        i(r) && ("Symbol(" === String(v).slice(0, 7) && (v = "[" + String(v).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!a(r, "name") || c && r.name !== v) && o(r, "name", v), (h = f(r)).source || (h.source = p.join("string" == typeof v ? v : ""))), t !== n ? (u ? !m && t[e] && (d = !0) : delete t[e], d ? t[e] = r : o(t, e, r)) : d ? t[e] = r : s(e, r) })(Function.prototype, "toString", function() { return i(this) && u(this).source || l(this) }) }, function(t, e, r) { var n = r(197),
        i = r(251),
        a = r(93),
        o = r(10),
        s = r(260);
    t.exports = function(t) { return "function" == typeof t ? t : null == t ? a : "object" == typeof t ? o(t) ? i(t[0], t[1]) : n(t) : s(t) } }, function(t, e, r) { var n = r(209),
        i = r(214);
    t.exports = function(t, e) { var r = i(t, e); return n(r) ? r : void 0 } }, function(t, e) { t.exports = function(t) { return null != t && "object" == typeof t } }, function(t, e, r) { var n, i, a = r(0),
        o = r(32),
        s = a.process,
        l = a.Deno,
        h = s && s.versions || l && l.version,
        c = h && h.v8;
    c && (i = (n = c.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !i && o && (!(n = o.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = o.match(/Chrome\/(\d+)/)) && (i = +n[1]), t.exports = i }, function(t, e, r) { var n = r(16);
    t.exports = n("navigator", "userAgent") || "" }, function(t, e, r) { var n = r(21);
    t.exports = function(t, e) { var r = t[e]; return null == r ? void 0 : n(r) } }, function(t, e) { var r = Math.ceil,
        n = Math.floor;
    t.exports = function(t) { var e = +t; return e != e || 0 === e ? 0 : (e > 0 ? n : r)(e) } }, function(t, e, r) { var n = r(49);
    t.exports = Array.isArray || function(t) { return "Array" == n(t) } }, function(t, e, r) { var n, i = r(11),
        a = r(281),
        o = r(104),
        s = r(73),
        l = r(156),
        h = r(100),
        c = r(101),
        u = c("IE_PROTO"),
        f = function() {},
        p = function(t) { return "<script>" + t + "<\/script>" },
        d = function(t) { t.write(p("")), t.close(); var e = t.parentWindow.Object; return t = null, e },
        m = function() { try { n = new ActiveXObject("htmlfile") } catch (t) {} var t, e;
            m = "undefined" != typeof document ? document.domain && n ? d(n) : ((e = h("iframe")).style.display = "none", l.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F) : d(n); for (var r = o.length; r--;) delete m.prototype[o[r]]; return m() };
    s[u] = !0, t.exports = Object.create || function(t, e) { var r; return null !== t ? (f.prototype = i(t), r = new f, f.prototype = null, r[u] = t) : r = m(), void 0 === e ? r : a(r, e) } }, function(t, e) { t.exports = function(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t } }, function(t, e, r) { var n = r(47),
        i = r(210),
        a = r(211),
        o = "[object Null]",
        s = "[object Undefined]",
        l = n ? n.toStringTag : void 0;
    t.exports = function(t) { return null == t ? void 0 === t ? s : o : l && l in Object(t) ? i(t) : a(t) } }, function(t, e, r) { var n = r(129),
        i = r(86);
    t.exports = function(t) { return null != t && i(t.length) && !n(t) } }, function(t, e, r) { var n = r(0),
        i = r(2),
        a = r(9),
        o = r(49),
        s = n.Object,
        l = i("".split);
    t.exports = a(function() { return !s("z").propertyIsEnumerable(0) }) ? function(t) { return "String" == o(t) ? l(t, "") : s(t) } : s }, function(t, e, r) { var n, i, a, o = r(272),
        s = r(0),
        l = r(2),
        h = r(12),
        c = r(71),
        u = r(17),
        f = r(70),
        p = r(101),
        d = r(73),
        m = s.TypeError,
        v = s.WeakMap; if (o || f.state) { var y = f.state || (f.state = new v),
            g = l(y.get),
            E = l(y.has),
            b = l(y.set);
        n = function(t, e) { if (E(y, t)) throw new m("Object already initialized"); return e.facade = t, b(y, t, e), e }, i = function(t) { return g(y, t) || {} }, a = function(t) { return E(y, t) } } else { var _ = p("state");
        d[_] = !0, n = function(t, e) { if (u(t, _)) throw new m("Object already initialized"); return e.facade = t, c(t, _, e), e }, i = function(t) { return u(t, _) ? t[_] : {} }, a = function(t) { return u(t, _) } }
    t.exports = { set: n, get: i, has: a, enforce: function(t) { return a(t) ? i(t) : n(t, {}) }, getterFor: function(t) { return function(e) { var r; if (!h(e) || (r = i(e)).type !== t) throw m("Incompatible receiver, " + t + " required"); return r } } } }, function(t, e, r) { var n = r(2),
        i = r(9),
        a = r(5),
        o = r(74),
        s = r(16),
        l = r(72),
        h = function() {},
        c = [],
        u = s("Reflect", "construct"),
        f = /^\s*(?:class|function)\b/,
        p = n(f.exec),
        d = !f.exec(h),
        m = function(t) { if (!a(t)) return !1; try { return u(h, c, t), !0 } catch (t) { return !1 } };
    t.exports = !u || i(function() { var t; return m(m.call) || !m(Object) || !m(function() { t = !0 }) || t }) ? function(t) { if (!a(t)) return !1; switch (o(t)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1 } return d || !!p(f, l(t)) } : m }, function(t, e, r) { var n = r(157);
    t.exports = function(t, e) { return new(n(t))(0 === e ? 0 : e) } }, function(t, e, r) { "use strict"; var n = r(56);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0; var i = n(r(120));
    e.IX2BrowserSupport = i; var a = n(r(178));
    e.IX2Easings = a; var o = n(r(180));
    e.IX2EasingUtils = o; var s = n(r(396));
    e.IX2ElementsReducer = s; var l = n(r(182));
    e.IX2VanillaPlugins = l; var h = n(r(398));
    e.IX2VanillaUtils = h }, function(t, e) {
    function r(t) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t })(t) }

    function n(e) { return "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? t.exports = n = function(t) { return r(t) } : t.exports = n = function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : r(t) }, n(e) }
    t.exports = n }, function(t, e) {
    function r() { return t.exports = r = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var r = arguments[e]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]) } return t }, r.apply(this, arguments) }
    t.exports = r }, function(t, e, r) { var n = r(19).Symbol;
    t.exports = n }, function(t, e, r) { var n = r(66),
        i = 1 / 0;
    t.exports = function(t) { if ("string" == typeof t || n(t)) return t; var e = t + ""; return "0" == e && 1 / t == -i ? "-0" : e } }, function(t, e, r) { var n = r(2),
        i = n({}.toString),
        a = n("".slice);
    t.exports = function(t) { return a(i(t), 8, -1) } }, function(t, e) { t.exports = !1 }, function(t, e, r) { var n = r(34),
        i = Math.max,
        a = Math.min;
    t.exports = function(t, e) { var r = n(t); return r < 0 ? i(r + e, 0) : a(r, e) } }, function(t, e) { t.exports = {} }, function(t, e, r) { "use strict"; var n = r(68),
        i = r(18),
        a = r(67);
    t.exports = function(t, e, r) { var o = n(e);
        o in t ? i.f(t, o, a(0, r)) : t[o] = r } }, function(t, e, r) { var n = r(9),
        i = r(6),
        a = r(31),
        o = i("species");
    t.exports = function(t) { return a >= 51 || !n(function() { var e = []; return (e.constructor = {})[o] = function() { return { foo: 1 } }, 1 !== e[t](Boolean).foo }) } }, function(t, e, r) { var n = r(49),
        i = r(0);
    t.exports = "process" == n(i.process) }, function(t, e) { t.exports = function(t) { if (t && t.__esModule) return t; var e = {}; if (null != t)
            for (var r in t)
                if (Object.prototype.hasOwnProperty.call(t, r)) { var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, r) : {};
                    n.get || n.set ? Object.defineProperty(e, r, n) : e[r] = t[r] }
        return e.default = t, e } }, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t };
    e.clone = l, e.addLast = u, e.addFirst = f, e.removeLast = p, e.removeFirst = d, e.insert = m, e.removeAt = v, e.replaceAt = y, e.getIn = g, e.set = E, e.setIn = b, e.update = _, e.updateIn = x, e.merge = T, e.mergeDeep = S, e.mergeIn = I, e.omit = A, e.addDefaults = P;
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";

    function a(t) { throw new Error(t) }

    function o(t) { var e = Object.keys(t); return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e }
    var s = {}.hasOwnProperty;

    function l(t) { if (Array.isArray(t)) return t.slice(); for (var e = o(t), r = {}, n = 0; n < e.length; n++) { var i = e[n];
            r[i] = t[i] } return r }

    function h(t, e, r) { var n = r;
        null == n && a(i); for (var s = !1, u = arguments.length, f = Array(u > 3 ? u - 3 : 0), p = 3; p < u; p++) f[p - 3] = arguments[p]; for (var d = 0; d < f.length; d++) { var m = f[d]; if (null != m) { var v = o(m); if (v.length)
                    for (var y = 0; y <= v.length; y++) { var g = v[y]; if (!t || void 0 === n[g]) { var E = m[g];
                            e && c(n[g]) && c(E) && (E = h(t, e, n[g], E)), void 0 !== E && E !== n[g] && (s || (s = !0, n = l(n)), n[g] = E) } } } } return n }

    function c(t) { var e = void 0 === t ? "undefined" : n(t); return null != t && ("object" === e || "function" === e) }

    function u(t, e) { return Array.isArray(e) ? t.concat(e) : t.concat([e]) }

    function f(t, e) { return Array.isArray(e) ? e.concat(t) : [e].concat(t) }

    function p(t) { return t.length ? t.slice(0, t.length - 1) : t }

    function d(t) { return t.length ? t.slice(1) : t }

    function m(t, e, r) { return t.slice(0, e).concat(Array.isArray(r) ? r : [r]).concat(t.slice(e)) }

    function v(t, e) { return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1)) }

    function y(t, e, r) { if (t[e] === r) return t; for (var n = t.length, i = Array(n), a = 0; a < n; a++) i[a] = t[a]; return i[e] = r, i }

    function g(t, e) { if (!Array.isArray(e) && a(i), null != t) { for (var r = t, n = 0; n < e.length; n++) { var o = e[n]; if (void 0 === (r = null != r ? r[o] : void 0)) return r } return r } }

    function E(t, e, r) { var n = null == t ? "number" == typeof e ? [] : {} : t; if (n[e] === r) return n; var i = l(n); return i[e] = r, i }

    function b(t, e, r) { return e.length ? function t(e, r, n, i) { var a = void 0,
                o = r[i];
            a = i === r.length - 1 ? n : t(c(e) && c(e[o]) ? e[o] : "number" == typeof r[i + 1] ? [] : {}, r, n, i + 1); return E(e, o, a) }(t, e, r, 0) : r }

    function _(t, e, r) { return E(t, e, r(null == t ? void 0 : t[e])) }

    function x(t, e, r) { return b(t, e, r(g(t, e))) }

    function T(t, e, r, n, i, a) { for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), l = 6; l < o; l++) s[l - 6] = arguments[l]; return s.length ? h.call.apply(h, [null, !1, !1, t, e, r, n, i, a].concat(s)) : h(!1, !1, t, e, r, n, i, a) }

    function S(t, e, r, n, i, a) { for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), l = 6; l < o; l++) s[l - 6] = arguments[l]; return s.length ? h.call.apply(h, [null, !1, !0, t, e, r, n, i, a].concat(s)) : h(!1, !0, t, e, r, n, i, a) }

    function I(t, e, r, n, i, a, o) { var s = g(t, e);
        null == s && (s = {}); for (var l = arguments.length, c = Array(l > 7 ? l - 7 : 0), u = 7; u < l; u++) c[u - 7] = arguments[u]; return b(t, e, c.length ? h.call.apply(h, [null, !1, !1, s, r, n, i, a, o].concat(c)) : h(!1, !1, s, r, n, i, a, o)) }

    function A(t, e) { for (var r = Array.isArray(e) ? e : [e], n = !1, i = 0; i < r.length; i++)
            if (s.call(t, r[i])) { n = !0; break }
        if (!n) return t; for (var a = {}, l = o(t), h = 0; h < l.length; h++) { var c = l[h];
            r.indexOf(c) >= 0 || (a[c] = t[c]) } return a }

    function P(t, e, r, n, i, a) { for (var o = arguments.length, s = Array(o > 6 ? o - 6 : 0), l = 6; l < o; l++) s[l - 6] = arguments[l]; return s.length ? h.call.apply(h, [null, !0, !1, t, e, r, n, i, a].concat(s)) : h(!0, !1, t, e, r, n, i, a) }
    var w = { clone: l, addLast: u, addFirst: f, removeLast: p, removeFirst: d, insert: m, removeAt: v, replaceAt: y, getIn: g, set: E, setIn: b, update: _, updateIn: x, merge: T, mergeDeep: S, mergeIn: I, omit: A, addDefaults: P };
    e.default = w
}, function(t, e, r) { var n = r(199),
        i = r(200),
        a = r(201),
        o = r(202),
        s = r(203);

    function l(t) { var e = -1,
            r = null == t ? 0 : t.length; for (this.clear(); ++e < r;) { var n = t[e];
            this.set(n[0], n[1]) } }
    l.prototype.clear = n, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t.exports = l }, function(t, e, r) { var n = r(79);
    t.exports = function(t, e) { for (var r = t.length; r--;)
            if (n(t[r][0], e)) return r;
        return -1 } }, function(t, e) { var r;
    r = function() { return this }(); try { r = r || new Function("return this")() } catch (t) { "object" == typeof window && (r = window) }
    t.exports = r }, function(t, e, r) { var n = r(29)(Object, "create");
    t.exports = n }, function(t, e, r) { var n = r(223);
    t.exports = function(t, e) { var r = t.__data__; return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map } }, function(t, e, r) { var n = r(137),
        i = r(87),
        a = r(39);
    t.exports = function(t) { return a(t) ? n(t) : i(t) } }, function(t, e, r) { var n = r(241),
        i = r(30),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        l = n(function() { return arguments }()) ? n : function(t) { return i(t) && o.call(t, "callee") && !s.call(t, "callee") };
    t.exports = l }, function(t, e, r) { var n = r(10),
        i = r(92),
        a = r(252),
        o = r(255);
    t.exports = function(t, e) { return n(t) ? t : i(t, e) ? [t] : a(o(t)) } }, function(t, e, r) { var n = r(38),
        i = r(30),
        a = "[object Symbol]";
    t.exports = function(t) { return "symbol" == typeof t || i(t) && n(t) == a } }, function(t, e) { t.exports = function(t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function(t, e, r) { var n = r(270),
        i = r(146);
    t.exports = function(t) { var e = n(t, "string"); return i(e) ? e : e + "" } }, function(t, e, r) { var n = r(0).String;
    t.exports = function(t) { try { return n(t) } catch (t) { return "Object" } } }, function(t, e, r) { var n = r(0),
        i = r(98),
        a = n["__core-js_shared__"] || i("__core-js_shared__", {});
    t.exports = a }, function(t, e, r) { var n = r(20),
        i = r(18),
        a = r(67);
    t.exports = n ? function(t, e, r) { return i.f(t, e, a(1, r)) } : function(t, e, r) { return t[e] = r, t } }, function(t, e, r) { var n = r(2),
        i = r(5),
        a = r(70),
        o = n(Function.toString);
    i(a.inspectSource) || (a.inspectSource = function(t) { return o(t) }), t.exports = a.inspectSource }, function(t, e) { t.exports = {} }, function(t, e, r) { var n = r(0),
        i = r(106),
        a = r(5),
        o = r(49),
        s = r(6)("toStringTag"),
        l = n.Object,
        h = "Arguments" == o(function() { return arguments }());
    t.exports = i ? o : function(t) { var e, r, n; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) { try { return t[e] } catch (t) {} }(e = l(t), s)) ? r : h ? o(e) : "Object" == (n = o(e)) && a(e.callee) ? "Arguments" : n } }, function(t, e, r) { var n = r(0),
        i = r(15),
        a = r(21),
        o = r(11),
        s = r(69),
        l = r(76),
        h = n.TypeError;
    t.exports = function(t, e) { var r = arguments.length < 2 ? l(t) : e; if (a(r)) return o(i(r, t)); throw h(s(t) + " is not iterable") } }, function(t, e, r) { var n = r(74),
        i = r(33),
        a = r(52),
        o = r(6)("iterator");
    t.exports = function(t) { if (null != t) return i(t, o) || i(t, "@@iterator") || a[n(t)] } }, function(t, e, r) { var n = r(18).f,
        i = r(17),
        a = r(6)("toStringTag");
    t.exports = function(t, e, r) { t && !i(t = r ? t : t.prototype, a) && n(t, a, { configurable: !0, value: e }) } }, function(t, e, r) { var n = r(2);
    t.exports = n([].slice) }, function(t, e) { t.exports = function(t, e) { return t === e || t != t && e != e } }, function(t, e, r) { var n = r(29)(r(19), "Map");
    t.exports = n }, function(t, e, r) { var n = r(215),
        i = r(222),
        a = r(224),
        o = r(225),
        s = r(226);

    function l(t) { var e = -1,
            r = null == t ? 0 : t.length; for (this.clear(); ++e < r;) { var n = t[e];
            this.set(n[0], n[1]) } }
    l.prototype.clear = n, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t.exports = l }, function(t, e) { t.exports = function(t, e) { for (var r = -1, n = e.length, i = t.length; ++r < n;) t[i + r] = e[r]; return t } }, function(t, e, r) {
    (function(t) { var n = r(19),
            i = r(242),
            a = e && !e.nodeType && e,
            o = a && "object" == typeof t && t && !t.nodeType && t,
            s = o && o.exports === a ? n.Buffer : void 0,
            l = (s ? s.isBuffer : void 0) || i;
        t.exports = l }).call(this, r(138)(t)) }, function(t, e) { var r = 9007199254740991,
        n = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) { var i = typeof t; return !!(e = null == e ? r : e) && ("number" == i || "symbol" != i && n.test(t)) && t > -1 && t % 1 == 0 && t < e } }, function(t, e, r) { var n = r(243),
        i = r(244),
        a = r(245),
        o = a && a.isTypedArray,
        s = o ? i(o) : n;
    t.exports = s }, function(t, e) { var r = 9007199254740991;
    t.exports = function(t) { return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r } }, function(t, e, r) { var n = r(88),
        i = r(246),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) { if (!n(t)) return i(t); var e = []; for (var r in Object(t)) a.call(t, r) && "constructor" != r && e.push(r); return e } }, function(t, e) { var r = Object.prototype;
    t.exports = function(t) { var e = t && t.constructor; return t === ("function" == typeof e && e.prototype || r) } }, function(t, e, r) { var n = r(247),
        i = r(80),
        a = r(248),
        o = r(249),
        s = r(140),
        l = r(38),
        h = r(131),
        c = h(n),
        u = h(i),
        f = h(a),
        p = h(o),
        d = h(s),
        m = l;
    (n && "[object DataView]" != m(new n(new ArrayBuffer(1))) || i && "[object Map]" != m(new i) || a && "[object Promise]" != m(a.resolve()) || o && "[object Set]" != m(new o) || s && "[object WeakMap]" != m(new s)) && (m = function(t) { var e = l(t),
            r = "[object Object]" == e ? t.constructor : void 0,
            n = r ? h(r) : ""; if (n) switch (n) {
            case c:
                return "[object DataView]";
            case u:
                return "[object Map]";
            case f:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case d:
                return "[object WeakMap]" }
        return e }), t.exports = m }, function(t, e, r) { var n = r(91);
    t.exports = function(t, e, r) { var i = null == t ? void 0 : n(t, e); return void 0 === i ? r : i } }, function(t, e, r) { var n = r(65),
        i = r(48);
    t.exports = function(t, e) { for (var r = 0, a = (e = n(e, t)).length; null != t && r < a;) t = t[i(e[r++])]; return r && r == a ? t : void 0 } }, function(t, e, r) { var n = r(10),
        i = r(66),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
    t.exports = function(t, e) { if (n(t)) return !1; var r = typeof t; return !("number" != r && "symbol" != r && "boolean" != r && null != t && !i(t)) || o.test(t) || !a.test(t) || null != e && t in Object(e) } }, function(t, e) { t.exports = function(t) { return t } }, function(t, e, r) { var n = r(263),
        i = r(23),
        a = r(66),
        o = NaN,
        s = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        h = /^0o[0-7]+$/i,
        c = parseInt;
    t.exports = function(t) { if ("number" == typeof t) return t; if (a(t)) return o; if (i(t)) { var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = i(e) ? e + "" : e } if ("string" != typeof t) return 0 === t ? t : +t;
        t = n(t); var r = l.test(t); return r || h.test(t) ? c(t.slice(2), r ? 2 : 8) : s.test(t) ? o : +t } }, function(t, e, r) { var n = r(20),
        i = r(15),
        a = r(269),
        o = r(67),
        s = r(24),
        l = r(68),
        h = r(17),
        c = r(150),
        u = Object.getOwnPropertyDescriptor;
    e.f = n ? u : function(t, e) { if (t = s(t), e = l(e), c) try { return u(t, e) } catch (t) {}
        if (h(t, e)) return o(!i(a.f, t, e), t[e]) } }, function(t, e, r) { var n = r(0).TypeError;
    t.exports = function(t) { if (null == t) throw n("Can't call method on " + t); return t } }, function(t, e, r) { var n = r(2);
    t.exports = n({}.isPrototypeOf) }, function(t, e, r) { var n = r(0),
        i = Object.defineProperty;
    t.exports = function(t, e) { try { i(n, t, { value: e, configurable: !0, writable: !0 }) } catch (r) { n[t] = e } return e } }, function(t, e, r) { var n = r(2),
        i = 0,
        a = Math.random(),
        o = n(1..toString);
    t.exports = function(t) { return "Symbol(" + (void 0 === t ? "" : t) + ")_" + o(++i + a, 36) } }, function(t, e, r) { var n = r(0),
        i = r(12),
        a = n.document,
        o = i(a) && i(a.createElement);
    t.exports = function(t) { return o ? a.createElement(t) : {} } }, function(t, e, r) { var n = r(149),
        i = r(99),
        a = n("keys");
    t.exports = function(t) { return a[t] || (a[t] = i(t)) } }, function(t, e, r) { var n = r(152),
        i = r(104).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) { return n(t, i) } }, function(t, e, r) { var n = r(24),
        i = r(51),
        a = r(4),
        o = function(t) { return function(e, r, o) { var s, l = n(e),
                    h = a(l),
                    c = i(o, h); if (t && r != r) { for (; h > c;)
                        if ((s = l[c++]) != s) return !0 } else
                    for (; h > c; c++)
                        if ((t || c in l) && l[c] === r) return t || c || 0; return !t && -1 } };
    t.exports = { includes: o(!0), indexOf: o(!1) } }, function(t, e) { t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"] }, function(t, e, r) { var n = r(9),
        i = r(5),
        a = /#|\.prototype\./,
        o = function(t, e) { var r = l[s(t)]; return r == c || r != h && (i(e) ? n(e) : !!e) },
        s = o.normalize = function(t) { return String(t).replace(a, ".").toLowerCase() },
        l = o.data = {},
        h = o.NATIVE = "N",
        c = o.POLYFILL = "P";
    t.exports = o }, function(t, e, r) { var n = {};
    n[r(6)("toStringTag")] = "z", t.exports = "[object z]" === String(n) }, function(t, e, r) { var n = r(6)("iterator"),
        i = !1; try { var a = 0,
            o = { next: function() { return { done: !!a++ } }, return: function() { i = !0 } };
        o[n] = function() { return this }, Array.from(o, function() { throw 2 }) } catch (t) {}
    t.exports = function(t, e) { if (!e && !i) return !1; var r = !1; try { var a = {};
            a[n] = function() { return { next: function() { return { done: r = !0 } } } }, t(a) } catch (t) {} return r } }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(15),
        a = r(50),
        o = r(151),
        s = r(5),
        l = r(298),
        h = r(109),
        c = r(110),
        u = r(77),
        f = r(71),
        p = r(27),
        d = r(6),
        m = r(52),
        v = r(160),
        y = o.PROPER,
        g = o.CONFIGURABLE,
        E = v.IteratorPrototype,
        b = v.BUGGY_SAFARI_ITERATORS,
        _ = d("iterator"),
        x = function() { return this };
    t.exports = function(t, e, r, o, d, v, T) { l(r, e, o); var S, I, A, P = function(t) { if (t === d && O) return O; if (!b && t in D) return D[t]; switch (t) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() { return new r(this, t) } } return function() { return new r(this) } },
            w = e + " Iterator",
            C = !1,
            D = t.prototype,
            M = D[_] || D["@@iterator"] || d && D[d],
            O = !b && M || P(d),
            R = "Array" == e && D.entries || M; if (R && (S = h(R.call(new t))) !== Object.prototype && S.next && (a || h(S) === E || (c ? c(S, E) : s(S[_]) || p(S, _, x)), u(S, w, !0, !0), a && (m[w] = x)), y && "values" == d && M && "values" !== M.name && (!a && g ? f(D, "name", "values") : (C = !0, O = function() { return i(M, this) })), d)
            if (I = { values: P("values"), keys: v ? O : P("keys"), entries: P("entries") }, T)
                for (A in I) !b && !C && A in D || p(D, A, I[A]);
            else n({ target: e, proto: !0, forced: b || C }, I);
        return a && !T || D[_] === O || p(D, _, O, { name: d }), m[e] = O, I } }, function(t, e, r) { var n = r(0),
        i = r(17),
        a = r(5),
        o = r(7),
        s = r(101),
        l = r(299),
        h = s("IE_PROTO"),
        c = n.Object,
        u = c.prototype;
    t.exports = l ? c.getPrototypeOf : function(t) { var e = o(t); if (i(e, h)) return e[h]; var r = e.constructor; return a(r) && e instanceof r ? r.prototype : e instanceof c ? u : null } }, function(t, e, r) { var n = r(2),
        i = r(11),
        a = r(300);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() { var t, e = !1,
            r = {}; try {
            (t = n(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), e = r instanceof Array } catch (t) {} return function(r, n) { return i(r), a(n), e ? t(r, n) : r.__proto__ = n, r } }() : void 0) }, function(t, e) { var r = Function.prototype,
        n = r.apply,
        i = r.bind,
        a = r.call;
    t.exports = "object" == typeof Reflect && Reflect.apply || (i ? a.bind(n) : function() { return a.apply(n, arguments) }) }, function(t, e, r) { var n = r(0),
        i = r(74),
        a = n.String;
    t.exports = function(t) { if ("Symbol" === i(t)) throw TypeError("Cannot convert a Symbol value to a string"); return a(t) } }, function(t, e, r) { "use strict"; var n = r(16),
        i = r(18),
        a = r(6),
        o = r(20),
        s = a("species");
    t.exports = function(t) { var e = n(t),
            r = i.f;
        o && e && !e[s] && r(e, s, { configurable: !0, get: function() { return this } }) } }, function(t, e, r) { var n = r(0),
        i = r(22),
        a = r(15),
        o = r(11),
        s = r(69),
        l = r(154),
        h = r(4),
        c = r(97),
        u = r(75),
        f = r(76),
        p = r(153),
        d = n.TypeError,
        m = function(t, e) { this.stopped = t, this.result = e },
        v = m.prototype;
    t.exports = function(t, e, r) { var n, y, g, E, b, _, x, T = r && r.that,
            S = !(!r || !r.AS_ENTRIES),
            I = !(!r || !r.IS_ITERATOR),
            A = !(!r || !r.INTERRUPTED),
            P = i(e, T),
            w = function(t) { return n && p(n, "normal", t), new m(!0, t) },
            C = function(t) { return S ? (o(t), A ? P(t[0], t[1], w) : P(t[0], t[1])) : A ? P(t, w) : P(t) }; if (I) n = t;
        else { if (!(y = f(t))) throw d(s(t) + " is not iterable"); if (l(y)) { for (g = 0, E = h(t); E > g; g++)
                    if ((b = C(t[g])) && c(v, b)) return b;
                return new m(!1) }
            n = u(t, y) } for (_ = n.next; !(x = a(_, n)).done;) { try { b = C(x.value) } catch (t) { p(n, "throw", t) } if ("object" == typeof b && b && c(v, b)) return b } return new m(!1) } }, function(t, e, r) { var n = r(0),
        i = r(97),
        a = n.TypeError;
    t.exports = function(t, e) { if (i(e, t)) return t; throw a("Incorrect invocation") } }, function(t, e, r) { var n = r(27);
    t.exports = function(t, e, r) { for (var i in e) n(t, i, e[i], r); return t } }, function(t, e, r) { "use strict"; var n = r(366);

    function i(t, e) { var r = document.createEvent("CustomEvent");
        r.initCustomEvent(e, !0, !0, null), t.dispatchEvent(r) } var a = window.jQuery,
        o = {},
        s = { reset: function(t, e) { n.triggers.reset(t, e) }, intro: function(t, e) { n.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE") }, outro: function(t, e) { n.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE") } };
    o.triggers = {}, o.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }, a.extend(o.triggers, s), t.exports = o }, function(t, e, r) { "use strict";
    r.r(e), r.d(e, "ActionTypes", function() { return a }), r.d(e, "default", function() { return o }); var n = r(169),
        i = r(381),
        a = { INIT: "@@redux/INIT" };

    function o(t, e, r) { var s; if ("function" == typeof e && void 0 === r && (r = e, e = void 0), void 0 !== r) { if ("function" != typeof r) throw new Error("Expected the enhancer to be a function."); return r(o)(t, e) } if ("function" != typeof t) throw new Error("Expected the reducer to be a function."); var l = t,
            h = e,
            c = [],
            u = c,
            f = !1;

        function p() { u === c && (u = c.slice()) }

        function d() { return h }

        function m(t) { if ("function" != typeof t) throw new Error("Expected listener to be a function."); var e = !0; return p(), u.push(t),
                function() { if (e) { e = !1, p(); var r = u.indexOf(t);
                        u.splice(r, 1) } } }

        function v(t) { if (!Object(n.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions."); if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?'); if (f) throw new Error("Reducers may not dispatch actions."); try { f = !0, h = l(h, t) } finally { f = !1 } for (var e = c = u, r = 0; r < e.length; r++) e[r](); return t } return v({ type: a.INIT }), (s = { dispatch: v, subscribe: m, getState: d, replaceReducer: function(t) { if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                l = t, v({ type: a.INIT }) } })[i.default] = function() { var t, e = m; return (t = { subscribe: function(t) { if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function r() { t.next && t.next(d()) } return r(), { unsubscribe: e(r) } } })[i.default] = function() { return this }, t }, s } }, function(t, e, r) { "use strict";

    function n() { for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r]; if (0 === e.length) return function(t) { return t }; if (1 === e.length) return e[0]; var n = e[e.length - 1],
            i = e.slice(0, -1); return function() { return i.reduceRight(function(t, e) { return e(t) }, n.apply(void 0, arguments)) } }
    r.r(e), r.d(e, "default", function() { return n }) }, function(t, e, r) { "use strict"; var n = r(3);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0; var i = n(r(176)),
        a = "undefined" != typeof window;
    e.IS_BROWSER_ENV = a; var o = function(t, e) { return a ? t() : e };
    e.withBrowser = o; var s = o(function() { return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) { return t in Element.prototype }) });
    e.ELEMENT_MATCHES = s; var l = o(function() { var t = document.createElement("i"),
            e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]; try { for (var r = e.length, n = 0; n < r; n++) { var i = e[n]; if (t.style.display = i, t.style.display === i) return i } return "" } catch (t) { return "" } }, "flex");
    e.FLEX_PREFIXED = l; var h = o(function() { var t = document.createElement("i"); if (null == t.style.transform)
            for (var e = ["Webkit", "Moz", "ms"], r = e.length, n = 0; n < r; n++) { var i = e[n] + "Transform"; if (void 0 !== t.style[i]) return i }
        return "transform" }, "transform");
    e.TRANSFORM_PREFIXED = h; var c = h.split("transform")[0],
        u = c ? c + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = u }, function(t, e, r) { "use strict"; var n = r(3);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0; var i = n(r(46)),
        a = r(14),
        o = r(44),
        s = a.IX2EngineActionTypes,
        l = s.IX2_RAW_DATA_IMPORTED,
        h = s.IX2_SESSION_INITIALIZED,
        c = s.IX2_SESSION_STARTED,
        u = s.IX2_SESSION_STOPPED,
        f = s.IX2_PREVIEW_REQUESTED,
        p = s.IX2_PLAYBACK_REQUESTED,
        d = s.IX2_STOP_REQUESTED,
        m = s.IX2_CLEAR_REQUESTED,
        v = s.IX2_EVENT_LISTENER_ADDED,
        y = s.IX2_TEST_FRAME_RENDERED,
        g = s.IX2_EVENT_STATE_CHANGED,
        E = s.IX2_ANIMATION_FRAME_CHANGED,
        b = s.IX2_PARAMETER_CHANGED,
        _ = s.IX2_INSTANCE_ADDED,
        x = s.IX2_INSTANCE_STARTED,
        T = s.IX2_INSTANCE_REMOVED,
        S = s.IX2_ELEMENT_STATE_CHANGED,
        I = s.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        A = s.IX2_VIEWPORT_WIDTH_CHANGED,
        P = s.IX2_MEDIA_QUERIES_DEFINED,
        w = o.IX2VanillaUtils.reifyState;
    e.rawDataImported = function(t) { return { type: l, payload: (0, i.default)({}, w(t)) } };
    e.sessionInitialized = function(t) { var e = t.hasBoundaryNodes,
            r = t.reducedMotion; return { type: h, payload: { hasBoundaryNodes: e, reducedMotion: r } } };
    e.sessionStarted = function() { return { type: c } };
    e.sessionStopped = function() { return { type: u } };
    e.previewRequested = function(t) { var e = t.rawData,
            r = t.defer; return { type: f, payload: { defer: r, rawData: e } } };
    e.playbackRequested = function(t) { var e = t.actionTypeId,
            r = void 0 === e ? a.ActionTypeConsts.GENERAL_START_ACTION : e,
            n = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            s = t.allowEvents,
            l = t.immediate,
            h = t.testManual,
            c = t.verbose,
            u = t.rawData; return { type: p, payload: { actionTypeId: r, actionListId: n, actionItemId: i, testManual: h, eventId: o, allowEvents: s, immediate: l, verbose: c, rawData: u } } };
    e.stopRequested = function(t) { return { type: d, payload: { actionListId: t } } };
    e.clearRequested = function() { return { type: m } };
    e.eventListenerAdded = function(t, e) { return { type: v, payload: { target: t, listenerParams: e } } };
    e.testFrameRendered = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1; return { type: y, payload: { step: t } } };
    e.eventStateChanged = function(t, e) { return { type: g, payload: { stateKey: t, newState: e } } };
    e.animationFrameChanged = function(t, e) { return { type: E, payload: { now: t, parameters: e } } };
    e.parameterChanged = function(t, e) { return { type: b, payload: { key: t, value: e } } };
    e.instanceAdded = function(t) { return { type: _, payload: (0, i.default)({}, t) } };
    e.instanceStarted = function(t, e) { return { type: x, payload: { instanceId: t, time: e } } };
    e.instanceRemoved = function(t) { return { type: T, payload: { instanceId: t } } };
    e.elementStateChanged = function(t, e, r, n) { return { type: S, payload: { elementId: t, actionTypeId: e, current: r, actionItem: n } } };
    e.actionListPlaybackChanged = function(t) { var e = t.actionListId,
            r = t.isPlaying; return { type: I, payload: { actionListId: e, isPlaying: r } } };
    e.viewportWidthChanged = function(t) { var e = t.width,
            r = t.mediaQueries; return { type: A, payload: { width: e, mediaQueries: r } } };
    e.mediaQueriesDefined = function() { return { type: P } } }, function(t, e, r) { var n = r(188),
        i = r(123);

    function a(t, e) { this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0 }
    a.prototype = n(i.prototype), a.prototype.constructor = a, t.exports = a }, function(t, e) { t.exports = function() {} }, function(t, e, r) { var n = r(188),
        i = r(123),
        a = 4294967295;

    function o(t) { this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = a, this.__views__ = [] }
    o.prototype = n(i.prototype), o.prototype.constructor = o, t.exports = o }, function(t, e, r) { "use strict"; var n = r(3)(r(45));
    window.tram = function(t) {
        function e(t, e) { return (new N.Bare).init(t, e) }

        function r(t) { return t.replace(/[A-Z]/g, function(t) { return "-" + t.toLowerCase() }) }

        function i(t) { var e = parseInt(t.slice(1), 16); return [e >> 16 & 255, e >> 8 & 255, 255 & e] }

        function a(t, e, r) { return "#" + (1 << 24 | t << 16 | e << 8 | r).toString(16).slice(1) }

        function o() {}

        function s(t, e, r) { h("Units do not match [" + t + "]: " + e + ", " + r) }

        function l(t, e, r) { if (void 0 !== e && (r = e), void 0 === t) return r; var n = r; return $.test(t) || !Z.test(t) ? n = parseInt(t, 10) : Z.test(t) && (n = 1e3 * parseFloat(t)), 0 > n && (n = 0), n == n ? n : r }

        function h(t) { W.debug && window && window.console.warn(t) } var c = function(t, e, r) {
                function i(t) { return "object" == (0, n.default)(t) }

                function a(t) { return "function" == typeof t }

                function o() {} return function n(s, l) {
                    function h() { var t = new c; return a(t.init) && t.init.apply(t, arguments), t }

                    function c() {}
                    l === r && (l = s, s = Object), h.Bare = c; var u, f = o[t] = s[t],
                        p = c[t] = h[t] = new o; return p.constructor = h, h.mixin = function(e) { return c[t] = h[t] = n(h, e)[t], h }, h.open = function(t) { if (u = {}, a(t) ? u = t.call(h, p, f, h, s) : i(t) && (u = t), i(u))
                            for (var r in u) e.call(u, r) && (p[r] = u[r]); return a(p.init) || (p.init = s), h }, h.open(l) } }("prototype", {}.hasOwnProperty),
            u = { ease: ["ease", function(t, e, r, n) { var i = (t /= n) * t,
                        a = i * t; return e + r * (-2.75 * a * i + 11 * i * i + -15.5 * a + 8 * i + .25 * t) }], "ease-in": ["ease-in", function(t, e, r, n) { var i = (t /= n) * t,
                        a = i * t; return e + r * (-1 * a * i + 3 * i * i + -3 * a + 2 * i) }], "ease-out": ["ease-out", function(t, e, r, n) { var i = (t /= n) * t,
                        a = i * t; return e + r * (.3 * a * i + -1.6 * i * i + 2.2 * a + -1.8 * i + 1.9 * t) }], "ease-in-out": ["ease-in-out", function(t, e, r, n) { var i = (t /= n) * t,
                        a = i * t; return e + r * (2 * a * i + -5 * i * i + 2 * a + 2 * i) }], linear: ["linear", function(t, e, r, n) { return r * t / n + e }], "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, r, n) { return r * (t /= n) * t + e }], "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, r, n) { return -r * (t /= n) * (t - 2) + e }], "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, r, n) { return (t /= n / 2) < 1 ? r / 2 * t * t + e : -r / 2 * (--t * (t - 2) - 1) + e }], "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, r, n) { return r * (t /= n) * t * t + e }], "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, r, n) { return r * ((t = t / n - 1) * t * t + 1) + e }], "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, r, n) { return (t /= n / 2) < 1 ? r / 2 * t * t * t + e : r / 2 * ((t -= 2) * t * t + 2) + e }], "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, r, n) { return r * (t /= n) * t * t * t + e }], "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, r, n) { return -r * ((t = t / n - 1) * t * t * t - 1) + e }], "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, r, n) { return (t /= n / 2) < 1 ? r / 2 * t * t * t * t + e : -r / 2 * ((t -= 2) * t * t * t - 2) + e }], "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, r, n) { return r * (t /= n) * t * t * t * t + e }], "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, r, n) { return r * ((t = t / n - 1) * t * t * t * t + 1) + e }], "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, r, n) { return (t /= n / 2) < 1 ? r / 2 * t * t * t * t * t + e : r / 2 * ((t -= 2) * t * t * t * t + 2) + e }], "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, r, n) { return -r * Math.cos(t / n * (Math.PI / 2)) + r + e }], "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, r, n) { return r * Math.sin(t / n * (Math.PI / 2)) + e }], "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, r, n) { return -r / 2 * (Math.cos(Math.PI * t / n) - 1) + e }], "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, r, n) { return 0 === t ? e : r * Math.pow(2, 10 * (t / n - 1)) + e }], "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, r, n) { return t === n ? e + r : r * (1 - Math.pow(2, -10 * t / n)) + e }], "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, r, n) { return 0 === t ? e : t === n ? e + r : (t /= n / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + e : r / 2 * (2 - Math.pow(2, -10 * --t)) + e }], "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, r, n) { return -r * (Math.sqrt(1 - (t /= n) * t) - 1) + e }], "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, r, n) { return r * Math.sqrt(1 - (t = t / n - 1) * t) + e }], "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, r, n) { return (t /= n / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + e : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e }], "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, r, n, i) { return void 0 === i && (i = 1.70158), r * (t /= n) * t * ((i + 1) * t - i) + e }], "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, r, n, i) { return void 0 === i && (i = 1.70158), r * ((t = t / n - 1) * t * ((i + 1) * t + i) + 1) + e }], "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, r, n, i) { return void 0 === i && (i = 1.70158), (t /= n / 2) < 1 ? r / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : r / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e }] },
            f = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
            p = document,
            d = window,
            m = "bkwld-tram",
            v = /[\-\.0-9]/g,
            y = /[A-Z]/,
            g = "number",
            E = /^(rgb|#)/,
            b = /(em|cm|mm|in|pt|pc|px)$/,
            _ = /(em|cm|mm|in|pt|pc|px|%)$/,
            x = /(deg|rad|turn)$/,
            T = "unitless",
            S = /(all|none) 0s ease 0s/,
            I = /^(width|height)$/,
            A = " ",
            P = p.createElement("a"),
            w = ["Webkit", "Moz", "O", "ms"],
            C = ["-webkit-", "-moz-", "-o-", "-ms-"],
            D = function(t) { if (t in P.style) return { dom: t, css: t }; var e, r, n = "",
                    i = t.split("-"); for (e = 0; e < i.length; e++) n += i[e].charAt(0).toUpperCase() + i[e].slice(1); for (e = 0; e < w.length; e++)
                    if ((r = w[e] + n) in P.style) return { dom: r, css: C[e] + t } },
            M = e.support = { bind: Function.prototype.bind, transform: D("transform"), transition: D("transition"), backface: D("backface-visibility"), timing: D("transition-timing-function") }; if (M.transition) { var O = M.timing.dom; if (P.style[O] = u["ease-in-back"][0], !P.style[O])
                for (var R in f) u[R][0] = f[R] } var k = e.frame = function() { var t = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame; return t && M.bind ? t.bind(d) : function(t) { d.setTimeout(t, 16) } }(),
            F = e.now = function() { var t = d.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow); return e && M.bind ? e.bind(t) : Date.now || function() { return +new Date } }(),
            L = c(function(e) {
                function i(t, e) { var r = function(t) { for (var e = -1, r = t ? t.length : 0, n = []; ++e < r;) { var i = t[e];
                                i && n.push(i) } return n }(("" + t).split(A)),
                        n = r[0];
                    e = e || {}; var i = K[n]; if (!i) return h("Unsupported property: " + n); if (!e.weak || !this.props[n]) { var a = i[0],
                            o = this.props[n]; return o || (o = this.props[n] = new a.Bare), o.init(this.$el, r, i, e), o } }

                function a(t, e, r) { if (t) { var a = (0, n.default)(t); if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == a && e) return this.timer = new H({ duration: t, context: this, complete: o }), void(this.active = !0); if ("string" == a && e) { switch (t) {
                                case "hide":
                                    c.call(this); break;
                                case "stop":
                                    s.call(this); break;
                                case "redraw":
                                    u.call(this); break;
                                default:
                                    i.call(this, t, r && r[1]) } return o.call(this) } if ("function" == a) return void t.call(this, this); if ("object" == a) { var h = 0;
                            p.call(this, t, function(t, e) { t.span > h && (h = t.span), t.stop(), t.animate(e) }, function(t) { "wait" in t && (h = l(t.wait, 0)) }), f.call(this), h > 0 && (this.timer = new H({ duration: h, context: this }), this.active = !0, e && (this.timer.complete = o)); var d = this,
                                m = !1,
                                v = {};
                            k(function() { p.call(d, t, function(t) { t.active && (m = !0, v[t.name] = t.nextStyle) }), m && d.$el.css(v) }) } } }

                function o() { if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) { var t = this.queue.shift();
                        a.call(this, t.options, !0, t.args) } }

                function s(t) { var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, n.default)(t) && null != t ? t : this.props, p.call(this, e, d), f.call(this) }

                function c() { s.call(this), this.el.style.display = "none" }

                function u() { this.el.offsetHeight }

                function f() { var t, e, r = []; for (t in this.upstream && r.push(this.upstream), this.props)(e = this.props[t]).active && r.push(e.string);
                    r = r.join(","), this.style !== r && (this.style = r, this.el.style[M.transition.dom] = r) }

                function p(t, e, n) { var a, o, s, l, h = e !== d,
                        c = {}; for (a in t) s = t[a], a in Q ? (c.transform || (c.transform = {}), c.transform[a] = s) : (y.test(a) && (a = r(a)), a in K ? c[a] = s : (l || (l = {}), l[a] = s)); for (a in c) { if (s = c[a], !(o = this.props[a])) { if (!h) continue;
                            o = i.call(this, a) }
                        e.call(this, o, s) }
                    n && l && n.call(this, l) }

                function d(t) { t.stop() }

                function v(t, e) { t.set(e) }

                function g(t) { this.$el.css(t) }

                function E(t, r) { e[t] = function() { return this.children ? function(t, e) { var r, n = this.children.length; for (r = 0; n > r; r++) t.apply(this.children[r], e); return this }.call(this, r, arguments) : (this.el && r.apply(this, arguments), this) } }
                e.init = function(e) { if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, W.keepInherited && !W.fallback) { var r = q(this.el, "transition");
                        r && !S.test(r) && (this.upstream = r) }
                    M.backface && W.hideBackface && U(this.el, M.backface.css, "hidden") }, E("add", i), E("start", a), E("wait", function(t) { t = l(t, 0), this.active ? this.queue.push({ options: t }) : (this.timer = new H({ duration: t, context: this, complete: o }), this.active = !0) }), E("then", function(t) { return this.active ? (this.queue.push({ options: t, args: arguments }), void(this.timer.complete = o)) : h("No active transition timer. Use start() or wait() before then().") }), E("next", o), E("stop", s), E("set", function(t) { s.call(this, t), p.call(this, t, v, g) }), E("show", function(t) { "string" != typeof t && (t = "block"), this.el.style.display = t }), E("hide", c), E("redraw", u), E("destroy", function() { s.call(this), t.removeData(this.el, m), this.$el = this.el = null }) }),
            N = c(L, function(e) {
                function r(e, r) { var n = t.data(e, m) || t.data(e, m, new L.Bare); return n.el || n.init(e), r ? n.start(r) : n }
                e.init = function(e, n) { var i = t(e); if (!i.length) return this; if (1 === i.length) return r(i[0], n); var a = []; return i.each(function(t, e) { a.push(r(e, n)) }), this.children = a, this } }),
            V = c(function(t) {
                function e() { var t = this.get();
                    this.update("auto"); var e = this.get(); return this.update(t), e }

                function r(t) { var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t); return (e ? a(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3") } var i = 500,
                    o = "ease",
                    s = 0;
                t.init = function(t, e, r, n) { this.$el = t, this.el = t[0]; var a = e[0];
                    r[2] && (a = r[2]), Y[a] && (a = Y[a]), this.name = a, this.type = r[1], this.duration = l(e[1], this.duration, i), this.ease = function(t, e, r) { return void 0 !== e && (r = e), t in u ? t : r }(e[2], this.ease, o), this.delay = l(e[3], this.delay, s), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = I.test(this.name), this.unit = n.unit || this.unit || W.defaultUnit, this.angle = n.angle || this.angle || W.defaultAngle, W.fallback || n.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + A + this.duration + "ms" + ("ease" != this.ease ? A + u[this.ease][0] : "") + (this.delay ? A + this.delay + "ms" : "")) }, t.set = function(t) { t = this.convert(t, this.type), this.update(t), this.redraw() }, t.transition = function(t) { this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t }, t.fallback = function(t) { var r = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == r && (r = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new z({ from: r, to: t, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this }) }, t.get = function() { return q(this.el, this.name) }, t.update = function(t) { U(this.el, this.name, t) }, t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, U(this.el, this.name, this.get())); var t = this.tween;
                    t && t.context && t.destroy() }, t.convert = function(t, e) { if ("auto" == t && this.auto) return t; var i, a = "number" == typeof t,
                        o = "string" == typeof t; switch (e) {
                        case g:
                            if (a) return t; if (o && "" === t.replace(v, "")) return +t;
                            i = "number(unitless)"; break;
                        case E:
                            if (o) { if ("" === t && this.original) return this.original; if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : r(t) }
                            i = "hex or rgb string"; break;
                        case b:
                            if (a) return t + this.unit; if (o && e.test(t)) return t;
                            i = "number(px) or string(unit)"; break;
                        case _:
                            if (a) return t + this.unit; if (o && e.test(t)) return t;
                            i = "number(px) or string(unit or %)"; break;
                        case x:
                            if (a) return t + this.angle; if (o && e.test(t)) return t;
                            i = "number(deg) or string(angle)"; break;
                        case T:
                            if (a) return t; if (o && _.test(t)) return t;
                            i = "number(unitless) or string(unit or %)" } return function(t, e) { h("Type warning: Expected: [" + t + "] Got: [" + (0, n.default)(e) + "] " + e) }(i, t), t }, t.redraw = function() { this.el.offsetHeight } }),
            B = c(V, function(t, e) { t.init = function() { e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), E)) } }),
            G = c(V, function(t, e) { t.init = function() { e.init.apply(this, arguments), this.animate = this.fallback }, t.get = function() { return this.$el[this.name]() }, t.update = function(t) { this.$el[this.name](t) } }),
            j = c(V, function(t, e) {
                function r(t, e) { var r, n, i, a, o; for (r in t) i = (a = Q[r])[0], n = a[1] || r, o = this.convert(t[r], i), e.call(this, n, o, i) }
                t.init = function() { e.init.apply(this, arguments), this.current || (this.current = {}, Q.perspective && W.perspective && (this.current.perspective = W.perspective, U(this.el, this.name, this.style(this.current)), this.redraw())) }, t.set = function(t) { r.call(this, t, function(t, e) { this.current[t] = e }), U(this.el, this.name, this.style(this.current)), this.redraw() }, t.transition = function(t) { var e = this.values(t);
                    this.tween = new X({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease }); var r, n = {}; for (r in this.current) n[r] = r in e ? e[r] : this.current[r];
                    this.active = !0, this.nextStyle = this.style(n) }, t.fallback = function(t) { var e = this.values(t);
                    this.tween = new X({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this }) }, t.update = function() { U(this.el, this.name, this.style(this.current)) }, t.style = function(t) { var e, r = ""; for (e in t) r += e + "(" + t[e] + ") "; return r }, t.values = function(t) { var e, n = {}; return r.call(this, t, function(t, r, i) { n[t] = r, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i)) }), n } }),
            z = c(function(e) {
                function r() { var t, e, n, i = l.length; if (i)
                        for (k(r), e = F(), t = i; t--;)(n = l[t]) && n.render(e) } var n = { ease: u.ease[1], from: 0, to: 1 };
                e.init = function(t) { this.duration = t.duration || 0, this.delay = t.delay || 0; var e = t.ease || n.ease;
                    u[e] && (e = u[e][1]), "function" != typeof e && (e = n.ease), this.ease = e, this.update = t.update || o, this.complete = t.complete || o, this.context = t.context || this, this.name = t.name; var r = t.from,
                        i = t.to;
                    void 0 === r && (r = n.from), void 0 === i && (i = n.to), this.unit = t.unit || "", "number" == typeof r && "number" == typeof i ? (this.begin = r, this.change = i - r) : this.format(i, r), this.value = this.begin + this.unit, this.start = F(), !1 !== t.autoplay && this.play() }, e.play = function() { var t;
                    this.active || (this.start || (this.start = F()), this.active = !0, t = this, 1 === l.push(t) && k(r)) }, e.stop = function() { var e, r, n;
                    this.active && (this.active = !1, e = this, (n = t.inArray(e, l)) >= 0 && (r = l.slice(n + 1), l.length = n, r.length && (l = l.concat(r)))) }, e.render = function(t) { var e, r = t - this.start; if (this.delay) { if (r <= this.delay) return;
                        r -= this.delay } if (r < this.duration) { var n = this.ease(r, 0, 1, this.duration); return e = this.startRGB ? function(t, e, r) { return a(t[0] + r * (e[0] - t[0]), t[1] + r * (e[1] - t[1]), t[2] + r * (e[2] - t[2])) }(this.startRGB, this.endRGB, n) : function(t) { return Math.round(t * h) / h }(this.begin + n * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value) }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy() }, e.format = function(t, e) { if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1); if (!this.unit) { var r = e.replace(v, "");
                        r !== t.replace(v, "") && s("tween", e, t), this.unit = r }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e }, e.destroy = function() { this.stop(), this.context = null, this.ease = this.update = this.complete = o }; var l = [],
                    h = 1e3 }),
            H = c(z, function(t) { t.init = function(t) { this.duration = t.duration || 0, this.complete = t.complete || o, this.context = t.context, this.play() }, t.render = function(t) { t - this.start < this.duration || (this.complete.call(this.context), this.destroy()) } }),
            X = c(z, function(t, e) { t.init = function(t) { var e, r; for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) r = t.values[e], this.current[e] !== r && this.tweens.push(new z({ name: e, from: this.current[e], to: r, duration: t.duration, delay: t.delay, ease: t.ease, autoplay: !1 }));
                    this.play() }, t.render = function(t) { var e, r, n = !1; for (e = this.tweens.length; e--;)(r = this.tweens[e]).context && (r.render(t), this.current[r.name] = r.value, n = !0); return n ? void(this.update && this.update.call(this.context)) : this.destroy() }, t.destroy = function() { if (e.destroy.call(this), this.tweens) { var t; for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null } } }),
            W = e.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !M.transition, agentTests: [] };
        e.fallback = function(t) { if (!M.transition) return W.fallback = !0;
            W.agentTests.push("(" + t + ")"); var e = new RegExp(W.agentTests.join("|"), "i");
            W.fallback = e.test(navigator.userAgent) }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) { return new z(t) }, e.delay = function(t, e, r) { return new H({ complete: e, duration: t, context: r }) }, t.fn.tram = function(t) { return e.call(null, this, t) }; var U = t.style,
            q = t.css,
            Y = { transform: M.transform && M.transform.css },
            K = { color: [B, E], background: [B, E, "background-color"], "outline-color": [B, E], "border-color": [B, E], "border-top-color": [B, E], "border-right-color": [B, E], "border-bottom-color": [B, E], "border-left-color": [B, E], "border-width": [V, b], "border-top-width": [V, b], "border-right-width": [V, b], "border-bottom-width": [V, b], "border-left-width": [V, b], "border-spacing": [V, b], "letter-spacing": [V, b], margin: [V, b], "margin-top": [V, b], "margin-right": [V, b], "margin-bottom": [V, b], "margin-left": [V, b], padding: [V, b], "padding-top": [V, b], "padding-right": [V, b], "padding-bottom": [V, b], "padding-left": [V, b], "outline-width": [V, b], opacity: [V, g], top: [V, _], right: [V, _], bottom: [V, _], left: [V, _], "font-size": [V, _], "text-indent": [V, _], "word-spacing": [V, _], width: [V, _], "min-width": [V, _], "max-width": [V, _], height: [V, _], "min-height": [V, _], "max-height": [V, _], "line-height": [V, T], "scroll-top": [G, g, "scrollTop"], "scroll-left": [G, g, "scrollLeft"] },
            Q = {};
        M.transform && (K.transform = [j], Q = { x: [_, "translateX"], y: [_, "translateY"], rotate: [x], rotateX: [x], rotateY: [x], scale: [g], scaleX: [g], scaleY: [g], skew: [x], skewX: [x], skewY: [x] }), M.transform && M.backface && (Q.z = [_, "translateZ"], Q.rotateZ = [x], Q.scaleZ = [g], Q.perspective = [b]); var $ = /ms/,
            Z = /s|\./; return t.tram = e }(window.jQuery) }, function(t, e, r) { var n = r(127),
        i = r(28),
        a = r(145),
        o = Math.max;
    t.exports = function(t, e, r) { var s = null == t ? 0 : t.length; if (!s) return -1; var l = null == r ? 0 : a(r); return l < 0 && (l = o(s + l, 0)), n(t, i(e, 3), l) } }, function(t, e) { t.exports = function(t, e, r, n) { for (var i = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i;)
            if (e(t[a], a, t)) return a;
        return -1 } }, function(t, e, r) { var n = r(58),
        i = r(204),
        a = r(205),
        o = r(206),
        s = r(207),
        l = r(208);

    function h(t) { var e = this.__data__ = new n(t);
        this.size = e.size }
    h.prototype.clear = i, h.prototype.delete = a, h.prototype.get = o, h.prototype.has = s, h.prototype.set = l, t.exports = h }, function(t, e, r) { var n = r(38),
        i = r(23),
        a = "[object AsyncFunction]",
        o = "[object Function]",
        s = "[object GeneratorFunction]",
        l = "[object Proxy]";
    t.exports = function(t) { if (!i(t)) return !1; var e = n(t); return e == o || e == s || e == a || e == l } }, function(t, e, r) {
    (function(e) { var r = "object" == typeof e && e && e.Object === Object && e;
        t.exports = r }).call(this, r(60)) }, function(t, e) { var r = Function.prototype.toString;
    t.exports = function(t) { if (null != t) { try { return r.call(t) } catch (t) {} try { return t + "" } catch (t) {} } return "" } }, function(t, e, r) { var n = r(227),
        i = r(30);
    t.exports = function t(e, r, a, o, s) { return e === r || (null == e || null == r || !i(e) && !i(r) ? e != e && r != r : n(e, r, a, o, t, s)) } }, function(t, e, r) { var n = r(228),
        i = r(231),
        a = r(232),
        o = 1,
        s = 2;
    t.exports = function(t, e, r, l, h, c) { var u = r & o,
            f = t.length,
            p = e.length; if (f != p && !(u && p > f)) return !1; var d = c.get(t),
            m = c.get(e); if (d && m) return d == e && m == t; var v = -1,
            y = !0,
            g = r & s ? new n : void 0; for (c.set(t, e), c.set(e, t); ++v < f;) { var E = t[v],
                b = e[v]; if (l) var _ = u ? l(b, E, v, e, t, c) : l(E, b, v, t, e, c); if (void 0 !== _) { if (_) continue;
                y = !1; break } if (g) { if (!i(e, function(t, e) { if (!a(g, e) && (E === t || h(E, t, r, l, c))) return g.push(e) })) { y = !1; break } } else if (E !== b && !h(E, b, r, l, c)) { y = !1; break } } return c.delete(t), c.delete(e), y } }, function(t, e, r) { var n = r(82),
        i = r(10);
    t.exports = function(t, e, r) { var a = e(t); return i(t) ? a : n(a, r(t)) } }, function(t, e, r) { var n = r(239),
        i = r(136),
        a = Object.prototype.propertyIsEnumerable,
        o = Object.getOwnPropertySymbols,
        s = o ? function(t) { return null == t ? [] : (t = Object(t), n(o(t), function(e) { return a.call(t, e) })) } : i;
    t.exports = s }, function(t, e) { t.exports = function() { return [] } }, function(t, e, r) { var n = r(240),
        i = r(64),
        a = r(10),
        o = r(83),
        s = r(84),
        l = r(85),
        h = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) { var r = a(t),
            c = !r && i(t),
            u = !r && !c && o(t),
            f = !r && !c && !u && l(t),
            p = r || c || u || f,
            d = p ? n(t.length, String) : [],
            m = d.length; for (var v in t) !e && !h.call(t, v) || p && ("length" == v || u && ("offset" == v || "parent" == v) || f && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || s(v, m)) || d.push(v); return d } }, function(t, e) { t.exports = function(t) { return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", { enumerable: !0, get: function() { return t.l } }), Object.defineProperty(t, "id", { enumerable: !0, get: function() { return t.i } }), t.webpackPolyfill = 1), t } }, function(t, e) { t.exports = function(t, e) { return function(r) { return t(e(r)) } } }, function(t, e, r) { var n = r(29)(r(19), "WeakMap");
    t.exports = n }, function(t, e, r) { var n = r(23);
    t.exports = function(t) { return t == t && !n(t) } }, function(t, e) { t.exports = function(t, e) { return function(r) { return null != r && r[t] === e && (void 0 !== e || t in Object(r)) } } }, function(t, e) { t.exports = function(t, e) { for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t); return i } }, function(t, e) { t.exports = function(t) { return function(e) { return null == e ? void 0 : e[t] } } }, function(t, e, r) { var n = r(262);
    t.exports = function(t) { var e = n(t),
            r = e % 1; return e == e ? r ? e - r : e : 0 } }, function(t, e, r) { var n = r(0),
        i = r(16),
        a = r(5),
        o = r(97),
        s = r(147),
        l = n.Object;
    t.exports = s ? function(t) { return "symbol" == typeof t } : function(t) { var e = i("Symbol"); return a(e) && o(e.prototype, l(t)) } }, function(t, e, r) { var n = r(148);
    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator }, function(t, e, r) { var n = r(31),
        i = r(9);
    t.exports = !!Object.getOwnPropertySymbols && !i(function() { var t = Symbol(); return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && n && n < 41 }) }, function(t, e, r) { var n = r(50),
        i = r(70);
    (t.exports = function(t, e) { return i[t] || (i[t] = void 0 !== e ? e : {}) })("versions", []).push({ version: "3.19.0", mode: n ? "pure" : "global", copyright: "Â© 2021 Denis Pushkarev (zloirock.ru)" }) }, function(t, e, r) { var n = r(20),
        i = r(9),
        a = r(100);
    t.exports = !n && !i(function() { return 7 != Object.defineProperty(a("div"), "a", { get: function() { return 7 } }).a }) }, function(t, e, r) { var n = r(20),
        i = r(17),
        a = Function.prototype,
        o = n && Object.getOwnPropertyDescriptor,
        s = i(a, "name"),
        l = s && "something" === function() {}.name,
        h = s && (!n || n && o(a, "name").configurable);
    t.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: h } }, function(t, e, r) { var n = r(2),
        i = r(17),
        a = r(24),
        o = r(103).indexOf,
        s = r(73),
        l = n([].push);
    t.exports = function(t, e) { var r, n = a(t),
            h = 0,
            c = []; for (r in n) !i(s, r) && i(n, r) && l(c, r); for (; e.length > h;) i(n, r = e[h++]) && (~o(c, r) || l(c, r)); return c } }, function(t, e, r) { var n = r(15),
        i = r(11),
        a = r(33);
    t.exports = function(t, e, r) { var o, s;
        i(t); try { if (!(o = a(t, "return"))) { if ("throw" === e) throw r; return r }
            o = n(o, t) } catch (t) { s = !0, o = t } if ("throw" === e) throw r; if (s) throw o; return i(o), r } }, function(t, e, r) { var n = r(6),
        i = r(52),
        a = n("iterator"),
        o = Array.prototype;
    t.exports = function(t) { return void 0 !== t && (i.Array === t || o[a] === t) } }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(7),
        a = r(4),
        o = r(34),
        s = r(8);
    n({ target: "Array", proto: !0 }, { at: function(t) { var e = i(this),
                r = a(e),
                n = o(t),
                s = n >= 0 ? n : r + n; return s < 0 || s >= r ? void 0 : e[s] } }), s("at") }, function(t, e, r) { var n = r(16);
    t.exports = n("document", "documentElement") }, function(t, e, r) { var n = r(0),
        i = r(35),
        a = r(42),
        o = r(12),
        s = r(6)("species"),
        l = n.Array;
    t.exports = function(t) { var e; return i(t) && (e = t.constructor, a(e) && (e === l || i(e.prototype)) ? e = void 0 : o(e) && null === (e = e[s]) && (e = void 0)), void 0 === e ? l : e } }, function(t, e, r) { "use strict"; var n = r(0),
        i = r(35),
        a = r(4),
        o = r(22),
        s = n.TypeError,
        l = function(t, e, r, n, h, c, u, f) { for (var p, d, m = h, v = 0, y = !!u && o(u, f); v < n;) { if (v in r) { if (p = y ? y(r[v], v, e) : r[v], c > 0 && i(p)) d = a(p), m = l(t, e, p, d, m, c - 1) - 1;
                    else { if (m >= 9007199254740991) throw s("Exceed the acceptable array length");
                        t[m] = p }
                    m++ }
                v++ } return m };
    t.exports = l }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(103).includes,
        a = r(8);
    n({ target: "Array", proto: !0 }, { includes: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), a("includes") }, function(t, e, r) { "use strict"; var n, i, a, o = r(9),
        s = r(5),
        l = r(36),
        h = r(109),
        c = r(27),
        u = r(6),
        f = r(50),
        p = u("iterator"),
        d = !1;
    [].keys && ("next" in (a = [].keys()) ? (i = h(h(a))) !== Object.prototype && (n = i) : d = !0), null == n || o(function() { var t = {}; return n[p].call(t) !== t }) ? n = {} : f && (n = l(n)), s(n[p]) || c(n, p, function() { return this }), t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: d } }, function(t, e, r) { var n = r(0),
        i = r(21),
        a = r(7),
        o = r(40),
        s = r(4),
        l = n.TypeError,
        h = function(t) { return function(e, r, n, h) { i(r); var c = a(e),
                    u = o(c),
                    f = s(c),
                    p = t ? f - 1 : 0,
                    d = t ? -1 : 1; if (n < 2)
                    for (;;) { if (p in u) { h = u[p], p += d; break } if (p += d, t ? p < 0 : f <= p) throw l("Reduce of empty array with no initial value") }
                for (; t ? p >= 0 : f > p; p += d) p in u && (h = r(h, u[p], p, c)); return h } };
    t.exports = { left: h(!1), right: h(!0) } }, function(t, e, r) { var n = r(1),
        i = r(2),
        a = r(73),
        o = r(12),
        s = r(17),
        l = r(18).f,
        h = r(102),
        c = r(326),
        u = r(99),
        f = r(327),
        p = !1,
        d = u("meta"),
        m = 0,
        v = Object.isExtensible || function() { return !0 },
        y = function(t) { l(t, d, { value: { objectID: "O" + m++, weakData: {} } }) },
        g = t.exports = { enable: function() { g.enable = function() {}, p = !0; var t = h.f,
                    e = i([].splice),
                    r = {};
                r[d] = 1, t(r).length && (h.f = function(r) { for (var n = t(r), i = 0, a = n.length; i < a; i++)
                        if (n[i] === d) { e(n, i, 1); break }
                    return n }, n({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: c.f })) }, fastKey: function(t, e) { if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!s(t, d)) { if (!v(t)) return "F"; if (!e) return "E";
                    y(t) } return t[d].objectID }, getWeakData: function(t, e) { if (!s(t, d)) { if (!v(t)) return !0; if (!e) return !1;
                    y(t) } return t[d].weakData }, onFreeze: function(t) { return f && p && v(t) && !s(t, d) && y(t), t } };
    a[d] = !0 }, function(t, e, r) { var n, i, a, o, s = r(0),
        l = r(111),
        h = r(22),
        c = r(5),
        u = r(17),
        f = r(9),
        p = r(156),
        d = r(78),
        m = r(100),
        v = r(164),
        y = r(55),
        g = s.setImmediate,
        E = s.clearImmediate,
        b = s.process,
        _ = s.Dispatch,
        x = s.Function,
        T = s.MessageChannel,
        S = s.String,
        I = 0,
        A = {}; try { n = s.location } catch (t) {} var P = function(t) { if (u(A, t)) { var e = A[t];
                delete A[t], e() } },
        w = function(t) { return function() { P(t) } },
        C = function(t) { P(t.data) },
        D = function(t) { s.postMessage(S(t), n.protocol + "//" + n.host) };
    g && E || (g = function(t) { var e = d(arguments, 1); return A[++I] = function() { l(c(t) ? t : x(t), void 0, e) }, i(I), I }, E = function(t) { delete A[t] }, y ? i = function(t) { b.nextTick(w(t)) } : _ && _.now ? i = function(t) { _.now(w(t)) } : T && !v ? (o = (a = new T).port2, a.port1.onmessage = C, i = h(o.postMessage, o)) : s.addEventListener && c(s.postMessage) && !s.importScripts && n && "file:" !== n.protocol && !f(D) ? (i = D, s.addEventListener("message", C, !1)) : i = "onreadystatechange" in m("script") ? function(t) { p.appendChild(m("script")).onreadystatechange = function() { p.removeChild(this), P(t) } } : function(t) { setTimeout(w(t), 0) }), t.exports = { set: g, clear: E } }, function(t, e, r) { var n = r(32);
    t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n) }, function(t, e, r) { "use strict"; var n = r(21),
        i = function(t) { var e, r;
            this.promise = new t(function(t, n) { if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
                e = t, r = n }), this.resolve = n(e), this.reject = n(r) };
    t.exports.f = function(t) { return new i(t) } }, function(t, e, r) { "use strict"; var n = r(111),
        i = r(11),
        a = r(36),
        o = r(33),
        s = r(116),
        l = r(41),
        h = r(16),
        c = r(344),
        u = h("Promise"),
        f = l.set,
        p = l.get,
        d = function(t, e, r) { var n = t.done;
            u.resolve(t.value).then(function(t) { e({ done: n, value: t }) }, r) },
        m = function(t) { f(this, { iterator: i(t), next: t.next }) };
    m.prototype = s(a(c), { next: function(t) { var e = p(this),
                r = !!arguments.length; return new u(function(a, o) { var s = i(n(e.next, e.iterator, r ? [t] : []));
                d(s, a, o) }) }, return: function(t) { var e = p(this).iterator,
                r = !!arguments.length; return new u(function(a, s) { var l = o(e, "return"); if (void 0 === l) return a({ done: !0, value: t }); var h = i(n(l, e, r ? [t] : []));
                d(h, a, s) }) }, throw: function(t) { var e = p(this).iterator,
                r = !!arguments.length; return new u(function(a, s) { var l = o(e, "throw"); if (void 0 === l) return s(t); var h = i(n(l, e, r ? [t] : []));
                d(h, a, s) }) } }), t.exports = m }, function(t, e, r) { var n = r(22),
        i = r(40),
        a = r(7),
        o = r(4),
        s = function(t) { var e = 1 == t; return function(r, s, l) { for (var h, c = a(r), u = i(c), f = n(s, l), p = o(u); p-- > 0;)
                    if (f(h = u[p], p, c)) switch (t) {
                        case 0:
                            return h;
                        case 1:
                            return p }
                    return e ? -1 : void 0 } };
    t.exports = { findLast: s(0), findLastIndex: s(1) } }, function(t, e, r) { "use strict";
    r.r(e); var n = r(118);
    r.d(e, "createStore", function() { return n.default }); var i = r(171);
    r.d(e, "combineReducers", function() { return i.default }); var a = r(173);
    r.d(e, "bindActionCreators", function() { return a.default }); var o = r(174);
    r.d(e, "applyMiddleware", function() { return o.default }); var s = r(119);
    r.d(e, "compose", function() { return s.default });
    r(172) }, function(t, e, r) { "use strict";
    r.r(e); var n = r(373),
        i = r(378),
        a = r(380),
        o = "[object Object]",
        s = Function.prototype,
        l = Object.prototype,
        h = s.toString,
        c = l.hasOwnProperty,
        u = h.call(Object);
    e.default = function(t) { if (!Object(a.default)(t) || Object(n.default)(t) != o) return !1; var e = Object(i.default)(t); if (null === e) return !0; var r = c.call(e, "constructor") && e.constructor; return "function" == typeof r && r instanceof r && h.call(r) == u } }, function(t, e, r) { "use strict";
    r.r(e); var n = r(374).default.Symbol;
    e.default = n }, function(t, e, r) { "use strict";
    r.r(e), r.d(e, "default", function() { return a }); var n = r(118);
    r(169), r(172);

    function i(t, e) { var r = e && e.type; return "Given action " + (r && '"' + r.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.' }

    function a(t) { for (var e = Object.keys(t), r = {}, a = 0; a < e.length; a++) { var o = e[a];
            0, "function" == typeof t[o] && (r[o] = t[o]) } var s, l = Object.keys(r); try {! function(t) { Object.keys(t).forEach(function(e) { var r = t[e]; if (void 0 === r(void 0, { type: n.ActionTypes.INIT })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'); if (void 0 === r(void 0, { type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".") })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + n.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.') }) }(r) } catch (t) { s = t } return function() { var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = arguments[1]; if (s) throw s; for (var n = !1, a = {}, o = 0; o < l.length; o++) { var h = l[o],
                    c = r[h],
                    u = t[h],
                    f = c(u, e); if (void 0 === f) { var p = i(h, e); throw new Error(p) }
                a[h] = f, n = n || f !== u } return n ? a : t } } }, function(t, e, r) { "use strict";

    function n(t) { "undefined" != typeof console && "function" == typeof console.error && console.error(t); try { throw new Error(t) } catch (t) {} }
    r.r(e), r.d(e, "default", function() { return n }) }, function(t, e, r) { "use strict";

    function n(t, e) { return function() { return e(t.apply(void 0, arguments)) } }

    function i(t, e) { if ("function" == typeof t) return n(t, e); if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'); for (var r = Object.keys(t), i = {}, a = 0; a < r.length; a++) { var o = r[a],
                s = t[o]; "function" == typeof s && (i[o] = n(s, e)) } return i }
    r.r(e), r.d(e, "default", function() { return i }) }, function(t, e, r) { "use strict";
    r.r(e), r.d(e, "default", function() { return a }); var n = r(119),
        i = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var r = arguments[e]; for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]) } return t };

    function a() { for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r]; return function(t) { return function(r, a, o) { var s, l = t(r, a, o),
                    h = l.dispatch,
                    c = { getState: l.getState, dispatch: function(t) { return h(t) } }; return s = e.map(function(t) { return t(c) }), h = n.default.apply(void 0, s)(l.dispatch), i({}, l, { dispatch: h }) } } } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
    e.ActionTypeConsts = { TRANSFORM_MOVE: "TRANSFORM_MOVE", TRANSFORM_SCALE: "TRANSFORM_SCALE", TRANSFORM_ROTATE: "TRANSFORM_ROTATE", TRANSFORM_SKEW: "TRANSFORM_SKEW", STYLE_OPACITY: "STYLE_OPACITY", STYLE_SIZE: "STYLE_SIZE", STYLE_FILTER: "STYLE_FILTER", STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION", STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR", STYLE_BORDER: "STYLE_BORDER", STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR", PLUGIN_LOTTIE: "PLUGIN_LOTTIE", GENERAL_DISPLAY: "GENERAL_DISPLAY", GENERAL_START_ACTION: "GENERAL_START_ACTION", GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION", GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS", GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION", GENERAL_LOOP: "GENERAL_LOOP", STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW" };
    e.ActionAppliesTo = { ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT" } }, function(t, e, r) { var n = r(177)(r(126));
    t.exports = n }, function(t, e, r) { var n = r(28),
        i = r(39),
        a = r(63);
    t.exports = function(t) { return function(e, r, o) { var s = Object(e); if (!i(e)) { var l = n(r, 3);
                e = a(e), r = function(t) { return l(s[t], t, s) } } var h = t(e, r, o); return h > -1 ? s[l ? e[h] : h] : void 0 } } }, function(t, e, r) { "use strict"; var n = r(3);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.inQuad = function(t) { return Math.pow(t, 2) }, e.outQuad = function(t) { return -(Math.pow(t - 1, 2) - 1) }, e.inOutQuad = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 2); return -.5 * ((t -= 2) * t - 2) }, e.inCubic = function(t) { return Math.pow(t, 3) }, e.outCubic = function(t) { return Math.pow(t - 1, 3) + 1 }, e.inOutCubic = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 3); return .5 * (Math.pow(t - 2, 3) + 2) }, e.inQuart = function(t) { return Math.pow(t, 4) }, e.outQuart = function(t) { return -(Math.pow(t - 1, 4) - 1) }, e.inOutQuart = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 4); return -.5 * ((t -= 2) * Math.pow(t, 3) - 2) }, e.inQuint = function(t) { return Math.pow(t, 5) }, e.outQuint = function(t) { return Math.pow(t - 1, 5) + 1 }, e.inOutQuint = function(t) { if ((t /= .5) < 1) return .5 * Math.pow(t, 5); return .5 * (Math.pow(t - 2, 5) + 2) }, e.inSine = function(t) { return 1 - Math.cos(t * (Math.PI / 2)) }, e.outSine = function(t) { return Math.sin(t * (Math.PI / 2)) }, e.inOutSine = function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) }, e.inExpo = function(t) { return 0 === t ? 0 : Math.pow(2, 10 * (t - 1)) }, e.outExpo = function(t) { return 1 === t ? 1 : 1 - Math.pow(2, -10 * t) }, e.inOutExpo = function(t) { if (0 === t) return 0; if (1 === t) return 1; if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1)); return .5 * (2 - Math.pow(2, -10 * --t)) }, e.inCirc = function(t) { return -(Math.sqrt(1 - t * t) - 1) }, e.outCirc = function(t) { return Math.sqrt(1 - Math.pow(t - 1, 2)) }, e.inOutCirc = function(t) { if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1); return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) }, e.outBounce = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, e.inBack = function(t) { return t * t * ((a + 1) * t - a) }, e.outBack = function(t) { return (t -= 1) * t * ((a + 1) * t + a) + 1 }, e.inOutBack = function(t) { var e = a; if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5; return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, e.inElastic = function(t) { var e = a,
            r = 0,
            n = 1; if (0 === t) return 0; if (1 === t) return 1;
        r || (r = .3);
        n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n); return -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) }, e.outElastic = function(t) { var e = a,
            r = 0,
            n = 1; if (0 === t) return 0; if (1 === t) return 1;
        r || (r = .3);
        n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n); return n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / r) + 1 }, e.inOutElastic = function(t) { var e = a,
            r = 0,
            n = 1; if (0 === t) return 0; if (2 == (t /= .5)) return 1;
        r || (r = .3 * 1.5);
        n < 1 ? (n = 1, e = r / 4) : e = r / (2 * Math.PI) * Math.asin(1 / n); if (t < 1) return n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * -.5; return n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * .5 + 1 }, e.swingFromTo = function(t) { var e = a; return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2) }, e.swingFrom = function(t) { return t * t * ((a + 1) * t - a) }, e.swingTo = function(t) { return (t -= 1) * t * ((a + 1) * t + a) + 1 }, e.bounce = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, e.bouncePast = function(t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0; var i = n(r(179)),
        a = 1.70158,
        o = (0, i.default)(.25, .1, .25, 1);
    e.ease = o; var s = (0, i.default)(.42, 0, 1, 1);
    e.easeIn = s; var l = (0, i.default)(0, 0, .58, 1);
    e.easeOut = l; var h = (0, i.default)(.42, 0, .58, 1);
    e.easeInOut = h }, function(t, e) { var r = 4,
        n = .001,
        i = 1e-7,
        a = 10,
        o = 11,
        s = 1 / (o - 1),
        l = "function" == typeof Float32Array;

    function h(t, e) { return 1 - 3 * e + 3 * t }

    function c(t, e) { return 3 * e - 6 * t }

    function u(t) { return 3 * t }

    function f(t, e, r) { return ((h(e, r) * t + c(e, r)) * t + u(e)) * t }

    function p(t, e, r) { return 3 * h(e, r) * t * t + 2 * c(e, r) * t + u(e) }
    t.exports = function(t, e, h, c) { if (!(0 <= t && t <= 1 && 0 <= h && h <= 1)) throw new Error("bezier x values must be in [0, 1] range"); var u = l ? new Float32Array(o) : new Array(o); if (t !== e || h !== c)
            for (var d = 0; d < o; ++d) u[d] = f(d * s, t, h);

        function m(e) { for (var l = 0, c = 1, d = o - 1; c !== d && u[c] <= e; ++c) l += s; var m = l + (e - u[--c]) / (u[c + 1] - u[c]) * s,
                v = p(m, t, h); return v >= n ? function(t, e, n, i) { for (var a = 0; a < r; ++a) { var o = p(e, n, i); if (0 === o) return e;
                    e -= (f(e, n, i) - t) / o } return e }(e, m, t, h) : 0 === v ? m : function(t, e, r, n, o) { var s, l, h = 0;
                do {
                    (s = f(l = e + (r - e) / 2, n, o) - t) > 0 ? r = l : e = l } while (Math.abs(s) > i && ++h < a); return l }(e, l, l + s, t, h) } return function(r) { return t === e && h === c ? r : 0 === r ? 0 : 1 === r ? 1 : f(m(r), e, c) } } }, function(t, e, r) { "use strict"; var n = r(3)(r(181)),
        i = r(3),
        a = r(56);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.optimizeFloat = l, e.createBezierEasing = function(t) { return s.default.apply(void 0, (0, n.default)(t)) }, e.applyEasing = function(t, e, r) { if (0 === e) return 0; if (1 === e) return 1; if (r) return l(e > 0 ? r(e) : e); return l(e > 0 && t && o[t] ? o[t](e) : e) }; var o = a(r(178)),
        s = i(r(179));

    function l(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            n = Math.pow(r, e),
            i = Number(Math.round(t * n) / n); return Math.abs(i) > 1e-4 ? i : 0 } }, function(t, e, r) { var n = r(393),
        i = r(394),
        a = r(395);
    t.exports = function(t) { return n(t) || i(t) || a() } }, function(t, e, r) { "use strict"; var n = r(3)(r(37));
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isPluginType = function(t) { return t === a.ActionTypeConsts.PLUGIN_LOTTIE }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0; var i = r(397),
        a = r(14),
        o = r(120),
        s = (0, n.default)({}, a.ActionTypeConsts.PLUGIN_LOTTIE, { getConfig: i.getPluginConfig, getOrigin: i.getPluginOrigin, getDuration: i.getPluginDuration, getDestination: i.getPluginDestination, createInstance: i.createPluginInstance, render: i.renderPlugin, clear: i.clearPlugin }); var l = function(t) { return function(e) { if (!o.IS_BROWSER_ENV) return function() { return null }; var r = s[e]; if (!r) throw new Error("IX2 no plugin configured for: ".concat(e)); var n = r[t]; if (!n) throw new Error("IX2 invalid plugin method: ".concat(t)); return n } },
        h = l("getConfig");
    e.getPluginConfig = h; var c = l("getOrigin");
    e.getPluginOrigin = c; var u = l("getDuration");
    e.getPluginDuration = u; var f = l("getDestination");
    e.getPluginDestination = f; var p = l("createInstance");
    e.createPluginInstance = p; var d = l("render");
    e.renderPlugin = d; var m = l("clear");
    e.clearPlugin = m }, function(t, e, r) { var n = r(184),
        i = r(404)(n);
    t.exports = i }, function(t, e, r) { var n = r(402),
        i = r(63);
    t.exports = function(t, e) { return t && n(t, e, i) } }, function(t, e, r) { "use strict"; var n = r(3)(r(181)),
        i = r(56),
        a = r(3);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.observeRequests = function(t) { R({ store: t, select: function(t) { var e = t.ixRequest; return e.preview }, onChange: et }), R({ store: t, select: function(t) { var e = t.ixRequest; return e.playback }, onChange: nt }), R({ store: t, select: function(t) { var e = t.ixRequest; return e.stop }, onChange: it }), R({ store: t, select: function(t) { var e = t.ixRequest; return e.clear }, onChange: at }) }, e.startEngine = ot, e.stopEngine = st, e.stopAllActionGroups = mt, e.stopActionGroup = vt, e.startActionGroup = yt; var o = a(r(46)),
        s = a(r(411)),
        l = a(r(176)),
        h = a(r(90)),
        c = a(r(412)),
        u = a(r(418)),
        f = a(r(430)),
        p = a(r(431)),
        d = a(r(432)),
        m = a(r(435)),
        v = r(14),
        y = r(44),
        g = r(121),
        E = i(r(438)),
        b = a(r(439)),
        _ = Object.keys(v.QuickEffectIds),
        x = function(t) { return _.includes(t) },
        T = v.IX2EngineConstants,
        S = T.COLON_DELIMITER,
        I = T.BOUNDARY_SELECTOR,
        A = T.HTML_ELEMENT,
        P = T.RENDER_GENERAL,
        w = T.W_MOD_IX,
        C = y.IX2VanillaUtils,
        D = C.getAffectedElements,
        M = C.getElementId,
        O = C.getDestinationValues,
        R = C.observeStore,
        k = C.getInstanceId,
        F = C.renderHTMLElement,
        L = C.clearAllStyles,
        N = C.getMaxDurationItemIndex,
        V = C.getComputedStyle,
        B = C.getInstanceOrigin,
        G = C.reduceListToGroup,
        j = C.shouldNamespaceEventParameter,
        z = C.getNamespacedParameterId,
        H = C.shouldAllowMediaQuery,
        X = C.cleanupHTMLElement,
        W = C.stringifyTarget,
        U = C.mediaQueriesEqual,
        q = C.shallowEqual,
        Y = y.IX2VanillaPlugins,
        K = Y.isPluginType,
        Q = Y.createPluginInstance,
        $ = Y.getPluginDuration,
        Z = navigator.userAgent,
        J = Z.match(/iPad/i) || Z.match(/iPhone/),
        tt = 12;

    function et(t, e) { var r = t.rawData,
            n = function() { ot({ store: e, rawData: r, allowEvents: !0 }), rt() };
        t.defer ? setTimeout(n, 0) : n() }

    function rt() { document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE")) }

    function nt(t, e) { var r = t.actionTypeId,
            n = t.actionListId,
            i = t.actionItemId,
            a = t.eventId,
            o = t.allowEvents,
            s = t.immediate,
            l = t.testManual,
            h = t.verbose,
            c = void 0 === h || h,
            u = t.rawData; if (n && i && u && s) { var f = u.actionLists[n];
            f && (u = G({ actionList: f, actionItemId: i, rawData: u })) } if (ot({ store: e, rawData: u, allowEvents: o, testManual: l }), n && r === v.ActionTypeConsts.GENERAL_START_ACTION || x(r)) { vt({ store: e, actionListId: n }), dt({ store: e, actionListId: n, eventId: a }); var p = yt({ store: e, eventId: a, actionListId: n, immediate: s, verbose: c });
            c && p && e.dispatch((0, g.actionListPlaybackChanged)({ actionListId: n, isPlaying: !s })) } }

    function it(t, e) { var r = t.actionListId;
        r ? vt({ store: e, actionListId: r }) : mt({ store: e }), st(e) }

    function at(t, e) { st(e), L({ store: e, elementApi: E }) }

    function ot(t) { var e, r = t.store,
            i = t.rawData,
            a = t.allowEvents,
            o = t.testManual,
            s = r.getState().ixSession;
        i && r.dispatch((0, g.rawDataImported)(i)), s.active || (r.dispatch((0, g.sessionInitialized)({ hasBoundaryNodes: Boolean(document.querySelector(I)), reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches })), a && (function(t) { var e = t.getState().ixData.eventTypeMap;
            ct(t), (0, d.default)(e, function(e, r) { var i = b.default[r];
                i ? function(t) { var e = t.logic,
                        r = t.store,
                        i = t.events;! function(t) { if (J) { var e = {},
                                r = ""; for (var n in t) { var i = t[n],
                                    a = i.eventTypeId,
                                    o = i.target,
                                    s = E.getQuerySelector(o);
                                e[s] || a !== v.EventTypeConsts.MOUSE_CLICK && a !== v.EventTypeConsts.MOUSE_SECOND_CLICK || (e[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}") } if (r) { var l = document.createElement("style");
                                l.textContent = r, document.body.appendChild(l) } } }(i); var a = e.types,
                        o = e.handler,
                        s = r.getState().ixData,
                        u = s.actionLists,
                        f = ut(i, pt); if ((0, c.default)(f)) {
                        (0, d.default)(f, function(t, e) { var a = i[e],
                                o = a.action,
                                c = a.id,
                                f = a.mediaQueries,
                                p = void 0 === f ? s.mediaQueryKeys : f,
                                d = o.config.actionListId; if (U(p, s.mediaQueryKeys) || r.dispatch((0, g.mediaQueriesDefined)()), o.actionTypeId === v.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) { var m = Array.isArray(a.config) ? a.config : [a.config];
                                m.forEach(function(e) { var i = e.continuousParameterGroupId,
                                        a = (0, h.default)(u, "".concat(d, ".continuousParameterGroups"), []),
                                        o = (0, l.default)(a, function(t) { var e = t.id; return e === i }),
                                        s = (e.smoothing || 0) / 100,
                                        f = (e.restingState || 0) / 100;
                                    o && t.forEach(function(t, i) { var a = c + S + i;! function(t) { var e = t.store,
                                                r = t.eventStateKey,
                                                i = t.eventTarget,
                                                a = t.eventId,
                                                o = t.eventConfig,
                                                s = t.actionListId,
                                                l = t.parameterGroup,
                                                c = t.smoothing,
                                                u = t.restingValue,
                                                f = e.getState(),
                                                p = f.ixData,
                                                d = f.ixSession,
                                                m = p.events[a],
                                                v = m.eventTypeId,
                                                y = {},
                                                g = {},
                                                b = [],
                                                _ = l.continuousActionGroups,
                                                x = l.id;
                                            j(v, o) && (x = z(r, x)); var T = d.hasBoundaryNodes && i ? E.getClosestElement(i, I) : null;
                                            _.forEach(function(t) { var e = t.keyframe,
                                                    r = t.actionItems;
                                                r.forEach(function(t) { var r = t.actionTypeId,
                                                        a = t.config.target; if (a) { var o = a.boundaryMode ? T : null,
                                                            s = W(a) + S + r; if (g[s] = function() { var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                    r = arguments.length > 1 ? arguments[1] : void 0,
                                                                    i = arguments.length > 2 ? arguments[2] : void 0,
                                                                    a = (0, n.default)(e); return a.some(function(e, n) { return e.keyframe === r && (t = n, !0) }), null == t && (t = a.length, a.push({ keyframe: r, actionItems: [] })), a[t].actionItems.push(i), a }(g[s], e, t), !y[s]) { y[s] = !0; var l = t.config;
                                                            D({ config: l, event: m, eventTarget: i, elementRoot: o, elementApi: E }).forEach(function(t) { b.push({ element: t, key: s }) }) } } }) }), b.forEach(function(t) { var r = t.element,
                                                    n = t.key,
                                                    i = g[n],
                                                    o = (0, h.default)(i, "[0].actionItems[0]", {}),
                                                    l = o.actionTypeId,
                                                    f = K(l) ? Q(l)(r, o) : null,
                                                    p = O({ element: r, actionItem: o, elementApi: E }, f);
                                                gt({ store: e, element: r, eventId: a, actionListId: s, actionItem: o, destination: p, continuous: !0, parameterId: x, actionGroups: i, smoothing: c, restingValue: u, pluginInstance: f }) }) }({ store: r, eventStateKey: a, eventTarget: t, eventId: c, eventConfig: e, actionListId: d, parameterGroup: o, smoothing: s, restingValue: f }) }) }) }(o.actionTypeId === v.ActionTypeConsts.GENERAL_START_ACTION || x(o.actionTypeId)) && dt({ store: r, actionListId: d, eventId: c }) }); var p = function(t) { var e = r.getState(),
                                    n = e.ixSession;
                                ft(f, function(e, a, l) { var h = i[a],
                                        c = n.eventState[l],
                                        u = h.action,
                                        f = h.mediaQueries,
                                        p = void 0 === f ? s.mediaQueryKeys : f; if (H(p, n.mediaQueryKey)) { var d = function() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = o({ store: r, element: e, event: h, eventConfig: n, nativeEvent: t, eventStateKey: l }, c);
                                            q(i, c) || r.dispatch((0, g.eventStateChanged)(l, i)) }; if (u.actionTypeId === v.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) { var m = Array.isArray(h.config) ? h.config : [h.config];
                                            m.forEach(d) } else d() } }) },
                            y = (0, m.default)(p, tt),
                            b = function(t) { var e = t.target,
                                    n = void 0 === e ? document : e,
                                    i = t.types,
                                    a = t.throttle;
                                i.split(" ").filter(Boolean).forEach(function(t) { var e = a ? y : p;
                                    n.addEventListener(t, e), r.dispatch((0, g.eventListenerAdded)(n, [t, e])) }) };
                        Array.isArray(a) ? a.forEach(b) : "string" == typeof a && b(e) } }({ logic: i, store: t, events: e }) : console.warn("IX2 event type not configured: ".concat(r)) }), t.getState().ixSession.eventListeners.length && function(t) { var e = function() { ct(t) };
                ht.forEach(function(r) { window.addEventListener(r, e), t.dispatch((0, g.eventListenerAdded)(window, [r, e])) }), e() }(t) }(r), -1 === (e = document.documentElement).className.indexOf(w) && (e.className += " ".concat(w)), r.getState().ixSession.hasDefinedMediaQueries && function(t) { R({ store: t, select: function(t) { return t.ixSession.mediaQueryKey }, onChange: function() { st(t), L({ store: t, elementApi: E }), ot({ store: t, allowEvents: !0 }), rt() } }) }(r)), r.dispatch((0, g.sessionStarted)()), function(t, e) {! function r(n) { var i = t.getState(),
                    a = i.ixSession,
                    o = i.ixParameters;
                a.active && (t.dispatch((0, g.animationFrameChanged)(n, o)), e ? function(t, e) { var r = R({ store: t, select: function(t) { return t.ixSession.tick }, onChange: function(t) { e(t), r() } }) }(t, r) : requestAnimationFrame(r)) }(window.performance.now()) }(r, o)) }

    function st(t) { var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(lt), t.dispatch((0, g.sessionStopped)())) }

    function lt(t) { var e = t.target,
            r = t.listenerParams;
        e.removeEventListener.apply(e, r) } var ht = ["resize", "orientationchange"];

    function ct(t) { var e = t.getState(),
            r = e.ixSession,
            n = e.ixData,
            i = window.innerWidth; if (i !== r.viewportWidth) { var a = n.mediaQueries;
            t.dispatch((0, g.viewportWidthChanged)({ width: i, mediaQueries: a })) } } var ut = function(t, e) { return (0, u.default)((0, p.default)(t, e), f.default) },
        ft = function(t, e) {
            (0, d.default)(t, function(t, r) { t.forEach(function(t, n) { e(t, r, r + S + n) }) }) },
        pt = function(t) { var e = { target: t.target, targets: t.targets }; return D({ config: e, elementApi: E }) };

    function dt(t) { var e = t.store,
            r = t.actionListId,
            n = t.eventId,
            i = e.getState(),
            a = i.ixData,
            o = i.ixSession,
            s = a.actionLists,
            l = a.events[n],
            c = s[r]; if (c && c.useFirstGroupAsInitialState) { var u = (0, h.default)(c, "actionItemGroups[0].actionItems", []),
                f = (0, h.default)(l, "mediaQueries", a.mediaQueryKeys); if (!H(f, o.mediaQueryKey)) return;
            u.forEach(function(t) { var i, a = t.config,
                    o = t.actionTypeId,
                    s = !0 === (null == a ? void 0 : null === (i = a.target) || void 0 === i ? void 0 : i.useEventTarget) ? { target: l.target, targets: l.targets } : a,
                    h = D({ config: s, event: l, elementApi: E }),
                    c = K(o);
                h.forEach(function(i) { var a = c ? Q(o)(i, t) : null;
                    gt({ destination: O({ element: i, actionItem: t, elementApi: E }, a), immediate: !0, store: e, element: i, eventId: n, actionItem: t, actionListId: r, pluginInstance: a }) }) }) } }

    function mt(t) { var e = t.store,
            r = e.getState().ixInstances;
        (0, d.default)(r, function(t) { if (!t.continuous) { var r = t.actionListId,
                    n = t.verbose;
                Et(t, e), n && e.dispatch((0, g.actionListPlaybackChanged)({ actionListId: r, isPlaying: !1 })) } }) }

    function vt(t) { var e = t.store,
            r = t.eventId,
            n = t.eventTarget,
            i = t.eventStateKey,
            a = t.actionListId,
            o = e.getState(),
            s = o.ixInstances,
            l = o.ixSession.hasBoundaryNodes && n ? E.getClosestElement(n, I) : null;
        (0, d.default)(s, function(t) { var n = (0, h.default)(t, "actionItem.config.target.boundaryMode"),
                o = !i || t.eventStateKey === i; if (t.actionListId === a && t.eventId === r && o) { if (l && n && !E.elementContains(l, t.element)) return;
                Et(t, e), t.verbose && e.dispatch((0, g.actionListPlaybackChanged)({ actionListId: a, isPlaying: !1 })) } }) }

    function yt(t) { var e, r = t.store,
            n = t.eventId,
            i = t.eventTarget,
            a = t.eventStateKey,
            o = t.actionListId,
            s = t.groupIndex,
            l = void 0 === s ? 0 : s,
            c = t.immediate,
            u = t.verbose,
            f = r.getState(),
            p = f.ixData,
            d = f.ixSession,
            m = p.events[n] || {},
            v = m.mediaQueries,
            y = void 0 === v ? p.mediaQueryKeys : v,
            g = (0, h.default)(p, "actionLists.".concat(o), {}),
            b = g.actionItemGroups,
            _ = g.useFirstGroupAsInitialState; if (!b || !b.length) return !1;
        l >= b.length && (0, h.default)(m, "config.loop") && (l = 0), 0 === l && _ && l++; var T = (0 === l || 1 === l && _) && x(null === (e = m.action) || void 0 === e ? void 0 : e.actionTypeId) ? m.config.delay : void 0,
            S = (0, h.default)(b, [l, "actionItems"], []); if (!S.length) return !1; if (!H(y, d.mediaQueryKey)) return !1; var A = d.hasBoundaryNodes && i ? E.getClosestElement(i, I) : null,
            P = N(S),
            w = !1; return S.forEach(function(t, e) { var s = t.config,
                h = t.actionTypeId,
                f = K(h),
                p = s.target; if (p) { var d = p.boundaryMode ? A : null;
                D({ config: s, event: m, eventTarget: i, elementRoot: d, elementApi: E }).forEach(function(s, p) { var d = f ? Q(h)(s, t) : null,
                        m = f ? $(h)(s, t) : null;
                    w = !0; var v = P === e && 0 === p,
                        y = V({ element: s, actionItem: t }),
                        g = O({ element: s, actionItem: t, elementApi: E }, d);
                    gt({ store: r, element: s, actionItem: t, eventId: n, eventTarget: i, eventStateKey: a, actionListId: o, groupIndex: l, isCarrier: v, computedStyle: y, destination: g, immediate: c, verbose: u, pluginInstance: d, pluginDuration: m, instanceDelay: T }) }) } }), w }

    function gt(t) { var e, r, n = t.store,
            i = t.computedStyle,
            a = (0, s.default)(t, ["store", "computedStyle"]),
            l = a.element,
            h = a.actionItem,
            c = a.immediate,
            u = a.pluginInstance,
            f = a.continuous,
            p = a.restingValue,
            d = a.eventId,
            m = !f,
            y = k(),
            b = n.getState(),
            _ = b.ixElements,
            x = b.ixSession,
            T = b.ixData,
            S = M(_, l),
            I = (_[S] || {}).refState,
            A = E.getRefType(l),
            P = x.reducedMotion && v.ReducedMotionTypes[h.actionTypeId]; if (P && f) switch (null === (e = T.events[d]) || void 0 === e ? void 0 : e.eventTypeId) {
            case v.EventTypeConsts.MOUSE_MOVE:
            case v.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                r = p; break;
            default:
                r = .5 }
        var w = B(l, I, i, h, E, u);
        n.dispatch((0, g.instanceAdded)((0, o.default)({ instanceId: y, elementId: S, origin: w, refType: A, skipMotion: P, skipToValue: r }, a))), bt(document.body, "ix2-animation-started", y), c ? function(t, e) { var r = t.getState().ixParameters;
            t.dispatch((0, g.instanceStarted)(e, 0)), t.dispatch((0, g.animationFrameChanged)(performance.now(), r)), _t(t.getState().ixInstances[e], t) }(n, y) : (R({ store: n, select: function(t) { return t.ixInstances[y] }, onChange: _t }), m && n.dispatch((0, g.instanceStarted)(y, x.tick))) }

    function Et(t, e) { bt(document.body, "ix2-animation-stopping", { instanceId: t.id, state: e.getState() }); var r = t.elementId,
            n = t.actionItem,
            i = e.getState().ixElements[r] || {},
            a = i.ref;
        i.refType === A && X(a, n, E), e.dispatch((0, g.instanceRemoved)(t.id)) }

    function bt(t, e, r) { var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, r), t.dispatchEvent(n) }

    function _t(t, e) { var r = t.active,
            n = t.continuous,
            i = t.complete,
            a = t.elementId,
            o = t.actionItem,
            s = t.actionTypeId,
            l = t.renderType,
            h = t.current,
            c = t.groupIndex,
            u = t.eventId,
            f = t.eventTarget,
            p = t.eventStateKey,
            d = t.actionListId,
            m = t.isCarrier,
            v = t.styleProp,
            y = t.verbose,
            b = t.pluginInstance,
            _ = e.getState(),
            x = _.ixData,
            T = _.ixSession,
            S = (x.events[u] || {}).mediaQueries,
            I = void 0 === S ? x.mediaQueryKeys : S; if (H(I, T.mediaQueryKey) && (n || r || i)) { if (h || l === P && i) { e.dispatch((0, g.elementStateChanged)(a, s, h, o)); var w = e.getState().ixElements[a] || {},
                    C = w.ref,
                    D = w.refType,
                    M = w.refState,
                    O = M && M[s]; switch (D) {
                    case A:
                        F(C, M, O, u, o, v, E, l, b) } } if (i) { if (m) { var R = yt({ store: e, eventId: u, eventTarget: f, eventStateKey: p, actionListId: d, groupIndex: c + 1, verbose: y });
                    y && !R && e.dispatch((0, g.actionListPlaybackChanged)({ actionListId: d, isPlaying: !1 })) }
                Et(t, e) } } } }, function(t, e, r) { var n = r(187);
    t.exports = function(t, e, r) { "__proto__" == e && n ? n(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : t[e] = r } }, function(t, e, r) { var n = r(29),
        i = function() { try { var t = n(Object, "defineProperty"); return t({}, "", {}), t } catch (t) {} }();
    t.exports = i }, function(t, e, r) { var n = r(23),
        i = Object.create,
        a = function() {
            function t() {} return function(e) { if (!n(e)) return {}; if (i) return i(e);
                t.prototype = e; var r = new t; return t.prototype = void 0, r } }();
    t.exports = a }, function(t, e, r) { var n = r(452),
        i = r(453),
        a = n ? function(t) { return n.get(t) } : i;
    t.exports = a }, function(t, e, r) { var n = r(454),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) { for (var e = t.name + "", r = n[e], a = i.call(n, e) ? r.length : 0; a--;) { var o = r[a],
                s = o.func; if (null == s || s == t) return o.name } return e } }, function(t, e, r) { r(192), r(361), r(362), r(363), r(364), r(365), r(117), r(367), r(461), r(462), r(463), r(464), t.exports = r(465) }, function(t, e, r) { "use strict"; var n = r(13),
        i = r(194),
        a = r(360);
    n.define("lottie", t.exports = function() { return { lottie: a, createInstance: i.createInstance, cleanupElement: i.cleanupElement, init: i.init, destroy: i.destroy, ready: i.ready } }) }, function(t, e, r) {
    "use strict";
    var n = window.$,
        i = r(125) && n.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function() { var t = { VERSION: "1.6.0-Webflow" },
            e = {},
            r = Array.prototype,
            n = Object.prototype,
            a = Function.prototype,
            o = (r.push, r.slice),
            s = (r.concat, n.toString, n.hasOwnProperty),
            l = r.forEach,
            h = r.map,
            c = (r.reduce, r.reduceRight, r.filter),
            u = (r.every, r.some),
            f = r.indexOf,
            p = (r.lastIndexOf, Array.isArray, Object.keys),
            d = (a.bind, t.each = t.forEach = function(r, n, i) { if (null == r) return r; if (l && r.forEach === l) r.forEach(n, i);
                else if (r.length === +r.length) { for (var a = 0, o = r.length; a < o; a++)
                        if (n.call(i, r[a], a, r) === e) return } else { var s = t.keys(r); for (a = 0, o = s.length; a < o; a++)
                        if (n.call(i, r[s[a]], s[a], r) === e) return } return r });
        t.map = t.collect = function(t, e, r) { var n = []; return null == t ? n : h && t.map === h ? t.map(e, r) : (d(t, function(t, i, a) { n.push(e.call(r, t, i, a)) }), n) }, t.find = t.detect = function(t, e, r) { var n; return m(t, function(t, i, a) { if (e.call(r, t, i, a)) return n = t, !0 }), n }, t.filter = t.select = function(t, e, r) { var n = []; return null == t ? n : c && t.filter === c ? t.filter(e, r) : (d(t, function(t, i, a) { e.call(r, t, i, a) && n.push(t) }), n) }; var m = t.some = t.any = function(r, n, i) { n || (n = t.identity); var a = !1; return null == r ? a : u && r.some === u ? r.some(n, i) : (d(r, function(t, r, o) { if (a || (a = n.call(i, t, r, o))) return e }), !!a) };
        t.contains = t.include = function(t, e) { return null != t && (f && t.indexOf === f ? -1 != t.indexOf(e) : m(t, function(t) { return t === e })) }, t.delay = function(t, e) { var r = o.call(arguments, 2); return setTimeout(function() { return t.apply(null, r) }, e) }, t.defer = function(e) { return t.delay.apply(t, [e, 1].concat(o.call(arguments, 1))) }, t.throttle = function(t) { var e, r, n; return function() { e || (e = !0, r = arguments, n = this, i.frame(function() { e = !1, t.apply(n, r) })) } }, t.debounce = function(e, r, n) { var i, a, o, s, l, h = function h() { var c = t.now() - s;
                c < r ? i = setTimeout(h, r - c) : (i = null, n || (l = e.apply(o, a), o = a = null)) }; return function() { o = this, a = arguments, s = t.now(); var c = n && !i; return i || (i = setTimeout(h, r)), c && (l = e.apply(o, a), o = a = null), l } }, t.defaults = function(e) { if (!t.isObject(e)) return e; for (var r = 1, n = arguments.length; r < n; r++) { var i = arguments[r]; for (var a in i) void 0 === e[a] && (e[a] = i[a]) } return e }, t.keys = function(e) { if (!t.isObject(e)) return []; if (p) return p(e); var r = []; for (var n in e) t.has(e, n) && r.push(n); return r }, t.has = function(t, e) { return s.call(t, e) }, t.isObject = function(t) { return t === Object(t) }, t.now = Date.now || function() { return (new Date).getTime() }, t.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var v = /(.)^/,
            y = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
            g = /\\|'|\r|\n|\u2028|\u2029/g,
            E = function(t) { return "\\" + y[t] }; return t.template = function(e, r, n) {!r && n && (r = n), r = t.defaults({}, r, t.templateSettings); var i = RegExp([(r.escape || v).source, (r.interpolate || v).source, (r.evaluate || v).source].join("|") + "|$", "g"),
                a = 0,
                o = "__p+='";
            e.replace(i, function(t, r, n, i, s) { return o += e.slice(a, s).replace(g, E), a = s + t.length, r ? o += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : n ? o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (o += "';\n" + i + "\n__p+='"), t }), o += "';\n", r.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n"; try { var s = new Function(r.variable || "obj", "_", o) } catch (t) { throw t.source = o, t } var l = function(e) { return s.call(this, e, t) },
                h = r.variable || "obj"; return l.source = "function(" + h + "){\n" + o + "}", l }, t }()
}, function(t, e, r) { "use strict"; var n = r(3),
        i = n(r(195)),
        a = n(r(196)),
        o = r(3);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ready = e.destroy = e.init = e.cleanupElement = e.createInstance = void 0; var s = o(r(46)),
        l = o(r(37)),
        h = o(r(126));
    r(265); var c = { Playing: "playing", Stopped: "stopped" },
        u = new(function() {
            function t() {
                (0, i.default)(this, t), (0, l.default)(this, "_cache", []) } return (0, a.default)(t, [{ key: "set", value: function(t, e) { var r = (0, h.default)(this._cache, function(e) { return e.wrapper === t }); - 1 !== r && this._cache.splice(r, 1), this._cache.push({ wrapper: t, instance: e }) } }, { key: "delete", value: function(t) { var e = (0, h.default)(this._cache, function(e) { return e.wrapper === t }); - 1 !== e && this._cache.splice(e, 1) } }, { key: "get", value: function(t) { var e = (0, h.default)(this._cache, function(e) { return e.wrapper === t }); return -1 !== e ? this._cache[e].instance : null } }]), t }()),
        f = {},
        p = function() {
            function t() {
                (0, i.default)(this, t), (0, l.default)(this, "config", null), (0, l.default)(this, "currentState", c.Stopped), (0, l.default)(this, "handlers", { enterFrame: [], complete: [], loop: [], dataReady: [], destroy: [], error: [] }) } return (0, a.default)(t, [{ key: "load", value: function(t) { var e = this,
                        r = t.dataset || f,
                        n = r.src || "",
                        i = r.preserveAspectRatio || "xMidYMid meet",
                        a = r.renderer || "svg",
                        o = 1 === parseFloat(r.loop),
                        l = parseFloat(r.direction) || 1,
                        h = 1 === parseFloat(r.autoplay),
                        p = parseFloat(r.duration) || 0,
                        d = 1 === parseFloat(r.isIx2Target),
                        m = parseFloat(r.ix2InitialState);
                    isNaN(m) && (m = null); var v = { src: n, loop: o, autoplay: h, renderer: a, direction: l, duration: p, hasIx2: d, ix2InitialValue: m, preserveAspectRatio: i }; if (this.animationItem && this.config && this.config.src === n && a === this.config.renderer && i === this.config.preserveAspectRatio) { if (o !== this.config.loop && this.setLooping(o), d || (l !== this.config.direction && this.setDirection(l), p !== this.config.duration && (p > 0 && p !== this.duration ? this.setSpeed(this.duration / p) : this.setSpeed(1))), h && this.play(), m && m !== this.config.ix2InitialValue) { var y = m / 100;
                            this.goToFrame(this.frames * y) }
                        this.config = v } else { var g = { container: t, loop: o, autoplay: h, renderer: a, rendererSettings: { preserveAspectRatio: i, progressiveLoad: !0, hideOnTransparent: !0 } }; try { this.animationItem && this.destroy(), this.animationItem = window.Webflow.require("lottie").lottie.loadAnimation((0, s.default)({}, g, { path: n })) } catch (t) { return void this.handlers.error.forEach(function(e) { return e(t) }) }
                        this.animationItem && (Boolean(window.Webflow.env("design") || window.Webflow.env("preview")) && (this.animationItem.addEventListener("enterFrame", function() { if (e.isPlaying) { var t = e.animationItem,
                                    r = t.currentFrame,
                                    n = t.totalFrames,
                                    i = t.playDirection,
                                    a = r / n * 100,
                                    o = Math.round(1 === i ? a : 100 - a);
                                e.handlers.enterFrame.forEach(function(t) { return t(o, r) }) } }), this.animationItem.addEventListener("complete", function() { e.currentState === c.Playing && e.animationItem.loop ? e.currentState = c.Stopped : e.handlers.complete.forEach(function(t) { return t() }) }), this.animationItem.addEventListener("loopComplete", function(t) { e.handlers.loop.forEach(function(e) { return e(t) }) }), this.animationItem.addEventListener("data_failed", function(t) { e.handlers.error.forEach(function(e) { return e(t) }) }), this.animationItem.addEventListener("error", function(t) { e.handlers.error.forEach(function(e) { return e(t) }) })), this.isLoaded ? (this.handlers.dataReady.forEach(function(t) { return t() }), h && this.play()) : this.animationItem.addEventListener("data_ready", function() { if (e.handlers.dataReady.forEach(function(t) { return t() }), d || (e.setDirection(l), p > 0 && p !== e.duration && e.setSpeed(e.duration / p), h && e.play()), m) { var t = m / 100;
                                e.goToFrame(e.frames * t) } }), u.set(t, this), this.container = t, this.config = v) } } }, { key: "onFrameChange", value: function(t) {-1 === this.handlers.enterFrame.indexOf(t) && this.handlers.enterFrame.push(t) } }, { key: "onPlaybackComplete", value: function(t) {-1 === this.handlers.complete.indexOf(t) && this.handlers.complete.push(t) } }, { key: "onLoopComplete", value: function(t) {-1 === this.handlers.loop.indexOf(t) && this.handlers.loop.push(t) } }, { key: "onDestroy", value: function(t) {-1 === this.handlers.destroy.indexOf(t) && this.handlers.destroy.push(t) } }, { key: "onDataReady", value: function(t) {-1 === this.handlers.dataReady.indexOf(t) && this.handlers.dataReady.push(t) } }, { key: "onError", value: function(t) {-1 === this.handlers.error.indexOf(t) && this.handlers.error.push(t) } }, { key: "play", value: function() { if (this.animationItem) { var t = 1 === this.animationItem.playDirection ? 0 : this.frames;
                        this.animationItem.goToAndPlay(t, !0), this.currentState = c.Playing } } }, { key: "stop", value: function() { if (this.animationItem) { if (this.isPlaying) { var t = 1 === this.animationItem.playDirection ? 0 : this.frames;
                            this.animationItem.goToAndStop(t, !0) }
                        this.currentState = c.Stopped } } }, { key: "destroy", value: function() { var t = this;
                    this.animationItem && (this.isPlaying && this.stop(), this.handlers.destroy.forEach(function(t) { return t() }), this.container && u.delete(this.container), this.animationItem.destroy(), Object.keys(this.handlers).forEach(function(e) { return t.handlers[e].length = 0 }), this.animationItem = null, this.container = null, this.config = null) } }, { key: "goToFrame", value: function(t) { this.animationItem && this.animationItem.setCurrentRawFrameValue(t) } }, { key: "setSubframe", value: function(t) { this.animationItem && this.animationItem.setSubframe(t) } }, { key: "setSpeed", value: function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setSpeed(t)) } }, { key: "setLooping", value: function(t) { this.animationItem && (this.isPlaying && this.stop(), this.animationItem.loop = t) } }, { key: "setDirection", value: function(t) { this.animationItem && (this.isPlaying && this.stop(), this.animationItem.setDirection(t), this.goToFrame(1 === t ? 0 : this.frames)) } }, { key: "isPlaying", get: function() { return !!this.animationItem && !this.animationItem.isPaused } }, { key: "isPaused", get: function() { return !!this.animationItem && this.animationItem.isPaused } }, { key: "duration", get: function() { return this.animationItem ? this.animationItem.getDuration() : 0 } }, { key: "frames", get: function() { return this.animationItem ? this.animationItem.totalFrames : 0 } }, { key: "direction", get: function() { return this.animationItem ? this.animationItem.playDirection : 1 } }, { key: "isLoaded", get: function() { return this.animationItem, this.animationItem.isLoaded } }, { key: "ix2InitialValue", get: function() { return this.config ? this.config.ix2InitialValue : null } }]), t }(),
        d = function() { return Array.from(document.querySelectorAll('[data-animation-type="lottie"]')) },
        m = function(t) { var e = u.get(t); return null == e && (e = new p), e.load(t), e };
    e.createInstance = m; var v = function(t) { var e = u.get(t);
        e && e.destroy() };
    e.cleanupElement = v; var y = function() { d().forEach(function(t) { 1 === parseFloat(t.getAttribute("data-is-ix2-target")) || v(t), m(t) }) };
    e.init = y;
    e.destroy = function() { d().forEach(v) }; var g = y;
    e.ready = g }, function(t, e) { t.exports = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } }, function(t, e) {
    function r(t, e) { for (var r = 0; r < e.length; r++) { var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } }
    t.exports = function(t, e, n) { return e && r(t.prototype, e), n && r(t, n), t } }, function(t, e, r) { var n = r(198),
        i = r(250),
        a = r(142);
    t.exports = function(t) { var e = i(t); return 1 == e.length && e[0][2] ? a(e[0][0], e[0][1]) : function(r) { return r === t || n(r, t, e) } } }, function(t, e, r) { var n = r(128),
        i = r(132),
        a = 1,
        o = 2;
    t.exports = function(t, e, r, s) { var l = r.length,
            h = l,
            c = !s; if (null == t) return !h; for (t = Object(t); l--;) { var u = r[l]; if (c && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1 } for (; ++l < h;) { var f = (u = r[l])[0],
                p = t[f],
                d = u[1]; if (c && u[2]) { if (void 0 === p && !(f in t)) return !1 } else { var m = new n; if (s) var v = s(p, d, f, t, e, m); if (!(void 0 === v ? i(d, p, a | o, s, m) : v)) return !1 } } return !0 } }, function(t, e) { t.exports = function() { this.__data__ = [], this.size = 0 } }, function(t, e, r) { var n = r(59),
        i = Array.prototype.splice;
    t.exports = function(t) { var e = this.__data__,
            r = n(e, t); return !(r < 0 || (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, 0)) } }, function(t, e, r) { var n = r(59);
    t.exports = function(t) { var e = this.__data__,
            r = n(e, t); return r < 0 ? void 0 : e[r][1] } }, function(t, e, r) { var n = r(59);
    t.exports = function(t) { return n(this.__data__, t) > -1 } }, function(t, e, r) { var n = r(59);
    t.exports = function(t, e) { var r = this.__data__,
            i = n(r, t); return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this } }, function(t, e, r) { var n = r(58);
    t.exports = function() { this.__data__ = new n, this.size = 0 } }, function(t, e) { t.exports = function(t) { var e = this.__data__,
            r = e.delete(t); return this.size = e.size, r } }, function(t, e) { t.exports = function(t) { return this.__data__.get(t) } }, function(t, e) { t.exports = function(t) { return this.__data__.has(t) } }, function(t, e, r) { var n = r(58),
        i = r(80),
        a = r(81),
        o = 200;
    t.exports = function(t, e) { var r = this.__data__; if (r instanceof n) { var s = r.__data__; if (!i || s.length < o - 1) return s.push([t, e]), this.size = ++r.size, this;
            r = this.__data__ = new a(s) } return r.set(t, e), this.size = r.size, this } }, function(t, e, r) { var n = r(129),
        i = r(212),
        a = r(23),
        o = r(131),
        s = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        h = Object.prototype,
        c = l.toString,
        u = h.hasOwnProperty,
        f = RegExp("^" + c.call(u).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) { return !(!a(t) || i(t)) && (n(t) ? f : s).test(o(t)) } }, function(t, e, r) { var n = r(47),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = n ? n.toStringTag : void 0;
    t.exports = function(t) { var e = a.call(t, s),
            r = t[s]; try { t[s] = void 0; var n = !0 } catch (t) {} var i = o.call(t); return n && (e ? t[s] = r : delete t[s]), i } }, function(t, e) { var r = Object.prototype.toString;
    t.exports = function(t) { return r.call(t) } }, function(t, e, r) { var n, i = r(213),
        a = (n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    t.exports = function(t) { return !!a && a in t } }, function(t, e, r) { var n = r(19)["__core-js_shared__"];
    t.exports = n }, function(t, e) { t.exports = function(t, e) { return null == t ? void 0 : t[e] } }, function(t, e, r) { var n = r(216),
        i = r(58),
        a = r(80);
    t.exports = function() { this.size = 0, this.__data__ = { hash: new n, map: new(a || i), string: new n } } }, function(t, e, r) { var n = r(217),
        i = r(218),
        a = r(219),
        o = r(220),
        s = r(221);

    function l(t) { var e = -1,
            r = null == t ? 0 : t.length; for (this.clear(); ++e < r;) { var n = t[e];
            this.set(n[0], n[1]) } }
    l.prototype.clear = n, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t.exports = l }, function(t, e, r) { var n = r(61);
    t.exports = function() { this.__data__ = n ? n(null) : {}, this.size = 0 } }, function(t, e) { t.exports = function(t) { var e = this.has(t) && delete this.__data__[t]; return this.size -= e ? 1 : 0, e } }, function(t, e, r) { var n = r(61),
        i = "__lodash_hash_undefined__",
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) { var e = this.__data__; if (n) { var r = e[t]; return r === i ? void 0 : r } return a.call(e, t) ? e[t] : void 0 } }, function(t, e, r) { var n = r(61),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) { var e = this.__data__; return n ? void 0 !== e[t] : i.call(e, t) } }, function(t, e, r) { var n = r(61),
        i = "__lodash_hash_undefined__";
    t.exports = function(t, e) { var r = this.__data__; return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? i : e, this } }, function(t, e, r) { var n = r(62);
    t.exports = function(t) { var e = n(this, t).delete(t); return this.size -= e ? 1 : 0, e } }, function(t, e) { t.exports = function(t) { var e = typeof t; return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t } }, function(t, e, r) { var n = r(62);
    t.exports = function(t) { return n(this, t).get(t) } }, function(t, e, r) { var n = r(62);
    t.exports = function(t) { return n(this, t).has(t) } }, function(t, e, r) { var n = r(62);
    t.exports = function(t, e) { var r = n(this, t),
            i = r.size; return r.set(t, e), this.size += r.size == i ? 0 : 1, this } }, function(t, e, r) { var n = r(128),
        i = r(133),
        a = r(233),
        o = r(237),
        s = r(89),
        l = r(10),
        h = r(83),
        c = r(85),
        u = 1,
        f = "[object Arguments]",
        p = "[object Array]",
        d = "[object Object]",
        m = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, r, v, y, g) { var E = l(t),
            b = l(e),
            _ = E ? p : s(t),
            x = b ? p : s(e),
            T = (_ = _ == f ? d : _) == d,
            S = (x = x == f ? d : x) == d,
            I = _ == x; if (I && h(t)) { if (!h(e)) return !1;
            E = !0, T = !1 } if (I && !T) return g || (g = new n), E || c(t) ? i(t, e, r, v, y, g) : a(t, e, _, r, v, y, g); if (!(r & u)) { var A = T && m.call(t, "__wrapped__"),
                P = S && m.call(e, "__wrapped__"); if (A || P) { var w = A ? t.value() : t,
                    C = P ? e.value() : e; return g || (g = new n), y(w, C, r, v, g) } } return !!I && (g || (g = new n), o(t, e, r, v, y, g)) } }, function(t, e, r) { var n = r(81),
        i = r(229),
        a = r(230);

    function o(t) { var e = -1,
            r = null == t ? 0 : t.length; for (this.__data__ = new n; ++e < r;) this.add(t[e]) }
    o.prototype.add = o.prototype.push = i, o.prototype.has = a, t.exports = o }, function(t, e) { var r = "__lodash_hash_undefined__";
    t.exports = function(t) { return this.__data__.set(t, r), this } }, function(t, e) { t.exports = function(t) { return this.__data__.has(t) } }, function(t, e) { t.exports = function(t, e) { for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
            if (e(t[r], r, t)) return !0;
        return !1 } }, function(t, e) { t.exports = function(t, e) { return t.has(e) } }, function(t, e, r) { var n = r(47),
        i = r(234),
        a = r(79),
        o = r(133),
        s = r(235),
        l = r(236),
        h = 1,
        c = 2,
        u = "[object Boolean]",
        f = "[object Date]",
        p = "[object Error]",
        d = "[object Map]",
        m = "[object Number]",
        v = "[object RegExp]",
        y = "[object Set]",
        g = "[object String]",
        E = "[object Symbol]",
        b = "[object ArrayBuffer]",
        _ = "[object DataView]",
        x = n ? n.prototype : void 0,
        T = x ? x.valueOf : void 0;
    t.exports = function(t, e, r, n, x, S, I) { switch (r) {
            case _:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case b:
                return !(t.byteLength != e.byteLength || !S(new i(t), new i(e)));
            case u:
            case f:
            case m:
                return a(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case v:
            case g:
                return t == e + "";
            case d:
                var A = s;
            case y:
                var P = n & h; if (A || (A = l), t.size != e.size && !P) return !1; var w = I.get(t); if (w) return w == e;
                n |= c, I.set(t, e); var C = o(A(t), A(e), n, x, S, I); return I.delete(t), C;
            case E:
                if (T) return T.call(t) == T.call(e) } return !1 } }, function(t, e, r) { var n = r(19).Uint8Array;
    t.exports = n }, function(t, e) { t.exports = function(t) { var e = -1,
            r = Array(t.size); return t.forEach(function(t, n) { r[++e] = [n, t] }), r } }, function(t, e) { t.exports = function(t) { var e = -1,
            r = Array(t.size); return t.forEach(function(t) { r[++e] = t }), r } }, function(t, e, r) { var n = r(238),
        i = 1,
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, r, o, s, l) { var h = r & i,
            c = n(t),
            u = c.length; if (u != n(e).length && !h) return !1; for (var f = u; f--;) { var p = c[f]; if (!(h ? p in e : a.call(e, p))) return !1 } var d = l.get(t),
            m = l.get(e); if (d && m) return d == e && m == t; var v = !0;
        l.set(t, e), l.set(e, t); for (var y = h; ++f < u;) { var g = t[p = c[f]],
                E = e[p]; if (o) var b = h ? o(E, g, p, e, t, l) : o(g, E, p, t, e, l); if (!(void 0 === b ? g === E || s(g, E, r, o, l) : b)) { v = !1; break }
            y || (y = "constructor" == p) } if (v && !y) { var _ = t.constructor,
                x = e.constructor;
            _ != x && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof x && x instanceof x) && (v = !1) } return l.delete(t), l.delete(e), v } }, function(t, e, r) { var n = r(134),
        i = r(135),
        a = r(63);
    t.exports = function(t) { return n(t, a, i) } }, function(t, e) { t.exports = function(t, e) { for (var r = -1, n = null == t ? 0 : t.length, i = 0, a = []; ++r < n;) { var o = t[r];
            e(o, r, t) && (a[i++] = o) } return a } }, function(t, e) { t.exports = function(t, e) { for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r); return n } }, function(t, e, r) { var n = r(38),
        i = r(30),
        a = "[object Arguments]";
    t.exports = function(t) { return i(t) && n(t) == a } }, function(t, e) { t.exports = function() { return !1 } }, function(t, e, r) { var n = r(38),
        i = r(86),
        a = r(30),
        o = {};
    o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, t.exports = function(t) { return a(t) && i(t.length) && !!o[n(t)] } }, function(t, e) { t.exports = function(t) { return function(e) { return t(e) } } }, function(t, e, r) {
    (function(t) { var n = r(130),
            i = e && !e.nodeType && e,
            a = i && "object" == typeof t && t && !t.nodeType && t,
            o = a && a.exports === i && n.process,
            s = function() { try { var t = a && a.require && a.require("util").types; return t || o && o.binding && o.binding("util") } catch (t) {} }();
        t.exports = s }).call(this, r(138)(t)) }, function(t, e, r) { var n = r(139)(Object.keys, Object);
    t.exports = n }, function(t, e, r) { var n = r(29)(r(19), "DataView");
    t.exports = n }, function(t, e, r) { var n = r(29)(r(19), "Promise");
    t.exports = n }, function(t, e, r) { var n = r(29)(r(19), "Set");
    t.exports = n }, function(t, e, r) { var n = r(141),
        i = r(63);
    t.exports = function(t) { for (var e = i(t), r = e.length; r--;) { var a = e[r],
                o = t[a];
            e[r] = [a, o, n(o)] } return e } }, function(t, e, r) { var n = r(132),
        i = r(90),
        a = r(257),
        o = r(92),
        s = r(141),
        l = r(142),
        h = r(48),
        c = 1,
        u = 2;
    t.exports = function(t, e) { return o(t) && s(e) ? l(h(t), e) : function(r) { var o = i(r, t); return void 0 === o && o === e ? a(r, t) : n(e, o, c | u) } } }, function(t, e, r) { var n = r(253),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        o = n(function(t) { var e = []; return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, r, n, i) { e.push(n ? i.replace(a, "$1") : r || t) }), e });
    t.exports = o }, function(t, e, r) { var n = r(254),
        i = 500;
    t.exports = function(t) { var e = n(t, function(t) { return r.size === i && r.clear(), t }),
            r = e.cache; return e } }, function(t, e, r) { var n = r(81),
        i = "Expected a function";

    function a(t, e) { if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i); var r = function() { var n = arguments,
                i = e ? e.apply(this, n) : n[0],
                a = r.cache; if (a.has(i)) return a.get(i); var o = t.apply(this, n); return r.cache = a.set(i, o) || a, o }; return r.cache = new(a.Cache || n), r }
    a.Cache = n, t.exports = a }, function(t, e, r) { var n = r(256);
    t.exports = function(t) { return null == t ? "" : n(t) } }, function(t, e, r) { var n = r(47),
        i = r(143),
        a = r(10),
        o = r(66),
        s = 1 / 0,
        l = n ? n.prototype : void 0,
        h = l ? l.toString : void 0;
    t.exports = function t(e) { if ("string" == typeof e) return e; if (a(e)) return i(e, t) + ""; if (o(e)) return h ? h.call(e) : ""; var r = e + ""; return "0" == r && 1 / e == -s ? "-0" : r } }, function(t, e, r) { var n = r(258),
        i = r(259);
    t.exports = function(t, e) { return null != t && i(t, e, n) } }, function(t, e) { t.exports = function(t, e) { return null != t && e in Object(t) } }, function(t, e, r) { var n = r(65),
        i = r(64),
        a = r(10),
        o = r(84),
        s = r(86),
        l = r(48);
    t.exports = function(t, e, r) { for (var h = -1, c = (e = n(e, t)).length, u = !1; ++h < c;) { var f = l(e[h]); if (!(u = null != t && r(t, f))) break;
            t = t[f] } return u || ++h != c ? u : !!(c = null == t ? 0 : t.length) && s(c) && o(f, c) && (a(t) || i(t)) } }, function(t, e, r) { var n = r(144),
        i = r(261),
        a = r(92),
        o = r(48);
    t.exports = function(t) { return a(t) ? n(o(t)) : i(t) } }, function(t, e, r) { var n = r(91);
    t.exports = function(t) { return function(e) { return n(e, t) } } }, function(t, e, r) { var n = r(94),
        i = 1 / 0,
        a = 1.7976931348623157e308;
    t.exports = function(t) { return t ? (t = n(t)) === i || t === -i ? (t < 0 ? -1 : 1) * a : t == t ? t : 0 : 0 === t ? t : 0 } }, function(t, e, r) { var n = r(264),
        i = /^\s+/;
    t.exports = function(t) { return t ? t.slice(0, n(t) + 1).replace(i, "") : t } }, function(t, e) { var r = /\s/;
    t.exports = function(t) { for (var e = t.length; e-- && r.test(t.charAt(e));); return e } }, function(t, e, r) { var n = r(266);
    r(324), r(330), r(341), r(347), r(348), r(349), r(350), r(351), r(352), r(355), r(356), r(357), r(358), t.exports = n }, function(t, e, r) { var n = r(267);
    t.exports = n }, function(t, e, r) { r(268), r(279), r(280), r(155), r(283), r(284), r(286), r(287), r(289), r(290), r(291), r(292), r(293), r(294), r(159), r(296), r(297), r(301), r(302), r(304), r(305), r(306), r(307), r(308), r(309), r(310), r(315), r(316), r(317), r(318), r(319), r(321); var n = r(323);
    t.exports = n.Array }, function(t, e, r) { var n = r(1),
        i = r(277);
    n({ target: "Array", stat: !0, forced: !r(107)(function(t) { Array.from(t) }) }, { from: i }) }, function(t, e, r) { "use strict"; var n = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        a = i && !n.call({ 1: 2 }, 1);
    e.f = a ? function(t) { var e = i(this, t); return !!e && e.enumerable } : n }, function(t, e, r) { var n = r(0),
        i = r(15),
        a = r(12),
        o = r(146),
        s = r(33),
        l = r(271),
        h = r(6),
        c = n.TypeError,
        u = h("toPrimitive");
    t.exports = function(t, e) { if (!a(t) || o(t)) return t; var r, n = s(t, u); if (n) { if (void 0 === e && (e = "default"), r = i(n, t, e), !a(r) || o(r)) return r; throw c("Can't convert object to primitive value") } return void 0 === e && (e = "number"), l(t, e) } }, function(t, e, r) { var n = r(0),
        i = r(15),
        a = r(5),
        o = r(12),
        s = n.TypeError;
    t.exports = function(t, e) { var r, n; if ("string" === e && a(r = t.toString) && !o(n = i(r, t))) return n; if (a(r = t.valueOf) && !o(n = i(r, t))) return n; if ("string" !== e && a(r = t.toString) && !o(n = i(r, t))) return n; throw s("Can't convert object to primitive value") } }, function(t, e, r) { var n = r(0),
        i = r(5),
        a = r(72),
        o = n.WeakMap;
    t.exports = i(o) && /native code/.test(a(o)) }, function(t, e, r) { var n = r(17),
        i = r(274),
        a = r(95),
        o = r(18);
    t.exports = function(t, e) { for (var r = i(e), s = o.f, l = a.f, h = 0; h < r.length; h++) { var c = r[h];
            n(t, c) || s(t, c, l(e, c)) } } }, function(t, e, r) { var n = r(16),
        i = r(2),
        a = r(102),
        o = r(276),
        s = r(11),
        l = i([].concat);
    t.exports = n("Reflect", "ownKeys") || function(t) { var e = a.f(s(t)),
            r = o.f; return r ? l(e, r(t)) : e } }, function(t, e, r) { var n = r(34),
        i = Math.min;
    t.exports = function(t) { return t > 0 ? i(n(t), 9007199254740991) : 0 } }, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e, r) { "use strict"; var n = r(0),
        i = r(22),
        a = r(15),
        o = r(7),
        s = r(278),
        l = r(154),
        h = r(42),
        c = r(4),
        u = r(53),
        f = r(75),
        p = r(76),
        d = n.Array;
    t.exports = function(t) { var e = o(t),
            r = h(this),
            n = arguments.length,
            m = n > 1 ? arguments[1] : void 0,
            v = void 0 !== m;
        v && (m = i(m, n > 2 ? arguments[2] : void 0)); var y, g, E, b, _, x, T = p(e),
            S = 0; if (!T || this == d && l(T))
            for (y = c(e), g = r ? new this(y) : d(y); y > S; S++) x = v ? m(e[S], S) : e[S], u(g, S, x);
        else
            for (_ = (b = f(e, T)).next, g = r ? new this : []; !(E = a(_, b)).done; S++) x = v ? s(b, m, [E.value, S], !0) : E.value, u(g, S, x); return g.length = S, g } }, function(t, e, r) { var n = r(11),
        i = r(153);
    t.exports = function(t, e, r, a) { try { return a ? e(n(r)[0], r[1]) : e(r) } catch (e) { i(t, "throw", e) } } }, function(t, e, r) { r(1)({ target: "Array", stat: !0 }, { isArray: r(35) }) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(0),
        a = r(9),
        o = r(42),
        s = r(53),
        l = i.Array;
    n({ target: "Array", stat: !0, forced: a(function() {
            function t() {} return !(l.of.call(t) instanceof t) }) }, { of: function() { for (var t = 0, e = arguments.length, r = new(o(this) ? this : l)(e); e > t;) s(r, t, arguments[t++]); return r.length = e, r } }) }, function(t, e, r) { var n = r(20),
        i = r(18),
        a = r(11),
        o = r(24),
        s = r(282);
    t.exports = n ? Object.defineProperties : function(t, e) { a(t); for (var r, n = o(e), l = s(e), h = l.length, c = 0; h > c;) i.f(t, r = l[c++], n[r]); return t } }, function(t, e, r) { var n = r(152),
        i = r(104);
    t.exports = Object.keys || function(t) { return n(t, i) } }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(0),
        a = r(9),
        o = r(35),
        s = r(12),
        l = r(7),
        h = r(4),
        c = r(53),
        u = r(43),
        f = r(54),
        p = r(6),
        d = r(31),
        m = p("isConcatSpreadable"),
        v = i.TypeError,
        y = d >= 51 || !a(function() { var t = []; return t[m] = !1, t.concat()[0] !== t }),
        g = f("concat"),
        E = function(t) { if (!s(t)) return !1; var e = t[m]; return void 0 !== e ? !!e : o(t) };
    n({ target: "Array", proto: !0, forced: !y || !g }, { concat: function(t) { var e, r, n, i, a, o = l(this),
                s = u(o, 0),
                f = 0; for (e = -1, n = arguments.length; e < n; e++)
                if (a = -1 === e ? o : arguments[e], E(a)) { if (f + (i = h(a)) > 9007199254740991) throw v("Maximum allowed index exceeded"); for (r = 0; r < i; r++, f++) r in a && c(s, f, a[r]) } else { if (f >= 9007199254740991) throw v("Maximum allowed index exceeded");
                    c(s, f++, a) }
            return s.length = f, s } }) }, function(t, e, r) { var n = r(1),
        i = r(285),
        a = r(8);
    n({ target: "Array", proto: !0 }, { copyWithin: i }), a("copyWithin") }, function(t, e, r) { "use strict"; var n = r(7),
        i = r(51),
        a = r(4),
        o = Math.min;
    t.exports = [].copyWithin || function(t, e) { var r = n(this),
            s = a(r),
            l = i(t, s),
            h = i(e, s),
            c = arguments.length > 2 ? arguments[2] : void 0,
            u = o((void 0 === c ? s : i(c, s)) - h, s - l),
            f = 1; for (h < l && l < h + u && (f = -1, h += u - 1, l += u - 1); u-- > 0;) h in r ? r[l] = r[h] : delete r[l], l += f, h += f; return r } }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(25).every;
    n({ target: "Array", proto: !0, forced: !r(26)("every") }, { every: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(t, e, r) { var n = r(1),
        i = r(288),
        a = r(8);
    n({ target: "Array", proto: !0 }, { fill: i }), a("fill") }, function(t, e, r) { "use strict"; var n = r(7),
        i = r(51),
        a = r(4);
    t.exports = function(t) { for (var e = n(this), r = a(e), o = arguments.length, s = i(o > 1 ? arguments[1] : void 0, r), l = o > 2 ? arguments[2] : void 0, h = void 0 === l ? r : i(l, r); h > s;) e[s++] = t; return e } }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(25).filter;
    n({ target: "Array", proto: !0, forced: !r(54)("filter") }, { filter: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(25).find,
        a = r(8),
        o = !0; "find" in [] && Array(1).find(function() { o = !1 }), n({ target: "Array", proto: !0, forced: o }, { find: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), a("find") }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(25).findIndex,
        a = r(8),
        o = !0; "findIndex" in [] && Array(1).findIndex(function() { o = !1 }), n({ target: "Array", proto: !0, forced: o }, { findIndex: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), a("findIndex") }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(158),
        a = r(7),
        o = r(4),
        s = r(34),
        l = r(43);
    n({ target: "Array", proto: !0 }, { flat: function() { var t = arguments.length ? arguments[0] : void 0,
                e = a(this),
                r = o(e),
                n = l(e, 0); return n.length = i(n, e, e, r, 0, void 0 === t ? 1 : s(t)), n } }) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(158),
        a = r(21),
        o = r(7),
        s = r(4),
        l = r(43);
    n({ target: "Array", proto: !0 }, { flatMap: function(t) { var e, r = o(this),
                n = s(r); return a(t), (e = l(r, 0)).length = i(e, r, r, n, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e } }) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(295);
    n({ target: "Array", proto: !0, forced: [].forEach != i }, { forEach: i }) }, function(t, e, r) { "use strict"; var n = r(25).forEach,
        i = r(26)("forEach");
    t.exports = i ? [].forEach : function(t) { return n(this, t, arguments.length > 1 ? arguments[1] : void 0) } }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(2),
        a = r(103).indexOf,
        o = r(26),
        s = i([].indexOf),
        l = !!s && 1 / s([1], 1, -0) < 0,
        h = o("indexOf");
    n({ target: "Array", proto: !0, forced: l || !h }, { indexOf: function(t) { var e = arguments.length > 1 ? arguments[1] : void 0; return l ? s(this, t, e) || 0 : a(this, t, e) } }) }, function(t, e, r) { "use strict"; var n = r(24),
        i = r(8),
        a = r(52),
        o = r(41),
        s = r(108),
        l = o.set,
        h = o.getterFor("Array Iterator");
    t.exports = s(Array, "Array", function(t, e) { l(this, { type: "Array Iterator", target: n(t), index: 0, kind: e }) }, function() { var t = h(this),
            e = t.target,
            r = t.kind,
            n = t.index++; return !e || n >= e.length ? (t.target = void 0, { value: void 0, done: !0 }) : "keys" == r ? { value: n, done: !1 } : "values" == r ? { value: e[n], done: !1 } : { value: [n, e[n]], done: !1 } }, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries") }, function(t, e, r) { "use strict"; var n = r(160).IteratorPrototype,
        i = r(36),
        a = r(67),
        o = r(77),
        s = r(52),
        l = function() { return this };
    t.exports = function(t, e, r) { var h = e + " Iterator"; return t.prototype = i(n, { next: a(1, r) }), o(t, h, !1, !0), s[h] = l, t } }, function(t, e, r) { var n = r(9);
    t.exports = !n(function() {
        function t() {} return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype }) }, function(t, e, r) { var n = r(0),
        i = r(5),
        a = n.String,
        o = n.TypeError;
    t.exports = function(t) { if ("object" == typeof t || i(t)) return t; throw o("Can't set " + a(t) + " as a prototype") } }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(2),
        a = r(40),
        o = r(24),
        s = r(26),
        l = i([].join),
        h = a != Object,
        c = s("join", ",");
    n({ target: "Array", proto: !0, forced: h || !c }, { join: function(t) { return l(o(this), void 0 === t ? "," : t) } }) }, function(t, e, r) { var n = r(1),
        i = r(303);
    n({ target: "Array", proto: !0, forced: i !== [].lastIndexOf }, { lastIndexOf: i }) }, function(t, e, r) { "use strict"; var n = r(111),
        i = r(24),
        a = r(34),
        o = r(4),
        s = r(26),
        l = Math.min,
        h = [].lastIndexOf,
        c = !!h && 1 / [1].lastIndexOf(1, -0) < 0,
        u = s("lastIndexOf"),
        f = c || !u;
    t.exports = f ? function(t) { if (c) return n(h, this, arguments) || 0; var e = i(this),
            r = o(e),
            s = r - 1; for (arguments.length > 1 && (s = l(s, a(arguments[1]))), s < 0 && (s = r + s); s >= 0; s--)
            if (s in e && e[s] === t) return s || 0;
        return -1 } : h }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(25).map;
    n({ target: "Array", proto: !0, forced: !r(54)("map") }, { map: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(161).left,
        a = r(26),
        o = r(31),
        s = r(55);
    n({ target: "Array", proto: !0, forced: !a("reduce") || !s && o > 79 && o < 83 }, { reduce: function(t) { var e = arguments.length; return i(this, t, e, e > 1 ? arguments[1] : void 0) } }) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(161).right,
        a = r(26),
        o = r(31),
        s = r(55);
    n({ target: "Array", proto: !0, forced: !a("reduceRight") || !s && o > 79 && o < 83 }, { reduceRight: function(t) { return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(2),
        a = r(35),
        o = i([].reverse),
        s = [1, 2];
    n({ target: "Array", proto: !0, forced: String(s) === String(s.reverse()) }, { reverse: function() { return a(this) && (this.length = this.length), o(this) } }) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(0),
        a = r(35),
        o = r(42),
        s = r(12),
        l = r(51),
        h = r(4),
        c = r(24),
        u = r(53),
        f = r(6),
        p = r(54),
        d = r(78),
        m = p("slice"),
        v = f("species"),
        y = i.Array,
        g = Math.max;
    n({ target: "Array", proto: !0, forced: !m }, { slice: function(t, e) { var r, n, i, f = c(this),
                p = h(f),
                m = l(t, p),
                E = l(void 0 === e ? p : e, p); if (a(f) && (r = f.constructor, o(r) && (r === y || a(r.prototype)) ? r = void 0 : s(r) && null === (r = r[v]) && (r = void 0), r === y || void 0 === r)) return d(f, m, E); for (n = new(void 0 === r ? y : r)(g(E - m, 0)), i = 0; m < E; m++, i++) m in f && u(n, i, f[m]); return n.length = i, n } }) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(25).some;
    n({ target: "Array", proto: !0, forced: !r(26)("some") }, { some: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(2),
        a = r(21),
        o = r(7),
        s = r(4),
        l = r(112),
        h = r(9),
        c = r(311),
        u = r(26),
        f = r(312),
        p = r(313),
        d = r(31),
        m = r(314),
        v = [],
        y = i(v.sort),
        g = i(v.push),
        E = h(function() { v.sort(void 0) }),
        b = h(function() { v.sort(null) }),
        _ = u("sort"),
        x = !h(function() { if (d) return d < 70; if (!(f && f > 3)) { if (p) return !0; if (m) return m < 603; var t, e, r, n, i = ""; for (t = 65; t < 76; t++) { switch (e = String.fromCharCode(t), t) {
                        case 66:
                        case 69:
                        case 70:
                        case 72:
                            r = 3; break;
                        case 68:
                        case 71:
                            r = 4; break;
                        default:
                            r = 2 } for (n = 0; n < 47; n++) v.push({ k: e + n, v: r }) } for (v.sort(function(t, e) { return e.v - t.v }), n = 0; n < v.length; n++) e = v[n].k.charAt(0), i.charAt(i.length - 1) !== e && (i += e); return "DGBEFHACIJK" !== i } });
    n({ target: "Array", proto: !0, forced: E || !b || !_ || !x }, { sort: function(t) { void 0 !== t && a(t); var e = o(this); if (x) return void 0 === t ? y(e) : y(e, t); var r, n, i = [],
                h = s(e); for (n = 0; n < h; n++) n in e && g(i, e[n]); for (c(i, function(t) { return function(e, r) { return void 0 === r ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, r) || 0 : l(e) > l(r) ? 1 : -1 } }(t)), r = i.length, n = 0; n < r;) e[n] = i[n++]; for (; n < h;) delete e[n++]; return e } }) }, function(t, e, r) { var n = r(78),
        i = Math.floor,
        a = function(t, e) { var r = t.length,
                l = i(r / 2); return r < 8 ? o(t, e) : s(t, a(n(t, 0, l), e), a(n(t, l), e), e) },
        o = function(t, e) { for (var r, n, i = t.length, a = 1; a < i;) { for (n = a, r = t[a]; n && e(t[n - 1], r) > 0;) t[n] = t[--n];
                n !== a++ && (t[n] = r) } return t },
        s = function(t, e, r, n) { for (var i = e.length, a = r.length, o = 0, s = 0; o < i || s < a;) t[o + s] = o < i && s < a ? n(e[o], r[s]) <= 0 ? e[o++] : r[s++] : o < i ? e[o++] : r[s++]; return t };
    t.exports = a }, function(t, e, r) { var n = r(32).match(/firefox\/(\d+)/i);
    t.exports = !!n && +n[1] }, function(t, e, r) { var n = r(32);
    t.exports = /MSIE|Trident/.test(n) }, function(t, e, r) { var n = r(32).match(/AppleWebKit\/(\d+)\./);
    t.exports = !!n && +n[1] }, function(t, e, r) { r(113)("Array") }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(0),
        a = r(51),
        o = r(34),
        s = r(4),
        l = r(7),
        h = r(43),
        c = r(53),
        u = r(54)("splice"),
        f = i.TypeError,
        p = Math.max,
        d = Math.min;
    n({ target: "Array", proto: !0, forced: !u }, { splice: function(t, e) { var r, n, i, u, m, v, y = l(this),
                g = s(y),
                E = a(t, g),
                b = arguments.length; if (0 === b ? r = n = 0 : 1 === b ? (r = 0, n = g - E) : (r = b - 2, n = d(p(o(e), 0), g - E)), g + r - n > 9007199254740991) throw f("Maximum allowed length exceeded"); for (i = h(y, n), u = 0; u < n; u++)(m = E + u) in y && c(i, u, y[m]); if (i.length = n, r < n) { for (u = E; u < g - n; u++) v = u + r, (m = u + n) in y ? y[v] = y[m] : delete y[v]; for (u = g; u > g - n + r; u--) delete y[u - 1] } else if (r > n)
                for (u = g - n; u > E; u--) v = u + r - 1, (m = u + n - 1) in y ? y[v] = y[m] : delete y[v]; for (u = 0; u < r; u++) y[u + E] = arguments[u + 2]; return y.length = g - n + r, i } }) }, function(t, e, r) { r(8)("flat") }, function(t, e, r) { r(8)("flatMap") }, function(t, e, r) { var n = r(106),
        i = r(27),
        a = r(320);
    n || i(Object.prototype, "toString", a, { unsafe: !0 }) }, function(t, e, r) { "use strict"; var n = r(106),
        i = r(74);
    t.exports = n ? {}.toString : function() { return "[object " + i(this) + "]" } }, function(t, e, r) { "use strict"; var n = r(322).charAt,
        i = r(112),
        a = r(41),
        o = r(108),
        s = a.set,
        l = a.getterFor("String Iterator");
    o(String, "String", function(t) { s(this, { type: "String Iterator", string: i(t), index: 0 }) }, function() { var t, e = l(this),
            r = e.string,
            i = e.index; return i >= r.length ? { value: void 0, done: !0 } : (t = n(r, i), e.index += t.length, { value: t, done: !1 }) }) }, function(t, e, r) { var n = r(2),
        i = r(34),
        a = r(112),
        o = r(96),
        s = n("".charAt),
        l = n("".charCodeAt),
        h = n("".slice),
        c = function(t) { return function(e, r) { var n, c, u = a(o(e)),
                    f = i(r),
                    p = u.length; return f < 0 || f >= p ? t ? "" : void 0 : (n = l(u, f)) < 55296 || n > 56319 || f + 1 === p || (c = l(u, f + 1)) < 56320 || c > 57343 ? t ? s(u, f) : n : t ? h(u, f, f + 2) : c - 56320 + (n - 55296 << 10) + 65536 } };
    t.exports = { codeAt: c(!1), charAt: c(!0) } }, function(t, e, r) { var n = r(0);
    t.exports = n }, function(t, e, r) { "use strict";
    r(325)("Map", function(t) { return function() { return t(this, arguments.length ? arguments[0] : void 0) } }, r(329)) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(0),
        a = r(2),
        o = r(105),
        s = r(27),
        l = r(162),
        h = r(114),
        c = r(115),
        u = r(5),
        f = r(12),
        p = r(9),
        d = r(107),
        m = r(77),
        v = r(328);
    t.exports = function(t, e, r) { var y = -1 !== t.indexOf("Map"),
            g = -1 !== t.indexOf("Weak"),
            E = y ? "set" : "add",
            b = i[t],
            _ = b && b.prototype,
            x = b,
            T = {},
            S = function(t) { var e = a(_[t]);
                s(_, t, "add" == t ? function(t) { return e(this, 0 === t ? 0 : t), this } : "delete" == t ? function(t) { return !(g && !f(t)) && e(this, 0 === t ? 0 : t) } : "get" == t ? function(t) { return g && !f(t) ? void 0 : e(this, 0 === t ? 0 : t) } : "has" == t ? function(t) { return !(g && !f(t)) && e(this, 0 === t ? 0 : t) } : function(t, r) { return e(this, 0 === t ? 0 : t, r), this }) }; if (o(t, !u(b) || !(g || _.forEach && !p(function() {
                (new b).entries().next() })))) x = r.getConstructor(e, t, y, E), l.enable();
        else if (o(t, !0)) { var I = new x,
                A = I[E](g ? {} : -0, 1) != I,
                P = p(function() { I.has(1) }),
                w = d(function(t) { new b(t) }),
                C = !g && p(function() { for (var t = new b, e = 5; e--;) t[E](e, e); return !t.has(-0) });
            w || ((x = e(function(t, e) { c(t, _); var r = v(new b, t, x); return null != e && h(e, r[E], { that: r, AS_ENTRIES: y }), r })).prototype = _, _.constructor = x), (P || C) && (S("delete"), S("has"), y && S("get")), (C || A) && S(E), g && _.clear && delete _.clear } return T[t] = x, n({ global: !0, forced: x != b }, T), m(x, t), g || r.setStrong(x, t, y), x } }, function(t, e, r) { var n = r(49),
        i = r(24),
        a = r(102).f,
        o = r(78),
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) { return s && "Window" == n(t) ? function(t) { try { return a(t) } catch (t) { return o(s) } }(t) : a(i(t)) } }, function(t, e, r) { var n = r(9);
    t.exports = !n(function() { return Object.isExtensible(Object.preventExtensions({})) }) }, function(t, e, r) { var n = r(5),
        i = r(12),
        a = r(110);
    t.exports = function(t, e, r) { var o, s; return a && n(o = e.constructor) && o !== r && i(s = o.prototype) && s !== r.prototype && a(t, s), t } }, function(t, e, r) { "use strict"; var n = r(18).f,
        i = r(36),
        a = r(116),
        o = r(22),
        s = r(115),
        l = r(114),
        h = r(108),
        c = r(113),
        u = r(20),
        f = r(162).fastKey,
        p = r(41),
        d = p.set,
        m = p.getterFor;
    t.exports = { getConstructor: function(t, e, r, h) { var c = t(function(t, n) { s(t, p), d(t, { type: e, index: i(null), first: void 0, last: void 0, size: 0 }), u || (t.size = 0), null != n && l(n, t[h], { that: t, AS_ENTRIES: r }) }),
                p = c.prototype,
                v = m(e),
                y = function(t, e, r) { var n, i, a = v(t),
                        o = g(t, e); return o ? o.value = r : (a.last = o = { index: i = f(e, !0), key: e, value: r, previous: n = a.last, next: void 0, removed: !1 }, a.first || (a.first = o), n && (n.next = o), u ? a.size++ : t.size++, "F" !== i && (a.index[i] = o)), t },
                g = function(t, e) { var r, n = v(t),
                        i = f(e); if ("F" !== i) return n.index[i]; for (r = n.first; r; r = r.next)
                        if (r.key == e) return r }; return a(p, { clear: function() { for (var t = v(this), e = t.index, r = t.first; r;) r.removed = !0, r.previous && (r.previous = r.previous.next = void 0), delete e[r.index], r = r.next;
                    t.first = t.last = void 0, u ? t.size = 0 : this.size = 0 }, delete: function(t) { var e = v(this),
                        r = g(this, t); if (r) { var n = r.next,
                            i = r.previous;
                        delete e.index[r.index], r.removed = !0, i && (i.next = n), n && (n.previous = i), e.first == r && (e.first = n), e.last == r && (e.last = i), u ? e.size-- : this.size-- } return !!r }, forEach: function(t) { for (var e, r = v(this), n = o(t, arguments.length > 1 ? arguments[1] : void 0); e = e ? e.next : r.first;)
                        for (n(e.value, e.key, this); e && e.removed;) e = e.previous }, has: function(t) { return !!g(this, t) } }), a(p, r ? { get: function(t) { var e = g(this, t); return e && e.value }, set: function(t, e) { return y(this, 0 === t ? 0 : t, e) } } : { add: function(t) { return y(this, t = 0 === t ? 0 : t, t) } }), u && n(p, "size", { get: function() { return v(this).size } }), c }, setStrong: function(t, e, r) { var n = e + " Iterator",
                i = m(e),
                a = m(n);
            h(t, e, function(t, e) { d(this, { type: n, target: t, state: i(t), kind: e, last: void 0 }) }, function() { for (var t = a(this), e = t.kind, r = t.last; r && r.removed;) r = r.previous; return t.target && (t.last = r = r ? r.next : t.state.first) ? "keys" == e ? { value: r.key, done: !1 } : "values" == e ? { value: r.value, done: !1 } : { value: [r.key, r.value], done: !1 } : (t.target = void 0, { value: void 0, done: !0 }) }, r ? "entries" : "values", !r, !0), c(e) } } }, function(t, e, r) { "use strict"; var n, i, a, o, s = r(1),
        l = r(50),
        h = r(0),
        c = r(16),
        u = r(15),
        f = r(331),
        p = r(27),
        d = r(116),
        m = r(110),
        v = r(77),
        y = r(113),
        g = r(21),
        E = r(5),
        b = r(12),
        _ = r(115),
        x = r(72),
        T = r(114),
        S = r(107),
        I = r(332),
        A = r(163).set,
        P = r(334),
        w = r(337),
        C = r(338),
        D = r(165),
        M = r(339),
        O = r(41),
        R = r(105),
        k = r(6),
        F = r(340),
        L = r(55),
        N = r(31),
        V = k("species"),
        B = O.get,
        G = O.set,
        j = O.getterFor("Promise"),
        z = f && f.prototype,
        H = f,
        X = z,
        W = h.TypeError,
        U = h.document,
        q = h.process,
        Y = D.f,
        K = Y,
        Q = !!(U && U.createEvent && h.dispatchEvent),
        $ = E(h.PromiseRejectionEvent),
        Z = !1,
        J = R("Promise", function() { var t = x(H),
                e = t !== String(H); if (!e && 66 === N) return !0; if (l && !X.finally) return !0; if (N >= 51 && /native code/.test(t)) return !1; var r = new H(function(t) { t(1) }),
                n = function(t) { t(function() {}, function() {}) }; return (r.constructor = {})[V] = n, !(Z = r.then(function() {}) instanceof n) || !e && F && !$ }),
        tt = J || !S(function(t) { H.all(t).catch(function() {}) }),
        et = function(t) { var e; return !(!b(t) || !E(e = t.then)) && e },
        rt = function(t, e) { if (!t.notified) { t.notified = !0; var r = t.reactions;
                P(function() { for (var n = t.value, i = 1 == t.state, a = 0; r.length > a;) { var o, s, l, h = r[a++],
                            c = i ? h.ok : h.fail,
                            f = h.resolve,
                            p = h.reject,
                            d = h.domain; try { c ? (i || (2 === t.rejection && ot(t), t.rejection = 1), !0 === c ? o = n : (d && d.enter(), o = c(n), d && (d.exit(), l = !0)), o === h.promise ? p(W("Promise-chain cycle")) : (s = et(o)) ? u(s, o, f, p) : f(o)) : p(n) } catch (t) { d && !l && d.exit(), p(t) } }
                    t.reactions = [], t.notified = !1, e && !t.rejection && it(t) }) } },
        nt = function(t, e, r) { var n, i;
            Q ? ((n = U.createEvent("Event")).promise = e, n.reason = r, n.initEvent(t, !1, !0), h.dispatchEvent(n)) : n = { promise: e, reason: r }, !$ && (i = h["on" + t]) ? i(n) : "unhandledrejection" === t && C("Unhandled promise rejection", r) },
        it = function(t) { u(A, h, function() { var e, r = t.facade,
                    n = t.value; if (at(t) && (e = M(function() { L ? q.emit("unhandledRejection", n, r) : nt("unhandledrejection", r, n) }), t.rejection = L || at(t) ? 2 : 1, e.error)) throw e.value }) },
        at = function(t) { return 1 !== t.rejection && !t.parent },
        ot = function(t) { u(A, h, function() { var e = t.facade;
                L ? q.emit("rejectionHandled", e) : nt("rejectionhandled", e, t.value) }) },
        st = function(t, e, r) { return function(n) { t(e, n, r) } },
        lt = function(t, e, r) { t.done || (t.done = !0, r && (t = r), t.value = e, t.state = 2, rt(t, !0)) },
        ht = function(t, e, r) { if (!t.done) { t.done = !0, r && (t = r); try { if (t.facade === e) throw W("Promise can't be resolved itself"); var n = et(e);
                    n ? P(function() { var r = { done: !1 }; try { u(n, e, st(ht, r, t), st(lt, r, t)) } catch (e) { lt(r, e, t) } }) : (t.value = e, t.state = 1, rt(t, !1)) } catch (e) { lt({ done: !1 }, e, t) } } }; if (J && (X = (H = function(t) { _(this, X), g(t), u(n, this); var e = B(this); try { t(st(ht, e), st(lt, e)) } catch (t) { lt(e, t) } }).prototype, (n = function(t) { G(this, { type: "Promise", done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 }) }).prototype = d(X, { then: function(t, e) { var r = j(this),
                    n = r.reactions,
                    i = Y(I(this, H)); return i.ok = !E(t) || t, i.fail = E(e) && e, i.domain = L ? q.domain : void 0, r.parent = !0, n[n.length] = i, 0 != r.state && rt(r, !1), i.promise }, catch: function(t) { return this.then(void 0, t) } }), i = function() { var t = new n,
                e = B(t);
            this.promise = t, this.resolve = st(ht, e), this.reject = st(lt, e) }, D.f = Y = function(t) { return t === H || t === a ? new i(t) : K(t) }, !l && E(f) && z !== Object.prototype)) { o = z.then, Z || (p(z, "then", function(t, e) { var r = this; return new H(function(t, e) { u(o, r, t, e) }).then(t, e) }, { unsafe: !0 }), p(z, "catch", X.catch, { unsafe: !0 })); try { delete z.constructor } catch (t) {}
        m && m(z, X) }
    s({ global: !0, wrap: !0, forced: J }, { Promise: H }), v(H, "Promise", !1, !0), y("Promise"), a = c("Promise"), s({ target: "Promise", stat: !0, forced: J }, { reject: function(t) { var e = Y(this); return u(e.reject, void 0, t), e.promise } }), s({ target: "Promise", stat: !0, forced: l || J }, { resolve: function(t) { return w(l && this === a ? H : this, t) } }), s({ target: "Promise", stat: !0, forced: tt }, { all: function(t) { var e = this,
                r = Y(e),
                n = r.resolve,
                i = r.reject,
                a = M(function() { var r = g(e.resolve),
                        a = [],
                        o = 0,
                        s = 1;
                    T(t, function(t) { var l = o++,
                            h = !1;
                        s++, u(r, e, t).then(function(t) { h || (h = !0, a[l] = t, --s || n(a)) }, i) }), --s || n(a) }); return a.error && i(a.value), r.promise }, race: function(t) { var e = this,
                r = Y(e),
                n = r.reject,
                i = M(function() { var i = g(e.resolve);
                    T(t, function(t) { u(i, e, t).then(r.resolve, n) }) }); return i.error && n(i.value), r.promise } }) }, function(t, e, r) { var n = r(0);
    t.exports = n.Promise }, function(t, e, r) { var n = r(11),
        i = r(333),
        a = r(6)("species");
    t.exports = function(t, e) { var r, o = n(t).constructor; return void 0 === o || null == (r = n(o)[a]) ? e : i(r) } }, function(t, e, r) { var n = r(0),
        i = r(42),
        a = r(69),
        o = n.TypeError;
    t.exports = function(t) { if (i(t)) return t; throw o(a(t) + " is not a constructor") } }, function(t, e, r) { var n, i, a, o, s, l, h, c, u = r(0),
        f = r(22),
        p = r(95).f,
        d = r(163).set,
        m = r(164),
        v = r(335),
        y = r(336),
        g = r(55),
        E = u.MutationObserver || u.WebKitMutationObserver,
        b = u.document,
        _ = u.process,
        x = u.Promise,
        T = p(u, "queueMicrotask"),
        S = T && T.value;
    S || (n = function() { var t, e; for (g && (t = _.domain) && t.exit(); i;) { e = i.fn, i = i.next; try { e() } catch (t) { throw i ? o() : a = void 0, t } }
        a = void 0, t && t.enter() }, m || g || y || !E || !b ? !v && x && x.resolve ? ((h = x.resolve(void 0)).constructor = x, c = f(h.then, h), o = function() { c(n) }) : g ? o = function() { _.nextTick(n) } : (d = f(d, u), o = function() { d(n) }) : (s = !0, l = b.createTextNode(""), new E(n).observe(l, { characterData: !0 }), o = function() { l.data = s = !s })), t.exports = S || function(t) { var e = { fn: t, next: void 0 };
        a && (a.next = e), i || (i = e, o()), a = e } }, function(t, e, r) { var n = r(32),
        i = r(0);
    t.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== i.Pebble }, function(t, e, r) { var n = r(32);
    t.exports = /web0s(?!.*chrome)/i.test(n) }, function(t, e, r) { var n = r(11),
        i = r(12),
        a = r(165);
    t.exports = function(t, e) { if (n(t), i(e) && e.constructor === t) return e; var r = a.f(t); return (0, r.resolve)(e), r.promise } }, function(t, e, r) { var n = r(0);
    t.exports = function(t, e) { var r = n.console;
        r && r.error && (1 == arguments.length ? r.error(t) : r.error(t, e)) } }, function(t, e) { t.exports = function(t) { try { return { error: !1, value: t() } } catch (t) { return { error: !0, value: t } } } }, function(t, e) { t.exports = "object" == typeof window }, function(t, e, r) { r(1)({ target: "Array", stat: !0 }, { fromAsync: r(342) }) }, function(t, e, r) { "use strict"; var n = r(22),
        i = r(7),
        a = r(42),
        o = r(343),
        s = r(75),
        l = r(76),
        h = r(33),
        c = r(345),
        u = r(16),
        f = r(6),
        p = r(166),
        d = r(346).toArray,
        m = f("asyncIterator"),
        v = c("Array").values;
    t.exports = function(t) { var e = this,
            r = arguments.length,
            c = r > 1 ? arguments[1] : void 0,
            f = r > 2 ? arguments[2] : void 0; return new(u("Promise"))(function(r) { var u = i(t);
            void 0 !== c && (c = n(c, f)); var y = h(u, m),
                g = y ? void 0 : l(u) || v,
                E = a(e) ? new e : [],
                b = y ? o(u, y) : new p(s(u, g));
            r(d(b, c, E)) }) } }, function(t, e, r) { var n = r(15),
        i = r(166),
        a = r(11),
        o = r(75),
        s = r(33),
        l = r(6)("asyncIterator");
    t.exports = function(t, e) { var r = arguments.length < 2 ? s(t, l) : e; return r ? a(n(r, t)) : new i(o(t)) } }, function(t, e, r) { var n, i, a = r(0),
        o = r(70),
        s = r(5),
        l = r(36),
        h = r(109),
        c = r(27),
        u = r(6),
        f = r(50),
        p = u("asyncIterator"),
        d = a.AsyncIterator,
        m = o.AsyncIteratorPrototype; if (m) n = m;
    else if (s(d)) n = d.prototype;
    else if (o.USE_FUNCTION_CONSTRUCTOR || a.USE_FUNCTION_CONSTRUCTOR) try { i = h(h(h(Function("return async function*(){}()")()))), h(i) === Object.prototype && (n = i) } catch (t) {}
    n ? f && (n = l(n)) : n = {}, s(n[p]) || c(n, p, function() { return this }), t.exports = n }, function(t, e, r) { var n = r(0);
    t.exports = function(t) { return n[t].prototype } }, function(t, e, r) { "use strict"; var n = r(0),
        i = r(15),
        a = r(21),
        o = r(11),
        s = r(16),
        l = r(33),
        h = n.TypeError,
        c = function(t) { var e = 0 == t,
                r = 1 == t,
                n = 2 == t,
                c = 3 == t; return function(t, u, f) { o(t); var p = s("Promise"),
                    d = a(t.next),
                    m = 0,
                    v = void 0 !== u; return !v && e || a(u), new p(function(a, s) { var y = function(e, r) { try { var n = l(t, "return"); if (n) return p.resolve(i(n, t)).then(function() { e(r) }, function(t) { s(t) }) } catch (t) { return s(t) }
                            e(r) },
                        g = function(t) { y(s, t) },
                        E = function() { try { if (e && m > 9007199254740991 && v) throw h("The allowed number of iterations has been exceeded");
                                p.resolve(o(i(d, t))).then(function(t) { try { if (o(t).done) e ? (f.length = m, a(f)) : a(!c && (n || void 0));
                                        else { var i = t.value;
                                            v ? p.resolve(e ? u(i, m) : u(i)).then(function(t) { r ? E() : n ? t ? E() : y(a, !1) : e ? (f[m++] = t, E()) : t ? y(a, c || i) : E() }, g) : (f[m++] = i, E()) } } catch (t) { g(t) } }, g) } catch (t) { g(t) } };
                    E() }) } };
    t.exports = { toArray: c(0), forEach: c(1), every: c(2), some: c(3), find: c(4) } }, function(t, e, r) { r(155) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(25).filterReject,
        a = r(8);
    n({ target: "Array", proto: !0 }, { filterOut: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), a("filterOut") }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(25).filterReject,
        a = r(8);
    n({ target: "Array", proto: !0 }, { filterReject: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), a("filterReject") }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(167).findLast,
        a = r(8);
    n({ target: "Array", proto: !0 }, { findLast: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), a("findLast") }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(167).findLastIndex,
        a = r(8);
    n({ target: "Array", proto: !0 }, { findLastIndex: function(t) { return i(this, t, arguments.length > 1 ? arguments[1] : void 0) } }), a("findLastIndex") }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(353),
        a = r(157),
        o = r(8);
    n({ target: "Array", proto: !0 }, { groupBy: function(t) { var e = arguments.length > 1 ? arguments[1] : void 0; return i(this, t, e, a) } }), o("groupBy") }, function(t, e, r) { var n = r(0),
        i = r(22),
        a = r(2),
        o = r(40),
        s = r(7),
        l = r(68),
        h = r(4),
        c = r(36),
        u = r(354),
        f = n.Array,
        p = a([].push);
    t.exports = function(t, e, r, n) { for (var a, d, m, v = s(t), y = o(v), g = i(e, r), E = c(null), b = h(y), _ = 0; b > _; _++) m = y[_], (d = l(g(m, _, v))) in E ? p(E[d], m) : E[d] = [m]; if (n && (a = n(v)) !== f)
            for (d in E) E[d] = u(a, E[d]); return E } }, function(t, e) { t.exports = function(t, e) { for (var r = 0, n = e.length, i = new t(n); n > r;) i[r] = e[r++]; return i } }, function(t, e, r) { var n = r(1),
        i = r(35),
        a = Object.isFrozen,
        o = function(t, e) { if (!a || !i(t) || !a(t)) return !1; for (var r, n = 0, o = t.length; n < o;)
                if (!("string" == typeof(r = t[n++]) || e && void 0 === r)) return !1;
            return 0 !== o };
    n({ target: "Array", stat: !0 }, { isTemplateObject: function(t) { if (!o(t, !0)) return !1; var e = t.raw; return !(e.length !== t.length || !o(e, !1)) } }) }, function(t, e, r) { "use strict"; var n = r(20),
        i = r(8),
        a = r(7),
        o = r(4),
        s = r(18).f;!n || "lastItem" in [] || (s(Array.prototype, "lastItem", { configurable: !0, get: function() { var t = a(this),
                e = o(t); return 0 == e ? void 0 : t[e - 1] }, set: function(t) { var e = a(this),
                r = o(e); return e[0 == r ? 0 : r - 1] = t } }), i("lastItem")) }, function(t, e, r) { "use strict"; var n = r(20),
        i = r(8),
        a = r(7),
        o = r(4),
        s = r(18).f;!n || "lastIndex" in [] || (s(Array.prototype, "lastIndex", { configurable: !0, get: function() { var t = a(this),
                e = o(t); return 0 == e ? 0 : e - 1 } }), i("lastIndex")) }, function(t, e, r) { "use strict"; var n = r(1),
        i = r(8);
    n({ target: "Array", proto: !0 }, { uniqueBy: r(359) }), i("uniqueBy") }, function(t, e, r) { "use strict"; var n = r(16),
        i = r(2),
        a = r(21),
        o = r(4),
        s = r(7),
        l = r(43),
        h = n("Map"),
        c = h.prototype,
        u = i(c.forEach),
        f = i(c.has),
        p = i(c.set),
        d = i([].push);
    t.exports = function(t) { var e, r, n, i = s(this),
            c = o(i),
            m = l(i, 0),
            v = new h,
            y = null != t ? a(t) : function(t) { return t }; for (e = 0; e < c; e++) n = y(r = i[e]), f(v, n) || p(v, n, r); return u(v, function(t) { d(m, t) }), m } }, function(module, exports, __webpack_require__) { var __WEBPACK_AMD_DEFINE_RESULT__, root, factory; "undefined" != typeof navigator && (root = window || {}, factory = function(window) { "use strict"; var svgNS = "http://www.w3.org/2000/svg",
            locationHref = "",
            initialDefaultFrame = -999999,
            subframeEnabled = !0,
            idPrefix = "",
            expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            cachedColors = {},
            bmRnd, bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMax = Math.max,
            bmMin = Math.min,
            BMMath = {};

        function ProjectInterface() { return {} }! function() { var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                r = e.length; for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]] }(), BMMath.random = Math.random, BMMath.abs = function(t) { if ("object" == typeof t && t.length) { var e, r = createSizedArray(t.length),
                    n = t.length; for (e = 0; e < n; e += 1) r[e] = Math.abs(t[e]); return r } return Math.abs(t) }; var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = .5519;

        function roundValues(t) { bmRnd = t ? Math.round : function(t) { return t } }

        function styleDiv(t) { t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d" }

        function BMEnterFrameEvent(t, e, r, n) { this.type = t, this.currentTime = e, this.totalTime = r, this.direction = n < 0 ? -1 : 1 }

        function BMCompleteEvent(t, e) { this.type = t, this.direction = e < 0 ? -1 : 1 }

        function BMCompleteLoopEvent(t, e, r, n) { this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = n < 0 ? -1 : 1 }

        function BMSegmentStartEvent(t, e, r) { this.type = t, this.firstFrame = e, this.totalFrames = r }

        function BMDestroyEvent(t, e) { this.type = t, this.target = e }

        function BMRenderFrameErrorEvent(t, e) { this.type = "renderFrameError", this.nativeError = t, this.currentTime = e }

        function BMConfigErrorEvent(t) { this.type = "configError", this.nativeError = t }

        function BMAnimationConfigErrorEvent(t, e) { this.type = t, this.nativeError = e }
        roundValues(!1); var createElementID = (F = 0, function() { return idPrefix + "__lottie_element_" + (F += 1) }),
            F;

        function HSVtoRGB(t, e, r) { var n, i, a, o, s, l, h, c; switch (l = r * (1 - e), h = r * (1 - (s = 6 * t - (o = Math.floor(6 * t))) * e), c = r * (1 - (1 - s) * e), o % 6) {
                case 0:
                    n = r, i = c, a = l; break;
                case 1:
                    n = h, i = r, a = l; break;
                case 2:
                    n = l, i = r, a = c; break;
                case 3:
                    n = l, i = h, a = r; break;
                case 4:
                    n = c, i = l, a = r; break;
                case 5:
                    n = r, i = l, a = h } return [n, i, a] }

        function RGBtoHSV(t, e, r) { var n, i = Math.max(t, e, r),
                a = Math.min(t, e, r),
                o = i - a,
                s = 0 === i ? 0 : o / i,
                l = i / 255; switch (i) {
                case a:
                    n = 0; break;
                case t:
                    n = e - r + o * (e < r ? 6 : 0), n /= 6 * o; break;
                case e:
                    n = r - t + 2 * o, n /= 6 * o; break;
                case r:
                    n = t - e + 4 * o, n /= 6 * o } return [n, s, l] }

        function addSaturationToRGB(t, e) { var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return r[1] += e, 1 < r[1] ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]) }

        function addBrightnessToRGB(t, e) { var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return r[2] += e, 1 < r[2] ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]) }

        function addHueToRGB(t, e) { var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]); return r[0] += e / 360, 1 < r[0] ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]) } var rgbToHex = function() { var t, e, r = []; for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 === e.length ? "0" + e : e; return function(t, e, n) { return t < 0 && (t = 0), e < 0 && (e = 0), n < 0 && (n = 0), "#" + r[t] + r[e] + r[n] } }();

        function BaseEvent() {}
        BaseEvent.prototype = { triggerEvent: function(t, e) { if (this._cbs[t])
                    for (var r = this._cbs[t], n = 0; n < r.length; n += 1) r[n](e) }, addEventListener: function(t, e) { return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                    function() { this.removeEventListener(t, e) }.bind(this) }, removeEventListener: function(t, e) { if (e) { if (this._cbs[t]) { for (var r = 0, n = this._cbs[t].length; r < n;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, n -= 1), r += 1;
                        this._cbs[t].length || (this._cbs[t] = null) } } else this._cbs[t] = null } }; var createTypedArray = function() {
            function t(t, e) { var r, n = 0,
                    i = []; switch (t) {
                    case "int16":
                    case "uint8c":
                        r = 1; break;
                    default:
                        r = 1.1 } for (n = 0; n < e; n += 1) i.push(r); return i } return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) { return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r) } : t }();

        function createSizedArray(t) { return Array.apply(null, { length: t }) }

        function createNS(t) { return document.createElementNS(svgNS, t) }

        function createTag(t) { return document.createElement(t) }

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = { addDynamicProperty: function(t) {-1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0) }, iterateDynamicProperties: function() { var t;
                this._mdf = !1; var e = this.dynamicProperties.length; for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0) }, initDynamicPropertyContainer: function(t) { this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1 } }; var getBlendMode = (Oa = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }, function(t) { return Oa[t] || "" }),
            Oa, lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
            lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" },
            Matrix = function() { var t = Math.cos,
                    e = Math.sin,
                    r = Math.tan,
                    n = Math.round;

                function i() { return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this }

                function a(r) { if (0 === r) return this; var n = t(r),
                        i = e(r); return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) }

                function o(r) { if (0 === r) return this; var n = t(r),
                        i = e(r); return this._t(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1) }

                function s(r) { if (0 === r) return this; var n = t(r),
                        i = e(r); return this._t(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1) }

                function l(r) { if (0 === r) return this; var n = t(r),
                        i = e(r); return this._t(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) }

                function h(t, e) { return this._t(1, e, t, 1, 0, 0) }

                function c(t, e) { return this.shear(r(t), r(e)) }

                function u(n, i) { var a = t(i),
                        o = e(i); return this._t(a, o, 0, 0, -o, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(n), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -o, 0, 0, o, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) }

                function f(t, e, r) { return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1) }

                function p(t, e, r, n, i, a, o, s, l, h, c, u, f, p, d, m) { return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = n, this.props[4] = i, this.props[5] = a, this.props[6] = o, this.props[7] = s, this.props[8] = l, this.props[9] = h, this.props[10] = c, this.props[11] = u, this.props[12] = f, this.props[13] = p, this.props[14] = d, this.props[15] = m, this }

                function d(t, e, r) { return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this }

                function m(t, e, r, n, i, a, o, s, l, h, c, u, f, p, d, m) { var v = this.props; if (1 === t && 0 === e && 0 === r && 0 === n && 0 === i && 1 === a && 0 === o && 0 === s && 0 === l && 0 === h && 1 === c && 0 === u) return v[12] = v[12] * t + v[15] * f, v[13] = v[13] * a + v[15] * p, v[14] = v[14] * c + v[15] * d, v[15] *= m, this._identityCalculated = !1, this; var y = v[0],
                        g = v[1],
                        E = v[2],
                        b = v[3],
                        _ = v[4],
                        x = v[5],
                        T = v[6],
                        S = v[7],
                        I = v[8],
                        A = v[9],
                        P = v[10],
                        w = v[11],
                        C = v[12],
                        D = v[13],
                        M = v[14],
                        O = v[15]; return v[0] = y * t + g * i + E * l + b * f, v[1] = y * e + g * a + E * h + b * p, v[2] = y * r + g * o + E * c + b * d, v[3] = y * n + g * s + E * u + b * m, v[4] = _ * t + x * i + T * l + S * f, v[5] = _ * e + x * a + T * h + S * p, v[6] = _ * r + x * o + T * c + S * d, v[7] = _ * n + x * s + T * u + S * m, v[8] = I * t + A * i + P * l + w * f, v[9] = I * e + A * a + P * h + w * p, v[10] = I * r + A * o + P * c + w * d, v[11] = I * n + A * s + P * u + w * m, v[12] = C * t + D * i + M * l + O * f, v[13] = C * e + D * a + M * h + O * p, v[14] = C * r + D * o + M * c + O * d, v[15] = C * n + D * s + M * u + O * m, this._identityCalculated = !1, this }

                function v() { return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity }

                function y(t) { for (var e = 0; e < 16;) { if (t.props[e] !== this.props[e]) return !1;
                        e += 1 } return !0 }

                function g(t) { var e; for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]; return t }

                function E(t) { var e; for (e = 0; e < 16; e += 1) this.props[e] = t[e] }

                function b(t, e, r) { return { x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14] } }

                function _(t, e, r) { return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12] }

                function x(t, e, r) { return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13] }

                function T(t, e, r) { return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14] }

                function S() { var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                        e = this.props[5] / t,
                        r = -this.props[1] / t,
                        n = -this.props[4] / t,
                        i = this.props[0] / t,
                        a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                        o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                        s = new Matrix; return s.props[0] = e, s.props[1] = r, s.props[4] = n, s.props[5] = i, s.props[12] = a, s.props[13] = o, s }

                function I(t) { return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0) }

                function A(t) { var e, r = t.length,
                        n = []; for (e = 0; e < r; e += 1) n[e] = I(t[e]); return n }

                function P(t, e, r) { var n = createTypedArray("float32", 6); if (this.isIdentity()) n[0] = t[0], n[1] = t[1], n[2] = e[0], n[3] = e[1], n[4] = r[0], n[5] = r[1];
                    else { var i = this.props[0],
                            a = this.props[1],
                            o = this.props[4],
                            s = this.props[5],
                            l = this.props[12],
                            h = this.props[13];
                        n[0] = t[0] * i + t[1] * o + l, n[1] = t[0] * a + t[1] * s + h, n[2] = e[0] * i + e[1] * o + l, n[3] = e[0] * a + e[1] * s + h, n[4] = r[0] * i + r[1] * o + l, n[5] = r[0] * a + r[1] * s + h } return n }

                function w(t, e, r) { return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]] }

                function C(t, e) { if (this.isIdentity()) return t + "," + e; var r = this.props; return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100 }

                function D() { for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += n(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1; return r }

                function M(t) { return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? n(1e4 * t) / 1e4 : t }

                function O() { var t = this.props; return "matrix(" + M(t[0]) + "," + M(t[1]) + "," + M(t[4]) + "," + M(t[5]) + "," + M(t[12]) + "," + M(t[13]) + ")" } return function() { this.reset = i, this.rotate = a, this.rotateX = o, this.rotateY = s, this.rotateZ = l, this.skew = c, this.skewFromAxis = u, this.shear = h, this.scale = f, this.setTransform = p, this.translate = d, this.transform = m, this.applyToPoint = b, this.applyToX = _, this.applyToY = x, this.applyToZ = T, this.applyToPointArray = w, this.applyToTriplePoints = P, this.applyToPointStringified = C, this.toCSS = D, this.to2dCSS = O, this.clone = g, this.cloneFromProps = E, this.equals = y, this.inversePoints = A, this.inversePoint = I, this.getInverseMatrix = S, this._t = this.transform, this.isIdentity = v, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset() } }();! function(t, e) { var r, n = this,
                i = 256,
                a = "random",
                o = e.pow(i, 6),
                s = e.pow(2, 52),
                l = 2 * s,
                h = i - 1;

            function c(t) { var e, r = t.length,
                    n = this,
                    a = 0,
                    o = n.i = n.j = 0,
                    s = n.S = []; for (r || (t = [r++]); a < i;) s[a] = a++; for (a = 0; a < i; a++) s[a] = s[o = h & o + t[a % r] + (e = s[a])], s[o] = e;
                n.g = function(t) { for (var e, r = 0, a = n.i, o = n.j, s = n.S; t--;) e = s[a = h & a + 1], r = r * i + s[h & (s[a] = s[o = h & o + e]) + (s[o] = e)]; return n.i = a, n.j = o, r } }

            function u(t, e) { return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e }

            function f(t, e) { for (var r, n = t + "", i = 0; i < n.length;) e[h & i] = h & (r ^= 19 * e[h & i]) + n.charCodeAt(i++); return p(e) }

            function p(t) { return String.fromCharCode.apply(0, t) }
            e["seed" + a] = function(h, d, m) { var v = [],
                    y = f(function t(e, r) { var n, i = [],
                            a = typeof e; if (r && "object" == a)
                            for (n in e) try { i.push(t(e[n], r - 1)) } catch (t) {}
                        return i.length ? i : "string" == a ? e : e + "\0" }((d = !0 === d ? { entropy: !0 } : d || {}).entropy ? [h, p(t)] : null === h ? function() { try { r; var e = new Uint8Array(i); return (n.crypto || n.msCrypto).getRandomValues(e), p(e) } catch (e) { var a = n.navigator,
                                o = a && a.plugins; return [+new Date, n, o, n.screen, p(t)] } }() : h, 3), v),
                    g = new c(v),
                    E = function() { for (var t = g.g(6), e = o, r = 0; t < s;) t = (t + r) * i, e *= i, r = g.g(1); for (; l <= t;) t /= 2, e /= 2, r >>>= 1; return (t + r) / e }; return E.int32 = function() { return 0 | g.g(4) }, E.quick = function() { return g.g(4) / 4294967296 }, E.double = E, f(p(g.S), t), (d.pass || m || function(t, r, n, i) { return i && (i.S && u(i, g), t.state = function() { return u(g, {}) }), n ? (e[a] = t, r) : t })(E, y, "global" in d ? d.global : this == e, d.state) }, f(e.random(), t) }([], BMMath); var BezierFactory = function() { var t = { getBezierEasing: function(t, r, n, i, a) { var o = a || ("bez_" + t + "_" + r + "_" + n + "_" + i).replace(/\./g, "p"); if (e[o]) return e[o]; var s = new c([t, r, n, i]); return e[o] = s } },
                e = {},
                r = 11,
                n = 1 / (r - 1),
                i = "function" == typeof Float32Array;

            function a(t, e) { return 1 - 3 * e + 3 * t }

            function o(t, e) { return 3 * e - 6 * t }

            function s(t) { return 3 * t }

            function l(t, e, r) { return ((a(e, r) * t + o(e, r)) * t + s(e)) * t }

            function h(t, e, r) { return 3 * a(e, r) * t * t + 2 * o(e, r) * t + s(e) }

            function c(t) { this._p = t, this._mSampleValues = i ? new Float32Array(r) : new Array(r), this._precomputed = !1, this.get = this.get.bind(this) } return c.prototype = { get: function(t) { var e = this._p[0],
                        r = this._p[1],
                        n = this._p[2],
                        i = this._p[3]; return this._precomputed || this._precompute(), e === r && n === i ? t : 0 === t ? 0 : 1 === t ? 1 : l(this._getTForX(t), r, i) }, _precompute: function() { var t = this._p[0],
                        e = this._p[1],
                        r = this._p[2],
                        n = this._p[3];
                    this._precomputed = !0, t === e && r === n || this._calcSampleValues() }, _calcSampleValues: function() { for (var t = this._p[0], e = this._p[2], i = 0; i < r; ++i) this._mSampleValues[i] = l(i * n, t, e) }, _getTForX: function(t) { for (var e = this._p[0], i = this._p[2], a = this._mSampleValues, o = 0, s = 1, c = r - 1; s !== c && a[s] <= t; ++s) o += n; var u = o + (t - a[--s]) / (a[s + 1] - a[s]) * n,
                        f = h(u, e, i); return .001 <= f ? function(t, e, r, n) { for (var i = 0; i < 4; ++i) { var a = h(e, r, n); if (0 === a) return e;
                            e -= (l(e, r, n) - t) / a } return e }(t, u, e, i) : 0 === f ? u : function(t, e, r, n, i) { for (var a, o, s = 0; 0 < (a = l(o = e + (r - e) / 2, n, i) - t) ? r = o : e = o, 1e-7 < Math.abs(a) && ++s < 10;); return o }(t, o, o + n, e, i) } }, t }();

        function extendPrototype(t, e) { var r, n, i = t.length; for (r = 0; r < i; r += 1)
                for (var a in n = t[r].prototype) Object.prototype.hasOwnProperty.call(n, a) && (e.prototype[a] = n[a]) }

        function getDescriptor(t, e) { return Object.getOwnPropertyDescriptor(t, e) }

        function createProxyFunction(t) {
            function e() {} return e.prototype = t, e }

        function bezFunction() { var t = Math;

            function e(t, e, r, n, i, a) { var o = t * n + e * i + r * a - i * n - a * t - r * e; return -.001 < o && o < .001 } var r = function(t, e, r, n) { var i, a, o, s, l, h, c = defaultCurveSegments,
                    u = 0,
                    f = [],
                    p = [],
                    d = bezierLengthPool.newElement(); for (o = r.length, i = 0; i < c; i += 1) { for (l = i / (c - 1), a = h = 0; a < o; a += 1) s = bmPow(1 - l, 3) * t[a] + 3 * bmPow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bmPow(l, 2) * n[a] + bmPow(l, 3) * e[a], f[a] = s, null !== p[a] && (h += bmPow(f[a] - p[a], 2)), p[a] = f[a];
                    h && (u += h = bmSqrt(h)), d.percents[i] = l, d.lengths[i] = u } return d.addedLength = u, d };

            function n(t) { this.segmentLength = 0, this.points = new Array(t) }

            function i(t, e) { this.partialLength = t, this.point = e } var a, o = (a = {}, function(t, r, o, s) { var l = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + o[0] + "_" + o[1] + "_" + s[0] + "_" + s[1]).replace(/\./g, "p"); if (!a[l]) { var h, c, u, f, p, d, m, v = defaultCurveSegments,
                        y = 0,
                        g = null;
                    2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + o[0], t[1] + o[1]) && e(t[0], t[1], r[0], r[1], r[0] + s[0], r[1] + s[1]) && (v = 2); var E = new n(v); for (u = o.length, h = 0; h < v; h += 1) { for (m = createSizedArray(u), p = h / (v - 1), c = d = 0; c < u; c += 1) f = bmPow(1 - p, 3) * t[c] + 3 * bmPow(1 - p, 2) * p * (t[c] + o[c]) + 3 * (1 - p) * bmPow(p, 2) * (r[c] + s[c]) + bmPow(p, 3) * r[c], m[c] = f, null !== g && (d += bmPow(m[c] - g[c], 2));
                        y += d = bmSqrt(d), E.points[h] = new i(d, m), g = m }
                    E.segmentLength = y, a[l] = E } return a[l] });

            function s(t, e) { var r = e.percents,
                    n = e.lengths,
                    i = r.length,
                    a = bmFloor((i - 1) * t),
                    o = t * e.addedLength,
                    s = 0; if (a === i - 1 || 0 === a || o === n[a]) return r[a]; for (var l = n[a] > o ? -1 : 1, h = !0; h;)
                    if (n[a] <= o && n[a + 1] > o ? (s = (o - n[a]) / (n[a + 1] - n[a]), h = !1) : a += l, a < 0 || i - 1 <= a) { if (a === i - 1) return r[a];
                        h = !1 }
                return r[a] + (r[a + 1] - r[a]) * s } var l = createTypedArray("float32", 8); return { getSegmentsLength: function(t) { var e, n = segmentsLengthPool.newElement(),
                        i = t.c,
                        a = t.v,
                        o = t.o,
                        s = t.i,
                        l = t._length,
                        h = n.lengths,
                        c = 0; for (e = 0; e < l - 1; e += 1) h[e] = r(a[e], a[e + 1], o[e], s[e + 1]), c += h[e].addedLength; return i && l && (h[e] = r(a[e], a[0], o[e], s[0]), c += h[e].addedLength), n.totalLength = c, n }, getNewSegment: function(e, r, n, i, a, o, h) { a < 0 ? a = 0 : 1 < a && (a = 1); var c, u = s(a, h),
                        f = s(o = 1 < o ? 1 : o, h),
                        p = e.length,
                        d = 1 - u,
                        m = 1 - f,
                        v = d * d * d,
                        y = u * d * d * 3,
                        g = u * u * d * 3,
                        E = u * u * u,
                        b = d * d * m,
                        _ = u * d * m + d * u * m + d * d * f,
                        x = u * u * m + d * u * f + u * d * f,
                        T = u * u * f,
                        S = d * m * m,
                        I = u * m * m + d * f * m + d * m * f,
                        A = u * f * m + d * f * f + u * m * f,
                        P = u * f * f,
                        w = m * m * m,
                        C = f * m * m + m * f * m + m * m * f,
                        D = f * f * m + m * f * f + f * m * f,
                        M = f * f * f; for (c = 0; c < p; c += 1) l[4 * c] = t.round(1e3 * (v * e[c] + y * n[c] + g * i[c] + E * r[c])) / 1e3, l[4 * c + 1] = t.round(1e3 * (b * e[c] + _ * n[c] + x * i[c] + T * r[c])) / 1e3, l[4 * c + 2] = t.round(1e3 * (S * e[c] + I * n[c] + A * i[c] + P * r[c])) / 1e3, l[4 * c + 3] = t.round(1e3 * (w * e[c] + C * n[c] + D * i[c] + M * r[c])) / 1e3; return l }, getPointInSegment: function(e, r, n, i, a, o) { var l = s(a, o),
                        h = 1 - l; return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * n[0] + (l * l * h + h * l * l + l * h * l) * i[0] + l * l * l * r[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * n[1] + (l * l * h + h * l * l + l * h * l) * i[1] + l * l * l * r[1])) / 1e3] }, buildBezierData: o, pointOnLine2D: e, pointOnLine3D: function(r, n, i, a, o, s, l, h, c) { if (0 === i && 0 === s && 0 === c) return e(r, n, a, o, l, h); var u, f = t.sqrt(t.pow(a - r, 2) + t.pow(o - n, 2) + t.pow(s - i, 2)),
                        p = t.sqrt(t.pow(l - r, 2) + t.pow(h - n, 2) + t.pow(c - i, 2)),
                        d = t.sqrt(t.pow(l - a, 2) + t.pow(h - o, 2) + t.pow(c - s, 2)); return -1e-4 < (u = p < f ? d < f ? f - p - d : d - p - f : p < d ? d - p - f : p - f - d) && u < 1e-4 } } }! function() { for (var t = 0, e = ["ms", "moz", "webkit", "o"], r = 0; r < e.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[e[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[r] + "CancelAnimationFrame"] || window[e[r] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e) { var r = (new Date).getTime(),
                    n = Math.max(0, 16 - (r - t)),
                    i = setTimeout(function() { e(r + n) }, n); return t = r + n, i }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) { clearTimeout(t) }) }(); var bez = bezFunction();

        function dataFunctionManager() {
            function t(i, a, o) { var s, l, h, u, f, p, d = i.length; for (l = 0; l < d; l += 1)
                    if ("ks" in (s = i[l]) && !s.completed) { if (s.completed = !0, s.tt && (i[l - 1].td = s.tt), s.hasMask) { var m = s.masksProperties; for (u = m.length, h = 0; h < u; h += 1)
                                if (m[h].pt.k.i) n(m[h].pt.k);
                                else
                                    for (p = m[h].pt.k.length, f = 0; f < p; f += 1) m[h].pt.k[f].s && n(m[h].pt.k[f].s[0]), m[h].pt.k[f].e && n(m[h].pt.k[f].e[0]) }
                        0 === s.ty ? (s.layers = e(s.refId, a), t(s.layers, a, o)) : 4 === s.ty ? r(s.shapes) : 5 === s.ty && c(s) } }

            function e(t, e) { for (var r = 0, n = e.length; r < n;) { if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, e[r].layers);
                    r += 1 } return null }

            function r(t) { var e, i, a; for (e = t.length - 1; 0 <= e; e -= 1)
                    if ("sh" === t[e].ty)
                        if (t[e].ks.k.i) n(t[e].ks.k);
                        else
                            for (a = t[e].ks.k.length, i = 0; i < a; i += 1) t[e].ks.k[i].s && n(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && n(t[e].ks.k[i].e[0]);
                else "gr" === t[e].ty && r(t[e].it) }

            function n(t) { var e, r = t.i.length; for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1] }

            function i(t, e) { var r = e ? e.split(".") : [100, 100, 100]; return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null)) } var a, o = function() { var t = [4, 4, 14];

                    function e(t) { var e, r, n, i = t.length; for (e = 0; e < i; e += 1) 5 === t[e].ty && (n = (r = t[e]).t.d, r.t.d = { k: [{ s: n, t: 0 }] }) } return function(r) { if (i(t, r.v) && (e(r.layers), r.assets)) { var n, a = r.assets.length; for (n = 0; n < a; n += 1) r.assets[n].layers && e(r.assets[n].layers) } } }(),
                s = (a = [4, 7, 99], function(t) { if (t.chars && !i(a, t.v)) { var e, r, o, s, l, h = t.chars.length; for (e = 0; e < h; e += 1)
                            if (t.chars[e].data && t.chars[e].data.shapes)
                                for (o = (l = t.chars[e].data.shapes[0].it).length, r = 0; r < o; r += 1)(s = l[r].ks.k).__converted || (n(l[r].ks.k), s.__converted = !0) } }),
                l = function() { var t = [4, 1, 9];

                    function e(t) { var r, n, i, a = t.length; for (r = 0; r < a; r += 1)
                            if ("gr" === t[r].ty) e(t[r].it);
                            else if ("fl" === t[r].ty || "st" === t[r].ty)
                            if (t[r].c.k && t[r].c.k[0].i)
                                for (i = t[r].c.k.length, n = 0; n < i; n += 1) t[r].c.k[n].s && (t[r].c.k[n].s[0] /= 255, t[r].c.k[n].s[1] /= 255, t[r].c.k[n].s[2] /= 255, t[r].c.k[n].s[3] /= 255), t[r].c.k[n].e && (t[r].c.k[n].e[0] /= 255, t[r].c.k[n].e[1] /= 255, t[r].c.k[n].e[2] /= 255, t[r].c.k[n].e[3] /= 255);
                            else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255 }

                    function r(t) { var r, n = t.length; for (r = 0; r < n; r += 1) 4 === t[r].ty && e(t[r].shapes) } return function(e) { if (i(t, e.v) && (r(e.layers), e.assets)) { var n, a = e.assets.length; for (n = 0; n < a; n += 1) e.assets[n].layers && r(e.assets[n].layers) } } }(),
                h = function() { var t = [4, 4, 18];

                    function e(t) { var r, n, i; for (r = t.length - 1; 0 <= r; r -= 1)
                            if ("sh" === t[r].ty)
                                if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                                else
                                    for (i = t[r].ks.k.length, n = 0; n < i; n += 1) t[r].ks.k[n].s && (t[r].ks.k[n].s[0].c = t[r].closed), t[r].ks.k[n].e && (t[r].ks.k[n].e[0].c = t[r].closed);
                        else "gr" === t[r].ty && e(t[r].it) }

                    function r(t) { var r, n, i, a, o, s, l = t.length; for (n = 0; n < l; n += 1) { if ((r = t[n]).hasMask) { var h = r.masksProperties; for (a = h.length, i = 0; i < a; i += 1)
                                    if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl;
                                    else
                                        for (s = h[i].pt.k.length, o = 0; o < s; o += 1) h[i].pt.k[o].s && (h[i].pt.k[o].s[0].c = h[i].cl), h[i].pt.k[o].e && (h[i].pt.k[o].e[0].c = h[i].cl) }
                            4 === r.ty && e(r.shapes) } } return function(e) { if (i(t, e.v) && (r(e.layers), e.assets)) { var n, a = e.assets.length; for (n = 0; n < a; n += 1) e.assets[n].layers && r(e.assets[n].layers) } } }();

            function c(t) { 0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0) } var u = { completeData: function(e, r) { e.__complete || (l(e), o(e), s(e), h(e), t(e.layers, e.assets, r), e.__complete = !0) } }; return u.checkColors = l, u.checkChars = s, u.checkShapes = h, u.completeLayers = t, u } var dataManager = dataFunctionManager();

        function getFontProperties(t) { for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", n = "normal", i = e.length, a = 0; a < i; a += 1) switch (e[a].toLowerCase()) {
                case "italic":
                    n = "italic"; break;
                case "bold":
                    r = "700"; break;
                case "black":
                    r = "900"; break;
                case "medium":
                    r = "500"; break;
                case "regular":
                case "normal":
                    r = "400"; break;
                case "light":
                case "thin":
                    r = "200" }
            return { style: n, weight: t.fWeight || r } } var FontManager = function() { var t = { w: 0, size: 0, shapes: [] },
                    e = [];
                e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]); var r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                    n = [65039, 8205];

                function i(t, e) { var r = createTag("span");
                    r.setAttribute("aria-hidden", !0), r.style.fontFamily = e; var n = createTag("span");
                    n.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(n), document.body.appendChild(r); var i = n.offsetWidth; return n.style.fontFamily = function(t) { var e, r = t.split(","),
                            n = r.length,
                            i = []; for (e = 0; e < n; e += 1) "sans-serif" !== r[e] && "monospace" !== r[e] && i.push(r[e]); return i.join(",") }(t) + ", " + e, { node: n, w: i, parent: r } }

                function a(t, e) { var r = createNS("text");
                    r.style.fontSize = "100px"; var n = getFontProperties(e); return r.setAttribute("font-family", e.fFamily), r.setAttribute("font-style", n.style), r.setAttribute("font-weight", n.weight), r.textContent = "1", e.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", e.fClass)) : r.style.fontFamily = e.fFamily, t.appendChild(r), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, r } var o = function() { this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this) }; return o.isModifier = function(t, e) { var n = t.toString(16) + e.toString(16); return -1 !== r.indexOf(n) }, o.isZeroWidthJoiner = function(t, e) { return e ? t === n[0] && e === n[1] : t === n[1] }, o.isCombinedCharacter = function(t) { return -1 !== e.indexOf(t) }, o.prototype = { addChars: function(t) { if (t) { var e;
                            this.chars || (this.chars = []); var r, n, i = t.length,
                                a = this.chars.length; for (e = 0; e < i; e += 1) { for (r = 0, n = !1; r < a;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (n = !0), r += 1;
                                n || (this.chars.push(t[e]), a += 1) } } }, addFonts: function(t, e) { if (t) { if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list); var r, n = t.list,
                                o = n.length,
                                s = o; for (r = 0; r < o; r += 1) { var l, h, c = !0; if (n[r].loaded = !1, n[r].monoCase = i(n[r].fFamily, "monospace"), n[r].sansCase = i(n[r].fFamily, "sans-serif"), n[r].fPath) { if ("p" === n[r].fOrigin || 3 === n[r].origin) { if (0 < (l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[r].fFamily + '"], style[f-origin="3"][f-family="' + n[r].fFamily + '"]')).length && (c = !1), c) { var u = createTag("style");
                                            u.setAttribute("f-forigin", n[r].fOrigin), u.setAttribute("f-origin", n[r].origin), u.setAttribute("f-family", n[r].fFamily), u.type = "text/css", u.innerText = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}", e.appendChild(u) } } else if ("g" === n[r].fOrigin || 1 === n[r].origin) { for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) - 1 !== l[h].href.indexOf(n[r].fPath) && (c = !1); if (c) { var f = createTag("link");
                                            f.setAttribute("f-forigin", n[r].fOrigin), f.setAttribute("f-origin", n[r].origin), f.type = "text/css", f.rel = "stylesheet", f.href = n[r].fPath, document.body.appendChild(f) } } else if ("t" === n[r].fOrigin || 2 === n[r].origin) { for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) n[r].fPath === l[h].src && (c = !1); if (c) { var p = createTag("link");
                                            p.setAttribute("f-forigin", n[r].fOrigin), p.setAttribute("f-origin", n[r].origin), p.setAttribute("rel", "stylesheet"), p.setAttribute("href", n[r].fPath), e.appendChild(p) } } } else n[r].loaded = !0, s -= 1;
                                n[r].helper = a(e, n[r]), n[r].cache = {}, this.fonts.push(n[r]) }
                            0 === s ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100) } else this.isLoaded = !0 }, getCharData: function(e, r, n) { for (var i = 0, a = this.chars.length; i < a;) { if (this.chars[i].ch === e && this.chars[i].style === r && this.chars[i].fFamily === n) return this.chars[i];
                            i += 1 } return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, r, n)), t }, getFontByName: function(t) { for (var e = 0, r = this.fonts.length; e < r;) { if (this.fonts[e].fName === t) return this.fonts[e];
                            e += 1 } return this.fonts[0] }, measureText: function(t, e, r) { var n = this.getFontByName(e),
                            i = t.charCodeAt(0); if (!n.cache[i + 1]) { var a = n.helper; if (" " === t) { a.textContent = "|" + t + "|"; var o = a.getComputedTextLength();
                                a.textContent = "||"; var s = a.getComputedTextLength();
                                n.cache[i + 1] = (o - s) / 100 } else a.textContent = t, n.cache[i + 1] = a.getComputedTextLength() / 100 } return n.cache[i + 1] * r }, checkLoadedFonts: function() { var t, e, r, n = this.fonts.length,
                            i = n; for (t = 0; t < n; t += 1) this.fonts[t].loaded ? i -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (i -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (i -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                        0 !== i && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10) }, setIsLoaded: function() { this.isLoaded = !0 } }, o }(),
            PropertyFactory = function() { var t = initialDefaultFrame,
                    e = Math.abs;

                function r(t, e) { var r, i = this.offsetTime; "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length)); for (var a, o, s, l, h, c, u, f, p = e.lastIndex, d = p, m = this.keyframes.length - 1, v = !0; v;) { if (a = this.keyframes[d], o = this.keyframes[d + 1], d === m - 1 && t >= o.t - i) { a.h && (a = o), p = 0; break } if (o.t - i > t) { p = d; break }
                        d < m - 1 ? d += 1 : (p = 0, v = !1) } var y, g, E, b, _, x, T, S, I, A, P = o.t - i,
                        w = a.t - i; if (a.to) { a.bezierData || (a.bezierData = bez.buildBezierData(a.s, o.s || a.e, a.to, a.ti)); var C = a.bezierData; if (P <= t || t < w) { var D = P <= t ? C.points.length - 1 : 0; for (l = C.points[D].point.length, s = 0; s < l; s += 1) r[s] = C.points[D].point[s] } else { a.__fnct ? f = a.__fnct : (f = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = f), h = f((t - w) / (P - w)); var M, O = C.segmentLength * h,
                                R = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0; for (u = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, v = !0, c = C.points.length; v;) { if (R += C.points[u].partialLength, 0 === O || 0 === h || u === C.points.length - 1) { for (l = C.points[u].point.length, s = 0; s < l; s += 1) r[s] = C.points[u].point[s]; break } if (R <= O && O < R + C.points[u + 1].partialLength) { for (M = (O - R) / C.points[u + 1].partialLength, l = C.points[u].point.length, s = 0; s < l; s += 1) r[s] = C.points[u].point[s] + (C.points[u + 1].point[s] - C.points[u].point[s]) * M; break }
                                u < c - 1 ? u += 1 : v = !1 }
                            e._lastPoint = u, e._lastAddedLength = R - C.points[u].partialLength, e._lastKeyframeIndex = d } } else { var k, F, L, N, V; if (m = a.s.length, y = o.s || a.e, this.sh && 1 !== a.h)
                            if (P <= t) r[0] = y[0], r[1] = y[1], r[2] = y[2];
                            else if (t <= w) r[0] = a.s[0], r[1] = a.s[1], r[2] = a.s[2];
                        else { g = r, b = (E = function(t, e, r) { var n, i, a, o, s, l = [],
                                    h = t[0],
                                    c = t[1],
                                    u = t[2],
                                    f = t[3],
                                    p = e[0],
                                    d = e[1],
                                    m = e[2],
                                    v = e[3]; return (i = h * p + c * d + u * m + f * v) < 0 && (i = -i, p = -p, d = -d, m = -m, v = -v), s = 1e-6 < 1 - i ? (n = Math.acos(i), a = Math.sin(n), o = Math.sin((1 - r) * n) / a, Math.sin(r * n) / a) : (o = 1 - r, r), l[0] = o * h + s * p, l[1] = o * c + s * d, l[2] = o * u + s * m, l[3] = o * f + s * v, l }(n(a.s), n(y), (t - w) / (P - w)))[0], _ = E[1], x = E[2], T = E[3], S = Math.atan2(2 * _ * T - 2 * b * x, 1 - 2 * _ * _ - 2 * x * x), I = Math.asin(2 * b * _ + 2 * x * T), A = Math.atan2(2 * b * T - 2 * _ * x, 1 - 2 * b * b - 2 * x * x), g[0] = S / degToRads, g[1] = I / degToRads, g[2] = A / degToRads } else
                            for (d = 0; d < m; d += 1) 1 !== a.h && (h = P <= t ? 1 : t < w ? 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[d] ? f = a.__fnct[d] : (k = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d], F = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d], L = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d], N = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d], f = BezierFactory.getBezierEasing(k, F, L, N).get, a.__fnct[d] = f)) : a.__fnct ? f = a.__fnct : (k = a.o.x, F = a.o.y, L = a.i.x, N = a.i.y, f = BezierFactory.getBezierEasing(k, F, L, N).get, a.__fnct = f), f((t - w) / (P - w)))), y = o.s || a.e, V = 1 === a.h ? a.s[d] : a.s[d] + (y[d] - a.s[d]) * h, "multidimensional" === this.propType ? r[d] = V : r = V } return e.lastIndex = p, r }

                function n(t) { var e = t[0] * degToRads,
                        r = t[1] * degToRads,
                        n = t[2] * degToRads,
                        i = Math.cos(e / 2),
                        a = Math.cos(r / 2),
                        o = Math.cos(n / 2),
                        s = Math.sin(e / 2),
                        l = Math.sin(r / 2),
                        h = Math.sin(n / 2); return [s * l * o + i * a * h, s * a * o + i * l * h, i * l * o - s * a * h, i * a * o - s * l * h] }

                function i() { var e = this.comp.renderedFrame - this.offsetTime,
                        r = this.keyframes[0].t - this.offsetTime,
                        n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime; if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= n && n <= e || this._caching.lastFrame < r && e < r))) { this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0); var i = this.interpolateValue(e, this._caching);
                        this.pv = i } return this._caching.lastFrame = e, this.pv }

                function a(t) { var r; if ("unidimensional" === this.propType) r = t * this.mult, 1e-5 < e(this.v - r) && (this.v = r, this._mdf = !0);
                    else
                        for (var n = 0, i = this.v.length; n < i;) r = t[n] * this.mult, 1e-5 < e(this.v[n] - r) && (this.v[n] = r, this._mdf = !0), n += 1 }

                function o() { if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else { var t;
                            this.lock = !0, this._mdf = this._isFirstFrame; var e = this.effectsSequence.length,
                                r = this.kf ? this.pv : this.data.k; for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                            this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId } }

                function s(t) { this.effectsSequence.push(t), this.container.addDynamicProperty(this) }

                function l(t, e, r, n) { this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = o, this.setVValue = a, this.addEffect = s }

                function h(t, e, r, n) { var i;
                    this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = n, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1; var l = e.k.length; for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), this.vel = createTypedArray("float32", l), i = 0; i < l; i += 1) this.v[i] = e.k[i] * this.mult, this.pv[i] = e.k[i];
                    this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = o, this.setVValue = a, this.addEffect = s }

                function c(e, n, l, h) { this.propType = "unidimensional", this.keyframes = n.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = { lastFrame: t, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = !0, this.kf = !0, this.data = n, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = o, this.setVValue = a, this.interpolateValue = r, this.effectsSequence = [i.bind(this)], this.addEffect = s }

                function u(e, n, l, h) { var c;
                    this.propType = "multidimensional"; var u, f, p, d, m = n.k.length; for (c = 0; c < m - 1; c += 1) n.k[c].to && n.k[c].s && n.k[c + 1] && n.k[c + 1].s && (u = n.k[c].s, f = n.k[c + 1].s, p = n.k[c].to, d = n.k[c].ti, (2 === u.length && (u[0] !== f[0] || u[1] !== f[1]) && bez.pointOnLine2D(u[0], u[1], f[0], f[1], u[0] + p[0], u[1] + p[1]) && bez.pointOnLine2D(u[0], u[1], f[0], f[1], f[0] + d[0], f[1] + d[1]) || 3 === u.length && (u[0] !== f[0] || u[1] !== f[1] || u[2] !== f[2]) && bez.pointOnLine3D(u[0], u[1], u[2], f[0], f[1], f[2], u[0] + p[0], u[1] + p[1], u[2] + p[2]) && bez.pointOnLine3D(u[0], u[1], u[2], f[0], f[1], f[2], f[0] + d[0], f[1] + d[1], f[2] + d[2])) && (n.k[c].to = null, n.k[c].ti = null), u[0] === f[0] && u[1] === f[1] && 0 === p[0] && 0 === p[1] && 0 === d[0] && 0 === d[1] && (2 === u.length || u[2] === f[2] && 0 === p[2] && 0 === d[2]) && (n.k[c].to = null, n.k[c].ti = null));
                    this.effectsSequence = [i.bind(this)], this.data = n, this.keyframes = n.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.getValue = o, this.setVValue = a, this.interpolateValue = r, this.frameId = -1; var v = n.k[0].s.length; for (this.v = createTypedArray("float32", v), this.pv = createTypedArray("float32", v), c = 0; c < v; c += 1) this.v[c] = t, this.pv[c] = t;
                    this._caching = { lastFrame: t, lastIndex: 0, value: createTypedArray("float32", v) }, this.addEffect = s } return { getProp: function(t, e, r, n, i) { var a; if (e.k.length)
                            if ("number" == typeof e.k[0]) a = new h(t, e, n, i);
                            else switch (r) {
                                case 0:
                                    a = new c(t, e, n, i); break;
                                case 1:
                                    a = new u(t, e, n, i) } else a = new l(t, e, n, i);
                        return a.effectsSequence.length && i.addDynamicProperty(a), a } } }(),
            TransformPropertyFactory = function() { var t = [0, 0];

                function e(t, e, r) { if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || { k: [0, 0, 0] }, 1, 0, this), e.rx) { if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) { var n, i = e.or.k.length; for (n = 0; n < i; n += 1) e.or.k[n].to = null, e.or.k[n].ti = null }
                        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0 } else this.r = PropertyFactory.getProp(t, e.r || { k: 0 }, 0, degToRads, this);
                    e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || { k: [100, 100, 100] }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = { _mdf: !1, v: 1 }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0) } return e.prototype = { applyToMatrix: function(t) { var e = this._mdf;
                        this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]) }, getValue: function(e) { if (this.elem.globalData.frameId !== this.frameId) { if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) { var r; if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) { var n, i; if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) i = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (n = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (n = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (n = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) { n = [], i = []; var a = this.px,
                                            o = this.py;
                                        a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (n[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), n[1] = o.getValueAtTime((o.keyframes[0].t + .01) / r, 0), i[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), i[1] = o.getValueAtTime(o.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (n[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), n[1] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / r, 0), i[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0), i[1] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - .01) / r, 0)) : (n = [a.pv, o.pv], i[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime), i[1] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - .01) / r, o.offsetTime)) } else n = i = t;
                                    this.v.rotate(-Math.atan2(n[1] - i[1], n[0] - i[0])) }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]) }
                            this.frameId = this.elem.globalData.frameId } }, precalculateMatrix: function() { if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) { if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) { if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3 }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4) } }, autoOrient: function() {} }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) { this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0 }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(t, r, n) { return new e(t, r, n) } } }();

        function ShapePath() { this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength) }
        ShapePath.prototype.setPathData = function(t, e) { this.c = t, this.setLength(e); for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1 }, ShapePath.prototype.setLength = function(t) { for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t }, ShapePath.prototype.doubleArrayLength = function() { this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2 }, ShapePath.prototype.setXYAt = function(t, e, r, n, i) { var a; switch (this._length = Math.max(this._length, n + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                case "v":
                    a = this.v; break;
                case "i":
                    a = this.i; break;
                case "o":
                    a = this.o; break;
                default:
                    a = [] }(!a[n] || a[n] && !i) && (a[n] = pointPool.newElement()), a[n][0] = t, a[n][1] = e }, ShapePath.prototype.setTripleAt = function(t, e, r, n, i, a, o, s) { this.setXYAt(t, e, "v", o, s), this.setXYAt(r, n, "o", o, s), this.setXYAt(i, a, "i", o, s) }, ShapePath.prototype.reverse = function() { var t = new ShapePath;
            t.setPathData(this.c, this._length); var e = this.v,
                r = this.o,
                n = this.i,
                i = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], n[0][0], n[0][1], r[0][0], r[0][1], 0, !1), i = 1); var a, o = this._length - 1,
                s = this._length; for (a = i; a < s; a += 1) t.setTripleAt(e[o][0], e[o][1], n[o][0], n[o][1], r[o][0], r[o][1], a, !1), o -= 1; return t }; var ShapePropertyFactory = function() { var t = -999999;

                function e(t, e, r) { var n, i, a, o, s, l, h, c, u, f = r.lastIndex,
                        p = this.keyframes; if (t < p[0].t - this.offsetTime) n = p[0].s[0], a = !0, f = 0;
                    else if (t >= p[p.length - 1].t - this.offsetTime) n = p[p.length - 1].s ? p[p.length - 1].s[0] : p[p.length - 2].e[0], a = !0;
                    else { for (var d, m, v = f, y = p.length - 1, g = !0; g && (d = p[v], !((m = p[v + 1]).t - this.offsetTime > t));) v < y - 1 ? v += 1 : g = !1; if (f = v, !(a = 1 === d.h)) { if (t >= m.t - this.offsetTime) c = 1;
                            else if (t < d.t - this.offsetTime) c = 0;
                            else { var E;
                                d.__fnct ? E = d.__fnct : (E = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = E), c = E((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime))) }
                            i = m.s ? m.s[0] : d.e[0] }
                        n = d.s[0] } for (l = e._length, h = n.i[0].length, r.lastIndex = f, o = 0; o < l; o += 1)
                        for (s = 0; s < h; s += 1) u = a ? n.i[o][s] : n.i[o][s] + (i.i[o][s] - n.i[o][s]) * c, e.i[o][s] = u, u = a ? n.o[o][s] : n.o[o][s] + (i.o[o][s] - n.o[o][s]) * c, e.o[o][s] = u, u = a ? n.v[o][s] : n.v[o][s] + (i.v[o][s] - n.v[o][s]) * c, e.v[o][s] = u }

                function r() { this.paths = this.localShapeCollection }

                function n(t) {
                    (function(t, e) { if (t._length !== e._length || t.c !== e.c) return !1; var r, n = t._length; for (r = 0; r < n; r += 1)
                            if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                        return !0 })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection) }

                function i() { if (this.elem.globalData.frameId !== this.frameId)
                        if (this.effectsSequence.length)
                            if (this.lock) this.setVValue(this.pv);
                            else { var t, e;
                                this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k; var r = this.effectsSequence.length; for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                                this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId }
                    else this._mdf = !1 }

                function a(t, e, n) { this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1; var i = 3 === n ? e.pt.k : e.ks.k;
                    this.v = shapePool.clone(i), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = [] }

                function o(t) { this.effectsSequence.push(t), this.container.addDynamicProperty(this) }

                function s(e, n, i) { this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === i ? n.pt.k : n.ks.k, this.k = !0, this.kf = !0; var a = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [function() { var e = this.comp.renderedFrame - this.offsetTime,
                            r = this.keyframes[0].t - this.offsetTime,
                            n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                            i = this._caching.lastFrame; return i !== t && (i < r && e < r || n < i && n < e) || (this._caching.lastIndex = i < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv }.bind(this)] }
                a.prototype.interpolateShape = e, a.prototype.getValue = i, a.prototype.setVValue = n, a.prototype.addEffect = o, s.prototype.getValue = i, s.prototype.interpolateShape = e, s.prototype.setVValue = n, s.prototype.addEffect = o; var l = function() { var t = roundCorner;

                        function e(t, e) { this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath()) } return e.prototype = { reset: r, getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath()) }, convertEllToPath: function() { var e = this.p.v[0],
                                    r = this.p.v[1],
                                    n = this.s.v[0] / 2,
                                    i = this.s.v[1] / 2,
                                    a = 3 !== this.d,
                                    o = this.v;
                                o.v[0][0] = e, o.v[0][1] = r - i, o.v[1][0] = a ? e + n : e - n, o.v[1][1] = r, o.v[2][0] = e, o.v[2][1] = r + i, o.v[3][0] = a ? e - n : e + n, o.v[3][1] = r, o.i[0][0] = a ? e - n * t : e + n * t, o.i[0][1] = r - i, o.i[1][0] = a ? e + n : e - n, o.i[1][1] = r - i * t, o.i[2][0] = a ? e + n * t : e - n * t, o.i[2][1] = r + i, o.i[3][0] = a ? e - n : e + n, o.i[3][1] = r + i * t, o.o[0][0] = a ? e + n * t : e - n * t, o.o[0][1] = r - i, o.o[1][0] = a ? e + n : e - n, o.o[1][1] = r + i * t, o.o[2][0] = a ? e - n * t : e + n * t, o.o[2][1] = r + i, o.o[3][0] = a ? e - n : e + n, o.o[3][1] = r - i * t } }, extendPrototype([DynamicPropertyContainer], e), e }(),
                    h = function() {
                        function t(t, e) { this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath()) } return t.prototype = { reset: r, getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath()) }, convertStarToPath: function() { var t, e, r, n, i = 2 * Math.floor(this.pt.v),
                                    a = 2 * Math.PI / i,
                                    o = !0,
                                    s = this.or.v,
                                    l = this.ir.v,
                                    h = this.os.v,
                                    c = this.is.v,
                                    u = 2 * Math.PI * s / (2 * i),
                                    f = 2 * Math.PI * l / (2 * i),
                                    p = -Math.PI / 2;
                                p += this.r.v; var d = 3 === this.data.d ? -1 : 1; for (t = this.v._length = 0; t < i; t += 1) { r = o ? h : c, n = o ? u : f; var m = (e = o ? s : l) * Math.cos(p),
                                        v = e * Math.sin(p),
                                        y = 0 === m && 0 === v ? 0 : v / Math.sqrt(m * m + v * v),
                                        g = 0 === m && 0 === v ? 0 : -m / Math.sqrt(m * m + v * v);
                                    m += +this.p.v[0], v += +this.p.v[1], this.v.setTripleAt(m, v, m - y * n * r * d, v - g * n * r * d, m + y * n * r * d, v + g * n * r * d, t, !0), o = !o, p += a * d } }, convertPolygonToPath: function() { var t, e = Math.floor(this.pt.v),
                                    r = 2 * Math.PI / e,
                                    n = this.or.v,
                                    i = this.os.v,
                                    a = 2 * Math.PI * n / (4 * e),
                                    o = .5 * -Math.PI,
                                    s = 3 === this.data.d ? -1 : 1; for (o += this.r.v, t = this.v._length = 0; t < e; t += 1) { var l = n * Math.cos(o),
                                        h = n * Math.sin(o),
                                        c = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                        u = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                    l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - c * a * i * s, h - u * a * i * s, l + c * a * i * s, h + u * a * i * s, t, !0), o += r * s }
                                this.paths.length = 0, this.paths[0] = this.v } }, extendPrototype([DynamicPropertyContainer], t), t }(),
                    c = function() {
                        function t(t, e) { this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath()) } return t.prototype = { convertRectToPath: function() { var t = this.p.v[0],
                                    e = this.p.v[1],
                                    r = this.s.v[0] / 2,
                                    n = this.s.v[1] / 2,
                                    i = bmMin(r, n, this.r.v),
                                    a = i * (1 - roundCorner);
                                this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + i, t + r, e - n + a, 0, !0), this.v.setTripleAt(t + r, e + n - i, t + r, e + n - a, t + r, e + n - i, 1, !0), 0 !== i ? (this.v.setTripleAt(t + r - i, e + n, t + r - i, e + n, t + r - a, e + n, 2, !0), this.v.setTripleAt(t - r + i, e + n, t - r + a, e + n, t - r + i, e + n, 3, !0), this.v.setTripleAt(t - r, e + n - i, t - r, e + n - i, t - r, e + n - a, 4, !0), this.v.setTripleAt(t - r, e - n + i, t - r, e - n + a, t - r, e - n + i, 5, !0), this.v.setTripleAt(t - r + i, e - n, t - r + i, e - n, t - r + a, e - n, 6, !0), this.v.setTripleAt(t + r - i, e - n, t + r - a, e - n, t + r - i, e - n, 7, !0)) : (this.v.setTripleAt(t - r, e + n, t - r + a, e + n, t - r, e + n, 2), this.v.setTripleAt(t - r, e - n, t - r, e - n + a, t - r, e - n, 3))) : (this.v.setTripleAt(t + r, e - n + i, t + r, e - n + a, t + r, e - n + i, 0, !0), 0 !== i ? (this.v.setTripleAt(t + r - i, e - n, t + r - i, e - n, t + r - a, e - n, 1, !0), this.v.setTripleAt(t - r + i, e - n, t - r + a, e - n, t - r + i, e - n, 2, !0), this.v.setTripleAt(t - r, e - n + i, t - r, e - n + i, t - r, e - n + a, 3, !0), this.v.setTripleAt(t - r, e + n - i, t - r, e + n - a, t - r, e + n - i, 4, !0), this.v.setTripleAt(t - r + i, e + n, t - r + i, e + n, t - r + a, e + n, 5, !0), this.v.setTripleAt(t + r - i, e + n, t + r - a, e + n, t + r - i, e + n, 6, !0), this.v.setTripleAt(t + r, e + n - i, t + r, e + n - i, t + r, e + n - a, 7, !0)) : (this.v.setTripleAt(t - r, e - n, t - r + a, e - n, t - r, e - n, 1, !0), this.v.setTripleAt(t - r, e + n, t - r, e + n - a, t - r, e + n, 2, !0), this.v.setTripleAt(t + r, e + n, t + r - a, e + n, t + r, e + n, 3, !0))) }, getValue: function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath()) }, reset: r }, extendPrototype([DynamicPropertyContainer], t), t }(); return { getShapeProp: function(t, e, r) { var n; return 3 === r || 4 === r ? n = (3 === r ? e.pt : e.ks).k.length ? new s(t, e, r) : new a(t, e, r) : 5 === r ? n = new c(t, e) : 6 === r ? n = new l(t, e) : 7 === r && (n = new h(t, e)), n.k && t.addDynamicProperty(n), n }, getConstructorFunction: function() { return a }, getKeyframedConstructorFunction: function() { return s } } }(),
            ShapeModifiers = (gs = {}, hs = {}, gs.registerModifier = function(t, e) { hs[t] || (hs[t] = e) }, gs.getModifier = function(t, e, r) { return new hs[t](e, r) }, gs),
            gs, hs;

        function ShapeModifier() {}

        function TrimModifier() {}

        function RoundCornersModifier() {}

        function PuckerAndBloatModifier() {}

        function RepeaterModifier() {}

        function ShapeCollection() { this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength) }

        function DashProperty(t, e, r, n) { var i;
            this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(n); var a, o = e.length || 0; for (i = 0; i < o; i += 1) a = PropertyFactory.getProp(t, e[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = { n: e[i].n, p: a };
            this.k || this.getValue(!0), this._isAnimated = this.k }

        function GradientProperty(t, e, r) { this.data = e, this.c = createTypedArray("uint8c", 4 * e.p); var n = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
            this.o = createTypedArray("float32", n), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = n, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0) }
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) { if (!this.closed) { t.sh.container.addDynamicProperty(t.sh); var e = { shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection() };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated() } }, ShapeModifier.prototype.init = function(t, e) { this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0) }, ShapeModifier.prototype.processKeys = function() { this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties()) }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) { this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length }, TrimModifier.prototype.addShapeToModifier = function(t) { t.pathsData = [] }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, n, i) { var a = [];
            e <= 1 ? a.push({ s: t, e: e }) : 1 <= t ? a.push({ s: t - 1, e: e - 1 }) : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 })); var o, s, l = [],
                h = a.length; for (o = 0; o < h; o += 1) { var c, u;
                (s = a[o]).e * i < n || s.s * i > n + r || (c = s.s * i <= n ? 0 : (s.s * i - n) / r, u = s.e * i >= n + r ? 1 : (s.e * i - n) / r, l.push([c, u])) } return l.length || l.push([0, 0]), l }, TrimModifier.prototype.releasePathsData = function(t) { var e, r = t.length; for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]); return t.length = 0, t }, TrimModifier.prototype.processShapes = function(t) { var e, r, n, i; if (this._mdf || t) { var a = this.o.v % 360 / 360; if (a < 0 && (a += 1), e = 1 < this.s.v ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a, (r = 1 < this.e.v ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a) < e) { var o = e;
                    e = r, r = o }
                e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r } else e = this.sValue, r = this.eValue; var s, l, h, c, u, f = this.shapes.length,
                p = 0; if (r === e)
                for (i = 0; i < f; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
            else if (1 === r && 0 === e || 0 === r && 1 === e) { if (this._mdf)
                    for (i = 0; i < f; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0 } else { var d, m, v = []; for (i = 0; i < f; i += 1)
                    if ((d = this.shapes[i]).shape._mdf || this._mdf || t || 2 === this.m) { if (l = (n = d.shape.paths)._length, u = 0, !d.shape._mdf && d.pathsData.length) u = d.totalShapeLength;
                        else { for (h = this.releasePathsData(d.pathsData), s = 0; s < l; s += 1) c = bez.getSegmentsLength(n.shapes[s]), h.push(c), u += c.totalLength;
                            d.totalShapeLength = u, d.pathsData = h }
                        p += u, d.shape._mdf = !0 } else d.shape.paths = d.localShapeCollection;
                var y, g = e,
                    E = r,
                    b = 0; for (i = f - 1; 0 <= i; i -= 1)
                    if ((d = this.shapes[i]).shape._mdf) { for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && 1 < f ? (y = this.calculateShapeEdges(e, r, d.totalShapeLength, b, p), b += d.totalShapeLength) : y = [
                                [g, E]
                            ], l = y.length, s = 0; s < l; s += 1) { g = y[s][0], E = y[s][1], v.length = 0, E <= 1 ? v.push({ s: d.totalShapeLength * g, e: d.totalShapeLength * E }) : 1 <= g ? v.push({ s: d.totalShapeLength * (g - 1), e: d.totalShapeLength * (E - 1) }) : (v.push({ s: d.totalShapeLength * g, e: d.totalShapeLength }), v.push({ s: 0, e: d.totalShapeLength * (E - 1) })); var _ = this.addShapes(d, v[0]); if (v[0].s !== v[0].e) { if (1 < v.length)
                                    if (d.shape.paths.shapes[d.shape.paths._length - 1].c) { var x = _.pop();
                                        this.addPaths(_, m), _ = this.addShapes(d, v[1], x) } else this.addPaths(_, m), _ = this.addShapes(d, v[1]);
                                this.addPaths(_, m) } }
                        d.shape.paths = m } } }, TrimModifier.prototype.addPaths = function(t, e) { var r, n = t.length; for (r = 0; r < n; r += 1) e.addShape(t[r]) }, TrimModifier.prototype.addSegment = function(t, e, r, n, i, a, o) { i.setXYAt(e[0], e[1], "o", a), i.setXYAt(r[0], r[1], "i", a + 1), o && i.setXYAt(t[0], t[1], "v", a), i.setXYAt(n[0], n[1], "v", a + 1) }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, n) { e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), n && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1) }, TrimModifier.prototype.addShapes = function(t, e, r) { var n, i, a, o, s, l, h, c, u = t.pathsData,
                f = t.shape.paths.shapes,
                p = t.shape.paths._length,
                d = 0,
                m = [],
                v = !0; for (c = r ? (s = r._length, r._length) : (r = shapePool.newElement(), s = 0), m.push(r), n = 0; n < p; n += 1) { for (l = u[n].lengths, r.c = f[n].c, a = f[n].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
                    if (d + (o = l[i - 1]).addedLength < e.s) d += o.addedLength, r.c = !1;
                    else { if (d > e.e) { r.c = !1; break }
                        e.s <= d && e.e >= d + o.addedLength ? (this.addSegment(f[n].v[i - 1], f[n].o[i - 1], f[n].i[i], f[n].v[i], r, s, v), v = !1) : (h = bez.getNewSegment(f[n].v[i - 1], f[n].v[i], f[n].o[i - 1], f[n].i[i], (e.s - d) / o.addedLength, (e.e - d) / o.addedLength, l[i - 1]), this.addSegmentFromArray(h, r, s, v), v = !1, r.c = !1), d += o.addedLength, s += 1 }
                if (f[n].c && l.length) { if (o = l[i - 1], d <= e.e) { var y = l[i - 1].addedLength;
                        e.s <= d && e.e >= d + y ? (this.addSegment(f[n].v[i - 1], f[n].o[i - 1], f[n].i[0], f[n].v[0], r, s, v), v = !1) : (h = bez.getNewSegment(f[n].v[i - 1], f[n].v[0], f[n].o[i - 1], f[n].i[0], (e.s - d) / y, (e.e - d) / y, l[i - 1]), this.addSegmentFromArray(h, r, s, v), v = !1, r.c = !1) } else r.c = !1;
                    d += o.addedLength, s += 1 } if (r._length && (r.setXYAt(r.v[c][0], r.v[c][1], "i", c), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
                n < p - 1 && (r = shapePool.newElement(), v = !0, m.push(r), s = 0) } return m }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) { this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length }, RoundCornersModifier.prototype.processPath = function(t, e) { var r, n = shapePool.newElement();
            n.c = t.c; var i, a, o, s, l, h, c, u, f, p, d, m, v = t._length,
                y = 0; for (r = 0; r < v; r += 1) i = t.v[r], o = t.o[r], a = t.i[r], i[0] === o[0] && i[1] === o[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== r && r !== v - 1 || t.c ? (s = 0 === r ? t.v[v - 1] : t.v[r - 1], h = (l = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2))) ? Math.min(l / 2, e) / l : 0, c = d = i[0] + (s[0] - i[0]) * h, u = m = i[1] - (i[1] - s[1]) * h, f = c - (c - i[0]) * roundCorner, p = u - (u - i[1]) * roundCorner, n.setTripleAt(c, u, f, p, d, m, y), y += 1, s = r === v - 1 ? t.v[0] : t.v[r + 1], h = (l = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2))) ? Math.min(l / 2, e) / l : 0, c = f = i[0] + (s[0] - i[0]) * h, u = p = i[1] + (s[1] - i[1]) * h, d = c - (c - i[0]) * roundCorner, m = u - (u - i[1]) * roundCorner, n.setTripleAt(c, u, f, p, d, m, y)) : n.setTripleAt(i[0], i[1], o[0], o[1], a[0], a[1], y) : n.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], y), y += 1; return n }, RoundCornersModifier.prototype.processShapes = function(t) { var e, r, n, i, a, o, s = this.shapes.length,
                l = this.rd.v; if (0 !== l)
                for (r = 0; r < s; r += 1) { if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                        for (o.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) o.addShape(this.processPath(e[n], l));
                    a.shape.paths = a.localShapeCollection }
            this.dynamicProperties.length || (this._mdf = !1) }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) { this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length }, PuckerAndBloatModifier.prototype.processPath = function(t, e) { var r = e / 100,
                n = [0, 0],
                i = t._length,
                a = 0; for (a = 0; a < i; a += 1) n[0] += t.v[a][0], n[1] += t.v[a][1];
            n[0] /= i, n[1] /= i; var o, s, l, h, c, u, f = shapePool.newElement(); for (f.c = t.c, a = 0; a < i; a += 1) o = t.v[a][0] + (n[0] - t.v[a][0]) * r, s = t.v[a][1] + (n[1] - t.v[a][1]) * r, l = t.o[a][0] + (n[0] - t.o[a][0]) * -r, h = t.o[a][1] + (n[1] - t.o[a][1]) * -r, c = t.i[a][0] + (n[0] - t.i[a][0]) * -r, u = t.i[a][1] + (n[1] - t.i[a][1]) * -r, f.setTripleAt(o, s, l, h, c, u, a); return f }, PuckerAndBloatModifier.prototype.processShapes = function(t) { var e, r, n, i, a, o, s = this.shapes.length,
                l = this.amount.v; if (0 !== l)
                for (r = 0; r < s; r += 1) { if (o = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                        for (o.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, n = 0; n < i; n += 1) o.addShape(this.processPath(e[n], l));
                    a.shape.paths = a.localShapeCollection }
            this.dynamicProperties.length || (this._mdf = !1) }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) { this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, n, i, a) { var o = a ? -1 : 1,
                s = n.s.v[0] + (1 - n.s.v[0]) * (1 - i),
                l = n.s.v[1] + (1 - n.s.v[1]) * (1 - i);
            t.translate(n.p.v[0] * o * i, n.p.v[1] * o * i, n.p.v[2]), e.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), e.rotate(-n.r.v * o * i), e.translate(n.a.v[0], n.a.v[1], n.a.v[2]), r.translate(-n.a.v[0], -n.a.v[1], n.a.v[2]), r.scale(a ? 1 / s : s, a ? 1 / l : l), r.translate(n.a.v[0], n.a.v[1], n.a.v[2]) }, RepeaterModifier.prototype.init = function(t, e, r, n) { for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = n, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); 0 < r;) r -= 1, this._elements.unshift(e[r]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0) }, RepeaterModifier.prototype.resetElements = function(t) { var e, r = t.length; for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it) }, RepeaterModifier.prototype.cloneElements = function(t) { var e = JSON.parse(JSON.stringify(t)); return this.resetElements(e), e }, RepeaterModifier.prototype.changeGroupRender = function(t, e) { var r, n = t.length; for (r = 0; r < n; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e) }, RepeaterModifier.prototype.processShapes = function(t) { var e, r, n, i, a, o = !1; if (this._mdf || t) { var s, l = Math.ceil(this.c.v); if (this._groups.length < l) { for (; this._groups.length < l;) { var h = { it: this.cloneElements(this._elements), ty: "gr" };
                        h.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1 }
                    this.elem.reloadShapes(), o = !0 } for (n = a = 0; n <= this._groups.length - 1; n += 1) { if (s = a < l, this._groups[n]._render = s, this.changeGroupRender(this._groups[n].it, s), !s) { var c = this.elemsData[n].it,
                            u = c[c.length - 1];
                        0 !== u.transform.op.v ? (u.transform.op._mdf = !0, u.transform.op.v = 0) : u.transform.op._mdf = !1 }
                    a += 1 }
                this._currentCopies = l; var f = this.o.v,
                    p = f % 1,
                    d = 0 < f ? Math.floor(f) : Math.ceil(f),
                    m = this.pMatrix.props,
                    v = this.rMatrix.props,
                    y = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset(); var g, E, b = 0; if (0 < f) { for (; b < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), b += 1;
                    p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), b += p) } else if (f < 0) { for (; d < b;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), b -= 1;
                    p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), b -= p) } for (n = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) { if (E = (r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (n / (this._currentCopies - 1)), 0 !== b) { for ((0 !== n && 1 === i || n !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), g = 0; g < E; g += 1) r[g] = this.matrix.props[g];
                        this.matrix.reset() } else
                        for (this.matrix.reset(), g = 0; g < E; g += 1) r[g] = this.matrix.props[g];
                    b += 1, a -= 1, n += i } } else
                for (a = this._currentCopies, n = 0, i = 1; a;) r = (e = this.elemsData[n].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, n += i; return o }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) { this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1 }, ShapeCollection.prototype.releaseShapes = function() { var t; for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
            this._length = 0 }, DashProperty.prototype.getValue = function(t) { if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) { var e = 0,
                    r = this.dataProps.length; for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v } }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) { for (var r = 0, n = this.o.length / 2; r < n;) { if (.01 < Math.abs(t[4 * r] - t[4 * e + 2 * r])) return !1;
                r += 1 } return !0 }, GradientProperty.prototype.checkCollapsable = function() { if (this.o.length / 2 != this.c.length / 4) return !1; if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e;) { if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1 } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0 }, GradientProperty.prototype.getValue = function(t) { if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) { var e, r, n, i = 4 * this.data.p; for (e = 0; e < i; e += 1) r = e % 4 == 0 ? 100 : 255, n = Math.round(this.prop.v[e] * r), this.c[e] !== n && (this.c[e] = n, this._cmdf = !t); if (this.o.length)
                    for (i = this.prop.v.length, e = 4 * this.data.p; e < i; e += 1) r = e % 2 == 0 ? 100 : 1, n = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== n && (this.o[e - 4 * this.data.p] = n, this._omdf = !t);
                this._mdf = !t } }, extendPrototype([DynamicPropertyContainer], GradientProperty); var buildShapeString = function(t, e, r, n) { if (0 === e) return ""; var i, a = t.o,
                    o = t.i,
                    s = t.v,
                    l = " M" + n.applyToPointStringified(s[0][0], s[0][1]); for (i = 1; i < e; i += 1) l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(o[i][0], o[i][1]) + " " + n.applyToPointStringified(s[i][0], s[i][1]); return r && e && (l += " C" + n.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + n.applyToPointStringified(o[0][0], o[0][1]) + " " + n.applyToPointStringified(s[0][0], s[0][1]), l += "z"), l },
            audioControllerFactory = function() {
                function t(t) { this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1 } return t.prototype = { addAudio: function(t) { this.audios.push(t) }, pause: function() { var t, e = this.audios.length; for (t = 0; t < e; t += 1) this.audios[t].pause() }, resume: function() { var t, e = this.audios.length; for (t = 0; t < e; t += 1) this.audios[t].resume() }, setRate: function(t) { var e, r = this.audios.length; for (e = 0; e < r; e += 1) this.audios[e].setRate(t) }, createAudio: function(t) { return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({ src: [t] }) : { isPlaying: !1, play: function() { this.isPlaying = !0 }, seek: function() { this.isPlaying = !1 }, playing: function() {}, rate: function() {}, setVolume: function() {} } }, setAudioFactory: function(t) { this.audioFactory = t }, setVolume: function(t) { this._volume = t, this._updateVolume() }, mute: function() { this._isMuted = !0, this._updateVolume() }, unmute: function() { this._isMuted = !1, this._updateVolume() }, getVolume: function() { return this._volume }, _updateVolume: function() { var t, e = this.audios.length; for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1)) } },
                    function() { return new t } }(),
            ImagePreloader = function() { var t = function() { var t = createTag("canvas");
                    t.width = 1, t.height = 1; var e = t.getContext("2d"); return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t }();

                function e() { this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null) }

                function r() { this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null) }

                function n(t, e, r) { var n = ""; if (t.e) n = t.p;
                    else if (e) { var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), n = e + i } else n = r, n += t.u ? t.u : "", n += t.p; return n }

                function i() { this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = function(t) { var e = 0,
                            r = setInterval(function() {
                                (t.getBBox().width || 500 < e) && (this._imageLoaded(), clearInterval(r)), e += 1 }.bind(this), 50) }.bind(this), this.createFootageData = function(t) { var e = { assetData: t },
                            r = n(t, this.assetsPath, this.path); return assetLoader.load(r, function(t) { e.img = t, this._footageLoaded() }.bind(this), function() { e.img = {}, this._footageLoaded() }.bind(this)), e }.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [] } return i.prototype = { loadAssets: function(t, e) { var r;
                        this.imagesLoadedCb = e; var n = t.length; for (r = 0; r < n; r += 1) t[r].layers || (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[r])))) }, setAssetsPath: function(t) { this.assetsPath = t || "" }, setPath: function(t) { this.path = t || "" }, loadedImages: function() { return this.totalImages === this.loadedAssets }, loadedFootages: function() { return this.totalFootages === this.loadedFootagesCount }, destroy: function() { this.imagesLoadedCb = null, this.images.length = 0 }, getAsset: function(t) { for (var e = 0, r = this.images.length; e < r;) { if (this.images[e].assetData === t) return this.images[e].img;
                            e += 1 } return null }, createImgData: function(e) { var r = n(e, this.assetsPath, this.path),
                            i = createTag("img");
                        i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() { a.img = t, this._imageLoaded() }.bind(this), !1), i.src = r; var a = { img: i, assetData: e }; return a }, createImageData: function(e) { var r = n(e, this.assetsPath, this.path),
                            i = createNS("image");
                        isSafari ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() { a.img = t, this._imageLoaded() }.bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(i) : this._elementHelper.appendChild(i); var a = { img: i, assetData: e }; return a }, imageLoaded: e, footageLoaded: r, setCacheType: function(t, e) { this._createImageData = "svg" === t ? (this._elementHelper = e, this.createImageData.bind(this)) : this.createImgData.bind(this) } }, i }(),
            featureSupport = (zx = { maskType: !0 }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (zx.maskType = !1), zx),
            zx, filtersFactory = (Ax = {}, Ax.createFilter = function(t, e) { var r = createNS("filter"); return r.setAttribute("id", t), !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r }, Ax.createAlphaToLuminanceFilter = function() { var t = createNS("feColorMatrix"); return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t }, Ax),
            Ax, assetLoader = function() {
                function t(t) { return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null } return { load: function(e, r, n) { var i, a = new XMLHttpRequest; try { a.responseType = "json" } catch (e) {}
                        a.onreadystatechange = function() { if (4 === a.readyState)
                                if (200 === a.status) i = t(a), r(i);
                                else try { i = t(a), r(i) } catch (t) { n && n(t) } }, a.open("GET", e, !0), a.send() } } }();

        function TextAnimatorProperty(t, e, r) { this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r) }

        function TextAnimatorDataProperty(t, e, r) { var n = { propType: !1 },
                i = PropertyFactory.getProp,
                a = e.a;
            this.a = { r: a.r ? i(t, a.r, 0, degToRads, r) : n, rx: a.rx ? i(t, a.rx, 0, degToRads, r) : n, ry: a.ry ? i(t, a.ry, 0, degToRads, r) : n, sk: a.sk ? i(t, a.sk, 0, degToRads, r) : n, sa: a.sa ? i(t, a.sa, 0, degToRads, r) : n, s: a.s ? i(t, a.s, 1, .01, r) : n, a: a.a ? i(t, a.a, 1, 0, r) : n, o: a.o ? i(t, a.o, 0, .01, r) : n, p: a.p ? i(t, a.p, 1, 0, r) : n, sw: a.sw ? i(t, a.sw, 0, 0, r) : n, sc: a.sc ? i(t, a.sc, 1, 0, r) : n, fc: a.fc ? i(t, a.fc, 1, 0, r) : n, fh: a.fh ? i(t, a.fh, 0, 0, r) : n, fs: a.fs ? i(t, a.fs, 0, .01, r) : n, fb: a.fb ? i(t, a.fb, 0, .01, r) : n, t: a.t ? i(t, a.t, 0, 0, r) : n }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t }

        function LetterProps(t, e, r, n, i, a) { this.o = t, this.sw = e, this.sc = r, this.fc = n, this.m = i, this.p = a, this._mdf = { o: !0, sw: !!e, sc: !!r, fc: !!n, m: !0, p: !0 } }

        function TextProperty(t, e) { this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData) }
        TextAnimatorProperty.prototype.searchProperties = function() { var t, e, r = this._textData.a.length,
                n = PropertyFactory.getProp; for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
            this._textData.p && "m" in this._textData.p ? (this._pathData = { f: n(this._elem, this._textData.p.f, 0, 0, this), l: n(this._elem, this._textData.p.l, 0, 0, this), r: this._textData.p.r, m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this) }, TextAnimatorProperty.prototype.getMeasures = function(t, e) { if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) { this._isFirstFrame = !1; var r, n, i, a, o, s, l, h, c, u, f, p, d, m, v, y, g, E, b, _ = this._moreOptions.alignment.v,
                    x = this._animatorsData,
                    T = this._textData,
                    S = this.mHelper,
                    I = this._renderType,
                    A = this.renderedLetters.length,
                    P = t.l; if (this._hasMaskedPath) { if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) { var w, C = b.v; for (this._pathData.r && (C = C.reverse()), o = { tLength: 0, segments: [] }, a = C._length - 1, i = y = 0; i < a; i += 1) w = bez.buildBezierData(C.v[i], C.v[i + 1], [C.o[i][0] - C.v[i][0], C.o[i][1] - C.v[i][1]], [C.i[i + 1][0] - C.v[i + 1][0], C.i[i + 1][1] - C.v[i + 1][1]]), o.tLength += w.segmentLength, o.segments.push(w), y += w.segmentLength;
                        i = a, b.v.c && (w = bez.buildBezierData(C.v[i], C.v[0], [C.o[i][0] - C.v[i][0], C.o[i][1] - C.v[i][1]], [C.i[0][0] - C.v[0][0], C.i[0][1] - C.v[0][1]]), o.tLength += w.segmentLength, o.segments.push(w), y += w.segmentLength), this._pathData.pi = o } if (o = this._pathData.pi, s = this._pathData.f.v, u = 1, c = !(h = f = 0), m = o.segments, s < 0 && b.v.c)
                        for (o.tLength < Math.abs(s) && (s = -Math.abs(s) % o.tLength), u = (d = m[f = m.length - 1].points).length - 1; s < 0;) s += d[u].partialLength, (u -= 1) < 0 && (u = (d = m[f -= 1].points).length - 1);
                    p = (d = m[f].points)[u - 1], v = (l = d[u]).partialLength }
                a = P.length, n = r = 0; var D, M, O, R, k, F = 1.2 * t.finalSize * .714,
                    L = !0;
                O = x.length; var N, V, B, G, j, z, H, X, W, U, q, Y, K = -1,
                    Q = s,
                    $ = f,
                    Z = u,
                    J = -1,
                    tt = "",
                    et = this.defaultPropsArray; if (2 === t.j || 1 === t.j) { var rt = 0,
                        nt = 0,
                        it = 2 === t.j ? -.5 : -1,
                        at = 0,
                        ot = !0; for (i = 0; i < a; i += 1)
                        if (P[i].n) { for (rt && (rt += nt); at < i;) P[at].animatorJustifyOffset = rt, at += 1;
                            ot = !(rt = 0) } else { for (M = 0; M < O; M += 1)(D = x[M].a).t.propType && (ot && 2 === t.j && (nt += D.t.v * it), (k = x[M].s.getMult(P[i].anIndexes[M], T.a[M].s.totalChars)).length ? rt += D.t.v * k[0] * it : rt += D.t.v * k * it);
                            ot = !1 }
                    for (rt && (rt += nt); at < i;) P[at].animatorJustifyOffset = rt, at += 1 } for (i = 0; i < a; i += 1) { if (S.reset(), G = 1, P[i].n) r = 0, n += t.yOffset, n += L ? 1 : 0, s = Q, L = !1, this._hasMaskedPath && (u = Z, p = (d = m[f = $].points)[u - 1], v = (l = d[u]).partialLength, h = 0), Y = W = q = tt = "", et = this.defaultPropsArray;
                    else { if (this._hasMaskedPath) { if (J !== P[i].line) { switch (t.j) {
                                    case 1:
                                        s += y - t.lineWidths[P[i].line]; break;
                                    case 2:
                                        s += (y - t.lineWidths[P[i].line]) / 2 }
                                J = P[i].line }
                            K !== P[i].ind && (P[K] && (s += P[K].extra), s += P[i].an / 2, K = P[i].ind), s += _[0] * P[i].an * .005; var st = 0; for (M = 0; M < O; M += 1)(D = x[M].a).p.propType && ((k = x[M].s.getMult(P[i].anIndexes[M], T.a[M].s.totalChars)).length ? st += D.p.v[0] * k[0] : st += D.p.v[0] * k), D.a.propType && ((k = x[M].s.getMult(P[i].anIndexes[M], T.a[M].s.totalChars)).length ? st += D.a.v[0] * k[0] : st += D.a.v[0] * k); for (c = !0; c;) s + st <= h + v || !d ? (g = (s + st - h) / l.partialLength, V = p.point[0] + (l.point[0] - p.point[0]) * g, B = p.point[1] + (l.point[1] - p.point[1]) * g, S.translate(-_[0] * P[i].an * .005, -_[1] * F * .01), c = !1) : d && (h += l.partialLength, (u += 1) >= d.length && (u = 0, d = m[f += 1] ? m[f].points : b.v.c ? m[f = u = 0].points : (h -= l.partialLength, null)), d && (p = l, v = (l = d[u]).partialLength));
                            N = P[i].an / 2 - P[i].add, S.translate(-N, 0, 0) } else N = P[i].an / 2 - P[i].add, S.translate(-N, 0, 0), S.translate(-_[0] * P[i].an * .005, -_[1] * F * .01, 0); for (M = 0; M < O; M += 1)(D = x[M].a).t.propType && (k = x[M].s.getMult(P[i].anIndexes[M], T.a[M].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? k.length ? s += D.t.v * k[0] : s += D.t.v * k : k.length ? r += D.t.v * k[0] : r += D.t.v * k)); for (t.strokeWidthAnim && (z = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), M = 0; M < O; M += 1)(D = x[M].a).a.propType && ((k = x[M].s.getMult(P[i].anIndexes[M], T.a[M].s.totalChars)).length ? S.translate(-D.a.v[0] * k[0], -D.a.v[1] * k[1], D.a.v[2] * k[2]) : S.translate(-D.a.v[0] * k, -D.a.v[1] * k, D.a.v[2] * k)); for (M = 0; M < O; M += 1)(D = x[M].a).s.propType && ((k = x[M].s.getMult(P[i].anIndexes[M], T.a[M].s.totalChars)).length ? S.scale(1 + (D.s.v[0] - 1) * k[0], 1 + (D.s.v[1] - 1) * k[1], 1) : S.scale(1 + (D.s.v[0] - 1) * k, 1 + (D.s.v[1] - 1) * k, 1)); for (M = 0; M < O; M += 1) { if (D = x[M].a, k = x[M].s.getMult(P[i].anIndexes[M], T.a[M].s.totalChars), D.sk.propType && (k.length ? S.skewFromAxis(-D.sk.v * k[0], D.sa.v * k[1]) : S.skewFromAxis(-D.sk.v * k, D.sa.v * k)), D.r.propType && (k.length ? S.rotateZ(-D.r.v * k[2]) : S.rotateZ(-D.r.v * k)), D.ry.propType && (k.length ? S.rotateY(D.ry.v * k[1]) : S.rotateY(D.ry.v * k)), D.rx.propType && (k.length ? S.rotateX(D.rx.v * k[0]) : S.rotateX(D.rx.v * k)), D.o.propType && (k.length ? G += (D.o.v * k[0] - G) * k[0] : G += (D.o.v * k - G) * k), t.strokeWidthAnim && D.sw.propType && (k.length ? z += D.sw.v * k[0] : z += D.sw.v * k), t.strokeColorAnim && D.sc.propType)
                                for (X = 0; X < 3; X += 1) k.length ? j[X] += (D.sc.v[X] - j[X]) * k[0] : j[X] += (D.sc.v[X] - j[X]) * k; if (t.fillColorAnim && t.fc) { if (D.fc.propType)
                                    for (X = 0; X < 3; X += 1) k.length ? H[X] += (D.fc.v[X] - H[X]) * k[0] : H[X] += (D.fc.v[X] - H[X]) * k;
                                D.fh.propType && (H = k.length ? addHueToRGB(H, D.fh.v * k[0]) : addHueToRGB(H, D.fh.v * k)), D.fs.propType && (H = k.length ? addSaturationToRGB(H, D.fs.v * k[0]) : addSaturationToRGB(H, D.fs.v * k)), D.fb.propType && (H = k.length ? addBrightnessToRGB(H, D.fb.v * k[0]) : addBrightnessToRGB(H, D.fb.v * k)) } } for (M = 0; M < O; M += 1)(D = x[M].a).p.propType && (k = x[M].s.getMult(P[i].anIndexes[M], T.a[M].s.totalChars), this._hasMaskedPath ? k.length ? S.translate(0, D.p.v[1] * k[0], -D.p.v[2] * k[1]) : S.translate(0, D.p.v[1] * k, -D.p.v[2] * k) : k.length ? S.translate(D.p.v[0] * k[0], D.p.v[1] * k[1], -D.p.v[2] * k[2]) : S.translate(D.p.v[0] * k, D.p.v[1] * k, -D.p.v[2] * k)); if (t.strokeWidthAnim && (W = z < 0 ? 0 : z), t.strokeColorAnim && (U = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && (q = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) { if (S.translate(0, -t.ls), S.translate(0, _[1] * F * .01 + n, 0), T.p.p) { E = (l.point[1] - p.point[1]) / (l.point[0] - p.point[0]); var lt = 180 * Math.atan(E) / Math.PI;
                                l.point[0] < p.point[0] && (lt += 180), S.rotate(-lt * Math.PI / 180) }
                            S.translate(V, B, 0), s -= _[0] * P[i].an * .005, P[i + 1] && K !== P[i + 1].ind && (s += P[i].an / 2, s += .001 * t.tr * t.finalSize) } else { switch (S.translate(r, n, 0), t.ps && S.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                case 1:
                                    S.translate(P[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[P[i].line]), 0, 0); break;
                                case 2:
                                    S.translate(P[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[P[i].line]) / 2, 0, 0) }
                            S.translate(0, -t.ls), S.translate(N, 0, 0), S.translate(_[0] * P[i].an * .005, _[1] * F * .01, 0), r += P[i].l + .001 * t.tr * t.finalSize } "html" === I ? tt = S.toCSS() : "svg" === I ? tt = S.to2dCSS() : et = [S.props[0], S.props[1], S.props[2], S.props[3], S.props[4], S.props[5], S.props[6], S.props[7], S.props[8], S.props[9], S.props[10], S.props[11], S.props[12], S.props[13], S.props[14], S.props[15]], Y = G }
                    this.lettersChangedFlag = A <= i ? (R = new LetterProps(Y, W, U, q, tt, et), this.renderedLetters.push(R), A += 1, !0) : (R = this.renderedLetters[i]).update(Y, W, U, q, tt, et) || this.lettersChangedFlag } } }, TextAnimatorProperty.prototype.getValue = function() { this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties()) }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, r, n, i, a) { this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1; var o = this._mdf.p = !1; return this.o !== t && (this.o = t, o = this._mdf.o = !0), this.sw !== e && (this.sw = e, o = this._mdf.sw = !0), this.sc !== r && (this.sc = r, o = this._mdf.sc = !0), this.fc !== n && (this.fc = n, o = this._mdf.fc = !0), this.m !== i && (this.m = i, o = this._mdf.m = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, o = this._mdf.p = !0), o }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) { for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]); return t }, TextProperty.prototype.setCurrentData = function(t) { t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0 }, TextProperty.prototype.searchProperty = function() { return this.searchKeyframes() }, TextProperty.prototype.searchKeyframes = function() { return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf }, TextProperty.prototype.addEffect = function(t) { this.effectsSequence.push(t), this.elem.addDynamicProperty(this) }, TextProperty.prototype.getValue = function(t) { if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) { this.currentData.t = this.data.d.k[this.keysIndex].s.t; var e = this.currentData,
                    r = this.keysIndex; if (this.lock) this.setCurrentData(this.currentData);
                else { var n;
                    this.lock = !0, this._mdf = !1; var i = this.effectsSequence.length,
                        a = t || this.data.d.k[this.keysIndex].s; for (n = 0; n < i; n += 1) a = r !== this.keysIndex ? this.effectsSequence[n](a, a.t) : this.effectsSequence[n](this.currentData, a.t);
                    e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId } } }, TextProperty.prototype.getKeyframeValue = function() { for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, n = t.length; r <= n - 1 && !(r === n - 1 || t[r + 1].t > e);) r += 1; return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s }, TextProperty.prototype.buildFinalText = function(t) { for (var e, r, n = [], i = 0, a = t.length, o = !1; i < a;) e = t.charCodeAt(i), FontManager.isCombinedCharacter(e) ? n[n.length - 1] += t.charAt(i) : 55296 <= e && e <= 56319 ? 56320 <= (r = t.charCodeAt(i + 1)) && r <= 57343 ? (o || FontManager.isModifier(e, r) ? (n[n.length - 1] += t.substr(i, 2), o = !1) : n.push(t.substr(i, 2)), i += 1) : n.push(t.charAt(i)) : 56319 < e ? (r = t.charCodeAt(i + 1), FontManager.isZeroWidthJoiner(e, r) ? (o = !0, n[n.length - 1] += t.substr(i, 2), i += 1) : n.push(t.charAt(i))) : FontManager.isZeroWidthJoiner(e) ? (n[n.length - 1] += t.charAt(i), o = !0) : n.push(t.charAt(i)), i += 1; return n }, TextProperty.prototype.completeTextData = function(t) { t.__complete = !0; var e, r, n, i, a, o, s, l = this.elem.globalData.fontManager,
                h = this.data,
                c = [],
                u = 0,
                f = h.m.g,
                p = 0,
                d = 0,
                m = 0,
                v = [],
                y = 0,
                g = 0,
                E = l.getFontByName(t.f),
                b = 0,
                _ = getFontProperties(E);
            t.fWeight = _.weight, t.fStyle = _.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh; var x, T = t.tr / 1e3 * t.finalSize; if (t.sz)
                for (var S, I, A = !0, P = t.sz[0], w = t.sz[1]; A;) { y = S = 0, r = (I = this.buildFinalText(t.t)).length, T = t.tr / 1e3 * t.finalSize; var C = -1; for (e = 0; e < r; e += 1) x = I[e].charCodeAt(0), n = !1, " " === I[e] ? C = e : 13 !== x && 3 !== x || (n = !(y = 0), S += t.finalLineHeight || 1.2 * t.finalSize), P < y + (b = l.chars ? (s = l.getCharData(I[e], E.fStyle, E.fFamily), n ? 0 : s.w * t.finalSize / 100) : l.measureText(I[e], t.f, t.finalSize)) && " " !== I[e] ? (-1 === C ? r += 1 : e = C, S += t.finalLineHeight || 1.2 * t.finalSize, I.splice(e, C === e ? 1 : 0, "\r"), C = -1, y = 0) : (y += b, y += T);
                    S += E.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && w < S ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = I, r = t.finalText.length, A = !1) }
            y = -T; var D, M = b = 0; for (e = 0; e < r; e += 1)
                if (n = !1, 13 === (x = (D = t.finalText[e]).charCodeAt(0)) || 3 === x ? (M = 0, v.push(y), g = g < y ? y : g, y = -2 * T, n = !(i = ""), m += 1) : i = D, b = l.chars ? (s = l.getCharData(D, E.fStyle, l.getFontByName(t.f).fFamily), n ? 0 : s.w * t.finalSize / 100) : l.measureText(i, t.f, t.finalSize), " " === D ? M += b + T : (y += b + T + M, M = 0), c.push({ l: b, an: b, add: p, n: n, anIndexes: [], val: i, line: m, animatorJustifyOffset: 0 }), 2 == f) { if (p += b, "" === i || " " === i || e === r - 1) { for ("" !== i && " " !== i || (p -= b); d <= e;) c[d].an = p, c[d].ind = u, c[d].extra = b, d += 1;
                        u += 1, p = 0 } } else if (3 == f) { if (p += b, "" === i || e === r - 1) { for ("" === i && (p -= b); d <= e;) c[d].an = p, c[d].ind = u, c[d].extra = b, d += 1;
                    p = 0, u += 1 } } else c[u].ind = u, c[u].extra = 0, u += 1; if (t.l = c, g = g < y ? y : g, v.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch (t.boxWidth = g, t.j) {
                case 1:
                    t.justifyOffset = -t.boxWidth; break;
                case 2:
                    t.justifyOffset = -t.boxWidth / 2; break;
                default:
                    t.justifyOffset = 0 }
            t.lineWidths = v; var O, R, k, F, L = h.a;
            o = L.length; var N = []; for (a = 0; a < o; a += 1) { for ((O = L[a]).a.sc && (t.strokeColorAnim = !0), O.a.sw && (t.strokeWidthAnim = !0), (O.a.fc || O.a.fh || O.a.fs || O.a.fb) && (t.fillColorAnim = !0), F = 0, k = O.s.b, e = 0; e < r; e += 1)(R = c[e]).anIndexes[a] = F, (1 == k && "" !== R.val || 2 == k && "" !== R.val && " " !== R.val || 3 == k && (R.n || " " == R.val || e == r - 1) || 4 == k && (R.n || e == r - 1)) && (1 === O.s.rn && N.push(F), F += 1);
                h.a[a].s.totalChars = F; var V, B = -1; if (1 === O.s.rn)
                    for (e = 0; e < r; e += 1) B != (R = c[e]).anIndexes[a] && (B = R.anIndexes[a], V = N.splice(Math.floor(Math.random() * N.length), 1)[0]), R.anIndexes[a] = V }
            t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = E.ascent * t.finalSize / 100 }, TextProperty.prototype.updateDocumentData = function(t, e) { e = void 0 === e ? this.keysIndex : e; var r = this.copyData({}, this.data.d.k[e].s);
            r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this) }, TextProperty.prototype.recalculate = function(t) { var e = this.data.d.k[t].s;
            e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e) }, TextProperty.prototype.canResizeFont = function(t) { this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) }, TextProperty.prototype.setMinimumFontSize = function(t) { this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this) }; var TextSelectorProp = function() { var t = Math.max,
                    e = Math.min,
                    r = Math.floor;

                function n(t, e) { this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || { k: 0 }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(t, e.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || { k: 0 }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue() } return n.prototype = { getMult: function(n) { this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue(); var i = 0,
                            a = 0,
                            o = 1,
                            s = 1;
                        0 < this.ne.v ? i = this.ne.v / 100 : a = -this.ne.v / 100, 0 < this.xe.v ? o = 1 - this.xe.v / 100 : s = 1 + this.xe.v / 100; var l = BezierFactory.getBezierEasing(i, a, o, s).get,
                            h = 0,
                            c = this.finalS,
                            u = this.finalE,
                            f = this.data.sh; if (2 === f) h = l(h = u === c ? u <= n ? 1 : 0 : t(0, e(.5 / (u - c) + (n - c) / (u - c), 1)));
                        else if (3 === f) h = l(h = u === c ? u <= n ? 0 : 1 : 1 - t(0, e(.5 / (u - c) + (n - c) / (u - c), 1)));
                        else if (4 === f) u === c ? h = 0 : (h = t(0, e(.5 / (u - c) + (n - c) / (u - c), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
                        else if (5 === f) { if (u === c) h = 0;
                            else { var p = u - c,
                                    d = -p / 2 + (n = e(t(0, n + .5 - c), u - c)),
                                    m = p / 2;
                                h = Math.sqrt(1 - d * d / (m * m)) }
                            h = l(h) } else h = 6 === f ? l(h = u === c ? 0 : (n = e(t(0, n + .5 - c), u - c), (1 + Math.cos(Math.PI + 2 * Math.PI * n / (u - c))) / 2)) : (n >= r(c) && (h = t(0, e(n - c < 0 ? e(u, 1) - (c - n) : u - n, 1))), l(h)); return h * this.a.v }, getValue: function(t) { this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength); var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            r = this.o.v / e,
                            n = this.s.v / e + r,
                            i = this.e.v / e + r; if (i < n) { var a = n;
                            n = i, i = a }
                        this.finalS = n, this.finalE = i } }, extendPrototype([DynamicPropertyContainer], n), { getTextSelectorProp: function(t, e, r) { return new n(t, e, r) } } }(),
            poolFactory = function(t, e, r) { var n = 0,
                    i = t,
                    a = createSizedArray(i); return { newElement: function() { return n ? a[n -= 1] : e() }, release: function(t) { n === i && (a = pooling.double(a), i *= 2), r && r(t), a[n] = t, n += 1 } } },
            pooling = { double: function(t) { return t.concat(createSizedArray(t.length)) } },
            pointPool = poolFactory(8, function() { return createTypedArray("float32", 2) }),
            shapePool = (IB = poolFactory(4, function() { return new ShapePath }, function(t) { var e, r = t._length; for (e = 0; e < r; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                t._length = 0, t.c = !1 }), IB.clone = function(t) { var e, r = IB.newElement(),
                    n = void 0 === t._length ? t.v.length : t._length; for (r.setLength(n), r.c = t.c, e = 0; e < n; e += 1) r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e); return r }, IB),
            IB, shapeCollectionPool = (QB = { newShapeCollection: function() { return RB ? TB[RB -= 1] : new ShapeCollection }, release: function(t) { var e, r = t._length; for (e = 0; e < r; e += 1) shapePool.release(t.shapes[e]);
                    t._length = 0, RB === SB && (TB = pooling.double(TB), SB *= 2), TB[RB] = t, RB += 1 } }, RB = 0, SB = 4, TB = createSizedArray(SB), QB),
            QB, RB, SB, TB, segmentsLengthPool = poolFactory(8, function() { return { lengths: [], totalLength: 0 } }, function(t) { var e, r = t.lengths.length; for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
                t.lengths.length = 0 }),
            bezierLengthPool = poolFactory(8, function() { return { addedLength: 0, percents: createTypedArray("float32", defaultCurveSegments), lengths: createTypedArray("float32", defaultCurveSegments) } }),
            markerParser = function() {
                function t(t) { for (var e, r = t.split("\r\n"), n = {}, i = 0, a = 0; a < r.length; a += 1) 2 === (e = r[a].split(":")).length && (n[e[0]] = e[1].trim(), i += 1); if (0 === i) throw new Error; return n } return function(e) { for (var r = [], n = 0; n < e.length; n += 1) { var i = e[n],
                            a = { time: i.tm, duration: i.dr }; try { a.payload = JSON.parse(e[n].cm) } catch (r) { try { a.payload = t(e[n].cm) } catch (r) { a.payload = { name: e[n] } } }
                        r.push(a) } return r } }();

        function BaseRenderer() {}

        function SVGRenderer(t, e) { this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg"); var r = ""; if (e && e.title) { var n = createNS("title"),
                    i = createElementID();
                n.setAttribute("id", i), n.textContent = e.title, this.svgElement.appendChild(n), r += i } if (e && e.description) { var a = createNS("desc"),
                    o = createElementID();
                a.setAttribute("id", o), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + o }
            r && this.svgElement.setAttribute("aria-labelledby", r); var s = createNS("defs");
            this.svgElement.appendChild(s); var l = createNS("g");
            this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", progressiveLoad: e && e.progressiveLoad || !1, hideOnTransparent: !(e && !1 === e.hideOnTransparent), viewBoxOnly: e && e.viewBoxOnly || !1, viewBoxSize: e && e.viewBoxSize || !1, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" } }, this.globalData = { _mdf: !1, frameNum: -1, defs: s, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg" }

        function CanvasRenderer(t, e) { this.animationItem = t, this.renderConfig = { clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || !1, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", className: e && e.className || "", id: e && e.id || "" }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas" }

        function HybridRenderer(t, e) { this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && !1 === e.hideOnTransparent), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" } }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html" }

        function MaskElement(t, e, r) { this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null; var n, i, a = this.globalData.defs,
                o = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(o), this.solidPath = ""; var s, l, h, c, u, f, p = this.masksProperties,
                d = 0,
                m = [],
                v = createElementID(),
                y = "clipPath",
                g = "clip-path"; for (n = 0; n < o; n += 1)
                if (("a" !== p[n].mode && "n" !== p[n].mode || p[n].inv || 100 !== p[n].o.k || p[n].o.x) && (g = y = "mask"), "s" !== p[n].mode && "i" !== p[n].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), i = createNS("path"), "n" === p[n].mode) this.viewData[n] = { op: PropertyFactory.getProp(this.element, p[n].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, p[n], 3), elem: i, lastPath: "" }, a.appendChild(i);
                else { var E; if (d += 1, i.setAttribute("fill", "s" === p[n].mode ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), 0 !== p[n].x.k ? (g = y = "mask", f = PropertyFactory.getProp(this.element, p[n].x, 0, null, this.element), E = createElementID(), (c = createNS("filter")).setAttribute("id", E), (u = createNS("feMorphology")).setAttribute("operator", "erode"), u.setAttribute("in", "SourceGraphic"), u.setAttribute("radius", "0"), c.appendChild(u), a.appendChild(c), i.setAttribute("stroke", "s" === p[n].mode ? "#000000" : "#ffffff")) : f = u = null, this.storedData[n] = { elem: i, x: f, expan: u, lastPath: "", lastOperator: "", filterId: E, lastRadius: 0 }, "i" === p[n].mode) { l = m.length; var b = createNS("g"); for (s = 0; s < l; s += 1) b.appendChild(m[s]); var _ = createNS("mask");
                        _.setAttribute("mask-type", "alpha"), _.setAttribute("id", v + "_" + d), _.appendChild(i), a.appendChild(_), b.setAttribute("mask", "url(" + locationHref + "#" + v + "_" + d + ")"), m.length = 0, m.push(b) } else m.push(i);
                    p[n].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[n] = { elem: i, lastPath: "", op: PropertyFactory.getProp(this.element, p[n].o, 0, .01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, p[n], 3), invRect: h }, this.viewData[n].prop.k || this.drawPath(p[n], this.viewData[n].prop.v, this.viewData[n]) }
            for (this.maskElement = createNS(y), o = m.length, n = 0; n < o; n += 1) this.maskElement.appendChild(m[n]);
            0 < d && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(g, "url(" + locationHref + "#" + v + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this) }

        function HierarchyElement() {}

        function FrameElement() {}

        function TransformElement() {}

        function RenderableElement() {}

        function RenderableDOMElement() {}

        function ProcessedElement(t, e) { this.elem = t, this.pos = e }

        function SVGStyleData(t, e) { this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null }

        function SVGShapeData(t, e, r) { this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k; for (var n = 0, i = t.length; n < i;) { if (t[n].mProps.dynamicProperties.length) { this._isAnimated = !0; break }
                n += 1 } }

        function SVGTransformData(t, e, r) { this.transform = { mProps: t, op: e, container: r }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length }

        function SVGStrokeStyleData(t, e, r) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated }

        function SVGFillStyleData(t, e, r) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r }

        function SVGGradientFillStyleData(t, e, r) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r) }

        function SVGGradientStrokeStyleData(t, e, r) { this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated }

        function ShapeGroupData() { this.it = [], this.prevViewData = [], this.gr = createNS("g") }
        BaseRenderer.prototype.checkLayers = function(t) { var e, r, n = this.layers.length; for (this.completeLayers = !0, e = n - 1; 0 <= e; e -= 1) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
            this.checkPendingElements() }, BaseRenderer.prototype.createItem = function(t) { switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t) } }, BaseRenderer.prototype.createCamera = function() { throw new Error("You're using a 3d camera. Try the html renderer.") }, BaseRenderer.prototype.createAudio = function(t) { return new AudioElement(t, this.globalData, this) }, BaseRenderer.prototype.createFootage = function(t) { return new FootageElement(t, this.globalData, this) }, BaseRenderer.prototype.buildAllItems = function() { var t, e = this.layers.length; for (t = 0; t < e; t += 1) this.buildItem(t);
            this.checkPendingElements() }, BaseRenderer.prototype.includeLayers = function(t) { var e;
            this.completeLayers = !1; var r, n = t.length,
                i = this.layers.length; for (e = 0; e < n; e += 1)
                for (r = 0; r < i;) { if (this.layers[r].id === t[e].id) { this.layers[r] = t[e]; break }
                    r += 1 } }, BaseRenderer.prototype.setProjectInterface = function(t) { this.globalData.projectInterface = t }, BaseRenderer.prototype.initItems = function() { this.globalData.progressiveLoad || this.buildAllItems() }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) { for (var n = this.elements, i = this.layers, a = 0, o = i.length; a < o;) i[a].ind == e && (n[a] && !0 !== n[a] ? (r.push(n[a]), n[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(t, i[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1 }, BaseRenderer.prototype.addPendingElement = function(t) { this.pendingElements.push(t) }, BaseRenderer.prototype.searchExtraCompositions = function(t) { var e, r = t.length; for (e = 0; e < r; e += 1)
                if (t[e].xt) { var n = this.createComp(t[e]);
                    n.initExpressions(), this.globalData.projectInterface.registerComposition(n) } }, BaseRenderer.prototype.setupGlobalData = function(t, e) { this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h } }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) { return new NullElement(t, this.globalData, this) }, SVGRenderer.prototype.createShape = function(t) { return new SVGShapeElement(t, this.globalData, this) }, SVGRenderer.prototype.createText = function(t) { return new SVGTextLottieElement(t, this.globalData, this) }, SVGRenderer.prototype.createImage = function(t) { return new IImageElement(t, this.globalData, this) }, SVGRenderer.prototype.createComp = function(t) { return new SVGCompElement(t, this.globalData, this) }, SVGRenderer.prototype.createSolid = function(t) { return new ISolidElement(t, this.globalData, this) }, SVGRenderer.prototype.configAnimation = function(t) { this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement); var e = this.globalData.defs;
            this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t; var r = createNS("clipPath"),
                n = createNS("rect");
            n.setAttribute("width", t.w), n.setAttribute("height", t.h), n.setAttribute("x", 0), n.setAttribute("y", 0); var i = createElementID();
            r.setAttribute("id", i), r.appendChild(n), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + i + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length) }, SVGRenderer.prototype.destroy = function() { var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null; var e = this.layers ? this.layers.length : 0; for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) { var e = this.elements; if (!e[t] && 99 !== this.layers[t].ty) { e[t] = !0; var r = this.createItem(this.layers[t]);
                e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r))) } }, SVGRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) { var t = this.pendingElements.pop(); if (t.checkParenting(), t.data.tt)
                    for (var e = 0, r = this.elements.length; e < r;) { if (this.elements[e] === t) { t.setMatte(this.elements[e - 1].layerId); break }
                        e += 1 } } }, SVGRenderer.prototype.renderFrame = function(t) { if (this.renderedFrame !== t && !this.destroyed) { var e;
                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1; var r = this.layers.length; for (this.completeLayers || this.checkLayers(t), e = r - 1; 0 <= e; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st); if (this.globalData._mdf)
                    for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame() } }, SVGRenderer.prototype.appendElementInPos = function(t, e) { var r = t.getBaseElement(); if (r) { for (var n, i = 0; i < e;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), i += 1;
                n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r) } }, SVGRenderer.prototype.hide = function() { this.layerElement.style.display = "none" }, SVGRenderer.prototype.show = function() { this.layerElement.style.display = "block" }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) { return new CVShapeElement(t, this.globalData, this) }, CanvasRenderer.prototype.createText = function(t) { return new CVTextElement(t, this.globalData, this) }, CanvasRenderer.prototype.createImage = function(t) { return new CVImageElement(t, this.globalData, this) }, CanvasRenderer.prototype.createComp = function(t) { return new CVCompElement(t, this.globalData, this) }, CanvasRenderer.prototype.createSolid = function(t) { return new CVSolidElement(t, this.globalData, this) }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) { if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                if (this.renderConfig.clearCanvas) { this.transformMat.cloneFromProps(t); var e = this.contextData.cTr.props;
                    this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props); var r = this.contextData.cTr.props;
                    this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]) } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]) }, CanvasRenderer.prototype.ctxOpacity = function(t) { if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
            this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO) }, CanvasRenderer.prototype.reset = function() { this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore() }, CanvasRenderer.prototype.save = function(t) { if (this.renderConfig.clearCanvas) { t && this.canvasContext.save(); var e, r = this.contextData.cTr.props;
                this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate(); var n = this.contextData.saved[this.contextData.cArrPos]; for (e = 0; e < 16; e += 1) n[e] = r[e];
                this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1 } else this.canvasContext.save() }, CanvasRenderer.prototype.restore = function(t) { if (this.renderConfig.clearCanvas) { t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1; var e, r = this.contextData.saved[this.contextData.cArrPos],
                    n = this.contextData.cTr.props; for (e = 0; e < 16; e += 1) n[e] = r[e];
                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r) } else this.canvasContext.restore() }, CanvasRenderer.prototype.configAnimation = function(t) { if (this.animationItem.wrapper) { this.animationItem.container = createTag("canvas"); var e = this.animationItem.container.style;
                e.width = "100%", e.height = "100%"; var r = "0px 0px 0px";
                e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id) } else this.canvasContext = this.renderConfig.context;
            this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize() }, CanvasRenderer.prototype.updateContainerSize = function() { var t, e, r, n; if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) { var i = this.renderConfig.preserveAspectRatio.split(" "),
                    a = i[1] || "meet",
                    o = i[0] || "xMidYMid",
                    s = o.substr(0, 4),
                    l = o.substr(4);
                r = t / e, n = this.transformCanvas.w / this.transformCanvas.h, this.transformCanvas.sy = r < n && "meet" === a || n < r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === s && (n < r && "meet" === a || r < n && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === s && (n < r && "meet" === a || r < n && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (r < n && "meet" === a || n < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (r < n && "meet" === a || n < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0 } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0) }, CanvasRenderer.prototype.destroy = function() { var t; for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0 }, CanvasRenderer.prototype.renderFrame = function(t, e) { if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) { var r;
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t; var n = this.layers.length; for (this.completeLayers || this.checkLayers(t), r = 0; r < n; r += 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st); if (this.globalData._mdf) { for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = n - 1; 0 <= r; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();!0 !== this.renderConfig.clearCanvas && this.restore() } } }, CanvasRenderer.prototype.buildItem = function(t) { var e = this.elements; if (!e[t] && 99 !== this.layers[t].ty) { var r = this.createItem(this.layers[t], this, this.globalData);
                (e[t] = r).initExpressions() } }, CanvasRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting() }, CanvasRenderer.prototype.hide = function() { this.animationItem.container.style.display = "none" }, CanvasRenderer.prototype.show = function() { this.animationItem.container.style.display = "block" }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() { for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting() }, HybridRenderer.prototype.appendElementInPos = function(t, e) { var r = t.getBaseElement(); if (r) { var n = this.layers[e]; if (n.ddd && this.supports3d) this.addTo3dContainer(r, e);
                else if (this.threeDElements) this.addTo3dContainer(r, e);
                else { for (var i, a, o = 0; o < e;) this.elements[o] && !0 !== this.elements[o] && this.elements[o].getBaseElement && (a = this.elements[o], i = (this.layers[o].ddd ? this.getThreeDContainerByPos(o) : a.getBaseElement()) || i), o += 1;
                    i ? n.ddd && this.supports3d || this.layerElement.insertBefore(r, i) : n.ddd && this.supports3d || this.layerElement.appendChild(r) } } }, HybridRenderer.prototype.createShape = function(t) { return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this) }, HybridRenderer.prototype.createText = function(t) { return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this) }, HybridRenderer.prototype.createCamera = function(t) { return this.camera = new HCameraElement(t, this.globalData, this), this.camera }, HybridRenderer.prototype.createImage = function(t) { return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this) }, HybridRenderer.prototype.createComp = function(t) { return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this) }, HybridRenderer.prototype.createSolid = function(t) { return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this) }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) { for (var e = 0, r = this.threeDElements.length; e < r;) { if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                e += 1 } return null }, HybridRenderer.prototype.createThreeDContainer = function(t, e) { var r, n, i = createTag("div");
            styleDiv(i); var a = createTag("div"); if (styleDiv(a), "3d" === e) {
                (r = i.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px"; var o = "50% 50%";
                r.webkitTransformOrigin = o, r.mozTransformOrigin = o, r.transformOrigin = o; var s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                (n = a.style).transform = s, n.webkitTransform = s }
            i.appendChild(a); var l = { container: a, perspectiveElem: i, startPos: t, endPos: t, type: e }; return this.threeDElements.push(l), l }, HybridRenderer.prototype.build3dContainers = function() { var t, e, r = this.layers.length,
                n = ""; for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? "3d" !== n && (n = "3d", e = this.createThreeDContainer(t, "3d")) : "2d" !== n && (n = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t); for (t = (r = this.threeDElements.length) - 1; 0 <= t; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem) }, HybridRenderer.prototype.addTo3dContainer = function(t, e) { for (var r = 0, n = this.threeDElements.length; r < n;) { if (e <= this.threeDElements[r].endPos) { for (var i, a = this.threeDElements[r].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
                    i ? this.threeDElements[r].container.insertBefore(t, i) : this.threeDElements[r].container.appendChild(t); break }
                r += 1 } }, HybridRenderer.prototype.configAnimation = function(t) { var e = createTag("div"),
                r = this.animationItem.wrapper,
                n = e.style;
            n.width = t.w + "px", n.height = t.h + "px", styleDiv(this.resizerElem = e), n.transformStyle = "flat", n.mozTransformStyle = "flat", n.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), n.overflow = "hidden"; var i = createNS("svg");
            i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i); var a = createNS("defs");
            i.appendChild(a), this.data = t, this.setupGlobalData(t, i), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize() }, HybridRenderer.prototype.destroy = function() { var t;
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null; var e = this.layers ? this.layers.length : 0; for (t = 0; t < e; t += 1) this.elements[t].destroy();
            this.elements.length = 0, this.destroyed = !0, this.animationItem = null }, HybridRenderer.prototype.updateContainerSize = function() { var t, e, r, n, i = this.animationItem.wrapper.offsetWidth,
                a = this.animationItem.wrapper.offsetHeight;
            n = i / a < this.globalData.compSize.w / this.globalData.compSize.h ? (t = i / this.globalData.compSize.w, e = i / this.globalData.compSize.w, r = 0, (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, 0); var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + n + ",0,1)", o.transform = o.webkitTransform }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() { this.resizerElem.style.display = "none" }, HybridRenderer.prototype.show = function() { this.resizerElem.style.display = "block" }, HybridRenderer.prototype.initItems = function() { if (this.buildAllItems(), this.camera) this.camera.setup();
            else { var t, e = this.globalData.compSize.w,
                    r = this.globalData.compSize.h,
                    n = this.threeDElements.length; for (t = 0; t < n; t += 1) { var i = this.threeDElements[t].perspectiveElem.style;
                    i.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", i.perspective = i.webkitPerspective } } }, HybridRenderer.prototype.searchExtraCompositions = function(t) { var e, r = t.length,
                n = createTag("div"); for (e = 0; e < r; e += 1)
                if (t[e].xt) { var i = this.createComp(t[e], n, this.globalData.comp, null);
                    i.initExpressions(), this.globalData.projectInterface.registerComposition(i) } }, MaskElement.prototype.getMaskProperty = function(t) { return this.viewData[t].prop }, MaskElement.prototype.renderFrame = function(t) { var e, r = this.element.finalTransform.mat,
                n = this.masksProperties.length; for (e = 0; e < n; e += 1)
                if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) { var i = this.storedData[e].expan;
                    this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), i.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v)) } }, MaskElement.prototype.getMaskelement = function() { return this.maskElement }, MaskElement.prototype.createLayerSolidPath = function() { var t = "M0,0 "; return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " " }, MaskElement.prototype.drawPath = function(t, e, r) { var n, i, a = " M" + e.v[0][0] + "," + e.v[0][1]; for (i = e._length, n = 1; n < i; n += 1) a += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[n][0] + "," + e.i[n][1] + " " + e.v[n][0] + "," + e.v[n][1]; if (e.c && 1 < i && (a += " C" + e.o[n - 1][0] + "," + e.o[n - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) { var o = "";
                r.elem && (e.c && (o = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", o)), r.lastPath = a } }, MaskElement.prototype.destroy = function() { this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null }, HierarchyElement.prototype = { initHierarchy: function() { this.hierarchy = [], this._isParent = !1, this.checkParenting() }, setHierarchy: function(t) { this.hierarchy = t }, setAsParent: function() { this._isParent = !0 }, checkParenting: function() { void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []) } }, FrameElement.prototype = { initFrame: function() { this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1 }, prepareProperties: function(t, e) { var r, n = this.dynamicProperties.length; for (r = 0; r < n; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0)) }, addDynamicProperty: function(t) {-1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t) } }, TransformElement.prototype = { initTransform: function() { this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _opMdf: !1, mat: new Matrix }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty }, renderTransform: function() { if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) { var t, e = this.finalTransform.mat,
                        r = 0,
                        n = this.hierarchy.length; if (!this.finalTransform._matMdf)
                        for (; r < n;) { if (this.hierarchy[r].finalTransform.mProp._mdf) { this.finalTransform._matMdf = !0; break }
                            r += 1 }
                    if (this.finalTransform._matMdf)
                        for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < n; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]) } }, globalToLocal: function(t) { var e = [];
                e.push(this.finalTransform); for (var r, n = !0, i = this.comp; n;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : n = !1; var a, o = e.length; for (r = 0; r < o; r += 1) a = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0]; return t }, mHelper: new Matrix }, RenderableElement.prototype = { initRenderable: function() { this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [] }, addRenderableComponent: function(t) {-1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t) }, removeRenderableComponent: function(t) {-1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1) }, prepareRenderableFrame: function(t) { this.checkLayerLimits(t) }, checkTransparency: function() { this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show()) }, checkLayerLimits: function(t) { this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide()) }, renderRenderable: function() { var t, e = this.renderableComponents.length; for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame) }, sourceRectAtTime: function() { return { top: 0, left: 0, width: 100, height: 100 } }, getLayerSize: function() { return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height } } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(t, e, r) { this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide() }, hide: function() { this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0) }, show: function() { this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0) }, renderFrame: function() { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) }, renderInnerContent: function() {}, prepareFrame: function(t) { this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency() }, destroy: function() { this.innerElem = null, this.destroyBaseElement() } })], RenderableDOMElement), SVGStyleData.prototype.reset = function() { this.d = "", this._mdf = !1 }, SVGShapeData.prototype.setAsAnimated = function() { this._isAnimated = !0 }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) { this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) { var r = createElementID(),
                n = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            n.setAttribute("id", r), n.setAttribute("spreadMethod", "pad"), n.setAttribute("gradientUnits", "userSpaceOnUse"); var i, a, o, s = []; for (o = 4 * e.g.p, a = 0; a < o; a += 4) i = createNS("stop"), n.appendChild(i), s.push(i);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = n, this.cst = s }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) { if (this.g._hasOpacity && !this.g._collapsable) { var r, n, i, a = createNS("mask"),
                    o = createNS("path");
                a.appendChild(o); var s = createElementID(),
                    l = createElementID();
                a.setAttribute("id", l); var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                h.setAttribute("id", s), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), i = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length; var c = this.stops; for (n = 4 * t.g.p; n < i; n += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), c.push(r);
                o.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + s + ")"), "gs" === t.ty && (o.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), o.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && o.setAttribute("stroke-miterlimit", t.ml)), this.of = h, this.ms = a, this.ost = c, this.maskId = l, e.msElem = o } }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData); var SVGElementsRenderer = function() { var t = new Matrix,
                e = new Matrix;

            function r(t, e, r) {
                (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS()) }

            function n(r, n, i) { var a, o, s, l, h, c, u, f, p, d, m, v = n.styles.length,
                    y = n.lvl; for (c = 0; c < v; c += 1) { if (l = n.sh._mdf || i, n.styles[c].lvl < y) { for (f = e.reset(), d = y - n.styles[c].lvl, m = n.transformers.length - 1; !l && 0 < d;) l = n.transformers[m].mProps._mdf || l, d -= 1, m -= 1; if (l)
                            for (d = y - n.styles[c].lvl, m = n.transformers.length - 1; 0 < d;) p = n.transformers[m].mProps.v.props, f.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), d -= 1, m -= 1 } else f = t; if (o = (u = n.sh.paths)._length, l) { for (s = "", a = 0; a < o; a += 1)(h = u.shapes[a]) && h._length && (s += buildShapeString(h, h._length, h.c, f));
                        n.caches[c] = s } else s = n.caches[c];
                    n.styles[c].d += !0 === r.hd ? "" : s, n.styles[c]._mdf = l || n.styles[c]._mdf } }

            function i(t, e, r) { var n = e.style;
                (e.c._mdf || r) && n.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("fill-opacity", e.o.v) }

            function a(t, e, r) { o(t, e, r), s(t, e, r) }

            function o(t, e, r) { var n, i, a, o, s, l = e.gf,
                    h = e.g._hasOpacity,
                    c = e.s.v,
                    u = e.e.v; if (e.o._mdf || r) { var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                    e.style.pElem.setAttribute(f, e.o.v) } if (e.s._mdf || r) { var p = 1 === t.t ? "x1" : "cx",
                        d = "x1" === p ? "y1" : "cy";
                    l.setAttribute(p, c[0]), l.setAttribute(d, c[1]), h && !e.g._collapsable && (e.of.setAttribute(p, c[0]), e.of.setAttribute(d, c[1])) } if (e.g._cmdf || r) { n = e.cst; var m = e.g.c; for (a = n.length, i = 0; i < a; i += 1)(o = n[i]).setAttribute("offset", m[4 * i] + "%"), o.setAttribute("stop-color", "rgb(" + m[4 * i + 1] + "," + m[4 * i + 2] + "," + m[4 * i + 3] + ")") } if (h && (e.g._omdf || r)) { var v = e.g.o; for (a = (n = e.g._collapsable ? e.cst : e.ost).length, i = 0; i < a; i += 1) o = n[i], e.g._collapsable || o.setAttribute("offset", v[2 * i] + "%"), o.setAttribute("stop-opacity", v[2 * i + 1]) } if (1 === t.t)(e.e._mdf || r) && (l.setAttribute("x2", u[0]), l.setAttribute("y2", u[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", u[0]), e.of.setAttribute("y2", u[1])));
                else if ((e.s._mdf || e.e._mdf || r) && (s = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2)), l.setAttribute("r", s), h && !e.g._collapsable && e.of.setAttribute("r", s)), e.e._mdf || e.h._mdf || e.a._mdf || r) { s || (s = Math.sqrt(Math.pow(c[0] - u[0], 2) + Math.pow(c[1] - u[1], 2))); var y = Math.atan2(u[1] - c[1], u[0] - c[0]),
                        g = e.h.v;
                    1 <= g ? g = .99 : g <= -1 && (g = -.99); var E = s * g,
                        b = Math.cos(y + e.a.v) * E + c[0],
                        _ = Math.sin(y + e.a.v) * E + c[1];
                    l.setAttribute("fx", b), l.setAttribute("fy", _), h && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", _)) } }

            function s(t, e, r) { var n = e.style,
                    i = e.d;
                i && (i._mdf || r) && i.dashStr && (n.pElem.setAttribute("stroke-dasharray", i.dashStr), n.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])), e.c && (e.c._mdf || r) && n.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && n.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (n.pElem.setAttribute("stroke-width", e.w.v), n.msElem && n.msElem.setAttribute("stroke-width", e.w.v)) } return { createRenderFunction: function(t) { switch (t.ty) {
                        case "fl":
                            return i;
                        case "gf":
                            return o;
                        case "gs":
                            return a;
                        case "st":
                            return s;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return n;
                        case "tr":
                            return r;
                        default:
                            return null } } } }();

        function ShapeTransformManager() { this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0 }

        function CVShapeData(t, e, r, n) { this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0]; var i, a = 4; "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t); var o, s = r.length; for (i = 0; i < s; i += 1) r[i].closed || (o = { transforms: n.addTransformSequence(r[i].transforms), trNodes: [] }, this.styledShapes.push(o), r[i].elements.push(o)) }

        function BaseElement() {}

        function NullElement(t, e, r) { this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy() }

        function SVGBaseElement() {}

        function IShapeElement() {}

        function ITextElement() {}

        function ICompElement() {}

        function IImageElement(t, e, r) { this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h } }

        function ISolidElement(t, e, r) { this.initElement(t, e, r) }

        function AudioElement(t, e, r) { this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1; var n = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(n), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

        function FootageElement(t, e, r) { this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r) }

        function SVGCompElement(t, e, r) { this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

        function SVGTextLottieElement(t, e, r) { this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r) }

        function SVGShapeElement(t, e, r) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [] }

        function SVGTintFilter(t, e) { this.filterManager = e; var r = createNS("feColorMatrix"); if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) { var n, i = createNS("feMerge");
                t.appendChild(i), (n = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), i.appendChild(n), (n = createNS("feMergeNode")).setAttribute("in", "f2"), i.appendChild(n) } }

        function SVGFillFilter(t, e) { this.filterManager = e; var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r }

        function SVGGaussianBlurEffect(t, e) { t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e; var r = createNS("feGaussianBlur");
            t.appendChild(r), this.feGaussianBlur = r }

        function SVGStrokeEffect(t, e) { this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = [] }

        function SVGTritoneFilter(t, e) { this.filterManager = e; var r = createNS("feColorMatrix");
            r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r); var n = createNS("feComponentTransfer");
            n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), this.matrixFilter = n; var i = createNS("feFuncR");
            i.setAttribute("type", "table"), n.appendChild(i), this.feFuncR = i; var a = createNS("feFuncG");
            a.setAttribute("type", "table"), n.appendChild(a), this.feFuncG = a; var o = createNS("feFuncB");
            o.setAttribute("type", "table"), n.appendChild(o), this.feFuncB = o }

        function SVGProLevelsFilter(t, e) { this.filterManager = e; var r = this.filterManager.effectElements,
                n = createNS("feComponentTransfer");
            (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), n = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n)) }

        function SVGDropShadowEffect(t, e) { var r = e.container.globalData.renderConfig.filterSize;
            t.setAttribute("x", r.x), t.setAttribute("y", r.y), t.setAttribute("width", r.width), t.setAttribute("height", r.height), this.filterManager = e; var n = createNS("feGaussianBlur");
            n.setAttribute("in", "SourceAlpha"), n.setAttribute("result", "drop_shadow_1"), n.setAttribute("stdDeviation", "0"), this.feGaussianBlur = n, t.appendChild(n); var i = createNS("feOffset");
            i.setAttribute("dx", "25"), i.setAttribute("dy", "0"), i.setAttribute("in", "drop_shadow_1"), i.setAttribute("result", "drop_shadow_2"), this.feOffset = i, t.appendChild(i); var a = createNS("feFlood");
            a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, t.appendChild(a); var o = createNS("feComposite");
            o.setAttribute("in", "drop_shadow_3"), o.setAttribute("in2", "drop_shadow_2"), o.setAttribute("operator", "in"), o.setAttribute("result", "drop_shadow_4"), t.appendChild(o); var s, l = createNS("feMerge");
            t.appendChild(l), s = createNS("feMergeNode"), l.appendChild(s), (s = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = s, this.feMerge = l, this.originalNodeAdded = !1, l.appendChild(s) }
        ShapeTransformManager.prototype = { addTransformSequence: function(t) { var e, r = t.length,
                    n = "_"; for (e = 0; e < r; e += 1) n += t[e].transform.key + "_"; var i = this.sequences[n]; return i || (i = { transforms: [].concat(t), finalTransform: new Matrix, _mdf: !1 }, this.sequences[n] = i, this.sequenceList.push(i)), i }, processSequence: function(t, e) { for (var r, n = 0, i = t.transforms.length, a = e; n < i && !e;) { if (t.transforms[n].transform.mProps._mdf) { a = !0; break }
                    n += 1 } if (a)
                    for (t.finalTransform.reset(), n = i - 1; 0 <= n; n -= 1) r = t.transforms[n].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                t._mdf = a }, processSequences: function(t) { var e, r = this.sequenceList.length; for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t) }, getNewKey: function() { return this.transform_key_count += 1, "_" + this.transform_key_count } }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = { checkMasks: function() { if (!this.data.hasMask) return !1; for (var t = 0, e = this.data.masksProperties.length; t < e;) { if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                    t += 1 } return !1 }, initExpressions: function() { this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager); var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface) }, setBlendMode: function() { var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t }, initBaseData: function(t, e, r) { this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties) }, getType: function() { return this.type }, sourceRectAtTime: function() {} }, NullElement.prototype.prepareFrame = function(t) { this.prepareProperties(t, !0) }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() { return null }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = { initRendererElement: function() { this.layerElement = createNS("g") }, createContainerElements: function() { this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1; var t, e, r, n = null; if (this.data.td) { if (3 == this.data.td || 1 == this.data.td) { var i = createNS("mask");
                        i.setAttribute("id", this.layerId), i.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), i.appendChild(this.layerElement), n = i, this.globalData.defs.appendChild(i), featureSupport.maskType || 1 != this.data.td || (i.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), n = r, i.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")")) } else if (2 == this.data.td) { var a = createNS("mask");
                        a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha"); var o = createNS("g");
                        a.appendChild(o), t = createElementID(), e = filtersFactory.createFilter(t); var s = createNS("feComponentTransfer");
                        s.setAttribute("in", "SourceGraphic"), e.appendChild(s); var l = createNS("feFuncA");
                        l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), s.appendChild(l), this.globalData.defs.appendChild(e); var h = createNS("rect");
                        h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), o.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), o.appendChild(h), o.appendChild(this.layerElement), n = o, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), o.appendChild(h), r.appendChild(this.layerElement), n = r, o.appendChild(r)), this.globalData.defs.appendChild(a) } } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), n = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement; if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) { var c = createNS("clipPath"),
                        u = createNS("path");
                    u.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z"); var f = createElementID(); if (c.setAttribute("id", f), c.appendChild(u), this.globalData.defs.appendChild(c), this.checkMasks()) { var p = createNS("g");
                        p.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), p.appendChild(this.layerElement), this.transformedElement = p, n ? n.appendChild(this.transformedElement) : this.baseElement = this.transformedElement } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")") }
                0 !== this.data.bm && this.setBlendMode() }, renderElement: function() { this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v) }, destroyBaseElement: function() { this.layerElement = null, this.matteElement = null, this.maskManager.destroy() }, getBaseElement: function() { return this.data.hd ? null : this.baseElement }, createRenderableComponents: function() { this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this) }, setMatte: function(t) { this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")") } }, IShapeElement.prototype = { addShapeToModifiers: function(t) { var e, r = this.shapeModifiers.length; for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t) }, isShapeInAnimatedModifiers: function(t) { for (var e = this.shapeModifiers.length; 0 < e;)
                    if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1 }, renderModifiers: function() { if (this.shapeModifiers.length) { var t, e = this.shapes.length; for (t = 0; t < e; t += 1) this.shapes[t].sh.reset(); for (t = (e = this.shapeModifiers.length) - 1; 0 <= t && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1); } }, searchProcessedElement: function(t) { for (var e = this.processedElements, r = 0, n = e.length; r < n;) { if (e[r].elem === t) return e[r].pos;
                    r += 1 } return 0 }, addProcessedElement: function(t, e) { for (var r = this.processedElements, n = r.length; n;)
                    if (r[n -= 1].elem === t) return void(r[n].pos = e);
                r.push(new ProcessedElement(t, e)) }, prepareFrame: function(t) { this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange) } }, ITextElement.prototype.initElement = function(t, e, r) { this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties) }, ITextElement.prototype.prepareFrame = function(t) { this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1) }, ITextElement.prototype.createPathShape = function(t, e) { var r, n, i = e.length,
                a = ""; for (r = 0; r < i; r += 1) n = e[r].ks.k, a += buildShapeString(n, n.i.length, !0, t); return a }, ITextElement.prototype.updateDocumentData = function(t, e) { this.textProperty.updateDocumentData(t, e) }, ITextElement.prototype.canResizeFont = function(t) { this.textProperty.canResizeFont(t) }, ITextElement.prototype.setMinimumFontSize = function(t) { this.textProperty.setMinimumFontSize(t) }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, n, i) { switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0); break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0) }
            e.translate(n, i, 0) }, ITextElement.prototype.buildColor = function(t) { return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")" }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) { this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide() }, ICompElement.prototype.prepareFrame = function(t) { if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) { if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                else { var e = this.tm.v;
                    e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e } var r, n = this.elements.length; for (this.completeLayers || this.checkLayers(this.renderedFrame), r = n - 1; 0 <= r; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0)) } }, ICompElement.prototype.renderInnerContent = function() { var t, e = this.layers.length; for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame() }, ICompElement.prototype.setElements = function(t) { this.elements = t }, ICompElement.prototype.getElements = function() { return this.elements }, ICompElement.prototype.destroyElements = function() { var t, e = this.layers.length; for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy() }, ICompElement.prototype.destroy = function() { this.destroyElements(), this.destroyBaseElement() }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() { var t = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem) }, IImageElement.prototype.sourceRectAtTime = function() { return this.sourceRect }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() { var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t) }, AudioElement.prototype.prepareFrame = function(t) { if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
            else { var e = this.tm.v;
                this._currentTime = e } }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() { this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || .1 < Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek())) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0)) }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() { this.audio.pause(), this._isPlaying = !1 }, AudioElement.prototype.pause = function() { this.audio.pause(), this._isPlaying = !1, this._canPlay = !1 }, AudioElement.prototype.resume = function() { this._canPlay = !0 }, AudioElement.prototype.setRate = function(t) { this.audio.rate(t) }, AudioElement.prototype.volume = function(t) { this.audio.volume(t) }, AudioElement.prototype.getBaseElement = function() { return null }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() { return null }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() { this.layerInterface = FootageInterface(this) }, FootageElement.prototype.getFootageData = function() { return this.footageData }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() { this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text")) }, SVGTextLottieElement.prototype.buildTextContents = function(t) { for (var e = 0, r = t.length, n = [], i = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (n.push(i), i = "") : i += t[e], e += 1; return n.push(i), n }, SVGTextLottieElement.prototype.buildNewText = function() { var t, e, r = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize); var n = this.globalData.fontManager.getFontByName(r.f); if (n.fClass) this.layerElement.setAttribute("class", n.fClass);
            else { this.layerElement.setAttribute("font-family", n.fFamily); var i = r.fWeight,
                    a = r.fStyle;
                this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i) }
            this.layerElement.setAttribute("aria-label", r.t); var o, s = r.l || [],
                l = !!this.globalData.fontManager.chars;
            e = s.length; var h, c = this.mHelper,
                u = "",
                f = this.data.singleShape,
                p = 0,
                d = 0,
                m = !0,
                v = .001 * r.tr * r.finalSize; if (!f || l || r.sz) { var y, g, E = this.textSpans.length; for (t = 0; t < e; t += 1) l && f && 0 !== t || (o = t < E ? this.textSpans[t] : createNS(l ? "path" : "text"), E <= t && (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = o, this.layerElement.appendChild(o)), o.style.display = "inherit"), c.reset(), c.scale(r.finalSize / 100, r.finalSize / 100), f && (s[t].n && (p = -v, d += r.yOffset, d += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(r, c, s[t].line, p, d), p += s[t].l || 0, p += v), l ? (h = (y = (g = this.globalData.fontManager.getCharData(r.finalText[t], n.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && g.data || {}).shapes ? y.shapes[0].it : [], f ? u += this.createPathShape(c, h) : o.setAttribute("d", this.createPathShape(c, h))) : (f && o.setAttribute("transform", "translate(" + c.props[12] + "," + c.props[13] + ")"), o.textContent = s[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                f && o && o.setAttribute("d", u) } else { var b = this.textContainer,
                    _ = "start"; switch (r.j) {
                    case 1:
                        _ = "end"; break;
                    case 2:
                        _ = "middle"; break;
                    default:
                        _ = "start" }
                b.setAttribute("text-anchor", _), b.setAttribute("letter-spacing", v); var x = this.buildTextContents(r.finalText); for (e = x.length, d = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(o = this.textSpans[t] || createNS("tspan")).textContent = x[t], o.setAttribute("x", 0), o.setAttribute("y", d), o.style.display = "inherit", b.appendChild(o), this.textSpans[t] = o, d += r.finalLineHeight;
                this.layerElement.appendChild(b) } for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
            this._sizeChanged = !0 }, SVGTextLottieElement.prototype.sourceRectAtTime = function() { if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) { this._sizeChanged = !1; var t = this.layerElement.getBBox();
                this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height } } return this.bbox }, SVGTextLottieElement.prototype.renderInnerContent = function() { if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) { var t, e;
                this._sizeChanged = !0; var r, n, i = this.textAnimator.renderedLetters,
                    a = this.textProperty.currentData.l; for (e = a.length, t = 0; t < e; t += 1) a[t].n || (r = i[t], n = this.textSpans[t], r._mdf.m && n.setAttribute("transform", r.m), r._mdf.o && n.setAttribute("opacity", r.o), r._mdf.sw && n.setAttribute("stroke-width", r.sw), r._mdf.sc && n.setAttribute("stroke", r.sc), r._mdf.fc && n.setAttribute("fill", r.fc)) } }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes() }, SVGShapeElement.prototype.filterUniqueShapes = function() { var t, e, r, n, i = this.shapes.length,
                a = this.stylesList.length,
                o = [],
                s = !1; for (r = 0; r < a; r += 1) { for (n = this.stylesList[r], s = !1, t = o.length = 0; t < i; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(n) && (o.push(e), s = e._isAnimated || s);
                1 < o.length && s && this.setShapesAsAnimated(o) } }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) { var e, r = t.length; for (e = 0; e < r; e += 1) t[e].setAsAnimated() }, SVGShapeElement.prototype.createStyleElement = function(t, e) { var r, n = new SVGStyleData(t, e),
                i = n.pElem; return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, n) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, n) : "gf" !== t.ty && "gs" !== t.ty || (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, n), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (i.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), i.setAttribute("fill-opacity", "0"), 1 === t.lj && i.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && i.setAttribute("fill-rule", "evenodd"), t.ln && i.setAttribute("id", t.ln), t.cl && i.setAttribute("class", t.cl), t.bm && (i.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(n), this.addToAnimatedContents(t, r), r }, SVGShapeElement.prototype.createGroupElement = function(t) { var e = new ShapeGroupData; return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e }, SVGShapeElement.prototype.createTransformElement = function(t, e) { var r = TransformPropertyFactory.getTransformProperty(this, t, this),
                n = new SVGTransformData(r, r.o, e); return this.addToAnimatedContents(t, n), n }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) { var n = 4; "rc" === t.ty ? n = 5 : "el" === t.ty ? n = 6 : "sr" === t.ty && (n = 7); var i = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, n, this)); return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(t, i), i }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) { for (var r = 0, n = this.animatedContents.length; r < n;) { if (this.animatedContents[r].element === e) return;
                r += 1 }
            this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t }) }, SVGShapeElement.prototype.setElementStyles = function(t) { var e, r = t.styles,
                n = this.stylesList.length; for (e = 0; e < n; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e]) }, SVGShapeElement.prototype.reloadShapes = function() { var t;
            this._isFirstFrame = !0; var e = this.itemsData.length; for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t]; for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers() }, SVGShapeElement.prototype.searchShapes = function(t, e, r, n, i, a, o) { var s, l, h, c, u, f, p = [].concat(a),
                d = t.length - 1,
                m = [],
                v = []; for (s = d; 0 <= s; s -= 1) { if ((f = this.searchProcessedElement(t[s])) ? e[s] = r[f - 1] : t[s]._render = o, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) f ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], i), t[s]._render && n.appendChild(e[s].style.pElem), m.push(e[s].style);
                else if ("gr" === t[s].ty) { if (f)
                        for (h = e[s].it.length, l = 0; l < h; l += 1) e[s].prevViewData[l] = e[s].it[l];
                    else e[s] = this.createGroupElement(t[s]);
                    this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, e[s].gr, i + 1, p, o), t[s]._render && n.appendChild(e[s].gr) } else "tr" === t[s].ty ? (f || (e[s] = this.createTransformElement(t[s], n)), c = e[s].transform, p.push(c)) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? (f || (e[s] = this.createShapeElement(t[s], p, i)), this.setElementStyles(e[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "ms" === t[s].ty || "pb" === t[s].ty ? (f ? (u = e[s]).closed = !1 : ((u = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = u, this.shapeModifiers.push(u)), v.push(u)) : "rp" === t[s].ty && (f ? (u = e[s]).closed = !0 : (u = ShapeModifiers.getModifier(t[s].ty), (e[s] = u).init(this, t, s, e), this.shapeModifiers.push(u), o = !1), v.push(u));
                this.addProcessedElement(t[s], s + 1) } for (d = m.length, s = 0; s < d; s += 1) m[s].closed = !0; for (d = v.length, s = 0; s < d; s += 1) v[s].closed = !0 }, SVGShapeElement.prototype.renderInnerContent = function() { var t;
            this.renderModifiers(); var e = this.stylesList.length; for (t = 0; t < e; t += 1) this.stylesList[t].reset(); for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0")) }, SVGShapeElement.prototype.renderShape = function() { var t, e, r = this.animatedContents.length; for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame) }, SVGShapeElement.prototype.destroy = function() { this.destroyBaseElement(), this.shapesData = null, this.itemsData = null }, SVGTintFilter.prototype.renderFrame = function(t) { if (t || this.filterManager._mdf) { var e = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    n = this.filterManager.effectElements[2].p.v / 100;
                this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + n + " 0") } }, SVGFillFilter.prototype.renderFrame = function(t) { if (t || this.filterManager._mdf) { var e = this.filterManager.effectElements[2].p.v,
                    r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0") } }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) { if (t || this.filterManager._mdf) { var e = .3 * this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    n = 3 == r ? 0 : e,
                    i = 2 == r ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", n + " " + i); var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", a) } }, SVGStrokeEffect.prototype.initialize = function() { var t, e, r, n, i = this.elem.layerElement.children || this.elem.layerElement.childNodes; for (1 === this.filterManager.effectElements[1].p.v ? (n = this.elem.maskManager.masksProperties.length, r = 0) : n = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < n; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({ p: t, m: r }); if (3 === this.filterManager.effectElements[10].p.v) { var a = createNS("mask"),
                    o = createElementID();
                a.setAttribute("id", o), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a); var s = createNS("g"); for (s.setAttribute("mask", "url(" + locationHref + "#" + o + ")"); i[0];) s.appendChild(i[0]);
                this.elem.layerElement.appendChild(s), this.masker = a, e.setAttribute("stroke", "#fff") } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) { if (2 === this.filterManager.effectElements[10].p.v)
                    for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff") }
            this.initialized = !0, this.pathMasker = e }, SVGStrokeEffect.prototype.renderFrame = function(t) { var e;
            this.initialized || this.initialize(); var r, n, i = this.paths.length; for (e = 0; e < i; e += 1)
                if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], n = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && n.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) { var a; if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) { var o = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                            s = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                            l = n.getTotalLength();
                        a = "0 0 0 " + l * o + " "; var h, c = l * (s - o),
                            u = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                            f = Math.floor(c / u); for (h = 0; h < f; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                        a += "0 " + 10 * l + " 0 0" } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                    n.setAttribute("stroke-dasharray", a) }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) { var p = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * p[0]) + "," + bmFloor(255 * p[1]) + "," + bmFloor(255 * p[2]) + ")") } }, SVGTritoneFilter.prototype.renderFrame = function(t) { if (t || this.filterManager._mdf) { var e = this.filterManager.effectElements[0].p.v,
                    r = this.filterManager.effectElements[1].p.v,
                    n = this.filterManager.effectElements[2].p.v,
                    i = n[0] + " " + r[0] + " " + e[0],
                    a = n[1] + " " + r[1] + " " + e[1],
                    o = n[2] + " " + r[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", o) } }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) { var r = createNS(t); return r.setAttribute("type", "table"), e.appendChild(r), r }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, n, i) { for (var a, o, s = 0, l = Math.min(t, e), h = Math.max(t, e), c = Array.call(null, { length: 256 }), u = 0, f = i - n, p = e - t; s <= 256;) o = (a = s / 256) <= l ? p < 0 ? i : n : h <= a ? p < 0 ? n : i : n + f * Math.pow((a - t) / p, 1 / r), c[u] = o, u += 1, s += 256 / 255; return c.join(" ") }, SVGProLevelsFilter.prototype.renderFrame = function(t) { if (t || this.filterManager._mdf) { var e, r = this.filterManager.effectElements;
                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e)) } }, SVGDropShadowEffect.prototype.renderFrame = function(t) { if (t || this.filterManager._mdf) { if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) { var e = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2]))) } if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) { var r = this.filterManager.effectElements[3].p.v,
                        n = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                        i = r * Math.cos(n),
                        a = r * Math.sin(n);
                    this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a) } } }; var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, r) { this.initialized = !1, this.filterManager = e, this.filterElem = t, (this.elem = r).matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement }

        function SVGEffects(t) { var e, r, n = t.data.ef ? t.data.ef.length : 0,
                i = createElementID(),
                a = filtersFactory.createFilter(i, !0),
                o = 0; for (this.filters = [], e = 0; e < n; e += 1) r = null, 20 === t.data.ef[e].ty ? (o += 1, r = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (o += 1, r = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (o += 1, r = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (o += 1, r = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (o += 1, r = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (o += 1, r = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), r && this.filters.push(r);
            o && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + i + ")")), this.filters.length && t.addRenderableComponent(this) }

        function CVContextData() { var t; for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
            this._length = 15 }

        function CVBaseElement() {}

        function CVImageElement(t, e, r) { this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r) }

        function CVCompElement(t, e, r) { this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

        function CVMaskElement(t, e) { var r;
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length); var n = this.masksProperties.length,
                i = !1; for (r = 0; r < n; r += 1) "n" !== this.masksProperties[r].mode && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
            (this.hasMasks = i) && this.element.addRenderableComponent(this) }

        function CVShapeElement(t, e, r) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r) }

        function CVSolidElement(t, e, r) { this.initElement(t, e, r) }

        function CVTextElement(t, e, r) { this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, r) }

        function CVEffects() {}

        function HBaseElement() {}

        function HSolidElement(t, e, r) { this.initElement(t, e, r) }

        function HCompElement(t, e, r) { this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 } }

        function HShapeElement(t, e, r) { this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 } }

        function HTextElement(t, e, r) { this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r) }

        function HImageElement(t, e, r) { this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r) }

        function HCameraElement(t, e, r) { this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy(); var n = PropertyFactory.getProp; if (this.pe = n(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = n(this, t.ks.p.x, 1, 0, this), this.py = n(this, t.ks.p.y, 1, 0, this), this.pz = n(this, t.ks.p.z, 1, 0, this)) : this.p = n(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = n(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) { var i, a = t.ks.or.k.length; for (i = 0; i < a; i += 1) t.ks.or.k[i].to = null, t.ks.or.k[i].ti = null }
            this.or = n(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = n(this, t.ks.rx, 0, degToRads, this), this.ry = n(this, t.ks.ry, 0, degToRads, this), this.rz = n(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = { mProp: this } }

        function HEffects() {}
        SVGMatte3Effect.prototype.findSymbol = function(t) { for (var e = 0, r = _svgMatteSymbols.length; e < r;) { if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1 } return null }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) { var r = t.layerElement.parentNode; if (r) { for (var n, i = r.children, a = 0, o = i.length; a < o && i[a] !== t.layerElement;) a += 1;
                a <= o - 2 && (n = i[a + 1]); var s = createNS("use");
                s.setAttribute("href", "#" + e), n ? r.insertBefore(s, n) : r.appendChild(s) } }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) { if (!this.findSymbol(e)) { var r = createElementID(),
                    n = createNS("mask");
                n.setAttribute("id", e.layerId), n.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e); var i = t.globalData.defs;
                i.appendChild(n); var a = createNS("symbol");
                a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), i.appendChild(a); var o = createNS("use");
                o.setAttribute("href", "#" + r), n.appendChild(o), e.data.hd = !1, e.show() }
            t.setMatte(e.layerId) }, SVGMatte3Effect.prototype.initialize = function() { for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, n = e.length; r < n;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
            this.initialized = !0 }, SVGMatte3Effect.prototype.renderFrame = function() { this.initialized || this.initialize() }, SVGEffects.prototype.renderFrame = function(t) { var e, r = this.filters.length; for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t) }, CVContextData.prototype.duplicate = function() { var t = 2 * this._length,
                e = this.savedOp;
            this.savedOp = createTypedArray("float32", t), this.savedOp.set(e); var r = 0; for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
            this._length = t }, CVContextData.prototype.reset = function() { this.cArrPos = 0, this.cTr.reset(), this.cO = 1 }, CVBaseElement.prototype = { createElements: function() {}, initRendererElement: function() {}, createContainerElements: function() { this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this) }, createContent: function() {}, setBlendMode: function() { var t = this.globalData; if (t.blendMode !== this.data.bm) { t.blendMode = this.data.bm; var e = getBlendMode(this.data.bm);
                    t.canvasContext.globalCompositeOperation = e } }, createRenderableComponents: function() { this.maskManager = new CVMaskElement(this.data, this) }, hideElement: function() { this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0) }, showElement: function() { this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0) }, renderFrame: function() { if (!this.hidden && !this.data.hd) { this.renderTransform(), this.renderRenderable(), this.setBlendMode(); var t = 0 === this.data.ty;
                    this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1) } }, destroy: function() { this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy() }, mHelper: new Matrix }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() { if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) { var t = createTag("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h; var e, r, n = t.getContext("2d"),
                    i = this.img.width,
                    a = this.img.height,
                    o = i / a,
                    s = this.assetData.w / this.assetData.h,
                    l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                s < o && "xMidYMid slice" === l || o < s && "xMidYMid slice" !== l ? e = (r = a) * s : r = (e = i) / s, n.drawImage(this.img, (i - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t } }, CVImageElement.prototype.renderInnerContent = function() { this.canvasContext.drawImage(this.img, 0, 0) }, CVImageElement.prototype.destroy = function() { this.img = null }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() { var t, e = this.canvasContext; for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; 0 <= t; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame() }, CVCompElement.prototype.destroy = function() { var t; for (t = this.layers.length - 1; 0 <= t; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null }, CVMaskElement.prototype.renderFrame = function() { if (this.hasMasks) { var t, e, r, n, i = this.element.finalTransform.mat,
                    a = this.element.canvasContext,
                    o = this.masksProperties.length; for (a.beginPath(), t = 0; t < o; t += 1)
                    if ("n" !== this.masksProperties[t].mode) { var s;
                        this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), n = this.viewData[t].v, e = i.applyToPointArray(n.v[0][0], n.v[0][1], 0), a.moveTo(e[0], e[1]); var l = n._length; for (s = 1; s < l; s += 1) r = i.applyToTriplePoints(n.o[s - 1], n.i[s], n.v[s]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                        r = i.applyToTriplePoints(n.o[s - 1], n.i[0], n.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]) }
                this.element.globalData.renderer.save(!0), a.clip() } }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() { this.element = null }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() { this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []) }, CVShapeElement.prototype.createStyleElement = function(t, e) { var r = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: !0 === t.hd },
                n = {}; if ("fl" === t.ty || "st" === t.ty ? (n.c = PropertyFactory.getProp(this, t.c, 1, 255, this), n.c.k || (r.co = "rgb(" + bmFloor(n.c.v[0]) + "," + bmFloor(n.c.v[1]) + "," + bmFloor(n.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (n.s = PropertyFactory.getProp(this, t.s, 1, null, this), n.e = PropertyFactory.getProp(this, t.e, 1, null, this), n.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, .01, this), n.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), n.g = new GradientProperty(this, t.g, this)), n.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) { if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), n.w = PropertyFactory.getProp(this, t.w, 0, null, this), n.w.k || (r.wi = n.w.v), t.d) { var i = new DashProperty(this, t.d, "canvas", this);
                    n.d = i, n.d.k || (r.da = n.d.dashArray, r.do = n.d.dashoffset[0]) } } else r.r = 2 === t.r ? "evenodd" : "nonzero"; return this.stylesList.push(r), n.style = r, n }, CVShapeElement.prototype.createGroupElement = function() { return { it: [], prevViewData: [] } }, CVShapeElement.prototype.createTransformElement = function(t) { return { transform: { opacity: 1, _opMdf: !1, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, t.o, 0, .01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } } }, CVShapeElement.prototype.createShapeElement = function(t) { var e = new CVShapeData(this, t, this.stylesList, this.transformsManager); return this.shapes.push(e), this.addShapeToModifiers(e), e }, CVShapeElement.prototype.reloadShapes = function() { var t;
            this._isFirstFrame = !0; var e = this.itemsData.length; for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t]; for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame) }, CVShapeElement.prototype.addTransformToStyleList = function(t) { var e, r = this.stylesList.length; for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t) }, CVShapeElement.prototype.removeTransformFromStyleList = function() { var t, e = this.stylesList.length; for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop() }, CVShapeElement.prototype.closeStyles = function(t) { var e, r = t.length; for (e = 0; e < r; e += 1) t[e].closed = !0 }, CVShapeElement.prototype.searchShapes = function(t, e, r, n, i) { var a, o, s, l, h, c, u = t.length - 1,
                f = [],
                p = [],
                d = [].concat(i); for (a = u; 0 <= a; a -= 1) { if ((l = this.searchProcessedElement(t[a])) ? e[a] = r[l - 1] : t[a]._shouldRender = n, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) l ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), f.push(e[a].style);
                else if ("gr" === t[a].ty) { if (l)
                        for (s = e[a].it.length, o = 0; o < s; o += 1) e[a].prevViewData[o] = e[a].it[o];
                    else e[a] = this.createGroupElement(t[a]);
                    this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, n, d) } else "tr" === t[a].ty ? (l || (c = this.createTransformElement(t[a]), e[a] = c), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? l || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty ? (l ? (h = e[a]).closed = !1 : ((h = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = h, this.shapeModifiers.push(h)), p.push(h)) : "rp" === t[a].ty && (l ? (h = e[a]).closed = !0 : (h = ShapeModifiers.getModifier(t[a].ty), (e[a] = h).init(this, t, a, e), this.shapeModifiers.push(h), n = !1), p.push(h));
                this.addProcessedElement(t[a], a + 1) } for (this.removeTransformFromStyleList(), this.closeStyles(f), u = p.length, a = 0; a < u; a += 1) p[a].closed = !0 }, CVShapeElement.prototype.renderInnerContent = function() { this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0) }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0) }, CVShapeElement.prototype.drawLayer = function() { var t, e, r, n, i, a, o, s, l, h = this.stylesList.length,
                c = this.globalData.renderer,
                u = this.globalData.canvasContext; for (t = 0; t < h; t += 1)
                if (("st" !== (s = (l = this.stylesList[t]).type) && "gs" !== s || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) { for (c.save(), a = l.elements, "st" === s || "gs" === s ? (u.strokeStyle = "st" === s ? l.co : l.grd, u.lineWidth = l.wi, u.lineCap = l.lc, u.lineJoin = l.lj, u.miterLimit = l.ml || 0) : u.fillStyle = "fl" === s ? l.co : l.grd, c.ctxOpacity(l.coOp), "st" !== s && "gs" !== s && u.beginPath(), c.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) { for ("st" !== s && "gs" !== s || (u.beginPath(), l.da && (u.setLineDash(l.da), u.lineDashOffset = l.do)), i = (o = a[e].trNodes).length, n = 0; n < i; n += 1) "m" === o[n].t ? u.moveTo(o[n].p[0], o[n].p[1]) : "c" === o[n].t ? u.bezierCurveTo(o[n].pts[0], o[n].pts[1], o[n].pts[2], o[n].pts[3], o[n].pts[4], o[n].pts[5]) : u.closePath(); "st" !== s && "gs" !== s || (u.stroke(), l.da && u.setLineDash(this.dashResetter)) } "st" !== s && "gs" !== s && u.fill(l.r), c.restore() } }, CVShapeElement.prototype.renderShape = function(t, e, r, n) { var i, a; for (a = t, i = e.length - 1; 0 <= i; i -= 1) "tr" === e[i].ty ? (a = r[i].transform, this.renderShapeTransform(t, a)) : "sh" === e[i].ty || "el" === e[i].ty || "rc" === e[i].ty || "sr" === e[i].ty ? this.renderPath(e[i], r[i]) : "fl" === e[i].ty ? this.renderFill(e[i], r[i], a) : "st" === e[i].ty ? this.renderStroke(e[i], r[i], a) : "gf" === e[i].ty || "gs" === e[i].ty ? this.renderGradientFill(e[i], r[i], a) : "gr" === e[i].ty ? this.renderShape(a, e[i].it, r[i].it) : e[i].ty;
            n && this.drawLayer() }, CVShapeElement.prototype.renderStyledShape = function(t, e) { if (this._isFirstFrame || e._mdf || t.transforms._mdf) { var r, n, i, a = t.trNodes,
                    o = e.paths,
                    s = o._length;
                a.length = 0; var l = t.transforms.finalTransform; for (i = 0; i < s; i += 1) { var h = o.shapes[i]; if (h && h.v) { for (n = h._length, r = 1; r < n; r += 1) 1 === r && a.push({ t: "m", p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0) }), a.push({ t: "c", pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r]) });
                        1 === n && a.push({ t: "m", p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0) }), h.c && n && (a.push({ t: "c", pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0]) }), a.push({ t: "z" })) } }
                t.trNodes = a } }, CVShapeElement.prototype.renderPath = function(t, e) { if (!0 !== t.hd && t._shouldRender) { var r, n = e.styledShapes.length; for (r = 0; r < n; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh) } }, CVShapeElement.prototype.renderFill = function(t, e, r) { var n = e.style;
            (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity) }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) { var n, i = e.style; if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) { var a, o = this.globalData.canvasContext,
                    s = e.s.v,
                    l = e.e.v; if (1 === t.t) n = o.createLinearGradient(s[0], s[1], l[0], l[1]);
                else { var h = Math.sqrt(Math.pow(s[0] - l[0], 2) + Math.pow(s[1] - l[1], 2)),
                        c = Math.atan2(l[1] - s[1], l[0] - s[0]),
                        u = e.h.v;
                    1 <= u ? u = .99 : u <= -1 && (u = -.99); var f = h * u,
                        p = Math.cos(c + e.a.v) * f + s[0],
                        d = Math.sin(c + e.a.v) * f + s[1];
                    n = o.createRadialGradient(p, d, 0, s[0], s[1], h) } var m = t.g.p,
                    v = e.g.c,
                    y = 1; for (a = 0; a < m; a += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * a + 1]), n.addColorStop(v[4 * a] / 100, "rgba(" + v[4 * a + 1] + "," + v[4 * a + 2] + "," + v[4 * a + 3] + "," + y + ")");
                i.grd = n }
            i.coOp = e.o.v * r.opacity }, CVShapeElement.prototype.renderStroke = function(t, e, r) { var n = e.style,
                i = e.d;
            i && (i._mdf || this._isFirstFrame) && (n.da = i.dashArray, n.do = i.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (n.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (n.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (n.wi = e.w.v) }, CVShapeElement.prototype.destroy = function() { this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0 }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() { var t = this.canvasContext;
            t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh) }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() { var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0); var e = !1;
            t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e; var r = !1;
            t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw); var n, i, a, o, s, l, h, c, u, f, p, d, m = this.globalData.fontManager.getFontByName(t.f),
                v = t.l,
                y = this.mHelper;
            this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, i = t.finalText.length; var g = this.data.singleShape,
                E = .001 * t.tr * t.finalSize,
                b = 0,
                _ = 0,
                x = !0,
                T = 0; for (n = 0; n < i; n += 1) { for (o = (a = this.globalData.fontManager.getCharData(t.finalText[n], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, y.reset(), g && v[n].n && (b = -E, _ += t.yOffset, _ += x ? 1 : 0, x = !1), u = (h = o.shapes ? o.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), g && this.applyTextPropertiesToMatrix(t, y, v[n].line, b, _), p = createSizedArray(u), c = 0; c < u; c += 1) { for (l = h[c].ks.k.i.length, f = h[c].ks.k, d = [], s = 1; s < l; s += 1) 1 === s && d.push(y.applyToX(f.v[0][0], f.v[0][1], 0), y.applyToY(f.v[0][0], f.v[0][1], 0)), d.push(y.applyToX(f.o[s - 1][0], f.o[s - 1][1], 0), y.applyToY(f.o[s - 1][0], f.o[s - 1][1], 0), y.applyToX(f.i[s][0], f.i[s][1], 0), y.applyToY(f.i[s][0], f.i[s][1], 0), y.applyToX(f.v[s][0], f.v[s][1], 0), y.applyToY(f.v[s][0], f.v[s][1], 0));
                    d.push(y.applyToX(f.o[s - 1][0], f.o[s - 1][1], 0), y.applyToY(f.o[s - 1][0], f.o[s - 1][1], 0), y.applyToX(f.i[0][0], f.i[0][1], 0), y.applyToY(f.i[0][0], f.i[0][1], 0), y.applyToX(f.v[0][0], f.v[0][1], 0), y.applyToY(f.v[0][0], f.v[0][1], 0)), p[c] = d }
                g && (b += v[n].l, b += E), this.textSpans[T] ? this.textSpans[T].elem = p : this.textSpans[T] = { elem: p }, T += 1 } }, CVTextElement.prototype.renderInnerContent = function() { var t, e, r, n, i, a, o = this.canvasContext;
            o.font = this.values.fValue, o.lineCap = "butt", o.lineJoin = "miter", o.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag); var s, l = this.textAnimator.renderedLetters,
                h = this.textProperty.currentData.l;
            e = h.length; var c, u, f = null,
                p = null,
                d = null; for (t = 0; t < e; t += 1)
                if (!h[t].n) { if ((s = l[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(s.p), this.globalData.renderer.ctxOpacity(s.o)), this.fill) { for (s && s.fc ? f !== s.fc && (f = s.fc, o.fillStyle = s.fc) : f !== this.values.fill && (f = this.values.fill, o.fillStyle = this.values.fill), n = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                            for (a = (u = c[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill() } if (this.stroke) { for (s && s.sw ? d !== s.sw && (d = s.sw, o.lineWidth = s.sw) : d !== this.values.sWidth && (d = this.values.sWidth, o.lineWidth = this.values.sWidth), s && s.sc ? p !== s.sc && (p = s.sc, o.strokeStyle = s.sc) : p !== this.values.stroke && (p = this.values.stroke, o.strokeStyle = this.values.stroke), n = (c = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < n; r += 1)
                            for (a = (u = c[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(u[i], u[i + 1], u[i + 2], u[i + 3], u[i + 4], u[i + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke() }
                    s && this.globalData.renderer.restore() } }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = { checkBlendMode: function() {}, initRendererElement: function() { this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement) }, createContainerElements: function() { this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode() }, renderElement: function() { var t = this.transformedElement ? this.transformedElement.style : {}; if (this.finalTransform._matMdf) { var e = this.finalTransform.mat.toCSS();
                    t.transform = e, t.webkitTransform = e }
                this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v) }, renderFrame: function() { this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1)) }, destroy: function() { this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null) }, createRenderableComponents: function() { this.maskManager = new MaskElement(this.data, this, this.globalData) }, addEffects: function() {}, setMatte: function() {} }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() { var t;
            this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t) }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() { this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement }, HCompElement.prototype.addTo3dContainer = function(t, e) { for (var r, n = 0; n < e;) this.elements[n] && this.elements[n].getBaseElement && (r = this.elements[n].getBaseElement()), n += 1;
            r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t) }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() { var t; if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
            else { t = createNS("svg"); var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t) }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t }, HShapeElement.prototype.getTransformedPoint = function(t, e) { var r, n = t.length; for (r = 0; r < n; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0); return e }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) { var r, n, i, a, o, s = t.sh.v,
                l = t.transformers,
                h = s._length; if (!(h <= 1)) { for (r = 0; r < h - 1; r += 1) n = this.getTransformedPoint(l, s.v[r]), i = this.getTransformedPoint(l, s.o[r]), a = this.getTransformedPoint(l, s.i[r + 1]), o = this.getTransformedPoint(l, s.v[r + 1]), this.checkBounds(n, i, a, o, e);
                s.c && (n = this.getTransformedPoint(l, s.v[r]), i = this.getTransformedPoint(l, s.o[r]), a = this.getTransformedPoint(l, s.i[0]), o = this.getTransformedPoint(l, s.v[0]), this.checkBounds(n, i, a, o, e)) } }, HShapeElement.prototype.checkBounds = function(t, e, r, n, i) { this.getBoundsOfCurve(t, e, r, n); var a = this.shapeBoundingBox;
            i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax) }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, n) { for (var i, a, o, s, l, h, c, u = [
                    [t[0], n[0]],
                    [t[1], n[1]]
                ], f = 0; f < 2; ++f) a = 6 * t[f] - 12 * e[f] + 6 * r[f], i = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * n[f], o = 3 * e[f] - 3 * t[f], a |= 0, o |= 0, 0 == (i |= 0) && 0 === a || (0 === i ? 0 < (s = -o / a) && s < 1 && u[f].push(this.calculateF(s, t, e, r, n, f)) : 0 <= (l = a * a - 4 * o * i) && (0 < (h = (-a + bmSqrt(l)) / (2 * i)) && h < 1 && u[f].push(this.calculateF(h, t, e, r, n, f)), 0 < (c = (-a - bmSqrt(l)) / (2 * i)) && c < 1 && u[f].push(this.calculateF(c, t, e, r, n, f))));
            this.shapeBoundingBox.left = bmMin.apply(null, u[0]), this.shapeBoundingBox.top = bmMin.apply(null, u[1]), this.shapeBoundingBox.right = bmMax.apply(null, u[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, u[1]) }, HShapeElement.prototype.calculateF = function(t, e, r, n, i, a) { return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * n[a] + bmPow(t, 3) * i[a] }, HShapeElement.prototype.calculateBoundingBox = function(t, e) { var r, n = t.length; for (r = 0; r < n; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e) }, HShapeElement.prototype.currentBoxContains = function(t) { return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height }, HShapeElement.prototype.renderInnerContent = function() { if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) { var t = this.tempBoundingBox,
                    e = 999999; if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return; var r = !1; if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) { this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h); var n = this.shapeCont.style,
                        i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    n.transform = i, n.webkitTransform = i } } }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() { if (this.isMasked = this.checkMasks(), this.isMasked) { this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH); var t = createNS("g");
                this.maskedElement.appendChild(t), this.innerElem = t } else this.renderType = "html", this.innerElem = this.layerElement;
            this.checkParenting() }, HTextElement.prototype.buildNewText = function() { var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0); var e = this.innerElem.style,
                r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
            e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px"); var n, i, a = this.globalData.fontManager.getFontByName(t.f); if (!this.globalData.fontManager.chars)
                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
                else { e.fontFamily = a.fFamily; var o = t.fWeight,
                        s = t.fStyle;
                    e.fontStyle = s, e.fontWeight = o }
            var l, h, c, u = t.l;
            i = u.length; var f, p = this.mHelper,
                d = "",
                m = 0; for (n = 0; n < i; n += 1) { if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? c = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (c = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) { var v, y = this.globalData.fontManager.getCharData(t.finalText[n], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily); if (v = y ? y.data : null, p.reset(), v && v.shapes && (f = v.shapes[0].it, p.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(p, f), l.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(l);
                    else { if (this.innerElem.appendChild(h), v && v.shapes) { document.body.appendChild(c); var g = c.getBBox();
                            c.setAttribute("width", g.width + 2), c.setAttribute("height", g.height + 2), c.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2)); var E = c.style,
                                b = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)";
                            E.transform = b, E.webkitTransform = b, u[n].yOffset = g.y - 1 } else c.setAttribute("width", 1), c.setAttribute("height", 1);
                        h.appendChild(c) } } else if (l.textContent = u[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
                else { this.innerElem.appendChild(h); var _ = l.style,
                        x = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                    _.transform = x, _.webkitTransform = x }
                this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1 } for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1 }, HTextElement.prototype.renderInnerContent = function() { var t; if (this.data.singleShape) { if (!this._isFirstFrame && !this.lettersChangedFlag) return; if (this.isMasked && this.finalTransform._matMdf) { this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style; var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    t.transform = e, t.webkitTransform = e } } if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) { var r, n, i, a, o, s = 0,
                    l = this.textAnimator.renderedLetters,
                    h = this.textProperty.currentData.l; for (n = h.length, r = 0; r < n; r += 1) h[r].n ? s += 1 : (a = this.textSpans[r], o = this.textPaths[r], i = l[s], s += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && o.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && o.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (o.setAttribute("fill", i.fc), o.style.color = i.fc)); if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) { var c = this.innerElem.getBBox(); if (this.currentBBox.w !== c.width && (this.currentBBox.w = c.width, this.svgElement.setAttribute("width", c.width)), this.currentBBox.h !== c.height && (this.currentBBox.h = c.height, this.svgElement.setAttribute("height", c.height)), this.currentBBox.w !== c.width + 2 || this.currentBBox.h !== c.height + 2 || this.currentBBox.x !== c.x - 1 || this.currentBBox.y !== c.y - 1) { this.currentBBox.w = c.width + 2, this.currentBBox.h = c.height + 2, this.currentBBox.x = c.x - 1, this.currentBBox.y = c.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style; var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        t.transform = u, t.webkitTransform = u } } } }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() { var t = this.globalData.getAssetsPath(this.assetData),
                e = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln) }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() { var t, e, r, n, i = this.comp.threeDElements.length; for (t = 0; t < i; t += 1)
                if ("3d" === (e = this.comp.threeDElements[t]).type) { r = e.perspectiveElem.style, n = e.container.style; var a = this.pe.v + "px",
                        o = "0px 0px 0px",
                        s = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    r.perspective = a, r.webkitPerspective = a, n.transformOrigin = o, n.mozTransformOrigin = o, n.webkitTransformOrigin = o, r.transform = s, r.webkitTransform = s } }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() { var t, e, r = this._isFirstFrame; if (this.hierarchy)
                for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r; if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) { if (this.mat.reset(), this.hierarchy)
                    for (t = e = this.hierarchy.length - 1; 0 <= t; t -= 1) { var n = this.hierarchy[t].finalTransform.mProp;
                        this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2]) }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) { var i;
                    i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]]; var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                        o = [i[0] / a, i[1] / a, i[2] / a],
                        s = Math.sqrt(o[2] * o[2] + o[0] * o[0]),
                        l = Math.atan2(o[1], s),
                        h = Math.atan2(o[0], -o[2]);
                    this.mat.rotateY(h).rotateX(-l) }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v); var c = !this._prevMat.equals(this.mat); if ((c || this.pe._mdf) && this.comp.threeDElements) { var u, f, p; for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                        if ("3d" === (u = this.comp.threeDElements[t]).type) { if (c) { var d = this.mat.toCSS();
                                (p = u.container.style).transform = d, p.webkitTransform = d }
                            this.pe._mdf && ((f = u.perspectiveElem.style).perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px") }
                    this.mat.clone(this._prevMat) } }
            this._isFirstFrame = !1 }, HCameraElement.prototype.prepareFrame = function(t) { this.prepareProperties(t, !0) }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() { return null }, HEffects.prototype.renderFrame = function() {}; var animationManager = function() { var t = {},
                    e = [],
                    r = 0,
                    n = 0,
                    i = 0,
                    a = !0,
                    o = !1;

                function s(t) { for (var r = 0, i = t.target; r < n;) e[r].animation === i && (e.splice(r, 1), r -= 1, n -= 1, i.isPaused || c()), r += 1 }

                function l(t, r) { if (!t) return null; for (var i = 0; i < n;) { if (e[i].elem === t && null !== e[i].elem) return e[i].animation;
                        i += 1 } var a = new AnimationItem; return u(a, t), a.setData(t, r), a }

                function h() { i += 1, d() }

                function c() { i -= 1 }

                function u(t, r) { t.addEventListener("destroy", s), t.addEventListener("_active", h), t.addEventListener("_idle", c), e.push({ elem: r, animation: t }), n += 1 }

                function f(t) { var s, l = t - r; for (s = 0; s < n; s += 1) e[s].animation.advanceTime(l);
                    r = t, i && !o ? window.requestAnimationFrame(f) : a = !0 }

                function p(t) { r = t, window.requestAnimationFrame(f) }

                function d() {!o && i && a && (window.requestAnimationFrame(p), a = !1) } return t.registerAnimation = l, t.loadAnimation = function(t) { var e = new AnimationItem; return u(e, null), e.setParams(t), e }, t.setSpeed = function(t, r) { var i; for (i = 0; i < n; i += 1) e[i].animation.setSpeed(t, r) }, t.setDirection = function(t, r) { var i; for (i = 0; i < n; i += 1) e[i].animation.setDirection(t, r) }, t.play = function(t) { var r; for (r = 0; r < n; r += 1) e[r].animation.play(t) }, t.pause = function(t) { var r; for (r = 0; r < n; r += 1) e[r].animation.pause(t) }, t.stop = function(t) { var r; for (r = 0; r < n; r += 1) e[r].animation.stop(t) }, t.togglePause = function(t) { var r; for (r = 0; r < n; r += 1) e[r].animation.togglePause(t) }, t.searchAnimations = function(t, e, r) { var n, i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                        a = i.length; for (n = 0; n < a; n += 1) r && i[n].setAttribute("data-bm-type", r), l(i[n], t); if (e && 0 === a) { r || (r = "svg"); var o = document.getElementsByTagName("body")[0];
                        o.innerText = ""; var s = createTag("div");
                        s.style.width = "100%", s.style.height = "100%", s.setAttribute("data-bm-type", r), o.appendChild(s), l(s, t) } }, t.resize = function() { var t; for (t = 0; t < n; t += 1) e[t].animation.resize() }, t.goToAndStop = function(t, r, i) { var a; for (a = 0; a < n; a += 1) e[a].animation.goToAndStop(t, r, i) }, t.destroy = function(t) { var r; for (r = n - 1; 0 <= r; r -= 1) e[r].animation.destroy(t) }, t.freeze = function() { o = !0 }, t.unfreeze = function() { o = !1, d() }, t.setVolume = function(t, r) { var i; for (i = 0; i < n; i += 1) e[i].animation.setVolume(t, r) }, t.mute = function(t) { var r; for (r = 0; r < n; r += 1) e[r].animation.mute(t) }, t.unmute = function(t) { var r; for (r = 0; r < n; r += 1) e[r].animation.unmute(t) }, t.getRegisteredAnimations = function() { var t, r = e.length,
                        n = []; for (t = 0; t < r; t += 1) n.push(e[t].animation); return n }, t }(),
            AnimationItem = function() { this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [] };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container); var e = "svg"; switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
                case "canvas":
                    this.renderer = new CanvasRenderer(this, t.rendererSettings); break;
                case "svg":
                    this.renderer = new SVGRenderer(this, t.rendererSettings); break;
                default:
                    this.renderer = new HybridRenderer(this, t.rendererSettings) }
            this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() { this.trigger("data_failed") }.bind(this))) }, AnimationItem.prototype.setData = function(t, e) { e && "object" != typeof e && (e = JSON.parse(e)); var r = { wrapper: t, animationData: e },
                n = t.attributes;
            r.path = n.getNamedItem("data-animation-path") ? n.getNamedItem("data-animation-path").value : n.getNamedItem("data-bm-path") ? n.getNamedItem("data-bm-path").value : n.getNamedItem("bm-path") ? n.getNamedItem("bm-path").value : "", r.animType = n.getNamedItem("data-anim-type") ? n.getNamedItem("data-anim-type").value : n.getNamedItem("data-bm-type") ? n.getNamedItem("data-bm-type").value : n.getNamedItem("bm-type") ? n.getNamedItem("bm-type").value : n.getNamedItem("data-bm-renderer") ? n.getNamedItem("data-bm-renderer").value : n.getNamedItem("bm-renderer") ? n.getNamedItem("bm-renderer").value : "canvas"; var i = n.getNamedItem("data-anim-loop") ? n.getNamedItem("data-anim-loop").value : n.getNamedItem("data-bm-loop") ? n.getNamedItem("data-bm-loop").value : n.getNamedItem("bm-loop") ? n.getNamedItem("bm-loop").value : ""; "false" === i ? r.loop = !1 : "true" === i ? r.loop = !0 : "" !== i && (r.loop = parseInt(i, 10)); var a = n.getNamedItem("data-anim-autoplay") ? n.getNamedItem("data-anim-autoplay").value : n.getNamedItem("data-bm-autoplay") ? n.getNamedItem("data-bm-autoplay").value : !n.getNamedItem("bm-autoplay") || n.getNamedItem("bm-autoplay").value;
            r.autoplay = "false" !== a, r.name = n.getNamedItem("data-name") ? n.getNamedItem("data-name").value : n.getNamedItem("data-bm-name") ? n.getNamedItem("data-bm-name").value : n.getNamedItem("bm-name") ? n.getNamedItem("bm-name").value : "", "false" === (n.getNamedItem("data-anim-prerender") ? n.getNamedItem("data-anim-prerender").value : n.getNamedItem("data-bm-prerender") ? n.getNamedItem("data-bm-prerender").value : n.getNamedItem("bm-prerender") ? n.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r) }, AnimationItem.prototype.includeLayers = function(t) { t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip)); var e, r, n = this.animationData.layers,
                i = n.length,
                a = t.layers,
                o = a.length; for (r = 0; r < o; r += 1)
                for (e = 0; e < i;) { if (n[e].id === a[r].id) { n[e] = a[r]; break }
                    e += 1 }
            if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                for (i = t.assets.length, e = 0; e < i; e += 1) this.animationData.assets.push(t.assets[e]);
            this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment() }, AnimationItem.prototype.loadNextSegment = function() { var t = this.animationData.segments; if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames); var e = t.shift();
            this.timeCompleted = e.time * this.frameRate; var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1, assetLoader.load(r, this.includeLayers.bind(this), function() { this.trigger("data_failed") }.bind(this)) }, AnimationItem.prototype.loadSegments = function() { this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment() }, AnimationItem.prototype.imagesLoaded = function() { this.trigger("loaded_images"), this.checkLoaded() }, AnimationItem.prototype.preloadImages = function() { this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this)) }, AnimationItem.prototype.configAnimation = function(t) { if (this.renderer) try { this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause() } catch (t) { this.triggerConfigError(t) } }, AnimationItem.prototype.waitForFontsLoaded = function() { this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20)) }, AnimationItem.prototype.checkLoaded = function() {!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() { this.trigger("DOMLoaded") }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()) }, AnimationItem.prototype.resize = function() { this.renderer.updateContainerSize() }, AnimationItem.prototype.setSubframe = function(t) { this.isSubframeEnabled = !!t }, AnimationItem.prototype.gotoFrame = function() { this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame() }, AnimationItem.prototype.renderFrame = function() { if (!1 !== this.isLoaded && this.renderer) try { this.renderer.renderFrame(this.currentFrame + this.firstFrame) } catch (t) { this.triggerRenderFrameError(t) } }, AnimationItem.prototype.play = function(t) { t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active"))) }, AnimationItem.prototype.pause = function(t) { t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause()) }, AnimationItem.prototype.togglePause = function(t) { t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause()) }, AnimationItem.prototype.stop = function(t) { t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0)) }, AnimationItem.prototype.getMarkerData = function(t) { for (var e, r = 0; r < this.markers.length; r += 1)
                if ((e = this.markers[r]).payload && e.payload.name === t) return e;
            return null }, AnimationItem.prototype.goToAndStop = function(t, e, r) { if (!r || this.name === r) { var n = Number(t); if (isNaN(n)) { var i = this.getMarkerData(t);
                    i && this.goToAndStop(i.time, !0) } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause() } }, AnimationItem.prototype.goToAndPlay = function(t, e, r) { if (!r || this.name === r) { var n = Number(t); if (isNaN(n)) { var i = this.getMarkerData(t);
                    i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0)) } else this.goToAndStop(n, e, r);
                this.play() } }, AnimationItem.prototype.advanceTime = function(t) { if (!0 !== this.isPaused && !1 !== this.isLoaded) { var e = this.currentRawFrame + t * this.frameModifier,
                    r = !1;
                e >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete")) } }, AnimationItem.prototype.adjustSegment = function(t, e) { this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart") }, AnimationItem.prototype.setSegment = function(t, e) { var r = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0) }, AnimationItem.prototype.playSegments = function(t, e) { if (e && (this.segments.length = 0), "object" == typeof t[0]) { var r, n = t.length; for (r = 0; r < n; r += 1) this.segments.push(t[r]) } else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play() }, AnimationItem.prototype.resetSegments = function(t) { this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0) }, AnimationItem.prototype.checkSegments = function(t) { return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0) }, AnimationItem.prototype.destroy = function(t) { t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null) }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) { this.currentRawFrame = t, this.gotoFrame() }, AnimationItem.prototype.setSpeed = function(t) { this.playSpeed = t, this.updaFrameModifier() }, AnimationItem.prototype.setDirection = function(t) { this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier() }, AnimationItem.prototype.setVolume = function(t, e) { e && this.name !== e || this.audioController.setVolume(t) }, AnimationItem.prototype.getVolume = function() { return this.audioController.getVolume() }, AnimationItem.prototype.mute = function(t) { t && this.name !== t || this.audioController.mute() }, AnimationItem.prototype.unmute = function(t) { t && this.name !== t || this.audioController.unmute() }, AnimationItem.prototype.updaFrameModifier = function() { this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection) }, AnimationItem.prototype.getPath = function() { return this.path }, AnimationItem.prototype.getAssetsPath = function(t) { var e = ""; if (t.e) e = t.p;
            else if (this.assetsPath) { var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r } else e = this.path, e += t.u ? t.u : "", e += t.p; return e }, AnimationItem.prototype.getAssetData = function(t) { for (var e = 0, r = this.assets.length; e < r;) { if (t === this.assets[e].id) return this.assets[e];
                e += 1 } return null }, AnimationItem.prototype.hide = function() { this.renderer.hide() }, AnimationItem.prototype.show = function() { this.renderer.show() }, AnimationItem.prototype.getDuration = function(t) { return t ? this.totalFrames : this.totalFrames / this.frameRate }, AnimationItem.prototype.trigger = function(t) { if (this._cbs && this._cbs[t]) switch (t) {
                case "enterFrame":
                    this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier)); break;
                case "loopComplete":
                    this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)); break;
                case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult)); break;
                case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)); break;
                case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this)); break;
                default:
                    this.triggerEvent(t) }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this)) }, AnimationItem.prototype.triggerRenderFrameError = function(t) { var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e) }, AnimationItem.prototype.triggerConfigError = function(t) { var e = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", e), this.onError && this.onError.call(this, e) }; var Expressions = (EY = {}, EY.initExpressions = function(t) { var e = 0,
                    r = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() { e += 1 }, t.renderer.globalData.popExpression = function() { 0 == (e -= 1) && function() { var t, e = r.length; for (t = 0; t < e; t += 1) r[t].release();
                        r.length = 0 }() }, t.renderer.globalData.registerExpressionProperty = function(t) {-1 === r.indexOf(t) && r.push(t) } }, EY),
            EY;
        expressionsPlugin = Expressions; var ExpressionManager = function() { var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null,
                    XMLHttpRequest = null,
                    fetch = null;

                function $bm_isInstanceOfArray(t) { return t.constructor === Array || t.constructor === Float32Array }

                function isNumerable(t, e) { return "number" === t || "boolean" === t || "string" === t || e instanceof Number }

                function $bm_neg(t) { var e = typeof t; if ("number" === e || "boolean" === e || t instanceof Number) return -t; if ($bm_isInstanceOfArray(t)) { var r, n = t.length,
                            i = []; for (r = 0; r < n; r += 1) i[r] = -t[r]; return i } return t.propType ? t.v : -t } var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                    easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                    easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                function sum(t, e) { var r = typeof t,
                        n = typeof e; if ("string" === r || "string" === n) return t + e; if (isNumerable(r, t) && isNumerable(n, e)) return t + e; if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] += e, t; if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e; if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) { for (var i = 0, a = t.length, o = e.length, s = []; i < a || i < o;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? s[i] = t[i] + e[i] : s[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1; return s } return 0 } var add = sum;

                function sub(t, e) { var r = typeof t,
                        n = typeof e; if (isNumerable(r, t) && isNumerable(n, e)) return "string" === r && (t = parseInt(t, 10)), "string" === n && (e = parseInt(e, 10)), t - e; if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) return (t = t.slice(0))[0] -= e, t; if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e; if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) { for (var i = 0, a = t.length, o = e.length, s = []; i < a || i < o;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? s[i] = t[i] - e[i] : s[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1; return s } return 0 }

                function mul(t, e) { var r, n, i, a = typeof t,
                        o = typeof e; if (isNumerable(a, t) && isNumerable(o, e)) return t * e; if ($bm_isInstanceOfArray(t) && isNumerable(o, e)) { for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] * e; return r } if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) { for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t * e[n]; return r } return 0 }

                function div(t, e) { var r, n, i, a = typeof t,
                        o = typeof e; if (isNumerable(a, t) && isNumerable(o, e)) return t / e; if ($bm_isInstanceOfArray(t) && isNumerable(o, e)) { for (i = t.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t[n] / e; return r } if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) { for (i = e.length, r = createTypedArray("float32", i), n = 0; n < i; n += 1) r[n] = t / e[n]; return r } return 0 }

                function mod(t, e) { return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e } var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;

                function clamp(t, e, r) { if (r < e) { var n = r;
                        r = e, e = n } return Math.min(Math.max(t, e), r) }

                function radiansToDegrees(t) { return t / degToRads } var radians_to_degrees = radiansToDegrees;

                function degreesToRadians(t) { return t * degToRads } var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];

                function length(t, e) { if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e); var r;
                    e || (e = helperLengthArray); var n = Math.min(t.length, e.length),
                        i = 0; for (r = 0; r < n; r += 1) i += Math.pow(e[r] - t[r], 2); return Math.sqrt(i) }

                function normalize(t) { return div(t, length(t)) }

                function rgbToHsl(t) { var e, r, n = t[0],
                        i = t[1],
                        a = t[2],
                        o = Math.max(n, i, a),
                        s = Math.min(n, i, a),
                        l = (o + s) / 2; if (o === s) r = e = 0;
                    else { var h = o - s; switch (r = .5 < l ? h / (2 - o - s) : h / (o + s), o) {
                            case n:
                                e = (i - a) / h + (i < a ? 6 : 0); break;
                            case i:
                                e = (a - n) / h + 2; break;
                            case a:
                                e = (n - i) / h + 4 }
                        e /= 6 } return [e, r, l, t[3]] }

                function hue2rgb(t, e, r) { return r < 0 && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t }

                function hslToRgb(t) { var e, r, n, i = t[0],
                        a = t[1],
                        o = t[2]; if (0 === a) r = n = e = o;
                    else { var s = o < .5 ? o * (1 + a) : o + a - o * a,
                            l = 2 * o - s;
                        e = hue2rgb(l, s, i + 1 / 3), r = hue2rgb(l, s, i), n = hue2rgb(l, s, i - 1 / 3) } return [e, r, n, t[3]] }

                function linear(t, e, r, n, i) { if (void 0 !== n && void 0 !== i || (n = e, i = r, e = 0, r = 1), r < e) { var a = r;
                        r = e, e = a } if (t <= e) return n; if (r <= t) return i; var o, s = r === e ? 0 : (t - e) / (r - e); if (!n.length) return n + (i - n) * s; var l = n.length,
                        h = createTypedArray("float32", l); for (o = 0; o < l; o += 1) h[o] = n[o] + (i[o] - n[o]) * s; return h }

                function random(t, e) { if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) { var r, n = e.length;
                        t || (t = createTypedArray("float32", n)); var i = createTypedArray("float32", n),
                            a = BMMath.random(); for (r = 0; r < n; r += 1) i[r] = t[r] + a * (e[r] - t[r]); return i } return void 0 === t && (t = 0), t + BMMath.random() * (e - t) }

                function createPath(t, e, r, n) { var i, a = t.length,
                        o = shapePool.newElement();
                    o.setPathData(!!n, a); var s, l, h = [0, 0]; for (i = 0; i < a; i += 1) s = e && e[i] ? e[i] : h, l = r && r[i] ? r[i] : h, o.setTripleAt(t[i][0], t[i][1], l[0] + t[i][0], l[1] + t[i][1], s[0] + t[i][0], s[1] + t[i][1], i, !0); return o }

                function initiateExpression(elem, data, property) { var val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = -1 !== val.indexOf("random"),
                        elemType = elem.data.ty,
                        transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() { return thisProperty.v } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0; var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || !0 !== this.data.hd,
                        wiggle = function(t, e) { var r, n, i = this.pv.length ? this.pv.length : 1,
                                a = createTypedArray("float32", i),
                                o = Math.floor(5 * time); for (n = r = 0; r < o;) { for (n = 0; n < i; n += 1) a[n] += -e + 2 * e * BMMath.random();
                                r += 1 } var s = 5 * time,
                                l = s - Math.floor(s),
                                h = createTypedArray("float32", i); if (1 < i) { for (n = 0; n < i; n += 1) h[n] = this.pv[n] + a[n] + (-e + 2 * e * BMMath.random()) * l; return h } return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l }.bind(this);

                    function loopInDuration(t, e) { return loopIn(t, e, !0) }

                    function loopOutDuration(t, e) { return loopOut(t, e, !0) }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this)); var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                        time, velocity, value, text, textIndex, textTotal, selectorValue;

                    function lookAt(t, e) { var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                            n = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads; return [-Math.atan2(r[1], r[2]) / degToRads, n, 0] }

                    function easeOut(t, e, r, n, i) { return applyEase(easeOutBez, t, e, r, n, i) }

                    function easeIn(t, e, r, n, i) { return applyEase(easeInBez, t, e, r, n, i) }

                    function ease(t, e, r, n, i) { return applyEase(easeInOutBez, t, e, r, n, i) }

                    function applyEase(t, e, r, n, i, a) { void 0 === i ? (i = r, a = n) : e = (e - r) / (n - r), 1 < e ? e = 1 : e < 0 && (e = 0); var o = t(e); if ($bm_isInstanceOfArray(i)) { var s, l = i.length,
                                h = createTypedArray("float32", l); for (s = 0; s < l; s += 1) h[s] = (a[s] - i[s]) * o + i[s]; return h } return (a - i) * o + i }

                    function nearestKey(t) { var e, r, n, i = data.k.length; if (data.k.length && "number" != typeof data.k[0])
                            if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, n = data.k[0].t;
                            else { for (e = 0; e < i - 1; e += 1) { if (t === data.k[e].t) { r = e + 1, n = data.k[e].t; break } if (t > data.k[e].t && t < data.k[e + 1].t) { n = t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, data.k[e + 1].t) : (r = e + 1, data.k[e].t); break } } - 1 === r && (r = e + 1, n = data.k[e].t) }
                        else n = r = 0; var a = {}; return a.index = r, a.time = n / elem.comp.globalData.frameRate, a }

                    function key(t) { var e, r, n; if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                        t -= 1, e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] }; var i = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e; for (n = i.length, r = 0; r < n; r += 1) e[r] = i[r], e.value[r] = i[r]; return e }

                    function framesToTime(t, e) { return e || (e = elem.comp.globalData.frameRate), t / e }

                    function timeToFrames(t, e) { return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e }

                    function seedRandom(t) { BMMath.seedrandom(randSeed + t) }

                    function sourceRectAtTime() { return elem.sourceRectAtTime() }

                    function substring(t, e) { return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : "" }

                    function substr(t, e) { return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : "" }

                    function posterizeTime(t) { time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time) } var index = elem.data.ind,
                        hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                        parent, randSeed = Math.floor(1e6 * Math.random()),
                        globalData = elem.globalData;

                    function executeExpression(t) { return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt) } return executeExpression } return ob.initiateExpression = initiateExpression, ob }(),
            expressionHelpers = { searchExpressions: function(t, e, r) { e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r))) }, getSpeedAtTime: function(t) { var e = this.getValueAtTime(t),
                        r = this.getValueAtTime(t + -.01),
                        n = 0; if (e.length) { var i; for (i = 0; i < e.length; i += 1) n += Math.pow(r[i] - e[i], 2);
                        n = 100 * Math.sqrt(n) } else n = 0; return n }, getVelocityAtTime: function(t) { if (void 0 !== this.vel) return this.vel; var e, r, n = this.getValueAtTime(t),
                        i = this.getValueAtTime(t + -.001); if (n.length)
                        for (e = createTypedArray("float32", n.length), r = 0; r < n.length; r += 1) e[r] = (i[r] - n[r]) / -.001;
                    else e = (i - n) / -.001; return e }, getValueAtTime: function(t) { return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value }, getStaticValueAtTime: function() { return this.pv }, setGroupProperty: function(t) { this.propertyGroup = t } };! function() {
            function t(t, e, r) { if (!this.k || !this.keyframes) return this.pv;
                t = t ? t.toLowerCase() : ""; var n, i, a, o, s, l = this.comp.renderedFrame,
                    h = this.keyframes,
                    c = h[h.length - 1].t; if (l <= c) return this.pv; if (r ? i = c - (n = e ? Math.abs(c - this.elem.comp.globalData.frameRate * e) : Math.max(0, c - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), n = c - (i = h[h.length - 1 - e].t)), "pingpong" === t) { if (Math.floor((l - i) / n) % 2 != 0) return this.getValueAtTime((n - (l - i) % n + i) / this.comp.globalData.frameRate, 0) } else { if ("offset" === t) { var u = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            p = this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0),
                            d = Math.floor((l - i) / n); if (this.pv.length) { for (o = (s = new Array(u.length)).length, a = 0; a < o; a += 1) s[a] = (f[a] - u[a]) * d + p[a]; return s } return (f - u) * d + p } if ("continue" === t) { var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            v = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0); if (this.pv.length) { for (o = (s = new Array(m.length)).length, a = 0; a < o; a += 1) s[a] = m[a] + (m[a] - v[a]) * ((l - c) / this.comp.globalData.frameRate) / 5e-4; return s } return m + (l - c) / .001 * (m - v) } } return this.getValueAtTime(((l - i) % n + i) / this.comp.globalData.frameRate, 0) }

            function e(t, e, r) { if (!this.k) return this.pv;
                t = t ? t.toLowerCase() : ""; var n, i, a, o, s, l = this.comp.renderedFrame,
                    h = this.keyframes,
                    c = h[0].t; if (c <= l) return this.pv; if (r ? i = c + (n = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - c)) : ((!e || e > h.length - 1) && (e = h.length - 1), n = (i = h[e].t) - c), "pingpong" === t) { if (Math.floor((c - l) / n) % 2 == 0) return this.getValueAtTime(((c - l) % n + c) / this.comp.globalData.frameRate, 0) } else { if ("offset" === t) { var u = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            f = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                            p = this.getValueAtTime((n - (c - l) % n + c) / this.comp.globalData.frameRate, 0),
                            d = Math.floor((c - l) / n) + 1; if (this.pv.length) { for (o = (s = new Array(u.length)).length, a = 0; a < o; a += 1) s[a] = p[a] - (f[a] - u[a]) * d; return s } return p - (f - u) * d } if ("continue" === t) { var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                            v = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0); if (this.pv.length) { for (o = (s = new Array(m.length)).length, a = 0; a < o; a += 1) s[a] = m[a] + (m[a] - v[a]) * (c - l) / .001; return s } return m + (m - v) * (c - l) / .001 } } return this.getValueAtTime((n - ((c - l) % n + c)) / this.comp.globalData.frameRate, 0) }

            function r(t, e) { if (!this.k) return this.pv; if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv; var r, n, i = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    a = i - t,
                    o = 1 < e ? (i + t - a) / (e - 1) : 1,
                    s = 0,
                    l = 0; for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; s < e;) { if (n = this.getValueAtTime(a + s * o), this.pv.length)
                        for (l = 0; l < this.pv.length; l += 1) r[l] += n[l];
                    else r += n;
                    s += 1 } if (this.pv.length)
                    for (l = 0; l < this.pv.length; l += 1) r[l] /= e;
                else r /= e; return r } var n = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(t, e, r) { var i = n(t, e, r); return i.dynamicProperties.length ? i.getValueAtTime = function(t) { this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix }); var e = this._transformCachingAtTime.v; if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) { var r = this.a.getValueAtTime(t);
                        e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult) } if (this.appliedTransformations < 2) { var n = this.s.getValueAtTime(t);
                        e.scale(n[0] * this.s.mult, n[1] * this.s.mult, n[2] * this.s.mult) } if (this.sk && this.appliedTransformations < 3) { var i = this.sk.getValueAtTime(t),
                            a = this.sa.getValueAtTime(t);
                        e.skewFromAxis(-i * this.sk.mult, a * this.sa.mult) } if (this.r && this.appliedTransformations < 4) { var o = this.r.getValueAtTime(t);
                        e.rotate(-o * this.r.mult) } else if (!this.r && this.appliedTransformations < 4) { var s = this.rz.getValueAtTime(t),
                            l = this.ry.getValueAtTime(t),
                            h = this.rx.getValueAtTime(t),
                            c = this.or.getValueAtTime(t);
                        e.rotateZ(-s * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-c[2] * this.or.mult).rotateY(c[1] * this.or.mult).rotateX(c[0] * this.or.mult) } if (this.data.p && this.data.p.s) { var u = this.px.getValueAtTime(t),
                            f = this.py.getValueAtTime(t); if (this.data.p.z) { var p = this.pz.getValueAtTime(t);
                            e.translate(u * this.px.mult, f * this.py.mult, -p * this.pz.mult) } else e.translate(u * this.px.mult, f * this.py.mult, 0) } else { var d = this.p.getValueAtTime(t);
                        e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult) } return e }.bind(i) : i.getValueAtTime = function() { return this.v.clone(new Matrix) }.bind(i), i.setGroupProperty = expressionHelpers.setGroupProperty, i }; var i = PropertyFactory.getProp;
            PropertyFactory.getProp = function(n, a, o, s, l) { var h = i(n, a, o, s, l);
                h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === a.a ? a.k.length : 0, h.propertyIndex = a.ix; var c = 0; return 0 !== o && (c = createTypedArray("float32", 1 === a.a ? a.k[0].s.length : a.k.length)), h._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: c }, expressionHelpers.searchExpressions(n, a, h), h.k && l.addDynamicProperty(h), h }; var a = ShapePropertyFactory.getConstructorFunction(),
                o = ShapePropertyFactory.getKeyframedConstructorFunction();

            function s() {}
            s.prototype = { vertices: function(t, e) { this.k && this.getValue(); var r, n = this.v;
                    void 0 !== e && (n = this.getValueAtTime(e, 0)); var i = n._length,
                        a = n[t],
                        o = n.v,
                        s = createSizedArray(i); for (r = 0; r < i; r += 1) s[r] = "i" === t || "o" === t ? [a[r][0] - o[r][0], a[r][1] - o[r][1]] : [a[r][0], a[r][1]]; return s }, points: function(t) { return this.vertices("v", t) }, inTangents: function(t) { return this.vertices("i", t) }, outTangents: function(t) { return this.vertices("o", t) }, isClosed: function() { return this.v.c }, pointOnPath: function(t, e) { var r = this.v;
                    void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r)); for (var n, i = this._segmentsLength, a = i.lengths, o = i.totalLength * t, s = 0, l = a.length, h = 0; s < l;) { if (h + a[s].addedLength > o) { var c = s,
                                u = r.c && s === l - 1 ? 0 : s + 1,
                                f = (o - h) / a[s].addedLength;
                            n = bez.getPointInSegment(r.v[c], r.v[u], r.o[c], r.i[u], f, a[s]); break }
                        h += a[s].addedLength, s += 1 } return n || (n = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), n }, vectorOnPath: function(t, e, r) { 1 == t ? t = this.v.c : 0 == t && (t = .999); var n = this.pointOnPath(t, e),
                        i = this.pointOnPath(t + .001, e),
                        a = i[0] - n[0],
                        o = i[1] - n[1],
                        s = Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2)); return 0 === s ? [0, 0] : "tangent" === r ? [a / s, o / s] : [-o / s, a / s] }, tangentOnPath: function(t, e) { return this.vectorOnPath(t, e, "tangent") }, normalOnPath: function(t, e) { return this.vectorOnPath(t, e, "normal") }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([s], a), extendPrototype([s], o), o.prototype.getValueAtTime = function(t) { return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue }, o.prototype.initiateExpression = ExpressionManager.initiateExpression; var l = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t, e, r, n, i) { var a = l(t, e, r, n, i); return a.propertyIndex = e.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a } }(), TextProperty.prototype.getExpressionValue = function(t, e) { var r = this.calculateExpression(e); if (t.t === r) return t; var n = {}; return this.copyData(n, t), n.t = r.toString(), n.__complete = !1, n }, TextProperty.prototype.searchProperty = function() { var t = this.searchKeyframes(),
                e = this.searchExpressions(); return this.kf = t || e, this.kf }, TextProperty.prototype.searchExpressions = function() { return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null }; var ShapePathInterface = function(t, e, r) { var n = e.sh;

                function i(t) { return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? i.path : null } var a = propertyGroupFactory(i, r); return n.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, { path: { get: function() { return n.k && n.getValue(), n } }, shape: { get: function() { return n.k && n.getValue(), n } }, _name: { value: t.nm }, ix: { value: t.ix }, propertyIndex: { value: t.ix }, mn: { value: t.mn }, propertyGroup: { value: r } }), i },
            propertyGroupFactory = function(t, e) { return function(r) { return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1) } },
            PropertyInterface = function(t, e) { var r = { _name: t }; return function(t) { return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1) } },
            ShapeExpressionInterface = function() {
                function t(t, o, f) { var p, d = [],
                        m = t ? t.length : 0; for (p = 0; p < m; p += 1) "gr" === t[p].ty ? d.push(e(t[p], o[p], f)) : "fl" === t[p].ty ? d.push(r(t[p], o[p], f)) : "st" === t[p].ty ? d.push(i(t[p], o[p], f)) : "tm" === t[p].ty ? d.push(a(t[p], o[p], f)) : "tr" === t[p].ty || ("el" === t[p].ty ? d.push(s(t[p], o[p], f)) : "sr" === t[p].ty ? d.push(l(t[p], o[p], f)) : "sh" === t[p].ty ? d.push(ShapePathInterface(t[p], o[p], f)) : "rc" === t[p].ty ? d.push(h(t[p], o[p], f)) : "rd" === t[p].ty ? d.push(c(t[p], o[p], f)) : "rp" === t[p].ty ? d.push(u(t[p], o[p], f)) : "gf" === t[p].ty ? d.push(n(t[p], o[p], f)) : d.push((t[p], o[p], function() { return null }))); return d }

                function e(e, r, n) { var i = function(t) { switch (t) {
                            case "ADBE Vectors Group":
                            case "Contents":
                            case 2:
                                return i.content;
                            default:
                                return i.transform } };
                    i.propertyGroup = propertyGroupFactory(i, n); var a = function(e, r, n) { var i, a = function(t) { for (var e = 0, r = i.length; e < r;) { if (i[e]._name === t || i[e].mn === t || i[e].propertyIndex === t || i[e].ix === t || i[e].ind === t) return i[e];
                                    e += 1 } return "number" == typeof t ? i[t - 1] : null };
                            a.propertyGroup = propertyGroupFactory(a, n), i = t(e.it, r.it, a.propertyGroup), a.numProperties = i.length; var s = o(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup); return a.transform = s, a.propertyIndex = e.cix, a._name = e.nm, a }(e, r, i.propertyGroup),
                        s = o(e.it[e.it.length - 1], r.it[r.it.length - 1], i.propertyGroup); return i.content = a, i.transform = s, Object.defineProperty(i, "_name", { get: function() { return e.nm } }), i.numProperties = e.np, i.propertyIndex = e.ix, i.nm = e.nm, i.mn = e.mn, i }

                function r(t, e, r) {
                    function n(t) { return "Color" === t || "color" === t ? n.color : "Opacity" === t || "opacity" === t ? n.opacity : null } return Object.defineProperties(n, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), n }

                function n(t, e, r) {
                    function n(t) { return "Start Point" === t || "start point" === t ? n.startPoint : "End Point" === t || "end point" === t ? n.endPoint : "Opacity" === t || "opacity" === t ? n.opacity : null } return Object.defineProperties(n, { startPoint: { get: ExpressionPropertyInterface(e.s) }, endPoint: { get: ExpressionPropertyInterface(e.e) }, opacity: { get: ExpressionPropertyInterface(e.o) }, type: { get: function() { return "a" } }, _name: { value: t.nm }, mn: { value: t.mn } }), e.s.setGroupProperty(PropertyInterface("Start Point", r)), e.e.setGroupProperty(PropertyInterface("End Point", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), n }

                function i(t, e, r) { var n, i, a = propertyGroupFactory(h, r),
                        o = propertyGroupFactory(l, a),
                        s = t.d ? t.d.length : 0,
                        l = {}; for (n = 0; n < s; n += 1) i = n, Object.defineProperty(l, t.d[i].nm, { get: ExpressionPropertyInterface(e.d.dataProps[i].p) }), e.d.dataProps[n].p.setGroupProperty(o);

                    function h(t) { return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : null } return Object.defineProperties(h, { color: { get: ExpressionPropertyInterface(e.c) }, opacity: { get: ExpressionPropertyInterface(e.o) }, strokeWidth: { get: ExpressionPropertyInterface(e.w) }, dash: { get: function() { return l } }, _name: { value: t.nm }, mn: { value: t.mn } }), e.c.setGroupProperty(PropertyInterface("Color", a)), e.o.setGroupProperty(PropertyInterface("Opacity", a)), e.w.setGroupProperty(PropertyInterface("Stroke Width", a)), h }

                function a(t, e, r) {
                    function n(e) { return e === t.e.ix || "End" === e || "end" === e ? n.end : e === t.s.ix ? n.start : e === t.o.ix ? n.offset : null } var i = propertyGroupFactory(n, r); return n.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", i)), e.e.setGroupProperty(PropertyInterface("End", i)), e.o.setGroupProperty(PropertyInterface("Offset", i)), n.propertyIndex = t.ix, n.propertyGroup = r, Object.defineProperties(n, { start: { get: ExpressionPropertyInterface(e.s) }, end: { get: ExpressionPropertyInterface(e.e) }, offset: { get: ExpressionPropertyInterface(e.o) }, _name: { value: t.nm } }), n.mn = t.mn, n }

                function o(t, e, r) {
                    function n(e) { return t.a.ix === e || "Anchor Point" === e ? n.anchorPoint : t.o.ix === e || "Opacity" === e ? n.opacity : t.p.ix === e || "Position" === e ? n.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? n.rotation : t.s.ix === e || "Scale" === e ? n.scale : t.sk && t.sk.ix === e || "Skew" === e ? n.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? n.skewAxis : null } var i = propertyGroupFactory(n, r); return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", i)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", i)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", i)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", i)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", i)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", i)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", i))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", i)), Object.defineProperties(n, { opacity: { get: ExpressionPropertyInterface(e.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(e.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(e.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(e.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(e.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(e.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(e.transform.mProps.sa) }, _name: { value: t.nm } }), n.ty = "tr", n.mn = t.mn, n.propertyGroup = r, n }

                function s(t, e, r) {
                    function n(e) { return t.p.ix === e ? n.position : t.s.ix === e ? n.size : null } var i = propertyGroupFactory(n, r);
                    n.propertyIndex = t.ix; var a = "tm" === e.sh.ty ? e.sh.prop : e.sh; return a.s.setGroupProperty(PropertyInterface("Size", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), Object.defineProperties(n, { size: { get: ExpressionPropertyInterface(a.s) }, position: { get: ExpressionPropertyInterface(a.p) }, _name: { value: t.nm } }), n.mn = t.mn, n }

                function l(t, e, r) {
                    function n(e) { return t.p.ix === e ? n.position : t.r.ix === e ? n.rotation : t.pt.ix === e ? n.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? n.outerRadius : t.os.ix === e ? n.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? n.innerRoundness : null : n.innerRadius } var i = propertyGroupFactory(n, r),
                        a = "tm" === e.sh.ty ? e.sh.prop : e.sh; return n.propertyIndex = t.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", i)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", i)), a.pt.setGroupProperty(PropertyInterface("Points", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", i)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", i))), Object.defineProperties(n, { position: { get: ExpressionPropertyInterface(a.p) }, rotation: { get: ExpressionPropertyInterface(a.r) }, points: { get: ExpressionPropertyInterface(a.pt) }, outerRadius: { get: ExpressionPropertyInterface(a.or) }, outerRoundness: { get: ExpressionPropertyInterface(a.os) }, innerRadius: { get: ExpressionPropertyInterface(a.ir) }, innerRoundness: { get: ExpressionPropertyInterface(a.is) }, _name: { value: t.nm } }), n.mn = t.mn, n }

                function h(t, e, r) {
                    function n(e) { return t.p.ix === e ? n.position : t.r.ix === e ? n.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? n.size : null } var i = propertyGroupFactory(n, r),
                        a = "tm" === e.sh.ty ? e.sh.prop : e.sh; return n.propertyIndex = t.ix, a.p.setGroupProperty(PropertyInterface("Position", i)), a.s.setGroupProperty(PropertyInterface("Size", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), Object.defineProperties(n, { position: { get: ExpressionPropertyInterface(a.p) }, roundness: { get: ExpressionPropertyInterface(a.r) }, size: { get: ExpressionPropertyInterface(a.s) }, _name: { value: t.nm } }), n.mn = t.mn, n }

                function c(t, e, r) {
                    function n(e) { return t.r.ix === e || "Round Corners 1" === e ? n.radius : null } var i = propertyGroupFactory(n, r),
                        a = e; return n.propertyIndex = t.ix, a.rd.setGroupProperty(PropertyInterface("Radius", i)), Object.defineProperties(n, { radius: { get: ExpressionPropertyInterface(a.rd) }, _name: { value: t.nm } }), n.mn = t.mn, n }

                function u(t, e, r) {
                    function n(e) { return t.c.ix === e || "Copies" === e ? n.copies : t.o.ix === e || "Offset" === e ? n.offset : null } var i = propertyGroupFactory(n, r),
                        a = e; return n.propertyIndex = t.ix, a.c.setGroupProperty(PropertyInterface("Copies", i)), a.o.setGroupProperty(PropertyInterface("Offset", i)), Object.defineProperties(n, { copies: { get: ExpressionPropertyInterface(a.c) }, offset: { get: ExpressionPropertyInterface(a.o) }, _name: { value: t.nm } }), n.mn = t.mn, n } return function(e, r, n) { var i;

                    function a(t) { if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? n : i[t - 1]; for (var e = 0, r = i.length; e < r;) { if (i[e]._name === t) return i[e];
                            e += 1 } return null } return a.propertyGroup = propertyGroupFactory(a, function() { return n }), i = t(e, r, a.propertyGroup), a.numProperties = i.length, a._name = "Contents", a } }(),
            TextExpressionInterface = function(t) { var e;

                function r(t) { switch (t) {
                        case "ADBE Text Document":
                            return r.sourceText;
                        default:
                            return null } } return Object.defineProperty(r, "sourceText", { get: function() { t.textProperty.getValue(); var r = t.textProperty.currentData.t; return void 0 !== r && (t.textProperty.currentData.t = void 0, (e = new String(r)).value = r || new String(r)), e } }), r },
            LayerExpressionInterface = function() {
                function t(t) { var e = new Matrix; return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e }

                function e(t, e) { var r = this.getMatrix(e); return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, t) }

                function r(t, e) { var r = this.getMatrix(e); return this.applyPoint(r, t) }

                function n(t, e) { var r = this.getMatrix(e); return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, t) }

                function i(t, e) { var r = this.getMatrix(e); return this.invertPoint(r, t) }

                function a(t, e) { if (this._elem.hierarchy && this._elem.hierarchy.length) { var r, n = this._elem.hierarchy.length; for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t) } return t.applyToPointArray(e[0], e[1], e[2] || 0) }

                function o(t, e) { if (this._elem.hierarchy && this._elem.hierarchy.length) { var r, n = this._elem.hierarchy.length; for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t) } return t.inversePoint(e) }

                function s(t) { var e = new Matrix; if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) { var r, n = this._elem.hierarchy.length; for (r = 0; r < n; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e); return e.inversePoint(t) } return e.inversePoint(t) }

                function l() { return [1, 1, 1, 1] } return function(h) { var c;

                    function u(t) { switch (t) {
                            case "ADBE Root Vectors Group":
                            case "Contents":
                            case 2:
                                return u.shapeInterface;
                            case 1:
                            case 6:
                            case "Transform":
                            case "transform":
                            case "ADBE Transform Group":
                                return c;
                            case 4:
                            case "ADBE Effect Parade":
                            case "effects":
                            case "Effects":
                                return u.effect;
                            case "ADBE Text Properties":
                                return u.textInterface;
                            default:
                                return null } }
                    u.getMatrix = t, u.invertPoint = o, u.applyPoint = a, u.toWorld = r, u.toWorldVec = e, u.fromWorld = i, u.fromWorldVec = n, u.toComp = r, u.fromComp = s, u.sampleImage = l, u.sourceRectAtTime = h.sourceRectAtTime.bind(h); var f = getDescriptor(c = TransformExpressionInterface((u._elem = h).finalTransform.mProp), "anchorPoint"); return Object.defineProperties(u, { hasParent: { get: function() { return h.hierarchy.length } }, parent: { get: function() { return h.hierarchy[0].layerInterface } }, rotation: getDescriptor(c, "rotation"), scale: getDescriptor(c, "scale"), position: getDescriptor(c, "position"), opacity: getDescriptor(c, "opacity"), anchorPoint: f, anchor_point: f, transform: { get: function() { return c } }, active: { get: function() { return h.isInRange } } }), u.startTime = h.data.st, u.index = h.data.ind, u.source = h.data.refId, u.height = 0 === h.data.ty ? h.data.h : 100, u.width = 0 === h.data.ty ? h.data.w : 100, u.inPoint = h.data.ip / h.comp.globalData.frameRate, u.outPoint = h.data.op / h.comp.globalData.frameRate, u._name = h.data.nm, u.registerMaskInterface = function(t) { u.mask = new MaskManagerInterface(t, h) }, u.registerEffectsInterface = function(t) { u.effect = t }, u } }(),
            FootageInterface = (q6 = function(t) {
                function e(t) { return "Outline" === t ? e.outlineInterface() : null } return e._name = "Outline", e.outlineInterface = function(t) { var e = "",
                        r = t.getFootageData();

                    function n(t) { if (r[t]) return "object" == typeof(r = r[e = t]) ? n : r; var i = t.indexOf(e); if (-1 === i) return ""; var a = parseInt(t.substr(i + e.length), 10); return "object" == typeof(r = r[a]) ? n : r } return function() { return e = "", r = t.getFootageData(), n } }(t), e }, function(t) {
                function e(t) { return "Data" === t ? e.dataInterface : null } return e._name = "Data", e.dataInterface = q6(t), e }),
            q6, CompExpressionInterface = function(t) {
                function e(e) { for (var r = 0, n = t.layers.length; r < n;) { if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
                        r += 1 } return null } return Object.defineProperty(e, "_name", { value: t.data.nm }), (e.layer = e).pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e },
            TransformExpressionInterface = function(t) {
                function e(t) { switch (t) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "ADBE Rotate X":
                            return e.xRotation;
                        case "ADBE Rotate Y":
                            return e.yRotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return e.position;
                        case "ADBE Position_0":
                            return e.xPosition;
                        case "ADBE Position_1":
                            return e.yPosition;
                        case "ADBE Position_2":
                            return e.zPosition;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity;
                        default:
                            return null } } var r, n, i, a; return Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) }), t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), n = ExpressionPropertyInterface(t.py), t.pz && (i = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", { get: function() { return t.p ? a() : [r(), n(), i ? i() : 0] } }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e },
            ProjectInterface = function() {
                function t(t) { this.compositions.push(t) } return function() {
                    function e(t) { for (var e = 0, r = this.compositions.length; e < r;) { if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                            e += 1 } return null } return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e } }(),
            EffectsExpressionInterface = function() {
                function t(r, n, i, a) {
                    function o(t) { for (var e = r.ef, n = 0, i = e.length; n < i;) { if (t === e[n].nm || t === e[n].mn || t === e[n].ix) return 5 === e[n].ty ? h[n] : h[n]();
                            n += 1 } throw new Error } var s, l = propertyGroupFactory(o, i),
                        h = [],
                        c = r.ef.length; for (s = 0; s < c; s += 1) 5 === r.ef[s].ty ? h.push(t(r.ef[s], n.effectElements[s], n.effectElements[s].propertyGroup, a)) : h.push(e(n.effectElements[s], r.ef[s].ty, a, l)); return "ADBE Color Control" === r.mn && Object.defineProperty(o, "color", { get: function() { return h[0]() } }), Object.defineProperties(o, { numProperties: { get: function() { return r.np } }, _name: { value: r.nm }, propertyGroup: { value: l } }), o.enabled = 0 !== r.en, o.active = o.enabled, o }

                function e(t, e, r, n) { var i = ExpressionPropertyInterface(t.p); return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", n)),
                        function() { return 10 === e ? r.comp.compInterface(t.p.v) : i() } } return { createEffectsInterface: function(e, r) { if (e.effectsManager) { var n, i = [],
                                a = e.data.ef,
                                o = e.effectsManager.effectElements.length; for (n = 0; n < o; n += 1) i.push(t(a[n], e.effectsManager.effectElements[n], r, e)); var s = e.data.ef || [],
                                l = function(t) { for (n = 0, o = s.length; n < o;) { if (t === s[n].nm || t === s[n].mn || t === s[n].ix) return i[n];
                                        n += 1 } return null }; return Object.defineProperty(l, "numProperties", { get: function() { return s.length } }), l } return null } } }(),
            MaskManagerInterface = function() {
                function t(t, e) { this._mask = t, this._data = e } return Object.defineProperty(t.prototype, "maskPath", { get: function() { return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop } }), Object.defineProperty(t.prototype, "maskOpacity", { get: function() { return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v } }),
                    function(e) { var r, n = createSizedArray(e.viewData.length),
                            i = e.viewData.length; for (r = 0; r < i; r += 1) n[r] = new t(e.viewData[r], e.masksProperties[r]); return function(t) { for (r = 0; r < i;) { if (e.masksProperties[r].nm === t) return n[r];
                                r += 1 } return null } } }(),
            ExpressionPropertyInterface = function() { var t = { pv: 0, v: 0, mult: 1 },
                    e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };

                function r(t, e, r) { Object.defineProperty(t, "velocity", { get: function() { return e.getVelocityAtTime(e.comp.currentFrame) } }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(n) { if (!t.numKeys) return 0; var i;
                        i = "s" in e.keyframes[n - 1] ? e.keyframes[n - 1].s : "e" in e.keyframes[n - 2] ? e.keyframes[n - 2].e : e.keyframes[n - 2].s; var a = "unidimensional" === r ? new Number(i) : Object.assign({}, i); return a.time = e.keyframes[n - 1].t / e.elem.comp.globalData.frameRate, a.value = "unidimensional" === r ? i[0] : i, a }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup }

                function n() { return t } return function(i) { return i ? "unidimensional" === i.propType ? function(e) { e && "pv" in e || (e = t); var n = 1 / e.mult,
                            i = e.pv * n,
                            a = new Number(i); return a.value = i, r(a, e, "unidimensional"),
                            function() { return e.k && e.getValue(), i = e.v * n, a.value !== i && ((a = new Number(i)).value = i, r(a, e, "unidimensional")), a } }(i) : function(t) { t && "pv" in t || (t = e); var n = 1 / t.mult,
                            i = t.data && t.data.l || t.pv.length,
                            a = createTypedArray("float32", i),
                            o = createTypedArray("float32", i); return a.value = o, r(a, t, "multidimensional"),
                            function() { t.k && t.getValue(); for (var e = 0; e < i; e += 1) o[e] = t.v[e] * n, a[e] = o[e]; return a } }(i) : n } }(),
            TextExpressionSelectorPropFactory = function() {
                function t(t, e) { return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v } return function(e, r) { this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", this.textTotal = r.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, r, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty } }(),
            propertyGetTextProp = TextSelectorProp.getTextSelectorProp;

        function SliderEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, r) }

        function AngleEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, r) }

        function ColorEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 1, 0, r) }

        function PointEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 1, 0, r) }

        function LayerIndexEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, r) }

        function MaskIndexEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, r) }

        function CheckboxEffect(t, e, r) { this.p = PropertyFactory.getProp(e, t.v, 0, 0, r) }

        function NoValueEffect() { this.p = {} }

        function EffectsManager(t, e) { var r, n = t.ef || [];
            this.effectElements = []; var i, a = n.length; for (r = 0; r < a; r += 1) i = new GroupEffect(n[r], e), this.effectElements.push(i) }

        function GroupEffect(t, e) { this.init(t, e) }
        TextSelectorProp.getTextSelectorProp = function(t, e, r) { return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, r) : propertyGetTextProp(t, e, r) }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) { var r;
            this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e); var n, i = this.data.ef.length,
                a = this.data.ef; for (r = 0; r < i; r += 1) { switch (n = null, a[r].ty) {
                    case 0:
                        n = new SliderEffect(a[r], e, this); break;
                    case 1:
                        n = new AngleEffect(a[r], e, this); break;
                    case 2:
                        n = new ColorEffect(a[r], e, this); break;
                    case 3:
                        n = new PointEffect(a[r], e, this); break;
                    case 4:
                    case 7:
                        n = new CheckboxEffect(a[r], e, this); break;
                    case 10:
                        n = new LayerIndexEffect(a[r], e, this); break;
                    case 11:
                        n = new MaskIndexEffect(a[r], e, this); break;
                    case 5:
                        n = new EffectsManager(a[r], e, this); break;
                    default:
                        n = new NoValueEffect(a[r], e, this) }
                n && this.effectElements.push(n) } }; var lottie = {};

        function setLocationHref(t) { locationHref = t }

        function searchAnimations() {!0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations() }

        function setSubframeRendering(t) { subframeEnabled = t }

        function setIDPrefix(t) { idPrefix = t }

        function loadAnimation(t) { return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t) }

        function setQuality(t) { if ("string" == typeof t) switch (t) {
                case "high":
                    defaultCurveSegments = 200; break;
                default:
                case "medium":
                    defaultCurveSegments = 50; break;
                case "low":
                    defaultCurveSegments = 10 } else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
            roundValues(!(50 <= defaultCurveSegments)) }

        function inBrowser() { return "undefined" != typeof navigator }

        function installPlugin(t, e) { "expressions" === t && (expressionsPlugin = e) }

        function getFactory(t) { switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null } }

        function checkReady() { "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations()) }

        function getQueryVariable(t) { for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) { var n = e[r].split("="); if (decodeURIComponent(n[0]) == t) return decodeURIComponent(n[1]) } return null }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.setIDPrefix = setIDPrefix, lottie.__getFactory = getFactory, lottie.version = "5.7.13"; var standalone = "__[STANDALONE]__",
            animationData = "__[ANIMATIONDATA]__",
            renderer = "",
            queryString; if (standalone) { var scripts = document.getElementsByTagName("script"),
                index = scripts.length - 1,
                myScript = scripts[index] || { src: "" };
            queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer") } var readyStateCheckInterval = setInterval(checkReady, 100); return lottie }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() { return factory(root) }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) }, function(t, e, r) { "use strict"; var n = r(13);
    n.define("brand", t.exports = function(t) { var e, r = {},
            i = document,
            a = t("html"),
            o = t("body"),
            s = ".w-webflow-badge",
            l = window.location,
            h = /PhantomJS/i.test(navigator.userAgent),
            c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function u() { var r = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            t(e).attr("style", r ? "display: none !important;" : "") }

        function f() { var t = o.children(s),
                r = t.length && t.get(0) === e,
                i = n.env("editor");
            r ? i && t.remove() : (t.length && t.remove(), i || o.append(e)) } return r.ready = function() { var r, n, o, s = a.attr("data-wf-status"),
                p = a.attr("data-wf-domain") || ""; /\.webflow\.io$/i.test(p) && l.hostname !== p && (s = !0), s && !h && (e = e || (r = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), n = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({ marginRight: "8px", width: "16px" }), o = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), r.append(n, o), r[0]), f(), setTimeout(f, 500), t(i).off(c, u).on(c, u)) }, r }) }, function(t, e, r) { "use strict"; var n = r(13);
    n.define("edit", t.exports = function(t, e, r) { if (r = r || {}, (n.env("test") || n.env("frame")) && !r.fixture && ! function() { try { return window.top.__Cypress__ } catch (t) { return !1 } }()) return { exit: 1 }; var i, a = t(window),
            o = t(document.documentElement),
            s = document.location,
            l = "hashchange",
            h = r.load || function() { i = !0, window.WebflowEditor = !0, a.off(l, u),
                    function(t) { var e = window.document.createElement("iframe");
                        e.src = "https://webflow.com/site/third-party-cookie-check.html", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin"; var r = function r(n) { "WF_third_party_cookies_unsupported" === n.data ? (y(e, r), t(!1)) : "WF_third_party_cookies_supported" === n.data && (y(e, r), t(!0)) };
                        e.onerror = function() { y(e, r), t(!1) }, window.addEventListener("message", r, !1), window.document.body.appendChild(e) }(function(e) { t.ajax({ url: v("https://editor-api.webflow.com/api/editor/view"), data: { siteId: o.attr("data-wf-site") }, xhrFields: { withCredentials: !0 }, dataType: "json", crossDomain: !0, success: f(e) }) }) },
            c = !1; try { c = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor") } catch (t) {}

        function u() { i || /\?edit/.test(s.hash) && h() }

        function f(t) { return function(e) { e ? (e.thirdPartyCookiesSupported = t, p(m(e.bugReporterScriptPath), function() { p(m(e.scriptPath), function() { window.WebflowEditor(e) }) })) : console.error("Could not load editor data") } }

        function p(e, r) { t.ajax({ type: "GET", url: e, dataType: "script", cache: !0 }).then(r, d) }

        function d(t, e, r) { throw console.error("Could not load editor script: " + e), r }

        function m(t) { return t.indexOf("//") >= 0 ? t : v("https://editor-api.webflow.com" + t) }

        function v(t) { return t.replace(/([^:])\/\//g, "$1/") }

        function y(t, e) { window.removeEventListener("message", e, !1), t.remove() } return c ? h() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && h() : a.on(l, u).triggerHandler(l), {} }) }, function(t, e, r) { "use strict";
    r(13).define("focus-visible", t.exports = function() {
        function t(t) { var e = !0,
                r = !1,
                n = null,
                i = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };

            function a(t) { return !!(t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList" in t && "contains" in t.classList) }

            function o(t) { t.getAttribute("data-wf-focus-visible") || t.setAttribute("data-wf-focus-visible", "true") }

            function s() { e = !1 }

            function l() { document.addEventListener("mousemove", h), document.addEventListener("mousedown", h), document.addEventListener("mouseup", h), document.addEventListener("pointermove", h), document.addEventListener("pointerdown", h), document.addEventListener("pointerup", h), document.addEventListener("touchmove", h), document.addEventListener("touchstart", h), document.addEventListener("touchend", h) }

            function h(t) { t.target.nodeName && "html" === t.target.nodeName.toLowerCase() || (e = !1, document.removeEventListener("mousemove", h), document.removeEventListener("mousedown", h), document.removeEventListener("mouseup", h), document.removeEventListener("pointermove", h), document.removeEventListener("pointerdown", h), document.removeEventListener("pointerup", h), document.removeEventListener("touchmove", h), document.removeEventListener("touchstart", h), document.removeEventListener("touchend", h)) }
            document.addEventListener("keydown", function(r) { r.metaKey || r.altKey || r.ctrlKey || (a(t.activeElement) && o(t.activeElement), e = !0) }, !0), document.addEventListener("mousedown", s, !0), document.addEventListener("pointerdown", s, !0), document.addEventListener("touchstart", s, !0), document.addEventListener("visibilitychange", function() { "hidden" === document.visibilityState && (r && (e = !0), l()) }, !0), l(), t.addEventListener("focus", function(t) { var r, n, s;
                a(t.target) && (e || (r = t.target, n = r.type, "INPUT" === (s = r.tagName) && i[n] && !r.readOnly || "TEXTAREA" === s && !r.readOnly || r.isContentEditable)) && o(t.target) }, !0), t.addEventListener("blur", function(t) { var e;
                a(t.target) && t.target.hasAttribute("data-wf-focus-visible") && (r = !0, window.clearTimeout(n), n = window.setTimeout(function() { r = !1 }, 100), (e = t.target).getAttribute("data-wf-focus-visible") && e.removeAttribute("data-wf-focus-visible")) }, !0) } return { ready: function() { if ("undefined" != typeof document) try { document.querySelector(":focus-visible") } catch (e) { t(document) } } } }) }, function(t, e, r) { "use strict";
    r(13).define("focus-within", t.exports = function() {
        function t(t) { for (var e = [t], r = null; r = t.parentNode || t.host || t.defaultView;) e.push(r), t = r; return e }

        function e(t) { "function" != typeof t.getAttribute || t.getAttribute("data-wf-focus-within") || t.setAttribute("data-wf-focus-within", "true") }

        function r(t) { "function" == typeof t.getAttribute && t.getAttribute("data-wf-focus-within") && t.removeAttribute("data-wf-focus-within") } return { ready: function() { if ("undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within")) try { document.querySelector(":focus-within") } catch (i) { n = function(n) { var i;
                        i || (window.requestAnimationFrame(function() { i = !1, "blur" === n.type && Array.prototype.slice.call(t(n.target)).forEach(r), "focus" === n.type && Array.prototype.slice.call(t(n.target)).forEach(e) }), i = !0) }, document.addEventListener("focus", n, !0), document.addEventListener("blur", n, !0), e(document.body) }
                var n } } }) }, function(t, e, r) { "use strict"; var n = r(13);
    n.define("focus", t.exports = function() { var t = [],
            e = !1;

        function r(r) { e && (r.preventDefault(), r.stopPropagation(), r.stopImmediatePropagation(), t.unshift(r)) }

        function i(r) {
            (function(t) { var e = t.target,
                    r = e.tagName; return /^a$/i.test(r) && null != e.href || /^(button|textarea)$/i.test(r) && !0 !== e.disabled || /^input$/i.test(r) && /^(button|reset|submit|radio|checkbox)$/i.test(e.type) && !e.disabled || !/^(button|input|textarea|select|a)$/i.test(r) && !Number.isNaN(Number.parseFloat(e.tabIndex)) || /^audio$/i.test(r) || /^video$/i.test(r) && !0 === e.controls })(r) && (e = !0, setTimeout(function() { for (e = !1, r.target.focus(); t.length > 0;) { var n = t.pop();
                    n.target.dispatchEvent(new MouseEvent(n.type, n)) } }, 0)) } return { ready: function() { "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && n.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0)) } } }) }, function(t, e, r) { "use strict"; var n = window.jQuery,
        i = {},
        a = [],
        o = { reset: function(t, e) { e.__wf_intro = null }, intro: function(t, e) { e.__wf_intro || (e.__wf_intro = !0, n(e).triggerHandler(i.types.INTRO)) }, outro: function(t, e) { e.__wf_intro && (e.__wf_intro = null, n(e).triggerHandler(i.types.OUTRO)) } };
    i.triggers = {}, i.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }, i.init = function() { for (var t = a.length, e = 0; e < t; e++) { var r = a[e];
            r[0](0, r[1]) }
        a = [], n.extend(i.triggers, o) }, i.async = function() { for (var t in o) { var e = o[t];
            o.hasOwnProperty(t) && (i.triggers[t] = function(t, r) { a.push([e, r]) }) } }, i.async(), t.exports = i }, function(t, e, r) { "use strict"; var n = r(13),
        i = r(368);
    i.setEnv(n.env), n.define("ix2", t.exports = function() { return i }) }, function(t, e, r) { "use strict"; var n = r(56),
        i = r(3);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.setEnv = function(t) { t() && (0, s.observeRequests)(h) }, e.init = function(t) { c(), (0, s.startEngine)({ store: h, rawData: t, allowEvents: !0 }) }, e.destroy = c, e.actions = e.store = void 0, r(369); var a = r(168),
        o = i(r(384)),
        s = r(185),
        l = n(r(121));
    e.actions = l; var h = (0, a.createStore)(o.default);

    function c() {
        (0, s.stopEngine)(h) }
    e.store = h }, function(t, e, r) { var n = r(370);
    t.exports = n }, function(t, e, r) { var n = r(371);
    t.exports = n }, function(t, e, r) { r(159); var n = r(372);
    t.exports = n("Array", "includes") }, function(t, e, r) { var n = r(0),
        i = r(2);
    t.exports = function(t, e) { return i(n[t].prototype[e]) } }, function(t, e, r) { "use strict";
    r.r(e); var n = r(170),
        i = r(376),
        a = r(377),
        o = "[object Null]",
        s = "[object Undefined]",
        l = n.default ? n.default.toStringTag : void 0;
    e.default = function(t) { return null == t ? void 0 === t ? s : o : l && l in Object(t) ? Object(i.default)(t) : Object(a.default)(t) } }, function(t, e, r) { "use strict";
    r.r(e); var n = r(375),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = n.default || i || Function("return this")();
    e.default = a }, function(t, e, r) { "use strict";
    r.r(e),
        function(t) { var r = "object" == typeof t && t && t.Object === Object && t;
            e.default = r }.call(this, r(60)) }, function(t, e, r) { "use strict";
    r.r(e); var n = r(170),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = n.default ? n.default.toStringTag : void 0;
    e.default = function(t) { var e = a.call(t, s),
            r = t[s]; try { t[s] = void 0; var n = !0 } catch (t) {} var i = o.call(t); return n && (e ? t[s] = r : delete t[s]), i } }, function(t, e, r) { "use strict";
    r.r(e); var n = Object.prototype.toString;
    e.default = function(t) { return n.call(t) } }, function(t, e, r) { "use strict";
    r.r(e); var n = r(379),
        i = Object(n.default)(Object.getPrototypeOf, Object);
    e.default = i }, function(t, e, r) { "use strict";
    r.r(e), e.default = function(t, e) { return function(r) { return t(e(r)) } } }, function(t, e, r) { "use strict";
    r.r(e), e.default = function(t) { return null != t && "object" == typeof t } }, function(t, e, r) { "use strict";
    r.r(e),
        function(t, n) { var i, a = r(383);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : n; var o = Object(a.default)(i);
            e.default = o }.call(this, r(60), r(382)(t)) }, function(t, e) { t.exports = function(t) { if (!t.webpackPolyfill) { var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), Object.defineProperty(e, "exports", { enumerable: !0 }), e.webpackPolyfill = 1 } return e } }, function(t, e, r) { "use strict";

    function n(t) { var e, r = t.Symbol; return "function" == typeof r ? r.observable ? e = r.observable : (e = r("observable"), r.observable = e) : e = "@@observable", e }
    r.r(e), r.d(e, "default", function() { return n }) }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var n = r(168),
        i = r(385),
        a = r(391),
        o = r(392),
        s = r(44),
        l = r(409),
        h = r(410),
        c = s.IX2ElementsReducer.ixElements,
        u = (0, n.combineReducers)({ ixData: i.ixData, ixRequest: a.ixRequest, ixSession: o.ixSession, ixElements: c, ixInstances: l.ixInstances, ixParameters: h.ixParameters });
    e.default = u }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixData = void 0; var n = r(14).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0; switch (e.type) {
            case n:
                return e.payload.ixData || Object.freeze({});
            default:
                return t } } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
    e.EventTypeConsts = { NAVBAR_OPEN: "NAVBAR_OPEN", NAVBAR_CLOSE: "NAVBAR_CLOSE", TAB_ACTIVE: "TAB_ACTIVE", TAB_INACTIVE: "TAB_INACTIVE", SLIDER_ACTIVE: "SLIDER_ACTIVE", SLIDER_INACTIVE: "SLIDER_INACTIVE", DROPDOWN_OPEN: "DROPDOWN_OPEN", DROPDOWN_CLOSE: "DROPDOWN_CLOSE", MOUSE_CLICK: "MOUSE_CLICK", MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK", MOUSE_DOWN: "MOUSE_DOWN", MOUSE_UP: "MOUSE_UP", MOUSE_OVER: "MOUSE_OVER", MOUSE_OUT: "MOUSE_OUT", MOUSE_MOVE: "MOUSE_MOVE", MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT", SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW", SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW", SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW", ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN", ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE", PAGE_START: "PAGE_START", PAGE_FINISH: "PAGE_FINISH", PAGE_SCROLL_UP: "PAGE_SCROLL_UP", PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN", PAGE_SCROLL: "PAGE_SCROLL" };
    e.EventAppliesTo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
    e.EventBasedOn = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
    e.EventContinuousMouseAxes = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
    e.EventLimitAffectedElements = { CHILDREN: "CHILDREN", SIBLINGS: "SIBLINGS", IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN" };
    e.QuickEffectIds = { FADE_EFFECT: "FADE_EFFECT", SLIDE_EFFECT: "SLIDE_EFFECT", GROW_EFFECT: "GROW_EFFECT", SHRINK_EFFECT: "SHRINK_EFFECT", SPIN_EFFECT: "SPIN_EFFECT", FLY_EFFECT: "FLY_EFFECT", POP_EFFECT: "POP_EFFECT", FLIP_EFFECT: "FLIP_EFFECT", JIGGLE_EFFECT: "JIGGLE_EFFECT", PULSE_EFFECT: "PULSE_EFFECT", DROP_EFFECT: "DROP_EFFECT", BLINK_EFFECT: "BLINK_EFFECT", BOUNCE_EFFECT: "BOUNCE_EFFECT", FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT", FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT", RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT", JELLO_EFFECT: "JELLO_EFFECT", GROW_BIG_EFFECT: "GROW_BIG_EFFECT", SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT", PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT" };
    e.QuickEffectDirectionConsts = { LEFT: "LEFT", RIGHT: "RIGHT", BOTTOM: "BOTTOM", TOP: "TOP", BOTTOM_LEFT: "BOTTOM_LEFT", BOTTOM_RIGHT: "BOTTOM_RIGHT", TOP_RIGHT: "TOP_RIGHT", TOP_LEFT: "TOP_LEFT", CLOCKWISE: "CLOCKWISE", COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE" } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.InteractionTypeConsts = void 0;
    e.InteractionTypeConsts = { MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION", MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION", MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION", SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION", SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION", MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION", PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION", PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION", PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION", NAVBAR_INTERACTION: "NAVBAR_INTERACTION", DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION", ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION", TAB_INTERACTION: "TAB_INTERACTION", SLIDER_INTERACTION: "SLIDER_INTERACTION" } }, function(t, e, r) { "use strict"; var n, i = r(3)(r(37));
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ReducedMotionTypes = void 0; var a = r(175).ActionTypeConsts,
        o = a.TRANSFORM_MOVE,
        s = a.TRANSFORM_SCALE,
        l = a.TRANSFORM_ROTATE,
        h = a.TRANSFORM_SKEW,
        c = a.STYLE_SIZE,
        u = a.STYLE_FILTER,
        f = a.STYLE_FONT_VARIATION,
        p = (n = {}, (0, i.default)(n, o, !0), (0, i.default)(n, s, !0), (0, i.default)(n, l, !0), (0, i.default)(n, h, !0), (0, i.default)(n, c, !0), (0, i.default)(n, u, !0), (0, i.default)(n, f, !0), n);
    e.ReducedMotionTypes = p }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED" }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FONT_VARIATION_SETTINGS = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.FONT_VARIATION_SETTINGS = "font-variation-settings";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e.HTML_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN" }, function(t, e, r) { "use strict"; var n, i = r(3)(r(37)),
        a = r(3);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixRequest = void 0; var o = a(r(46)),
        s = r(14),
        l = r(57),
        h = s.IX2EngineActionTypes,
        c = h.IX2_PREVIEW_REQUESTED,
        u = h.IX2_PLAYBACK_REQUESTED,
        f = h.IX2_STOP_REQUESTED,
        p = h.IX2_CLEAR_REQUESTED,
        d = { preview: {}, playback: {}, stop: {}, clear: {} },
        m = Object.create(null, (n = {}, (0, i.default)(n, c, { value: "preview" }), (0, i.default)(n, u, { value: "playback" }), (0, i.default)(n, f, { value: "stop" }), (0, i.default)(n, p, { value: "clear" }), n));
    e.ixRequest = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            e = arguments.length > 1 ? arguments[1] : void 0; if (e.type in m) { var r = [m[e.type]]; return (0, l.setIn)(t, [r], (0, o.default)({}, e.payload)) } return t } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixSession = void 0; var n = r(14),
        i = r(57),
        a = n.IX2EngineActionTypes,
        o = a.IX2_SESSION_INITIALIZED,
        s = a.IX2_SESSION_STARTED,
        l = a.IX2_TEST_FRAME_RENDERED,
        h = a.IX2_SESSION_STOPPED,
        c = a.IX2_EVENT_LISTENER_ADDED,
        u = a.IX2_EVENT_STATE_CHANGED,
        f = a.IX2_ANIMATION_FRAME_CHANGED,
        p = a.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        d = a.IX2_VIEWPORT_WIDTH_CHANGED,
        m = a.IX2_MEDIA_QUERIES_DEFINED,
        v = { active: !1, tick: 0, eventListeners: [], eventState: {}, playbackState: {}, viewportWidth: 0, mediaQueryKey: null, hasBoundaryNodes: !1, hasDefinedMediaQueries: !1, reducedMotion: !1 };
    e.ixSession = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            e = arguments.length > 1 ? arguments[1] : void 0; switch (e.type) {
            case o:
                var r = e.payload,
                    n = r.hasBoundaryNodes,
                    a = r.reducedMotion; return (0, i.merge)(t, { hasBoundaryNodes: n, reducedMotion: a });
            case s:
                return (0, i.set)(t, "active", !0);
            case l:
                var y = e.payload.step,
                    g = void 0 === y ? 20 : y; return (0, i.set)(t, "tick", t.tick + g);
            case h:
                return v;
            case f:
                var E = e.payload.now; return (0, i.set)(t, "tick", E);
            case c:
                var b = (0, i.addLast)(t.eventListeners, e.payload); return (0, i.set)(t, "eventListeners", b);
            case u:
                var _ = e.payload,
                    x = _.stateKey,
                    T = _.newState; return (0, i.setIn)(t, ["eventState", x], T);
            case p:
                var S = e.payload,
                    I = S.actionListId,
                    A = S.isPlaying; return (0, i.setIn)(t, ["playbackState", I], A);
            case d:
                for (var P = e.payload, w = P.width, C = P.mediaQueries, D = C.length, M = null, O = 0; O < D; O++) { var R = C[O],
                        k = R.key,
                        F = R.min,
                        L = R.max; if (w >= F && w <= L) { M = k; break } } return (0, i.merge)(t, { viewportWidth: w, mediaQueryKey: M });
            case m:
                return (0, i.set)(t, "hasDefinedMediaQueries", !0);
            default:
                return t } } }, function(t, e) { t.exports = function(t) { if (Array.isArray(t)) { for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e]; return r } } }, function(t, e) { t.exports = function(t) { if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t) } }, function(t, e) { t.exports = function() { throw new TypeError("Invalid attempt to spread non-iterable instance") } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createElementState = _, e.mergeActionState = x, e.ixElements = void 0; var n = r(57),
        i = r(14),
        a = i.IX2EngineConstants,
        o = (a.HTML_ELEMENT, a.PLAIN_OBJECT),
        s = (a.ABSTRACT_NODE, a.CONFIG_X_VALUE),
        l = a.CONFIG_Y_VALUE,
        h = a.CONFIG_Z_VALUE,
        c = a.CONFIG_VALUE,
        u = a.CONFIG_X_UNIT,
        f = a.CONFIG_Y_UNIT,
        p = a.CONFIG_Z_UNIT,
        d = a.CONFIG_UNIT,
        m = i.IX2EngineActionTypes,
        v = m.IX2_SESSION_STOPPED,
        y = m.IX2_INSTANCE_ADDED,
        g = m.IX2_ELEMENT_STATE_CHANGED,
        E = {},
        b = "refState";

    function _(t, e, r, i, a) { var s = r === o ? (0, n.getIn)(a, ["config", "target", "objectId"]) : null; return (0, n.mergeIn)(t, [i], { id: i, ref: e, refId: s, refType: r }) }

    function x(t, e, r, i, a) { var o = function(t) { var e = t.config; return T.reduce(function(t, r) { var n = r[0],
                        i = r[1],
                        a = e[n],
                        o = e[i]; return null != a && null != o && (t[i] = o), t }, {}) }(a),
            s = [e, b, r]; return (0, n.mergeIn)(t, s, i, o) }
    e.ixElements = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; switch (e.type) {
            case v:
                return E;
            case y:
                var r = e.payload,
                    i = r.elementId,
                    a = r.element,
                    o = r.origin,
                    s = r.actionItem,
                    l = r.refType,
                    h = s.actionTypeId,
                    c = t; return (0, n.getIn)(c, [i, a]) !== a && (c = _(c, a, l, i, s)), x(c, i, h, o, s);
            case g:
                var u = e.payload; return x(t, u.elementId, u.actionTypeId, u.current, u.actionItem);
            default:
                return t } }; var T = [
        [s, u],
        [l, f],
        [h, p],
        [c, d]
    ] }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
    e.getPluginConfig = function(t) { return t.value };
    e.getPluginDuration = function(t, e) { if ("auto" !== e.config.duration) return null; var r = parseFloat(t.getAttribute("data-duration")); return r > 0 ? 1e3 * r : 1e3 * parseFloat(t.getAttribute("data-default-duration")) };
    e.getPluginOrigin = function(t) { return t || { value: 0 } };
    e.getPluginDestination = function(t) { return { value: t.value } };
    e.createPluginInstance = function(t) { var e = window.Webflow.require("lottie").createInstance(t); return e.stop(), e.setSubframe(!0), e };
    e.renderPlugin = function(t, e, r) { if (t) { var n = e[r.actionTypeId].value / 100;
            t.goToFrame(t.frames * n) } };
    e.clearPlugin = function(t) { window.Webflow.require("lottie").createInstance(t).stop() } }, function(t, e, r) { "use strict"; var n, i, a, o = r(3),
        s = o(r(45)),
        l = o(r(37)),
        h = r(3);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.getInstanceId = function() { return "i" + vt++ }, e.getElementId = function(t, e) { for (var r in t) { var n = t[r]; if (n && n.ref === e) return n.id } return "e" + yt++ }, e.reifyState = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            r = t.actionLists,
            n = t.site,
            i = (0, u.default)(e, function(t, e) { var r = e.eventTypeId; return t[r] || (t[r] = {}), t[r][e.id] = e, t }, {}),
            a = n && n.mediaQueries,
            o = [];
        a ? o = a.map(function(t) { return t.key }) : (a = [], console.warn("IX2 missing mediaQueries in site data")); return { ixData: { events: e, actionLists: r, eventTypeMap: i, mediaQueries: a, mediaQueryKeys: o } } }, e.observeStore = function(t) { var e = t.store,
            r = t.select,
            n = t.onChange,
            i = t.comparator,
            a = void 0 === i ? gt : i,
            o = e.getState,
            s = (0, e.subscribe)(function() { var t = r(o()); if (null == t) return void s();
                a(t, l) || n(l = t, e) }),
            l = r(o()); return s }, e.getAffectedElements = bt, e.getComputedStyle = function(t) { var e = t.element,
            r = t.actionItem; if (!g.IS_BROWSER_ENV) return {}; switch (r.actionTypeId) {
            case ot:
            case st:
            case lt:
            case ht:
            case ct:
                return window.getComputedStyle(e);
            default:
                return {} } }, e.getInstanceOrigin = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = arguments.length > 3 ? arguments[3] : void 0,
            i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
            a = n.actionTypeId; if ((0, y.isPluginType)(a)) return (0, y.getPluginOrigin)(a)(e[a]); switch (n.actionTypeId) {
            case J:
            case tt:
            case et:
            case rt:
                return e[n.actionTypeId] || Pt[n.actionTypeId];
            case it:
                return xt(e[n.actionTypeId], n.config.filters);
            case at:
                return Tt(e[n.actionTypeId], n.config.fontVariations);
            case nt:
                return { value: (0, c.default)(parseFloat(i(t, D)), 1) };
            case ot:
                var o, s, l = i(t, R),
                    h = i(t, k); return o = n.config.widthUnit === X ? _t.test(l) ? parseFloat(l) : parseFloat(r.width) : (0, c.default)(parseFloat(l), parseFloat(r.width)), s = n.config.heightUnit === X ? _t.test(h) ? parseFloat(h) : parseFloat(r.height) : (0, c.default)(parseFloat(h), parseFloat(r.height)), { widthValue: o, heightValue: s };
            case st:
            case lt:
            case ht:
                return function(t) { var e = t.element,
                        r = t.actionTypeId,
                        n = t.computedStyle,
                        i = t.getStyle,
                        a = pt[r],
                        o = i(e, a),
                        s = Ot.test(o) ? o : n[a],
                        l = function(t, e) { var r = t.exec(e); return r ? r[1] : "" }(Rt, s).split(W); return { rValue: (0, c.default)(parseInt(l[0], 10), 255), gValue: (0, c.default)(parseInt(l[1], 10), 255), bValue: (0, c.default)(parseInt(l[2], 10), 255), aValue: (0, c.default)(parseFloat(l[3]), 1) } }({ element: t, actionTypeId: n.actionTypeId, computedStyle: r, getStyle: i });
            case ct:
                return { value: (0, c.default)(i(t, z), r.display) };
            case ut:
                return e[n.actionTypeId] || { value: 0 };
            default:
                return } }, e.getDestinationValues = function(t) { var e = t.element,
            r = t.actionItem,
            n = t.elementApi; if ((0, y.isPluginType)(r.actionTypeId)) return (0, y.getPluginDestination)(r.actionTypeId)(r.config); switch (r.actionTypeId) {
            case J:
            case tt:
            case et:
            case rt:
                var i = r.config,
                    a = i.xValue,
                    o = i.yValue,
                    s = i.zValue; return { xValue: a, yValue: o, zValue: s };
            case ot:
                var l = n.getStyle,
                    h = n.setStyle,
                    c = n.getProperty,
                    u = r.config,
                    f = u.widthUnit,
                    p = u.heightUnit,
                    d = r.config,
                    m = d.widthValue,
                    v = d.heightValue; if (!g.IS_BROWSER_ENV) return { widthValue: m, heightValue: v }; if (f === X) { var E = l(e, R);
                    h(e, R, ""), m = c(e, "offsetWidth"), h(e, R, E) } if (p === X) { var b = l(e, k);
                    h(e, k, ""), v = c(e, "offsetHeight"), h(e, k, b) } return { widthValue: m, heightValue: v };
            case st:
            case lt:
            case ht:
                var _ = r.config,
                    x = _.rValue,
                    T = _.gValue,
                    S = _.bValue,
                    I = _.aValue; return { rValue: x, gValue: T, bValue: S, aValue: I };
            case it:
                return r.config.filters.reduce(St, {});
            case at:
                return r.config.fontVariations.reduce(It, {});
            default:
                var A = r.config.value; return { value: A } } }, e.getRenderType = At, e.getStyleProp = function(t, e) { return t === Q ? e.replace("STYLE_", "").toLowerCase() : null }, e.renderHTMLElement = function(t, e, r, n, i, a, o, s, l) { switch (s) {
            case Y:
                return function(t, e, r, n, i) { var a = Mt.map(function(t) { var r = Pt[t],
                                n = e[t] || {},
                                i = n.xValue,
                                a = void 0 === i ? r.xValue : i,
                                o = n.yValue,
                                s = void 0 === o ? r.yValue : o,
                                l = n.zValue,
                                h = void 0 === l ? r.zValue : l,
                                c = n.xUnit,
                                u = void 0 === c ? "" : c,
                                f = n.yUnit,
                                p = void 0 === f ? "" : f,
                                d = n.zUnit,
                                m = void 0 === d ? "" : d; switch (t) {
                                case J:
                                    return "".concat(x, "(").concat(a).concat(u, ", ").concat(s).concat(p, ", ").concat(h).concat(m, ")");
                                case tt:
                                    return "".concat(T, "(").concat(a).concat(u, ", ").concat(s).concat(p, ", ").concat(h).concat(m, ")");
                                case et:
                                    return "".concat(S, "(").concat(a).concat(u, ") ").concat(I, "(").concat(s).concat(p, ") ").concat(A, "(").concat(h).concat(m, ")");
                                case rt:
                                    return "".concat(P, "(").concat(a).concat(u, ", ").concat(s).concat(p, ")");
                                default:
                                    return "" } }).join(" "),
                        o = i.setStyle;
                    kt(t, g.TRANSFORM_PREFIXED, i), o(t, g.TRANSFORM_PREFIXED, a), s = n, l = r, h = s.actionTypeId, c = l.xValue, u = l.yValue, f = l.zValue, (h === J && void 0 !== f || h === tt && void 0 !== f || h === et && (void 0 !== c || void 0 !== u)) && o(t, g.TRANSFORM_STYLE_PREFIXED, w); var s, l, h, c, u, f }(t, e, r, i, o);
            case Q:
                return function(t, e, r, n, i, a) { var o = a.setStyle; switch (n.actionTypeId) {
                        case ot:
                            var s = n.config,
                                l = s.widthUnit,
                                h = void 0 === l ? "" : l,
                                c = s.heightUnit,
                                f = void 0 === c ? "" : c,
                                p = r.widthValue,
                                d = r.heightValue;
                            void 0 !== p && (h === X && (h = "px"), kt(t, R, a), o(t, R, p + h)), void 0 !== d && (f === X && (f = "px"), kt(t, k, a), o(t, k, d + f)); break;
                        case it:
                            ! function(t, e, r, n) { var i = (0, u.default)(e, function(t, e, n) { return "".concat(t, " ").concat(n, "(").concat(e).concat(Dt(n, r), ")") }, ""),
                                    a = n.setStyle;
                                kt(t, M, n), a(t, M, i) }(t, r, n.config, a); break;
                        case at:
                            ! function(t, e, r, n) { var i = (0, u.default)(e, function(t, e, r) { return t.push('"'.concat(r, '" ').concat(e)), t }, []).join(", "),
                                    a = n.setStyle;
                                kt(t, O, n), a(t, O, i) }(t, r, n.config, a); break;
                        case st:
                        case lt:
                        case ht:
                            var m = pt[n.actionTypeId],
                                v = Math.round(r.rValue),
                                y = Math.round(r.gValue),
                                g = Math.round(r.bValue),
                                E = r.aValue;
                            kt(t, m, a), o(t, m, E >= 1 ? "rgb(".concat(v, ",").concat(y, ",").concat(g, ")") : "rgba(".concat(v, ",").concat(y, ",").concat(g, ",").concat(E, ")")); break;
                        default:
                            var b = n.config.unit,
                                _ = void 0 === b ? "" : b;
                            kt(t, i, a), o(t, i, r.value + _) } }(t, 0, r, i, a, o);
            case K:
                return function(t, e, r) { var n = r.setStyle; switch (e.actionTypeId) {
                        case ct:
                            var i = e.config.value; return void(i === C && g.IS_BROWSER_ENV ? n(t, z, g.FLEX_PREFIXED) : n(t, z, i)) } }(t, i, o);
            case $:
                var h = i.actionTypeId; if ((0, y.isPluginType)(h)) return (0, y.renderPlugin)(h)(l, e, i) } }, e.clearAllStyles = function(t) { var e = t.store,
            r = t.elementApi,
            n = e.getState().ixData,
            i = n.events,
            a = void 0 === i ? {} : i,
            o = n.actionLists,
            s = void 0 === o ? {} : o;
        Object.keys(a).forEach(function(t) { var e = a[t],
                n = e.action.config,
                i = n.actionListId,
                o = s[i];
            o && Lt({ actionList: o, event: e, elementApi: r }) }), Object.keys(s).forEach(function(t) { Lt({ actionList: s[t], elementApi: r }) }) }, e.cleanupHTMLElement = function(t, e, r) { var n = r.setStyle,
            i = r.getStyle,
            a = e.actionTypeId; if (a === ot) { var o = e.config;
            o.widthUnit === X && n(t, R, ""), o.heightUnit === X && n(t, k, "") }
        i(t, H) && Vt({ effect: Ft, actionTypeId: a, elementApi: r })(t) }, e.getMaxDurationItemIndex = Gt, e.getActionListProgress = function(t, e) { var r = t.actionItemGroups,
            n = t.useFirstGroupAsInitialState,
            i = e.actionItem,
            a = e.verboseTimeElapsed,
            o = void 0 === a ? 0 : a,
            s = 0,
            l = 0; return r.forEach(function(t, e) { if (!n || 0 !== e) { var r = t.actionItems,
                    a = r[Gt(r)],
                    h = a.config,
                    c = a.actionTypeId;
                i.id === a.id && (l = s + o); var u = At(c) === K ? 0 : h.duration;
                s += h.delay + u } }), s > 0 ? (0, v.optimizeFloat)(l / s) : 0 }, e.reduceListToGroup = function(t) { var e = t.actionList,
            r = t.actionItemId,
            n = t.rawData,
            i = e.actionItemGroups,
            a = e.continuousParameterGroups,
            o = [],
            s = function(t) { return o.push((0, p.mergeIn)(t, ["config"], { delay: 0, duration: 0 })), t.id === r }; return i && i.some(function(t) { return t.actionItems.some(s) }), a && a.some(function(t) { return t.continuousActionGroups.some(function(t) { return t.actionItems.some(s) }) }), (0, p.setIn)(n, ["actionLists"], (0, l.default)({}, e.id, { id: e.id, actionItemGroups: [{ actionItems: o }] })) }, e.shouldNamespaceEventParameter = function(t, e) { var r = e.basedOn; return t === d.EventTypeConsts.SCROLLING_IN_VIEW && (r === d.EventBasedOn.ELEMENT || null == r) || t === d.EventTypeConsts.MOUSE_MOVE && r === d.EventBasedOn.ELEMENT }, e.getNamespacedParameterId = function(t, e) { return t + U + e }, e.shouldAllowMediaQuery = function(t, e) { if (null == e) return !0; return -1 !== t.indexOf(e) }, e.mediaQueriesEqual = function(t, e) { return (0, m.default)(t && t.sort(), e && e.sort()) }, e.stringifyTarget = function(t) { if ("string" == typeof t) return t; var e = t.id,
            r = void 0 === e ? "" : e,
            n = t.selector,
            i = void 0 === n ? "" : n,
            a = t.useEventTarget; return r + q + i + q + (void 0 === a ? "" : a) }, Object.defineProperty(e, "shallowEqual", { enumerable: !0, get: function() { return m.default } }), e.getItemConfigByKey = void 0; var c = h(r(399)),
        u = h(r(400)),
        f = h(r(406)),
        p = r(57),
        d = r(14),
        m = h(r(408)),
        v = r(180),
        y = r(182),
        g = r(120),
        E = d.IX2EngineConstants,
        b = E.BACKGROUND,
        _ = E.TRANSFORM,
        x = E.TRANSLATE_3D,
        T = E.SCALE_3D,
        S = E.ROTATE_X,
        I = E.ROTATE_Y,
        A = E.ROTATE_Z,
        P = E.SKEW,
        w = E.PRESERVE_3D,
        C = E.FLEX,
        D = E.OPACITY,
        M = E.FILTER,
        O = E.FONT_VARIATION_SETTINGS,
        R = E.WIDTH,
        k = E.HEIGHT,
        F = E.BACKGROUND_COLOR,
        L = E.BORDER_COLOR,
        N = E.COLOR,
        V = E.CHILDREN,
        B = E.IMMEDIATE_CHILDREN,
        G = E.SIBLINGS,
        j = E.PARENT,
        z = E.DISPLAY,
        H = E.WILL_CHANGE,
        X = E.AUTO,
        W = E.COMMA_DELIMITER,
        U = E.COLON_DELIMITER,
        q = E.BAR_DELIMITER,
        Y = E.RENDER_TRANSFORM,
        K = E.RENDER_GENERAL,
        Q = E.RENDER_STYLE,
        $ = E.RENDER_PLUGIN,
        Z = d.ActionTypeConsts,
        J = Z.TRANSFORM_MOVE,
        tt = Z.TRANSFORM_SCALE,
        et = Z.TRANSFORM_ROTATE,
        rt = Z.TRANSFORM_SKEW,
        nt = Z.STYLE_OPACITY,
        it = Z.STYLE_FILTER,
        at = Z.STYLE_FONT_VARIATION,
        ot = Z.STYLE_SIZE,
        st = Z.STYLE_BACKGROUND_COLOR,
        lt = Z.STYLE_BORDER,
        ht = Z.STYLE_TEXT_COLOR,
        ct = Z.GENERAL_DISPLAY,
        ut = "OBJECT_VALUE",
        ft = function(t) { return t.trim() },
        pt = Object.freeze((n = {}, (0, l.default)(n, st, F), (0, l.default)(n, lt, L), (0, l.default)(n, ht, N), n)),
        dt = Object.freeze((i = {}, (0, l.default)(i, g.TRANSFORM_PREFIXED, _), (0, l.default)(i, F, b), (0, l.default)(i, D, D), (0, l.default)(i, M, M), (0, l.default)(i, R, R), (0, l.default)(i, k, k), (0, l.default)(i, O, O), i)),
        mt = {},
        vt = 1; var yt = 1; var gt = function(t, e) { return t === e };

    function Et(t) { var e = (0, s.default)(t); return "string" === e ? { id: t } : null != t && "object" === e ? { id: t.id, objectId: t.objectId, selector: t.selector, selectorGuids: t.selectorGuids, appliesTo: t.appliesTo, useEventTarget: t.useEventTarget } : {} }

    function bt(t) { var e, r, n, i = t.config,
            a = t.event,
            o = t.eventTarget,
            s = t.elementRoot,
            l = t.elementApi; if (!l) throw new Error("IX2 missing elementApi"); var h = i.targets; if (Array.isArray(h) && h.length > 0) return h.reduce(function(t, e) { return t.concat(bt({ config: { target: e }, event: a, eventTarget: o, elementRoot: s, elementApi: l })) }, []); var c = l.getValidDocument,
            u = l.getQuerySelector,
            f = l.queryDocument,
            p = l.getChildElements,
            m = l.getSiblingElements,
            v = l.matchSelector,
            y = l.elementContains,
            E = l.isSiblingNode,
            b = i.target; if (!b) return []; var _ = Et(b),
            x = _.id,
            T = _.objectId,
            S = _.selector,
            I = _.selectorGuids,
            A = _.appliesTo,
            P = _.useEventTarget; if (T) return [mt[T] || (mt[T] = {})]; if (A === d.EventAppliesTo.PAGE) { var w = c(x); return w ? [w] : [] } var C, D, M, O = (null !== (e = null == a ? void 0 : null === (r = a.action) || void 0 === r ? void 0 : null === (n = r.config) || void 0 === n ? void 0 : n.affectedElements) && void 0 !== e ? e : {})[x || S] || {},
            R = Boolean(O.id || O.selector),
            k = a && u(Et(a.target)); if (R ? (C = O.limitAffectedElements, D = k, M = u(O)) : D = M = u({ id: x, selector: S, selectorGuids: I }), a && P) { var F = o && (M || !0 === P) ? [o] : f(k); if (M) { if (P === j) return f(M).filter(function(t) { return F.some(function(e) { return y(t, e) }) }); if (P === V) return f(M).filter(function(t) { return F.some(function(e) { return y(e, t) }) }); if (P === G) return f(M).filter(function(t) { return F.some(function(e) { return E(e, t) }) }) } return F } return null == D || null == M ? [] : g.IS_BROWSER_ENV && s ? f(M).filter(function(t) { return s.contains(t) }) : C === V ? f(D, M) : C === B ? p(f(D)).filter(v(M)) : C === G ? m(f(D)).filter(v(M)) : f(M) } var _t = /px/,
        xt = function(t, e) { return e.reduce(function(t, e) { return null == t[e.type] && (t[e.type] = wt[e.type]), t }, t || {}) },
        Tt = function(t, e) { return e.reduce(function(t, e) { return null == t[e.type] && (t[e.type] = Ct[e.type] || e.defaultValue || 0), t }, t || {}) }; var St = function(t, e) { return e && (t[e.type] = e.value || 0), t },
        It = function(t, e) { return e && (t[e.type] = e.value || 0), t };

    function At(t) { return /^TRANSFORM_/.test(t) ? Y : /^STYLE_/.test(t) ? Q : /^GENERAL_/.test(t) ? K : /^PLUGIN_/.test(t) ? $ : void 0 }
    e.getItemConfigByKey = function(t, e, r) { if ((0, y.isPluginType)(t)) return (0, y.getPluginConfig)(t)(r, e); switch (t) {
            case it:
                var n = (0, f.default)(r.filters, function(t) { return t.type === e }); return n ? n.value : 0;
            case at:
                var i = (0, f.default)(r.fontVariations, function(t) { return t.type === e }); return i ? i.value : 0;
            default:
                return r[e] } }; var Pt = (a = {}, (0, l.default)(a, J, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })), (0, l.default)(a, tt, Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })), (0, l.default)(a, et, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })), (0, l.default)(a, rt, Object.freeze({ xValue: 0, yValue: 0 })), a),
        wt = Object.freeze({ blur: 0, "hue-rotate": 0, invert: 0, grayscale: 0, saturate: 100, sepia: 0, contrast: 100, brightness: 100 }),
        Ct = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        Dt = function(t, e) { var r = (0, f.default)(e.filters, function(e) { return e.type === t }); if (r && r.unit) return r.unit; switch (t) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%" } },
        Mt = Object.keys(Pt); var Ot = /^rgb/,
        Rt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function kt(t, e, r) { if (g.IS_BROWSER_ENV) { var n = dt[e]; if (n) { var i = r.getStyle,
                    a = r.setStyle,
                    o = i(t, H); if (o) { var s = o.split(W).map(ft); - 1 === s.indexOf(n) && a(t, H, s.concat(n).join(W)) } else a(t, H, n) } } }

    function Ft(t, e, r) { if (g.IS_BROWSER_ENV) { var n = dt[e]; if (n) { var i = r.getStyle,
                    a = r.setStyle,
                    o = i(t, H);
                o && -1 !== o.indexOf(n) && a(t, H, o.split(W).map(ft).filter(function(t) { return t !== n }).join(W)) } } }

    function Lt(t) { var e = t.actionList,
            r = void 0 === e ? {} : e,
            n = t.event,
            i = t.elementApi,
            a = r.actionItemGroups,
            o = r.continuousParameterGroups;
        a && a.forEach(function(t) { Nt({ actionGroup: t, event: n, elementApi: i }) }), o && o.forEach(function(t) { t.continuousActionGroups.forEach(function(t) { Nt({ actionGroup: t, event: n, elementApi: i }) }) }) }

    function Nt(t) { var e = t.actionGroup,
            r = t.event,
            n = t.elementApi;
        e.actionItems.forEach(function(t) { var e, i = t.actionTypeId,
                a = t.config;
            e = (0, y.isPluginType)(i) ? (0, y.clearPlugin)(i) : Vt({ effect: Bt, actionTypeId: i, elementApi: n }), bt({ config: a, event: r, elementApi: n }).forEach(e) }) } var Vt = function(t) { var e = t.effect,
            r = t.actionTypeId,
            n = t.elementApi; return function(t) { switch (r) {
                case J:
                case tt:
                case et:
                case rt:
                    e(t, g.TRANSFORM_PREFIXED, n); break;
                case it:
                    e(t, M, n); break;
                case at:
                    e(t, O, n); break;
                case nt:
                    e(t, D, n); break;
                case ot:
                    e(t, R, n), e(t, k, n); break;
                case st:
                case lt:
                case ht:
                    e(t, pt[r], n); break;
                case ct:
                    e(t, z, n) } } };

    function Bt(t, e, r) { var n = r.setStyle;
        Ft(t, e, r), n(t, e, ""), e === g.TRANSFORM_PREFIXED && n(t, g.TRANSFORM_STYLE_PREFIXED, "") }

    function Gt(t) { var e = 0,
            r = 0; return t.forEach(function(t, n) { var i = t.config,
                a = i.delay + i.duration;
            a >= e && (e = a, r = n) }), r } }, function(t, e) { t.exports = function(t, e) { return null == t || t != t ? e : t } }, function(t, e, r) { var n = r(401),
        i = r(183),
        a = r(28),
        o = r(405),
        s = r(10);
    t.exports = function(t, e, r) { var l = s(t) ? n : o,
            h = arguments.length < 3; return l(t, a(e, 4), r, h, i) } }, function(t, e) { t.exports = function(t, e, r, n) { var i = -1,
            a = null == t ? 0 : t.length; for (n && a && (r = t[++i]); ++i < a;) r = e(r, t[i], i, t); return r } }, function(t, e, r) { var n = r(403)();
    t.exports = n }, function(t, e) { t.exports = function(t) { return function(e, r, n) { for (var i = -1, a = Object(e), o = n(e), s = o.length; s--;) { var l = o[t ? s : ++i]; if (!1 === r(a[l], l, a)) break } return e } } }, function(t, e, r) { var n = r(39);
    t.exports = function(t, e) { return function(r, i) { if (null == r) return r; if (!n(r)) return t(r, i); for (var a = r.length, o = e ? a : -1, s = Object(r);
                (e ? o-- : ++o < a) && !1 !== i(s[o], o, s);); return r } } }, function(t, e) { t.exports = function(t, e, r, n, i) { return i(t, function(t, i, a) { r = n ? (n = !1, t) : e(r, t, i, a) }), r } }, function(t, e, r) { var n = r(177)(r(407));
    t.exports = n }, function(t, e, r) { var n = r(127),
        i = r(28),
        a = r(145),
        o = Math.max,
        s = Math.min;
    t.exports = function(t, e, r) { var l = null == t ? 0 : t.length; if (!l) return -1; var h = l - 1; return void 0 !== r && (h = a(r), h = r < 0 ? o(l + h, 0) : s(h, l - 1)), n(t, i(e, 3), h, !0) } }, function(t, e, r) { "use strict"; var n = r(3)(r(45));
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var i = Object.prototype.hasOwnProperty;

    function a(t, e) { return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e } var o = function(t, e) { if (a(t, e)) return !0; if ("object" !== (0, n.default)(t) || null === t || "object" !== (0, n.default)(e) || null === e) return !1; var r = Object.keys(t),
            o = Object.keys(e); if (r.length !== o.length) return !1; for (var s = 0; s < r.length; s++)
            if (!i.call(e, r[s]) || !a(t[r[s]], e[r[s]])) return !1;
        return !0 };
    e.default = o }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixInstances = void 0; var n = r(14),
        i = r(44),
        a = r(57),
        o = n.IX2EngineActionTypes,
        s = o.IX2_RAW_DATA_IMPORTED,
        l = o.IX2_SESSION_STOPPED,
        h = o.IX2_INSTANCE_ADDED,
        c = o.IX2_INSTANCE_STARTED,
        u = o.IX2_INSTANCE_REMOVED,
        f = o.IX2_ANIMATION_FRAME_CHANGED,
        p = i.IX2EasingUtils,
        d = p.optimizeFloat,
        m = p.applyEasing,
        v = p.createBezierEasing,
        y = n.IX2EngineConstants.RENDER_GENERAL,
        g = i.IX2VanillaUtils,
        E = g.getItemConfigByKey,
        b = g.getRenderType,
        _ = g.getStyleProp,
        x = function(t, e) { var r = t.position,
                n = t.parameterId,
                i = t.actionGroups,
                o = t.destinationKeys,
                s = t.smoothing,
                l = t.restingValue,
                h = t.actionTypeId,
                c = t.customEasingFn,
                u = t.skipMotion,
                f = t.skipToValue,
                p = e.payload.parameters,
                v = Math.max(1 - s, .01),
                y = p[n];
            null == y && (v = 1, y = l); var g, b, _, x, T = Math.max(y, 0) || 0,
                S = d(T - r),
                I = u ? f : d(r + S * v),
                A = 100 * I; if (I === r && t.current) return t; for (var P = 0, w = i.length; P < w; P++) { var C = i[P],
                    D = C.keyframe,
                    M = C.actionItems; if (0 === P && (g = M[0]), A >= D) { g = M[0]; var O = i[P + 1],
                        R = O && A !== D;
                    b = R ? O.actionItems[0] : null, R && (_ = D / 100, x = (O.keyframe - D) / 100) } } var k = {}; if (g && !b)
                for (var F = 0, L = o.length; F < L; F++) { var N = o[F];
                    k[N] = E(h, N, g.config) } else if (g && b && void 0 !== _ && void 0 !== x)
                    for (var V = (I - _) / x, B = g.config.easing, G = m(B, V, c), j = 0, z = o.length; j < z; j++) { var H = o[j],
                            X = E(h, H, g.config),
                            W = (E(h, H, b.config) - X) * G + X;
                        k[H] = W }
                return (0, a.merge)(t, { position: I, current: k }) },
        T = function(t, e) { var r = t,
                n = r.active,
                i = r.origin,
                o = r.start,
                s = r.immediate,
                l = r.renderType,
                h = r.verbose,
                c = r.actionItem,
                u = r.destination,
                f = r.destinationKeys,
                p = r.pluginDuration,
                v = r.instanceDelay,
                g = r.customEasingFn,
                E = r.skipMotion,
                b = c.config.easing,
                _ = c.config,
                x = _.duration,
                T = _.delay;
            null != p && (x = p), T = null != v ? v : T, l === y ? x = 0 : (s || E) && (x = T = 0); var S = e.payload.now; if (n && i) { var I = S - (o + T); if (h) { var A = S - o,
                        P = x + T,
                        w = d(Math.min(Math.max(0, A / P), 1));
                    t = (0, a.set)(t, "verboseTimeElapsed", P * w) } if (I < 0) return t; var C = d(Math.min(Math.max(0, I / x), 1)),
                    D = m(b, C, g),
                    M = {},
                    O = null; return f.length && (O = f.reduce(function(t, e) { var r = u[e],
                        n = parseFloat(i[e]) || 0,
                        a = (parseFloat(r) - n) * D + n; return t[e] = a, t }, {})), M.current = O, M.position = C, 1 === C && (M.active = !1, M.complete = !0), (0, a.merge)(t, M) } return t };
    e.ixInstances = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0; switch (e.type) {
            case s:
                return e.payload.ixInstances || Object.freeze({});
            case l:
                return Object.freeze({});
            case h:
                var r = e.payload,
                    n = r.instanceId,
                    i = r.elementId,
                    o = r.actionItem,
                    p = r.eventId,
                    d = r.eventTarget,
                    m = r.eventStateKey,
                    y = r.actionListId,
                    g = r.groupIndex,
                    E = r.isCarrier,
                    S = r.origin,
                    I = r.destination,
                    A = r.immediate,
                    P = r.verbose,
                    w = r.continuous,
                    C = r.parameterId,
                    D = r.actionGroups,
                    M = r.smoothing,
                    O = r.restingValue,
                    R = r.pluginInstance,
                    k = r.pluginDuration,
                    F = r.instanceDelay,
                    L = r.skipMotion,
                    N = r.skipToValue,
                    V = o.actionTypeId,
                    B = b(V),
                    G = _(B, V),
                    j = Object.keys(I).filter(function(t) { return null != I[t] }),
                    z = o.config.easing; return (0, a.set)(t, n, { id: n, elementId: i, active: !1, position: 0, start: 0, origin: S, destination: I, destinationKeys: j, immediate: A, verbose: P, current: null, actionItem: o, actionTypeId: V, eventId: p, eventTarget: d, eventStateKey: m, actionListId: y, groupIndex: g, renderType: B, isCarrier: E, styleProp: G, continuous: w, parameterId: C, actionGroups: D, smoothing: M, restingValue: O, pluginInstance: R, pluginDuration: k, instanceDelay: F, skipMotion: L, skipToValue: N, customEasingFn: Array.isArray(z) && 4 === z.length ? v(z) : void 0 });
            case c:
                var H = e.payload,
                    X = H.instanceId,
                    W = H.time; return (0, a.mergeIn)(t, [X], { active: !0, complete: !1, start: W });
            case u:
                var U = e.payload.instanceId; if (!t[U]) return t; for (var q = {}, Y = Object.keys(t), K = Y.length, Q = 0; Q < K; Q++) { var $ = Y[Q];
                    $ !== U && (q[$] = t[$]) } return q;
            case f:
                for (var Z = t, J = Object.keys(t), tt = J.length, et = 0; et < tt; et++) { var rt = J[et],
                        nt = t[rt],
                        it = nt.continuous ? x : T;
                    Z = (0, a.set)(Z, rt, it(nt, e)) } return Z;
            default:
                return t } } }, function(t, e, r) { "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ixParameters = void 0; var n = r(14).IX2EngineActionTypes,
        i = n.IX2_RAW_DATA_IMPORTED,
        a = n.IX2_SESSION_STOPPED,
        o = n.IX2_PARAMETER_CHANGED;
    e.ixParameters = function() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0; switch (e.type) {
            case i:
                return e.payload.ixParameters || {};
            case a:
                return {};
            case o:
                var r = e.payload,
                    n = r.key,
                    s = r.value; return t[n] = s, t;
            default:
                return t } } }, function(t, e) { t.exports = function(t, e) { if (null == t) return {}; var r, n, i = {},
            a = Object.keys(t); for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (i[r] = t[r]); return i } }, function(t, e, r) { var n = r(87),
        i = r(89),
        a = r(39),
        o = r(413),
        s = r(414),
        l = "[object Map]",
        h = "[object Set]";
    t.exports = function(t) { if (null == t) return 0; if (a(t)) return o(t) ? s(t) : t.length; var e = i(t); return e == l || e == h ? t.size : n(t).length } }, function(t, e, r) { var n = r(38),
        i = r(10),
        a = r(30),
        o = "[object String]";
    t.exports = function(t) { return "string" == typeof t || !i(t) && a(t) && n(t) == o } }, function(t, e, r) { var n = r(415),
        i = r(416),
        a = r(417);
    t.exports = function(t) { return i(t) ? a(t) : n(t) } }, function(t, e, r) { var n = r(144)("length");
    t.exports = n }, function(t, e) { var r = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function(t) { return r.test(t) } }, function(t, e) { var r = "[\\ud800-\\udfff]",
        n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        a = "[^\\ud800-\\udfff]",
        o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        s = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        l = "(?:" + n + "|" + i + ")" + "?",
        h = "[\\ufe0e\\ufe0f]?" + l + ("(?:\\u200d(?:" + [a, o, s].join("|") + ")[\\ufe0e\\ufe0f]?" + l + ")*"),
        c = "(?:" + [a + n + "?", n, o, s, r].join("|") + ")",
        u = RegExp(i + "(?=" + i + ")|" + c + h, "g");
    t.exports = function(t) { for (var e = u.lastIndex = 0; u.test(t);) ++e; return e } }, function(t, e, r) { var n = r(28),
        i = r(419),
        a = r(420);
    t.exports = function(t, e) { return a(t, i(n(e))) } }, function(t, e) { var r = "Expected a function";
    t.exports = function(t) { if ("function" != typeof t) throw new TypeError(r); return function() { var e = arguments; switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2]) } return !t.apply(this, e) } } }, function(t, e, r) { var n = r(143),
        i = r(28),
        a = r(421),
        o = r(424);
    t.exports = function(t, e) { if (null == t) return {}; var r = n(o(t), function(t) { return [t] }); return e = i(e), a(t, r, function(t, r) { return e(t, r[0]) }) } }, function(t, e, r) { var n = r(91),
        i = r(422),
        a = r(65);
    t.exports = function(t, e, r) { for (var o = -1, s = e.length, l = {}; ++o < s;) { var h = e[o],
                c = n(t, h);
            r(c, h) && i(l, a(h, t), c) } return l } }, function(t, e, r) { var n = r(423),
        i = r(65),
        a = r(84),
        o = r(23),
        s = r(48);
    t.exports = function(t, e, r, l) { if (!o(t)) return t; for (var h = -1, c = (e = i(e, t)).length, u = c - 1, f = t; null != f && ++h < c;) { var p = s(e[h]),
                d = r; if ("__proto__" === p || "constructor" === p || "prototype" === p) return t; if (h != u) { var m = f[p];
                void 0 === (d = l ? l(m, p, f) : void 0) && (d = o(m) ? m : a(e[h + 1]) ? [] : {}) }
            n(f, p, d), f = f[p] } return t } }, function(t, e, r) { var n = r(186),
        i = r(79),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, r) { var o = t[e];
        a.call(t, e) && i(o, r) && (void 0 !== r || e in t) || n(t, e, r) } }, function(t, e, r) { var n = r(134),
        i = r(425),
        a = r(427);
    t.exports = function(t) { return n(t, a, i) } }, function(t, e, r) { var n = r(82),
        i = r(426),
        a = r(135),
        o = r(136),
        s = Object.getOwnPropertySymbols ? function(t) { for (var e = []; t;) n(e, a(t)), t = i(t); return e } : o;
    t.exports = s }, function(t, e, r) { var n = r(139)(Object.getPrototypeOf, Object);
    t.exports = n }, function(t, e, r) { var n = r(137),
        i = r(428),
        a = r(39);
    t.exports = function(t) { return a(t) ? n(t, !0) : i(t) } }, function(t, e, r) { var n = r(23),
        i = r(88),
        a = r(429),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) { if (!n(t)) return a(t); var e = i(t),
            r = []; for (var s in t)("constructor" != s || !e && o.call(t, s)) && r.push(s); return r } }, function(t, e) { t.exports = function(t) { var e = []; if (null != t)
            for (var r in Object(t)) e.push(r); return e } }, function(t, e, r) { var n = r(87),
        i = r(89),
        a = r(64),
        o = r(10),
        s = r(39),
        l = r(83),
        h = r(88),
        c = r(85),
        u = "[object Map]",
        f = "[object Set]",
        p = Object.prototype.hasOwnProperty;
    t.exports = function(t) { if (null == t) return !0; if (s(t) && (o(t) || "string" == typeof t || "function" == typeof t.splice || l(t) || c(t) || a(t))) return !t.length; var e = i(t); if (e == u || e == f) return !t.size; if (h(t)) return !n(t).length; for (var r in t)
            if (p.call(t, r)) return !1;
        return !0 } }, function(t, e, r) { var n = r(186),
        i = r(184),
        a = r(28);
    t.exports = function(t, e) { var r = {}; return e = a(e, 3), i(t, function(t, i, a) { n(r, i, e(t, i, a)) }), r } }, function(t, e, r) { var n = r(433),
        i = r(183),
        a = r(434),
        o = r(10);
    t.exports = function(t, e) { return (o(t) ? n : i)(t, a(e)) } }, function(t, e) { t.exports = function(t, e) { for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t);); return t } }, function(t, e, r) { var n = r(93);
    t.exports = function(t) { return "function" == typeof t ? t : n } }, function(t, e, r) { var n = r(436),
        i = r(23),
        a = "Expected a function";
    t.exports = function(t, e, r) { var o = !0,
            s = !0; if ("function" != typeof t) throw new TypeError(a); return i(r) && (o = "leading" in r ? !!r.leading : o, s = "trailing" in r ? !!r.trailing : s), n(t, e, { leading: o, maxWait: e, trailing: s }) } }, function(t, e, r) { var n = r(23),
        i = r(437),
        a = r(94),
        o = "Expected a function",
        s = Math.max,
        l = Math.min;
    t.exports = function(t, e, r) { var h, c, u, f, p, d, m = 0,
            v = !1,
            y = !1,
            g = !0; if ("function" != typeof t) throw new TypeError(o);

        function E(e) { var r = h,
                n = c; return h = c = void 0, m = e, f = t.apply(n, r) }

        function b(t) { var r = t - d; return void 0 === d || r >= e || r < 0 || y && t - m >= u }

        function _() { var t = i(); if (b(t)) return x(t);
            p = setTimeout(_, function(t) { var r = e - (t - d); return y ? l(r, u - (t - m)) : r }(t)) }

        function x(t) { return p = void 0, g && h ? E(t) : (h = c = void 0, f) }

        function T() { var t = i(),
                r = b(t); if (h = arguments, c = this, d = t, r) { if (void 0 === p) return function(t) { return m = t, p = setTimeout(_, e), v ? E(t) : f }(d); if (y) return clearTimeout(p), p = setTimeout(_, e), E(d) } return void 0 === p && (p = setTimeout(_, e)), f } return e = a(e) || 0, n(r) && (v = !!r.leading, u = (y = "maxWait" in r) ? s(a(r.maxWait) || 0, e) : u, g = "trailing" in r ? !!r.trailing : g), T.cancel = function() { void 0 !== p && clearTimeout(p), m = 0, h = d = c = p = void 0 }, T.flush = function() { return void 0 === p ? f : x(i()) }, T } }, function(t, e, r) { var n = r(19);
    t.exports = function() { return n.Date.now() } }, function(t, e, r) { "use strict"; var n = r(3)(r(45));
    Object.defineProperty(e, "__esModule", { value: !0 }), e.setStyle = function(t, e, r) { t.style[e] = r }, e.getStyle = function(t, e) { return t.style[e] }, e.getProperty = function(t, e) { return t[e] }, e.matchSelector = function(t) { return function(e) { return e[o](t) } }, e.getQuerySelector = function(t) { var e = t.id,
            r = t.selector; if (e) { var n = e; if (-1 !== e.indexOf(l)) { var i = e.split(l),
                    a = i[0]; if (n = i[1], a !== document.documentElement.getAttribute(u)) return null } return '[data-w-id="'.concat(n, '"], [data-w-id^="').concat(n, '_instance"]') } return r }, e.getValidDocument = function(t) { if (null == t || t === document.documentElement.getAttribute(u)) return document; return null }, e.queryDocument = function(t, e) { return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t)) }, e.elementContains = function(t, e) { return t.contains(e) }, e.isSiblingNode = function(t, e) { return t !== e && t.parentNode === e.parentNode }, e.getChildElements = function(t) { for (var e = [], r = 0, n = (t || []).length; r < n; r++) { var i = t[r].children,
                a = i.length; if (a)
                for (var o = 0; o < a; o++) e.push(i[o]) } return e }, e.getSiblingElements = function() { for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], r = [], n = 0, i = t.length; n < i; n++) { var a = t[n].parentNode; if (a && a.children && a.children.length && -1 === r.indexOf(a)) { r.push(a); for (var o = a.firstElementChild; null != o;) - 1 === t.indexOf(o) && e.push(o), o = o.nextElementSibling } } return e }, e.getRefType = function(t) { if (null != t && "object" == (0, n.default)(t)) return t instanceof Element ? h : c; return null }, e.getClosestElement = void 0; var i = r(44),
        a = r(14),
        o = i.IX2BrowserSupport.ELEMENT_MATCHES,
        s = a.IX2EngineConstants,
        l = s.IX2_ID_DELIMITER,
        h = s.HTML_ELEMENT,
        c = s.PLAIN_OBJECT,
        u = s.WF_PAGE; var f = Element.prototype.closest ? function(t, e) { return document.documentElement.contains(t) ? t.closest(e) : null } : function(t, e) { if (!document.documentElement.contains(t)) return null; var r = t;
        do { if (r[o] && r[o](e)) return r;
            r = r.parentNode } while (null != r); return null };
    e.getClosestElement = f }, function(t, e, r) { "use strict"; var n, i = r(3),
        a = i(r(37)),
        o = i(r(45)),
        s = r(3);
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0; var l, h, c, u = s(r(46)),
        f = s(r(440)),
        p = s(r(90)),
        d = s(r(459)),
        m = r(14),
        v = r(185),
        y = r(121),
        g = r(44),
        E = m.EventTypeConsts,
        b = E.MOUSE_CLICK,
        _ = E.MOUSE_SECOND_CLICK,
        x = E.MOUSE_DOWN,
        T = E.MOUSE_UP,
        S = E.MOUSE_OVER,
        I = E.MOUSE_OUT,
        A = E.DROPDOWN_CLOSE,
        P = E.DROPDOWN_OPEN,
        w = E.SLIDER_ACTIVE,
        C = E.SLIDER_INACTIVE,
        D = E.TAB_ACTIVE,
        M = E.TAB_INACTIVE,
        O = E.NAVBAR_CLOSE,
        R = E.NAVBAR_OPEN,
        k = E.MOUSE_MOVE,
        F = E.PAGE_SCROLL_DOWN,
        L = E.SCROLL_INTO_VIEW,
        N = E.SCROLL_OUT_OF_VIEW,
        V = E.PAGE_SCROLL_UP,
        B = E.SCROLLING_IN_VIEW,
        G = E.PAGE_FINISH,
        j = E.ECOMMERCE_CART_CLOSE,
        z = E.ECOMMERCE_CART_OPEN,
        H = E.PAGE_START,
        X = E.PAGE_SCROLL,
        W = "COMPONENT_ACTIVE",
        U = "COMPONENT_INACTIVE",
        q = m.IX2EngineConstants.COLON_DELIMITER,
        Y = g.IX2VanillaUtils.getNamespacedParameterId,
        K = function(t) { return function(e) { return !("object" !== (0, o.default)(e) || !t(e)) || e } },
        Q = K(function(t) { return t.element === t.nativeEvent.target }),
        $ = K(function(t) { var e = t.element,
                r = t.nativeEvent; return e.contains(r.target) }),
        Z = (0, f.default)([Q, $]),
        J = function(t, e) { if (e) { var r = t.getState().ixData.events[e]; if (r && !ot[r.eventTypeId]) return r } return null },
        tt = function(t, e) { var r = t.store,
                n = t.event,
                i = t.element,
                a = t.eventStateKey,
                o = n.action,
                s = n.id,
                l = o.config,
                h = l.actionListId,
                c = l.autoStopEventId,
                u = J(r, c); return u && (0, v.stopActionGroup)({ store: r, eventId: c, eventTarget: i, eventStateKey: c + q + a.split(q)[1], actionListId: (0, p.default)(u, "action.config.actionListId") }), (0, v.stopActionGroup)({ store: r, eventId: s, eventTarget: i, eventStateKey: a, actionListId: h }), (0, v.startActionGroup)({ store: r, eventId: s, eventTarget: i, eventStateKey: a, actionListId: h }), e },
        et = function(t, e) { return function(r, n) { return !0 === t(r, n) ? e(r, n) : n } },
        rt = { handler: et(Z, tt) },
        nt = (0, u.default)({}, rt, { types: [W, U].join(" ") }),
        it = [{ target: window, types: "resize orientationchange", throttle: !0 }, { target: document, types: "scroll wheel readystatechange IX2_PAGE_UPDATE", throttle: !0 }],
        at = { types: it },
        ot = { PAGE_START: H, PAGE_FINISH: G },
        st = (l = void 0 !== window.pageXOffset, h = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function() { return { scrollLeft: l ? window.pageXOffset : h.scrollLeft, scrollTop: l ? window.pageYOffset : h.scrollTop, stiffScrollTop: (0, d.default)(l ? window.pageYOffset : h.scrollTop, 0, h.scrollHeight - window.innerHeight), scrollWidth: h.scrollWidth, scrollHeight: h.scrollHeight, clientWidth: h.clientWidth, clientHeight: h.clientHeight, innerWidth: window.innerWidth, innerHeight: window.innerHeight } }),
        lt = function(t) { var e = t.element,
                r = t.nativeEvent,
                n = r.type,
                i = r.target,
                a = r.relatedTarget,
                o = e.contains(i); if ("mouseover" === n && o) return !0; var s = e.contains(a); return !("mouseout" !== n || !o || !s) },
        ht = function(t) { var e, r, n = t.element,
                i = t.event.config,
                a = st(),
                o = a.clientWidth,
                s = a.clientHeight,
                l = i.scrollOffsetValue,
                h = "PX" === i.scrollOffsetUnit ? l : s * (l || 0) / 100; return e = n.getBoundingClientRect(), r = { left: 0, top: h, right: o, bottom: s - h }, !(e.left > r.right || e.right < r.left || e.top > r.bottom || e.bottom < r.top) },
        ct = function(t) { return function(e, r) { var n = e.nativeEvent.type,
                    i = -1 !== [W, U].indexOf(n) ? n === W : r.isActive,
                    a = (0, u.default)({}, r, { isActive: i }); return r && a.isActive === r.isActive ? a : t(e, a) || a } },
        ut = function(t) { return function(e, r) { var n = { elementHovered: lt(e) }; return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && t(e, n) || n } },
        ft = function(t) { return function(e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = st(),
                    i = n.stiffScrollTop,
                    a = n.scrollHeight,
                    o = n.innerHeight,
                    s = e.event,
                    l = s.config,
                    h = s.eventTypeId,
                    c = l.scrollOffsetValue,
                    f = "PX" === l.scrollOffsetUnit,
                    p = a - o,
                    d = Number((i / p).toFixed(2)); if (r && r.percentTop === d) return r; var m, v, y = (f ? c : o * (c || 0) / 100) / p,
                    g = 0;
                r && (m = d > r.percentTop, g = (v = r.scrollingDown !== m) ? d : r.anchorTop); var E = h === F ? d >= g + y : d <= g - y,
                    b = (0, u.default)({}, r, { percentTop: d, inBounds: E, anchorTop: g, scrollingDown: m }); return r && E && (v || b.inBounds !== r.inBounds) && t(e, b) || b } },
        pt = function(t) { return function(e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clickCount: 0 },
                    n = { clickCount: r.clickCount % 2 + 1 }; return n.clickCount !== r.clickCount && t(e, n) || n } },
        dt = function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return (0, u.default)({}, nt, { handler: et(t ? Z : Q, ct(function(t, e) { return e.isActive ? rt.handler(t, e) : e })) }) },
        mt = function() { var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return (0, u.default)({}, nt, { handler: et(t ? Z : Q, ct(function(t, e) { return e.isActive ? e : rt.handler(t, e) })) }) },
        vt = (0, u.default)({}, at, { handler: (c = function(t, e) { var r = e.elementVisible,
                    n = t.event; return !t.store.getState().ixData.events[n.action.config.autoStopEventId] && e.triggered ? e : n.eventTypeId === L === r ? (tt(t), (0, u.default)({}, e, { triggered: !0 })) : e }, function(t, e) { var r = (0, u.default)({}, e, { elementVisible: ht(t) }); return (e ? r.elementVisible !== e.elementVisible : r.elementVisible) && c(t, r) || r }) }),
        yt = (n = {}, (0, a.default)(n, w, dt()), (0, a.default)(n, C, mt()), (0, a.default)(n, P, dt()), (0, a.default)(n, A, mt()), (0, a.default)(n, R, dt(!1)), (0, a.default)(n, O, mt(!1)), (0, a.default)(n, D, dt()), (0, a.default)(n, M, mt()), (0, a.default)(n, z, { types: "ecommerce-cart-open", handler: et(Z, tt) }), (0, a.default)(n, j, { types: "ecommerce-cart-close", handler: et(Z, tt) }), (0, a.default)(n, b, { types: "click", handler: et(Z, pt(function(t, e) { var r, n, i, a = e.clickCount;
                n = (r = t).store, i = r.event.action.config.autoStopEventId, Boolean(J(n, i)) ? 1 === a && tt(t) : tt(t) })) }), (0, a.default)(n, _, { types: "click", handler: et(Z, pt(function(t, e) { 2 === e.clickCount && tt(t) })) }), (0, a.default)(n, x, (0, u.default)({}, rt, { types: "mousedown" })), (0, a.default)(n, T, (0, u.default)({}, rt, { types: "mouseup" })), (0, a.default)(n, S, { types: "mouseover mouseout", handler: et(Z, ut(function(t, e) { e.elementHovered && tt(t) })) }), (0, a.default)(n, I, { types: "mouseover mouseout", handler: et(Z, ut(function(t, e) { e.elementHovered || tt(t) })) }), (0, a.default)(n, k, { types: "mousemove mouseout scroll", handler: function(t) { var e = t.store,
                    r = t.element,
                    n = t.eventConfig,
                    i = t.nativeEvent,
                    a = t.eventStateKey,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
                    s = n.basedOn,
                    l = n.selectedAxis,
                    h = n.continuousParameterGroupId,
                    c = n.reverse,
                    u = n.restingState,
                    f = void 0 === u ? 0 : u,
                    p = i.clientX,
                    d = void 0 === p ? o.clientX : p,
                    v = i.clientY,
                    g = void 0 === v ? o.clientY : v,
                    E = i.pageX,
                    b = void 0 === E ? o.pageX : E,
                    _ = i.pageY,
                    x = void 0 === _ ? o.pageY : _,
                    T = "X_AXIS" === l,
                    S = "mouseout" === i.type,
                    I = f / 100,
                    A = h,
                    P = !1; switch (s) {
                    case m.EventBasedOn.VIEWPORT:
                        I = T ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight; break;
                    case m.EventBasedOn.PAGE:
                        var w = st(),
                            C = w.scrollLeft,
                            D = w.scrollTop,
                            M = w.scrollWidth,
                            O = w.scrollHeight;
                        I = T ? Math.min(C + b, M) / M : Math.min(D + x, O) / O; break;
                    case m.EventBasedOn.ELEMENT:
                    default:
                        A = Y(a, h); var R = 0 === i.type.indexOf("mouse"); if (R && !0 !== Z({ element: r, nativeEvent: i })) break; var k = r.getBoundingClientRect(),
                            F = k.left,
                            L = k.top,
                            N = k.width,
                            V = k.height; if (!R && ! function(t, e) { return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom }({ left: d, top: g }, k)) break;
                        P = !0, I = T ? (d - F) / N : (g - L) / V } return S && (I > .95 || I < .05) && (I = Math.round(I)), (s !== m.EventBasedOn.ELEMENT || P || P !== o.elementHovered) && (I = c ? 1 - I : I, e.dispatch((0, y.parameterChanged)(A, I))), { elementHovered: P, clientX: d, clientY: g, pageX: b, pageY: x } } }), (0, a.default)(n, X, { types: it, handler: function(t) { var e = t.store,
                    r = t.eventConfig,
                    n = r.continuousParameterGroupId,
                    i = r.reverse,
                    a = st(),
                    o = a.scrollTop / (a.scrollHeight - a.clientHeight);
                o = i ? 1 - o : o, e.dispatch((0, y.parameterChanged)(n, o)) } }), (0, a.default)(n, B, { types: it, handler: function(t) { var e = t.element,
                    r = t.store,
                    n = t.eventConfig,
                    i = t.eventStateKey,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollPercent: 0 },
                    o = st(),
                    s = o.scrollLeft,
                    l = o.scrollTop,
                    h = o.scrollWidth,
                    c = o.scrollHeight,
                    u = o.clientHeight,
                    f = n.basedOn,
                    p = n.selectedAxis,
                    d = n.continuousParameterGroupId,
                    v = n.startsEntering,
                    g = n.startsExiting,
                    E = n.addEndOffset,
                    b = n.addStartOffset,
                    _ = n.addOffsetValue,
                    x = void 0 === _ ? 0 : _,
                    T = n.endOffsetValue,
                    S = void 0 === T ? 0 : T,
                    I = "X_AXIS" === p; if (f === m.EventBasedOn.VIEWPORT) { var A = I ? s / h : l / c; return A !== a.scrollPercent && r.dispatch((0, y.parameterChanged)(d, A)), { scrollPercent: A } } var P = Y(i, d),
                    w = e.getBoundingClientRect(),
                    C = (b ? x : 0) / 100,
                    D = (E ? S : 0) / 100;
                C = v ? C : 1 - C, D = g ? D : 1 - D; var M = w.top + Math.min(w.height * C, u),
                    O = w.top + w.height * D - M,
                    R = Math.min(u + O, c),
                    k = Math.min(Math.max(0, u - M), R) / R; return k !== a.scrollPercent && r.dispatch((0, y.parameterChanged)(P, k)), { scrollPercent: k } } }), (0, a.default)(n, L, vt), (0, a.default)(n, N, vt), (0, a.default)(n, F, (0, u.default)({}, at, { handler: ft(function(t, e) { e.scrollingDown && tt(t) }) })), (0, a.default)(n, V, (0, u.default)({}, at, { handler: ft(function(t, e) { e.scrollingDown || tt(t) }) })), (0, a.default)(n, G, { types: "readystatechange IX2_PAGE_UPDATE", handler: et(Q, function(t) { return function(e, r) { var n = { finished: "complete" === document.readyState }; return !n.finished || r && r.finshed || t(e), n } }(tt)) }), (0, a.default)(n, H, { types: "readystatechange IX2_PAGE_UPDATE", handler: et(Q, function(t) { return function(e, r) { return r || t(e), { started: !0 } } }(tt)) }), n);
    e.default = yt }, function(t, e, r) { var n = r(441)();
    t.exports = n }, function(t, e, r) { var n = r(122),
        i = r(442),
        a = r(189),
        o = r(190),
        s = r(10),
        l = r(455),
        h = "Expected a function",
        c = 8,
        u = 32,
        f = 128,
        p = 256;
    t.exports = function(t) { return i(function(e) { var r = e.length,
                i = r,
                d = n.prototype.thru; for (t && e.reverse(); i--;) { var m = e[i]; if ("function" != typeof m) throw new TypeError(h); if (d && !v && "wrapper" == o(m)) var v = new n([], !0) } for (i = v ? i : r; ++i < r;) { m = e[i]; var y = o(m),
                    g = "wrapper" == y ? a(m) : void 0;
                v = g && l(g[0]) && g[1] == (f | c | u | p) && !g[4].length && 1 == g[9] ? v[o(g[0])].apply(v, g[3]) : 1 == m.length && l(m) ? v[y]() : v.thru(m) } return function() { var t = arguments,
                    n = t[0]; if (v && 1 == t.length && s(n)) return v.plant(n).value(); for (var i = 0, a = r ? e[i].apply(this, t) : n; ++i < r;) a = e[i].call(this, a); return a } }) } }, function(t, e, r) { var n = r(443),
        i = r(446),
        a = r(448);
    t.exports = function(t) { return a(i(t, void 0, n), t + "") } }, function(t, e, r) { var n = r(444);
    t.exports = function(t) { return null != t && t.length ? n(t, 1) : [] } }, function(t, e, r) { var n = r(82),
        i = r(445);
    t.exports = function t(e, r, a, o, s) { var l = -1,
            h = e.length; for (a || (a = i), s || (s = []); ++l < h;) { var c = e[l];
            r > 0 && a(c) ? r > 1 ? t(c, r - 1, a, o, s) : n(s, c) : o || (s[s.length] = c) } return s } }, function(t, e, r) { var n = r(47),
        i = r(64),
        a = r(10),
        o = n ? n.isConcatSpreadable : void 0;
    t.exports = function(t) { return a(t) || i(t) || !!(o && t && t[o]) } }, function(t, e, r) { var n = r(447),
        i = Math.max;
    t.exports = function(t, e, r) { return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() { for (var a = arguments, o = -1, s = i(a.length - e, 0), l = Array(s); ++o < s;) l[o] = a[e + o];
                o = -1; for (var h = Array(e + 1); ++o < e;) h[o] = a[o]; return h[e] = r(l), n(t, this, h) } } }, function(t, e) { t.exports = function(t, e, r) { switch (r.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, r[0]);
            case 2:
                return t.call(e, r[0], r[1]);
            case 3:
                return t.call(e, r[0], r[1], r[2]) } return t.apply(e, r) } }, function(t, e, r) { var n = r(449),
        i = r(451)(n);
    t.exports = i }, function(t, e, r) { var n = r(450),
        i = r(187),
        a = r(93),
        o = i ? function(t, e) { return i(t, "toString", { configurable: !0, enumerable: !1, value: n(e), writable: !0 }) } : a;
    t.exports = o }, function(t, e) { t.exports = function(t) { return function() { return t } } }, function(t, e) { var r = 800,
        n = 16,
        i = Date.now;
    t.exports = function(t) { var e = 0,
            a = 0; return function() { var o = i(),
                s = n - (o - a); if (a = o, s > 0) { if (++e >= r) return arguments[0] } else e = 0; return t.apply(void 0, arguments) } } }, function(t, e, r) { var n = r(140),
        i = n && new n;
    t.exports = i }, function(t, e) { t.exports = function() {} }, function(t, e) { t.exports = {} }, function(t, e, r) { var n = r(124),
        i = r(189),
        a = r(190),
        o = r(456);
    t.exports = function(t) { var e = a(t),
            r = o[e]; if ("function" != typeof r || !(e in n.prototype)) return !1; if (t === r) return !0; var s = i(r); return !!s && t === s[0] } }, function(t, e, r) { var n = r(124),
        i = r(122),
        a = r(123),
        o = r(10),
        s = r(30),
        l = r(457),
        h = Object.prototype.hasOwnProperty;

    function c(t) { if (s(t) && !o(t) && !(t instanceof n)) { if (t instanceof i) return t; if (h.call(t, "__wrapped__")) return l(t) } return new i(t) }
    c.prototype = a.prototype, c.prototype.constructor = c, t.exports = c }, function(t, e, r) { var n = r(124),
        i = r(122),
        a = r(458);
    t.exports = function(t) { if (t instanceof n) return t.clone(); var e = new i(t.__wrapped__, t.__chain__); return e.__actions__ = a(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e } }, function(t, e) { t.exports = function(t, e) { var r = -1,
            n = t.length; for (e || (e = Array(n)); ++r < n;) e[r] = t[r]; return e } }, function(t, e, r) { var n = r(460),
        i = r(94);
    t.exports = function(t, e, r) { return void 0 === r && (r = e, e = void 0), void 0 !== r && (r = (r = i(r)) == r ? r : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), n(i(t), e, r) } }, function(t, e) { t.exports = function(t, e, r) { return t == t && (void 0 !== r && (t = t <= r ? t : r), void 0 !== e && (t = t >= e ? t : e)), t } }, function(t, e, r) { "use strict"; var n = r(13);
    n.define("links", t.exports = function(t, e) { var r, i, a, o = {},
            s = t(window),
            l = n.env(),
            h = window.location,
            c = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;

        function d(e) { var n = r && e.getAttribute("href-disabled") || e.getAttribute("href"); if (c.href = n, !(n.indexOf(":") >= 0)) { var o = t(e); if (c.hash.length > 1 && c.host + c.pathname === h.host + h.pathname) { if (!/^#[a-zA-Z0-9\-\_]+$/.test(c.hash)) return; var s = t(c.hash);
                    s.length && i.push({ link: o, sec: s, active: !1 }) } else if ("#" !== n && "" !== n) { var l = c.href === h.href || n === a || f.test(n) && p.test(a);
                    v(o, u, l) } } }

        function m() { var t = s.scrollTop(),
                r = s.height();
            e.each(i, function(e) { var n = e.link,
                    i = e.sec,
                    a = i.offset().top,
                    o = i.outerHeight(),
                    s = .5 * r,
                    l = i.is(":visible") && a + o - s >= t && a + s <= t + r;
                e.active !== l && (e.active = l, v(n, u, l)) }) }

        function v(t, e, r) { var n = t.hasClass(e);
            r && n || (r || n) && (r ? t.addClass(e) : t.removeClass(e)) } return o.ready = o.design = o.preview = function() { r = l && n.env("design"), a = n.env("slug") || h.pathname || "", n.scroll.off(m), i = []; for (var t = document.links, e = 0; e < t.length; ++e) d(t[e]);
            i.length && (n.scroll.on(m), m()) }, o }) }, function(t, e, r) { "use strict"; var n = r(13);
    n.define("scroll", t.exports = function(t) { var e = { WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll" },
            r = window.location,
            i = function() { try { return Boolean(window.frameElement) } catch (t) { return !0 } }() ? null : window.history,
            a = t(window),
            o = t(document),
            s = t(document.body),
            l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) { window.setTimeout(t, 15) },
            h = n.env("editor") ? ".w-editor-body" : "body",
            c = "header, " + h + " > .header, " + h + " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
        p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}')); var d = /^#[a-zA-Z0-9][\w:.-]*$/; var m = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

        function v(t, e) { var r; switch (e) {
                case "add":
                    (r = t.attr("tabindex")) ? t.attr("data-wf-tabindex-swap", r): t.attr("tabindex", "-1"); break;
                case "remove":
                    (r = t.attr("data-wf-tabindex-swap")) ? (t.attr("tabindex", r), t.removeAttr("data-wf-tabindex-swap")) : t.removeAttr("tabindex") }
            t.toggleClass("wf-force-outline-none", "add" === e) }

        function y(e) { var o = e.currentTarget; if (!(n.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))) { var h, u = (h = o, d.test(h.hash) && h.host + h.pathname === r.host + r.pathname ? o.hash : ""); if ("" !== u) { var f = t(u);
                    f.length && (e && (e.preventDefault(), e.stopPropagation()), function(t) { if (r.hash !== t && i && i.pushState && (!n.env.chrome || "file:" !== r.protocol)) { var e = i.state && i.state.hash;
                            e !== t && i.pushState({ hash: t }, "", t) } }(u), window.setTimeout(function() {! function(e, r) { var n = a.scrollTop(),
                                i = function(e) { var r = t(c),
                                        n = "fixed" === r.css("position") ? r.outerHeight() : 0,
                                        i = e.offset().top - n; if ("mid" === e.data("scroll")) { var o = a.height() - n,
                                            s = e.outerHeight();
                                        s < o && (i -= Math.round((o - s) / 2)) } return i }(e); if (n === i) return; var o = function(t, e, r) { if ("none" === document.body.getAttribute("data-wf-scroll-motion") || m.matches) return 0; var n = 1; return s.add(t).each(function(t, e) { var r = parseFloat(e.getAttribute("data-scroll-time"));!isNaN(r) && r >= 0 && (n = r) }), (472.143 * Math.log(Math.abs(e - r) + 125) - 2e3) * n }(e, n, i),
                                h = Date.now();
                            l(function t() { var e = Date.now() - h;
                                window.scroll(0, function(t, e, r, n) { return r > n ? e : t + (e - t) * ((i = r / n) < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1); var i }(n, i, e, o)), e <= o ? l(t) : "function" == typeof r && r() }) }(f, function() { v(f, "add"), f.get(0).focus({ preventScroll: !0 }), v(f, "remove") }) }, e ? 0 : 300)) } } } return { ready: function() { var t = e.WF_CLICK_EMPTY,
                    r = e.WF_CLICK_SCROLL;
                o.on(r, f, y), o.on(t, u, function(t) { t.preventDefault() }), document.head.insertBefore(p, document.head.firstChild) } } }) }, function(t, e, r) { "use strict";
    r(13).define("touch", t.exports = function(t) { var e = {},
            r = window.getSelection;

        function n(e) { var n, i, a = !1,
                o = !1,
                s = Math.min(Math.round(.04 * window.innerWidth), 40);

            function l(t) { var e = t.touches;
                e && e.length > 1 || (a = !0, e ? (o = !0, n = e[0].clientX) : n = t.clientX, i = n) }

            function h(e) { if (a) { if (o && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation(); var n = e.touches,
                        l = n ? n[0].clientX : e.clientX,
                        h = l - i;
                    i = l, Math.abs(h) > s && r && "" === String(r()) && (! function(e, r, n) { var i = t.Event(e, { originalEvent: r });
                        t(r.target).trigger(i, n) }("swipe", e, { direction: h > 0 ? "right" : "left" }), u()) } }

            function c(t) { if (a) return a = !1, o && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(o = !1)) : void 0 }

            function u() { a = !1 }
            e.addEventListener("touchstart", l, !1), e.addEventListener("touchmove", h, !1), e.addEventListener("touchend", c, !1), e.addEventListener("touchcancel", u, !1), e.addEventListener("mousedown", l, !1), e.addEventListener("mousemove", h, !1), e.addEventListener("mouseup", c, !1), e.addEventListener("mouseout", u, !1), this.destroy = function() { e.removeEventListener("touchstart", l, !1), e.removeEventListener("touchmove", h, !1), e.removeEventListener("touchend", c, !1), e.removeEventListener("touchcancel", u, !1), e.removeEventListener("mousedown", l, !1), e.removeEventListener("mousemove", h, !1), e.removeEventListener("mouseup", c, !1), e.removeEventListener("mouseout", u, !1), e = null } } return t.event.special.tap = { bindType: "click", delegateType: "click" }, e.init = function(e) { return (e = "string" == typeof e ? t(e).get(0) : e) ? new n(e) : null }, e.instance = e.init(document), e }) }, function(t, e, r) { "use strict"; var n = r(13),
        i = r(117),
        a = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 },
        o = !0,
        s = /^#[a-zA-Z0-9\-_]+$/;
    n.define("dropdown", t.exports = function(t, e) { var r, l, h = e.debounce,
            c = {},
            u = n.env(),
            f = !1,
            p = n.env.touch,
            d = ".w-dropdown",
            m = "w--open",
            v = i.triggers,
            y = 900,
            g = "focusout" + d,
            E = "keydown" + d,
            b = "mouseenter" + d,
            _ = "mousemove" + d,
            x = "mouseleave" + d,
            T = (p ? "click" : "mouseup") + d,
            S = "w-close" + d,
            I = "setting" + d,
            A = t(document);

        function P() { r = u && n.env("design"), (l = A.find(d)).each(w) }

        function w(e, i) { var l = t(i),
                c = t.data(i, d);
            c || (c = t.data(i, d, { open: !1, el: l, config: {}, selectedIdx: -1 })), c.toggle = c.el.children(".w-dropdown-toggle"), c.list = c.el.children(".w-dropdown-list"), c.links = c.list.find("a:not(.w-dropdown .w-dropdown a)"), c.complete = function(t) { return function() { t.list.removeClass(m), t.toggle.removeClass(m), t.manageZ && t.el.css("z-index", "") } }(c), c.mouseLeave = function(t) { return function() { t.hovering = !1, t.links.is(":focus") || O(t) } }(c), c.mouseUpOutside = function(e) { e.mouseUpOutside && A.off(T, e.mouseUpOutside); return h(function(r) { if (e.open) { var i = t(r.target); if (!i.closest(".w-dropdown-toggle").length) { var a = -1 === t.inArray(e.el[0], i.parents(d)),
                                o = n.env("editor"); if (a) { if (o) { var s = 1 === i.parents().length && 1 === i.parents("svg").length,
                                        l = i.parents(".w-editor-bem-EditorHoverControls").length; if (s || l) return }
                                O(e) } } } }) }(c), c.mouseMoveOutside = function(e) { return h(function(r) { if (e.open) { var n = t(r.target),
                            i = -1 === t.inArray(e.el[0], n.parents(d)); if (i) { var a = n.parents(".w-editor-bem-EditorHoverControls").length,
                                o = n.parents(".w-editor-bem-RTToolbar").length,
                                s = t(".w-editor-bem-EditorOverlay"),
                                l = s.find(".w-editor-edit-outline").length || s.find(".w-editor-bem-RTToolbar").length; if (a || o || l) return;
                            e.hovering = !1, O(e) } } }) }(c), C(c); var f = c.toggle.attr("id"),
                p = c.list.attr("id");
            f || (f = "w-dropdown-toggle-" + e), p || (p = "w-dropdown-list-" + e), c.toggle.attr("id", f), c.toggle.attr("aria-controls", p), c.toggle.attr("aria-haspopup", "menu"), c.toggle.attr("aria-expanded", "false"), c.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), "BUTTON" !== c.toggle.prop("tagName") && (c.toggle.attr("role", "button"), c.toggle.attr("tabindex") || c.toggle.attr("tabindex", "0")), c.list.attr("id", p), c.list.attr("aria-labelledby", f), c.links.each(function(t, e) { e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"), s.test(e.hash) && e.addEventListener("click", O.bind(null, c)) }), c.el.off(d), c.toggle.off(d), c.nav && c.nav.off(d); var v = D(c, o);
            r && c.el.on(I, function(t) { return function(e, r) { r = r || {}, C(t), !0 === r.open && M(t), !1 === r.open && O(t, { immediate: !0 }) } }(c)), r || (u && (c.hovering = !1, O(c)), c.config.hover && c.toggle.on(b, function(t) { return function() { t.hovering = !0, M(t) } }(c)), c.el.on(S, v), c.el.on(E, function(t) { return function(e) { if (!r && t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case a.HOME:
                            if (!t.open) return; return t.selectedIdx = 0, R(t), e.preventDefault();
                        case a.END:
                            if (!t.open) return; return t.selectedIdx = t.links.length - 1, R(t), e.preventDefault();
                        case a.ESCAPE:
                            return O(t), t.toggle.focus(), e.stopPropagation();
                        case a.ARROW_RIGHT:
                        case a.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), R(t), e.preventDefault();
                        case a.ARROW_LEFT:
                        case a.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), R(t), e.preventDefault() } } }(c)), c.el.on(g, function(t) { return h(function(e) { var r = e.relatedTarget,
                        n = e.target,
                        i = t.el[0],
                        a = i.contains(r) || i.contains(n); return a || O(t), e.stopPropagation() }) }(c)), c.toggle.on(T, v), c.toggle.on(E, function(t) { var e = D(t, o); return function(n) { if (!r) { if (!t.open) switch (n.keyCode) {
                            case a.ARROW_UP:
                            case a.ARROW_DOWN:
                                return n.stopPropagation() }
                        switch (n.keyCode) {
                            case a.SPACE:
                            case a.ENTER:
                                return e(), n.stopPropagation(), n.preventDefault() } } } }(c)), c.nav = c.el.closest(".w-nav"), c.nav.on(S, v)) }

        function C(t) { var e = Number(t.el.css("z-index"));
            t.manageZ = e === y || e === y + 1, t.config = { hover: "true" === t.el.attr("data-hover") && !p, delay: t.el.attr("data-delay") } }

        function D(t, e) { return h(function(r) { if (t.open || r && "w-close" === r.type) return O(t, { forceClose: e });
                M(t) }) }

        function M(e) { if (!e.open) {! function(e) { var r = e.el[0];
                    l.each(function(e, n) { var i = t(n);
                        i.is(r) || i.has(r).length || i.triggerHandler(S) }) }(e), e.open = !0, e.list.addClass(m), e.toggle.addClass(m), e.toggle.attr("aria-expanded", "true"), v.intro(0, e.el[0]), n.redraw.up(), e.manageZ && e.el.css("z-index", y + 1); var i = n.env("editor");
                r || A.on(T, e.mouseUpOutside), e.hovering && !i && e.el.on(x, e.mouseLeave), e.hovering && i && A.on(_, e.mouseMoveOutside), window.clearTimeout(e.delayId) } }

        function O(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = e.immediate,
                n = e.forceClose; if (t.open && (!t.config.hover || !t.hovering || n)) { t.toggle.attr("aria-expanded", "false"), t.open = !1; var i = t.config; if (v.outro(0, t.el[0]), A.off(T, t.mouseUpOutside), A.off(_, t.mouseMoveOutside), t.el.off(x, t.mouseLeave), window.clearTimeout(t.delayId), !i.delay || r) return t.complete();
                t.delayId = window.setTimeout(t.complete, i.delay) } }

        function R(t) { t.links[t.selectedIdx] && t.links[t.selectedIdx].focus() } return c.ready = P, c.design = function() { f && A.find(d).each(function(e, r) { t(r).triggerHandler(S) }), f = !1, P() }, c.preview = function() { f = !0, P() }, c }) }, function(t, e, r) { "use strict"; var n = r(13),
        i = r(117),
        a = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 };
    n.define("navbar", t.exports = function(t, e) { var r, o, s, l, h = {},
            c = t.tram,
            u = t(window),
            f = t(document),
            p = e.debounce,
            d = n.env(),
            m = '<div class="w-nav-overlay" data-wf-ignore />',
            v = ".w-nav",
            y = "w--open",
            g = "w--nav-dropdown-open",
            E = "w--nav-dropdown-toggle-open",
            b = "w--nav-dropdown-list-open",
            _ = "w--nav-link-open",
            x = i.triggers,
            T = t();

        function S() { n.resize.off(I) }

        function I() { o.each(F) }

        function A(r, n) { var i = t(n),
                o = t.data(n, v);
            o || (o = t.data(n, v, { open: !1, el: i, config: {}, selectedIdx: -1 })), o.menu = i.find(".w-nav-menu"), o.links = o.menu.find(".w-nav-link"), o.dropdowns = o.menu.find(".w-dropdown"), o.dropdownToggle = o.menu.find(".w-dropdown-toggle"), o.dropdownList = o.menu.find(".w-dropdown-list"), o.button = i.find(".w-nav-button"), o.container = i.find(".w-container"), o.overlayContainerId = "w-nav-overlay-" + r, o.outside = function(e) { e.outside && f.off("click" + v, e.outside); return function(r) { var n = t(r.target);
                    l && n.closest(".w-editor-bem-EditorOverlay").length || k(e, n) } }(o); var h = i.find(".w-nav-brand");
            h && "/" === h.attr("href") && null == h.attr("aria-label") && h.attr("aria-label", "home"), o.button.attr("style", "-webkit-user-select: text;"), null == o.button.attr("aria-label") && o.button.attr("aria-label", "menu"), o.button.attr("role", "button"), o.button.attr("tabindex", "0"), o.button.attr("aria-controls", o.overlayContainerId), o.button.attr("aria-haspopup", "menu"), o.button.attr("aria-expanded", "false"), o.el.off(v), o.button.off(v), o.menu.off(v), C(o), s ? (w(o), o.el.on("setting" + v, function(t) { return function(r, n) { n = n || {}; var i = u.width();
                    C(t), !0 === n.open && B(t, !0), !1 === n.open && j(t, !0), t.open && e.defer(function() { i !== u.width() && M(t) }) } }(o))) : (! function(e) { if (e.overlay) return;
                e.overlay = t(m).appendTo(e.el), e.overlay.attr("id", e.overlayContainerId), e.parent = e.menu.parent(), j(e, !0) }(o), o.button.on("click" + v, O(o)), o.menu.on("click" + v, "a", R(o)), o.button.on("keydown" + v, function(t) { return function(e) { switch (e.keyCode) {
                        case a.SPACE:
                        case a.ENTER:
                            return O(t)(), e.preventDefault(), e.stopPropagation();
                        case a.ESCAPE:
                            return j(t), e.preventDefault(), e.stopPropagation();
                        case a.ARROW_RIGHT:
                        case a.ARROW_DOWN:
                        case a.HOME:
                        case a.END:
                            return t.open ? (e.keyCode === a.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, D(t), e.preventDefault(), e.stopPropagation()) : (e.preventDefault(), e.stopPropagation()) } } }(o)), o.el.on("keydown" + v, function(t) { return function(e) { if (t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case a.HOME:
                        case a.END:
                            return e.keyCode === a.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, D(t), e.preventDefault(), e.stopPropagation();
                        case a.ESCAPE:
                            return j(t), t.button.focus(), e.preventDefault(), e.stopPropagation();
                        case a.ARROW_LEFT:
                        case a.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), D(t), e.preventDefault(), e.stopPropagation();
                        case a.ARROW_RIGHT:
                        case a.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), D(t), e.preventDefault(), e.stopPropagation() } } }(o))), F(r, n) }

        function P(e, r) { var n = t.data(r, v);
            n && (w(n), t.removeData(r, v)) }

        function w(t) { t.overlay && (j(t, !0), t.overlay.remove(), t.overlay = null) }

        function C(t) { var r = {},
                n = t.config || {},
                i = r.animation = t.el.attr("data-animation") || "default";
            r.animOver = /^over/.test(i), r.animDirect = /left$/.test(i) ? -1 : 1, n.animation !== i && t.open && e.defer(M, t), r.easing = t.el.attr("data-easing") || "ease", r.easing2 = t.el.attr("data-easing2") || "ease"; var a = t.el.attr("data-duration");
            r.duration = null != a ? Number(a) : 400, r.docHeight = t.el.attr("data-doc-height"), t.config = r }

        function D(t) { if (t.links[t.selectedIdx]) { var e = t.links[t.selectedIdx];
                e.focus(), R(e) } }

        function M(t) { t.open && (j(t, !0), B(t, !0)) }

        function O(t) { return p(function() { t.open ? j(t) : B(t) }) }

        function R(e) { return function(r) { var i = t(this).attr("href");
                n.validClick(r.currentTarget) ? i && 0 === i.indexOf("#") && e.open && j(e) : r.preventDefault() } }
        h.ready = h.design = h.preview = function() { if (s = d && n.env("design"), l = n.env("editor"), r = t(document.body), !(o = f.find(v)).length) return;
            o.each(A), S(), n.resize.on(I) }, h.destroy = function() { T = t(), S(), o && o.length && o.each(P) }; var k = p(function(t, e) { if (t.open) { var r = e.closest(".w-nav-menu");
                t.menu.is(r) || j(t) } });

        function F(e, r) { var n = t.data(r, v),
                i = n.collapsed = "none" !== n.button.css("display"); if (!n.open || i || s || j(n, !0), n.container.length) { var a = function(e) { var r = e.container.css(L); "none" === r && (r = ""); return function(e, n) {
                        (n = t(n)).css(L, ""), "none" === n.css(L) && n.css(L, r) } }(n);
                n.links.each(a), n.dropdowns.each(a) }
            n.open && G(n) } var L = "max-width";

        function N(t, e) { e.setAttribute("data-nav-menu-open", "") }

        function V(t, e) { e.removeAttribute("data-nav-menu-open") }

        function B(t, e) { if (!t.open) { t.open = !0, t.menu.each(N), t.links.addClass(_), t.dropdowns.addClass(g), t.dropdownToggle.addClass(E), t.dropdownList.addClass(b), t.button.addClass(y); var r = t.config;
                ("none" === r.animation || !c.support.transform || r.duration <= 0) && (e = !0); var i = G(t),
                    a = t.menu.outerHeight(!0),
                    o = t.menu.outerWidth(!0),
                    l = t.el.height(),
                    h = t.el[0]; if (F(0, h), x.intro(0, h), n.redraw.up(), s || f.on("click" + v, t.outside), e) d();
                else { var u = "transform " + r.duration + "ms " + r.easing; if (t.overlay && (T = t.menu.prev(), t.overlay.show().append(t.menu)), r.animOver) return c(t.menu).add(u).set({ x: r.animDirect * o, height: i }).start({ x: 0 }).then(d), void(t.overlay && t.overlay.width(o)); var p = l + a;
                    c(t.menu).add(u).set({ y: -p }).start({ y: 0 }).then(d) } }

            function d() { t.button.attr("aria-expanded", "true") } }

        function G(t) { var e = t.config,
                n = e.docHeight ? f.height() : r.height(); return e.animOver ? t.menu.height(n) : "fixed" !== t.el.css("position") && (n -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(n), n }

        function j(t, e) { if (t.open) { t.open = !1, t.button.removeClass(y); var r = t.config; if (("none" === r.animation || !c.support.transform || r.duration <= 0) && (e = !0), x.outro(0, t.el[0]), f.off("click" + v, t.outside), e) return c(t.menu).stop(), void l(); var n = "transform " + r.duration + "ms " + r.easing2,
                    i = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    o = t.el.height(); if (r.animOver) c(t.menu).add(n).start({ x: a * r.animDirect }).then(l);
                else { var s = o + i;
                    c(t.menu).add(n).start({ y: -s }).then(l) } }

            function l() { t.menu.height(""), c(t.menu).set({ x: 0, y: 0 }), t.menu.each(V), t.links.removeClass(_), t.dropdowns.removeClass(g), t.dropdownToggle.removeClass(E), t.dropdownList.removeClass(b), t.overlay && t.overlay.children().length && (T.length ? t.menu.insertAfter(T) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close"), t.button.attr("aria-expanded", "false") } } return h }) }]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({ "events": { "e-35": { "id": "e-35", "name": "", "animationType": "preset", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-3", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium"], "target": { "id": "634563ca1ffcb15feaec5510|e904a9b6-9a8a-e3e1-bdc9-bb03a988a690", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|e904a9b6-9a8a-e3e1-bdc9-bb03a988a690", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-3-p", "smoothing": 93, "startsEntering": false, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1665443060691 }, "e-36": { "id": "e-36", "name": "", "animationType": "preset", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-6", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|e904a9b6-9a8a-e3e1-bdc9-bb03a988a690", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|e904a9b6-9a8a-e3e1-bdc9-bb03a988a690", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-6-p", "smoothing": 93, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1665443060691 }, "e-37": { "id": "e-37", "name": "", "animationType": "preset", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-8", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|f3569f6c-be24-71fa-d1bb-0f77f88ec8c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|f3569f6c-be24-71fa-d1bb-0f77f88ec8c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-8-p", "smoothing": 90, "startsEntering": true, "addStartOffset": true, "addOffsetValue": 0, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1665443060691 }, "e-38": { "id": "e-38", "name": "", "animationType": "preset", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-9", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|f3569f6c-be24-71fa-d1bb-0f77f88ec8c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|f3569f6c-be24-71fa-d1bb-0f77f88ec8c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-9-p", "smoothing": 91, "startsEntering": true, "addStartOffset": true, "addOffsetValue": 94, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1665443060691 }, "e-39": { "id": "e-39", "name": "", "animationType": "preset", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-10", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium"], "target": { "id": "634563ca1ffcb15feaec5510|f3569f6c-be24-71fa-d1bb-0f77f88ec8c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|f3569f6c-be24-71fa-d1bb-0f77f88ec8c2", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-10-p", "smoothing": 92, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 0, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1665443060691 }, "e-40": { "id": "e-40", "name": "", "animationType": "preset", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-11", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium"], "target": { "id": "634563ca1ffcb15feaec5510|60e75153-f613-ff1c-560c-e7af38ef4fe1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|60e75153-f613-ff1c-560c-e7af38ef4fe1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-11-p", "smoothing": 92, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1665443060691 }, "e-41": { "id": "e-41", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-13", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-53" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|05d51da5-b13f-cad6-0450-4e2faa598b7f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|05d51da5-b13f-cad6-0450-4e2faa598b7f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 20, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1665443060691 }, "e-42": { "id": "e-42", "name": "", "animationType": "preset", "eventTypeId": "SCROLL_OUT_OF_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-14", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-75" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|05d51da5-b13f-cad6-0450-4e2faa598b7f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|05d51da5-b13f-cad6-0450-4e2faa598b7f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1665443060691 }, "e-43": { "id": "e-43", "name": "", "animationType": "preset", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-19", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-44" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1665443060691 }, "e-46": { "id": "e-46", "name": "", "animationType": "preset", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-17", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["main", "medium"], "target": { "id": "634563ca1ffcb15feaec5510|6181efb1-c9c9-173b-0194-a7de19b41421", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|6181efb1-c9c9-173b-0194-a7de19b41421", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-17-p", "smoothing": 91, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1665443060691 }, "e-47": { "id": "e-47", "name": "", "animationType": "preset", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-18", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|6181efb1-c9c9-173b-0194-a7de19b41421", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|6181efb1-c9c9-173b-0194-a7de19b41421", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-18-p", "smoothing": 91, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1665443060691 }, "e-48": { "id": "e-48", "name": "", "animationType": "custom", "eventTypeId": "SCROLLING_IN_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_CONTINUOUS_ACTION", "config": { "actionListId": "a-16", "affectedElements": {}, "duration": 0 } }, "mediaQueries": ["small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|60e75153-f613-ff1c-560c-e7af38ef4fe1", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|60e75153-f613-ff1c-560c-e7af38ef4fe1", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": [{ "continuousParameterGroupId": "a-16-p", "smoothing": 91, "startsEntering": true, "addStartOffset": false, "addOffsetValue": 50, "startsExiting": false, "addEndOffset": false, "endOffsetValue": 50 }], "createdOn": 1665498396672 }, "e-49": { "id": "e-49", "animationType": "custom", "eventTypeId": "TAB_ACTIVE", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-20", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-79" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".tab-link", "originalId": "634563ca1ffcb15feaec5510|4b17d2fc-1ada-ddb1-6c99-1be22533add9", "appliesTo": "CLASS" }, "targets": [{ "selector": ".tab-link", "originalId": "634563ca1ffcb15feaec5510|4b17d2fc-1ada-ddb1-6c99-1be22533add9", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1576338323537 }, "e-50": { "id": "e-50", "animationType": "custom", "eventTypeId": "TAB_INACTIVE", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-21", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-49" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".tab-link", "originalId": "634563ca1ffcb15feaec5510|4b17d2fc-1ada-ddb1-6c99-1be22533add9", "appliesTo": "CLASS" }, "targets": [{ "selector": ".tab-link", "originalId": "634563ca1ffcb15feaec5510|4b17d2fc-1ada-ddb1-6c99-1be22533add9", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1576338323542 }, "e-51": { "id": "e-51", "name": "", "animationType": "custom", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-22", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-52" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1665519338314 }, "e-63": { "id": "e-63", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-28", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-95" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|92397efe-57ee-b679-a923-5a202b72962f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|92397efe-57ee-b679-a923-5a202b72962f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1665538770752 }, "e-65": { "id": "e-65", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-29", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-66" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|6181efb1-c9c9-173b-0194-a7de19b41421", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|6181efb1-c9c9-173b-0194-a7de19b41421", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 11, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1665539056188 }, "e-67": { "id": "e-67", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-30", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-68" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|4b17d2fc-1ada-ddb1-6c99-1be22533adcf", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|4b17d2fc-1ada-ddb1-6c99-1be22533adcf", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 11, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1665539244346 }, "e-69": { "id": "e-69", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-46", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-78" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".dropdown-link-wrap", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d79", "appliesTo": "CLASS" }, "targets": [{ "selector": ".dropdown-link-wrap", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d79", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625161066871 }, "e-70": { "id": "e-70", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-37", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-82" } }, "mediaQueries": ["medium", "small", "tiny"], "target": { "selector": ".dropdown-back-btn", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d92", "appliesTo": "CLASS" }, "targets": [{ "selector": ".dropdown-back-btn", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d92", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625255247825 }, "e-72": { "id": "e-72", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-36", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-93" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".button-2", "originalId": "61845998bbb27a185f0f35e7|941d8f07-0c33-004e-0503-2928d003f641", "appliesTo": "CLASS" }, "targets": [{ "selector": ".button-2", "originalId": "61845998bbb27a185f0f35e7|941d8f07-0c33-004e-0503-2928d003f641", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625087388347 }, "e-74": { "id": "e-74", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-38", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-76" } }, "mediaQueries": ["medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d69", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d69", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625176081152 }, "e-76": { "id": "e-76", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_SECOND_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-45", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-74" } }, "mediaQueries": ["medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d69", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d69", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625176081154 }, "e-77": { "id": "e-77", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-41", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-73" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7dce", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7dce", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625114481696 }, "e-78": { "id": "e-78", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OVER", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-32", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-69" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".dropdown-link-wrap", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d79", "appliesTo": "CLASS" }, "targets": [{ "selector": ".dropdown-link-wrap", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d79", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625161066870 }, "e-80": { "id": "e-80", "name": "", "animationType": "custom", "eventTypeId": "DROPDOWN_CLOSE", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-40", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-95" } }, "mediaQueries": ["main"], "target": { "selector": ".dropdown", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d6e", "appliesTo": "CLASS" }, "targets": [{ "selector": ".dropdown", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d6e", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625286402473 }, "e-84": { "id": "e-84", "name": "", "animationType": "custom", "eventTypeId": "DROPDOWN_CLOSE", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-37", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-86" } }, "mediaQueries": ["medium", "small", "tiny"], "target": { "selector": ".dropdown", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d97", "appliesTo": "CLASS" }, "targets": [{ "selector": ".dropdown", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d97", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625265419818 }, "e-86": { "id": "e-86", "name": "", "animationType": "custom", "eventTypeId": "DROPDOWN_OPEN", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-48", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-84" } }, "mediaQueries": ["medium", "small", "tiny"], "target": { "selector": ".dropdown", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d97", "appliesTo": "CLASS" }, "targets": [{ "selector": ".dropdown", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d97", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625265419817 }, "e-91": { "id": "e-91", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_CLICK", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-47", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-83" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7dca", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7dca", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625113782559 }, "e-93": { "id": "e-93", "name": "", "animationType": "custom", "eventTypeId": "MOUSE_OUT", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-33", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-72" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "selector": ".button-2", "originalId": "61845998bbb27a185f0f35e7|941d8f07-0c33-004e-0503-2928d003f641", "appliesTo": "CLASS" }, "targets": [{ "selector": ".button-2", "originalId": "61845998bbb27a185f0f35e7|941d8f07-0c33-004e-0503-2928d003f641", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625087388347 }, "e-95": { "id": "e-95", "name": "", "animationType": "custom", "eventTypeId": "DROPDOWN_OPEN", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-34", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-80" } }, "mediaQueries": ["main"], "target": { "selector": ".dropdown", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d6e", "appliesTo": "CLASS" }, "targets": [{ "selector": ".dropdown", "originalId": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d6e", "appliesTo": "CLASS" }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1625286402471 }, "e-97": { "id": "e-97", "name": "", "animationType": "custom", "eventTypeId": "PAGE_SCROLL_UP", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-49", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-98" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1665584103079 }, "e-98": { "id": "e-98", "name": "", "animationType": "custom", "eventTypeId": "PAGE_SCROLL_DOWN", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-50", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-97" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1665584103081 }, "e-99": { "id": "e-99", "name": "", "animationType": "custom", "eventTypeId": "PAGE_START", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-52", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-100" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510", "appliesTo": "PAGE", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510", "appliesTo": "PAGE", "styleBlockIds": [] }], "config": { "loop": true, "playInReverse": false, "scrollOffsetValue": null, "scrollOffsetUnit": null, "delay": null, "direction": null, "effectIn": null }, "createdOn": 1665585134869 }, "e-101": { "id": "e-101", "name": "", "animationType": "custom", "eventTypeId": "SCROLL_INTO_VIEW", "action": { "id": "", "actionTypeId": "GENERAL_START_ACTION", "config": { "delay": 0, "easing": "", "duration": 0, "actionListId": "a-53", "affectedElements": {}, "playInReverse": false, "autoStopEventId": "e-102" } }, "mediaQueries": ["main", "medium", "small", "tiny"], "target": { "id": "634563ca1ffcb15feaec5510|05d51da5-b13f-cad6-0450-4e2faa598b7f", "appliesTo": "ELEMENT", "styleBlockIds": [] }, "targets": [{ "id": "634563ca1ffcb15feaec5510|05d51da5-b13f-cad6-0450-4e2faa598b7f", "appliesTo": "ELEMENT", "styleBlockIds": [] }], "config": { "loop": false, "playInReverse": false, "scrollOffsetValue": 0, "scrollOffsetUnit": "%", "delay": null, "direction": null, "effectIn": null }, "createdOn": 1665590212432 } }, "actionLists": { "a-3": { "id": "a-3", "title": "Horizontal Scroll - Desktop/Laptop", "continuousParameterGroups": [{ "id": "a-3-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-3-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".track", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534a"] }, "xValue": 0, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-3", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel1", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f5346"] }, "globalSwatchId": "", "rValue": 203, "bValue": 46, "gValue": 68, "aValue": 1 } }, { "id": "a-3-n-6", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel2", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f5347"] }, "globalSwatchId": "", "rValue": 203, "bValue": 46, "gValue": 68, "aValue": 1 } }, { "id": "a-3-n-10", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel3", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534b"] }, "globalSwatchId": "", "rValue": 203, "bValue": 46, "gValue": 68, "aValue": 1 } }, { "id": "a-3-n-12", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--1", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "49b80c01-84ee-07ce-2ddd-a93dec5c45a1"] }, "xValue": 0, "yValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-3-n-15", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--1", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "49b80c01-84ee-07ce-2ddd-a93dec5c45a1"] }, "xValue": 0, "yValue": 0, "zValue": 0, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }] }, { "keyframe": 32, "actionItems": [{ "id": "a-3-n-16", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--2", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "b9e9d33d-840b-7f8c-bcc4-65bb5a0292dc"] }, "xValue": 0, "yValue": 0, "zValue": 0, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }, { "id": "a-3-n-17", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--2", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "b9e9d33d-840b-7f8c-bcc4-65bb5a0292dc"] }, "xValue": 0, "yValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 38, "actionItems": [{ "id": "a-3-n-13", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--1", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "49b80c01-84ee-07ce-2ddd-a93dec5c45a1"] }, "xValue": -56.25, "yValue": -46.875, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-3-n-14", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--1", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "49b80c01-84ee-07ce-2ddd-a93dec5c45a1"] }, "xValue": 0, "yValue": 0, "zValue": -90, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }] }, { "keyframe": 44, "actionItems": [{ "id": "a-3-n-11", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel3", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534b"] }, "globalSwatchId": "", "rValue": 28, "bValue": 81, "gValue": 127, "aValue": 1 } }, { "id": "a-3-n-5", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel1", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f5346"] }, "globalSwatchId": "", "rValue": 28, "bValue": 81, "gValue": 127, "aValue": 1 } }, { "id": "a-3-n-4", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel2", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f5347"] }, "globalSwatchId": "", "rValue": 28, "bValue": 81, "gValue": 127, "aValue": 1 } }] }, { "keyframe": 84, "actionItems": [{ "id": "a-3-n-20", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--3", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "1dd59ae3-7697-af44-0bb4-7a1298e914e8"] }, "xValue": 0, "yValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-3-n-21", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--3", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "1dd59ae3-7697-af44-0bb4-7a1298e914e8"] }, "xValue": 0, "yValue": 0, "zValue": 0, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }] }, { "keyframe": 90, "actionItems": [{ "id": "a-3-n-9", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel2", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f5347"] }, "globalSwatchId": "", "rValue": 212, "bValue": 169, "gValue": 111, "aValue": 1 } }, { "id": "a-3-n-7", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel3", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534b"] }, "globalSwatchId": "", "rValue": 212, "bValue": 169, "gValue": 111, "aValue": 1 } }, { "id": "a-3-n-18", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--2", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "b9e9d33d-840b-7f8c-bcc4-65bb5a0292dc"] }, "xValue": 0, "yValue": 0, "zValue": -90, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }, { "id": "a-3-n-19", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--2", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "b9e9d33d-840b-7f8c-bcc4-65bb5a0292dc"] }, "xValue": -56.25, "yValue": -46.875, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-3-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".track", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534a"] }, "xValue": -100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-3-n-8", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel3", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534b"] }, "globalSwatchId": "", "rValue": 212, "bValue": 169, "gValue": 111, "aValue": 1 } }, { "id": "a-3-n-23", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--3", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "1dd59ae3-7697-af44-0bb4-7a1298e914e8"] }, "xValue": -56.25, "yValue": -46.875, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-3-n-22", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--3", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "1dd59ae3-7697-af44-0bb4-7a1298e914e8"] }, "xValue": 0, "yValue": 0, "zValue": -90, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }] }] }], "createdOn": 1660214782465 }, "a-6": { "id": "a-6", "title": "Horizontal Scroll - Mobile", "continuousParameterGroups": [{ "id": "a-6-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 24, "actionItems": [{ "id": "a-6-n-4", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel3", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534b"] }, "globalSwatchId": "", "rValue": 203, "bValue": 46, "gValue": 68, "aValue": 1 } }, { "id": "a-6-n-3", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel2", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f5347"] }, "globalSwatchId": "", "rValue": 203, "bValue": 46, "gValue": 68, "aValue": 1 } }, { "id": "a-6-n-2", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel1", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f5346"] }, "globalSwatchId": "", "rValue": 203, "bValue": 46, "gValue": 68, "aValue": 1 } }] }, { "keyframe": 25, "actionItems": [{ "id": "a-6-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".track", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534a"] }, "xValue": 0, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 35, "actionItems": [{ "id": "a-6-n-6", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--1", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "49b80c01-84ee-07ce-2ddd-a93dec5c45a1"] }, "xValue": 0, "yValue": 0, "zValue": 0, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }, { "id": "a-6-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--1", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "49b80c01-84ee-07ce-2ddd-a93dec5c45a1"] }, "xValue": 0, "yValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 58, "actionItems": [{ "id": "a-6-n-8", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--2", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "b9e9d33d-840b-7f8c-bcc4-65bb5a0292dc"] }, "xValue": 0, "yValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-6-n-7", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--2", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "b9e9d33d-840b-7f8c-bcc4-65bb5a0292dc"] }, "xValue": 0, "yValue": 0, "zValue": 0, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }] }, { "keyframe": 59, "actionItems": [{ "id": "a-6-n-10", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--1", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "49b80c01-84ee-07ce-2ddd-a93dec5c45a1"] }, "xValue": 0, "yValue": 0, "zValue": -90, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }, { "id": "a-6-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--1", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "49b80c01-84ee-07ce-2ddd-a93dec5c45a1"] }, "xValue": -56.25, "yValue": -46.875, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 78, "actionItems": [{ "id": "a-6-n-19", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--2", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "b9e9d33d-840b-7f8c-bcc4-65bb5a0292dc"] }, "xValue": -56.25, "yValue": -46.875, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-6-n-18", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--2", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "b9e9d33d-840b-7f8c-bcc4-65bb5a0292dc"] }, "xValue": 0, "yValue": 0, "zValue": -90, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }] }, { "keyframe": 84, "actionItems": [{ "id": "a-6-n-14", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--3", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "1dd59ae3-7697-af44-0bb4-7a1298e914e8"] }, "xValue": 0, "yValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-6-n-15", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--3", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "1dd59ae3-7697-af44-0bb4-7a1298e914e8"] }, "xValue": 0, "yValue": 0, "zValue": 0, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }, { "id": "a-6-n-11", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel3", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534b"] }, "globalSwatchId": "", "rValue": 28, "bValue": 81, "gValue": 127, "aValue": 1 } }, { "id": "a-6-n-12", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel1", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f5346"] }, "globalSwatchId": "", "rValue": 28, "bValue": 81, "gValue": 127, "aValue": 1 } }, { "id": "a-6-n-13", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel2", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f5347"] }, "globalSwatchId": "", "rValue": 28, "bValue": 81, "gValue": 127, "aValue": 1 } }] }, { "keyframe": 90, "actionItems": [{ "id": "a-6-n-16", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel2", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f5347"] }, "globalSwatchId": "", "rValue": 212, "bValue": 169, "gValue": 111, "aValue": 1 } }, { "id": "a-6-n-17", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel3", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534b"] }, "globalSwatchId": "", "rValue": 212, "bValue": 169, "gValue": 111, "aValue": 1 } }] }, { "keyframe": 100, "actionItems": [{ "id": "a-6-n-20", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".track", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534a"] }, "xValue": -100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-6-n-21", "actionTypeId": "STYLE_BACKGROUND_COLOR", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".panel3", "selectorGuids": ["30205ccc-3788-09c8-ba5d-51520a5f534b"] }, "globalSwatchId": "", "rValue": 212, "bValue": 169, "gValue": 111, "aValue": 1 } }, { "id": "a-6-n-22", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--3", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "1dd59ae3-7697-af44-0bb4-7a1298e914e8"] }, "xValue": -56.25, "yValue": -46.875, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-6-n-23", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".product-image-wrapper.is--3", "selectorGuids": ["cfba6542-b2b7-a689-bfed-66f0a9ce241c", "1dd59ae3-7697-af44-0bb4-7a1298e914e8"] }, "xValue": 0, "yValue": 0, "zValue": -90, "xUnit": "deg", "yUnit": "deg", "zUnit": "deg" } }] }] }], "createdOn": 1660214782465 }, "a-8": { "id": "a-8", "title": "Line Show and Change Opacity - Mobile", "continuousParameterGroups": [{ "id": "a-8-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-8-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".line._1", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c43", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c49"] }, "heightValue": 0, "widthUnit": "PX", "heightUnit": "%", "locked": false } }, { "id": "a-8-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0.25, "unit": "" } }, { "id": "a-8-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._2", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c48"] }, "value": 0.25, "unit": "" } }, { "id": "a-8-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0.25, "unit": "" } }, { "id": "a-8-n-5", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._3", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c4b"] }, "value": 0.25, "unit": "" } }] }, { "keyframe": 29, "actionItems": [{ "id": "a-8-n-6", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0.25, "unit": "" } }, { "id": "a-8-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._2", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c48"] }, "value": 0.25, "unit": "" } }] }, { "keyframe": 30, "actionItems": [{ "id": "a-8-n-8", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".line._1", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c43", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c49"] }, "heightValue": 100, "widthUnit": "PX", "heightUnit": "%", "locked": false } }, { "id": "a-8-n-9", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 1, "unit": "" } }, { "id": "a-8-n-10", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._2", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c48"] }, "value": 1, "unit": "" } }] }, { "keyframe": 35, "actionItems": [{ "id": "a-8-n-11", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".line._2", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c43", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c4a"] }, "heightValue": 0, "widthUnit": "PX", "heightUnit": "%", "locked": false } }] }, { "keyframe": 64, "actionItems": [{ "id": "a-8-n-12", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0.25, "unit": "" } }, { "id": "a-8-n-13", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._3", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c4b"] }, "value": 0.25, "unit": "" } }] }, { "keyframe": 65, "actionItems": [{ "id": "a-8-n-14", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".line._2", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c43", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c4a"] }, "heightValue": 100, "widthUnit": "PX", "heightUnit": "%", "locked": false } }, { "id": "a-8-n-15", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 1, "unit": "" } }, { "id": "a-8-n-16", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._3", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c4b"] }, "value": 1, "unit": "" } }] }] }], "createdOn": 1592450726819 }, "a-9": { "id": "a-9", "title": "Change Image While Scroll", "continuousParameterGroups": [{ "id": "a-9-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-9-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 0, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 1, "unit": "" } }, { "id": "a-9-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }, { "id": "a-9-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-6", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }] }, { "keyframe": 25, "actionItems": [{ "id": "a-9-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 0, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-8", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 1, "unit": "" } }, { "id": "a-9-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-10", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }, { "id": "a-9-n-11", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-12", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }] }, { "keyframe": 30, "actionItems": [{ "id": "a-9-n-13", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-14", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }, { "id": "a-9-n-15", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 0, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-16", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 1, "unit": "" } }, { "id": "a-9-n-17", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-18", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }] }, { "keyframe": 60, "actionItems": [{ "id": "a-9-n-19", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-20", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }, { "id": "a-9-n-21", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 0, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-22", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 1, "unit": "" } }, { "id": "a-9-n-23", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-24", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }] }, { "keyframe": 65, "actionItems": [{ "id": "a-9-n-25", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-26", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }, { "id": "a-9-n-27", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 100, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-28", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }, { "id": "a-9-n-29", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 0, "xUnit": "%", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-9-n-30", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 1, "unit": "" } }] }] }], "createdOn": 1592453481440 }, "a-10": { "id": "a-10", "title": "Line Show and Change Opacity - Desktop", "continuousParameterGroups": [{ "id": "a-10-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-10-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".line._1", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c43", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c49"] }, "heightValue": 0, "widthUnit": "PX", "heightUnit": "%", "locked": false } }, { "id": "a-10-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0.25, "unit": "" } }, { "id": "a-10-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._2", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c48"] }, "value": 0.25, "unit": "" } }, { "id": "a-10-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0.25, "unit": "" } }, { "id": "a-10-n-5", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._3", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c4b"] }, "value": 0.25, "unit": "" } }] }, { "keyframe": 29, "actionItems": [{ "id": "a-10-n-6", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0.25, "unit": "" } }, { "id": "a-10-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._2", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c48"] }, "value": 0.25, "unit": "" } }] }, { "keyframe": 30, "actionItems": [{ "id": "a-10-n-8", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".line._1", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c43", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c49"] }, "heightValue": 100, "widthUnit": "PX", "heightUnit": "%", "locked": false } }, { "id": "a-10-n-9", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 1, "unit": "" } }, { "id": "a-10-n-10", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._2", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c48"] }, "value": 1, "unit": "" } }] }, { "keyframe": 35, "actionItems": [{ "id": "a-10-n-11", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".line._2", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c43", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c4a"] }, "heightValue": 0, "widthUnit": "PX", "heightUnit": "%", "locked": false } }] }, { "keyframe": 64, "actionItems": [{ "id": "a-10-n-12", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0.25, "unit": "" } }, { "id": "a-10-n-13", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._3", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c4b"] }, "value": 0.25, "unit": "" } }] }, { "keyframe": 65, "actionItems": [{ "id": "a-10-n-14", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".line._2", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c43", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c4a"] }, "heightValue": 100, "widthUnit": "PX", "heightUnit": "%", "locked": false } }, { "id": "a-10-n-15", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 1, "unit": "" } }, { "id": "a-10-n-16", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".details-text-container._3", "selectorGuids": ["c958dc91-3bc3-25a0-ce6d-bc4737bc9c3e", "c958dc91-3bc3-25a0-ce6d-bc4737bc9c4b"] }, "value": 1, "unit": "" } }] }] }], "createdOn": 1592450726819 }, "a-11": { "id": "a-11", "title": "Subscribe - Desktop", "continuousParameterGroups": [{ "id": "a-11-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-11-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-1", "selectorGuids": ["183ca8fc-c80e-33db-5b32-2d581313b03c"] }, "yValue": 7.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-11-n-3", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-1", "selectorGuids": ["183ca8fc-c80e-33db-5b32-2d581313b03c"] }, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }] }, { "keyframe": 12, "actionItems": [{ "id": "a-11-n-4", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-1", "selectorGuids": ["183ca8fc-c80e-33db-5b32-2d581313b03c"] }, "zValue": -6, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-11-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-1", "selectorGuids": ["183ca8fc-c80e-33db-5b32-2d581313b03c"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-11-n-8", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-2", "selectorGuids": ["a612d907-271a-7a34-abe7-57a78f627630"] }, "zValue": -6, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-11-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-2", "selectorGuids": ["a612d907-271a-7a34-abe7-57a78f627630"] }, "yValue": 3.5, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 16, "actionItems": [{ "id": "a-11-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-2", "selectorGuids": ["a612d907-271a-7a34-abe7-57a78f627630"] }, "yValue": 1.5, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-11-n-7", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-2", "selectorGuids": ["a612d907-271a-7a34-abe7-57a78f627630"] }, "zValue": 6, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-11-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-3", "selectorGuids": ["7ef3d5d9-48be-1da7-84b6-bdba5f1cf105"] }, "yValue": 8.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 26, "actionItems": [{ "id": "a-11-n-10", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-3", "selectorGuids": ["7ef3d5d9-48be-1da7-84b6-bdba5f1cf105"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-11-n-11", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-4", "selectorGuids": ["6850fb3c-bf1f-019c-e79d-bdc3441e1d05"] }, "yValue": 6.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-11-n-12", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-4", "selectorGuids": ["6850fb3c-bf1f-019c-e79d-bdc3441e1d05"] }, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }] }, { "keyframe": 33, "actionItems": [{ "id": "a-11-n-13", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-4", "selectorGuids": ["6850fb3c-bf1f-019c-e79d-bdc3441e1d05"] }, "zValue": -6, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-11-n-14", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-4", "selectorGuids": ["6850fb3c-bf1f-019c-e79d-bdc3441e1d05"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-11-n-15", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-5", "selectorGuids": ["66ebf5e3-928e-d247-c691-28733f18bd1e"] }, "yValue": 8.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 40, "actionItems": [{ "id": "a-11-n-16", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-5", "selectorGuids": ["66ebf5e3-928e-d247-c691-28733f18bd1e"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-11-n-17", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-6", "selectorGuids": ["ea410e29-05ee-d154-0e1c-a50252c9c6ec"] }, "yValue": 6.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-11-n-18", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-6", "selectorGuids": ["ea410e29-05ee-d154-0e1c-a50252c9c6ec"] }, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-11-n-22", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".btn-container.is--margin-top", "selectorGuids": ["31fe89c5-0539-2684-895f-03bab0bd964f", "ffe146b7-72d8-a201-d266-dde485ba081d"] }, "yValue": 8.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 49, "actionItems": [{ "id": "a-11-n-19", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-6", "selectorGuids": ["ea410e29-05ee-d154-0e1c-a50252c9c6ec"] }, "zValue": -6, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-11-n-20", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-6", "selectorGuids": ["ea410e29-05ee-d154-0e1c-a50252c9c6ec"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-11-n-21", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".btn-container.is--margin-top", "selectorGuids": ["31fe89c5-0539-2684-895f-03bab0bd964f", "ffe146b7-72d8-a201-d266-dde485ba081d"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }] }], "createdOn": 1665331739216 }, "a-13": { "id": "a-13", "title": "Benefits In", "actionItemGroups": [{ "actionItems": [{ "id": "a-13-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--2", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "720495b0-9558-888a-bd08-27da37891ede"] }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-13-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--3", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "634e9125-c210-4cf0-54af-ccdacf808032"] }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-13-n-4", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--4", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "e548fc0b-5484-4788-8aa0-d1b937df8e31"] }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-13-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--1", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "8abae8c2-516c-0a10-26f9-5bb1942b5796"] }, "xValue": 0, "yValue": 0, "locked": true } }] }, { "actionItems": [{ "id": "a-13-n-5", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 200, "easing": "outQuad", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--2", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "720495b0-9558-888a-bd08-27da37891ede"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-13-n-6", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 500, "easing": "outQuad", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--1", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "8abae8c2-516c-0a10-26f9-5bb1942b5796"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-13-n-8", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 800, "easing": "outQuad", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--4", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "e548fc0b-5484-4788-8aa0-d1b937df8e31"] }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-13-n-7", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 1100, "easing": "outQuad", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--3", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "634e9125-c210-4cf0-54af-ccdacf808032"] }, "xValue": 1, "yValue": 1, "locked": true } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1665428183083 }, "a-14": { "id": "a-14", "title": "Benefits Out", "actionItemGroups": [{ "actionItems": [{ "id": "a-14-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--3", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "634e9125-c210-4cf0-54af-ccdacf808032"] }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-14-n-4", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--1", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "8abae8c2-516c-0a10-26f9-5bb1942b5796"] }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-14-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--4", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "e548fc0b-5484-4788-8aa0-d1b937df8e31"] }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-14-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".benefit.is--2", "selectorGuids": ["75072914-0e56-22fd-d5c5-2421c54de264", "720495b0-9558-888a-bd08-27da37891ede"] }, "xValue": 0, "yValue": 0, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1665428183083 }, "a-19": { "id": "a-19", "title": "Floating Benefits 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-19-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|f3c150e5-1110-613e-dd42-a7e5050c63e9" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-19-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|36c0c69e-90ff-700c-1b31-cf15500a4461" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-19-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|36fce48f-bd95-3149-20ca-2e718d3c6501" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-19-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|2f057dcb-4fa0-73b5-b549-1d87535f0872" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-19-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|f3c150e5-1110-613e-dd42-a7e5050c63e9" }, "yValue": 0.5, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-19-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|36c0c69e-90ff-700c-1b31-cf15500a4461" }, "yValue": -0.5, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-19-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|36fce48f-bd95-3149-20ca-2e718d3c6501" }, "yValue": -0.625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-19-n-8", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|2f057dcb-4fa0-73b5-b549-1d87535f0872" }, "yValue": 0.8125, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-19-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|f3c150e5-1110-613e-dd42-a7e5050c63e9" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-19-n-10", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|36c0c69e-90ff-700c-1b31-cf15500a4461" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-19-n-11", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|36fce48f-bd95-3149-20ca-2e718d3c6501" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-19-n-12", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|2f057dcb-4fa0-73b5-b549-1d87535f0872" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1665428684786 }, "a-17": { "id": "a-17", "title": "Story - Desktop", "continuousParameterGroups": [{ "id": "a-17-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-17-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--two", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "ed96171a-4abf-1190-1e8f-db224f21a0bc"] }, "xValue": 25.6875, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-17-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--one", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "e0128168-b4f3-24f9-b027-074865fe5800"] }, "xValue": -25.6875, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-17-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--1", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "c2089780-37c7-1eb0-a2fe-e08d49463fd8"] }, "xValue": 31.25, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-17-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--3", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "95303381-a79f-0cbd-b475-923c688b4019"] }, "xValue": -31.25, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 45, "actionItems": [{ "id": "a-17-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--one", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "e0128168-b4f3-24f9-b027-074865fe5800"] }, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-17-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--two", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "ed96171a-4abf-1190-1e8f-db224f21a0bc"] }, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 63, "actionItems": [{ "id": "a-17-n-8", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--3", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "95303381-a79f-0cbd-b475-923c688b4019"] }, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-17-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--1", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "c2089780-37c7-1eb0-a2fe-e08d49463fd8"] }, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }] }] }], "createdOn": 1665435934332 }, "a-18": { "id": "a-18", "title": "Story - Mobile", "continuousParameterGroups": [{ "id": "a-18-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-18-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--two", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "ed96171a-4abf-1190-1e8f-db224f21a0bc"] }, "xValue": 25.6875, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-18-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--one", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "e0128168-b4f3-24f9-b027-074865fe5800"] }, "xValue": -25.6875, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-18-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--1", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "c2089780-37c7-1eb0-a2fe-e08d49463fd8"] }, "xValue": 0, "yValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-18-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--3", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "95303381-a79f-0cbd-b475-923c688b4019"] }, "xValue": 0, "yValue": -84.375, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-18-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--2", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "2e8e6b2c-9d12-2b31-c0f1-9ca4523c65ab"] }, "xValue": 0, "yValue": -43.75, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 27, "actionItems": [{ "id": "a-18-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--one", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "e0128168-b4f3-24f9-b027-074865fe5800"] }, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 36, "actionItems": [{ "id": "a-18-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--two", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "ed96171a-4abf-1190-1e8f-db224f21a0bc"] }, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }] }, { "keyframe": 57, "actionItems": [{ "id": "a-18-n-10", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--2", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "2e8e6b2c-9d12-2b31-c0f1-9ca4523c65ab"] }, "xValue": 0, "yValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-18-n-8", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--1", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "c2089780-37c7-1eb0-a2fe-e08d49463fd8"] }, "xValue": 0, "yValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 74, "actionItems": [{ "id": "a-18-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-grid-block.is--3", "selectorGuids": ["292e6b46-b3c8-4f04-b988-dc1292bd430d", "95303381-a79f-0cbd-b475-923c688b4019"] }, "xValue": 0, "yValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "PX" } }] }] }], "createdOn": 1665435934332 }, "a-16": { "id": "a-16", "title": "Subscribe - Mobile", "continuousParameterGroups": [{ "id": "a-16-p", "type": "SCROLL_PROGRESS", "parameterLabel": "Scroll", "continuousActionGroups": [{ "keyframe": 0, "actionItems": [{ "id": "a-16-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-1", "selectorGuids": ["183ca8fc-c80e-33db-5b32-2d581313b03c"] }, "yValue": 7.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-16-n-2", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-1", "selectorGuids": ["183ca8fc-c80e-33db-5b32-2d581313b03c"] }, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-16-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-2", "selectorGuids": ["a612d907-271a-7a34-abe7-57a78f627630"] }, "yValue": 7.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-16-n-5", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-2", "selectorGuids": ["a612d907-271a-7a34-abe7-57a78f627630"] }, "zValue": -6, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-16-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-3", "selectorGuids": ["7ef3d5d9-48be-1da7-84b6-bdba5f1cf105"] }, "yValue": 7.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-16-n-11", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-4", "selectorGuids": ["6850fb3c-bf1f-019c-e79d-bdc3441e1d05"] }, "yValue": 7.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-16-n-12", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-4", "selectorGuids": ["6850fb3c-bf1f-019c-e79d-bdc3441e1d05"] }, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-16-n-15", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-5", "selectorGuids": ["66ebf5e3-928e-d247-c691-28733f18bd1e"] }, "yValue": 7.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-16-n-17", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-6", "selectorGuids": ["ea410e29-05ee-d154-0e1c-a50252c9c6ec"] }, "yValue": 7.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-16-n-19", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".btn-container.is--margin-top", "selectorGuids": ["31fe89c5-0539-2684-895f-03bab0bd964f", "ffe146b7-72d8-a201-d266-dde485ba081d"] }, "yValue": 7.0625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-16-n-18", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-6", "selectorGuids": ["ea410e29-05ee-d154-0e1c-a50252c9c6ec"] }, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }] }, { "keyframe": 12, "actionItems": [{ "id": "a-16-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-1", "selectorGuids": ["183ca8fc-c80e-33db-5b32-2d581313b03c"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-16-n-3", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-1", "selectorGuids": ["183ca8fc-c80e-33db-5b32-2d581313b03c"] }, "zValue": -6, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }] }, { "keyframe": 14, "actionItems": [{ "id": "a-16-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-2", "selectorGuids": ["a612d907-271a-7a34-abe7-57a78f627630"] }, "yValue": 0.75, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-16-n-8", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-2", "selectorGuids": ["a612d907-271a-7a34-abe7-57a78f627630"] }, "zValue": 6, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }] }, { "keyframe": 16, "actionItems": [{ "id": "a-16-n-10", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-3", "selectorGuids": ["7ef3d5d9-48be-1da7-84b6-bdba5f1cf105"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 18, "actionItems": [{ "id": "a-16-n-14", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-4", "selectorGuids": ["6850fb3c-bf1f-019c-e79d-bdc3441e1d05"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-16-n-13", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-4", "selectorGuids": ["6850fb3c-bf1f-019c-e79d-bdc3441e1d05"] }, "zValue": -6, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }] }, { "keyframe": 20, "actionItems": [{ "id": "a-16-n-16", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-5", "selectorGuids": ["66ebf5e3-928e-d247-c691-28733f18bd1e"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 22, "actionItems": [{ "id": "a-16-n-20", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-6", "selectorGuids": ["ea410e29-05ee-d154-0e1c-a50252c9c6ec"] }, "zValue": -6, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-16-n-21", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".subscribe-6", "selectorGuids": ["ea410e29-05ee-d154-0e1c-a50252c9c6ec"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "keyframe": 24, "actionItems": [{ "id": "a-16-n-22", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".btn-container.is--margin-top", "selectorGuids": ["31fe89c5-0539-2684-895f-03bab0bd964f", "ffe146b7-72d8-a201-d266-dde485ba081d"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }] }], "createdOn": 1665331739216 }, "a-20": { "id": "a-20", "title": "tab-active", "actionItemGroups": [{ "actionItems": [{ "id": "a-20-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }, { "id": "a-20-n-2", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "heightValue": 0, "widthUnit": "PX", "heightUnit": "rem", "locked": false } }, { "id": "a-20-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "yValue": 2.5, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-20-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }, { "id": "a-20-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "yValue": -2.5, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-20-n-6", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }, { "id": "a-20-n-7", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "zValue": 20, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }, { "id": "a-20-n-8", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "zValue": -10, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }] }, { "actionItems": [{ "id": "a-20-n-9", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "inOutCubic", "duration": 300, "target": {}, "widthUnit": "PX", "heightUnit": "AUTO", "locked": false } }, { "id": "a-20-n-10", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "inOutCubic", "duration": 300, "target": {}, "value": 1, "unit": "" } }] }, { "actionItems": [{ "id": "a-20-n-11", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "easeOut", "duration": 500, "target": {}, "value": 1, "unit": "" } }, { "id": "a-20-n-12", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "outExpo", "duration": 500, "target": {}, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }, { "id": "a-20-n-13", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outExpo", "duration": 500, "target": {}, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-20-n-14", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 100, "easing": "outExpo", "duration": 500, "target": {}, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-20-n-15", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 100, "easing": "outExpo", "duration": 500, "target": {}, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }, { "id": "a-20-n-16", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 100, "easing": "easeOut", "duration": 500, "target": {}, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1576338435670 }, "a-21": { "id": "a-21", "title": "tab-inactive", "actionItemGroups": [{ "actionItems": [{ "id": "a-21-n", "actionTypeId": "STYLE_SIZE", "config": { "delay": 0, "easing": "", "duration": 0, "target": {}, "heightValue": 0, "widthUnit": "PX", "heightUnit": "rem", "locked": false } }, { "id": "a-21-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 0, "target": {}, "value": 0, "unit": "" } }, { "id": "a-21-n-3", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 0, "target": {}, "zValue": 20, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }, { "id": "a-21-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 0, "target": {}, "value": 0, "unit": "" } }, { "id": "a-21-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 0, "target": {}, "yValue": 2.5, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-21-n-6", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 0, "target": {}, "zValue": -10, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "DEG" } }, { "id": "a-21-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 0, "target": {}, "value": 0, "unit": "" } }, { "id": "a-21-n-8", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 0, "target": {}, "yValue": -2.5, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1576338435670 }, "a-22": { "id": "a-22", "title": "Intro Hero", "actionItemGroups": [{ "actionItems": [{ "id": "a-22-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|bc538b17-64ee-5922-aca0-83b4e3e5ae9d" }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-22-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|d23405c1-43cf-8344-3f61-bce16749c8a9" }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-22-n-4", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|5fad583b-cb7b-ea9c-8a87-cd83de70bcfd" }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-22-n-5", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|8fa191f6-65d6-efa4-6c1e-742615691ed2" }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-22-n-6", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|9b058f42-2301-4929-eac6-cfe1ac9f3b55" }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-22-n-7", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|22228f4e-8e5e-d391-d833-eee3664e3c73" }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-22-n-14", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|4c311b21-8b5f-860a-6e66-7f1a2f63e70e" }, "yValue": 50, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-15", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|12582f49-5433-2cfe-196f-06d8db4a4036" }, "yValue": -50, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-16", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|6d3f5139-502f-effd-8d9a-0be7b934f06c" }, "yValue": 50, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-13", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|5c5a3a00-e7cb-73d6-b301-4e798079049f" }, "yValue": -50, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-23", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|0ce1f280-32e0-20f8-02bc-8278911e0990" }, "yValue": 50, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-24", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|2f508f7b-ba9a-9ab2-0c71-11635c3ff15d" }, "yValue": 50, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-17", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|378afdbe-5433-6138-b795-6e42014ae6e4" }, "yValue": -50, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-22-n-18", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuad", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|5c5a3a00-e7cb-73d6-b301-4e798079049f" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-19", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 200, "easing": "outQuad", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|4c311b21-8b5f-860a-6e66-7f1a2f63e70e" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-20", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 400, "easing": "outQuad", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|12582f49-5433-2cfe-196f-06d8db4a4036" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-21", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 600, "easing": "outQuad", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|6d3f5139-502f-effd-8d9a-0be7b934f06c" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-22", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 800, "easing": "outQuad", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|378afdbe-5433-6138-b795-6e42014ae6e4" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-12", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 1300, "easing": "outQuad", "duration": 600, "target": { "id": "634563ca1ffcb15feaec5510|22228f4e-8e5e-d391-d833-eee3664e3c73" }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-22-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 1300, "easing": "outQuad", "duration": 600, "target": { "id": "634563ca1ffcb15feaec5510|bc538b17-64ee-5922-aca0-83b4e3e5ae9d" }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-22-n-11", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 1600, "easing": "outQuad", "duration": 600, "target": { "id": "634563ca1ffcb15feaec5510|9b058f42-2301-4929-eac6-cfe1ac9f3b55" }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-22-n-10", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 1600, "easing": "outQuad", "duration": 600, "target": { "id": "634563ca1ffcb15feaec5510|8fa191f6-65d6-efa4-6c1e-742615691ed2" }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-22-n-8", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 1800, "easing": "outQuad", "duration": 600, "target": { "id": "634563ca1ffcb15feaec5510|d23405c1-43cf-8344-3f61-bce16749c8a9" }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-22-n-9", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 1800, "easing": "outQuad", "duration": 600, "target": { "id": "634563ca1ffcb15feaec5510|5fad583b-cb7b-ea9c-8a87-cd83de70bcfd" }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-22-n-26", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 1800, "easing": "outQuad", "duration": 800, "target": { "id": "634563ca1ffcb15feaec5510|0ce1f280-32e0-20f8-02bc-8278911e0990" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-22-n-25", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 2000, "easing": "outQuad", "duration": 800, "target": { "id": "634563ca1ffcb15feaec5510|2f508f7b-ba9a-9ab2-0c71-11635c3ff15d" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1665519341674 }, "a-28": { "id": "a-28", "title": "Comparison", "actionItemGroups": [{ "actionItems": [{ "id": "a-28-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".heading.is--small.is--ish", "selectorGuids": ["f2c0c806-43d2-92c6-d719-87655198caa0", "e7ab18db-5a4d-3525-5f28-43363f0e616d", "d3ea2fc8-deeb-c68e-72c7-50bf235349ec"] }, "yValue": 20.1875, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-28-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-para", "selectorGuids": ["db8be09f-7c91-0cca-9a69-d6783ea6e89d"] }, "yValue": 20.1875, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-28-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".btn-container.is--margin-top", "selectorGuids": ["31fe89c5-0539-2684-895f-03bab0bd964f", "ffe146b7-72d8-a201-d266-dde485ba081d"] }, "yValue": 20.1875, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-28-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuad", "duration": 800, "target": { "useEventTarget": "CHILDREN", "selector": ".heading.is--small.is--ish", "selectorGuids": ["f2c0c806-43d2-92c6-d719-87655198caa0", "e7ab18db-5a4d-3525-5f28-43363f0e616d", "d3ea2fc8-deeb-c68e-72c7-50bf235349ec"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-28-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 300, "easing": "outQuad", "duration": 800, "target": { "useEventTarget": "CHILDREN", "selector": ".story-para", "selectorGuids": ["db8be09f-7c91-0cca-9a69-d6783ea6e89d"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-28-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 600, "easing": "outQuad", "duration": 800, "target": { "useEventTarget": "CHILDREN", "selector": ".btn-container.is--margin-top", "selectorGuids": ["31fe89c5-0539-2684-895f-03bab0bd964f", "ffe146b7-72d8-a201-d266-dde485ba081d"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1665538778981 }, "a-29": { "id": "a-29", "title": "Story", "actionItemGroups": [{ "actionItems": [{ "id": "a-29-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".heading.is--small.is--ish", "selectorGuids": ["f2c0c806-43d2-92c6-d719-87655198caa0", "e7ab18db-5a4d-3525-5f28-43363f0e616d", "d3ea2fc8-deeb-c68e-72c7-50bf235349ec"] }, "yValue": 20.1875, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-29-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".story-para", "selectorGuids": ["db8be09f-7c91-0cca-9a69-d6783ea6e89d"] }, "yValue": 20.1875, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-29-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".btn-container.is--margin-top", "selectorGuids": ["31fe89c5-0539-2684-895f-03bab0bd964f", "ffe146b7-72d8-a201-d266-dde485ba081d"] }, "yValue": 20.1875, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-29-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuad", "duration": 800, "target": { "useEventTarget": "CHILDREN", "selector": ".heading.is--small.is--ish", "selectorGuids": ["f2c0c806-43d2-92c6-d719-87655198caa0", "e7ab18db-5a4d-3525-5f28-43363f0e616d", "d3ea2fc8-deeb-c68e-72c7-50bf235349ec"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-29-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 300, "easing": "outQuad", "duration": 800, "target": { "useEventTarget": "CHILDREN", "selector": ".story-para", "selectorGuids": ["db8be09f-7c91-0cca-9a69-d6783ea6e89d"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-29-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 600, "easing": "outQuad", "duration": 800, "target": { "useEventTarget": "CHILDREN", "selector": ".btn-container.is--margin-top", "selectorGuids": ["31fe89c5-0539-2684-895f-03bab0bd964f", "ffe146b7-72d8-a201-d266-dde485ba081d"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1665538778981 }, "a-30": { "id": "a-30", "title": "Reviews", "actionItemGroups": [{ "actionItems": [{ "id": "a-30-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "id": "634563ca1ffcb15feaec5510|6683b708-3ed3-7289-5549-24a80514e06c" }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-30-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "id": "634563ca1ffcb15feaec5510|6683b708-3ed3-7289-5549-24a80514e07e" }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-30-n-4", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "id": "634563ca1ffcb15feaec5510|6683b708-3ed3-7289-5549-24a80514e08f" }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-30-n-5", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "id": "634563ca1ffcb15feaec5510|c11afdf1-6b03-acd5-11eb-a5daf05a1479" }, "xValue": 0, "yValue": 0, "locked": true } }, { "id": "a-30-n-6", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "id": "634563ca1ffcb15feaec5510|c11afdf1-6b03-acd5-11eb-a5daf05a1484" }, "xValue": 0, "yValue": 0, "locked": true } }] }, { "actionItems": [{ "id": "a-30-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "outQuad", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "id": "634563ca1ffcb15feaec5510|6683b708-3ed3-7289-5549-24a80514e06c" }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-30-n-7", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 300, "easing": "outQuad", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "id": "634563ca1ffcb15feaec5510|6683b708-3ed3-7289-5549-24a80514e07e" }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-30-n-8", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 600, "easing": "outQuad", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "id": "634563ca1ffcb15feaec5510|6683b708-3ed3-7289-5549-24a80514e08f" }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-30-n-9", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 900, "easing": "outQuad", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "id": "634563ca1ffcb15feaec5510|c11afdf1-6b03-acd5-11eb-a5daf05a1479" }, "xValue": 1, "yValue": 1, "locked": true } }, { "id": "a-30-n-10", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 1200, "easing": "outQuad", "duration": 1000, "target": { "useEventTarget": "CHILDREN", "id": "634563ca1ffcb15feaec5510|c11afdf1-6b03-acd5-11eb-a5daf05a1484" }, "xValue": 1, "yValue": 1, "locked": true } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1665539255123 }, "a-46": { "id": "a-46", "title": "dropdown-list-hover-off", "actionItemGroups": [{ "actionItems": [{ "id": "a-46-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }, { "id": "a-46-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 1, "yValue": 1, "locked": true } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1625161070679 }, "a-37": { "id": "a-37", "title": "Nav-hover-mobile-close", "actionItemGroups": [{ "actionItems": [{ "id": "a-37-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "xValue": -100, "yValue": null, "xUnit": "%", "yUnit": "%", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-37-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "value": 0, "unit": "" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1625091918694 }, "a-36": { "id": "a-36", "title": "Button-hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-36-n", "actionTypeId": "PLUGIN_LOTTIE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".button-arrow", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3ac"] }, "value": 90 } }, { "id": "a-36-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".button-arrow", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3ac"] }, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-36-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".button-text", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3a8"] }, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-36-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 400, "target": { "useEventTarget": "CHILDREN", "selector": ".button-text", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3a8"] }, "xValue": -0.25, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-36-n-5", "actionTypeId": "PLUGIN_LOTTIE", "config": { "delay": 0, "easing": "easeOut", "duration": 400, "target": { "useEventTarget": "CHILDREN", "selector": ".button-arrow", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3ac"] }, "value": 0 } }, { "id": "a-36-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 400, "target": { "useEventTarget": "CHILDREN", "selector": ".button-arrow", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3ac"] }, "xValue": 0.25, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1625087026650 }, "a-38": { "id": "a-38", "title": "mobile-nav-click", "actionItemGroups": [{ "actionItems": [{ "id": "a-38-n", "actionTypeId": "PLUGIN_LOTTIE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": true, "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d69" }, "value": 0 } }] }, { "actionItems": [{ "id": "a-38-n-2", "actionTypeId": "PLUGIN_LOTTIE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": true, "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d69" }, "value": 100 } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1625176086353 }, "a-45": { "id": "a-45", "title": "mobile-nav-click-2", "actionItemGroups": [{ "actionItems": [{ "id": "a-45-n", "actionTypeId": "PLUGIN_LOTTIE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": true, "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d69" }, "value": 0 } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1625176086353 }, "a-41": { "id": "a-41", "title": "cart-click 2", "actionItemGroups": [{ "actionItems": [{ "id": "a-41-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".cart-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3c7"] }, "value": 0, "unit": "" } }, { "id": "a-41-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".cart-container", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3ae"] }, "xValue": 100, "yValue": null, "xUnit": "%", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-41-n-4", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 600, "easing": "", "duration": 0, "target": { "selector": ".cart-wrapper", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bc"] }, "value": "none" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1625112219336 }, "a-32": { "id": "a-32", "title": "dropdown-list-hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-32-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 0, "unit": "" } }, { "id": "a-32-n-2", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 1, "yValue": 1, "locked": true } }] }, { "actionItems": [{ "id": "a-32-n-3", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "xValue": 1.05, "yValue": 1.05, "locked": true } }, { "id": "a-32-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1625161070679 }, "a-40": { "id": "a-40", "title": "Nav-hover-off", "actionItemGroups": [{ "actionItems": [{ "id": "a-40-n", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 200, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-menu-wrapper", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3c2"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-40-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "SIBLINGS", "selector": ".dropdown-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bb"] }, "value": "none" } }, { "id": "a-40-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "SIBLINGS", "selector": ".dropdown-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bb"] }, "value": 0, "unit": "" } }, { "id": "a-40-n-4", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-40-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "yValue": -100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-40-n-6", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "SIBLINGS", "selector": ".dropdown-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bb"] }, "xValue": 1, "zValue": 1, "locked": false } }, { "id": "a-40-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "value": 0, "unit": "" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1625091918694 }, "a-48": { "id": "a-48", "title": "Nav-hover-mobile", "actionItemGroups": [{ "actionItems": [{ "id": "a-48-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "xValue": -100, "yValue": null, "xUnit": "%", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-48-n-2", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-48-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "xValue": 0, "yValue": null, "xUnit": "%", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-48-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1625091918694 }, "a-47": { "id": "a-47", "title": "cart-click", "actionItemGroups": [{ "actionItems": [{ "id": "a-47-n", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".cart-wrapper", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bc"] }, "value": "none" } }, { "id": "a-47-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".cart-container", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3ae"] }, "xValue": 100, "yValue": null, "xUnit": "%", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-47-n-4", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".cart-container", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3ae"] }, "value": 0, "unit": "" } }, { "id": "a-47-n-9", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".cart-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3c7"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-47-n-5", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "selector": ".cart-wrapper", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bc"] }, "value": "block" } }, { "id": "a-47-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 300, "target": { "selector": ".cart-container", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3ae"] }, "xValue": 0, "yValue": null, "xUnit": "%", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-47-n-8", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".cart-container", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3ae"] }, "value": 1, "unit": "" } }, { "id": "a-47-n-10", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "selector": ".cart-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3c7"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1625112219336 }, "a-33": { "id": "a-33", "title": "Button-hover-off", "actionItemGroups": [{ "actionItems": [{ "id": "a-33-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 300, "target": { "useEventTarget": "CHILDREN", "selector": ".button-text", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3a8"] }, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-33-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".button-arrow", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3ac"] }, "xValue": 0, "xUnit": "rem", "yUnit": "PX", "zUnit": "PX" } }, { "id": "a-33-n-3", "actionTypeId": "PLUGIN_LOTTIE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".button-arrow", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3ac"] }, "value": 90 } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1625087026650 }, "a-34": { "id": "a-34", "title": "Nav-hover", "actionItemGroups": [{ "actionItems": [{ "id": "a-34-n", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "SIBLINGS", "selector": ".dropdown-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bb"] }, "xValue": 1, "zValue": 1, "locked": false } }, { "id": "a-34-n-2", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "SIBLINGS", "selector": ".dropdown-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bb"] }, "value": "none" } }, { "id": "a-34-n-3", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "SIBLINGS", "selector": ".dropdown-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bb"] }, "value": 0, "unit": "" } }, { "id": "a-34-n-4", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "zValue": 0, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-34-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "yValue": -100, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-34-n-6", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "value": "none" } }, { "id": "a-34-n-7", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "value": 0, "unit": "" } }, { "id": "a-34-n-8", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-menu-wrapper", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3c2"] }, "value": 0, "unit": "" } }] }, { "actionItems": [{ "id": "a-34-n-9", "actionTypeId": "TRANSFORM_SCALE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "SIBLINGS", "selector": ".dropdown-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bb"] }, "xValue": 1, "yValue": 1, "zValue": 1, "locked": false } }, { "id": "a-34-n-10", "actionTypeId": "TRANSFORM_ROTATE", "config": { "delay": 0, "easing": "", "duration": 500, "target": {}, "zValue": 45, "xUnit": "DEG", "yUnit": "DEG", "zUnit": "deg" } }, { "id": "a-34-n-11", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "ease", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "yValue": 0, "xUnit": "PX", "yUnit": "%", "zUnit": "PX" } }, { "id": "a-34-n-12", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "SIBLINGS", "selector": ".dropdown-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bb"] }, "value": 1, "unit": "" } }, { "id": "a-34-n-13", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "SIBLINGS", "selector": ".dropdown-overlay", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3bb"] }, "value": "block" } }, { "id": "a-34-n-14", "actionTypeId": "GENERAL_DISPLAY", "config": { "delay": 0, "easing": "", "duration": 0, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "value": "block" } }, { "id": "a-34-n-15", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-list", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3b6"] }, "value": 1, "unit": "" } }] }, { "actionItems": [{ "id": "a-34-n-16", "actionTypeId": "STYLE_OPACITY", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".dropdown-menu-wrapper", "selectorGuids": ["75821e2e-ffa5-3e06-e1d8-ffbee90ff3c2"] }, "value": 1, "unit": "" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1625091918694 }, "a-49": { "id": "a-49", "title": "Show Nav", "actionItemGroups": [{ "actionItems": [{ "id": "a-49-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuad", "duration": 800, "target": { "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d67" }, "xValue": 0, "yValue": 0, "zValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "rem" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1665584107379 }, "a-50": { "id": "a-50", "title": "Hide Nav", "actionItemGroups": [{ "actionItems": [{ "id": "a-50-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuad", "duration": 1200, "target": { "id": "634563ca1ffcb15feaec5510|2b5a52b5-7280-f05b-f673-8ad4958e7d67" }, "xValue": 0, "yValue": -43.75, "zValue": 0, "xUnit": "rem", "yUnit": "rem", "zUnit": "rem" } }] }], "useFirstGroupAsInitialState": false, "createdOn": 1665584107379 }, "a-52": { "id": "a-52", "title": "Hero Floating", "actionItemGroups": [{ "actionItems": [{ "id": "a-52-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|bc538b17-64ee-5922-aca0-83b4e3e5ae9d" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|d23405c1-43cf-8344-3f61-bce16749c8a9" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|5fad583b-cb7b-ea9c-8a87-cd83de70bcfd" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|9b058f42-2301-4929-eac6-cfe1ac9f3b55" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-13", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|22228f4e-8e5e-d391-d833-eee3664e3c73" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-16", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "id": "634563ca1ffcb15feaec5510|8fa191f6-65d6-efa4-6c1e-742615691ed2" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-52-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|bc538b17-64ee-5922-aca0-83b4e3e5ae9d" }, "yValue": 0.5, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|d23405c1-43cf-8344-3f61-bce16749c8a9" }, "yValue": -0.5, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-7", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|5fad583b-cb7b-ea9c-8a87-cd83de70bcfd" }, "yValue": -0.625, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-8", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|9b058f42-2301-4929-eac6-cfe1ac9f3b55" }, "yValue": 0.8125, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-14", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|22228f4e-8e5e-d391-d833-eee3664e3c73" }, "yValue": 0.8125, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-17", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|8fa191f6-65d6-efa4-6c1e-742615691ed2" }, "yValue": 0.8125, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-52-n-9", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|bc538b17-64ee-5922-aca0-83b4e3e5ae9d" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-10", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|d23405c1-43cf-8344-3f61-bce16749c8a9" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-11", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|5fad583b-cb7b-ea9c-8a87-cd83de70bcfd" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-12", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|9b058f42-2301-4929-eac6-cfe1ac9f3b55" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-15", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|22228f4e-8e5e-d391-d833-eee3664e3c73" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-52-n-18", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "easeInOut", "duration": 1000, "target": { "id": "634563ca1ffcb15feaec5510|8fa191f6-65d6-efa4-6c1e-742615691ed2" }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1665428684786 }, "a-53": { "id": "a-53", "title": "Intro", "actionItemGroups": [{ "actionItems": [{ "id": "a-53-n", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".heading.is--small.is--black", "selectorGuids": ["f2c0c806-43d2-92c6-d719-87655198caa0", "e7ab18db-5a4d-3525-5f28-43363f0e616d", "6863f90f-0dbf-c2b4-592d-3e81a9d0c5d1"] }, "yValue": 20.1875, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-53-n-2", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".paragraph.is--regular.is--black", "selectorGuids": ["f9a3aa06-b308-beba-4c4c-b261eb644883", "4853e492-3d9a-d166-e4dd-b35c1cad668d", "bf6e75b5-1651-6ad5-d231-b037953fe60a"] }, "yValue": 20.1875, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-53-n-3", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "", "duration": 500, "target": { "useEventTarget": "CHILDREN", "selector": ".button.is--yellow", "selectorGuids": ["a44302bf-3a18-2902-876c-4f6138ba1973", "b65ff7c8-d6d8-ef09-b330-a001bb076c69"] }, "yValue": 20.1875, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }, { "actionItems": [{ "id": "a-53-n-4", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 0, "easing": "outQuad", "duration": 800, "target": { "useEventTarget": "CHILDREN", "selector": ".heading.is--small.is--black", "selectorGuids": ["f2c0c806-43d2-92c6-d719-87655198caa0", "e7ab18db-5a4d-3525-5f28-43363f0e616d", "6863f90f-0dbf-c2b4-592d-3e81a9d0c5d1"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-53-n-5", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 300, "easing": "outQuad", "duration": 800, "target": { "useEventTarget": "CHILDREN", "selector": ".paragraph.is--regular.is--black", "selectorGuids": ["f9a3aa06-b308-beba-4c4c-b261eb644883", "4853e492-3d9a-d166-e4dd-b35c1cad668d", "bf6e75b5-1651-6ad5-d231-b037953fe60a"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }, { "id": "a-53-n-6", "actionTypeId": "TRANSFORM_MOVE", "config": { "delay": 600, "easing": "outQuad", "duration": 800, "target": { "useEventTarget": "CHILDREN", "selector": ".button.is--yellow", "selectorGuids": ["a44302bf-3a18-2902-876c-4f6138ba1973", "b65ff7c8-d6d8-ef09-b330-a001bb076c69"] }, "yValue": 0, "xUnit": "PX", "yUnit": "rem", "zUnit": "PX" } }] }], "useFirstGroupAsInitialState": true, "createdOn": 1665538778981 } }, "site": { "mediaQueries": [{ "key": "main", "min": 992, "max": 10000 }, { "key": "medium", "min": 768, "max": 991 }, { "key": "small", "min": 480, "max": 767 }, { "key": "tiny", "min": 0, "max": 479 }] } });