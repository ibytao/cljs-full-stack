goog.provide("module$resources$public$vendor$js$mojs_curve_editor");
var exports$$module$resources$public$vendor$js$mojs_curve_editor = module$resources$public$vendor$js$mojs_curve_editor;
var module$resources$public$vendor$js$mojs_curve_editor;
!function(t, e) {
  "object" == typeof exports$$module$resources$public$vendor$js$mojs_curve_editor && "object" == typeof module ? module$resources$public$vendor$js$mojs_curve_editor = e() : "function" == typeof define && define.amd ? define("mojs_curve_editor", [], e) : "object" == typeof exports$$module$resources$public$vendor$js$mojs_curve_editor ? exports$$module$resources$public$vendor$js$mojs_curve_editor["mojs_curve_editor"] = e() : t["mojs_curve_editor"] = e();
}(this, function() {
  return function(t) {
    function e(r) {
      if (n[r]) {
        return n[r].exports;
      }
      var i = n[r] = {exports:{}, id:r, loaded:!1};
      return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "build/", e(0);
  }([function(t, e, n) {
    t.exports = n(1);
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(2), o = r(i), a = n(5), s = r(a), u = n(42), c = r(u), l = n(43), f = r(l), p = n(47), d = n(48), h = n(65), _ = r(h), v = n(185), y = r(v), m = n(114), g = (r(m), n(128)), b = r(g), x = n(212), T = r(x), E = n(213), w = r(E), P = n(181), M = n(134), S = (r(M), function() {
      function t() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        (0, c["default"])(this, t), this._o = e, this._decalareDefaults(), this._extendDefaults(), this._vars(), this._render(), this._tryToRestore(), this._listenUnload(), this._subscribe();
      }
      return (0, f["default"])(t, [{key:"_decalareDefaults", value:function() {
        this._defaults = {name:"mojs_curve_editor", isSaveState:!0, isHiddenOnMin:!1, onChange:null};
      }}, {key:"_extendDefaults", value:function() {
        this._props = {};
        for (var t in this._defaults) {
          this._props[t] = (0, T["default"])(this._o[t], this._defaults[t]);
        }
      }}, {key:"_vars", value:function() {
        this.revision = "1.5.0", this.store = (0, y["default"])(), this._easings = [], this._progressLines = [];
        var t = this._props.name;
        t += t === this._defaults.name ? "" : "__" + this._defaults.name, this._localStorage = t + "__" + (0, b["default"])(t), this.store.dispatch({type:"SET_EDITOR_NAME", data:this._localStorage});
      }}, {key:"_render", value:function() {
        var t = this, e = document, n = e.readyState;
        return "complete" === n || "loaded" === n || "interactive" === n ? this._renderApp() : void e.addEventListener("DOMContentLoaded", function() {
          t._renderApp();
        });
      }}, {key:"_renderApp", value:function() {
        var t = this;
        (0, d.render)((0, d.h)(p.Provider, {store:this.store}, (0, d.h)(_["default"], {progressLines:this._progressLines, options:this._props, ref:function(e) {
          t._el = e;
        }})), document.body);
      }}, {key:"_listenUnload", value:function() {
        var t = this, e = "onpagehide" in window ? "pagehide" : "beforeunload";
        window.addEventListener(e, function() {
          if (t._props.isSaveState) {
            var e = (0, s["default"])({}, t.store.getState());
            delete e.points.history, delete e.pointControls.history, e.progressLines.lines = [], localStorage.setItem(t._localStorage, (0, o["default"])(e));
          } else {
            localStorage.removeItem(t._localStorage);
          }
        });
      }}, {key:"_tryToRestore", value:function() {
        var t = localStorage.getItem(this._localStorage);
        t ? this.store.dispatch({type:"SET_STATE", data:JSON.parse(t)}) : (0, P.reset)(this.store);
      }}, {key:"_subscribe", value:function() {
        this._compilePath(), this.store.subscribe(this._compilePath.bind(this));
      }}, {key:"_compilePath", value:function() {
        var t = this, e = this.store.getState(), n = e.points.present, r = n.path;
        this._easing || (this._easing = mojs.easing.path(r)), clearTimeout(this._tm), this._tm = setTimeout(function() {
          t._prevPath !== r && (t._prevPath = r, t._easing = mojs.easing.path(r), t._fireOnChange(r));
        }, 40);
      }}, {key:"_fireOnChange", value:function(t) {
        var e = this._props.onChange;
        "function" == typeof e && e(t);
        for (var n = 0;n < this._easings.length;n++) {
          var r = this._easings[n], i = r.options, o = r.easing, a = i.onChange;
          "function" == typeof a && a(o, t), this._updateParent(o);
        }
      }}, {key:"_updateParent", value:function(t) {
        var e = t._parent;
        e && (e.setProgress ? this._triggerParent(e) : e._o.callbacksContext ? this._triggerParent(e._o.callbacksContext.timeline) : e.timeline ? this._triggerParent(e.timeline) : e.tween && this._triggerParent(e.tween));
      }}, {key:"_triggerParent", value:function(t) {
        var e = .01, n = t.progress, r = n + e < 1 ? n + e : n - e;
        t.setProgress(r), t.setProgress(n);
      }}, {key:"_updateProgressLine", value:function(t, e, n) {
        var r = n[e], i = this.store.getState();
        i.resize;
        r && (r.style.left = 100 * t + "%");
      }}, {key:"getEasing", value:function() {
        var t = this, e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], n = function() {
          var e = t._easings.length;
          return function(n) {
            t._updateProgressLine(n, e, t._progressLines);
            var r = t._easings[e].options.transform;
            return r ? r(t._easing(n)) : t._easing(n);
          };
        }();
        return this.store.dispatch({type:"ADD_PROGRESS_LINE", data:{}}), this._easings.push({options:e, easing:n}), (0, w["default"])(function() {
          t._fireOnChange(t._prevPath);
        }), n;
      }}, {key:"minimize", value:function() {
        this.store.dispatch({type:"SET_MINIMIZE", data:!0});
      }}, {key:"maximize", value:function() {
        this.store.dispatch({type:"SET_MINIMIZE", data:!1});
      }}, {key:"toggleSize", value:function() {
        var t = this.store.getState(), e = t.controls;
        e.isMinimize ? this.maximize() : this.minimize();
      }}]), t;
    }());
    e["default"] = S, window.MojsCurveEditor = S;
  }, function(t, e, n) {
    t.exports = {"default":n(3), __esModule:!0};
  }, function(t, e, n) {
    var r = n(4), i = r.JSON || (r.JSON = {stringify:JSON.stringify});
    t.exports = function(t) {
      return i.stringify.apply(i, arguments);
    };
  }, function(t, e) {
    var n = t.exports = {version:"2.4.0"};
    "number" == typeof __e && (__e = n);
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var i = n(6), o = r(i);
    e["default"] = o["default"] || function(t) {
      for (var e = 1;e < arguments.length;e++) {
        var n = arguments[e];
        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }
      return t;
    };
  }, function(t, e, n) {
    t.exports = {"default":n(7), __esModule:!0};
  }, function(t, e, n) {
    n(8), t.exports = n(4).Object.assign;
  }, function(t, e, n) {
    var r = n(9);
    r(r.S + r.F, "Object", {assign:n(23)});
  }, function(t, e, n) {
    var r = n(10), i = n(4), o = n(11), a = n(13), s = "prototype", u = function(t, e, n) {
      var c, l, f, p = t & u.F, d = t & u.G, h = t & u.S, _ = t & u.P, v = t & u.B, y = t & u.W, m = d ? i : i[e] || (i[e] = {}), g = m[s], b = d ? r : h ? r[e] : (r[e] || {})[s];
      d && (n = e);
      for (c in n) {
        l = !p && b && void 0 !== b[c], l && c in m || (f = l ? b[c] : n[c], m[c] = d && "function" != typeof b[c] ? n[c] : v && l ? o(f, r) : y && b[c] == f ? function(t) {
          var e = function(e, n, r) {
            if (this instanceof t) {
              switch(arguments.length) {
                case 0:
                  return new t;
                case 1:
                  return new t(e);
                case 2:
                  return new t(e, n);
              }
              return new t(e, n, r);
            }
            return t.apply(this, arguments);
          };
          return e[s] = t[s], e;
        }(f) : _ && "function" == typeof f ? o(Function.call, f) : f, _ && ((m.virtual || (m.virtual = {}))[c] = f, t & u.R && g && !g[c] && a(g, c, f)));
      }
    };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
  }, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
  }, function(t, e, n) {
    var r = n(12);
    t.exports = function(t, e, n) {
      if (r(t), void 0 === e) {
        return t;
      }
      switch(n) {
        case 1:
          return function(n) {
            return t.call(e, n);
          };
        case 2:
          return function(n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function(n, r, i) {
            return t.call(e, n, r, i);
          };
      }
      return function() {
        return t.apply(e, arguments);
      };
    };
  }, function(t, e) {
    t.exports = function(t) {
      if ("function" != typeof t) {
        throw TypeError(t + " is not a function!");
      }
      return t;
    };
  }, function(t, e, n) {
    var r = n(14), i = n(22);
    t.exports = n(18) ? function(t, e, n) {
      return r.f(t, e, i(1, n));
    } : function(t, e, n) {
      return t[e] = n, t;
    };
  }, function(t, e, n) {
    var r = n(15), i = n(17), o = n(21), a = Object.defineProperty;
    e.f = n(18) ? Object.defineProperty : function(t, e, n) {
      if (r(t), e = o(e, !0), r(n), i) {
        try {
          return a(t, e, n);
        } catch (s) {
        }
      }
      if ("get" in n || "set" in n) {
        throw TypeError("Accessors not supported!");
      }
      return "value" in n && (t[e] = n.value), t;
    };
  }, function(t, e, n) {
    var r = n(16);
    t.exports = function(t) {
      if (!r(t)) {
        throw TypeError(t + " is not an object!");
      }
      return t;
    };
  }, function(t, e) {
    t.exports = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  }, function(t, e, n) {
    t.exports = !n(18) && !n(19)(function() {
      return 7 != Object.defineProperty(n(20)("div"), "a", {get:function() {
        return 7;
      }}).a;
    });
  }, function(t, e, n) {
    t.exports = !n(19)(function() {
      return 7 != Object.defineProperty({}, "a", {get:function() {
        return 7;
      }}).a;
    });
  }, function(t, e) {
    t.exports = function(t) {
      try {
        return !!t();
      } catch (e) {
        return !0;
      }
    };
  }, function(t, e, n) {
    var r = n(16), i = n(10).document, o = r(i) && r(i.createElement);
    t.exports = function(t) {
      return o ? i.createElement(t) : {};
    };
  }, function(t, e, n) {
    var r = n(16);
    t.exports = function(t, e) {
      if (!r(t)) {
        return t;
      }
      var n, i;
      if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) {
        return i;
      }
      if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) {
        return i;
      }
      if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) {
        return i;
      }
      throw TypeError("Can't convert object to primitive value");
    };
  }, function(t, e) {
    t.exports = function(t, e) {
      return {enumerable:!(1 & t), configurable:!(2 & t), writable:!(4 & t), value:e};
    };
  }, function(t, e, n) {
    var r = n(24), i = n(39), o = n(40), a = n(41), s = n(28), u = Object.assign;
    t.exports = !u || n(19)(function() {
      var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
      return t[n] = 7, r.split("").forEach(function(t) {
        e[t] = t;
      }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r;
    }) ? function(t, e) {
      for (var n = a(t), u = arguments.length, c = 1, l = i.f, f = o.f;u > c;) {
        for (var p, d = s(arguments[c++]), h = l ? r(d).concat(l(d)) : r(d), _ = h.length, v = 0;_ > v;) {
          f.call(d, p = h[v++]) && (n[p] = d[p]);
        }
      }
      return n;
    } : u;
  }, function(t, e, n) {
    var r = n(25), i = n(38);
    t.exports = Object.keys || function(t) {
      return r(t, i);
    };
  }, function(t, e, n) {
    var r = n(26), i = n(27), o = n(31)(!1), a = n(35)("IE_PROTO");
    t.exports = function(t, e) {
      var n, s = i(t), u = 0, c = [];
      for (n in s) {
        n != a && r(s, n) && c.push(n);
      }
      for (;e.length > u;) {
        r(s, n = e[u++]) && (~o(c, n) || c.push(n));
      }
      return c;
    };
  }, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return n.call(t, e);
    };
  }, function(t, e, n) {
    var r = n(28), i = n(30);
    t.exports = function(t) {
      return r(i(t));
    };
  }, function(t, e, n) {
    var r = n(29);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
      return "String" == r(t) ? t.split("") : Object(t);
    };
  }, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
      return n.call(t).slice(8, -1);
    };
  }, function(t, e) {
    t.exports = function(t) {
      if (void 0 == t) {
        throw TypeError("Can't call method on  " + t);
      }
      return t;
    };
  }, function(t, e, n) {
    var r = n(27), i = n(32), o = n(34);
    t.exports = function(t) {
      return function(e, n, a) {
        var s, u = r(e), c = i(u.length), l = o(a, c);
        if (t && n != n) {
          for (;c > l;) {
            if (s = u[l++], s != s) {
              return !0;
            }
          }
        } else {
          for (;c > l;l++) {
            if ((t || l in u) && u[l] === n) {
              return t || l || 0;
            }
          }
        }
        return !t && -1;
      };
    };
  }, function(t, e, n) {
    var r = n(33), i = Math.min;
    t.exports = function(t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  }, function(t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
    };
  }, function(t, e, n) {
    var r = n(33), i = Math.max, o = Math.min;
    t.exports = function(t, e) {
      return t = r(t), t < 0 ? i(t + e, 0) : o(t, e);
    };
  }, function(t, e, n) {
    var r = n(36)("keys"), i = n(37);
    t.exports = function(t) {
      return r[t] || (r[t] = i(t));
    };
  }, function(t, e, n) {
    var r = n(10), i = "__core-js_shared__", o = r[i] || (r[i] = {});
    t.exports = function(t) {
      return o[t] || (o[t] = {});
    };
  }, function(t, e) {
    var n = 0, r = Math.random();
    t.exports = function(t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
    };
  }, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function(t, e) {
    e.f = Object.getOwnPropertySymbols;
  }, function(t, e) {
    e.f = {}.propertyIsEnumerable;
  }, function(t, e, n) {
    var r = n(30);
    t.exports = function(t) {
      return Object(r(t));
    };
  }, function(t, e) {
    e.__esModule = !0, e["default"] = function(t, e) {
      if (!(t instanceof e)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var i = n(44), o = r(i);
    e["default"] = function() {
      function t(t, e) {
        for (var n = 0;n < e.length;n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o["default"])(t, r.key, r);
        }
      }
      return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }();
  }, function(t, e, n) {
    t.exports = {"default":n(45), __esModule:!0};
  }, function(t, e, n) {
    n(46);
    var r = n(4).Object;
    t.exports = function(t, e, n) {
      return r.defineProperty(t, e, n);
    };
  }, function(t, e, n) {
    var r = n(9);
    r(r.S + r.F * !n(18), "Object", {defineProperty:n(14).f});
  }, function(t, e, n) {
    !function(t, r) {
      r(e, n(48), n(51));
    }(this, function(t, e, n) {
      function r(t, e) {
        return e = {exports:{}}, t(e, e.exports), e.exports;
      }
      function i() {
      }
      function o(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
        try {
          throw new Error(t);
        } catch (e) {
        }
      }
      function a() {
        v || (v = !0, o("\x3cProvider\x3e does not support changing `store` on the fly. It is most likely that you see this error because you updated to Redux 2.x and React Redux 2.x which no longer hot reload reducers automatically. See https://github.com/reactjs/react-redux/releases/tag/v2.0.0 for the migration instructions."));
      }
      function s(t, e) {
        if (t === e) {
          return !0;
        }
        var n = Object.keys(t), r = Object.keys(e);
        if (n.length !== r.length) {
          return !1;
        }
        for (var i = Object.prototype.hasOwnProperty, o = 0;o < n.length;o++) {
          if (!i.call(e, n[o]) || t[n[o]] !== e[n[o]]) {
            return !1;
          }
        }
        return !0;
      }
      function u(t) {
        return function(e) {
          return n.bindActionCreators(t, e);
        };
      }
      function c(t) {
        return t.displayName || t.name || "Component";
      }
      function l(t, e) {
        try {
          return t.apply(e);
        } catch (n) {
          return A.value = n, A;
        }
      }
      function f(t, n, r) {
        var i = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3], a = Boolean(t), f = t || k, d = void 0;
        d = "function" == typeof n ? n : n ? u(n) : N;
        var h = r || j, v = i.pure, y = void 0 === v || v, m = i.withRef, g = void 0 !== m && m, b = y && h !== j, x = I++;
        return function(t) {
          function n(t, e) {
            P(t) || o(e + "() in " + i + " must return a plain object. " + ("Instead received " + t + "."));
          }
          function r(t, e, r) {
            var i = h(t, e, r);
            return n(i, "mergeProps"), i;
          }
          var i = "Connect(" + c(t) + ")", u = function(o) {
            function u(t, e) {
              p.classCallCheck(this, u);
              var n = p.possibleConstructorReturn(this, o.call(this, t, e));
              n.version = x, n.store = t.store || e.store, C(n.store, 'Could not find "store" in either the context or ' + ('props of "' + i + '". ') + "Either wrap the root component in a \x3cProvider\x3e, " + ('or explicitly pass "store" as a prop to "' + i + '".'));
              var r = n.store.getState();
              return n.state = {storeState:r}, n.clearCache(), n;
            }
            return p.inherits(u, o), u.prototype.shouldComponentUpdate = function() {
              return !y || this.haveOwnPropsChanged || this.hasStoreStateChanged;
            }, u.prototype.computeStateProps = function(t, e) {
              if (!this.finalMapStateToProps) {
                return this.configureFinalMapState(t, e);
              }
              var r = t.getState(), i = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(r, e) : this.finalMapStateToProps(r);
              return n(i, "mapStateToProps"), i;
            }, u.prototype.configureFinalMapState = function(t, e) {
              var r = f(t.getState(), e), i = "function" == typeof r;
              return this.finalMapStateToProps = i ? r : f, this.doStatePropsDependOnOwnProps = 1 !== this.finalMapStateToProps.length, i ? this.computeStateProps(t, e) : (n(r, "mapStateToProps"), r);
            }, u.prototype.computeDispatchProps = function(t, e) {
              if (!this.finalMapDispatchToProps) {
                return this.configureFinalMapDispatch(t, e);
              }
              var r = t.dispatch, i = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(r, e) : this.finalMapDispatchToProps(r);
              return n(i, "mapDispatchToProps"), i;
            }, u.prototype.configureFinalMapDispatch = function(t, e) {
              var r = d(t.dispatch, e), i = "function" == typeof r;
              return this.finalMapDispatchToProps = i ? r : d, this.doDispatchPropsDependOnOwnProps = 1 !== this.finalMapDispatchToProps.length, i ? this.computeDispatchProps(t, e) : (n(r, "mapDispatchToProps"), r);
            }, u.prototype.updateStatePropsIfNeeded = function() {
              var t = this.computeStateProps(this.store, this.props);
              return (!this.stateProps || !s(t, this.stateProps)) && (this.stateProps = t, !0);
            }, u.prototype.updateDispatchPropsIfNeeded = function() {
              var t = this.computeDispatchProps(this.store, this.props);
              return (!this.dispatchProps || !s(t, this.dispatchProps)) && (this.dispatchProps = t, !0);
            }, u.prototype.updateMergedPropsIfNeeded = function() {
              var t = r(this.stateProps, this.dispatchProps, this.props);
              return !(this.mergedProps && b && s(t, this.mergedProps)) && (this.mergedProps = t, !0);
            }, u.prototype.isSubscribed = function() {
              return "function" == typeof this.unsubscribe;
            }, u.prototype.trySubscribe = function() {
              a && !this.unsubscribe && (this.unsubscribe = this.store.subscribe(this.handleChange.bind(this)), this.handleChange());
            }, u.prototype.tryUnsubscribe = function() {
              this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null);
            }, u.prototype.componentDidMount = function() {
              this.trySubscribe();
            }, u.prototype.componentWillReceiveProps = function(t) {
              y && s(t, this.props) || (this.haveOwnPropsChanged = !0);
            }, u.prototype.componentWillUnmount = function() {
              this.tryUnsubscribe(), this.clearCache();
            }, u.prototype.clearCache = function() {
              this.dispatchProps = null, this.stateProps = null, this.mergedProps = null, this.haveOwnPropsChanged = !0, this.hasStoreStateChanged = !0, this.haveStatePropsBeenPrecalculated = !1, this.statePropsPrecalculationError = null, this.renderedElement = null, this.finalMapDispatchToProps = null, this.finalMapStateToProps = null;
            }, u.prototype.handleChange = function() {
              if (this.unsubscribe) {
                var t = this.store.getState(), e = this.state.storeState;
                if (!y || e !== t) {
                  if (y && !this.doStatePropsDependOnOwnProps) {
                    var n = l(this.updateStatePropsIfNeeded, this);
                    if (!n) {
                      return;
                    }
                    n === A && (this.statePropsPrecalculationError = A.value), this.haveStatePropsBeenPrecalculated = !0;
                  }
                  this.hasStoreStateChanged = !0, this.setState({storeState:t});
                }
              }
            }, u.prototype.getWrappedInstance = function() {
              return C(g, "To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call."), this.refs.wrappedInstance;
            }, u.prototype.render = function() {
              var n = this.haveOwnPropsChanged, r = this.hasStoreStateChanged, i = this.haveStatePropsBeenPrecalculated, o = this.statePropsPrecalculationError, a = this.renderedElement;
              if (this.haveOwnPropsChanged = !1, this.hasStoreStateChanged = !1, this.haveStatePropsBeenPrecalculated = !1, this.statePropsPrecalculationError = null, o) {
                throw o;
              }
              var s = !0, u = !0;
              y && a && (s = r || n && this.doStatePropsDependOnOwnProps, u = n && this.doDispatchPropsDependOnOwnProps);
              var c = !1, l = !1;
              i ? c = !0 : s && (c = this.updateStatePropsIfNeeded()), u && (l = this.updateDispatchPropsIfNeeded());
              var f = !0;
              return f = !!(c || l || n) && this.updateMergedPropsIfNeeded(), !f && a ? a : (g ? this.renderedElement = e.h(t, p["extends"]({}, this.mergedProps, {ref:"wrappedInstance"})) : this.renderedElement = e.h(t, this.mergedProps), this.renderedElement);
            }, u;
          }(e.Component);
          return u.displayName = i, u.WrappedComponent = t, u.contextTypes = {store:_}, u.prototype.componentWillUpdate = function() {
            this.version !== x && (this.version = x, this.trySubscribe(), this.clearCache());
          }, S(u, t);
        };
      }
      var p = {};
      p.classCallCheck = function(t, e) {
        if (!(t instanceof e)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }, p["extends"] = Object.assign || function(t) {
        for (var e = 1;e < arguments.length;e++) {
          var n = arguments[e];
          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
        }
        return t;
      }, p.inherits = function(t, e) {
        if ("function" != typeof e && null !== e) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        }
        t.prototype = Object.create(e && e.prototype, {constructor:{value:t, enumerable:!1, writable:!0, configurable:!0}}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }, p.possibleConstructorReturn = function(t, e) {
        if (!t) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
      };
      var d = {only:function(t) {
        return t && t[0] || null;
      }};
      i.isRequired = i;
      var h = {element:i, func:i, shape:function() {
        return i;
      }}, _ = h.shape({subscribe:h.func.isRequired, dispatch:h.func.isRequired, getState:h.func.isRequired}), v = !1, y = function(t) {
        function e(n, r) {
          p.classCallCheck(this, e);
          var i = p.possibleConstructorReturn(this, t.call(this, n, r));
          return i.store = n.store, i;
        }
        return p.inherits(e, t), e.prototype.getChildContext = function() {
          return {store:this.store};
        }, e.prototype.render = function() {
          var t = this.props.children;
          return d.only(t);
        }, e;
      }(e.Component);
      y.prototype.componentWillReceiveProps = function(t) {
        var e = this.store, n = t.store;
        e !== n && a();
      }, y.childContextTypes = {store:_.isRequired};
      var m = r(function(t) {
        function e(t) {
          return !!t && "object" == typeof t;
        }
        t.exports = e;
      }), g = m && "object" == typeof m && "default" in m ? m["default"] : m, b = r(function(t) {
        function e(t) {
          var e = !1;
          if (null != t && "function" != typeof t.toString) {
            try {
              e = !!(t + "");
            } catch (n) {
            }
          }
          return e;
        }
        t.exports = e;
      }), x = b && "object" == typeof b && "default" in b ? b["default"] : b, T = r(function(t) {
        function e(t) {
          return n(Object(t));
        }
        var n = Object.getPrototypeOf;
        t.exports = e;
      }), E = T && "object" == typeof T && "default" in T ? T["default"] : T, w = r(function(t) {
        function e(t) {
          if (!i(t) || l.call(t) != o || r(t)) {
            return !1;
          }
          var e = n(t);
          if (null === e) {
            return !0;
          }
          var a = u.call(e, "constructor") && e.constructor;
          return "function" == typeof a && a instanceof a && s.call(a) == c;
        }
        var n = E, r = x, i = g, o = "[object Object]", a = Object.prototype, s = Function.prototype.toString, u = a.hasOwnProperty, c = s.call(Object), l = a.toString;
        t.exports = e;
      }), P = w && "object" == typeof w && "default" in w ? w["default"] : w, M = r(function(t) {
        var e = {childContextTypes:!0, contextTypes:!0, defaultProps:!0, displayName:!0, getDefaultProps:!0, mixins:!0, propTypes:!0, type:!0}, n = {name:!0, length:!0, prototype:!0, caller:!0, arguments:!0, arity:!0};
        t.exports = function(t, r) {
          if ("string" != typeof r) {
            for (var i = Object.getOwnPropertyNames(r), o = 0;o < i.length;++o) {
              if (!e[i[o]] && !n[i[o]]) {
                try {
                  t[i[o]] = r[i[o]];
                } catch (a) {
                }
              }
            }
          }
          return t;
        };
      }), S = M && "object" == typeof M && "default" in M ? M["default"] : M, O = r(function(t) {
        var e = "development", n = function(t, n, r, i, o, a, s, u) {
          if ("production" !== e && void 0 === n) {
            throw new Error("invariant requires an error message argument");
          }
          if (!t) {
            var c;
            if (void 0 === n) {
              c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            } else {
              var l = [r, i, o, a, s, u], f = 0;
              c = new Error(n.replace(/%s/g, function() {
                return l[f++];
              })), c.name = "Invariant Violation";
            }
            throw c.framesToPop = 1, c;
          }
        };
        t.exports = n;
      }), C = O && "object" == typeof O && "default" in O ? O["default"] : O, k = function(t) {
        return {};
      }, N = function(t) {
        return {dispatch:t};
      }, j = function(t, e, n) {
        return p["extends"]({}, n, t, e);
      }, A = {value:null}, I = 0;
      t.Provider = y, t.connect = f;
    });
  }, function(t, e, n) {
    (function(t) {
      !function(t, n) {
        n(e);
      }(this, function(t) {
        function e(t, e, n) {
          this.nodeName = t, this.attributes = e, this.children = n, this.key = e && e.key;
        }
        function n(t, e) {
          if (e) {
            for (var n in e) {
              void 0 !== e[n] && (t[n] = e[n]);
            }
          }
          return t;
        }
        function r(t) {
          return n({}, t);
        }
        function i(t, e) {
          for (var n = e.split("."), r = 0;r < n.length && t;r++) {
            t = t[n[r]];
          }
          return t;
        }
        function o(t, e) {
          return [].slice.call(t, e);
        }
        function a(t) {
          return "function" == typeof t;
        }
        function s(t) {
          return "string" == typeof t;
        }
        function u(t) {
          return void 0 === t || null === t;
        }
        function c(t) {
          return t === !1 || u(t);
        }
        function l(t) {
          var e = "";
          for (var n in t) {
            t[n] && (e && (e += " "), e += n);
          }
          return e;
        }
        function f(t, n, r) {
          var i, o, u, p = arguments.length;
          if (p > 2) {
            var d = typeof r;
            if (3 === p && "object" !== d && "function" !== d) {
              c(r) || (i = [String(r)]);
            } else {
              i = [];
              for (var h = 2;h < p;h++) {
                var _ = arguments[h];
                if (!c(_)) {
                  _.join ? o = _ : (o = Q)[0] = _;
                  for (var v = 0;v < o.length;v++) {
                    var y = o[v], m = !(c(y) || a(y) || y instanceof e);
                    m && !s(y) && (y = String(y)), m && u ? i[i.length - 1] += y : c(y) || (i.push(y), u = m);
                  }
                }
              }
            }
          } else {
            if (n && n.children) {
              return f(t, n, n.children);
            }
          }
          n && (n.children && delete n.children, a(t) || ("className" in n && (n["class"] = n.className, delete n.className), u = n["class"], u && !s(u) && (n["class"] = l(u))));
          var g = new e(t, n || void 0, i);
          return K.vnode && K.vnode(g), g;
        }
        function p(t, e) {
          return f(t.nodeName, n(r(t.attributes), e), arguments.length > 2 ? o(arguments, 2) : t.children);
        }
        function d(t, e, n) {
          var r = e.split("."), o = r[0];
          return function(e) {
            var c, l, f, p = e && e.currentTarget || this, d = t.state, h = d;
            if (s(n) ? (l = i(e, n), u(l) && (p = p._component) && (l = i(p, n))) : l = p.nodeName ? (p.nodeName + p.type).match(/^input(check|rad)/i) ? p.checked : p.value : e, a(l) && (l = l.call(p)), r.length > 1) {
              for (f = 0;f < r.length - 1;f++) {
                h = h[r[f]] || (h[r[f]] = {});
              }
              h[r[f]] = l, l = d[o];
            }
            t.setState((c = {}, c[o] = l, c));
          };
        }
        function h(t) {
          1 === nt.push(t) && (K.debounceRendering || J)(_);
        }
        function _() {
          if (nt.length) {
            var t, e = nt;
            for (nt = rt, rt = e;t = e.pop();) {
              t._dirty && X(t);
            }
          }
        }
        function v(t) {
          var e = t && t.nodeName;
          return e && a(e) && !(e.prototype && e.prototype.render);
        }
        function y(t, e) {
          return t.nodeName(S(t), e || $);
        }
        function m(t, e) {
          return t[tt] || (t[tt] = e || {});
        }
        function g(t) {
          return t instanceof Text ? 3 : t instanceof Element ? 1 : 0;
        }
        function b(t) {
          var e = t.parentNode;
          e && e.removeChild(t);
        }
        function x(t, e, n, r, i) {
          if (m(t)[e] = n, "key" !== e && "children" !== e) {
            if ("class" !== e || i) {
              if ("style" === e) {
                if ((!n || s(n) || s(r)) && (t.style.cssText = n || ""), n && "object" == typeof n) {
                  if (!s(r)) {
                    for (var o in r) {
                      o in n || (t.style[o] = "");
                    }
                  }
                  for (var o in n) {
                    t.style[o] = "number" != typeof n[o] || et[o] ? n[o] : n[o] + "px";
                  }
                }
              } else {
                if ("dangerouslySetInnerHTML" === e) {
                  n && (t.innerHTML = n.__html);
                } else {
                  if ("o" === e[0] && "n" === e[1]) {
                    var l = t._listeners || (t._listeners = {});
                    e = q(e.substring(2)), n ? l[e] || t.addEventListener(e, E) : l[e] && t.removeEventListener(e, E), l[e] = n;
                  } else {
                    if ("type" !== e && !i && e in t) {
                      T(t, e, u(n) ? "" : n), c(n) && t.removeAttribute(e);
                    } else {
                      var f = i && e.match(/^xlink\:?(.+)/);
                      c(n) ? f ? t.removeAttributeNS("http://www.w3.org/1999/xlink", q(f[1])) : t.removeAttribute(e) : "object" == typeof n || a(n) || (f ? t.setAttributeNS("http://www.w3.org/1999/xlink", q(f[1]), n) : t.setAttribute(e, n));
                    }
                  }
                }
              }
            } else {
              t.className = n || "";
            }
          }
        }
        function T(t, e, n) {
          try {
            t[e] = n;
          } catch (r) {
          }
        }
        function E(t) {
          return this._listeners[t.type](K.event && K.event(t) || t);
        }
        function w(t) {
          for (var e = {}, n = t.attributes.length;n--;) {
            e[t.attributes[n].name] = t.attributes[n].value;
          }
          return e;
        }
        function P(t, e) {
          return s(e) ? 3 === g(t) : s(e.nodeName) ? M(t, e.nodeName) : a(e.nodeName) ? t._componentConstructor === e.nodeName || v(e) : void 0;
        }
        function M(t, e) {
          return t.normalizedNodeName === e || q(t.nodeName) === q(e);
        }
        function S(t) {
          var e = t.nodeName.defaultProps, i = r(e || t.attributes);
          return e && n(i, t.attributes), t.children && (i.children = t.children), i;
        }
        function O(t) {
          k(t);
          var e = q(t.nodeName), n = it[e];
          n ? n.push(t) : it[e] = [t];
        }
        function C(t, e) {
          var n = q(t), r = it[n] && it[n].pop() || (e ? document.createElementNS("http://www.w3.org/2000/svg", t) : document.createElement(t));
          return m(r), r.normalizedNodeName = n, r;
        }
        function k(t) {
          b(t), 1 === g(t) && (m(t, w(t)), t._component = t._componentConstructor = null);
        }
        function N() {
          for (var t;t = ot.pop();) {
            t.componentDidMount && t.componentDidMount();
          }
        }
        function j(t, e, n, r, i) {
          at++;
          var o = A(t, e, n, r);
          return i && o.parentNode !== i && i.appendChild(o), --at || N(), o;
        }
        function A(t, e, n, r) {
          for (var i = e && e.attributes;v(e);) {
            e = y(e, n);
          }
          if (u(e)) {
            return document.createComment("");
          }
          if (s(e)) {
            if (t) {
              if (3 === g(t) && t.parentNode) {
                return t.nodeValue != e && (t.nodeValue = e), t;
              }
              O(t);
            }
            return document.createTextNode(e);
          }
          var o, c = t, l = e.nodeName;
          if (a(l)) {
            return V(t, e, n, r);
          }
          if (s(l) || (l = String(l)), o = "svg" === q(l), o && (st = !0), t) {
            if (!M(t, l)) {
              for (c = C(l, st);t.firstChild;) {
                c.appendChild(t.firstChild);
              }
              R(t);
            }
          } else {
            c = C(l, st);
          }
          return e.children && 1 === e.children.length && "string" == typeof e.children[0] && 1 === c.childNodes.length && c.firstChild instanceof Text ? c.firstChild.nodeValue = e.children[0] : (e.children || c.firstChild) && I(c, e.children, n, r), D(c, e.attributes), i && i.ref && (c[tt].ref = i.ref)(c), o && (st = !1), c;
        }
        function I(t, e, n, r) {
          var i, o, a, s, c = t.childNodes, l = [], f = {}, p = 0, d = 0, h = c.length, _ = 0, v = e && e.length;
          if (h) {
            for (var y = 0;y < h;y++) {
              var m = c[y], g = v ? (o = m._component) ? o.__key : (o = m[tt]) ? o.key : null : null;
              g || 0 === g ? (p++, f[g] = m) : l[_++] = m;
            }
          }
          if (v) {
            for (var y = 0;y < v;y++) {
              if (a = e[y], s = null, p && a.attributes) {
                var g = a.key;
                !u(g) && g in f && (s = f[g], f[g] = void 0, p--);
              }
              if (!s && d < _) {
                for (i = d;i < _;i++) {
                  if (o = l[i], o && P(o, a)) {
                    s = o, l[i] = void 0, i === _ - 1 && _--, i === d && d++;
                    break;
                  }
                }
              }
              s = A(s, a, n, r), s !== c[y] && t.insertBefore(s, c[y] || null);
            }
          }
          if (p) {
            for (var y in f) {
              f[y] && (l[d = _++] = f[y]);
            }
          }
          d < _ && L(l);
        }
        function L(t, e) {
          for (var n = t.length;n--;) {
            var r = t[n];
            r && R(r, e);
          }
        }
        function R(t, e) {
          var n = t._component;
          n ? W(n, !e) : (t[tt] && t[tt].ref && t[tt].ref(null), e || O(t), t.childNodes && t.childNodes.length && L(t.childNodes, e));
        }
        function D(t, e) {
          var n = t[tt] || w(t);
          for (var r in n) {
            e && r in e || x(t, r, null, n[r], st);
          }
          if (e) {
            for (var i in e) {
              i in n && e[i] == ("value" === i || "selected" === i || "checked" === i ? t[i] : n[i]) || x(t, i, e[i], n[i], st);
            }
          }
        }
        function F(t) {
          var e = t.constructor.name, n = ut[e];
          n ? n.push(t) : ut[e] = [t];
        }
        function z(t, e, n) {
          var r = new t(e, n), i = ut[t.name];
          if (i) {
            for (var o = i.length;o--;) {
              if (i[o].constructor === t) {
                r.nextBase = i[o].nextBase, i.splice(o, 1);
                break;
              }
            }
          }
          return r;
        }
        function U(t) {
          t._dirty || (t._dirty = !0, h(t));
        }
        function Y(t, e, n, r, i) {
          var o = t.base;
          t._disableRendering || (t._disableRendering = !0, (t.__ref = e.ref) && delete e.ref, (t.__key = e.key) && delete e.key, u(o) || i ? t.componentWillMount && t.componentWillMount() : t.componentWillReceiveProps && t.componentWillReceiveProps(e, r), r && r !== t.context && (t.prevContext || (t.prevContext = t.context), t.context = r), t.prevProps || (t.prevProps = t.props), t.props = e, t._disableRendering = !1, 0 !== n && (1 !== n && K.syncComponentUpdates === !1 && o ? U(t) : X(t, 1, i)), 
          t.__ref && t.__ref(t));
        }
        function X(t, e, i) {
          if (!t._disableRendering) {
            var o, s, u = t.props, c = t.state, l = t.context, f = t.prevProps || u, p = t.prevState || c, d = t.prevContext || l, h = t.base, _ = h || t.nextBase, m = _ && _.nextSibling, g = _ && _.parentNode, b = _ && _._component, x = t._component;
            if (h && (t.props = f, t.state = p, t.context = d, 2 !== e && t.shouldComponentUpdate && t.shouldComponentUpdate(u, c, l) === !1 ? o = !0 : t.componentWillUpdate && t.componentWillUpdate(u, c, l), t.props = u, t.state = c, t.context = l), t.prevProps = t.prevState = t.prevContext = t.nextBase = null, t._dirty = !1, !o) {
              for (t.render && (s = t.render(u, c, l)), t.getChildContext && (l = n(r(l), t.getChildContext()));v(s);) {
                s = y(s, l);
              }
              var T, E, w = s && s.nodeName;
              if (a(w) && w.prototype.render) {
                var P = x, M = S(s);
                P && P.constructor === w ? Y(P, M, 1, l) : (T = P, P = z(w, M, l), P._parentComponent = t, t._component = P, Y(P, M, 0, l), X(P, 1)), E = P.base;
              } else {
                var O = _;
                T = x, T && (O = t._component = null), (_ || 1 === e) && (O && (O._component = null), E = j(O, s, l, i || !h));
              }
              if (_ && E !== _ && (g && E !== g && g.insertBefore(E, m || null), T || b !== t || x || !_.parentNode || (_._component = null, R(_))), T && W(T, !0), t.base = E, E) {
                for (var C = t, k = t;k = k._parentComponent;) {
                  C = k;
                }
                E._component = C, E._componentConstructor = C.constructor;
              }
            }
            !h || i ? (ot.unshift(t), at || N()) : !o && t.componentDidUpdate && t.componentDidUpdate(f, p, d);
            var A, I = t._renderCallbacks;
            if (I) {
              for (;A = I.pop();) {
                A.call(t);
              }
            }
            return s;
          }
        }
        function V(t, e, n, r) {
          for (var i = t && t._component, o = t, a = i && t._componentConstructor === e.nodeName, s = a, u = S(e);i && !s && (i = i._parentComponent);) {
            s = i.constructor === e.nodeName;
          }
          return !s || r && !i._component ? (i && !a && (W(i, !0), t = o = null), i = z(e.nodeName, u, n), t && !i.nextBase && (i.nextBase = t), Y(i, u, 1, n, r), t = i.base, o && t !== o && (o._component = null, R(o))) : (Y(i, u, 3, n, r), t = i.base), t;
        }
        function W(t, e) {
          var n = t.base;
          t._disableRendering = !0, t.componentWillUnmount && t.componentWillUnmount(), t.base = null;
          var r = t._component;
          r ? W(r, e) : n && (n[tt] && n[tt].ref && n[tt].ref(null), t.nextBase = n, e && (b(n), F(t)), L(n.childNodes, !e)), t.__ref && t.__ref(null), t.componentDidUnmount && t.componentDidUnmount();
        }
        function H(t, e) {
          this._dirty = !0, this._disableRendering = !1, this.prevState = this.prevProps = this.prevContext = this.base = this.nextBase = this._parentComponent = this._component = this.__ref = this.__key = this._linkedStates = this._renderCallbacks = null, this.context = e || {}, this.props = t, this.state = this.getInitialState && this.getInitialState() || {};
        }
        function B(t, e, n) {
          return j(n, t, {}, !1, e);
        }
        var Z = {}, q = function(t) {
          return Z[t] || (Z[t] = t.toLowerCase());
        }, G = "undefined" != typeof Promise && Promise.resolve(), J = G ? function(t) {
          G.then(t);
        } : setTimeout, K = {vnode:u}, Q = [], $ = {}, tt = "undefined" != typeof Symbol ? Symbol["for"]("preactattr") : "__preactattr_", et = {boxFlex:1, boxFlexGroup:1, columnCount:1, fillOpacity:1, flex:1, flexGrow:1, flexPositive:1, flexShrink:1, flexNegative:1, fontWeight:1, lineClamp:1, lineHeight:1, opacity:1, order:1, orphans:1, strokeOpacity:1, widows:1, zIndex:1, zoom:1}, nt = [], rt = [], it = {}, ot = [], at = 0, st = !1, ut = {};
        n(H.prototype, {linkState:function(t, e) {
          var n = this._linkedStates || (this._linkedStates = {}), r = t + "|" + e;
          return n[r] || (n[r] = d(this, t, e));
        }, setState:function(t, e) {
          var i = this.state;
          this.prevState || (this.prevState = r(i)), n(i, a(t) ? t(i, this.props) : t), e && (this._renderCallbacks = this._renderCallbacks || []).push(e), U(this);
        }, forceUpdate:function() {
          X(this, 2);
        }, render:function() {
          return null;
        }}), t.h = f, t.cloneElement = p, t.Component = H, t.render = B, t.rerender = _, t.options = K;
      });
    }).call(e, n(49).setImmediate);
  }, function(t, e, n) {
    (function(t, r) {
      function i(t, e) {
        this._id = t, this._clearFn = e;
      }
      var o = n(50).nextTick, a = Function.prototype.apply, s = Array.prototype.slice, u = {}, c = 0;
      e.setTimeout = function() {
        return new i(a.call(setTimeout, window, arguments), clearTimeout);
      }, e.setInterval = function() {
        return new i(a.call(setInterval, window, arguments), clearInterval);
      }, e.clearTimeout = e.clearInterval = function(t) {
        t.close();
      }, i.prototype.unref = i.prototype.ref = function() {
      }, i.prototype.close = function() {
        this._clearFn.call(window, this._id);
      }, e.enroll = function(t, e) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
      }, e.unenroll = function(t) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
      }, e._unrefActive = e.active = function(t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function() {
          t._onTimeout && t._onTimeout();
        }, e));
      }, e.setImmediate = "function" == typeof t ? t : function(t) {
        var n = c++, r = !(arguments.length < 2) && s.call(arguments, 1);
        return u[n] = !0, o(function() {
          u[n] && (r ? t.apply(null, r) : t.call(null), e.clearImmediate(n));
        }), n;
      }, e.clearImmediate = "function" == typeof r ? r : function(t) {
        delete u[t];
      };
    }).call(e, n(49).setImmediate, n(49).clearImmediate);
  }, function(t, e) {
    function n() {
      f && c && (f = !1, c.length ? l = c.concat(l) : p = -1, l.length && r());
    }
    function r() {
      if (!f) {
        var t = a.call(null, n);
        f = !0;
        for (var e = l.length;e;) {
          for (c = l, l = [];++p < e;) {
            c && c[p].run();
          }
          p = -1, e = l.length;
        }
        c = null, f = !1, s.call(null, t);
      }
    }
    function i(t, e) {
      this.fun = t, this.array = e;
    }
    function o() {
    }
    var a, s, u = t.exports = {};
    !function() {
      try {
        a = setTimeout;
      } catch (t) {
        a = function() {
          throw new Error("setTimeout is not defined");
        };
      }
      try {
        s = clearTimeout;
      } catch (t) {
        s = function() {
          throw new Error("clearTimeout is not defined");
        };
      }
    }();
    var c, l = [], f = !1, p = -1;
    u.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var n = 1;n < arguments.length;n++) {
          e[n - 1] = arguments[n];
        }
      }
      l.push(new i(t, e)), 1 !== l.length || f || a.call(null, r, 0);
    }, i.prototype.run = function() {
      this.fun.apply(null, this.array);
    }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = o, u.addListener = o, u.once = o, u.off = o, u.removeListener = o, u.removeAllListeners = o, u.emit = o, u.binding = function(t) {
      throw new Error("process.binding is not supported");
    }, u.cwd = function() {
      return "/";
    }, u.chdir = function(t) {
      throw new Error("process.chdir is not supported");
    }, u.umask = function() {
      return 0;
    };
  }, function(t, e, n) {
    (function(t) {
      function r(t) {
        return t && t.__esModule ? t : {"default":t};
      }
      function i() {
      }
      e.__esModule = !0, e.compose = e.applyMiddleware = e.bindActionCreators = e.combineReducers = e.createStore = void 0;
      var o = n(52), a = r(o), s = n(60), u = r(s), c = n(62), l = r(c), f = n(63), p = r(f), d = n(64), h = r(d), _ = n(61), v = r(_);
      "production" !== t.env.NODE_ENV && "string" == typeof i.name && "isCrushed" !== i.name && (0, v["default"])("You are currently using minified code outside of NODE_ENV \x3d\x3d\x3d 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build."), e.createStore = 
      a["default"], e.combineReducers = u["default"], e.bindActionCreators = l["default"], e.applyMiddleware = p["default"], e.compose = h["default"];
    }).call(e, n(50));
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    function i(t, e, n) {
      function r() {
        y === v && (y = v.slice());
      }
      function o() {
        return _;
      }
      function s(t) {
        if ("function" != typeof t) {
          throw new Error("Expected listener to be a function.");
        }
        var e = !0;
        return r(), y.push(t), function() {
          if (e) {
            e = !1, r();
            var n = y.indexOf(t);
            y.splice(n, 1);
          }
        };
      }
      function l(t) {
        if (!(0, a["default"])(t)) {
          throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        }
        if ("undefined" == typeof t.type) {
          throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        }
        if (m) {
          throw new Error("Reducers may not dispatch actions.");
        }
        try {
          m = !0, _ = h(_, t);
        } finally {
          m = !1;
        }
        for (var e = v = y, n = 0;n < e.length;n++) {
          e[n]();
        }
        return t;
      }
      function f(t) {
        if ("function" != typeof t) {
          throw new Error("Expected the nextReducer to be a function.");
        }
        h = t, l({type:c.INIT});
      }
      function p() {
        var t, e = s;
        return t = {subscribe:function(t) {
          function n() {
            t.next && t.next(o());
          }
          if ("object" != typeof t) {
            throw new TypeError("Expected the observer to be an object.");
          }
          n();
          var r = e(n);
          return {unsubscribe:r};
        }}, t[u["default"]] = function() {
          return this;
        }, t;
      }
      var d;
      if ("function" == typeof e && "undefined" == typeof n && (n = e, e = void 0), "undefined" != typeof n) {
        if ("function" != typeof n) {
          throw new Error("Expected the enhancer to be a function.");
        }
        return n(i)(t, e);
      }
      if ("function" != typeof t) {
        throw new Error("Expected the reducer to be a function.");
      }
      var h = t, _ = e, v = [], y = v, m = !1;
      return l({type:c.INIT}), d = {dispatch:l, subscribe:s, getState:o, replaceReducer:f}, d[u["default"]] = p, d;
    }
    e.__esModule = !0, e.ActionTypes = void 0, e["default"] = i;
    var o = n(53), a = r(o), s = n(58), u = r(s), c = e.ActionTypes = {INIT:"@@redux/INIT"};
  }, function(t, e, n) {
    function r(t) {
      if (!a(t) || p.call(t) != s || o(t)) {
        return !1;
      }
      var e = i(t);
      if (null === e) {
        return !0;
      }
      var n = l.call(e, "constructor") && e.constructor;
      return "function" == typeof n && n instanceof n && c.call(n) == f;
    }
    var i = n(54), o = n(56), a = n(57), s = "[object Object]", u = Object.prototype, c = Function.prototype.toString, l = u.hasOwnProperty, f = c.call(Object), p = u.toString;
    t.exports = r;
  }, function(t, e, n) {
    var r = n(55), i = Object.getPrototypeOf, o = r(i, Object);
    t.exports = o;
  }, function(t, e) {
    function n(t, e) {
      return function(n) {
        return t(e(n));
      };
    }
    t.exports = n;
  }, function(t, e) {
    function n(t) {
      var e = !1;
      if (null != t && "function" != typeof t.toString) {
        try {
          e = !!(t + "");
        } catch (n) {
        }
      }
      return e;
    }
    t.exports = n;
  }, function(t, e) {
    function n(t) {
      return !!t && "object" == typeof t;
    }
    t.exports = n;
  }, function(t, e, n) {
    (function(e) {
      t.exports = n(59)(e || window || this);
    }).call(e, function() {
      return this;
    }());
  }, function(t, e) {
    t.exports = function(t) {
      var e, n = t.Symbol;
      return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e;
    };
  }, function(t, e, n) {
    (function(t) {
      function r(t) {
        return t && t.__esModule ? t : {"default":t};
      }
      function i(t, e) {
        var n = e && e.type, r = n && '"' + n.toString() + '"' || "an action";
        return "Given action " + r + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
      }
      function o(t, e, n) {
        var r = Object.keys(e), i = n && n.type === u.ActionTypes.INIT ? "initialState argument passed to createStore" : "previous state received by the reducer";
        if (0 === r.length) {
          return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
        }
        if (!(0, l["default"])(t)) {
          return "The " + i + ' has unexpected type of "' + {}.toString.call(t).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + r.join('", "') + '"');
        }
        var o = Object.keys(t).filter(function(t) {
          return !e.hasOwnProperty(t);
        });
        return o.length > 0 ? "Unexpected " + (o.length > 1 ? "keys" : "key") + " " + ('"' + o.join('", "') + '" found in ' + i + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + r.join('", "') + '". Unexpected keys will be ignored.') : void 0;
      }
      function a(t) {
        Object.keys(t).forEach(function(e) {
          var n = t[e], r = n(void 0, {type:u.ActionTypes.INIT});
          if ("undefined" == typeof r) {
            throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
          }
          var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
          if ("undefined" == typeof n(void 0, {type:i})) {
            throw new Error('Reducer "' + e + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + u.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
          }
        });
      }
      function s(e) {
        for (var n = Object.keys(e), r = {}, s = 0;s < n.length;s++) {
          var u = n[s];
          "function" == typeof e[u] && (r[u] = e[u]);
        }
        var c, l = Object.keys(r);
        try {
          a(r);
        } catch (f) {
          c = f;
        }
        return function() {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], n = arguments[1];
          if (c) {
            throw c;
          }
          if ("production" !== t.env.NODE_ENV) {
            var a = o(e, r, n);
            a && (0, p["default"])(a);
          }
          for (var s = !1, u = {}, f = 0;f < l.length;f++) {
            var d = l[f], h = r[d], _ = e[d], v = h(_, n);
            if ("undefined" == typeof v) {
              var y = i(d, n);
              throw new Error(y);
            }
            u[d] = v, s = s || v !== _;
          }
          return s ? u : e;
        };
      }
      e.__esModule = !0, e["default"] = s;
      var u = n(52), c = n(53), l = r(c), f = n(61), p = r(f);
    }).call(e, n(50));
  }, function(t, e) {
    function n(t) {
      "undefined" != typeof console && "function" == typeof console.error && console.error(t);
      try {
        throw new Error(t);
      } catch (e) {
      }
    }
    e.__esModule = !0, e["default"] = n;
  }, function(t, e) {
    function n(t, e) {
      return function() {
        return e(t.apply(void 0, arguments));
      };
    }
    function r(t, e) {
      if ("function" == typeof t) {
        return n(t, e);
      }
      if ("object" != typeof t || null === t) {
        throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
      }
      for (var r = Object.keys(t), i = {}, o = 0;o < r.length;o++) {
        var a = r[o], s = t[a];
        "function" == typeof s && (i[a] = n(s, e));
      }
      return i;
    }
    e.__esModule = !0, e["default"] = r;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    function i() {
      for (var t = arguments.length, e = Array(t), n = 0;n < t;n++) {
        e[n] = arguments[n];
      }
      return function(t) {
        return function(n, r, i) {
          var a = t(n, r, i), u = a.dispatch, c = [], l = {getState:a.getState, dispatch:function(t) {
            return u(t);
          }};
          return c = e.map(function(t) {
            return t(l);
          }), u = s["default"].apply(void 0, c)(a.dispatch), o({}, a, {dispatch:u});
        };
      };
    }
    e.__esModule = !0;
    var o = Object.assign || function(t) {
      for (var e = 1;e < arguments.length;e++) {
        var n = arguments[e];
        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }
      return t;
    };
    e["default"] = i;
    var a = n(64), s = r(a);
  }, function(t, e) {
    function n() {
      for (var t = arguments.length, e = Array(t), n = 0;n < t;n++) {
        e[n] = arguments[n];
      }
      if (0 === e.length) {
        return function(t) {
          return t;
        };
      }
      var r = function() {
        var t = e[e.length - 1], n = e.slice(0, -1);
        return {v:function() {
          return n.reduceRight(function(t, e) {
            return e(t);
          }, t.apply(void 0, arguments));
        }};
      }();
      return "object" == typeof r ? r.v : void 0;
    }
    e.__esModule = !0, e["default"] = n;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(48), _ = n(114), v = r(_), y = n(115), m = r(y), g = n(116), b = r(g), x = n(117), T = n(118), E = r(T), w = n(160), P = r(w), M = n(176), S = r(M), O = n(180), C = r(O), k = n(143), N = (r(k), n(134)), j = r(N), A = n(181), I = n(182), L = r(I);
    n(183);
    var R = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"render", value:function() {
        var t = n(159), e = this.context.store, r = e.getState();
        this._state = r;
        var i = this.props, o = i.options, a = r.controls, s = a.isMinimize, u = a.isActive, c = a.isHighlight, l = this._getStyle(r), f = "" + t["curve-editor"];
        return f += s ? " " + t["is-minimized"] : "", f += u ? "" : " " + t["is-inactive"], f += c ? " " + t["is-highlighted"] : "", f += o.isHiddenOnMin ? " " + t["is-hidden-on-min"] : "", this._state = r, (0, h.h)("div", {className:f, style:l}, (0, h.h)(C["default"], null), (0, h.h)(S["default"], {state:r}), (0, h.h)(P["default"], {state:r}), (0, h.h)(E["default"], {state:r, progressLines:i.progressLines, options:o}));
      }}, {key:"_getStyle", value:function(t) {
        var e = this._state.controls, n = (e.isMinimize, e.isActive, v["default"].CURVE_SIZE + 53), r = v["default"].CURVE_SIZE + 2 * v["default"].CURVE_PADDING, i = t.resize, o = i.temp_top, a = i.temp_bottom, s = i.temp_right;
        i.translate;
        o += i.top, a += i.bottom, s += i.right;
        var u = "height: " + (r - o + a) + "px", c = "width: " + (n + s) + "px", l = i.x + i.tempX, f = i.y + i.tempY, p = "transform: translate(" + l + "px, " + (f + o) + "px)";
        return "" + mojs.h.prefix.css + p + "; " + p + "; " + c + "; " + u + ";";
      }}, {key:"componentDidMount", value:function() {
        this._resetCounter = 0;
        var t = this.context.store, e = this.base.querySelector("#js-left-panel"), n = (0, b["default"])(new m["default"].Manager(e));
        n.add(new m["default"].Pan({threshold:0})), n.on("pan", function(e) {
          var n = e.deltaX, r = e.deltaY;
          t.dispatch({type:"EDITOR_TRANSLATE", data:{x:n, y:r}});
        }).on("panend", function(e) {
          var n = e.deltaX, r = e.deltaY;
          t.dispatch({type:"EDITOR_TRANSLATE_END", data:{x:n, y:r}});
        }), this._addKeyUp(), this._subscribeFocus(), t.subscribe(this.forceUpdate.bind(this));
      }}, {key:"_addKeyUp", value:function() {
        document.addEventListener("keyup", this._onKeyUp.bind(this));
      }}, {key:"_onKeyUp", value:function(t) {
        var e = this.context.store, n = this._state.controls;
        if (n.isActive && !n.isMinimize && t.altKey) {
          switch(t.which) {
            case 90:
              return e.dispatch(x.ActionCreators.undo());
            case 88:
              return e.dispatch(x.ActionCreators.redo());
            case 68:
              return e.dispatch({type:"POINT_DELETE"});
            case 220:
              return t.shiftKey && this._tryToReset(e);
          }
        }
      }}, {key:"_tryToReset", value:function(t) {
        var e = this;
        ++this._resetCounter > 2 && (0, A.reset)(t), clearTimeout(this._tm), this._tm = setTimeout(function() {
          e._resetCounter = 0;
        }, 300);
      }}, {key:"_subscribeFocus", value:function() {
        var t = this;
        this._createActivePool();
        var e = this.context.store;
        (0, j["default"])(this.base, function(n) {
          var r = mojs[v["default"].ACTIVE_POOL_NAME];
          r && r.resetActive(t), t._state.controls.isActive || e.dispatch({type:"SET_ACTIVE", data:!0});
        });
      }}, {key:"_getPool", value:function() {
        return mojs[v["default"].ACTIVE_POOL_NAME] || (mojs[v["default"].ACTIVE_POOL_NAME] = new L["default"]), mojs[v["default"].ACTIVE_POOL_NAME];
      }}, {key:"_createActivePool", value:function() {
        var t = this._getPool();
        t.add(this._setInactive.bind(this)), mojs[v["default"].ACTIVE_POOL_NAME] = t;
      }}, {key:"_setInactive", value:function(t) {
        var e = this.context.store;
        t !== this && e.dispatch({type:"SET_ACTIVE", data:!1});
      }}]), e;
    }(h.Component);
    e["default"] = R;
  }, function(t, e, n) {
    t.exports = {"default":n(67), __esModule:!0};
  }, function(t, e, n) {
    n(68), t.exports = n(4).Object.getPrototypeOf;
  }, function(t, e, n) {
    var r = n(41), i = n(69);
    n(70)("getPrototypeOf", function() {
      return function(t) {
        return i(r(t));
      };
    });
  }, function(t, e, n) {
    var r = n(26), i = n(41), o = n(35)("IE_PROTO"), a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
      return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
    };
  }, function(t, e, n) {
    var r = n(9), i = n(4), o = n(19);
    t.exports = function(t, e) {
      var n = (i.Object || {})[t] || Object[t], a = {};
      a[t] = e(n), r(r.S + r.F * o(function() {
        n(1);
      }), "Object", a);
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var i = n(72), o = r(i);
    e["default"] = function(t, e) {
      if (!t) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !e || "object" !== ("undefined" == typeof e ? "undefined" : (0, o["default"])(e)) && "function" != typeof e ? t : e;
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var i = n(73), o = r(i), a = n(92), s = r(a), u = "function" == typeof s["default"] && "symbol" == typeof o["default"] ? function(t) {
      return typeof t;
    } : function(t) {
      return t && "function" == typeof s["default"] && t.constructor === s["default"] ? "symbol" : typeof t;
    };
    e["default"] = "function" == typeof s["default"] && "symbol" === u(o["default"]) ? function(t) {
      return "undefined" == typeof t ? "undefined" : u(t);
    } : function(t) {
      return t && "function" == typeof s["default"] && t.constructor === s["default"] ? "symbol" : "undefined" == typeof t ? "undefined" : u(t);
    };
  }, function(t, e, n) {
    t.exports = {"default":n(74), __esModule:!0};
  }, function(t, e, n) {
    n(75), n(87), t.exports = n(91).f("iterator");
  }, function(t, e, n) {
    var r = n(76)(!0);
    n(77)(String, "String", function(t) {
      this._t = String(t), this._i = 0;
    }, function() {
      var t, e = this._t, n = this._i;
      return n >= e.length ? {value:void 0, done:!0} : (t = r(e, n), this._i += t.length, {value:t, done:!1});
    });
  }, function(t, e, n) {
    var r = n(33), i = n(30);
    t.exports = function(t) {
      return function(e, n) {
        var o, a, s = String(i(e)), u = r(n), c = s.length;
        return u < 0 || u >= c ? t ? "" : void 0 : (o = s.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
      };
    };
  }, function(t, e, n) {
    var r = n(78), i = n(9), o = n(79), a = n(13), s = n(26), u = n(80), c = n(81), l = n(85), f = n(69), p = n(86)("iterator"), d = !([].keys && "next" in [].keys()), h = "@@iterator", _ = "keys", v = "values", y = function() {
      return this;
    };
    t.exports = function(t, e, n, m, g, b, x) {
      c(n, e, m);
      var T, E, w, P = function(t) {
        if (!d && t in C) {
          return C[t];
        }
        switch(t) {
          case _:
            return function() {
              return new n(this, t);
            };
          case v:
            return function() {
              return new n(this, t);
            };
        }
        return function() {
          return new n(this, t);
        };
      }, M = e + " Iterator", S = g == v, O = !1, C = t.prototype, k = C[p] || C[h] || g && C[g], N = k || P(g), j = g ? S ? P("entries") : N : void 0, A = "Array" == e ? C.entries || k : k;
      if (A && (w = f(A.call(new t)), w !== Object.prototype && (l(w, M, !0), r || s(w, p) || a(w, p, y))), S && k && k.name !== v && (O = !0, N = function() {
        return k.call(this);
      }), r && !x || !d && !O && C[p] || a(C, p, N), u[e] = N, u[M] = y, g) {
        if (T = {values:S ? N : P(v), keys:b ? N : P(_), entries:j}, x) {
          for (E in T) {
            E in C || o(C, E, T[E]);
          }
        } else {
          i(i.P + i.F * (d || O), e, T);
        }
      }
      return T;
    };
  }, function(t, e) {
    t.exports = !0;
  }, function(t, e, n) {
    t.exports = n(13);
  }, function(t, e) {
    t.exports = {};
  }, function(t, e, n) {
    var r = n(82), i = n(22), o = n(85), a = {};
    n(13)(a, n(86)("iterator"), function() {
      return this;
    }), t.exports = function(t, e, n) {
      t.prototype = r(a, {next:i(1, n)}), o(t, e + " Iterator");
    };
  }, function(t, e, n) {
    var r = n(15), i = n(83), o = n(38), a = n(35)("IE_PROTO"), s = function() {
    }, u = "prototype", c = function() {
      var t, e = n(20)("iframe"), r = o.length, i = "\x3c", a = "\x3e";
      for (e.style.display = "none", n(84).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write(i + "script" + a + "document.F\x3dObject" + i + "/script" + a), t.close(), c = t.F;r--;) {
        delete c[u][o[r]];
      }
      return c();
    };
    t.exports = Object.create || function(t, e) {
      var n;
      return null !== t ? (s[u] = r(t), n = new s, s[u] = null, n[a] = t) : n = c(), void 0 === e ? n : i(n, e);
    };
  }, function(t, e, n) {
    var r = n(14), i = n(15), o = n(24);
    t.exports = n(18) ? Object.defineProperties : function(t, e) {
      i(t);
      for (var n, a = o(e), s = a.length, u = 0;s > u;) {
        r.f(t, n = a[u++], e[n]);
      }
      return t;
    };
  }, function(t, e, n) {
    t.exports = n(10).document && document.documentElement;
  }, function(t, e, n) {
    var r = n(14).f, i = n(26), o = n(86)("toStringTag");
    t.exports = function(t, e, n) {
      t && !i(t = n ? t : t.prototype, o) && r(t, o, {configurable:!0, value:e});
    };
  }, function(t, e, n) {
    var r = n(36)("wks"), i = n(37), o = n(10).Symbol, a = "function" == typeof o, s = t.exports = function(t) {
      return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t));
    };
    s.store = r;
  }, function(t, e, n) {
    n(88);
    for (var r = n(10), i = n(13), o = n(80), a = n(86)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0;u < 5;u++) {
      var c = s[u], l = r[c], f = l && l.prototype;
      f && !f[a] && i(f, a, c), o[c] = o.Array;
    }
  }, function(t, e, n) {
    var r = n(89), i = n(90), o = n(80), a = n(27);
    t.exports = n(77)(Array, "Array", function(t, e) {
      this._t = a(t), this._i = 0, this._k = e;
    }, function() {
      var t = this._t, e = this._k, n = this._i++;
      return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]]);
    }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
  }, function(t, e) {
    t.exports = function() {
    };
  }, function(t, e) {
    t.exports = function(t, e) {
      return {value:e, done:!!t};
    };
  }, function(t, e, n) {
    e.f = n(86);
  }, function(t, e, n) {
    t.exports = {"default":n(93), __esModule:!0};
  }, function(t, e, n) {
    n(94), n(103), n(104), n(105), t.exports = n(4).Symbol;
  }, function(t, e, n) {
    var r = n(10), i = n(26), o = n(18), a = n(9), s = n(79), u = n(95).KEY, c = n(19), l = n(36), f = n(85), p = n(37), d = n(86), h = n(91), _ = n(96), v = n(97), y = n(98), m = n(99), g = n(15), b = n(27), x = n(21), T = n(22), E = n(82), w = n(100), P = n(102), M = n(14), S = n(24), O = P.f, C = M.f, k = w.f, N = r.Symbol, j = r.JSON, A = j && j.stringify, I = "prototype", L = d("_hidden"), R = d("toPrimitive"), D = {}.propertyIsEnumerable, F = l("symbol-registry"), z = l("symbols"), U = l("op-symbols"), 
    Y = Object[I], X = "function" == typeof N, V = r.QObject, W = !V || !V[I] || !V[I].findChild, H = o && c(function() {
      return 7 != E(C({}, "a", {get:function() {
        return C(this, "a", {value:7}).a;
      }})).a;
    }) ? function(t, e, n) {
      var r = O(Y, e);
      r && delete Y[e], C(t, e, n), r && t !== Y && C(Y, e, r);
    } : C, B = function(t) {
      var e = z[t] = E(N[I]);
      return e._k = t, e;
    }, Z = X && "symbol" == typeof N.iterator ? function(t) {
      return "symbol" == typeof t;
    } : function(t) {
      return t instanceof N;
    }, q = function(t, e, n) {
      return t === Y && q(U, e, n), g(t), e = x(e, !0), g(n), i(z, e) ? (n.enumerable ? (i(t, L) && t[L][e] && (t[L][e] = !1), n = E(n, {enumerable:T(0, !1)})) : (i(t, L) || C(t, L, T(1, {})), t[L][e] = !0), H(t, e, n)) : C(t, e, n);
    }, G = function(t, e) {
      g(t);
      for (var n, r = y(e = b(e)), i = 0, o = r.length;o > i;) {
        q(t, n = r[i++], e[n]);
      }
      return t;
    }, J = function(t, e) {
      return void 0 === e ? E(t) : G(E(t), e);
    }, K = function(t) {
      var e = D.call(this, t = x(t, !0));
      return !(this === Y && i(z, t) && !i(U, t)) && (!(e || !i(this, t) || !i(z, t) || i(this, L) && this[L][t]) || e);
    }, Q = function(t, e) {
      if (t = b(t), e = x(e, !0), t !== Y || !i(z, e) || i(U, e)) {
        var n = O(t, e);
        return !n || !i(z, e) || i(t, L) && t[L][e] || (n.enumerable = !0), n;
      }
    }, $ = function(t) {
      for (var e, n = k(b(t)), r = [], o = 0;n.length > o;) {
        i(z, e = n[o++]) || e == L || e == u || r.push(e);
      }
      return r;
    }, tt = function(t) {
      for (var e, n = t === Y, r = k(n ? U : b(t)), o = [], a = 0;r.length > a;) {
        !i(z, e = r[a++]) || n && !i(Y, e) || o.push(z[e]);
      }
      return o;
    };
    X || (N = function() {
      if (this instanceof N) {
        throw TypeError("Symbol is not a constructor!");
      }
      var t = p(arguments.length > 0 ? arguments[0] : void 0), e = function(n) {
        this === Y && e.call(U, n), i(this, L) && i(this[L], t) && (this[L][t] = !1), H(this, t, T(1, n));
      };
      return o && W && H(Y, t, {configurable:!0, set:e}), B(t);
    }, s(N[I], "toString", function() {
      return this._k;
    }), P.f = Q, M.f = q, n(101).f = w.f = $, n(40).f = K, n(39).f = tt, o && !n(78) && s(Y, "propertyIsEnumerable", K, !0), h.f = function(t) {
      return B(d(t));
    }), a(a.G + a.W + a.F * !X, {Symbol:N});
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0;et.length > nt;) {
      d(et[nt++]);
    }
    for (var et = S(d.store), nt = 0;et.length > nt;) {
      _(et[nt++]);
    }
    a(a.S + a.F * !X, "Symbol", {"for":function(t) {
      return i(F, t += "") ? F[t] : F[t] = N(t);
    }, keyFor:function(t) {
      if (Z(t)) {
        return v(F, t);
      }
      throw TypeError(t + " is not a symbol!");
    }, useSetter:function() {
      W = !0;
    }, useSimple:function() {
      W = !1;
    }}), a(a.S + a.F * !X, "Object", {create:J, defineProperty:q, defineProperties:G, getOwnPropertyDescriptor:Q, getOwnPropertyNames:$, getOwnPropertySymbols:tt}), j && a(a.S + a.F * (!X || c(function() {
      var t = N();
      return "[null]" != A([t]) || "{}" != A({a:t}) || "{}" != A(Object(t));
    })), "JSON", {stringify:function(t) {
      if (void 0 !== t && !Z(t)) {
        for (var e, n, r = [t], i = 1;arguments.length > i;) {
          r.push(arguments[i++]);
        }
        return e = r[1], "function" == typeof e && (n = e), !n && m(e) || (e = function(t, e) {
          if (n && (e = n.call(this, t, e)), !Z(e)) {
            return e;
          }
        }), r[1] = e, A.apply(j, r);
      }
    }}), N[I][R] || n(13)(N[I], R, N[I].valueOf), f(N, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0);
  }, function(t, e, n) {
    var r = n(37)("meta"), i = n(16), o = n(26), a = n(14).f, s = 0, u = Object.isExtensible || function() {
      return !0;
    }, c = !n(19)(function() {
      return u(Object.preventExtensions({}));
    }), l = function(t) {
      a(t, r, {value:{i:"O" + ++s, w:{}}});
    }, f = function(t, e) {
      if (!i(t)) {
        return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
      }
      if (!o(t, r)) {
        if (!u(t)) {
          return "F";
        }
        if (!e) {
          return "E";
        }
        l(t);
      }
      return t[r].i;
    }, p = function(t, e) {
      if (!o(t, r)) {
        if (!u(t)) {
          return !0;
        }
        if (!e) {
          return !1;
        }
        l(t);
      }
      return t[r].w;
    }, d = function(t) {
      return c && h.NEED && u(t) && !o(t, r) && l(t), t;
    }, h = t.exports = {KEY:r, NEED:!1, fastKey:f, getWeak:p, onFreeze:d};
  }, function(t, e, n) {
    var r = n(10), i = n(4), o = n(78), a = n(91), s = n(14).f;
    t.exports = function(t) {
      var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      "_" == t.charAt(0) || t in e || s(e, t, {value:a.f(t)});
    };
  }, function(t, e, n) {
    var r = n(24), i = n(27);
    t.exports = function(t, e) {
      for (var n, o = i(t), a = r(o), s = a.length, u = 0;s > u;) {
        if (o[n = a[u++]] === e) {
          return n;
        }
      }
    };
  }, function(t, e, n) {
    var r = n(24), i = n(39), o = n(40);
    t.exports = function(t) {
      var e = r(t), n = i.f;
      if (n) {
        for (var a, s = n(t), u = o.f, c = 0;s.length > c;) {
          u.call(t, a = s[c++]) && e.push(a);
        }
      }
      return e;
    };
  }, function(t, e, n) {
    var r = n(29);
    t.exports = Array.isArray || function(t) {
      return "Array" == r(t);
    };
  }, function(t, e, n) {
    var r = n(27), i = n(101).f, o = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(t) {
      try {
        return i(t);
      } catch (e) {
        return a.slice();
      }
    };
    t.exports.f = function(t) {
      return a && "[object Window]" == o.call(t) ? s(t) : i(r(t));
    };
  }, function(t, e, n) {
    var r = n(25), i = n(38).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
      return r(t, i);
    };
  }, function(t, e, n) {
    var r = n(40), i = n(22), o = n(27), a = n(21), s = n(26), u = n(17), c = Object.getOwnPropertyDescriptor;
    e.f = n(18) ? c : function(t, e) {
      if (t = o(t), e = a(e, !0), u) {
        try {
          return c(t, e);
        } catch (n) {
        }
      }
      if (s(t, e)) {
        return i(!r.f.call(t, e), t[e]);
      }
    };
  }, function(t, e) {
  }, function(t, e, n) {
    n(96)("asyncIterator");
  }, function(t, e, n) {
    n(96)("observable");
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var i = n(107), o = r(i), a = n(111), s = r(a), u = n(72), c = r(u);
    e["default"] = function(t, e) {
      if ("function" != typeof e && null !== e) {
        throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : (0, c["default"])(e)));
      }
      t.prototype = (0, s["default"])(e && e.prototype, {constructor:{value:t, enumerable:!1, writable:!0, configurable:!0}}), e && (o["default"] ? (0, o["default"])(t, e) : t.__proto__ = e);
    };
  }, function(t, e, n) {
    t.exports = {"default":n(108), __esModule:!0};
  }, function(t, e, n) {
    n(109), t.exports = n(4).Object.setPrototypeOf;
  }, function(t, e, n) {
    var r = n(9);
    r(r.S, "Object", {setPrototypeOf:n(110).set});
  }, function(t, e, n) {
    var r = n(16), i = n(15), o = function(t, e) {
      if (i(t), !r(e) && null !== e) {
        throw TypeError(e + ": can't set as prototype!");
      }
    };
    t.exports = {set:Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
      try {
        r = n(11)(Function.call, n(102).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array);
      } catch (i) {
        e = !0;
      }
      return function(t, n) {
        return o(t, n), e ? t.__proto__ = n : r(t, n), t;
      };
    }({}, !1) : void 0), check:o};
  }, function(t, e, n) {
    t.exports = {"default":n(112), __esModule:!0};
  }, function(t, e, n) {
    n(113);
    var r = n(4).Object;
    t.exports = function(t, e) {
      return r.create(t, e);
    };
  }, function(t, e, n) {
    var r = n(9);
    r(r.S, "Object", {create:n(82)});
  }, function(t, e) {
    Object.defineProperty(e, "__esModule", {value:!0});
    var n = 350;
    e["default"] = {CURVE_SIZE:n, RESIZE_NEGATIVE_OFFSET:150, CURVE_PERCENT:n / 100, CURVE_PADDING:10, ACTIVE_POOL_NAME:"_mojsCurveEditorPool"};
  }, function(t, e, n) {
    var r;
    !function(i, o, a, s) {
      function u(t, e, n) {
        return setTimeout(d(t, n), e);
      }
      function c(t, e, n) {
        return !!Array.isArray(t) && (l(t, n[e], n), !0);
      }
      function l(t, e, n) {
        var r;
        if (t) {
          if (t.forEach) {
            t.forEach(e, n);
          } else {
            if (t.length !== s) {
              for (r = 0;r < t.length;) {
                e.call(n, t[r], r, t), r++;
              }
            } else {
              for (r in t) {
                t.hasOwnProperty(r) && e.call(n, t[r], r, t);
              }
            }
          }
        }
      }
      function f(t, e, n) {
        var r = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
        return function() {
          var e = new Error("get-stack-trace"), n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", o = i.console && (i.console.warn || i.console.log);
          return o && o.call(i.console, r, n), t.apply(this, arguments);
        };
      }
      function p(t, e, n) {
        var r, i = e.prototype;
        r = t.prototype = Object.create(i), r.constructor = t, r._super = i, n && _t(r, n);
      }
      function d(t, e) {
        return function() {
          return t.apply(e, arguments);
        };
      }
      function h(t, e) {
        return typeof t == mt ? t.apply(e ? e[0] || s : s, e) : t;
      }
      function _(t, e) {
        return t === s ? e : t;
      }
      function v(t, e, n) {
        l(b(e), function(e) {
          t.addEventListener(e, n, !1);
        });
      }
      function y(t, e, n) {
        l(b(e), function(e) {
          t.removeEventListener(e, n, !1);
        });
      }
      function m(t, e) {
        for (;t;) {
          if (t == e) {
            return !0;
          }
          t = t.parentNode;
        }
        return !1;
      }
      function g(t, e) {
        return t.indexOf(e) > -1;
      }
      function b(t) {
        return t.trim().split(/\s+/g);
      }
      function x(t, e, n) {
        if (t.indexOf && !n) {
          return t.indexOf(e);
        }
        for (var r = 0;r < t.length;) {
          if (n && t[r][n] == e || !n && t[r] === e) {
            return r;
          }
          r++;
        }
        return -1;
      }
      function T(t) {
        return Array.prototype.slice.call(t, 0);
      }
      function E(t, e, n) {
        for (var r = [], i = [], o = 0;o < t.length;) {
          var a = e ? t[o][e] : t[o];
          x(i, a) < 0 && r.push(t[o]), i[o] = a, o++;
        }
        return n && (r = e ? r.sort(function(t, n) {
          return t[e] > n[e];
        }) : r.sort()), r;
      }
      function w(t, e) {
        for (var n, r, i = e[0].toUpperCase() + e.slice(1), o = 0;o < vt.length;) {
          if (n = vt[o], r = n ? n + i : e, r in t) {
            return r;
          }
          o++;
        }
        return s;
      }
      function P() {
        return wt++;
      }
      function M(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || i;
      }
      function S(t, e) {
        var n = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
          h(t.options.enable, [t]) && n.handler(e);
        }, this.init();
      }
      function O(t) {
        var e, n = t.options.inputClass;
        return new (e = n ? n : St ? X : Ot ? H : Mt ? Z : Y)(t, C);
      }
      function C(t, e, n) {
        var r = n.pointers.length, i = n.changedPointers.length, o = e & It && r - i === 0, a = e & (Rt | Dt) && r - i === 0;
        n.isFirst = !!o, n.isFinal = !!a, o && (t.session = {}), n.eventType = e, k(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n;
      }
      function k(t, e) {
        var n = t.session, r = e.pointers, i = r.length;
        n.firstInput || (n.firstInput = A(e)), i > 1 && !n.firstMultiple ? n.firstMultiple = A(e) : 1 === i && (n.firstMultiple = !1);
        var o = n.firstInput, a = n.firstMultiple, s = a ? a.center : o.center, u = e.center = I(r);
        e.timeStamp = xt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = F(s, u), e.distance = D(s, u), N(n, e), e.offsetDirection = R(e.deltaX, e.deltaY);
        var c = L(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = bt(c.x) > bt(c.y) ? c.x : c.y, e.scale = a ? U(a.pointers, r) : 1, e.rotation = a ? z(a.pointers, r) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, j(n, e);
        var l = t.element;
        m(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l;
      }
      function N(t, e) {
        var n = e.center, r = t.offsetDelta || {}, i = t.prevDelta || {}, o = t.prevInput || {};
        e.eventType !== It && o.eventType !== Rt || (i = t.prevDelta = {x:o.deltaX || 0, y:o.deltaY || 0}, r = t.offsetDelta = {x:n.x, y:n.y}), e.deltaX = i.x + (n.x - r.x), e.deltaY = i.y + (n.y - r.y);
      }
      function j(t, e) {
        var n, r, i, o, a = t.lastInterval || e, u = e.timeStamp - a.timeStamp;
        if (e.eventType != Dt && (u > At || a.velocity === s)) {
          var c = e.deltaX - a.deltaX, l = e.deltaY - a.deltaY, f = L(u, c, l);
          r = f.x, i = f.y, n = bt(f.x) > bt(f.y) ? f.x : f.y, o = R(c, l), t.lastInterval = e;
        } else {
          n = a.velocity, r = a.velocityX, i = a.velocityY, o = a.direction;
        }
        e.velocity = n, e.velocityX = r, e.velocityY = i, e.direction = o;
      }
      function A(t) {
        for (var e = [], n = 0;n < t.pointers.length;) {
          e[n] = {clientX:gt(t.pointers[n].clientX), clientY:gt(t.pointers[n].clientY)}, n++;
        }
        return {timeStamp:xt(), pointers:e, center:I(e), deltaX:t.deltaX, deltaY:t.deltaY};
      }
      function I(t) {
        var e = t.length;
        if (1 === e) {
          return {x:gt(t[0].clientX), y:gt(t[0].clientY)};
        }
        for (var n = 0, r = 0, i = 0;i < e;) {
          n += t[i].clientX, r += t[i].clientY, i++;
        }
        return {x:gt(n / e), y:gt(r / e)};
      }
      function L(t, e, n) {
        return {x:e / t || 0, y:n / t || 0};
      }
      function R(t, e) {
        return t === e ? Ft : bt(t) >= bt(e) ? t < 0 ? zt : Ut : e < 0 ? Yt : Xt;
      }
      function D(t, e, n) {
        n || (n = Bt);
        var r = e[n[0]] - t[n[0]], i = e[n[1]] - t[n[1]];
        return Math.sqrt(r * r + i * i);
      }
      function F(t, e, n) {
        n || (n = Bt);
        var r = e[n[0]] - t[n[0]], i = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(i, r) / Math.PI;
      }
      function z(t, e) {
        return F(e[1], e[0], Zt) + F(t[1], t[0], Zt);
      }
      function U(t, e) {
        return D(e[0], e[1], Zt) / D(t[0], t[1], Zt);
      }
      function Y() {
        this.evEl = Gt, this.evWin = Jt, this.pressed = !1, S.apply(this, arguments);
      }
      function X() {
        this.evEl = $t, this.evWin = te, S.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
      }
      function V() {
        this.evTarget = ne, this.evWin = re, this.started = !1, S.apply(this, arguments);
      }
      function W(t, e) {
        var n = T(t.touches), r = T(t.changedTouches);
        return e & (Rt | Dt) && (n = E(n.concat(r), "identifier", !0)), [n, r];
      }
      function H() {
        this.evTarget = oe, this.targetIds = {}, S.apply(this, arguments);
      }
      function B(t, e) {
        var n = T(t.touches), r = this.targetIds;
        if (e & (It | Lt) && 1 === n.length) {
          return r[n[0].identifier] = !0, [n, n];
        }
        var i, o, a = T(t.changedTouches), s = [], u = this.target;
        if (o = n.filter(function(t) {
          return m(t.target, u);
        }), e === It) {
          for (i = 0;i < o.length;) {
            r[o[i].identifier] = !0, i++;
          }
        }
        for (i = 0;i < a.length;) {
          r[a[i].identifier] && s.push(a[i]), e & (Rt | Dt) && delete r[a[i].identifier], i++;
        }
        return s.length ? [E(o.concat(s), "identifier", !0), s] : void 0;
      }
      function Z() {
        S.apply(this, arguments);
        var t = d(this.handler, this);
        this.touch = new H(this.manager, t), this.mouse = new Y(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
      }
      function q(t, e) {
        t & It ? (this.primaryTouch = e.changedPointers[0].identifier, G.call(this, e)) : t & (Rt | Dt) && G.call(this, e);
      }
      function G(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
          var n = {x:e.clientX, y:e.clientY};
          this.lastTouches.push(n);
          var r = this.lastTouches, i = function() {
            var t = r.indexOf(n);
            t > -1 && r.splice(t, 1);
          };
          setTimeout(i, ae);
        }
      }
      function J(t) {
        for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, r = 0;r < this.lastTouches.length;r++) {
          var i = this.lastTouches[r], o = Math.abs(e - i.x), a = Math.abs(n - i.y);
          if (o <= se && a <= se) {
            return !0;
          }
        }
        return !1;
      }
      function K(t, e) {
        this.manager = t, this.set(e);
      }
      function Q(t) {
        if (g(t, de)) {
          return de;
        }
        var e = g(t, he), n = g(t, _e);
        return e && n ? de : e || n ? e ? he : _e : g(t, pe) ? pe : fe;
      }
      function $() {
        if (!ce) {
          return !1;
        }
        var t = {}, e = i.CSS && i.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
          t[n] = !e || i.CSS.supports("touch-action", n);
        }), t;
      }
      function tt(t) {
        this.options = _t({}, this.defaults, t || {}), this.id = P(), this.manager = null, this.options.enable = _(this.options.enable, !0), this.state = ye, this.simultaneous = {}, this.requireFail = [];
      }
      function et(t) {
        return t & Te ? "cancel" : t & be ? "end" : t & ge ? "move" : t & me ? "start" : "";
      }
      function nt(t) {
        return t == Xt ? "down" : t == Yt ? "up" : t == zt ? "left" : t == Ut ? "right" : "";
      }
      function rt(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t;
      }
      function it() {
        tt.apply(this, arguments);
      }
      function ot() {
        it.apply(this, arguments), this.pX = null, this.pY = null;
      }
      function at() {
        it.apply(this, arguments);
      }
      function st() {
        tt.apply(this, arguments), this._timer = null, this._input = null;
      }
      function ut() {
        it.apply(this, arguments);
      }
      function ct() {
        it.apply(this, arguments);
      }
      function lt() {
        tt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
      }
      function ft(t, e) {
        return e = e || {}, e.recognizers = _(e.recognizers, ft.defaults.preset), new pt(t, e);
      }
      function pt(t, e) {
        this.options = _t({}, ft.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = O(this), this.touchAction = new K(this, this.options.touchAction), dt(this, !0), l(this.options.recognizers, function(t) {
          var e = this.add(new t[0](t[1]));
          t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
        }, this);
      }
      function dt(t, e) {
        var n = t.element;
        if (n.style) {
          var r;
          l(t.options.cssProps, function(i, o) {
            r = w(n.style, o), e ? (t.oldCssProps[r] = n.style[r], n.style[r] = i) : n.style[r] = t.oldCssProps[r] || "";
          }), e || (t.oldCssProps = {});
        }
      }
      function ht(t, e) {
        var n = o.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n);
      }
      var _t, vt = ["", "webkit", "Moz", "MS", "ms", "o"], yt = o.createElement("div"), mt = "function", gt = Math.round, bt = Math.abs, xt = Date.now;
      _t = "function" != typeof Object.assign ? function(t) {
        if (t === s || null === t) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        for (var e = Object(t), n = 1;n < arguments.length;n++) {
          var r = arguments[n];
          if (r !== s && null !== r) {
            for (var i in r) {
              r.hasOwnProperty(i) && (e[i] = r[i]);
            }
          }
        }
        return e;
      } : Object.assign;
      var Tt = f(function(t, e, n) {
        for (var r = Object.keys(e), i = 0;i < r.length;) {
          (!n || n && t[r[i]] === s) && (t[r[i]] = e[r[i]]), i++;
        }
        return t;
      }, "extend", "Use `assign`."), Et = f(function(t, e) {
        return Tt(t, e, !0);
      }, "merge", "Use `assign`."), wt = 1, Pt = /mobile|tablet|ip(ad|hone|od)|android/i, Mt = "ontouchstart" in i, St = w(i, "PointerEvent") !== s, Ot = Mt && Pt.test(navigator.userAgent), Ct = "touch", kt = "pen", Nt = "mouse", jt = "kinect", At = 25, It = 1, Lt = 2, Rt = 4, Dt = 8, Ft = 1, zt = 2, Ut = 4, Yt = 8, Xt = 16, Vt = zt | Ut, Wt = Yt | Xt, Ht = Vt | Wt, Bt = ["x", "y"], Zt = ["clientX", "clientY"];
      S.prototype = {handler:function() {
      }, init:function() {
        this.evEl && v(this.element, this.evEl, this.domHandler), this.evTarget && v(this.target, this.evTarget, this.domHandler), this.evWin && v(M(this.element), this.evWin, this.domHandler);
      }, destroy:function() {
        this.evEl && y(this.element, this.evEl, this.domHandler), this.evTarget && y(this.target, this.evTarget, this.domHandler), this.evWin && y(M(this.element), this.evWin, this.domHandler);
      }};
      var qt = {mousedown:It, mousemove:Lt, mouseup:Rt}, Gt = "mousedown", Jt = "mousemove mouseup";
      p(Y, S, {handler:function(t) {
        var e = qt[t.type];
        e & It && 0 === t.button && (this.pressed = !0), e & Lt && 1 !== t.which && (e = Rt), this.pressed && (e & Rt && (this.pressed = !1), this.callback(this.manager, e, {pointers:[t], changedPointers:[t], pointerType:Nt, srcEvent:t}));
      }});
      var Kt = {pointerdown:It, pointermove:Lt, pointerup:Rt, pointercancel:Dt, pointerout:Dt}, Qt = {2:Ct, 3:kt, 4:Nt, 5:jt}, $t = "pointerdown", te = "pointermove pointerup pointercancel";
      i.MSPointerEvent && !i.PointerEvent && ($t = "MSPointerDown", te = "MSPointerMove MSPointerUp MSPointerCancel"), p(X, S, {handler:function(t) {
        var e = this.store, n = !1, r = t.type.toLowerCase().replace("ms", ""), i = Kt[r], o = Qt[t.pointerType] || t.pointerType, a = o == Ct, s = x(e, t.pointerId, "pointerId");
        i & It && (0 === t.button || a) ? s < 0 && (e.push(t), s = e.length - 1) : i & (Rt | Dt) && (n = !0), s < 0 || (e[s] = t, this.callback(this.manager, i, {pointers:e, changedPointers:[t], pointerType:o, srcEvent:t}), n && e.splice(s, 1));
      }});
      var ee = {touchstart:It, touchmove:Lt, touchend:Rt, touchcancel:Dt}, ne = "touchstart", re = "touchstart touchmove touchend touchcancel";
      p(V, S, {handler:function(t) {
        var e = ee[t.type];
        if (e === It && (this.started = !0), this.started) {
          var n = W.call(this, t, e);
          e & (Rt | Dt) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {pointers:n[0], changedPointers:n[1], pointerType:Ct, srcEvent:t});
        }
      }});
      var ie = {touchstart:It, touchmove:Lt, touchend:Rt, touchcancel:Dt}, oe = "touchstart touchmove touchend touchcancel";
      p(H, S, {handler:function(t) {
        var e = ie[t.type], n = B.call(this, t, e);
        n && this.callback(this.manager, e, {pointers:n[0], changedPointers:n[1], pointerType:Ct, srcEvent:t});
      }});
      var ae = 2500, se = 25;
      p(Z, S, {handler:function(t, e, n) {
        var r = n.pointerType == Ct, i = n.pointerType == Nt;
        if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
          if (r) {
            q.call(this, e, n);
          } else {
            if (i && J.call(this, n)) {
              return;
            }
          }
          this.callback(t, e, n);
        }
      }, destroy:function() {
        this.touch.destroy(), this.mouse.destroy();
      }});
      var ue = w(yt.style, "touchAction"), ce = ue !== s, le = "compute", fe = "auto", pe = "manipulation", de = "none", he = "pan-x", _e = "pan-y", ve = $();
      K.prototype = {set:function(t) {
        t == le && (t = this.compute()), ce && this.manager.element.style && ve[t] && (this.manager.element.style[ue] = t), this.actions = t.toLowerCase().trim();
      }, update:function() {
        this.set(this.manager.options.touchAction);
      }, compute:function() {
        var t = [];
        return l(this.manager.recognizers, function(e) {
          h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
        }), Q(t.join(" "));
      }, preventDefaults:function(t) {
        var e = t.srcEvent, n = t.offsetDirection;
        if (this.manager.session.prevented) {
          return void e.preventDefault();
        }
        var r = this.actions, i = g(r, de) && !ve[de], o = g(r, _e) && !ve[_e], a = g(r, he) && !ve[he];
        if (i) {
          var s = 1 === t.pointers.length, u = t.distance < 2, c = t.deltaTime < 250;
          if (s && u && c) {
            return;
          }
        }
        return a && o ? void 0 : i || o && n & Vt || a && n & Wt ? this.preventSrc(e) : void 0;
      }, preventSrc:function(t) {
        this.manager.session.prevented = !0, t.preventDefault();
      }};
      var ye = 1, me = 2, ge = 4, be = 8, xe = be, Te = 16, Ee = 32;
      tt.prototype = {defaults:{}, set:function(t) {
        return _t(this.options, t), this.manager && this.manager.touchAction.update(), this;
      }, recognizeWith:function(t) {
        if (c(t, "recognizeWith", this)) {
          return this;
        }
        var e = this.simultaneous;
        return t = rt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
      }, dropRecognizeWith:function(t) {
        return c(t, "dropRecognizeWith", this) ? this : (t = rt(t, this), delete this.simultaneous[t.id], this);
      }, requireFailure:function(t) {
        if (c(t, "requireFailure", this)) {
          return this;
        }
        var e = this.requireFail;
        return t = rt(t, this), x(e, t) === -1 && (e.push(t), t.requireFailure(this)), this;
      }, dropRequireFailure:function(t) {
        if (c(t, "dropRequireFailure", this)) {
          return this;
        }
        t = rt(t, this);
        var e = x(this.requireFail, t);
        return e > -1 && this.requireFail.splice(e, 1), this;
      }, hasRequireFailures:function() {
        return this.requireFail.length > 0;
      }, canRecognizeWith:function(t) {
        return !!this.simultaneous[t.id];
      }, emit:function(t) {
        function e(e) {
          n.manager.emit(e, t);
        }
        var n = this, r = this.state;
        r < be && e(n.options.event + et(r)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), r >= be && e(n.options.event + et(r));
      }, tryEmit:function(t) {
        return this.canEmit() ? this.emit(t) : void(this.state = Ee);
      }, canEmit:function() {
        for (var t = 0;t < this.requireFail.length;) {
          if (!(this.requireFail[t].state & (Ee | ye))) {
            return !1;
          }
          t++;
        }
        return !0;
      }, recognize:function(t) {
        var e = _t({}, t);
        return h(this.options.enable, [this, e]) ? (this.state & (xe | Te | Ee) && (this.state = ye), this.state = this.process(e), void(this.state & (me | ge | be | Te) && this.tryEmit(e))) : (this.reset(), void(this.state = Ee));
      }, process:function(t) {
      }, getTouchAction:function() {
      }, reset:function() {
      }}, p(it, tt, {defaults:{pointers:1}, attrTest:function(t) {
        var e = this.options.pointers;
        return 0 === e || t.pointers.length === e;
      }, process:function(t) {
        var e = this.state, n = t.eventType, r = e & (me | ge), i = this.attrTest(t);
        return r && (n & Dt || !i) ? e | Te : r || i ? n & Rt ? e | be : e & me ? e | ge : me : Ee;
      }}), p(ot, it, {defaults:{event:"pan", threshold:10, pointers:1, direction:Ht}, getTouchAction:function() {
        var t = this.options.direction, e = [];
        return t & Vt && e.push(_e), t & Wt && e.push(he), e;
      }, directionTest:function(t) {
        var e = this.options, n = !0, r = t.distance, i = t.direction, o = t.deltaX, a = t.deltaY;
        return i & e.direction || (e.direction & Vt ? (i = 0 === o ? Ft : o < 0 ? zt : Ut, n = o != this.pX, r = Math.abs(t.deltaX)) : (i = 0 === a ? Ft : a < 0 ? Yt : Xt, n = a != this.pY, r = Math.abs(t.deltaY))), t.direction = i, n && r > e.threshold && i & e.direction;
      }, attrTest:function(t) {
        return it.prototype.attrTest.call(this, t) && (this.state & me || !(this.state & me) && this.directionTest(t));
      }, emit:function(t) {
        this.pX = t.deltaX, this.pY = t.deltaY;
        var e = nt(t.direction);
        e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
      }}), p(at, it, {defaults:{event:"pinch", threshold:0, pointers:2}, getTouchAction:function() {
        return [de];
      }, attrTest:function(t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & me);
      }, emit:function(t) {
        if (1 !== t.scale) {
          var e = t.scale < 1 ? "in" : "out";
          t.additionalEvent = this.options.event + e;
        }
        this._super.emit.call(this, t);
      }}), p(st, tt, {defaults:{event:"press", pointers:1, time:251, threshold:9}, getTouchAction:function() {
        return [fe];
      }, process:function(t) {
        var e = this.options, n = t.pointers.length === e.pointers, r = t.distance < e.threshold, i = t.deltaTime > e.time;
        if (this._input = t, !r || !n || t.eventType & (Rt | Dt) && !i) {
          this.reset();
        } else {
          if (t.eventType & It) {
            this.reset(), this._timer = u(function() {
              this.state = xe, this.tryEmit();
            }, e.time, this);
          } else {
            if (t.eventType & Rt) {
              return xe;
            }
          }
        }
        return Ee;
      }, reset:function() {
        clearTimeout(this._timer);
      }, emit:function(t) {
        this.state === xe && (t && t.eventType & Rt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = xt(), this.manager.emit(this.options.event, this._input)));
      }}), p(ut, it, {defaults:{event:"rotate", threshold:0, pointers:2}, getTouchAction:function() {
        return [de];
      }, attrTest:function(t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & me);
      }}), p(ct, it, {defaults:{event:"swipe", threshold:10, velocity:.3, direction:Vt | Wt, pointers:1}, getTouchAction:function() {
        return ot.prototype.getTouchAction.call(this);
      }, attrTest:function(t) {
        var e, n = this.options.direction;
        return n & (Vt | Wt) ? e = t.overallVelocity : n & Vt ? e = t.overallVelocityX : n & Wt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && bt(e) > this.options.velocity && t.eventType & Rt;
      }, emit:function(t) {
        var e = nt(t.offsetDirection);
        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
      }}), p(lt, tt, {defaults:{event:"tap", pointers:1, taps:1, interval:300, time:250, threshold:9, posThreshold:10}, getTouchAction:function() {
        return [pe];
      }, process:function(t) {
        var e = this.options, n = t.pointers.length === e.pointers, r = t.distance < e.threshold, i = t.deltaTime < e.time;
        if (this.reset(), t.eventType & It && 0 === this.count) {
          return this.failTimeout();
        }
        if (r && i && n) {
          if (t.eventType != Rt) {
            return this.failTimeout();
          }
          var o = !this.pTime || t.timeStamp - this.pTime < e.interval, a = !this.pCenter || D(this.pCenter, t.center) < e.posThreshold;
          this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
          var s = this.count % e.taps;
          if (0 === s) {
            return this.hasRequireFailures() ? (this._timer = u(function() {
              this.state = xe, this.tryEmit();
            }, e.interval, this), me) : xe;
          }
        }
        return Ee;
      }, failTimeout:function() {
        return this._timer = u(function() {
          this.state = Ee;
        }, this.options.interval, this), Ee;
      }, reset:function() {
        clearTimeout(this._timer);
      }, emit:function() {
        this.state == xe && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }}), ft.VERSION = "2.0.7", ft.defaults = {domEvents:!1, touchAction:le, enable:!0, inputTarget:null, inputClass:null, preset:[[ut, {enable:!1}], [at, {enable:!1}, ["rotate"]], [ct, {direction:Vt}], [ot, {direction:Vt}, ["swipe"]], [lt], [lt, {event:"doubletap", taps:2}, ["tap"]], [st]], cssProps:{userSelect:"none", touchSelect:"none", touchCallout:"none", contentZooming:"none", userDrag:"none", tapHighlightColor:"rgba(0,0,0,0)"}};
      var we = 1, Pe = 2;
      pt.prototype = {set:function(t) {
        return _t(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
      }, stop:function(t) {
        this.session.stopped = t ? Pe : we;
      }, recognize:function(t) {
        var e = this.session;
        if (!e.stopped) {
          this.touchAction.preventDefaults(t);
          var n, r = this.recognizers, i = e.curRecognizer;
          (!i || i && i.state & xe) && (i = e.curRecognizer = null);
          for (var o = 0;o < r.length;) {
            n = r[o], e.stopped === Pe || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(t), !i && n.state & (me | ge | be) && (i = e.curRecognizer = n), o++;
          }
        }
      }, get:function(t) {
        if (t instanceof tt) {
          return t;
        }
        for (var e = this.recognizers, n = 0;n < e.length;n++) {
          if (e[n].options.event == t) {
            return e[n];
          }
        }
        return null;
      }, add:function(t) {
        if (c(t, "add", this)) {
          return this;
        }
        var e = this.get(t.options.event);
        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
      }, remove:function(t) {
        if (c(t, "remove", this)) {
          return this;
        }
        if (t = this.get(t)) {
          var e = this.recognizers, n = x(e, t);
          n !== -1 && (e.splice(n, 1), this.touchAction.update());
        }
        return this;
      }, on:function(t, e) {
        if (t !== s && e !== s) {
          var n = this.handlers;
          return l(b(t), function(t) {
            n[t] = n[t] || [], n[t].push(e);
          }), this;
        }
      }, off:function(t, e) {
        if (t !== s) {
          var n = this.handlers;
          return l(b(t), function(t) {
            e ? n[t] && n[t].splice(x(n[t], e), 1) : delete n[t];
          }), this;
        }
      }, emit:function(t, e) {
        this.options.domEvents && ht(t, e);
        var n = this.handlers[t] && this.handlers[t].slice();
        if (n && n.length) {
          e.type = t, e.preventDefault = function() {
            e.srcEvent.preventDefault();
          };
          for (var r = 0;r < n.length;) {
            n[r](e), r++;
          }
        }
      }, destroy:function() {
        this.element && dt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }}, _t(ft, {INPUT_START:It, INPUT_MOVE:Lt, INPUT_END:Rt, INPUT_CANCEL:Dt, STATE_POSSIBLE:ye, STATE_BEGAN:me, STATE_CHANGED:ge, STATE_ENDED:be, STATE_RECOGNIZED:xe, STATE_CANCELLED:Te, STATE_FAILED:Ee, DIRECTION_NONE:Ft, DIRECTION_LEFT:zt, DIRECTION_RIGHT:Ut, DIRECTION_UP:Yt, DIRECTION_DOWN:Xt, DIRECTION_HORIZONTAL:Vt, DIRECTION_VERTICAL:Wt, DIRECTION_ALL:Ht, Manager:pt, Input:S, TouchAction:K, TouchInput:H, MouseInput:Y, PointerEventInput:X, TouchMouseInput:Z, SingleTouchInput:V, Recognizer:tt, 
      AttrRecognizer:it, Tap:lt, Pan:ot, Swipe:ct, Pinch:at, Rotate:ut, Press:st, on:v, off:y, each:l, merge:Et, extend:Tt, assign:_t, inherit:p, bindFn:d, prefixed:w});
      var Me = "undefined" != typeof i ? i : "undefined" != typeof self ? self : {};
      Me.Hammer = ft, r = function() {
        return ft;
      }.call(e, n, e, t), !(r !== s && (t.exports = r));
    }(window, document, "Hammer");
  }, function(t, e, n) {
    var r, i, o;
    !function(n) {
      i = [], r = n, o = "function" == typeof r ? r.apply(e, i) : r, !(void 0 !== o && (t.exports = o));
    }(function() {
      var t = null;
      return function e(n, r) {
        function i(t) {
          return t.match(/[^ ]+/g);
        }
        function o(e) {
          if ("hammer.input" !== e.type) {
            if (e.srcEvent._handled || (e.srcEvent._handled = {}), e.srcEvent._handled[e.type]) {
              return;
            }
            e.srcEvent._handled[e.type] = !0;
          }
          var n = !1;
          e.stopPropagation = function() {
            n = !0;
          };
          var r = e.srcEvent.stopPropagation.bind(e.srcEvent);
          "function" == typeof r && (e.srcEvent.stopPropagation = function() {
            r(), e.stopPropagation();
          }), e.firstTarget = t;
          for (var i = t;i && !n;) {
            var o = i.hammer;
            if (o) {
              for (var a, s = 0;s < o.length;s++) {
                if (a = o[s]._handlers[e.type]) {
                  for (var u = 0;u < a.length && !n;u++) {
                    a[u](e);
                  }
                }
              }
            }
            i = i.parentNode;
          }
        }
        var a = r || {preventDefault:!1};
        if (n.Manager) {
          var s = n, u = function(t, n) {
            var r = Object.create(a);
            return n && s.assign(r, n), e(new s(t, r), r);
          };
          return s.assign(u, s), u.Manager = function(t, n) {
            var r = Object.create(a);
            return n && s.assign(r, n), e(new s.Manager(t, r), r);
          }, u;
        }
        var c = Object.create(n), l = n.element;
        return l.hammer || (l.hammer = []), l.hammer.push(c), n.on("hammer.input", function(e) {
          a.preventDefault !== !0 && a.preventDefault !== e.pointerType || e.preventDefault(), e.isFirst && (t = e.target);
        }), c._handlers = {}, c.on = function(t, e) {
          return i(t).forEach(function(t) {
            var r = c._handlers[t];
            r || (c._handlers[t] = r = [], n.on(t, o)), r.push(e);
          }), c;
        }, c.off = function(t, e) {
          return i(t).forEach(function(t) {
            var r = c._handlers[t];
            r && (r = e ? r.filter(function(t) {
              return t !== e;
            }) : [], r.length > 0 ? c._handlers[t] = r : (n.off(t, o), delete c._handlers[t]));
          }), c;
        }, c.emit = function(e, r) {
          t = t || r.target, n.emit(e, r);
        }, c.destroy = function() {
          var t = n.element.hammer, e = t.indexOf(c);
          e !== -1 && t.splice(e, 1), t.length || delete n.element.hammer, c._handlers = {}, n.destroy();
        }, c;
      };
    });
  }, function(t, e) {
    function n(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length);e < t.length;e++) {
          n[e] = t[e];
        }
        return n;
      }
      return Array.from(t);
    }
    function r() {
      if (T) {
        for (var t, e = arguments.length, n = Array(e), r = 0;r < e;r++) {
          n[r] = arguments[r];
        }
        console.group || n.unshift("%credux-undo", "font-style: italic"), (t = console).log.apply(t, n);
      }
    }
    function i(t, e) {
      if (T) {
        var n = ["action", t.type];
        if (console.group) {
          var i;
          n.unshift("%credux-undo", "font-style: italic"), (i = console).groupCollapsed.apply(i, n), console.log("received", {state:e, action:t});
        } else {
          r.apply(void 0, n);
        }
      }
    }
    function o() {
      if (T) {
        return console.groupEnd && console.groupEnd();
      }
    }
    function a(t) {
      var e = t.past, n = t.future;
      return e.length + 1 + n.length;
    }
    function s(t, e, i) {
      r("insert", {state:e, history:t, free:i - a(t)});
      var o = t.past, s = t.present, u = i && a(t) >= i;
      return void 0 === s ? {past:[], present:e, future:[]} : {past:[].concat(n(o.slice(u ? 1 : 0)), [s]), present:e, future:[]};
    }
    function u(t) {
      r("undo", {history:t});
      var e = t.past, i = t.present, o = t.future;
      return e.length <= 0 ? t : {past:e.slice(0, e.length - 1), present:e[e.length - 1], future:[i].concat(n(o))};
    }
    function c(t) {
      r("redo", {history:t});
      var e = t.past, i = t.present, o = t.future;
      return o.length <= 0 ? t : {future:o.slice(1, o.length), present:o[0], past:[].concat(n(e), [i])};
    }
    function l(t, e) {
      if (0 === e) {
        return c(t);
      }
      var n = t.past, r = t.present, i = t.future;
      return {future:i.slice(e + 1), present:i[e], past:n.concat([r]).concat(i.slice(0, e))};
    }
    function f(t, e) {
      if (e === t.past.length - 1) {
        return u(t);
      }
      var n = t.past, r = t.present, i = t.future;
      return {future:n.slice(e + 1).concat([r]).concat(i), present:n[e], past:n.slice(0, e)};
    }
    function p(t) {
      return x({}, t, {history:t});
    }
    function d(t, e) {
      return p(x({}, t, e));
    }
    function h(t) {
      return {past:[], present:t, future:[]};
    }
    function _(t) {
      var e = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
      return Array.isArray(t) ? t : "string" == typeof t ? [t] : e;
    }
    function v(t) {
      var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
      T = e.debug;
      var n = {initialState:e.initialState, initTypes:_(e.initTypes, ["@@redux/INIT", "@@INIT"]), limit:e.limit, filter:e.filter || function() {
        return !0;
      }, undoType:e.undoType || E.UNDO, redoType:e.redoType || E.REDO, jumpToPastType:e.jumpToPastType || E.JUMP_TO_PAST, jumpToFutureType:e.jumpToFutureType || E.JUMP_TO_FUTURE};
      return n.history = e.initialHistory || h(n.initialState), 0 === n.initTypes.length && console.warn("redux-undo: supply at least one action type in initTypes to ensure initial state"), function(e, _) {
        i(_, e);
        var v = void 0;
        switch(_.type) {
          case n.undoType:
            return v = u(e), r("after undo", v), o(), v ? d(e, v) : e;
          case n.redoType:
            return v = c(e), r("after redo", v), o(), v ? d(e, v) : e;
          case n.jumpToPastType:
            return v = f(e, _.index), r("after jumpToPast", v), o(), v ? d(e, v) : e;
          case n.jumpToFutureType:
            return v = l(e, _.index), r("after jumpToFuture", v), o(), v ? d(e, v) : e;
          default:
            if (v = t(e && e.present, _), n.initTypes.some(function(t) {
              return t === _.type;
            })) {
              return r("reset history due to init action"), o(), p(x({}, e, h(v)));
            }
            if (n.filter && "function" == typeof n.filter && !n.filter(_, v, e && e.present)) {
              return r("filter prevented action, not storing it"), o(), p(x({}, e, {present:v}));
            }
            var y = e && void 0 !== e.present ? e : n.history, m = s(y, v, n.limit);
            return r("after insert", {history:m, free:n.limit - a(m)}), o(), p(x({}, e, m));
        }
      };
    }
    function y() {
      return function(t, e, n) {
        return e !== n;
      };
    }
    function m(t) {
      var e = _(t);
      return function(t) {
        return e.indexOf(t.type) >= 0;
      };
    }
    function g(t) {
      return console.error("Deprecation Warning: Please change `ifAction` to `includeAction`"), m(t);
    }
    function b() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0], e = _(t);
      return function(t) {
        return e.indexOf(t.type) < 0;
      };
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var x = Object.assign || function(t) {
      for (var e = 1;e < arguments.length;e++) {
        var n = arguments[e];
        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }
      return t;
    };
    e.parseActions = _, e["default"] = v, e.distinctState = y, e.includeAction = m, e.ifAction = g, e.excludeAction = b;
    var T = void 0, E = e.ActionTypes = {UNDO:"@@redux-undo/UNDO", REDO:"@@redux-undo/REDO", JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE", JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST"};
    e.ActionCreators = {undo:function() {
      return {type:E.UNDO};
    }, redo:function() {
      return {type:E.REDO};
    }, jumpToFuture:function(t) {
      return {type:E.JUMP_TO_FUTURE, index:t};
    }, jumpToPast:function(t) {
      return {type:E.JUMP_TO_PAST, index:t};
    }};
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(48), o = n(119), a = r(o), s = n(150), u = r(s), c = n(159), l = function(t) {
      var e = t.state, n = t.progressLines, r = t.options;
      return (0, i.h)("div", {className:c["curve-editor__right"]}, (0, i.h)(a["default"], {state:e, options:r, progressLines:n}), (0, i.h)(u["default"], {state:e, type:"right", className:c["curve-editor__resize-handle"]}), (0, i.h)(u["default"], {state:e, type:"bottom", className:c["curve-editor__resize-handle"]}));
    };
    e["default"] = l;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(48), _ = n(120), v = (r(_), n(121)), y = r(v), m = n(127), g = r(m), b = n(129), x = r(b), T = n(133), E = r(T), w = n(143), P = (r(w), n(114)), M = r(P), S = n(115), O = r(S), C = n(116), k = r(C);
    n(147);
    var N = n(149), j = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"render", value:function() {
        var t = this.props.state, e = t.points.present.path, n = this._getStyle(t), r = this._renderPoints(t), i = this._renderSegments(t), o = this._renderProgressLines(t), a = this._getCurveHeight();
        return (0, h.h)("div", {className:this._getClassName(), "data-component":"curve"}, (0, h.h)("div", {id:"js-background", className:N.curve__background, style:n.background}, (0, h.h)(g["default"], {styles:n})), o, (0, h.h)("div", {className:N["curve__svg-wrapper"], style:n.transform}, (0, h.h)(x["default"], null), (0, h.h)(x["default"], {type:"right"}), r, (0, h.h)("svg", {height:M["default"].CURVE_SIZE, viewBox:"0 0 100 " + a, preserveAspectRatio:"none", id:"js-svg", "class":N.curve__svg}, 
        (0, h.h)("path", {d:e, stroke:"#000000", "stroke-opacity":"0.35", "stroke-width":"4", "vector-effect":"non-scaling-stroke", transform:"translate(.75,.75)", fill:"none"}), (0, h.h)("g", {id:"js-segments"}, " ", i, " "))));
      }}, {key:"_getClassName", value:function() {
        var t = this.props.state, e = t.controls, n = e.isMinimize ? N["is-minimized"] : "";
        return N.curve + " " + n;
      }}, {key:"_getCurveHeight", value:function() {
        var t = this.props, e = t.state;
        t.options, e.resize;
        return e.controls.isMinimize ? 4.28 * M["default"].CURVE_SIZE : 100;
      }}, {key:"_getStyle", value:function(t) {
        var e = t.resize, n = e.temp_top, r = e.temp_bottom, i = e.temp_right, o = e.panTempY, a = M["default"].CURVE_SIZE - (n + e.top) + (r + e.bottom);
        o += e.panY, n += e.top - o, i += e.right;
        var s = t.controls.isMinimize ? -(n / M["default"].CURVE_SIZE) * (20 / (a / M["default"].CURVE_SIZE)) : -n, u = (M["default"].CURVE_SIZE + Math.max(i, 0)) / M["default"].CURVE_SIZE, c = "width: " + M["default"].CURVE_SIZE * u + "px;", l = "transform: translate(0px, " + s + "px)";
        return {transform:"" + mojs.h.prefix.css + l + "; " + l + ";", background:c, height:a, svgTop:n};
      }}, {key:"_renderPoints", value:function(t) {
        for (var e = t.points.present.points, n = [], r = e.length, i = 0;i < r;i++) {
          n.push((0, h.h)(E["default"], {point:e[i], state:t, index:i, pointsCount:r}));
        }
        return n;
      }}, {key:"_renderSegments", value:function(t) {
        for (var e = t.points.present.segments, n = [], r = 0;r < e.length;r++) {
          var i = e[r];
          n.push((0, h.h)("path", {d:i.segmentString, "data-index":i.index, stroke:"white", fill:"none", "stroke-width":"", "vector-effect":"non-scaling-stroke", "class":N["curve__svg-segment"]}));
        }
        return n;
      }}, {key:"_renderProgressLines", value:function(t) {
        for (var e = t.progressLines, n = e.lines, r = [], i = n.length - 1;i >= 0;i--) {
          var o = n[i];
          r.push((0, h.h)(y["default"], o));
        }
        return r;
      }}, {key:"_updateDomProgressLines", value:function() {
        var t = this.props.progressLines;
        t.length = 0;
        for (var e = this.base.querySelectorAll('[data-component\x3d"progress-line"]'), n = 0;n < e.length;n++) {
          t[n] = e[n];
        }
      }}, {key:"componentDidUpdate", value:function() {
        this._updateDomProgressLines();
      }}, {key:"componentWillMount", value:function() {
        this._isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
      }}, {key:"componentDidMount", value:function() {
        var t = this;
        this._updateDomProgressLines();
        var e = this.context.store, n = this.base.querySelector("#js-segments"), r = (0, k["default"])(new O["default"].Manager(n));
        r.add(new O["default"].Tap), r.on("tap", function(n) {
          var r = t.props.state, i = n.srcEvent, o = i.target;
          if ("path" === o.tagName.toLowerCase()) {
            var a = i.offsetX, s = i.offsetY, u = parseInt(o.getAttribute("data-index")) + 1;
            t._isFirefox ? (s *= M["default"].CURVE_PERCENT, a -= 1, s -= 1) : a /= r.resize.scalerX, t._isFirefox, e.dispatch({type:"POINT_ADD", data:{point:{x:a, y:s}, index:u}, isRecord:!0}), e.dispatch({type:"POINT_SELECT", data:{index:u, type:"straight"}}), n.stopPropagation();
          }
        });
        var i = (this.base.querySelector("#js-svg"), (0, k["default"])(new O["default"].Manager(this.base)));
        i.add(new O["default"].Tap), i.add(new O["default"].Pan), i.on("tap", function(t) {
          e.dispatch({type:"POINT_DESELECT_ALL"});
        }).on("pan", function(t) {
          e.dispatch({type:"EDITOR_PAN", data:t.deltaY});
        }).on("panend", function(t) {
          e.dispatch({type:"EDITOR_PAN_END", data:t.deltaY});
        });
      }}]), e;
    }(h.Component);
    e["default"] = j;
  }, function(t, e) {
    Object.defineProperty(e, "__esModule", {value:!0}), e["default"] = function(t, e) {
      return mojs.h.getRadialPoint({angle:t, radius:e, center:{x:0, y:0}});
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(48);
    n(122);
    var _ = n(126), v = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"render", value:function() {
        var t = this.props, e = {backgroundColor:t.color};
        return (0, h.h)("div", {className:_["progress-line"], style:e, "data-component":"progress-line"});
      }}]), e;
    }(h.Component);
    e["default"] = v;
  }, function(t, e, n) {
    var r = n(123);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._progress-line_1j4pp_3{position:absolute;top:0;bottom:0;width:1px;margin-left:-1.5px}", ""]);
  }, function(t, e) {
    t.exports = function() {
      var t = [];
      return t.toString = function() {
        for (var t = [], e = 0;e < this.length;e++) {
          var n = this[e];
          n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1]);
        }
        return t.join("");
      }, t.i = function(e, n) {
        "string" == typeof e && (e = [[null, e, ""]]);
        for (var r = {}, i = 0;i < this.length;i++) {
          var o = this[i][0];
          "number" == typeof o && (r[o] = !0);
        }
        for (i = 0;i < e.length;i++) {
          var a = e[i];
          "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
        }
      }, t;
    };
  }, function(t, e, n) {
    function r(t, e) {
      for (var n = 0;n < t.length;n++) {
        var r = t[n], i = d[r.id];
        if (i) {
          i.refs++;
          for (var o = 0;o < i.parts.length;o++) {
            i.parts[o](r.parts[o]);
          }
          for (;o < r.parts.length;o++) {
            i.parts.push(c(r.parts[o], e));
          }
        } else {
          for (var a = [], o = 0;o < r.parts.length;o++) {
            a.push(c(r.parts[o], e));
          }
          d[r.id] = {id:r.id, refs:1, parts:a};
        }
      }
    }
    function i(t) {
      for (var e = [], n = {}, r = 0;r < t.length;r++) {
        var i = t[r], o = i[0], a = i[1], s = i[2], u = i[3], c = {css:a, media:s, sourceMap:u};
        n[o] ? n[o].parts.push(c) : e.push(n[o] = {id:o, parts:[c]});
      }
      return e;
    }
    function o(t, e) {
      var n = v(), r = g[g.length - 1];
      if ("top" === t.insertAt) {
        r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), g.push(e);
      } else {
        if ("bottom" !== t.insertAt) {
          throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        }
        n.appendChild(e);
      }
    }
    function a(t) {
      t.parentNode.removeChild(t);
      var e = g.indexOf(t);
      e >= 0 && g.splice(e, 1);
    }
    function s(t) {
      var e = document.createElement("style");
      return e.type = "text/css", o(t, e), e;
    }
    function u(t) {
      var e = document.createElement("link");
      return e.rel = "stylesheet", o(t, e), e;
    }
    function c(t, e) {
      var n, r, i;
      if (e.singleton) {
        var o = m++;
        n = y || (y = s(e)), r = l.bind(null, n, o, !1), i = l.bind(null, n, o, !0);
      } else {
        t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(e), r = p.bind(null, n), i = function() {
          a(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = s(e), r = f.bind(null, n), i = function() {
          a(n);
        });
      }
      return r(t), function(e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) {
            return;
          }
          r(t = e);
        } else {
          i();
        }
      };
    }
    function l(t, e, n, r) {
      var i = n ? "" : r.css;
      if (t.styleSheet) {
        t.styleSheet.cssText = b(e, i);
      } else {
        var o = document.createTextNode(i), a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o);
      }
    }
    function f(t, e) {
      var n = e.css, r = e.media;
      if (r && t.setAttribute("media", r), t.styleSheet) {
        t.styleSheet.cssText = n;
      } else {
        for (;t.firstChild;) {
          t.removeChild(t.firstChild);
        }
        t.appendChild(document.createTextNode(n));
      }
    }
    function p(t, e) {
      var n = e.css, r = e.sourceMap;
      r && (n += "\n/*# sourceMappingURL\x3ddata:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
      var i = new Blob([n], {type:"text/css"}), o = t.href;
      t.href = URL.createObjectURL(i), o && URL.revokeObjectURL(o);
    }
    var d = {}, h = function(t) {
      var e;
      return function() {
        return "undefined" == typeof e && (e = t.apply(this, arguments)), e;
      };
    }, _ = h(function() {
      return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }), v = h(function() {
      return document.head || document.getElementsByTagName("head")[0];
    }), y = null, m = 0, g = [];
    t.exports = function(t, e) {
      e = e || {}, "undefined" == typeof e.singleton && (e.singleton = _()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
      var n = i(t);
      return r(n, e), function(t) {
        for (var o = [], a = 0;a < n.length;a++) {
          var s = n[a], u = d[s.id];
          u.refs--, o.push(u);
        }
        if (t) {
          var c = i(t);
          r(c, e);
        }
        for (var a = 0;a < o.length;a++) {
          var u = o[a];
          if (0 === u.refs) {
            for (var l = 0;l < u.parts.length;l++) {
              u.parts[l]();
            }
            delete d[u.id];
          }
        }
      };
    };
    var b = function() {
      var t = [];
      return function(e, n) {
        return t[e] = n, t.filter(Boolean).join("\n");
      };
    }();
  }, function(t, e) {
    t.exports = {"progress-line":"_progress-line_1j4pp_3"};
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(48), _ = n(128), v = r(_), y = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"componentWillMount", value:function() {
        this._hash = (0, v["default"])(Math.random() + ""), this._patternName = "rect-paper-" + this._hash;
      }}, {key:"render", value:function() {
        var t = this.props.styles;
        return (0, h.h)("svg", {preserveAspectRatio:"none", height:t.height + "px", viewBox:"0 0 " + (350 + 1E-4 * Math.random()) + " " + t.height}, (0, h.h)("pattern", {id:this._patternName, x:"0", y:"" + -t.svgTop, height:"350", width:"350", patternUnits:"userSpaceOnUse"}, (0, h.h)("g", {id:"Group", transform:"translate(-1.000000, -1.000000)", stroke:"#FFFFFF", "stroke-width":"1", fill:"none", "vector-effect":"non-scaling-stroke"}, (0, h.h)("g", {opacity:"0.25"}, (0, h.h)("path", {d:"M333.497821,350.501088 L333.497821,0.501088302"}), 
        (0, h.h)("path", {d:"M315.997821,350.501088 L315.997821,0.501088302"}), (0, h.h)("path", {d:"M298.497821,350.501088 L298.497821,0.501088302"}), (0, h.h)("path", {d:"M280.997821,350.501088 L280.997821,0.501088302"}), (0, h.h)("path", {d:"M245.997821,350.501088 L245.997821,0.501088302"}), (0, h.h)("path", {d:"M228.497821,350.501088 L228.497821,0.501088302"}), (0, h.h)("path", {d:"M210.997821,350.501088 L210.997821,0.501088302"}), (0, h.h)("path", {d:"M193.497821,350.501088 L193.497821,0.501088302"}), 
        (0, h.h)("path", {d:"M159.372821,350.501088 L159.372821,0.501088302"}), (0, h.h)("path", {d:"M141.872821,350.501088 L141.872821,0.501088302"}), (0, h.h)("path", {d:"M124.372821,350.501088 L124.372821,0.501088302"}), (0, h.h)("path", {d:"M106.872821,350.501088 L106.872821,0.501088302"}), (0, h.h)("path", {d:"M71.8728207,350.501088 L71.8728207,0.501088302"}), (0, h.h)("path", {d:"M54.3728207,350.501088 L54.3728207,0.501088302"}), (0, h.h)("path", {d:"M36.8728207,350.501088 L36.8728207,0.501088302"}), 
        (0, h.h)("path", {d:"M19.3728207,350.501088 L19.3728207,0.501088302"}), (0, h.h)("path", {d:"M351.001088,19.0021793 L1.0010883,19.0021793"}), (0, h.h)("path", {d:"M351.001088,36.5021793 L1.0010883,36.5021793"}), (0, h.h)("path", {d:"M351.001088,54.0021793 L1.0010883,54.0021793"}), (0, h.h)("path", {d:"M351.001088,71.5021793 L1.0010883,71.5021793"}), (0, h.h)("path", {d:"M351.001088,106.502179 L1.0010883,106.502179"}), (0, h.h)("path", {d:"M351.001088,124.002179 L1.0010883,124.002179"}), (0, 
        h.h)("path", {d:"M351.001088,141.502179 L1.0010883,141.502179"}), (0, h.h)("path", {d:"M351.001088,159.002179 L1.0010883,159.002179"}), (0, h.h)("path", {d:"M351.001088,193.127179 L1.0010883,193.127179"}), (0, h.h)("path", {d:"M351.001088,210.627179 L1.0010883,210.627179"}), (0, h.h)("path", {d:"M351.001088,228.127179 L1.0010883,228.127179"}), (0, h.h)("path", {d:"M351.001088,245.627179 L1.0010883,245.627179"}), (0, h.h)("path", {d:"M351.001088,280.627179 L1.0010883,280.627179"}), (0, h.h)("path", 
        {d:"M351.001088,298.127179 L1.0010883,298.127179"}), (0, h.h)("path", {d:"M351.001088,315.627179 L1.0010883,315.627179"}), (0, h.h)("path", {d:"M351.001088,333.127179 L1.0010883,333.127179"})), (0, h.h)("g", {opacity:"0.5"}, (0, h.h)("path", {d:"M88.0641352,1 L88.0641352,351"}), (0, h.h)("path", {d:"M175.12827,1 L175.12827,351"}), (0, h.h)("path", {d:"M262.192406,1 L262.192406,351"}), (0, h.h)("path", {d:"M350.563591,88.0646793 L0.563591022,88.0646793"}), (0, h.h)("path", {d:"M350.563591,175.564679 L0.563591022,175.564679"}), 
        (0, h.h)("path", {d:"M350.563591,263.064679 L0.563591022,263.064679"})), (0, h.h)("rect", {opacity:"0.75", x:"1", y:"1", width:"350", height:"350"}))), (0, h.h)("rect", {width:"350", height:t.height, fill:"url(#" + this._patternName + ")"}));
      }}]), e;
    }(h.Component);
    e["default"] = y;
  }, function(t, e) {
    Object.defineProperty(e, "__esModule", {value:!0}), e["default"] = function(t) {
      var e, n, r, i = 0;
      if (0 === t.length) {
        return i;
      }
      for (e = 0, r = t.length;e < r;e++) {
        n = t.charCodeAt(e), i = (i << 5) - i + n, i |= 0;
      }
      return Math.abs(i);
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0}), e.Ruler = void 0;
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(48);
    n(130);
    var _ = n(132), v = e.Ruler = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"render", value:function() {
        var t = "" + _.ruler;
        return "right" === this.props.type && (t += " " + _["ruler--right"]), (0, h.h)("div", {className:t, "data-component":"ruler"}, (0, h.h)("div", {className:_.ruler__item + " " + _["ruler__item--2"]}, " 2  "), (0, h.h)("div", {className:_.ruler__item + " " + _["ruler__item--1"]}, " 1  "), (0, h.h)("div", {className:_.ruler__item + " " + _["ruler__item--0"]}, " 0  "), (0, h.h)("div", {className:_.ruler__item + " " + _["ruler__item--n1"]}, " -1  "), (0, h.h)("div", {className:_.ruler__item + " " + 
        _["ruler__item--n2"]}, " -2  "));
      }}]), e;
    }(h.Component);
    e["default"] = v;
  }, function(t, e, n) {
    var r = n(131);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._ruler_1c43h_4{position:absolute;left:0;top:-1050px;height:2450px;width:18px}._ruler--right_1c43h_1{left:auto;right:0}._ruler__item_1c43h_1{position:absolute;color:#9c829a;font-size:8px;font-family:sans-serif;border-radius:50%;left:50%;width:7px;height:14px;text-align:center;line-height:14px;margin-top:3px;margin-left:-3.5px}._ruler__item--0_1c43h_1{top:1400px}._ruler__item--1_1c43h_1{top:1050px}._ruler__item--2_1c43h_1{top:700px}._ruler__item--n1_1c43h_1{top:1750px}._ruler__item--n2_1c43h_1{top:2100px}", 
    ""]);
  }, function(t, e) {
    t.exports = {ruler:"_ruler_1c43h_4", "ruler--right":"_ruler--right_1c43h_1", ruler__item:"_ruler__item_1c43h_1", "ruler__item--0":"_ruler__item--0_1c43h_1", "ruler__item--1":"_ruler__item--1_1c43h_1", "ruler__item--2":"_ruler__item--2_1c43h_1", "ruler__item--n1":"_ruler__item--n1_1c43h_1", "ruler__item--n2":"_ruler__item--n2_1c43h_1"};
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(48), _ = n(134), v = r(_), y = n(135), m = r(y), g = n(116), b = r(g), x = n(141), T = r(x), E = n(115), w = r(E), P = n(142), M = r(P), S = n(143), O = (r(S), n(114)), C = r(O);
    n(144);
    var k = n(146), N = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"render", value:function() {
        var t = this.props, e = t.point, n = t.state, r = e.isSelected ? k["is-selected"] : "", i = "straight" === e.type ? k["is-hide-handles"] : "", o = this._getLittleHandles();
        return (0, h.h)("div", {className:k.point + " " + r + " " + i, style:this._getStyle(n), "data-component":"point"}, (0, h.h)("div", {className:k.point__touch, id:"js-point-touch"}), o);
      }}, {key:"_getStyle", value:function(t) {
        var e = this.props.point, n = t.resize, r = (0, M["default"])(e.x + e.tempX, 0, 100), i = r * n.scalerX, o = e.y + e.tempY, a = "transform: translate(" + i + "px, " + (o - 1) + "px)";
        return "" + mojs.h.prefix.css + a + "; " + a;
      }}, {key:"_getLittleHandles", value:function() {
        var t = this.props, e = t.index, n = t.point, r = t.pointsCount, i = [];
        return 0 !== e && i.push(this._createHandle(1, n)), e !== r - 1 && i.push(this._createHandle(2, n)), i;
      }}, {key:"_createHandle", value:function(t, e) {
        return (0, h.h)(m["default"], {index:t, state:this.props.state, parentIndex:this.props.index, handle:e["handle" + t], type:e.type});
      }}, {key:"componentDidMount", value:function() {
        var t = this, e = this.context.store, n = function(e) {
          var n = t.props.state.resize, r = t.props, i = r.point;
          r.index;
          if (i.isLockedX) {
            return 0;
          }
          var o = e.deltaX / n.scalerX;
          return i.x + o < 0 ? 0 - i.x : i.x + o > 100 ? 100 - i.x : (0, T["default"])(i.x + o, 5, 1.5) - i.x;
        }, r = function(e) {
          var n = t.props.state.resize, r = t.props, i = r.point, o = (r.index, i.y + e.deltaY), a = o;
          return o < n.top - n.panY ? a = n.top - n.panY : o > C["default"].CURVE_SIZE + n.bottom - n.panY && (a = C["default"].CURVE_SIZE + n.bottom - n.panY), (0, T["default"])(a, 5 * C["default"].CURVE_PERCENT, 2 * C["default"].CURVE_PERCENT) - i.y;
        }, i = this.base.querySelector("#js-point-touch"), o = (0, b["default"])(new w["default"].Manager(i));
        o.add(new w["default"].Pan({threshold:0})), o.on("pan", function(i) {
          var o = t.props, a = (o.point, o.index);
          e.dispatch({type:"POINT_TRANSLATE", data:{x:n(i), y:r(i), index:a}}), i.stopPropagation();
        }).on("panend", function(n) {
          var r = t.props, i = (r.point, r.index);
          e.dispatch({type:"POINT_TRANSLATE_END", data:i, isRecord:!0}), n.stopPropagation();
        }).on("tap", function(t) {
          t.stopPropagation();
        }), (0, v["default"])(i, function(n) {
          var r = t.props, i = r.point, o = r.index;
          e.dispatch({type:"POINT_SELECT", data:{index:o, isDeselect:!n.shiftKey, type:i.type}});
        });
      }}]), e;
    }(h.Component);
    e["default"] = N;
  }, function(t, e) {
    Object.defineProperty(e, "__esModule", {value:!0}), e["default"] = function(t, e) {
      window.navigator.msPointerEnabled ? t.addEventListener("MSPointerDown", e) : void 0 !== window.ontouchstart ? (t.addEventListener("touchstart", e), t.addEventListener("mousedown", e)) : t.addEventListener("mousedown", e);
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(5), o = r(i), a = n(66), s = r(a), u = n(42), c = r(u), l = n(43), f = r(l), p = n(71), d = r(p), h = n(106), _ = r(h), v = n(48), y = n(120), m = r(y), g = n(136), b = r(g), x = n(114), T = (r(x), n(137)), E = r(T), w = n(116), P = r(w), M = n(115), S = r(M);
    n(138);
    var O = n(140), C = function(t) {
      function e() {
        return (0, c["default"])(this, e), (0, d["default"])(this, (0, s["default"])(e).apply(this, arguments));
      }
      return (0, _["default"])(e, t), (0, f["default"])(e, [{key:"render", value:function() {
        return (0, v.h)("div", {className:O["little-handle"], "data-component":"little-handle"}, (0, v.h)("div", {"class":O["little-handle__point"], style:this._getPointStyle()}, (0, v.h)("div", {className:O["little-handle__easy-touch"]})), (0, v.h)("div", {"class":O["little-handle__line"], style:this._getLineStyle()}));
      }}, {key:"componentDidMount", value:function() {
        var t = this, e = this.context.store, n = (0, P["default"])(new S["default"].Manager(this.base)), r = this.props.handle;
        n.add(new S["default"].Pan({threshold:0})), n.on("panstart", function(e) {
          r = t.props.handle;
        }).on("pan", function(n) {
          var i = t.props, a = i.index, s = i.parentIndex, u = i.state, c = (0, m["default"])(r.angle, r.radius), l = c.y + n.deltaY, f = u.resize, p = c.x + n.deltaX / f.absScalerX, d = (0, b["default"])(p, l);
          if (e.dispatch({type:"HANDLE_TRANSLATE", data:(0, o["default"])({index:a, parentIndex:s}, d)}), "mirrored" === t.props.type) {
            var h = 1 === a ? 2 : 1;
            e.dispatch({type:"HANDLE_TRANSLATE", data:{index:h, parentIndex:s, radius:d.radius, angle:d.angle - 180}});
          }
          if ("asymmetric" === t.props.type) {
            var _ = 1 === a ? 2 : 1;
            e.dispatch({type:"HANDLE_TRANSLATE", data:{index:_, parentIndex:s, radius:r.radius, angle:d.angle - 180}});
          }
          n.stopPropagation();
        }).on("panend", function(t) {
          e.dispatch({type:"HANDLE_TRANSLATE_END", isRecord:!0}), E["default"].clear(), t.stopPropagation();
        });
      }}, {key:"_getPointStyle", value:function() {
        var t = this.props, e = t.handle, n = t.state, r = n.resize, i = (0, m["default"])(e.angle, e.radius), o = "transform: translate(" + i.x * r.absScalerX + "px, " + i.y + "px) rotate(" + e.angle + "deg)";
        return "" + mojs.h.prefix.css + o + "; " + o;
      }}, {key:"_getLineStyle", value:function() {
        var t = this.props, e = t.handle, n = t.state, r = n.resize, i = (0, m["default"])(e.angle, e.radius), o = (0, b["default"])(i.x * r.absScalerX, i.y), a = "transform: rotate(" + o.angle + "deg) scaleY(" + o.radius + ")";
        return "" + mojs.h.prefix.css + a + "; " + a;
      }}]), e;
    }(v.Component);
    e["default"] = C;
  }, function(t, e) {
    Object.defineProperty(e, "__esModule", {value:!0}), e["default"] = function(t, e) {
      var n = Math.sqrt(t * t + e * e), r = Math.atan(e / t) * (180 / Math.PI) - 90;
      return t > 0 && (r -= 180), {radius:n, angle:r};
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(42), o = r(i), a = n(43), s = r(a), u = function() {
      function t() {
        (0, o["default"])(this, t), this._states = [];
      }
      return (0, s["default"])(t, [{key:"push", value:function(t) {
        return this;
      }}, {key:"clear", value:function() {
        return this._states = [], this;
      }}]), t;
    }();
    e["default"] = new u;
  }, function(t, e, n) {
    var r = n(139);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._little-handle_x1mg1_3{position:absolute;left:50%;top:50%;width:0;height:0}._little-handle__point_x1mg1_1{position:absolute;z-index:1;width:6px;height:6px;left:50%;top:50%;margin-left:-3px;margin-top:-3px;background:#ff512f;box-shadow:1px 1px 0 rgba(0,0,0,.5)}._little-handle__easy-touch_x1mg1_1{position:absolute;z-index:1;width:200%;height:200%;left:50%;top:50%;margin-left:-100%;margin-top:-100%}._little-handle__line_x1mg1_1{position:absolute;width:1px;height:1px;margin-left:-1px;margin-top:-1px;left:50%;top:50%;background:#ff512f;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}", 
    ""]);
  }, function(t, e) {
    t.exports = {"little-handle":"_little-handle_x1mg1_3", "little-handle__point":"_little-handle__point_x1mg1_1", "little-handle__easy-touch":"_little-handle__easy-touch_x1mg1_1", "little-handle__line":"_little-handle__line_x1mg1_1"};
  }, function(t, e) {
    Object.defineProperty(e, "__esModule", {value:!0}), e["default"] = function(t, e, n) {
      var r = Math.round(t / e) * e;
      return Math.abs(t - r) < n ? r : t;
    };
  }, function(t, e) {
    Object.defineProperty(e, "__esModule", {value:!0}), e["default"] = function(t, e, n) {
      return t < e ? e : t > n ? n : t;
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(114), o = r(i), a = o["default"].CURVE_SIZE, s = function(t) {
      var e = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1], n = Math.abs(t % a), r = parseInt(t / a), i = 15;
      return n < i ? t = r * a : n > a - i && (t = (r + 1 * e) * a), t;
    };
    e["default"] = s;
  }, function(t, e, n) {
    var r = n(145);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._point_14jnp_5{position:absolute;width:10px;height:10px;margin-left:-5px;margin-top:-5px;cursor:move;background:#fff;border-radius:50%;z-index:3;box-shadow:3px 3px 0 rgba(0,0,0,.5)}._point_14jnp_5 [data-component\x3dlittle-handle]{display:none}._point__touch_14jnp_1{position:absolute;left:50%;top:50%;width:20px;height:20px;margin-left:-10px;margin-top:-10px}._point_14jnp_5._is-selected_14jnp_31,._point_14jnp_5:hover{background:#ff512f}._point_14jnp_5._is-selected_14jnp_31 [data-component\x3dlittle-handle]{display:block}._point_14jnp_5._is-hide-handles_14jnp_43 [data-component\x3dlittle-handle]{display:none}", 
    ""]);
  }, function(t, e) {
    t.exports = {point:"_point_14jnp_5", point__touch:"_point__touch_14jnp_1", "is-selected":"_is-selected_14jnp_31", "is-hide-handles":"_is-hide-handles_14jnp_43"};
  }, function(t, e, n) {
    var r = n(148);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._curve_1w89w_5{position:absolute;left:0;top:10px;right:10px;bottom:10px;border-radius:2px;background:rgba(58,8,58,.75);border:1px solid #9c829a;box-shadow:inset 4px 4px 0 rgba(0,0,0,.5);z-index:2;overflow:hidden}._curve__background_1w89w_1{position:absolute;z-index:0;top:0;bottom:0;width:350px;left:0;opacity:.5;border-radius:inherit}._curve__background_1w89w_1 svg{width:100%}._curve__background_1w89w_1 path{vector-effect:non-scaling-stroke}._curve__svg-wrapper_1w89w_1{position:absolute;z-index:1;left:-1px;right:-1px}._curve__svg_1w89w_1{display:block;overflow:visible;width:100%;position:relative;z-index:1}._curve__svg-segment_1w89w_1{stroke:#fff;stroke-width:2px;cursor:crosshair}._curve__svg-segment_1w89w_1:hover{stroke:#ff512f}", 
    ""]);
  }, function(t, e) {
    t.exports = {curve:"_curve_1w89w_5", curve__background:"_curve__background_1w89w_1", "curve__svg-wrapper":"_curve__svg-wrapper_1w89w_1", curve__svg:"_curve__svg_1w89w_1", "curve__svg-segment":"_curve__svg-segment_1w89w_1"};
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(5), o = r(i), a = n(66), s = r(a), u = n(42), c = r(u), l = n(43), f = r(l), p = n(71), d = r(p), h = n(106), _ = r(h), v = n(48), y = n(151), m = r(y), g = n(115), b = r(g), x = n(116), T = r(x), E = n(155), w = r(E), P = n(156);
    n(157);
    var M = function(t) {
      function e() {
        return (0, c["default"])(this, e), (0, d["default"])(this, (0, s["default"])(e).apply(this, arguments));
      }
      return (0, _["default"])(e, t), (0, f["default"])(e, [{key:"render", value:function() {
        var t = this.props.type, e = "" + P["resize-handle"], n = "" + P["resize-handle--" + t];
        return (0, v.h)("div", {className:e + " " + n + " " + this.props.className, "data-type":t, "data-component":"resize-handle"}, (0, v.h)(m["default"], {shape:"ellipsis"}));
      }}, {key:"componentDidMount", value:function() {
        var t = this, e = this.props.type, n = this.context.store, r = (0, T["default"])(new b["default"].Manager(this.base));
        r.add(new b["default"].Pan({threshold:0})), r.on("pan", function(r) {
          n.dispatch({type:"EDITOR_RESIZE", data:(0, o["default"])({}, (0, w["default"])(r.deltaX, r.deltaY, e, t.props.state))}), r.stopPropagation();
        }).on("panend", function(r) {
          n.dispatch({type:"EDITOR_RESIZE_END", data:(0, o["default"])({}, (0, w["default"])(r.deltaX, r.deltaY, e, t.props.state))}), r.stopPropagation();
        });
      }}]), e;
    }(v.Component);
    e["default"] = M;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(48), _ = n(152);
    n(153);
    var v = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"render", value:function() {
        var t = this.props.shape, e = '\x3csvg viewBox\x3d"0 0 32 32"\x3e\x3cuse xlink:href\x3d"#' + t + '-shape" /\x3e\x3c/svg\x3e';
        return (0, h.h)("div", {className:_.icon, "data-component":"icon", dangerouslySetInnerHTML:{__html:e}});
      }}]), e;
    }(h.Component);
    e["default"] = v;
  }, function(t, e) {
    t.exports = {icon:"_icon_4a8lf_5"};
  }, function(t, e, n) {
    var r = n(154);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._icon_4a8lf_5{position:relative;width:32px;height:32px;cursor:pointer;fill:#fff;display:block}._icon_4a8lf_5\x3esvg{position:absolute;left:0;top:0;width:100%;height:100%;fill:inherit}._icon_4a8lf_5\x3esvg\x3euse{fill:inherit}._icon_4a8lf_5:after{content:'';position:absolute;left:0;top:0;right:0;bottom:0;z-index:1}", ""]);
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(143), o = r(i), a = n(114);
    r(a);
    e["default"] = function(t, e, n, r) {
      var i = r.resize;
      if ("right" !== n) {
        var a = i[n] + e, s = "top" === n ? -1 : 1;
        e = (0, o["default"])(a, s), e -= i[n];
        var u = 0;
        a * s < -u && (e = -i[n] - u);
      } else {
        i[n] + t < 0 && (t = -i[n]);
      }
      return {x:t, y:e, type:n, resize:i};
    };
  }, function(t, e) {
    t.exports = {"resize-handle":"_resize-handle_1uncf_4", "resize-handle--right":"_resize-handle--right_1uncf_1", "resize-handle--bottom":"_resize-handle--bottom_1uncf_1"};
  }, function(t, e, n) {
    var r = n(158);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._resize-handle_1uncf_4{background:#3d1b3c;width:32px;height:16px;display:block;cursor:n-resize;overflow:hidden;position:relative;border-top-left-radius:3px;border-top-right-radius:3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;box-shadow:inset 0 0 0 1px #572b51}._resize-handle_1uncf_4:after{content:'';position:absolute;left:0;top:0;right:0;bottom:0;z-index:2}._resize-handle_1uncf_4 [data-component\x3dicon]{position:absolute;left:0;top:-7px}._resize-handle_1uncf_4:hover{opacity:.85}._resize-handle--right_1uncf_1{-webkit-transform:rotate(90deg);transform:rotate(90deg);cursor:e-resize}._resize-handle--bottom_1uncf_1{-webkit-transform:rotate(180deg);transform:rotate(180deg);cursor:s-resize}", 
    ""]);
  }, function(t, e) {
    t.exports = {"curve-editor":"_curve-editor_10g8s_3", "curve-editor__left":"_curve-editor__left_10g8s_1", "curve-editor__right":"_curve-editor__right_10g8s_133", "curve-editor__resize-handle":"_curve-editor__resize-handle_10g8s_1", "curve-editor__anchor-buttons":"_curve-editor__anchor-buttons_10g8s_128", "curve-editor__mojs-logo":"_curve-editor__mojs-logo_10g8s_111", "is-inactive":"_is-inactive_10g8s_110", "is-minimized":"_is-minimized_10g8s_118", "curve__svg-wrapper":"_curve__svg-wrapper_10g8s_137", 
    "is-hidden-on-min":"_is-hidden-on-min_10g8s_147"};
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(48), o = n(151), a = r(o), s = n(161), u = r(s), c = n(166), l = r(c), f = n(167), p = r(f), d = n(168), h = r(d), _ = n(172), v = r(_), y = n(159), m = function(t) {
      var e = t.state;
      return (0, i.h)("div", {className:y["curve-editor__left"], id:"js-left-panel"}, (0, i.h)(l["default"], {state:e}), (0, i.h)(p["default"], {state:e}), (0, i.h)(u["default"], {state:e}), (0, i.h)(h["default"], null), (0, i.h)(v["default"], {state:e, className:y["curve-editor__anchor-buttons"]}), (0, i.h)("a", {className:y["curve-editor__mojs-logo"], href:"https://github.com/legomushroom/mojs_curve_editor", target:"_blank"}, (0, i.h)(a["default"], {shape:"mojs-logo"})));
    };
    e["default"] = m;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(48), _ = n(162), v = r(_), y = n(116), m = r(y), g = n(115), b = r(g), x = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"render", value:function() {
        var t = this.props.state;
        return (0, h.h)("div", {"data-component":"code-button", title:"get code"}, (0, h.h)(v["default"], {shape:"code", isCheck:t.controls.isCode}));
      }}, {key:"componentDidMount", value:function() {
        var t = this.context.store, e = (0, m["default"])(new b["default"].Manager(this.base));
        e.add(new b["default"].Tap), e.on("tap", function(e) {
          t.dispatch({type:"CODE_TAP"});
        });
      }}]), e;
    }(h.Component);
    e["default"] = x;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(115), _ = r(h), v = n(48), y = n(151), m = r(y);
    n(163);
    var g = n(165), b = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"render", value:function() {
        var t = this.props, e = t.isCheck ? g["is-checked"] : "";
        return (0, v.h)("div", {className:g["icon-button"] + " " + e, title:t.title || "", "data-component":"icon-button"}, (0, v.h)(m["default"], {shape:this.props.shape}));
      }}, {key:"componentDidMount", value:function() {
        var t = this;
        if ("function" == typeof this.props.onTap) {
          (new _["default"](this.base)).on("tap", function(e) {
            t.props.onTap(e, t.props);
          });
        }
      }}]), e;
    }(v.Component);
    e["default"] = b;
  }, function(t, e, n) {
    var r = n(164);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._icon-button_6ysdi_4{position:relative;width:24px;height:24px;display:block;background:#3a0839;border-radius:3px;box-shadow:1px 1px 0 rgba(0,0,0,.15)}._icon-button_6ysdi_4 [data-component\x3dicon]{position:absolute;left:50%;top:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}._icon-button_6ysdi_4:hover{box-shadow:none}._icon-button_6ysdi_4:hover [data-component\x3dicon]{-webkit-transform:translate(-52%,-52%);transform:translate(-52%,-52%)}._icon-button_6ysdi_4._is-checked_6ysdi_31,._icon-button_6ysdi_4:active{border-radius:3px;box-shadow:inset -1px -1px 0 hsla(0,0%,100%,.25),inset 1px 1px 1px rgba(0,0,0,.4)}._icon-button_6ysdi_4._is-checked_6ysdi_31 [data-component\x3dicon],._icon-button_6ysdi_4:active [data-component\x3dicon]{-webkit-transform:translate(-54%,-54%) scale(.95);transform:translate(-54%,-54%) scale(.95)}", 
    ""]);
  }, function(t, e) {
    t.exports = {"icon-button":"_icon-button_6ysdi_4", "is-checked":"_is-checked_6ysdi_31"};
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(48), _ = n(162), v = r(_), y = n(116), m = r(y), g = n(115), b = r(g), x = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"render", value:function() {
        this.props.state;
        return (0, h.h)("div", {"data-component":"minimize-button", title:"minimize"}, (0, h.h)(v["default"], {shape:"minimize"}));
      }}, {key:"componentDidMount", value:function() {
        var t = this.context.store, e = (0, m["default"])(new b["default"].Manager(this.base));
        e.add(new b["default"].Tap), e.on("tap", function(e) {
          t.dispatch({type:"SET_MINIMIZE", data:!0});
        });
      }}]), e;
    }(h.Component);
    e["default"] = x;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(48), _ = n(162), v = r(_), y = n(116), m = r(y), g = n(115), b = r(g), x = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"render", value:function() {
        this.props.state;
        return (0, h.h)("div", {"data-component":"maximize-button", title:"maximize"}, (0, h.h)(v["default"], {shape:"maximize"}));
      }}, {key:"componentDidMount", value:function() {
        var t = this.context.store, e = (0, m["default"])(new b["default"].Manager(this.base));
        e.add(new b["default"].Tap), e.on("tap", function(e) {
          t.dispatch({type:"SET_MINIMIZE", data:!1});
        });
      }}]), e;
    }(h.Component);
    e["default"] = x;
  }, function(t, e, n) {
    Object.defineProperty(e, "__esModule", {value:!0});
    var r = n(48), i = n(169);
    n(170), e["default"] = function() {
      return (0, r.h)("div", {className:i["icon-divider"], "data-component":"icon-divider"});
    };
  }, function(t, e) {
    t.exports = {"icon-divider":"_icon-divider_ftask_3"};
  }, function(t, e, n) {
    var r = n(171);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._icon-divider_ftask_3{position:relative;margin:0 auto;width:16px;height:1px;display:block;background:hsla(0,0%,100%,.3);box-shadow:0 1px 0 rgba(0,0,0,.3)}", ""]);
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(66), o = r(i), a = n(42), s = r(a), u = n(43), c = r(u), l = n(71), f = r(l), p = n(106), d = r(p), h = n(48), _ = n(162), v = r(_);
    n(173);
    var y = n(175), m = function(t) {
      function e() {
        return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
      }
      return (0, d["default"])(e, t), (0, c["default"])(e, [{key:"render", value:function() {
        var t = this.props, e = t.state, n = e.pointControls.present, r = n.isShow ? y["is-show"] : "", i = t.className + " " + y["point-controls"] + " " + r, o = this._addButtons(n);
        return (0, h.h)("div", {className:i}, " ", o, " ");
      }}, {key:"_onButtonTap", value:function(t) {
        var e = this;
        return function(n) {
          var r = e.context.store;
          r.dispatch({type:"POINT_CHANGE_TYPE", data:t, isRecord:!0});
        };
      }}, {key:"_addButtons", value:function(t) {
        for (var e = ["straight", "disconnected", "mirrored", "asymmetric"], n = [], r = 0;r < e.length;r++) {
          var i = e[r];
          n.push((0, h.h)(v["default"], {shape:"point-" + i, title:i, isCheck:t.type === i, onTap:this._onButtonTap(i)}));
        }
        return n;
      }}]), e;
    }(h.Component);
    e["default"] = m;
  }, function(t, e, n) {
    var r = n(174);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._point-controls_1xcu7_4{display:none}._point-controls_1xcu7_4 [data-component\x3dicon-button]:after{content:'';position:absolute;width:3px;height:7.5px;background:#ff512f;border-top-right-radius:2px;border-bottom-right-radius:2px;left:-10px;top:50%;margin-top:-3.75px;display:none}._point-controls_1xcu7_4 [data-component\x3dicon-button][class*\x3dis-checked]:after,._point-controls_1xcu7_4._is-show_1xcu7_7{display:block}", ""]);
  }, function(t, e) {
    t.exports = {"point-controls":"_point-controls_1xcu7_4", "is-show":"_is-show_1xcu7_7"};
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(48), o = n(150), a = r(o);
    n(177);
    var s = n(179);
    e["default"] = function(t) {
      var e = t.state, n = e.points, r = e.controls, o = r.isCode && !r.isMinimize, u = o ? s["is-open"] : "", c = s["code-panel"] + " " + u;
      return (0, i.h)("div", {className:c}, (0, i.h)("div", {className:s["code-panel__inner"]}, (0, i.h)(a["default"], {state:e, type:"top"}), (0, i.h)("div", {className:s["code-panel__input-wrap"]}, (0, i.h)("input", {className:s["code-panel__input-field"], type:"text", readonly:"readonly", value:n.present.path}))));
    };
  }, function(t, e, n) {
    var r = n(178);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._code-panel_nnb9p_3{position:absolute;left:10px;right:10px;bottom:100%;z-index:1;overflow:hidden;padding-top:16px;box-sizing:content-box}._code-panel_nnb9p_3 [data-component\x3dresize-handle]{position:absolute;left:50%;bottom:100%}._code-panel__inner_nnb9p_1{border-radius:6px 6px 0 0;background:#3d1b3c;padding:4px 5px 5px;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:all .2s ease-out;transition:all .2s ease-out}._code-panel__input-wrap_nnb9p_1{border-radius:2px;background:#42103f;border:1px solid #9c829a;box-shadow:inset 2px 2px 0 rgba(0,0,0,.5)}._code-panel__input-field_nnb9p_1{display:block;background:transparent;color:#fff;font-size:9px;font-family:Arial,Helvetica,sans-serif;letter-spacing:.45px;font-weight:100;padding:0 .3em 0 .8em;border:none;width:100%;height:21px;white-space:nowrap;text-overflow:ellipsis}._code-panel_nnb9p_3 ::-moz-selection,.code-panel ::-moz-selection{background:#ff512f}._code-panel_nnb9p_3 ::selection{background:#ff512f}._code-panel_nnb9p_3._is-open_nnb9p_61 ._code-panel__inner_nnb9p_1{-webkit-transform:translateY(0);transform:translateY(0)}", 
    ""]);
  }, function(t, e) {
    t.exports = {"code-panel":"_code-panel_nnb9p_3", "code-panel__inner":"_code-panel__inner_nnb9p_1", "code-panel__input-wrap":"_code-panel__input-wrap_nnb9p_1", "code-panel__input-field":"_code-panel__input-field_nnb9p_1", "is-open":"_is-open_nnb9p_61"};
  }, function(t, e, n) {
    Object.defineProperty(e, "__esModule", {value:!0});
    var r = n(48), i = function() {
      return (0, r.h)("div", {dangerouslySetInnerHTML:{__html:'\x3csvg height\x3d"0" version\x3d"1.1" xmlns\x3d"http://www.w3.org/2000/svg" style\x3d"position:absolute; margin-left: -100%; width:0; height:0;" xmlns:xlink\x3d"http://www.w3.org/1999/xlink"\x3e\n      \x3cg id\x3d"ellipsis-shape"\x3e\n        \x3ccircle cx\x3d"11" cy\x3d"16" r\x3d"1"\x3e\x3c/circle\x3e\n        \x3ccircle cx\x3d"16" cy\x3d"16" r\x3d"1"\x3e\x3c/circle\x3e\n        \x3ccircle cx\x3d"21" cy\x3d"16" r\x3d"1"\x3e\x3c/circle\x3e\n      \x3c/g\x3e\n      \x3cpath id\x3d"code-shape" d\x3d"M8,16.0849648 C8,15.8210793 8.11149069,15.6129393 8.33483405,15.4609065 L12.3390874,12.8419612 C12.3897649,12.8014192 12.4657813,12.7811481 12.5674985,12.7811481 C12.7398023,12.7811481 12.9048664,12.8571645 13.0623289,13.0095592 C13.2194294,13.161954 13.2983417,13.3393255 13.2983417,13.5423979 C13.2983417,13.7353347 13.2219633,13.8826617 13.0692066,13.9840168 L9.85769553,16.0849648 L13.0692066,18.1862747 C13.2219633,18.2677208 13.2983417,18.4146858 13.2983417,18.6278937 C13.2983417,18.830966 13.2197914,19.0061657 13.0623289,19.1531307 C12.9048664,19.3004576 12.7398023,19.3739401 12.5674985,19.3739401 C12.4657813,19.3739401 12.3897649,19.3536691 12.3390874,19.313127 L8.33483405,16.6938198 C8.11149069,16.541425 8,16.3387147 8,16.0849648 L8,16.0849648 Z M14.1399516,20.6875756 C14.1265582,20.6075774 14.1287301,20.5301131 14.1468293,20.4548207 L16.9395263,11.356022 C16.9891179,11.1623612 17.1237755,11.0468887 17.344223,11.0096045 C17.5042194,10.9824558 17.658786,11.0128623 17.8075609,11.1008242 C17.9563358,11.1891479 18.0442976,11.313308 18.0710844,11.4733044 C18.0862876,11.5634381 18.079772,11.6470561 18.0518993,11.7237965 L15.2664419,20.7748134 C15.2085247,20.9800577 15.0593878,21.1031318 14.8193932,21.1440358 C14.6488993,21.1729945 14.4994005,21.1389681 14.3698106,21.0426807 C14.2402208,20.9460313 14.1638424,20.8276629 14.1399516,20.6875756 L14.1399516,20.6875756 Z M18.9528744,19.1527687 C18.7954119,19.0058037 18.7168616,18.830604 18.7168616,18.6275317 C18.7168616,18.4244594 18.7878102,18.2774944 18.9300695,18.1859127 L22.1426665,16.0846028 L18.9300695,13.9836549 C18.7878102,13.8718022 18.7168616,13.7248372 18.7168616,13.5420359 C18.7168616,13.3389636 18.7954119,13.161592 18.9528744,13.0091973 C19.1103369,12.8568025 19.275039,12.7807861 19.4477048,12.7807861 C19.5389245,12.7807861 19.6098731,12.8014192 19.6609126,12.8415992 L23.6651659,15.4605445 C23.8881473,15.6129393 24,15.8210793 24,16.0846028 C24,16.3488502 23.8881473,16.5515606 23.6651659,16.6938198 L19.6609126,19.3127651 C19.6098731,19.3533071 19.5389245,19.3735782 19.4477048,19.3735782 C19.275039,19.3735782 19.1103369,19.3000957 18.9528744,19.1527687 L18.9528744,19.1527687 Z"\x3e\x3c/path\x3e\n      \x3cg id\x3d"point-straight-shape" fill\x3d"none"\x3e\n        \x3cpolyline fill\x3d"#8B6E8A" stroke\x3d"#FFFFFF" points\x3d"7.881 20.568 15.451 12.241 23.892 20.568"/\x3e\n        \x3cellipse stroke\x3d"none" cx\x3d"16.8" cy\x3d"13.9" rx\x3d"2.667" ry\x3d"2.667" fill\x3d"black" fill-opacity\x3d"0.5" /\x3e\n        \x3ccircle cx\x3d"15.333" cy\x3d"12" r\x3d"2.667" fill\x3d"#FFFFFF"/\x3e\n      \x3c/g\x3e\n      \x3cg id\x3d"point-mirrored-shape" fill\x3d"none" fill-rule\x3d"evenodd"\x3e\n        \x3cpath fill\x3d"#8B6E8A" stroke\x3d"#FFFFFF" d\x3d"M7.88144841,21.9012632 C7.88144841,21.9012632 7.59287172,13.5740537 15.4514423,13.5740537 C23.3100129,13.5740537 23.8921228,21.9012632 23.8921228,21.9012632"/\x3e\n        \x3cpath stroke\x3d"#FF512F" d\x3d"M7.13883527,13.3333333 L25.8055013,13.3333333"/\x3e\n        \x3cellipse stroke\x3d"none" cx\x3d"16.8" cy\x3d"14.9" rx\x3d"2.667" ry\x3d"2.667" fill\x3d"black" fill-opacity\x3d"0.5" /\x3e\n        \x3cellipse cx\x3d"15.333" cy\x3d"13.333" fill\x3d"#FFFFFF" rx\x3d"2.667" ry\x3d"2.667"/\x3e\n        \x3crect width\x3d"2.667" height\x3d"2.667" x\x3d"24" y\x3d"12" fill\x3d"#FF512F"/\x3e\n        \x3crect width\x3d"2.667" height\x3d"2.667" x\x3d"5.333" y\x3d"12" fill\x3d"#FF512F"/\x3e\n      \x3c/g\x3e\n      \x3cg id\x3d"point-disconnected-shape" fill\x3d"none" fill-rule\x3d"evenodd"\x3e\n        \x3cpath fill\x3d"#8B6E8A" stroke\x3d"#FFFFFF" d\x3d"M7.88144841,20.5679298 C7.88144841,20.5679298 7.59287172,12.2407204 15.4514423,12.2407204 C21.2005207,17.88737 23.8921228,20.5679298 23.8921228,20.5679298"/\x3e\n        \x3cpolyline stroke\x3d"#FF512F" points\x3d"6.133 12 15.228 12 23.933 20.602"/\x3e\n        \x3cellipse stroke\x3d"none" cx\x3d"16.8" cy\x3d"13.4" rx\x3d"2.667" ry\x3d"2.667" fill\x3d"black" fill-opacity\x3d"0.5" /\x3e\n        \x3ccircle cx\x3d"15.333" cy\x3d"12" r\x3d"2.667" fill\x3d"#FFFFFF"/\x3e\n        \x3crect width\x3d"2.667" height\x3d"2.667" x\x3d"21.886" y\x3d"18.552" fill\x3d"#FF512F" transform\x3d"rotate(45 23.219 19.886)"/\x3e\n        \x3crect width\x3d"2.667" height\x3d"2.667" x\x3d"5.333" y\x3d"10.667" fill\x3d"#FF512F"/\x3e\n      \x3c/g\x3e\n      \x3cg id\x3d"point-asymmetric-shape" fill\x3d"none" fill-rule\x3d"evenodd" transform\x3d"translate(7.667 9.333)"\x3e\n        \x3cpath fill\x3d"#8B6E8A" stroke\x3d"#FFFFFF" d\x3d"M0.214781742,11.2345965 C0.214781742,11.2345965 -0.373511869,2.90709613 7.78477564,2.90738704 C10.7500003,2.90749277 16.2254562,11.2345965 16.2254562,11.2345965"/\x3e\n        \x3cellipse stroke\x3d"none" cx\x3d"9" cy\x3d"4.4" rx\x3d"2.667" ry\x3d"2.667" fill\x3d"black" fill-opacity\x3d"0.5" /\x3e\n        \x3cpath stroke\x3d"#FF512F" d\x3d"M2.52788503,2.66666667 L18.1388346,2.66666667"/\x3e\n        \x3cellipse cx\x3d"7.667" cy\x3d"2.667" fill\x3d"#FFFFFF" rx\x3d"2.667" ry\x3d"2.667"/\x3e\n        \x3crect width\x3d"2.667" height\x3d"2.667" x\x3d"16.333" y\x3d"1.333" fill\x3d"#FF512F"/\x3e\n        \x3crect width\x3d"2.667" height\x3d"2.667" x\x3d".333" y\x3d"1.333" fill\x3d"#FF512F"/\x3e\n      \x3c/g\x3e\n      \x3cpath id\x3d"mojs-logo-shape" d\x3d"M18.4678907,2.67700048 C19.488586,3.25758625 20.2789227,4.18421651 20.87823,5.1973579 C24.0807788,10.501451 27.2777091,15.8113116 30.480258,21.1154047 C31.1320047,22.1612281 31.7706417,23.2647256 31.9354512,24.5162532 C32.188284,26.0619186 31.6919826,27.7363895 30.5589171,28.80336 C29.4501984,29.8857103 27.8807622,30.3182659 26.3806209,30.3048086 C19.4511293,30.3086535 12.5235106,30.3086535 5.59401901,30.3048086 C3.71556494,30.343258 1.69852104,29.5723478 0.683444165,27.8709623 C-0.406546132,26.1099803 -0.0975282643,23.7914822 0.940022637,22.0843293 C4.34296485,16.4130445 7.76650826,10.7532945 11.1825603,5.08969961 C11.9747698,3.74781595 13.1846215,2.60202418 14.6847628,2.18292584 C15.9451812,1.81573418 17.3348251,2.01182606 18.4678907,2.67700048 Z M15.3334668,9.51526849 C15.6146238,9.03779476 16.0791597,9.02250655 16.3785679,9.4929547 L25.2763555,23.4736913 C25.5723919,23.9388414 25.3568433,24.3159201 24.8074398,24.3159202 L7.62314647,24.3159205 C7.06813505,24.3159206 6.84622798,23.9286889 7.12728913,23.4513779 L15.3334668,9.51526849 Z" fill-rule\x3d"evenodd"\x3e\x3c/path\x3e\n      \x3cpath id\x3d"minimize-shape" d\x3d"M9,18.1970803 L14.4501217,18.1970803 L14.4501217,23.6472019 L9,18.1970803 Z M16.8832117,9 L22.3333333,14.4501217 L16.8832117,14.4501217 L16.8832117,9 Z"\x3e\x3c/path\x3e\n      \x3cpath id\x3d"maximize-shape" d\x3d"M16.1358025,11 L21.6666667,11 L21.6666667,16.5308642 L16.1358025,11 Z M11,16.1358025 L16.5308642,21.6666667 L11,21.6666667 L11,16.1358025 Z"\x3e\x3c/path\x3e\n    \x3c/svg\x3e'}});
    };
    e["default"] = i;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    function i(t) {
      t.dispatch({type:"POINTS_REMOVE"}), t.dispatch({type:"POINT_ADD", data:{point:{x:0, y:a["default"].CURVE_SIZE, isLockedX:!0}, index:0}}), t.dispatch({type:"POINT_ADD", data:{point:{x:100, y:0, isLockedX:!0}, index:1}});
    }
    Object.defineProperty(e, "__esModule", {value:!0}), e.reset = i;
    var o = n(114), a = r(o);
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(42), o = r(i), a = n(43), s = r(a), u = function() {
      function t() {
        (0, o["default"])(this, t), this._subscribers = [];
      }
      return (0, s["default"])(t, [{key:"add", value:function(t) {
        this._subscribers.push(t);
      }}, {key:"resetActive", value:function(t) {
        for (var e = 0;e < this._subscribers.length;e++) {
          this._subscribers[e](t);
        }
      }}]), t;
    }();
    e["default"] = u;
  }, function(t, e, n) {
    var r = n(184);
    "string" == typeof r && (r = [[t.id, r, ""]]);
    n(125)(r, {});
    r.locals && (t.exports = r.locals);
  }, function(t, e, n) {
    e = t.exports = n(124)(), e.push([t.id, "._curve-editor_10g8s_3{position:fixed;left:0;top:0;width:403px;height:378px;border-radius:12px;background:#572b51;z-index:100;box-shadow:0 0 3px 1px rgba(0,0,0,.38)}._curve-editor_10g8s_3 [data-component\x3dmaximize-button]{display:none}._curve-editor_10g8s_3 *{box-sizing:border-box}._curve-editor__left_10g8s_1{position:absolute;width:42px;left:0;top:0;bottom:0;padding:10px;cursor:move}._curve-editor__left_10g8s_1 [data-component\x3dcode-button]{margin-top:5px}._curve-editor__left_10g8s_1 [data-component\x3dicon-divider]{margin:10px auto}._curve-editor__right_10g8s_133{position:absolute;left:43px;top:0;right:0;bottom:0}._curve-editor__right_10g8s_133:after{content:'';position:absolute;left:0;top:0;right:0;bottom:0;z-index:2;display:none}._curve-editor__resize-handle_10g8s_1{position:absolute}._curve-editor__resize-handle_10g8s_1[data-type\x3dtop]{top:-17px}._curve-editor__resize-handle_10g8s_1[data-type\x3dbottom]{bottom:1px}._curve-editor__resize-handle_10g8s_1[data-type\x3dbottom],._curve-editor__resize-handle_10g8s_1[data-type\x3dtop]{left:50%;margin-left:-21px}._curve-editor__resize-handle_10g8s_1[data-type\x3dright]{right:-15px;top:50%;margin-top:-16px}._curve-editor__anchor-buttons_10g8s_128{margin-top:10px}._curve-editor__anchor-buttons_10g8s_128 [data-component\x3dicon-button]{margin-bottom:5px}._curve-editor__mojs-logo_10g8s_111{position:absolute;bottom:17px;left:50%;margin-left:1px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}._curve-editor__mojs-logo_10g8s_111 [data-component\x3dicon]{fill:#ff512f;width:12px;height:12px}._curve-editor_10g8s_3._is-inactive_10g8s_110 ._curve-editor__mojs-logo_10g8s_111 [data-component\x3dicon]{fill:#9c829a}._curve-editor_10g8s_3._is-minimized_10g8s_118{width:100px!important;height:45px!important;border-radius:7px}._curve-editor_10g8s_3._is-minimized_10g8s_118 ._curve-editor__anchor-buttons_10g8s_128,._curve-editor_10g8s_3._is-minimized_10g8s_118 ._curve-editor__mojs-logo_10g8s_111,._curve-editor_10g8s_3._is-minimized_10g8s_118 [data-component\x3dcode-button],._curve-editor_10g8s_3._is-minimized_10g8s_118 [data-component\x3dicon-divider],._curve-editor_10g8s_3._is-minimized_10g8s_118 [data-component\x3dminimize-button],._curve-editor_10g8s_3._is-minimized_10g8s_118 [data-component\x3dpoint],._curve-editor_10g8s_3._is-minimized_10g8s_118 [data-component\x3dresize-handle]{display:none}._curve-editor_10g8s_3._is-minimized_10g8s_118 ._curve-editor__right_10g8s_133:after{display:block}._curve-editor_10g8s_3._is-minimized_10g8s_118 ._curve__svg-wrapper_10g8s_137{margin-top:-200px}._curve-editor_10g8s_3._is-minimized_10g8s_118 [data-component\x3dmaximize-button]{display:block}._curve-editor_10g8s_3._is-hidden-on-min_10g8s_147._is-minimized_10g8s_118{display:none}", 
    ""]);
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(51), o = n(186), a = r(o), s = function() {
      return (0, i.createStore)(a["default"]);
    };
    e["default"] = s;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(5), o = r(i), a = n(51), s = n(117), u = r(s), c = n(187), l = r(c), f = n(189), p = r(f), d = n(208), h = r(d), _ = n(209), v = r(_), y = n(210), m = r(y), g = n(211), b = r(g), x = {limit:10, filter:function(t, e, n) {
      return t.isRecord;
    }, debug:!1}, T = (0, b["default"])((0, a.combineReducers)({resize:l["default"], points:(0, u["default"])(p["default"], (0, o["default"])({}, x)), controls:h["default"], pointControls:(0, u["default"])(v["default"], (0, o["default"])({}, x)), progressLines:m["default"]}), ["SET_STATE"], function(t, e) {
      return e.data;
    });
    e["default"] = T;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(188), o = r(i), a = n(5), s = r(a), u = n(114), c = r(u), l = n(137), f = r(l), p = {x:20, tempX:0, y:20, tempY:0, top:0, temp_top:0, right:0, temp_right:0, bottom:0, temp_bottom:0, panY:0, panTempY:0, scalerX:c["default"].CURVE_PERCENT, absScalerX:1}, d = function() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? p : arguments[0], e = arguments[1];
      switch(f["default"].push(t), e.type) {
        case "EDITOR_RESIZE":
          var n = e.data, r = n.type, i = "top" === r || "bottom" === r ? n.y : n.x, a = (0, s["default"])({}, t, (0, o["default"])({}, "temp_" + r, i));
          return "right" === r && (a.scalerX = (c["default"].CURVE_SIZE + Math.max(t.right + i, 0)) / 100, a.absScalerX = a.scalerX / c["default"].CURVE_PERCENT), a;
        case "EDITOR_RESIZE_END":
          var u, l = e.data, d = l.type, h = "top" === d || "bottom" === d ? l.y : l.x, _ = t["" + e.data.type] + h, v = "top" === d ? "min" : "max", y = (0, s["default"])({}, t, (u = {}, (0, o["default"])(u, "" + e.data.type, Math[v](0, _)), (0, o["default"])(u, "temp_" + e.data.type, 0), u));
          return y;
        case "EDITOR_TRANSLATE":
          var m = e.data, g = m.x, b = m.y;
          return (0, s["default"])({}, t, {tempX:g, tempY:b});
        case "EDITOR_TRANSLATE_END":
          var x = e.data, T = x.x, E = x.y;
          return T += t.x, E += t.y, (0, s["default"])({}, t, {x:T, y:E, tempX:0, tempY:0});
        case "EDITOR_PAN":
          var w = e.data;
          return (0, s["default"])({}, t, {panTempY:w});
        case "EDITOR_PAN_END":
          var P = e.data;
          return (0, s["default"])({}, t, {panTempY:0, panY:P + t.panY});
      }
      return t;
    };
    e["default"] = d;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var i = n(44), o = r(i);
    e["default"] = function(t, e, n) {
      return e in t ? (0, o["default"])(t, e, {value:n, enumerable:!0, configurable:!0, writable:!0}) : t[e] = n, t;
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(190), o = r(i), a = n(5), s = r(a), u = n(200), c = r(u), l = n(114), f = (r(l), n(201)), p = r(f), d = n(203), h = r(d), _ = n(206), v = r(_), y = n(207), m = r(y), g = n(137), b = r(g), x = {path:"", name:"mojs_curve_editor", segments:[], points:[]}, T = function() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? x : arguments[0], e = arguments[1];
      switch(b["default"].push(t), e.type) {
        case "SET_EDITOR_NAME":
          return (0, s["default"])({}, t, {name:e.data});
        case "POINT_TRANSLATE":
          var n = e.data, r = n.index, i = t.points, a = i[r], u = [].concat((0, o["default"])(i));
          return u[n.index] = (0, s["default"])({}, a, {tempX:n.x, tempY:n.y}), (0, s["default"])({}, t, {points:u}, (0, h["default"])(u));
        case "POINT_TRANSLATE_END":
          var l = e.data, f = t.points, d = f[l], _ = [].concat((0, o["default"])(f));
          return _[l] = (0, s["default"])({}, d, {x:d.x + d.tempX, y:d.y + d.tempY, tempX:0, tempY:0}), (0, s["default"])({}, t, {points:_}, (0, h["default"])(_));
        case "POINT_SELECT":
          var y = e.data, g = y.index, T = y.isDeselect, E = T ? (0, v["default"])(t) : (0, s["default"])({}, t), w = E.points, P = w[g];
          return P.isSelected = !0, (0, s["default"])({}, t, {points:w});
        case "POINT_ADD":
          var M = e.data, S = M.index, O = M.point, C = (0, v["default"])(t), k = [].concat((0, o["default"])(C.points.slice(0, S)), [(0, c["default"])((0, s["default"])({}, O))], (0, o["default"])(C.points.slice(S))), N = k.length > 1 ? (0, p["default"])(k) : k, j = N.length > 1 ? (0, h["default"])(N) : {};
          return (0, s["default"])({}, t, {points:N}, j);
        case "POINT_DELETE":
          for (var A = t.points, I = (0, m["default"])(A), L = [], R = 0;R < A.length;R++) {
            var D = A[R];
            (I.indexOf(R) === -1 || D.isLockedX) && L.push(D);
          }
          return (0, s["default"])({}, t, {points:L}, (0, h["default"])(L));
        case "POINT_CHANGE_TYPE":
          for (var F = t.points, z = e.data, U = (0, m["default"])(F), Y = [].concat((0, o["default"])(F)), R = 0;R < U.length;R++) {
            var X = U[R], V = (0, s["default"])({}, Y[X], {type:z}), W = X === Y.length - 1 ? 1 : 2, H = 1 === W ? 2 : 1, B = "handle" + W, Z = "handle" + H, q = (0, s["default"])({}, V[B]), G = (0, s["default"])({}, V[Z]);
            "mirrored" !== z && "asymmetric" !== z || (G.angle = q.angle - 180, "mirrored" === z && (G.radius = q.radius)), Y[X] = V, V[B] = q, V[Z] = G;
          }
          return (0, s["default"])({}, t, {points:Y}, (0, h["default"])(Y));
        case "POINT_DESELECT_ALL":
          return (0, s["default"])({}, (0, v["default"])(t));
        case "SET_ACTIVE":
          return e.data ? t : (0, s["default"])({}, (0, v["default"])(t));
        case "HANDLE_TRANSLATE":
          var J = t.points, K = e.data, Q = [].concat((0, o["default"])(J)), $ = (0, s["default"])({}, Q[K.parentIndex]);
          Q[K.parentIndex] = $;
          var tt = "handle" + K.index, et = (0, s["default"])({}, $[tt]);
          return $[tt] = et, et.angle = K.angle, et.radius = K.radius, (0, s["default"])({}, t, {points:Q}, (0, h["default"])(Q));
        case "HANDLE_TRANSLATE_END":
          return t;
        case "POINTS_REMOVE":
          return (0, s["default"])({}, t, {points:[]});
      }
      return t;
    };
    e["default"] = T;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var i = n(191), o = r(i);
    e["default"] = function(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length);e < t.length;e++) {
          n[e] = t[e];
        }
        return n;
      }
      return (0, o["default"])(t);
    };
  }, function(t, e, n) {
    t.exports = {"default":n(192), __esModule:!0};
  }, function(t, e, n) {
    n(75), n(193), t.exports = n(4).Array.from;
  }, function(t, e, n) {
    var r = n(11), i = n(9), o = n(41), a = n(194), s = n(195), u = n(32), c = n(196), l = n(197);
    i(i.S + i.F * !n(199)(function(t) {
      Array.from(t);
    }), "Array", {from:function(t) {
      var e, n, i, f, p = o(t), d = "function" == typeof this ? this : Array, h = arguments.length, _ = h > 1 ? arguments[1] : void 0, v = void 0 !== _, y = 0, m = l(p);
      if (v && (_ = r(_, h > 2 ? arguments[2] : void 0, 2)), void 0 == m || d == Array && s(m)) {
        for (e = u(p.length), n = new d(e);e > y;y++) {
          c(n, y, v ? _(p[y], y) : p[y]);
        }
      } else {
        for (f = m.call(p), n = new d;!(i = f.next()).done;y++) {
          c(n, y, v ? a(f, _, [i.value, y], !0) : i.value);
        }
      }
      return n.length = y, n;
    }});
  }, function(t, e, n) {
    var r = n(15);
    t.exports = function(t, e, n, i) {
      try {
        return i ? e(r(n)[0], n[1]) : e(n);
      } catch (o) {
        var a = t["return"];
        throw void 0 !== a && r(a.call(t)), o;
      }
    };
  }, function(t, e, n) {
    var r = n(80), i = n(86)("iterator"), o = Array.prototype;
    t.exports = function(t) {
      return void 0 !== t && (r.Array === t || o[i] === t);
    };
  }, function(t, e, n) {
    var r = n(14), i = n(22);
    t.exports = function(t, e, n) {
      e in t ? r.f(t, e, i(0, n)) : t[e] = n;
    };
  }, function(t, e, n) {
    var r = n(198), i = n(86)("iterator"), o = n(80);
    t.exports = n(4).getIteratorMethod = function(t) {
      if (void 0 != t) {
        return t[i] || t["@@iterator"] || o[r(t)];
      }
    };
  }, function(t, e, n) {
    var r = n(29), i = n(86)("toStringTag"), o = "Arguments" == r(function() {
      return arguments;
    }()), a = function(t, e) {
      try {
        return t[e];
      } catch (n) {
      }
    };
    t.exports = function(t) {
      var e, n, s;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = a(e = Object(t), i)) ? n : o ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s;
    };
  }, function(t, e, n) {
    var r = n(86)("iterator"), i = !1;
    try {
      var o = [7][r]();
      o["return"] = function() {
        i = !0;
      }, Array.from(o, function() {
        throw 2;
      });
    } catch (a) {
    }
    t.exports = function(t, e) {
      if (!e && !i) {
        return !1;
      }
      var n = !1;
      try {
        var o = [7], a = o[r]();
        a.next = function() {
          return {done:n = !0};
        }, o[r] = function() {
          return a;
        }, t(o);
      } catch (s) {
      }
      return n;
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(5), o = r(i), a = function(t, e) {
      return null != t ? t : e;
    }, s = function() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
      return {index:a(t.index, 0), angle:a(t.angle, null), radius:a(t.radius, null), isTouched:a(t.isTouched, !1), isSelected:a(t.isSelected, !1)};
    }, u = function() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
      return {x:a(t.x, 0), y:a(t.y, 0), tempX:a(t.tempX, 0), tempY:a(t.tempY, 0), isTouched:a(t.isTouched, !1), isSelected:a(t.isSelected, !1)};
    }, c = function() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
      return (0, o["default"])({isLockedX:a(t.isLockedX, !1), isLockedY:a(t.isLockedY, !1), type:a(t.type, "straight")}, u(t), {handle1:s(t.handle1 || {index:1}), handle2:s(t.handle2 || {index:2})});
    };
    e["default"] = c;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(202), o = r(i);
    e["default"] = function(t) {
      for (var e = [], n = 0;n < t.length;n++) {
        var r = t[n], i = n === t.length - 1 ? t[n - 1] : t[n + 1], a = n === t.length - 1 ? 1 : 2;
        e.push((0, o["default"])(r, i, a));
      }
      return e;
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(5), o = r(i), a = n(114), s = r(a);
    e["default"] = function(t, e, n) {
      t = (0, o["default"])({}, t);
      var r = "handle" + n, i = 1 === n ? 2 : 1, a = "handle" + i, u = (0, o["default"])({}, t[r]), c = (0, o["default"])({}, t[a]);
      t.type;
      if (t[r] = u, t[a] = c, null == u.angle || null == u.radius) {
        u.radius = 50;
        var l = (e.y - t.y) / s["default"].CURVE_PERCENT, f = e.x - t.x, p = Math.atan(l / f) * (180 / Math.PI) - 90;
        f > 0 && (p -= 180), u.angle = p, c.radius = u.radius, c.angle = u.angle - 180;
      }
      return t;
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(204), o = r(i);
    e["default"] = function(t) {
      for (var e = "", n = [], r = 0;r < t.length - 1;r++) {
        var i = t[r], a = t[r + 1], s = (0, o["default"])(i, a, r);
        n.push(s), e += s.string;
      }
      return {path:e, segments:n};
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(114), o = r(i), a = n(205), s = r(a);
    e["default"] = function(t, e, n) {
      if (!e) {
        return 1;
      }
      var r = "", i = "", a = t.x + t.tempX, u = t.y + t.tempY, c = e.x + e.tempX, l = e.y + e.tempY, f = "M" + a + ", " + u / o["default"].CURVE_PERCENT + " ";
      0 === n && (r += f), i += f;
      var p = (0, s["default"])(t, 2);
      r += p, i += p;
      var d = (0, s["default"])(e, 1);
      r += d, i += d;
      var h = c + ", " + l / o["default"].CURVE_PERCENT + " ";
      return r += h, i += h, {string:r, segmentString:i, index:n};
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(120), o = r(i), a = n(114), s = r(a);
    e["default"] = function(t) {
      var e = arguments.length <= 1 || void 0 === arguments[1] ? 1 : arguments[1], n = t.x + t.tempX, r = t.y + t.tempY, i = t["handle" + e], a = 2 === e ? "C" : "";
      if ("straight" !== t.type) {
        var u = (0, o["default"])(i.angle, i.radius);
        return "" + a + (n + u.x / s["default"].CURVE_PERCENT) + ", " + (r + u.y) / s["default"].CURVE_PERCENT + " ";
      }
      return "" + a + n + ", " + r / s["default"].CURVE_PERCENT + " ";
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(5), o = r(i);
    e["default"] = function(t) {
      for (var e = (0, o["default"])({}, t, {points:[]}), n = t.points, r = 0;r < n.length;r++) {
        e.points.push((0, o["default"])({}, n[r], {isSelected:!1}));
      }
      return e;
    };
  }, function(t, e) {
    Object.defineProperty(e, "__esModule", {value:!0}), e["default"] = function(t) {
      for (var e = [], n = 0;n < t.length;n++) {
        t[n].isSelected && e.push(n);
      }
      return e;
    };
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(5), o = r(i), a = n(203), s = (r(a), n(137)), u = r(s), c = {isCode:!1, isMinimize:!1, isActive:!1, isHighlight:!1}, l = function() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? c : arguments[0], e = arguments[1];
      switch(u["default"].push(t), e.type) {
        case "CODE_TAP":
          return (0, o["default"])({}, t, {isCode:!t.isCode});
        case "SET_MINIMIZE":
          return (0, o["default"])({}, t, {isMinimize:e.data});
        case "SET_ACTIVE":
          return (0, o["default"])({}, t, {isActive:e.data});
      }
      return t;
    };
    e["default"] = l;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(5), o = r(i), a = n(137), s = r(a), u = {isShow:!1, type:"straight"}, c = function() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? u : arguments[0], e = arguments[1];
      switch(s["default"].push(t), e.type) {
        case "POINT_SELECT":
          var n = e.data.type;
          return (0, o["default"])({}, t, {isShow:!e.isDeselect, type:n});
        case "POINT_CHANGE_TYPE":
          return (0, o["default"])({}, t, {type:e.data});
        case "POINT_DESELECT_ALL":
          return (0, o["default"])({}, t, {isShow:!1});
      }
      return t;
    };
    e["default"] = c;
  }, function(t, e, n) {
    function r(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    Object.defineProperty(e, "__esModule", {value:!0});
    var i = n(190), o = r(i), a = n(5), s = r(a), u = n(137), c = r(u), l = {selected:0, lines:[]}, f = function(t) {
      var e = ["#FF512F", "#FF00C5", "#00FF69", "white", "#1B8FE6", "CYAN", "YELLOW"];
      return e[t.length % e.length];
    }, p = function() {
      var t = (arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], arguments[1]), e = t.lines;
      return {color:f(e), name:"easing" + (e.length + 1)};
    }, d = function() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? l : arguments[0], e = arguments[1];
      switch(c["default"].push(t), e.type) {
        case "ADD_PROGRESS_LINE":
          var n = (0, s["default"])({}, t);
          return n.lines = [].concat((0, o["default"])(n.lines), [p(e.data, t)]), n;
        case "SET_SELECTED_PROGRESS_LINE":
          var r = e.index;
          return (0, s["default"])({}, t, {selected:r});
      }
      return t;
    };
    e["default"] = d;
  }, function(t, e) {
    function n(t) {
      var e = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1], n = arguments[2], r = "function" == typeof n ? n : function() {
        return n;
      };
      return function(n, i) {
        return e.indexOf(i.type) >= 0 ? t(r(n, i), {type:"@@redux-recycle/INIT"}) : t(n, i);
      };
    }
    Object.defineProperty(e, "__esModule", {value:!0}), e["default"] = n;
  }, function(t, e) {
    Object.defineProperty(e, "__esModule", {value:!0}), e["default"] = function(t, e) {
      return null != t ? t : e;
    };
  }, function(t, e) {
    Object.defineProperty(e, "__esModule", {value:!0}), e["default"] = function(t) {
      setTimeout(t, 1);
    };
  }]);
});
