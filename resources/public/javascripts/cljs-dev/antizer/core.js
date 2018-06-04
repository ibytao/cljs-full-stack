// Compiled by ClojureScript 1.10.238 {}
goog.provide('antizer.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('goog.object');
goog.require('cljsjs.antd');
antizer.core.antd_module = antd;
/**
 * Converts from kebab case to camel case, eg: on-click to onClick
 */
antizer.core.kebab_case__GT_camel_case = (function antizer$core$kebab_case__GT_camel_case(input){
var words = clojure.string.split.call(null,input,/-/);
var capitalize = cljs.core.map.call(null,((function (words){
return (function (p1__22762_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,clojure.string.upper_case.call(null,cljs.core.first.call(null,p1__22762_SHARP_)),cljs.core.rest.call(null,p1__22762_SHARP_));
});})(words))
,cljs.core.rest.call(null,words));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,words),capitalize);
});
/**
 * Stringifys all the keys of a cljs hashmap and converts them
 * from kebab case to camel case. If :html-props option is specified, 
 * then rename the html properties values to their dom equivalent
 * before conversion
 */
antizer.core.map_keys__GT_camel_case = (function antizer$core$map_keys__GT_camel_case(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22772 = arguments.length;
var i__4500__auto___22773 = (0);
while(true){
if((i__4500__auto___22773 < len__4499__auto___22772)){
args__4502__auto__.push((arguments[i__4500__auto___22773]));

var G__22774 = (i__4500__auto___22773 + (1));
i__4500__auto___22773 = G__22774;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.core.map_keys__GT_camel_case.cljs$core$IFn$_invoke$arity$variadic = (function (data,p__22765){
var map__22766 = p__22765;
var map__22766__$1 = ((((!((map__22766 == null)))?(((((map__22766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22766):map__22766);
var html_props = cljs.core.get.call(null,map__22766__$1,new cljs.core.Keyword(null,"html-props","html-props",-455448229));
var convert_to_camel = ((function (map__22766,map__22766__$1,html_props){
return (function (p__22768){
var vec__22769 = p__22768;
var key = cljs.core.nth.call(null,vec__22769,(0),null);
var value = cljs.core.nth.call(null,vec__22769,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.core.kebab_case__GT_camel_case.call(null,cljs.core.name.call(null,key)),value], null);
});})(map__22766,map__22766__$1,html_props))
;
return clojure.walk.postwalk.call(null,((function (convert_to_camel,map__22766,map__22766__$1,html_props){
return (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
var new_map = (cljs.core.truth_(html_props)?clojure.set.rename_keys.call(null,x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null)):x);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,convert_to_camel,new_map));
} else {
return x;
}
});})(convert_to_camel,map__22766,map__22766__$1,html_props))
,data);
});

antizer.core.map_keys__GT_camel_case.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.core.map_keys__GT_camel_case.cljs$lang$applyTo = (function (seq22763){
var G__22764 = cljs.core.first.call(null,seq22763);
var seq22763__$1 = cljs.core.next.call(null,seq22763);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22764,seq22763__$1);
});

antizer.core.get_module_path = (function antizer$core$get_module_path(module_name){
return clojure.string.split.call(null,module_name,/\./);
});
/**
 * Retreives the value of the module's property
 */
antizer.core.get_prop = (function antizer$core$get_prop(module_name,prop){
if(cljs.core.truth_(prop)){
return cljs.core.apply.call(null,goog.object.getValueByKeys,antizer.core.antd_module,cljs.core.conj.call(null,antizer.core.get_module_path.call(null,module_name),cljs.core.name.call(null,prop)));
} else {
return null;
}
});
/**
 * Calls a javascript function, converting the keys for any arguments 
 * that are hashmaps from kebab case to camel case
 * 
 * * func - the native javascript to be called
 */
antizer.core.call_js_func = (function antizer$core$call_js_func(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22777 = arguments.length;
var i__4500__auto___22778 = (0);
while(true){
if((i__4500__auto___22778 < len__4499__auto___22777)){
args__4502__auto__.push((arguments[i__4500__auto___22778]));

var G__22779 = (i__4500__auto___22778 + (1));
i__4500__auto___22778 = G__22779;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.core.call_js_func.cljs$core$IFn$_invoke$arity$variadic = (function (func,args){
return cljs.core.apply.call(null,func,cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,antizer.core.map_keys__GT_camel_case,args)));
});

antizer.core.call_js_func.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.core.call_js_func.cljs$lang$applyTo = (function (seq22775){
var G__22776 = cljs.core.first.call(null,seq22775);
var seq22775__$1 = cljs.core.next.call(null,seq22775);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22776,seq22775__$1);
});

/**
 * Calls the ant module function
 */
antizer.core.call_func = (function antizer$core$call_func(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22782 = arguments.length;
var i__4500__auto___22783 = (0);
while(true){
if((i__4500__auto___22783 < len__4499__auto___22782)){
args__4502__auto__.push((arguments[i__4500__auto___22783]));

var G__22784 = (i__4500__auto___22783 + (1));
i__4500__auto___22783 = G__22784;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.core.call_func.cljs$core$IFn$_invoke$arity$variadic = (function (module_name,args){
var path = antizer.core.get_module_path.call(null,module_name);
var func = cljs.core.apply.call(null,goog.object.getValueByKeys,antizer.core.antd_module,path);
return cljs.core.apply.call(null,antizer.core.call_js_func,func,args);
});

antizer.core.call_func.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.core.call_func.cljs$lang$applyTo = (function (seq22780){
var G__22781 = cljs.core.first.call(null,seq22780);
var seq22780__$1 = cljs.core.next.call(null,seq22780);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22781,seq22780__$1);
});


//# sourceMappingURL=core.js.map?rel=1527566155217
