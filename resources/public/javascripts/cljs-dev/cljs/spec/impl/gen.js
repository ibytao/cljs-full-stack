// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25547__auto__,writer__25548__auto__,opt__25549__auto__){
return cljs.core._write.call(null,writer__25548__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32806 = arguments.length;
var i__26050__auto___32807 = (0);
while(true){
if((i__26050__auto___32807 < len__26049__auto___32806)){
args__26056__auto__.push((arguments[i__26050__auto___32807]));

var G__32808 = (i__26050__auto___32807 + (1));
i__26050__auto___32807 = G__32808;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq32805){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32805));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32810 = arguments.length;
var i__26050__auto___32811 = (0);
while(true){
if((i__26050__auto___32811 < len__26049__auto___32810)){
args__26056__auto__.push((arguments[i__26050__auto___32811]));

var G__32812 = (i__26050__auto___32811 + (1));
i__26050__auto___32811 = G__32812;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq32809){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32809));
});

var g_QMARK__32813 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_32814 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32813){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32813))
,null));
var mkg_32815 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32813,g_32814){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32813,g_32814))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__32813,g_32814,mkg_32815){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__32813).call(null,x);
});})(g_QMARK__32813,g_32814,mkg_32815))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__32813,g_32814,mkg_32815){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_32815).call(null,gfn);
});})(g_QMARK__32813,g_32814,mkg_32815))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__32813,g_32814,mkg_32815){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_32814).call(null,generator);
});})(g_QMARK__32813,g_32814,mkg_32815))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32777__auto___32834 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__32777__auto___32834){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32835 = arguments.length;
var i__26050__auto___32836 = (0);
while(true){
if((i__26050__auto___32836 < len__26049__auto___32835)){
args__26056__auto__.push((arguments[i__26050__auto___32836]));

var G__32837 = (i__26050__auto___32836 + (1));
i__26050__auto___32836 = G__32837;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32834))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32834){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32834),args);
});})(g__32777__auto___32834))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__32777__auto___32834){
return (function (seq32816){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32816));
});})(g__32777__auto___32834))
;


var g__32777__auto___32838 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__32777__auto___32838){
return (function cljs$spec$impl$gen$list(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32839 = arguments.length;
var i__26050__auto___32840 = (0);
while(true){
if((i__26050__auto___32840 < len__26049__auto___32839)){
args__26056__auto__.push((arguments[i__26050__auto___32840]));

var G__32841 = (i__26050__auto___32840 + (1));
i__26050__auto___32840 = G__32841;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32838))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32838){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32838),args);
});})(g__32777__auto___32838))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__32777__auto___32838){
return (function (seq32817){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32817));
});})(g__32777__auto___32838))
;


var g__32777__auto___32842 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__32777__auto___32842){
return (function cljs$spec$impl$gen$map(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32843 = arguments.length;
var i__26050__auto___32844 = (0);
while(true){
if((i__26050__auto___32844 < len__26049__auto___32843)){
args__26056__auto__.push((arguments[i__26050__auto___32844]));

var G__32845 = (i__26050__auto___32844 + (1));
i__26050__auto___32844 = G__32845;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32842))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32842){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32842),args);
});})(g__32777__auto___32842))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__32777__auto___32842){
return (function (seq32818){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32818));
});})(g__32777__auto___32842))
;


var g__32777__auto___32846 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__32777__auto___32846){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32847 = arguments.length;
var i__26050__auto___32848 = (0);
while(true){
if((i__26050__auto___32848 < len__26049__auto___32847)){
args__26056__auto__.push((arguments[i__26050__auto___32848]));

var G__32849 = (i__26050__auto___32848 + (1));
i__26050__auto___32848 = G__32849;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32846))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32846){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32846),args);
});})(g__32777__auto___32846))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__32777__auto___32846){
return (function (seq32819){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32819));
});})(g__32777__auto___32846))
;


