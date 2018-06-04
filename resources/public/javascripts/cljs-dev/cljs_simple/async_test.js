// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs_simple.async_test');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
console.log("hello world");
var c_26687 = cljs.core.async.chan.call(null);
cljs.core.async.close_BANG_.call(null,c_26687);
var c_26688 = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,c_26688,"async with callbacks");

cljs.core.async.take_BANG_.call(null,c_26688,cljs.core.println);
var c__24743__auto___26704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___26704){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___26704){
return (function (state_26696){
var state_val_26697 = (state_26696[(1)]);
if((state_val_26697 === (1))){
var inst_26689 = (state_26696[(7)]);
var inst_26689__$1 = cljs.core.async.chan.call(null,(1));
var state_26696__$1 = (function (){var statearr_26698 = state_26696;
(statearr_26698[(7)] = inst_26689__$1);

return statearr_26698;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26696__$1,(2),inst_26689__$1,"async, but looks like sync");
} else {
if((state_val_26697 === (2))){
var inst_26689 = (state_26696[(7)]);
var inst_26691 = (state_26696[(2)]);
var state_26696__$1 = (function (){var statearr_26699 = state_26696;
(statearr_26699[(8)] = inst_26691);

return statearr_26699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26696__$1,(3),inst_26689);
} else {
if((state_val_26697 === (3))){
var inst_26693 = (state_26696[(2)]);
var inst_26694 = cljs.core.println.call(null,inst_26693);
var state_26696__$1 = state_26696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26696__$1,inst_26694);
} else {
return null;
}
}
}
});})(c__24743__auto___26704))
;
return ((function (switch__24653__auto__,c__24743__auto___26704){
return (function() {
var cljs_simple$async_test$state_machine__24654__auto__ = null;
var cljs_simple$async_test$state_machine__24654__auto____0 = (function (){
var statearr_26700 = [null,null,null,null,null,null,null,null,null];
(statearr_26700[(0)] = cljs_simple$async_test$state_machine__24654__auto__);

(statearr_26700[(1)] = (1));

return statearr_26700;
});
var cljs_simple$async_test$state_machine__24654__auto____1 = (function (state_26696){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_26696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e26701){if((e26701 instanceof Object)){
var ex__24657__auto__ = e26701;
var statearr_26702_26705 = state_26696;
(statearr_26702_26705[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26706 = state_26696;
state_26696 = G__26706;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs_simple$async_test$state_machine__24654__auto__ = function(state_26696){
switch(arguments.length){
case 0:
return cljs_simple$async_test$state_machine__24654__auto____0.call(this);
case 1:
return cljs_simple$async_test$state_machine__24654__auto____1.call(this,state_26696);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_simple$async_test$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_simple$async_test$state_machine__24654__auto____0;
cljs_simple$async_test$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_simple$async_test$state_machine__24654__auto____1;
return cljs_simple$async_test$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___26704))
})();
var state__24745__auto__ = (function (){var statearr_26703 = f__24744__auto__.call(null);
(statearr_26703[(6)] = c__24743__auto___26704);

return statearr_26703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___26704))
);

cljs_simple.async_test.html = (function cljs_simple$async_test$html(){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"query",new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null);

new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"search"], null),"Search"], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"results"], null)], null);
});

//# sourceMappingURL=async_test.js.map?rel=1527566158015
