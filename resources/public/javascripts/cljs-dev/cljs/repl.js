// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29849){
var map__29850 = p__29849;
var map__29850__$1 = ((((!((map__29850 == null)))?(((((map__29850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29850):map__29850);
var m = map__29850__$1;
var n = cljs.core.get.call(null,map__29850__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29850__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29852_29874 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29853_29875 = null;
var count__29854_29876 = (0);
var i__29855_29877 = (0);
while(true){
if((i__29855_29877 < count__29854_29876)){
var f_29878 = cljs.core._nth.call(null,chunk__29853_29875,i__29855_29877);
cljs.core.println.call(null,"  ",f_29878);


var G__29879 = seq__29852_29874;
var G__29880 = chunk__29853_29875;
var G__29881 = count__29854_29876;
var G__29882 = (i__29855_29877 + (1));
seq__29852_29874 = G__29879;
chunk__29853_29875 = G__29880;
count__29854_29876 = G__29881;
i__29855_29877 = G__29882;
continue;
} else {
var temp__5457__auto___29883 = cljs.core.seq.call(null,seq__29852_29874);
if(temp__5457__auto___29883){
var seq__29852_29884__$1 = temp__5457__auto___29883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29852_29884__$1)){
var c__4319__auto___29885 = cljs.core.chunk_first.call(null,seq__29852_29884__$1);
var G__29886 = cljs.core.chunk_rest.call(null,seq__29852_29884__$1);
var G__29887 = c__4319__auto___29885;
var G__29888 = cljs.core.count.call(null,c__4319__auto___29885);
var G__29889 = (0);
seq__29852_29874 = G__29886;
chunk__29853_29875 = G__29887;
count__29854_29876 = G__29888;
i__29855_29877 = G__29889;
continue;
} else {
var f_29890 = cljs.core.first.call(null,seq__29852_29884__$1);
cljs.core.println.call(null,"  ",f_29890);


var G__29891 = cljs.core.next.call(null,seq__29852_29884__$1);
var G__29892 = null;
var G__29893 = (0);
var G__29894 = (0);
seq__29852_29874 = G__29891;
chunk__29853_29875 = G__29892;
count__29854_29876 = G__29893;
i__29855_29877 = G__29894;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29895 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29895);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29895)))?cljs.core.second.call(null,arglists_29895):arglists_29895));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29856_29896 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29857_29897 = null;
var count__29858_29898 = (0);
var i__29859_29899 = (0);
while(true){
if((i__29859_29899 < count__29858_29898)){
var vec__29860_29900 = cljs.core._nth.call(null,chunk__29857_29897,i__29859_29899);
var name_29901 = cljs.core.nth.call(null,vec__29860_29900,(0),null);
var map__29863_29902 = cljs.core.nth.call(null,vec__29860_29900,(1),null);
var map__29863_29903__$1 = ((((!((map__29863_29902 == null)))?(((((map__29863_29902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29863_29902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863_29902):map__29863_29902);
var doc_29904 = cljs.core.get.call(null,map__29863_29903__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29905 = cljs.core.get.call(null,map__29863_29903__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29901);

cljs.core.println.call(null," ",arglists_29905);

if(cljs.core.truth_(doc_29904)){
cljs.core.println.call(null," ",doc_29904);
} else {
}


var G__29906 = seq__29856_29896;
var G__29907 = chunk__29857_29897;
var G__29908 = count__29858_29898;
var G__29909 = (i__29859_29899 + (1));
seq__29856_29896 = G__29906;
chunk__29857_29897 = G__29907;
count__29858_29898 = G__29908;
i__29859_29899 = G__29909;
continue;
} else {
var temp__5457__auto___29910 = cljs.core.seq.call(null,seq__29856_29896);
if(temp__5457__auto___29910){
var seq__29856_29911__$1 = temp__5457__auto___29910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29856_29911__$1)){
var c__4319__auto___29912 = cljs.core.chunk_first.call(null,seq__29856_29911__$1);
var G__29913 = cljs.core.chunk_rest.call(null,seq__29856_29911__$1);
var G__29914 = c__4319__auto___29912;
var G__29915 = cljs.core.count.call(null,c__4319__auto___29912);
var G__29916 = (0);
seq__29856_29896 = G__29913;
chunk__29857_29897 = G__29914;
count__29858_29898 = G__29915;
i__29859_29899 = G__29916;
continue;
} else {
var vec__29865_29917 = cljs.core.first.call(null,seq__29856_29911__$1);
var name_29918 = cljs.core.nth.call(null,vec__29865_29917,(0),null);
var map__29868_29919 = cljs.core.nth.call(null,vec__29865_29917,(1),null);
var map__29868_29920__$1 = ((((!((map__29868_29919 == null)))?(((((map__29868_29919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29868_29919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29868_29919):map__29868_29919);
var doc_29921 = cljs.core.get.call(null,map__29868_29920__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29922 = cljs.core.get.call(null,map__29868_29920__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29918);

cljs.core.println.call(null," ",arglists_29922);

if(cljs.core.truth_(doc_29921)){
cljs.core.println.call(null," ",doc_29921);
} else {
}


var G__29923 = cljs.core.next.call(null,seq__29856_29911__$1);
var G__29924 = null;
var G__29925 = (0);
var G__29926 = (0);
seq__29856_29896 = G__29923;
chunk__29857_29897 = G__29924;
count__29858_29898 = G__29925;
i__29859_29899 = G__29926;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__29870 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29871 = null;
var count__29872 = (0);
var i__29873 = (0);
while(true){
if((i__29873 < count__29872)){
var role = cljs.core._nth.call(null,chunk__29871,i__29873);
var temp__5457__auto___29927__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29927__$1)){
var spec_29928 = temp__5457__auto___29927__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29928));
} else {
}


var G__29929 = seq__29870;
var G__29930 = chunk__29871;
var G__29931 = count__29872;
var G__29932 = (i__29873 + (1));
seq__29870 = G__29929;
chunk__29871 = G__29930;
count__29872 = G__29931;
i__29873 = G__29932;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__29870);
if(temp__5457__auto____$1){
var seq__29870__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29870__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29870__$1);
var G__29933 = cljs.core.chunk_rest.call(null,seq__29870__$1);
var G__29934 = c__4319__auto__;
var G__29935 = cljs.core.count.call(null,c__4319__auto__);
var G__29936 = (0);
seq__29870 = G__29933;
chunk__29871 = G__29934;
count__29872 = G__29935;
i__29873 = G__29936;
continue;
} else {
var role = cljs.core.first.call(null,seq__29870__$1);
var temp__5457__auto___29937__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___29937__$2)){
var spec_29938 = temp__5457__auto___29937__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29938));
} else {
}


var G__29939 = cljs.core.next.call(null,seq__29870__$1);
var G__29940 = null;
var G__29941 = (0);
var G__29942 = (0);
seq__29870 = G__29939;
chunk__29871 = G__29940;
count__29872 = G__29941;
i__29873 = G__29942;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1527566163054