var g__32777__auto___32850 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__32777__auto___32850){
return (function cljs$spec$impl$gen$set(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32851 = arguments.length;
var i__26050__auto___32852 = (0);
while(true){
if((i__26050__auto___32852 < len__26049__auto___32851)){
args__26056__auto__.push((arguments[i__26050__auto___32852]));

var G__32853 = (i__26050__auto___32852 + (1));
i__26050__auto___32852 = G__32853;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32850))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32850){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32850),args);
});})(g__32777__auto___32850))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__32777__auto___32850){
return (function (seq32820){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32820));
});})(g__32777__auto___32850))
;


var g__32777__auto___32854 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__32777__auto___32854){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32855 = arguments.length;
var i__26050__auto___32856 = (0);
while(true){
if((i__26050__auto___32856 < len__26049__auto___32855)){
args__26056__auto__.push((arguments[i__26050__auto___32856]));

var G__32857 = (i__26050__auto___32856 + (1));
i__26050__auto___32856 = G__32857;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32854))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32854){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32854),args);
});})(g__32777__auto___32854))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__32777__auto___32854){
return (function (seq32821){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32821));
});})(g__32777__auto___32854))
;


var g__32777__auto___32858 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__32777__auto___32858){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32859 = arguments.length;
var i__26050__auto___32860 = (0);
while(true){
if((i__26050__auto___32860 < len__26049__auto___32859)){
args__26056__auto__.push((arguments[i__26050__auto___32860]));

var G__32861 = (i__26050__auto___32860 + (1));
i__26050__auto___32860 = G__32861;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32858))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32858){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32858),args);
});})(g__32777__auto___32858))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__32777__auto___32858){
return (function (seq32822){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32822));
});})(g__32777__auto___32858))
;


var g__32777__auto___32862 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__32777__auto___32862){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32863 = arguments.length;
var i__26050__auto___32864 = (0);
while(true){
if((i__26050__auto___32864 < len__26049__auto___32863)){
args__26056__auto__.push((arguments[i__26050__auto___32864]));

var G__32865 = (i__26050__auto___32864 + (1));
i__26050__auto___32864 = G__32865;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32862))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32862){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32862),args);
});})(g__32777__auto___32862))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__32777__auto___32862){
return (function (seq32823){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32823));
});})(g__32777__auto___32862))
;


var g__32777__auto___32866 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__32777__auto___32866){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32867 = arguments.length;
var i__26050__auto___32868 = (0);
while(true){
if((i__26050__auto___32868 < len__26049__auto___32867)){
args__26056__auto__.push((arguments[i__26050__auto___32868]));

var G__32869 = (i__26050__auto___32868 + (1));
i__26050__auto___32868 = G__32869;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32866))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32866){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32866),args);
});})(g__32777__auto___32866))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__32777__auto___32866){
return (function (seq32824){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32824));
});})(g__32777__auto___32866))
;


var g__32777__auto___32870 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__32777__auto___32870){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32871 = arguments.length;
var i__26050__auto___32872 = (0);
while(true){
if((i__26050__auto___32872 < len__26049__auto___32871)){
args__26056__auto__.push((arguments[i__26050__auto___32872]));

var G__32873 = (i__26050__auto___32872 + (1));
i__26050__auto___32872 = G__32873;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32870))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32870){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32870),args);
});})(g__32777__auto___32870))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__32777__auto___32870){
return (function (seq32825){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32825));
});})(g__32777__auto___32870))
;


var g__32777__auto___32874 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__32777__auto___32874){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32875 = arguments.length;
var i__26050__auto___32876 = (0);
while(true){
if((i__26050__auto___32876 < len__26049__auto___32875)){
args__26056__auto__.push((arguments[i__26050__auto___32876]));

var G__32877 = (i__26050__auto___32876 + (1));
i__26050__auto___32876 = G__32877;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32874))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32874){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32874),args);
});})(g__32777__auto___32874))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__32777__auto___32874){
return (function (seq32826){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32826));
});})(g__32777__auto___32874))
;


var g__32777__auto___32878 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__32777__auto___32878){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32879 = arguments.length;
var i__26050__auto___32880 = (0);
while(true){
if((i__26050__auto___32880 < len__26049__auto___32879)){
args__26056__auto__.push((arguments[i__26050__auto___32880]));

var G__32881 = (i__26050__auto___32880 + (1));
i__26050__auto___32880 = G__32881;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32878))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32878){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32878),args);
});})(g__32777__auto___32878))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__32777__auto___32878){
return (function (seq32827){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32827));
});})(g__32777__auto___32878))
;


