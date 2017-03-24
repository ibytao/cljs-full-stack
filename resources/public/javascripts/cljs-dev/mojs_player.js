goog.provide("module$resources$public$vendor$js$mojs_player");
var exports$$module$resources$public$vendor$js$mojs_player = module$resources$public$vendor$js$mojs_player;
var module$resources$public$vendor$js$mojs_player;
!function(t, e) {
  "object" == typeof exports$$module$resources$public$vendor$js$mojs_player && "object" == typeof module ? module$resources$public$vendor$js$mojs_player = e() : "function" == typeof define && define.amd ? define("mojs_player", [], e) : "object" == typeof exports$$module$resources$public$vendor$js$mojs_player ? exports$$module$resources$public$vendor$js$mojs_player["mojs_player"] = e() : t["mojs_player"] = e();
}(this, function() {
  return function(t) {
    function e(i) {
      if (n[i]) {
        return n[i].exports;
      }
      var o = n[i] = {exports:{}, id:i, loaded:!1};
      return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "build/", e(0);
  }([function(t, e, n) {
    t.exports = n(1);
  }, function(t, e, n) {
    var i;
    (function(t, o) {
      function r(t) {
        return t && t.__esModule ? t : {"default":t};
      }
      e.__esModule = !0;
      var s = n(3), a = r(s), u = n(71), l = r(u), p = n(73), h = r(p), c = n(78), d = r(c), f = n(79), _ = r(f), g = n(80), y = r(g), v = n(88), m = (r(v), n(89)), b = r(m), x = n(90), w = r(x), S = n(91), P = r(S), k = n(111), T = r(k), C = n(123), E = r(C), M = n(135), O = r(M), L = n(143), B = r(L), j = n(147), D = r(j), I = n(155), R = r(I), A = n(156), F = r(A);
      n(160);
      var N = n(162), q = function(t) {
        function e(n) {
          if ((0, d["default"])(this, e), "undefined" == typeof mojs) {
            throw new Error("MojsPlayer relies on mojs^0.225.2, please include it before player initialization. [ https://github.com/legomushroom/mojs ] ");
          }
          return (0, _["default"])(this, t.call(this, n));
        }
        return (0, y["default"])(e, t), e.prototype._declareDefaults = function() {
          t.prototype._declareDefaults.call(this), this._defaults.isSaveState = !0, this._defaults.isPlaying = !1, this._defaults.progress = 0, this._defaults.isRepeat = !1, this._defaults.isBounds = !1, this._defaults.leftBound = 0, this._defaults.rightBound = 1, this._defaults.isSpeed = !1, this._defaults.speed = 1, this._defaults.isHidden = !1, this._defaults.precision = .1, this._defaults.name = "mojs_player", this.revision = "0.43.15";
          var e = this._fallbackTo(this._o.name, this._defaults.name);
          e += e === this._defaults.name ? "" : "__" + this._defaults.name, this._localStorage = e + "__" + this._hashCode(e);
        }, e.prototype._extendDefaults = function() {
          this._props = {};
          var t = this._props, e = this._o, n = this._defaults;
          t.isSaveState = this._fallbackTo(e.isSaveState, n.isSaveState);
          var i = t.isSaveState ? JSON.parse(localStorage.getItem(this._localStorage)) || {} : {};
          for (var o in n) {
            var r = this._fallbackTo(i[o], e[o]);
            this._assignProp(o, this._fallbackTo(r, n[o]));
          }
          this._props["raw-speed"] = this._fallbackTo(i["raw-speed"], .5);
        }, e.prototype._keyUp = function(t) {
          if (t.altKey) {
            switch(t.keyCode) {
              case 80:
                this._props.isPlaying = !this._props.isPlaying, this._onPlayStateChange(this._props.isPlaying);
                break;
              case 189:
                this.playButton.off(), this.playerSlider.decreaseProgress(t.shiftKey ? .1 : .01);
                break;
              case 187:
                this.playButton.off(), this.playerSlider.increaseProgress(t.shiftKey ? .1 : .01);
                break;
              case 83:
                this._onStop();
                break;
              case 82:
                this._props.isRepeat = !this._props.isRepeat;
                var e = this._props.isRepeat ? "on" : "off";
                this.repeatButton[e]();
                break;
              case 66:
                this._props.isBounds = !this._props.isBounds;
                var e = this._props.isBounds ? "on" : "off";
                this.boundsButton[e]();
                break;
              case 72:
                this._props.isHidden = !this._props.isHidden, this._onHideStateChange(this._props.isHidden);
                var e = this._props.isHidden ? "on" : "off";
                this.hideButton[e]();
                break;
              case 81:
                this.speedControl.reset();
                break;
              case 50:
                this.speedControl.decreaseSpeed(t.shiftKey ? .05 : .01);
                break;
              case 51:
                this.speedControl.increaseSpeed(t.shiftKey ? .05 : .01);
            }
          }
        }, e.prototype._vars = function() {
          this._hideCount = 0;
        }, e.prototype._render = function() {
          this._initTimeline();
          var e = this._props, n = "mojs_player";
          new b["default"]({prefix:this._props.prefix});
          t.prototype._render.call(this), this.el.classList.add(N[n]), this.el.setAttribute("id", "js-mojs_player");
          var i = this._createChild("div", N[n + "__left"]), o = this._createChild("div", N[n + "__mid"]), r = this._createChild("div", N[n + "__right"]);
          this.repeatButton = new D["default"]({parent:i, isOn:e.isRepeat, onStateChange:this._onRepeatStateChange.bind(this), prefix:this._props.prefix}), this.playerSlider = new P["default"]({parent:o, isBounds:e.isBounds, leftProgress:e.leftBound, rightProgress:e.rightBound, progress:e.progress, onLeftProgress:this._onLeftProgress.bind(this), onProgress:this._onProgress.bind(this), onRightProgress:this._onRightProgress.bind(this), onSeekStart:this._onSeekStart.bind(this), onSeekEnd:this._onSeekEnd.bind(this)}), 
          this.boundsButton = new R["default"]({isOn:e.isBounds, parent:i, onStateChange:this._boundsStateChange.bind(this), prefix:this._props.prefix}), this.speedControl = new E["default"]({parent:i, speed:e.speed, isOn:e.isSpeed, onSpeedChange:this._onSpeedChange.bind(this), onIsSpeed:this._onIsSpeed.bind(this), prefix:this._props.prefix});
          this.stopButton = new B["default"]({parent:i, isPrepend:!0, onPointerUp:this._onStop.bind(this), prefix:this._props.prefix}), this.playButton = new O["default"]({parent:i, isOn:e.isPlaying, isPrepend:!0, onStateChange:this._onPlayStateChange.bind(this), prefix:this._props.prefix}), this.mojsButton = new T["default"]({parent:r, icon:"mojs", target:"_blank", link:"https://github.com/legomushroom/mojs_player", title:"mo • js", prefix:this._props.prefix}), this.hideButton = new F["default"]({parent:this.el, 
          className:N[n + "__hide-button"], isOn:e.isHidden, onStateChange:this._onHideStateChange.bind(this), prefix:this._props.prefix}), this._listen();
        }, e.prototype._listen = function() {
          var t = "onpagehide" in window ? "pagehide" : "beforeunload";
          window.addEventListener(t, this._onUnload.bind(this)), document.addEventListener("keyup", this._keyUp.bind(this));
        }, e.prototype._onSeekStart = function(t) {
          this._sysTween.pause();
        }, e.prototype._onSeekEnd = function(t) {
          var e = this;
          clearTimeout(this._endTimer), this._endTimer = setTimeout(function() {
            e._props.isPlaying && e._play();
          }, 20);
        }, e.prototype._initTimeline = function() {
          var t = this;
          this.timeline = new mojs.Timeline({});
          var e = this._o.add, n = "undefined" == typeof e;
          n || (e = e.timeline || e);
          var i = e instanceof mojs.Tween, o = e instanceof mojs.Timeline;
          if (n || !i && !o) {
            throw new Error("MojsPlayer expects Tween/Timeline/Module as `add` option in constructor call. [ new MojsPlayer({ add: new mojs.Tween }); ]");
          }
          this.timeline.add(this._o.add), this._sysTween = new mojs.Tween({easing:"linear.none", duration:this.timeline._props.repeatTime, onProgress:this._onSysProgress.bind(this), onComplete:this._onSysTweenComplete.bind(this), onPlaybackStop:function() {
            t._setPlayState("off");
          }, onPlaybackPause:function() {
            t._setPlayState("off");
          }, onPlaybackStart:function() {
            t._setPlayState("on");
          }});
        }, e.prototype._onSysProgress = function(t) {
          this.playerSlider.setTrackProgress(t);
          var e = this._props.isBounds ? this._props.rightBound : 1, n = this._props.isBounds ? this._props.leftBound : -1;
          n - .01 > t && 0 !== t && (this._reset(), requestAnimationFrame(this._play.bind(this))), t >= e && (this._reset(1 === e), this._props.isRepeat ? requestAnimationFrame(this._play.bind(this)) : this._props.isPlaying = !1);
        }, e.prototype._play = function() {
          var t = this._props, e = t.isBounds ? t.leftBound : t.progress, n = t.progress >= this._getBound("right") ? e : t.progress;
          1 === n && (n = t.isBounds ? t.leftBound : 0), 0 !== n && this._sysTween.setProgress(n), this._sysTween.play();
        }, e.prototype._reset = function(t) {
          if (this._sysTween.reset(), !t) {
            for (var e = this._props, n = e.progress, i = n, o = e.isBounds ? e.leftBound : 0;i - e.precision >= o;) {
              i -= e.precision, this.timeline.setProgress(i);
            }
          }
          this.timeline.reset();
        }, e.prototype._setPlayState = function(t) {
          var e = this;
          clearTimeout(this._playTimeout), this._playTimeout = setTimeout(function() {
            e.playButton && e.playButton[t](!1);
          }, 20);
        }, e.prototype._onSysTweenComplete = function(t) {
        }, e.prototype._onPlayStateChange = function(t) {
          this._props.isPlaying = t, t ? this._play() : this._sysTween.pause();
        }, e.prototype._onHideStateChange = function(t) {
          this._props.isHidden = t;
          var e = t ? "add" : "remove";
          this.el.classList[e](N["is-hidden"]), 1 === this._hideCount++ && this.el.classList.add(N["is-transition"]);
        }, e.prototype._onStop = function() {
          var t = this._props;
          t.isPlaying = !1;
          var e = t.isBounds ? t.leftBound : 0;
          this._sysTween.setProgress(e + .01), this._sysTween.setProgress(e), this._reset();
        }, e.prototype._onRepeatStateChange = function(t) {
          this._props.isRepeat = t;
        }, e.prototype._boundsStateChange = function(t) {
          this.playerSlider._props.isBounds = t, this.playerSlider[(t ? "enable" : "disable") + "Bounds"](), this._props.isBounds = t;
        }, e.prototype._onSpeedChange = function(t, e) {
          this._props["raw-speed"] = e, this._props.speed = t, this._sysTween.setSpeed(t);
        }, e.prototype._onIsSpeed = function(t) {
          this._props.isSpeed = t;
        }, e.prototype._onLeftProgress = function(t) {
          this._props.leftBound = t;
        }, e.prototype._onProgress = function(t) {
          if (this._props.progress = t, !this.timeline._prevTime && t > 0) {
            var e = 0;
            do {
              this.timeline.setProgress(e), e += this._props.precision;
            } while (e + this._props.precision < t);
          }
          this.timeline.setProgress(t);
        }, e.prototype._onRightProgress = function(t) {
          this._props.rightBound = t;
        }, e.prototype._onUnload = function(t) {
          if (!this._props.isSaveState) {
            return localStorage.removeItem(this._localStorage);
          }
          var e = (0, h["default"])({}, this._props);
          delete e.parent, delete e.className, delete e.isSaveState, delete e.precision, localStorage.setItem(this._localStorage, (0, l["default"])(e));
        }, e.prototype._fallbackTo = function(t, e) {
          return null != t ? t : e;
        }, e.prototype._getBound = function(t) {
          var e = this._props, n = "left" === t ? 0 : 1;
          return e.isBounds ? e[t + "Bound"] : n;
        }, e.prototype._defer = function(t) {
          setTimeout(t.bind(this), 1);
        }, e.prototype._hashCode = function(t) {
          var e, n, i, o = 0;
          if (0 === t.length) {
            return o;
          }
          for (e = 0, i = t.length;i > e;e++) {
            n = t.charCodeAt(e), o = (o << 5) - o + n, o |= 0;
          }
          return Math.abs(o);
        }, e;
      }(w["default"]);
      i = function() {
        return q;
      }.call(e, n, e, t), !(void 0 !== i && (t.exports = i)), "object" === (0, a["default"])(t) && "object" === (0, a["default"])(t.exports) && (t.exports = q);
      var z = "undefined" != typeof o ? o : window;
      z.MojsPlayer = q, e["default"] = q;
    }).call(e, n(2)(t), function() {
      return this;
    }());
  }, function(t, e) {
    t.exports = function(t) {
      return t.webpackPolyfill || (t.deprecate = function() {
      }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t;
    };
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(4), r = i(o), s = n(55), a = i(s), u = "function" == typeof a["default"] && "symbol" == typeof r["default"] ? function(t) {
      return typeof t;
    } : function(t) {
      return t && "function" == typeof a["default"] && t.constructor === a["default"] ? "symbol" : typeof t;
    };
    e["default"] = "function" == typeof a["default"] && "symbol" === u(r["default"]) ? function(t) {
      return "undefined" == typeof t ? "undefined" : u(t);
    } : function(t) {
      return t && "function" == typeof a["default"] && t.constructor === a["default"] ? "symbol" : "undefined" == typeof t ? "undefined" : u(t);
    };
  }, function(t, e, n) {
    t.exports = {"default":n(5), __esModule:!0};
  }, function(t, e, n) {
    n(6), n(50), t.exports = n(54).f("iterator");
  }, function(t, e, n) {
    var i = n(7)(!0);
    n(10)(String, "String", function(t) {
      this._t = String(t), this._i = 0;
    }, function() {
      var t, e = this._t, n = this._i;
      return n >= e.length ? {value:void 0, done:!0} : (t = i(e, n), this._i += t.length, {value:t, done:!1});
    });
  }, function(t, e, n) {
    var i = n(8), o = n(9);
    t.exports = function(t) {
      return function(e, n) {
        var r, s, a = String(o(e)), u = i(n), l = a.length;
        return 0 > u || u >= l ? t ? "" : void 0 : (r = a.charCodeAt(u), 55296 > r || r > 56319 || u + 1 === l || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? a.charAt(u) : r : t ? a.slice(u, u + 2) : (r - 55296 << 10) + (s - 56320) + 65536);
      };
    };
  }, function(t, e) {
    var n = Math.ceil, i = Math.floor;
    t.exports = function(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t);
    };
  }, function(t, e) {
    t.exports = function(t) {
      if (void 0 == t) {
        throw TypeError("Can't call method on  " + t);
      }
      return t;
    };
  }, function(t, e, n) {
    var i = n(11), o = n(12), r = n(27), s = n(17), a = n(28), u = n(29), l = n(30), p = n(46), h = n(48), c = n(47)("iterator"), d = !([].keys && "next" in [].keys()), f = "@@iterator", _ = "keys", g = "values", y = function() {
      return this;
    };
    t.exports = function(t, e, n, v, m, b, x) {
      l(n, e, v);
      var w, S, P, k = function(t) {
        if (!d && t in M) {
          return M[t];
        }
        switch(t) {
          case _:
            return function() {
              return new n(this, t);
            };
          case g:
            return function() {
              return new n(this, t);
            };
        }
        return function() {
          return new n(this, t);
        };
      }, T = e + " Iterator", C = m == g, E = !1, M = t.prototype, O = M[c] || M[f] || m && M[m], L = O || k(m), B = m ? C ? k("entries") : L : void 0, j = "Array" == e ? M.entries || O : O;
      if (j && (P = h(j.call(new t)), P !== Object.prototype && (p(P, T, !0), i || a(P, c) || s(P, c, y))), C && O && O.name !== g && (E = !0, L = function() {
        return O.call(this);
      }), i && !x || !d && !E && M[c] || s(M, c, L), u[e] = L, u[T] = y, m) {
        if (w = {values:C ? L : k(g), keys:b ? L : k(_), entries:B}, x) {
          for (S in w) {
            S in M || r(M, S, w[S]);
          }
        } else {
          o(o.P + o.F * (d || E), e, w);
        }
      }
      return w;
    };
  }, function(t, e) {
    t.exports = !0;
  }, function(t, e, n) {
    var i = n(13), o = n(14), r = n(15), s = n(17), a = "prototype", u = function(t, e, n) {
      var l, p, h, c = t & u.F, d = t & u.G, f = t & u.S, _ = t & u.P, g = t & u.B, y = t & u.W, v = d ? o : o[e] || (o[e] = {}), m = v[a], b = d ? i : f ? i[e] : (i[e] || {})[a];
      d && (n = e);
      for (l in n) {
        p = !c && b && void 0 !== b[l], p && l in v || (h = p ? b[l] : n[l], v[l] = d && "function" != typeof b[l] ? n[l] : g && p ? r(h, i) : y && b[l] == h ? function(t) {
          var e = function(e, n, i) {
            if (this instanceof t) {
              switch(arguments.length) {
                case 0:
                  return new t;
                case 1:
                  return new t(e);
                case 2:
                  return new t(e, n);
              }
              return new t(e, n, i);
            }
            return t.apply(this, arguments);
          };
          return e[a] = t[a], e;
        }(h) : _ && "function" == typeof h ? r(Function.call, h) : h, _ && ((v.virtual || (v.virtual = {}))[l] = h, t & u.R && m && !m[l] && s(m, l, h)));
      }
    };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
  }, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n);
  }, function(t, e) {
    var n = t.exports = {version:"2.4.0"};
    "number" == typeof __e && (__e = n);
  }, function(t, e, n) {
    var i = n(16);
    t.exports = function(t, e, n) {
      if (i(t), void 0 === e) {
        return t;
      }
      switch(n) {
        case 1:
          return function(n) {
            return t.call(e, n);
          };
        case 2:
          return function(n, i) {
            return t.call(e, n, i);
          };
        case 3:
          return function(n, i, o) {
            return t.call(e, n, i, o);
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
    var i = n(18), o = n(26);
    t.exports = n(22) ? function(t, e, n) {
      return i.f(t, e, o(1, n));
    } : function(t, e, n) {
      return t[e] = n, t;
    };
  }, function(t, e, n) {
    var i = n(19), o = n(21), r = n(25), s = Object.defineProperty;
    e.f = n(22) ? Object.defineProperty : function(t, e, n) {
      if (i(t), e = r(e, !0), i(n), o) {
        try {
          return s(t, e, n);
        } catch (a) {
        }
      }
      if ("get" in n || "set" in n) {
        throw TypeError("Accessors not supported!");
      }
      return "value" in n && (t[e] = n.value), t;
    };
  }, function(t, e, n) {
    var i = n(20);
    t.exports = function(t) {
      if (!i(t)) {
        throw TypeError(t + " is not an object!");
      }
      return t;
    };
  }, function(t, e) {
    t.exports = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  }, function(t, e, n) {
    t.exports = !n(22) && !n(23)(function() {
      return 7 != Object.defineProperty(n(24)("div"), "a", {get:function() {
        return 7;
      }}).a;
    });
  }, function(t, e, n) {
    t.exports = !n(23)(function() {
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
    var i = n(20), o = n(13).document, r = i(o) && i(o.createElement);
    t.exports = function(t) {
      return r ? o.createElement(t) : {};
    };
  }, function(t, e, n) {
    var i = n(20);
    t.exports = function(t, e) {
      if (!i(t)) {
        return t;
      }
      var n, o;
      if (e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) {
        return o;
      }
      if ("function" == typeof(n = t.valueOf) && !i(o = n.call(t))) {
        return o;
      }
      if (!e && "function" == typeof(n = t.toString) && !i(o = n.call(t))) {
        return o;
      }
      throw TypeError("Can't convert object to primitive value");
    };
  }, function(t, e) {
    t.exports = function(t, e) {
      return {enumerable:!(1 & t), configurable:!(2 & t), writable:!(4 & t), value:e};
    };
  }, function(t, e, n) {
    t.exports = n(17);
  }, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return n.call(t, e);
    };
  }, function(t, e) {
    t.exports = {};
  }, function(t, e, n) {
    var i = n(31), o = n(26), r = n(46), s = {};
    n(17)(s, n(47)("iterator"), function() {
      return this;
    }), t.exports = function(t, e, n) {
      t.prototype = i(s, {next:o(1, n)}), r(t, e + " Iterator");
    };
  }, function(t, e, n) {
    var i = n(19), o = n(32), r = n(44), s = n(41)("IE_PROTO"), a = function() {
    }, u = "prototype", l = function() {
      var t, e = n(24)("iframe"), i = r.length, o = "\x3e";
      for (e.style.display = "none", n(45).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("\x3cscript\x3edocument.F\x3dObject\x3c/script" + o), t.close(), l = t.F;i--;) {
        delete l[u][r[i]];
      }
      return l();
    };
    t.exports = Object.create || function(t, e) {
      var n;
      return null !== t ? (a[u] = i(t), n = new a, a[u] = null, n[s] = t) : n = l(), void 0 === e ? n : o(n, e);
    };
  }, function(t, e, n) {
    var i = n(18), o = n(19), r = n(33);
    t.exports = n(22) ? Object.defineProperties : function(t, e) {
      o(t);
      for (var n, s = r(e), a = s.length, u = 0;a > u;) {
        i.f(t, n = s[u++], e[n]);
      }
      return t;
    };
  }, function(t, e, n) {
    var i = n(34), o = n(44);
    t.exports = Object.keys || function(t) {
      return i(t, o);
    };
  }, function(t, e, n) {
    var i = n(28), o = n(35), r = n(38)(!1), s = n(41)("IE_PROTO");
    t.exports = function(t, e) {
      var n, a = o(t), u = 0, l = [];
      for (n in a) {
        n != s && i(a, n) && l.push(n);
      }
      for (;e.length > u;) {
        i(a, n = e[u++]) && (~r(l, n) || l.push(n));
      }
      return l;
    };
  }, function(t, e, n) {
    var i = n(36), o = n(9);
    t.exports = function(t) {
      return i(o(t));
    };
  }, function(t, e, n) {
    var i = n(37);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
      return "String" == i(t) ? t.split("") : Object(t);
    };
  }, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
      return n.call(t).slice(8, -1);
    };
  }, function(t, e, n) {
    var i = n(35), o = n(39), r = n(40);
    t.exports = function(t) {
      return function(e, n, s) {
        var a, u = i(e), l = o(u.length), p = r(s, l);
        if (t && n != n) {
          for (;l > p;) {
            if (a = u[p++], a != a) {
              return !0;
            }
          }
        } else {
          for (;l > p;p++) {
            if ((t || p in u) && u[p] === n) {
              return t || p || 0;
            }
          }
        }
        return !t && -1;
      };
    };
  }, function(t, e, n) {
    var i = n(8), o = Math.min;
    t.exports = function(t) {
      return t > 0 ? o(i(t), 9007199254740991) : 0;
    };
  }, function(t, e, n) {
    var i = n(8), o = Math.max, r = Math.min;
    t.exports = function(t, e) {
      return t = i(t), 0 > t ? o(t + e, 0) : r(t, e);
    };
  }, function(t, e, n) {
    var i = n(42)("keys"), o = n(43);
    t.exports = function(t) {
      return i[t] || (i[t] = o(t));
    };
  }, function(t, e, n) {
    var i = n(13), o = "__core-js_shared__", r = i[o] || (i[o] = {});
    t.exports = function(t) {
      return r[t] || (r[t] = {});
    };
  }, function(t, e) {
    var n = 0, i = Math.random();
    t.exports = function(t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36));
    };
  }, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function(t, e, n) {
    t.exports = n(13).document && document.documentElement;
  }, function(t, e, n) {
    var i = n(18).f, o = n(28), r = n(47)("toStringTag");
    t.exports = function(t, e, n) {
      t && !o(t = n ? t : t.prototype, r) && i(t, r, {configurable:!0, value:e});
    };
  }, function(t, e, n) {
    var i = n(42)("wks"), o = n(43), r = n(13).Symbol, s = "function" == typeof r, a = t.exports = function(t) {
      return i[t] || (i[t] = s && r[t] || (s ? r : o)("Symbol." + t));
    };
    a.store = i;
  }, function(t, e, n) {
    var i = n(28), o = n(49), r = n(41)("IE_PROTO"), s = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
      return t = o(t), i(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null;
    };
  }, function(t, e, n) {
    var i = n(9);
    t.exports = function(t) {
      return Object(i(t));
    };
  }, function(t, e, n) {
    n(51);
    for (var i = n(13), o = n(17), r = n(29), s = n(47)("toStringTag"), a = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0;5 > u;u++) {
      var l = a[u], p = i[l], h = p && p.prototype;
      h && !h[s] && o(h, s, l), r[l] = r.Array;
    }
  }, function(t, e, n) {
    var i = n(52), o = n(53), r = n(29), s = n(35);
    t.exports = n(10)(Array, "Array", function(t, e) {
      this._t = s(t), this._i = 0, this._k = e;
    }, function() {
      var t = this._t, e = this._k, n = this._i++;
      return !t || n >= t.length ? (this._t = void 0, o(1)) : "keys" == e ? o(0, n) : "values" == e ? o(0, t[n]) : o(0, [n, t[n]]);
    }, "values"), r.Arguments = r.Array, i("keys"), i("values"), i("entries");
  }, function(t, e) {
    t.exports = function() {
    };
  }, function(t, e) {
    t.exports = function(t, e) {
      return {value:e, done:!!t};
    };
  }, function(t, e, n) {
    e.f = n(47);
  }, function(t, e, n) {
    t.exports = {"default":n(56), __esModule:!0};
  }, function(t, e, n) {
    n(57), n(68), n(69), n(70), t.exports = n(14).Symbol;
  }, function(t, e, n) {
    var i = n(13), o = n(28), r = n(22), s = n(12), a = n(27), u = n(58).KEY, l = n(23), p = n(42), h = n(46), c = n(43), d = n(47), f = n(54), _ = n(59), g = n(60), y = n(61), v = n(64), m = n(19), b = n(35), x = n(25), w = n(26), S = n(31), P = n(65), k = n(67), T = n(18), C = n(33), E = k.f, M = T.f, O = P.f, L = i.Symbol, B = i.JSON, j = B && B.stringify, D = "prototype", I = d("_hidden"), R = d("toPrimitive"), A = {}.propertyIsEnumerable, F = p("symbol-registry"), N = p("symbols"), q = p("op-symbols"), 
    z = Object[D], U = "function" == typeof L, X = i.QObject, H = !X || !X[D] || !X[D].findChild, W = r && l(function() {
      return 7 != S(M({}, "a", {get:function() {
        return M(this, "a", {value:7}).a;
      }})).a;
    }) ? function(t, e, n) {
      var i = E(z, e);
      i && delete z[e], M(t, e, n), i && t !== z && M(z, e, i);
    } : M, Y = function(t) {
      var e = N[t] = S(L[D]);
      return e._k = t, e;
    }, V = U && "symbol" == typeof L.iterator ? function(t) {
      return "symbol" == typeof t;
    } : function(t) {
      return t instanceof L;
    }, Z = function(t, e, n) {
      return t === z && Z(q, e, n), m(t), e = x(e, !0), m(n), o(N, e) ? (n.enumerable ? (o(t, I) && t[I][e] && (t[I][e] = !1), n = S(n, {enumerable:w(0, !1)})) : (o(t, I) || M(t, I, w(1, {})), t[I][e] = !0), W(t, e, n)) : M(t, e, n);
    }, G = function(t, e) {
      m(t);
      for (var n, i = y(e = b(e)), o = 0, r = i.length;r > o;) {
        Z(t, n = i[o++], e[n]);
      }
      return t;
    }, $ = function(t, e) {
      return void 0 === e ? S(t) : G(S(t), e);
    }, J = function(t) {
      var e = A.call(this, t = x(t, !0));
      return this === z && o(N, t) && !o(q, t) ? !1 : e || !o(this, t) || !o(N, t) || o(this, I) && this[I][t] ? e : !0;
    }, K = function(t, e) {
      if (t = b(t), e = x(e, !0), t !== z || !o(N, e) || o(q, e)) {
        var n = E(t, e);
        return !n || !o(N, e) || o(t, I) && t[I][e] || (n.enumerable = !0), n;
      }
    }, Q = function(t) {
      for (var e, n = O(b(t)), i = [], r = 0;n.length > r;) {
        o(N, e = n[r++]) || e == I || e == u || i.push(e);
      }
      return i;
    }, tt = function(t) {
      for (var e, n = t === z, i = O(n ? q : b(t)), r = [], s = 0;i.length > s;) {
        o(N, e = i[s++]) && (n ? o(z, e) : !0) && r.push(N[e]);
      }
      return r;
    };
    U || (L = function() {
      if (this instanceof L) {
        throw TypeError("Symbol is not a constructor!");
      }
      var t = c(arguments.length > 0 ? arguments[0] : void 0), e = function(n) {
        this === z && e.call(q, n), o(this, I) && o(this[I], t) && (this[I][t] = !1), W(this, t, w(1, n));
      };
      return r && H && W(z, t, {configurable:!0, set:e}), Y(t);
    }, a(L[D], "toString", function() {
      return this._k;
    }), k.f = K, T.f = Z, n(66).f = P.f = Q, n(63).f = J, n(62).f = tt, r && !n(11) && a(z, "propertyIsEnumerable", J, !0), f.f = function(t) {
      return Y(d(t));
    }), s(s.G + s.W + s.F * !U, {Symbol:L});
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0;et.length > nt;) {
      d(et[nt++]);
    }
    for (var et = C(d.store), nt = 0;et.length > nt;) {
      _(et[nt++]);
    }
    s(s.S + s.F * !U, "Symbol", {"for":function(t) {
      return o(F, t += "") ? F[t] : F[t] = L(t);
    }, keyFor:function(t) {
      if (V(t)) {
        return g(F, t);
      }
      throw TypeError(t + " is not a symbol!");
    }, useSetter:function() {
      H = !0;
    }, useSimple:function() {
      H = !1;
    }}), s(s.S + s.F * !U, "Object", {create:$, defineProperty:Z, defineProperties:G, getOwnPropertyDescriptor:K, getOwnPropertyNames:Q, getOwnPropertySymbols:tt}), B && s(s.S + s.F * (!U || l(function() {
      var t = L();
      return "[null]" != j([t]) || "{}" != j({a:t}) || "{}" != j(Object(t));
    })), "JSON", {stringify:function(t) {
      if (void 0 !== t && !V(t)) {
        for (var e, n, i = [t], o = 1;arguments.length > o;) {
          i.push(arguments[o++]);
        }
        return e = i[1], "function" == typeof e && (n = e), !n && v(e) || (e = function(t, e) {
          return n && (e = n.call(this, t, e)), V(e) ? void 0 : e;
        }), i[1] = e, j.apply(B, i);
      }
    }}), L[D][R] || n(17)(L[D], R, L[D].valueOf), h(L, "Symbol"), h(Math, "Math", !0), h(i.JSON, "JSON", !0);
  }, function(t, e, n) {
    var i = n(43)("meta"), o = n(20), r = n(28), s = n(18).f, a = 0, u = Object.isExtensible || function() {
      return !0;
    }, l = !n(23)(function() {
      return u(Object.preventExtensions({}));
    }), p = function(t) {
      s(t, i, {value:{i:"O" + ++a, w:{}}});
    }, h = function(t, e) {
      if (!o(t)) {
        return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
      }
      if (!r(t, i)) {
        if (!u(t)) {
          return "F";
        }
        if (!e) {
          return "E";
        }
        p(t);
      }
      return t[i].i;
    }, c = function(t, e) {
      if (!r(t, i)) {
        if (!u(t)) {
          return !0;
        }
        if (!e) {
          return !1;
        }
        p(t);
      }
      return t[i].w;
    }, d = function(t) {
      return l && f.NEED && u(t) && !r(t, i) && p(t), t;
    }, f = t.exports = {KEY:i, NEED:!1, fastKey:h, getWeak:c, onFreeze:d};
  }, function(t, e, n) {
    var i = n(13), o = n(14), r = n(11), s = n(54), a = n(18).f;
    t.exports = function(t) {
      var e = o.Symbol || (o.Symbol = r ? {} : i.Symbol || {});
      "_" == t.charAt(0) || t in e || a(e, t, {value:s.f(t)});
    };
  }, function(t, e, n) {
    var i = n(33), o = n(35);
    t.exports = function(t, e) {
      for (var n, r = o(t), s = i(r), a = s.length, u = 0;a > u;) {
        if (r[n = s[u++]] === e) {
          return n;
        }
      }
    };
  }, function(t, e, n) {
    var i = n(33), o = n(62), r = n(63);
    t.exports = function(t) {
      var e = i(t), n = o.f;
      if (n) {
        for (var s, a = n(t), u = r.f, l = 0;a.length > l;) {
          u.call(t, s = a[l++]) && e.push(s);
        }
      }
      return e;
    };
  }, function(t, e) {
    e.f = Object.getOwnPropertySymbols;
  }, function(t, e) {
    e.f = {}.propertyIsEnumerable;
  }, function(t, e, n) {
    var i = n(37);
    t.exports = Array.isArray || function(t) {
      return "Array" == i(t);
    };
  }, function(t, e, n) {
    var i = n(35), o = n(66).f, r = {}.toString, s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], a = function(t) {
      try {
        return o(t);
      } catch (e) {
        return s.slice();
      }
    };
    t.exports.f = function(t) {
      return s && "[object Window]" == r.call(t) ? a(t) : o(i(t));
    };
  }, function(t, e, n) {
    var i = n(34), o = n(44).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
      return i(t, o);
    };
  }, function(t, e, n) {
    var i = n(63), o = n(26), r = n(35), s = n(25), a = n(28), u = n(21), l = Object.getOwnPropertyDescriptor;
    e.f = n(22) ? l : function(t, e) {
      if (t = r(t), e = s(e, !0), u) {
        try {
          return l(t, e);
        } catch (n) {
        }
      }
      return a(t, e) ? o(!i.f.call(t, e), t[e]) : void 0;
    };
  }, function(t, e) {
  }, function(t, e, n) {
    n(59)("asyncIterator");
  }, function(t, e, n) {
    n(59)("observable");
  }, function(t, e, n) {
    t.exports = {"default":n(72), __esModule:!0};
  }, function(t, e, n) {
    var i = n(14), o = i.JSON || (i.JSON = {stringify:JSON.stringify});
    t.exports = function(t) {
      return o.stringify.apply(o, arguments);
    };
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(74), r = i(o);
    e["default"] = r["default"] || function(t) {
      for (var e = 1;e < arguments.length;e++) {
        var n = arguments[e];
        for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
      }
      return t;
    };
  }, function(t, e, n) {
    t.exports = {"default":n(75), __esModule:!0};
  }, function(t, e, n) {
    n(76), t.exports = n(14).Object.assign;
  }, function(t, e, n) {
    var i = n(12);
    i(i.S + i.F, "Object", {assign:n(77)});
  }, function(t, e, n) {
    var i = n(33), o = n(62), r = n(63), s = n(49), a = n(36), u = Object.assign;
    t.exports = !u || n(23)(function() {
      var t = {}, e = {}, n = Symbol(), i = "abcdefghijklmnopqrst";
      return t[n] = 7, i.split("").forEach(function(t) {
        e[t] = t;
      }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != i;
    }) ? function(t, e) {
      for (var n = s(t), u = arguments.length, l = 1, p = o.f, h = r.f;u > l;) {
        for (var c, d = a(arguments[l++]), f = p ? i(d).concat(p(d)) : i(d), _ = f.length, g = 0;_ > g;) {
          h.call(d, c = f[g++]) && (n[c] = d[c]);
        }
      }
      return n;
    } : u;
  }, function(t, e) {
    e.__esModule = !0, e["default"] = function(t, e) {
      if (!(t instanceof e)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(3), r = i(o);
    e["default"] = function(t, e) {
      if (!t) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return !e || "object" !== ("undefined" == typeof e ? "undefined" : (0, r["default"])(e)) && "function" != typeof e ? t : e;
    };
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(81), r = i(o), s = n(85), a = i(s), u = n(3), l = i(u);
    e["default"] = function(t, e) {
      if ("function" != typeof e && null !== e) {
        throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : (0, l["default"])(e)));
      }
      t.prototype = (0, a["default"])(e && e.prototype, {constructor:{value:t, enumerable:!1, writable:!0, configurable:!0}}), e && (r["default"] ? (0, r["default"])(t, e) : t.__proto__ = e);
    };
  }, function(t, e, n) {
    t.exports = {"default":n(82), __esModule:!0};
  }, function(t, e, n) {
    n(83), t.exports = n(14).Object.setPrototypeOf;
  }, function(t, e, n) {
    var i = n(12);
    i(i.S, "Object", {setPrototypeOf:n(84).set});
  }, function(t, e, n) {
    var i = n(20), o = n(19), r = function(t, e) {
      if (o(t), !i(e) && null !== e) {
        throw TypeError(e + ": can't set as prototype!");
      }
    };
    t.exports = {set:Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
      try {
        i = n(15)(Function.call, n(67).f(Object.prototype, "__proto__").set, 2), i(t, []), e = !(t instanceof Array);
      } catch (o) {
        e = !0;
      }
      return function(t, n) {
        return r(t, n), e ? t.__proto__ = n : i(t, n), t;
      };
    }({}, !1) : void 0), check:r};
  }, function(t, e, n) {
    t.exports = {"default":n(86), __esModule:!0};
  }, function(t, e, n) {
    n(87);
    var i = n(14).Object;
    t.exports = function(t, e) {
      return i.create(t, e);
    };
  }, function(t, e, n) {
    var i = n(12);
    i(i.S, "Object", {create:n(31)});
  }, function(t, e) {
    "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? !function() {
      var t = document.createElement("_");
      if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
        var e = function(t) {
          var e = DOMTokenList.prototype[t];
          DOMTokenList.prototype[t] = function(t) {
            var n, i = arguments.length;
            for (n = 0;i > n;n++) {
              t = arguments[n], e.call(this, t);
            }
          };
        };
        e("add"), e("remove");
      }
      if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
        var n = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function(t, e) {
          return 1 in arguments && !this.contains(t) == !e ? e : n.call(this, t);
        };
      }
      t = null;
    }() : !function(t) {
      if ("Element" in t) {
        var e = "classList", n = "prototype", i = t.Element[n], o = Object, r = String[n].trim || function() {
          return this.replace(/^\s+|\s+$/g, "");
        }, s = Array[n].indexOf || function(t) {
          for (var e = 0, n = this.length;n > e;e++) {
            if (e in this && this[e] === t) {
              return e;
            }
          }
          return -1;
        }, a = function(t, e) {
          this.name = t, this.code = DOMException[t], this.message = e;
        }, u = function(t, e) {
          if ("" === e) {
            throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
          }
          if (/\s/.test(e)) {
            throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
          }
          return s.call(t, e);
        }, l = function(t) {
          for (var e = r.call(t.getAttribute("class") || ""), n = e ? e.split(/\s+/) : [], i = 0, o = n.length;o > i;i++) {
            this.push(n[i]);
          }
          this._updateClassName = function() {
            t.setAttribute("class", this.toString());
          };
        }, p = l[n] = [], h = function() {
          return new l(this);
        };
        if (a[n] = Error[n], p.item = function(t) {
          return this[t] || null;
        }, p.contains = function(t) {
          return t += "", -1 !== u(this, t);
        }, p.add = function() {
          var t, e = arguments, n = 0, i = e.length, o = !1;
          do {
            t = e[n] + "", -1 === u(this, t) && (this.push(t), o = !0);
          } while (++n < i);
          o && this._updateClassName();
        }, p.remove = function() {
          var t, e, n = arguments, i = 0, o = n.length, r = !1;
          do {
            for (t = n[i] + "", e = u(this, t);-1 !== e;) {
              this.splice(e, 1), r = !0, e = u(this, t);
            }
          } while (++i < o);
          r && this._updateClassName();
        }, p.toggle = function(t, e) {
          t += "";
          var n = this.contains(t), i = n ? e !== !0 && "remove" : e !== !1 && "add";
          return i && this[i](t), e === !0 || e === !1 ? e : !n;
        }, p.toString = function() {
          return this.join(" ");
        }, o.defineProperty) {
          var c = {get:h, enumerable:!0, configurable:!0};
          try {
            o.defineProperty(i, e, c);
          } catch (d) {
            -2146823252 === d.number && (c.enumerable = !1, o.defineProperty(i, e, c));
          }
        } else {
          o[n].__defineGetter__ && i.__defineGetter__(e, h);
        }
      }
    }(window.self));
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(90), h = i(p), c = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._render = function() {
        this.el = this._createElement("div"), this.el.innerHTML = this.getIcons(), this.el.setAttribute("id", this._props.prefix + "icons"), this._prependChild(document.body, this.el);
      }, e.prototype.getIcons = function() {
        var t = this._props.prefix;
        return '\x3csvg height\x3d"0" version\x3d"1.1" xmlns\x3d"http://www.w3.org/2000/svg" style\x3d"position:absolute; margin-left: -100%; width:0; height:0;" xmlns:xlink\x3d"http://www.w3.org/1999/xlink"\x3e\n              \x3cpath id\x3d"' + t + 'play-icon-shape" d\x3d"M0.000549111126,31.9982154 C-0.000686388908,21.3321436 0.000549111126,10.6660718 0.000549111126,1.77635684e-15 C10.6678564,5.33118265 21.3339282,10.6648363 32,15.9984899 C21.3339282,21.3321436 10.6678564,26.6657972 0.000549111126,31.9982154 L0.000549111126,31.9982154 Z"\x3e\x3c/path\x3e\n              \x3cg id\x3d"' + 
        t + 'pause-icon-shape"\x3e\n                \x3cpath d\x3d"M-8.8817842e-16,0 C3.55529197,-0.000248559134 7.11058393,-0.000248559134 10.6666667,0 C10.6669303,10.6669152 10.6669303,21.3330848 10.6666667,32 C7.11058393,32.0002486 3.55529197,32.0002486 -8.8817842e-16,32 L-8.8817842e-16,0 L-8.8817842e-16,0 Z"\x3e\x3c/path\x3e\n                \x3cpath d\x3d"M21.3333333,0 C24.8894161,-0.000248559134 28.444708,-0.000248559134 32,0 L32,32 C28.444708,32.0002486 24.8894161,32.0002486 21.3333333,32 C21.3330697,21.3330848 21.3330697,10.6669152 21.3333333,0 L21.3333333,0 Z"\x3e\x3c/path\x3e\n              \x3c/g\x3e\n              \x3crect id\x3d"' + 
        t + 'stop-icon-shape" x\x3d"0" y\x3d"0" width\x3d"32" height\x3d"32"\x3e\x3c/rect\x3e\n              \x3cpath id\x3d"' + t + 'repeat-icon-shape" d\x3d"M9.871,1.48 C12.322,0.209 15.176,-0.247 17.906,0.137 C20.914,0.556 23.762,2.041 25.823,4.274 C27.359,5.896 28.452,7.916 29.033,10.069 C29.472,9.674 29.825,9.123 30.422,8.955 C31.003,8.779 31.696,9.094 31.909,9.67 C32.106,10.155 31.972,10.736 31.6,11.1 C30.713,12.013 29.808,12.908 28.91,13.811 C28.709,14.011 28.506,14.231 28.23,14.323 C27.772,14.498 27.224,14.379 26.881,14.03 C25.918,13.021 24.913,12.052 23.938,11.055 C23.542,10.656 23.511,9.982 23.82,9.523 C24.104,9.072 24.681,8.844 25.196,8.988 C25.679,9.098 25.966,9.536 26.31,9.852 C25.345,7.149 23.302,4.829 20.694,3.611 C18.713,2.653 16.434,2.344 14.264,2.689 C10.576,3.238 7.291,5.853 5.897,9.306 C5.697,9.872 5.1,10.301 4.488,10.184 C3.863,10.113 3.366,9.501 3.399,8.878 C3.413,8.644 3.512,8.429 3.601,8.216 C4.804,5.321 7.089,2.911 9.871,1.48 Z M3.374,12.873 C3.855,12.401 4.7,12.476 5.151,12.952 C6.038,13.863 6.935,14.765 7.839,15.659 C8.049,15.864 8.261,16.088 8.343,16.379 C8.605,17.177 7.852,18.12 7.004,17.996 C6.43,17.963 6.069,17.47 5.692,17.101 C6.657,19.849 8.766,22.168 11.406,23.395 C14.249,24.712 17.666,24.737 20.514,23.423 C22.848,22.38 24.775,20.47 25.864,18.16 C26.072,17.753 26.185,17.255 26.588,16.987 C27.062,16.635 27.776,16.687 28.195,17.101 C28.527,17.419 28.687,17.926 28.541,18.369 C27.351,21.477 24.943,24.088 21.961,25.559 C18.251,27.421 13.67,27.405 9.973,25.52 C6.545,23.823 3.931,20.588 2.96,16.892 C2.624,17.217 2.319,17.58 1.935,17.85 C1.405,18.183 0.615,18.077 0.239,17.56 C-0.143,17.042 -0.048,16.254 0.431,15.828 C1.415,14.846 2.374,13.838 3.374,12.873 Z"\x3e\x3c/path\x3e\n              \x3cpath id\x3d"' + 
        t + 'bounds-icon-shape" d\x3d"M16,6 L16,-1.13686838e-13 L18,-1.13686838e-13 L18,6 L21.9941413,6 C23.1019465,6 24,6.89821238 24,7.99079514 L24,24.0092049 C24,25.1086907 23.1029399,26 21.9941413,26 L18,26 L18,32 L16,32 L16,26 L12.0058587,26 C10.8980535,26 10,25.1017876 10,24.0092049 L10,7.99079514 C10,6.89130934 10.8970601,6 12.0058587,6 L16,6 Z"\x3e\x3c/path\x3e\n              \x3cpath id\x3d"' + t + 'mojs-icon-shape" d\x3d"M18.4678907,2.67700048 C19.488586,3.25758625 20.2789227,4.18421651 20.87823,5.1973579 C24.0807788,10.501451 27.2777091,15.8113116 30.480258,21.1154047 C31.1320047,22.1612281 31.7706417,23.2647256 31.9354512,24.5162532 C32.188284,26.0619186 31.6919826,27.7363895 30.5589171,28.80336 C29.4501984,29.8857103 27.8807622,30.3182659 26.3806209,30.3048086 C19.4511293,30.3086535 12.5235106,30.3086535 5.59401901,30.3048086 C3.71556494,30.343258 1.69852104,29.5723478 0.683444165,27.8709623 C-0.406546132,26.1099803 -0.0975282643,23.7914822 0.940022637,22.0843293 C4.34296485,16.4130445 7.76650826,10.7532945 11.1825603,5.08969961 C11.9747698,3.74781595 13.1846215,2.60202418 14.6847628,2.18292584 C15.9451812,1.81573418 17.3348251,2.01182606 18.4678907,2.67700048 Z M15.3334668,9.51526849 C15.6146238,9.03779476 16.0791597,9.02250655 16.3785679,9.4929547 L25.2763555,23.4736913 C25.5723919,23.9388414 25.3568433,24.3159201 24.8074398,24.3159202 L7.62314647,24.3159205 C7.06813505,24.3159206 6.84622798,23.9286889 7.12728913,23.4513779 L15.3334668,9.51526849 Z" fill-rule\x3d"evenodd"\x3e\x3c/path\x3e\n              \x3cpath id\x3d"' + 
        t + 'hide-icon-shape" d\x3d"M18.0297509,24.5024819 C18.1157323,24.4325886 18.1989631,24.3576024 18.2790422,24.2775233 L31.0556518,11.5009137 C32.3147827,10.2417828 32.3147827,8.20347913 31.0556518,6.9443482 C29.7965209,5.68521727 27.7582172,5.68521727 26.4990863,6.9443482 L15.9992406,17.4441939 L5.50091369,6.94586705 C4.24330161,5.68825498 2.20347913,5.68673612 0.944348198,6.94586705 C-0.314782733,8.20499798 -0.314782733,10.2433016 0.944348198,11.5024325 L13.7209578,24.2790422 C14.9005165,25.4586008 16.7638781,25.5331444 18.0298642,24.5026731 L18.0297509,24.5024819 Z"\x3e\x3c/path\x3e\n            \x3c/svg\x3e';
      }, e;
    }(h["default"]);
    e["default"] = c;
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(3), r = i(o), s = n(78), a = i(s), u = function() {
      function t() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        (0, a["default"])(this, t), this._o = e, this._index = this._o.index || 0, this._declareDefaults(), this._extendDefaults(), this._vars(), this._render();
      }
      return t.prototype._declareDefaults = function() {
        this._defaults = {className:"", parent:document.body, isPrepend:!1, isRipple:!1, prefix:""};
      }, t.prototype._addPointerDownEvent = function(t, e) {
        window.navigator.msPointerEnabled ? t.addEventListener("MSPointerDown", e) : void 0 !== window.ontouchstart ? (t.addEventListener("touchstart", e), t.addEventListener("mousedown", e)) : t.addEventListener("mousedown", e);
      }, t.prototype._addPointerUpEvent = function(t, e) {
        window.navigator.msPointerEnabled ? t.addEventListener("MSPointerUp", e) : void 0 !== window.ontouchstart ? (t.addEventListener("touchend", e), t.addEventListener("mouseup", e)) : t.addEventListener("mouseup", e);
      }, t.prototype._isFunction = function(t) {
        return "function" == typeof t;
      }, t.prototype._callIfFunction = function(t) {
        Array.prototype.shift.call(arguments), this._isFunction(t) && t.apply(this, arguments);
      }, t.prototype._vars = function() {
      }, t.prototype._render = function() {
        this._addMainElement();
      }, t.prototype._addMainElement = function() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? "div" : arguments[0], e = this._props;
        this.el = this._createElement(t), this._addMainClasses();
        var n = e.isPrepend ? "prepend" : "append";
        this["_" + n + "Child"](e.parent, this.el);
      }, t.prototype._addMainClasses = function() {
        var t = this._props;
        if (t.className instanceof Array) {
          for (var e = 0;e < t.className.length;e++) {
            this._addClass(this.el, t.className[e]);
          }
        } else {
          this._addClass(this.el, t.className);
        }
      }, t.prototype._addClass = function(t, e) {
        e && t.classList.add(e);
      }, t.prototype._setProp = function(t, e) {
        if ("object" === ("undefined" == typeof t ? "undefined" : (0, r["default"])(t))) {
          for (var n in t) {
            this._assignProp(n, t[n]);
          }
        } else {
          this._assignProp(t, e);
        }
      }, t.prototype._assignProp = function(t, e) {
        this._props[t] = e;
      }, t.prototype._extendDefaults = function() {
        this._props = {};
        for (var t in this._defaults) {
          var e = this._o[t];
          this.isIt && console.log(t), this._assignProp(t, null != e ? e : this._defaults[t]);
        }
      }, t.prototype._createElement = function(t) {
        return document.createElement(t);
      }, t.prototype._createChild = function(t, e) {
        var n = this._createElement("div");
        return e && n.classList.add(e), this.el.appendChild(n), n;
      }, t.prototype._appendChild = function(t, e) {
        t.appendChild(e);
      }, t.prototype._prependChild = function(t, e) {
        t.insertBefore(e, t.firstChild);
      }, t;
    }();
    e["default"] = u;
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(92), h = i(p), c = n(90), d = i(c);
    n(108);
    var f = n(110), _ = n(107), g = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        this._defaults = {className:f["player-slider"], parent:document.body, progress:0, leftProgress:0, rightProgress:1, isBounds:!1, onLeftProgress:null, onProgress:null, onRightProgress:null, onSeekStart:null, onSeekEnd:null};
      }, e.prototype.disableBounds = function() {
        return this.track.setBounds(0, 1), this.rightBound.hide(), this.leftBound.hide(), this;
      }, e.prototype.enableBounds = function() {
        var t = this._props;
        return this.track.setBounds(t.leftProgress, t.rightProgress), this.rightBound.show(), this.leftBound.show(), this;
      }, e.prototype.setTrackProgress = function(t) {
        return this.track.setProgress(t), this;
      }, e.prototype.decreaseProgress = function() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? .01 : arguments[0], e = this.track._progress;
        return e -= t, e = 0 > e ? 0 : e, this.setTrackProgress(e), this;
      }, e.prototype.increaseProgress = function() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? .01 : arguments[0], e = this.track._progress;
        return e += t, e = e > 1 ? 1 : e, this.setTrackProgress(e), this;
      }, e.prototype._render = function() {
        var t = this._props;
        this._addMainElement(), this.el.classList.add(_.slider), this.leftBound = new h["default"]({isBound:!0, parent:this.el, isRipple:!1, onProgress:this._onLeftBoundProgress.bind(this), onSeekStart:t.onSeekStart, onSeekEnd:t.onSeekEnd}), this.track = new h["default"]({parent:this.el, className:f.slider, onProgress:this._onTrackProgress.bind(this), onSeekStart:t.onSeekStart, onSeekEnd:t.onSeekEnd}), this.rightBound = new h["default"]({isBound:!0, parent:this.el, isRipple:!1, isInversed:!0, onProgress:this._onRightBoundProgress.bind(this), 
        onSeekStart:t.onSeekStart, onSeekEnd:t.onSeekEnd}), this.rightBound.setProgress(t.rightProgress), this.track.setProgress(t.progress), this.leftBound.setProgress(t.leftProgress), t.parent.appendChild(this.el);
      }, e.prototype._onTrackProgress = function(t) {
        this._callIfFunction(this._props.onProgress, t);
      }, e.prototype._onLeftBoundProgress = function(t) {
        this._props.isBounds && (this._props.leftProgress = t, this.track.setMinBound(t), this.rightBound.setMinBound(t), this._callIfFunction(this._props.onLeftProgress, t));
      }, e.prototype._onRightBoundProgress = function(t) {
        this._props.isBounds && (this._props.rightProgress = t, this.track.setMaxBound(t), this.leftBound.setMaxBound(t), this._callIfFunction(this._props.onRightProgress, t));
      }, e;
    }(d["default"]);
    e["default"] = g;
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(90), h = i(p), c = n(93), d = i(c), f = n(100), _ = i(f);
    n(105);
    var g = n(107), y = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        this._defaults = {className:"", parent:document.body, isBound:!1, isInversed:!1, isRipple:!0, isProgress:!0, onProgress:null, onSeekStart:null, onSeekEnd:null, direction:"x", snapPoint:0, snapStrength:0};
      }, e.prototype.setProgress = function(t) {
        return this.handle.setProgress(t), this.track.setProgress(t), this;
      }, e.prototype.setBounds = function(t, e) {
        return this.handle.setBounds(t, e), this.track.setBounds(t, e), this;
      }, e.prototype.setMinBound = function(t) {
        return this.handle.setMinBound(t), this.track.setMinBound(t), this;
      }, e.prototype.setMaxBound = function(t) {
        return this.handle.setMaxBound(t), this.track.setMaxBound(t), this;
      }, e.prototype.show = function() {
        this.track.el.style.display = "block", this.handle.el.style.display = "block";
      }, e.prototype.hide = function() {
        this.track.el.style.display = "none", this.handle.el.style.display = "none";
      }, e.prototype._render = function() {
        var t = this._props;
        if (!t.isBound) {
          var e = this._createElement("div"), n = e.classList;
          this.el = e, this.inner = this._createElement("div"), this.inner.classList.add(g.slider__inner), this.el.appendChild(this.inner), n.add(g.slider), "y" === t.direction && n.add(g["is-y"]), t.className && n.add(t.className), t.parent.appendChild(e);
        }
        var i = t.isBound ? t.parent : this.inner;
        this.track = new _["default"]({className:g.track, onProgress:this._onTrackProgress.bind(this), onSeekStart:t.onSeekStart, onSeekEnd:t.onSeekEnd, isBound:t.isBound, isInversed:t.isInversed, isRipple:t.isRipple, isProgress:t.isProgress, parent:i, direction:t.direction, snapPoint:t.snapPoint, snapStrength:t.snapStrength}), i.appendChild(this.track.el);
        var o = [g.handle];
        t.isBound || o.push(g["progress-handle"]), this.handle = new d["default"]({className:o, onProgress:this._onHandleProgress.bind(this), onSeekStart:t.onSeekStart, onSeekEnd:t.onSeekEnd, isBound:t.isBound, isInversed:t.isInversed, parent:i, direction:t.direction, snapPoint:t.snapPoint, snapStrength:t.snapStrength}), i.appendChild(this.handle.el);
      }, e.prototype._onHandleProgress = function(t) {
        this.track.setProgress(t, !1), this._onProgress(t);
      }, e.prototype._onTrackProgress = function(t) {
        this.handle.setProgress(t, !1), this._onProgress(t);
      }, e.prototype._onProgress = function(t) {
        var e = this._props;
        "function" == typeof e.onProgress && this._progress !== t && (this._progress = t, e.onProgress.call(this, t));
      }, e;
    }(h["default"]);
    e["default"] = y;
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(90), h = i(p), c = n(94), d = i(c);
    n(95);
    var f = n(99), _ = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.minBound = 0, this._defaults.maxBound = 1, this._defaults.isBound = !1, this._defaults.isInversed = !1, this._defaults.direction = "x", this._defaults.onSeekStart = null, this._defaults.onSeekEnd = null, this._defaults.onProgress = null, this._defaults.snapPoint = 0, this._defaults.snapStrength = 0;
      }, e.prototype.setProgress = function(t) {
        var e = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1], n = this._progressToShift(t);
        return this._setShift(n, e), this._delta = n - this._shift, this._saveDelta(), this;
      }, e.prototype.setBounds = function(t, e) {
        return this.setMinBound(t), this.setMaxBound(e), this;
      }, e.prototype.setMinBound = function(t) {
        return this._props.minBound = Math.max(t, 0), this._progress < t && this.setProgress(t), this;
      }, e.prototype.setMaxBound = function(t) {
        return this._props.maxBound = Math.min(t, 1), this._progress > t && this.setProgress(t), this;
      }, e.prototype._vars = function() {
        this._progress = 0, this._shift = 0, this._delta = 0;
      }, e.prototype._setShift = function(t) {
        var e = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1], n = this._props, i = n.minBound * this._maxWidth, o = n.maxBound * this._maxWidth;
        return t = mojs.h.clamp(t, i, o), this._applyShift(t), e ? this._onProgress(t) : this._progress = this._shiftToProgress(t), t;
      }, e.prototype._applyShift = function(t) {
        var e = this._props;
        this.el.style.transform = "x" === e.direction ? "translateX( " + t + "px )" : "translateY( " + -t + "px )";
      }, e.prototype._getMaxWidth = function() {
        var t = this._props, e = t.parent;
        this._maxWidth = "x" === t.direction ? e.clientWidth : e.clientHeight;
      }, e.prototype._render = function() {
        t.prototype._render.call(this), this._addElements(), this._getMaxWidth(), this._hammerTime();
      }, e.prototype._addMainClasses = function() {
        t.prototype._addMainClasses.call(this);
        var e = this._props, n = this.el.classList;
        n.add(f.handle), e.isBound && n.add(f["is-bound"]), e.isInversed && n.add(f["is-inversed"]);
      }, e.prototype._addElements = function() {
        var t = this._createElement("div"), e = this._createElement("div");
        t.classList.add("" + f.handle__inner), e.classList.add("" + f.handle__shadow), this.el.appendChild(e), this.el.appendChild(t);
      }, e.prototype._hammerTime = function() {
        var t = this._props, e = "x" === t.direction ? "HORIZONTAL" : "VERTICAL", n = new d["default"].Manager(this.el, {recognizers:[[d["default"].Pan, {direction:d["default"]["DIRECTION_" + e]}]]});
        n.on("pan", this._pan.bind(this)), n.on("panend", this._panEnd.bind(this)), this._addPointerDownEvent(this.el, this._pointerDown.bind(this)), this._addPointerUpEvent(this.el, this._pointerUp.bind(this)), this._addPointerUpEvent(document, this._pointerUpDoc.bind(this)), window.addEventListener("resize", this._onWindowResize.bind(this));
      }, e.prototype._pan = function(t) {
        var e = this._props;
        this._delta = "x" === e.direction ? t.deltaX : -t.deltaY;
        var n = this._shift + this._delta, i = this._shiftToProgress(n);
        i = Math.abs(i - e.snapPoint) < e.snapStrength ? e.snapPoint : i, this._setShift(this._progressToShift(i));
      }, e.prototype._panEnd = function(t) {
        this._saveDelta(), this._callIfFunction(this._props.onSeekEnd, t);
      }, e.prototype._pointerDown = function(t) {
        var e = this._props;
        this._isPointerDown = !0, this._callIfFunction(e.onSeekStart, t);
      }, e.prototype._pointerUp = function(t) {
        return this._callIfFunction(this._props.onSeekEnd, t), t.preventDefault(), !1;
      }, e.prototype._pointerUpDoc = function(t) {
        this._isPointerDown && (this._callIfFunction(this._props.onSeekEnd, t), this._isPointerDown = !1);
      }, e.prototype._saveDelta = function() {
        this._shift += this._delta;
      }, e.prototype._onProgress = function(t) {
        var e = this._props, n = this._shiftToProgress(t);
        this._progress !== n && (this._progress = n, this._isFunction(e.onProgress) && e.onProgress.call(this, n));
      }, e.prototype._shiftToProgress = function(t) {
        return t / this._maxWidth;
      }, e.prototype._progressToShift = function(t) {
        return t * this._maxWidth;
      }, e.prototype._onWindowResize = function(t) {
        this._getMaxWidth(), this.setProgress(this._progress);
      }, e;
    }(h["default"]);
    e["default"] = _;
  }, function(t, e, n) {
    var i;
    !function(o, r, s, a) {
      function u(t, e, n) {
        return setTimeout(d(t, n), e);
      }
      function l(t, e, n) {
        return Array.isArray(t) ? (p(t, n[e], n), !0) : !1;
      }
      function p(t, e, n) {
        var i;
        if (t) {
          if (t.forEach) {
            t.forEach(e, n);
          } else {
            if (t.length !== a) {
              for (i = 0;i < t.length;) {
                e.call(n, t[i], i, t), i++;
              }
            } else {
              for (i in t) {
                t.hasOwnProperty(i) && e.call(n, t[i], i, t);
              }
            }
          }
        }
      }
      function h(t, e, n) {
        var i = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
        return function() {
          var e = new Error("get-stack-trace"), n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", r = o.console && (o.console.warn || o.console.log);
          return r && r.call(o.console, i, n), t.apply(this, arguments);
        };
      }
      function c(t, e, n) {
        var i, o = e.prototype;
        i = t.prototype = Object.create(o), i.constructor = t, i._super = o, n && _t(i, n);
      }
      function d(t, e) {
        return function() {
          return t.apply(e, arguments);
        };
      }
      function f(t, e) {
        return typeof t == vt ? t.apply(e ? e[0] || a : a, e) : t;
      }
      function _(t, e) {
        return t === a ? e : t;
      }
      function g(t, e, n) {
        p(b(e), function(e) {
          t.addEventListener(e, n, !1);
        });
      }
      function y(t, e, n) {
        p(b(e), function(e) {
          t.removeEventListener(e, n, !1);
        });
      }
      function v(t, e) {
        for (;t;) {
          if (t == e) {
            return !0;
          }
          t = t.parentNode;
        }
        return !1;
      }
      function m(t, e) {
        return t.indexOf(e) > -1;
      }
      function b(t) {
        return t.trim().split(/\s+/g);
      }
      function x(t, e, n) {
        if (t.indexOf && !n) {
          return t.indexOf(e);
        }
        for (var i = 0;i < t.length;) {
          if (n && t[i][n] == e || !n && t[i] === e) {
            return i;
          }
          i++;
        }
        return -1;
      }
      function w(t) {
        return Array.prototype.slice.call(t, 0);
      }
      function S(t, e, n) {
        for (var i = [], o = [], r = 0;r < t.length;) {
          var s = e ? t[r][e] : t[r];
          x(o, s) < 0 && i.push(t[r]), o[r] = s, r++;
        }
        return n && (i = e ? i.sort(function(t, n) {
          return t[e] > n[e];
        }) : i.sort()), i;
      }
      function P(t, e) {
        for (var n, i, o = e[0].toUpperCase() + e.slice(1), r = 0;r < gt.length;) {
          if (n = gt[r], i = n ? n + o : e, i in t) {
            return i;
          }
          r++;
        }
        return a;
      }
      function k() {
        return Pt++;
      }
      function T(t) {
        var e = t.ownerDocument || t;
        return e.defaultView || e.parentWindow || o;
      }
      function C(t, e) {
        var n = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
          f(t.options.enable, [t]) && n.handler(e);
        }, this.init();
      }
      function E(t) {
        var e, n = t.options.inputClass;
        return new (e = n ? n : Ct ? U : Et ? W : Tt ? V : z)(t, M);
      }
      function M(t, e, n) {
        var i = n.pointers.length, o = n.changedPointers.length, r = e & Dt && i - o === 0, s = e & (Rt | At) && i - o === 0;
        n.isFirst = !!r, n.isFinal = !!s, r && (t.session = {}), n.eventType = e, O(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n;
      }
      function O(t, e) {
        var n = t.session, i = e.pointers, o = i.length;
        n.firstInput || (n.firstInput = j(e)), o > 1 && !n.firstMultiple ? n.firstMultiple = j(e) : 1 === o && (n.firstMultiple = !1);
        var r = n.firstInput, s = n.firstMultiple, a = s ? s.center : r.center, u = e.center = D(i);
        e.timeStamp = xt(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = F(a, u), e.distance = A(a, u), L(n, e), e.offsetDirection = R(e.deltaX, e.deltaY);
        var l = I(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = l.x, e.overallVelocityY = l.y, e.overallVelocity = bt(l.x) > bt(l.y) ? l.x : l.y, e.scale = s ? q(s.pointers, i) : 1, e.rotation = s ? N(s.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, B(n, e);
        var p = t.element;
        v(e.srcEvent.target, p) && (p = e.srcEvent.target), e.target = p;
      }
      function L(t, e) {
        var n = e.center, i = t.offsetDelta || {}, o = t.prevDelta || {}, r = t.prevInput || {};
        e.eventType !== Dt && r.eventType !== Rt || (o = t.prevDelta = {x:r.deltaX || 0, y:r.deltaY || 0}, i = t.offsetDelta = {x:n.x, y:n.y}), e.deltaX = o.x + (n.x - i.x), e.deltaY = o.y + (n.y - i.y);
      }
      function B(t, e) {
        var n, i, o, r, s = t.lastInterval || e, u = e.timeStamp - s.timeStamp;
        if (e.eventType != At && (u > jt || s.velocity === a)) {
          var l = e.deltaX - s.deltaX, p = e.deltaY - s.deltaY, h = I(u, l, p);
          i = h.x, o = h.y, n = bt(h.x) > bt(h.y) ? h.x : h.y, r = R(l, p), t.lastInterval = e;
        } else {
          n = s.velocity, i = s.velocityX, o = s.velocityY, r = s.direction;
        }
        e.velocity = n, e.velocityX = i, e.velocityY = o, e.direction = r;
      }
      function j(t) {
        for (var e = [], n = 0;n < t.pointers.length;) {
          e[n] = {clientX:mt(t.pointers[n].clientX), clientY:mt(t.pointers[n].clientY)}, n++;
        }
        return {timeStamp:xt(), pointers:e, center:D(e), deltaX:t.deltaX, deltaY:t.deltaY};
      }
      function D(t) {
        var e = t.length;
        if (1 === e) {
          return {x:mt(t[0].clientX), y:mt(t[0].clientY)};
        }
        for (var n = 0, i = 0, o = 0;e > o;) {
          n += t[o].clientX, i += t[o].clientY, o++;
        }
        return {x:mt(n / e), y:mt(i / e)};
      }
      function I(t, e, n) {
        return {x:e / t || 0, y:n / t || 0};
      }
      function R(t, e) {
        return t === e ? Ft : bt(t) >= bt(e) ? 0 > t ? Nt : qt : 0 > e ? zt : Ut;
      }
      function A(t, e, n) {
        n || (n = Yt);
        var i = e[n[0]] - t[n[0]], o = e[n[1]] - t[n[1]];
        return Math.sqrt(i * i + o * o);
      }
      function F(t, e, n) {
        n || (n = Yt);
        var i = e[n[0]] - t[n[0]], o = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(o, i) / Math.PI;
      }
      function N(t, e) {
        return F(e[1], e[0], Vt) + F(t[1], t[0], Vt);
      }
      function q(t, e) {
        return A(e[0], e[1], Vt) / A(t[0], t[1], Vt);
      }
      function z() {
        this.evEl = Gt, this.evWin = $t, this.pressed = !1, C.apply(this, arguments);
      }
      function U() {
        this.evEl = Qt, this.evWin = te, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
      }
      function X() {
        this.evTarget = ne, this.evWin = ie, this.started = !1, C.apply(this, arguments);
      }
      function H(t, e) {
        var n = w(t.touches), i = w(t.changedTouches);
        return e & (Rt | At) && (n = S(n.concat(i), "identifier", !0)), [n, i];
      }
      function W() {
        this.evTarget = re, this.targetIds = {}, C.apply(this, arguments);
      }
      function Y(t, e) {
        var n = w(t.touches), i = this.targetIds;
        if (e & (Dt | It) && 1 === n.length) {
          return i[n[0].identifier] = !0, [n, n];
        }
        var o, r, s = w(t.changedTouches), a = [], u = this.target;
        if (r = n.filter(function(t) {
          return v(t.target, u);
        }), e === Dt) {
          for (o = 0;o < r.length;) {
            i[r[o].identifier] = !0, o++;
          }
        }
        for (o = 0;o < s.length;) {
          i[s[o].identifier] && a.push(s[o]), e & (Rt | At) && delete i[s[o].identifier], o++;
        }
        return a.length ? [S(r.concat(a), "identifier", !0), a] : void 0;
      }
      function V() {
        C.apply(this, arguments);
        var t = d(this.handler, this);
        this.touch = new W(this.manager, t), this.mouse = new z(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
      }
      function Z(t, e) {
        t & Dt ? (this.primaryTouch = e.changedPointers[0].identifier, G.call(this, e)) : t & (Rt | At) && G.call(this, e);
      }
      function G(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
          var n = {x:e.clientX, y:e.clientY};
          this.lastTouches.push(n);
          var i = this.lastTouches, o = function() {
            var t = i.indexOf(n);
            t > -1 && i.splice(t, 1);
          };
          setTimeout(o, se);
        }
      }
      function $(t) {
        for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0;i < this.lastTouches.length;i++) {
          var o = this.lastTouches[i], r = Math.abs(e - o.x), s = Math.abs(n - o.y);
          if (ae >= r && ae >= s) {
            return !0;
          }
        }
        return !1;
      }
      function J(t, e) {
        this.manager = t, this.set(e);
      }
      function K(t) {
        if (m(t, de)) {
          return de;
        }
        var e = m(t, fe), n = m(t, _e);
        return e && n ? de : e || n ? e ? fe : _e : m(t, ce) ? ce : he;
      }
      function Q() {
        if (!le) {
          return !1;
        }
        var t = {}, e = o.CSS && o.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
          t[n] = e ? o.CSS.supports("touch-action", n) : !0;
        }), t;
      }
      function tt(t) {
        this.options = _t({}, this.defaults, t || {}), this.id = k(), this.manager = null, this.options.enable = _(this.options.enable, !0), this.state = ye, this.simultaneous = {}, this.requireFail = [];
      }
      function et(t) {
        return t & we ? "cancel" : t & be ? "end" : t & me ? "move" : t & ve ? "start" : "";
      }
      function nt(t) {
        return t == Ut ? "down" : t == zt ? "up" : t == Nt ? "left" : t == qt ? "right" : "";
      }
      function it(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t;
      }
      function ot() {
        tt.apply(this, arguments);
      }
      function rt() {
        ot.apply(this, arguments), this.pX = null, this.pY = null;
      }
      function st() {
        ot.apply(this, arguments);
      }
      function at() {
        tt.apply(this, arguments), this._timer = null, this._input = null;
      }
      function ut() {
        ot.apply(this, arguments);
      }
      function lt() {
        ot.apply(this, arguments);
      }
      function pt() {
        tt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
      }
      function ht(t, e) {
        return e = e || {}, e.recognizers = _(e.recognizers, ht.defaults.preset), new ct(t, e);
      }
      function ct(t, e) {
        this.options = _t({}, ht.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = E(this), this.touchAction = new J(this, this.options.touchAction), dt(this, !0), p(this.options.recognizers, function(t) {
          var e = this.add(new t[0](t[1]));
          t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
        }, this);
      }
      function dt(t, e) {
        var n = t.element;
        if (n.style) {
          var i;
          p(t.options.cssProps, function(o, r) {
            i = P(n.style, r), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = o) : n.style[i] = t.oldCssProps[i] || "";
          }), e || (t.oldCssProps = {});
        }
      }
      function ft(t, e) {
        var n = r.createEvent("Event");
        n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n);
      }
      var _t, gt = ["", "webkit", "Moz", "MS", "ms", "o"], yt = r.createElement("div"), vt = "function", mt = Math.round, bt = Math.abs, xt = Date.now;
      _t = "function" != typeof Object.assign ? function(t) {
        if (t === a || null === t) {
          throw new TypeError("Cannot convert undefined or null to object");
        }
        for (var e = Object(t), n = 1;n < arguments.length;n++) {
          var i = arguments[n];
          if (i !== a && null !== i) {
            for (var o in i) {
              i.hasOwnProperty(o) && (e[o] = i[o]);
            }
          }
        }
        return e;
      } : Object.assign;
      var wt = h(function(t, e, n) {
        for (var i = Object.keys(e), o = 0;o < i.length;) {
          (!n || n && t[i[o]] === a) && (t[i[o]] = e[i[o]]), o++;
        }
        return t;
      }, "extend", "Use `assign`."), St = h(function(t, e) {
        return wt(t, e, !0);
      }, "merge", "Use `assign`."), Pt = 1, kt = /mobile|tablet|ip(ad|hone|od)|android/i, Tt = "ontouchstart" in o, Ct = P(o, "PointerEvent") !== a, Et = Tt && kt.test(navigator.userAgent), Mt = "touch", Ot = "pen", Lt = "mouse", Bt = "kinect", jt = 25, Dt = 1, It = 2, Rt = 4, At = 8, Ft = 1, Nt = 2, qt = 4, zt = 8, Ut = 16, Xt = Nt | qt, Ht = zt | Ut, Wt = Xt | Ht, Yt = ["x", "y"], Vt = ["clientX", "clientY"];
      C.prototype = {handler:function() {
      }, init:function() {
        this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget, this.domHandler), this.evWin && g(T(this.element), this.evWin, this.domHandler);
      }, destroy:function() {
        this.evEl && y(this.element, this.evEl, this.domHandler), this.evTarget && y(this.target, this.evTarget, this.domHandler), this.evWin && y(T(this.element), this.evWin, this.domHandler);
      }};
      var Zt = {mousedown:Dt, mousemove:It, mouseup:Rt}, Gt = "mousedown", $t = "mousemove mouseup";
      c(z, C, {handler:function(t) {
        var e = Zt[t.type];
        e & Dt && 0 === t.button && (this.pressed = !0), e & It && 1 !== t.which && (e = Rt), this.pressed && (e & Rt && (this.pressed = !1), this.callback(this.manager, e, {pointers:[t], changedPointers:[t], pointerType:Lt, srcEvent:t}));
      }});
      var Jt = {pointerdown:Dt, pointermove:It, pointerup:Rt, pointercancel:At, pointerout:At}, Kt = {2:Mt, 3:Ot, 4:Lt, 5:Bt}, Qt = "pointerdown", te = "pointermove pointerup pointercancel";
      o.MSPointerEvent && !o.PointerEvent && (Qt = "MSPointerDown", te = "MSPointerMove MSPointerUp MSPointerCancel"), c(U, C, {handler:function(t) {
        var e = this.store, n = !1, i = t.type.toLowerCase().replace("ms", ""), o = Jt[i], r = Kt[t.pointerType] || t.pointerType, s = r == Mt, a = x(e, t.pointerId, "pointerId");
        o & Dt && (0 === t.button || s) ? 0 > a && (e.push(t), a = e.length - 1) : o & (Rt | At) && (n = !0), 0 > a || (e[a] = t, this.callback(this.manager, o, {pointers:e, changedPointers:[t], pointerType:r, srcEvent:t}), n && e.splice(a, 1));
      }});
      var ee = {touchstart:Dt, touchmove:It, touchend:Rt, touchcancel:At}, ne = "touchstart", ie = "touchstart touchmove touchend touchcancel";
      c(X, C, {handler:function(t) {
        var e = ee[t.type];
        if (e === Dt && (this.started = !0), this.started) {
          var n = H.call(this, t, e);
          e & (Rt | At) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {pointers:n[0], changedPointers:n[1], pointerType:Mt, srcEvent:t});
        }
      }});
      var oe = {touchstart:Dt, touchmove:It, touchend:Rt, touchcancel:At}, re = "touchstart touchmove touchend touchcancel";
      c(W, C, {handler:function(t) {
        var e = oe[t.type], n = Y.call(this, t, e);
        n && this.callback(this.manager, e, {pointers:n[0], changedPointers:n[1], pointerType:Mt, srcEvent:t});
      }});
      var se = 2500, ae = 25;
      c(V, C, {handler:function(t, e, n) {
        var i = n.pointerType == Mt, o = n.pointerType == Lt;
        if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
          if (i) {
            Z.call(this, e, n);
          } else {
            if (o && $.call(this, n)) {
              return;
            }
          }
          this.callback(t, e, n);
        }
      }, destroy:function() {
        this.touch.destroy(), this.mouse.destroy();
      }});
      var ue = P(yt.style, "touchAction"), le = ue !== a, pe = "compute", he = "auto", ce = "manipulation", de = "none", fe = "pan-x", _e = "pan-y", ge = Q();
      J.prototype = {set:function(t) {
        t == pe && (t = this.compute()), le && this.manager.element.style && ge[t] && (this.manager.element.style[ue] = t), this.actions = t.toLowerCase().trim();
      }, update:function() {
        this.set(this.manager.options.touchAction);
      }, compute:function() {
        var t = [];
        return p(this.manager.recognizers, function(e) {
          f(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
        }), K(t.join(" "));
      }, preventDefaults:function(t) {
        var e = t.srcEvent, n = t.offsetDirection;
        if (this.manager.session.prevented) {
          return void e.preventDefault();
        }
        var i = this.actions, o = m(i, de) && !ge[de], r = m(i, _e) && !ge[_e], s = m(i, fe) && !ge[fe];
        if (o) {
          var a = 1 === t.pointers.length, u = t.distance < 2, l = t.deltaTime < 250;
          if (a && u && l) {
            return;
          }
        }
        return s && r ? void 0 : o || r && n & Xt || s && n & Ht ? this.preventSrc(e) : void 0;
      }, preventSrc:function(t) {
        this.manager.session.prevented = !0, t.preventDefault();
      }};
      var ye = 1, ve = 2, me = 4, be = 8, xe = be, we = 16, Se = 32;
      tt.prototype = {defaults:{}, set:function(t) {
        return _t(this.options, t), this.manager && this.manager.touchAction.update(), this;
      }, recognizeWith:function(t) {
        if (l(t, "recognizeWith", this)) {
          return this;
        }
        var e = this.simultaneous;
        return t = it(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
      }, dropRecognizeWith:function(t) {
        return l(t, "dropRecognizeWith", this) ? this : (t = it(t, this), delete this.simultaneous[t.id], this);
      }, requireFailure:function(t) {
        if (l(t, "requireFailure", this)) {
          return this;
        }
        var e = this.requireFail;
        return t = it(t, this), -1 === x(e, t) && (e.push(t), t.requireFailure(this)), this;
      }, dropRequireFailure:function(t) {
        if (l(t, "dropRequireFailure", this)) {
          return this;
        }
        t = it(t, this);
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
        var n = this, i = this.state;
        be > i && e(n.options.event + et(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), i >= be && e(n.options.event + et(i));
      }, tryEmit:function(t) {
        return this.canEmit() ? this.emit(t) : void(this.state = Se);
      }, canEmit:function() {
        for (var t = 0;t < this.requireFail.length;) {
          if (!(this.requireFail[t].state & (Se | ye))) {
            return !1;
          }
          t++;
        }
        return !0;
      }, recognize:function(t) {
        var e = _t({}, t);
        return f(this.options.enable, [this, e]) ? (this.state & (xe | we | Se) && (this.state = ye), this.state = this.process(e), void(this.state & (ve | me | be | we) && this.tryEmit(e))) : (this.reset(), void(this.state = Se));
      }, process:function(t) {
      }, getTouchAction:function() {
      }, reset:function() {
      }}, c(ot, tt, {defaults:{pointers:1}, attrTest:function(t) {
        var e = this.options.pointers;
        return 0 === e || t.pointers.length === e;
      }, process:function(t) {
        var e = this.state, n = t.eventType, i = e & (ve | me), o = this.attrTest(t);
        return i && (n & At || !o) ? e | we : i || o ? n & Rt ? e | be : e & ve ? e | me : ve : Se;
      }}), c(rt, ot, {defaults:{event:"pan", threshold:10, pointers:1, direction:Wt}, getTouchAction:function() {
        var t = this.options.direction, e = [];
        return t & Xt && e.push(_e), t & Ht && e.push(fe), e;
      }, directionTest:function(t) {
        var e = this.options, n = !0, i = t.distance, o = t.direction, r = t.deltaX, s = t.deltaY;
        return o & e.direction || (e.direction & Xt ? (o = 0 === r ? Ft : 0 > r ? Nt : qt, n = r != this.pX, i = Math.abs(t.deltaX)) : (o = 0 === s ? Ft : 0 > s ? zt : Ut, n = s != this.pY, i = Math.abs(t.deltaY))), t.direction = o, n && i > e.threshold && o & e.direction;
      }, attrTest:function(t) {
        return ot.prototype.attrTest.call(this, t) && (this.state & ve || !(this.state & ve) && this.directionTest(t));
      }, emit:function(t) {
        this.pX = t.deltaX, this.pY = t.deltaY;
        var e = nt(t.direction);
        e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
      }}), c(st, ot, {defaults:{event:"pinch", threshold:0, pointers:2}, getTouchAction:function() {
        return [de];
      }, attrTest:function(t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ve);
      }, emit:function(t) {
        if (1 !== t.scale) {
          var e = t.scale < 1 ? "in" : "out";
          t.additionalEvent = this.options.event + e;
        }
        this._super.emit.call(this, t);
      }}), c(at, tt, {defaults:{event:"press", pointers:1, time:251, threshold:9}, getTouchAction:function() {
        return [he];
      }, process:function(t) {
        var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, o = t.deltaTime > e.time;
        if (this._input = t, !i || !n || t.eventType & (Rt | At) && !o) {
          this.reset();
        } else {
          if (t.eventType & Dt) {
            this.reset(), this._timer = u(function() {
              this.state = xe, this.tryEmit();
            }, e.time, this);
          } else {
            if (t.eventType & Rt) {
              return xe;
            }
          }
        }
        return Se;
      }, reset:function() {
        clearTimeout(this._timer);
      }, emit:function(t) {
        this.state === xe && (t && t.eventType & Rt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = xt(), this.manager.emit(this.options.event, this._input)));
      }}), c(ut, ot, {defaults:{event:"rotate", threshold:0, pointers:2}, getTouchAction:function() {
        return [de];
      }, attrTest:function(t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ve);
      }}), c(lt, ot, {defaults:{event:"swipe", threshold:10, velocity:.3, direction:Xt | Ht, pointers:1}, getTouchAction:function() {
        return rt.prototype.getTouchAction.call(this);
      }, attrTest:function(t) {
        var e, n = this.options.direction;
        return n & (Xt | Ht) ? e = t.overallVelocity : n & Xt ? e = t.overallVelocityX : n & Ht && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && bt(e) > this.options.velocity && t.eventType & Rt;
      }, emit:function(t) {
        var e = nt(t.offsetDirection);
        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
      }}), c(pt, tt, {defaults:{event:"tap", pointers:1, taps:1, interval:300, time:250, threshold:9, posThreshold:10}, getTouchAction:function() {
        return [ce];
      }, process:function(t) {
        var e = this.options, n = t.pointers.length === e.pointers, i = t.distance < e.threshold, o = t.deltaTime < e.time;
        if (this.reset(), t.eventType & Dt && 0 === this.count) {
          return this.failTimeout();
        }
        if (i && o && n) {
          if (t.eventType != Rt) {
            return this.failTimeout();
          }
          var r = this.pTime ? t.timeStamp - this.pTime < e.interval : !0, s = !this.pCenter || A(this.pCenter, t.center) < e.posThreshold;
          this.pTime = t.timeStamp, this.pCenter = t.center, s && r ? this.count += 1 : this.count = 1, this._input = t;
          var a = this.count % e.taps;
          if (0 === a) {
            return this.hasRequireFailures() ? (this._timer = u(function() {
              this.state = xe, this.tryEmit();
            }, e.interval, this), ve) : xe;
          }
        }
        return Se;
      }, failTimeout:function() {
        return this._timer = u(function() {
          this.state = Se;
        }, this.options.interval, this), Se;
      }, reset:function() {
        clearTimeout(this._timer);
      }, emit:function() {
        this.state == xe && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }}), ht.VERSION = "2.0.7", ht.defaults = {domEvents:!1, touchAction:pe, enable:!0, inputTarget:null, inputClass:null, preset:[[ut, {enable:!1}], [st, {enable:!1}, ["rotate"]], [lt, {direction:Xt}], [rt, {direction:Xt}, ["swipe"]], [pt], [pt, {event:"doubletap", taps:2}, ["tap"]], [at]], cssProps:{userSelect:"none", touchSelect:"none", touchCallout:"none", contentZooming:"none", userDrag:"none", tapHighlightColor:"rgba(0,0,0,0)"}};
      var Pe = 1, ke = 2;
      ct.prototype = {set:function(t) {
        return _t(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
      }, stop:function(t) {
        this.session.stopped = t ? ke : Pe;
      }, recognize:function(t) {
        var e = this.session;
        if (!e.stopped) {
          this.touchAction.preventDefaults(t);
          var n, i = this.recognizers, o = e.curRecognizer;
          (!o || o && o.state & xe) && (o = e.curRecognizer = null);
          for (var r = 0;r < i.length;) {
            n = i[r], e.stopped === ke || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(t), !o && n.state & (ve | me | be) && (o = e.curRecognizer = n), r++;
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
        if (l(t, "add", this)) {
          return this;
        }
        var e = this.get(t.options.event);
        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
      }, remove:function(t) {
        if (l(t, "remove", this)) {
          return this;
        }
        if (t = this.get(t)) {
          var e = this.recognizers, n = x(e, t);
          -1 !== n && (e.splice(n, 1), this.touchAction.update());
        }
        return this;
      }, on:function(t, e) {
        if (t !== a && e !== a) {
          var n = this.handlers;
          return p(b(t), function(t) {
            n[t] = n[t] || [], n[t].push(e);
          }), this;
        }
      }, off:function(t, e) {
        if (t !== a) {
          var n = this.handlers;
          return p(b(t), function(t) {
            e ? n[t] && n[t].splice(x(n[t], e), 1) : delete n[t];
          }), this;
        }
      }, emit:function(t, e) {
        this.options.domEvents && ft(t, e);
        var n = this.handlers[t] && this.handlers[t].slice();
        if (n && n.length) {
          e.type = t, e.preventDefault = function() {
            e.srcEvent.preventDefault();
          };
          for (var i = 0;i < n.length;) {
            n[i](e), i++;
          }
        }
      }, destroy:function() {
        this.element && dt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }}, _t(ht, {INPUT_START:Dt, INPUT_MOVE:It, INPUT_END:Rt, INPUT_CANCEL:At, STATE_POSSIBLE:ye, STATE_BEGAN:ve, STATE_CHANGED:me, STATE_ENDED:be, STATE_RECOGNIZED:xe, STATE_CANCELLED:we, STATE_FAILED:Se, DIRECTION_NONE:Ft, DIRECTION_LEFT:Nt, DIRECTION_RIGHT:qt, DIRECTION_UP:zt, DIRECTION_DOWN:Ut, DIRECTION_HORIZONTAL:Xt, DIRECTION_VERTICAL:Ht, DIRECTION_ALL:Wt, Manager:ct, Input:C, TouchAction:J, TouchInput:W, MouseInput:z, PointerEventInput:U, TouchMouseInput:V, SingleTouchInput:X, Recognizer:tt, 
      AttrRecognizer:ot, Tap:pt, Pan:rt, Swipe:lt, Pinch:st, Rotate:ut, Press:at, on:g, off:y, each:p, merge:St, extend:wt, assign:_t, inherit:c, bindFn:d, prefixed:P});
      var Te = "undefined" != typeof o ? o : "undefined" != typeof self ? self : {};
      Te.Hammer = ht, i = function() {
        return ht;
      }.call(e, n, e, t), !(i !== a && (t.exports = i));
    }(window, document, "Hammer");
  }, function(t, e, n) {
    var i = n(96);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._handle_q1som_5 {\n  width:          13px;\n  width:          13px;\n  width:          0.8125rem;\n  height:          13px;\n  height:          13px;\n  height:         0.8125rem;\n  \n  cursor:         pointer;\n  -webkit-transform:      translateX(0);\n          transform:      translateX(0)\n  /*backface-visibility: hidden;*/\n}\n._handle__inner_q1som_1, ._handle__shadow_q1som_1 {\n  position:          absolute;\n  left:          0;\n  top:          0;\n  z-index:          1;\n  width:          100%;\n  height:          100%;\n  border-radius:          50%;\n  cursor:          pointer;\n  /*transform:      translateZ(0);*/\n  -webkit-backface-visibility:          hidden;\n          backface-visibility:          hidden\n}\n._handle__inner_q1som_1 {\n  background:          #FFF\n}\n._handle__shadow_q1som_1 {\n  box-shadow:          0.0625rem 0.0625rem 0.125rem black;\n  opacity:          .35;\n  z-index:          0\n}\n._handle_q1som_5:hover ._handle__inner_q1som_1, ._handle_q1som_5:hover ._handle__shadow_q1som_1 {\n  -webkit-transform:          scale(1.1);\n          transform:          scale(1.1)\n}\n._handle_q1som_5:active ._handle__inner_q1som_1 {\n  -webkit-transform:          scale(1.2);\n          transform:          scale(1.2)\n  /*box-shadow:     calc( $PX ) calc( $PX ) calc( 1*$PX ) rgba(0,0,0,.35);*/\n}\n._handle_q1som_5:active ._handle__shadow_q1som_1 {\n  opacity:          .85;\n  -webkit-transform:          scale(1);\n          transform:          scale(1)\n}\n._handle_q1som_5._is-bound_q1som_54 {\n  width:          9px;\n  width:          9px;\n  width:          0.5625rem;\n  height:          20px;\n  height:          20px;\n  height:          1.25rem;\n  margin-left:          -9px;\n  margin-left:          -9px;\n  margin-left:          -0.5625rem;\n  margin-top:          -10px;\n  margin-top:          -10px;\n  margin-top:          -0.625rem\n}\n._handle_q1som_5._is-bound_q1som_54 ._handle__inner_q1som_1 {\n  background:          #FF512F\n}\n._handle_q1som_5._is-bound_q1som_54 ._handle__inner_q1som_1:after {\n  content:          '';\n  position:          absolute;\n  right:          0;\n  top:          50%;\n  margin-top:          -20px;\n  margin-top:          -20px;\n  margin-top:          -1.25rem;\n  width:          1px;\n  width:          1px;\n  width:          0.0625rem;\n  height:          40px;\n  height:          40px;\n  height:          2.5rem;\n  background:          #FF512F\n}\n._handle_q1som_5._is-bound_q1som_54 ._handle__inner_q1som_1, ._handle_q1som_5._is-bound_q1som_54 ._handle__shadow_q1som_1 {\n  border-top-left-radius:          3px;\n  border-top-left-radius:          3px;\n  border-top-left-radius:          0.1875rem;\n  border-bottom-left-radius:          3px;\n  border-bottom-left-radius:          3px;\n  border-bottom-left-radius:          0.1875rem;\n  border-top-right-radius:          0;\n  border-bottom-right-radius:          0\n}\n._handle_q1som_5._is-inversed_q1som_82 {\n  margin-left:          0\n}\n._handle_q1som_5._is-inversed_q1som_82 ._handle__shadow_q1som_1 {\n  box-shadow:          -0.0625rem 0.0625rem 0.125rem black\n}\n._handle_q1som_5._is-inversed_q1som_82 ._handle__inner_q1som_1 {\n  border-top-left-radius:          0;\n  border-bottom-left-radius:          0;\n  border-top-right-radius:          3px;\n  border-top-right-radius:          3px;\n  border-top-right-radius:          0.1875rem;\n  border-bottom-right-radius:          3px;\n  border-bottom-right-radius:          3px;\n  border-bottom-right-radius:          0.1875rem\n}\n._handle_q1som_5._is-inversed_q1som_82 ._handle__inner_q1som_1:after {\n  right:          auto;\n  left:          0\n}\n\n", 
    ""]);
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
        for (var i = {}, o = 0;o < this.length;o++) {
          var r = this[o][0];
          "number" == typeof r && (i[r] = !0);
        }
        for (o = 0;o < e.length;o++) {
          var s = e[o];
          "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s));
        }
      }, t;
    };
  }, function(t, e, n) {
    function i(t, e) {
      for (var n = 0;n < t.length;n++) {
        var i = t[n], o = d[i.id];
        if (o) {
          o.refs++;
          for (var r = 0;r < o.parts.length;r++) {
            o.parts[r](i.parts[r]);
          }
          for (;r < i.parts.length;r++) {
            o.parts.push(l(i.parts[r], e));
          }
        } else {
          for (var s = [], r = 0;r < i.parts.length;r++) {
            s.push(l(i.parts[r], e));
          }
          d[i.id] = {id:i.id, refs:1, parts:s};
        }
      }
    }
    function o(t) {
      for (var e = [], n = {}, i = 0;i < t.length;i++) {
        var o = t[i], r = o[0], s = o[1], a = o[2], u = o[3], l = {css:s, media:a, sourceMap:u};
        n[r] ? n[r].parts.push(l) : e.push(n[r] = {id:r, parts:[l]});
      }
      return e;
    }
    function r(t, e) {
      var n = g(), i = m[m.length - 1];
      if ("top" === t.insertAt) {
        i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), m.push(e);
      } else {
        if ("bottom" !== t.insertAt) {
          throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        }
        n.appendChild(e);
      }
    }
    function s(t) {
      t.parentNode.removeChild(t);
      var e = m.indexOf(t);
      e >= 0 && m.splice(e, 1);
    }
    function a(t) {
      var e = document.createElement("style");
      return e.type = "text/css", r(t, e), e;
    }
    function u(t) {
      var e = document.createElement("link");
      return e.rel = "stylesheet", r(t, e), e;
    }
    function l(t, e) {
      var n, i, o;
      if (e.singleton) {
        var r = v++;
        n = y || (y = a(e)), i = p.bind(null, n, r, !1), o = p.bind(null, n, r, !0);
      } else {
        t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(e), i = c.bind(null, n), o = function() {
          s(n), n.href && URL.revokeObjectURL(n.href);
        }) : (n = a(e), i = h.bind(null, n), o = function() {
          s(n);
        });
      }
      return i(t), function(e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) {
            return;
          }
          i(t = e);
        } else {
          o();
        }
      };
    }
    function p(t, e, n, i) {
      var o = n ? "" : i.css;
      if (t.styleSheet) {
        t.styleSheet.cssText = b(e, o);
      } else {
        var r = document.createTextNode(o), s = t.childNodes;
        s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(r, s[e]) : t.appendChild(r);
      }
    }
    function h(t, e) {
      var n = e.css, i = e.media;
      if (i && t.setAttribute("media", i), t.styleSheet) {
        t.styleSheet.cssText = n;
      } else {
        for (;t.firstChild;) {
          t.removeChild(t.firstChild);
        }
        t.appendChild(document.createTextNode(n));
      }
    }
    function c(t, e) {
      var n = e.css, i = e.sourceMap;
      i && (n += "\n/*# sourceMappingURL\x3ddata:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
      var o = new Blob([n], {type:"text/css"}), r = t.href;
      t.href = URL.createObjectURL(o), r && URL.revokeObjectURL(r);
    }
    var d = {}, f = function(t) {
      var e;
      return function() {
        return "undefined" == typeof e && (e = t.apply(this, arguments)), e;
      };
    }, _ = f(function() {
      return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }), g = f(function() {
      return document.head || document.getElementsByTagName("head")[0];
    }), y = null, v = 0, m = [];
    t.exports = function(t, e) {
      e = e || {}, "undefined" == typeof e.singleton && (e.singleton = _()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
      var n = o(t);
      return i(n, e), function(t) {
        for (var r = [], s = 0;s < n.length;s++) {
          var a = n[s], u = d[a.id];
          u.refs--, r.push(u);
        }
        if (t) {
          var l = o(t);
          i(l, e);
        }
        for (var s = 0;s < r.length;s++) {
          var u = r[s];
          if (0 === u.refs) {
            for (var p = 0;p < u.parts.length;p++) {
              u.parts[p]();
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
    t.exports = {handle:"_handle_q1som_5", handle__inner:"_handle__inner_q1som_1", handle__shadow:"_handle__shadow_q1som_1", "is-bound":"_is-bound_q1som_54", "is-inversed":"_is-inversed_q1som_82"};
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(93), h = i(p), c = n(94), d = (i(c), n(101)), f = i(d);
    n(102);
    var _ = n(104), g = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.isProgress = !0, this._defaults.isRipple = !0;
      }, e.prototype._render = function() {
        t.prototype._render.call(this), this._props.isRipple && (this.ripple = new f["default"]({withHold:!1, className:_.track__ripple, parent:this.el}));
      }, e.prototype._applyShift = function(t) {
        if (this._props.isProgress) {
          this._props.isInversed && (t = this._maxWidth - t);
          var e = "scaleX( " + t + " )";
          this.trackProgressEl.style.transform = e;
        }
      }, e.prototype._addMainClasses = function() {
        var t = this._props, e = this.el.classList;
        e.add(_.track), t.isInversed && e.add(_["is-inversed"]), t.isBound && e.add(_["is-bound"]), "y" === t.direction && e.add(_["is-y"]);
      }, e.prototype._addElements = function() {
        var t = this._props;
        if (t.isProgress) {
          var e = document.createElement("div");
          e.classList.add("" + _["track__track-progress"]), this.trackProgressEl = e, this.el.appendChild(e);
        }
        if (!t.isBound) {
          var n = document.createElement("div");
          n.classList.add("" + _.track__track), this.el.appendChild(n);
        }
      }, e.prototype._pointerDown = function(t) {
        var e = this._props, n = "x" === e.direction ? t.layerX : t.layerY;
        this._isPointerDown = !0, "y" === e.direction && (n = this._maxWidth - t.layerY), n = this._props.isInversed && 0 > n ? this._maxWidth + n : n;
        var i = this._shiftToProgress(n);
        i = Math.abs(e.snapPoint - i) < e.snapStrength ? e.snapPoint : i, this.setProgress(i), e.isRipple && this.ripple._hold(t), this._callIfFunction(e.onSeekStart, t);
      }, e;
    }(h["default"]);
    e["default"] = g;
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(90), h = i(p), c = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.withHold = !0;
      }, e.prototype._render = function() {
        t.prototype._render.call(this), this._addRipple();
      }, e.prototype._addRipple = function() {
        var t, e = this;
        this.transit = new mojs.Transit((t = {parent:this.el, left:0, top:0, strokeWidth:{10:0}, fill:"none", stroke:"hotpink"}, t.fill = "hotpink", t.fillOpacity = .75, t.opacity = {"0.85":0}, t.radius = 40, t.scale = {0:1}, t.isShowEnd = !1, t.onStart = function() {
          e.isStart = !0;
        }, t.onUpdate = this._onUpdate.bind(this), t.onComplete = function() {
          e.isStart = !1;
        }, t));
      }, e.prototype._onUpdate = function(t) {
        this._props.withHold && t >= .15 && this.isStart && !this.isRelease && (this.isStart = !1, this.transit.setSpeed(.02));
      }, e.prototype._release = function() {
        this._props.withHold && (this.isRelease = !0, this.transit.setSpeed(1).play());
      }, e.prototype._hold = function(t) {
        var e = null != t.offsetX ? t.offsetX : t.layerX, n = null != t.offsetY ? t.offsetY : t.layerY;
        this.isRelease = !1, this.transit.tune({x:e, y:n}).replay();
      }, e.prototype._cancel = function() {
        this._props.withHold && (this.isRelease = !0, this.transit.pause().setSpeed(1).playBackward());
      }, e;
    }(h["default"]);
    e["default"] = c;
  }, function(t, e, n) {
    var i = n(103);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._track_1inlw_5 {\n  position:           relative;\n  height:             100%\n\n\n}\n._track__track_1inlw_1 {\n  position:           absolute;\n  top:           50%;\n  left:           0;\n  width:           100%;\n  height:           1px;\n  height:           1px;\n  height:           0.0625rem;\n  background:           #FFF;\n  box-shadow:           0.0625rem 0.0625rem 0.0625rem rgba(0,0,0,.5)\n\n\n}\n._track__track_1inlw_1:after {\n  content:           '';\n  position:           absolute;\n  left:           0;\n  top:           -20px;\n  top:           -20px;\n  top:           -1.25rem;\n  width:           100%;\n  height:           40px;\n  height:           40px;\n  height:           2.5rem;\n  cursor:           pointer\n  /*background-color: yellow;*/\n\n\n}\n._track__track-progress_1inlw_1 {\n  position:           absolute;\n  left:           0;\n  top:           50%;\n  margin-top:           -1px;\n  margin-top:           -1px;\n  margin-top:           -0.0625rem;\n  height:           3px;\n  height:           3px;\n  height:           0.1875rem;\n  width:           1px;\n  /*background:       $c-orange;*/\n  background:           #FFFFFF;\n  z-index:           1;\n  -webkit-transform-origin:           left center;\n          transform-origin:           left center\n\n\n}\n._track__track-progress_1inlw_1:after {\n  content:           '';\n  position:           absolute;\n  left:           0;\n  top:           -20px;\n  top:           -20px;\n  top:           -1.25rem;\n  width:           100%;\n  height:           40px;\n  height:           40px;\n  height:           2.5rem;\n  cursor:           pointer\n  /*background-color: yellow;*/\n\n\n}\n._track__ripple_1inlw_1 {\n  position:           absolute;\n  left:           0;\n  top:           0;\n  right:           0;\n  bottom:           0;\n  overflow:           hidden;\n  z-index:           1\n\n\n}\n._track_1inlw_5._is-inversed_1inlw_65 {\n  left:           auto;\n  right:           0\n\n\n}\n._track_1inlw_5._is-inversed_1inlw_65 ._track__track-progress_1inlw_1 {\n  -webkit-transform-origin:           right center;\n          transform-origin:           right center\n\n\n}\n._track_1inlw_5._is-bound_1inlw_74 ._track__track-progress_1inlw_1 {\n  background:           #FF512F\n\n\n}\n._track_1inlw_5._is-y_1inlw_78 ._track__track_1inlw_1 {\n  top:           0;\n  left:           50%;\n  height:           100%;\n  width:           1px;\n  width:           1px;\n  width:           0.0625rem\n  /*box-shadow:       calc( $PX ) calc( $PX ) calc( $PX ) rgba(0,0,0,.5); */\n\n\n}\n\n", 
    ""]);
  }, function(t, e) {
    t.exports = {track:"_track_1inlw_5", track__track:"_track__track_1inlw_1", "track__track-progress":"_track__track-progress_1inlw_1", track__ripple:"_track__ripple_1inlw_1", "is-inversed":"_is-inversed_1inlw_65", "is-bound":"_is-bound_1inlw_74", "is-y":"_is-y_1inlw_78"};
  }, function(t, e, n) {
    var i = n(106);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "/*@import './handle.postcss.css';*/\n._slider_14t9x_6 {\n  position:           relative;\n  width:              100%;\n  height:           30px;\n  height:           30px;\n  height:             1.875rem\n}\n._slider__inner_14t9x_1 {\n  width:           100%;\n  height:           100%;\n  position:           relative\n}\n._slider_14t9x_6 ._handle_14t9x_17, ._slider_14t9x_6 ._progress-handle_14t9x_18 {\n  z-index:           3;\n  position:           absolute;\n  top:           50%\n}\n._slider_14t9x_6 ._progress-handle_14t9x_18 {\n  left:           0;\n  margin-left:           -6.5px;\n  margin-left:           -6.5px;\n  margin-left:           -0.40625rem;\n  margin-top:           -6.5px;\n  margin-top:           -6.5px;\n  margin-top:           -0.40625rem\n}\n._slider_14t9x_6 ._track_14t9x_30 {\n  z-index:           2\n}\n._slider_14t9x_6._is-y_14t9x_34 {\n  width:           30px;\n  width:           30px;\n  width:           1.875rem;\n  height:           100%;\n}\n._slider_14t9x_6._is-y_14t9x_34 ._handle_14t9x_17 {\n  left:           50%;\n  top:           auto;\n  bottom:           0;\n  margin-top:           0;\n  margin-bottom:           -6.5px;\n  margin-bottom:           -6.5px;\n  margin-bottom:           -0.40625rem\n}\n\n", 
    ""]);
  }, function(t, e) {
    t.exports = {slider:"_slider_14t9x_6", slider__inner:"_slider__inner_14t9x_1", handle:"_handle_14t9x_17", "progress-handle":"_progress-handle_14t9x_18", track:"_track_14t9x_30", "is-y":"_is-y_14t9x_34"};
  }, function(t, e, n) {
    var i = n(109);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "/*@import './handle.postcss.css';*/\n._player-slider_1t00q_6 {\n  /*overflow:     hidden;*/\n  height:       40px;\n  height:       40px;\n  height:       2.5rem\n\n}\n._player-slider_1t00q_6 \x3e div {\n  position:       absolute;\n  left:       0;\n  top:       0;\n  z-index:       2\n\n}\n._player-slider_1t00q_6 ._slider_1t00q_15 {\n  z-index:       1;\n  height:       100%\n\n}\n\n", ""]);
  }, function(t, e) {
    t.exports = {"player-slider":"_player-slider_1t00q_6", slider:"_slider_1t00q_15"};
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(112), h = i(p), c = n(116), d = i(c);
    n(120);
    var f = n(122), _ = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.icon = "", this._defaults.iconClass = "";
      }, e.prototype._render = function() {
        t.prototype._render.call(this);
        var e = this._props, n = "icon-button";
        this.el.classList.add(f[n]);
        new h["default"]({shape:e.icon, parent:this.el, className:[f.icon, e.iconClass], prefix:e.prefix});
      }, e;
    }(d["default"]);
    e["default"] = _;
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(90), h = i(p), c = n(94);
    i(c);
    n(113);
    var d = n(115), f = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.shape = "", this._defaults.size = "x1", this.NS = "http://www.w3.org/2000/svg";
      }, e.prototype._render = function() {
        this._addMainElement(), this.el.classList.add(d.icon), this.el.classList.add(d["is-" + this._props.size]), this._renderIcon();
      }, e.prototype._renderIcon = function() {
        var t = this._props, e = document.createElementNS(this.NS, "svg"), n = '\x3cuse xlink:href\x3d"#' + t.prefix + t.shape + '-icon-shape" /\x3e';
        e.setAttribute("viewBox", "0 0 32 32"), this._addSVGHtml(e, n), this.el.appendChild(e);
      }, e.prototype._addSVGHtml = function(t, e) {
        var n = this._createElement("div"), i = "\x3csvg\x3e " + e + " \x3c/svg\x3e";
        n.innerHTML = i;
        for (var o = Array.prototype.slice.call(n.childNodes[0].childNodes), r = 0;r < o.length;r++) {
          t.appendChild(o[r]);
        }
      }, e;
    }(h["default"]);
    e["default"] = f;
  }, function(t, e, n) {
    var i = n(114);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._icon_y498a_5 {\n  position:     relative;\n  width:     12px;\n  width:     12px;\n  width:        0.75rem;\n  height:     12px;\n  height:     12px;\n  height:       0.75rem;\n  cursor:       pointer\n}\n._icon_y498a_5 \x3e svg {\n  position:     absolute;\n  left:     0;\n  top:     0;\n  width:     100%;\n  height:     100%;\n  fill:     inherit\n}\n._icon_y498a_5 \x3e svg \x3e use {\n  fill:     inherit\n}\n._icon_y498a_5:after {\n  content:     '';\n  position:     absolute;\n  left:     0;\n  top:     0;\n  right:     0;\n  bottom:     0;\n  z-index:     1\n}\n._icon_y498a_5._is-x2_y498a_33 {\n  width:     16px;\n  width:     16px;\n  width:     1rem;\n  height:     16px;\n  height:     16px;\n  height:     1rem\n}\n\n", 
    ""]);
  }, function(t, e) {
    t.exports = {icon:"_icon_y498a_5", "is-x2":"_is-x2_y498a_33"};
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(90), h = i(p), c = n(94), d = i(c), f = n(101), _ = i(f);
    n(117);
    var g = n(119), y = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.link = null, this._defaults.title = "", this._defaults.target = null, this._defaults.onPointerDown = null, this._defaults.onPointerUp = null, this._defaults.onDoubleTap = null;
      }, e.prototype._render = function() {
        var t = this._props, e = "button", n = null != t.link ? "a" : "div";
        this._addMainElement(n), this.el.classList.add(g[e]), this.el.setAttribute("title", t.title), t.link && this.el.setAttribute("href", t.link), t.link && t.target && this.el.setAttribute("target", t.target), this._addListeners(), this._createRipple();
      }, e.prototype._createRipple = function() {
        this.ripple = new _["default"]({className:g.button__ripple, parent:this.el});
      }, e.prototype._addListeners = function() {
        this._addPointerDownEvent(this.el, this._pointerDown.bind(this)), this._addPointerUpEvent(this.el, this._pointerUp.bind(this)), this._addPointerUpEvent(document, this._pointerCancel.bind(this)), (0, d["default"])(this.el).on("doubletap", this._doubleTap.bind(this));
      }, e.prototype._pointerDown = function(t) {
        this.wasTouched = !0, this._callIfFunction(this._props.onPointerDown), this.ripple._hold(t);
      }, e.prototype._pointerUp = function(t) {
        return this.wasTouched ? (this.wasTouched = !1, this._callIfFunction(this._props.onPointerUp), this.ripple._release(), t.preventDefault(), !1) : void t.stopPropagation();
      }, e.prototype._pointerCancel = function(t) {
        this.wasTouched && (this.wasTouched = !1, this.ripple._cancel());
      }, e.prototype._doubleTap = function(t) {
        this._callIfFunction(this._props.onDoubleTap);
      }, e;
    }(h["default"]);
    e["default"] = y;
  }, function(t, e, n) {
    var i = n(118);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, '._button_r3ni6_4 {\n  position:   relative;\n  width:   35px;\n  width:   35px;\n  width:      2.1875rem;\n  height:   40px;\n  height:   40px;\n  height:     2.5rem;\n  cursor:     pointer;\n  fill:       #FFF;\n  display:    inline-block\n}\n._button__ripple_r3ni6_1 {\n  position:   absolute;\n  left:   0;\n  right:   0;\n  top:   0;\n  bottom:   0;\n  z-index:   5;\n  overflow:   hidden\n}\n._button__ripple_r3ni6_1:after {\n  content:   "";\n  position:   absolute;\n  left:   0;\n  right:   0;\n  top:   0;\n  bottom:   0;\n  z-index:   1;\n  cursor:   pointer\n}\n._button_r3ni6_4:hover {\n  opacity:   .85\n}\n._button_r3ni6_4:active {\n  opacity:   1\n}\n\n', 
    ""]);
  }, function(t, e) {
    t.exports = {button:"_button_r3ni6_4", button__ripple:"_button__ripple_r3ni6_1"};
  }, function(t, e, n) {
    var i = n(121);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._icon-button_1yshr_4 {\n  /* styles */\n}\n._icon-button_1yshr_4 ._icon_1yshr_4 {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate( -50%, -50% );\n          transform: translate( -50%, -50% )\n}\n\n", ""]);
  }, function(t, e) {
    t.exports = {"icon-button":"_icon-button_1yshr_4", icon:"_icon_1yshr_4"};
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(90), h = i(p), c = n(124), d = i(c), f = n(92), _ = i(f);
    n(132);
    var g = n(134), y = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.isOn = !1, this._defaults.speed = 1, this._defaults.progress = .5, this._defaults.onSpeedChange = null, this._defaults.onIsSpeed = null;
      }, e.prototype.reset = function() {
        this._onDoubleTap();
      }, e.prototype.decreaseSpeed = function() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? .01 : arguments[0], e = this._props;
        return e.progress -= t, e.progress = e.progress < 0 ? 0 : e.progress, this.slider.setProgress(e.progress), this;
      }, e.prototype.increaseSpeed = function() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? .01 : arguments[0], e = this._props;
        return e.progress += t, e.progress = e.progress > 1 ? 1 : e.progress, this.slider.setProgress(e.progress), this;
      }, e.prototype._render = function() {
        var t = this._props, e = "speed-control", n = this._createElement("div");
        this._createElement("div"), this._createElement("div");
        this._addMainElement(), this.el.classList.add(g[e]), n.classList.add(g[e + "__slider"]), this.el.appendChild(n), this.labelButton = new d["default"]({parent:this.el, isOn:t.isOn, className:g[e + "__icon"], onStateChange:this._onButtonStateChange.bind(this), onDoubleTap:this._onDoubleTap.bind(this)}), this.slider = new _["default"]({parent:n, isProgress:!1, direction:"y", onProgress:this._onSliderProgress.bind(this), snapPoint:.5, snapStrength:.05}), this.slider.setProgress(this._speedToProgress(this._props.speed));
      }, e.prototype._onSliderProgress = function(t) {
        t = Math.max(t, 1E-4);
        var e = this._props;
        this._callIfFunction(e.onSpeedChange, this._progressToSpeed(t), t), this.labelButton.setLabelText(this._progressToLabel(e.progress = t));
      }, e.prototype._onButtonStateChange = function(t) {
        var e = t ? "add" : "remove";
        this.el.classList[e](g["is-on"]), this._callIfFunction(this._props.onIsSpeed, t);
      }, e.prototype._progressToLabel = function(t) {
        var e = this._progressToSpeed(t).toFixed(2), n = /\.+00$/;
        return e.match(n) && (e = e.replace(n, "")), e + "x";
      }, e.prototype._progressToSpeed = function(t) {
        var e = t;
        return .5 > t && (e = 2 * t), .5 === t && (e = 1), t > .5 && (t -= .5, e = 1 + 18 * t), e;
      }, e.prototype._speedToProgress = function(t) {
        var e = t;
        return 1 > t && (e = t / 2), 1 === t && (e = .5), t > 1 && (e = .5 + (t - 1) / 18), e;
      }, e.prototype._onDoubleTap = function() {
        this.slider.setProgress(.5), this.labelButton.off();
      }, e;
    }(h["default"]);
    e["default"] = y;
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(125), h = i(p);
    n(129);
    var c = n(131), d = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.title = "speed (reset: alt + 1)";
      }, e.prototype.setLabelText = function(t) {
        this.label.innerHTML = t;
      }, e.prototype._render = function() {
        t.prototype._render.call(this), this._addClass(this.el, c["label-button"]), this._addLabel();
      }, e.prototype._addLabel = function() {
        this.label = this._createElement("div"), this.label.classList.add(c["label-button__label"]), this.el.appendChild(this.label);
      }, e;
    }(h["default"]);
    e["default"] = d;
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(116), h = i(p);
    n(126);
    var c = n(128), d = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.isOn = !1, this._defaults.onStateChange = null;
      }, e.prototype.on = function() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
        this._props.isOn = !0, this._reactOnStateChange(t);
      }, e.prototype.off = function() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
        this._props.isOn = !1, this._reactOnStateChange(t);
      }, e.prototype._render = function() {
        t.prototype._render.call(this), this.el.classList.add(c["button-switch"]), this._setState(), this._reactOnStateChange();
      }, e.prototype._pointerUp = function(e) {
        return this.wasTouched ? (this._changeState(), void t.prototype._pointerUp.call(this, e)) : (this.wasTouched = !1, void e.stopPropagation());
      }, e.prototype._changeState = function() {
        this._props.isOn = !this._props.isOn, this._reactOnStateChange();
      }, e.prototype._reactOnStateChange = function() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
        t && this._callIfFunction(this._props.onStateChange, this._props.isOn), this._setState();
      }, e.prototype._setState = function() {
      }, e;
    }(h["default"]);
    e["default"] = d;
  }, function(t, e, n) {
    var i = n(127);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, '._button-switch_1g5lg_4 {\n  position:     relative;\n  display:      inline-block\n}\n._button-switch_1g5lg_4 \x3e ._icon_1g5lg_8 {\n  position:     absolute\n}\n._button-switch_1g5lg_4:after {\n  content:     "";\n  position:     absolute;\n  left:     0;\n  top:     0;\n  right:     0;\n  bottom:     0;\n  z-index:     1\n}\n\n', ""]);
  }, function(t, e) {
    t.exports = {"button-switch":"_button-switch_1g5lg_4", icon:"_icon_1g5lg_8"};
  }, function(t, e, n) {
    var i = n(130);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._label-button_1cxps_4 {\n  font-family:        Arial, sans-serif;\n  font-size:        9px;\n  font-size:        9px;\n  font-size:          0.5625rem;\n  letter-spacing:        0.5px;\n  letter-spacing:        0.5px;\n  letter-spacing:     0.03125rem;\n  color:              white\n}\n._label-button__label_1cxps_1 {\n  position:        absolute;\n  left:        50%;\n  top:        50%;\n  -webkit-transform:        translate( -50%, -50% );\n          transform:        translate( -50%, -50% )\n}\n", 
    ""]);
  }, function(t, e) {
    t.exports = {"label-button":"_label-button_1cxps_4", "label-button__label":"_label-button__label_1cxps_1"};
  }, function(t, e, n) {
    var i = n(133);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._speed-control_1svrw_4 {\n  position:       relative;\n  display:        inline-block;\n  height:       40px;\n  height:       40px;\n  height:         2.5rem\n}\n._speed-control__slider_1svrw_1 {\n  position:       absolute;\n  bottom:       100%;\n  left:       3px;\n  left:       3px;\n  left:       0.1875rem;\n  width:       30px;\n  width:       30px;\n  width:       1.875rem;\n  height:       80px;\n  height:       80px;\n  height:       5rem;\n  padding-top:       20px;\n  padding-top:       20px;\n  padding-top:       1.25rem;\n  padding-bottom:       20px;\n  padding-bottom:       20px;\n  padding-bottom:       1.25rem;\n  border-top-right-radius:       3px;\n  border-top-right-radius:       3px;\n  border-top-right-radius:       0.1875rem;\n  border-top-left-radius:       3px;\n  border-top-left-radius:       3px;\n  border-top-left-radius:       0.1875rem;\n  background:       #3A0839;\n  -webkit-transform:       translate(-6249999.9375rem, -6249999.9375rem);\n          transform:       translate(-6249999.9375rem, -6249999.9375rem);\n  -webkit-backface-visibility:       hidden;\n          backface-visibility:       hidden\n}\n._speed-control__slider_1svrw_1:before, ._speed-control__slider_1svrw_1:after {\n  content:       '';\n  position:       absolute;\n  top:       50%;\n  width:       3px;\n  width:       3px;\n  width:       0.1875rem;\n  height:       1px;\n  height:       1px;\n  height:       0.0625rem;\n  background:       #FFF\n}\n._speed-control__slider_1svrw_1:before {\n  left:       5px;\n  left:       5px;\n  left:       0.3125rem\n}\n._speed-control__slider_1svrw_1:after {\n  right:       5px;\n  right:       5px;\n  right:       0.3125rem\n}\n._speed-control__button_1svrw_1 {\n  border:       1px solid cyan\n}\n._speed-control_1svrw_4._is-on_1svrw_48 ._speed-control__slider_1svrw_1 {\n  -webkit-transform:       translate(0, 0);\n          transform:       translate(0, 0)\n}\n\n", 
    ""]);
  }, function(t, e) {
    t.exports = {"speed-control":"_speed-control_1svrw_4", "speed-control__slider":"_speed-control__slider_1svrw_1", "speed-control__button":"_speed-control__button_1svrw_1", "is-on":"_is-on_1svrw_48"};
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(136), h = i(p);
    n(140);
    var c = n(142), d = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.icon1 = "pause", this._defaults.icon2 = "play", this._defaults.title = "play/pause (alt + p)";
      }, e.prototype._render = function() {
        t.prototype._render.call(this), this._addClass(this.el, c["play-button"]);
      }, e;
    }(h["default"]);
    e["default"] = d;
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(125), h = i(p), c = n(112), d = i(c);
    n(137);
    var f = n(139), _ = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._render = function() {
        t.prototype._render.call(this), this.el.classList.add(f["icon-fork"]);
        var e = this._props, n = e.prefix, i = this.el, o = f.icon;
        this.icon1 = new d["default"]({shape:e.icon1, prefix:n, parent:i, className:o}), this.icon2 = new d["default"]({shape:e.icon2, prefix:n, parent:i, className:o});
      }, e.prototype._setState = function() {
        var t = this._props, e = this.el.classList, n = t.isOn ? "add" : "remove";
        e[n](f["is-on"]);
      }, e;
    }(h["default"]);
    e["default"] = _;
  }, function(t, e, n) {
    var i = n(138);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._icon-fork_csg7t_4 {\n}\n._icon-fork_csg7t_4 \x3e ._icon_csg7t_4 {\n    /*position:   absolute;*/\n    opacity: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate( -50%, -50% );\n            transform: translate( -50%, -50% )\n}\n._icon-fork_csg7t_4 \x3e ._icon_csg7t_4:nth-of-type(3) {\n    position: absolute;\n    opacity: 1\n}\n._icon-fork_csg7t_4._is-on_csg7t_18 \x3e ._icon_csg7t_4:nth-of-type(2) {\n    opacity: 1\n}\n._icon-fork_csg7t_4._is-on_csg7t_18 \x3e ._icon_csg7t_4:nth-of-type(3) {\n    opacity: 0\n}\n\n", 
    ""]);
  }, function(t, e) {
    t.exports = {"icon-fork":"_icon-fork_csg7t_4", icon:"_icon_csg7t_4", "is-on":"_is-on_csg7t_18"};
  }, function(t, e, n) {
    var i = n(141);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._play-button_16uj5_4 {\n  /* styles */\n}\n", ""]);
  }, function(t, e) {
    t.exports = {"play-button":"_play-button_16uj5_4"};
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(111), h = i(p);
    n(144);
    var c = n(146), d = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.icon = "stop", this._defaults.title = "stop (alt + s)";
      }, e.prototype._render = function() {
        t.prototype._render.call(this), this._addClass(this.el, c["stop-button"]);
      }, e;
    }(h["default"]);
    e["default"] = d;
  }, function(t, e, n) {
    var i = n(145);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._stop-button_lpa7l_4 {\n  /* styles */\n}\n", ""]);
  }, function(t, e) {
    t.exports = {"stop-button":"_stop-button_lpa7l_4"};
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(148), h = i(p);
    n(152);
    var c = n(154), d = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.icon = "repeat", this._defaults.iconSize = "x2", this._defaults.title = "repeat (alt + r)";
      }, e.prototype._render = function() {
        t.prototype._render.call(this), this._addClass(this.el, c["repeat-button"]);
      }, e;
    }(h["default"]);
    e["default"] = d;
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(112), h = i(p), c = n(125), d = i(c);
    n(149);
    var f = n(151), _ = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.icon = "", this._defaults.iconSize = "";
      }, e.prototype._render = function() {
        t.prototype._render.call(this), this.el.classList.add(f["opacity-switch"]);
        var e = this._props, n = new h["default"]({parent:this.el, shape:e.icon, size:e.iconSize, className:f.icon, prefix:e.prefix});
        this.el.appendChild(n.el);
      }, e.prototype._setState = function() {
        var t = this._props.isOn ? "add" : "remove";
        this.el.classList[t](f["is-on"]);
      }, e;
    }(d["default"]);
    e["default"] = _;
  }, function(t, e, n) {
    var i = n(150);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._opacity-switch_17z5s_4 {\n  opacity:      .5;\n\n\n\n\n}\n._opacity-switch_17z5s_4 ._icon_17z5s_6 {\n  position:   absolute;\n  left:       50%;\n  top:        50%;\n  -webkit-transform:  translate(-50%, -50%);\n          transform:  translate(-50%, -50%);\n\n\n\n\n}\n._opacity-switch_17z5s_4:hover {\n  opacity:      .4;\n\n\n\n\n}\n._opacity-switch_17z5s_4._is-on_17z5s_15 {\n  opacity:      1;\n\n\n\n\n}\n._opacity-switch_17z5s_4._is-on_17z5s_15:hover {\n  opacity:      .85;\n\n\n\n\n}\n", 
    ""]);
  }, function(t, e) {
    t.exports = {"opacity-switch":"_opacity-switch_17z5s_4", icon:"_icon_17z5s_6", "is-on":"_is-on_17z5s_15"};
  }, function(t, e, n) {
    var i = n(153);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._repeat-button_1ce74_4 {\n  /* styles */\n}\n\n", ""]);
  }, function(t, e) {
    t.exports = {"repeat-button":"_repeat-button_1ce74_4"};
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(147), h = i(p), c = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.icon = "bounds", this._defaults.title = "progress bounds (alt + b)";
      }, e;
    }(h["default"]);
    e["default"] = c;
  }, function(t, e, n) {
    function i(t) {
      return t && t.__esModule ? t : {"default":t};
    }
    e.__esModule = !0;
    var o = n(78), r = i(o), s = n(79), a = i(s), u = n(80), l = i(u), p = n(125), h = i(p), c = n(112), d = i(c);
    n(157);
    var f = n(159), _ = "hide-button", g = function(t) {
      function e() {
        return (0, r["default"])(this, e), (0, a["default"])(this, t.apply(this, arguments));
      }
      return (0, l["default"])(e, t), e.prototype._declareDefaults = function() {
        t.prototype._declareDefaults.call(this), this._defaults.title = "hide (alt + h)";
      }, e.prototype._render = function() {
        t.prototype._render.call(this), this.el.classList.add(f[_]), this._addIcon();
      }, e.prototype._addIcon = function() {
        this.icon = new d["default"]({parent:this.el, className:f[_ + "__icon"], shape:"hide", prefix:this._props.prefix});
      }, e.prototype._setState = function() {
        var t = this._props.isOn ? "add" : "remove";
        this.el.classList[t](f["is-hidden"]);
      }, e;
    }(h["default"]);
    e["default"] = g;
  }, function(t, e, n) {
    var i = n(158);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._hide-button_1hqr2_4 {\n  \n  width:        22px;\n  \n  width:        22px;\n  \n  width:        1.375rem;\n  height:        16px;\n  height:        16px;\n  height:       1rem;\n  \n  background:   #3A0839;\n\n  border-top-left-radius:        3px;\n  border-top-left-radius:        3px;\n  border-top-left-radius:  0.1875rem;\n  border-top-right-radius:        3px;\n  border-top-right-radius:        3px;\n  border-top-right-radius: 0.1875rem\n}\n._hide-button__icon_1hqr2_1 {\n  \n  position:        absolute;\n  \n  left:        50%;\n  \n  top:        50%;\n  \n  width:        8px;\n  \n  width:        8px;\n  \n  width:        0.5rem;\n  \n  height:        8px;\n  \n  height:        8px;\n  \n  height:        0.5rem;\n  \n  margin-top:        1px;\n  \n  margin-top:        1px;\n  \n  margin-top:        0.0625rem;\n  \n  -webkit-transform:        translate( -50%, -50% );\n  \n          transform:        translate( -50%, -50% )\n}\n._hide-button_1hqr2_4._is-hidden_1hqr2_24 ._hide-button__icon_1hqr2_1 {\n  \n  -webkit-transform:        translate( -50%, -65% ) rotate( 180deg );\n  \n          transform:        translate( -50%, -65% ) rotate( 180deg )\n}\n\n", 
    ""]);
  }, function(t, e) {
    t.exports = {"hide-button":"_hide-button_1hqr2_4", "hide-button__icon":"_hide-button__icon_1hqr2_1", "is-hidden":"_is-hidden_1hqr2_24"};
  }, function(t, e, n) {
    var i = n(161);
    "string" == typeof i && (i = [[t.id, i, ""]]);
    n(98)(i, {});
    i.locals && (t.exports = i.locals);
  }, function(t, e, n) {
    e = t.exports = n(97)(), e.push([t.id, "._mojs_player_tes6w_4 {\n  position:       fixed;\n  left:           0;\n  bottom:         0;\n  width:          100%;\n  height:       40px;\n  height:       40px;\n  height:         2.5rem;\n  background:     rgba( 58, 8, 57, .85 );\n  z-index:        100\n}\n._mojs_player__left_tes6w_1 {\n  position:       absolute;\n  left:       0;\n  width:       175px;\n  width:       175px;\n  width:       10.9375rem\n}\n._mojs_player__mid_tes6w_1 {\n  position:       absolute;\n  left:       175px;\n  left:       175px;\n  left:       10.9375rem;\n  right:       35px;\n  right:       35px;\n  right:       2.1875rem;\n  overflow:       hidden;\n  padding:       0 20px;\n  padding:       0 20px;\n  padding:       0 1.25rem\n}\n._mojs_player__right_tes6w_1 {\n  position:       absolute;\n  right:       0\n}\n._mojs_player__hide-button_tes6w_1 {\n  position:       absolute;\n  right:       6px;\n  right:       6px;\n  right:       0.375rem;\n  bottom:       100%\n}\n._mojs_player_tes6w_4._is-hidden_tes6w_41 {\n  -webkit-transform:       translateY(100%);\n          transform:       translateY(100%)\n}\n._mojs_player_tes6w_4._is-transition_tes6w_44 {\n  -webkit-transition:       all .15s ease-out;\n  transition:       all .15s ease-out\n}\n\n", 
    ""]);
  }, function(t, e) {
    t.exports = {"mojs_player":"_mojs_player_tes6w_4", "mojs_player__left":"_mojs_player__left_tes6w_1", "mojs_player__mid":"_mojs_player__mid_tes6w_1", "mojs_player__right":"_mojs_player__right_tes6w_1", "mojs_player__hide-button":"_mojs_player__hide-button_tes6w_1", "is-hidden":"_is-hidden_tes6w_41", "is-transition":"_is-transition_tes6w_44"};
  }]);
});