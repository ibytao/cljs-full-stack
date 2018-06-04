// Compiled by ClojureScript 1.10.238 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
/**
 * Traverses up the DOM tree and returns the first node that contains a href attr
 */
pushy.core.recur_href = (function pushy$core$recur_href(target){
if(cljs.core.truth_(target.href)){
return target;
} else {
if(cljs.core.truth_(target.parentNode)){
return pushy.core.recur_href.call(null,target.parentNode);
} else {
return null;
}
}
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__26711 = h;
G__26711.setUseFragment(false);

G__26711.setPathPrefix("");

G__26711.setEnabled(true);

return G__26711;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var G__26713 = arguments.length;
switch (G__26713) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;


/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__26716 = arguments.length;
switch (G__26716) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if(((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,token);
} else {
var m__4212__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if(((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,token,title);
} else {
var m__4212__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__26718 = arguments.length;
switch (G__26718) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if(((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,token);
} else {
var m__4212__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if(((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$,token,title);
} else {
var m__4212__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;


pushy.core.get_token = (function pushy$core$get_token(this$){
if(((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null))))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (pushy.core.get_token[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if(((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null))))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if(((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null))))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var G__26722 = arguments.length;
switch (G__26722) {
case 2:
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.pushy.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core26723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core26723 = (function (dispatch_fn,match_fn,identity_fn,history,event_keys,meta26724){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta26724 = meta26724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pushy.core.t_pushy$core26723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys){
return (function (_26725,meta26724__$1){
var self__ = this;
var _26725__$1 = this;
return (new pushy.core.t_pushy$core26723(self__.dispatch_fn,self__.match_fn,self__.identity_fn,self__.history,self__.event_keys,meta26724__$1));
});})(history,event_keys))
;

pushy.core.t_pushy$core26723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys){
return (function (_26725){
var self__ = this;
var _26725__$1 = this;
return self__.meta26724;
});})(history,event_keys))
;

pushy.core.t_pushy$core26723.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL;

pushy.core.t_pushy$core26723.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys))
;

pushy.core.t_pushy$core26723.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys))
;

pushy.core.t_pushy$core26723.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys))
;

pushy.core.t_pushy$core26723.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys))
;

pushy.core.t_pushy$core26723.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys))
;

pushy.core.t_pushy$core26723.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys){
return (function (e){
var temp__5455__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys))
));

var temp__5457__auto___26731 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__5457__auto___26731)){
var match_26732 = temp__5457__auto___26731;
self__.dispatch_fn.call(null,match_26732);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys){
return (function (e){
var temp__5457__auto__ = pushy.core.recur_href.call(null,e.target);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
var href = el.href;
var path = goog.Uri.parse(href).getPath();
if(cljs.core.truth_((function (){var and__3911__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,path));
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (!(cljs.core._EQ_.call(null,"_blank",el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button)));
} else {
return and__3911__auto__;
}
})())){
var temp__5455__auto___26733 = el.title;
if(cljs.core.truth_(temp__5455__auto___26733)){
var title_26734 = temp__5455__auto___26733;
pushy.core.set_token_BANG_.call(null,this$__$1,path,title_26734);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,path);
}

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys))
));

return null;
});})(history,event_keys))
;

pushy.core.t_pushy$core26723.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__26726_26735 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__26727_26736 = null;
var count__26728_26737 = (0);
var i__26729_26738 = (0);
while(true){
if((i__26729_26738 < count__26728_26737)){
var key_26739 = cljs.core._nth.call(null,chunk__26727_26736,i__26729_26738);
goog.events.unlistenByKey(key_26739);


var G__26740 = seq__26726_26735;
var G__26741 = chunk__26727_26736;
var G__26742 = count__26728_26737;
var G__26743 = (i__26729_26738 + (1));
seq__26726_26735 = G__26740;
chunk__26727_26736 = G__26741;
count__26728_26737 = G__26742;
i__26729_26738 = G__26743;
continue;
} else {
var temp__5457__auto___26744 = cljs.core.seq.call(null,seq__26726_26735);
if(temp__5457__auto___26744){
var seq__26726_26745__$1 = temp__5457__auto___26744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26726_26745__$1)){
var c__4319__auto___26746 = cljs.core.chunk_first.call(null,seq__26726_26745__$1);
var G__26747 = cljs.core.chunk_rest.call(null,seq__26726_26745__$1);
var G__26748 = c__4319__auto___26746;
var G__26749 = cljs.core.count.call(null,c__4319__auto___26746);
var G__26750 = (0);
seq__26726_26735 = G__26747;
chunk__26727_26736 = G__26748;
count__26728_26737 = G__26749;
i__26729_26738 = G__26750;
continue;
} else {
var key_26751 = cljs.core.first.call(null,seq__26726_26745__$1);
goog.events.unlistenByKey(key_26751);


var G__26752 = cljs.core.next.call(null,seq__26726_26745__$1);
var G__26753 = null;
var G__26754 = (0);
var G__26755 = (0);
seq__26726_26735 = G__26752;
chunk__26727_26736 = G__26753;
count__26728_26737 = G__26754;
i__26729_26738 = G__26755;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys))
;

pushy.core.t_pushy$core26723.getBasis = ((function (history,event_keys){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta26724","meta26724",312268020,null)], null);
});})(history,event_keys))
;

pushy.core.t_pushy$core26723.cljs$lang$type = true;

pushy.core.t_pushy$core26723.cljs$lang$ctorStr = "pushy.core/t_pushy$core26723";

pushy.core.t_pushy$core26723.cljs$lang$ctorPrWriter = ((function (history,event_keys){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"pushy.core/t_pushy$core26723");
});})(history,event_keys))
;

/**
 * Positional factory function for pushy.core/t_pushy$core26723.
 */
pushy.core.__GT_t_pushy$core26723 = ((function (history,event_keys){
return (function pushy$core$__GT_t_pushy$core26723(dispatch_fn__$1,match_fn__$1,identity_fn__$1,history__$1,event_keys__$1,meta26724){
return (new pushy.core.t_pushy$core26723(dispatch_fn__$1,match_fn__$1,identity_fn__$1,history__$1,event_keys__$1,meta26724));
});})(history,event_keys))
;

}

return (new pushy.core.t_pushy$core26723(dispatch_fn,match_fn,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = 3;

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__26757 = arguments.length;
switch (G__26757) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__26760 = arguments.length;
switch (G__26760) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map?rel=1527566158123