var g__32777__auto___32882 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__32777__auto___32882){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32883 = arguments.length;
var i__26050__auto___32884 = (0);
while(true){
if((i__26050__auto___32884 < len__26049__auto___32883)){
args__26056__auto__.push((arguments[i__26050__auto___32884]));

var G__32885 = (i__26050__auto___32884 + (1));
i__26050__auto___32884 = G__32885;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32882))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32882){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32882),args);
});})(g__32777__auto___32882))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__32777__auto___32882){
return (function (seq32828){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32828));
});})(g__32777__auto___32882))
;


var g__32777__auto___32886 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__32777__auto___32886){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32887 = arguments.length;
var i__26050__auto___32888 = (0);
while(true){
if((i__26050__auto___32888 < len__26049__auto___32887)){
args__26056__auto__.push((arguments[i__26050__auto___32888]));

var G__32889 = (i__26050__auto___32888 + (1));
i__26050__auto___32888 = G__32889;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32886))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32886){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32886),args);
});})(g__32777__auto___32886))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__32777__auto___32886){
return (function (seq32829){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32829));
});})(g__32777__auto___32886))
;


var g__32777__auto___32890 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__32777__auto___32890){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32891 = arguments.length;
var i__26050__auto___32892 = (0);
while(true){
if((i__26050__auto___32892 < len__26049__auto___32891)){
args__26056__auto__.push((arguments[i__26050__auto___32892]));

var G__32893 = (i__26050__auto___32892 + (1));
i__26050__auto___32892 = G__32893;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32890))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32890){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32890),args);
});})(g__32777__auto___32890))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__32777__auto___32890){
return (function (seq32830){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32830));
});})(g__32777__auto___32890))
;


var g__32777__auto___32894 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__32777__auto___32894){
return (function cljs$spec$impl$gen$return(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32895 = arguments.length;
var i__26050__auto___32896 = (0);
while(true){
if((i__26050__auto___32896 < len__26049__auto___32895)){
args__26056__auto__.push((arguments[i__26050__auto___32896]));

var G__32897 = (i__26050__auto___32896 + (1));
i__26050__auto___32896 = G__32897;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32894))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32894){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32894),args);
});})(g__32777__auto___32894))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__32777__auto___32894){
return (function (seq32831){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32831));
});})(g__32777__auto___32894))
;


var g__32777__auto___32898 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__32777__auto___32898){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32899 = arguments.length;
var i__26050__auto___32900 = (0);
while(true){
if((i__26050__auto___32900 < len__26049__auto___32899)){
args__26056__auto__.push((arguments[i__26050__auto___32900]));

var G__32901 = (i__26050__auto___32900 + (1));
i__26050__auto___32900 = G__32901;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32898))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32898){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32898),args);
});})(g__32777__auto___32898))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32777__auto___32898){
return (function (seq32832){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32832));
});})(g__32777__auto___32898))
;


var g__32777__auto___32902 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__32777__auto___32902){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32903 = arguments.length;
var i__26050__auto___32904 = (0);
while(true){
if((i__26050__auto___32904 < len__26049__auto___32903)){
args__26056__auto__.push((arguments[i__26050__auto___32904]));

var G__32905 = (i__26050__auto___32904 + (1));
i__26050__auto___32904 = G__32905;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32777__auto___32902))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32777__auto___32902){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32777__auto___32902),args);
});})(g__32777__auto___32902))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__32777__auto___32902){
return (function (seq32833){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32833));
});})(g__32777__auto___32902))
;

var g__32790__auto___32927 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__32790__auto___32927){
return (function cljs$spec$impl$gen$any(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32928 = arguments.length;
var i__26050__auto___32929 = (0);
while(true){
if((i__26050__auto___32929 < len__26049__auto___32928)){
args__26056__auto__.push((arguments[i__26050__auto___32929]));

var G__32930 = (i__26050__auto___32929 + (1));
i__26050__auto___32929 = G__32930;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32927))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32927){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32927);
});})(g__32790__auto___32927))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__32790__auto___32927){
return (function (seq32906){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32906));
});})(g__32790__auto___32927))
;


