// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
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
var or__25091__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25091__auto__){
return or__25091__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25091__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25091__auto__)){
return or__25091__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29575_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29575_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__29580 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29581 = null;
var count__29582 = (0);
var i__29583 = (0);
while(true){
if((i__29583 < count__29582)){
var n = cljs.core._nth.call(null,chunk__29581,i__29583);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29584 = seq__29580;
var G__29585 = chunk__29581;
var G__29586 = count__29582;
var G__29587 = (i__29583 + (1));
seq__29580 = G__29584;
chunk__29581 = G__29585;
count__29582 = G__29586;
i__29583 = G__29587;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29580);
if(temp__4657__auto__){
var seq__29580__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29580__$1)){
var c__25905__auto__ = cljs.core.chunk_first.call(null,seq__29580__$1);
var G__29588 = cljs.core.chunk_rest.call(null,seq__29580__$1);
var G__29589 = c__25905__auto__;
var G__29590 = cljs.core.count.call(null,c__25905__auto__);
var G__29591 = (0);
seq__29580 = G__29588;
chunk__29581 = G__29589;
count__29582 = G__29590;
i__29583 = G__29591;
continue;
} else {
var n = cljs.core.first.call(null,seq__29580__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29592 = cljs.core.next.call(null,seq__29580__$1);
var G__29593 = null;
var G__29594 = (0);
var G__29595 = (0);
seq__29580 = G__29592;
chunk__29581 = G__29593;
count__29582 = G__29594;
i__29583 = G__29595;
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

var seq__29646_29657 = cljs.core.seq.call(null,deps);
var chunk__29647_29658 = null;
var count__29648_29659 = (0);
var i__29649_29660 = (0);
while(true){
if((i__29649_29660 < count__29648_29659)){
var dep_29661 = cljs.core._nth.call(null,chunk__29647_29658,i__29649_29660);
topo_sort_helper_STAR_.call(null,dep_29661,(depth + (1)),state);

var G__29662 = seq__29646_29657;
var G__29663 = chunk__29647_29658;
var G__29664 = count__29648_29659;
var G__29665 = (i__29649_29660 + (1));
seq__29646_29657 = G__29662;
chunk__29647_29658 = G__29663;
count__29648_29659 = G__29664;
i__29649_29660 = G__29665;
continue;
} else {
var temp__4657__auto___29666 = cljs.core.seq.call(null,seq__29646_29657);
if(temp__4657__auto___29666){
var seq__29646_29667__$1 = temp__4657__auto___29666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29646_29667__$1)){
var c__25905__auto___29668 = cljs.core.chunk_first.call(null,seq__29646_29667__$1);
var G__29669 = cljs.core.chunk_rest.call(null,seq__29646_29667__$1);
var G__29670 = c__25905__auto___29668;
var G__29671 = cljs.core.count.call(null,c__25905__auto___29668);
var G__29672 = (0);
seq__29646_29657 = G__29669;
chunk__29647_29658 = G__29670;
count__29648_29659 = G__29671;
i__29649_29660 = G__29672;
continue;
} else {
var dep_29673 = cljs.core.first.call(null,seq__29646_29667__$1);
topo_sort_helper_STAR_.call(null,dep_29673,(depth + (1)),state);

var G__29674 = cljs.core.next.call(null,seq__29646_29667__$1);
var G__29675 = null;
var G__29676 = (0);
var G__29677 = (0);
seq__29646_29657 = G__29674;
chunk__29647_29658 = G__29675;
count__29648_29659 = G__29676;
i__29649_29660 = G__29677;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29650){
var vec__29654 = p__29650;
var seq__29655 = cljs.core.seq.call(null,vec__29654);
var first__29656 = cljs.core.first.call(null,seq__29655);
var seq__29655__$1 = cljs.core.next.call(null,seq__29655);
var x = first__29656;
var xs = seq__29655__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29654,seq__29655,first__29656,seq__29655__$1,x,xs,get_deps__$1){
return (function (p1__29596_SHARP_){
return clojure.set.difference.call(null,p1__29596_SHARP_,x);
});})(vec__29654,seq__29655,first__29656,seq__29655__$1,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29690 = cljs.core.seq.call(null,provides);
var chunk__29691 = null;
var count__29692 = (0);
var i__29693 = (0);
while(true){
if((i__29693 < count__29692)){
var prov = cljs.core._nth.call(null,chunk__29691,i__29693);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29694_29702 = cljs.core.seq.call(null,requires);
var chunk__29695_29703 = null;
var count__29696_29704 = (0);
var i__29697_29705 = (0);
while(true){
if((i__29697_29705 < count__29696_29704)){
var req_29706 = cljs.core._nth.call(null,chunk__29695_29703,i__29697_29705);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29706,prov);

var G__29707 = seq__29694_29702;
var G__29708 = chunk__29695_29703;
var G__29709 = count__29696_29704;
var G__29710 = (i__29697_29705 + (1));
seq__29694_29702 = G__29707;
chunk__29695_29703 = G__29708;
count__29696_29704 = G__29709;
i__29697_29705 = G__29710;
continue;
} else {
var temp__4657__auto___29711 = cljs.core.seq.call(null,seq__29694_29702);
if(temp__4657__auto___29711){
var seq__29694_29712__$1 = temp__4657__auto___29711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29694_29712__$1)){
var c__25905__auto___29713 = cljs.core.chunk_first.call(null,seq__29694_29712__$1);
var G__29714 = cljs.core.chunk_rest.call(null,seq__29694_29712__$1);
var G__29715 = c__25905__auto___29713;
var G__29716 = cljs.core.count.call(null,c__25905__auto___29713);
var G__29717 = (0);
seq__29694_29702 = G__29714;
chunk__29695_29703 = G__29715;
count__29696_29704 = G__29716;
i__29697_29705 = G__29717;
continue;
} else {
var req_29718 = cljs.core.first.call(null,seq__29694_29712__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29718,prov);

var G__29719 = cljs.core.next.call(null,seq__29694_29712__$1);
var G__29720 = null;
var G__29721 = (0);
var G__29722 = (0);
seq__29694_29702 = G__29719;
chunk__29695_29703 = G__29720;
count__29696_29704 = G__29721;
i__29697_29705 = G__29722;
continue;
}
} else {
}
}
break;
}

var G__29723 = seq__29690;
var G__29724 = chunk__29691;
var G__29725 = count__29692;
var G__29726 = (i__29693 + (1));
seq__29690 = G__29723;
chunk__29691 = G__29724;
count__29692 = G__29725;
i__29693 = G__29726;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29690);
if(temp__4657__auto__){
var seq__29690__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29690__$1)){
var c__25905__auto__ = cljs.core.chunk_first.call(null,seq__29690__$1);
var G__29727 = cljs.core.chunk_rest.call(null,seq__29690__$1);
var G__29728 = c__25905__auto__;
var G__29729 = cljs.core.count.call(null,c__25905__auto__);
var G__29730 = (0);
seq__29690 = G__29727;
chunk__29691 = G__29728;
count__29692 = G__29729;
i__29693 = G__29730;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29690__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29698_29731 = cljs.core.seq.call(null,requires);
var chunk__29699_29732 = null;
var count__29700_29733 = (0);
var i__29701_29734 = (0);
while(true){
if((i__29701_29734 < count__29700_29733)){
var req_29735 = cljs.core._nth.call(null,chunk__29699_29732,i__29701_29734);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29735,prov);

var G__29736 = seq__29698_29731;
var G__29737 = chunk__29699_29732;
var G__29738 = count__29700_29733;
var G__29739 = (i__29701_29734 + (1));
seq__29698_29731 = G__29736;
chunk__29699_29732 = G__29737;
count__29700_29733 = G__29738;
i__29701_29734 = G__29739;
continue;
} else {
var temp__4657__auto___29740__$1 = cljs.core.seq.call(null,seq__29698_29731);
if(temp__4657__auto___29740__$1){
var seq__29698_29741__$1 = temp__4657__auto___29740__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29698_29741__$1)){
var c__25905__auto___29742 = cljs.core.chunk_first.call(null,seq__29698_29741__$1);
var G__29743 = cljs.core.chunk_rest.call(null,seq__29698_29741__$1);
var G__29744 = c__25905__auto___29742;
var G__29745 = cljs.core.count.call(null,c__25905__auto___29742);
var G__29746 = (0);
seq__29698_29731 = G__29743;
chunk__29699_29732 = G__29744;
count__29700_29733 = G__29745;
i__29701_29734 = G__29746;
continue;
} else {
var req_29747 = cljs.core.first.call(null,seq__29698_29741__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29747,prov);

var G__29748 = cljs.core.next.call(null,seq__29698_29741__$1);
var G__29749 = null;
var G__29750 = (0);
var G__29751 = (0);
seq__29698_29731 = G__29748;
chunk__29699_29732 = G__29749;
count__29700_29733 = G__29750;
i__29701_29734 = G__29751;
continue;
}
} else {
}
}
break;
}

