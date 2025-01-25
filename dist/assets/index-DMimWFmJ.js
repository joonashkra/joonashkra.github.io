function mc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function vc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var gc = { exports: {} },
  _i = {},
  yc = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cl = Symbol.for("react.element"),
  mh = Symbol.for("react.portal"),
  vh = Symbol.for("react.fragment"),
  gh = Symbol.for("react.strict_mode"),
  yh = Symbol.for("react.profiler"),
  wh = Symbol.for("react.provider"),
  xh = Symbol.for("react.context"),
  Sh = Symbol.for("react.forward_ref"),
  kh = Symbol.for("react.suspense"),
  Eh = Symbol.for("react.memo"),
  Ch = Symbol.for("react.lazy"),
  Uu = Symbol.iterator;
function Ph(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uu && e[Uu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var wc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  xc = Object.assign,
  Sc = {};
function sr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sc),
    (this.updater = n || wc);
}
sr.prototype.isReactComponent = {};
sr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kc() {}
kc.prototype = sr.prototype;
function Ea(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Sc),
    (this.updater = n || wc);
}
var Ca = (Ea.prototype = new kc());
Ca.constructor = Ea;
xc(Ca, sr.prototype);
Ca.isPureReactComponent = !0;
var Au = Array.isArray,
  Ec = Object.prototype.hasOwnProperty,
  Pa = { current: null },
  Cc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Ec.call(t, r) && !Cc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: cl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Pa.current,
  };
}
function _h(e, t) {
  return {
    $$typeof: cl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function _a(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cl;
}
function jh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Bu = /\/+/g;
function Ki(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? jh("" + e.key)
    : t.toString(36);
}
function $l(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cl:
          case mh:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Ki(o, 0) : r),
      Au(l)
        ? ((n = ""),
          e != null && (n = e.replace(Bu, "$&/") + "/"),
          $l(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (_a(l) &&
            (l = _h(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Bu, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Au(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + Ki(i, a);
      o += $l(i, t, n, u, l);
    }
  else if (((u = Ph(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Ki(i, a++)), (o += $l(i, t, n, u, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return o;
}
function El(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    $l(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Nh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Vl = { transition: null },
  Lh = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Vl,
    ReactCurrentOwner: Pa,
  };
function _c() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
  map: El,
  forEach: function (e, t, n) {
    El(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      El(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      El(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_a(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
K.Component = sr;
K.Fragment = vh;
K.Profiler = yh;
K.PureComponent = Ea;
K.StrictMode = gh;
K.Suspense = kh;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lh;
K.act = _c;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = xc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Pa.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Ec.call(t, u) &&
        !Cc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: cl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: xh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wh, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = Pc;
K.createFactory = function (e) {
  var t = Pc.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: Sh, render: e };
};
K.isValidElement = _a;
K.lazy = function (e) {
  return { $$typeof: Ch, _payload: { _status: -1, _result: e }, _init: Nh };
};
K.memo = function (e, t) {
  return { $$typeof: Eh, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Vl.transition;
  Vl.transition = {};
  try {
    e();
  } finally {
    Vl.transition = t;
  }
};
K.unstable_act = _c;
K.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
K.useContext = function (e) {
  return Oe.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
K.useId = function () {
  return Oe.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return Oe.current.useRef(e);
};
K.useState = function (e) {
  return Oe.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return Oe.current.useTransition();
};
K.version = "18.3.1";
yc.exports = K;
var P = yc.exports;
const ko = vc(P),
  Rh = mc({ __proto__: null, default: ko }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Th = P,
  Mh = Symbol.for("react.element"),
  Dh = Symbol.for("react.fragment"),
  zh = Object.prototype.hasOwnProperty,
  Oh = Th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ih = { key: !0, ref: !0, __self: !0, __source: !0 };
function jc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) zh.call(t, r) && !Ih.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Mh,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Oh.current,
  };
}
_i.Fragment = Dh;
_i.jsx = jc;
_i.jsxs = jc;
gc.exports = _i;
var y = gc.exports,
  Eo = {},
  Nc = { exports: {} },
  Xe = {},
  Lc = { exports: {} },
  Rc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, A) {
    var $ = N.length;
    N.push(A);
    e: for (; 0 < $; ) {
      var J = ($ - 1) >>> 1,
        q = N[J];
      if (0 < l(q, A)) (N[J] = A), (N[$] = q), ($ = J);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var A = N[0],
      $ = N.pop();
    if ($ !== A) {
      N[0] = $;
      e: for (var J = 0, q = N.length, ut = q >>> 1; J < ut; ) {
        var Ve = 2 * (J + 1) - 1,
          He = N[Ve],
          Te = Ve + 1,
          Je = N[Te];
        if (0 > l(He, $))
          Te < q && 0 > l(Je, He)
            ? ((N[J] = Je), (N[Te] = $), (J = Te))
            : ((N[J] = He), (N[Ve] = $), (J = Ve));
        else if (Te < q && 0 > l(Je, $)) (N[J] = Je), (N[Te] = $), (J = Te);
        else break e;
      }
    }
    return A;
  }
  function l(N, A) {
    var $ = N.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : N.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var u = [],
    s = [],
    f = 1,
    d = null,
    h = 3,
    k = !1,
    S = !1,
    x = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= N)
        r(s), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(s);
    }
  }
  function E(N) {
    if (((x = !1), m(N), !S))
      if (n(u) !== null) (S = !0), Ot(L);
      else {
        var A = n(s);
        A !== null && It(E, A.startTime - N);
      }
  }
  function L(N, A) {
    (S = !1), x && ((x = !1), p(R), (R = -1)), (k = !0);
    var $ = h;
    try {
      for (
        m(A), d = n(u);
        d !== null && (!(d.expirationTime > A) || (N && !Y()));

      ) {
        var J = d.callback;
        if (typeof J == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var q = J(d.expirationTime <= A);
          (A = e.unstable_now()),
            typeof q == "function" ? (d.callback = q) : d === n(u) && r(u),
            m(A);
        } else r(u);
        d = n(u);
      }
      if (d !== null) var ut = !0;
      else {
        var Ve = n(s);
        Ve !== null && It(E, Ve.startTime - A), (ut = !1);
      }
      return ut;
    } finally {
      (d = null), (h = $), (k = !1);
    }
  }
  var M = !1,
    v = null,
    R = -1,
    F = 5,
    D = -1;
  function Y() {
    return !(e.unstable_now() - D < F);
  }
  function fe() {
    if (v !== null) {
      var N = e.unstable_now();
      D = N;
      var A = !0;
      try {
        A = v(!0, N);
      } finally {
        A ? ie() : ((M = !1), (v = null));
      }
    } else M = !1;
  }
  var ie;
  if (typeof c == "function")
    ie = function () {
      c(fe);
    };
  else if (typeof MessageChannel < "u") {
    var xe = new MessageChannel(),
      at = xe.port2;
    (xe.port1.onmessage = fe),
      (ie = function () {
        at.postMessage(null);
      });
  } else
    ie = function () {
      T(fe, 0);
    };
  function Ot(N) {
    (v = N), M || ((M = !0), ie());
  }
  function It(N, A) {
    R = T(function () {
      N(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || k || ((S = !0), Ot(L));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (F = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var $ = h;
      h = A;
      try {
        return N();
      } finally {
        h = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, A) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var $ = h;
      h = N;
      try {
        return A();
      } finally {
        h = $;
      }
    }),
    (e.unstable_scheduleCallback = function (N, A, $) {
      var J = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? J + $ : J))
          : ($ = J),
        N)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = $ + q),
        (N = {
          id: f++,
          callback: A,
          priorityLevel: N,
          startTime: $,
          expirationTime: q,
          sortIndex: -1,
        }),
        $ > J
          ? ((N.sortIndex = $),
            t(s, N),
            n(u) === null &&
              N === n(s) &&
              (x ? (p(R), (R = -1)) : (x = !0), It(E, $ - J)))
          : ((N.sortIndex = q), t(u, N), S || k || ((S = !0), Ot(L))),
        N
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (N) {
      var A = h;
      return function () {
        var $ = h;
        h = A;
        try {
          return N.apply(this, arguments);
        } finally {
          h = $;
        }
      };
    });
})(Rc);
Lc.exports = Rc;
var Fh = Lc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uh = P,
  Ze = Fh;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Tc = new Set(),
  Kr = {};
function _n(e, t) {
  er(e, t), er(e + "Capture", t);
}
function er(e, t) {
  for (Kr[e] = t, e = 0; e < t.length; e++) Tc.add(t[e]);
}
var Lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Co = Object.prototype.hasOwnProperty,
  Ah =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $u = {},
  Vu = {};
function Bh(e) {
  return Co.call(Vu, e)
    ? !0
    : Co.call($u, e)
      ? !1
      : Ah.test(e)
        ? (Vu[e] = !0)
        : (($u[e] = !0), !1);
}
function $h(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Vh(e, t, n, r) {
  if (t === null || typeof t > "u" || $h(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ie(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Ie(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  _e[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  _e[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  _e[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    _e[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  _e[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  _e[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  _e[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  _e[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ja = /[\-:]([a-z])/g;
function Na(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ja, Na);
    _e[t] = new Ie(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ja, Na);
    _e[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ja, Na);
  _e[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  _e[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Ie(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  _e[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function La(e, t, n, r) {
  var l = _e.hasOwnProperty(t) ? _e[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Vh(t, n, l, r) && (n = null),
    r || l === null
      ? Bh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zt = Uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Cl = Symbol.for("react.element"),
  zn = Symbol.for("react.portal"),
  On = Symbol.for("react.fragment"),
  Ra = Symbol.for("react.strict_mode"),
  Po = Symbol.for("react.profiler"),
  Mc = Symbol.for("react.provider"),
  Dc = Symbol.for("react.context"),
  Ta = Symbol.for("react.forward_ref"),
  _o = Symbol.for("react.suspense"),
  jo = Symbol.for("react.suspense_list"),
  Ma = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  zc = Symbol.for("react.offscreen"),
  Hu = Symbol.iterator;
function wr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Hu && e[Hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  Yi;
function Tr(e) {
  if (Yi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yi = (t && t[1]) || "";
    }
  return (
    `
` +
    Yi +
    e
  );
}
var Zi = !1;
function Xi(e, t) {
  if (!e || Zi) return "";
  Zi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && l[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (l[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || l[o] !== i[a])) {
                var u =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Zi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Tr(e) : "";
}
function Hh(e) {
  switch (e.tag) {
    case 5:
      return Tr(e.type);
    case 16:
      return Tr("Lazy");
    case 13:
      return Tr("Suspense");
    case 19:
      return Tr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xi(e.type, !1)), e;
    case 11:
      return (e = Xi(e.type.render, !1)), e;
    case 1:
      return (e = Xi(e.type, !0)), e;
    default:
      return "";
  }
}
function No(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case On:
      return "Fragment";
    case zn:
      return "Portal";
    case Po:
      return "Profiler";
    case Ra:
      return "StrictMode";
    case _o:
      return "Suspense";
    case jo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Dc:
        return (e.displayName || "Context") + ".Consumer";
      case Mc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ta:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ma:
        return (
          (t = e.displayName || null), t !== null ? t : No(e.type) || "Memo"
        );
      case Vt:
        (t = e._payload), (e = e._init);
        try {
          return No(e(t));
        } catch {}
    }
  return null;
}
function Wh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return No(t);
    case 8:
      return t === Ra ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function nn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Oc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Qh(e) {
  var t = Oc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Pl(e) {
  e._valueTracker || (e._valueTracker = Qh(e));
}
function Ic(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Oc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ei(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Lo(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Wu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Fc(e, t) {
  (t = t.checked), t != null && La(e, "checked", t, !1);
}
function Ro(e, t) {
  Fc(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? To(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && To(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Qu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function To(e, t, n) {
  (t !== "number" || ei(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mr = Array.isArray;
function Yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Mo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ku(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function Uc(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Yu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ac(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Do(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ac(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var _l,
  Bc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        _l = _l || document.createElement("div"),
          _l.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = _l.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Or = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Kh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Or).forEach(function (e) {
  Kh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Or[t] = Or[e]);
  });
});
function $c(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Or.hasOwnProperty(e) && Or[e])
      ? ("" + t).trim()
      : t + "px";
}
function Vc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = $c(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Yh = se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function zo(e, t) {
  if (t) {
    if (Yh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Oo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Io = null;
function Da(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Fo = null,
  Zn = null,
  Xn = null;
function Zu(e) {
  if ((e = hl(e))) {
    if (typeof Fo != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Ti(t)), Fo(e.stateNode, e.type, t));
  }
}
function Hc(e) {
  Zn ? (Xn ? Xn.push(e) : (Xn = [e])) : (Zn = e);
}
function Wc() {
  if (Zn) {
    var e = Zn,
      t = Xn;
    if (((Xn = Zn = null), Zu(e), t)) for (e = 0; e < t.length; e++) Zu(t[e]);
  }
}
function Qc(e, t) {
  return e(t);
}
function Kc() {}
var Gi = !1;
function Yc(e, t, n) {
  if (Gi) return e(t, n);
  Gi = !0;
  try {
    return Qc(e, t, n);
  } finally {
    (Gi = !1), (Zn !== null || Xn !== null) && (Kc(), Wc());
  }
}
function Zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ti(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Uo = !1;
if (Lt)
  try {
    var xr = {};
    Object.defineProperty(xr, "passive", {
      get: function () {
        Uo = !0;
      },
    }),
      window.addEventListener("test", xr, xr),
      window.removeEventListener("test", xr, xr);
  } catch {
    Uo = !1;
  }
function Zh(e, t, n, r, l, i, o, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var Ir = !1,
  ti = null,
  ni = !1,
  Ao = null,
  Xh = {
    onError: function (e) {
      (Ir = !0), (ti = e);
    },
  };
function Gh(e, t, n, r, l, i, o, a, u) {
  (Ir = !1), (ti = null), Zh.apply(Xh, arguments);
}
function Jh(e, t, n, r, l, i, o, a, u) {
  if ((Gh.apply(this, arguments), Ir)) {
    if (Ir) {
      var s = ti;
      (Ir = !1), (ti = null);
    } else throw Error(_(198));
    ni || ((ni = !0), (Ao = s));
  }
}
function jn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Xu(e) {
  if (jn(e) !== e) throw Error(_(188));
}
function qh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Xu(l), e;
        if (i === r) return Xu(l), t;
        i = i.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, a = l.child; a; ) {
        if (a === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function Xc(e) {
  return (e = qh(e)), e !== null ? Gc(e) : null;
}
function Gc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jc = Ze.unstable_scheduleCallback,
  Gu = Ze.unstable_cancelCallback,
  bh = Ze.unstable_shouldYield,
  ep = Ze.unstable_requestPaint,
  de = Ze.unstable_now,
  tp = Ze.unstable_getCurrentPriorityLevel,
  za = Ze.unstable_ImmediatePriority,
  qc = Ze.unstable_UserBlockingPriority,
  ri = Ze.unstable_NormalPriority,
  np = Ze.unstable_LowPriority,
  bc = Ze.unstable_IdlePriority,
  ji = null,
  St = null;
function rp(e) {
  if (St && typeof St.onCommitFiberRoot == "function")
    try {
      St.onCommitFiberRoot(ji, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : op,
  lp = Math.log,
  ip = Math.LN2;
function op(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((lp(e) / ip) | 0)) | 0;
}
var jl = 64,
  Nl = 4194304;
function Dr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function li(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~l;
    a !== 0 ? (r = Dr(a)) : ((i &= o), i !== 0 && (r = Dr(i)));
  } else (o = n & ~l), o !== 0 ? (r = Dr(o)) : i !== 0 && (r = Dr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function ap(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function up(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - pt(i),
      a = 1 << o,
      u = l[o];
    u === -1
      ? (!(a & n) || a & r) && (l[o] = ap(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Bo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ef() {
  var e = jl;
  return (jl <<= 1), !(jl & 4194240) && (jl = 64), e;
}
function Ji(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
function sp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - pt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Oa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var G = 0;
function tf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var nf,
  Ia,
  rf,
  lf,
  of,
  $o = !1,
  Ll = [],
  Zt = null,
  Xt = null,
  Gt = null,
  Xr = new Map(),
  Gr = new Map(),
  Wt = [],
  cp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Ju(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      Xt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      Xr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gr.delete(t.pointerId);
  }
}
function Sr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = hl(t)), t !== null && Ia(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function fp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Zt = Sr(Zt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Xt = Sr(Xt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Gt = Sr(Gt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Xr.set(i, Sr(Xr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Gr.set(i, Sr(Gr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function af(e) {
  var t = hn(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zc(n)), t !== null)) {
          (e.blockedOn = t),
            of(e.priority, function () {
              rf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Hl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Io = r), n.target.dispatchEvent(r), (Io = null);
    } else return (t = hl(n)), t !== null && Ia(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qu(e, t, n) {
  Hl(e) && n.delete(t);
}
function dp() {
  ($o = !1),
    Zt !== null && Hl(Zt) && (Zt = null),
    Xt !== null && Hl(Xt) && (Xt = null),
    Gt !== null && Hl(Gt) && (Gt = null),
    Xr.forEach(qu),
    Gr.forEach(qu);
}
function kr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $o ||
      (($o = !0),
      Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, dp)));
}
function Jr(e) {
  function t(l) {
    return kr(l, e);
  }
  if (0 < Ll.length) {
    kr(Ll[0], e);
    for (var n = 1; n < Ll.length; n++) {
      var r = Ll[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Zt !== null && kr(Zt, e),
      Xt !== null && kr(Xt, e),
      Gt !== null && kr(Gt, e),
      Xr.forEach(t),
      Gr.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    af(n), n.blockedOn === null && Wt.shift();
}
var Gn = zt.ReactCurrentBatchConfig,
  ii = !0;
function hp(e, t, n, r) {
  var l = G,
    i = Gn.transition;
  Gn.transition = null;
  try {
    (G = 1), Fa(e, t, n, r);
  } finally {
    (G = l), (Gn.transition = i);
  }
}
function pp(e, t, n, r) {
  var l = G,
    i = Gn.transition;
  Gn.transition = null;
  try {
    (G = 4), Fa(e, t, n, r);
  } finally {
    (G = l), (Gn.transition = i);
  }
}
function Fa(e, t, n, r) {
  if (ii) {
    var l = Vo(e, t, n, r);
    if (l === null) ao(e, t, r, oi, n), Ju(e, r);
    else if (fp(l, e, t, n, r)) r.stopPropagation();
    else if ((Ju(e, r), t & 4 && -1 < cp.indexOf(e))) {
      for (; l !== null; ) {
        var i = hl(l);
        if (
          (i !== null && nf(i),
          (i = Vo(e, t, n, r)),
          i === null && ao(e, t, r, oi, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ao(e, t, r, null, n);
  }
}
var oi = null;
function Vo(e, t, n, r) {
  if (((oi = null), (e = Da(r)), (e = hn(e)), e !== null))
    if (((t = jn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (oi = e), null;
}
function uf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (tp()) {
        case za:
          return 1;
        case qc:
          return 4;
        case ri:
        case np:
          return 16;
        case bc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kt = null,
  Ua = null,
  Wl = null;
function sf() {
  if (Wl) return Wl;
  var e,
    t = Ua,
    n = t.length,
    r,
    l = "value" in Kt ? Kt.value : Kt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Wl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ql(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Rl() {
  return !0;
}
function bu() {
  return !1;
}
function Ge(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Rl
        : bu),
      (this.isPropagationStopped = bu),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Rl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Rl));
      },
      persist: function () {},
      isPersistent: Rl,
    }),
    t
  );
}
var cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Aa = Ge(cr),
  dl = se({}, cr, { view: 0, detail: 0 }),
  mp = Ge(dl),
  qi,
  bi,
  Er,
  Ni = se({}, dl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ba,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Er &&
            (Er && e.type === "mousemove"
              ? ((qi = e.screenX - Er.screenX), (bi = e.screenY - Er.screenY))
              : (bi = qi = 0),
            (Er = e)),
          qi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bi;
    },
  }),
  es = Ge(Ni),
  vp = se({}, Ni, { dataTransfer: 0 }),
  gp = Ge(vp),
  yp = se({}, dl, { relatedTarget: 0 }),
  eo = Ge(yp),
  wp = se({}, cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xp = Ge(wp),
  Sp = se({}, cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  kp = Ge(Sp),
  Ep = se({}, cr, { data: 0 }),
  ts = Ge(Ep),
  Cp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Pp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  _p = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _p[e]) ? !!t[e] : !1;
}
function Ba() {
  return jp;
}
var Np = se({}, dl, {
    key: function (e) {
      if (e.key) {
        var t = Cp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ql(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Pp[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ba,
    charCode: function (e) {
      return e.type === "keypress" ? Ql(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ql(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Lp = Ge(Np),
  Rp = se({}, Ni, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ns = Ge(Rp),
  Tp = se({}, dl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ba,
  }),
  Mp = Ge(Tp),
  Dp = se({}, cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zp = Ge(Dp),
  Op = se({}, Ni, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ip = Ge(Op),
  Fp = [9, 13, 27, 32],
  $a = Lt && "CompositionEvent" in window,
  Fr = null;
Lt && "documentMode" in document && (Fr = document.documentMode);
var Up = Lt && "TextEvent" in window && !Fr,
  cf = Lt && (!$a || (Fr && 8 < Fr && 11 >= Fr)),
  rs = " ",
  ls = !1;
function ff(e, t) {
  switch (e) {
    case "keyup":
      return Fp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function df(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var In = !1;
function Ap(e, t) {
  switch (e) {
    case "compositionend":
      return df(t);
    case "keypress":
      return t.which !== 32 ? null : ((ls = !0), rs);
    case "textInput":
      return (e = t.data), e === rs && ls ? null : e;
    default:
      return null;
  }
}
function Bp(e, t) {
  if (In)
    return e === "compositionend" || (!$a && ff(e, t))
      ? ((e = sf()), (Wl = Ua = Kt = null), (In = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return cf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $p = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function is(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$p[e.type] : t === "textarea";
}
function hf(e, t, n, r) {
  Hc(r),
    (t = ai(t, "onChange")),
    0 < t.length &&
      ((n = new Aa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ur = null,
  qr = null;
function Vp(e) {
  Cf(e, 0);
}
function Li(e) {
  var t = An(e);
  if (Ic(t)) return e;
}
function Hp(e, t) {
  if (e === "change") return t;
}
var pf = !1;
if (Lt) {
  var to;
  if (Lt) {
    var no = "oninput" in document;
    if (!no) {
      var os = document.createElement("div");
      os.setAttribute("oninput", "return;"),
        (no = typeof os.oninput == "function");
    }
    to = no;
  } else to = !1;
  pf = to && (!document.documentMode || 9 < document.documentMode);
}
function as() {
  Ur && (Ur.detachEvent("onpropertychange", mf), (qr = Ur = null));
}
function mf(e) {
  if (e.propertyName === "value" && Li(qr)) {
    var t = [];
    hf(t, qr, e, Da(e)), Yc(Vp, t);
  }
}
function Wp(e, t, n) {
  e === "focusin"
    ? (as(), (Ur = t), (qr = n), Ur.attachEvent("onpropertychange", mf))
    : e === "focusout" && as();
}
function Qp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Li(qr);
}
function Kp(e, t) {
  if (e === "click") return Li(t);
}
function Yp(e, t) {
  if (e === "input" || e === "change") return Li(t);
}
function Zp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var vt = typeof Object.is == "function" ? Object.is : Zp;
function br(e, t) {
  if (vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Co.call(t, l) || !vt(e[l], t[l])) return !1;
  }
  return !0;
}
function us(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ss(e, t) {
  var n = us(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = us(n);
  }
}
function vf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? vf(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function gf() {
  for (var e = window, t = ei(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ei(e.document);
  }
  return t;
}
function Va(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Xp(e) {
  var t = gf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Va(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ss(n, i));
        var o = ss(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Gp = Lt && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  Ho = null,
  Ar = null,
  Wo = !1;
function cs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wo ||
    Fn == null ||
    Fn !== ei(r) ||
    ((r = Fn),
    "selectionStart" in r && Va(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ar && br(Ar, r)) ||
      ((Ar = r),
      (r = ai(Ho, "onSelect")),
      0 < r.length &&
        ((t = new Aa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Fn))));
}
function Tl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Un = {
    animationend: Tl("Animation", "AnimationEnd"),
    animationiteration: Tl("Animation", "AnimationIteration"),
    animationstart: Tl("Animation", "AnimationStart"),
    transitionend: Tl("Transition", "TransitionEnd"),
  },
  ro = {},
  yf = {};
Lt &&
  ((yf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Un.animationend.animation,
    delete Un.animationiteration.animation,
    delete Un.animationstart.animation),
  "TransitionEvent" in window || delete Un.transitionend.transition);
function Ri(e) {
  if (ro[e]) return ro[e];
  if (!Un[e]) return e;
  var t = Un[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yf) return (ro[e] = t[n]);
  return e;
}
var wf = Ri("animationend"),
  xf = Ri("animationiteration"),
  Sf = Ri("animationstart"),
  kf = Ri("transitionend"),
  Ef = new Map(),
  fs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ln(e, t) {
  Ef.set(e, t), _n(t, [e]);
}
for (var lo = 0; lo < fs.length; lo++) {
  var io = fs[lo],
    Jp = io.toLowerCase(),
    qp = io[0].toUpperCase() + io.slice(1);
  ln(Jp, "on" + qp);
}
ln(wf, "onAnimationEnd");
ln(xf, "onAnimationIteration");
ln(Sf, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(kf, "onTransitionEnd");
er("onMouseEnter", ["mouseout", "mouseover"]);
er("onMouseLeave", ["mouseout", "mouseover"]);
er("onPointerEnter", ["pointerout", "pointerover"]);
er("onPointerLeave", ["pointerout", "pointerover"]);
_n(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
_n(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
_n(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
_n(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var zr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  bp = new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));
function ds(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Jh(r, t, void 0, e), (e.currentTarget = null);
}
function Cf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          ds(l, a, s), (i = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          ds(l, a, s), (i = u);
        }
    }
  }
  if (ni) throw ((e = Ao), (ni = !1), (Ao = null), e);
}
function ee(e, t) {
  var n = t[Xo];
  n === void 0 && (n = t[Xo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Pf(t, e, 2, !1), n.add(r));
}
function oo(e, t, n) {
  var r = 0;
  t && (r |= 4), Pf(n, e, r, t);
}
var Ml = "_reactListening" + Math.random().toString(36).slice(2);
function el(e) {
  if (!e[Ml]) {
    (e[Ml] = !0),
      Tc.forEach(function (n) {
        n !== "selectionchange" && (bp.has(n) || oo(n, !1, e), oo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ml] || ((t[Ml] = !0), oo("selectionchange", !1, t));
  }
}
function Pf(e, t, n, r) {
  switch (uf(t)) {
    case 1:
      var l = hp;
      break;
    case 4:
      l = pp;
      break;
    default:
      l = Fa;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Uo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function ao(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = hn(a)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Yc(function () {
    var s = i,
      f = Da(n),
      d = [];
    e: {
      var h = Ef.get(e);
      if (h !== void 0) {
        var k = Aa,
          S = e;
        switch (e) {
          case "keypress":
            if (Ql(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Lp;
            break;
          case "focusin":
            (S = "focus"), (k = eo);
            break;
          case "focusout":
            (S = "blur"), (k = eo);
            break;
          case "beforeblur":
          case "afterblur":
            k = eo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = es;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = gp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Mp;
            break;
          case wf:
          case xf:
          case Sf:
            k = xp;
            break;
          case kf:
            k = zp;
            break;
          case "scroll":
            k = mp;
            break;
          case "wheel":
            k = Ip;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = kp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = ns;
        }
        var x = (t & 4) !== 0,
          T = !x && e === "scroll",
          p = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var c = s, m; c !== null; ) {
          m = c;
          var E = m.stateNode;
          if (
            (m.tag === 5 &&
              E !== null &&
              ((m = E),
              p !== null && ((E = Zr(c, p)), E != null && x.push(tl(c, E, m)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((h = new k(h, S, null, n, f)), d.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Io &&
            (S = n.relatedTarget || n.fromElement) &&
            (hn(S) || S[Rt]))
        )
          break e;
        if (
          (k || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          k
            ? ((S = n.relatedTarget || n.toElement),
              (k = s),
              (S = S ? hn(S) : null),
              S !== null &&
                ((T = jn(S)), S !== T || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((k = null), (S = s)),
          k !== S)
        ) {
          if (
            ((x = es),
            (E = "onMouseLeave"),
            (p = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = ns),
              (E = "onPointerLeave"),
              (p = "onPointerEnter"),
              (c = "pointer")),
            (T = k == null ? h : An(k)),
            (m = S == null ? h : An(S)),
            (h = new x(E, c + "leave", k, n, f)),
            (h.target = T),
            (h.relatedTarget = m),
            (E = null),
            hn(f) === s &&
              ((x = new x(p, c + "enter", S, n, f)),
              (x.target = m),
              (x.relatedTarget = T),
              (E = x)),
            (T = E),
            k && S)
          )
            t: {
              for (x = k, p = S, c = 0, m = x; m; m = Mn(m)) c++;
              for (m = 0, E = p; E; E = Mn(E)) m++;
              for (; 0 < c - m; ) (x = Mn(x)), c--;
              for (; 0 < m - c; ) (p = Mn(p)), m--;
              for (; c--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t;
                (x = Mn(x)), (p = Mn(p));
              }
              x = null;
            }
          else x = null;
          k !== null && hs(d, h, k, x, !1),
            S !== null && T !== null && hs(d, T, S, x, !0);
        }
      }
      e: {
        if (
          ((h = s ? An(s) : window),
          (k = h.nodeName && h.nodeName.toLowerCase()),
          k === "select" || (k === "input" && h.type === "file"))
        )
          var L = Hp;
        else if (is(h))
          if (pf) L = Yp;
          else {
            L = Qp;
            var M = Wp;
          }
        else
          (k = h.nodeName) &&
            k.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (L = Kp);
        if (L && (L = L(e, s))) {
          hf(d, L, n, f);
          break e;
        }
        M && M(e, h, s),
          e === "focusout" &&
            (M = h._wrapperState) &&
            M.controlled &&
            h.type === "number" &&
            To(h, "number", h.value);
      }
      switch (((M = s ? An(s) : window), e)) {
        case "focusin":
          (is(M) || M.contentEditable === "true") &&
            ((Fn = M), (Ho = s), (Ar = null));
          break;
        case "focusout":
          Ar = Ho = Fn = null;
          break;
        case "mousedown":
          Wo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Wo = !1), cs(d, n, f);
          break;
        case "selectionchange":
          if (Gp) break;
        case "keydown":
        case "keyup":
          cs(d, n, f);
      }
      var v;
      if ($a)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        In
          ? ff(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (cf &&
          n.locale !== "ko" &&
          (In || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && In && (v = sf())
            : ((Kt = f),
              (Ua = "value" in Kt ? Kt.value : Kt.textContent),
              (In = !0))),
        (M = ai(s, R)),
        0 < M.length &&
          ((R = new ts(R, e, null, n, f)),
          d.push({ event: R, listeners: M }),
          v ? (R.data = v) : ((v = df(n)), v !== null && (R.data = v)))),
        (v = Up ? Ap(e, n) : Bp(e, n)) &&
          ((s = ai(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new ts("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: s }),
            (f.data = v)));
    }
    Cf(d, t);
  });
}
function tl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ai(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Zr(e, n)),
      i != null && r.unshift(tl(e, i, l)),
      (i = Zr(e, t)),
      i != null && r.push(tl(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function hs(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Zr(n, i)), u != null && o.unshift(tl(n, u, a)))
        : l || ((u = Zr(n, i)), u != null && o.push(tl(n, u, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var e1 = /\r\n?/g,
  t1 = /\u0000|\uFFFD/g;
function ps(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      e1,
      `
`,
    )
    .replace(t1, "");
}
function Dl(e, t, n) {
  if (((t = ps(t)), ps(e) !== t && n)) throw Error(_(425));
}
function ui() {}
var Qo = null,
  Ko = null;
function Yo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Zo = typeof setTimeout == "function" ? setTimeout : void 0,
  n1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ms = typeof Promise == "function" ? Promise : void 0,
  r1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ms < "u"
        ? function (e) {
            return ms.resolve(null).then(e).catch(l1);
          }
        : Zo;
function l1(e) {
  setTimeout(function () {
    throw e;
  });
}
function uo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Jr(t);
}
function Jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function vs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fr = Math.random().toString(36).slice(2),
  xt = "__reactFiber$" + fr,
  nl = "__reactProps$" + fr,
  Rt = "__reactContainer$" + fr,
  Xo = "__reactEvents$" + fr,
  i1 = "__reactListeners$" + fr,
  o1 = "__reactHandles$" + fr;
function hn(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rt] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = vs(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = vs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hl(e) {
  return (
    (e = e[xt] || e[Rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function An(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Ti(e) {
  return e[nl] || null;
}
var Go = [],
  Bn = -1;
function on(e) {
  return { current: e };
}
function te(e) {
  0 > Bn || ((e.current = Go[Bn]), (Go[Bn] = null), Bn--);
}
function b(e, t) {
  Bn++, (Go[Bn] = e.current), (e.current = t);
}
var rn = {},
  Re = on(rn),
  Ae = on(!1),
  xn = rn;
function tr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function si() {
  te(Ae), te(Re);
}
function gs(e, t, n) {
  if (Re.current !== rn) throw Error(_(168));
  b(Re, t), b(Ae, n);
}
function _f(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(_(108, Wh(e) || "Unknown", l));
  return se({}, n, r);
}
function ci(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (xn = Re.current),
    b(Re, e),
    b(Ae, Ae.current),
    !0
  );
}
function ys(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = _f(e, t, xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Ae),
      te(Re),
      b(Re, e))
    : te(Ae),
    b(Ae, n);
}
var Ct = null,
  Mi = !1,
  so = !1;
function jf(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function a1(e) {
  (Mi = !0), jf(e);
}
function an() {
  if (!so && Ct !== null) {
    so = !0;
    var e = 0,
      t = G;
    try {
      var n = Ct;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ct = null), (Mi = !1);
    } catch (l) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), Jc(za, an), l);
    } finally {
      (G = t), (so = !1);
    }
  }
  return null;
}
var $n = [],
  Vn = 0,
  fi = null,
  di = 0,
  et = [],
  tt = 0,
  Sn = null,
  Pt = 1,
  _t = "";
function fn(e, t) {
  ($n[Vn++] = di), ($n[Vn++] = fi), (fi = e), (di = t);
}
function Nf(e, t, n) {
  (et[tt++] = Pt), (et[tt++] = _t), (et[tt++] = Sn), (Sn = e);
  var r = Pt;
  e = _t;
  var l = 32 - pt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - pt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Pt = (1 << (32 - pt(t) + l)) | (n << l) | r),
      (_t = i + e);
  } else (Pt = (1 << i) | (n << l) | r), (_t = e);
}
function Ha(e) {
  e.return !== null && (fn(e, 1), Nf(e, 1, 0));
}
function Wa(e) {
  for (; e === fi; )
    (fi = $n[--Vn]), ($n[Vn] = null), (di = $n[--Vn]), ($n[Vn] = null);
  for (; e === Sn; )
    (Sn = et[--tt]),
      (et[tt] = null),
      (_t = et[--tt]),
      (et[tt] = null),
      (Pt = et[--tt]),
      (et[tt] = null);
}
var Ye = null,
  Ke = null,
  le = !1,
  ht = null;
function Lf(e, t) {
  var n = rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ws(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = Jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Sn !== null ? { id: Pt, overflow: _t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Jo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qo(e) {
  if (le) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!ws(e, t)) {
        if (Jo(e)) throw Error(_(418));
        t = Jt(n.nextSibling);
        var r = Ye;
        t && ws(e, t)
          ? Lf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e));
      }
    } else {
      if (Jo(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ye = e);
    }
  }
}
function xs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function zl(e) {
  if (e !== Ye) return !1;
  if (!le) return xs(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Yo(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Jo(e)) throw (Rf(), Error(_(418)));
    for (; t; ) Lf(e, t), (t = Jt(t.nextSibling));
  }
  if ((xs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Rf() {
  for (var e = Ke; e; ) e = Jt(e.nextSibling);
}
function nr() {
  (Ke = Ye = null), (le = !1);
}
function Qa(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var u1 = zt.ReactCurrentBatchConfig;
function Cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var a = l.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Ol(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Ss(e) {
  var t = e._init;
  return t(e._payload);
}
function Tf(e) {
  function t(p, c) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [c]), (p.flags |= 16)) : m.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), (c = c.sibling);
    return null;
  }
  function r(p, c) {
    for (p = new Map(); c !== null; )
      c.key !== null ? p.set(c.key, c) : p.set(c.index, c), (c = c.sibling);
    return p;
  }
  function l(p, c) {
    return (p = tn(p, c)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, c, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((p.flags |= 2), c) : m)
            : ((p.flags |= 2), c))
        : ((p.flags |= 1048576), c)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, c, m, E) {
    return c === null || c.tag !== 6
      ? ((c = go(m, p.mode, E)), (c.return = p), c)
      : ((c = l(c, m)), (c.return = p), c);
  }
  function u(p, c, m, E) {
    var L = m.type;
    return L === On
      ? f(p, c, m.props.children, E, m.key)
      : c !== null &&
          (c.elementType === L ||
            (typeof L == "object" &&
              L !== null &&
              L.$$typeof === Vt &&
              Ss(L) === c.type))
        ? ((E = l(c, m.props)), (E.ref = Cr(p, c, m)), (E.return = p), E)
        : ((E = ql(m.type, m.key, m.props, null, p.mode, E)),
          (E.ref = Cr(p, c, m)),
          (E.return = p),
          E);
  }
  function s(p, c, m, E) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = yo(m, p.mode, E)), (c.return = p), c)
      : ((c = l(c, m.children || [])), (c.return = p), c);
  }
  function f(p, c, m, E, L) {
    return c === null || c.tag !== 7
      ? ((c = wn(m, p.mode, E, L)), (c.return = p), c)
      : ((c = l(c, m)), (c.return = p), c);
  }
  function d(p, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = go("" + c, p.mode, m)), (c.return = p), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Cl:
          return (
            (m = ql(c.type, c.key, c.props, null, p.mode, m)),
            (m.ref = Cr(p, null, c)),
            (m.return = p),
            m
          );
        case zn:
          return (c = yo(c, p.mode, m)), (c.return = p), c;
        case Vt:
          var E = c._init;
          return d(p, E(c._payload), m);
      }
      if (Mr(c) || wr(c))
        return (c = wn(c, p.mode, m, null)), (c.return = p), c;
      Ol(p, c);
    }
    return null;
  }
  function h(p, c, m, E) {
    var L = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return L !== null ? null : a(p, c, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Cl:
          return m.key === L ? u(p, c, m, E) : null;
        case zn:
          return m.key === L ? s(p, c, m, E) : null;
        case Vt:
          return (L = m._init), h(p, c, L(m._payload), E);
      }
      if (Mr(m) || wr(m)) return L !== null ? null : f(p, c, m, E, null);
      Ol(p, m);
    }
    return null;
  }
  function k(p, c, m, E, L) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (p = p.get(m) || null), a(c, p, "" + E, L);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Cl:
          return (p = p.get(E.key === null ? m : E.key) || null), u(c, p, E, L);
        case zn:
          return (p = p.get(E.key === null ? m : E.key) || null), s(c, p, E, L);
        case Vt:
          var M = E._init;
          return k(p, c, m, M(E._payload), L);
      }
      if (Mr(E) || wr(E)) return (p = p.get(m) || null), f(c, p, E, L, null);
      Ol(c, E);
    }
    return null;
  }
  function S(p, c, m, E) {
    for (
      var L = null, M = null, v = c, R = (c = 0), F = null;
      v !== null && R < m.length;
      R++
    ) {
      v.index > R ? ((F = v), (v = null)) : (F = v.sibling);
      var D = h(p, v, m[R], E);
      if (D === null) {
        v === null && (v = F);
        break;
      }
      e && v && D.alternate === null && t(p, v),
        (c = i(D, c, R)),
        M === null ? (L = D) : (M.sibling = D),
        (M = D),
        (v = F);
    }
    if (R === m.length) return n(p, v), le && fn(p, R), L;
    if (v === null) {
      for (; R < m.length; R++)
        (v = d(p, m[R], E)),
          v !== null &&
            ((c = i(v, c, R)), M === null ? (L = v) : (M.sibling = v), (M = v));
      return le && fn(p, R), L;
    }
    for (v = r(p, v); R < m.length; R++)
      (F = k(v, p, R, m[R], E)),
        F !== null &&
          (e && F.alternate !== null && v.delete(F.key === null ? R : F.key),
          (c = i(F, c, R)),
          M === null ? (L = F) : (M.sibling = F),
          (M = F));
    return (
      e &&
        v.forEach(function (Y) {
          return t(p, Y);
        }),
      le && fn(p, R),
      L
    );
  }
  function x(p, c, m, E) {
    var L = wr(m);
    if (typeof L != "function") throw Error(_(150));
    if (((m = L.call(m)), m == null)) throw Error(_(151));
    for (
      var M = (L = null), v = c, R = (c = 0), F = null, D = m.next();
      v !== null && !D.done;
      R++, D = m.next()
    ) {
      v.index > R ? ((F = v), (v = null)) : (F = v.sibling);
      var Y = h(p, v, D.value, E);
      if (Y === null) {
        v === null && (v = F);
        break;
      }
      e && v && Y.alternate === null && t(p, v),
        (c = i(Y, c, R)),
        M === null ? (L = Y) : (M.sibling = Y),
        (M = Y),
        (v = F);
    }
    if (D.done) return n(p, v), le && fn(p, R), L;
    if (v === null) {
      for (; !D.done; R++, D = m.next())
        (D = d(p, D.value, E)),
          D !== null &&
            ((c = i(D, c, R)), M === null ? (L = D) : (M.sibling = D), (M = D));
      return le && fn(p, R), L;
    }
    for (v = r(p, v); !D.done; R++, D = m.next())
      (D = k(v, p, R, D.value, E)),
        D !== null &&
          (e && D.alternate !== null && v.delete(D.key === null ? R : D.key),
          (c = i(D, c, R)),
          M === null ? (L = D) : (M.sibling = D),
          (M = D));
    return (
      e &&
        v.forEach(function (fe) {
          return t(p, fe);
        }),
      le && fn(p, R),
      L
    );
  }
  function T(p, c, m, E) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === On &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Cl:
          e: {
            for (var L = m.key, M = c; M !== null; ) {
              if (M.key === L) {
                if (((L = m.type), L === On)) {
                  if (M.tag === 7) {
                    n(p, M.sibling),
                      (c = l(M, m.props.children)),
                      (c.return = p),
                      (p = c);
                    break e;
                  }
                } else if (
                  M.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === Vt &&
                    Ss(L) === M.type)
                ) {
                  n(p, M.sibling),
                    (c = l(M, m.props)),
                    (c.ref = Cr(p, M, m)),
                    (c.return = p),
                    (p = c);
                  break e;
                }
                n(p, M);
                break;
              } else t(p, M);
              M = M.sibling;
            }
            m.type === On
              ? ((c = wn(m.props.children, p.mode, E, m.key)),
                (c.return = p),
                (p = c))
              : ((E = ql(m.type, m.key, m.props, null, p.mode, E)),
                (E.ref = Cr(p, c, m)),
                (E.return = p),
                (p = E));
          }
          return o(p);
        case zn:
          e: {
            for (M = m.key; c !== null; ) {
              if (c.key === M)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(p, c.sibling),
                    (c = l(c, m.children || [])),
                    (c.return = p),
                    (p = c);
                  break e;
                } else {
                  n(p, c);
                  break;
                }
              else t(p, c);
              c = c.sibling;
            }
            (c = yo(m, p.mode, E)), (c.return = p), (p = c);
          }
          return o(p);
        case Vt:
          return (M = m._init), T(p, c, M(m._payload), E);
      }
      if (Mr(m)) return S(p, c, m, E);
      if (wr(m)) return x(p, c, m, E);
      Ol(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(p, c.sibling), (c = l(c, m)), (c.return = p), (p = c))
          : (n(p, c), (c = go(m, p.mode, E)), (c.return = p), (p = c)),
        o(p))
      : n(p, c);
  }
  return T;
}
var rr = Tf(!0),
  Mf = Tf(!1),
  hi = on(null),
  pi = null,
  Hn = null,
  Ka = null;
function Ya() {
  Ka = Hn = pi = null;
}
function Za(e) {
  var t = hi.current;
  te(hi), (e._currentValue = t);
}
function bo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jn(e, t) {
  (pi = e),
    (Ka = Hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if (Ka !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (pi === null) throw Error(_(308));
      (Hn = e), (pi.dependencies = { lanes: 0, firstContext: e });
    } else Hn = Hn.next = e;
  return t;
}
var pn = null;
function Xa(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function Df(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Xa(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  );
}
function Tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ht = !1;
function Ga(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function jt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Xa(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  );
}
function Kl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oa(e, n);
  }
}
function ks(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function mi(e, t, n, r) {
  var l = e.updateQueue;
  Ht = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), o === null ? (i = s) : (o.next = s), (o = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== o &&
        (a === null ? (f.firstBaseUpdate = s) : (a.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var d = l.baseState;
    (o = 0), (f = s = u = null), (a = i);
    do {
      var h = a.lane,
        k = a.eventTime;
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: k,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var S = e,
            x = a;
          switch (((h = t), (k = n), x.tag)) {
            case 1:
              if (((S = x.payload), typeof S == "function")) {
                d = S.call(k, d, h);
                break e;
              }
              d = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = x.payload),
                (h = typeof S == "function" ? S.call(k, d, h) : S),
                h == null)
              )
                break e;
              d = se({}, d, h);
              break e;
            case 2:
              Ht = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [a]) : h.push(a));
      } else
        (k = {
          eventTime: k,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((s = f = k), (u = d)) : (f = f.next = k),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = d),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (En |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Es(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(_(191, l));
        l.call(r);
      }
    }
}
var pl = {},
  kt = on(pl),
  rl = on(pl),
  ll = on(pl);
function mn(e) {
  if (e === pl) throw Error(_(174));
  return e;
}
function Ja(e, t) {
  switch ((b(ll, t), b(rl, e), b(kt, pl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Do(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Do(t, e));
  }
  te(kt), b(kt, t);
}
function lr() {
  te(kt), te(rl), te(ll);
}
function Of(e) {
  mn(ll.current);
  var t = mn(kt.current),
    n = Do(t, e.type);
  t !== n && (b(rl, e), b(kt, n));
}
function qa(e) {
  rl.current === e && (te(kt), te(rl));
}
var ae = on(0);
function vi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var co = [];
function ba() {
  for (var e = 0; e < co.length; e++)
    co[e]._workInProgressVersionPrimary = null;
  co.length = 0;
}
var Yl = zt.ReactCurrentDispatcher,
  fo = zt.ReactCurrentBatchConfig,
  kn = 0,
  ue = null,
  me = null,
  ye = null,
  gi = !1,
  Br = !1,
  il = 0,
  s1 = 0;
function je() {
  throw Error(_(321));
}
function eu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!vt(e[n], t[n])) return !1;
  return !0;
}
function tu(e, t, n, r, l, i) {
  if (
    ((kn = i),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yl.current = e === null || e.memoizedState === null ? h1 : p1),
    (e = n(r, l)),
    Br)
  ) {
    i = 0;
    do {
      if (((Br = !1), (il = 0), 25 <= i)) throw Error(_(301));
      (i += 1),
        (ye = me = null),
        (t.updateQueue = null),
        (Yl.current = m1),
        (e = n(r, l));
    } while (Br);
  }
  if (
    ((Yl.current = yi),
    (t = me !== null && me.next !== null),
    (kn = 0),
    (ye = me = ue = null),
    (gi = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function nu() {
  var e = il !== 0;
  return (il = 0), e;
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ye === null ? (ue.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function ot() {
  if (me === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ye === null ? ue.memoizedState : ye.next;
  if (t !== null) (ye = t), (me = e);
  else {
    if (e === null) throw Error(_(310));
    (me = e),
      (e = {
        memoizedState: me.memoizedState,
        baseState: me.baseState,
        baseQueue: me.baseQueue,
        queue: me.queue,
        next: null,
      }),
      ye === null ? (ue.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function ol(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ho(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = me,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (o = null),
      u = null,
      s = i;
    do {
      var f = s.lane;
      if ((kn & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var d = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = d), (o = r)) : (u = u.next = d),
          (ue.lanes |= f),
          (En |= f);
      }
      s = s.next;
    } while (s !== null && s !== i);
    u === null ? (o = r) : (u.next = a),
      vt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (ue.lanes |= i), (En |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function po(e) {
  var t = ot(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    vt(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function If() {}
function Ff(e, t) {
  var n = ue,
    r = ot(),
    l = t(),
    i = !vt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (Ue = !0)),
    (r = r.queue),
    ru(Bf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      al(9, Af.bind(null, n, r, l, t), void 0, null),
      we === null)
    )
      throw Error(_(349));
    kn & 30 || Uf(n, t, l);
  }
  return l;
}
function Uf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Af(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $f(t) && Vf(e);
}
function Bf(e, t, n) {
  return n(function () {
    $f(t) && Vf(e);
  });
}
function $f(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !vt(e, n);
  } catch {
    return !0;
  }
}
function Vf(e) {
  var t = Tt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function Cs(e) {
  var t = wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ol,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = d1.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function al(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hf() {
  return ot().memoizedState;
}
function Zl(e, t, n, r) {
  var l = wt();
  (ue.flags |= e),
    (l.memoizedState = al(1 | t, n, void 0, r === void 0 ? null : r));
}
function Di(e, t, n, r) {
  var l = ot();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (me !== null) {
    var o = me.memoizedState;
    if (((i = o.destroy), r !== null && eu(r, o.deps))) {
      l.memoizedState = al(t, n, i, r);
      return;
    }
  }
  (ue.flags |= e), (l.memoizedState = al(1 | t, n, i, r));
}
function Ps(e, t) {
  return Zl(8390656, 8, e, t);
}
function ru(e, t) {
  return Di(2048, 8, e, t);
}
function Wf(e, t) {
  return Di(4, 2, e, t);
}
function Qf(e, t) {
  return Di(4, 4, e, t);
}
function Kf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Yf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Di(4, 4, Kf.bind(null, t, e), n)
  );
}
function lu() {}
function Zf(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && eu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Xf(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && eu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gf(e, t, n) {
  return kn & 21
    ? (vt(n, t) || ((n = ef()), (ue.lanes |= n), (En |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function c1(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = fo.transition;
  fo.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (fo.transition = r);
  }
}
function Jf() {
  return ot().memoizedState;
}
function f1(e, t, n) {
  var r = en(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    qf(e))
  )
    bf(t, n);
  else if (((n = Df(e, t, n, r)), n !== null)) {
    var l = ze();
    mt(n, e, r, l), ed(n, t, r);
  }
}
function d1(e, t, n) {
  var r = en(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qf(e)) bf(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), vt(a, o))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Xa(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Df(e, t, l, r)),
      n !== null && ((l = ze()), mt(n, e, r, l), ed(n, t, r));
  }
}
function qf(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function bf(e, t) {
  Br = gi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ed(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oa(e, n);
  }
}
var yi = {
    readContext: it,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  h1 = {
    readContext: it,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: Ps,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Zl(4194308, 4, Kf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Zl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Zl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = f1.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Cs,
    useDebugValue: lu,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = Cs(!1),
        t = e[0];
      return (e = c1.bind(null, e[1])), (wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        l = wt();
      if (le) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(_(349));
        kn & 30 || Uf(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Ps(Bf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        al(9, Af.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = we.identifierPrefix;
      if (le) {
        var n = _t,
          r = Pt;
        (n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = il++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = s1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  p1 = {
    readContext: it,
    useCallback: Zf,
    useContext: it,
    useEffect: ru,
    useImperativeHandle: Yf,
    useInsertionEffect: Wf,
    useLayoutEffect: Qf,
    useMemo: Xf,
    useReducer: ho,
    useRef: Hf,
    useState: function () {
      return ho(ol);
    },
    useDebugValue: lu,
    useDeferredValue: function (e) {
      var t = ot();
      return Gf(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = ho(ol)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: If,
    useSyncExternalStore: Ff,
    useId: Jf,
    unstable_isNewReconciler: !1,
  },
  m1 = {
    readContext: it,
    useCallback: Zf,
    useContext: it,
    useEffect: ru,
    useImperativeHandle: Yf,
    useInsertionEffect: Wf,
    useLayoutEffect: Qf,
    useMemo: Xf,
    useReducer: po,
    useRef: Hf,
    useState: function () {
      return po(ol);
    },
    useDebugValue: lu,
    useDeferredValue: function (e) {
      var t = ot();
      return me === null ? (t.memoizedState = e) : Gf(t, me.memoizedState, e);
    },
    useTransition: function () {
      var e = po(ol)[0],
        t = ot().memoizedState;
      return [e, t];
    },
    useMutableSource: If,
    useSyncExternalStore: Ff,
    useId: Jf,
    unstable_isNewReconciler: !1,
  };
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ea(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = en(e),
      i = jt(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = qt(e, i, l)),
      t !== null && (mt(t, e, l, r), Kl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ze(),
      l = en(e),
      i = jt(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = qt(e, i, l)),
      t !== null && (mt(t, e, l, r), Kl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ze(),
      r = en(e),
      l = jt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = qt(e, l, r)),
      t !== null && (mt(t, e, r, n), Kl(t, e, r));
  },
};
function _s(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !br(n, r) || !br(l, i)
        : !0
  );
}
function td(e, t, n) {
  var r = !1,
    l = rn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = it(i))
      : ((l = Be(t) ? xn : Re.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? tr(e, l) : rn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function js(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zi.enqueueReplaceState(t, t.state, null);
}
function ta(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ga(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = it(i))
    : ((i = Be(t) ? xn : Re.current), (l.context = tr(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (ea(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && zi.enqueueReplaceState(l, l.state, null),
      mi(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ir(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Hh(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function mo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function na(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var v1 = typeof WeakMap == "function" ? WeakMap : Map;
function nd(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xi || ((xi = !0), (da = r)), na(e, t);
    }),
    n
  );
}
function rd(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        na(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        na(e, t),
          typeof r != "function" &&
            (bt === null ? (bt = new Set([this])) : bt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Ns(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new v1();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = R1.bind(null, e, t, n)), t.then(e, e));
}
function Ls(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Rs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = jt(-1, 1)), (t.tag = 2), qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var g1 = zt.ReactCurrentOwner,
  Ue = !1;
function De(e, t, n, r) {
  t.child = e === null ? Mf(t, null, n, r) : rr(t, e.child, n, r);
}
function Ts(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Jn(t, l),
    (r = tu(e, t, n, r, i, l)),
    (n = nu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (le && n && Ha(t), (t.flags |= 1), De(e, t, r, l), t.child)
  );
}
function Ms(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !du(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ld(e, t, i, r, l))
      : ((e = ql(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : br), n(o, r) && e.ref === t.ref)
    )
      return Mt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = tn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ld(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (br(i, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Mt(e, t, l);
  }
  return ra(e, t, n, r, l);
}
function id(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(Qn, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(Qn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        b(Qn, Qe),
        (Qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(Qn, Qe),
      (Qe |= r);
  return De(e, t, l, n), t.child;
}
function od(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ra(e, t, n, r, l) {
  var i = Be(n) ? xn : Re.current;
  return (
    (i = tr(t, i)),
    Jn(t, l),
    (n = tu(e, t, n, r, i, l)),
    (r = nu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (le && r && Ha(t), (t.flags |= 1), De(e, t, n, l), t.child)
  );
}
function Ds(e, t, n, r, l) {
  if (Be(n)) {
    var i = !0;
    ci(t);
  } else i = !1;
  if ((Jn(t, l), t.stateNode === null))
    Xl(e, t), td(t, n, r), ta(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var u = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = it(s))
      : ((s = Be(n) ? xn : Re.current), (s = tr(t, s)));
    var f = n.getDerivedStateFromProps,
      d =
        typeof f == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && js(t, o, r, s)),
      (Ht = !1);
    var h = t.memoizedState;
    (o.state = h),
      mi(t, r, o, l),
      (u = t.memoizedState),
      a !== r || h !== u || Ae.current || Ht
        ? (typeof f == "function" && (ea(t, n, f, r), (u = t.memoizedState)),
          (a = Ht || _s(t, n, a, r, h, u, s))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      zf(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : ct(t.type, a)),
      (o.props = s),
      (d = t.pendingProps),
      (h = o.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = it(u))
        : ((u = Be(n) ? xn : Re.current), (u = tr(t, u)));
    var k = n.getDerivedStateFromProps;
    (f =
      typeof k == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || h !== u) && js(t, o, r, u)),
      (Ht = !1),
      (h = t.memoizedState),
      (o.state = h),
      mi(t, r, o, l);
    var S = t.memoizedState;
    a !== d || h !== S || Ae.current || Ht
      ? (typeof k == "function" && (ea(t, n, k, r), (S = t.memoizedState)),
        (s = Ht || _s(t, n, s, r, h, S, u) || !1)
          ? (f ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, u),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, u)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return la(e, t, n, r, i, l);
}
function la(e, t, n, r, l, i) {
  od(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ys(t, n, !1), Mt(e, t, i);
  (r = t.stateNode), (g1.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = rr(t, e.child, null, i)), (t.child = rr(t, null, a, i)))
      : De(e, t, a, i),
    (t.memoizedState = r.state),
    l && ys(t, n, !0),
    t.child
  );
}
function ad(e) {
  var t = e.stateNode;
  t.pendingContext
    ? gs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && gs(e, t.context, !1),
    Ja(e, t.containerInfo);
}
function zs(e, t, n, r, l) {
  return nr(), Qa(l), (t.flags |= 256), De(e, t, n, r), t.child;
}
var ia = { dehydrated: null, treeContext: null, retryLane: 0 };
function oa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ud(e, t, n) {
  var r = t.pendingProps,
    l = ae.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(ae, l & 1),
    e === null)
  )
    return (
      qo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Fi(o, r, 0, null)),
              (e = wn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = oa(n)),
              (t.memoizedState = ia),
              e)
            : iu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return y1(e, t, o, r, a, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = tn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = tn(a, i)) : ((i = wn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? oa(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ia),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = tn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function iu(e, t) {
  return (
    (t = Fi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Il(e, t, n, r) {
  return (
    r !== null && Qa(r),
    rr(t, e.child, null, n),
    (e = iu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function y1(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = mo(Error(_(422)))), Il(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (l = t.mode),
          (r = Fi({ mode: "visible", children: r.children }, l, 0, null)),
          (i = wn(i, l, o, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && rr(t, e.child, null, o),
          (t.child.memoizedState = oa(o)),
          (t.memoizedState = ia),
          i);
  if (!(t.mode & 1)) return Il(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(_(419))), (r = mo(i, r, void 0)), Il(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ue || a)) {
    if (((r = we), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Tt(e, l), mt(r, e, l, -1));
    }
    return fu(), (r = mo(Error(_(421)))), Il(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = T1.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ke = Jt(l.nextSibling)),
      (Ye = t),
      (le = !0),
      (ht = null),
      e !== null &&
        ((et[tt++] = Pt),
        (et[tt++] = _t),
        (et[tt++] = Sn),
        (Pt = e.id),
        (_t = e.overflow),
        (Sn = t)),
      (t = iu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Os(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bo(e.return, t, n);
}
function vo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function sd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((De(e, t, r.children, n), (r = ae.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Os(e, n, t);
        else if (e.tag === 19) Os(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && vi(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          vo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && vi(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        vo(t, !0, n, null, i);
        break;
      case "together":
        vo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (En |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function w1(e, t, n) {
  switch (t.tag) {
    case 3:
      ad(t), nr();
      break;
    case 5:
      Of(t);
      break;
    case 1:
      Be(t.type) && ci(t);
      break;
    case 4:
      Ja(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(hi, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ud(e, t, n)
            : (b(ae, ae.current & 1),
              (e = Mt(e, t, n)),
              e !== null ? e.sibling : null);
      b(ae, ae.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), id(e, t, n);
  }
  return Mt(e, t, n);
}
var cd, aa, fd, dd;
cd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
aa = function () {};
fd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), mn(kt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Lo(e, l)), (r = Lo(e, r)), (i = []);
        break;
      case "select":
        (l = se({}, l, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Mo(e, l)), (r = Mo(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ui);
    }
    zo(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Kr.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in u)
              u.hasOwnProperty(o) &&
                a[o] !== u[o] &&
                (n || (n = {}), (n[o] = u[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(s, u))
            : s === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (i = i || []).push(s, "" + u)
              : s !== "suppressContentEditableWarning" &&
                s !== "suppressHydrationWarning" &&
                (Kr.hasOwnProperty(s)
                  ? (u != null && s === "onScroll" && ee("scroll", e),
                    i || a === u || (i = []))
                  : (i = i || []).push(s, u));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
dd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function x1(e, t, n) {
  var r = t.pendingProps;
  switch ((Wa(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ne(t), null;
    case 1:
      return Be(t.type) && si(), Ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        lr(),
        te(Ae),
        te(Re),
        ba(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ht !== null && (ma(ht), (ht = null)))),
        aa(e, t),
        Ne(t),
        null
      );
    case 5:
      qa(t);
      var l = mn(ll.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        fd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Ne(t), null;
        }
        if (((e = mn(kt.current)), zl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[xt] = t), (r[nl] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < zr.length; l++) ee(zr[l], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Wu(r, i), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Ku(r, i), ee("invalid", r);
          }
          zo(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Dl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Dl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Kr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              Pl(r), Qu(r, i, !0);
              break;
            case "textarea":
              Pl(r), Yu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ui);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ac(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[xt] = t),
            (e[nl] = r),
            cd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Oo(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < zr.length; l++) ee(zr[l], e);
                l = r;
                break;
              case "source":
                ee("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (l = r);
                break;
              case "details":
                ee("toggle", e), (l = r);
                break;
              case "input":
                Wu(e, r), (l = Lo(e, r)), ee("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = se({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Ku(e, r), (l = Mo(e, r)), ee("invalid", e);
                break;
              default:
                l = r;
            }
            zo(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? Vc(e, u)
                  : i === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Bc(e, u))
                    : i === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Yr(e, u)
                        : typeof u == "number" && Yr(e, "" + u)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (Kr.hasOwnProperty(i)
                          ? u != null && i === "onScroll" && ee("scroll", e)
                          : u != null && La(e, i, u, o));
              }
            switch (n) {
              case "input":
                Pl(e), Qu(e, r, !1);
                break;
              case "textarea":
                Pl(e), Yu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ui);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ne(t), null;
    case 6:
      if (e && t.stateNode != null) dd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = mn(ll.current)), mn(kt.current), zl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (i = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Dl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Dl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r);
      }
      return Ne(t), null;
    case 13:
      if (
        (te(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Ke !== null && t.mode & 1 && !(t.flags & 128))
          Rf(), nr(), (t.flags |= 98560), (i = !1);
        else if (((i = zl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(_(317));
            i[xt] = t;
          } else
            nr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ne(t), (i = !1);
        } else ht !== null && (ma(ht), (ht = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ve === 0 && (ve = 3) : fu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        lr(), aa(e, t), e === null && el(t.stateNode.containerInfo), Ne(t), null
      );
    case 10:
      return Za(t.type._context), Ne(t), null;
    case 17:
      return Be(t.type) && si(), Ne(t), null;
    case 19:
      if ((te(ae), (i = t.memoizedState), i === null)) return Ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Pr(i, !1);
        else {
          if (ve !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = vi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Pr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(ae, (ae.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            de() > or &&
            ((t.flags |= 128), (r = !0), Pr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Pr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !le)
            )
              return Ne(t), null;
          } else
            2 * de() - i.renderingStartTime > or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Pr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = de()),
          (t.sibling = null),
          (n = ae.current),
          b(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        cu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function S1(e, t) {
  switch ((Wa(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && si(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        lr(),
        te(Ae),
        te(Re),
        ba(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return qa(t), null;
    case 13:
      if (
        (te(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        nr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(ae), null;
    case 4:
      return lr(), null;
    case 10:
      return Za(t.type._context), null;
    case 22:
    case 23:
      return cu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fl = !1,
  Le = !1,
  k1 = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function ua(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Is = !1;
function E1(e, t) {
  if (((Qo = ii), (e = gf()), Va(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            u = -1,
            s = 0,
            f = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var k;
              d !== n || (l !== 0 && d.nodeType !== 3) || (a = o + l),
                d !== i || (r !== 0 && d.nodeType !== 3) || (u = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (k = d.firstChild) !== null;

            )
              (h = d), (d = k);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++s === l && (a = o),
                h === i && ++f === r && (u = o),
                (k = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = k;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ko = { focusedElem: e, selectionRange: n }, ii = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var x = S.memoizedProps,
                    T = S.memoizedState,
                    p = t.stateNode,
                    c = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : ct(t.type, x),
                      T,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (E) {
          ce(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (S = Is), (Is = !1), S;
}
function $r(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && ua(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Oi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function sa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function hd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[nl], delete t[Xo], delete t[i1], delete t[o1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function pd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ca(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ui));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ca(e, t, n), e = e.sibling; e !== null; ) ca(e, t, n), (e = e.sibling);
}
function fa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fa(e, t, n), e = e.sibling; e !== null; ) fa(e, t, n), (e = e.sibling);
}
var Ce = null,
  ft = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) md(e, t, n), (n = n.sibling);
}
function md(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function")
    try {
      St.onCommitFiberUnmount(ji, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Le || Wn(n, t);
    case 6:
      var r = Ce,
        l = ft;
      (Ce = null),
        Bt(e, t, n),
        (Ce = r),
        (ft = l),
        Ce !== null &&
          (ft
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (ft
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? uo(e.parentNode, n)
              : e.nodeType === 1 && uo(e, n),
            Jr(e))
          : uo(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (l = ft),
        (Ce = n.stateNode.containerInfo),
        (ft = !0),
        Bt(e, t, n),
        (Ce = r),
        (ft = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && ua(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (
        !Le &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Le = (r = Le) || n.memoizedState !== null), Bt(e, t, n), (Le = r))
        : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function Us(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new k1()),
      t.forEach(function (r) {
        var l = M1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function st(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ce = a.stateNode), (ft = !1);
              break e;
            case 3:
              (Ce = a.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (Ce = a.stateNode.containerInfo), (ft = !0);
              break e;
          }
          a = a.return;
        }
        if (Ce === null) throw Error(_(160));
        md(i, o, l), (Ce = null), (ft = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ce(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) vd(t, e), (t = t.sibling);
}
function vd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((st(t, e), yt(e), r & 4)) {
        try {
          $r(3, e, e.return), Oi(3, e);
        } catch (x) {
          ce(e, e.return, x);
        }
        try {
          $r(5, e, e.return);
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      break;
    case 1:
      st(t, e), yt(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (
        (st(t, e),
        yt(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Yr(l, "");
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Fc(l, i),
              Oo(a, o);
            var s = Oo(a, i);
            for (o = 0; o < u.length; o += 2) {
              var f = u[o],
                d = u[o + 1];
              f === "style"
                ? Vc(l, d)
                : f === "dangerouslySetInnerHTML"
                  ? Bc(l, d)
                  : f === "children"
                    ? Yr(l, d)
                    : La(l, f, d, s);
            }
            switch (a) {
              case "input":
                Ro(l, i);
                break;
              case "textarea":
                Uc(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var k = i.value;
                k != null
                  ? Yn(l, !!i.multiple, k, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yn(l, !!i.multiple, i.defaultValue, !0)
                      : Yn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[nl] = i;
          } catch (x) {
            ce(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((st(t, e), yt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (st(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (x) {
          ce(e, e.return, x);
        }
      break;
    case 4:
      st(t, e), yt(e);
      break;
    case 13:
      st(t, e),
        yt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (uu = de())),
        r & 4 && Us(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Le = (s = Le) || f), st(t, e), (Le = s)) : st(t, e),
        yt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (z = e, f = e.child; f !== null; ) {
            for (d = z = f; z !== null; ) {
              switch (((h = z), (k = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $r(4, h, h.return);
                  break;
                case 1:
                  Wn(h, h.return);
                  var S = h.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (x) {
                      ce(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Wn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Bs(d);
                    continue;
                  }
              }
              k !== null ? ((k.return = h), (z = k)) : Bs(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (l = d.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (u = d.memoizedProps.style),
                      (o =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = $c("display", o)));
              } catch (x) {
                ce(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = s ? "" : d.memoizedProps;
              } catch (x) {
                ce(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      st(t, e), yt(e), r & 4 && Us(e);
      break;
    case 21:
      break;
    default:
      st(t, e), yt(e);
  }
}
function yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yr(l, ""), (r.flags &= -33));
          var i = Fs(e);
          fa(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Fs(e);
          ca(e, a, o);
          break;
        default:
          throw Error(_(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function C1(e, t, n) {
  (z = e), gd(e);
}
function gd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Fl;
      if (!o) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Le;
        a = Fl;
        var s = Le;
        if (((Fl = o), (Le = u) && !s))
          for (z = l; z !== null; )
            (o = z),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? $s(l)
                : u !== null
                  ? ((u.return = o), (z = u))
                  : $s(l);
        for (; i !== null; ) (z = i), gd(i), (i = i.sibling);
        (z = l), (Fl = a), (Le = s);
      }
      As(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (z = i)) : As(e);
  }
}
function As(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Le || Oi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var i = t.updateQueue;
              i !== null && Es(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Es(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && Jr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Le || (t.flags & 512 && sa(t));
      } catch (h) {
        ce(t, t.return, h);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Bs(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function $s(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Oi(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, l, u);
            }
          }
          var i = t.return;
          try {
            sa(t);
          } catch (u) {
            ce(t, i, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            sa(t);
          } catch (u) {
            ce(t, o, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var P1 = Math.ceil,
  wi = zt.ReactCurrentDispatcher,
  ou = zt.ReactCurrentOwner,
  lt = zt.ReactCurrentBatchConfig,
  X = 0,
  we = null,
  pe = null,
  Pe = 0,
  Qe = 0,
  Qn = on(0),
  ve = 0,
  ul = null,
  En = 0,
  Ii = 0,
  au = 0,
  Vr = null,
  Fe = null,
  uu = 0,
  or = 1 / 0,
  Et = null,
  xi = !1,
  da = null,
  bt = null,
  Ul = !1,
  Yt = null,
  Si = 0,
  Hr = 0,
  ha = null,
  Gl = -1,
  Jl = 0;
function ze() {
  return X & 6 ? de() : Gl !== -1 ? Gl : (Gl = de());
}
function en(e) {
  return e.mode & 1
    ? X & 2 && Pe !== 0
      ? Pe & -Pe
      : u1.transition !== null
        ? (Jl === 0 && (Jl = ef()), Jl)
        : ((e = G),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : uf(e.type))),
          e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < Hr) throw ((Hr = 0), (ha = null), Error(_(185)));
  fl(e, n, r),
    (!(X & 2) || e !== we) &&
      (e === we && (!(X & 2) && (Ii |= n), ve === 4 && Qt(e, Pe)),
      $e(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((or = de() + 500), Mi && an()));
}
function $e(e, t) {
  var n = e.callbackNode;
  up(e, t);
  var r = li(e, e === we ? Pe : 0);
  if (r === 0)
    n !== null && Gu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Gu(n), t === 1))
      e.tag === 0 ? a1(Vs.bind(null, e)) : jf(Vs.bind(null, e)),
        r1(function () {
          !(X & 6) && an();
        }),
        (n = null);
    else {
      switch (tf(r)) {
        case 1:
          n = za;
          break;
        case 4:
          n = qc;
          break;
        case 16:
          n = ri;
          break;
        case 536870912:
          n = bc;
          break;
        default:
          n = ri;
      }
      n = Pd(n, yd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function yd(e, t) {
  if (((Gl = -1), (Jl = 0), X & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = li(e, e === we ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ki(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var i = xd();
    (we !== e || Pe !== t) && ((Et = null), (or = de() + 500), yn(e, t));
    do
      try {
        N1();
        break;
      } catch (a) {
        wd(e, a);
      }
    while (!0);
    Ya(),
      (wi.current = i),
      (X = l),
      pe !== null ? (t = 0) : ((we = null), (Pe = 0), (t = ve));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Bo(e)), l !== 0 && ((r = l), (t = pa(e, l)))), t === 1)
    )
      throw ((n = ul), yn(e, 0), Qt(e, r), $e(e, de()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !_1(l) &&
          ((t = ki(e, r)),
          t === 2 && ((i = Bo(e)), i !== 0 && ((r = i), (t = pa(e, i)))),
          t === 1))
      )
        throw ((n = ul), yn(e, 0), Qt(e, r), $e(e, de()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          dn(e, Fe, Et);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = uu + 500 - de()), 10 < t))
          ) {
            if (li(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ze(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Zo(dn.bind(null, e, Fe, Et), t);
            break;
          }
          dn(e, Fe, Et);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - pt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = de() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * P1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Zo(dn.bind(null, e, Fe, Et), r);
            break;
          }
          dn(e, Fe, Et);
          break;
        case 5:
          dn(e, Fe, Et);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return $e(e, de()), e.callbackNode === n ? yd.bind(null, e) : null;
}
function pa(e, t) {
  var n = Vr;
  return (
    e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
    (e = ki(e, t)),
    e !== 2 && ((t = Fe), (Fe = n), t !== null && ma(t)),
    e
  );
}
function ma(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function _1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!vt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qt(e, t) {
  for (
    t &= ~au,
      t &= ~Ii,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Vs(e) {
  if (X & 6) throw Error(_(327));
  qn();
  var t = li(e, 0);
  if (!(t & 1)) return $e(e, de()), null;
  var n = ki(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bo(e);
    r !== 0 && ((t = r), (n = pa(e, r)));
  }
  if (n === 1) throw ((n = ul), yn(e, 0), Qt(e, t), $e(e, de()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    dn(e, Fe, Et),
    $e(e, de()),
    null
  );
}
function su(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((or = de() + 500), Mi && an());
  }
}
function Cn(e) {
  Yt !== null && Yt.tag === 0 && !(X & 6) && qn();
  var t = X;
  X |= 1;
  var n = lt.transition,
    r = G;
  try {
    if (((lt.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (lt.transition = n), (X = t), !(X & 6) && an();
  }
}
function cu() {
  (Qe = Qn.current), te(Qn);
}
function yn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), n1(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n;
      switch ((Wa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && si();
          break;
        case 3:
          lr(), te(Ae), te(Re), ba();
          break;
        case 5:
          qa(r);
          break;
        case 4:
          lr();
          break;
        case 13:
          te(ae);
          break;
        case 19:
          te(ae);
          break;
        case 10:
          Za(r.type._context);
          break;
        case 22:
        case 23:
          cu();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (pe = e = tn(e.current, null)),
    (Pe = Qe = t),
    (ve = 0),
    (ul = null),
    (au = Ii = En = 0),
    (Fe = Vr = null),
    pn !== null)
  ) {
    for (t = 0; t < pn.length; t++)
      if (((n = pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    pn = null;
  }
  return e;
}
function wd(e, t) {
  do {
    var n = pe;
    try {
      if ((Ya(), (Yl.current = yi), gi)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        gi = !1;
      }
      if (
        ((kn = 0),
        (ye = me = ue = null),
        (Br = !1),
        (il = 0),
        (ou.current = null),
        n === null || n.return === null)
      ) {
        (ve = 1), (ul = t), (pe = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          a = n,
          u = t;
        if (
          ((t = Pe),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            f = a,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var k = Ls(o);
          if (k !== null) {
            (k.flags &= -257),
              Rs(k, o, a, i, t),
              k.mode & 1 && Ns(i, s, t),
              (t = k),
              (u = s);
            var S = t.updateQueue;
            if (S === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ns(i, s, t), fu();
              break e;
            }
            u = Error(_(426));
          }
        } else if (le && a.mode & 1) {
          var T = Ls(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              Rs(T, o, a, i, t),
              Qa(ir(u, a));
            break e;
          }
        }
        (i = u = ir(u, a)),
          ve !== 4 && (ve = 2),
          Vr === null ? (Vr = [i]) : Vr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = nd(i, u, t);
              ks(i, p);
              break e;
            case 1:
              a = u;
              var c = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (bt === null || !bt.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = rd(i, a, t);
                ks(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kd(n);
    } catch (L) {
      (t = L), pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xd() {
  var e = wi.current;
  return (wi.current = yi), e === null ? yi : e;
}
function fu() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4),
    we === null || (!(En & 268435455) && !(Ii & 268435455)) || Qt(we, Pe);
}
function ki(e, t) {
  var n = X;
  X |= 2;
  var r = xd();
  (we !== e || Pe !== t) && ((Et = null), yn(e, t));
  do
    try {
      j1();
      break;
    } catch (l) {
      wd(e, l);
    }
  while (!0);
  if ((Ya(), (X = n), (wi.current = r), pe !== null)) throw Error(_(261));
  return (we = null), (Pe = 0), ve;
}
function j1() {
  for (; pe !== null; ) Sd(pe);
}
function N1() {
  for (; pe !== null && !bh(); ) Sd(pe);
}
function Sd(e) {
  var t = Cd(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? kd(e) : (pe = t),
    (ou.current = null);
}
function kd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = S1(n, t)), n !== null)) {
        (n.flags &= 32767), (pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ve = 6), (pe = null);
        return;
      }
    } else if (((n = x1(n, t, Qe)), n !== null)) {
      pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function dn(e, t, n) {
  var r = G,
    l = lt.transition;
  try {
    (lt.transition = null), (G = 1), L1(e, t, n, r);
  } finally {
    (lt.transition = l), (G = r);
  }
  return null;
}
function L1(e, t, n, r) {
  do qn();
  while (Yt !== null);
  if (X & 6) throw Error(_(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (sp(e, i),
    e === we && ((pe = we = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ul ||
      ((Ul = !0),
      Pd(ri, function () {
        return qn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = lt.transition), (lt.transition = null);
    var o = G;
    G = 1;
    var a = X;
    (X |= 4),
      (ou.current = null),
      E1(e, n),
      vd(n, e),
      Xp(Ko),
      (ii = !!Qo),
      (Ko = Qo = null),
      (e.current = n),
      C1(n),
      ep(),
      (X = a),
      (G = o),
      (lt.transition = i);
  } else e.current = n;
  if (
    (Ul && ((Ul = !1), (Yt = e), (Si = l)),
    (i = e.pendingLanes),
    i === 0 && (bt = null),
    rp(n.stateNode),
    $e(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (xi) throw ((xi = !1), (e = da), (da = null), e);
  return (
    Si & 1 && e.tag !== 0 && qn(),
    (i = e.pendingLanes),
    i & 1 ? (e === ha ? Hr++ : ((Hr = 0), (ha = e))) : (Hr = 0),
    an(),
    null
  );
}
function qn() {
  if (Yt !== null) {
    var e = tf(Si),
      t = lt.transition,
      n = G;
    try {
      if (((lt.transition = null), (G = 16 > e ? 16 : e), Yt === null))
        var r = !1;
      else {
        if (((e = Yt), (Yt = null), (Si = 0), X & 6)) throw Error(_(331));
        var l = X;
        for (X |= 4, z = e.current; z !== null; ) {
          var i = z,
            o = i.child;
          if (z.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (z = s; z !== null; ) {
                  var f = z;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $r(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (z = d);
                  else
                    for (; z !== null; ) {
                      f = z;
                      var h = f.sibling,
                        k = f.return;
                      if ((hd(f), f === s)) {
                        z = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = k), (z = h);
                        break;
                      }
                      z = k;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var x = S.child;
                if (x !== null) {
                  S.child = null;
                  do {
                    var T = x.sibling;
                    (x.sibling = null), (x = T);
                  } while (x !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (z = o);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    $r(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (z = p);
                break e;
              }
              z = i.return;
            }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          o = z;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (z = m);
          else
            e: for (o = c; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oi(9, a);
                  }
                } catch (L) {
                  ce(a, a.return, L);
                }
              if (a === o) {
                z = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (z = E);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((X = l), an(), St && typeof St.onPostCommitFiberRoot == "function")
        )
          try {
            St.onPostCommitFiberRoot(ji, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (lt.transition = t);
    }
  }
  return !1;
}
function Hs(e, t, n) {
  (t = ir(n, t)),
    (t = nd(e, t, 1)),
    (e = qt(e, t, 1)),
    (t = ze()),
    e !== null && (fl(e, 1, t), $e(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Hs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (bt === null || !bt.has(r)))
        ) {
          (e = ir(n, e)),
            (e = rd(t, e, 1)),
            (t = qt(t, e, 1)),
            (e = ze()),
            t !== null && (fl(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function R1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Pe & n) === n &&
      (ve === 4 || (ve === 3 && (Pe & 130023424) === Pe && 500 > de() - uu)
        ? yn(e, 0)
        : (au |= n)),
    $e(e, t);
}
function Ed(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Nl), (Nl <<= 1), !(Nl & 130023424) && (Nl = 4194304))
      : (t = 1));
  var n = ze();
  (e = Tt(e, t)), e !== null && (fl(e, t, n), $e(e, n));
}
function T1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ed(e, n);
}
function M1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Ed(e, n);
}
var Cd;
Cd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), w1(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), le && t.flags & 1048576 && Nf(t, di, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xl(e, t), (e = t.pendingProps);
      var l = tr(t, Re.current);
      Jn(t, n), (l = tu(null, t, r, e, l, n));
      var i = nu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((i = !0), ci(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ga(t),
            (l.updater = zi),
            (t.stateNode = l),
            (l._reactInternals = t),
            ta(t, r, e, n),
            (t = la(null, t, r, !0, i, n)))
          : ((t.tag = 0), le && i && Ha(t), De(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = z1(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = ra(null, t, r, e, n);
            break e;
          case 1:
            t = Ds(null, t, r, e, n);
            break e;
          case 11:
            t = Ts(null, t, r, e, n);
            break e;
          case 14:
            t = Ms(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        ra(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Ds(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ad(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          zf(e, t),
          mi(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = ir(Error(_(423)), t)), (t = zs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ir(Error(_(424)), t)), (t = zs(e, t, r, n, l));
            break e;
          } else
            for (
              Ke = Jt(t.stateNode.containerInfo.firstChild),
                Ye = t,
                le = !0,
                ht = null,
                n = Mf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((nr(), r === l)) {
            t = Mt(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Of(t),
        e === null && qo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Yo(r, l) ? (o = null) : i !== null && Yo(r, i) && (t.flags |= 32),
        od(e, t),
        De(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && qo(t), null;
    case 13:
      return ud(e, t, n);
    case 4:
      return (
        Ja(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = rr(t, null, r, n)) : De(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Ts(e, t, r, l, n)
      );
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          b(hi, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (vt(i.value, o)) {
            if (i.children === l.children && !Ae.current) {
              t = Mt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = jt(-1, n & -n)), (u.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      bo(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(_(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  bo(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        De(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jn(t, n),
        (l = it(l)),
        (r = r(l)),
        (t.flags |= 1),
        De(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        Ms(e, t, r, l, n)
      );
    case 15:
      return ld(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        Xl(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), ci(t)) : (e = !1),
        Jn(t, n),
        td(t, r, l),
        ta(t, r, l, n),
        la(null, t, r, !0, e, n)
      );
    case 19:
      return sd(e, t, n);
    case 22:
      return id(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Pd(e, t) {
  return Jc(e, t);
}
function D1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rt(e, t, n, r) {
  return new D1(e, t, n, r);
}
function du(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function z1(e) {
  if (typeof e == "function") return du(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ta)) return 11;
    if (e === Ma) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ql(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) du(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case On:
        return wn(n.children, l, i, t);
      case Ra:
        (o = 8), (l |= 8);
        break;
      case Po:
        return (
          (e = rt(12, n, t, l | 2)), (e.elementType = Po), (e.lanes = i), e
        );
      case _o:
        return (e = rt(13, n, t, l)), (e.elementType = _o), (e.lanes = i), e;
      case jo:
        return (e = rt(19, n, t, l)), (e.elementType = jo), (e.lanes = i), e;
      case zc:
        return Fi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Mc:
              o = 10;
              break e;
            case Dc:
              o = 9;
              break e;
            case Ta:
              o = 11;
              break e;
            case Ma:
              o = 14;
              break e;
            case Vt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = rt(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function wn(e, t, n, r) {
  return (e = rt(7, e, r, t)), (e.lanes = n), e;
}
function Fi(e, t, n, r) {
  return (
    (e = rt(22, e, r, t)),
    (e.elementType = zc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function go(e, t, n) {
  return (e = rt(6, e, null, t)), (e.lanes = n), e;
}
function yo(e, t, n) {
  return (
    (t = rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function O1(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ji(0)),
    (this.expirationTimes = Ji(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ji(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function hu(e, t, n, r, l, i, o, a, u) {
  return (
    (e = new O1(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = rt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ga(i),
    e
  );
}
function I1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function _d(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return _f(e, n, t);
  }
  return t;
}
function jd(e, t, n, r, l, i, o, a, u) {
  return (
    (e = hu(n, r, !0, e, l, i, o, a, u)),
    (e.context = _d(null)),
    (n = e.current),
    (r = ze()),
    (l = en(n)),
    (i = jt(r, l)),
    (i.callback = t ?? null),
    qt(n, i, l),
    (e.current.lanes = l),
    fl(e, l, r),
    $e(e, r),
    e
  );
}
function Ui(e, t, n, r) {
  var l = t.current,
    i = ze(),
    o = en(l);
  return (
    (n = _d(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = jt(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qt(l, t, o)),
    e !== null && (mt(e, l, o, i), Kl(e, l, o)),
    o
  );
}
function Ei(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ws(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pu(e, t) {
  Ws(e, t), (e = e.alternate) && Ws(e, t);
}
function F1() {
  return null;
}
var Nd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function mu(e) {
  this._internalRoot = e;
}
Ai.prototype.render = mu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Ui(e, t, null, null);
};
Ai.prototype.unmount = mu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      Ui(null, e, null, null);
    }),
      (t[Rt] = null);
  }
};
function Ai(e) {
  this._internalRoot = e;
}
Ai.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = lf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    Wt.splice(n, 0, e), n === 0 && af(e);
  }
};
function vu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Bi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qs() {}
function U1(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = Ei(o);
        i.call(s);
      };
    }
    var o = jd(t, r, e, 0, null, !1, !1, "", Qs);
    return (
      (e._reactRootContainer = o),
      (e[Rt] = o.current),
      el(e.nodeType === 8 ? e.parentNode : e),
      Cn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = Ei(u);
      a.call(s);
    };
  }
  var u = hu(e, 0, !1, null, null, !1, !1, "", Qs);
  return (
    (e._reactRootContainer = u),
    (e[Rt] = u.current),
    el(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      Ui(t, u, n, r);
    }),
    u
  );
}
function $i(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = Ei(o);
        a.call(u);
      };
    }
    Ui(t, o, e, l);
  } else o = U1(n, t, e, l, r);
  return Ei(o);
}
nf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dr(t.pendingLanes);
        n !== 0 &&
          (Oa(t, n | 1), $e(t, de()), !(X & 6) && ((or = de() + 500), an()));
      }
      break;
    case 13:
      Cn(function () {
        var r = Tt(e, 1);
        if (r !== null) {
          var l = ze();
          mt(r, e, 1, l);
        }
      }),
        pu(e, 1);
  }
};
Ia = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728);
    if (t !== null) {
      var n = ze();
      mt(t, e, 134217728, n);
    }
    pu(e, 134217728);
  }
};
rf = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = Tt(e, t);
    if (n !== null) {
      var r = ze();
      mt(n, e, t, r);
    }
    pu(e, t);
  }
};
lf = function () {
  return G;
};
of = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
Fo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ro(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ti(r);
            if (!l) throw Error(_(90));
            Ic(r), Ro(r, l);
          }
        }
      }
      break;
    case "textarea":
      Uc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yn(e, !!n.multiple, t, !1);
  }
};
Qc = su;
Kc = Cn;
var A1 = { usingClientEntryPoint: !1, Events: [hl, An, Ti, Hc, Wc, su] },
  _r = {
    findFiberByHostInstance: hn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  B1 = {
    bundleType: _r.bundleType,
    version: _r.version,
    rendererPackageName: _r.rendererPackageName,
    rendererConfig: _r.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Xc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: _r.findFiberByHostInstance || F1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Al.isDisabled && Al.supportsFiber)
    try {
      (ji = Al.inject(B1)), (St = Al);
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A1;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vu(t)) throw Error(_(200));
  return I1(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!vu(e)) throw Error(_(299));
  var n = !1,
    r = "",
    l = Nd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = hu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Rt] = t.current),
    el(e.nodeType === 8 ? e.parentNode : e),
    new mu(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = Xc(t)), (e = e === null ? null : e.stateNode), e;
};
Xe.flushSync = function (e) {
  return Cn(e);
};
Xe.hydrate = function (e, t, n) {
  if (!Bi(t)) throw Error(_(200));
  return $i(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!vu(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Nd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = jd(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Rt] = t.current),
    el(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Ai(t);
};
Xe.render = function (e, t, n) {
  if (!Bi(t)) throw Error(_(200));
  return $i(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!Bi(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Cn(function () {
        $i(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rt] = null);
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = su;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Bi(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return $i(e, t, n, !1, r);
};
Xe.version = "18.3.1-next-f1338f8080-20240426";
function Ld() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ld);
    } catch (e) {
      console.error(e);
    }
}
Ld(), (Nc.exports = Xe);
var gu = Nc.exports;
const $1 = vc(gu),
  V1 = mc({ __proto__: null, default: $1 }, [gu]);
var Ks = gu;
(Eo.createRoot = Ks.createRoot), (Eo.hydrateRoot = Ks.hydrateRoot);
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oe() {
  return (
    (oe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oe.apply(this, arguments)
  );
}
var he;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(he || (he = {}));
const Ys = "popstate";
function H1(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: a } = r.location;
    return sl(
      "",
      { pathname: i, search: o, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : Pn(l);
  }
  return Q1(t, n, null, e);
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ar(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function W1() {
  return Math.random().toString(36).substr(2, 8);
}
function Zs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function sl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    oe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? un(t) : t,
      { state: n, key: (t && t.key) || r || W1() },
    )
  );
}
function Pn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function un(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Q1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    a = he.Pop,
    u = null,
    s = f();
  s == null && ((s = 0), o.replaceState(oe({}, o.state, { idx: s }), ""));
  function f() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    a = he.Pop;
    let T = f(),
      p = T == null ? null : T - s;
    (s = T), u && u({ action: a, location: x.location, delta: p });
  }
  function h(T, p) {
    a = he.Push;
    let c = sl(x.location, T, p);
    s = f() + 1;
    let m = Zs(c, s),
      E = x.createHref(c);
    try {
      o.pushState(m, "", E);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      l.location.assign(E);
    }
    i && u && u({ action: a, location: x.location, delta: 1 });
  }
  function k(T, p) {
    a = he.Replace;
    let c = sl(x.location, T, p);
    s = f();
    let m = Zs(c, s),
      E = x.createHref(c);
    o.replaceState(m, "", E),
      i && u && u({ action: a, location: x.location, delta: 0 });
  }
  function S(T) {
    let p = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof T == "string" ? T : Pn(T);
    return (
      (c = c.replace(/ $/, "%20")),
      Q(
        p,
        "No window.location.(origin|href) available to create URL for href: " +
          c,
      ),
      new URL(c, p)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(l, o);
    },
    listen(T) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Ys, d),
        (u = T),
        () => {
          l.removeEventListener(Ys, d), (u = null);
        }
      );
    },
    createHref(T) {
      return t(l, T);
    },
    createURL: S,
    encodeLocation(T) {
      let p = S(T);
      return { pathname: p.pathname, search: p.search, hash: p.hash };
    },
    push: h,
    replace: k,
    go(T) {
      return o.go(T);
    },
  };
  return x;
}
var re;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(re || (re = {}));
const K1 = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Y1(e) {
  return e.index === !0;
}
function va(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, i],
        a = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (Q(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        Q(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Y1(l))
      ) {
        let u = oe({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = oe({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = va(l.children, t, o, r)), u
        );
      }
    })
  );
}
function Kn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? un(t) : t,
    l = Dt(r.pathname || "/", n);
  if (l == null) return null;
  let i = Rd(e);
  X1(i);
  let o = null;
  for (let a = 0; o == null && a < i.length; ++a) {
    let u = o0(l);
    o = l0(i[a], u);
  }
  return o;
}
function Z1(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Rd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, a) => {
    let u = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    u.relativePath.startsWith("/") &&
      (Q(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Nt([r, u.relativePath]),
      f = n.concat(u);
    i.children &&
      i.children.length > 0 &&
      (Q(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      Rd(i.children, t, f, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: n0(s, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) l(i, o);
      else for (let u of Td(i.path)) l(i, o, u);
    }),
    t
  );
}
function Td(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Td(r.join("/")),
    a = [];
  return (
    a.push(...o.map((u) => (u === "" ? i : [i, u].join("/")))),
    l && a.push(...o),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function X1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : r0(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const G1 = /^:[\w-]+$/,
  J1 = 3,
  q1 = 2,
  b1 = 1,
  e0 = 10,
  t0 = -2,
  Xs = (e) => e === "*";
function n0(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Xs) && (r += t0),
    t && (r += q1),
    n
      .filter((l) => !Xs(l))
      .reduce((l, i) => l + (G1.test(i) ? J1 : i === "" ? b1 : e0), r)
  );
}
function r0(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function l0(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let a = n[o],
      u = o === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      f = ga(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s,
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let d = a.route;
    i.push({
      params: r,
      pathname: Nt([l, f.pathname]),
      pathnameBase: s0(Nt([l, f.pathnameBase])),
      route: d,
    }),
      f.pathnameBase !== "/" && (l = Nt([l, f.pathnameBase]));
  }
  return i;
}
function ga(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = i0(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, f, d) => {
      let { paramName: h, isOptional: k } = f;
      if (h === "*") {
        let x = a[d] || "";
        o = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const S = a[d];
      return (
        k && !S ? (s[h] = void 0) : (s[h] = (S || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function i0(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ar(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function o0(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ar(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function Dt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function a0(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? un(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : u0(n, t)) : t,
    search: c0(r),
    hash: f0(l),
  };
}
function u0(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function wo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Md(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function yu(e, t) {
  let n = Md(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function wu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = un(e))
    : ((l = oe({}, e)),
      Q(
        !l.pathname || !l.pathname.includes("?"),
        wo("?", "pathname", "search", l),
      ),
      Q(
        !l.pathname || !l.pathname.includes("#"),
        wo("#", "pathname", "hash", l),
      ),
      Q(!l.search || !l.search.includes("#"), wo("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    a;
  if (o == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      l.pathname = h.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let u = a0(l, a),
    s = o && o !== "/" && o.endsWith("/"),
    f = (i || o === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || f) && (u.pathname += "/"), u;
}
const Nt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  s0 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  c0 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  f0 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class xu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Su(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Dd = ["post", "put", "patch", "delete"],
  d0 = new Set(Dd),
  h0 = ["get", ...Dd],
  p0 = new Set(h0),
  m0 = new Set([301, 302, 303, 307, 308]),
  v0 = new Set([307, 308]),
  xo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  g0 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  jr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  ku = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  y0 = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  zd = "remix-router-transitions";
function w0(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Q(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    l = (w) => ({ hasErrorBoundary: g(w) });
  } else l = y0;
  let i = {},
    o = va(e.routes, l, void 0, i),
    a,
    u = e.basename || "/",
    s = e.unstable_dataStrategy || E0,
    f = oe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    d = null,
    h = new Set(),
    k = null,
    S = null,
    x = null,
    T = e.hydrationData != null,
    p = Kn(o, e.history.location, u),
    c = null;
  if (p == null) {
    let g = be(404, { pathname: e.history.location.pathname }),
      { matches: w, route: C } = ic(o);
    (p = w), (c = { [C.id]: g });
  }
  let m,
    E = p.some((g) => g.route.lazy),
    L = p.some((g) => g.route.loader);
  if (E) m = !1;
  else if (!L) m = !0;
  else if (f.v7_partialHydration) {
    let g = e.hydrationData ? e.hydrationData.loaderData : null,
      w = e.hydrationData ? e.hydrationData.errors : null,
      C = (j) =>
        j.route.loader
          ? typeof j.route.loader == "function" && j.route.loader.hydrate === !0
            ? !1
            : (g && g[j.route.id] !== void 0) || (w && w[j.route.id] !== void 0)
          : !0;
    if (w) {
      let j = p.findIndex((O) => w[O.route.id] !== void 0);
      m = p.slice(0, j + 1).every(C);
    } else m = p.every(C);
  } else m = e.hydrationData != null;
  let M,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: p,
      initialized: m,
      navigation: xo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || c,
      fetchers: new Map(),
      blockers: new Map(),
    },
    R = he.Pop,
    F = !1,
    D,
    Y = !1,
    fe = new Map(),
    ie = null,
    xe = !1,
    at = !1,
    Ot = [],
    It = [],
    N = new Map(),
    A = 0,
    $ = -1,
    J = new Map(),
    q = new Set(),
    ut = new Map(),
    Ve = new Map(),
    He = new Set(),
    Te = new Map(),
    Je = new Map(),
    Hi = !1;
  function eh() {
    if (
      ((d = e.history.listen((g) => {
        let { action: w, location: C, delta: j } = g;
        if (Hi) {
          Hi = !1;
          return;
        }
        ar(
          Je.size === 0 || j != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let O = zu({
          currentLocation: v.location,
          nextLocation: C,
          historyAction: w,
        });
        if (O && j != null) {
          (Hi = !0),
            e.history.go(j * -1),
            wl(O, {
              state: "blocked",
              location: C,
              proceed() {
                wl(O, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: C,
                }),
                  e.history.go(j);
              },
              reset() {
                let H = new Map(v.blockers);
                H.set(O, jr), We({ blockers: H });
              },
            });
          return;
        }
        return cn(w, C);
      })),
      n)
    ) {
      O0(t, fe);
      let g = () => I0(t, fe);
      t.addEventListener("pagehide", g),
        (ie = () => t.removeEventListener("pagehide", g));
    }
    return v.initialized || cn(he.Pop, v.location, { initialHydration: !0 }), M;
  }
  function th() {
    d && d(),
      ie && ie(),
      h.clear(),
      D && D.abort(),
      v.fetchers.forEach((g, w) => yl(w)),
      v.blockers.forEach((g, w) => Du(w));
  }
  function nh(g) {
    return h.add(g), () => h.delete(g);
  }
  function We(g, w) {
    w === void 0 && (w = {}), (v = oe({}, v, g));
    let C = [],
      j = [];
    f.v7_fetcherPersist &&
      v.fetchers.forEach((O, H) => {
        O.state === "idle" && (He.has(H) ? j.push(H) : C.push(H));
      }),
      [...h].forEach((O) =>
        O(v, {
          deletedFetchers: j,
          unstable_viewTransitionOpts: w.viewTransitionOpts,
          unstable_flushSync: w.flushSync === !0,
        }),
      ),
      f.v7_fetcherPersist &&
        (C.forEach((O) => v.fetchers.delete(O)), j.forEach((O) => yl(O)));
  }
  function hr(g, w, C) {
    var j, O;
    let { flushSync: H } = C === void 0 ? {} : C,
      U =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        dt(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((j = g.state) == null ? void 0 : j._isRedirect) !== !0,
      I;
    w.actionData
      ? Object.keys(w.actionData).length > 0
        ? (I = w.actionData)
        : (I = null)
      : U
        ? (I = v.actionData)
        : (I = null);
    let W = w.loaderData
        ? rc(v.loaderData, w.loaderData, w.matches || [], w.errors)
        : v.loaderData,
      V = v.blockers;
    V.size > 0 && ((V = new Map(V)), V.forEach((B, ne) => V.set(ne, jr)));
    let Se =
      F === !0 ||
      (v.navigation.formMethod != null &&
        dt(v.navigation.formMethod) &&
        ((O = g.state) == null ? void 0 : O._isRedirect) !== !0);
    a && ((o = a), (a = void 0)),
      xe ||
        R === he.Pop ||
        (R === he.Push
          ? e.history.push(g, g.state)
          : R === he.Replace && e.history.replace(g, g.state));
    let ke;
    if (R === he.Pop) {
      let B = fe.get(v.location.pathname);
      B && B.has(g.pathname)
        ? (ke = { currentLocation: v.location, nextLocation: g })
        : fe.has(g.pathname) &&
          (ke = { currentLocation: g, nextLocation: v.location });
    } else if (Y) {
      let B = fe.get(v.location.pathname);
      B
        ? B.add(g.pathname)
        : ((B = new Set([g.pathname])), fe.set(v.location.pathname, B)),
        (ke = { currentLocation: v.location, nextLocation: g });
    }
    We(
      oe({}, w, {
        actionData: I,
        loaderData: W,
        historyAction: R,
        location: g,
        initialized: !0,
        navigation: xo,
        revalidation: "idle",
        restoreScrollPosition: Iu(g, w.matches || v.matches),
        preventScrollReset: Se,
        blockers: V,
      }),
      { viewTransitionOpts: ke, flushSync: H === !0 },
    ),
      (R = he.Pop),
      (F = !1),
      (Y = !1),
      (xe = !1),
      (at = !1),
      (Ot = []),
      (It = []);
  }
  async function ju(g, w) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let C = ya(
        v.location,
        v.matches,
        u,
        f.v7_prependBasename,
        g,
        f.v7_relativeSplatPath,
        w == null ? void 0 : w.fromRouteId,
        w == null ? void 0 : w.relative,
      ),
      {
        path: j,
        submission: O,
        error: H,
      } = Gs(f.v7_normalizeFormMethod, !1, C, w),
      U = v.location,
      I = sl(v.location, j, w && w.state);
    I = oe({}, I, e.history.encodeLocation(I));
    let W = w && w.replace != null ? w.replace : void 0,
      V = he.Push;
    W === !0
      ? (V = he.Replace)
      : W === !1 ||
        (O != null &&
          dt(O.formMethod) &&
          O.formAction === v.location.pathname + v.location.search &&
          (V = he.Replace));
    let Se =
        w && "preventScrollReset" in w ? w.preventScrollReset === !0 : void 0,
      ke = (w && w.unstable_flushSync) === !0,
      B = zu({ currentLocation: U, nextLocation: I, historyAction: V });
    if (B) {
      wl(B, {
        state: "blocked",
        location: I,
        proceed() {
          wl(B, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: I,
          }),
            ju(g, w);
        },
        reset() {
          let ne = new Map(v.blockers);
          ne.set(B, jr), We({ blockers: ne });
        },
      });
      return;
    }
    return await cn(V, I, {
      submission: O,
      pendingError: H,
      preventScrollReset: Se,
      replace: w && w.replace,
      enableViewTransition: w && w.unstable_viewTransition,
      flushSync: ke,
    });
  }
  function rh() {
    if (
      (Wi(),
      We({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        cn(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      cn(R || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function cn(g, w, C) {
    D && D.abort(),
      (D = null),
      (R = g),
      (xe = (C && C.startUninterruptedRevalidation) === !0),
      dh(v.location, v.matches),
      (F = (C && C.preventScrollReset) === !0),
      (Y = (C && C.enableViewTransition) === !0);
    let j = a || o,
      O = C && C.overrideNavigation,
      H = Kn(j, w, u),
      U = (C && C.flushSync) === !0;
    if (!H) {
      let B = be(404, { pathname: w.pathname }),
        { matches: ne, route: ge } = ic(j);
      Qi(),
        hr(
          w,
          { matches: ne, loaderData: {}, errors: { [ge.id]: B } },
          { flushSync: U },
        );
      return;
    }
    if (
      v.initialized &&
      !at &&
      L0(v.location, w) &&
      !(C && C.submission && dt(C.submission.formMethod))
    ) {
      hr(w, { matches: H }, { flushSync: U });
      return;
    }
    D = new AbortController();
    let I = Dn(e.history, w, D.signal, C && C.submission),
      W;
    if (C && C.pendingError)
      W = [Wr(H).route.id, { type: re.error, error: C.pendingError }];
    else if (C && C.submission && dt(C.submission.formMethod)) {
      let B = await lh(I, w, C.submission, H, {
        replace: C.replace,
        flushSync: U,
      });
      if (B.shortCircuited) return;
      (W = B.pendingActionResult),
        (O = So(w, C.submission)),
        (U = !1),
        (I = Dn(e.history, I.url, I.signal));
    }
    let {
      shortCircuited: V,
      loaderData: Se,
      errors: ke,
    } = await ih(
      I,
      w,
      H,
      O,
      C && C.submission,
      C && C.fetcherSubmission,
      C && C.replace,
      C && C.initialHydration === !0,
      U,
      W,
    );
    V ||
      ((D = null),
      hr(w, oe({ matches: H }, lc(W), { loaderData: Se, errors: ke })));
  }
  async function lh(g, w, C, j, O) {
    O === void 0 && (O = {}), Wi();
    let H = D0(w, C);
    We({ navigation: H }, { flushSync: O.flushSync === !0 });
    let U,
      I = xa(j, w);
    if (!I.route.action && !I.route.lazy)
      U = {
        type: re.error,
        error: be(405, {
          method: g.method,
          pathname: w.pathname,
          routeId: I.route.id,
        }),
      };
    else if (((U = (await mr("action", g, [I], j))[0]), g.signal.aborted))
      return { shortCircuited: !0 };
    if (gn(U)) {
      let W;
      return (
        O && O.replace != null
          ? (W = O.replace)
          : (W =
              ec(U.response.headers.get("Location"), new URL(g.url), u) ===
              v.location.pathname + v.location.search),
        await pr(g, U, { submission: C, replace: W }),
        { shortCircuited: !0 }
      );
    }
    if (vn(U)) throw be(400, { type: "defer-action" });
    if (nt(U)) {
      let W = Wr(j, I.route.id);
      return (
        (O && O.replace) !== !0 && (R = he.Push),
        { pendingActionResult: [W.route.id, U] }
      );
    }
    return { pendingActionResult: [I.route.id, U] };
  }
  async function ih(g, w, C, j, O, H, U, I, W, V) {
    let Se = j || So(w, O),
      ke = O || H || uc(Se),
      B = a || o,
      [ne, ge] = Js(
        e.history,
        v,
        C,
        ke,
        w,
        f.v7_partialHydration && I === !0,
        f.unstable_skipActionErrorRevalidation,
        at,
        Ot,
        It,
        He,
        ut,
        q,
        B,
        u,
        V,
      );
    if (
      (Qi(
        (Z) =>
          !(C && C.some((Me) => Me.route.id === Z)) ||
          (ne && ne.some((Me) => Me.route.id === Z)),
      ),
      ($ = ++A),
      ne.length === 0 && ge.length === 0)
    ) {
      let Z = Tu();
      return (
        hr(
          w,
          oe(
            {
              matches: C,
              loaderData: {},
              errors: V && nt(V[1]) ? { [V[0]]: V[1].error } : null,
            },
            lc(V),
            Z ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: W },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!xe && (!f.v7_partialHydration || !I)) {
      ge.forEach((Me) => {
        let qe = v.fetchers.get(Me.key),
          Ee = Nr(void 0, qe ? qe.data : void 0);
        v.fetchers.set(Me.key, Ee);
      });
      let Z;
      V && !nt(V[1])
        ? (Z = { [V[0]]: V[1].data })
        : v.actionData &&
          (Object.keys(v.actionData).length === 0
            ? (Z = null)
            : (Z = v.actionData)),
        We(
          oe(
            { navigation: Se },
            Z !== void 0 ? { actionData: Z } : {},
            ge.length > 0 ? { fetchers: new Map(v.fetchers) } : {},
          ),
          { flushSync: W },
        );
    }
    ge.forEach((Z) => {
      N.has(Z.key) && Ut(Z.key), Z.controller && N.set(Z.key, Z.controller);
    });
    let gr = () => ge.forEach((Z) => Ut(Z.key));
    D && D.signal.addEventListener("abort", gr);
    let { loaderResults: At, fetcherResults: Ln } = await Nu(
      v.matches,
      C,
      ne,
      ge,
      g,
    );
    if (g.signal.aborted) return { shortCircuited: !0 };
    D && D.signal.removeEventListener("abort", gr),
      ge.forEach((Z) => N.delete(Z.key));
    let Rn = oc([...At, ...Ln]);
    if (Rn) {
      if (Rn.idx >= ne.length) {
        let Z = ge[Rn.idx - ne.length].key;
        q.add(Z);
      }
      return await pr(g, Rn.result, { replace: U }), { shortCircuited: !0 };
    }
    let { loaderData: Tn, errors: gt } = nc(v, C, ne, At, V, ge, Ln, Te);
    Te.forEach((Z, Me) => {
      Z.subscribe((qe) => {
        (qe || Z.done) && Te.delete(Me);
      });
    }),
      f.v7_partialHydration &&
        I &&
        v.errors &&
        Object.entries(v.errors)
          .filter((Z) => {
            let [Me] = Z;
            return !ne.some((qe) => qe.route.id === Me);
          })
          .forEach((Z) => {
            let [Me, qe] = Z;
            gt = Object.assign(gt || {}, { [Me]: qe });
          });
    let xl = Tu(),
      Sl = Mu($),
      kl = xl || Sl || ge.length > 0;
    return oe(
      { loaderData: Tn, errors: gt },
      kl ? { fetchers: new Map(v.fetchers) } : {},
    );
  }
  function oh(g, w, C, j) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    N.has(g) && Ut(g);
    let O = (j && j.unstable_flushSync) === !0,
      H = a || o,
      U = ya(
        v.location,
        v.matches,
        u,
        f.v7_prependBasename,
        C,
        f.v7_relativeSplatPath,
        w,
        j == null ? void 0 : j.relative,
      ),
      I = Kn(H, U, u);
    if (!I) {
      vr(g, w, be(404, { pathname: U }), { flushSync: O });
      return;
    }
    let {
      path: W,
      submission: V,
      error: Se,
    } = Gs(f.v7_normalizeFormMethod, !0, U, j);
    if (Se) {
      vr(g, w, Se, { flushSync: O });
      return;
    }
    let ke = xa(I, W);
    if (((F = (j && j.preventScrollReset) === !0), V && dt(V.formMethod))) {
      ah(g, w, W, ke, I, O, V);
      return;
    }
    ut.set(g, { routeId: w, path: W }), uh(g, w, W, ke, I, O, V);
  }
  async function ah(g, w, C, j, O, H, U) {
    if ((Wi(), ut.delete(g), !j.route.action && !j.route.lazy)) {
      let Ee = be(405, { method: U.formMethod, pathname: C, routeId: w });
      vr(g, w, Ee, { flushSync: H });
      return;
    }
    let I = v.fetchers.get(g);
    Ft(g, z0(U, I), { flushSync: H });
    let W = new AbortController(),
      V = Dn(e.history, C, W.signal, U);
    N.set(g, W);
    let Se = A,
      B = (await mr("action", V, [j], O))[0];
    if (V.signal.aborted) {
      N.get(g) === W && N.delete(g);
      return;
    }
    if (f.v7_fetcherPersist && He.has(g)) {
      if (gn(B) || nt(B)) {
        Ft(g, $t(void 0));
        return;
      }
    } else {
      if (gn(B))
        if ((N.delete(g), $ > Se)) {
          Ft(g, $t(void 0));
          return;
        } else
          return q.add(g), Ft(g, Nr(U)), pr(V, B, { fetcherSubmission: U });
      if (nt(B)) {
        vr(g, w, B.error);
        return;
      }
    }
    if (vn(B)) throw be(400, { type: "defer-action" });
    let ne = v.navigation.location || v.location,
      ge = Dn(e.history, ne, W.signal),
      gr = a || o,
      At =
        v.navigation.state !== "idle"
          ? Kn(gr, v.navigation.location, u)
          : v.matches;
    Q(At, "Didn't find any matches after fetcher action");
    let Ln = ++A;
    J.set(g, Ln);
    let Rn = Nr(U, B.data);
    v.fetchers.set(g, Rn);
    let [Tn, gt] = Js(
      e.history,
      v,
      At,
      U,
      ne,
      !1,
      f.unstable_skipActionErrorRevalidation,
      at,
      Ot,
      It,
      He,
      ut,
      q,
      gr,
      u,
      [j.route.id, B],
    );
    gt
      .filter((Ee) => Ee.key !== g)
      .forEach((Ee) => {
        let yr = Ee.key,
          Fu = v.fetchers.get(yr),
          ph = Nr(void 0, Fu ? Fu.data : void 0);
        v.fetchers.set(yr, ph),
          N.has(yr) && Ut(yr),
          Ee.controller && N.set(yr, Ee.controller);
      }),
      We({ fetchers: new Map(v.fetchers) });
    let xl = () => gt.forEach((Ee) => Ut(Ee.key));
    W.signal.addEventListener("abort", xl);
    let { loaderResults: Sl, fetcherResults: kl } = await Nu(
      v.matches,
      At,
      Tn,
      gt,
      ge,
    );
    if (W.signal.aborted) return;
    W.signal.removeEventListener("abort", xl),
      J.delete(g),
      N.delete(g),
      gt.forEach((Ee) => N.delete(Ee.key));
    let Z = oc([...Sl, ...kl]);
    if (Z) {
      if (Z.idx >= Tn.length) {
        let Ee = gt[Z.idx - Tn.length].key;
        q.add(Ee);
      }
      return pr(ge, Z.result);
    }
    let { loaderData: Me, errors: qe } = nc(
      v,
      v.matches,
      Tn,
      Sl,
      void 0,
      gt,
      kl,
      Te,
    );
    if (v.fetchers.has(g)) {
      let Ee = $t(B.data);
      v.fetchers.set(g, Ee);
    }
    Mu(Ln),
      v.navigation.state === "loading" && Ln > $
        ? (Q(R, "Expected pending action"),
          D && D.abort(),
          hr(v.navigation.location, {
            matches: At,
            loaderData: Me,
            errors: qe,
            fetchers: new Map(v.fetchers),
          }))
        : (We({
            errors: qe,
            loaderData: rc(v.loaderData, Me, At, qe),
            fetchers: new Map(v.fetchers),
          }),
          (at = !1));
  }
  async function uh(g, w, C, j, O, H, U) {
    let I = v.fetchers.get(g);
    Ft(g, Nr(U, I ? I.data : void 0), { flushSync: H });
    let W = new AbortController(),
      V = Dn(e.history, C, W.signal);
    N.set(g, W);
    let Se = A,
      B = (await mr("loader", V, [j], O))[0];
    if (
      (vn(B) && (B = (await Ud(B, V.signal, !0)) || B),
      N.get(g) === W && N.delete(g),
      !V.signal.aborted)
    ) {
      if (He.has(g)) {
        Ft(g, $t(void 0));
        return;
      }
      if (gn(B))
        if ($ > Se) {
          Ft(g, $t(void 0));
          return;
        } else {
          q.add(g), await pr(V, B);
          return;
        }
      if (nt(B)) {
        vr(g, w, B.error);
        return;
      }
      Q(!vn(B), "Unhandled fetcher deferred data"), Ft(g, $t(B.data));
    }
  }
  async function pr(g, w, C) {
    let {
      submission: j,
      fetcherSubmission: O,
      replace: H,
    } = C === void 0 ? {} : C;
    w.response.headers.has("X-Remix-Revalidate") && (at = !0);
    let U = w.response.headers.get("Location");
    Q(U, "Expected a Location header on the redirect Response"),
      (U = ec(U, new URL(g.url), u));
    let I = sl(v.location, U, { _isRedirect: !0 });
    if (n) {
      let ne = !1;
      if (w.response.headers.has("X-Remix-Reload-Document")) ne = !0;
      else if (ku.test(U)) {
        const ge = e.history.createURL(U);
        ne = ge.origin !== t.location.origin || Dt(ge.pathname, u) == null;
      }
      if (ne) {
        H ? t.location.replace(U) : t.location.assign(U);
        return;
      }
    }
    D = null;
    let W = H === !0 ? he.Replace : he.Push,
      { formMethod: V, formAction: Se, formEncType: ke } = v.navigation;
    !j && !O && V && Se && ke && (j = uc(v.navigation));
    let B = j || O;
    if (v0.has(w.response.status) && B && dt(B.formMethod))
      await cn(W, I, {
        submission: oe({}, B, { formAction: U }),
        preventScrollReset: F,
      });
    else {
      let ne = So(I, j);
      await cn(W, I, {
        overrideNavigation: ne,
        fetcherSubmission: O,
        preventScrollReset: F,
      });
    }
  }
  async function mr(g, w, C, j) {
    try {
      let O = await C0(s, g, w, C, j, i, l);
      return await Promise.all(
        O.map((H, U) => {
          if (R0(H)) {
            let I = H.result;
            return {
              type: re.redirect,
              response: j0(I, w, C[U].route.id, j, u, f.v7_relativeSplatPath),
            };
          }
          return _0(H);
        }),
      );
    } catch (O) {
      return C.map(() => ({ type: re.error, error: O }));
    }
  }
  async function Nu(g, w, C, j, O) {
    let [H, ...U] = await Promise.all([
      C.length ? mr("loader", O, C, w) : [],
      ...j.map((I) => {
        if (I.matches && I.match && I.controller) {
          let W = Dn(e.history, I.path, I.controller.signal);
          return mr("loader", W, [I.match], I.matches).then((V) => V[0]);
        } else
          return Promise.resolve({
            type: re.error,
            error: be(404, { pathname: I.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        ac(
          g,
          C,
          H,
          H.map(() => O.signal),
          !1,
          v.loaderData,
        ),
        ac(
          g,
          j.map((I) => I.match),
          U,
          j.map((I) => (I.controller ? I.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: H, fetcherResults: U }
    );
  }
  function Wi() {
    (at = !0),
      Ot.push(...Qi()),
      ut.forEach((g, w) => {
        N.has(w) && (It.push(w), Ut(w));
      });
  }
  function Ft(g, w, C) {
    C === void 0 && (C = {}),
      v.fetchers.set(g, w),
      We(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (C && C.flushSync) === !0 },
      );
  }
  function vr(g, w, C, j) {
    j === void 0 && (j = {});
    let O = Wr(v.matches, w);
    yl(g),
      We(
        { errors: { [O.route.id]: C }, fetchers: new Map(v.fetchers) },
        { flushSync: (j && j.flushSync) === !0 },
      );
  }
  function Lu(g) {
    return (
      f.v7_fetcherPersist &&
        (Ve.set(g, (Ve.get(g) || 0) + 1), He.has(g) && He.delete(g)),
      v.fetchers.get(g) || g0
    );
  }
  function yl(g) {
    let w = v.fetchers.get(g);
    N.has(g) && !(w && w.state === "loading" && J.has(g)) && Ut(g),
      ut.delete(g),
      J.delete(g),
      q.delete(g),
      He.delete(g),
      v.fetchers.delete(g);
  }
  function sh(g) {
    if (f.v7_fetcherPersist) {
      let w = (Ve.get(g) || 0) - 1;
      w <= 0 ? (Ve.delete(g), He.add(g)) : Ve.set(g, w);
    } else yl(g);
    We({ fetchers: new Map(v.fetchers) });
  }
  function Ut(g) {
    let w = N.get(g);
    Q(w, "Expected fetch controller: " + g), w.abort(), N.delete(g);
  }
  function Ru(g) {
    for (let w of g) {
      let C = Lu(w),
        j = $t(C.data);
      v.fetchers.set(w, j);
    }
  }
  function Tu() {
    let g = [],
      w = !1;
    for (let C of q) {
      let j = v.fetchers.get(C);
      Q(j, "Expected fetcher: " + C),
        j.state === "loading" && (q.delete(C), g.push(C), (w = !0));
    }
    return Ru(g), w;
  }
  function Mu(g) {
    let w = [];
    for (let [C, j] of J)
      if (j < g) {
        let O = v.fetchers.get(C);
        Q(O, "Expected fetcher: " + C),
          O.state === "loading" && (Ut(C), J.delete(C), w.push(C));
      }
    return Ru(w), w.length > 0;
  }
  function ch(g, w) {
    let C = v.blockers.get(g) || jr;
    return Je.get(g) !== w && Je.set(g, w), C;
  }
  function Du(g) {
    v.blockers.delete(g), Je.delete(g);
  }
  function wl(g, w) {
    let C = v.blockers.get(g) || jr;
    Q(
      (C.state === "unblocked" && w.state === "blocked") ||
        (C.state === "blocked" && w.state === "blocked") ||
        (C.state === "blocked" && w.state === "proceeding") ||
        (C.state === "blocked" && w.state === "unblocked") ||
        (C.state === "proceeding" && w.state === "unblocked"),
      "Invalid blocker state transition: " + C.state + " -> " + w.state,
    );
    let j = new Map(v.blockers);
    j.set(g, w), We({ blockers: j });
  }
  function zu(g) {
    let { currentLocation: w, nextLocation: C, historyAction: j } = g;
    if (Je.size === 0) return;
    Je.size > 1 && ar(!1, "A router only supports one blocker at a time");
    let O = Array.from(Je.entries()),
      [H, U] = O[O.length - 1],
      I = v.blockers.get(H);
    if (
      !(I && I.state === "proceeding") &&
      U({ currentLocation: w, nextLocation: C, historyAction: j })
    )
      return H;
  }
  function Qi(g) {
    let w = [];
    return (
      Te.forEach((C, j) => {
        (!g || g(j)) && (C.cancel(), w.push(j), Te.delete(j));
      }),
      w
    );
  }
  function fh(g, w, C) {
    if (((k = g), (x = w), (S = C || null), !T && v.navigation === xo)) {
      T = !0;
      let j = Iu(v.location, v.matches);
      j != null && We({ restoreScrollPosition: j });
    }
    return () => {
      (k = null), (x = null), (S = null);
    };
  }
  function Ou(g, w) {
    return (
      (S &&
        S(
          g,
          w.map((j) => Z1(j, v.loaderData)),
        )) ||
      g.key
    );
  }
  function dh(g, w) {
    if (k && x) {
      let C = Ou(g, w);
      k[C] = x();
    }
  }
  function Iu(g, w) {
    if (k) {
      let C = Ou(g, w),
        j = k[C];
      if (typeof j == "number") return j;
    }
    return null;
  }
  function hh(g) {
    (i = {}), (a = va(g, l, void 0, i));
  }
  return (
    (M = {
      get basename() {
        return u;
      },
      get future() {
        return f;
      },
      get state() {
        return v;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: eh,
      subscribe: nh,
      enableScrollRestoration: fh,
      navigate: ju,
      fetch: oh,
      revalidate: rh,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: Lu,
      deleteFetcher: sh,
      dispose: th,
      getBlocker: ch,
      deleteBlocker: Du,
      _internalFetchControllers: N,
      _internalActiveDeferreds: Te,
      _internalSetRoutes: hh,
    }),
    M
  );
}
function x0(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function ya(e, t, n, r, l, i, o, a) {
  let u, s;
  if (o) {
    u = [];
    for (let d of t)
      if ((u.push(d), d.route.id === o)) {
        s = d;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let f = wu(l || ".", yu(u, i), Dt(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((f.search = e.search), (f.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      s &&
      s.route.index &&
      !Eu(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (f.pathname = f.pathname === "/" ? n : Nt([n, f.pathname])),
    Pn(f)
  );
}
function Gs(e, t, n, r) {
  if (!r || !x0(r)) return { path: n };
  if (r.formMethod && !M0(r.formMethod))
    return { path: n, error: be(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: be(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    a = Id(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!dt(o)) return l();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((k, S) => {
                let [x, T] = S;
                return (
                  "" +
                  k +
                  x +
                  "=" +
                  T +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!dt(o)) return l();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  Q(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let u, s;
  if (r.formData) (u = wa(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = wa(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = tc(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = tc(u));
    } catch {
      return l();
    }
  let f = {
    formMethod: o,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (dt(f.formMethod)) return { path: n, submission: f };
  let d = un(n);
  return (
    t && d.search && Eu(d.search) && u.append("index", ""),
    (d.search = "?" + u),
    { path: Pn(d), submission: f }
  );
}
function S0(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Js(e, t, n, r, l, i, o, a, u, s, f, d, h, k, S, x) {
  let T = x ? (nt(x[1]) ? x[1].error : x[1].data) : void 0,
    p = e.createURL(t.location),
    c = e.createURL(l),
    m = x && nt(x[1]) ? x[0] : void 0,
    E = m ? S0(n, m) : n,
    L = x ? x[1].statusCode : void 0,
    M = o && L && L >= 400,
    v = E.filter((F, D) => {
      let { route: Y } = F;
      if (Y.lazy) return !0;
      if (Y.loader == null) return !1;
      if (i)
        return typeof Y.loader != "function" || Y.loader.hydrate
          ? !0
          : t.loaderData[Y.id] === void 0 &&
              (!t.errors || t.errors[Y.id] === void 0);
      if (
        k0(t.loaderData, t.matches[D], F) ||
        u.some((xe) => xe === F.route.id)
      )
        return !0;
      let fe = t.matches[D],
        ie = F;
      return qs(
        F,
        oe(
          {
            currentUrl: p,
            currentParams: fe.params,
            nextUrl: c,
            nextParams: ie.params,
          },
          r,
          {
            actionResult: T,
            unstable_actionStatus: L,
            defaultShouldRevalidate: M
              ? !1
              : a ||
                p.pathname + p.search === c.pathname + c.search ||
                p.search !== c.search ||
                Od(fe, ie),
          },
        ),
      );
    }),
    R = [];
  return (
    d.forEach((F, D) => {
      if (i || !n.some((at) => at.route.id === F.routeId) || f.has(D)) return;
      let Y = Kn(k, F.path, S);
      if (!Y) {
        R.push({
          key: D,
          routeId: F.routeId,
          path: F.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let fe = t.fetchers.get(D),
        ie = xa(Y, F.path),
        xe = !1;
      h.has(D)
        ? (xe = !1)
        : s.includes(D)
          ? (xe = !0)
          : fe && fe.state !== "idle" && fe.data === void 0
            ? (xe = a)
            : (xe = qs(
                ie,
                oe(
                  {
                    currentUrl: p,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: c,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: T,
                    unstable_actionStatus: L,
                    defaultShouldRevalidate: M ? !1 : a,
                  },
                ),
              )),
        xe &&
          R.push({
            key: D,
            routeId: F.routeId,
            path: F.path,
            matches: Y,
            match: ie,
            controller: new AbortController(),
          });
    }),
    [v, R]
  );
}
function k0(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Od(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function qs(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function bs(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  Q(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let u = l[o] !== void 0 && o !== "hasErrorBoundary";
    ar(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !u && !K1.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, oe({}, t(l), { lazy: void 0 }));
}
function E0(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function C0(e, t, n, r, l, i, o, a) {
  let u = r.reduce((d, h) => d.add(h.route.id), new Set()),
    s = new Set(),
    f = await e({
      matches: l.map((d) => {
        let h = u.has(d.route.id);
        return oe({}, d, {
          shouldLoad: h,
          resolve: (S) => (
            s.add(d.route.id),
            h
              ? P0(t, n, d, i, o, S, a)
              : Promise.resolve({ type: re.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: a,
    });
  return (
    l.forEach((d) =>
      Q(
        s.has(d.route.id),
        '`match.resolve()` was not called for route id "' +
          d.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    f.filter((d, h) => u.has(l[h].route.id))
  );
}
async function P0(e, t, n, r, l, i, o) {
  let a,
    u,
    s = (f) => {
      let d,
        h = new Promise((x, T) => (d = T));
      (u = () => d()), t.signal.addEventListener("abort", u);
      let k = (x) =>
          typeof f != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : f(
                { request: t, params: n.params, context: o },
                ...(x !== void 0 ? [x] : []),
              ),
        S;
      return (
        i
          ? (S = i((x) => k(x)))
          : (S = (async () => {
              try {
                return { type: "data", result: await k() };
              } catch (x) {
                return { type: "error", result: x };
              }
            })()),
        Promise.race([S, h])
      );
    };
  try {
    let f = n.route[e];
    if (n.route.lazy)
      if (f) {
        let d,
          [h] = await Promise.all([
            s(f).catch((k) => {
              d = k;
            }),
            bs(n.route, l, r),
          ]);
        if (d !== void 0) throw d;
        a = h;
      } else if ((await bs(n.route, l, r), (f = n.route[e]), f)) a = await s(f);
      else if (e === "action") {
        let d = new URL(t.url),
          h = d.pathname + d.search;
        throw be(405, { method: t.method, pathname: h, routeId: n.route.id });
      } else return { type: re.data, result: void 0 };
    else if (f) a = await s(f);
    else {
      let d = new URL(t.url),
        h = d.pathname + d.search;
      throw be(404, { pathname: h });
    }
    Q(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (f) {
    return { type: re.error, result: f };
  } finally {
    u && t.signal.removeEventListener("abort", u);
  }
  return a;
}
async function _0(e) {
  let { result: t, type: n, status: r } = e;
  if (Fd(t)) {
    let o;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (o = null)
          : (o = await t.json())
        : (o = await t.text());
    } catch (a) {
      return { type: re.error, error: a };
    }
    return n === re.error
      ? {
          type: re.error,
          error: new xu(t.status, t.statusText, o),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: re.data, data: o, statusCode: t.status, headers: t.headers };
  }
  if (n === re.error)
    return { type: re.error, error: t, statusCode: Su(t) ? t.status : r };
  if (T0(t)) {
    var l, i;
    return {
      type: re.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((i = t.init) == null ? void 0 : i.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: re.data, data: t, statusCode: r };
}
function j0(e, t, n, r, l, i) {
  let o = e.headers.get("Location");
  if (
    (Q(
      o,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !ku.test(o))
  ) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (o = ya(new URL(t.url), a, l, !0, o, i)), e.headers.set("Location", o);
  }
  return e;
}
function ec(e, t, n) {
  if (ku.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      i = Dt(l.pathname, n) != null;
    if (l.origin === t.origin && i) return l.pathname + l.search + l.hash;
  }
  return e;
}
function Dn(e, t, n, r) {
  let l = e.createURL(Id(t)).toString(),
    i = { signal: n };
  if (r && dt(r.formMethod)) {
    let { formMethod: o, formEncType: a } = r;
    (i.method = o.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (i.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (i.body = wa(r.formData))
            : (i.body = r.formData);
  }
  return new Request(l, i);
}
function wa(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function tc(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function N0(e, t, n, r, l, i) {
  let o = {},
    a = null,
    u,
    s = !1,
    f = {},
    d = r && nt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((h, k) => {
      let S = t[k].route.id;
      if (
        (Q(!gn(h), "Cannot handle redirect results in processLoaderData"),
        nt(h))
      ) {
        let x = h.error;
        d !== void 0 && ((x = d), (d = void 0)), (a = a || {});
        {
          let T = Wr(e, S);
          a[T.route.id] == null && (a[T.route.id] = x);
        }
        (o[S] = void 0),
          s || ((s = !0), (u = Su(h.error) ? h.error.status : 500)),
          h.headers && (f[S] = h.headers);
      } else
        vn(h)
          ? (l.set(S, h.deferredData),
            (o[S] = h.deferredData.data),
            h.statusCode != null &&
              h.statusCode !== 200 &&
              !s &&
              (u = h.statusCode),
            h.headers && (f[S] = h.headers))
          : ((o[S] = h.data),
            h.statusCode && h.statusCode !== 200 && !s && (u = h.statusCode),
            h.headers && (f[S] = h.headers));
    }),
    d !== void 0 && r && ((a = { [r[0]]: d }), (o[r[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: u || 200, loaderHeaders: f }
  );
}
function nc(e, t, n, r, l, i, o, a) {
  let { loaderData: u, errors: s } = N0(t, n, r, l, a);
  for (let f = 0; f < i.length; f++) {
    let { key: d, match: h, controller: k } = i[f];
    Q(
      o !== void 0 && o[f] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let S = o[f];
    if (!(k && k.signal.aborted))
      if (nt(S)) {
        let x = Wr(e.matches, h == null ? void 0 : h.route.id);
        (s && s[x.route.id]) || (s = oe({}, s, { [x.route.id]: S.error })),
          e.fetchers.delete(d);
      } else if (gn(S)) Q(!1, "Unhandled fetcher revalidation redirect");
      else if (vn(S)) Q(!1, "Unhandled fetcher deferred data");
      else {
        let x = $t(S.data);
        e.fetchers.set(d, x);
      }
  }
  return { loaderData: u, errors: s };
}
function rc(e, t, n, r) {
  let l = oe({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function lc(e) {
  return e
    ? nt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Wr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function ic(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function be(e, t) {
  let { pathname: n, routeId: r, method: l, type: i } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
            ? (a = "defer() is not supported in actions")
            : i === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
        ? ((o = "Forbidden"),
          (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((o = "Not Found"), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((o = "Method Not Allowed"),
            l && n && r
              ? (a =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new xu(e || 500, o, new Error(a), !0)
  );
}
function oc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (gn(n)) return { result: n, idx: t };
  }
}
function Id(e) {
  let t = typeof e == "string" ? un(e) : e;
  return Pn(oe({}, t, { hash: "" }));
}
function L0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function R0(e) {
  return Fd(e.result) && m0.has(e.result.status);
}
function vn(e) {
  return e.type === re.deferred;
}
function nt(e) {
  return e.type === re.error;
}
function gn(e) {
  return (e && e.type) === re.redirect;
}
function T0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Fd(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function M0(e) {
  return p0.has(e.toLowerCase());
}
function dt(e) {
  return d0.has(e.toLowerCase());
}
async function ac(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let a = n[o],
      u = t[o];
    if (!u) continue;
    let s = e.find((d) => d.route.id === u.route.id),
      f = s != null && !Od(s, u) && (i && i[u.route.id]) !== void 0;
    if (vn(a) && (l || f)) {
      let d = r[o];
      Q(d, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Ud(a, d, l).then((h) => {
          h && (n[o] = h || n[o]);
        });
    }
  }
}
async function Ud(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: re.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: re.error, error: l };
      }
    return { type: re.data, data: e.deferredData.data };
  }
}
function Eu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function xa(e, t) {
  let n = typeof t == "string" ? un(t).search : t.search;
  if (e[e.length - 1].route.index && Eu(n || "")) return e[e.length - 1];
  let r = Md(e);
  return r[r.length - 1];
}
function uc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function So(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function D0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Nr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function z0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function $t(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function O0(e, t) {
  try {
    let n = e.sessionStorage.getItem(zd);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function I0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(zd, JSON.stringify(n));
    } catch (r) {
      ar(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ci() {
  return (
    (Ci = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ci.apply(this, arguments)
  );
}
const ml = P.createContext(null),
  Cu = P.createContext(null),
  sn = P.createContext(null),
  Pu = P.createContext(null),
  Nn = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ad = P.createContext(null);
function F0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  vl() || Q(!1);
  let { basename: r, navigator: l } = P.useContext(sn),
    { hash: i, pathname: o, search: a } = Vi(e, { relative: n }),
    u = o;
  return (
    r !== "/" && (u = o === "/" ? r : Nt([r, o])),
    l.createHref({ pathname: u, search: a, hash: i })
  );
}
function vl() {
  return P.useContext(Pu) != null;
}
function gl() {
  return vl() || Q(!1), P.useContext(Pu).location;
}
function Bd(e) {
  P.useContext(sn).static || P.useLayoutEffect(e);
}
function U0() {
  let { isDataRoute: e } = P.useContext(Nn);
  return e ? G0() : A0();
}
function A0() {
  vl() || Q(!1);
  let e = P.useContext(ml),
    { basename: t, future: n, navigator: r } = P.useContext(sn),
    { matches: l } = P.useContext(Nn),
    { pathname: i } = gl(),
    o = JSON.stringify(yu(l, n.v7_relativeSplatPath)),
    a = P.useRef(!1);
  return (
    Bd(() => {
      a.current = !0;
    }),
    P.useCallback(
      function (s, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let d = wu(s, JSON.parse(o), i, f.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Nt([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, o, i, e],
    )
  );
}
function Vi(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = P.useContext(sn),
    { matches: l } = P.useContext(Nn),
    { pathname: i } = gl(),
    o = JSON.stringify(yu(l, r.v7_relativeSplatPath));
  return P.useMemo(() => wu(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function B0(e, t, n, r) {
  vl() || Q(!1);
  let { navigator: l } = P.useContext(sn),
    { matches: i } = P.useContext(Nn),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let s = gl(),
    f;
  f = s;
  let d = f.pathname || "/",
    h = d;
  if (u !== "/") {
    let x = u.replace(/^\//, "").split("/");
    h = "/" + d.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let k = Kn(e, { pathname: h });
  return Q0(
    k &&
      k.map((x) =>
        Object.assign({}, x, {
          params: Object.assign({}, a, x.params),
          pathname: Nt([
            u,
            l.encodeLocation
              ? l.encodeLocation(x.pathname).pathname
              : x.pathname,
          ]),
          pathnameBase:
            x.pathnameBase === "/"
              ? u
              : Nt([
                  u,
                  l.encodeLocation
                    ? l.encodeLocation(x.pathnameBase).pathname
                    : x.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
    r,
  );
}
function $0() {
  let e = X0(),
    t = Su(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const V0 = P.createElement($0, null);
class H0 extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          Nn.Provider,
          { value: this.props.routeContext },
          P.createElement(Ad.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function W0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = P.useContext(ml);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Nn.Provider, { value: t }, r)
  );
}
function Q0(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let f = o.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    );
    f >= 0 || Q(!1), (o = o.slice(0, Math.min(o.length, f + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < o.length; f++) {
      let d = o[f];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (s = f),
        d.route.id)
      ) {
        let { loaderData: h, errors: k } = n,
          S =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!k || k[d.route.id] === void 0);
        if (d.route.lazy || S) {
          (u = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((f, d, h) => {
    let k,
      S = !1,
      x = null,
      T = null;
    n &&
      ((k = a && d.route.id ? a[d.route.id] : void 0),
      (x = d.route.errorElement || V0),
      u &&
        (s < 0 && h === 0
          ? (J0("route-fallback"), (S = !0), (T = null))
          : s === h &&
            ((S = !0), (T = d.route.hydrateFallbackElement || null))));
    let p = t.concat(o.slice(0, h + 1)),
      c = () => {
        let m;
        return (
          k
            ? (m = x)
            : S
              ? (m = T)
              : d.route.Component
                ? (m = P.createElement(d.route.Component, null))
                : d.route.element
                  ? (m = d.route.element)
                  : (m = f),
          P.createElement(W0, {
            match: d,
            routeContext: { outlet: f, matches: p, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? P.createElement(H0, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: k,
          children: c(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var $d = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })($d || {}),
  Pi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Pi || {});
function K0(e) {
  let t = P.useContext(ml);
  return t || Q(!1), t;
}
function Y0(e) {
  let t = P.useContext(Cu);
  return t || Q(!1), t;
}
function Z0(e) {
  let t = P.useContext(Nn);
  return t || Q(!1), t;
}
function Vd(e) {
  let t = Z0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Q(!1), n.route.id;
}
function X0() {
  var e;
  let t = P.useContext(Ad),
    n = Y0(Pi.UseRouteError),
    r = Vd(Pi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function G0() {
  let { router: e } = K0($d.UseNavigateStable),
    t = Vd(Pi.UseNavigateStable),
    n = P.useRef(!1);
  return (
    Bd(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, Ci({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
const sc = {};
function J0(e, t, n) {
  sc[e] || (sc[e] = !0);
}
function q0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = he.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = e;
  vl() && Q(!1);
  let u = t.replace(/^\/*/, "/"),
    s = P.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
        future: Ci({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, i, o],
    );
  typeof r == "string" && (r = un(r));
  let {
      pathname: f = "/",
      search: d = "",
      hash: h = "",
      state: k = null,
      key: S = "default",
    } = r,
    x = P.useMemo(() => {
      let T = Dt(f, u);
      return T == null
        ? null
        : {
            location: { pathname: T, search: d, hash: h, state: k, key: S },
            navigationType: l,
          };
    }, [u, f, d, h, k, S, l]);
  return x == null
    ? null
    : P.createElement(
        sn.Provider,
        { value: s },
        P.createElement(Pu.Provider, { children: n, value: x }),
      );
}
new Promise(() => {});
function b0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ur() {
  return (
    (ur = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ur.apply(this, arguments)
  );
}
function Hd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function em(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function tm(e, t) {
  return e.button === 0 && (!t || t === "_self") && !em(e);
}
const nm = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  rm = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  lm = "6";
try {
  window.__reactRouterVersion = lm;
} catch {}
function im(e, t) {
  return w0({
    basename: void 0,
    future: ur({}, void 0, { v7_prependBasename: !0 }),
    history: H1({ window: void 0 }),
    hydrationData: om(),
    routes: e,
    mapRouteProperties: b0,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function om() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ur({}, t, { errors: am(t.errors) })), t;
}
function am(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new xu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == "function")
          try {
            let o = new i(l.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = l;
  return n;
}
const Wd = P.createContext({ isTransitioning: !1 }),
  um = P.createContext(new Map()),
  sm = "startTransition",
  cc = Rh[sm],
  cm = "flushSync",
  fc = V1[cm];
function fm(e) {
  cc ? cc(e) : e();
}
function Lr(e) {
  fc ? fc(e) : e();
}
class dm {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function hm(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = P.useState(n.state),
    [o, a] = P.useState(),
    [u, s] = P.useState({ isTransitioning: !1 }),
    [f, d] = P.useState(),
    [h, k] = P.useState(),
    [S, x] = P.useState(),
    T = P.useRef(new Map()),
    { v7_startTransition: p } = r || {},
    c = P.useCallback(
      (v) => {
        p ? fm(v) : v();
      },
      [p],
    ),
    m = P.useCallback(
      (v, R) => {
        let {
          deletedFetchers: F,
          unstable_flushSync: D,
          unstable_viewTransitionOpts: Y,
        } = R;
        F.forEach((ie) => T.current.delete(ie)),
          v.fetchers.forEach((ie, xe) => {
            ie.data !== void 0 && T.current.set(xe, ie.data);
          });
        let fe =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!Y || fe) {
          D ? Lr(() => i(v)) : c(() => i(v));
          return;
        }
        if (D) {
          Lr(() => {
            h && (f && f.resolve(), h.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              });
          });
          let ie = n.window.document.startViewTransition(() => {
            Lr(() => i(v));
          });
          ie.finished.finally(() => {
            Lr(() => {
              d(void 0), k(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            Lr(() => k(ie));
          return;
        }
        h
          ? (f && f.resolve(),
            h.skipTransition(),
            x({
              state: v,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
          : (a(v),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }));
      },
      [n.window, h, f, T, c],
    );
  P.useLayoutEffect(() => n.subscribe(m), [n, m]),
    P.useEffect(() => {
      u.isTransitioning && !u.flushSync && d(new dm());
    }, [u]),
    P.useEffect(() => {
      if (f && o && n.window) {
        let v = o,
          R = f.promise,
          F = n.window.document.startViewTransition(async () => {
            c(() => i(v)), await R;
          });
        F.finished.finally(() => {
          d(void 0), k(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          k(F);
      }
    }, [c, o, f, n.window]),
    P.useEffect(() => {
      f && o && l.location.key === o.location.key && f.resolve();
    }, [f, h, l.location, o]),
    P.useEffect(() => {
      !u.isTransitioning &&
        S &&
        (a(S.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: S.currentLocation,
          nextLocation: S.nextLocation,
        }),
        x(void 0));
    }, [u.isTransitioning, S]),
    P.useEffect(() => {}, []);
  let E = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (v) => n.navigate(v),
        push: (v, R, F) =>
          n.navigate(v, {
            state: R,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
        replace: (v, R, F) =>
          n.navigate(v, {
            replace: !0,
            state: R,
            preventScrollReset: F == null ? void 0 : F.preventScrollReset,
          }),
      }),
      [n],
    ),
    L = n.basename || "/",
    M = P.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: L }),
      [n, E, L],
    );
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      ml.Provider,
      { value: M },
      P.createElement(
        Cu.Provider,
        { value: l },
        P.createElement(
          um.Provider,
          { value: T.current },
          P.createElement(
            Wd.Provider,
            { value: u },
            P.createElement(
              q0,
              {
                basename: L,
                location: l.location,
                navigationType: l.historyAction,
                navigator: E,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? P.createElement(pm, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function pm(e) {
  let { routes: t, future: n, state: r } = e;
  return B0(t, void 0, r, n);
}
const mm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  vm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Qd = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: a,
        target: u,
        to: s,
        preventScrollReset: f,
        unstable_viewTransition: d,
      } = t,
      h = Hd(t, nm),
      { basename: k } = P.useContext(sn),
      S,
      x = !1;
    if (typeof s == "string" && vm.test(s) && ((S = s), mm))
      try {
        let m = new URL(window.location.href),
          E = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s),
          L = Dt(E.pathname, k);
        E.origin === m.origin && L != null
          ? (s = L + E.search + E.hash)
          : (x = !0);
      } catch {}
    let T = F0(s, { relative: l }),
      p = ym(s, {
        replace: o,
        state: a,
        target: u,
        preventScrollReset: f,
        relative: l,
        unstable_viewTransition: d,
      });
    function c(m) {
      r && r(m), m.defaultPrevented || p(m);
    }
    return P.createElement(
      "a",
      ur({}, h, { href: S || T, onClick: x || i ? r : c, ref: n, target: u }),
    );
  }),
  Kd = P.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: i = "",
        end: o = !1,
        style: a,
        to: u,
        unstable_viewTransition: s,
        children: f,
      } = t,
      d = Hd(t, rm),
      h = Vi(u, { relative: d.relative }),
      k = gl(),
      S = P.useContext(Cu),
      { navigator: x, basename: T } = P.useContext(sn),
      p = S != null && wm(h) && s === !0,
      c = x.encodeLocation ? x.encodeLocation(h).pathname : h.pathname,
      m = k.pathname,
      E =
        S && S.navigation && S.navigation.location
          ? S.navigation.location.pathname
          : null;
    l ||
      ((m = m.toLowerCase()),
      (E = E ? E.toLowerCase() : null),
      (c = c.toLowerCase())),
      E && T && (E = Dt(E, T) || E);
    const L = c !== "/" && c.endsWith("/") ? c.length - 1 : c.length;
    let M = m === c || (!o && m.startsWith(c) && m.charAt(L) === "/"),
      v =
        E != null &&
        (E === c || (!o && E.startsWith(c) && E.charAt(c.length) === "/")),
      R = { isActive: M, isPending: v, isTransitioning: p },
      F = M ? r : void 0,
      D;
    typeof i == "function"
      ? (D = i(R))
      : (D = [
          i,
          M ? "active" : null,
          v ? "pending" : null,
          p ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let Y = typeof a == "function" ? a(R) : a;
    return P.createElement(
      Qd,
      ur({}, d, {
        "aria-current": F,
        className: D,
        ref: n,
        style: Y,
        to: u,
        unstable_viewTransition: s,
      }),
      typeof f == "function" ? f(R) : f,
    );
  });
var Sa;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Sa || (Sa = {}));
var dc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(dc || (dc = {}));
function gm(e) {
  let t = P.useContext(ml);
  return t || Q(!1), t;
}
function ym(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = U0(),
    s = gl(),
    f = Vi(e, { relative: o });
  return P.useCallback(
    (d) => {
      if (tm(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : Pn(s) === Pn(f);
        u(e, {
          replace: h,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, f, r, l, n, e, i, o, a],
  );
}
function wm(e, t) {
  t === void 0 && (t = {});
  let n = P.useContext(Wd);
  n == null && Q(!1);
  let { basename: r } = gm(Sa.useViewTransitionState),
    l = Vi(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = Dt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Dt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ga(l.pathname, o) != null || ga(l.pathname, i) != null;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var ka =
  function () {
    return (
      (ka =
        Object.assign ||
        function (t) {
          for (var n, r = 1, l = arguments.length; r < l; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      ka.apply(this, arguments)
    );
  };
function xm(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
      t.indexOf(r[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
        (n[r[l]] = e[r[l]]);
  return n;
}
var bn = "",
  Qr = null,
  bl = null,
  Yd = null;
function _u() {
  (bn = ""),
    Qr !== null && Qr.disconnect(),
    bl !== null && (window.clearTimeout(bl), (bl = null));
}
function hc(e) {
  var t = ["BUTTON", "INPUT", "SELECT", "TEXTAREA"],
    n = ["A", "AREA"];
  return (
    (t.includes(e.tagName) && !e.hasAttribute("disabled")) ||
    (n.includes(e.tagName) && e.hasAttribute("href"))
  );
}
function pc() {
  var e = null;
  if (bn === "#") e = document.body;
  else {
    var t = bn.replace("#", "");
    (e = document.getElementById(t)),
      e === null && bn === "#top" && (e = document.body);
  }
  if (e !== null) {
    Yd(e);
    var n = e.getAttribute("tabindex");
    return (
      n === null && !hc(e) && e.setAttribute("tabindex", -1),
      e.focus({ preventScroll: !0 }),
      n === null && !hc(e) && (e.blur(), e.removeAttribute("tabindex")),
      _u(),
      !0
    );
  }
  return !1;
}
function Sm(e) {
  window.setTimeout(function () {
    pc() === !1 &&
      (Qr === null && (Qr = new MutationObserver(pc)),
      Qr.observe(document, { attributes: !0, childList: !0, subtree: !0 }),
      (bl = window.setTimeout(function () {
        _u();
      }, e || 1e4)));
  }, 0);
}
function Zd(e) {
  return ko.forwardRef(function (t, n) {
    var r = "";
    typeof t.to == "string" && t.to.includes("#")
      ? (r = "#" + t.to.split("#").slice(1).join("#"))
      : typeof t.to == "object" &&
        typeof t.to.hash == "string" &&
        (r = t.to.hash);
    var l = {};
    e === Kd &&
      (l.isActive = function (a, u) {
        return a && a.isExact && u.hash === r;
      });
    function i(a) {
      _u(),
        (bn = t.elementId ? "#" + t.elementId : r),
        t.onClick && t.onClick(a),
        bn !== "" &&
          !a.defaultPrevented &&
          a.button === 0 &&
          (!t.target || t.target === "_self") &&
          !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey) &&
          ((Yd =
            t.scroll ||
            function (u) {
              return t.smooth
                ? u.scrollIntoView({ behavior: "smooth" })
                : u.scrollIntoView();
            }),
          Sm(t.timeout));
    }
    var o = xm(t, ["scroll", "smooth", "timeout", "elementId"]);
    return ko.createElement(
      e,
      ka({}, l, o, { onClick: i, ref: n }),
      t.children,
    );
  });
}
var Bl = Zd(Qd);
Zd(Kd);
const km = ({ size: e = 24 }) =>
    y.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "dark:stroke-lightblue stroke-blue",
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        y.jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
        y.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
        y.jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" }),
      ],
    }),
  Em = ({ size: e = 24 }) =>
    y.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "dark:stroke-lightblue stroke-blue",
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        y.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        y.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    });
function Cm() {
  const [e, t] = P.useState(!1);
  return y.jsxs("div", {
    className:
      "navBar bg-white dark:bg-black/75 shadow-md p-4 md:p-6 flex flex-col md:flex-row md:justify-around md:items-center w-full sticky top-0",
    children: [
      y.jsxs("div", {
        className:
          "navBarTitle flex justify-between items-center w-full md:w-auto",
        children: [
          y.jsx("h1", {
            className: "text-lg md:text-xl lg:text-2xl",
            children: "joonashkra.github.io",
          }),
          y.jsx("button", {
            className: "md:hidden",
            onClick: () => t(!e),
            children: e ? y.jsx(Em, { size: 24 }) : y.jsx(km, { size: 24 }),
          }),
        ],
      }),
      y.jsx("nav", {
        className: `${e ? "flex" : "hidden"} md:flex flex-col md:flex-row md:gap-10 mt-6 md:mb-0 md:mt-0`,
        children: y.jsxs("ul", {
          className:
            "largeScreenNav flex justify-around items-center gap-6 list-none lg:gap-14 text-md sm:text-lg lg:text-xl",
          children: [
            y.jsx("li", {
              children: y.jsx(Bl, {
                smooth: !0,
                className:
                  "relative hover:underline hover:decoration-blue dark:hover:decoration-lightblue hover:decoration-2 underline-offset-2",
                to: "#home",
                children: "Home",
              }),
            }),
            y.jsx("li", {
              children: y.jsx(Bl, {
                smooth: !0,
                className:
                  "relative hover:underline hover:decoration-blue dark:hover:decoration-lightblue hover:decoration-2 underline-offset-2",
                to: "#about",
                children: "About",
              }),
            }),
            y.jsx("li", {
              children: y.jsx(Bl, {
                smooth: !0,
                className:
                  "relative hover:underline hover:decoration-blue dark:hover:decoration-lightblue hover:decoration-2 underline-offset-2",
                to: "#skills",
                children: "Skills",
              }),
            }),
            y.jsx("li", {
              children: y.jsx(Bl, {
                smooth: !0,
                className:
                  "relative hover:underline hover:decoration-blue dark:hover:decoration-lightblue hover:decoration-2 underline-offset-2",
                to: "#contact",
                children: "Contact",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Pm() {
  const [e, t] = P.useState(0),
    n = P.useRef(null);
  return (
    P.useEffect(() => {
      const r = document.querySelector(".scroll-container"),
        l = () => {
          if (r) {
            const i = r.scrollTop,
              o = r.scrollHeight - r.clientHeight,
              a = (i / o) * 100;
            a < 25 ? t(25) : a < 50 ? t(50) : a < 75 ? t(75) : t(100);
          }
        };
      return (
        r && (r.addEventListener("scroll", l), l()),
        () => {
          r && r.removeEventListener("scroll", l);
        }
      );
    }, []),
    y.jsx("div", {
      ref: n,
      className:
        "block h-1.5 md:h-2 dark:bg-lightblue bg-blue transition-all duration-500 ease-in-out",
      style: { width: `${e}%` },
    })
  );
}
function dr() {
  const [e, t] = P.useState(!1),
    n = P.useRef(null);
  return (
    P.useEffect(() => {
      const r = new IntersectionObserver((i) => {
          i.forEach((o) => {
            o.isIntersecting ? t(!0) : t(!1);
          });
        }),
        l = n.current;
      return (
        l && r.observe(l),
        () => {
          l && r.unobserve(l);
        }
      );
    }, []),
    { ref: n, isVisible: e }
  );
}
function Xd() {
  const { ref: e, isVisible: t } = dr();
  return y.jsxs("div", {
    className:
      "md:snap-start h-full flex flex-col p-6 sm:p-24 md:p-32 justify-start md:justify-center gap-6 md:gap-12",
    id: "about",
    children: [
      y.jsx("h1", {
        ref: e,
        className: `text-2xl lg:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-white dark:before:bg-dark ${t ? "before:animate-eightStepWriter" : ""}`,
        children: "About Me",
      }),
      y.jsxs("div", {
        ref: e,
        className:
          "flex flex-col text-sm sm:text-lg lg:text-xl 2xl:text-2xl gap-6 md:gap-10",
        children: [
          y.jsxs("p", {
            children: [
              "I am currently in my third year of studies pursuing a degree in ",
              y.jsx("span", {
                className: "dark:text-lightblue text-blue",
                children: "Information Techonology",
              }),
              " engineering. My primary area of interest is ",
              y.jsx("span", {
                className: "dark:text-lightblue text-blue",
                children: "web development",
              }),
              ", with additional interests in ",
              y.jsx("span", {
                className: "dark:text-lightblue text-blue",
                children: "networking",
              }),
              " and related fields.",
            ],
          }),
          y.jsxs("p", {
            children: [
              "My most recent work experience was at telecommunications company ",
              y.jsx("span", {
                className: "dark:text-lightblue text-blue",
                children: "DNA Oyj",
              }),
              ", where I held the position of a ",
              y.jsx("span", {
                className: "dark:text-lightblue text-blue",
                children: "sales representative",
              }),
              ". I'm actively seeking new job and internship opportunities in ",
              y.jsx("span", {
                className: "dark:text-lightblue text-blue",
                children: "software engineering",
              }),
              " or other IT-related fields.",
            ],
          }),
          y.jsxs("p", {
            children: [
              "In my free time, I engage in activities such as playing the ",
              y.jsx("span", {
                className: "dark:text-lightblue text-blue",
                children: "guitar",
              }),
              ", participating in various forms of ",
              y.jsx("span", {
                className: "dark:text-lightblue text-blue",
                children: "exercise",
              }),
              " and outdoor activities, ",
              y.jsx("span", {
                className: "dark:text-lightblue text-blue",
                children: "reading",
              }),
              ", and working on personal ",
              y.jsx("span", {
                className: "dark:text-lightblue text-blue",
                children: "coding",
              }),
              " projects.",
            ],
          }),
        ],
      }),
    ],
  });
}
const _m = ({ size: e = 24 }) =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      xmlSpace: "preserve",
      viewBox: "0 0 512 512",
      width: e,
      height: e,
      className: "dark:fill-lightblue fill-blue",
      children: y.jsx("path", {
        d: "M510.678 112.275a70.823 70.823 0 0 0-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557 0-37.395 7.996-50.21 20.814-1.715 1.715-3.301 3.43-4.823 5.345-7.203 8.788-12.358 19.428-14.602 31.054A68.69 68.69 0 0 0 0 126.087V385.92c0 9.968 2.114 19.55 5.884 28.203 3.497 8.26 8.653 15.734 14.926 22.001a77.4 77.4 0 0 0 4.892 4.494 70.957 70.957 0 0 0 45.319 16.32h369.958c17.18 0 33.108-6.145 45.323-16.384 1.718-1.386 3.305-2.844 4.891-4.43 6.27-6.267 11.425-13.741 14.994-22.001v-.064c3.769-8.653 5.812-18.171 5.812-28.138V126.087a72.986 72.986 0 0 0-1.321-13.812zM46.509 101.571c6.345-6.338 14.866-10.175 24.512-10.175h369.958c9.646 0 18.242 3.837 24.512 10.175a34.402 34.402 0 0 1 3.112 3.637L274.696 274.203c-5.348 4.687-11.954 7.002-18.696 7.002-6.674 0-13.276-2.315-18.695-7.002L43.472 105.136c.858-1.25 1.915-2.436 3.037-3.565zM36.334 385.92V142.735L176.658 265.15 36.405 387.435c-.071-.464-.071-.986-.071-1.515zm404.645 34.677H71.021c-6.281 0-12.158-1.651-17.174-4.552l147.978-128.959 13.815 12.018c11.561 10.046 26.028 15.134 40.36 15.134a61.64 61.64 0 0 0 40.432-15.134l13.808-12.018 147.92 128.959c-5.023 2.901-10.9 4.552-17.181 4.552zm34.687-34.677c0 .529 0 1.051-.068 1.515L335.346 265.221 475.666 142.8v243.12z",
      }),
    }),
  jm = ({ size: e = 25 }) =>
    y.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      height: e,
      width: e,
      className: "dark:fill-lightblue fill-blue",
      children: [
        y.jsx("title", { children: "github [#0f697b]" }),
        y.jsx("path", {
          fillRule: "evenodd",
          d: "M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0",
        }),
      ],
    }),
  Nm = ({ size: e = 25 }) =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      height: e,
      width: e,
      className: "dark:fill-lightblue fill-blue",
      children: y.jsxs("g", {
        children: [
          y.jsx("path", {
            d: "M6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM11 19h1a1 1 0 0 0 1-1v-4.5c0-1.5 3-2.5 3-.5v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-6c0-2-1.5-3-3.5-3S13 10.5 13 10.5V10a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Z",
          }),
          y.jsx("path", {
            fillRule: "evenodd",
            d: "M20 1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h16Zm0 2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16Z",
            clipRule: "evenodd",
          }),
        ],
      }),
    });
function Gd() {
  const { ref: e, isVisible: t } = dr(),
    n = () => {
      navigator.clipboard
        .writeText("joonasheikura1@gmail.com")
        .then(() => {
          alert("Email copied to clipboard!");
        })
        .catch((i) => {
          console.error("Failed to copy: ", i);
        });
    },
    [r, l] = P.useState(50);
  return (
    P.useEffect(() => {
      const i = () => {
        l(window.innerWidth < 768 ? 40 : 50);
      };
      return (
        i(),
        window.addEventListener("resize", i),
        () => window.removeEventListener("resize", i)
      );
    }, []),
    y.jsxs("div", {
      className:
        "md:snap-start justify-center md:justify-center h-full flex flex-col p-6 md:p-20 lg:p-32 md:gap-12 gap-12",
      id: "contact",
      children: [
        y.jsx("div", {
          children: y.jsx("h1", {
            ref: e,
            className: `text-xl md:text-2xl lg:text-2xl xl:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-white dark:before:bg-dark ${t ? "before:animate-goodbyeWriter" : ""}`,
            children: "Thank You for Visiting",
          }),
        }),
        y.jsx("div", {
          ref: e,
          className:
            "flex flex-col text-md md:text-xl lg:text-xl 2xl:text-2xl gap-10",
          children: y.jsx("p", {
            children:
              "I appreciate you taking the time to explore my portfolio. If you have any questions, feedback, or job inquiries, feel free to contact me from any of the channels below.",
          }),
        }),
        y.jsx("div", {
          children: y.jsxs("ul", {
            className: "flex gap-8 text-white items-center",
            children: [
              y.jsx("li", {
                className: "cursor-pointer",
                onClick: n,
                children: y.jsx(_m, { size: r - 8 }),
              }),
              y.jsx("li", {
                className: "",
                children: y.jsx("a", {
                  target: "_blank",
                  href: "https://github.com/joonashkra",
                  children: y.jsx(jm, { size: r - 8 }),
                }),
              }),
              y.jsx("li", {
                className: "",
                children: y.jsx("a", {
                  target: "_blank",
                  href: "https://www.linkedin.com/in/joonas-heikura-95a837307/",
                  children: y.jsx(Nm, { size: r - 4 }),
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const Jd = ({ size: e = 25 }) =>
  y.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    width: e,
    height: e,
    className: "dark:stroke-lightblue stroke-blue",
    children: y.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m18 10 3-3m0 0-3-3m3 3H7m-1 7-3 3m0 0 3 3m-3-3h14",
    }),
  });
function Lm({ title: e, description: t, link: n }) {
  return y.jsxs("div", {
    className: "flex flex-col gap-2",
    children: [
      y.jsx("h2", {
        className:
          "text-lg xl:text-xl underline underline-offset-2 decoration-blue dark:decoration-lightblue",
        children: e,
      }),
      y.jsx("p", { className: "text-md", children: t }),
      y.jsx("a", {
        target: "_blank",
        href: n,
        className:
          "dark:text-lightblue text-blue text-sm w-max hover:underline underline-offset-2",
        children: "Go to Repository",
      }),
    ],
  });
}
function Rm({ projects: e }) {
  return y.jsx("ul", {
    className: "flex flex-col gap-8 md:gap-10 p-1 justify-evenly mt-2",
    children: e.map((t, n) =>
      y.jsx(
        "div",
        {
          className: "flex flex-col",
          children: y.jsx("li", {
            className: "flex flex-col",
            children: y.jsx(Lm, {
              title: t.title,
              description: t.description,
              link: t.link,
            }),
          }),
        },
        n,
      ),
    ),
  });
}
function Tm({ content: e, setContent: t }) {
  const { ref: n, isVisible: r } = dr(),
    l = [
      {
        title: "To-Do App",
        year: 2024,
        description: "React + Express web application",
        link: "https://github.com/joonashkra/note-app/",
      },
      {
        title: "Hotel App",
        year: 2024,
        description: "React + ASP.NET web application",
        link: "https://github.com/joonashkra/hotel-app",
      },
      {
        title: "FullStack Open",
        year: 2024,
        description: "MOOC by University of Helsinki",
        link: "https://github.com/joonashkra/fullstackopen/",
      },
      {
        title: "Checkers Game",
        year: 2024,
        description: "C# Console-App",
        link: "https://github.com/joonashkra/checkers/",
      },
    ];
  return y.jsxs("div", {
    className: `flex flex-col justify-start md:justify-center md:w-1/2 h-full gap-4 ${e === "skills" ? "md:flex hidden" : ""}`,
    children: [
      y.jsxs("div", {
        className: "flex justify-between items-center",
        children: [
          y.jsx("h1", {
            ref: n,
            className: `text-2xl lg:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-white dark:before:bg-dark ${r ? "before:animate-eightStepWriter" : ""}`,
            children: "Projects",
          }),
          y.jsx("button", {
            onClick: () => t("skills"),
            className: "animate-pulse md:hidden",
            children: y.jsx(Jd, { size: 24 }),
          }),
        ],
      }),
      y.jsxs("div", {
        className:
          "flex flex-col gap-2 animate-fadeIn text-sm lg:text-md xl:text-lg",
        children: [
          y.jsx("p", {
            children:
              "Below are listed some of the projects I have undertaken over time.",
          }),
          y.jsx(Rm, { projects: l }),
        ],
      }),
    ],
  });
}
const Mm = ({ size: e = 24 }) =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: e,
      height: e,
      "aria-hidden": "true",
      className: "iconify iconify--logos",
      viewBox: "0 0 256 228",
      children: y.jsx("path", {
        fill: "#00D8FF",
        d: "M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z",
      }),
    }),
  Dm = ({ size: e = 24 }) =>
    y.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 32 32",
      height: e,
      width: e,
      children: [
        y.jsx("path", { fill: "#1172B8", d: "M6 28 4 3h24l-2 25-10 3-10-3Z" }),
        y.jsx("path", { fill: "#3AD", d: "M26 5H16v24.5l8-2.5 2-22Z" }),
        y.jsx("path", {
          fill: "#fff",
          d: "M19.5 17.5h-10L9 14l8-2.5H9l-.5-3H24l-.5 3.5-6.5 2.5h6L22 24l-6 2-6-2-.5-5h3l.5 2.5 3 1 3-1 .5-4Z",
        }),
      ],
    }),
  zm = ({ size: e = 24 }) =>
    y.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid",
      viewBox: "-16.5 0 289 289",
      height: e,
      width: e,
      children: y.jsx("path", {
        fill: "#539E43",
        d: "M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571Z",
      }),
    });
function Rr({ title: e, maxLevel: t, color: n }) {
  const [r, l] = P.useState(0),
    [i, o] = P.useState(!1),
    { ref: a, isVisible: u } = dr();
  return (
    P.useEffect(() => {
      u ? (o(!0), l(t)) : (l(0), o(!1));
    }, [u, t]),
    y.jsxs("div", {
      ref: a,
      className: "flex flex-col w-full justify-center gap-2",
      children: [
        y.jsx("p", { className: "text-md xl:text-lg", children: e }),
        y.jsx("div", {
          className:
            "flex flex-col bg-dark/25 dark:bg-black/40 w-full rounded-md h-1",
          children: y.jsx("div", {
            className: `h-1 rounded-md transition-all duration-1000 ease-in-out ${i ? "opacity-100" : "opacity-0"}`,
            style: { width: `${r}%`, backgroundColor: n },
          }),
        }),
      ],
    })
  );
}
const Om = ({ size: e = 24 }) =>
    y.jsxs("svg", {
      height: e,
      preserveAspectRatio: "xMidYMid",
      viewBox: "0 -1.428 255.582 290.108",
      width: e,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        y.jsx("path", {
          d: "m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345",
          fill: "#a179dc",
        }),
        y.jsx("path", {
          d: "m128.182 143.241-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252z",
          fill: "#280068",
        }),
        y.jsx("path", {
          d: "m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76l-124.263 71.55 124.413 72.073c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345",
          fill: "#390091",
        }),
        y.jsxs("g", {
          fill: "#fff",
          children: [
            y.jsx("path", {
              d: "m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z",
            }),
            y.jsx("path", {
              d: "m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z",
            }),
          ],
        }),
      ],
    }),
  Im = ({ size: e = 24 }) =>
    y.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 400 400",
      width: e,
      height: e,
      children: [
        y.jsx("path", { d: "M0 200V0h400v400H0", style: { fill: "#007acc" } }),
        y.jsx("path", {
          d: "M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z",
          style: { fill: "#fff" },
        }),
      ],
    });
function Fm() {
  const [e, t] = P.useState(50);
  return (
    P.useEffect(() => {
      const n = () => {
        t(window.innerWidth < 768 ? 35 : 45);
      };
      return (
        n(),
        window.addEventListener("resize", n),
        () => window.removeEventListener("resize", n)
      );
    }, []),
    y.jsx("table", {
      className: "flex flex-col gap-10 p-2 mt-2 rounded-md w-full",
      children: y.jsxs("tbody", {
        className: "flex flex-col gap-11",
        children: [
          y.jsxs("tr", {
            className: "flex items-center gap-5",
            children: [
              y.jsx("td", { children: y.jsx(Im, { size: e }) }),
              y.jsx("td", {
                className: "w-full",
                children: y.jsx(Rr, {
                  title: "TypeScript / JavaScript",
                  maxLevel: 60,
                  color: "#007acc",
                }),
              }),
            ],
          }),
          y.jsxs("tr", {
            className: "flex items-center gap-5",
            children: [
              y.jsx("td", { children: y.jsx(Mm, { size: e }) }),
              y.jsx("td", {
                className: "w-full",
                children: y.jsx(Rr, {
                  title: "React",
                  maxLevel: 70,
                  color: "#62dafc",
                }),
              }),
            ],
          }),
          y.jsxs("tr", {
            className: "flex items-center gap-5",
            children: [
              y.jsx("td", { children: y.jsx(zm, { size: e }) }),
              y.jsx("td", {
                className: "w-full",
                children: y.jsx(Rr, {
                  title: "NodeJS / Express",
                  maxLevel: 50,
                  color: "#549d44",
                }),
              }),
            ],
          }),
          y.jsxs("tr", {
            className: "flex items-center gap-5",
            children: [
              y.jsx("td", { children: y.jsx(Om, { size: e }) }),
              y.jsx("td", {
                className: "w-full",
                children: y.jsx(Rr, {
                  title: "C# / .NET",
                  maxLevel: 35,
                  color: "#a179dc",
                }),
              }),
            ],
          }),
          y.jsxs("tr", {
            className: "flex items-center gap-5",
            children: [
              y.jsx("td", { children: y.jsx(Dm, { size: e }) }),
              y.jsx("td", {
                className: "w-full",
                children: y.jsx(Rr, {
                  title: "CSS",
                  maxLevel: 55,
                  color: "#1c88c7",
                }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function Um({ content: e, setContent: t }) {
  const { ref: n, isVisible: r } = dr();
  return y.jsxs("div", {
    className: `flex flex-col justify-start md:justify-center md:w-1/2 h-full gap-4 ${e !== "skills" ? "md:flex hidden" : "md:flex"}`,
    children: [
      y.jsxs("div", {
        className: "flex justify-between items-center",
        children: [
          y.jsx("h1", {
            ref: n,
            className: `text-2xl lg:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-white dark:before:bg-dark ${r ? "before:animate-sixStepWriter" : ""}`,
            children: "Skills",
          }),
          y.jsx("button", {
            onClick: () => t("projects"),
            className: "md:hidden animate-pulse",
            children: y.jsx(Jd, { size: 24 }),
          }),
        ],
      }),
      y.jsxs("div", {
        className:
          "flex flex-col gap-4 animate-fadeIn text-sm md:text-md lg:text-md xl:text-lg md:text-md",
        children: [
          y.jsx("p", {
            children:
              "Below are listed some of the languages and frameworks I have worked with.",
          }),
          y.jsx(Fm, {}),
          y.jsx("p", {
            className: "px-2 pt-2",
            children:
              "I'm also familiar with tools and practices such as Git, Docker, Linux OS, DevOps, and CI/CD.",
          }),
        ],
      }),
    ],
  });
}
function qd() {
  const [e, t] = P.useState("skills");
  return y.jsxs("div", {
    className:
      "md:snap-start md:justify-center h-full flex p-6 md:p-20 md:gap-20",
    id: "skills",
    children: [
      y.jsx(Um, { content: e, setContent: t }),
      y.jsx(Tm, { content: e, setContent: t }),
    ],
  });
}
const Am = ({ size: e = 24 }) =>
  y.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "dark:stroke-lightblue stroke-blue",
    width: e,
    height: e,
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: y.jsx("path", { d: "M12 5v13M5 12l7 7 7-7" }),
  });
function bd() {
  const { ref: e, isVisible: t } = dr();
  return y.jsxs("div", {
    className:
      "md:snap-start h-full flex flex-col p-6 sm:p-20 md:p-32 gap-8 justify-center",
    id: "home",
    children: [
      y.jsx("h1", {
        ref: e,
        className: `text-2xl lg:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-white dark:before:bg-dark ${t ? "before:animate-sixStepWriter" : ""}`,
        children: "Hello,",
      }),
      y.jsxs("div", {
        ref: e,
        className: `flex flex-col text-md sm:text-xl gap-12 md:gap-20 animate-fade ${t ? "animate-fade" : "opacity-0"}`,
        children: [
          y.jsxs("div", {
            className: "flex flex-col gap-6 lg:text-xl 2xl:text-2xl ",
            children: [
              y.jsxs("p", {
                children: [
                  "My name is ",
                  y.jsx("span", {
                    className: "dark:text-lightblue text-blue",
                    children: "Joonas Heikura",
                  }),
                  ". I'm a 22-year-old ",
                  y.jsx("span", {
                    className: "dark:text-lightblue text-blue",
                    children: "IT engineering student",
                  }),
                  " from Vaasa, Finland.",
                ],
              }),
              y.jsxs("p", {
                children: [
                  "This is my personal portfolio website, where you can find comprehensive information about my ",
                  y.jsx("span", {
                    className: "dark:text-lightblue text-blue",
                    children: "background",
                  }),
                  ", interests, and ",
                  y.jsx("span", {
                    className: "dark:text-lightblue text-blue",
                    children: "skills",
                  }),
                  ", as well as my ",
                  y.jsx("span", {
                    className: "dark:text-lightblue text-blue",
                    children: "contact ",
                  }),
                  "information.",
                ],
              }),
            ],
          }),
          y.jsx("div", {
            className:
              "animate-bounce flex flex-col h-full items-center gap-5 md:hidden",
            children: y.jsx(Am, { size: 24 }),
          }),
        ],
      }),
    ],
  });
}
function Bm() {
  return y.jsxs("div", {
    className:
      "h-screen flex flex-col bg-white text-black dark:bg-dark dark:text-white",
    children: [
      y.jsx(Cm, {}),
      y.jsx(Pm, {}),
      y.jsxs("div", {
        className: "scroll-container overflow-x-hidden",
        children: [y.jsx(bd, {}), y.jsx(Xd, {}), y.jsx(qd, {}), y.jsx(Gd, {})],
      }),
    ],
  });
}
const $m = im([
  {
    path: "/",
    element: y.jsx(Bm, {}),
    children: [
      { path: "/", element: y.jsx(bd, {}) },
      { path: "/about", element: y.jsx(Xd, {}) },
      { path: "/skills", element: y.jsx(qd, {}) },
      { path: "/contact", element: y.jsx(Gd, {}) },
    ],
  },
]);
Eo.createRoot(document.getElementById("root")).render(
  y.jsx("div", { children: y.jsx(hm, { router: $m }) }),
);
