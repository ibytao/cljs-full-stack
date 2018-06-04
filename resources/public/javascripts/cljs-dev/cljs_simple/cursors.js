// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_simple.cursors');
goog.require('cljs.core');
goog.require('reagent.core');
cljs_simple.cursors.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bar","bar",-1386246584),"Hello Word",new cljs.core.Keyword(null,"baz","baz",-1134894686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quux","quux",-2106357800),"Woot"], null)], null)], null));
cljs_simple.cursors.inside_app_state = (function cljs_simple$cursors$inside_app_state(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Inside app-sate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_simple.cursors.app_state))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"change state value to change cursor value ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,cljs_simple.cursors.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null),(function (bar){
return ["world"].join('');
}));
})], null),"change state"], null)], null)], null);
});
cljs_simple.cursors.foo_cursor = reagent.core.cursor.call(null,cljs_simple.cursors.app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foo","foo",1268894036)], null));
cljs_simple.cursors.inside_foo_cursor = (function cljs_simple$cursors$inside_foo_cursor(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Inside foo-cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_simple.cursors.foo_cursor))].join('')], null);
});
cljs_simple.cursors.home = (function cljs_simple$cursors$home(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Cursors"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.cursors.inside_app_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.cursors.inside_foo_cursor], null)], null);
});

//# sourceMappingURL=cursors.js.map?rel=1527566158024
