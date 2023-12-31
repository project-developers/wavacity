var amplitude = function() {
    "use strict";
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function v(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {}
              , i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))),
            i.forEach(function(e) {
                o(t, e, n[e])
            })
        }
        return t
    }
    var e, n, r, s, a, u;
    (e = {}).SET = "$set",
    e.SET_ONCE = "$setOnce",
    e.ADD = "$add",
    e.APPEND = "$append",
    e.PREPEND = "$prepend",
    e.REMOVE = "$remove",
    e.PREINSERT = "$preinsert",
    e.POSTINSERT = "$postinsert",
    e.UNSET = "$unset",
    e.CLEAR_ALL = "$clearAll",
    (r = n = n || {})[r.None = 0] = "None",
    r[r.Error = 1] = "Error",
    r[r.Warn = 2] = "Warn",
    r[r.Verbose = 3] = "Verbose",
    (a = s = s || {}).Unknown = "unknown",
    a.Skipped = "skipped",
    a.Success = "success",
    a.RateLimit = "rate_limit",
    a.PayloadTooLarge = "payload_too_large",
    a.Invalid = "invalid",
    a.Failed = "failed",
    (u = s = s || {}).fromHttpCode = function(e) {
        return 200 <= e && e < 300 ? u.Success : 429 === e ? u.RateLimit : 413 === e ? u.PayloadTooLarge : 400 <= e && e < 500 ? u.Invalid : 500 <= e ? u.Failed : u.Unknown
    }
    ;
    s.Skipped;
    function c() {
        return "object" == typeof window && void 0 !== (null === window || void 0 === window ? void 0 : window.document)
    }
    var p, l = {}, d = ((p = function() {
        return "object" == typeof process && void 0 !== (null === (e = null === process || void 0 === process ? void 0 : process.versions) || void 0 === e ? void 0 : e.node) ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : l;
        var e
    }()).__AMPLITUDE__ = p.__AMPLITUDE__ || {},
    p.__AMPLITUDE__), h = "Amplitude Logger ", f = (g.prototype.disable = function() {
        this._logLevel = 0
    }
    ,
    g.prototype.enable = function(e) {
        void 0 === e && (e = n.Warn),
        this._logLevel = e
    }
    ,
    g.prototype.log = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._logLevel < n.Verbose || global.console.log(h + "[Log]: " + e.join(" "))
    }
    ,
    g.prototype.warn = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._logLevel < n.Warn || global.console.warn(h + "[Warn]: " + e.join(" "))
    }
    ,
    g.prototype.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._logLevel < n.Error || global.console.error(h + "[Error]: " + e.join(" "))
    }
    ,
    g);
    function g() {
        this._logLevel = 0
    }
    d.logger || (d.logger = new f);
    var m = {
        DEFAULT_INSTANCE: "$default_instance",
        API_VERSION: 2,
        MAX_STRING_LENGTH: 4096,
        MAX_PROPERTY_KEYS: 1e3,
        IDENTIFY_EVENT: "$identify",
        GROUP_IDENTIFY_EVENT: "$groupidentify",
        LAST_EVENT_ID: "amplitude_lastEventId",
        LAST_EVENT_TIME: "amplitude_lastEventTime",
        LAST_IDENTIFY_ID: "amplitude_lastIdentifyId",
        LAST_SEQUENCE_NUMBER: "amplitude_lastSequenceNumber",
        SESSION_ID: "amplitude_sessionId",
        DEVICE_ID: "amplitude_deviceId",
        OPT_OUT: "amplitude_optOut",
        USER_ID: "amplitude_userId",
        COOKIE_TEST_PREFIX: "amp_cookie_test",
        COOKIE_PREFIX: "amp",
        STORAGE_DEFAULT: "",
        STORAGE_COOKIES: "cookies",
        STORAGE_NONE: "none",
        STORAGE_LOCAL: "localStorage",
        STORAGE_SESSION: "sessionStorage",
        REVENUE_EVENT: "revenue_amount",
        REVENUE_PRODUCT_ID: "$productId",
        REVENUE_QUANTITY: "$quantity",
        REVENUE_PRICE: "$price",
        REVENUE_REVENUE_TYPE: "$revenueType",
        AMP_DEVICE_ID_PARAM: "amp_device_id",
        REFERRER: "referrer",
        UTM_SOURCE: "utm_source",
        UTM_MEDIUM: "utm_medium",
        UTM_CAMPAIGN: "utm_campaign",
        UTM_TERM: "utm_term",
        UTM_CONTENT: "utm_content",
        ATTRIBUTION_EVENT: "[Amplitude] Attribution Captured"
    }
      , y = function(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            var i = e.charCodeAt(n);
            i < 128 ? t += String.fromCharCode(i) : (127 < i && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) : (t += String.fromCharCode(i >> 12 | 224),
            t += String.fromCharCode(i >> 6 & 63 | 128)),
            t += String.fromCharCode(63 & i | 128))
        }
        return t
    }
      , _ = function(e) {
        for (var t, n, i = "", o = 0, r = 0; o < e.length; )
            (t = e.charCodeAt(o)) < 128 ? (i += String.fromCharCode(t),
            o++) : 191 < t && t < 224 ? (r = e.charCodeAt(o + 1),
            i += String.fromCharCode((31 & t) << 6 | 63 & r),
            o += 2) : (r = e.charCodeAt(o + 1),
            n = e.charCodeAt(o + 2),
            i += String.fromCharCode((15 & t) << 12 | (63 & r) << 6 | 63 & n),
            o += 3);
        return i
    }
      , w = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(e) {
            try {
                if (window.btoa && window.atob)
                    return window.btoa(unescape(encodeURIComponent(e)))
            } catch (e) {}
            return w._encode(e)
        },
        _encode: function(e) {
            var t, n, i, o, r, s, a, u = "", c = 0;
            for (e = y(e); c < e.length; )
                o = (t = e.charCodeAt(c++)) >> 2,
                r = (3 & t) << 4 | (n = e.charCodeAt(c++)) >> 4,
                s = (15 & n) << 2 | (i = e.charCodeAt(c++)) >> 6,
                a = 63 & i,
                isNaN(n) ? s = a = 64 : isNaN(i) && (a = 64),
                u = u + w._keyStr.charAt(o) + w._keyStr.charAt(r) + w._keyStr.charAt(s) + w._keyStr.charAt(a);
            return u
        },
        decode: function(e) {
            try {
                if (window.btoa && window.atob)
                    return decodeURIComponent(escape(window.atob(e)))
            } catch (e) {}
            return w._decode(e)
        },
        _decode: function(e) {
            var t, n, i, o, r, s, a = "", u = 0;
            for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); u < e.length; )
                t = w._keyStr.indexOf(e.charAt(u++)) << 2 | (o = w._keyStr.indexOf(e.charAt(u++))) >> 4,
                n = (15 & o) << 4 | (r = w._keyStr.indexOf(e.charAt(u++))) >> 2,
                i = (3 & r) << 6 | (s = w._keyStr.indexOf(e.charAt(u++))),
                a += String.fromCharCode(t),
                64 !== r && (a += String.fromCharCode(n)),
                64 !== s && (a += String.fromCharCode(i));
            return a = _(a)
        }
    }
      , b = Object.prototype.toString;
    function E(e) {
        switch (b.call(e)) {
        case "[object Date]":
            return "date";
        case "[object RegExp]":
            return "regexp";
        case "[object Arguments]":
            return "arguments";
        case "[object Array]":
            return "array";
        case "[object Error]":
            return "error"
        }
        return null === e ? "null" : void 0 === e ? "undefined" : e != e ? "nan" : e && 1 === e.nodeType ? "element" : "undefined" != typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e) ? "buffer" : t(e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e))
    }
    function I(e) {
        var t = E(e);
        if ("object" !== t)
            return U.error("Error: invalid properties format. Expecting Javascript object, received " + t + ", ignoring"),
            {};
        if (Object.keys(e).length > m.MAX_PROPERTY_KEYS)
            return U.error("Error: too many properties (more than 1000), ignoring"),
            {};
        var n, i, o, r = {};
        for (var s in e) {
            Object.prototype.hasOwnProperty.call(e, s) && ("string" !== (i = E(n = s)) && (n = String(n),
            U.warn("WARNING: Non-string property key, received type " + i + ', coercing to string "' + n + '"')),
            null !== (o = M(n, e[s])) && (r[n] = o))
        }
        return r
    }
    function S() {
        for (var e = "", t = 0; t < 22; ++t)
            e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Math.floor(64 * Math.random()));
        return e
    }
    function O(e) {
        try {
            for (var t = document.cookie.split(";"), n = null, i = 0; i < t.length; i++) {
                for (var o = t[i]; " " === o.charAt(0); )
                    o = o.substring(1, o.length);
                if (0 === o.indexOf(e)) {
                    n = o.substring(e.length, o.length);
                    break
                }
            }
            return n
        } catch (e) {
            return null
        }
    }
    function N(e, t, n) {
        var i, o = null !== t ? n.expirationDays : -1;
        o && ((i = new Date).setTime(i.getTime() + 24 * o * 60 * 60 * 1e3),
        o = i);
        var r = e + "=" + t;
        o && (r += "; expires=" + o.toUTCString()),
        r += "; path=/",
        n.domain && (r += "; domain=" + n.domain),
        n.secure && (r += "; Secure"),
        n.sameSite && (r += "; SameSite=" + n.sameSite),
        document.cookie = r
    }
    function T(e) {
        var t = document.createElement("a");
        return t.href = e,
        t.hostname || location.hostname
    }
    function A(e) {
        var t = "";
        return Q.domain && (t = "." === Q.domain.charAt(0) ? Q.domain.substring(1) : Q.domain),
        e + t
    }
    var k, R, C, x = {
        DISABLE: 0,
        ERROR: 1,
        WARN: 2,
        INFO: 3
    }, P = x.WARN, U = {
        error: function(e) {
            x.ERROR <= P && D(e)
        },
        warn: function(e) {
            x.WARN <= P && D(e)
        },
        info: function(e) {
            x.INFO <= P && D(e)
        }
    }, D = function(e) {
        try {
            console.log("[Amplitude] " + e)
        } catch (e) {}
    }, j = function(e) {
        return "string" === E(e) && e.length > m.MAX_STRING_LENGTH ? e.substring(0, m.MAX_STRING_LENGTH) : e
    }, q = ["nan", "function", "arguments", "regexp", "element"], M = function e(t, n) {
        var i = E(n);
        if (-1 !== q.indexOf(i))
            U.warn('WARNING: Property key "' + t + '" with invalid value type ' + i + ", ignoring"),
            n = null;
        else if ("undefined" === i)
            n = null;
        else if ("error" === i)
            n = String(n),
            U.warn('WARNING: Property key "' + t + '" with value type error, coercing to ' + n);
        else if ("array" === i) {
            for (var o = [], r = 0; r < n.length; r++) {
                var s = n[r]
                  , a = E(s);
                "array" !== a ? "object" === a ? o.push(I(s)) : o.push(e(t, s)) : U.warn("WARNING: Cannot have " + a + " nested in an array property value, skipping")
            }
            n = o
        } else
            "object" === i && (n = I(n));
        return n
    }, V = function(e, t) {
        var n = E(t);
        if ("string" === n)
            return t;
        if ("date" === n || "number" === n || "boolean" === n)
            return t = String(t),
            U.warn("WARNING: Non-string groupName, received type " + n + ', coercing to string "' + t + '"'),
            t;
        if ("array" === n) {
            for (var i = [], o = 0; o < t.length; o++) {
                var r = t[o]
                  , s = E(r);
                "array" !== s && "object" !== s ? "string" === s ? i.push(r) : "date" !== s && "number" !== s && "boolean" !== s || (r = String(r),
                U.warn("WARNING: Non-string groupName, received type " + s + ', coercing to string "' + r + '"'),
                i.push(r)) : U.warn("WARNING: Skipping nested " + s + " in array groupName")
            }
            return i
        }
        U.warn("WARNING: Non-string groupName, received type " + n + ". Please use strings or array of strings for groupName")
    }, L = function(e) {
        Object.prototype.hasOwnProperty.call(x, e) && (P = x[e])
    }, G = U, F = function(e) {
        return !e || 0 === e.length
    }, K = function(e, t) {
        e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
        return null === n ? void 0 : decodeURIComponent(n[1].replace(/\+/g, " "))
    }, z = function e(t) {
        if ("array" === E(t))
            for (var n = 0; n < t.length; n++)
                t[n] = e(t[n]);
        else if ("object" === E(t))
            for (var i in t)
                i in t && (t[i] = e(t[i]));
        else
            t = j(t);
        return t
    }, B = function(e) {
        var t = E(e);
        if ("object" !== t)
            return U.error("Error: invalid groups format. Expecting Javascript object, received " + t + ", ignoring"),
            {};
        var n, i, o, r = {};
        for (var s in e) {
            Object.prototype.hasOwnProperty.call(e, s) && ("string" !== (i = E(n = s)) && (n = String(n),
            U.warn("WARNING: Non-string groupType, received type " + i + ', coercing to string "' + n + '"')),
            null !== (o = V(n, e[s])) && (r[n] = o))
        }
        return r
    }, W = function(e, t, n) {
        return E(e) === n || (U.error("Invalid " + t + " input type. Expected " + n + " but received " + E(e)),
        !1)
    }, $ = I, X = function() {
        return window.location
    }, Y = {
        set: N,
        get: O,
        areCookiesEnabled: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {}
              , n = String(new Date);
            try {
                var i = m.COOKIE_TEST_PREFIX + S();
                N(i, n, t);
                var o = O(i + "=") === n;
                return N(i, null, t),
                o
            } catch (e) {}
            return !1
        }
    }, J = function(e) {
        for (var t = T(e).split("."), n = [], i = "_tldtest_" + S(), o = t.length - 2; 0 <= o; --o)
            n.push(t.slice(o).join("."));
        for (var r = 0; r < n.length; ++r) {
            var s = n[r]
              , a = {
                domain: "." + s
            };
            if (Y.set(i, 1, a),
            Y.get(i))
                return Y.set(i, null, a),
                s
        }
        return ""
    }, Q = {
        expirationDays: void 0,
        domain: void 0
    }, H = function(e) {
        var t = A(e) + "="
          , n = Y.get(t);
        try {
            if (n)
                return JSON.parse(w.decode(n))
        } catch (e) {
            return null
        }
        return null
    }, Z = function(e, t) {
        try {
            return Y.set(A(e), w.encode(JSON.stringify(t)), Q),
            !0
        } catch (e) {
            return !1
        }
    }, ee = function(e) {
        try {
            return Y.set(A(e), null, Q),
            !0
        } catch (e) {
            return !1
        }
    }, te = {
        reset: function() {
            Q = {
                expirationDays: void 0,
                domain: void 0
            }
        },
        options: function(e) {
            if (0 === arguments.length)
                return Q;
            e = e || {},
            Q.expirationDays = e.expirationDays,
            Q.secure = e.secure,
            Q.sameSite = e.sameSite;
            var t = F(e.domain) ? "." + J(X().href) : e.domain
              , n = Math.random();
            Q.domain = t,
            Z("amplitude_test", n);
            var i = H("amplitude_test");
            return i && i === n || (t = null),
            ee("amplitude_test"),
            Q.domain = t,
            Q
        },
        get: H,
        set: Z,
        remove: ee,
        setRaw: function(e, t) {
            try {
                return Y.set(A(e), t, Q),
                !0
            } catch (e) {
                return !1
            }
        },
        getRaw: function(e) {
            var t = A(e) + "=";
            return Y.get(t)
        }
    };
    if (function() {
        var e, t = new Date;
        try {
            return window.localStorage.setItem(t, t),
            e = window.localStorage.getItem(t) === String(t),
            window.localStorage.removeItem(t),
            e
        } catch (e) {}
        return !1
    }())
        k = window.localStorage;
    else if (window.globalStorage)
        try {
            k = window.globalStorage[window.location.hostname]
        } catch (e) {}
    else {
        "undefined" != typeof document && (R = document.createElement("div"),
        C = "localStorage",
        R.style.display = "none",
        document.getElementsByTagName("head")[0].appendChild(R),
        R.addBehavior && (R.addBehavior("#default#userdata"),
        k = {
            length: 0,
            setItem: function(e, t) {
                R.load(C),
                R.getAttribute(e) || this.length++,
                R.setAttribute(e, t),
                R.save(C)
            },
            getItem: function(e) {
                return R.load(C),
                R.getAttribute(e)
            },
            removeItem: function(e) {
                R.load(C),
                R.getAttribute(e) && this.length--,
                R.removeAttribute(e),
                R.save(C)
            },
            clear: function() {
                R.load(C);
                for (var e, t = 0; e = R.XMLDocument.documentElement.attributes[t++]; )
                    R.removeAttribute(e.name);
                R.save(C),
                this.length = 0
            },
            key: function(e) {
                return R.load(C),
                R.XMLDocument.documentElement.attributes[e]
            }
        },
        R.load(C),
        k.length = R.XMLDocument.documentElement.attributes.length))
    }
    function ne() {
        this.storage = null
    }
    var ie, oe = k = k || {
        length: 0,
        setItem: function() {},
        getItem: function() {},
        removeItem: function() {},
        clear: function() {},
        key: function() {}
    };
    ne.prototype.getStorage = function() {
        return null !== this.storage || (Y.areCookiesEnabled() ? this.storage = te : (n = "amp_cookiestore_",
        this.storage = {
            _options: {
                expirationDays: void 0,
                domain: void 0,
                secure: !1
            },
            reset: function() {
                this._options = {
                    expirationDays: void 0,
                    domain: void 0,
                    secure: !1
                }
            },
            options: function(e) {
                return 0 === arguments.length ? this._options : (e = e || {},
                this._options.expirationDays = e.expirationDays || this._options.expirationDays,
                this._options.domain = e.domain || this._options.domain || window && window.location && window.location.hostname,
                this._options.secure = e.secure || !1)
            },
            get: function(e) {
                try {
                    return JSON.parse(oe.getItem(n + e))
                } catch (e) {}
                return null
            },
            set: function(e, t) {
                try {
                    return oe.setItem(n + e, JSON.stringify(t)),
                    !0
                } catch (e) {}
                return !1
            },
            remove: function(e) {
                try {
                    oe.removeItem(n + e)
                } catch (e) {
                    return !1
                }
            }
        })),
        this.storage;
        var n
    }
    ;
    function re(e, t) {
        function n(e, t, n, i) {
            return K(e, t) || K(n, i)
        }
        function i(e, t) {
            F(t) || (p[e] = t)
        }
        var o = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : ""
          , r = n(m.UTM_SOURCE, t, "utmcsr", o)
          , s = n(m.UTM_MEDIUM, t, "utmcmd", o)
          , a = n(m.UTM_CAMPAIGN, t, "utmccn", o)
          , u = n(m.UTM_TERM, t, "utmctr", o)
          , c = n(m.UTM_CONTENT, t, "utmcct", o)
          , p = {};
        return i(m.UTM_SOURCE, r),
        i(m.UTM_MEDIUM, s),
        i(m.UTM_CAMPAIGN, a),
        i(m.UTM_TERM, u),
        i(m.UTM_CONTENT, c),
        p
    }
    function se() {
        this.userPropertiesOperations = {},
        this.properties = []
    }
    var ae = (o(ie = {}, m.STORAGE_COOKIES, !0),
    o(ie, m.STORAGE_NONE, !0),
    o(ie, m.STORAGE_LOCAL, !0),
    o(ie, m.STORAGE_SESSION, !0),
    ie)
      , ue = function() {
        function p(e) {
            var t = e.storageKey
              , n = e.disableCookies
              , i = e.domain
              , o = e.secure
              , r = e.sameSite
              , s = e.expirationDays
              , a = e.storage;
            !function(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, p),
            this.storageKey = t,
            this.domain = i,
            this.secure = o,
            this.sameSite = r,
            this.expirationDays = s,
            this.cookieDomain = "";
            var u, c = J(X().href);
            this.cookieDomain = i || (c ? "." + c : null),
            ae[a] ? this.storage = a : (u = n || !Y.areCookiesEnabled({
                domain: this.cookieDomain,
                secure: this.secure,
                sameSite: this.sameSite,
                expirationDays: this.expirationDays
            }),
            this.storage = u ? m.STORAGE_LOCAL : m.STORAGE_COOKIES)
        }
        var e, t, n;
        return e = p,
        (t = [{
            key: "getCookieStorageKey",
            value: function() {
                if (!this.domain)
                    return this.storageKey;
                var e = "." === this.domain.charAt(0) ? this.domain.substring(1) : this.domain;
                return "".concat(this.storageKey).concat(e ? "_".concat(e) : "")
            }
        }, {
            key: "save",
            value: function(e) {
                var t = e.deviceId
                  , n = e.userId
                  , i = e.optOut
                  , o = e.sessionId
                  , r = e.lastEventTime
                  , s = e.eventId
                  , a = e.identifyId
                  , u = e.sequenceNumber;
                if (this.storage !== m.STORAGE_NONE) {
                    var c = [t, w.encode(n || ""), i ? "1" : "", o ? o.toString(32) : "0", r ? r.toString(32) : "0", s ? s.toString(32) : "0", a ? a.toString(32) : "0", u ? u.toString(32) : "0"].join(".");
                    switch (this.storage) {
                    case m.STORAGE_SESSION:
                        window.sessionStorage && window.sessionStorage.setItem(this.storageKey, c);
                        break;
                    case m.STORAGE_LOCAL:
                        oe.setItem(this.storageKey, c);
                        break;
                    case m.STORAGE_COOKIES:
                        Y.set(this.getCookieStorageKey(), c, {
                            domain: this.cookieDomain,
                            secure: this.secure,
                            sameSite: this.sameSite,
                            expirationDays: this.expirationDays
                        })
                    }
                }
            }
        }, {
            key: "load",
            value: function() {
                var e;
                if (this.storage === m.STORAGE_COOKIES && (e = Y.get(this.getCookieStorageKey() + "=")),
                !(e = e || oe.getItem(this.storageKey)))
                    try {
                        e = window.sessionStorage && window.sessionStorage.getItem(this.storageKey)
                    } catch (e) {
                        G.info('window.sessionStorage unavailable. Reason: "'.concat(e, '"'))
                    }
                if (!e)
                    return null;
                var t = e.split(".")
                  , n = null;
                if (t[1])
                    try {
                        n = w.decode(t[1])
                    } catch (e) {
                        n = null
                    }
                return {
                    deviceId: t[0],
                    userId: n,
                    optOut: "1" === t[2],
                    sessionId: parseInt(t[3], 32),
                    lastEventTime: parseInt(t[4], 32),
                    eventId: parseInt(t[5], 32),
                    identifyId: parseInt(t[6], 32),
                    sequenceNumber: parseInt(t[7], 32)
                }
            }
        }]) && i(e.prototype, t),
        n && i(e, n),
        p
    }()
      , ce = "$clearAll";
    se.prototype.add = function(e, t) {
        return "number" === E(t) || "string" === E(t) ? this._addOperation("$add", e, t) : G.error("Unsupported type for value: " + E(t) + ", expecting number or string"),
        this
    }
    ,
    se.prototype.append = function(e, t) {
        return this._addOperation("$append", e, t),
        this
    }
    ,
    se.prototype.clearAll = function() {
        return 0 < Object.keys(this.userPropertiesOperations).length ? Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, ce) || G.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll") : this.userPropertiesOperations[ce] = "-",
        this
    }
    ,
    se.prototype.prepend = function(e, t) {
        return this._addOperation("$prepend", e, t),
        this
    }
    ,
    se.prototype.set = function(e, t) {
        return this._addOperation("$set", e, t),
        this
    }
    ,
    se.prototype.setOnce = function(e, t) {
        return this._addOperation("$setOnce", e, t),
        this
    }
    ,
    se.prototype.unset = function(e) {
        return this._addOperation("$unset", e, "-"),
        this
    }
    ,
    se.prototype.preInsert = function(e, t) {
        return this._addOperation("$preInsert", e, t),
        this
    }
    ,
    se.prototype.postInsert = function(e, t) {
        return this._addOperation("$postInsert", e, t),
        this
    }
    ,
    se.prototype.remove = function(e, t) {
        return this._addOperation("$remove", e, t),
        this
    }
    ,
    se.prototype._addOperation = function(e, t, n) {
        Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, ce) ? G.error("This identify already contains a $clearAll operation, skipping operation " + e) : -1 === this.properties.indexOf(t) ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, e) || (this.userPropertiesOperations[e] = {}),
        this.userPropertiesOperations[e][t] = n,
        this.properties.push(t)) : G.error('User property "' + t + '" already used in this identify, skipping operation ' + e)
    }
    ;
    var pe = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function le(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }
    var de = le(function(e) {
        function l(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }
        function a(e, t, n, i, o, r) {
            return l((s = l(l(t, e), l(i, r))) << (a = o) | s >>> 32 - a, n);
            var s, a
        }
        function d(e, t, n, i, o, r, s) {
            return a(t & n | ~t & i, e, t, o, r, s)
        }
        function h(e, t, n, i, o, r, s) {
            return a(t & i | n & ~i, e, t, o, r, s)
        }
        function f(e, t, n, i, o, r, s) {
            return a(t ^ n ^ i, e, t, o, r, s)
        }
        function g(e, t, n, i, o, r, s) {
            return a(n ^ (t | ~i), e, t, o, r, s)
        }
        function u(e, t) {
            var n, i, o, r;
            e[t >> 5] |= 128 << t % 32,
            e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var s = 1732584193, a = -271733879, u = -1732584194, c = 271733878, p = 0; p < e.length; p += 16)
                s = d(n = s, i = a, o = u, r = c, e[p], 7, -680876936),
                c = d(c, s, a, u, e[p + 1], 12, -389564586),
                u = d(u, c, s, a, e[p + 2], 17, 606105819),
                a = d(a, u, c, s, e[p + 3], 22, -1044525330),
                s = d(s, a, u, c, e[p + 4], 7, -176418897),
                c = d(c, s, a, u, e[p + 5], 12, 1200080426),
                u = d(u, c, s, a, e[p + 6], 17, -1473231341),
                a = d(a, u, c, s, e[p + 7], 22, -45705983),
                s = d(s, a, u, c, e[p + 8], 7, 1770035416),
                c = d(c, s, a, u, e[p + 9], 12, -1958414417),
                u = d(u, c, s, a, e[p + 10], 17, -42063),
                a = d(a, u, c, s, e[p + 11], 22, -1990404162),
                s = d(s, a, u, c, e[p + 12], 7, 1804603682),
                c = d(c, s, a, u, e[p + 13], 12, -40341101),
                u = d(u, c, s, a, e[p + 14], 17, -1502002290),
                s = h(s, a = d(a, u, c, s, e[p + 15], 22, 1236535329), u, c, e[p + 1], 5, -165796510),
                c = h(c, s, a, u, e[p + 6], 9, -1069501632),
                u = h(u, c, s, a, e[p + 11], 14, 643717713),
                a = h(a, u, c, s, e[p], 20, -373897302),
                s = h(s, a, u, c, e[p + 5], 5, -701558691),
                c = h(c, s, a, u, e[p + 10], 9, 38016083),
                u = h(u, c, s, a, e[p + 15], 14, -660478335),
                a = h(a, u, c, s, e[p + 4], 20, -405537848),
                s = h(s, a, u, c, e[p + 9], 5, 568446438),
                c = h(c, s, a, u, e[p + 14], 9, -1019803690),
                u = h(u, c, s, a, e[p + 3], 14, -187363961),
                a = h(a, u, c, s, e[p + 8], 20, 1163531501),
                s = h(s, a, u, c, e[p + 13], 5, -1444681467),
                c = h(c, s, a, u, e[p + 2], 9, -51403784),
                u = h(u, c, s, a, e[p + 7], 14, 1735328473),
                s = f(s, a = h(a, u, c, s, e[p + 12], 20, -1926607734), u, c, e[p + 5], 4, -378558),
                c = f(c, s, a, u, e[p + 8], 11, -2022574463),
                u = f(u, c, s, a, e[p + 11], 16, 1839030562),
                a = f(a, u, c, s, e[p + 14], 23, -35309556),
                s = f(s, a, u, c, e[p + 1], 4, -1530992060),
                c = f(c, s, a, u, e[p + 4], 11, 1272893353),
                u = f(u, c, s, a, e[p + 7], 16, -155497632),
                a = f(a, u, c, s, e[p + 10], 23, -1094730640),
                s = f(s, a, u, c, e[p + 13], 4, 681279174),
                c = f(c, s, a, u, e[p], 11, -358537222),
                u = f(u, c, s, a, e[p + 3], 16, -722521979),
                a = f(a, u, c, s, e[p + 6], 23, 76029189),
                s = f(s, a, u, c, e[p + 9], 4, -640364487),
                c = f(c, s, a, u, e[p + 12], 11, -421815835),
                u = f(u, c, s, a, e[p + 15], 16, 530742520),
                s = g(s, a = f(a, u, c, s, e[p + 2], 23, -995338651), u, c, e[p], 6, -198630844),
                c = g(c, s, a, u, e[p + 7], 10, 1126891415),
                u = g(u, c, s, a, e[p + 14], 15, -1416354905),
                a = g(a, u, c, s, e[p + 5], 21, -57434055),
                s = g(s, a, u, c, e[p + 12], 6, 1700485571),
                c = g(c, s, a, u, e[p + 3], 10, -1894986606),
                u = g(u, c, s, a, e[p + 10], 15, -1051523),
                a = g(a, u, c, s, e[p + 1], 21, -2054922799),
                s = g(s, a, u, c, e[p + 8], 6, 1873313359),
                c = g(c, s, a, u, e[p + 15], 10, -30611744),
                u = g(u, c, s, a, e[p + 6], 15, -1560198380),
                a = g(a, u, c, s, e[p + 13], 21, 1309151649),
                s = g(s, a, u, c, e[p + 4], 6, -145523070),
                c = g(c, s, a, u, e[p + 11], 10, -1120210379),
                u = g(u, c, s, a, e[p + 2], 15, 718787259),
                a = g(a, u, c, s, e[p + 9], 21, -343485551),
                s = l(s, n),
                a = l(a, i),
                u = l(u, o),
                c = l(c, r);
            return [s, a, u, c]
        }
        function c(e) {
            for (var t = "", n = 32 * e.length, i = 0; i < n; i += 8)
                t += String.fromCharCode(e[i >> 5] >>> i % 32 & 255);
            return t
        }
        function p(e) {
            var t = [];
            for (t[(e.length >> 2) - 1] = void 0,
            i = 0; i < t.length; i += 1)
                t[i] = 0;
            for (var n = 8 * e.length, i = 0; i < n; i += 8)
                t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;
            return t
        }
        function i(e) {
            for (var t, n = "0123456789abcdef", i = "", o = 0; o < e.length; o += 1)
                t = e.charCodeAt(o),
                i += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
            return i
        }
        function n(e) {
            return unescape(encodeURIComponent(e))
        }
        function o(e) {
            return c(u(p(t = n(e)), 8 * t.length));
            var t
        }
        function r(e, t) {
            return function(e, t) {
                var n, i, o = p(e), r = [], s = [];
                for (r[15] = s[15] = void 0,
                16 < o.length && (o = u(o, 8 * e.length)),
                n = 0; n < 16; n += 1)
                    r[n] = 909522486 ^ o[n],
                    s[n] = 1549556828 ^ o[n];
                return i = u(r.concat(p(t)), 512 + 8 * t.length),
                c(u(s.concat(i), 640))
            }(n(e), n(t))
        }
        function t(e, t, n) {
            return t ? n ? r(t, e) : i(r(t, e)) : n ? o(e) : i(o(e))
        }
        var s;
        s = pe,
        e.exports ? e.exports = t : s.md5 = t
    })
      , he = function(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
      , fe = Object.getOwnPropertySymbols
      , ge = Object.prototype.hasOwnProperty
      , ve = Object.prototype.propertyIsEnumerable;
    var me = function() {
        try {
            if (!Object.assign)
                return;
            var e = new String("abc");
            if (e[5] = "de",
            "5" === Object.getOwnPropertyNames(e)[0])
                return;
            for (var t = {}, n = 0; n < 10; n++)
                t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                return t[e]
            }).join(""))
                return;
            var i = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                i[e] = e
            }),
            "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, i)).join("") ? void 0 : 1
        } catch (e) {
            return
        }
    }() ? Object.assign : function(e, t) {
        for (var n, i, o = function(e) {
            if (null == e)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }(e), r = 1; r < arguments.length; r++) {
            for (var s in n = Object(arguments[r]))
                ge.call(n, s) && (o[s] = n[s]);
            if (fe) {
                i = fe(n);
                for (var a = 0; a < i.length; a++)
                    ve.call(n, i[a]) && (o[i[a]] = n[i[a]])
            }
        }
        return o
    }
      , ye = "%[a-f0-9]{2}";
    new RegExp(ye,"gi"),
    new RegExp("(" + ye + ")+","gi");
    function _e(e, t) {
        return t.encode ? (t.strict ? he : encodeURIComponent)(e) : e
    }
    function we(e, t) {
        this.url = e,
        this.data = t || {}
    }
    var be = function(i, o) {
        !1 === (o = me({
            encode: !0,
            strict: !0,
            arrayFormat: "none"
        }, o)).sort && (o.sort = function() {}
        );
        var r = function(i) {
            switch (i.arrayFormat) {
            case "index":
                return function(e, t, n) {
                    return null === t ? [_e(e, i), "[", n, "]"].join("") : [_e(e, i), "[", _e(n, i), "]=", _e(t, i)].join("")
                }
                ;
            case "bracket":
                return function(e, t) {
                    return null === t ? _e(e, i) : [_e(e, i), "[]=", _e(t, i)].join("")
                }
                ;
            default:
                return function(e, t) {
                    return null === t ? _e(e, i) : [_e(e, i), "=", _e(t, i)].join("")
                }
            }
        }(o);
        return i ? Object.keys(i).sort(o.sort).map(function(t) {
            var e = i[t];
            if (void 0 === e)
                return "";
            if (null === e)
                return _e(t, o);
            if (Array.isArray(e)) {
                var n = [];
                return e.slice().forEach(function(e) {
                    void 0 !== e && n.push(r(t, e, n.length))
                }),
                n.join("&")
            }
            return _e(t, o) + "=" + _e(e, o)
        }).filter(function(e) {
            return 0 < e.length
        }).join("&") : ""
    };
    we.prototype.send = function(e) {
        var t, n;
        !!window.XDomainRequest ? ((t = new window.XDomainRequest).open("POST", this.url, !0),
        t.onload = function() {
            e(200, t.responseText)
        }
        ,
        t.onerror = function() {
            "Request Entity Too Large" === t.responseText ? e(413, t.responseText) : e(500, t.responseText)
        }
        ,
        t.ontimeout = function() {}
        ,
        t.onprogress = function() {}
        ,
        t.send(be(this.data))) : ((n = new XMLHttpRequest).open("POST", this.url, !0),
        n.onreadystatechange = function() {
            4 === n.readyState && e(n.status, n.responseText)
        }
        ,
        n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
        n.send(be(this.data)))
    }
    ;
    function Ee() {
        this._price = null,
        this._productId = null,
        this._quantity = 1,
        this._revenueType = null,
        this._properties = null
    }
    Ee.prototype.setProductId = function(e) {
        return "string" !== E(e) ? G.error("Unsupported type for productId: " + E(e) + ", expecting string") : F(e) ? G.error("Invalid empty productId") : this._productId = e,
        this
    }
    ,
    Ee.prototype.setQuantity = function(e) {
        return "number" !== E(e) ? G.error("Unsupported type for quantity: " + E(e) + ", expecting number") : this._quantity = parseInt(e),
        this
    }
    ,
    Ee.prototype.setPrice = function(e) {
        return "number" !== E(e) ? G.error("Unsupported type for price: " + E(e) + ", expecting number") : this._price = e,
        this
    }
    ,
    Ee.prototype.setRevenueType = function(e) {
        return "string" !== E(e) ? G.error("Unsupported type for revenueType: " + E(e) + ", expecting string") : this._revenueType = e,
        this
    }
    ,
    Ee.prototype.setEventProperties = function(e) {
        return "object" !== E(e) ? G.error("Unsupported type for eventProperties: " + E(e) + ", expecting object") : this._properties = $(e),
        this
    }
    ,
    Ee.prototype._isValidRevenue = function() {
        return "number" === E(this._price) || (G.error("Invalid revenue, need to set price field"),
        !1)
    }
    ,
    Ee.prototype._toJSONObject = function() {
        var e = "object" === E(this._properties) ? this._properties : {};
        return null !== this._productId && (e[m.REVENUE_PRODUCT_ID] = this._productId),
        null !== this._quantity && (e[m.REVENUE_QUANTITY] = this._quantity),
        null !== this._price && (e[m.REVENUE_PRICE] = this._price),
        null !== this._revenueType && (e[m.REVENUE_REVENUE_TYPE] = this._revenueType),
        e
    }
    ;
    function Ie(e) {
        c() || G.warn("amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"),
        this._instanceName = F(e) ? m.DEFAULT_INSTANCE : e.toLowerCase(),
        this._unsentEvents = [],
        this._unsentIdentifys = [],
        this._ua = new Se(navigator.userAgent).getResult(),
        this.options = v({}, Ne, {
            trackingOptions: v({}, Ne.trackingOptions)
        }),
        this.cookieStorage = (new ne).getStorage(),
        this._q = [],
        this._sending = !1,
        this._updateScheduled = !1,
        this._onInit = [],
        this._eventId = 0,
        this._identifyId = 0,
        this._lastEventTime = null,
        this._newSession = !1,
        this._sequenceNumber = 0,
        this._sessionId = null,
        this._isInitialized = !1,
        this._userAgent = navigator && navigator.userAgent || null
    }
    var Se = le(function(b, E) {
        !function(o, l) {
            var d = "function"
              , e = "model"
              , t = "name"
              , n = "type"
              , i = "vendor"
              , r = "version"
              , s = "architecture"
              , a = "console"
              , u = "mobile"
              , c = "tablet"
              , p = "smarttv"
              , h = "wearable"
              , f = {
                extend: function(e, t) {
                    var n = {};
                    for (var i in e)
                        t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                    return n
                },
                has: function(e, t) {
                    return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                },
                lowerize: function(e) {
                    return e.toLowerCase()
                },
                major: function(e) {
                    return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : l
                },
                trim: function(e) {
                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            }
              , g = {
                rgx: function(e, t) {
                    for (var n, i, o, r, s, a = 0; a < t.length && !r; ) {
                        for (var u = t[a], c = t[a + 1], p = n = 0; p < u.length && !r; )
                            if (r = u[p++].exec(e))
                                for (i = 0; i < c.length; i++)
                                    s = r[++n],
                                    "object" == typeof (o = c[i]) && 0 < o.length ? 2 == o.length ? typeof o[1] == d ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 == o.length ? typeof o[1] != d || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : l : this[o[0]] = s ? o[1].call(this, s, o[2]) : l : 4 == o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : l) : this[o] = s || l;
                        a += 2
                    }
                },
                str: function(e, t) {
                    for (var n in t)
                        if ("object" == typeof t[n] && 0 < t[n].length) {
                            for (var i = 0; i < t[n].length; i++)
                                if (f.has(t[n][i], e))
                                    return "?" === n ? l : n
                        } else if (f.has(t[n], e))
                            return "?" === n ? l : n;
                    return e
                }
            }
              , v = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            1.2: "/1",
                            1.3: "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: {
                    amazon: {
                        model: {
                            "Fire Phone": ["SD", "KF"]
                        }
                    },
                    sprint: {
                        model: {
                            "Evo Shift 4G": "7373KT"
                        },
                        vendor: {
                            HTC: "APA",
                            Sprint: "Sprint"
                        }
                    }
                },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        }
                    }
                }
            }
              , m = {
                browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [t, r], [/(opios)[\/\s]+([\w\.]+)/i], [[t, "Opera Mini"], r], [/\s(opr)\/([\w\.]+)/i], [[t, "Opera"], r], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [t, r], [/(konqueror)\/([\w\.]+)/i], [[t, "Konqueror"], r], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[t, "IE"], r], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [[t, "Edge"], r], [/(yabrowser)\/([\w\.]+)/i], [[t, "Yandex"], r], [/(Avast)\/([\w\.]+)/i], [[t, "Avast Secure Browser"], r], [/(AVG)\/([\w\.]+)/i], [[t, "AVG Secure Browser"], r], [/(puffin)\/([\w\.]+)/i], [[t, "Puffin"], r], [/(focus)\/([\w\.]+)/i], [[t, "Firefox Focus"], r], [/(opt)\/([\w\.]+)/i], [[t, "Opera Touch"], r], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[t, "UCBrowser"], r], [/(comodo_dragon)\/([\w\.]+)/i], [[t, /_/g, " "], r], [/(windowswechat qbcore)\/([\w\.]+)/i], [[t, "WeChat(Win) Desktop"], r], [/(micromessenger)\/([\w\.]+)/i], [[t, "WeChat"], r], [/(brave)\/([\w\.]+)/i], [[t, "Brave"], r], [/(qqbrowserlite)\/([\w\.]+)/i], [t, r], [/(QQ)\/([\d\.]+)/i], [t, r], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [t, r], [/(baiduboxapp)[\/\s]?([\w\.]+)/i], [t, r], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [t, r], [/(MetaSr)[\/\s]?([\w\.]+)/i], [t], [/(LBBROWSER)/i], [t], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [r, [t, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [r, [t, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [t, r], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [r, [t, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[t, /(.+)/, "$1 WebView"], r], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[t, /(.+(?:g|us))(.+)/, "$1 $2"], r], [/((?:android.+)crmo|crios)\/([\w\.]+)/i, /android.+(chrome)\/([\w\.]+)\s+(?:mobile\s?safari)/i], [[t, "Chrome Mobile"], r], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [r, [t, "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [[t, "Sailfish Browser"], r], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [t, r], [/(dolfin)\/([\w\.]+)/i], [[t, "Dolphin"], r], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[t, "360 Browser"]], [/(coast)\/([\w\.]+)/i], [[t, "Opera Coast"], r], [/fxios\/([\w\.-]+)/i], [r, [t, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [r, [t, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [r, t], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[t, "GSA"], r], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [t, [r, g.str, v.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [t, r], [/(navigator|netscape)\/([\w\.-]+)/i], [[t, "Netscape"], r], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [t, r]],
                cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[s, "amd64"]], [/(ia32(?=;))/i], [[s, f.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[s, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[s, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[s, /ower/, "", f.lowerize]], [/(sun4\w)[;\)]/i], [[s, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[s, f.lowerize]]],
                device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [e, i, [n, c]], [/applecoremedia\/[\w\.]+ \((ipad)/], [e, [i, "Apple"], [n, c]], [/(apple\s{0,1}tv)/i], [[e, "Apple TV"], [i, "Apple"], [n, p]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [i, e, [n, c]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [e, [i, "Amazon"], [n, c]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[e, g.str, v.device.amazon.model], [i, "Amazon"], [n, u]], [/android.+aft([bms])\sbuild/i], [e, [i, "Amazon"], [n, p]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [e, i, [n, u]], [/\((ip[honed|\s\w*]+);/i], [e, [i, "Apple"], [n, u]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [i, e, [n, u]], [/\(bb10;\s(\w+)/i], [e, [i, "BlackBerry"], [n, u]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [e, [i, "Asus"], [n, c]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[i, "Sony"], [e, "Xperia Tablet"], [n, c]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [e, [i, "Sony"], [n, u]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [i, e, [n, a]], [/android.+;\s(shield)\sbuild/i], [e, [i, "Nvidia"], [n, a]], [/(playstation\s[34portablevi]+)/i], [e, [i, "Sony"], [n, a]], [/(sprint\s(\w+))/i], [[i, g.str, v.device.sprint.vendor], [e, g.str, v.device.sprint.model], [n, u]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [i, [e, /_/g, " "], [n, u]], [/(nexus\s9)/i], [e, [i, "HTC"], [n, c]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i], [e, [i, "Huawei"], [n, u]], [/android.+(bah2?-a?[lw]\d{2})/i], [e, [i, "Huawei"], [n, c]], [/(microsoft);\s(lumia[\s\w]+)/i], [i, e, [n, u]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [e, [i, "Microsoft"], [n, a]], [/(kin\.[onetw]{3})/i], [[e, /\./g, " "], [i, "Microsoft"], [n, u]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [e, [i, "Motorola"], [n, u]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [e, [i, "Motorola"], [n, c]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[i, f.trim], [e, f.trim], [n, p]], [/hbbtv.+maple;(\d+)/i], [[e, /^/, "SmartTV"], [i, "Samsung"], [n, p]], [/\(dtv[\);].+(aquos)/i], [e, [i, "Sharp"], [n, p]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[i, "Samsung"], e, [n, c]], [/smart-tv.+(samsung)/i], [i, [n, p], e], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[i, "Samsung"], e, [n, u]], [/sie-(\w*)/i], [e, [i, "Siemens"], [n, u]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[i, "Nokia"], e, [n, u]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [e, [i, "Acer"], [n, c]], [/android.+([vl]k\-?\d{3})\s+build/i], [e, [i, "LG"], [n, c]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[i, "LG"], e, [n, c]], [/(lg) netcast\.tv/i], [i, e, [n, p]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [e, [i, "LG"], [n, u]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], [i, e, [n, c]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [e, [i, "Lenovo"], [n, c]], [/(lenovo)[_\s-]?([\w-]+)/i], [i, e, [n, u]], [/linux;.+((jolla));/i], [i, e, [n, u]], [/((pebble))app\/[\d\.]+\s/i], [i, e, [n, h]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [i, e, [n, u]], [/crkey/i], [[e, "Chromecast"], [i, "Google"], [n, p]], [/android.+;\s(glass)\s\d/i], [e, [i, "Google"], [n, h]], [/android.+;\s(pixel c)[\s)]/i], [e, [i, "Google"], [n, c]], [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i], [e, [i, "Google"], [n, u]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[e, /_/g, " "], [i, "Xiaomi"], [n, u]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[e, /_/g, " "], [i, "Xiaomi"], [n, c]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [e, [i, "Meizu"], [n, u]], [/(mz)-([\w-]{2,})/i], [[i, "Meizu"], e, [n, u]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i], [e, [i, "OnePlus"], [n, u]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [e, [i, "RCA"], [n, c]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [e, [i, "Dell"], [n, c]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [e, [i, "Verizon"], [n, c]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[i, "Barnes & Noble"], e, [n, c]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [e, [i, "NuVision"], [n, c]], [/android.+;\s(k88)\sbuild/i], [e, [i, "ZTE"], [n, c]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [e, [i, "Swiss"], [n, u]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [e, [i, "Swiss"], [n, c]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [e, [i, "Zeki"], [n, c]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[i, "Dragon Touch"], e, [n, c]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [e, [i, "Insignia"], [n, c]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [e, [i, "NextBook"], [n, c]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[i, "Voice"], e, [n, u]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[i, "LvTel"], e, [n, u]], [/android.+;\s(PH-1)\s/i], [e, [i, "Essential"], [n, u]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [e, [i, "Envizen"], [n, c]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [i, e, [n, c]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [e, [i, "MachSpeed"], [n, c]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [i, e, [n, c]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [e, [i, "Rotor"], [n, c]], [/android.+(KS(.+))\s+build/i], [e, [i, "Amazon"], [n, c]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [i, e, [n, c]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[n, f.lowerize], i, e], [/[\s\/\(](smart-?tv)[;\)]/i], [[n, p]], [/(android[\w\.\s\-]{0,9});.+build/i], [e, [i, "Generic"]]],
                engine: [[/windows.+\sedge\/([\w\.]+)/i], [r, [t, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [r, [t, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [t, r], [/rv\:([\w\.]{1,9}).+(gecko)/i], [r, t]],
                os: [[/microsoft\s(windows)\s(vista|xp)/i], [t, r], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [[t, g.str, v.os.windows.name], [r, g.str, v.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[t, "Windows"], [r, g.str, v.os.windows.version]], [/\((bb)(10);/i], [[t, "BlackBerry"], r], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], [t, r], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[t, "Symbian"], r], [/\((series40);/i], [t], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[t, "Firefox OS"], r], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [[t, "Linux"], r], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[t, "Chromium OS"], r], [/(sunos)\s?([\w\.\d]*)/i], [[t, "Solaris"], r], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [[t, "Linux"], r], [/(iphone)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i], [[t, "iPhone"], [r, /_/g, "."]], [/(ipad)(?:.*os\s*([\w]*)\slike\smac|;\sopera)/i], [[t, "iPad"], [r, /_/g, "."]], [/(haiku)\s(\w+)/i], [t, r], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[r, /_/g, "."], [t, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[t, "Mac"], [r, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [t, r]]
            }
              , y = function(e, t) {
                if ("object" == typeof e && (t = e,
                e = l),
                !(this instanceof y))
                    return new y(e,t).getResult();
                var n = e || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : "")
                  , i = t ? f.extend(m, t) : m;
                return this.getBrowser = function() {
                    var e = {
                        name: l,
                        version: l
                    };
                    return g.rgx.call(e, n, i.browser),
                    e.major = f.major(e.version),
                    e
                }
                ,
                this.getCPU = function() {
                    var e = {
                        architecture: l
                    };
                    return g.rgx.call(e, n, i.cpu),
                    e
                }
                ,
                this.getDevice = function() {
                    var e = {
                        vendor: l,
                        model: l,
                        type: l
                    };
                    return g.rgx.call(e, n, i.device),
                    e
                }
                ,
                this.getEngine = function() {
                    var e = {
                        name: l,
                        version: l
                    };
                    return g.rgx.call(e, n, i.engine),
                    e
                }
                ,
                this.getOS = function() {
                    var e = {
                        name: l,
                        version: l
                    };
                    return g.rgx.call(e, n, i.os),
                    e
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return n
                }
                ,
                this.setUA = function(e) {
                    return n = e,
                    this
                }
                ,
                this
            };
            y.VERSION = "0.7.21",
            y.BROWSER = {
                NAME: t,
                MAJOR: "major",
                VERSION: r
            },
            y.CPU = {
                ARCHITECTURE: s
            },
            y.DEVICE = {
                MODEL: e,
                VENDOR: i,
                TYPE: n,
                CONSOLE: a,
                MOBILE: u,
                SMARTTV: p,
                TABLET: c,
                WEARABLE: h,
                EMBEDDED: "embedded"
            },
            y.ENGINE = {
                NAME: t,
                VERSION: r
            },
            y.OS = {
                NAME: t,
                VERSION: r
            },
            b.exports && (E = b.exports = y),
            E.UAParser = y;
            var _, w = o && (o.jQuery || o.Zepto);
            w && !w.ua && (_ = new y,
            w.ua = _.getResult(),
            w.ua.get = function() {
                return _.getUA()
            }
            ,
            w.ua.set = function(e) {
                _.setUA(e);
                var t = _.getResult();
                for (var n in t)
                    w.ua[n] = t[n]
            }
            )
        }("object" == typeof window ? window : pe)
    })
      , Oe = (Se.UAParser,
    "8.1.0")
      , Ne = {
        apiEndpoint: "api.amplitude.com",
        batchEvents: !1,
        cookieExpiration: 365,
        cookieName: "amplitude_id",
        sameSiteCookie: "Lax",
        cookieForceUpgrade: !1,
        deferInitialization: !1,
        disableCookies: !1,
        deviceIdFromUrlParam: !1,
        domain: "",
        eventUploadPeriodMillis: 3e4,
        eventUploadThreshold: 30,
        forceHttps: !0,
        includeFbclid: !1,
        includeGclid: !1,
        includeReferrer: !1,
        includeUtm: !1,
        language: function() {
            return navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || ""
        }(),
        logLevel: "WARN",
        logAttributionCapturedEvent: !1,
        optOut: !1,
        onError: function() {},
        platform: "Web",
        savedMaxCount: 1e3,
        saveEvents: !0,
        saveParamsReferrerOncePerSession: !0,
        secureCookie: !1,
        sessionTimeout: 18e5,
        storage: m.STORAGE_DEFAULT,
        trackingOptions: {
            city: !0,
            country: !0,
            carrier: !0,
            device_manufacturer: !0,
            device_model: !0,
            dma: !0,
            ip_address: !0,
            language: !0,
            os_name: !0,
            os_version: !0,
            platform: !0,
            region: !0,
            version_name: !0
        },
        unsetParamsReferrerOnNewSession: !1,
        unsentKey: "amplitude_unsent",
        unsentIdentifyKey: "amplitude_unsent_identify",
        uploadBatchSize: 100
    };
    Ie.prototype.Identify = se,
    Ie.prototype.Revenue = Ee,
    Ie.prototype.init = function(e, i, o, t) {
        var r = this;
        if ("string" !== E(e) || F(e))
            G.error("Invalid apiKey. Please re-initialize with a valid apiKey");
        else
            try {
                Ae(this.options, o),
                c() && void 0 !== window.Prototype && Array.prototype.toJSON && (function() {
                    var e;
                    if (c()) {
                        var t = window
                          , n = Array;
                        if (void 0 !== t.Prototype && void 0 !== (null === (e = n.prototype) || void 0 === e ? void 0 : e.toJSON))
                            return delete n.prototype.toJSON
                    }
                }(),
                G.warn("Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify")),
                this.options.cookieName !== Ne.cookieName && G.warn("The cookieName option is deprecated. We will be ignoring it for newer cookies"),
                this.options.apiKey = e,
                this._storageSuffix = "_" + e + (this._instanceName === m.DEFAULT_INSTANCE ? "" : "_" + this._instanceName),
                this._storageSuffixV5 = e.slice(0, 6),
                this._oldCookiename = this.options.cookieName + this._storageSuffix,
                this._unsentKey = this.options.unsentKey + this._storageSuffix,
                this._unsentIdentifyKey = this.options.unsentIdentifyKey + this._storageSuffix,
                this._cookieName = m.COOKIE_PREFIX + "_" + this._storageSuffixV5,
                this.cookieStorage.options({
                    expirationDays: this.options.cookieExpiration,
                    domain: this.options.domain,
                    secure: this.options.secureCookie,
                    sameSite: this.options.sameSiteCookie
                }),
                this._metadataStorage = new ue({
                    storageKey: this._cookieName,
                    disableCookies: this.options.disableCookies,
                    expirationDays: this.options.cookieExpiration,
                    domain: this.options.domain,
                    secure: this.options.secureCookie,
                    sameSite: this.options.sameSiteCookie,
                    storage: this.options.storage
                });
                var n = !!this.cookieStorage.get(this._oldCookiename)
                  , s = !!this._metadataStorage.load();
                this._useOldCookie = !s && n && !this.options.cookieForceUpgrade;
                var a = s || n;
                if (this.options.domain = this.cookieStorage.options().domain,
                this.options.deferInitialization && !a)
                    return void this._deferInitialization(e, i, o, t);
                "string" === E(this.options.logLevel) && L(this.options.logLevel);
                var u = je(this);
                this._apiPropertiesTrackingOptions = 0 < Object.keys(u).length ? {
                    tracking_options: u
                } : {},
                this.options.cookieForceUpgrade && n && (s || Re(this),
                this.cookieStorage.remove(this._oldCookiename)),
                ke(this),
                this._pendingReadStorage = !0;
                this.options.saveEvents && (this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey).map(function(e) {
                    return {
                        event: e
                    }
                }).concat(this._unsentEvents),
                this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey).map(function(e) {
                    return {
                        event: e
                    }
                }).concat(this._unsentIdentifys)),
                function(e) {
                    r.options.deviceId = r._getInitialDeviceId(o && o.deviceId, e),
                    r.options.userId = "string" === E(i) && !F(i) && i || "number" === E(i) && i.toString() || r.options.userId || null;
                    var t = (new Date).getTime();
                    r._sessionId && r._lastEventTime && !(t - r._lastEventTime > r.options.sessionTimeout) || (r.options.unsetParamsReferrerOnNewSession && r._unsetUTMParams(),
                    r._newSession = !0,
                    r._sessionId = t,
                    r.options.saveParamsReferrerOncePerSession && r._trackParamsAndReferrer()),
                    r.options.saveParamsReferrerOncePerSession || r._trackParamsAndReferrer(),
                    r.options.saveEvents && (Te(r._unsentEvents),
                    Te(r._unsentIdentifys)),
                    r._lastEventTime = t,
                    xe(r),
                    r._pendingReadStorage = !1,
                    r._sendEventsIfReady();
                    for (var n = 0; n < r._onInit.length; n++)
                        r._onInit[n](r);
                    r._onInit = [],
                    r._isInitialized = !0
                }(),
                this.runQueuedFunctions(),
                "function" === E(t) && t(this)
            } catch (e) {
                G.error(e),
                "function" === E(o.onError) && o.onError(e)
            }
    }
    ,
    Ie.prototype.deleteLowerLevelDomainCookies = function() {
        var e = T()
          , t = this.options.domain && "." === this.options.domain[0] ? this.options.domain.slice(1) : this.options.domain;
        if (t && e !== t && new RegExp(t + "$").test(e)) {
            for (var n = e.split("."), i = t.split("."), o = n.length; o > i.length; --o) {
                var r = n.slice(n.length - o).join(".");
                Y.set(this._cookieName, null, {
                    domain: "." + r
                })
            }
            Y.set(this._cookieName, null, {})
        }
    }
    ,
    Ie.prototype._getInitialDeviceId = function(e, t) {
        if (e)
            return e;
        if (this.options.deviceIdFromUrlParam) {
            var n = this._getDeviceIdFromUrlParam(this._getUrlParams());
            if (n)
                return n
        }
        return this.options.deviceId ? this.options.deviceId : t || S()
    }
    ;
    var Te = function(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t].event.user_properties
              , i = e[t].event.event_properties
              , o = e[t].event.groups;
            e[t].event.user_properties = $(n),
            e[t].event.event_properties = $(i),
            e[t].event.groups = B(o)
        }
    };
    Ie.prototype._trackParamsAndReferrer = function() {
        var e, t, n, i, o;
        this.options.includeUtm && (e = this._initUtmData()),
        this.options.includeReferrer && (t = this._saveReferrer(this._getReferrer())),
        this.options.includeGclid && (n = this._saveGclid(this._getUrlParams())),
        this.options.includeFbclid && (i = this._saveFbclid(this._getUrlParams())),
        this.options.logAttributionCapturedEvent && (o = v({}, e, t, n, i),
        0 < Object.keys(o).length && this.logEvent(m.ATTRIBUTION_EVENT, o))
    }
    ;
    var Ae = function e(t, n) {
        if ("object" === E(n)) {
            var i, o, r;
            for (var s in n)
                Object.prototype.hasOwnProperty.call(n, s) && (i = s,
                r = o = void 0,
                Object.prototype.hasOwnProperty.call(t, i) && (o = n[i],
                r = E(t[i]),
                W(o, i + " option", r) && ("boolean" === r ? t[i] = !!o : "string" === r && !F(o) || "number" === r && 0 < o || "function" === r ? t[i] = o : "object" === r && e(t[i], o))))
        }
    };
    Ie.prototype.runQueuedFunctions = function() {
        var e = this._q;
        this._q = [];
        for (var t = 0; t < e.length; t++) {
            var n = this[e[t][0]];
            "function" === E(n) && n.apply(this, e[t].slice(1))
        }
    }
    ,
    Ie.prototype._apiKeySet = function(e) {
        return !F(this.options.apiKey) || (G.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + e),
        !1)
    }
    ,
    Ie.prototype._loadSavedUnsentEvents = function(e) {
        var t = this._getFromStorage(oe, e)
          , n = this._parseSavedUnsentEventsString(t, e);
        return this._setInStorage(oe, e, JSON.stringify(n)),
        n
    }
    ,
    Ie.prototype._parseSavedUnsentEventsString = function(e, t) {
        if (F(e))
            return [];
        if ("string" === E(e))
            try {
                var n = JSON.parse(e);
                if ("array" === E(n))
                    return n
            } catch (e) {}
        return G.error("Unable to load " + t + " events. Restart with a new empty queue."),
        []
    }
    ,
    Ie.prototype.isNewSession = function() {
        return this._newSession
    }
    ,
    Ie.prototype.onInit = function(e) {
        this._isInitialized ? e(this) : this._onInit.push(e)
    }
    ,
    Ie.prototype.getSessionId = function() {
        return this._sessionId
    }
    ,
    Ie.prototype.nextEventId = function() {
        return this._eventId++,
        this._eventId
    }
    ,
    Ie.prototype.nextIdentifyId = function() {
        return this._identifyId++,
        this._identifyId
    }
    ,
    Ie.prototype.nextSequenceNumber = function() {
        return this._sequenceNumber++,
        this._sequenceNumber
    }
    ,
    Ie.prototype._unsentCount = function() {
        return this._unsentEvents.length + this._unsentIdentifys.length
    }
    ,
    Ie.prototype._sendEventsIfReady = function() {
        return 0 !== this._unsentCount() && (!this.options.batchEvents || this._unsentCount() >= this.options.eventUploadThreshold ? (this.sendEvents(),
        !0) : (this._updateScheduled || (this._updateScheduled = !0,
        setTimeout(function() {
            this._updateScheduled = !1,
            this.sendEvents()
        }
        .bind(this), this.options.eventUploadPeriodMillis)),
        !1))
    }
    ,
    Ie.prototype._getFromStorage = function(e, t) {
        return e.getItem(t + this._storageSuffix)
    }
    ,
    Ie.prototype._setInStorage = function(e, t, n) {
        e.setItem(t + this._storageSuffix, n)
    }
    ;
    var ke = function(e) {
        var t, n;
        e._useOldCookie ? "object" !== E(t = e.cookieStorage.get(e._oldCookiename)) || Ce(e, t) : "object" === E(n = e._metadataStorage.load()) && Ce(e, n)
    }
      , Re = function(e) {
        var t = e.cookieStorage.get(e._oldCookiename);
        "object" === E(t) && (Ce(e, t),
        xe(e))
    }
      , Ce = function(e, t) {
        t.deviceId && (e.options.deviceId = t.deviceId),
        t.userId && (e.options.userId = t.userId),
        null !== t.optOut && void 0 !== t.optOut && !1 !== t.optOut && (e.options.optOut = t.optOut),
        t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)),
        t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime, 10)),
        t.eventId && (e._eventId = parseInt(t.eventId, 10)),
        t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)),
        t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber, 10))
    }
      , xe = function(e) {
        var t = {
            deviceId: e.options.deviceId,
            userId: e.options.userId,
            optOut: e.options.optOut,
            sessionId: e._sessionId,
            lastEventTime: e._lastEventTime,
            eventId: e._eventId,
            identifyId: e._identifyId,
            sequenceNumber: e._sequenceNumber
        };
        e._useOldCookie ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t) : e._metadataStorage.save(t)
    };
    Ie.prototype._initUtmData = function(e, t) {
        e = e || this._getUrlParams(),
        t = t || this.cookieStorage.get("__utmz");
        var n = re(t, e);
        return Pe(this, n),
        n
    }
    ,
    Ie.prototype._unsetUTMParams = function() {
        var e = new se;
        e.unset(m.REFERRER),
        e.unset(m.UTM_SOURCE),
        e.unset(m.UTM_MEDIUM),
        e.unset(m.UTM_CAMPAIGN),
        e.unset(m.UTM_TERM),
        e.unset(m.UTM_CONTENT),
        this.identify(e)
    }
    ;
    var Pe = function(e, t) {
        if ("object" === E(t) && 0 !== Object.keys(t).length) {
            var n = new se;
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n.setOnce("initial_" + i, t[i]),
                n.set(i, t[i]));
            e.identify(n)
        }
    };
    Ie.prototype._getReferrer = function() {
        return document.referrer
    }
    ,
    Ie.prototype._getUrlParams = function() {
        return location.search
    }
    ,
    Ie.prototype._saveGclid = function(e) {
        var t = K("gclid", e);
        if (!F(t)) {
            var n = {
                gclid: t
            };
            return Pe(this, n),
            n
        }
    }
    ,
    Ie.prototype._saveFbclid = function(e) {
        var t = K("fbclid", e);
        if (!F(t)) {
            var n = {
                fbclid: t
            };
            return Pe(this, n),
            n
        }
    }
    ,
    Ie.prototype._getDeviceIdFromUrlParam = function(e) {
        return K(m.AMP_DEVICE_ID_PARAM, e)
    }
    ,
    Ie.prototype._getReferringDomain = function(e) {
        if (F(e))
            return null;
        var t = e.split("/");
        return 3 <= t.length ? t[2] : null
    }
    ,
    Ie.prototype._saveReferrer = function(e) {
        if (!F(e)) {
            var t = {
                referrer: e,
                referring_domain: this._getReferringDomain(e)
            };
            return Pe(this, t),
            t
        }
    }
    ,
    Ie.prototype.saveEvents = function() {
        try {
            var e = JSON.stringify(this._unsentEvents.map(function(e) {
                return e.event
            }));
            this._setInStorage(oe, this.options.unsentKey, e)
        } catch (e) {}
        try {
            var t = JSON.stringify(this._unsentIdentifys.map(function(e) {
                return e.event
            }));
            this._setInStorage(oe, this.options.unsentIdentifyKey, t)
        } catch (e) {}
    }
    ,
    Ie.prototype.setDomain = function(e) {
        if (this._shouldDeferCall())
            return this._q.push(["setDomain"].concat(Array.prototype.slice.call(arguments, 0)));
        if (W(e, "domain", "string"))
            try {
                this.cookieStorage.options({
                    expirationDays: this.options.cookieExpiration,
                    secure: this.options.secureCookie,
                    domain: e,
                    sameSite: this.options.sameSiteCookie
                }),
                this.options.domain = this.cookieStorage.options().domain,
                ke(this),
                xe(this)
            } catch (e) {
                G.error(e)
            }
    }
    ,
    Ie.prototype.setUserId = function(e) {
        if (this._shouldDeferCall())
            return this._q.push(["setUserId"].concat(Array.prototype.slice.call(arguments, 0)));
        try {
            this.options.userId = null != e && "" + e || null,
            xe(this)
        } catch (e) {
            G.error(e)
        }
    }
    ,
    Ie.prototype.setGroup = function(e, t) {
        if (this._shouldDeferCall())
            return this._q.push(["setGroup"].concat(Array.prototype.slice.call(arguments, 0)));
        var n, i;
        this._apiKeySet("setGroup()") && W(e, "groupType", "string") && !F(e) && ((n = {})[e] = t,
        i = (new se).set(e, t),
        this._logEvent(m.IDENTIFY_EVENT, null, null, i.userPropertiesOperations, n, null, null, null))
    }
    ,
    Ie.prototype.setOptOut = function(e) {
        if (this._shouldDeferCall())
            return this._q.push(["setOptOut"].concat(Array.prototype.slice.call(arguments, 0)));
        if (W(e, "enable", "boolean"))
            try {
                this.options.optOut = e,
                xe(this)
            } catch (e) {
                G.error(e)
            }
    }
    ,
    Ie.prototype.setSessionId = function(e) {
        if (W(e, "sessionId", "number"))
            try {
                this._sessionId = e,
                xe(this)
            } catch (e) {
                G.error(e)
            }
    }
    ,
    Ie.prototype.resetSessionId = function() {
        this.setSessionId((new Date).getTime())
    }
    ,
    Ie.prototype.regenerateDeviceId = function() {
        if (this._shouldDeferCall())
            return this._q.push(["regenerateDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
        this.setDeviceId(S())
    }
    ,
    Ie.prototype.setDeviceId = function(e) {
        if (this._shouldDeferCall())
            return this._q.push(["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
        if (W(e, "deviceId", "string"))
            try {
                F(e) || (this.options.deviceId = "" + e,
                xe(this))
            } catch (e) {
                G.error(e)
            }
    }
    ,
    Ie.prototype.setUserProperties = function(e) {
        if (this._shouldDeferCall())
            return this._q.push(["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
        if (this._apiKeySet("setUserProperties()") && W(e, "userProperties", "object")) {
            var t = z($(e));
            if (0 !== Object.keys(t).length) {
                var n = new se;
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && n.set(i, t[i]);
                this.identify(n)
            }
        }
    }
    ,
    Ie.prototype.clearUserProperties = function() {
        if (this._shouldDeferCall())
            return this._q.push(["clearUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
        var e;
        this._apiKeySet("clearUserProperties()") && ((e = new se).clearAll(),
        this.identify(e))
    }
    ;
    function Ue(e, t) {
        for (var n = 0; n < t._q.length; n++) {
            var i = e[t._q[n][0]];
            "function" === E(i) && i.apply(e, t._q[n].slice(1))
        }
        return e
    }
    Ie.prototype.identify = function(e, t) {
        if (this._shouldDeferCall())
            return this._q.push(["identify"].concat(Array.prototype.slice.call(arguments, 0)));
        if (this._apiKeySet("identify()"))
            if ("object" === E(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = Ue(new se, e)),
            e instanceof se) {
                if (0 < Object.keys(e.userPropertiesOperations).length)
                    return this._logEvent(m.IDENTIFY_EVENT, null, null, e.userPropertiesOperations, null, null, null, t);
                "function" === E(t) && t(0, "No request sent", {
                    reason: "No user property operations"
                })
            } else
                G.error("Invalid identify input type. Expected Identify object but saw " + E(e)),
                "function" === E(t) && t(0, "No request sent", {
                    reason: "Invalid identify input type"
                });
        else
            "function" === E(t) && t(0, "No request sent", {
                reason: "API key is not set"
            })
    }
    ,
    Ie.prototype.groupIdentify = function(e, t, n, i) {
        if (this._shouldDeferCall())
            return this._q.push(["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0)));
        if (this._apiKeySet("groupIdentify()"))
            if (W(e, "group_type", "string") && !F(e))
                if (null != t)
                    if ("object" === E(n) && Object.prototype.hasOwnProperty.call(n, "_q") && (n = Ue(new se, n)),
                    n instanceof se) {
                        if (0 < Object.keys(n.userPropertiesOperations).length)
                            return this._logEvent(m.GROUP_IDENTIFY_EVENT, null, null, null, o({}, e, t), n.userPropertiesOperations, null, i);
                        "function" === E(i) && i(0, "No request sent", {
                            reason: "No group property operations"
                        })
                    } else
                        G.error("Invalid identify input type. Expected Identify object but saw " + E(n)),
                        "function" === E(i) && i(0, "No request sent", {
                            reason: "Invalid identify input type"
                        });
                else
                    "function" === E(i) && i(0, "No request sent", {
                        reason: "Invalid group name"
                    });
            else
                "function" === E(i) && i(0, "No request sent", {
                    reason: "Invalid group type"
                });
        else
            "function" === E(i) && i(0, "No request sent", {
                reason: "API key is not set"
            })
    }
    ,
    Ie.prototype.setVersionName = function(e) {
        if (this._shouldDeferCall())
            return this._q.push(["setVersionName"].concat(Array.prototype.slice.call(arguments, 0)));
        W(e, "versionName", "string") && (this.options.versionName = e)
    }
    ,
    Ie.prototype._logEvent = function(e, t, n, i, o, r, s, a) {
        if (ke(this),
        e)
            if (this.options.optOut)
                "function" === E(a) && a(0, "No request sent", {
                    reason: "optOut is set to true"
                });
            else
                try {
                    var u = e === m.IDENTIFY_EVENT || e === m.GROUP_IDENTIFY_EVENT ? this.nextIdentifyId() : this.nextEventId()
                      , c = this.nextSequenceNumber()
                      , p = "number" === E(s) ? s : (new Date).getTime();
                    this._sessionId && this._lastEventTime && !(p - this._lastEventTime > this.options.sessionTimeout) || (this._sessionId = p),
                    this._lastEventTime = p,
                    xe(this);
                    var l = this._ua.browser.name
                      , d = this._ua.browser.major
                      , h = this._ua.os.name;
                    i = i || {};
                    var f = v({}, this._apiPropertiesTrackingOptions);
                    n = v({}, n || {}, f),
                    t = t || {},
                    o = o || {},
                    r = r || {};
                    var g = {
                        device_id: this.options.deviceId,
                        user_id: this.options.userId,
                        timestamp: p,
                        event_id: u,
                        session_id: this._sessionId || -1,
                        event_type: e,
                        version_name: this.options.versionName || null,
                        platform: De(this, "platform") ? this.options.platform : null,
                        os_name: De(this, "os_name") && l || null,
                        os_version: De(this, "os_version") && d || null,
                        device_model: De(this, "device_model") && h || null,
                        language: De(this, "language") ? this.options.language : null,
                        api_properties: n,
                        event_properties: z($(t)),
                        user_properties: z($(i)),
                        uuid: function e(t) {
                            return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
                        }(),
                        library: {
                            name: "amplitude-js",
                            version: Oe
                        },
                        sequence_number: c,
                        groups: z(B(o)),
                        group_properties: z($(r)),
                        user_agent: this._userAgent
                    };
                    return e === m.IDENTIFY_EVENT || e === m.GROUP_IDENTIFY_EVENT ? (this._unsentIdentifys.push({
                        event: g,
                        callback: a
                    }),
                    this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push({
                        event: g,
                        callback: a
                    }),
                    this._limitEventsQueued(this._unsentEvents)),
                    this.options.saveEvents && this.saveEvents(),
                    this._sendEventsIfReady(),
                    u
                } catch (e) {
                    G.error(e)
                }
        else
            "function" === E(a) && a(0, "No request sent", {
                reason: "Missing eventType"
            })
    }
    ;
    var De = function(e, t) {
        return !!e.options.trackingOptions[t]
    }
      , je = function(e) {
        for (var t = ["city", "country", "dma", "ip_address", "region"], n = {}, i = 0; i < t.length; i++) {
            var o = t[i];
            De(e, o) || (n[o] = !1)
        }
        return n
    };
    Ie.prototype._limitEventsQueued = function(e) {
        e.length > this.options.savedMaxCount && e.splice(0, e.length - this.options.savedMaxCount).forEach(function(e) {
            "function" === E(e.callback) && e.callback(0, "No request sent", {
                reason: "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker"
            })
        })
    }
    ,
    Ie.prototype.logEvent = function(e, t, n) {
        return this._shouldDeferCall() ? this._q.push(["logEvent"].concat(Array.prototype.slice.call(arguments, 0))) : this.logEventWithTimestamp(e, t, null, n)
    }
    ,
    Ie.prototype.logEventWithTimestamp = function(e, t, n, i) {
        return this._shouldDeferCall() ? this._q.push(["logEventWithTimestamp"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEvent()") ? W(e, "eventType", "string") ? F(e) ? ("function" === E(i) && i(0, "No request sent", {
            reason: "Missing eventType"
        }),
        -1) : this._logEvent(e, t, null, null, null, null, n, i) : ("function" === E(i) && i(0, "No request sent", {
            reason: "Invalid type for eventType"
        }),
        -1) : ("function" === E(i) && i(0, "No request sent", {
            reason: "API key not set"
        }),
        -1)
    }
    ,
    Ie.prototype.logEventWithGroups = function(e, t, n, i) {
        return this._shouldDeferCall() ? this._q.push(["logEventWithGroups"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEventWithGroups()") ? W(e, "eventType", "string") ? this._logEvent(e, t, null, null, n, null, null, i) : ("function" === E(i) && i(0, "No request sent", {
            reason: "Invalid type for eventType"
        }),
        -1) : ("function" === E(i) && i(0, "No request sent", {
            reason: "API key not set"
        }),
        -1)
    }
    ;
    function qe(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
    Ie.prototype.logRevenueV2 = function(e) {
        if (this._shouldDeferCall())
            return this._q.push(["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0)));
        if (this._apiKeySet("logRevenueV2()"))
            if ("object" === E(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = Ue(new Ee, e)),
            e instanceof Ee) {
                if (e && e._isValidRevenue())
                    return this.logEvent(m.REVENUE_EVENT, e._toJSONObject())
            } else
                G.error("Invalid revenue input type. Expected Revenue object but saw " + E(e))
    }
    ,
    Ie.prototype.logRevenue = function(e, t, n) {
        return this._shouldDeferCall() ? this._q.push(["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logRevenue()") && qe(e) && (void 0 === t || qe(t)) ? this._logEvent(m.REVENUE_EVENT, {}, {
            productId: n,
            special: "revenue_amount",
            quantity: t || 1,
            price: e
        }, null, null, null, null, null) : -1
    }
    ,
    Ie.prototype.removeEvents = function(e, t, n, i) {
        Me(this, "_unsentEvents", e, n, i),
        Me(this, "_unsentIdentifys", t, n, i)
    }
    ;
    var Me = function(e, t, n, i, o) {
        if (!(n < 0)) {
            for (var r = [], s = 0; s < e[t].length; s++) {
                var a = e[t][s];
                a.event.event_id > n ? r.push(a) : a.callback && a.callback(i, o)
            }
            e[t] = r
        }
    };
    Ie.prototype.sendEvents = function() {
        var e, n, t, i, o, r, s, a, u;
        this._apiKeySet("sendEvents()") ? this.options.optOut ? this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
            reason: "Opt out is set to true"
        }) : 0 !== this._unsentCount() && (this._sending || (this._sending = !0,
        e = (this.options.forceHttps || "https:" === window.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint,
        n = Math.min(this._unsentCount(), this.options.uploadBatchSize),
        t = this._mergeEventsAndIdentifys(n),
        i = t.maxEventId,
        o = t.maxIdentifyId,
        r = JSON.stringify(t.eventsToSend.map(function(e) {
            return e.event
        })),
        s = (new Date).getTime(),
        a = {
            client: this.options.apiKey,
            e: r,
            v: m.API_VERSION,
            upload_time: s,
            checksum: de(m.API_VERSION + this.options.apiKey + r + s)
        },
        u = this,
        new we(e,a).send(function(e, t) {
            u._sending = !1;
            try {
                200 === e && "success" === t ? (u.removeEvents(i, o, e, t),
                u.options.saveEvents && u.saveEvents(),
                u._sendEventsIfReady()) : 413 === e && (1 === u.options.uploadBatchSize && u.removeEvents(i, o, e, t),
                u.options.uploadBatchSize = Math.ceil(n / 2),
                u.sendEvents())
            } catch (e) {}
        }))) : this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
            reason: "API key not set"
        })
    }
    ,
    Ie.prototype._mergeEventsAndIdentifys = function(e) {
        for (var t = [], n = 0, i = -1, o = 0, r = -1; t.length < e; ) {
            var s = void 0
              , a = o >= this._unsentIdentifys.length
              , u = n >= this._unsentEvents.length;
            if (u && a) {
                G.error("Merging Events and Identifys, less events and identifys than expected");
                break
            }
            a || !u && (!("sequence_number"in this._unsentEvents[n].event) || this._unsentEvents[n].event.sequence_number < this._unsentIdentifys[o].event.sequence_number) ? i = (s = this._unsentEvents[n++]).event.event_id : r = (s = this._unsentIdentifys[o++]).event.event_id,
            t.push(s)
        }
        return {
            eventsToSend: t,
            maxEventId: i,
            maxIdentifyId: r
        }
    }
    ,
    Ie.prototype.setGlobalUserProperties = function(e) {
        this.setUserProperties(e)
    }
    ,
    Ie.prototype.__VERSION__ = Oe,
    Ie.prototype._shouldDeferCall = function() {
        return this._pendingReadStorage || this._initializationDeferred
    }
    ,
    Ie.prototype._deferInitialization = function() {
        this._initializationDeferred = !0,
        this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)))
    }
    ,
    Ie.prototype.enableTracking = function() {
        this._initializationDeferred = !1,
        xe(this),
        this.runQueuedFunctions()
    }
    ;
    function Ve() {
        this.options = v({}, Ne),
        this._q = [],
        this._instances = {}
    }
    Ve.prototype.Identify = se,
    Ve.prototype.Revenue = Ee,
    Ve.prototype.getInstance = function(e) {
        e = F(e) ? m.DEFAULT_INSTANCE : e.toLowerCase();
        var t = this._instances[e];
        return void 0 === t && (t = new Ie(e),
        this._instances[e] = t),
        t
    }
    ,
    Ve.prototype.runQueuedFunctions = function() {
        for (var e = 0; e < this._q.length; e++) {
            var t = this[this._q[e][0]];
            "function" === E(t) && t.apply(this, this._q[e].slice(1))
        }
        for (var n in this._q = [],
        this._instances)
            Object.prototype.hasOwnProperty.call(this._instances, n) && this._instances[n].runQueuedFunctions()
    }
    ,
    Ve.prototype.init = function(e, t, n, i) {
        this.getInstance().init(e, t, n, function(e) {
            this.options = e.options,
            "function" === E(i) && i(e)
        }
        .bind(this))
    }
    ,
    Ve.prototype.isNewSession = function() {
        return this.getInstance().isNewSession()
    }
    ,
    Ve.prototype.getSessionId = function() {
        return this.getInstance().getSessionId()
    }
    ,
    Ve.prototype.nextEventId = function() {
        return this.getInstance().nextEventId()
    }
    ,
    Ve.prototype.nextIdentifyId = function() {
        return this.getInstance().nextIdentifyId()
    }
    ,
    Ve.prototype.nextSequenceNumber = function() {
        return this.getInstance().nextSequenceNumber()
    }
    ,
    Ve.prototype.saveEvents = function() {
        this.getInstance().saveEvents()
    }
    ,
    Ve.prototype.setDomain = function(e) {
        this.getInstance().setDomain(e)
    }
    ,
    Ve.prototype.setUserId = function(e) {
        this.getInstance().setUserId(e)
    }
    ,
    Ve.prototype.setGroup = function(e, t) {
        this.getInstance().setGroup(e, t)
    }
    ,
    Ve.prototype.setOptOut = function(e) {
        this.getInstance().setOptOut(e)
    }
    ,
    Ve.prototype.regenerateDeviceId = function() {
        this.getInstance().regenerateDeviceId()
    }
    ,
    Ve.prototype.setDeviceId = function(e) {
        this.getInstance().setDeviceId(e)
    }
    ,
    Ve.prototype.setUserProperties = function(e) {
        this.getInstance().setUserProperties(e)
    }
    ,
    Ve.prototype.clearUserProperties = function() {
        this.getInstance().clearUserProperties()
    }
    ,
    Ve.prototype.identify = function(e, t) {
        this.getInstance().identify(e, t)
    }
    ,
    Ve.prototype.setVersionName = function(e) {
        this.getInstance().setVersionName(e)
    }
    ,
    Ve.prototype.logEvent = function(e, t, n) {
        return this.getInstance().logEvent(e, t, n)
    }
    ,
    Ve.prototype.logEventWithGroups = function(e, t, n, i) {
        return this.getInstance().logEventWithGroups(e, t, n, i)
    }
    ,
    Ve.prototype.logRevenueV2 = function(e) {
        return this.getInstance().logRevenueV2(e)
    }
    ,
    Ve.prototype.logRevenue = function(e, t, n) {
        return this.getInstance().logRevenue(e, t, n)
    }
    ,
    Ve.prototype.removeEvents = function(e, t) {
        this.getInstance().removeEvents(e, t)
    }
    ,
    Ve.prototype.sendEvents = function(e) {
        this.getInstance().sendEvents(e)
    }
    ,
    Ve.prototype.setGlobalUserProperties = function(e) {
        this.getInstance().setUserProperties(e)
    }
    ,
    Ve.prototype.__VERSION__ = Oe;
    var Le = window.amplitude || {}
      , Ge = new Ve;
    for (var Fe in Ge._q = Le._q || [],
    Le._iq)
        Object.prototype.hasOwnProperty.call(Le._iq, Fe) && (Ge.getInstance(Fe)._q = Le._iq[Fe]._q || []);
    return Ge.runQueuedFunctions(),
    Ge
}();
