// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_simple.ajax_request');
goog.require('cljs.core');
goog.require('ajax.core');
ajax.core.GET.call(null,"/get-params",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"name","name",1843675177),"bytao"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
}),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__22690){
var map__22691 = p__22690;
var map__22691__$1 = ((((!((map__22691 == null)))?(((((map__22691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22691):map__22691);
var status = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
})], null));
ajax.core.POST.call(null,"/send-message",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"name","name",1843675177),"bytao"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__22693_SHARP_){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22693_SHARP_)].join(''));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.url_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__22694){
var map__22695 = p__22694;
var map__22695__$1 = ((((!((map__22695 == null)))?(((((map__22695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22695):map__22695);
var status = cljs.core.get.call(null,map__22695__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22695__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
})], null));
ajax.core.ajax_request.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/post-json",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello World post json",new cljs.core.Keyword(null,"user","user",1532431356),"Bob"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__22697_SHARP_){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22697_SHARP_)].join(''));
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
ajax.core.ajax_request.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/send-message",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello World",new cljs.core.Keyword(null,"user","user",1532431356),"Bob"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p__22698){
var vec__22699 = p__22698;
var ok = cljs.core.nth.call(null,vec__22699,(0),null);
var response = cljs.core.nth.call(null,vec__22699,(1),null);
if(cljs.core.truth_(ok)){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.url_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

//# sourceMappingURL=ajax_request.js.map?rel=1527566155102