var G__29752 = cljs.core.next.call(null,seq__29690__$1);
var G__29753 = null;
var G__29754 = (0);
var G__29755 = (0);
seq__29690 = G__29752;
chunk__29691 = G__29753;
count__29692 = G__29754;
i__29693 = G__29755;
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
var seq__29760_29764 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29761_29765 = null;
var count__29762_29766 = (0);
var i__29763_29767 = (0);
while(true){
if((i__29763_29767 < count__29762_29766)){
var ns_29768 = cljs.core._nth.call(null,chunk__29761_29765,i__29763_29767);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29768);

var G__29769 = seq__29760_29764;
var G__29770 = chunk__29761_29765;
var G__29771 = count__29762_29766;
var G__29772 = (i__29763_29767 + (1));
seq__29760_29764 = G__29769;
chunk__29761_29765 = G__29770;
count__29762_29766 = G__29771;
i__29763_29767 = G__29772;
continue;
} else {
var temp__4657__auto___29773 = cljs.core.seq.call(null,seq__29760_29764);
if(temp__4657__auto___29773){
var seq__29760_29774__$1 = temp__4657__auto___29773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29760_29774__$1)){
var c__25905__auto___29775 = cljs.core.chunk_first.call(null,seq__29760_29774__$1);
var G__29776 = cljs.core.chunk_rest.call(null,seq__29760_29774__$1);
var G__29777 = c__25905__auto___29775;
var G__29778 = cljs.core.count.call(null,c__25905__auto___29775);
var G__29779 = (0);
seq__29760_29764 = G__29776;
chunk__29761_29765 = G__29777;
count__29762_29766 = G__29778;
i__29763_29767 = G__29779;
continue;
} else {
var ns_29780 = cljs.core.first.call(null,seq__29760_29774__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29780);

var G__29781 = cljs.core.next.call(null,seq__29760_29774__$1);
var G__29782 = null;
var G__29783 = (0);
var G__29784 = (0);
seq__29760_29764 = G__29781;
chunk__29761_29765 = G__29782;
count__29762_29766 = G__29783;
i__29763_29767 = G__29784;
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
goog.require_figwheel_backup_ = (function (){var or__25091__auto__ = goog.require__;
if(cljs.core.truth_(or__25091__auto__)){
return or__25091__auto__;
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
var G__29785__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29786__i = 0, G__29786__a = new Array(arguments.length -  0);
while (G__29786__i < G__29786__a.length) {G__29786__a[G__29786__i] = arguments[G__29786__i + 0]; ++G__29786__i;}
  args = new cljs.core.IndexedSeq(G__29786__a,0);
} 
return G__29785__delegate.call(this,args);};
G__29785.cljs$lang$maxFixedArity = 0;
G__29785.cljs$lang$applyTo = (function (arglist__29787){
var args = cljs.core.seq(arglist__29787);
return G__29785__delegate(args);
});
G__29785.cljs$core$IFn$_invoke$arity$variadic = G__29785__delegate;
return G__29785;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29789 = cljs.core._EQ_;
var expr__29790 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29789.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29790))){
var path_parts = ((function (pred__29789,expr__29790){
return (function (p1__29788_SHARP_){
return clojure.string.split.call(null,p1__29788_SHARP_,/[\/\\]/);
});})(pred__29789,expr__29790))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29789,expr__29790){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29792){if((e29792 instanceof Error)){
var e = e29792;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29792;

}
}})());
});
;})(path_parts,sep,root,pred__29789,expr__29790))
} else {
if(cljs.core.truth_(pred__29789.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29790))){
return ((function (pred__29789,expr__29790){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__29789,expr__29790){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29789,expr__29790))
);

return deferred.addErrback(((function (deferred,pred__29789,expr__29790){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29789,expr__29790))
);
});
;})(pred__29789,expr__29790))
} else {
if(cljs.core.truth_(pred__29789.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29790))){
return ((function (pred__29789,expr__29790){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29793){if((e29793 instanceof Error)){
var e = e29793;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29793;

}
}})());
});
;})(pred__29789,expr__29790))
} else {
return ((function (pred__29789,expr__29790){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29789,expr__29790))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29794,callback){
var map__29797 = p__29794;
var map__29797__$1 = ((((!((map__29797 == null)))?((((map__29797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29797):map__29797);
var file_msg = map__29797__$1;
var request_url = cljs.core.get.call(null,map__29797__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29797,map__29797__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29797,map__29797__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29496__auto__){
return (function (){
var f__29497__auto__ = (function (){var switch__29475__auto__ = ((function (c__29496__auto__){
return (function (state_29821){
var state_val_29822 = (state_29821[(1)]);
if((state_val_29822 === (7))){
var inst_29817 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
var statearr_29823_29843 = state_29821__$1;
(statearr_29823_29843[(2)] = inst_29817);

(statearr_29823_29843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29822 === (1))){
var state_29821__$1 = state_29821;
var statearr_29824_29844 = state_29821__$1;
(statearr_29824_29844[(2)] = null);

(statearr_29824_29844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29822 === (4))){
var inst_29801 = (state_29821[(7)]);
var inst_29801__$1 = (state_29821[(2)]);
var state_29821__$1 = (function (){var statearr_29825 = state_29821;
(statearr_29825[(7)] = inst_29801__$1);

return statearr_29825;
})();
if(cljs.core.truth_(inst_29801__$1)){
var statearr_29826_29845 = state_29821__$1;
(statearr_29826_29845[(1)] = (5));

} else {
var statearr_29827_29846 = state_29821__$1;
(statearr_29827_29846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29822 === (6))){
var state_29821__$1 = state_29821;
var statearr_29828_29847 = state_29821__$1;
(statearr_29828_29847[(2)] = null);

(statearr_29828_29847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29822 === (3))){
var inst_29819 = (state_29821[(2)]);
var state_29821__$1 = state_29821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29821__$1,inst_29819);
} else {
if((state_val_29822 === (2))){
var state_29821__$1 = state_29821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29821__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29822 === (11))){
var inst_29813 = (state_29821[(2)]);
var state_29821__$1 = (function (){var statearr_29829 = state_29821;
(statearr_29829[(8)] = inst_29813);

return statearr_29829;
})();
var statearr_29830_29848 = state_29821__$1;
(statearr_29830_29848[(2)] = null);

(statearr_29830_29848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29822 === (9))){
var inst_29805 = (state_29821[(9)]);
var inst_29807 = (state_29821[(10)]);
var inst_29809 = inst_29807.call(null,inst_29805);
var state_29821__$1 = state_29821;
var statearr_29831_29849 = state_29821__$1;
(statearr_29831_29849[(2)] = inst_29809);

(statearr_29831_29849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29822 === (5))){
var inst_29801 = (state_29821[(7)]);
var inst_29803 = figwheel.client.file_reloading.blocking_load.call(null,inst_29801);
var state_29821__$1 = state_29821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29821__$1,(8),inst_29803);
} else {
if((state_val_29822 === (10))){
var inst_29805 = (state_29821[(9)]);
var inst_29811 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29805);
var state_29821__$1 = state_29821;
var statearr_29832_29850 = state_29821__$1;
(statearr_29832_29850[(2)] = inst_29811);

(statearr_29832_29850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29822 === (8))){
var inst_29807 = (state_29821[(10)]);
var inst_29801 = (state_29821[(7)]);
var inst_29805 = (state_29821[(2)]);
var inst_29806 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29807__$1 = cljs.core.get.call(null,inst_29806,inst_29801);
var state_29821__$1 = (function (){var statearr_29833 = state_29821;
(statearr_29833[(9)] = inst_29805);

(statearr_29833[(10)] = inst_29807__$1);

return statearr_29833;
})();
if(cljs.core.truth_(inst_29807__$1)){
var statearr_29834_29851 = state_29821__$1;
(statearr_29834_29851[(1)] = (9));

} else {
var statearr_29835_29852 = state_29821__$1;
(statearr_29835_29852[(1)] = (10));

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
});})(c__29496__auto__))
;
return ((function (switch__29475__auto__,c__29496__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29476__auto__ = null;
var figwheel$client$file_reloading$state_machine__29476__auto____0 = (function (){
var statearr_29839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29839[(0)] = figwheel$client$file_reloading$state_machine__29476__auto__);

(statearr_29839[(1)] = (1));

return statearr_29839;
});
var figwheel$client$file_reloading$state_machine__29476__auto____1 = (function (state_29821){
while(true){
var ret_value__29477__auto__ = (function (){try{while(true){
var result__29478__auto__ = switch__29475__auto__.call(null,state_29821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29478__auto__;
}
break;
}
}catch (e29840){if((e29840 instanceof Object)){
var ex__29479__auto__ = e29840;
var statearr_29841_29853 = state_29821;
(statearr_29841_29853[(5)] = ex__29479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29854 = state_29821;
state_29821 = G__29854;
continue;
} else {
return ret_value__29477__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29476__auto__ = function(state_29821){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29476__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29476__auto____1.call(this,state_29821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29476__auto____0;
figwheel$client$file_reloading$state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29476__auto____1;
return figwheel$client$file_reloading$state_machine__29476__auto__;
})()
;})(switch__29475__auto__,c__29496__auto__))
})();
var state__29498__auto__ = (function (){var statearr_29842 = f__29497__auto__.call(null);
(statearr_29842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29496__auto__);

return statearr_29842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29498__auto__);
});})(c__29496__auto__))
);

return c__29496__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29855,callback){
var map__29858 = p__29855;
var map__29858__$1 = ((((!((map__29858 == null)))?((((map__29858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29858):map__29858);
var file_msg = map__29858__$1;
var namespace = cljs.core.get.call(null,map__29858__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29858,map__29858__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29858,map__29858__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29860){
var map__29863 = p__29860;
var map__29863__$1 = ((((!((map__29863 == null)))?((((map__29863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);
var file_msg = map__29863__$1;
var namespace = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29865){
var map__29868 = p__29865;
var map__29868__$1 = ((((!((map__29868 == null)))?((((map__29868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29868):map__29868);
var file_msg = map__29868__$1;
var namespace = cljs.core.get.call(null,map__29868__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25079__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25079__auto__){
var or__25091__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25091__auto__)){
return or__25091__auto__;
} else {
var or__25091__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25091__auto____$1)){
return or__25091__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25079__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29870,callback){
var map__29873 = p__29870;
var map__29873__$1 = ((((!((map__29873 == null)))?((((map__29873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29873):map__29873);
var file_msg = map__29873__$1;
var request_url = cljs.core.get.call(null,map__29873__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29873__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__29496__auto___29977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29496__auto___29977,out){
return (function (){
var f__29497__auto__ = (function (){var switch__29475__auto__ = ((function (c__29496__auto___29977,out){
return (function (state_29959){
var state_val_29960 = (state_29959[(1)]);
if((state_val_29960 === (1))){
var inst_29933 = cljs.core.seq.call(null,files);
var inst_29934 = cljs.core.first.call(null,inst_29933);
var inst_29935 = cljs.core.next.call(null,inst_29933);
var inst_29936 = files;
var state_29959__$1 = (function (){var statearr_29961 = state_29959;
(statearr_29961[(7)] = inst_29935);

(statearr_29961[(8)] = inst_29934);

(statearr_29961[(9)] = inst_29936);

return statearr_29961;
})();
var statearr_29962_29978 = state_29959__$1;
(statearr_29962_29978[(2)] = null);

(statearr_29962_29978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (2))){
var inst_29942 = (state_29959[(10)]);
var inst_29936 = (state_29959[(9)]);
var inst_29941 = cljs.core.seq.call(null,inst_29936);
var inst_29942__$1 = cljs.core.first.call(null,inst_29941);
var inst_29943 = cljs.core.next.call(null,inst_29941);
var inst_29944 = (inst_29942__$1 == null);
var inst_29945 = cljs.core.not.call(null,inst_29944);
var state_29959__$1 = (function (){var statearr_29963 = state_29959;
(statearr_29963[(10)] = inst_29942__$1);

(statearr_29963[(11)] = inst_29943);

return statearr_29963;
})();
if(inst_29945){
var statearr_29964_29979 = state_29959__$1;
(statearr_29964_29979[(1)] = (4));

} else {
var statearr_29965_29980 = state_29959__$1;
(statearr_29965_29980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (3))){
var inst_29957 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29959__$1,inst_29957);
} else {
if((state_val_29960 === (4))){
var inst_29942 = (state_29959[(10)]);
var inst_29947 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29942);
var state_29959__$1 = state_29959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29959__$1,(7),inst_29947);
} else {
if((state_val_29960 === (5))){
var inst_29953 = cljs.core.async.close_BANG_.call(null,out);
var state_29959__$1 = state_29959;
var statearr_29966_29981 = state_29959__$1;
(statearr_29966_29981[(2)] = inst_29953);

(statearr_29966_29981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (6))){
var inst_29955 = (state_29959[(2)]);
var state_29959__$1 = state_29959;
var statearr_29967_29982 = state_29959__$1;
(statearr_29967_29982[(2)] = inst_29955);

(statearr_29967_29982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29960 === (7))){
var inst_29943 = (state_29959[(11)]);
var inst_29949 = (state_29959[(2)]);
var inst_29950 = cljs.core.async.put_BANG_.call(null,out,inst_29949);
var inst_29936 = inst_29943;
var state_29959__$1 = (function (){var statearr_29968 = state_29959;
(statearr_29968[(12)] = inst_29950);

(statearr_29968[(9)] = inst_29936);

return statearr_29968;
})();
var statearr_29969_29983 = state_29959__$1;
(statearr_29969_29983[(2)] = null);

(statearr_29969_29983[(1)] = (2));


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
});})(c__29496__auto___29977,out))
;
return ((function (switch__29475__auto__,c__29496__auto___29977,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto____0 = (function (){
var statearr_29973 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29973[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto__);

(statearr_29973[(1)] = (1));

return statearr_29973;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto____1 = (function (state_29959){
while(true){
var ret_value__29477__auto__ = (function (){try{while(true){
var result__29478__auto__ = switch__29475__auto__.call(null,state_29959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29478__auto__;
}
break;
}
}catch (e29974){if((e29974 instanceof Object)){
var ex__29479__auto__ = e29974;
var statearr_29975_29984 = state_29959;
(statearr_29975_29984[(5)] = ex__29479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29985 = state_29959;
state_29959 = G__29985;
continue;
} else {
return ret_value__29477__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto__ = function(state_29959){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto____1.call(this,state_29959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29476__auto__;
})()
;})(switch__29475__auto__,c__29496__auto___29977,out))
})();
var state__29498__auto__ = (function (){var statearr_29976 = f__29497__auto__.call(null);
(statearr_29976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29496__auto___29977);

return statearr_29976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29498__auto__);
});})(c__29496__auto___29977,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29986,opts){
var map__29990 = p__29986;
var map__29990__$1 = ((((!((map__29990 == null)))?((((map__29990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29990):map__29990);
var eval_body = cljs.core.get.call(null,map__29990__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29990__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25079__auto__ = eval_body;
if(cljs.core.truth_(and__25079__auto__)){
return typeof eval_body === 'string';
} else {
return and__25079__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29992){var e = e29992;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29993_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29993_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__30002){
var vec__30003 = p__30002;
var k = cljs.core.nth.call(null,vec__30003,(0),null);
var v = cljs.core.nth.call(null,vec__30003,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30006){
var vec__30007 = p__30006;
var k = cljs.core.nth.call(null,vec__30007,(0),null);
var v = cljs.core.nth.call(null,vec__30007,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30013,p__30014){
var map__30262 = p__30013;
var map__30262__$1 = ((((!((map__30262 == null)))?((((map__30262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30262):map__30262);
var opts = map__30262__$1;
var before_jsload = cljs.core.get.call(null,map__30262__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30262__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30262__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30263 = p__30014;
var map__30263__$1 = ((((!((map__30263 == null)))?((((map__30263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30263):map__30263);
var msg = map__30263__$1;
var files = cljs.core.get.call(null,map__30263__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30263__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30263__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29497__auto__ = (function (){var switch__29475__auto__ = ((function (c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30417){
var state_val_30418 = (state_30417[(1)]);
if((state_val_30418 === (7))){
var inst_30278 = (state_30417[(7)]);
var inst_30277 = (state_30417[(8)]);
var inst_30279 = (state_30417[(9)]);
var inst_30280 = (state_30417[(10)]);
var inst_30285 = cljs.core._nth.call(null,inst_30278,inst_30280);
var inst_30286 = figwheel.client.file_reloading.eval_body.call(null,inst_30285,opts);
var inst_30287 = (inst_30280 + (1));
var tmp30419 = inst_30278;
var tmp30420 = inst_30277;
var tmp30421 = inst_30279;
var inst_30277__$1 = tmp30420;
var inst_30278__$1 = tmp30419;
var inst_30279__$1 = tmp30421;
var inst_30280__$1 = inst_30287;
var state_30417__$1 = (function (){var statearr_30422 = state_30417;
(statearr_30422[(7)] = inst_30278__$1);

(statearr_30422[(8)] = inst_30277__$1);

(statearr_30422[(9)] = inst_30279__$1);

(statearr_30422[(11)] = inst_30286);

(statearr_30422[(10)] = inst_30280__$1);

return statearr_30422;
})();
var statearr_30423_30509 = state_30417__$1;
(statearr_30423_30509[(2)] = null);

(statearr_30423_30509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (20))){
var inst_30320 = (state_30417[(12)]);
var inst_30328 = figwheel.client.file_reloading.sort_files.call(null,inst_30320);
var state_30417__$1 = state_30417;
var statearr_30424_30510 = state_30417__$1;
(statearr_30424_30510[(2)] = inst_30328);

(statearr_30424_30510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (27))){
var state_30417__$1 = state_30417;
var statearr_30425_30511 = state_30417__$1;
(statearr_30425_30511[(2)] = null);

(statearr_30425_30511[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (1))){
var inst_30269 = (state_30417[(13)]);
var inst_30266 = before_jsload.call(null,files);
var inst_30267 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30268 = (function (){return ((function (inst_30269,inst_30266,inst_30267,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30010_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30010_SHARP_);
});
;})(inst_30269,inst_30266,inst_30267,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30269__$1 = cljs.core.filter.call(null,inst_30268,files);
var inst_30270 = cljs.core.not_empty.call(null,inst_30269__$1);
var state_30417__$1 = (function (){var statearr_30426 = state_30417;
(statearr_30426[(13)] = inst_30269__$1);

(statearr_30426[(14)] = inst_30266);

(statearr_30426[(15)] = inst_30267);

return statearr_30426;
})();
if(cljs.core.truth_(inst_30270)){
var statearr_30427_30512 = state_30417__$1;
(statearr_30427_30512[(1)] = (2));

} else {
var statearr_30428_30513 = state_30417__$1;
(statearr_30428_30513[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (24))){
var state_30417__$1 = state_30417;
var statearr_30429_30514 = state_30417__$1;
(statearr_30429_30514[(2)] = null);

(statearr_30429_30514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (39))){
var inst_30370 = (state_30417[(16)]);
var state_30417__$1 = state_30417;
var statearr_30430_30515 = state_30417__$1;
(statearr_30430_30515[(2)] = inst_30370);

(statearr_30430_30515[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (46))){
var inst_30412 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
var statearr_30431_30516 = state_30417__$1;
(statearr_30431_30516[(2)] = inst_30412);

(statearr_30431_30516[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (4))){
var inst_30314 = (state_30417[(2)]);
var inst_30315 = cljs.core.List.EMPTY;
var inst_30316 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30315);
var inst_30317 = (function (){return ((function (inst_30314,inst_30315,inst_30316,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30011_SHARP_){
var and__25079__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30011_SHARP_);
if(cljs.core.truth_(and__25079__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30011_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30011_SHARP_)));
} else {
return and__25079__auto__;
}
});
;})(inst_30314,inst_30315,inst_30316,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30318 = cljs.core.filter.call(null,inst_30317,files);
var inst_30319 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30320 = cljs.core.concat.call(null,inst_30318,inst_30319);
var state_30417__$1 = (function (){var statearr_30432 = state_30417;
(statearr_30432[(17)] = inst_30314);

(statearr_30432[(12)] = inst_30320);

(statearr_30432[(18)] = inst_30316);

return statearr_30432;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30433_30517 = state_30417__$1;
(statearr_30433_30517[(1)] = (16));

} else {
var statearr_30434_30518 = state_30417__$1;
(statearr_30434_30518[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (15))){
var inst_30304 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
var statearr_30435_30519 = state_30417__$1;
(statearr_30435_30519[(2)] = inst_30304);

(statearr_30435_30519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (21))){
var inst_30330 = (state_30417[(19)]);
var inst_30330__$1 = (state_30417[(2)]);
var inst_30331 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30330__$1);
var state_30417__$1 = (function (){var statearr_30436 = state_30417;
(statearr_30436[(19)] = inst_30330__$1);

return statearr_30436;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30417__$1,(22),inst_30331);
} else {
if((state_val_30418 === (31))){
var inst_30415 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30417__$1,inst_30415);
} else {
if((state_val_30418 === (32))){
var inst_30370 = (state_30417[(16)]);
var inst_30375 = inst_30370.cljs$lang$protocol_mask$partition0$;
var inst_30376 = (inst_30375 & (64));
var inst_30377 = inst_30370.cljs$core$ISeq$;
var inst_30378 = (cljs.core.PROTOCOL_SENTINEL === inst_30377);
var inst_30379 = (inst_30376) || (inst_30378);
var state_30417__$1 = state_30417;
if(cljs.core.truth_(inst_30379)){
var statearr_30437_30520 = state_30417__$1;
(statearr_30437_30520[(1)] = (35));

} else {
var statearr_30438_30521 = state_30417__$1;
(statearr_30438_30521[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (40))){
var inst_30392 = (state_30417[(20)]);
var inst_30391 = (state_30417[(2)]);
var inst_30392__$1 = cljs.core.get.call(null,inst_30391,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30393 = cljs.core.get.call(null,inst_30391,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30394 = cljs.core.not_empty.call(null,inst_30392__$1);
var state_30417__$1 = (function (){var statearr_30439 = state_30417;
(statearr_30439[(20)] = inst_30392__$1);

(statearr_30439[(21)] = inst_30393);

return statearr_30439;
})();
if(cljs.core.truth_(inst_30394)){
var statearr_30440_30522 = state_30417__$1;
(statearr_30440_30522[(1)] = (41));

} else {
var statearr_30441_30523 = state_30417__$1;
(statearr_30441_30523[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (33))){
var state_30417__$1 = state_30417;
var statearr_30442_30524 = state_30417__$1;
(statearr_30442_30524[(2)] = false);

(statearr_30442_30524[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (13))){
var inst_30290 = (state_30417[(22)]);
var inst_30294 = cljs.core.chunk_first.call(null,inst_30290);
var inst_30295 = cljs.core.chunk_rest.call(null,inst_30290);
var inst_30296 = cljs.core.count.call(null,inst_30294);
var inst_30277 = inst_30295;
var inst_30278 = inst_30294;
var inst_30279 = inst_30296;
var inst_30280 = (0);
var state_30417__$1 = (function (){var statearr_30443 = state_30417;
(statearr_30443[(7)] = inst_30278);

(statearr_30443[(8)] = inst_30277);

(statearr_30443[(9)] = inst_30279);

(statearr_30443[(10)] = inst_30280);

return statearr_30443;
})();
var statearr_30444_30525 = state_30417__$1;
(statearr_30444_30525[(2)] = null);

(statearr_30444_30525[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (22))){
var inst_30330 = (state_30417[(19)]);
var inst_30338 = (state_30417[(23)]);
var inst_30333 = (state_30417[(24)]);
var inst_30334 = (state_30417[(25)]);
var inst_30333__$1 = (state_30417[(2)]);
var inst_30334__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30333__$1);
var inst_30335 = (function (){var all_files = inst_30330;
var res_SINGLEQUOTE_ = inst_30333__$1;
var res = inst_30334__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30330,inst_30338,inst_30333,inst_30334,inst_30333__$1,inst_30334__$1,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30012_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30012_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30330,inst_30338,inst_30333,inst_30334,inst_30333__$1,inst_30334__$1,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30336 = cljs.core.filter.call(null,inst_30335,inst_30333__$1);
var inst_30337 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30338__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30337);
var inst_30339 = cljs.core.not_empty.call(null,inst_30338__$1);
var state_30417__$1 = (function (){var statearr_30445 = state_30417;
(statearr_30445[(23)] = inst_30338__$1);

(statearr_30445[(24)] = inst_30333__$1);

(statearr_30445[(26)] = inst_30336);

(statearr_30445[(25)] = inst_30334__$1);

return statearr_30445;
})();
if(cljs.core.truth_(inst_30339)){
var statearr_30446_30526 = state_30417__$1;
(statearr_30446_30526[(1)] = (23));

} else {
var statearr_30447_30527 = state_30417__$1;
(statearr_30447_30527[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (36))){
var state_30417__$1 = state_30417;
var statearr_30448_30528 = state_30417__$1;
(statearr_30448_30528[(2)] = false);

(statearr_30448_30528[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (41))){
var inst_30392 = (state_30417[(20)]);
var inst_30396 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30397 = cljs.core.map.call(null,inst_30396,inst_30392);
var inst_30398 = cljs.core.pr_str.call(null,inst_30397);
var inst_30399 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30398)].join('');
var inst_30400 = figwheel.client.utils.log.call(null,inst_30399);
var state_30417__$1 = state_30417;
var statearr_30449_30529 = state_30417__$1;
(statearr_30449_30529[(2)] = inst_30400);

(statearr_30449_30529[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (43))){
var inst_30393 = (state_30417[(21)]);
var inst_30403 = (state_30417[(2)]);
var inst_30404 = cljs.core.not_empty.call(null,inst_30393);
var state_30417__$1 = (function (){var statearr_30450 = state_30417;
(statearr_30450[(27)] = inst_30403);

return statearr_30450;
})();
if(cljs.core.truth_(inst_30404)){
var statearr_30451_30530 = state_30417__$1;
(statearr_30451_30530[(1)] = (44));

} else {
var statearr_30452_30531 = state_30417__$1;
(statearr_30452_30531[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (29))){
var inst_30370 = (state_30417[(16)]);
var inst_30330 = (state_30417[(19)]);
var inst_30338 = (state_30417[(23)]);
var inst_30333 = (state_30417[(24)]);
var inst_30336 = (state_30417[(26)]);
var inst_30334 = (state_30417[(25)]);
var inst_30366 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30369 = (function (){var all_files = inst_30330;
var res_SINGLEQUOTE_ = inst_30333;
var res = inst_30334;
var files_not_loaded = inst_30336;
var dependencies_that_loaded = inst_30338;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30370,inst_30330,inst_30338,inst_30333,inst_30336,inst_30334,inst_30366,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30368){
var map__30453 = p__30368;
var map__30453__$1 = ((((!((map__30453 == null)))?((((map__30453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30453):map__30453);
var namespace = cljs.core.get.call(null,map__30453__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30370,inst_30330,inst_30338,inst_30333,inst_30336,inst_30334,inst_30366,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30370__$1 = cljs.core.group_by.call(null,inst_30369,inst_30336);
var inst_30372 = (inst_30370__$1 == null);
var inst_30373 = cljs.core.not.call(null,inst_30372);
var state_30417__$1 = (function (){var statearr_30455 = state_30417;
(statearr_30455[(16)] = inst_30370__$1);

(statearr_30455[(28)] = inst_30366);

return statearr_30455;
})();
if(inst_30373){
var statearr_30456_30532 = state_30417__$1;
(statearr_30456_30532[(1)] = (32));

} else {
var statearr_30457_30533 = state_30417__$1;
(statearr_30457_30533[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (44))){
var inst_30393 = (state_30417[(21)]);
var inst_30406 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30393);
var inst_30407 = cljs.core.pr_str.call(null,inst_30406);
var inst_30408 = [cljs.core.str("not required: "),cljs.core.str(inst_30407)].join('');
var inst_30409 = figwheel.client.utils.log.call(null,inst_30408);
var state_30417__$1 = state_30417;
var statearr_30458_30534 = state_30417__$1;
(statearr_30458_30534[(2)] = inst_30409);

(statearr_30458_30534[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (6))){
var inst_30311 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
var statearr_30459_30535 = state_30417__$1;
(statearr_30459_30535[(2)] = inst_30311);

(statearr_30459_30535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (28))){
var inst_30336 = (state_30417[(26)]);
var inst_30363 = (state_30417[(2)]);
var inst_30364 = cljs.core.not_empty.call(null,inst_30336);
var state_30417__$1 = (function (){var statearr_30460 = state_30417;
(statearr_30460[(29)] = inst_30363);

return statearr_30460;
})();
if(cljs.core.truth_(inst_30364)){
var statearr_30461_30536 = state_30417__$1;
(statearr_30461_30536[(1)] = (29));

} else {
var statearr_30462_30537 = state_30417__$1;
(statearr_30462_30537[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (25))){
var inst_30334 = (state_30417[(25)]);
var inst_30350 = (state_30417[(2)]);
var inst_30351 = cljs.core.not_empty.call(null,inst_30334);
var state_30417__$1 = (function (){var statearr_30463 = state_30417;
(statearr_30463[(30)] = inst_30350);

return statearr_30463;
})();
if(cljs.core.truth_(inst_30351)){
var statearr_30464_30538 = state_30417__$1;
(statearr_30464_30538[(1)] = (26));

} else {
var statearr_30465_30539 = state_30417__$1;
(statearr_30465_30539[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (34))){
var inst_30386 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
if(cljs.core.truth_(inst_30386)){
var statearr_30466_30540 = state_30417__$1;
(statearr_30466_30540[(1)] = (38));

} else {
var statearr_30467_30541 = state_30417__$1;
(statearr_30467_30541[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (17))){
var state_30417__$1 = state_30417;
var statearr_30468_30542 = state_30417__$1;
(statearr_30468_30542[(2)] = recompile_dependents);

(statearr_30468_30542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (3))){
var state_30417__$1 = state_30417;
var statearr_30469_30543 = state_30417__$1;
(statearr_30469_30543[(2)] = null);

(statearr_30469_30543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (12))){
var inst_30307 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
var statearr_30470_30544 = state_30417__$1;
(statearr_30470_30544[(2)] = inst_30307);

(statearr_30470_30544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (2))){
var inst_30269 = (state_30417[(13)]);
var inst_30276 = cljs.core.seq.call(null,inst_30269);
var inst_30277 = inst_30276;
var inst_30278 = null;
var inst_30279 = (0);
var inst_30280 = (0);
var state_30417__$1 = (function (){var statearr_30471 = state_30417;
(statearr_30471[(7)] = inst_30278);

(statearr_30471[(8)] = inst_30277);

(statearr_30471[(9)] = inst_30279);

(statearr_30471[(10)] = inst_30280);

return statearr_30471;
})();
var statearr_30472_30545 = state_30417__$1;
(statearr_30472_30545[(2)] = null);

(statearr_30472_30545[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (23))){
var inst_30330 = (state_30417[(19)]);
var inst_30338 = (state_30417[(23)]);
var inst_30333 = (state_30417[(24)]);
var inst_30336 = (state_30417[(26)]);
var inst_30334 = (state_30417[(25)]);
var inst_30341 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30343 = (function (){var all_files = inst_30330;
var res_SINGLEQUOTE_ = inst_30333;
var res = inst_30334;
var files_not_loaded = inst_30336;
var dependencies_that_loaded = inst_30338;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30330,inst_30338,inst_30333,inst_30336,inst_30334,inst_30341,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30342){
var map__30473 = p__30342;
var map__30473__$1 = ((((!((map__30473 == null)))?((((map__30473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30473):map__30473);
var request_url = cljs.core.get.call(null,map__30473__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30330,inst_30338,inst_30333,inst_30336,inst_30334,inst_30341,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30344 = cljs.core.reverse.call(null,inst_30338);
var inst_30345 = cljs.core.map.call(null,inst_30343,inst_30344);
var inst_30346 = cljs.core.pr_str.call(null,inst_30345);
var inst_30347 = figwheel.client.utils.log.call(null,inst_30346);
var state_30417__$1 = (function (){var statearr_30475 = state_30417;
(statearr_30475[(31)] = inst_30341);

return statearr_30475;
})();
var statearr_30476_30546 = state_30417__$1;
(statearr_30476_30546[(2)] = inst_30347);

(statearr_30476_30546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (35))){
var state_30417__$1 = state_30417;
var statearr_30477_30547 = state_30417__$1;
(statearr_30477_30547[(2)] = true);

(statearr_30477_30547[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (19))){
var inst_30320 = (state_30417[(12)]);
var inst_30326 = figwheel.client.file_reloading.expand_files.call(null,inst_30320);
var state_30417__$1 = state_30417;
var statearr_30478_30548 = state_30417__$1;
(statearr_30478_30548[(2)] = inst_30326);

(statearr_30478_30548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (11))){
var state_30417__$1 = state_30417;
var statearr_30479_30549 = state_30417__$1;
(statearr_30479_30549[(2)] = null);

(statearr_30479_30549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (9))){
var inst_30309 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
var statearr_30480_30550 = state_30417__$1;
(statearr_30480_30550[(2)] = inst_30309);

(statearr_30480_30550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (5))){
var inst_30279 = (state_30417[(9)]);
var inst_30280 = (state_30417[(10)]);
var inst_30282 = (inst_30280 < inst_30279);
var inst_30283 = inst_30282;
var state_30417__$1 = state_30417;
if(cljs.core.truth_(inst_30283)){
var statearr_30481_30551 = state_30417__$1;
(statearr_30481_30551[(1)] = (7));

} else {
var statearr_30482_30552 = state_30417__$1;
(statearr_30482_30552[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (14))){
var inst_30290 = (state_30417[(22)]);
var inst_30299 = cljs.core.first.call(null,inst_30290);
var inst_30300 = figwheel.client.file_reloading.eval_body.call(null,inst_30299,opts);
var inst_30301 = cljs.core.next.call(null,inst_30290);
var inst_30277 = inst_30301;
var inst_30278 = null;
var inst_30279 = (0);
var inst_30280 = (0);
var state_30417__$1 = (function (){var statearr_30483 = state_30417;
(statearr_30483[(7)] = inst_30278);

(statearr_30483[(8)] = inst_30277);

(statearr_30483[(9)] = inst_30279);

(statearr_30483[(32)] = inst_30300);

(statearr_30483[(10)] = inst_30280);

return statearr_30483;
})();
var statearr_30484_30553 = state_30417__$1;
(statearr_30484_30553[(2)] = null);

(statearr_30484_30553[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (45))){
var state_30417__$1 = state_30417;
var statearr_30485_30554 = state_30417__$1;
(statearr_30485_30554[(2)] = null);

(statearr_30485_30554[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (26))){
var inst_30330 = (state_30417[(19)]);
var inst_30338 = (state_30417[(23)]);
var inst_30333 = (state_30417[(24)]);
var inst_30336 = (state_30417[(26)]);
var inst_30334 = (state_30417[(25)]);
var inst_30353 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30355 = (function (){var all_files = inst_30330;
var res_SINGLEQUOTE_ = inst_30333;
var res = inst_30334;
var files_not_loaded = inst_30336;
var dependencies_that_loaded = inst_30338;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30330,inst_30338,inst_30333,inst_30336,inst_30334,inst_30353,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30354){
var map__30486 = p__30354;
var map__30486__$1 = ((((!((map__30486 == null)))?((((map__30486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30486):map__30486);
var namespace = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30486__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30330,inst_30338,inst_30333,inst_30336,inst_30334,inst_30353,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30356 = cljs.core.map.call(null,inst_30355,inst_30334);
var inst_30357 = cljs.core.pr_str.call(null,inst_30356);
var inst_30358 = figwheel.client.utils.log.call(null,inst_30357);
var inst_30359 = (function (){var all_files = inst_30330;
var res_SINGLEQUOTE_ = inst_30333;
var res = inst_30334;
var files_not_loaded = inst_30336;
var dependencies_that_loaded = inst_30338;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30330,inst_30338,inst_30333,inst_30336,inst_30334,inst_30353,inst_30355,inst_30356,inst_30357,inst_30358,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30330,inst_30338,inst_30333,inst_30336,inst_30334,inst_30353,inst_30355,inst_30356,inst_30357,inst_30358,state_val_30418,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30360 = setTimeout(inst_30359,(10));
var state_30417__$1 = (function (){var statearr_30488 = state_30417;
(statearr_30488[(33)] = inst_30353);

(statearr_30488[(34)] = inst_30358);

return statearr_30488;
})();
var statearr_30489_30555 = state_30417__$1;
(statearr_30489_30555[(2)] = inst_30360);

(statearr_30489_30555[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (16))){
var state_30417__$1 = state_30417;
var statearr_30490_30556 = state_30417__$1;
(statearr_30490_30556[(2)] = reload_dependents);

(statearr_30490_30556[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (38))){
var inst_30370 = (state_30417[(16)]);
var inst_30388 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30370);
var state_30417__$1 = state_30417;
var statearr_30491_30557 = state_30417__$1;
(statearr_30491_30557[(2)] = inst_30388);

(statearr_30491_30557[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (30))){
var state_30417__$1 = state_30417;
var statearr_30492_30558 = state_30417__$1;
(statearr_30492_30558[(2)] = null);

(statearr_30492_30558[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (10))){
var inst_30290 = (state_30417[(22)]);
var inst_30292 = cljs.core.chunked_seq_QMARK_.call(null,inst_30290);
var state_30417__$1 = state_30417;
if(inst_30292){
var statearr_30493_30559 = state_30417__$1;
(statearr_30493_30559[(1)] = (13));

} else {
var statearr_30494_30560 = state_30417__$1;
(statearr_30494_30560[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (18))){
var inst_30324 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
if(cljs.core.truth_(inst_30324)){
var statearr_30495_30561 = state_30417__$1;
(statearr_30495_30561[(1)] = (19));

} else {
var statearr_30496_30562 = state_30417__$1;
(statearr_30496_30562[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (42))){
var state_30417__$1 = state_30417;
var statearr_30497_30563 = state_30417__$1;
(statearr_30497_30563[(2)] = null);

(statearr_30497_30563[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (37))){
var inst_30383 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
var statearr_30498_30564 = state_30417__$1;
(statearr_30498_30564[(2)] = inst_30383);

(statearr_30498_30564[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (8))){
var inst_30277 = (state_30417[(8)]);
var inst_30290 = (state_30417[(22)]);
var inst_30290__$1 = cljs.core.seq.call(null,inst_30277);
var state_30417__$1 = (function (){var statearr_30499 = state_30417;
(statearr_30499[(22)] = inst_30290__$1);

return statearr_30499;
})();
if(inst_30290__$1){
var statearr_30500_30565 = state_30417__$1;
(statearr_30500_30565[(1)] = (10));

} else {
var statearr_30501_30566 = state_30417__$1;
(statearr_30501_30566[(1)] = (11));

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
});})(c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29475__auto__,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto____0 = (function (){
var statearr_30505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30505[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto__);

(statearr_30505[(1)] = (1));

return statearr_30505;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto____1 = (function (state_30417){
while(true){
var ret_value__29477__auto__ = (function (){try{while(true){
var result__29478__auto__ = switch__29475__auto__.call(null,state_30417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29478__auto__;
}
break;
}
}catch (e30506){if((e30506 instanceof Object)){
var ex__29479__auto__ = e30506;
var statearr_30507_30567 = state_30417;
(statearr_30507_30567[(5)] = ex__29479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30568 = state_30417;
state_30417 = G__30568;
continue;
} else {
return ret_value__29477__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto__ = function(state_30417){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto____1.call(this,state_30417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29476__auto__;
})()
;})(switch__29475__auto__,c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29498__auto__ = (function (){var statearr_30508 = f__29497__auto__.call(null);
(statearr_30508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29496__auto__);

return statearr_30508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29498__auto__);
});})(c__29496__auto__,map__30262,map__30262__$1,opts,before_jsload,on_jsload,reload_dependents,map__30263,map__30263__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29496__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30571,link){
var map__30574 = p__30571;
var map__30574__$1 = ((((!((map__30574 == null)))?((((map__30574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30574):map__30574);
var file = cljs.core.get.call(null,map__30574__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30574,map__30574__$1,file){
return (function (p1__30569_SHARP_,p2__30570_SHARP_){
if(cljs.core._EQ_.call(null,p1__30569_SHARP_,p2__30570_SHARP_)){
return p1__30569_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30574,map__30574__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30580){
var map__30581 = p__30580;
var map__30581__$1 = ((((!((map__30581 == null)))?((((map__30581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30581):map__30581);
var match_length = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30576_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30576_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30583_SHARP_,p2__30584_SHARP_){
return cljs.core.assoc.call(null,p1__30583_SHARP_,cljs.core.get.call(null,p2__30584_SHARP_,key),p2__30584_SHARP_);
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
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30585 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30585);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30585);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30586,p__30587){
var map__30592 = p__30586;
var map__30592__$1 = ((((!((map__30592 == null)))?((((map__30592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30592):map__30592);
var on_cssload = cljs.core.get.call(null,map__30592__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30593 = p__30587;
var map__30593__$1 = ((((!((map__30593 == null)))?((((map__30593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30593):map__30593);
var files_msg = map__30593__$1;
var files = cljs.core.get.call(null,map__30593__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1485761767139