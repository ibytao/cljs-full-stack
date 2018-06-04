// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28386_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28386_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28387 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28388 = null;
var count__28389 = (0);
var i__28390 = (0);
while(true){
if((i__28390 < count__28389)){
var n = cljs.core._nth.call(null,chunk__28388,i__28390);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28391 = seq__28387;
var G__28392 = chunk__28388;
var G__28393 = count__28389;
var G__28394 = (i__28390 + (1));
seq__28387 = G__28391;
chunk__28388 = G__28392;
count__28389 = G__28393;
i__28390 = G__28394;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28387);
if(temp__5457__auto__){
var seq__28387__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28387__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28387__$1);
var G__28395 = cljs.core.chunk_rest.call(null,seq__28387__$1);
var G__28396 = c__4319__auto__;
var G__28397 = cljs.core.count.call(null,c__4319__auto__);
var G__28398 = (0);
seq__28387 = G__28395;
chunk__28388 = G__28396;
count__28389 = G__28397;
i__28390 = G__28398;
continue;
} else {
var n = cljs.core.first.call(null,seq__28387__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28399 = cljs.core.next.call(null,seq__28387__$1);
var G__28400 = null;
var G__28401 = (0);
var G__28402 = (0);
seq__28387 = G__28399;
chunk__28388 = G__28400;
count__28389 = G__28401;
i__28390 = G__28402;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28403){
var vec__28404 = p__28403;
var _ = cljs.core.nth.call(null,vec__28404,(0),null);
var v = cljs.core.nth.call(null,vec__28404,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__28407){
var vec__28408 = p__28407;
var k = cljs.core.nth.call(null,vec__28408,(0),null);
var v = cljs.core.nth.call(null,vec__28408,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28420_28428 = cljs.core.seq.call(null,deps);
var chunk__28421_28429 = null;
var count__28422_28430 = (0);
var i__28423_28431 = (0);
while(true){
if((i__28423_28431 < count__28422_28430)){
var dep_28432 = cljs.core._nth.call(null,chunk__28421_28429,i__28423_28431);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28432;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28432));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28432,(depth + (1)),state);
} else {
}


var G__28433 = seq__28420_28428;
var G__28434 = chunk__28421_28429;
var G__28435 = count__28422_28430;
var G__28436 = (i__28423_28431 + (1));
seq__28420_28428 = G__28433;
chunk__28421_28429 = G__28434;
count__28422_28430 = G__28435;
i__28423_28431 = G__28436;
continue;
} else {
var temp__5457__auto___28437 = cljs.core.seq.call(null,seq__28420_28428);
if(temp__5457__auto___28437){
var seq__28420_28438__$1 = temp__5457__auto___28437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28420_28438__$1)){
var c__4319__auto___28439 = cljs.core.chunk_first.call(null,seq__28420_28438__$1);
var G__28440 = cljs.core.chunk_rest.call(null,seq__28420_28438__$1);
var G__28441 = c__4319__auto___28439;
var G__28442 = cljs.core.count.call(null,c__4319__auto___28439);
var G__28443 = (0);
seq__28420_28428 = G__28440;
chunk__28421_28429 = G__28441;
count__28422_28430 = G__28442;
i__28423_28431 = G__28443;
continue;
} else {
var dep_28444 = cljs.core.first.call(null,seq__28420_28438__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28444;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28444));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28444,(depth + (1)),state);
} else {
}


var G__28445 = cljs.core.next.call(null,seq__28420_28438__$1);
var G__28446 = null;
var G__28447 = (0);
var G__28448 = (0);
seq__28420_28428 = G__28445;
chunk__28421_28429 = G__28446;
count__28422_28430 = G__28447;
i__28423_28431 = G__28448;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28424){
var vec__28425 = p__28424;
var seq__28426 = cljs.core.seq.call(null,vec__28425);
var first__28427 = cljs.core.first.call(null,seq__28426);
var seq__28426__$1 = cljs.core.next.call(null,seq__28426);
var x = first__28427;
var xs = seq__28426__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28425,seq__28426,first__28427,seq__28426__$1,x,xs,get_deps__$1){
return (function (p1__28411_SHARP_){
return clojure.set.difference.call(null,p1__28411_SHARP_,x);
});})(vec__28425,seq__28426,first__28427,seq__28426__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28449 = cljs.core.seq.call(null,provides);
var chunk__28450 = null;
var count__28451 = (0);
var i__28452 = (0);
while(true){
if((i__28452 < count__28451)){
var prov = cljs.core._nth.call(null,chunk__28450,i__28452);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28453_28461 = cljs.core.seq.call(null,requires);
var chunk__28454_28462 = null;
var count__28455_28463 = (0);
var i__28456_28464 = (0);
while(true){
if((i__28456_28464 < count__28455_28463)){
var req_28465 = cljs.core._nth.call(null,chunk__28454_28462,i__28456_28464);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28465,prov);


var G__28466 = seq__28453_28461;
var G__28467 = chunk__28454_28462;
var G__28468 = count__28455_28463;
var G__28469 = (i__28456_28464 + (1));
seq__28453_28461 = G__28466;
chunk__28454_28462 = G__28467;
count__28455_28463 = G__28468;
i__28456_28464 = G__28469;
continue;
} else {
var temp__5457__auto___28470 = cljs.core.seq.call(null,seq__28453_28461);
if(temp__5457__auto___28470){
var seq__28453_28471__$1 = temp__5457__auto___28470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28453_28471__$1)){
var c__4319__auto___28472 = cljs.core.chunk_first.call(null,seq__28453_28471__$1);
var G__28473 = cljs.core.chunk_rest.call(null,seq__28453_28471__$1);
var G__28474 = c__4319__auto___28472;
var G__28475 = cljs.core.count.call(null,c__4319__auto___28472);
var G__28476 = (0);
seq__28453_28461 = G__28473;
chunk__28454_28462 = G__28474;
count__28455_28463 = G__28475;
i__28456_28464 = G__28476;
continue;
} else {
var req_28477 = cljs.core.first.call(null,seq__28453_28471__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28477,prov);


var G__28478 = cljs.core.next.call(null,seq__28453_28471__$1);
var G__28479 = null;
var G__28480 = (0);
var G__28481 = (0);
seq__28453_28461 = G__28478;
chunk__28454_28462 = G__28479;
count__28455_28463 = G__28480;
i__28456_28464 = G__28481;
continue;
}
} else {
}
}
break;
}