var g__32790__auto___32931 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__32790__auto___32931){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32932 = arguments.length;
var i__26050__auto___32933 = (0);
while(true){
if((i__26050__auto___32933 < len__26049__auto___32932)){
args__26056__auto__.push((arguments[i__26050__auto___32933]));

var G__32934 = (i__26050__auto___32933 + (1));
i__26050__auto___32933 = G__32934;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32931))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32931){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32931);
});})(g__32790__auto___32931))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__32790__auto___32931){
return (function (seq32907){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32907));
});})(g__32790__auto___32931))
;


var g__32790__auto___32935 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__32790__auto___32935){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32936 = arguments.length;
var i__26050__auto___32937 = (0);
while(true){
if((i__26050__auto___32937 < len__26049__auto___32936)){
args__26056__auto__.push((arguments[i__26050__auto___32937]));

var G__32938 = (i__26050__auto___32937 + (1));
i__26050__auto___32937 = G__32938;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32935))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32935){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32935);
});})(g__32790__auto___32935))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__32790__auto___32935){
return (function (seq32908){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32908));
});})(g__32790__auto___32935))
;


var g__32790__auto___32939 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__32790__auto___32939){
return (function cljs$spec$impl$gen$char(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32940 = arguments.length;
var i__26050__auto___32941 = (0);
while(true){
if((i__26050__auto___32941 < len__26049__auto___32940)){
args__26056__auto__.push((arguments[i__26050__auto___32941]));

var G__32942 = (i__26050__auto___32941 + (1));
i__26050__auto___32941 = G__32942;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32939))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32939){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32939);
});})(g__32790__auto___32939))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__32790__auto___32939){
return (function (seq32909){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32909));
});})(g__32790__auto___32939))
;


var g__32790__auto___32943 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__32790__auto___32943){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32944 = arguments.length;
var i__26050__auto___32945 = (0);
while(true){
if((i__26050__auto___32945 < len__26049__auto___32944)){
args__26056__auto__.push((arguments[i__26050__auto___32945]));

var G__32946 = (i__26050__auto___32945 + (1));
i__26050__auto___32945 = G__32946;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32943))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32943){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32943);
});})(g__32790__auto___32943))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__32790__auto___32943){
return (function (seq32910){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32910));
});})(g__32790__auto___32943))
;


var g__32790__auto___32947 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__32790__auto___32947){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32948 = arguments.length;
var i__26050__auto___32949 = (0);
while(true){
if((i__26050__auto___32949 < len__26049__auto___32948)){
args__26056__auto__.push((arguments[i__26050__auto___32949]));

var G__32950 = (i__26050__auto___32949 + (1));
i__26050__auto___32949 = G__32950;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32947))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32947){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32947);
});})(g__32790__auto___32947))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__32790__auto___32947){
return (function (seq32911){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32911));
});})(g__32790__auto___32947))
;


var g__32790__auto___32951 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__32790__auto___32951){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32952 = arguments.length;
var i__26050__auto___32953 = (0);
while(true){
if((i__26050__auto___32953 < len__26049__auto___32952)){
args__26056__auto__.push((arguments[i__26050__auto___32953]));

var G__32954 = (i__26050__auto___32953 + (1));
i__26050__auto___32953 = G__32954;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32951))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32951){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32951);
});})(g__32790__auto___32951))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__32790__auto___32951){
return (function (seq32912){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32912));
});})(g__32790__auto___32951))
;


var g__32790__auto___32955 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__32790__auto___32955){
return (function cljs$spec$impl$gen$double(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32956 = arguments.length;
var i__26050__auto___32957 = (0);
while(true){
if((i__26050__auto___32957 < len__26049__auto___32956)){
args__26056__auto__.push((arguments[i__26050__auto___32957]));

var G__32958 = (i__26050__auto___32957 + (1));
i__26050__auto___32957 = G__32958;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32955))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32955){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32955);
});})(g__32790__auto___32955))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__32790__auto___32955){
return (function (seq32913){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32913));
});})(g__32790__auto___32955))
;


