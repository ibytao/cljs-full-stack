// Compiled by ClojureScript 1.10.238 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__22101,handler){
var map__22102 = p__22101;
var map__22102__$1 = ((((!((map__22102 == null)))?(((((map__22102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22102):map__22102);
var uri = cljs.core.get.call(null,map__22102__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__22102__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__22102__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__22102__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__22102__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__22102__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__22102__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__22102,map__22102__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__22100_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__22100_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__22102,map__22102__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___22114 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___22114)){
var response_type_22115 = temp__5457__auto___22114;
this$__$1.responseType = cljs.core.name.call(null,response_type_22115);
} else {
}

var seq__22104_22116 = cljs.core.seq.call(null,headers);
var chunk__22105_22117 = null;
var count__22106_22118 = (0);
var i__22107_22119 = (0);
while(true){
if((i__22107_22119 < count__22106_22118)){
var vec__22108_22120 = cljs.core._nth.call(null,chunk__22105_22117,i__22107_22119);
var k_22121 = cljs.core.nth.call(null,vec__22108_22120,(0),null);
var v_22122 = cljs.core.nth.call(null,vec__22108_22120,(1),null);
this$__$1.setRequestHeader(k_22121,v_22122);


var G__22123 = seq__22104_22116;
var G__22124 = chunk__22105_22117;
var G__22125 = count__22106_22118;
var G__22126 = (i__22107_22119 + (1));
seq__22104_22116 = G__22123;
chunk__22105_22117 = G__22124;
count__22106_22118 = G__22125;
i__22107_22119 = G__22126;
continue;
} else {
var temp__5457__auto___22127 = cljs.core.seq.call(null,seq__22104_22116);
if(temp__5457__auto___22127){
var seq__22104_22128__$1 = temp__5457__auto___22127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22104_22128__$1)){
var c__4319__auto___22129 = cljs.core.chunk_first.call(null,seq__22104_22128__$1);
var G__22130 = cljs.core.chunk_rest.call(null,seq__22104_22128__$1);
var G__22131 = c__4319__auto___22129;
var G__22132 = cljs.core.count.call(null,c__4319__auto___22129);
var G__22133 = (0);
seq__22104_22116 = G__22130;
chunk__22105_22117 = G__22131;
count__22106_22118 = G__22132;
i__22107_22119 = G__22133;
continue;
} else {
var vec__22111_22134 = cljs.core.first.call(null,seq__22104_22128__$1);
var k_22135 = cljs.core.nth.call(null,vec__22111_22134,(0),null);
var v_22136 = cljs.core.nth.call(null,vec__22111_22134,(1),null);
this$__$1.setRequestHeader(k_22135,v_22136);


var G__22137 = cljs.core.next.call(null,seq__22104_22128__$1);
var G__22138 = null;
var G__22139 = (0);
var G__22140 = (0);
seq__22104_22116 = G__22137;
chunk__22105_22117 = G__22138;
count__22106_22118 = G__22139;
i__22107_22119 = G__22140;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3922__auto__ = body;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1527566154134
