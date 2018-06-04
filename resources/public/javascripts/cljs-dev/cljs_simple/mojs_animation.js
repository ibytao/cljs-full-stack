// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_simple.mojs_animation');
goog.require('cljs.core');
goog.require('module$Users$Buck$Projects$cljs_simple$resources$public$vendor$js$calculator');
goog.require('module$Users$Buck$Projects$cljs_simple$resources$public$vendor$js$mojs_player');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,module$Users$Buck$Projects$cljs_simple$resources$public$vendor$js$calculator.add((14),(25)));
cljs_simple.mojs_animation.translate_y = (function cljs_simple$mojs_animation$translate_y(node){
return (function (progress){
return node.style.transform = ["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((200) * progress)),"px)"].join('');
});
});
cljs_simple.mojs_animation.animation_did_mount = (function cljs_simple$mojs_animation$animation_did_mount(this$){
var yCurve = (new MojsCurveEditor(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"yOffset"], null))));
var squarel = (new mojs.Html(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),"#square",new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"100","100",943295053),(0),new cljs.core.Keyword(null,"curve","curve",-569677866),yCurve.getEasing()], null),new cljs.core.Keyword(null,"repeat","repeat",832692087),(999),new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null))));
squarel.play();

return (new module$Users$Buck$Projects$cljs_simple$resources$public$vendor$js$mojs_player["default"].mojs_player(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"add","add",235287739),squarel], null))));
});
cljs_simple.mojs_animation.animation = (function cljs_simple$mojs_animation$animation(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#square","div#square",92645922),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"5em",new cljs.core.Keyword(null,"height","height",1025178622),"5em",new cljs.core.Keyword(null,"background","background",-863952629),"red"], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),cljs_simple.mojs_animation.animation_did_mount], null));
});
cljs_simple.mojs_animation.home = (function cljs_simple$mojs_animation$home(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"height","height",1025178622),"7em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"mojs animation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.mojs_animation.animation], null)], null);
});

//# sourceMappingURL=mojs_animation.js.map?rel=1527566158212
