// Compiled by ClojureScript 1.9.293 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27785,handler){
var map__27786 = p__27785;
var map__27786__$1 = ((((!((map__27786 == null)))?((((map__27786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27786):map__27786);
var uri = cljs.core.get.call(null,map__27786__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__27786__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__27786__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__27786__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__27786__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__27786__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__27786__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27786,map__27786__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27784_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__27784_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__27786,map__27786__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___27798 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___27798)){
var response_type_27799 = temp__4657__auto___27798;
this$__$1.responseType = cljs.core.name.call(null,response_type_27799);
} else {
}

var seq__27788_27800 = cljs.core.seq.call(null,headers);
var chunk__27789_27801 = null;
var count__27790_27802 = (0);
var i__27791_27803 = (0);
while(true){
if((i__27791_27803 < count__27790_27802)){
var vec__27792_27804 = cljs.core._nth.call(null,chunk__27789_27801,i__27791_27803);
var k_27805 = cljs.core.nth.call(null,vec__27792_27804,(0),null);
var v_27806 = cljs.core.nth.call(null,vec__27792_27804,(1),null);
this$__$1.setRequestHeader(k_27805,v_27806);

var G__27807 = seq__27788_27800;
var G__27808 = chunk__27789_27801;
var G__27809 = count__27790_27802;
var G__27810 = (i__27791_27803 + (1));
seq__27788_27800 = G__27807;
chunk__27789_27801 = G__27808;
count__27790_27802 = G__27809;
i__27791_27803 = G__27810;
continue;
} else {
var temp__4657__auto___27811 = cljs.core.seq.call(null,seq__27788_27800);
if(temp__4657__auto___27811){
var seq__27788_27812__$1 = temp__4657__auto___27811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27788_27812__$1)){
var c__25905__auto___27813 = cljs.core.chunk_first.call(null,seq__27788_27812__$1);
var G__27814 = cljs.core.chunk_rest.call(null,seq__27788_27812__$1);
var G__27815 = c__25905__auto___27813;
var G__27816 = cljs.core.count.call(null,c__25905__auto___27813);
var G__27817 = (0);
seq__27788_27800 = G__27814;
chunk__27789_27801 = G__27815;
count__27790_27802 = G__27816;
i__27791_27803 = G__27817;
continue;
} else {
var vec__27795_27818 = cljs.core.first.call(null,seq__27788_27812__$1);
var k_27819 = cljs.core.nth.call(null,vec__27795_27818,(0),null);
var v_27820 = cljs.core.nth.call(null,vec__27795_27818,(1),null);
this$__$1.setRequestHeader(k_27819,v_27820);

var G__27821 = cljs.core.next.call(null,seq__27788_27812__$1);
var G__27822 = null;
var G__27823 = (0);
var G__27824 = (0);
seq__27788_27800 = G__27821;
chunk__27789_27801 = G__27822;
count__27790_27802 = G__27823;
i__27791_27803 = G__27824;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25091__auto__ = body;
if(cljs.core.truth_(or__25091__auto__)){
return or__25091__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1485927260129