var G__28482 = seq__28449;
var G__28483 = chunk__28450;
var G__28484 = count__28451;
var G__28485 = (i__28452 + (1));
seq__28449 = G__28482;
chunk__28450 = G__28483;
count__28451 = G__28484;
i__28452 = G__28485;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28449);
if(temp__5457__auto__){
var seq__28449__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28449__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28449__$1);
var G__28486 = cljs.core.chunk_rest.call(null,seq__28449__$1);
var G__28487 = c__4319__auto__;
var G__28488 = cljs.core.count.call(null,c__4319__auto__);
var G__28489 = (0);
seq__28449 = G__28486;
chunk__28450 = G__28487;
count__28451 = G__28488;
i__28452 = G__28489;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28449__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28457_28490 = cljs.core.seq.call(null,requires);
var chunk__28458_28491 = null;
var count__28459_28492 = (0);
var i__28460_28493 = (0);
while(true){
if((i__28460_28493 < count__28459_28492)){
var req_28494 = cljs.core._nth.call(null,chunk__28458_28491,i__28460_28493);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28494,prov);


var G__28495 = seq__28457_28490;
var G__28496 = chunk__28458_28491;
var G__28497 = count__28459_28492;
var G__28498 = (i__28460_28493 + (1));
seq__28457_28490 = G__28495;
chunk__28458_28491 = G__28496;
count__28459_28492 = G__28497;
i__28460_28493 = G__28498;
continue;
} else {
var temp__5457__auto___28499__$1 = cljs.core.seq.call(null,seq__28457_28490);
if(temp__5457__auto___28499__$1){
var seq__28457_28500__$1 = temp__5457__auto___28499__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28457_28500__$1)){
var c__4319__auto___28501 = cljs.core.chunk_first.call(null,seq__28457_28500__$1);
var G__28502 = cljs.core.chunk_rest.call(null,seq__28457_28500__$1);
var G__28503 = c__4319__auto___28501;
var G__28504 = cljs.core.count.call(null,c__4319__auto___28501);
var G__28505 = (0);
seq__28457_28490 = G__28502;
chunk__28458_28491 = G__28503;
count__28459_28492 = G__28504;
i__28460_28493 = G__28505;
continue;
} else {
var req_28506 = cljs.core.first.call(null,seq__28457_28500__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28506,prov);


var G__28507 = cljs.core.next.call(null,seq__28457_28500__$1);
var G__28508 = null;
var G__28509 = (0);
var G__28510 = (0);
seq__28457_28490 = G__28507;
chunk__28458_28491 = G__28508;
count__28459_28492 = G__28509;
i__28460_28493 = G__28510;
continue;
}
} else {
}
}
break;
}


