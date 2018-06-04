// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_simple.core');
goog.require('cljs.core');
goog.require('antizer.reagent');
goog.require('module$Users$Buck$Projects$cljs_simple$resources$public$vendor$js$calculator');
goog.require('cljs_simple.ajax_request');
goog.require('cljs_simple.antd');
goog.require('cljs_simple.async_test');
goog.require('cljs_simple.basic_component');
goog.require('cljs_simple.component_state');
goog.require('cljs_simple.cursors');
goog.require('pushy.core');
goog.require('reagent.core');
goog.require('secretary.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,module$Users$Buck$Projects$cljs_simple$resources$public$vendor$js$calculator.add((14),(250)));
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"/");
cljs_simple.core.home_page = (function cljs_simple$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to routing"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [antizer.reagent.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return antizer.reagent.message_info.call(null,"Hello Rum!");
})], null),"Click me"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/basic"], null),"go to basic component page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/state"], null),"go to state component page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/cursors"], null),"go to cursors page"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/antd"], null),"go to antd page"], null)], null)], null)], null);
});
cljs_simple.core.layout_page = (function cljs_simple$core$layout_page(body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"go to home"], null),body], null);
});
cljs_simple.core.current_page = reagent.core.atom.call(null,cljs_simple.core.home_page);
cljs_simple.core.app_view = (function cljs_simple$core$app_view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,cljs_simple.core.current_page)], null);
});
var action__21736__auto___26771 = (function (params__21737__auto__){
if(cljs.core.map_QMARK_.call(null,params__21737__auto__)){
var map__26766 = params__21737__auto__;
var map__26766__$1 = ((((!((map__26766 == null)))?(((((map__26766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26766):map__26766);
return cljs.core.reset_BANG_.call(null,cljs_simple.core.current_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.core.home_page], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21737__auto__)){
var vec__26768 = params__21737__auto__;
return cljs.core.reset_BANG_.call(null,cljs_simple.core.current_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.core.home_page], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__21736__auto___26771);

var action__21736__auto___26777 = (function (params__21737__auto__){
if(cljs.core.map_QMARK_.call(null,params__21737__auto__)){
var map__26772 = params__21737__auto__;
var map__26772__$1 = ((((!((map__26772 == null)))?(((((map__26772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26772):map__26772);
return cljs.core.reset_BANG_.call(null,cljs_simple.core.current_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.core.layout_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.basic_component.foo], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21737__auto__)){
var vec__26774 = params__21737__auto__;
return cljs.core.reset_BANG_.call(null,cljs_simple.core.current_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.core.layout_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.basic_component.foo], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/basic",action__21736__auto___26777);

var action__21736__auto___26783 = (function (params__21737__auto__){
if(cljs.core.map_QMARK_.call(null,params__21737__auto__)){
var map__26778 = params__21737__auto__;
var map__26778__$1 = ((((!((map__26778 == null)))?(((((map__26778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26778):map__26778);
return cljs.core.reset_BANG_.call(null,cljs_simple.core.current_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.core.layout_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.component_state.home], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21737__auto__)){
var vec__26780 = params__21737__auto__;
return cljs.core.reset_BANG_.call(null,cljs_simple.core.current_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.core.layout_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.component_state.home], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/state",action__21736__auto___26783);

var action__21736__auto___26789 = (function (params__21737__auto__){
if(cljs.core.map_QMARK_.call(null,params__21737__auto__)){
var map__26784 = params__21737__auto__;
var map__26784__$1 = ((((!((map__26784 == null)))?(((((map__26784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26784):map__26784);
return cljs.core.reset_BANG_.call(null,cljs_simple.core.current_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.core.layout_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.cursors.home], null)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21737__auto__)){
var vec__26786 = params__21737__auto__;
return cljs.core.reset_BANG_.call(null,cljs_simple.core.current_page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.core.layout_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.cursors.home], null)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/cursors",action__21736__auto___26789);

var action__21736__auto___26795 = (function (params__21737__auto__){
if(cljs.core.map_QMARK_.call(null,params__21737__auto__)){
var map__26790 = params__21737__auto__;
var map__26790__$1 = ((((!((map__26790 == null)))?(((((map__26790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26790):map__26790);
return cljs.core.reset_BANG_.call(null,cljs_simple.core.current_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.antd.render_layout], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21737__auto__)){
var vec__26792 = params__21737__auto__;
return cljs.core.reset_BANG_.call(null,cljs_simple.core.current_page,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.antd.render_layout], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/antd",action__21736__auto___26795);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.core.app_view], null),document.getElementById("cljs-target"));
cljs_simple.core.history = pushy.core.pushy.call(null,secretary.core.dispatch_BANG_,(function (x){
if(cljs.core.truth_(secretary.core.locate_route.call(null,x))){
return x;
} else {
return null;
}
}));
pushy.core.start_BANG_.call(null,cljs_simple.core.history);

//# sourceMappingURL=core.js.map?rel=1527566158197
