/*!
 * strings: 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var FD = /(?:^\s+|\s+$)/g,
    X = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

function Z(t) {
    var D = t.nodeType,
        i = "";
    if (D === 1 || D === 9 || D === 11) {
        if (typeof t.textContent == "string")
            return t.textContent;
        for (t = t.firstChild; t; t = t.nextSibling)
            i += Z(t)
    } else if (D === 3 || D === 4)
        return t.nodeValue;
    return i
}

function hD(t, D, i, F) {
    if (t += "",
        i && (t = t.trim ? t.trim() : t.replace(FD, "")),
        D && D !== "")
        return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(D);
    for (var e = [], C = t.length, l = 0, d, s; l < C; l++)
        s = t.charAt(l),
        (s.charCodeAt(0) >= 55296 && s.charCodeAt(0) <= 56319 || t.charCodeAt(l + 1) >= 65024 && t.charCodeAt(l + 1) <= 65039) && (d = ((t.substr(l, 12).split(X) || [])[1] || "").length || 2,
            s = t.substr(l, d),
            e.emoji = 1,
            l += d - 1),
        e.push(s === ">" ? "&gt;" : s === "<" ? "&lt;" : F && s === " " && (t.charAt(l - 1) === " " || t.charAt(l + 1) === " ") ? "&nbsp;" : s);
    return e
}
/*!
 * SplitText: 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var v, DD, uD, eD = /(?:\r|\n|\t\t)/g,
    CD = /(?:\s\s+)/g,
    sD = function() {
        v = document,
            DD = window,
            uD = 1
    },
    iD = function(D) {
        return DD.getComputedStyle(D)
    },
    nD = Array.isArray,
    K = [].slice,
    q = function(D, i) {
        var F;
        return nD(D) ? D : (F = typeof D) == "string" && !i && D ? K.call(v.querySelectorAll(D), 0) : D && F === "object" && "length" in D ? K.call(D, 0) : D ? [D] : []
    },
    z = function(D) {
        return D.position === "absolute" || D.absolute === !0
    },
    ED = function(D, i) {
        for (var F = i.length, e; --F > -1;)
            if (e = i[F],
                D.substr(0, e.length) === e)
                return e.length
    },
    rD = " style='position:relative;display:inline-block;'",
    Q = function(D, i) {
        D === void 0 && (D = "");
        var F = ~D.indexOf("++"),
            e = 1;
        return F && (D = D.split("++").join("")),
            function() {
                return "<" + i + rD + (D ? " class='" + D + (F ? e++ : "") + "'>" : ">")
            }
    },
    tD = function t(D, i, F) {
        var e = D.nodeType;
        if (e === 1 || e === 9 || e === 11)
            for (D = D.firstChild; D; D = D.nextSibling)
                t(D, i, F);
        else
            (e === 3 || e === 4) && (D.nodeValue = D.nodeValue.split(i).join(F))
    },
    I = function(D, i) {
        for (var F = i.length; --F > -1;)
            D.push(i[F])
    },
    U = function(D, i, F) {
        for (var e; D && D !== i;) {
            if (e = D._next || D.nextSibling,
                e)
                return e.textContent.charAt(0) === F;
            D = D.parentNode || D._parent
        }
    },
    lD = function t(D) {
        var i = q(D.childNodes),
            F = i.length,
            e, C;
        for (e = 0; e < F; e++)
            C = i[e],
            C._isSplit ? t(C) : e && C.previousSibling && C.previousSibling.nodeType === 3 ? (C.previousSibling.nodeValue += C.nodeType === 3 ? C.nodeValue : C.firstChild.nodeValue,
                D.removeChild(C)) : C.nodeType !== 3 && (D.insertBefore(C.firstChild, C),
                D.removeChild(C))
    },
    _ = function(D, i) {
        return parseFloat(i[D]) || 0
    },
    oD = function(D, i, F, e, C, l, d) {
        var s = iD(D),
            E = _("paddingLeft", s),
            f = -999,
            M = _("borderBottomWidth", s) + _("borderTopWidth", s),
            W = _("borderLeftWidth", s) + _("borderRightWidth", s),
            k = _("paddingTop", s) + _("paddingBottom", s),
            o = _("paddingLeft", s) + _("paddingRight", s),
            B = _("fontSize", s) * (i.lineThreshold || .2),
            r = s.textAlign,
            w = [],
            j = [],
            h = [],
            N = i.wordDelimiter || " ",
            T = i.tag ? i.tag : i.span ? "span" : "div",
            L = i.type || i.split || "chars,words,lines",
            A = C && ~L.indexOf("lines") ? [] : null,
            y = ~L.indexOf("words"),
            O = ~L.indexOf("chars"),
            c = z(i),
            H = i.linesClass,
            Y = ~(H || "").indexOf("++"),
            P = [],
            $ = s.display === "flex",
            m = D.style.display,
            n, a, x, u, V, b, R, G, S, p, J, g;
        for (Y && (H = H.split("++").join("")),
            $ && (D.style.display = "block"),
            a = D.getElementsByTagName("*"),
            x = a.length,
            V = [],
            n = 0; n < x; n++)
            V[n] = a[n];
        if (A || c)
            for (n = 0; n < x; n++)
                u = V[n],
                b = u.parentNode === D,
                (b || c || O && !y) && (g = u.offsetTop,
                    A && b && Math.abs(g - f) > B && (u.nodeName !== "BR" || n === 0) && (R = [],
                        A.push(R),
                        f = g),
                    c && (u._x = u.offsetLeft,
                        u._y = g,
                        u._w = u.offsetWidth,
                        u._h = u.offsetHeight),
                    A && ((u._isSplit && b || !O && b || y && b || !y && u.parentNode.parentNode === D && !u.parentNode._isSplit) && (R.push(u),
                            u._x -= E,
                            U(u, D, N) && (u._wordEnd = !0)),
                        u.nodeName === "BR" && (u.nextSibling && u.nextSibling.nodeName === "BR" || n === 0) && A.push([])));
        for (n = 0; n < x; n++) {
            if (u = V[n],
                b = u.parentNode === D,
                u.nodeName === "BR") {
                A || c ? (u.parentNode && u.parentNode.removeChild(u),
                    V.splice(n--, 1),
                    x--) : y || D.appendChild(u);
                continue
            }
            if (c && (S = u.style, !y && !b && (u._x += u.parentNode._x,
                        u._y += u.parentNode._y),
                    S.left = u._x + "px",
                    S.top = u._y + "px",
                    S.position = "absolute",
                    S.display = "block",
                    S.width = u._w + 1 + "px",
                    S.height = u._h + "px"), !y && O)
                if (u._isSplit)
                    for (u._next = a = u.nextSibling,
                        u.parentNode.appendChild(u); a && a.nodeType === 3 && a.textContent === " ";)
                        u._next = a.nextSibling,
                        u.parentNode.appendChild(a),
                        a = a.nextSibling;
                else
                    u.parentNode._isSplit ? (u._parent = u.parentNode, !u.previousSibling && u.firstChild && (u.firstChild._isFirst = !0),
                        u.nextSibling && u.nextSibling.textContent === " " && !u.nextSibling.nextSibling && P.push(u.nextSibling),
                        u._next = u.nextSibling && u.nextSibling._isFirst ? null : u.nextSibling,
                        u.parentNode.removeChild(u),
                        V.splice(n--, 1),
                        x--) : b || (g = !u.nextSibling && U(u.parentNode, D, N),
                        u.parentNode._parent && u.parentNode._parent.appendChild(u),
                        g && u.parentNode.appendChild(v.createTextNode(" ")),
                        T === "span" && (u.style.display = "inline"),
                        w.push(u));
            else
                u.parentNode._isSplit && !u._isSplit && u.innerHTML !== "" ? j.push(u) : O && !u._isSplit && (T === "span" && (u.style.display = "inline"),
                    w.push(u))
        }
        for (n = P.length; --n > -1;)
            P[n].parentNode.removeChild(P[n]);
        if (A) {
            for (c && (p = v.createElement(T),
                    D.appendChild(p),
                    J = p.offsetWidth + "px",
                    g = p.offsetParent === D ? 0 : D.offsetLeft,
                    D.removeChild(p)),
                S = D.style.cssText,
                D.style.cssText = "display:none;"; D.firstChild;)
                D.removeChild(D.firstChild);
            for (G = N === " " && (!c || !y && !O),
                n = 0; n < A.length; n++) {
                for (R = A[n],
                    p = v.createElement(T),
                    p.style.cssText = "display:block;text-align:" + r + ";position:" + (c ? "absolute;" : "relative;"),
                    H && (p.className = H + (Y ? n + 1 : "")),
                    h.push(p),
                    x = R.length,
                    a = 0; a < x; a++)
                    R[a].nodeName !== "BR" && (u = R[a],
                        p.appendChild(u),
                        G && u._wordEnd && p.appendChild(v.createTextNode(" ")),
                        c && (a === 0 && (p.style.top = u._y + "px",
                                p.style.left = E + g + "px"),
                            u.style.top = "0px",
                            g && (u.style.left = u._x - g + "px")));
                x === 0 ? p.innerHTML = "&nbsp;" : !y && !O && (lD(p),
                        tD(p, String.fromCharCode(160), " ")),
                    c && (p.style.width = J,
                        p.style.height = u._h + "px"),
                    D.appendChild(p)
            }
            D.style.cssText = S
        }
        c && (d > D.clientHeight && (D.style.height = d - k + "px",
                    D.clientHeight < d && (D.style.height = d + M + "px")),
                l > D.clientWidth && (D.style.width = l - o + "px",
                    D.clientWidth < l && (D.style.width = l + W + "px"))),
            $ && (m ? D.style.display = m : D.style.removeProperty("display")),
            I(F, w),
            y && I(e, j),
            I(C, h)
    },
    pD = function(D, i, F, e) {
        var C = i.tag ? i.tag : i.span ? "span" : "div",
            l = i.type || i.split || "chars,words,lines",
            d = ~l.indexOf("chars"),
            s = z(i),
            E = i.wordDelimiter || " ",
            f = E !== " " ? "" : s ? "&#173; " : " ",
            M = "</" + C + ">",
            W = 1,
            k = i.specialChars ? typeof i.specialChars == "function" ? i.specialChars : ED : null,
            o, B, r, w, j, h, N, T, L = v.createElement("div"),
            A = D.parentNode;
        for (A.insertBefore(L, D),
            L.textContent = D.nodeValue,
            A.removeChild(D),
            D = L,
            o = Z(D),
            N = o.indexOf("<") !== -1,
            i.reduceWhiteSpace !== !1 && (o = o.replace(CD, " ").replace(eD, "")),
            N && (o = o.split("<").join("{{LT}}")),
            j = o.length,
            B = (o.charAt(0) === " " ? f : "") + F(),
            r = 0; r < j; r++)
            if (h = o.charAt(r),
                k && (T = k(o.substr(r), i.specialChars)))
                h = o.substr(r, T || 1),
                B += d && h !== " " ? e() + h + "</" + C + ">" : h,
                r += T - 1;
            else if (h === E && o.charAt(r - 1) !== E && r) {
            for (B += W ? M : "",
                W = 0; o.charAt(r + 1) === E;)
                B += f,
                r++;
            r === j - 1 ? B += f : o.charAt(r + 1) !== ")" && (B += f + F(),
                W = 1)
        } else
            h === "{" && o.substr(r, 6) === "{{LT}}" ? (B += d ? e() + "{{LT}}</" + C + ">" : "{{LT}}",
                r += 5) : h.charCodeAt(0) >= 55296 && h.charCodeAt(0) <= 56319 || o.charCodeAt(r + 1) >= 65024 && o.charCodeAt(r + 1) <= 65039 ? (w = ((o.substr(r, 12).split(X) || [])[1] || "").length || 2,
                B += d && h !== " " ? e() + o.substr(r, w) + "</" + C + ">" : o.substr(r, w),
                r += w - 1) : B += d && h !== " " ? e() + h + "</" + C + ">" : h;
        D.outerHTML = B + (W ? M : ""),
            N && tD(A, "{{LT}}", "<")
    },
    dD = function t(D, i, F, e) {
        var C = q(D.childNodes),
            l = C.length,
            d = z(i),
            s, E;
        if (D.nodeType !== 3 || l > 1) {
            for (i.absolute = !1,
                s = 0; s < l; s++)
                E = C[s],
                E._next = E._isFirst = E._parent = E._wordEnd = null,
                (E.nodeType !== 3 || /\S+/.test(E.nodeValue)) && (d && E.nodeType !== 3 && iD(E).display === "inline" && (E.style.display = "inline-block",
                        E.style.position = "relative"),
                    E._isSplit = !0,
                    t(E, i, F, e));
            i.absolute = d,
                D._isSplit = !0;
            return
        }
        pD(D, i, F, e)
    },
    aD = function() {
        function t(i, F) {
            uD || sD(),
                this.elements = q(i),
                this.chars = [],
                this.words = [],
                this.lines = [],
                this._originals = [],
                this.vars = F || {},
                this.split(F)
        }
        var D = t.prototype;
        return D.split = function(F) {
                this.isSplit && this.revert(),
                    this.vars = F = F || this.vars,
                    this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var e = this.elements.length, C = F.tag ? F.tag : F.span ? "span" : "div", l = Q(F.wordsClass, C), d = Q(F.charsClass, C), s, E, f; --e > -1;)
                    f = this.elements[e],
                    this._originals[e] = f.innerHTML,
                    s = f.clientHeight,
                    E = f.clientWidth,
                    dD(f, F, l, d),
                    oD(f, F, this.chars, this.words, this.lines, E, s);
                return this.chars.reverse(),
                    this.words.reverse(),
                    this.lines.reverse(),
                    this.isSplit = !0,
                    this
            },
            D.revert = function() {
                var F = this._originals;
                if (!F)
                    throw "revert() call wasn't scoped properly.";
                return this.elements.forEach(function(e, C) {
                        return e.innerHTML = F[C]
                    }),
                    this.chars = [],
                    this.words = [],
                    this.lines = [],
                    this.isSplit = !1,
                    this
            },
            t.create = function(F, e) {
                return new t(F, e)
            },
            t
    }();
aD.version = "3.11.3";
export { aD as S, hD as e, Z as g };
//# sourceMappingURL=SplitText-7307e934.js.map