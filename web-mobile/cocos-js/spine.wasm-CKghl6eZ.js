System.register(['./_virtual_cc-DPnVUM-_.js'], (function (exports) {
  'use strict';
  var _createForOfIteratorHelperLoose;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module._;
    }],
    execute: (function () {

      var spineWasm = exports("default", function () {
        var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
        return function (spineWasm) {
          if (spineWasm === undefined) {
            spineWasm = {};
          }
          var f;
          f || (f = typeof spineWasm !== 'undefined' ? spineWasm : {});
          var aa, ca;
          f.ready = new Promise(function (a, b) {
            aa = a;
            ca = b;
          });
          var da = Object.assign({}, f),
            p = "";
          "undefined" != typeof document && document.currentScript && (p = document.currentScript.src);
          _scriptDir && (p = _scriptDir);
          0 !== p.indexOf("blob:") ? p = p.substr(0, p.replace(/[?#].*/, "").lastIndexOf("/") + 1) : p = "";
          var v = f.printErr || console.error.bind(console);
          Object.assign(f, da);
          da = null;
          var y;
          f.wasmBinary && (y = f.wasmBinary);
          f.noExitRuntime || true;
          "object" != typeof WebAssembly && z("no native wasm support detected");
          var ea,
            fa = false,
            ha,
            A,
            ia,
            ja,
            B,
            C,
            ka,
            la;
          function ma() {
            var a = ea.buffer;
            f.HEAP8 = ha = new Int8Array(a);
            f.HEAP16 = ia = new Int16Array(a);
            f.HEAP32 = B = new Int32Array(a);
            f.HEAPU8 = A = new Uint8Array(a);
            f.HEAPU16 = ja = new Uint16Array(a);
            f.HEAPU32 = C = new Uint32Array(a);
            f.HEAPF32 = ka = new Float32Array(a);
            f.HEAPF64 = la = new Float64Array(a);
          }
          var na,
            oa = [],
            pa = [],
            qa = [];
          function ra() {
            var a = f.preRun.shift();
            oa.unshift(a);
          }
          var D = 0,
            F = null;
          function z(a) {
            if (f.onAbort) f.onAbort(a);
            a = "Aborted(" + a + ")";
            v(a);
            fa = true;
            a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
            ca(a);
            throw a;
          }
          function ta(a) {
            return a.startsWith("data:application/octet-stream;base64,");
          }
          var G;
          G = "spine.wasm";
          if (!ta(G)) {
            var ua = G;
            G = f.locateFile ? f.locateFile(ua, p) : p + ua;
          }
          function va(a) {
            try {
              if (a == G && y) return new Uint8Array(y);
              throw "both async and sync fetching of the wasm failed";
            } catch (b) {
              z(b);
            }
          }
          function wa(a) {
            return y || "function" != typeof fetch ? Promise.resolve().then(function () {
              return va(a);
            }) : fetch(a, {
              credentials: "same-origin"
            }).then(function (b) {
              if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
              return b.arrayBuffer();
            })["catch"](function () {
              return va(a);
            });
          }
          function xa(a, b, c) {
            return wa(a).then(function (d) {
              return WebAssembly.instantiate(d, b);
            }).then(function (d) {
              return d;
            }).then(c, function (d) {
              v("failed to asynchronously prepare wasm: " + d);
              z(d);
            });
          }
          function ya(a, b) {
            var c = G;
            return y || "function" != typeof WebAssembly.instantiateStreaming || ta(c) || "function" != typeof fetch ? xa(c, a, b) : fetch(c, {
              credentials: "same-origin"
            }).then(function (d) {
              return WebAssembly.instantiateStreaming(d, a).then(b, function (e) {
                v("wasm streaming compile failed: " + e);
                v("falling back to ArrayBuffer instantiation");
                return xa(c, a, b);
              });
            });
          }
          var Aa = {
            20976: function _(a) {
              console.warn("[Spine]", a ? za(a) : "");
            }
          };
          function Ba(a) {
            for (; 0 < a.length;) a.shift()(f);
          }
          function Ca(a) {
            switch (a) {
              case 1:
                return 0;
              case 2:
                return 1;
              case 4:
                return 2;
              case 8:
                return 3;
              default:
                throw new TypeError("Unknown type size: " + a);
            }
          }
          var Da = undefined;
          function H(a) {
            for (var b = ""; A[a];) b += Da[A[a++]];
            return b;
          }
          var I = {},
            J = {},
            Ea = {};
          function Fa(a) {
            if (undefined === a) return "_unknown";
            a = a.replace(/[^a-zA-Z0-9_]/g, "$");
            var b = a.charCodeAt(0);
            return 48 <= b && 57 >= b ? "_" + a : a;
          }
          function Ga(a, b) {
            var _a$a;
            a = Fa(a);
            return (_a$a = {}, _a$a[a] = function () {
              return b.apply(this, arguments);
            }, _a$a)[a];
          }
          function Ha(a) {
            var b = Error,
              c = Ga(a, function (d) {
                this.name = a;
                this.message = d;
                d = Error(d).stack;
                undefined !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
              });
            c.prototype = Object.create(b.prototype);
            c.prototype.constructor = c;
            c.prototype.toString = function () {
              return undefined === this.message ? this.name : this.name + ": " + this.message;
            };
            return c;
          }
          var L = undefined;
          function M(a) {
            throw new L(a);
          }
          var Ia = undefined;
          function Ja(a) {
            throw new Ia(a);
          }
          function N(a, b, c) {
            function d(g) {
              g = c(g);
              g.length !== a.length && Ja("Mismatched type converter count");
              for (var l = 0; l < a.length; ++l) O(a[l], g[l]);
            }
            a.forEach(function (g) {
              Ea[g] = b;
            });
            var e = Array(b.length),
              h = [],
              k = 0;
            b.forEach(function (g, l) {
              J.hasOwnProperty(g) ? e[l] = J[g] : (h.push(g), I.hasOwnProperty(g) || (I[g] = []), I[g].push(function () {
                e[l] = J[g];
                ++k;
                k === h.length && d(e);
              }));
            });
            0 === h.length && d(e);
          }
          function O(a, b) {
            var c = {};
            if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var d = b.name;
            a || M("type \"" + d + "\" must have a positive integer typeid pointer");
            if (J.hasOwnProperty(a)) {
              if (c.qa) return;
              M("Cannot register type '" + d + "' twice");
            }
            J[a] = b;
            delete Ea[a];
            I.hasOwnProperty(a) && (b = I[a], delete I[a], b.forEach(function (e) {
              return e();
            }));
          }
          function Ka(a) {
            M(a.F.I.G.name + " instance already deleted");
          }
          var La = false;
          function Ma() {}
          function Na(a) {
            --a.count.value;
            0 === a.count.value && (a.L ? a.M.S(a.L) : a.I.G.S(a.H));
          }
          function Oa(a, b, c) {
            if (b === c) return a;
            if (undefined === c.J) return null;
            a = Oa(a, b, c.J);
            return null === a ? null : c.ha(a);
          }
          var Pa = {},
            P = [];
          function Qa() {
            for (; P.length;) {
              var a = P.pop();
              a.F.U = false;
              a["delete"]();
            }
          }
          var Q = undefined,
            R = {};
          function Ra(a, b) {
            for (undefined === b && M("ptr should not be undefined"); a.J;) b = a.W(b), a = a.J;
            return R[b];
          }
          function Sa(a, b) {
            b.I && b.H || Ja("makeClassHandle requires ptr and ptrType");
            !!b.M !== !!b.L && Ja("Both smartPtrType and smartPtr must be specified");
            b.count = {
              value: 1
            };
            return S(Object.create(a, {
              F: {
                value: b
              }
            }));
          }
          function S(a) {
            if ("undefined" === typeof FinalizationRegistry) return S = function S(b) {
              return b;
            }, a;
            La = new FinalizationRegistry(function (b) {
              Na(b.F);
            });
            S = function S(b) {
              var c = b.F;
              c.L && La.register(b, {
                F: c
              }, b);
              return b;
            };
            Ma = function Ma(b) {
              La.unregister(b);
            };
            return S(a);
          }
          function T() {}
          function Ta(a, b, c) {
            if (undefined === a[b].K) {
              var d = a[b];
              a[b] = function () {
                a[b].K.hasOwnProperty(arguments.length) || M("Function '" + c + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + a[b].K + ")!");
                return a[b].K[arguments.length].apply(this, arguments);
              };
              a[b].K = [];
              a[b].K[d.T] = d;
            }
          }
          function Ua(a, b) {
            f.hasOwnProperty(a) ? (M("Cannot register public name '" + a + "' twice"), Ta(f, a, a), f.hasOwnProperty(undefined) && M("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), f[a].K[undefined] = b) : f[a] = b;
          }
          function Va(a, b, c, d, e, h, k, g) {
            this.name = a;
            this.constructor = b;
            this.P = c;
            this.S = d;
            this.J = e;
            this.ia = h;
            this.W = k;
            this.ha = g;
            this.la = [];
          }
          function Wa(a, b, c) {
            for (; b !== c;) b.W || M("Expected null or instance of " + c.name + ", got an instance of " + b.name), a = b.W(a), b = b.J;
            return a;
          }
          function Xa(a, b) {
            if (null === b) return this.$ && M("null is not a valid " + this.name), 0;
            b.F || M("Cannot pass \"" + Ya(b) + "\" as a " + this.name);
            b.F.H || M("Cannot pass deleted object as a pointer of type " + this.name);
            return Wa(b.F.H, b.F.I.G, this.G);
          }
          function Za(a, b) {
            if (null === b) {
              this.$ && M("null is not a valid " + this.name);
              if (this.Z) {
                var c = this.ma();
                null !== a && a.push(this.S, c);
                return c;
              }
              return 0;
            }
            b.F || M("Cannot pass \"" + Ya(b) + "\" as a " + this.name);
            b.F.H || M("Cannot pass deleted object as a pointer of type " + this.name);
            !this.Y && b.F.I.Y && M("Cannot convert argument of type " + (b.F.M ? b.F.M.name : b.F.I.name) + " to parameter type " + this.name);
            c = Wa(b.F.H, b.F.I.G, this.G);
            if (this.Z) switch (undefined === b.F.L && M("Passing raw pointer to smart pointer is illegal"), this.pa) {
              case 0:
                b.F.M === this ? c = b.F.L : M("Cannot convert argument of type " + (b.F.M ? b.F.M.name : b.F.I.name) + " to parameter type " + this.name);
                break;
              case 1:
                c = b.F.L;
                break;
              case 2:
                if (b.F.M === this) c = b.F.L;else {
                  var d = b.clone();
                  c = this.na(c, U(function () {
                    d["delete"]();
                  }));
                  null !== a && a.push(this.S, c);
                }
                break;
              default:
                M("Unsupporting sharing policy");
            }
            return c;
          }
          function $a(a, b) {
            if (null === b) return this.$ && M("null is not a valid " + this.name), 0;
            b.F || M("Cannot pass \"" + Ya(b) + "\" as a " + this.name);
            b.F.H || M("Cannot pass deleted object as a pointer of type " + this.name);
            b.F.I.Y && M("Cannot convert argument of type " + b.F.I.name + " to parameter type " + this.name);
            return Wa(b.F.H, b.F.I.G, this.G);
          }
          function ab(a) {
            return this.fromWireType(B[a >> 2]);
          }
          function V(a, b, c, d) {
            this.name = a;
            this.G = b;
            this.$ = c;
            this.Y = d;
            this.Z = false;
            this.S = this.na = this.ma = this.da = this.pa = this.ka = undefined;
            undefined !== b.J ? this.toWireType = Za : (this.toWireType = d ? Xa : $a, this.O = null);
          }
          function bb(a, b) {
            f.hasOwnProperty(a) || Ja("Replacing nonexistant public symbol");
            f[a] = b;
            f[a].T = undefined;
          }
          function cb(a, b) {
            var c = [];
            return function () {
              c.length = 0;
              Object.assign(c, arguments);
              if (a.includes("j")) {
                var d = f["dynCall_" + a];
                d = c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
              } else d = na.get(b).apply(null, c);
              return d;
            };
          }
          function W(a, b) {
            a = H(a);
            var c = a.includes("j") ? cb(a, b) : na.get(b);
            "function" != typeof c && M("unknown function pointer with signature " + a + ": " + b);
            return c;
          }
          var db = undefined;
          function eb(a) {
            a = fb(a);
            var b = H(a);
            X(a);
            return b;
          }
          function Y(a, b) {
            function c(h) {
              e[h] || J[h] || (Ea[h] ? Ea[h].forEach(c) : (d.push(h), e[h] = true));
            }
            var d = [],
              e = {};
            b.forEach(c);
            throw new db(a + ": " + d.map(eb).join([", "]));
          }
          function gb(a) {
            for (; a.length;) {
              var b = a.pop();
              a.pop()(b);
            }
          }
          function hb(a, b, c, d, e) {
            var h = b.length;
            2 > h && M("argTypes array size mismatch! Must at least get return value and 'this' types!");
            var k = null !== b[1] && null !== c,
              g = false;
            for (c = 1; c < b.length; ++c) if (null !== b[c] && undefined === b[c].O) {
              g = true;
              break;
            }
            var l = "void" !== b[0].name,
              n = h - 2,
              m = Array(n),
              q = [],
              r = [];
            return function () {
              arguments.length !== n && M("function " + a + " called with " + arguments.length + " arguments, expected " + n + " args!");
              r.length = 0;
              q.length = k ? 2 : 1;
              q[0] = e;
              if (k) {
                var u = b[1].toWireType(r, this);
                q[1] = u;
              }
              for (var t = 0; t < n; ++t) m[t] = b[t + 2].toWireType(r, arguments[t]), q.push(m[t]);
              t = d.apply(null, q);
              if (g) gb(r);else for (var w = k ? 1 : 2; w < b.length; w++) {
                var E = 1 === w ? u : m[w - 2];
                null !== b[w].O && b[w].O(E);
              }
              u = l ? b[0].fromWireType(t) : undefined;
              return u;
            };
          }
          function jb(a, b) {
            for (var c = [], d = 0; d < a; d++) c.push(C[b + 4 * d >> 2]);
            return c;
          }
          function kb(a, b, c) {
            a instanceof Object || M(c + " with invalid \"this\": " + a);
            a instanceof b.G.constructor || M(c + " incompatible with \"this\" of type " + a.constructor.name);
            a.F.H || M("cannot call emscripten binding method " + c + " on deleted object");
            return Wa(a.F.H, a.F.I.G, b.G);
          }
          var Z = new function () {
            this.N = [undefined];
            this.aa = [];
            this.get = function (a) {
              return this.N[a];
            };
            this.has = function (a) {
              return undefined !== this.N[a];
            };
            this.ea = function (a) {
              var b = this.aa.pop() || this.N.length;
              this.N[b] = a;
              return b;
            };
            this.fa = function (a) {
              this.N[a] = undefined;
              this.aa.push(a);
            };
          }();
          function lb(a) {
            a >= Z.ba && 0 === --Z.get(a).oa && Z.fa(a);
          }
          var mb = function mb(a) {
              a || M("Cannot use deleted val. handle = " + a);
              return Z.get(a).value;
            },
            U = function U(a) {
              switch (a) {
                case undefined:
                  return 1;
                case null:
                  return 2;
                case true:
                  return 3;
                case false:
                  return 4;
                default:
                  return Z.ea({
                    oa: 1,
                    value: a
                  });
              }
            };
          function Ya(a) {
            if (null === a) return "null";
            var b = typeof a;
            return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
          }
          function nb(a, b) {
            switch (b) {
              case 2:
                return function (c) {
                  return this.fromWireType(ka[c >> 2]);
                };
              case 3:
                return function (c) {
                  return this.fromWireType(la[c >> 3]);
                };
              default:
                throw new TypeError("Unknown float type: " + a);
            }
          }
          function ob(a, b, c) {
            switch (b) {
              case 0:
                return c ? function (d) {
                  return ha[d];
                } : function (d) {
                  return A[d];
                };
              case 1:
                return c ? function (d) {
                  return ia[d >> 1];
                } : function (d) {
                  return ja[d >> 1];
                };
              case 2:
                return c ? function (d) {
                  return B[d >> 2];
                } : function (d) {
                  return C[d >> 2];
                };
              default:
                throw new TypeError("Unknown integer type: " + a);
            }
          }
          var pb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : undefined;
          function za(a, b) {
            var c = A,
              d = a + b;
            for (b = a; c[b] && !(b >= d);) ++b;
            if (16 < b - a && c.buffer && pb) return pb.decode(c.subarray(a, b));
            for (d = ""; a < b;) {
              var e = c[a++];
              if (e & 128) {
                var h = c[a++] & 63;
                if (192 == (e & 224)) d += String.fromCharCode((e & 31) << 6 | h);else {
                  var k = c[a++] & 63;
                  e = 224 == (e & 240) ? (e & 15) << 12 | h << 6 | k : (e & 7) << 18 | h << 12 | k << 6 | c[a++] & 63;
                  65536 > e ? d += String.fromCharCode(e) : (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023));
                }
              } else d += String.fromCharCode(e);
            }
            return d;
          }
          function qb(a, b) {
            var c = J[a];
            undefined === c && M(b + " has unknown type " + eb(a));
            return c;
          }
          var rb = {},
            sb = [];
          function tb() {
            var a = f.SpineWasmUtil,
              b = a.getCurrentListenerID(),
              c = a.getCurrentTrackEntry(),
              d = a.getCurrentEvent();
            a = a.getCurrentEventType();
            globalThis.TrackEntryListeners.emitListener(b, c, d, a);
          }
          f._spineListenerCallBackFromJS = tb;
          function ub() {
            var a = f.SpineWasmUtil,
              b = a.getCurrentListenerID(),
              c = a.getCurrentEventType(),
              d = a.getCurrentTrackEntry();
            a = a.getCurrentEvent();
            globalThis.TrackEntryListeners.emitTrackEntryListener(b, d, a, c);
          }
          f._spineTrackListenerCallback = ub;
          for (var vb = Array(256), wb = 0; 256 > wb; ++wb) vb[wb] = String.fromCharCode(wb);
          Da = vb;
          L = f.BindingError = Ha("BindingError");
          Ia = f.InternalError = Ha("InternalError");
          T.prototype.isAliasOf = function (a) {
            if (!(this instanceof T && a instanceof T)) return false;
            var b = this.F.I.G,
              c = this.F.H,
              d = a.F.I.G;
            for (a = a.F.H; b.J;) c = b.W(c), b = b.J;
            for (; d.J;) a = d.W(a), d = d.J;
            return b === d && c === a;
          };
          T.prototype.clone = function () {
            this.F.H || Ka(this);
            if (this.F.V) return this.F.count.value += 1, this;
            var a = S,
              b = Object,
              c = b.create,
              d = Object.getPrototypeOf(this),
              e = this.F;
            a = a(c.call(b, d, {
              F: {
                value: {
                  count: e.count,
                  U: e.U,
                  V: e.V,
                  H: e.H,
                  I: e.I,
                  L: e.L,
                  M: e.M
                }
              }
            }));
            a.F.count.value += 1;
            a.F.U = false;
            return a;
          };
          T.prototype["delete"] = function () {
            this.F.H || Ka(this);
            this.F.U && !this.F.V && M("Object already scheduled for deletion");
            Ma(this);
            Na(this.F);
            this.F.V || (this.F.L = undefined, this.F.H = undefined);
          };
          T.prototype.isDeleted = function () {
            return !this.F.H;
          };
          T.prototype.deleteLater = function () {
            this.F.H || Ka(this);
            this.F.U && !this.F.V && M("Object already scheduled for deletion");
            P.push(this);
            1 === P.length && Q && Q(Qa);
            this.F.U = true;
            return this;
          };
          f.getInheritedInstanceCount = function () {
            return Object.keys(R).length;
          };
          f.getLiveInheritedInstances = function () {
            var a = [],
              b;
            for (b in R) R.hasOwnProperty(b) && a.push(R[b]);
            return a;
          };
          f.flushPendingDeletes = Qa;
          f.setDelayFunction = function (a) {
            Q = a;
            P.length && Q && Q(Qa);
          };
          V.prototype.ja = function (a) {
            this.da && (a = this.da(a));
            return a;
          };
          V.prototype.ca = function (a) {
            this.S && this.S(a);
          };
          V.prototype.argPackAdvance = 8;
          V.prototype.readValueFromPointer = ab;
          V.prototype.deleteObject = function (a) {
            if (null !== a) a["delete"]();
          };
          V.prototype.fromWireType = function (a) {
            function b() {
              return this.Z ? Sa(this.G.P, {
                I: this.ka,
                H: c,
                M: this,
                L: a
              }) : Sa(this.G.P, {
                I: this,
                H: a
              });
            }
            var c = this.ja(a);
            if (!c) return this.ca(a), null;
            var d = Ra(this.G, c);
            if (undefined !== d) {
              if (0 === d.F.count.value) return d.F.H = c, d.F.L = a, d.clone();
              d = d.clone();
              this.ca(a);
              return d;
            }
            d = this.G.ia(c);
            d = Pa[d];
            if (!d) return b.call(this);
            d = this.Y ? d.ga : d.pointerType;
            var e = Oa(c, this.G, d.G);
            return null === e ? b.call(this) : this.Z ? Sa(d.G.P, {
              I: d,
              H: e,
              M: this,
              L: a
            }) : Sa(d.G.P, {
              I: d,
              H: e
            });
          };
          db = f.UnboundTypeError = Ha("UnboundTypeError");
          Z.N.push({
            value: undefined
          }, {
            value: null
          }, {
            value: true
          }, {
            value: false
          });
          Z.ba = Z.N.length;
          f.count_emval_handles = function () {
            for (var a = 0, b = Z.ba; b < Z.N.length; ++b) undefined !== Z.N[b] && ++a;
            return a;
          };
          var yb = {
            q: function q() {},
            t: function t(a, b, c, d, e) {
              var h = Ca(c);
              b = H(b);
              O(a, {
                name: b,
                fromWireType: function fromWireType(k) {
                  return !!k;
                },
                toWireType: function toWireType(k, g) {
                  return g ? d : e;
                },
                argPackAdvance: 8,
                readValueFromPointer: function readValueFromPointer(k) {
                  if (1 === c) var g = ha;else if (2 === c) g = ia;else if (4 === c) g = B;else throw new TypeError("Unknown boolean type size: " + b);
                  return this.fromWireType(g[k >> h]);
                },
                O: null
              });
            },
            c: function c(a, b, _c, d, e, h, k, g, l, n, m, q, r) {
              m = H(m);
              h = W(e, h);
              g && (g = W(k, g));
              n && (n = W(l, n));
              r = W(q, r);
              var u = Fa(m);
              Ua(u, function () {
                Y("Cannot construct " + m + " due to unbound types", [d]);
              });
              N([a, b, _c], d ? [d] : [], function (t) {
                t = t[0];
                if (d) {
                  var w = t.G;
                  var E = w.P;
                } else E = T.prototype;
                t = Ga(u, function () {
                  if (Object.getPrototypeOf(this) !== K) throw new L("Use 'new' to construct " + m);
                  if (undefined === x.R) throw new L(m + " has no accessible constructor");
                  var ib = x.R[arguments.length];
                  if (undefined === ib) throw new L("Tried to invoke ctor of " + m + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(x.R).toString() + ") parameters instead!");
                  return ib.apply(this, arguments);
                });
                var K = Object.create(E, {
                  constructor: {
                    value: t
                  }
                });
                t.prototype = K;
                var x = new Va(m, t, K, r, w, h, g, n);
                x.J && (undefined === x.J.X && (x.J.X = []), x.J.X.push(x));
                w = new V(m, x, true, false);
                E = new V(m + "*", x, false, false);
                var ba = new V(m + " const*", x, false, true);
                Pa[a] = {
                  pointerType: E,
                  ga: ba
                };
                bb(u, t);
                return [w, E, ba];
              });
            },
            g: function g(a, b, c, d, e, h, k) {
              var g = jb(c, d);
              b = H(b);
              h = W(e, h);
              N([], [a], function (l) {
                function n() {
                  Y("Cannot call " + m + " due to unbound types", g);
                }
                l = l[0];
                var m = l.name + "." + b;
                b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                var q = l.G.constructor;
                undefined === q[b] ? (n.T = c - 1, q[b] = n) : (Ta(q, b, m), q[b].K[c - 1] = n);
                N([], g, function (r) {
                  r = hb(m, [r[0], null].concat(r.slice(1)), null, h, k);
                  undefined === q[b].K ? (r.T = c - 1, q[b] = r) : q[b].K[c - 1] = r;
                  if (l.G.X) {
                    for (var _iterator = _createForOfIteratorHelperLoose(l.G.X), _step; !(_step = _iterator()).done;) {
                      var u = _step.value;
                      u.constructor.hasOwnProperty(b) || (u.constructor[b] = r);
                    }
                  }
                  return [];
                });
                return [];
              });
            },
            h: function h(a, b, c, d, e, _h, k, g) {
              b = H(b);
              _h = W(e, _h);
              N([], [a], function (l) {
                l = l[0];
                var n = l.name + "." + b,
                  m = {
                    get: function get() {
                      Y("Cannot access " + n + " due to unbound types", [c]);
                    },
                    enumerable: true,
                    configurable: true
                  };
                m.set = g ? function () {
                  Y("Cannot access " + n + " due to unbound types", [c]);
                } : function () {
                  M(n + " is a read-only property");
                };
                Object.defineProperty(l.G.constructor, b, m);
                N([], [c], function (q) {
                  q = q[0];
                  var r = {
                    get: function get() {
                      return q.fromWireType(_h(d));
                    },
                    enumerable: true
                  };
                  g && (g = W(k, g), r.set = function (u) {
                    var t = [];
                    g(d, q.toWireType(t, u));
                    gb(t);
                  });
                  Object.defineProperty(l.G.constructor, b, r);
                  return [];
                });
                return [];
              });
            },
            d: function d(a, b, c, _d, e, h) {
              0 < b || z();
              var k = jb(b, c);
              e = W(_d, e);
              N([], [a], function (g) {
                g = g[0];
                var l = "constructor " + g.name;
                undefined === g.G.R && (g.G.R = []);
                if (undefined !== g.G.R[b - 1]) throw new L("Cannot register multiple constructors with identical number of parameters (" + (b - 1) + ") for class '" + g.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                g.G.R[b - 1] = function () {
                  Y("Cannot construct " + g.name + " due to unbound types", k);
                };
                N([], k, function (n) {
                  n.splice(1, 0, null);
                  g.G.R[b - 1] = hb(l, n, null, e, h);
                  return [];
                });
                return [];
              });
            },
            a: function a(_a, b, c, d, e, h, k, g) {
              var l = jb(c, d);
              b = H(b);
              h = W(e, h);
              N([], [_a], function (n) {
                function m() {
                  Y("Cannot call " + q + " due to unbound types", l);
                }
                n = n[0];
                var q = n.name + "." + b;
                b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                g && n.G.la.push(b);
                var r = n.G.P,
                  u = r[b];
                undefined === u || undefined === u.K && u.className !== n.name && u.T === c - 2 ? (m.T = c - 2, m.className = n.name, r[b] = m) : (Ta(r, b, q), r[b].K[c - 2] = m);
                N([], l, function (t) {
                  t = hb(q, t, n, h, k);
                  undefined === r[b].K ? (t.T = c - 2, r[b] = t) : r[b].K[c - 2] = t;
                  return [];
                });
                return [];
              });
            },
            b: function b(a, _b, c, d, e, h, k, g, l, n) {
              _b = H(_b);
              e = W(d, e);
              N([], [a], function (m) {
                m = m[0];
                var q = m.name + "." + _b,
                  r = {
                    get: function get() {
                      Y("Cannot access " + q + " due to unbound types", [c, k]);
                    },
                    enumerable: true,
                    configurable: true
                  };
                r.set = l ? function () {
                  Y("Cannot access " + q + " due to unbound types", [c, k]);
                } : function () {
                  M(q + " is a read-only property");
                };
                Object.defineProperty(m.G.P, _b, r);
                N([], l ? [c, k] : [c], function (u) {
                  var t = u[0],
                    w = {
                      get: function get() {
                        var K = kb(this, m, q + " getter");
                        return t.fromWireType(e(h, K));
                      },
                      enumerable: true
                    };
                  if (l) {
                    l = W(g, l);
                    var E = u[1];
                    w.set = function (K) {
                      var x = kb(this, m, q + " setter"),
                        ba = [];
                      l(n, x, E.toWireType(ba, K));
                      gb(ba);
                    };
                  }
                  Object.defineProperty(m.G.P, _b, w);
                  return [];
                });
                return [];
              });
            },
            s: function s(a, b) {
              b = H(b);
              O(a, {
                name: b,
                fromWireType: function fromWireType(c) {
                  var d = mb(c);
                  lb(c);
                  return d;
                },
                toWireType: function toWireType(c, d) {
                  return U(d);
                },
                argPackAdvance: 8,
                readValueFromPointer: ab,
                O: null
              });
            },
            o: function o(a, b, c) {
              c = Ca(c);
              b = H(b);
              O(a, {
                name: b,
                fromWireType: function fromWireType(d) {
                  return d;
                },
                toWireType: function toWireType(d, e) {
                  return e;
                },
                argPackAdvance: 8,
                readValueFromPointer: nb(b, c),
                O: null
              });
            },
            f: function f(a, b, c, d, e) {
              b = H(b);
              -1 === e && (e = 4294967295);
              e = Ca(c);
              var h = function h(g) {
                return g;
              };
              if (0 === d) {
                var k = 32 - 8 * c;
                h = function h(g) {
                  return g << k >>> k;
                };
              }
              c = b.includes("unsigned") ? function (g, l) {
                return l >>> 0;
              } : function (g, l) {
                return l;
              };
              O(a, {
                name: b,
                fromWireType: h,
                toWireType: c,
                argPackAdvance: 8,
                readValueFromPointer: ob(b, e, 0 !== d),
                O: null
              });
            },
            x: function x(a, b) {
              b = H(b);
              var c = "std::string" === b;
              O(a, {
                name: b,
                fromWireType: function fromWireType(d) {
                  var e = C[d >> 2],
                    h = d + 4;
                  if (c) for (var k = h, g = 0; g <= e; ++g) {
                    var l = h + g;
                    if (g == e || 0 == A[l]) {
                      k = k ? za(k, l - k) : "";
                      if (undefined === n) var n = k;else n += String.fromCharCode(0), n += k;
                      k = l + 1;
                    }
                  } else {
                    n = Array(e);
                    for (g = 0; g < e; ++g) n[g] = String.fromCharCode(A[h + g]);
                    n = n.join("");
                  }
                  X(d);
                  return n;
                },
                toWireType: function toWireType(d, e) {
                  e instanceof ArrayBuffer && (e = new Uint8Array(e));
                  var h,
                    k = "string" == typeof e;
                  k || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || M("Cannot pass non-string to std::string");
                  var g;
                  if (c && k) for (h = g = 0; h < e.length; ++h) {
                    var l = e.charCodeAt(h);
                    127 >= l ? g++ : 2047 >= l ? g += 2 : 55296 <= l && 57343 >= l ? (g += 4, ++h) : g += 3;
                  } else g = e.length;
                  h = g;
                  g = xb(4 + h + 1);
                  l = g + 4;
                  C[g >> 2] = h;
                  if (c && k) {
                    if (k = l, l = h + 1, h = A, 0 < l) {
                      l = k + l - 1;
                      for (var n = 0; n < e.length; ++n) {
                        var m = e.charCodeAt(n);
                        if (55296 <= m && 57343 >= m) {
                          var q = e.charCodeAt(++n);
                          m = 65536 + ((m & 1023) << 10) | q & 1023;
                        }
                        if (127 >= m) {
                          if (k >= l) break;
                          h[k++] = m;
                        } else {
                          if (2047 >= m) {
                            if (k + 1 >= l) break;
                            h[k++] = 192 | m >> 6;
                          } else {
                            if (65535 >= m) {
                              if (k + 2 >= l) break;
                              h[k++] = 224 | m >> 12;
                            } else {
                              if (k + 3 >= l) break;
                              h[k++] = 240 | m >> 18;
                              h[k++] = 128 | m >> 12 & 63;
                            }
                            h[k++] = 128 | m >> 6 & 63;
                          }
                          h[k++] = 128 | m & 63;
                        }
                      }
                      h[k] = 0;
                    }
                  } else if (k) for (k = 0; k < h; ++k) n = e.charCodeAt(k), 255 < n && (X(l), M("String has UTF-16 code units that do not fit in 8 bits")), A[l + k] = n;else for (k = 0; k < h; ++k) A[l + k] = e[k];
                  null !== d && d.push(X, g);
                  return g;
                },
                argPackAdvance: 8,
                readValueFromPointer: ab,
                O: function O(d) {
                  X(d);
                }
              });
            },
            u: function u(a, b) {
              b = H(b);
              O(a, {
                ra: true,
                name: b,
                argPackAdvance: 0,
                fromWireType: function fromWireType() {},
                toWireType: function toWireType() {}
              });
            },
            j: function j(a, b, c) {
              a = mb(a);
              b = qb(b, "emval::as");
              var d = [],
                e = U(d);
              C[c >> 2] = e;
              return b.toWireType(d, a);
            },
            e: lb,
            k: function k(a, b) {
              a = mb(a);
              b = mb(b);
              return U(a[b]);
            },
            l: function l(a) {
              var b = rb[a];
              return U(undefined === b ? H(a) : b);
            },
            i: function i(a) {
              var b = mb(a);
              gb(b);
              lb(a);
            },
            p: function p(a, b) {
              a = qb(a, "_emval_take_value");
              a = a.readValueFromPointer(b);
              return U(a);
            },
            n: function n() {
              z("");
            },
            m: function m(a, b, c) {
              sb.length = 0;
              var d;
              for (c >>= 2; d = A[b++];) c += 105 != d & c, sb.push(105 == d ? B[c] : la[c++ >> 1]), ++c;
              return Aa[a].apply(null, sb);
            },
            r: function r(a) {
              var b = A.length;
              a >>>= 0;
              if (2147483648 < a) return false;
              for (var c = 1; 4 >= c; c *= 2) {
                var d = b * (1 + .2 / c);
                d = Math.min(d, a + 100663296);
                var e = Math;
                d = Math.max(a, d);
                a: {
                  e = e.min.call(e, 2147483648, d + (65536 - d % 65536) % 65536) - ea.buffer.byteLength + 65535 >>> 16;
                  try {
                    ea.grow(e);
                    ma();
                    var h = 1;
                    break a;
                  } catch (k) {}
                  h = undefined;
                }
                if (h) return true;
              }
              return false;
            },
            w: tb,
            v: ub
          };
          (function () {
            function a(c) {
              c = c.exports;
              f.asm = c;
              ea = f.asm.y;
              ma();
              na = f.asm.A;
              pa.unshift(f.asm.z);
              D--;
              f.monitorRunDependencies && f.monitorRunDependencies(D);
              if (0 == D && (F)) {
                var d = F;
                F = null;
                d();
              }
              return c;
            }
            var b = {
              a: yb
            };
            D++;
            f.monitorRunDependencies && f.monitorRunDependencies(D);
            if (f.instantiateWasm) try {
              return f.instantiateWasm(b, a);
            } catch (c) {
              v("Module.instantiateWasm callback failed with error: " + c), ca(c);
            }
            ya(b, function (c) {
              a(c.instance);
            })["catch"](ca);
            return {};
          })();
          function xb() {
            return (xb = f.asm.B).apply(null, arguments);
          }
          function X() {
            return (X = f.asm.C).apply(null, arguments);
          }
          function fb() {
            return (fb = f.asm.D).apply(null, arguments);
          }
          f.__embind_initialize_bindings = function () {
            return (f.__embind_initialize_bindings = f.asm.E).apply(null, arguments);
          };
          var zb;
          F = function Ab() {
            zb || Bb();
            zb || (F = Ab);
          };
          function Bb() {
            function a() {
              if (!zb && (zb = true, f.calledRun = true, !fa)) {
                Ba(pa);
                aa(f);
                if (f.onRuntimeInitialized) f.onRuntimeInitialized();
                if (f.postRun) for ("function" == typeof f.postRun && (f.postRun = [f.postRun]); f.postRun.length;) {
                  var b = f.postRun.shift();
                  qa.unshift(b);
                }
                Ba(qa);
              }
            }
            if (!(0 < D)) {
              if (f.preRun) for ("function" == typeof f.preRun && (f.preRun = [f.preRun]); f.preRun.length;) ra();
              Ba(oa);
              0 < D || (f.setStatus ? (f.setStatus("Running..."), setTimeout(function () {
                setTimeout(function () {
                  f.setStatus("");
                }, 1);
                a();
              }, 1)) : a());
            }
          }
          if (f.preInit) for ("function" == typeof f.preInit && (f.preInit = [f.preInit]); 0 < f.preInit.length;) f.preInit.pop()();
          Bb();
          return spineWasm.ready;
        };
      }());

    })
  };
}));
