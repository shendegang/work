/*
Copyright 2013, KISSY UI Library v1.20
MIT Licensed
build time: Jan 28 17:16
*/
 (function(b, c) {
    var j = this,
    f = {
        mix: function(b, a, g, k, h) {
            if (!a || !b) return b;
            g === c && (g = !0);
            var f,
            j,
            o;
            if (k && (o = k.length)) for (f = 0; f < o; f++) j = k[f],
            j in a && i(j, b, a, g, h);
            else for (j in a) i(j, b, a, g, h);
            return b
        }
    },
    i = function(d, a, g, k, h) {
        if (k || !(d in a)) {
            var i = a[d],
            f = g[d];
            i !== f && (h && f && (b.isArray(f) || b.isPlainObject(f)) ? (g = i && (b.isArray(i) || b.isPlainObject(i)) ? i: b.isArray(f) ? [] : {},
            a[d] = b.mix(g, f, k, c, !0)) : f !== c && (a[d] = g[d]))
        }
    },
    a = j && j[b] || {},
    h = 0,
    j = a.__HOST || (a.__HOST = j || {}),
    b = j[b] = f.mix(a, f);
    b.mix(b, {
        configs: {},
        __APP_MEMBERS: ["namespace"],
        __APP_INIT_METHODS: ["__init"],
        version: "1.20",
        buildTime: "20130128171456",
        merge: function() {
            var d = {},
            a,
            c = arguments.length;
            for (a = 0; a < c; a++) b.mix(d, arguments[a]);
            return d
        },
        augment: function() {
            var d = b.makeArray(arguments),
            a = d.length - 2,
            g = d[0],
            k = d[a],
            h = d[a + 1],
            f = 1;
            b.isArray(h) || (k = h, h = c, a++);
            b.isBoolean(k) || (k = c, a++);
            for (; f < a; f++) b.mix(g.prototype, d[f].prototype || d[f], k, h);
            return g
        },
        extend: function(d, a, c, h) {
            if (!a || !d) return d;
            var f = Object.create ? 
            function(b, d) {
                return Object.create(b, {
                    constructor: {
                        value: d
                    }
                })
            }: 
            function(b, d) {
                function a() {}
                a.prototype = b;
                var c = new a;
                c.constructor = d;
                return c
            },
            i = a.prototype,
            j;
            j = f(i, d);
            d.prototype = b.mix(j, d.prototype);
            d.superclass = f(i, a);
            c && b.mix(j, c);
            h && b.mix(d, h);
            return d
        },
        __init: function() {
            this.Config = this.Config || {};
            this.Env = this.Env || {};
            this.Config.debug = ""
        },
        namespace: function() {
            var d = b.makeArray(arguments),
            a = d.length,
            c = null,
            h,
            f,
            i,
            n = !0 === d[a - 1] && a--;
            for (h = 0; h < a; h++) {
                i = ("" + d[h]).split(".");
                c = n ? j: this;
                for (f = j[i[0]] === c ? 1: 0; f < i.length; ++f) c = c[i[f]] = c[i[f]] || {}
            }
            return c
        },
        app: function(a, c) {
            var g = b.isString(a),
            h = g ? j[a] || {}: a,
            f = 0,
            i = b.__APP_INIT_METHODS.length;
            for (b.mix(h, this, !0, b.__APP_MEMBERS); f < i; f++) b[b.__APP_INIT_METHODS[f]].call(h);
            b.mix(h, b.isFunction(c) ? c() : c);
            g && (j[a] = h);
            return h
        },
        config: function(b) {
            var a,
            c,
            h,
            f;
            for (f in b) if (b.hasOwnProperty(f) && (a = this.configs) && (c = a[f])) h = c(b[f]);
            return h
        },
        log: function(a, e, g) {
            if (b.Config.debug && (g && (a = g + ": " + a), j.console !== c && console.log)) console[e && console[e] ? e: "log"](a)
        },
        error: function(a) {
            if (b.Config.debug) throw a;
        },
        guid: function(b) {
            return (b || 
            "") + h++
        }
    });
    b.__init();
    return b
})("KISSY", void 0);
 (function(b, c) {
    function j() {
        if (A) return A;
        var a = r;
        b.each(F, 
        function(b) {
            a += b + "|"
        });
        a = a.slice(0, -1);
        return A = RegExp(a, "g")
    }
    function f() {
        if (C) return C;
        var a = r;
        b.each(B, 
        function(b) {
            a += b + "|"
        });
        a += "&#(\\d{1,5});";
        return C = RegExp(a, "g")
    }
    function i(b) {
        var c = typeof b;
        return a(b) || "object" !== c && "function" !== c
    }
    function a(a) {
        return b.isNull(a) || b.isUndefined(a)
    }
    function h(a, c, d) {
        var e = a,
        g,
        f,
        i,
        l;
        if (!a) return e;
        if (a[u]) return d[a[u]].destination;
        if ("object" === typeof a) {
            l = a.constructor;
            if (b.inArray(l, [Boolean, String, 
            Number, Date, RegExp])) e = new l(a.valueOf());
            else if (g = b.isArray(a)) e = c ? b.filter(a, c) : a.concat();
            else if (f = b.isPlainObject(a)) e = {};
            a[u] = l = b.guid();
            d[l] = {
                destination: e,
                input: a
            }
        }
        if (g) for (a = 0; a < e.length; a++) e[a] = h(e[a], c, d);
        else if (f) for (i in a) if (a.hasOwnProperty(i) && i !== u && (!c || c.call(a, a[i], i, a) !== k)) e[i] = h(a[i], c, d);
        return e
    }
    function d(a, d, e, h) {
        if (a[x] === d && d[x] === a) return g;
        a[x] = d;
        d[x] = a;
        var f = function(a, b) {
            return null !== a && a !== c && a[b] !== c
        },
        k;
        for (k in d) d.hasOwnProperty(k) && !f(a, k) && f(d, k) && e.push("expected has key '" + 
        k + "', but missing from actual.");
        for (k in a) a.hasOwnProperty(k) && !f(d, k) && f(a, k) && e.push("expected missing key '" + k + "', but present in actual.");
        for (k in d) d.hasOwnProperty(k) && k != x && (b.equals(a[k], d[k], e, h) || h.push("'" + k + "' was '" + (d[k] ? d[k].toString() : d[k]) + "' in expected, but was '" + (a[k] ? a[k].toString() : a[k]) + "' in actual."));
        b.isArray(a) && b.isArray(d) && a.length != d.length && h.push("arrays were not the same length");
        delete a[x];
        delete d[x];
        return 0 === e.length && 0 === h.length
    }
    var e = b.__HOST,
    g = !0,
    k = 
    !1,
    l = Object.prototype,
    m = l.toString,
    n = l.hasOwnProperty,
    l = Array.prototype,
    o = l.indexOf,
    p = l.lastIndexOf,
    t = l.filter,
    q = l.every,
    v = l.some,
    w = String.prototype.trim,
    s = l.map,
    r = "",
    u = "__~ks_cloned",
    x = "__~ks_compared",
    y = /^[\s\xa0]+|[\s\xa0]+$/g,
    z = encodeURIComponent,
    D = decodeURIComponent,
    I = {},
    F = {
        "&amp;": "&",
        "&gt;": ">",
        "&lt;": "<",
        "&#x60;": "`",
        "&#x2F;": "/",
        "&quot;": '"',
        "&#x27;": "'"
    },
    B = {},
    A,
    C,
    E = /[\-#$\^*()+\[\]{}|\\,.?\s]/g; (function() {
        for (var a in F) F.hasOwnProperty(a) && (B[F[a]] = a)
    })();
    b.mix(b, {
        stamp: function(a, d, e) {
            if (!a) return a;
            var e = e || "__~ks_stamped",
            g = a[e];
            if (!g && !d) try {
                g = a[e] = b.guid(e)
            } catch(h) {
                g = c
            }
            return g
        },
        noop: function() {},
        type: function(b) {
            return a(b) ? "" + b: I[m.call(b)] || "object"
        },
        isNullOrUndefined: a,
        isNull: function(a) {
            return null === a
        },
        isUndefined: function(a) {
            return a === c
        },
        isEmptyObject: function(a) {
            for (var b in a) if (b !== c) return k;
            return g
        },
        isPlainObject: function(a) {
            return a && "[object Object]" === m.call(a) && "isPrototypeOf" in a
        },
        equals: function(e, h, k, f) {
            k = k || [];
            f = f || [];
            return e === h ? g: e === c || null === e || h === c || null === h ? 
            a(e) && a(h) : e instanceof Date && h instanceof Date ? e.getTime() == h.getTime() : b.isString(e) && b.isString(h) || b.isNumber(e) && b.isNumber(h) ? e == h: "object" === typeof e && "object" === typeof h ? d(e, h, k, f) : e === h
        },
        clone: function(a, d) {
            var e = {},
            g = h(a, d, e);
            b.each(e, 
            function(a) {
                a = a.input;
                if (a[u]) try {
                    delete a[u]
                } catch(d) {
                    b.log("delete CLONE_MARKER error : "),
                    a[u] = c
                }
            });
            e = null;
            return g
        },
        trim: w ? 
        function(b) {
            return a(b) ? r: w.call(b)
        }: function(b) {
            return a(b) ? r: b.toString().replace(y, r)
        },
        substitute: function(a, d, e) {
            return ! b.isString(a) || 
            !b.isPlainObject(d) ? a: a.replace(e || /\\?\{([^{}]+)\}/g, 
            function(a, b) {
                return "\\" === a.charAt(0) ? a.slice(1) : d[b] === c ? r: d[b]
            })
        },
        each: function(a, d, g) {
            if (a) {
                var h,
                f = 0,
                i = a && a.length,
                l = i === c || "function" === b.type(a),
                g = g || e;
                if (l) for (h in a) {
                    if (d.call(g, a[h], h, a) === k) break
                } else for (h = a[0]; f < i && d.call(g, h, f, a) !== k; h = a[++f]);
            }
            return a
        },
        indexOf: o ? 
        function(a, b) {
            return o.call(b, a)
        }: function(a, b) {
            for (var d = 0, c = b.length; d < c; ++d) if (b[d] === a) return d;
            return - 1
        },
        lastIndexOf: p ? 
        function(a, b) {
            return p.call(b, a)
        }: function(a, 
        b) {
            for (var d = b.length - 1; 0 <= d && b[d] !== a; d--);
            return d
        },
        unique: function(a, d) {
            var c = a.slice();
            d && c.reverse();
            for (var e = 0, g, h; e < c.length;) {
                for (h = c[e]; (g = b.lastIndexOf(h, c)) !== e;) c.splice(g, 1);
                e += 1
            }
            d && c.reverse();
            return c
        },
        inArray: function(a, d) {
            return - 1 < b.indexOf(a, d)
        },
        filter: t ? 
        function(a, b, d) {
            return t.call(a, b, d || this)
        }: function(a, d, c) {
            var e = [];
            b.each(a, 
            function(a, b, g) {
                d.call(c || this, a, b, g) && e.push(a)
            });
            return e
        },
        map: s ? 
        function(a, b, d) {
            return s.call(a, b, d || this)
        }: function(a, d, c) {
            for (var e = a.length, g = Array(e), 
            h = 0; h < e; h++) {
                var k = b.isString(a) ? a.charAt(h) : a[h];
                if (k || h in a) g[h] = d.call(c || this, k, h, a)
            }
            return g
        },
        reduce: function(a, b, d) {
            var e = a.length;
            if ("function" !== typeof b) throw new TypeError("callback is not function!");
            if (0 === e && 2 == arguments.length) throw new TypeError("arguments invalid");
            var h = 0,
            k;
            if (3 <= arguments.length) k = arguments[2];
            else {
                do {
                    if (h in a) {
                        k = a[h++];
                        break
                    }
                    h += 1;
                    if (h >= e) throw new TypeError;
                }
                while (g)
            }
            for (; h < e;) h in a && (k = b.call(c, k, a[h], h, a)),
            h++;
            return k
        },
        every: q ? 
        function(a, b, d) {
            return q.call(a, 
            b, d || this)
        }: function(a, b, d) {
            for (var c = a && a.length || 0, e = 0; e < c; e++) if (e in a && !b.call(d, a[e], e, a)) return k;
            return g
        },
        some: v ? 
        function(a, b, d) {
            return v.call(a, b, d || this)
        }: function(a, b, d) {
            for (var c = a && a.length || 0, e = 0; e < c; e++) if (e in a && b.call(d, a[e], e, a)) return g;
            return k
        },
        bind: function(a, b) {
            var d = [].slice,
            c = d.call(arguments, 2),
            e = function() {},
            h = function() {
                return a.apply(this instanceof e ? this: b, c.concat(d.call(arguments)))
            };
            e.prototype = a.prototype;
            h.prototype = new e;
            return h
        },
        now: Date.now || 
        function() {
            return + new Date
        },
        fromUnicode: function(a) {
            return a.replace(/\\u([a-f\d]{4})/ig, 
            function(a, b) {
                return String.fromCharCode(parseInt(b, 16))
            })
        },
        escapeHTML: function(a) {
            return a.replace(j(), 
            function(a) {
                return B[a]
            })
        },
        escapeRegExp: function(a) {
            return a.replace(E, "\\$&")
        },
        unEscapeHTML: function(a) {
            return a.replace(f(), 
            function(a, b) {
                return F[a] || String.fromCharCode( + b)
            })
        },
        makeArray: function(d) {
            if (a(d)) return [];
            if (b.isArray(d)) return d;
            if ("number" !== typeof d.length || b.isString(d) || b.isFunction(d)) return [d];
            for (var c = [], e = 0, h = d.length; e < 
            h; e++) c[e] = d[e];
            return c
        },
        param: function(a, d, c, e) {
            if (!b.isPlainObject(a)) return r;
            d = d || "&";
            c = c || "=";
            b.isUndefined(e) && (e = g);
            var h = [],
            k,
            f;
            for (k in a) if (a.hasOwnProperty(k)) if (f = a[k], k = z(k), i(f)) h.push(k, c, z(f + r), d);
            else if (b.isArray(f) && f.length) for (var l = 0, j = f.length; l < j; ++l) i(f[l]) && h.push(k, e ? z("[]") : r, c, z(f[l] + r), d);
            h.pop();
            return h.join(r)
        },
        unparam: function(a, d, c) {
            if ("string" !== typeof a || 0 === (a = b.trim(a)).length) return {};
            for (var c = c || "=", e = {},
            a = a.split(d || "&"), h, g, k = 0, f = a.length; k < f; ++k) {
                d = a[k].split(c);
                h = D(d[0]);
                try {
                    g = D(d[1] || r)
                } catch(i) {
                    b.log(i + "decodeURIComponent error : " + d[1], "error"),
                    g = d[1] || r
                }
                b.endsWith(h, "[]") && (h = h.substring(0, h.length - 2));
                n.call(e, h) ? b.isArray(e[h]) ? e[h].push(g) : e[h] = [e[h], g] : e[h] = g
            }
            return e
        },
        later: function(a, d, c, e, h) {
            var d = d || 0,
            g = a,
            k = b.makeArray(h),
            f;
            b.isString(a) && (g = e[a]);
            g || b.error("method undefined");
            a = function() {
                g.apply(e, k)
            };
            f = c ? setInterval(a, d) : setTimeout(a, d);
            return {
                id: f,
                interval: c,
                cancel: function() {
                    this.interval ? clearInterval(f) : clearTimeout(f)
                }
            }
        },
        startsWith: function(a, 
        b) {
            return 0 === a.lastIndexOf(b, 0)
        },
        endsWith: function(a, b) {
            var d = a.length - b.length;
            return 0 <= d && a.indexOf(b, d) == d
        },
        throttle: function(a, d, c) {
            d = d || 150;
            if ( - 1 === d) return function() {
                a.apply(c || this, arguments)
            };
            var e = b.now();
            return function() {
                var h = b.now();
                h - e > d && (e = h, a.apply(c || this, arguments))
            }
        },
        buffer: function(a, d, c) {
            function e() {
                e.stop();
                h = b.later(a, d, k, c || this, arguments)
            }
            d = d || 150;
            if ( - 1 === d) return function() {
                a.apply(c || this, arguments)
            };
            var h = null;
            e.stop = function() {
                h && (h.cancel(), h = 0)
            };
            return e
        }
    });
    b.mix(b, 
    {
        isBoolean: i,
        isNumber: i,
        isString: i,
        isFunction: i,
        isArray: i,
        isDate: i,
        isRegExp: i,
        isObject: i
    });
    b.each("Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","), 
    function(a, d) {
        I["[object " + a + "]"] = d = a.toLowerCase();
        b["is" + a] = function(a) {
            return b.type(a) == d
        }
    })
})(KISSY, void 0); (function(b) {
    "require" in this || (b.__loader = {},
    b.__loaderUtils = {},
    b.__loaderData = {})
})(KISSY);
 (function(b, c) {
    "require" in this || (b.configs.map = function(c) {
        b.Config.mappedRules = (b.Config.mappedRules || []).concat(c)
    },
    b.mix(c, {
        __getMappedPath: function(c) {
            for (var f = b.Config.mappedRules || [], i = 0; i < f.length; i++) {
                var a = f[i];
                if (c.match(a[0])) return c.replace(a[0], a[1])
            }
            return c
        }
    }))
})(KISSY, KISSY.__loader);
 (function(b, c) {
    if (! ("require" in this)) {
        var j;
        j = b.configs.combines = function(c, i) {
            var a;
            if (b.isObject(c)) b.each(c, 
            function(a, d) {
                b.each(a, 
                function(a) {
                    j(a, d)
                })
            });
            else if (a = b.Config.combines = b.Config.combines || {},
            i) a[c] = i;
            else return a[c] || c
        };
        b.mix(c, {
            __getCombinedMod: function(c) {
                return (b.Config.combines = b.Config.combines || {})[c] || c
            }
        })
    }
})(KISSY, KISSY.__loader); (function(b, c) {
    "require" in this || b.mix(c, {
        INIT: 0,
        LOADING: 1,
        LOADED: 2,
        ERROR: 3,
        ATTACHED: 4
    })
})(KISSY, KISSY.__loaderData);
 (function(b, c, j) {
    if (! ("require" in this)) {
        var f = navigator.userAgent,
        i = document;
        b.mix(j, {
            docHead: function() {
                return i.getElementsByTagName("head")[0] || i.documentElement
            },
            isWebKit: !!f.match(/AppleWebKit/),
            IE: !!f.match(/MSIE/),
            isCss: function(a) {
                return /\.css(?:\?|$)/i.test(a)
            },
            isLinkNode: function(a) {
                return "link" == a.nodeName.toLowerCase()
            },
            normalizePath: function(a) {
                for (var a = a.split("/"), b = [], c, h = 0; h < a.length; h++) c = a[h],
                "." != c && (".." == c ? b.pop() : b.push(c));
                return b.join("/")
            },
            normalDepModuleName: function e(c, 
            k) {
                if (!k) return k;
                if (b.isArray(k)) {
                    for (var f = 0; f < k.length; f++) k[f] = e(c, k[f]);
                    return k
                }
                if (a(k, "../") || a(k, "./")) {
                    var f = "",
                    i;
                    if ( - 1 != (i = c.lastIndexOf("/"))) f = c.substring(0, i + 1);
                    return h(f + k)
                }
                return - 1 != k.indexOf("./") || -1 != k.indexOf("../") ? h(k) : k
            },
            removePostfix: function(a) {
                return a.replace(/(-min)?\.js[^/] * $ / i,
                "")
            },
            normalBasePath: function(e) { (e = b.trim(e)) && "/" != e.charAt(e.length - 1) && (e += "/"); ! e.match(/^(http(s)?)|(file):/i) && !a(e, "/") && (e = c.__pagePath + e);
                return h(e)
            },
            absoluteFilePath: function(a) {
                a = j.normalBasePath(a);
                return a.substring(0, a.length - 1)
            },
            indexMapping: function(a) {
                for (var b = 0; b < a.length; b++) a[b].match(/\/$/) && (a[b] += "index");
                return a
            }
        });
        var a = b.startsWith,
        h = j.normalizePath
    }
})(KISSY, KISSY.__loader, KISSY.__loaderUtils);
 (function(b, c) {
    function j() {
        for (var h in a) {
            var d = a[h],
            e = d.node,
            g = 0;
            if (c.isWebKit) e.sheet && (b.log("webkit loaded : " + h), g = 1);
            else if (e.sheet) try {
                e.sheet.cssRules && (b.log("firefox loaded : " + h), g = 1)
            } catch(k) {
                var l = k.name;
                b.log("firefox getStyle : " + l + " " + k.code + " " + h);
                if ("NS_ERROR_DOM_SECURITY_ERR" == l || "SecurityError" == l) b.log("firefox loaded : " + h),
                g = 1
            }
            if (g) {
                for (g = 0; g < d.length; g++) d[g].call(e);
                delete a[h]
            }
        }
        b.isEmptyObject(a) ? (i = 0, b.log("end css polling")) : i = setTimeout(j, f)
    }
    if (! ("require" in this)) {
        var f = 
        30,
        i = 0,
        a = {};
        b.mix(c, {
            scriptOnload: document.addEventListener ? 
            function(a, b) {
                if (c.isLinkNode(a)) return c.styleOnload(a, b);
                a.addEventListener("load", b, !1)
            }: function(a, b) {
                if (c.isLinkNode(a)) return c.styleOnload(a, b);
                var e = a.onreadystatechange;
                a.onreadystatechange = function() { / loaded | complete / i.test(a.readyState) && (a.onreadystatechange = null, e && e(), b.call(this))
                }
            },
            styleOnload: window.attachEvent || window.opera ? 
            function(a, d) {
                function c() {
                    a.detachEvent("onload", c);
                    b.log("ie/opera loaded : " + a.href);
                    d.call(a)
                }
                a.attachEvent("onload", c)
            }: function(c, d) {
                var e = c.href,
                e = a[e] = a[e] || [];
                e.node = c;
                e.push(d);
                i || (b.log("start css polling"), j())
            }
        })
    }
})(KISSY, KISSY.__loaderUtils);
 (function(b, c) {
    if (! ("require" in this)) {
        var j = c.scriptOnload;
        b.mix(b, {
            getStyle: function(f, i, a) {
                var h = document,
                d = c.docHead(),
                h = h.createElement("link"),
                e = i;
                b.isPlainObject(e) && (i = e.success, a = e.charset);
                h.href = f;
                h.rel = "stylesheet";
                a && (h.charset = a);
                i && c.scriptOnload(h, i);
                d.appendChild(h);
                return h
            },
            getScript: function(f, i, a) {
                function h() {
                    n && (n.cancel(), n = void 0)
                }
                if (c.isCss(f)) return b.getStyle(f, i, a);
                var d = document,
                e = d.head || d.getElementsByTagName("head")[0],
                g = d.createElement("script"),
                k = i,
                l,
                m,
                n;
                b.isPlainObject(k) && 
                (i = k.success, l = k.error, m = k.timeout, a = k.charset);
                g.src = f;
                g.async = !0;
                a && (g.charset = a);
                if (i || l) j(g, 
                function() {
                    h();
                    b.isFunction(i) && i.call(g)
                }),
                b.isFunction(l) && (d.addEventListener && g.addEventListener("error", 
                function() {
                    h();
                    l.call(g)
                },
                !1), n = b.later(function() {
                    n = void 0;
                    l()
                },
                1E3 * (m || this.Config.timeout)));
                e.insertBefore(g, e.firstChild);
                return g
            }
        })
    }
})(KISSY, KISSY.__loaderUtils);
 (function(b, c, j, f) {
    if (! ("require" in this)) {
        var i = j.IE,
        a = f.ATTACHED,
        h = b.mix;
        h(c, {
            add: function(d, c, g) {
                var k = this.Env.mods,
                f;
                b.isString(d) && !g && b.isPlainObject(c) && (f = {},
                f[d] = c, d = f);
                if (b.isPlainObject(d)) return b.each(d, 
                function(a, b) {
                    a.name = b;
                    k[b] && h(a, k[b], false)
                }),
                h(k, d),
                this;
                if (b.isString(d)) {
                    var m;
                    if (g && (m = g.host)) {
                        d = k[m];
                        if (!d) return b.log("module " + m + " can not be found !", "error"),
                        this;
                        this.__isAttached(m) ? c.call(this, this) : (d.fns = d.fns || [], d.fns.push(c));
                        return this
                    }
                    this.__registerModule(d, c, 
                    g);
                    if (g && !1 === g.attach) return this;
                    c = k[d];
                    d = j.normalDepModuleName(d, c.requires);
                    if (this.__isAttached(d)) this.__attachMod(c);
                    else if (this.Config.debug && !c) for (d = (m = b.makeArray(d)).length - 1; 0 <= d; d--) g = m[d],
                    (k[g] || {}).status !== a && b.log(c.name + " not attached when added : depends " + g);
                    return this
                }
                if (b.isFunction(d)) return g = c,
                c = d,
                i ? (d = this.__findModuleNameByInteractive(), b.log("old_ie get modname by interactive : " + d), this.__registerModule(d, c, g), this.__startLoadModuleName = null, this.__startLoadTime = 0) : 
                this.__currentModule = {
                    def: c,
                    config: g
                },
                this;
                b.log("invalid format for KISSY.add !", "error");
                return this
            }
        })
    }
})(KISSY, KISSY.__loader, KISSY.__loaderUtils, KISSY.__loaderData);
 (function(b, c, j, f) {
    "require" in this || b.mix(c, {
        __buildPath: function(b, a) {
            function c(h, k) {
                b[h + "__builded"] || (b[h + "__builded"] = 1, !b[h] && b[k] && (b[k] = j.normalDepModuleName(b.name, b[k]), b[h] = a + b[k]), b[h] && e.debug && (b[h] = b[h].replace(/-min/ig, "")), b[h] && !b[h].match(/\?t=/) && b.tag && (b[h] += "?t=" + b.tag), b[h] && (b[h] = d.__getMappedPath(b[h])))
            }
            var d = this,
            e = d.Config,
            a = a || e.base;
            c("fullpath", "path");
            b.cssfullpath !== f.LOADED && c("cssfullpath", "csspath")
        }
    })
})(KISSY, KISSY.__loader, KISSY.__loaderUtils, KISSY.__loaderData);
 (function(b, c) {
    "require" in this || b.mix(c, {
        __mixMod: function(c, f) {
            var i = this.Env.mods,
            a = f.Env.mods,
            h = i[c] || {},
            d = h.status;
            a[c] && (b.mix(h, b.clone(a[c])), d && (h.status = d));
            this.__buildPath(h, f.Config.base);
            i[c] = h
        }
    })
})(KISSY, KISSY.__loader);
 (function(b, c, j) {
    "require" in this || b.mix(c, {
        __findModuleNameByInteractive: function() {
            for (var c = document.getElementsByTagName("script"), i, a, h = 0; h < c.length; h++) if (a = c[h], "interactive" == a.readyState) {
                i = a;
                break
            }
            if (!i) return b.log("can not find interactive script,time diff : " + ( + new Date - this.__startLoadTime), "error"),
            b.log("old_ie get modname from cache : " + this.__startLoadModuleName),
            this.__startLoadModuleName;
            c = j.absoluteFilePath(i.src);
            this.Config.base = j.normalBasePath(this.Config.base);
            if (0 === c.lastIndexOf(this.Config.base, 
            0)) return j.removePostfix(c.substring(this.Config.base.length));
            i = this.Config.packages;
            var d;
            a = -1;
            for (var e in i) i.hasOwnProperty(e) && (h = i[e].path, i.hasOwnProperty(e) && 0 === c.lastIndexOf(h, 0) && h.length > a && (a = h.length, d = h));
            if (d) return j.removePostfix(c.substring(d.length));
            b.log("interactive script does not have package config \uff1a" + c, "error")
        }
    })
})(KISSY, KISSY.__loader, KISSY.__loaderUtils);
 (function(b, c, j, f) {
    if (! ("require" in this)) {
        var i = j.IE,
        a = f.LOADING,
        h = f.LOADED,
        d = f.ERROR,
        e = f.ATTACHED;
        b.mix(c, {
            __load: function(c, k, f) {
                function m() {
                    b.log(c.name + " is not loaded! can not find module in path : " + c.fullpath, "error");
                    c.status = d
                }
                function n() {
                    f.global && p.__mixMod(c.name, f.global)
                }
                function o() {
                    v[t] = h;
                    c.status !== d && (c.status !== e && (c.status = h), k())
                }
                var p = this,
                t = c.fullpath,
                q = j.isCss(t),
                v = b.Env._loadQueue,
                w = v[t],
                s = w;
                c.status = c.status || 0;
                c.status < a && w && (c.status = w === h ? h: a);
                b.isString(c.cssfullpath) && 
                (b.getScript(c.cssfullpath), c.cssfullpath = c.csspath = h);
                c.status < a && t ? (c.status = a, i && !q && (p.__startLoadModuleName = c.name, p.__startLoadTime = Number( + new Date)), s = b.getScript(t, {
                    success: function() {
                        if (!q) {
                            if (p.__currentModule) {
                                b.log("standard browser get modname after load : " + c.name);
                                p.__registerModule(c.name, p.__currentModule.def, p.__currentModule.config);
                                p.__currentModule = null
                            }
                            n();
                            c.fns && c.fns.length > 0 || m()
                        }
                        c.status != d && b.log(c.name + " is loaded.", "info");
                        o()
                    },
                    error: function() {
                        m();
                        o()
                    },
                    charset: c.charset
                }), 
                v[t] = s) : c.status === a ? j.scriptOnload(s, 
                function() {
                    n();
                    o()
                }) : (n(), k())
            }
        })
    }
})(KISSY, KISSY.__loader, KISSY.__loaderUtils, KISSY.__loaderData); (function(b, c, j) {
    if (! ("require" in this)) {
        var f = j.ATTACHED,
        j = b.mix;
        j(c, {
            __pagePath: location.href.replace(/#.*$/, "").replace(/[^/] * $ / i,
            ""), __currentModule: null, __startLoadTime: 0, __startLoadModuleName: null, __isAttached: function(c) {
                var a = this.Env.mods,
                h = !0;
                b.each(c, 
                function(b) {
                    b = a[b];
                    if (!b || b.status !== f) return h = !1
                });
                return h
            }
        })
    }
})(KISSY, KISSY.__loader, KISSY.__loaderData);
 (function(b, c, j) {
    "require" in this || (b.configs.packages = function(c) {
        var i;
        i = b.Config.packages = b.Config.packages || {};
        b.each(c, 
        function(a) {
            i[a.name] = a;
            a.path = a.path && j.normalBasePath(a.path);
            a.tag = a.tag && encodeURIComponent(a.tag)
        })
    },
    b.mix(c, {
        __getPackagePath: function(c) {
            if (c.packagepath) return c.packagepath;
            var i = b.__getCombinedMod(c.name),
            a = this.Config.packages || {},
            h = "",
            d;
            for (d in a) a.hasOwnProperty(d) && b.startsWith(i, d) && d.length > h.length && (h = d);
            i = a[h];
            c.charset = i && i.charset || c.charset;
            c.tag = i ? i.tag: 
            encodeURIComponent(b.Config.tag || b.buildTime);
            return c.packagepath = i && i.path || this.Config.base
        }
    }))
})(KISSY, KISSY.__loader, KISSY.__loaderUtils); (function(b, c, j) {
    if (! ("require" in this)) {
        var f = j.LOADED,
        i = b.mix;
        i(c, {
            __registerModule: function(a, c, d) {
                var d = d || {},
                e = this.Env.mods,
                g = e[a] || {};
                i(g, {
                    name: a,
                    status: f
                });
                g.fns && g.fns.length && b.log(a + " is defined more than once");
                g.fns = g.fns || [];
                g.fns.push(c);
                i(e[a] = g, d)
            }
        })
    }
})(KISSY, KISSY.__loader, KISSY.__loaderData);
 (function(b, c, j, f) {
    if (! ("require" in this)) {
        var i = f.LOADED,
        a = f.ATTACHED;
        b.mix(c, {
            use: function(a, c, e) {
                a = a.replace(/\s+/g, "").split(",");
                j.indexMapping(a);
                var e = e || {},
                g = this,
                k;
                if (g.__isAttached(a)) {
                    var f = g.__getModules(a);
                    c && c.apply(g, f)
                } else return b.each(a, 
                function(b) {
                    g.__attachModByName(b, 
                    function() {
                        if (!k && g.__isAttached(a)) {
                            k = !0;
                            var b = g.__getModules(a);
                            c && c.apply(g, b)
                        }
                    },
                    e)
                }),
                g
            },
            __getModules: function(a) {
                var c = this,
                e = [c];
                b.each(a, 
                function(a) {
                    j.isCss(a) || e.push(c.require(a))
                });
                return e
            },
            require: function(a) {
                var a = 
                this.Env.mods[a],
                b = this.onRequire && this.onRequire(a);
                return void 0 !== b ? b: a && a.value
            },
            __attachModByName: function(c, d, e) {
                var g = this.Env.mods,
                k = g[c];
                k || (k = {
                    path: (this.Config.componentJsName || 
                    function(a) {
                        var b = "js",
                        c;
                        if (c = a.match(/(.+)\.(js|css)$/i)) b = c[2],
                        a = c[1];
                        return a + "-min." + b
                    })(b.__getCombinedMod(c)),
                    charset: "utf-8"
                },
                g[c] = k);
                k.name = c;
                k && k.status === a || (e.global && this.__mixMod(c, e.global), this.__attach(k, d, e))
            },
            __attach: function(c, d, e) {
                function g() {
                    var a,
                    d = c.name,
                    e,
                    k,
                    f,
                    g,
                    i = c.requires;
                    a = c.__allRequires = 
                    c.__allRequires || {};
                    for (var j = 0; j < i.length; j++) if (e = i[j], f = t[e], a[e] = 1, f && (g = f.__allRequires)) for (k in g) g.hasOwnProperty(k) && (a[k] = 1);
                    if (a[d]) {
                        k = [];
                        for (e in a) a.hasOwnProperty(e) && k.push(e);
                        b.error("find cyclic dependency by mod " + d + " between mods : " + k.join(","))
                    }
                }
                function k() { ! p && f.__isAttached(c.requires) && (c.status === i && f.__attachMod(c), c.status === a && (p = 1, d()))
                }
                var f = this,
                m,
                n,
                o,
                p = 0,
                t = f.Env.mods,
                q = (c.requires || []).concat();
                c.requires = q;
                b.Config.debug && g();
                for (o = 0; o < q.length; o++) m = q[o] = j.normalDepModuleName(c.name, 
                q[o]),
                (n = t[m]) && n.status === a || f.__attachModByName(m, k, e);
                f.__buildPath(c, f.__getPackagePath(c));
                f.__load(c, 
                function() {
                    c.requires = c.requires || [];
                    var d = c.requires,
                    g = [];
                    for (o = 0; o < d.length; o++) {
                        m = d[o] = j.normalDepModuleName(c.name, d[o]);
                        var i = t[m],
                        n = b.inArray(m, q);
                        i && i.status === a || n || g.push(m)
                    }
                    if (g.length) for (o = 0; o < g.length; o++) f.__attachModByName(g[o], k, e);
                    else k()
                },
                e)
            },
            __attachMod: function(c) {
                var d = this,
                e = c.fns;
                e && b.each(e, 
                function(a) {
                    a = b.isFunction(a) ? a.apply(d, d.__getModules(c.requires)) : a;
                    c.value = 
                    c.value || a
                });
                c.status = a
            }
        })
    }
})(KISSY, KISSY.__loader, KISSY.__loaderUtils, KISSY.__loaderData);
 (function(b, c, j) {
    function f(c) {
        var d = j.absoluteFilePath(c.src),
        e = c.getAttribute("data-combo-prefix") || "??",
        c = c.getAttribute("data-combo-sep") || ",",
        c = d.split(c),
        f,
        k = c[0],
        e = k.indexOf(e); - 1 == e ? f = d.replace(i, "$1") : (f = k.substring(0, e), d = k.substring(e + 2, k.length), d.match(a) ? f += d.replace(i, "$1") : b.each(c, 
        function(c) {
            if (c.match(a)) {
                f = f + c.replace(i, "$1");
                return false
            }
        }));
        return f
    }
    if (! ("require" in this)) {
        b.mix(b, c);
        var i = /^(.*)(seed|kissy)(-aio)?(-min)?\.js[^/] * /i,a=/ (seed | kissy)( - aio) ? ( - min) ? \.js / i;
        b.__initLoader = 
        function() {
            this.Env.mods = this.Env.mods || {}
        };
        b.Env._loadQueue = {};
        b.__initLoader(); (function() {
            var a = document.getElementsByTagName("script"),
            a = f(a[a.length - 1]);
            b.Config.base = j.normalBasePath(a);
            b.Config.timeout = 10
        })();
        b.mix(b.configs, {
            base: function(a) {
                b.Config.base = j.normalBasePath(a)
            },
            timeout: function(a) {
                b.Config.timeout = a
            },
            debug: function(a) {
                b.Config.debug = a
            }
        });
        b.each(c, 
        function(a, c) {
            b.__APP_MEMBERS.push(c)
        });
        b.__APP_INIT_METHODS.push("__initLoader")
    }
})(KISSY, KISSY.__loader, KISSY.__loaderUtils);
 (function(b, c) {
    function j() {
        if (!h && (h = !0, d)) {
            for (var a, c = 0; a = d[c++];) a.call(f, b);
            d = null
        }
    }
    var f = b.__HOST,
    i = f.document,
    a = i.documentElement,
    h = !1,
    d = [],
    e = /^#?([\w-]+)$/,
    g = /\S/;
    b.mix(b, {
        isWindow: function(a) {
            return "object" === b.type(a) && "setInterval" in a && "document" in a && 9 == a.document.nodeType
        },
        parseXML: function(a) {
            var d;
            try {
                window.DOMParser ? d = (new DOMParser).parseFromString(a, "text/xml") : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(a))
            } catch(e) {
                b.log("parseXML error : "),
                b.log(e),
                d = 
                c
            } (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && b.error("Invalid XML: " + a);
            return d
        },
        globalEval: function(a) {
            a && g.test(a) && (window.execScript || 
            function(a) {
                window.eval.call(window, a)
            })(a)
        },
        ready: function(a) {
            h ? a.call(f, this) : d.push(a);
            return this
        },
        available: function(a, c) {
            if ((a = (a + "").match(e)[1]) && b.isFunction(c)) var d = 1,
            f,
            h = b.later(function() { ((f = i.getElementById(a)) && (c(f) || 1) || 500 < ++d) && h.cancel()
            },
            40, !0)
        }
    });
    if (location && -1 !== (location.search || "").indexOf("ks-debug")) b.Config.debug = 
    !0; (function() {
        var c = a.doScroll,
        d = i.addEventListener ? "DOMContentLoaded": "onreadystatechange",
        e = function() {
            j()
        };
        if ("complete" === i.readyState) j();
        else {
            if (i.addEventListener) {
                var h = function() {
                    i.removeEventListener(d, h, !1);
                    j()
                };
                i.addEventListener(d, h, !1);
                f.addEventListener("load", e, !1)
            } else {
                var g = function() {
                    "complete" === i.readyState && (i.detachEvent(d, g), j())
                };
                i.attachEvent(d, g);
                f.attachEvent("onload", e);
                e = !1;
                try {
                    e = null === f.frameElement
                } catch(p) {
                    b.log("frameElement error : "),
                    b.log(p)
                }
                if (c && e) {
                    var t = function() {
                        try {
                            c("left"),
                            j()
                        } catch(a) {
                            setTimeout(t, 40)
                        }
                    };
                    t()
                }
            }
            return 0
        }
    })()
})(KISSY, void 0); (function(b) {
    b.config({
        combines: {
            core: "dom,ua,event,node,json,ajax,anim,base,cookie".split(",")
        }
    })
})(KISSY);
KISSY.add("ua/base", 
function() {
    var b = navigator.userAgent,
    c = "",
    j = "",
    f,
    i = [6, 9],
    a = document.createElement("div"),
    h,
    d = {},
    e = function(a) {
        var c = 0;
        return parseFloat(a.replace(/\./g, 
        function() {
            return 0 === c++?".": ""
        }))
    };
    a.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", "");
    h = a.getElementsByTagName("s");
    if (0 < h.length) {
        j = "ie";
        d[c = "trident"] = 0.1;
        if ((f = b.match(/Trident\/([\d.]*)/)) && f[1]) d[c] = e(f[1]);
        b = i[0];
        for (i = i[1]; b <= i; b++) if (a.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", 
        b), 0 < h.length) {
            d[j] = b;
            break
        }
    } else if ((f = b.match(/AppleWebKit\/([\d.]*)/)) && f[1]) {
        d[c = "webkit"] = e(f[1]);
        if ((f = b.match(/Chrome\/([\d.]*)/)) && f[1]) d[j = "chrome"] = e(f[1]);
        else if ((f = b.match(/\/([\d.]*) Safari/)) && f[1]) d[j = "safari"] = e(f[1]);
        if (/ Mobile\//.test(b)) d.mobile = "apple";
        else if (f = b.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) d.mobile = f[0].toLowerCase()
    } else if ((f = b.match(/Presto\/([\d.]*)/)) && f[1]) {
        if (d[c = "presto"] = e(f[1]), (f = b.match(/Opera\/([\d.]*)/)) && f[1]) {
            d[j = "opera"] = e(f[1]);
            if ((f = 
            b.match(/Opera\/.* Version\/([\d.]*)/)) && f[1]) d[j] = e(f[1]);
            if ((f = b.match(/Opera Mini[^;]*/)) && f) d.mobile = f[0].toLowerCase();
            else if ((f = b.match(/Opera Mobi[^;]*/)) && f) d.mobile = f[0]
        }
    } else if ((f = b.match(/MSIE\s([^;]*)/)) && f[1]) {
        if (d[c = "trident"] = 0.1, d[j = "ie"] = e(f[1]), (f = b.match(/Trident\/([\d.]*)/)) && f[1]) d[c] = e(f[1])
    } else if (f = b.match(/Gecko/)) {
        d[c = "gecko"] = 0.1;
        if ((f = b.match(/rv:([\d.]*)/)) && f[1]) d[c] = e(f[1]);
        if ((f = b.match(/Firefox\/([\d.]*)/)) && f[1]) d[j = "firefox"] = e(f[1])
    }
    d.core = c;
    d.shell = j;
    d._numberify = 
    e;
    return d
});KISSY.add("ua/extra", 
function(b, c) {
    var j = navigator.userAgent,
    f,
    i,
    a = {},
    h = c._numberify;
    if (j.match(/360SE/)) a[i = "se360"] = 3;
    else if (j.match(/Maxthon/) && (f = window.external)) {
        i = "maxthon";
        try {
            a[i] = h(f.max_version)
        } catch(d) {
            a[i] = 0.1
        }
    } else if (f = j.match(/TencentTraveler\s([\d.]*)/)) a[i = "tt"] = f[1] ? h(f[1]) : 0.1;
    else if (j.match(/TheWorld/)) a[i = "theworld"] = 3;
    else if (f = j.match(/SE\s([\d.]*)/)) a[i = "sougou"] = f[1] ? h(f[1]) : 0.1;
    i && (a.shell = i);
    b.mix(c, a);
    return c
},
{
    requires: ["ua/base"]
});
KISSY.add("ua", 
function(b, c) {
    return c
},
{
    requires: ["ua/extra"]
});
KISSY.add("dom/base", 
function(b, c, j) {
    function f(a, c) {
        return a && a.nodeType === c
    }
    var i = {
        ELEMENT_NODE: 1,
        ATTRIBUTE_NODE: 2,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        ENTITY_REFERENCE_NODE: 5,
        ENTITY_NODE: 6,
        PROCESSING_INSTRUCTION_NODE: 7,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9,
        DOCUMENT_TYPE_NODE: 10,
        DOCUMENT_FRAGMENT_NODE: 11,
        NOTATION_NODE: 12
    },
    a = {
        _isCustomDomain: function(a) {
            var a = a || window,
            c = a.document.domain,
            a = a.location.hostname;
            return c != a && c != "[" + a + "]"
        },
        _genEmptyIframeSrc: function(b) {
            b = b || window;
            if (c.ie && a._isCustomDomain(b)) return "javascript:void(function(){" + 
            encodeURIComponent("document.open();document.domain='" + b.document.domain + "';document.close();") + "}())"
        },
        _NODE_TYPE: i,
        _isElementNode: function(c) {
            return f(c, a.ELEMENT_NODE)
        },
        _getWin: function(c) {
            return c && "scrollTo" in c && c.document ? c: f(c, a.DOCUMENT_NODE) ? c.defaultView || c.parentWindow: c === j || null === c ? window: !1
        },
        _nodeTypeIs: f,
        _isNodeList: function(a) {
            return a && !a.nodeType && a.item && !a.setTimeout
        },
        _nodeName: function(a, c) {
            return a && a.nodeName.toLowerCase() === c.toLowerCase()
        }
    };
    b.mix(a, i);
    return a
},
{
    requires: ["ua"]
});
KISSY.add("dom/attr", 
function(b, c, j, f) {
    function i(a, c) {
        var c = q[c] || c,
        b = w[c];
        return b && b.get ? b.get(a, c) : a[c]
    }
    var j = document.documentElement,
    a = !j.hasAttribute,
    h = j.textContent === f ? "innerText": "textContent",
    d = c._nodeName,
    e = c._isElementNode,
    g = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    k = /^(?:button|input|object|select|textarea)$/i,
    l = /^a(?:rea)?$/i,
    m = /:|^on/,
    n = /\r/g,
    o = {},
    p = {
        val: 1,
        css: 1,
        html: 1,
        text: 1,
        data: 1,
        width: 1,
        height: 1,
        offset: 1,
        scrollTop: 1,
        scrollLeft: 1
    },
    t = {
        tabindex: {
            get: function(a) {
                var c = a.getAttributeNode("tabindex");
                return c && c.specified ? parseInt(c.value, 10) : k.test(a.nodeName) || l.test(a.nodeName) && a.href ? 0: f
            }
        },
        style: {
            get: function(a) {
                return a.style.cssText
            },
            set: function(a, c) {
                a.style.cssText = c
            }
        }
    },
    q = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    },
    v = {
        get: function(a, b) {
            return c.prop(a, b) ? b.toLowerCase() : f
        },
        set: function(a, b, d) { ! 1 === b ? c.removeAttr(a, d) : (b = q[d] || d, b in a && (a[b] = !0), a.setAttribute(d, d.toLowerCase()));
            return d
        }
    },
    w = {},
    s = {},
    r = {
        option: {
            get: function(a) {
                var c = a.attributes.value;
                return ! c || c.specified ? a.value: a.text
            }
        },
        select: {
            get: function(a) {
                var b = a.selectedIndex,
                d = a.options;
                if (0 > b) return null;
                if ("select-one" === a.type) return c.val(d[b]);
                for (var a = [], b = 0, e = d.length; b < e; ++b) d[b].selected && a.push(c.val(d[b]));
                return a
            },
            set: function(a, d) {
                var e = b.makeArray(d);
                b.each(a.options, 
                function(a) {
                    a.selected = b.inArray(c.val(a), e)
                });
                e.length || (a.selectedIndex = -1);
                return e
            }
        }
    };
    a && (s = {
        get: function(a, c) {
            var b;
            return (b = a.getAttributeNode(c)) && "" !== b.nodeValue ? b.nodeValue: f
        },
        set: function(a, c, b) {
            var d = a.getAttributeNode(b);
            if (d) d.nodeValue = c;
            else try {
                var e = a.ownerDocument.createAttribute(b);
                e.value = c;
                a.setAttributeNode(e)
            } catch(f) {
                return a.setAttribute(b, c, 0)
            }
        }
    },
    o = q, t.tabIndex = t.tabindex, b.each("href,src,width,height,colSpan,rowSpan".split(","), 
    function(a) {
        t[a] = {
            get: function(c) {
                c = c.getAttribute(a, 2);
                return c === null ? f: c
            }
        }
    }), r.button = t.value = s);
    b.each(["radio", "checkbox"], 
    function(a) {
        r[a] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on": a.value
            },
            set: function(a, d) {
                if (b.isArray(d)) return a.checked = b.inArray(c.val(a), d)
            }
        }
    });
    b.mix(c, {
        prop: function(a, d, e) {
            if (b.isPlainObject(d)) for (var k in d) c.prop(a, k, d[k]);
            else {
                var a = c.query(a),
                d = q[d] || d,
                g = w[d];
                if (e !== f) a.each(function(a) {
                    g && g.set ? g.set(a, e, d) : a[d] = e
                });
                else if (a.length) return i(a[0], 
                d)
            }
        },
        hasProp: function(a, b) {
            for (var d = c.query(a), e = 0; e < d.length; e++) if (i(d[e], b) !== f) return true;
            return false
        },
        removeProp: function(a, d) {
            d = q[d] || d;
            c.query(a).each(function(a) {
                try {
                    a[d] = f;
                    delete a[d]
                } catch(c) {
                    b.log("delete el property error : ");
                    b.log(c)
                }
            })
        },
        attr: function(a, d, e, k) {
            if (b.isPlainObject(d)) {
                var k = e,
                g;
                for (g in d) c.attr(a, g, d[g], k)
            } else if (d = b.trim(d)) {
                if (k && p[d]) return c[d](a, e);
                d = d.toLowerCase();
                if (k && p[d]) return c[d](a, e);
                a = c.query(a);
                if (e === f) return c.__attr(a[0], d);
                a.each(function(a) {
                    c.__attr(a, 
                    d, e)
                })
            }
        },
        __attr: function(a, c, b) {
            if (e(a)) {
                var c = o[c] || c,
                k;
                k = d(a, "form") ? s: g.test(c) ? v: m.test(c) ? s: t[c];
                if (b === f) {
                    if (k && k.get) return k.get(a, c);
                    a = a.getAttribute(c);
                    return a === null ? f: a
                }
                k && k.set ? k.set(a, b, c) : a.setAttribute(c, "" + b)
            }
        },
        removeAttr: function(a, b) {
            b = b.toLowerCase();
            b = o[b] || b;
            c.query(a).each(function(a) {
                if (e(a)) {
                    var c;
                    a.removeAttribute(b);
                    if (g.test(b) && (c = q[b] || b) in a) a[c] = false
                }
            })
        },
        hasAttr: a ? 
        function(a, b) {
            for (var b = b.toLowerCase(), d = c.query(a), e = 0; e < d.length; e++) {
                var f = d[e].getAttributeNode(b);
                if (f && f.specified) return true
            }
            return false
        }: function(a, b) {
            for (var d = c.query(a), e = 0; e < d.length; e++) if (d[e].hasAttribute(b)) return true;
            return false
        },
        val: function(a, d) {
            var e,
            k;
            if (d === f) {
                var g = c.get(a);
                if (g) {
                    if ((e = r[g.nodeName.toLowerCase()] || r[g.type]) && "get" in e && (k = e.get(g, "value")) !== f) return k;
                    k = g.value;
                    return typeof k === "string" ? k.replace(n, "") : b.isNullOrUndefined(k) ? "": k
                }
            } else c.query(a).each(function(a) {
                if (a.nodeType === 1) {
                    var c = d;
                    b.isNullOrUndefined(c) ? c = "": typeof c === "number" ? c = c + "": b.isArray(c) && 
                    (c = b.map(c, 
                    function(a) {
                        return b.isNullOrUndefined(c) ? "": a + ""
                    }));
                    e = r[a.nodeName.toLowerCase()] || r[a.type];
                    if (!e || !("set" in e) || e.set(a, c, "value") === f) a.value = c
                }
            })
        },
        text: function(a, b) {
            if (b === f) {
                var d = c.get(a);
                return e(d) ? d[h] || "": c._nodeTypeIs(d, c.TEXT_NODE) ? d.nodeValue: f
            }
            c.query(a).each(function(a) {
                if (e(a)) a[h] = b;
                else if (c._nodeTypeIs(a, c.TEXT_NODE)) a.nodeValue = b
            })
        }
    });
    return c
},
{
    requires: ["./base", "ua"]
});
KISSY.add("dom/class", 
function(b, c, j) {
    function f(c) {
        return (a + c + a).replace(d, a)
    }
    function i(a, d, f, i) {
        if (! (d = b.trim(d))) return i ? !1: j;
        for (var a = c.query(a), m = a.length, n = d.split(h), d = [], o = 0; o < n.length; o++) {
            var p = b.trim(n[o]);
            p && d.push(p)
        }
        for (o = 0; o < m; o++) if (n = a[o], c._isElementNode(n) && (n = f(n, d, d.length), n !== j)) return n;
        return i ? !1: j
    }
    var a = " ",
    h = /[\.\s]\s*\.?/,
    d = /[\n\t]/g;
    b.mix(c, {
        __hasClass: function(c, b) {
            var d = c.className;
            return d ? (d = f(d), -1 < d.indexOf(a + b + a)) : !1
        },
        hasClass: function(c, b) {
            return i(c, b, 
            function(c, 
            b, d) {
                if (c = c.className) {
                    for (var c = f(c), e = 0, g = !0; e < d; e++) if (0 > c.indexOf(a + b[e] + a)) {
                        g = !1;
                        break
                    }
                    if (g) return ! 0
                }
            },
            !0)
        },
        addClass: function(c, d) {
            i(c, d, 
            function(c, e, h) {
                var i = c.className;
                if (i) {
                    for (var j = f(i), p = 0; p < h; p++) 0 > j.indexOf(a + e[p] + a) && (i += a + e[p]);
                    c.className = b.trim(i)
                } else c.className = d
            },
            j)
        },
        removeClass: function(c, d) {
            i(c, d, 
            function(c, d, e) {
                var g = c.className;
                if (g) if (e) {
                    for (var g = f(g), h = 0, i; h < e; h++) for (i = a + d[h] + a; 0 <= g.indexOf(i);) g = g.replace(i, a);
                    c.className = b.trim(g)
                } else c.className = ""
            },
            j)
        },
        replaceClass: function(a, 
        b, d) {
            c.removeClass(a, b);
            c.addClass(a, d)
        },
        toggleClass: function(a, d, f) {
            var h = b.isBoolean(f),
            m;
            i(a, d, 
            function(a, b, d) {
                for (var e = 0, g; e < d; e++) g = b[e],
                m = h ? !f: c.hasClass(a, g),
                c[m ? "removeClass": "addClass"](a, g)
            },
            j)
        }
    });
    return c
},
{
    requires: ["dom/base"]
});
KISSY.add("dom/create", 
function(b, c, j, f) {
    function i(a) {
        var d = b.require("event");
        d && d.detach(a);
        c.removeData(a)
    }
    function a(b, d, e) {
        if (k(d, c.DOCUMENT_FRAGMENT_NODE)) for (var d = d.childNodes, e = e.childNodes, f = 0; d[f];) e[f] && a(b, d[f], e[f]),
        f++;
        else if (l(d)) {
            d = d.getElementsByTagName("*");
            e = e.getElementsByTagName("*");
            for (f = 0; d[f];) e[f] && b(d[f], e[f]),
            f++
        }
    }
    function h(a, d) {
        var e = b.require("event");
        if (!l(d) || c.hasData(a)) {
            var f = c.data(a),
            g;
            for (g in f) c.data(d, g, f[g]);
            e && (e._removeData(d), e._clone(a, d))
        }
    }
    function d(a, 
    b) {
        b.clearAttributes && b.clearAttributes();
        b.mergeAttributes && b.mergeAttributes(a);
        var d = b.nodeName.toLowerCase(),
        e = a.childNodes;
        if ("object" === d && !b.childNodes.length) for (d = 0; d < e.length; d++) b.appendChild(e[d].cloneNode(!0));
        else if ("input" === d && ("checkbox" === a.type || "radio" === a.type)) {
            if (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value) b.value = a.value
        } else if ("option" === d) b.selected = a.defaultSelected;
        else if ("input" === d || "textarea" === d) b.defaultValue = a.defaultValue;
        b.removeAttribute(c.__EXPANDO)
    }
    function e(a, c) {
        var d = null,
        e,
        f;
        if (a && (a.push || a.item) && a[0]) {
            c = c || a[0].ownerDocument;
            d = c.createDocumentFragment();
            a = b.makeArray(a);
            e = 0;
            for (f = a.length; e < f; e++) d.appendChild(a[e])
        } else b.log("Unable to convert " + a + " to fragment.");
        return d
    }
    var g = document,
    j = j.ie,
    k = c._nodeTypeIs,
    l = c._isElementNode,
    m = b.isString,
    n = g.createElement("div"),
    o = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    p = /<([\w:]+)/,
    t = /^\s+/,
    q = j && 9 > j,
    v = /<|&#?\w+;/,
    w = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    b.mix(c, {
        create: function(a, 
        d, h, i) {
            if (l(a) || k(a, c.TEXT_NODE)) return c.clone(a);
            var j = null;
            if (!m(a)) return j;
            i === f && (i = !0);
            i && (a = b.trim(a));
            if (!a) return j;
            var i = c._creators,
            n,
            y,
            h = h || g,
            s,
            x = "div";
            if (v.test(a)) if (s = w.exec(a)) j = h.createElement(s[1]);
            else {
                a = a.replace(o, "<$1></$2>");
                if ((s = p.exec(a)) && (n = s[1])) x = n.toLowerCase();
                n = (i[x] || i.div)(a, h);
                q && (y = a.match(t)) && n.insertBefore(h.createTextNode(y[0]), n.firstChild);
                y = n.childNodes;
                1 === y.length ? j = y[0].parentNode.removeChild(y[0]) : y.length ? j = e(y, h) : b.error(a + " : create node error")
            } else j = 
            h.createTextNode(a);
            a = j;
            b.isPlainObject(d) && (l(a) ? c.attr(a, d, !0) : k(a, c.DOCUMENT_FRAGMENT_NODE) && c.attr(a.childNodes, d, !0));
            return a
        },
        _creators: {
            div: function(a, c) {
                var b = c && c != g ? c.createElement("div") : n;
                b.innerHTML = "m<div>" + a + "</div>";
                return b.lastChild
            }
        },
        html: function(a, b, d, e) {
            var a = c.query(a),
            g = a[0];
            if (g) {
                if (b === f) return l(g) ? g.innerHTML: null;
                var h = !1,
                b = b + "";
                if (!b.match(/<(?:script|style)/i) && (!q || !b.match(t)) && !x[(b.match(p) || ["", ""])[1].toLowerCase()]) try {
                    a.each(function(a) {
                        l(a) && (i(a.getElementsByTagName("*")), 
                        a.innerHTML = b)
                    }),
                    h = !0
                } catch(k) {}
                h || (b = c.create(b, 0, g.ownerDocument, !1), a.each(function(a) {
                    l(a) && (c.empty(a), c.append(b, a, d))
                }));
                e && e()
            }
        },
        remove: function(a, b) {
            c.query(a).each(function(a) {
                if (!b && l(a)) {
                    var c = a.getElementsByTagName("*");
                    i(c);
                    i(a)
                }
                a.parentNode && a.parentNode.removeChild(a)
            })
        },
        clone: function(b, e, f, g) {
            b = c.get(b);
            if (!b) return null;
            var i = b.cloneNode(e);
            if (l(b) || k(b, c.DOCUMENT_FRAGMENT_NODE)) l(b) && d(b, i),
            e && a(d, b, i);
            f && (h(b, i), e && g && a(h, b, i));
            return i
        },
        empty: function(a) {
            c.query(a).each(function(a) {
                c.remove(a.childNodes)
            })
        },
        _nl2frag: e
    });
    var s = c._creators,
    r = c.create,
    u = /(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,
    x = {
        option: "select",
        optgroup: "select",
        area: "map",
        thead: "table",
        td: "tr",
        th: "tr",
        tr: "tbody",
        tbody: "table",
        tfoot: "table",
        caption: "table",
        colgroup: "table",
        col: "colgroup",
        legend: "fieldset"
    },
    y;
    for (y in x)(function(a) {
        s[y] = function(c, b) {
            return r("<" + a + ">" + c + "</" + a + ">", null, b)
        }
    })(x[y]);
    8 > j && (s.tbody = function(a, c) {
        var b = r("<table>" + a + "</table>", null, c),
        d = b.children.tags("tbody")[0];
        1 < b.children.length && d && !u.test(a) && 
        d.parentNode.removeChild(d);
        return b
    });
    b.mix(s, {
        thead: s.tbody,
        tfoot: s.tbody,
        caption: s.tbody,
        colgroup: s.tbody
    });
    return c
},
{
    requires: ["./base", "ua"]
});
KISSY.add("dom/data", 
function(b, c, j) {
    var f = window,
    i = "_ks_data_" + b.now(),
    a = {},
    h = {},
    d = {
        applet: 1,
        object: 1,
        embed: 1
    },
    e = {
        hasData: function(a, c) {
            if (a) if (c !== j) {
                if (c in a) return ! 0
            } else if (!b.isEmptyObject(a)) return ! 0;
            return ! 1
        }
    },
    g = {
        hasData: function(a, c) {
            return a == f ? g.hasData(h, c) : e.hasData(a[i], c)
        },
        data: function(a, c, b) {
            if (a == f) return g.data(h, c, b);
            var d = a[i];
            if (b !== j) d = a[i] = a[i] || {},
            d[c] = b;
            else return c !== j ? d && d[c] : d = a[i] = a[i] || {}
        },
        removeData: function(a, c) {
            if (a == f) return g.removeData(h, c);
            var d = a[i];
            if (c !== 
            j) delete d[c],
            b.isEmptyObject(d) && g.removeData(a);
            else try {
                delete a[i]
            } catch(e) {
                a[i] = j
            }
        }
    },
    k = {
        hasData: function(c, b) {
            var d = c[i];
            return ! d ? !1: e.hasData(a[d], b)
        },
        data: function(c, e, f) {
            if (d[c.nodeName.toLowerCase()]) return j;
            var g = c[i];
            if (!g) {
                if (e !== j && f === j) return j;
                g = c[i] = b.guid()
            }
            c = a[g];
            if (f !== j) c = a[g] = a[g] || {},
            c[e] = f;
            else return e !== j ? c && c[e] : c = a[g] = a[g] || {}
        },
        removeData: function(c, d) {
            var e = c[i],
            f;
            if (e) if (f = a[e], d !== j) delete f[d],
            b.isEmptyObject(f) && k.removeData(c);
            else {
                delete a[e];
                try {
                    delete c[i]
                } catch(g) {
                    c[i] = 
                    j
                }
                c.removeAttribute && c.removeAttribute(i)
            }
        }
    };
    b.mix(c, {
        __EXPANDO: i,
        hasData: function(a, b) {
            for (var d = !1, e = c.query(a), f = 0; f < e.length && !(d = (d = e[f]) && d.nodeType ? k.hasData(d, b) : g.hasData(d, b)); f++);
            return d
        },
        data: function(a, d, e) {
            if (b.isPlainObject(d)) {
                for (var f in d) c.data(a, f, d[f]);
                return j
            }
            if (e === j) {
                if ((a = c.get(a)) && a.nodeType) return k.data(a, d, e);
                if (a) return g.data(a, d, e)
            } else c.query(a).each(function(a) {
                a && a.nodeType ? k.data(a, d, e) : g.data(a, d, e)
            });
            return j
        },
        removeData: function(a, b) {
            c.query(a).each(function(a) {
                a && 
                a.nodeType ? k.removeData(a, b) : g.removeData(a, b)
            })
        }
    });
    return c
},
{
    requires: ["./base"]
});
KISSY.add("dom/insertion", 
function(b, c, j) {
    function f(a) {
        for (var c = 0; c < a.length; c++) {
            var b = a[c];
            if (b.nodeType == j.DOCUMENT_FRAGMENT_NODE) f(b.childNodes);
            else if (e(b, "input")) {
                if ("checkbox" === b.type || "radio" === b.type) b.defaultChecked = b.checked
            } else if (k(b)) for (var b = b.getElementsByTagName("input"), d = 0; d < b.length; d++) f(b[d])
        }
    }
    function i(a, c) {
        var b = [],
        e,
        f,
        h;
        for (e = 0; a[e]; e++) if (f = a[e], h = f.nodeName.toLowerCase(), f.nodeType == j.DOCUMENT_FRAGMENT_NODE) b.push.apply(b, i(g(f.childNodes), c));
        else if ("script" === 
        h && (!f.type || l.test(f.type))) f.parentNode && f.parentNode.removeChild(f),
        c && c.push(f);
        else {
            if (k(f) && !d.test(h)) {
                h = [];
                var n,
                m,
                u = f.getElementsByTagName("script");
                for (m = 0; m < u.length; m++) n = u[m],
                (!n.type || l.test(n.type)) && h.push(n);
                a.splice.apply(a, [e + 1, 0].concat(h))
            }
            b.push(f)
        }
        return b
    }
    function a(a) {
        a.src ? b.getScript(a.src) : (a = b.trim(a.text || a.textContent || a.innerHTML || "")) && b.globalEval(a)
    }
    function h(d, e, g, h) {
        d = j.query(d);
        h && (h = []);
        d = i(d, h);
        8 > c.ie && f(d);
        var e = j.query(e),
        k = d.length,
        l = e.length;
        if ((k || h && 
        h.length) && l) {
            var d = j._nl2frag(d),
            n;
            1 < l && (n = j.clone(d, !0));
            for (var m = 0; m < l; m++) {
                var u = e[m];
                if (k) {
                    var x = 0 < m ? j.clone(n, !0) : d;
                    g(x, u)
                }
                h && h.length && b.each(h, a)
            }
        }
    }
    var d = /^(?:button|input|object|select|textarea)$/i,
    e = j._nodeName,
    g = b.makeArray,
    k = j._isElementNode,
    l = /\/(java|ecma)script/i;
    b.mix(j, {
        insertBefore: function(a, c, b) {
            h(a, c, 
            function(a, c) {
                c.parentNode && c.parentNode.insertBefore(a, c)
            },
            b)
        },
        insertAfter: function(a, c, b) {
            h(a, c, 
            function(a, c) {
                c.parentNode && c.parentNode.insertBefore(a, c.nextSibling)
            },
            b)
        },
        appendTo: function(a, 
        c, b) {
            h(a, c, 
            function(a, c) {
                c.appendChild(a)
            },
            b)
        },
        prependTo: function(a, c, b) {
            h(a, c, 
            function(a, c) {
                c.insertBefore(a, c.firstChild)
            },
            b)
        }
    });
    var m = {
        prepend: "prependTo",
        append: "appendTo",
        before: "insertBefore",
        after: "insertAfter"
    },
    n;
    for (n in m) j[n] = j[m[n]];
    return j
},
{
    requires: ["ua", "./create"]
});
KISSY.add("dom/offset", 
function(b, c, j, f) {
    function i(a) {
        var b,
        f = 0;
        b = 0;
        var h = d.body,
        k = m(a[t]);
        a[u] && (b = a[u](), f = b[q], b = b[v], a = e && 9 != d.documentMode && (n ? g.clientTop: h.clientTop) || 0, f -= e && 9 != d.documentMode && (n ? g.clientLeft: h.clientLeft) || 0, b -= a, "apple" == j.mobile && (f -= c[s](k), b -= c[r](k)));
        return {
            left: f,
            top: b
        }
    }
    function a(a, b) {
        var d = {
            left: 0,
            top: 0
        },
        e = m(a[t]),
        f = a,
        b = b || e;
        do {
            var g;
            if (e == b) {
                var h = f;
                g = i(h);
                h = m(h[t]);
                g.left += c[s](h);
                g.top += c[r](h)
            } else g = i(f);
            d.left += g.left;
            d.top += g.top
        }
        while (e && e != b && (f = e.frameElement) && 
        (e = e.parent));
        return d
    }
    var h = window,
    d = document,
    e = j.ie,
    g = d.documentElement,
    k = c._isElementNode,
    l = c._nodeTypeIs,
    m = c._getWin,
    n = "CSS1Compat" === d.compatMode,
    o = Math.max,
    p = parseInt,
    t = "ownerDocument",
    q = "left",
    v = "top",
    w = b.isNumber,
    s = "scrollLeft",
    r = "scrollTop",
    u = "getBoundingClientRect";
    b.mix(c, {
        offset: function(b, d, e) {
            if (d === f) {
                var b = c.get(b),
                g;
                b && (g = a(b, e));
                return g
            }
            c.query(b).each(function(b) {
                "static" === c.css(b, "position") && (b.style.position = "relative");
                var e = a(b),
                f = {},
                g,
                h;
                for (h in d) g = p(c.css(b, h), 10) || 0,
                f[h] = g + d[h] - e[h];
                c.css(b, f)
            })
        },
        scrollIntoView: function(a, b, d, e, g) {
            var h,
            k;
            if (a = c.get(a)) {
                b && (b = c.get(b));
                b || (b = a.ownerDocument); ! 0 !== g && (e = e === f ? !0: !!e, d = d === f ? !0: !!d);
                l(b, c.DOCUMENT_NODE) && (b = m(b));
                k = !!m(b);
                var g = c.offset(a),
                i = c.outerHeight(a);
                h = c.outerWidth(a);
                var j,
                n,
                o,
                s;
                k ? (a = b, j = c.height(a), n = c.width(a), s = {
                    left: c.scrollLeft(a),
                    top: c.scrollTop(a)
                },
                a = g[q] - s[q], k = g[v] - s[v], h = g[q] + h - (s[q] + n), g = g[v] + i - (s[v] + j)) : (j = c.offset(b), n = b.clientHeight, o = b.clientWidth, s = {
                    left: c.scrollLeft(b),
                    top: c.scrollTop(b)
                },
                a = g[q] - j[q] - (p(c.css(b, "borderLeftWidth")) || 0), k = g[v] - j[v] - (p(c.css(b, "borderTopWidth")) || 0), h = g[q] + h - (j[q] + o + (p(c.css(b, "borderRightWidth")) || 0)), g = g[v] + i - (j[v] + n + (p(c.css(b, "borderBottomWidth")) || 0)));
                if (0 > k || 0 < g) ! 0 === d ? c.scrollTop(b, s.top + k) : !1 === d ? c.scrollTop(b, s.top + g) : 0 > k ? c.scrollTop(b, s.top + k) : c.scrollTop(b, s.top + g);
                if (e && (0 > a || 0 < h)) ! 0 === d ? c.scrollLeft(b, s.left + a) : !1 === d ? c.scrollLeft(b, s.left + h) : 0 > a ? c.scrollLeft(b, s.left + a) : c.scrollLeft(b, s.left + h)
            }
        },
        docWidth: 0,
        docHeight: 0,
        viewportHeight: 0,
        viewportWidth: 0
    });
    b.each(["Left", "Top"], 
    function(a, b) {
        var d = "scroll" + a;
        c[d] = function(e, g) {
            if (w(e)) return arguments.callee(h, e);
            var e = c.get(e),
            i,
            j = m(e);
            if (j) if (g !== f) {
                var g = parseFloat(g),
                l = "Left" == a ? g: c.scrollLeft(j),
                n = "Top" == a ? g: c.scrollTop(j);
                j.scrollTo(l, n)
            } else i = j["page" + (b ? "Y": "X") + "Offset"],
            w(i) || (j = j.document, i = j.documentElement[d], w(i) || (i = j.body[d]));
            else k(e) && (g !== f ? e[d] = parseFloat(g) : i = e[d]);
            return i
        }
    });
    b.each(["Width", "Height"], 
    function(a) {
        c["doc" + a] = function(b) {
            b = c.get(b);
            b = m(b).document;
            return o(b.documentElement["scroll" + a], b.body["scroll" + a], c["viewport" + a](b))
        };
        c["viewport" + a] = function(b) {
            var b = c.get(b),
            d = "client" + a,
            b = m(b).document,
            e = b.body,
            f = b.documentElement[d];
            return "CSS1Compat" === b.compatMode && f || e && e[d] || f
        }
    });
    return c
},
{
    requires: ["./base", "ua"]
});
KISSY.add("dom/style", 
function(b, c, j, f) {
    function i(a) {
        return a.replace(q, v)
    }
    function a(a, b, c) {
        var d = {},
        e;
        for (e in b) d[e] = a[l][e],
        a[l][e] = b[e];
        c.call(a);
        for (e in b) a[l][e] = d[e]
    }
    function h(a, c, d) {
        var e;
        if (3 === a.nodeType || 8 === a.nodeType || !(e = a[l])) return f;
        var c = i(c),
        g,
        h = u[c],
        c = x[c] || c;
        if (d !== f) {
            null === d || d === s ? d = s: !isNaN(Number(d)) && !t[c] && (d += r);
            h && h.set && (d = h.set(a, d));
            if (d !== f) try {
                a[l][c] = d
            } catch(k) {
                b.log("css set error :" + k)
            }
            return f
        }
        if (!h || !("get" in h && (g = h.get(a, !1)) !== f)) g = e[c];
        return g === f ? 
        "": g
    }
    function d(a, d, e) {
        if (b.isWindow(a)) return d == m ? c.viewportWidth(a) : c.viewportHeight(a);
        if (9 == a.nodeType) return d == m ? c.docWidth(a) : c.docHeight(a);
        var f = d === m ? ["Left", "Right"] : ["Top", "Bottom"],
        g = d === m ? a.offsetWidth: a.offsetHeight;
        if (0 < g) return "border" !== e && b.each(f, 
        function(b) {
            e || (g -= parseFloat(c.css(a, "padding" + b)) || 0);
            g = "margin" === e ? g + (parseFloat(c.css(a, e + b)) || 0) : g - (parseFloat(c.css(a, "border" + b + "Width")) || 0)
        }),
        g;
        g = c._getComputedStyle(a, d);
        if (0 > g || b.isNullOrUndefined(g)) g = a.style[d] || 0;
        g = parseFloat(g) || 
        0;
        e && b.each(f, 
        function(b) {
            g += parseFloat(c.css(a, "padding" + b)) || 0;
            "padding" !== e && (g += parseFloat(c.css(a, "border" + b + "Width")) || 0);
            "margin" === e && (g += parseFloat(c.css(a, e + b)) || 0)
        });
        return g
    }
    var e = document,
    g = e.documentElement,
    k = j.ie,
    l = "style",
    m = "width",
    n = "display" + b.now(),
    o = parseInt,
    p = /^-?\d+(?:px)?$/i,
    t = {
        fillOpacity: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        orphans: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1
    },
    q = /-([a-z])/ig,
    v = function(a, b) {
        return b.toUpperCase()
    },
    w = /([A-Z]|^ms)/g,
    s = "",
    r = "px",
    u = {},
    x = {},
    y = {};
    g[l].cssFloat !== 
    f ? x["float"] = "cssFloat": g[l].styleFloat !== f && (x["float"] = "styleFloat");
    var z,
    D;
    b.mix(c, {
        _camelCase: i,
        _cssNumber: t,
        _CUSTOM_STYLES: u,
        _cssProps: x,
        _getComputedStyle: function(a, b) {
            var d = "",
            e = {},
            f = a.ownerDocument,
            b = b.replace(w, "-$1").toLowerCase();
            if (e = f.defaultView.getComputedStyle(a, null)) d = e.getPropertyValue(b) || e[b];
            "" == d && !c.__contains(f.documentElement, a) && (b = x[b] || b, d = a[l][b]);
            return d
        },
        style: function(a, d, e) {
            if (b.isPlainObject(d)) for (var g in d) c.style(a, g, d[g]);
            else {
                if (e === f) return a = c.get(a),
                g = 
                "",
                a && (g = h(a, d, e)),
                g;
                c.query(a).each(function(a) {
                    h(a, d, e)
                })
            }
        },
        css: function(a, d, e) {
            if (b.isPlainObject(d)) for (var g in d) c.css(a, g, d[g]);
            else {
                d = i(d);
                g = u[d];
                if (e === f) {
                    a = c.get(a);
                    e = "";
                    if (a && (!g || !("get" in g && (e = g.get(a, !0)) !== f))) e = c._getComputedStyle(a, d);
                    return e === f ? "": e
                }
                c.style(a, d, e)
            }
        },
        show: function(a) {
            c.query(a).each(function(a) {
                a[l].display = c.data(a, n) || s;
                if ("none" === c.css(a, "display")) {
                    var b;
                    a: {
                        b = a.tagName.toLowerCase();
                        var d,
                        g;
                        if (!y[b]) {
                            d = e.body || e.documentElement;
                            g = e.createElement(b);
                            c.prepend(g, 
                            d);
                            var f = c.css(g, "display");
                            d.removeChild(g);
                            if ("none" === f || "" === f) {
                                if (z) c.prepend(z, d);
                                else if (z = e.createElement("iframe"), z.frameBorder = z.width = z.height = 0, c.prepend(z, d), g = c._genEmptyIframeSrc()) z.src = g;
                                if (!D || !z.createElement) try {
                                    D = z.contentWindow.document,
                                    D.write(("CSS1Compat" === e.compatMode ? "<!doctype html>": "") + "<html><head>" + (j.ie && c._isCustomDomain() ? "<script>document.domain = '" + e.domain + "';<\/script>": "") + "</head><body>"),
                                    D.close()
                                } catch(h) {
                                    b = "block";
                                    break a
                                }
                                g = D.createElement(b);
                                D.body.appendChild(g);
                                f = c.css(g, "display");
                                d.removeChild(z)
                            }
                            y[b] = f
                        }
                        b = y[b]
                    }
                    c.data(a, n, b);
                    a[l].display = b
                }
            })
        },
        hide: function(a) {
            c.query(a).each(function(a) {
                var b = a[l],
                d = b.display;
                "none" !== d && (d && c.data(a, n, d), b.display = "none")
            })
        },
        toggle: function(a) {
            c.query(a).each(function(a) {
                "none" === c.css(a, "display") ? c.show(a) : c.hide(a)
            })
        },
        addStyleSheet: function(a, d, e) {
            b.isString(a) && (e = d, d = a, a = window);
            var a = c.get(a),
            a = c._getWin(a).document,
            g;
            if (e && (e = e.replace("#", s))) g = c.get("#" + e, a);
            g || (g = c.create("<style>", {
                id: e
            },
            a), c.get("head", a).appendChild(g), 
            g.styleSheet ? g.styleSheet.cssText = d: g.appendChild(a.createTextNode(d)))
        },
        unselectable: function(a) {
            c.query(a).each(function(a) {
                if (j.gecko) a[l].MozUserSelect = "none";
                else if (j.webkit) a[l].KhtmlUserSelect = "none";
                else if (j.ie || j.opera) {
                    var b = 0,
                    c = a.getElementsByTagName("*");
                    for (a.setAttribute("unselectable", "on"); a = c[b++];) switch (a.tagName.toLowerCase()) {
                    case "iframe":
                    case "textarea":
                    case "input":
                    case "select":
                        break;
                    default:
                        a.setAttribute("unselectable", "on")
                    }
                }
            })
        },
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0,
        width: 0,
        height: 0
    });
    b.each([m, "height"], 
    function(a) {
        c["inner" + (a.charAt(0).toUpperCase() + a.substring(1))] = function(b) {
            return (b = c.get(b)) ? d(b, a, "padding") : null
        };
        c["outer" + (a.charAt(0).toUpperCase() + a.substring(1))] = function(b, e) {
            var g = c.get(b);
            return g ? d(g, a, e ? "margin": "border") : null
        };
        c[a] = function(b, d) {
            var e = c.css(b, a, d);
            e && (e = parseFloat(e));
            return e
        }
    });
    var I = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    };
    b.each(["height", "width"], 
    function(b) {
        u[b] = {
            get: function(c, e) {
                var g;
                if (e) return 0 !== c.offsetWidth ? g = d(c, b) : a(c, I, 
                function() {
                    g = d(c, b)
                }),
                g + "px"
            },
            set: function(a, b) {
                if (p.test(b)) {
                    if (b = parseFloat(b), 0 <= b) return b + "px"
                } else return b
            }
        }
    });
    b.each(["left", "top"], 
    function(a) {
        u[a] = {
            get: function(d, e) {
                if (e) {
                    var g = c._getComputedStyle(d, a);
                    if ("auto" === g) {
                        g = 0;
                        if (b.inArray(c.css(d, "position"), ["absolute", "fixed"])) {
                            g = d["left" === a ? "offsetLeft": "offsetTop"];
                            if (k && 9 != document.documentMode || j.opera) g -= d.offsetParent && d.offsetParent["client" + ("left" == a ? "Left": "Top")] || 0;
                            g -= o(c.css(d, "margin-" + 
                            a)) || 0
                        }
                        g += "px"
                    }
                    return g
                }
            }
        }
    });
    return c
},
{
    requires: ["dom/base", "ua"]
});
KISSY.add("dom/selector", 
function(b, c, j) {
    function f(b, c) {
        var d,
        e,
        g = "string" === typeof b,
        h = c === j ? [l] : c === j ? [l] : f(c, j);
        g && (b = s(b), 1 == h.length && b && (d = a(b, h[0])));
        if (!d && (d = [], b)) {
            for (e = 0; e < h.length; e++) q.apply(d, i(b, h[e]));
            1 < d.length && (1 < h.length || g && -1 < b.indexOf(w)) && y(d)
        }
        d.each = function(a) {
            var b,
            c;
            for (c = 0; c < this.length; c++) {
                b = this[c];
                if (a(b, c) === false) break
            }
        };
        return d
    }
    function i(a, c) {
        var d = "string" === typeof a;
        if (d && a.match(x) || !d) d = h(a, c);
        else if (d && -1 < a.indexOf(w)) {
            var d = [],
            e,
            g = a.split(/\s*,\s*/);
            for (e = 0; e < g.length; e++) q.apply(d, i(g[e], c))
        } else d = [],
        (e = b.require("sizzle")) ? e(a, c, d) : k(a);
        return d
    }
    function a(a, b) {
        var d,
        f,
        h,
        k;
        if (u.test(a)) d = (f = e(a.slice(1), b)) ? [f] : [];
        else if (h = x.exec(a)) {
            f = h[1];
            k = h[2];
            h = h[3];
            if (b = f ? e(f, b) : b) h ? !f || -1 != a.indexOf(v) ? d = [].concat(z(h, k, b)) : (f = e(f, b)) && c.__hasClass(f, h) && (d = [f]) : k && (d = g(k, b));
            d = d || []
        }
        return d
    }
    function h(b, c) {
        var e;
        "string" === typeof b ? e = a(b, c) || [] : b && (n(b) || p(b)) ? e = m(b, 
        function(a) {
            return d(a, c)
        }) : b && d(b, c) && (e = [b]);
        return e
    }
    function d(a, b) {
        return ! a ? 
        !1: b == l ? !0: c.__contains(b, a)
    }
    function e(a, b) {
        var e = b;
        b.nodeType !== c.DOCUMENT_NODE && (e = b.ownerDocument); (e = e.getElementById(a)) && e.id === a || (e && e.parentNode ? c.__attr(e, "id") !== a ? e = c.filter(r, "#" + a, b)[0] || null: d(e, b) || (e = null) : e = null);
        return e
    }
    function g(a, b) {
        return b && o(b.getElementsByTagName(a)) || []
    }
    function k(a) {
        b.error("Unsupported selector: " + a)
    }
    var l = document,
    m = b.filter,
    n = b.isArray,
    o = b.makeArray,
    p = c._isNodeList,
    t = c._nodeName,
    q = Array.prototype.push,
    v = " ",
    w = ",",
    s = b.trim,
    r = "*",
    u = /^#[\w-]+$/,
    x = /^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,
    y; (function() {
        var a,
        b,
        c = !0; [0, 0].sort(function() {
            c = !1;
            return 0
        });
        y = function(d) {
            if (a && (b = c, d.sort(a), b)) for (var e = 1, g = d.length; e < g;) d[e] === d[e - 1] ? d.splice(e, 1) : e++;
            return d
        };
        a = l.documentElement.compareDocumentPosition ? 
        function(a, c) {
            return a == c ? (b = !0, 0) : !a.compareDocumentPosition || !c.compareDocumentPosition ? a.compareDocumentPosition ? -1: 1: a.compareDocumentPosition(c) & 4 ? -1: 1
        }: function(a, c) {
            if (a == c) return b = !0,
            0;
            if (a.sourceIndex && c.sourceIndex) return a.sourceIndex - c.sourceIndex
        }
    })(); (function() {
        var a = 
        l.createElement("div");
        a.appendChild(l.createComment(""));
        0 < a.getElementsByTagName(r).length && (g = function(a, b) {
            var c = o(b.getElementsByTagName(a));
            if (a === r) {
                for (var d = [], e = 0, g; g = c[e++];) 1 === g.nodeType && d.push(g);
                c = d
            }
            return c
        })
    })();
    var z = l.getElementsByClassName ? 
    function(a, b, c) {
        if (!c) return [];
        var a = c.getElementsByClassName(a),
        d = 0,
        e = a.length,
        g;
        if (b && b !== r) for (c = []; d < e; ++d) g = a[d],
        t(g, b) && c.push(g);
        else c = o(a);
        return c
    }: l.querySelectorAll ? 
    function(a, b, c) {
        return c && o(c.querySelectorAll((b ? b: "") + "." + a)) || 
        []
    }: function(a, b, d) {
        if (!d) return [];
        for (var b = d.getElementsByTagName(b || r), d = [], e = 0, g = b.length, f; e < g; ++e) f = b[e],
        c.__hasClass(f, a) && d.push(f);
        return d
    };
    b.mix(c, {
        query: f,
        get: function(a, b) {
            return f(a, b)[0] || null
        },
        unique: y,
        filter: function(a, d, e) {
            var a = f(a, e),
            e = b.require("sizzle"),
            g,
            h,
            i,
            j,
            l = [];
            if ("string" === typeof d && (d = s(d)) && (g = x.exec(d))) i = g[1],
            h = g[2],
            j = g[3],
            i ? i && !h && !j && (d = function(a) {
                return c.__attr(a, "id") === i
            }) : d = function(a) {
                var b = !0,
                d = !0;
                h && (b = t(a, h));
                j && (d = c.__hasClass(a, j));
                return d && b
            };
            b.isFunction(d) ? 
            l = b.filter(a, d) : d && e ? l = e.matches(d, a) : k(d);
            return l
        },
        test: function(a, b, d) {
            a = f(a, d);
            return a.length && c.filter(a, b, d).length === a.length
        }
    });
    return c
},
{
    requires: ["./base"]
});
KISSY.add("dom/style-ie", 
function(b, c, j, f) {
    if (!j.ie) return c;
    var i = document,
    a = i.documentElement,
    h = f._CUSTOM_STYLES,
    d = /^-?\d+(?:px)?$/i,
    e = /^-?\d/,
    g = /opacity=([^)]*)/,
    k = /alpha\([^)]*\)/i;
    try {
        b.isNullOrUndefined(a.style.opacity) && (h.opacity = {
            get: function(a, b) {
                return g.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": b ? "1": ""
            },
            set: function(a, c) {
                var c = parseFloat(c),
                d = a.style,
                e = a.currentStyle,
                g = isNaN(c) ? "": "alpha(opacity=" + 100 * c + ")",
                f = b.trim(e && e.filter || d.filter || 
                "");
                d.zoom = 1;
                if (1 <= c && "" === b.trim(f.replace(k, "")) && (d.removeAttribute("filter"), e && !e.filter)) return;
                d.filter = k.test(f) ? f.replace(k, g) : f + (f ? ", ": "") + g
            }
        })
    } catch(l) {
        b.log("IE filters ActiveX is disabled. ex = " + l)
    }
    var j = 8 == j.ie,
    m = {};
    m.thin = j ? "1px": "2px";
    m.medium = j ? "3px": "4px";
    m.thick = j ? "5px": "6px";
    b.each(["", "Top", "Left", "Right", "Bottom"], 
    function(a) {
        var b = "border" + a + "Width",
        c = "border" + a + "Style";
        h[b] = {
            get: function(a, d) {
                var e = d ? a.currentStyle: 0,
                g = e && "" + e[b] || void 0;
                g && 0 > g.indexOf("px") && (g = m[g] && "none" !== 
                e[c] ? m[g] : 0);
                return g
            }
        }
    });
    if (! (i.defaultView || {}).getComputedStyle && a.currentStyle) c._getComputedStyle = function(a, b) {
        var b = c._cssProps[b] || b,
        g = a.currentStyle && a.currentStyle[b];
        if (!d.test(g) && e.test(g)) {
            var f = a.style,
            h = f.left,
            k = a.runtimeStyle && a.runtimeStyle.left;
            k && (a.runtimeStyle.left = a.currentStyle.left);
            f.left = "fontSize" === b ? "1em": g || 0;
            g = f.pixelLeft + "px";
            f.left = h;
            k && (a.runtimeStyle.left = k)
        }
        return "" === g ? "auto": g
    };
    return c
},
{
    requires: ["./base", "ua", "./style"]
});
KISSY.add("dom/traversal", 
function(b, c, j) {
    function f(a, e, g, f, l, m) {
        if (! (a = c.get(a))) return null;
        if (0 === e) return a;
        m || (a = a[g]);
        if (!a) return null;
        l = l && c.get(l) || null;
        e === j && (e = 1);
        var m = [],
        n = b.isArray(e),
        o,
        p;
        b.isNumber(e) && (o = 0, p = e, e = function() {
            return++o === p
        });
        for (; a && a != l;) {
            if (h(a) && i(a, e) && (!f || f(a))) if (m.push(a), !n) break;
            a = a[g]
        }
        return n ? m: m[0] || null
    }
    function i(a, e) {
        if (!e) return ! 0;
        if (b.isArray(e)) for (var g = 0; g < e.length; g++) {
            if (c.test(a, e[g])) return ! 0
        } else if (c.test(a, e)) return ! 0;
        return ! 1
    }
    function a(a, 
    b, g) {
        var f = [],
        i = a = c.get(a);
        a && g && (i = a.parentNode);
        if (i) {
            g = 0;
            for (i = i.firstChild; i; i = i.nextSibling) if (h(i) && i !== a && (!b || c.test(i, b))) f[g++] = i
        }
        return f
    }
    var h = c._isElementNode;
    b.mix(c, {
        closest: function(a, b, g) {
            return f(a, b, "parentNode", 
            function(a) {
                return a.nodeType != c.DOCUMENT_FRAGMENT_NODE
            },
            g, !0)
        },
        parent: function(a, b, g) {
            return f(a, b, "parentNode", 
            function(a) {
                return a.nodeType != c.DOCUMENT_FRAGMENT_NODE
            },
            g)
        },
        first: function(a, b) {
            var g = c.get(a);
            return f(g && g.firstChild, b, "nextSibling", j, j, !0)
        },
        last: function(a, 
        b) {
            var g = c.get(a);
            return f(g && g.lastChild, b, "previousSibling", j, j, !0)
        },
        next: function(a, b) {
            return f(a, b, "nextSibling", j)
        },
        prev: function(a, b) {
            return f(a, b, "previousSibling", j)
        },
        siblings: function(b, c) {
            return a(b, c, !0)
        },
        children: function(b, c) {
            return a(b, c, j)
        },
        __contains: document.documentElement.contains ? 
        function(a, b) {
            if (a.nodeType == c.TEXT_NODE) return ! 1;
            var g;
            if (b.nodeType == c.TEXT_NODE) b = b.parentNode,
            g = !0;
            else {
                if (b.nodeType == c.DOCUMENT_NODE) return ! 1;
                g = a !== b
            }
            return g && (a.contains ? a.contains(b) : !0)
        }: document.documentElement.compareDocumentPosition ? 
        function(a, b) {
            return !! (a.compareDocumentPosition(b) & 16)
        }: 0,
        contains: function(a, b) {
            a = c.get(a);
            b = c.get(b);
            if (a && b) return c.__contains(a, b)
        },
        equals: function(a, b) {
            a = c.query(a);
            b = c.query(b);
            if (a.length != b.length) return ! 1;
            for (var g = a.length; 0 <= g; g--) if (a[g] != b[g]) return ! 1;
            return ! 0
        }
    });
    return c
},
{
    requires: ["./base"]
});KISSY.add("dom", 
function(b, c) {
    return c
},
{
    requires: "dom/attr,dom/class,dom/create,dom/data,dom/insertion,dom/offset,dom/style,dom/selector,dom/style-ie,dom/traversal".split(",")
});
KISSY.add("event/keycodes", 
function() {
    return {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229
    }
});
KISSY.add("event/object", 
function(b, c) {
    function j(a, b, c) {
        this.currentTarget = a;
        this.originalEvent = b || {};
        b ? (this.type = b.type, this._fix()) : (this.type = c, this.target = a);
        this.currentTarget = a;
        this.fixed = !0
    }
    var f = document,
    i = "altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,metaKey,newValue,offsetX,offsetY,originalTarget,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which,axis".split(",");
    b.augment(j, 
    {
        _fix: function() {
            for (var a = this.originalEvent, b = i.length, d, e = this.currentTarget, e = 9 === e.nodeType ? e: e.ownerDocument || f; b;) d = i[--b],
            this[d] = a[d];
            this.target || (this.target = this.srcElement || f);
            3 === this.target.nodeType && (this.target = this.target.parentNode); ! this.relatedTarget && this.fromElement && (this.relatedTarget = this.fromElement === this.target ? this.toElement: this.fromElement);
            this.pageX === c && this.clientX !== c && (a = e.documentElement, b = e.body, this.pageX = this.clientX + (a && a.scrollLeft || b && b.scrollLeft || 0) - 
            (a && a.clientLeft || b && b.clientLeft || 0), this.pageY = this.clientY + (a && a.scrollTop || b && b.scrollTop || 0) - (a && a.clientTop || b && b.clientTop || 0));
            this.which === c && (this.which = this.charCode === c ? this.keyCode: this.charCode);
            this.metaKey === c && (this.metaKey = this.ctrlKey); ! this.which && this.button !== c && (this.which = this.button & 1 ? 1: this.button & 2 ? 3: this.button & 4 ? 2: 0)
        },
        preventDefault: function() {
            var a = this.originalEvent;
            a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            this.isDefaultPrevented = !0
        },
        stopPropagation: function() {
            var a = 
            this.originalEvent;
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            this.isPropagationStopped = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = !0;
            this.stopPropagation()
        },
        halt: function(a) {
            a ? this.stopImmediatePropagation() : this.stopPropagation();
            this.preventDefault()
        }
    });
    return j
});
KISSY.add("event/utils", 
function(b, c) {
    var j = document;
    return {
        splitAndRun: function(c, i) {
            b.each(c.split(/\s+/), i)
        },
        batchForType: function(c, i, a, h) {
            if (h && 0 < h.indexOf(" ")) {
                var d = b.makeArray(arguments);
                b.each(h.split(/\s+/), 
                function(b) {
                    var g = [].concat(d);
                    g.splice(0, 4, a, b);
                    c[i].apply(c, g)
                });
                return ! 0
            }
            return 0
        },
        isValidTarget: function(b) {
            return b && b.nodeType !== c.TEXT_NODE && b.nodeType !== c.COMMENT_NODE
        },
        isIdenticalHandler: function(c, i, a) {
            var h = c.scope || a,
            d = 1,
            e = i.scope || a;
            if (c.fn !== i.fn || h !== e) d = 0;
            else if ((c = 
            c.data) !== (i = i.data)) ! c && i || c && !i ? d = 0: c && i && (!c.equals || !i.equals ? b.error("no equals in data") : c.equals(i, a) || (d = 0));
            return d
        },
        simpleAdd: j.addEventListener ? 
        function(b, c, a, h) {
            b.addEventListener && b.addEventListener(c, a, !!h)
        }: function(b, c, a) {
            b.attachEvent && b.attachEvent("on" + c, a)
        },
        simpleRemove: j.removeEventListener ? 
        function(b, c, a, h) {
            b.removeEventListener && b.removeEventListener(c, a, !!h)
        }: function(b, c, a) {
            b.detachEvent && b.detachEvent("on" + c, a)
        }
    }
},
{
    requires: ["dom"]
});
KISSY.add("event/base", 
function(b, c, j, f, i) {
    function a(a, b) {
        var c = u._data(a);
        return (c && c.events || {})[b] || []
    }
    function h(b, c) {
        for (var d = a(b, c.type).slice(0), e, g, f = 0, h = d.length; f < h && !(e = d[f], e = e.fn.call(e.scope || b, c, e.data), e !== i && (!1 !== g && (g = e), !1 === e && c.halt()), c.isImmediatePropagationStopped); ++f);
        return g
    }
    function d(a, b, c, d, e) {
        var g = s[b] || {}; ! d.length && (!g.setup || !1 === g.setup.call(a)) && m(a, b, c);
        g.add && g.add.call(a, e)
    }
    var e = f.isValidTarget,
    g = f.isIdenticalHandler,
    k = f.batchForType,
    l = f.simpleRemove,
    m = 
    f.simpleAdd,
    n = f.splitAndRun,
    o = c._nodeName,
    p = b.makeArray,
    t = b.each,
    q = b.trim,
    v = "",
    w = "trigger-none-" + b.now(),
    s = {},
    r = "ksEventTargetId" + b.now(),
    u = {
        _clone: function(a, b) {
            if (b.nodeType === c.ELEMENT_NODE && u._hasData(a)) {
                var d = u._data(a).events;
                t(d, 
                function(a, c) {
                    t(a, 
                    function(a) {
                        u.on(b, c, a.fn, a.scope, a.data)
                    })
                })
            }
        },
        _hasData: function(a) {
            return c.hasData(a, r)
        },
        _data: function(a) {
            var b = p(arguments);
            b.splice(1, 0, r);
            return c.data.apply(c, b)
        },
        _removeData: function(a) {
            var b = p(arguments);
            b.splice(1, 0, r);
            return c.removeData.apply(c, 
            b)
        },
        special: s,
        __add: function(a, c, f, k, i, l) {
            var n;
            if (c && b.isFunction(k) && (!a || e(c))) { (n = u._data(c)) || u._data(c, n = {});
                var m = n.events = n.events || {},
                m = m[f] = m[f] || [],
                k = {
                    fn: k,
                    scope: i,
                    data: l
                },
                p = n.handler;
                p || (p = n.handler = function(a, c) {
                    if (! (a && a.type == v)) {
                        var d = p.target;
                        if (!a || !a.fixed) a = new j(d, a);
                        var e = a.type;
                        b.isPlainObject(c) && b.mix(a, c);
                        e && (a.type = e);
                        return h(d, a)
                    }
                },
                p.target = c);
                for (n = m.length - 1; 0 <= n; --n) if (g(m[n], k, c)) return;
                a && (d(c, f, p, m, k), c = null);
                m.push(k)
            }
        },
        add: function(a, b, d, e, g) {
            b = q(b);
            if (k(u, "add", 
            a, b, d, e, g)) return a;
            c.query(a).each(function(a) {
                u.__add(!0, a, b, d, e, g)
            });
            return a
        },
        __remove: function(a, c, d, f, h, k) {
            if (c && (!a || e(c))) {
                var j = u._data(c),
                n = j && j.events,
                m,
                p,
                o,
                w = a && s[d] || {};
                if (n) if (d) {
                    if (m = n[d]) {
                        p = m.length;
                        if (f && p) {
                            var t = {
                                data: k,
                                fn: f,
                                scope: h
                            },
                            r,
                            k = h = 0;
                            for (o = []; h < p; ++h) r = m[h],
                            g(r, t, c) ? w.remove && w.remove.call(c, r) : o[k++] = r;
                            n[d] = o;
                            p = o.length
                        }
                        if (f === i || 0 === p) a && (!w.tearDown || !1 === w.tearDown.call(c)) && l(c, d, j.handler),
                        delete n[d]
                    }
                    b.isEmptyObject(n) && (j.handler.target = null, delete j.handler, delete j.events, 
                    u._removeData(c))
                } else for (d in n) u.__remove(a, c, d)
            }
        },
        remove: function(a, b, d, e, g) {
            b = q(b);
            if (k(u, "remove", a, b, d, e)) return a;
            c.query(a).each(function(a) {
                u.__remove(!0, a, b, d, e, g)
            });
            return a
        },
        _handle: h,
        fire: function(a, d, g, f) {
            var k = !0,
            d = q(d);
            if ( - 1 < d.indexOf(" ")) return n(d, 
            function(b) {
                k = u.fire(a, b, g, f) && k
            }),
            k;
            g = g || {};
            g.type = d;
            c.query(a).each(function(a) {
                var c = d,
                l = g;
                if (e(a)) {
                    var n,
                    m = !0;
                    l instanceof j ? n = l: (n = new j(a, i, c), b.mix(n, l));
                    n.type = c;
                    f && n.halt();
                    var l = a,
                    p = "on" + c;
                    do n.currentTarget = l,
                    h(l, n),
                    l[p] && 
                    !1 === l[p].call(l) && n.preventDefault(),
                    l = l.parentNode || l.ownerDocument || l === a.ownerDocument && window;
                    while (l && !n.isPropagationStopped);
                    if (n.isDefaultPrevented) m = !1;
                    else if (! ("click" === c && o(a, "a"))) {
                        var s;
                        try {
                            p && a[c] && ((s = a[p]) && (a[p] = null), v = c, a[c]())
                        } catch(r) {
                            b.log("trigger action error : "),
                            b.log(r)
                        }
                        s && (a[p] = s);
                        v = w
                    }
                    a = m
                } else a = !1;
                k = a && k
            });
            return k
        }
    };
    u.__getListeners = a;
    u.on = u.add;
    u.detach = u.remove;
    return u
},
{
    requires: ["dom", "./object", "./utils"]
});
KISSY.add("event/target", 
function(b, c, j, f, i) {
    function a(a, c, d) {
        if (d instanceof j) return d.currentTarget = a,
        d;
        a = new j(a, i, c);
        b.isPlainObject(d) && b.mix(a, d);
        a.type = c;
        return a
    }
    function h(a) {
        a[k] = a[k] || {};
        return a[k]
    }
    function d(a) {
        a[n] = a[n] || {};
        return a[n]
    }
    function e(a, b) {
        var c = h(a);
        return c[b] && c[b].bubbles || c[o] && c[o].bubbles
    }
    function g(a) {
        return function(b, d, e) {
            var g = this,
            b = l(b);
            m(b, 
            function(b) {
                c["__" + a](!1, g, b, d, e)
            });
            return g
        }
    }
    var k = "__~ks_publish",
    l = b.trim,
    m = f.splitAndRun,
    n = "__~ks_bubble_targets",
    o = "*",
    f = {
        fire: function(b, d) {
            var g = this,
            f,
            h,
            k,
            b = l(b);
            if (0 < b.indexOf(" ")) return m(b, 
            function(a) {
                h = g.fire(a, d); ! 1 === h && (f = !1)
            }),
            f;
            d && (d.type = b);
            k = a(g, b, d);
            f = c._handle(g, k); ! k.isPropagationStopped && e(g, b) && (h = g.bubble(b, k), !1 !== f && (f = h));
            return f
        },
        publish: function(a, b) {
            var c = h(this); (a = l(a)) && (c[a] = b)
        },
        bubble: function(a, c) {
            var e,
            g = d(this);
            b.each(g, 
            function(b) {
                b = b.fire(a, c); ! 1 !== e && (e = b)
            });
            return e
        },
        addTarget: function(a) {
            d(this)[b.stamp(a)] = a
        },
        removeTarget: function(a) {
            delete d(this)[b.stamp(a)]
        },
        on: g("add")
    };
    f.detach = g("remove");
    return f
},
{
    requires: ["./base", "./object", "./utils"]
});KISSY.add("event/focusin", 
function(b, c, j) {
    c.ie || b.each([{
        name: "focusin",
        fix: "focus"
    },
    {
        name: "focusout",
        fix: "blur"
    }], 
    function(b) {
        function c(a) {
            return j.fire(a.target, b.name)
        }
        var a = 0;
        j.special[b.name] = {
            setup: function() {
                0 === a++&&document.addEventListener(b.fix, c, !0)
            },
            tearDown: function() {
                0 === --a && document.removeEventListener(b.fix, c, !0)
            }
        }
    });
    return j
},
{
    requires: ["ua", "./base"]
});
KISSY.add("event/hashchange", 
function(b, c, j, f) {
    var i = document,
    f = i.documentMode || f.ie;
    if (! ("onhashchange" in window) || f && 8 > f) {
        var a = window,
        h = "<html><head><title>" + (i.title || "") + " - {hash}</title>{head}</head><body>{hash}</body></html>",
        d = function() {
            return "#" + location.href.replace(/^[^#]*#?(.*)$/, "$1")
        },
        e,
        g,
        k = function() {
            var a = d();
            a !== g && (g = a, l(a));
            e = setTimeout(k, 50)
        },
        l = f && 8 > f ? 
        function(a) {
            var a = b.substitute(h, {
                hash: b.escapeHTML(a),
                head: j._isCustomDomain() ? "<script>document.domain = '" + i.domain + "';<\/script>": 
                ""
            }),
            c = o.contentWindow.document;
            try {
                c.open(),
                c.write(a),
                c.close()
            } catch(d) {}
        }: function() {
            c.fire(a, "hashchange")
        },
        m = function() {
            e || k()
        },
        n = function() {
            e && clearTimeout(e);
            e = 0
        },
        o;
        8 > f && (m = function() {
            if (!o) {
                var e = j._genEmptyIframeSrc();
                o = j.create("<iframe " + (e ? 'src="' + e + '"': "") + ' style="display: none" height="0" width="0" tabindex="-1" title="empty"/>');
                j.prepend(o, i.documentElement);
                c.add(o, "load", 
                function() {
                    c.remove(o, "load");
                    l(d());
                    c.add(o, "load", f);
                    k()
                });
                i.onpropertychange = function() {
                    try {
                        "title" === event.propertyName && 
                        (o.contentWindow.document.title = i.title + " - " + d())
                    } catch(a) {}
                };
                var f = function() {
                    var e = b.trim(o.contentWindow.document.body.innerText),
                    f = d();
                    e != f && (b.log("set loc hash :" + e), g = location.hash = e);
                    c.fire(a, "hashchange")
                }
            }
        },
        n = function() {
            e && clearTimeout(e);
            e = 0;
            c.detach(o);
            j.remove(o);
            o = 0
        });
        c.special.hashchange = {
            setup: function() {
                if (this === a) {
                    g = d();
                    m()
                }
            },
            tearDown: function() {
                this === a && n()
            }
        }
    }
},
{
    requires: ["./base", "dom", "ua"]
});
KISSY.add("event/valuechange", 
function(b, c, j) {
    function f(a) {
        j.removeData(a, k);
        if (j.hasData(a, l)) {
            var b = j.data(a, l);
            clearTimeout(b);
            j.removeData(a, l)
        }
    }
    function i(a) {
        f(a.target)
    }
    function a(a) {
        j.hasData(a, l) || j.data(a, l, setTimeout(function() {
            var b = a.value,
            d = j.data(a, k);
            b !== d && (c.fire(a, e, {
                prevVal: d,
                newVal: b
            },
            !0), j.data(a, k, b));
            j.data(a, l, setTimeout(arguments.callee, m))
        },
        m))
    }
    function h(b) {
        var c = b.target;
        "focus" == b.type && j.data(c, k, c.value);
        a(c)
    }
    function d(a) {
        f(a);
        c.remove(a, "blur", i);
        c.remove(a, "mousedown keyup keydown focus", 
        h)
    }
    var e = "valuechange",
    g = j._nodeName,
    k = "event/valuechange/history",
    l = "event/valuechange/poll",
    m = 50;
    c.special[e] = {
        setup: function() {
            if (g(this, "input") || g(this, "textarea")) d(this),
            c.on(this, "blur", i),
            c.on(this, "mousedown keyup keydown focus", h)
        },
        tearDown: function() {
            d(this)
        }
    };
    return c
},
{
    requires: ["./base", "dom"]
});
KISSY.add("event/delegate", 
function(b, c, j, f) {
    function i(a, b) {
        if (void 0 === a.fn && void 0 === a.selector) return ! 0;
        if (void 0 === a.fn) return this.selector == a.selector;
        var c = this.scope || b,
        d = a.scope || b;
        return this.fn == a.fn && this.selector == a.selector && c == d
    }
    function a(a, b) {
        var d = c.closest(a.target, [b.selector], this);
        if (d) {
            for (var e = a.currentTarget, f = 0; f < d.length && !(a.currentTarget = d[f], !1 === b.fn.call(b.scope || this, a) && a.halt(), a.isPropagationStopped); f++);
            a.currentTarget = e
        }
    }
    function h(a, b) {
        var d,
        e = a.target,
        f = 
        a.relatedTarget;
        a.type = b.preType;
        if ((e = c.closest(e, b.selector, this)) && e !== f && (!f || !c.contains(e, f))) f = a.currentTarget,
        a.currentTarget = e,
        d = b.fn.call(b.scope || this, a),
        a.currentTarget = f;
        return d
    }
    var d = f.batchForType,
    e = {
        focus: {
            type: "focusin"
        },
        blur: {
            type: "focusout"
        },
        mouseenter: {
            type: "mouseover",
            handler: h
        },
        mouseleave: {
            type: "mouseout",
            handler: h
        }
    };
    b.mix(j, {
        delegate: function(b, f, h, m, n) {
            if (d(j, "delegate", b, f, h, m, n)) return b;
            c.query(b).each(function(b) {
                var c = f,
                d = a;
                e[f] && (f = e[c].type, d = e[c].handler || d);
                j.on(b, 
                f, d, b, {
                    fn: m,
                    selector: h,
                    preType: c,
                    scope: n,
                    equals: i
                })
            });
            return b
        },
        undelegate: function(b, f, h, m, n) {
            if (d(j, "undelegate", b, f, h, m, n)) return b;
            c.query(b).each(function(b) {
                var c = f,
                d = a;
                e[f] && (f = e[c].type, d = e[c].handler || d);
                j.remove(b, f, d, b, {
                    fn: m,
                    selector: h,
                    preType: c,
                    scope: n,
                    equals: i
                })
            });
            return b
        }
    });
    return j
},
{
    requires: ["dom", "./base", "./utils"]
});
KISSY.add("event/mouseenter", 
function(b, c, j, f) {
    f.ie || b.each([{
        name: "mouseenter",
        fix: "mouseover"
    },
    {
        name: "mouseleave",
        fix: "mouseout"
    }], 
    function(f) {
        function a(a) {
            var d = a.relatedTarget;
            a.type = f.name;
            try {
                if (!d || d === document || d.parentNode) d !== this && (!d || !j.contains(this, d)) && c._handle(this, a)
            } catch(e) {
                b.log("withinElement error : ", "error"),
                b.log(e, "error")
            }
        }
        c.special[f.name] = {
            setup: function() {
                c.add(this, f.fix, a)
            },
            tearDown: function() {
                c.remove(this, f.fix, a)
            }
        }
    });
    return c
},
{
    requires: ["./base", "dom", "ua"]
});
KISSY.add("event/submit", 
function(b, c, j, f) {
    b = document.documentMode;
    if (c.ie && (9 > c.ie || b && 9 > b)) {
        var i = f._nodeName;
        j.special.submit = {
            setup: function() {
                if (i(this, "form")) return ! 1;
                j.on(this, "click keypress", a)
            },
            tearDown: function() {
                if (i(this, "form")) return ! 1;
                j.remove(this, "click keypress", a);
                f.query("form", this).each(function(a) {
                    a.__submit__fix && (a.__submit__fix = 0, j.remove(a, "submit", h))
                })
            }
        };
        var a = function(a) {
            a = a.target;
            if ((a = i(a, "input") || i(a, "button") ? a.form: null) && !a.__submit__fix) a.__submit__fix = 1,
            j.on(a, 
            "submit", h)
        },
        h = function(a) {
            this.parentNode && j.fire(this.parentNode, "submit", a)
        }
    }
},
{
    requires: ["ua", "./base", "dom"]
});
KISSY.add("event/change", 
function(b, c, j, f) {
    b = document.documentMode;
    if (c.ie && (9 > c.ie || b && 9 > b)) {
        var i = /^(?:textarea|input|select)$/i,
        a = function(a) {
            a = a.type;
            return "checkbox" == a || "radio" == a
        };
        j.special.change = {
            setup: function() {
                if (i.test(this.nodeName)) if (a(this)) j.on(this, "propertychange", h),
                j.on(this, "click", d);
                else return ! 1;
                else j.on(this, "beforeactivate", e)
            },
            tearDown: function() {
                if (i.test(this.nodeName)) if (a(this)) j.remove(this, "propertychange", h),
                j.remove(this, "click", d);
                else return ! 1;
                else j.remove(this, 
                "beforeactivate", e),
                f.query("textarea,input,select", this).each(function(a) {
                    a.__changeHandler && (a.__changeHandler = 0, j.remove(a, "change", g))
                })
            }
        };
        var h = function(a) {
            "checked" == a.originalEvent.propertyName && (this.__changed = 1)
        },
        d = function(a) {
            this.__changed && (this.__changed = 0, j.fire(this, "change", a))
        },
        e = function(a) {
            a = a.target;
            i.test(a.nodeName) && !a.__changeHandler && (a.__changeHandler = 1, j.on(a, "change", g))
        },
        g = function(b) {
            if (!a(this)) {
                var c; (c = this.parentNode) && j.fire(c, "change", b)
            }
        }
    }
},
{
    requires: ["ua", "./base", 
    "dom"]
});
KISSY.add("event/mousewheel", 
function(b, c, j, f, i) {
    function a(a) {
        var d,
        e,
        f,
        h = a.detail;
        a.wheelDelta && (f = a.wheelDelta / 120);
        a.detail && (f = -(0 == h % 3 ? h / 3: h));
        void 0 !== a.axis && (a.axis === a.HORIZONTAL_AXIS ? (e = 0, d = -1 * f) : a.axis === a.VERTICAL_AXIS && (d = 0, e = f));
        void 0 !== a.wheelDeltaY && (e = a.wheelDeltaY / 120);
        void 0 !== a.wheelDeltaX && (d = -1 * a.wheelDeltaX / 120); ! d && !e && (e = f);
        a = new i(this, a);
        b.mix(a, {
            deltaY: e,
            delta: f,
            deltaX: d,
            type: "mousewheel"
        });
        return c._handle(this, a)
    }
    var h = j.gecko ? "DOMMouseScroll": "mousewheel",
    d = f.simpleRemove,
    e = f.simpleAdd;
    c.special.mousewheel = {
        setup: function() {
            var d;
            d = c._data(this)[d] = b.bind(a, this);
            e(this, h, d)
        },
        tearDown: function() {
            var a,
            b = c._data(this);
            a = b[a];
            d(this, h, a);
            delete b[a]
        }
    }
},
{
    requires: ["./base", "ua", "./utils", "./object"]
});KISSY.add("event", 
function(b, c, j, f, i) {
    j.KeyCodes = c;
    j.Target = f;
    j.Object = i;
    return j
},
{
    requires: "event/keycodes,event/base,event/target,event/object,event/focusin,event/hashchange,event/valuechange,event/delegate,event/mouseenter,event/submit,event/change,event/mousewheel".split(",")
});
KISSY.add("node/base", 
function(b, c, j) {
    function f(d, e, g) {
        if (! (this instanceof f)) return new f(d, e, g);
        if (d) if (b.isString(d)) {
            if (d = c.create(d, e, g), d.nodeType === c.DOCUMENT_FRAGMENT_NODE) return i.push.apply(this, a(d.childNodes)),
            j
        } else {
            if (b.isArray(d) || h(d)) return i.push.apply(this, a(d)),
            j
        } else return j;
        this[0] = d;
        this.length = 1;
        return j
    }
    var i = Array.prototype,
    a = b.makeArray,
    h = c._isNodeList;
    b.augment(f, {
        length: 0,
        item: function(a) {
            return b.isNumber(a) ? a >= this.length ? null: new f(this[a]) : new f(a)
        },
        add: function(a, 
        c, g) {
            b.isNumber(c) && (g = c, c = j);
            a = f.all(a, c).getDOMNodes();
            c = new f(this);
            g === j ? i.push.apply(c, a) : (g = [g, 0], g.push.apply(g, a), i.splice.apply(c, g));
            return c
        },
        slice: function(a, b) {
            return new f(i.slice.call(this, a, b))
        },
        getDOMNodes: function() {
            return i.slice.call(this)
        },
        each: function(a, c) {
            var g = this;
            b.each(g, 
            function(b, h) {
                b = new f(b);
                return a.call(c || b, b, h, g)
            });
            return g
        },
        getDOMNode: function() {
            return this[0]
        },
        end: function() {
            return this.__parent || this
        },
        all: function(a) {
            a = 0 < this.length ? f.all(a, this) : new f;
            a.__parent = 
            this;
            return a
        },
        one: function(a) {
            a = this.all(a);
            if (a = a.length ? a.slice(0, 1) : null) a.__parent = this;
            return a
        }
    });
    b.mix(f, {
        all: function(a, e) {
            return b.isString(a) && (a = b.trim(a)) && 3 <= a.length && b.startsWith(a, "<") && b.endsWith(a, ">") ? (e && (e.getDOMNode && (e = e.getDOMNode()), e.ownerDocument && (e = e.ownerDocument)), new f(a, j, e)) : new f(c.query(a, e))
        },
        one: function(a, b) {
            var c = f.all(a, b);
            return c.length ? c.slice(0, 1) : null
        }
    });
    b.mix(f, c._NODE_TYPE);
    return f
},
{
    requires: ["dom"]
});
KISSY.add("node/attach", 
function(b, c, j, f, i) {
    function a(a, b, d) {
        d.unshift(b);
        a = c[a].apply(c, d);
        return a === i ? b: a
    }
    var h = f.prototype,
    d = b.makeArray;
    b.each("equals,contains,scrollTop,scrollLeft,height,width,innerHeight,innerWidth,outerHeight,outerWidth,addStyleSheet,appendTo,prependTo,insertBefore,before,after,insertAfter,test,hasClass,addClass,removeClass,replaceClass,toggleClass,removeAttr,hasAttr,hasProp,scrollIntoView,remove,empty,removeData,hasData,unselectable".split(","), 
    function(b) {
        h[b] = function() {
            var c = 
            d(arguments);
            return a(b, this, c)
        }
    });
    b.each("filter,first,last,parent,closest,next,prev,clone,siblings,children".split(","), 
    function(a) {
        h[a] = function() {
            var b = d(arguments);
            b.unshift(this);
            b = c[a].apply(c, b);
            return b === i ? this: b === null ? null: new f(b)
        }
    });
    b.each({
        attr: 1,
        text: 0,
        css: 1,
        style: 1,
        val: 0,
        prop: 1,
        offset: 0,
        html: 0,
        data: 1
    },
    function(e, f) {
        h[f] = function() {
            var h;
            h = d(arguments);
            h[e] === i && !b.isObject(h[0]) ? (h.unshift(this), h = c[f].apply(c, h)) : h = a(f, this, h);
            return h
        }
    });
    b.each(["on", "detach", "fire", "delegate", 
    "undelegate"], 
    function(a) {
        h[a] = function() {
            var b = d(arguments);
            b.unshift(this);
            j[a].apply(j, b);
            return this
        }
    })
},
{
    requires: ["dom", "event", "./base"]
});KISSY.add("node/override", 
function(b, c, j, f) {
    b.each(["append", "prepend", "before", "after"], 
    function(i) {
        f.prototype[i] = function(a) {
            b.isString(a) && (a = c.create(a));
            if (a) c[i](a, this);
            return this
        }
    })
},
{
    requires: ["dom", "event", "./base", "./attach"]
});
KISSY.add("anim/easing", 
function() {
    var b = Math.PI,
    c = Math.pow,
    j = Math.sin,
    f = 1.70158,
    i = {
        swing: function(a) {
            return - Math.cos(a * b) / 2 + 0.5
        },
        easeNone: function(a) {
            return a
        },
        easeIn: function(a) {
            return a * a
        },
        easeOut: function(a) {
            return (2 - a) * a
        },
        easeBoth: function(a) {
            return 1 > (a *= 2) ? 0.5 * a * a: 0.5 * (1 - --a * (a - 2))
        },
        easeInStrong: function(a) {
            return a * a * a * a
        },
        easeOutStrong: function(a) {
            return 1 - --a * a * a * a
        },
        easeBothStrong: function(a) {
            return 1 > (a *= 2) ? 0.5 * a * a * a * a: 0.5 * (2 - (a -= 2) * a * a * a)
        },
        elasticIn: function(a) {
            return 0 === a || 1 === a ? a: 
            -(c(2, 10 * (a -= 1)) * j((a - 0.075) * 2 * b / 0.3))
        },
        elasticOut: function(a) {
            return 0 === a || 1 === a ? a: c(2, -10 * a) * j((a - 0.075) * 2 * b / 0.3) + 1
        },
        elasticBoth: function(a) {
            return 0 === a || 2 === (a *= 2) ? a: 1 > a ? -0.5 * c(2, 10 * (a -= 1)) * j((a - 0.1125) * 2 * b / 0.45) : 0.5 * c(2, -10 * (a -= 1)) * j((a - 0.1125) * 2 * b / 0.45) + 1
        },
        backIn: function(a) {
            1 === a && (a -= 0.001);
            return a * a * ((f + 1) * a - f)
        },
        backOut: function(a) {
            return (a -= 1) * a * ((f + 1) * a + f) + 1
        },
        backBoth: function(a) {
            return 1 > (a *= 2) ? 0.5 * a * a * (((f *= 1.525) + 1) * a - f) : 0.5 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2)
        },
        bounceIn: function(a) {
            return 1 - 
            i.bounceOut(1 - a)
        },
        bounceOut: function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a: a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75: a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375: 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        },
        bounceBoth: function(a) {
            return 0.5 > a ? 0.5 * i.bounceIn(2 * a) : 0.5 * i.bounceOut(2 * a - 1) + 0.5
        },
        NativeTimeFunction: {
            easeNone: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeBoth: "ease-in-out",
            easeInStrong: "cubic-bezier(0.9, 0.0, 0.9, 0.5)",
            easeOutStrong: "cubic-bezier(0.1, 0.5, 0.1, 1.0)",
            easeBothStrong: "cubic-bezier(0.9, 0.0, 0.1, 1.0)"
        }
    };
    return i
});
KISSY.add("anim/manager", 
function(b) {
    var c = b.stamp;
    return {
        interval: 15,
        runnings: {},
        timer: null,
        start: function(b) {
            var f = c(b);
            this.runnings[f] || (this.runnings[f] = b, this.startTimer())
        },
        stop: function(b) {
            this.notRun(b)
        },
        notRun: function(j) {
            delete this.runnings[c(j)];
            b.isEmptyObject(this.runnings) && this.stopTimer()
        },
        pause: function(b) {
            this.notRun(b)
        },
        resume: function(b) {
            this.start(b)
        },
        startTimer: function() {
            var b = this;
            b.timer || (b.timer = setTimeout(function() {
                b.runFrames() ? b.stopTimer() : (b.timer = 0, b.startTimer())
            },
            b.interval))
        },
        stopTimer: function() {
            var b = this.timer;
            b && (clearTimeout(b), this.timer = 0)
        },
        runFrames: function() {
            var b = 1,
            c = this.runnings,
            i;
            for (i in c) c.hasOwnProperty(i) && (b = 0, c[i]._frame());
            return b
        }
    }
});
KISSY.add("anim/fx", 
function(b, c, j) {
    function f(a) {
        this.load(a)
    }
    function i(a, b) {
        return (!a.style || null == a.style[b]) && null != c.attr(a, b, j, 1) ? 1: 0
    }
    b.augment(f, {
        load: function(a) {
            b.mix(this, a);
            this.startTime = b.now();
            this.pos = 0;
            this.unit = this.unit || ""
        },
        frame: function(a) {
            var c = 0,
            d = b.now();
            a || d >= this.duration + this.startTime ? c = this.pos = 1: (a = d - this.startTime, this.pos = this.easing(a / this.duration));
            this.update();
            return c
        },
        interpolate: function(a, c, d) {
            return b.isNumber(a) && b.isNumber(c) ? (a + (c - a) * d).toFixed(3) : j
        },
        update: function() {
            var a = this.prop,
            f = this.elem,
            d = this.from,
            e = this.to,
            g = this.interpolate(d, e, this.pos);
            g === j ? this.finished || (this.finished = 1, c.css(f, a, e), b.log(this.prop + " update directly ! : " + g + " : " + d + " : " + e)) : (g += this.unit, i(f, a) ? c.attr(f, a, g, 1) : c.css(f, a, g))
        },
        cur: function() {
            var a = this.prop,
            b = this.elem;
            if (i(b, a)) return c.attr(b, a, j, 1);
            var d,
            a = c.css(b, a);
            return isNaN(d = parseFloat(a)) ? !a || "auto" === a ? 0: a: d
        }
    });
    f.Factories = {};
    f.getFx = function(a) {
        return new(f.Factories[a.prop] || f)(a)
    };
    return f
},
{
    requires: ["dom"]
});
KISSY.add("anim/queue", 
function(b, c) {
    function j(b, e, f) {
        var e = e || a,
        h,
        j = c.data(b, i); ! j && !f && c.data(b, i, j = {});
        j && (h = j[e], !h && !f && (h = j[e] = []));
        return h
    }
    function f(d, e) {
        var e = e || a,
        f = c.data(d, i);
        f && delete f[e];
        b.isEmptyObject(f) && c.removeData(d, i)
    }
    var i = b.guid("ks-queue-" + b.now() + "-"),
    a = b.guid("ks-queue-" + b.now() + "-"),
    h = {
        queueCollectionKey: i,
        queue: function(a) {
            var b = j(a.elem, a.config.queue);
            b.push(a);
            "..." !== b[0] && h.dequeue(a);
            return b
        },
        remove: function(a) {
            var c = j(a.elem, a.config.queue, 1);
            c && (a = b.indexOf(a, 
            c), -1 < a && c.splice(a, 1))
        },
        removeQueues: function(a) {
            c.removeData(a, i)
        },
        removeQueue: f,
        dequeue: function(a) {
            var b = a.elem,
            a = a.config.queue,
            c = j(b, a, 1),
            h = c && c.shift();
            "..." == h && (h = c.shift());
            h ? (c.unshift("..."), h._runInternal()) : f(b, a)
        }
    };
    return h
},
{
    requires: ["dom"]
});
KISSY.add("anim/base", 
function(b, c, j, f, i, a, h, d) {
    function e(a, d, f, h, i) {
        if (a = c.get(a)) {
            if (! (this instanceof e)) return new e(a, d, f, h, i);
            var d = b.isString(d) ? b.unparam(d, ";", ":") : b.clone(d),
            k;
            for (k in d) {
                var j = n(b.trim(k));
                k != j && (d[j] = d[k], delete d[k])
            }
            f = b.isPlainObject(f) ? b.clone(f) : {
                duration: parseFloat(f) || void 0,
                easing: h,
                complete: i
            };
            this.config = f = b.merge(q, f);
            f.duration *= 1E3;
            this.elem = this.domEl = a;
            this.props = d;
            this._backupProps = {};
            this._fxs = {};
            this.on("complete", g)
        }
    }
    function g(a) {
        var d = this._backupProps,
        e = this.config;
        b.isEmptyObject(d = this._backupProps) || c.css(this.elem, d);
        e.complete && e.complete.call(this, a)
    }
    function k() {
        var d = this.config,
        e = this._backupProps,
        g = this.elem,
        k,
        j,
        m,
        n = d.specialEasing || {},
        w = this._fxs,
        q = this.props;
        l(this);
        if (!1 === this.fire("start")) this.stop(0);
        else {
            if (o(g)) for (m in k = "none" == c.css(g, "display"), q) if (j = q[m], "hide" == j && k || "show" == j && !k) {
                this.stop(1);
                return
            }
            b.each(q, 
            function(a, c) {
                if (q.hasOwnProperty(c)) {
                    var e;
                    b.isArray(a) ? (e = n[c] = a[1], q[c] = a[0]) : e = n[c] = n[c] || d.easing;
                    b.isString(e) && 
                    (e = n[c] = f[e]);
                    n[c] = e || f.easeNone
                }
            });
            b.each(t, 
            function(a, d) {
                var e,
                f,
                h;
                if (h = q[d]) {
                    f = {};
                    b.each(a, 
                    function(a) {
                        f[a] = c.css(g, a);
                        n[a] = n[d]
                    });
                    c.css(g, d, h);
                    for (e in f) q[e] = c.css(g, e),
                    c.css(g, e, f[e]);
                    delete q[d]
                }
            });
            for (m in q) if (q.hasOwnProperty(m)) {
                j = b.trim(q[m]);
                var B,
                A,
                C = {
                    elem: g,
                    prop: m,
                    duration: d.duration,
                    easing: n[m]
                },
                E = h.getFx(C);
                b.inArray(j, p) ? (e[m] = c.style(g, m), "toggle" == j && (j = k ? "show": "hide"), "hide" == j ? (B = 0, A = E.cur(), e.display = "none") : (A = 0, B = E.cur(), c.css(g, m, A), c.show(g)), j = B) : (B = j, A = E.cur());
                j += "";
                var H = "",
                G = j.match(v);
                if (G) {
                    B = parseFloat(G[2]);
                    if ((H = G[3]) && "px" !== H) c.css(g, m, j),
                    A *= B / E.cur(),
                    c.css(g, m, A + H);
                    G[1] && (B = ("-=" === G[1] ? -1: 1) * B + A)
                }
                C.from = A;
                C.to = B;
                C.unit = H;
                E.load(C);
                w[m] = E
            }
            if (o(g) && (q.width || q.height)) b.mix(e, {
                overflow: c.style(g, "overflow"),
                "overflow-x": c.style(g, "overflowX"),
                "overflow-y": c.style(g, "overflowY")
            }),
            c.css(g, "overflow", "hidden"),
            "inline" === c.css(g, "display") && "none" === c.css(g, "float") && (i.ie ? c.css(g, "zoom", 1) : c.css(g, "display", "inline-block"));
            a.start(this)
        }
    }
    function l(a) {
        var d = 
        a.elem,
        e = c.data(d, w);
        e || c.data(d, w, e = {});
        e[b.stamp(a)] = a
    }
    function m(a, e, f, g) {
        f && !1 !== g && d.removeQueue(a, g);
        var a = c.data(a, w),
        a = b.merge(a),
        h;
        for (h in a) f = a[h],
        f.config.queue == g && f.stop(e)
    }
    var n = c._camelCase,
    o = c._isElementNode,
    p = ["hide", "show", "toggle"],
    t = {
        border: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
        borderBottom: ["borderBottomWidth"],
        borderLeft: ["borderLeftWidth"],
        borderTop: ["borderTopWidth"],
        borderRight: ["borderRightWidth"],
        font: ["fontSize", "fontWeight"],
        margin: ["marginBottom", 
        "marginLeft", "marginRight", "marginTop"],
        padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"]
    },
    q = {
        duration: 1,
        easing: "easeNone"
    },
    v = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i;
    e.SHORT_HANDS = t;
    b.augment(e, j.Target, {
        isRunning: function() {
            var a = c.data(this.elem, w);
            return a ? !!a[b.stamp(this)] : 0
        },
        _runInternal: k,
        run: function() { ! 1 === this.config.queue ? k.call(this) : d.queue(this);
            return this
        },
        _frame: function() {
            var a,
            b = 1,
            c = this._fxs;
            for (a in c) c.hasOwnProperty(a) && (b &= c[a].frame()); (!1 === this.fire("step") || 
            b) && this.stop(b)
        },
        stop: function(e) {
            var f = this.config.queue,
            g,
            h = this._fxs;
            if (this.isRunning()) {
                if (e) {
                    for (g in h) h.hasOwnProperty(g) && h[g].frame(1);
                    this.fire("complete")
                }
                a.stop(this);
                e = this.elem;
                if (g = c.data(e, w)) delete g[b.stamp(this)],
                b.isEmptyObject(g) && c.removeData(e, w); ! 1 !== f && d.dequeue(this);
                return this
            } ! 1 !== f && d.remove(this)
        }
    });
    var w = b.guid("ks-anim-unqueued-" + b.now() + "-");
    e.stop = function(a, e, f, g) {
        if (null === g || b.isString(g) || !1 === g) return m.apply(void 0, arguments);
        f && d.removeQueues(a);
        var h = c.data(a, 
        w),
        h = b.merge(h),
        i;
        for (i in h) h[i].stop(e)
    };
    e.isRunning = function(a) {
        return (a = c.data(a, w)) && !b.isEmptyObject(a)
    };
    e.Q = d;
    return e
},
{
    requires: "dom,event,./easing,ua,./manager,./fx,./queue".split(",")
});
KISSY.add("anim/color", 
function(b, c, j, f) {
    function i(a) {
        var a = a + "",
        c;
        if (c = a.match(g)) return [parseInt(c[1]), parseInt(c[2]), parseInt(c[3])];
        if (c = a.match(k)) return [parseInt(c[1]), parseInt(c[2]), parseInt(c[3]), parseInt(c[4])];
        if (c = a.match(l)) {
            for (a = 1; a < c.length; a++) 2 > c[a].length && (c[a] += c[a]);
            return [parseInt(c[1], h), parseInt(c[2], h), parseInt(c[3], h)]
        }
        if (e[a = a.toLowerCase()]) return e[a];
        b.log("only allow rgb or hex color string : " + a, "warn");
        return [255, 255, 255]
    }
    function a() {
        a.superclass.constructor.apply(this, 
        arguments)
    }
    var h = 16,
    d = Math.floor,
    e = {
        black: [0, 0, 0],
        silver: [192, 192, 192],
        gray: [128, 128, 128],
        white: [255, 255, 255],
        maroon: [128, 0, 0],
        red: [255, 0, 0],
        purple: [128, 0, 128],
        fuchsia: [255, 0, 255],
        green: [0, 128, 0],
        lime: [0, 255, 0],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        navy: [0, 0, 128],
        blue: [0, 0, 255],
        teal: [0, 128, 128],
        aqua: [0, 255, 255]
    },
    g = /^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,
    k = /^rgba\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+),\s*([0-9]+)\)$/i,
    l = /^#?([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})$/i,
    c = j.SHORT_HANDS;
    c.background = ["backgroundColor"];
    c.borderColor = ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"];
    c.border.push("borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor");
    c.borderBottom.push("borderBottomColor");
    c.borderLeft.push("borderLeftColor");
    c.borderRight.push("borderRightColor");
    c.borderTop.push("borderTopColor");
    b.extend(a, f, {
        load: function() {
            a.superclass.load.apply(this, arguments);
            this.from && (this.from = i(this.from));
            this.to && (this.to = i(this.to))
        },
        interpolate: function(c, e, f) {
            var g = a.superclass.interpolate;
            if (3 == c.length && 3 == e.length) return "rgb(" + [d(g(c[0], e[0], f)), d(g(c[1], e[1], f)), d(g(c[2], e[2], f))].join(", ") + ")";
            if (4 == c.length || 4 == e.length) return "rgba(" + [d(g(c[0], e[0], f)), d(g(c[1], e[1], f)), d(g(c[2], e[2], f)), d(g(c[3] || 1, e[3] || 1, f))].join(", ") + ")";
            b.log("anim/color unknown value : " + c)
        }
    });
    b.each("backgroundColor,borderBottomColor,borderLeftColor,borderRightColor,borderTopColor,color,outlineColor".split(","), 
    function(b) {
        f.Factories[b] = a
    });
    return a
},
{
    requires: ["dom", "./base", "./fx"]
});KISSY.add("anim", 
function(b, c, j) {
    c.Easing = j;
    return c
},
{
    requires: ["anim/base", "anim/easing", "anim/color"]
});
KISSY.add("node/anim", 
function(b, c, j, f, i) {
    function a(a, b, c) {
        for (var f = [], i = {},
        c = c || 0; c < b; c++) f.push.apply(f, h[c]);
        for (c = 0; c < f.length; c++) i[f[c]] = a;
        return i
    }
    var h = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    b.augment(f, {
        animate: function() {
            var a = b.makeArray(arguments);
            b.each(this, 
            function(b) {
                j.apply(i, [b].concat(a)).run()
            });
            return this
        },
        stop: function(a, c, f) {
            b.each(this, 
            function(b) {
                j.stop(b, a, c, f)
            });
            return this
        },
        isRunning: function() {
            for (var a = 0; a < this.length; a++) if (j.isRunning(this[a])) return 1;
            return 0
        }
    });
    b.each({
        show: a("show", 3),
        hide: a("hide", 3),
        toggle: a("toggle", 3),
        fadeIn: a("show", 3, 2),
        fadeOut: a("hide", 3, 2),
        fadeToggle: a("toggle", 3, 2),
        slideDown: a("show", 1),
        slideUp: a("hide", 1),
        slideToggle: a("toggle", 1)
    },
    function(a, e) {
        f.prototype[e] = function(f, h, i) {
            if (c[e] && !f) c[e](this);
            else b.each(this, 
            function(b) {
                j(b, a, f, i || "easeOut", h).run()
            });
            return this
        }
    })
},
{
    requires: ["dom", "anim", "./base"]
});
KISSY.add("node", 
function(b, c, j) {
    j.KeyCodes = c.KeyCodes;
    return j
},
{
    requires: ["event", "node/base", "node/attach", "node/override", "node/anim"]
});
KISSY.add("json/json2", 
function(b, c) {
    function j(a) {
        return 10 > a ? "0" + a: a
    }
    function f(a) {
        e.lastIndex = 0;
        return e.test(a) ? '"' + a.replace(e, 
        function(a) {
            var b = l[a];
            return "string" === typeof b ? b: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"': '"' + a + '"'
    }
    function i(a, b) {
        var c,
        d,
        e,
        h,
        j = g,
        l,
        r = b[a];
        r && "object" === typeof r && "function" === typeof r.toJSON && (r = r.toJSON(a));
        "function" === typeof m && (r = m.call(b, a, r));
        switch (typeof r) {
        case "string":
            return f(r);
        case "number":
            return isFinite(r) ? "" + r: "null";
        case "boolean":
        case "null":
            return "" + 
            r;
        case "object":
            if (!r) return "null";
            g += k;
            l = [];
            if ("[object Array]" === Object.prototype.toString.apply(r)) {
                h = r.length;
                for (c = 0; c < h; c += 1) l[c] = i(c, r) || "null";
                e = 0 === l.length ? "[]": g ? "[\n" + g + l.join(",\n" + g) + "\n" + j + "]": "[" + l.join(",") + "]";
                g = j;
                return e
            }
            if (m && "object" === typeof m) {
                h = m.length;
                for (c = 0; c < h; c += 1) d = m[c],
                "string" === typeof d && (e = i(d, r)) && l.push(f(d) + (g ? ": ": ":") + e)
            } else for (d in r) Object.hasOwnProperty.call(r, d) && (e = i(d, r)) && l.push(f(d) + (g ? ": ": ":") + e);
            e = 0 === l.length ? "{}": g ? "{\n" + g + l.join(",\n" + g) + "\n" + 
            j + "}": "{" + l.join(",") + "}";
            g = j;
            return e
        }
    }
    var a = window,
    h = a.JSON;
    if (!h || 9 > c.ie) h = a.JSON = {};
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + j(this.getUTCMonth() + 1) + "-" + j(this.getUTCDate()) + "T" + j(this.getUTCHours()) + ":" + j(this.getUTCMinutes()) + ":" + j(this.getUTCSeconds()) + "Z": null
    },
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    });
    var d = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    g,
    k,
    l = {
        "": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    m;
    "function" !== typeof h.stringify && (h.stringify = function(a, b, c) {
        var d;
        k = g = "";
        if (typeof c === "number") for (d = 0; d < c; d = d + 1) k = k + " ";
        else typeof c === "string" && (k = c);
        if ((m = b) && typeof b !== "function" && (typeof b !== "object" || typeof b.length !== "number")) throw Error("JSON.stringify");
        return i("", {
            "": a
        })
    });
    "function" !== typeof h.parse && (h.parse = function(a, b) {
        function c(a, d) {
            var e,
            f,
            g = a[d];
            if (g && typeof g === "object") for (e in g) if (Object.hasOwnProperty.call(g, e)) {
                f = c(g, e);
                f !== void 0 ? g[e] = f: delete g[e]
            }
            return b.call(a, d, g)
        }
        var e,
        a = "" + a;
        d.lastIndex = 0;
        d.test(a) && (a = a.replace(d, 
        function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, 
        ""))) {
            e = eval("(" + a + ")");
            return typeof b === "function" ? c({
                "": e
            },
            "") : e
        }
        throw new SyntaxError("JSON.parse");
    });
    return h
},
{
    requires: ["ua"]
});KISSY.add("json", 
function(b, c) {
    return {
        parse: function(j) {
            return b.isNullOrUndefined(j) || "" === j ? null: c.parse(j)
        },
        stringify: c.stringify
    }
},
{
    requires: ["json/json2"]
});
KISSY.add("ajax/form-serializer", 
function(b, c) {
    var j = /^(?:select|textarea)/i,
    f = /\r?\n/g,
    i = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;
    return {
        serialize: function(a) {
            var h = [],
            d = {};
            c.query(a).each(function(a) {
                a = a.elements ? b.makeArray(a.elements) : [a];
                h.push.apply(h, a)
            });
            h = b.filter(h, 
            function(a) {
                return a.name && !a.disabled && (a.checked || j.test(a.nodeName) || i.test(a.type))
            });
            b.each(h, 
            function(a) {
                var g = c.val(a),
                g = b.map(b.makeArray(g), 
                function(a) {
                    return a.replace(f, 
                    "\r\n")
                }),
                a = d[a.name] = d[a.name] || [];
                a.push.apply(a, g)
            });
            return b.param(d, void 0, void 0, !1)
        }
    }
},
{
    requires: ["dom"]
});
KISSY.add("ajax/xhrobject", 
function(b, c) {
    function j(a) {
        var c = a.responseText,
        d = a.responseXML,
        e = a.config,
        f = e.converters,
        i = a.converters || {},
        j,
        m,
        n = e.contents,
        o = e.dataType;
        if (c || d) {
            for (e = a.mimeType || a.getResponseHeader("Content-Type");
            "*" == o[0];) o.shift();
            if (!o.length) for (j in n) if (n[j].test(e)) {
                o[0] != j && o.unshift(j);
                break
            }
            o[0] = o[0] || "text";
            "text" == o[0] && void 0 !== c ? m = c: "xml" == o[0] && void 0 !== d ? m = d: b.each(["text", "xml"], 
            function(a) {
                var b = o[0];
                if (i[a] && i[a][b] || f[a] && f[a][b]) return o.unshift(a),
                m = "text" == 
                a ? c: d,
                !1
            })
        }
        n = o[0];
        for (e = 1; e < o.length; e++) {
            j = o[e];
            var p = i[n] && i[n][j] || f[n] && f[n][j];
            if (!p) throw "no covert for " + n + " => " + j;
            m = p(m);
            n = j
        }
        a.responseData = m
    }
    function f(a) {
        b.mix(this, {
            responseData: null,
            config: a || {},
            timeoutTimer: null,
            responseText: null,
            responseXML: null,
            responseHeadersString: "",
            responseHeaders: null,
            requestHeaders: {},
            readyState: 0,
            state: 0,
            statusText: null,
            status: 0,
            transport: null
        })
    }
    var i = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg;
    b.augment(f, c.Target, {
        setRequestHeader: function(a, b) {
            this.requestHeaders[a] = 
            b;
            return this
        },
        getAllResponseHeaders: function() {
            return 2 === this.state ? this.responseHeadersString: null
        },
        getResponseHeader: function(a) {
            var b;
            if (2 === this.state) {
                if (!this.responseHeaders) for (this.responseHeaders = {}; b = i.exec(this.responseHeadersString);) this.responseHeaders[b[1]] = b[2];
                b = this.responseHeaders[a]
            }
            return void 0 === b ? null: b
        },
        overrideMimeType: function(a) {
            this.state || (this.mimeType = a);
            return this
        },
        abort: function(a) {
            a = a || "abort";
            this.transport && this.transport.abort(a);
            this.callback(0, a);
            return this
        },
        callback: function(a, b) {
            if (2 != this.state) {
                this.state = 2;
                this.readyState = 4;
                var c;
                if (200 <= a && 300 > a || 304 == a) if (304 == a) b = "notmodified",
                c = !0;
                else try {
                    j(this),
                    b = "success",
                    c = !0
                } catch(e) {
                    b = "parsererror : " + e
                } else 0 > a && (a = 0);
                this.status = a;
                this.statusText = b;
                c ? this.fire("success") : this.fire("error");
                this.fire("complete");
                this.transport = void 0
            }
        }
    });
    return f
},
{
    requires: ["event"]
});
KISSY.add("ajax/base", 
function(b, c, j, f) {
    function i(a) {
        a = b.mix(b.clone(v), a || {},
        void 0, void 0, !0);
        if (!b.isBoolean(a.crossDomain)) {
            var c = g.exec(a.url.toLowerCase());
            a.crossDomain = !(!c || !(c[1] != p[1] || c[2] != p[2] || (c[3] || ("http:" === c[1] ? l: m)) != (p[3] || ("http:" === p[1] ? l: m))))
        }
        a.processData && a.data && !b.isString(a.data) && (a.data = b.param(a.data, void 0, void 0, a.serializeArray));
        a.type = a.type.toUpperCase();
        a.hasContent = !n.test(a.type);
        if (!a.hasContent && (a.data && (a.url += (/\?/.test(a.url) ? "&": "?") + a.data), !1 === 
        a.cache)) a.url += (/\?/.test(a.url) ? "&": "?") + "_ksTS=" + (b.now() + "_" + b.guid());
        a.dataType = b.trim(a.dataType || "*").split(e);
        a.context = a.context || a;
        return a
    }
    function a(a, b) {
        d.fire(a, {
            ajaxConfig: b.config,
            xhr: b
        })
    }
    function h(b) {
        var c = this.config,
        b = b.type;
        this.timeoutTimer && clearTimeout(this.timeoutTimer);
        c[b] && c[b].call(c.context, this.responseData, this.statusText, this);
        a(b, this)
    }
    function d(c) {
        if (c.url) {
            var c = i(c),
            d = new f(c);
            a("start", d);
            var e = new(q[c.dataType[0]] || q["*"])(d);
            d.transport = e;
            c.contentType && 
            d.setRequestHeader("Content-Type", c.contentType);
            var g = c.dataType[0],
            j = c.accepts;
            d.setRequestHeader("Accept", g && j[g] ? j[g] + ("*" === g ? "": ", */*; q=0.01") : j["*"]);
            for (var k in c.headers) d.setRequestHeader(k, c.headers[k]);
            d.on("complete success error", h);
            d.readyState = 1;
            a("send", d);
            c.async && 0 < c.timeout && (d.timeoutTimer = setTimeout(function() {
                d.abort("timeout")
            },
            1E3 * c.timeout));
            try {
                d.state = 1,
                e.send()
            } catch(l) {
                2 > d.status ? d.callback( - 1, l) : b.error(l)
            }
            return d
        }
    }
    var e = /\s+/,
    g = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    k = function(a) {
        return a
    },
    l = 80,
    m = 443,
    n = /^(?:GET|HEAD)$/,
    o,
    p;
    try {
        o = location.href
    } catch(t) {
        b.log("ajax/base get curLocation error : "),
        b.log(t),
        o = document.createElement("a"),
        o.href = "",
        o = o.href
    }
    p = g.exec(o);
    o = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/.test(p[1]);
    var q = {},
    v = {
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        async: !0,
        serializeArray: !0,
        processData: !0,
        accepts: {
            xml: "application/xml, text/xml",
            html: "text/html",
            text: "text/plain",
            json: "application/json, text/javascript",
            "*": "*/*"
        },
        converters: {
            text: {
                json: c.parse,
                html: k,
                text: k,
                xml: b.parseXML
            }
        },
        contents: {
            xml: /xml/,
            html: /html/,
            json: /json/
        }
    };
    v.converters.html = v.converters.text;
    b.mix(d, j.Target);
    b.mix(d, {
        isLocal: o,
        setupConfig: function(a) {
            b.mix(v, a, void 0, void 0, !0)
        },
        setupTransport: function(a, b) {
            q[a] = b
        },
        getTransport: function(a) {
            return q[a]
        },
        getConfig: function() {
            return v
        }
    });
    return d
},
{
    requires: ["json", "event", "./xhrobject"]
});
KISSY.add("ajax/xhrbase", 
function(b, c) {
    function j(a, b) {
        try {
            return new(b || f).XMLHttpRequest
        } catch(c) {}
    }
    var f = window,
    i = f.XDomainRequest,
    a = {
        proto: {}
    };
    a.xhr = f.ActiveXObject ? 
    function(a, d) {
        var e;
        if (a && i) e = new i;
        else if (! (e = !c.isLocal && j(a, d))) a: {
            try {
                e = new(d || f).ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch(g) {
                b.log("createActiveXHR error")
            }
            e = void 0
        }
        return e
    }: j;
    b.mix(a.proto, {
        sendInternal: function() {
            var a = this,
            c = a.xhrObj,
            e = c.config,
            f = a.xhr,
            j,
            l;
            e.username ? f.open(e.type, e.url, e.async, e.username, e.password) : 
            f.open(e.type, e.url, e.async);
            if (j = e.xhrFields) for (l in j) f[l] = j[l];
            c.mimeType && f.overrideMimeType && f.overrideMimeType(c.mimeType); ! e.crossDomain && !c.requestHeaders["X-Requested-With"] && (c.requestHeaders["X-Requested-With"] = "XMLHttpRequest");
            try {
                if (!e.crossDomain) for (l in c.requestHeaders) f.setRequestHeader(l, c.requestHeaders[l])
            } catch(m) {
                b.log("setRequestHeader in xhr error : "),
                b.log(m)
            }
            f.send(e.hasContent && e.data || null); ! e.async || 4 == f.readyState ? a._callback() : i && f instanceof i ? (f.onload = function() {
                f.readyState = 
                4;
                f.status = 200;
                a._callback()
            },
            f.onerror = function() {
                f.readyState = 4;
                f.status = 500;
                a._callback()
            }) : f.onreadystatechange = function() {
                a._callback()
            }
        },
        abort: function() {
            this._callback(0, 1)
        },
        _callback: function(a, d) {
            var e = this.xhr,
            f = this.xhrObj,
            j = f.config;
            try {
                if (d || 4 == e.readyState) if (i && e instanceof i ? (e.onerror = b.noop, e.onload = b.noop) : e.onreadystatechange = b.noop, d) 4 !== e.readyState && e.abort();
                else {
                    var l = e.status;
                    i && e instanceof i || (f.responseHeadersString = e.getAllResponseHeaders());
                    var m = e.responseXML;
                    m && m.documentElement && 
                    (f.responseXML = m);
                    f.responseText = e.responseText;
                    try {
                        var n = e.statusText
                    } catch(o) {
                        b.log("xhr statustext error : ", "error"),
                        b.log(o, "error"),
                        n = ""
                    } ! l && c.isLocal && !j.crossDomain ? l = f.responseText ? 200: 404: 1223 === l && (l = 204);
                    f.callback(l, n)
                }
            } catch(p) {
                b.log(p.stack || p, "error"),
                e.onreadystatechange = b.noop,
                d || f.callback( - 1, p)
            }
        }
    });
    return a
},
{
    requires: ["./base"]
});
KISSY.add("ajax/subdomain", 
function(b, c, j, f) {
    function i(a) {
        var b = a.config;
        this.xhrObj = a;
        a = b.url.match(h);
        this.__hostname = a[2];
        this.__protocol = a[1];
        b.crossDomain = !1
    }
    function a() {
        var b = e[this.__hostname];
        b.ready = 1;
        j.detach(b.iframe, "load", a, this);
        this.send()
    }
    var h = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    d = document,
    e = {};
    b.augment(i, c.proto, {
        send: function() {
            var g = this.xhrObj.config,
            h = this.__hostname,
            i = e[h],
            m = "/sub_domain_proxy.html";
            g.xdr && g.xdr.subDomain && g.xdr.subDomain.proxy && (m = g.xdr.subDomain.proxy);
            i && i.ready ? (this.xhr = c.xhr(0, i.iframe.contentWindow)) ? this.sendInternal() : b.error("document.domain not set correctly!") : (i ? g = i.iframe: (i = e[h] = {},
            g = i.iframe = document.createElement("iframe"), f.css(g, {
                position: "absolute",
                left: "-9999px",
                top: "-9999px"
            }), f.prepend(g, d.body || d.documentElement), g.src = this.__protocol + "//" + h + m), j.on(g, "load", a, this))
        }
    });
    return i
},
{
    requires: ["./xhrbase", "event", "dom"]
});
KISSY.add("ajax/xdr", 
function(b, c, j) {
    function f(a, b, c) {
        g || (g = !0, a = '<object id="' + h + '" type="application/x-shockwave-flash" data="' + a + '" width="0" height="0"><param name="movie" value="' + a + '" /><param name="FlashVars" value="yid=' + b + "&uid=" + c + '&host=KISSY.io" /><param name="allowScriptAccess" value="always" /></object>', b = e.createElement("div"), j.prepend(b, e.body || e.documentElement), b.innerHTML = a)
    }
    function i(a) {
        b.log("use flash xdr");
        this.xhrObj = a
    }
    var a = {},
    h = "io_swf",
    d,
    e = document,
    g = !1;
    b.augment(i, 
    {
        send: function() {
            var c = this,
            e = c.xhrObj.config;
            f((e.xdr || {}).src || b.Config.base + "ajax/io.swf", 1, 1);
            d ? (c._uid = b.guid(), a[c._uid] = c, d.send(e.url, {
                id: c._uid,
                uid: c._uid,
                method: e.type,
                data: e.hasContent && e.data || {}
            })) : setTimeout(function() {
                c.send()
            },
            200)
        },
        abort: function() {
            d.abort(this._uid)
        },
        _xdrResponse: function(b, c) {
            var d,
            e = this.xhrObj;
            e.responseText = decodeURI(c.c.responseText);
            switch (b) {
            case "success":
                d = {
                    status: 200,
                    statusText: "success"
                };
                delete a[c.id];
                break;
            case "abort":
                delete a[c.id];
                break;
            case "timeout":
            case "transport error":
            case "failure":
                delete a[c.id],
                d = {
                    status: 500,
                    statusText: b
                }
            }
            d && e.callback(d.status, d.statusText)
        }
    });
    c.applyTo = function(a, c, d) {
        var a = c.split("."),
        e = b;
        b.each(a, 
        function(a) {
            e = e[a]
        });
        e.apply(null, d)
    };
    c.xdrReady = function() {
        d = e.getElementById(h)
    };
    c.xdrResponse = function(b, c, d) {
        var e = a[c.uid];
        e && e._xdrResponse(b, c, d)
    };
    b.io = c;
    return i
},
{
    requires: ["./base", "dom"]
});
KISSY.add("ajax/xhr", 
function(b, c, j, f, i) {
    var a = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    h = window.XDomainRequest,
    d = j.xhr();
    if (d) {
        var e = function(a) {
            a = a.split(".");
            return 2 > a.length ? a.join(".") : a.reverse().slice(0, 2).reverse().join(".")
        },
        g = function(b) {
            var c = b.config,
            g = c.xdr || {};
            if (c.crossDomain) {
                c = c.url.match(a);
                if (e(location.hostname) == e(c[2])) return new f(b);
                if (! ("withCredentials" in d) && ("flash" === "" + g.use || !h)) return new i(b)
            }
            this.xhrObj = b
        };
        b.augment(g, j.proto, {
            send: function() {
                this.xhr = j.xhr(this.xhrObj.config.crossDomain);
                this.sendInternal()
            }
        });
        c.setupTransport("*", g)
    }
    return c
},
{
    requires: ["./base", "./xhrbase", "./subdomain", "./xdr"]
});
KISSY.add("ajax/script", 
function(b, c) {
    function j(b) {
        if (!b.config.crossDomain && !b.config.forceScript) return new(c.getTransport("*"))(b);
        this.xhrObj = b;
        return 0
    }
    var f = document;
    c.setupConfig({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            text: {
                script: function(c) {
                    b.globalEval(c);
                    return c
                }
            }
        }
    });
    b.augment(j, {
        send: function() {
            var b = this,
            a,
            c = this.xhrObj.config,
            d = f.head || f.getElementsByTagName("head")[0] || 
            f.documentElement;
            b.head = d;
            a = f.createElement("script");
            b.script = a;
            a.async = "async";
            c.scriptCharset && (a.charset = c.scriptCharset);
            a.src = c.url;
            a.onerror = a.onload = a.onreadystatechange = function(a) {
                a = a || window.event;
                b._callback((a.type || "error").toLowerCase())
            };
            d.insertBefore(a, d.firstChild)
        },
        _callback: function(b, a) {
            var c = this.script,
            d = this.xhrObj,
            e = this.head;
            if (c && (a || !c.readyState || /loaded|complete/.test(c.readyState) || "error" == b)) c.onerror = c.onload = c.onreadystatechange = null,
            e && c.parentNode && e.removeChild(c),
            this.head = this.script = void 0,
            !a && "error" != b ? d.callback(200, "success") : "error" == b && d.callback(500, "scripterror")
        },
        abort: function() {
            this._callback(0, 1)
        }
    });
    c.setupTransport("script", j);
    return c
},
{
    requires: ["./base", "./xhr"]
});
KISSY.add("ajax/jsonp", 
function(b, c) {
    c.setupConfig({
        jsonp: "callback",
        jsonpCallback: function() {
            return b.guid("jsonp")
        }
    });
    c.on("start", 
    function(c) {
        var c = c.xhr,
        f = c.config;
        if ("jsonp" == f.dataType[0]) {
            var i,
            a = f.jsonpCallback,
            h = b.isFunction(a) ? a() : a,
            d = window[h];
            f.url += (/\?/.test(f.url) ? "&": "?") + f.jsonp + "=" + h;
            window[h] = function(a) {
                1 < arguments.length && (a = b.makeArray(arguments));
                i = [a]
            };
            c.on("complete", 
            function() {
                window[h] = d;
                if (void 0 === d) try {
                    delete window[h]
                } catch(a) {} else i && d(i[0])
            });
            c.converters = c.converters || 
            {};
            c.converters.script = c.converters.script || {};
            c.converters.script.json = function() {
                i || b.error(" not call jsonpCallback : " + h);
                return i[0]
            };
            f.dataType.length = 2;
            f.dataType[0] = "script";
            f.dataType[1] = "json"
        }
    });
    return c
},
{
    requires: ["./base"]
});
KISSY.add("ajax/form", 
function(b, c, j, f) {
    c.on("start", 
    function(b) {
        b = b.xhr.config;
        if (b.form) {
            var a = j.get(b.form);
            if ("multipart/form-data" != (a.encoding || a.enctype).toLowerCase()) {
                if (a = f.serialize(a)) b.hasContent ? (b.data = b.data || "", b.data && (b.data += "&"), b.data += a) : b.url += (/\?/.test(b.url) ? "&": "?") + a
            } else a = b.dataType[0],
            "*" == a && (a = "text"),
            b.dataType.length = 2,
            b.dataType[0] = "iframe",
            b.dataType[1] = a
        }
    });
    return c
},
{
    requires: ["./base", "dom", "./form-serializer"]
});
KISSY.add("ajax/iframe-upload", 
function(b, c, j, f) {
    function i(a) {
        this.xhr = a
    }
    var a = document;
    f.setupConfig({
        converters: {
            iframe: f.getConfig().converters.text,
            text: {
                iframe: function(a) {
                    return a
                }
            }
        }
    });
    b.augment(i, {
        send: function() {
            var f = this.xhr,
            d = f.config,
            e,
            g = c.get(d.form);
            this.attrs = {
                target: c.attr(g, "target") || "",
                action: c.attr(g, "action") || ""
            };
            this.form = g;
            var i = b.guid("ajax-iframe");
            f.iframe = c.create("<iframe  id='" + i + "' name='" + i + "' style='position:absolute;left:-9999px;top:-9999px;'/>");
            f.iframeId = i;
            c.prepend(f.iframe, 
            a.body || a.documentElement);
            c.attr(g, {
                target: f.iframeId,
                action: d.url
            });
            if (d.data) {
                e = d.data;
                d = d.serializeArray;
                e = b.unparam(e);
                var i = [],
                l;
                for (l in e) for (var m = b.isArray(e[l]), n = b.makeArray(e[l]), o = 0; o < n.length; o++) {
                    var p = a.createElement("input");
                    p.type = "hidden";
                    p.name = l + (m && d ? "[]": "");
                    p.value = n[o];
                    c.append(p, g);
                    i.push(p)
                }
                e = i
            }
            this.fields = e;
            j.on(f.iframe, "load error", this._callback, this);
            g.submit()
        },
        _callback: function(a) {
            var b = this.xhr,
            a = a.type,
            e = b.iframe;
            if (e) {
                c.attr(this.form, this.attrs);
                if ("load" == 
                a) try {
                    var f = e.contentWindow.document;
                    f ? (b.responseXML = f, b.responseText = c.text(f.body), b.callback(200, "success")) : b.callback(500, "parser error")
                } catch(i) {
                    b.callback(500, "parser error")
                } else "error" == a && b.callback(500, "error");
                c.remove(this.fields);
                j.detach(e);
                setTimeout(function() {
                    c.remove(e)
                },
                30);
                b.iframe = null
            }
        },
        abort: function() {
            this._callback(0, 1)
        }
    });
    f.setupTransport("iframe", i);
    return f
},
{
    requires: ["dom", "event", "./base"]
});
KISSY.add("ajax", 
function(b, c, j) {
    b.mix(j, {
        serialize: c.serialize,
        get: function(c, i, a, h, d) {
            b.isFunction(i) && (h = a, a = i, i = void 0);
            return j({
                type: d || "get",
                url: c,
                data: i,
                success: a,
                dataType: h
            })
        },
        post: function(c, i, a, h) {
            b.isFunction(i) && (h = a, a = i, i = void 0);
            return j.get(c, i, a, h, "post")
        },
        jsonp: function(c, i, a) {
            b.isFunction(i) && (a = i, i = void 0);
            return j.get(c, i, a, "jsonp")
        },
        getScript: b.getScript,
        getJSON: function(c, i, a) {
            b.isFunction(i) && (a = i, i = void 0);
            return j.get(c, i, a, "json")
        },
        upload: function(c, i, a, h, d) {
            b.isFunction(a) && 
            (d = h, h = a, a = void 0);
            return j({
                url: c,
                type: "post",
                dataType: d,
                form: i,
                data: a,
                success: h
            })
        }
    });
    return j
},
{
    requires: "ajax/form-serializer,ajax/base,ajax/xhrobject,ajax/xhr,ajax/script,ajax/jsonp,ajax/form,ajax/iframe-upload".split(",")
});
KISSY.add("base/attribute", 
function(b, c) {
    function j(a, b, c, d, e, f, g) {
        g = g || c;
        return a.fire(b + (c.charAt(0).toUpperCase() + c.substring(1)) + "Change", {
            attrName: g,
            subAttrName: f,
            prevVal: d,
            newVal: e
        })
    }
    function f(a, b, c) {
        var d = a[b] || {};
        c && (a[b] = d);
        return d
    }
    function i(a) {
        return f(a, "__attrs", !0)
    }
    function a(a) {
        return f(a, "__attrVals", !0)
    }
    function h(a, b) {
        for (var d = 0, e = b.length; a != c && d < e; d++) a = a[b[d]];
        return a
    }
    function d(d, e, f, g, i) {
        var g = g || {},
        p,
        t,
        q;
        q = d.hasAttr(e);
        var v = e; ! q && -1 !== e.indexOf(".") && (p = e.split("."), e = 
        p.shift());
        q = d.get(e);
        p && (t = h(q, p));
        if (! (!p && q === f || p && t === f)) {
            if (p) {
                var w = t = b.clone(q),
                s = p.length - 1;
                if (0 <= s) {
                    for (var r = 0; r < s; r++) w = w[p[r]];
                    w != c && (w[p[r]] = f)
                }
                f = t
            }
            if (!g.silent && !1 === j(d, "before", e, q, f, v)) return ! 1;
            f = d.__set(e, f);
            if (!1 === f) return f;
            g.silent || (f = a(d)[e], j(d, "after", e, q, f, v), i ? i.push({
                prevVal: q,
                newVal: f,
                attrName: e,
                subAttrName: v
            }) : j(d, "", "*", [q], [f], [v], [e]));
            return d
        }
    }
    function e() {}
    e.INVALID = {};
    var g = e.INVALID;
    b.augment(e, {
        getAttrs: function() {
            return i(this)
        },
        getAttrVals: function() {
            var a = 
            {},
            b,
            c = i(this);
            for (b in c) a[b] = this.get(b);
            return a
        },
        addAttr: function(a, c, d) {
            var e = i(this),
            c = b.clone(c);
            e[a] ? b.mix(e[a], c, d) : e[a] = c;
            return this
        },
        addAttrs: function(a, c) {
            var d = this;
            b.each(a, 
            function(a, b) {
                d.addAttr(b, a)
            });
            c && d.set(c);
            return d
        },
        hasAttr: function(a) {
            return a && i(this).hasOwnProperty(a)
        },
        removeAttr: function(b) {
            this.hasAttr(b) && (delete i(this)[b], delete a(this)[b]);
            return this
        },
        set: function(a, c, e) {
            var f;
            if (b.isPlainObject(a)) {
                var g = a,
                a = 0;
                f = !0;
                e = c;
                c = [];
                for (a in g) if (f = d(this, a, g[a], e, c), !1 === 
                f) break;
                var h = [],
                i = [],
                q = [],
                v = [];
                b.each(c, 
                function(a) {
                    i.push(a.prevVal);
                    q.push(a.newVal);
                    h.push(a.attrName);
                    v.push(a.subAttrName)
                });
                h.length && j(this, "", "*", i, q, v, h);
                return f
            }
            return d(this, a, c, e)
        },
        __set: function(d, e) {
            var h,
            j = f(i(this), d, !0),
            o = j.validator,
            j = j.setter;
            if ((o = b.isString(o) ? this[o] : o) && !1 === o.call(this, e, d)) return ! 1;
            if (j = b.isString(j) ? this[j] : j) h = j.call(this, e, d);
            if (h === g) return ! 1;
            h !== c && (e = h);
            a(this)[d] = e
        },
        get: function(c) {
            var d,
            e,
            g; ! this.hasAttr(c) && -1 !== c.indexOf(".") && (d = c.split("."), 
            c = d.shift());
            e = f(i(this), c).getter;
            g = c in a(this) ? a(this)[c] : this.__getDefAttrVal(c);
            if (e = b.isString(e) ? this[e] : e) g = e.call(this, g, c);
            d && (g = h(g, d));
            return g
        },
        __getDefAttrVal: function(a) {
            var d = f(i(this), a),
            e;
            if (e = b.isString(d.valueFn) ? this[d.valueFn] : d.valueFn) e = e.call(this),
            e !== c && (d.value = e),
            delete d.valueFn,
            i(this)[a] = d;
            return d.value
        },
        reset: function(a, c) {
            if (b.isString(a)) return this.hasAttr(a) ? this.set(a, this.__getDefAttrVal(a), c) : this;
            var c = a,
            d = i(this),
            e = {};
            for (a in d) e[a] = this.__getDefAttrVal(a);
            this.set(e, c);
            return this
        }
    });
    c && (e.prototype.addAttrs = c);
    return e
});KISSY.add("base/base", 
function(b, c, j) {
    function f(b) {
        for (var a = this.constructor; a;) {
            var c = a.ATTRS;
            if (c) {
                var d = void 0;
                for (d in c) c.hasOwnProperty(d) && this.addAttr(d, c[d], !1)
            }
            a = a.superclass ? a.superclass.constructor: null
        }
        if (b) for (var e in b) b.hasOwnProperty(e) && this.__set(e, b[e])
    }
    b.augment(f, j.Target, c);
    return f
},
{
    requires: ["./attribute", "event"]
});KISSY.add("base", 
function(b, c, j) {
    c.Attribute = j;
    return c
},
{
    requires: ["base/base", "base/attribute"]
});
KISSY.add("cookie/base", 
function(b) {
    var c = document,
    j = encodeURIComponent,
    f = decodeURIComponent;
    return {
        get: function(i) {
            var a,
            h;
            if (b.isString(i) && "" !== i && (h = ("" + c.cookie).match(RegExp("(?:^| )" + i + "(?:(?:=([^;]*))|;|$)")))) a = h[1] ? f(h[1]) : "";
            return a
        },
        set: function(f, a, h, d, e, g) {
            var a = "" + j(a),
            k = h;
            "number" === typeof k && (k = new Date, k.setTime(k.getTime() + 864E5 * h));
            k instanceof Date && (a += "; expires=" + k.toUTCString());
            b.isString(d) && "" !== d && (a += "; domain=" + d);
            b.isString(e) && "" !== e && (a += "; path=" + e);
            g && (a += "; secure");
            c.cookie = f + "=" + a
        },
        remove: function(b, a, c, d) {
            this.set(b, "", -1, a, c, d)
        }
    }
});KISSY.add("cookie", 
function(b, c) {
    return c
},
{
    requires: ["cookie/base"]
});KISSY.add("core", 
function(b, c, j, f, i, a, h, d, e, g) {
    c = {
        UA: c,
        DOM: j,
        Event: f,
        EventTarget: f.Target,
        EventObject: f.Object,
        Node: i,
        NodeList: i,
        JSON: a,
        Ajax: h,
        IO: h,
        ajax: h,
        io: h,
        jsonp: h.jsonp,
        Anim: d,
        Easing: d.Easing,
        Base: e,
        Cookie: g,
        one: i.one,
        all: i.all,
        get: j.get,
        query: j.query
    };
    b.mix(b, c);
    return c
},
{
    requires: "ua,dom,event,node,json,ajax,anim,base,cookie".split(",")
});KISSY.use("core");
var TB = window.TB || {};TB.namespace = TB.namespace || 
function() {
    KISSY.namespace.apply(TB, arguments)
}; (function() {
    var g = KISSY,
    l = !"0" [0],
    L = l && !window.XMLHttpRequest,
    q = !!window.ActiveXObject,
    j = document,
    I = window,
    H,
    p,
    b = " ",
    B = "hover",
    d,
    s = "g_config" in I ? ("appId" in I.g_config ? parseInt(I.g_config["appId"]) : undefined) : undefined,
    M = "mini-cart",
    o = "mini-cart-no-layer",
    v = location.hostname.split("."),
    x = j.domain,
    C = x.indexOf("tmall.com") > -1,
    J = ~location.hostname.indexOf("daily.taobao.net") || ~location.hostname.indexOf("daily.tmall.net"),
    y = J ? ".daily.taobao.net": ".taobao.com",
    f = "",
    u = false,
    A = null,
    G = (j.location.href.indexOf("https://") === 0),
    r = {},
    k = {
        siteNav: function() {
            if (!d) {
                return
            }
            d.setAttribute("role", "navigation");
            g.each(z("menu", "*", d), 
            function(T) {
                TB.Global._addMenu(T)
            });
            var S = j.forms.topSearch;
            m(S, "submit", 
            function() {
                if (S.q.value == f) {
                    S.action = "http://list.taobao.com/browse/cat-0.htm"
                }
            });
            var i = z("cart", "li", d)[0];
            m(i, "click", 
            function(U) {
                var T = U.target || U.srcElement;
                if (T.nodeName != "A" && T.parentNode.nodeName === "A") {
                    T = T.parentNode
                }
                if (T.nodeName === "A" && T.href.indexOf("my_cart.htm") > -1) {
                    F(U);
                    w(i, "hover");
                    TB.Cart && TB.Cart.redirect(T, T.href);
                    if (I.MiniCart) {
                        I.MiniCart._clicked = false
                    }
                }
            });
            var O = "g_mytaobao_set_dynamic_count";
            var Q = false;
            var R = z("mytaobao", "li", d)[0];
            m(R, "mouseover", 
            function(U) {
                if (Q) {
                    return
                }
                if (!TB.Global.isLogin()) {
                    return
                }
                Q = true;
                window[O] = function(W) {
                    if (!W || !W[5] || !W[6] || !W[7]) {
                        return
                    }
                    var V = parseInt(W[6]) + parseInt(W[7]);
                    el = document.getElementById("myTaobaoPanel").getElementsByTagName("a")[1];
                    el2 = document.getElementById("myTaobaoPanel").getElementsByTagName("a")[2];
                    if (W[5] != 0) {
                        el2.innerHTML += '<span style="color:#f50;"> ' + W[5] + "</span>"
                    }
                    if (V == 0) {
                        return
                    }
                    if (V > 20) {
                        el.innerHTML += '<span style="color:#f50;"> 20+</span>'
                    } else {
                        el.innerHTML += '<span style="color:#f50;"> ' + V + "</span>"
                    }
                };
                var T = "http://i" + y + "/json/my_taobao_remind_data.htm?from=newsite&t=";
                g.getScript(T + g.now() + "&callback=" + O)
            });
            var N = false;
            var P = z("user", "span", d)[0];
            m(P, "mouseover", 
            function(X) {
                var Z = z("vip-stepleft", "a", d)[0];
                var Y = z("vip-stepright", "a", d)[0];
                var W;
                var U = "g_my_vip_icon";
                if (!TB.Global.isLogin()) {
                    return
                }
                if (N) {
                    return
                }
                N = true;
                window[U] = function(ag) {
                    var af = document.getElementById("J_VipContent");
                    var ab = document.getElementById("J_VipMedal");
                    if (!ag || ag.isSuccess === false) {
                        af.removeChild(ab);
                        af.style.height = "100px";
                        return
                    }
                    W = Math.ceil(ag.userMedals.length / 5);
                    var ah = [];
                    for (var ae = 0; ae < ag.userMedals.length; ae++) {
                        ah.push('<a title="' + ag.userMedals[ae].medalName + '" target="_self" href="' + ag.userMedals[ae].medalUrl + '"><img src="' + ag.userMedals[ae].pic + '" /></a>')
                    }
                    if (ah.length === 0) {
                        af.removeChild(ab);
                        af.style.height = "100px"
                    } else {
                        var ad = document.getElementById("J_VipMedalContent");
                        var ac = new RegExp("(\\s|^)vip-loading(\\s|$)");
                        ab.className = ab.className.replace(ac, "");
                        ad.innerHTML = ah.join("");
                        if (ah.length <= 5) {
                            Y.style.display = Z.style.display = "none"
                        }
                        ad.setAttribute("pageid", "1");
                        var aa = parseInt(ad.getAttribute("pageid"));
                        m(Z, "click", 
                        function(ai) {
                            if (aa > 1) {
                                aa = aa - 1;
                                ad.style.left = "-" + (aa - 1) * 205 + "px";
                                ad.setAttribute("pageid", aa)
                            }
                        });
                        m(Y, "click", 
                        function(ai) {
                            if (aa < W) {
                                ad.style.left = "-" + aa * 205 + "px";
                                aa = aa + 1;
                                ad.setAttribute("pageid", aa)
                            }
                        })
                    }
                };
                var T = h("_nk_") || h("tracknick");
                var V = "http://vipservice" + y + "/medal/GetUserVisibleMedals.do?from=diaoding&nick=";
                g.getScript(V + T + "&t=" + g.now() + "&callback=" + U, {
                    charset: "utf-8"
                })
            })
        },
        tDog: function() {
            if ((s && s != -1) || "tstart" in p || "tdog" in p) {
                var i = "http://" + H + "/p/header/webww-min.js?t=20110629.js",
                N = 0;
                g.ready(function() {
                    if (g.DOM) {
                        g.getScript(i)
                    } else {
                        if (N < 10) {
                            setTimeout(arguments.callee, 1000);
                            N++
                        } else {
                            g.use("core", 
                            function() {
                                g.getScript(i)
                            })
                        }
                    }
                })
            }
        },
        tLabs: function() {
            if (location.href.indexOf("tms.taobao.com") !== -1) {
                return
            }
            var T = window.location.href.indexOf("__tlabs-dev") !== -1,
            R = TB.Global.isLogin();
            if (!T) {
                if (R) {
                    var Q = h("l");
                    if (Q) {
                        var P = h("_nk_") || h("tracknick"),
                        O = Q.split("::"),
                        N = O[0],
                        S = O[1],
                        i = O[2].substring(0, 1) === "1";
                        N = encodeURIComponent(a(unescape(N.replace(/\\u/g, "%u"))));
                        if (N === P && i && new Date().getTime() < S) {
                            return
                        }
                    }
                } else {
                    return
                }
            }
            g.ready(function() {
                var V = "http://" + H + "/p/tlabs/1.0.0/tlabs-min.js?t=1.0.0.js",
                U = h("_nk_") || h("tracknick");
                U = encodeURIComponent(a(unescape(U.replace(/\\u/g, "%u"))));
                g.getScript(V, 
                function() {
                    if (typeof TLabs !== "undefined") {
                        TLabs.init({
                            nick: U
                        })
                    }
                })
            })
        },
        POCMonitor: function() {
            var R = I._poc || [],
            Q,
            O = 0,
            N = [["_setAccount", (I.g_config || 0).appId], ["_setStartTime", (I.g_config || 0).startTime || I.HUBBLE_st || I.g_hb_monitor_st]],
            P = 10000;
            while ((Q = R[O++])) {
                if (Q[0] === "_setRate") {
                    P = Q[1]
                } else {
                    if (Q[0] === "_setAccount") {
                        N[0] = Q
                    } else {
                        if (Q[0] === "_setStartTime") {
                            N[1] = Q
                        } else {
                            N.push(Q)
                        }
                    }
                }
            }
            if (parseInt(Math.random() * P) === 0) {
                I._poc = N;
                g.getScript("http://a.tbcdn.cn/p/poc/m.js?v=0.0.1.js")
            }
        },
        initHeaderLinks: function() {
            if (x.indexOf(".taobao.net") === -1) {
                return
            }
            var P = d ? d.getElementsByTagName("a") : [],
            O = 0,
            N = P.length,
            Q = v;
            while (Q.length > 3) {
                Q.shift()
            }
            Q = Q.join(".");
            for (; O < N; O++) {
                P[O].href = P[O].href.replace("taobao.com", Q)
            }
        },
        initSiteNav: function() {
            var O = j.getElementById("J_Service"),
            N = j.getElementById("J_ServicesContainer"),
            Q,
            i = "http://www.taobao.com/index_inc/2010c/includes/get-services.php",
            R = "__services_results";
            if (!O || !N) {
                return
            }
            m(O, "mouseover", P);
            m(O, "keydown", P);
            function P(S) {
                if (S.type === "keydown" && S.keyCode !== 39 && S.keyCode !== 40) {
                    return
                }
                Q = g.getScript(i + "?cb=" + R, {
                    charset: "gbk"
                });
                F(S)
            }
            window[R] = function(S) {
                if (Q) {
                    Q.parentNode.removeChild(Q)
                }
                Q = null;
                try {
                    N.innerHTML = S;
                    N.style.height = "auto";
                    c(O, "mouseover", P);
                    c(O, "keydown", P)
                } catch(T) {
                    N.style.display = "none"
                }
            }
        },
        test: function() {
            var i = false;
            var N = function() {
                if (i) {
                    return
                }
                i = true;
                if (location.href.indexOf("__cloudyrun__") > -1) {
                    g.getScript("http://assets.daily.taobao.net/p/cloudyrun/1.0/cloudyrun-taobao-pkg.js?t=" + ( + new Date()))
                }
            };
            g.ready(N);
            setTimeout(N, 4000)
        },
        assist: function() {
            if (h("test_accouts") && document.domain.indexOf("taobao.net") > -1) {
                g.ready(function() {
                    g.getScript("http://assets.daily.taobao.net/p/assist/login/login.js")
                })
            }
        },
        miniCart: function() {
            var i = TB.Global;
            if (i._OFF) {
                return
            }
            if (C || x.indexOf("tmall.net") > -1) {
                if (g.isUndefined(s)) {
                    return
                } else {
                    if (! (h("uc2") && h("mt"))) {
                        g.getScript("http://www" + y + "/go/app/tmall/login-api.php?t=" + g.now());
                        return
                    }
                }
            }
            i.initMiniCart()
        },
        shareFB: function() {
            g.ready(function() {
                var i = "http://" + H + "/apps/matrix-mission/feedback/feedback.js";
                g.getScript(i)
            })
        },
        checkB2BUser: function() {
            var O = g.unparam(h("uc1"));
            var i = encodeURIComponent(location.href);
            if (!O.cbu) {
                return
            }
            if (i.indexOf("www.taobao.com") > -1 && !/taobao\.com\/(\w+)/g.test(i)) {
                return
            }
            if (i.indexOf("list.taobao.com") > -1 || i.indexOf("service.taobao.com") > -1) {
                return
            }
            var P = document.createElement("div");
            P.className = "cbu-cover";
            P.innerHTML = "<!--[if lte IE 6.5]><iframe></iframe><![endif]-->";
            document.body.appendChild(P);
            var N = document.createElement("iframe");
            N.src = "http://reg" + y + "/member/changeNick2B.jhtml?t=" + g.now() + "&url=" + i;
            N.className = "cbu-iframe";
            N.allowTransparency = "true";
            document.body.appendChild(N);
            document.documentElement.style.overflow = "hidden"
        }
    };
    var E = ["tDog", "tLabs", "test"];
    for (var K = 0; K < E.length; K++) { (function(N) {
            var i = k[N];
            k[N] = function() {
                setTimeout(i, 1000)
            }
        })(E[K])
    }
    TB.Global = {
        _addMenu: function(Q) {
            if (!Q) {
                return
            }
            var N = this,
            R = z("menu-hd", "*", Q)[0],
            P = z("menu-bd", "*", Q)[0];
            if (!P || !R) {
                return
            }
            R.tabIndex = 0;
            N._subMenus.push(P);
            P.setAttribute("role", "menu");
            P.setAttribute("aria-hidden", "true");
            if (!P.getAttribute("id")) {
                P.setAttribute("id", g.guid("menu-"))
            }
            R.setAttribute("aria-haspopup", P.getAttribute("id"));
            R.setAttribute("aria-label", "\u53f3\u952e\u5f39\u51fa\u83dc\u5355\uff0ctab\u952e\u5bfc\u822a\uff0cesc\u5173\u95ed\u5f53\u524d\u83dc\u5355");
            var O = false;
            if (!G && L) {
                O = j.createElement("iframe");
                O.src = "about: blank";
                O.className = "menu-bd";
                Q.insertBefore(O, P)
            }
            m(Q, "mouseover", 
            function(T) {
                var S = T.relatedTarget;
                while (S && S !== Q) {
                    S = S.parentNode
                }
                if (S !== Q) {
                    g.each(N._subMenus, 
                    function(U) {
                        if (U !== P) {
                            w(U.parentNode, B);
                            U.setAttribute("aria-hidden", "true")
                        }
                    });
                    D(Q, B);
                    P.setAttribute("aria-hidden", "false");
                    if (!O) {
                        return
                    }
                    O.style.height = parseInt(P.offsetHeight) + 25 + "px";
                    O.style.width = parseInt(P.offsetWidth) + 1 + "px"
                }
            });
            m(Q, "mouseout", 
            function(T) {
                var S = T.relatedTarget;
                while (S && S !== Q) {
                    S = S.parentNode
                }
                if (S !== Q) {
                    w(Q, B);
                    P.setAttribute("aria-hidden", "true");
                    g.each(P.getElementsByTagName("input"), 
                    function(U) {
                        if (U.getAttribute("type") !== "hidden") {
                            U.blur()
                        }
                    })
                }
            });
            m(Q, "keydown", 
            function(T) {
                var S = T.keyCode;
                if (S == 27 || S == 37 || S == 38) {
                    w(Q, B);
                    P.setAttribute("aria-hidden", "true");
                    R.focus();
                    F(T)
                } else {
                    if (S == 39 || S == 40) {
                        D(Q, B);
                        P.setAttribute("aria-hidden", "false");
                        F(T)
                    }
                }
            });
            var i;
            m(Q, q ? "focusin": "focus", 
            function() {
                if (i) {
                    clearTimeout(i);
                    i = null
                }
            },
            !q);
            m(Q, q ? "focusout": "blur", 
            function() {
                i = setTimeout(function() {
                    w(Q, B);
                    P.setAttribute("aria-hidden", "true")
                },
                100)
            },
            !q)
        },
        _fixIE6: function(N, i) {
            if (!this._sharedShim) {
                this._sharedShim = j.createElement("iframe");
                this._sharedShim.src = "about: blank";
                this._sharedShim.className = "menu-bd"
            }
            N.insertBefore(this._sharedShim, i);
            return this._sharedShim
        },
        init: function(i) {
            if (u) {
                return
            }
            u = true;
            H = J ? "assets.daily.taobao.net": "a.tbcdn.cn";
            p = g.unparam(location.search.substring(1));
            d = j.getElementById("site-nav");
            this._OFF = !!!d;
            this.config = i;
            if (i && i.mc && i.mc === -1) {
                this._OFF = true
            }
            if (window.top !== window.self) {
                this._OFF = true
            }
            this._subMenus = [];
            for (var N in k) {
                k[N]()
            }
            if (~location.search.indexOf("__test__=global.js")) {
                g.ready(function() {
                    g.later(O, 3000)
                });
                function O() {
                    var P = ["Light", "TLabs"];
                    for (var Q = 0; Q < P.length; Q++) {
                        if (typeof P === "undefined") {
                            alert("test case: failure");
                            return
                        }
                    }
                    alert("test case: success")
                }
            }
        },
        writeLoginInfo: function(al, R) {
            al = al || {};
            var aa = this,
            ak = h("_nk_") || h("tracknick"),
            O = n(h("uc1")),
            af = parseInt(O._msg_) || 0,
            W = g.now(),
            Y = "http://login.taobao.com",
            i = "http://reg.taobao.com",
            ah = al.outmemServer || "http://outmem.taobao.com",
            N = al.loginServer || "https://login.taobao.com",
            ab = al.loginUrl || N + "/member/login.jhtml?f=top",
            S = location.href,
            ac,
            ai,
            Q,
            aj,
            ag,
            X = f;
            if (/^http.*(\/member\/login\.jhtml)$/i.test(S)) {
                S = f
            }
            ac = al.redirectUrl || S;
            if (ac) {
                ab += "&redirectURL=" + encodeURIComponent(ac)
            }
            ai = al.logoutUrl || Y + "/member/logout.jhtml?f=top&out=true&redirectURL=" + encodeURIComponent(ac);
            Q = i + "/member/new_register.jhtml?from=tbtop&ex_info=&ex_sign=";
            aj = ah + "/message/list_private_msg.htm?t=" + W;
            ag = "http://ju.mmstat.com/?url=http://i.taobao.com/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739";
            A = ai;
            if (aa.isLogin()) {
                X = aa.showVIP(ai)
            } else {
                X = '\u4eb2\uff0c\u6b22\u8fce\u6765\u6dd8\u5b9d\uff01\u8bf7<a href="' + ab + '" target="_top">\u767b\u5f55</a>';
                X += '<a href="' + Q + '" target="_top">\u514d\u8d39\u6ce8\u518c</a>'
            }
            if (R) {
                var T = document.getElementById("site-nav");
                if (T) {
                    var ad = z("login-info", "*", T)[0];
                    if (ad && ad.className === "login-info") {
                        ad.innerHTML = X
                    }
                }
                return
            }
            j.write(X);
            if (aa.showVIP(ai).length < 1) {
                return
            }
            var ae = document.getElementById("J_Vip_Areas");
            var Z = null;
            m(ae, "mouseover", 
            function(am) {
                if (U(am, this)) {
                    Z && Z.cancel();
                    D(ae, "user-hover")
                }
            });
            m(ae, "mouseout", 
            function(am) {
                if (U(am, this)) {
                    Z && Z.cancel();
                    Z = g.later(function() {
                        w(ae, "user-hover")
                    },
                    300)
                }
            });
            function V(am, an) {
                while (an && an.nodeName !== "BODY") {
                    if (am === an.parentNode) {
                        return true
                    }
                    an = an.parentNode
                }
                return false
            }
            function U(an, am) {
                if (P(an).type == "mouseover") {
                    return ! V(am, P(an).relatedTarget || P(an).fromElement) && !((P(an).relatedTarget || P(an).fromElement) === am)
                } else {
                    return ! V(am, P(an).relatedTarget || P(an).toElement) && !((P(an).relatedTarget || P(an).toElement) === am)
                }
            }
            function P(am) {
                return am || window.event
            }
        },
        showVIP: function(P) {
            var V = parseInt(n(h("uc1"))["tag"]),
            Q = f,
            N = f,
            R = f,
            S = "http://vip" + y,
            O = g.now(),
            i = h("_nk_") || h("tracknick"),
            U = "http://ju.mmstat.com/?url=http://i.taobao.com/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739";
            if (V === 0 || V === -1) {
                N = '<a class="vip-my-power" href="http://vip.taobao.com/new.htm" rel="nofollow" target="_top">\u65b0\u624b\u7279\u8bad\u8425\u8d2d\u7269\u5165\u95e8</a>'
            } else {
                if (V === 7) {
                    N = '<a class="vip-my-power" href="http://vip.taobao.com/vip_club.htm" rel="nofollow" target="_top">\u7acb\u523b\u6fc0\u6d3b\u6211\u7684\u8eab\u4efd</a>'
                } else {
                    N = '<a class="vip-my-power" href="http://vip.taobao.com/growth_info.htm" rel="nofollow" target="_top">\u67e5\u770b\u6211\u7684\u4f1a\u5458\u7279\u6743</a>'
                }
            }
            if (V === 0 || V === -1) {
                R = '<a class="vip-my-service" href="http://vip.taobao.com/newuser/newGift.htm" rel="nofollow" target="_top">\u5feb\u53bb\u9886\u65b0\u4eba\u793c\u91d1!</a>'
            } else {
                if (V > 2 && V < 7) {
                    R = '<a class="vip-my-service" href="http://service.taobao.com/support/minerva/robot_main.htm?dcs=2&sourceId=400&businessId=100&moduleGroupId=taobaocrm" rel="nofollow" target="_top">\u6211\u7684\u5ba2\u670d</a>'
                } else {
                    R = '<a class="vip-my-service" href="http://vip.taobao.com/growth_info.htm" rel="nofollow" target="_top">\u6211\u7684\u6210\u957f</a>'
                }
            }
            if (g.indexOf(V, [0, 1, 2, 3, 4, 5, 6, 7]) > -1) {
                Q = '<span class="vip-areas user" id="J_Vip_Areas"><span class="vip-head"><a class="user-nick" href="' + U + '" target="_top">' + a(unescape(i.replace(/\\u/g, "%u"))) + '</a><a class="vip-icon' + V + '" id="J_VipIcon" rel="nofollow" target="_top" href="http://vip.taobao.com/"></a><b></b></span><span class="vip-content" id="J_VipContent"><a href="http://ju.mmstat.com/?url=http://i.taobao.com/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739" class="avatar"><img src="http://wwc.taobaocdn.com/avatar/getAvatar.do?userNick=' + T(a(unescape(i.replace(/\\u/g, "%u")))).toLowerCase() + '&width=80&height=80&type=sns" width="80" height="80"/></a><span class="vip-operate"><a href="http://member1.taobao.com/member/fresh/account_security.htm" target="_top">\u5e10\u53f7\u7ba1\u7406</a><a target="_top" href="' + P + '" id="J_Logout">\u9000\u51fa</a></span><span class="vip-my-level"><a class="vip-my-level' + V + '" target="_top" href="http://vip.taobao.com/growth_info.htm" rel="nofollow" target="_top"></a></span>' + N + R + '<span class="vip-medal vip-loading" id="J_VipMedal"><span class="vip-medalgroup"><span class="vip-medal-content" id="J_VipMedalContent"></span></span><span class="vip-step"><a href="javascript:;" target="_self" class="vip-stepleft"><s class="arrow arrow-lthin"><s></s></s></a><a href="javascript:;" target="_self" class="vip-stepright"><s class="arrow arrow-rthin"><s></s></s></a></span></span></span></span>'
            } else {
                Q = '<span class="vip-areas user user-special" id="J_Vip_Areas"><span class="vip-head vip-head-special"><a class="user-nick" href="' + U + '" target="_top">' + a(unescape(i.replace(/\\u/g, "%u"))) + '</a><b></b></span><span class="vip-content vip-content-special" id="J_VipContent"><a href="http://ju.mmstat.com/?url=http://i.taobao.com/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739" class="avatar"><img src="http://wwc.taobaocdn.com/avatar/getAvatar.do?userNick=' + encodeURIComponent(i) + '&width=80&height=80&type=sns" width="80" height="80"/></a><span class="vip-operate"><a href="http://member1.taobao.com/member/fresh/account_security.htm" target="_top">\u5e10\u53f7\u7ba1\u7406</a><a target="_top" href="' + P + '" id="J_Logout">\u9000\u51fa</a></span>' + N + R + '<span class="vip-medal vip-loading" id="J_VipMedal"><span class="vip-medalgroup"><span class="vip-medal-content" id="J_VipMedalContent"></span></span><span class="vip-step"><a href="javascript:;" target="_self" class="vip-stepleft"><s class="arrow arrow-lthin"><s></s></s></a><a href="javascript:;" target="_self" class="vip-stepright"><s class="arrow arrow-rthin"><s></s></s></a></span></span></span></span>'
            }
            function T(Y) {
                var X = document.createElement("img");
                function W(Z) {
                    if (!Z) {
                        return ""
                    }
                    if (window.ActiveXObject) {
                        execScript('SetLocale "zh-cn"', "vbscript");
                        return Z.replace(/[\d\D]/g, 
                        function(aa) {
                            window.vbsval = "";
                            execScript('window.vbsval=Hex(Asc("' + aa + '"))', "vbscript");
                            return "%" + window.vbsval.slice(0, 2) + "%" + window.vbsval.slice( - 2)
                        })
                    }
                    X.src = "http://www.atpanel.com/jsclick?globaljs=1&separator=" + Z;
                    return X.src.split("&separator=").pop()
                }
                return Y.replace(/([^\x00-\xff]+)|([\x00-\xff]+)/g, 
                function(aa, Z, ab) {
                    return W(Z) + encodeURIComponent(ab || "")
                })
            }
            return Q
        },
        isLogin: function() {
            var N = h("tracknick"),
            i = h("_nk_") || N;
            return !! (h("_l_g_") && i || h("ck1") && N)
        },
        getCartElem: function() {
            return d && z("cart", "li", d)[0]
        },
        initMiniCart: function() {
            var U = this;
            if (U._OFF = (U._OFF || !!!U.getCartElem())) {
                return
            }
            var i = n(h("mt")),
            V = i && i.ci ? i.ci.split("_") : [undefined, undefined],
            S = parseInt(V[0], 10),
            O = parseInt(V[1], 10),
            R = i ? i.cp: undefined,
            Q = U.isLogin(),
            P = "http://cart" + y + "/top_cart_quantity.htm?",
            N = "http://count." + (J ? "config-vip.taobao.net:8888": "tbcdn.cn") + "/counter6";
            request = function(W) {
                W = W || 0;
                if (W) {
                    var X = {
                        keys: "TCART_234_" + W + "_q",
                        t: g.now()
                    };
                    g.jsonp(N, X, 
                    function(Z) {
                        if (Z) {
                            var Y = O >= 0 ? O: (Q ? 1: 0);
                            TB.Global.setCartNum(Z[X.keys]);
                            t("mt", "ci=" + Z[X.keys] + "_" + Y + (R ? "&" + R: ""), 7, y)
                        } else {
                            if (Q) {
                                request()
                            }
                        }
                    })
                } else {
                    g.getScript(P + "callback=TB.Global.setCartNum&t=" + g.now() + (s ? "&appid=" + s: f))
                }
            };
            U._OFF = V < 0;
            if (Q) {
                if (i) {
                    if (O == 1) {
                        TB.Global.setCartNum(S)
                    } else {
                        request()
                    }
                } else {
                    request(h("unb"))
                }
            } else {
                var T = h("t");
                if (T) {
                    if (S >= 0) {
                        TB.Global.setCartNum(S)
                    } else {
                        request(T)
                    }
                } else {
                    TB.Global.setCartNum(0)
                }
            }
        },
        setCartNum: function(O) {
            if (!g.isNumber(O) || TB.Global._OFF) {
                return
            }
            var N = TB.Global.getCartElem();
            if (!N) {
                return
            }
            var P = N.getElementsByTagName("a")[0],
            Q = '<span class="mini-cart-line"></span><s></s>\u8d2d\u7269\u8f66',
            i = s !== 19;
            if (O < 0) {
                TB.Global._OFF = O === -1;
                P.innerHTML = Q;
                w(N, M);
                I.MiniCart && I.MiniCart.hide();
                return
            }
            P.innerHTML = Q + '<span class="mc-count' + (O < 10 ? " mc-pt3": f) + '">' + O + "</span>\u4ef6" + (i ? "<b></b>": f);
            P.href = "http://ju.mmstat.com/?url=http://cart.taobao.com/my_cart.htm?from=mini&ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739";
            D(N, M);
            if (!i) {
                D(N, o)
            }
            D(N, "menu");
            D(P, "menu-hd");
            P.id = "mc-menu-hd";
            if (I.MiniCart) {
                I.MiniCart.cartNum = O;
                I.MiniCart.isExpired = true
            } else {
                g.ready(function() {
                    var R = 0;
                    g.getScript("http://" + H + "/apps/cart/mini/minicart-min.js?t=20130328.js", 
                    function() {
                        if (g.DOM) {
                            if (I.MiniCart) {
                                I.MiniCart.init(O, i)
                            }
                        } else {
                            if (R < 10) {
                                setTimeout(arguments.callee, 1000);
                                R++
                            } else {
                                g.use("core", 
                                function() {
                                    I.MiniCart.init(O, i)
                                })
                            }
                        }
                    })
                })
            }
        },
        run: function(i) {
            var N = this;
            N.initMiniCart();
            if (N.isLogin()) {
                var O = 0;
                g.later(function() {
                    var Q = j.getElementById("J_Logout");
                    if (!Q) {
                        if (O < 20) {
                            setTimeout(arguments.callee, 20);
                            O++
                        }
                        return
                    }
                    var P = N.showVIP(A || "");
                    if (P.length < 1) {
                        return
                    }
                    var R = j.createElement("div");
                    R.innerHTML = P;
                    Q.parentNode.insertBefore(R.firstChild, Q);
                    N._addMenu(R.firstChild)
                },
                30)
            }
        },
        setUserMsg: function(P) {
            if (P.success && P.success === "true") {
                var O = g.DOM;
                if (!O) {
                    return
                }
                var R = O.get(".login-info", d),
                Q = O.offset(R),
                N = O.get("#gb-msg-notice"),
                i;
                if (!N) {
                    N = O.create('<div id="gb-msg-notice"><div class="gb-msg-inner gb-msg-info"><p class="gb-msg-content">' + P.result["messages"][0] + '</p><div class="gb-msg-icon gb-msg-close" title="\u5173\u95ed"></div></div><div class="gb-msg-icon gb-msg-tri"><div class="gb-msg-icon gb-msg-tri-inner"></div></div></div>');
                    O.append(N, d.parentNode);
                    O.offset(N, {
                        left: Q.left + 30,
                        top: Q.top + O.height(R) + 1
                    });
                    g.Event.on(N, "click", 
                    function(T) {
                        var S = T.target;
                        if (O.hasClass(S, "gb-msg-close")) {
                            O.hide(N)
                        }
                    })
                } else {
                    i = O.get(".gb-msg-content", N);
                    O.html(i, P.result["messages"][0]);
                    O.show(N)
                }
            }
        }
    };
    TB.Cart = g.merge({},
    {
        domain: document.domain.indexOf("taobao.net") > -1 ? "daily.taobao.net": "taobao.com",
        API: "http://cart.%domain%/check_cart_login.htm",
        cache: {},
        popup: null,
        redirect: function(Q, P) {
            var O = g.makeArray(arguments);
            var R = arguments.callee;
            var i = this;
            if (P.indexOf("ct=") === -1 && h("t")) {
                P = P + (P.indexOf("?") === -1 ? "?": "&") + "ct=" + h("t")
            }
            if (!g.DOM || !g.Event) {
                g.getScript("http://a.tbcdn.cn/s/kissy/1.1.6/packages/core-min.js", 
                function() {
                    R.apply(i, O)
                });
                return
            }
            this._addStyleSheetOnce();
            var N = g.guid();
            this.cache[N] = g.makeArray(arguments);
            g.getScript(this.API.replace("%domain%", this.domain) + "?callback=TB.Cart.redirectCallback&guid=" + N, {
                timeout: 4000,
                error: function() {
                    window.top.location.href = P
                }
            })
        },
        redirectCallback: function(O) {
            var N = O.guid;
            var i = g.trim(this.cache[N][1]);
            if (!O.needLogin) {
                window.top.location.href = i;
                return
            }
            if (!N) {
                throw Error("[error] guid not found in callback data")
            }
            if (!this.popup) {
                this.popup = this._initPopup()
            }
            this._initLoginIframe(i)
        },
        hidePopup: function(i) {
            i && i.preventDefault && i.preventDefault();
            g.DOM.css(this.popup, "visibility", "hidden")
        },
        showPopup: function() {
            this._centerPopup();
            g.DOM.css(this.popup, "visibility", "visible")
        },
        _centerPopup: function() {
            var i = (g.DOM.viewportHeight() - parseInt(g.DOM.css(this.popup, "height"), 10)) / 2;
            i = i < 0 ? 0: i;
            g.DOM.css(this.popup, "top", i)
        },
        _addStyleSheetOnce: function() {
            if (!this._stylesheetAdded) {
                g.DOM.addStyleSheet("#g-cartlogin{position:fixed;_position:absolute;border:1px solid #aaa;left:50%;top:120px;margin-left:-206px;width:412px;height:272px;z-index:100000000;background:#fafafa;-moz-box-shadow:rgba(0,0,0,0.2) 3px 3px 3px;-webkit-box-shadow:3px 3px 3px rgba(0,0,0,0.2);filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=3,OffY=3,Color=#16000000,Positive=true);} #g_minicart_login_close{position:absolute;right:5px;top:5px;width:17px;height:17px;background:url(http://img01.taobaocdn.com/tps/i1/T1krl0Xk8zXXXXXXXX-194-382.png) no-repeat -100px -69px;text-indent:-999em;overflow:hidden;}#g-cartlogin-close{cursor:pointer;position:absolute;right:5px;top:5px;width:17px;height:17px;line-height:0;overflow:hidden;background:url(http://img03.taobaocdn.com/tps/i1/T1k.tYXadGXXXXXXXX-146-77.png) no-repeat -132px 0;text-indent:-999em;}");
                this._stylesheetAdded = true
            }
        },
        _initPopup: function() {
            var i = g.DOM.create('<div id="g-cartlogin"></div>');
            g.DOM.append(i, g.DOM.get("body"));
            return i
        },
        _initLoginIframe: function(i) {
            var N = "https://login." + this.domain + "/member/login.jhtml?from=globalcart&style=mini&redirectURL=" + encodeURIComponent(i) + "&full_redirect=true";
            this.popup.innerHTML = '<iframe src="' + N + '" width="410" height="270" frameborder="0" scrolling="0"></iframe><span title="\u5173\u95ed" id="g-cartlogin-close">\u5173\u95ed</span>';
            g.Event.on("#g-cartlogin-close", "click", this.hidePopup, this);
            this.showPopup()
        }
    });
    function e(i) {
        return (typeof i == "string") && i !== ""
    }
    function h(N) {
        if (I.userCookie && !g.isUndefined(I.userCookie[N])) {
            return I.userCookie[N]
        }
        if (g.isUndefined(r[N])) {
            var i = j.cookie.match("(?:^|;)\\s*" + N + "=([^;]*)");
            r[N] = (i && i[1]) ? decodeURIComponent(i[1]) : f
        }
        return r[N]
    }
    function t(O, T, i, P, R, Q) {
        var S = String(T),
        N = i;
        if (typeof N === "number") {
            N = new Date();
            N.setTime(N.getTime() + i * 24 * 60 * 60 * 1000)
        }
        if (N instanceof Date) {
            S += "; expires=" + N.toUTCString()
        }
        if (e(P)) {
            S += "; domain=" + P
        }
        if (e(R)) {
            S += "; path=" + R
        }
        if (Q) {
            S += "; secure"
        }
        j.cookie = O + "=" + S
    }
    function a(N) {
        var O = j.createElement("div"),
        i = j.createTextNode(N);
        O.appendChild(i);
        return O.innerHTML
    }
    function z(V, W, N) {
        var P = N.getElementsByTagName(W || "*"),
        T = [],
        R = 0,
        Q = 0,
        S = P.length,
        O,
        U;
        V = b + V + b;
        for (; R < S; ++R) {
            O = P[R];
            U = O.className;
            if (U && (b + U + b).indexOf(V) > -1) {
                T[Q++] = O
            }
        }
        return T
    }
    function m(P, O, N, i) {
        if (!P) {
            return
        }
        if (P.addEventListener) {
            P.addEventListener(O, N, !!i)
        } else {
            if (P.attachEvent) {
                P.attachEvent("on" + O, N)
            }
        }
    }
    function c(P, O, N, i) {
        if (!P) {
            return
        }
        if (P.removeEventListener) {
            P.removeEventListener(O, N, !!i)
        } else {
            if (P.detachEvent) {
                P.detachEvent("on" + O, N)
            }
        }
    }
    function D(O, i) {
        var N = b + O.className + b;
        if (N.indexOf(b + i + b) === -1) {
            N += i;
            O.className = g.trim(N)
        }
    }
    function w(O, i) {
        var N = b + O.className + b;
        if (N.indexOf(b + i + b) !== -1) {
            N = N.replace(b + i + b, b);
            O.className = g.trim(N)
        }
    }
    function n(i) {
        if (I.userCookie && I.userCookie.version == "2") {
            return g.unparam(i, "&amp;")
        }
        return g.unparam(i)
    }
    function F(i) {
        if (i.preventDefault) {
            i.preventDefault()
        } else {
            i.returnValue = false
        }
    }
})();
/*pub-1|2012-08-02 11:50:05*/
 (function(D) {
    var E = ~location.host.indexOf("taobao.net");
    var B = E ? "assets.daily.taobao.net": "a.tbcdn.cn";
    var C = location.host;
    var A = document.getElementsByTagName("script");
    var G = A[A.length - 1];
    var F = G.getAttribute("data-fp-timestamp") || "20120415";
    D.config({
        map: [[/(.+\/.+)fp\/fp-min\.js(\?[^?]+)?$/, "$1fp/??fp.js,ecpm.js,localstorage.js,act/act.js,attraction/attraction.js,attraction/ald.js,hotsale/hotsale.js,local/local.js,mainpromo/mainpromo.js,recom/recom.js,search/search.js,sitenav/sitenav.js,status/status.js,guide/guide.js,footer/footer.js,searchsuggest.js$2.js"], [/(.+fp\/.+)-min.js(\?[^?]+)?$/, "$1.js$2"], [/.+?(switchable|suggest|datalazyload|sizzle|template)-min\.js(\?[^?]+)?$/, "http://a.tbcdn.cn/??s/kissy/1.2.0/switchable-min.js,s/kissy/1.2.0/suggest-min.js,s/kissy/1.2.0/datalazyload-min.js,s/kissy/1.2.0/sizzle-min.js,s/kissy/1.2.0/template-min.js"]],
        packages: [{
            name: "fp",
            charset: "utf-8",
            path: "http://" + B + "/p/fp/2012/",
            tag: F
        }]
    });
    D.onRequire = function(H) {
        if (!H || !H.value) {
            return
        }
        var I = H.value;
        var J = (I.prototype && I.prototype.log && H.name !== "fp/module") ? "augment": (I.log ? "mix": "");
        J && D[J](I, {
            modName: H.name,
            config: {
                cdnPath: B,
                wwwPath: C
            }
        });
        return I
    };
    D.ready(function() {
        if (~location.href.indexOf("__cr__")) {
            D.use("fp/cloudyrun", 
            function(I, H) {
                new H()
            })
        }
        if (~location.href.indexOf("__tms__")) {
            D.later(function() {
                D.use("fp/tms", 
                function(H, I) {
                    new I()
                })
            },
            500)
        }
    })
})(KISSY);
/*pub-1|2012-03-29 08:57:57*/
KISSY.add("fp/module", 
function(F, B) {
    function E() {
        C(this.el, this.events, this)
    }
    F.mix(E.prototype, F.EventTarget);
    var D = F.mix({},
    F.EventTarget);
    E.prototype.listen = function(I, K, J) {
        D.on.apply(D, arguments)
    };
    E.prototype.broadcast = function(I, J) {
        D.fire.apply(D, arguments)
    };
    var G = location && (location.search || "");
    var H = "";
    if (G.indexOf("is-debug=") !== -1) {
        H = G.split("is-debug=")[1].split("&")[0]
    }
    var A = (function() {
        var O = 5;
        var I;
        if (H.charAt(1) === "s") {
            F.getScript("http://assets.daily.taobao.net/apps/cart/3.0/core/logviewer.js?t=" + ( + new Date()))
        }
        if (H && (I = parseInt(H, 10))) {
            O = I
        }
        var M = ["error", "warn", "info", "debug", "log"];
        var L = function() {};
        var J = [];
        if (!window.log_cache) {
            window.log_cache = J
        }
        var N = {};
        for (var K = 0; K < M.length; K++) { (function() {
                var P = M[K];
                N[P] = K >= O ? L: function() {
                    var Q = F.makeArray(arguments);
                    if (typeof Q[0] === "string") {
                        Q[0] = "[" + this.modName + "] " + Q[0]
                    }
                    if (J.length < 100) {
                        J.push([P].concat(Q))
                    }
                    if (F.UA.ie || !("console" in window) || !console[P]) {
                        return
                    }
                    if (!~location.host.indexOf("www.taobao.com")) {
                        console[P].apply(console, Q)
                    }
                }
            })()
        }
        return N
    })();
    F.mix(E.prototype, A);
    function C(M, L, K) {
        if (!M) {
            return
        }
        K.el = M = F.isFunction(M) ? M() : M;
        if (!L) {
            return
        }
        for (var J in L) {
            var I = L[J];
            if (!K[I]) {
                continue
            }
            J = J.replace(" ", "~~~").split("~~~");
            B.delegate(M, J[0], J[1], K[I], K)
        }
    }
    return E
},
{
    requires: ["event"]
});
/*pub-1|2013-02-28 18:58:54*/
KISSY.add("fp/util", 
function(B) {
    var A = {};
    A.formatRegExp = /%[sdj%]/g;
    A.format = function(H) {
        if (typeof H !== "string") {
            throw new TypeError("str should be string in _.format")
        }
        var G = 1;
        var F = arguments;
        var D = F.length;
        var E = H.replace(this.formatRegExp, 
        function(I) {
            if (G >= D) {
                return I
            }
            switch (I) {
            case "%s":
                return String(F[G++]);
            case "%d":
                return Number(F[G++]);
            case "%j":
                return typeof JSON === "undefined" ? ("" + F[G++]) : JSON.parse(F[G++]);
            case "%%":
                return "%";
            default:
                return I
            }
        });
        for (var C = F[G]; G < D; C = F[++G]) {
            E += " " + C
        }
        return E
    };
    A.isLogin = function() {
        var E = B.Cookie.get;
        var D = E("tracknick"),
        C = E("_nk_") || D;
        return !! (E("_l_g_") && C || E("ck1") && D)
    };
    A.addTimeStamp = function(C) {
        var D = ~C.indexOf("?") ? "&": "?";
        return C + D + "t=" + B.now()
    };
    A.uniqArrs = function(D, C) {
        return B.filter(D, 
        function(E) {
            return ! B.inArray(E, C)
        })
    };
    A.newTab = function(D) {
        var E = KISSY;
        if (!E.Switchable) {
            throw Error("[error] switchable not available!");
            return
        }
        var G = E.get(D);
        var C = parseInt(G.getAttribute("data-activeIndex"), 10);
        var F = new E.Switchable.Tabs(G, {
            aria: true,
            activeIndex: C || 0,
            activeTriggerCls: "tab-cur",
            navCls: "tab-nav",
            contentCls: "tab-bd"
        });
        var H = E.all(F.panels[C]);
        if (H.length) {
            H.attr("rendered", true)
        }
        F.on("beforeSwitch", 
        function(J) {
            var K = E.all(J.target.panels[J.toIndex]);
            if (K.attr("rendered")) {
                return
            }
            K.attr("rendered", true);
            var I = E.all("textarea", K);
            if (I.length > 0) {
                K.html(I.val(), true)
            }
        });
        E.each(F.triggers, 
        function(I) {
            I.hideFocus = true;
            I.style.outline = "none"
        });
        return F
    };
    return A
},
{
    requires: []
});
/*pub-1|2012-06-23 00:53:03*/
KISSY.add("fp/directpromo", 
function(C, E, D, I) {
    var B = "http://delta.taobao.com/home/delivery/AllContentByPage.do?resourceIds=%s&t=%s";
    var F = /^https?:\/\/\S+(png|jpg|gif)$/i;
    var A = /^https?:\/\/\S+$/i;
    var H = "__content_results";
    var G = C.merge(new D, {
        _isRequesting: false,
        _requestedIds: [],
        init: function() {
            if (this._isRequesting) {
                C.later(this.init, 200, false, this);
                return
            }
            var J = this._getAllElsId();
            this.request(J)
        },
        _getAllElsId: function() {
            var J = [];
            C.each(I.query(".J_DirectPromo"), 
            function(K) {
                J.push(K.getAttribute("data-resid"));
                I.removeClass(K, "J_DirectPromo")
            });
            return J
        },
        request: function(K) {
            K = E.uniqArrs(K, this._requestedIds);
            if (!K.length) {
                return
            }
            this._isRequesting = true;
            var J = E.format(B, K.join(","), C.now());
            this.log("request direct promo: %s", J);
            C.getScript(J, C.bind(this._requestHandler, this));
            this._requestedIds = this._requestedIds.concat(K)
        },
        request2: function(K) {
            K = E.uniqArrs(K, this._requestedIds);
            if (!K.length) {
                return
            }
            this._isRequesting = true;
            var J = E.format(B, K.join(","), C.now());
            this.log("request direct promo: %s", J)
        },
        _fill2: function() {
            var J = window[H];
            console.log(J)
        },
        _requestHandler: function() {
            var J = window[H];
            this.info("data is %s", J);
            J && this.render(J);
            this._isRequesting = false
        },
        render: function(J) {
            if (!J || !C.isArray(J)) {
                this.error("data must be Object in DirectPromo.render");
                return
            }
            C.each(J, this._renderItem, this);
            g_config.directPromoDate = new Date()
        },
        _renderItem: function(L) {
            var J = "";
            if (F.test(L.content)) {
                J = E.format('<img src="%s" />', L.content)
            } else {
                if (L.content === "http://tms.tms.tms") {
                    return
                } else {
                    if (A.test(L.content)) {
                        J = '<iframe src="' + L.content + '" scrolling="no" frameborder="0" width="330" height="200"></iframe>';
                        L.link = ""
                    } else {
                        J = L.content || "";
                        J = J.replace("</a>a>", "</a>")
                    }
                }
            }
            if (L.link) {
                J = E.format('<a href="%s" target="_blank">%s</a>', L.link, J)
            }
            var K = document.getElementById("J_DirectPromo_" + L.id);
            this.log('render item for element: "#J_DirectPromo_%s", id: %s, html: %s', L.id, L.id, J);
            this._fillHTML(K, J)
        },
        _fillCount: 0,
        _fillHTML: function(K, J) {
            if (K) {
                K.innerHTML = J
            } else {
                if (this._fillCount++<100) {
                    C.later(function() {
                        this.log("later");
                        this._fillHTML(K, J)
                    },
                    300, false, this)
                }
            }
        }
    });
    return G
},
{
    requires: ["fp/util", "fp/module", "dom"]
});