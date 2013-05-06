if (typeof window.staticTime == "undefined") {
    window.staticTime = new Date().getTime()
}
if (typeof console === "undefined") {
    console = {};
    console.log = function() {};
    console.dir = function() {}
}
if (typeof $_GLOBAL === "undefined") {
    $_GLOBAL = {}
}
if (!location.host.indexOf("msn.blog.sina.com.cn")) {
    $_GLOBAL.DOMAIN_CORE = "http://msn.blog.sina.com.cn/"
} else {
    if (location.href.indexOf("qing.weibo.com") > 0) {
        $_GLOBAL.DOMAIN_CORE = "http://qing.weibo.com/"
    } else {
        $_GLOBAL.DOMAIN_CORE = "http://qing.blog.sina.com.cn/"
    }
} (function() {
    if (typeof ___begin_time == "undefined") {
        ___begin_time = +new Date()
    }
    var h = "0.0.1",
    j = false,
    d = {
        isReady: false
    },
    c = "http://sjs.sinajs.cn/",
    f,
    g;
    if (document.addEventListener) {
        f = function() {
            document.removeEventListener("DOMContentLoaded", f, false);
            d.ready()
        }
    } else {
        if (document.attachEvent) {
            f = function() {
                if (document.readyState === "complete" || document.readyState === "loaded") {
                    document.detachEvent("onreadystatechange", f);
                    d.ready()
                }
            }
        }
    }
    d.bindReady = function() {
        if (d.isReady) {
            return
        }
        if (document.readyState === "complete") {
            return setTimeout(d.ready, 1)
        }
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", f, false);
            window.addEventListener("load", d.ready, false)
        } else {
            if (document.attachEvent) {
                document.attachEvent("onreadystatechange", f);
                window.attachEvent("onload", d.ready);
                var k = false;
                try {
                    k = window.frameElement == null
                } catch(l) {}
                if (document.documentElement.doScroll && k) {
                    a()
                }
            }
        }
    };
    var a = function() {
        if (d.isReady) {
            return
        }
        try {
            document.documentElement.doScroll("left")
        } catch(k) {
            setTimeout(a, 1);
            return
        }
        d.ready()
    };
    d.ready = function() {
        if (!document.body) {
            return setTimeout(d.ready, 1)
        }
        if (arguments.callee.done || d.isReady) {
            return
        }
        arguments.callee.done = true;
        d.isReady = true;
        var k = +new Date() - ___begin_time;
        if (typeof(main) !== "function") {
            throw new Error("main函数未定义！");
            return
        }
        main();
        main.done = true;
        if (!scope.$noAutoImg) {
            var p = document.getElementsByTagName("img");
            for (var l = 0, o = p.length; l < o; l++) {
                var m = p[l].getAttribute("real_src");
                if (m) {
                    p[l].setAttribute("src", m)
                }
            }
        }
    };
    if (typeof scope.$setDomain == "undefined" || scope.$setDomain == true) {
        if (location.href.indexOf("qing.weibo.com") > 0) {
            document.domain = "weibo.com"
        } else {
            document.domain = "rookie.com"
        }
    }
    if (j) {
        var i = document.createElement("script");
        var b = document.createElement("script");
        i.src = c + "bind2/debug/debug_base.js";
        b.src = c + "bind2/debug/debug.js";
        b.charset = "utf-8";
        b.charset = "utf-8";
        document.getElementsByTagName("head")[0].appendChild(i);
        document.getElementsByTagName("head")[0].appendChild(b)
    }
    d.bindReady();
    if (/\((iPhone|iPad|iPod)/i.test(navigator.userAgent) == false) {
        return
    }
    document.addEventListener("mouseover", 
    function(l) {
        var k = l.target;
        do {
            if (k.tagName == "A") {
                k.target = "_self";
                return
            }
            if (k.tagName == "DIV") {
                return
            }
            k = k.parentNode
        }
        while (k)
    },
    false)
})();
if (typeof Sina == "undefined") {
    Sina = {}
}
Sina.pkg = function(c) {
    if (!c || !c.length) {
        return null
    }
    var d = c.split(".");
    var b = Sina;
    for (var a = (d[0] == "Sina") ? 1: 0; a < d.length; ++a) {
        b[d[a]] = b[d[a]] || {};
        b = b[d[a]]
    }
    return b
};
function $E(b) {
    var a = typeof b == "string" ? document.getElementById(b) : b;
    if (a != null) {
        return a
    }
    return null
}
function $C(a) {
    return document.createElement(a)
}
function $N(a) {
    return document.getElementsByName(a)
}
function $T(b, a) {
    return b.getElementsByTagName(a)
}
try {
    document.execCommand("BackgroundImageCache", false, true)
} catch(e) {} (function() {
    var b = function(f, d) {
        var c = f;
        return function() {
            return c.apply(d, arguments)
        }
    };
    var a = "Debug";
    if (window[a] == null || typeof window[a].log == "undefined") {
        window[a] = {
            cacheData: [],
            base_url: "http://sjs.sinajs.cn/bind2/",
            product: scope.$PRODUCT_NAME,
            baseColor: {
                1: {
                    color: "#FFF",
                    bgcolor: "#E00"
                },
                2: {
                    color: "#F00"
                },
                3: {
                    color: "#FFF000"
                },
                4: {
                    color: "#0F0"
                },
                5: {
                    color: "#FFF"
                }
            },
            fatal: function(c) {
                this.addData(c, 1)
            },
            error: function(c) {
                this.addData(c, 2)
            },
            warning: function(c) {
                this.addData(c, 3)
            },
            info: function(c) {
                this.addData(c, 4)
            },
            log: function(c) {
                this.addData(c, 5)
            },
            dir: function(c) {
                this.addData(c, 5)
            },
            addData: function(d, c, f, g) {
                if (d == null) {
                    return
                }
                if (typeof d != "object") {
                    d = d.toString()
                }
                var h = {
                    type: c || "5",
                    color: f || this.baseColor[c].color,
                    bgcolor: g || this.baseColor[c].bgcolor
                };
                this.cacheData.push([d, h]);
                if (this.initFinished == true) {
                    this.showCurrentData([d, h])
                }
            }
        };
        window.trace = b(window[a].log, window[a]);
        window.traceError = b(window[a].error, window[a])
    }
})();
Sina.pkg("Core");
if (typeof Core == "undefined") {
    Core = Sina.Core
}
Sina.pkg("Core.Array");
Core.Array.foreach = function(d, c) {
    if (d == null && d.constructor != Array) {
        return []
    }
    var f = 0,
    b = d.length,
    g = [];
    while (f < b) {
        var a = c(d[f], f);
        if (a !== null) {
            g[g.length] = a
        }
        f++
    }
    return g
};
Sina.pkg("Core.Events"); (function(j) {
    var g = navigator.userAgent.toLowerCase();
    var a = {
        $winXP: /windows nt 5.1/.test(g),
        $winVista: /windows nt 6.0/.test(g),
        $win7: /windows nt 6.1/.test(g),
        $macOS: /mac/.test(g)
    };
    var c = {
        $OPERA: false,
        $IE6: false,
        $IE7: false,
        $IE8: false,
        $IE9: false,
        $SAFARI: false,
        $FF2: false,
        $FF3: false,
        $FF4: false,
        $FF: false,
        $CHROME: false,
        $TT: false,
        $360: false,
        $SOGO: false,
        $Maxthon: false
    };
    var h = {
        $IE: 0,
        $MOZ: false,
        $WEBKIT: false,
        $KHTML: false
    };
    if (/opera/.test(g) || j.opera) {
        c.$OPERA = true
    } else {
        if (/chrome\/(\S+)/.test(g)) {
            c.$CHROME = true
        } else {
            if (/safari\/(\S+)/.test(g)) {
                c.$SAFARI = true
            } else {
                if (/msie/.test(g)) {
                    h.$IE = true;
                    if (/360se/.test(g)) {
                        c.$360 = true
                    } else {
                        if (/tencenttraveler/.test(g)) {
                            c.$TT = true
                        } else {
                            if (/se\s\S+\smetasr\s\d+\.\d+/.test(g)) {
                                c.$SOGO = true
                            }
                        }
                    }
                    var b = g.match(/msie (\d+)/);
                    var f = parseInt(b[1]);
                    h.$IE = f;
                    if (f === 8) {
                        c.$IE8 = true
                    } else {
                        if (f === 6) {
                            c.$IE6 = true
                        } else {
                            if (f === 9) {
                                c.$IE9 = true
                            } else {
                                if (f === 7) {
                                    c.$IE7 = true
                                } else {
                                    if (f === 10) {
                                        c.$IE10 = true
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (/firefox/.test(g)) {
                        var b = g.match(/firefox\/(\d+)/);
                        c.$FF = parseInt(b[1]);
                        if (/firefox\/3/.test(g)) {
                            c.$FF3 = true
                        } else {
                            if (/firefox\/4/.test(g)) {
                                c.$FF4 = true
                            } else {
                                if (/firefox\/2/.test(g)) {
                                    c.$FF2 = true
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    try {
        var k = window.external;
        c.$Maxthon = k.max_version ? true: false
    } catch(d) {}
    if (/applewebkit\/(\S+)/.test(g)) {
        h.$WEBKIT = true
    } else {
        if (/khtml\/(\S+)/.test(g)) {
            h.$KHTML = true
        } else {
            if (/rv:([^\)]+)\) gecko\/\d{8}/.test(g)) {
                h.$MOZ = true
            }
        }
    }
    c.$MOBILE = /mobile/i.test(g);
    if (!c.$MOBILE) {
        c.$MOBILE = /HTC/.test(g)
    }
    function i(n, l) {
        var m;
        for (m in l) {
            n[m] = l[m]
        }
    }
    i(j, c);
    i(j, h);
    i(j, a)
})(window);
Core.Events.addEvent = function(g, d, c, a) {
    var f = typeof g == "string" ? $E(g) : g;
    if (f == null) {
        trace("addEvent 找不到对象：" + g);
        return
    }
    if (typeof a == "undefined") {
        a = false
    }
    if (typeof c == "undefined") {
        c = "click"
    }
    if (f.addEventListener) {
        if (c == "mousewheel" && $FF) {
            c = "DOMMouseScroll"
        }
        f.addEventListener(c, d, a);
        return true
    } else {
        if (f.attachEvent) {
            var b = f.attachEvent("on" + c, d);
            return true
        } else {
            f["on" + c] = d
        }
    }
};
Core.Events.removeEvent = function(a, b, c) {
    var d = $E(a);
    if (d == null) {
        trace("removeEvent 找不到对象：" + a);
        return
    }
    if (typeof b != "function") {
        return
    }
    if (typeof c == "undefined") {
        c = "click"
    }
    if (d.addEventListener) {
        d.removeEventListener(c, b, false)
    } else {
        if (d.attachEvent) {
            d.detachEvent("on" + c, b)
        }
    }
    b[c] = null
};
Sina.pkg("Core.Function");
Core.Function.bind3 = function(d, c, b) {
    b = b == null ? [] : b;
    var a = d;
    return function() {
        return a.apply(c, b)
    }
};
Core.Array.findit = function(a, c) {
    var b = -1;
    Core.Array.foreach(a, 
    function(f, d) {
        if (c == f) {
            b = d
        }
    });
    return b
};
window.onerror = function(c, b, a) {
    trace("Error occured:" + c + "<br/>file:" + b + "<br/>line:" + a + "<br/>");
    return true
};
function Jobs(a) {
    this.option = a || {};
    this._jobTable = [[], [], [], []]
}
Jobs.prototype = {
    _registedJobTable: {},
    errorMsg: [],
    _registJob: function(b, a) {
        this._registedJobTable[b] = a
    },
    error: function(a) {
        Debug.error(a);
        this.errorMsg.push(a)
    },
    add: function(b, a) {
        a = a || 1;
        if (Core.Array.findit(this._jobTable[a], b) == -1) {
            this._jobTable[a].push(b)
        } else {
            this.error("Error: Job <b>" + b + "</b> is existed now.")
        }
    },
    start: function() {
        if (this.option.onStart != null) {
            this.option.onStart()
        }
        var c = this._registedJobTable;
        var a = this._jobTable[1].concat(this._jobTable[2]);
        var d = this;
        this.fe = Core.Function.bind3(d.focus, d, []);
        var b = function() {
            if (d._jobTable[3].length == 0) {
                if (d.option.onEnd != null) {
                    d.option.onEnd()
                }
                return
            }
            Core.Events.addEvent(document.body, d.fe, "focus");
            Core.Events.addEvent(window, d.fe, "scroll");
            Core.Events.addEvent(document.body, d.fe, "mousemove");
            Core.Events.addEvent(document.body, d.fe, "mouseover")
        };
        this.queue(a, b)
    },
    focus: function() {
        var b = this;
        if (this.focusdown) {
            Core.Events.removeEvent(document.body, b.fe, "focus");
            Core.Events.removeEvent(window, b.fe, "scroll");
            Core.Events.removeEvent(document.body, b.fe, "mousemove");
            Core.Events.removeEvent(document.body, b.fe, "mouseover");
            b.fe = null;
            return
        }
        this.focusdown = true;
        var a = this._jobTable[3];
        this.queue(a, this.option.onEnd)
    },
    queue: function(a, j) {
        var h = this;
        var b = function() {
            return new Date().valueOf()
        };
        var c = this._registedJobTable;
        var g = a.length;
        var f = 0;
        var d = window.setInterval(function() {
            if (f >= g) {
                clearInterval(d);
                d = null;
                if (j != null) {
                    j()
                }
                return
            }
            var o = a[f];
            var m = c[o];
            f++;
            if (typeof m == "undefined") {
                h.error("<b>Job[" + o + "] is undefiend!!!</b>");
                return
            }
            var l = true;
            var k = b();
            try {
                m.call()
            } catch(n) {
                h.error("<b>Job[" + o + "] failed!!!</b>" + n.message + "");
                if (j != null) {
                    j()
                }
                l = false;
                throw n
            } finally {
                if (l) {
                    var i = b();
                    Debug.info("<b>Job[" + o + "] done in " + (i - k) + "ms.</b>")
                }
            }
        },
        10)
    },
    call: function(b, a) {
        if (typeof this._registedJobTable[b] != "undefined") {
            this._registedJobTable[b].apply(this, a)
        } else {
            trace("<b>Job[" + b + "] is undefined!!!</b>", {
                color: "#900",
                bgColor: "#FFF;"
            })
        }
    }
};
$registJob = function(b, a) {
    Jobs.prototype._registJob(b, a)
};
$callJob = function(b) {
    var a = [];
    if (arguments.length > 1) {
        Core.Array.foreach(arguments, 
        function(c, d) {
            a[d] = c
        });
        a.shift()
    }
    Jobs.prototype.call(b, a)
};
Core.Events.fireEvent = function(b, c) {
    var a;
    b = $E(b);
    if (b.fireEvent) {
        b.fireEvent("on" + c)
    } else {
        if ($MOBILE) {
            a = document.createEvent("HTMLEvents")
        } else {
            a = document.createEvent("MouseEvents")
        }
        a.initEvent(c, true, true);
        b.dispatchEvent(a)
    }
};
Core.Events.getEvent = function() {
    return window.event
};
if (!$IE || $IE > 8) {
    Core.Events.getEvent = function() {
        if (!$IE && window.event) {
            return window.event
        }
        var b = arguments.callee.caller;
        var a;
        var c = 0;
        while (b != null && c < 40) {
            a = b.arguments[0];
            if (a && (a.constructor == Event || a.constructor == MouseEvent)) {
                return a
            }
            c++;
            b = b.caller
        }
        return a
    }
}
Core.Events.stopEvent = function(a) {
    var b = a ? a: Core.Events.getEvent();
    if (b != null) {
        b.cancelBubble = true;
        b.returnValue = false
    }
};
if (!$IE || $IE > 8) {
    Core.Events.stopEvent = function(a) {
        var b = a ? a: Core.Events.getEvent();
        if (b != null) {
            b.preventDefault();
            b.stopPropagation()
        }
    }
}
Sina.pkg("Core.Dom");
Core.Dom.getChildrenByClass = function(h, g) {
    var b = [];
    var f = h.childNodes || h.children;
    var g = " " + g + " ";
    var a = f.length;
    for (var d = 0; d < a; ++d) {
        var j = f[d];
        var c = " " + j.className + " ";
        if (c.indexOf(g) != -1) {
            b[b.length] = j
        }
    }
    return b
};
Core.Dom.getElementsByClass = function(c, b, h) {
    c = c || document;
    var d = [];
    h = " " + h + " ";
    var k = c.getElementsByTagName(b),
    g = k.length;
    for (var f = 0; f < g; ++f) {
        var a = k[f];
        if (a.nodeType == 1) {
            var j = " " + a.className + " ";
            if (j.indexOf(h) != -1) {
                d[d.length] = a
            }
        }
    }
    return d
};
Core.Dom.byClz = Core.Dom.getElementsByClass;
Core.Dom.setStyle = function(a, b, c) {
    switch (b) {
    case "opacity":
        a.style.filter = "alpha(opacity=" + (c * 100) + ")";
        if (!a.currentStyle || !a.currentStyle.hasLayout) {
            a.style.zoom = 1
        }
        break;
    case "float":
        b = "styleFloat";
    default:
        a.style[b] = c
    }
};
if (!$IE || !($IE < 9)) {
    Core.Dom.setStyle = function(a, b, c) {
        if (b == "float") {
            b = "cssFloat"
        }
        a.style[b] = c
    }
} (function() {
    var a = function(d) {
        var b = d.split("-");
        var f = b[0];
        for (var c = 1; c < b.length; c++) {
            f += b[c].charAt(0).toUpperCase() + b[c].substring(1)
        }
        return f
    };
    Core.Dom.setStyle2 = function(d, c) {
        if (typeof d == "string") {
            d = $E(d)
        }
        for (var b in c) {
            styleAttr = a(b);
            Core.Dom.setStyle(d, styleAttr, c[b])
        }
    }
})();
Sina.pkg("Core.String");
Core.String.trimHead = function(a) {
    return a.replace(/^(\u3000|\s|\t)*/gi, "")
};
Core.String.trimTail = function(a) {
    return a.replace(/(\u3000|\s|\t)*$/gi, "")
};
Core.String.trim = function(a) {
    return Core.String.trimHead(Core.String.trimTail(a))
};
Sina.pkg("Utils");
if (typeof Utils == "undefined") {
    Utils = Sina.Utils
}
Sina.pkg("Utils.Form");
Core.String.byteLength = function(b) {
    if (typeof b == "undefined") {
        return 0
    }
    var a = b.match(/[^\x00-\x80]/g);
    return (b.length + (!a ? 0: a.length))
};
Core.String.leftB = function(c, a) {
    var b = c.replace(/\*/g, " ").replace(/[^\x00-\xff]/g, "**");
    c = c.slice(0, b.slice(0, a).replace(/\*\*/g, " ").replace(/\*/g, "").length);
    if (Core.String.byteLength(c) > a) {
        c = c.slice(0, c.length - 1)
    }
    return c
};
Utils.Form.limitMaxLen = function(a, b) {
    var c;
    var d = function() {
        c = a.value;
        var f = Core.String.byteLength(c);
        if (f > b) {
            a.value = Core.String.leftB(c, b)
        }
    };
    Core.Events.addEvent(a, Core.Function.bind3(d, a), "keyup");
    Core.Events.addEvent(a, Core.Function.bind3(d, a), "blur");
    Core.Events.addEvent(a, Core.Function.bind3(d, a), "focus")
};
Core.Dom.getStyle = function(a, c) {
    switch (c) {
    case "opacity":
        var f = 100;
        try {
            f = a.filters["DXImageTransform.Microsoft.Alpha"].opacity
        } catch(d) {
            try {
                f = a.filters("alpha").opacity
            } catch(d) {}
        }
        return f / 100;
    case "float":
        c = "styleFloat";
    default:
        var b = a.currentStyle ? a.currentStyle[c] : null;
        return (a.style[c] || b)
    }
};
if (!$IE || $IE > 8) {
    Core.Dom.getStyle = function(a, c) {
        if (c == "float") {
            c = "cssFloat"
        }
        try {
            var b = document.defaultView.getComputedStyle(a, "")
        } catch(d) {
            traceError(d)
        }
        return a.style[c] || b ? b[c] : null
    }
}
Sina.pkg("Core.System");
Core.System.getScrollPos = function(c) {
    c = c || document;
    var a = c.documentElement;
    var b = c.body;
    return [Math.max(a.scrollTop, b.scrollTop), Math.max(a.scrollLeft, b.scrollLeft), Math.max(a.scrollWidth, b.scrollWidth), Math.max(a.scrollHeight, b.scrollHeight)]
};
Core.Dom.getXY = function(b) {
    if ((b.parentNode == null || b.offsetParent == null || Core.Dom.getStyle(b, "display") == "none") && b != document.body) {
        return false
    }
    var a = null;
    var g = [];
    var c;
    var d = b.ownerDocument;
    c = b.getBoundingClientRect();
    var f = Core.System.getScrollPos(b.ownerDocument);
    return [c.left + f[1], c.top + f[0]];
    a = b.parentNode;
    while (a.tagName && !/^body|html$/i.test(a.tagName)) {
        if (Core.Dom.getStyle(a, "display").search(/^inline|table-row.*$/i)) {
            g[0] -= a.scrollLeft;
            g[1] -= a.scrollTop
        }
        a = a.parentNode
    }
    return g
};
if (!$IE) {
    Core.Dom.getXY = function(b) {
        if ((b.parentNode == null || b.offsetParent == null || Core.Dom.getStyle(b, "display") == "none") && b != document.body) {
            return false
        }
        var a = null;
        var g = [];
        var c;
        var d = b.ownerDocument;
        g = [b.offsetLeft, b.offsetTop];
        a = b.offsetParent;
        var f = Core.Dom.getStyle(b, "position") == "absolute";
        if (a != b) {
            while (a) {
                g[0] += a.offsetLeft;
                g[1] += a.offsetTop;
                if ($SAFARI && !f && Core.Dom.getStyle(a, "position") == "absolute") {
                    f = true
                }
                a = a.offsetParent
            }
        }
        if ($SAFARI && f) {
            g[0] -= b.ownerDocument.body.offsetLeft;
            g[1] -= b.ownerDocument.body.offsetTop
        }
        a = b.parentNode;
        while (a.tagName && !/^body|html$/i.test(a.tagName)) {
            if (Core.Dom.getStyle(a, "display").search(/^inline|table-row.*$/i)) {
                g[0] -= a.scrollLeft;
                g[1] -= a.scrollTop
            }
            a = a.parentNode
        }
        return g
    }
}
var LoginNameSuggest = function(a) {
    this.options = a || {};
    this.inputEle = a.inputEle;
    this.container = a.container;
    this.options.beforeItemSelected = a.beforeItemSelected || "";
    this.options.afterItemSelected = a.afterItemSelected || "";
    this.eventKeycode = "";
    this.lastText = this.inputEle.value;
    this.selectedIndex = -1;
    this.initialize()
};
LoginNameSuggest.prototype = {
    constructor: LoginNameSuggest,
    initialize: function() {
        var a = this,
        b = Core.Events.addEvent;
        this.inputEle.setAttribute("autocomplete", "off");
        b(this.inputEle, 
        function() {
            a.onBlurHandler()
        },
        "blur");
        b(this.inputEle, 
        function(c) {
            a.onKeyUpHandler(c)
        },
        "keyup");
        b(this.inputEle, 
        function(c) {
            a.onKeyDownHandler(c)
        },
        "keydown");
        b(this.inputEle, 
        function() {
            setTimeout(function() {
                a.inputCheck()
            },
            1)
        },
        "paste");
        $OPERA && setInterval(function() {
            a.inputCheck()
        },
        50);
        this.initContainer()
    },
    initContainer: function() {
        var a = this.container,
        b = this;
        a.id = a.id || "suggest_" + new Date().getTime();
        a.style.position = "absolute";
        a.style.display = "none";
        this.calculateContainerWidth();
        this.calculateContainerPos();
        Core.Events.addEvent(window, 
        function() {
            b.calculateContainerWidth();
            b.calculateContainerPos()
        },
        "resize")
    },
    calculateContainerPos: function() {
        var a = this.inputEle,
        c = Core.Dom.getXY(a),
        b = this.container;
        b.style.top = c[1] + a.offsetHeight + "px";
        b.style.left = c[0] + "px"
    },
    calculateContainerWidth: function() {
        var g = this.container,
        d = Core.Dom.getStyle,
        b = parseInt(d(g, "borderLeftWidth") || 0),
        f = parseInt(d(g, "borderRightWidth") || 0),
        a = parseInt(d(g, "paddingLeftWidth") || 0),
        c = parseInt(d(g, "paddingRightWidth") || 0);
        g.style.width = (this.inputEle.offsetWidth - b - f - a - c) - 2 + "px"
    },
    onKeyDownHandler: function(b) {
        var a = this.eventKeycode = b.keyCode || b.which;
        if (a === 38 || a === 40) {
            Core.Events.stopEvent(b);
            this.handleKeyUpDown()
        }
    },
    handleKeyUpDown: function() {
        if (this.container.style.display === "none") {
            return
        }
        this.highlightItem(parseInt(this.selectedIndex) + (this.eventKeycode === 40 ? 1: -1))
    },
    highlightItem: function(b) {
        var d = $T(this.container, this.options.itemTagName),
        c,
        a = d.length;
        for (c = 0; c < a; c++) {
            d[c].className = this.options.normalClassName
        }
        if (b < 0) {
            b = a - 1
        }
        if (b > a - 1) {
            b = 0
        }
        d[b].className = this.options.highlightClassName;
        this.selectedIndex = b
    },
    onKeyUpHandler: function(a) {
        this.eventKeycode = a.keyCode || a.which;
        if (this.eventKeycode === 13 && this.selectedIndex >= 0) {
            this.selectItem($T(this.container, this.options.itemTagName)[this.selectedIndex]);
            return
        }
        this.inputCheck()
    },
    selectItem: function(d) {
        var c = this.options,
        a = c.beforeItemSelected,
        b = c.afterItemSelected,
        f = true;
        typeof a === "function" && (f = a());
        if (f === false) {
            return
        }
        this.lastText = this.inputEle.value = d.getAttribute("key");
        this.hideContainer();
        this.selectedIndex = -1;
        typeof b === "function" && b()
    },
    inputCheck: function() {
        var a = this.inputEle.value;
        if (this.lastText !== a) {
            this.lastText = a;
            if (a) {
                this.clearData();
                this.createList(a)
            } else {
                this.hideContainer()
            }
        }
    },
    createList: function(c) {
        var d = this.options,
        b = d.createListFun,
        a = "";
        if (typeof b === "function" && (a = b(c))) {
            this.container.innerHTML = a
        }
        this.attachEvents();
        this.selectedIndex = -1;
        this.showContainer()
    },
    attachEvents: function() {
        var d = $T(this.container, this.options.itemTagName),
        b,
        a = d.length,
        c = this;
        for (b = 0; b < a; b++) { (function(f) {
                Core.Events.addEvent(f, 
                function(g) {
                    c.itemMOverHandlder(g, f)
                },
                "mouseover");
                Core.Events.addEvent(f, 
                function(g) {
                    c.itemMDownHandlder(g, f)
                },
                "mousedown");
                Core.Events.addEvent(f, 
                function(g) {
                    c.itemMOutHandlder(g, f)
                },
                "mouseout")
            })(d[b])
        }
    },
    itemMDownHandlder: function(b, a) {
        this.selectItem(a)
    },
    itemMOverHandlder: function(b, a) {
        this.highlightItem(parseInt(a.id.split("_")[1]))
    },
    itemMOutHandlder: function(b, a) {
        a.className = this.options.normalClassName;
        this.selectedIndex = -1
    },
    onBlurHandler: function() {
        this.hideContainer()
    },
    showContainer: function() {
        this.container.style.display = ""
    },
    hideContainer: function() {
        this.container.style.display = "none"
    },
    clearData: function() {
        var a = this.container;
        a.style.display = "none";
        a.innerHTML = ""
    }
};
Sina.pkg("Utils.Cookie");
Utils.Cookie.getCookie = function(a) {
    a = a.replace(/([\.\[\]\$])/g, "\\$1");
    var c = new RegExp(a + "=([^;]*)?;", "i");
    var d = document.cookie + ";";
    var b = d.match(c);
    if (b) {
        return b[1] || ""
    } else {
        return ""
    }
};
Utils.Cookie.setCookie = function(b, g, c, j, f, a) {
    var h = [];
    h.push(b + "=" + escape(g));
    if (c) {
        var i = new Date();
        var d = i.getTime() + c * 3600000;
        i.setTime(d);
        h.push("expires=" + i.toGMTString())
    }
    if (j) {
        h.push("path=" + j)
    }
    if (f) {
        h.push("domain=" + f)
    }
    if (a) {
        h.push(a)
    }
    document.cookie = h.join(";")
};
Utils.Url = function(a) {
    a = a || "";
    this.url = a;
    this.query = {};
    this.parse()
};
Utils.Url.prototype = {
    parse: function(a) {
        if (a) {
            this.url = a
        }
        this.parseAnchor();
        this.parseParam()
    },
    parseAnchor: function() {
        var a = this.url.match(/\#(.*)/);
        a = a ? a[1] : null;
        this._anchor = a;
        if (a != null) {
            this.anchor = this.getNameValuePair(a);
            this.url = this.url.replace(/\#.*/, "")
        }
    },
    parseParam: function() {
        var a = this.url.match(/\?([^\?]*)/);
        a = a ? a[1] : null;
        if (a != null) {
            this.url = this.url.replace(/\?([^\?]*)/, "");
            this.query = this.getNameValuePair(a)
        }
    },
    getNameValuePair: function(b) {
        var a = {};
        b.replace(/([^&=]*)(?:\=([^&]*))?/gim, 
        function(c, f, d) {
            if (f == "") {
                return
            }
            a[f] = d || ""
        });
        return a
    },
    getParam: function(a) {
        return this.query[a] || ""
    },
    clearParam: function() {
        this.query = {}
    },
    setParam: function(a, b) {
        if (a == null || a == "" || typeof(a) != "string") {
            throw new Error("no param name set")
        }
        this.query = this.query || {};
        this.query[a] = b
    },
    setParams: function(a) {
        this.query = a
    },
    serialize: function(c) {
        var a = [];
        for (var b in c) {
            if (c[b] == null || c[b] == "") {
                a.push(b + "=")
            } else {
                a.push(b + "=" + c[b])
            }
        }
        return a.join("&")
    },
    toString: function() {
        var a = this.serialize(this.query);
        return this.url + (a.length > 0 ? "?" + a: "") + (this.anchor ? "#" + this.serialize(this.anchor) : "")
    },
    getHashStr: function(a) {
        return this.anchor ? "#" + this.serialize(this.anchor) : (a ? "#": "")
    }
};
Sina.pkg("Core.Class");
Core.Class.AsPrototype = {};
Core.Class.create = function() {
    return function(a) {
        if (a != Core.Class.AsPrototype) {
            this.initialize.apply(this, arguments)
        }
    }
};
Sina.pkg("Utils.Io"); (function() {
    var a = function(c, b) {
        var d;
        try {
            if (typeof b != "undefined") {
                for (d in c) {
                    if (b[d] != null) {
                        c[d] = b[d]
                    }
                }
            }
        } finally {
            d = null;
            return c
        }
    };
    Core.System.parseParam = a
})();
Core.String.encodeDoubleByte = function(a) {
    if (typeof a != "string") {
        return a
    }
    return encodeURIComponent(a)
};
Utils.Io.JsLoad = {}; (function() {
    function a(k, g) {
        b(k, g);
        var j = k.urls;
        var f,
        d = j.length;
        for (f = 0; f < d; f++) {
            var h = $C("script");
            h.src = j[f].url;
            h.charset = j[f].charset;
            h.onload = h.onerror = h.onreadystatechange = function() {
                if (h && h.readyState && h.readyState != "loaded" && h.readyState != "complete") {
                    return
                }
                g.script_loaded_num++;
                h.onload = h.onreadystatechange = h.onerror = null;
                h.src = "";
                h.parentNode.removeChild(h);
                h = null
            };
            document.getElementsByTagName("head")[0].appendChild(h)
        }
    }
    function b(m, h) {
        var l = m.urls;
        var o = m.GET;
        var j,
        k = l.length;
        var n,
        f,
        d,
        g;
        for (j = 0; j < k; j++) {
            g = window.parseInt(Math.random() * 100000000);
            f = new Utils.Url(l[j].url);
            for (n in o) {
                if (m.noencode == true) {
                    f.setParam(n, o[n])
                } else {
                    f.setParam(n, Core.String.encodeDoubleByte(o[n]))
                }
            }
            d = f.getParam("varname") || "requestId_" + g;
            if (m.noreturn != true) {
                f.setParam("varname", d)
            }
            h.script_var_arr.push(d);
            l[j].url = f.toString();
            l[j].charset = l[j].charset || m.charset
        }
    }
    function c(g, h) {
        var f = {
            urls: [],
            charset: "utf-8",
            noreturn: false,
            noencode: false,
            timeout: -1,
            POST: {},
            GET: {},
            onComplete: null,
            onException: null
        };
        var d = {
            script_loaded_num: 0,
            is_timeout: false,
            is_loadcomplete: false,
            script_var_arr: []
        };
        f.urls = typeof g == "string" ? [{
            url: g
        }] : g;
        Core.System.parseParam(f, h);
        a(f, d); (function() {
            if (f.noreturn == true && f.onComplete == null) {
                return
            }
            var j,
            k = [];
            if (d.script_loaded_num == f.urls.length) {
                d.is_loadcomplete = true;
                if (f.onComplete != null) {
                    for (j = 0; j < d.script_var_arr.length; j++) {
                        k.push(window[d.script_var_arr[j]])
                    }
                    if (d.script_var_arr.length < 2) {
                        f.onComplete(k[0])
                    } else {
                        f.onComplete(k)
                    }
                }
                return
            }
            if (d.is_timeout == true) {
                return
            }
            setTimeout(arguments.callee, 50)
        })();
        if (f.timeout > 0) {
            setTimeout(function() {
                if (d.is_loadcomplete != true) {
                    if (f.onException != null) {
                        f.onException()
                    }
                    d.is_timeout = true
                }
            },
            f.timeout)
        }
    }
    Utils.Io.JsLoad.request = function(d, f) {
        new c(d, f)
    }
})();
var LoginPost = Core.Class.create();
LoginPost.prototype = {
    url: "http://i.sso.sina.com.cn/js/ssologin.js",
    callback: null,
    initialize: function(a) {
        this.callback = a;
        window.sinaSSOConfig = new
        function() {
            this.pageCharset = "utf-8";
            this.entry = "qing";
            this.domain = "sina.com.cn";
            this.setDomain = false;
            this.customLoginCallBack = a
        }
    },
    resetCallback: function() {
        window.sinaSSOConfig.customLoginCallBack = this.callback
    },
    login: function(d, b, c) {
        this.resetCallback();
        if (typeof sinaSSOController === "undefined" || !sinaSSOController) {
            Utils.Io.JsLoad.request(this.url, {
                onComplete: function() {
                    a()
                },
                onException: function() {},
                timeout: 30000
            })
        } else {
            sinaSSOController.init();
            if (typeof sinaSSOController.setLoginType == "function") {
                sinaSSOController.setLoginType(2)
            }
            if (typeof sinaSSOController.getServerTime == "function") {
                sinaSSOController.getServerTime(d)
            }
            a()
        }
        function a() {
            if (typeof c === "undefined") {
                sinaSSOController.login(d, b)
            } else {
                sinaSSOController.login(d, b, c)
            }
        }
    },
    parse: function(a) {
        this.callback.call(a)
    }
};
var OnlyShadow = function(c, d, g, b) {
    this.entity = null;
    this.parent = d || document.body;
    b = b || {};
    this._ie6Fixed = function() {
        if (f.entity) {
            f.entity.style.top = document.documentElement.scrollTop + "px";
            var j = (document.documentElement.scrollLeft - f._ie6EntityXY[0]);
            var i = j + f.entity.offsetWidth;
            var h = (document.documentElement.scrollWidth || document.body.scrollWidth);
            if (i <= h) {
                f.entity.style.left = j + "px"
            }
            if (f.ifm) {
                f.ifm.style.top = f.entity.style.top;
                if (i <= h) {
                    f.ifm.style.left = f.entity.style.left
                }
            }
        }
    };
    var f = this;
    this.resetShadowDiv = Core.Function.bind3(function() {
        if (f.entity) {
            setTimeout(function() {
                f.updateSize();
                if ($IE6 && f.isShow()) {
                    f.entity.style.left = "0px";
                    var h = Core.Dom.getXY(f.entity);
                    f._ie6EntityXY = h;
                    f._ie6Fixed()
                }
            },
            1)
        }
    },
    this);
    this._create = function() {
        f.entity = $C("div");
        if (g) {
            f.entity.id = g
        }
        f.entity.style.position = "absolute";
        f.entity.style.width = f.getAreaWidth() + "px";
        f.entity.style.height = f.getAreaHeight() + "px";
        f.entity.style.left = "0px";
        f.entity.style.top = "0px";
        f.entity.style.zIndex = b.zIndex || 1024;
        f.entity.style.backgroundColor = b.backgroundColor || "black";
        f.parent.appendChild(f.entity);
        f._setOpacity(f.entity, isNaN(c) ? 0.5: c);
        if ($IE6) {
            var i = Core.Dom.getXY(f.entity);
            f._ie6EntityXY = i;
            var h = (document.documentElement.scrollLeft - f._ie6EntityXY[0]);
            f.entity.style.left = h + "px";
            f.addIframe()
        }
        Core.Events.addEvent(window, f.resetShadowDiv, "resize");
        f.setFixed(true);
        f.hidden()
    }; (function a() {
        if (g && $E(g)) {
            f.entity = $E(g)
        } else {
            f._create()
        }
    })()
};
OnlyShadow.prototype = {
    isShow: function() {
        return this.entity.offsetHeight > 0 ? true: false
    },
    show: function() {
        this.entity.style.display = "";
        if (this.ifm) {
            this.ifm.style.display = ""
        }
        if ($IE6) {
            this.updateSize();
            this.entity.style.left = "0px";
            var a = Core.Dom.getXY(this.entity);
            this._ie6EntityXY = a;
            this._ie6Fixed()
        }
        this.onShow()
    },
    hidden: function() {
        this.entity.style.display = "none";
        if (this.ifm) {
            this.ifm.style.display = "none"
        }
        this.onHidden()
    },
    close: function() {
        this.hidden();
        this.destroy()
    },
    destroy: function() {
        Core.Events.removeEvent(window, this._ie6Fixed, "scroll");
        Core.Events.removeEvent(window, this.resetShadowDiv, "resize");
        this.entity.parentNode.removeChild(this.entity);
        this.entity = null;
        if (this.ifm) {
            this.ifm.parentNode.removeChild(this.ifm);
            this.ifm = null
        }
    },
    addIframe: function() {
        this.ifm = $C("iframe");
        this._setOpacity(this.ifm, 0);
        this.ifm.style.position = "absolute";
        this.ifm.style.zIndex = this.entity.style.zIndex;
        this.ifm.style.left = this.entity.style.left;
        this.ifm.style.top = this.entity.style.top;
        this.ifm.style.width = this.entity.style.width;
        this.ifm.style.height = this.entity.style.height;
        this.entity.parentNode.insertBefore(this.ifm, this.entity)
    },
    insertBefore: function(a) {
        a.parentNode.insertBefore(this.entity, a);
        if (this.ifm) {
            this.entity.parentNode.insertBefore(this.ifm, this.entity)
        }
    },
    updateSize: function() {
        var b = this.getAreaWidth();
        var a = this.getAreaHeight();
        this.entity.style.width = b + "px";
        this.entity.style.height = a + "px";
        if (this.ifm) {
            this.ifm.style.width = b + "px";
            this.ifm.style.height = a + "px"
        }
    },
    getAreaHeight: function() {
        var a = Math.max(document.documentElement.clientHeight, document.body.clientHeight);
        return a
    },
    getAreaWidth: function() {
        var a = document.documentElement.clientWidth || document.body.clientWidth;
        return a
    },
    setFixed: function(a) {
        if ($IE6) {
            var b = this;
            if (a) {
                b._ie6Fixed();
                Core.Events.addEvent(window, b._ie6Fixed, "scroll")
            } else {
                Core.Events.removeEvent(window, b._ie6Fixed, "scroll")
            }
        } else {
            this.entity.style.position = a ? "fixed": "absolute"
        }
    },
    _setOpacity: function(b, a) {
        if ($IE) {
            b.style.filter = "alpha(opacity=" + a * 100 + ")"
        } else {
            b.style.opacity = a
        }
    },
    onShow: function() {},
    onHidden: function() {}
};
if (typeof Xblog == "undefined") {
    Xblog = {}
}
Xblog.pkg = function(c) {
    if (!c || !c.length) {
        return null
    }
    var d = c.split(".");
    var b = Xblog;
    for (var a = (d[0] == "Xblog") ? 1: 0; a < d.length; ++a) {
        b[d[a]] = b[d[a]] || {};
        b = b[d[a]]
    }
    return b
};
Core.Dom.insertHTML = function(d, c, b) {
    d = $E(d) || document.body;
    b = b.toLowerCase() || "beforeend";
    if (d.insertAdjacentHTML) {
        switch (b) {
        case "beforebegin":
            d.insertAdjacentHTML("BeforeBegin", c);
            return d.previousSibling;
        case "afterbegin":
            d.insertAdjacentHTML("AfterBegin", c);
            return d.firstChild;
        case "beforeend":
            d.insertAdjacentHTML("BeforeEnd", c);
            return d.lastChild;
        case "afterend":
            d.insertAdjacentHTML("AfterEnd", c);
            return d.nextSibling
        }
        throw 'Illegal insertion point -> "' + b + '"'
    }
    var a = d.ownerDocument.createRange();
    var f;
    switch (b) {
    case "beforebegin":
        a.setStartBefore(d);
        f = a.createContextualFragment(c);
        d.parentNode.insertBefore(f, d);
        return d.previousSibling;
    case "afterbegin":
        if (d.firstChild) {
            a.setStartBefore(d.firstChild);
            f = a.createContextualFragment(c);
            d.insertBefore(f, d.firstChild);
            return d.firstChild
        } else {
            d.innerHTML = c;
            return d.firstChild
        }
        break;
    case "beforeend":
        if (d.lastChild) {
            a.setStartAfter(d.lastChild);
            f = a.createContextualFragment(c);
            d.appendChild(f);
            return d.lastChild
        } else {
            d.innerHTML = c;
            return d.lastChild
        }
        break;
    case "afterend":
        a.setStartAfter(d);
        f = a.createContextualFragment(c);
        d.parentNode.insertBefore(f, d.nextSibling);
        return d.nextSibling
    }
    throw 'Illegal insertion point -> "' + b + '"'
};
Xblog.insertTemplate = function(d, j, g) {
    var a = [],
    b = {},
    k = /#{(\w+)}/g,
    h = "_" + (new Date().getTime().toString()).slice( - 5) + Math.floor(Math.random() * 100000);
    j = j.replace(k, 
    function(i, l) {
        a.push(l);
        return l + h
    });
    Core.Dom.insertHTML(d, j, g);
    for (var f = a.length, c; f--;) {
        c = a[f];
        b[c] = $E(c + h)
    }
    return b
};
if (typeof SinaEx === "undefined") {
    SinaEx = {}
}
SinaEx.findNode = function(a, c, d) {
    for (var b = a[d]; b; b = b[c]) {
        if (b.nodeType == 1) {
            return b
        }
    }
    return null
};
SinaEx.prev = function(a) {
    return SinaEx.findNode(a, "previousSibling", "previousSibling")
};
SinaEx.next = function(a) {
    return SinaEx.findNode(a, "nextSibling", "nextSibling")
};
SinaEx.firstChild = function(a) {
    return SinaEx.findNode(a, "nextSibling", "firstChild")
};
SinaEx.parent = function(a, b) {
    b = b.toUpperCase();
    while (a) {
        if (a.nodeName.toUpperCase() === b) {
            return a
        }
        a = a.parentNode
    }
    return null
};
SinaEx.addClass = function(a, b) {
    var c = a.className;
    if ((" " + c + " ").indexOf(" " + b + " ") === -1) {
        a.className = c + " " + b
    }
};
if (document.documentElement.contains) {
    SinaEx.contains = function(d, c) {
        return d.contains ? d.contains(c) : true
    }
} else {
    if (document.documentElement.compareDocumentPosition) {
        SinaEx.contains = function(d, c) {
            return d === c || !!(d.compareDocumentPosition(c) & 16)
        }
    } else {
        SinaEx.contains = function(d, c) {
            while (c) {
                if (d === c) {
                    return true
                }
                c = c.parentNode
            }
            return false
        }
    }
}
function xblogLog(c, a) {
    if (typeof scope === "undefined") {
        window.scope = {};
        scope.$uid = scope.$pageid = ""
    }
    var f = c || "",
    b = a || scope.$uid,
    d = scope.$pageid,
    h = new Date().getTime(),
    g = f + "|" + h + "|" + d + "|" + b;
    var i = window.actlog_img = new Image();
    i.onLoad = i.onError = function() {
        window.actlog_img = null
    };
    i.src = $_GLOBAL.DOMAIN_CORE + "blog/api/actlog.php?msg=" + encodeURIComponent(g);
    i = null
}
window.senderrlog = function(b) {
    var a = new Image();
    a.src = $_GLOBAL.DOMAIN_CORE + "blog/api/actlog.php?error=" + b;
    return true
};
window.onerror = function(c, b, a) {
    senderrlog("Error occured:" + c + "<br/>file:" + b + "<br/>line:" + a + "<br/>");
    return true
};
$LoginEnty = function(y) {
    var b = "登录名或密码错误",
    f = b,
    w = b,
    s = b;
    var t = false,
    q = 0,
    A = "",
    a,
    F,
    g = ["@sina.com", "@163.com", "@qq.com", "@126.com", "@vip.sina.com", "@sina.cn", "@hotmail.com", "@gmail.com", "@sohu.com", "@yahoo.cn"];
    var m = y.email,
    z = y.password,
    i = y.tips,
    n = y.loginbtn,
    c = $E("sugList"),
    l,
    p;
    var j = Core.Events.addEvent;
    h();
    Utils.Form.limitMaxLen(m, 64);
    j(m, 
    function() {
        m.className = "ipt focus";
        D(i)
    },
    "focus");
    j(m, 
    function(G) {
        G = G || window.event;
        if (G.keyCode === 13 && A === m.value) {
            if (z.value !== "") {
                r()
            } else {
                z.focus()
            }
        }
        A = m.value
    },
    "keyup");
    j(m, 
    function() {
        var G = Core.String.trim(m.value);
        if (G == "") {
            m.value = "";
            m.className = "ipt uid"
        }
    },
    "blur");
    j(z, 
    function() {
        q = 1;
        z.className = "ipt focus";
        D(i)
    },
    "focus");
    j(z, 
    function(G) {
        if (t) {
            D(i)
        }
        G = G || window.event;
        var H = G.keyCode;
        if (H === 13) {
            if (m.value !== "") {
                r()
            } else {
                m.focus()
            }
        }
    },
    "keyup");
    j(z, 
    function() {
        var G = Core.String.trim(z.value);
        if (G == "") {
            z.value = "";
            z.className = "ipt psw"
        }
        q = 0
    },
    "blur");
    j(n, 
    function() {
        xblogLog("A_0003_01_05");
        r()
    });
    j(l.input, 
    function(G) {
        G = G || window.event;
        var H = G.keyCode;
        if (H === 13) {
            Core.Events.fireEvent(n, "click")
        }
    },
    "keyup");
    $E("topregbtn").onclick = function() {
        xblogLog("A_0003_01_04")
    };
    SinaEx.next($E("loginBtn")).onclick = function() {
        xblogLog("A_0003_01_06")
    };
    var C = Core.Dom.getElementsByClass(Core.Dom.getElementsByClass(document.body, "div", "links")[0], "a", "countable");
    C[0].onclick = function() {
        xblogLog("A_0003_01_07")
    };
    C[1].onclick = function() {
        xblogLog("A_0003_01_08")
    };
    C[2].onclick = function() {
        xblogLog("A_0003_01_09")
    };
    C[3].onclick = function() {
        xblogLog("A_0003_01_10")
    };
    C[4].onclick = function() {
        xblogLog("A_0003_01_11")
    };
    C[5].onclick = function() {
        xblogLog("A_0003_01_12")
    };
    C[6].onclick = function() {
        xblogLog("A_0003_01_13")
    };
    new LoginNameSuggest({
        inputEle: m,
        itemTagName: "li",
        highlightClassName: "current",
        normalClassName: "",
        createListFun: function(N) {
            var L = "<ul>",
            K = 0,
            I = 0,
            G = g.length,
            M = N.indexOf("@"),
            J = "",
            H = "";
            if (M === -1) {
                for (; K < G; K++) {
                    L = L + '<li id="s_' + K + '" key="' + N + g[K] + '">' + N + g[K] + "</li>"
                }
            } else {
                J = N.slice(0, M);
                H = N.slice(M);
                L = L + '<li id="s_' + I + '" key="' + N + '">' + N + "</li>";
                for (; K < G; K++) {
                    if (g[K].indexOf(H) === 0) {
                        I++;
                        L = L + '<li id="s_' + I + '" key="' + J + g[K] + '">' + J + g[K] + "</li>"
                    }
                }
            }
            return L + "</ul>"
        },
        container: c
    });
    function B(G) {
        if (G.result) {
            if (Utils.Cookie.getCookie("displayEditorGuide" + G.userinfo.uniqueid) === "true") {
                Utils.Cookie.setCookie("editorLoginFlag" + G.userinfo.uniqueid, "true", 24)
            }
            Utils.Cookie.setCookie("qinguser", a, 30 * 24);
            xblogLog("A_0003_01_14");
            setTimeout(function() {
                window.location.href = $_GLOBAL.DOMAIN_CORE + "blog/api/logincallback.php?gourl=" + encodeURIComponent(scope.$gourl)
            },
            200)
        } else {
            if (G.errno == "4010") {
                u(i, '该账号需<a style="margin-left: 0px;*top:0px" target="_blank" href="' + $_GLOBAL.DOMAIN_CORE + "blog/api/actemail.php?email=" + m.value + '">激活</a')
            } else {
                if (G.errno == "4049") {
                    sinaSSOController.loginExtraQuery = {
                        door: 1
                    };
                    p.show();
                    l.checkImg.src = v();
                    l.entity.style.display = "";
                    k(l.entity);
                    l.input.focus()
                } else {
                    if (G.errno == "2070") {
                        p.show();
                        l.checkImg.src = v();
                        l.entity.style.display = "";
                        l.errTip.innerHTML = G.reason
                    } else {
                        if (G.errno == "4047") {
                            u(i, G.reason)
                        } else {
                            if (G.errno == "4057") {
                                u(i, G.reason);
                                var H = i.getElementsByTagName("a")[0];
                                if (typeof H !== "undefined") {
                                    H.style.marginLeft = "0px";
                                    H.style.color = "#DB7E36";
                                    H.style.textDecoration = "underline"
                                }
                            } else {
                                p.hidden();
                                l.entity.style.display = "none";
                                u(i, b)
                            }
                        }
                    }
                }
            }
        }
    }
    var x = new LoginPost(B);
    function r() {
        if (!o()) {
            return
        }
        i.style.display = "none";
        if (typeof sinaSSOController !== "undefined" && sinaSSOController.loginExtraQuery && sinaSSOController.loginExtraQuery.door) {
            var H = l.input.value;
            sinaSSOController.loginExtraQuery.door = H || 1
        }
        var G = 30;
        x.login(a, F, G)
    }
    function v() {
        l.input.value = "";
        var G = "";
        if (typeof sinaSSOController !== "undefined") {
            G = sinaSSOController.getPinCodeUrl() || ""
        }
        return G
    }
    function o() {
        return d() && E()
    }
    function d() {
        a = Core.String.trim(m.value);
        var G = "";
        if (a == "") {
            G = f
        }
        if (G === "") {
            return true
        }
        u(i, G);
        return false
    }
    function E() {
        F = z.value;
        var G = "";
        if (F == "") {
            G = s
        }
        if (G === "") {
            return true
        }
        u(i, G);
        return false
    }
    function u(G, H) {
        t = true;
        G.style.display = "";
        if (H) {
            G.innerHTML = H
        }
        m.blur();
        z.blur()
    }
    function D(G) {
        t = false;
        G.style.display = "none"
    }
    function h() {
        var H = new Utils.Url(location.href);
        if (H.query.error == "lock") {
            m.value = H.query.user;
            $E("tips").innerHTML = decodeURIComponent(H.query.msg);
            $E("tips").style.display = ""
        } else {
            m.value = unescape(Utils.Cookie.getCookie("qinguser"))
        }
        if (m.value !== "") {
            m.className = "ipt focus"
        } else {
            m.className = "ipt uid"
        }
        var G = '<div id="#{entity}" style="display:none;position:fixed;top:50%;left:50%;z-index:1200" class="popBoxMod loginVerify"><div class="hd"></div><div class="bd"><h5>为了保护你的账号安全,请输入验证码进行登录</h5><a title="" href="#" class="close" id="#{close}"></a><div class="inputWrap"><label for="">验证码：<input type="text" class="txt foucs" id="#{input}" maxlength="5" /></label><span class="verifyImg"><img width="100" align="absmiddle" id="#{checkImg}" /></span><a href="#" class="change" id="#{reload}">换一张</a></div><p class="errTip" id="#{errTip}"></p><div class="btnWrap"><a class="popBtnA" href="#" id="#{login}"><span>登录</span></a></div></div><div class="bt"></div></div>';
        p = new OnlyShadow("0.2", document.body, "mask_vcode");
        l = Xblog.insertTemplate(document.body, G, "BeforeEnd");
        j(l.close, 
        function() {
            p.hidden();
            l.entity.style.display = "none";
            sinaSSOController.loginExtraQuery = {}
        });
        j(l.reload, 
        function() {
            l.checkImg.src = v();
            l.errTip.innerHTML = "";
            l.input.value = ""
        });
        j(l.login, 
        function() {
            if ($IE) {
                n.click()
            } else {
                var I;
                if (/Mobile/i.test(navigator.userAgent)) {
                    I = document.createEvent("HTMLEvents")
                } else {
                    I = document.createEvent("MouseEvents")
                }
                I.initEvent("click", true, true);
                n.dispatchEvent(I)
            }
        })
    }
    function k(I) {
        var G = parseInt(I.offsetWidth, 10),
        H = parseInt(I.offsetHeight, 10);
        I.style.marginLeft = G / 2 * ( - 1) + "px";
        I.style.marginTop = H / 2 * ( - 1) + "px";
        if ($IE6) {
            Core.Dom.setStyle2(I, {
                position: "absolute"
            });
            I.style.marginTop = "0px";
            I.style.top = ((document.documentElement.clientHeight || document.body.clientHeight) / 2 - H / 2) + "px"
        }
    }
};
$registJob("login2", 
function() {
    $LoginEnty({
        email: $E("email"),
        password: $E("password"),
        tips: $E("tips"),
        loginbtn: $E("loginBtn")
    })
});
Core.Events.fixEvent = function(a) {
    if (typeof a == "undefined") {
        a = window.event
    }
    if (!a.target) {
        a.target = a.srcElement;
        a.pageX = a.x;
        a.pageY = a.y
    }
    if (typeof a.layerX == "undefined") {
        a.layerX = a.offsetX
    }
    if (typeof a.layerY == "undefined") {
        a.layerY = a.offsetY
    }
    return a
};
Core.Dom.domInsert = function(d, f, h, g) {
    h = /^(afterBegin|afterEnd|beforeBegin|beforeEnd)$/.test(h) ? h: "beforeEnd";
    g = (typeof g == "function" ? g: function() {});
    var a = arguments;
    if ($IE) {
        var c = "HTML";
        if (typeof f == "object") {
            if (f.nodeType == 1) {
                c = "Element"
            } else {
                if (f.nodeType == 3) {
                    c = "Text";
                    f = f.data
                } else {
                    c = "HTML"
                }
            }
        } (function() {
            try {
                d.doScroll("left");
                d["insertAdjacent" + c](h, f);
                g.call(a.caller);
                g = f = null
            } catch(i) {
                window.setTimeout(arguments.callee, 0)
            }
        })()
    } else {
        if (typeof f == "object" && /^(1|3)$/.test(f.nodeType)) {
            switch (h) {
            case "afterBegin":
                d.insertBefore(f, d.firstChild);
                break;
            case "afterEnd":
                if (d.parentNode.nodeType == 1) {
                    d.parentNode.insertBefore(f, d.nextSibling)
                }
                break;
            case "beforeBegin":
                if (d.parentNode.nodeType == 1) {
                    d.parentNode.insertBefore(f, d)
                }
                break;
            case "beforeEnd":
                d.appendChild(f);
                break
            }
        } else {
            var b = document.createElement("div");
            b.innerHTML = f;
            switch (h) {
            case "afterBegin":
                while (b.lastChild) {
                    d.insertBefore(b.lastChild, d.firstChild)
                }
                break;
            case "afterEnd":
                if (d.parentNode.nodeType == 1) {
                    while (b.lastChild) {
                        d.parentNode.insertBefore(b.lastChild, d.nextSibling)
                    }
                }
                break;
            case "beforeBegin":
                if (d.parentNode.nodeType == 1) {
                    while (b.firstChild) {
                        d.parentNode.insertBefore(b.firstChild, d)
                    }
                }
                break;
            case "beforeEnd":
                while (b.firstChild) {
                    d.appendChild(b.firstChild)
                }
                break
            }
            b = null
        }
        g.call(a.caller)
    }
};
Sina.pkg("Core.Math");
Core.Math.getRandomNumber = function(c, b) {
    if (isNaN(c) || isNaN(b) || c < 0 && b < 0) {
        return null
    }
    var d = Math.ceil(Math.min(c, b));
    var a = Math.floor(Math.max(c, b));
    d = d > 0 ? d: 0;
    return Math.round(d + Math.random() * (a - d))
};
Core.Dom.opacity = function(b, a) {
    b = typeof b == "string" ? $E(b) : b;
    b.style.filter = "alpha(opacity=" + a + ")";
    b.style.opacity = a / 100
};
Core.System.winSize = function(b) {
    var a,
    c;
    if (b) {
        target = b.document
    } else {
        target = document
    }
    if (self.innerHeight) {
        if (b) {
            target = b.self
        } else {
            target = self
        }
        a = target.innerWidth;
        c = target.innerHeight
    } else {
        if (target.documentElement && target.documentElement.clientHeight) {
            a = target.documentElement.clientWidth;
            c = target.documentElement.clientHeight
        } else {
            if (target.body) {
                a = target.body.clientWidth;
                c = target.body.clientHeight
            }
        }
    }
    return {
        width: a,
        height: c
    }
}; (function() {
    function a(c) {
        function b() {}
        b.prototype = c;
        return new b()
    }
    Function.prototype.$define = function(c) {
        var b;
        for (b in c) {
            this.prototype[b] = c[b]
        }
        if (this.__interface__) {
            for (b in this.prototype) {
                if (this.prototype[b] === "NI") {
                    throw new Error("类定义错误，接口方法[" + b + "]未实现")
                }
            }
        }
        this.prototype.constructor = this;
        this.$extends = this.$define = this.$implements = function() {
            throw new Error("$define语句定义后面不能再作其它定义")
        };
        return this
    };
    Function.prototype.$extends = function() {
        var f = this,
        c = arguments.length,
        b,
        d;
        if (c === 0) {
            throw new Error("$extends语句错误：未指定父类")
        }
        b = arguments[0];
        d = function() {
            b.apply(this, arguments);
            f.apply(this, arguments)
        };
        d.prototype = a(b.prototype);
        d.prototype.constructor = d;
        d.$super = b.prototype;
        return d
    };
    Function.prototype.$implements = function() {
        var b = Array.prototype.slice.call(arguments, 0),
        f,
        d = b.length,
        c;
        while (d--) {
            if (typeof b[d] !== "object") {
                throw new Error("$implements语句错误：参数必须为object类型")
            }
            for (c in b[d]) {
                typeof this.prototype[c] === "undefined" && (this.prototype[c] = "NI")
            }
        }
        this.__interface__ = true;
        this.$extends = function() {
            throw new Error("$extends语句错误:$extends语句不能出现在$implements定义之后")
        };
        return this
    }
})();
Sina.pkg("Ui");
if (typeof Ui == "undefined") {
    Ui = Sina.Ui
}
Ui.Transition = {
    simple: function(f, a, h, g) {
        return h * f / g + a
    },
    backEaseIn: function(f, a, i, h) {
        var g = 1.70158;
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    backEaseOut: function(f, a, i, h) {
        var g = 1.70158;
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    backEaseInOut: function(f, a, i, h) {
        var g = 1.70158;
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    bounceEaseOut: function(f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    bounceEaseIn: function(f, a, h, g) {
        return h - Transition.bounceEaseOut(g - f, 0, h, g) + a
    },
    bounceEaseInOut: function(f, a, h, g) {
        if (f < g / 2) {
            return Transition.bounceEaseIn(f * 2, 0, h, g) * 0.5 + a
        } else {
            return Transition.bounceEaseOut(f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
        }
    },
    regularEaseIn: function(f, a, h, g) {
        return h * (f /= g) * f + a
    },
    regularEaseOut: function(f, a, h, g) {
        return - h * (f /= g) * (f - 2) + a
    },
    regularEaseInOut: function(f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return - h / 2 * ((--f) * (f - 2) - 1) + a
    },
    strongEaseIn: function(f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    strongEaseOut: function(f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    strongEaseInOut: function(f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    elasticEaseIn: function(h, f, l, k) {
        var g,
        j;
        if (h == 0) {
            return f
        }
        if ((h /= k) == 1) {
            return f + l
        }
        j = k * 0.3;
        if (!g || g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return - (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + f
    },
    elasticEaseOut: function(h, f, l, k) {
        var g,
        j;
        if (h == 0) {
            return f
        }
        if ((h /= k) == 1) {
            return f + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (!g || g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return (g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + f)
    },
    elasticEaseInOut: function(h, f, l, k) {
        var g,
        j;
        if (h == 0) {
            return f
        }
        if ((h /= k / 2) == 2) {
            return f + l
        }
        if (!j) {
            var j = k * (0.3 * 1.5)
        }
        if (!g || g < Math.abs(l)) {
            var g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return - 0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + f
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + f
    }
};
Core.Events.EventDispatcher = function(a) {
    this.__target = a;
    this.__events = {}
}.$define({
    addEventListener: function(b, c) {
        if (!this.__checkFunction(c)) {
            return
        }
        var a = this.__events;
        b = b.toLowerCase(); ! a[b] && (a[b] = []);
        a[b].push(c)
    },
    removeEventListener: function(c, d) {
        var a = this.__events[c];
        c = c.toLowerCase();
        if (!this.__checkFunction(d) || !a || !a.length) {
            return
        }
        for (var b = a.length - 1; b >= 0; b--) { (a[b] == d) && a.splice(b, 1)
        }
    },
    dispatchEvent: function(f) {
        f = f.toLowerCase();
        var b = this.__events[f];
        if (!b || !b.length) {
            return
        }
        var c = Array.prototype.slice.call(arguments, 0);
        c.shift();
        for (var d = 0, a = b.length; d < a; d++) {
            b[d].apply(this.__target, c)
        }
    },
    __checkFunction: function(a) {
        return typeof a !== "string" && String.prototype.slice.call(a, 0, 8) == "function"
    }
});
Ui.TweenStrategy = function(c, a, d, b) {
    this.startValue = c || 0;
    this.endValue = a || 0;
    this.duration = d || 0;
    this.motion = b || Ui.Transition.simple;
    this.__eventDispatcher = new Core.Events.EventDispatcher(this)
}.$define({
    motion: null,
    duration: 0,
    startValue: 0,
    endValue: 0,
    _itvID: 0,
    _isTweenning: false,
    addEventListener: function(a, b) {
        this.__eventDispatcher.addEventListener(a, b);
        return this
    },
    removeEventListener: function(a, b) {
        this.__eventDispatcher.removeEventListener(a, b);
        return this
    },
    start: function() {
        if (this._isTweenning) {
            return
        }
        this._isTweenning = true;
        var g = this,
        b,
        a = this.startValue,
        f = this.endValue,
        i = this.duration,
        h,
        c = (new Date()).getTime();
        this._itvID = window.setInterval(function() {
            b = ((new Date()).getTime() - c) / 1000;
            b > g.duration && (b = g.duration);
            h = g.motion(b, a, f - a, i);
            g.onTween && g.onTween(h);
            g.__eventDispatcher.dispatchEvent("tween", h);
            b == g.duration && g.stop()
        },
        25);
        return this
    },
    stop: function() {
        window.clearInterval(this._itvID);
        this._isTweenning = false;
        this.onEnd && this.onEnd();
        this.__eventDispatcher.dispatchEvent("end");
        return this
    },
    onTween: function(a) {},
    onEnd: function() {}
});
if (typeof Xblog === "undefined") {
    Xblog = {}
}
Xblog.imgReady = (function() {
    var d = [],
    c = null,
    b = function() {
        var f = 0;
        for (; f < d.length; f++) {
            d[f].end ? d.splice(f--, 1) : d[f]()
        } ! d.length && a()
    },
    a = function() {
        clearInterval(c);
        c = null
    };
    return function(g, l, n, k) {
        var m,
        h,
        o,
        j,
        f,
        i = new Image();
        i.src = g;
        if (i.complete) {
            l.call(i);
            n && n.call(i);
            return
        }
        h = i.width;
        o = i.height;
        i.onerror = function() {
            k && k.call(i);
            m.end = true;
            i = i.onload = i.onerror = null
        };
        m = function() {
            j = i.width;
            f = i.height;
            if (j !== h || f !== o || j * f > 1024) {
                l.call(i);
                m.end = true
            }
        };
        m();
        i.onload = function() { ! m.end && m();
            n && n.call(i);
            i = i.onload = i.onerror = null
        };
        if (!m.end) {
            d.push(m);
            if (c === null) {
                c = setInterval(b, 40)
            }
        }
    }
})();
Xblog.pkg("Utils");
Xblog.Utils.shuffle = function(d) {
    for (var b, a, c = d.length; c; b = parseInt(Math.random() * c), a = d[--c], d[c] = d[b], d[b] = a) {}
    return d
};
Utils.Io.Ajax = {
    createRequest: function() {
        var c = null;
        try {
            c = new XMLHttpRequest()
        } catch(b) {
            try {
                c = new ActiveXObject("Msxml2.XMLHTTP")
            } catch(d) {
                try {
                    c = ActiveXObject("Microsoft.XMLHTTP")
                } catch(a) {}
            }
        }
        if (c == null) {} else {
            return c
        }
    },
    request: function(a, b) {
        b = b || {};
        b.onComplete = b.onComplete || 
        function() {};
        b.onException = b.onException || 
        function() {};
        b.returnType = b.returnType || "txt";
        b.method = b.method || "get";
        b.data = b.data || {};
        if (typeof b.GET != "undefined" && typeof b.GET.url_random != "undefined" && b.GET.url_random == 0) {
            this.rand = false;
            b.GET.url_random = null
        }
        return this.loadData(a, b)
    },
    loadData: function(url, option) {
        var request = this.createRequest(),
        tmpArr = [];
        var _url = new Utils.Url(url);
        if (option.POST) {
            for (var postkey in option.POST) {
                var postvalue = option.POST[postkey];
                if (postvalue != null) {
                    tmpArr.push(postkey + "=" + Core.String.encodeDoubleByte(postvalue))
                }
            }
        }
        var sParameter = tmpArr.join("&") || "";
        if (option.GET) {
            for (var key in option.GET) {
                if (key != "url_random") {
                    _url.setParam(key, Core.String.encodeDoubleByte(option.GET[key]))
                }
            }
        }
        if (this.rand != false) {}
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                var response,
                type = option.returnType;
                try {
                    switch (type) {
                    case "txt":
                        response = request.responseText;
                        break;
                    case "xml":
                        if ($IE) {
                            response = request.responseXML
                        } else {
                            var Dparser = new DOMParser();
                            response = Dparser.parseFromString(request.responseText, "text/xml")
                        }
                        break;
                    case "json":
                        response = eval("(" + request.responseText + ")");
                        break
                    }
                    option.onComplete(response)
                } catch(e) {
                    option.onException(e.message, _url);
                    return false
                }
            }
        };
        try {
            if (option.POST) {
                request.open("POST", _url, true);
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                request.send(sParameter)
            } else {
                request.open("GET", _url, true);
                request.send(null)
            }
        } catch(e) {
            option.onException(e.message, _url);
            return false
        }
        return request
    }
};
scope.logSystem = function(a) {
    var b = a || "logmsg";
    Core.Events.addEvent(document, 
    function(f) {
        var c = f ? f: window.event;
        var d = f.target ? f.target: f.srcElement;
        while (d != document) {
            if (d.getAttribute(b)) {
                xblogLog(d.getAttribute(b));
                break
            } else {
                d = d.parentNode
            }
        }
    })
};
$registJob("loginScroll2", 
function() {
    scope.logSystem();
    var q = 150;
    var b = scope.$recommendUserCnt || 30;
    var m = q * b;
    var c = Math.ceil(Core.System.winSize().width / q);
    var j = Core.Math.getRandomNumber(1, Math.floor((scope.$discoverNum ? scope.$discoverNum: 100) / b));
    var t = 0;
    var h = new Ui.TweenStrategy(0, 100, 0.1);
    var d = $_GLOBAL.DOMAIN_CORE + "blog/api/getdiscoverlist.php";
    function n() {
        setInterval(function() {
            if (t > m) {
                t = 0
            }
            $E("loginScroll").style.left = -1 * t + "px"; ++t
        },
        52)
    }
    $E("loginScroll").style.width = (m * 2 + 20) + "px";
    var p = $E("loginScroll").children;
    var a = [];
    for (var r = 0; r < p.length; r++) {
        if (p[r].children[0].children[0].children[0].children[0].tagName.toLowerCase() == "img") {
            a.push(p[r].children[0].children[0].children[0].children[0])
        }
    }
    l(a, 0);
    function s() {
        var i = $E("loginScroll").innerHTML;
        Core.Dom.insertHTML($E("loginScroll"), i, "beforeEnd")
    }
    function l(u, i) {
        Xblog.imgReady(u[i].getAttribute("src"), 
        function() {},
        function() {
            h.start()
        },
        function() {
            h.start()
        });
        h.onTween = function(v) {};
        h.onEnd = function() {
            if (i >= c) {
                for (var v = i; v < u.length; v++) {
                    u[v].src = u[v].getAttribute("src")
                }
                s();
                n()
            }
            if (i < c) {
                l(u, ++i)
            }
        }
    }
    Core.Events.addEvent(window, 
    function() {
        o()
    },
    "resize");
    function g(v) {
        var u = document.createElement("a");
        u.href = v;
        u.target = "_blank";
        document.body.appendChild(u);
        if ($IE) {
            u.click()
        } else {
            var i;
            if (/Mobile/i.test(navigator.userAgent)) {
                i = document.createEvent("HTMLEvents")
            } else {
                i = document.createEvent("MouseEvents")
            }
            i.initEvent("click", true, true);
            u.dispatchEvent(i)
        }
        setTimeout(function() {
            document.body.removeChild(u)
        },
        30)
    }
    function k(u) {
        var i = Core.Dom.byClz(u, "span", "tag")[0].innerHTML,
        w = u.getAttribute("blogid");
        var v = $_GLOBAL.DOMAIN_CORE + "tag/" + encodeURIComponent(i) + "?blogid=" + w;
        g(v)
    }
    var f = $E("loginScroll").parentNode;
    function o() {
        var i = Math.max(document.documentElement.scrollHeight || document.body.scrollHeight, document.documentElement.clientHeight || document.body.clientHeight);
        if (parseInt(i, 10) <= 600) {
            f.style.top = "415px";
            f.style.bottom = "auto"
        } else {
            f.style.top = "auto";
            f.style.bottom = "0px"
        }
        if ($IE6) {
            if (parseInt(document.body.offsetWidth, 10) <= 780) {
                f.style.width = "780px"
            } else {
                f.style.width = "100%"
            }
        }
    }
});
StorageUitl = {
    _initStorage: function() {
        var b;
        if (typeof localStorage == "object") {
            b = localStorage
        } else {
            if (typeof globalStorage == "object") {
                b = globalStorage;
                b.setItem = function(c, d) {
                    globalStorage[document.domain][c] = d
                };
                b.getItem = function(c) {
                    return globalStorage[document.domain][c]
                }
            } else {
                var a = $E("dataStorage");
                if (!a) {
                    a = $C("DIV");
                    a.addBehavior("#default#userData");
                    a.id = "dataStorage";
                    document.body.appendChild(a);
                    if (document.body) {
                        document.body.appendChild(a)
                    } else {
                        document.getElementsByTagName("head")[0].appendChild(a)
                    }
                    a.load("BehaviorsInfo")
                }
                if (!a.setItem) {
                    a.setItem = function(c, d) {
                        a.setAttribute(c, d);
                        a.save("BehaviorsInfo")
                    };
                    a.getItem = function(c) {
                        return a.getAttribute(c)
                    }
                }
                b = a
            }
        }
        return b
    },
    setItem: function(a, b) {
        var c = this._initStorage();
        c.setItem(a, b)
    },
    getItem: function(a) {
        var b = this._initStorage();
        return b.getItem(a)
    }
};
if (typeof Lib == "undefined") {
    Lib = {}
}
Lib.pkg = function(c) {
    if (!c || !c.length) {
        return null
    }
    var d = c.split(".");
    var b = Lib;
    for (var a = (d[0] == "Lib") ? 1: 0; a < d.length; ++a) {
        b[d[a]] = b[d[a]] || {};
        b = b[d[a]]
    }
    return b
};
Core.System.keyValue = function(b, c) {
    var a = b.match(new RegExp("(\\?|&)" + c + "=([^&]*)(&|$)"));
    if (a != null) {
        return a[2]
    }
    return null
};
Lib.checkAuthor = function() {
    var a = unescape(Utils.Cookie.getCookie("SUP"));
    if (a && a != "") {
        $UID = Core.System.keyValue(a, "uid");
        $nick = decodeURIComponent(Core.System.keyValue(a, "nick"));
        $isLogin = !!($UID);
        if (typeof scope.$uid == "undefined") {
            $isAdmin = false
        } else {
            $isAdmin = (scope.$uid == $UID)
        }
    } else {
        a = Utils.Cookie.getCookie("SU");
        if (a && a != "") {
            var b = a.match(/^([^:]*:){2}(\d{5,11})/);
            $UID = (b && b[2]) || null;
            window.$isLogin = !!($UID);
            if (typeof scope.$uid == "undefined") {
                window.$isAdmin = false
            } else {
                window.$isAdmin = (scope.$uid == $UID)
            }
        } else {
            $UID = null;
            $isLogin = false;
            $isAdmin = false
        }
    }
};
$registJob("userBehaviors", 
function() {
    try {
        Lib.checkAuthor();
        var f = $UID ? $UID: 0,
        l,
        k = new UserBehaviorsStatic(),
        h,
        b = 0;
        h = k.load(f);
        if (h[0] && 0 < h.length) {
            b = h[0].data
        } else {
            if (f) {
                b = "" + ( + new Date) + $UID;
                k.save(f, b)
            } else {
                b = "" + ( + new Date) + parseInt(Math.random() * 10000);
                k.save(f, b)
            }
        }
        var j = $T(document, "META"),
        m;
        for (var c = 0, d = j.length; c < d; c++) {
            if ("tags" == j[c].name) {
                m = j[c].content;
                break
            }
        }
        var a = {
            referrerURL: document.referrer,
            tags: m ? Core.String.trim(m) : "",
            hash: location.hash,
            viewTime: "",
            uid: f ? f: b,
            staticId: b
        };
        Utils.Io.Ajax.request($_GLOBAL.DOMAIN_CORE + "blog/api/logpost.php", {
            POST: a,
            onComplete: function(i) {},
            onException: function(n, i) {}
        })
    } catch(g) {
        Debug.info(g)
    }
});
UserBehaviorsStatic = Core.Class.create();
UserBehaviorsStatic.prototype = {
    initialize: function() {},
    load: function(g) {
        var c = StorageUitl.getItem("static_msg");
        if (!c) {
            return []
        }
        var j = arguments.length;
        var d = c.split("|"),
        b,
        h = [];
        for (var f = 0, a = d.length; f < a; f++) {
            b = d[f].split(":");
            if (!isNaN(g) && b && (g == b[0])) {
                return [{
                    uid: g,
                    data: b[1]
                }]
            } else {
                if (!j && b && b[0]) {
                    h.push({
                        uid: b[0],
                        data: b[1]
                    })
                }
            }
        }
        return h
    },
    save: function(f, g) {
        var c = this.load(),
        h = false,
        b = [];
        for (var d = 0, a = c.length; d < a; d++) {
            userData = c[d];
            if (f == userData.uid) {
                h = true;
                userData.data = g;
                break
            } else {
                b.push(userData.uid + ":" + userData.data)
            }
        }
        if (!h) {
            b.push(f + ":" + g)
        }
        StorageUitl.setItem("static_msg", b.join("|"))
    }
};
function v6SendLog(b, a) {}
function v7sendLog(b, a, c) {
    if (!b) {
        return false
    }
    if (b.split("_").length == 3) {
        Lib.checkAuthor();
        if ($isLogin) {
            b += "_" + $UID
        }
    }
    if (typeof scope == "undefined") {
        window.scope = {};
        scope.$pageid = ""
    }
    a = a || scope.$pageid;
    c = c || "";
    Utils.Io.JsLoad.request("http://hits.sinajs.cn/A2/b.html?type=" + b + "&pageid=" + a + "&msg=" + c, {
        onComplete: function() {}
    })
}
$registJob("suda", 
function() {
    var c = scope && scope.$pageid && scope.$pageid;
    var b = c && (c === "tpl_home" || c === "tpl_article");
    if (typeof _S_pSt == "function") {
        if (b) {
            a(c, "42_01_26", "42_01_29")
        }
        return
    }
    if (b) {
        a(c, "42_01_26", "42_01_29")
    }
    Utils.Io.JsLoad.request("http://www.sinaimg.cn/unipro/pub/suda_s_v851c.js", {
        onComplete: function() {
            try {
                _S_pSt("")
            } catch(d) {}
            if (b) {
                a(c, "42_01_27", "42_01_30")
            }
        },
        noreturn: true
    });
    function a(d, g, f) {
        switch (d) {
        case "tpl_home":
            v7sendLog(g);
            break;
        case "tpl_article":
            v7sendLog(f);
            break
        }
    }
});
$registJob("heart", 
function() {
    Lib.checkAuthor();
    if ($isLogin) {
        var c = 30 * 1000;
        var a = Utils.Io.Ajax;
        var d = window.$UID || "",
        f = scope.$heartBeatId || "22009";
        var b = $_GLOBAL.DOMAIN_CORE + "blog/api/unread_count.php?user_id=" + d + "&heartBeatId=" + f;
        a.request(b, {});
        setInterval(function() {
            a.request(b, {})
        },
        c)
    }
});
$registJob("ga", 
function() {
    var a = window._gaq || [];
    a.push(["_setAccount", "UA-28224892-1"]);
    a.push(["_trackPageview"]);
    window._gaq = a; (function() {
        var cX = void 0,
        cV = !0,
        cU = null,
        cS = !1,
        d6 = encodeURIComponent,
        dC = Infinity,
        cZ = setTimeout,
        ct = decodeURIComponent,
        cQ = Math;
        function b8(h, g) {
            return h.onload = g
        }
        function bS(h, g) {
            return h.name = g
        }
        var cP = "push",
        bx = "slice",
        bg = "replace",
        aU = "load",
        aD = "floor",
        cO = "charAt",
        al = "value",
        cN = "indexOf",
        c = "match",
        cL = "name",
        ej = "host",
        cI = "toString",
        cG = "length",
        cF = "prototype",
        dT = "clientWidth",
        cE = "split",
        cB = "stopPropagation",
        ck = "scope",
        cD = "location",
        cC = "getString",
        b0 = "clientHeight",
        bF = "href",
        cA = "substring",
        bo = "navigator",
        dK = "join",
        dH = "toLowerCase",
        dF;
        function a2(h, g) {
            switch (g) {
            case 0:
                return "" + h;
            case 1:
                return 1 * h;
            case 2:
                return !! h;
            case 3:
                return 1000 * h
            }
            return h
        }
        function dE(h, g) {
            return cX == h || "-" == h && !g || "" == h
        }
        function aL(g) {
            if (!g || "" == g) {
                return ""
            }
            for (; g && -1 < " \n\r\t" [cN](g[cO](0));) {
                g = g[cA](1)
            }
            for (; g && -1 < " \n\r\t" [cN](g[cO](g[cG] - 1));) {
                g = g[cA](0, g[cG] - 1)
            }
            return g
        }
        function au(h) {
            var g = 1,
            j = 0,
            i;
            if (!dE(h)) {
                g = 0;
                for (i = h[cG] - 1; 0 <= i; i--) {
                    j = h.charCodeAt(i),
                    g = (g << 6 & 268435455) + j + (j << 14),
                    j = g & 266338304,
                    g = 0 != j ? g ^ j >> 21: g
                }
            }
            return g
        }
        function Y() {
            return cQ.round(2147483647 * cQ.random())
        }
        function er() {}
        function d1(h, g) {
            if (d6 instanceof Function) {
                return g ? encodeURI(h) : d6(h)
            }
            dD(68);
            return escape(h)
        }
        function dB(h) {
            h = h[cE]("+")[dK](" ");
            if (ct instanceof Function) {
                try {
                    return ct(h)
                } catch(g) {
                    dD(17)
                }
            } else {
                dD(68)
            }
            return unescape(h)
        }
        var bP = function(h, g, j, i) {
            h.addEventListener ? h.addEventListener(g, j, !!i) : h.attachEvent && h.attachEvent("on" + g, j)
        },
        bu = function(h, g, j, i) {
            h.removeEventListener ? h.removeEventListener(g, j, !!i) : h.detachEvent && h.detachEvent("on" + g, j)
        };
        function dz(g) {
            return g && 0 < g[cG] ? g[0] : ""
        }
        function a8(h) {
            var g = h ? h[cG] : 0;
            return 0 < g ? h[g - 1] : ""
        }
        var aR = function() {
            this.prefix = "ga.";
            this.I = {}
        };
        aR[cF].set = function(h, g) {
            this.I[this.prefix + h] = g
        };
        aR[cF].get = function(g) {
            return this.I[this.prefix + g]
        };
        aR[cF].contains = function(g) {
            return this.get(g) !== cX
        };
        function aA(g) {
            0 == g[cN]("www.") && (g = g[cA](4));
            return g[dH]()
        }
        function ai(h, g) {
            var j,
            i = {
                url: h,
                protocol: "http",
                host: "",
                path: "",
                d: new aR,
                anchor: ""
            };
            if (!h) {
                return i
            }
            j = h[cN]("://");
            0 <= j && (i.protocol = h[cA](0, j), h = h[cA](j + 3));
            j = h.search("/|\\?|#");
            if (0 <= j) {
                i.host = h[cA](0, j)[dH](),
                h = h[cA](j)
            } else {
                return i.host = h[dH](),
                i
            }
            j = h[cN]("#");
            0 <= j && (i.anchor = h[cA](j + 1), h = h[cA](0, j));
            j = h[cN]("?");
            0 <= j && (ev(i.d, h[cA](j + 1)), h = h[cA](0, j));
            i.anchor && g && ev(i.d, i.anchor);
            h && "/" == h[cO](0) && (h = h[cA](1));
            i.path = h;
            return i
        }
        function ev(h, g) {
            function m(n, p) {
                h.contains(n) || h.set(n, []);
                h.get(n)[cP](p)
            }
            for (var k = aL(g)[cE]("&"), j = 0; j < k[cG]; j++) {
                if (k[j]) {
                    var i = k[j][cN]("=");
                    0 > i ? m(k[j], "1") : m(k[j][cA](0, i), k[j][cA](i + 1))
                }
            }
        }
        function eh(h, g) {
            if (dE(h) || "[" == h[cO](0) && "]" == h[cO](h[cG] - 1)) {
                return "-"
            }
            var i = dx.domain;
            return h[cN](i + (g && "/" != g ? g: "")) == (0 == h[cN]("http://") ? 7: 0 == h[cN]("https://") ? 8: 0) ? "0": h
        }
        var dR = 0;
        function c4(h, g, i) { ! (1 <= dR) && !(1 <= 100 * cQ.random()) && (h = ["utmt=error", "utmerr=" + h, "utmwv=5.2.5", "utmn=" + Y(), "utmsp=1"], g && h[cP]("api=" + g), i && h[cP]("msg=" + d1(i[cA](0, 100))), dv.q && h[cP]("aip=1"), cy(h[dK]("&")), dR++)
        }
        var ci = 0,
        bY = {};
        function du(g) {
            return bD("x" + ci++, g)
        }
        function bD(h, g) {
            bY[h] = !!g;
            return h
        }
        var bm = du(),
        a0 = du(),
        aJ = du(),
        ar = du(),
        s = du(),
        ds = du(),
        dr = du(),
        ep = du(),
        dZ = du(),
        dl = du(),
        cM = du(),
        co = du(),
        b4 = du(),
        bJ = du(),
        dN = du(),
        d5 = du(),
        dA = du(),
        cY = du(),
        cs = du(),
        b7 = du(),
        bR = du(),
        bw = du(),
        bf = du(),
        aT = du(),
        aC = du(),
        ak = du(),
        b = du(),
        ei = du(),
        dS = du(),
        c5 = du(),
        cz = du(),
        cj = du(),
        bZ = du(),
        bE = du(),
        bn = du(),
        dq = du(cV),
        a1 = bD("page"),
        aK = bD("title"),
        at = du(),
        B = du(),
        eq = du(),
        d0 = du(),
        bO = du(),
        bt = du(),
        a7 = du(),
        aQ = du(),
        dp = du(cV),
        az = du(cV),
        ah = du(cV),
        ef = du(cV),
        dP = du(cV),
        c3 = du(cV),
        cx = du(cV),
        ch = du(cV),
        bW = du(cV),
        bB = du(cV),
        bk = du(cV),
        dn = du(cV),
        aY = du(cV),
        aH = du(cV),
        ap = du(cV),
        o = du(cV),
        en = du(cV),
        dX = du(cV),
        dj = du(cV),
        cK = du(cV),
        cn = du(cV),
        b3 = du(cV),
        bI = du(cV),
        dL = du(cV),
        d4 = du(cV),
        dy = bD("campaignParams"),
        cW = du(),
        cr = bD("hitCallback"),
        b6 = du();
        du();
        var bQ = du(),
        bv = du(),
        a9 = du(),
        aS = du(),
        aB = du(),
        aj = du(),
        ew = du(),
        eg = du(),
        dQ = du(),
        bX = du(),
        bC = du();
        du();
        var bl = du(),
        aZ = du(),
        aI = du();
        var aq = function() {
            function g(h, j, i) {
                dm(dk[cF], h, j, i)
            }
            di("_getName", aJ, 58);
            di("_getAccount", bm, 64);
            di("_visitCode", dp, 54);
            di("_getClientInfo", bJ, 53, 1);
            di("_getDetectTitle", dA, 56, 1);
            di("_getDetectFlash", dN, 65, 1);
            di("_getLocalGifPath", b, 57);
            di("_getServiceMode", ei, 59);
            dh("_setClientInfo", bJ, 66, 2);
            dh("_setAccount", bm, 3);
            dh("_setNamespace", a0, 48);
            dh("_setAllowLinker", cM, 11, 2);
            dh("_setDetectFlash", dN, 61, 2);
            dh("_setDetectTitle", dA, 62, 2);
            dh("_setLocalGifPath", b, 46, 0);
            dh("_setLocalServerMode", ei, 92, cX, 0);
            dh("_setRemoteServerMode", ei, 63, cX, 1);
            dh("_setLocalRemoteServerMode", ei, 47, cX, 2);
            dh("_setSampleRate", ak, 45, 1);
            dh("_setCampaignTrack", d5, 36, 2);
            dh("_setAllowAnchor", co, 7, 2);
            dh("_setCampNameKey", cs, 41);
            dh("_setCampContentKey", aT, 38);
            dh("_setCampIdKey", cY, 39);
            dh("_setCampMediumKey", bw, 40);
            dh("_setCampNOKey", aC, 42);
            dh("_setCampSourceKey", bR, 43);
            dh("_setCampTermKey", bf, 44);
            dh("_setCampCIdKey", b7, 37);
            dh("_setCookiePath", dr, 9, 0);
            dh("_setMaxCustomVariables", dS, 0, 1);
            dh("_setVisitorCookieTimeout", ep, 28, 1);
            dh("_setSessionCookieTimeout", dZ, 26, 1);
            dh("_setCampaignCookieTimeout", dl, 29, 1);
            dh("_setReferrerOverride", at, 49);
            dh("_setSiteSpeedSampleRate", dQ, 132);
            g("_trackPageview", dk[cF].oa, 1);
            g("_trackEvent", dk[cF].v, 4);
            g("_trackPageLoadTime", dk[cF].na, 100);
            g("_trackSocial", dk[cF].pa, 104);
            g("_trackTrans", dk[cF].qa, 18);
            g("_sendXEvent", dk[cF].u, 78);
            g("_createEventTracker", dk[cF].W, 74);
            g("_getVersion", dk[cF].aa, 60);
            g("_setDomainName", dk[cF].t, 6);
            g("_setAllowHash", dk[cF].fa, 8);
            g("_getLinkerUrl", dk[cF].$, 52);
            g("_link", dk[cF].link, 101);
            g("_linkByPost", dk[cF].ea, 102);
            g("_setTrans", dk[cF].ia, 20);
            g("_addTrans", dk[cF].P, 21);
            g("_addItem", dk[cF].N, 19);
            g("_setTransactionDelim", dk[cF].ja, 82);
            g("_setCustomVar", dk[cF].ga, 10);
            g("_deleteCustomVar", dk[cF].Y, 35);
            g("_getVisitorCustomVar", dk[cF].ba, 50);
            g("_setXKey", dk[cF].la, 83);
            g("_setXValue", dk[cF].ma, 84);
            g("_getXKey", dk[cF].ca, 76);
            g("_getXValue", dk[cF].da, 77);
            g("_clearXKey", dk[cF].T, 72);
            g("_clearXValue", dk[cF].U, 73);
            g("_createXObj", dk[cF].X, 75);
            g("_addIgnoredOrganic", dk[cF].L, 15);
            g("_clearIgnoredOrganic", dk[cF].Q, 97);
            g("_addIgnoredRef", dk[cF].M, 31);
            g("_clearIgnoredRef", dk[cF].R, 32);
            g("_addOrganic", dk[cF].O, 14);
            g("_clearOrganic", dk[cF].S, 70);
            g("_cookiePathCopy", dk[cF].V, 30);
            g("_get", dk[cF].Z, 106);
            g("_set", dk[cF].ha, 107);
            g("_addEventListener", dk[cF].addEventListener, 108);
            g("_removeEventListener", dk[cF].removeEventListener, 109);
            g("_addDevId", dk[cF].K);
            g("_initData", dk[cF].m, 2);
            g("_setVar", dk[cF].ka, 22);
            dh("_setSessionTimeout", dZ, 27, 3);
            dh("_setCookieTimeout", dl, 25, 3);
            dh("_setCookiePersistence", ep, 24, 1);
            g("_setAutoTrackOutbound", er, 79);
            g("_setTrackOutboundSubdomains", er, 81);
            g("_setHrefExamineLimit", er, 80)
        },
        dm = function(h, g, j, i) {
            h[g] = function() {
                try {
                    return i != cX && dD(i),
                    j.apply(this, arguments)
                } catch(k) {
                    throw c4("exc", g, k && k[cL]),
                    k
                }
            }
        },
        di = function(h, g, j, i) {
            dk[cF][h] = function() {
                try {
                    return dD(j),
                    a2(this.a.get(g), i)
                } catch(k) {
                    throw c4("exc", h, k && k[cL]),
                    k
                }
            }
        },
        dh = function(h, g, k, j, i) {
            dk[cF][h] = function(n) {
                try {
                    dD(k),
                    i == cX ? this.a.set(g, a2(n, j)) : this.a.set(g, i)
                } catch(m) {
                    throw c4("exc", h, m && m[cL]),
                    m
                }
            }
        },
        r = function(h, g) {
            return {
                type: g,
                target: h,
                stopPropagation: function() {
                    throw "aborted"
                }
            }
        };
        var eo = function(h, g) {
            return "/" !== g ? cS: (0 == h[cN]("www.google.") || 0 == h[cN](".google.") || 0 == h[cN]("google.")) && !( - 1 < h[cN]("google.org")) ? cV: cS
        },
        dY = function(h) {
            var g = h.get(s),
            i = h[cC](dr, "/");
            eo(g, i) && h[cB]()
        };
        var ax = function() {
            var i = {},
            g = {},
            n = new bM;
            this.g = function(q, p) {
                n.add(q, p)
            };
            var m = new bM;
            this.c = function(q, p) {
                m.add(q, p)
            };
            var k = cS,
            j = cS,
            h = cV;
            this.J = function() {
                k = cV
            };
            this.f = function(p) {
                this[aU]();
                this.set(cW, p, cV);
                p = new br(this);
                k = cS;
                m.execute(this);
                k = cV;
                g = {};
                this.i();
                p.ra()
            };
            this.load = function() {
                k && (k = cS, this.ta(), a5(this), j || (j = cV, n.execute(this), aO(this), a5(this)), k = cV)
            };
            this.i = function() {
                if (k) {
                    if (j) {
                        k = cS,
                        aO(this),
                        k = cV
                    } else {
                        this[aU]()
                    }
                }
            };
            this.get = function(p) {
                bY[p] && this[aU]();
                return g[p] !== cX ? g[p] : i[p]
            };
            this.set = function(t, q, p) {
                bY[t] && this[aU]();
                p ? g[t] = q: i[t] = q;
                bY[t] && this.i()
            };
            this.n = function(p) {
                i[p] = this.b(p, 0) + 1
            };
            this.b = function(q, p) {
                var t = this.get(q);
                return t == cX || "" === t ? p: 1 * t
            };
            this.getString = function(q, p) {
                var t = this.get(q);
                return t == cX ? p: t + ""
            };
            this.ta = function() {
                if (h) {
                    var p = this[cC](s, ""),
                    q = this[cC](dr, "/");
                    eo(p, q) || (i[ds] = i[b4] && "" != p ? au(p) : 1, h = cS)
                }
            }
        };
        ax[cF].stopPropagation = function() {
            throw "aborted"
        };
        var br = function(h) {
            var g = this;
            this.j = 0;
            var i = h.get(cr);
            this.Ba = function() {
                0 < g.j && i && (g.j--, g.j || i())
            };
            this.ra = function() { ! g.j && i && cZ(i, 10)
            };
            h.set(b6, g, cV)
        };
        function af(h, g) {
            for (var g = g || [], j = 0; j < g[cG]; j++) {
                var i = g[j];
                if ("" + h == i || 0 == i[cN](h + ".")) {
                    return i
                }
            }
            return "-"
        }
        var d9 = function(h, g, m) {
            m = m ? "": h[cC](ds, "1");
            g = g[cE](".");
            if (6 !== g[cG] || et(g[0], m)) {
                return cS
            }
            var m = 1 * g[1],
            k = 1 * g[2],
            j = 1 * g[3],
            i = 1 * g[4],
            g = 1 * g[5];
            if (! (0 <= m && 0 < k && 0 < j && 0 < i && 0 <= g)) {
                return dD(110),
                cS
            }
            h.set(dp, m);
            h.set(dP, k);
            h.set(c3, j);
            h.set(cx, i);
            h.set(ch, g);
            return cV
        },
        dM = function(h) {
            var g = h.get(dp),
            m = h.get(dP),
            k = h.get(c3),
            j = h.get(cx),
            i = h.b(ch, 1);
            g == cX ? dD(113) : NaN == g && dD(114);
            0 <= g && 0 < m && 0 < k && 0 < j && 0 <= i || dD(115);
            return [h.b(ds, 1), g != cX ? g: "-", m || "-", k || "-", j || "-", i][dK](".")
        },
        c1 = function(g) {
            return [g.b(ds, 1), g.b(bk, 0), g.b(dn, 1), g.b(aY, 0)][dK](".")
        },
        cv = function(h, g, j) {
            var j = j ? "": h[cC](ds, "1"),
            i = g[cE](".");
            if (4 !== i[cG] || et(i[0], j)) {
                i = cU
            }
            h.set(bk, i ? 1 * i[1] : 0);
            h.set(dn, i ? 1 * i[2] : 10);
            h.set(aY, i ? 1 * i[3] : h.get(ar));
            return i != cU || !et(g, j)
        },
        cf = function(i, g) {
            var n = d1(i[cC](ah, "")),
            m = [],
            k = i.get(dq);
            if (!g && k) {
                for (var j = 0; j < k[cG]; j++) {
                    var h = k[j];
                    h && 1 == h[ck] && m[cP](j + "=" + d1(h[cL]) + "=" + d1(h[al]) + "=1")
                }
                0 < m[cG] && (n += "|" + m[dK]("^"))
            }
            return n ? i.b(ds, 1) + "." + n: cU
        },
        bU = function(h, g, m) {
            m = m ? "": h[cC](ds, "1");
            g = g[cE](".");
            if (2 > g[cG] || et(g[0], m)) {
                return cS
            }
            g = g[bx](1)[dK](".")[cE]("|");
            0 < g[cG] && h.set(ah, dB(g[0]));
            if (1 >= g[cG]) {
                return cV
            }
            for (var m = g[1][cE]( - 1 == g[1][cN](",") ? "^": ","), k = 0; k < m[cG]; k++) {
                var j = m[k][cE]("=");
                if (4 == j[cG]) {
                    var i = {};
                    bS(i, dB(j[1]));
                    i.value = dB(j[2]);
                    i.scope = 1;
                    h.get(dq)[j[0]] = i
                }
            }
            0 <= g[1][cN]("^") && dD(125);
            return cV
        },
        bi = function(h, g) {
            var i = bz(h, g);
            return i ? [h.b(ds, 1), h.b(aH, 0), h.b(ap, 1), h.b(o, 1), i][dK](".") : ""
        },
        bz = function(h) {
            function g(j, m) {
                if (!dE(h.get(j))) {
                    var k = h[cC](j, ""),
                    k = k[cE](" ")[dK]("%20"),
                    k = k[cE]("+")[dK]("%20");
                    i[cP](m + "=" + k)
                }
            }
            var i = [];
            g(dX, "utmcid");
            g(b3, "utmcsr");
            g(cK, "utmgclid");
            g(cn, "utmdclid");
            g(dj, "utmccn");
            g(bI, "utmcmd");
            g(dL, "utmctr");
            g(d4, "utmcct");
            return i[dK]("|")
        },
        aF = function(h, g, i) {
            i = i ? "": h[cC](ds, "1");
            g = g[cE](".");
            if (5 > g[cG] || et(g[0], i)) {
                return h.set(aH, cX),
                h.set(ap, cX),
                h.set(o, cX),
                h.set(dX, cX),
                h.set(dj, cX),
                h.set(b3, cX),
                h.set(bI, cX),
                h.set(dL, cX),
                h.set(d4, cX),
                h.set(cK, cX),
                h.set(cn, cX),
                cS
            }
            h.set(aH, 1 * g[1]);
            h.set(ap, 1 * g[2]);
            h.set(o, 1 * g[3]);
            aW(h, g[bx](4)[dK]("."));
            return cV
        },
        aW = function(h, g) {
            function k(m) {
                return (m = g[c](m + "=(.*?)(?:\\|utm|$)")) && 2 == m[cG] ? m[1] : cX
            }
            function j(m, n) {
                n && (n = i ? dB(n) : n[cE]("%20")[dK](" "), h.set(m, n))
            } - 1 == g[cN]("=") && (g = dB(g));
            var i = "2" == k("utmcvr");
            j(dX, k("utmcid"));
            j(dj, k("utmccn"));
            j(b3, k("utmcsr"));
            j(bI, k("utmcmd"));
            j(dL, k("utmctr"));
            j(d4, k("utmcct"));
            j(cK, k("utmgclid"));
            j(cn, k("utmdclid"))
        },
        et = function(h, g) {
            return g ? h != g: !/^\d+$/.test(h)
        };
        var bM = function() {
            this.s = []
        };
        bM[cF].add = function(h, g) {
            this.s[cP]({
                name: h,
                Fa: g
            })
        };
        bM[cF].execute = function(h) {
            try {
                for (var g = 0; g < this.s[cG]; g++) {
                    this.s[g].Fa.call(df, h)
                }
            } catch(i) {}
        };
        function an(g) {
            100 != g.get(ak) && g.get(dp) % 10000 >= 100 * g.get(ak) && g[cB]()
        }
        function f(g) {
            el() && g[cB]()
        }
        function dV(g) {
            "file:" == dx[cD].protocol && g[cB]()
        }
        function dg(g) {
            g.get(aK) || g.set(aK, dx.title, cV);
            g.get(a1) || g.set(a1, dx[cD].pathname + dx[cD].search, cV)
        }
        var cJ = new
        function() {
            var g = [];
            this.set = function(h) {
                g[h] = cV
            };
            this.Ga = function() {
                for (var h = [], i = 0; i < g[cG]; i++) {
                    g[i] && (h[cQ[aD](i / 6)] = h[cQ[aD](i / 6)] ^ 1 << i % 6)
                }
                for (i = 0; i < h[cG]; i++) {
                    h[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_" [cO](h[i] || 0)
                }
                return h[dK]("") + "~"
            }
        };
        function dD(g) {
            cJ.set(g)
        }
        var df = window,
        dx = document,
        el = function() {
            var g = df._gaUserPrefs;
            return g && g.ioo && g.ioo()
        },
        cm = function(h, g) {
            cZ(h, g)
        },
        c8 = function(h) {
            for (var g = [], k = dx.cookie[cE](";"), h = RegExp("^\\s*" + h + "=\\s*(.*?)\\s*$"), j = 0; j < k[cG]; j++) {
                var i = k[j][c](h);
                i && g[cP](i[1])
            }
            return g
        },
        c7 = function(i, g, p, n, k) {
            var j;
            j = el() ? cS: eo(n, p) ? cS: cV;
            if (j) {
                if (g && 0 <= df[bo].userAgent[cN]("Firefox")) {
                    g = g[bg](/\n|\r/g, " ");
                    j = 0;
                    for (var h = g[cG]; j < h; ++j) {
                        var m = g.charCodeAt(j) & 255;
                        if (10 == m || 13 == m) {
                            g = g[cA](0, j) + "?" + g[cA](j + 1)
                        }
                    }
                }
                g && 2000 < g[cG] && (g = g[cA](0, 2000), dD(69));
                i = i + "=" + g + "; path=" + p + "; ";
                k && (i += "expires=" + (new Date((new Date).getTime() + k)).toGMTString() + "; ");
                n && (i += "domain=" + n + ";");
                dx.cookie = i
            }
        };
        var b2,
        bH,
        dI = function() {
            if (!b2) {
                var i = {},
                g = df[bo],
                n = df.screen;
                i.H = n ? n.width + "x" + n.height: "-";
                i.G = n ? n.colorDepth + "-bit": "-";
                i.language = (g && (g.language || g.browserLanguage) || "-")[dH]();
                i.javaEnabled = g && g.javaEnabled() ? 1: 0;
                i.characterSet = dx.characterSet || dx.charset || "-";
                try {
                    var m = dx.documentElement,
                    k = dx.body,
                    j = k && k[dT] && k[b0],
                    g = [];
                    m && m[dT] && m[b0] && ("CSS1Compat" === dx.compatMode || !j) ? g = [m[dT], m[b0]] : j && (g = [k[dT], k[b0]]);
                    i.Ca = g[dK]("x")
                } catch(h) {
                    dD(135)
                }
                b2 = i
            }
        },
        d3 = function() {
            dI();
            for (var h = b2, g = df[bo], h = g.appName + g.version + h.language + g.platform + g.userAgent + h.javaEnabled + h.H + h.G + (dx.cookie ? dx.cookie: "") + (dx.referrer ? dx.referrer: ""), g = h[cG], i = df.history[cG]; 0 < i;) {
                h += i--^g++
            }
            return au(h)
        },
        dw = function(i) {
            dI();
            var g = b2;
            i.set(eq, g.H);
            i.set(d0, g.G);
            i.set(a7, g.language);
            i.set(aQ, g.characterSet);
            i.set(bO, g.javaEnabled);
            i.set(aI, g.Ca);
            if (i.get(bJ) && i.get(dN)) {
                if (! (g = bH)) {
                    var p,
                    n,
                    k;
                    n = "ShockwaveFlash";
                    if ((g = (g = df[bo]) ? g.plugins: cX) && 0 < g[cG]) {
                        for (p = 0; p < g[cG] && !k; p++) {
                            n = g[p],
                            -1 < n[cL][cN]("Shockwave Flash") && (k = n.description[cE]("Shockwave Flash ")[1])
                        }
                    } else {
                        n = n + "." + n;
                        try {
                            p = new ActiveXObject(n + ".7"),
                            k = p.GetVariable("$version")
                        } catch(j) {}
                        if (!k) {
                            try {
                                p = new ActiveXObject(n + ".6"),
                                k = "WIN 6,0,21,0",
                                p.AllowScriptAccess = "always",
                                k = p.GetVariable("$version")
                            } catch(h) {}
                        }
                        if (!k) {
                            try {
                                p = new ActiveXObject(n),
                                k = p.GetVariable("$version")
                            } catch(m) {}
                        }
                        k && (k = k[cE](" ")[1][cE](","), k = k[0] + "." + k[1] + " r" + k[2])
                    }
                    g = k ? k: "-"
                }
                bH = g;
                i.set(bt, bH)
            } else {
                i.set(bt, "-")
            }
        };
        var c6 = function() {
            dm(c6[cF], "push", c6[cF][cP], 5);
            dm(c6[cF], "_createAsyncTracker", c6[cF].Da, 33);
            dm(c6[cF], "_getAsyncTracker", c6[cF].Ea, 34);
            this.r = 0
        };
        c6[cF].Da = function(h, g) {
            return dv.l(h, g || "")
        };
        c6[cF].Ea = function(g) {
            return dv.p(g)
        };
        c6[cF].push = function(q) {
            0 < this.r && dD(105);
            this.r++;
            for (var p = arguments, n = 0, m = 0; m < p[cG]; m++) {
                try {
                    if ("function" === typeof p[m]) {
                        p[m]()
                    } else {
                        var k = "",
                        j = p[m][0],
                        i = j.lastIndexOf(".");
                        0 < i && (k = j[cA](0, i), j = j[cA](i + 1));
                        var h = "_gat" == k ? dv: "_gaq" == k ? cT: dv.p(k);
                        h[j].apply(h, p[m][bx](1))
                    }
                } catch(g) {
                    n++
                }
            }
            this.r--;
            return n
        };
        var bs = function() {
            function v(y, x, A, z) {
                cX == n[y] && (n[y] = {});
                cX == n[y][x] && (n[y][x] = []);
                n[y][x][A] = z
            }
            function u(y, x, z) {
                if (cX != n[y] && cX != n[y][x]) {
                    return n[y][x][z]
                }
            }
            function t(y, x) {
                if (cX != n[y] && cX != n[y][x]) {
                    n[y][x] = cX;
                    var A = cV,
                    z;
                    for (z = 0; z < m[cG]; z++) {
                        if (cX != n[y][m[z]]) {
                            A = cS;
                            break
                        }
                    }
                    A && (n[y] = cX)
                }
            }
            function q(J) {
                var I = "",
                G = cS,
                F,
                E;
                for (F = 0; F < m[cG]; F++) {
                    if (E = J[m[F]], cX != E) {
                        G && (I += m[F]);
                        for (var G = [], D = cX, z = cX, z = 0; z < E[cG]; z++) {
                            if (cX != E[z]) {
                                D = "";
                                z != h && cX == E[z - 1] && (D += z[cI]() + j);
                                for (var C = E[z], y = "", x = cX, H = cX, A = cX, x = 0; x < C[cG]; x++) {
                                    H = C[cO](x),
                                    A = i[H],
                                    y += cX != A ? A: H
                                }
                                D += y;
                                G[cP](D)
                            }
                        }
                        I += k + G[dK](w) + g;
                        G = cS
                    } else {
                        G = cV
                    }
                }
                return I
            }
            var p = this,
            n = [],
            m = ["k", "v"],
            k = "(",
            g = ")",
            w = "*",
            j = "!",
            i = {
                "'": "'0"
            };
            i[g] = "'1";
            i[w] = "'2";
            i[j] = "'3";
            var h = 1;
            p.wa = function(x) {
                return cX != n[x]
            };
            p.o = function() {
                for (var y = "", x = 0; x < n[cG]; x++) {
                    cX != n[x] && (y += x[cI]() + q(n[x]))
                }
                return y
            };
            p.va = function(y) {
                if (y == cX) {
                    return p.o()
                }
                for (var x = y.o(), z = 0; z < n[cG]; z++) {
                    cX != n[z] && !y.wa(z) && (x += z[cI]() + q(n[z]))
                }
                return x
            };
            p.e = function(x, z, y) {
                if (!cq(y)) {
                    return cS
                }
                v(x, "k", z, y);
                return cV
            };
            p.k = function(x, z, y) {
                if (!bN(y)) {
                    return cS
                }
                v(x, "v", z, y[cI]());
                return cV
            };
            p.getKey = function(x, y) {
                return u(x, "k", y)
            };
            p.C = function(x, y) {
                return u(x, "v", y)
            };
            p.A = function(x) {
                t(x, "k")
            };
            p.B = function(x) {
                t(x, "v")
            };
            dm(p, "_setKey", p.e, 89);
            dm(p, "_setValue", p.k, 90);
            dm(p, "_getKey", p.getKey, 87);
            dm(p, "_getValue", p.C, 88);
            dm(p, "_clearKey", p.A, 85);
            dm(p, "_clearValue", p.B, 86)
        };
        function cq(g) {
            return "string" == typeof g
        }
        function bN(g) {
            return "number" != typeof g && (cX == Number || !(g instanceof Number)) || cQ.round(g) != g || NaN == g || g == dC ? cS: cV
        }
        var a6 = function(h) {
            var g = df.gaGlobal;
            h && !g && (df.gaGlobal = g = {});
            return g
        },
        aP = function() {
            var g = a6(cV).hid;
            g == cU && (g = Y(), a6(cV).hid = g);
            return g
        },
        ay = function(h) {
            h.set(B, aP());
            var g = a6();
            if (g && g.dh == h.get(ds)) {
                var i = g.sid;
                i && ("0" == i && dD(112), h.set(cx, i), h.get(az) && h.set(c3, i));
                g = g.vid;
                h.get(az) && g && (g = g[cE]("."), 1 * g[1] || dD(112), h.set(dp, 1 * g[0]), h.set(dP, 1 * g[1]))
            }
        };
        var ag,
        eu = function(h, g, k) {
            var j = h[cC](s, ""),
            i = h[cC](dr, "/"),
            h = h.b(ep, 0);
            c7(g, k, i, j, h)
        },
        aO = function(h) {
            var g = h[cC](s, "");
            h.b(ds, 1);
            var j = h[cC](dr, "/");
            c7("__utma", dM(h), j, g, h.get(ep));
            c7("__utmb", c1(h), j, g, h.get(dZ));
            c7("__utmc", "" + h.b(ds, 1), j, g);
            var i = bi(h, cV);
            i ? c7("__utmz", i, j, g, h.get(dl)) : c7("__utmz", "", j, g, -1); (i = cf(h, cS)) ? c7("__utmv", i, j, g, h.get(ep)) : c7("__utmv", "", j, g, -1)
        },
        a5 = function(h) {
            var g = h.b(ds, 1);
            if (!d9(h, af(g, c8("__utma")))) {
                return h.set(ef, cV),
                cS
            }
            var i = !cv(h, af(g, c8("__utmb")));
            h.set(bB, i);
            aF(h, af(g, c8("__utmz")));
            bU(h, af(g, c8("__utmv")));
            ag = !i;
            return cV
        },
        ed = function(g) {
            ag || 0 < c8("__utmb")[cG] || (c7("__utmd", "1", g[cC](dr, "/"), g[cC](s, ""), 10000), 0 == c8("__utmd")[cG] && g[cB]())
        };
        var cw = function(g) {
            g.get(dp) == cX ? dO(g) : g.get(ef) && !g.get(bl) ? dO(g) : g.get(bB) && c2(g)
        },
        cg = function(g) {
            g.get(en) && !g.get(bW) && (c2(g), g.set(ap, g.get(ch)))
        },
        dO = function(h) {
            var g = h.get(ar);
            h.set(az, cV);
            h.set(dp, Y() ^ d3(h) & 2147483647);
            h.set(ah, "");
            h.set(dP, g);
            h.set(c3, g);
            h.set(cx, g);
            h.set(ch, 1);
            h.set(bW, cV);
            h.set(bk, 0);
            h.set(dn, 10);
            h.set(aY, g);
            h.set(dq, []);
            h.set(ef, cS);
            h.set(bB, cS)
        },
        c2 = function(g) {
            g.set(c3, g.get(cx));
            g.set(cx, g.get(ar));
            g.n(ch);
            g.set(bW, cV);
            g.set(bk, 0);
            g.set(dn, 10);
            g.set(aY, g.get(ar));
            g.set(bB, cS)
        };
        var bV = "daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:q,lycos:q,lycos:query,ask:q,netscape:query,cnn:query,about:terms,mamma:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,seznam:q,rakuten:qt,biglobe:q,goo.ne:MT,wp:szukaj,onet:qt,yam:k,kvasir:q,ozu:q,terra:query,rambler:query,conduit:q,babylon:q,search-results:q,avg:q,comcast:q,incredimail:q,startsiden:q".split(","),
        l = function(h) {
            if (h.get(d5) && !h.get(bl)) {
                for (var g = !dE(h.get(dX)) || !dE(h.get(b3)) || !dE(h.get(cK)) || !dE(h.get(cn)), k = {},
                j = 0; j < bA[cG]; j++) {
                    var i = bA[j];
                    k[i] = h.get(i)
                } (j = h.get(dy)) ? (dD(149), i = new aR, ev(i, j), j = i) : j = ai(dx[cD][bF], h.get(co)).d;
                if (! ("1" == a8(j.get(h.get(aC))) && g) && (j = bj(h, j) || aX(h), !j && !g && h.get(bW) && (aG(h, cX, "(direct)", cX, cX, "(direct)", "(none)", cX, cX), j = cV), j && (h.set(en, ao(h, k)), g = "(direct)" == h.get(b3) && "(direct)" == h.get(dj) && "(none)" == h.get(bI), h.get(en) || h.get(bW) && !g))) {
                    h.set(aH, h.get(ar)),
                    h.set(ap, h.get(ch)),
                    h.n(o)
                }
            }
        },
        bj = function(u, t) {
            function q(y, x) {
                var x = x || "-",
                w = a8(t.get(u.get(y)));
                return w && "-" != w ? dB(w) : x
            }
            var p = a8(t.get(u.get(cY))) || "-",
            n = a8(t.get(u.get(bR))) || "-",
            m = a8(t.get(u.get(b7))) || "-",
            k = a8(t.get("dclid")) || "-",
            j = q(cs, "(not set)"),
            g = q(bw, "(not set)"),
            v = q(bf),
            i = q(aT);
            if (dE(p) && dE(m) && dE(k) && dE(n)) {
                return cS
            }
            if (dE(v)) {
                var h = eh(u.get(at), u.get(dr)),
                h = ai(h, cV); (h = em(u, h)) && !dE(h[1] && !h[2]) && (v = h[1])
            }
            aG(u, p, n, m, k, j, g, v, i);
            return cV
        },
        aX = function(h) {
            var g = eh(h.get(at), h.get(dr)),
            k = ai(g, cV);
            if (! (g != cX && g != cU && "" != g && "0" != g && "-" != g && 0 <= g[cN]("://")) || k && -1 < k[ej][cN]("google") && k.d.contains("q") && "cse" == k.path) {
                return cS
            }
            if ((g = em(h, k)) && !g[2]) {
                return aG(h, cX, g[0], cX, cX, "(organic)", "organic", g[1], cX),
                cV
            }
            if (g) {
                return cS
            }
            if (h.get(bW)) {
                h: {
                    for (var g = h.get(cj), j = aA(k[ej]), i = 0; i < g[cG]; ++i) {
                        if ( - 1 < j[cN](g[i])) {
                            h = cS;
                            break h
                        }
                    }
                    aG(h, cX, j, cX, cX, "(referral)", "referral", cX, "/" + k.path);
                    h = cV
                }
            } else {
                h = cS
            }
            return h
        },
        em = function(i, g) {
            for (var n = i.get(c5), m = 0; m < n[cG]; ++m) {
                var k = n[m][cE](":");
                if ( - 1 < g[ej][cN](k[0][dH]())) {
                    var j = g.d.get(k[1]);
                    if (j && (j = dz(j), !j && -1 < g[ej][cN]("google.") && (j = "(not provided)"), !k[3] || -1 < g.url[cN](k[3]))) {
                        i: {
                            for (var n = j, m = i.get(cz), n = dB(n)[dH](), h = 0; h < m[cG]; ++h) {
                                if (n == m[h]) {
                                    n = cV;
                                    break i
                                }
                            }
                            n = cS
                        }
                        return [k[2] || k[0], j, n]
                    }
                }
            }
            return cU
        },
        aG = function(q, p, n, m, k, j, i, h, g) {
            q.set(dX, p);
            q.set(b3, n);
            q.set(cK, m);
            q.set(cn, k);
            q.set(dj, j);
            q.set(bI, i);
            q.set(dL, h);
            q.set(d4, g)
        },
        bA = [dj, dX, cK, cn, b3, bI, dL, d4],
        ao = function(i, g) {
            function n(p) {
                p = ("" + p)[cE]("+")[dK]("%20");
                return p = p[cE](" ")[dK]("%20")
            }
            function m(q) {
                var p = "" + (i.get(q) || ""),
                q = "" + (g[q] || "");
                return 0 < p[cG] && p == q
            }
            if (m(cK) || m(cn)) {
                return dD(131),
                cS
            }
            for (var k = 0; k < bA[cG]; k++) {
                var j = bA[k],
                h = g[j] || "-",
                j = i.get(j) || "-";
                if (n(h) != n(j)) {
                    return cV
                }
            }
            return cS
        };
        var bK = function(g) {
            dW(g, dx[cD][bF]) ? (g.set(bl, cV), dD(12)) : g.set(bl, cS)
        },
        dW = function(v, u) {
            if (!v.get(cM)) {
                return cS
            }
            var t = ai(u, v.get(co)),
            q = dz(t.d.get("__utma")),
            p = dz(t.d.get("__utmb")),
            n = dz(t.d.get("__utmc")),
            m = dz(t.d.get("__utmx")),
            k = dz(t.d.get("__utmz")),
            g = dz(t.d.get("__utmv")),
            t = dz(t.d.get("__utmk"));
            if (au("" + q + p + n + m + k + g) != t) {
                q = dB(q);
                p = dB(p);
                n = dB(n);
                m = dB(m);
                v: {
                    for (var n = q + p + n + m, w = 0; 3 > w; w++) {
                        for (var j = 0; 3 > j; j++) {
                            if (t == au(n + k + g)) {
                                dD(127);
                                t = [k, g];
                                break v
                            }
                            var i = k[bg](/ /g, "%20"),
                            h = g[bg](/ /g, "%20");
                            if (t == au(n + i + h)) {
                                dD(128);
                                t = [i, h];
                                break v
                            }
                            i = i[bg](/\+/g, "%20");
                            h = h[bg](/\+/g, "%20");
                            if (t == au(n + i + h)) {
                                dD(129);
                                t = [i, h];
                                break v
                            }
                            k = dB(k)
                        }
                        g = dB(g)
                    }
                    t = cX
                }
                if (!t) {
                    return cS
                }
                k = t[0];
                g = t[1]
            }
            if (!d9(v, q, cV)) {
                return cS
            }
            cv(v, p, cV);
            aF(v, k, cV);
            bU(v, g, cV);
            bp(v, m, cV);
            return cV
        },
        aM = function(q, p, n) {
            var m;
            m = dM(q) || "-";
            var k = c1(q) || "-",
            j = "" + q.b(ds, 1) || "-",
            i = a3(q) || "-",
            h = bi(q, cS) || "-",
            q = cf(q, cS) || "-",
            g = au("" + m + k + j + i + h + q),
            t = [];
            t[cP]("__utma=" + m);
            t[cP]("__utmb=" + k);
            t[cP]("__utmc=" + j);
            t[cP]("__utmx=" + i);
            t[cP]("__utmz=" + h);
            t[cP]("__utmv=" + q);
            t[cP]("__utmk=" + g);
            m = t[dK]("&");
            if (!m) {
                return p
            }
            k = p[cN]("#");
            if (n) {
                return 0 > k ? p + "#" + m: p + "&" + m
            }
            n = "";
            j = p[cN]("?");
            0 < k && (n = p[cA](k), p = p[cA](0, k));
            return 0 > j ? p + "?" + m + n: p + "&" + m + n
        };
        var av = "|",
        es = function(q, p, n, m, k, j, i, h, g) {
            var t = Z(q, p);
            t || (t = {},
            q.get(bZ)[cP](t));
            t.id_ = p;
            t.affiliation_ = n;
            t.total_ = m;
            t.tax_ = k;
            t.shipping_ = j;
            t.city_ = i;
            t.state_ = h;
            t.country_ = g;
            t.items_ = t.items_ || [];
            return t
        },
        d8 = function(q, p, n, m, k, j, i) {
            var q = Z(q, p) || es(q, p, "", 0, 0, 0, "", "", ""),
            h;
            q: {
                if (q && q.items_) {
                    h = q.items_;
                    for (var g = 0; g < h[cG]; g++) {
                        if (h[g].sku_ == n) {
                            h = h[g];
                            break q
                        }
                    }
                }
                h = cU
            }
            g = h || {};
            g.transId_ = p;
            g.sku_ = n;
            g.name_ = m;
            g.category_ = k;
            g.price_ = j;
            g.quantity_ = i;
            h || q.items_[cP](g);
            return g
        },
        Z = function(h, g) {
            for (var j = h.get(bZ), i = 0; i < j[cG]; i++) {
                if (j[i].id_ == g) {
                    return j[i]
                }
            }
            return cU
        };
        var dJ,
        c0 = function(h) {
            if (!dJ) {
                var g;
                g = dx[cD].hash;
                var j = df[cL],
                i = /^#?gaso=([^&]*)/;
                if (j = (g = (g = g && g[c](i) || j && j[c](i)) ? g[1] : dz(c8("GASO"))) && g[c](/^(?:\|([-0-9a-z.]{1,40})\|)?([-.\w]{10,1200})$/i)) {
                    if (eu(h, "GASO", "" + g), dv._gasoDomain = h.get(s), dv._gasoCPath = h.get(dr), h = j[1], g = "https://www.google.com/analytics/web/inpage/s/inpage.js?" + (h ? "prefix=" + h + "&": "") + Y()) {
                        h = dx.createElement("script"),
                        h.type = "text/javascript",
                        h.async = cV,
                        h.src = g,
                        h.id = "_gasojs",
                        b8(h, cX),
                        g = dx.getElementsByTagName("script")[0],
                        g.parentNode.insertBefore(h, g)
                    }
                }
                dJ = cV
            }
        };
        var bp = function(h, g, i) {
            i && (g = dB(g));
            i = h.b(ds, 1);
            g = g[cE]("."); ! (2 > g[cG]) && /^\d+$/.test(g[0]) && (g[0] = "" + i, eu(h, "__utmx", g[dK](".")))
        },
        a3 = function(h, g) {
            var i = af(h.get(ds), c8("__utmx"));
            "-" == i && (i = "");
            return g ? d1(i) : i
        };
        var bh = function(h, g) {
            var j = cQ.min(h.b(dQ, 0), 100);
            if (h.b(dp, 0) % 100 >= j) {
                return cS
            }
            j = cu() || b9();
            if (j == cX) {
                return cS
            }
            var i = j[0];
            if (i == cX || i == dC || isNaN(i)) {
                return cS
            }
            0 < i ? bT(j) ? g(by(j)) : g(by(j[bx](0, 1))) : bP(df, "load", 
            function() {
                bh(h, g)
            },
            cS);
            return cV
        },
        bT = function(h) {
            for (var g = 1; g < h[cG]; g++) {
                if (isNaN(h[g]) || h[g] == dC || 0 > h[g]) {
                    return cS
                }
            }
            return cV
        },
        by = function(h) {
            for (var g = new bs, i = 0; i < h[cG]; i++) {
                g.e(14, i + 1, (isNaN(h[i]) || 0 > h[i] ? 0: 5000 > h[i] ? 10 * cQ[aD](h[i] / 10) : 450000 > h[i] ? 100 * cQ[aD](h[i] / 100) : 450000) + ""),
                g.k(14, i + 1, h[i])
            }
            return g
        },
        cu = function() {
            var h = df.performance || df.webkitPerformance;
            if (h = h && h.timing) {
                var g = h.navigationStart;
                if (0 == g) {
                    dD(133)
                } else {
                    return [h.loadEventStart - g, h.domainLookupEnd - h.domainLookupStart, h.connectEnd - h.connectStart, h.responseStart - h.requestStart, h.responseEnd - h.responseStart, h.fetchStart - g]
                }
            }
        },
        b9 = function() {
            if (df.top == df) {
                var h = df.external,
                g = h && h.onloadT;
                h && !h.isValidLoadTime && (g = cX);
                2147483648 < g && (g = cX);
                0 < g && h.setPageReadyTime();
                return g == cX ? cX: [g]
            }
        };
        var dk = function(h, g, k) {
            function j(m) {
                return function(n) {
                    if ((n = n.get(aZ)[m]) && n[cG]) {
                        for (var q = r(i, m), p = 0; p < n[cG]; p++) {
                            n[p].call(i, q)
                        }
                    }
                }
            }
            var i = this;
            this.a = new ax;
            this.get = function(m) {
                return this.a.get(m)
            };
            this.set = function(n, m, p) {
                this.a.set(n, m, p)
            };
            this.set(bm, g || "UA-XXXXX-X");
            this.set(aJ, h || "");
            this.set(a0, k || "");
            this.set(ar, cQ.round((new Date).getTime() / 1000));
            this.set(dr, "/");
            this.set(ep, 63072000000);
            this.set(dl, 15768000000);
            this.set(dZ, 1800000);
            this.set(cM, cS);
            this.set(dS, 50);
            this.set(co, cS);
            this.set(b4, cV);
            this.set(bJ, cV);
            this.set(dN, cV);
            this.set(d5, cV);
            this.set(dA, cV);
            this.set(cs, "utm_campaign");
            this.set(cY, "utm_id");
            this.set(b7, "gclid");
            this.set(bR, "utm_source");
            this.set(bw, "utm_medium");
            this.set(bf, "utm_term");
            this.set(aT, "utm_content");
            this.set(aC, "utm_nooverride");
            this.set(ak, 100);
            this.set(dQ, 1);
            this.set(bX, cS);
            this.set(b, "/__utm.gif");
            this.set(ei, 1);
            this.set(bZ, []);
            this.set(dq, []);
            this.set(c5, bV[bx](0));
            this.set(cz, []);
            this.set(cj, []);
            this.t("auto");
            this.set(at, this.sa());
            this.set(aZ, {
                hit: [],
                load: []
            });
            this.a.g("0", bK);
            this.a.g("1", cw);
            this.a.g("2", l);
            this.a.g("3", cg);
            this.a.g("4", j("load"));
            this.a.g("5", c0);
            this.a.c("A", f);
            this.a.c("B", dV);
            this.a.c("C", cw);
            this.a.c("D", an);
            this.a.c("E", dY);
            this.a.c("F", aV);
            this.a.c("G", ed);
            this.a.c("H", dg);
            this.a.c("I", dw);
            this.a.c("J", ay);
            this.a.c("K", j("hit"));
            this.a.c("L", aE);
            this.a.c("M", am);
            0 === this.get(ar) && dD(111);
            this.a.J();
            this.w = cX
        };
        dF = dk[cF];
        dF.h = function() {
            var g = this.get(bE);
            g || (g = new bs, this.set(bE, g));
            return g
        };
        dF.ua = function(h) {
            for (var g in h) {
                var i = h[g];
                h.hasOwnProperty(g) && this.set(g, i, cV)
            }
        };
        dF.z = function(h) {
            if (this.get(bX)) {
                return cS
            }
            var g = this,
            i = bh(this.a, 
            function(j) {
                g.set(a1, h, cV);
                g.u(j)
            });
            this.set(bX, i);
            return i
        };
        dF.oa = function(g) {
            g && g != cX && -1 < (g.constructor + "")[cN]("String") ? (dD(13), this.set(a1, g, cV)) : "object" === typeof g && g !== cU && this.ua(g);
            this.w = g = this.get(a1);
            1 >= 1000 * cQ.random() && (dD(137), df.ga_disable_tracking !== cX && dD(147), df.ga_disabled !== cX && dD(148));
            this.a.f("page");
            this.z(g)
        };
        dF.v = function(h, g, k, j, i) {
            if ("" == h || !cq(h) || "" == g || !cq(g) || k != cX && !cq(k) || j != cX && !bN(j)) {
                return cS
            }
            this.set(bv, h, cV);
            this.set(a9, g, cV);
            this.set(aS, k, cV);
            this.set(aB, j, cV);
            this.set(bQ, !!i, cV);
            this.a.f("event");
            return cV
        };
        dF.pa = function(h, g, j, i) {
            if (!h || !g) {
                return cS
            }
            this.set(aj, h, cV);
            this.set(ew, g, cV);
            this.set(eg, j || dx[cD][bF], cV);
            i && this.set(a1, i, cV);
            this.a.f("social");
            return cV
        };
        dF.na = function() {
            this.set(dQ, 10);
            this.z(this.w)
        };
        dF.qa = function() {
            this.a.f("trans")
        };
        dF.u = function(g) {
            this.set(bn, g, cV);
            this.a.f("event")
        };
        dF.W = function(h) {
            this.m();
            var g = this;
            return {
                _trackEvent: function(k, j, i) {
                    dD(91);
                    g.v(h, k, j, i)
                }
            }
        };
        dF.Z = function(g) {
            return this.get(g)
        };
        dF.ha = function(h, g) {
            if (h) {
                if (h != cX && -1 < (h.constructor + "")[cN]("String")) {
                    this.set(h, g)
                } else {
                    if ("object" == typeof h) {
                        for (var i in h) {
                            h.hasOwnProperty(i) && this.set(i, h[i])
                        }
                    }
                }
            }
        };
        dF.addEventListener = function(h, g) {
            var i = this.get(aZ)[h];
            i && i[cP](g)
        };
        dF.removeEventListener = function(h, g) {
            for (var j = this.get(aZ)[h], i = 0; j && i < j[cG]; i++) {
                if (j[i] == g) {
                    j.splice(i, 1);
                    break
                }
            }
        };
        dF.aa = function() {
            return "5.2.5"
        };
        dF.t = function(g) {
            this.get(b4);
            g = "auto" == g ? aA(dx.domain) : !g || "-" == g || "none" == g ? "": g[dH]();
            this.set(s, g)
        };
        dF.fa = function(g) {
            this.set(b4, !!g)
        };
        dF.$ = function(h, g) {
            return aM(this.a, h, g)
        };
        dF.link = function(h, g) {
            if (this.a.get(cM) && h) {
                var i = aM(this.a, h, g);
                dx[cD].href = i
            }
        };
        dF.ea = function(h, g) {
            this.a.get(cM) && h && h.action && (h.action = aM(this.a, h.action, g))
        };
        dF.ia = function() {
            this.m();
            var h = this.a,
            g = dx.getElementById ? dx.getElementById("utmtrans") : dx.utmform && dx.utmform.utmtrans ? dx.utmform.utmtrans: cU;
            if (g && g[al]) {
                h.set(bZ, []);
                for (var g = g[al][cE]("UTM:"), k = 0; k < g[cG]; k++) {
                    g[k] = aL(g[k]);
                    for (var j = g[k][cE](av), i = 0; i < j[cG]; i++) {
                        j[i] = aL(j[i])
                    }
                    "T" == j[0] ? es(h, j[1], j[2], j[3], j[4], j[5], j[6], j[7], j[8]) : "I" == j[0] && d8(h, j[1], j[2], j[3], j[4], j[5], j[6])
                }
            }
        };
        dF.P = function(i, g, p, n, k, j, h, m) {
            return es(this.a, i, g, p, n, k, j, h, m)
        };
        dF.N = function(h, g, m, k, j, i) {
            return d8(this.a, h, g, m, k, j, i)
        };
        dF.ja = function(g) {
            av = g || "|"
        };
        dF.ga = function(h, g, m, k) {
            var j = this.a;
            if (0 >= h || h > j.get(dS) || !g || !m || 128 < g[cG] + m[cG]) {
                h = cS
            } else {
                1 != k && 2 != k && (k = 3);
                var i = {};
                bS(i, g);
                i.value = m;
                i.scope = k;
                j.get(dq)[h] = i;
                h = cV
            }
            h && this.a.i();
            return h
        };
        dF.Y = function(g) {
            this.a.get(dq)[g] = cX;
            this.a.i()
        };
        dF.ba = function(g) {
            return (g = this.a.get(dq)[g]) && 1 == g[ck] ? g[al] : cX
        };
        dF.la = function(h, g, i) {
            this.h().e(h, g, i)
        };
        dF.ma = function(h, g, i) {
            this.h().k(h, g, i)
        };
        dF.ca = function(h, g) {
            return this.h().getKey(h, g)
        };
        dF.da = function(h, g) {
            return this.h().C(h, g)
        };
        dF.T = function(g) {
            this.h().A(g)
        };
        dF.U = function(g) {
            this.h().B(g)
        };
        dF.X = function() {
            return new bs
        };
        dF.L = function(g) {
            g && this.get(cz)[cP](g[dH]())
        };
        dF.Q = function() {
            this.set(cz, [])
        };
        dF.M = function(g) {
            g && this.get(cj)[cP](g[dH]())
        };
        dF.R = function() {
            this.set(cj, [])
        };
        dF.O = function(h, g, k, j, i) {
            if (h && g) {
                h = [h, g[dH]()][dK](":");
                if (j || i) {
                    h = [h, j, i][dK](":")
                }
                j = this.get(c5);
                j.splice(k ? 0: j[cG], 0, h)
            }
        };
        dF.S = function() {
            this.set(c5, [])
        };
        dF.V = function(h) {
            this.a[aU]();
            var g = this.get(dr),
            i = a3(this.a);
            this.set(dr, h);
            this.a.i();
            bp(this.a, i);
            this.set(dr, g)
        };
        dF.K = function(h) {
            h = "" + h;
            if (h[c](/^[A-Za-z0-9]{1,5}$/)) {
                var g = this.get(bC) || [];
                g[cP](h);
                this.set(bC, g)
            }
        };
        dF.sa = function() {
            var h = "";
            try {
                var g = ai(dx[cD][bF], cS),
                h = ct(a8(g.d.get("utm_referrer"))) || ""
            } catch(i) {
                dD(146)
            }
            return h || dx.referrer
        };
        dF.m = function() {
            this.a[aU]()
        };
        dF.ka = function(g) {
            g && "" != g && (this.set(ah, g), this.a.f("var"))
        };
        var aV = function(h) {
            "trans" !== h.get(cW) && 500 <= h.b(bk, 0) && h[cB]();
            if ("event" === h.get(cW)) {
                var g = (new Date).getTime(),
                j = h.b(aY, 0),
                i = h.b(cx, 0),
                j = cQ[aD](1 * ((g - (j != i ? j: 1000 * j)) / 1000));
                0 < j && (h.set(aY, g), h.set(dn, cQ.min(10, h.b(dn, 0) + j)));
                0 >= h.b(dn, 0) && h[cB]()
            }
        },
        am = function(g) {
            "event" === g.get(cW) && g.set(dn, cQ.max(0, g.b(dn, 10) - 1))
        };
        var d = function() {
            var g = [];
            this.add = function(h, j, i) {
                i && (j = d1("" + j));
                g[cP](h + "=" + j)
            };
            this.toString = function() {
                return g[dK]("&")
            }
        },
        ek = function(h, g) { (g || 2 != h.get(ei)) && h.n(bk)
        },
        dU = function(h, g) {
            g.add("utmwv", "5.2.5");
            g.add("utms", h.get(bk));
            g.add("utmn", Y());
            var i = dx[cD].hostname;
            dE(i) || g.add("utmhn", i, cV);
            i = h.get(ak);
            100 != i && g.add("utmsp", i, cV)
        },
        cH = function(h, g) {
            g.add("utmac", aL(h.get(bm)));
            h.get(bQ) && g.add("utmni", 1);
            var i = h.get(bC);
            i && 0 < i[cG] && g.add("utmdid", i[dK]("."));
            c9(h, g);
            dv.q && g.add("aip", 1);
            g.add("utmu", cJ.Ga())
        },
        c9 = function(h, g) {
            function j(m, k) {
                k && i[cP](m + "=" + k + ";")
            }
            var i = [];
            j("__utma", dM(h));
            j("__utmz", bi(h, cS));
            j("__utmv", cf(h, cV));
            j("__utmx", a3(h));
            g.add("utmcc", i[dK]("+"), cV)
        },
        cl = function(h, g) {
            h.get(bJ) && (g.add("utmcs", h.get(aQ), cV), g.add("utmsr", h.get(eq)), h.get(aI) && g.add("utmvp", h.get(aI)), g.add("utmsc", h.get(d0)), g.add("utmul", h.get(a7)), g.add("utmje", h.get(bO)), g.add("utmfl", h.get(bt), cV))
        },
        b1 = function(h, g) {
            h.get(dA) && h.get(aK) && g.add("utmdt", h.get(aK), cV);
            g.add("utmhid", h.get(B));
            g.add("utmr", eh(h.get(at), h.get(dr)), cV);
            g.add("utmp", d1(h.get(a1), cV), cV)
        },
        bG = function(i, g) {
            for (var n = i.get(bE), m = i.get(bn), k = i.get(dq) || [], j = 0; j < k[cG]; j++) {
                var h = k[j];
                h && (n || (n = new bs), n.e(8, j, h[cL]), n.e(9, j, h[al]), 3 != h[ck] && n.e(11, j, "" + h[ck]))
            } ! dE(i.get(bv)) && !dE(i.get(a9), cV) && (n || (n = new bs), n.e(5, 1, i.get(bv)), n.e(5, 2, i.get(a9)), k = i.get(aS), k != cX && n.e(5, 3, k), k = i.get(aB), k != cX && n.k(5, 1, k));
            n ? g.add("utme", n.va(m), cV) : m && g.add("utme", m.o(), cV)
        },
        dG = function(h, g, j) {
            var i = new d;
            ek(h, j);
            dU(h, i);
            i.add("utmt", "tran");
            i.add("utmtid", g.id_, cV);
            i.add("utmtst", g.affiliation_, cV);
            i.add("utmtto", g.total_, cV);
            i.add("utmttx", g.tax_, cV);
            i.add("utmtsp", g.shipping_, cV);
            i.add("utmtci", g.city_, cV);
            i.add("utmtrg", g.state_, cV);
            i.add("utmtco", g.country_, cV); ! j && cH(h, i);
            return i[cI]()
        },
        d2 = function(h, g, j) {
            var i = new d;
            ek(h, j);
            dU(h, i);
            i.add("utmt", "item");
            i.add("utmtid", g.transId_, cV);
            i.add("utmipc", g.sku_, cV);
            i.add("utmipn", g.name_, cV);
            i.add("utmiva", g.category_, cV);
            i.add("utmipr", g.price_, cV);
            i.add("utmiqt", g.quantity_, cV); ! j && cH(h, i);
            return i[cI]()
        },
        dt = function(i, g) {
            var n = i.get(cW);
            if ("page" == n) {
                n = new d,
                ek(i, g),
                dU(i, n),
                bG(i, n),
                cl(i, n),
                b1(i, n),
                g || cH(i, n),
                n = [n[cI]()]
            } else {
                if ("event" == n) {
                    n = new d,
                    ek(i, g),
                    dU(i, n),
                    n.add("utmt", "event"),
                    bG(i, n),
                    cl(i, n),
                    b1(i, n),
                    !g && cH(i, n),
                    n = [n[cI]()]
                } else {
                    if ("var" == n) {
                        n = new d,
                        ek(i, g),
                        dU(i, n),
                        n.add("utmt", "var"),
                        !g && cH(i, n),
                        n = [n[cI]()]
                    } else {
                        if ("trans" == n) {
                            for (var n = [], m = i.get(bZ), k = 0; k < m[cG]; ++k) {
                                n[cP](dG(i, m[k], g));
                                for (var j = m[k].items_, h = 0; h < j[cG]; ++h) {
                                    n[cP](d2(i, j[h], g))
                                }
                            }
                        } else {
                            "social" == n ? g ? n = [] : (n = new d, ek(i, g), dU(i, n), n.add("utmt", "social"), n.add("utmsn", i.get(aj), cV), n.add("utmsa", i.get(ew), cV), n.add("utmsid", i.get(eg), cV), bG(i, n), cl(i, n), b1(i, n), cH(i, n), n = [n[cI]()]) : n = []
                        }
                    }
                }
            }
            return n
        },
        aE = function(q) {
            var p,
            n = q.get(ei),
            m = q.get(b6),
            k = m && m.Ba,
            j = 0;
            if (0 == n || 2 == n) {
                var i = q.get(b) + "?";
                p = dt(q, cV);
                for (var h = 0, g = p[cG]; h < g; h++) {
                    cy(p[h], k, i, cV),
                    j++
                }
            }
            if (1 == n || 2 == n) {
                p = dt(q);
                h = 0;
                for (g = p[cG]; h < g; h++) {
                    try {
                        cy(p[h], k),
                        j++
                    } catch(t) {
                        t && c4(t[cL], cX, t.message)
                    }
                }
            }
            m && (m.j = j)
        };
        var cR = "https:" == dx[cD].protocol ? "https://ssl.google-analytics.com": "http://www.google-analytics.com",
        cp = function(g) {
            bS(this, "len");
            this.message = g + "-8192"
        },
        b5 = function(g) {
            bS(this, "ff2post");
            this.message = g + "-2036"
        },
        cy = function(h, g, j, i) {
            g = g || er;
            if (i || 2036 >= h[cG]) {
                bL(h, g, j)
            } else {
                if (8192 >= h[cG]) {
                    if (0 <= df[bo].userAgent[cN]("Firefox") && ![].reduce) {
                        throw new b5(h[cG])
                    }
                    bq(h, g) || a4(h, g)
                } else {
                    throw new cp(h[cG])
                }
            }
        },
        bL = function(h, g, j) {
            var j = j || cR + "/__utm.gif?",
            i = new Image(1, 1);
            i.src = j + h;
            b8(i, 
            function() {
                b8(i, cU);
                i.onerror = cU;
                g()
            });
            i.onerror = function() {
                b8(i, cU);
                i.onerror = cU;
                g()
            }
        },
        bq = function(h, g) {
            var k,
            j = cR + "/p/__utm.gif",
            i = df.XDomainRequest;
            if (i) {
                k = new i,
                k.open("POST", j)
            } else {
                if (i = df.XMLHttpRequest) {
                    i = new i,
                    "withCredentials" in i && (k = i, k.open("POST", j, cV), k.setRequestHeader("Content-Type", "text/plain"))
                }
            }
            if (k) {
                return k.onreadystatechange = function() {
                    4 == k.readyState && (g(), k = cU)
                },
                k.send(h),
                cV
            }
        },
        a4 = function(q, p) {
            if (dx.body) {
                q = d6(q);
                try {
                    var n = dx.createElement('<iframe name="' + q + '"></iframe>')
                } catch(m) {
                    n = dx.createElement("iframe"),
                    bS(n, q)
                }
                n.height = "0";
                n.width = "0";
                n.style.display = "none";
                n.style.visibility = "hidden";
                var k = dx[cD],
                k = cR + "/u/post_iframe.html#" + d6(k.protocol + "//" + k[ej] + "/favicon.ico"),
                j = function() {
                    n.src = "";
                    n.parentNode && n.parentNode.removeChild(n)
                };
                bP(df, "beforeunload", j);
                var i = cS,
                h = 0,
                g = function() {
                    if (!i) {
                        try {
                            if (9 < h || n.contentWindow[cD][ej] == dx[cD][ej]) {
                                i = cV;
                                j();
                                bu(df, "beforeunload", j);
                                p();
                                return
                            }
                        } catch(t) {}
                        h++;
                        cZ(g, 200)
                    }
                };
                bP(n, "load", g);
                dx.body.appendChild(n);
                n.src = k
            } else {
                cm(function() {
                    a4(q, p)
                },
                100)
            }
        };
        var d7 = function() {
            this.q = cS;
            this.D = {};
            this.F = [];
            this.xa = 0;
            this._gasoCPath = this._gasoDomain = cX;
            dm(d7[cF], "_createTracker", d7[cF].l, 55);
            dm(d7[cF], "_getTracker", d7[cF].za, 0);
            dm(d7[cF], "_getTrackerByName", d7[cF].p, 51);
            dm(d7[cF], "_getTrackers", d7[cF].Aa, 130);
            dm(d7[cF], "_anonymizeIp", d7[cF].ya, 16);
            aq()
        };
        dF = d7[cF];
        dF.za = function(h, g) {
            return this.l(h, cX, g)
        };
        dF.l = function(h, g, i) {
            g && dD(23);
            i && dD(67);
            g == cX && (g = "~" + dv.xa++);
            h = new dk(g, h, i);
            dv.D[g] = h;
            dv.F[cP](h);
            return h
        };
        dF.p = function(g) {
            g = g || "";
            return dv.D[g] || dv.l(cX, g)
        };
        dF.Aa = function() {
            return dv.F[bx](0)
        };
        dF.ya = function() {
            this.q = cV
        };
        var aN = function(g) {
            if ("prerender" == dx.webkitVisibilityState) {
                return cS
            }
            g();
            return cV
        };
        var dv = new d7;
        var aw = df._gat;
        aw && "function" == typeof aw._getTracker ? dv = aw: df._gat = dv;
        var cT = new c6; (function(h) {
            if (!aN(h)) {
                dD(123);
                var g = cS,
                i = function() { ! g && aN(h) && (g = cV, bu(dx, "webkitvisibilitychange", i))
                };
                bP(dx, "webkitvisibilitychange", i)
            }
        })(function() {
            var h = df._gaq,
            g = cS;
            if (h && "function" == typeof h[cP] && (g = "[object Array]" == Object[cF][cI].call(Object(h)), !g)) {
                cT = h;
                return
            }
            df._gaq = cT;
            g && cT[cP].apply(cT, h)
        })
    })()
});
function main() {
    var a = new Jobs();
    a.add("login2");
    a.add("suda");
    a.add("loginScroll2");
    a.add("userBehaviors");
    a.add("heart");
    a.add("ga", 3);
    a.start()
};