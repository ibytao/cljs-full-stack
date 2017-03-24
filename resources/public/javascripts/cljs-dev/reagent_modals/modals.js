// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent_modals.modals');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
reagent_modals.modals.modal_id = "reagent-modal";
reagent_modals.modals.modal_content = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.Keyword(null,"shown","shown",-1564457683),null,new cljs.core.Keyword(null,"size","size",1098693007),null], null));
reagent_modals.modals.get_modal = (function reagent_modals$modals$get_modal(){
return goog.dom.getElement(reagent_modals.modals.modal_id);
});
reagent_modals.modals.with_opts = (function reagent_modals$modals$with_opts(opts){
var m = jQuery(reagent_modals.modals.get_modal.call(null));
(m["modal"]).call(m,opts);

(m["modal"]).call(m,"show");

return m;
});
if(typeof reagent_modals.modals.show_modal_BANG_ !== 'undefined'){
} else {
reagent_modals.modals.show_modal_BANG_ = (function (){var method_table__26019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26020__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26021__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26022__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26023__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-modals.modals","show-modal!"),((function (method_table__26019__auto__,prefer_table__26020__auto__,method_cache__26021__auto__,cached_hierarchy__26022__auto__,hierarchy__26023__auto__){
return (function (args){
return cljs.core.map_QMARK_.call(null,args);
});})(method_table__26019__auto__,prefer_table__26020__auto__,method_cache__26021__auto__,cached_hierarchy__26022__auto__,hierarchy__26023__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26023__auto__,method_table__26019__auto__,prefer_table__26020__auto__,method_cache__26021__auto__,cached_hierarchy__26022__auto__));
})();
}
cljs.core._add_method.call(null,reagent_modals.modals.show_modal_BANG_,true,(function (p__26942){
var map__26943 = p__26942;
var map__26943__$1 = ((((!((map__26943 == null)))?((((map__26943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26943):map__26943);
var keyboard = cljs.core.get.call(null,map__26943__$1,new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),true);
var backdrop = cljs.core.get.call(null,map__26943__$1,new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),true);
return reagent_modals.modals.with_opts.call(null,({"keyboard": keyboard, "backdrop": backdrop}));
}));
cljs.core._add_method.call(null,reagent_modals.modals.show_modal_BANG_,false,(function (keyboard){
return reagent_modals.modals.with_opts.call(null,({"keyboard": keyboard}));
}));
reagent_modals.modals.close_modal_BANG_ = (function reagent_modals$modals$close_modal_BANG_(){
var m = jQuery(reagent_modals.modals.get_modal.call(null));
return (m["modal"]).call(m,"hide");
});
/**
 * A pre-configured close button. Just include it anywhere in the
 * modal to let the user dismiss it.
 */
reagent_modals.modals.close_button = (function reagent_modals$modals$close_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),"Close"], null)], null);
});
reagent_modals.modals.modal_window_STAR_ = (function reagent_modals$modals$modal_window_STAR_(){
var map__26947 = cljs.core.deref.call(null,reagent_modals.modals.modal_content);
var map__26947__$1 = ((((!((map__26947 == null)))?((((map__26947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26947):map__26947);
var content = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"content","content",15833224));
var size = cljs.core.get.call(null,map__26947__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_class = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lg","lg",-80787836),"modal-lg",new cljs.core.Keyword(null,"sm","sm",-1402575065),"modal-sm"], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),reagent_modals.modals.modal_id,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"role","role",-736691072),"dialog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get.call(null,size_class,size)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),content], null)], null)], null);
});
reagent_modals.modals.modal_window = cljs.core.with_meta.call(null,reagent_modals.modals.modal_window_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (e){
var m = jQuery(reagent_modals.modals.get_modal.call(null));
(m["on"]).call(m,"hidden.bs.modal",((function (m){
return (function (){
var temp__4657__auto___26949 = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__4657__auto___26949)){
var f_26950 = temp__4657__auto___26949;
f_26950.call(null);
} else {
}

return cljs.core.reset_BANG_.call(null,reagent_modals.modals.modal_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null));
});})(m))
);

(m["on"]).call(m,"shown.bs.modal",((function (m){
return (function (){
var temp__4657__auto__ = new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null);
} else {
return null;
}
});})(m))
);

return (m["on"]).call(m,"hide.bs.modal",((function (m){
return (function (){
var temp__4657__auto__ = new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return f.call(null);
} else {
return null;
}
});})(m))
);
})], null));
/**
 * Update and show the modal window. `reagent-content' is a normal
 * reagent component. `configs' is an optional map of advanced
 * configurations:
 * 
 * - :shown -> a function called once the modal is shown.
 * - :hide -> a function called once the modal is asked to hide.
 * - :hidden -> a function called once the modal is hidden.
 * - :size -> Can be :lg (large) or :sm (small). Everything else defaults to medium.
 * - :keyboard -> if true, `esc' key can dismiss the modal. Default to true.
 * - :backdrop -> true (default): backdrop. 
 *                "static" : backdrop, but doesn't close the model when clicked upon. 
 *                false : no backdrop.
 */
reagent_modals.modals.modal_BANG_ = (function reagent_modals$modals$modal_BANG_(var_args){
var args26951 = [];
var len__26199__auto___26954 = arguments.length;
var i__26200__auto___26955 = (0);
while(true){
if((i__26200__auto___26955 < len__26199__auto___26954)){
args26951.push((arguments[i__26200__auto___26955]));

var G__26956 = (i__26200__auto___26955 + (1));
i__26200__auto___26955 = G__26956;
continue;
} else {
}
break;
}

var G__26953 = args26951.length;
switch (G__26953) {
case 1:
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26951.length)].join('')));

}
});

reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reagent_content){
return reagent_modals.modals.modal_BANG_.call(null,reagent_content,null);
});

reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reagent_content,configs){
cljs.core.reset_BANG_.call(null,reagent_modals.modals.modal_content,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),reagent_content], null),configs));

return reagent_modals.modals.show_modal_BANG_.call(null,cljs.core.select_keys.call(null,configs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381)], null)));
});

reagent_modals.modals.modal_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=modals.js.map?rel=1485761762363