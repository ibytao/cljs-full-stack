// Compiled by ClojureScript 1.9.293 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__27831_27835 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__27832_27836 = null;
var count__27833_27837 = (0);
var i__27834_27838 = (0);
while(true){
if((i__27834_27838 < count__27833_27837)){
var k_27839 = cljs.core._nth.call(null,chunk__27832_27836,i__27834_27838);
var v_27840 = (b[k_27839]);
(a[k_27839] = v_27840);

var G__27841 = seq__27831_27835;
var G__27842 = chunk__27832_27836;
var G__27843 = count__27833_27837;
var G__27844 = (i__27834_27838 + (1));
seq__27831_27835 = G__27841;
chunk__27832_27836 = G__27842;
count__27833_27837 = G__27843;
i__27834_27838 = G__27844;
continue;
} else {
var temp__4657__auto___27845 = cljs.core.seq.call(null,seq__27831_27835);
if(temp__4657__auto___27845){
var seq__27831_27846__$1 = temp__4657__auto___27845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27831_27846__$1)){
var c__25905__auto___27847 = cljs.core.chunk_first.call(null,seq__27831_27846__$1);
var G__27848 = cljs.core.chunk_rest.call(null,seq__27831_27846__$1);
var G__27849 = c__25905__auto___27847;
var G__27850 = cljs.core.count.call(null,c__25905__auto___27847);
var G__27851 = (0);
seq__27831_27835 = G__27848;
chunk__27832_27836 = G__27849;
count__27833_27837 = G__27850;
i__27834_27838 = G__27851;
continue;
} else {
var k_27852 = cljs.core.first.call(null,seq__27831_27846__$1);
var v_27853 = (b[k_27852]);
(a[k_27852] = v_27853);

var G__27854 = cljs.core.next.call(null,seq__27831_27846__$1);
var G__27855 = null;
var G__27856 = (0);
var G__27857 = (0);
seq__27831_27835 = G__27854;
chunk__27832_27836 = G__27855;
count__27833_27837 = G__27856;
i__27834_27838 = G__27857;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__25697__auto__,writer__25698__auto__,opt__25699__auto__){
return cljs.core._write.call(null,writer__25698__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__25697__auto__,writer__25698__auto__,opt__25699__auto__){
return cljs.core._write.call(null,writer__25698__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args27858 = [];
var len__26199__auto___27861 = arguments.length;
var i__26200__auto___27862 = (0);
while(true){
if((i__26200__auto___27862 < len__26199__auto___27861)){
args27858.push((arguments[i__26200__auto___27862]));

var G__27863 = (i__26200__auto___27862 + (1));
i__26200__auto___27862 = G__27863;
continue;
} else {
}
break;
}

var G__27860 = args27858.length;
switch (G__27860) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27858.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__27865 = (i + (2));
var G__27866 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__27865;
ret = G__27866;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__25697__auto__,writer__25698__auto__,opt__25699__auto__){
return cljs.core._write.call(null,writer__25698__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__25697__auto__,writer__25698__auto__,opt__25699__auto__){
return cljs.core._write.call(null,writer__25698__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27867_27871 = cljs.core.seq.call(null,v);
var chunk__27868_27872 = null;
var count__27869_27873 = (0);
var i__27870_27874 = (0);
while(true){
if((i__27870_27874 < count__27869_27873)){
var x_27875 = cljs.core._nth.call(null,chunk__27868_27872,i__27870_27874);
ret.push(x_27875);

var G__27876 = seq__27867_27871;
var G__27877 = chunk__27868_27872;
var G__27878 = count__27869_27873;
var G__27879 = (i__27870_27874 + (1));
seq__27867_27871 = G__27876;
chunk__27868_27872 = G__27877;
count__27869_27873 = G__27878;
i__27870_27874 = G__27879;
continue;
} else {
var temp__4657__auto___27880 = cljs.core.seq.call(null,seq__27867_27871);
if(temp__4657__auto___27880){
var seq__27867_27881__$1 = temp__4657__auto___27880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27867_27881__$1)){
var c__25905__auto___27882 = cljs.core.chunk_first.call(null,seq__27867_27881__$1);
var G__27883 = cljs.core.chunk_rest.call(null,seq__27867_27881__$1);
var G__27884 = c__25905__auto___27882;
var G__27885 = cljs.core.count.call(null,c__25905__auto___27882);
var G__27886 = (0);
seq__27867_27871 = G__27883;
chunk__27868_27872 = G__27884;
count__27869_27873 = G__27885;
i__27870_27874 = G__27886;
continue;
} else {
var x_27887 = cljs.core.first.call(null,seq__27867_27881__$1);
ret.push(x_27887);

var G__27888 = cljs.core.next.call(null,seq__27867_27881__$1);
var G__27889 = null;
var G__27890 = (0);
var G__27891 = (0);
seq__27867_27871 = G__27888;
chunk__27868_27872 = G__27889;
count__27869_27873 = G__27890;
i__27870_27874 = G__27891;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__25697__auto__,writer__25698__auto__,opt__25699__auto__){
return cljs.core._write.call(null,writer__25698__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__25697__auto__,writer__25698__auto__,opt__25699__auto__){
return cljs.core._write.call(null,writer__25698__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27892_27896 = cljs.core.seq.call(null,v);
var chunk__27893_27897 = null;
var count__27894_27898 = (0);
var i__27895_27899 = (0);
while(true){
if((i__27895_27899 < count__27894_27898)){
var x_27900 = cljs.core._nth.call(null,chunk__27893_27897,i__27895_27899);
ret.push(x_27900);

var G__27901 = seq__27892_27896;
var G__27902 = chunk__27893_27897;
var G__27903 = count__27894_27898;
var G__27904 = (i__27895_27899 + (1));
seq__27892_27896 = G__27901;
chunk__27893_27897 = G__27902;
count__27894_27898 = G__27903;
i__27895_27899 = G__27904;
continue;
} else {
var temp__4657__auto___27905 = cljs.core.seq.call(null,seq__27892_27896);
if(temp__4657__auto___27905){
var seq__27892_27906__$1 = temp__4657__auto___27905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27892_27906__$1)){
var c__25905__auto___27907 = cljs.core.chunk_first.call(null,seq__27892_27906__$1);
var G__27908 = cljs.core.chunk_rest.call(null,seq__27892_27906__$1);
var G__27909 = c__25905__auto___27907;
var G__27910 = cljs.core.count.call(null,c__25905__auto___27907);
var G__27911 = (0);
seq__27892_27896 = G__27908;
chunk__27893_27897 = G__27909;
count__27894_27898 = G__27910;
i__27895_27899 = G__27911;
continue;
} else {
var x_27912 = cljs.core.first.call(null,seq__27892_27906__$1);
ret.push(x_27912);

var G__27913 = cljs.core.next.call(null,seq__27892_27906__$1);
var G__27914 = null;
var G__27915 = (0);
var G__27916 = (0);
seq__27892_27896 = G__27913;
chunk__27893_27897 = G__27914;
count__27894_27898 = G__27915;
i__27895_27899 = G__27916;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__25697__auto__,writer__25698__auto__,opt__25699__auto__){
return cljs.core._write.call(null,writer__25698__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__27917_27921 = cljs.core.seq.call(null,v);
var chunk__27918_27922 = null;
var count__27919_27923 = (0);
var i__27920_27924 = (0);
while(true){
if((i__27920_27924 < count__27919_27923)){
var x_27925 = cljs.core._nth.call(null,chunk__27918_27922,i__27920_27924);
ret.push(x_27925);

var G__27926 = seq__27917_27921;
var G__27927 = chunk__27918_27922;
var G__27928 = count__27919_27923;
var G__27929 = (i__27920_27924 + (1));
seq__27917_27921 = G__27926;
chunk__27918_27922 = G__27927;
count__27919_27923 = G__27928;
i__27920_27924 = G__27929;
continue;
} else {
var temp__4657__auto___27930 = cljs.core.seq.call(null,seq__27917_27921);
if(temp__4657__auto___27930){
var seq__27917_27931__$1 = temp__4657__auto___27930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27917_27931__$1)){
var c__25905__auto___27932 = cljs.core.chunk_first.call(null,seq__27917_27931__$1);
var G__27933 = cljs.core.chunk_rest.call(null,seq__27917_27931__$1);
var G__27934 = c__25905__auto___27932;
var G__27935 = cljs.core.count.call(null,c__25905__auto___27932);
var G__27936 = (0);
seq__27917_27921 = G__27933;
chunk__27918_27922 = G__27934;
count__27919_27923 = G__27935;
i__27920_27924 = G__27936;
continue;
} else {
var x_27937 = cljs.core.first.call(null,seq__27917_27931__$1);
ret.push(x_27937);

var G__27938 = cljs.core.next.call(null,seq__27917_27931__$1);
var G__27939 = null;
var G__27940 = (0);
var G__27941 = (0);
seq__27917_27921 = G__27938;
chunk__27918_27922 = G__27939;
count__27919_27923 = G__27940;
i__27920_27924 = G__27941;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__25697__auto__,writer__25698__auto__,opt__25699__auto__){
return cljs.core._write.call(null,writer__25698__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__25697__auto__,writer__25698__auto__,opt__25699__auto__){
return cljs.core._write.call(null,writer__25698__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args27942 = [];
var len__26199__auto___27957 = arguments.length;
var i__26200__auto___27958 = (0);
while(true){
if((i__26200__auto___27958 < len__26199__auto___27957)){
args27942.push((arguments[i__26200__auto___27958]));

var G__27959 = (i__26200__auto___27958 + (1));
i__26200__auto___27958 = G__27959;
continue;
} else {
}
break;
}

var G__27944 = args27942.length;
switch (G__27944) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27942.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__27945 = obj;
G__27945.push(kfn.call(null,k),vfn.call(null,v));

return G__27945;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x27946 = cljs.core.clone.call(null,handlers);
x27946.forEach = ((function (x27946,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__27947 = cljs.core.seq.call(null,coll);
var chunk__27948 = null;
var count__27949 = (0);
var i__27950 = (0);
while(true){
if((i__27950 < count__27949)){
var vec__27951 = cljs.core._nth.call(null,chunk__27948,i__27950);
var k = cljs.core.nth.call(null,vec__27951,(0),null);
var v = cljs.core.nth.call(null,vec__27951,(1),null);
f.call(null,v,k);

var G__27961 = seq__27947;
var G__27962 = chunk__27948;
var G__27963 = count__27949;
var G__27964 = (i__27950 + (1));
seq__27947 = G__27961;
chunk__27948 = G__27962;
count__27949 = G__27963;
i__27950 = G__27964;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27947);
if(temp__4657__auto__){
var seq__27947__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27947__$1)){
var c__25905__auto__ = cljs.core.chunk_first.call(null,seq__27947__$1);
var G__27965 = cljs.core.chunk_rest.call(null,seq__27947__$1);
var G__27966 = c__25905__auto__;
var G__27967 = cljs.core.count.call(null,c__25905__auto__);
var G__27968 = (0);
seq__27947 = G__27965;
chunk__27948 = G__27966;
count__27949 = G__27967;
i__27950 = G__27968;
continue;
} else {
var vec__27954 = cljs.core.first.call(null,seq__27947__$1);
var k = cljs.core.nth.call(null,vec__27954,(0),null);
var v = cljs.core.nth.call(null,vec__27954,(1),null);
f.call(null,v,k);

var G__27969 = cljs.core.next.call(null,seq__27947__$1);
var G__27970 = null;
var G__27971 = (0);
var G__27972 = (0);
seq__27947 = G__27969;
chunk__27948 = G__27970;
count__27949 = G__27971;
i__27950 = G__27972;
continue;
}
} else {
return null;
}
}
break;
}
});})(x27946,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x27946;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args27973 = [];
var len__26199__auto___27979 = arguments.length;
var i__26200__auto___27980 = (0);
while(true){
if((i__26200__auto___27980 < len__26199__auto___27979)){
args27973.push((arguments[i__26200__auto___27980]));

var G__27981 = (i__26200__auto___27980 + (1));
i__26200__auto___27980 = G__27981;
continue;
} else {
}
break;
}

var G__27975 = args27973.length;
switch (G__27975) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27973.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit27976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit27976 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta27977){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta27977 = meta27977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit27976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27978,meta27977__$1){
var self__ = this;
var _27978__$1 = this;
return (new cognitect.transit.t_cognitect$transit27976(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta27977__$1));
});

cognitect.transit.t_cognitect$transit27976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27978){
var self__ = this;
var _27978__$1 = this;
return self__.meta27977;
});

cognitect.transit.t_cognitect$transit27976.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27976.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit27976.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27976.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit27976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta27977","meta27977",-349539134,null)], null);
});

cognitect.transit.t_cognitect$transit27976.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit27976.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit27976";

cognitect.transit.t_cognitect$transit27976.cljs$lang$ctorPrWriter = (function (this__25697__auto__,writer__25698__auto__,opt__25699__auto__){
return cljs.core._write.call(null,writer__25698__auto__,"cognitect.transit/t_cognitect$transit27976");
});

cognitect.transit.__GT_t_cognitect$transit27976 = (function cognitect$transit$__GT_t_cognitect$transit27976(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27977){
return (new cognitect.transit.t_cognitect$transit27976(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta27977));
});

}

return (new cognitect.transit.t_cognitect$transit27976(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__25091__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__25091__auto__)){
return or__25091__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1485927260527