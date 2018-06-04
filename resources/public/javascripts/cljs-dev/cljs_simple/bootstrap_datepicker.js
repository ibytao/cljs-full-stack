// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_simple.bootstrap_datepicker');
goog.require('cljs.core');
goog.require('reagent.core');
cljs_simple.bootstrap_datepicker.home_render = (function cljs_simple$bootstrap_datepicker$home_render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"bootstrap-datepicker"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"click to show datepicker",new cljs.core.Keyword(null,"id","id",-1388402092),"example"], null)], null)], null);
});
cljs_simple.bootstrap_datepicker.home_did_mount = (function cljs_simple$bootstrap_datepicker$home_did_mount(){
return $(document).ready((function (){
return $("#example").datepicker(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),"dd/mm/yyyy"], null)));
}));
});
cljs_simple.bootstrap_datepicker.home = (function cljs_simple$bootstrap_datepicker$home(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),cljs_simple.bootstrap_datepicker.home_render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),cljs_simple.bootstrap_datepicker.home_did_mount], null));
});

//# sourceMappingURL=bootstrap_datepicker.js.map?rel=1527566155993