var g__32790__auto___32959 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__32790__auto___32959){
return (function cljs$spec$impl$gen$int(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32960 = arguments.length;
var i__26050__auto___32961 = (0);
while(true){
if((i__26050__auto___32961 < len__26049__auto___32960)){
args__26056__auto__.push((arguments[i__26050__auto___32961]));

var G__32962 = (i__26050__auto___32961 + (1));
i__26050__auto___32961 = G__32962;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32959))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32959){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32959);
});})(g__32790__auto___32959))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__32790__auto___32959){
return (function (seq32914){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32914));
});})(g__32790__auto___32959))
;


var g__32790__auto___32963 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__32790__auto___32963){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32964 = arguments.length;
var i__26050__auto___32965 = (0);
while(true){
if((i__26050__auto___32965 < len__26049__auto___32964)){
args__26056__auto__.push((arguments[i__26050__auto___32965]));

var G__32966 = (i__26050__auto___32965 + (1));
i__26050__auto___32965 = G__32966;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32963))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32963){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32963);
});})(g__32790__auto___32963))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__32790__auto___32963){
return (function (seq32915){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32915));
});})(g__32790__auto___32963))
;


var g__32790__auto___32967 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__32790__auto___32967){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32968 = arguments.length;
var i__26050__auto___32969 = (0);
while(true){
if((i__26050__auto___32969 < len__26049__auto___32968)){
args__26056__auto__.push((arguments[i__26050__auto___32969]));

var G__32970 = (i__26050__auto___32969 + (1));
i__26050__auto___32969 = G__32970;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32967))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32967){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32967);
});})(g__32790__auto___32967))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__32790__auto___32967){
return (function (seq32916){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32916));
});})(g__32790__auto___32967))
;


var g__32790__auto___32971 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__32790__auto___32971){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32972 = arguments.length;
var i__26050__auto___32973 = (0);
while(true){
if((i__26050__auto___32973 < len__26049__auto___32972)){
args__26056__auto__.push((arguments[i__26050__auto___32973]));

var G__32974 = (i__26050__auto___32973 + (1));
i__26050__auto___32973 = G__32974;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32971))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32971){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32971);
});})(g__32790__auto___32971))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__32790__auto___32971){
return (function (seq32917){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32917));
});})(g__32790__auto___32971))
;


var g__32790__auto___32975 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__32790__auto___32975){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32976 = arguments.length;
var i__26050__auto___32977 = (0);
while(true){
if((i__26050__auto___32977 < len__26049__auto___32976)){
args__26056__auto__.push((arguments[i__26050__auto___32977]));

var G__32978 = (i__26050__auto___32977 + (1));
i__26050__auto___32977 = G__32978;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32975))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32975){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32975);
});})(g__32790__auto___32975))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__32790__auto___32975){
return (function (seq32918){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32918));
});})(g__32790__auto___32975))
;


var g__32790__auto___32979 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__32790__auto___32979){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32980 = arguments.length;
var i__26050__auto___32981 = (0);
while(true){
if((i__26050__auto___32981 < len__26049__auto___32980)){
args__26056__auto__.push((arguments[i__26050__auto___32981]));

var G__32982 = (i__26050__auto___32981 + (1));
i__26050__auto___32981 = G__32982;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32979))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32979){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32979);
});})(g__32790__auto___32979))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__32790__auto___32979){
return (function (seq32919){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32919));
});})(g__32790__auto___32979))
;


var g__32790__auto___32983 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__32790__auto___32983){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32984 = arguments.length;
var i__26050__auto___32985 = (0);
while(true){
if((i__26050__auto___32985 < len__26049__auto___32984)){
args__26056__auto__.push((arguments[i__26050__auto___32985]));

var G__32986 = (i__26050__auto___32985 + (1));
i__26050__auto___32985 = G__32986;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32983))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32983){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32983);
});})(g__32790__auto___32983))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__32790__auto___32983){
return (function (seq32920){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32920));
});})(g__32790__auto___32983))
;


