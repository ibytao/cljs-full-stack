// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_simple.basic_component');
goog.require('cljs.core');
goog.require('reagent.core');
cljs_simple.basic_component.bar = (function cljs_simple$basic_component$bar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"via a simple render function - data in as parameters, and it returns HTML."], null);
});
cljs_simple.basic_component.baz = (function cljs_simple$basic_component$baz(this$){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"via a function which returns the render function - the returned function is the render function."], null);
});
});
cljs_simple.basic_component.ul = (function cljs_simple$basic_component$ul(this$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"basic-componetn"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.basic_component.bar], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.basic_component.baz,this$], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"via a map of functions, one of which is the render the rest of the functions are React lifecycle methods which allow for some more advanced interventions."], null)], null)], null);
});
cljs_simple.basic_component.foo = (function cljs_simple$basic_component$foo(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_simple.basic_component.ul,this$], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return console.log(this$);
}),new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),(function (){
return console.log("basic-component component-will-mount");
})], null));
});

//# sourceMappingURL=basic_component.js.map?rel=1485761762571