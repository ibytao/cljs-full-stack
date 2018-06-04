// Compiled by ClojureScript 1.10.238 {}
goog.provide('antizer.reagent');
goog.require('cljs.core');
goog.require('antizer.core');
goog.require('goog.object');
goog.require('reagent.core');
/**
 * Calls Form.create() decorator with the form to be created. form can be
 *  any hiccup form. Accepts the following options:
 * 
 *  :options - map of Form.create() options. Refer to: 
 *             https://ant.design/components/form/#Form.create(options) for
 *             details
 */
antizer.reagent.create_form = (function antizer$reagent$create_form(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23238 = arguments.length;
var i__4500__auto___23239 = (0);
while(true){
if((i__4500__auto___23239 < len__4499__auto___23238)){
args__4502__auto__.push((arguments[i__4500__auto___23239]));

var G__23240 = (i__4500__auto___23239 + (1));
i__4500__auto___23239 = G__23240;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.create_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__23235){
var map__23236 = p__23235;
var map__23236__$1 = ((((!((map__23236 == null)))?(((((map__23236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23236):map__23236);
var options = cljs.core.get.call(null,map__23236__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
return reagent.core.create_element.call(null,goog.object.getValueByKeys(antd,"Form","create").call(null,cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options))).call(null,reagent.core.reactify_component.call(null,form)));
});

antizer.reagent.create_form.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.create_form.cljs$lang$applyTo = (function (seq23233){
var G__23234 = cljs.core.first.call(null,seq23233);
var seq23233__$1 = cljs.core.next.call(null,seq23233);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23234,seq23233__$1);
});

/**
 * Returns the `form` created by Form.create(). This function must be called
 * from within the `form` component
 */
antizer.reagent.get_form = (function antizer$reagent$get_form(){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,reagent.core.props.call(null,reagent.core.current_component.call(null)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
/**
 * Decorate a form field, corresponds to antd's getFieldDecorator() function
 * Arguments:
 * 
 * * form - the `form` object, obtained from `(get-form)`
 * * id - field identifier, supports nested fields format in string format
 * * options - the validation options for the field
 * * field - the input field element that the validation will be applied to
 * 
 * For more information about the validation options, please refer to: 
 * https://ant.design/components/form/#getFieldDecorator(id,-options)-parameters
 */
antizer.reagent.decorate_field = (function antizer$reagent$decorate_field(var_args){
var G__23242 = arguments.length;
switch (G__23242) {
case 3:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$3 = (function (form,id,field){
return antizer.reagent.decorate_field.call(null,form,id,cljs.core.PersistentArrayMap.EMPTY,field);
});

antizer.reagent.decorate_field.cljs$core$IFn$_invoke$arity$4 = (function (form,id,options,field){
var field_decorator = new cljs.core.Keyword(null,"getFieldDecorator","getFieldDecorator",-1859085334).cljs$core$IFn$_invoke$arity$1(form);
var params = cljs.core.clj__GT_js.call(null,antizer.core.map_keys__GT_camel_case.call(null,options));
return field_decorator.call(null,id,params).call(null,reagent.core.as_element.call(null,field));
});

antizer.reagent.decorate_field.cljs$lang$maxFixedArity = 4;

antizer.reagent.get_field_decorator = (function antizer$reagent$get_field_decorator(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23270 = arguments.length;
var i__4500__auto___23271 = (0);
while(true){
if((i__4500__auto___23271 < len__4499__auto___23270)){
args__4502__auto__.push((arguments[i__4500__auto___23271]));

var G__23272 = (i__4500__auto___23271 + (1));
i__4500__auto___23271 = G__23272;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.get_field_decorator.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldDecorator").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.get_field_decorator.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.get_field_decorator.cljs$lang$applyTo = (function (seq23244){
var G__23245 = cljs.core.first.call(null,seq23244);
var seq23244__$1 = cljs.core.next.call(null,seq23244);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23245,seq23244__$1);
});


antizer.reagent.get_field_error = (function antizer$reagent$get_field_error(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23273 = arguments.length;
var i__4500__auto___23274 = (0);
while(true){
if((i__4500__auto___23274 < len__4499__auto___23273)){
args__4502__auto__.push((arguments[i__4500__auto___23274]));

var G__23275 = (i__4500__auto___23274 + (1));
i__4500__auto___23274 = G__23275;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.get_field_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldError").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.get_field_error.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.get_field_error.cljs$lang$applyTo = (function (seq23246){
var G__23247 = cljs.core.first.call(null,seq23246);
var seq23246__$1 = cljs.core.next.call(null,seq23246);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23247,seq23246__$1);
});


antizer.reagent.get_fields_error = (function antizer$reagent$get_fields_error(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23276 = arguments.length;
var i__4500__auto___23277 = (0);
while(true){
if((i__4500__auto___23277 < len__4499__auto___23276)){
args__4502__auto__.push((arguments[i__4500__auto___23277]));

var G__23278 = (i__4500__auto___23277 + (1));
i__4500__auto___23277 = G__23278;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.get_fields_error.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsError").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.get_fields_error.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.get_fields_error.cljs$lang$applyTo = (function (seq23248){
var G__23249 = cljs.core.first.call(null,seq23248);
var seq23248__$1 = cljs.core.next.call(null,seq23248);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23249,seq23248__$1);
});


antizer.reagent.get_field_value = (function antizer$reagent$get_field_value(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23279 = arguments.length;
var i__4500__auto___23280 = (0);
while(true){
if((i__4500__auto___23280 < len__4499__auto___23279)){
args__4502__auto__.push((arguments[i__4500__auto___23280]));

var G__23281 = (i__4500__auto___23280 + (1));
i__4500__auto___23280 = G__23281;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.get_field_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldValue").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.get_field_value.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.get_field_value.cljs$lang$applyTo = (function (seq23250){
var G__23251 = cljs.core.first.call(null,seq23250);
var seq23250__$1 = cljs.core.next.call(null,seq23250);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23251,seq23250__$1);
});


antizer.reagent.get_fields_value = (function antizer$reagent$get_fields_value(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23282 = arguments.length;
var i__4500__auto___23283 = (0);
while(true){
if((i__4500__auto___23283 < len__4499__auto___23282)){
args__4502__auto__.push((arguments[i__4500__auto___23283]));

var G__23284 = (i__4500__auto___23283 + (1));
i__4500__auto___23283 = G__23284;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.get_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"getFieldsValue").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.get_fields_value.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.get_fields_value.cljs$lang$applyTo = (function (seq23252){
var G__23253 = cljs.core.first.call(null,seq23252);
var seq23252__$1 = cljs.core.next.call(null,seq23252);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23253,seq23252__$1);
});


antizer.reagent.is_field_touched = (function antizer$reagent$is_field_touched(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23285 = arguments.length;
var i__4500__auto___23286 = (0);
while(true){
if((i__4500__auto___23286 < len__4499__auto___23285)){
args__4502__auto__.push((arguments[i__4500__auto___23286]));

var G__23287 = (i__4500__auto___23286 + (1));
i__4500__auto___23286 = G__23287;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.is_field_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldTouched").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.is_field_touched.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.is_field_touched.cljs$lang$applyTo = (function (seq23254){
var G__23255 = cljs.core.first.call(null,seq23254);
var seq23254__$1 = cljs.core.next.call(null,seq23254);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23255,seq23254__$1);
});


antizer.reagent.is_fields_touched = (function antizer$reagent$is_fields_touched(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23288 = arguments.length;
var i__4500__auto___23289 = (0);
while(true){
if((i__4500__auto___23289 < len__4499__auto___23288)){
args__4502__auto__.push((arguments[i__4500__auto___23289]));

var G__23290 = (i__4500__auto___23289 + (1));
i__4500__auto___23289 = G__23290;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.is_fields_touched.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldsTouched").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.is_fields_touched.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.is_fields_touched.cljs$lang$applyTo = (function (seq23256){
var G__23257 = cljs.core.first.call(null,seq23256);
var seq23256__$1 = cljs.core.next.call(null,seq23256);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23257,seq23256__$1);
});


antizer.reagent.is_field_validating = (function antizer$reagent$is_field_validating(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23291 = arguments.length;
var i__4500__auto___23292 = (0);
while(true){
if((i__4500__auto___23292 < len__4499__auto___23291)){
args__4502__auto__.push((arguments[i__4500__auto___23292]));

var G__23293 = (i__4500__auto___23292 + (1));
i__4500__auto___23292 = G__23293;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.is_field_validating.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"isFieldValidating").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.is_field_validating.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.is_field_validating.cljs$lang$applyTo = (function (seq23258){
var G__23259 = cljs.core.first.call(null,seq23258);
var seq23258__$1 = cljs.core.next.call(null,seq23258);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23259,seq23258__$1);
});


antizer.reagent.reset_fields = (function antizer$reagent$reset_fields(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23294 = arguments.length;
var i__4500__auto___23295 = (0);
while(true){
if((i__4500__auto___23295 < len__4499__auto___23294)){
args__4502__auto__.push((arguments[i__4500__auto___23295]));

var G__23296 = (i__4500__auto___23295 + (1));
i__4500__auto___23295 = G__23296;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.reset_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"resetFields").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.reset_fields.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.reset_fields.cljs$lang$applyTo = (function (seq23260){
var G__23261 = cljs.core.first.call(null,seq23260);
var seq23260__$1 = cljs.core.next.call(null,seq23260);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23261,seq23260__$1);
});


antizer.reagent.set_fields = (function antizer$reagent$set_fields(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23297 = arguments.length;
var i__4500__auto___23298 = (0);
while(true){
if((i__4500__auto___23298 < len__4499__auto___23297)){
args__4502__auto__.push((arguments[i__4500__auto___23298]));

var G__23299 = (i__4500__auto___23298 + (1));
i__4500__auto___23298 = G__23299;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.set_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFields").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.set_fields.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.set_fields.cljs$lang$applyTo = (function (seq23262){
var G__23263 = cljs.core.first.call(null,seq23262);
var seq23262__$1 = cljs.core.next.call(null,seq23262);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23263,seq23262__$1);
});


antizer.reagent.set_fields_value = (function antizer$reagent$set_fields_value(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23300 = arguments.length;
var i__4500__auto___23301 = (0);
while(true){
if((i__4500__auto___23301 < len__4499__auto___23300)){
args__4502__auto__.push((arguments[i__4500__auto___23301]));

var G__23302 = (i__4500__auto___23301 + (1));
i__4500__auto___23301 = G__23302;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.set_fields_value.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"setFieldsValue").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.set_fields_value.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.set_fields_value.cljs$lang$applyTo = (function (seq23264){
var G__23265 = cljs.core.first.call(null,seq23264);
var seq23264__$1 = cljs.core.next.call(null,seq23264);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23265,seq23264__$1);
});


antizer.reagent.validate_fields = (function antizer$reagent$validate_fields(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23303 = arguments.length;
var i__4500__auto___23304 = (0);
while(true){
if((i__4500__auto___23304 < len__4499__auto___23303)){
args__4502__auto__.push((arguments[i__4500__auto___23304]));

var G__23305 = (i__4500__auto___23304 + (1));
i__4500__auto___23304 = G__23305;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.validate_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFields").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.validate_fields.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.validate_fields.cljs$lang$applyTo = (function (seq23266){
var G__23267 = cljs.core.first.call(null,seq23266);
var seq23266__$1 = cljs.core.next.call(null,seq23266);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23267,seq23266__$1);
});


antizer.reagent.validate_fields_and_scroll = (function antizer$reagent$validate_fields_and_scroll(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23306 = arguments.length;
var i__4500__auto___23307 = (0);
while(true){
if((i__4500__auto___23307 < len__4499__auto___23306)){
args__4502__auto__.push((arguments[i__4500__auto___23307]));

var G__23308 = (i__4500__auto___23307 + (1));
i__4500__auto___23307 = G__23308;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$core$IFn$_invoke$arity$variadic = (function (form__23200__auto__,args__23201__auto__){
return cljs.core.apply.call(null,antizer.core.call_js_func,cljs.core.keyword.call(null,"validateFieldsAndScroll").call(null,form__23200__auto__),args__23201__auto__);
});

antizer.reagent.validate_fields_and_scroll.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
antizer.reagent.validate_fields_and_scroll.cljs$lang$applyTo = (function (seq23268){
var G__23269 = cljs.core.first.call(null,seq23268);
var seq23268__$1 = cljs.core.next.call(null,seq23268);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23269,seq23268__$1);
});

antizer.reagent.message_config = (function antizer$reagent$message_config(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23330 = arguments.length;
var i__4500__auto___23331 = (0);
while(true){
if((i__4500__auto___23331 < len__4499__auto___23330)){
args__4502__auto__.push((arguments[i__4500__auto___23331]));

var G__23332 = (i__4500__auto___23331 + (1));
i__4500__auto___23331 = G__23332;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.message_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.config",args__23196__auto__);
});

antizer.reagent.message_config.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_config.cljs$lang$applyTo = (function (seq23309){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23309));
});


antizer.reagent.message_error = (function antizer$reagent$message_error(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23333 = arguments.length;
var i__4500__auto___23334 = (0);
while(true){
if((i__4500__auto___23334 < len__4499__auto___23333)){
args__4502__auto__.push((arguments[i__4500__auto___23334]));

var G__23335 = (i__4500__auto___23334 + (1));
i__4500__auto___23334 = G__23335;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.message_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.error",args__23196__auto__);
});

antizer.reagent.message_error.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_error.cljs$lang$applyTo = (function (seq23310){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23310));
});


antizer.reagent.message_info = (function antizer$reagent$message_info(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23336 = arguments.length;
var i__4500__auto___23337 = (0);
while(true){
if((i__4500__auto___23337 < len__4499__auto___23336)){
args__4502__auto__.push((arguments[i__4500__auto___23337]));

var G__23338 = (i__4500__auto___23337 + (1));
i__4500__auto___23337 = G__23338;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.message_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.info",args__23196__auto__);
});

antizer.reagent.message_info.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_info.cljs$lang$applyTo = (function (seq23311){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23311));
});


antizer.reagent.message_loading = (function antizer$reagent$message_loading(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23339 = arguments.length;
var i__4500__auto___23340 = (0);
while(true){
if((i__4500__auto___23340 < len__4499__auto___23339)){
args__4502__auto__.push((arguments[i__4500__auto___23340]));

var G__23341 = (i__4500__auto___23340 + (1));
i__4500__auto___23340 = G__23341;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.message_loading.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.loading",args__23196__auto__);
});

antizer.reagent.message_loading.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_loading.cljs$lang$applyTo = (function (seq23312){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23312));
});


antizer.reagent.message_success = (function antizer$reagent$message_success(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23342 = arguments.length;
var i__4500__auto___23343 = (0);
while(true){
if((i__4500__auto___23343 < len__4499__auto___23342)){
args__4502__auto__.push((arguments[i__4500__auto___23343]));

var G__23344 = (i__4500__auto___23343 + (1));
i__4500__auto___23343 = G__23344;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.message_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.success",args__23196__auto__);
});

antizer.reagent.message_success.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_success.cljs$lang$applyTo = (function (seq23313){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23313));
});


antizer.reagent.message_warn = (function antizer$reagent$message_warn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23345 = arguments.length;
var i__4500__auto___23346 = (0);
while(true){
if((i__4500__auto___23346 < len__4499__auto___23345)){
args__4502__auto__.push((arguments[i__4500__auto___23346]));

var G__23347 = (i__4500__auto___23346 + (1));
i__4500__auto___23346 = G__23347;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.message_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warn",args__23196__auto__);
});

antizer.reagent.message_warn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_warn.cljs$lang$applyTo = (function (seq23314){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23314));
});


antizer.reagent.message_warning = (function antizer$reagent$message_warning(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23348 = arguments.length;
var i__4500__auto___23349 = (0);
while(true){
if((i__4500__auto___23349 < len__4499__auto___23348)){
args__4502__auto__.push((arguments[i__4500__auto___23349]));

var G__23350 = (i__4500__auto___23349 + (1));
i__4500__auto___23349 = G__23350;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.message_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"message.warning",args__23196__auto__);
});

antizer.reagent.message_warning.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.message_warning.cljs$lang$applyTo = (function (seq23315){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23315));
});


antizer.reagent.modal_confirm = (function antizer$reagent$modal_confirm(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23351 = arguments.length;
var i__4500__auto___23352 = (0);
while(true){
if((i__4500__auto___23352 < len__4499__auto___23351)){
args__4502__auto__.push((arguments[i__4500__auto___23352]));

var G__23353 = (i__4500__auto___23352 + (1));
i__4500__auto___23352 = G__23353;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.modal_confirm.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.confirm",args__23196__auto__);
});

antizer.reagent.modal_confirm.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.modal_confirm.cljs$lang$applyTo = (function (seq23316){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23316));
});


antizer.reagent.modal_error = (function antizer$reagent$modal_error(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23354 = arguments.length;
var i__4500__auto___23355 = (0);
while(true){
if((i__4500__auto___23355 < len__4499__auto___23354)){
args__4502__auto__.push((arguments[i__4500__auto___23355]));

var G__23356 = (i__4500__auto___23355 + (1));
i__4500__auto___23355 = G__23356;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.modal_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.error",args__23196__auto__);
});

antizer.reagent.modal_error.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.modal_error.cljs$lang$applyTo = (function (seq23317){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23317));
});


antizer.reagent.modal_info = (function antizer$reagent$modal_info(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23357 = arguments.length;
var i__4500__auto___23358 = (0);
while(true){
if((i__4500__auto___23358 < len__4499__auto___23357)){
args__4502__auto__.push((arguments[i__4500__auto___23358]));

var G__23359 = (i__4500__auto___23358 + (1));
i__4500__auto___23358 = G__23359;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.modal_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.info",args__23196__auto__);
});

antizer.reagent.modal_info.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.modal_info.cljs$lang$applyTo = (function (seq23318){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23318));
});


antizer.reagent.modal_success = (function antizer$reagent$modal_success(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23360 = arguments.length;
var i__4500__auto___23361 = (0);
while(true){
if((i__4500__auto___23361 < len__4499__auto___23360)){
args__4502__auto__.push((arguments[i__4500__auto___23361]));

var G__23362 = (i__4500__auto___23361 + (1));
i__4500__auto___23361 = G__23362;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.modal_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.success",args__23196__auto__);
});

antizer.reagent.modal_success.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.modal_success.cljs$lang$applyTo = (function (seq23319){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23319));
});


antizer.reagent.modal_warning = (function antizer$reagent$modal_warning(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23363 = arguments.length;
var i__4500__auto___23364 = (0);
while(true){
if((i__4500__auto___23364 < len__4499__auto___23363)){
args__4502__auto__.push((arguments[i__4500__auto___23364]));

var G__23365 = (i__4500__auto___23364 + (1));
i__4500__auto___23364 = G__23365;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.modal_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"Modal.warning",args__23196__auto__);
});

antizer.reagent.modal_warning.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.modal_warning.cljs$lang$applyTo = (function (seq23320){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23320));
});


antizer.reagent.notification_close = (function antizer$reagent$notification_close(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23366 = arguments.length;
var i__4500__auto___23367 = (0);
while(true){
if((i__4500__auto___23367 < len__4499__auto___23366)){
args__4502__auto__.push((arguments[i__4500__auto___23367]));

var G__23368 = (i__4500__auto___23367 + (1));
i__4500__auto___23367 = G__23368;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.notification_close.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.close",args__23196__auto__);
});

antizer.reagent.notification_close.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_close.cljs$lang$applyTo = (function (seq23321){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23321));
});


antizer.reagent.notification_config = (function antizer$reagent$notification_config(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23369 = arguments.length;
var i__4500__auto___23370 = (0);
while(true){
if((i__4500__auto___23370 < len__4499__auto___23369)){
args__4502__auto__.push((arguments[i__4500__auto___23370]));

var G__23371 = (i__4500__auto___23370 + (1));
i__4500__auto___23370 = G__23371;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.notification_config.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.config",args__23196__auto__);
});

antizer.reagent.notification_config.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_config.cljs$lang$applyTo = (function (seq23322){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23322));
});


antizer.reagent.notification_destroy = (function antizer$reagent$notification_destroy(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23372 = arguments.length;
var i__4500__auto___23373 = (0);
while(true){
if((i__4500__auto___23373 < len__4499__auto___23372)){
args__4502__auto__.push((arguments[i__4500__auto___23373]));

var G__23374 = (i__4500__auto___23373 + (1));
i__4500__auto___23373 = G__23374;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.notification_destroy.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.destroy",args__23196__auto__);
});

antizer.reagent.notification_destroy.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_destroy.cljs$lang$applyTo = (function (seq23323){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23323));
});


antizer.reagent.notification_error = (function antizer$reagent$notification_error(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23375 = arguments.length;
var i__4500__auto___23376 = (0);
while(true){
if((i__4500__auto___23376 < len__4499__auto___23375)){
args__4502__auto__.push((arguments[i__4500__auto___23376]));

var G__23377 = (i__4500__auto___23376 + (1));
i__4500__auto___23376 = G__23377;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.notification_error.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.error",args__23196__auto__);
});

antizer.reagent.notification_error.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_error.cljs$lang$applyTo = (function (seq23324){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23324));
});


antizer.reagent.notification_info = (function antizer$reagent$notification_info(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23378 = arguments.length;
var i__4500__auto___23379 = (0);
while(true){
if((i__4500__auto___23379 < len__4499__auto___23378)){
args__4502__auto__.push((arguments[i__4500__auto___23379]));

var G__23380 = (i__4500__auto___23379 + (1));
i__4500__auto___23379 = G__23380;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.notification_info.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.info",args__23196__auto__);
});

antizer.reagent.notification_info.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_info.cljs$lang$applyTo = (function (seq23325){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23325));
});


antizer.reagent.notification_open = (function antizer$reagent$notification_open(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23381 = arguments.length;
var i__4500__auto___23382 = (0);
while(true){
if((i__4500__auto___23382 < len__4499__auto___23381)){
args__4502__auto__.push((arguments[i__4500__auto___23382]));

var G__23383 = (i__4500__auto___23382 + (1));
i__4500__auto___23382 = G__23383;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.notification_open.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.open",args__23196__auto__);
});

antizer.reagent.notification_open.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_open.cljs$lang$applyTo = (function (seq23326){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23326));
});


antizer.reagent.notification_success = (function antizer$reagent$notification_success(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23384 = arguments.length;
var i__4500__auto___23385 = (0);
while(true){
if((i__4500__auto___23385 < len__4499__auto___23384)){
args__4502__auto__.push((arguments[i__4500__auto___23385]));

var G__23386 = (i__4500__auto___23385 + (1));
i__4500__auto___23385 = G__23386;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.notification_success.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.success",args__23196__auto__);
});

antizer.reagent.notification_success.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_success.cljs$lang$applyTo = (function (seq23327){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23327));
});


antizer.reagent.notification_warn = (function antizer$reagent$notification_warn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23387 = arguments.length;
var i__4500__auto___23388 = (0);
while(true){
if((i__4500__auto___23388 < len__4499__auto___23387)){
args__4502__auto__.push((arguments[i__4500__auto___23388]));

var G__23389 = (i__4500__auto___23388 + (1));
i__4500__auto___23388 = G__23389;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.notification_warn.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warn",args__23196__auto__);
});

antizer.reagent.notification_warn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_warn.cljs$lang$applyTo = (function (seq23328){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23328));
});


antizer.reagent.notification_warning = (function antizer$reagent$notification_warning(var_args){
var args__4502__auto__ = [];
var len__4499__auto___23390 = arguments.length;
var i__4500__auto___23391 = (0);
while(true){
if((i__4500__auto___23391 < len__4499__auto___23390)){
args__4502__auto__.push((arguments[i__4500__auto___23391]));

var G__23392 = (i__4500__auto___23391 + (1));
i__4500__auto___23391 = G__23392;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

antizer.reagent.notification_warning.cljs$core$IFn$_invoke$arity$variadic = (function (args__23196__auto__){
return cljs.core.apply.call(null,antizer.core.call_func,"notification.warning",args__23196__auto__);
});

antizer.reagent.notification_warning.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
antizer.reagent.notification_warning.cljs$lang$applyTo = (function (seq23329){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23329));
});

antizer.reagent.locales = (function antizer$reagent$locales(prop__23198__auto__){
return antizer.core.get_prop.call(null,"locales",prop__23198__auto__);
});
antizer.reagent.affix = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Affix"], null)));

antizer.reagent.alert = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Alert"], null)));

antizer.reagent.anchor = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor"], null)));

antizer.reagent.anchor_link = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Anchor","Link"], null)));

antizer.reagent.auto_complete = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AutoComplete"], null)));

antizer.reagent.avatar = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Avatar"], null)));

antizer.reagent.back_top = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BackTop"], null)));

antizer.reagent.badge = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Badge"], null)));

antizer.reagent.breadcrumb = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb"], null)));

antizer.reagent.breadcrumb_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Breadcrumb","Item"], null)));

antizer.reagent.button = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button"], null)));

antizer.reagent.button_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Button","Group"], null)));

antizer.reagent.calendar = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calendar"], null)));

antizer.reagent.card = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Card"], null)));

antizer.reagent.carousel = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Carousel"], null)));

antizer.reagent.cascader = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cascader"], null)));

antizer.reagent.checkbox = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox"], null)));

antizer.reagent.checkbox_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Checkbox","Group"], null)));

antizer.reagent.col = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Col"], null)));

antizer.reagent.collapse = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse"], null)));

antizer.reagent.collapse_panel = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collapse","Panel"], null)));

antizer.reagent.date_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker"], null)));

antizer.reagent.date_picker_month_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","MonthPicker"], null)));

antizer.reagent.date_picker_range_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DatePicker","RangePicker"], null)));

antizer.reagent.dropdown = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown"], null)));

antizer.reagent.dropdown_button = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dropdown","Button"], null)));

antizer.reagent.form = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form"], null)));

antizer.reagent.form_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Form","Item"], null)));

antizer.reagent.icon = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Icon"], null)));

antizer.reagent.input = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input"], null)));

antizer.reagent.input_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Group"], null)));

antizer.reagent.input_search = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","Search"], null)));

antizer.reagent.input_text_area = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Input","TextArea"], null)));

antizer.reagent.input_number = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["InputNumber"], null)));

antizer.reagent.layout = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout"], null)));

antizer.reagent.layout_content = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Content"], null)));

antizer.reagent.layout_footer = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Footer"], null)));

antizer.reagent.layout_header = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Header"], null)));

antizer.reagent.layout_sider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Layout","Sider"], null)));

antizer.reagent.locale_provider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["LocaleProvider"], null)));

antizer.reagent.mention = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Mention"], null)));

antizer.reagent.menu = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu"], null)));

antizer.reagent.menu_divider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Divider"], null)));

antizer.reagent.menu_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","Item"], null)));

antizer.reagent.menu_item_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","ItemGroup"], null)));

antizer.reagent.menu_sub_menu = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Menu","SubMenu"], null)));

antizer.reagent.modal = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Modal"], null)));

antizer.reagent.pagination = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pagination"], null)));

antizer.reagent.popconfirm = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popconfirm"], null)));

antizer.reagent.popover = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Popover"], null)));

antizer.reagent.progress = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Progress"], null)));

antizer.reagent.radio = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio"], null)));

antizer.reagent.radio_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Radio","Group"], null)));

antizer.reagent.rate = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rate"], null)));

antizer.reagent.row = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Row"], null)));

antizer.reagent.select = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select"], null)));

antizer.reagent.select_option = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","Option"], null)));

antizer.reagent.select_opt_group = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Select","OptGroup"], null)));

antizer.reagent.slider = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Slider"], null)));

antizer.reagent.spin = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Spin"], null)));

antizer.reagent.steps = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps"], null)));

antizer.reagent.steps_step = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Steps","Step"], null)));

antizer.reagent.switch$ = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Switch"], null)));

antizer.reagent.table = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table"], null)));

antizer.reagent.table_column = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Table","Column"], null)));

antizer.reagent.tabs = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs"], null)));

antizer.reagent.tabs_tab_pane = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tabs","TabPane"], null)));

antizer.reagent.tag = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag"], null)));

antizer.reagent.tag_checkable_tag = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tag","CheckableTag"], null)));

antizer.reagent.time_picker = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TimePicker"], null)));

antizer.reagent.timeline = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline"], null)));

antizer.reagent.timeline_item = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Timeline","Item"], null)));

antizer.reagent.tooltip = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tooltip"], null)));

antizer.reagent.transfer = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Transfer"], null)));

antizer.reagent.tree = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree"], null)));

antizer.reagent.tree_select = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect"], null)));

antizer.reagent.tree_select_tree_node = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TreeSelect","TreeNode"], null)));

antizer.reagent.tree_tree_node = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tree","TreeNode"], null)));

antizer.reagent.upload = reagent.core.adapt_react_class.call(null,cljs.core.apply.call(null,goog.object.getValueByKeys,antd,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Upload"], null)));

//# sourceMappingURL=reagent.js.map?rel=1527566156244
