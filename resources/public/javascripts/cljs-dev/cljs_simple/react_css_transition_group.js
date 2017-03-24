// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_simple.react_css_transition_group');
goog.require('cljs.core');
goog.require('reagent.core');
cljs_simple.react_css_transition_group.css_transition_group = reagent.core.adapt_react_class.call(null,React.addons.CSSTransitionGroup);
cljs_simple.react_css_transition_group.style = ".react-css-transition-group li {\n  background-color: #44ee22; padding: 10px; margin: 1px; width: 150px;\n  border-radius: 5px;\n  font-size: 24px;\n  text-align: center;\n  list-style: none;\n  color: #fff;\n  height: 2em;\n  line-height: 2em;\n  padding: 0 0.5em;\n  overflow: hidden;\n  }\n\n  .react-css-transition-group .foo-enter {\n  height: 0;\n  transition: height 0.27s ease-out;\n  }\n\n  .react-css-transition-group .foo-leave {\n  height: 0;\n  transition: height 0.27s ease-out;\n  }\n\n  .react-css-transition-group .foo-enter-active {\n  height: 2em;\n  opacity: 1;\n  }";
cljs_simple.react_css_transition_group.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"items-counter","items-counter",-815692876),(0)], null));
cljs_simple.react_css_transition_group.add_item = (function cljs_simple$react_css_transition_group$add_item(){
var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_simple.react_css_transition_group.app_state));
cljs.core.swap_BANG_.call(null,cljs_simple.react_css_transition_group.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items-counter","items-counter",-815692876)], null),cljs.core.inc);

return cljs.core.swap_BANG_.call(null,cljs_simple.react_css_transition_group.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj.call(null,items,new cljs.core.Keyword(null,"items-counter","items-counter",-815692876).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_simple.react_css_transition_group.app_state))));
});
cljs_simple.react_css_transition_group.delete_item = (function cljs_simple$react_css_transition_group$delete_item(){
var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_simple.react_css_transition_group.app_state));
cljs.core.swap_BANG_.call(null,cljs_simple.react_css_transition_group.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items-counter","items-counter",-815692876)], null),cljs.core.dec);

return cljs.core.swap_BANG_.call(null,cljs_simple.react_css_transition_group.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.vec.call(null,cljs.core.butlast.call(null,items)));
});
cljs_simple.react_css_transition_group.home = (function cljs_simple$react_css_transition_group$home(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"React css transition group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str("Total list items to date:  "),cljs.core.str(new cljs.core.Keyword(null,"items-counter","items-counter",-815692876).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_simple.react_css_transition_group.app_state)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_simple.react_css_transition_group.add_item.call(null);
})], null),"add"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_simple.react_css_transition_group.delete_item.call(null);
})], null),"delete"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cljs_simple.react_css_transition_group.style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"react-css-transition-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.react_css_transition_group.css_transition_group,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transition-name","transition-name",91360299),"foo",new cljs.core.Keyword(null,"transition-leave-timeout","transition-leave-timeout",165643286),(500),new cljs.core.Keyword(null,"transition-enter-timeout","transition-enter-timeout",811383642),(500)], null),cljs.core.map_indexed.call(null,(function (i,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str("List Item "),cljs.core.str(x)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_simple.react_css_transition_group.app_state)))], null)], null)], null);
});

//# sourceMappingURL=react_css_transition_group.js.map?rel=1485761762421