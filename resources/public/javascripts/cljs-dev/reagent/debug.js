// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26354__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26354 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26355__i = 0, G__26355__a = new Array(arguments.length -  0);
while (G__26355__i < G__26355__a.length) {G__26355__a[G__26355__i] = arguments[G__26355__i + 0]; ++G__26355__i;}
  args = new cljs.core.IndexedSeq(G__26355__a,0);
} 
return G__26354__delegate.call(this,args);};
G__26354.cljs$lang$maxFixedArity = 0;
G__26354.cljs$lang$applyTo = (function (arglist__26356){
var args = cljs.core.seq(arglist__26356);
return G__26354__delegate(args);
});
G__26354.cljs$core$IFn$_invoke$arity$variadic = G__26354__delegate;
return G__26354;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26357__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26358__i = 0, G__26358__a = new Array(arguments.length -  0);
while (G__26358__i < G__26358__a.length) {G__26358__a[G__26358__i] = arguments[G__26358__i + 0]; ++G__26358__i;}
  args = new cljs.core.IndexedSeq(G__26358__a,0);
} 
return G__26357__delegate.call(this,args);};
G__26357.cljs$lang$maxFixedArity = 0;
G__26357.cljs$lang$applyTo = (function (arglist__26359){
var args = cljs.core.seq(arglist__26359);
return G__26357__delegate(args);
});
G__26357.cljs$core$IFn$_invoke$arity$variadic = G__26357__delegate;
return G__26357;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1485761760384