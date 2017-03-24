// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31692){
var map__31717 = p__31692;
var map__31717__$1 = ((((!((map__31717 == null)))?((((map__31717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31717):map__31717);
var m = map__31717__$1;
var n = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31719_31741 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31720_31742 = null;
var count__31721_31743 = (0);
var i__31722_31744 = (0);
while(true){
if((i__31722_31744 < count__31721_31743)){
var f_31745 = cljs.core._nth.call(null,chunk__31720_31742,i__31722_31744);
cljs.core.println.call(null,"  ",f_31745);

var G__31746 = seq__31719_31741;
var G__31747 = chunk__31720_31742;
var G__31748 = count__31721_31743;
var G__31749 = (i__31722_31744 + (1));
seq__31719_31741 = G__31746;
chunk__31720_31742 = G__31747;
count__31721_31743 = G__31748;
i__31722_31744 = G__31749;
continue;
} else {
var temp__4657__auto___31750 = cljs.core.seq.call(null,seq__31719_31741);
if(temp__4657__auto___31750){
var seq__31719_31751__$1 = temp__4657__auto___31750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31719_31751__$1)){
var c__25905__auto___31752 = cljs.core.chunk_first.call(null,seq__31719_31751__$1);
var G__31753 = cljs.core.chunk_rest.call(null,seq__31719_31751__$1);
var G__31754 = c__25905__auto___31752;
var G__31755 = cljs.core.count.call(null,c__25905__auto___31752);
var G__31756 = (0);
seq__31719_31741 = G__31753;
chunk__31720_31742 = G__31754;
count__31721_31743 = G__31755;
i__31722_31744 = G__31756;
continue;
} else {
var f_31757 = cljs.core.first.call(null,seq__31719_31751__$1);
cljs.core.println.call(null,"  ",f_31757);

var G__31758 = cljs.core.next.call(null,seq__31719_31751__$1);
var G__31759 = null;
var G__31760 = (0);
var G__31761 = (0);
seq__31719_31741 = G__31758;
chunk__31720_31742 = G__31759;
count__31721_31743 = G__31760;
i__31722_31744 = G__31761;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31762 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25091__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25091__auto__)){
return or__25091__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31762);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31762)))?cljs.core.second.call(null,arglists_31762):arglists_31762));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__31723_31763 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31724_31764 = null;
var count__31725_31765 = (0);
var i__31726_31766 = (0);
while(true){
if((i__31726_31766 < count__31725_31765)){
var vec__31727_31767 = cljs.core._nth.call(null,chunk__31724_31764,i__31726_31766);
var name_31768 = cljs.core.nth.call(null,vec__31727_31767,(0),null);
var map__31730_31769 = cljs.core.nth.call(null,vec__31727_31767,(1),null);
var map__31730_31770__$1 = ((((!((map__31730_31769 == null)))?((((map__31730_31769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31730_31769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31730_31769):map__31730_31769);
var doc_31771 = cljs.core.get.call(null,map__31730_31770__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31772 = cljs.core.get.call(null,map__31730_31770__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31768);

cljs.core.println.call(null," ",arglists_31772);

if(cljs.core.truth_(doc_31771)){
cljs.core.println.call(null," ",doc_31771);
} else {
}

var G__31773 = seq__31723_31763;
var G__31774 = chunk__31724_31764;
var G__31775 = count__31725_31765;
var G__31776 = (i__31726_31766 + (1));
seq__31723_31763 = G__31773;
chunk__31724_31764 = G__31774;
count__31725_31765 = G__31775;
i__31726_31766 = G__31776;
continue;
} else {
var temp__4657__auto___31777 = cljs.core.seq.call(null,seq__31723_31763);
if(temp__4657__auto___31777){
var seq__31723_31778__$1 = temp__4657__auto___31777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31723_31778__$1)){
var c__25905__auto___31779 = cljs.core.chunk_first.call(null,seq__31723_31778__$1);
var G__31780 = cljs.core.chunk_rest.call(null,seq__31723_31778__$1);
var G__31781 = c__25905__auto___31779;
var G__31782 = cljs.core.count.call(null,c__25905__auto___31779);
var G__31783 = (0);
seq__31723_31763 = G__31780;
chunk__31724_31764 = G__31781;
count__31725_31765 = G__31782;
i__31726_31766 = G__31783;
continue;
} else {
var vec__31732_31784 = cljs.core.first.call(null,seq__31723_31778__$1);
var name_31785 = cljs.core.nth.call(null,vec__31732_31784,(0),null);
var map__31735_31786 = cljs.core.nth.call(null,vec__31732_31784,(1),null);
var map__31735_31787__$1 = ((((!((map__31735_31786 == null)))?((((map__31735_31786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31735_31786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31735_31786):map__31735_31786);
var doc_31788 = cljs.core.get.call(null,map__31735_31787__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31789 = cljs.core.get.call(null,map__31735_31787__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31785);

cljs.core.println.call(null," ",arglists_31789);

if(cljs.core.truth_(doc_31788)){
cljs.core.println.call(null," ",doc_31788);
} else {
}

var G__31790 = cljs.core.next.call(null,seq__31723_31778__$1);
var G__31791 = null;
var G__31792 = (0);
var G__31793 = (0);
seq__31723_31763 = G__31790;
chunk__31724_31764 = G__31791;
count__31725_31765 = G__31792;
i__31726_31766 = G__31793;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__31737 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31738 = null;
var count__31739 = (0);
var i__31740 = (0);
while(true){
if((i__31740 < count__31739)){
var role = cljs.core._nth.call(null,chunk__31738,i__31740);
var temp__4657__auto___31794__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31794__$1)){
var spec_31795 = temp__4657__auto___31794__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_31795));
} else {
}

var G__31796 = seq__31737;
var G__31797 = chunk__31738;
var G__31798 = count__31739;
var G__31799 = (i__31740 + (1));
seq__31737 = G__31796;
chunk__31738 = G__31797;
count__31739 = G__31798;
i__31740 = G__31799;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__31737);
if(temp__4657__auto____$1){
var seq__31737__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31737__$1)){
var c__25905__auto__ = cljs.core.chunk_first.call(null,seq__31737__$1);
var G__31800 = cljs.core.chunk_rest.call(null,seq__31737__$1);
var G__31801 = c__25905__auto__;
var G__31802 = cljs.core.count.call(null,c__25905__auto__);
var G__31803 = (0);
seq__31737 = G__31800;
chunk__31738 = G__31801;
count__31739 = G__31802;
i__31740 = G__31803;
continue;
} else {
var role = cljs.core.first.call(null,seq__31737__$1);
var temp__4657__auto___31804__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31804__$2)){
var spec_31805 = temp__4657__auto___31804__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_31805));
} else {
}

var G__31806 = cljs.core.next.call(null,seq__31737__$1);
var G__31807 = null;
var G__31808 = (0);
var G__31809 = (0);
seq__31737 = G__31806;
chunk__31738 = G__31807;
count__31739 = G__31808;
i__31740 = G__31809;
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

//# sourceMappingURL=repl.js.map?rel=1485761769342