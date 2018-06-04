// Compiled by ClojureScript 1.10.238 {}
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
var G__21979__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21980__i = 0, G__21980__a = new Array(arguments.length -  0);
while (G__21980__i < G__21980__a.length) {G__21980__a[G__21980__i] = arguments[G__21980__i + 0]; ++G__21980__i;}
  args = new cljs.core.IndexedSeq(G__21980__a,0,null);
} 
return G__21979__delegate.call(this,args);};
G__21979.cljs$lang$maxFixedArity = 0;
G__21979.cljs$lang$applyTo = (function (arglist__21981){
var args = cljs.core.seq(arglist__21981);
return G__21979__delegate(args);
});
G__21979.cljs$core$IFn$_invoke$arity$variadic = G__21979__delegate;
return G__21979;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21982__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21983__i = 0, G__21983__a = new Array(arguments.length -  0);
while (G__21983__i < G__21983__a.length) {G__21983__a[G__21983__i] = arguments[G__21983__i + 0]; ++G__21983__i;}
  args = new cljs.core.IndexedSeq(G__21983__a,0,null);
} 
return G__21982__delegate.call(this,args);};
G__21982.cljs$lang$maxFixedArity = 0;
G__21982.cljs$lang$applyTo = (function (arglist__21984){
var args = cljs.core.seq(arglist__21984);
return G__21982__delegate(args);
});
G__21982.cljs$core$IFn$_invoke$arity$variadic = G__21982__delegate;
return G__21982;
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

//# sourceMappingURL=debug.js.map?rel=1527566153524
