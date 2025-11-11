var Yd = (e) => {
  throw TypeError(e);
};
var vl = (e, t, n) => t.has(e) || Yd("Cannot " + n);
var P = (e, t, n) => (
    vl(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  te = (e, t, n) =>
    t.has(e)
      ? Yd("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  Q = (e, t, n, r) => (
    vl(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  Ve = (e, t, n) => (vl(e, t, "access private method"), n);
var ai = (e, t, n, r) => ({
  set _(o) {
    Q(e, t, o, n);
  },
  get _() {
    return P(e, t, r);
  },
});
function Gx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] },
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
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function Do(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xm = { exports: {} },
  Oa = {},
  wm = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xs = Symbol.for("react.element"),
  Kx = Symbol.for("react.portal"),
  qx = Symbol.for("react.fragment"),
  Yx = Symbol.for("react.strict_mode"),
  Xx = Symbol.for("react.profiler"),
  Zx = Symbol.for("react.provider"),
  Jx = Symbol.for("react.context"),
  e0 = Symbol.for("react.forward_ref"),
  t0 = Symbol.for("react.suspense"),
  n0 = Symbol.for("react.memo"),
  r0 = Symbol.for("react.lazy"),
  Xd = Symbol.iterator;
function o0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xd && e[Xd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bm = Object.assign,
  Cm = {};
function Fo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Cm),
    (this.updater = n || Sm));
}
Fo.prototype.isReactComponent = {};
Fo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Em() {}
Em.prototype = Fo.prototype;
function ju(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Cm),
    (this.updater = n || Sm));
}
var Nu = (ju.prototype = new Em());
Nu.constructor = ju;
bm(Nu, Fo.prototype);
Nu.isPureReactComponent = !0;
var Zd = Array.isArray,
  jm = Object.prototype.hasOwnProperty,
  Pu = { current: null },
  Nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pm(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      jm.call(t, r) && !Nm.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Xs,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Pu.current,
  };
}
function s0(e, t) {
  return {
    $$typeof: Xs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Tu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xs;
}
function i0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Jd = /\/+/g;
function gl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? i0("" + e.key)
    : t.toString(36);
}
function _i(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xs:
          case Kx:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + gl(i, 0) : r),
      Zd(o)
        ? ((n = ""),
          e != null && (n = e.replace(Jd, "$&/") + "/"),
          _i(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Tu(o) &&
            (o = s0(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Jd, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Zd(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var c = r + gl(s, l);
      i += _i(s, t, n, c, o);
    }
  else if (((c = o0(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(s = e.next()).done; )
      ((s = s.value), (c = r + gl(s, l++)), (i += _i(s, t, n, c, o)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return i;
}
function li(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    _i(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function a0(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
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
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var et = { current: null },
  Ii = { transition: null },
  l0 = {
    ReactCurrentDispatcher: et,
    ReactCurrentBatchConfig: Ii,
    ReactCurrentOwner: Pu,
  };
function Tm() {
  throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = {
  map: li,
  forEach: function (e, t, n) {
    li(
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
      li(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      li(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Tu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
ee.Component = Fo;
ee.Fragment = qx;
ee.Profiler = Xx;
ee.PureComponent = ju;
ee.StrictMode = Yx;
ee.Suspense = t0;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l0;
ee.act = Tm;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = bm({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Pu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      jm.call(t, c) &&
        !Nm.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Xs, type: e.type, key: o, ref: s, props: r, _owner: i };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zx, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = Pm;
ee.createFactory = function (e) {
  var t = Pm.bind(null, e);
  return ((t.type = e), t);
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: e0, render: e };
};
ee.isValidElement = Tu;
ee.lazy = function (e) {
  return { $$typeof: r0, _payload: { _status: -1, _result: e }, _init: a0 };
};
ee.memo = function (e, t) {
  return { $$typeof: n0, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = Ii.transition;
  Ii.transition = {};
  try {
    e();
  } finally {
    Ii.transition = t;
  }
};
ee.unstable_act = Tm;
ee.useCallback = function (e, t) {
  return et.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return et.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return et.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return et.current.useEffect(e, t);
};
ee.useId = function () {
  return et.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return et.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return et.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return et.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return et.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return et.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return et.current.useRef(e);
};
ee.useState = function (e) {
  return et.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return et.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return et.current.useTransition();
};
ee.version = "18.3.1";
wm.exports = ee;
var v = wm.exports;
const O = Do(v),
  ku = Gx({ __proto__: null, default: O }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var c0 = v,
  u0 = Symbol.for("react.element"),
  d0 = Symbol.for("react.fragment"),
  f0 = Object.prototype.hasOwnProperty,
  p0 = c0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  m0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function km(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) f0.call(t, r) && !m0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: u0,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: p0.current,
  };
}
Oa.Fragment = d0;
Oa.jsx = km;
Oa.jsxs = km;
xm.exports = Oa;
var a = xm.exports,
  Rm = { exports: {} },
  ht = {},
  Am = { exports: {} },
  Om = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, T) {
    var L = N.length;
    N.push(T);
    e: for (; 0 < L; ) {
      var W = (L - 1) >>> 1,
        $ = N[W];
      if (0 < o($, T)) ((N[W] = T), (N[L] = $), (L = W));
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var T = N[0],
      L = N.pop();
    if (L !== T) {
      N[0] = L;
      e: for (var W = 0, $ = N.length, X = $ >>> 1; W < X; ) {
        var G = 2 * (W + 1) - 1,
          de = N[G],
          Ne = G + 1,
          D = N[Ne];
        if (0 > o(de, L))
          Ne < $ && 0 > o(D, de)
            ? ((N[W] = D), (N[Ne] = L), (W = Ne))
            : ((N[W] = de), (N[G] = L), (W = G));
        else if (Ne < $ && 0 > o(D, L)) ((N[W] = D), (N[Ne] = L), (W = Ne));
        else break e;
      }
    }
    return T;
  }
  function o(N, T) {
    var L = N.sortIndex - T.sortIndex;
    return L !== 0 ? L : N.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var c = [],
    u = [],
    d = 1,
    f = null,
    g = 3,
    p = !1,
    S = !1,
    m = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(N) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) r(u);
      else if (T.startTime <= N)
        (r(u), (T.sortIndex = T.expirationTime), t(c, T));
      else break;
      T = n(u);
    }
  }
  function b(N) {
    if (((m = !1), x(N), !S))
      if (n(c) !== null) ((S = !0), U(C));
      else {
        var T = n(u);
        T !== null && B(b, T.startTime - N);
      }
  }
  function C(N, T) {
    ((S = !1), m && ((m = !1), y(k), (k = -1)), (p = !0));
    var L = g;
    try {
      for (
        x(T), f = n(c);
        f !== null && (!(f.expirationTime > T) || (N && !z()));

      ) {
        var W = f.callback;
        if (typeof W == "function") {
          ((f.callback = null), (g = f.priorityLevel));
          var $ = W(f.expirationTime <= T);
          ((T = e.unstable_now()),
            typeof $ == "function" ? (f.callback = $) : f === n(c) && r(c),
            x(T));
        } else r(c);
        f = n(c);
      }
      if (f !== null) var X = !0;
      else {
        var G = n(u);
        (G !== null && B(b, G.startTime - T), (X = !1));
      }
      return X;
    } finally {
      ((f = null), (g = L), (p = !1));
    }
  }
  var j = !1,
    E = null,
    k = -1,
    I = 5,
    R = -1;
  function z() {
    return !(e.unstable_now() - R < I);
  }
  function _() {
    if (E !== null) {
      var N = e.unstable_now();
      R = N;
      var T = !0;
      try {
        T = E(!0, N);
      } finally {
        T ? H() : ((j = !1), (E = null));
      }
    } else j = !1;
  }
  var H;
  if (typeof h == "function")
    H = function () {
      h(_);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      V = M.port2;
    ((M.port1.onmessage = _),
      (H = function () {
        V.postMessage(null);
      }));
  } else
    H = function () {
      w(_, 0);
    };
  function U(N) {
    ((E = N), j || ((j = !0), H()));
  }
  function B(N, T) {
    k = w(function () {
      N(e.unstable_now());
    }, T);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || p || ((S = !0), U(C));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (N) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = g;
      }
      var L = g;
      g = T;
      try {
        return N();
      } finally {
        g = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, T) {
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
      var L = g;
      g = N;
      try {
        return T();
      } finally {
        g = L;
      }
    }),
    (e.unstable_scheduleCallback = function (N, T, L) {
      var W = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? W + L : W))
          : (L = W),
        N)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = L + $),
        (N = {
          id: d++,
          callback: T,
          priorityLevel: N,
          startTime: L,
          expirationTime: $,
          sortIndex: -1,
        }),
        L > W
          ? ((N.sortIndex = L),
            t(u, N),
            n(c) === null &&
              N === n(u) &&
              (m ? (y(k), (k = -1)) : (m = !0), B(b, L - W)))
          : ((N.sortIndex = $), t(c, N), S || p || ((S = !0), U(C))),
        N
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (N) {
      var T = g;
      return function () {
        var L = g;
        g = T;
        try {
          return N.apply(this, arguments);
        } finally {
          g = L;
        }
      };
    }));
})(Om);
Am.exports = Om;
var h0 = Am.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var v0 = v,
  mt = h0;
function A(e) {
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
var Mm = new Set(),
  Cs = {};
function Lr(e, t) {
  (To(e, t), To(e + "Capture", t));
}
function To(e, t) {
  for (Cs[e] = t, e = 0; e < t.length; e++) Mm.add(t[e]);
}
var vn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  oc = Object.prototype.hasOwnProperty,
  g0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ef = {},
  tf = {};
function y0(e) {
  return oc.call(tf, e)
    ? !0
    : oc.call(ef, e)
      ? !1
      : g0.test(e)
        ? (tf[e] = !0)
        : ((ef[e] = !0), !1);
}
function x0(e, t, n, r) {
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
function w0(e, t, n, r) {
  if (t === null || typeof t > "u" || x0(e, t, n, r)) return !0;
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
function tt(e, t, n, r, o, s, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i));
}
var He = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    He[e] = new tt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  He[t] = new tt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  He[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  He[e] = new tt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    He[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  He[e] = new tt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  He[e] = new tt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  He[e] = new tt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  He[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ru = /[\-:]([a-z])/g;
function Au(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ru, Au);
    He[t] = new tt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ru, Au);
    He[t] = new tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ru, Au);
  He[t] = new tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  He[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
He.xlinkHref = new tt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  He[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ou(e, t, n, r) {
  var o = He.hasOwnProperty(t) ? He[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (w0(t, n, o, r) && (n = null),
    r || o === null
      ? y0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var bn = v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ci = Symbol.for("react.element"),
  Xr = Symbol.for("react.portal"),
  Zr = Symbol.for("react.fragment"),
  Mu = Symbol.for("react.strict_mode"),
  sc = Symbol.for("react.profiler"),
  _m = Symbol.for("react.provider"),
  Im = Symbol.for("react.context"),
  _u = Symbol.for("react.forward_ref"),
  ic = Symbol.for("react.suspense"),
  ac = Symbol.for("react.suspense_list"),
  Iu = Symbol.for("react.memo"),
  On = Symbol.for("react.lazy"),
  Lm = Symbol.for("react.offscreen"),
  nf = Symbol.iterator;
function qo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nf && e[nf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ce = Object.assign,
  yl;
function as(e) {
  if (yl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      yl = (t && t[1]) || "";
    }
  return (
    `
` +
    yl +
    e
  );
}
var xl = !1;
function wl(e, t) {
  if (!e || xl) return "";
  xl = !0;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          l = s.length - 1;
        1 <= i && 0 <= l && o[i] !== s[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== s[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== s[l])) {
                var c =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    ((xl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? as(e) : "";
}
function S0(e) {
  switch (e.tag) {
    case 5:
      return as(e.type);
    case 16:
      return as("Lazy");
    case 13:
      return as("Suspense");
    case 19:
      return as("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = wl(e.type, !1)), e);
    case 11:
      return ((e = wl(e.type.render, !1)), e);
    case 1:
      return ((e = wl(e.type, !0)), e);
    default:
      return "";
  }
}
function lc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zr:
      return "Fragment";
    case Xr:
      return "Portal";
    case sc:
      return "Profiler";
    case Mu:
      return "StrictMode";
    case ic:
      return "Suspense";
    case ac:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Im:
        return (e.displayName || "Context") + ".Consumer";
      case _m:
        return (e._context.displayName || "Context") + ".Provider";
      case _u:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Iu:
        return (
          (t = e.displayName || null),
          t !== null ? t : lc(e.type) || "Memo"
        );
      case On:
        ((t = e._payload), (e = e._init));
        try {
          return lc(e(t));
        } catch {}
    }
  return null;
}
function b0(e) {
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
      return lc(t);
    case 8:
      return t === Mu ? "StrictMode" : "Mode";
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
function er(e) {
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
function Dm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function C0(e) {
  var t = Dm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          ((r = "" + i), s.call(this, i));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function ui(e) {
  e._valueTracker || (e._valueTracker = C0(e));
}
function Fm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Dm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ji(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function cc(e, t) {
  var n = t.checked;
  return Ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function rf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = er(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function zm(e, t) {
  ((t = t.checked), t != null && Ou(e, "checked", t, !1));
}
function uc(e, t) {
  zm(e, t);
  var n = er(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? dc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && dc(e, t.type, er(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function of(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function dc(e, t, n) {
  (t !== "number" || Ji(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ls = Array.isArray;
function co(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + er(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function fc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return Ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function sf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (ls(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: er(n) };
}
function Um(e, t) {
  var n = er(t.value),
    r = er(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function af(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $m(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $m(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var di,
  Bm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        di = di || document.createElement("div"),
          di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = di.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Es(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ps = {
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
  E0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ps).forEach(function (e) {
  E0.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ps[t] = ps[e]));
  });
});
function Hm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ps.hasOwnProperty(e) && ps[e])
      ? ("" + t).trim()
      : t + "px";
}
function Wm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Hm(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var j0 = Ce(
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
function mc(e, t) {
  if (t) {
    if (j0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function hc(e, t) {
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
var vc = null;
function Lu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var gc = null,
  uo = null,
  fo = null;
function lf(e) {
  if ((e = ei(e))) {
    if (typeof gc != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = Da(t)), gc(e.stateNode, e.type, t));
  }
}
function Vm(e) {
  uo ? (fo ? fo.push(e) : (fo = [e])) : (uo = e);
}
function Qm() {
  if (uo) {
    var e = uo,
      t = fo;
    if (((fo = uo = null), lf(e), t)) for (e = 0; e < t.length; e++) lf(t[e]);
  }
}
function Gm(e, t) {
  return e(t);
}
function Km() {}
var Sl = !1;
function qm(e, t, n) {
  if (Sl) return e(t, n);
  Sl = !0;
  try {
    return Gm(e, t, n);
  } finally {
    ((Sl = !1), (uo !== null || fo !== null) && (Km(), Qm()));
  }
}
function js(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Da(n);
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var yc = !1;
if (vn)
  try {
    var Yo = {};
    (Object.defineProperty(Yo, "passive", {
      get: function () {
        yc = !0;
      },
    }),
      window.addEventListener("test", Yo, Yo),
      window.removeEventListener("test", Yo, Yo));
  } catch {
    yc = !1;
  }
function N0(e, t, n, r, o, s, i, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var ms = !1,
  ea = null,
  ta = !1,
  xc = null,
  P0 = {
    onError: function (e) {
      ((ms = !0), (ea = e));
    },
  };
function T0(e, t, n, r, o, s, i, l, c) {
  ((ms = !1), (ea = null), N0.apply(P0, arguments));
}
function k0(e, t, n, r, o, s, i, l, c) {
  if ((T0.apply(this, arguments), ms)) {
    if (ms) {
      var u = ea;
      ((ms = !1), (ea = null));
    } else throw Error(A(198));
    ta || ((ta = !0), (xc = u));
  }
}
function Dr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ym(e) {
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
function cf(e) {
  if (Dr(e) !== e) throw Error(A(188));
}
function R0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dr(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return (cf(o), e);
        if (s === r) return (cf(o), t);
        s = s.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) ((n = o), (r = s));
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          ((i = !0), (n = o), (r = s));
          break;
        }
        if (l === r) {
          ((i = !0), (r = o), (n = s));
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            ((i = !0), (n = s), (r = o));
            break;
          }
          if (l === r) {
            ((i = !0), (r = s), (n = o));
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Xm(e) {
  return ((e = R0(e)), e !== null ? Zm(e) : null);
}
function Zm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jm = mt.unstable_scheduleCallback,
  uf = mt.unstable_cancelCallback,
  A0 = mt.unstable_shouldYield,
  O0 = mt.unstable_requestPaint,
  Re = mt.unstable_now,
  M0 = mt.unstable_getCurrentPriorityLevel,
  Du = mt.unstable_ImmediatePriority,
  eh = mt.unstable_UserBlockingPriority,
  na = mt.unstable_NormalPriority,
  _0 = mt.unstable_LowPriority,
  th = mt.unstable_IdlePriority,
  Ma = null,
  tn = null;
function I0(e) {
  if (tn && typeof tn.onCommitFiberRoot == "function")
    try {
      tn.onCommitFiberRoot(Ma, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : F0,
  L0 = Math.log,
  D0 = Math.LN2;
function F0(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((L0(e) / D0) | 0)) | 0);
}
var fi = 64,
  pi = 4194304;
function cs(e) {
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
function ra(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = cs(l)) : ((s &= i), s !== 0 && (r = cs(s)));
  } else ((i = n & ~o), i !== 0 ? (r = cs(i)) : s !== 0 && (r = cs(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - $t(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function z0(e, t) {
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
function U0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - $t(s),
      l = 1 << i,
      c = o[i];
    (c === -1
      ? (!(l & n) || l & r) && (o[i] = z0(l, t))
      : c <= t && (e.expiredLanes |= l),
      (s &= ~l));
  }
}
function wc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function nh() {
  var e = fi;
  return ((fi <<= 1), !(fi & 4194240) && (fi = 64), e);
}
function bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zs(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n));
}
function $0(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $t(n),
      s = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s));
  }
}
function Fu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var le = 0;
function rh(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var oh,
  zu,
  sh,
  ih,
  ah,
  Sc = !1,
  mi = [],
  Vn = null,
  Qn = null,
  Gn = null,
  Ns = new Map(),
  Ps = new Map(),
  _n = [],
  B0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function df(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vn = null;
      break;
    case "dragenter":
    case "dragleave":
      Qn = null;
      break;
    case "mouseover":
    case "mouseout":
      Gn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ns.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ps.delete(t.pointerId);
  }
}
function Xo(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = ei(t)), t !== null && zu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function H0(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((Vn = Xo(Vn, e, t, n, r, o)), !0);
    case "dragenter":
      return ((Qn = Xo(Qn, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Gn = Xo(Gn, e, t, n, r, o)), !0);
    case "pointerover":
      var s = o.pointerId;
      return (Ns.set(s, Xo(Ns.get(s) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (s = o.pointerId),
        Ps.set(s, Xo(Ps.get(s) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function lh(e) {
  var t = vr(e.target);
  if (t !== null) {
    var n = Dr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ym(n)), t !== null)) {
          ((e.blockedOn = t),
            ah(e.priority, function () {
              sh(n);
            }));
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
function Li(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = bc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((vc = r), n.target.dispatchEvent(r), (vc = null));
    } else return ((t = ei(n)), t !== null && zu(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function ff(e, t, n) {
  Li(e) && n.delete(t);
}
function W0() {
  ((Sc = !1),
    Vn !== null && Li(Vn) && (Vn = null),
    Qn !== null && Li(Qn) && (Qn = null),
    Gn !== null && Li(Gn) && (Gn = null),
    Ns.forEach(ff),
    Ps.forEach(ff));
}
function Zo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Sc ||
      ((Sc = !0),
      mt.unstable_scheduleCallback(mt.unstable_NormalPriority, W0)));
}
function Ts(e) {
  function t(o) {
    return Zo(o, e);
  }
  if (0 < mi.length) {
    Zo(mi[0], e);
    for (var n = 1; n < mi.length; n++) {
      var r = mi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vn !== null && Zo(Vn, e),
      Qn !== null && Zo(Qn, e),
      Gn !== null && Zo(Gn, e),
      Ns.forEach(t),
      Ps.forEach(t),
      n = 0;
    n < _n.length;
    n++
  )
    ((r = _n[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < _n.length && ((n = _n[0]), n.blockedOn === null); )
    (lh(n), n.blockedOn === null && _n.shift());
}
var po = bn.ReactCurrentBatchConfig,
  oa = !0;
function V0(e, t, n, r) {
  var o = le,
    s = po.transition;
  po.transition = null;
  try {
    ((le = 1), Uu(e, t, n, r));
  } finally {
    ((le = o), (po.transition = s));
  }
}
function Q0(e, t, n, r) {
  var o = le,
    s = po.transition;
  po.transition = null;
  try {
    ((le = 4), Uu(e, t, n, r));
  } finally {
    ((le = o), (po.transition = s));
  }
}
function Uu(e, t, n, r) {
  if (oa) {
    var o = bc(e, t, n, r);
    if (o === null) (Ol(e, t, r, sa, n), df(e, r));
    else if (H0(o, e, t, n, r)) r.stopPropagation();
    else if ((df(e, r), t & 4 && -1 < B0.indexOf(e))) {
      for (; o !== null; ) {
        var s = ei(o);
        if (
          (s !== null && oh(s),
          (s = bc(e, t, n, r)),
          s === null && Ol(e, t, r, sa, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else Ol(e, t, r, null, n);
  }
}
var sa = null;
function bc(e, t, n, r) {
  if (((sa = null), (e = Lu(r)), (e = vr(e)), e !== null))
    if (((t = Dr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ym(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((sa = e), null);
}
function ch(e) {
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
      switch (M0()) {
        case Du:
          return 1;
        case eh:
          return 4;
        case na:
        case _0:
          return 16;
        case th:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bn = null,
  $u = null,
  Di = null;
function uh() {
  if (Di) return Di;
  var e,
    t = $u,
    n = t.length,
    r,
    o = "value" in Bn ? Bn.value : Bn.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (Di = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Fi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function hi() {
  return !0;
}
function pf() {
  return !1;
}
function vt(e) {
  function t(n, r, o, s, i) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? hi
        : pf),
      (this.isPropagationStopped = pf),
      this
    );
  }
  return (
    Ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = hi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = hi));
      },
      persist: function () {},
      isPersistent: hi,
    }),
    t
  );
}
var zo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Bu = vt(zo),
  Js = Ce({}, zo, { view: 0, detail: 0 }),
  G0 = vt(Js),
  Cl,
  El,
  Jo,
  _a = Ce({}, Js, {
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
    getModifierState: Hu,
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
        : (e !== Jo &&
            (Jo && e.type === "mousemove"
              ? ((Cl = e.screenX - Jo.screenX), (El = e.screenY - Jo.screenY))
              : (El = Cl = 0),
            (Jo = e)),
          Cl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : El;
    },
  }),
  mf = vt(_a),
  K0 = Ce({}, _a, { dataTransfer: 0 }),
  q0 = vt(K0),
  Y0 = Ce({}, Js, { relatedTarget: 0 }),
  jl = vt(Y0),
  X0 = Ce({}, zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Z0 = vt(X0),
  J0 = Ce({}, zo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ew = vt(J0),
  tw = Ce({}, zo, { data: 0 }),
  hf = vt(tw),
  nw = {
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
  rw = {
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
  ow = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function sw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ow[e]) ? !!t[e] : !1;
}
function Hu() {
  return sw;
}
var iw = Ce({}, Js, {
    key: function (e) {
      if (e.key) {
        var t = nw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? rw[e.keyCode] || "Unidentified"
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
    getModifierState: Hu,
    charCode: function (e) {
      return e.type === "keypress" ? Fi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fi(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  aw = vt(iw),
  lw = Ce({}, _a, {
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
  vf = vt(lw),
  cw = Ce({}, Js, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Hu,
  }),
  uw = vt(cw),
  dw = Ce({}, zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fw = vt(dw),
  pw = Ce({}, _a, {
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
  mw = vt(pw),
  hw = [9, 13, 27, 32],
  Wu = vn && "CompositionEvent" in window,
  hs = null;
vn && "documentMode" in document && (hs = document.documentMode);
var vw = vn && "TextEvent" in window && !hs,
  dh = vn && (!Wu || (hs && 8 < hs && 11 >= hs)),
  gf = " ",
  yf = !1;
function fh(e, t) {
  switch (e) {
    case "keyup":
      return hw.indexOf(t.keyCode) !== -1;
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
function ph(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Jr = !1;
function gw(e, t) {
  switch (e) {
    case "compositionend":
      return ph(t);
    case "keypress":
      return t.which !== 32 ? null : ((yf = !0), gf);
    case "textInput":
      return ((e = t.data), e === gf && yf ? null : e);
    default:
      return null;
  }
}
function yw(e, t) {
  if (Jr)
    return e === "compositionend" || (!Wu && fh(e, t))
      ? ((e = uh()), (Di = $u = Bn = null), (Jr = !1), e)
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
      return dh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xw = {
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
function xf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xw[e.type] : t === "textarea";
}
function mh(e, t, n, r) {
  (Vm(r),
    (t = ia(t, "onChange")),
    0 < t.length &&
      ((n = new Bu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var vs = null,
  ks = null;
function ww(e) {
  jh(e, 0);
}
function Ia(e) {
  var t = no(e);
  if (Fm(t)) return e;
}
function Sw(e, t) {
  if (e === "change") return t;
}
var hh = !1;
if (vn) {
  var Nl;
  if (vn) {
    var Pl = "oninput" in document;
    if (!Pl) {
      var wf = document.createElement("div");
      (wf.setAttribute("oninput", "return;"),
        (Pl = typeof wf.oninput == "function"));
    }
    Nl = Pl;
  } else Nl = !1;
  hh = Nl && (!document.documentMode || 9 < document.documentMode);
}
function Sf() {
  vs && (vs.detachEvent("onpropertychange", vh), (ks = vs = null));
}
function vh(e) {
  if (e.propertyName === "value" && Ia(ks)) {
    var t = [];
    (mh(t, ks, e, Lu(e)), qm(ww, t));
  }
}
function bw(e, t, n) {
  e === "focusin"
    ? (Sf(), (vs = t), (ks = n), vs.attachEvent("onpropertychange", vh))
    : e === "focusout" && Sf();
}
function Cw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ia(ks);
}
function Ew(e, t) {
  if (e === "click") return Ia(t);
}
function jw(e, t) {
  if (e === "input" || e === "change") return Ia(t);
}
function Nw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ht = typeof Object.is == "function" ? Object.is : Nw;
function Rs(e, t) {
  if (Ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!oc.call(t, o) || !Ht(e[o], t[o])) return !1;
  }
  return !0;
}
function bf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Cf(e, t) {
  var n = bf(e);
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
    n = bf(n);
  }
}
function gh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? gh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function yh() {
  for (var e = window, t = Ji(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ji(e.document);
  }
  return t;
}
function Vu(e) {
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
function Pw(e) {
  var t = yh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Vu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        ((r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Cf(n, s)));
        var i = Cf(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Tw = vn && "documentMode" in document && 11 >= document.documentMode,
  eo = null,
  Cc = null,
  gs = null,
  Ec = !1;
function Ef(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ec ||
    eo == null ||
    eo !== Ji(r) ||
    ((r = eo),
    "selectionStart" in r && Vu(r)
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
    (gs && Rs(gs, r)) ||
      ((gs = r),
      (r = ia(Cc, "onSelect")),
      0 < r.length &&
        ((t = new Bu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = eo))));
}
function vi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var to = {
    animationend: vi("Animation", "AnimationEnd"),
    animationiteration: vi("Animation", "AnimationIteration"),
    animationstart: vi("Animation", "AnimationStart"),
    transitionend: vi("Transition", "TransitionEnd"),
  },
  Tl = {},
  xh = {};
vn &&
  ((xh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete to.animationend.animation,
    delete to.animationiteration.animation,
    delete to.animationstart.animation),
  "TransitionEvent" in window || delete to.transitionend.transition);
function La(e) {
  if (Tl[e]) return Tl[e];
  if (!to[e]) return e;
  var t = to[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xh) return (Tl[e] = t[n]);
  return e;
}
var wh = La("animationend"),
  Sh = La("animationiteration"),
  bh = La("animationstart"),
  Ch = La("transitionend"),
  Eh = new Map(),
  jf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function or(e, t) {
  (Eh.set(e, t), Lr(t, [e]));
}
for (var kl = 0; kl < jf.length; kl++) {
  var Rl = jf[kl],
    kw = Rl.toLowerCase(),
    Rw = Rl[0].toUpperCase() + Rl.slice(1);
  or(kw, "on" + Rw);
}
or(wh, "onAnimationEnd");
or(Sh, "onAnimationIteration");
or(bh, "onAnimationStart");
or("dblclick", "onDoubleClick");
or("focusin", "onFocus");
or("focusout", "onBlur");
or(Ch, "onTransitionEnd");
To("onMouseEnter", ["mouseout", "mouseover"]);
To("onMouseLeave", ["mouseout", "mouseover"]);
To("onPointerEnter", ["pointerout", "pointerover"]);
To("onPointerLeave", ["pointerout", "pointerover"]);
Lr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Lr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Lr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Lr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var us =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Aw = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
function Nf(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), k0(r, t, void 0, e), (e.currentTarget = null));
}
function jh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== s && o.isPropagationStopped())) break e;
          (Nf(o, l, u), (s = c));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== s && o.isPropagationStopped())
          )
            break e;
          (Nf(o, l, u), (s = c));
        }
    }
  }
  if (ta) throw ((e = xc), (ta = !1), (xc = null), e);
}
function pe(e, t) {
  var n = t[kc];
  n === void 0 && (n = t[kc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Nh(t, e, 2, !1), n.add(r));
}
function Al(e, t, n) {
  var r = 0;
  (t && (r |= 4), Nh(n, e, r, t));
}
var gi = "_reactListening" + Math.random().toString(36).slice(2);
function As(e) {
  if (!e[gi]) {
    ((e[gi] = !0),
      Mm.forEach(function (n) {
        n !== "selectionchange" && (Aw.has(n) || Al(n, !1, e), Al(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gi] || ((t[gi] = !0), Al("selectionchange", !1, t));
  }
}
function Nh(e, t, n, r) {
  switch (ch(t)) {
    case 1:
      var o = V0;
      break;
    case 4:
      o = Q0;
      break;
    default:
      o = Uu;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !yc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function Ol(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var c = i.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = i.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = vr(l)), i === null)) return;
          if (((c = i.tag), c === 5 || c === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  qm(function () {
    var u = s,
      d = Lu(n),
      f = [];
    e: {
      var g = Eh.get(e);
      if (g !== void 0) {
        var p = Bu,
          S = e;
        switch (e) {
          case "keypress":
            if (Fi(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = aw;
            break;
          case "focusin":
            ((S = "focus"), (p = jl));
            break;
          case "focusout":
            ((S = "blur"), (p = jl));
            break;
          case "beforeblur":
          case "afterblur":
            p = jl;
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
            p = mf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = q0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = uw;
            break;
          case wh:
          case Sh:
          case bh:
            p = Z0;
            break;
          case Ch:
            p = fw;
            break;
          case "scroll":
            p = G0;
            break;
          case "wheel":
            p = mw;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = ew;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = vf;
        }
        var m = (t & 4) !== 0,
          w = !m && e === "scroll",
          y = m ? (g !== null ? g + "Capture" : null) : g;
        m = [];
        for (var h = u, x; h !== null; ) {
          x = h;
          var b = x.stateNode;
          if (
            (x.tag === 5 &&
              b !== null &&
              ((x = b),
              y !== null && ((b = js(h, y)), b != null && m.push(Os(h, b, x)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < m.length &&
          ((g = new p(g, S, null, n, d)), f.push({ event: g, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          g &&
            n !== vc &&
            (S = n.relatedTarget || n.fromElement) &&
            (vr(S) || S[gn]))
        )
          break e;
        if (
          (p || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
                ? g.defaultView || g.parentWindow
                : window),
          p
            ? ((S = n.relatedTarget || n.toElement),
              (p = u),
              (S = S ? vr(S) : null),
              S !== null &&
                ((w = Dr(S)), S !== w || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((p = null), (S = u)),
          p !== S)
        ) {
          if (
            ((m = mf),
            (b = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = vf),
              (b = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (w = p == null ? g : no(p)),
            (x = S == null ? g : no(S)),
            (g = new m(b, h + "leave", p, n, d)),
            (g.target = w),
            (g.relatedTarget = x),
            (b = null),
            vr(d) === u &&
              ((m = new m(y, h + "enter", S, n, d)),
              (m.target = x),
              (m.relatedTarget = w),
              (b = m)),
            (w = b),
            p && S)
          )
            t: {
              for (m = p, y = S, h = 0, x = m; x; x = Vr(x)) h++;
              for (x = 0, b = y; b; b = Vr(b)) x++;
              for (; 0 < h - x; ) ((m = Vr(m)), h--);
              for (; 0 < x - h; ) ((y = Vr(y)), x--);
              for (; h--; ) {
                if (m === y || (y !== null && m === y.alternate)) break t;
                ((m = Vr(m)), (y = Vr(y)));
              }
              m = null;
            }
          else m = null;
          (p !== null && Pf(f, g, p, m, !1),
            S !== null && w !== null && Pf(f, w, S, m, !0));
        }
      }
      e: {
        if (
          ((g = u ? no(u) : window),
          (p = g.nodeName && g.nodeName.toLowerCase()),
          p === "select" || (p === "input" && g.type === "file"))
        )
          var C = Sw;
        else if (xf(g))
          if (hh) C = jw;
          else {
            C = Cw;
            var j = bw;
          }
        else
          (p = g.nodeName) &&
            p.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (C = Ew);
        if (C && (C = C(e, u))) {
          mh(f, C, n, d);
          break e;
        }
        (j && j(e, g, u),
          e === "focusout" &&
            (j = g._wrapperState) &&
            j.controlled &&
            g.type === "number" &&
            dc(g, "number", g.value));
      }
      switch (((j = u ? no(u) : window), e)) {
        case "focusin":
          (xf(j) || j.contentEditable === "true") &&
            ((eo = j), (Cc = u), (gs = null));
          break;
        case "focusout":
          gs = Cc = eo = null;
          break;
        case "mousedown":
          Ec = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ec = !1), Ef(f, n, d));
          break;
        case "selectionchange":
          if (Tw) break;
        case "keydown":
        case "keyup":
          Ef(f, n, d);
      }
      var E;
      if (Wu)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Jr
          ? fh(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      (k &&
        (dh &&
          n.locale !== "ko" &&
          (Jr || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Jr && (E = uh())
            : ((Bn = d),
              ($u = "value" in Bn ? Bn.value : Bn.textContent),
              (Jr = !0))),
        (j = ia(u, k)),
        0 < j.length &&
          ((k = new hf(k, e, null, n, d)),
          f.push({ event: k, listeners: j }),
          E ? (k.data = E) : ((E = ph(n)), E !== null && (k.data = E)))),
        (E = vw ? gw(e, n) : yw(e, n)) &&
          ((u = ia(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new hf("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = E))));
    }
    jh(f, t);
  });
}
function Os(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ia(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    (o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = js(e, n)),
      s != null && r.unshift(Os(e, s, o)),
      (s = js(e, t)),
      s != null && r.push(Os(e, s, o))),
      (e = e.return));
  }
  return r;
}
function Vr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pf(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((c = js(n, s)), c != null && i.unshift(Os(n, c, l)))
        : o || ((c = js(n, s)), c != null && i.push(Os(n, c, l)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ow = /\r\n?/g,
  Mw = /\u0000|\uFFFD/g;
function Tf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ow,
      `
`,
    )
    .replace(Mw, "");
}
function yi(e, t, n) {
  if (((t = Tf(t)), Tf(e) !== t && n)) throw Error(A(425));
}
function aa() {}
var jc = null,
  Nc = null;
function Pc(e, t) {
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
var Tc = typeof setTimeout == "function" ? setTimeout : void 0,
  _w = typeof clearTimeout == "function" ? clearTimeout : void 0,
  kf = typeof Promise == "function" ? Promise : void 0,
  Iw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof kf < "u"
        ? function (e) {
            return kf.resolve(null).then(e).catch(Lw);
          }
        : Tc;
function Lw(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ml(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), Ts(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ts(t);
}
function Kn(e) {
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
function Rf(e) {
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
var Uo = Math.random().toString(36).slice(2),
  Zt = "__reactFiber$" + Uo,
  Ms = "__reactProps$" + Uo,
  gn = "__reactContainer$" + Uo,
  kc = "__reactEvents$" + Uo,
  Dw = "__reactListeners$" + Uo,
  Fw = "__reactHandles$" + Uo;
function vr(e) {
  var t = e[Zt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gn] || n[Zt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Rf(e); e !== null; ) {
          if ((n = e[Zt])) return n;
          e = Rf(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function ei(e) {
  return (
    (e = e[Zt] || e[gn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function no(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Da(e) {
  return e[Ms] || null;
}
var Rc = [],
  ro = -1;
function sr(e) {
  return { current: e };
}
function me(e) {
  0 > ro || ((e.current = Rc[ro]), (Rc[ro] = null), ro--);
}
function ue(e, t) {
  (ro++, (Rc[ro] = e.current), (e.current = t));
}
var tr = {},
  qe = sr(tr),
  it = sr(!1),
  Tr = tr;
function ko(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function at(e) {
  return ((e = e.childContextTypes), e != null);
}
function la() {
  (me(it), me(qe));
}
function Af(e, t, n) {
  if (qe.current !== tr) throw Error(A(168));
  (ue(qe, t), ue(it, n));
}
function Ph(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, b0(e) || "Unknown", o));
  return Ce({}, n, r);
}
function ca(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tr),
    (Tr = qe.current),
    ue(qe, e),
    ue(it, it.current),
    !0
  );
}
function Of(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  (n
    ? ((e = Ph(e, t, Tr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      me(it),
      me(qe),
      ue(qe, e))
    : me(it),
    ue(it, n));
}
var dn = null,
  Fa = !1,
  _l = !1;
function Th(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function zw(e) {
  ((Fa = !0), Th(e));
}
function ir() {
  if (!_l && dn !== null) {
    _l = !0;
    var e = 0,
      t = le;
    try {
      var n = dn;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((dn = null), (Fa = !1));
    } catch (o) {
      throw (dn !== null && (dn = dn.slice(e + 1)), Jm(Du, ir), o);
    } finally {
      ((le = t), (_l = !1));
    }
  }
  return null;
}
var oo = [],
  so = 0,
  ua = null,
  da = 0,
  St = [],
  bt = 0,
  kr = null,
  pn = 1,
  mn = "";
function pr(e, t) {
  ((oo[so++] = da), (oo[so++] = ua), (ua = e), (da = t));
}
function kh(e, t, n) {
  ((St[bt++] = pn), (St[bt++] = mn), (St[bt++] = kr), (kr = e));
  var r = pn;
  e = mn;
  var o = 32 - $t(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var s = 32 - $t(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    ((s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (pn = (1 << (32 - $t(t) + o)) | (n << o) | r),
      (mn = s + e));
  } else ((pn = (1 << s) | (n << o) | r), (mn = e));
}
function Qu(e) {
  e.return !== null && (pr(e, 1), kh(e, 1, 0));
}
function Gu(e) {
  for (; e === ua; )
    ((ua = oo[--so]), (oo[so] = null), (da = oo[--so]), (oo[so] = null));
  for (; e === kr; )
    ((kr = St[--bt]),
      (St[bt] = null),
      (mn = St[--bt]),
      (St[bt] = null),
      (pn = St[--bt]),
      (St[bt] = null));
}
var ft = null,
  dt = null,
  xe = !1,
  zt = null;
function Rh(e, t) {
  var n = Ct(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Mf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ft = e), (dt = Kn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (dt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = kr !== null ? { id: pn, overflow: mn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ct(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (dt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ac(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Oc(e) {
  if (xe) {
    var t = dt;
    if (t) {
      var n = t;
      if (!Mf(e, t)) {
        if (Ac(e)) throw Error(A(418));
        t = Kn(n.nextSibling);
        var r = ft;
        t && Mf(e, t)
          ? Rh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (xe = !1), (ft = e));
      }
    } else {
      if (Ac(e)) throw Error(A(418));
      ((e.flags = (e.flags & -4097) | 2), (xe = !1), (ft = e));
    }
  }
}
function _f(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ft = e;
}
function xi(e) {
  if (e !== ft) return !1;
  if (!xe) return (_f(e), (xe = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Pc(e.type, e.memoizedProps))),
    t && (t = dt))
  ) {
    if (Ac(e)) throw (Ah(), Error(A(418)));
    for (; t; ) (Rh(e, t), (t = Kn(t.nextSibling)));
  }
  if ((_f(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              dt = Kn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      dt = null;
    }
  } else dt = ft ? Kn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ah() {
  for (var e = dt; e; ) e = Kn(e.nextSibling);
}
function Ro() {
  ((dt = ft = null), (xe = !1));
}
function Ku(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
var Uw = bn.ReactCurrentBatchConfig;
function es(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            i === null ? delete l[s] : (l[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function wi(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function If(e) {
  var t = e._init;
  return t(e._payload);
}
function Oh(e) {
  function t(y, h) {
    if (e) {
      var x = y.deletions;
      x === null ? ((y.deletions = [h]), (y.flags |= 16)) : x.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) (t(y, h), (h = h.sibling));
    return null;
  }
  function r(y, h) {
    for (y = new Map(); h !== null; )
      (h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling));
    return y;
  }
  function o(y, h) {
    return ((y = Zn(y, h)), (y.index = 0), (y.sibling = null), y);
  }
  function s(y, h, x) {
    return (
      (y.index = x),
      e
        ? ((x = y.alternate),
          x !== null
            ? ((x = x.index), x < h ? ((y.flags |= 2), h) : x)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function i(y) {
    return (e && y.alternate === null && (y.flags |= 2), y);
  }
  function l(y, h, x, b) {
    return h === null || h.tag !== 6
      ? ((h = $l(x, y.mode, b)), (h.return = y), h)
      : ((h = o(h, x)), (h.return = y), h);
  }
  function c(y, h, x, b) {
    var C = x.type;
    return C === Zr
      ? d(y, h, x.props.children, b, x.key)
      : h !== null &&
          (h.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === On &&
              If(C) === h.type))
        ? ((b = o(h, x.props)), (b.ref = es(y, h, x)), (b.return = y), b)
        : ((b = Vi(x.type, x.key, x.props, null, y.mode, b)),
          (b.ref = es(y, h, x)),
          (b.return = y),
          b);
  }
  function u(y, h, x, b) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== x.containerInfo ||
      h.stateNode.implementation !== x.implementation
      ? ((h = Bl(x, y.mode, b)), (h.return = y), h)
      : ((h = o(h, x.children || [])), (h.return = y), h);
  }
  function d(y, h, x, b, C) {
    return h === null || h.tag !== 7
      ? ((h = Nr(x, y.mode, b, C)), (h.return = y), h)
      : ((h = o(h, x)), (h.return = y), h);
  }
  function f(y, h, x) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = $l("" + h, y.mode, x)), (h.return = y), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ci:
          return (
            (x = Vi(h.type, h.key, h.props, null, y.mode, x)),
            (x.ref = es(y, null, h)),
            (x.return = y),
            x
          );
        case Xr:
          return ((h = Bl(h, y.mode, x)), (h.return = y), h);
        case On:
          var b = h._init;
          return f(y, b(h._payload), x);
      }
      if (ls(h) || qo(h))
        return ((h = Nr(h, y.mode, x, null)), (h.return = y), h);
      wi(y, h);
    }
    return null;
  }
  function g(y, h, x, b) {
    var C = h !== null ? h.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return C !== null ? null : l(y, h, "" + x, b);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ci:
          return x.key === C ? c(y, h, x, b) : null;
        case Xr:
          return x.key === C ? u(y, h, x, b) : null;
        case On:
          return ((C = x._init), g(y, h, C(x._payload), b));
      }
      if (ls(x) || qo(x)) return C !== null ? null : d(y, h, x, b, null);
      wi(y, x);
    }
    return null;
  }
  function p(y, h, x, b, C) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return ((y = y.get(x) || null), l(h, y, "" + b, C));
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case ci:
          return (
            (y = y.get(b.key === null ? x : b.key) || null),
            c(h, y, b, C)
          );
        case Xr:
          return (
            (y = y.get(b.key === null ? x : b.key) || null),
            u(h, y, b, C)
          );
        case On:
          var j = b._init;
          return p(y, h, x, j(b._payload), C);
      }
      if (ls(b) || qo(b)) return ((y = y.get(x) || null), d(h, y, b, C, null));
      wi(h, b);
    }
    return null;
  }
  function S(y, h, x, b) {
    for (
      var C = null, j = null, E = h, k = (h = 0), I = null;
      E !== null && k < x.length;
      k++
    ) {
      E.index > k ? ((I = E), (E = null)) : (I = E.sibling);
      var R = g(y, E, x[k], b);
      if (R === null) {
        E === null && (E = I);
        break;
      }
      (e && E && R.alternate === null && t(y, E),
        (h = s(R, h, k)),
        j === null ? (C = R) : (j.sibling = R),
        (j = R),
        (E = I));
    }
    if (k === x.length) return (n(y, E), xe && pr(y, k), C);
    if (E === null) {
      for (; k < x.length; k++)
        ((E = f(y, x[k], b)),
          E !== null &&
            ((h = s(E, h, k)),
            j === null ? (C = E) : (j.sibling = E),
            (j = E)));
      return (xe && pr(y, k), C);
    }
    for (E = r(y, E); k < x.length; k++)
      ((I = p(E, y, k, x[k], b)),
        I !== null &&
          (e && I.alternate !== null && E.delete(I.key === null ? k : I.key),
          (h = s(I, h, k)),
          j === null ? (C = I) : (j.sibling = I),
          (j = I)));
    return (
      e &&
        E.forEach(function (z) {
          return t(y, z);
        }),
      xe && pr(y, k),
      C
    );
  }
  function m(y, h, x, b) {
    var C = qo(x);
    if (typeof C != "function") throw Error(A(150));
    if (((x = C.call(x)), x == null)) throw Error(A(151));
    for (
      var j = (C = null), E = h, k = (h = 0), I = null, R = x.next();
      E !== null && !R.done;
      k++, R = x.next()
    ) {
      E.index > k ? ((I = E), (E = null)) : (I = E.sibling);
      var z = g(y, E, R.value, b);
      if (z === null) {
        E === null && (E = I);
        break;
      }
      (e && E && z.alternate === null && t(y, E),
        (h = s(z, h, k)),
        j === null ? (C = z) : (j.sibling = z),
        (j = z),
        (E = I));
    }
    if (R.done) return (n(y, E), xe && pr(y, k), C);
    if (E === null) {
      for (; !R.done; k++, R = x.next())
        ((R = f(y, R.value, b)),
          R !== null &&
            ((h = s(R, h, k)),
            j === null ? (C = R) : (j.sibling = R),
            (j = R)));
      return (xe && pr(y, k), C);
    }
    for (E = r(y, E); !R.done; k++, R = x.next())
      ((R = p(E, y, k, R.value, b)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? k : R.key),
          (h = s(R, h, k)),
          j === null ? (C = R) : (j.sibling = R),
          (j = R)));
    return (
      e &&
        E.forEach(function (_) {
          return t(y, _);
        }),
      xe && pr(y, k),
      C
    );
  }
  function w(y, h, x, b) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Zr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case ci:
          e: {
            for (var C = x.key, j = h; j !== null; ) {
              if (j.key === C) {
                if (((C = x.type), C === Zr)) {
                  if (j.tag === 7) {
                    (n(y, j.sibling),
                      (h = o(j, x.props.children)),
                      (h.return = y),
                      (y = h));
                    break e;
                  }
                } else if (
                  j.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === On &&
                    If(C) === j.type)
                ) {
                  (n(y, j.sibling),
                    (h = o(j, x.props)),
                    (h.ref = es(y, j, x)),
                    (h.return = y),
                    (y = h));
                  break e;
                }
                n(y, j);
                break;
              } else t(y, j);
              j = j.sibling;
            }
            x.type === Zr
              ? ((h = Nr(x.props.children, y.mode, b, x.key)),
                (h.return = y),
                (y = h))
              : ((b = Vi(x.type, x.key, x.props, null, y.mode, b)),
                (b.ref = es(y, h, x)),
                (b.return = y),
                (y = b));
          }
          return i(y);
        case Xr:
          e: {
            for (j = x.key; h !== null; ) {
              if (h.key === j)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === x.containerInfo &&
                  h.stateNode.implementation === x.implementation
                ) {
                  (n(y, h.sibling),
                    (h = o(h, x.children || [])),
                    (h.return = y),
                    (y = h));
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            ((h = Bl(x, y.mode, b)), (h.return = y), (y = h));
          }
          return i(y);
        case On:
          return ((j = x._init), w(y, h, j(x._payload), b));
      }
      if (ls(x)) return S(y, h, x, b);
      if (qo(x)) return m(y, h, x, b);
      wi(y, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = o(h, x)), (h.return = y), (y = h))
          : (n(y, h), (h = $l(x, y.mode, b)), (h.return = y), (y = h)),
        i(y))
      : n(y, h);
  }
  return w;
}
var Ao = Oh(!0),
  Mh = Oh(!1),
  fa = sr(null),
  pa = null,
  io = null,
  qu = null;
function Yu() {
  qu = io = pa = null;
}
function Xu(e) {
  var t = fa.current;
  (me(fa), (e._currentValue = t));
}
function Mc(e, t, n) {
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
function mo(e, t) {
  ((pa = e),
    (qu = io = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (st = !0), (e.firstContext = null)));
}
function jt(e) {
  var t = e._currentValue;
  if (qu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), io === null)) {
      if (pa === null) throw Error(A(308));
      ((io = e), (pa.dependencies = { lanes: 0, firstContext: e }));
    } else io = io.next = e;
  return t;
}
var gr = null;
function Zu(e) {
  gr === null ? (gr = [e]) : gr.push(e);
}
function _h(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Zu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    yn(e, r)
  );
}
function yn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Mn = !1;
function Ju(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ih(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function hn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), re & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      yn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Zu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    yn(e, n)
  );
}
function zi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Fu(e, n));
  }
}
function Lf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (o = s = i) : (s = s.next = i), (n = n.next));
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ma(e, t, n, r) {
  var o = e.updateQueue;
  Mn = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var c = l,
      u = c.next;
    ((c.next = null), i === null ? (s = u) : (i.next = u), (i = c));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== i &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (s !== null) {
    var f = o.baseState;
    ((i = 0), (d = u = c = null), (l = s));
    do {
      var g = l.lane,
        p = l.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var S = e,
            m = l;
          switch (((g = t), (p = n), m.tag)) {
            case 1:
              if (((S = m.payload), typeof S == "function")) {
                f = S.call(p, f, g);
                break e;
              }
              f = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = m.payload),
                (g = typeof S == "function" ? S.call(p, f, g) : S),
                g == null)
              )
                break e;
              f = Ce({}, f, g);
              break e;
            case 2:
              Mn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [l]) : g.push(l));
      } else
        ((p = {
          eventTime: p,
          lane: g,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = p), (c = f)) : (d = d.next = p),
          (i |= g));
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        ((g = l),
          (l = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (c = f),
      (o.baseState = c),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((i |= o.lane), (o = o.next));
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    ((Ar |= i), (e.lanes = i), (e.memoizedState = f));
  }
}
function Df(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(A(191, o));
        o.call(r);
      }
    }
}
var ti = {},
  nn = sr(ti),
  _s = sr(ti),
  Is = sr(ti);
function yr(e) {
  if (e === ti) throw Error(A(174));
  return e;
}
function ed(e, t) {
  switch ((ue(Is, t), ue(_s, e), ue(nn, ti), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pc(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pc(t, e)));
  }
  (me(nn), ue(nn, t));
}
function Oo() {
  (me(nn), me(_s), me(Is));
}
function Lh(e) {
  yr(Is.current);
  var t = yr(nn.current),
    n = pc(t, e.type);
  t !== n && (ue(_s, e), ue(nn, n));
}
function td(e) {
  _s.current === e && (me(nn), me(_s));
}
var Se = sr(0);
function ha(e) {
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
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Il = [];
function nd() {
  for (var e = 0; e < Il.length; e++)
    Il[e]._workInProgressVersionPrimary = null;
  Il.length = 0;
}
var Ui = bn.ReactCurrentDispatcher,
  Ll = bn.ReactCurrentBatchConfig,
  Rr = 0,
  be = null,
  Ie = null,
  Fe = null,
  va = !1,
  ys = !1,
  Ls = 0,
  $w = 0;
function Qe() {
  throw Error(A(321));
}
function rd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ht(e[n], t[n])) return !1;
  return !0;
}
function od(e, t, n, r, o, s) {
  if (
    ((Rr = s),
    (be = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ui.current = e === null || e.memoizedState === null ? Vw : Qw),
    (e = n(r, o)),
    ys)
  ) {
    s = 0;
    do {
      if (((ys = !1), (Ls = 0), 25 <= s)) throw Error(A(301));
      ((s += 1),
        (Fe = Ie = null),
        (t.updateQueue = null),
        (Ui.current = Gw),
        (e = n(r, o)));
    } while (ys);
  }
  if (
    ((Ui.current = ga),
    (t = Ie !== null && Ie.next !== null),
    (Rr = 0),
    (Fe = Ie = be = null),
    (va = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function sd() {
  var e = Ls !== 0;
  return ((Ls = 0), e);
}
function Kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Fe === null ? (be.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe);
}
function Nt() {
  if (Ie === null) {
    var e = be.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ie.next;
  var t = Fe === null ? be.memoizedState : Fe.next;
  if (t !== null) ((Fe = t), (Ie = e));
  else {
    if (e === null) throw Error(A(310));
    ((Ie = e),
      (e = {
        memoizedState: Ie.memoizedState,
        baseState: Ie.baseState,
        baseQueue: Ie.baseQueue,
        queue: Ie.queue,
        next: null,
      }),
      Fe === null ? (be.memoizedState = Fe = e) : (Fe = Fe.next = e));
  }
  return Fe;
}
function Ds(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Dl(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Ie,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      ((o.next = s.next), (s.next = i));
    }
    ((r.baseQueue = o = s), (n.pending = null));
  }
  if (o !== null) {
    ((s = o.next), (r = r.baseState));
    var l = (i = null),
      c = null,
      u = s;
    do {
      var d = u.lane;
      if ((Rr & d) === d)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (c === null ? ((l = c = f), (i = r)) : (c = c.next = f),
          (be.lanes |= d),
          (Ar |= d));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (c === null ? (i = r) : (c.next = l),
      Ht(r, t.memoizedState) || (st = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = c),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((s = o.lane), (be.lanes |= s), (Ar |= s), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fl(e) {
  var t = Nt(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do ((s = e(s, i.action)), (i = i.next));
    while (i !== o);
    (Ht(s, t.memoizedState) || (st = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function Dh() {}
function Fh(e, t) {
  var n = be,
    r = Nt(),
    o = t(),
    s = !Ht(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (st = !0)),
    (r = r.queue),
    id($h.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Fs(9, Uh.bind(null, n, r, o, t), void 0, null),
      ze === null)
    )
      throw Error(A(349));
    Rr & 30 || zh(n, t, o);
  }
  return o;
}
function zh(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = be.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (be.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Uh(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Bh(t) && Hh(e));
}
function $h(e, t, n) {
  return n(function () {
    Bh(t) && Hh(e);
  });
}
function Bh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ht(e, n);
  } catch {
    return !0;
  }
}
function Hh(e) {
  var t = yn(e, 1);
  t !== null && Bt(t, e, 1, -1);
}
function Ff(e) {
  var t = Kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ds,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ww.bind(null, be, e)),
    [t.memoizedState, e]
  );
}
function Fs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = be.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (be.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wh() {
  return Nt().memoizedState;
}
function $i(e, t, n, r) {
  var o = Kt();
  ((be.flags |= e),
    (o.memoizedState = Fs(1 | t, n, void 0, r === void 0 ? null : r)));
}
function za(e, t, n, r) {
  var o = Nt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Ie !== null) {
    var i = Ie.memoizedState;
    if (((s = i.destroy), r !== null && rd(r, i.deps))) {
      o.memoizedState = Fs(t, n, s, r);
      return;
    }
  }
  ((be.flags |= e), (o.memoizedState = Fs(1 | t, n, s, r)));
}
function zf(e, t) {
  return $i(8390656, 8, e, t);
}
function id(e, t) {
  return za(2048, 8, e, t);
}
function Vh(e, t) {
  return za(4, 2, e, t);
}
function Qh(e, t) {
  return za(4, 4, e, t);
}
function Gh(e, t) {
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
function Kh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    za(4, 4, Gh.bind(null, t, e), n)
  );
}
function ad() {}
function qh(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yh(e, t) {
  var n = Nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xh(e, t, n) {
  return Rr & 21
    ? (Ht(n, t) || ((n = nh()), (be.lanes |= n), (Ar |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (st = !0)), (e.memoizedState = n));
}
function Bw(e, t) {
  var n = le;
  ((le = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Ll.transition;
  Ll.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((le = n), (Ll.transition = r));
  }
}
function Zh() {
  return Nt().memoizedState;
}
function Hw(e, t, n) {
  var r = Xn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Jh(e))
  )
    ev(t, n);
  else if (((n = _h(e, t, n, r)), n !== null)) {
    var o = Je();
    (Bt(n, e, r, o), tv(n, t, r));
  }
}
function Ww(e, t, n) {
  var r = Xn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jh(e)) ev(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Ht(l, i))) {
          var c = t.interleaved;
          (c === null
            ? ((o.next = o), Zu(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = _h(e, t, o, r)),
      n !== null && ((o = Je()), Bt(n, e, r, o), tv(n, t, r)));
  }
}
function Jh(e) {
  var t = e.alternate;
  return e === be || (t !== null && t === be);
}
function ev(e, t) {
  ys = va = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function tv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Fu(e, n));
  }
}
var ga = {
    readContext: jt,
    useCallback: Qe,
    useContext: Qe,
    useEffect: Qe,
    useImperativeHandle: Qe,
    useInsertionEffect: Qe,
    useLayoutEffect: Qe,
    useMemo: Qe,
    useReducer: Qe,
    useRef: Qe,
    useState: Qe,
    useDebugValue: Qe,
    useDeferredValue: Qe,
    useTransition: Qe,
    useMutableSource: Qe,
    useSyncExternalStore: Qe,
    useId: Qe,
    unstable_isNewReconciler: !1,
  },
  Vw = {
    readContext: jt,
    useCallback: function (e, t) {
      return ((Kt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: jt,
    useEffect: zf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $i(4194308, 4, Gh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $i(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $i(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Kt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Kt();
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
        (e = e.dispatch = Hw.bind(null, be, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Kt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Ff,
    useDebugValue: ad,
    useDeferredValue: function (e) {
      return (Kt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ff(!1),
        t = e[0];
      return ((e = Bw.bind(null, e[1])), (Kt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = be,
        o = Kt();
      if (xe) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), ze === null)) throw Error(A(349));
        Rr & 30 || zh(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        zf($h.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Fs(9, Uh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Kt(),
        t = ze.identifierPrefix;
      if (xe) {
        var n = mn,
          r = pn;
        ((n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ls++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = $w++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Qw = {
    readContext: jt,
    useCallback: qh,
    useContext: jt,
    useEffect: id,
    useImperativeHandle: Kh,
    useInsertionEffect: Vh,
    useLayoutEffect: Qh,
    useMemo: Yh,
    useReducer: Dl,
    useRef: Wh,
    useState: function () {
      return Dl(Ds);
    },
    useDebugValue: ad,
    useDeferredValue: function (e) {
      var t = Nt();
      return Xh(t, Ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Dl(Ds)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Dh,
    useSyncExternalStore: Fh,
    useId: Zh,
    unstable_isNewReconciler: !1,
  },
  Gw = {
    readContext: jt,
    useCallback: qh,
    useContext: jt,
    useEffect: id,
    useImperativeHandle: Kh,
    useInsertionEffect: Vh,
    useLayoutEffect: Qh,
    useMemo: Yh,
    useReducer: Fl,
    useRef: Wh,
    useState: function () {
      return Fl(Ds);
    },
    useDebugValue: ad,
    useDeferredValue: function (e) {
      var t = Nt();
      return Ie === null ? (t.memoizedState = e) : Xh(t, Ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Fl(Ds)[0],
        t = Nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Dh,
    useSyncExternalStore: Fh,
    useId: Zh,
    unstable_isNewReconciler: !1,
  };
function _t(e, t) {
  if (e && e.defaultProps) {
    ((t = Ce({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function _c(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Ua = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Je(),
      o = Xn(e),
      s = hn(r, o);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = qn(e, s, o)),
      t !== null && (Bt(t, e, o, r), zi(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Je(),
      o = Xn(e),
      s = hn(r, o);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = qn(e, s, o)),
      t !== null && (Bt(t, e, o, r), zi(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Je(),
      r = Xn(e),
      o = hn(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = qn(e, o, r)),
      t !== null && (Bt(t, e, r, n), zi(t, e, r)));
  },
};
function Uf(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Rs(n, r) || !Rs(o, s)
        : !0
  );
}
function nv(e, t, n) {
  var r = !1,
    o = tr,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = jt(s))
      : ((o = at(t) ? Tr : qe.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? ko(e, o) : tr)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ua),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function $f(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ua.enqueueReplaceState(t, t.state, null));
}
function Ic(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ju(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (o.context = jt(s))
    : ((s = at(t) ? Tr : qe.current), (o.context = ko(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (_c(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ua.enqueueReplaceState(o, o.state, null),
      ma(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function Mo(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += S0(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function zl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Lc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Kw = typeof WeakMap == "function" ? WeakMap : Map;
function rv(e, t, n) {
  ((n = hn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (xa || ((xa = !0), (Qc = r)), Lc(e, t));
    }),
    n
  );
}
function ov(e, t, n) {
  ((n = hn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Lc(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Lc(e, t),
          typeof r != "function" &&
            (Yn === null ? (Yn = new Set([this])) : Yn.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Bf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Kw();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = lS.bind(null, e, t, n)), t.then(e, e));
}
function Hf(e) {
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
function Wf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = hn(-1, 1)), (t.tag = 2), qn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qw = bn.ReactCurrentOwner,
  st = !1;
function Xe(e, t, n, r) {
  t.child = e === null ? Mh(t, null, n, r) : Ao(t, e.child, n, r);
}
function Vf(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    mo(t, o),
    (r = od(e, t, n, r, s, o)),
    (n = sd()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        xn(e, t, o))
      : (xe && n && Qu(t), (t.flags |= 1), Xe(e, t, r, o), t.child)
  );
}
function Qf(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !hd(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), sv(e, t, s, r, o))
      : ((e = Vi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Rs), n(i, r) && e.ref === t.ref)
    )
      return xn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Zn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sv(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Rs(s, r) && e.ref === t.ref)
      if (((st = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (st = !0);
      else return ((t.lanes = e.lanes), xn(e, t, o));
  }
  return Dc(e, t, n, r, o);
}
function iv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(lo, ct),
        (ct |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(lo, ct),
          (ct |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ue(lo, ct),
        (ct |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(lo, ct),
      (ct |= r));
  return (Xe(e, t, o, n), t.child);
}
function av(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Dc(e, t, n, r, o) {
  var s = at(n) ? Tr : qe.current;
  return (
    (s = ko(t, s)),
    mo(t, o),
    (n = od(e, t, n, r, s, o)),
    (r = sd()),
    e !== null && !st
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        xn(e, t, o))
      : (xe && r && Qu(t), (t.flags |= 1), Xe(e, t, n, o), t.child)
  );
}
function Gf(e, t, n, r, o) {
  if (at(n)) {
    var s = !0;
    ca(t);
  } else s = !1;
  if ((mo(t, o), t.stateNode === null))
    (Bi(e, t), nv(t, n, r), Ic(t, n, r, o), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var c = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = jt(u))
      : ((u = at(n) ? Tr : qe.current), (u = ko(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || c !== u) && $f(t, i, r, u)),
      (Mn = !1));
    var g = t.memoizedState;
    ((i.state = g),
      ma(t, r, i, o),
      (c = t.memoizedState),
      l !== r || g !== c || it.current || Mn
        ? (typeof d == "function" && (_c(t, n, d, r), (c = t.memoizedState)),
          (l = Mn || Uf(t, n, l, r, g, c, u))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (i.props = r),
          (i.state = c),
          (i.context = u),
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      Ih(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : _t(t.type, l)),
      (i.props = u),
      (f = t.pendingProps),
      (g = i.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = jt(c))
        : ((c = at(n) ? Tr : qe.current), (c = ko(t, c))));
    var p = n.getDerivedStateFromProps;
    ((d =
      typeof p == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== f || g !== c) && $f(t, i, r, c)),
      (Mn = !1),
      (g = t.memoizedState),
      (i.state = g),
      ma(t, r, i, o));
    var S = t.memoizedState;
    l !== f || g !== S || it.current || Mn
      ? (typeof p == "function" && (_c(t, n, p, r), (S = t.memoizedState)),
        (u = Mn || Uf(t, n, u, r, g, S, c) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, c),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, c)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = c),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Fc(e, t, n, r, s, o);
}
function Fc(e, t, n, r, o, s) {
  av(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (o && Of(t, n, !1), xn(e, t, s));
  ((r = t.stateNode), (qw.current = t));
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Ao(t, e.child, null, s)), (t.child = Ao(t, null, l, s)))
      : Xe(e, t, l, s),
    (t.memoizedState = r.state),
    o && Of(t, n, !0),
    t.child
  );
}
function lv(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Af(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Af(e, t.context, !1),
    ed(e, t.containerInfo));
}
function Kf(e, t, n, r, o) {
  return (Ro(), Ku(o), (t.flags |= 256), Xe(e, t, n, r), t.child);
}
var zc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Uc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cv(e, t, n) {
  var r = t.pendingProps,
    o = Se.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ue(Se, o & 1),
    e === null)
  )
    return (
      Oc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = Ha(i, r, 0, null)),
              (e = Nr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Uc(n)),
              (t.memoizedState = zc),
              e)
            : ld(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Yw(e, t, i, r, l, o, n);
  if (s) {
    ((s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling));
    var c = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = Zn(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = Zn(l, s)) : ((s = Nr(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Uc(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = zc),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Zn(s, { mode: "visible", children: r.children })),
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
function ld(e, t) {
  return (
    (t = Ha({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Si(e, t, n, r) {
  return (
    r !== null && Ku(r),
    Ao(t, e.child, null, n),
    (e = ld(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Yw(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = zl(Error(A(422)))), Si(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (o = t.mode),
          (r = Ha({ mode: "visible", children: r.children }, o, 0, null)),
          (s = Nr(s, o, i, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Ao(t, e.child, null, i),
          (t.child.memoizedState = Uc(i)),
          (t.memoizedState = zc),
          s);
  if (!(t.mode & 1)) return Si(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (s = Error(A(419))),
      (r = zl(s, r, void 0)),
      Si(e, t, i, r)
    );
  }
  if (((l = (i & e.childLanes) !== 0), st || l)) {
    if (((r = ze), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      ((o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), yn(e, o), Bt(r, e, o, -1)));
    }
    return (md(), (r = zl(Error(A(421)))), Si(e, t, i, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = cS.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (dt = Kn(o.nextSibling)),
      (ft = t),
      (xe = !0),
      (zt = null),
      e !== null &&
        ((St[bt++] = pn),
        (St[bt++] = mn),
        (St[bt++] = kr),
        (pn = e.id),
        (mn = e.overflow),
        (kr = t)),
      (t = ld(t, r.children)),
      (t.flags |= 4096),
      t);
}
function qf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Mc(e.return, t, n));
}
function Ul(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function uv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((Xe(e, t, r.children, n), (r = Se.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qf(e, n, t);
        else if (e.tag === 19) qf(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((ue(Se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && ha(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ul(t, !1, o, n, s));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ha(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Ul(t, !0, n, null, s);
        break;
      case "together":
        Ul(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ar |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Zn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      ((e = e.sibling),
        (n = n.sibling = Zn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Xw(e, t, n) {
  switch (t.tag) {
    case 3:
      (lv(t), Ro());
      break;
    case 5:
      Lh(t);
      break;
    case 1:
      at(t.type) && ca(t);
      break;
    case 4:
      ed(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (ue(fa, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(Se, Se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? cv(e, t, n)
            : (ue(Se, Se.current & 1),
              (e = xn(e, t, n)),
              e !== null ? e.sibling : null);
      ue(Se, Se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ue(Se, Se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), iv(e, t, n));
  }
  return xn(e, t, n);
}
var dv, $c, fv, pv;
dv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
$c = function () {};
fv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), yr(nn.current));
    var s = null;
    switch (n) {
      case "input":
        ((o = cc(e, o)), (r = cc(e, r)), (s = []));
        break;
      case "select":
        ((o = Ce({}, o, { value: void 0 })),
          (r = Ce({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((o = fc(e, o)), (r = fc(e, r)), (s = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = aa);
    }
    mc(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Cs.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && c !== l && (c != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (c && c.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in c)
              c.hasOwnProperty(i) &&
                l[i] !== c[i] &&
                (n || (n = {}), (n[i] = c[i]));
          } else (n || (s || (s = []), s.push(u, n)), (n = c));
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (s = s || []).push(u, c))
            : u === "children"
              ? (typeof c != "string" && typeof c != "number") ||
                (s = s || []).push(u, "" + c)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Cs.hasOwnProperty(u)
                  ? (c != null && u === "onScroll" && pe("scroll", e),
                    s || l === c || (s = []))
                  : (s = s || []).push(u, c));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
pv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ts(e, t) {
  if (!xe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Zw(e, t, n) {
  var r = t.pendingProps;
  switch ((Gu(t), t.tag)) {
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
      return (Ge(t), null);
    case 1:
      return (at(t.type) && la(), Ge(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Oo(),
        me(it),
        me(qe),
        nd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), zt !== null && (qc(zt), (zt = null)))),
        $c(e, t),
        Ge(t),
        null
      );
    case 5:
      td(t);
      var o = yr(Is.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (fv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return (Ge(t), null);
        }
        if (((e = yr(nn.current)), xi(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[Zt] = t), (r[Ms] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (pe("cancel", r), pe("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < us.length; o++) pe(us[o], r);
              break;
            case "source":
              pe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (pe("error", r), pe("load", r));
              break;
            case "details":
              pe("toggle", r);
              break;
            case "input":
              (rf(r, s), pe("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                pe("invalid", r));
              break;
            case "textarea":
              (sf(r, s), pe("invalid", r));
          }
          (mc(n, s), (o = null));
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      yi(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      yi(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Cs.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  pe("scroll", r);
            }
          switch (n) {
            case "input":
              (ui(r), of(r, s, !0));
              break;
            case "textarea":
              (ui(r), af(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = aa);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $m(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Zt] = t),
            (e[Ms] = r),
            dv(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = hc(n, r)), n)) {
              case "dialog":
                (pe("cancel", e), pe("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (pe("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < us.length; o++) pe(us[o], e);
                o = r;
                break;
              case "source":
                (pe("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (pe("error", e), pe("load", e), (o = r));
                break;
              case "details":
                (pe("toggle", e), (o = r));
                break;
              case "input":
                (rf(e, r), (o = cc(e, r)), pe("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ce({}, r, { value: void 0 })),
                  pe("invalid", e));
                break;
              case "textarea":
                (sf(e, r), (o = fc(e, r)), pe("invalid", e));
                break;
              default:
                o = r;
            }
            (mc(n, o), (l = o));
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var c = l[s];
                s === "style"
                  ? Wm(e, c)
                  : s === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && Bm(e, c))
                    : s === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && Es(e, c)
                        : typeof c == "number" && Es(e, "" + c)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Cs.hasOwnProperty(s)
                          ? c != null && s === "onScroll" && pe("scroll", e)
                          : c != null && Ou(e, s, c, i));
              }
            switch (n) {
              case "input":
                (ui(e), of(e, r, !1));
                break;
              case "textarea":
                (ui(e), af(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + er(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? co(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      co(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = aa);
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
      return (Ge(t), null);
    case 6:
      if (e && t.stateNode != null) pv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = yr(Is.current)), yr(nn.current), xi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Zt] = t),
            (s = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                yi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  yi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Zt] = t),
            (t.stateNode = r));
      }
      return (Ge(t), null);
    case 13:
      if (
        (me(Se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (xe && dt !== null && t.mode & 1 && !(t.flags & 128))
          (Ah(), Ro(), (t.flags |= 98560), (s = !1));
        else if (((s = xi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(A(317));
            s[Zt] = t;
          } else
            (Ro(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ge(t), (s = !1));
        } else (zt !== null && (qc(zt), (zt = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Se.current & 1 ? Le === 0 && (Le = 3) : md())),
          t.updateQueue !== null && (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return (
        Oo(),
        $c(e, t),
        e === null && As(t.stateNode.containerInfo),
        Ge(t),
        null
      );
    case 10:
      return (Xu(t.type._context), Ge(t), null);
    case 17:
      return (at(t.type) && la(), Ge(t), null);
    case 19:
      if ((me(Se), (s = t.memoizedState), s === null)) return (Ge(t), null);
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) ts(s, !1);
        else {
          if (Le !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ha(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ts(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (ue(Se, (Se.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Re() > _o &&
            ((t.flags |= 128), (r = !0), ts(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ha(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ts(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !xe)
            )
              return (Ge(t), null);
          } else
            2 * Re() - s.renderingStartTime > _o &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ts(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Re()),
          (t.sibling = null),
          (n = Se.current),
          ue(Se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        pd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ct & 1073741824 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function Jw(e, t) {
  switch ((Gu(t), t.tag)) {
    case 1:
      return (
        at(t.type) && la(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Oo(),
        me(it),
        me(qe),
        nd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (td(t), null);
    case 13:
      if (
        (me(Se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        Ro();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (me(Se), null);
    case 4:
      return (Oo(), null);
    case 10:
      return (Xu(t.type._context), null);
    case 22:
    case 23:
      return (pd(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var bi = !1,
  Ke = !1,
  eS = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function ao(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ke(e, t, r);
      }
    else n.current = null;
}
function Bc(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var Yf = !1;
function tS(e, t) {
  if (((jc = oa), (e = yh()), Vu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            c = -1,
            u = 0,
            d = 0,
            f = e,
            g = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = i + o),
                f !== s || (r !== 0 && f.nodeType !== 3) || (c = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              ((g = f), (f = p));
            for (;;) {
              if (f === e) break t;
              if (
                (g === n && ++u === o && (l = i),
                g === s && ++d === r && (c = i),
                (p = f.nextSibling) !== null)
              )
                break;
              ((f = g), (g = f.parentNode));
            }
            f = p;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Nc = { focusedElem: e, selectionRange: n }, oa = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (F = e));
    else
      for (; F !== null; ) {
        t = F;
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
                  var m = S.memoizedProps,
                    w = S.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : _t(t.type, m),
                      w,
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (b) {
          ke(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (F = e));
          break;
        }
        F = t.return;
      }
  return ((S = Yf), (Yf = !1), S);
}
function xs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        ((o.destroy = void 0), s !== void 0 && Bc(t, n, s));
      }
      o = o.next;
    } while (o !== r);
  }
}
function $a(e, t) {
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
function Hc(e) {
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
function mv(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), mv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Zt], delete t[Ms], delete t[kc], delete t[Dw], delete t[Fw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function hv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = aa)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wc(e, t, n), e = e.sibling; e !== null; )
      (Wc(e, t, n), (e = e.sibling));
}
function Vc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vc(e, t, n), e = e.sibling; e !== null; )
      (Vc(e, t, n), (e = e.sibling));
}
var $e = null,
  Ft = !1;
function Pn(e, t, n) {
  for (n = n.child; n !== null; ) (vv(e, t, n), (n = n.sibling));
}
function vv(e, t, n) {
  if (tn && typeof tn.onCommitFiberUnmount == "function")
    try {
      tn.onCommitFiberUnmount(Ma, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ke || ao(n, t);
    case 6:
      var r = $e,
        o = Ft;
      (($e = null),
        Pn(e, t, n),
        ($e = r),
        (Ft = o),
        $e !== null &&
          (Ft
            ? ((e = $e),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : $e.removeChild(n.stateNode)));
      break;
    case 18:
      $e !== null &&
        (Ft
          ? ((e = $e),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ml(e.parentNode, n)
              : e.nodeType === 1 && Ml(e, n),
            Ts(e))
          : Ml($e, n.stateNode));
      break;
    case 4:
      ((r = $e),
        (o = Ft),
        ($e = n.stateNode.containerInfo),
        (Ft = !0),
        Pn(e, t, n),
        ($e = r),
        (Ft = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          ((s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Bc(n, t, i),
            (o = o.next));
        } while (o !== r);
      }
      Pn(e, t, n);
      break;
    case 1:
      if (
        !Ke &&
        (ao(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          ke(n, t, l);
        }
      Pn(e, t, n);
      break;
    case 21:
      Pn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ke = (r = Ke) || n.memoizedState !== null), Pn(e, t, n), (Ke = r))
        : Pn(e, t, n);
      break;
    default:
      Pn(e, t, n);
  }
}
function Zf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new eS()),
      t.forEach(function (r) {
        var o = uS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function Rt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (($e = l.stateNode), (Ft = !1));
              break e;
            case 3:
              (($e = l.stateNode.containerInfo), (Ft = !0));
              break e;
            case 4:
              (($e = l.stateNode.containerInfo), (Ft = !0));
              break e;
          }
          l = l.return;
        }
        if ($e === null) throw Error(A(160));
        (vv(s, i, o), ($e = null), (Ft = !1));
        var c = o.alternate;
        (c !== null && (c.return = null), (o.return = null));
      } catch (u) {
        ke(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (gv(t, e), (t = t.sibling));
}
function gv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Rt(t, e), Gt(e), r & 4)) {
        try {
          (xs(3, e, e.return), $a(3, e));
        } catch (m) {
          ke(e, e.return, m);
        }
        try {
          xs(5, e, e.return);
        } catch (m) {
          ke(e, e.return, m);
        }
      }
      break;
    case 1:
      (Rt(t, e), Gt(e), r & 512 && n !== null && ao(n, n.return));
      break;
    case 5:
      if (
        (Rt(t, e),
        Gt(e),
        r & 512 && n !== null && ao(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Es(o, "");
        } catch (m) {
          ke(e, e.return, m);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (l === "input" && s.type === "radio" && s.name != null && zm(o, s),
              hc(l, i));
            var u = hc(l, s);
            for (i = 0; i < c.length; i += 2) {
              var d = c[i],
                f = c[i + 1];
              d === "style"
                ? Wm(o, f)
                : d === "dangerouslySetInnerHTML"
                  ? Bm(o, f)
                  : d === "children"
                    ? Es(o, f)
                    : Ou(o, d, f, u);
            }
            switch (l) {
              case "input":
                uc(o, s);
                break;
              case "textarea":
                Um(o, s);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? co(o, !!s.multiple, p, !1)
                  : g !== !!s.multiple &&
                    (s.defaultValue != null
                      ? co(o, !!s.multiple, s.defaultValue, !0)
                      : co(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[Ms] = s;
          } catch (m) {
            ke(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((Rt(t, e), Gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        ((o = e.stateNode), (s = e.memoizedProps));
        try {
          o.nodeValue = s;
        } catch (m) {
          ke(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (Rt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ts(t.containerInfo);
        } catch (m) {
          ke(e, e.return, m);
        }
      break;
    case 4:
      (Rt(t, e), Gt(e));
      break;
    case 13:
      (Rt(t, e),
        Gt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (dd = Re())),
        r & 4 && Zf(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ke = (u = Ke) || d), Rt(t, e), (Ke = u)) : Rt(t, e),
        Gt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (F = e, d = e.child; d !== null; ) {
            for (f = F = d; F !== null; ) {
              switch (((g = F), (p = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xs(4, g, g.return);
                  break;
                case 1:
                  ao(g, g.return);
                  var S = g.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    ((r = g), (n = g.return));
                    try {
                      ((t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount());
                    } catch (m) {
                      ke(r, n, m);
                    }
                  }
                  break;
                case 5:
                  ao(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    ep(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = g), (F = p)) : ep(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((o = f.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = f.stateNode),
                      (c = f.memoizedProps.style),
                      (i =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = Hm("display", i))));
              } catch (m) {
                ke(e, e.return, m);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (m) {
                ke(e, e.return, m);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (Rt(t, e), Gt(e), r & 4 && Zf(e));
      break;
    case 21:
      break;
    default:
      (Rt(t, e), Gt(e));
  }
}
function Gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Es(o, ""), (r.flags &= -33));
          var s = Xf(e);
          Vc(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Xf(e);
          Wc(e, l, i);
          break;
        default:
          throw Error(A(161));
      }
    } catch (c) {
      ke(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function nS(e, t, n) {
  ((F = e), yv(e));
}
function yv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || bi;
      if (!i) {
        var l = o.alternate,
          c = (l !== null && l.memoizedState !== null) || Ke;
        l = bi;
        var u = Ke;
        if (((bi = i), (Ke = c) && !u))
          for (F = o; F !== null; )
            ((i = F),
              (c = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? tp(o)
                : c !== null
                  ? ((c.return = i), (F = c))
                  : tp(o));
        for (; s !== null; ) ((F = s), yv(s), (s = s.sibling));
        ((F = o), (bi = l), (Ke = u));
      }
      Jf(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (F = s)) : Jf(e);
  }
}
function Jf(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ke || $a(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ke)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : _t(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Df(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Df(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Ts(f);
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
              throw Error(A(163));
          }
        Ke || (t.flags & 512 && Hc(t));
      } catch (g) {
        ke(t, t.return, g);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (F = n));
      break;
    }
    F = t.return;
  }
}
function ep(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (F = n));
      break;
    }
    F = t.return;
  }
}
function tp(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $a(4, t);
          } catch (c) {
            ke(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              ke(t, o, c);
            }
          }
          var s = t.return;
          try {
            Hc(t);
          } catch (c) {
            ke(t, s, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Hc(t);
          } catch (c) {
            ke(t, i, c);
          }
      }
    } catch (c) {
      ke(t, t.return, c);
    }
    if (t === e) {
      F = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (F = l));
      break;
    }
    F = t.return;
  }
}
var rS = Math.ceil,
  ya = bn.ReactCurrentDispatcher,
  cd = bn.ReactCurrentOwner,
  Et = bn.ReactCurrentBatchConfig,
  re = 0,
  ze = null,
  Me = null,
  Be = 0,
  ct = 0,
  lo = sr(0),
  Le = 0,
  zs = null,
  Ar = 0,
  Ba = 0,
  ud = 0,
  ws = null,
  ot = null,
  dd = 0,
  _o = 1 / 0,
  un = null,
  xa = !1,
  Qc = null,
  Yn = null,
  Ci = !1,
  Hn = null,
  wa = 0,
  Ss = 0,
  Gc = null,
  Hi = -1,
  Wi = 0;
function Je() {
  return re & 6 ? Re() : Hi !== -1 ? Hi : (Hi = Re());
}
function Xn(e) {
  return e.mode & 1
    ? re & 2 && Be !== 0
      ? Be & -Be
      : Uw.transition !== null
        ? (Wi === 0 && (Wi = nh()), Wi)
        : ((e = le),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ch(e.type))),
          e)
    : 1;
}
function Bt(e, t, n, r) {
  if (50 < Ss) throw ((Ss = 0), (Gc = null), Error(A(185)));
  (Zs(e, n, r),
    (!(re & 2) || e !== ze) &&
      (e === ze && (!(re & 2) && (Ba |= n), Le === 4 && In(e, Be)),
      lt(e, r),
      n === 1 && re === 0 && !(t.mode & 1) && ((_o = Re() + 500), Fa && ir())));
}
function lt(e, t) {
  var n = e.callbackNode;
  U0(e, t);
  var r = ra(e, e === ze ? Be : 0);
  if (r === 0)
    (n !== null && uf(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && uf(n), t === 1))
      (e.tag === 0 ? zw(np.bind(null, e)) : Th(np.bind(null, e)),
        Iw(function () {
          !(re & 6) && ir();
        }),
        (n = null));
    else {
      switch (rh(r)) {
        case 1:
          n = Du;
          break;
        case 4:
          n = eh;
          break;
        case 16:
          n = na;
          break;
        case 536870912:
          n = th;
          break;
        default:
          n = na;
      }
      n = Nv(n, xv.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function xv(e, t) {
  if (((Hi = -1), (Wi = 0), re & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (ho() && e.callbackNode !== n) return null;
  var r = ra(e, e === ze ? Be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Sa(e, r);
  else {
    t = r;
    var o = re;
    re |= 2;
    var s = Sv();
    (ze !== e || Be !== t) && ((un = null), (_o = Re() + 500), jr(e, t));
    do
      try {
        iS();
        break;
      } catch (l) {
        wv(e, l);
      }
    while (!0);
    (Yu(),
      (ya.current = s),
      (re = o),
      Me !== null ? (t = 0) : ((ze = null), (Be = 0), (t = Le)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = wc(e)), o !== 0 && ((r = o), (t = Kc(e, o)))), t === 1)
    )
      throw ((n = zs), jr(e, 0), In(e, r), lt(e, Re()), n);
    if (t === 6) In(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !oS(o) &&
          ((t = Sa(e, r)),
          t === 2 && ((s = wc(e)), s !== 0 && ((r = s), (t = Kc(e, s)))),
          t === 1))
      )
        throw ((n = zs), jr(e, 0), In(e, r), lt(e, Re()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          mr(e, ot, un);
          break;
        case 3:
          if (
            (In(e, r), (r & 130023424) === r && ((t = dd + 500 - Re()), 10 < t))
          ) {
            if (ra(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (Je(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Tc(mr.bind(null, e, ot, un), t);
            break;
          }
          mr(e, ot, un);
          break;
        case 4:
          if ((In(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - $t(r);
            ((s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s));
          }
          if (
            ((r = o),
            (r = Re() - r),
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
                          : 1960 * rS(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Tc(mr.bind(null, e, ot, un), r);
            break;
          }
          mr(e, ot, un);
          break;
        case 5:
          mr(e, ot, un);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return (lt(e, Re()), e.callbackNode === n ? xv.bind(null, e) : null);
}
function Kc(e, t) {
  var n = ws;
  return (
    e.current.memoizedState.isDehydrated && (jr(e, t).flags |= 256),
    (e = Sa(e, t)),
    e !== 2 && ((t = ot), (ot = n), t !== null && qc(t)),
    e
  );
}
function qc(e) {
  ot === null ? (ot = e) : ot.push.apply(ot, e);
}
function oS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Ht(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function In(e, t) {
  for (
    t &= ~ud,
      t &= ~Ba,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $t(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function np(e) {
  if (re & 6) throw Error(A(327));
  ho();
  var t = ra(e, 0);
  if (!(t & 1)) return (lt(e, Re()), null);
  var n = Sa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wc(e);
    r !== 0 && ((t = r), (n = Kc(e, r)));
  }
  if (n === 1) throw ((n = zs), jr(e, 0), In(e, t), lt(e, Re()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mr(e, ot, un),
    lt(e, Re()),
    null
  );
}
function fd(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    ((re = n), re === 0 && ((_o = Re() + 500), Fa && ir()));
  }
}
function Or(e) {
  Hn !== null && Hn.tag === 0 && !(re & 6) && ho();
  var t = re;
  re |= 1;
  var n = Et.transition,
    r = le;
  try {
    if (((Et.transition = null), (le = 1), e)) return e();
  } finally {
    ((le = r), (Et.transition = n), (re = t), !(re & 6) && ir());
  }
}
function pd() {
  ((ct = lo.current), me(lo));
}
function jr(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), _w(n)), Me !== null))
    for (n = Me.return; n !== null; ) {
      var r = n;
      switch ((Gu(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && la());
          break;
        case 3:
          (Oo(), me(it), me(qe), nd());
          break;
        case 5:
          td(r);
          break;
        case 4:
          Oo();
          break;
        case 13:
          me(Se);
          break;
        case 19:
          me(Se);
          break;
        case 10:
          Xu(r.type._context);
          break;
        case 22:
        case 23:
          pd();
      }
      n = n.return;
    }
  if (
    ((ze = e),
    (Me = e = Zn(e.current, null)),
    (Be = ct = t),
    (Le = 0),
    (zs = null),
    (ud = Ba = Ar = 0),
    (ot = ws = null),
    gr !== null)
  ) {
    for (t = 0; t < gr.length; t++)
      if (((n = gr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          ((s.next = o), (r.next = i));
        }
        n.pending = r;
      }
    gr = null;
  }
  return e;
}
function wv(e, t) {
  do {
    var n = Me;
    try {
      if ((Yu(), (Ui.current = ga), va)) {
        for (var r = be.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        va = !1;
      }
      if (
        ((Rr = 0),
        (Fe = Ie = be = null),
        (ys = !1),
        (Ls = 0),
        (cd.current = null),
        n === null || n.return === null)
      ) {
        ((Le = 1), (zs = t), (Me = null));
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          c = t;
        if (
          ((t = Be),
          (l.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var p = Hf(i);
          if (p !== null) {
            ((p.flags &= -257),
              Wf(p, i, l, s, t),
              p.mode & 1 && Bf(s, u, t),
              (t = p),
              (c = u));
            var S = t.updateQueue;
            if (S === null) {
              var m = new Set();
              (m.add(c), (t.updateQueue = m));
            } else S.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              (Bf(s, u, t), md());
              break e;
            }
            c = Error(A(426));
          }
        } else if (xe && l.mode & 1) {
          var w = Hf(i);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              Wf(w, i, l, s, t),
              Ku(Mo(c, l)));
            break e;
          }
        }
        ((s = c = Mo(c, l)),
          Le !== 4 && (Le = 2),
          ws === null ? (ws = [s]) : ws.push(s),
          (s = i));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var y = rv(s, c, t);
              Lf(s, y);
              break e;
            case 1:
              l = c;
              var h = s.type,
                x = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Yn === null || !Yn.has(x))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var b = ov(s, l, t);
                Lf(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Cv(n);
    } catch (C) {
      ((t = C), Me === n && n !== null && (Me = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Sv() {
  var e = ya.current;
  return ((ya.current = ga), e === null ? ga : e);
}
function md() {
  ((Le === 0 || Le === 3 || Le === 2) && (Le = 4),
    ze === null || (!(Ar & 268435455) && !(Ba & 268435455)) || In(ze, Be));
}
function Sa(e, t) {
  var n = re;
  re |= 2;
  var r = Sv();
  (ze !== e || Be !== t) && ((un = null), jr(e, t));
  do
    try {
      sS();
      break;
    } catch (o) {
      wv(e, o);
    }
  while (!0);
  if ((Yu(), (re = n), (ya.current = r), Me !== null)) throw Error(A(261));
  return ((ze = null), (Be = 0), Le);
}
function sS() {
  for (; Me !== null; ) bv(Me);
}
function iS() {
  for (; Me !== null && !A0(); ) bv(Me);
}
function bv(e) {
  var t = jv(e.alternate, e, ct);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Cv(e) : (Me = t),
    (cd.current = null));
}
function Cv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Jw(n, t)), n !== null)) {
        ((n.flags &= 32767), (Me = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Le = 6), (Me = null));
        return;
      }
    } else if (((n = Zw(n, t, ct)), n !== null)) {
      Me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function mr(e, t, n) {
  var r = le,
    o = Et.transition;
  try {
    ((Et.transition = null), (le = 1), aS(e, t, n, r));
  } finally {
    ((Et.transition = o), (le = r));
  }
  return null;
}
function aS(e, t, n, r) {
  do ho();
  while (Hn !== null);
  if (re & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    ($0(e, s),
    e === ze && ((Me = ze = null), (Be = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ci ||
      ((Ci = !0),
      Nv(na, function () {
        return (ho(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = Et.transition), (Et.transition = null));
    var i = le;
    le = 1;
    var l = re;
    ((re |= 4),
      (cd.current = null),
      tS(e, n),
      gv(n, e),
      Pw(Nc),
      (oa = !!jc),
      (Nc = jc = null),
      (e.current = n),
      nS(n),
      O0(),
      (re = l),
      (le = i),
      (Et.transition = s));
  } else e.current = n;
  if (
    (Ci && ((Ci = !1), (Hn = e), (wa = o)),
    (s = e.pendingLanes),
    s === 0 && (Yn = null),
    I0(n.stateNode),
    lt(e, Re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (xa) throw ((xa = !1), (e = Qc), (Qc = null), e);
  return (
    wa & 1 && e.tag !== 0 && ho(),
    (s = e.pendingLanes),
    s & 1 ? (e === Gc ? Ss++ : ((Ss = 0), (Gc = e))) : (Ss = 0),
    ir(),
    null
  );
}
function ho() {
  if (Hn !== null) {
    var e = rh(wa),
      t = Et.transition,
      n = le;
    try {
      if (((Et.transition = null), (le = 16 > e ? 16 : e), Hn === null))
        var r = !1;
      else {
        if (((e = Hn), (Hn = null), (wa = 0), re & 6)) throw Error(A(331));
        var o = re;
        for (re |= 4, F = e.current; F !== null; ) {
          var s = F,
            i = s.child;
          if (F.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (F = u; F !== null; ) {
                  var d = F;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xs(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), (F = f));
                  else
                    for (; F !== null; ) {
                      d = F;
                      var g = d.sibling,
                        p = d.return;
                      if ((mv(d), d === u)) {
                        F = null;
                        break;
                      }
                      if (g !== null) {
                        ((g.return = p), (F = g));
                        break;
                      }
                      F = p;
                    }
                }
              }
              var S = s.alternate;
              if (S !== null) {
                var m = S.child;
                if (m !== null) {
                  S.child = null;
                  do {
                    var w = m.sibling;
                    ((m.sibling = null), (m = w));
                  } while (m !== null);
                }
              }
              F = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) ((i.return = s), (F = i));
          else
            e: for (; F !== null; ) {
              if (((s = F), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xs(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                ((y.return = s.return), (F = y));
                break e;
              }
              F = s.return;
            }
        }
        var h = e.current;
        for (F = h; F !== null; ) {
          i = F;
          var x = i.child;
          if (i.subtreeFlags & 2064 && x !== null) ((x.return = i), (F = x));
          else
            e: for (i = h; F !== null; ) {
              if (((l = F), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $a(9, l);
                  }
                } catch (C) {
                  ke(l, l.return, C);
                }
              if (l === i) {
                F = null;
                break e;
              }
              var b = l.sibling;
              if (b !== null) {
                ((b.return = l.return), (F = b));
                break e;
              }
              F = l.return;
            }
        }
        if (
          ((re = o), ir(), tn && typeof tn.onPostCommitFiberRoot == "function")
        )
          try {
            tn.onPostCommitFiberRoot(Ma, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((le = n), (Et.transition = t));
    }
  }
  return !1;
}
function rp(e, t, n) {
  ((t = Mo(n, t)),
    (t = rv(e, t, 1)),
    (e = qn(e, t, 1)),
    (t = Je()),
    e !== null && (Zs(e, 1, t), lt(e, t)));
}
function ke(e, t, n) {
  if (e.tag === 3) rp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        rp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Yn === null || !Yn.has(r)))
        ) {
          ((e = Mo(n, e)),
            (e = ov(t, e, 1)),
            (t = qn(t, e, 1)),
            (e = Je()),
            t !== null && (Zs(t, 1, e), lt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function lS(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ze === e &&
      (Be & n) === n &&
      (Le === 4 || (Le === 3 && (Be & 130023424) === Be && 500 > Re() - dd)
        ? jr(e, 0)
        : (ud |= n)),
    lt(e, t));
}
function Ev(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = pi), (pi <<= 1), !(pi & 130023424) && (pi = 4194304))
      : (t = 1));
  var n = Je();
  ((e = yn(e, t)), e !== null && (Zs(e, t, n), lt(e, n)));
}
function cS(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Ev(e, n));
}
function uS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  (r !== null && r.delete(t), Ev(e, n));
}
var jv;
jv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || it.current) st = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((st = !1), Xw(e, t, n));
      st = !!(e.flags & 131072);
    }
  else ((st = !1), xe && t.flags & 1048576 && kh(t, da, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Bi(e, t), (e = t.pendingProps));
      var o = ko(t, qe.current);
      (mo(t, n), (o = od(null, t, r, e, o, n)));
      var s = sd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            at(r) ? ((s = !0), ca(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ju(t),
            (o.updater = Ua),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ic(t, r, e, n),
            (t = Fc(null, t, r, !0, s, n)))
          : ((t.tag = 0), xe && s && Qu(t), Xe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = fS(r)),
          (e = _t(r, e)),
          o)
        ) {
          case 0:
            t = Dc(null, t, r, e, n);
            break e;
          case 1:
            t = Gf(null, t, r, e, n);
            break e;
          case 11:
            t = Vf(null, t, r, e, n);
            break e;
          case 14:
            t = Qf(null, t, r, _t(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        Dc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        Gf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((lv(t), e === null)) throw Error(A(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          Ih(e, t),
          ma(t, r, null, n));
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((o = Mo(Error(A(423)), t)), (t = Kf(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = Mo(Error(A(424)), t)), (t = Kf(e, t, r, n, o)));
            break e;
          } else
            for (
              dt = Kn(t.stateNode.containerInfo.firstChild),
                ft = t,
                xe = !0,
                zt = null,
                n = Mh(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Ro(), r === o)) {
            t = xn(e, t, n);
            break e;
          }
          Xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Lh(t),
        e === null && Oc(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Pc(r, o) ? (i = null) : s !== null && Pc(r, s) && (t.flags |= 32),
        av(e, t),
        Xe(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && Oc(t), null);
    case 13:
      return cv(e, t, n);
    case 4:
      return (
        ed(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ao(t, null, r, n)) : Xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        Vf(e, t, r, o, n)
      );
    case 7:
      return (Xe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Xe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Xe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          ue(fa, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (Ht(s.value, i)) {
            if (s.children === o.children && !it.current) {
              t = xn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                i = s.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (s.tag === 1) {
                      ((c = hn(-1, n & -n)), (c.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c));
                      }
                    }
                    ((s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      Mc(s.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(A(341));
                ((i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  Mc(i, n, t),
                  (i = s.sibling));
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    ((s.return = i.return), (i = s));
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        (Xe(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        mo(t, n),
        (o = jt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = _t(r, t.pendingProps)),
        (o = _t(r.type, o)),
        Qf(e, t, r, o, n)
      );
    case 15:
      return sv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : _t(r, o)),
        Bi(e, t),
        (t.tag = 1),
        at(r) ? ((e = !0), ca(t)) : (e = !1),
        mo(t, n),
        nv(t, r, o),
        Ic(t, r, o, n),
        Fc(null, t, r, !0, e, n)
      );
    case 19:
      return uv(e, t, n);
    case 22:
      return iv(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Nv(e, t) {
  return Jm(e, t);
}
function dS(e, t, n, r) {
  ((this.tag = e),
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
    (this.alternate = null));
}
function Ct(e, t, n, r) {
  return new dS(e, t, n, r);
}
function hd(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function fS(e) {
  if (typeof e == "function") return hd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _u)) return 11;
    if (e === Iu) return 14;
  }
  return 2;
}
function Zn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ct(e.tag, t, e.key, e.mode)),
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
function Vi(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) hd(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Zr:
        return Nr(n.children, o, s, t);
      case Mu:
        ((i = 8), (o |= 8));
        break;
      case sc:
        return (
          (e = Ct(12, n, t, o | 2)),
          (e.elementType = sc),
          (e.lanes = s),
          e
        );
      case ic:
        return ((e = Ct(13, n, t, o)), (e.elementType = ic), (e.lanes = s), e);
      case ac:
        return ((e = Ct(19, n, t, o)), (e.elementType = ac), (e.lanes = s), e);
      case Lm:
        return Ha(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case _m:
              i = 10;
              break e;
            case Im:
              i = 9;
              break e;
            case _u:
              i = 11;
              break e;
            case Iu:
              i = 14;
              break e;
            case On:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ct(i, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function Nr(e, t, n, r) {
  return ((e = Ct(7, e, r, t)), (e.lanes = n), e);
}
function Ha(e, t, n, r) {
  return (
    (e = Ct(22, e, r, t)),
    (e.elementType = Lm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function $l(e, t, n) {
  return ((e = Ct(6, e, null, t)), (e.lanes = n), e);
}
function Bl(e, t, n) {
  return (
    (t = Ct(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pS(e, t, n, r, o) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = bl(0)),
    (this.expirationTimes = bl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function vd(e, t, n, r, o, s, i, l, c) {
  return (
    (e = new pS(e, t, n, l, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ct(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ju(s),
    e
  );
}
function mS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Pv(e) {
  if (!e) return tr;
  e = e._reactInternals;
  e: {
    if (Dr(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (at(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (at(n)) return Ph(e, n, t);
  }
  return t;
}
function Tv(e, t, n, r, o, s, i, l, c) {
  return (
    (e = vd(n, r, !0, e, o, s, i, l, c)),
    (e.context = Pv(null)),
    (n = e.current),
    (r = Je()),
    (o = Xn(n)),
    (s = hn(r, o)),
    (s.callback = t ?? null),
    qn(n, s, o),
    (e.current.lanes = o),
    Zs(e, o, r),
    lt(e, r),
    e
  );
}
function Wa(e, t, n, r) {
  var o = t.current,
    s = Je(),
    i = Xn(o);
  return (
    (n = Pv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = hn(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qn(o, t, i)),
    e !== null && (Bt(e, o, i, s), zi(e, o, i)),
    i
  );
}
function ba(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function op(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function gd(e, t) {
  (op(e, t), (e = e.alternate) && op(e, t));
}
function hS() {
  return null;
}
var kv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function yd(e) {
  this._internalRoot = e;
}
Va.prototype.render = yd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Wa(e, t, null, null);
};
Va.prototype.unmount = yd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Or(function () {
      Wa(null, e, null, null);
    }),
      (t[gn] = null));
  }
};
function Va(e) {
  this._internalRoot = e;
}
Va.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ih();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _n.length && t !== 0 && t < _n[n].priority; n++);
    (_n.splice(n, 0, e), n === 0 && lh(e));
  }
};
function xd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function sp() {}
function vS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = ba(i);
        s.call(u);
      };
    }
    var i = Tv(t, r, e, 0, null, !1, !1, "", sp);
    return (
      (e._reactRootContainer = i),
      (e[gn] = i.current),
      As(e.nodeType === 8 ? e.parentNode : e),
      Or(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = ba(c);
      l.call(u);
    };
  }
  var c = vd(e, 0, !1, null, null, !1, !1, "", sp);
  return (
    (e._reactRootContainer = c),
    (e[gn] = c.current),
    As(e.nodeType === 8 ? e.parentNode : e),
    Or(function () {
      Wa(t, c, n, r);
    }),
    c
  );
}
function Ga(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var c = ba(i);
        l.call(c);
      };
    }
    Wa(t, i, e, o);
  } else i = vS(n, t, e, o, r);
  return ba(i);
}
oh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cs(t.pendingLanes);
        n !== 0 &&
          (Fu(t, n | 1), lt(t, Re()), !(re & 6) && ((_o = Re() + 500), ir()));
      }
      break;
    case 13:
      (Or(function () {
        var r = yn(e, 1);
        if (r !== null) {
          var o = Je();
          Bt(r, e, 1, o);
        }
      }),
        gd(e, 1));
  }
};
zu = function (e) {
  if (e.tag === 13) {
    var t = yn(e, 134217728);
    if (t !== null) {
      var n = Je();
      Bt(t, e, 134217728, n);
    }
    gd(e, 134217728);
  }
};
sh = function (e) {
  if (e.tag === 13) {
    var t = Xn(e),
      n = yn(e, t);
    if (n !== null) {
      var r = Je();
      Bt(n, e, t, r);
    }
    gd(e, t);
  }
};
ih = function () {
  return le;
};
ah = function (e, t) {
  var n = le;
  try {
    return ((le = e), t());
  } finally {
    le = n;
  }
};
gc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((uc(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Da(r);
            if (!o) throw Error(A(90));
            (Fm(r), uc(r, o));
          }
        }
      }
      break;
    case "textarea":
      Um(e, n);
      break;
    case "select":
      ((t = n.value), t != null && co(e, !!n.multiple, t, !1));
  }
};
Gm = fd;
Km = Or;
var gS = { usingClientEntryPoint: !1, Events: [ei, no, Da, Vm, Qm, fd] },
  ns = {
    findFiberByHostInstance: vr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  yS = {
    bundleType: ns.bundleType,
    version: ns.version,
    rendererPackageName: ns.rendererPackageName,
    rendererConfig: ns.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Xm(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: ns.findFiberByHostInstance || hS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ei.isDisabled && Ei.supportsFiber)
    try {
      ((Ma = Ei.inject(yS)), (tn = Ei));
    } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gS;
ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!xd(t)) throw Error(A(200));
  return mS(e, t, null, n);
};
ht.createRoot = function (e, t) {
  if (!xd(e)) throw Error(A(299));
  var n = !1,
    r = "",
    o = kv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = vd(e, 1, !1, null, null, n, !1, r, o)),
    (e[gn] = t.current),
    As(e.nodeType === 8 ? e.parentNode : e),
    new yd(t)
  );
};
ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return ((e = Xm(t)), (e = e === null ? null : e.stateNode), e);
};
ht.flushSync = function (e) {
  return Or(e);
};
ht.hydrate = function (e, t, n) {
  if (!Qa(t)) throw Error(A(200));
  return Ga(null, e, t, !0, n);
};
ht.hydrateRoot = function (e, t, n) {
  if (!xd(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = kv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Tv(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[gn] = t.current),
    As(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Va(t);
};
ht.render = function (e, t, n) {
  if (!Qa(t)) throw Error(A(200));
  return Ga(null, e, t, !1, n);
};
ht.unmountComponentAtNode = function (e) {
  if (!Qa(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (Or(function () {
        Ga(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[gn] = null));
        });
      }),
      !0)
    : !1;
};
ht.unstable_batchedUpdates = fd;
ht.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qa(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Ga(e, t, n, !1, r);
};
ht.version = "18.3.1-next-f1338f8080-20240426";
function Rv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv);
    } catch (e) {
      console.error(e);
    }
}
(Rv(), (Rm.exports = ht));
var Fr = Rm.exports;
const Av = Do(Fr);
var Ov,
  ip = Fr;
((Ov = ip.createRoot), ip.hydrateRoot);
const xS = 1,
  wS = 1e6;
let Hl = 0;
function SS() {
  return ((Hl = (Hl + 1) % Number.MAX_SAFE_INTEGER), Hl.toString());
}
const Wl = new Map(),
  ap = (e) => {
    if (Wl.has(e)) return;
    const t = setTimeout(() => {
      (Wl.delete(e), bs({ type: "REMOVE_TOAST", toastId: e }));
    }, wS);
    Wl.set(e, t);
  },
  bS = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, xS) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? ap(n)
            : e.toasts.forEach((r) => {
                ap(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Qi = [];
let Gi = { toasts: [] };
function bs(e) {
  ((Gi = bS(Gi, e)),
    Qi.forEach((t) => {
      t(Gi);
    }));
}
function CS({ ...e }) {
  const t = SS(),
    n = (o) => bs({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => bs({ type: "DISMISS_TOAST", toastId: t });
  return (
    bs({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Mv() {
  const [e, t] = v.useState(Gi);
  return (
    v.useEffect(
      () => (
        Qi.push(t),
        () => {
          const n = Qi.indexOf(t);
          n > -1 && Qi.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: CS,
      dismiss: (n) => bs({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function J(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function lp(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function _v(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = lp(o, t);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : lp(e[o], null);
        }
      };
  };
}
function Ee(...e) {
  return v.useCallback(_v(...e), e);
}
function $o(e, t = []) {
  let n = [];
  function r(s, i) {
    const l = v.createContext(i),
      c = n.length;
    n = [...n, i];
    const u = (f) => {
      var y;
      const { scope: g, children: p, ...S } = f,
        m = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[c]) || l,
        w = v.useMemo(() => S, Object.values(S));
      return a.jsx(m.Provider, { value: w, children: p });
    };
    u.displayName = s + "Provider";
    function d(f, g) {
      var m;
      const p = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[c]) || l,
        S = v.useContext(p);
      if (S) return S;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const o = () => {
    const s = n.map((i) => v.createContext(i));
    return function (l) {
      const c = (l == null ? void 0 : l[e]) || s;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: c } }), [l, c]);
    };
  };
  return ((o.scopeName = e), [r, ES(o, ...t)]);
}
function ES(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((l, { useScope: c, scopeName: u }) => {
        const f = c(s)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
function Us(e) {
  const t = NS(e),
    n = v.forwardRef((r, o) => {
      const { children: s, ...i } = r,
        l = v.Children.toArray(s),
        c = l.find(TS);
      if (c) {
        const u = c.props.children,
          d = l.map((f) =>
            f === c
              ? v.Children.count(u) > 1
                ? v.Children.only(null)
                : v.isValidElement(u)
                  ? u.props.children
                  : null
              : f,
          );
        return a.jsx(t, {
          ...i,
          ref: o,
          children: v.isValidElement(u) ? v.cloneElement(u, void 0, d) : null,
        });
      }
      return a.jsx(t, { ...i, ref: o, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var jS = Us("Slot");
function NS(e) {
  const t = v.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (v.isValidElement(o)) {
      const i = RS(o),
        l = kS(s, o.props);
      return (
        o.type !== v.Fragment && (l.ref = r ? _v(r, i) : i),
        v.cloneElement(o, l)
      );
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Iv = Symbol("radix.slottable");
function PS(e) {
  const t = ({ children: n }) => a.jsx(a.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = Iv), t);
}
function TS(e) {
  return (
    v.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Iv
  );
}
function kS(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            const c = s(...l);
            return (o(...l), c);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...s })
        : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function RS(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Lv(e) {
  const t = e + "CollectionProvider",
    [n, r] = $o(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (m) => {
      const { scope: w, children: y } = m,
        h = O.useRef(null),
        x = O.useRef(new Map()).current;
      return a.jsx(o, { scope: w, itemMap: x, collectionRef: h, children: y });
    };
  i.displayName = t;
  const l = e + "CollectionSlot",
    c = Us(l),
    u = O.forwardRef((m, w) => {
      const { scope: y, children: h } = m,
        x = s(l, y),
        b = Ee(w, x.collectionRef);
      return a.jsx(c, { ref: b, children: h });
    });
  u.displayName = l;
  const d = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    g = Us(d),
    p = O.forwardRef((m, w) => {
      const { scope: y, children: h, ...x } = m,
        b = O.useRef(null),
        C = Ee(w, b),
        j = s(d, y);
      return (
        O.useEffect(
          () => (
            j.itemMap.set(b, { ref: b, ...x }),
            () => void j.itemMap.delete(b)
          ),
        ),
        a.jsx(g, { [f]: "", ref: C, children: h })
      );
    });
  p.displayName = d;
  function S(m) {
    const w = s(e + "CollectionConsumer", m);
    return O.useCallback(() => {
      const h = w.collectionRef.current;
      if (!h) return [];
      const x = Array.from(h.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (j, E) => x.indexOf(j.ref.current) - x.indexOf(E.ref.current),
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: i, Slot: u, ItemSlot: p }, S, r];
}
var AS = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ie = AS.reduce((e, t) => {
    const n = Us(`Primitive.${t}`),
      r = v.forwardRef((o, s) => {
        const { asChild: i, ...l } = o,
          c = i ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          a.jsx(c, { ...l, ref: s })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function Dv(e, t) {
  e && Fr.flushSync(() => e.dispatchEvent(t));
}
function Wt(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    v.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function OS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Wt(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var MS = "DismissableLayer",
  Yc = "dismissableLayer.update",
  _S = "dismissableLayer.pointerDownOutside",
  IS = "dismissableLayer.focusOutside",
  cp,
  Fv = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ka = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: l,
        ...c
      } = e,
      u = v.useContext(Fv),
      [d, f] = v.useState(null),
      g =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, p] = v.useState({}),
      S = Ee(t, (E) => f(E)),
      m = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = m.indexOf(w),
      h = d ? m.indexOf(d) : -1,
      x = u.layersWithOutsidePointerEventsDisabled.size > 0,
      b = h >= y,
      C = DS((E) => {
        const k = E.target,
          I = [...u.branches].some((R) => R.contains(k));
        !b ||
          I ||
          (o == null || o(E),
          i == null || i(E),
          E.defaultPrevented || l == null || l());
      }, g),
      j = FS((E) => {
        const k = E.target;
        [...u.branches].some((R) => R.contains(k)) ||
          (s == null || s(E),
          i == null || i(E),
          E.defaultPrevented || l == null || l());
      }, g);
    return (
      OS((E) => {
        h === u.layers.size - 1 &&
          (r == null || r(E),
          !E.defaultPrevented && l && (E.preventDefault(), l()));
      }, g),
      v.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((cp = g.body.style.pointerEvents),
                (g.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            up(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = cp);
            }
          );
      }, [d, g, n, u]),
      v.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            up());
        },
        [d, u],
      ),
      v.useEffect(() => {
        const E = () => p({});
        return (
          document.addEventListener(Yc, E),
          () => document.removeEventListener(Yc, E)
        );
      }, []),
      a.jsx(ie.div, {
        ...c,
        ref: S,
        style: {
          pointerEvents: x ? (b ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: J(e.onFocusCapture, j.onFocusCapture),
        onBlurCapture: J(e.onBlurCapture, j.onBlurCapture),
        onPointerDownCapture: J(e.onPointerDownCapture, C.onPointerDownCapture),
      })
    );
  });
Ka.displayName = MS;
var LS = "DismissableLayerBranch",
  zv = v.forwardRef((e, t) => {
    const n = v.useContext(Fv),
      r = v.useRef(null),
      o = Ee(t, r);
    return (
      v.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      a.jsx(ie.div, { ...e, ref: o })
    );
  });
zv.displayName = LS;
function DS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Wt(e),
    r = v.useRef(!1),
    o = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const s = (l) => {
          if (l.target && !r.current) {
            let c = function () {
              Uv(_S, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = c),
                t.addEventListener("click", o.current, { once: !0 }))
              : c();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        (window.clearTimeout(i),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function FS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Wt(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          Uv(IS, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function up() {
  const e = new CustomEvent(Yc);
  document.dispatchEvent(e);
}
function Uv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? Dv(o, s) : o.dispatchEvent(s));
}
var zS = Ka,
  US = zv,
  Ue = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  $S = "Portal",
  wd = v.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, s] = v.useState(!1);
    Ue(() => s(!0), []);
    const i =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return i ? Av.createPortal(a.jsx(ie.div, { ...r, ref: t }), i) : null;
  });
wd.displayName = $S;
function BS(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var qa = (e) => {
  const { present: t, children: n } = e,
    r = HS(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    s = Ee(r.ref, WS(o));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(o, { ref: s })
    : null;
};
qa.displayName = "Presence";
function HS(e) {
  const [t, n] = v.useState(),
    r = v.useRef(null),
    o = v.useRef(e),
    s = v.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [l, c] = BS(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const u = ji(r.current);
      s.current = l === "mounted" ? u : "none";
    }, [l]),
    Ue(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const g = s.current,
          p = ji(u);
        (e
          ? c("MOUNT")
          : p === "none" || (u == null ? void 0 : u.display) === "none"
            ? c("UNMOUNT")
            : c(d && g !== p ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, c]),
    Ue(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          f = (p) => {
            const m = ji(r.current).includes(CSS.escape(p.animationName));
            if (p.target === t && m && (c("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                })));
            }
          },
          g = (p) => {
            p.target === t && (s.current = ji(r.current));
          };
        return (
          t.addEventListener("animationstart", g),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            (d.clearTimeout(u),
              t.removeEventListener("animationstart", g),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f));
          }
        );
      } else c("ANIMATION_END");
    }, [t, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: v.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function ji(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function WS(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var VS = ku[" useInsertionEffect ".trim().toString()] || Ue;
function Ca({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, s, i] = QS({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    c = l ? e : o;
  {
    const d = v.useRef(e !== void 0);
    v.useEffect(() => {
      const f = d.current;
      (f !== l &&
        console.warn(
          `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (d.current = l));
    }, [l, r]);
  }
  const u = v.useCallback(
    (d) => {
      var f;
      if (l) {
        const g = GS(d) ? d(e) : d;
        g !== e && ((f = i.current) == null || f.call(i, g));
      } else s(d);
    },
    [l, e, s, i],
  );
  return [c, u];
}
function QS({ defaultProp: e, onChange: t }) {
  const [n, r] = v.useState(e),
    o = v.useRef(n),
    s = v.useRef(t);
  return (
    VS(() => {
      s.current = t;
    }, [t]),
    v.useEffect(() => {
      var i;
      o.current !== n &&
        ((i = s.current) == null || i.call(s, n), (o.current = n));
    }, [n, o]),
    [n, r, s]
  );
}
function GS(e) {
  return typeof e == "function";
}
var $v = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  KS = "VisuallyHidden",
  Ya = v.forwardRef((e, t) =>
    a.jsx(ie.span, { ...e, ref: t, style: { ...$v, ...e.style } }),
  );
Ya.displayName = KS;
var qS = Ya,
  Sd = "ToastProvider",
  [bd, YS, XS] = Lv("Toast"),
  [Bv] = $o("Toast", [XS]),
  [ZS, Xa] = Bv(Sd),
  Hv = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: s = 50,
        children: i,
      } = e,
      [l, c] = v.useState(null),
      [u, d] = v.useState(0),
      f = v.useRef(!1),
      g = v.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Sd}\`. Expected non-empty \`string\`.`,
        ),
      a.jsx(bd.Provider, {
        scope: t,
        children: a.jsx(ZS, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: s,
          toastCount: u,
          viewport: l,
          onViewportChange: c,
          onToastAdd: v.useCallback(() => d((p) => p + 1), []),
          onToastRemove: v.useCallback(() => d((p) => p - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: g,
          children: i,
        }),
      })
    );
  };
Hv.displayName = Sd;
var Wv = "ToastViewport",
  JS = ["F8"],
  Xc = "toast.viewportPause",
  Zc = "toast.viewportResume",
  Vv = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = JS,
        label: o = "Notifications ({hotkey})",
        ...s
      } = e,
      i = Xa(Wv, n),
      l = YS(n),
      c = v.useRef(null),
      u = v.useRef(null),
      d = v.useRef(null),
      f = v.useRef(null),
      g = Ee(t, f, i.onViewportChange),
      p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      S = i.toastCount > 0;
    (v.useEffect(() => {
      const w = (y) => {
        var x;
        r.length !== 0 &&
          r.every((b) => y[b] || y.code === b) &&
          ((x = f.current) == null || x.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      v.useEffect(() => {
        const w = c.current,
          y = f.current;
        if (S && w && y) {
          const h = () => {
              if (!i.isClosePausedRef.current) {
                const j = new CustomEvent(Xc);
                (y.dispatchEvent(j), (i.isClosePausedRef.current = !0));
              }
            },
            x = () => {
              if (i.isClosePausedRef.current) {
                const j = new CustomEvent(Zc);
                (y.dispatchEvent(j), (i.isClosePausedRef.current = !1));
              }
            },
            b = (j) => {
              !w.contains(j.relatedTarget) && x();
            },
            C = () => {
              w.contains(document.activeElement) || x();
            };
          return (
            w.addEventListener("focusin", h),
            w.addEventListener("focusout", b),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", h),
            window.addEventListener("focus", x),
            () => {
              (w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", b),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", x));
            }
          );
        }
      }, [S, i.isClosePausedRef]));
    const m = v.useCallback(
      ({ tabbingDirection: w }) => {
        const h = l().map((x) => {
          const b = x.ref.current,
            C = [b, ...f1(b)];
          return w === "forwards" ? C : C.reverse();
        });
        return (w === "forwards" ? h.reverse() : h).flat();
      },
      [l],
    );
    return (
      v.useEffect(() => {
        const w = f.current;
        if (w) {
          const y = (h) => {
            var C, j, E;
            const x = h.altKey || h.ctrlKey || h.metaKey;
            if (h.key === "Tab" && !x) {
              const k = document.activeElement,
                I = h.shiftKey;
              if (h.target === w && I) {
                (C = u.current) == null || C.focus();
                return;
              }
              const _ = m({ tabbingDirection: I ? "backwards" : "forwards" }),
                H = _.findIndex((M) => M === k);
              Vl(_.slice(H + 1))
                ? h.preventDefault()
                : I
                  ? (j = u.current) == null || j.focus()
                  : (E = d.current) == null || E.focus();
            }
          };
          return (
            w.addEventListener("keydown", y),
            () => w.removeEventListener("keydown", y)
          );
        }
      }, [l, m]),
      a.jsxs(US, {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", p),
        tabIndex: -1,
        style: { pointerEvents: S ? void 0 : "none" },
        children: [
          S &&
            a.jsx(Jc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = m({ tabbingDirection: "forwards" });
                Vl(w);
              },
            }),
          a.jsx(bd.Slot, {
            scope: n,
            children: a.jsx(ie.ol, { tabIndex: -1, ...s, ref: g }),
          }),
          S &&
            a.jsx(Jc, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = m({ tabbingDirection: "backwards" });
                Vl(w);
              },
            }),
        ],
      })
    );
  });
Vv.displayName = Wv;
var Qv = "ToastFocusProxy",
  Jc = v.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      s = Xa(Qv, n);
    return a.jsx(Ya, {
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (i) => {
        var u;
        const l = i.relatedTarget;
        !((u = s.viewport) != null && u.contains(l)) && r();
      },
    });
  });
Jc.displayName = Qv;
var ni = "Toast",
  e1 = "toast.swipeStart",
  t1 = "toast.swipeMove",
  n1 = "toast.swipeCancel",
  r1 = "toast.swipeEnd",
  Gv = v.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
      [l, c] = Ca({ prop: r, defaultProp: o ?? !0, onChange: s, caller: ni });
    return a.jsx(qa, {
      present: n || l,
      children: a.jsx(i1, {
        open: l,
        ...i,
        ref: t,
        onClose: () => c(!1),
        onPause: Wt(e.onPause),
        onResume: Wt(e.onResume),
        onSwipeStart: J(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: J(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`,
            ));
        }),
        onSwipeCancel: J(e.onSwipeCancel, (u) => {
          (u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y"));
        }),
        onSwipeEnd: J(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          (u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`,
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`,
            ),
            c(!1));
        }),
      }),
    });
  });
Gv.displayName = ni;
var [o1, s1] = Bv(ni, { onClose() {} }),
  i1 = v.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: s,
        onClose: i,
        onEscapeKeyDown: l,
        onPause: c,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: g,
        onSwipeEnd: p,
        ...S
      } = e,
      m = Xa(ni, n),
      [w, y] = v.useState(null),
      h = Ee(t, (M) => y(M)),
      x = v.useRef(null),
      b = v.useRef(null),
      C = o || m.duration,
      j = v.useRef(0),
      E = v.useRef(C),
      k = v.useRef(0),
      { onToastAdd: I, onToastRemove: R } = m,
      z = Wt(() => {
        var V;
        ((w == null ? void 0 : w.contains(document.activeElement)) &&
          ((V = m.viewport) == null || V.focus()),
          i());
      }),
      _ = v.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(k.current),
            (j.current = new Date().getTime()),
            (k.current = window.setTimeout(z, M)));
        },
        [z],
      );
    (v.useEffect(() => {
      const M = m.viewport;
      if (M) {
        const V = () => {
            (_(E.current), u == null || u());
          },
          U = () => {
            const B = new Date().getTime() - j.current;
            ((E.current = E.current - B),
              window.clearTimeout(k.current),
              c == null || c());
          };
        return (
          M.addEventListener(Xc, U),
          M.addEventListener(Zc, V),
          () => {
            (M.removeEventListener(Xc, U), M.removeEventListener(Zc, V));
          }
        );
      }
    }, [m.viewport, C, c, u, _]),
      v.useEffect(() => {
        s && !m.isClosePausedRef.current && _(C);
      }, [s, C, m.isClosePausedRef, _]),
      v.useEffect(() => (I(), () => R()), [I, R]));
    const H = v.useMemo(() => (w ? eg(w) : null), [w]);
    return m.viewport
      ? a.jsxs(a.Fragment, {
          children: [
            H &&
              a.jsx(a1, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                children: H,
              }),
            a.jsx(o1, {
              scope: n,
              onClose: z,
              children: Fr.createPortal(
                a.jsx(bd.ItemSlot, {
                  scope: n,
                  children: a.jsx(zS, {
                    asChild: !0,
                    onEscapeKeyDown: J(l, () => {
                      (m.isFocusedToastEscapeKeyDownRef.current || z(),
                        (m.isFocusedToastEscapeKeyDownRef.current = !1));
                    }),
                    children: a.jsx(ie.li, {
                      tabIndex: 0,
                      "data-state": s ? "open" : "closed",
                      "data-swipe-direction": m.swipeDirection,
                      ...S,
                      ref: h,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: J(e.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (l == null || l(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((m.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: J(e.onPointerDown, (M) => {
                        M.button === 0 &&
                          (x.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: J(e.onPointerMove, (M) => {
                        if (!x.current) return;
                        const V = M.clientX - x.current.x,
                          U = M.clientY - x.current.y,
                          B = !!b.current,
                          N = ["left", "right"].includes(m.swipeDirection),
                          T = ["left", "up"].includes(m.swipeDirection)
                            ? Math.min
                            : Math.max,
                          L = N ? T(0, V) : 0,
                          W = N ? 0 : T(0, U),
                          $ = M.pointerType === "touch" ? 10 : 2,
                          X = { x: L, y: W },
                          G = { originalEvent: M, delta: X };
                        B
                          ? ((b.current = X), Ni(t1, f, G, { discrete: !1 }))
                          : dp(X, m.swipeDirection, $)
                            ? ((b.current = X),
                              Ni(e1, d, G, { discrete: !1 }),
                              M.target.setPointerCapture(M.pointerId))
                            : (Math.abs(V) > $ || Math.abs(U) > $) &&
                              (x.current = null);
                      }),
                      onPointerUp: J(e.onPointerUp, (M) => {
                        const V = b.current,
                          U = M.target;
                        if (
                          (U.hasPointerCapture(M.pointerId) &&
                            U.releasePointerCapture(M.pointerId),
                          (b.current = null),
                          (x.current = null),
                          V)
                        ) {
                          const B = M.currentTarget,
                            N = { originalEvent: M, delta: V };
                          (dp(V, m.swipeDirection, m.swipeThreshold)
                            ? Ni(r1, p, N, { discrete: !0 })
                            : Ni(n1, g, N, { discrete: !0 }),
                            B.addEventListener(
                              "click",
                              (T) => T.preventDefault(),
                              { once: !0 },
                            ));
                        }
                      }),
                    }),
                  }),
                }),
                m.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  a1 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Xa(ni, t),
      [s, i] = v.useState(!1),
      [l, c] = v.useState(!1);
    return (
      u1(() => i(!0)),
      v.useEffect(() => {
        const u = window.setTimeout(() => c(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : a.jsx(wd, {
            asChild: !0,
            children: a.jsx(Ya, {
              ...r,
              children:
                s && a.jsxs(a.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  l1 = "ToastTitle",
  Kv = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return a.jsx(ie.div, { ...r, ref: t });
  });
Kv.displayName = l1;
var c1 = "ToastDescription",
  qv = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return a.jsx(ie.div, { ...r, ref: t });
  });
qv.displayName = c1;
var Yv = "ToastAction",
  Xv = v.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? a.jsx(Jv, {
          altText: n,
          asChild: !0,
          children: a.jsx(Cd, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Yv}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Xv.displayName = Yv;
var Zv = "ToastClose",
  Cd = v.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = s1(Zv, n);
    return a.jsx(Jv, {
      asChild: !0,
      children: a.jsx(ie.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: J(e.onClick, o.onClose),
      }),
    });
  });
Cd.displayName = Zv;
var Jv = v.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return a.jsx(ie.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function eg(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        d1(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          s = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (s) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...eg(r));
      }
    }),
    t
  );
}
function Ni(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? Dv(o, s) : o.dispatchEvent(s));
}
var dp = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function u1(e = () => {}) {
  const t = Wt(e);
  Ue(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
      }
    );
  }, [t]);
}
function d1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function f1(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Vl(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var p1 = Hv,
  tg = Vv,
  ng = Gv,
  rg = Kv,
  og = qv,
  sg = Xv,
  ig = Cd;
function ag(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = ag(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function lg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = ag(e)) && (r && (r += " "), (r += t));
  return r;
}
const fp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  pp = lg,
  cg = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return pp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          f = s == null ? void 0 : s[u];
        if (d === null) return null;
        const g = fp(d) || fp(f);
        return o[u][g];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [f, g] = d;
          return (g === void 0 || (u[f] = g), u);
        }, {}),
      c =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: f, className: g, ...p } = d;
              return Object.entries(p).every((S) => {
                let [m, w] = S;
                return Array.isArray(w)
                  ? w.includes({ ...s, ...l }[m])
                  : { ...s, ...l }[m] === w;
              })
                ? [...u, f, g]
                : u;
            }, []);
    return pp(
      e,
      i,
      c,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const m1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ug = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var h1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v1 = v.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: i,
      ...l
    },
    c,
  ) =>
    v.createElement(
      "svg",
      {
        ref: c,
        ...h1,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: ug("lucide", o),
        ...l,
      },
      [
        ...i.map(([u, d]) => v.createElement(u, d)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gt = (e, t) => {
  const n = v.forwardRef(({ className: r, ...o }, s) =>
    v.createElement(v1, {
      ref: s,
      iconNode: t,
      className: ug(`lucide-${m1(e)}`, r),
      ...o,
    }),
  );
  return ((n.displayName = `${e}`), n);
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g1 = gt("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y1 = gt("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const x1 = gt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ed = gt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = gt("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yr = gt("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dg = gt("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jd = gt("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S1 = gt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ki = gt("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fg = gt("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b1 = gt("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pg = gt("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Nd = "-",
  C1 = (e) => {
    const t = j1(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const l = i.split(Nd);
        return (l[0] === "" && l.length !== 1 && l.shift(), mg(l, t) || E1(i));
      },
      getConflictingClassGroupIds: (i, l) => {
        const c = n[i] || [];
        return l && r[i] ? [...c, ...r[i]] : c;
      },
    };
  },
  mg = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? mg(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(Nd);
    return (i = t.validators.find(({ validator: l }) => l(s))) == null
      ? void 0
      : i.classGroupId;
  },
  mp = /^\[(.+)\]$/,
  E1 = (e) => {
    if (mp.test(e)) {
      const t = mp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  j1 = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      P1(Object.entries(e.classGroups), n).forEach(([s, i]) => {
        eu(i, r, s, t);
      }),
      r
    );
  },
  eu = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const s = o === "" ? t : hp(t, o);
        s.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (N1(o)) {
          eu(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([s, i]) => {
        eu(i, hp(t, s), n, r);
      });
    });
  },
  hp = (e, t) => {
    let n = e;
    return (
      t.split(Nd).forEach((r) => {
        (n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r)));
      }),
      n
    );
  },
  N1 = (e) => e.isThemeGetter,
  P1 = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((s) =>
            typeof s == "string"
              ? t + s
              : typeof s == "object"
                ? Object.fromEntries(
                    Object.entries(s).map(([i, l]) => [t + i, l]),
                  )
                : s,
          );
          return [n, o];
        })
      : e,
  T1 = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (s, i) => {
      (n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map())));
    };
    return {
      get(s) {
        let i = n.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return (o(s, i), i);
      },
      set(s, i) {
        n.has(s) ? n.set(s, i) : o(s, i);
      },
    };
  },
  hg = "!",
  k1 = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      s = t.length,
      i = (l) => {
        const c = [];
        let u = 0,
          d = 0,
          f;
        for (let w = 0; w < l.length; w++) {
          let y = l[w];
          if (u === 0) {
            if (y === o && (r || l.slice(w, w + s) === t)) {
              (c.push(l.slice(d, w)), (d = w + s));
              continue;
            }
            if (y === "/") {
              f = w;
              continue;
            }
          }
          y === "[" ? u++ : y === "]" && u--;
        }
        const g = c.length === 0 ? l : l.substring(d),
          p = g.startsWith(hg),
          S = p ? g.substring(1) : g,
          m = f && f > d ? f - d : void 0;
        return {
          modifiers: c,
          hasImportantModifier: p,
          baseClassName: S,
          maybePostfixModifierPosition: m,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: i }) : i;
  },
  R1 = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  A1 = (e) => ({ cache: T1(e.cacheSize), parseClassName: k1(e), ...C1(e) }),
  O1 = /\s+/,
  M1 = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      s = [],
      i = e.trim().split(O1);
    let l = "";
    for (let c = i.length - 1; c >= 0; c -= 1) {
      const u = i[c],
        {
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: g,
          maybePostfixModifierPosition: p,
        } = n(u);
      let S = !!p,
        m = r(S ? g.substring(0, p) : g);
      if (!m) {
        if (!S) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((m = r(g)), !m)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        S = !1;
      }
      const w = R1(d).join(":"),
        y = f ? w + hg : w,
        h = y + m;
      if (s.includes(h)) continue;
      s.push(h);
      const x = o(m, S);
      for (let b = 0; b < x.length; ++b) {
        const C = x[b];
        s.push(y + C);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function _1() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = vg(t)) && (r && (r += " "), (r += n));
  return r;
}
const vg = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = vg(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function I1(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(c) {
    const u = t.reduce((d, f) => f(d), e());
    return ((n = A1(u)), (r = n.cache.get), (o = n.cache.set), (s = l), l(c));
  }
  function l(c) {
    const u = r(c);
    if (u) return u;
    const d = M1(c, n);
    return (o(c, d), d);
  }
  return function () {
    return s(_1.apply(null, arguments));
  };
}
const fe = (e) => {
    const t = (n) => n[e] || [];
    return ((t.isThemeGetter = !0), t);
  },
  gg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  L1 = /^\d+\/\d+$/,
  D1 = new Set(["px", "full", "screen"]),
  F1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  z1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  U1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  $1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  B1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  an = (e) => vo(e) || D1.has(e) || L1.test(e),
  Tn = (e) => Bo(e, "length", Y1),
  vo = (e) => !!e && !Number.isNaN(Number(e)),
  Ql = (e) => Bo(e, "number", vo),
  rs = (e) => !!e && Number.isInteger(Number(e)),
  H1 = (e) => e.endsWith("%") && vo(e.slice(0, -1)),
  Z = (e) => gg.test(e),
  kn = (e) => F1.test(e),
  W1 = new Set(["length", "size", "percentage"]),
  V1 = (e) => Bo(e, W1, yg),
  Q1 = (e) => Bo(e, "position", yg),
  G1 = new Set(["image", "url"]),
  K1 = (e) => Bo(e, G1, Z1),
  q1 = (e) => Bo(e, "", X1),
  os = () => !0,
  Bo = (e, t, n) => {
    const r = gg.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Y1 = (e) => z1.test(e) && !U1.test(e),
  yg = () => !1,
  X1 = (e) => $1.test(e),
  Z1 = (e) => B1.test(e),
  J1 = () => {
    const e = fe("colors"),
      t = fe("spacing"),
      n = fe("blur"),
      r = fe("brightness"),
      o = fe("borderColor"),
      s = fe("borderRadius"),
      i = fe("borderSpacing"),
      l = fe("borderWidth"),
      c = fe("contrast"),
      u = fe("grayscale"),
      d = fe("hueRotate"),
      f = fe("invert"),
      g = fe("gap"),
      p = fe("gradientColorStops"),
      S = fe("gradientColorStopPositions"),
      m = fe("inset"),
      w = fe("margin"),
      y = fe("opacity"),
      h = fe("padding"),
      x = fe("saturate"),
      b = fe("scale"),
      C = fe("sepia"),
      j = fe("skew"),
      E = fe("space"),
      k = fe("translate"),
      I = () => ["auto", "contain", "none"],
      R = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", Z, t],
      _ = () => [Z, t],
      H = () => ["", an, Tn],
      M = () => ["auto", vo, Z],
      V = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      U = () => ["solid", "dashed", "dotted", "double", "none"],
      B = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      N = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      T = () => ["", "0", Z],
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      W = () => [vo, Z];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [os],
        spacing: [an, Tn],
        blur: ["none", "", kn, Z],
        brightness: W(),
        borderColor: [e],
        borderRadius: ["none", "", "full", kn, Z],
        borderSpacing: _(),
        borderWidth: H(),
        contrast: W(),
        grayscale: T(),
        hueRotate: W(),
        invert: T(),
        gap: _(),
        gradientColorStops: [e],
        gradientColorStopPositions: [H1, Tn],
        inset: z(),
        margin: z(),
        opacity: W(),
        padding: _(),
        saturate: W(),
        scale: W(),
        sepia: T(),
        skew: W(),
        space: _(),
        translate: _(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Z] }],
        container: ["container"],
        columns: [{ columns: [kn] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...V(), Z] }],
        overflow: [{ overflow: R() }],
        "overflow-x": [{ "overflow-x": R() }],
        "overflow-y": [{ "overflow-y": R() }],
        overscroll: [{ overscroll: I() }],
        "overscroll-x": [{ "overscroll-x": I() }],
        "overscroll-y": [{ "overscroll-y": I() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [m] }],
        "inset-x": [{ "inset-x": [m] }],
        "inset-y": [{ "inset-y": [m] }],
        start: [{ start: [m] }],
        end: [{ end: [m] }],
        top: [{ top: [m] }],
        right: [{ right: [m] }],
        bottom: [{ bottom: [m] }],
        left: [{ left: [m] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", rs, Z] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Z] }],
        grow: [{ grow: T() }],
        shrink: [{ shrink: T() }],
        order: [{ order: ["first", "last", "none", rs, Z] }],
        "grid-cols": [{ "grid-cols": [os] }],
        "col-start-end": [{ col: ["auto", { span: ["full", rs, Z] }, Z] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [os] }],
        "row-start-end": [{ row: ["auto", { span: [rs, Z] }, Z] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Z] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Z] }],
        gap: [{ gap: [g] }],
        "gap-x": [{ "gap-x": [g] }],
        "gap-y": [{ "gap-y": [g] }],
        "justify-content": [{ justify: ["normal", ...N()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...N(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...N(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [E] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [E] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, t] }],
        "min-w": [{ "min-w": [Z, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Z,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [kn] },
              kn,
            ],
          },
        ],
        h: [{ h: [Z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Z, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", kn, Tn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ql,
            ],
          },
        ],
        "font-family": [{ font: [os] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Z,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", vo, Ql] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              an,
              Z,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Z] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Z] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [y] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [y] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", an, Tn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", an, Z] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: _() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Z,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Z] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [y] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...V(), Q1] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", V1] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              K1,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [S] }],
        "gradient-via-pos": [{ via: [S] }],
        "gradient-to-pos": [{ to: [S] }],
        "gradient-from": [{ from: [p] }],
        "gradient-via": [{ via: [p] }],
        "gradient-to": [{ to: [p] }],
        rounded: [{ rounded: [s] }],
        "rounded-s": [{ "rounded-s": [s] }],
        "rounded-e": [{ "rounded-e": [s] }],
        "rounded-t": [{ "rounded-t": [s] }],
        "rounded-r": [{ "rounded-r": [s] }],
        "rounded-b": [{ "rounded-b": [s] }],
        "rounded-l": [{ "rounded-l": [s] }],
        "rounded-ss": [{ "rounded-ss": [s] }],
        "rounded-se": [{ "rounded-se": [s] }],
        "rounded-ee": [{ "rounded-ee": [s] }],
        "rounded-es": [{ "rounded-es": [s] }],
        "rounded-tl": [{ "rounded-tl": [s] }],
        "rounded-tr": [{ "rounded-tr": [s] }],
        "rounded-br": [{ "rounded-br": [s] }],
        "rounded-bl": [{ "rounded-bl": [s] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [y] }],
        "border-style": [{ border: [...U(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [y] }],
        "divide-style": [{ divide: U() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...U()] }],
        "outline-offset": [{ "outline-offset": [an, Z] }],
        "outline-w": [{ outline: [an, Tn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: H() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [y] }],
        "ring-offset-w": [{ "ring-offset": [an, Tn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", kn, q1] }],
        "shadow-color": [{ shadow: [os] }],
        opacity: [{ opacity: [y] }],
        "mix-blend": [{ "mix-blend": [...B(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": B() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [c] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", kn, Z] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [y] }],
        "backdrop-saturate": [{ "backdrop-saturate": [x] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Z,
            ],
          },
        ],
        duration: [{ duration: W() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Z] }],
        delay: [{ delay: W() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Z] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [b] }],
        "scale-x": [{ "scale-x": [b] }],
        "scale-y": [{ "scale-y": [b] }],
        rotate: [{ rotate: [rs, Z] }],
        "translate-x": [{ "translate-x": [k] }],
        "translate-y": [{ "translate-y": [k] }],
        "skew-x": [{ "skew-x": [j] }],
        "skew-y": [{ "skew-y": [j] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Z,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Z,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": _() }],
        "scroll-mx": [{ "scroll-mx": _() }],
        "scroll-my": [{ "scroll-my": _() }],
        "scroll-ms": [{ "scroll-ms": _() }],
        "scroll-me": [{ "scroll-me": _() }],
        "scroll-mt": [{ "scroll-mt": _() }],
        "scroll-mr": [{ "scroll-mr": _() }],
        "scroll-mb": [{ "scroll-mb": _() }],
        "scroll-ml": [{ "scroll-ml": _() }],
        "scroll-p": [{ "scroll-p": _() }],
        "scroll-px": [{ "scroll-px": _() }],
        "scroll-py": [{ "scroll-py": _() }],
        "scroll-ps": [{ "scroll-ps": _() }],
        "scroll-pe": [{ "scroll-pe": _() }],
        "scroll-pt": [{ "scroll-pt": _() }],
        "scroll-pr": [{ "scroll-pr": _() }],
        "scroll-pb": [{ "scroll-pb": _() }],
        "scroll-pl": [{ "scroll-pl": _() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Z] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [an, Tn, Ql] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  eb = I1(J1);
function we(...e) {
  return eb(lg(e));
}
const tb = p1,
  xg = v.forwardRef(({ className: e, ...t }, n) =>
    a.jsx(tg, {
      ref: n,
      className: we(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
xg.displayName = tg.displayName;
const nb = cg(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  wg = v.forwardRef(({ className: e, variant: t, ...n }, r) =>
    a.jsx(ng, { ref: r, className: we(nb({ variant: t }), e), ...n }),
  );
wg.displayName = ng.displayName;
const rb = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(sg, {
    ref: n,
    className: we(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e,
    ),
    ...t,
  }),
);
rb.displayName = sg.displayName;
const Sg = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(ig, {
    ref: n,
    className: we(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: a.jsx(pg, { className: "h-4 w-4" }),
  }),
);
Sg.displayName = ig.displayName;
const bg = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(rg, { ref: n, className: we("text-sm font-semibold", e), ...t }),
);
bg.displayName = rg.displayName;
const Cg = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(og, { ref: n, className: we("text-sm opacity-90", e), ...t }),
);
Cg.displayName = og.displayName;
function ob() {
  const { toasts: e } = Mv();
  return a.jsxs(tb, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
        return a.jsxs(
          wg,
          {
            ...s,
            children: [
              a.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && a.jsx(bg, { children: n }),
                  r && a.jsx(Cg, { children: r }),
                ],
              }),
              o,
              a.jsx(Sg, {}),
            ],
          },
          t,
        );
      }),
      a.jsx(xg, {}),
    ],
  });
}
var vp = ["light", "dark"],
  sb = "(prefers-color-scheme: dark)",
  ib = v.createContext(void 0),
  ab = { setTheme: (e) => {}, themes: [] },
  lb = () => {
    var e;
    return (e = v.useContext(ib)) != null ? e : ab;
  };
v.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: s,
    value: i,
    attrs: l,
    nonce: c,
  }) => {
    let u = s === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l.map((S) => `'${S}'`).join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? vp.includes(s) && s
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      g = (S, m = !1, w = !0) => {
        let y = i ? i[S] : S,
          h = m ? S + "|| ''" : `'${y}'`,
          x = "";
        return (
          o &&
            w &&
            !m &&
            vp.includes(S) &&
            (x += `d.style.colorScheme = '${S}';`),
          n === "class"
            ? m || y
              ? (x += `c.add(${h})`)
              : (x += "null")
            : y && (x += `d[s](n,${h})`),
          x
        );
      },
      p = e
        ? `!function(){${d}${g(e)}}()`
        : r
          ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${sb}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${g(i ? "x[e]" : "e", !0)}}${u ? "" : "else{" + g(s, !1, !1) + "}"}${f}}catch(e){}}()`
          : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${g(i ? "x[e]" : "e", !0)}}else{${g(s, !1, !1)};}${f}}catch(t){}}();`;
    return v.createElement("script", {
      nonce: c,
      dangerouslySetInnerHTML: { __html: p },
    });
  },
);
var cb = (e) => {
    switch (e) {
      case "success":
        return fb;
      case "info":
        return mb;
      case "warning":
        return pb;
      case "error":
        return hb;
      default:
        return null;
    }
  },
  ub = Array(12).fill(0),
  db = ({ visible: e, className: t }) =>
    O.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      O.createElement(
        "div",
        { className: "sonner-spinner" },
        ub.map((n, r) =>
          O.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  fb = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  pb = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  mb = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  hb = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  vb = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  gb = () => {
    let [e, t] = O.useState(document.hidden);
    return (
      O.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  tu = 1,
  yb = class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]));
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : tu++,
            s = this.toasts.find((l) => l.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: i, title: n })
                    : l,
                ))
              : this.addToast({ title: n, ...r, dismissible: i, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            s,
            i = r
              .then(async (c) => {
                if (((s = ["resolve", c]), O.isValidElement(c)))
                  ((o = !1),
                    this.create({ id: n, type: "default", message: c }));
                else if (wb(c) && !c.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${c.status}`)
                        : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${c.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(c)
                        : t.success,
                    d =
                      typeof t.description == "function"
                        ? await t.description(c)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: d,
                  });
                }
              })
              .catch(async (c) => {
                if (((s = ["reject", c]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(c) : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(c)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                }
              })
              .finally(() => {
                var c;
                (o && (this.dismiss(n), (n = void 0)),
                  (c = t.finally) == null || c.call(t));
              }),
            l = () =>
              new Promise((c, u) =>
                i.then(() => (s[0] === "reject" ? u(s[1]) : c(s[1]))).catch(u),
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || tu++;
          return (this.create({ jsx: e(n), id: n, ...t }), n);
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()));
    }
  },
  rt = new yb(),
  xb = (e, t) => {
    let n = (t == null ? void 0 : t.id) || tu++;
    return (rt.addToast({ title: e, ...t, id: n }), n);
  },
  wb = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  Sb = xb,
  bb = () => rt.toasts,
  Cb = () => rt.getActiveToasts();
Object.assign(
  Sb,
  {
    success: rt.success,
    info: rt.info,
    warning: rt.warning,
    error: rt.error,
    custom: rt.custom,
    message: rt.message,
    promise: rt.promise,
    dismiss: rt.dismiss,
    loading: rt.loading,
  },
  { getHistory: bb, getToasts: Cb },
);
function Eb(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  ((r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e)));
}
Eb(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Pi(e) {
  return e.label !== void 0;
}
var jb = 3,
  Nb = "32px",
  Pb = "16px",
  gp = 4e3,
  Tb = 356,
  kb = 14,
  Rb = 20,
  Ab = 200;
function At(...e) {
  return e.filter(Boolean).join(" ");
}
function Ob(e) {
  let [t, n] = e.split("-"),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
var Mb = (e) => {
  var t, n, r, o, s, i, l, c, u, d, f;
  let {
      invert: g,
      toast: p,
      unstyled: S,
      interacting: m,
      setHeights: w,
      visibleToasts: y,
      heights: h,
      index: x,
      toasts: b,
      expanded: C,
      removeToast: j,
      defaultRichColors: E,
      closeButton: k,
      style: I,
      cancelButtonStyle: R,
      actionButtonStyle: z,
      className: _ = "",
      descriptionClassName: H = "",
      duration: M,
      position: V,
      gap: U,
      loadingIcon: B,
      expandByDefault: N,
      classNames: T,
      icons: L,
      closeButtonAriaLabel: W = "Close toast",
      pauseWhenPageIsHidden: $,
    } = e,
    [X, G] = O.useState(null),
    [de, Ne] = O.useState(null),
    [D, ae] = O.useState(!1),
    [Pe, se] = O.useState(!1),
    [ne, oe] = O.useState(!1),
    [We, yt] = O.useState(!1),
    [cr, Cn] = O.useState(!1),
    [ur, Go] = O.useState(0),
    [$r, Wd] = O.useState(0),
    Ko = O.useRef(p.duration || M || gp),
    Vd = O.useRef(null),
    dr = O.useRef(null),
    Fx = x === 0,
    zx = x + 1 <= y,
    xt = p.type,
    Br = p.dismissible !== !1,
    Ux = p.className || "",
    $x = p.descriptionClassName || "",
    ii = O.useMemo(
      () => h.findIndex((K) => K.toastId === p.id) || 0,
      [h, p.id],
    ),
    Bx = O.useMemo(() => {
      var K;
      return (K = p.closeButton) != null ? K : k;
    }, [p.closeButton, k]),
    Qd = O.useMemo(() => p.duration || M || gp, [p.duration, M]),
    ml = O.useRef(0),
    Hr = O.useRef(0),
    Gd = O.useRef(0),
    Wr = O.useRef(null),
    [Hx, Wx] = V.split("-"),
    Kd = O.useMemo(
      () => h.reduce((K, ce, he) => (he >= ii ? K : K + ce.height), 0),
      [h, ii],
    ),
    qd = gb(),
    Vx = p.invert || g,
    hl = xt === "loading";
  ((Hr.current = O.useMemo(() => ii * U + Kd, [ii, Kd])),
    O.useEffect(() => {
      Ko.current = Qd;
    }, [Qd]),
    O.useEffect(() => {
      ae(!0);
    }, []),
    O.useEffect(() => {
      let K = dr.current;
      if (K) {
        let ce = K.getBoundingClientRect().height;
        return (
          Wd(ce),
          w((he) => [
            { toastId: p.id, height: ce, position: p.position },
            ...he,
          ]),
          () => w((he) => he.filter((Pt) => Pt.toastId !== p.id))
        );
      }
    }, [w, p.id]),
    O.useLayoutEffect(() => {
      if (!D) return;
      let K = dr.current,
        ce = K.style.height;
      K.style.height = "auto";
      let he = K.getBoundingClientRect().height;
      ((K.style.height = ce),
        Wd(he),
        w((Pt) =>
          Pt.find((Tt) => Tt.toastId === p.id)
            ? Pt.map((Tt) => (Tt.toastId === p.id ? { ...Tt, height: he } : Tt))
            : [{ toastId: p.id, height: he, position: p.position }, ...Pt],
        ));
    }, [D, p.title, p.description, w, p.id]));
  let En = O.useCallback(() => {
    (se(!0),
      Go(Hr.current),
      w((K) => K.filter((ce) => ce.toastId !== p.id)),
      setTimeout(() => {
        j(p);
      }, Ab));
  }, [p, j, w, Hr]);
  (O.useEffect(() => {
    if (
      (p.promise && xt === "loading") ||
      p.duration === 1 / 0 ||
      p.type === "loading"
    )
      return;
    let K;
    return (
      C || m || ($ && qd)
        ? (() => {
            if (Gd.current < ml.current) {
              let ce = new Date().getTime() - ml.current;
              Ko.current = Ko.current - ce;
            }
            Gd.current = new Date().getTime();
          })()
        : Ko.current !== 1 / 0 &&
          ((ml.current = new Date().getTime()),
          (K = setTimeout(() => {
            var ce;
            ((ce = p.onAutoClose) == null || ce.call(p, p), En());
          }, Ko.current))),
      () => clearTimeout(K)
    );
  }, [C, m, p, xt, $, qd, En]),
    O.useEffect(() => {
      p.delete && En();
    }, [En, p.delete]));
  function Qx() {
    var K, ce, he;
    return L != null && L.loading
      ? O.createElement(
          "div",
          {
            className: At(
              T == null ? void 0 : T.loader,
              (K = p == null ? void 0 : p.classNames) == null
                ? void 0
                : K.loader,
              "sonner-loader",
            ),
            "data-visible": xt === "loading",
          },
          L.loading,
        )
      : B
        ? O.createElement(
            "div",
            {
              className: At(
                T == null ? void 0 : T.loader,
                (ce = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : ce.loader,
                "sonner-loader",
              ),
              "data-visible": xt === "loading",
            },
            B,
          )
        : O.createElement(db, {
            className: At(
              T == null ? void 0 : T.loader,
              (he = p == null ? void 0 : p.classNames) == null
                ? void 0
                : he.loader,
            ),
            visible: xt === "loading",
          });
  }
  return O.createElement(
    "li",
    {
      tabIndex: 0,
      ref: dr,
      className: At(
        _,
        Ux,
        T == null ? void 0 : T.toast,
        (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast,
        T == null ? void 0 : T.default,
        T == null ? void 0 : T[xt],
        (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[xt],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = p.richColors) != null ? r : E,
      "data-styled": !(p.jsx || p.unstyled || S),
      "data-mounted": D,
      "data-promise": !!p.promise,
      "data-swiped": cr,
      "data-removed": Pe,
      "data-visible": zx,
      "data-y-position": Hx,
      "data-x-position": Wx,
      "data-index": x,
      "data-front": Fx,
      "data-swiping": ne,
      "data-dismissible": Br,
      "data-type": xt,
      "data-invert": Vx,
      "data-swipe-out": We,
      "data-swipe-direction": de,
      "data-expanded": !!(C || (N && D)),
      style: {
        "--index": x,
        "--toasts-before": x,
        "--z-index": b.length - x,
        "--offset": `${Pe ? ur : Hr.current}px`,
        "--initial-height": N ? "auto" : `${$r}px`,
        ...I,
        ...p.style,
      },
      onDragEnd: () => {
        (oe(!1), G(null), (Wr.current = null));
      },
      onPointerDown: (K) => {
        hl ||
          !Br ||
          ((Vd.current = new Date()),
          Go(Hr.current),
          K.target.setPointerCapture(K.pointerId),
          K.target.tagName !== "BUTTON" &&
            (oe(!0), (Wr.current = { x: K.clientX, y: K.clientY })));
      },
      onPointerUp: () => {
        var K, ce, he, Pt;
        if (We || !Br) return;
        Wr.current = null;
        let Tt = Number(
            ((K = dr.current) == null
              ? void 0
              : K.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          jn = Number(
            ((ce = dr.current) == null
              ? void 0
              : ce.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          fr =
            new Date().getTime() -
            ((he = Vd.current) == null ? void 0 : he.getTime()),
          kt = X === "x" ? Tt : jn,
          Nn = Math.abs(kt) / fr;
        if (Math.abs(kt) >= Rb || Nn > 0.11) {
          (Go(Hr.current),
            (Pt = p.onDismiss) == null || Pt.call(p, p),
            Ne(
              X === "x" ? (Tt > 0 ? "right" : "left") : jn > 0 ? "down" : "up",
            ),
            En(),
            yt(!0),
            Cn(!1));
          return;
        }
        (oe(!1), G(null));
      },
      onPointerMove: (K) => {
        var ce, he, Pt, Tt;
        if (
          !Wr.current ||
          !Br ||
          ((ce = window.getSelection()) == null
            ? void 0
            : ce.toString().length) > 0
        )
          return;
        let jn = K.clientY - Wr.current.y,
          fr = K.clientX - Wr.current.x,
          kt = (he = e.swipeDirections) != null ? he : Ob(V);
        !X &&
          (Math.abs(fr) > 1 || Math.abs(jn) > 1) &&
          G(Math.abs(fr) > Math.abs(jn) ? "x" : "y");
        let Nn = { x: 0, y: 0 };
        (X === "y"
          ? (kt.includes("top") || kt.includes("bottom")) &&
            ((kt.includes("top") && jn < 0) ||
              (kt.includes("bottom") && jn > 0)) &&
            (Nn.y = jn)
          : X === "x" &&
            (kt.includes("left") || kt.includes("right")) &&
            ((kt.includes("left") && fr < 0) ||
              (kt.includes("right") && fr > 0)) &&
            (Nn.x = fr),
          (Math.abs(Nn.x) > 0 || Math.abs(Nn.y) > 0) && Cn(!0),
          (Pt = dr.current) == null ||
            Pt.style.setProperty("--swipe-amount-x", `${Nn.x}px`),
          (Tt = dr.current) == null ||
            Tt.style.setProperty("--swipe-amount-y", `${Nn.y}px`));
      },
    },
    Bx && !p.jsx
      ? O.createElement(
          "button",
          {
            "aria-label": W,
            "data-disabled": hl,
            "data-close-button": !0,
            onClick:
              hl || !Br
                ? () => {}
                : () => {
                    var K;
                    (En(), (K = p.onDismiss) == null || K.call(p, p));
                  },
            className: At(
              T == null ? void 0 : T.closeButton,
              (o = p == null ? void 0 : p.classNames) == null
                ? void 0
                : o.closeButton,
            ),
          },
          (s = L == null ? void 0 : L.close) != null ? s : vb,
        )
      : null,
    p.jsx || v.isValidElement(p.title)
      ? p.jsx
        ? p.jsx
        : typeof p.title == "function"
          ? p.title()
          : p.title
      : O.createElement(
          O.Fragment,
          null,
          xt || p.icon || p.promise
            ? O.createElement(
                "div",
                {
                  "data-icon": "",
                  className: At(
                    T == null ? void 0 : T.icon,
                    (i = p == null ? void 0 : p.classNames) == null
                      ? void 0
                      : i.icon,
                  ),
                },
                p.promise || (p.type === "loading" && !p.icon)
                  ? p.icon || Qx()
                  : null,
                p.type !== "loading"
                  ? p.icon || (L == null ? void 0 : L[xt]) || cb(xt)
                  : null,
              )
            : null,
          O.createElement(
            "div",
            {
              "data-content": "",
              className: At(
                T == null ? void 0 : T.content,
                (l = p == null ? void 0 : p.classNames) == null
                  ? void 0
                  : l.content,
              ),
            },
            O.createElement(
              "div",
              {
                "data-title": "",
                className: At(
                  T == null ? void 0 : T.title,
                  (c = p == null ? void 0 : p.classNames) == null
                    ? void 0
                    : c.title,
                ),
              },
              typeof p.title == "function" ? p.title() : p.title,
            ),
            p.description
              ? O.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: At(
                      H,
                      $x,
                      T == null ? void 0 : T.description,
                      (u = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : u.description,
                    ),
                  },
                  typeof p.description == "function"
                    ? p.description()
                    : p.description,
                )
              : null,
          ),
          v.isValidElement(p.cancel)
            ? p.cancel
            : p.cancel && Pi(p.cancel)
              ? O.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: p.cancelButtonStyle || R,
                    onClick: (K) => {
                      var ce, he;
                      Pi(p.cancel) &&
                        Br &&
                        ((he = (ce = p.cancel).onClick) == null ||
                          he.call(ce, K),
                        En());
                    },
                    className: At(
                      T == null ? void 0 : T.cancelButton,
                      (d = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : d.cancelButton,
                    ),
                  },
                  p.cancel.label,
                )
              : null,
          v.isValidElement(p.action)
            ? p.action
            : p.action && Pi(p.action)
              ? O.createElement(
                  "button",
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: p.actionButtonStyle || z,
                    onClick: (K) => {
                      var ce, he;
                      Pi(p.action) &&
                        ((he = (ce = p.action).onClick) == null ||
                          he.call(ce, K),
                        !K.defaultPrevented && En());
                    },
                    className: At(
                      T == null ? void 0 : T.actionButton,
                      (f = p == null ? void 0 : p.classNames) == null
                        ? void 0
                        : f.actionButton,
                    ),
                  },
                  p.action.label,
                )
              : null,
        ),
  );
};
function yp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function _b(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let s = o === 1,
        i = s ? "--mobile-offset" : "--offset",
        l = s ? Pb : Nb;
      function c(u) {
        ["top", "right", "bottom", "left"].forEach((d) => {
          n[`${i}-${d}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? c(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((u) => {
              r[u] === void 0
                ? (n[`${i}-${u}`] = l)
                : (n[`${i}-${u}`] =
                    typeof r[u] == "number" ? `${r[u]}px` : r[u]);
            })
          : c(l);
    }),
    n
  );
}
var Ib = v.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: s,
      closeButton: i,
      className: l,
      offset: c,
      mobileOffset: u,
      theme: d = "light",
      richColors: f,
      duration: g,
      style: p,
      visibleToasts: S = jb,
      toastOptions: m,
      dir: w = yp(),
      gap: y = kb,
      loadingIcon: h,
      icons: x,
      containerAriaLabel: b = "Notifications",
      pauseWhenPageIsHidden: C,
    } = e,
    [j, E] = O.useState([]),
    k = O.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(j.filter(($) => $.position).map(($) => $.position)),
          ),
        ),
      [j, r],
    ),
    [I, R] = O.useState([]),
    [z, _] = O.useState(!1),
    [H, M] = O.useState(!1),
    [V, U] = O.useState(
      d !== "system"
        ? d
        : typeof window < "u" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
    ),
    B = O.useRef(null),
    N = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    T = O.useRef(null),
    L = O.useRef(!1),
    W = O.useCallback(($) => {
      E((X) => {
        var G;
        return (
          ((G = X.find((de) => de.id === $.id)) != null && G.delete) ||
            rt.dismiss($.id),
          X.filter(({ id: de }) => de !== $.id)
        );
      });
    }, []);
  return (
    O.useEffect(
      () =>
        rt.subscribe(($) => {
          if ($.dismiss) {
            E((X) => X.map((G) => (G.id === $.id ? { ...G, delete: !0 } : G)));
            return;
          }
          setTimeout(() => {
            Av.flushSync(() => {
              E((X) => {
                let G = X.findIndex((de) => de.id === $.id);
                return G !== -1
                  ? [...X.slice(0, G), { ...X[G], ...$ }, ...X.slice(G + 1)]
                  : [$, ...X];
              });
            });
          });
        }),
      [],
    ),
    O.useEffect(() => {
      if (d !== "system") {
        U(d);
        return;
      }
      if (
        (d === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? U("dark")
            : U("light")),
        typeof window > "u")
      )
        return;
      let $ = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        $.addEventListener("change", ({ matches: X }) => {
          U(X ? "dark" : "light");
        });
      } catch {
        $.addListener(({ matches: G }) => {
          try {
            U(G ? "dark" : "light");
          } catch (de) {
            console.error(de);
          }
        });
      }
    }, [d]),
    O.useEffect(() => {
      j.length <= 1 && _(!1);
    }, [j]),
    O.useEffect(() => {
      let $ = (X) => {
        var G, de;
        (o.every((Ne) => X[Ne] || X.code === Ne) &&
          (_(!0), (G = B.current) == null || G.focus()),
          X.code === "Escape" &&
            (document.activeElement === B.current ||
              ((de = B.current) != null &&
                de.contains(document.activeElement))) &&
            _(!1));
      };
      return (
        document.addEventListener("keydown", $),
        () => document.removeEventListener("keydown", $)
      );
    }, [o]),
    O.useEffect(() => {
      if (B.current)
        return () => {
          T.current &&
            (T.current.focus({ preventScroll: !0 }),
            (T.current = null),
            (L.current = !1));
        };
    }, [B.current]),
    O.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${b} ${N}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      k.map(($, X) => {
        var G;
        let [de, Ne] = $.split("-");
        return j.length
          ? O.createElement(
              "ol",
              {
                key: $,
                dir: w === "auto" ? yp() : w,
                tabIndex: -1,
                ref: B,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": V,
                "data-y-position": de,
                "data-lifted": z && j.length > 1 && !s,
                "data-x-position": Ne,
                style: {
                  "--front-toast-height": `${((G = I[0]) == null ? void 0 : G.height) || 0}px`,
                  "--width": `${Tb}px`,
                  "--gap": `${y}px`,
                  ...p,
                  ..._b(c, u),
                },
                onBlur: (D) => {
                  L.current &&
                    !D.currentTarget.contains(D.relatedTarget) &&
                    ((L.current = !1),
                    T.current &&
                      (T.current.focus({ preventScroll: !0 }),
                      (T.current = null)));
                },
                onFocus: (D) => {
                  (D.target instanceof HTMLElement &&
                    D.target.dataset.dismissible === "false") ||
                    L.current ||
                    ((L.current = !0), (T.current = D.relatedTarget));
                },
                onMouseEnter: () => _(!0),
                onMouseMove: () => _(!0),
                onMouseLeave: () => {
                  H || _(!1);
                },
                onDragEnd: () => _(!1),
                onPointerDown: (D) => {
                  (D.target instanceof HTMLElement &&
                    D.target.dataset.dismissible === "false") ||
                    M(!0);
                },
                onPointerUp: () => M(!1),
              },
              j
                .filter((D) => (!D.position && X === 0) || D.position === $)
                .map((D, ae) => {
                  var Pe, se;
                  return O.createElement(Mb, {
                    key: D.id,
                    icons: x,
                    index: ae,
                    toast: D,
                    defaultRichColors: f,
                    duration:
                      (Pe = m == null ? void 0 : m.duration) != null ? Pe : g,
                    className: m == null ? void 0 : m.className,
                    descriptionClassName:
                      m == null ? void 0 : m.descriptionClassName,
                    invert: n,
                    visibleToasts: S,
                    closeButton:
                      (se = m == null ? void 0 : m.closeButton) != null
                        ? se
                        : i,
                    interacting: H,
                    position: $,
                    style: m == null ? void 0 : m.style,
                    unstyled: m == null ? void 0 : m.unstyled,
                    classNames: m == null ? void 0 : m.classNames,
                    cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                    actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                    removeToast: W,
                    toasts: j.filter((ne) => ne.position == D.position),
                    heights: I.filter((ne) => ne.position == D.position),
                    setHeights: R,
                    expandByDefault: s,
                    gap: y,
                    loadingIcon: h,
                    expanded: z,
                    pauseWhenPageIsHidden: C,
                    swipeDirections: e.swipeDirections,
                  });
                }),
            )
          : null;
      }),
    )
  );
});
const Lb = ({ ...e }) => {
  const { theme: t = "system" } = lb();
  return a.jsx(Ib, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var Db = ku[" useId ".trim().toString()] || (() => {}),
  Fb = 0;
function Za(e) {
  const [t, n] = v.useState(Db());
  return (
    Ue(() => {
      n((r) => r ?? String(Fb++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const zb = ["top", "right", "bottom", "left"],
  nr = Math.min,
  ut = Math.max,
  Ea = Math.round,
  Ti = Math.floor,
  rn = (e) => ({ x: e, y: e }),
  Ub = { left: "right", right: "left", bottom: "top", top: "bottom" },
  $b = { start: "end", end: "start" };
function nu(e, t, n) {
  return ut(e, nr(t, n));
}
function wn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sn(e) {
  return e.split("-")[0];
}
function Ho(e) {
  return e.split("-")[1];
}
function Pd(e) {
  return e === "x" ? "y" : "x";
}
function Td(e) {
  return e === "y" ? "height" : "width";
}
const Bb = new Set(["top", "bottom"]);
function en(e) {
  return Bb.has(Sn(e)) ? "y" : "x";
}
function kd(e) {
  return Pd(en(e));
}
function Hb(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ho(e),
    o = kd(e),
    s = Td(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[s] > t.floating[s] && (i = ja(i)), [i, ja(i)]);
}
function Wb(e) {
  const t = ja(e);
  return [ru(e), t, ru(t)];
}
function ru(e) {
  return e.replace(/start|end/g, (t) => $b[t]);
}
const xp = ["left", "right"],
  wp = ["right", "left"],
  Vb = ["top", "bottom"],
  Qb = ["bottom", "top"];
function Gb(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? wp : xp) : t ? xp : wp;
    case "left":
    case "right":
      return t ? Vb : Qb;
    default:
      return [];
  }
}
function Kb(e, t, n, r) {
  const o = Ho(e);
  let s = Gb(Sn(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(ru)))),
    s
  );
}
function ja(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ub[t]);
}
function qb(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Eg(e) {
  return typeof e != "number"
    ? qb(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Na(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Sp(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = en(t),
    i = kd(t),
    l = Td(i),
    c = Sn(t),
    u = s === "y",
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    g = r[l] / 2 - o[l] / 2;
  let p;
  switch (c) {
    case "top":
      p = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      p = { x: d, y: r.y + r.height };
      break;
    case "right":
      p = { x: r.x + r.width, y: f };
      break;
    case "left":
      p = { x: r.x - o.width, y: f };
      break;
    default:
      p = { x: r.x, y: r.y };
  }
  switch (Ho(t)) {
    case "start":
      p[i] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      p[i] += g * (n && u ? -1 : 1);
      break;
  }
  return p;
}
const Yb = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    l = s.filter(Boolean),
    c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: f } = Sp(u, r, c),
    g = r,
    p = {},
    S = 0;
  for (let m = 0; m < l.length; m++) {
    const { name: w, fn: y } = l[m],
      {
        x: h,
        y: x,
        data: b,
        reset: C,
      } = await y({
        x: d,
        y: f,
        initialPlacement: r,
        placement: g,
        strategy: o,
        middlewareData: p,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    ((d = h ?? d),
      (f = x ?? f),
      (p = { ...p, [w]: { ...p[w], ...b } }),
      C &&
        S <= 50 &&
        (S++,
        typeof C == "object" &&
          (C.placement && (g = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: d, y: f } = Sp(u, g, c))),
        (m = -1)));
  }
  return { x: d, y: f, placement: g, strategy: o, middlewareData: p };
};
async function $s(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: c } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: g = !1,
      padding: p = 0,
    } = wn(t, e),
    S = Eg(p),
    w = l[g ? (f === "floating" ? "reference" : "floating") : f],
    y = Na(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: c,
      }),
    ),
    h =
      f === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    x = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    b = (await (s.isElement == null ? void 0 : s.isElement(x)))
      ? (await (s.getScale == null ? void 0 : s.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Na(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: h,
            offsetParent: x,
            strategy: c,
          })
        : h,
    );
  return {
    top: (y.top - C.top + S.top) / b.y,
    bottom: (C.bottom - y.bottom + S.bottom) / b.y,
    left: (y.left - C.left + S.left) / b.x,
    right: (C.right - y.right + S.right) / b.x,
  };
}
const Xb = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: l,
          middlewareData: c,
        } = t,
        { element: u, padding: d = 0 } = wn(e, t) || {};
      if (u == null) return {};
      const f = Eg(d),
        g = { x: n, y: r },
        p = kd(o),
        S = Td(p),
        m = await i.getDimensions(u),
        w = p === "y",
        y = w ? "top" : "left",
        h = w ? "bottom" : "right",
        x = w ? "clientHeight" : "clientWidth",
        b = s.reference[S] + s.reference[p] - g[p] - s.floating[S],
        C = g[p] - s.reference[p],
        j = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let E = j ? j[x] : 0;
      (!E || !(await (i.isElement == null ? void 0 : i.isElement(j)))) &&
        (E = l.floating[x] || s.floating[S]);
      const k = b / 2 - C / 2,
        I = E / 2 - m[S] / 2 - 1,
        R = nr(f[y], I),
        z = nr(f[h], I),
        _ = R,
        H = E - m[S] - z,
        M = E / 2 - m[S] / 2 + k,
        V = nu(_, M, H),
        U =
          !c.arrow &&
          Ho(o) != null &&
          M !== V &&
          s.reference[S] / 2 - (M < _ ? R : z) - m[S] / 2 < 0,
        B = U ? (M < _ ? M - _ : M - H) : 0;
      return {
        [p]: g[p] + B,
        data: {
          [p]: V,
          centerOffset: M - V - B,
          ...(U && { alignmentOffset: B }),
        },
        reset: U,
      };
    },
  }),
  Zb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: l,
              platform: c,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: g,
              fallbackStrategy: p = "bestFit",
              fallbackAxisSideDirection: S = "none",
              flipAlignment: m = !0,
              ...w
            } = wn(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const y = Sn(o),
            h = en(l),
            x = Sn(l) === l,
            b = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
            C = g || (x || !m ? [ja(l)] : Wb(l)),
            j = S !== "none";
          !g && j && C.push(...Kb(l, m, S, b));
          const E = [l, ...C],
            k = await $s(t, w),
            I = [];
          let R = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((d && I.push(k[y]), f)) {
            const M = Hb(o, i, b);
            I.push(k[M[0]], k[M[1]]);
          }
          if (
            ((R = [...R, { placement: o, overflows: I }]),
            !I.every((M) => M <= 0))
          ) {
            var z, _;
            const M = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1,
              V = E[M];
            if (
              V &&
              (!(f === "alignment" ? h !== en(V) : !1) ||
                R.every((N) =>
                  en(N.placement) === h ? N.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: M, overflows: R },
                reset: { placement: V },
              };
            let U =
              (_ = R.filter((B) => B.overflows[0] <= 0).sort(
                (B, N) => B.overflows[1] - N.overflows[1],
              )[0]) == null
                ? void 0
                : _.placement;
            if (!U)
              switch (p) {
                case "bestFit": {
                  var H;
                  const B =
                    (H = R.filter((N) => {
                      if (j) {
                        const T = en(N.placement);
                        return T === h || T === "y";
                      }
                      return !0;
                    })
                      .map((N) => [
                        N.placement,
                        N.overflows
                          .filter((T) => T > 0)
                          .reduce((T, L) => T + L, 0),
                      ])
                      .sort((N, T) => N[1] - T[1])[0]) == null
                      ? void 0
                      : H[0];
                  B && (U = B);
                  break;
                }
                case "initialPlacement":
                  U = l;
                  break;
              }
            if (o !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
function bp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Cp(e) {
  return zb.some((t) => e[t] >= 0);
}
const Jb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = wn(e, t);
          switch (r) {
            case "referenceHidden": {
              const s = await $s(t, { ...o, elementContext: "reference" }),
                i = bp(s, n.reference);
              return {
                data: { referenceHiddenOffsets: i, referenceHidden: Cp(i) },
              };
            }
            case "escaped": {
              const s = await $s(t, { ...o, altBoundary: !0 }),
                i = bp(s, n.floating);
              return { data: { escapedOffsets: i, escaped: Cp(i) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  jg = new Set(["left", "top"]);
async function eC(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = Sn(n),
    l = Ho(n),
    c = en(n) === "y",
    u = jg.has(i) ? -1 : 1,
    d = s && c ? -1 : 1,
    f = wn(t, e);
  let {
    mainAxis: g,
    crossAxis: p,
    alignmentAxis: S,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    l && typeof S == "number" && (p = l === "end" ? S * -1 : S),
    c ? { x: p * d, y: g * u } : { x: g * u, y: p * d }
  );
}
const tC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: l } = t,
            c = await eC(t, e);
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + c.x, y: s + c.y, data: { ...c, placement: i } };
        },
      }
    );
  },
  nC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: y, y: h } = w;
                  return { x: y, y: h };
                },
              },
              ...c
            } = wn(e, t),
            u = { x: n, y: r },
            d = await $s(t, c),
            f = en(Sn(o)),
            g = Pd(f);
          let p = u[g],
            S = u[f];
          if (s) {
            const w = g === "y" ? "top" : "left",
              y = g === "y" ? "bottom" : "right",
              h = p + d[w],
              x = p - d[y];
            p = nu(h, p, x);
          }
          if (i) {
            const w = f === "y" ? "top" : "left",
              y = f === "y" ? "bottom" : "right",
              h = S + d[w],
              x = S - d[y];
            S = nu(h, S, x);
          }
          const m = l.fn({ ...t, [g]: p, [f]: S });
          return {
            ...m,
            data: { x: m.x - n, y: m.y - r, enabled: { [g]: s, [f]: i } },
          };
        },
      }
    );
  },
  rC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: l = 0, mainAxis: c = !0, crossAxis: u = !0 } = wn(e, t),
            d = { x: n, y: r },
            f = en(o),
            g = Pd(f);
          let p = d[g],
            S = d[f];
          const m = wn(l, t),
            w =
              typeof m == "number"
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (c) {
            const x = g === "y" ? "height" : "width",
              b = s.reference[g] - s.floating[x] + w.mainAxis,
              C = s.reference[g] + s.reference[x] - w.mainAxis;
            p < b ? (p = b) : p > C && (p = C);
          }
          if (u) {
            var y, h;
            const x = g === "y" ? "width" : "height",
              b = jg.has(Sn(o)),
              C =
                s.reference[f] -
                s.floating[x] +
                ((b && ((y = i.offset) == null ? void 0 : y[f])) || 0) +
                (b ? 0 : w.crossAxis),
              j =
                s.reference[f] +
                s.reference[x] +
                (b ? 0 : ((h = i.offset) == null ? void 0 : h[f]) || 0) -
                (b ? w.crossAxis : 0);
            S < C ? (S = C) : S > j && (S = j);
          }
          return { [g]: p, [f]: S };
        },
      }
    );
  },
  oC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: i, elements: l } = t,
            { apply: c = () => {}, ...u } = wn(e, t),
            d = await $s(t, u),
            f = Sn(o),
            g = Ho(o),
            p = en(o) === "y",
            { width: S, height: m } = s.floating;
          let w, y;
          f === "top" || f === "bottom"
            ? ((w = f),
              (y =
                g ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = f), (w = g === "end" ? "top" : "bottom"));
          const h = m - d.top - d.bottom,
            x = S - d.left - d.right,
            b = nr(m - d[w], h),
            C = nr(S - d[y], x),
            j = !t.middlewareData.shift;
          let E = b,
            k = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (k = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (E = h),
            j && !g)
          ) {
            const R = ut(d.left, 0),
              z = ut(d.right, 0),
              _ = ut(d.top, 0),
              H = ut(d.bottom, 0);
            p
              ? (k = S - 2 * (R !== 0 || z !== 0 ? R + z : ut(d.left, d.right)))
              : (E =
                  m - 2 * (_ !== 0 || H !== 0 ? _ + H : ut(d.top, d.bottom)));
          }
          await c({ ...t, availableWidth: k, availableHeight: E });
          const I = await i.getDimensions(l.floating);
          return S !== I.width || m !== I.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Ja() {
  return typeof window < "u";
}
function Wo(e) {
  return Ng(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function sn(e) {
  var t;
  return (t = (Ng(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Ng(e) {
  return Ja() ? e instanceof Node || e instanceof pt(e).Node : !1;
}
function Vt(e) {
  return Ja() ? e instanceof Element || e instanceof pt(e).Element : !1;
}
function on(e) {
  return Ja() ? e instanceof HTMLElement || e instanceof pt(e).HTMLElement : !1;
}
function Ep(e) {
  return !Ja() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof pt(e).ShadowRoot;
}
const sC = new Set(["inline", "contents"]);
function ri(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Qt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !sC.has(o);
}
const iC = new Set(["table", "td", "th"]);
function aC(e) {
  return iC.has(Wo(e));
}
const lC = [":popover-open", ":modal"];
function el(e) {
  return lC.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const cC = ["transform", "translate", "scale", "rotate", "perspective"],
  uC = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  dC = ["paint", "layout", "strict", "content"];
function Rd(e) {
  const t = Ad(),
    n = Vt(e) ? Qt(e) : e;
  return (
    cC.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    uC.some((r) => (n.willChange || "").includes(r)) ||
    dC.some((r) => (n.contain || "").includes(r))
  );
}
function fC(e) {
  let t = rr(e);
  for (; on(t) && !Io(t); ) {
    if (Rd(t)) return t;
    if (el(t)) return null;
    t = rr(t);
  }
  return null;
}
function Ad() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const pC = new Set(["html", "body", "#document"]);
function Io(e) {
  return pC.has(Wo(e));
}
function Qt(e) {
  return pt(e).getComputedStyle(e);
}
function tl(e) {
  return Vt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function rr(e) {
  if (Wo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Ep(e) && e.host) || sn(e);
  return Ep(t) ? t.host : t;
}
function Pg(e) {
  const t = rr(e);
  return Io(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : on(t) && ri(t)
      ? t
      : Pg(t);
}
function Bs(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = Pg(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = pt(o);
  if (s) {
    const l = ou(i);
    return t.concat(
      i,
      i.visualViewport || [],
      ri(o) ? o : [],
      l && n ? Bs(l) : [],
    );
  }
  return t.concat(o, Bs(o, [], n));
}
function ou(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Tg(e) {
  const t = Qt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = on(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    l = Ea(n) !== s || Ea(r) !== i;
  return (l && ((n = s), (r = i)), { width: n, height: r, $: l });
}
function Od(e) {
  return Vt(e) ? e : e.contextElement;
}
function go(e) {
  const t = Od(e);
  if (!on(t)) return rn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = Tg(t);
  let i = (s ? Ea(n.width) : n.width) / r,
    l = (s ? Ea(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
const mC = rn(0);
function kg(e) {
  const t = pt(e);
  return !Ad() || !t.visualViewport
    ? mC
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function hC(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== pt(e)) ? !1 : t);
}
function Mr(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    s = Od(e);
  let i = rn(1);
  t && (r ? Vt(r) && (i = go(r)) : (i = go(e)));
  const l = hC(s, n, r) ? kg(s) : rn(0);
  let c = (o.left + l.x) / i.x,
    u = (o.top + l.y) / i.y,
    d = o.width / i.x,
    f = o.height / i.y;
  if (s) {
    const g = pt(s),
      p = r && Vt(r) ? pt(r) : r;
    let S = g,
      m = ou(S);
    for (; m && r && p !== S; ) {
      const w = go(m),
        y = m.getBoundingClientRect(),
        h = Qt(m),
        x = y.left + (m.clientLeft + parseFloat(h.paddingLeft)) * w.x,
        b = y.top + (m.clientTop + parseFloat(h.paddingTop)) * w.y;
      ((c *= w.x),
        (u *= w.y),
        (d *= w.x),
        (f *= w.y),
        (c += x),
        (u += b),
        (S = pt(m)),
        (m = ou(S)));
    }
  }
  return Na({ width: d, height: f, x: c, y: u });
}
function nl(e, t) {
  const n = tl(e).scrollLeft;
  return t ? t.left + n : Mr(sn(e)).left + n;
}
function Rg(e, t) {
  const n = e.getBoundingClientRect(),
    r = n.left + t.scrollLeft - nl(e, n),
    o = n.top + t.scrollTop;
  return { x: r, y: o };
}
function vC(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = sn(r),
    l = t ? el(t.floating) : !1;
  if (r === i || (l && s)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    u = rn(1);
  const d = rn(0),
    f = on(r);
  if (
    (f || (!f && !s)) &&
    ((Wo(r) !== "body" || ri(i)) && (c = tl(r)), on(r))
  ) {
    const p = Mr(r);
    ((u = go(r)), (d.x = p.x + r.clientLeft), (d.y = p.y + r.clientTop));
  }
  const g = i && !f && !s ? Rg(i, c) : rn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + d.x + g.x,
    y: n.y * u.y - c.scrollTop * u.y + d.y + g.y,
  };
}
function gC(e) {
  return Array.from(e.getClientRects());
}
function yC(e) {
  const t = sn(e),
    n = tl(e),
    r = e.ownerDocument.body,
    o = ut(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = ut(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + nl(e);
  const l = -n.scrollTop;
  return (
    Qt(r).direction === "rtl" && (i += ut(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: l }
  );
}
const jp = 25;
function xC(e, t) {
  const n = pt(e),
    r = sn(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    l = 0,
    c = 0;
  if (o) {
    ((s = o.width), (i = o.height));
    const d = Ad();
    (!d || (d && t === "fixed")) && ((l = o.offsetLeft), (c = o.offsetTop));
  }
  const u = nl(r);
  if (u <= 0) {
    const d = r.ownerDocument,
      f = d.body,
      g = getComputedStyle(f),
      p =
        (d.compatMode === "CSS1Compat" &&
          parseFloat(g.marginLeft) + parseFloat(g.marginRight)) ||
        0,
      S = Math.abs(r.clientWidth - f.clientWidth - p);
    S <= jp && (s -= S);
  } else u <= jp && (s += u);
  return { width: s, height: i, x: l, y: c };
}
const wC = new Set(["absolute", "fixed"]);
function SC(e, t) {
  const n = Mr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = on(e) ? go(e) : rn(1),
    i = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    c = o * s.x,
    u = r * s.y;
  return { width: i, height: l, x: c, y: u };
}
function Np(e, t, n) {
  let r;
  if (t === "viewport") r = xC(e, n);
  else if (t === "document") r = yC(sn(e));
  else if (Vt(t)) r = SC(t, n);
  else {
    const o = kg(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Na(r);
}
function Ag(e, t) {
  const n = rr(e);
  return n === t || !Vt(n) || Io(n)
    ? !1
    : Qt(n).position === "fixed" || Ag(n, t);
}
function bC(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Bs(e, [], !1).filter((l) => Vt(l) && Wo(l) !== "body"),
    o = null;
  const s = Qt(e).position === "fixed";
  let i = s ? rr(e) : e;
  for (; Vt(i) && !Io(i); ) {
    const l = Qt(i),
      c = Rd(i);
    (!c && l.position === "fixed" && (o = null),
      (
        s
          ? !c && !o
          : (!c && l.position === "static" && !!o && wC.has(o.position)) ||
            (ri(i) && !c && Ag(e, i))
      )
        ? (r = r.filter((d) => d !== i))
        : (o = l),
      (i = rr(i)));
  }
  return (t.set(e, r), r);
}
function CC(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? el(t)
          ? []
          : bC(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = i[0],
    c = i.reduce(
      (u, d) => {
        const f = Np(t, d, o);
        return (
          (u.top = ut(f.top, u.top)),
          (u.right = nr(f.right, u.right)),
          (u.bottom = nr(f.bottom, u.bottom)),
          (u.left = ut(f.left, u.left)),
          u
        );
      },
      Np(t, l, o),
    );
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function EC(e) {
  const { width: t, height: n } = Tg(e);
  return { width: t, height: n };
}
function jC(e, t, n) {
  const r = on(t),
    o = sn(t),
    s = n === "fixed",
    i = Mr(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = rn(0);
  function u() {
    c.x = nl(o);
  }
  if (r || (!r && !s))
    if (((Wo(t) !== "body" || ri(o)) && (l = tl(t)), r)) {
      const p = Mr(t, !0, s, t);
      ((c.x = p.x + t.clientLeft), (c.y = p.y + t.clientTop));
    } else o && u();
  s && !r && o && u();
  const d = o && !r && !s ? Rg(o, l) : rn(0),
    f = i.left + l.scrollLeft - c.x - d.x,
    g = i.top + l.scrollTop - c.y - d.y;
  return { x: f, y: g, width: i.width, height: i.height };
}
function Gl(e) {
  return Qt(e).position === "static";
}
function Pp(e, t) {
  if (!on(e) || Qt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (sn(e) === n && (n = n.ownerDocument.body), n);
}
function Og(e, t) {
  const n = pt(e);
  if (el(e)) return n;
  if (!on(e)) {
    let o = rr(e);
    for (; o && !Io(o); ) {
      if (Vt(o) && !Gl(o)) return o;
      o = rr(o);
    }
    return n;
  }
  let r = Pp(e, t);
  for (; r && aC(r) && Gl(r); ) r = Pp(r, t);
  return r && Io(r) && Gl(r) && !Rd(r) ? n : r || fC(e) || n;
}
const NC = async function (e) {
  const t = this.getOffsetParent || Og,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: jC(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function PC(e) {
  return Qt(e).direction === "rtl";
}
const TC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vC,
  getDocumentElement: sn,
  getClippingRect: CC,
  getOffsetParent: Og,
  getElementRects: NC,
  getClientRects: gC,
  getDimensions: EC,
  getScale: go,
  isElement: Vt,
  isRTL: PC,
};
function Mg(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function kC(e, t) {
  let n = null,
    r;
  const o = sn(e);
  function s() {
    var l;
    (clearTimeout(r), (l = n) == null || l.disconnect(), (n = null));
  }
  function i(l, c) {
    (l === void 0 && (l = !1), c === void 0 && (c = 1), s());
    const u = e.getBoundingClientRect(),
      { left: d, top: f, width: g, height: p } = u;
    if ((l || t(), !g || !p)) return;
    const S = Ti(f),
      m = Ti(o.clientWidth - (d + g)),
      w = Ti(o.clientHeight - (f + p)),
      y = Ti(d),
      x = {
        rootMargin: -S + "px " + -m + "px " + -w + "px " + -y + "px",
        threshold: ut(0, nr(1, c)) || 1,
      };
    let b = !0;
    function C(j) {
      const E = j[0].intersectionRatio;
      if (E !== c) {
        if (!b) return i();
        E
          ? i(!1, E)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      (E === 1 && !Mg(u, e.getBoundingClientRect()) && i(), (b = !1));
    }
    try {
      n = new IntersectionObserver(C, { ...x, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(e);
  }
  return (i(!0), s);
}
function RC(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = r,
    u = Od(e),
    d = o || s ? [...(u ? Bs(u) : []), ...Bs(t)] : [];
  d.forEach((y) => {
    (o && y.addEventListener("scroll", n, { passive: !0 }),
      s && y.addEventListener("resize", n));
  });
  const f = u && l ? kC(u, n) : null;
  let g = -1,
    p = null;
  i &&
    ((p = new ResizeObserver((y) => {
      let [h] = y;
      (h &&
        h.target === u &&
        p &&
        (p.unobserve(t),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          var x;
          (x = p) == null || x.observe(t);
        }))),
        n());
    })),
    u && !c && p.observe(u),
    p.observe(t));
  let S,
    m = c ? Mr(e) : null;
  c && w();
  function w() {
    const y = Mr(e);
    (m && !Mg(m, y) && n(), (m = y), (S = requestAnimationFrame(w)));
  }
  return (
    n(),
    () => {
      var y;
      (d.forEach((h) => {
        (o && h.removeEventListener("scroll", n),
          s && h.removeEventListener("resize", n));
      }),
        f == null || f(),
        (y = p) == null || y.disconnect(),
        (p = null),
        c && cancelAnimationFrame(S));
    }
  );
}
const AC = tC,
  OC = nC,
  MC = Zb,
  _C = oC,
  IC = Jb,
  Tp = Xb,
  LC = rC,
  DC = (e, t, n) => {
    const r = new Map(),
      o = { platform: TC, ...n },
      s = { ...o.platform, _c: r };
    return Yb(e, t, { ...o, platform: s });
  };
var FC = typeof document < "u",
  zC = function () {},
  qi = FC ? v.useLayoutEffect : zC;
function Pa(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Pa(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Pa(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _g(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function kp(e, t) {
  const n = _g(e);
  return Math.round(t * n) / n;
}
function Kl(e) {
  const t = v.useRef(e);
  return (
    qi(() => {
      t.current = e;
    }),
    t
  );
}
function UC(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: l = !0,
      whileElementsMounted: c,
      open: u,
    } = e,
    [d, f] = v.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [g, p] = v.useState(r);
  Pa(g, r) || p(r);
  const [S, m] = v.useState(null),
    [w, y] = v.useState(null),
    h = v.useCallback((N) => {
      N !== j.current && ((j.current = N), m(N));
    }, []),
    x = v.useCallback((N) => {
      N !== E.current && ((E.current = N), y(N));
    }, []),
    b = s || S,
    C = i || w,
    j = v.useRef(null),
    E = v.useRef(null),
    k = v.useRef(d),
    I = c != null,
    R = Kl(c),
    z = Kl(o),
    _ = Kl(u),
    H = v.useCallback(() => {
      if (!j.current || !E.current) return;
      const N = { placement: t, strategy: n, middleware: g };
      (z.current && (N.platform = z.current),
        DC(j.current, E.current, N).then((T) => {
          const L = { ...T, isPositioned: _.current !== !1 };
          M.current &&
            !Pa(k.current, L) &&
            ((k.current = L),
            Fr.flushSync(() => {
              f(L);
            }));
        }));
    }, [g, t, n, z, _]);
  qi(() => {
    u === !1 &&
      k.current.isPositioned &&
      ((k.current.isPositioned = !1), f((N) => ({ ...N, isPositioned: !1 })));
  }, [u]);
  const M = v.useRef(!1);
  (qi(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    [],
  ),
    qi(() => {
      if ((b && (j.current = b), C && (E.current = C), b && C)) {
        if (R.current) return R.current(b, C, H);
        H();
      }
    }, [b, C, H, R, I]));
  const V = v.useMemo(
      () => ({ reference: j, floating: E, setReference: h, setFloating: x }),
      [h, x],
    ),
    U = v.useMemo(() => ({ reference: b, floating: C }), [b, C]),
    B = v.useMemo(() => {
      const N = { position: n, left: 0, top: 0 };
      if (!U.floating) return N;
      const T = kp(U.floating, d.x),
        L = kp(U.floating, d.y);
      return l
        ? {
            ...N,
            transform: "translate(" + T + "px, " + L + "px)",
            ...(_g(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: T, top: L };
    }, [n, l, U.floating, d.x, d.y]);
  return v.useMemo(
    () => ({ ...d, update: H, refs: V, elements: U, floatingStyles: B }),
    [d, H, V, U, B],
  );
}
const $C = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Tp({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Tp({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  BC = (e, t) => ({ ...AC(e), options: [e, t] }),
  HC = (e, t) => ({ ...OC(e), options: [e, t] }),
  WC = (e, t) => ({ ...LC(e), options: [e, t] }),
  VC = (e, t) => ({ ...MC(e), options: [e, t] }),
  QC = (e, t) => ({ ..._C(e), options: [e, t] }),
  GC = (e, t) => ({ ...IC(e), options: [e, t] }),
  KC = (e, t) => ({ ...$C(e), options: [e, t] });
var qC = "Arrow",
  Ig = v.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...s } = e;
    return a.jsx(ie.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : a.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Ig.displayName = qC;
var YC = Ig;
function XC(e) {
  const [t, n] = v.useState(void 0);
  return (
    Ue(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, l;
          if ("borderBoxSize" in s) {
            const c = s.borderBoxSize,
              u = Array.isArray(c) ? c[0] : c;
            ((i = u.inlineSize), (l = u.blockSize));
          } else ((i = e.offsetWidth), (l = e.offsetHeight));
          n({ width: i, height: l });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Md = "Popper",
  [Lg, rl] = $o(Md),
  [ZC, Dg] = Lg(Md),
  Fg = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = v.useState(null);
    return a.jsx(ZC, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
Fg.displayName = Md;
var zg = "PopperAnchor",
  Ug = v.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = Dg(zg, n),
      i = v.useRef(null),
      l = Ee(t, i),
      c = v.useRef(null);
    return (
      v.useEffect(() => {
        const u = c.current;
        ((c.current = (r == null ? void 0 : r.current) || i.current),
          u !== c.current && s.onAnchorChange(c.current));
      }),
      r ? null : a.jsx(ie.div, { ...o, ref: l })
    );
  });
Ug.displayName = zg;
var _d = "PopperContent",
  [JC, eE] = Lg(_d),
  $g = v.forwardRef((e, t) => {
    var D, ae, Pe, se, ne, oe;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: s = "center",
        alignOffset: i = 0,
        arrowPadding: l = 0,
        avoidCollisions: c = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: g = !1,
        updatePositionStrategy: p = "optimized",
        onPlaced: S,
        ...m
      } = e,
      w = Dg(_d, n),
      [y, h] = v.useState(null),
      x = Ee(t, (We) => h(We)),
      [b, C] = v.useState(null),
      j = XC(b),
      E = (j == null ? void 0 : j.width) ?? 0,
      k = (j == null ? void 0 : j.height) ?? 0,
      I = r + (s !== "center" ? "-" + s : ""),
      R =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      z = Array.isArray(u) ? u : [u],
      _ = z.length > 0,
      H = { padding: R, boundary: z.filter(nE), altBoundary: _ },
      {
        refs: M,
        floatingStyles: V,
        placement: U,
        isPositioned: B,
        middlewareData: N,
      } = UC({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (...We) =>
          RC(...We, { animationFrame: p === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          BC({ mainAxis: o + k, alignmentAxis: i }),
          c &&
            HC({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? WC() : void 0,
              ...H,
            }),
          c && VC({ ...H }),
          QC({
            ...H,
            apply: ({
              elements: We,
              rects: yt,
              availableWidth: cr,
              availableHeight: Cn,
            }) => {
              const { width: ur, height: Go } = yt.reference,
                $r = We.floating.style;
              ($r.setProperty("--radix-popper-available-width", `${cr}px`),
                $r.setProperty("--radix-popper-available-height", `${Cn}px`),
                $r.setProperty("--radix-popper-anchor-width", `${ur}px`),
                $r.setProperty("--radix-popper-anchor-height", `${Go}px`));
            },
          }),
          b && KC({ element: b, padding: l }),
          rE({ arrowWidth: E, arrowHeight: k }),
          g && GC({ strategy: "referenceHidden", ...H }),
        ],
      }),
      [T, L] = Wg(U),
      W = Wt(S);
    Ue(() => {
      B && (W == null || W());
    }, [B, W]);
    const $ = (D = N.arrow) == null ? void 0 : D.x,
      X = (ae = N.arrow) == null ? void 0 : ae.y,
      G = ((Pe = N.arrow) == null ? void 0 : Pe.centerOffset) !== 0,
      [de, Ne] = v.useState();
    return (
      Ue(() => {
        y && Ne(window.getComputedStyle(y).zIndex);
      }, [y]),
      a.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...V,
          transform: B ? V.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: de,
          "--radix-popper-transform-origin": [
            (se = N.transformOrigin) == null ? void 0 : se.x,
            (ne = N.transformOrigin) == null ? void 0 : ne.y,
          ].join(" "),
          ...(((oe = N.hide) == null ? void 0 : oe.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: a.jsx(JC, {
          scope: n,
          placedSide: T,
          onArrowChange: C,
          arrowX: $,
          arrowY: X,
          shouldHideArrow: G,
          children: a.jsx(ie.div, {
            "data-side": T,
            "data-align": L,
            ...m,
            ref: x,
            style: { ...m.style, animation: B ? void 0 : "none" },
          }),
        }),
      })
    );
  });
$g.displayName = _d;
var Bg = "PopperArrow",
  tE = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Hg = v.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      s = eE(Bg, r),
      i = tE[s.placedSide];
    return a.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: a.jsx(YC, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Hg.displayName = Bg;
function nE(e) {
  return e !== null;
}
var rE = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, y, h;
    const { placement: n, rects: r, middlewareData: o } = t,
      i = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = i ? 0 : e.arrowWidth,
      c = i ? 0 : e.arrowHeight,
      [u, d] = Wg(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      g = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + l / 2,
      p = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + c / 2;
    let S = "",
      m = "";
    return (
      u === "bottom"
        ? ((S = i ? f : `${g}px`), (m = `${-c}px`))
        : u === "top"
          ? ((S = i ? f : `${g}px`), (m = `${r.floating.height + c}px`))
          : u === "right"
            ? ((S = `${-c}px`), (m = i ? f : `${p}px`))
            : u === "left" &&
              ((S = `${r.floating.width + c}px`), (m = i ? f : `${p}px`)),
      { data: { x: S, y: m } }
    );
  },
});
function Wg(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var oE = Fg,
  Vg = Ug,
  Qg = $g,
  Gg = Hg,
  [ol] = $o("Tooltip", [rl]),
  Id = rl(),
  Kg = "TooltipProvider",
  sE = 700,
  Rp = "tooltip.open",
  [iE, qg] = ol(Kg),
  Yg = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = sE,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: s,
      } = e,
      i = v.useRef(!0),
      l = v.useRef(!1),
      c = v.useRef(0);
    return (
      v.useEffect(() => {
        const u = c.current;
        return () => window.clearTimeout(u);
      }, []),
      a.jsx(iE, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: v.useCallback(() => {
          (window.clearTimeout(c.current), (i.current = !1));
        }, []),
        onClose: v.useCallback(() => {
          (window.clearTimeout(c.current),
            (c.current = window.setTimeout(() => (i.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: v.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: s,
      })
    );
  };
Yg.displayName = Kg;
var Xg = "Tooltip",
  [ak, sl] = ol(Xg),
  su = "TooltipTrigger",
  aE = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = sl(su, n),
      s = qg(su, n),
      i = Id(n),
      l = v.useRef(null),
      c = Ee(t, l, o.onTriggerChange),
      u = v.useRef(!1),
      d = v.useRef(!1),
      f = v.useCallback(() => (u.current = !1), []);
    return (
      v.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f],
      ),
      a.jsx(Vg, {
        asChild: !0,
        ...i,
        children: a.jsx(ie.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: c,
          onPointerMove: J(e.onPointerMove, (g) => {
            g.pointerType !== "touch" &&
              !d.current &&
              !s.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: J(e.onPointerLeave, () => {
            (o.onTriggerLeave(), (d.current = !1));
          }),
          onPointerDown: J(e.onPointerDown, () => {
            (o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 }));
          }),
          onFocus: J(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: J(e.onBlur, o.onClose),
          onClick: J(e.onClick, o.onClose),
        }),
      })
    );
  });
aE.displayName = su;
var lE = "TooltipPortal",
  [lk, cE] = ol(lE, { forceMount: void 0 }),
  Lo = "TooltipContent",
  Zg = v.forwardRef((e, t) => {
    const n = cE(Lo, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
      i = sl(Lo, e.__scopeTooltip);
    return a.jsx(qa, {
      present: r || i.open,
      children: i.disableHoverableContent
        ? a.jsx(Jg, { side: o, ...s, ref: t })
        : a.jsx(uE, { side: o, ...s, ref: t }),
    });
  }),
  uE = v.forwardRef((e, t) => {
    const n = sl(Lo, e.__scopeTooltip),
      r = qg(Lo, e.__scopeTooltip),
      o = v.useRef(null),
      s = Ee(t, o),
      [i, l] = v.useState(null),
      { trigger: c, onClose: u } = n,
      d = o.current,
      { onPointerInTransitChange: f } = r,
      g = v.useCallback(() => {
        (l(null), f(!1));
      }, [f]),
      p = v.useCallback(
        (S, m) => {
          const w = S.currentTarget,
            y = { x: S.clientX, y: S.clientY },
            h = hE(y, w.getBoundingClientRect()),
            x = vE(y, h),
            b = gE(m.getBoundingClientRect()),
            C = xE([...x, ...b]);
          (l(C), f(!0));
        },
        [f],
      );
    return (
      v.useEffect(() => () => g(), [g]),
      v.useEffect(() => {
        if (c && d) {
          const S = (w) => p(w, d),
            m = (w) => p(w, c);
          return (
            c.addEventListener("pointerleave", S),
            d.addEventListener("pointerleave", m),
            () => {
              (c.removeEventListener("pointerleave", S),
                d.removeEventListener("pointerleave", m));
            }
          );
        }
      }, [c, d, p, g]),
      v.useEffect(() => {
        if (i) {
          const S = (m) => {
            const w = m.target,
              y = { x: m.clientX, y: m.clientY },
              h =
                (c == null ? void 0 : c.contains(w)) ||
                (d == null ? void 0 : d.contains(w)),
              x = !yE(y, i);
            h ? g() : x && (g(), u());
          };
          return (
            document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
          );
        }
      }, [c, d, i, u, g]),
      a.jsx(Jg, { ...e, ref: s })
    );
  }),
  [dE, fE] = ol(Xg, { isInside: !1 }),
  pE = PS("TooltipContent"),
  Jg = v.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        ...l
      } = e,
      c = sl(Lo, n),
      u = Id(n),
      { onClose: d } = c;
    return (
      v.useEffect(
        () => (
          document.addEventListener(Rp, d),
          () => document.removeEventListener(Rp, d)
        ),
        [d],
      ),
      v.useEffect(() => {
        if (c.trigger) {
          const f = (g) => {
            const p = g.target;
            p != null && p.contains(c.trigger) && d();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [c.trigger, d]),
      a.jsx(Ka, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: a.jsxs(Qg, {
          "data-state": c.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            a.jsx(pE, { children: r }),
            a.jsx(dE, {
              scope: n,
              isInside: !0,
              children: a.jsx(qS, {
                id: c.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Zg.displayName = Lo;
var ey = "TooltipArrow",
  mE = v.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Id(n);
    return fE(ey, n).isInside ? null : a.jsx(Gg, { ...o, ...r, ref: t });
  });
mE.displayName = ey;
function hE(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function vE(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function gE(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function yE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const l = t[s],
      c = t[i],
      u = l.x,
      d = l.y,
      f = c.x,
      g = c.y;
    d > r != g > r && n < ((f - u) * (r - d)) / (g - d) + u && (o = !o);
  }
  return o;
}
function xE(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    wE(t)
  );
}
function wE(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1],
        i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var SE = Yg,
  ty = Zg;
const bE = SE,
  CE = v.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    a.jsx(ty, {
      ref: r,
      sideOffset: t,
      className: we(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e,
      ),
      ...n,
    }),
  );
CE.displayName = ty.displayName;
var il = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  EE = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Ln,
  Eu,
  um,
  jE =
    ((um = class {
      constructor() {
        te(this, Ln, EE);
        te(this, Eu, !1);
      }
      setTimeoutProvider(e) {
        Q(this, Ln, e);
      }
      setTimeout(e, t) {
        return P(this, Ln).setTimeout(e, t);
      }
      clearTimeout(e) {
        P(this, Ln).clearTimeout(e);
      }
      setInterval(e, t) {
        return P(this, Ln).setInterval(e, t);
      }
      clearInterval(e) {
        P(this, Ln).clearInterval(e);
      }
    }),
    (Ln = new WeakMap()),
    (Eu = new WeakMap()),
    um),
  iu = new jE();
function NE(e) {
  setTimeout(e, 0);
}
var al = typeof window > "u" || "Deno" in globalThis;
function It() {}
function PE(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function TE(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function kE(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function au(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function RE(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ap(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: s,
    queryKey: i,
    stale: l,
  } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== Ld(i, t.options)) return !1;
    } else if (!Ws(t.queryKey, i)) return !1;
  }
  if (n !== "all") {
    const c = t.isActive();
    if ((n === "active" && !c) || (n === "inactive" && c)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function Op(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Hs(t.options.mutationKey) !== Hs(s)) return !1;
    } else if (!Ws(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function Ld(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Hs)(e);
}
function Hs(e) {
  return JSON.stringify(e, (t, n) =>
    lu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n,
  );
}
function Ws(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((n) => Ws(e[n], t[n]))
        : !1;
}
var AE = Object.prototype.hasOwnProperty;
function ny(e, t) {
  if (e === t) return e;
  const n = Mp(e) && Mp(t);
  if (!n && !(lu(e) && lu(t))) return t;
  const o = (n ? e : Object.keys(e)).length,
    s = n ? t : Object.keys(t),
    i = s.length,
    l = n ? new Array(i) : {};
  let c = 0;
  for (let u = 0; u < i; u++) {
    const d = n ? u : s[u],
      f = e[d],
      g = t[d];
    if (f === g) {
      ((l[d] = f), (n ? u < o : AE.call(e, d)) && c++);
      continue;
    }
    if (
      f === null ||
      g === null ||
      typeof f != "object" ||
      typeof g != "object"
    ) {
      l[d] = g;
      continue;
    }
    const p = ny(f, g);
    ((l[d] = p), p === f && c++);
  }
  return o === i && c === o ? e : l;
}
function Mp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function lu(e) {
  if (!_p(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !_p(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function _p(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function OE(e) {
  return new Promise((t) => {
    iu.setTimeout(t, e);
  });
}
function ME(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? ny(e, t)
      : t;
}
function _E(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function IE(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Dd = Symbol();
function ry(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Dd
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
var xr,
  Dn,
  wo,
  dm,
  LE =
    ((dm = class extends il {
      constructor() {
        super();
        te(this, xr);
        te(this, Dn);
        te(this, wo);
        Q(this, wo, (t) => {
          if (!al && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, Dn) || this.setEventListener(P(this, wo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, Dn)) == null || t.call(this), Q(this, Dn, void 0));
      }
      setEventListener(t) {
        var n;
        (Q(this, wo, t),
          (n = P(this, Dn)) == null || n.call(this),
          Q(
            this,
            Dn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            }),
          ));
      }
      setFocused(t) {
        P(this, xr) !== t && (Q(this, xr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof P(this, xr) == "boolean"
          ? P(this, xr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (xr = new WeakMap()),
    (Dn = new WeakMap()),
    (wo = new WeakMap()),
    dm),
  oy = new LE();
function DE() {
  let e, t;
  const n = new Promise((o, s) => {
    ((e = o), (t = s));
  });
  ((n.status = "pending"), n.catch(() => {}));
  function r(o) {
    (Object.assign(n, o), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (o) => {
      (r({ status: "fulfilled", value: o }), e(o));
    }),
    (n.reject = (o) => {
      (r({ status: "rejected", reason: o }), t(o));
    }),
    n
  );
}
var FE = NE;
function zE() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = FE;
  const s = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    i = () => {
      const l = e;
      ((e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((c) => {
                n(c);
              });
            });
          }));
    };
  return {
    batch: (l) => {
      let c;
      t++;
      try {
        c = l();
      } finally {
        (t--, t || i());
      }
      return c;
    },
    batchCalls:
      (l) =>
      (...c) => {
        s(() => {
          l(...c);
        });
      },
    schedule: s,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var Ze = zE(),
  So,
  Fn,
  bo,
  fm,
  UE =
    ((fm = class extends il {
      constructor() {
        super();
        te(this, So, !0);
        te(this, Fn);
        te(this, bo);
        Q(this, bo, (t) => {
          if (!al && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", n),
                  window.removeEventListener("offline", r));
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, Fn) || this.setEventListener(P(this, bo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, Fn)) == null || t.call(this), Q(this, Fn, void 0));
      }
      setEventListener(t) {
        var n;
        (Q(this, bo, t),
          (n = P(this, Fn)) == null || n.call(this),
          Q(this, Fn, t(this.setOnline.bind(this))));
      }
      setOnline(t) {
        P(this, So) !== t &&
          (Q(this, So, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return P(this, So);
      }
    }),
    (So = new WeakMap()),
    (Fn = new WeakMap()),
    (bo = new WeakMap()),
    fm),
  Ta = new UE();
function $E(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function sy(e) {
  return (e ?? "online") === "online" ? Ta.isOnline() : !0;
}
var cu = class extends Error {
  constructor(e) {
    (super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent));
  }
};
function iy(e) {
  let t = !1,
    n = 0,
    r;
  const o = DE(),
    s = () => o.status !== "pending",
    i = (m) => {
      var w;
      if (!s()) {
        const y = new cu(m);
        (g(y), (w = e.onCancel) == null || w.call(e, y));
      }
    },
    l = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    u = () =>
      oy.isFocused() &&
      (e.networkMode === "always" || Ta.isOnline()) &&
      e.canRun(),
    d = () => sy(e.networkMode) && e.canRun(),
    f = (m) => {
      s() || (r == null || r(), o.resolve(m));
    },
    g = (m) => {
      s() || (r == null || r(), o.reject(m));
    },
    p = () =>
      new Promise((m) => {
        var w;
        ((r = (y) => {
          (s() || u()) && m(y);
        }),
          (w = e.onPause) == null || w.call(e));
      }).then(() => {
        var m;
        ((r = void 0), s() || (m = e.onContinue) == null || m.call(e));
      }),
    S = () => {
      if (s()) return;
      let m;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        m = w ?? e.fn();
      } catch (y) {
        m = Promise.reject(y);
      }
      Promise.resolve(m)
        .then(f)
        .catch((y) => {
          var j;
          if (s()) return;
          const h = e.retry ?? (al ? 0 : 3),
            x = e.retryDelay ?? $E,
            b = typeof x == "function" ? x(n, y) : x,
            C =
              h === !0 ||
              (typeof h == "number" && n < h) ||
              (typeof h == "function" && h(n, y));
          if (t || !C) {
            g(y);
            return;
          }
          (n++,
            (j = e.onFail) == null || j.call(e, n, y),
            OE(b)
              .then(() => (u() ? void 0 : p()))
              .then(() => {
                t ? g(y) : S();
              }));
        });
    };
  return {
    promise: o,
    status: () => o.status,
    cancel: i,
    continue: () => (r == null || r(), o),
    cancelRetry: l,
    continueRetry: c,
    canStart: d,
    start: () => (d() ? S() : p().then(S), o),
  };
}
var wr,
  pm,
  ay =
    ((pm = class {
      constructor() {
        te(this, wr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        (this.clearGcTimeout(),
          TE(this.gcTime) &&
            Q(
              this,
              wr,
              iu.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime),
            ));
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (al ? 1 / 0 : 5 * 60 * 1e3),
        );
      }
      clearGcTimeout() {
        P(this, wr) && (iu.clearTimeout(P(this, wr)), Q(this, wr, void 0));
      }
    }),
    (wr = new WeakMap()),
    pm),
  Sr,
  Co,
  wt,
  br,
  De,
  Ks,
  Cr,
  Lt,
  cn,
  mm,
  BE =
    ((mm = class extends ay {
      constructor(t) {
        super();
        te(this, Lt);
        te(this, Sr);
        te(this, Co);
        te(this, wt);
        te(this, br);
        te(this, De);
        te(this, Ks);
        te(this, Cr);
        (Q(this, Cr, !1),
          Q(this, Ks, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          Q(this, br, t.client),
          Q(this, wt, P(this, br).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          Q(this, Sr, Ip(this.options)),
          (this.state = t.state ?? P(this, Sr)),
          this.scheduleGc());
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = P(this, De)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        if (
          ((this.options = { ...P(this, Ks), ...t }),
          this.updateGcTime(this.options.gcTime),
          this.state && this.state.data === void 0)
        ) {
          const n = Ip(this.options);
          n.data !== void 0 &&
            (this.setData(n.data, { updatedAt: n.dataUpdatedAt, manual: !0 }),
            Q(this, Sr, n));
        }
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          P(this, wt).remove(this);
      }
      setData(t, n) {
        const r = ME(this.state.data, t, this.options);
        return (
          Ve(this, Lt, cn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Ve(this, Lt, cn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = P(this, De)) == null ? void 0 : r.promise;
        return (
          (o = P(this, De)) == null || o.cancel(t),
          n ? n.then(It).catch(It) : Promise.resolve()
        );
      }
      destroy() {
        (super.destroy(), this.cancel({ silent: !0 }));
      }
      reset() {
        (this.destroy(), this.setState(P(this, Sr)));
      }
      isActive() {
        return this.observers.some((t) => RE(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Dd ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => au(t.options.staleTime, this) === "static",
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
            ? !1
            : this.state.isInvalidated
              ? !0
              : !kE(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, De)) == null || n.continue());
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        (t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, De)) == null || n.continue());
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          P(this, wt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (P(this, De) &&
              (P(this, Cr)
                ? P(this, De).cancel({ revert: !0 })
                : P(this, De).cancelRetry()),
            this.scheduleGc()),
          P(this, wt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Ve(this, Lt, cn).call(this, { type: "invalidate" });
      }
      async fetch(t, n) {
        var c, u, d, f, g, p, S, m, w, y, h, x;
        if (
          this.state.fetchStatus !== "idle" &&
          ((c = P(this, De)) == null ? void 0 : c.status()) !== "rejected"
        ) {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, De))
            return (P(this, De).continueRetry(), P(this, De).promise);
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const b = this.observers.find((C) => C.options.queryFn);
          b && this.setOptions(b.options);
        }
        const r = new AbortController(),
          o = (b) => {
            Object.defineProperty(b, "signal", {
              enumerable: !0,
              get: () => (Q(this, Cr, !0), r.signal),
            });
          },
          s = () => {
            const b = ry(this.options, n),
              j = (() => {
                const E = {
                  client: P(this, br),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return (o(E), E);
              })();
            return (
              Q(this, Cr, !1),
              this.options.persister ? this.options.persister(b, j, this) : b(j)
            );
          },
          l = (() => {
            const b = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: P(this, br),
              state: this.state,
              fetchFn: s,
            };
            return (o(b), b);
          })();
        ((u = this.options.behavior) == null || u.onFetch(l, this),
          Q(this, Co, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((d = l.fetchOptions) == null ? void 0 : d.meta)) &&
            Ve(this, Lt, cn).call(this, {
              type: "fetch",
              meta: (f = l.fetchOptions) == null ? void 0 : f.meta,
            }),
          Q(
            this,
            De,
            iy({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: l.fetchFn,
              onCancel: (b) => {
                (b instanceof cu &&
                  b.revert &&
                  this.setState({ ...P(this, Co), fetchStatus: "idle" }),
                  r.abort());
              },
              onFail: (b, C) => {
                Ve(this, Lt, cn).call(this, {
                  type: "failed",
                  failureCount: b,
                  error: C,
                });
              },
              onPause: () => {
                Ve(this, Lt, cn).call(this, { type: "pause" });
              },
              onContinue: () => {
                Ve(this, Lt, cn).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
              canRun: () => !0,
            }),
          ));
        try {
          const b = await P(this, De).start();
          if (b === void 0)
            throw new Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(b),
            (p = (g = P(this, wt).config).onSuccess) == null ||
              p.call(g, b, this),
            (m = (S = P(this, wt).config).onSettled) == null ||
              m.call(S, b, this.state.error, this),
            b
          );
        } catch (b) {
          if (b instanceof cu) {
            if (b.silent) return P(this, De).promise;
            if (b.revert) {
              if (this.state.data === void 0) throw b;
              return this.state.data;
            }
          }
          throw (
            Ve(this, Lt, cn).call(this, { type: "error", error: b }),
            (y = (w = P(this, wt).config).onError) == null ||
              y.call(w, b, this),
            (x = (h = P(this, wt).config).onSettled) == null ||
              x.call(h, this.state.data, b, this),
            b
          );
        } finally {
          this.scheduleGc();
        }
      }
    }),
    (Sr = new WeakMap()),
    (Co = new WeakMap()),
    (wt = new WeakMap()),
    (br = new WeakMap()),
    (De = new WeakMap()),
    (Ks = new WeakMap()),
    (Cr = new WeakMap()),
    (Lt = new WeakSet()),
    (cn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...HE(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            const o = {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return (Q(this, Co, t.manual ? o : void 0), o);
          case "error":
            const s = t.error;
            return {
              ...r,
              error: s,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: s,
              fetchStatus: "idle",
              status: "error",
            };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      ((this.state = n(this.state)),
        Ze.batch(() => {
          (this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            P(this, wt).notify({ query: this, type: "updated", action: t }));
        }));
    }),
    mm);
function HE(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: sy(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function Ip(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
function Lp(e) {
  return {
    onFetch: (t, n) => {
      var d, f, g, p, S;
      const r = t.options,
        o =
          (g =
            (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : g.direction,
        s = ((p = t.state.data) == null ? void 0 : p.pages) || [],
        i = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        c = 0;
      const u = async () => {
        let m = !1;
        const w = (x) => {
            Object.defineProperty(x, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (m = !0)
                  : t.signal.addEventListener("abort", () => {
                      m = !0;
                    }),
                t.signal
              ),
            });
          },
          y = ry(t.options, t.fetchOptions),
          h = async (x, b, C) => {
            if (m) return Promise.reject();
            if (b == null && x.pages.length) return Promise.resolve(x);
            const E = (() => {
                const z = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: b,
                  direction: C ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (w(z), z);
              })(),
              k = await y(E),
              { maxPages: I } = t.options,
              R = C ? IE : _E;
            return {
              pages: R(x.pages, k, I),
              pageParams: R(x.pageParams, b, I),
            };
          };
        if (o && s.length) {
          const x = o === "backward",
            b = x ? WE : Dp,
            C = { pages: s, pageParams: i },
            j = b(r, C);
          l = await h(C, j, x);
        } else {
          const x = e ?? s.length;
          do {
            const b = c === 0 ? (i[0] ?? r.initialPageParam) : Dp(r, l);
            if (c > 0 && b == null) break;
            ((l = await h(l, b)), c++);
          } while (c < x);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var m, w;
            return (w = (m = t.options).persister) == null
              ? void 0
              : w.call(
                  m,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n,
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Dp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function WE(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var qs,
  qt,
  Ye,
  Er,
  Yt,
  Rn,
  hm,
  VE =
    ((hm = class extends ay {
      constructor(t) {
        super();
        te(this, Yt);
        te(this, qs);
        te(this, qt);
        te(this, Ye);
        te(this, Er);
        (Q(this, qs, t.client),
          (this.mutationId = t.mutationId),
          Q(this, Ye, t.mutationCache),
          Q(this, qt, []),
          (this.state = t.state || QE()),
          this.setOptions(t.options),
          this.scheduleGc());
      }
      setOptions(t) {
        ((this.options = t), this.updateGcTime(this.options.gcTime));
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        P(this, qt).includes(t) ||
          (P(this, qt).push(t),
          this.clearGcTimeout(),
          P(this, Ye).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        (Q(
          this,
          qt,
          P(this, qt).filter((n) => n !== t),
        ),
          this.scheduleGc(),
          P(this, Ye).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          }));
      }
      optionalRemove() {
        P(this, qt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : P(this, Ye).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = P(this, Er)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, l, c, u, d, f, g, p, S, m, w, y, h, x, b, C, j, E, k, I;
        const n = () => {
            Ve(this, Yt, Rn).call(this, { type: "continue" });
          },
          r = {
            client: P(this, qs),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey,
          };
        Q(
          this,
          Er,
          iy({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t, r)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (R, z) => {
              Ve(this, Yt, Rn).call(this, {
                type: "failed",
                failureCount: R,
                error: z,
              });
            },
            onPause: () => {
              Ve(this, Yt, Rn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Ye).canRun(this),
          }),
        );
        const o = this.state.status === "pending",
          s = !P(this, Er).canStart();
        try {
          if (o) n();
          else {
            (Ve(this, Yt, Rn).call(this, {
              type: "pending",
              variables: t,
              isPaused: s,
            }),
              await ((l = (i = P(this, Ye).config).onMutate) == null
                ? void 0
                : l.call(i, t, this, r)));
            const z = await ((u = (c = this.options).onMutate) == null
              ? void 0
              : u.call(c, t, r));
            z !== this.state.context &&
              Ve(this, Yt, Rn).call(this, {
                type: "pending",
                context: z,
                variables: t,
                isPaused: s,
              });
          }
          const R = await P(this, Er).start();
          return (
            await ((f = (d = P(this, Ye).config).onSuccess) == null
              ? void 0
              : f.call(d, R, t, this.state.context, this, r)),
            await ((p = (g = this.options).onSuccess) == null
              ? void 0
              : p.call(g, R, t, this.state.context, r)),
            await ((m = (S = P(this, Ye).config).onSettled) == null
              ? void 0
              : m.call(
                  S,
                  R,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  r,
                )),
            await ((y = (w = this.options).onSettled) == null
              ? void 0
              : y.call(w, R, null, t, this.state.context, r)),
            Ve(this, Yt, Rn).call(this, { type: "success", data: R }),
            R
          );
        } catch (R) {
          try {
            throw (
              await ((x = (h = P(this, Ye).config).onError) == null
                ? void 0
                : x.call(h, R, t, this.state.context, this, r)),
              await ((C = (b = this.options).onError) == null
                ? void 0
                : C.call(b, R, t, this.state.context, r)),
              await ((E = (j = P(this, Ye).config).onSettled) == null
                ? void 0
                : E.call(
                    j,
                    void 0,
                    R,
                    this.state.variables,
                    this.state.context,
                    this,
                    r,
                  )),
              await ((I = (k = this.options).onSettled) == null
                ? void 0
                : I.call(k, void 0, R, t, this.state.context, r)),
              R
            );
          } finally {
            Ve(this, Yt, Rn).call(this, { type: "error", error: R });
          }
        } finally {
          P(this, Ye).runNext(this);
        }
      }
    }),
    (qs = new WeakMap()),
    (qt = new WeakMap()),
    (Ye = new WeakMap()),
    (Er = new WeakMap()),
    (Yt = new WeakSet()),
    (Rn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      ((this.state = n(this.state)),
        Ze.batch(() => {
          (P(this, qt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            P(this, Ye).notify({ mutation: this, type: "updated", action: t }));
        }));
    }),
    hm);
function QE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var fn,
  Dt,
  Ys,
  vm,
  GE =
    ((vm = class extends il {
      constructor(t = {}) {
        super();
        te(this, fn);
        te(this, Dt);
        te(this, Ys);
        ((this.config = t),
          Q(this, fn, new Set()),
          Q(this, Dt, new Map()),
          Q(this, Ys, 0));
      }
      build(t, n, r) {
        const o = new VE({
          client: t,
          mutationCache: this,
          mutationId: ++ai(this, Ys)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return (this.add(o), o);
      }
      add(t) {
        P(this, fn).add(t);
        const n = ki(t);
        if (typeof n == "string") {
          const r = P(this, Dt).get(n);
          r ? r.push(t) : P(this, Dt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (P(this, fn).delete(t)) {
          const n = ki(t);
          if (typeof n == "string") {
            const r = P(this, Dt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && P(this, Dt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = ki(t);
        if (typeof n == "string") {
          const r = P(this, Dt).get(n),
            o =
              r == null ? void 0 : r.find((s) => s.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = ki(t);
        if (typeof n == "string") {
          const o =
            (r = P(this, Dt).get(n)) == null
              ? void 0
              : r.find((s) => s !== t && s.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ze.batch(() => {
          (P(this, fn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            P(this, fn).clear(),
            P(this, Dt).clear());
        });
      }
      getAll() {
        return Array.from(P(this, fn));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Op(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Op(t, n));
      }
      notify(t) {
        Ze.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ze.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(It))),
        );
      }
    }),
    (fn = new WeakMap()),
    (Dt = new WeakMap()),
    (Ys = new WeakMap()),
    vm);
function ki(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
var Xt,
  gm,
  KE =
    ((gm = class extends il {
      constructor(t = {}) {
        super();
        te(this, Xt);
        ((this.config = t), Q(this, Xt, new Map()));
      }
      build(t, n, r) {
        const o = n.queryKey,
          s = n.queryHash ?? Ld(o, n);
        let i = this.get(s);
        return (
          i ||
            ((i = new BE({
              client: t,
              queryKey: o,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(i)),
          i
        );
      }
      add(t) {
        P(this, Xt).has(t.queryHash) ||
          (P(this, Xt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = P(this, Xt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && P(this, Xt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ze.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return P(this, Xt).get(t);
      }
      getAll() {
        return [...P(this, Xt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Ap(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Ap(t, r)) : n;
      }
      notify(t) {
        Ze.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ze.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ze.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Xt = new WeakMap()),
    gm),
  Te,
  zn,
  Un,
  Eo,
  jo,
  $n,
  No,
  Po,
  ym,
  qE =
    ((ym = class {
      constructor(e = {}) {
        te(this, Te);
        te(this, zn);
        te(this, Un);
        te(this, Eo);
        te(this, jo);
        te(this, $n);
        te(this, No);
        te(this, Po);
        (Q(this, Te, e.queryCache || new KE()),
          Q(this, zn, e.mutationCache || new GE()),
          Q(this, Un, e.defaultOptions || {}),
          Q(this, Eo, new Map()),
          Q(this, jo, new Map()),
          Q(this, $n, 0));
      }
      mount() {
        (ai(this, $n)._++,
          P(this, $n) === 1 &&
            (Q(
              this,
              No,
              oy.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, Te).onFocus());
              }),
            ),
            Q(
              this,
              Po,
              Ta.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, Te).onOnline());
              }),
            )));
      }
      unmount() {
        var e, t;
        (ai(this, $n)._--,
          P(this, $n) === 0 &&
            ((e = P(this, No)) == null || e.call(this),
            Q(this, No, void 0),
            (t = P(this, Po)) == null || t.call(this),
            Q(this, Po, void 0)));
      }
      isFetching(e) {
        return P(this, Te).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return P(this, zn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, Te).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = P(this, Te).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(au(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return P(this, Te)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = P(this, Te).get(r.queryHash),
          s = o == null ? void 0 : o.state.data,
          i = PE(t, s);
        if (i !== void 0)
          return P(this, Te)
            .build(this, r)
            .setData(i, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ze.batch(() =>
          P(this, Te)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, Te).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = P(this, Te);
        Ze.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = P(this, Te);
        return Ze.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          ),
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Ze.batch(() =>
            P(this, Te)
              .findAll(e)
              .map((o) => o.cancel(n)),
          );
        return Promise.all(r).then(It).catch(It);
      }
      invalidateQueries(e, t = {}) {
        return Ze.batch(
          () => (
            P(this, Te)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t,
                )
          ),
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Ze.batch(() =>
            P(this, Te)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let s = o.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(It)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : s
                );
              }),
          );
        return Promise.all(r).then(It);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, Te).build(this, t);
        return n.isStaleByTime(au(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(It).catch(It);
      }
      fetchInfiniteQuery(e) {
        return ((e.behavior = Lp(e.pages)), this.fetchQuery(e));
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(It).catch(It);
      }
      ensureInfiniteQueryData(e) {
        return ((e.behavior = Lp(e.pages)), this.ensureQueryData(e));
      }
      resumePausedMutations() {
        return Ta.isOnline()
          ? P(this, zn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return P(this, Te);
      }
      getMutationCache() {
        return P(this, zn);
      }
      getDefaultOptions() {
        return P(this, Un);
      }
      setDefaultOptions(e) {
        Q(this, Un, e);
      }
      setQueryDefaults(e, t) {
        P(this, Eo).set(Hs(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...P(this, Eo).values()],
          n = {};
        return (
          t.forEach((r) => {
            Ws(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        P(this, jo).set(Hs(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...P(this, jo).values()],
          n = {};
        return (
          t.forEach((r) => {
            Ws(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...P(this, Un).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Ld(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Dd && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...P(this, Un).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        (P(this, Te).clear(), P(this, zn).clear());
      }
    }),
    (Te = new WeakMap()),
    (zn = new WeakMap()),
    (Un = new WeakMap()),
    (Eo = new WeakMap()),
    (jo = new WeakMap()),
    ($n = new WeakMap()),
    (No = new WeakMap()),
    (Po = new WeakMap()),
    ym),
  YE = v.createContext(void 0),
  XE = ({ client: e, children: t }) => (
    v.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    a.jsx(YE.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vs() {
  return (
    (Vs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vs.apply(this, arguments)
  );
}
var Wn;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Wn || (Wn = {}));
const Fp = "popstate";
function ZE(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: l } = r.location;
    return uu(
      "",
      { pathname: s, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default",
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : ka(o);
  }
  return ej(t, n, null, e);
}
function _e(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ly(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function JE() {
  return Math.random().toString(36).substr(2, 8);
}
function zp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function uu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Vs(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Vo(t) : t,
      { state: n, key: (t && t.key) || r || JE() },
    )
  );
}
function ka(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Vo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function ej(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    l = Wn.Pop,
    c = null,
    u = d();
  u == null && ((u = 0), i.replaceState(Vs({}, i.state, { idx: u }), ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    l = Wn.Pop;
    let w = d(),
      y = w == null ? null : w - u;
    ((u = w), c && c({ action: l, location: m.location, delta: y }));
  }
  function g(w, y) {
    l = Wn.Push;
    let h = uu(m.location, w, y);
    u = d() + 1;
    let x = zp(h, u),
      b = m.createHref(h);
    try {
      i.pushState(x, "", b);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(b);
    }
    s && c && c({ action: l, location: m.location, delta: 1 });
  }
  function p(w, y) {
    l = Wn.Replace;
    let h = uu(m.location, w, y);
    u = d();
    let x = zp(h, u),
      b = m.createHref(h);
    (i.replaceState(x, "", b),
      s && c && c({ action: l, location: m.location, delta: 0 }));
  }
  function S(w) {
    let y = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof w == "string" ? w : ka(w);
    return (
      (h = h.replace(/ $/, "%20")),
      _e(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          h,
      ),
      new URL(h, y)
    );
  }
  let m = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(w) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Fp, f),
        (c = w),
        () => {
          (o.removeEventListener(Fp, f), (c = null));
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: S,
    encodeLocation(w) {
      let y = S(w);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: g,
    replace: p,
    go(w) {
      return i.go(w);
    },
  };
  return m;
}
var Up;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Up || (Up = {}));
function tj(e, t, n) {
  return (n === void 0 && (n = "/"), nj(e, t, n));
}
function nj(e, t, n, r) {
  let o = typeof t == "string" ? Vo(t) : t,
    s = Fd(o.pathname || "/", n);
  if (s == null) return null;
  let i = cy(e);
  rj(i);
  let l = null;
  for (let c = 0; l == null && c < i.length; ++c) {
    let u = hj(s);
    l = fj(i[c], u);
  }
  return l;
}
function cy(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let o = (s, i, l) => {
    let c = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    c.relativePath.startsWith("/") &&
      (_e(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = Jn([r, c.relativePath]),
      d = n.concat(c);
    (s.children &&
      s.children.length > 0 &&
      (_e(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      cy(s.children, t, d, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: uj(u, s.index), routesMeta: d }));
  };
  return (
    e.forEach((s, i) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
      else for (let c of uy(s.path)) o(s, i, c);
    }),
    t
  );
}
function uy(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = uy(r.join("/")),
    l = [];
  return (
    l.push(...i.map((c) => (c === "" ? s : [s, c].join("/")))),
    o && l.push(...i),
    l.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function rj(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : dj(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const oj = /^:[\w-]+$/,
  sj = 3,
  ij = 2,
  aj = 1,
  lj = 10,
  cj = -2,
  $p = (e) => e === "*";
function uj(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some($p) && (r += cj),
    t && (r += ij),
    n
      .filter((o) => !$p(o))
      .reduce((o, s) => o + (oj.test(s) ? sj : s === "" ? aj : lj), r)
  );
}
function dj(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function fj(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    s = "/",
    i = [];
  for (let l = 0; l < r.length; ++l) {
    let c = r[l],
      u = l === r.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      f = pj(
        { path: c.relativePath, caseSensitive: c.caseSensitive, end: u },
        d,
      ),
      g = c.route;
    if (!f) return null;
    (Object.assign(o, f.params),
      i.push({
        params: o,
        pathname: Jn([s, f.pathname]),
        pathnameBase: xj(Jn([s, f.pathnameBase])),
        route: g,
      }),
      f.pathnameBase !== "/" && (s = Jn([s, f.pathnameBase])));
  }
  return i;
}
function pj(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = mj(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: g, isOptional: p } = d;
      if (g === "*") {
        let m = l[f] || "";
        i = s.slice(0, s.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const S = l[f];
      return (
        p && !S ? (u[g] = void 0) : (u[g] = (S || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function mj(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ly(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, l, c) => (
            r.push({ paramName: l, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function hj(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ly(
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
function Fd(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function vj(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Vo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : gj(n, t)) : t,
    search: wj(r),
    hash: Sj(o),
  };
}
function gj(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ql(e, t, n, r) {
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
function yj(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function dy(e, t) {
  let n = yj(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function fy(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Vo(e))
    : ((o = Vs({}, e)),
      _e(
        !o.pathname || !o.pathname.includes("?"),
        ql("?", "pathname", "search", o),
      ),
      _e(
        !o.pathname || !o.pathname.includes("#"),
        ql("#", "pathname", "hash", o),
      ),
      _e(!o.search || !o.search.includes("#"), ql("#", "search", "hash", o)));
  let s = e === "" || o.pathname === "",
    i = s ? "/" : o.pathname,
    l;
  if (i == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let g = i.split("/");
      for (; g[0] === ".."; ) (g.shift(), (f -= 1));
      o.pathname = g.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = vj(o, l),
    u = i && i !== "/" && i.endsWith("/"),
    d = (s || i === ".") && n.endsWith("/");
  return (!c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c);
}
const Jn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  xj = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  wj = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Sj = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function bj(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const py = ["post", "put", "patch", "delete"];
new Set(py);
const Cj = ["get", ...py];
new Set(Cj);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qs() {
  return (
    (Qs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qs.apply(this, arguments)
  );
}
const zd = v.createContext(null),
  Ej = v.createContext(null),
  zr = v.createContext(null),
  ll = v.createContext(null),
  Ur = v.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  my = v.createContext(null);
function jj(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  oi() || _e(!1);
  let { basename: r, navigator: o } = v.useContext(zr),
    { hash: s, pathname: i, search: l } = vy(e, { relative: n }),
    c = i;
  return (
    r !== "/" && (c = i === "/" ? r : Jn([r, i])),
    o.createHref({ pathname: c, search: l, hash: s })
  );
}
function oi() {
  return v.useContext(ll) != null;
}
function si() {
  return (oi() || _e(!1), v.useContext(ll).location);
}
function hy(e) {
  v.useContext(zr).static || v.useLayoutEffect(e);
}
function Nj() {
  let { isDataRoute: e } = v.useContext(Ur);
  return e ? zj() : Pj();
}
function Pj() {
  oi() || _e(!1);
  let e = v.useContext(zd),
    { basename: t, future: n, navigator: r } = v.useContext(zr),
    { matches: o } = v.useContext(Ur),
    { pathname: s } = si(),
    i = JSON.stringify(dy(o, n.v7_relativeSplatPath)),
    l = v.useRef(!1);
  return (
    hy(() => {
      l.current = !0;
    }),
    v.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = fy(u, JSON.parse(i), s, d.relative === "path");
        (e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Jn([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d));
      },
      [t, r, i, s, e],
    )
  );
}
function vy(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = v.useContext(zr),
    { matches: o } = v.useContext(Ur),
    { pathname: s } = si(),
    i = JSON.stringify(dy(o, r.v7_relativeSplatPath));
  return v.useMemo(() => fy(e, JSON.parse(i), s, n === "path"), [e, i, s, n]);
}
function Tj(e, t) {
  return kj(e, t);
}
function kj(e, t, n, r) {
  oi() || _e(!1);
  let { navigator: o } = v.useContext(zr),
    { matches: s } = v.useContext(Ur),
    i = s[s.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let c = i ? i.pathnameBase : "/";
  i && i.route;
  let u = si(),
    d;
  if (t) {
    var f;
    let w = typeof t == "string" ? Vo(t) : t;
    (c === "/" || ((f = w.pathname) != null && f.startsWith(c)) || _e(!1),
      (d = w));
  } else d = u;
  let g = d.pathname || "/",
    p = g;
  if (c !== "/") {
    let w = c.replace(/^\//, "").split("/");
    p = "/" + g.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let S = tj(e, { pathname: p }),
    m = _j(
      S &&
        S.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Jn([
              c,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? c
                : Jn([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      s,
      n,
      r,
    );
  return t && m
    ? v.createElement(
        ll.Provider,
        {
          value: {
            location: Qs(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d,
            ),
            navigationType: Wn.Pop,
          },
        },
        m,
      )
    : m;
}
function Rj() {
  let e = Fj(),
    t = bj(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return v.createElement(
    v.Fragment,
    null,
    v.createElement("h2", null, "Unexpected Application Error!"),
    v.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? v.createElement("pre", { style: o }, n) : null,
    null,
  );
}
const Aj = v.createElement(Rj, null);
class Oj extends v.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
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
      ? v.createElement(
          Ur.Provider,
          { value: this.props.routeContext },
          v.createElement(my.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Mj(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = v.useContext(zd);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    v.createElement(Ur.Provider, { value: t }, r)
  );
}
function _j(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = i.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0,
    );
    (d >= 0 || _e(!1), (i = i.slice(0, Math.min(i.length, d + 1))));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let f = i[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: g, errors: p } = n,
          S =
            f.route.loader &&
            g[f.route.id] === void 0 &&
            (!p || p[f.route.id] === void 0);
        if (f.route.lazy || S) {
          ((c = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]));
          break;
        }
      }
    }
  return i.reduceRight((d, f, g) => {
    let p,
      S = !1,
      m = null,
      w = null;
    n &&
      ((p = l && f.route.id ? l[f.route.id] : void 0),
      (m = f.route.errorElement || Aj),
      c &&
        (u < 0 && g === 0
          ? (Uj("route-fallback"), (S = !0), (w = null))
          : u === g &&
            ((S = !0), (w = f.route.hydrateFallbackElement || null))));
    let y = t.concat(i.slice(0, g + 1)),
      h = () => {
        let x;
        return (
          p
            ? (x = m)
            : S
              ? (x = w)
              : f.route.Component
                ? (x = v.createElement(f.route.Component, null))
                : f.route.element
                  ? (x = f.route.element)
                  : (x = d),
          v.createElement(Mj, {
            match: f,
            routeContext: { outlet: d, matches: y, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || g === 0)
      ? v.createElement(Oj, {
          location: n.location,
          revalidation: n.revalidation,
          component: m,
          error: p,
          children: h(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var gy = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(gy || {}),
  yy = (function (e) {
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
  })(yy || {});
function Ij(e) {
  let t = v.useContext(zd);
  return (t || _e(!1), t);
}
function Lj(e) {
  let t = v.useContext(Ej);
  return (t || _e(!1), t);
}
function Dj(e) {
  let t = v.useContext(Ur);
  return (t || _e(!1), t);
}
function xy(e) {
  let t = Dj(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || _e(!1), n.route.id);
}
function Fj() {
  var e;
  let t = v.useContext(my),
    n = Lj(),
    r = xy();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function zj() {
  let { router: e } = Ij(gy.UseNavigateStable),
    t = xy(yy.UseNavigateStable),
    n = v.useRef(!1);
  return (
    hy(() => {
      n.current = !0;
    }),
    v.useCallback(
      function (o, s) {
        (s === void 0 && (s = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Qs({ fromRouteId: t }, s))));
      },
      [e, t],
    )
  );
}
const Bp = {};
function Uj(e, t, n) {
  Bp[e] || (Bp[e] = !0);
}
function $j(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function ge(e) {
  _e(!1);
}
function Bj(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Wn.Pop,
    navigator: s,
    static: i = !1,
    future: l,
  } = e;
  oi() && _e(!1);
  let c = t.replace(/^\/*/, "/"),
    u = v.useMemo(
      () => ({
        basename: c,
        navigator: s,
        static: i,
        future: Qs({ v7_relativeSplatPath: !1 }, l),
      }),
      [c, l, s, i],
    );
  typeof r == "string" && (r = Vo(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: g = "",
      state: p = null,
      key: S = "default",
    } = r,
    m = v.useMemo(() => {
      let w = Fd(d, c);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: g, state: p, key: S },
            navigationType: o,
          };
    }, [c, d, f, g, p, S, o]);
  return m == null
    ? null
    : v.createElement(
        zr.Provider,
        { value: u },
        v.createElement(ll.Provider, { children: n, value: m }),
      );
}
function Hj(e) {
  let { children: t, location: n } = e;
  return Tj(du(t), n);
}
new Promise(() => {});
function du(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    v.Children.forEach(e, (r, o) => {
      if (!v.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === v.Fragment) {
        n.push.apply(n, du(r.props.children, s));
        return;
      }
      (r.type !== ge && _e(!1), !r.props.index || !r.props.children || _e(!1));
      let i = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (i.children = du(r.props.children, s)), n.push(i));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fu() {
  return (
    (fu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fu.apply(this, arguments)
  );
}
function Wj(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    s;
  for (s = 0; s < r.length; s++)
    ((o = r[s]), !(t.indexOf(o) >= 0) && (n[o] = e[o]));
  return n;
}
function Vj(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Qj(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Vj(e);
}
const Gj = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Kj = "6";
try {
  window.__reactRouterVersion = Kj;
} catch {}
const qj = "startTransition",
  Hp = ku[qj];
function Yj(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = v.useRef();
  s.current == null && (s.current = ZE({ window: o, v5Compat: !0 }));
  let i = s.current,
    [l, c] = v.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    d = v.useCallback(
      (f) => {
        u && Hp ? Hp(() => c(f)) : c(f);
      },
      [c, u],
    );
  return (
    v.useLayoutEffect(() => i.listen(d), [i, d]),
    v.useEffect(() => $j(r), [r]),
    v.createElement(Bj, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
const Xj =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Zj = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Y = v.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: s,
        replace: i,
        state: l,
        target: c,
        to: u,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      g = Wj(t, Gj),
      { basename: p } = v.useContext(zr),
      S,
      m = !1;
    if (typeof u == "string" && Zj.test(u) && ((S = u), Xj))
      try {
        let x = new URL(window.location.href),
          b = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u),
          C = Fd(b.pathname, p);
        b.origin === x.origin && C != null
          ? (u = C + b.search + b.hash)
          : (m = !0);
      } catch {}
    let w = jj(u, { relative: o }),
      y = Jj(u, {
        replace: i,
        state: l,
        target: c,
        preventScrollReset: d,
        relative: o,
        viewTransition: f,
      });
    function h(x) {
      (r && r(x), x.defaultPrevented || y(x));
    }
    return v.createElement(
      "a",
      fu({}, g, { href: S || w, onClick: m || s ? r : h, ref: n, target: c }),
    );
  });
var Wp;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Wp || (Wp = {}));
var Vp;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Vp || (Vp = {}));
function Jj(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: s,
      relative: i,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    c = Nj(),
    u = si(),
    d = vy(e, { relative: i });
  return v.useCallback(
    (f) => {
      if (Qj(f, n)) {
        f.preventDefault();
        let g = r !== void 0 ? r : ka(u) === ka(d);
        c(e, {
          replace: g,
          state: o,
          preventScrollReset: s,
          relative: i,
          viewTransition: l,
        });
      }
    },
    [u, c, d, r, o, n, e, s, i, l],
  );
}
const eN = cg(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  wy = v.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
      const i = r ? jS : "button";
      return a.jsx(i, {
        className: we(eN({ variant: t, size: n, className: e })),
        ref: s,
        ...o,
      });
    },
  );
wy.displayName = "Button";
const hr = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("div", {
    ref: n,
    className: we(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e,
    ),
    ...t,
  }),
);
hr.displayName = "Card";
const tN = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("div", {
    ref: n,
    className: we("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
tN.displayName = "CardHeader";
const nN = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("h3", {
    ref: n,
    className: we("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
nN.displayName = "CardTitle";
const rN = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("p", {
    ref: n,
    className: we("text-sm text-muted-foreground", e),
    ...t,
  }),
);
rN.displayName = "CardDescription";
const oN = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("div", { ref: n, className: we("p-6 pt-0", e), ...t }),
);
oN.displayName = "CardContent";
const sN = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("div", {
    ref: n,
    className: we("flex items-center p-6 pt-0", e),
    ...t,
  }),
);
sN.displayName = "CardFooter";
const ds = v.forwardRef(({ className: e, type: t, ...n }, r) =>
  a.jsx("input", {
    type: t,
    className: we(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e,
    ),
    ref: r,
    ...n,
  }),
);
ds.displayName = "Input";
const Sy = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx("textarea", {
    className: we(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e,
    ),
    ref: n,
    ...t,
  }),
);
Sy.displayName = "Textarea";
function Qp(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var iN = v.createContext(void 0);
function aN(e) {
  const t = v.useContext(iN);
  return e || t || "ltr";
}
var Yl = 0;
function lN() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Gp()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Gp()),
      Yl++,
      () => {
        (Yl === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Yl--);
      }
    );
  }, []);
}
function Gp() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Xl = "focusScope.autoFocusOnMount",
  Zl = "focusScope.autoFocusOnUnmount",
  Kp = { bubbles: !1, cancelable: !0 },
  cN = "FocusScope",
  by = v.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...i
      } = e,
      [l, c] = v.useState(null),
      u = Wt(o),
      d = Wt(s),
      f = v.useRef(null),
      g = Ee(t, (m) => c(m)),
      p = v.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (v.useEffect(() => {
      if (r) {
        let m = function (x) {
            if (p.paused || !l) return;
            const b = x.target;
            l.contains(b) ? (f.current = b) : An(f.current, { select: !0 });
          },
          w = function (x) {
            if (p.paused || !l) return;
            const b = x.relatedTarget;
            b !== null && (l.contains(b) || An(f.current, { select: !0 }));
          },
          y = function (x) {
            if (document.activeElement === document.body)
              for (const C of x) C.removedNodes.length > 0 && An(l);
          };
        (document.addEventListener("focusin", m),
          document.addEventListener("focusout", w));
        const h = new MutationObserver(y);
        return (
          l && h.observe(l, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", w),
              h.disconnect());
          }
        );
      }
    }, [r, l, p.paused]),
      v.useEffect(() => {
        if (l) {
          Yp.add(p);
          const m = document.activeElement;
          if (!l.contains(m)) {
            const y = new CustomEvent(Xl, Kp);
            (l.addEventListener(Xl, u),
              l.dispatchEvent(y),
              y.defaultPrevented ||
                (uN(hN(Cy(l)), { select: !0 }),
                document.activeElement === m && An(l)));
          }
          return () => {
            (l.removeEventListener(Xl, u),
              setTimeout(() => {
                const y = new CustomEvent(Zl, Kp);
                (l.addEventListener(Zl, d),
                  l.dispatchEvent(y),
                  y.defaultPrevented || An(m ?? document.body, { select: !0 }),
                  l.removeEventListener(Zl, d),
                  Yp.remove(p));
              }, 0));
          };
        }
      }, [l, u, d, p]));
    const S = v.useCallback(
      (m) => {
        if ((!n && !r) || p.paused) return;
        const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
          y = document.activeElement;
        if (w && y) {
          const h = m.currentTarget,
            [x, b] = dN(h);
          x && b
            ? !m.shiftKey && y === b
              ? (m.preventDefault(), n && An(x, { select: !0 }))
              : m.shiftKey &&
                y === x &&
                (m.preventDefault(), n && An(b, { select: !0 }))
            : y === h && m.preventDefault();
        }
      },
      [n, r, p.paused],
    );
    return a.jsx(ie.div, { tabIndex: -1, ...i, ref: g, onKeyDown: S });
  });
by.displayName = cN;
function uN(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((An(r, { select: t }), document.activeElement !== n)) return;
}
function dN(e) {
  const t = Cy(e),
    n = qp(t, e),
    r = qp(t.reverse(), e);
  return [n, r];
}
function Cy(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function qp(e, t) {
  for (const n of e) if (!fN(n, { upTo: t })) return n;
}
function fN(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function pN(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function An(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && pN(e) && t && e.select());
  }
}
var Yp = mN();
function mN() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && (n == null || n.pause()), (e = Xp(e, t)), e.unshift(t));
    },
    remove(t) {
      var n;
      ((e = Xp(e, t)), (n = e[0]) == null || n.resume());
    },
  };
}
function Xp(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function hN(e) {
  return e.filter((t) => t.tagName !== "A");
}
function vN(e) {
  const t = v.useRef({ value: e, previous: e });
  return v.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var gN = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Qr = new WeakMap(),
  Ri = new WeakMap(),
  Ai = {},
  Jl = 0,
  Ey = function (e) {
    return e && (e.host || Ey(e.parentNode));
  },
  yN = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Ey(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  xN = function (e, t, n, r) {
    var o = yN(t, Array.isArray(e) ? e : [e]);
    Ai[n] || (Ai[n] = new WeakMap());
    var s = Ai[n],
      i = [],
      l = new Set(),
      c = new Set(o),
      u = function (f) {
        !f || l.has(f) || (l.add(f), u(f.parentNode));
      };
    o.forEach(u);
    var d = function (f) {
      !f ||
        c.has(f) ||
        Array.prototype.forEach.call(f.children, function (g) {
          if (l.has(g)) d(g);
          else
            try {
              var p = g.getAttribute(r),
                S = p !== null && p !== "false",
                m = (Qr.get(g) || 0) + 1,
                w = (s.get(g) || 0) + 1;
              (Qr.set(g, m),
                s.set(g, w),
                i.push(g),
                m === 1 && S && Ri.set(g, !0),
                w === 1 && g.setAttribute(n, "true"),
                S || g.setAttribute(r, "true"));
            } catch (y) {
              console.error("aria-hidden: cannot operate on ", g, y);
            }
        });
    };
    return (
      d(t),
      l.clear(),
      Jl++,
      function () {
        (i.forEach(function (f) {
          var g = Qr.get(f) - 1,
            p = s.get(f) - 1;
          (Qr.set(f, g),
            s.set(f, p),
            g || (Ri.has(f) || f.removeAttribute(r), Ri.delete(f)),
            p || f.removeAttribute(n));
        }),
          Jl--,
          Jl ||
            ((Qr = new WeakMap()),
            (Qr = new WeakMap()),
            (Ri = new WeakMap()),
            (Ai = {})));
      }
    );
  },
  wN = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = gN(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))),
        xN(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Jt = function () {
    return (
      (Jt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var s in n)
              Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
          }
          return t;
        }),
      Jt.apply(this, arguments)
    );
  };
function jy(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function SN(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var Yi = "right-scroll-bar-position",
  Xi = "width-before-scroll-bar",
  bN = "with-scroll-bars-hidden",
  CN = "--removed-body-scroll-bar-size";
function ec(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function EN(e, t) {
  var n = v.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var jN = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  Zp = new WeakMap();
function NN(e, t) {
  var n = EN(null, function (r) {
    return e.forEach(function (o) {
      return ec(o, r);
    });
  });
  return (
    jN(
      function () {
        var r = Zp.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          (o.forEach(function (l) {
            s.has(l) || ec(l, null);
          }),
            s.forEach(function (l) {
              o.has(l) || ec(l, i);
            }));
        }
        Zp.set(n, e);
      },
      [e],
    ),
    n
  );
}
function PN(e) {
  return e;
}
function TN(e, t) {
  t === void 0 && (t = PN);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var i = t(s, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (l) {
              return l !== i;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var i = n;
          ((n = []), i.forEach(s));
        }
        n = {
          push: function (l) {
            return s(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var i = [];
        if (n.length) {
          var l = n;
          ((n = []), l.forEach(s), (i = n));
        }
        var c = function () {
            var d = i;
            ((i = []), d.forEach(s));
          },
          u = function () {
            return Promise.resolve().then(c);
          };
        (u(),
          (n = {
            push: function (d) {
              (i.push(d), u());
            },
            filter: function (d) {
              return ((i = i.filter(d)), n);
            },
          }));
      },
    };
  return o;
}
function kN(e) {
  e === void 0 && (e = {});
  var t = TN(null);
  return ((t.options = Jt({ async: !0, ssr: !1 }, e)), t);
}
var Ny = function (e) {
  var t = e.sideCar,
    n = jy(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return v.createElement(r, Jt({}, n));
};
Ny.isSideCarExport = !0;
function RN(e, t) {
  return (e.useMedium(t), Ny);
}
var Py = kN(),
  tc = function () {},
  cl = v.forwardRef(function (e, t) {
    var n = v.useRef(null),
      r = v.useState({
        onScrollCapture: tc,
        onWheelCapture: tc,
        onTouchMoveCapture: tc,
      }),
      o = r[0],
      s = r[1],
      i = e.forwardProps,
      l = e.children,
      c = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      g = e.sideCar,
      p = e.noRelative,
      S = e.noIsolation,
      m = e.inert,
      w = e.allowPinchZoom,
      y = e.as,
      h = y === void 0 ? "div" : y,
      x = e.gapMode,
      b = jy(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      C = g,
      j = NN([n, t]),
      E = Jt(Jt({}, b), o);
    return v.createElement(
      v.Fragment,
      null,
      d &&
        v.createElement(C, {
          sideCar: Py,
          removeScrollBar: u,
          shards: f,
          noRelative: p,
          noIsolation: S,
          inert: m,
          setCallbacks: s,
          allowPinchZoom: !!w,
          lockRef: n,
          gapMode: x,
        }),
      i
        ? v.cloneElement(v.Children.only(l), Jt(Jt({}, E), { ref: j }))
        : v.createElement(h, Jt({}, E, { className: c, ref: j }), l),
    );
  });
cl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
cl.classNames = { fullWidth: Xi, zeroRight: Yi };
var AN = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function ON() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = AN();
  return (t && e.setAttribute("nonce", t), e);
}
function MN(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function _N(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var IN = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = ON()) && (MN(t, n), _N(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  LN = function () {
    var e = IN();
    return function (t, n) {
      v.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  Ty = function () {
    var e = LN(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return (e(r, o), null);
      };
    return t;
  },
  DN = { left: 0, top: 0, right: 0, gap: 0 },
  nc = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  FN = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [nc(n), nc(r), nc(o)];
  },
  zN = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return DN;
    var t = FN(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  UN = Ty(),
  yo = "data-scroll-locked",
  $N = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          bN,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          yo,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  s,
                  `px;
    padding-right: `,
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          Yi,
          ` {
    right: `,
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          Xi,
          ` {
    margin-right: `,
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Yi, " .")
        .concat(
          Yi,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Xi, " .")
        .concat(
          Xi,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          yo,
          `] {
    `,
        )
        .concat(CN, ": ")
        .concat(
          l,
          `px;
  }
`,
        )
    );
  },
  Jp = function () {
    var e = parseInt(document.body.getAttribute(yo) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  BN = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(yo, (Jp() + 1).toString()),
        function () {
          var e = Jp() - 1;
          e <= 0
            ? document.body.removeAttribute(yo)
            : document.body.setAttribute(yo, e.toString());
        }
      );
    }, []);
  },
  HN = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    BN();
    var s = v.useMemo(
      function () {
        return zN(o);
      },
      [o],
    );
    return v.createElement(UN, { styles: $N(s, !t, o, n ? "" : "!important") });
  },
  pu = !1;
if (typeof window < "u")
  try {
    var Oi = Object.defineProperty({}, "passive", {
      get: function () {
        return ((pu = !0), !0);
      },
    });
    (window.addEventListener("test", Oi, Oi),
      window.removeEventListener("test", Oi, Oi));
  } catch {
    pu = !1;
  }
var Gr = pu ? { passive: !1 } : !1,
  WN = function (e) {
    return e.tagName === "TEXTAREA";
  },
  ky = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !WN(e) && n[t] === "visible")
    );
  },
  VN = function (e) {
    return ky(e, "overflowY");
  },
  QN = function (e) {
    return ky(e, "overflowX");
  },
  em = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Ry(e, r);
      if (o) {
        var s = Ay(e, r),
          i = s[1],
          l = s[2];
        if (i > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  GN = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  KN = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Ry = function (e, t) {
    return e === "v" ? VN(t) : QN(t);
  },
  Ay = function (e, t) {
    return e === "v" ? GN(t) : KN(t);
  },
  qN = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  YN = function (e, t, n, r, o) {
    var s = qN(e, window.getComputedStyle(t).direction),
      i = s * r,
      l = n.target,
      c = t.contains(l),
      u = !1,
      d = i > 0,
      f = 0,
      g = 0;
    do {
      if (!l) break;
      var p = Ay(e, l),
        S = p[0],
        m = p[1],
        w = p[2],
        y = m - w - s * S;
      (S || y) && Ry(e, l) && ((f += y), (g += S));
      var h = l.parentNode;
      l = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
    } while ((!c && l !== document.body) || (c && (t.contains(l) || t === l)));
    return (((d && Math.abs(f) < 1) || (!d && Math.abs(g) < 1)) && (u = !0), u);
  },
  Mi = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  tm = function (e) {
    return [e.deltaX, e.deltaY];
  },
  nm = function (e) {
    return e && "current" in e ? e.current : e;
  },
  XN = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  ZN = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  JN = 0,
  Kr = [];
function eP(e) {
  var t = v.useRef([]),
    n = v.useRef([0, 0]),
    r = v.useRef(),
    o = v.useState(JN++)[0],
    s = v.useState(Ty)[0],
    i = v.useRef(e);
  (v.useEffect(
    function () {
      i.current = e;
    },
    [e],
  ),
    v.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var m = SN([e.lockRef.current], (e.shards || []).map(nm), !0).filter(
            Boolean,
          );
          return (
            m.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(o)),
                m.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(o));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var l = v.useCallback(function (m, w) {
      if (
        ("touches" in m && m.touches.length === 2) ||
        (m.type === "wheel" && m.ctrlKey)
      )
        return !i.current.allowPinchZoom;
      var y = Mi(m),
        h = n.current,
        x = "deltaX" in m ? m.deltaX : h[0] - y[0],
        b = "deltaY" in m ? m.deltaY : h[1] - y[1],
        C,
        j = m.target,
        E = Math.abs(x) > Math.abs(b) ? "h" : "v";
      if ("touches" in m && E === "h" && j.type === "range") return !1;
      var k = em(E, j);
      if (!k) return !0;
      if ((k ? (C = E) : ((C = E === "v" ? "h" : "v"), (k = em(E, j))), !k))
        return !1;
      if (
        (!r.current && "changedTouches" in m && (x || b) && (r.current = C), !C)
      )
        return !0;
      var I = r.current || C;
      return YN(I, w, m, I === "h" ? x : b);
    }, []),
    c = v.useCallback(function (m) {
      var w = m;
      if (!(!Kr.length || Kr[Kr.length - 1] !== s)) {
        var y = "deltaY" in w ? tm(w) : Mi(w),
          h = t.current.filter(function (C) {
            return (
              C.name === w.type &&
              (C.target === w.target || w.target === C.shadowParent) &&
              XN(C.delta, y)
            );
          })[0];
        if (h && h.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!h) {
          var x = (i.current.shards || [])
              .map(nm)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(w.target);
              }),
            b = x.length > 0 ? l(w, x[0]) : !i.current.noIsolation;
          b && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = v.useCallback(function (m, w, y, h) {
      var x = { name: m, delta: w, target: y, should: h, shadowParent: tP(y) };
      (t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (b) {
            return b !== x;
          });
        }, 1));
    }, []),
    d = v.useCallback(function (m) {
      ((n.current = Mi(m)), (r.current = void 0));
    }, []),
    f = v.useCallback(function (m) {
      u(m.type, tm(m), m.target, l(m, e.lockRef.current));
    }, []),
    g = v.useCallback(function (m) {
      u(m.type, Mi(m), m.target, l(m, e.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      Kr.push(s),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: g,
      }),
      document.addEventListener("wheel", c, Gr),
      document.addEventListener("touchmove", c, Gr),
      document.addEventListener("touchstart", d, Gr),
      function () {
        ((Kr = Kr.filter(function (m) {
          return m !== s;
        })),
          document.removeEventListener("wheel", c, Gr),
          document.removeEventListener("touchmove", c, Gr),
          document.removeEventListener("touchstart", d, Gr));
      }
    );
  }, []);
  var p = e.removeScrollBar,
    S = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    S ? v.createElement(s, { styles: ZN(o) }) : null,
    p
      ? v.createElement(HN, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function tP(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const nP = RN(Py, eP);
var Oy = v.forwardRef(function (e, t) {
  return v.createElement(cl, Jt({}, e, { ref: t, sideCar: nP }));
});
Oy.classNames = cl.classNames;
var rP = [" ", "Enter", "ArrowUp", "ArrowDown"],
  oP = [" ", "Enter"],
  _r = "Select",
  [ul, dl, sP] = Lv(_r),
  [Qo] = $o(_r, [sP, rl]),
  fl = rl(),
  [iP, ar] = Qo(_r),
  [aP, lP] = Qo(_r),
  My = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        value: i,
        defaultValue: l,
        onValueChange: c,
        dir: u,
        name: d,
        autoComplete: f,
        disabled: g,
        required: p,
        form: S,
      } = e,
      m = fl(t),
      [w, y] = v.useState(null),
      [h, x] = v.useState(null),
      [b, C] = v.useState(!1),
      j = aN(u),
      [E, k] = Ca({ prop: r, defaultProp: o ?? !1, onChange: s, caller: _r }),
      [I, R] = Ca({ prop: i, defaultProp: l, onChange: c, caller: _r }),
      z = v.useRef(null),
      _ = w ? S || !!w.closest("form") : !0,
      [H, M] = v.useState(new Set()),
      V = Array.from(H)
        .map((U) => U.props.value)
        .join(";");
    return a.jsx(oE, {
      ...m,
      children: a.jsxs(iP, {
        required: p,
        scope: t,
        trigger: w,
        onTriggerChange: y,
        valueNode: h,
        onValueNodeChange: x,
        valueNodeHasChildren: b,
        onValueNodeHasChildrenChange: C,
        contentId: Za(),
        value: I,
        onValueChange: R,
        open: E,
        onOpenChange: k,
        dir: j,
        triggerPointerDownPosRef: z,
        disabled: g,
        children: [
          a.jsx(ul.Provider, {
            scope: t,
            children: a.jsx(aP, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: v.useCallback((U) => {
                M((B) => new Set(B).add(U));
              }, []),
              onNativeOptionRemove: v.useCallback((U) => {
                M((B) => {
                  const N = new Set(B);
                  return (N.delete(U), N);
                });
              }, []),
              children: n,
            }),
          }),
          _
            ? a.jsxs(
                rx,
                {
                  "aria-hidden": !0,
                  required: p,
                  tabIndex: -1,
                  name: d,
                  autoComplete: f,
                  value: I,
                  onChange: (U) => R(U.target.value),
                  disabled: g,
                  form: S,
                  children: [
                    I === void 0 ? a.jsx("option", { value: "" }) : null,
                    Array.from(H),
                  ],
                },
                V,
              )
            : null,
        ],
      }),
    });
  };
My.displayName = _r;
var _y = "SelectTrigger",
  Iy = v.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      s = fl(n),
      i = ar(_y, n),
      l = i.disabled || r,
      c = Ee(t, i.onTriggerChange),
      u = dl(n),
      d = v.useRef("touch"),
      [f, g, p] = sx((m) => {
        const w = u().filter((x) => !x.disabled),
          y = w.find((x) => x.value === i.value),
          h = ix(w, m, y);
        h !== void 0 && i.onValueChange(h.value);
      }),
      S = (m) => {
        (l || (i.onOpenChange(!0), p()),
          m &&
            (i.triggerPointerDownPosRef.current = {
              x: Math.round(m.pageX),
              y: Math.round(m.pageY),
            }));
      };
    return a.jsx(Vg, {
      asChild: !0,
      ...s,
      children: a.jsx(ie.button, {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": ox(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: J(o.onClick, (m) => {
          (m.currentTarget.focus(), d.current !== "mouse" && S(m));
        }),
        onPointerDown: J(o.onPointerDown, (m) => {
          d.current = m.pointerType;
          const w = m.target;
          (w.hasPointerCapture(m.pointerId) &&
            w.releasePointerCapture(m.pointerId),
            m.button === 0 &&
              m.ctrlKey === !1 &&
              m.pointerType === "mouse" &&
              (S(m), m.preventDefault()));
        }),
        onKeyDown: J(o.onKeyDown, (m) => {
          const w = f.current !== "";
          (!(m.ctrlKey || m.altKey || m.metaKey) &&
            m.key.length === 1 &&
            g(m.key),
            !(w && m.key === " ") &&
              rP.includes(m.key) &&
              (S(), m.preventDefault()));
        }),
      }),
    });
  });
Iy.displayName = _y;
var Ly = "SelectValue",
  Dy = v.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: s,
        placeholder: i = "",
        ...l
      } = e,
      c = ar(Ly, n),
      { onValueNodeHasChildrenChange: u } = c,
      d = s !== void 0,
      f = Ee(t, c.onValueNodeChange);
    return (
      Ue(() => {
        u(d);
      }, [u, d]),
      a.jsx(ie.span, {
        ...l,
        ref: f,
        style: { pointerEvents: "none" },
        children: ox(c.value) ? a.jsx(a.Fragment, { children: i }) : s,
      })
    );
  });
Dy.displayName = Ly;
var cP = "SelectIcon",
  Fy = v.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return a.jsx(ie.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼",
    });
  });
Fy.displayName = cP;
var uP = "SelectPortal",
  zy = (e) => a.jsx(wd, { asChild: !0, ...e });
zy.displayName = uP;
var Ir = "SelectContent",
  Uy = v.forwardRef((e, t) => {
    const n = ar(Ir, e.__scopeSelect),
      [r, o] = v.useState();
    if (
      (Ue(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const s = r;
      return s
        ? Fr.createPortal(
            a.jsx($y, {
              scope: e.__scopeSelect,
              children: a.jsx(ul.Slot, {
                scope: e.__scopeSelect,
                children: a.jsx("div", { children: e.children }),
              }),
            }),
            s,
          )
        : null;
    }
    return a.jsx(By, { ...e, ref: t });
  });
Uy.displayName = Ir;
var Mt = 10,
  [$y, lr] = Qo(Ir),
  dP = "SelectContentImpl",
  fP = Us("SelectContent.RemoveScroll"),
  By = v.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        side: l,
        sideOffset: c,
        align: u,
        alignOffset: d,
        arrowPadding: f,
        collisionBoundary: g,
        collisionPadding: p,
        sticky: S,
        hideWhenDetached: m,
        avoidCollisions: w,
        ...y
      } = e,
      h = ar(Ir, n),
      [x, b] = v.useState(null),
      [C, j] = v.useState(null),
      E = Ee(t, (D) => b(D)),
      [k, I] = v.useState(null),
      [R, z] = v.useState(null),
      _ = dl(n),
      [H, M] = v.useState(!1),
      V = v.useRef(!1);
    (v.useEffect(() => {
      if (x) return wN(x);
    }, [x]),
      lN());
    const U = v.useCallback(
        (D) => {
          const [ae, ...Pe] = _().map((oe) => oe.ref.current),
            [se] = Pe.slice(-1),
            ne = document.activeElement;
          for (const oe of D)
            if (
              oe === ne ||
              (oe == null || oe.scrollIntoView({ block: "nearest" }),
              oe === ae && C && (C.scrollTop = 0),
              oe === se && C && (C.scrollTop = C.scrollHeight),
              oe == null || oe.focus(),
              document.activeElement !== ne)
            )
              return;
        },
        [_, C],
      ),
      B = v.useCallback(() => U([k, x]), [U, k, x]);
    v.useEffect(() => {
      H && B();
    }, [H, B]);
    const { onOpenChange: N, triggerPointerDownPosRef: T } = h;
    (v.useEffect(() => {
      if (x) {
        let D = { x: 0, y: 0 };
        const ae = (se) => {
            var ne, oe;
            D = {
              x: Math.abs(
                Math.round(se.pageX) -
                  (((ne = T.current) == null ? void 0 : ne.x) ?? 0),
              ),
              y: Math.abs(
                Math.round(se.pageY) -
                  (((oe = T.current) == null ? void 0 : oe.y) ?? 0),
              ),
            };
          },
          Pe = (se) => {
            (D.x <= 10 && D.y <= 10
              ? se.preventDefault()
              : x.contains(se.target) || N(!1),
              document.removeEventListener("pointermove", ae),
              (T.current = null));
          };
        return (
          T.current !== null &&
            (document.addEventListener("pointermove", ae),
            document.addEventListener("pointerup", Pe, {
              capture: !0,
              once: !0,
            })),
          () => {
            (document.removeEventListener("pointermove", ae),
              document.removeEventListener("pointerup", Pe, { capture: !0 }));
          }
        );
      }
    }, [x, N, T]),
      v.useEffect(() => {
        const D = () => N(!1);
        return (
          window.addEventListener("blur", D),
          window.addEventListener("resize", D),
          () => {
            (window.removeEventListener("blur", D),
              window.removeEventListener("resize", D));
          }
        );
      }, [N]));
    const [L, W] = sx((D) => {
        const ae = _().filter((ne) => !ne.disabled),
          Pe = ae.find((ne) => ne.ref.current === document.activeElement),
          se = ix(ae, D, Pe);
        se && setTimeout(() => se.ref.current.focus());
      }),
      $ = v.useCallback(
        (D, ae, Pe) => {
          const se = !V.current && !Pe;
          ((h.value !== void 0 && h.value === ae) || se) &&
            (I(D), se && (V.current = !0));
        },
        [h.value],
      ),
      X = v.useCallback(() => (x == null ? void 0 : x.focus()), [x]),
      G = v.useCallback(
        (D, ae, Pe) => {
          const se = !V.current && !Pe;
          ((h.value !== void 0 && h.value === ae) || se) && z(D);
        },
        [h.value],
      ),
      de = r === "popper" ? mu : Hy,
      Ne =
        de === mu
          ? {
              side: l,
              sideOffset: c,
              align: u,
              alignOffset: d,
              arrowPadding: f,
              collisionBoundary: g,
              collisionPadding: p,
              sticky: S,
              hideWhenDetached: m,
              avoidCollisions: w,
            }
          : {};
    return a.jsx($y, {
      scope: n,
      content: x,
      viewport: C,
      onViewportChange: j,
      itemRefCallback: $,
      selectedItem: k,
      onItemLeave: X,
      itemTextRefCallback: G,
      focusSelectedItem: B,
      selectedItemText: R,
      position: r,
      isPositioned: H,
      searchRef: L,
      children: a.jsx(Oy, {
        as: fP,
        allowPinchZoom: !0,
        children: a.jsx(by, {
          asChild: !0,
          trapped: h.open,
          onMountAutoFocus: (D) => {
            D.preventDefault();
          },
          onUnmountAutoFocus: J(o, (D) => {
            var ae;
            ((ae = h.trigger) == null || ae.focus({ preventScroll: !0 }),
              D.preventDefault());
          }),
          children: a.jsx(Ka, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: s,
            onPointerDownOutside: i,
            onFocusOutside: (D) => D.preventDefault(),
            onDismiss: () => h.onOpenChange(!1),
            children: a.jsx(de, {
              role: "listbox",
              id: h.contentId,
              "data-state": h.open ? "open" : "closed",
              dir: h.dir,
              onContextMenu: (D) => D.preventDefault(),
              ...y,
              ...Ne,
              onPlaced: () => M(!0),
              ref: E,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...y.style,
              },
              onKeyDown: J(y.onKeyDown, (D) => {
                const ae = D.ctrlKey || D.altKey || D.metaKey;
                if (
                  (D.key === "Tab" && D.preventDefault(),
                  !ae && D.key.length === 1 && W(D.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key))
                ) {
                  let se = _()
                    .filter((ne) => !ne.disabled)
                    .map((ne) => ne.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(D.key) &&
                      (se = se.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(D.key))
                  ) {
                    const ne = D.target,
                      oe = se.indexOf(ne);
                    se = se.slice(oe + 1);
                  }
                  (setTimeout(() => U(se)), D.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
By.displayName = dP;
var pP = "SelectItemAlignedPosition",
  Hy = v.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      s = ar(Ir, n),
      i = lr(Ir, n),
      [l, c] = v.useState(null),
      [u, d] = v.useState(null),
      f = Ee(t, (E) => d(E)),
      g = dl(n),
      p = v.useRef(!1),
      S = v.useRef(!0),
      {
        viewport: m,
        selectedItem: w,
        selectedItemText: y,
        focusSelectedItem: h,
      } = i,
      x = v.useCallback(() => {
        if (s.trigger && s.valueNode && l && u && m && w && y) {
          const E = s.trigger.getBoundingClientRect(),
            k = u.getBoundingClientRect(),
            I = s.valueNode.getBoundingClientRect(),
            R = y.getBoundingClientRect();
          if (s.dir !== "rtl") {
            const ne = R.left - k.left,
              oe = I.left - ne,
              We = E.left - oe,
              yt = E.width + We,
              cr = Math.max(yt, k.width),
              Cn = window.innerWidth - Mt,
              ur = Qp(oe, [Mt, Math.max(Mt, Cn - cr)]);
            ((l.style.minWidth = yt + "px"), (l.style.left = ur + "px"));
          } else {
            const ne = k.right - R.right,
              oe = window.innerWidth - I.right - ne,
              We = window.innerWidth - E.right - oe,
              yt = E.width + We,
              cr = Math.max(yt, k.width),
              Cn = window.innerWidth - Mt,
              ur = Qp(oe, [Mt, Math.max(Mt, Cn - cr)]);
            ((l.style.minWidth = yt + "px"), (l.style.right = ur + "px"));
          }
          const z = g(),
            _ = window.innerHeight - Mt * 2,
            H = m.scrollHeight,
            M = window.getComputedStyle(u),
            V = parseInt(M.borderTopWidth, 10),
            U = parseInt(M.paddingTop, 10),
            B = parseInt(M.borderBottomWidth, 10),
            N = parseInt(M.paddingBottom, 10),
            T = V + U + H + N + B,
            L = Math.min(w.offsetHeight * 5, T),
            W = window.getComputedStyle(m),
            $ = parseInt(W.paddingTop, 10),
            X = parseInt(W.paddingBottom, 10),
            G = E.top + E.height / 2 - Mt,
            de = _ - G,
            Ne = w.offsetHeight / 2,
            D = w.offsetTop + Ne,
            ae = V + U + D,
            Pe = T - ae;
          if (ae <= G) {
            const ne = z.length > 0 && w === z[z.length - 1].ref.current;
            l.style.bottom = "0px";
            const oe = u.clientHeight - m.offsetTop - m.offsetHeight,
              We = Math.max(de, Ne + (ne ? X : 0) + oe + B),
              yt = ae + We;
            l.style.height = yt + "px";
          } else {
            const ne = z.length > 0 && w === z[0].ref.current;
            l.style.top = "0px";
            const We = Math.max(G, V + m.offsetTop + (ne ? $ : 0) + Ne) + Pe;
            ((l.style.height = We + "px"),
              (m.scrollTop = ae - G + m.offsetTop));
          }
          ((l.style.margin = `${Mt}px 0`),
            (l.style.minHeight = L + "px"),
            (l.style.maxHeight = _ + "px"),
            r == null || r(),
            requestAnimationFrame(() => (p.current = !0)));
        }
      }, [g, s.trigger, s.valueNode, l, u, m, w, y, s.dir, r]);
    Ue(() => x(), [x]);
    const [b, C] = v.useState();
    Ue(() => {
      u && C(window.getComputedStyle(u).zIndex);
    }, [u]);
    const j = v.useCallback(
      (E) => {
        E && S.current === !0 && (x(), h == null || h(), (S.current = !1));
      },
      [x, h],
    );
    return a.jsx(hP, {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: j,
      children: a.jsx("div", {
        ref: c,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: b,
        },
        children: a.jsx(ie.div, {
          ...o,
          ref: f,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
Hy.displayName = pP;
var mP = "SelectPopperPosition",
  mu = v.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = Mt,
        ...s
      } = e,
      i = fl(n);
    return a.jsx(Qg, {
      ...i,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
mu.displayName = mP;
var [hP, Ud] = Qo(Ir, {}),
  hu = "SelectViewport",
  Wy = v.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      s = lr(hu, n),
      i = Ud(hu, n),
      l = Ee(t, s.onViewportChange),
      c = v.useRef(0);
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        a.jsx(ul.Slot, {
          scope: n,
          children: a.jsx(ie.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: l,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...o.style,
            },
            onScroll: J(o.onScroll, (u) => {
              const d = u.currentTarget,
                { contentWrapper: f, shouldExpandOnScrollRef: g } = i;
              if (g != null && g.current && f) {
                const p = Math.abs(c.current - d.scrollTop);
                if (p > 0) {
                  const S = window.innerHeight - Mt * 2,
                    m = parseFloat(f.style.minHeight),
                    w = parseFloat(f.style.height),
                    y = Math.max(m, w);
                  if (y < S) {
                    const h = y + p,
                      x = Math.min(S, h),
                      b = h - x;
                    ((f.style.height = x + "px"),
                      f.style.bottom === "0px" &&
                        ((d.scrollTop = b > 0 ? b : 0),
                        (f.style.justifyContent = "flex-end")));
                  }
                }
              }
              c.current = d.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Wy.displayName = hu;
var Vy = "SelectGroup",
  [vP, gP] = Qo(Vy),
  yP = v.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Za();
    return a.jsx(vP, {
      scope: n,
      id: o,
      children: a.jsx(ie.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: t,
      }),
    });
  });
yP.displayName = Vy;
var Qy = "SelectLabel",
  Gy = v.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = gP(Qy, n);
    return a.jsx(ie.div, { id: o.id, ...r, ref: t });
  });
Gy.displayName = Qy;
var Ra = "SelectItem",
  [xP, Ky] = Qo(Ra),
  qy = v.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: s,
        ...i
      } = e,
      l = ar(Ra, n),
      c = lr(Ra, n),
      u = l.value === r,
      [d, f] = v.useState(s ?? ""),
      [g, p] = v.useState(!1),
      S = Ee(t, (h) => {
        var x;
        return (x = c.itemRefCallback) == null ? void 0 : x.call(c, h, r, o);
      }),
      m = Za(),
      w = v.useRef("touch"),
      y = () => {
        o || (l.onValueChange(r), l.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return a.jsx(xP, {
      scope: n,
      value: r,
      disabled: o,
      textId: m,
      isSelected: u,
      onItemTextChange: v.useCallback((h) => {
        f((x) => x || ((h == null ? void 0 : h.textContent) ?? "").trim());
      }, []),
      children: a.jsx(ul.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: d,
        children: a.jsx(ie.div, {
          role: "option",
          "aria-labelledby": m,
          "data-highlighted": g ? "" : void 0,
          "aria-selected": u && g,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...i,
          ref: S,
          onFocus: J(i.onFocus, () => p(!0)),
          onBlur: J(i.onBlur, () => p(!1)),
          onClick: J(i.onClick, () => {
            w.current !== "mouse" && y();
          }),
          onPointerUp: J(i.onPointerUp, () => {
            w.current === "mouse" && y();
          }),
          onPointerDown: J(i.onPointerDown, (h) => {
            w.current = h.pointerType;
          }),
          onPointerMove: J(i.onPointerMove, (h) => {
            var x;
            ((w.current = h.pointerType),
              o
                ? (x = c.onItemLeave) == null || x.call(c)
                : w.current === "mouse" &&
                  h.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: J(i.onPointerLeave, (h) => {
            var x;
            h.currentTarget === document.activeElement &&
              ((x = c.onItemLeave) == null || x.call(c));
          }),
          onKeyDown: J(i.onKeyDown, (h) => {
            var b;
            (((b = c.searchRef) == null ? void 0 : b.current) !== "" &&
              h.key === " ") ||
              (oP.includes(h.key) && y(), h.key === " " && h.preventDefault());
          }),
        }),
      }),
    });
  });
qy.displayName = Ra;
var fs = "SelectItemText",
  Yy = v.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e,
      i = ar(fs, n),
      l = lr(fs, n),
      c = Ky(fs, n),
      u = lP(fs, n),
      [d, f] = v.useState(null),
      g = Ee(
        t,
        (y) => f(y),
        c.onItemTextChange,
        (y) => {
          var h;
          return (h = l.itemTextRefCallback) == null
            ? void 0
            : h.call(l, y, c.value, c.disabled);
        },
      ),
      p = d == null ? void 0 : d.textContent,
      S = v.useMemo(
        () =>
          a.jsx(
            "option",
            { value: c.value, disabled: c.disabled, children: p },
            c.value,
          ),
        [c.disabled, c.value, p],
      ),
      { onNativeOptionAdd: m, onNativeOptionRemove: w } = u;
    return (
      Ue(() => (m(S), () => w(S)), [m, w, S]),
      a.jsxs(a.Fragment, {
        children: [
          a.jsx(ie.span, { id: c.textId, ...s, ref: g }),
          c.isSelected && i.valueNode && !i.valueNodeHasChildren
            ? Fr.createPortal(s.children, i.valueNode)
            : null,
        ],
      })
    );
  });
Yy.displayName = fs;
var Xy = "SelectItemIndicator",
  Zy = v.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Ky(Xy, n).isSelected
      ? a.jsx(ie.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
Zy.displayName = Xy;
var vu = "SelectScrollUpButton",
  Jy = v.forwardRef((e, t) => {
    const n = lr(vu, e.__scopeSelect),
      r = Ud(vu, e.__scopeSelect),
      [o, s] = v.useState(!1),
      i = Ee(t, r.onScrollButtonChange);
    return (
      Ue(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = c.scrollTop > 0;
            s(u);
          };
          const c = n.viewport;
          return (
            l(),
            c.addEventListener("scroll", l),
            () => c.removeEventListener("scroll", l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? a.jsx(tx, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: c } = n;
              l && c && (l.scrollTop = l.scrollTop - c.offsetHeight);
            },
          })
        : null
    );
  });
Jy.displayName = vu;
var gu = "SelectScrollDownButton",
  ex = v.forwardRef((e, t) => {
    const n = lr(gu, e.__scopeSelect),
      r = Ud(gu, e.__scopeSelect),
      [o, s] = v.useState(!1),
      i = Ee(t, r.onScrollButtonChange);
    return (
      Ue(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = c.scrollHeight - c.clientHeight,
              d = Math.ceil(c.scrollTop) < u;
            s(d);
          };
          const c = n.viewport;
          return (
            l(),
            c.addEventListener("scroll", l),
            () => c.removeEventListener("scroll", l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? a.jsx(tx, {
            ...e,
            ref: i,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: c } = n;
              l && c && (l.scrollTop = l.scrollTop + c.offsetHeight);
            },
          })
        : null
    );
  });
ex.displayName = gu;
var tx = v.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      s = lr("SelectScrollButton", n),
      i = v.useRef(null),
      l = dl(n),
      c = v.useCallback(() => {
        i.current !== null &&
          (window.clearInterval(i.current), (i.current = null));
      }, []);
    return (
      v.useEffect(() => () => c(), [c]),
      Ue(() => {
        var d;
        const u = l().find((f) => f.ref.current === document.activeElement);
        (d = u == null ? void 0 : u.ref.current) == null ||
          d.scrollIntoView({ block: "nearest" });
      }, [l]),
      a.jsx(ie.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: J(o.onPointerDown, () => {
          i.current === null && (i.current = window.setInterval(r, 50));
        }),
        onPointerMove: J(o.onPointerMove, () => {
          var u;
          ((u = s.onItemLeave) == null || u.call(s),
            i.current === null && (i.current = window.setInterval(r, 50)));
        }),
        onPointerLeave: J(o.onPointerLeave, () => {
          c();
        }),
      })
    );
  }),
  wP = "SelectSeparator",
  nx = v.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return a.jsx(ie.div, { "aria-hidden": !0, ...r, ref: t });
  });
nx.displayName = wP;
var yu = "SelectArrow",
  SP = v.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = fl(n),
      s = ar(yu, n),
      i = lr(yu, n);
    return s.open && i.position === "popper"
      ? a.jsx(Gg, { ...o, ...r, ref: t })
      : null;
  });
SP.displayName = yu;
var bP = "SelectBubbleInput",
  rx = v.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = v.useRef(null),
      s = Ee(r, o),
      i = vN(t);
    return (
      v.useEffect(() => {
        const l = o.current;
        if (!l) return;
        const c = window.HTMLSelectElement.prototype,
          d = Object.getOwnPropertyDescriptor(c, "value").set;
        if (i !== t && d) {
          const f = new Event("change", { bubbles: !0 });
          (d.call(l, t), l.dispatchEvent(f));
        }
      }, [i, t]),
      a.jsx(ie.select, {
        ...n,
        style: { ...$v, ...n.style },
        ref: s,
        defaultValue: t,
      })
    );
  });
rx.displayName = bP;
function ox(e) {
  return e === "" || e === void 0;
}
function sx(e) {
  const t = Wt(e),
    n = v.useRef(""),
    r = v.useRef(0),
    o = v.useCallback(
      (i) => {
        const l = n.current + i;
        (t(l),
          (function c(u) {
            ((n.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => c(""), 1e3)));
          })(l));
      },
      [t],
    ),
    s = v.useCallback(() => {
      ((n.current = ""), window.clearTimeout(r.current));
    }, []);
  return (
    v.useEffect(() => () => window.clearTimeout(r.current), []),
    [n, o, s]
  );
}
function ix(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let i = CP(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const c = i.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase()),
  );
  return c !== n ? c : void 0;
}
function CP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var EP = My,
  ax = Iy,
  jP = Dy,
  NP = Fy,
  PP = zy,
  lx = Uy,
  TP = Wy,
  cx = Gy,
  ux = qy,
  kP = Yy,
  RP = Zy,
  dx = Jy,
  fx = ex,
  px = nx;
const rm = EP,
  om = jP,
  xu = v.forwardRef(({ className: e, children: t, ...n }, r) =>
    a.jsxs(ax, {
      ref: r,
      className: we(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e,
      ),
      ...n,
      children: [
        t,
        a.jsx(NP, {
          asChild: !0,
          children: a.jsx(Ed, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
xu.displayName = ax.displayName;
const mx = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(dx, {
    ref: n,
    className: we("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: a.jsx(w1, { className: "h-4 w-4" }),
  }),
);
mx.displayName = dx.displayName;
const hx = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(fx, {
    ref: n,
    className: we("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: a.jsx(Ed, { className: "h-4 w-4" }),
  }),
);
hx.displayName = fx.displayName;
const wu = v.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    a.jsx(PP, {
      children: a.jsxs(lx, {
        ref: o,
        className: we(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e,
        ),
        position: n,
        ...r,
        children: [
          a.jsx(mx, {}),
          a.jsx(TP, {
            className: we(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: t,
          }),
          a.jsx(hx, {}),
        ],
      }),
    }),
);
wu.displayName = lx.displayName;
const AP = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(cx, {
    ref: n,
    className: we("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t,
  }),
);
AP.displayName = cx.displayName;
const Ot = v.forwardRef(({ className: e, children: t, ...n }, r) =>
  a.jsxs(ux, {
    ref: r,
    className: we(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e,
    ),
    ...n,
    children: [
      a.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: a.jsx(RP, { children: a.jsx(x1, { className: "h-4 w-4" }) }),
      }),
      a.jsx(kP, { children: t }),
    ],
  }),
);
Ot.displayName = ux.displayName;
const OP = v.forwardRef(({ className: e, ...t }, n) =>
  a.jsx(px, { ref: n, className: we("-mx-1 my-1 h-px bg-muted", e), ...t }),
);
OP.displayName = px.displayName;
var pl = "Collapsible",
  [MP] = $o(pl),
  [_P, $d] = MP(pl),
  vx = v.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        open: r,
        defaultOpen: o,
        disabled: s,
        onOpenChange: i,
        ...l
      } = e,
      [c, u] = Ca({ prop: r, defaultProp: o ?? !1, onChange: i, caller: pl });
    return a.jsx(_P, {
      scope: n,
      disabled: s,
      contentId: Za(),
      open: c,
      onOpenToggle: v.useCallback(() => u((d) => !d), [u]),
      children: a.jsx(ie.div, {
        "data-state": Hd(c),
        "data-disabled": s ? "" : void 0,
        ...l,
        ref: t,
      }),
    });
  });
vx.displayName = pl;
var gx = "CollapsibleTrigger",
  yx = v.forwardRef((e, t) => {
    const { __scopeCollapsible: n, ...r } = e,
      o = $d(gx, n);
    return a.jsx(ie.button, {
      type: "button",
      "aria-controls": o.contentId,
      "aria-expanded": o.open || !1,
      "data-state": Hd(o.open),
      "data-disabled": o.disabled ? "" : void 0,
      disabled: o.disabled,
      ...r,
      ref: t,
      onClick: J(e.onClick, o.onOpenToggle),
    });
  });
yx.displayName = gx;
var Bd = "CollapsibleContent",
  xx = v.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = $d(Bd, e.__scopeCollapsible);
    return a.jsx(qa, {
      present: n || o.open,
      children: ({ present: s }) => a.jsx(IP, { ...r, ref: t, present: s }),
    });
  });
xx.displayName = Bd;
var IP = v.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e,
    i = $d(Bd, n),
    [l, c] = v.useState(r),
    u = v.useRef(null),
    d = Ee(t, u),
    f = v.useRef(0),
    g = f.current,
    p = v.useRef(0),
    S = p.current,
    m = i.open || l,
    w = v.useRef(m),
    y = v.useRef(void 0);
  return (
    v.useEffect(() => {
      const h = requestAnimationFrame(() => (w.current = !1));
      return () => cancelAnimationFrame(h);
    }, []),
    Ue(() => {
      const h = u.current;
      if (h) {
        ((y.current = y.current || {
          transitionDuration: h.style.transitionDuration,
          animationName: h.style.animationName,
        }),
          (h.style.transitionDuration = "0s"),
          (h.style.animationName = "none"));
        const x = h.getBoundingClientRect();
        ((f.current = x.height),
          (p.current = x.width),
          w.current ||
            ((h.style.transitionDuration = y.current.transitionDuration),
            (h.style.animationName = y.current.animationName)),
          c(r));
      }
    }, [i.open, r]),
    a.jsx(ie.div, {
      "data-state": Hd(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !m,
      ...s,
      ref: d,
      style: {
        "--radix-collapsible-content-height": g ? `${g}px` : void 0,
        "--radix-collapsible-content-width": S ? `${S}px` : void 0,
        ...e.style,
      },
      children: m && o,
    })
  );
});
function Hd(e) {
  return e ? "open" : "closed";
}
var LP = vx;
const DP = LP,
  FP = yx,
  zP = xx,
  UP = "/assets/hero-cbu-installation-san-diego-C7hj8Cbn.jpg",
  wx = "/assets/service-cbu-CDRjcxgn.jpg",
  Sx = "/assets/service-4c-C-enhqn7.jpg",
  bx = "/assets/service-parcel-lockers-BQpKP5oj.jpg",
  Cx = "/assets/service-pedestal-wall-CdGslJUc.jpg",
  Ex = "/assets/service-repairs-locks-CCoIGwVP.jpg",
  jx = "/assets/service-ada-B_xFLTRN.jpg",
  Nx = "/assets/project-cbu-san-marcos-CGMhndSR.jpg",
  Px = "/assets/project-4c-chula-vista-AaaSneTE.jpg",
  Tx = "/assets/project-parcel-escondido-8kPGhtZN.jpg",
  kx = "/assets/map-san-diego-county-Ba8KiJp9.jpg",
  $P = () => {
    const [e, t] = v.useState(null),
      [n, r] = v.useState(!1),
      [o, s] = v.useState(!1);
    v.useEffect(() => {
      const S = () => {
        (r(window.scrollY > 400), s(window.scrollY > 100));
      };
      return (
        window.addEventListener("scroll", S),
        () => window.removeEventListener("scroll", S)
      );
    }, []);
    const i = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      l = [
        {
          title: "Cluster Box Units (CBU)",
          description:
            "Durable, USPS-approved CBU solutions for multi-tenant sites, HOAs & apartments. Full pad/base, anchoring & setup.",
          image: wx,
          alt: "Cluster Box Unit installation for multi-tenant property",
        },
        {
          title: "4C Horizontal Mailboxes",
          description:
            "Interior/exterior 4C mailboxes with parcel lockers. Wall-mounted or recessed to meet USPS specs.",
          image: Sx,
          alt: "4C horizontal mailbox installation with parcel lockers",
        },
        {
          title: "Parcel Lockers",
          description:
            "High-capacity, secure package lockers for large volumes. Integrations for USPS & private carriers.",
          image: bx,
          alt: "Commercial parcel lockers installed in a package room",
        },
        {
          title: "Pedestal & Wall-Mounted Boxes",
          description:
            "Pedestal and wall-mounted solutions for offices, retail & campuses. Spec, supply & install.",
          image: Cx,
          alt: "Pedestal and wall-mounted commercial mailboxes",
        },
        {
          title: "Repairs & Lock Changes",
          description:
            "Lock and tenant door replacements, vandalism repairs, re-keys & USPS arrow lock coordination.",
          image: Ex,
          alt: "Technician performing commercial mailbox lock change",
        },
        {
          title: "ADA-Compliant Installs",
          description:
            "Clear floor space, reach ranges & slopes verified. We deliver compliant placement & signage.",
          image: jx,
          alt: "ADA-compliant commercial mailbox installation with verified reach ranges",
        },
      ],
      c = [
        "San Diego",
        "La Jolla",
        "Del Mar",
        "Solana Beach",
        "Encinitas",
        "Carlsbad",
        "Oceanside",
        "Vista",
        "San Marcos",
        "Escondido",
        "Chula Vista",
        "National City",
        "El Cajon",
        "Santee",
        "Poway",
        "Coronado",
      ],
      u = [
        "HOAs & Property Managers",
        "Apartments & Multi-Family",
        "Builders & General Contractors",
        "Commercial & Retail",
        "Campuses & Healthcare",
        "Government & Municipal",
      ],
      d = [
        {
          title: "USPS-Approved Vendor",
          description: "We coordinate specs & sign-offs.",
        },
        {
          title: "Licensed, Bonded & Insured",
          description: "California contractor, verified coverage.",
        },
        {
          title: "Turnkey Installations",
          description: "Pads, mounts, anchoring & tenant setup.",
        },
        {
          title: "Warranty & Support",
          description: "Product warranties with service backing.",
        },
        {
          title: "ADA & Code Compliance",
          description: "Reach ranges, slopes, clearances.",
        },
        {
          title: "Fast, Clean Work",
          description: "Schedule-driven crews and neat job sites.",
        },
      ],
      f = [
        {
          title: "16-Door CBU — San Marcos, CA",
          description:
            "Upgraded community mailbox pad with integrated parcel lockers.",
          alt: "16-door CBU installation at HOA in San Marcos, CA",
          image: Nx,
        },
        {
          title: "4C Mailbox Bank — Chula Vista, CA",
          description: "Interior 4C retrofit with ADA-compliant approach.",
          alt: "4C mailbox bank with parcel lockers at mixed-use building in Chula Vista, CA",
          image: Px,
        },
        {
          title: "Parcel Lockers Expansion — Escondido, CA",
          description: "Added parcel capacity for high-volume deliveries.",
          alt: "Exterior recessed 4C mailboxes at coastal complex in Encinitas, CA",
          image: Tx,
        },
      ],
      g = [
        {
          title: "Site Walk",
          description: "Utility clearances, slab/base requirements.",
        },
        {
          title: "Quote",
          description: "Final specs, USPS coordination and schedule.",
        },
        {
          title: "Schedule",
          description:
            "Pad/base, delivery & install for your approved timeline.",
        },
        {
          title: "USPS Handover",
          description: "Inspect and place into service with documentation.",
        },
      ],
      p = [
        {
          question: "Do you coordinate with USPS?",
          answer:
            "Yes. We verify specs and coordinate USPS sign-off for placement and service.",
        },
        {
          question: "Do you pour pads and set anchors?",
          answer:
            "Yes. We handle slab/base, anchors, and compliant clear floor space.",
        },
        {
          question: "How fast can we schedule?",
          answer:
            "Typical installs are scheduled 1–2 weeks from approval; rush options available.",
        },
        {
          question: "Are 4C mailboxes required?",
          answer:
            "In new construction and many remodels, 4C is required. We'll confirm for your site.",
        },
        {
          question: "Do you offer repairs and lock changes?",
          answer:
            "Yes—tenant doors, lock rekeys, vandalism repair, and arrow lock coordination.",
        },
        {
          question: "Are your installs ADA-compliant?",
          answer:
            "Yes. We verify reach ranges, slopes and signage for compliant access.",
        },
      ];
    return a.jsxs("main", {
      className: "min-h-screen",
      children: [
        a.jsx("a", {
          href: "#hero",
          className:
            "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 btn-primary",
          children: "Skip to content",
        }),
        a.jsx("header", {
          className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${o ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border" : "bg-transparent"}`,
          children: a.jsx("div", {
            className: "container",
            children: a.jsxs("div", {
              className: "flex items-center justify-between py-4",
              children: [
                a.jsx("a", {
                  href: "#hero",
                  className: "text-xl font-bold text-primary",
                  children: "Postal Systems Pro",
                }),
                a.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    a.jsx("a", {
                      href: "#quote",
                      className: "btn-primary text-sm px-4 py-2",
                      "aria-label": "Get a mailbox installation quote",
                      children: "Get a Quote",
                    }),
                    a.jsxs("a", {
                      href: "tel:+16194614787",
                      className: "btn-secondary text-sm px-4 py-2",
                      "aria-label": "Call Postal Systems",
                      children: [
                        a.jsx(Ki, { className: "w-4 h-4" }),
                        "Call Now",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        n &&
          a.jsx("button", {
            onClick: i,
            className:
              "fixed bottom-6 right-6 z-50 btn-primary w-12 h-12 p-0 rounded-full shadow-lg hover:shadow-xl transition-all",
            "aria-label": "Back to top",
            children: a.jsx(g1, { className: "w-5 h-5 mx-auto" }),
          }),
        a.jsxs("section", {
          id: "hero",
          "data-component": "Hero",
          className:
            "relative bg-primary text-primary-foreground pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden",
          children: [
            a.jsxs("div", {
              className: "absolute inset-0 z-0",
              children: [
                a.jsx("img", {
                  src: UP,
                  alt: "USPS-approved cluster box unit installation in San Diego",
                  className: "w-full h-full object-cover opacity-20",
                  width: "1920",
                  height: "1080",
                }),
                a.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95",
                }),
              ],
            }),
            a.jsx("div", {
              className: "container relative z-10",
              children: a.jsxs("div", {
                className: "max-w-4xl mx-auto text-center space-y-8",
                children: [
                  a.jsx("h1", {
                    className:
                      "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
                    children: "Mailbox Installation, Done Right.",
                  }),
                  a.jsx("p", {
                    className:
                      "text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto",
                    children:
                      "USPS-approved vendor & California licensed contractor serving San Diego County. We install, repair & upgrade community and commercial mailboxes. Also serving Orange County & Riverside.",
                  }),
                  a.jsxs("div", {
                    className:
                      "flex flex-wrap justify-center gap-4 md:gap-6 py-8",
                    children: [
                      a.jsxs("div", {
                        className:
                          "flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-primary-foreground/20",
                        children: [
                          a.jsx(Yr, { className: "w-5 h-5" }),
                          a.jsx("span", {
                            className: "font-semibold text-sm md:text-base",
                            children: "USPS-Approved",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-primary-foreground/20",
                        children: [
                          a.jsx(Yr, { className: "w-5 h-5" }),
                          a.jsx("span", {
                            className: "font-semibold text-sm md:text-base",
                            children: "Licensed/Bonded/Insured",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-primary-foreground/20",
                        children: [
                          a.jsx(Yr, { className: "w-5 h-5" }),
                          a.jsx("span", {
                            className: "font-semibold text-sm md:text-base",
                            children: "Over a Decade of Experience",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "flex flex-wrap justify-center gap-4",
                    children: [
                      a.jsx("a", {
                        href: "#quote",
                        className: "btn-primary",
                        "aria-label": "Get a mailbox installation quote",
                        children: "Get a Quote",
                      }),
                      a.jsxs("a", {
                        href: "#quote",
                        className: "btn-secondary",
                        "aria-label": "Share project specs for a fast estimate",
                        children: [
                          a.jsx(Ki, { className: "w-5 h-5" }),
                          "Spec My Project",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        a.jsx("section", {
          id: "services",
          "data-component": "ServiceGrid",
          className: "section-pad bg-background border-b border-border",
          children: a.jsxs("div", {
            className: "container",
            children: [
              a.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  a.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: "Our Services",
                  }),
                  a.jsx("p", {
                    className:
                      "text-muted-foreground text-lg max-w-2xl mx-auto",
                    children:
                      "Complete mailbox solutions for communities and commercial properties",
                  }),
                ],
              }),
              a.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: l.map((S, m) =>
                  a.jsxs(
                    hr,
                    {
                      className:
                        "overflow-hidden hover:shadow-lg transition-all group",
                      children: [
                        a.jsx("div", {
                          className: "aspect-video overflow-hidden",
                          children: a.jsx("img", {
                            src: S.image,
                            alt: S.alt,
                            className:
                              "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                            loading: "lazy",
                            width: "800",
                            height: "600",
                          }),
                        }),
                        a.jsxs("div", {
                          className: "p-6",
                          children: [
                            a.jsx("h3", {
                              className: "text-xl font-semibold mb-3",
                              children: S.title,
                            }),
                            a.jsx("p", {
                              className: "text-muted-foreground",
                              children: S.description,
                            }),
                          ],
                        }),
                      ],
                    },
                    m,
                  ),
                ),
              }),
            ],
          }),
        }),
        a.jsx("section", {
          id: "service-areas",
          "data-component": "ServiceAreas",
          className: "section-pad bg-muted/30",
          children: a.jsxs("div", {
            className: "container",
            children: [
              a.jsxs("div", {
                className: "text-center mb-12",
                children: [
                  a.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: "Service Areas — San Diego County",
                  }),
                  a.jsx("p", {
                    className:
                      "text-muted-foreground text-lg max-w-3xl mx-auto",
                    children:
                      "We serve property managers, HOAs, multifamily, builders/GCs, and commercial/municipal sites across San Diego County.",
                  }),
                ],
              }),
              a.jsx("div", {
                className: "relative mb-8",
                children: a.jsx("div", {
                  className: "overflow-x-auto pb-4 hide-scrollbar",
                  children: a.jsx("div", {
                    className:
                      "flex gap-3 min-w-max px-4 mx-auto justify-center",
                    children: c.map((S, m) =>
                      a.jsx(
                        "span",
                        {
                          className:
                            "px-5 py-2.5 bg-card rounded-lg border border-border text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer whitespace-nowrap shadow-sm",
                          tabIndex: 0,
                          "data-city": S.toLowerCase().replace(/\s+/g, "-"),
                          role: "button",
                          children: S,
                        },
                        m,
                      ),
                    ),
                  }),
                }),
              }),
              a.jsxs("div", {
                className: "max-w-2xl mx-auto mb-8",
                children: [
                  a.jsx("img", {
                    src: kx,
                    alt: "Map of San Diego County service area",
                    className:
                      "w-full h-auto rounded-xl shadow-sm border border-border",
                    loading: "lazy",
                    width: "800",
                    height: "600",
                  }),
                  a.jsx("p", {
                    className: "text-center text-sm text-muted-foreground mt-2",
                    children: "SAN DIEGO",
                  }),
                ],
              }),
              a.jsx("p", {
                className: "text-center text-muted-foreground text-lg mb-4",
                children:
                  "We also serve Orange County and Riverside County — ask about schedule availability.",
              }),
              a.jsxs("div", {
                className: "flex justify-center gap-3 mb-8",
                children: [
                  a.jsx("a", {
                    href: "#quote",
                    className:
                      "px-5 py-2.5 bg-card rounded-lg border border-border text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all focus:outline-none focus:ring-2 focus:ring-primary shadow-sm",
                    children: "Orange County",
                  }),
                  a.jsx("a", {
                    href: "#quote",
                    className:
                      "px-5 py-2.5 bg-card rounded-lg border border-border text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all focus:outline-none focus:ring-2 focus:ring-primary shadow-sm",
                    children: "Riverside County",
                  }),
                ],
              }),
              a.jsxs("p", {
                className: "text-center text-muted-foreground text-lg",
                children: [
                  "Don't see your city?",
                  " ",
                  a.jsx("a", {
                    href: "tel:+16194614787",
                    className: "text-accent hover:underline font-semibold",
                    children: "Call (619) 461-4787",
                  }),
                  " ",
                  "or",
                  " ",
                  a.jsx("a", {
                    href: "#quote",
                    className: "text-accent hover:underline font-semibold",
                    children: "request a quote",
                  }),
                  "—we often work nearby.",
                ],
              }),
            ],
          }),
        }),
        a.jsx("section", {
          id: "industries",
          "data-component": "Industries",
          className: "section-pad bg-background border-b border-border",
          children: a.jsxs("div", {
            className: "container",
            children: [
              a.jsx("div", {
                className: "text-center mb-12",
                children: a.jsx("h2", {
                  className: "text-3xl md:text-4xl font-bold mb-4",
                  children: "Industries We Serve",
                }),
              }),
              a.jsx("div", {
                className: "flex flex-wrap justify-center gap-4",
                children: u.map((S, m) =>
                  a.jsx(
                    "div",
                    {
                      className:
                        "px-6 py-3 bg-primary/5 border border-primary/20 rounded-lg text-lg font-medium hover:bg-primary/10 transition-colors shadow-sm",
                      children: S,
                    },
                    m,
                  ),
                ),
              }),
            ],
          }),
        }),
        a.jsx("section", {
          id: "why-us",
          "data-component": "WhyUs",
          className: "section-pad bg-muted/30",
          children: a.jsxs("div", {
            className: "container",
            children: [
              a.jsx("div", {
                className: "text-center mb-12",
                children: a.jsx("h2", {
                  className: "text-3xl md:text-4xl font-bold mb-4",
                  children: "Why Choose Postal Systems Pro",
                }),
              }),
              a.jsx("div", {
                className:
                  "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto",
                children: d.map((S, m) =>
                  a.jsxs(
                    hr,
                    {
                      className:
                        "p-6 space-y-3 hover:shadow-md transition-shadow",
                      children: [
                        a.jsxs("h3", {
                          className:
                            "text-xl font-semibold text-primary flex items-center gap-2",
                          children: [
                            a.jsx(Yr, { className: "w-5 h-5 text-accent" }),
                            S.title,
                          ],
                        }),
                        a.jsx("p", {
                          className: "text-muted-foreground",
                          children: S.description,
                        }),
                      ],
                    },
                    m,
                  ),
                ),
              }),
            ],
          }),
        }),
        a.jsx("section", {
          id: "projects",
          "data-component": "Projects",
          className: "section-pad bg-background border-b border-border",
          children: a.jsxs("div", {
            className: "container",
            children: [
              a.jsx("div", {
                className: "text-center mb-12",
                children: a.jsx("h2", {
                  className: "text-3xl md:text-4xl font-bold mb-4",
                  children: "Featured Projects",
                }),
              }),
              a.jsx("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: f.map((S, m) =>
                  a.jsxs(
                    hr,
                    {
                      className:
                        "overflow-hidden hover:shadow-lg transition-all group",
                      children: [
                        a.jsx("div", {
                          className: "aspect-video bg-muted overflow-hidden",
                          children: a.jsx("img", {
                            src: S.image,
                            alt: S.alt,
                            className:
                              "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                            loading: "lazy",
                            width: "800",
                            height: "600",
                          }),
                        }),
                        a.jsxs("div", {
                          className: "p-6",
                          children: [
                            a.jsx("h3", {
                              className: "text-lg font-semibold mb-2",
                              children: S.title,
                            }),
                            a.jsx("p", {
                              className: "text-muted-foreground text-sm",
                              children: S.description,
                            }),
                          ],
                        }),
                      ],
                    },
                    m,
                  ),
                ),
              }),
            ],
          }),
        }),
        a.jsxs("section", {
          id: "process",
          "data-component": "Process",
          className:
            "section-pad bg-primary text-primary-foreground relative overflow-hidden",
          children: [
            a.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-br from-primary to-primary/90",
            }),
            a.jsxs("div", {
              className: "container relative z-10",
              children: [
                a.jsxs("div", {
                  className: "text-center mb-12",
                  children: [
                    a.jsx("h2", {
                      className: "text-3xl md:text-4xl font-bold mb-4",
                      children: "Our Installation Process",
                    }),
                    a.jsx("p", {
                      className: "text-lg text-primary-foreground/90",
                      children: "Site Walk → Quote → Schedule → USPS Handover",
                    }),
                  ],
                }),
                a.jsx("div", {
                  className: "grid md:grid-cols-4 gap-8 max-w-5xl mx-auto",
                  children: g.map((S, m) =>
                    a.jsxs(
                      "div",
                      {
                        className: "text-center space-y-3",
                        children: [
                          a.jsx("div", {
                            className:
                              "w-14 h-14 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-primary-foreground/20 shadow-lg",
                            children: a.jsx("span", {
                              className: "text-xl font-bold",
                              children: m + 1,
                            }),
                          }),
                          a.jsx("h3", {
                            className: "font-semibold text-base",
                            children: S.title,
                          }),
                          a.jsx("p", {
                            className:
                              "text-sm text-primary-foreground/80 leading-relaxed",
                            children: S.description,
                          }),
                        ],
                      },
                      m,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        a.jsx("section", {
          id: "faq",
          "data-component": "FAQ",
          className: "section-pad bg-background border-b border-border",
          children: a.jsxs("div", {
            className: "container max-w-3xl",
            children: [
              a.jsx("div", {
                className: "text-center mb-12",
                children: a.jsx("h2", {
                  className: "text-3xl md:text-4xl font-bold mb-4",
                  children: "Frequently Asked Questions",
                }),
              }),
              a.jsx("div", {
                className: "space-y-4",
                children: p.map((S, m) =>
                  a.jsx(
                    DP,
                    {
                      open: e === m,
                      onOpenChange: () => t(e === m ? null : m),
                      children: a.jsxs(hr, {
                        className:
                          "overflow-hidden shadow-sm hover:shadow-md transition-shadow",
                        children: [
                          a.jsxs(FP, {
                            className:
                              "w-full p-6 flex justify-between items-center text-left hover:bg-muted/30 transition-colors",
                            "aria-expanded": e === m,
                            children: [
                              a.jsx("h3", {
                                className: "font-semibold pr-4",
                                children: S.question,
                              }),
                              a.jsx(Ed, {
                                className: `w-5 h-5 shrink-0 transition-transform duration-200 ${e === m ? "rotate-180" : ""}`,
                              }),
                            ],
                          }),
                          a.jsx(zP, {
                            children: a.jsx("div", {
                              className:
                                "px-6 pb-6 border-t border-border pt-4",
                              children: a.jsx("p", {
                                className:
                                  "text-muted-foreground leading-relaxed",
                                children: S.answer,
                              }),
                            }),
                          }),
                        ],
                      }),
                    },
                    m,
                  ),
                ),
              }),
            ],
          }),
        }),
        a.jsx("section", {
          id: "quote",
          "data-component": "QuoteForm",
          className: "section-pad bg-muted/30",
          children: a.jsxs("div", {
            className: "container max-w-4xl",
            children: [
              a.jsxs("div", {
                className: "text-center mb-8",
                children: [
                  a.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: "Get a Quote",
                  }),
                  a.jsx("p", {
                    className: "text-muted-foreground text-lg",
                    children:
                      "Professional consultation with a USPS-approved contractor. No obligation.",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: [
                  a.jsx(hr, {
                    className:
                      "p-6 shadow-sm hover:shadow-md transition-shadow",
                    children: a.jsxs("form", {
                      className: "space-y-4",
                      onSubmit: (S) => S.preventDefault(),
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("label", {
                              htmlFor: "name",
                              className: "block text-sm font-medium mb-2",
                              children: "Name *",
                            }),
                            a.jsx(ds, {
                              id: "name",
                              name: "name",
                              required: !0,
                              placeholder: "Your name",
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          children: [
                            a.jsx("label", {
                              htmlFor: "phone",
                              className: "block text-sm font-medium mb-2",
                              children: "Phone *",
                            }),
                            a.jsx(ds, {
                              id: "phone",
                              name: "phone",
                              type: "tel",
                              required: !0,
                              placeholder: "(619) 555-0123",
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          children: [
                            a.jsx("label", {
                              htmlFor: "email",
                              className: "block text-sm font-medium mb-2",
                              children: "Email *",
                            }),
                            a.jsx(ds, {
                              id: "email",
                              name: "email",
                              type: "email",
                              required: !0,
                              placeholder: "you@example.com",
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          children: [
                            a.jsx("label", {
                              htmlFor: "property-type",
                              className: "block text-sm font-medium mb-2",
                              children: "Property Type *",
                            }),
                            a.jsxs(rm, {
                              name: "property_type",
                              required: !0,
                              children: [
                                a.jsx(xu, {
                                  id: "property-type",
                                  children: a.jsx(om, {
                                    placeholder: "Select property type",
                                  }),
                                }),
                                a.jsxs(wu, {
                                  children: [
                                    a.jsx(Ot, {
                                      value: "hoa",
                                      children: "HOA / Property Management",
                                    }),
                                    a.jsx(Ot, {
                                      value: "multifamily",
                                      children: "Apartments / Multifamily",
                                    }),
                                    a.jsx(Ot, {
                                      value: "builder",
                                      children: "Builder / General Contractor",
                                    }),
                                    a.jsx(Ot, {
                                      value: "commercial",
                                      children: "Commercial / Municipal",
                                    }),
                                    a.jsx(Ot, {
                                      value: "other",
                                      children: "Other",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          children: [
                            a.jsx("label", {
                              htmlFor: "city",
                              className: "block text-sm font-medium mb-2",
                              children: "Installation City *",
                            }),
                            a.jsx(ds, {
                              id: "city",
                              name: "installation_city",
                              required: !0,
                              placeholder: "San Diego",
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          children: [
                            a.jsx("label", {
                              htmlFor: "mailbox-count",
                              className: "block text-sm font-medium mb-2",
                              children: "Mailbox Count *",
                            }),
                            a.jsxs(rm, {
                              name: "mailbox_count",
                              required: !0,
                              children: [
                                a.jsx(xu, {
                                  id: "mailbox-count",
                                  children: a.jsx(om, {
                                    placeholder: "Select count",
                                  }),
                                }),
                                a.jsxs(wu, {
                                  children: [
                                    a.jsx(Ot, {
                                      value: "1-10",
                                      children: "1-10",
                                    }),
                                    a.jsx(Ot, {
                                      value: "11-25",
                                      children: "11-25",
                                    }),
                                    a.jsx(Ot, {
                                      value: "26-50",
                                      children: "26-50",
                                    }),
                                    a.jsx(Ot, {
                                      value: "51-100",
                                      children: "51-100",
                                    }),
                                    a.jsx(Ot, {
                                      value: "100+",
                                      children: "100+",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          children: [
                            a.jsx("label", {
                              htmlFor: "details",
                              className: "block text-sm font-medium mb-2",
                              children: "Project Details",
                            }),
                            a.jsx(Sy, {
                              id: "details",
                              name: "project_details",
                              placeholder: "Tell us about your project...",
                              rows: 4,
                            }),
                          ],
                        }),
                        a.jsx(wy, {
                          type: "submit",
                          className: "w-full btn-primary",
                          "aria-label":
                            "Submit project details to receive a custom quote",
                          children: "Get My Custom Quote",
                        }),
                        a.jsx("p", {
                          className:
                            "text-xs text-muted-foreground text-center mt-2",
                          children:
                            "We'll only use your info to respond to this request.",
                        }),
                      ],
                    }),
                  }),
                  a.jsxs(hr, {
                    className:
                      "p-6 bg-primary text-primary-foreground shadow-sm",
                    children: [
                      a.jsx("h3", {
                        className: "text-xl font-semibold mb-6",
                        children: "Contact Information",
                      }),
                      a.jsxs("div", {
                        className: "space-y-5",
                        children: [
                          a.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [
                              a.jsx(Ki, { className: "w-5 h-5 mt-1 shrink-0" }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("p", {
                                    className: "font-medium mb-1",
                                    children: "Phone",
                                  }),
                                  a.jsx("a", {
                                    href: "tel:+16194614787",
                                    className: "hover:underline text-lg",
                                    "aria-label": "Call Postal Systems",
                                    children: "(619) 461-4787",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [
                              a.jsx(dg, { className: "w-5 h-5 mt-1 shrink-0" }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("p", {
                                    className: "font-medium mb-1",
                                    children: "Email",
                                  }),
                                  a.jsx("a", {
                                    href: "mailto:info@postalsystemspro.com",
                                    className: "hover:underline break-all",
                                    "aria-label": "Email Postal Systems",
                                    children: "info@postalsystemspro.com",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [
                              a.jsx(Yr, { className: "w-5 h-5 mt-1 shrink-0" }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("p", {
                                    className: "font-medium mb-1",
                                    children: "License",
                                  }),
                                  a.jsx("p", {
                                    className: "text-primary-foreground/90",
                                    children: "CA CSLB #XXXXXXX",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [
                              a.jsx(jd, { className: "w-5 h-5 mt-1 shrink-0" }),
                              a.jsxs("div", {
                                children: [
                                  a.jsx("p", {
                                    className: "font-medium mb-1",
                                    children: "Hours",
                                  }),
                                  a.jsx("p", {
                                    className: "text-primary-foreground/90",
                                    children:
                                      "Mon–Fri 8am–5pm · By appointment",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        a.jsx("footer", {
          id: "contact",
          "data-component": "Footer",
          className: "bg-primary text-primary-foreground py-12",
          children: a.jsxs("div", {
            className: "container",
            children: [
              a.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 mb-8",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h3", {
                        className: "font-bold text-xl mb-4",
                        children: "Postal Systems",
                      }),
                      a.jsx("p", {
                        className: "text-primary-foreground/80 mb-4",
                        children:
                          "San Diego, CA · (619) 461-4787 · info@postalsystemspro.com",
                      }),
                      a.jsx("p", {
                        className: "text-sm text-primary-foreground/80 mb-2",
                        children:
                          "Serving San Diego, Orange County & Riverside",
                      }),
                      a.jsx("p", {
                        className: "text-sm text-primary-foreground/60",
                        children: "License: CA CSLB #XXXXXXX",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("h4", {
                        className: "font-semibold mb-4",
                        children: "Quick Links",
                      }),
                      a.jsxs("nav", {
                        className: "space-y-2",
                        children: [
                          a.jsx("a", {
                            href: "#services",
                            className:
                              "block text-primary-foreground/80 hover:text-primary-foreground",
                            children: "Services",
                          }),
                          a.jsx("a", {
                            href: "#service-areas",
                            className:
                              "block text-primary-foreground/80 hover:text-primary-foreground",
                            children: "Service Areas",
                          }),
                          a.jsx("a", {
                            href: "#process",
                            className:
                              "block text-primary-foreground/80 hover:text-primary-foreground",
                            children: "Process",
                          }),
                          a.jsx("a", {
                            href: "#faq",
                            className:
                              "block text-primary-foreground/80 hover:text-primary-foreground",
                            children: "FAQs",
                          }),
                          a.jsx("a", {
                            href: "#quote",
                            className:
                              "block text-primary-foreground/80 hover:text-primary-foreground",
                            children: "Get a Quote",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("h4", {
                        className: "font-semibold mb-4",
                        children: "Contact",
                      }),
                      a.jsxs("div", {
                        className: "space-y-3 text-primary-foreground/80",
                        children: [
                          a.jsxs("p", {
                            children: [
                              a.jsx("strong", { children: "Phone:" }),
                              " ",
                              a.jsx("a", {
                                href: "tel:+16194614787",
                                className: "hover:text-primary-foreground",
                                children: "(619) 461-4787",
                              }),
                            ],
                          }),
                          a.jsxs("p", {
                            children: [
                              a.jsx("strong", { children: "Email:" }),
                              " ",
                              a.jsx("a", {
                                href: "mailto:info@postalsystemspro.com",
                                className: "hover:text-primary-foreground",
                                children: "info@postalsystemspro.com",
                              }),
                            ],
                          }),
                          a.jsxs("p", {
                            children: [
                              a.jsx("strong", { children: "Location:" }),
                              " San Diego County, CA",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx("div", {
                className:
                  "pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60",
                children: a.jsxs("p", {
                  children: [
                    "© ",
                    new Date().getFullYear(),
                    " Postal Systems. All rights reserved.",
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  };
var Rx = { exports: {} },
  BP = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  HP = BP,
  WP = HP;
function Ax() {}
function Ox() {}
Ox.resetWarningCache = Ax;
var VP = function () {
  function e(r, o, s, i, l, c) {
    if (c !== WP) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Ox,
    resetWarningCache: Ax,
  };
  return ((n.PropTypes = n), n);
};
Rx.exports = VP();
var QP = Rx.exports;
const ve = Do(QP);
function GP(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var Mx = v,
  KP = GP(Mx);
function sm(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function qP(e, t) {
  ((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t));
}
var YP = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function XP(e, t, n) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function.",
    );
  function r(o) {
    return o.displayName || o.name || "Component";
  }
  return function (s) {
    if (typeof s != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var i = [],
      l;
    function c() {
      ((l = e(
        i.map(function (d) {
          return d.props;
        }),
      )),
        u.canUseDOM ? t(l) : n && (l = n(l)));
    }
    var u = (function (d) {
      qP(f, d);
      function f() {
        return d.apply(this, arguments) || this;
      }
      ((f.peek = function () {
        return l;
      }),
        (f.rewind = function () {
          if (f.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state.",
            );
          var S = l;
          return ((l = void 0), (i = []), S);
        }));
      var g = f.prototype;
      return (
        (g.UNSAFE_componentWillMount = function () {
          (i.push(this), c());
        }),
        (g.componentDidUpdate = function () {
          c();
        }),
        (g.componentWillUnmount = function () {
          var S = i.indexOf(this);
          (i.splice(S, 1), c());
        }),
        (g.render = function () {
          return KP.createElement(s, this.props);
        }),
        f
      );
    })(Mx.PureComponent);
    return (
      sm(u, "displayName", "SideEffect(" + r(s) + ")"),
      sm(u, "canUseDOM", YP),
      u
    );
  };
}
var ZP = XP;
const JP = Do(ZP);
var eT = typeof Element < "u",
  tT = typeof Map == "function",
  nT = typeof Set == "function",
  rT = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Zi(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Zi(e[r], t[r])) return !1;
      return !0;
    }
    var s;
    if (tT && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!Zi(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (nT && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (s = e.entries(); !(r = s.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (rT && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (eT && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !Zi(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var oT = function (t, n) {
  try {
    return Zi(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return (
        console.warn("react-fast-compare cannot handle circular refs"),
        !1
      );
    throw r;
  }
};
const sT = Do(oT);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var im = Object.getOwnPropertySymbols,
  iT = Object.prototype.hasOwnProperty,
  aT = Object.prototype.propertyIsEnumerable;
function lT(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined",
    );
  return Object(e);
}
function cT() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (s) {
      return t[s];
    });
    if (r.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (s) {
        o[s] = s;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var uT = cT()
  ? Object.assign
  : function (e, t) {
      for (var n, r = lT(e), o, s = 1; s < arguments.length; s++) {
        n = Object(arguments[s]);
        for (var i in n) iT.call(n, i) && (r[i] = n[i]);
        if (im) {
          o = im(n);
          for (var l = 0; l < o.length; l++)
            aT.call(n, o[l]) && (r[o[l]] = n[o[l]]);
        }
      }
      return r;
    };
const dT = Do(uT);
var Pr = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  q = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(q).map(function (e) {
  return q[e];
});
var ye = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  Aa = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  Gs = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  fT = Object.keys(Aa).reduce(function (e, t) {
    return ((e[Aa[t]] = t), e);
  }, {}),
  pT = [q.NOSCRIPT, q.SCRIPT, q.STYLE],
  Ut = "data-react-helmet",
  mT =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  hT = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  vT = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        ((o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o));
      }
    }
    return function (t, n, r) {
      return (n && e(t.prototype, n), r && e(t, r), t);
    };
  })(),
  nt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  gT = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t,
      );
    ((e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t)));
  },
  am = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
    return n;
  },
  yT = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  },
  Su = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  xT = function (t) {
    var n = xo(t, q.TITLE),
      r = xo(t, Gs.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var o = xo(t, Gs.DEFAULT_TITLE);
    return n || o || void 0;
  },
  wT = function (t) {
    return xo(t, Gs.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  rc = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < "u";
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, o) {
        return nt({}, r, o);
      }, {});
  },
  ST = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[q.BASE] < "u";
      })
      .map(function (r) {
        return r[q.BASE];
      })
      .reverse()
      .reduce(function (r, o) {
        if (!r.length)
          for (var s = Object.keys(o), i = 0; i < s.length; i++) {
            var l = s[i],
              c = l.toLowerCase();
            if (t.indexOf(c) !== -1 && o[c]) return r.concat(o);
          }
        return r;
      }, []);
  },
  ss = function (t, n, r) {
    var o = {};
    return r
      .filter(function (s) {
        return Array.isArray(s[t])
          ? !0
          : (typeof s[t] < "u" &&
              jT(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  mT(s[t]) +
                  '"',
              ),
            !1);
      })
      .map(function (s) {
        return s[t];
      })
      .reverse()
      .reduce(function (s, i) {
        var l = {};
        i.filter(function (g) {
          for (var p = void 0, S = Object.keys(g), m = 0; m < S.length; m++) {
            var w = S[m],
              y = w.toLowerCase();
            (n.indexOf(y) !== -1 &&
              !(p === ye.REL && g[p].toLowerCase() === "canonical") &&
              !(y === ye.REL && g[y].toLowerCase() === "stylesheet") &&
              (p = y),
              n.indexOf(w) !== -1 &&
                (w === ye.INNER_HTML ||
                  w === ye.CSS_TEXT ||
                  w === ye.ITEM_PROP) &&
                (p = w));
          }
          if (!p || !g[p]) return !1;
          var h = g[p].toLowerCase();
          return (
            o[p] || (o[p] = {}),
            l[p] || (l[p] = {}),
            o[p][h] ? !1 : ((l[p][h] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (g) {
            return s.push(g);
          });
        for (var c = Object.keys(l), u = 0; u < c.length; u++) {
          var d = c[u],
            f = dT({}, o[d], l[d]);
          o[d] = f;
        }
        return s;
      }, [])
      .reverse();
  },
  xo = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var o = t[r];
      if (o.hasOwnProperty(n)) return o[n];
    }
    return null;
  },
  bT = function (t) {
    return {
      baseTag: ST([ye.HREF, ye.TARGET], t),
      bodyAttributes: rc(Pr.BODY, t),
      defer: xo(t, Gs.DEFER),
      encode: xo(t, Gs.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: rc(Pr.HTML, t),
      linkTags: ss(q.LINK, [ye.REL, ye.HREF], t),
      metaTags: ss(
        q.META,
        [ye.NAME, ye.CHARSET, ye.HTTPEQUIV, ye.PROPERTY, ye.ITEM_PROP],
        t,
      ),
      noscriptTags: ss(q.NOSCRIPT, [ye.INNER_HTML], t),
      onChangeClientState: wT(t),
      scriptTags: ss(q.SCRIPT, [ye.SRC, ye.INNER_HTML], t),
      styleTags: ss(q.STYLE, [ye.CSS_TEXT], t),
      title: xT(t),
      titleAttributes: rc(Pr.TITLE, t),
    };
  },
  bu = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            bu(t);
          }, 0);
    };
  })(),
  lm = function (t) {
    return clearTimeout(t);
  },
  CT =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        bu
      : global.requestAnimationFrame || bu,
  ET =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        lm
      : global.cancelAnimationFrame || lm,
  jT = function (t) {
    return console && typeof console.warn == "function" && console.warn(t);
  },
  is = null,
  NT = function (t) {
    (is && ET(is),
      t.defer
        ? (is = CT(function () {
            cm(t, function () {
              is = null;
            });
          }))
        : (cm(t), (is = null)));
  },
  cm = function (t, n) {
    var r = t.baseTag,
      o = t.bodyAttributes,
      s = t.htmlAttributes,
      i = t.linkTags,
      l = t.metaTags,
      c = t.noscriptTags,
      u = t.onChangeClientState,
      d = t.scriptTags,
      f = t.styleTags,
      g = t.title,
      p = t.titleAttributes;
    (Cu(q.BODY, o), Cu(q.HTML, s), PT(g, p));
    var S = {
        baseTag: qr(q.BASE, r),
        linkTags: qr(q.LINK, i),
        metaTags: qr(q.META, l),
        noscriptTags: qr(q.NOSCRIPT, c),
        scriptTags: qr(q.SCRIPT, d),
        styleTags: qr(q.STYLE, f),
      },
      m = {},
      w = {};
    (Object.keys(S).forEach(function (y) {
      var h = S[y],
        x = h.newTags,
        b = h.oldTags;
      (x.length && (m[y] = x), b.length && (w[y] = S[y].oldTags));
    }),
      n && n(),
      u(t, m, w));
  },
  _x = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  PT = function (t, n) {
    (typeof t < "u" && document.title !== t && (document.title = _x(t)),
      Cu(q.TITLE, n));
  },
  Cu = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var o = r.getAttribute(Ut),
          s = o ? o.split(",") : [],
          i = [].concat(s),
          l = Object.keys(n),
          c = 0;
        c < l.length;
        c++
      ) {
        var u = l[c],
          d = n[u] || "";
        (r.getAttribute(u) !== d && r.setAttribute(u, d),
          s.indexOf(u) === -1 && s.push(u));
        var f = i.indexOf(u);
        f !== -1 && i.splice(f, 1);
      }
      for (var g = i.length - 1; g >= 0; g--) r.removeAttribute(i[g]);
      s.length === i.length
        ? r.removeAttribute(Ut)
        : r.getAttribute(Ut) !== l.join(",") && r.setAttribute(Ut, l.join(","));
    }
  },
  qr = function (t, n) {
    var r = document.head || document.querySelector(q.HEAD),
      o = r.querySelectorAll(t + "[" + Ut + "]"),
      s = Array.prototype.slice.call(o),
      i = [],
      l = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (c) {
          var u = document.createElement(t);
          for (var d in c)
            if (c.hasOwnProperty(d))
              if (d === ye.INNER_HTML) u.innerHTML = c.innerHTML;
              else if (d === ye.CSS_TEXT)
                u.styleSheet
                  ? (u.styleSheet.cssText = c.cssText)
                  : u.appendChild(document.createTextNode(c.cssText));
              else {
                var f = typeof c[d] > "u" ? "" : c[d];
                u.setAttribute(d, f);
              }
          (u.setAttribute(Ut, "true"),
            s.some(function (g, p) {
              return ((l = p), u.isEqualNode(g));
            })
              ? s.splice(l, 1)
              : i.push(u));
        }),
      s.forEach(function (c) {
        return c.parentNode.removeChild(c);
      }),
      i.forEach(function (c) {
        return r.appendChild(c);
      }),
      { oldTags: s, newTags: i }
    );
  },
  Ix = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
      return n ? n + " " + o : o;
    }, "");
  },
  TT = function (t, n, r, o) {
    var s = Ix(r),
      i = _x(n);
    return s
      ? "<" + t + " " + Ut + '="true" ' + s + ">" + Su(i, o) + "</" + t + ">"
      : "<" + t + " " + Ut + '="true">' + Su(i, o) + "</" + t + ">";
  },
  kT = function (t, n, r) {
    return n.reduce(function (o, s) {
      var i = Object.keys(s)
          .filter(function (u) {
            return !(u === ye.INNER_HTML || u === ye.CSS_TEXT);
          })
          .reduce(function (u, d) {
            var f = typeof s[d] > "u" ? d : d + '="' + Su(s[d], r) + '"';
            return u ? u + " " + f : f;
          }, ""),
        l = s.innerHTML || s.cssText || "",
        c = pT.indexOf(t) === -1;
      return (
        o +
        "<" +
        t +
        " " +
        Ut +
        '="true" ' +
        i +
        (c ? "/>" : ">" + l + "</" + t + ">")
      );
    }, "");
  },
  Lx = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return ((r[Aa[o] || o] = t[o]), r);
    }, n);
  },
  RT = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return ((r[fT[o] || o] = t[o]), r);
    }, n);
  },
  AT = function (t, n, r) {
    var o,
      s = ((o = { key: n }), (o[Ut] = !0), o),
      i = Lx(r, s);
    return [O.createElement(q.TITLE, i, n)];
  },
  OT = function (t, n) {
    return n.map(function (r, o) {
      var s,
        i = ((s = { key: o }), (s[Ut] = !0), s);
      return (
        Object.keys(r).forEach(function (l) {
          var c = Aa[l] || l;
          if (c === ye.INNER_HTML || c === ye.CSS_TEXT) {
            var u = r.innerHTML || r.cssText;
            i.dangerouslySetInnerHTML = { __html: u };
          } else i[c] = r[l];
        }),
        O.createElement(t, i)
      );
    });
  },
  ln = function (t, n, r) {
    switch (t) {
      case q.TITLE:
        return {
          toComponent: function () {
            return AT(t, n.title, n.titleAttributes);
          },
          toString: function () {
            return TT(t, n.title, n.titleAttributes, r);
          },
        };
      case Pr.BODY:
      case Pr.HTML:
        return {
          toComponent: function () {
            return Lx(n);
          },
          toString: function () {
            return Ix(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return OT(t, n);
          },
          toString: function () {
            return kT(t, n, r);
          },
        };
    }
  },
  Dx = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      o = t.encode,
      s = t.htmlAttributes,
      i = t.linkTags,
      l = t.metaTags,
      c = t.noscriptTags,
      u = t.scriptTags,
      d = t.styleTags,
      f = t.title,
      g = f === void 0 ? "" : f,
      p = t.titleAttributes;
    return {
      base: ln(q.BASE, n, o),
      bodyAttributes: ln(Pr.BODY, r, o),
      htmlAttributes: ln(Pr.HTML, s, o),
      link: ln(q.LINK, i, o),
      meta: ln(q.META, l, o),
      noscript: ln(q.NOSCRIPT, c, o),
      script: ln(q.SCRIPT, u, o),
      style: ln(q.STYLE, d, o),
      title: ln(q.TITLE, { title: g, titleAttributes: p }, o),
    };
  },
  MT = function (t) {
    var n, r;
    return (
      (r = n =
        (function (o) {
          gT(s, o);
          function s() {
            return (hT(this, s), yT(this, o.apply(this, arguments)));
          }
          return (
            (s.prototype.shouldComponentUpdate = function (l) {
              return !sT(this.props, l);
            }),
            (s.prototype.mapNestedChildrenToProps = function (l, c) {
              if (!c) return null;
              switch (l.type) {
                case q.SCRIPT:
                case q.NOSCRIPT:
                  return { innerHTML: c };
                case q.STYLE:
                  return { cssText: c };
              }
              throw new Error(
                "<" +
                  l.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information.",
              );
            }),
            (s.prototype.flattenArrayTypeChildren = function (l) {
              var c,
                u = l.child,
                d = l.arrayTypeChildren,
                f = l.newChildProps,
                g = l.nestedChildren;
              return nt(
                {},
                d,
                ((c = {}),
                (c[u.type] = [].concat(d[u.type] || [], [
                  nt({}, f, this.mapNestedChildrenToProps(u, g)),
                ])),
                c),
              );
            }),
            (s.prototype.mapObjectTypeChildren = function (l) {
              var c,
                u,
                d = l.child,
                f = l.newProps,
                g = l.newChildProps,
                p = l.nestedChildren;
              switch (d.type) {
                case q.TITLE:
                  return nt(
                    {},
                    f,
                    ((c = {}),
                    (c[d.type] = p),
                    (c.titleAttributes = nt({}, g)),
                    c),
                  );
                case q.BODY:
                  return nt({}, f, { bodyAttributes: nt({}, g) });
                case q.HTML:
                  return nt({}, f, { htmlAttributes: nt({}, g) });
              }
              return nt({}, f, ((u = {}), (u[d.type] = nt({}, g)), u));
            }),
            (s.prototype.mapArrayTypeChildrenToProps = function (l, c) {
              var u = nt({}, c);
              return (
                Object.keys(l).forEach(function (d) {
                  var f;
                  u = nt({}, u, ((f = {}), (f[d] = l[d]), f));
                }),
                u
              );
            }),
            (s.prototype.warnOnInvalidChildren = function (l, c) {
              return !0;
            }),
            (s.prototype.mapChildrenToProps = function (l, c) {
              var u = this,
                d = {};
              return (
                O.Children.forEach(l, function (f) {
                  if (!(!f || !f.props)) {
                    var g = f.props,
                      p = g.children,
                      S = am(g, ["children"]),
                      m = RT(S);
                    switch ((u.warnOnInvalidChildren(f, p), f.type)) {
                      case q.LINK:
                      case q.META:
                      case q.NOSCRIPT:
                      case q.SCRIPT:
                      case q.STYLE:
                        d = u.flattenArrayTypeChildren({
                          child: f,
                          arrayTypeChildren: d,
                          newChildProps: m,
                          nestedChildren: p,
                        });
                        break;
                      default:
                        c = u.mapObjectTypeChildren({
                          child: f,
                          newProps: c,
                          newChildProps: m,
                          nestedChildren: p,
                        });
                        break;
                    }
                  }
                }),
                (c = this.mapArrayTypeChildrenToProps(d, c)),
                c
              );
            }),
            (s.prototype.render = function () {
              var l = this.props,
                c = l.children,
                u = am(l, ["children"]),
                d = nt({}, u);
              return (
                c && (d = this.mapChildrenToProps(c, d)),
                O.createElement(t, d)
              );
            }),
            vT(s, null, [
              {
                key: "canUseDOM",
                set: function (l) {
                  t.canUseDOM = l;
                },
              },
            ]),
            s
          );
        })(O.Component)),
      (n.propTypes = {
        base: ve.object,
        bodyAttributes: ve.object,
        children: ve.oneOfType([ve.arrayOf(ve.node), ve.node]),
        defaultTitle: ve.string,
        defer: ve.bool,
        encodeSpecialCharacters: ve.bool,
        htmlAttributes: ve.object,
        link: ve.arrayOf(ve.object),
        meta: ve.arrayOf(ve.object),
        noscript: ve.arrayOf(ve.object),
        onChangeClientState: ve.func,
        script: ve.arrayOf(ve.object),
        style: ve.arrayOf(ve.object),
        title: ve.string,
        titleAttributes: ve.object,
        titleTemplate: ve.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var o = t.rewind();
        return (
          o ||
            (o = Dx({
              baseTag: [],
              bodyAttributes: {},
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          o
        );
      }),
      r
    );
  },
  _T = function () {
    return null;
  },
  IT = JP(bT, NT, Dx)(_T),
  je = MT(IT);
je.renderStatic = je.rewind;
function Ae() {
  const [e, t] = v.useState(!1);
  return a.jsx("header", {
    className:
      "sticky top-0 z-50 bg-background border-b border-border shadow-sm",
    children: a.jsxs("div", {
      className: "container mx-auto",
      children: [
        a.jsxs("div", {
          className: "flex items-center justify-between py-4",
          children: [
            a.jsx(Y, {
              to: "/",
              className: "text-xl font-bold text-primary",
              children: "Postal Systems Pro",
            }),
            a.jsxs("nav", {
              className: "hidden md:flex items-center gap-6",
              children: [
                a.jsx(Y, {
                  to: "/services",
                  className:
                    "text-sm font-medium text-foreground hover:text-primary transition-colors",
                  children: "Services",
                }),
                a.jsx(Y, {
                  to: "/service-areas",
                  className:
                    "text-sm font-medium text-foreground hover:text-primary transition-colors",
                  children: "Service Areas",
                }),
                a.jsx(Y, {
                  to: "/projects",
                  className:
                    "text-sm font-medium text-foreground hover:text-primary transition-colors",
                  children: "Projects",
                }),
                a.jsx(Y, {
                  to: "/about",
                  className:
                    "text-sm font-medium text-foreground hover:text-primary transition-colors",
                  children: "About",
                }),
                a.jsx(Y, {
                  to: "/contact",
                  className: "btn-primary",
                  children: "Get a Quote",
                }),
              ],
            }),
            a.jsx("button", {
              onClick: () => t(!e),
              className: "md:hidden p-2 text-foreground hover:text-primary",
              "aria-label": "Toggle menu",
              children: e ? a.jsx(pg, { size: 24 }) : a.jsx(S1, { size: 24 }),
            }),
          ],
        }),
        e &&
          a.jsx("nav", {
            className: "md:hidden py-4 border-t border-border",
            children: a.jsxs("div", {
              className: "flex flex-col gap-4",
              children: [
                a.jsx(Y, {
                  to: "/services",
                  className:
                    "text-sm font-medium text-foreground hover:text-primary transition-colors",
                  onClick: () => t(!1),
                  children: "Services",
                }),
                a.jsx(Y, {
                  to: "/service-areas",
                  className:
                    "text-sm font-medium text-foreground hover:text-primary transition-colors",
                  onClick: () => t(!1),
                  children: "Service Areas",
                }),
                a.jsx(Y, {
                  to: "/projects",
                  className:
                    "text-sm font-medium text-foreground hover:text-primary transition-colors",
                  onClick: () => t(!1),
                  children: "Projects",
                }),
                a.jsx(Y, {
                  to: "/about",
                  className:
                    "text-sm font-medium text-foreground hover:text-primary transition-colors",
                  onClick: () => t(!1),
                  children: "About",
                }),
                a.jsx(Y, {
                  to: "/contact",
                  className: "btn-primary inline-block text-center",
                  onClick: () => t(!1),
                  children: "Get a Quote",
                }),
              ],
            }),
          }),
      ],
    }),
  });
}
function Oe() {
  return a.jsx("footer", {
    className: "bg-primary text-primary-foreground py-12",
    children: a.jsxs("div", {
      className: "container mx-auto",
      children: [
        a.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",
          children: [
            a.jsxs("div", {
              children: [
                a.jsx("h3", {
                  className: "font-bold text-lg mb-4",
                  children: "Postal Systems Pro",
                }),
                a.jsx("p", {
                  className: "text-sm text-primary-foreground/80",
                  children:
                    "USPS-approved vendor & California licensed contractor serving San Diego County.",
                }),
              ],
            }),
            a.jsxs("div", {
              children: [
                a.jsx("h4", {
                  className: "font-semibold mb-4",
                  children: "Services",
                }),
                a.jsxs("ul", {
                  className: "space-y-2 text-sm",
                  children: [
                    a.jsx("li", {
                      children: a.jsx(Y, {
                        to: "/services/cluster-box-units-cbu",
                        className:
                          "text-primary-foreground/80 hover:text-primary-foreground",
                        children: "Cluster Box Units",
                      }),
                    }),
                    a.jsx("li", {
                      children: a.jsx(Y, {
                        to: "/services/4c-horizontal-mailboxes",
                        className:
                          "text-primary-foreground/80 hover:text-primary-foreground",
                        children: "4C Horizontal Mailboxes",
                      }),
                    }),
                    a.jsx("li", {
                      children: a.jsx(Y, {
                        to: "/services/parcel-lockers",
                        className:
                          "text-primary-foreground/80 hover:text-primary-foreground",
                        children: "Parcel Lockers",
                      }),
                    }),
                    a.jsx("li", {
                      children: a.jsx(Y, {
                        to: "/services/repairs-and-lock-changes",
                        className:
                          "text-primary-foreground/80 hover:text-primary-foreground",
                        children: "Repairs & Lock Changes",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              children: [
                a.jsx("h4", {
                  className: "font-semibold mb-4",
                  children: "Quick Links",
                }),
                a.jsxs("ul", {
                  className: "space-y-2 text-sm",
                  children: [
                    a.jsx("li", {
                      children: a.jsx(Y, {
                        to: "/services",
                        className:
                          "text-primary-foreground/80 hover:text-primary-foreground",
                        children: "All Services",
                      }),
                    }),
                    a.jsx("li", {
                      children: a.jsx(Y, {
                        to: "/service-areas",
                        className:
                          "text-primary-foreground/80 hover:text-primary-foreground",
                        children: "Service Areas",
                      }),
                    }),
                    a.jsx("li", {
                      children: a.jsx(Y, {
                        to: "/projects",
                        className:
                          "text-primary-foreground/80 hover:text-primary-foreground",
                        children: "Projects",
                      }),
                    }),
                    a.jsx("li", {
                      children: a.jsx(Y, {
                        to: "/about",
                        className:
                          "text-primary-foreground/80 hover:text-primary-foreground",
                        children: "About",
                      }),
                    }),
                    a.jsx("li", {
                      children: a.jsx(Y, {
                        to: "/contact",
                        className:
                          "text-primary-foreground/80 hover:text-primary-foreground",
                        children: "Contact",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              children: [
                a.jsx("h4", {
                  className: "font-semibold mb-4",
                  children: "Contact",
                }),
                a.jsxs("ul", {
                  className: "space-y-2 text-sm text-primary-foreground/80",
                  children: [
                    a.jsxs("li", {
                      children: [
                        "Phone: ",
                        a.jsx("a", {
                          href: "tel:+16194614787",
                          className: "hover:text-primary-foreground",
                          children: "(619) 461-4787",
                        }),
                      ],
                    }),
                    a.jsxs("li", {
                      children: [
                        "Email: ",
                        a.jsx("a", {
                          href: "mailto:info@postalsystemspro.com",
                          className: "hover:text-primary-foreground",
                          children: "info@postalsystemspro.com",
                        }),
                      ],
                    }),
                    a.jsx("li", {
                      children: "Service Area: San Diego County, CA",
                    }),
                    a.jsx("li", { children: "License: CA CSLB #XXXXXXX" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        a.jsx("div", {
          className:
            "pt-8 border-t border-primary-foreground/20 text-sm text-center text-primary-foreground/60",
          children: a.jsxs("p", {
            children: [
              "© ",
              new Date().getFullYear(),
              " Postal Systems Pro. All rights reserved.",
            ],
          }),
        }),
      ],
    }),
  });
}
function LT() {
  const e = [
    {
      title: "Cluster Box Units (CBU)",
      slug: "cluster-box-units-cbu",
      description:
        "USPS-compliant CBU installations for communities and commercial properties. We handle layout, concrete pads, anchors, and USPS inspection handoff.",
      image: wx,
      features: [
        "Secure parcel compartments",
        "Weather-resistant construction",
        "USPS coordination",
        "Multiple size options",
      ],
    },
    {
      title: "4C Horizontal Mailboxes",
      slug: "4c-horizontal-mailboxes",
      description:
        "Interior and exterior 4C mailbox systems meeting current USPS standards. Ideal for remodels and new construction with integrated parcel lockers.",
      image: Sx,
      features: [
        "ADA-compliant access",
        "Parcel locker integration",
        "Wall or pedestal mount",
        "Current USPS standards",
      ],
    },
    {
      title: "Parcel Lockers",
      slug: "parcel-lockers",
      description:
        "Strategic parcel locker planning and installation to reduce package pileups and improve security for your residents or tenants.",
      image: bx,
      features: [
        "Capacity planning",
        "Secure placement",
        "USPS coordination",
        "Weather protection",
      ],
    },
    {
      title: "Pedestal & Wall-Mounted Boxes",
      slug: "pedestal-wall",
      description:
        "Code-compliant mailbox solutions for smaller sites, offices, and campuses. Weather-ready and professionally installed.",
      image: Cx,
      features: [
        "Multiple mount options",
        "Weather-resistant",
        "Code compliance",
        "Small site solutions",
      ],
    },
    {
      title: "Repairs & Lock Changes",
      slug: "repairs-and-lock-changes",
      description:
        "Fast response for vandalism repairs, tenant lock changes, rekeying, and hardware replacements to maintain security.",
      image: Ex,
      features: [
        "Tenant turnovers",
        "Rekey services",
        "Hardware replacement",
        "Vandalism repair",
      ],
    },
    {
      title: "USPS Compliance Consulting",
      slug: "usps-compliance-consulting",
      description:
        "Expert guidance on site layout, ADA requirements, clearances, slopes, and USPS approval processes.",
      image: jx,
      features: [
        "Site layout review",
        "ADA compliance",
        "USPS coordination",
        "Code verification",
      ],
    },
  ];
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children:
              "Commercial Mailbox Services | CBU, 4C, Repairs | San Diego County",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "Complete mailbox services for San Diego County: CBU installation, 4C systems, parcel lockers, repairs, lock changes, and USPS compliance consulting.",
          }),
          a.jsx("link", {
            rel: "canonical",
            href: "https://www.postalsystemspro.com/services",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsxs("main", {
        children: [
          a.jsx("section", {
            className: "section-pad bg-muted",
            children: a.jsxs("div", {
              className: "container mx-auto",
              children: [
                a.jsx("h1", {
                  className: "text-4xl font-bold text-center mb-6",
                  children: "Our Services",
                }),
                a.jsx("p", {
                  className:
                    "text-center text-muted-foreground max-w-3xl mx-auto mb-12",
                  children:
                    "Complete commercial mailbox solutions from USPS-approved installations to ongoing maintenance and repairs across San Diego County.",
                }),
                a.jsx("div", {
                  className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                  children: e.map((t) =>
                    a.jsxs(
                      "div",
                      {
                        className:
                          "bg-card rounded-xl shadow-sm overflow-hidden",
                        children: [
                          a.jsx("img", {
                            src: t.image,
                            alt: t.title,
                            width: 400,
                            height: 250,
                            loading: "lazy",
                            className: "w-full h-48 object-cover",
                          }),
                          a.jsxs("div", {
                            className: "p-6",
                            children: [
                              a.jsx("h2", {
                                className: "text-xl font-semibold mb-3",
                                children: t.title,
                              }),
                              a.jsx("p", {
                                className: "text-muted-foreground text-sm mb-4",
                                children: t.description,
                              }),
                              a.jsx("ul", {
                                className: "space-y-2 mb-6",
                                children: t.features.map((n) =>
                                  a.jsxs(
                                    "li",
                                    {
                                      className:
                                        "text-sm flex items-start gap-2",
                                      children: [
                                        a.jsx("span", {
                                          className: "text-primary mt-0.5",
                                          children: "✓",
                                        }),
                                        a.jsx("span", { children: n }),
                                      ],
                                    },
                                    n,
                                  ),
                                ),
                              }),
                              a.jsx(Y, {
                                to: `/services/${t.slug}`,
                                className: "btn-secondary w-full text-center",
                                children: "Learn More",
                              }),
                            ],
                          }),
                        ],
                      },
                      t.slug,
                    ),
                  ),
                }),
              ],
            }),
          }),
          a.jsx("section", {
            className: "section-pad bg-primary text-primary-foreground",
            children: a.jsxs("div", {
              className: "container mx-auto text-center",
              children: [
                a.jsx("h2", {
                  className: "text-3xl font-bold mb-4",
                  children: "Need Help Choosing?",
                }),
                a.jsx("p", {
                  className: "text-xl mb-8 text-primary-foreground/90",
                  children:
                    "Our team can recommend the right solution for your property.",
                }),
                a.jsxs("div", {
                  className: "flex flex-wrap justify-center gap-4",
                  children: [
                    a.jsx(Y, {
                      to: "/contact",
                      className: "btn-primary",
                      children: "Get a Quote",
                    }),
                    a.jsx("a", {
                      href: "tel:+16194614787",
                      className: "btn-secondary",
                      children: "Call (619) 461-4787",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function DT() {
  const e = [
    {
      name: "San Diego",
      slug: "san-diego",
      description:
        "Serving downtown, North Park, Mission Valley, and surrounding neighborhoods.",
    },
    {
      name: "Chula Vista",
      slug: "chula-vista",
      description:
        "Complete mailbox services for South Bay communities and businesses.",
    },
    {
      name: "El Cajon",
      slug: "el-cajon",
      description:
        "Professional installations throughout East County San Diego.",
    },
    {
      name: "La Mesa",
      slug: "la-mesa",
      description: "Trusted mailbox solutions for La Mesa properties and HOAs.",
    },
    {
      name: "Santee",
      slug: "santee",
      description:
        "CBU and 4C installations for Santee residential and commercial sites.",
    },
    {
      name: "Encinitas",
      slug: "encinitas",
      description:
        "Coastal-ready mailbox systems for North County communities.",
    },
    {
      name: "Carlsbad",
      slug: "carlsbad",
      description: "Premium mailbox installations for Carlsbad properties.",
    },
    {
      name: "Vista",
      slug: "vista",
      description: "Comprehensive mailbox services throughout Vista.",
    },
    {
      name: "Oceanside",
      slug: "oceanside",
      description:
        "Weather-resistant installations for Oceanside coastal properties.",
    },
    {
      name: "Escondido",
      slug: "escondido",
      description: "Expert mailbox solutions for Escondido communities.",
    },
  ];
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children:
              "Service Areas - San Diego County Mailbox Installation | Postal Systems Pro",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "Professional mailbox installation across San Diego County: San Diego, Chula Vista, El Cajon, La Mesa, Santee, Encinitas, Carlsbad, Vista, Oceanside, Escondido.",
          }),
          a.jsx("link", {
            rel: "canonical",
            href: "https://www.postalsystemspro.com/service-areas",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold text-center mb-6",
                children: "Service Areas",
              }),
              a.jsx("p", {
                className:
                  "text-center text-muted-foreground max-w-3xl mx-auto mb-12",
                children:
                  "We proudly serve property managers, HOAs, builders, and commercial facilities throughout San Diego County with professional mailbox installation and service.",
              }),
              a.jsx("div", {
                className: "max-w-4xl mx-auto mb-12",
                children: a.jsx("img", {
                  src: kx,
                  alt: "Service coverage map of San Diego County",
                  width: 800,
                  height: 500,
                  loading: "lazy",
                  className: "w-full rounded-xl shadow-sm",
                }),
              }),
              a.jsx("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: e.map((t) =>
                  a.jsx(
                    Y,
                    {
                      to: `/service-areas/${t.slug}`,
                      className:
                        "bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group",
                      children: a.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [
                          a.jsx(jd, {
                            className: "text-primary flex-shrink-0 mt-1",
                            size: 24,
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("h2", {
                                className:
                                  "text-xl font-semibold mb-2 group-hover:text-primary transition-colors",
                                children: t.name,
                              }),
                              a.jsx("p", {
                                className: "text-muted-foreground text-sm",
                                children: t.description,
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    t.slug,
                  ),
                ),
              }),
              a.jsxs("div", {
                className: "mt-12 p-8 bg-card rounded-xl text-center",
                children: [
                  a.jsx("h3", {
                    className: "text-2xl font-semibold mb-4",
                    children: "Don't See Your City?",
                  }),
                  a.jsx("p", {
                    className: "text-muted-foreground mb-6",
                    children:
                      "We often work in nearby areas throughout San Diego County. Contact us to confirm service availability.",
                  }),
                  a.jsxs("div", {
                    className: "flex flex-wrap justify-center gap-4",
                    children: [
                      a.jsx("a", {
                        href: "tel:+16194614787",
                        className: "btn-primary",
                        children: "Call (619) 461-4787",
                      }),
                      a.jsx(Y, {
                        to: "/contact",
                        className: "btn-secondary",
                        children: "Request a Quote",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function FT() {
  const e = [
    {
      title: "16-Door CBU Installation",
      location: "Eastlake HOA, San Marcos",
      description:
        "Complete CBU upgrade including concrete pad preparation, professional installation, and integrated parcel lockers for enhanced package security.",
      image: Nx,
      alt: "16-door CBU installation in San Marcos with parcel lockers",
      details: [
        "16-door cluster box unit",
        "Integrated parcel lockers",
        "Concrete pad and anchors",
        "USPS coordination and approval",
      ],
    },
    {
      title: "4C Mailbox Bank Retrofit",
      location: "Multifamily Complex, Chula Vista",
      description:
        "Interior 4C horizontal mailbox installation meeting current USPS standards with ADA-compliant approach and access.",
      image: Px,
      alt: "Interior 4C mailbox bank retrofit in Chula Vista meeting ADA standards",
      details: [
        "4C horizontal mailboxes",
        "ADA-compliant installation",
        "Interior retrofit",
        "Parcel locker integration",
      ],
    },
    {
      title: "Parcel Locker Expansion",
      location: "Apartment Community, Escondido",
      description:
        "Strategic parcel locker capacity addition to handle increased delivery volume for high-density residential property.",
      image: Tx,
      alt: "Parcel locker expansion for multifamily property in Escondido",
      details: [
        "Additional parcel capacity",
        "Secure locker system",
        "High-volume solution",
        "USPS coordinated",
      ],
    },
  ];
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children:
              "Project Portfolio - Mailbox Installations | Postal Systems Pro",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "View our completed mailbox installation projects across San Diego County: CBU installations, 4C retrofits, and parcel locker systems.",
          }),
          a.jsx("link", {
            rel: "canonical",
            href: "https://www.postalsystemspro.com/projects",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsxs("main", {
        children: [
          a.jsx("section", {
            className: "section-pad bg-muted",
            children: a.jsxs("div", {
              className: "container mx-auto",
              children: [
                a.jsx("h1", {
                  className: "text-4xl font-bold text-center mb-6",
                  children: "Featured Projects",
                }),
                a.jsx("p", {
                  className:
                    "text-center text-muted-foreground max-w-3xl mx-auto mb-12",
                  children:
                    "Professional mailbox installations across San Diego County for HOAs, property managers, and commercial facilities.",
                }),
                a.jsx("div", {
                  className: "space-y-12",
                  children: e.map((t, n) =>
                    a.jsxs(
                      "div",
                      {
                        className: `grid md:grid-cols-2 gap-8 items-center ${n % 2 === 1 ? "md:grid-flow-dense" : ""}`,
                        children: [
                          a.jsx("div", {
                            className: n % 2 === 1 ? "md:col-start-2" : "",
                            children: a.jsx("img", {
                              src: t.image,
                              alt: t.alt,
                              width: 600,
                              height: 400,
                              loading: "lazy",
                              className: "w-full rounded-xl shadow-sm",
                            }),
                          }),
                          a.jsxs("div", {
                            className:
                              n % 2 === 1
                                ? "md:col-start-1 md:row-start-1"
                                : "",
                            children: [
                              a.jsx("h2", {
                                className: "text-2xl font-bold mb-2",
                                children: t.title,
                              }),
                              a.jsx("p", {
                                className: "text-primary font-medium mb-4",
                                children: t.location,
                              }),
                              a.jsx("p", {
                                className: "text-muted-foreground mb-6",
                                children: t.description,
                              }),
                              a.jsx("ul", {
                                className: "space-y-2",
                                children: t.details.map((r) =>
                                  a.jsxs(
                                    "li",
                                    {
                                      className: "flex items-start gap-2",
                                      children: [
                                        a.jsx("span", {
                                          className: "text-primary mt-0.5",
                                          children: "✓",
                                        }),
                                        a.jsx("span", {
                                          className: "text-sm",
                                          children: r,
                                        }),
                                      ],
                                    },
                                    r,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      },
                      t.title,
                    ),
                  ),
                }),
              ],
            }),
          }),
          a.jsx("section", {
            className: "section-pad bg-primary text-primary-foreground",
            children: a.jsxs("div", {
              className: "container mx-auto text-center",
              children: [
                a.jsx("h2", {
                  className: "text-3xl font-bold mb-4",
                  children: "Start Your Project",
                }),
                a.jsx("p", {
                  className: "text-xl mb-8 text-primary-foreground/90",
                  children:
                    "Professional installation with USPS coordination from start to finish.",
                }),
                a.jsx(Y, {
                  to: "/contact",
                  className: "btn-primary",
                  children: "Get a Quote",
                }),
              ],
            }),
          }),
        ],
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function zT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children:
              "About Us - USPS-Approved Mailbox Contractor | San Diego County",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "Learn about Postal Systems Pro: USPS-approved vendor and California licensed contractor with over two decades of experience serving San Diego County.",
          }),
          a.jsx("link", {
            rel: "canonical",
            href: "https://www.postalsystemspro.com/about",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold text-center mb-6",
                children: "About Postal Systems Pro",
              }),
              a.jsx("p", {
                className: "text-center text-muted-foreground text-lg mb-12",
                children:
                  "USPS-approved vendor and California licensed contractor serving San Diego County for over two decades.",
              }),
              a.jsxs("div", {
                className: "bg-card p-8 rounded-xl shadow-sm mb-12",
                children: [
                  a.jsx("h2", {
                    className: "text-2xl font-semibold mb-4",
                    children: "Our Story",
                  }),
                  a.jsx("p", {
                    className: "text-muted-foreground mb-4",
                    children:
                      "Postal Systems Pro has been providing professional mailbox installation and service solutions across San Diego County for over twenty years. As a USPS-approved vendor and California licensed contractor, we've built our reputation on quality workmanship, reliable service, and expert coordination with USPS requirements.",
                  }),
                  a.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "We specialize in turnkey installations—from initial site walks and quotes through concrete preparation, professional installation, and final USPS handover. Our team understands the complexities of USPS regulations, ADA compliance, and the unique needs of property managers, HOAs, and commercial facilities.",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid md:grid-cols-2 gap-6 mb-12",
                children: [
                  a.jsxs("div", {
                    className: "bg-card p-6 rounded-xl shadow-sm",
                    children: [
                      a.jsx(Yr, { className: "text-primary mb-4", size: 32 }),
                      a.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: "USPS-Approved Vendor",
                      }),
                      a.jsx("p", {
                        className: "text-muted-foreground text-sm",
                        children:
                          "Direct coordination with USPS for placement approvals, compliance verification, and final acceptance.",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "bg-card p-6 rounded-xl shadow-sm",
                    children: [
                      a.jsx(fg, { className: "text-primary mb-4", size: 32 }),
                      a.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: "Licensed & Insured",
                      }),
                      a.jsx("p", {
                        className: "text-muted-foreground text-sm",
                        children:
                          "California CSLB licensed contractor with full bonding and insurance coverage for your protection.",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "bg-card p-6 rounded-xl shadow-sm",
                    children: [
                      a.jsx(y1, { className: "text-primary mb-4", size: 32 }),
                      a.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: "Over Two Decades",
                      }),
                      a.jsx("p", {
                        className: "text-muted-foreground text-sm",
                        children:
                          "Extensive experience with all mailbox types, USPS requirements, and San Diego County regulations.",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "bg-card p-6 rounded-xl shadow-sm",
                    children: [
                      a.jsx(b1, { className: "text-primary mb-4", size: 32 }),
                      a.jsx("h3", {
                        className: "text-xl font-semibold mb-2",
                        children: "Trusted Partner",
                      }),
                      a.jsx("p", {
                        className: "text-muted-foreground text-sm",
                        children:
                          "Serving HOAs, property managers, builders, and commercial facilities throughout San Diego County.",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "bg-card p-8 rounded-xl shadow-sm mb-12",
                children: [
                  a.jsx("h2", {
                    className: "text-2xl font-semibold mb-4",
                    children: "What Sets Us Apart",
                  }),
                  a.jsxs("ul", {
                    className: "space-y-3",
                    children: [
                      a.jsxs("li", {
                        className: "flex items-start gap-3",
                        children: [
                          a.jsx("span", {
                            className: "text-primary mt-1",
                            children: "✓",
                          }),
                          a.jsxs("span", {
                            children: [
                              a.jsx("strong", { children: "Turnkey Service:" }),
                              " We handle every step from site walk through USPS handover",
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("li", {
                        className: "flex items-start gap-3",
                        children: [
                          a.jsx("span", {
                            className: "text-primary mt-1",
                            children: "✓",
                          }),
                          a.jsxs("span", {
                            children: [
                              a.jsx("strong", { children: "USPS Expertise:" }),
                              " Deep knowledge of current regulations and approval processes",
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("li", {
                        className: "flex items-start gap-3",
                        children: [
                          a.jsx("span", {
                            className: "text-primary mt-1",
                            children: "✓",
                          }),
                          a.jsxs("span", {
                            children: [
                              a.jsx("strong", { children: "ADA Compliance:" }),
                              " Proper clearances, reach ranges, and approach paths",
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("li", {
                        className: "flex items-start gap-3",
                        children: [
                          a.jsx("span", {
                            className: "text-primary mt-1",
                            children: "✓",
                          }),
                          a.jsxs("span", {
                            children: [
                              a.jsx("strong", {
                                children: "Quality Materials:",
                              }),
                              " Durable, weather-resistant equipment from trusted manufacturers",
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("li", {
                        className: "flex items-start gap-3",
                        children: [
                          a.jsx("span", {
                            className: "text-primary mt-1",
                            children: "✓",
                          }),
                          a.jsxs("span", {
                            children: [
                              a.jsx("strong", {
                                children: "Responsive Support:",
                              }),
                              " Ongoing service for repairs, lock changes, and maintenance",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className:
                  "bg-primary text-primary-foreground p-8 rounded-xl text-center",
                children: [
                  a.jsx("h2", {
                    className: "text-2xl font-bold mb-4",
                    children: "Work With Us",
                  }),
                  a.jsx("p", {
                    className: "mb-6",
                    children:
                      "Ready to discuss your mailbox installation or service needs?",
                  }),
                  a.jsxs("div", {
                    className: "flex flex-wrap justify-center gap-4",
                    children: [
                      a.jsx(Y, {
                        to: "/contact",
                        className: "btn-primary",
                        children: "Get a Quote",
                      }),
                      a.jsx("a", {
                        href: "tel:+16194614787",
                        className: "btn-secondary",
                        children: "Call (619) 461-4787",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function UT() {
  const { toast: e } = Mv(),
    [t, n] = v.useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      city: "",
      projectType: "",
      notes: "",
    }),
    r = (s) => {
      (s.preventDefault(),
        e({
          title: "Quote request received!",
          description: "We'll contact you within 1 business day.",
        }),
        n({
          name: "",
          email: "",
          phone: "",
          company: "",
          city: "",
          projectType: "",
          notes: "",
        }));
    },
    o = (s) => {
      n((i) => ({ ...i, [s.target.name]: s.target.value }));
    };
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children:
              "Get a Quote - Contact Postal Systems Pro | San Diego County",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "Contact Postal Systems Pro for a free consultation. USPS-approved mailbox installation serving San Diego County. Call (619) 461-4787 or request a quote online.",
          }),
          a.jsx("link", {
            rel: "canonical",
            href: "https://www.postalsystemspro.com/contact",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-6xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold text-center mb-6",
                children: "Get a Quote",
              }),
              a.jsx("p", {
                className:
                  "text-center text-muted-foreground mb-12 max-w-2xl mx-auto",
                children:
                  "Professional consultation by a USPS-approved contractor. No obligation.",
              }),
              a.jsxs("div", {
                className: "grid md:grid-cols-2 gap-8",
                children: [
                  a.jsxs("div", {
                    className: "bg-card p-8 rounded-xl shadow-sm",
                    children: [
                      a.jsx("h2", {
                        className: "text-2xl font-semibold mb-6",
                        children: "Request a Quote",
                      }),
                      a.jsxs("form", {
                        onSubmit: r,
                        className: "space-y-4",
                        children: [
                          a.jsxs("div", {
                            children: [
                              a.jsx("label", {
                                htmlFor: "name",
                                className: "block text-sm font-medium mb-2",
                                children: "Name *",
                              }),
                              a.jsx("input", {
                                type: "text",
                                id: "name",
                                name: "name",
                                required: !0,
                                value: t.name,
                                onChange: o,
                                className:
                                  "w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium mb-2",
                                children: "Email *",
                              }),
                              a.jsx("input", {
                                type: "email",
                                id: "email",
                                name: "email",
                                required: !0,
                                value: t.email,
                                onChange: o,
                                className:
                                  "w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("label", {
                                htmlFor: "phone",
                                className: "block text-sm font-medium mb-2",
                                children: "Phone *",
                              }),
                              a.jsx("input", {
                                type: "tel",
                                id: "phone",
                                name: "phone",
                                required: !0,
                                value: t.phone,
                                onChange: o,
                                className:
                                  "w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("label", {
                                htmlFor: "company",
                                className: "block text-sm font-medium mb-2",
                                children: "Company/Community",
                              }),
                              a.jsx("input", {
                                type: "text",
                                id: "company",
                                name: "company",
                                value: t.company,
                                onChange: o,
                                className:
                                  "w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("label", {
                                htmlFor: "city",
                                className: "block text-sm font-medium mb-2",
                                children: "City *",
                              }),
                              a.jsx("input", {
                                type: "text",
                                id: "city",
                                name: "city",
                                required: !0,
                                value: t.city,
                                onChange: o,
                                className:
                                  "w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("label", {
                                htmlFor: "projectType",
                                className: "block text-sm font-medium mb-2",
                                children: "Project Type *",
                              }),
                              a.jsxs("select", {
                                id: "projectType",
                                name: "projectType",
                                required: !0,
                                value: t.projectType,
                                onChange: o,
                                className:
                                  "w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                                children: [
                                  a.jsx("option", {
                                    value: "",
                                    children: "Select a project type",
                                  }),
                                  a.jsx("option", {
                                    value: "cbu",
                                    children: "Cluster Box Units (CBU)",
                                  }),
                                  a.jsx("option", {
                                    value: "4c",
                                    children: "4C Horizontal Mailboxes",
                                  }),
                                  a.jsx("option", {
                                    value: "parcel",
                                    children: "Parcel Lockers",
                                  }),
                                  a.jsx("option", {
                                    value: "pedestal",
                                    children: "Pedestal/Wall Mount",
                                  }),
                                  a.jsx("option", {
                                    value: "repair",
                                    children: "Repairs & Lock Changes",
                                  }),
                                  a.jsx("option", {
                                    value: "consulting",
                                    children: "USPS Compliance Consulting",
                                  }),
                                  a.jsx("option", {
                                    value: "other",
                                    children: "Other",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("label", {
                                htmlFor: "notes",
                                className: "block text-sm font-medium mb-2",
                                children: "Project Details",
                              }),
                              a.jsx("textarea", {
                                id: "notes",
                                name: "notes",
                                rows: 4,
                                value: t.notes,
                                onChange: o,
                                className:
                                  "w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring",
                                placeholder: "Tell us about your project...",
                              }),
                            ],
                          }),
                          a.jsx("button", {
                            type: "submit",
                            className: "btn-primary w-full",
                            children: "Submit Request",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      a.jsxs("div", {
                        className: "bg-card p-6 rounded-xl shadow-sm",
                        children: [
                          a.jsx("h3", {
                            className: "text-xl font-semibold mb-4",
                            children: "Contact Information",
                          }),
                          a.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [
                                  a.jsx(Ki, {
                                    className: "text-primary mt-1",
                                    size: 20,
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("p", {
                                        className: "font-medium",
                                        children: "Phone",
                                      }),
                                      a.jsx("a", {
                                        href: "tel:+16194614787",
                                        className:
                                          "text-muted-foreground hover:text-primary",
                                        children: "(619) 461-4787",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [
                                  a.jsx(dg, {
                                    className: "text-primary mt-1",
                                    size: 20,
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("p", {
                                        className: "font-medium",
                                        children: "Email",
                                      }),
                                      a.jsx("a", {
                                        href: "mailto:info@postalsystemspro.com",
                                        className:
                                          "text-muted-foreground hover:text-primary",
                                        children: "info@postalsystemspro.com",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [
                                  a.jsx(jd, {
                                    className: "text-primary mt-1",
                                    size: 20,
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("p", {
                                        className: "font-medium",
                                        children: "Service Area",
                                      }),
                                      a.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: "San Diego County, CA",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [
                                  a.jsx(fg, {
                                    className: "text-primary mt-1",
                                    size: 20,
                                  }),
                                  a.jsxs("div", {
                                    children: [
                                      a.jsx("p", {
                                        className: "font-medium",
                                        children: "License",
                                      }),
                                      a.jsx("p", {
                                        className: "text-muted-foreground",
                                        children: "CA CSLB #XXXXXXX",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className:
                          "bg-primary text-primary-foreground p-6 rounded-xl",
                        children: [
                          a.jsx("h3", {
                            className: "text-xl font-semibold mb-3",
                            children: "Why Choose Us",
                          }),
                          a.jsxs("ul", {
                            className: "space-y-2 text-sm",
                            children: [
                              a.jsxs("li", {
                                className: "flex items-start gap-2",
                                children: [
                                  a.jsx("span", {
                                    className: "mt-0.5",
                                    children: "✓",
                                  }),
                                  a.jsx("span", {
                                    children:
                                      "USPS-approved vendor with direct coordination",
                                  }),
                                ],
                              }),
                              a.jsxs("li", {
                                className: "flex items-start gap-2",
                                children: [
                                  a.jsx("span", {
                                    className: "mt-0.5",
                                    children: "✓",
                                  }),
                                  a.jsx("span", {
                                    children:
                                      "Licensed, bonded & insured contractor",
                                  }),
                                ],
                              }),
                              a.jsxs("li", {
                                className: "flex items-start gap-2",
                                children: [
                                  a.jsx("span", {
                                    className: "mt-0.5",
                                    children: "✓",
                                  }),
                                  a.jsx("span", {
                                    children: "Over two decades of experience",
                                  }),
                                ],
                              }),
                              a.jsxs("li", {
                                className: "flex items-start gap-2",
                                children: [
                                  a.jsx("span", {
                                    className: "mt-0.5",
                                    children: "✓",
                                  }),
                                  a.jsx("span", {
                                    children:
                                      "Turnkey installations from start to finish",
                                  }),
                                ],
                              }),
                              a.jsxs("li", {
                                className: "flex items-start gap-2",
                                children: [
                                  a.jsx("span", {
                                    className: "mt-0.5",
                                    children: "✓",
                                  }),
                                  a.jsx("span", {
                                    children: "Free site consultations",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "bg-card p-6 rounded-xl shadow-sm",
                        children: [
                          a.jsx("h3", {
                            className: "text-lg font-semibold mb-3",
                            children: "Response Time",
                          }),
                          a.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children:
                              "We respond to all quote requests within one business day. For urgent needs, please call us directly at (619) 461-4787.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function $T() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children: "Cluster Box Units (CBU) Installation | San Diego County",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "Professional CBU installation services in San Diego County. USPS-approved vendor with turnkey installation from site walk to handover.",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Cluster Box Units (CBU)",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground mb-8",
                children:
                  "Professional CBU installation for communities across San Diego County.",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function BT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children: "4C Horizontal Mailboxes | San Diego County",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "4C horizontal mailbox installation meeting USPS standards. Interior and exterior solutions for San Diego County.",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "4C Horizontal Mailboxes",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground mb-8",
                children:
                  "USPS-compliant 4C mailbox systems for interior and exterior applications.",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function HT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children: "Parcel Locker Installation | San Diego County",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "Secure parcel locker solutions for San Diego County properties. Reduce package pileups with professional installation.",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Parcel Lockers",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground mb-8",
                children:
                  "Strategic parcel locker planning and installation for your property.",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function WT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children: "Mailbox Repairs & Lock Changes | San Diego County",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "Fast mailbox repair and lock change services across San Diego County. Tenant turnovers, rekeys, and hardware replacement.",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Repairs & Lock Changes",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground mb-8",
                children:
                  "Quick response for repairs, lock changes, and hardware replacements.",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function VT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children: "Mailbox Replacements & Upgrades | San Diego County",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "Upgrade legacy mailboxes to modern CBU and 4C systems. Professional replacement services in San Diego County.",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Replacements & Upgrades",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground mb-8",
                children:
                  "Modernize your property with compliant mailbox system upgrades.",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function QT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children: "USPS Compliance Consulting | San Diego County",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "Expert USPS compliance consulting for San Diego County. Site layout, ADA requirements, and approval coordination.",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "USPS Compliance Consulting",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground mb-8",
                children:
                  "Expert guidance on USPS regulations, ADA compliance, and approval processes.",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function GT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children: "Mailbox Installation San Diego | Postal Systems Pro",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "Professional mailbox installation services in San Diego. CBU, 4C, parcel lockers, and more from a USPS-approved vendor.",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Mailbox Installation in San Diego",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground mb-8",
                children:
                  "Serving downtown, North Park, Mission Valley, and surrounding San Diego neighborhoods.",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function KT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs(je, {
        children: [
          a.jsx("title", {
            children: "Mailbox Installation Chula Vista | Postal Systems Pro",
          }),
          a.jsx("meta", {
            name: "description",
            content:
              "Professional mailbox services in Chula Vista. Complete installation and repair solutions for South Bay communities.",
          }),
        ],
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Mailbox Installation in Chula Vista",
              }),
              a.jsx("p", {
                className: "text-lg text-muted-foreground mb-8",
                children:
                  "Complete mailbox services for South Bay communities and businesses.",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function qT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(je, {
        children: a.jsx("title", {
          children: "Mailbox Installation El Cajon | Postal Systems Pro",
        }),
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Mailbox Installation in El Cajon",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function YT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(je, {
        children: a.jsx("title", {
          children: "Mailbox Installation La Mesa | Postal Systems Pro",
        }),
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Mailbox Installation in La Mesa",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function XT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(je, {
        children: a.jsx("title", {
          children: "Mailbox Installation Santee | Postal Systems Pro",
        }),
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Mailbox Installation in Santee",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function ZT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(je, {
        children: a.jsx("title", {
          children: "Mailbox Installation Encinitas | Postal Systems Pro",
        }),
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Mailbox Installation in Encinitas",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function JT() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(je, {
        children: a.jsx("title", {
          children: "Mailbox Installation Carlsbad | Postal Systems Pro",
        }),
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Mailbox Installation in Carlsbad",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function ek() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(je, {
        children: a.jsx("title", {
          children: "Mailbox Installation Vista | Postal Systems Pro",
        }),
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Mailbox Installation in Vista",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function tk() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(je, {
        children: a.jsx("title", {
          children: "Mailbox Installation Oceanside | Postal Systems Pro",
        }),
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Mailbox Installation in Oceanside",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
function nk() {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(je, {
        children: a.jsx("title", {
          children: "Mailbox Installation Escondido | Postal Systems Pro",
        }),
      }),
      a.jsx(Ae, {}),
      a.jsx("main", {
        children: a.jsx("section", {
          className: "section-pad bg-muted",
          children: a.jsxs("div", {
            className: "container mx-auto max-w-4xl",
            children: [
              a.jsx("h1", {
                className: "text-4xl font-bold mb-6",
                children: "Mailbox Installation in Escondido",
              }),
              a.jsx(Y, {
                to: "/contact",
                className: "btn-primary",
                children: "Get a Quote",
              }),
            ],
          }),
        }),
      }),
      a.jsx(Oe, {}),
    ],
  });
}
const rk = () => {
    const e = si();
    return (
      v.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname,
        );
      }, [e.pathname]),
      a.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: a.jsxs("div", {
          className: "text-center",
          children: [
            a.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            a.jsx("p", {
              className: "mb-4 text-xl text-gray-600",
              children: "Oops! Page not found",
            }),
            a.jsx("a", {
              href: "/",
              className: "text-blue-500 underline hover:text-blue-700",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  ok = new qE(),
  sk = () =>
    a.jsx(XE, {
      client: ok,
      children: a.jsxs(bE, {
        children: [
          a.jsx(ob, {}),
          a.jsx(Lb, {}),
          a.jsx(Yj, {
            children: a.jsxs(Hj, {
              children: [
                a.jsx(ge, { path: "/", element: a.jsx($P, {}) }),
                a.jsx(ge, { path: "/services", element: a.jsx(LT, {}) }),
                a.jsx(ge, { path: "/service-areas", element: a.jsx(DT, {}) }),
                a.jsx(ge, { path: "/projects", element: a.jsx(FT, {}) }),
                a.jsx(ge, { path: "/about", element: a.jsx(zT, {}) }),
                a.jsx(ge, { path: "/contact", element: a.jsx(UT, {}) }),
                a.jsx(ge, {
                  path: "/services/cluster-box-units-cbu",
                  element: a.jsx($T, {}),
                }),
                a.jsx(ge, {
                  path: "/services/4c-horizontal-mailboxes",
                  element: a.jsx(BT, {}),
                }),
                a.jsx(ge, {
                  path: "/services/parcel-lockers",
                  element: a.jsx(HT, {}),
                }),
                a.jsx(ge, {
                  path: "/services/repairs-and-lock-changes",
                  element: a.jsx(WT, {}),
                }),
                a.jsx(ge, {
                  path: "/services/replacements-and-upgrades",
                  element: a.jsx(VT, {}),
                }),
                a.jsx(ge, {
                  path: "/services/usps-compliance-consulting",
                  element: a.jsx(QT, {}),
                }),
                a.jsx(ge, {
                  path: "/service-areas/san-diego",
                  element: a.jsx(GT, {}),
                }),
                a.jsx(ge, {
                  path: "/service-areas/chula-vista",
                  element: a.jsx(KT, {}),
                }),
                a.jsx(ge, {
                  path: "/service-areas/el-cajon",
                  element: a.jsx(qT, {}),
                }),
                a.jsx(ge, {
                  path: "/service-areas/la-mesa",
                  element: a.jsx(YT, {}),
                }),
                a.jsx(ge, {
                  path: "/service-areas/santee",
                  element: a.jsx(XT, {}),
                }),
                a.jsx(ge, {
                  path: "/service-areas/encinitas",
                  element: a.jsx(ZT, {}),
                }),
                a.jsx(ge, {
                  path: "/service-areas/carlsbad",
                  element: a.jsx(JT, {}),
                }),
                a.jsx(ge, {
                  path: "/service-areas/vista",
                  element: a.jsx(ek, {}),
                }),
                a.jsx(ge, {
                  path: "/service-areas/oceanside",
                  element: a.jsx(tk, {}),
                }),
                a.jsx(ge, {
                  path: "/service-areas/escondido",
                  element: a.jsx(nk, {}),
                }),
                a.jsx(ge, { path: "*", element: a.jsx(rk, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Ov(document.getElementById("root")).render(a.jsx(sk, {}));
