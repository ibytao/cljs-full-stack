// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.17-SNAPSHOT";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30137){if((e30137 instanceof Error)){
var e = e30137;
return "Error: Unable to stringify";
} else {
throw e30137;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30140 = arguments.length;
switch (G__30140) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30138_SHARP_){
if(typeof p1__30138_SHARP_ === 'string'){
return p1__30138_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30138_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30143 = arguments.length;
var i__4500__auto___30144 = (0);
while(true){
if((i__4500__auto___30144 < len__4499__auto___30143)){
args__4502__auto__.push((arguments[i__4500__auto___30144]));

var G__30145 = (i__4500__auto___30144 + (1));
i__4500__auto___30144 = G__30145;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30142){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30142));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30147 = arguments.length;
var i__4500__auto___30148 = (0);
while(true){
if((i__4500__auto___30148 < len__4499__auto___30147)){
args__4502__auto__.push((arguments[i__4500__auto___30148]));

var G__30149 = (i__4500__auto___30148 + (1));
i__4500__auto___30148 = G__30149;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30146){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30146));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30150){
var map__30151 = p__30150;
var map__30151__$1 = ((((!((map__30151 == null)))?(((((map__30151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30151):map__30151);
var message = cljs.core.get.call(null,map__30151__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30151__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24743__auto___30230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___30230,ch){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___30230,ch){
return (function (state_30202){
var state_val_30203 = (state_30202[(1)]);
if((state_val_30203 === (7))){
var inst_30198 = (state_30202[(2)]);
var state_30202__$1 = state_30202;
var statearr_30204_30231 = state_30202__$1;
(statearr_30204_30231[(2)] = inst_30198);

(statearr_30204_30231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (1))){
var state_30202__$1 = state_30202;
var statearr_30205_30232 = state_30202__$1;
(statearr_30205_30232[(2)] = null);

(statearr_30205_30232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (4))){
var inst_30155 = (state_30202[(7)]);
var inst_30155__$1 = (state_30202[(2)]);
var state_30202__$1 = (function (){var statearr_30206 = state_30202;
(statearr_30206[(7)] = inst_30155__$1);

return statearr_30206;
})();
if(cljs.core.truth_(inst_30155__$1)){
var statearr_30207_30233 = state_30202__$1;
(statearr_30207_30233[(1)] = (5));

} else {
var statearr_30208_30234 = state_30202__$1;
(statearr_30208_30234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (15))){
var inst_30162 = (state_30202[(8)]);
var inst_30177 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30162);
var inst_30178 = cljs.core.first.call(null,inst_30177);
var inst_30179 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30178);
var inst_30180 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30179)].join('');
var inst_30181 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30180);
var state_30202__$1 = state_30202;
var statearr_30209_30235 = state_30202__$1;
(statearr_30209_30235[(2)] = inst_30181);

(statearr_30209_30235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (13))){
var inst_30186 = (state_30202[(2)]);
var state_30202__$1 = state_30202;
var statearr_30210_30236 = state_30202__$1;
(statearr_30210_30236[(2)] = inst_30186);

(statearr_30210_30236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (6))){
var state_30202__$1 = state_30202;
var statearr_30211_30237 = state_30202__$1;
(statearr_30211_30237[(2)] = null);

(statearr_30211_30237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (17))){
var inst_30184 = (state_30202[(2)]);
var state_30202__$1 = state_30202;
var statearr_30212_30238 = state_30202__$1;
(statearr_30212_30238[(2)] = inst_30184);

(statearr_30212_30238[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (3))){
var inst_30200 = (state_30202[(2)]);
var state_30202__$1 = state_30202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30202__$1,inst_30200);
} else {
if((state_val_30203 === (12))){
var inst_30161 = (state_30202[(9)]);
var inst_30175 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30161,opts);
var state_30202__$1 = state_30202;
if(cljs.core.truth_(inst_30175)){
var statearr_30213_30239 = state_30202__$1;
(statearr_30213_30239[(1)] = (15));

} else {
var statearr_30214_30240 = state_30202__$1;
(statearr_30214_30240[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (2))){
var state_30202__$1 = state_30202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30202__$1,(4),ch);
} else {
if((state_val_30203 === (11))){
var inst_30162 = (state_30202[(8)]);
var inst_30167 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30168 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30162);
var inst_30169 = cljs.core.async.timeout.call(null,(1000));
var inst_30170 = [inst_30168,inst_30169];
var inst_30171 = (new cljs.core.PersistentVector(null,2,(5),inst_30167,inst_30170,null));
var state_30202__$1 = state_30202;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30202__$1,(14),inst_30171);
} else {
if((state_val_30203 === (9))){
var inst_30162 = (state_30202[(8)]);
var inst_30188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30189 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30162);
var inst_30190 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30189);
var inst_30191 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30190)].join('');
var inst_30192 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30191);
var state_30202__$1 = (function (){var statearr_30215 = state_30202;
(statearr_30215[(10)] = inst_30188);

return statearr_30215;
})();
var statearr_30216_30241 = state_30202__$1;
(statearr_30216_30241[(2)] = inst_30192);

(statearr_30216_30241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (5))){
var inst_30155 = (state_30202[(7)]);
var inst_30157 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30158 = (new cljs.core.PersistentArrayMap(null,2,inst_30157,null));
var inst_30159 = (new cljs.core.PersistentHashSet(null,inst_30158,null));
var inst_30160 = figwheel.client.focus_msgs.call(null,inst_30159,inst_30155);
var inst_30161 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30160);
var inst_30162 = cljs.core.first.call(null,inst_30160);
var inst_30163 = figwheel.client.autoload_QMARK_.call(null);
var state_30202__$1 = (function (){var statearr_30217 = state_30202;
(statearr_30217[(9)] = inst_30161);

(statearr_30217[(8)] = inst_30162);

return statearr_30217;
})();
if(cljs.core.truth_(inst_30163)){
var statearr_30218_30242 = state_30202__$1;
(statearr_30218_30242[(1)] = (8));

} else {
var statearr_30219_30243 = state_30202__$1;
(statearr_30219_30243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (14))){
var inst_30173 = (state_30202[(2)]);
var state_30202__$1 = state_30202;
var statearr_30220_30244 = state_30202__$1;
(statearr_30220_30244[(2)] = inst_30173);

(statearr_30220_30244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (16))){
var state_30202__$1 = state_30202;
var statearr_30221_30245 = state_30202__$1;
(statearr_30221_30245[(2)] = null);

(statearr_30221_30245[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (10))){
var inst_30194 = (state_30202[(2)]);
var state_30202__$1 = (function (){var statearr_30222 = state_30202;
(statearr_30222[(11)] = inst_30194);

return statearr_30222;
})();
var statearr_30223_30246 = state_30202__$1;
(statearr_30223_30246[(2)] = null);

(statearr_30223_30246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30203 === (8))){
var inst_30161 = (state_30202[(9)]);
var inst_30165 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30161,opts);
var state_30202__$1 = state_30202;
if(cljs.core.truth_(inst_30165)){
var statearr_30224_30247 = state_30202__$1;
(statearr_30224_30247[(1)] = (11));

} else {
var statearr_30225_30248 = state_30202__$1;
(statearr_30225_30248[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24743__auto___30230,ch))
;
return ((function (switch__24653__auto__,c__24743__auto___30230,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24654__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24654__auto____0 = (function (){
var statearr_30226 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30226[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24654__auto__);

(statearr_30226[(1)] = (1));

return statearr_30226;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24654__auto____1 = (function (state_30202){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_30202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e30227){if((e30227 instanceof Object)){
var ex__24657__auto__ = e30227;
var statearr_30228_30249 = state_30202;
(statearr_30228_30249[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30250 = state_30202;
state_30202 = G__30250;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24654__auto__ = function(state_30202){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24654__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24654__auto____1.call(this,state_30202);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24654__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24654__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___30230,ch))
})();
var state__24745__auto__ = (function (){var statearr_30229 = f__24744__auto__.call(null);
(statearr_30229[(6)] = c__24743__auto___30230);

return statearr_30229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___30230,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30251_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30251_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30255 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30255){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30253 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30254 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30253,_STAR_print_fn_STAR_30254,sb,base_path_30255){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30253,_STAR_print_fn_STAR_30254,sb,base_path_30255))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30254;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30253;
}}catch (e30252){if((e30252 instanceof Error)){
var e = e30252;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30255], null));
} else {
var e = e30252;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30255))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30256){
var map__30257 = p__30256;
var map__30257__$1 = ((((!((map__30257 == null)))?(((((map__30257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30257):map__30257);
var opts = map__30257__$1;
var build_id = cljs.core.get.call(null,map__30257__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30257,map__30257__$1,opts,build_id){
return (function (p__30259){
var vec__30260 = p__30259;
var seq__30261 = cljs.core.seq.call(null,vec__30260);
var first__30262 = cljs.core.first.call(null,seq__30261);
var seq__30261__$1 = cljs.core.next.call(null,seq__30261);
var map__30263 = first__30262;
var map__30263__$1 = ((((!((map__30263 == null)))?(((((map__30263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30263):map__30263);
var msg = map__30263__$1;
var msg_name = cljs.core.get.call(null,map__30263__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30261__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30260,seq__30261,first__30262,seq__30261__$1,map__30263,map__30263__$1,msg,msg_name,_,map__30257,map__30257__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30260,seq__30261,first__30262,seq__30261__$1,map__30263,map__30263__$1,msg,msg_name,_,map__30257,map__30257__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30257,map__30257__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30265){
var vec__30266 = p__30265;
var seq__30267 = cljs.core.seq.call(null,vec__30266);
var first__30268 = cljs.core.first.call(null,seq__30267);
var seq__30267__$1 = cljs.core.next.call(null,seq__30267);
var map__30269 = first__30268;
var map__30269__$1 = ((((!((map__30269 == null)))?(((((map__30269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30269):map__30269);
var msg = map__30269__$1;
var msg_name = cljs.core.get.call(null,map__30269__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30267__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30271){
var map__30272 = p__30271;
var map__30272__$1 = ((((!((map__30272 == null)))?(((((map__30272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30272):map__30272);
var on_compile_warning = cljs.core.get.call(null,map__30272__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30272__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30272,map__30272__$1,on_compile_warning,on_compile_fail){
return (function (p__30274){
var vec__30275 = p__30274;
var seq__30276 = cljs.core.seq.call(null,vec__30275);
var first__30277 = cljs.core.first.call(null,seq__30276);
var seq__30276__$1 = cljs.core.next.call(null,seq__30276);
var map__30278 = first__30277;
var map__30278__$1 = ((((!((map__30278 == null)))?(((((map__30278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30278):map__30278);
var msg = map__30278__$1;
var msg_name = cljs.core.get.call(null,map__30278__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30276__$1;
var pred__30280 = cljs.core._EQ_;
var expr__30281 = msg_name;
if(cljs.core.truth_(pred__30280.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30281))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30280.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30281))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30272,map__30272__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto__,msg_hist,msg_names,msg){
return (function (state_30370){
var state_val_30371 = (state_30370[(1)]);
if((state_val_30371 === (7))){
var inst_30290 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30290)){
var statearr_30372_30419 = state_30370__$1;
(statearr_30372_30419[(1)] = (8));

} else {
var statearr_30373_30420 = state_30370__$1;
(statearr_30373_30420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (20))){
var inst_30364 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30374_30421 = state_30370__$1;
(statearr_30374_30421[(2)] = inst_30364);

(statearr_30374_30421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (27))){
var inst_30360 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30375_30422 = state_30370__$1;
(statearr_30375_30422[(2)] = inst_30360);

(statearr_30375_30422[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (1))){
var inst_30283 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30283)){
var statearr_30376_30423 = state_30370__$1;
(statearr_30376_30423[(1)] = (2));

} else {
var statearr_30377_30424 = state_30370__$1;
(statearr_30377_30424[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (24))){
var inst_30362 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30378_30425 = state_30370__$1;
(statearr_30378_30425[(2)] = inst_30362);

(statearr_30378_30425[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (4))){
var inst_30368 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30370__$1,inst_30368);
} else {
if((state_val_30371 === (15))){
var inst_30366 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30379_30426 = state_30370__$1;
(statearr_30379_30426[(2)] = inst_30366);

(statearr_30379_30426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (21))){
var inst_30319 = (state_30370[(2)]);
var inst_30320 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30321 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30320);
var state_30370__$1 = (function (){var statearr_30380 = state_30370;
(statearr_30380[(7)] = inst_30319);

return statearr_30380;
})();
var statearr_30381_30427 = state_30370__$1;
(statearr_30381_30427[(2)] = inst_30321);

(statearr_30381_30427[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (31))){
var inst_30349 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30349)){
var statearr_30382_30428 = state_30370__$1;
(statearr_30382_30428[(1)] = (34));

} else {
var statearr_30383_30429 = state_30370__$1;
(statearr_30383_30429[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (32))){
var inst_30358 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30384_30430 = state_30370__$1;
(statearr_30384_30430[(2)] = inst_30358);

(statearr_30384_30430[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (33))){
var inst_30345 = (state_30370[(2)]);
var inst_30346 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30347 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30346);
var state_30370__$1 = (function (){var statearr_30385 = state_30370;
(statearr_30385[(8)] = inst_30345);

return statearr_30385;
})();
var statearr_30386_30431 = state_30370__$1;
(statearr_30386_30431[(2)] = inst_30347);

(statearr_30386_30431[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (13))){
var inst_30304 = figwheel.client.heads_up.clear.call(null);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30370__$1,(16),inst_30304);
} else {
if((state_val_30371 === (22))){
var inst_30325 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30326 = figwheel.client.heads_up.append_warning_message.call(null,inst_30325);
var state_30370__$1 = state_30370;
var statearr_30387_30432 = state_30370__$1;
(statearr_30387_30432[(2)] = inst_30326);

(statearr_30387_30432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (36))){
var inst_30356 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30388_30433 = state_30370__$1;
(statearr_30388_30433[(2)] = inst_30356);

(statearr_30388_30433[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (29))){
var inst_30336 = (state_30370[(2)]);
var inst_30337 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30338 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30337);
var state_30370__$1 = (function (){var statearr_30389 = state_30370;
(statearr_30389[(9)] = inst_30336);

return statearr_30389;
})();
var statearr_30390_30434 = state_30370__$1;
(statearr_30390_30434[(2)] = inst_30338);

(statearr_30390_30434[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (6))){
var inst_30285 = (state_30370[(10)]);
var state_30370__$1 = state_30370;
var statearr_30391_30435 = state_30370__$1;
(statearr_30391_30435[(2)] = inst_30285);

(statearr_30391_30435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (28))){
var inst_30332 = (state_30370[(2)]);
var inst_30333 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30334 = figwheel.client.heads_up.display_warning.call(null,inst_30333);
var state_30370__$1 = (function (){var statearr_30392 = state_30370;
(statearr_30392[(11)] = inst_30332);

return statearr_30392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30370__$1,(29),inst_30334);
} else {
if((state_val_30371 === (25))){
var inst_30330 = figwheel.client.heads_up.clear.call(null);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30370__$1,(28),inst_30330);
} else {
if((state_val_30371 === (34))){
var inst_30351 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30370__$1,(37),inst_30351);
} else {
if((state_val_30371 === (17))){
var inst_30310 = (state_30370[(2)]);
var inst_30311 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30312 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30311);
var state_30370__$1 = (function (){var statearr_30393 = state_30370;
(statearr_30393[(12)] = inst_30310);

return statearr_30393;
})();
var statearr_30394_30436 = state_30370__$1;
(statearr_30394_30436[(2)] = inst_30312);

(statearr_30394_30436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (3))){
var inst_30302 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30302)){
var statearr_30395_30437 = state_30370__$1;
(statearr_30395_30437[(1)] = (13));

} else {
var statearr_30396_30438 = state_30370__$1;
(statearr_30396_30438[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (12))){
var inst_30298 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30397_30439 = state_30370__$1;
(statearr_30397_30439[(2)] = inst_30298);

(statearr_30397_30439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (2))){
var inst_30285 = (state_30370[(10)]);
var inst_30285__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30370__$1 = (function (){var statearr_30398 = state_30370;
(statearr_30398[(10)] = inst_30285__$1);

return statearr_30398;
})();
if(cljs.core.truth_(inst_30285__$1)){
var statearr_30399_30440 = state_30370__$1;
(statearr_30399_30440[(1)] = (5));

} else {
var statearr_30400_30441 = state_30370__$1;
(statearr_30400_30441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (23))){
var inst_30328 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30328)){
var statearr_30401_30442 = state_30370__$1;
(statearr_30401_30442[(1)] = (25));

} else {
var statearr_30402_30443 = state_30370__$1;
(statearr_30402_30443[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (35))){
var state_30370__$1 = state_30370;
var statearr_30403_30444 = state_30370__$1;
(statearr_30403_30444[(2)] = null);

(statearr_30403_30444[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (19))){
var inst_30323 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30323)){
var statearr_30404_30445 = state_30370__$1;
(statearr_30404_30445[(1)] = (22));

} else {
var statearr_30405_30446 = state_30370__$1;
(statearr_30405_30446[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (11))){
var inst_30294 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30406_30447 = state_30370__$1;
(statearr_30406_30447[(2)] = inst_30294);

(statearr_30406_30447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (9))){
var inst_30296 = figwheel.client.heads_up.clear.call(null);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30370__$1,(12),inst_30296);
} else {
if((state_val_30371 === (5))){
var inst_30287 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30370__$1 = state_30370;
var statearr_30407_30448 = state_30370__$1;
(statearr_30407_30448[(2)] = inst_30287);

(statearr_30407_30448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (14))){
var inst_30314 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30314)){
var statearr_30408_30449 = state_30370__$1;
(statearr_30408_30449[(1)] = (18));

} else {
var statearr_30409_30450 = state_30370__$1;
(statearr_30409_30450[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (26))){
var inst_30340 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30370__$1 = state_30370;
if(cljs.core.truth_(inst_30340)){
var statearr_30410_30451 = state_30370__$1;
(statearr_30410_30451[(1)] = (30));

} else {
var statearr_30411_30452 = state_30370__$1;
(statearr_30411_30452[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (16))){
var inst_30306 = (state_30370[(2)]);
var inst_30307 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30308 = figwheel.client.heads_up.display_exception.call(null,inst_30307);
var state_30370__$1 = (function (){var statearr_30412 = state_30370;
(statearr_30412[(13)] = inst_30306);

return statearr_30412;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30370__$1,(17),inst_30308);
} else {
if((state_val_30371 === (30))){
var inst_30342 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30343 = figwheel.client.heads_up.display_warning.call(null,inst_30342);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30370__$1,(33),inst_30343);
} else {
if((state_val_30371 === (10))){
var inst_30300 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30413_30453 = state_30370__$1;
(statearr_30413_30453[(2)] = inst_30300);

(statearr_30413_30453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (18))){
var inst_30316 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30317 = figwheel.client.heads_up.display_exception.call(null,inst_30316);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30370__$1,(21),inst_30317);
} else {
if((state_val_30371 === (37))){
var inst_30353 = (state_30370[(2)]);
var state_30370__$1 = state_30370;
var statearr_30414_30454 = state_30370__$1;
(statearr_30414_30454[(2)] = inst_30353);

(statearr_30414_30454[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30371 === (8))){
var inst_30292 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30370__$1 = state_30370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30370__$1,(11),inst_30292);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24743__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24653__auto__,c__24743__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto____0 = (function (){
var statearr_30415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30415[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto__);

(statearr_30415[(1)] = (1));

return statearr_30415;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto____1 = (function (state_30370){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_30370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e30416){if((e30416 instanceof Object)){
var ex__24657__auto__ = e30416;
var statearr_30417_30455 = state_30370;
(statearr_30417_30455[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30456 = state_30370;
state_30370 = G__30456;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto__ = function(state_30370){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto____1.call(this,state_30370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto__,msg_hist,msg_names,msg))
})();
var state__24745__auto__ = (function (){var statearr_30418 = f__24744__auto__.call(null);
(statearr_30418[(6)] = c__24743__auto__);

return statearr_30418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto__,msg_hist,msg_names,msg))
);

return c__24743__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24743__auto___30485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___30485,ch){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___30485,ch){
return (function (state_30471){
var state_val_30472 = (state_30471[(1)]);
if((state_val_30472 === (1))){
var state_30471__$1 = state_30471;
var statearr_30473_30486 = state_30471__$1;
(statearr_30473_30486[(2)] = null);

(statearr_30473_30486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (2))){
var state_30471__$1 = state_30471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30471__$1,(4),ch);
} else {
if((state_val_30472 === (3))){
var inst_30469 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30471__$1,inst_30469);
} else {
if((state_val_30472 === (4))){
var inst_30459 = (state_30471[(7)]);
var inst_30459__$1 = (state_30471[(2)]);
var state_30471__$1 = (function (){var statearr_30474 = state_30471;
(statearr_30474[(7)] = inst_30459__$1);

return statearr_30474;
})();
if(cljs.core.truth_(inst_30459__$1)){
var statearr_30475_30487 = state_30471__$1;
(statearr_30475_30487[(1)] = (5));

} else {
var statearr_30476_30488 = state_30471__$1;
(statearr_30476_30488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (5))){
var inst_30459 = (state_30471[(7)]);
var inst_30461 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30459);
var state_30471__$1 = state_30471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30471__$1,(8),inst_30461);
} else {
if((state_val_30472 === (6))){
var state_30471__$1 = state_30471;
var statearr_30477_30489 = state_30471__$1;
(statearr_30477_30489[(2)] = null);

(statearr_30477_30489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (7))){
var inst_30467 = (state_30471[(2)]);
var state_30471__$1 = state_30471;
var statearr_30478_30490 = state_30471__$1;
(statearr_30478_30490[(2)] = inst_30467);

(statearr_30478_30490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30472 === (8))){
var inst_30463 = (state_30471[(2)]);
var state_30471__$1 = (function (){var statearr_30479 = state_30471;
(statearr_30479[(8)] = inst_30463);

return statearr_30479;
})();
var statearr_30480_30491 = state_30471__$1;
(statearr_30480_30491[(2)] = null);

(statearr_30480_30491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24743__auto___30485,ch))
;
return ((function (switch__24653__auto__,c__24743__auto___30485,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24654__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24654__auto____0 = (function (){
var statearr_30481 = [null,null,null,null,null,null,null,null,null];
(statearr_30481[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24654__auto__);

(statearr_30481[(1)] = (1));

return statearr_30481;
});
var figwheel$client$heads_up_plugin_$_state_machine__24654__auto____1 = (function (state_30471){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_30471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e30482){if((e30482 instanceof Object)){
var ex__24657__auto__ = e30482;
var statearr_30483_30492 = state_30471;
(statearr_30483_30492[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30493 = state_30471;
state_30471 = G__30493;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24654__auto__ = function(state_30471){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24654__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24654__auto____1.call(this,state_30471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24654__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24654__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___30485,ch))
})();
var state__24745__auto__ = (function (){var statearr_30484 = f__24744__auto__.call(null);
(statearr_30484[(6)] = c__24743__auto___30485);

return statearr_30484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___30485,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto__){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto__){
return (function (state_30499){
var state_val_30500 = (state_30499[(1)]);
if((state_val_30500 === (1))){
var inst_30494 = cljs.core.async.timeout.call(null,(3000));
var state_30499__$1 = state_30499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30499__$1,(2),inst_30494);
} else {
if((state_val_30500 === (2))){
var inst_30496 = (state_30499[(2)]);
var inst_30497 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30499__$1 = (function (){var statearr_30501 = state_30499;
(statearr_30501[(7)] = inst_30496);

return statearr_30501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30499__$1,inst_30497);
} else {
return null;
}
}
});})(c__24743__auto__))
;
return ((function (switch__24653__auto__,c__24743__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24654__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24654__auto____0 = (function (){
var statearr_30502 = [null,null,null,null,null,null,null,null];
(statearr_30502[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24654__auto__);

(statearr_30502[(1)] = (1));

return statearr_30502;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24654__auto____1 = (function (state_30499){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_30499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e30503){if((e30503 instanceof Object)){
var ex__24657__auto__ = e30503;
var statearr_30504_30506 = state_30499;
(statearr_30504_30506[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30507 = state_30499;
state_30499 = G__30507;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24654__auto__ = function(state_30499){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24654__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24654__auto____1.call(this,state_30499);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24654__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24654__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto__))
})();
var state__24745__auto__ = (function (){var statearr_30505 = f__24744__auto__.call(null);
(statearr_30505[(6)] = c__24743__auto__);

return statearr_30505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto__))
);

return c__24743__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto__,figwheel_version,temp__5457__auto__){
return (function (state_30514){
var state_val_30515 = (state_30514[(1)]);
if((state_val_30515 === (1))){
var inst_30508 = cljs.core.async.timeout.call(null,(2000));
var state_30514__$1 = state_30514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30514__$1,(2),inst_30508);
} else {
if((state_val_30515 === (2))){
var inst_30510 = (state_30514[(2)]);
var inst_30511 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30512 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30511);
var state_30514__$1 = (function (){var statearr_30516 = state_30514;
(statearr_30516[(7)] = inst_30510);

return statearr_30516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30514__$1,inst_30512);
} else {
return null;
}
}
});})(c__24743__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__24653__auto__,c__24743__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto____0 = (function (){
var statearr_30517 = [null,null,null,null,null,null,null,null];
(statearr_30517[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto__);

(statearr_30517[(1)] = (1));

return statearr_30517;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto____1 = (function (state_30514){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_30514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e30518){if((e30518 instanceof Object)){
var ex__24657__auto__ = e30518;
var statearr_30519_30521 = state_30514;
(statearr_30519_30521[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30522 = state_30514;
state_30514 = G__30522;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto__ = function(state_30514){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto____1.call(this,state_30514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto__,figwheel_version,temp__5457__auto__))
})();
var state__24745__auto__ = (function (){var statearr_30520 = f__24744__auto__.call(null);
(statearr_30520[(6)] = c__24743__auto__);

return statearr_30520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto__,figwheel_version,temp__5457__auto__))
);

return c__24743__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30523){
var map__30524 = p__30523;
var map__30524__$1 = ((((!((map__30524 == null)))?(((((map__30524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30524):map__30524);
var file = cljs.core.get.call(null,map__30524__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30524__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30524__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30526 = "";
var G__30526__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30526),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30526);
var G__30526__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30526__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30526__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30526__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30526__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30527){
var map__30528 = p__30527;
var map__30528__$1 = ((((!((map__30528 == null)))?(((((map__30528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30528):map__30528);
var ed = map__30528__$1;
var formatted_exception = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30530_30534 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30531_30535 = null;
var count__30532_30536 = (0);
var i__30533_30537 = (0);
while(true){
if((i__30533_30537 < count__30532_30536)){
var msg_30538 = cljs.core._nth.call(null,chunk__30531_30535,i__30533_30537);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30538);


var G__30539 = seq__30530_30534;
var G__30540 = chunk__30531_30535;
var G__30541 = count__30532_30536;
var G__30542 = (i__30533_30537 + (1));
seq__30530_30534 = G__30539;
chunk__30531_30535 = G__30540;
count__30532_30536 = G__30541;
i__30533_30537 = G__30542;
continue;
} else {
var temp__5457__auto___30543 = cljs.core.seq.call(null,seq__30530_30534);
if(temp__5457__auto___30543){
var seq__30530_30544__$1 = temp__5457__auto___30543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30530_30544__$1)){
var c__4319__auto___30545 = cljs.core.chunk_first.call(null,seq__30530_30544__$1);
var G__30546 = cljs.core.chunk_rest.call(null,seq__30530_30544__$1);
var G__30547 = c__4319__auto___30545;
var G__30548 = cljs.core.count.call(null,c__4319__auto___30545);
var G__30549 = (0);
seq__30530_30534 = G__30546;
chunk__30531_30535 = G__30547;
count__30532_30536 = G__30548;
i__30533_30537 = G__30549;
continue;
} else {
var msg_30550 = cljs.core.first.call(null,seq__30530_30544__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30550);


var G__30551 = cljs.core.next.call(null,seq__30530_30544__$1);
var G__30552 = null;
var G__30553 = (0);
var G__30554 = (0);
seq__30530_30534 = G__30551;
chunk__30531_30535 = G__30552;
count__30532_30536 = G__30553;
i__30533_30537 = G__30554;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30555){
var map__30556 = p__30555;
var map__30556__$1 = ((((!((map__30556 == null)))?(((((map__30556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30556):map__30556);
var w = map__30556__$1;
var message = cljs.core.get.call(null,map__30556__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/javascripts/cljs-dev/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/javascripts/cljs-dev/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30558 = cljs.core.seq.call(null,plugins);
var chunk__30559 = null;
var count__30560 = (0);
var i__30561 = (0);
while(true){
if((i__30561 < count__30560)){
var vec__30562 = cljs.core._nth.call(null,chunk__30559,i__30561);
var k = cljs.core.nth.call(null,vec__30562,(0),null);
var plugin = cljs.core.nth.call(null,vec__30562,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30568 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30558,chunk__30559,count__30560,i__30561,pl_30568,vec__30562,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30568.call(null,msg_hist);
});})(seq__30558,chunk__30559,count__30560,i__30561,pl_30568,vec__30562,k,plugin))
);
} else {
}


var G__30569 = seq__30558;
var G__30570 = chunk__30559;
var G__30571 = count__30560;
var G__30572 = (i__30561 + (1));
seq__30558 = G__30569;
chunk__30559 = G__30570;
count__30560 = G__30571;
i__30561 = G__30572;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30558);
if(temp__5457__auto__){
var seq__30558__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30558__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30558__$1);
var G__30573 = cljs.core.chunk_rest.call(null,seq__30558__$1);
var G__30574 = c__4319__auto__;
var G__30575 = cljs.core.count.call(null,c__4319__auto__);
var G__30576 = (0);
seq__30558 = G__30573;
chunk__30559 = G__30574;
count__30560 = G__30575;
i__30561 = G__30576;
continue;
} else {
var vec__30565 = cljs.core.first.call(null,seq__30558__$1);
var k = cljs.core.nth.call(null,vec__30565,(0),null);
var plugin = cljs.core.nth.call(null,vec__30565,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30577 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30558,chunk__30559,count__30560,i__30561,pl_30577,vec__30565,k,plugin,seq__30558__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30577.call(null,msg_hist);
});})(seq__30558,chunk__30559,count__30560,i__30561,pl_30577,vec__30565,k,plugin,seq__30558__$1,temp__5457__auto__))
);
} else {
}


var G__30578 = cljs.core.next.call(null,seq__30558__$1);
var G__30579 = null;
var G__30580 = (0);
var G__30581 = (0);
seq__30558 = G__30578;
chunk__30559 = G__30579;
count__30560 = G__30580;
i__30561 = G__30581;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30583 = arguments.length;
switch (G__30583) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30584_30589 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30585_30590 = null;
var count__30586_30591 = (0);
var i__30587_30592 = (0);
while(true){
if((i__30587_30592 < count__30586_30591)){
var msg_30593 = cljs.core._nth.call(null,chunk__30585_30590,i__30587_30592);
figwheel.client.socket.handle_incoming_message.call(null,msg_30593);


var G__30594 = seq__30584_30589;
var G__30595 = chunk__30585_30590;
var G__30596 = count__30586_30591;
var G__30597 = (i__30587_30592 + (1));
seq__30584_30589 = G__30594;
chunk__30585_30590 = G__30595;
count__30586_30591 = G__30596;
i__30587_30592 = G__30597;
continue;
} else {
var temp__5457__auto___30598 = cljs.core.seq.call(null,seq__30584_30589);
if(temp__5457__auto___30598){
var seq__30584_30599__$1 = temp__5457__auto___30598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30584_30599__$1)){
var c__4319__auto___30600 = cljs.core.chunk_first.call(null,seq__30584_30599__$1);
var G__30601 = cljs.core.chunk_rest.call(null,seq__30584_30599__$1);
var G__30602 = c__4319__auto___30600;
var G__30603 = cljs.core.count.call(null,c__4319__auto___30600);
var G__30604 = (0);
seq__30584_30589 = G__30601;
chunk__30585_30590 = G__30602;
count__30586_30591 = G__30603;
i__30587_30592 = G__30604;
continue;
} else {
var msg_30605 = cljs.core.first.call(null,seq__30584_30599__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30605);


var G__30606 = cljs.core.next.call(null,seq__30584_30599__$1);
var G__30607 = null;
var G__30608 = (0);
var G__30609 = (0);
seq__30584_30589 = G__30606;
chunk__30585_30590 = G__30607;
count__30586_30591 = G__30608;
i__30587_30592 = G__30609;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30614 = arguments.length;
var i__4500__auto___30615 = (0);
while(true){
if((i__4500__auto___30615 < len__4499__auto___30614)){
args__4502__auto__.push((arguments[i__4500__auto___30615]));

var G__30616 = (i__4500__auto___30615 + (1));
i__4500__auto___30615 = G__30616;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30611){
var map__30612 = p__30611;
var map__30612__$1 = ((((!((map__30612 == null)))?(((((map__30612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30612):map__30612);
var opts = map__30612__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30610){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30610));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30617){if((e30617 instanceof Error)){
var e = e30617;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30617;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30618){
var map__30619 = p__30618;
var map__30619__$1 = ((((!((map__30619 == null)))?(((((map__30619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30619):map__30619);
var msg_name = cljs.core.get.call(null,map__30619__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1527566163584