var G__28511 = cljs.core.next.call(null,seq__28449__$1);
var G__28512 = null;
var G__28513 = (0);
var G__28514 = (0);
seq__28449 = G__28511;
chunk__28450 = G__28512;
count__28451 = G__28513;
i__28452 = G__28514;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28515_28519 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28516_28520 = null;
var count__28517_28521 = (0);
var i__28518_28522 = (0);
while(true){
if((i__28518_28522 < count__28517_28521)){
var ns_28523 = cljs.core._nth.call(null,chunk__28516_28520,i__28518_28522);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28523);


var G__28524 = seq__28515_28519;
var G__28525 = chunk__28516_28520;
var G__28526 = count__28517_28521;
var G__28527 = (i__28518_28522 + (1));
seq__28515_28519 = G__28524;
chunk__28516_28520 = G__28525;
count__28517_28521 = G__28526;
i__28518_28522 = G__28527;
continue;
} else {
var temp__5457__auto___28528 = cljs.core.seq.call(null,seq__28515_28519);
if(temp__5457__auto___28528){
var seq__28515_28529__$1 = temp__5457__auto___28528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28515_28529__$1)){
var c__4319__auto___28530 = cljs.core.chunk_first.call(null,seq__28515_28529__$1);
var G__28531 = cljs.core.chunk_rest.call(null,seq__28515_28529__$1);
var G__28532 = c__4319__auto___28530;
var G__28533 = cljs.core.count.call(null,c__4319__auto___28530);
var G__28534 = (0);
seq__28515_28519 = G__28531;
chunk__28516_28520 = G__28532;
count__28517_28521 = G__28533;
i__28518_28522 = G__28534;
continue;
} else {
var ns_28535 = cljs.core.first.call(null,seq__28515_28529__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28535);


var G__28536 = cljs.core.next.call(null,seq__28515_28529__$1);
var G__28537 = null;
var G__28538 = (0);
var G__28539 = (0);
seq__28515_28519 = G__28536;
chunk__28516_28520 = G__28537;
count__28517_28521 = G__28538;
i__28518_28522 = G__28539;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28540__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28541__i = 0, G__28541__a = new Array(arguments.length -  0);
while (G__28541__i < G__28541__a.length) {G__28541__a[G__28541__i] = arguments[G__28541__i + 0]; ++G__28541__i;}
  args = new cljs.core.IndexedSeq(G__28541__a,0,null);
} 
return G__28540__delegate.call(this,args);};
G__28540.cljs$lang$maxFixedArity = 0;
G__28540.cljs$lang$applyTo = (function (arglist__28542){
var args = cljs.core.seq(arglist__28542);
return G__28540__delegate(args);
});
G__28540.cljs$core$IFn$_invoke$arity$variadic = G__28540__delegate;
return G__28540;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__28543_SHARP_,p2__28544_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28543_SHARP_)].join('')),p2__28544_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__28545_SHARP_,p2__28546_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28545_SHARP_)].join(''),p2__28546_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28547 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28547.addCallback(((function (G__28547){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28547))
);

G__28547.addErrback(((function (G__28547){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28547))
);

return G__28547;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28548){if((e28548 instanceof Error)){
var e = e28548;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28548;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28549){if((e28549 instanceof Error)){
var e = e28549;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28549;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28550 = cljs.core._EQ_;
var expr__28551 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28550.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28551))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28550.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28551))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28550.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28551))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28550,expr__28551){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28550,expr__28551))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28553,callback){
var map__28554 = p__28553;
var map__28554__$1 = ((((!((map__28554 == null)))?(((((map__28554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28554):map__28554);
var file_msg = map__28554__$1;
var request_url = cljs.core.get.call(null,map__28554__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28554,map__28554__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28554,map__28554__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto__){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto__){
return (function (state_28592){
var state_val_28593 = (state_28592[(1)]);
if((state_val_28593 === (7))){
var inst_28588 = (state_28592[(2)]);
var state_28592__$1 = state_28592;
var statearr_28594_28620 = state_28592__$1;
(statearr_28594_28620[(2)] = inst_28588);

(statearr_28594_28620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (1))){
var state_28592__$1 = state_28592;
var statearr_28595_28621 = state_28592__$1;
(statearr_28595_28621[(2)] = null);

(statearr_28595_28621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (4))){
var inst_28558 = (state_28592[(7)]);
var inst_28558__$1 = (state_28592[(2)]);
var state_28592__$1 = (function (){var statearr_28596 = state_28592;
(statearr_28596[(7)] = inst_28558__$1);

return statearr_28596;
})();
if(cljs.core.truth_(inst_28558__$1)){
var statearr_28597_28622 = state_28592__$1;
(statearr_28597_28622[(1)] = (5));

} else {
var statearr_28598_28623 = state_28592__$1;
(statearr_28598_28623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (15))){
var inst_28573 = (state_28592[(8)]);
var inst_28571 = (state_28592[(9)]);
var inst_28575 = inst_28573.call(null,inst_28571);
var state_28592__$1 = state_28592;
var statearr_28599_28624 = state_28592__$1;
(statearr_28599_28624[(2)] = inst_28575);

(statearr_28599_28624[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (13))){
var inst_28582 = (state_28592[(2)]);
var state_28592__$1 = state_28592;
var statearr_28600_28625 = state_28592__$1;
(statearr_28600_28625[(2)] = inst_28582);

(statearr_28600_28625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (6))){
var state_28592__$1 = state_28592;
var statearr_28601_28626 = state_28592__$1;
(statearr_28601_28626[(2)] = null);

(statearr_28601_28626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (17))){
var inst_28579 = (state_28592[(2)]);
var state_28592__$1 = state_28592;
var statearr_28602_28627 = state_28592__$1;
(statearr_28602_28627[(2)] = inst_28579);

(statearr_28602_28627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (3))){
var inst_28590 = (state_28592[(2)]);
var state_28592__$1 = state_28592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28592__$1,inst_28590);
} else {
if((state_val_28593 === (12))){
var state_28592__$1 = state_28592;
var statearr_28603_28628 = state_28592__$1;
(statearr_28603_28628[(2)] = null);

(statearr_28603_28628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (2))){
var state_28592__$1 = state_28592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28592__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28593 === (11))){
var inst_28563 = (state_28592[(10)]);
var inst_28569 = figwheel.client.file_reloading.blocking_load.call(null,inst_28563);
var state_28592__$1 = state_28592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28592__$1,(14),inst_28569);
} else {
if((state_val_28593 === (9))){
var inst_28563 = (state_28592[(10)]);
var state_28592__$1 = state_28592;
if(cljs.core.truth_(inst_28563)){
var statearr_28604_28629 = state_28592__$1;
(statearr_28604_28629[(1)] = (11));

} else {
var statearr_28605_28630 = state_28592__$1;
(statearr_28605_28630[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (5))){
var inst_28564 = (state_28592[(11)]);
var inst_28558 = (state_28592[(7)]);
var inst_28563 = cljs.core.nth.call(null,inst_28558,(0),null);
var inst_28564__$1 = cljs.core.nth.call(null,inst_28558,(1),null);
var state_28592__$1 = (function (){var statearr_28606 = state_28592;
(statearr_28606[(10)] = inst_28563);

(statearr_28606[(11)] = inst_28564__$1);

return statearr_28606;
})();
if(cljs.core.truth_(inst_28564__$1)){
var statearr_28607_28631 = state_28592__$1;
(statearr_28607_28631[(1)] = (8));

} else {
var statearr_28608_28632 = state_28592__$1;
(statearr_28608_28632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (14))){
var inst_28563 = (state_28592[(10)]);
var inst_28573 = (state_28592[(8)]);
var inst_28571 = (state_28592[(2)]);
var inst_28572 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28573__$1 = cljs.core.get.call(null,inst_28572,inst_28563);
var state_28592__$1 = (function (){var statearr_28609 = state_28592;
(statearr_28609[(8)] = inst_28573__$1);

(statearr_28609[(9)] = inst_28571);

return statearr_28609;
})();
if(cljs.core.truth_(inst_28573__$1)){
var statearr_28610_28633 = state_28592__$1;
(statearr_28610_28633[(1)] = (15));

} else {
var statearr_28611_28634 = state_28592__$1;
(statearr_28611_28634[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (16))){
var inst_28571 = (state_28592[(9)]);
var inst_28577 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28571);
var state_28592__$1 = state_28592;
var statearr_28612_28635 = state_28592__$1;
(statearr_28612_28635[(2)] = inst_28577);

(statearr_28612_28635[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (10))){
var inst_28584 = (state_28592[(2)]);
var state_28592__$1 = (function (){var statearr_28613 = state_28592;
(statearr_28613[(12)] = inst_28584);

return statearr_28613;
})();
var statearr_28614_28636 = state_28592__$1;
(statearr_28614_28636[(2)] = null);

(statearr_28614_28636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28593 === (8))){
var inst_28564 = (state_28592[(11)]);
var inst_28566 = eval(inst_28564);
var state_28592__$1 = state_28592;
var statearr_28615_28637 = state_28592__$1;
(statearr_28615_28637[(2)] = inst_28566);

(statearr_28615_28637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24743__auto__))
;
return ((function (switch__24653__auto__,c__24743__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24654__auto__ = null;
var figwheel$client$file_reloading$state_machine__24654__auto____0 = (function (){
var statearr_28616 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28616[(0)] = figwheel$client$file_reloading$state_machine__24654__auto__);

(statearr_28616[(1)] = (1));

return statearr_28616;
});
var figwheel$client$file_reloading$state_machine__24654__auto____1 = (function (state_28592){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_28592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e28617){if((e28617 instanceof Object)){
var ex__24657__auto__ = e28617;
var statearr_28618_28638 = state_28592;
(statearr_28618_28638[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28639 = state_28592;
state_28592 = G__28639;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24654__auto__ = function(state_28592){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24654__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24654__auto____1.call(this,state_28592);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24654__auto____0;
figwheel$client$file_reloading$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24654__auto____1;
return figwheel$client$file_reloading$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto__))
})();
var state__24745__auto__ = (function (){var statearr_28619 = f__24744__auto__.call(null);
(statearr_28619[(6)] = c__24743__auto__);

return statearr_28619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto__))
);

return c__24743__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28641 = arguments.length;
switch (G__28641) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28643,callback){
var map__28644 = p__28643;
var map__28644__$1 = ((((!((map__28644 == null)))?(((((map__28644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28644.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28644):map__28644);
var file_msg = map__28644__$1;
var namespace = cljs.core.get.call(null,map__28644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28644,map__28644__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28644,map__28644__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28646){
var map__28647 = p__28646;
var map__28647__$1 = ((((!((map__28647 == null)))?(((((map__28647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28647):map__28647);
var file_msg = map__28647__$1;
var namespace = cljs.core.get.call(null,map__28647__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28649){
var map__28650 = p__28649;
var map__28650__$1 = ((((!((map__28650 == null)))?(((((map__28650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28650):map__28650);
var file_msg = map__28650__$1;
var namespace = cljs.core.get.call(null,map__28650__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28652,callback){
var map__28653 = p__28652;
var map__28653__$1 = ((((!((map__28653 == null)))?(((((map__28653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28653):map__28653);
var file_msg = map__28653__$1;
var request_url = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28653__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24743__auto___28703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___28703,out){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___28703,out){
return (function (state_28688){
var state_val_28689 = (state_28688[(1)]);
if((state_val_28689 === (1))){
var inst_28662 = cljs.core.seq.call(null,files);
var inst_28663 = cljs.core.first.call(null,inst_28662);
var inst_28664 = cljs.core.next.call(null,inst_28662);
var inst_28665 = files;
var state_28688__$1 = (function (){var statearr_28690 = state_28688;
(statearr_28690[(7)] = inst_28665);

(statearr_28690[(8)] = inst_28664);

(statearr_28690[(9)] = inst_28663);

return statearr_28690;
})();
var statearr_28691_28704 = state_28688__$1;
(statearr_28691_28704[(2)] = null);

(statearr_28691_28704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28689 === (2))){
var inst_28665 = (state_28688[(7)]);
var inst_28671 = (state_28688[(10)]);
var inst_28670 = cljs.core.seq.call(null,inst_28665);
var inst_28671__$1 = cljs.core.first.call(null,inst_28670);
var inst_28672 = cljs.core.next.call(null,inst_28670);
var inst_28673 = (inst_28671__$1 == null);
var inst_28674 = cljs.core.not.call(null,inst_28673);
var state_28688__$1 = (function (){var statearr_28692 = state_28688;
(statearr_28692[(10)] = inst_28671__$1);

(statearr_28692[(11)] = inst_28672);

return statearr_28692;
})();
if(inst_28674){
var statearr_28693_28705 = state_28688__$1;
(statearr_28693_28705[(1)] = (4));

} else {
var statearr_28694_28706 = state_28688__$1;
(statearr_28694_28706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28689 === (3))){
var inst_28686 = (state_28688[(2)]);
var state_28688__$1 = state_28688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28688__$1,inst_28686);
} else {
if((state_val_28689 === (4))){
var inst_28671 = (state_28688[(10)]);
var inst_28676 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28671);
var state_28688__$1 = state_28688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28688__$1,(7),inst_28676);
} else {
if((state_val_28689 === (5))){
var inst_28682 = cljs.core.async.close_BANG_.call(null,out);
var state_28688__$1 = state_28688;
var statearr_28695_28707 = state_28688__$1;
(statearr_28695_28707[(2)] = inst_28682);

(statearr_28695_28707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28689 === (6))){
var inst_28684 = (state_28688[(2)]);
var state_28688__$1 = state_28688;
var statearr_28696_28708 = state_28688__$1;
(statearr_28696_28708[(2)] = inst_28684);

(statearr_28696_28708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28689 === (7))){
var inst_28672 = (state_28688[(11)]);
var inst_28678 = (state_28688[(2)]);
var inst_28679 = cljs.core.async.put_BANG_.call(null,out,inst_28678);
var inst_28665 = inst_28672;
var state_28688__$1 = (function (){var statearr_28697 = state_28688;
(statearr_28697[(7)] = inst_28665);

(statearr_28697[(12)] = inst_28679);

return statearr_28697;
})();
var statearr_28698_28709 = state_28688__$1;
(statearr_28698_28709[(2)] = null);

(statearr_28698_28709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__24743__auto___28703,out))
;
return ((function (switch__24653__auto__,c__24743__auto___28703,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto____0 = (function (){
var statearr_28699 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28699[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto__);

(statearr_28699[(1)] = (1));

return statearr_28699;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto____1 = (function (state_28688){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_28688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e28700){if((e28700 instanceof Object)){
var ex__24657__auto__ = e28700;
var statearr_28701_28710 = state_28688;
(statearr_28701_28710[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28711 = state_28688;
state_28688 = G__28711;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto__ = function(state_28688){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto____1.call(this,state_28688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___28703,out))
})();
var state__24745__auto__ = (function (){var statearr_28702 = f__24744__auto__.call(null);
(statearr_28702[(6)] = c__24743__auto___28703);

return statearr_28702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___28703,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28712,opts){
var map__28713 = p__28712;
var map__28713__$1 = ((((!((map__28713 == null)))?(((((map__28713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28713):map__28713);
var eval_body = cljs.core.get.call(null,map__28713__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28713__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28715){var e = e28715;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28716_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28716_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28717){
var vec__28718 = p__28717;
var k = cljs.core.nth.call(null,vec__28718,(0),null);
var v = cljs.core.nth.call(null,vec__28718,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28721){
var vec__28722 = p__28721;
var k = cljs.core.nth.call(null,vec__28722,(0),null);
var v = cljs.core.nth.call(null,vec__28722,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28728,p__28729){
var map__28730 = p__28728;
var map__28730__$1 = ((((!((map__28730 == null)))?(((((map__28730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28730):map__28730);
var opts = map__28730__$1;
var before_jsload = cljs.core.get.call(null,map__28730__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28730__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28730__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28731 = p__28729;
var map__28731__$1 = ((((!((map__28731 == null)))?(((((map__28731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28731):map__28731);
var msg = map__28731__$1;
var files = cljs.core.get.call(null,map__28731__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28731__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28731__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28885){
var state_val_28886 = (state_28885[(1)]);
if((state_val_28886 === (7))){
var inst_28748 = (state_28885[(7)]);
var inst_28746 = (state_28885[(8)]);
var inst_28745 = (state_28885[(9)]);
var inst_28747 = (state_28885[(10)]);
var inst_28753 = cljs.core._nth.call(null,inst_28746,inst_28748);
var inst_28754 = figwheel.client.file_reloading.eval_body.call(null,inst_28753,opts);
var inst_28755 = (inst_28748 + (1));
var tmp28887 = inst_28746;
var tmp28888 = inst_28745;
var tmp28889 = inst_28747;
var inst_28745__$1 = tmp28888;
var inst_28746__$1 = tmp28887;
var inst_28747__$1 = tmp28889;
var inst_28748__$1 = inst_28755;
var state_28885__$1 = (function (){var statearr_28890 = state_28885;
(statearr_28890[(11)] = inst_28754);

(statearr_28890[(7)] = inst_28748__$1);

(statearr_28890[(8)] = inst_28746__$1);

(statearr_28890[(9)] = inst_28745__$1);

(statearr_28890[(10)] = inst_28747__$1);

return statearr_28890;
})();
var statearr_28891_28974 = state_28885__$1;
(statearr_28891_28974[(2)] = null);

(statearr_28891_28974[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (20))){
var inst_28788 = (state_28885[(12)]);
var inst_28796 = figwheel.client.file_reloading.sort_files.call(null,inst_28788);
var state_28885__$1 = state_28885;
var statearr_28892_28975 = state_28885__$1;
(statearr_28892_28975[(2)] = inst_28796);

(statearr_28892_28975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (27))){
var state_28885__$1 = state_28885;
var statearr_28893_28976 = state_28885__$1;
(statearr_28893_28976[(2)] = null);

(statearr_28893_28976[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (1))){
var inst_28737 = (state_28885[(13)]);
var inst_28734 = before_jsload.call(null,files);
var inst_28735 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28736 = (function (){return ((function (inst_28737,inst_28734,inst_28735,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28725_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28725_SHARP_);
});
;})(inst_28737,inst_28734,inst_28735,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28737__$1 = cljs.core.filter.call(null,inst_28736,files);
var inst_28738 = cljs.core.not_empty.call(null,inst_28737__$1);
var state_28885__$1 = (function (){var statearr_28894 = state_28885;
(statearr_28894[(14)] = inst_28735);

(statearr_28894[(13)] = inst_28737__$1);

(statearr_28894[(15)] = inst_28734);

return statearr_28894;
})();
if(cljs.core.truth_(inst_28738)){
var statearr_28895_28977 = state_28885__$1;
(statearr_28895_28977[(1)] = (2));

} else {
var statearr_28896_28978 = state_28885__$1;
(statearr_28896_28978[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (24))){
var state_28885__$1 = state_28885;
var statearr_28897_28979 = state_28885__$1;
(statearr_28897_28979[(2)] = null);

(statearr_28897_28979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (39))){
var inst_28838 = (state_28885[(16)]);
var state_28885__$1 = state_28885;
var statearr_28898_28980 = state_28885__$1;
(statearr_28898_28980[(2)] = inst_28838);

(statearr_28898_28980[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (46))){
var inst_28880 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
var statearr_28899_28981 = state_28885__$1;
(statearr_28899_28981[(2)] = inst_28880);

(statearr_28899_28981[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (4))){
var inst_28782 = (state_28885[(2)]);
var inst_28783 = cljs.core.List.EMPTY;
var inst_28784 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28783);
var inst_28785 = (function (){return ((function (inst_28782,inst_28783,inst_28784,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28726_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28726_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28726_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28726_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_28782,inst_28783,inst_28784,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28786 = cljs.core.filter.call(null,inst_28785,files);
var inst_28787 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28788 = cljs.core.concat.call(null,inst_28786,inst_28787);
var state_28885__$1 = (function (){var statearr_28900 = state_28885;
(statearr_28900[(17)] = inst_28784);

(statearr_28900[(18)] = inst_28782);

(statearr_28900[(12)] = inst_28788);

return statearr_28900;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28901_28982 = state_28885__$1;
(statearr_28901_28982[(1)] = (16));

} else {
var statearr_28902_28983 = state_28885__$1;
(statearr_28902_28983[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (15))){
var inst_28772 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
var statearr_28903_28984 = state_28885__$1;
(statearr_28903_28984[(2)] = inst_28772);

(statearr_28903_28984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (21))){
var inst_28798 = (state_28885[(19)]);
var inst_28798__$1 = (state_28885[(2)]);
var inst_28799 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28798__$1);
var state_28885__$1 = (function (){var statearr_28904 = state_28885;
(statearr_28904[(19)] = inst_28798__$1);

return statearr_28904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28885__$1,(22),inst_28799);
} else {
if((state_val_28886 === (31))){
var inst_28883 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28885__$1,inst_28883);
} else {
if((state_val_28886 === (32))){
var inst_28838 = (state_28885[(16)]);
var inst_28843 = inst_28838.cljs$lang$protocol_mask$partition0$;
var inst_28844 = (inst_28843 & (64));
var inst_28845 = inst_28838.cljs$core$ISeq$;
var inst_28846 = (cljs.core.PROTOCOL_SENTINEL === inst_28845);
var inst_28847 = ((inst_28844) || (inst_28846));
var state_28885__$1 = state_28885;
if(cljs.core.truth_(inst_28847)){
var statearr_28905_28985 = state_28885__$1;
(statearr_28905_28985[(1)] = (35));

} else {
var statearr_28906_28986 = state_28885__$1;
(statearr_28906_28986[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (40))){
var inst_28860 = (state_28885[(20)]);
var inst_28859 = (state_28885[(2)]);
var inst_28860__$1 = cljs.core.get.call(null,inst_28859,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28861 = cljs.core.get.call(null,inst_28859,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28862 = cljs.core.not_empty.call(null,inst_28860__$1);
var state_28885__$1 = (function (){var statearr_28907 = state_28885;
(statearr_28907[(21)] = inst_28861);

(statearr_28907[(20)] = inst_28860__$1);

return statearr_28907;
})();
if(cljs.core.truth_(inst_28862)){
var statearr_28908_28987 = state_28885__$1;
(statearr_28908_28987[(1)] = (41));

} else {
var statearr_28909_28988 = state_28885__$1;
(statearr_28909_28988[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (33))){
var state_28885__$1 = state_28885;
var statearr_28910_28989 = state_28885__$1;
(statearr_28910_28989[(2)] = false);

(statearr_28910_28989[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (13))){
var inst_28758 = (state_28885[(22)]);
var inst_28762 = cljs.core.chunk_first.call(null,inst_28758);
var inst_28763 = cljs.core.chunk_rest.call(null,inst_28758);
var inst_28764 = cljs.core.count.call(null,inst_28762);
var inst_28745 = inst_28763;
var inst_28746 = inst_28762;
var inst_28747 = inst_28764;
var inst_28748 = (0);
var state_28885__$1 = (function (){var statearr_28911 = state_28885;
(statearr_28911[(7)] = inst_28748);

(statearr_28911[(8)] = inst_28746);

(statearr_28911[(9)] = inst_28745);

(statearr_28911[(10)] = inst_28747);

return statearr_28911;
})();
var statearr_28912_28990 = state_28885__$1;
(statearr_28912_28990[(2)] = null);

(statearr_28912_28990[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (22))){
var inst_28801 = (state_28885[(23)]);
var inst_28802 = (state_28885[(24)]);
var inst_28806 = (state_28885[(25)]);
var inst_28798 = (state_28885[(19)]);
var inst_28801__$1 = (state_28885[(2)]);
var inst_28802__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28801__$1);
var inst_28803 = (function (){var all_files = inst_28798;
var res_SINGLEQUOTE_ = inst_28801__$1;
var res = inst_28802__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28801,inst_28802,inst_28806,inst_28798,inst_28801__$1,inst_28802__$1,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28727_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28727_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28801,inst_28802,inst_28806,inst_28798,inst_28801__$1,inst_28802__$1,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28804 = cljs.core.filter.call(null,inst_28803,inst_28801__$1);
var inst_28805 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28806__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28805);
var inst_28807 = cljs.core.not_empty.call(null,inst_28806__$1);
var state_28885__$1 = (function (){var statearr_28913 = state_28885;
(statearr_28913[(26)] = inst_28804);

(statearr_28913[(23)] = inst_28801__$1);

(statearr_28913[(24)] = inst_28802__$1);

(statearr_28913[(25)] = inst_28806__$1);

return statearr_28913;
})();
if(cljs.core.truth_(inst_28807)){
var statearr_28914_28991 = state_28885__$1;
(statearr_28914_28991[(1)] = (23));

} else {
var statearr_28915_28992 = state_28885__$1;
(statearr_28915_28992[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (36))){
var state_28885__$1 = state_28885;
var statearr_28916_28993 = state_28885__$1;
(statearr_28916_28993[(2)] = false);

(statearr_28916_28993[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (41))){
var inst_28860 = (state_28885[(20)]);
var inst_28864 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28865 = cljs.core.map.call(null,inst_28864,inst_28860);
var inst_28866 = cljs.core.pr_str.call(null,inst_28865);
var inst_28867 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28866)].join('');
var inst_28868 = figwheel.client.utils.log.call(null,inst_28867);
var state_28885__$1 = state_28885;
var statearr_28917_28994 = state_28885__$1;
(statearr_28917_28994[(2)] = inst_28868);

(statearr_28917_28994[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (43))){
var inst_28861 = (state_28885[(21)]);
var inst_28871 = (state_28885[(2)]);
var inst_28872 = cljs.core.not_empty.call(null,inst_28861);
var state_28885__$1 = (function (){var statearr_28918 = state_28885;
(statearr_28918[(27)] = inst_28871);

return statearr_28918;
})();
if(cljs.core.truth_(inst_28872)){
var statearr_28919_28995 = state_28885__$1;
(statearr_28919_28995[(1)] = (44));

} else {
var statearr_28920_28996 = state_28885__$1;
(statearr_28920_28996[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (29))){
var inst_28804 = (state_28885[(26)]);
var inst_28838 = (state_28885[(16)]);
var inst_28801 = (state_28885[(23)]);
var inst_28802 = (state_28885[(24)]);
var inst_28806 = (state_28885[(25)]);
var inst_28798 = (state_28885[(19)]);
var inst_28834 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28837 = (function (){var all_files = inst_28798;
var res_SINGLEQUOTE_ = inst_28801;
var res = inst_28802;
var files_not_loaded = inst_28804;
var dependencies_that_loaded = inst_28806;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28804,inst_28838,inst_28801,inst_28802,inst_28806,inst_28798,inst_28834,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28836){
var map__28921 = p__28836;
var map__28921__$1 = ((((!((map__28921 == null)))?(((((map__28921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28921):map__28921);
var namespace = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28804,inst_28838,inst_28801,inst_28802,inst_28806,inst_28798,inst_28834,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28838__$1 = cljs.core.group_by.call(null,inst_28837,inst_28804);
var inst_28840 = (inst_28838__$1 == null);
var inst_28841 = cljs.core.not.call(null,inst_28840);
var state_28885__$1 = (function (){var statearr_28923 = state_28885;
(statearr_28923[(16)] = inst_28838__$1);

(statearr_28923[(28)] = inst_28834);

return statearr_28923;
})();
if(inst_28841){
var statearr_28924_28997 = state_28885__$1;
(statearr_28924_28997[(1)] = (32));

} else {
var statearr_28925_28998 = state_28885__$1;
(statearr_28925_28998[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (44))){
var inst_28861 = (state_28885[(21)]);
var inst_28874 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28861);
var inst_28875 = cljs.core.pr_str.call(null,inst_28874);
var inst_28876 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28875)].join('');
var inst_28877 = figwheel.client.utils.log.call(null,inst_28876);
var state_28885__$1 = state_28885;
var statearr_28926_28999 = state_28885__$1;
(statearr_28926_28999[(2)] = inst_28877);

(statearr_28926_28999[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (6))){
var inst_28779 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
var statearr_28927_29000 = state_28885__$1;
(statearr_28927_29000[(2)] = inst_28779);

(statearr_28927_29000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (28))){
var inst_28804 = (state_28885[(26)]);
var inst_28831 = (state_28885[(2)]);
var inst_28832 = cljs.core.not_empty.call(null,inst_28804);
var state_28885__$1 = (function (){var statearr_28928 = state_28885;
(statearr_28928[(29)] = inst_28831);

return statearr_28928;
})();
if(cljs.core.truth_(inst_28832)){
var statearr_28929_29001 = state_28885__$1;
(statearr_28929_29001[(1)] = (29));

} else {
var statearr_28930_29002 = state_28885__$1;
(statearr_28930_29002[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (25))){
var inst_28802 = (state_28885[(24)]);
var inst_28818 = (state_28885[(2)]);
var inst_28819 = cljs.core.not_empty.call(null,inst_28802);
var state_28885__$1 = (function (){var statearr_28931 = state_28885;
(statearr_28931[(30)] = inst_28818);

return statearr_28931;
})();
if(cljs.core.truth_(inst_28819)){
var statearr_28932_29003 = state_28885__$1;
(statearr_28932_29003[(1)] = (26));

} else {
var statearr_28933_29004 = state_28885__$1;
(statearr_28933_29004[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (34))){
var inst_28854 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
if(cljs.core.truth_(inst_28854)){
var statearr_28934_29005 = state_28885__$1;
(statearr_28934_29005[(1)] = (38));

} else {
var statearr_28935_29006 = state_28885__$1;
(statearr_28935_29006[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (17))){
var state_28885__$1 = state_28885;
var statearr_28936_29007 = state_28885__$1;
(statearr_28936_29007[(2)] = recompile_dependents);

(statearr_28936_29007[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (3))){
var state_28885__$1 = state_28885;
var statearr_28937_29008 = state_28885__$1;
(statearr_28937_29008[(2)] = null);

(statearr_28937_29008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (12))){
var inst_28775 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
var statearr_28938_29009 = state_28885__$1;
(statearr_28938_29009[(2)] = inst_28775);

(statearr_28938_29009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (2))){
var inst_28737 = (state_28885[(13)]);
var inst_28744 = cljs.core.seq.call(null,inst_28737);
var inst_28745 = inst_28744;
var inst_28746 = null;
var inst_28747 = (0);
var inst_28748 = (0);
var state_28885__$1 = (function (){var statearr_28939 = state_28885;
(statearr_28939[(7)] = inst_28748);

(statearr_28939[(8)] = inst_28746);

(statearr_28939[(9)] = inst_28745);

(statearr_28939[(10)] = inst_28747);

return statearr_28939;
})();
var statearr_28940_29010 = state_28885__$1;
(statearr_28940_29010[(2)] = null);

(statearr_28940_29010[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (23))){
var inst_28804 = (state_28885[(26)]);
var inst_28801 = (state_28885[(23)]);
var inst_28802 = (state_28885[(24)]);
var inst_28806 = (state_28885[(25)]);
var inst_28798 = (state_28885[(19)]);
var inst_28809 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28811 = (function (){var all_files = inst_28798;
var res_SINGLEQUOTE_ = inst_28801;
var res = inst_28802;
var files_not_loaded = inst_28804;
var dependencies_that_loaded = inst_28806;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28804,inst_28801,inst_28802,inst_28806,inst_28798,inst_28809,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28810){
var map__28941 = p__28810;
var map__28941__$1 = ((((!((map__28941 == null)))?(((((map__28941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28941):map__28941);
var request_url = cljs.core.get.call(null,map__28941__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28804,inst_28801,inst_28802,inst_28806,inst_28798,inst_28809,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28812 = cljs.core.reverse.call(null,inst_28806);
var inst_28813 = cljs.core.map.call(null,inst_28811,inst_28812);
var inst_28814 = cljs.core.pr_str.call(null,inst_28813);
var inst_28815 = figwheel.client.utils.log.call(null,inst_28814);
var state_28885__$1 = (function (){var statearr_28943 = state_28885;
(statearr_28943[(31)] = inst_28809);

return statearr_28943;
})();
var statearr_28944_29011 = state_28885__$1;
(statearr_28944_29011[(2)] = inst_28815);

(statearr_28944_29011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (35))){
var state_28885__$1 = state_28885;
var statearr_28945_29012 = state_28885__$1;
(statearr_28945_29012[(2)] = true);

(statearr_28945_29012[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (19))){
var inst_28788 = (state_28885[(12)]);
var inst_28794 = figwheel.client.file_reloading.expand_files.call(null,inst_28788);
var state_28885__$1 = state_28885;
var statearr_28946_29013 = state_28885__$1;
(statearr_28946_29013[(2)] = inst_28794);

(statearr_28946_29013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (11))){
var state_28885__$1 = state_28885;
var statearr_28947_29014 = state_28885__$1;
(statearr_28947_29014[(2)] = null);

(statearr_28947_29014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (9))){
var inst_28777 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
var statearr_28948_29015 = state_28885__$1;
(statearr_28948_29015[(2)] = inst_28777);

(statearr_28948_29015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (5))){
var inst_28748 = (state_28885[(7)]);
var inst_28747 = (state_28885[(10)]);
var inst_28750 = (inst_28748 < inst_28747);
var inst_28751 = inst_28750;
var state_28885__$1 = state_28885;
if(cljs.core.truth_(inst_28751)){
var statearr_28949_29016 = state_28885__$1;
(statearr_28949_29016[(1)] = (7));

} else {
var statearr_28950_29017 = state_28885__$1;
(statearr_28950_29017[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (14))){
var inst_28758 = (state_28885[(22)]);
var inst_28767 = cljs.core.first.call(null,inst_28758);
var inst_28768 = figwheel.client.file_reloading.eval_body.call(null,inst_28767,opts);
var inst_28769 = cljs.core.next.call(null,inst_28758);
var inst_28745 = inst_28769;
var inst_28746 = null;
var inst_28747 = (0);
var inst_28748 = (0);
var state_28885__$1 = (function (){var statearr_28951 = state_28885;
(statearr_28951[(32)] = inst_28768);

(statearr_28951[(7)] = inst_28748);

(statearr_28951[(8)] = inst_28746);

(statearr_28951[(9)] = inst_28745);

(statearr_28951[(10)] = inst_28747);

return statearr_28951;
})();
var statearr_28952_29018 = state_28885__$1;
(statearr_28952_29018[(2)] = null);

(statearr_28952_29018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (45))){
var state_28885__$1 = state_28885;
var statearr_28953_29019 = state_28885__$1;
(statearr_28953_29019[(2)] = null);

(statearr_28953_29019[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (26))){
var inst_28804 = (state_28885[(26)]);
var inst_28801 = (state_28885[(23)]);
var inst_28802 = (state_28885[(24)]);
var inst_28806 = (state_28885[(25)]);
var inst_28798 = (state_28885[(19)]);
var inst_28821 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28823 = (function (){var all_files = inst_28798;
var res_SINGLEQUOTE_ = inst_28801;
var res = inst_28802;
var files_not_loaded = inst_28804;
var dependencies_that_loaded = inst_28806;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28804,inst_28801,inst_28802,inst_28806,inst_28798,inst_28821,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28822){
var map__28954 = p__28822;
var map__28954__$1 = ((((!((map__28954 == null)))?(((((map__28954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28954):map__28954);
var namespace = cljs.core.get.call(null,map__28954__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28954__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28804,inst_28801,inst_28802,inst_28806,inst_28798,inst_28821,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28824 = cljs.core.map.call(null,inst_28823,inst_28802);
var inst_28825 = cljs.core.pr_str.call(null,inst_28824);
var inst_28826 = figwheel.client.utils.log.call(null,inst_28825);
var inst_28827 = (function (){var all_files = inst_28798;
var res_SINGLEQUOTE_ = inst_28801;
var res = inst_28802;
var files_not_loaded = inst_28804;
var dependencies_that_loaded = inst_28806;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28804,inst_28801,inst_28802,inst_28806,inst_28798,inst_28821,inst_28823,inst_28824,inst_28825,inst_28826,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28804,inst_28801,inst_28802,inst_28806,inst_28798,inst_28821,inst_28823,inst_28824,inst_28825,inst_28826,state_val_28886,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28828 = setTimeout(inst_28827,(10));
var state_28885__$1 = (function (){var statearr_28956 = state_28885;
(statearr_28956[(33)] = inst_28826);

(statearr_28956[(34)] = inst_28821);

return statearr_28956;
})();
var statearr_28957_29020 = state_28885__$1;
(statearr_28957_29020[(2)] = inst_28828);

(statearr_28957_29020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (16))){
var state_28885__$1 = state_28885;
var statearr_28958_29021 = state_28885__$1;
(statearr_28958_29021[(2)] = reload_dependents);

(statearr_28958_29021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (38))){
var inst_28838 = (state_28885[(16)]);
var inst_28856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28838);
var state_28885__$1 = state_28885;
var statearr_28959_29022 = state_28885__$1;
(statearr_28959_29022[(2)] = inst_28856);

(statearr_28959_29022[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (30))){
var state_28885__$1 = state_28885;
var statearr_28960_29023 = state_28885__$1;
(statearr_28960_29023[(2)] = null);

(statearr_28960_29023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (10))){
var inst_28758 = (state_28885[(22)]);
var inst_28760 = cljs.core.chunked_seq_QMARK_.call(null,inst_28758);
var state_28885__$1 = state_28885;
if(inst_28760){
var statearr_28961_29024 = state_28885__$1;
(statearr_28961_29024[(1)] = (13));

} else {
var statearr_28962_29025 = state_28885__$1;
(statearr_28962_29025[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (18))){
var inst_28792 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
if(cljs.core.truth_(inst_28792)){
var statearr_28963_29026 = state_28885__$1;
(statearr_28963_29026[(1)] = (19));

} else {
var statearr_28964_29027 = state_28885__$1;
(statearr_28964_29027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (42))){
var state_28885__$1 = state_28885;
var statearr_28965_29028 = state_28885__$1;
(statearr_28965_29028[(2)] = null);

(statearr_28965_29028[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (37))){
var inst_28851 = (state_28885[(2)]);
var state_28885__$1 = state_28885;
var statearr_28966_29029 = state_28885__$1;
(statearr_28966_29029[(2)] = inst_28851);

(statearr_28966_29029[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28886 === (8))){
var inst_28758 = (state_28885[(22)]);
var inst_28745 = (state_28885[(9)]);
var inst_28758__$1 = cljs.core.seq.call(null,inst_28745);
var state_28885__$1 = (function (){var statearr_28967 = state_28885;
(statearr_28967[(22)] = inst_28758__$1);

return statearr_28967;
})();
if(inst_28758__$1){
var statearr_28968_29030 = state_28885__$1;
(statearr_28968_29030[(1)] = (10));

} else {
var statearr_28969_29031 = state_28885__$1;
(statearr_28969_29031[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24653__auto__,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto____0 = (function (){
var statearr_28970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28970[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto__);

(statearr_28970[(1)] = (1));

return statearr_28970;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto____1 = (function (state_28885){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_28885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e28971){if((e28971 instanceof Object)){
var ex__24657__auto__ = e28971;
var statearr_28972_29032 = state_28885;
(statearr_28972_29032[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29033 = state_28885;
state_28885 = G__29033;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto__ = function(state_28885){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto____1.call(this,state_28885);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24745__auto__ = (function (){var statearr_28973 = f__24744__auto__.call(null);
(statearr_28973[(6)] = c__24743__auto__);

return statearr_28973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto__,map__28730,map__28730__$1,opts,before_jsload,on_jsload,reload_dependents,map__28731,map__28731__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24743__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29036,link){
var map__29037 = p__29036;
var map__29037__$1 = ((((!((map__29037 == null)))?(((((map__29037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29037):map__29037);
var file = cljs.core.get.call(null,map__29037__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29037,map__29037__$1,file){
return (function (p1__29034_SHARP_,p2__29035_SHARP_){
if(cljs.core._EQ_.call(null,p1__29034_SHARP_,p2__29035_SHARP_)){
return p1__29034_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29037,map__29037__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29040){
var map__29041 = p__29040;
var map__29041__$1 = ((((!((map__29041 == null)))?(((((map__29041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29041):map__29041);
var match_length = cljs.core.get.call(null,map__29041__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29041__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29039_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29039_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29043_SHARP_,p2__29044_SHARP_){
return cljs.core.assoc.call(null,p1__29043_SHARP_,cljs.core.get.call(null,p2__29044_SHARP_,key),p2__29044_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29045 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29045);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29045);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29046,p__29047){
var map__29048 = p__29046;
var map__29048__$1 = ((((!((map__29048 == null)))?(((((map__29048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29048):map__29048);
var on_cssload = cljs.core.get.call(null,map__29048__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29049 = p__29047;
var map__29049__$1 = ((((!((map__29049 == null)))?(((((map__29049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29049):map__29049);
var files_msg = map__29049__$1;
var files = cljs.core.get.call(null,map__29049__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1527566161616
