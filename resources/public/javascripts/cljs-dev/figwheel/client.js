// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9-SNAPSHOT";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args32131 = [];
var len__26199__auto___32134 = arguments.length;
var i__26200__auto___32135 = (0);
while(true){
if((i__26200__auto___32135 < len__26199__auto___32134)){
args32131.push((arguments[i__26200__auto___32135]));

var G__32136 = (i__26200__auto___32135 + (1));
i__26200__auto___32135 = G__32136;
continue;
} else {
}
break;
}

var G__32133 = args32131.length;
switch (G__32133) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32131.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

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
var args__26206__auto__ = [];
var len__26199__auto___32139 = arguments.length;
var i__26200__auto___32140 = (0);
while(true){
if((i__26200__auto___32140 < len__26199__auto___32139)){
args__26206__auto__.push((arguments[i__26200__auto___32140]));

var G__32141 = (i__26200__auto___32140 + (1));
i__26200__auto___32140 = G__32141;
continue;
} else {
}
break;
}

var argseq__26207__auto__ = ((((0) < args__26206__auto__.length))?(new cljs.core.IndexedSeq(args__26206__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26207__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32138){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32138));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26206__auto__ = [];
var len__26199__auto___32143 = arguments.length;
var i__26200__auto___32144 = (0);
while(true){
if((i__26200__auto___32144 < len__26199__auto___32143)){
args__26206__auto__.push((arguments[i__26200__auto___32144]));

var G__32145 = (i__26200__auto___32144 + (1));
i__26200__auto___32144 = G__32145;
continue;
} else {
}
break;
}

var argseq__26207__auto__ = ((((0) < args__26206__auto__.length))?(new cljs.core.IndexedSeq(args__26206__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26207__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32142){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32142));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

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
if((b === true) || (b === false)){
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
if((b === true) || (b === false)){
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32146){
var map__32149 = p__32146;
var map__32149__$1 = ((((!((map__32149 == null)))?((((map__32149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32149):map__32149);
var message = cljs.core.get.call(null,map__32149__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32149__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25091__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25091__auto__)){
return or__25091__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25079__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25079__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25079__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
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
var c__29496__auto___32311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29496__auto___32311,ch){
return (function (){
var f__29497__auto__ = (function (){var switch__29475__auto__ = ((function (c__29496__auto___32311,ch){
return (function (state_32280){
var state_val_32281 = (state_32280[(1)]);
if((state_val_32281 === (7))){
var inst_32276 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32282_32312 = state_32280__$1;
(statearr_32282_32312[(2)] = inst_32276);

(statearr_32282_32312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (1))){
var state_32280__$1 = state_32280;
var statearr_32283_32313 = state_32280__$1;
(statearr_32283_32313[(2)] = null);

(statearr_32283_32313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (4))){
var inst_32233 = (state_32280[(7)]);
var inst_32233__$1 = (state_32280[(2)]);
var state_32280__$1 = (function (){var statearr_32284 = state_32280;
(statearr_32284[(7)] = inst_32233__$1);

return statearr_32284;
})();
if(cljs.core.truth_(inst_32233__$1)){
var statearr_32285_32314 = state_32280__$1;
(statearr_32285_32314[(1)] = (5));

} else {
var statearr_32286_32315 = state_32280__$1;
(statearr_32286_32315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (15))){
var inst_32240 = (state_32280[(8)]);
var inst_32255 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32240);
var inst_32256 = cljs.core.first.call(null,inst_32255);
var inst_32257 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32256);
var inst_32258 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32257)].join('');
var inst_32259 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32258);
var state_32280__$1 = state_32280;
var statearr_32287_32316 = state_32280__$1;
(statearr_32287_32316[(2)] = inst_32259);

(statearr_32287_32316[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (13))){
var inst_32264 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32288_32317 = state_32280__$1;
(statearr_32288_32317[(2)] = inst_32264);

(statearr_32288_32317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (6))){
var state_32280__$1 = state_32280;
var statearr_32289_32318 = state_32280__$1;
(statearr_32289_32318[(2)] = null);

(statearr_32289_32318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (17))){
var inst_32262 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32290_32319 = state_32280__$1;
(statearr_32290_32319[(2)] = inst_32262);

(statearr_32290_32319[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (3))){
var inst_32278 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32280__$1,inst_32278);
} else {
if((state_val_32281 === (12))){
var inst_32239 = (state_32280[(9)]);
var inst_32253 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32239,opts);
var state_32280__$1 = state_32280;
if(cljs.core.truth_(inst_32253)){
var statearr_32291_32320 = state_32280__$1;
(statearr_32291_32320[(1)] = (15));

} else {
var statearr_32292_32321 = state_32280__$1;
(statearr_32292_32321[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (2))){
var state_32280__$1 = state_32280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32280__$1,(4),ch);
} else {
if((state_val_32281 === (11))){
var inst_32240 = (state_32280[(8)]);
var inst_32245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32246 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32240);
var inst_32247 = cljs.core.async.timeout.call(null,(1000));
var inst_32248 = [inst_32246,inst_32247];
var inst_32249 = (new cljs.core.PersistentVector(null,2,(5),inst_32245,inst_32248,null));
var state_32280__$1 = state_32280;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32280__$1,(14),inst_32249);
} else {
if((state_val_32281 === (9))){
var inst_32240 = (state_32280[(8)]);
var inst_32266 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32267 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32240);
var inst_32268 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32267);
var inst_32269 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32268)].join('');
var inst_32270 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32269);
var state_32280__$1 = (function (){var statearr_32293 = state_32280;
(statearr_32293[(10)] = inst_32266);

return statearr_32293;
})();
var statearr_32294_32322 = state_32280__$1;
(statearr_32294_32322[(2)] = inst_32270);

(statearr_32294_32322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (5))){
var inst_32233 = (state_32280[(7)]);
var inst_32235 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32236 = (new cljs.core.PersistentArrayMap(null,2,inst_32235,null));
var inst_32237 = (new cljs.core.PersistentHashSet(null,inst_32236,null));
var inst_32238 = figwheel.client.focus_msgs.call(null,inst_32237,inst_32233);
var inst_32239 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32238);
var inst_32240 = cljs.core.first.call(null,inst_32238);
var inst_32241 = figwheel.client.autoload_QMARK_.call(null);
var state_32280__$1 = (function (){var statearr_32295 = state_32280;
(statearr_32295[(8)] = inst_32240);

(statearr_32295[(9)] = inst_32239);

return statearr_32295;
})();
if(cljs.core.truth_(inst_32241)){
var statearr_32296_32323 = state_32280__$1;
(statearr_32296_32323[(1)] = (8));

} else {
var statearr_32297_32324 = state_32280__$1;
(statearr_32297_32324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (14))){
var inst_32251 = (state_32280[(2)]);
var state_32280__$1 = state_32280;
var statearr_32298_32325 = state_32280__$1;
(statearr_32298_32325[(2)] = inst_32251);

(statearr_32298_32325[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (16))){
var state_32280__$1 = state_32280;
var statearr_32299_32326 = state_32280__$1;
(statearr_32299_32326[(2)] = null);

(statearr_32299_32326[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (10))){
var inst_32272 = (state_32280[(2)]);
var state_32280__$1 = (function (){var statearr_32300 = state_32280;
(statearr_32300[(11)] = inst_32272);

return statearr_32300;
})();
var statearr_32301_32327 = state_32280__$1;
(statearr_32301_32327[(2)] = null);

(statearr_32301_32327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32281 === (8))){
var inst_32239 = (state_32280[(9)]);
var inst_32243 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32239,opts);
var state_32280__$1 = state_32280;
if(cljs.core.truth_(inst_32243)){
var statearr_32302_32328 = state_32280__$1;
(statearr_32302_32328[(1)] = (11));

} else {
var statearr_32303_32329 = state_32280__$1;
(statearr_32303_32329[(1)] = (12));

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
});})(c__29496__auto___32311,ch))
;
return ((function (switch__29475__auto__,c__29496__auto___32311,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29476__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29476__auto____0 = (function (){
var statearr_32307 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32307[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29476__auto__);

(statearr_32307[(1)] = (1));

return statearr_32307;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29476__auto____1 = (function (state_32280){
while(true){
var ret_value__29477__auto__ = (function (){try{while(true){
var result__29478__auto__ = switch__29475__auto__.call(null,state_32280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29478__auto__;
}
break;
}
}catch (e32308){if((e32308 instanceof Object)){
var ex__29479__auto__ = e32308;
var statearr_32309_32330 = state_32280;
(statearr_32309_32330[(5)] = ex__29479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32331 = state_32280;
state_32280 = G__32331;
continue;
} else {
return ret_value__29477__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29476__auto__ = function(state_32280){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29476__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29476__auto____1.call(this,state_32280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29476__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29476__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29476__auto__;
})()
;})(switch__29475__auto__,c__29496__auto___32311,ch))
})();
var state__29498__auto__ = (function (){var statearr_32310 = f__29497__auto__.call(null);
(statearr_32310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29496__auto___32311);

return statearr_32310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29498__auto__);
});})(c__29496__auto___32311,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32332_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32332_SHARP_));
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
var base_path_32335 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32335){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e32334){if((e32334 instanceof Error)){
var e = e32334;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32335], null));
} else {
var e = e32334;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_32335))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32336){
var map__32345 = p__32336;
var map__32345__$1 = ((((!((map__32345 == null)))?((((map__32345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32345.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32345):map__32345);
var opts = map__32345__$1;
var build_id = cljs.core.get.call(null,map__32345__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32345,map__32345__$1,opts,build_id){
return (function (p__32347){
var vec__32348 = p__32347;
var seq__32349 = cljs.core.seq.call(null,vec__32348);
var first__32350 = cljs.core.first.call(null,seq__32349);
var seq__32349__$1 = cljs.core.next.call(null,seq__32349);
var map__32351 = first__32350;
var map__32351__$1 = ((((!((map__32351 == null)))?((((map__32351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32351):map__32351);
var msg = map__32351__$1;
var msg_name = cljs.core.get.call(null,map__32351__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32349__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32348,seq__32349,first__32350,seq__32349__$1,map__32351,map__32351__$1,msg,msg_name,_,map__32345,map__32345__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32348,seq__32349,first__32350,seq__32349__$1,map__32351,map__32351__$1,msg,msg_name,_,map__32345,map__32345__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32345,map__32345__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32359){
var vec__32360 = p__32359;
var seq__32361 = cljs.core.seq.call(null,vec__32360);
var first__32362 = cljs.core.first.call(null,seq__32361);
var seq__32361__$1 = cljs.core.next.call(null,seq__32361);
var map__32363 = first__32362;
var map__32363__$1 = ((((!((map__32363 == null)))?((((map__32363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32363):map__32363);
var msg = map__32363__$1;
var msg_name = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32361__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32365){
var map__32377 = p__32365;
var map__32377__$1 = ((((!((map__32377 == null)))?((((map__32377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32377):map__32377);
var on_compile_warning = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32377__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32377,map__32377__$1,on_compile_warning,on_compile_fail){
return (function (p__32379){
var vec__32380 = p__32379;
var seq__32381 = cljs.core.seq.call(null,vec__32380);
var first__32382 = cljs.core.first.call(null,seq__32381);
var seq__32381__$1 = cljs.core.next.call(null,seq__32381);
var map__32383 = first__32382;
var map__32383__$1 = ((((!((map__32383 == null)))?((((map__32383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32383):map__32383);
var msg = map__32383__$1;
var msg_name = cljs.core.get.call(null,map__32383__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32381__$1;
var pred__32385 = cljs.core._EQ_;
var expr__32386 = msg_name;
if(cljs.core.truth_(pred__32385.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32386))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32385.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32386))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32377,map__32377__$1,on_compile_warning,on_compile_fail))
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
var c__29496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29496__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29497__auto__ = (function (){var switch__29475__auto__ = ((function (c__29496__auto__,msg_hist,msg_names,msg){
return (function (state_32614){
var state_val_32615 = (state_32614[(1)]);
if((state_val_32615 === (7))){
var inst_32534 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
if(cljs.core.truth_(inst_32534)){
var statearr_32616_32666 = state_32614__$1;
(statearr_32616_32666[(1)] = (8));

} else {
var statearr_32617_32667 = state_32614__$1;
(statearr_32617_32667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (20))){
var inst_32608 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32618_32668 = state_32614__$1;
(statearr_32618_32668[(2)] = inst_32608);

(statearr_32618_32668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (27))){
var inst_32604 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32619_32669 = state_32614__$1;
(statearr_32619_32669[(2)] = inst_32604);

(statearr_32619_32669[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (1))){
var inst_32527 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32614__$1 = state_32614;
if(cljs.core.truth_(inst_32527)){
var statearr_32620_32670 = state_32614__$1;
(statearr_32620_32670[(1)] = (2));

} else {
var statearr_32621_32671 = state_32614__$1;
(statearr_32621_32671[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (24))){
var inst_32606 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32622_32672 = state_32614__$1;
(statearr_32622_32672[(2)] = inst_32606);

(statearr_32622_32672[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (4))){
var inst_32612 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32614__$1,inst_32612);
} else {
if((state_val_32615 === (15))){
var inst_32610 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32623_32673 = state_32614__$1;
(statearr_32623_32673[(2)] = inst_32610);

(statearr_32623_32673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (21))){
var inst_32563 = (state_32614[(2)]);
var inst_32564 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32565 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32564);
var state_32614__$1 = (function (){var statearr_32624 = state_32614;
(statearr_32624[(7)] = inst_32563);

return statearr_32624;
})();
var statearr_32625_32674 = state_32614__$1;
(statearr_32625_32674[(2)] = inst_32565);

(statearr_32625_32674[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (31))){
var inst_32593 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32614__$1 = state_32614;
if(cljs.core.truth_(inst_32593)){
var statearr_32626_32675 = state_32614__$1;
(statearr_32626_32675[(1)] = (34));

} else {
var statearr_32627_32676 = state_32614__$1;
(statearr_32627_32676[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (32))){
var inst_32602 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32628_32677 = state_32614__$1;
(statearr_32628_32677[(2)] = inst_32602);

(statearr_32628_32677[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (33))){
var inst_32589 = (state_32614[(2)]);
var inst_32590 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32591 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32590);
var state_32614__$1 = (function (){var statearr_32629 = state_32614;
(statearr_32629[(8)] = inst_32589);

return statearr_32629;
})();
var statearr_32630_32678 = state_32614__$1;
(statearr_32630_32678[(2)] = inst_32591);

(statearr_32630_32678[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (13))){
var inst_32548 = figwheel.client.heads_up.clear.call(null);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,(16),inst_32548);
} else {
if((state_val_32615 === (22))){
var inst_32569 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32570 = figwheel.client.heads_up.append_warning_message.call(null,inst_32569);
var state_32614__$1 = state_32614;
var statearr_32631_32679 = state_32614__$1;
(statearr_32631_32679[(2)] = inst_32570);

(statearr_32631_32679[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (36))){
var inst_32600 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32632_32680 = state_32614__$1;
(statearr_32632_32680[(2)] = inst_32600);

(statearr_32632_32680[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (29))){
var inst_32580 = (state_32614[(2)]);
var inst_32581 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32582 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32581);
var state_32614__$1 = (function (){var statearr_32633 = state_32614;
(statearr_32633[(9)] = inst_32580);

return statearr_32633;
})();
var statearr_32634_32681 = state_32614__$1;
(statearr_32634_32681[(2)] = inst_32582);

(statearr_32634_32681[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (6))){
var inst_32529 = (state_32614[(10)]);
var state_32614__$1 = state_32614;
var statearr_32635_32682 = state_32614__$1;
(statearr_32635_32682[(2)] = inst_32529);

(statearr_32635_32682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (28))){
var inst_32576 = (state_32614[(2)]);
var inst_32577 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32578 = figwheel.client.heads_up.display_warning.call(null,inst_32577);
var state_32614__$1 = (function (){var statearr_32636 = state_32614;
(statearr_32636[(11)] = inst_32576);

return statearr_32636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,(29),inst_32578);
} else {
if((state_val_32615 === (25))){
var inst_32574 = figwheel.client.heads_up.clear.call(null);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,(28),inst_32574);
} else {
if((state_val_32615 === (34))){
var inst_32595 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,(37),inst_32595);
} else {
if((state_val_32615 === (17))){
var inst_32554 = (state_32614[(2)]);
var inst_32555 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32556 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32555);
var state_32614__$1 = (function (){var statearr_32637 = state_32614;
(statearr_32637[(12)] = inst_32554);

return statearr_32637;
})();
var statearr_32638_32683 = state_32614__$1;
(statearr_32638_32683[(2)] = inst_32556);

(statearr_32638_32683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (3))){
var inst_32546 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32614__$1 = state_32614;
if(cljs.core.truth_(inst_32546)){
var statearr_32639_32684 = state_32614__$1;
(statearr_32639_32684[(1)] = (13));

} else {
var statearr_32640_32685 = state_32614__$1;
(statearr_32640_32685[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (12))){
var inst_32542 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32641_32686 = state_32614__$1;
(statearr_32641_32686[(2)] = inst_32542);

(statearr_32641_32686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (2))){
var inst_32529 = (state_32614[(10)]);
var inst_32529__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32614__$1 = (function (){var statearr_32642 = state_32614;
(statearr_32642[(10)] = inst_32529__$1);

return statearr_32642;
})();
if(cljs.core.truth_(inst_32529__$1)){
var statearr_32643_32687 = state_32614__$1;
(statearr_32643_32687[(1)] = (5));

} else {
var statearr_32644_32688 = state_32614__$1;
(statearr_32644_32688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (23))){
var inst_32572 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32614__$1 = state_32614;
if(cljs.core.truth_(inst_32572)){
var statearr_32645_32689 = state_32614__$1;
(statearr_32645_32689[(1)] = (25));

} else {
var statearr_32646_32690 = state_32614__$1;
(statearr_32646_32690[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (35))){
var state_32614__$1 = state_32614;
var statearr_32647_32691 = state_32614__$1;
(statearr_32647_32691[(2)] = null);

(statearr_32647_32691[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (19))){
var inst_32567 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32614__$1 = state_32614;
if(cljs.core.truth_(inst_32567)){
var statearr_32648_32692 = state_32614__$1;
(statearr_32648_32692[(1)] = (22));

} else {
var statearr_32649_32693 = state_32614__$1;
(statearr_32649_32693[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (11))){
var inst_32538 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32650_32694 = state_32614__$1;
(statearr_32650_32694[(2)] = inst_32538);

(statearr_32650_32694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (9))){
var inst_32540 = figwheel.client.heads_up.clear.call(null);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,(12),inst_32540);
} else {
if((state_val_32615 === (5))){
var inst_32531 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32614__$1 = state_32614;
var statearr_32651_32695 = state_32614__$1;
(statearr_32651_32695[(2)] = inst_32531);

(statearr_32651_32695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (14))){
var inst_32558 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32614__$1 = state_32614;
if(cljs.core.truth_(inst_32558)){
var statearr_32652_32696 = state_32614__$1;
(statearr_32652_32696[(1)] = (18));

} else {
var statearr_32653_32697 = state_32614__$1;
(statearr_32653_32697[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (26))){
var inst_32584 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32614__$1 = state_32614;
if(cljs.core.truth_(inst_32584)){
var statearr_32654_32698 = state_32614__$1;
(statearr_32654_32698[(1)] = (30));

} else {
var statearr_32655_32699 = state_32614__$1;
(statearr_32655_32699[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (16))){
var inst_32550 = (state_32614[(2)]);
var inst_32551 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32552 = figwheel.client.heads_up.display_exception.call(null,inst_32551);
var state_32614__$1 = (function (){var statearr_32656 = state_32614;
(statearr_32656[(13)] = inst_32550);

return statearr_32656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,(17),inst_32552);
} else {
if((state_val_32615 === (30))){
var inst_32586 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32587 = figwheel.client.heads_up.display_warning.call(null,inst_32586);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,(33),inst_32587);
} else {
if((state_val_32615 === (10))){
var inst_32544 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32657_32700 = state_32614__$1;
(statearr_32657_32700[(2)] = inst_32544);

(statearr_32657_32700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (18))){
var inst_32560 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32561 = figwheel.client.heads_up.display_exception.call(null,inst_32560);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,(21),inst_32561);
} else {
if((state_val_32615 === (37))){
var inst_32597 = (state_32614[(2)]);
var state_32614__$1 = state_32614;
var statearr_32658_32701 = state_32614__$1;
(statearr_32658_32701[(2)] = inst_32597);

(statearr_32658_32701[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32615 === (8))){
var inst_32536 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32614__$1 = state_32614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,(11),inst_32536);
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
});})(c__29496__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29475__auto__,c__29496__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto____0 = (function (){
var statearr_32662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32662[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto__);

(statearr_32662[(1)] = (1));

return statearr_32662;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto____1 = (function (state_32614){
while(true){
var ret_value__29477__auto__ = (function (){try{while(true){
var result__29478__auto__ = switch__29475__auto__.call(null,state_32614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29478__auto__;
}
break;
}
}catch (e32663){if((e32663 instanceof Object)){
var ex__29479__auto__ = e32663;
var statearr_32664_32702 = state_32614;
(statearr_32664_32702[(5)] = ex__29479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32703 = state_32614;
state_32614 = G__32703;
continue;
} else {
return ret_value__29477__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto__ = function(state_32614){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto____1.call(this,state_32614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29476__auto__;
})()
;})(switch__29475__auto__,c__29496__auto__,msg_hist,msg_names,msg))
})();
var state__29498__auto__ = (function (){var statearr_32665 = f__29497__auto__.call(null);
(statearr_32665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29496__auto__);

return statearr_32665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29498__auto__);
});})(c__29496__auto__,msg_hist,msg_names,msg))
);

return c__29496__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29496__auto___32766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29496__auto___32766,ch){
return (function (){
var f__29497__auto__ = (function (){var switch__29475__auto__ = ((function (c__29496__auto___32766,ch){
return (function (state_32749){
var state_val_32750 = (state_32749[(1)]);
if((state_val_32750 === (1))){
var state_32749__$1 = state_32749;
var statearr_32751_32767 = state_32749__$1;
(statearr_32751_32767[(2)] = null);

(statearr_32751_32767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32750 === (2))){
var state_32749__$1 = state_32749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32749__$1,(4),ch);
} else {
if((state_val_32750 === (3))){
var inst_32747 = (state_32749[(2)]);
var state_32749__$1 = state_32749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32749__$1,inst_32747);
} else {
if((state_val_32750 === (4))){
var inst_32737 = (state_32749[(7)]);
var inst_32737__$1 = (state_32749[(2)]);
var state_32749__$1 = (function (){var statearr_32752 = state_32749;
(statearr_32752[(7)] = inst_32737__$1);

return statearr_32752;
})();
if(cljs.core.truth_(inst_32737__$1)){
var statearr_32753_32768 = state_32749__$1;
(statearr_32753_32768[(1)] = (5));

} else {
var statearr_32754_32769 = state_32749__$1;
(statearr_32754_32769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32750 === (5))){
var inst_32737 = (state_32749[(7)]);
var inst_32739 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32737);
var state_32749__$1 = state_32749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32749__$1,(8),inst_32739);
} else {
if((state_val_32750 === (6))){
var state_32749__$1 = state_32749;
var statearr_32755_32770 = state_32749__$1;
(statearr_32755_32770[(2)] = null);

(statearr_32755_32770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32750 === (7))){
var inst_32745 = (state_32749[(2)]);
var state_32749__$1 = state_32749;
var statearr_32756_32771 = state_32749__$1;
(statearr_32756_32771[(2)] = inst_32745);

(statearr_32756_32771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32750 === (8))){
var inst_32741 = (state_32749[(2)]);
var state_32749__$1 = (function (){var statearr_32757 = state_32749;
(statearr_32757[(8)] = inst_32741);

return statearr_32757;
})();
var statearr_32758_32772 = state_32749__$1;
(statearr_32758_32772[(2)] = null);

(statearr_32758_32772[(1)] = (2));


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
});})(c__29496__auto___32766,ch))
;
return ((function (switch__29475__auto__,c__29496__auto___32766,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29476__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29476__auto____0 = (function (){
var statearr_32762 = [null,null,null,null,null,null,null,null,null];
(statearr_32762[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29476__auto__);

(statearr_32762[(1)] = (1));

return statearr_32762;
});
var figwheel$client$heads_up_plugin_$_state_machine__29476__auto____1 = (function (state_32749){
while(true){
var ret_value__29477__auto__ = (function (){try{while(true){
var result__29478__auto__ = switch__29475__auto__.call(null,state_32749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29478__auto__;
}
break;
}
}catch (e32763){if((e32763 instanceof Object)){
var ex__29479__auto__ = e32763;
var statearr_32764_32773 = state_32749;
(statearr_32764_32773[(5)] = ex__29479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32774 = state_32749;
state_32749 = G__32774;
continue;
} else {
return ret_value__29477__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29476__auto__ = function(state_32749){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29476__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29476__auto____1.call(this,state_32749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29476__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29476__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29476__auto__;
})()
;})(switch__29475__auto__,c__29496__auto___32766,ch))
})();
var state__29498__auto__ = (function (){var statearr_32765 = f__29497__auto__.call(null);
(statearr_32765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29496__auto___32766);

return statearr_32765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29498__auto__);
});})(c__29496__auto___32766,ch))
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
var c__29496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29496__auto__){
return (function (){
var f__29497__auto__ = (function (){var switch__29475__auto__ = ((function (c__29496__auto__){
return (function (state_32795){
var state_val_32796 = (state_32795[(1)]);
if((state_val_32796 === (1))){
var inst_32790 = cljs.core.async.timeout.call(null,(3000));
var state_32795__$1 = state_32795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32795__$1,(2),inst_32790);
} else {
if((state_val_32796 === (2))){
var inst_32792 = (state_32795[(2)]);
var inst_32793 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32795__$1 = (function (){var statearr_32797 = state_32795;
(statearr_32797[(7)] = inst_32792);

return statearr_32797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32795__$1,inst_32793);
} else {
return null;
}
}
});})(c__29496__auto__))
;
return ((function (switch__29475__auto__,c__29496__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29476__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29476__auto____0 = (function (){
var statearr_32801 = [null,null,null,null,null,null,null,null];
(statearr_32801[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29476__auto__);

(statearr_32801[(1)] = (1));

return statearr_32801;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29476__auto____1 = (function (state_32795){
while(true){
var ret_value__29477__auto__ = (function (){try{while(true){
var result__29478__auto__ = switch__29475__auto__.call(null,state_32795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29478__auto__;
}
break;
}
}catch (e32802){if((e32802 instanceof Object)){
var ex__29479__auto__ = e32802;
var statearr_32803_32805 = state_32795;
(statearr_32803_32805[(5)] = ex__29479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32806 = state_32795;
state_32795 = G__32806;
continue;
} else {
return ret_value__29477__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29476__auto__ = function(state_32795){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29476__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29476__auto____1.call(this,state_32795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29476__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29476__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29476__auto__;
})()
;})(switch__29475__auto__,c__29496__auto__))
})();
var state__29498__auto__ = (function (){var statearr_32804 = f__29497__auto__.call(null);
(statearr_32804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29496__auto__);

return statearr_32804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29498__auto__);
});})(c__29496__auto__))
);

return c__29496__auto__;
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
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29496__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29496__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29497__auto__ = (function (){var switch__29475__auto__ = ((function (c__29496__auto__,figwheel_version,temp__4657__auto__){
return (function (state_32829){
var state_val_32830 = (state_32829[(1)]);
if((state_val_32830 === (1))){
var inst_32823 = cljs.core.async.timeout.call(null,(2000));
var state_32829__$1 = state_32829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32829__$1,(2),inst_32823);
} else {
if((state_val_32830 === (2))){
var inst_32825 = (state_32829[(2)]);
var inst_32826 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_32827 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32826);
var state_32829__$1 = (function (){var statearr_32831 = state_32829;
(statearr_32831[(7)] = inst_32825);

return statearr_32831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32829__$1,inst_32827);
} else {
return null;
}
}
});})(c__29496__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29475__auto__,c__29496__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto____0 = (function (){
var statearr_32835 = [null,null,null,null,null,null,null,null];
(statearr_32835[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto__);

(statearr_32835[(1)] = (1));

return statearr_32835;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto____1 = (function (state_32829){
while(true){
var ret_value__29477__auto__ = (function (){try{while(true){
var result__29478__auto__ = switch__29475__auto__.call(null,state_32829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29478__auto__;
}
break;
}
}catch (e32836){if((e32836 instanceof Object)){
var ex__29479__auto__ = e32836;
var statearr_32837_32839 = state_32829;
(statearr_32837_32839[(5)] = ex__29479__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32840 = state_32829;
state_32829 = G__32840;
continue;
} else {
return ret_value__29477__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto__ = function(state_32829){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto____1.call(this,state_32829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29476__auto__;
})()
;})(switch__29475__auto__,c__29496__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29498__auto__ = (function (){var statearr_32838 = f__29497__auto__.call(null);
(statearr_32838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29496__auto__);

return statearr_32838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29498__auto__);
});})(c__29496__auto__,figwheel_version,temp__4657__auto__))
);

return c__29496__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32841){
var map__32845 = p__32841;
var map__32845__$1 = ((((!((map__32845 == null)))?((((map__32845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32845):map__32845);
var file = cljs.core.get.call(null,map__32845__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32845__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32845__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32847 = "";
var G__32847__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__32847),cljs.core.str("file "),cljs.core.str(file)].join(''):G__32847);
var G__32847__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__32847__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__32847__$1);
if(cljs.core.truth_((function (){var and__25079__auto__ = line;
if(cljs.core.truth_(and__25079__auto__)){
return column;
} else {
return and__25079__auto__;
}
})())){
return [cljs.core.str(G__32847__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__32847__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32848){
var map__32855 = p__32848;
var map__32855__$1 = ((((!((map__32855 == null)))?((((map__32855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32855):map__32855);
var ed = map__32855__$1;
var formatted_exception = cljs.core.get.call(null,map__32855__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32855__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32855__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32857_32861 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32858_32862 = null;
var count__32859_32863 = (0);
var i__32860_32864 = (0);
while(true){
if((i__32860_32864 < count__32859_32863)){
var msg_32865 = cljs.core._nth.call(null,chunk__32858_32862,i__32860_32864);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32865);

var G__32866 = seq__32857_32861;
var G__32867 = chunk__32858_32862;
var G__32868 = count__32859_32863;
var G__32869 = (i__32860_32864 + (1));
seq__32857_32861 = G__32866;
chunk__32858_32862 = G__32867;
count__32859_32863 = G__32868;
i__32860_32864 = G__32869;
continue;
} else {
var temp__4657__auto___32870 = cljs.core.seq.call(null,seq__32857_32861);
if(temp__4657__auto___32870){
var seq__32857_32871__$1 = temp__4657__auto___32870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32857_32871__$1)){
var c__25905__auto___32872 = cljs.core.chunk_first.call(null,seq__32857_32871__$1);
var G__32873 = cljs.core.chunk_rest.call(null,seq__32857_32871__$1);
var G__32874 = c__25905__auto___32872;
var G__32875 = cljs.core.count.call(null,c__25905__auto___32872);
var G__32876 = (0);
seq__32857_32861 = G__32873;
chunk__32858_32862 = G__32874;
count__32859_32863 = G__32875;
i__32860_32864 = G__32876;
continue;
} else {
var msg_32877 = cljs.core.first.call(null,seq__32857_32871__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32877);

var G__32878 = cljs.core.next.call(null,seq__32857_32871__$1);
var G__32879 = null;
var G__32880 = (0);
var G__32881 = (0);
seq__32857_32861 = G__32878;
chunk__32858_32862 = G__32879;
count__32859_32863 = G__32880;
i__32860_32864 = G__32881;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32882){
var map__32885 = p__32882;
var map__32885__$1 = ((((!((map__32885 == null)))?((((map__32885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32885):map__32885);
var w = map__32885__$1;
var message = cljs.core.get.call(null,map__32885__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/javascripts/cljs-dev/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/javascripts/cljs-dev/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__25079__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25079__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25079__auto__;
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
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32897 = cljs.core.seq.call(null,plugins);
var chunk__32898 = null;
var count__32899 = (0);
var i__32900 = (0);
while(true){
if((i__32900 < count__32899)){
var vec__32901 = cljs.core._nth.call(null,chunk__32898,i__32900);
var k = cljs.core.nth.call(null,vec__32901,(0),null);
var plugin = cljs.core.nth.call(null,vec__32901,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32907 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32897,chunk__32898,count__32899,i__32900,pl_32907,vec__32901,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32907.call(null,msg_hist);
});})(seq__32897,chunk__32898,count__32899,i__32900,pl_32907,vec__32901,k,plugin))
);
} else {
}

var G__32908 = seq__32897;
var G__32909 = chunk__32898;
var G__32910 = count__32899;
var G__32911 = (i__32900 + (1));
seq__32897 = G__32908;
chunk__32898 = G__32909;
count__32899 = G__32910;
i__32900 = G__32911;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32897);
if(temp__4657__auto__){
var seq__32897__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32897__$1)){
var c__25905__auto__ = cljs.core.chunk_first.call(null,seq__32897__$1);
var G__32912 = cljs.core.chunk_rest.call(null,seq__32897__$1);
var G__32913 = c__25905__auto__;
var G__32914 = cljs.core.count.call(null,c__25905__auto__);
var G__32915 = (0);
seq__32897 = G__32912;
chunk__32898 = G__32913;
count__32899 = G__32914;
i__32900 = G__32915;
continue;
} else {
var vec__32904 = cljs.core.first.call(null,seq__32897__$1);
var k = cljs.core.nth.call(null,vec__32904,(0),null);
var plugin = cljs.core.nth.call(null,vec__32904,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32916 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32897,chunk__32898,count__32899,i__32900,pl_32916,vec__32904,k,plugin,seq__32897__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32916.call(null,msg_hist);
});})(seq__32897,chunk__32898,count__32899,i__32900,pl_32916,vec__32904,k,plugin,seq__32897__$1,temp__4657__auto__))
);
} else {
}

var G__32917 = cljs.core.next.call(null,seq__32897__$1);
var G__32918 = null;
var G__32919 = (0);
var G__32920 = (0);
seq__32897 = G__32917;
chunk__32898 = G__32918;
count__32899 = G__32919;
i__32900 = G__32920;
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
var args32921 = [];
var len__26199__auto___32928 = arguments.length;
var i__26200__auto___32929 = (0);
while(true){
if((i__26200__auto___32929 < len__26199__auto___32928)){
args32921.push((arguments[i__26200__auto___32929]));

var G__32930 = (i__26200__auto___32929 + (1));
i__26200__auto___32929 = G__32930;
continue;
} else {
}
break;
}

var G__32923 = args32921.length;
switch (G__32923) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32921.length)].join('')));

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

var seq__32924_32932 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32925_32933 = null;
var count__32926_32934 = (0);
var i__32927_32935 = (0);
while(true){
if((i__32927_32935 < count__32926_32934)){
var msg_32936 = cljs.core._nth.call(null,chunk__32925_32933,i__32927_32935);
figwheel.client.socket.handle_incoming_message.call(null,msg_32936);

var G__32937 = seq__32924_32932;
var G__32938 = chunk__32925_32933;
var G__32939 = count__32926_32934;
var G__32940 = (i__32927_32935 + (1));
seq__32924_32932 = G__32937;
chunk__32925_32933 = G__32938;
count__32926_32934 = G__32939;
i__32927_32935 = G__32940;
continue;
} else {
var temp__4657__auto___32941 = cljs.core.seq.call(null,seq__32924_32932);
if(temp__4657__auto___32941){
var seq__32924_32942__$1 = temp__4657__auto___32941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32924_32942__$1)){
var c__25905__auto___32943 = cljs.core.chunk_first.call(null,seq__32924_32942__$1);
var G__32944 = cljs.core.chunk_rest.call(null,seq__32924_32942__$1);
var G__32945 = c__25905__auto___32943;
var G__32946 = cljs.core.count.call(null,c__25905__auto___32943);
var G__32947 = (0);
seq__32924_32932 = G__32944;
chunk__32925_32933 = G__32945;
count__32926_32934 = G__32946;
i__32927_32935 = G__32947;
continue;
} else {
var msg_32948 = cljs.core.first.call(null,seq__32924_32942__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32948);

var G__32949 = cljs.core.next.call(null,seq__32924_32942__$1);
var G__32950 = null;
var G__32951 = (0);
var G__32952 = (0);
seq__32924_32932 = G__32949;
chunk__32925_32933 = G__32950;
count__32926_32934 = G__32951;
i__32927_32935 = G__32952;
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
var args__26206__auto__ = [];
var len__26199__auto___32957 = arguments.length;
var i__26200__auto___32958 = (0);
while(true){
if((i__26200__auto___32958 < len__26199__auto___32957)){
args__26206__auto__.push((arguments[i__26200__auto___32958]));

var G__32959 = (i__26200__auto___32958 + (1));
i__26200__auto___32958 = G__32959;
continue;
} else {
}
break;
}

var argseq__26207__auto__ = ((((0) < args__26206__auto__.length))?(new cljs.core.IndexedSeq(args__26206__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26207__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32954){
var map__32955 = p__32954;
var map__32955__$1 = ((((!((map__32955 == null)))?((((map__32955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32955):map__32955);
var opts = map__32955__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32953){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32953));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32961){if((e32961 instanceof Error)){
var e = e32961;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32961;

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
return (function (p__32965){
var map__32966 = p__32965;
var map__32966__$1 = ((((!((map__32966 == null)))?((((map__32966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32966):map__32966);
var msg_name = cljs.core.get.call(null,map__32966__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1485761770602