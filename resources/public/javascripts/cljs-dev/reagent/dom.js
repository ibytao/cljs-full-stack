// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25091__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25091__auto__)){
return or__25091__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_26820 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_26820){
return (function (){
var _STAR_always_update_STAR_26821 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26821;
}});})(_STAR_always_update_STAR_26820))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_26820;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args26822 = [];
var len__26199__auto___26825 = arguments.length;
var i__26200__auto___26826 = (0);
while(true){
if((i__26200__auto___26826 < len__26199__auto___26825)){
args26822.push((arguments[i__26200__auto___26826]));

var G__26827 = (i__26200__auto___26826 + (1));
i__26200__auto___26826 = G__26827;
continue;
} else {
}
break;
}

var G__26824 = args26822.length;
switch (G__26824) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26822.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__26833_26837 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__26834_26838 = null;
var count__26835_26839 = (0);
var i__26836_26840 = (0);
while(true){
if((i__26836_26840 < count__26835_26839)){
var v_26841 = cljs.core._nth.call(null,chunk__26834_26838,i__26836_26840);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26841);

var G__26842 = seq__26833_26837;
var G__26843 = chunk__26834_26838;
var G__26844 = count__26835_26839;
var G__26845 = (i__26836_26840 + (1));
seq__26833_26837 = G__26842;
chunk__26834_26838 = G__26843;
count__26835_26839 = G__26844;
i__26836_26840 = G__26845;
continue;
} else {
var temp__4657__auto___26846 = cljs.core.seq.call(null,seq__26833_26837);
if(temp__4657__auto___26846){
var seq__26833_26847__$1 = temp__4657__auto___26846;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26833_26847__$1)){
var c__25905__auto___26848 = cljs.core.chunk_first.call(null,seq__26833_26847__$1);
var G__26849 = cljs.core.chunk_rest.call(null,seq__26833_26847__$1);
var G__26850 = c__25905__auto___26848;
var G__26851 = cljs.core.count.call(null,c__25905__auto___26848);
var G__26852 = (0);
seq__26833_26837 = G__26849;
chunk__26834_26838 = G__26850;
count__26835_26839 = G__26851;
i__26836_26840 = G__26852;
continue;
} else {
var v_26853 = cljs.core.first.call(null,seq__26833_26847__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_26853);

var G__26854 = cljs.core.next.call(null,seq__26833_26847__$1);
var G__26855 = null;
var G__26856 = (0);
var G__26857 = (0);
seq__26833_26837 = G__26854;
chunk__26834_26838 = G__26855;
count__26835_26839 = G__26856;
i__26836_26840 = G__26857;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1485761762080