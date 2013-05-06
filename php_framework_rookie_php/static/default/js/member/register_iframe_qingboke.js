if (!$CONFIG) {
	$CONFIG = {}
}
var scope = $CONFIG;
Function.prototype.bind2 = function(b) {
	var a = this;
	return function() {
		return a.apply(b, arguments)
	}
};
scope.$VERSION = "t35";
scope.$BASEIMG = "http://img.t.sinajs.cn/" + scope.$VERSION + "/";
scope.$BASECSS = "http://img.t.sinajs.cn/" + scope.$VERSION + "/";
scope.$BASEJS = "http://js.t.sinajs.cn/" + scope.$VERSION + "/";
scope.$BASESTATIC = "http://js.t.sinajs.cn/" + scope.$VERSION + "/";
scope._ua = navigator.userAgent.toLowerCase();
scope.$IE = /msie/.test(scope._ua);
scope.$OPERA = /opera/.test(scope._ua);
scope.$MOZ = /gecko/.test(scope._ua);
scope.$IE5 = /msie 5 /.test(scope._ua);
scope.$IE55 = /msie 5.5/.test(scope._ua);
scope.$IE6 = /msie 6/.test(scope._ua);
scope.$IE7 = /msie 7/.test(scope._ua);
scope.$SAFARI = /safari/.test(scope._ua);
scope.$winXP = /windows nt 5.1/.test(scope._ua);
scope.$winVista = /windows nt 6.0/.test(scope._ua);
var $IE = scope.$IE,
$MOZ = scope.$MOZ,
$IE6 = scope.$IE6;
function $import(a) {}
var Boot = {};
Boot.addDOMLoadEvent = function(a) {
	if (!window.__load_events) {
		var b = function() {
			if (arguments.callee.done) {
				return
			}
			arguments.callee.done = true;
			if (window.__load_timer) {
				clearInterval(window.__load_timer);
				window.__load_timer = null
			}
			for (var f = 0; f < window.__load_events.length; f++) {
				window.__load_events[f]()
			}
			window.__load_events = null
		};
		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", b, false)
		}
		if (/WebKit/i.test(navigator.userAgent)) {
			window.__load_timer = setInterval(function() {
				if (/loaded|complete/.test(document.readyState)) {
					b()
				}
			},
			10)
		}
		if (window.ActiveXObject) {
			window.__load_timer = setInterval(function() {
				try {
					document.body.doScroll("left");
					b()
				} catch(f) {}
			},
			10)
		}
		window.onload = b;
		window.__load_events = []
	}
	window.__load_events.push(a)
};
Boot.getJsVersion = function() {
	var a = false;
	if ($CONFIG) {
		a = $CONFIG.js ? $CONFIG.js: ""
	}
	if (a) {
		return "?v=" + a
	} else {
		return ""
	}
};
try {
	Boot.addDOMLoadEvent(main)
} catch(e) {}
var $Debug = (function() {
	var a = [];
	function f(h, n, g) {
		var j;
		var m = h != null ? h: "";
		var k = {
			color: null,
			bgcolor: null,
			html: null
		};
		var l = g != null ? g: "log";
		n = n != null ? n: {};
		for (j in k) {
			if (n[j] != null) {
				k[j] = n[j]
			}
		}
		a.push({
			label: m,
			cmd: l,
			opts: k,
			time: new Date()
		})
	}
	function b(g, h) {
		f(g, h, "log")
	}
	b.fatal = function(g, h) {
		f(g, h, "fatal")
	};
	b.error = function(g, h) {
		f(g, h, "error")
	};
	b.warning = function(g, h) {
		f(g, h, "warning")
	};
	b.info = function(g, h) {
		f(g, h, "info")
	};
	b.log = function(g, h) {
		f(g, h, "log")
	};
	b.clear = function() {
		a = []
	};
	b.contentList = a;
	return b
})();
if (typeof Sina == "undefined") {
	Sina = {}
}
Sina.pkg = function(f) {
	if (!f || !f.length) {
		return null
	}
	var g = f.split(".");
	var b = Sina;
	for (var a = (g[0] == "Sina") ? 1: 0; a < g.length; ++a) {
		b[g[a]] = b[g[a]] || {};
		b = b[g[a]]
	}
	return b
};
function $E(b) {
	var a = typeof b == "string" ? document.getElementById(b) : b;
	if (a != null) {
		return a
	} else {}
	return null
}
function $C(a) {
	return document.createElement(a)
}
try {
	document.execCommand("BackgroundImageCache", false, true)
} catch(e) {} (function() {
	var k = "trace";
	var j = [];
	var h = new Date().valueOf();
	var g = new Date().valueOf();
	var a;
	var f = function(l, n, m) {
		n = n || {};
		if (typeof n == "string") {
			n = {
				color: n
			};
			if (typeof m != "undefined" && typeof m == "string") {
				n.bgColor = m
			}
		}
		j[j.length] = [l, n]
	};
	var b = function(l) {
		f(l, {
			color: "#F00"
		})
	};
	f.error = b;
	f.traceList = j;
	f.toString = function() {
		return "Trace调试已关闭"
	};
	window[k] = f;
	window.traceError = b
})();
Sina.pkg("Core");
if (typeof Core == "undefined") {
	Core = Sina.Core
}
Sina.pkg("Core.Array");
Core.Array.each = function(f, b) {
	var h = [];
	for (var g = 0; g < f.length; g++) {
		var a = b(f[g], g);
		if (a !== null) {
			h.push(a)
		}
	}
	return h
};
function Jobs() {
	this._jobTable = []
}
Jobs.prototype = {
	_registedJobTable: {},
	initialize: function() {},
	_registJob: function(b, a) {
		this._registedJobTable[b] = a
	},
	add: function(a) {
		this._jobTable.push(a)
	},
	start: function() {
		var a = this._jobTable;
		var f = this._registedJobTable;
		var j = 0;
		var h = this._jobTable.length;
		var b = function() {
			return new Date().valueOf()
		};
		var g = window.setInterval(function() {
			if (j >= h) {
				clearInterval(g);
				return
			}
			var p = a[j];
			var n = f[p];
			j++;
			if (typeof n == "undefined") {
				$Debug.error("<b>[" + p + "# is undefiend!!!</b>", {
					html: true
				});
				return
			}
			var m = true;
			var l = b();
			try {
				n.call()
			} catch(o) {
				$Debug.error("<b>[" + p + "] failed!!!</b>", {
					html: true
				});
				m = false
			} finally {
				if (m) {
					var k = b();
					$Debug.info("[" + p + "] done in " + (k - l) + "ms.")
				}
			}
		},
		10)
	},
	call: function(b, a) {
		if (typeof this._registedJobTable[b] != "undefined") {
			this._registedJobTable[b].apply(this, a)
		} else {
			$Debug("#" + b + "# is undefined!!!", {
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
		function(f, g) {
			a[g] = f
		});
		a.shift()
	}
	Jobs.prototype.call(b, a)
};
if (typeof App == "undefined") {
	var App = {}
}
Core.Array.foreach = function(g, f) {
	if (g == null && g.constructor != Array) {
		return []
	}
	var h = 0,
	b = g.length,
	j = [];
	while (h < b) {
		var a = f(g[h], h);
		if (a !== null) {
			j[j.length] = a
		}
		h++
	}
	return j
};
Core.Array.findit = function(a, f) {
	var b = -1;
	Core.Array.foreach(a,
	function(h, g) {
		if (f == h) {
			b = g
		}
	});
	return b
};
Core.Array.uniq = function(f) {
	var b = [];
	for (var g = 0; g < f.length; g++) {
		var a = f[g];
		if (Core.Array.findit(b, a) == -1) {
			b.push(a)
		}
	}
	return b
};
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
App.nameValue = function(m, b) {
	var l = m.getAttribute("name");
	var g = m.getAttribute("type");
	var k = m.tagName;
	var n = {
		name: l,
		value: ""
	};
	var h = function(o) {
		if (o === false) {
			n = false;
			return false
		}
		if (!n.value) {
			n.value = Core.String.trim(o || "")
		} else {
			n.value = [Core.String.trim(o || "")].concat(n.value)
		}
	};
	if (!m.disabled && l) {
		switch (k) {
		case "INPUT":
			if (g == "radio" || g == "checkbox") {
				if (m.checked) {
					h(m.value)
				} else {
					h(false)
				}
			} else {
				if (g == "reset" || g == "submit" || g == "image") {
					h(false)
				} else {
					h(b ? (m.value || false) : m.value)
				}
			}
			break;
		case "SELECT":
			if (m.multiple) {
				var a = m.options;
				for (var f = 0, j = a.length; f < j; f++) {
					if (a[f].selected) {
						h(a[f].value)
					}
				}
			} else {
				h(m.value)
			}
			break;
		case "TEXTAREA":
			h(b ? (m.value || m.getAttribute("value") || false) : (m.value || m.getAttribute("value")));
			break;
		case "BUTTON":
		default:
			h(m.value || m.getAttribute("value") || m.innerHTML || false)
		}
	} else {
		h(false)
	}
	return n
};
App.htmlToJson = function(l, b, g) {
	var o = {};
	b = Core.Array.uniq(b || ["INPUT", "TEXTAREA", "BUTTON", "SELECT"]);
	if (!l || !b) {
		return false
	}
	var a = App.nameValue;
	for (var h = 0, k = b.length; h < k; h++) {
		var n = l.getElementsByTagName(b[h]);
		for (var f = 0, m = n.length; f < m; f++) {
			var p = a(n[f], g);
			if (!p) {
				continue
			}
			if (o[p.name]) {
				if (o[p.name] instanceof Array) {
					o[p.name] = o[p.name].concat(p.value)
				} else {
					o[p.name] = [o[p.name]].concat(p.value)
				}
			} else {
				o[p.name] = p.value
			}
		}
	}
	return o
};
App.jsonToQuery = function(j, f) {
	var l = [];
	var h = function(k) {
		k = Core.String.trim(k.toString());
		if (f) {
			return encodeURIComponent(k)
		} else {
			return k
		}
	};
	if (typeof j == "object") {
		for (var b in j) {
			if (j[b] instanceof Array) {
				for (var g = 0, a = j[b].length; g < a; g++) {
					l.push(b + "=" + h(j[b][g]))
				}
			} else {
				l.push(b + "=" + h(j[b]))
			}
		}
	}
	if (l.length) {
		return l.join("&")
	} else {
		return ""
	}
}; (function(a) {
	a.includeJson = function(g, f) {
		for (var b in g) {
			if (typeof g[b] == Object) {
				if (g[b] instanceof Array) {
					if (f[b] === undefined || f[b].join("|") != g[b].join("|")) {
						return false
					}
				} else {
					if (typeof f[b] == Object) {
						return argument.callee(g[b], f[b])
					} else {
						return false
					}
				}
			} else {
				if (f[b] === undefined || f[b] != g[b]) {
					return false
				}
			}
		}
		return true
	};
	a.compareJson = function(f, b) {
		if (a.includeJson(f, b) && a.includeJson(b, f)) {
			return true
		} else {
			return false
		}
	}
})(App); 
(function(b) {
	b.checkEml = function(g) {
		if (!/^[0-9a-z_][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}\.){1,4}[a-z]{2,4}$/.test(g)) {
			return false
		} else {
			if (g && g != "" && (g.indexOf("@") != -1)) {
				var f = g.indexOf("@");
				var h = g.substring(0, f);
				if (h.length > 64 || g.length > 256) {
					return false
				} else {
					return true
				}
			}
		}
		return false
	};
	b.checkEmpty = function(f) {
		if (!f) {
			return false
		}
		if (! (f instanceof String)) {
			f = f.toString()
		}
		if ((Core.String.trim(f)).length) {
			return true
		} else {
			return false
		}
	};
	b.checkRealName = function(f) {
		if (new RegExp("^[\u4e00-\u9fa5]{2,6}$").test(f)) {
			return true
		} else {
			if (new RegExp("^[a-z]{2,20}$").test(f)) {
				return true
			} else {
				if (new RegExp("^[a-z\u4e00-\u9fa5]{2,6}$")) {
					return true
				} else {
					return false
				}
			}
		}
	};
	var a = function(f) {
		return function(g) {
			if (new RegExp(f).test(g)) {
				return true
			} else {
				return false
			}
		}
	};
	b.checkQQNum = function(f) {
		if (new RegExp("^[1-9][0-9]{4,11}$").test(f)) {
			return true
		} else {
			if (b.checkEml(f)) {
				return true
			} else {
				return false
			}
		}
	};
	b.checkUCNum = function(f) {
		if (new RegExp("^[1-9][0-9]{4,9}$").test(f)) {
			return true
		} else {
			return false
		}
	};
	b.checkMobile = a("^1(\\d{10})+$");
	b.checkTrName = a("^[\u4e00-\u9fa5]{2,6}$");
	b.checkNickSp = a("^[0-9a-zA-Z\u4e00-\u9fa5_]*$");
	b.checkNickSp2 = a("^[0-9a-zA-Z\u4e00-\u9fa5_-]*$");
	b.checkTrueNm = a("^[a-zA-Z·s.\u4e00-\u9fa5]*$");
	b.checkSkype1 = a("^[0-9a-zA-Z](-|w){3}(-|w)*$");
	b.checkSkype2 = a("[!#@%&/'\"$^*()+=[]{}?;:<>|~`\x80-\xff\\]");
	b.checkImgURI = a("(.jpg|.gif|.png|.JPG|.GIF|.PNG)$");
	b.checkURL = a("^http:\\/\\/([\\w-]+(\\.[\\w-]+)+(\\/[\\w-   .\\/\\?%@&+=\\u4e00-\\u9fa5]*)?)?$");
	b.checkURLoose = a("^([^://])+\\:\\/\\/([^\\.]+)(\\.)(.+)([^\\.]+)$");
	b.checkMiniName = a("^[a-zA-Z0-9\u4e00-\u9fa5\uff00-\uffff\u0800-\u4e00\u3130-\u318f\uac00-\ud7a3_]*$");
	b.checkIdCard = a("^(([0-9]{15})|([0-9]{18})|([0-9]{17}(x|X)))$");
	b.checkSchool = function(f) {
		if (new RegExp("'|\"|<|>|[|]", "g").test(f)) {
			return false
		} else {
			return true
		}
	};
	b.checkCompany = function(f) {
		if (new RegExp("'|\"|<|>|[|]", "g").test(f)) {
			return false
		} else {
			return true
		}
	};
	b.checkMobileCheckCode = a("^[0-9a-z]{6}$");
	b.checkSepicalSymbol = function(f) {
		if (new RegExp("[,|;|<|>]", "g").test(f)) {
			return true
		} else {
			return false
		}
	};
	b.checkPwdPower = function(j, h, g) {
		var f = (j.length - h) / (g - h);
		var k = 0;
		if (/[A-Z]/g.test(j)) {
			k += 0.273
		}
		if (/[a-z]/g.test(j)) {
			k += 0.273
		}
		if (/[0-9]/g.test(j)) {
			k += 0.114
		}
		if (/[^0-9a-zA-Z]/g.test(j)) {
			k += 0.34
		}
		return f / 2 + k / 2
	};
	b.checkWeakPassword = (function() {
		var g = ["000000", "111111", "11111111", "112233", "123123", "123321", "123456", "654321", "666666", "888888", "abcdef", "abcabc", "abc123", "a1b2c3", "aaa111", "123qwe", "qwerty", "qweasd", "admin", "password", "p@ssword", "passwd", "iloveyou", "5201314"];
		var h = {};
		for (var f = 0; f < g.length; f++) {
			h[g[f]] = true
		}
		return function(j) {
			if (h[j]) {
				return false
			} else {
				return true
			}
		}
	})();
	b.checkPwdPowerNew = function(j) {
		function h(l) {
			if (l >= 65 && l <= 90) {
				return 2
			}
			if (l >= 97 && l <= 122) {
				return 4
			} else {
				return 1
			}
		}
		function g(l) {
			var m = 0;
			for (i = 0; i < 3; i++) {
				if (l & 1) {
					m++
				}
				l >>>= 1
			}
			return m
		}
		var f = 0;
		for (i = 0; i < j.length; i++) {
			f |= h(j.charCodeAt(i))
		}
		var k = g(f);
		if (j.length >= 10) {
			k++
		}
		switch (k) {
		case 1:
			return 1;
		case 2:
			return 2;
		case 3:
			return 3;
		default:
			return 1
		}
	};
	b.TWFilter = function(f) {
		var h = ["\u4E7E", "\u6B77", "\u9418", "\u9AEE", "\u5FA9", "\u6AAF", "\u98B1", "\u532F", "\u7A6B", "\u5118", "\u7526", "\u7F4E", "\u7CF0", "\u81DF", "\u96BB", "\u8879"];
		var g = new RegExp(h.join("|"));
		return g.test(f)
	}
})(App);
Sina.pkg("Core.Events");
Core.Events.addEvent = function(j, g, f, a) {
	var h = $E(j);
	if (h == null) {
		$Debug("addEvent 找不到对象：" + j);
		return
	}
	if (typeof a == "undefined") {
		a = false
	}
	if (typeof f == "undefined") {
		f = "click"
	}
	if (h.addEventListener) {
		h.addEventListener(f, g, a);
		return true
	} else {
		if (h.attachEvent) {
			var b = h.attachEvent("on" + f, g);
			return true
		} else {
			h["on" + f] = g
		}
	}
};
Core.Events.removeEvent = function(a, b, f) {
	var g = $E(a);
	if (g == null) {
		$Debug("removeEvent 找不到对象：" + a);
		return
	}
	if (typeof b != "function") {
		return
	}
	if (typeof f == "undefined") {
		f = "click"
	}
	if (g.addEventListener) {
		g.removeEventListener(f, b, false)
	} else {
		if (g.attachEvent) {
			g.detachEvent("on" + f, b)
		}
	}
	b[f] = null
};
Sina.pkg("Core.Base"); (function() {
	var a = function() {
		var b = navigator.userAgent.toLowerCase();
		this.$IE = /msie/.test(b);
		this.$OPERA = /opera/.test(b);
		this.$MOZ = /gecko/.test(b);
		this.$IE5 = /msie 5 /.test(b);
		this.$IE55 = /msie 5.5/.test(b);
		this.$IE6 = /msie 6/.test(b);
		this.$IE7 = /msie 7/.test(b);
		this.$SAFARI = /safari/.test(b);
		this.$winXP = /windows nt 5.1/.test(b);
		this.$winVista = /windows nt 6.0/.test(b);
		this.$FF2 = /Firefox\/2/i.test(b);
		this.$IOS = /\((iPhone|iPad|iPod)/i.test(b)
	};
	Core.Base.detect = new a()
})();
Core.Events.getEvent = function() {
	return window.event
};
if (!Core.Base.detect.$IE) {
	Core.Events.getEvent = function() {
		if (window.event) {
			return window.event
		}
		var b = arguments.callee.caller;
		var a;
		var f = 0;
		while (b != null && f < 40) {
			a = b.arguments[0];
			if (a && (a.constructor == Event || a.constructor == MouseEvent)) {
				return a
			}
			f++;
			b = b.caller
		}
		return a
	}
}
Core.Events.stopEvent = function(a) {
	try {
		var b = a ? a: Core.Events.getEvent();
		b.cancelBubble = true;
		b.returnValue = false
	} catch(f) {}
};
if (!$IE) {
	Core.Events.stopEvent = function(a) {
		try {
			var b = a ? a: Core.Events.getEvent();
			b.preventDefault();
			b.stopPropagation()
		} catch(f) {}
	}
}
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
Sina.pkg("Core.Dom");
Core.Dom.opacity = function(b, a) {
	b = $E(b);
	b.style.filter = "alpha(opacity=" + a + ")";
	b.style.opacity = a / 100
};
Core.Dom.getElementsByClass = function(f, b, k) {
	f = f || document;
	var g = [];
	k = " " + k + " ";
	var m = f.getElementsByTagName(b),
	j = m.length;
	for (var h = 0; h < j; ++h) {
		var a = m[h];
		if (a.nodeType == 1) {
			var l = " " + a.className + " ";
			if (l.indexOf(k) != -1) {
				g[g.length] = a
			}
		}
	}
	return g
};
Core.Dom.byClz = Core.Dom.getElementsByClass;
Sina.pkg("Utils");
if (typeof Utils == "undefined") {
	Utils = Sina.Utils
}
Sina.pkg("Core.Function");
Core.Function.bind2 = function(f, b) {
	var a = f;
	return function() {
		return a.apply(b, arguments)
	}
};
Function.prototype.bind2 = function(b) {
	var a = this;
	return function() {
		return a.apply(b, arguments)
	}
};
Utils.Template = function(a) {
	this.tmpl = a;
	this.pattern = /(#\{(.*?)\})/g
};
Utils.Template.prototype = {
	evaluate: function(a) {
		return this.tmpl.replace(this.pattern,
		function() {
			return a[arguments[2]] || ""
		})
	},
	evaluateMulti: function(f, a) {
		var b = [];
		Core.Array.foreach(f, Core.Function.bind2(function(g, h) {
			h = a ? f.length - h: h;
			b[h] = this.evaluate(g)
		},
		this));
		return b.join("")
	}
};
Sina.pkg("Core.System");
Core.System.winSize = function(b) {
	var a,
	f;
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
		f = target.innerHeight
	} else {
		if (target.documentElement && target.documentElement.clientHeight) {
			a = target.documentElement.clientWidth;
			f = target.documentElement.clientHeight
		} else {
			if (target.body) {
				a = target.body.clientWidth;
				f = target.body.clientHeight
			}
		}
	}
	return {
		width: a,
		height: f
	}
};
Core.System.pageSize = function(f) {
	if (f) {
		target = f.document
	} else {
		target = document
	}
	var h = (target.compatMode == "CSS1Compat" ? target.documentElement: target.body);
	var g,
	b;
	if (window.innerHeight && window.scrollMaxY) {
		g = h.scrollWidth;
		b = window.innerHeight + window.scrollMaxY
	} else {
		if (h.scrollHeight > h.offsetHeight) {
			g = h.scrollWidth;
			b = h.scrollHeight
		} else {
			g = h.offsetWidth;
			b = h.offsetHeight
		}
	}
	var a = Core.System.winSize(f);
	if (b < a.height) {
		pageHeight = a.height
	} else {
		pageHeight = b
	}
	if (g < a.width) {
		pageWidth = a.width
	} else {
		pageWidth = g
	}
	return [pageWidth, pageHeight, a.width, a.height]
};
Core.System.getScrollPos = function(f) {
	f = f || document;
	var a = f.documentElement;
	var b = f.body;
	return [Math.max(a.scrollTop, b.scrollTop), Math.max(a.scrollLeft, b.scrollLeft), Math.max(a.scrollWidth, b.scrollWidth), Math.max(a.scrollHeight, b.scrollHeight)]
};
App.Dialog = {};
App.Dialog.BasicDialog = function(l, j, a) {
	a = a || {};
	a.noDrag = a.noDrag || true;
	this._node = $C("div");
	document.getElementsByTagName("BODY")[0].appendChild(this._node);
	var f = {
		title: l ? l: "BasicDialog",
		content: j ? j: "......",
		closeTip: $CLTMSG.CD0018
	};
	var h = this._node.style;
	h.position = "absolute";
	h.visibility = "hidden";
	if (a.zIndex) {
		h.zIndex = a.zIndex
	}
	if (a.hidden) {
		h.visibility = "hidden"
	}
	var k = '<table class="mBlogLayer"><tbody><tr><td class="top_l"></td><td class="top_c"></td><td class="top_r"></td></tr><tr><td class="mid_l"></td><td class="mid_c"><div class="layerBox"><div class="layerBoxTop"><div class="topCon"><strong>#{title}</strong><a href="javascript:;" class="close" title="#{closeTip}"></a><div class="clear"></div></div></div><div class="layerBoxCon">#{content}</div></div></td><td class="mid_r"></td></tr>        <tr><td class="bottom_l"></td><td class="bottom_c"></td><td class="bottom_r"></td></tr>       </tbody></table>';
	var g = new Utils.Template(k);
	this._node.innerHTML = g.evaluate(f);
	this._node_body = Core.Dom.getElementsByClass(this._node, "DIV", "layerBoxCon")[0];
	this.setSize(a.width, a.height);
	this._btn_close = this._node.firstChild.firstChild.childNodes[1].childNodes[1].firstChild.firstChild.firstChild.childNodes[1];
	this._node_title = this._btn_close.previousSibling;
	this._btn_close.parent = this;
	this._btn_close.onclick = function() {
		Core.Events.stopEvent();
		if (a.hiddClose) {
			this.parent.hidd()
		} else {
			this.parent.close()
		}
	};
	this._btn_close.onmousedown = function() {};
	this._btn_move = this._btn_close.parentNode.parentNode;
	this._btn_move.parent = this;
	this._btn_move.onmousedown = function() {
		var m = Core.Events.fixEvent(Core.Events.getEvent());
		this.parent._ondrag = true;
		this.offsetx = m.layerX;
		this.offsety = m.layerY
	};
	if (!a.noDrag) {
		this._btn_move.style.cursor = "pointer"
	}
	var b = this;
	this._btn_move.mousemoveHandler = function() {
		b._mousemoveHandler()
	};
	this._btn_move.mouseupHandler = function() {
		b._mouserupHandler()
	};
	this._btn_move.resize = function() {
		b.resize()
	};
	this._btn_move.scroll = function() {
		b.scroll()
	};
	this._btn_move.close = function(n) {
		if (a.esc) {
			return
		}
		var m = n.keyCode;
		if (m === 27) {
			b.close()
		}
	};
	this.setMiddle();
	if (a.hidden) {
		h.visibility = "hidden";
		this.focusTarget = this._btn_close
	} else {
		h.visibility = "visible";
		this._btn_close.focus();
		this._btn_close.blur()
	}
	this.setMask(this._node.style.zIndex, a.hidden, a);
	if (!a.noDrag) {
		Core.Events.addEvent(document, this._btn_move.mousemoveHandler, "mousemove");
		Core.Events.addEvent(document, this._btn_move.mouseupHandler, "mouseup")
	}
	Core.Events.addEvent(window, this._btn_move.resize, "resize");
	Core.Events.addEvent(window, this._btn_move.scroll, "scroll");
	Core.Events.addEvent(document, this._btn_move.close, "keydown")
};
App.Dialog.BasicDialog.prototype = {
	onClose: function() {},
	onHidd: function() {},
	gc: function() {},
	distory: function() {
		if (this._distory) {
			return
		}
		this.gc();
		Core.Events.removeEvent(document, this._btn_move.mousemoveHandler, "mousemove");
		Core.Events.removeEvent(document, this._btn_move.mouseupHandler, "mouseup");
		Core.Events.removeEvent(window, this._btn_move.resize, "resize");
		Core.Events.removeEvent(window, this._btn_move.scroll, "scroll");
		this._btn_close.onmousedown = null;
		this._btn_close.onclick = null;
		this._btn_close.parent = null;
		this._btn_close = null;
		this._node.parentNode.removeChild(this._node);
		this._mask && this._mask.parentNode.removeChild(this._mask);
		this._mask1.parentNode.removeChild(this._mask1);
		if (scope.$IE) {
			this._node.outerHTML = null;
			this._mask && (this._mask.outerHTML = null);
			this._mask1.outerHTML = null
		}
		this._node = null;
		this._btn_move.mousemoveHandler = null;
		this._btn_move.mouseupHandler = null;
		this._btn_move.resize = null;
		this._btn_move.scroll = null;
		this._btn_move.onmousedown = null;
		this._btn_move.parent = null;
		this._btn_move = null;
		this._mask && (this._mask = null);
		this._distory = true
	},
	close: function() {
		if (this.onClose) {
			this.onClose()
		}
		this.distory()
	},
	show: function() {
		this._node.style.visibility = "visible";
		this._mask && (this._mask.style.visibility = "visible");
		this._mask1.style.visibility = "visible";
		if (this.focusTarget) {
			this.focusTarget.focus()
		}
		this.resize();
		this.setMiddle()
	},
	hidd: function() {
		if (this.onHidd) {
			this.onHidd()
		}
		this._node.style.visibility = "hidden";
		this._mask && (this._mask.style.visibility = "hidden");
		this._mask1.style.visibility = "hidden"
	},
	setMask: function(z, hidden, options) {
		options = options || {};
		$IE && (this._mask = document.getElementsByTagName("BODY")[0].appendChild($C("iframe")));
		this._mask1 = document.getElementsByTagName("BODY")[0].appendChild($C("div"));
		if (hidden) {
			this._mask && (this._mask.style.visibility = "hidden");
			this._mask1.style.visibility = "hidden"
		}
		if (this._mask) {
			with(this._mask.style) {
				position = "absolute";
				width = "100%";
				zIndex = parseInt(z) - 2;
				top = "0px";
				left = "0px";
				border = "0"
			}
		}
		with(this._mask1.style) {
			position = "absolute";
			backgroundColor = "#000";
			width = "100%";
			zIndex = parseInt(z) - 1;
			top = "0px";
			left = "0px"
		}
		this._mask && Core.Dom.opacity(this._mask, 0);
		Core.Dom.opacity(this._mask1, options.mask_opacity || 15);
		this.resize()
	},
	setPosition: function(a, b) {
		this._node.style.left = a + "px";
		this._node.style.top = b + "px"
	},
	resize: function() {
		if (this._mask1) {
			var f = Core.System.getScrollPos(),
			b = Core.System.winSize(),
			a;
			a = (b.height + 160) + "px";
			this._mask1.style.height = a;
			this._mask && (this._mask.style.height = a);
			a = (f[0] - 80) + "px";
			this._mask1.style.top = a;
			this._mask && (this._mask.style.top = a);
			this.setMiddle()
		}
	},
	scroll: function() {
		var b = Core.System.getScrollPos(),
		f = this._mask1.offsetHeight,
		a;
		if ((b[0] + f) <= b[3]) {
			a = (b[0] - 80) + "px";
			this._mask && (this._mask.style.top = a);
			this._mask1.style.top = a
		} else {
			a = (b[3] - f) + "px";
			this._mask && (this._mask.style.top = a);
			this._mask1.style.top = a
		}
	},
	setTitle: function(a) {
		this._node_title.innerHTML = a
	},
	setMiddle: function() {
		var g = this._node.offsetWidth;
		var j = this._node.offsetHeight;
		var b = Core.System.winSize();
		var h = Core.System.getScrollPos();
		var f = (b.width - g) / 2;
		var a = h[0] + (b.height - j) / 2;
		this._node.style.left = f + "px";
		this._node.style.top = (a < 20 ? 20: a) + "px"
	},
	setSize: function(a, b) {
		a = a ? a + "px": "auto";
		b = b ? b + "px": "auto";
		var f = this._node_body.style;
		f.width = a;
		f.height = b
	},
	_mousemoveHandler: function() {
		if (this._ondrag) {
			var a = Core.Events.fixEvent(Core.Events.getEvent());
			if (a.target == this._btn_close) {
				return
			}
			if ($IE) {
				var b = Core.System.getScrollPos();
				this._node.style.left = a.pageX - this._btn_move.offsetx + b[1] + "px";
				this._node.style.top = a.pageY - this._btn_move.offsety + b[0] + "px"
			} else {
				this._node.style.left = a.pageX - this._btn_move.offsetx + "px";
				this._node.style.top = a.pageY - this._btn_move.offsety + "px"
			}
		}
	},
	_mouserupHandler: function() {
		this._ondrag = false;
		if (this._btn_move.offsetx) {
			this._btn_move.offsetx = null
		}
		if (this._btn_move.offsety) {
			this._btn_move.offsety = null
		}
	}
};
App.alert = function(a, b) {
	b = b ? b: {};
	b.hasBtn = b.hasBtn == null ? true: b.hasBtn;
	var m = b.title ? b.title: $CLTMSG.CL0601;
	var r = b.ok_label ? b.ok_label: $CLTMSG.CL0602;
	if (typeof a == "object") {
		a = App.getMsg(a.code, a.replace)
	}
	var p = b.ok ? b.ok: null;
	var f = {};
	f.width = b.width ? b.width: 360;
	f.height = b.height;
	f.zIndex = b.zIndex ? b.zIndex: 1000;
	f.hidden = b.hidden;
	var n = [];
	n.push('<div class="commonLayer2">');
	n.push('<div class="layerL"><img class="PY_ib PY_ib_#{icon}" src="' + scope.$BASEIMG + 'style/images/common/PY_ib.gif" alt="" title="" align="absmiddle"/></div>');
	n.push('<div class="layerR">');
	n.push(" <strong>#{cnt}</strong>");
	n.push("</div>");
	n.push('<div class="clear"></div>');
	if (b.hasBtn) {
		n.push(' <div class="MIB_btn">')
	} else {
		n.push(' <div class="MIB_btn" style="height:0;">')
	}
	n.push(' <a href="javascript:;" id="#{btn_id}" class="btn_normal"><em>' + r + "</em></a>");
	n.push("</div></div>");
	var g = new Utils.Template(n.join(""));
	var q = "btn_" + (new Date()).getTime();
	var l = b.icon ? b.icon: 1;
	a = g.evaluate({
		cnt: a,
		icon: l,
		btn_id: q
	});
	var j = new App.Dialog.BasicDialog(m, a, f);
	var k = $E(q);
	var h = function() {
		if (p) {
			try {
				p()
			} catch(s) {}
		}
		p = null;
		k.onclick = null;
		k = null;
		j.close();
		Core.Events.removeEvent(document, o, "keyup");
		return false
	};
	var o = function(u) {
		var t = window.event || u;
		var s;
		if (t.target) {
			s = u.target
		} else {
			if (t.srcElement) {
				s = u.srcElement
			}
		}
		if (s.nodeType == 3) {
			s = s.parentNode
		}
		if (s.tagName == "INPUT" || s.tagName == "TEXTAREA") {
			return
		}
		switch (t.keyCode) {
		case 27:
			h();
			break
		}
	};
	k.onclick = h;
	Core.Events.addEvent(document, o, "keyup");
	if (f.hidden) {
		this.focusTarget = k
	} else {
		k.focus()
	}
	return j
};
App.confirm = function(f, r) {
	r = r ? r: {};
	var v = r.title ? r.title: $CLTMSG.CL0601;
	var u = r.ok_label ? r.ok_label: $CLTMSG.CL0602;
	var m = r.cancel_label ? r.cancel_label: $CLTMSG.CL0603;
	var b = "";
	if (typeof f == "object") {
		b = f.des;
		if (f.code) {
			f = App.getMsg(f.code, f.replace)
		} else {
			f = f.html
		}
	}
	if (f) {
		f = "<strong>" + f + "</strong>"
	}
	if (b) {
		b = '<div class="txt">' + b + "</div>"
	}
	var g = r.ok ? r.ok: null;
	var p = r.cancel ? r.cancel: null;
	var k = {};
	k.width = r.width ? r.width: 390;
	k.height = r.height;
	k.zIndex = r.zIndex ? r.zIndex: 1000;
	k.hidden = r.hidden;
	var w = '<div class="commonLayer2">                         <div class="layerL"><img class="PY_ib PY_ib_#{icon}" src="' + scope.$BASEIMG + 'style/images/common/PY_ib.gif" alt="" title="" align="absmiddle"/></div>                         <div class="layerR">     #{cnt}            #{des}                                 <div class="MIB_btn">      <a href="javascript:;" id="ok_#{t}" class="btn_normal"><em>' + u + '</em></a>      <a href="javascrpt:;" id="cancel_#{t}" class="btn_notclick"><em>' + m + '</em></a>     </div>                             </div>                            <div class="clear"></div>                        </div>';
	var q = new Utils.Template(w);
	var j = (new Date()).getTime();
	var n = r.icon ? r.icon: 4;
	f = q.evaluate({
		cnt: f,
		des: b,
		icon: n,
		t: j
	});
	var l = new App.Dialog.BasicDialog(v, f, k);
	var s = $E("ok_" + j);
	var o = $E("cancel_" + j);
	var h = function(y) {
		var x = window.event || y;
		var t;
		if (x.target) {
			t = y.target
		} else {
			if (x.srcElement) {
				t = y.srcElement
			}
		}
		if (t.nodeType == 3) {
			t = t.parentNode
		}
		if (t.tagName == "INPUT" || t.tagName == "TEXTAREA") {
			return
		}
		switch (x.keyCode) {
		case 27:
			a();
			break
		}
	};
	var a = function() {
		if (p) {
			try {
				p()
			} catch(t) {}
		}
		p = null;
		s.onclick = null;
		o.onclick = null;
		o = null;
		s = null;
		l.distory();
		l = null;
		Core.Events.removeEvent(document, h, "keyup");
		return false
	};
	s.onclick = function() {
		if (g) {
			try {
				g()
			} catch(t) {}
		}
		g = null;
		s.onclick = null;
		o.onclick = null;
		o = null;
		s = null;
		l.distory();
		l = null;
		Core.Events.removeEvent(document, h, "keyup");
		return false
	};
	o.onclick = a;
	if (r.ok_focus) {
		if (r.hidden) {
			this.focusTarget = s
		} else {
			s.focus()
		}
	} else {
		if (r.cancel_focus) {
			if (r.hidden) {
				this.focusTarget = o
			} else {
				o.focus()
			}
		}
	}
	Core.Events.addEvent(document, h, "keyup");
	return l
};
App.customDialog = function(n, f) {
	f = f ? f: {};
	var p = f.title ? f.title: $CLTMSG.CL0601;
	var h = {};
	h.width = f.width ? f.width: 360;
	h.height = f.height;
	h.zIndex = f.zIndex ? f.zIndex: 1000;
	h.hidden = f.hidden;
	var m = '#{cnt} <div class="layerBtn" id="btn_#{t}" style="' + f.btnStyle + '"></div>';
	var l = new Utils.Template(m);
	var r = (new Date()).getTime();
	var b = l.evaluate({
		cnt: n,
		t: r
	});
	var o = new App.Dialog.BasicDialog(p, b, h);
	var q = $E("btn_" + r);
	var j = f.btns;
	for (var k = 0; k < j.length; k++) {
		var a = q.appendChild($C("a"));
		a.className = j[k].cls || "mBlogBtn";
		a.href = "javascript:;";
		if (j[k].select) {
			if (f.hidden) {
				this.focusTarget = a
			} else {
				a.focus()
			}
		}
		a.innerHTML = "<em>" + j[k].text + "</em>";
		a.nohide = f.btns[k].nohide;
		a.func = f.btns[k].func;
		a.onclick = function() {
			var s = this.nohide;
			if (this.func) {
				try {
					this.func()
				} catch(t) {}
			}
			if (!s) {
				o.close()
			}
			return false
		}
	}
	function g() {
		var s = q.getElementsByTagName("A");
		for (var t in s) {
			s[t].nohide = null;
			s[t].func = null;
			s[t].onclick = null
		}
		q = null
	}
	o.close = function() {
		o.onClose();
		g();
		o.distory()
	};
	return o
};
if (!App.getMsg) {
	App.getMsg = function(b, a) {
		alert("you should override this function! get more help from dialog.js ");
		return b
	}
}
App.getMsg = function(a, f) {
	if (a === undefined) {
		return ""
	}
	if (typeof(a) == "object") {
		a = a.code
	}
	var g = $SYSMSG[a] || $CLTMSG[a] || ("Error[" + a + "]");
	if (f) {
		var b = new Utils.Template(g);
		return b.evaluate(f)
	} else {
		return g
	}
};
App.timer = new
function() {
	this.list = {};
	this.refNum = 0;
	this.clock = null;
	this.allpause = false;
	this.delay = 25;
	this.add = function(a) {
		if (typeof a != "function") {
			throw ("The timer needs add a function as a parameters")
		}
		var b = "" + (new Date()).getTime() + (Math.random()) * Math.pow(10, 17);
		this.list[b] = {
			fun: a,
			pause: false
		};
		if (this.refNum <= 0) {
			this.start()
		}
		this.refNum++;
		return b
	};
	this.remove = function(a) {
		if (this.list[a]) {
			delete this.list[a];
			this.refNum--
		}
		if (this.refNum <= 0) {
			this.stop()
		}
	};
	this.pause = function(a) {
		if (this.list[a]) {
			this.list[a]["pause"] = true
		}
	};
	this.play = function(a) {
		if (this.list[a]) {
			this.list[a]["pause"] = false
		}
	};
	this.stop = function() {
		clearInterval(this.clock);
		this.clock = null
	};
	this.start = function() {
		var a = this;
		this.clock = setInterval(function() {
			a.loop.apply(a)
		},
		this.delay)
	};
	this.loop = function() {
		for (var a in this.list) {
			if (!this.list[a]["pause"]) {
				this.list[a]["fun"]()
			}
		}
	}
};
App.animation = {
	vibrate: function(l, p, f, j, r, q) {
		var h = 2 * Math.PI * Math.sqrt(f / j);
		var a = p * Math.sqrt(f / j);
		var b = Math.ceil(h * 100 / l);
		var o = 0;
		var g = [];
		while (a > r) {
			g.push(a * Math.sin((o / b) * 2 * Math.PI));
			o++;
			o = o % b;
			a = a - q
		}
		return g
	},
	accelerate: function(m, j, k, b) {
		var f = [];
		var a = 0;
		while (true) {
			var n = b;
			b = n + m * k / 10;
			a = a + m * (b + n) / 20;
			if (a < j) {
				f.push(a)
			} else {
				break
			}
		}
		return f
	},
	curtain: function(j, f, g) {
		var b = [f];
		var a = f;
		while (a > 1) {
			a = a * g;
			b.unshift(a)
		}
		return b
	},
	speed: function(k, j, a) {
		var g = Math.ceil(j / a);
		var l = Math.ceil(g * 100 / k);
		var b = [];
		for (var f = 0; f < l; f++) {
			b.push((f + 1) * j / l)
		}
		return b
	},
	circle: function(j, a, b) {
		var h = 2 * Math.PI * a / b;
		var k = Math.ceil(h * 100 / j);
		var f = [];
		for (var g = 0; g < k; g++) {
			f.push({
				x: a * Math.sin(((g + 1) / k) * 2 * Math.PI),
				y: a * Math.cos(((g + 1) / k) * 2 * Math.PI)
			})
		}
		return f
	},
	taccelerate: function(j, g, f) {
		var k = Math.ceil(f * 100 / j);
		var a = [];
		for (var b = 0; b < k; b++) {
			a.push(Math.pow((b + 1) / k, 2) * g)
		}
		return a
	}
}; (function(n) {
	var q = false;
	var j = 10;
	var b = 20;
	var h = 10;
	var t = 0;
	var r = 0;
	var f = 0;
	var o = 0;
	var a = 0.4;
	n.curtain = {
		droop: function(l, s, v) {
			if (q) {
				return false
			}
			q = true;
			var p = l.style.overflow;
			l.style.visibility = "hidden";
			l.style.display = "block";
			l.style.overflow = "hidden";
			var m = parseInt(l.offsetHeight);
			var g = n.animation.curtain(n.timer.delay, m, a);
			var u = 0;
			var k = n.timer.add(function() {
				if (u >= g.length) {
					n.timer.remove(k);
					l.style.height = m + "px";
					l.style.overflow = p;
					q = false;
					if (typeof s == "function") {
						s()
					}
					return false
				}
				l.style.height = g[u] + "px";
				l.scrollTop = (m - g[u]);
				u++
			});
			l.style.height = "0px";
			l.style.visibility = "visible";
			return true
		},
		raise: function(m, k, x) {
			if (q) {
				return false
			}
			q = true;
			var g = m.style.overflow;
			m.style.overflow = "hidden";
			var s = parseInt(m.offsetHeight);
			var l = [];
			if (r !== 0) {
				var y = n.animation.speed(n.timer.delay, s * f, j / f);
				for (var p = 0, u = y.length; p < u; p++) {
					l.push(s + y[p])
				}
			}
			var w = n.animation.speed(n.timer.delay, s * (1 + f), j * 10);
			for (var p = 0, u = w.length; p < u; p++) {
				l.push(w[u - p - 1])
			}
			var v = 0;
			var z = n.timer.add(function() {
				if (v >= l.length) {
					n.timer.remove(z);
					m.style.display = "none";
					m.style.height = s + "px";
					m.style.overflow = g;
					q = false;
					if (typeof k == "function") {
						k()
					}
					return false
				}
				m.style.height = l[v] + "px";
				m.scrollTop = (s - l[v]);
				v++
			})
		},
		setting: function(g) {
			j = g.g || j;
			b = g.m || b;
			h = g.k || h;
			t = g.s || t;
			r = g.u || r;
			f = g.l || f
		}
	}
})(App);
Core.Dom.getStyle = function(a, f) {
	switch (f) {
	case "opacity":
		var h = 100;
		try {
			h = a.filters["DXImageTransform.Microsoft.Alpha"].opacity
		} catch(g) {
			try {
				h = a.filters("alpha").opacity
			} catch(g) {}
		}
		return h / 100;
	case "float":
		f = "styleFloat";
	default:
		var b = a.currentStyle ? a.currentStyle[f] : null;
		return (a.style[f] || b)
	}
};
if (!Core.Base.detect.$IE) {
	Core.Dom.getStyle = function(a, f) {
		if (f == "float") {
			f = "cssFloat"
		}
		try {
			var b = document.defaultView.getComputedStyle(a, "")
		} catch(g) {
			traceError(g)
		}
		return a.style[f] || b ? b[f] : null
	}
}
Core.Dom.getXY = function(b) {
	if ((b.parentNode == null || b.offsetParent == null || Core.Dom.getStyle(b, "display") == "none") && b != document.body) {
		return false
	}
	var a = null;
	var j = [];
	var f;
	var g = b.ownerDocument;
	f = b.getBoundingClientRect();
	var h = Core.System.getScrollPos(b.ownerDocument);
	return [f.left + h[1], f.top + h[0]];
	a = b.parentNode;
	while (a.tagName && !/^body|html$/i.test(a.tagName)) {
		if (Core.Dom.getStyle(a, "display").search(/^inline|table-row.*$/i)) {
			j[0] -= a.scrollLeft;
			j[1] -= a.scrollTop
		}
		a = a.parentNode
	}
	return j
};
if (!$IE) {
	Core.Dom.getXY = function(b) {
		if ((b.parentNode == null || b.offsetParent == null || Core.Dom.getStyle(b, "display") == "none") && b != document.body) {
			return false
		}
		var a = null;
		var j = [];
		var f;
		var g = b.ownerDocument;
		j = [b.offsetLeft, b.offsetTop];
		a = b.offsetParent;
		var h = Core.Dom.getStyle(b, "position") == "absolute";
		if (a != b) {
			while (a) {
				j[0] += a.offsetLeft;
				j[1] += a.offsetTop;
				if (scope.$SAFARI && !h && Core.Dom.getStyle(a, "position") == "absolute") {
					h = true
				}
				a = a.offsetParent
			}
		}
		if (scope.$SAFARI && h) {
			j[0] -= b.ownerDocument.body.offsetLeft;
			j[1] -= b.ownerDocument.body.offsetTop
		}
		a = b.parentNode;
		while (a.tagName && !/^body|html$/i.test(a.tagName)) {
			if (Core.Dom.getStyle(a, "display").search(/^inline|table-row.*$/i)) {
				j[0] -= a.scrollLeft;
				j[1] -= a.scrollTop
			}
			a = a.parentNode
		}
		return j
	}
}
App.promptTip = function(a, f, l, h) {
	var g = {
		ask: 4,
		wrong: 1,
		error: 2,
		ok: 3
	};
	h = h ? h: "ok";
	var b = (typeof a == "object") ? App.getMsg(a, f) : a;
	var k = '  <div class="PY_clew">             <div class="PY_clewcon">                 <div class="icon"><img align="absmiddle" class="PY_ib PY_ib_' + g[h] + '" src="' + scope.$BASEIMG + 'style/images/common/PY_ib.gif" alt="" title=""/></div>                 <div class="txt bold">                     ' + b + '                 </div>                 <div class="clear"></div>             </div>     </div>';
	var j = $E(l ? l: "system_information");
	j.innerHTML = k;
	j.style.display = "";
	App.curtain.droop(j);
	window.scrollTo(0, 0);
	App.promptTip.close = (function(m) {
		return function() {
			if (m) {
				App.curtain.raise(m)
			}
		}
	})(j);
	setTimeout(function() {
		App.promptTip.close()
	},
	2000)
}; (function(a) {
	var b = Core.Events.addEvent;
	var f = Core.String.trim;
	a.checkForm = function(j) {
		var g = {};
		var h = {};
		g.list = h;
		g.add = function(m, o, l, k, n) {
			h[m] = a.checkItem(m, o, l, j, k, n)
		};
		g.remove = function(k) {
			try {
				delete h[k]
			} catch(l) {}
		};
		g.check = function(p) {
			var n = true;
			if (p) {
				for (var o = 0, l = p.length; o < l; o += 1) {
					if (h[p[o]]) {
						if (!h[p[o]].check()) {
							h[p[o]].changeUI(false);
							n = false
						}
					}
				}
			} else {
				for (var m in h) {
					if (!h[m].check()) {
						h[m].changeUI(false);
						n = false
					}
				}
			}
			return n
		};
		g.toggleError = function(n, l) {
			for (var m = 0, k = n.length; m < k; m += 1) {
				if (h[n[m]]) {
					h[n[m]].changeUI(l);
					return true
				}
			}
			return false
		};
		g.showError = function(k) {
			return this.toggleError(k, false)
		};
		g.hideError = function(k) {
			this.toggleError(k, true)
		};
		return g
	};
	a.checkItem = function(o, m, l, p, g, n) {
		var k = {};
		if (n === undefined) {
			if (m.type === "text" || m.type === "password" || m.tagName === "TEXTAREA") {
				n = "blur"
			} else {
				if (m.tagName === "SELECT") {
					n = "change"
				} else {
					n = "click"
				}
			}
		}
		if (g === undefined) {
			g = function(q) {
				if (f(q.value) === "") {
					return false
				} else {
					return true
				}
			}
		}
		k.changeUI = function(q) {
			p(o, q, m, l)
		};
		k.check = function() {
			var q = g(m);
			p(o, q, m, l);
			return q
		};
		k.getAttr = function() {};
		if (m.tagName !== "SELECT" && m.length) {
			for (var h = 0, j = m.length; h < j; h += 1) {
				b(m[h],
				function() {
					k.check()
				},
				n)
			}
		} else {
			b(m,
			function() {
				k.check()
			},
			n)
		}
		return k
	}
})(App); (function(a) {
	var b = function(f, g) {
		this.box = null;
		this.domList = {};
		this.actList = {};
		if (g) {
			this.box = g
		} else {
			this.box = document.createElement("DIV")
		}
		if (f) {
			this.makeTree(this.box, f)
		}
	}; (function(f) {
		f.init = function() {};
		f.disp = function() {};
		f.NODEMAP = {
			AREA: "MAP",
			CAPTION: "TABLE",
			COL: "TABLE|COLGROUP",
			COLGROUP: "TABLE",
			LEGEND: "FIELDSET",
			OPTGROUP: "SELECT",
			OPTION: "SELECT",
			PARAM: "OBJECT",
			TBODY: "TABLE",
			TD: "TR",
			TFOOT: "TABLE",
			TH: "TABLE|TR",
			THEAD: "TABLE",
			TR: "TBODY|THEAD|TH|TFOOT"
		};
		f.create = function(j, h) {
			var l = null;
			j = j.toUpperCase();
			if (j == "TEXT") {
				l = document.createTextNode(h)
			} else {
				l = document.createElement(j)
			}
			if (typeof h == "object") {
				for (var g in h) {
					switch (g) {
					case "class":
						l.className = h[g];
						break;
					case "id":
						this.domList[h[g]] = l;
						break;
					case "action":
						if (this.actList[h[g]]) {
							this.actList[h[g]] = [l].concat(this.actList[h[g]])
						} else {
							this.actList[h[g]] = l
						}
						break;
					case "style":
						l.style.cssText = h[g];
						break;
					case "innerHTML":
						l.innerHTML = h[g];
						break;
					case "nodeValue":
						l.nodeValue = h[g];
						break;
					default:
						l.setAttribute(g, h[g])
					}
				}
			}
			return l
		};
		f.check = function(l, m) {
			var j = this.NODEMAP[m.tagName];
			if (this.NODEMAP[m.tagName]) {
				var k = j.split("|");
				for (var h = 0, g = k.length; h < g; h++) {
					if (l.tagName == k[h]) {
						return true
					}
				}
				return false
			}
			return true
		};
		f.append = function(h, j) {
			j.tagName = j.tagName.toLocaleUpperCase();
			if (!this.check(h, j)) {
				return false
			}
			var g = this.create(j.tagName, j.attributes);
			h.appendChild(g);
			return g
		};
		f.makeTree = function(k, h) {
			for (var j = 0, g = h.length; j < g; j++) {
				var l = this.append(k, h[j]);
				if (!l) {
					alert("tree wrong!!!");
					return false
				}
				if (h[j].childList && h[j].childList.length) {
					this.makeTree(l, h[j].childList)
				}
			}
		}
	})(b.prototype);
	a.Builder = b;
	a.domBuilder = new b()
})(App); (function(g) {
	var h = [{
		tagName: "DIV",
		attributes: {
			id: "box"
		},
		childList: [{
			tagName: "DIV",
			attributes: {
				"class": "M_notice_warn",
				id: "content"
			}
		}]
	}];
	var a = new App.Builder(h);
	a.box = a.domList.box;
	var b = '<div class="M_notice_succ"><span class="icon_succ"></span></div>';
	var f = '<div class="M_notice_del"><span class="icon_del"></span><span class="txt"></span></div>';
	g.checkFormUI_iframe = function(k, j, n, l) {
		if (n.errorKey && n.errorKey !== k && j) {
			return false
		} else {
			try {
				if (j) {
					if (! (n.tagName == "INPUT" && (n.type == "hidden" || n.getAttribute("type") == "hidden"))) {
						if (n.tagName === "SELECT" || n.length || n.type == "checkbox" || n.getAttribute("type") == "checkbox") {
							if (n.tagName === "SELECT") {}
						} else {}
					}
					n.errorKey = false;
					l.style.display = "";
					if (n.id == "door") {
						l.innerHTML = ""
					} else {
						l.innerHTML = b
					}
					if (n.value !== undefined && (!n.value.length || n.noRightIcon)) {
						l.style.display = "none";
						return false
					}
				} else {
					if (n.tagName === "SELECT" || n.length || n.type == "checkbox" || n.getAttribute("type") == "checkbox") {
						if (n.tagName === "SELECT") {}
					} else {}
					n.errorKey = k;
					l.style.display = "";
					l.innerHTML = f;
					l.getElementsByTagName("SPAN")[1].innerHTML = $SYSMSG[k]
				}
			} catch(m) {}
		}
	};
	g.bindFormTips = function(l) {
		for (var k = 0, j = l.length; k < j; k += 1) { (function(m) {
				Core.Events.addEvent(l[m]["el"],
				function() {
					var n = l[m]["el"].parentNode;
					if (l[m]["el"].tagName == "SELECT") {} else {}
					if (scope.$pageid !== "full_info1") {
						var o = Core.Dom.getXY(n);
						if (!l[m]["el"].value.length && l[m]["key"] && $SYSMSG[l[m]["key"]]) {
							a.domList.content.innerHTML = $SYSMSG[l[m]["key"]];
							l[m]["errorPos"].innerHTML = a.box.innerHTML;
							if (l[m]["errorPos"]) {}
						}
					}
				},
				"focus");
				Core.Events.addEvent(l[m]["el"],
				function() {
					if (l[m]["el"].tagName == "SELECT") {} else {}
				},
				"blur")
			})(k)
		}
	}
})(App); (function() {
	var a = {};
	a.prov0 = $CLTMSG.CX0078;
	a.code0 = "0";
	a.prov34 = $CLTMSG.CX0079;
	a.code34 = "1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18";
	a.prov11 = $CLTMSG.CX0080;
	a.code11 = "1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,28,29";
	a.prov50 = $CLTMSG.CX0081;
	a.code50 = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,40,41,42,43,81,82,83,84";
	a.prov35 = $CLTMSG.CX0082;
	a.code35 = "1,2,3,4,5,6,7,8,9";
	a.prov62 = $CLTMSG.CX0083;
	a.code62 = "1,2,3,4,5,6,7,8,9,10,24,26,29,30";
	a.prov44 = $CLTMSG.CX0084;
	a.code44 = "1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20,51,52,53";
	a.prov45 = $CLTMSG.CX0085;
	a.code45 = "21,22,3,4,5,6,7,8,9,10,11,12,13,14";
	a.prov52 = $CLTMSG.CX0086;
	a.code52 = "1,2,3,4,22,23,24,26,27";
	a.prov46 = $CLTMSG.CX0087;
	a.code46 = "1,2,90";
	a.prov13 = $CLTMSG.CX0088;
	a.code13 = "1,2,3,4,5,6,7,8,9,10,11";
	a.prov23 = $CLTMSG.CX0089;
	a.code23 = "1,2,3,4,5,6,7,8,9,10,11,12,27";
	a.prov41 = $CLTMSG.CX0090;
	a.code41 = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18";
	a.prov42 = $CLTMSG.CX0091;
	a.code42 = "1,2,3,5,6,7,8,9,10,11,12,13,28,29,30,31,32";
	a.prov43 = $CLTMSG.CX0092;
	a.code43 = "1,2,3,4,5,6,7,8,9,10,11,12,13,31";
	a.prov15 = $CLTMSG.CX0093;
	a.code15 = "1,2,3,4,5,6,7,22,25,26,28,29";
	a.prov32 = $CLTMSG.CX0094;
	a.code32 = "1,2,3,4,5,6,7,8,9,10,11,12,13";
	a.prov36 = $CLTMSG.CX0095;
	a.code36 = "1,2,3,4,5,6,7,8,9,10,11";
	a.prov22 = $CLTMSG.CX0096;
	a.code22 = "1,2,3,4,5,6,7,8,24";
	a.prov21 = $CLTMSG.CX0097;
	a.code21 = "1,2,3,4,5,6,7,8,9,10,11,12,13,14";
	a.prov64 = $CLTMSG.CX0098;
	a.code64 = "1,2,3,4,5";
	a.prov63 = $CLTMSG.CX0099;
	a.code63 = "1,21,22,23,25,26,27,28";
	a.prov14 = $CLTMSG.CX0100;
	a.code14 = "1,2,3,4,5,6,7,8,9,10,23";
	a.prov37 = $CLTMSG.CX0101;
	a.code37 = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17";
	a.prov31 = $CLTMSG.CX0102;
	a.code31 = "1,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,30";
	a.prov51 = $CLTMSG.CX0103;
	a.code51 = "1,3,4,5,6,7,8,9,10,11,13,14,15,16,17,18,19,20,32,33,34";
	a.prov12 = $CLTMSG.CX0104;
	a.code12 = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,21,23,25,26,27";
	a.prov54 = $CLTMSG.CX0105;
	a.code54 = "1,21,22,23,24,25,26";
	a.prov65 = $CLTMSG.CX0106;
	a.code65 = "1,2,21,22,23,27,28,29,30,31,32,40,42,43,44";
	a.prov53 = $CLTMSG.CX0107;
	a.code53 = "1,3,4,5,6,23,25,26,27,28,29,31,32,33,34,35";
	a.prov33 = $CLTMSG.CX0108;
	a.code33 = "1,2,3,4,5,6,7,8,9,10,11";
	a.prov61 = $CLTMSG.CX0109;
	a.code61 = "1,2,3,4,5,6,7,8,9,10";
	a.prov71 = $CLTMSG.CX0110;
	a.code71 = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,90";
	a.prov81 = $CLTMSG.CX0111;
	a.code81 = "2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1";
	a.prov82 = $CLTMSG.CX0112;
	a.code82 = "2,3,4,5,6,7,8,1";
	a.prov400 = $CLTMSG.CX0113;
	a.code400 = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,16";
	a.prov100 = "";
	a.code100 = "";
	a.provinces = $CLTMSG.CX0114;
	a.provcodes = "34,11,50,35,62,44,45,52,46,13,23,41,42,43,15,32,36,22,21,64,63,14,37,31,51,12,54,65,53,33,61,71,81,82,400,100";
	App.ProvinceAndCity = function(j, l, o, m, n, g, h, f, k, b) {
		this.provDom = j;
		this.cityDom = l;
		this.provCode = o;
		this.cityCode = m;
		this.areaDom = n;
		this.areaCode = g;
		this.is3level = f;
		this.noLimit = k;
		this.areacache = {};
		this.cache = {};
		if (h) {
			this.areaDisplay = document.getElementsByName(h)
		}
		this.dispLevel = b;
		this.init()
	}; (function(b) {
		b.init = function() {
			this.loadProv();
			this.loadCity();
			if (this.is3level) {
				this.loadArea()
			}
			Core.Events.addEvent(this.provDom, (function(f) {
				return function() {
					f.provCode = f.provDom.value;
					if (!f.noLimit) {
						f.cityCode = f.provCode === "400" ? 1: 1000
					} else {
						if (f.noLimit.city) {
							f.cityCode = 1
						} else {
							f.cityCode = 1000
						}
					}
					f.provCode = f.provDom.value;
					if (f.dispLevel != 1) {
						f.loadCity();
						f.loadArea()
					}
				}
			})(this), "change");
			Core.Events.addEvent(this.cityDom, (function(f) {
				return function() {
					if (!f.noLimit) {
						f.areaCode = 1000
					} else {
						if (f.noLimit.area) {
							f.areaCode = 1
						} else {
							f.areaCode = 1000
						}
					}
					f.cityCode = f.cityDom.value;
					f.loadArea()
				}
			})(this), "change")
		};
		b.disp = function() {};
		b.loadProv = function() {
			var g = this.provDom.options;
			var j = a.provcodes.split(",");
			var h = a.provinces.split(",");
			if (g.length <= 1) {
				for (var k = 0, f = j.length; k < f; k++) {
					g[g.length] = new Option(h[k], j[k])
				}
			}
			if (Core.Array.findit(j, this.provCode) != -1) {
				this.provDom.value = this.provCode
			} else {
				this.provDom.value = 34
			}
		};
		b.loadCity = function() {
			if (this.provCode == "1001") {
				this.cityDom.style.display = "none";
				this.cityDom.disabled = true;
				return false
			} else {
				this.cityDom.disabled = false;
				this.cityDom.style.display = ""
			}
			var k = this.cityDom.options;
			while (k.length) {
				this.cityDom.remove(0)
			}
			var g = a["code" + this.provCode].split(",");
			var j = a["prov" + this.provCode].split(",");
			if (! (this.noLimit && this.noLimit.city) && (this.provCode !== "400")) {
				k[0] = new Option($CLTMSG.CX0116, 1000)
			}
			for (var h = 0, f = g.length; h < f; h++) {
				if (j[h] && g[h]) {
					k[k.length] = new Option(j[h], g[h])
				}
			}
			if (Core.Array.findit(g, this.cityCode) != -1) {
				this.cityDom.value = this.cityCode
			} else {
				if (!this.noLimit) {
					this.cityDom.value = 1000
				} else {
					if (this.noLimit.city) {
						this.cityDom.value = 1
					}
				}
			}
		};
		b.displayarea = function(h, k, o, g) {
			if (o && o.length > 0) {
				if (!h || h.length == 0) {
					for (var f = 0, l = o.length; f < l; f++) {
						o[f].style.display = "none"
					}
					return false
				}
				for (var f = 0, l = o.length; f < l; f++) {
					o[f].style.display = ""
				}
			}
			if (! (g && g.area)) {
				k[0] = new Option($CLTMSG.CC5802, 1000)
			}
			for (var j = 0, l = h.length; j < l; j++) {
				var n = h[j]["value"];
				var p = h[j]["text"];
				if (p && n) {
					k[k.length] = new Option(p, n)
				}
			}
		};
		b.loadArea = function() {
			if (!this.is3level) {
				return false
			}
			var g = this.areaDom.options;
			var h = this.areaDisplay;
			var f = this.cache;
			while (g.length) {
				this.areaDom.remove(0)
			}
			var j = this;
			if (!f[j.provCode + "_" + j.cityCode]) {
				App.doRequest({
					province: this.provDom.value,
					city: this.cityDom.value
				},
				"/person/aj_getarea.php",
				function(k) {
					b.displayarea(k, g, h, j.noLimit);
					f[j.provCode + "_" + j.cityCode] = k
				},
				function() {})
			} else {
				b.displayarea(this.cache[this.provCode + "_" + this.cityCode], g, h, j.noLimit)
			}
		};
		b.loadNewData = function(f, g) {
			this.provCode = f;
			this.cityCode = g;
			this.loadProv();
			this.loadCity();
			if (this.is3level) {
				this.loadArea()
			}
		}
	})(App.ProvinceAndCity.prototype)
})();
Sina.pkg("Utils.Io");
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
		function(f, h, g) {
			if (h == "") {
				return
			}
			a[h] = g || ""
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
	serialize: function(f) {
		var a = [];
		for (var b in f) {
			if (f[b] == null || f[b] == "") {
				a.push(b + "=")
			} else {
				a.push(b + "=" + f[b])
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
Core.String.encodeDoubleByte = function(a) {
	if (typeof a != "string") {
		return a
	}
	return encodeURIComponent(a)
};
Utils.Io.Ajax = {
	createRequest: function() {
		var f = null;
		try {
			f = new XMLHttpRequest()
		} catch(b) {
			try {
				f = new ActiveXObject("Msxml2.XMLHTTP")
			} catch(g) {
				try {
					f = ActiveXObject("Microsoft.XMLHTTP")
				} catch(a) {}
			}
		}
		if (f == null) {
			$Debug.error("<b>create request failed</b>", {
				html: true
			})
		} else {
			return f
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
		if (this.rand != false) {
			_url.setParam("rnd", Math.random())
		}
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
						if (Core.Base.detect.$IE) {
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
			return request
		} catch(e) {
			option.onException(e.message, _url);
			return false
		}
	}
};
Core.String.byteLength = function(b) {
	if (typeof b == "undefined") {
		return 0
	}
	var a = b.match(/[^\x00-\x80]/g);
	return (b.length + (!a ? 0: a.length))
};
Core.Events.fireEvent = function(b, f) {
	b = $E(b) || b;
	if ($IE) {
		b.fireEvent("on" + f)
	} else {
		var a = document.createEvent("HTMLEvents");
		a.initEvent(f, true, true);
		b.dispatchEvent(a)
	}
};
Sina.pkg("Core.Class");
Core.Class.extend = function(a, f) {
	for (var b in f) {
		a[b] = f[b]
	}
	return a
};
App.enterSubmit = function(options) {
	options = Core.Class.extend({
		parent: document
	},
	options);
	var _p = $E(options.parent);
	var _checkEnter = function() {
		var _e = Core.Events.getEvent();
		var _k = _e.keyCode;
		var _act = this.getAttribute("act") || options.action || null;
		if (_k === 13 && _act) {
			try {
				if (typeof _act === "string") {
					eval("(" + _act + ")();")
				} else {
					if (typeof _act === "function") {
						_act()
					}
				}
			} catch(e) {}
		}
	};
	if (_p) {
		var els = _p.getElementsByTagName("input");
		for (var i = 0, l = els.length; i < l; i++) {
			var cur = els[i];
			var _t = cur.getAttribute("type").toLowerCase();
			if (_t === "text" || _t === "password" || _t === "checkbox") {
				if (cur.getAttribute("passenter") === "1") {
					continue
				}
				Core.Events.addEvent(cur, _checkEnter.bind2(cur), "keydown")
			}
		}
	}
};
Core.Dom.addHTML = function(a, b) {
	a.insertAdjacentHTML("BeforeEnd", b)
};
if (!$IE) {
	Core.Dom.addHTML = function(b, f) {
		var g = b.ownerDocument.createRange();
		g.setStartBefore(b);
		var a = g.createContextualFragment(f);
		b.appendChild(a)
	}
}
App.fixElement = {
	init: function(f) {
		var b = $E("mod_login_tip");
		if (!b) {
			var a = '<div class="errorLayer" id="mod_login_tip" style="visibility:hidden">    <div class="top"></div>       <div class="mid">        <div class="close" onclick="App.fixElement.hidden()" id="mod_login_close">x</div>           <div class="conn">             <p class="bigtxt" id="mod_login_title"></p>                <span class="stxt" id="mod_login_content" style="padding:0px;"></span>           </div>       </div>       <div class="bot"></div>   </div>   ';
			if (f) {
				f.innerHTML = a
			} else {
				Core.Dom.addHTML((document.body), a)
			}
		}
		b = $E("mod_login_tip");
		this.element = b
	},
	setHTML: function(f, b, a) {
		this.init($E(a.wrap));
		$E("mod_login_title").innerHTML = f || "";
		if (b) {
			$E("mod_login_content").innerHTML = b;
			$E("mod_login_content").style.display = ""
		} else {
			$E("mod_login_content").style.display = "none"
		}
		this.fixPostion(a || {});
		this.show()
	},
	fixPostion: function(h) {
		var a = h.offsetX || 0;
		var j = h.offsetY || 0;
		var f = $E(h.ref);
		var g = this.element;
		var b = Core.Dom.getXY(f);
		g.style.position = "absolute";
		if (!h.wrap) {
			g.style.left = (b[0] + a) + "px";
			g.style.top = (b[1] + j - g.offsetHeight) + "px"
		} else {
			g.style.marginTop = ( - g.offsetHeight + j) + "px";
			g.style.marginLeft = (a) + "px"
		}
		g.style.zIndex = h.zIndex || 10;
		return g
	},
	show: function() {
		this.element && (this.element.style.visibility = "visible");
		if ($E("mod_login_title")) {
			$E("mod_login_title").className = "bigtxt"
		}
	},
	hidden: function() {
		this.element = this.element || $E("mod_login_tip");
		this.element && (this.element.style.visibility = "hidden")
	}
};
Sina.pkg("Utils.Cookie");
Utils.Cookie.getCookie = function(a) {
	a = a.replace(/([\.\[\]\$])/g, "\\$1");
	var f = new RegExp(a + "=([^;]*)?;", "i");
	var g = document.cookie + ";";
	var b = g.match(f);
	if (b) {
		return b[1] || ""
	} else {
		return ""
	}
};
Utils.Cookie.setCookie = function(b, j, f, m, h, a) {
	var k = [];
	k.push(b + "=" + escape(j));
	if (f) {
		var l = new Date();
		var g = l.getTime() + f * 3600000;
		l.setTime(g);
		k.push("expires=" + l.toGMTString())
	}
	if (m) {
		k.push("path=" + m)
	}
	if (h) {
		k.push("domain=" + h)
	}
	if (a) {
		k.push(a)
	}
	document.cookie = k.join(";")
};
Utils.Cookie.deleteCookie = function(a) {
	document.cookie = a + "=;expires=Fri, 31 Dec 1999 23:59:59 GMT;"
};
App.setUsername = function(f) {
	var b = $E(f);
	var a = "";
	if (b) {
		if (b.value == $CLTMSG.R01008 || b.value == $CLTMSG.CR0001) {
			a = Utils.Cookie.getCookie("un");
			if (a) {
				b.value = unescape(a);
				return true
			}
		}
	}
	return false
};
window.sinaSSOConfig = {
	feedBackUrl: "http://" + window.location.hostname + "/ajaxlogin.php",
	service: "miniblog",
	domain: "weibo.com",
	framelogin: "1",
	pageCharset: "utf-8",
	isCheckLoginState: false,
	customLoginCallBack: function() {},
	customUpdateCookieCallBack: function() {},
	entry: "weibo"
};
App.initLoginInput = function(a, b) {
	if (a) { (function(f, g, h) {
			g.style.color = "#999999";
			g.alt = g.title = f;
			if (!h) {
				g.value = f
			}
			if (!g.binded) {
				Core.Events.addEvent(g,
				function() {
					g.style.color = "#333333";
					if (g.value == f) {
						g.value = ""
					}
				},
				"focus");
				Core.Events.addEvent(g,
				function() {
					g.style.color = "#999999";
					if (g.value == "") {
						g.value = f;
						return false
					}
					try {
						if (window.sinaSSOController && window.sinaSSOController.getServerTime) {
							window.sinaSSOController.getServerTime(g.value)
						}
					} catch(j) {}
				},
				"blur");
				a.binded = true
			}
		})((b ? $SYSMSG[b] : $CLTMSG.R01008), a, a.value)
	}
	if (a && (Core.String.trim(a.value) == "" || a.value == ((b ? $SYSMSG[b] : $CLTMSG.R01008)))) {
		App.setUsername(a)
	}
};
App.LoginAction = function(l) {
	var k = Core.String.trim(l.name);
	var a = Core.String.trim(l.pwd);
	var g = l.remb ? "7": "0";
	var q = Core.String.trim(l.door);
	var p = Core.String.trim(l.shield);
	if (!k) {
		l.error($CLTMSG.CL0801);
		return
	} else {
		if (!a) {
			l.error($CLTMSG.CL0802);
			return
		}
	}
	var o = function() {
		var j = window.sinaSSOController;
		j.useTicket = true;
		j.useticket = 1;
		if (q) {
			j.loginExtraQuery.door = q
		}
		if (p) {
			j.loginExtraQuery.vsnf = 1;
			j.loginExtraQuery.vsnval = p
		}
		j.customLoginCallBack = function(s) {
			if (s.result) {
				j.customLoginCallBack = function() {}; ! App.__no_login_name__ && Utils.Cookie.setCookie("un", k, 240, "/", "weibo.com");
				l.succ()
			} else {
				l.error(s.reason, s.errno);
				a.value = ""
			}
			j.customLoginCallBack = function() {};
			j = null
		};
		try {
			j.setLoginType(2);
			j.customInit = function() {
				j.setLoginType(2)
			}
		} catch(h) {}
		setTimeout(function() {
			j.login(k, a, g)
		},
		100)
	};
	if (typeof window.sinaSSOController != "undefined") {
		sinaSSOController.loginExtraQuery.ssosimplelogin = 1;
		o()
	} else {
		var n = document,
		b = n.createElement("script"),
		f = n.body,
		r = false;
		b.type = "text/javascript";
		b.charset = "UTF-8";
		b.src = scope.$BASECSS + "miniblog/static/js/sso.js";
		b.onload = b.onreadystatechange = function() {
			if (!r && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				r = true;
				b.onload = b.onreadystatechange = null;
				setTimeout(o, 1000)
			}
		};
		try {
			f.appendChild(b)
		} catch(m) {}
	}
};
App.setPassword = function(g, b) {
	var a = $E(g);
	var f = $E(b);
	if (a) {
		if (a.value == "") {
			a.style.display = "none";
			f.style.display = "";
			f.value = $SYSMSG.M00902
		}
	}
	Core.Events.addEvent(f,
	function() {
		f.style.display = "none";
		a.style.display = "";
		a.focus();
		return false
	},
	"focus");
	Core.Events.addEvent(a,
	function() {
		if (a.value == "") {
			if (a.tagName == "INPUT" && (a.type == "password" || a.getAttribute("type") == "password")) {
				a.style.display = "none";
				f.value = $SYSMSG.M00902;
				f.style.display = "";
				Core.Events.fireEvent(f, "blur")
			}
		}
		return false
	},
	"blur");
	return false
}; (function(g) {
	var h = [{
		tagName: "SPAN",
		attributes: {
			"class": "zhuolu_isnote",
			id: "box",
			style: "width: 170px; position: absolute; z-index: 251; top: 73px; left: 320px;"
		}
	}];
	var a = new App.Builder(h);
	a.box = a.domList.box;
	a.box.style.display = "none";
	a.box.style.position = "absolute";
	a.box.style.zIndex = 1251;
	var b = '<span class="iswhat isok"><img class="tipicon tip3" src="' + scope.$BASEIMG + 'style/images/common/transparent.gif" alt="" title=""></span>';
	var f = '<span class="iswhat iserro"><img class="tipicon tip2" src="' + scope.$BASEIMG + 'style/images/common/transparent.gif" alt="" title="" /><em>${error}</em></span>';
	g.checkFormUI4 = function(k, j, n, l) {
		if (n.errorKey && n.errorKey !== k && j) {
			return false
		} else {
			try {
				if (j) {
					n.errorKey = false;
					l.style.display = "";
					l.innerHTML = b;
					if (n.value !== undefined && (!n.value.length || n.noRightIcon)) {
						l.style.display = "none";
						return false
					}
				} else {
					n.errorKey = k;
					l.style.display = "";
					l.innerHTML = f.replace("${error}", $SYSMSG[k])
				}
			} catch(m) {}
		}
	};
	g.bindFormTips4 = function(l) {
		document.body.appendChild(a.box);
		for (var k = 0, j = l.length; k < j; k += 1) { (function(m) {
				Core.Events.addEvent(l[m]["el"],
				function() {
					var o = l[m]["el"].parentNode;
					var p = Core.Dom.getXY(o);
					if (!l[m]["el"].value.length && l[m]["key"] && $SYSMSG[l[m]["key"]]) {
						a.domList.box.innerHTML = "<em>" + $SYSMSG[l[m]["key"]] + "</em>";
						a.box.style.top = (p[1] + 10) + "px";
						var n = parseInt(o.getAttribute("positionLeft")) || ($IE ? 7: 9);
						if (n) {
							a.box.style.left = p[0] + o.offsetWidth + n + "px"
						} else {
							a.box.style.left = p[0] + o.offsetWidth + "px"
						}
						a.box.style.display = "";
						if (l[m]["errorPos"]) {
							l[m]["errorPos"].style.display = "none"
						}
					}
				},
				"focus");
				Core.Events.addEvent(l[m]["el"],
				function() {
					a.box.style.display = "none"
				},
				"blur")
			})(k)
		}
	}
})(App);
App.TextareaUtils = (function() {
	var a = {},
	b = document.selection;
	a.selectionStart = function(g) {
		if (!b) {
			return g.selectionStart
		}
		var l = b.createRange(),
		k,
		f,
		j = 0;
		var h = document.body.createTextRange();
		h.moveToElementText(g);
		for (j; h.compareEndPoints("StartToStart", l) < 0; j++) {
			h.moveStart("character", 1)
		}
		return j
	};
	a.selectionBefore = function(f) {
		return f.value.slice(0, a.selectionStart(f))
	};
	a.selectText = function(f, g, h) {
		f.focus();
		if (!b) {
			f.setSelectionRange(g, h);
			return
		}
		var j = f.createTextRange();
		j.collapse(1);
		j.moveStart("character", g);
		j.moveEnd("character", h - g);
		j.select()
	};
	a.insertText = function(h, g, k, j) {
		h.focus();
		j = j || 0;
		if (!b) {
			var l = h.value,
			n = k - j,
			f = n + g.length;
			h.value = l.slice(0, n) + g + l.slice(k, l.length);
			a.selectText(h, f, f);
			return
		}
		var m = b.createRange();
		m.moveStart("character", -j);
		m.text = g
	};
	a.getCursorPos = function(j) {
		var h = 0;
		if ($IE) {
			j.focus();
			var f = null;
			f = b.createRange();
			var g = f.duplicate();
			g.moveToElementText(j);
			g.setEndPoint("EndToEnd", f);
			j.selectionStart = g.text.length - f.text.length;
			j.selectionEnd = j.selectionStart + f.text.length;
			h = j.selectionStart
		} else {
			if (j.selectionStart || j.selectionStart == "0") {
				h = j.selectionStart
			}
		}
		return h
	};
	a.getSelectedText = function(g) {
		var h = "";
		var f = function(j) {
			if (j.selectionStart != undefined && j.selectionEnd != undefined) {
				return j.value.substring(j.selectionStart, j.selectionEnd)
			} else {
				return ""
			}
		};
		if (window.getSelection) {
			h = f(g)
		} else {
			h = b.createRange().text
		}
		return h
	};
	a.setCursor = function(h, j, g) {
		j = j == null ? h.value.length: j;
		g = g == null ? 0: g;
		h.focus();
		if (h.createTextRange) {
			var f = h.createTextRange();
			f.move("character", j);
			f.moveEnd("character", g);
			f.select()
		} else {
			h.setSelectionRange(j, j + g)
		}
	};
	a.unCoverInsertText = function(j, l, h) {
		h = (h == null) ? {}: h;
		h.rcs = h.rcs == null ? j.value.length: h.rcs * 1;
		h.rccl = h.rccl == null ? 0: h.rccl * 1;
		var k = j.value,
		f = k.slice(0, h.rcs),
		g = k.slice(h.rcs + h.rccl, k == "" ? 0: k.length);
		j.value = f + l + g;
		this.setCursor(j, h.rcs + (l == null ? 0: l.length))
	};
	return a
})(); (function() {
	var a = function(f, b) {
		var g;
		try {
			if (typeof b != "undefined") {
				for (g in f) {
					if (b[g] != null) {
						f[g] = b[g]
					}
				}
			}
		} finally {
			g = null;
			return f
		}
	};
	Core.Base.parseParam = a
})();
Utils.Io.JsLoad = {}; (function() {
	function a(m, j) {
		b(m, j);
		var l = m.urls;
		var h,
		g = l.length;
		for (h = 0; h < g; h++) {
			var k = $C("script");
			k.src = l[h].url;
			k.charset = l[h].charset;
			k[Core.Base.detect.$IE ? "onreadystatechange": "onload"] = function() {
				if (Core.Base.detect.$MOZ || this.readyState.toLowerCase() == "complete" || this.readyState.toLowerCase() == "loaded") {
					j.script_loaded_num++
				}
			};
			document.getElementsByTagName("head")[0].appendChild(k)
		}
	}
	function b(o, k) {
		var n = o.urls;
		var q = o.GET;
		var l,
		m = n.length;
		var p,
		h,
		g,
		j;
		for (l = 0; l < m; l++) {
			j = parseInt(Math.random() * 100000000);
			h = new Utils.Url(n[l].url);
			for (p in q) {
				if (o.noencode == true) {
					h.setParam(p, q[p])
				} else {
					h.setParam(p, Core.String.encodeDoubleByte(q[p]))
				}
			}
			g = h.getParam("varname") || "requestId_" + j;
			if (o.noreturn != true) {
				h.setParam("varname", g)
			}
			k.script_var_arr.push(g);
			n[l].url = h.toString();
			n[l].charset = n[l].charset || o.charset
		}
	}
	function f(j, k) {
		var h = {
			urls: [],
			charset: "utf-8",
			noreturn: false,
			noencode: true,
			timeout: -1,
			POST: {},
			GET: {},
			onComplete: null,
			onException: null
		};
		var g = {
			script_loaded_num: 0,
			is_timeout: false,
			is_loadcomplete: false,
			script_var_arr: []
		};
		h.urls = typeof j == "string" ? [{
			url: j
		}] : j;
		Core.Base.parseParam(h, k);
		a(h, g); (function() {
			if (h.noreturn == true && h.onComplete == null) {
				return
			}
			var l,
			m = [];
			if (g.script_loaded_num == h.urls.length) {
				g.is_loadcomplete = true;
				if (h.onComplete != null) {
					for (l = 0; l < g.script_var_arr.length; l++) {
						m.push(window[g.script_var_arr[l]])
					}
					if (g.script_var_arr.length < 2) {
						h.onComplete(m[0])
					} else {
						h.onComplete(m)
					}
				}
				return
			}
			if (g.is_timeout == true) {
				return
			}
			setTimeout(arguments.callee, 50)
		})();
		if (h.timeout > 0) {
			setTimeout(function() {
				if (g.is_loadcomplete != true) {
					if (h.onException != null) {
						h.onException()
					}
					g.is_timeout = true
				}
			},
			h.timeout)
		}
	}
	Utils.Io.JsLoad.request = function(g, h) {
		new f(g, h)
	}
})(); (function() {
	var j = scope.$lang;
	var b = scope.$lang;
	var g;
	var a;
	var f = false;
	App.changeLanguage = function(l, k) {
		if (b == l) {
			return false
		}
		b = l;
		var m = scope.$BASEJS + $CONFIG.$product + "/js/lang_" + l + ".js" + Boot.getJsVersion();
		Utils.Io.JsLoad.request(m, {
			onComplete: function() {
				if (k) {
					k();
					return false
				}
				if (scope.forbidrefreshD) {
					f = true;
					scope.forbidrefreshD.close()
				}
				f = false;
				setTimeout(function() {
					g && a && App.forbidrefresh(g, a)
				},
				10)
			},
			onException: function() {
				f = false
			},
			timeout: 30000
		})
	};
	var h = function(m, l) {
		var k = ['<a href="javascript:;" onClick="App.changeLanguage(\'' + l + "');return false;\">", m, "</a>"];
		if (l == b) {
			k[0] = k[2] = ""
		}
		return k.join("")
	};
	App.forbidrefresh = function(r, o, s) {
		s = s || {};
		g = r;
		a = o;
		if (!scope.forbidrefreshD) {
			var n = '<div class="auth_code">      <div class="auth_img"><img id="door2img" width="450" height="50" /><div style="text-align:right;padding:3px 0 0 0"><a id="changeyzm" href="javascript:void(0);" onclick="App.refreshCheckCode2();return false;">' + $CLTMSG.CC2103 + '</a></div></div>      <p class="tips">' + $CLTMSG.CC2104 + '</p>      <div class="code_input" id="yzm_input_div"><input id="yzm_input" type="text" value="" /></div>      <p id="yzm_error" class="errorTs error_color" style="display:none;">' + $CLTMSG.CC3301 + '</p>      <p class="btn"><a class="btn_normal" href="javascript:void(0);" id="auth_submit"><em>' + $CLTMSG.CC2105 + '</em></a> <a class="btn_normal" href="javascript:void(0);" id="door2Cancel"><em>' + $CLTMSG.CL0603 + '</em></a></p>   <div class="change_lan">' + h("中文简体 Simplified Chinese ", "zh") + '<em class="line">|</em>' + h("中文繁体 Traditional Chinese", "zh-tw") + '<em class="line">|</em>' + h("English", "en") + "</div>   </div>";
			scope.forbidrefreshD = new App.Dialog.BasicDialog($SYSMSG.MR0050, n, {
				zIndex: 1200,
				hidden: true,
				hiddClose: false,
				width: 510,
				mask_opacity: (s.mask_opacity || 15)
			});
			scope.forbidrefreshD.onClose = function() {
				scope.forbidrefreshD = null;
				if (!f && j) {
					App.changeLanguage(j,
					function() {})
				}
			};
			var p = Core.Events.addEvent;
			var q = Core.String.trim;
			var l = Core.Events.fireEvent;
			var k = {
				img_yzm2: $E("door2img"),
				btn_chgyzm: $E("changeyzm"),
				input_yzm: $E("yzm_input"),
				errinfo_yzm: $E("yzm_error"),
				submit: $E("auth_submit"),
				door2Cancel: $E("door2Cancel"),
				yzm_input_div: $E("yzm_input_div"),
				cb: function(t) {
					scope.forbidrefreshD.close();
					scope.forbidrefreshD = null;
					scope.doorretcode = t || "";
					r()
				},
				ecb: function(t) {
					if (t.code == "R40010" || t.code == "R40001") {
						App.refreshCheckCode2();
						k.errinfo_yzm.style.display = "";
						k.errinfo_yzm.innerHTML = $SYSMSG[t.code];
						return
					}
					if (t.code != "R01409") {
						scope.forbidrefreshD.close();
						scope.forbidrefreshD = null
					} else {
						App.refreshCheckCode2();
						k.errinfo_yzm.style.display = "";
						k.errinfo_yzm.innerHTML = $CLTMSG.CC3301
					}
				},
				url: o || "/attention/aj_addfollow.php"
			};
			k.errinfo_yzm.style.display = "none";
			var m = function() {
				k.door = encodeURIComponent(q(k.input_yzm.value)) || q(k.input_yzm.value);
				var t = {
					token: scope.$token,
					door: k.door
				};
				var u = $E("sinaId");
				if (u) {
					t.sinaId = u.value
				}
				App.doRequest(t, k.url, k.cb ||
				function() {},
				k.ecb ||
				function() {})
			};
			p(k.submit,
			function() {
				if (q(k.input_yzm.value) == "") {
					k.errinfo_yzm.style.display = "";
					k.errinfo_yzm.innerHTML = $SYSMSG.MR0050;
					return false
				}
				m();
				return false
			},
			"click");
			p(k.door2Cancel,
			function() {
				scope.forbidrefreshD.close();
				return false
			},
			"click");
			p(k.input_yzm,
			function() {
				k.errinfo_yzm.style.display = "none"
			},
			"focus");
			App.enterSubmit({
				parent: k.yzm_input_div,
				action: function() {
					l(k.submit, "click")
				}
			})
		}
		App.refreshCheckCode2();
		if ($E("yzm_error")) {
			$E("yzm_error").style.display = "none"
		}
		if ($E("yzm_input")) {
			$E("yzm_input").value = ""
		}
		scope.forbidrefreshD.show()
	};
	App.refreshCheckCode2 = function() {
		setTimeout(function() {
			var k = $E("sinaId");
			var l = "";
			if (k) {
				l = "&sinaId=" + k.value
			}
			if ($E("door2img")) {
				var m = "pin1.php";
				if (scope.$pageid == "registermail") {
					m = "pin.php"
				}
				if (scope.$pageid == "outreg") {
					$E("door2img").src = "/reg/pin.php?rule=1&r=" + ((new Date()).getTime()) + "&lang=" + scope.$lang
				} else {
					$E("door2img").src = "/signup/pincode/" + m + "?lang=" + b + "&r=" + ((new Date()).getTime()) + l + "&rule"
				}
				$E("door2img").style.display = ""
			}
		},
		100)
	}
})();
Core.String.leftB = function(f, a) {
	var b = f.replace(/\*/g, " ").replace(/[^\x00-\xff]/g, "**");
	f = f.slice(0, b.slice(0, a).replace(/\*\*/g, " ").replace(/\*/g, "").length);
	if (Core.String.byteLength(f) > a) {
		f = f.slice(0, f.length - 1)
	}
	return f
}; (function() {
	var l = navigator.userAgent.toLowerCase();
	var k = /msie/.test(l);
	var u = /gecko/.test(l);
	var o = /safari/.test(l);
	function r(w) {
		return typeof(w) == "string" ? q.document.getElementById(w) : w
	}
	var b = function(w) {
		w = w || document;
		return [Math.max(w.documentElement.scrollTop, w.body.scrollTop), Math.max(w.documentElement.scrollLeft, w.body.scrollLeft), Math.max(w.documentElement.scrollWidth, w.body.scrollWidth), Math.max(w.documentElement.scrollHeight, w.body.scrollHeight)]
	};
	var j = function(w, y) {
		switch (y) {
		case "opacity":
			var A = 100;
			try {
				A = w.filters["DXImageTransform.Microsoft.Alpha"].opacity
			} catch(z) {
				try {
					A = w.filters("alpha").opacity
				} catch(z) {}
			}
			return A;
		case "float":
			y = "styleFloat";
		default:
			var x = w.currentStyle ? w.currentStyle[y] : null;
			return (w.style[y] || x)
		}
	};
	if (u) {
		j = function(w, y) {
			if (y == "float") {
				y = "cssFloat"
			}
			try {
				var x = document.defaultView.getComputedStyle(w, "")
			} catch(z) {
				traceError(z)
			}
			return w.style[y] || x ? x[y] : null
		}
	}
	var s = function(x) {
		if ((x.parentNode == null || x.offsetParent == null || j(x, "display") == "none") && x != document.body) {
			return false
		}
		var w = null;
		var B = [];
		var y;
		var z = x.ownerDocument;
		y = x.getBoundingClientRect();
		var A = b(x.ownerDocument);
		return [y.left + A[1], y.top + A[0]];
		w = x.parentNode;
		while (w.tagName && !/^body|html$/i.test(w.tagName)) {
			if (j(w, "display").search(/^inline|table-row.*$/i)) {
				B[0] -= w.scrollLeft;
				B[1] -= w.scrollTop
			}
			w = w.parentNode
		}
		return B
	};
	if (u) {
		s = function(x) {
			if ((x.parentNode == null || x.offsetParent == null || j(x, "display") == "none") && x != document.body) {
				return false
			}
			var w = null;
			var B = [];
			var y;
			var z = x.ownerDocument;
			B = [x.offsetLeft, x.offsetTop];
			w = x.offsetParent;
			var A = j(x, "position") == "absolute";
			if (w != x) {
				while (w) {
					B[0] += w.offsetLeft;
					B[1] += w.offsetTop;
					if (o && !A && j(w, "position") == "absolute") {
						A = true
					}
					w = w.offsetParent
				}
			}
			if (o && A) {
				B[0] -= x.ownerDocument.body.offsetLeft;
				B[1] -= x.ownerDocument.body.offsetTop
			}
			w = x.parentNode;
			while (w.tagName && !/^body|html$/i.test(w.tagName)) {
				if (j(w, "display").search(/^inline|table-row.*$/i)) {
					B[0] -= w.scrollLeft;
					B[1] -= w.scrollTop
				}
				w = w.parentNode
			}
			return B
		}
	}
	var h = function() {
		return window.event
	};
	if (u) {
		h = function() {
			var x = arguments.callee.caller;
			var w;
			var y = 0;
			while (x != null && y < 40) {
				w = x.arguments[0];
				if (w && (w.constructor == Event || w.constructor == MouseEvent)) {
					return w
				}
				y++;
				x = x.caller
			}
			return w
		}
	}
	var t = function() {
		var w = h();
		w.cancelBubble = true;
		w.returnValue = false
	};
	if (u) {
		t = function() {
			var w = h();
			w.preventDefault();
			w.stopPropagation()
		}
	}
	Function.prototype.bind3 = function(y, x) {
		x = x == null ? [] : x;
		var w = this;
		return function() {
			w.apply(y, x)
		}
	};
	function g(A, z, y, w) {
		var A = r(A);
		if (typeof w == "undefined") {
			w = false
		}
		if (typeof y == "undefined") {
			y = "click"
		}
		if (A.addEventListener) {
			A.addEventListener(y, z, w);
			return true
		} else {
			if (A.attachEvent) {
				var x = A.attachEvent("on" + y, z);
				return true
			} else {
				A["on" + y] = z
			}
		}
	}
	var v;
	var a = parseInt(Math.random() * 100);
	var f = [];
	var m = -1;
	var n = "";
	var q = window;
	var p = {
		overfcolor: "#999",
		overbgcolor: "#e8f4fc",
		outfcolor: "#000000",
		outbgcolor: "",
		menuStatus: {
			"sina.com": true,
			"163.com": true,
			"qq.com": true,
			"126.com": true,
			"vip.sina.com": true,
			"sina.cn": true,
			"hotmail.com": true,
			"gmail.com": true,
			"sohu.com": true,
			"yahoo.cn": true,
			"139.com": true,
			"wo.com.cn": true,
			"189.cn": true
		}
	};
	p.createNode = function() {
		var w = q.document;
		var x = w.createElement("div");
		x.innerHTML = '<ul class="passCard" id="sinaNote" style="display:none;"></ul>';
		w.body.appendChild(x)
	};
	p.arrowKey = function(w) {
		if (w == 38) {
			if (m <= 0) {
				m = f.length
			}
			m--;
			p.selectLi(m)
		}
		if (w == 40) {
			if (m >= f.length - 1) {
				m = -1
			}
			m++;
			p.selectLi(m)
		}
	};
	p.showList = function(H) {
		n = "";
		var L = h().keyCode;
		if (L == 38 || L == 40) {
			p.arrowKey(L);
			return false
		}
		if (!r("sinaNote")) {
			p.createNode()
		}
		var z = r(H).value;
		z = z.replace(/\>/, "&gt;").replace(/\</, "&lt;");
		var y = {};
		var D = z.indexOf("@");
		var I = "";
		var C = "";
		if (D > -1) {
			I = z.substr(D + 1);
			C = z.substr(0, D)
		}
		f = [];
		m = 0;
		f[f.length] = "sinaNote_MenuItem_Title_" + a;
		for (var N in this.menuStatus) {
			this.menuStatus[N] = true;
			if (I != "" && I != N.substr(0, I.length)) {
				this.menuStatus[N] = false
			} else {
				f[f.length] = "sinaNote_MenuItem_" + N + "_" + a
			}
		}
		if (scope.$IE6) {
			var F = '<iframe style="width:100%;filter:alpha(opacity=0);-moz-opacity:0;height:240px;position:absolute;z-index:-1;border:0;"></iframe>'
		} else {
			var F = ""
		}
		F += '<li class="note">' + $CLTMSG.CC0301 + "</li>";
		F += '<li id="sinaNote_MenuItem_Title_' + a + '">' + z + "</li>";
		var K;
		for (var N in this.menuStatus) {
			if (this.menuStatus[N] == true) {
				if (C == "") {
					K = z + "@" + N
				} else {
					K = C + "@" + N
				}
				F += '<li id="sinaNote_MenuItem_' + N + "_" + a + '" title="' + K + '">' + K + "</li>"
			}
		}
		r("sinaNote").innerHTML = F;
		for (var G = 0; G < z.length; G++) {
			if (z.charCodeAt(G) < 160) {
				r("sinaNote").style.display = "";
				this.selectList(H)
			} else {
				this.hideList()
			}
		}
		var w = r(H);
		var x = r("sinaNote");
		var B = 0;
		var E = 0;
		var A;
		if (q != window) {
			A = s(window.frameElement);
			B = A[0];
			E = A[1]
		}
		var J = w.offsetWidth;
		if (J < 200) {
			J = 200
		}
		x.style.width = J - 2 + "px";
		var M = s(w);
		x.style.left = (M[0] - (k ? 2: -1) + B) + "px";
		x.style.top = (M[1] + w.offsetHeight - (k ? 2: -1) + E) + "px"
	};
	p.selectList = function(y) {
		var w = r("sinaNote").getElementsByTagName("li");
		for (var x = 1; x < w.length; x++) {
			w[1].style.backgroundColor = p.overbgcolor;
			w[1].style.color = p.outfcolor;
			w[x].onmousedown = function() {
				var z = this.innerHTML;
				if (z.indexOf($CLTMSG.CC0302) > -1) {
					var A = z.split("@");
					r(y).value = A[0]
				} else {
					r(y).value = this.innerHTML
				}
				t()
			};
			w[x].onmouseover = function() {
				if (x != 1) {
					w[1].style.backgroundColor = p.outbgcolor;
					w[1].style.color = p.overfcolor
				}
				this.style.backgroundColor = p.overbgcolor;
				this.style.color = p.outfcolor
			};
			w[x].onmouseout = function() {
				this.style.backgroundColor = p.outbgcolor;
				this.style.color = p.overfcolor;
				w[1].style.backgroundColor = p.overbgcolor;
				w[1].style.color = p.outfcolor
			}
		}
	};
	p.selectLi = function(w) {
		var y;
		if (r("sinaNote_MenuItem_Title_" + a)) {
			r("sinaNote_MenuItem_Title_" + a).style.backgroundColor = p.outbgcolor;
			r("sinaNote_MenuItem_Title_" + a).style.color = p.overfcolor;
			for (var x = 0; x < f.length; x++) {
				y = r(f[x]);
				y.style.backgroundColor = p.outbgcolor;
				y.style.color = p.overfcolor
			}
			r(f[w]).style.backgroundColor = p.overbgcolor;
			r(f[w]).style.color = p.outfcolor;
			n = r(f[w]).innerHTML
		}
	};
	p.hideList = function() {
		if (!r("sinaNote")) {
			p.createNode()
		}
		r("sinaNote").style.display = "none"
	};
	p.init = function(A, y, w, z) {
		for (var x in y) {
			this[x] = y[x]
		}
		g(document, p.hideList, "click");
		g(A, p.hideList, "blur");
		g(A, p.showList.bind3(this, [A]), "keyup");
		g(A,
		function(D) {
			var C = h().keyCode;
			if (C == 13 || C == 9) {
				if (n != "") {
					var B = n;
					if (B.indexOf($CLTMSG.CC0302) > -1) {
						var E = B.split("@");
						A.value = E[0]
					} else {
						A.value = n
					}
				}
				try {
					if (w != null && w.style.display !== "none") {
						w.focus()
					}
				} catch(D) {}
				t()
			}
		},
		"keydown");
		if (z) {
			q = z
		}
	};
	window.passcardOBJ = p
})();
var swfobject = function() {
	var aq = "undefined",
	aD = "object",
	ab = "Shockwave Flash",
	X = "ShockwaveFlash.ShockwaveFlash",
	aE = "application/x-shockwave-flash",
	ac = "SWFObjectExprInst",
	ax = "onreadystatechange",
	af = window,
	aL = document,
	aB = navigator,
	aa = false,
	Z = [aN],
	aG = [],
	ag = [],
	al = [],
	aJ,
	ad,
	ap,
	at,
	ak = false,
	aU = false,
	aH,
	an,
	aI = true,
	ah = function() {
		var a = typeof aL.getElementById != aq && typeof aL.getElementsByTagName != aq && typeof aL.createElement != aq,
		h = aB.userAgent.toLowerCase(),
		f = aB.platform.toLowerCase(),
		l = f ? /win/.test(f) : /win/.test(h),
		n = f ? /mac/.test(f) : /mac/.test(h),
		k = /webkit/.test(h) ? parseFloat(h.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
		g = !+"\v1",
		j = [0, 0, 0],
		o = null;
		if (typeof aB.plugins != aq && typeof aB.plugins[ab] == aD) {
			o = aB.plugins[ab].description;
			if (o && !(typeof aB.mimeTypes != aq && aB.mimeTypes[aE] && !aB.mimeTypes[aE].enabledPlugin)) {
				aa = true;
				g = false;
				o = o.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
				j[0] = parseInt(o.replace(/^(.*)\..*$/, "$1"), 10);
				j[1] = parseInt(o.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
				j[2] = /[a-zA-Z]/.test(o) ? parseInt(o.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
			}
		} else {
			if (typeof af.ActiveXObject != aq) {
				try {
					var m = new ActiveXObject(X);
					if (m) {
						o = m.GetVariable("$version");
						if (o) {
							g = true;
							o = o.split(" ")[1].split(",");
							j = [parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10)]
						}
					}
				} catch(b) {}
			}
		}
		return {
			w3: a,
			pv: j,
			wk: k,
			ie: g,
			win: l,
			mac: n
		}
	} (),
	aK = function() {
		if (!ah.w3) {
			return
		}
		if ((typeof aL.readyState != aq && aL.readyState == "complete") || (typeof aL.readyState == aq && (aL.getElementsByTagName("body")[0] || aL.body))) {
			aP()
		}
		if (!ak) {
			if (typeof aL.addEventListener != aq) {
				aL.addEventListener("DOMContentLoaded", aP, false)
			}
			if (ah.ie && ah.win) {
				aL.attachEvent(ax,
				function() {
					if (aL.readyState == "complete") {
						aL.detachEvent(ax, arguments.callee);
						aP()
					}
				});
				if (af == top) { (function() {
						if (ak) {
							return
						}
						try {
							aL.documentElement.doScroll("left")
						} catch(a) {
							setTimeout(arguments.callee, 0);
							return
						}
						aP()
					})()
				}
			}
			if (ah.wk) { (function() {
					if (ak) {
						return
					}
					if (!/loaded|complete/.test(aL.readyState)) {
						setTimeout(arguments.callee, 0);
						return
					}
					aP()
				})()
			}
			aC(aP)
		}
	} ();
	function aP() {
		if (ak) {
			return
		}
		try {
			var b = aL.getElementsByTagName("body")[0].appendChild(ar("span"));
			b.parentNode.removeChild(b)
		} catch(a) {
			return
		}
		ak = true;
		var g = Z.length;
		for (var f = 0; f < g; f++) {
			Z[f]()
		}
	}
	function aj(a) {
		if (ak) {
			a()
		} else {
			Z[Z.length] = a
		}
	}
	function aC(a) {
		if (typeof af.addEventListener != aq) {
			af.addEventListener("load", a, false)
		} else {
			if (typeof aL.addEventListener != aq) {
				aL.addEventListener("load", a, false)
			} else {
				if (typeof af.attachEvent != aq) {
					aM(af, "onload", a)
				} else {
					if (typeof af.onload == "function") {
						var b = af.onload;
						af.onload = function() {
							b();
							a()
						}
					} else {
						af.onload = a
					}
				}
			}
		}
	}
	function aN() {
		if (aa) {
			Y()
		} else {
			am()
		}
	}
	function Y() {
		var g = aL.getElementsByTagName("body")[0];
		var b = ar(aD);
		b.setAttribute("type", aE);
		var a = g.appendChild(b);
		if (a) {
			var f = 0; (function() {
				if (typeof a.GetVariable != aq) {
					var h = a.GetVariable("$version");
					if (h) {
						h = h.split(" ")[1].split(",");
						ah.pv = [parseInt(h[0], 10), parseInt(h[1], 10), parseInt(h[2], 10)]
					}
				} else {
					if (f < 10) {
						f++;
						setTimeout(arguments.callee, 10);
						return
					}
				}
				g.removeChild(b);
				a = null;
				am()
			})()
		} else {
			am()
		}
	}
	function am() {
		var k = aG.length;
		if (k > 0) {
			for (var l = 0; l < k; l++) {
				var f = aG[l].id;
				var p = aG[l].callbackFn;
				var a = {
					success: false,
					id: f
				};
				if (ah.pv[0] > 0) {
					var m = aS(f);
					if (m) {
						if (ao(aG[l].swfVersion) && !(ah.wk && ah.wk < 312)) {
							ay(f, true);
							if (p) {
								a.success = true;
								a.ref = av(f);
								p(a)
							}
						} else {
							if (aG[l].expressInstall && au()) {
								var h = {};
								h.data = aG[l].expressInstall;
								h.width = m.getAttribute("width") || "0";
								h.height = m.getAttribute("height") || "0";
								if (m.getAttribute("class")) {
									h.styleclass = m.getAttribute("class")
								}
								if (m.getAttribute("align")) {
									h.align = m.getAttribute("align")
								}
								var j = {};
								var g = m.getElementsByTagName("param");
								var o = g.length;
								for (var n = 0; n < o; n++) {
									if (g[n].getAttribute("name").toLowerCase() != "movie") {
										j[g[n].getAttribute("name")] = g[n].getAttribute("value")
									}
								}
								ae(h, j, f, p)
							} else {
								aF(m);
								if (p) {
									p(a)
								}
							}
						}
					}
				} else {
					ay(f, true);
					if (p) {
						var b = av(f);
						if (b && typeof b.SetVariable != aq) {
							a.success = true;
							a.ref = b
						}
						p(a)
					}
				}
			}
		}
	}
	function av(b) {
		var g = null;
		var f = aS(b);
		if (f && f.nodeName == "OBJECT") {
			if (typeof f.SetVariable != aq) {
				g = f
			} else {
				var a = f.getElementsByTagName(aD)[0];
				if (a) {
					g = a
				}
			}
		}
		return g
	}
	function au() {
		return ! aU && ao("6.0.65") && (ah.win || ah.mac) && !(ah.wk && ah.wk < 312)
	}
	function ae(j, g, l, h) {
		aU = true;
		ap = h || null;
		at = {
			success: false,
			id: l
		};
		var a = aS(l);
		if (a) {
			if (a.nodeName == "OBJECT") {
				aJ = aO(a);
				ad = null
			} else {
				aJ = a;
				ad = l
			}
			j.id = ac;
			if (typeof j.width == aq || (!/%$/.test(j.width) && parseInt(j.width, 10) < 310)) {
				j.width = "310"
			}
			if (typeof j.height == aq || (!/%$/.test(j.height) && parseInt(j.height, 10) < 137)) {
				j.height = "137"
			}
			aL.title = aL.title.slice(0, 47) + " - Flash Player Installation";
			var b = ah.ie && ah.win ? "ActiveX": "PlugIn",
			f = "MMredirectURL=" + af.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + b + "&MMdoctitle=" + aL.title;
			if (typeof g.flashvars != aq) {
				g.flashvars += "&" + f
			} else {
				g.flashvars = f
			}
			if (ah.ie && ah.win && a.readyState != 4) {
				var k = ar("div");
				l += "SWFObjectNew";
				k.setAttribute("id", l);
				a.parentNode.insertBefore(k, a);
				a.style.display = "none"; (function() {
					if (a.readyState == 4) {
						a.parentNode.removeChild(a)
					} else {
						setTimeout(arguments.callee, 10)
					}
				})()
			}
			aA(j, g, l)
		}
	}
	function aF(a) {
		if (ah.ie && ah.win && a.readyState != 4) {
			var b = ar("div");
			a.parentNode.insertBefore(b, a);
			b.parentNode.replaceChild(aO(a), b);
			a.style.display = "none"; (function() {
				if (a.readyState == 4) {
					a.parentNode.removeChild(a)
				} else {
					setTimeout(arguments.callee, 10)
				}
			})()
		} else {
			a.parentNode.replaceChild(aO(a), a)
		}
	}
	function aO(b) {
		var g = ar("div");
		if (ah.win && ah.ie) {
			g.innerHTML = b.innerHTML
		} else {
			var h = b.getElementsByTagName(aD)[0];
			if (h) {
				var a = h.childNodes;
				if (a) {
					var j = a.length;
					for (var f = 0; f < j; f++) {
						if (! (a[f].nodeType == 1 && a[f].nodeName == "PARAM") && !(a[f].nodeType == 8)) {
							g.appendChild(a[f].cloneNode(true))
						}
					}
				}
			}
		}
		return g
	}
	function aA(h, k, f) {
		var g,
		a = aS(f);
		if (ah.wk && ah.wk < 312) {
			return g
		}
		if (a) {
			if (typeof h.id == aq) {
				h.id = f
			}
			if (ah.ie && ah.win) {
				var j = "";
				for (var m in h) {
					if (h[m] != Object.prototype[m]) {
						if (m.toLowerCase() == "data") {
							k.movie = h[m]
						} else {
							if (m.toLowerCase() == "styleclass") {
								j += ' class="' + h[m] + '"'
							} else {
								if (m.toLowerCase() != "classid") {
									j += " " + m + '="' + h[m] + '"'
								}
							}
						}
					}
				}
				var l = "";
				for (var n in k) {
					if (k[n] != Object.prototype[n]) {
						l += '<param name="' + n + '" value="' + k[n] + '" />'
					}
				}
				a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + j + ">" + l + "</object>";
				ag[ag.length] = h.id;
				g = aS(h.id)
			} else {
				var b = ar(aD);
				b.setAttribute("type", aE);
				for (var o in h) {
					if (h[o] != Object.prototype[o]) {
						if (o.toLowerCase() == "styleclass") {
							b.setAttribute("class", h[o])
						} else {
							if (o.toLowerCase() != "classid") {
								b.setAttribute(o, h[o])
							}
						}
					}
				}
				for (var p in k) {
					if (k[p] != Object.prototype[p] && p.toLowerCase() != "movie") {
						aQ(b, p, k[p])
					}
				}
				a.parentNode.replaceChild(b, a);
				g = b
			}
		}
		return g
	}
	function aQ(b, g, f) {
		var a = ar("param");
		a.setAttribute("name", g);
		a.setAttribute("value", f);
		b.appendChild(a)
	}
	function aw(a) {
		var b = aS(a);
		if (b && b.nodeName == "OBJECT") {
			if (ah.ie && ah.win) {
				b.style.display = "none"; (function() {
					if (b.readyState == 4) {
						aT(a)
					} else {
						setTimeout(arguments.callee, 10)
					}
				})()
			} else {
				b.parentNode.removeChild(b)
			}
		}
	}
	function aT(a) {
		var b = aS(a);
		if (b) {
			for (var f in b) {
				if (typeof b[f] == "function") {
					b[f] = null
				}
			}
			b.parentNode.removeChild(b)
		}
	}
	function aS(a) {
		var f = null;
		try {
			f = aL.getElementById(a)
		} catch(b) {}
		return f
	}
	function ar(a) {
		return aL.createElement(a)
	}
	function aM(a, f, b) {
		a.attachEvent(f, b);
		al[al.length] = [a, f, b]
	}
	function ao(a) {
		var b = ah.pv,
		f = a.split(".");
		f[0] = parseInt(f[0], 10);
		f[1] = parseInt(f[1], 10) || 0;
		f[2] = parseInt(f[2], 10) || 0;
		return (b[0] > f[0] || (b[0] == f[0] && b[1] > f[1]) || (b[0] == f[0] && b[1] == f[1] && b[2] >= f[2])) ? true: false
	}
	function az(b, j, a, f) {
		if (ah.ie && ah.mac) {
			return
		}
		var h = aL.getElementsByTagName("head")[0];
		if (!h) {
			return
		}
		var k = (a && typeof a == "string") ? a: "screen";
		if (f) {
			aH = null;
			an = null
		}
		if (!aH || an != k) {
			var g = ar("style");
			g.setAttribute("type", "text/css");
			g.setAttribute("media", k);
			aH = h.appendChild(g);
			if (ah.ie && ah.win && typeof aL.styleSheets != aq && aL.styleSheets.length > 0) {
				aH = aL.styleSheets[aL.styleSheets.length - 1]
			}
			an = k
		}
		if (ah.ie && ah.win) {
			if (aH && typeof aH.addRule == aD) {
				aH.addRule(b, j)
			}
		} else {
			if (aH && typeof aL.createTextNode != aq) {
				aH.appendChild(aL.createTextNode(b + " {" + j + "}"))
			}
		}
	}
	function ay(a, f) {
		if (!aI) {
			return
		}
		var b = f ? "visible": "hidden";
		if (ak && aS(a)) {
			aS(a).style.visibility = b
		} else {
			az("#" + a, "visibility:" + b)
		}
	}
	function ai(b) {
		var a = /[\\\"<>\.;]/;
		var f = a.exec(b) != null;
		return f && typeof encodeURIComponent != aq ? encodeURIComponent(b) : b
	}
	var aR = function() {
		if (ah.ie && ah.win) {
			window.attachEvent("onunload",
			function() {
				var a = al.length;
				for (var b = 0; b < a; b++) {
					al[b][0].detachEvent(al[b][1], al[b][2])
				}
				var g = ag.length;
				for (var f = 0; f < g; f++) {
					aw(ag[f])
				}
				for (var h in ah) {
					ah[h] = null
				}
				ah = null;
				for (var j in swfobject) {
					swfobject[j] = null
				}
				swfobject = null
			})
		}
	} ();
	return {
		registerObject: function(a, h, f, b) {
			if (ah.w3 && a && h) {
				var g = {};
				g.id = a;
				g.swfVersion = h;
				g.expressInstall = f;
				g.callbackFn = b;
				aG[aG.length] = g;
				ay(a, false)
			} else {
				if (b) {
					b({
						success: false,
						id: a
					})
				}
			}
		},
		getObjectById: function(a) {
			if (ah.w3) {
				return av(a)
			}
		},
		embedSWF: function(o, h, l, j, f, a, b, m, k, n) {
			var g = {
				success: false,
				id: h
			};
			if (ah.w3 && !(ah.wk && ah.wk < 312) && o && h && l && j && f) {
				ay(h, false);
				aj(function() {
					l += "";
					j += "";
					var u = {};
					if (k && typeof k === aD) {
						for (var s in k) {
							u[s] = k[s]
						}
					}
					u.data = o;
					u.width = l;
					u.height = j;
					var r = {};
					if (m && typeof m === aD) {
						for (var t in m) {
							r[t] = m[t]
						}
					}
					if (b && typeof b === aD) {
						for (var p in b) {
							if (typeof r.flashvars != aq) {
								r.flashvars += "&" + p + "=" + b[p]
							} else {
								r.flashvars = p + "=" + b[p]
							}
						}
					}
					if (ao(f)) {
						var q = aA(u, r, h);
						if (u.id == h) {
							ay(h, true)
						}
						g.success = true;
						g.ref = q
					} else {
						if (a && au()) {
							u.data = a;
							ae(u, r, h, n);
							return
						} else {
							ay(h, true)
						}
					}
					if (n) {
						n(g)
					}
				})
			} else {
				if (n) {
					n(g)
				}
			}
		},
		switchOffAutoHideShow: function() {
			aI = false
		},
		ua: ah,
		getFlashPlayerVersion: function() {
			return {
				major: ah.pv[0],
				minor: ah.pv[1],
				release: ah.pv[2]
			}
		},
		hasFlashPlayerVersion: ao,
		createSWF: function(a, b, f) {
			if (ah.w3) {
				return aA(a, b, f)
			} else {
				return undefined
			}
		},
		showExpressInstall: function(b, a, g, f) {
			if (ah.w3 && au()) {
				ae(b, a, g, f)
			}
		},
		removeSWF: function(a) {
			if (ah.w3) {
				aw(a)
			}
		},
		createCSS: function(b, a, f, g) {
			if (ah.w3) {
				az(b, a, f, g)
			}
		},
		addDomLoadEvent: aj,
		addLoadEvent: aC,
		getQueryParamValue: function(b) {
			var a = aL.location.search || aL.location.hash;
			if (a) {
				if (/\?/.test(a)) {
					a = a.split("?")[1]
				}
				if (b == null) {
					return ai(a)
				}
				var f = a.split("&");
				for (var g = 0; g < f.length; g++) {
					if (f[g].substring(0, f[g].indexOf("=")) == b) {
						return ai(f[g].substring((f[g].indexOf("=") + 1)))
					}
				}
			}
			return ""
		},
		expressInstallCallback: function() {
			if (aU) {
				var a = aS(ac);
				if (a && aJ) {
					a.parentNode.replaceChild(aJ, a);
					if (ad) {
						ay(ad, true);
						if (ah.ie && ah.win) {
							aJ.style.display = "block"
						}
					}
					if (ap) {
						ap(at)
					}
				}
				aU = false
			}
		}
	}
} (); (function(h) {
	var k = Core.Events.addEvent;
	function g(p) {
		var m = {};
		var o = p.split("&");
		var l = [];
		for (var n = 0; n < o.length; n++) {
			l = o[n].split("=");
			m[l[0]] = l[1]
		}
		return m
	}
	function b(l) {
		var n = [];
		for (var m in l) {
			if (l.hasOwnProperty(m)) {
				n.push(m + "=" + l[m])
			}
		}
		return n.join("&")
	}
	function a(n, l) {
		n = n || {};
		l = l || {};
		for (var m in l) {
			if (l.hasOwnProperty(m)) {
				n[m] = l[m]
			}
		}
		return n
	}
	function f(n, m, l) {
		var o,
		p = {};
		m = m || {};
		for (o in n) {
			p[o] = n[o];
			if (m[o] != null) {
				if (l) {
					if (n.hasOwnProperty[o]) {
						p[o] = m[o]
					}
				} else {
					p[o] = m[o]
				}
			}
		}
		return p
	}
	var j = function(l) {
		var m = f({
			imgurl: "/signup/pincode/pin1.php",
			usesso: false,
			door_p: null,
			door: null,
			door_img: null,
			door_change: null,
			door_playvoice: null,
			voice_swf: "http://account.weibo.com/sguide/code_play.swf",
			voice_service: "http://login.sina.com.cn/cgi/voicepin.php",
			voice_para: {
				p: "",
				r: ""
			}
		},
		l);
		var n = {
			init: function() {
				m.door_change && k(m.door_change, n.changeImg, "click")
			},
			getPinCode: function(q) {
				var p = q.split("?");
				var r = p[1];
				var o = {};
				if (!r) {
					return null
				} else {
					return g(r)
				}
			},
			show: function(o) {
				o && (o.style.display = "")
			},
			hid: function(o) {
				o && (o.style.display = "none")
			},
			checkVoiceCodeEnable: function() {
				var o = true;
				if (m.door_playvoice) {
					m.door_playvoice.style.display = o ? "": "none";
					n.voiceCodeEnable = o
				} else {
					n.voiceCodeEnable = false
				}
			},
			changeImg: function(o) {
				if (o) {
					Core.Events.stopEvent(o)
				}
				n.changeDoor();
				setTimeout(function() {
					m.door.focus()
				},
				10)
			},
			changeDoor: function() {
				var p = m.door_change;
				m.door_p && n.show(m.door_p);
				var q = ["r=" + ((new Date()).getTime()), "lang=" + scope.$lang];
				if ($E("sinaId")) {
					q.push("sinaId=" + $E("sinaId").value)
				}
				var o = "";
				if (m.usesso && window.sinaSSOController && sinaSSOController.getPinCodeUrl) {
					o = sinaSSOController.getPinCodeUrl()
				} else {
					o = m.imgurl + "?" + q.join("&")
				}
				setTimeout(function() {
					m.door_img && (m.door_img.src = o)
				},
				10);
				var r = n.getPinCode(o);
				n.checkVoiceCodeEnable();
				n.loadVoiceSwf(r)
			},
			getVoiceUrl: function(p) {
				p = p || {};
				var o = a({},
				m.voice_para);
				o = f(o, p);
				o = b(o);
				return m.voice_service + "?" + o
			},
			loadVoiceSwf: function(t) {
				if (!n.voiceCodeEnable) {
					return
				}
				if (!t) {
					return
				}
				if (n.swf_id) {
					swfobject.removeSWF(n.swf_id)
				}
				var p = "";
				if (!n.swfcont) {
					n.swfcont = $C("span");
					m.door_img.parentNode.appendChild(n.swfcont)
				}
				var q = $C("span");
				var r = "door_voice_swf" + (new Date() - 0);
				q.id = r;
				n.swfcont.appendChild(q);
				var o = {
					quality: "high",
					allowScriptAccess: "always"
				};
				var s = {};
				s.url = n.getVoiceUrl(t);
				swfobject.embedSWF([m.voice_swf, Boot.getJsVersion()].join(""), r, "1", "1", "9.0.0", null, s, o);
				n.swf_id = r;
				if (!n.swf_event_added) {
					n.swf_event_added = true;
					Core.Events.addEvent(m.door_playvoice,
					function() {
						swfobject.getObjectById(n.swf_id).SetVariable("isPlay", "1");
						m.door.focus()
					},
					"click")
				}
			}
		};
		n.init();
		return n
	};
	return h.doorC = j
})(App); (function() {
	App.getMsg = function(msgCode, replace) {
		if (msgCode === undefined) {
			return ""
		}
		if (typeof(msgCode) == "object") {
			msgCode = msgCode.code
		}
		var msg = $SYSMSG[msgCode] || $CLTMSG[msgCode] || ("Error[" + msgCode + "]");
		if (replace) {
			var tmp = new Utils.Template(msg);
			return tmp.evaluate(replace)
		} else {
			return msg
		}
	};
	function setMask(z, hidden) {
		var _mask1 = document.getElementsByTagName("BODY")[0].appendChild($C($IE ? "iframe": "div"));
		var $w = window,
		$d = $w.document,
		$e = $d.documentElement || {};
		with(_mask1.style) {
			position = "absolute";
			backgroundColor = "#000";
			width = "100%";
			zIndex = parseInt(z) - 1;
			top = "0px";
			left = "0px"
		}
		Core.Dom.opacity(_mask1, 15);
		_mask1.style.height = Math.max($e.clientHeight, $e.scrollHeight, $e.offsetHeight, $d.body.scrollHeight, $d.body.offsetHeight) + "px";
		return _mask1
	}
	function setMiddle(_node) {
		var ow = _node.offsetWidth;
		var oh = _node.offsetHeight;
		var win_s = Core.System.winSize();
		var scroll_pos = Core.System.getScrollPos();
		var tx = (win_s.width - ow) / 2;
		var ty = scroll_pos[0] + (win_s.height - oh) / 2;
		_node.style.left = tx + "px";
		_node.style.top = (ty < 20 ? 20: ty) + "px"
	}
	function iniRegForm(rnd) {
		var _box = $E("mod_reg_information_box" + rnd);
		var _submit = $E("mod_reg_submit" + rnd);
		var _username = $E("mod_reg_username" + rnd);
		var _password = $E("mod_reg_password" + rnd);
		var _password2 = $E("mod_reg_password2" + rnd);
		var _door = $E("mod_reg_door" + rnd);
		var _after = $E("mod_reg_after" + rnd);
		var _red_username = $E("mod_red_reg_username" + rnd);
		var _red_password = $E("mod_red_reg_password" + rnd);
		var _red_password2 = $E("mod_red_reg_password2" + rnd);
		var _red_door = $E("mod_red_reg_door" + rnd);
		var _red_after = $E("mod_red_reg_after" + rnd);
		var _addEvent = Core.Events.addEvent;
		var _trim = Core.String.trim;
		var _html2json = App.htmlToJson;
		var _compjson = App.compareJson;
		var _checkMail = App.checkEml;
		var _alert = App.alert;
		var _removeEvent = Core.Events.removeEvent;
		var _oData = _html2json(_box);
		var popWin = null;
		var success = function(json) {};
		var error = function(json) {
			if (json) {
				if (!App.modCheckInfo.showError([json.code])) {
					_alert($SYSMSG[json.code])
				}
			} else {
				_alert($SYSMSG[json.code])
			}
		};
		var errorInput = function(input, red, code) {
			red.innerHTML = $SYSMSG[code];
			red.style.display = ""
		};
		var rightInput = function(input, red) {
			red.style.display = "none"
		};
		var checkFunction = {
			MR0001: function(el) {
				el.value = _trim(el.value);
				if (el.value) {
					return true
				} else {
					return false
				}
			},
			MR0002: function(el) {
				if (App.modCheckInfo.check(["MR0001"])) {
					if (_checkMail(el.value)) {
						return true
					} else {
						return false
					}
				} else {
					return true
				}
			},
			MR0007: function(el) {
				if (!_trim(el.value).length) {
					return true
				}
				if (App.modCheckInfo.check(["MR0001", "MR0002"])) {
					if (/^.+@(sina\.com|vip\.sina\.com|sina\.cn|2008\.sina\.com|my3ia\.sina\.com)$/i.test(el.value)) {
						return false
					} else {
						return true
					}
				} else {
					return true
				}
			},
			MR0005: function(el) {
				el.ajaxCheck = "1";
				if (App.modCheckInfo.check(["MR0001", "MR0002", "MR0004"])) {
					var _parm = {
						username: el.value
					};
					Utils.Io.Ajax.request("/signup/ami_check.php", {
						POST: _parm,
						onComplete: function(json) {
							if (json.code == "A00006") {
								el.ajaxCheck = "1"
							} else {
								el.ajaxCheck = "0"
							}
							checkFunction.MR0006(el);
							return true
						},
						onException: function(json) {
							return false
						},
						returnType: "json"
					});
					return true
				} else {
					return true
				}
			},
			MR0006: function(el) {
				if (el.ajaxCheck == "1") {
					App.modCheckInfo.hideError(["MR0006"]);
					return true
				} else {
					if (el.ajaxCheck === undefined) {
						App.modCheckInfo.hideError(["MR0006"]);
						return true
					} else {
						App.modCheckInfo.showError(["MR0006"]);
						return false
					}
				}
			},
			MR0014: function(el) {
				el.value = _trim(el.value);
				if (App.modCheckInfo.check(["MR0011"]) && App.modCheckInfo.check(["MR0013"])) {
					if (/^[0-9a-zA-z\._\-\?]{6,16}$/.test(el.value)) {
						return true
					} else {
						return false
					}
				} else {
					return true
				}
			},
			MR0011: function(el) {
				el.value = _trim(el.value);
				if (el.value.length < 6) {
					return false
				} else {
					return true
				}
			},
			MR0013: function(el) {
				el.value = _trim(el.value);
				if (el.value.length > 16) {
					return false
				} else {
					return true
				}
			},
			MR0020: function(el) {
				el.value = _trim(el.value);
				if (el.value == _trim(_password.value)) {
					return true
				} else {
					return false
				}
			},
			MR0050: function(el) {
				el.value = _trim(el.value);
				if (el.value.length > 0) {
					return true
				} else {
					return false
				}
			},
			MR0071: function(el) {
				if (el.checked) {
					return true
				}
				return false
			}
		};
		App.modCheckInfo = App.checkForm(App.checkFormUI4);
		App.modCheckInfo.add("MR0001", _username, _red_username, checkFunction.MR0001);
		App.modCheckInfo.add("MR0002", _username, _red_username, checkFunction.MR0002);
		App.modCheckInfo.add("MR0007", _username, _red_username, checkFunction.MR0007);
		App.modCheckInfo.add("MR0005", _username, _red_username, checkFunction.MR0005);
		App.modCheckInfo.add("MR0006", _username, _red_username, checkFunction.MR0006);
		App.modCheckInfo.add("MR0014", _password, _red_password, checkFunction.MR0014);
		App.modCheckInfo.add("MR0011", _password, _red_password, checkFunction.MR0011);
		App.modCheckInfo.add("MR0013", _password, _red_password, checkFunction.MR0013); ($E("reg_password2") || scope.$pageid !== "register") && App.modCheckInfo.add("MR0020", _password2, _red_password2, checkFunction.MR0020); ($E("door") || scope.$pageid !== "register") && App.modCheckInfo.add("MR0050", _door, _red_door, checkFunction.MR0050);
		App.modCheckInfo.add("MR0071", _after, _red_after, checkFunction.MR0071);
		App.bindFormTips4([{
			el: _username,
			key: "MR0003",
			errorPos: _red_username
		},
		{
			el: _password,
			key: "MR0012",
			errorPos: _red_password
		},
		{
			el: _password2,
			key: "MR0021",
			errorPos: _red_password2
		}]);
		App.modRegisterMethod = {};
		App.modRegisterMethod.submit = function() {
			if (App.modCheckInfo.check() && (_username.ajaxCheck == "1")) {
				setTimeout(function() {
					App.modRegisterMethod.rumor(success, error)
				},
				500)
			}
			return false
		};
		var _isNewCheckcode = false;
		App.modRegisterMethod.rumor = function(success, error) {
			if (typeof success != "function") {
				throw ("The publishRumor need a function as thrid parameter")
			}
			if (typeof error != "function") {
				throw ("The publishRumor need a function as fourth parameter")
			}
			var parameters = _html2json(_box);
			parameters.token = scope.$token;
			parameters.retcode = scope.doorretcode || "";
			parameters.r = window.location.href;
			parameters.regsrc = 4;
			scope.doorretcode = "";
			if (_compjson(parameters, _oData)) {
				success()
			} else {
				Utils.Io.Ajax.request("/signup/reg.php", {
					POST: parameters,
					onComplete: function(json) {
						if (json.code == "A00006") {
							success(json.data);
							oData = parameters;
							if (json.data) {
								window.location.replace(json.data)
							}
						} else {
							if (json.code == "M00004") {
								_alert({
									code: "R01438"
								})
							} else {
								if (json.code == "MR0050") {
									App.forbidrefresh(function() {
										Core.Events.fireEvent(_submit, "click")
									},
									"/signup/reg.php");
									return
								} else {
									if (json.code == "R01409") {
										_red_door.innerHTML = '<span class="iswhat iserro"><img class="tipicon tip2" src="' + scope.$BASEIMG + 'style/images/common/transparent.gif" alt="" title="" /><em>' + $SYSMSG[json.code] + "</em></span>";
										App.TextareaUtils.setCursor(_door);
										App.modRefreshCheckCode()
									} else {
										error(json)
									}
								}
							}
						}
						App.modRegisterOrLoginClose();
						_submit.className = "btnlogin1"
					},
					onException: function(json) {
						_addEvent(_submit, App.modRegisterMethod.submit, "click");
						error(json);
						_submit.className = "btnlogin1"
					},
					returnType: "json"
				});
				_submit.className = "btnlogin1 btnlogin1_load"
			}
		};
		_addEvent(_submit, App.modRegisterMethod.submit, "click");
		App.enterSubmit({
			parent: _box,
			action: function() {
				Core.Events.fireEvent(_submit, "click")
			}
		});
		passcardOBJ.init(_username, {
			overfcolor: "#999",
			overbgcolor: "#e8f4fc",
			outfcolor: "#000000",
			outbgcolor: ""
		},
		_password, window)
	}
	function changeDoorImg(imageNode) {
		if (imageNode) {
			var url = "";
			if (window.sinaSSOController && sinaSSOController.getPinCodeUrl) {
				url = sinaSSOController.getPinCodeUrl()
			} else {
				url = "/signup/pincode/pin1.php?r=" + ((new Date()).getTime()) + "&lang=" + scope.$lang
			}
			imageNode.src = url
		}
	}
	function iniLoginForm(rnd, cb) {
		var login_submit = $E("mod_login_submit" + rnd);
		var login_tip = $E("mod_login_tip" + rnd);
		var loginname = $E("mod_loginname" + rnd);
		var password = $E("mod_password" + rnd);
		var door = $E("mod_door" + rnd);
		var door_p = $E("door_p" + rnd);
		var door_img = $E("mod_door_img" + rnd);
		var door_playvoice = $E("mod_login_door_playvoice" + rnd);
		var shield = $E("mod_shield" + rnd);
		var isremember = $E("mod_isremember" + rnd);
		if (App.doorC) {
			var doorC = new App.doorC({
				usesso: true,
				door_p: door_p,
				door: door,
				door_img: door_img,
				door_change: null,
				door_playvoice: door_playvoice
			})
		}
		Core.Events.addEvent(shield,
		function() {
			if (shield.value == $CLTMSG.CL0702) {
				shield.value = ""
			}
		},
		"focus");
		Core.Events.addEvent(shield,
		function() {
			if (shield.value == "") {
				shield.value = $CLTMSG.CL0702
			}
		},
		"blur");
		Core.Events.addEvent(door_img,
		function() {
			doorC.changeImg()
		},
		"click");
		if (Utils.Cookie.getCookie("un")) {
			var dom = $C("A");
			var pNode = loginname.parentNode;
			var deleted = false;
			dom.onclick = function() {
				loginname.value = "";
				Utils.Cookie.setCookie("un", "", 0, "/", "weibo.com");
				Utils.Cookie.deleteCookie("un");
				App.__no_login_name__ = true;
				pNode.removeChild(dom);
				deleted = true;
				return false
			};
			dom.innerHTML = '<img  class="lgicon_del" title="#{title}" src="http://img.t.sinajs.cn/t3/style/images/common/transparent.gif">'.replace(/#\{title\}/, $CLTMSG.CD0185);
			dom.onmouseover = function() {
				this.style.cursor = "pointer"
			};
			pNode.appendChild(dom);
			Core.Events.addEvent(loginname,
			function() { ! deleted && pNode.removeChild(dom);
				deleted = true
			},
			"focus")
		}
		var disableClass = "btn_notclick";
		var enableClass = "btn_normal";
		var options = {
			zIndex: 1010,
			ref: loginname,
			wrap: login_tip,
			offsetX: 0,
			offsetY: 1
		};
		if (!$IE) {
			options.offsetY = 14
		}
		App.initLoginInput(loginname);
		if (cb && cb.initErrorTip) {
			App.fixElement.setHTML(cb.initErrorTip, "", options)
		}
		function checkForm(el, errStr) {
			if (!Core.String.trim(el.value) || (el.value == el.title && el.title)) {
				var oPassword = $E("mod_password_text" + rnd);
				if (oPassword && oPassword.style && oPassword.style.display !== "none") {
					oPassword.focus()
				}
				App.fixElement.setHTML(errStr, "", options);
				return false
			} else {
				App.fixElement.hidden()
			}
			return true
		}
		login_submit.onclick = function() {
			if (login_submit.className == disableClass) {
				return false
			}
			login_submit.className = enableClass;
			if (!checkForm(loginname, App.getMsg({
				code: "M00901"
			}))) {
				return false
			}
			if (!checkForm(password, App.getMsg({
				code: "M00902"
			}))) {
				return false
			}
			App.LoginAction({
				name: loginname.value,
				pwd: password.value,
				remb: isremember.checked,
				door: door.value,
				shield: shield.value,
				error: function(reason, errno) {
					var msg = "";
					if (errno == "4010") {
						reason = App.getMsg({
							code: "R01011"
						});
						msg = App.getMsg("R01010", {
							mail: loginname.value
						});
						App.fixElement.setHTML(reason, msg, options)
					} else {
						if (errno == "4049") {
							doorC.changeImg()
						} else {
							if (errno == "5024") {
								loginname.disabled = "disabled";
								password.disabled = "disabled";
								$E("shield_p").style.display = ""
							} else {
								if (errno == "5025") {
									loginname.disabled = "disabled";
									password.disabled = "disabled";
									$E("shield_p").style.display = "";
									App.fixElement.setHTML(reason, msg, options)
								} else {
									if (errno == "2070") {
										if (door_p.style.display == "none") {
											door_p.style.display = ""
										} else {
											App.fixElement.setHTML(reason, msg, options)
										}
										doorC.changeImg()
									} else {
										if (errno == "101") {
											reason = App.getMsg({
												code: "R11111"
											})
										} else {
											if (errno == "5") {
												reason = App.getMsg({
													code: "R11112"
												})
											}
										}
										App.fixElement.setHTML(reason, msg, options)
									}
								}
							}
						}
					}
				},
				succ: function() {
					Utils.Io.Ajax.request("/signup/aj_loginlog.php", {
						POST: {
							sinaId: $E("sinaId").value,
							from: window.location.href
						},
						onComplete: function(json) {
							try {} catch(exp2) {}
						},
						onException: function() {},
						returnType: "json"
					});
					App.sudaTrack("weibo_register_layerlogin");
					App.modRegisterOrLoginClose();
					if (cb) {
						scope.$uid = "123456";
						cb.func(cb.param)
					} else {
						location.reload()
					}
				}
			})
		};
		App.enterSubmit({
			parent: password.parentNode,
			action: function() {
				login_submit.onclick()
			}
		});
		passcardOBJ.init(loginname, {
			overfcolor: "#999",
			overbgcolor: "#e8f4fc",
			outfcolor: "#000000",
			outbgcolor: ""
		},
		$E("mod_password_text" + rnd), window)
	}
	App.modRegisterAndLogin = function(showType, titleKey, callBackFunction, loginInfoKey) {
		var regurl = /open\.weibo/.test(location.href) ? "http://weibo.com/reg.php": "/reg.php";
		regurl += "?lang=" + scope.$lang;
		var recoverurl = "http://login.sina.com.cn/cgi/getpwd/getpwd0.php?entry=sso";
		var regTitle = $CLTMSG.CY0124;
		var loginTitle = titleKey ? $CLTMSG[titleKey] : false;
		if (titleKey == "CY0130") {
			loginTitle = loginTitle.replace("{name}", Core.String.byteLength(scope.realname) > 10 ? (Core.String.leftB(scope.realname, 10) + "...") : scope.realname).replace("{titlename}", scope.realname)
		}
		var loginInfo = $CLTMSG[loginInfoKey] || $CLTMSG.CY0121;
		var rnd = (new Date()).getTime();
		var regPwd2Html = ($E("reg_password2") || scope.$pageid !== "register") ? "<tr>    <th><span>" + $CLTMSG.CY0118 + '：</span></th>    <td class="td1">     <input type="password" class="inp" id="mod_reg_password2' + rnd + '" name="password2" />    </td>    <td id="mod_red_reg_password2' + rnd + '"></td>   </tr>': "";
		var regDoorHtml = ($E("door") || scope.$pageid !== "register") ? "<tr>    <th><span>" + $CLTMSG.CY0119 + '：</span></th>    <td class="td1">     <input type="text" class="inp w1" id="mod_reg_door' + rnd + '" name="basedoor" style="width:40px" />     <img width="90" height="31" align="absmiddle" src="/signup/pincode/pin1.php?r=1275025963678&amp;lang=zh" style="margin:5px 0;" id="mod_reg_check_img" />     <a href="javascript:void(0);" onclick="App.modRefreshCheckCode()">' + $CLTMSG.CY0120 + '</a>    </td>    <td id="mod_red_reg_door' + rnd + '"></td>   </tr>': "";
		var hezuo_login_display = $CONFIG.$lang === "en-us" ? "display:none;": "";
		var html = '<table class="mBlogLayer">    <tr>     <td class="top_l"></td>     <td class="top_c"></td>     <td class="top_r"></td>    </tr>    <tr>     <td class="mid_l"></td>     <td class="mid_c">      <div class="layerBox">       <div class="layerBoxCon" style=" width:530px;">        <div class="layerSmartlogin">         <div class="layerMedia_close"><a href="javascript:void(0);" onclick="App.modRegisterOrLoginClose()" class="close"></a></div>         <div class="yellowBg" id="mod_reg_login_yellow' + rnd + '"></div>         <div class="infoForm" id="mod_reg_information_box' + rnd + '">          <div class="infoReg">           <table class="tab2">            <tr>             <th><span>' + $CLTMSG.CY0116 + '：</span></th>             <td class="td1"><input type="text" class="inp" id="mod_reg_username' + rnd + '" name="username" /></td>             <td id="mod_red_reg_username' + rnd + '"><a href="http://mail.sina.com.cn/cnmail/index.html" target="_blank">我没有邮箱</a></td>            </tr>            <tr><th></th>             <td class="td2"><p><a href="/signup/mobile.php">' + $CLTMSG.CY0152 + "</a></p></td>            <td></td></tr>            <tr>             <th><span>" + $CLTMSG.CY0117 + '：</span></th>             <td class="td1">              <input type="password" class="inp" id="mod_reg_password' + rnd + '" name="password" />             </td>             <td id="mod_red_reg_password' + rnd + '"></td>            </tr>' + regPwd2Html + regDoorHtml + '<tr>             <th>&nbsp;</th>             <td class="td1">              <div class="lf">               <input type="checkbox" id="mod_reg_after' + rnd + '" class="labelbox" checked="checked" name="after" value="1" />               <label for="chbb">' + $CLTMSG.CY0129 + '</label>              </div>             </td>             <td id="mod_red_reg_after' + rnd + '"></td>            </tr>            <tr>             <th>&nbsp;</th>             <td class="td1"><a href="javascript:void(0);" class="btnlogin1" id="mod_reg_submit' + rnd + '"></a></td>              <td>&nbsp;</td>            </tr>           </table>          </div>          <div class="clearit"></div>         </div>         <div class="infoForm" id="mod_reg_login_box' + rnd + '">          <div class="infoLeft">           <table class="tab1">            <caption>' + loginInfo + '</caption>            <tr>             <th id="mod_login_tip' + rnd + '" scope="row"></th>            </tr>            <tr>             <td><div class="lgsz_wrap"><input type="text" class="inp" id="mod_loginname' + rnd + '" /></div></td>            </tr>            <tr>             <td>              <input type="text" style="color:#999;display:none;" class="inp" id="mod_password_text' + rnd + '" />              <input type="password" class="inp" id="mod_password' + rnd + '" />             </td>            </tr>            <tr id="door_p' + rnd + '" style="display:none;">             <td>              <input type="text" class="inp checkcode" id="mod_door' + rnd + '" style="width:60px;" />              <img align="absmiddle" src="http://login.sina.com.cn/cgi/pin.php?r=' + rnd + '&s=0" id="mod_door_img' + rnd + '">              <a alt="收听验证码" title="收听验证码" id="mod_login_door_playvoice' + rnd + '" class="login_voice" href="javascript:;"></a>             </td>            </tr>            <tr id="shield_p" style="display:none;">             <td>              <input type="text" class="inp" style="color:#999;" id="mod_shield' + rnd + '" value="' + $CLTMSG.CL0702 + '">              <p class="shield_link">               <a href="http://weibo.com/forgot/vdun" target="_blank">' + $CLTMSG.CL0703 + '</a>              </p>             </td>            </tr>            <tr>            <tr>             <th>              <a href="javascript:void(0);"  class="btn_normal" id="mod_login_submit' + rnd + '"><em>' + $CLTMSG.CD0134 + '</em></a>              <input type="checkbox" id="mod_isremember' + rnd + '" class="chkb" checked="checked" />              <label for="mod_isremember' + rnd + '">' + $CLTMSG.CY0123 + '</label>             </th>            </tr>           </table>           <div class="hezuo_login" style="' + hezuo_login_display + '">            <strong>' + $CLTMSG.CY0153 + '</strong>            <span><i class="hezuo_login1"></i><a href="javascript:void(0);" onclick="App.connectMSN();">MSN</a></span><b>|</b>            <span><i class="hezuo_login3"></i><a href="http://weibo.com/bind/gotooauth.php?company=189.cn" onclick="App.sudaTrack(\'weibo_login_189\');" target="_blank">天翼</a></span><b>|</b>            <span><i class="hezuo_login4"></i><a href="http://weibo.com/bind/gotooauth.php?company=wo.com.cn" target="_blank">' + $CLTMSG.CY0154 + '</a></span><b>|</b>            <span><i class="hezuo_login5"></i><a href="https://openapi.360.cn/oauth2/authorize?client_id=f48a9f02f41ca0ddaf4f01ae523294c7&response_type=code&redirect_uri=http://weibo.com/bind/bind_360.php&scope=basic&display=default" target="_blank">360</a></span>           </div>          </div>          <div class="infoRight">           <p class="p1">' + $CLTMSG.CY0122 + '</p>           <p class="p2"><a href="javascript:void(0);" onclick="App.sudaTrack(\'weibo_login_register\');App.modRegisterOrLoginClose();return false;"  class="btnlogin1"></a></p>          </div>          <div class="clearit"></div>         </div>        </div>       </div>      </div>     </td>     <td class="mid_r"></td>    </tr>    <tr>     <td class="bottom_l"></td>     <td class="bottom_c"></td>     <td class="bottom_r"></td>    </tr>   </table>';
		var box = $C("DIV");
		box.innerHTML = html;
		box.style.position = "absolute";
		box.style.zIndex = 1600;
		box.style.width = "540px";
		document.body.appendChild(box);
		iniRegForm(rnd, callBackFunction);
		iniLoginForm(rnd, callBackFunction);
		var cachePassCardStatus = passcardOBJ.menuStatus;
		App.modRunToRegisterOrLogin = function(type) {
			if (type === "login") {
				$E("mod_reg_login_box" + rnd).style.display = "";
				$E("mod_reg_information_box" + rnd).style.display = "none";
				if (loginTitle) {
					$E("mod_reg_login_yellow" + rnd).innerHTML = loginTitle;
					$E("mod_reg_login_yellow" + rnd).style.display = ""
				} else {
					$E("mod_reg_login_yellow" + rnd).style.display = "none"
				}
				passcardOBJ.menuStatus = {
					"sina.com": true,
					"163.com": true,
					"qq.com": true,
					"126.com": true,
					"vip.sina.com": true,
					"sina.cn": true,
					"hotmail.com": true,
					"gmail.com": true,
					"sohu.com": true,
					"yahoo.cn": true,
					"139.com": true,
					"wo.com.cn": true,
					"189.cn": true
				}
			} else {
				if (type === "register") {
					$E("mod_reg_login_box" + rnd).style.display = "none";
					$E("mod_reg_information_box" + rnd).style.display = "";
					$E("mod_reg_login_yellow" + rnd).innerHTML = regTitle;
					$E("mod_reg_login_yellow" + rnd).style.display = "";
					passcardOBJ.menuStatus = {
						"163.com": true,
						"qq.com": true,
						"126.com": true,
						"hotmail.com": true,
						"gmail.com": true,
						"sohu.com": true,
						"yahoo.cn": true,
						"139.com": true,
						"wo.com.cn": true,
						"189.cn": true
					};
					try {
						GB_SUDA._S_uaTrack("tblog_reg", "layer_reg")
					} catch(ex) {}
				}
			}
		};
		App.setPassword("mod_password" + rnd, "mod_password_text" + rnd);
		App.modRegisterOrLoginClose = function() {
			document.body.removeChild(box);
			document.body.removeChild(mask);
			passcardOBJ.menuStatus = cachePassCardStatus;
			App.modRunToRegisterOrLogin = false
		};
		App.modRunToRegisterOrLogin(showType);
		setMiddle(box);
		var mask = setMask(600);
		try {
			GB_SUDA._S_uaTrack("tblog_reg", "layer_login")
		} catch(exp) {}
		return box
	};
	App.modRefreshCheckCode = function() {
		setTimeout(function() {
			var url = "";
			if (window.sinaSSOController && sinaSSOController.getPinCodeUrl) {
				url = sinaSSOController.getPinCodeUrl()
			} else {
				url = "/signup/pincode/pin1.php?r=" + ((new Date()).getTime()) + "&lang=" + scope.$lang
			}
			$E("mod_reg_check_img").src = url;
			$E("mod_reg_check_img").style.display = ""
		},
		10)
	}
})();
$registJob("start_suda",
function() {
	try {
		_S_pSt(_S_PID_)
	} catch(a) {}
});
var _SGUP_ = "SGUP";
var sgup = "";
var SSL = {
	Config: {},
	Space: function(g) {
		var b = g,
		f = null;
		b = b.split(".");
		f = SSL;
		for (i = 0, len = b.length; i < len; i++) {
			f[b[i]] = f[b[i]] || {};
			f = f[b[i]]
		}
		return f
	}
};
SSL.Space("Global");
SSL.Space("Core.Dom");
SSL.Space("Core.Event");
SSL.Space("App");
SSL.Global = {
	win: window || {},
	doc: document,
	nav: navigator,
	loc: location
};
SSL.Core.Dom = {
	get: function(a) {
		return document.getElementById(a)
	}
};
SSL.Core.Event = {
	on: function() {}
};
SSL.App = {
	_S_gConType: function() {
		var a = "";
		try {
			SSL.Global.doc.body.addBehavior("#default#clientCaps");
			a = SSL.Global.doc.body.connectionType
		} catch(b) {
			a = "unkown"
		}
		return a
	},
	_S_gKeyV: function(j, b, g, f) {
		if (j == "") {
			return ""
		}
		if (f == "") {
			f = "="
		}
		b = b + f;
		var h = j.indexOf(b);
		if (h < 0) {
			return ""
		}
		h = h + b.length;
		var a = j.indexOf(g, h);
		if (a < h) {
			a = j.length
		}
		return j.substring(h, a)
	},
	_S_gUCk: function(a) {
		if ((undefined == a) || ("" == a)) {
			return ""
		}
		return SSL.App._S_gKeyV(SSL.Global.doc.cookie, a, ";", "")
	},
	_S_sUCk: function(h, a, b, g) {
		if (a != null) {
			if ((undefined == g) || (null == g)) {
				g = "weibo.com"
			}
			if ((undefined == b) || (null == b) || ("" == b)) {
				SSL.Global.doc.cookie = h + "=" + a + ";domain=" + g + ";path=/"
			} else {
				var f = new Date();
				var j = f.getTime();
				j = j + 86400000 * b;
				f.setTime(j);
				j = f.getTime();
				SSL.Global.doc.cookie = h + "=" + a + ";domain=" + g + ";expires=" + f.toUTCString() + ";path=/"
			}
		}
	},
	_S_gJVer: function(j, b) {
		var h,
		a,
		k,
		f = 1,
		g = 0;
		if ("MSIE" == b) {
			a = "MSIE";
			h = j.indexOf(a);
			if (h >= 0) {
				k = parseInt(j.substring(h + 5));
				if (3 <= k) {
					f = 1.1;
					if (4 <= k) {
						f = 1.3
					}
				}
			}
		} else {
			if (("Netscape" == b) || ("Opera" == b) || ("Mozilla" == b)) {
				f = 1.3;
				a = "Netscape6";
				h = j.indexOf(a);
				if (h >= 0) {
					f = 1.5
				}
			}
		}
		return f
	},
	_S_gFVer: function(nav) {
		var ua = SSL.Global.nav.userAgent.toLowerCase();
		var flash_version = 0;
		if (SSL.Global.nav.plugins && SSL.Global.nav.plugins.length) {
			var p = SSL.Global.nav.plugins["Shockwave Flash"];
			if (typeof p == "object") {
				for (var i = 10; i >= 3; i--) {
					if (p.description && p.description.indexOf(" " + i + ".") != -1) {
						flash_version = i;
						break
					}
				}
			}
		} else {
			if (ua.indexOf("msie") != -1 && ua.indexOf("win") != -1 && parseInt(SSL.Global.nav.appVersion) >= 4 && ua.indexOf("16bit") == -1) {
				for (var i = 10; i >= 2; i--) {
					try {
						var object = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + i + "');");
						if (object) {
							flash_version = i;
							break
						}
					} catch(e) {}
				}
			} else {
				if (ua.indexOf("webtv/2.5") != -1) {
					flash_version = 3
				} else {
					if (ua.indexOf("webtv") != -1) {
						flash_version = 2
					}
				}
			}
		}
		return flash_version
	},
	_S_gMeta: function(b, f) {
		var g = SSL.Global.doc.getElementsByName(b);
		var a = 0;
		if (f > 0) {
			a = f
		}
		return (g.length > a) ? g[a].content: ""
	},
	_S_gHost: function(b) {
		var a = new RegExp("^http(?:s)?://([^/]+)", "im");
		if (b.match(a)) {
			return b.match(a)[1].toString()
		} else {
			return ""
		}
	},
	_S_gDomain: function(a) {
		var b = a.indexOf(".sina.");
		if (b > 0) {
			return a.substr(0, b)
		} else {
			return a
		}
	},
	_S_gTJMTMeta: function() {
		return SSL.App._S_gMeta("mediaid")
	},
	_S_gTJZTMeta: function() {
		var a = SSL.App._S_gMeta("subjectid");
		a.replace(",", ".");
		a.replace(";", ",");
		return a
	},
	_S_isFreshMeta: function() {
		var b = SSL.Global.doc.documentElement.innerHTML.substring(0, 1024);
		var a = new RegExp("<meta\\s*http-equiv\\s*=((\\s*refresh\\s*)|('refresh')|(\"refresh\"))s*contents*=", "ig");
		return a.test(b)
	},
	_S_isIFrameSelf: function(b, a) {
		if (SSL.Global.win.top == SSL.Global.win) {
			return false
		} else {
			try {
				if (SSL.Global.doc.body.clientHeight == 0) {
					return false
				}
				if ((SSL.Global.doc.body.clientHeight >= b) && (SSL.Global.doc.body.clientWidth >= a)) {
					return false
				} else {
					return true
				}
			} catch(f) {
				return true
			}
		}
	},
	_S_isHome: function(b) {
		var a = "";
		try {
			SSL.Global.doc.body.addBehavior("#default#homePage");
			a = SSL.Global.doc.body.isHomePage(b) ? "Y": "N"
		} catch(f) {
			a = "unkown"
		}
		return a
	}
};
function SUDA(M, l, k) {
	var j = SSL.Global,
	B = SSL.Core.Dom,
	y = SSL.Core.Event,
	m = SSL.App;
	var J = "webbug_meta_ref_mod_noiframe_async_fc_:9.12c",
	n = "-9999-0-0-1";
	var b = j.nav.appName.indexOf("Microsoft Internet Explorer") > -1 ? "MSIE": j.nav.appName;
	var x = j.nav.appVersion;
	var t = j.loc.href.toLowerCase();
	var C = j.doc.referrer.toLowerCase();
	var s = "";
	var q = "",
	N = "SUP",
	z = "",
	w = "Apache",
	A = "SINAGLOBAL",
	u = "ULV",
	K = "UOR",
	v = "_s_upa",
	a = 320,
	o = 240,
	L = 0,
	r = "",
	p = "",
	R = 0,
	O = 10000,
	I = 0,
	g = "_s_acc";
	var S = "_s_tentry";
	var G = t.indexOf("https") > -1 ? "https://": "http://",
	F = "beacon.sina.com.cn",
	H = G + F + "/a.gif",
	Q = G + F + "/d.gif",
	P = G + F + "/e.gif",
	E = G + F + "/fc.html";
	var h = 0,
	f = 0;
	var D = {
		_S_sSID: function() {
			D._S_p2Bcn("", Q);
			var T = new Date();
			sid = Math.random() * 10000000000000 + "." + T.getTime();
			m._S_sUCk(w, sid);
			return sid
		},
		_S_gsSID: function() {
			var T = m._S_gUCk(w);
			if ("" == T) {
				T = D._S_sSID()
			}
			return T
		},
		_S_sGID: function(T) {
			if ("" != T) {
				m._S_sUCk(A, T, 3650)
			}
		},
		_S_gGID: function() {
			return m._S_gUCk(A)
		},
		_S_gsGID: function() {
			if ("" != A) {
				var T = D._S_gGID();
				if ("" == T) {
					T = m._S_gUCk(w);
					D._S_sGID(T)
				}
				return T
			} else {
				return ""
			}
		},
		_S_IFC2GID: function() {
			var T = B.get("SUDA_FC");
			if (T) {
				T.src = E + "?a=g&n=" + A + "&r=" + Math.random()
			}
		},
		_S_gCid: function() {
			try {
				var T = m._S_gMeta("publishid");
				if ("" != T) {
					var V = T.split(",");
					if (V.length > 0) {
						if (V.length >= 3) {
							n = "-9999-0-" + V[1] + "-" + V[2]
						}
						return V[0]
					}
				} else {
					return "0"
				}
			} catch(U) {
				return "0"
			}
		},
		_S_gAEC: function() {
			return m._S_gUCk(g)
		},
		_S_sAEC: function(T) {
			if ("" == T) {
				return
			}
			var U = D._S_gAEC();
			if (U.indexOf(T + ",") < 0) {
				U = U + T + ","
			}
			m._S_sUCk(g, U, 7)
		},
		_S_p2Bcn: function(W, V) {
			var T = B.get("SUDA_CS_DIV");
			if (null != T) {
				var U = new Date();
				T.innerHTML = "<img width=0 height=0 src='" + V + "?" + W + "&gUid_" + U.getTime() + "' border='0' alt='' />"
			}
		},
		_S_gSUP: function() {
			if (z != "") {
				return z
			}
			var V = unescape(m._S_gUCk(N));
			if (V != "") {
				var U = m._S_gKeyV(V, "ag", "&", "");
				var T = m._S_gKeyV(V, "user", "&", "");
				var W = m._S_gKeyV(V, "uid", "&", "");
				var Y = m._S_gKeyV(V, "sex", "&", "");
				var X = m._S_gKeyV(V, "dob", "&", "");
				z = U + ":" + T + ":" + W + ":" + Y + ":" + X;
				return z
			} else {
				return ""
			}
		},
		_S_gsLVisit: function(V) {
			var X = m._S_gUCk(u);
			var W = X.split(":");
			var Y = "";
			if (W.length >= 6) {
				if (V != W[4]) {
					var U = new Date();
					var T = new Date(parseInt(W[0]));
					W[1] = parseInt(W[1]) + 1;
					if (U.getMonth() != T.getMonth()) {
						W[2] = 1
					} else {
						W[2] = parseInt(W[2]) + 1
					}
					if (((U.getTime() - T.getTime()) / 86400000) >= 7) {
						W[3] = 1
					} else {
						if (U.getDay() < T.getDay()) {
							W[3] = 1
						} else {
							W[3] = parseInt(W[3]) + 1
						}
					}
					Y = W[0] + ":" + W[1] + ":" + W[2] + ":" + W[3];
					W[5] = W[0];
					W[0] = U.getTime();
					m._S_sUCk(u, W[0] + ":" + W[1] + ":" + W[2] + ":" + W[3] + ":" + V + ":" + W[5], 360)
				} else {
					Y = W[5] + ":" + W[1] + ":" + W[2] + ":" + W[3]
				}
			} else {
				var U = new Date();
				Y = ":1:1:1";
				m._S_sUCk(u, U.getTime() + Y + ":" + V + ":", 360)
			}
			return Y
		},
		_S_gUOR: function() {
			var T = m._S_gUCk(K);
			var U = T.split(":");
			if (U.length >= 2) {
				return U[0]
			} else {
				return ""
			}
		},
		_S_sUOR: function() {
			var X = m._S_gUCk(K),
			ac = "",
			U = "",
			ab = "",
			W = "";
			var ad = /[&|?]c=spr(_[A-Za-z0-9]{1,}){3,}/;
			var Y = new Date();
			if (t.match(ad)) {
				ab = t.match(ad)[0]
			} else {
				if (C.match(ad)) {
					ab = C.match(ad)[0]
				}
			}
			if (ab != "") {
				ab = ab.substr(3) + ":" + Y.getTime()
			}
			if (X == "") {
				if (m._S_gUCk(u) == "" && m._S_gUCk(u) == "") {
					ac = m._S_gDomain(m._S_gHost(C));
					U = m._S_gDomain(m._S_gHost(t))
				}
				m._S_sUCk(K, ac + "," + U + "," + ab, 365)
			} else {
				var Z = 0,
				aa = X.split(",");
				if (aa.length >= 1) {
					ac = aa[0]
				}
				if (aa.length >= 2) {
					U = aa[1]
				}
				if (aa.length >= 3) {
					W = aa[2]
				}
				if (ab != "") {
					Z = 1
				} else {
					var V = W.split(":");
					if (V.length >= 2) {
						var T = new Date(parseInt(V[1]));
						if (T.getTime() < (Y.getTime() - 86400000 * 30)) {
							Z = 1
						}
					}
				}
				if (Z) {
					m._S_sUCk(K, ac + "," + U + "," + ab, 365)
				}
			}
		},
		_S_gRef: function() {
			var T = /^[^\?&#]*.swf([\?#])?/;
			if ((C == "") || (C.match(T))) {
				var U = m._S_gKeyV(t, "ref", "&", "");
				if (U != "") {
					return U
				}
			}
			return C
		},
		_S_MEvent: function() {
			if (R == 0) {
				R++;
				var U = m._S_gUCk(v);
				if (U == "") {
					U = 0
				}
				U++;
				if (U < O) {
					var T = /[&|?]c=spr(_[A-Za-z0-9]{2,}){3,}/;
					if (t.match(T) || C.match(T)) {
						U = U + O
					}
				}
				m._S_sUCk(v, U)
			}
		},
		_S_gMET: function() {
			var T = m._S_gUCk(v);
			if (T == "") {
				T = 0
			}
			return T
		},
		_S_gCInfo_v2: function() {
			var T = new Date();
			return "sz:" + screen.width + "x" + screen.height + "|dp:" + screen.colorDepth + "|ac:" + j.nav.appCodeName + "|an:" + b + "|cpu:" + j.nav.cpuClass + "|pf:" + j.nav.platform + "|jv:" + m._S_gJVer(x, b) + "|ct:" + m._S_gConType() + "|lg:" + j.nav.systemLanguage + "|tz:" + T.getTimezoneOffset() / 60 + "|fv:" + m._S_gFVer(j.nav)
		},
		_S_gPInfo_v2: function(T, U) {
			if ((undefined == T) || ("" == T)) {
				T = D._S_gCid() + n
			}
			return "pid:" + T + "|st:" + D._S_gMET() + "|et:" + I + "|ref:" + escape(U) + "|hp:" + m._S_isHome(t) + "|PGLS:" + m._S_gMeta("stencil") + "|ZT:" + escape(m._S_gTJZTMeta()) + "|MT:" + escape(m._S_gTJMTMeta()) + "|keys:"
		},
		_S_gUInfo_v2: function(T) {
			return "vid:" + T + "|sid:" + D._S_gsSID() + "|lv:" + D._S_gsLVisit(D._S_gsSID()) + "|un:" + D._S_gSUP() + "|uo:" + D._S_gUOR() + "|ae:" + D._S_gAEC()
		},
		_S_gEXTInfo_v2: function(U, T) {
			r = (undefined == U) ? r: U;
			p = (undefined == T) ? p: T;
			return "ex1:" + r + "|ex2:" + p
		},
		_S_pBeacon: function(X, W, U) {
			try {
				var Z = D._S_gsGID();
				if ("" == Z) {
					if (L < 1) {
						setTimeout(function() {
							D._S_pBeacon(X, W, U)
						},
						f);
						L++;
						return
					} else {
						Z = D._S_gsSID();
						D._S_sGID(Z)
					}
				}
				var ab = "V=2";
				var Y = D._S_gCInfo_v2();
				var ad = D._S_gPInfo_v2(X, D._S_gRef());
				var V = D._S_gUInfo_v2(Z);
				var T = D._S_gEXTInfo_v2(W, U);
				var ac = ab + "&CI=" + Y + "&PI=" + ad + "&UI=" + V + "&EX=" + T;
				D._S_p2Bcn(ac, H)
			} catch(aa) {}
		},
		_S_acTrack_i: function(T, V) {
			if (("" == T) || (undefined == T)) {
				return
			}
			D._S_sAEC(T);
			if (0 == V) {
				return
			}
			var U = "AcTrack||" + D._S_gGID() + "||" + D._S_gsSID() + "||" + D._S_gSUP() + "||" + T + "||";
			D._S_p2Bcn(U, P)
		},
		_S_uaTrack_i: function(V, T) {
			var U = "UATrack||" + D._S_gGID() + "||" + D._S_gsSID() + "||" + D._S_gSUP() + "||" + V + "||" + T + "||" + D._S_gRef() + "||";
			D._S_p2Bcn(U, P)
		},
		_S_sTEntry: function() {
			var W = "-";
			if ("" == m._S_gUCk(S)) {
				if ("" != C) {
					W = m._S_gHost(C)
				}
				m._S_sUCk(S, W, "", "weibo.com")
			}
			var U = /weibo.com\/reg.php/;
			if (t.match(U)) {
				var V = m._S_gKeyV(unescape(t), "sharehost", "&", "");
				var T = m._S_gKeyV(unescape(t), "appkey", "&", "");
				if ("" != V) {
					m._S_sUCk(S, V, "", "weibo.com")
				}
				m._S_sUCk("appkey", T, "", "weibo.com")
			}
		}
	};
	D._S_sTEntry();
	D._S_sUOR();
	return {
		_S_pSt: function(T, V, U) {
			try {
				if ((m._S_isFreshMeta()) || (m._S_isIFrameSelf(o, a))) {
					return
				}
				if (I > 0) {
					return
				}++I;
				D._S_gsSID();
				setTimeout(function() {
					D._S_pBeacon(T, V, U, 0)
				},
				f)
			} catch(W) {}
		},
		_S_pStM: function(T, V, U) {++I;
			D._S_pBeacon(T, ((undefined == V) ? D._S_upExt1() : V), U)
		},
		_S_acTrack: function(T, V) {
			try {
				if ((undefined != T) && ("" != T)) {
					setTimeout(function() {
						D._S_acTrack_i(T, V)
					},
					h)
				}
			} catch(U) {}
		},
		_S_uaTrack: function(U, T) {
			try {
				if (undefined == U) {
					U = ""
				}
				if (undefined == T) {
					T = ""
				}
				if (("" != U) || ("" != T)) {
					setTimeout(function() {
						D._S_uaTrack_i(U, T)
					},
					h)
				}
			} catch(V) {}
		},
		_S_gCk: function(T) {
			return m._S_gUCk(T)
		},
		_S_sCk: function(W, T, U, V) {
			return m._S_sUCk(W, T, U, V)
		},
		_S_gGlobalID: function() {
			return D._S_gGID()
		},
		_S_gSessionID: function() {
			return D._S_gsSID()
		}
	}
}
var GB_SUDA;
if (GB_SUDA == null) {
	GB_SUDA = new SUDA({})
}
var _S_PID_ = "";
function _S_pSt(a, f, b) {
	GB_SUDA._S_pSt(a, f, b)
}
function _S_pStM(a, f, b) {
	GB_SUDA._S_pStM(a, f, b)
}
function _S_acTrack(a) {
	GB_SUDA._S_acTrack(a, 1)
}
function _S_uaTrack(b, a) {
	GB_SUDA._S_uaTrack(b, a)
} (function() {
	if (!/\((iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
		return
	}
	var a = document.createElement("script");
	a.src = "http://news.sina.com.cn/js/ui/ipad/reset.js";
	document.getElementsByTagName("head")[0].appendChild(a)
})(); (function() {
	var a = null;
	App.CONNECTMSNCONFIG = {
		url: "https://oauth.live.com/authorize",
		wrap_client_id: "000000004C03D438",
		wrap_callback: "http://weibo.com/msn/msnLoginCallBack.php",
		wrap_scope: "wl.signin wl.basic wl.offline_access wl.share wl.emails",
		response_type: "code",
		name: "neww",
		params: "height=500,width=500"
	};
	App.connectMSN = function(b) {
		GB_SUDA._S_uaTrack("bind_msn", "login");
		var h = App.CONNECTMSNCONFIG;
		var g = "";
		if (window.scope && window.scope.$lang) {
			g = window.scope.$lang;
			if (g == "zh") {
				g = "zh-cn"
			}
		}
		var f = ["client_id=" + h.wrap_client_id, "scope=" + encodeURIComponent(h.wrap_scope), "response_type=" + h.response_type, "redirect_uri=" + encodeURIComponent(h.wrap_callback)].join("&");
		f = f + (g ? "&locale=" + g: "");
		f = h.url + "?" + f;
		a = window.open(f, h.name, h.params)
	};
	App.showBindMsnMsg = function(b) {
		App.alert(b, {
			zIndex: 2000
		})
	};
	App.sendRedirect = function(b) {
		if (a) {
			a = null
		}
		if (b) {
			top.location.href = b
		}
	}
})();
App.ModLogin = function(l, v) {
	var o = v || $CLTMSG.CD0038;
	var t = /open\.t\.sina/.test(location.href) ? "http://weibo.com/reg.php": "/reg.php";
	t += "?lang=" + scope.$lang;
	var a = "http://login.sina.com.cn/cgi/getpwd/getpwd0.php?entry=sso";
	var m = (new Date()).getTime();
	var p = '<div class="loginLayer" id="login_wrap' + m + '">             <table>                  <tbody>      <tr>             <th scope="row"/>                         <td id="login_tip' + m + '"></td>                     </tr>      <tr>                    <th scope="row">' + $CLTMSG.CD0039 + '&nbsp;&nbsp;</th>                    <td><span class="cInputBorder"><span class="cInputborderR"><input tabIndex="1" type="text" name="loginname" id="loginname' + m + '" class="inputType" style="width: 210px;"/></span></span></td>                    <td><a href="' + t + '" target="_blank">' + $CLTMSG.CD0040 + '</a></td>                  </tr>                  <tr>                    <th scope="row">' + $CLTMSG.CD0041 + '&nbsp;&nbsp;</th>                    <td><span class="cInputBorder"><span class="cInputborderR"><input tabIndex="2" type="password" name="password" id="password' + m + '" class="inputType" style="width: 210px;"/></span></span></td>                    <td><a href="' + a + '" target="_blank">' + $CLTMSG.CD0042 + '</a></td>                  </tr>                  <tr>                    <th scope="row"/>                    <td><input type="checkbox" id="isremember' + m + '"  checked="checked"/>' + $CLTMSG.CD0043 + '</td>                    <td/>                  </tr>                  <tr>                    <th scope="row"/>                    <td><a href="javascript:void(0);" id="login_submit' + m + '" class="btn_normal"><em>' + $CLTMSG.CD0044 + "</em></a></td>                    <td/>                  </tr>                </tbody></table>            </div>";
	var k = {
		width: 390,
		zIndex: 1000
	};
	var s = new App.Dialog.BasicDialog(o, p, k);
	var r = "btn_notclick";
	var g = "btn_normal";
	var j = $E("login_submit" + m);
	var q = $E("login_tip" + m);
	var u = $E("loginname" + m);
	var b = $E("password" + m);
	var h = $E("isremember" + m);
	var f = {
		zIndex: 1010,
		ref: u,
		wrap: q,
		offsetX: 0,
		offsetY: 1
	};
	if (!$IE) {
		f.offsetY = 10
	}
	App.initLoginInput(u);
	if (l && l.initErrorTip) {
		App.fixElement.setHTML(l.initErrorTip, "", f)
	}
	function n(w, x) {
		if (!Core.String.trim(w.value) || (w.value == w.title && w.title)) {
			if (w && w.style && w.style.display !== "none") {
				w.focus()
			}
			App.fixElement.setHTML(x, "", f);
			return false
		} else {
			App.fixElement.hidden()
		}
		return true
	}
	j.onclick = function() {
		if (j.className == r) {
			return false
		}
		j.className = g;
		if (!n(u, App.getMsg({
			code: "M00901"
		}))) {
			return false
		}
		if (!n(b, App.getMsg({
			code: "M00902"
		}))) {
			return false
		}
		App.LoginAction({
			name: u.value,
			pwd: b.value,
			remb: h.checked,
			error: function(x, w) {
				var y = "";
				if (w == "4010") {
					x = App.getMsg({
						code: "R01011"
					});
					y = App.getMsg("R01010", {
						mail: u.value
					})
				} else {
					if (w == "101" || w == "5") {
						y = App.getMsg({
							code: "R11111"
						})
					}
				}
				App.fixElement.setHTML(x, y, f)
			},
			succ: function() {
				s.close();
				if (l) {
					scope.$uid = "123456";
					l.func(l.param)
				} else {
					location.reload()
				}
			}
		})
	};
	App.enterSubmit({
		parent: b.parentNode,
		action: function() {
			j.onclick()
		}
	});
	passcardOBJ.init(u, {
		overfcolor: "#999",
		overbgcolor: "#e8f4fc",
		outfcolor: "#000000",
		outbgcolor: ""
	},
	b, window);
	return s
};
App.ModLogin = function(a, b) {
	if ($E("entry") && $E("entry").value == "360bind") {
		window.location.href = "http://weibo.com/bind/bindOther360.php?type=other&lang=" + scope.$lang;
		return
	}
	if (App.modRunToRegisterOrLogin) {
		App.modRunToRegisterOrLogin("login")
	} else {
		App.modRegisterAndLogin("login", false, a)
	}
}; (function() {
	setTimeout(function() {
		if ($CONFIG.$FW === "login") {
			App.ModLogin()
		}
	},
	10)
})();
Core.String.j2o = function(str) {
	if (!str || str == "") {
		return null
	}
	try {
		var o = window.eval("(" + str + ")");
		return o
	} catch(e) {
		$Debug("j2o : 数据分析出错");
		traceError(e);
		return null
	}
};
App.doRequest = function(a, b, h, k, m, j, l) {
	var g = function() {};
	var f = {
		onComplete: function(n) {
			try {
				if (typeof n == "string") {
					n = n.replace(/;$/, "")
				}
				n = (typeof n == "string" && (/\s*{/.test(n))) ? Core.String.j2o(n) : n;
				if (n && (n.code == "A00006" || n.code == "S00001")) { (h || g)(n.data, n)
				} else { (k || g)(n)
				}
			} catch(o) {}
		},
		onException: function(n) { (k || g)(n)
		}
	};
	m = (m || "post").toUpperCase();
	l = l || {};
	f[m] = a;
	f.returnType = "json";
	f.onTimeout = l.func ||
	function() {};
	f.delayTime = l.delay || 0;
	j = j || "ajax";
	return Utils.Io.Ajax.request(b, f)
};
Sina.pkg("Utils.Sinput");
Core.Function.bind3 = function(g, f, b) {
	b = b == null ? [] : b;
	var a = g;
	return function() {
		return a.apply(f, b)
	}
};
Utils.Sinput.limitMaxLen = function(a, b) {
	var f;
	var g = function() {
		f = a.value;
		var h = Core.String.byteLength(f);
		if (h > b) {
			a.value = Core.String.leftB(f, b)
		}
	};
	Core.Events.addEvent(a, Core.Function.bind3(g, a), "keyup");
	Core.Events.addEvent(a, Core.Function.bind3(g, a), "blur");
	Core.Events.addEvent(a, Core.Function.bind3(g, a), "focus")
}; (function(b) {
	var a = false;
	b.doFlyOut = function(q, f, g) {
		if (a) {
			return false
		}
		a = true;
		var j = function(t) {
			var u = Core.Dom.getXY(t);
			var s = {
				x: u[0],
				y: u[1]
			};
			return s
		};
		var n = {
			w: q.offsetWidth,
			h: q.offsetHeight,
			l: (j(q))["x"],
			t: (j(q))["y"]
		};
		var h = f.style.visibility;
		var m = f.style.display;
		if (f.style.display == "none") {
			f.style.visibility = "hidden";
			f.style.display = "block"
		}
		var p = {
			w: f.offsetWidth,
			h: f.offsetHeight,
			l: (j(f))["x"],
			t: (j(f))["y"]
		};
		var l = document.createElement("DIV");
		l.style.cssText = g.style;
		l.style.width = n.w + "px";
		l.style.height = n.h + "px";
		l.style.top = n.t + "px";
		l.style.left = n.l + "px";
		l.style.position = "absolute";
		document.body.appendChild(l);
		var k = {
			w: b.animation.taccelerate(b.timer.delay, p.w - n.w, g.time),
			h: b.animation.taccelerate(b.timer.delay, p.h - n.h, g.time),
			l: b.animation.taccelerate(b.timer.delay, p.l - n.l, g.time),
			t: b.animation.taccelerate(b.timer.delay, p.t - n.t, g.time)
		};
		var o = 0;
		var r = b.timer.add(function() {
			if (o >= k.w.length) {
				b.timer.remove(r);
				l.style.display = "none";
				g.resFun();
				a = false;
				return false
			}
			l.style.width = n.w + k.w[o] + "px";
			l.style.height = n.h + k.h[o] + "px";
			l.style.top = n.t + k.t[o] + "px";
			l.style.left = n.l + k.l[o] + "px";
			o++
		});
		f.style.visibility = h;
		f.style.display = m
	}
})(App);
Core.Dom.insertHTML = function(g, f, b) {
	g = $E(g) || document.body;
	b = b.toLowerCase() || "beforeend";
	if (g.insertAdjacentHTML) {
		switch (b) {
		case "beforebegin":
			g.insertAdjacentHTML("BeforeBegin", f);
			return g.previousSibling;
		case "afterbegin":
			g.insertAdjacentHTML("AfterBegin", f);
			return g.firstChild;
		case "beforeend":
			g.insertAdjacentHTML("BeforeEnd", f);
			return g.lastChild;
		case "afterend":
			g.insertAdjacentHTML("AfterEnd", f);
			return g.nextSibling
		}
		throw 'Illegal insertion point -> "' + b + '"'
	}
	var a = g.ownerDocument.createRange();
	var h;
	switch (b) {
	case "beforebegin":
		a.setStartBefore(g);
		h = a.createContextualFragment(f);
		g.parentNode.insertBefore(h, g);
		return g.previousSibling;
	case "afterbegin":
		if (g.firstChild) {
			a.setStartBefore(g.firstChild);
			h = a.createContextualFragment(f);
			g.insertBefore(h, g.firstChild);
			return g.firstChild
		} else {
			g.innerHTML = f;
			return g.firstChild
		}
		break;
	case "beforeend":
		if (g.lastChild) {
			a.setStartAfter(g.lastChild);
			h = a.createContextualFragment(f);
			g.appendChild(h);
			return g.lastChild
		} else {
			g.innerHTML = f;
			return g.lastChild
		}
		break;
	case "afterend":
		a.setStartAfter(g);
		h = a.createContextualFragment(f);
		g.parentNode.insertBefore(h, g.nextSibling);
		return g.nextSibling
	}
	throw 'Illegal insertion point -> "' + b + '"'
};
App.autoHeightTextArea = function(g, b, f) {
	g = $E(g);
	b = b ||
	function() {};
	var a = function(m, k) {
		if (b) {
			b()
		}
		var h;
		var j;
		var l = App.getTextAreaHeight(m);
		k = k || l;
		if (l > k) {
			h = k;
			if (m.style.overflowY === "hidden") {
				m.style.overflowY = "auto"
			}
		} else {
			h = l;
			if (m.style.overflowY === "auto") {
				m.style.overflowY = "hidden"
			}
		}
		m.style.height = Math.min(k, l) + "px"
	};
	if (g.binded == null) {
		Core.Events.addEvent(g,
		function() {
			a(g, f)
		},
		"keyup");
		Core.Events.addEvent(g,
		function() {
			a(g, f)
		},
		"focus");
		Core.Events.addEvent(g,
		function() {
			a(g, f)
		},
		"blur");
		g.binded = true;
		g.style.overflowY = "hidden";
		g.style.overflowX = "hidden"
	}
};
App.getTextAreaHeight = function(b) {
	b = $E(b);
	if (b.defaultHeight == null) {
		b.defaultHeight = window.parseInt(Core.Dom.getStyle(b, "height"))
	}
	var f;
	if ($IE) {
		f = Math.max(b.scrollHeight, b.defaultHeight)
	} else {
		var a = $E("_____textarea_____");
		if (a == null) {
			a = document.createElement("textarea");
			a.id = "_____textarea_____";
			document.getElementsByTagName("body")[0].appendChild(a)
		}
		if (a.currentTarget != b) {
			a.style.top = "-1000px";
			a.style.height = "0px";
			a.style.position = "absolute";
			a.style.overflow = "hidden";
			a.style.width = Core.Dom.getStyle(b, "width");
			a.style.fontSize = Core.Dom.getStyle(b, "fontSize");
			a.style.fontFamily = Core.Dom.getStyle(b, "fontFamily");
			a.style.lineHeight = Core.Dom.getStyle(b, "lineHeight");
			a.style.paddingLeft = Core.Dom.getStyle(b, "paddingLeft");
			a.style.paddingRight = Core.Dom.getStyle(b, "paddingRight");
			a.style.paddingTop = Core.Dom.getStyle(b, "paddingTop");
			a.style.paddingBottom = Core.Dom.getStyle(b, "paddingBottom")
		}
		a.value = b.value;
		f = Math.max(a.scrollHeight, b.defaultHeight);
		a.currentTarget = b
	}
	return f
};
Core.Dom.setStyle = function(a, b, f) {
	switch (b) {
	case "opacity":
		a.style.filter = "alpha(opacity=" + (f * 100) + ")";
		if (!a.currentStyle || !a.currentStyle.hasLayout) {
			a.style.zoom = 1
		}
		break;
	case "float":
		b = "styleFloat";
	default:
		a.style[b] = f
	}
};
if (!Core.Base.detect.$IE) {
	Core.Dom.setStyle = function(a, b, f) {
		if (b == "float") {
			b = "cssFloat"
		}
		a.style[b] = f
	}
}
App.EncodeUtils = (function() {
	var f = {
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"\\": "&#92;",
		"&": "&amp;",
		"'": "&#039;",
		"\r": "",
		"\n": "<br>"
	},
	a = /<|>|\'|\"|&|\\|\r\n|\n| /gi;
	var b = {};
	b.regexp = function(g) {
		return g.replace(/\}|\]|\)|\.|\$|\^|\{|\[|\(|\|\|\*|\+|\?|\\/gi,
		function(h) {
			h = h.charCodeAt(0).toString(16);
			return "\\u" + (new Array(5 - h.length)).join("0") + h
		})
	};
	b.html = function(g, h) {
		h = h || f;
		return g.replace(a,
		function(j) {
			return h[j]
		})
	};
	return b
})();
App.PopUpCombo = (function() {
	var it = {},
	ce = Core.Events,
	addEvent = ce.addEvent,
	removeEvent = ce.removeEvent,
	stopEvent = ce.stopEvent,
	filter = App.EncodeUtils.regexp,
	toIndex,
	value,
	content,
	current,
	key,
	reg,
	tip,
	panel,
	head,
	lis = [],
	onSelect,
	onClose,
	len,
	selected = 0;
	it.validate = false;
	it.index = function(num) {
		toIndex = !num ? 0: selected + num;
		toIndex = toIndex < 0 ? len: (toIndex > len) ? 0: toIndex;
		lis[selected].className = "";
		lis[toIndex].className = "cur";
		selected = toIndex;
		value = content[selected]
	};
	it.click = function() {
		onSelect && onSelect(value)
	};
	it.hidden = function() {
		it.initTip();
		tip.style.display = "none";
		it.validate && !(it.validate = false) && onClose && onClose()
	};
	it.initTip = function() {
		if (!tip) {
			tip = $C("div");
			tip.appendChild(panel = $C("ul"));
			with(tip.style) {
				zIndex = 2000;
				position = "absolute";
				display = "none"
			}
			tip.className = "Atwho";
			document.body.appendChild(tip)
		}
	};
	it.position = function(x, y, offsetX, offsetY) {
		it.initTip();
		it.validate = true;
		tip.style.display = "block";
		with(tip.style) {
			left = (x + offsetX) + "px";
			top = (y + offsetY) + "px"
		}
	};
	it.selection = function(event) {
		var keyCode = event.keyCode,
		toIndex,
		value;
		if (!it.validate) {
			return
		}
		if (keyCode == 40 || keyCode == 38) {
			it.index(keyCode == 40 ? 1: -1);
			stopEvent()
		} else {
			if (keyCode == 13 || keyCode == 9) {
				it.click();
				stopEvent()
			} else {
				if (keyCode == 27) {
					it.hidden();
					stopEvent()
				}
			}
		}
	};
	it.addItem = function(itemValue) {
		var li = document.createElement("li"),
		index;
		li.innerHTML = itemValue.replace(reg, "<b>$1</b>");
		lis.push(li);
		len = index = lis.length - 1;
		content.push(itemValue);
		panel.appendChild(li);
		addEvent(li,
		function() {
			lis[selected].className = "";
			lis[index].className = "cur";
			value = itemValue;
			selected = index;
			stopEvent()
		},
		"mouseover");
		addEvent(li,
		function() {
			it.click();
			it.hidden();
			stopEvent()
		},
		"mousedown")
	};
	it.bind = function(oElement, aContent, sKey, fOnSelect, fOnClose, sHead) {
		var i = 0,
		l = aContent.length;
		reg = new RegExp("(" + filter(sKey) + ")", "gi");
		selected = 0;
		content = [];
		onSelect = fOnSelect;
		len = 0;
		lis = [];
		onClose = fOnClose;
		it.initTip();
		panel.innerHTML = "";
		if (sHead) {
			panel.appendChild(head = $C("div"));
			head.innerHTML = sHead
		}
		for (i; i < l; i++) {
			it.addItem(aContent[i])
		}
		if (!lis.length) {
			it.addItem(sKey)
		}
		it.index(0);
		if (current == oElement) {
			return
		}
		current && removeEvent(current, it.selection, "keydown");
		removeEvent(document.body, it.hidden, "mouseup");
		addEvent((current = oElement), it.selection, "keydown");
		addEvent(document.body, it.hidden, "mouseup")
	};
	return it
})();
App.BindAtToTextarea = (function() {
	var d = document,
	format = App.EncodeUtils.html,
	select = App.PopUpCombo,
	cd = Core.Dom,
	getStyle = cd.getStyle,
	selectionStart,
	setStyle = cd.setStyle,
	getXY = cd.getXY,
	ce = Core.Events,
	addEvent = ce.addEvent,
	removeEvent = ce.removeEvent,
	stopEvent = ce.stopEvent,
	ajax = Utils.Io.Ajax,
	clock;
	var cssg = ["overflowY", "height", "width", "paddingTop", "paddingLeft", "paddingRight", "paddingBottom", "marginTop", "marginLeft", "marginRight", "marginBottom"];
	var font = "Tahoma,宋体",
	cssc = {
		fontFamily: font,
		borderStyle: "solid",
		borderWidth: "0px",
		wordWrap: "break-word",
		fontSize: "14px",
		lineHeight: "18px",
		overflowX: "hidden"
	};
	var selectHead = '<div style="height:20px;color:#999999;padding-left:8px;padding-top:2px;line-height:18px;font-size:12px;Tahoma,宋体;">' + $CLTMSG.CL0827 + "</div>";
	var isCss1 = false,
	ua = navigator.userAgent,
	r = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(ua);
	if (r && (r = parseFloat(RegExp.$1)) && r < 8) {
		isCss1 = true
	}
	var hash = {
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"\\": "&#92;",
		"&": "&amp;",
		"'": "&#039;",
		"\r": "",
		"\n": "<br>",
		" ": !isCss1 ? "<span style='white-space:pre-wrap;font-size:14px;font-family:" + font + ";'> </span>": "<pre style='overflow:hidden;display:inline;font-size:'+fontSize+';font-family:" + font + ";word-wrap:break-word;'> </pre>"
	},
	fReg = /<|>|\'|\"|&|\\|\r\n|\n| /gi;
	var AjaxHasAbort = function(url, success, error) {
		var req,
		res,
		error;
		req = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
		if (!req) {
			return
		}
		req.onreadystatechange = function() {
			try {
				if (req.readyState == 4) {
					res = eval("(" + req.responseText + ")");
					success(res)
				}
			} catch(e) {
				return false
			}
		};
		try {
			req.open("GET", url, true);
			req.send(null)
		} catch(e) {
			return false
		}
		return req
	};
	var doRequest = (function() {
		var req;
		return function(url, success, error) {
			if (req) {
				req.abort();
				req
			}
			req = AjaxHasAbort(url, success, error)
		}
	})();
	var at = (function() {
		var it = {},
		current,
		panel,
		cache,
		lastCache,
		flag,
		content,
		nbody,
		reg,
		tu = App.TextareaUtils,
		clock,
		reqed = {},
		validate = false,
		currentKey,
		keyChange = 0,
		items;
		reg = /@[^@\s]{1,20}$/g;
		it.onClose = function() {
			cache = null;
			lastCache = null;
			currentKey = null;
			setTimeout(function() {
				try {
					current.focus()
				} catch(e) {}
			},
			0)
		};
		it.onSelect = function(value) {
			var st = current.scrollTop;
			current.focus();
			tu.insertText(current, value.substring(0, value.indexOf("(") > 0 ? value.indexOf("(") : value.length) + " ", selectionStart, currentKey.length);
			current.scrollTop = st
		};
		it.setContent = function(value, last) {
			panel.style.height = current.clientHeight + "px";
			if (cache != value) {
				cache = value;
				content.innerHTML = format(value, hash)
			}
			if (lastCache != last) {
				lastCache = last;
				nbody.innerHTML = format(last, hash)
			}
			if (scope.$SAFARI) {
				panel.style.overflowY = getStyle(current, "overflowY") == "hidden" ? "hidden": "scroll"
			} else {
				panel.style.overflowY = (current.scrollHeight > current.clientHeight) ? "auto": "hidden"
			}
		};
		it.initTip = function(json) {
			var data,
			len,
			i = 0,
			list = [],
			name,
			tmp = "background-color:#ebebeb;",
			point;
			if (json.code == "A00006" && (data = json.data || [])) {
				point = getXY(flag);
				select.position(point[0], point[1], 0, -(current.scrollTop - 20));
				select.bind(current, data, currentKey, it.onSelect, it.onClose, selectHead);
				reqed[currentKey] = json;
				return
			}
			select.hidden()
		};
		it.check = function() {
			var snap,
			snap = value = current.value.replace(/\r/g, ""),
			key,
			len,
			html,
			param,
			last;
			selectionStart = tu.selectionStart(current);
			value = value.slice(0, selectionStart);
			if ((key = value.match(reg)) && (key = key[0]) && /^@[a-zA-Z0-9\u4e00-\u9fa5_]+$/.test(key)) {
				key = key.slice(1);
				if (currentKey == key) {
					return
				}
				currentKey = key;
				last = snap.slice(selectionStart - currentKey.length, snap.length);
				value = value.slice(0, -currentKey.length - 1);
				it.setContent(value, last);
				if (reqed[key]) {
					it.initTip(reqed[key]);
					return
				}
				doRequest("/mblog/aj_searchat.php?atkey=" + encodeURIComponent(key),
				function(json) {
					it.initTip(json, key)
				},
				select.hidden);
				return
			}
			select.hidden()
		};
		it.sleep = function(event) {
			var keyCode = event.keyCode;
			if (keyCode == "27") {
				return
			}
			clearTimeout(clock);
			clock = setTimeout(it.check, 100)
		};
		it.bindEvent = function(oElement, b) {
			var act = b ? addEvent: removeEvent;
			act(oElement, it.sleep, "keypress");
			act(oElement, it.sleep, "keyup");
			act(oElement, it.sleep, "mouseup")
		};
		it.rePosition = (function() {
			var clock,
			stop = function() {
				clearInterval(clock)
			};
			var flush = function() {
				try {
					if (!current) {
						return
					}
					point = getXY(current);
					with(panel.style) {
						left = point[0] + "px";
						top = point[1] + "px"
					}
				} catch(e) {
					stop()
				}
			};
			return function() {
				stop();
				clock = setInterval(flush, 100)
			}
		})();
		it.mirror = function(oStyleFix) {
			var i = 0,
			p,
			len = cssg.length,
			point,
			fix = 0,
			size = "14px",
			w;
			if ($MOZ) {
				fix = -2
			}
			if (scope.$SAFARI) {
				fix = -6
			}
			for (i; i < len; i++) {
				panel.style[cssg[i]] = getStyle(current, cssg[i])
			}
			for (p in cssc) {
				panel.style[p] = current.style[p] = cssc[p]
			}
			for (p in oStyleFix) {
				panel.style[p] = current.style[p] = oStyleFix[p]
			}
			if (oStyleFix && oStyleFix.fontSize) {
				size = oStyleFix.fontSize
			}
			hash[" "] = !isCss1 ? "<span style='white-space:pre-wrap;font-size:" + size + ";font-family:" + font + ";'> </span>": "<pre style='overflow:hidden;display:inline;font-size:" + size + ";font-family:" + font + ";word-wrap:break-word;'> </pre>";
			panel.style.width = ((parseInt(current.style.width) || current.offsetWidth) + fix) + "px";
			it.bindEvent(current, true);
			it.rePosition();
			return false
		};
		it.to = function(oElement, oStyleFix) {
			if (current == oElement) {
				return
			}
			if (!it.panel) {
				d.body.appendChild(it.panel = panel = $C("div"));
				panel.appendChild(it.content = content = $C("span"));
				panel.appendChild(it.flag = flag = $C("span"));
				panel.appendChild(it.nbody = nbody = $C("span"));
				with(panel.style) {
					zIndex = -1000;
					position = "absolute"
				}
				flag.innerHTML = "@";
				setStyle(panel, "opacity", 0)
			}
			current && it.bindEvent(current, false); (current = oElement) && it.mirror(oStyleFix)
		};
		addEvent(window, (function() {
			var clock;
			return function() {
				clearTimeout(clock);
				clock = setTimeout(select.hidden, 200)
			}
		})(), "resize");
		return it
	})();
	return function(oElement, oStyleFix) {
		oElement.style.fontFamily = font;
		addEvent(oElement,
		function() {
			at.to(oElement, oStyleFix)
		},
		"focus")
	}
})();
scope.loginKit = function() {
	var b = document.cookie + ";";
	var j = ["SUP", "=([^;]*)?;"].join("");
	var a = ["(\\?|&)", "uid", "=([^&]*)(&|$)"].join("");
	var h = b.match(new RegExp(j, "i"));
	h = (h) ? h[1] || "": "";
	h = unescape(h);
	var f = h.match(new RegExp(a));
	f = (f) ? f[2] || "": "";
	var g = scope["$oid"];
	return {
		uid: f,
		isLogin: !!f,
		isAdmin: f && g && (f == g)
	}
};
scope.$isLogin = function() {
	return scope.loginKit().isLogin
};
scope.$isAdmin = function() {
	return scope.loginKit().isAdmin
};
App.ModForward = function(N, m, g, P, n, s, p, o, I) {
	Core.Events.stopEvent();
	if (P && P.getAttribute("allowforward")) {
		App.alert($SYSMSG.M02020);
		return false
	}
	if (scope.$cuser_status === "nofull" && scope.$uid !== "") {
		App.finishInformation();
		return false
	}
	if (g === scope.$uid) {
		App.alert($CLTMSG.CD0024);
		return false
	}
	var y = function(S, R) {
		if ((new RegExp("(@|＠)" + R + "([^a-zA-Z0-9\u4e00-\u9fa5_]|$)")).test(S)) {
			return true
		} else {
			return false
		}
	};
	var v = $CLTMSG.CD0025;
	var C = "";
	var a = decodeURIComponent(s);
	var M = decodeURIComponent(p);
	var w = decodeURIComponent(o);
	if (p === "" || p === undefined) {
		C = v
	} else {
		C = " //@" + a + ":" + M
	}
	var D = $CLTMSG.CD0026;
	var E = '<div class="shareLogin">                     <div id="loginerror_' + N + '"></div>      <em>' + $CLTMSG.CD0027 + '</em>                        <span class="cInputBorder"><span class="cInputborderR"><input type="text" id="logintitle_' + N + '" class="inputType"  style="width: 100px;"/></span></span>                        <em>&nbsp&nbsp&nbsp&nbsp' + $CLTMSG.CD0028 + ' </em>                        <span class="cInputBorder"><span class="cInputborderR"><input type="password" id="loginpwd_' + N + '" class="inputType" style="width: 100px;"/></span></span>                     <div class="clearit"></div>                    </div>';
	E = "";
	if (P) {
		var l = P.getAttribute("lastforwardername");
		var G = P.getAttribute("initblogername")
	}
	var f = [];
	f.push('<div class="selSend">');
	if (l) {
		f.push('<p><label for="lastForwarder_' + N + '"><input type="checkbox" class="labelbox" id="lastForwarder_' + N + '" />' + $CLTMSG.CD0029.replace(/#\{forwarder\}/g, l) + "</label></p>")
	}
	if (G && G != l) {
		f.push('<p><label for="initBloger_' + N + '"><input type="checkbox" class="labelbox" id="initBloger_' + N + '" />' + $CLTMSG.CD0030.replace(/#\{bloger\}/g, G) + "</label></p>")
	}
	f.push(" </div>");
	var B = '   <div class="shareLayer" id="forwardcontent_' + N + '">    <div class="zok" id="modforwardsucess_' + N + '" style="display:none"></div>    <div id="mdforwardinputarea_' + N + '">    <div class="turnToTxt" id="sharecontent_' + N + '">' + $CLTMSG.CD0031 + decodeURIComponent(m) + '</div>    <div class="clearit"></div>    <div style="margin-top:5px;">     <div class="lf">      <a onclick="App.showFaces(this,$E(\'mdforwardtextarea_' + N + '\'),-29,5);return false;" title="' + $CLTMSG.CD0032 + '" href="####" class="faceicon1"></a>     </div>    </div>    <div id="tipInfoBox' + N + '" style="float:right;margin-right:13px;color:#008800"></div>    <textarea class="PY_textarea" id="mdforwardtextarea_' + N + '">' + C + "</textarea>" + E + f.join(" ") + '<div class="MIB_btn"><a href="javascript:void(0);" id="mdforwardbtn_' + N + '" class="btn_normal"><em>' + $CLTMSG.CD0023 + '</em></a><a href="javascript:void(0)" id="mdforwardcancel_' + N + '" class="btn_notclick"><em>' + $CLTMSG.CD0005 + "</em></a></div>    </div>   </div>  ";
	var j = {
		width: 390,
		zIndex: 1000
	};
	var O = new App.Dialog.BasicDialog(D, B, j);
	O.onClose = function() {
		setTimeout(function() {
			var R = $E("num_" + N);
			if (R) {
				R.parentNode.focus()
			}
		},
		200)
	};
	O._success = function(R) {
		O.close();
		var S = new App.alert($CLTMSG.CD0035, {
			icon: 3,
			hasBtn: false
		});
		setTimeout(function() {
			S.close();
			R()
		},
		1000)
	};
	var k = $E("mdforwardtextarea_" + N);
	var H = $CLTMSG.CD0033;
	var r = $CLTMSG.CD0034;
	var K = function() {
		var R = Math.ceil(Core.String.byteLength(Core.String.trim(k.value)) / 2);
		if ($E("tipInfoBox" + N)) {
			if (R > 140) {
				$E("tipInfoBox" + N).innerHTML = r.replace(/\$\{num\}/, (t / 2 - R) * ( - 1));
				$E("tipInfoBox" + N).style.color = "#880000";
				return false
			} else {
				if (Core.String.trim(k.value) === v) {
					$E("tipInfoBox" + N).innerHTML = H.replace(/\$\{num\}/, 140);
					$E("tipInfoBox" + N).style.color = "#008800";
					return true
				}
				$E("tipInfoBox" + N).innerHTML = H.replace(/\$\{num\}/, (t / 2 - R));
				$E("tipInfoBox" + N).style.color = "#008800";
				return true
			}
		}
	};
	if (P) {
		try {
			setTimeout(function() {
				$E("mdforwardtextarea_" + N).focus();
				if (!$IE) {
					$E("mdforwardtextarea_" + N).setSelectionRange(0, 0)
				}
				K()
			},
			100)
		} catch(Q) {}
	} else {
		O.show();
		$E("mdforwardtextarea_" + N).focus();
		if (!$IE) {
			$E("mdforwardtextarea_" + N).setSelectionRange(0, 0)
		}
		setTimeout(K, 1)
	}
	var b = "/mblog/forward.php";
	if (scope.$eid) {
		b = "/event/aj_forward.php"
	}
	var F = $E("mdforwardbtn_" + N);
	var t = 280;
	App.BindAtToTextarea(k, {
		borderWidth: "1px",
		fontSize: "12px"
	});
	App.autoHeightTextArea(k,
	function() {
		setTimeout(K, 1)
	},
	145);
	var u = $E("loginerror_" + N);
	var A = "btn_notclick";
	var x = "btn_normal";
	var q = $E("logintitle_" + N);
	var h = $E("loginpwd_" + N);
	var z = {
		zIndex: 1010,
		ref: q,
		wrap: u,
		offsetY: -1,
		offsetX: 30
	};
	k.onfocus = function() {
		if (k.value === v) {
			k.value = ""
		}
	};
	k.onblur = function() {
		if (k.value === "") {
			k.value = v
		}
	};
	k.onkeydown = function(R) {
		R = R || window.event;
		if (R.keyCode === 13 && R.ctrlKey) {
			F.onclick()
		}
	};
	if ($E("lastForwarder_" + N)) {
		$E("lastForwarder_" + N).onkeydown = function(R) {
			R = R || window.event;
			if (R.keyCode === 13 && R.ctrlKey) {
				F.onclick()
			}
		}
	}
	if ($E("initBloger_" + N)) {
		$E("initBloger_" + N).onkeydown = function(R) {
			R = R || window.event;
			if (R.keyCode === 13 && R.ctrlKey) {
				F.onclick()
			}
		}
	}
	$E("mdforwardcancel_" + N).onclick = function() {
		O.close();
		return false
	};
	function L() {
		var V = k.value = Core.String.leftB(k.value, t);
		if (V === v) {
			V = ""
		}
		var Y = {
			reason: V.replace(/\uff20/ig, "@"),
			mid: N,
			styleid: scope.styleid,
			retcode: scope.doorretcode || ""
		};
		if (scope.$eid) {
			Y.eid = scope.$eid
		}
		scope.doorretcode = "";
		if (scope.$pageid === "search") {
			Y.from = "search"
		}
		if ((scope.$pageid === "myprofile" || scope.$pageid === "search") && scope.$feedtype !== "isori") {
			Y.isindex = 1
		}
		var T = function(ae, ab) {
			if (Y.isLast) {
				var af = $E("_comment_count_miniblog2_" + N);
				if (!af) {
					return
				}
				var ac = af.getElementsByTagName("strong");
				if (ac && (ac = ac[1])) {
					var ad = ac.innerHTML;
					ad = parseInt(ad.match(/(\d+)/));
					ad = ((ad + "") == "NaN" ? 0: ad);
					ad = Math.max((ad + 1), 0);
					ac.innerHTML = "";
					ad && (ac.innerHTML = ["(", ad, ")"].join(""))
				}
			}
			var ag = function() {
				if (!scope.loginKit().isLogin) {
					location.reload()
				}
				if (typeof I === "function") {
					I(P)
				}
				if (App.refurbishUpdate) {
					App.refurbishUpdate.add(1)
				}
				if (!ae) {
					return
				}
				var am = $E("myTempFeedUl");
				var ak = am || $E("feed_list");
				ak.style.display = "";
				if (ak) {
					var ah = document.createElement("UL");
					ah.innerHTML = ae.html;
					var aj = window.document,
					ai = aj.documentElement || {};
					var al = function() {
						if (arguments.length > 0) {
							ai.scrollTop = arguments[0];
							aj.body.scrollTop = arguments[0];
							return
						}
						return (window.pageYOffset || Math.max(ai.scrollTop, aj.body.scrollTop))
					};
					setTimeout(function() {
						var an = ah.getElementsByTagName("LI")[0];
						if (!an) {
							return
						}
						ak.parentNode.insertBefore(ah, ak);
						var ap = ak.getElementsByTagName("LI")[0];
						if (ap) {
							ak.insertBefore(an, ap)
						} else {
							ak.appendChild(an)
						}
						ah.parentNode.removeChild(ah);
						try {
							App.bindMedia(an);
							if (typeof App.regPopCard === "function") {
								var ao = {
									container: an,
									tag: "namecard"
								};
								App.regPopCard(ao)
							}
						} catch(ar) {}
						var aq = ak.getElementsByTagName("LI")[0].offsetHeight;
						al(al() + aq);
						setTimeout(function() {
							var at = $E("num_" + N);
							if (at) {
								at.parentNode.focus()
							}
						},
						2000)
					},
					1000)
				}
			};
			O._success(ag);
			var aa = $E(n);
			if (aa) {
				var ad = aa.innerHTML.match(/\d+/) || 0;
				aa.innerHTML = "(" + (parseInt(ad) + 1) + ")";
				aa.style.display = ""
			}
		};
		var S = function(aa) {
			F.className = x;
			if (aa && typeof aa === "string" && aa.indexOf("error") > 0) {
				App.alert($CLTMSG.CD0036);
				return false
			}
			if (aa.code === "MR0050") {
				F.className = x;
				App.forbidrefresh(function() {
					Core.Events.fireEvent(F, "click")
				},
				b);
				return false
			}
			if (aa === $CLTMSG.CD0037) {
				return
			}
			App.alert(aa, {
				ok: function() {
					if (!scope.loginKit().isLogin) {
						location.reload()
					}
					if (aa.code === "M01155") {
						O.close()
					}
				}
			})
		};
		var Z = 0;
		if ($E("lastForwarder_" + N) && $E("lastForwarder_" + N).checked) {
			Y.isLast = "1";
			Z++
		}
		if ($E("initBloger_" + N) && $E("initBloger_" + N).checked) {
			Y.isRoot = "1";
			Z++
		}
		if (Z > 0) {
			b += "?f=" + Z
		}
		var X = Y.reason;
		var W = X.split("//@");
		X = X.replace(new RegExp("//@", "gm"), "");
		var U = X.split("@");
		if ((U.length - W.length) > 5) {
			var R = App.confirm({
				html: $CLTMSG.ZB0032
			},
			{
				icon: 1,
				ok: function() {
					App.doRequest(Y, b, T, S)
				},
				cancel: function() {
					F.className = x;
					F.focus();
					return false
				},
				ok_focus: true
			});
			R.onClose = function() {
				try {
					F.className = x;
					F.focus()
				} catch(aa) {}
				return false
			};
			return
		}
		App.doRequest(Y, b, T, S)
	}
	function J(S, R) {
		R.focus();
		App.fixElement.setHTML(S, "", z);
		F.className = x;
		return false
	}
	F.onclick = function() {
		if (!K()) {
			var S = ["#fff", "#fee", "#fdd", "#fcc", "#fdd", "#fee", "#fff", "#fee", "#fdd", "#fcc", "#fdd", "#fee", "#fff"];
			var R = 0;
			var T = App.timer.add(function() {
				if (R / 2 >= S.length) {
					App.timer.remove(T);
					return false
				}
				k.style.backgroundColor = S[R / 2];
				R += 1
			});
			return false
		}
		if (F.className === A) {
			return false
		}
		F.className = A;
		if (scope.loginKit().isLogin) {
			L()
		} else {
			App.ModLogin({
				func: function() {
					L()
				}
			});
			F.className = x
		}
		return false
	};
	App.enterSubmit({
		parent: "forwardcontent",
		action: function() {
			F.onclick()
		}
	})
};
Core.Dom.replaceNode = function(a, b) {
	if (a == null || b == null) {
		return false
	}
	a = $E(a);
	b = $E(b);
	b.parentNode.replaceChild(a, b)
};
App.flyDialog = function(b, a, h, g) {
	var f = App[a || "alert"](b, g);
	return f
};
Core.Events.getEventTarget = function(a) {
	a = a || Core.Events.getEvent();
	Core.Events.fixEvent(a);
	return a.target
};
Core.String.encodeHTML = function(a) {
	var b = document.createElement("div");
	b.appendChild(document.createTextNode(a));
	return b.innerHTML.replace(/\s/g, "&nbsp;")
};
Core.String.decodeHTML = function(a) {
	var b = document.createElement("div");
	b.innerHTML = a;
	return b.innerText == undefined ? b.textContent: b.innerText
}; (function() {
	var j = {
		AREA: "MAP",
		CAPTION: "TABLE",
		COL: "TABLE|COLGROUP",
		COLGROUP: "TABLE",
		LEGEND: "FIELDSET",
		OPTGROUP: "SELECT",
		OPTION: "SELECT",
		PARAM: "OBJECT",
		TBODY: "TABLE",
		TD: "TR",
		TFOOT: "TABLE",
		TH: "TABLE|TR",
		THEAD: "TABLE",
		TR: "TBODY|THEAD|TH|TFOOT"
	};
	var h = Core.String.trim;
	var k = function(q, p, r) {
		var s = null;
		if (q.toUpperCase() == "TEXT") {
			s = document.createTextNode(q)
		} else {
			s = $C(q)
		}
		if (typeof p === "object") {
			for (var o in p) {
				switch (o) {
				case "class":
					s.className = p[o];
					break;
				case "id":
					r.domList[p[o]] = s;
					break;
				case "action":
					if (r.actList[p[o]]) {
						r.actList[p[o]] = r.actList[p[o]].concat([s])
					} else {
						r.actList[p[o]] = [s]
					}
					break;
				case "style":
					s.style.cssText = p[o];
					break;
				case "innerHTML":
					if (s.nodeType === 3) {
						s.nodeValue = Core.String.decodeHTML(p[o])
					} else {
						s.innerHTML = p[o]
					}
					break;
				case "nodeValue":
					if (s.nodeType === 3) {
						s.nodeValue = p[o]
					} else {
						s.innerHTML = Core.String.encodeHTML(p[o])
					}
					break;
				default:
					s.setAttribute(o, p[o])
				}
			}
		}
		return s
	};
	var b = function(s, t) {
		var q = j[t.tag];
		if (q) {
			var r = q.split("|");
			for (var p = 0, o = r.length; p < o; p++) {
				if (s.tagName == r[p]) {
					return true
				}
			}
			return false
		}
		return true
	};
	var g = function(p, r, q) {
		r.tag = r.tag.toLocaleUpperCase();
		if (!b(p, r)) {
			return false
		}
		var o = k(r.tag, r.attr, q);
		p.appendChild(o);
		return o
	};
	var l = function(r, p, s) {
		for (var q = 0, o = p.length; q < o; q++) {
			var t = g(r, p[q], s);
			if (!t) {
				alert("tree wrong!!!");
				return false
			}
			if (p[q].list && p[q].list.length) {
				l(t, p[q].list, s)
			}
		}
	};
	var f = function(o) {
		var p = {};
		var r = [];
		if (o) {
			var q = new RegExp("(?:([^\\s=]+)\\s*=\\s*[\\\"\\']([^=\\\"\\']*)[\\\"\\'])", "ig");
			while (r = q.exec(o)) {
				p[r[1]] = r[2]
			}
		}
		return p
	};
	var m = function(v) {
		var u = n(v);
		var s = [];
		var q = s;
		var p = [];
		for (var t = 0, o = u.length; t < o; t += 1) {
			if (u[t][1] === undefined) {
				var r = a(["", "", "text", 'innerHTML="' + u[t][0] + '"', ""]);
				q.push(r)
			}
			if (u[t][1] === "") {
				if (h(u[t][0]) == "") {
					continue
				} else {
					if (/^\<[^\>]+\>$/.test(u[t][0])) {
						var r = a(u[t]);
						q.push(r);
						if (!/\/\s*>$/.test(u[t][0])) {
							r.list = [];
							q = r.list;
							p.push(q)
						}
					} else {
						var r = a(["", "", "text", 'innerHTML="' + u[t][0] + '"', ""]);
						if (h(u[t][0]).replace(/\r|\n/ig, "")) {
							q.push(r)
						}
					}
				}
			}
			if (u[t][1] === "/") {
				p.pop();
				if (p.length === 0) {
					q = s
				} else {
					q = p[p.length - 1]
				}
			}
		}
		return s
	};
	var a = function(p) {
		var o = {};
		o.tag = p[2];
		o.attr = f(p[3]);
		return o
	};
	var n = function(s) {
		var q = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
		var o,
		r;
		var p = [];
		while ((o = q.exec(s))) {
			var t = [];
			for (r = 0; r < o.length; r += 1) {
				t.push(o[r])
			}
			p.push(t)
		}
		return p
	};
	App.builder2 = function(o) {
		var p = {};
		p.box = null;
		p.domList = {};
		p.actList = {};
		if (o.box) {
			p.box = o.box
		} else {
			p.box = $C("DIV")
		}
		if (o.template) {
			if (typeof o.template === "string") {
				o.template = m(o.template)
			}
			l(p.box, o.template, p)
		}
		return p
	}
})();
Core.Dom.getLeft = function(a) {
	var f = 0;
	var b = $E(a);
	if (b.offsetParent) {
		while (b.offsetParent) {
			f += b.offsetLeft;
			b = b.offsetParent
		}
	} else {
		if (b.x) {
			f += b.x
		}
	}
	return f
};
App.square_pop = function() {
	if (!$E("square_pop")) {
		return false
	}
	var o = Core.Events.addEvent;
	var l = Core.Events.getEventTarget;
	var p = Core.Events.stopEvent;
	var q = Core.Dom.getElementsByClass;
	var g = Core.Dom.getLeft;
	var m = Core.Dom.getXY;
	var k = null;
	var f = {
		oSquare: $E("gotosquare"),
		oPop: $E("square_pop")
	};
	var r = q(f.oPop, "div", "arrows")[0];
	var n = 0;
	var b = 0;
	var t = 0;
	var a = function(y, x) {
		n = r.offsetLeft;
		b = r.offsetHeight;
		var u = Core.Dom.getElementsByClass(document, "div", "MIB_trayMain_txt")[0];
		t = m(u)[1] + u.offsetHeight + b;
		var w = (g(y) + (y.offsetWidth / 2) - n) + "px";
		var v = t + "px";
		x.style.left = w;
		x.style.top = v
	};
	var j = function() {
		clearInterval(k)
	};
	var s = function(u) {
		u.style.display = "";
		a(f.oSquare, f.oPop);
		o(document.body, h, "mouseover")
	};
	var h = function() {
		var u = Core.Events.fixEvent(Core.Events.getEvent());
		var w = l(Core.Events.getEvent());
		var v = u.clientY;
		var x = u.clientX;
		var y = m(f.oSquare);
		while (w) {
			if ((w == f.oPop || w == f.oSquare) || (x >= y[0] && x <= y[0] + f.oSquare.offsetWidth && v < t)) {
				return true
			}
			if (w != document.body) {
				w = w.parentNode
			} else {
				break
			}
		}
		j();
		f.oPop.style.display = "none";
		Core.Events.removeEvent(document.body, h, "mouseover")
	};
	o(f.oSquare, (function() {
		return function() {
			s(f.oPop)
		}
	})(), "mouseover")
};
App.Clip = function(b, f) {
	var k = {};
	var l = f || {};
	var a,
	h,
	j,
	m;
	var g = function(q, n, r) {
		var o = {};
		o.left = (n.left && n.left + "px") || "auto";
		o.right = n.right || "auto";
		o.top = n.top || "auto";
		o.bottom = n.bottom || "auto";
		o.endPixel = n.endPixel || 0;
		q.style.clip = "rect(" + o.top + "," + o.right + "," + o.bottom + "," + o.left + ")";
		var p = 0;
		if (!a) {
			a = window.setInterval(function() {
				r(o)
			},
			1)
		}
	};
	k.stopClip = function() {
		clearInterval(a);
		m(l);
		a = null
	};
	k.startClip = function() {
		b.style.visibility = "visible";
		g(b, f, h)
	};
	switch (l.clipType) {
	case "1":
		m = function(n) {
			j = parseInt(n.right || "0")
		};
		h = function(n) {
			j += l.clipspeed || 2;
			b.style.clip = "rect(" + n.top + "," + j + "px," + n.bottom + "," + n.right + ")";
			if (j >= parseInt(n.endPixel)) {
				clearInterval(a)
			}
		};
		m(l);
		break;
	case "2":
		m = function(n) {
			j = parseInt(n.bottom || "0")
		};
		h = function(n) {
			j += l.clipspeed || 2;
			b.style.clip = "rect(" + n.top + "," + n.right + "," + j + "px," + n.left + ")";
			if (j >= parseInt(n.endPixel)) {
				clearInterval(a)
			}
		};
		m(l);
		break
	}
	return k
};
App.unit = function() {
	var b = {},
	a;
	b.u = function(h, g) {
		var f = {
			it: b,
			sup: b[g]
		};
		return function() {
			h.apply(f, arguments);
			return b
		}
	};
	return b
}; (function(a) {
	a.DomBuilder = function(n, s, f) {
		f = typeof f == "object" ? f: {};
		var g = $C("div");
		g.innerHTML = n;
		var l = {},
		m = 0,
		r = {},
		u = {},
		b = g.getElementsByTagName("*"),
		p = b.length,
		k = f.clear || 1,
		j = f.mm || "mm",
		o = f.dd || "dd",
		q,
		h,
		t;
		for (m; m < p; m++) {
			q = b[m];
			t = q.getAttribute(o);
			h = q.getAttribute(j);
			t && (r[t] = q) && (k && q.removeAttribute(o));
			h && ((!u[h] && (u[h] = [q])) || (u[h] = u[h].concat([q]))) && (k && q.removeAttribute(j))
		}
		l.parent = s;
		l.domList = r;
		l.actList = u;
		l.add = function() {
			while (g.firstChild) {
				s.appendChild(g.firstChild)
			}
			return l
		};
		return l
	};
	a.builder3 = function(b, f, g) {
		f.innerHTML = "";
		return a.DomBuilder(b, f, g).add()
	}
})(App);
App.removeChildren = function(a) {
	var b;
	while (b = a.firstChild) {
		a.removeChild(b)
	}
}; (function(proxy) {
	var d = document,
	zIndex = 1000;
	function b2(t, b) {
		return App.builder3(t, b, {
			dd: "id",
			mm: "action"
		})
	}
	proxy.PopUp = function() {
		var it = App.unit(),
		u = it.u,
		wrap,
		body,
		mask,
		cp = "position:absolute;clear:both;",
		ch = "visibility:hidden;display:none",
		cs = "width:100%;height:100%",
		rall = App.removeChildren;
		with(it.wrap = wrap = $C("div")) {
			appendChild(it.body = body = $C("div"));
			style.cssText = [cp, ch, "z-index:" + zIndex++].join(";")
		}
		it.mask = u(function() {
			if (!mask) {
				wrap.insertBefore(mask = $C("iframe"), body);
				with(mask) {
					frameborder = 0;
					src = "about:blank";
					style.cssText = [cp, cs, "filter:alpha(opacity=0);opacity:0;z-index:-1"].join(";")
				}
			}
		});
		it.content = u(function(html) {
			rall(body);
			it.dom = b2(html, body)["domList"]
		});
		it.position = u(function(x, y) {
			if ((x + "") === "NaN" || (y + "") === "NaN") {
				return
			}
			with(wrap.style) {
				left = x + "px";
				top = y + "px"
			}
		});
		it.visible = u(function(b) {
			wrap.style.visibility = b ? "visible": "hidden";
			wrap.style.display = b ? "": "none"
		});
		it.zIndex = u(function(nIndex) {
			wrap.style.zIndex = nIndex
		});
		it.destroy = u(function() {
			wrap.parentNode.removeChild(wrap);
			wrap = body = mask = dom = null
		});
		d.body.appendChild(wrap);
		return it
	}
})(App); (function(a) {
	a.ELSize = function(h, g, b) {
		var m = Core.Dom.getStyle,
		j = h[(g == "width") ? "offsetWidth": "offsetHeight"],
		f = 0,
		k = ["padding", "margin", "border"],
		l = (g == "width") ? ["Left", "Right"] : ["Top", "Bottom"];
		for (f; f < l.length; f++) {
			j -= parseFloat(m(h, "padding" + l[f])) || 0;
			b && (j += parseFloat(m(h, "margin" + l[f])) || 0);
			j -= parseFloat(m(h, "border" + l[f] + "Width")) || 0
		}
		return j
	}
})(App); (function(b) {
	var f = document,
	a;
	App.Wipe = function(y, v, h) {
		var m = App.unit(),
		w = App.ELSize,
		k = 0,
		p = m.u,
		o,
		s = h || 8,
		j = y,
		g,
		z = v,
		t = z.style,
		n,
		r,
		x,
		l,
		q;
		if (!j) {
			j = $C("div");
			j.style.cssText = "position:relative;clear:both";
			n = z.parentNode;
			n.insertBefore(j, z);
			j.appendChild(z)
		}
		g = j.style;
		m.isPlaying = function() {
			return k
		};
		m.isVisible = function() {
			return isVisible
		};
		m.reset = p(function() {
			k = 0;
			clearInterval(o);
			g.visibility = "hidden";
			r = x = l = q = null
		});
		m.wipe = p(function(A, D, E, H) {
			if (k) {
				return
			}
			var I,
			J,
			M,
			C,
			u,
			B,
			F = 1,
			K = D == a ? true: D,
			G,
			L;
			k = 1;
			g.visibility = g.overflow = "hidden";
			g.display = "block";
			t[$IE ? "styleFloat": "cssFloat"] = "left";
			t.marginTop = t.marginLeft = "0px";
			t.width = (r || (r = w(z, "width"))) + "px";
			t.height = (x || (x = w(z, "height"))) + "px";
			g.width = (l || (l = z.offsetWidth)) + "px";
			g.height = (q || (q = z.offsetHeight)) + "px";
			t.marginTop = t.marginLeft = "0px";
			I = {
				up: 0,
				down: 1,
				left: 2,
				right: 3
			} [A];
			J = ["marginTop", "height", "marginLeft", "width"][I];
			M = [t, g, t, g][I];
			C = [q, q, l, l][I];
			u = [0, 1, 0, 1][I];
			G = [C];
			G[s] = 0;
			for (F; F < s; F++) {
				G[F] = (C = C / 2)
			}
			H && G.reverse();
			L = G.concat().reverse();
			B = (K ? u: !u) ? L: G;
			M[J] = [B[0], "px"].join("");
			g.visibility = "visible";
			clearInterval(o);
			o = setInterval(function() {
				if (B.length) {
					M[J] = Math.floor(B.shift()) + "px";
					return
				}
				clearInterval(o);
				k = 0;
				K && (g.overflow = "");
				try {
					t.cssText = "";
					E && p(E)()
				} catch(N) {}
			},
			30)
		});
		return m
	}
})(App); (function(b) {
	var j,
	h,
	a,
	f = 8,
	g;
	b.scrollTo = function(m, k, l) {
		f = l || f;
		g = m - k;
		h = [g];
		h[f] = 0;
		a = 1;
		for (a; a < f; a++) {
			h[a] = (g = g / 2)
		}
		clearInterval(j);
		j = setInterval(function() {
			if (h.length) {
				window.scrollTo(0, k + h.shift());
				return
			}
			clearInterval(j)
		},
		30)
	}
})(App); (function(f) {
	var g = document,
	h = (g.documentElement || {}),
	b,
	a = function(k, j) {
		return App.builder3(k, j, {
			dd: "id",
			mm: "action"
		})
	};
	f.PopUpWipe = function() {
		var l = f.PopUp(),
		o = l.u,
		m = l.e,
		q = [],
		n,
		r,
		k,
		j,
		p;
		l.ani = App.Wipe(l.wrap, l.body);
		l.wipe = o(function(u, s, t) {
			n = u;
			l.ani.wipe(u, s, t)
		});
		l.wipeHide = o(function() {
			l.ani.reset();
			l.wipe(n, false,
			function() {
				l.visible(false)
			})
		});
		l.position = o(function(s, t) {
			if (k != s || j != t) {
				k = s;
				j = t;
				l.ani.reset()
			}
			n = null;
			p = window.pageYOffset || Math.max(h.scrollTop, g.body.scrollTop);
			if (t < p) {
				App.scrollTo(p, t)
			}
			this.sup(s, t)
		},
		"position");
		l.close = o(function() {
			if (!n) {
				l.visible(false);
				return false
			}
			l.wipeHide()
		});
		return l
	}
})(App); (function(l) {
	var k = document,
	b = Core.Events,
	f = b.addEvent,
	j = b.removeEvent,
	h = b.stopEvent,
	a = App.removeChildren,
	m,
	g = function(o, n) {
		return App.builder3(o, n, {
			dd: "id",
			mm: "action"
		})
	};
	l.BasePopUpDialog = function() {
		var q = '<div id="panel" class="miniPopLayer" style="width:200px;"><div id="typePanel" class="txt1 gray6"><img class="tipicon tip1" id="icon" src="' + scope.$BASECSS + 'style/images/common/PY_ib.gif"/><div id="content"></div></div><div id="buttonPanel" style="display:none" class="btn"></div></div>';
		var p = l.PopUpWipe().content(q),
		o = Core.System.winSize(),
		n = p.u,
		r = p.dom;
		p.show = n(function() {
			p.visible(true)
		});
		p.hide = n(function() {
			p.visible(false)
		});
		p.width = n(function(s) {
			r.panel.style.width = (s || 200) + "px"
		});
		p.addButton = n(function(v, s) {
			if (v === m && s === m) {
				a(r.buttonPanel);
				return
			}
			var u;
			r.buttonPanel.appendChild(u = $C("span"));
			var t = g(['<a id="button" style="width:39px;" class="newabtn_ok" href="javascript:void(0)" onclick="return false;"><em>', v, "</em></a>"].join(""), u)["domList"]["button"];
			t.onclick = n(s);
			r.buttonPanel.style.display = ""
		});
		p.content = n(function(s) {
			r.content.innerHTML = s
		});
		p.icon = n(function(s) {
			r.icon.className = ["tipicon tip", s].join("")
		});
		p.wipe = n(function(u, s, t) {
			this.sup(u, s, t)
		},
		"wipe");
		f(window,
		function() {
			var s = Core.System.winSize();
			if (o.width != s.width || o.height != s.height) {
				p.visible(false);
				o = s
			}
		},
		"resize");
		return p
	};
	l.PopUpAlert = (function() {
		var q,
		o,
		n,
		r,
		p;
		return function() {
			if (q) {
				return q
			}
			q = l.BasePopUpDialog();
			o = q.u;
			q.yes = o(function(s) {
				q.onYes = s
			});
			q.close = o(function(s) {
				clearTimeout(p);
				typeof q.onYes == "function" && q.onYes();
				this.sup()
			},
			"close");
			q.lateClose = o(function(s) {
				clearTimeout(p);
				p = setTimeout(function() {
					q.close()
				},
				s || 3000)
			});
			q.position = o(function(s, t) {
				if (s != n || t != r) {
					n = s;
					r = t;
					clearTimeout(p)
				}
				this.sup(s, t)
			},
			"position");
			return q
		}
	})();
	l.PopUpConfirm = (function() {
		var p,
		o,
		n,
		q;
		return function() {
			if (p) {
				return p
			}
			p = l.BasePopUpDialog();
			o = p.u;
			p.yes = o(function(r) {
				p.onYes = r
			});
			p.no = o(function(r) {
				p.onNo = r
			});
			p.close = o(function(r) {
				typeof p.onNo == "function" && p.onNo();
				this.sup()
			},
			"close");
			p.addButton($CLTMSG.CX0125,
			function() {
				typeof p.onYes == "function" && p.onYes();
				p.wipeHide()
			});
			p.addButton($CLTMSG.CX0126,
			function() {
				p.close()
			});
			return p
		}
	})()
})(App);
App.Dom = (function() {
	var b = document.documentElement,
	a = (!b.hasAttribute) ? "className": "class";
	var f = {
		trim: function(g) {
			try {
				return g.replace(/^\s+|\s+$/g, "")
			} catch(h) {
				return g
			}
		},
		hasClass: function(j, h) {
			var g = false,
			k;
			if (j && h) {
				k = j.getAttribute(a) || "";
				if (h.exec) {
					g = h.test(k)
				} else {
					g = h && (" " + k + " ").indexOf(" " + h + " ") > -1
				}
			} else {}
			return g
		},
		addClass: function(j, h) {
			var g = false,
			k;
			if (j && h) {
				k = j.className || "";
				if (!this.hasClass(j, h)) {
					k += " " + h;
					j.setAttribute(a, k.replace(/^\s+|\s+$/g, ""));
					g = true
				}
			} else {}
			return g
		},
		removeClass: function(k, j) {
			var h = false,
			m,
			l,
			g;
			if (k && j) {
				m = k.getAttribute(a) || "";
				k.setAttribute(a, f.trim((m + " ").replace(j + " ", "")));
				l = k.getAttribute(a);
				if (m !== l) {
					k.setAttribute(a, f.trim(l));
					h = true;
					if (k.getAttribute(a) === "") {
						k.removeAttribute(a)
					}
				}
			} else {}
			return h
		},
		replaceClass: function(h, j, g) {
			f.removeClass(h, g);
			f.addClass(h, j)
		},
		getByClass: function(m, h, j) {
			m = f.trim(m);
			h = h || "*";
			if (!j) {
				return []
			}
			var k = [],
			n = j.getElementsByTagName(h);
			for (var l = 0, g = n.length; l < g; ++l) {
				if (f.hasClass(n[l], m)) {
					k[k.length] = n[l]
				}
			}
			return k
		},
		getBy: function(n, h, j) {
			h = h || "*";
			if (!j) {
				return []
			}
			var k = [],
			m = j.getElementsByTagName(h);
			for (var l = 0, g = m.length; l < g; ++l) {
				if (n(m[l])) {
					k[k.length] = m[l]
				}
			}
			return k
		},
		getXY: function(k, h) {
			h = h || {};
			h.abs = h.abs || false;
			var l = {};
			var j = function(p) {
				var m = 0,
				q = 0;
				if (p.getBoundingClientRect) {
					var n = p.getBoundingClientRect();
					var o = b;
					m = n.left + Math.max(o.scrollLeft, document.body.scrollLeft) - o.clientLeft;
					q = n.top + Math.max(o.scrollTop, document.body.scrollTop) - o.clientTop
				} else {
					for (; p != document.body; m += p.offsetLeft, q += p.offsetTop, p = p.offsetParent) {}
				}
				return {
					x: m,
					y: q
				}
			};
			l = j(k);
			if (h.abs) {
				while (k = k.offsetParent) {
					if (App.Dom.getStyle(k, "position") == "absolute") {
						var g = j(k);
						l.x -= g.x;
						l.y -= g.y
					}
				}
			}
			return l
		},
		getScreen: function() {
			var g = {};
			if ($IE) {
				g.w = b.clientWidth;
				g.h = b.clientHeight
			} else {
				g.w = window.innerWidth;
				g.h = window.innerHeight
			}
			return g
		},
		getStyle: function(g, k) {
			if ($IE) {
				var j = g.currentStyle ? g.currentStyle[k] : null;
				switch (k) {
				case "opacity":
					var m = 100;
					try {
						m = g.filters["DXImageTransform.Microsoft.Alpha"].opacity
					} catch(l) {
						try {
							m = g.filters("alpha").opacity
						} catch(l) {}
					}
					return m / 100;
				case "float":
					k = "styleFloat";
				case "height":
					return (j == "auto") ? "0px": g.style[k];
				case "width":
					return (j == "auto") ? "0px": g.style[k];
				default:
					var j = g.currentStyle ? g.currentStyle[k] : null;
					return (g.style[k] || j)
				}
			} else {
				if (k == "float") {
					k = "cssFloat"
				}
				try {
					var h = document.defaultView.getComputedStyle(g, "")
				} catch(l) {
					traceError(l)
				}
				return g.style[k] || h ? h[k] : null
			}
		},
		setStyle: function(g, h, j) {
			if ($IE) {
				switch (h) {
				case "opacity":
					g.style.filter = "alpha(opacity=" + (j * 100) + ")";
					if (!g.currentStyle || !g.currentStyle.hasLayout) {
						g.style.zoom = 1
					}
					break;
				case "float":
					h = "styleFloat"
				}
			} else {
				if (h == "float") {
					h = "cssFloat"
				}
			}
			g.style[h] = j
		},
		insertAfter: function(j, h) {
			var g = h.parentNode;
			if (g.lastChild == h) {
				g.appendChild(j)
			} else {
				g.insertBefore(j, h.nextSibling)
			}
		},
		getScroll: function() {
			var o = document.documentElement,
			k = document.body;
			var m,
			j,
			g,
			n;
			if (o && o.scrollTop) {
				m = o.scrollTop;
				j = o.scrollLeft;
				g = o.scrollWidth;
				n = o.scrollHeight
			} else {
				if (k) {
					m = k.scrollTop;
					j = k.scrollLeft;
					g = k.scrollWidth;
					n = k.scrollHeight
				}
			}
			return {
				t: m,
				l: j,
				w: g,
				h: n
			}
		},
		domClick: function(h) {
			if ($IE) {
				h.click()
			} else {
				var g = document.createEvent("MouseEvents");
				g.initEvent("click", true, true);
				h.dispatchEvent(g)
			}
		},
		contains: function(g, h) {
			if (g === h) {
				return false
			} else {
				if (g.compareDocumentPosition) {
					return ((g.compareDocumentPosition(h) & 16) === 16)
				} else {
					if (g.contains && h.nodeType === 1) {
						return g.contains(h)
					} else {
						while (h = h.parentNode) {
							if (g === h) {
								return true
							}
						}
					}
				}
			}
			return false
		}
	};
	return f
})();
if (App.cartoon === undefined) {
	App.cartoon = {}
} (function(a) {
	a.noticeInput = function(j, h) {
		if (!j) {
			throw "noticeInput need an element"
		}
		if (!h) {
			h = {}
		}
		var g = h.orbit || ["#fee", "#fdd", "#fcc", "#fdd", "#fee", "#fff"];
		var l = h.times || 2;
		var f = h.delay || 2;
		var b = 0;
		var k = App.timer.add(function() {
			if (b / f >= g.length) {
				l -= 1;
				if (l > 0) {
					b = 0
				} else {
					App.timer.remove(k);
					return false
				}
			}
			j.style.backgroundColor = g[b / f];
			b += 1
		});
		return false
	}
})(App.cartoon);
App.bindTips = (function() {
	var a = App.builder2({
		template: '<div class="inter_tip" id="outer" style="position:absolute"><div class="tipcontent" id="inner"></div><div class="tipbt"></div></div>'
	});
	var b = function() {
		document.body.appendChild(a.domList.outer);
		a.domList.outer.style.zIndex = 200;
		a.domList.inner.innerHTML = $CLTMSG.CY0107
	};
	return function() {
		setTimeout(function() {
			if ($E("cancelfollow")) {
				b();
				$E("cancelfollow").onmouseover = function() {
					var f = Core.Dom.getXY($E("cancelfollow"));
					a.domList.outer.style.left = (f[0] - 45) + "px";
					a.domList.outer.style.top = (f[1] - 70) + "px";
					a.domList.outer.style.display = ""
				};
				$E("cancelfollow").onmouseout = function() {
					a.domList.outer.style.display = "none"
				};
				a.domList.outer.style.display = "none"
			} else {
				a.domList.outer.style.display = "none"
			}
		},
		6000)
	}
})();
Core.Dom.getTop = function(a) {
	var f = 0;
	var b = $E(a);
	if (b.offsetParent) {
		while (b.offsetParent) {
			f += b.offsetTop;
			b = b.offsetParent
		}
	} else {
		if (b.y) {
			f += b.y
		}
	}
	return f
};
App.skin_pop = function() {
	if (!$E("skin_tip")) {
		return false
	}
	var l = Core.Events.addEvent;
	var j = Core.Events.getEventTarget;
	var m = Core.Events.stopEvent;
	var n = Core.Dom.getElementsByClass;
	var b = Core.Dom.getLeft;
	var o = Core.Dom.getTop;
	var k = Core.Dom.getXY;
	var h = null;
	var g = '<div id="skin_showtip" style="display:none;z-Index:999" class="pertemplate"><p><a href="/person/myskin.php">' + $CLTMSG.CC5701 + '</a></p><img title="" class="icon_pertemplate" src="' + scope.$BASEIMG + 'style/images/common/transparent.gif"></div>';
	Core.Dom.insertHTML(document.body, g, "beforeend");
	var a = {
		oSkin: $E("skin_tip"),
		oPop: $E("skin_showtip")
	};
	var p = function(u) {
		var r = b(a.oSkin);
		var q = o(a.oSkin);
		var t = (r - 38) + "px";
		var s = (q - 36) + "px";
		u.style.left = t;
		u.style.top = s;
		u.style.display = "";
		l(document.body, f, "mouseover")
	};
	var f = function() {
		var q = Core.Events.fixEvent(Core.Events.getEvent());
		var r = j(Core.Events.getEvent());
		while (r) {
			if ((r == a.oPop || r == a.oSkin.parentNode)) {
				return true
			}
			if (r != document.body) {
				r = r.parentNode
			} else {
				break
			}
		}
		a.oPop.style.display = "none";
		Core.Events.removeEvent(document.body, f, "mouseover")
	};
	l(a.oSkin, (function() {
		return function() {
			p(a.oPop)
		}
	})(), "mouseover")
};
$registJob("initSearch",
function() {
	Core.Events.addEvent($E("m_keyword"), App.focusblur, "blur");
	App.square_pop();
	App.skin_pop();
	App.search("m_keyword", "m_submit", "m_search", 30, (scope.$FW == 0) ? $CLTMSG.WL0001: $CLTMSG.WL0002);
	$E("m_keyword").value = (scope.$FW == 0) ? $CLTMSG.WL0001: $CLTMSG.WL0002;
	App.bindTips()
});
App.search = function(k, j, a, f, g, m) {
	var f = f || 30;
	var n = $E(k);
	var j = $E(j);
	var a = $E(a);
	Utils.Sinput.limitMaxLen(n, f);
	var l = new App.autoSelect({
		input: n,
		id: n.id + "_tip",
		subbtn: j,
		panel: a,
		maxlen: 12
	});
	var h = {
		0: "/k/",
		1: "/search/user.php?search="
	};
	if (scope.$FW == 0 && m !== undefined) {
		l.curIndex = m
	}
	function b(q) {
		var r = Core.String.trim(n.value);
		r = Core.String.leftB(r, f);
		if (r === ((scope.$FW == 0) ? $CLTMSG.WL0001: $CLTMSG.WL0002) || r === "") {
			n.focus();
			return App.cartoon.noticeInput(n)
		}
		if (r && r != g) {
			var o;
			switch ($CONFIG.$pageid) {
			case "myprofile":
				if (window.location.href.indexOf("atme") !== -1) {
					o = "Aboutme_header"
				} else {
					o = "Index_header"
				}
				break;
			case "miniblog_invite_search":
				o = "User_header";
				break;
			case "commentHandler":
				o = "Comments_header";
				break;
			case "favorite":
				o = "favs_header";
				break;
			case "follow":
				if ((window.location.href.indexOf("attention") !== -1) || (window.location.href.indexOf("follow") !== -1)) {
					o = "Friends_header"
				} else {
					o = "fans_header"
				}
				break;
			case "mobile":
				o = "Mobile_header";
				break;
			case "contactlist" || "talklist": o = "messages_header";
				break;
			case "mymblog":
				o = "Profile_header";
				break;
			case "skin":
				o = "Skin_header";
				break
			}
			var p = h[scope.$FW == 0 ? l.curIndex: 1] + encodeURIComponent(encodeURIComponent(r));
			location.href = p.indexOf("?") === -1 ? p + "?Refer=" + o: p + "&Refer=" + o
		} else {
			n.focus()
		}
		Core.Events.stopEvent(q)
	}
	Core.Events.addEvent(j, b, "click");
	App.enterSubmit({
		parent: a,
		action: function(o) {
			Core.Events.fireEvent(j, "click")
		}
	})
};
App.autoSelect = function(a) {
	this.panel = a.panel;
	this.input = $E(a.input);
	this.maxLen = a.maxlen || 4 * 2;
	this.subbtn = a.subbtn;
	this.initHTML(a.id);
	this.clip = App.Clip($E(a.id), {
		clipType: "2",
		bottom: "0px",
		endPixel: "200px",
		clipspeed: 4
	});
	Core.Events.addEvent(this.input, this.fileElement.bind2(this), "focus");
	scope.$FW == 0 && Core.Events.addEvent(this.input, this.keydown.bind2(this), "keydown");
	scope.$FW == 0 && Core.Events.addEvent(this.input, this.fileElement.bind2(this), "keyup");
	scope.$FW == 0 && Core.Events.addEvent(document.body, this.removeElement.bind2(this), "click")
};
App.autoSelect.prototype = {
	initHTML: function(a) {
		var b = $E(a);
		var l = "<span>" + $CLTMSG.CD0002 + '</span><ul id="#{id}_content">' + $CLTMSG.CD0003 + "</ul>";
		l = l.replace(/#\{id\}/g, a);
		b.innerHTML = l;
		var m = $E("m_keyword").value.replace(/^\s+|\s+$/g, "");
		var h = m == "" || m == ((scope.$FW == 0) ? $CLTMSG.WL0001: $CLTMSG.WL0002);
		App.Dom.getBy(function(n) {
			if (n.getAttribute("act") == "def") {
				n.style.display = h ? "": "none"
			}
			if (n.getAttribute("act") == "isinput") {
				n.style.display = !h ? "": "none"
			}
		},
		"span", $E("m_keyword_tip"));
		b.style.zIndex = 300;
		b.style.left = (Core.Dom.getXY(this.input)[0] - Core.Dom.getXY(b.parentNode)[0]) + "px";
		b.style.top = (Core.Dom.getElementsByClass(b.parentNode, "div", "head_menu")[0].offsetTop + this.panel.offsetTop + this.panel.offsetHeight) + "px";
		b.style.width = this.input.offsetWidth + "px";
		this.wrap = b;
		this.searchBlog = $E(a + "_blog");
		this.searchAuthor = $E(a + "_author");
		this.curIndex = 0;
		this.elements = $E(a + "_content").getElementsByTagName("li");
		var g = this;
		for (var k = 0, j = this.elements, f; k < j.length; k++) {
			var f = j[k];
			f.onclick = Core.Function.bind3(g.setCurElement, g, [k, f, "click"]);
			f.onmouseover = Core.Function.bind3(g.setCurElement, g, [k, f, "mouseover"]);
			f.onmouseout = Core.Function.bind3(g.setCurElement, g, [k, f, "mouseout"])
		}
	},
	setCurElement: function(b, g, f) {
		var h = Core.Events.getEvent();
		this.curIndex = b;
		this.curElement = g;
		this.complete();
		this.curElement = this.elements[this.curIndex];
		if (f == "mouseout") {
			var a = h.relatedTarget || h.toElement;
			if (a && a.nodeType == 1) {
				if (a.tagName.toLowerCase() == "li") {
					this.elements[this.curIndex].className = ""
				}
			}
		}
		if (f == "mouseover") {
			this.setBackGroud(g)
		}
		if (f == "click") {
			Core.Events.fireEvent(this.subbtn, "click");
			Core.Events.stopEvent(h);
			return false
		}
	},
	setBackGroud: function(g) {
		for (var f = 0, a = this.elements.length, b = this.elements; f < a; f++) {
			var h = b[f];
			if (h != g) {
				h.className = ""
			} else {
				h.className = "cur"
			}
		}
	},
	fileElement: function(b) {
		if (App.focusblur) {
			App.focusblur()
		}
		if (scope.$FW == 1) {
			return
		}
		var b = Core.Events.getEvent();
		var g = this.input.value;
		g = Core.String.trim(g);
		var a = $E("m_keyword").value.replace(/^\s+|\s+$/g, "");
		var f = a == "" || a == ((scope.$FW == 0) ? $CLTMSG.WL0001: $CLTMSG.WL0002);
		if (f) {
			this.wrap.style.display = "none"
		} else {
			this.wrap.style.display = "";
			this.clipStart()
		}
		if (Core.String.byteLength(g) > this.maxLen) {
			g = Core.String.leftB(g, this.maxLen - 1) + "..."
		}
		this.searchBlog.innerHTML = Core.String.encodeHTML(g);
		this.searchAuthor.innerHTML = Core.String.encodeHTML(g);
		Core.Events.addEvent(this.input,
		function() {
			var h = $E("m_keyword").value.replace(/^\s+|\s+$/g, "");
			var j = h == "" || h == ((scope.$FW == 0) ? $CLTMSG.WL0001: $CLTMSG.WL0002);
			App.Dom.getBy(function(k) {
				if (k.getAttribute("act") == "def") {
					k.style.display = j ? "": "none"
				}
				if (k.getAttribute("act") == "isinput") {
					k.style.display = !j ? "": "none"
				}
				if (k.getAttribute("act") == "txt") {
					k.innerHTML = h
				}
			},
			"span", $E("m_keyword_tip"))
		},
		"keyup");
		return this
	},
	keydown: function(a) {
		a = a || window.event;
		if (a.keyCode == "38" || a.keyCode == "37") {
			this.curIndex--
		}
		if (a.keyCode == "40" || a.keyCode == "39") {
			this.curIndex++
		}
		this.curIndex = this.complete();
		if (this.curElement == this.elements[this.curIndex]) {
			return true
		}
		if (this.curElement) {
			this.curElement.className = "";
			this.curElement = null
		}
		this.curElement = this.elements[this.curIndex];
		this.curElement.className = "cur";
		this.url = this.curElement.getAttribute("url")
	},
	clipStart: function() {
		if (this.wrap.style.visibility != "visible") {
			this.clip.startClip()
		}
	},
	complete: function() {
		if (this.curIndex < 0) {
			this.curIndex = this.elements.length - 1
		}
		if (this.curIndex >= this.elements.length) {
			this.curIndex = 0
		}
		return this.curIndex
	},
	removeElement: function() {
		this.wrap.style.visibility = "hidden";
		this.clip.stopClip();
		this.wrap.style.display = "none"
	}
}; (function() {
	var b = function(j) {
		if (j) {
			for (var h in j) {
				scope[h] = j[h]
			}
		}
	};
	var g = function(k) {
		var j = [];
		if (typeof k == "string" || k == null) {
			return k
		}
		if (typeof k == "object") {
			if (!k.sort) {
				j[0] = "{";
				for (var h in k) {
					j[j.length] = h;
					j[j.length] = ":";
					j[j.length] = "'" + g(k[h]) + "'";
					j[j.length] = ","
				}
				j[j.length - 1] = "}"
			}
		}
		return j.join("")
	};
	var f;
	var a = function() {
		for (var h = 0; h < f.length; h++) {
			if (!f[h].element) {
				continue
			}
			f[h].element.innerHTML = f[h].html;
			if (f[h].classname) {
				f[h].element.className = f[h].classname
			}
		}
	};
	App.followOper = function(l, o, j, n, B, q) {
		scope._uid_ = o;
		if (!scope.$uid) {
			location.replace("/login.php?url=" + encodeURIComponent(location.href));
			return false
		}
		if (scope.$cuser_status === "nofull") {
			App.finishInformation();
			return false
		}
		var A = 1;
		var m = "";
		var v = $C("div");
		v.id = "atnRelation";
		var h = q ? ("," + g(q)) : "";
		var k = $E("pop_3") || $E("atnRelation") || j.parentNode;
		try {
			if (l == "add") {
				App.bindTips();
				m = "/attention/aj_addfollow.php";
				if (q) {
					m += ("?" + App.jsonToQuery(q))
				}
				f = [{
					element: v,
					html: k.innerHTML,
					classname: k.className
				},
				{
					element: $E("more_handle") || null,
					html: ($E("more_handle") && $E("more_handle").innerHTML) || null,
					classname: ""
				}];
				if (scope.isfans) {
					v.className = "MIB_btn_inter lf";
					v.innerHTML = $CLTMSG.CY0105 + '<span class="MIB_line_sp">|</span><a id="cancelfollow" onclick="App.removeFollow(\'' + o + "',this,'" + B + "'" + h + ')" href="javascript:void(0);"><em>' + $CLTMSG.CD0005 + "</em></a>"
				} else {
					v.className = "MIB_btn2 lf";
					v.innerHTML = $CLTMSG.CD0004 + '<span class="MIB_line_sp">|</span><a id="cancelfollow" onclick="App.removeFollow(\'' + o + "',this,'" + B + "'" + h + ')" href="javascript:void(0);"><em>' + $CLTMSG.CD0005 + "</em></a>"
				}
				if (scope.$pageid == "profile" && Core.Dom.getElementsByClass(document, "DIV", "roommate").length > 0) {
					Core.Dom.getElementsByClass(document, "DIV", "roommate")[0].style.display = "";
					var t = Core.Dom.getElementsByClass(document, "DIV", "roommate")[0];
					var z = Core.Dom.getElementsByAttr(t, "action", "groupselector")[0];
					var y = App.group_selector.person(z); (function(p) {
						z.onclick = function(C) {
							App.group_selector.dropBox.moveTo(p).show();
							Core.Events.stopEvent(C)
						}
					})(y)
				}
				App.bindTips();
				Core.Dom.replaceNode(v, k);
				$E("more_handle") && (function() {
					$E("more_handle").innerHTML = ""
				})()
			} else {
				if (l === "remove") {
					m = "/attention/aj_delfollow.php";
					if (scope.$pageid == "profile" && Core.Dom.getElementsByClass(document, "DIV", "roommate").length > 0) {
						var t = Core.Dom.getElementsByClass(document, "DIV", "roommate")[0];
						t.style.display = "none";
						Core.Dom.getElementsByAttr(t, "action", "groupselector")[0].setAttribute("groupids", "");
						Core.Dom.getElementsByClass(document, "DIV", "downmenu downmenuAttr")[0].style.display = "none"
					}
					f = [{
						element: v,
						html: k.innerHTML,
						classname: k.className
					},
					{
						element: $E("more_handle") || null,
						html: ($E("more_handle") && $E("more_handle").innerHTML) || null,
						classname: ""
					}];
					v.className = "MIB_btn lf";
					var w = scope.$BASEIMG + "style/images/common/transparent.gif";
					var r = scope.isfans ? '<img class="ico_addGrn" title="' + scope.sex + $CLTMSG.CC6108 + '" alt="" src="' + w + '" />     <em>      <img class="SG_icon add_icoz" alt="" src="' + w + '">         ' + $CLTMSG.CD0006 + "      </em>": '<img class="SG_icon" src="' + w + '" title="' + $CLTMSG.CD0006 + '" />     <em>' + $CLTMSG.CD0006 + "</em>";
					v.innerHTML = "<a href=\"javascript:void(0);\" onclick=\"if(typeof _S_uaTrack =='function'){_S_uaTrack('tblog_attention_click','" + o + "')};App.followOne('" + o + "',this,'" + B + "'" + h + ')" class="btn_add">' + r + "</a>";
					App.bindTips();
					Core.Dom.replaceNode(v, k);
					$E("more_handle") && (function() {
						$E("more_handle").innerHTML = ""
					})()
				} else {
					if (l === "delfans") {
						m = "/attention/aj_delfollow.php"
					}
				}
			}
		} catch(x) {}
		function u(C, p) {
			if (j) {
				j.ask_following = true
			}
			setTimeout(function() {
				try {
					if (scope.$pageid == "profile") {
						if (C) {
							b(C.global);
							if (C.html && $E("more_handle")) {
								$E("more_handle").innerHTML = C.html
							}
							if (l === "add") {
								App.grpDialog(scope.setGroup, false, q, true);
								App.recommendUser();
								Core.Events.addEvent($E("moreact"),
								function() {
									App.profile_moreact($E("moreact"), "", q)
								},
								"mouseover");
								if ($E("remark_name")) {
									$E("remark_name").innerHTML = "&nbsp;(" + $CLTMSG.ZB0007 + ")";
									$E("remark_name").style.display = "";
									if (App._remarks_[o]) {
										App._remarks_[o] = ""
									}
								}
							} else {
								if (l === "delfans") {
									if (C.global.isfollow) {
										v.className = "MIB_btn2 lf";
										v.innerHTML = $CLTMSG.CD0004 + '<span class="MIB_line_sp">|</span><a id="cancelfollow" onclick="App.removeFollow(\'' + o + "',this,'" + B + "'" + h + ')" href="javascript:void(0);"><em>' + $CLTMSG.CD0005 + "</em></a>";
										Core.Dom.replaceNode(v, k)
									}
									Core.Events.addEvent($E("moreact"),
									function() {
										App.profile_moreact($E("moreact"), "", q)
									},
									"mouseover");
									App.bindTips()
								} else {
									if (l === "remove") {
										if (scope.setGroup) {
											scope.setGroup.show = false;
											scope.setGroup.gids = ""
										}
										if (scope.nickname) {
											scope.nickname.show = false;
											scope.nickname.remarkName = "";
											if ($E("remark_name")) {
												$E("remark_name").innerHTML = "";
												$E("remark_name").style.display = "none"
											}
										}
									}
								}
							}
						}
					}
				} catch(D) {}
			},
			A)
		}
		function s(p) {
			if (j) {
				j.ask_following = false
			}
			if (scope.$pageid == "profile") {
				a()
			}
			if (p && p.code == "MR0050") {
				App.forbidrefresh(function() {
					n.retcode = scope.doorretcode;
					App.doRequest(n, m, u, s)
				},
				"/attention/aj_addfollow.php")
			} else {
				App.flyDialog(p, null, null, {
					ok: function() {
						if (scope.$uid == "123456") {
							location.reload()
						}
					}
				})
			}
		}
		App.doRequest(n, m, u, s)
	}
})();
App.followOne = function(g, h, f, b) {
	if (h.ask_following) {
		return false
	}
	var j = {
		uid: g,
		fromuid: scope.$uid
	};
	if (typeof b === "object") {
		for (var a in b) {
			j[a] = b[a]
		}
	}
	App.followOper("add", g, h, j, f, b)
};
App.removeFollow = function(j, b, a, l) {
	var m = Core.Dom.getXY(b);
	var o = m[0] - ((200 - b.offsetWidth) / 2);
	var n = m[1] - (b.offsetHeight) - 70;
	var f = [$CLTMSG.CD0007, a, "?"].join("");
	var g = {
		touid: j,
		fromuid: scope.$uid
	};
	for (var h in l) {
		g[h] = l[h]
	}
	App.PopUpConfirm().position(o, n).content(f).icon(4).yes(function() {
		setTimeout(function() {
			App.followOper("remove", j, b, g, a, l)
		},
		300)
	}).no(function() {
		b.isOpened = null
	}).wipe("up", true)
};
App.removeFans = function(j, b, a, l) {
	var m = Core.Dom.getXY(b);
	var o = m[0] - ((200 - b.offsetWidth) / 2);
	var n = m[1] - (b.offsetHeight) - 70;
	var f = [$CLTMSG.CD0007, a, "?"].join("");
	var g = {
		touid: j,
		fromuid: scope.$uid,
		action: 1
	};
	for (var h in l) {
		g[h] = l[h]
	}
	App.PopUpConfirm().position(o, n).content(f).icon(4).yes(function() {
		setTimeout(function() {
			App.followOper("delfans", j, b, g, a, l)
		},
		300)
	}).no(function() {
		b.isOpened = null
	}).wipe("up", true)
};
App.focusblur = function() {
	var b = Core.Events.getEventTarget();
	var f = Core.Events.getEvent();
	var a = (scope.$FW == 0) ? $CLTMSG.WL0001: $CLTMSG.WL0002;
	a = a || $CLTMSG.CD0008;
	if (f.type == "focus") {
		if (b.value == a || b.value == $CLTMSG.CD0008) {
			b.value = ""
		}
	}
	if (f.type == "blur") {
		if (b.value == "") {
			b.value = a;
			if ($E("m_keyword_tip")) {
				$E("m_keyword_tip").style.display = "none"
			}
		}
	}
};
Core.Dom.insertAfter = function(f, a) {
	var b = a.parentNode;
	if (b.lastChild == a) {
		b.appendChild(f)
	} else {
		b.insertBefore(f, a.nextSibling)
	}
	return f
};
Core.Dom.removeNode = function(a) {
	a = $E(a) || a;
	try {
		a.parentNode.removeChild(a)
	} catch(b) {}
};
App.copyText = function(j) {
	var l = function() {
		var s = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin: 0;
		if (s) {
			var u = navigator.plugins["Shockwave Flash"].description.split(" ");
			for (var r = 0; r < u.length; ++r) {
				if (isNaN(parseInt(u[r], 10))) {
					continue
				}
				var q = u[r]
			}
			return q >= 10
		} else {
			if ($IE) {
				try {
					new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10");
					return true
				} catch(t) {
					return false
				}
			}
		}
	};
	if (window.clipboardData && $IE6) {
		window.clipboardData.clearData();
		return window.clipboardData.setData("Text", j)
	} else {
		if (l()) {
			if ($IE) {
				try {
					window.clipboardData.clearData();
					return window.clipboardData.setData("Text", j)
				} catch(n) {
					return false
				}
			}
			try {
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				var g = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
				if (!g) {
					return
				}
				var p = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
				if (!p) {
					return
				}
				p.addDataFlavor("text/unicode");
				var o = {};
				var m = {};
				o = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
				var b = j;
				o.data = b;
				p.setTransferData("text/unicode", o, b.length * 2);
				var a = Components.interfaces.nsIClipboard;
				if (!g) {
					return false
				}
				g.setData(p, null, a.kGlobalClipboard);
				return true
			} catch(n) {
				return false
			}
		} else {
			var k = "flashcopier";
			if (!$E(k)) {
				var f = $C("div");
				f.id = k;
				document.body.appendChild(f)
			}
			j = j.replace(/%/g, escape("%")).replace(/&/g, escape("&"));
			var h = '<embed src="/view/js/clipboard.swf" FlashVars="clipboard=' + j + '" width="0" height="0" type="application/x-shockwave-flash"></embed>';
			$E(k).innerHTML = h;
			return true
		}
	}
};
App.copyTextDialog = function(h, b) {
	var g = b || {};
	var a = g.succText || $CLTMSG.CC4101;
	var f = {
		icon: 3
	};
	if (App.copyText(h || "") == false) {
		a = g.errorText || $CLTMSG.CD0016;
		f = {
			icon: 1
		}
	}
	App.alert(a, f);
	Core.Events.stopEvent()
};
Core.Dom.contains = function(a, b) {
	return a.contains(b)
};
if (!$IE) {
	Core.Dom.contains = function(a, b) {
		do {
			if (a == b) {
				return true
			}
		}
		while (b = b.parentNode);
		return false
	}
}
App.changeBackColor = function(j, f) {
	j = j || window.event;
	var l = f.id;
	var h = $E("cancel_" + l);
	var g = $E("message_" + l);
	var k = $E("remark_" + l);
	var b = $E("fire_" + l);
	if (j.type == "mouseover") {
		var a = j.relatedTarget || j.fromElement;
		if (f != a && a && !Core.Dom.contains(f, a)) {
			if (h) {
				h.style.display = ""
			}
			if (g) {
				g.style.display = ""
			}
			if (k) {
				k.style.display = ""
			}
			if (b) {
				b.style.display = ""
			}
		}
	}
	if (j.type == "mouseout") {
		var a = j.relatedTarget || j.toElement;
		if (f != a && a && !Core.Dom.contains(f, a)) {
			if (h) {
				h.style.display = "none"
			}
			if (g) {
				g.style.display = "none"
			}
			if (k) {
				k.style.display = "none"
			}
			if (b) {
				b.style.display = "none"
			}
		}
	}
};
App.admin_uid_list = ["1257113795", "1642909335", "1658688240", "1661523401"];
App.CustomEvent = (function() {
	var j = {},
	a = {},
	h = 0,
	b = Object.prototype.toString,
	g = {},
	k = function(l) {
		var m;
		for (m in l) {
			break
		}
		return ! m
	},
	f = function(l) {
		l = l === window ? g: l;
		if (!/^\[object (Number|String)\]$/.test(b.call(l))) {
			l = l.rid || (l.rid = ++h)
		}
		return l
	};
	j.has = function(l, n) {
		var m;
		if (! (m = a[f(l)])) {
			return false
		}
		if (! (m = m[n])) {
			return false
		}
		return ! k(m)
	};
	j.remove = function(l, n, m) {
		l = f(l);
		if (! (d = a[l])) {
			return
		}
		if (m) {
			d = d[n];
			if (m.rid == null || !d) {
				return
			}
			delete d[m.rid];
			k(d) && j.remove(l, n);
			return
		}
		if (n) {
			delete d[n];
			k(d) && j.remove(l);
			return
		}
		delete a[l]
	};
	j.add = function(l, o, n) {
		if (typeof n !== "function") {
			return
		}
		l = f(l);
		var m = f(n);
		c = a[l] = a[l] || {};
		c = c[o] = c[o] || {};
		c[m] = c[m] || n
	};
	j.fire = function(m, p) {
		var o = f(m);
		if (j.has(o, p)) {
			var q = a[o][p],
			n = [];
			Array.prototype.push.apply(n, arguments);
			n.splice(0, 2);
			n.length === 0 && (n = [m, p]);
			for (var l in q) {
				q[l].apply(null, n)
			}
		}
	};
	return j
})();
Core.Dom.setXY = function(a, j, h) {
	var b = Core.Dom.getStyle(a, "position");
	if (b == "static") {
		Core.Dom.setStyle(a, "position", "relative");
		b = "relative"
	}
	var g = Core.Dom.getXY(a);
	if (g == false) {
		return false
	}
	var f = [parseInt(Core.Dom.getStyle(a, "left"), 10), parseInt(Core.Dom.getStyle(a, "top"), 10)];
	if (isNaN(f[0])) {
		f[0] = (b == "relative") ? 0: a.offsetLeft
	}
	if (isNaN(f[1])) {
		f[1] = (b == "relative") ? 0: a.offsetTop
	}
	if (j[0] != null) {
		a.style.left = j[0] - g[0] + f[0] + "px"
	}
	if (j[1] != null) {
		a.style.top = j[1] - g[1] + f[1] + "px"
	}
	return true
};
App.group_interface = {}; (function(a) {
	a.create = function(b) {
		Utils.Io.Ajax.request("/attention/aj_group_create.php", {
			POST: {
				name: b.name,
				mod: b.mod
			},
			onComplete: function(f) {
				if (f.code == "A00006") {
					b.onSuccess(f.data);
					return true
				}
				b.onError(f);
				return false
			},
			onException: function() {},
			returnType: "json"
		})
	};
	a.del = function(b) {
		Utils.Io.Ajax.request("/attention/aj_group_delete.php", {
			POST: {
				gid: b.id
			},
			onComplete: function(f) {
				if (f.code == "A00006") {
					b.onSuccess(f.data);
					return true
				}
				b.onError(f);
				return false
			},
			onException: function() {},
			returnType: "json"
		})
	};
	a.rename = function(b) {
		Utils.Io.Ajax.request("/attention/aj_group_rename.php", {
			POST: {
				name: b.name,
				gid: b.id
			},
			onComplete: function(f) {
				if (f.code == "A00006") {
					b.onSuccess(f.data);
					return true
				}
				b.onError(f);
				return false
			},
			onException: function() {},
			returnType: "json"
		})
	};
	a.list = function() {
		return scope.groupList
	};
	a.add = function(b) {
		if (b.group_id instanceof Array) {
			b.group_id = b.group_id.join(",")
		}
		var f = {
			action: "add",
			gids: b.group_id
		};
		if (b.person_id) {
			f.fuid = b.person_id
		}
		if (b.person_name) {
			f.pname = b.person_name
		}
		Utils.Io.Ajax.request("/attention/aj_group_update.php", {
			POST: f,
			onComplete: function(g) {
				if (g.code == "A00006") {
					b.onSuccess(g.data);
					return true
				}
				b.onError(g);
				return false
			},
			onException: function() {
				b.onError()
			},
			returnType: "json"
		})
	};
	a.addAll = function(b) {
		if (b.group_id instanceof Array) {
			b.group_id = b.group_id.join(",")
		}
		var f = {
			remarkname: b.remark,
			gids: b.group_id,
			atnId: b.atnId || "",
			newgroup: b.newgroup
		};
		if (b.person_id) {
			f.fuid = b.person_id
		}
		if (b.person_name) {
			f.pname = b.person_name
		}
		Utils.Io.Ajax.request("/attention/aj_group_update.php", {
			POST: f,
			onComplete: function(g) {
				if (g.code == "A00006") {
					b.onSuccess(g.data);
					return true
				}
				b.onError(g);
				return false
			},
			onException: function() {
				b.onError()
			},
			returnType: "json"
		})
	};
	a.remove = function(b) {
		if (b.group_id instanceof Array) {
			b.group_id = b.group_id.join(",")
		}
		Utils.Io.Ajax.request("/attention/aj_group_update.php", {
			POST: {
				fuid: b.person_id,
				gids: b.group_id,
				action: "delete"
			},
			onComplete: function(f) {
				if (f.code == "A00006") {
					b.onSuccess(f.data);
					return true
				}
				b.onError(f);
				return false
			},
			onException: function() {
				b.onError()
			},
			returnType: "json"
		})
	}
})(App.group_interface); (function(b) {
	var g = {};
	b.group_manage = {};
	var f = function(j, l, k) {
		g[j].push({
			onSuccess: l,
			params: k
		})
	};
	var h = function(n, o, l) {
		for (var m = 0, j = g[n].length; m < j; m += 1) {
			try {
				var k = g[n][m];
				k.onSuccess(o, l, k.params)
			} catch(p) {}
		}
	};
	for (var a in App.group_interface) {
		g[a] = [];
		b.group_manage[a] = (function(j) {
			return function(k) {
				k = k || {};
				k.onSuccess = function(l) {
					try {
						h(j, l, k)
					} catch(m) {}
					k.success(l)
				};
				k.onError = k.onError ||
				function(l) {
					if (l && l.code) {
						App.alert($SYSMSG[l.code])
					}
				};
				return App.group_interface[j](k)
			}
		})(a)
	}
	b.group_manage.register = f
})(App);
App.group_manage.register("create",
function(a, b) {
	scope.groupList.push({
		gid: a,
		name: Core.String.encodeHTML(b.name),
		count: 0
	})
},
{});
App.group_manage.register("del",
function(f, g) {
	for (var b = 0, a = scope.groupList.length; b < a; b += 1) {
		if (scope.groupList[b]["gid"] == g.id) {
			scope.groupList.splice(b, 1);
			return false
		}
	}
},
{});
App.group_manage.register("rename",
function(f, g) {
	for (var b = 0, a = scope.groupList.length; b < a; b += 1) {
		if (scope.groupList[b]["gid"] == g.id) {
			scope.groupList[b]["name"] = Core.String.encodeHTML(g.name)
		}
	}
},
{});
App.group_manage.register("add",
function(f, g) {
	for (var b = 0, a = scope.groupList.length; b < a; b += 1) {
		if (scope.groupList[b]["gid"] == g.group_id) {
			scope.groupList[b]["count"] = parseInt(scope.groupList[b]["count"]) + 1
		}
	}
},
{});
App.group_manage.register("remove",
function(f, g) {
	for (var b = 0, a = scope.groupList.length; b < a; b += 1) {
		if (scope.groupList[b]["gid"] == g.group_id) {
			scope.groupList[b]["count"] = parseInt(scope.groupList[b]["count"]) - 1
		}
	}
},
{});
App.group_manage.register("addAll",
function(f, g) {
	for (var b = 0, a = scope.groupList.length; b < a; b += 1) {
		if (scope.groupList[b]["gid"] == g.group_id) {
			scope.groupList[b]["count"] = parseInt(scope.groupList[b]["count"]) + 1
		}
	}
},
{});
Core.Array.isArray = function(a) {
	return Object.prototype.toString.call(a) === "[object Array]"
};
App.profile_moreact = function(p, b, n) {
	var l = scope.letter || {
		show: false
	};
	var a = scope.intro_friend || {
		show: false
	};
	var f = {
		show: false
	};
	var q = scope.nickname || {
		show: false
	};
	var j = scope.recFriend || {
		show: false
	};
	var k = scope.black || {
		show: false
	};
	var r = {
		show: (scope.isfans ? true: false)
	};
	var m = [{
		tagName: "IFRAME",
		attributes: {
			frameborder: "0",
			src: "about:blank",
			"class": "",
			id: "ifm",
			style: "position: absolute; z-index: 120; left: 100px; top: 100px;"
		}
	},
	{
		tagName: "UL",
		attributes: {
			"class": "handle_menu",
			id: "handle_menu",
			style: "position: absolute; z-index: 600; left: 100px; top: 100px;"
		},
		childList: [{
			tagName: "LI",
			attributes: {
				id: "message"
			},
			childList: [{
				tagName: "A",
				attributes: {
					"class": "letter",
					id: "btn_message",
					href: "javascript:void(0);",
					innerHTML: $CLTMSG.CD0054
				}
			}]
		},
		{
			tagName: "LI",
			attributes: {
				id: "group"
			},
			childList: [{
				tagName: "A",
				attributes: {
					"class": "set_group",
					id: "btn_group",
					href: "javascript:void(0);",
					innerHTML: $CLTMSG.CD0059
				}
			}]
		},
		{
			tagName: "LI",
			attributes: {
				id: "delfans"
			},
			childList: [{
				tagName: "A",
				attributes: {
					"class": "del_fans",
					id: "btn_delfans",
					href: "javascript:void(0);",
					innerHTML: $CLTMSG.CY0104
				}
			}]
		},
		{
			tagName: "LI",
			attributes: {
				id: "nickname"
			},
			childList: [{
				tagName: "A",
				attributes: {
					"class": "nickname",
					id: "btn_nickname",
					href: "javascript:void(0);",
					innerHTML: $CLTMSG.CD0060
				}
			}]
		},
		{
			tagName: "LI",
			attributes: {
				id: "friend"
			},
			childList: [{
				tagName: "A",
				attributes: {
					"class": "rec_friend",
					id: "btn_friend",
					href: "javascript:void(0);",
					innerHTML: $CLTMSG.CX0028
				}
			}]
		},
		{
			tagName: "LI",
			attributes: {
				id: "intro_friend"
			},
			childList: [{
				tagName: "A",
				attributes: {
					"class": "intro_friend",
					id: "btn_intro_friend",
					href: "http://weibo.com/recommend/addrecommend.php?name=" + (encodeURIComponent(scope.realname) || ""),
					innerHTML: $CLTMSG.CC6107.replace(/#sex#/, scope.sex)
				}
			}]
		},
		{
			tagName: "LI",
			attributes: {
				id: "black_list"
			},
			childList: [{
				tagName: "A",
				attributes: {
					"class": "black_list",
					id: "btn_black_list",
					href: "javascript:void(0);",
					innerHTML: $CLTMSG.CD0061
				}
			}]
		}]
	}];
	var o = function(v, u) {
		var w = Core.Dom.getXY(v);
		Core.Dom.setXY(u.box, [w[0], w[1] + v.offsetHeight - 4]);
		Core.Dom.setXY(u.ifm, [w[0], w[1] + v.offsetHeight - 4])
	};
	var g = function(u) {
		Core.Events.addEvent(u.domList.btn_message,
		function() {
			App.msgDialog(decodeURIComponent(l.name), false);
			u.box.style.display = "none";
			u.ifm.style.display = "none"
		},
		"click");
		Core.Events.addEvent(u.domList.btn_group,
		function() {
			App.grpDialog(scope.setGroup);
			u.box.style.display = "none";
			u.ifm.style.display = "none"
		},
		"click");
		Core.Events.addEvent(u.domList.btn_nickname,
		function() {
			App.followRemarkAdd("", q.oid || "", Core.String.decodeHTML(decodeURIComponent(q.remarkName)) || "");
			u.box.style.display = "none";
			u.ifm.style.display = "none"
		},
		"click");
		Core.Events.addEvent(u.domList.btn_friend,
		function() {
			App.modrecommended(decodeURIComponent(j.name));
			u.box.style.display = "none";
			u.ifm.style.display = "none"
		},
		"click");
		Core.Events.addEvent(u.domList.btn_black_list,
		function() {
			App.move_to_blacklist(k.oid, u.domList.black_list, decodeURIComponent(k.name), decodeURIComponent(k.ta));
			u.box.style.display = "none";
			u.ifm.style.display = "none"
		},
		"click");
		Core.Events.addEvent(u.domList.btn_delfans,
		function() {
			if (n) {
				n.action = 1
			}
			App.removeFans(scope.$oid, u.domList.btn_delfans, decodeURIComponent(j.name), n);
			u.box.style.display = "none";
			u.ifm.style.display = "none"
		},
		"click")
	};
	var s = function(u) {
		if (!l.show) {
			u.domList.message.style.display = "none"
		} else {
			u.domList.message.style.display = ""
		}
		if (!f.show) {
			u.domList.group.style.display = "none"
		} else {
			u.domList.group.style.display = ""
		}
		if (!q.show) {
			u.domList.nickname.style.display = "none"
		} else {
			u.domList.nickname.style.display = ""
		}
		if (!j.show) {
			u.domList.friend.style.display = "none"
		} else {
			u.domList.friend.style.display = ""
		}
		if (!k.show) {
			u.domList.black_list.style.display = "none"
		} else {
			u.domList.black_list.style.display = ""
		}
		if (!r.show) {
			u.domList.delfans.style.display = "none"
		} else {
			u.domList.delfans.style.display = ""
		}
		if (!a.show) {
			u.domList.intro_friend.style.display = "none"
		} else {
			u.domList.intro_friend.style.display = ""
		}
		u.box.style.display = ""
	};
	scope.moreactshowing = true;
	if (!scope.moreact) {
		scope.moreact = new App.Builder(m);
		scope.moreact.box = scope.moreact.domList.handle_menu;
		scope.moreact.ifm = scope.moreact.domList.ifm;
		document.body.appendChild(scope.moreact.ifm);
		document.body.appendChild(scope.moreact.box);
		s(scope.moreact);
		g(scope.moreact);
		scope.moreact.ifm.style.position = "absolute";
		scope.moreact.box.style.position = "absolute";
		scope.moreact.ifm.style.zIndex = 600;
		scope.moreact.box.style.zIndex = 600;
		scope.moreact.ifm.style.height = scope.moreact.box.offsetHeight + "px";
		scope.moreact.ifm.style.width = scope.moreact.box.offsetWidth + "px";
		var t;
		if (p) {
			o(p, scope.moreact);
			t = setInterval(function() {
				o(p, scope.moreact)
			},
			100)
		}
		Core.Events.addEvent(p,
		function() {
			scope.moreactshowing = false;
			setTimeout(function() {
				if (!scope.moreactshowing) {
					h()
				}
			},
			100)
		},
		"mouseout");
		Core.Events.addEvent(scope.moreact.box,
		function() {
			scope.moreactshowing = true
		},
		"mouseover");
		Core.Events.addEvent(scope.moreact.box,
		function() {
			scope.moreactshowing = false;
			setTimeout(function() {
				if (!scope.moreactshowing) {
					h()
				}
			},
			100)
		},
		"mouseout")
	} else {
		s(scope.moreact)
	}
	var h = function(w) {
		var v = Core.Events.getEvent();
		var u = v ? (v.srcElement || v.target) : null;
		while (u && u != document.body) {
			if (u == scope.moreact.box || u == $E("moreact")) {
				return true
			}
			u = u.parentNode
		}
		if (scope.moreact) {
			scope.moreact.box.style.display = "none";
			scope.moreact.ifm.style.display = "none"
		}
		Core.Events.removeEvent(document.body, h, "click")
	};
	Core.Events.addEvent(document.body, h, "click")
};
App.grpDialog = function(k, u, m, n) {
	try {
		var B = decodeURIComponent(k.name);
		var C = k.gids ? k.gids.split(",") : "";
		var t = App.group_manage.list();
		var r = k.oid;
		for (var w = 0, y = t.length; w < y; w += 1) {
			t[w]["checked"] = false;
			for (var v = 0, l = C.length; v < l; v += 1) {
				if (C[v] == t[w][("gid")]) {
					t[w]["checked"] = true
				}
			}
		}
		var o = function() {
			var E = [];
			for (var F = 0; F < t.length; F++) {
				E.push('<li><input type="checkbox" value="' + t[F]["gid"] + '" class="labelbox" name="group_dialog_' + t[F]["gid"] + '" id="group_dialog_' + t[F]["gid"] + '"' + (t[F]["checked"] ? "  checked": "") + '/><label style="cursor:pointer;" for="group_dialog_' + t[F]["gid"] + '" title="' + Core.String.decodeHTML(Core.String.encodeHTML(t[F]["name"])) + '">' + Core.String.decodeHTML(Core.String.encodeHTML(t[F]["name"])) + "</label></li>")
			}
			return E.join("")
		};
		var p = '<div class="shareLayer groupNewBox">                         <div class="shareTxt clearFix" id="shareTxt"><span class="lf">' + $CLTMSG.CD0062 + '</span><span class="rt gray6" id="whygroup">为什么要设置分组<img title="" alt="" src="' + scope.$BASEIMG + 'style/images/common/PY_ib.gif" class="tipicon tip4" /></span></div>       <div class="group_nb_bg" >           ' + (scope.groupList.length <= 0 ? '<div id="group_intro" class="group_note">你可以新建一个分组，把你关注的同事、同学或名人明星等放入不同的分组中。</div>': "") + '        <ul id="group_list_D" class="group_list">' + o() + '</ul>        <div class="addNew"><a id="creategrp" href="javascript:void(0);"><em>+</em>' + $CLTMSG.CD0063 + '</a></div>                                <div id="newgrp" class="newBox" style="display:none">                                 <div class="newBox_input">                                    <input id="group_input" type="text" value="' + $CLTMSG.CD0064 + '" class="newBox_txt"/>             <a href="javascript:void(0);" id="create_group" class="btn_normal"><em>' + $CLTMSG.CD0065 + '</em></a>            <a href="javascript:void(0);" id="cancel_group">' + $CLTMSG.CD0005 + '</a>                                    </div>                                <p id="group_error" class="newBox_err error_color" style="display:none">' + $CLTMSG.CD0066 + "</p>                                </div>       </div>" + (n ? ('<div class="addNew"> ' + $CLTMSG.ZB0006 + '<input type="text" id="set_group_remark" style="color:#999" value=""/><span id="set_group_remark_err" style="display:none" class="errorTs2 error_color"></span></div>') : "") + '<div class="MIB_btn">          <a href="javascript:void(0)" id="g_submit" class="btn_normal"><em>' + $CLTMSG.CX0036 + '</em></a>       <a href="javascript:void(0)" id="g_nogroup" class="btn_normal"><em>' + $CLTMSG.CX0126 + "</em></a>          </div>                        </div>";
		p = p.replace(/#\{nick\}/, B);
		var A = {
			width: 390,
			zIndex: 1200,
			hidden: true
		};
		var b = new App.Dialog.BasicDialog(n ? ('<img title="" alt="" src="' + scope.$BASEIMG + 'style/images/common/PY_ib.gif" class="tipicon tip3">' + $CLTMSG.CD0154) : $CLTMSG.CD0059, p, A);
		var a = App.PopUp().content('                <div id="whygroup" class="PopLayer" style="visibility:hidden;position:absolute;z-Index:1300">         <table class="Poptips">             <tbody><tr>                 <td class="top_l"></td>                 <td class="top_c"></td>                 <td class="top_r"></td>             </tr>             <tr>                 <td class="mid_l"></td>                 <td class="mid_c"><div class="layerBox">                         <div style="width: auto;" class="layerBoxCon1">                             <div class="PopInfo clearFix">                                 <div class="Poparrow4"></div>                                 <div style="width: auto" class="iconntent clearFix">                                     <!--内容开始 -->                                     <div style="width: 205px; height: 50px;">                •&nbsp;' + $CLTMSG.CC6701 + "<br />                                                       •&nbsp;" + $CLTMSG.CC6702 + "<br />                                                       •&nbsp;" + $CLTMSG.CC6703 + '                                     </div>                                     <!--内容结束 -->                                 </div>                             </div>                         </div>                     </div></td>                 <td class="mid_r"></td>             </tr>             <tr>                 <td class="bottom_l"></td>                 <td class="bottom_c"></td>                 <td class="bottom_r"></td>             </tr>         </tbody></table>                    </div>').zIndex(1300);
		a.wrap.style.display = "";
		a.wrap.style.position = "";
		var s = {
			submit: $E("g_submit"),
			shareTxt: $E("shareTxt"),
			notgroup: $E("g_nogroup"),
			creategroup: $E("create_group"),
			creategrp: $E("creategrp"),
			newgrp: $E("newgrp"),
			group_error: $E("group_error"),
			group_input: $E("group_input"),
			group_list: $E("group_list_D"),
			cancel_group: $E("cancel_group"),
			whygroup: $E("whygroup"),
			group_intro: $E("group_intro"),
			remark: $E("set_group_remark"),
			remark_err: $E("set_group_remark_err")
		};
		if (n) {
			var f = k.remarkName || (scope.nickname && Core.String.decodeHTML(decodeURIComponent(scope.nickname.remarkName))) || "";
			f = (f === "") ? $CLTMSG.ZB0007: f;
			s.remark.value = f;
			s.remark.onfocus = function() {
				if (this.value === $CLTMSG.ZB0007) {
					this.value = ""
				}
				this.style.color = "#333";
				s.remark_err.style.display = "none";
				s.remark_err.innerHTML = ""
			};
			Utils.Sinput.limitMaxLen(s.remark, 16);
			Utils.Sinput.limitMaxLen(s.group_input, 16);
			s.remark.onblur = function() {
				if (this.value === "") {
					this.value = $CLTMSG.ZB0007
				}
				this.style.color = "#999"
			}
		}
		if (scope.groupList.length >= 20) {
			s.creategrp.style.display = "none"
		} else {
			s.creategrp.style.display = ""
		}
		if (scope.groupList.length <= 0) {
			s.creategrp.style.display = "none";
			s.newgrp.style.display = "";
			s.newgrp.className = "newBox newBox_noBg";
			s.submit.style.display = "";
			s.notgroup.style.display = ""
		} else {
			if (scope.groupList.length < 20) {
				s.creategrp.style.display = ""
			}
			s.newgrp.style.display = "none";
			s.newgrp.className = "newBox";
			s.submit.style.display = "";
			s.notgroup.style.display = ""
		}
		b.show();
		var h = function(F, E) {
			if (F.length != E.length) {
				return true
			} else {
				for (var H = 0; H < F.length; H++) {
					for (var G = 0; G < E.length; G++) {
						if (F[H] == E[G]) {
							break
						} else {
							if (G == E.length - 1) {
								return true
							}
						}
					}
				}
				return false
			}
		};
		var q = function(G, F) {
			var E = Core.Events.getEventTarget(G);
			var j = E.tagName;
			if (!j) {
				return
			}
			j = j.toLowerCase();
			if (j === "label" || j === "input") {
				E.parentNode.className = F ? "hover": "";
				Core.Events.stopEvent(G)
			} else {
				if (j === "li") {
					E.className = F ? "hover": ""
				}
			}
		};
		var x = function(F) {
			var E = Core.Events.getEventTarget(F);
			var j = E.tagName;
			if (!j) {
				return
			}
			j = j.toLowerCase();
			if (j === "li") {
				E.getElementsByTagName("INPUT")[0].checked = !E.getElementsByTagName("INPUT")[0].checked;
				Core.Events.stopEvent(F)
			}
			return false
		};
		s.whygroup.onmouseover = function(j) {
			var E = Core.Dom.getXY(s.whygroup);
			Core.Dom.setXY(a.dom.whygroup, [E[0] + s.whygroup.offsetWidth + 5, E[1] - 3 + s.whygroup.offsetHeight - a.dom.whygroup.offsetHeight / 2]);
			a.dom.whygroup.style.visibility = "visible"
		};
		s.whygroup.onmouseout = function(j) {
			a.dom.whygroup.style.visibility = "hidden"
		};
		s.group_list.onmouseover = function(j) {
			q(j, true)
		};
		s.group_list.onmouseout = function(j) {
			q(j)
		};
		s.group_list.onclick = function(j) {
			x(j)
		};
		s.notgroup.onclick = function() {
			b.close();
			if (u) {
				window.location.reload(true)
			}
		};
		var g = $CLTMSG.CD0064;
		s.cancel_group.onclick = function() {
			if (scope.groupList.length <= 0) {
				b.close();
				return false
			}
			s.creategrp.style.display = "";
			s.newgrp.style.display = "none";
			s.group_input.value = g;
			s.group_error.style.display = "none"
		};
		s.group_input.onfocus = function() {
			if (s.group_input.value == g) {
				s.group_input.value = ""
			}
		};
		s.group_input.onblur = function() {
			if (Core.String.trim(s.group_input.value) == "") {
				s.group_input.value = g
			}
		};
		s.submit.onclick = function() {
			var G = App.htmlToJson(s.group_list, ["input"]);
			var j = new Array();
			for (var F in G) {
				j.push(G[F])
			}
			if ((s.group_input.value !== g && s.group_input.value !== "") || h(j, C) || (n && (E !== f))) {
				if (s.group_input.value !== g && s.group_input.value !== "") {
					if (!D()) {
						return false
					}
				}
				var E = "";
				var H = {
					group_id: j.join(","),
					person_id: r,
					remark: E,
					newgroup: s.group_input.value === g ? "": s.group_input.value,
					atnId: (m && m.atnId) ? m.atnId: "",
					success: function(J) {
						App.CustomEvent.fire("window", "cardCache");
						b.close();
						var I = App.alert($CLTMSG.CD0067, {
							hasBtn: false,
							icon: 3
						});
						setTimeout(function() {
							I.close()
						},
						1800);
						if (J && J.global) {
							for (var L in J.global) {
								scope[L] = J.global[L]
							}
						}
						try {
							if (scope.nickname && scope.nickname.remarkName) {
								$E("remark_name").innerHTML = "(" + scope.nickname.remarkName + ")";
								$E("remark_name").style.display = ""
							} else {
								$E("remark_name").style.display = "none"
							}
						} catch(K) {}
					},
					onError: function(I) {
						if (I.code == "M05008") {
							s.remark_err.style.display = "";
							s.remark_err.innerHTML = $CLTMSG.CC1205
						} else {
							s.remark_err.style.display = "none";
							s.remark_err.innerHTML = ""
						}
						return false
					}
				};
				if (n) {
					E = s.remark.value === $CLTMSG.ZB0007 ? "": s.remark.value;
					H.remark = E
				}
				App.group_manage.addAll(H)
			} else {
				if (u) {
					window.location.reload(true)
				}
				b.close()
			}
		};
		s.creategroup.onclick = function() {
			if (s.creategroup.locked) {
				return false
			}
			if (!D()) {
				return false
			}
			s.group_input.value = Core.String.trim(s.group_input.value);
			if (!s.group_input.value) {
				return false
			}
			s.creategroup.locked = true;
			App.group_manage.create({
				name: Core.String.trim(s.group_input.value),
				success: function(j) {
					Core.Dom.removeNode(s.group_intro);
					s.group_input.blur();
					s.creategrp.style.display = "";
					s.newgrp.style.display = "none";
					s.group_error.style.display = "none";
					Core.Dom.insertHTML(s.group_list, '<li><input type="checkbox" value="' + j + '" class="labelbox" name="group_dialog_' + j + '" id="group_dialog_' + j + '" checked/><label for="group_dialog_' + j + '" style="cursor:pointer" title="' + Core.String.encodeHTML(Core.String.trim(s.group_input.value)) + '">' + Core.String.encodeHTML(Core.String.trim(s.group_input.value)) + " </label></li>", "beforeend");
					s.creategroup.locked = false;
					s.group_input.value = g;
					if (scope.groupList.length >= 20) {
						setTimeout(function() {
							s.creategrp.style.display = "none"
						},
						20)
					}
					s.newgrp.className = "newBox";
					s.submit.style.display = "";
					s.notgroup.style.display = "";
					s.shareTxt.innerHTML = $CLTMSG.CD0062.replace(/#\{nick\}/, B);
					s.submit.focus();
					App.CustomEvent.fire("window", "cardCache")
				},
				onError: function(j) {
					s.creategroup.locked = false;
					if (j && j.code) {
						s.group_error.innerHTML = $SYSMSG[j.code];
						s.group_error.style.display = ""
					}
					return false
				}
			})
		};
		s.creategrp.onclick = function() {
			s.creategrp.style.display = "none";
			s.newgrp.style.display = ""
		};
		s.group_input.onkeypress = function(E) {
			var j = E || window.event;
			if (j.keyCode == 13) {
				Core.Events.fireEvent(s.creategroup, "click")
			}
		};
		var D = function() {
			var F = Core.String.trim(s.group_input.value);
			if (Core.String.byteLength(F) > 16) {
				s.group_error.innerHTML = $SYSMSG.M14010;
				s.group_error.style.display = "";
				return false
			}
			if (F == "" || F == g) {
				s.group_error.innerHTML = $SYSMSG.M14014;
				s.group_error.style.display = "";
				return false
			}
			for (var E = 0, j = t.length; E < j; E += 1) {
				if (Core.String.decodeHTML(t[E]["name"]) == F) {
					s.group_error.innerHTML = $SYSMSG.M14008;
					s.group_error.style.display = "";
					return false
				}
			}
			s.group_input.value = F;
			s.group_error.style.display = "none";
			return true
		};
		return b
	} catch(z) {}
};
$registJob("profile_moreact",
function() {
	var a = $E("moreact");
	_conf = scope.atnSts || {};
	Core.Events.addEvent(a,
	function() {
		App.profile_moreact(a, null, _conf)
	},
	"mouseover")
});
App.followadd = function(j, l, h, g, f) {
	h = "/attention/aj_addfollow.php";
	while (l.nodeName.toLowerCase(0) != "p") {
		l = l.parentNode
	}
	function a(n) {
		if (scope.$pageid == "follow" && scope.$oid == scope.$uid) {
			var k = scope.$BASECSS + "style/images/common/transparent.gif";
			l.innerHTML = '<img class="small_icon sicon_atteo" title="' + $CLTMSG.CC3001 + '" src="' + k + '">'
		} else {
			l.innerHTML = '<a class="concernBtn_Yet" href="javascript:void(0);"><span class="add_yet"></span>' + $CLTMSG.CC2510 + "</a>"
		}
		App.grpDialog({
			oid: j,
			name: g
		},
		false, f, true)
	}
	if (l.ask_following) {
		return false
	}
	var m = {
		uid: j,
		fromuid: scope.$uid
	};
	if (typeof f === "object") {
		for (var b in f) {
			m[b] = f[b]
		}
	}
	App.followOperation(m, h, a, l)
};
App.followcancel = (function() {
	var a;
	return function(m, g, o, b, p, n) {
		p = p || "TA";
		var l = o == 1 ? -40: 0;
		var t = Core.Dom.getXY(g);
		var u = t[0] - (((o == 1 ? 250: 200) - g.offsetWidth) / 2);
		var s = t[1] - (g.offsetHeight) - 70 + l;
		var q = $CLTMSG.CC3101;
		var j = new Utils.Template(q);
		var k = j.evaluate({
			sex: p
		});
		if (Core.Array.findit(App.admin_uid_list, m) === -1) {
			k += '<div class="block"><input type="checkbox" id="del_block_user"><label for="del_block_user">' + $CLTMSG.CC2701 + "</label></div>"
		}
		var h = o == 1 ? [k, $CLTMSG.CC3102 + b + "?"].join("") : [$CLTMSG.CD0007, b, "?"].join("");
		var r = function() {
			var w = "/attention/aj_delfollow.php";
			var y = {
				touid: m,
				fromuid: scope.$uid
			};
			if (o && o == 1) {
				y.action = 1
			}
			if ($E("del_block_user") && $E("del_block_user").checked) {
				y.isblack = "OK"
			}
			if (n) {
				for (var x in n) {
					y[x] = n[x]
				}
			}
			function v(A) {
				var B = function() {
					setTimeout(function() {
						window.location.reload(true)
					},
					500)
				};
				var z = $E(m);
				if (!z) {
					B();
					return
				}
				z.onmouseover = null;
				z.onmouseout = null;
				App.Wipe(null, z).wipe("down", false,
				function() {
					z.parentNode.parentNode.removeChild(z.parentNode);
					if ($E("att_wrap")) {
						if (!$E("att_wrap").getElementsByTagName("LI").length) {
							B();
							return false
						}
					}
					if (scope.$pageid == "profile") {
						B();
						return false
					}
				})
			}
			App.followOperation(y, w, v, null, "del")
		};
		var f = App.PopUpConfirm().position(u, s).content(h).width(o == 1 ? 250: 200).icon(4).yes(function() {
			if (!scope.loginKit().isLogin) {
				App.ModLogin({
					func: function() {
						setTimeout(function() {
							Core.Events.fireEvent(g, "click")
						},
						200)
					}
				});
				return false
			}
			r();
			return false
		}).no(function() {
			return false
		});
		setTimeout(function() {
			f.wipe("up", true)
		},
		100)
	}
})();
App.followOperation = function(h, a, g, b, k, j) {
	if (!scope.$uid) {
		App.ModLogin({
			func: arguments.callee,
			param: [h, a, g]
		});
		return false
	}
	if (scope.$cuser_status === "nofull") {
		App.finishInformation();
		return false
	}
	if (scope.$uid == "123456") {
		var l = arguments[0];
		h = l[0];
		a = l[1];
		g = l[2]
	}
	function f(n) {
		if (b) {
			b.ask_following = false
		}
		if (n.code == "M00003") {
			App.ModLogin()
		} else {
			if (n && n.code == "MR0050") {
				App.forbidrefresh(function() {
					h.retcode = scope.doorretcode;
					App.doRequest(h, a, m, f)
				},
				"/attention/aj_addfollow.php")
			} else {
				App.alert(n, {
					ok: function() {
						if (scope.$uid == "123456") {
							location.reload()
						}
					}
				});
				if (typeof j === "function") {
					j.call(null, n)
				}
			}
		}
	}
	var m = function(n) {
		g(n);
		if (scope.$uid == "123456") {
			location.reload(true)
		}
	};
	if (k === "del") {
		App.doRequest(h, a, m, f)
	} else {
		App.doRequest(h, a,
		function(n) {
			if (b) {
				b.ask_following = true
			}
			m(n)
		},
		f)
	}
};
App.copyLink = function(f) {
	var g = $E("copytext");
	var a = $CLTMSG.CC2508;
	var b = {
		icon: 3
	};
	if (App.copyText(g.value) == false) {
		a = $CLTMSG.CC2509;
		b = {
			icon: 1
		}
	}
	App.flyDialog(a, null, $E("copylink"), b);
	Core.Events.stopEvent(f)
};
$registJob("initPage",
function() {
	var a = $E("copytext");
	if (a) {
		a.onfocus = a.onclick = function() {
			a.select()
		};
		Core.Events.addEvent($E("copylink"), App.copyLink, "click")
	}
});
App.followAll = function(btn) {
	try {
		if (scope.$uid != scope.$oid) {
			return
		}
		var els = $E("att_wrap").getElementsByTagName("li");
		var uids = [];
		for (var i = 0, len = els.length; i < len; i++) {
			var el = els[i];
			if (el.className.search(/cur/i) != -1) {
				continue
			}
			uids.push(el.id)
		}
		if (!uids.length) {
			return false
		}
		var pos = Core.Dom.getXY(btn);
		var x = pos[0] - ((200 - btn.offsetWidth) / 2);
		var y = pos[1] - (btn.offsetHeight) - 50;
		var msg = [$CLTMSG.CD0007, name, "?"].join("");
		var _alert = App.PopUpAlert().position(x, y);
		function changeBGcolor(uids) {
			for (var i = 0, ilen = uids.length; i < ilen; i++) {
				var uid = uids[i];
				var add = $E("add_" + uid);
				if (add) {
					if (scope.$uid == scope.$oid && scope.$pageid == "follow") {
						var imgURI = scope.$BASECSS + "style/images/common/transparent.gif";
						var _p = $C("p");
						_p.className = "mutual";
						_p.innerHTML = '<img class="small_icon sicon_atteo" title="' + $CLTMSG.CC3001 + '" src="' + imgURI + '">';
						Core.Dom.replaceNode(_p, add)
					} else {
						add.innerHTML = '<a class="concernBtn_Yet" href="javascript:void(0);"><span class="add_yet"/>' + $CLTMSG.CC2510 + "</a>"
					}
				}
			}
		}
		function cb() {
			changeBGcolor(uids);
			setTimeout(function() {
				_alert.content($CLTMSG.CC2601).position(x, y + 20).icon(3).wipe("up", true).lateClose(1500)
			},
			500);
			btn.style.visibility = "hidden"
		}
		function ecb(json) {
			if (json && json.code == "MR0050") {
				App.forbidrefresh(function() {
					var data = {
						uid: uids.join(","),
						fromuid: scope.$uid
					};
					data.retcode = scope.doorretcode;
					App.doRequest(data, "/attention/aj_addfollow.php", cb, ecb)
				},
				"/attention/aj_addfollow.php")
			} else {
				if (json.code == "R01440") {
					App.alert({
						code: json.code
					});
					return false
				}
				App.promptTip(json, null, "system_information", "error");
				if (json.code == "M05003") {
					changeBGcolor(json.data.uids)
				}
				if ($IE) {
					location.hash = "top"
				} else {
					document.body.scrollIntoView()
				}
			}
		}
		App.PopUpConfirm().position(x, y).width(200).content($CLTMSG.CL0803).icon(4).yes(function() {
			var data = {
				uid: uids.join(","),
				fromuid: scope.$uid
			};
			var statistics = btn.getAttribute("atnsts");
			try {
				statistics = eval("(" + statistics + ")")
			} catch(e) {}
			if (typeof statistics === "object") {
				for (var k in statistics) {
					data[k] = statistics[k]
				}
			}
			App.doRequest(data, "/attention/aj_addfollow.php", cb, ecb)
		}).wipe("up", true)
	} catch(e) {
		throw e
	}
};
App.followRemarkAdd = function(f, h, k) {
	var j = $CLTMSG.CC3104;
	var l = '<div style="width: 390px;" class="layerBoxCon">     <div class="inviteLayer">         <p class="flName">             ' + $CLTMSG.CC3105 + '         </p>         <div class="inviteLayerInput">             <input type="text" class="PY_input" id="remark" value="">             <a id="submit" href="javascript:void(0);" class="btn_normal"><em>' + $CLTMSG.CC1102 + '</em></a>         </div>         <p class="errorTs yellow2" id="errorTip" style="display:none;">' + j + "</p>     </div> </div>";
	var n = {
		width: 390,
		zIndex: 1000,
		hidden: true
	};
	var p = new App.Dialog.BasicDialog($CLTMSG.CC3106, l, n);
	p.show();
	var m = $E("remark"),
	b = $E("errorTip"),
	o = $E("submit");
	var a = (navigator.userAgent.toLowerCase().indexOf("chrome") != -1);
	if (a) {
		o.style.top = "-3px"
	}
	m.focus();
	m.value = (App._remarks_ && App._remarks_[h]) || k || m.value;
	if (App._remarks_ && App._remarks_[h] == "") {
		m.value = ""
	}
	var q = true;
	Core.Events.addEvent(m,
	function() {
		if (q && !k && !(App._remarks_ && App._remarks_[h])) {
			m.value = "";
			q = false
		}
	},
	"focus");
	Core.Events.addEvent(m,
	function() {
		var r = Core.String.byteLength(m.value);
		if (r > 16) {
			b.innerHTML = j;
			b.style.display = "block";
			setTimeout(function() {
				m.focus()
			},
			100)
		} else {
			if (b.innerHTML == j) {
				b.style.display = "none"
			}
		}
	},
	"blur");
	Core.Events.addEvent(m,
	function() {
		var r = Core.String.byteLength(m.value);
		if (r > 16) {
			m.value = Core.String.leftB(m.value, 16)
		} else {
			if (b.innerHTML == j) {
				b.style.display = "none"
			}
		}
	},
	"keyup");
	function g() {
		if (Core.String.byteLength(m.value) > 16) {
			b.innerHTML = j;
			b.style.display = "block";
			setTimeout(function() {
				m.focus()
			},
			200);
			return
		}
		var r = m.value;
		App.doRequest({
			fuid: h,
			remarkname: r
		},
		"/attention/aj_remarkname.php",
		function() {
			App.CustomEvent.fire("window", "cardCache");
			App._remarks_ = App._remarks_ || {};
			App._remarks_[h] = r;
			p.close();
			var t = scope.$pageid === "profile";
			if (f) {
				if (Core.String.trim(r).length > 0) {
					var s = Core.String.encodeHTML(Core.String.trim(r));
					f.innerHTML = t ? "&nbsp;(" + s + ")": s;
					if (!t) {
						f.parentNode.style.display = "";
						f.parentNode.id = ""
					}
				} else {
					if (t) {
						f.innerHTML = "&nbsp;(" + $CLTMSG.ZB0007 + ")"
					} else {
						f.parentNode.style.display = "none";
						f.parentNode.id = "remark_" + h;
						f.innerHTML = $CLTMSG.ZB0007
					}
				}
			}
		},
		function() {
			if (arguments[0] && arguments[0].code) {
				b.innerHTML = $SYSMSG[arguments[0].code];
				b.style.display = "block"
			} else {
				App.alert($CLTMSG.CC3107, {
					icon: 2,
					width: 370,
					height: 120
				})
			}
		})
	}
	Core.Events.addEvent(o, g, "click");
	App.enterSubmit({
		parent: o.parentNode,
		action: function() {
			Core.Events.fireEvent(o, "click")
		}
	})
};
App.rightSideFollow = function(h, j, m, g) {
	var f = "/attention/aj_addfollow.php";
	function a() {
		var k = document.createElement("SPAN");
		k.innerHTML = $CLTMSG.CC2510;
		Core.Dom.insertAfter(k, j);
		Core.Dom.removeNode(j);
		if (typeof(m) == "function") {
			m()
		}
	}
	var l = {
		uid: h,
		fromuid: scope.$uid
	};
	if (g) {
		for (var b in g) {
			l[b] = g[b]
		}
	}
	App.followOperation(l, f, a)
}; (function() {
	var a = function(f, g) {
		var b = g;
		if (b.tagName !== "DL") {
			b = g.parentNode.parentNode.parentNode
		}
		App.replaceByAnewUser(b, f)
	};
	App.rightSuggestFollow = function(j, h, g) {
		if (App.mbufLock) {
			return false
		}
		var f = h.parentNode.parentNode.parentNode;
		var b = function() {
			try {
				App.mbufLock = false;
				App.grpDialog({
					oid: j.uid,
					name: j.name
				},
				false, g, true);
				setTimeout(function() {
					a(j && j.uid, f)
				},
				1000)
			} catch(k) {}
		};
		App.rightSideFollow(j && j.uid, h, b, g)
	};
	App.card_follow = function(g) {
		var b = $E("interest_person");
		var j = b.getElementsByTagName("dl");
		for (var f = 0; f < j.length; f++) {
			if (j[f].getAttribute("uid") == g) {
				var h = j[f];
				break
			}
		}
		if (h) {
			a(g, h)
		}
	}
})();
App.delDialog = function(b, l, j, f, k, h, a) {
	var g = App.flyDialog(b, "confirm", h || null, {
		ok: function() {
			if ($E("block_user") && $E("block_user").checked) {
				j.isblack = "OK"
			}
			Utils.Io.Ajax.request(l, {
				POST: j,
				onComplete: function(m) {
					if (m && m.code == "A00006") {
						f(m)
					} else {
						k(m)
					}
				},
				onException: k,
				returnType: "json"
			})
		},
		icon: 4,
		title: a
	});
	return g
};
App.msgPublisher = function(a, f, h, b) {
	a = a || {};
	f = f || {
		limit: 600,
		postUrl: "/message/addmsg.php",
		normClass: "btn_normal",
		disabledClass: "btn_notclick"
	};
	var g = {};
	g.limit = (function(j, k) {
		return function() {
			var l = j.editor.value;
			var m = Core.String.byteLength(l);
			if (m > k.limit) {
				j.editor.value = Core.String.leftB(l, k.limit)
			}
		}
	})(a, f);
	App.autoHeightTextArea(a.editor, g.limit, f.maxHeight || null);
	g.submit = (function(j, k) {
		return function() {
			try {
				if (!j.submit.lock) {
					j.submit.className = k.disabledClass || j.submit.className;
					j.submit.lock = true;
					var l = Core.String.trim(j.nick.value);
					if (!l || l == $CLTMSG.CD0049) {
						j.submit.className = k.normClass || j.submit.className;
						j.submit.lock = false;
						j.info.innerHTML = $SYSMSG.M01100;
						j.info.style.display = "";
						return
					}
					var n = Core.String.trim(j.editor.value);
					if (!n) {
						j.submit.className = k.normClass || j.submit.className;
						j.submit.lock = false;
						j.info.innerHTML = $SYSMSG.M07001;
						j.info.style.display = "";
						return
					}
					var o = {
						content: encodeURIComponent(n),
						name: encodeURIComponent(l),
						retcode: scope.doorretcode || ""
					};
					Utils.Io.Ajax.request(k.postUrl, {
						POST: o,
						onComplete: function(p) {
							j.submit.className = k.normClass || j.submit.className;
							j.submit.lock = false;
							if (p.code == "A00006") {
								if (b) {
									b()
								}
								if (h) {
									window.location.reload(true)
								} else {
									var q = App.alert($SYSMSG.M09003, {
										icon: 3,
										hasBtn: false
									});
									setTimeout(function() {
										q.close()
									},
									1000)
								}
							} else {
								if (p.code == "M00003") {
									App.ModLogin(function() {
										window.location.reload(true)
									})
								} else {
									if (p.code == "M09006") {
										if (b) {
											b()
										}
										var q = App.confirm($SYSMSG.M09006, {
											ok: function() {
												location.href = "/mobile/msg.php"
											},
											cancel: function() {
												q.close()
											}
										})
									} else {
										if (p.code == "MR0050") {
											App.forbidrefresh(function() {
												g.submit()
											},
											"/mblog/publish.php");
											return false
										} else {
											j.info.innerHTML = $SYSMSG[p.code];
											j.info.style.display = ""
										}
									}
								}
							}
						},
						onException: function() {
							j.submit.className = k.normClass || j.submit.className;
							j.submit.lock = false
						},
						returnType: "json"
					})
				}
			} catch(m) {}
		}
	})(a, f);
	if (a.editor) {
		Core.Events.addEvent(a.editor,
		function(j) {
			if ((j.ctrlKey == true && j.keyCode == "13") || (j.altKey == true && j.keyCode == "83")) {
				a.editor.blur();
				g.submit()
			}
		},
		"keyup")
	}
	if (a.nick) {
		Core.Events.addEvent(a.nick, (function(j) {
			return function() {
				if (j.value === $CLTMSG.CD0049) {
					j.value = ""
				}
				j.style.color = "#333333"
			}
		})(a.nick), "focus");
		Core.Events.addEvent(a.nick, (function(j) {
			return function() {
				if (Core.String.trim(j.value) == "") {
					j.value = $CLTMSG.CD0049
				}
				j.style.color = "#999999"
			}
		})(a.nick), "blur");
		a.nick.value = a.nick.value || $CLTMSG.CD0049;
		a.nick.style.color = "#999999"
	}
	if (a.submit) {
		Core.Events.addEvent(a.submit, g.submit, "click")
	}
	return g
};
App.simpleAjax = function(url, success, error, fail) {
	var req,
	res,
	error;
	req = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
	if (!req) {
		return
	}
	req.onreadystatechange = function() {
		try {
			if (req.readyState == 4) {
				res = eval("(" + req.responseText + ")");
				if (res && res.code == "A00006") {
					success && success(res);
					return
				}
				error && error(res)
			}
		} catch(e) {
			fail && fail(e.message);
			return false
		}
	};
	try {
		req.open("GET", url, true);
		req.send(null)
	} catch(e) {
		fail && fail(e.message);
		return false
	}
	return {
		abort: function() {
			req.abort();
			return false
		}
	}
};
App.iframeMask = function(l, g) {
	var a = {};
	var j = a.oParent = document.getElementsByTagName("body")[0];
	var f = a.oMask = j.appendChild($C("div"));
	var k = a.oProtective = j.appendChild($C("iframe"));
	k.frameborder = 0;
	var h = f.style;
	var b = k.style;
	var b = k.style;
	h.top = b.top = "0px";
	h.left = b.left = "0px";
	h.overflow = b.overflow = "hidden";
	h.border = b.border = "0px";
	h.position = b.position = "absolute";
	h.display = b.display = "none";
	h.backgroundColor = b.backgroundColor = "#000000";
	h.zIndex = l || 799;
	b.zIndex = (l - 1) || 798;
	Core.Dom.setStyle(f, "opacity", "0.15");
	Core.Dom.setStyle(k, "opacity", "0");
	a.oMaskResize = (function(m) {
		return function() {
			var n = Core.System.pageSize();
			m.oMask.style.width = m.oProtective.style.width = Math.max(document.body.scrollWidth, (document.documentElement) ? document.documentElement.scrollWidth: 0) + "px";
			m.oMask.style.height = m.oProtective.style.height = n[1] + "px";
			if (g) {
				g(n)
			}
		}
	})(a);
	a.hidden = (function(m) {
		return function() {
			m.oMask.style.display = m.oProtective.style.display = "none"
		}
	})(a);
	a.show = (function(m) {
		return function() {
			m.oMask.style.display = m.oProtective.style.display = "block"
		}
	})(a);
	a.oMaskResize();
	Core.Events.addEvent(window, a.oMaskResize, "resize");
	return a
};
App.PopUpSwfPlayer = (function() {
	var f,
	b,
	a,
	g,
	k = Core.Events,
	j = k.addEvent,
	h = k.removeEvent;
	return function(l) {
		var m = "view_ani",
		s = window,
		q = document,
		t = q.documentElement || {},
		r = q.body;
		if (scope.statistics) {
			scope.statistics({
				type: "ani",
				source: encodeURIComponent(l)
			})
		}
		if (!swfobject.hasFlashPlayerVersion("9.0.0")) {
			App.alert({
				code: "CD0084"
			});
			return
		}
		if (!b) {
			document.body.appendChild(b = $C("div"));
			b.style.position = "absolute";
			b.style.zIndex = "2012"
		}
		b.style.display = "";
		if (!a) {
			b.innerHTML = "";
			b.appendChild(a = $C("div"));
			a.id = m;
			a.innerHTML = ['<div style="padding-left:202px;padding-top:172px;"><center><img src="', [scope.$BASECSS, "style/images/common/loading.gif"].join(""), '"/></center></div>'].join("")
		}
		var n = function(v) {
			var w = s.pageYOffset || Math.max(t.scrollTop, r.scrollTop);
			b.style.left = (v[2] - 440) / 2 + "px";
			b.style.top = ((v[3] - 360) / 2 + w) + "px"
		};
		if (!f) {
			f = App.iframeMask(2000, n)
		} else {
			n(Core.System.pageSize())
		}
		var u = {
			id: "view_ani",
			quality: "high",
			allowScriptAccess: "never",
			wmode: "transparent",
			allowFullscreen: true,
			allownetworking: "internal"
		};
		var p = {
			playMovie: "true"
		};
		var o = function(v) {
			if (v && v.keyCode !== 27 && v.type !== "mouseup") {
				return
			}
			clearInterval(g);
			swfobject.removeSWF(m);
			b.style.display = "none";
			a = null;
			f.hidden();
			h(r, o, "keyup");
			h(r, o, "mouseup");
			if (!v) {
				return
			}
			Core.Events.stopEvent()
		};
		swfobject.embedSWF(l, m, "440", "360", "10.0.0", null, p, u);
		f.show();
		s.clearInterval(g);
		g = setInterval(function() {
			var w = swfobject.getObjectById(m),
			v = 0;
			if (w && w.PercentLoaded() == 100) {
				s.clearInterval(g);
				g = setInterval(function() {
					var z = w.CurrentFrame(),
					x;
					try {
						x = w.TotalFrames()
					} catch(y) {
						x = w.TotalFrames
					}
					if (z < 0) {
						return
					}
					if (z < x && v <= z) {
						v = z
					} else {
						o()
					}
				},
				80)
			}
		},
		100);
		j(r, o, "keyup");
		j(f.oMask, o, "mouseup");
		f.oMask.title = $CLTMSG.CF0105
	}
})();
App.group = function(h, a, j) {
	var b = {},
	f = 0,
	g = h.length,
	k,
	l,
	m = Core.Events.addEvent;
	b.current = -1;
	b.items = h;
	b.selected;
	k = j && j.selected || null;
	l = j && j.unselected || null;
	for (f; f < g; f++) { (function(o, n) {
			m(o,
			function(p) {
				if (b.current == n && j) {
					return
				}
				l && (b.current != -1) && (h[b.current].className = l);
				k && (o.className = k);
				b.current = n;
				a(o, n, b);
				return false
			},
			"mouseup")
		})(h[f], f)
	}
}; (function() {
	var n = document,
	k = "/face/aj_face.php",
	b = Core.Events,
	l = Core.String,
	t = b.stopEvent,
	s = b.addEvent,
	a = b.removeEvent,
	f = b.fireEvent,
	q = App.simpleAjax,
	j = Core.Dom.getXY,
	r = App.group,
	m = App.removeChildren,
	g = App.PopUp,
	p;
	function o(v, u) {
		return App.builder3(v, u, {
			dd: "id",
			mm: "action"
		})
	}
	function h(u) {
		return u.replace(/[^\w\u4e00-\u9fa5\uff10-\uff19\uff21-\uff3a\uff41-\uff5a\u2014\uff3f]/g, "")
	}
	App.showFaces = (function() {
		var x = {},
		A,
		v,
		u = false,
		z = false,
		y,
		w = {
			selected: "cur",
			unselected: " "
		};
		splitHTML = '<li class="magiclicur" style="visibility:hidden">|</li>',
		panelHTML = '<table class="mBlogLayer"><tbody><tr><td class="top_l"></td><td class="top_c"></td><td class="top_r"></td></tr><tr><td class="mid_l"></td><td class="mid_c"><div class="layerBox phiz_layerN"><div class="layerBoxTop"><div class="layerArrow" style="left:6px;"></div><div class="topCon"><ul class="phiz_menu"><li id="face" class="cur"><a href="#" onclick="this.blur();return false;">' + $CLTMSG.CL0901 + '</a></li><li id="ani" act="topTab" class="magic"><a href="#" onclick="this.blur();return false;"><strong></strong>' + $CLTMSG.CL0902 + '</a></li></ul><a id="close" href="#" onclick="return false;" title="' + $CLTMSG.CL0701 + '" class="close"></a><div class="clearit"></div></div></div><div class="magicT"><div class="magicTL"><ul id="tab"></ul></div><div class="magicTR"><a href="#" onclick="return false;" id="prevBtn" class="magicbtnL02" title="' + $CLTMSG.CX0076 + '"></a><a href="#" onclick="return false;" id="nextBtn" title="' + $CLTMSG.CX0077 + '" class="magicbtnR02"></a></div><div class="clear"></div></div><div class="layerBoxCon" style="width:450px;"><div id="hotPanel" class="faceItemPicbgT"><ul id="hot"></ul><div class="clearit"></div></div><div id="normPanel" class="faceItemPicbg"><ul id="norm"></ul><div class="clearit"></div></div><div id="pagePanel" class="magicB"><div id="magicNotes" class="magic_tit" style="display:none">' + $CLTMSG.CL0904 + '</div><div class="pages" id="pageing"></div></div></div></div></td><td class="mid_r"></td></tr><tr><td class="bottom_l"></td><td class="bottom_c"></td><td class="bottom_r"></td></tr></tbody></table>';
		return function(Y, D, X, V, N, O, I) {
			reflush = O;
			tArea = D;
			O && (Y.onclick = function() {
				return false
			});
			y = I ||
			function() {
				return false
			};
			if (!u) {
				u = true;
				v = g().zIndex(1500).content(panelHTML);
				var U = v.dom,
				M = U.close,
				W = U.hot,
				T = U.hotPanel,
				F = U.magicNotes,
				G = U.norm,
				B = U.normPanel,
				L = U.pageing,
				H = U.prevBtn,
				S = U.nextBtn,
				C = U.tab;
				face = U.face,
				ani = U.ani,
				cType = 1,
				tabIndex = 0;
				function J(ab, ai) {
					m(ai);
					var ac = 0,
					ad = ab.length,
					aa = [],
					ag,
					aj,
					ak,
					Z,
					af = "",
					ah = "",
					ae;
					for (ac; ac < ad; ac++) {
						ag = ab[ac];
						ae = h(ag.title);
						cType == 1 && (af = 'class="face_box"');
						cType == 1 && (ah = ('<a action="play" title="' + $CLTMSG.CL0912 + '" class="play_btn" href="#" onclick="return false;"></a><span class="face_box_tex">' + (l.byteLength(ae) > 8 ? l.leftB(ae, 6) + "...": ae) + "</span>"));
						aa.push(['<li action="icon" title="', ae, '"><a href="#" onclick="return false;" ', af, ">", '<img src="', ag.icon, '"/>', "</a>", ah, "</li>"].join(""))
					}
					aj = o(aa.join(""), ai)["actList"];
					ak = aj.icon;
					Z = aj.play;
					if (Z) {
						r(Z,
						function(am, al, an) {
							am.onclick = function() {
								return false
							};
							t();
							App.PopUpSwfPlayer(ab[al].src);
							return false
						})
					}
					r(ak,
					function(am, al, an) {
						am.onclick = function() {
							return false
						};
						setTimeout(function() {
							tArea.focus()
						},
						0);
						setTimeout(function() {
							var au = tArea.getAttribute("range");
							var aw = ab[al].value + " ";
							if (y(aw)) {} else {
								if (document.selection) {
									var ap = document.selection.createRange();
									document.selection.empty();
									ap.text = aw
								} else {
									if (tArea.setSelectionRange) {
										var ao = tArea.selectionStart;
										var aq = tArea.selectionEnd;
										var at = tArea.value.substring(0, ao);
										var ar = tArea.value.substring(aq);
										var ax = at + aw,
										av = ax.length;
										tArea.value = ax + ar;
										tArea.setSelectionRange(av, av)
									} else {
										tArea.value += aw
									}
								}
							}
							if (reflush) {
								reflush()
							} else {
								tArea.focus && tArea.focus()
							}
							v.visible(false)
						},
						200);
						return false
					})
				}
				function E(ad) {
					m(L);
					var ac = 0,
					aa = ad.length,
					ab = [],
					Z;
					if (!aa) {
						return
					}
					for (ac; ac < aa; ac++) {
						ab.push('<a action="pageBtn" href="#" onclick="return false;">' + (ac + 1) + "</a>")
					}
					Z = o(ab.join(""), L)["actList"]["pageBtn"];
					r(Z,
					function(af, ae) {
						af.onclick = function() {
							return false
						};
						T.style.display = (!cType && !tabIndex && !ae) ? "": "none";
						setTimeout(function() {
							J(ad[ae], G)
						},
						50);
						af.blur()
					},
					w);
					L.style.display = Z.length < 2 ? "none": "";
					f(Z[0], "mouseup")
				}
				function Q(an) {
					m(C);
					var ag = [{
						type: $CLTMSG.CL0914,
						icon: an.data.norm
					}].concat(an.data.more);
					var ah = 0,
					ak = ag.length,
					al,
					aa = [],
					am;
					for (ah; ah < ak; ah++) {
						al = ag[ah];
						if (!al || !al.type) {
							continue
						}
						aa.push('<li style="visibility:hidden"><a action="tabs" onclick="return false;" href="#">' + al.type + "</a></li>")
					}
					if (!aa.length) {
						return
					}
					am = o(aa.join(splitHTML), C)["actList"]["tabs"];
					r(am,
					function(ap, ao) {
						ap.onclick = function() {
							return false
						};
						tabIndex = ao;
						E(ag[ao].icon);
						ap.blur()
					},
					{
						selected: "magicTcur",
						unselected: " "
					});
					f(am[0], "mouseup");
					var ai = 1,
					aj = 0,
					ac = C.getElementsByTagName("li"),
					af = ac.length,
					ad = [],
					ab = 0,
					Z = [],
					ae;
					setTimeout(function() {
						for (aj; aj < af; aj++) {
							ac[aj].style.visibility = "visible";
							ac[aj].style.display = "";
							var aq = ac[aj].innerHTML == "|" ? 8: ac[aj].offsetWidth;
							if (ab + aq > 400) {
								ab = 0;
								ad.push(Z);
								Z = []
							}
							ac[aj].style.display = "none";
							Z.push(ac[aj]);
							ab += aq
						}
						Z.length && ad.push(Z);
						ae = ad.length - 1;
						function ap() {
							H.className = ai == 0 ? "magicbtnL01": "magicbtnL02";
							S.className = ai == ae ? "magicbtnR01": "magicbtnR02"
						}
						function ao(av, at) {
							var au = 0;
							ak = av.length,
							end = Math.max(ak - 1, 0);
							for (au; au < ak; au++) {
								av[au].style.visibility = at ? "visible": "hidden";
								av[au].style.display = !at ? "none": ((au == 0 || au == end) && av[au].innerHTML == "|") ? "none": ""
							}
						}
						function ar(au, av) {
							var at = Math[au](ai + av, av > 0 ? ae: 0);
							if (ai == at) {
								ap();
								return
							}
							ad[ai] && ao(ad[ai], false);
							ad[at] && ao(ad[at], true);
							ai = at;
							ap()
						}
						H.onclick = function() {
							ar("max", -1);
							H.blur();
							return false
						};
						S.onclick = function() {
							ar("min", 1);
							S.blur();
							return false
						};
						ar("max", -1)
					},
					100)
				}
				function R(aa, Z, ab) {
					t();
					aa.onclick = function() {
						return false
					};
					m(G);
					m(C);
					m(L);
					face.className = Z ? "": "cur";
					ani.className = Z ? "magic cur": "magic";
					B.className = Z ? "magic_list": "faceItemPicbg";
					T.style.display = Z ? "none": "";
					F.style.display = Z ? "": "none";
					L.style.display = "none";
					H.className = "magicbtnL01";
					S.className = "magicbtnR01";
					H.onclick = function() {
						return false
					};
					S.onclick = function() {
						return false
					};
					cType = Z;
					p && p.abort();
					if (x[Z]) {
						Q(x[Z]);
						return false
					}
					G.innerHTML = '<center><img style="margin-top:10px;margin-bottom:10px" src="' + scope.$BASEIMG + 'style/images/common/loading.gif"/></center>';
					p = q([k, "?type=", Z ? "ani": "face"].join(""),
					function(ac) {
						var ad;
						if (ac.code == "A00006" && (ad = ac.data)) {
							Q(ac);
							if (!z && ad.hot) {
								z = true;
								J(ad.hot, W)
							}
							x[Z] = ac
						}
					});
					aa.blur();
					return false
				}
				r([face, ani], R);
				s(M,
				function() {
					M.onclick = function() {
						return false
					};
					v.visible(false);
					t()
				},
				"mouseup");
				s(v.wrap,
				function() {
					t()
				},
				"mouseup");
				s(n.body,
				function() {
					v.visible(false)
				},
				"mouseup");
				var K = Core.System.winSize();
				s(window,
				function(aa) {
					var Z = Core.System.winSize();
					if (K.width != Z.width || K.height != Z.height) {
						v.visible(false);
						K = Z
					}
				},
				"resize")
			}
			var P = j(Y);
			v.position(P[0] + 19 + (X || 0), P[1] + Y.offsetHeight + (V || 5));
			f(face, "mouseup");
			setTimeout(function() {
				v.visible(true)
			},
			0);
			return false
		}
	})()
})(); (function(l) {
	$C = function(n) {
		return document.createElement(n)
	};
	var b = Core.Events.addEvent;
	var m = Core.Events.stopEvent;
	var a = Core.Events.removeEvent;
	var h = Core.Dom.getXY;
	var k = function(n) {
		if (n === undefined) {
			throw "the dropDown item need parameters"
		}
		n.text = n.text || n.value;
		n.ele = n.ele || $C("LI");
		n.focus = n.focus ||
		function() {};
		n.blur = n.blur ||
		function() {};
		n.ok = n.ok ||
		function() {};
		n.tnode = document.createTextNode("");
		n.ele.appendChild(n.tnode);
		n.ele.setAttribute("unselectable", "on");
		if (n.itemStyle) {
			n.ele.style.cssText = n.itemStyle
		}
		b(n.ele,
		function() {
			n.focus(o)
		},
		"mouseover");
		b(n.ele,
		function() {
			n.blur(o)
		},
		"mouseout");
		b(n.ele,
		function() {
			m();
			n.ok(o)
		},
		"click");
		b(n.ele, m, "mousedown");
		var o = {};
		o.set = function(p, q) {
			if ((p == "focus" || p == "ok") && typeof q != "function") {
				throw "dropDown item need function as parameters"
			}
			n[p] = q;
			if (p == "text") {
				n.ele.innerHTML = q
			}
			if (p == "HTML") {
				n.ele.innerHTML = q
			}
			return o
		};
		o.get = function(p) {
			return n[p]
		};
		return o
	};
	var g = function(o) {
		var q = {};
		if (o === undefined) {
			o = {}
		}
		o.items = [];
		o.count = 0;
		o.current = -1;
		o.key = {
			ENTER: 13,
			ESC: 27,
			UP: 38,
			DOWN: 40,
			LEFT: 37,
			RIGHT: 39,
			BACK: 8,
			TABLE: 9
		};
		o.box = $C("DIV");
		o.shell = $C("UL");
		o.showing = false;
		o.box.appendChild(o.shell);
		document.body.appendChild(o.box);
		var n = function(r) {
			r = r || o.items[o.current];
			o.light(r.get("ele"))
		};
		var p = function(r) {
			r = r || o.items[o.current];
			if (r) {
				o.dark(r.get("ele"))
			}
		};
		o.newItem = function() {
			var r = k({
				ok: o.select,
				focus: function(s) {
					if (o.items[o.current]) {
						p()
					}
					o.current = s.index;
					n()
				},
				itemStyle: o.itemStyle
			});
			o.shell.appendChild(r.get("ele"));
			return r
		};
		o.getItem = function(r) {
			if (!o.items[r]) {
				o.items[r] = o.newItem();
				o.items[r].index = r
			}
			return o.items[r]
		};
		o.up = function() {
			if (o.current >= o.count || o.current <= 0) {
				p(o.items[0]);
				o.current = o.count - 1
			} else {
				p();
				o.current -= 1
			}
			n()
		};
		o.down = function() {
			if (o.current >= o.count - 1 || o.current < 0) {
				p(o.items[o.count - 1]);
				o.current = 0
			} else {
				p();
				o.current += 1
			}
			n()
		};
		o.open = function() {
			o.box.style.display = "";
			b(document.documentElement, o.hotKey, "keydown");
			o.showing = true
		};
		o.close = function() {
			o.box.style.display = "none";
			if ($E("_iframe4select_")) {
				$E("_iframe4select_").style.display = "none"
			}
			a(document.documentElement, o.hotKey, "keydown");
			o.showing = false
		};
		o.hotKey = function(t) {
			var s = window.event || t;
			var r = s.keyCode;
			if (r == o.key.UP) {
				o.up();
				m();
				return false
			} else {
				if (r == o.key.DOWN) {
					o.down();
					m();
					return false
				} else {
					if (r == o.key.ESC) {
						o.close();
						m();
						return false
					}
				}
			}
		};
		q.show = function(r) {
			o.open();
			return q
		};
		q.hidd = function(r) {
			o.close();
			if (o.current !== -1) {
				p()
			}
			o.current = -1;
			return q
		};
		q.light = function(r) {
			n(o.items[r]);
			return q
		};
		q.dark = function(r) {
			p(o.items[r]);
			return q
		};
		q.data = function(t) {
			for (var s = 0, r = t.length; s < r; s += 1) {
				o.getItem(s).set("text", t[s]["text"]).set("value", t[s]["value"]).get("ele").style.display = ""
			}
			for (var s = t.length, r = o.items.length; s < r; s += 1) {
				o.getItem(s).get("ele").style.display = "none"
			}
			o.count = t.length;
			p();
			o.current = -1;
			return q
		};
		q.pushData = function(t) {
			for (var s = 0, r = t.length; s < r; s += 1) {
				o.getItem(o.count + s).set("text", t[s]["text"]).set("value", t[s]["value"])
			}
			o.count += t.length;
			return q
		};
		q.set = function(r, s) {
			if (r === "position") {
				o.box.style.left = s[0] + "px";
				o.box.style.top = s[1] + "px"
			}
			return q
		};
		q.get = function(r) {
			if (r === "current") {
				return o.items[o.current]
			}
			if (r === "index") {
				return o.current
			}
			return o[r]
		};
		return q
	};
	var j = function(n) {
		var o = {};
		n.box = document.createElement("DIV");
		n.box.innerHTML = n.info;
		if (n.style) {
			n.box.style.cssText = n.style
		}
		if (n.className) {
			n.box.className = n.className
		}
		n.box.style.position = "absolute";
		n.box.style.display = "none";
		document.body.appendChild(n.box);
		o.show = function() {
			n.box.style.display = ""
		};
		o.hidd = function() {
			n.box.style.display = "none"
		};
		o.set = function(p, q) {
			if (p === "position") {
				n.box.style.left = q[0] + "px";
				n.box.style.top = q[1] + "px"
			}
			return o
		};
		o.get = function(p) {
			return n[p]
		};
		return o
	};
	var f = function(o) {
		var p = {};
		var n = function(u, r) {
			if (o.data.length === 0 || !u) {
				setTimeout(function() {
					r([])
				},
				0)
			} else {
				var t = [];
				for (var s = 0, q = o.data.length; s < q; s += 1) {
					if (o.data[s].value.indexOf(u) != -1) {
						t[t.length] = o.data[s]
					}
				}
				setTimeout(function() {
					r(t)
				},
				0)
			}
		};
		ajax = function(r, q, t) {
			var s = t ? {
				key: r,
				schooltype: t
			}: {
				key: r
			};
			Utils.Io.Ajax.request(o.data, {
				GET: s,
				onComplete: function(u) {
					if (u.code === "A00006") {
						if (typeof o.search === "function") {
							u.data = o.search(u.data)
						}
						q(u.data)
					}
				},
				returnType: "json"
			})
		};
		jsonp = function() {};
		if (o.type === "ajax") {
			n = ajax
		} else {
			if (o.type === "jsonp") {
				n = jsonp
			} else {
				if (typeof o.search === "function") {
					n = o.search
				}
			}
		}
		p.result = function(r, q, s) {
			n(r, q, s)
		};
		p.set = function(q, r) {
			o[q] = r;
			return p
		};
		return p
	};
	l.autoComplate = function(z) {
		if (!z.input) {
			throw "the autoComplate need an input as an parameter"
		}
		z.searchCb = z.searchCb ||
		function() {};
		var o = null;
		var A = f({
			type: z.type,
			data: z.data,
			search: z.search
		});
		var v = g({
			select: function(B) {
				z.ok(B.get("value"), B.get("text"));
				z.input.blur()
			},
			itemStyle: z.itemStyle,
			light: z.light,
			dark: z.dark
		});
		if (z.emptyInfo) {
			var r = j({
				info: z.emptyInfo,
				style: z.emptyStyle,
				className: z.emptyClass
			})
		}
		var x = v.get("box");
		x.className = z["class"];
		x.style.cssText = z.style;
		v.hidd();
		b(window,
		function() {
			if (x.style.display !== "none") {
				z.input.blur();
				v.hidd()
			}
		},
		"resize");
		if ("v" == "\v") {
			var q = $C("IFRAME");
			q.id = "_iframe4select_";
			q.style.zIndex = z.zIndex || 50;
			q.style.display = "none";
			q.style.position = "absolute";
			document.body.appendChild(q)
		}
		var n = {};
		z.formatKey = z.formatKey ||
		function(B) {
			return B
		};
		var t = function(C, B) {
			C = z.formatKey(C);
			if (!n[C]) {
				A.result(C,
				function(D) {
					if (D.length === 0) {
						if (C.indexOf(z.emptkey) !== -1) {
							z.emptykey = C
						}
					}
					B(D);
					n[C] = D
				},
				z.schooltype)
			} else {
				setTimeout(function() {
					B(n[C])
				},
				0)
			}
		};
		b(z.input,
		function(C) {
			var B = window.event || C;
			if (B.keyCode === 13) {
				if (v.get("current")) {
					z.ok(v.get("current").get("value"), v.get("current").get("text"));
					m(B)
				}
				if (!z.noBlur) {
					z.input.blur()
				}
			}
		},
		"keypress");
		var p = function() {
			o = setInterval(u, 100 * z.timer);
			z.searching = "";
			z.emptykey = "";
			var B = h(z.input);
			B[1] += z.input.offsetHeight;
			if (r) {
				r.set("position", B).show()
			}
		};
		var s = function() {
			clearInterval(o);
			v.hidd();
			z.searching = "";
			z.emptykey = "";
			if ("v" == "\v") {
				q.style.display = "none"
			}
			if (r) {
				r.hidd()
			}
		};
		var y = function(C) {
			z.searchCb(C);
			v.data(C);
			if (C.length) {
				if (!v.get("showing")) {
					v.show()
				}
				if ("v" == "\v") {
					q.style.width = x.offsetWidth + "px";
					q.style.height = x.offsetHeight + "px";
					var B = h(x);
					q.style.top = B[1] + "px";
					q.style.left = B[0] + "px";
					q.style.display = ""
				}
			} else {
				v.hidd();
				if ("v" == "\v") {
					q.style.display = "none"
				}
			}
		};
		var u = function() {
			if (z.input.value === z.searching) {
				return false
			}
			if (z.input.value.indexOf(z.emptykey) !== -1 && z.emptykey !== "") {
				return false
			}
			z.searching = z.input.value;
			var B = h(z.input);
			B[1] += z.input.offsetHeight;
			v.set("position", B);
			if (z.input.value === "") {
				setTimeout(function() {
					y([])
				},
				0);
				if (r) {
					r.set("position", B).show()
				}
			} else {
				t(z.input.value, y);
				if (r) {
					r.hidd()
				}
			}
		};
		b(z.input, p, "focus");
		b(z.input, s, "blur");
		z.searching = "";
		z.emptykey = "";
		var w = {};
		w.get = function(B) {
			if (B === "index") {
				return v.get("index")
			}
			return z[B]
		};
		w.set = function(B, C) {
			if (B === "data") {
				A.set("data", C);
				n = {}
			}
		};
		w.end = function() {
			s();
			return w
		};
		return w
	}
})(App);
App.fansfind = function(a) {
	a.ok = function(g, h) {
		h = h.replace(/\(.*\)/g, "");
		if (a.input.value && /,|;|\uFF0C|\uFF1B|\u3001|\s/.test(a.input.value)) {
			var b = a.input.value.split(/,|;|\uFF0C|\uFF1B|\u3001|\s/);
			var f = a.input.value.substring(0, a.input.value.length - b[b.length - 1].length);
			a.input.value = f + h + " "
		} else {
			a.input.value = h
		}
		if (a.select && typeof a.select == "function") {
			a.select(g, h)
		}
	};
	a.timer = a.timer || 5;
	a.style = a.style || "width:" + a.input.clientWidth + "px;position:absolute;z-Index:1200;";
	a.light = a.light ||
	function(b) {
		b.className = "cur"
	};
	a.dark = a.dark ||
	function(b) {
		b.className = ""
	};
	a["class"] = a["class"] || "layerMedia_menu";
	a.type = a.type || "ajax";
	a.data = a.data || "/attention/aj_chooser.php?key=" + a.input.value + "&type=" + a.searchtype;
	a.itemStyle = "overflow:hidden;height:20px";
	return App.autoComplate(a)
};
App.msgDialog = function(a, k) {
	var h = function() {
		var n = Core.Events.getEvent();
		var m = n.srcElement || n.target;
		while (m.nodeType != 1) {
			m = m.parentNode
		}
		return m
	};
	var b = h();
	var g = '<table class="noteTab2"><tbody> <tr> <th>' + $CLTMSG.CD0050 + '&nbsp;</th><td><input  id="popUpNick" type="text"  class="PY_input" value="' + (a || "") + '"/>&nbsp;&nbsp;</td></tr> <tr class="tPadding" ><th>' + $CLTMSG.CD0051 + '&nbsp;</th><td><textarea id="popUpEditor" class="PY_input"></textarea></td> </tr>  <tr class="tPadding1"><th></th><td><a class="faceicon1" id="insert_face_icon" href="javascript:void(0);" title="表情"></a></td></tr> <tr><th/><td><a id="popUpSubmit" href="javascript:void(0);" class="btn_normal" ><em>' + $CLTMSG.CD0052 + '</em></a> <span id="popUpError" style="display:none" class="errorTs2 error_color">' + $SYSMSG.M01112 + '</span></td></tr> <tr><td></td><td><p class="inviteLayer_tip gray9">' + $CLTMSG.CD0053 + "</p></td></tr>  </tbody></table>";
	var l = {
		width: 430,
		zIndex: 1000,
		hidden: true
	};
	var j = new App.Dialog.BasicDialog($CLTMSG.CD0054, g, l);
	Core.Events.addEvent($E("insert_face_icon"),
	function(n) {
		var m = n.srcElement || n.target;
		App.showFaces(m, $E("popUpEditor"), -30, 0, "360px")
	},
	"click");
	App.fansfind({
		input: $E("popUpNick"),
		searchtype: 1
	});
	if (b) {
		App.doFlyOut(b, j._node, {
			resFun: function() {
				try {
					j.show()
				} catch(m) {}
			},
			style: "border:#000 2px solid;background:#bad;opacity:0.2;filter:alpha(opacity=20);zoom:1",
			time: 0.75
		})
	} else {
		j.show()
	}
	var f = {
		submit: $E("popUpSubmit"),
		editor: $E("popUpEditor"),
		info: $E("popUpError"),
		nick: $E("popUpNick")
	};
	App.msgPublisher(f, null, k,
	function() {
		j.close()
	});
	App.CustomEvent.fire("window", "cardCache");
	return j
};
$registJob("login",
function() {
	var j = $E("login_submit_btn");
	var f = $E("loginname");
	var m = $E("password");
	var k = $E("remusrname");
	var h = $E("login_form");
	if (!k) {
		k = {
			checked: true
		}
	}
	App.initLoginInput(f);
	if (Utils.Cookie.getCookie("un")) {
		var b = $C("A");
		var l = f.parentNode;
		var a = false;
		b.onclick = function() {
			f.value = "";
			Utils.Cookie.setCookie("un", "", 0, "/", "weibo.com");
			Utils.Cookie.deleteCookie("un");
			App.__no_login_name__ = true;
			l.removeChild(b);
			a = true;
			return false
		};
		b.innerHTML = '<img class="lgicon_del" title="#{title}" src="http://img.t.sinajs.cn/t35/style/images/common/transparent.gif">'.replace(/#\{title\}/, $CLTMSG.CD0185);
		b.onmouseover = function() {
			this.style.cursor = "pointer"
		};
		l.appendChild(b);
		Core.Events.addEvent(f,
		function() { ! a && l.removeChild(b);
			a = true
		},
		"focus")
	}
	var n = {
		zIndex: 1010,
		ref: f,
		offsetY: 1,
		offsetX: 1
	};
	function g(o, p) {
		if (!Core.String.trim(o.value) || (o.value == o.title && o.title)) {
			o.style.display !== "none" && o.focus();
			App.fixElement.setHTML(p, "", n);
			return false
		} else {
			App.fixElement.hidden()
		}
		return true
	}
	Core.Events.addEvent(j,
	function(o) {
		if (!g(f, App.getMsg({
			code: "M00901"
		}))) {
			return false
		}
		if (!g(m, App.getMsg({
			code: "M00902"
		}))) {
			return false
		} else {
			App.LoginAction({
				name: f.value,
				pwd: m.value,
				remb: k.checked,
				error: function(q, p) {
					var r = "";
					if (p == "4010") {
						q = App.getMsg({
							code: "R01011"
						});
						r = App.getMsg("R01010", {
							mail: f.value
						})
					} else {
						if (p == "101" || p == "5") {
							r = App.getMsg({
								code: "R11111"
							})
						}
					}
					App.fixElement.setHTML(q, r, n)
				},
				succ: function() {
					var p = scope.redirect ? decodeURIComponent(Core.String.trim(scope.redirect)) : "http://weibo.com/";
					location.replace(p)
				}
			})
		}
		Core.Events.stopEvent(o)
	},
	"click");
	if (h) {
		App.enterSubmit({
			parent: $E("password").parentNode,
			action: function() {
				Core.Events.fireEvent("login_submit_btn", "click")
			}
		})
	}
	passcardOBJ.init(f, {
		overfcolor: "#999",
		overbgcolor: "#e8f4fc",
		outfcolor: "#000000",
		outbgcolor: ""
	},
	m, parent);
	if (Core.String.trim(f.value) != "" && Core.String.trim(m.value) != "") {
		setTimeout(function() {
			Core.Events.fireEvent(j, "click")
		},
		100)
	}
	if (scope.isActiveBack === true) {
		App.fixElement.setHTML($CLTMSG.CY0115, "", n);
		$E("mod_login_title").className = "";
		$E("mod_login_title").style.color = "#f00";
		$E("mod_login_title").style.fontWeight = "bold"
	}
});
$registJob("login1",
function() {
	var j = $E("login_submit_btn1");
	var k = $E("loginname1");
	var g = $E("password1");
	var h = $E("remusrname1");
	var b = $E("login_form1");
	if (!h) {
		h = {
			checked: true
		}
	}
	App.initLoginInput(k, "CR0001");
	var f = {
		zIndex: 1010,
		ref: k,
		offsetY: 1,
		offsetX: 1
	};
	function a(l, m) {
		if (!Core.String.trim(l.value) || (l.value == l.title && l.title)) {
			l.style.display !== "none" && l.focus();
			App.fixElement.setHTML(m, "", f);
			return false
		} else {
			App.fixElement.hidden()
		}
		return true
	}
	Core.Events.addEvent(j,
	function(l) {
		if (!a(k, App.getMsg({
			code: "M00901"
		}))) {
			return false
		}
		if (!a(g, App.getMsg({
			code: "M00902"
		}))) {
			return false
		} else {
			App.LoginAction({
				name: k.value,
				pwd: g.value,
				remb: h.checked,
				error: function(n, m) {
					var o = "";
					if (m == "4010") {
						n = App.getMsg({
							code: "R01011"
						});
						o = App.getMsg("R01010", {
							mail: k.value
						})
					} else {
						if (m == "101" || m == "5") {
							o = App.getMsg({
								code: "R11111"
							})
						}
					}
					App.fixElement.setHTML(n, o, f)
				},
				succ: function() {
					var m = scope.redirect ? Core.String.trim(scope.redirect) : "http://weibo.com/";
					location.replace(m)
				}
			})
		}
		Core.Events.stopEvent(l)
	},
	"click");
	if (b) {
		App.enterSubmit({
			parent: g.parentNode,
			action: function() {
				Core.Events.fireEvent("login_submit_btn1", "click")
			}
		})
	}
	passcardOBJ.init(k, {
		overfcolor: "#999",
		overbgcolor: "#e8f4fc",
		outfcolor: "#000000",
		outbgcolor: ""
	},
	g, parent)
}); (function() {
	var m = navigator.userAgent.toLowerCase();
	var l = /msie/.test(m);
	var u = /gecko/.test(m);
	var p = /safari/.test(m);
	function r(w) {
		return typeof(w) == "string" ? q.document.getElementById(w) : w
	}
	var b = function(w) {
		w = w || document;
		return [Math.max(w.documentElement.scrollTop, w.body.scrollTop), Math.max(w.documentElement.scrollLeft, w.body.scrollLeft), Math.max(w.documentElement.scrollWidth, w.body.scrollWidth), Math.max(w.documentElement.scrollHeight, w.body.scrollHeight)]
	};
	var k = function(w, y) {
		switch (y) {
		case "opacity":
			var A = 100;
			try {
				A = w.filters["DXImageTransform.Microsoft.Alpha"].opacity
			} catch(z) {
				try {
					A = w.filters("alpha").opacity
				} catch(z) {}
			}
			return A;
		case "float":
			y = "styleFloat";
		default:
			var x = w.currentStyle ? w.currentStyle[y] : null;
			return (w.style[y] || x)
		}
	};
	if (u) {
		k = function(w, y) {
			if (y == "float") {
				y = "cssFloat"
			}
			try {
				var x = document.defaultView.getComputedStyle(w, "")
			} catch(z) {
				traceError(z)
			}
			return w.style[y] || x ? x[y] : null
		}
	}
	var s = function(x) {
		if ((x.parentNode == null || x.offsetParent == null || k(x, "display") == "none") && x != document.body) {
			return false
		}
		var w = null;
		var B = [];
		var y;
		var z = x.ownerDocument;
		y = x.getBoundingClientRect();
		var A = b(x.ownerDocument);
		return [y.left + A[1], y.top + A[0]];
		w = x.parentNode;
		while (w.tagName && !/^body|html$/i.test(w.tagName)) {
			if (k(w, "display").search(/^inline|table-row.*$/i)) {
				B[0] -= w.scrollLeft;
				B[1] -= w.scrollTop
			}
			w = w.parentNode
		}
		return B
	};
	if (u) {
		s = function(x) {
			if ((x.parentNode == null || x.offsetParent == null || k(x, "display") == "none") && x != document.body) {
				return false
			}
			var w = null;
			var B = [];
			var y;
			var z = x.ownerDocument;
			B = [x.offsetLeft, x.offsetTop];
			w = x.offsetParent;
			var A = k(x, "position") == "absolute";
			if (w != x) {
				while (w) {
					B[0] += w.offsetLeft;
					B[1] += w.offsetTop;
					if (p && !A && k(w, "position") == "absolute") {
						A = true
					}
					w = w.offsetParent
				}
			}
			if (p && A) {
				B[0] -= x.ownerDocument.body.offsetLeft;
				B[1] -= x.ownerDocument.body.offsetTop
			}
			w = x.parentNode;
			while (w.tagName && !/^body|html$/i.test(w.tagName)) {
				if (k(w, "display").search(/^inline|table-row.*$/i)) {
					B[0] -= w.scrollLeft;
					B[1] -= w.scrollTop
				}
				w = w.parentNode
			}
			return B
		}
	}
	var j = function() {
		return window.event
	};
	if (u) {
		j = function() {
			var x = arguments.callee.caller;
			var w;
			var y = 0;
			while (x != null && y < 40) {
				w = x.arguments[0];
				if (w && (w.constructor == Event || w.constructor == MouseEvent)) {
					return w
				}
				y++;
				x = x.caller
			}
			return w
		}
	}
	var t = function() {
		var w = j();
		w.cancelBubble = true;
		w.returnValue = false
	};
	if (u) {
		t = function() {
			var w = j();
			w.preventDefault();
			w.stopPropagation()
		}
	}
	Function.prototype.bind3 = function(y, x) {
		x = x == null ? [] : x;
		var w = this;
		return function() {
			w.apply(y, x)
		}
	};
	function g(A, z, y, w) {
		var A = r(A);
		if (typeof w == "undefined") {
			w = false
		}
		if (typeof y == "undefined") {
			y = "click"
		}
		if (A.addEventListener) {
			A.addEventListener(y, z, w);
			return true
		} else {
			if (A.attachEvent) {
				var x = A.attachEvent("on" + y, z);
				return true
			} else {
				A["on" + y] = z
			}
		}
	}
	var v;
	var a = parseInt(Math.random() * 100);
	var f = [];
	var n = -1;
	var o = "";
	var q = window;
	var h = {
		overfcolor: "#666",
		overbgcolor: "#eee",
		outfcolor: "#666",
		outbgcolor: "",
		menuStatus: {
			"sina.com": true,
			"163.com": true,
			"qq.com": true,
			"126.com": true,
			"vip.sina.com": true,
			"sina.cn": true,
			"hotmail.com": true,
			"gmail.com": true,
			"sohu.com": true,
			"yahoo.cn": true,
			"139.com": true,
			"wo.com.cn": true,
			"189.cn": true
		}
	};
	h.createNode = function() {
		var w = q.document;
		var x = w.createElement("div");
		x.className = "layer_menu_list";
		x.id = "sinaNote";
		x.style.position = "absolute";
		x.style.zIndex = "9999";
		x.style.display = "none";
		w.body.appendChild(x)
	};
	h.arrowKey = function(w) {
		if (w == 38) {
			if (n <= 0) {
				n = f.length
			}
			n--;
			h.selectLi(n)
		}
		if (w == 40) {
			if (n >= f.length - 1) {
				n = -1
			}
			n++;
			h.selectLi(n)
		}
	};
	h.showList = function(H) {
		o = "";
		var L = j().keyCode;
		if (L == 38 || L == 40) {
			h.arrowKey(L);
			return false
		}
		if (!r("sinaNote")) {
			h.createNode()
		}
		var z = r(H).value;
		z = z.replace(/\>/g, "&gt;").replace(/\</g, "&lt;");
		var y = {};
		var D = z.indexOf("@");
		var I = "";
		var C = "";
		if (D > -1) {
			I = z.substr(D + 1);
			C = z.substr(0, D)
		}
		f = [];
		n = 0;
		f[f.length] = "sinaNote_MenuItem_Title_" + a;
		for (var N in this.menuStatus) {
			this.menuStatus[N] = true;
			if (I != "" && I != N.substr(0, I.length)) {
				this.menuStatus[N] = false
			} else {
				f[f.length] = "sinaNote_MenuItem_" + N + "_" + a
			}
		}
		if (scope.$IE6) {
			var F = '<iframe style="width:100%;filter:alpha(opacity=0);-moz-opacity:0;height:240px;position:absolute;z-index:-1;border:0;"></iframe>'
		} else {
			var F = ""
		}
		F += '<li class="note">' + $CLTMSG.CC0301 + "</li>";
		F += '<li id="sinaNote_MenuItem_Title_' + a + '"><a href="javascript:void(0);">' + z + "</a></li>";
		var K;
		for (var N in this.menuStatus) {
			if (this.menuStatus[N] == true) {
				if (C == "") {
					K = z + "@" + N
				} else {
					K = C + "@" + N
				}
				F += '<li id="sinaNote_MenuItem_' + N + "_" + a + '" title="' + K + '"><a href="javascript:void(0);">' + K + "</a></li>"
			}
		}
		r("sinaNote").innerHTML = "<ul>" + F + "</ul>";
		for (var G = 0; G < z.length; G++) {
			if (z.charCodeAt(G) < 160) {
				r("sinaNote").style.display = "";
				this.selectList(H)
			} else {
				this.hideList()
			}
		}
		var w = r(H);
		var x = r("sinaNote");
		var B = 0;
		var E = 0;
		var A;
		if (q != window) {
			A = s(window.frameElement);
			B = A[0];
			E = A[1]
		}
		var J = w.offsetWidth;
		if (J < 200) {
			J = 200
		}
		x.style.width = J - 4 + "px";
		var M = s(w);
		x.style.left = (M[0] + B) + "px";
		x.style.top = (M[1] + w.offsetHeight - (l ? 2: 1) + E) + "px"
	};
	h.selectList = function(y) {
		var w = r("sinaNote").getElementsByTagName("li");
		for (var x = 1; x < w.length; x++) {
			w[1].firstChild.style.backgroundColor = h.overbgcolor;
			w[1].firstChild.style.color = h.outfcolor;
			w[x].onmousedown = function() {
				var z = this.firstChild.innerHTML;
				if (z.indexOf($CLTMSG.CC0302) > -1) {
					var A = z.split("@");
					r(y).value = A[0]
				} else {
					r(y).value = this.firstChild.innerHTML
				}
				t()
			};
			w[x].onmouseover = function() {
				if (x != 1) {
					w[1].firstChild.style.backgroundColor = h.outbgcolor;
					w[1].firstChild.style.color = h.overfcolor
				}
				this.firstChild.style.backgroundColor = h.overbgcolor;
				this.firstChild.style.color = h.outfcolor
			};
			w[x].onmouseout = function() {
				this.firstChild.style.backgroundColor = h.outbgcolor;
				this.firstChild.style.color = h.overfcolor;
				w[1].firstChild.style.backgroundColor = h.overbgcolor;
				w[1].firstChild.style.color = h.outfcolor
			}
		}
	};
	h.selectLi = function(w) {
		var y;
		if (r("sinaNote_MenuItem_Title_" + a)) {
			r("sinaNote_MenuItem_Title_" + a).firstChild.style.backgroundColor = h.outbgcolor;
			r("sinaNote_MenuItem_Title_" + a).firstChild.style.color = h.overfcolor;
			for (var x = 0; x < f.length; x++) {
				y = r(f[x]);
				y.firstChild.style.backgroundColor = h.outbgcolor;
				y.firstChild.style.color = h.overfcolor
			}
			r(f[w]).firstChild.style.backgroundColor = h.overbgcolor;
			r(f[w]).firstChild.style.color = h.outfcolor;
			o = r(f[w]).firstChild.innerHTML
		}
	};
	h.hideList = function() {
		if (!r("sinaNote")) {
			h.createNode()
		}
		r("sinaNote").style.display = "none"
	};
	h.init = function(A, y, w, z) {
		for (var x in y) {
			this[x] = y[x]
		}
		g(document, h.hideList, "click");
		g(A, h.hideList, "blur");
		g(A, h.showList.bind3(this, [A]), "keyup");
		g(A,
		function(D) {
			var C = j().keyCode;
			if (C == 13 || C == 9) {
				if (o != "") {
					var B = o;
					if (B.indexOf($CLTMSG.CC0302) > -1) {
						var E = B.split("@");
						A.value = E[0]
					} else {
						A.value = o
					}
				}
				try {
					if (w != null && w.style.display !== "none") {
						w.focus()
					}
				} catch(D) {}
				t()
			}
		},
		"keydown");
		if (z) {
			q = z
		}
	};
	window.passcardOBJ_v4 = h
})(); (function() {
	var a = {
		11: "北京",
		12: "天津",
		13: "河北",
		14: "山西",
		15: "内蒙古",
		21: "辽宁",
		22: "吉林",
		23: "黑龙江 ",
		31: "上海",
		32: "江苏",
		33: "浙江",
		34: "安徽",
		35: "福建",
		36: "江西",
		37: "山东",
		41: "河南",
		42: "湖北 ",
		43: "湖南",
		44: "广东",
		45: "广西",
		46: "海南",
		50: "重庆",
		51: "四川",
		52: "贵州",
		53: "云南",
		54: "西藏 ",
		61: "陕西",
		62: "甘肃",
		63: "青海",
		64: "宁夏",
		65: "新疆",
		71: "台湾",
		81: "香港",
		82: "澳门",
		91: "国外 "
	};
	var b = function(h) {
		if (h.length == "15") {
			var g = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
			var f = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
			var k = 0,
			j;
			h = h.substr(0, 6) + "19" + h.substr(6, h.length - 6);
			for (var j = 0; j < 17; j++) {
				k += h.substr(j, 1) * g[j]
			}
			h += f[k % 11];
			return h
		}
		return h
	};
	App.checkIdCards = function(l) {
		var f = l;
		var h = 0;
		var j = "";
		if (/^\d{14}(\d|x|X)$/i.test(f)) {
			f = b(l)
		}
		if (!/^\d{17}(\d|x|X)$/i.test(f)) {
			return false
		}
		f = f.replace(/x$/i, "a");
		if (a[parseInt(f.substr(0, 2))] == null) {
			return false
		}
		sBirthday = f.substr(6, 4) + "-" + Number(f.substr(10, 2)) + "-" + Number(f.substr(12, 2));
		var k = new Date(sBirthday.replace(/-/g, "/"));
		if (sBirthday != (k.getFullYear() + "-" + (k.getMonth() + 1) + "-" + k.getDate())) {
			return false
		}
		for (var g = 17; g >= 0; g--) {
			h += (Math.pow(2, g) % 11) * parseInt(f.charAt(17 - g), 11)
		}
		if (h % 11 != 1) {
			return false
		}
		return true
	}
})(); (function(p) {
	var k = Core.Events.addEvent,
	t = Core.String.trim,
	j = App.checkMiniName,
	h = App.checkNickSp2,
	r = App.checkEml,
	l = App.checkQQNum,
	g = App.checkWeakPassword,
	a = App.checkIdCard,
	o = App.TWFilter;
	var f = null;
	var q = function(u, w) {
		var v = {};
		v.checkPwdPower = function() {
			var x = App.checkPwdPower(u.value, 4, 20);
			var y;
			x = Math.floor(x * 100);
			if (x < 33) {
				y = 1
			} else {
				if (x >= 33 && x <= 66) {
					y = 2
				} else {
					if (x > 66) {
						y = 3
					}
				}
			}
			if (u.value == 0) {
				y = 0
			}
			if (!g(t(u.value))) {
				y = 1
			}
			v.setLevel(y)
		};
		v.setLevel = function(x) {
			w.innerHTML = '<span class="w' + x + '"></span>'
		};
		k(u, v.checkPwdPower, "keyup");
		return v
	};
	var n = {};
	n.buildPwdPowerCheck = q;
	var b = {
		realname_box: null,
		sin_box: null,
		sintype: null,
		password: null,
		idType: null
	};
	n.setNodes = function(v) {
		for (var u in v) {
			if (v.hasOwnProperty(u)) {
				b[u] = v[u]
			}
		}
	};
	var s = {
		empty: function(u) {
			u.value = t(u.value);
			return !! u.value
		},
		empty_not_trim: function(u) {
			return !! u.value
		},
		right: function(u) {
			return true
		}
	};
	var m = {
		MR0001: s.empty,
		TR0001: s.empty,
		MR0002: function(u) {
			if (App.Checkinfo.check(["MR0001"])) {
				if (r(u.value)) {
					return true
				} else {
					return false
				}
			} else {
				return true
			}
		},
		TR0002: function(u) {
			if (App.Checkinfo.check(["TR0001"])) {
				u.value = t(u.value);
				if (u.value.match(/^(13|14|15|18)\d{9}$/)) {
					return true
				} else {
					return false
				}
			} else {
				return true
			}
		},
		TR0003: function(u) {
			u.ajaxCheck = "1";
			u.code = "A00006";
			if (App.Checkinfo.check(["TR0001", "TR0002"])) {
				var v = {
					username: u.value,
					rnd: Math.random(),
					sinaId: $E("sinaId").value
				};
				Utils.Io.Ajax.request("/signup/ami_check.php", {
					POST: v,
					onComplete: function(w) {
						if (w.code == "A00006") {
							u.ajaxCheck = "1"
						} else {
							u.ajaxCheck = "0"
						}
						m.TR0006(u);
						return true
					},
					onException: function(w) {
						return false
					},
					returnType: "json"
				});
				return true
			} else {
				return true
			}
		},
		MR0004: function(u) {
			if (App.Checkinfo.check(["MR0001", "MR0002"])) {
				if (/^.+@(sina\.com|vip\.sina\.com|sina\.cn|2008\.sina\.com|my3ia\.sina\.com)$/i.test(u.value)) {
					if (f == null) {
						f = App.alert($CLTMSG.CC2301, {
							ok: function() {
								App.ModLogin()
							}
						})
					}
					return false
				} else {
					return true
				}
			} else {
				return true
			}
		},
		MR0005: function(u) {
			u.ajaxCheck = "1";
			if (App.Checkinfo.check(["MR0001", "MR0002", "MR0004"])) {
				var v = {
					username: u.value,
					sinaId: $E("sinaId").value
				};
				Utils.Io.Ajax.request("/signup/ami_check.php", {
					POST: v,
					onComplete: function(w) {
						if (w.code == "A00006") {
							u.ajaxCheck = "1";
							m.M09007(u)
						} else {
							if (w.code == "MR0008") {
								u.ajaxCheck = "0";
								App.alert($SYSMSG.MR0008, {
									ok: function() {}
								})
							} else {
								u.ajaxCheck = "0"
							}
						}
						m.MR0006(u);
						return true
					},
					onException: function(w) {
						return false
					},
					returnType: "json"
				});
				return true
			} else {
				return true
			}
		},
		MR0006: function(u) {
			if (u.ajaxCheck == "1") {
				App.Checkinfo.hideError(["MR0005"]);
				return true
			} else {
				if (u.ajaxCheck === undefined) {
					App.Checkinfo.hideError(["MR0005"]);
					return true
				} else {
					App.Checkinfo.showError(["MR0005"]);
					return false
				}
			}
		},
		TR0006: function(u) {
			if (u.ajaxCheck == "1") {
				App.Checkinfo.hideError(["TR0006"]);
				return true
			} else {
				if (u.ajaxCheck === undefined) {
					App.Checkinfo.hideError(["TR0006"]);
					return true
				} else {
					App.Checkinfo.showError(["TR0006"]);
					return false
				}
			}
		},
		MR0011: function(u) {
			u.value = t(u.value);
			if (u.value.length < 6) {
				return false
			} else {
				return true
			}
		},
		MR0013: function(u) {
			u.value = t(u.value);
			if (App.Checkinfo.check(["MR0011"])) {
				if (u.value.length > 16) {
					return false
				} else {
					return true
				}
			} else {
				return true
			}
		},
		MR0014: function(u) {
			u.value = t(u.value);
			if (App.Checkinfo.check(["MR0011", "MR0013"])) {
				if (/^[0-9a-zA-Z\._\-\?\~\!\@\#\$\%\^\&\*\\\+\`\=\[\]\(\)\{\}\|\;\'\:\"\,\/\<\>]{6,16}$/.test(u.value)) {
					return true
				} else {
					return false
				}
			} else {
				return true
			}
		},
		MR0016: function(v) {
			v.value = t(v.value);
			if (App.Checkinfo.check(["MR0011", "MR0013", "MR0014"])) {
				var u = v.value.replace(/(.)\1+/, "a");
				if (u.length == 1) {
					return false
				} else {
					return true
				}
			} else {
				return true
			}
		},
		MR0017: function(u) {
			u.value = t(u.value);
			var x = "012345678909876543210";
			var w = "abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba";
			w += w.toUpperCase();
			if (App.Checkinfo.check(["MR0011", "MR0013", "MR0014", "MR0016"])) {
				if (x.indexOf(u.value) != -1 || w.indexOf(u.value) != -1) {
					return false
				} else {
					if (u.value.match(/^(\d+)([a-zA-Z]+)$/)) {
						var v = u.value.match(/^(\d+)([a-zA-Z]+)$/);
						if (x.indexOf(v[1]) != -1 && w.indexOf(v[2]) != -1) {
							return false
						} else {
							return true
						}
					} else {
						if (u.value.match(/^([a-zA-Z]+)(\d+)$/)) {
							var v = u.value.match(/^([a-zA-Z]+)(\d+)$/);
							if (w.indexOf(v[1]) != -1 && x.indexOf(v[2]) != -1) {
								return false
							} else {
								return true
							}
						} else {
							return true
						}
					}
				}
			} else {
				return true
			}
		},
		MR0020: function(u) {
			u.value = t(u.value);
			if (u.value == t(b.password.value)) {
				return true
			} else {
				return false
			}
		},
		MR0031: s.empty,
		MR0032: function(u) {
			u.value = t(u.value);
			if (u.value) {
				if (Core.String.byteLength(u.value) >= 4) {
					return true
				} else {
					return false
				}
			} else {
				return true
			}
		},
		MR0035: function(u) {
			u.value = t(u.value);
			if (!/^[0-9]*$/.test(u.value) || u.value.length == 0) {
				return true
			} else {
				return false
			}
		},
		MR0037: function(u) {
			u.value = t(u.value);
			if (u.value) {
				return h(u.value)
			}
		},
		MR0040: s.empty_not_trim,
		MR0050: s.empty,
		MR0061: s.empty,
		MR0062: function(u) {
			u.value = t(u.value);
			if (/^[0-9a-zA-Z]{5,32}$/.test(u.value)) {
				return true
			} else {
				return false
			}
		},
		MR0071: function(u) {
			if (u.checked) {
				return true
			}
			return false
		},
		M00949: function(u) {
			u.value = t(u.value);
			return g(u.value)
		},
		M01007: s.empty_not_trim,
		R01007: function(u) {
			u.value = t(u.value);
			if (b.sin_box.getAttribute("data-state") == "disable" || b.sintype.value == 4) {
				return true
			}
			return !! u.value
		},
		R01008: s.right,
		M01009: function(u) {
			u.value = t(u.value);
			if (o(u.value)) {
				return false
			}
			return true
		},
		M01100: s.empty,
		M01101: function(v) {
			v.value = t(v.value);
			var u = Core.String.byteLength(v.value);
			if (u >= 4 || v.value.length == 0) {
				return true
			} else {
				return false
			}
		},
		M01102: function(u) {
			u.value = t(u.value);
			if (u.value) {
				if (Core.String.byteLength(String(u.value)) <= 30) {
					return true
				} else {
					return false
				}
			} else {
				return true
			}
		},
		M01104: function(w) {
			for (var v = 0, u = w.length; v < u; v++) {
				if (w[v].checked) {
					return true
				}
			}
			return false
		},
		R01105: function(u) {
			u.value = t(u.value);
			if (b.sin_box.getAttribute("data-state") == "disable") {
				return true
			}
			if (b.sintype.value == "1" || b.sintype.value == 4 && u.value.length > 0) {
				return (u.value.length >= 8 && u.value.length <= 20)
			} else {
				return true
			}
		},
		R01106: function(u) {
			u.value = t(u.value);
			if (b.realname_box.getAttribute("data-state") == "disable" || b.sintype.value == 4) {
				return true
			}
			if (u.value.length <= 0) {
				return false
			}
			if (Core.String.byteLength(u.value) > 30 || Core.String.byteLength(u.value) < 4) {
				return false
			} else {
				return true
			}
		},
		R01107: function(u) {
			u.value = t(u.value);
			if (b.realname_box.getAttribute("data-state") == "disable") {
				return true
			}
			if (b.sintype.value == 1) {
				if ((/[^\u4e00-\u9fa5]/).test(u.value)) {
					return false
				}
			} else {
				if (b.sintype.value == 4) {
					if ((/[^\u4e00-\u9fa5a-zA-Z\.\．]/).test(u.value)) {
						return false
					}
				}
			}
			return true
		},
		R01108: function(u) {
			u.value = t(u.value);
			if (b.sin_box.getAttribute("data-state") == "disable") {
				return true
			}
			if (b.sintype.value != "1") {
				return ! (/[^a-zA-Z\d\(\)]/).test(u.value)
			} else {
				return true
			}
		},
		M01128: function(u) {
			u.value = t(u.value);
			if (!/^[0-9]*$/.test(u.value) || u.value.length == 0) {
				return true
			} else {
				return false
			}
		},
		M01129: s.right,
		M01130: function(u) {
			u.value = t(u.value);
			if (/^[0-9a-zA-Z]{5,32}$/.test(u.value) || u.value.length == 0) {
				return true
			} else {
				return false
			}
		},
		M01131: s.empty,
		M01133: function(u) {
			u.value = t(u.value);
			if (b.idType.value != "1" || u.value.length <= 0) {
				return true
			}
			return a(u.value)
		},
		M01134: function(u) {
			u.value = t(u.value);
			if (b.sin_box.getAttribute("data-state") == "disable") {
				return true
			}
			if (b.sintype.value == "1") {
				return (/^[\d]{15}$/).test(u.value) || (/^[\d]{17}([Xx\d]{1}$)$/).test(u.value)
			} else {
				return true
			}
		},
		M01135: function(u) {
			u.value = t(u.value);
			if (u.value.length <= 0) {
				return false
			}
			if (Core.String.byteLength(u.value) > 16 || Core.String.byteLength(u.value) < 4) {
				return false
			}
			return true
		},
		M01136: function(u) {
			u.value = t(u.value);
			if (/[0-9\s_><,\[\]\{\}\?\/\+=\|\'\\\":;\~\!\@\#\*\$\%\^\&\(\)`\uff00-\uffff]+/.test(u.value)) {
				return false
			} else {
				return true
			}
		},
		M01140: s.empty,
		M01191: function(u) {
			u.value = t(u.value);
			if (u.value.length === 0 || b.idType.value == "1" || b.idType.value == "0") {
				return true
			}
			if (b.idType.value != "1" && b.idType.value != "0") {
				return /^[0-9a-zA-Z]{3,20}$/.test(u.value)
			}
		},
		R01409: function(u) {
			u.value = t(u.value);
			if (u.value && !/^[0-9a-zA-z]{1,6}$/.test(u.value)) {
				return false
			} else {
				return true
			}
		},
		R01417: function(u) {
			if (b.idType.value == 0 && u.value.length > 0) {
				return false
			} else {
				return true
			}
		},
		M09007: function(u) {
			if (!u.checkQQ || u.checkQQ !== u.value) {
				if (/^\d+\@qq\.com$/.test(u.value)) {
					App.alert(App.getMsg("M09007"), {
						ok_label: App.getMsg("M09008")
					})
				}
				u.checkQQ = u.value
			}
			return true
		},
		M09011: function(u) {
			u.value = t(u.value);
			if (b.sin_box.getAttribute("data-state") == "disable") {
				return true
			}
			if (b.sintype.value == "4" && u.value.length > 0) {
				return (/^[\da-zA-z\(\)]{8,20}$/).test(u.value)
			} else {
				return true
			}
		}
	};
	n.checkFunction = m;
	p.register_check = n
})(App); (function(P) {
	var aA;
	var am = 244837814094590;
	var ad = ((am & 16777215) == 15715070);
	function aw(z, t, aE) {
		if (z != null) {
			if ("number" == typeof z) {
				this.fromNumber(z, t, aE)
			} else {
				if (t == null && "string" != typeof z) {
					this.fromString(z, 256)
				} else {
					this.fromString(z, t)
				}
			}
		}
	}
	function l() {
		return new aw(null)
	}
	function b(aG, t, z, aF, aI, aH) {
		while (--aH >= 0) {
			var aE = t * this[aG++] + z[aF] + aI;
			aI = Math.floor(aE / 67108864);
			z[aF++] = aE & 67108863
		}
		return aI
	}
	function aC(aG, aL, aM, aF, aJ, t) {
		var aI = aL & 32767,
		aK = aL >> 15;
		while (--t >= 0) {
			var aE = this[aG] & 32767;
			var aH = this[aG++] >> 15;
			var z = aK * aE + aH * aI;
			aE = aI * aE + ((z & 32767) << 15) + aM[aF] + (aJ & 1073741823);
			aJ = (aE >>> 30) + (z >>> 15) + aK * aH + (aJ >>> 30);
			aM[aF++] = aE & 1073741823
		}
		return aJ
	}
	function aB(aG, aL, aM, aF, aJ, t) {
		var aI = aL & 16383,
		aK = aL >> 14;
		while (--t >= 0) {
			var aE = this[aG] & 16383;
			var aH = this[aG++] >> 14;
			var z = aK * aE + aH * aI;
			aE = aI * aE + ((z & 16383) << 14) + aM[aF] + aJ;
			aJ = (aE >> 28) + (z >> 14) + aK * aH;
			aM[aF++] = aE & 268435455
		}
		return aJ
	}
	if (ad && (navigator.appName == "Microsoft Internet Explorer")) {
		aw.prototype.am = aC;
		aA = 30
	} else {
		if (ad && (navigator.appName != "Netscape")) {
			aw.prototype.am = b;
			aA = 26
		} else {
			aw.prototype.am = aB;
			aA = 28
		}
	}
	aw.prototype.DB = aA;
	aw.prototype.DM = ((1 << aA) - 1);
	aw.prototype.DV = (1 << aA);
	var ae = 52;
	aw.prototype.FV = Math.pow(2, ae);
	aw.prototype.F1 = ae - aA;
	aw.prototype.F2 = 2 * aA - ae;
	var ai = "0123456789abcdefghijklmnopqrstuvwxyz";
	var ak = new Array();
	var au,
	A;
	au = "0".charCodeAt(0);
	for (A = 0; A <= 9; ++A) {
		ak[au++] = A
	}
	au = "a".charCodeAt(0);
	for (A = 10; A < 36; ++A) {
		ak[au++] = A
	}
	au = "A".charCodeAt(0);
	for (A = 10; A < 36; ++A) {
		ak[au++] = A
	}
	function aD(t) {
		return ai.charAt(t)
	}
	function E(z, t) {
		var aE = ak[z.charCodeAt(t)];
		return (aE == null) ? -1: aE
	}
	function ac(z) {
		for (var t = this.t - 1; t >= 0; --t) {
			z[t] = this[t]
		}
		z.t = this.t;
		z.s = this.s
	}
	function r(t) {
		this.t = 1;
		this.s = (t < 0) ? -1: 0;
		if (t > 0) {
			this[0] = t
		} else {
			if (t < -1) {
				this[0] = t + DV
			} else {
				this.t = 0
			}
		}
	}
	function f(t) {
		var z = l();
		z.fromInt(t);
		return z
	}
	function B(aI, z) {
		var aF;
		if (z == 16) {
			aF = 4
		} else {
			if (z == 8) {
				aF = 3
			} else {
				if (z == 256) {
					aF = 8
				} else {
					if (z == 2) {
						aF = 1
					} else {
						if (z == 32) {
							aF = 5
						} else {
							if (z == 4) {
								aF = 2
							} else {
								this.fromRadix(aI, z);
								return
							}
						}
					}
				}
			}
		}
		this.t = 0;
		this.s = 0;
		var aH = aI.length,
		aE = false,
		aG = 0;
		while (--aH >= 0) {
			var t = (aF == 8) ? aI[aH] & 255: E(aI, aH);
			if (t < 0) {
				if (aI.charAt(aH) == "-") {
					aE = true
				}
				continue
			}
			aE = false;
			if (aG == 0) {
				this[this.t++] = t
			} else {
				if (aG + aF > this.DB) {
					this[this.t - 1] |= (t & ((1 << (this.DB - aG)) - 1)) << aG;
					this[this.t++] = (t >> (this.DB - aG))
				} else {
					this[this.t - 1] |= t << aG
				}
			}
			aG += aF;
			if (aG >= this.DB) {
				aG -= this.DB
			}
		}
		if (aF == 8 && (aI[0] & 128) != 0) {
			this.s = -1;
			if (aG > 0) {
				this[this.t - 1] |= ((1 << (this.DB - aG)) - 1) << aG
			}
		}
		this.clamp();
		if (aE) {
			aw.ZERO.subTo(this, this)
		}
	}
	function T() {
		var t = this.s & this.DM;
		while (this.t > 0 && this[this.t - 1] == t) {--this.t
		}
	}
	function v(z) {
		if (this.s < 0) {
			return "-" + this.negate().toString(z)
		}
		var aE;
		if (z == 16) {
			aE = 4
		} else {
			if (z == 8) {
				aE = 3
			} else {
				if (z == 2) {
					aE = 1
				} else {
					if (z == 32) {
						aE = 5
					} else {
						if (z == 4) {
							aE = 2
						} else {
							return this.toRadix(z)
						}
					}
				}
			}
		}
		var aG = (1 << aE) - 1,
		aJ,
		t = false,
		aH = "",
		aF = this.t;
		var aI = this.DB - (aF * this.DB) % aE;
		if (aF-->0) {
			if (aI < this.DB && (aJ = this[aF] >> aI) > 0) {
				t = true;
				aH = aD(aJ)
			}
			while (aF >= 0) {
				if (aI < aE) {
					aJ = (this[aF] & ((1 << aI) - 1)) << (aE - aI);
					aJ |= this[--aF] >> (aI += this.DB - aE)
				} else {
					aJ = (this[aF] >> (aI -= aE)) & aG;
					if (aI <= 0) {
						aI += this.DB; --aF
					}
				}
				if (aJ > 0) {
					t = true
				}
				if (t) {
					aH += aD(aJ)
				}
			}
		}
		return t ? aH: "0"
	}
	function W() {
		var t = l();
		aw.ZERO.subTo(this, t);
		return t
	}
	function ap() {
		return (this.s < 0) ? this.negate() : this
	}
	function K(t) {
		var aE = this.s - t.s;
		if (aE != 0) {
			return aE
		}
		var z = this.t;
		aE = z - t.t;
		if (aE != 0) {
			return aE
		}
		while (--z >= 0) {
			if ((aE = this[z] - t[z]) != 0) {
				return aE
			}
		}
		return 0
	}
	function n(z) {
		var aF = 1,
		aE;
		if ((aE = z >>> 16) != 0) {
			z = aE;
			aF += 16
		}
		if ((aE = z >> 8) != 0) {
			z = aE;
			aF += 8
		}
		if ((aE = z >> 4) != 0) {
			z = aE;
			aF += 4
		}
		if ((aE = z >> 2) != 0) {
			z = aE;
			aF += 2
		}
		if ((aE = z >> 1) != 0) {
			z = aE;
			aF += 1
		}
		return aF
	}
	function y() {
		if (this.t <= 0) {
			return 0
		}
		return this.DB * (this.t - 1) + n(this[this.t - 1] ^ (this.s & this.DM))
	}
	function av(aE, z) {
		var t;
		for (t = this.t - 1; t >= 0; --t) {
			z[t + aE] = this[t]
		}
		for (t = aE - 1; t >= 0; --t) {
			z[t] = 0
		}
		z.t = this.t + aE;
		z.s = this.s
	}
	function ab(aE, z) {
		for (var t = aE; t < this.t; ++t) {
			z[t - aE] = this[t]
		}
		z.t = Math.max(this.t - aE, 0);
		z.s = this.s
	}
	function x(aJ, aF) {
		var z = aJ % this.DB;
		var t = this.DB - z;
		var aH = (1 << t) - 1;
		var aG = Math.floor(aJ / this.DB),
		aI = (this.s << z) & this.DM,
		aE;
		for (aE = this.t - 1; aE >= 0; --aE) {
			aF[aE + aG + 1] = (this[aE] >> t) | aI;
			aI = (this[aE] & aH) << z
		}
		for (aE = aG - 1; aE >= 0; --aE) {
			aF[aE] = 0
		}
		aF[aG] = aI;
		aF.t = this.t + aG + 1;
		aF.s = this.s;
		aF.clamp()
	}
	function p(aI, aF) {
		aF.s = this.s;
		var aG = Math.floor(aI / this.DB);
		if (aG >= this.t) {
			aF.t = 0;
			return
		}
		var z = aI % this.DB;
		var t = this.DB - z;
		var aH = (1 << z) - 1;
		aF[0] = this[aG] >> z;
		for (var aE = aG + 1; aE < this.t; ++aE) {
			aF[aE - aG - 1] |= (this[aE] & aH) << t;
			aF[aE - aG] = this[aE] >> z
		}
		if (z > 0) {
			aF[this.t - aG - 1] |= (this.s & aH) << t
		}
		aF.t = this.t - aG;
		aF.clamp()
	}
	function af(z, aF) {
		var aE = 0,
		aG = 0,
		t = Math.min(z.t, this.t);
		while (aE < t) {
			aG += this[aE] - z[aE];
			aF[aE++] = aG & this.DM;
			aG >>= this.DB
		}
		if (z.t < this.t) {
			aG -= z.s;
			while (aE < this.t) {
				aG += this[aE];
				aF[aE++] = aG & this.DM;
				aG >>= this.DB
			}
			aG += this.s
		} else {
			aG += this.s;
			while (aE < z.t) {
				aG -= z[aE];
				aF[aE++] = aG & this.DM;
				aG >>= this.DB
			}
			aG -= z.s
		}
		aF.s = (aG < 0) ? -1: 0;
		if (aG < -1) {
			aF[aE++] = this.DV + aG
		} else {
			if (aG > 0) {
				aF[aE++] = aG
			}
		}
		aF.t = aE;
		aF.clamp()
	}
	function H(z, aF) {
		var t = this.abs(),
		aG = z.abs();
		var aE = t.t;
		aF.t = aE + aG.t;
		while (--aE >= 0) {
			aF[aE] = 0
		}
		for (aE = 0; aE < aG.t; ++aE) {
			aF[aE + t.t] = t.am(0, aG[aE], aF, aE, 0, t.t)
		}
		aF.s = 0;
		aF.clamp();
		if (this.s != z.s) {
			aw.ZERO.subTo(aF, aF)
		}
	}
	function V(aE) {
		var t = this.abs();
		var z = aE.t = 2 * t.t;
		while (--z >= 0) {
			aE[z] = 0
		}
		for (z = 0; z < t.t - 1; ++z) {
			var aF = t.am(z, t[z], aE, 2 * z, 0, 1);
			if ((aE[z + t.t] += t.am(z + 1, 2 * t[z], aE, 2 * z + 1, aF, t.t - z - 1)) >= t.DV) {
				aE[z + t.t] -= t.DV;
				aE[z + t.t + 1] = 1
			}
		}
		if (aE.t > 0) {
			aE[aE.t - 1] += t.am(z, t[z], aE, 2 * z, 0, 1)
		}
		aE.s = 0;
		aE.clamp()
	}
	function I(aM, aJ, aI) {
		var aS = aM.abs();
		if (aS.t <= 0) {
			return
		}
		var aK = this.abs();
		if (aK.t < aS.t) {
			if (aJ != null) {
				aJ.fromInt(0)
			}
			if (aI != null) {
				this.copyTo(aI)
			}
			return
		}
		if (aI == null) {
			aI = l()
		}
		var aG = l(),
		z = this.s,
		aL = aM.s;
		var aR = this.DB - n(aS[aS.t - 1]);
		if (aR > 0) {
			aS.lShiftTo(aR, aG);
			aK.lShiftTo(aR, aI)
		} else {
			aS.copyTo(aG);
			aK.copyTo(aI)
		}
		var aO = aG.t;
		var aE = aG[aO - 1];
		if (aE == 0) {
			return
		}
		var aN = aE * (1 << this.F1) + ((aO > 1) ? aG[aO - 2] >> this.F2: 0);
		var aV = this.FV / aN,
		aU = (1 << this.F1) / aN,
		aT = 1 << this.F2;
		var aQ = aI.t,
		aP = aQ - aO,
		aH = (aJ == null) ? l() : aJ;
		aG.dlShiftTo(aP, aH);
		if (aI.compareTo(aH) >= 0) {
			aI[aI.t++] = 1;
			aI.subTo(aH, aI)
		}
		aw.ONE.dlShiftTo(aO, aH);
		aH.subTo(aG, aG);
		while (aG.t < aO) {
			aG[aG.t++] = 0
		}
		while (--aP >= 0) {
			var aF = (aI[--aQ] == aE) ? this.DM: Math.floor(aI[aQ] * aV + (aI[aQ - 1] + aT) * aU);
			if ((aI[aQ] += aG.am(0, aF, aI, aP, 0, aO)) < aF) {
				aG.dlShiftTo(aP, aH);
				aI.subTo(aH, aI);
				while (aI[aQ] < --aF) {
					aI.subTo(aH, aI)
				}
			}
		}
		if (aJ != null) {
			aI.drShiftTo(aO, aJ);
			if (z != aL) {
				aw.ZERO.subTo(aJ, aJ)
			}
		}
		aI.t = aO;
		aI.clamp();
		if (aR > 0) {
			aI.rShiftTo(aR, aI)
		}
		if (z < 0) {
			aw.ZERO.subTo(aI, aI)
		}
	}
	function S(t) {
		var z = l();
		this.abs().divRemTo(t, null, z);
		if (this.s < 0 && z.compareTo(aw.ZERO) > 0) {
			t.subTo(z, z)
		}
		return z
	}
	function O(t) {
		this.m = t
	}
	function Z(t) {
		if (t.s < 0 || t.compareTo(this.m) >= 0) {
			return t.mod(this.m)
		} else {
			return t
		}
	}
	function ao(t) {
		return t
	}
	function N(t) {
		t.divRemTo(this.m, null, t)
	}
	function L(t, aE, z) {
		t.multiplyTo(aE, z);
		this.reduce(z)
	}
	function ay(t, z) {
		t.squareTo(z);
		this.reduce(z)
	}
	O.prototype.convert = Z;
	O.prototype.revert = ao;
	O.prototype.reduce = N;
	O.prototype.mulTo = L;
	O.prototype.sqrTo = ay;
	function F() {
		if (this.t < 1) {
			return 0
		}
		var t = this[0];
		if ((t & 1) == 0) {
			return 0
		}
		var z = t & 3;
		z = (z * (2 - (t & 15) * z)) & 15;
		z = (z * (2 - (t & 255) * z)) & 255;
		z = (z * (2 - (((t & 65535) * z) & 65535))) & 65535;
		z = (z * (2 - t * z % this.DV)) % this.DV;
		return (z > 0) ? this.DV - z: -z
	}
	function j(t) {
		this.m = t;
		this.mp = t.invDigit();
		this.mpl = this.mp & 32767;
		this.mph = this.mp >> 15;
		this.um = (1 << (t.DB - 15)) - 1;
		this.mt2 = 2 * t.t
	}
	function an(t) {
		var z = l();
		t.abs().dlShiftTo(this.m.t, z);
		z.divRemTo(this.m, null, z);
		if (t.s < 0 && z.compareTo(aw.ZERO) > 0) {
			this.m.subTo(z, z)
		}
		return z
	}
	function ax(t) {
		var z = l();
		t.copyTo(z);
		this.reduce(z);
		return z
	}
	function U(t) {
		while (t.t <= this.mt2) {
			t[t.t++] = 0
		}
		for (var aE = 0; aE < this.m.t; ++aE) {
			var z = t[aE] & 32767;
			var aF = (z * this.mpl + (((z * this.mph + (t[aE] >> 15) * this.mpl) & this.um) << 15)) & t.DM;
			z = aE + this.m.t;
			t[z] += this.m.am(0, aF, t, aE, 0, this.m.t);
			while (t[z] >= t.DV) {
				t[z] -= t.DV;
				t[++z]++
			}
		}
		t.clamp();
		t.drShiftTo(this.m.t, t);
		if (t.compareTo(this.m) >= 0) {
			t.subTo(this.m, t)
		}
	}
	function aq(t, z) {
		t.squareTo(z);
		this.reduce(z)
	}
	function D(t, aE, z) {
		t.multiplyTo(aE, z);
		this.reduce(z)
	}
	j.prototype.convert = an;
	j.prototype.revert = ax;
	j.prototype.reduce = U;
	j.prototype.mulTo = D;
	j.prototype.sqrTo = aq;
	function m() {
		return ((this.t > 0) ? (this[0] & 1) : this.s) == 0
	}
	function C(aJ, aK) {
		if (aJ > 4294967295 || aJ < 1) {
			return aw.ONE
		}
		var aI = l(),
		aE = l(),
		aH = aK.convert(this),
		aG = n(aJ) - 1;
		aH.copyTo(aI);
		while (--aG >= 0) {
			aK.sqrTo(aI, aE);
			if ((aJ & (1 << aG)) > 0) {
				aK.mulTo(aE, aH, aI)
			} else {
				var aF = aI;
				aI = aE;
				aE = aF
			}
		}
		return aK.revert(aI)
	}
	function ar(aE, t) {
		var aF;
		if (aE < 256 || t.isEven()) {
			aF = new O(t)
		} else {
			aF = new j(t)
		}
		return this.exp(aE, aF)
	}
	aw.prototype.copyTo = ac;
	aw.prototype.fromInt = r;
	aw.prototype.fromString = B;
	aw.prototype.clamp = T;
	aw.prototype.dlShiftTo = av;
	aw.prototype.drShiftTo = ab;
	aw.prototype.lShiftTo = x;
	aw.prototype.rShiftTo = p;
	aw.prototype.subTo = af;
	aw.prototype.multiplyTo = H;
	aw.prototype.squareTo = V;
	aw.prototype.divRemTo = I;
	aw.prototype.invDigit = F;
	aw.prototype.isEven = m;
	aw.prototype.exp = C;
	aw.prototype.toString = v;
	aw.prototype.negate = W;
	aw.prototype.abs = ap;
	aw.prototype.compareTo = K;
	aw.prototype.bitLength = y;
	aw.prototype.mod = S;
	aw.prototype.modPowInt = ar;
	aw.ZERO = f(0);
	aw.ONE = f(1);
	function o() {
		this.i = 0;
		this.j = 0;
		this.S = new Array()
	}
	function h(aG) {
		var aF,
		z,
		aE;
		for (aF = 0; aF < 256; ++aF) {
			this.S[aF] = aF
		}
		z = 0;
		for (aF = 0; aF < 256; ++aF) {
			z = (z + this.S[aF] + aG[aF % aG.length]) & 255;
			aE = this.S[aF];
			this.S[aF] = this.S[z];
			this.S[z] = aE
		}
		this.i = 0;
		this.j = 0
	}
	function a() {
		var z;
		this.i = (this.i + 1) & 255;
		this.j = (this.j + this.S[this.i]) & 255;
		z = this.S[this.i];
		this.S[this.i] = this.S[this.j];
		this.S[this.j] = z;
		return this.S[(z + this.S[this.i]) & 255]
	}
	o.prototype.init = h;
	o.prototype.next = a;
	function at() {
		return new o()
	}
	var R = 256;
	var q;
	var Y;
	var ag;
	function g(t) {
		Y[ag++] ^= t & 255;
		Y[ag++] ^= (t >> 8) & 255;
		Y[ag++] ^= (t >> 16) & 255;
		Y[ag++] ^= (t >> 24) & 255;
		if (ag >= R) {
			ag -= R
		}
	}
	function X() {
		g(new Date().getTime())
	}
	if (Y == null) {
		Y = new Array();
		ag = 0;
		var M;
		if (navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
			var J = window.crypto.random(32);
			for (M = 0; M < J.length; ++M) {
				Y[ag++] = J.charCodeAt(M) & 255
			}
		}
		while (ag < R) {
			M = Math.floor(65536 * Math.random());
			Y[ag++] = M >>> 8;
			Y[ag++] = M & 255
		}
		ag = 0;
		X()
	}
	function G() {
		if (q == null) {
			X();
			q = at();
			q.init(Y);
			for (ag = 0; ag < Y.length; ++ag) {
				Y[ag] = 0
			}
			ag = 0
		}
		return q.next()
	}
	function az(z) {
		var t;
		for (t = 0; t < z.length; ++t) {
			z[t] = G()
		}
	}
	function ah() {}
	ah.prototype.nextBytes = az;
	function k(z, t) {
		return new aw(z, t)
	}
	function al(aE, aF) {
		var t = "";
		var z = 0;
		while (z + aF < aE.length) {
			t += aE.substring(z, z + aF) + "\n";
			z += aF
		}
		return t + aE.substring(z, aE.length)
	}
	function w(t) {
		if (t < 16) {
			return "0" + t.toString(16)
		} else {
			return t.toString(16)
		}
	}
	function aj(aF, aI) {
		if (aI < aF.length + 11) {
			alert("Message too long for RSA");
			return null
		}
		var aH = new Array();
		var aE = aF.length - 1;
		while (aE >= 0 && aI > 0) {
			var aG = aF.charCodeAt(aE--);
			if (aG < 128) {
				aH[--aI] = aG
			} else {
				if ((aG > 127) && (aG < 2048)) {
					aH[--aI] = (aG & 63) | 128;
					aH[--aI] = (aG >> 6) | 192
				} else {
					aH[--aI] = (aG & 63) | 128;
					aH[--aI] = ((aG >> 6) & 63) | 128;
					aH[--aI] = (aG >> 12) | 224
				}
			}
		}
		aH[--aI] = 0;
		var z = new ah();
		var t = new Array();
		while (aI > 2) {
			t[0] = 0;
			while (t[0] == 0) {
				z.nextBytes(t)
			}
			aH[--aI] = t[0]
		}
		aH[--aI] = 2;
		aH[--aI] = 0;
		return new aw(aH)
	}
	function Q() {
		this.n = null;
		this.e = 0;
		this.d = null;
		this.p = null;
		this.q = null;
		this.dmp1 = null;
		this.dmq1 = null;
		this.coeff = null
	}
	function s(z, t) {
		if (z != null && t != null && z.length > 0 && t.length > 0) {
			this.n = k(z, 16);
			this.e = parseInt(t, 16)
		} else {
			alert("Invalid RSA public key")
		}
	}
	function aa(t) {
		return t.modPowInt(this.e, this.n)
	}
	function u(aE) {
		var t = aj(aE, (this.n.bitLength() + 7) >> 3);
		if (t == null) {
			return null
		}
		var aF = this.doPublic(t);
		if (aF == null) {
			return null
		}
		var z = aF.toString(16);
		if ((z.length & 1) == 0) {
			return z
		} else {
			return "0" + z
		}
	}
	Q.prototype.doPublic = aa;
	Q.prototype.setPublic = s;
	Q.prototype.encrypt = u;
	App.RSAKey = App.RSAKey || Q
})(App);
App.getMsg = function(a, f) {
	if (a === undefined) {
		return ""
	}
	if (typeof(a) == "object") {
		a = a.code
	}
	var g = $SYSMSG[a] || $CLTMSG[a] || ("Error[" + a + "]");
	if (f) {
		var b = new Utils.Template(g);
		return b.evaluate(f)
	} else {
		return g
	}
};
App.iframe_config = {
	get_iframe_box: function() {
		return window.parent.document.getElementById("register_iframe_v4")
	},
	layer_alert: function(a) {
		window.parent.STK.ui.alert(a)
	},
	show_login_layer: function(a) {
		window.parent.STK.common.dialog.loginLayer(a)
	},
	alert_login: function(a) {
		window.parent.STK.ui.alert(a, {
			OK: function() {
				window.parent.STK.common.dialog.loginLayer("" + $CONFIG.$lang + "")
			}
		})
	},
	change_location: function(a) {
		window.parent.location.replace(a)
	}
};
function iniForm() {
	var w = $E("form_table_single");
	var m = $E("form_table");
	var S = $E("submit");
	var aj = $E("submit_single");
	var t = $E("reg_username_single");
	var l = $E("reg_username");
	var k = $E("reg_password");
	var H = $E("nickname");
	var J = $E("province");
	var z = $E("city");
	var Y = $E("door");
	var q = $E("idcard");
	var ag = $E("idtype");
	var g = $E("red_reg_username");
	var al = $E("red_reg_password");
	var y = $E("red_nickname");
	var n = $E("red_gender");
	var C = $E("red_province");
	var h = $E("red_door");
	var r = $E("red_idcard");
	var ac = $E("mobile");
	var ad = $E("red_mobile");
	var V = $E("get_code");
	var am = $E("mobilebasedoor");
	var h = $E("red_door");
	var F = $E("reg_realname");
	var af = $E("realname_box");
	var x = $E("red_reg_realname");
	var v = $E("reg_sin");
	var an = $E("sin_box");
	var U = $E("red_reg_sin");
	var ab = $E("sintype");
	var O = Core.Events.addEvent;
	var a = Core.String.trim;
	var u = App.htmlToJson;
	var ah = App.compareJson;
	var L = App.checkMiniName;
	var R = App.checkNickSp2;
	var j = App.checkEml;
	var Q = App.checkQQNum;
	var A = App.checkIdCard;
	var s = Core.Events.removeEvent;
	var f = App.ProvinceAndCity;
	var G = u(m);
	var ae = null;
	var b = function() {
		if (m.style.display == "none") {
			var ao = Core.Dom.getElementsByClass(document, "div", "nologin_pro")[0];
			if (w) {
				w.style.display = "none"
			}
			m.style.display = "";
			l.focus();
			var ap = App.iframe_config.get_iframe_box();
			if (ap) {
				ap.style.height = "446px"
			}
		}
	};
	O(t, b, "focus");
	O(aj, b, "click");
	if (z) {
		new f(J, z, (J.getAttribute("truevalue") || J.value), (z.getAttribute("truevalue") || z.value))
	}
	var Z = function(ao) {};
	var K = function(ao) {
		if (ao) {
			if (!App.Checkinfo.showError([ao.code])) {
				App.iframe_config.layer_alert($SYSMSG[ao.code])
			}
		} else {
			App.iframe_config.layer_alert($SYSMSG[ao.code])
		}
	};
	var B = function(ao, aq, ap) {
		aq.innerHTML = $SYSMSG[ap];
		aq.style.display = ""
	};
	var D = function(ao, ap) {
		ap.style.display = "none"
	};
	$SYSMSG.MR0005 = '该邮箱地址已被注册，<a onclick="App.iframe_config.show_login_layer(\'zh-cn\');" href="javascript:void(0);">登录？</a>';
	$SYSMSG.MR0004 = '你可以用此邮箱<a onclick="App.iframe_config.show_login_layer(\'zh-cn\');" href="javascript:void(0);">登录</a>哦！';
	if ($CONFIG.$lang == "zh-tw") {
		$SYSMSG.MR0005 = '該郵箱地址已被註冊，<a onclick="App.iframe_config.show_login_layer(\'zh-tw\');" href="javascript:void(0);" class="W_linka">登錄？</a>';
		$SYSMSG.MR0004 = '你可以用此郵箱<a onclick="App.iframe_config.show_login_layer(\'zh-tw\');" href="javascript:void(0);">登錄</a>哦！'
	}
	passcardOBJ_v4.menuStatus = {
		"163.com": true,
		"qq.com": true,
		"126.com": true,
		"hotmail.com": true,
		"gmail.com": true,
		"sohu.com": true,
		"yahoo.cn": true,
		"139.com": true,
		"wo.com.cn": true,
		"189.cn": true
	};
	passcardOBJ_v4.init(l, {},
	k, window);
	App.register_check.setNodes({
		password: k,
		idType: ag,
		realname_box: af,
		sin_box: an,
		sintype: ab
	});
	var p = App.register_check.checkFunction;
	App.Checkinfo = App.checkForm(App.checkFormUI_iframe);
	p.MR0004 = function(ao) {
		if (App.Checkinfo.check(["MR0001", "MR0002"])) {
			if (/^.+@(sina\.com|vip\.sina\.com|sina\.cn|2008\.sina\.com|my3ia\.sina\.com)$/i.test(ao.value)) {
				if (ae == null) {
					App.iframe_config.alert_login($CLTMSG.CC2301)
				}
				return false
			} else {
				return true
			}
		} else {
			return true
		}
	};
	p.MR0005 = function(ao) {
		ao.ajaxCheck = "1";
		if (App.Checkinfo.check(["MR0001", "MR0002", "MR0004"])) {
			var ap = {
				username: ao.value
			};
			Utils.Io.Ajax.request("/signup/ami_check.php", {
				POST: ap,
				onComplete: function(aq) {
					if (aq.code == "A00006") {
						ao.ajaxCheck = "1"
					} else {
						ao.ajaxCheck = "0"
					}
					p.MR0006(ao);
					return true
				},
				onException: function(aq) {
					return false
				},
				returnType: "json"
			});
			return true
		} else {
			return true
		}
	};
	App.Checkinfo.add("MR0001", l, g, p.MR0001);
	App.Checkinfo.add("MR0002", l, g, p.MR0002);
	App.Checkinfo.add("MR0004", l, g, p.MR0004);
	App.Checkinfo.add("MR0005", l, g, p.MR0005);
	App.Checkinfo.add("MR0006", l, g, p.MR0006);
	App.Checkinfo.add("R01008", l, g, p.R01008);
	App.Checkinfo.add("MR0014", k, al, p.MR0014);
	App.Checkinfo.add("MR0011", k, al, p.MR0011);
	App.Checkinfo.add("MR0013", k, al, p.MR0013);
	App.Checkinfo.add("M00949", k, al, p.M00949);
	App.Checkinfo.add("MR0031", H, y, p.MR0031);
	App.Checkinfo.add("MR0032", H, y, p.MR0032);
	App.Checkinfo.add("M01102", H, y, p.M01102);
	App.Checkinfo.add("MR0037", H, y, p.MR0037);
	App.Checkinfo.add("MR0035", H, y, p.MR0035);
	App.Checkinfo.add("M01129", H, y, p.M01129);
	App.Checkinfo.add("M01009", H, y, p.M01009);
	App.Checkinfo.add("MR1000", ac, ad, p.MR1000);
	App.Checkinfo.add("TR0001", ac, ad, p.TR0001);
	App.Checkinfo.add("TR0002", ac, ad, p.TR0002);
	App.Checkinfo.add("TR0006", ac, ad, p.TR0006);
	am && App.Checkinfo.add("MR0050", am, h, p.MR0050);
	App.Checkinfo.add("R01409", am, h, p.R01409);
	if (J) {
		App.Checkinfo.add("M01007", J, C, p.M01007)
	}
	if (F) {
		App.Checkinfo.add("R01106", F, x, p.R01106);
		App.Checkinfo.add("R01107", F, x, p.R01107)
	}
	if (v) {
		App.Checkinfo.add("M01134", v, U, p.M01134);
		App.Checkinfo.add("M09011", v, U, p.M09011);
		App.Checkinfo.add("R01007", v, U, p.R01007)
	}
	Y && App.Checkinfo.add("MR0050", Y, h, p.MR0050);
	Y && App.Checkinfo.add("R01409", Y, h, p.R01409);
	App.bindFormTips([{
		el: l,
		key: "MR0003",
		errorPos: g
	},
	{
		el: k,
		key: "MR0012",
		errorPos: al
	},
	{
		el: H,
		key: "MR0030",
		errorPos: y
	}]);
	App.information = {};
	App.information.submit = function() {
		if (m.style.display == "none") {
			b();
			return false
		}
		if (aa) {
			setTimeout(App.information.rumor(Z, K), 500)
		} else {
			setTimeout(function() {
				if (I && App.Checkinfo.check() && !E && (l.ajaxCheck == "1")) {
					E = true;
					S.className += " btn2loading";
					App.information.rumor(Z, K)
				}
			},
			100)
		}
		return false
	};
	var ak = false;
	App.information.rumor = function(ar, ao) {
		if (typeof ar != "function") {
			throw ("The publishRumor need a function as thrid parameter")
		}
		if (typeof ao != "function") {
			throw ("The publishRumor need a function as fourth parameter")
		}
		var aq = u(m);
		aq.token = scope.$token;
		aq.retcode = scope.doorretcode || "";
		scope.doorretcode = "";
		if (ah(aq, G)) {
			ar()
		} else {
			var ap = new App.RSAKey();
			ap.setPublic($CONFIG.$encode_key, $CONFIG.$key_plus || "10001");
			aq.sin = aq.sin ? ap.encrypt(aq.sin) : "";
			aq.realname = aq.realname ? ap.encrypt(encodeURIComponent(aq.realname)) : "";
			Utils.Io.Ajax.request("/signup/reg.php", {
				POST: aq,
				onComplete: function(at) {
					if (at.code == "A00006") {
						ar(at.data);
						oData = aq;
						if (at.data) {
							App.iframe_config.change_location(at.data)
						}
					} else {
						if (at.code == "MR0050") {
							E = false;
							App.Dom.removeClass(S, "btn2loading");
							App.forbidrefresh(function() {
								Core.Events.fireEvent(S, "click")
							},
							"/signup/reg.php");
							return
						} else {
							if (at.code == "R01409") {
								E = false;
								App.Dom.removeClass(S, "btn2loading");
								h.innerHTML = '<div class="M_notice_del"><span class="icon_del"></span><span class="txt">' + $SYSMSG[at.code] + "</span></div>";
								if (Y) {
									App.TextareaUtils.setCursor(Y);
									App.refreshCheckCode()
								}
								return
							} else {
								E = false;
								App.Dom.removeClass(S, "btn2loading");
								if (at.code == "TR0007") {
									App.sudaTrack("weibo_login_block")
								}
								ao(at)
							}
						}
					}
				},
				onException: function(at) {
					E = false;
					App.Dom.removeClass(S, "btn2loading");
					O(S, App.information.submit, "click");
					ao(at)
				},
				returnType: "json"
			})
		}
	};
	O(S, App.information.submit, "click");
	App.enterSubmit({
		parent: m,
		action: function() {
			Core.Events.fireEvent(S, "click")
		}
	});
	var I = true;
	var o = "";
	var aa = false;
	var E = false;
	var X = [];
	scope.ajaxCheckNickName = function() {
		if (App.Checkinfo.check(["MR0031", "MR0032", "M01102", "MR0037", "MR0035"])) {
			o = a(H.value);
			y.innerHTML = '<div class="loading"><i></i></div>';
			Utils.Io.Ajax.request("/signup/aj_checknick.php", {
				GET: {
					nickname: o
				},
				onComplete: function(ao) {
					try {
						if (ao.code == "A00006") {
							I = true;
							y.innerHTML = '<span class="iswhat isok"><img title="" alt="" src="http://img1.t.sinajs.cn/t35/style/images/common/transparent.gif" class="tipicon tip3"></span>';
							H.errorKey = false
						} else {
							I = false;
							App.Checkinfo.showError([ao.code]);
							H.errorKey = ao.code
						}
						aa = false
					} catch(ap) {
						I = true;
						aa = false
					}
				},
				onException: function() {
					I = true;
					aa = false
				},
				returnType: "json"
			})
		}
	};
	O(H, scope.ajaxCheckNickName, "blur");
	var P = 59;
	var N = null;
	var M = null;
	if (ac) {
		ac.removeAttribute("disabled")
	}
	var W = function() {
		V.className = "W_btn_a_disable";
		s(V, T, "click");
		N = window.setInterval(function() {
			if (P == 0) {
				ac.removeAttribute("disabled");
				V.className = "W_btn_a";
				V.innerHTML = "<span>免费获取手机短信验证码</span>";
				window.clearInterval(N);
				N = null;
				O(V, T, "click");
				P = 59
			} else {
				V.innerHTML = "<span>(" + P + $SYSMSG.TM0005 + "</span>";
				P--
			}
		},
		1000)
	};
	var ai = function() {
		var ao = Core.Dom.getElementsByClass(ad, "div", "success");
		if (ao) {
			Core.Dom.removeNode(ao[0])
		}
	};
	var T = function() {
		if (App.Checkinfo.check(["TR0001", "TR0002"]) && !N) {
			ai();
			Utils.Io.Ajax.request("/signup/aj_full_info_mobile.php", {
				returnType: "json",
				GET: {
					mobilenum: ac.value,
					sinaId: $E("sinaId").value,
					rnd: Math.random()
				},
				onComplete: function(ao) {
					try {
						if (ao.code == "A00006") {
							W();
							return
						} else {
							App.Dialog.BasicDialog.prototype.setMask = function() {
								this._mask1 = document.getElementsByTagName("BODY")[0].appendChild($C("div"))
							};
							App.alert($SYSMSG[ao.code])
						}
					} catch(ap) {
						console.log(ap)
					}
				}
			})
		} else {
			ai()
		}
	};
	O(V, T, "click");
	if (_reg_student1) {
		O(_reg_student1,
		function(ao) {
			Core.Events.stopEvent(ao);
			try {
				GB_SUDA._S_uaTrack("weibo_register", "weibo_register_student")
			} catch(ao) {}
			window.open(_reg_student1.href)
		},
		"click")
	}
	if (_reg_student2) {
		O(_reg_student2,
		function(ao) {
			Core.Events.stopEvent(ao);
			try {
				GB_SUDA._S_uaTrack("weibo_register", "weibo_register_student")
			} catch(ao) {}
			window.open(_reg_student2.href)
		},
		"click")
	}
	if (_reg_nomail) {
		O(_reg_nomail,
		function(ao) {
			Core.Events.stopEvent(ao);
			try {
				GB_SUDA._S_uaTrack("weibo_register", "weibo_register_nomail")
			} catch(ao) {}
			window.open(_reg_nomail.href)
		},
		"click")
	}
	if (_change_tommail) {
		O(_change_tommail,
		function() {
			l.value = "";
			l.focus()
		},
		"click")
	}
}
App.refreshCheckCode = function() {
	App.sudaTrack("weibo_register_refreshcode");
	var a = [];
	a.push("r=" + (new Date()).getTime());
	a.push("lang=" + scope.$lang);
	if ($E("sinaId")) {
		a.push("sinaId=" + $E("sinaId").value)
	}
	if ($E("entry")) {
		a.push("entry=" + $E("entry").value)
	}
	setTimeout(function() {
		$E("check_img").src = "/signup/pincode/pin1.php?" + a.join("&");
		$E("check_img").style.display = ""
	},
	10)
};
App.sudaTrack = function(a) {
	try {
		GB_SUDA._S_uaTrack("weibo_register", a)
	} catch(b) {}
};
$registJob("information2", iniForm);
$registJob("showCheckCode",
function() {
	$E("door") && App.refreshCheckCode();
	$E("reg_username") && Core.Events.addEvent($E("reg_username"),
	function() {
		$E("reg_username").value = $E("reg_username").value.toLowerCase()
	},
	"blur")
});
$registJob("loadLayerCss",
function() {
	var a = function(b) {
		scope.customStyleSheet = document.createElement("link");
		scope.customStyleSheet.setAttribute("type", "text/css");
		scope.customStyleSheet.setAttribute("rel", "stylesheet");
		scope.customStyleSheet.setAttribute("href", b);
		document.getElementsByTagName("head")[0].appendChild(scope.customStyleSheet)
	};
	a("http://css2.rookie.com/static/default/css/common/layer.css")
});
$registJob("init_input",
function() {
	App.Dom.getBy(function(f) {
		if (f.getAttribute("dycolor") || f.getAttribute("dycolor") == false) {
			return
		}
		var g = f.getAttribute("type");
		var b = f.getAttribute("name");
		if (/text|password/.test(g) && b != "nickname") {
			var a = f.getAttribute("clew");
			f.style.color = "#999";
			Core.Events.addEvent(f,
			function() {
				if (a) {
					if (a === f.value) {
						f.value = ""
					}
				}
				f.style.color = "#333"
			},
			"focus");
			Core.Events.addEvent(f,
			function() {
				if (a) {
					if (f.value === "") {
						f.value = a
					}
				}
				f.style.color = "#999"
			},
			"blur")
		}
	},
	"input", document)
});
scope.langList = function(a) {
	scope.switchLanguage(a.value)
};
scope.langList1 = function(a) {
	scope.switchLanguage(a.value)
};
scope.switchLanguage = function(a) {
	var b = scope.$lang === "zh" ? "zh-cn": scope.$lang;
	if (b === a) {
		return
	}
	App.confirm($CLTMSG.CD0150, {
		icon: 4,
		width: 360,
		ok: function() {
			Utils.Io.Ajax.request("/person/aj_select_lang.php", {
				onComplete: function(f) {
					if (f.code === "A00006") {
						window.location.reload(true)
					}
					if (f.code === "M00003") {
						return App.ModLogin(null, $CLTMSG.CD0058)
					}
				},
				onException: function(f) {},
				returnType: "json",
				POST: {
					uid: scope.$uid,
					lang: a
				}
			})
		},
		cancel: function() {
			$E("lang_select").value = b
		}
	})
};
function main() {
	var a = new Jobs();
	a.add("init_input");
	a.add("information2");
	a.add("showCheckCode");
	a.add("loadLayerCss");
	a.add("start_suda");
	a.start()
};