var g__32790__auto___32987 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__32790__auto___32987){
return (function cljs$spec$impl$gen$string(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32988 = arguments.length;
var i__26050__auto___32989 = (0);
while(true){
if((i__26050__auto___32989 < len__26049__auto___32988)){
args__26056__auto__.push((arguments[i__26050__auto___32989]));

var G__32990 = (i__26050__auto___32989 + (1));
i__26050__auto___32989 = G__32990;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32987))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32987){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32987);
});})(g__32790__auto___32987))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__32790__auto___32987){
return (function (seq32921){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32921));
});})(g__32790__auto___32987))
;


var g__32790__auto___32991 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__32790__auto___32991){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32992 = arguments.length;
var i__26050__auto___32993 = (0);
while(true){
if((i__26050__auto___32993 < len__26049__auto___32992)){
args__26056__auto__.push((arguments[i__26050__auto___32993]));

var G__32994 = (i__26050__auto___32993 + (1));
i__26050__auto___32993 = G__32994;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32991))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32991){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32991);
});})(g__32790__auto___32991))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__32790__auto___32991){
return (function (seq32922){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32922));
});})(g__32790__auto___32991))
;


var g__32790__auto___32995 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__32790__auto___32995){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26056__auto__ = [];
var len__26049__auto___32996 = arguments.length;
var i__26050__auto___32997 = (0);
while(true){
if((i__26050__auto___32997 < len__26049__auto___32996)){
args__26056__auto__.push((arguments[i__26050__auto___32997]));

var G__32998 = (i__26050__auto___32997 + (1));
i__26050__auto___32997 = G__32998;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32995))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32995){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32995);
});})(g__32790__auto___32995))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__32790__auto___32995){
return (function (seq32923){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32923));
});})(g__32790__auto___32995))
;


var g__32790__auto___32999 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__32790__auto___32999){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26056__auto__ = [];
var len__26049__auto___33000 = arguments.length;
var i__26050__auto___33001 = (0);
while(true){
if((i__26050__auto___33001 < len__26049__auto___33000)){
args__26056__auto__.push((arguments[i__26050__auto___33001]));

var G__33002 = (i__26050__auto___33001 + (1));
i__26050__auto___33001 = G__33002;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___32999))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___32999){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___32999);
});})(g__32790__auto___32999))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__32790__auto___32999){
return (function (seq32924){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32924));
});})(g__32790__auto___32999))
;


var g__32790__auto___33003 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__32790__auto___33003){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26056__auto__ = [];
var len__26049__auto___33004 = arguments.length;
var i__26050__auto___33005 = (0);
while(true){
if((i__26050__auto___33005 < len__26049__auto___33004)){
args__26056__auto__.push((arguments[i__26050__auto___33005]));

var G__33006 = (i__26050__auto___33005 + (1));
i__26050__auto___33005 = G__33006;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___33003))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___33003){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___33003);
});})(g__32790__auto___33003))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__32790__auto___33003){
return (function (seq32925){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32925));
});})(g__32790__auto___33003))
;


var g__32790__auto___33007 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__32790__auto___33007){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26056__auto__ = [];
var len__26049__auto___33008 = arguments.length;
var i__26050__auto___33009 = (0);
while(true){
if((i__26050__auto___33009 < len__26049__auto___33008)){
args__26056__auto__.push((arguments[i__26050__auto___33009]));

var G__33010 = (i__26050__auto___33009 + (1));
i__26050__auto___33009 = G__33010;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});})(g__32790__auto___33007))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32790__auto___33007){
return (function (args){
return cljs.core.deref.call(null,g__32790__auto___33007);
});})(g__32790__auto___33007))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__32790__auto___33007){
return (function (seq32926){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32926));
});})(g__32790__auto___33007))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26056__auto__ = [];
var len__26049__auto___33013 = arguments.length;
var i__26050__auto___33014 = (0);
while(true){
if((i__26050__auto___33014 < len__26049__auto___33013)){
args__26056__auto__.push((arguments[i__26050__auto___33014]));

var G__33015 = (i__26050__auto___33014 + (1));
i__26050__auto___33014 = G__33015;
continue;
} else {
}
break;
}

var argseq__26057__auto__ = ((((0) < args__26056__auto__.length))?(new cljs.core.IndexedSeq(args__26056__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26057__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__33011_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__33011_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq33012){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33012));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__33016_SHARP_){
return (new Date(p1__33016_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1485355374750