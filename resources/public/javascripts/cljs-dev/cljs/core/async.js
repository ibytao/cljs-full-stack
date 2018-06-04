// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24803 = arguments.length;
switch (G__24803) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24804 = (function (f,blockable,meta24805){
this.f = f;
this.blockable = blockable;
this.meta24805 = meta24805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24806,meta24805__$1){
var self__ = this;
var _24806__$1 = this;
return (new cljs.core.async.t_cljs$core$async24804(self__.f,self__.blockable,meta24805__$1));
});

cljs.core.async.t_cljs$core$async24804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24806){
var self__ = this;
var _24806__$1 = this;
return self__.meta24805;
});

cljs.core.async.t_cljs$core$async24804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24805","meta24805",-1056021932,null)], null);
});

cljs.core.async.t_cljs$core$async24804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24804";

cljs.core.async.t_cljs$core$async24804.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24804");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24804.
 */
cljs.core.async.__GT_t_cljs$core$async24804 = (function cljs$core$async$__GT_t_cljs$core$async24804(f__$1,blockable__$1,meta24805){
return (new cljs.core.async.t_cljs$core$async24804(f__$1,blockable__$1,meta24805));
});

}

return (new cljs.core.async.t_cljs$core$async24804(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__24810 = arguments.length;
switch (G__24810) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__24813 = arguments.length;
switch (G__24813) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__24816 = arguments.length;
switch (G__24816) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24818 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24818);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24818,ret){
return (function (){
return fn1.call(null,val_24818);
});})(val_24818,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__24820 = arguments.length;
switch (G__24820) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___24822 = n;
var x_24823 = (0);
while(true){
if((x_24823 < n__4376__auto___24822)){
(a[x_24823] = (0));

var G__24824 = (x_24823 + (1));
x_24823 = G__24824;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24825 = (i + (1));
i = G__24825;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24826 = (function (flag,meta24827){
this.flag = flag;
this.meta24827 = meta24827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24828,meta24827__$1){
var self__ = this;
var _24828__$1 = this;
return (new cljs.core.async.t_cljs$core$async24826(self__.flag,meta24827__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24828){
var self__ = this;
var _24828__$1 = this;
return self__.meta24827;
});})(flag))
;

cljs.core.async.t_cljs$core$async24826.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24826.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24826.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24827","meta24827",1528648436,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24826";

cljs.core.async.t_cljs$core$async24826.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24826");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24826.
 */
cljs.core.async.__GT_t_cljs$core$async24826 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24826(flag__$1,meta24827){
return (new cljs.core.async.t_cljs$core$async24826(flag__$1,meta24827));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24826(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24829 = (function (flag,cb,meta24830){
this.flag = flag;
this.cb = cb;
this.meta24830 = meta24830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24831,meta24830__$1){
var self__ = this;
var _24831__$1 = this;
return (new cljs.core.async.t_cljs$core$async24829(self__.flag,self__.cb,meta24830__$1));
});

cljs.core.async.t_cljs$core$async24829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24831){
var self__ = this;
var _24831__$1 = this;
return self__.meta24830;
});

cljs.core.async.t_cljs$core$async24829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24830","meta24830",1150691810,null)], null);
});

cljs.core.async.t_cljs$core$async24829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24829";

cljs.core.async.t_cljs$core$async24829.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async24829");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24829.
 */
cljs.core.async.__GT_t_cljs$core$async24829 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24829(flag__$1,cb__$1,meta24830){
return (new cljs.core.async.t_cljs$core$async24829(flag__$1,cb__$1,meta24830));
});

}

return (new cljs.core.async.t_cljs$core$async24829(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24832_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24832_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24833_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24833_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24834 = (i + (1));
i = G__24834;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24840 = arguments.length;
var i__4500__auto___24841 = (0);
while(true){
if((i__4500__auto___24841 < len__4499__auto___24840)){
args__4502__auto__.push((arguments[i__4500__auto___24841]));

var G__24842 = (i__4500__auto___24841 + (1));
i__4500__auto___24841 = G__24842;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24837){
var map__24838 = p__24837;
var map__24838__$1 = ((((!((map__24838 == null)))?(((((map__24838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24838):map__24838);
var opts = map__24838__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24835){
var G__24836 = cljs.core.first.call(null,seq24835);
var seq24835__$1 = cljs.core.next.call(null,seq24835);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24836,seq24835__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__24844 = arguments.length;
switch (G__24844) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24743__auto___24890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___24890){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___24890){
return (function (state_24868){
var state_val_24869 = (state_24868[(1)]);
if((state_val_24869 === (7))){
var inst_24864 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24870_24891 = state_24868__$1;
(statearr_24870_24891[(2)] = inst_24864);

(statearr_24870_24891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (1))){
var state_24868__$1 = state_24868;
var statearr_24871_24892 = state_24868__$1;
(statearr_24871_24892[(2)] = null);

(statearr_24871_24892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (4))){
var inst_24847 = (state_24868[(7)]);
var inst_24847__$1 = (state_24868[(2)]);
var inst_24848 = (inst_24847__$1 == null);
var state_24868__$1 = (function (){var statearr_24872 = state_24868;
(statearr_24872[(7)] = inst_24847__$1);

return statearr_24872;
})();
if(cljs.core.truth_(inst_24848)){
var statearr_24873_24893 = state_24868__$1;
(statearr_24873_24893[(1)] = (5));

} else {
var statearr_24874_24894 = state_24868__$1;
(statearr_24874_24894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (13))){
var state_24868__$1 = state_24868;
var statearr_24875_24895 = state_24868__$1;
(statearr_24875_24895[(2)] = null);

(statearr_24875_24895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (6))){
var inst_24847 = (state_24868[(7)]);
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24868__$1,(11),to,inst_24847);
} else {
if((state_val_24869 === (3))){
var inst_24866 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24868__$1,inst_24866);
} else {
if((state_val_24869 === (12))){
var state_24868__$1 = state_24868;
var statearr_24876_24896 = state_24868__$1;
(statearr_24876_24896[(2)] = null);

(statearr_24876_24896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (2))){
var state_24868__$1 = state_24868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24868__$1,(4),from);
} else {
if((state_val_24869 === (11))){
var inst_24857 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
if(cljs.core.truth_(inst_24857)){
var statearr_24877_24897 = state_24868__$1;
(statearr_24877_24897[(1)] = (12));

} else {
var statearr_24878_24898 = state_24868__$1;
(statearr_24878_24898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (9))){
var state_24868__$1 = state_24868;
var statearr_24879_24899 = state_24868__$1;
(statearr_24879_24899[(2)] = null);

(statearr_24879_24899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (5))){
var state_24868__$1 = state_24868;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24880_24900 = state_24868__$1;
(statearr_24880_24900[(1)] = (8));

} else {
var statearr_24881_24901 = state_24868__$1;
(statearr_24881_24901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (14))){
var inst_24862 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24882_24902 = state_24868__$1;
(statearr_24882_24902[(2)] = inst_24862);

(statearr_24882_24902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (10))){
var inst_24854 = (state_24868[(2)]);
var state_24868__$1 = state_24868;
var statearr_24883_24903 = state_24868__$1;
(statearr_24883_24903[(2)] = inst_24854);

(statearr_24883_24903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24869 === (8))){
var inst_24851 = cljs.core.async.close_BANG_.call(null,to);
var state_24868__$1 = state_24868;
var statearr_24884_24904 = state_24868__$1;
(statearr_24884_24904[(2)] = inst_24851);

(statearr_24884_24904[(1)] = (10));


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
});})(c__24743__auto___24890))
;
return ((function (switch__24653__auto__,c__24743__auto___24890){
return (function() {
var cljs$core$async$state_machine__24654__auto__ = null;
var cljs$core$async$state_machine__24654__auto____0 = (function (){
var statearr_24885 = [null,null,null,null,null,null,null,null];
(statearr_24885[(0)] = cljs$core$async$state_machine__24654__auto__);

(statearr_24885[(1)] = (1));

return statearr_24885;
});
var cljs$core$async$state_machine__24654__auto____1 = (function (state_24868){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_24868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e24886){if((e24886 instanceof Object)){
var ex__24657__auto__ = e24886;
var statearr_24887_24905 = state_24868;
(statearr_24887_24905[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24906 = state_24868;
state_24868 = G__24906;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$state_machine__24654__auto__ = function(state_24868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24654__auto____1.call(this,state_24868);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24654__auto____0;
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24654__auto____1;
return cljs$core$async$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___24890))
})();
var state__24745__auto__ = (function (){var statearr_24888 = f__24744__auto__.call(null);
(statearr_24888[(6)] = c__24743__auto___24890);

return statearr_24888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___24890))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24907){
var vec__24908 = p__24907;
var v = cljs.core.nth.call(null,vec__24908,(0),null);
var p = cljs.core.nth.call(null,vec__24908,(1),null);
var job = vec__24908;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24743__auto___25079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___25079,res,vec__24908,v,p,job,jobs,results){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___25079,res,vec__24908,v,p,job,jobs,results){
return (function (state_24915){
var state_val_24916 = (state_24915[(1)]);
if((state_val_24916 === (1))){
var state_24915__$1 = state_24915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24915__$1,(2),res,v);
} else {
if((state_val_24916 === (2))){
var inst_24912 = (state_24915[(2)]);
var inst_24913 = cljs.core.async.close_BANG_.call(null,res);
var state_24915__$1 = (function (){var statearr_24917 = state_24915;
(statearr_24917[(7)] = inst_24912);

return statearr_24917;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24915__$1,inst_24913);
} else {
return null;
}
}
});})(c__24743__auto___25079,res,vec__24908,v,p,job,jobs,results))
;
return ((function (switch__24653__auto__,c__24743__auto___25079,res,vec__24908,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0 = (function (){
var statearr_24918 = [null,null,null,null,null,null,null,null];
(statearr_24918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__);

(statearr_24918[(1)] = (1));

return statearr_24918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1 = (function (state_24915){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_24915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e24919){if((e24919 instanceof Object)){
var ex__24657__auto__ = e24919;
var statearr_24920_25080 = state_24915;
(statearr_24920_25080[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25081 = state_24915;
state_24915 = G__25081;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__ = function(state_24915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1.call(this,state_24915);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___25079,res,vec__24908,v,p,job,jobs,results))
})();
var state__24745__auto__ = (function (){var statearr_24921 = f__24744__auto__.call(null);
(statearr_24921[(6)] = c__24743__auto___25079);

return statearr_24921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___25079,res,vec__24908,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24922){
var vec__24923 = p__24922;
var v = cljs.core.nth.call(null,vec__24923,(0),null);
var p = cljs.core.nth.call(null,vec__24923,(1),null);
var job = vec__24923;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___25082 = n;
var __25083 = (0);
while(true){
if((__25083 < n__4376__auto___25082)){
var G__24926_25084 = type;
var G__24926_25085__$1 = (((G__24926_25084 instanceof cljs.core.Keyword))?G__24926_25084.fqn:null);
switch (G__24926_25085__$1) {
case "compute":
var c__24743__auto___25087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25083,c__24743__auto___25087,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (__25083,c__24743__auto___25087,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async){
return (function (state_24939){
var state_val_24940 = (state_24939[(1)]);
if((state_val_24940 === (1))){
var state_24939__$1 = state_24939;
var statearr_24941_25088 = state_24939__$1;
(statearr_24941_25088[(2)] = null);

(statearr_24941_25088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (2))){
var state_24939__$1 = state_24939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24939__$1,(4),jobs);
} else {
if((state_val_24940 === (3))){
var inst_24937 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24939__$1,inst_24937);
} else {
if((state_val_24940 === (4))){
var inst_24929 = (state_24939[(2)]);
var inst_24930 = process.call(null,inst_24929);
var state_24939__$1 = state_24939;
if(cljs.core.truth_(inst_24930)){
var statearr_24942_25089 = state_24939__$1;
(statearr_24942_25089[(1)] = (5));

} else {
var statearr_24943_25090 = state_24939__$1;
(statearr_24943_25090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (5))){
var state_24939__$1 = state_24939;
var statearr_24944_25091 = state_24939__$1;
(statearr_24944_25091[(2)] = null);

(statearr_24944_25091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (6))){
var state_24939__$1 = state_24939;
var statearr_24945_25092 = state_24939__$1;
(statearr_24945_25092[(2)] = null);

(statearr_24945_25092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24940 === (7))){
var inst_24935 = (state_24939[(2)]);
var state_24939__$1 = state_24939;
var statearr_24946_25093 = state_24939__$1;
(statearr_24946_25093[(2)] = inst_24935);

(statearr_24946_25093[(1)] = (3));


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
});})(__25083,c__24743__auto___25087,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async))
;
return ((function (__25083,switch__24653__auto__,c__24743__auto___25087,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0 = (function (){
var statearr_24947 = [null,null,null,null,null,null,null];
(statearr_24947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__);

(statearr_24947[(1)] = (1));

return statearr_24947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1 = (function (state_24939){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_24939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e24948){if((e24948 instanceof Object)){
var ex__24657__auto__ = e24948;
var statearr_24949_25094 = state_24939;
(statearr_24949_25094[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25095 = state_24939;
state_24939 = G__25095;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__ = function(state_24939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1.call(this,state_24939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__;
})()
;})(__25083,switch__24653__auto__,c__24743__auto___25087,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async))
})();
var state__24745__auto__ = (function (){var statearr_24950 = f__24744__auto__.call(null);
(statearr_24950[(6)] = c__24743__auto___25087);

return statearr_24950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(__25083,c__24743__auto___25087,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async))
);


break;
case "async":
var c__24743__auto___25096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25083,c__24743__auto___25096,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (__25083,c__24743__auto___25096,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async){
return (function (state_24963){
var state_val_24964 = (state_24963[(1)]);
if((state_val_24964 === (1))){
var state_24963__$1 = state_24963;
var statearr_24965_25097 = state_24963__$1;
(statearr_24965_25097[(2)] = null);

(statearr_24965_25097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (2))){
var state_24963__$1 = state_24963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24963__$1,(4),jobs);
} else {
if((state_val_24964 === (3))){
var inst_24961 = (state_24963[(2)]);
var state_24963__$1 = state_24963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24963__$1,inst_24961);
} else {
if((state_val_24964 === (4))){
var inst_24953 = (state_24963[(2)]);
var inst_24954 = async.call(null,inst_24953);
var state_24963__$1 = state_24963;
if(cljs.core.truth_(inst_24954)){
var statearr_24966_25098 = state_24963__$1;
(statearr_24966_25098[(1)] = (5));

} else {
var statearr_24967_25099 = state_24963__$1;
(statearr_24967_25099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (5))){
var state_24963__$1 = state_24963;
var statearr_24968_25100 = state_24963__$1;
(statearr_24968_25100[(2)] = null);

(statearr_24968_25100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (6))){
var state_24963__$1 = state_24963;
var statearr_24969_25101 = state_24963__$1;
(statearr_24969_25101[(2)] = null);

(statearr_24969_25101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24964 === (7))){
var inst_24959 = (state_24963[(2)]);
var state_24963__$1 = state_24963;
var statearr_24970_25102 = state_24963__$1;
(statearr_24970_25102[(2)] = inst_24959);

(statearr_24970_25102[(1)] = (3));


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
});})(__25083,c__24743__auto___25096,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async))
;
return ((function (__25083,switch__24653__auto__,c__24743__auto___25096,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0 = (function (){
var statearr_24971 = [null,null,null,null,null,null,null];
(statearr_24971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__);

(statearr_24971[(1)] = (1));

return statearr_24971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1 = (function (state_24963){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_24963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e24972){if((e24972 instanceof Object)){
var ex__24657__auto__ = e24972;
var statearr_24973_25103 = state_24963;
(statearr_24973_25103[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25104 = state_24963;
state_24963 = G__25104;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__ = function(state_24963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1.call(this,state_24963);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__;
})()
;})(__25083,switch__24653__auto__,c__24743__auto___25096,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async))
})();
var state__24745__auto__ = (function (){var statearr_24974 = f__24744__auto__.call(null);
(statearr_24974[(6)] = c__24743__auto___25096);

return statearr_24974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(__25083,c__24743__auto___25096,G__24926_25084,G__24926_25085__$1,n__4376__auto___25082,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24926_25085__$1)].join('')));

}

var G__25105 = (__25083 + (1));
__25083 = G__25105;
continue;
} else {
}
break;
}

var c__24743__auto___25106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___25106,jobs,results,process,async){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___25106,jobs,results,process,async){
return (function (state_24996){
var state_val_24997 = (state_24996[(1)]);
if((state_val_24997 === (1))){
var state_24996__$1 = state_24996;
var statearr_24998_25107 = state_24996__$1;
(statearr_24998_25107[(2)] = null);

(statearr_24998_25107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (2))){
var state_24996__$1 = state_24996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24996__$1,(4),from);
} else {
if((state_val_24997 === (3))){
var inst_24994 = (state_24996[(2)]);
var state_24996__$1 = state_24996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24996__$1,inst_24994);
} else {
if((state_val_24997 === (4))){
var inst_24977 = (state_24996[(7)]);
var inst_24977__$1 = (state_24996[(2)]);
var inst_24978 = (inst_24977__$1 == null);
var state_24996__$1 = (function (){var statearr_24999 = state_24996;
(statearr_24999[(7)] = inst_24977__$1);

return statearr_24999;
})();
if(cljs.core.truth_(inst_24978)){
var statearr_25000_25108 = state_24996__$1;
(statearr_25000_25108[(1)] = (5));

} else {
var statearr_25001_25109 = state_24996__$1;
(statearr_25001_25109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (5))){
var inst_24980 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24996__$1 = state_24996;
var statearr_25002_25110 = state_24996__$1;
(statearr_25002_25110[(2)] = inst_24980);

(statearr_25002_25110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (6))){
var inst_24982 = (state_24996[(8)]);
var inst_24977 = (state_24996[(7)]);
var inst_24982__$1 = cljs.core.async.chan.call(null,(1));
var inst_24983 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24984 = [inst_24977,inst_24982__$1];
var inst_24985 = (new cljs.core.PersistentVector(null,2,(5),inst_24983,inst_24984,null));
var state_24996__$1 = (function (){var statearr_25003 = state_24996;
(statearr_25003[(8)] = inst_24982__$1);

return statearr_25003;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24996__$1,(8),jobs,inst_24985);
} else {
if((state_val_24997 === (7))){
var inst_24992 = (state_24996[(2)]);
var state_24996__$1 = state_24996;
var statearr_25004_25111 = state_24996__$1;
(statearr_25004_25111[(2)] = inst_24992);

(statearr_25004_25111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (8))){
var inst_24982 = (state_24996[(8)]);
var inst_24987 = (state_24996[(2)]);
var state_24996__$1 = (function (){var statearr_25005 = state_24996;
(statearr_25005[(9)] = inst_24987);

return statearr_25005;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24996__$1,(9),results,inst_24982);
} else {
if((state_val_24997 === (9))){
var inst_24989 = (state_24996[(2)]);
var state_24996__$1 = (function (){var statearr_25006 = state_24996;
(statearr_25006[(10)] = inst_24989);

return statearr_25006;
})();
var statearr_25007_25112 = state_24996__$1;
(statearr_25007_25112[(2)] = null);

(statearr_25007_25112[(1)] = (2));


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
});})(c__24743__auto___25106,jobs,results,process,async))
;
return ((function (switch__24653__auto__,c__24743__auto___25106,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0 = (function (){
var statearr_25008 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__);

(statearr_25008[(1)] = (1));

return statearr_25008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1 = (function (state_24996){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_24996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e25009){if((e25009 instanceof Object)){
var ex__24657__auto__ = e25009;
var statearr_25010_25113 = state_24996;
(statearr_25010_25113[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25114 = state_24996;
state_24996 = G__25114;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__ = function(state_24996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1.call(this,state_24996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___25106,jobs,results,process,async))
})();
var state__24745__auto__ = (function (){var statearr_25011 = f__24744__auto__.call(null);
(statearr_25011[(6)] = c__24743__auto___25106);

return statearr_25011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___25106,jobs,results,process,async))
);


var c__24743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto__,jobs,results,process,async){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto__,jobs,results,process,async){
return (function (state_25049){
var state_val_25050 = (state_25049[(1)]);
if((state_val_25050 === (7))){
var inst_25045 = (state_25049[(2)]);
var state_25049__$1 = state_25049;
var statearr_25051_25115 = state_25049__$1;
(statearr_25051_25115[(2)] = inst_25045);

(statearr_25051_25115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (20))){
var state_25049__$1 = state_25049;
var statearr_25052_25116 = state_25049__$1;
(statearr_25052_25116[(2)] = null);

(statearr_25052_25116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (1))){
var state_25049__$1 = state_25049;
var statearr_25053_25117 = state_25049__$1;
(statearr_25053_25117[(2)] = null);

(statearr_25053_25117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (4))){
var inst_25014 = (state_25049[(7)]);
var inst_25014__$1 = (state_25049[(2)]);
var inst_25015 = (inst_25014__$1 == null);
var state_25049__$1 = (function (){var statearr_25054 = state_25049;
(statearr_25054[(7)] = inst_25014__$1);

return statearr_25054;
})();
if(cljs.core.truth_(inst_25015)){
var statearr_25055_25118 = state_25049__$1;
(statearr_25055_25118[(1)] = (5));

} else {
var statearr_25056_25119 = state_25049__$1;
(statearr_25056_25119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (15))){
var inst_25027 = (state_25049[(8)]);
var state_25049__$1 = state_25049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25049__$1,(18),to,inst_25027);
} else {
if((state_val_25050 === (21))){
var inst_25040 = (state_25049[(2)]);
var state_25049__$1 = state_25049;
var statearr_25057_25120 = state_25049__$1;
(statearr_25057_25120[(2)] = inst_25040);

(statearr_25057_25120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (13))){
var inst_25042 = (state_25049[(2)]);
var state_25049__$1 = (function (){var statearr_25058 = state_25049;
(statearr_25058[(9)] = inst_25042);

return statearr_25058;
})();
var statearr_25059_25121 = state_25049__$1;
(statearr_25059_25121[(2)] = null);

(statearr_25059_25121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (6))){
var inst_25014 = (state_25049[(7)]);
var state_25049__$1 = state_25049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25049__$1,(11),inst_25014);
} else {
if((state_val_25050 === (17))){
var inst_25035 = (state_25049[(2)]);
var state_25049__$1 = state_25049;
if(cljs.core.truth_(inst_25035)){
var statearr_25060_25122 = state_25049__$1;
(statearr_25060_25122[(1)] = (19));

} else {
var statearr_25061_25123 = state_25049__$1;
(statearr_25061_25123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (3))){
var inst_25047 = (state_25049[(2)]);
var state_25049__$1 = state_25049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25049__$1,inst_25047);
} else {
if((state_val_25050 === (12))){
var inst_25024 = (state_25049[(10)]);
var state_25049__$1 = state_25049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25049__$1,(14),inst_25024);
} else {
if((state_val_25050 === (2))){
var state_25049__$1 = state_25049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25049__$1,(4),results);
} else {
if((state_val_25050 === (19))){
var state_25049__$1 = state_25049;
var statearr_25062_25124 = state_25049__$1;
(statearr_25062_25124[(2)] = null);

(statearr_25062_25124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (11))){
var inst_25024 = (state_25049[(2)]);
var state_25049__$1 = (function (){var statearr_25063 = state_25049;
(statearr_25063[(10)] = inst_25024);

return statearr_25063;
})();
var statearr_25064_25125 = state_25049__$1;
(statearr_25064_25125[(2)] = null);

(statearr_25064_25125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (9))){
var state_25049__$1 = state_25049;
var statearr_25065_25126 = state_25049__$1;
(statearr_25065_25126[(2)] = null);

(statearr_25065_25126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (5))){
var state_25049__$1 = state_25049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25066_25127 = state_25049__$1;
(statearr_25066_25127[(1)] = (8));

} else {
var statearr_25067_25128 = state_25049__$1;
(statearr_25067_25128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (14))){
var inst_25029 = (state_25049[(11)]);
var inst_25027 = (state_25049[(8)]);
var inst_25027__$1 = (state_25049[(2)]);
var inst_25028 = (inst_25027__$1 == null);
var inst_25029__$1 = cljs.core.not.call(null,inst_25028);
var state_25049__$1 = (function (){var statearr_25068 = state_25049;
(statearr_25068[(11)] = inst_25029__$1);

(statearr_25068[(8)] = inst_25027__$1);

return statearr_25068;
})();
if(inst_25029__$1){
var statearr_25069_25129 = state_25049__$1;
(statearr_25069_25129[(1)] = (15));

} else {
var statearr_25070_25130 = state_25049__$1;
(statearr_25070_25130[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (16))){
var inst_25029 = (state_25049[(11)]);
var state_25049__$1 = state_25049;
var statearr_25071_25131 = state_25049__$1;
(statearr_25071_25131[(2)] = inst_25029);

(statearr_25071_25131[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (10))){
var inst_25021 = (state_25049[(2)]);
var state_25049__$1 = state_25049;
var statearr_25072_25132 = state_25049__$1;
(statearr_25072_25132[(2)] = inst_25021);

(statearr_25072_25132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (18))){
var inst_25032 = (state_25049[(2)]);
var state_25049__$1 = state_25049;
var statearr_25073_25133 = state_25049__$1;
(statearr_25073_25133[(2)] = inst_25032);

(statearr_25073_25133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25050 === (8))){
var inst_25018 = cljs.core.async.close_BANG_.call(null,to);
var state_25049__$1 = state_25049;
var statearr_25074_25134 = state_25049__$1;
(statearr_25074_25134[(2)] = inst_25018);

(statearr_25074_25134[(1)] = (10));


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
}
}
}
}
});})(c__24743__auto__,jobs,results,process,async))
;
return ((function (switch__24653__auto__,c__24743__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0 = (function (){
var statearr_25075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__);

(statearr_25075[(1)] = (1));

return statearr_25075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1 = (function (state_25049){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_25049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e25076){if((e25076 instanceof Object)){
var ex__24657__auto__ = e25076;
var statearr_25077_25135 = state_25049;
(statearr_25077_25135[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25136 = state_25049;
state_25049 = G__25136;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__ = function(state_25049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1.call(this,state_25049);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24654__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto__,jobs,results,process,async))
})();
var state__24745__auto__ = (function (){var statearr_25078 = f__24744__auto__.call(null);
(statearr_25078[(6)] = c__24743__auto__);

return statearr_25078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto__,jobs,results,process,async))
);

return c__24743__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__25138 = arguments.length;
switch (G__25138) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__25141 = arguments.length;
switch (G__25141) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__25144 = arguments.length;
switch (G__25144) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24743__auto___25193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___25193,tc,fc){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___25193,tc,fc){
return (function (state_25170){
var state_val_25171 = (state_25170[(1)]);
if((state_val_25171 === (7))){
var inst_25166 = (state_25170[(2)]);
var state_25170__$1 = state_25170;
var statearr_25172_25194 = state_25170__$1;
(statearr_25172_25194[(2)] = inst_25166);

(statearr_25172_25194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (1))){
var state_25170__$1 = state_25170;
var statearr_25173_25195 = state_25170__$1;
(statearr_25173_25195[(2)] = null);

(statearr_25173_25195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (4))){
var inst_25147 = (state_25170[(7)]);
var inst_25147__$1 = (state_25170[(2)]);
var inst_25148 = (inst_25147__$1 == null);
var state_25170__$1 = (function (){var statearr_25174 = state_25170;
(statearr_25174[(7)] = inst_25147__$1);

return statearr_25174;
})();
if(cljs.core.truth_(inst_25148)){
var statearr_25175_25196 = state_25170__$1;
(statearr_25175_25196[(1)] = (5));

} else {
var statearr_25176_25197 = state_25170__$1;
(statearr_25176_25197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (13))){
var state_25170__$1 = state_25170;
var statearr_25177_25198 = state_25170__$1;
(statearr_25177_25198[(2)] = null);

(statearr_25177_25198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (6))){
var inst_25147 = (state_25170[(7)]);
var inst_25153 = p.call(null,inst_25147);
var state_25170__$1 = state_25170;
if(cljs.core.truth_(inst_25153)){
var statearr_25178_25199 = state_25170__$1;
(statearr_25178_25199[(1)] = (9));

} else {
var statearr_25179_25200 = state_25170__$1;
(statearr_25179_25200[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (3))){
var inst_25168 = (state_25170[(2)]);
var state_25170__$1 = state_25170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25170__$1,inst_25168);
} else {
if((state_val_25171 === (12))){
var state_25170__$1 = state_25170;
var statearr_25180_25201 = state_25170__$1;
(statearr_25180_25201[(2)] = null);

(statearr_25180_25201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (2))){
var state_25170__$1 = state_25170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25170__$1,(4),ch);
} else {
if((state_val_25171 === (11))){
var inst_25147 = (state_25170[(7)]);
var inst_25157 = (state_25170[(2)]);
var state_25170__$1 = state_25170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25170__$1,(8),inst_25157,inst_25147);
} else {
if((state_val_25171 === (9))){
var state_25170__$1 = state_25170;
var statearr_25181_25202 = state_25170__$1;
(statearr_25181_25202[(2)] = tc);

(statearr_25181_25202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (5))){
var inst_25150 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25151 = cljs.core.async.close_BANG_.call(null,fc);
var state_25170__$1 = (function (){var statearr_25182 = state_25170;
(statearr_25182[(8)] = inst_25150);

return statearr_25182;
})();
var statearr_25183_25203 = state_25170__$1;
(statearr_25183_25203[(2)] = inst_25151);

(statearr_25183_25203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (14))){
var inst_25164 = (state_25170[(2)]);
var state_25170__$1 = state_25170;
var statearr_25184_25204 = state_25170__$1;
(statearr_25184_25204[(2)] = inst_25164);

(statearr_25184_25204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (10))){
var state_25170__$1 = state_25170;
var statearr_25185_25205 = state_25170__$1;
(statearr_25185_25205[(2)] = fc);

(statearr_25185_25205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (8))){
var inst_25159 = (state_25170[(2)]);
var state_25170__$1 = state_25170;
if(cljs.core.truth_(inst_25159)){
var statearr_25186_25206 = state_25170__$1;
(statearr_25186_25206[(1)] = (12));

} else {
var statearr_25187_25207 = state_25170__$1;
(statearr_25187_25207[(1)] = (13));

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
});})(c__24743__auto___25193,tc,fc))
;
return ((function (switch__24653__auto__,c__24743__auto___25193,tc,fc){
return (function() {
var cljs$core$async$state_machine__24654__auto__ = null;
var cljs$core$async$state_machine__24654__auto____0 = (function (){
var statearr_25188 = [null,null,null,null,null,null,null,null,null];
(statearr_25188[(0)] = cljs$core$async$state_machine__24654__auto__);

(statearr_25188[(1)] = (1));

return statearr_25188;
});
var cljs$core$async$state_machine__24654__auto____1 = (function (state_25170){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_25170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e25189){if((e25189 instanceof Object)){
var ex__24657__auto__ = e25189;
var statearr_25190_25208 = state_25170;
(statearr_25190_25208[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25209 = state_25170;
state_25170 = G__25209;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$state_machine__24654__auto__ = function(state_25170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24654__auto____1.call(this,state_25170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24654__auto____0;
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24654__auto____1;
return cljs$core$async$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___25193,tc,fc))
})();
var state__24745__auto__ = (function (){var statearr_25191 = f__24744__auto__.call(null);
(statearr_25191[(6)] = c__24743__auto___25193);

return statearr_25191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___25193,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto__){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto__){
return (function (state_25230){
var state_val_25231 = (state_25230[(1)]);
if((state_val_25231 === (7))){
var inst_25226 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25232_25250 = state_25230__$1;
(statearr_25232_25250[(2)] = inst_25226);

(statearr_25232_25250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (1))){
var inst_25210 = init;
var state_25230__$1 = (function (){var statearr_25233 = state_25230;
(statearr_25233[(7)] = inst_25210);

return statearr_25233;
})();
var statearr_25234_25251 = state_25230__$1;
(statearr_25234_25251[(2)] = null);

(statearr_25234_25251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (4))){
var inst_25213 = (state_25230[(8)]);
var inst_25213__$1 = (state_25230[(2)]);
var inst_25214 = (inst_25213__$1 == null);
var state_25230__$1 = (function (){var statearr_25235 = state_25230;
(statearr_25235[(8)] = inst_25213__$1);

return statearr_25235;
})();
if(cljs.core.truth_(inst_25214)){
var statearr_25236_25252 = state_25230__$1;
(statearr_25236_25252[(1)] = (5));

} else {
var statearr_25237_25253 = state_25230__$1;
(statearr_25237_25253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (6))){
var inst_25210 = (state_25230[(7)]);
var inst_25217 = (state_25230[(9)]);
var inst_25213 = (state_25230[(8)]);
var inst_25217__$1 = f.call(null,inst_25210,inst_25213);
var inst_25218 = cljs.core.reduced_QMARK_.call(null,inst_25217__$1);
var state_25230__$1 = (function (){var statearr_25238 = state_25230;
(statearr_25238[(9)] = inst_25217__$1);

return statearr_25238;
})();
if(inst_25218){
var statearr_25239_25254 = state_25230__$1;
(statearr_25239_25254[(1)] = (8));

} else {
var statearr_25240_25255 = state_25230__$1;
(statearr_25240_25255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (3))){
var inst_25228 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25230__$1,inst_25228);
} else {
if((state_val_25231 === (2))){
var state_25230__$1 = state_25230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25230__$1,(4),ch);
} else {
if((state_val_25231 === (9))){
var inst_25217 = (state_25230[(9)]);
var inst_25210 = inst_25217;
var state_25230__$1 = (function (){var statearr_25241 = state_25230;
(statearr_25241[(7)] = inst_25210);

return statearr_25241;
})();
var statearr_25242_25256 = state_25230__$1;
(statearr_25242_25256[(2)] = null);

(statearr_25242_25256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (5))){
var inst_25210 = (state_25230[(7)]);
var state_25230__$1 = state_25230;
var statearr_25243_25257 = state_25230__$1;
(statearr_25243_25257[(2)] = inst_25210);

(statearr_25243_25257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (10))){
var inst_25224 = (state_25230[(2)]);
var state_25230__$1 = state_25230;
var statearr_25244_25258 = state_25230__$1;
(statearr_25244_25258[(2)] = inst_25224);

(statearr_25244_25258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25231 === (8))){
var inst_25217 = (state_25230[(9)]);
var inst_25220 = cljs.core.deref.call(null,inst_25217);
var state_25230__$1 = state_25230;
var statearr_25245_25259 = state_25230__$1;
(statearr_25245_25259[(2)] = inst_25220);

(statearr_25245_25259[(1)] = (10));


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
});})(c__24743__auto__))
;
return ((function (switch__24653__auto__,c__24743__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24654__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24654__auto____0 = (function (){
var statearr_25246 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25246[(0)] = cljs$core$async$reduce_$_state_machine__24654__auto__);

(statearr_25246[(1)] = (1));

return statearr_25246;
});
var cljs$core$async$reduce_$_state_machine__24654__auto____1 = (function (state_25230){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_25230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e25247){if((e25247 instanceof Object)){
var ex__24657__auto__ = e25247;
var statearr_25248_25260 = state_25230;
(statearr_25248_25260[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25261 = state_25230;
state_25230 = G__25261;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24654__auto__ = function(state_25230){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24654__auto____1.call(this,state_25230);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24654__auto____0;
cljs$core$async$reduce_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24654__auto____1;
return cljs$core$async$reduce_$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto__))
})();
var state__24745__auto__ = (function (){var statearr_25249 = f__24744__auto__.call(null);
(statearr_25249[(6)] = c__24743__auto__);

return statearr_25249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto__))
);

return c__24743__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto__,f__$1){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto__,f__$1){
return (function (state_25267){
var state_val_25268 = (state_25267[(1)]);
if((state_val_25268 === (1))){
var inst_25262 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25267__$1 = state_25267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25267__$1,(2),inst_25262);
} else {
if((state_val_25268 === (2))){
var inst_25264 = (state_25267[(2)]);
var inst_25265 = f__$1.call(null,inst_25264);
var state_25267__$1 = state_25267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25267__$1,inst_25265);
} else {
return null;
}
}
});})(c__24743__auto__,f__$1))
;
return ((function (switch__24653__auto__,c__24743__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__24654__auto__ = null;
var cljs$core$async$transduce_$_state_machine__24654__auto____0 = (function (){
var statearr_25269 = [null,null,null,null,null,null,null];
(statearr_25269[(0)] = cljs$core$async$transduce_$_state_machine__24654__auto__);

(statearr_25269[(1)] = (1));

return statearr_25269;
});
var cljs$core$async$transduce_$_state_machine__24654__auto____1 = (function (state_25267){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_25267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e25270){if((e25270 instanceof Object)){
var ex__24657__auto__ = e25270;
var statearr_25271_25273 = state_25267;
(statearr_25271_25273[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25274 = state_25267;
state_25267 = G__25274;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__24654__auto__ = function(state_25267){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__24654__auto____1.call(this,state_25267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__24654__auto____0;
cljs$core$async$transduce_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__24654__auto____1;
return cljs$core$async$transduce_$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto__,f__$1))
})();
var state__24745__auto__ = (function (){var statearr_25272 = f__24744__auto__.call(null);
(statearr_25272[(6)] = c__24743__auto__);

return statearr_25272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto__,f__$1))
);

return c__24743__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__25276 = arguments.length;
switch (G__25276) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto__){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto__){
return (function (state_25301){
var state_val_25302 = (state_25301[(1)]);
if((state_val_25302 === (7))){
var inst_25283 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25303_25324 = state_25301__$1;
(statearr_25303_25324[(2)] = inst_25283);

(statearr_25303_25324[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (1))){
var inst_25277 = cljs.core.seq.call(null,coll);
var inst_25278 = inst_25277;
var state_25301__$1 = (function (){var statearr_25304 = state_25301;
(statearr_25304[(7)] = inst_25278);

return statearr_25304;
})();
var statearr_25305_25325 = state_25301__$1;
(statearr_25305_25325[(2)] = null);

(statearr_25305_25325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (4))){
var inst_25278 = (state_25301[(7)]);
var inst_25281 = cljs.core.first.call(null,inst_25278);
var state_25301__$1 = state_25301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25301__$1,(7),ch,inst_25281);
} else {
if((state_val_25302 === (13))){
var inst_25295 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25306_25326 = state_25301__$1;
(statearr_25306_25326[(2)] = inst_25295);

(statearr_25306_25326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (6))){
var inst_25286 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25286)){
var statearr_25307_25327 = state_25301__$1;
(statearr_25307_25327[(1)] = (8));

} else {
var statearr_25308_25328 = state_25301__$1;
(statearr_25308_25328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (3))){
var inst_25299 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25301__$1,inst_25299);
} else {
if((state_val_25302 === (12))){
var state_25301__$1 = state_25301;
var statearr_25309_25329 = state_25301__$1;
(statearr_25309_25329[(2)] = null);

(statearr_25309_25329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (2))){
var inst_25278 = (state_25301[(7)]);
var state_25301__$1 = state_25301;
if(cljs.core.truth_(inst_25278)){
var statearr_25310_25330 = state_25301__$1;
(statearr_25310_25330[(1)] = (4));

} else {
var statearr_25311_25331 = state_25301__$1;
(statearr_25311_25331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (11))){
var inst_25292 = cljs.core.async.close_BANG_.call(null,ch);
var state_25301__$1 = state_25301;
var statearr_25312_25332 = state_25301__$1;
(statearr_25312_25332[(2)] = inst_25292);

(statearr_25312_25332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (9))){
var state_25301__$1 = state_25301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25313_25333 = state_25301__$1;
(statearr_25313_25333[(1)] = (11));

} else {
var statearr_25314_25334 = state_25301__$1;
(statearr_25314_25334[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (5))){
var inst_25278 = (state_25301[(7)]);
var state_25301__$1 = state_25301;
var statearr_25315_25335 = state_25301__$1;
(statearr_25315_25335[(2)] = inst_25278);

(statearr_25315_25335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (10))){
var inst_25297 = (state_25301[(2)]);
var state_25301__$1 = state_25301;
var statearr_25316_25336 = state_25301__$1;
(statearr_25316_25336[(2)] = inst_25297);

(statearr_25316_25336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25302 === (8))){
var inst_25278 = (state_25301[(7)]);
var inst_25288 = cljs.core.next.call(null,inst_25278);
var inst_25278__$1 = inst_25288;
var state_25301__$1 = (function (){var statearr_25317 = state_25301;
(statearr_25317[(7)] = inst_25278__$1);

return statearr_25317;
})();
var statearr_25318_25337 = state_25301__$1;
(statearr_25318_25337[(2)] = null);

(statearr_25318_25337[(1)] = (2));


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
});})(c__24743__auto__))
;
return ((function (switch__24653__auto__,c__24743__auto__){
return (function() {
var cljs$core$async$state_machine__24654__auto__ = null;
var cljs$core$async$state_machine__24654__auto____0 = (function (){
var statearr_25319 = [null,null,null,null,null,null,null,null];
(statearr_25319[(0)] = cljs$core$async$state_machine__24654__auto__);

(statearr_25319[(1)] = (1));

return statearr_25319;
});
var cljs$core$async$state_machine__24654__auto____1 = (function (state_25301){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_25301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e25320){if((e25320 instanceof Object)){
var ex__24657__auto__ = e25320;
var statearr_25321_25338 = state_25301;
(statearr_25321_25338[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25339 = state_25301;
state_25301 = G__25339;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$state_machine__24654__auto__ = function(state_25301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24654__auto____1.call(this,state_25301);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24654__auto____0;
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24654__auto____1;
return cljs$core$async$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto__))
})();
var state__24745__auto__ = (function (){var statearr_25322 = f__24744__auto__.call(null);
(statearr_25322[(6)] = c__24743__auto__);

return statearr_25322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto__))
);

return c__24743__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25340 = (function (ch,cs,meta25341){
this.ch = ch;
this.cs = cs;
this.meta25341 = meta25341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25342,meta25341__$1){
var self__ = this;
var _25342__$1 = this;
return (new cljs.core.async.t_cljs$core$async25340(self__.ch,self__.cs,meta25341__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25342){
var self__ = this;
var _25342__$1 = this;
return self__.meta25341;
});})(cs))
;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25340.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25340.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25341","meta25341",-814876177,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25340";

cljs.core.async.t_cljs$core$async25340.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25340");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25340.
 */
cljs.core.async.__GT_t_cljs$core$async25340 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25340(ch__$1,cs__$1,meta25341){
return (new cljs.core.async.t_cljs$core$async25340(ch__$1,cs__$1,meta25341));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25340(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24743__auto___25562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___25562,cs,m,dchan,dctr,done){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___25562,cs,m,dchan,dctr,done){
return (function (state_25477){
var state_val_25478 = (state_25477[(1)]);
if((state_val_25478 === (7))){
var inst_25473 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
var statearr_25479_25563 = state_25477__$1;
(statearr_25479_25563[(2)] = inst_25473);

(statearr_25479_25563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (20))){
var inst_25376 = (state_25477[(7)]);
var inst_25388 = cljs.core.first.call(null,inst_25376);
var inst_25389 = cljs.core.nth.call(null,inst_25388,(0),null);
var inst_25390 = cljs.core.nth.call(null,inst_25388,(1),null);
var state_25477__$1 = (function (){var statearr_25480 = state_25477;
(statearr_25480[(8)] = inst_25389);

return statearr_25480;
})();
if(cljs.core.truth_(inst_25390)){
var statearr_25481_25564 = state_25477__$1;
(statearr_25481_25564[(1)] = (22));

} else {
var statearr_25482_25565 = state_25477__$1;
(statearr_25482_25565[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (27))){
var inst_25425 = (state_25477[(9)]);
var inst_25418 = (state_25477[(10)]);
var inst_25345 = (state_25477[(11)]);
var inst_25420 = (state_25477[(12)]);
var inst_25425__$1 = cljs.core._nth.call(null,inst_25418,inst_25420);
var inst_25426 = cljs.core.async.put_BANG_.call(null,inst_25425__$1,inst_25345,done);
var state_25477__$1 = (function (){var statearr_25483 = state_25477;
(statearr_25483[(9)] = inst_25425__$1);

return statearr_25483;
})();
if(cljs.core.truth_(inst_25426)){
var statearr_25484_25566 = state_25477__$1;
(statearr_25484_25566[(1)] = (30));

} else {
var statearr_25485_25567 = state_25477__$1;
(statearr_25485_25567[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (1))){
var state_25477__$1 = state_25477;
var statearr_25486_25568 = state_25477__$1;
(statearr_25486_25568[(2)] = null);

(statearr_25486_25568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (24))){
var inst_25376 = (state_25477[(7)]);
var inst_25395 = (state_25477[(2)]);
var inst_25396 = cljs.core.next.call(null,inst_25376);
var inst_25354 = inst_25396;
var inst_25355 = null;
var inst_25356 = (0);
var inst_25357 = (0);
var state_25477__$1 = (function (){var statearr_25487 = state_25477;
(statearr_25487[(13)] = inst_25356);

(statearr_25487[(14)] = inst_25357);

(statearr_25487[(15)] = inst_25355);

(statearr_25487[(16)] = inst_25395);

(statearr_25487[(17)] = inst_25354);

return statearr_25487;
})();
var statearr_25488_25569 = state_25477__$1;
(statearr_25488_25569[(2)] = null);

(statearr_25488_25569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (39))){
var state_25477__$1 = state_25477;
var statearr_25492_25570 = state_25477__$1;
(statearr_25492_25570[(2)] = null);

(statearr_25492_25570[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (4))){
var inst_25345 = (state_25477[(11)]);
var inst_25345__$1 = (state_25477[(2)]);
var inst_25346 = (inst_25345__$1 == null);
var state_25477__$1 = (function (){var statearr_25493 = state_25477;
(statearr_25493[(11)] = inst_25345__$1);

return statearr_25493;
})();
if(cljs.core.truth_(inst_25346)){
var statearr_25494_25571 = state_25477__$1;
(statearr_25494_25571[(1)] = (5));

} else {
var statearr_25495_25572 = state_25477__$1;
(statearr_25495_25572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (15))){
var inst_25356 = (state_25477[(13)]);
var inst_25357 = (state_25477[(14)]);
var inst_25355 = (state_25477[(15)]);
var inst_25354 = (state_25477[(17)]);
var inst_25372 = (state_25477[(2)]);
var inst_25373 = (inst_25357 + (1));
var tmp25489 = inst_25356;
var tmp25490 = inst_25355;
var tmp25491 = inst_25354;
var inst_25354__$1 = tmp25491;
var inst_25355__$1 = tmp25490;
var inst_25356__$1 = tmp25489;
var inst_25357__$1 = inst_25373;
var state_25477__$1 = (function (){var statearr_25496 = state_25477;
(statearr_25496[(13)] = inst_25356__$1);

(statearr_25496[(14)] = inst_25357__$1);

(statearr_25496[(18)] = inst_25372);

(statearr_25496[(15)] = inst_25355__$1);

(statearr_25496[(17)] = inst_25354__$1);

return statearr_25496;
})();
var statearr_25497_25573 = state_25477__$1;
(statearr_25497_25573[(2)] = null);

(statearr_25497_25573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (21))){
var inst_25399 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
var statearr_25501_25574 = state_25477__$1;
(statearr_25501_25574[(2)] = inst_25399);

(statearr_25501_25574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (31))){
var inst_25425 = (state_25477[(9)]);
var inst_25429 = done.call(null,null);
var inst_25430 = cljs.core.async.untap_STAR_.call(null,m,inst_25425);
var state_25477__$1 = (function (){var statearr_25502 = state_25477;
(statearr_25502[(19)] = inst_25429);

return statearr_25502;
})();
var statearr_25503_25575 = state_25477__$1;
(statearr_25503_25575[(2)] = inst_25430);

(statearr_25503_25575[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (32))){
var inst_25418 = (state_25477[(10)]);
var inst_25417 = (state_25477[(20)]);
var inst_25419 = (state_25477[(21)]);
var inst_25420 = (state_25477[(12)]);
var inst_25432 = (state_25477[(2)]);
var inst_25433 = (inst_25420 + (1));
var tmp25498 = inst_25418;
var tmp25499 = inst_25417;
var tmp25500 = inst_25419;
var inst_25417__$1 = tmp25499;
var inst_25418__$1 = tmp25498;
var inst_25419__$1 = tmp25500;
var inst_25420__$1 = inst_25433;
var state_25477__$1 = (function (){var statearr_25504 = state_25477;
(statearr_25504[(22)] = inst_25432);

(statearr_25504[(10)] = inst_25418__$1);

(statearr_25504[(20)] = inst_25417__$1);

(statearr_25504[(21)] = inst_25419__$1);

(statearr_25504[(12)] = inst_25420__$1);

return statearr_25504;
})();
var statearr_25505_25576 = state_25477__$1;
(statearr_25505_25576[(2)] = null);

(statearr_25505_25576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (40))){
var inst_25445 = (state_25477[(23)]);
var inst_25449 = done.call(null,null);
var inst_25450 = cljs.core.async.untap_STAR_.call(null,m,inst_25445);
var state_25477__$1 = (function (){var statearr_25506 = state_25477;
(statearr_25506[(24)] = inst_25449);

return statearr_25506;
})();
var statearr_25507_25577 = state_25477__$1;
(statearr_25507_25577[(2)] = inst_25450);

(statearr_25507_25577[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (33))){
var inst_25436 = (state_25477[(25)]);
var inst_25438 = cljs.core.chunked_seq_QMARK_.call(null,inst_25436);
var state_25477__$1 = state_25477;
if(inst_25438){
var statearr_25508_25578 = state_25477__$1;
(statearr_25508_25578[(1)] = (36));

} else {
var statearr_25509_25579 = state_25477__$1;
(statearr_25509_25579[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (13))){
var inst_25366 = (state_25477[(26)]);
var inst_25369 = cljs.core.async.close_BANG_.call(null,inst_25366);
var state_25477__$1 = state_25477;
var statearr_25510_25580 = state_25477__$1;
(statearr_25510_25580[(2)] = inst_25369);

(statearr_25510_25580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (22))){
var inst_25389 = (state_25477[(8)]);
var inst_25392 = cljs.core.async.close_BANG_.call(null,inst_25389);
var state_25477__$1 = state_25477;
var statearr_25511_25581 = state_25477__$1;
(statearr_25511_25581[(2)] = inst_25392);

(statearr_25511_25581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (36))){
var inst_25436 = (state_25477[(25)]);
var inst_25440 = cljs.core.chunk_first.call(null,inst_25436);
var inst_25441 = cljs.core.chunk_rest.call(null,inst_25436);
var inst_25442 = cljs.core.count.call(null,inst_25440);
var inst_25417 = inst_25441;
var inst_25418 = inst_25440;
var inst_25419 = inst_25442;
var inst_25420 = (0);
var state_25477__$1 = (function (){var statearr_25512 = state_25477;
(statearr_25512[(10)] = inst_25418);

(statearr_25512[(20)] = inst_25417);

(statearr_25512[(21)] = inst_25419);

(statearr_25512[(12)] = inst_25420);

return statearr_25512;
})();
var statearr_25513_25582 = state_25477__$1;
(statearr_25513_25582[(2)] = null);

(statearr_25513_25582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (41))){
var inst_25436 = (state_25477[(25)]);
var inst_25452 = (state_25477[(2)]);
var inst_25453 = cljs.core.next.call(null,inst_25436);
var inst_25417 = inst_25453;
var inst_25418 = null;
var inst_25419 = (0);
var inst_25420 = (0);
var state_25477__$1 = (function (){var statearr_25514 = state_25477;
(statearr_25514[(10)] = inst_25418);

(statearr_25514[(20)] = inst_25417);

(statearr_25514[(21)] = inst_25419);

(statearr_25514[(12)] = inst_25420);

(statearr_25514[(27)] = inst_25452);

return statearr_25514;
})();
var statearr_25515_25583 = state_25477__$1;
(statearr_25515_25583[(2)] = null);

(statearr_25515_25583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (43))){
var state_25477__$1 = state_25477;
var statearr_25516_25584 = state_25477__$1;
(statearr_25516_25584[(2)] = null);

(statearr_25516_25584[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (29))){
var inst_25461 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
var statearr_25517_25585 = state_25477__$1;
(statearr_25517_25585[(2)] = inst_25461);

(statearr_25517_25585[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (44))){
var inst_25470 = (state_25477[(2)]);
var state_25477__$1 = (function (){var statearr_25518 = state_25477;
(statearr_25518[(28)] = inst_25470);

return statearr_25518;
})();
var statearr_25519_25586 = state_25477__$1;
(statearr_25519_25586[(2)] = null);

(statearr_25519_25586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (6))){
var inst_25409 = (state_25477[(29)]);
var inst_25408 = cljs.core.deref.call(null,cs);
var inst_25409__$1 = cljs.core.keys.call(null,inst_25408);
var inst_25410 = cljs.core.count.call(null,inst_25409__$1);
var inst_25411 = cljs.core.reset_BANG_.call(null,dctr,inst_25410);
var inst_25416 = cljs.core.seq.call(null,inst_25409__$1);
var inst_25417 = inst_25416;
var inst_25418 = null;
var inst_25419 = (0);
var inst_25420 = (0);
var state_25477__$1 = (function (){var statearr_25520 = state_25477;
(statearr_25520[(30)] = inst_25411);

(statearr_25520[(10)] = inst_25418);

(statearr_25520[(20)] = inst_25417);

(statearr_25520[(21)] = inst_25419);

(statearr_25520[(12)] = inst_25420);

(statearr_25520[(29)] = inst_25409__$1);

return statearr_25520;
})();
var statearr_25521_25587 = state_25477__$1;
(statearr_25521_25587[(2)] = null);

(statearr_25521_25587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (28))){
var inst_25436 = (state_25477[(25)]);
var inst_25417 = (state_25477[(20)]);
var inst_25436__$1 = cljs.core.seq.call(null,inst_25417);
var state_25477__$1 = (function (){var statearr_25522 = state_25477;
(statearr_25522[(25)] = inst_25436__$1);

return statearr_25522;
})();
if(inst_25436__$1){
var statearr_25523_25588 = state_25477__$1;
(statearr_25523_25588[(1)] = (33));

} else {
var statearr_25524_25589 = state_25477__$1;
(statearr_25524_25589[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (25))){
var inst_25419 = (state_25477[(21)]);
var inst_25420 = (state_25477[(12)]);
var inst_25422 = (inst_25420 < inst_25419);
var inst_25423 = inst_25422;
var state_25477__$1 = state_25477;
if(cljs.core.truth_(inst_25423)){
var statearr_25525_25590 = state_25477__$1;
(statearr_25525_25590[(1)] = (27));

} else {
var statearr_25526_25591 = state_25477__$1;
(statearr_25526_25591[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (34))){
var state_25477__$1 = state_25477;
var statearr_25527_25592 = state_25477__$1;
(statearr_25527_25592[(2)] = null);

(statearr_25527_25592[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (17))){
var state_25477__$1 = state_25477;
var statearr_25528_25593 = state_25477__$1;
(statearr_25528_25593[(2)] = null);

(statearr_25528_25593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (3))){
var inst_25475 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25477__$1,inst_25475);
} else {
if((state_val_25478 === (12))){
var inst_25404 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
var statearr_25529_25594 = state_25477__$1;
(statearr_25529_25594[(2)] = inst_25404);

(statearr_25529_25594[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (2))){
var state_25477__$1 = state_25477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25477__$1,(4),ch);
} else {
if((state_val_25478 === (23))){
var state_25477__$1 = state_25477;
var statearr_25530_25595 = state_25477__$1;
(statearr_25530_25595[(2)] = null);

(statearr_25530_25595[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (35))){
var inst_25459 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
var statearr_25531_25596 = state_25477__$1;
(statearr_25531_25596[(2)] = inst_25459);

(statearr_25531_25596[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (19))){
var inst_25376 = (state_25477[(7)]);
var inst_25380 = cljs.core.chunk_first.call(null,inst_25376);
var inst_25381 = cljs.core.chunk_rest.call(null,inst_25376);
var inst_25382 = cljs.core.count.call(null,inst_25380);
var inst_25354 = inst_25381;
var inst_25355 = inst_25380;
var inst_25356 = inst_25382;
var inst_25357 = (0);
var state_25477__$1 = (function (){var statearr_25532 = state_25477;
(statearr_25532[(13)] = inst_25356);

(statearr_25532[(14)] = inst_25357);

(statearr_25532[(15)] = inst_25355);

(statearr_25532[(17)] = inst_25354);

return statearr_25532;
})();
var statearr_25533_25597 = state_25477__$1;
(statearr_25533_25597[(2)] = null);

(statearr_25533_25597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (11))){
var inst_25376 = (state_25477[(7)]);
var inst_25354 = (state_25477[(17)]);
var inst_25376__$1 = cljs.core.seq.call(null,inst_25354);
var state_25477__$1 = (function (){var statearr_25534 = state_25477;
(statearr_25534[(7)] = inst_25376__$1);

return statearr_25534;
})();
if(inst_25376__$1){
var statearr_25535_25598 = state_25477__$1;
(statearr_25535_25598[(1)] = (16));

} else {
var statearr_25536_25599 = state_25477__$1;
(statearr_25536_25599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (9))){
var inst_25406 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
var statearr_25537_25600 = state_25477__$1;
(statearr_25537_25600[(2)] = inst_25406);

(statearr_25537_25600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (5))){
var inst_25352 = cljs.core.deref.call(null,cs);
var inst_25353 = cljs.core.seq.call(null,inst_25352);
var inst_25354 = inst_25353;
var inst_25355 = null;
var inst_25356 = (0);
var inst_25357 = (0);
var state_25477__$1 = (function (){var statearr_25538 = state_25477;
(statearr_25538[(13)] = inst_25356);

(statearr_25538[(14)] = inst_25357);

(statearr_25538[(15)] = inst_25355);

(statearr_25538[(17)] = inst_25354);

return statearr_25538;
})();
var statearr_25539_25601 = state_25477__$1;
(statearr_25539_25601[(2)] = null);

(statearr_25539_25601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (14))){
var state_25477__$1 = state_25477;
var statearr_25540_25602 = state_25477__$1;
(statearr_25540_25602[(2)] = null);

(statearr_25540_25602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (45))){
var inst_25467 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
var statearr_25541_25603 = state_25477__$1;
(statearr_25541_25603[(2)] = inst_25467);

(statearr_25541_25603[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (26))){
var inst_25409 = (state_25477[(29)]);
var inst_25463 = (state_25477[(2)]);
var inst_25464 = cljs.core.seq.call(null,inst_25409);
var state_25477__$1 = (function (){var statearr_25542 = state_25477;
(statearr_25542[(31)] = inst_25463);

return statearr_25542;
})();
if(inst_25464){
var statearr_25543_25604 = state_25477__$1;
(statearr_25543_25604[(1)] = (42));

} else {
var statearr_25544_25605 = state_25477__$1;
(statearr_25544_25605[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (16))){
var inst_25376 = (state_25477[(7)]);
var inst_25378 = cljs.core.chunked_seq_QMARK_.call(null,inst_25376);
var state_25477__$1 = state_25477;
if(inst_25378){
var statearr_25545_25606 = state_25477__$1;
(statearr_25545_25606[(1)] = (19));

} else {
var statearr_25546_25607 = state_25477__$1;
(statearr_25546_25607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (38))){
var inst_25456 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
var statearr_25547_25608 = state_25477__$1;
(statearr_25547_25608[(2)] = inst_25456);

(statearr_25547_25608[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (30))){
var state_25477__$1 = state_25477;
var statearr_25548_25609 = state_25477__$1;
(statearr_25548_25609[(2)] = null);

(statearr_25548_25609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (10))){
var inst_25357 = (state_25477[(14)]);
var inst_25355 = (state_25477[(15)]);
var inst_25365 = cljs.core._nth.call(null,inst_25355,inst_25357);
var inst_25366 = cljs.core.nth.call(null,inst_25365,(0),null);
var inst_25367 = cljs.core.nth.call(null,inst_25365,(1),null);
var state_25477__$1 = (function (){var statearr_25549 = state_25477;
(statearr_25549[(26)] = inst_25366);

return statearr_25549;
})();
if(cljs.core.truth_(inst_25367)){
var statearr_25550_25610 = state_25477__$1;
(statearr_25550_25610[(1)] = (13));

} else {
var statearr_25551_25611 = state_25477__$1;
(statearr_25551_25611[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (18))){
var inst_25402 = (state_25477[(2)]);
var state_25477__$1 = state_25477;
var statearr_25552_25612 = state_25477__$1;
(statearr_25552_25612[(2)] = inst_25402);

(statearr_25552_25612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (42))){
var state_25477__$1 = state_25477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25477__$1,(45),dchan);
} else {
if((state_val_25478 === (37))){
var inst_25436 = (state_25477[(25)]);
var inst_25345 = (state_25477[(11)]);
var inst_25445 = (state_25477[(23)]);
var inst_25445__$1 = cljs.core.first.call(null,inst_25436);
var inst_25446 = cljs.core.async.put_BANG_.call(null,inst_25445__$1,inst_25345,done);
var state_25477__$1 = (function (){var statearr_25553 = state_25477;
(statearr_25553[(23)] = inst_25445__$1);

return statearr_25553;
})();
if(cljs.core.truth_(inst_25446)){
var statearr_25554_25613 = state_25477__$1;
(statearr_25554_25613[(1)] = (39));

} else {
var statearr_25555_25614 = state_25477__$1;
(statearr_25555_25614[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25478 === (8))){
var inst_25356 = (state_25477[(13)]);
var inst_25357 = (state_25477[(14)]);
var inst_25359 = (inst_25357 < inst_25356);
var inst_25360 = inst_25359;
var state_25477__$1 = state_25477;
if(cljs.core.truth_(inst_25360)){
var statearr_25556_25615 = state_25477__$1;
(statearr_25556_25615[(1)] = (10));

} else {
var statearr_25557_25616 = state_25477__$1;
(statearr_25557_25616[(1)] = (11));

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
});})(c__24743__auto___25562,cs,m,dchan,dctr,done))
;
return ((function (switch__24653__auto__,c__24743__auto___25562,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24654__auto__ = null;
var cljs$core$async$mult_$_state_machine__24654__auto____0 = (function (){
var statearr_25558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25558[(0)] = cljs$core$async$mult_$_state_machine__24654__auto__);

(statearr_25558[(1)] = (1));

return statearr_25558;
});
var cljs$core$async$mult_$_state_machine__24654__auto____1 = (function (state_25477){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_25477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e25559){if((e25559 instanceof Object)){
var ex__24657__auto__ = e25559;
var statearr_25560_25617 = state_25477;
(statearr_25560_25617[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25618 = state_25477;
state_25477 = G__25618;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24654__auto__ = function(state_25477){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24654__auto____1.call(this,state_25477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24654__auto____0;
cljs$core$async$mult_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24654__auto____1;
return cljs$core$async$mult_$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___25562,cs,m,dchan,dctr,done))
})();
var state__24745__auto__ = (function (){var statearr_25561 = f__24744__auto__.call(null);
(statearr_25561[(6)] = c__24743__auto___25562);

return statearr_25561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___25562,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__25620 = arguments.length;
switch (G__25620) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25632 = arguments.length;
var i__4500__auto___25633 = (0);
while(true){
if((i__4500__auto___25633 < len__4499__auto___25632)){
args__4502__auto__.push((arguments[i__4500__auto___25633]));

var G__25634 = (i__4500__auto___25633 + (1));
i__4500__auto___25633 = G__25634;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25626){
var map__25627 = p__25626;
var map__25627__$1 = ((((!((map__25627 == null)))?(((((map__25627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25627):map__25627);
var opts = map__25627__$1;
var statearr_25629_25635 = state;
(statearr_25629_25635[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__25627,map__25627__$1,opts){
return (function (val){
var statearr_25630_25636 = state;
(statearr_25630_25636[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25627,map__25627__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_25631_25637 = state;
(statearr_25631_25637[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25622){
var G__25623 = cljs.core.first.call(null,seq25622);
var seq25622__$1 = cljs.core.next.call(null,seq25622);
var G__25624 = cljs.core.first.call(null,seq25622__$1);
var seq25622__$2 = cljs.core.next.call(null,seq25622__$1);
var G__25625 = cljs.core.first.call(null,seq25622__$2);
var seq25622__$3 = cljs.core.next.call(null,seq25622__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25623,G__25624,G__25625,seq25622__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25638 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25639){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25639 = meta25639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25640,meta25639__$1){
var self__ = this;
var _25640__$1 = this;
return (new cljs.core.async.t_cljs$core$async25638(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25639__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25640){
var self__ = this;
var _25640__$1 = this;
return self__.meta25639;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25638.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25638.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25638.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25638.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25638.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25638.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25638.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25638.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25638.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25639","meta25639",1763396576,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25638.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25638.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25638";

cljs.core.async.t_cljs$core$async25638.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25638");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25638.
 */
cljs.core.async.__GT_t_cljs$core$async25638 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25638(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25639){
return (new cljs.core.async.t_cljs$core$async25638(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25639));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25638(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24743__auto___25802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___25802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___25802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25742){
var state_val_25743 = (state_25742[(1)]);
if((state_val_25743 === (7))){
var inst_25657 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25744_25803 = state_25742__$1;
(statearr_25744_25803[(2)] = inst_25657);

(statearr_25744_25803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (20))){
var inst_25669 = (state_25742[(7)]);
var state_25742__$1 = state_25742;
var statearr_25745_25804 = state_25742__$1;
(statearr_25745_25804[(2)] = inst_25669);

(statearr_25745_25804[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (27))){
var state_25742__$1 = state_25742;
var statearr_25746_25805 = state_25742__$1;
(statearr_25746_25805[(2)] = null);

(statearr_25746_25805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (1))){
var inst_25644 = (state_25742[(8)]);
var inst_25644__$1 = calc_state.call(null);
var inst_25646 = (inst_25644__$1 == null);
var inst_25647 = cljs.core.not.call(null,inst_25646);
var state_25742__$1 = (function (){var statearr_25747 = state_25742;
(statearr_25747[(8)] = inst_25644__$1);

return statearr_25747;
})();
if(inst_25647){
var statearr_25748_25806 = state_25742__$1;
(statearr_25748_25806[(1)] = (2));

} else {
var statearr_25749_25807 = state_25742__$1;
(statearr_25749_25807[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (24))){
var inst_25693 = (state_25742[(9)]);
var inst_25702 = (state_25742[(10)]);
var inst_25716 = (state_25742[(11)]);
var inst_25716__$1 = inst_25693.call(null,inst_25702);
var state_25742__$1 = (function (){var statearr_25750 = state_25742;
(statearr_25750[(11)] = inst_25716__$1);

return statearr_25750;
})();
if(cljs.core.truth_(inst_25716__$1)){
var statearr_25751_25808 = state_25742__$1;
(statearr_25751_25808[(1)] = (29));

} else {
var statearr_25752_25809 = state_25742__$1;
(statearr_25752_25809[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (4))){
var inst_25660 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25660)){
var statearr_25753_25810 = state_25742__$1;
(statearr_25753_25810[(1)] = (8));

} else {
var statearr_25754_25811 = state_25742__$1;
(statearr_25754_25811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (15))){
var inst_25687 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25687)){
var statearr_25755_25812 = state_25742__$1;
(statearr_25755_25812[(1)] = (19));

} else {
var statearr_25756_25813 = state_25742__$1;
(statearr_25756_25813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (21))){
var inst_25692 = (state_25742[(12)]);
var inst_25692__$1 = (state_25742[(2)]);
var inst_25693 = cljs.core.get.call(null,inst_25692__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25694 = cljs.core.get.call(null,inst_25692__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25695 = cljs.core.get.call(null,inst_25692__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25742__$1 = (function (){var statearr_25757 = state_25742;
(statearr_25757[(9)] = inst_25693);

(statearr_25757[(12)] = inst_25692__$1);

(statearr_25757[(13)] = inst_25694);

return statearr_25757;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25742__$1,(22),inst_25695);
} else {
if((state_val_25743 === (31))){
var inst_25724 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25724)){
var statearr_25758_25814 = state_25742__$1;
(statearr_25758_25814[(1)] = (32));

} else {
var statearr_25759_25815 = state_25742__$1;
(statearr_25759_25815[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (32))){
var inst_25701 = (state_25742[(14)]);
var state_25742__$1 = state_25742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25742__$1,(35),out,inst_25701);
} else {
if((state_val_25743 === (33))){
var inst_25692 = (state_25742[(12)]);
var inst_25669 = inst_25692;
var state_25742__$1 = (function (){var statearr_25760 = state_25742;
(statearr_25760[(7)] = inst_25669);

return statearr_25760;
})();
var statearr_25761_25816 = state_25742__$1;
(statearr_25761_25816[(2)] = null);

(statearr_25761_25816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (13))){
var inst_25669 = (state_25742[(7)]);
var inst_25676 = inst_25669.cljs$lang$protocol_mask$partition0$;
var inst_25677 = (inst_25676 & (64));
var inst_25678 = inst_25669.cljs$core$ISeq$;
var inst_25679 = (cljs.core.PROTOCOL_SENTINEL === inst_25678);
var inst_25680 = ((inst_25677) || (inst_25679));
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25680)){
var statearr_25762_25817 = state_25742__$1;
(statearr_25762_25817[(1)] = (16));

} else {
var statearr_25763_25818 = state_25742__$1;
(statearr_25763_25818[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (22))){
var inst_25701 = (state_25742[(14)]);
var inst_25702 = (state_25742[(10)]);
var inst_25700 = (state_25742[(2)]);
var inst_25701__$1 = cljs.core.nth.call(null,inst_25700,(0),null);
var inst_25702__$1 = cljs.core.nth.call(null,inst_25700,(1),null);
var inst_25703 = (inst_25701__$1 == null);
var inst_25704 = cljs.core._EQ_.call(null,inst_25702__$1,change);
var inst_25705 = ((inst_25703) || (inst_25704));
var state_25742__$1 = (function (){var statearr_25764 = state_25742;
(statearr_25764[(14)] = inst_25701__$1);

(statearr_25764[(10)] = inst_25702__$1);

return statearr_25764;
})();
if(cljs.core.truth_(inst_25705)){
var statearr_25765_25819 = state_25742__$1;
(statearr_25765_25819[(1)] = (23));

} else {
var statearr_25766_25820 = state_25742__$1;
(statearr_25766_25820[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (36))){
var inst_25692 = (state_25742[(12)]);
var inst_25669 = inst_25692;
var state_25742__$1 = (function (){var statearr_25767 = state_25742;
(statearr_25767[(7)] = inst_25669);

return statearr_25767;
})();
var statearr_25768_25821 = state_25742__$1;
(statearr_25768_25821[(2)] = null);

(statearr_25768_25821[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (29))){
var inst_25716 = (state_25742[(11)]);
var state_25742__$1 = state_25742;
var statearr_25769_25822 = state_25742__$1;
(statearr_25769_25822[(2)] = inst_25716);

(statearr_25769_25822[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (6))){
var state_25742__$1 = state_25742;
var statearr_25770_25823 = state_25742__$1;
(statearr_25770_25823[(2)] = false);

(statearr_25770_25823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (28))){
var inst_25712 = (state_25742[(2)]);
var inst_25713 = calc_state.call(null);
var inst_25669 = inst_25713;
var state_25742__$1 = (function (){var statearr_25771 = state_25742;
(statearr_25771[(15)] = inst_25712);

(statearr_25771[(7)] = inst_25669);

return statearr_25771;
})();
var statearr_25772_25824 = state_25742__$1;
(statearr_25772_25824[(2)] = null);

(statearr_25772_25824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (25))){
var inst_25738 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25773_25825 = state_25742__$1;
(statearr_25773_25825[(2)] = inst_25738);

(statearr_25773_25825[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (34))){
var inst_25736 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25774_25826 = state_25742__$1;
(statearr_25774_25826[(2)] = inst_25736);

(statearr_25774_25826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (17))){
var state_25742__$1 = state_25742;
var statearr_25775_25827 = state_25742__$1;
(statearr_25775_25827[(2)] = false);

(statearr_25775_25827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (3))){
var state_25742__$1 = state_25742;
var statearr_25776_25828 = state_25742__$1;
(statearr_25776_25828[(2)] = false);

(statearr_25776_25828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (12))){
var inst_25740 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25742__$1,inst_25740);
} else {
if((state_val_25743 === (2))){
var inst_25644 = (state_25742[(8)]);
var inst_25649 = inst_25644.cljs$lang$protocol_mask$partition0$;
var inst_25650 = (inst_25649 & (64));
var inst_25651 = inst_25644.cljs$core$ISeq$;
var inst_25652 = (cljs.core.PROTOCOL_SENTINEL === inst_25651);
var inst_25653 = ((inst_25650) || (inst_25652));
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25653)){
var statearr_25777_25829 = state_25742__$1;
(statearr_25777_25829[(1)] = (5));

} else {
var statearr_25778_25830 = state_25742__$1;
(statearr_25778_25830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (23))){
var inst_25701 = (state_25742[(14)]);
var inst_25707 = (inst_25701 == null);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25707)){
var statearr_25779_25831 = state_25742__$1;
(statearr_25779_25831[(1)] = (26));

} else {
var statearr_25780_25832 = state_25742__$1;
(statearr_25780_25832[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (35))){
var inst_25727 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25727)){
var statearr_25781_25833 = state_25742__$1;
(statearr_25781_25833[(1)] = (36));

} else {
var statearr_25782_25834 = state_25742__$1;
(statearr_25782_25834[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (19))){
var inst_25669 = (state_25742[(7)]);
var inst_25689 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25669);
var state_25742__$1 = state_25742;
var statearr_25783_25835 = state_25742__$1;
(statearr_25783_25835[(2)] = inst_25689);

(statearr_25783_25835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (11))){
var inst_25669 = (state_25742[(7)]);
var inst_25673 = (inst_25669 == null);
var inst_25674 = cljs.core.not.call(null,inst_25673);
var state_25742__$1 = state_25742;
if(inst_25674){
var statearr_25784_25836 = state_25742__$1;
(statearr_25784_25836[(1)] = (13));

} else {
var statearr_25785_25837 = state_25742__$1;
(statearr_25785_25837[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (9))){
var inst_25644 = (state_25742[(8)]);
var state_25742__$1 = state_25742;
var statearr_25786_25838 = state_25742__$1;
(statearr_25786_25838[(2)] = inst_25644);

(statearr_25786_25838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (5))){
var state_25742__$1 = state_25742;
var statearr_25787_25839 = state_25742__$1;
(statearr_25787_25839[(2)] = true);

(statearr_25787_25839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (14))){
var state_25742__$1 = state_25742;
var statearr_25788_25840 = state_25742__$1;
(statearr_25788_25840[(2)] = false);

(statearr_25788_25840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (26))){
var inst_25702 = (state_25742[(10)]);
var inst_25709 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25702);
var state_25742__$1 = state_25742;
var statearr_25789_25841 = state_25742__$1;
(statearr_25789_25841[(2)] = inst_25709);

(statearr_25789_25841[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (16))){
var state_25742__$1 = state_25742;
var statearr_25790_25842 = state_25742__$1;
(statearr_25790_25842[(2)] = true);

(statearr_25790_25842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (38))){
var inst_25732 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25791_25843 = state_25742__$1;
(statearr_25791_25843[(2)] = inst_25732);

(statearr_25791_25843[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (30))){
var inst_25693 = (state_25742[(9)]);
var inst_25694 = (state_25742[(13)]);
var inst_25702 = (state_25742[(10)]);
var inst_25719 = cljs.core.empty_QMARK_.call(null,inst_25693);
var inst_25720 = inst_25694.call(null,inst_25702);
var inst_25721 = cljs.core.not.call(null,inst_25720);
var inst_25722 = ((inst_25719) && (inst_25721));
var state_25742__$1 = state_25742;
var statearr_25792_25844 = state_25742__$1;
(statearr_25792_25844[(2)] = inst_25722);

(statearr_25792_25844[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (10))){
var inst_25644 = (state_25742[(8)]);
var inst_25665 = (state_25742[(2)]);
var inst_25666 = cljs.core.get.call(null,inst_25665,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25667 = cljs.core.get.call(null,inst_25665,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25668 = cljs.core.get.call(null,inst_25665,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25669 = inst_25644;
var state_25742__$1 = (function (){var statearr_25793 = state_25742;
(statearr_25793[(16)] = inst_25668);

(statearr_25793[(17)] = inst_25667);

(statearr_25793[(7)] = inst_25669);

(statearr_25793[(18)] = inst_25666);

return statearr_25793;
})();
var statearr_25794_25845 = state_25742__$1;
(statearr_25794_25845[(2)] = null);

(statearr_25794_25845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (18))){
var inst_25684 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25795_25846 = state_25742__$1;
(statearr_25795_25846[(2)] = inst_25684);

(statearr_25795_25846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (37))){
var state_25742__$1 = state_25742;
var statearr_25796_25847 = state_25742__$1;
(statearr_25796_25847[(2)] = null);

(statearr_25796_25847[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (8))){
var inst_25644 = (state_25742[(8)]);
var inst_25662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25644);
var state_25742__$1 = state_25742;
var statearr_25797_25848 = state_25742__$1;
(statearr_25797_25848[(2)] = inst_25662);

(statearr_25797_25848[(1)] = (10));


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
});})(c__24743__auto___25802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24653__auto__,c__24743__auto___25802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24654__auto__ = null;
var cljs$core$async$mix_$_state_machine__24654__auto____0 = (function (){
var statearr_25798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25798[(0)] = cljs$core$async$mix_$_state_machine__24654__auto__);

(statearr_25798[(1)] = (1));

return statearr_25798;
});
var cljs$core$async$mix_$_state_machine__24654__auto____1 = (function (state_25742){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_25742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e25799){if((e25799 instanceof Object)){
var ex__24657__auto__ = e25799;
var statearr_25800_25849 = state_25742;
(statearr_25800_25849[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25850 = state_25742;
state_25742 = G__25850;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24654__auto__ = function(state_25742){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24654__auto____1.call(this,state_25742);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24654__auto____0;
cljs$core$async$mix_$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24654__auto____1;
return cljs$core$async$mix_$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___25802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24745__auto__ = (function (){var statearr_25801 = f__24744__auto__.call(null);
(statearr_25801[(6)] = c__24743__auto___25802);

return statearr_25801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___25802,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25852 = arguments.length;
switch (G__25852) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__25856 = arguments.length;
switch (G__25856) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__25854_SHARP_){
if(cljs.core.truth_(p1__25854_SHARP_.call(null,topic))){
return p1__25854_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25854_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25857 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25858){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25858 = meta25858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25859,meta25858__$1){
var self__ = this;
var _25859__$1 = this;
return (new cljs.core.async.t_cljs$core$async25857(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25858__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25859){
var self__ = this;
var _25859__$1 = this;
return self__.meta25858;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25857.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25857.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25857.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25857.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25857.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25858","meta25858",-1777491799,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25857";

cljs.core.async.t_cljs$core$async25857.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25857");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25857.
 */
cljs.core.async.__GT_t_cljs$core$async25857 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25857(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25858){
return (new cljs.core.async.t_cljs$core$async25857(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25858));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25857(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24743__auto___25977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___25977,mults,ensure_mult,p){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___25977,mults,ensure_mult,p){
return (function (state_25931){
var state_val_25932 = (state_25931[(1)]);
if((state_val_25932 === (7))){
var inst_25927 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25933_25978 = state_25931__$1;
(statearr_25933_25978[(2)] = inst_25927);

(statearr_25933_25978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (20))){
var state_25931__$1 = state_25931;
var statearr_25934_25979 = state_25931__$1;
(statearr_25934_25979[(2)] = null);

(statearr_25934_25979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (1))){
var state_25931__$1 = state_25931;
var statearr_25935_25980 = state_25931__$1;
(statearr_25935_25980[(2)] = null);

(statearr_25935_25980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (24))){
var inst_25910 = (state_25931[(7)]);
var inst_25919 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25910);
var state_25931__$1 = state_25931;
var statearr_25936_25981 = state_25931__$1;
(statearr_25936_25981[(2)] = inst_25919);

(statearr_25936_25981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (4))){
var inst_25862 = (state_25931[(8)]);
var inst_25862__$1 = (state_25931[(2)]);
var inst_25863 = (inst_25862__$1 == null);
var state_25931__$1 = (function (){var statearr_25937 = state_25931;
(statearr_25937[(8)] = inst_25862__$1);

return statearr_25937;
})();
if(cljs.core.truth_(inst_25863)){
var statearr_25938_25982 = state_25931__$1;
(statearr_25938_25982[(1)] = (5));

} else {
var statearr_25939_25983 = state_25931__$1;
(statearr_25939_25983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (15))){
var inst_25904 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25940_25984 = state_25931__$1;
(statearr_25940_25984[(2)] = inst_25904);

(statearr_25940_25984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (21))){
var inst_25924 = (state_25931[(2)]);
var state_25931__$1 = (function (){var statearr_25941 = state_25931;
(statearr_25941[(9)] = inst_25924);

return statearr_25941;
})();
var statearr_25942_25985 = state_25931__$1;
(statearr_25942_25985[(2)] = null);

(statearr_25942_25985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (13))){
var inst_25886 = (state_25931[(10)]);
var inst_25888 = cljs.core.chunked_seq_QMARK_.call(null,inst_25886);
var state_25931__$1 = state_25931;
if(inst_25888){
var statearr_25943_25986 = state_25931__$1;
(statearr_25943_25986[(1)] = (16));

} else {
var statearr_25944_25987 = state_25931__$1;
(statearr_25944_25987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (22))){
var inst_25916 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25916)){
var statearr_25945_25988 = state_25931__$1;
(statearr_25945_25988[(1)] = (23));

} else {
var statearr_25946_25989 = state_25931__$1;
(statearr_25946_25989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (6))){
var inst_25910 = (state_25931[(7)]);
var inst_25912 = (state_25931[(11)]);
var inst_25862 = (state_25931[(8)]);
var inst_25910__$1 = topic_fn.call(null,inst_25862);
var inst_25911 = cljs.core.deref.call(null,mults);
var inst_25912__$1 = cljs.core.get.call(null,inst_25911,inst_25910__$1);
var state_25931__$1 = (function (){var statearr_25947 = state_25931;
(statearr_25947[(7)] = inst_25910__$1);

(statearr_25947[(11)] = inst_25912__$1);

return statearr_25947;
})();
if(cljs.core.truth_(inst_25912__$1)){
var statearr_25948_25990 = state_25931__$1;
(statearr_25948_25990[(1)] = (19));

} else {
var statearr_25949_25991 = state_25931__$1;
(statearr_25949_25991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (25))){
var inst_25921 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25950_25992 = state_25931__$1;
(statearr_25950_25992[(2)] = inst_25921);

(statearr_25950_25992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (17))){
var inst_25886 = (state_25931[(10)]);
var inst_25895 = cljs.core.first.call(null,inst_25886);
var inst_25896 = cljs.core.async.muxch_STAR_.call(null,inst_25895);
var inst_25897 = cljs.core.async.close_BANG_.call(null,inst_25896);
var inst_25898 = cljs.core.next.call(null,inst_25886);
var inst_25872 = inst_25898;
var inst_25873 = null;
var inst_25874 = (0);
var inst_25875 = (0);
var state_25931__$1 = (function (){var statearr_25951 = state_25931;
(statearr_25951[(12)] = inst_25874);

(statearr_25951[(13)] = inst_25875);

(statearr_25951[(14)] = inst_25872);

(statearr_25951[(15)] = inst_25897);

(statearr_25951[(16)] = inst_25873);

return statearr_25951;
})();
var statearr_25952_25993 = state_25931__$1;
(statearr_25952_25993[(2)] = null);

(statearr_25952_25993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (3))){
var inst_25929 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25931__$1,inst_25929);
} else {
if((state_val_25932 === (12))){
var inst_25906 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25953_25994 = state_25931__$1;
(statearr_25953_25994[(2)] = inst_25906);

(statearr_25953_25994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (2))){
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25931__$1,(4),ch);
} else {
if((state_val_25932 === (23))){
var state_25931__$1 = state_25931;
var statearr_25954_25995 = state_25931__$1;
(statearr_25954_25995[(2)] = null);

(statearr_25954_25995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (19))){
var inst_25912 = (state_25931[(11)]);
var inst_25862 = (state_25931[(8)]);
var inst_25914 = cljs.core.async.muxch_STAR_.call(null,inst_25912);
var state_25931__$1 = state_25931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25931__$1,(22),inst_25914,inst_25862);
} else {
if((state_val_25932 === (11))){
var inst_25886 = (state_25931[(10)]);
var inst_25872 = (state_25931[(14)]);
var inst_25886__$1 = cljs.core.seq.call(null,inst_25872);
var state_25931__$1 = (function (){var statearr_25955 = state_25931;
(statearr_25955[(10)] = inst_25886__$1);

return statearr_25955;
})();
if(inst_25886__$1){
var statearr_25956_25996 = state_25931__$1;
(statearr_25956_25996[(1)] = (13));

} else {
var statearr_25957_25997 = state_25931__$1;
(statearr_25957_25997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (9))){
var inst_25908 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25958_25998 = state_25931__$1;
(statearr_25958_25998[(2)] = inst_25908);

(statearr_25958_25998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (5))){
var inst_25869 = cljs.core.deref.call(null,mults);
var inst_25870 = cljs.core.vals.call(null,inst_25869);
var inst_25871 = cljs.core.seq.call(null,inst_25870);
var inst_25872 = inst_25871;
var inst_25873 = null;
var inst_25874 = (0);
var inst_25875 = (0);
var state_25931__$1 = (function (){var statearr_25959 = state_25931;
(statearr_25959[(12)] = inst_25874);

(statearr_25959[(13)] = inst_25875);

(statearr_25959[(14)] = inst_25872);

(statearr_25959[(16)] = inst_25873);

return statearr_25959;
})();
var statearr_25960_25999 = state_25931__$1;
(statearr_25960_25999[(2)] = null);

(statearr_25960_25999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (14))){
var state_25931__$1 = state_25931;
var statearr_25964_26000 = state_25931__$1;
(statearr_25964_26000[(2)] = null);

(statearr_25964_26000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (16))){
var inst_25886 = (state_25931[(10)]);
var inst_25890 = cljs.core.chunk_first.call(null,inst_25886);
var inst_25891 = cljs.core.chunk_rest.call(null,inst_25886);
var inst_25892 = cljs.core.count.call(null,inst_25890);
var inst_25872 = inst_25891;
var inst_25873 = inst_25890;
var inst_25874 = inst_25892;
var inst_25875 = (0);
var state_25931__$1 = (function (){var statearr_25965 = state_25931;
(statearr_25965[(12)] = inst_25874);

(statearr_25965[(13)] = inst_25875);

(statearr_25965[(14)] = inst_25872);

(statearr_25965[(16)] = inst_25873);

return statearr_25965;
})();
var statearr_25966_26001 = state_25931__$1;
(statearr_25966_26001[(2)] = null);

(statearr_25966_26001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (10))){
var inst_25874 = (state_25931[(12)]);
var inst_25875 = (state_25931[(13)]);
var inst_25872 = (state_25931[(14)]);
var inst_25873 = (state_25931[(16)]);
var inst_25880 = cljs.core._nth.call(null,inst_25873,inst_25875);
var inst_25881 = cljs.core.async.muxch_STAR_.call(null,inst_25880);
var inst_25882 = cljs.core.async.close_BANG_.call(null,inst_25881);
var inst_25883 = (inst_25875 + (1));
var tmp25961 = inst_25874;
var tmp25962 = inst_25872;
var tmp25963 = inst_25873;
var inst_25872__$1 = tmp25962;
var inst_25873__$1 = tmp25963;
var inst_25874__$1 = tmp25961;
var inst_25875__$1 = inst_25883;
var state_25931__$1 = (function (){var statearr_25967 = state_25931;
(statearr_25967[(12)] = inst_25874__$1);

(statearr_25967[(13)] = inst_25875__$1);

(statearr_25967[(14)] = inst_25872__$1);

(statearr_25967[(16)] = inst_25873__$1);

(statearr_25967[(17)] = inst_25882);

return statearr_25967;
})();
var statearr_25968_26002 = state_25931__$1;
(statearr_25968_26002[(2)] = null);

(statearr_25968_26002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (18))){
var inst_25901 = (state_25931[(2)]);
var state_25931__$1 = state_25931;
var statearr_25969_26003 = state_25931__$1;
(statearr_25969_26003[(2)] = inst_25901);

(statearr_25969_26003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25932 === (8))){
var inst_25874 = (state_25931[(12)]);
var inst_25875 = (state_25931[(13)]);
var inst_25877 = (inst_25875 < inst_25874);
var inst_25878 = inst_25877;
var state_25931__$1 = state_25931;
if(cljs.core.truth_(inst_25878)){
var statearr_25970_26004 = state_25931__$1;
(statearr_25970_26004[(1)] = (10));

} else {
var statearr_25971_26005 = state_25931__$1;
(statearr_25971_26005[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__24743__auto___25977,mults,ensure_mult,p))
;
return ((function (switch__24653__auto__,c__24743__auto___25977,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24654__auto__ = null;
var cljs$core$async$state_machine__24654__auto____0 = (function (){
var statearr_25972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25972[(0)] = cljs$core$async$state_machine__24654__auto__);

(statearr_25972[(1)] = (1));

return statearr_25972;
});
var cljs$core$async$state_machine__24654__auto____1 = (function (state_25931){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_25931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e25973){if((e25973 instanceof Object)){
var ex__24657__auto__ = e25973;
var statearr_25974_26006 = state_25931;
(statearr_25974_26006[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26007 = state_25931;
state_25931 = G__26007;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$state_machine__24654__auto__ = function(state_25931){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24654__auto____1.call(this,state_25931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24654__auto____0;
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24654__auto____1;
return cljs$core$async$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___25977,mults,ensure_mult,p))
})();
var state__24745__auto__ = (function (){var statearr_25975 = f__24744__auto__.call(null);
(statearr_25975[(6)] = c__24743__auto___25977);

return statearr_25975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___25977,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26009 = arguments.length;
switch (G__26009) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26012 = arguments.length;
switch (G__26012) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26015 = arguments.length;
switch (G__26015) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24743__auto___26082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___26082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___26082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26054){
var state_val_26055 = (state_26054[(1)]);
if((state_val_26055 === (7))){
var state_26054__$1 = state_26054;
var statearr_26056_26083 = state_26054__$1;
(statearr_26056_26083[(2)] = null);

(statearr_26056_26083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (1))){
var state_26054__$1 = state_26054;
var statearr_26057_26084 = state_26054__$1;
(statearr_26057_26084[(2)] = null);

(statearr_26057_26084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (4))){
var inst_26018 = (state_26054[(7)]);
var inst_26020 = (inst_26018 < cnt);
var state_26054__$1 = state_26054;
if(cljs.core.truth_(inst_26020)){
var statearr_26058_26085 = state_26054__$1;
(statearr_26058_26085[(1)] = (6));

} else {
var statearr_26059_26086 = state_26054__$1;
(statearr_26059_26086[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (15))){
var inst_26050 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
var statearr_26060_26087 = state_26054__$1;
(statearr_26060_26087[(2)] = inst_26050);

(statearr_26060_26087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (13))){
var inst_26043 = cljs.core.async.close_BANG_.call(null,out);
var state_26054__$1 = state_26054;
var statearr_26061_26088 = state_26054__$1;
(statearr_26061_26088[(2)] = inst_26043);

(statearr_26061_26088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (6))){
var state_26054__$1 = state_26054;
var statearr_26062_26089 = state_26054__$1;
(statearr_26062_26089[(2)] = null);

(statearr_26062_26089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (3))){
var inst_26052 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26054__$1,inst_26052);
} else {
if((state_val_26055 === (12))){
var inst_26040 = (state_26054[(8)]);
var inst_26040__$1 = (state_26054[(2)]);
var inst_26041 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26040__$1);
var state_26054__$1 = (function (){var statearr_26063 = state_26054;
(statearr_26063[(8)] = inst_26040__$1);

return statearr_26063;
})();
if(cljs.core.truth_(inst_26041)){
var statearr_26064_26090 = state_26054__$1;
(statearr_26064_26090[(1)] = (13));

} else {
var statearr_26065_26091 = state_26054__$1;
(statearr_26065_26091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (2))){
var inst_26017 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26018 = (0);
var state_26054__$1 = (function (){var statearr_26066 = state_26054;
(statearr_26066[(9)] = inst_26017);

(statearr_26066[(7)] = inst_26018);

return statearr_26066;
})();
var statearr_26067_26092 = state_26054__$1;
(statearr_26067_26092[(2)] = null);

(statearr_26067_26092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (11))){
var inst_26018 = (state_26054[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26054,(10),Object,null,(9));
var inst_26027 = chs__$1.call(null,inst_26018);
var inst_26028 = done.call(null,inst_26018);
var inst_26029 = cljs.core.async.take_BANG_.call(null,inst_26027,inst_26028);
var state_26054__$1 = state_26054;
var statearr_26068_26093 = state_26054__$1;
(statearr_26068_26093[(2)] = inst_26029);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26054__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (9))){
var inst_26018 = (state_26054[(7)]);
var inst_26031 = (state_26054[(2)]);
var inst_26032 = (inst_26018 + (1));
var inst_26018__$1 = inst_26032;
var state_26054__$1 = (function (){var statearr_26069 = state_26054;
(statearr_26069[(10)] = inst_26031);

(statearr_26069[(7)] = inst_26018__$1);

return statearr_26069;
})();
var statearr_26070_26094 = state_26054__$1;
(statearr_26070_26094[(2)] = null);

(statearr_26070_26094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (5))){
var inst_26038 = (state_26054[(2)]);
var state_26054__$1 = (function (){var statearr_26071 = state_26054;
(statearr_26071[(11)] = inst_26038);

return statearr_26071;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26054__$1,(12),dchan);
} else {
if((state_val_26055 === (14))){
var inst_26040 = (state_26054[(8)]);
var inst_26045 = cljs.core.apply.call(null,f,inst_26040);
var state_26054__$1 = state_26054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26054__$1,(16),out,inst_26045);
} else {
if((state_val_26055 === (16))){
var inst_26047 = (state_26054[(2)]);
var state_26054__$1 = (function (){var statearr_26072 = state_26054;
(statearr_26072[(12)] = inst_26047);

return statearr_26072;
})();
var statearr_26073_26095 = state_26054__$1;
(statearr_26073_26095[(2)] = null);

(statearr_26073_26095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (10))){
var inst_26022 = (state_26054[(2)]);
var inst_26023 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26054__$1 = (function (){var statearr_26074 = state_26054;
(statearr_26074[(13)] = inst_26022);

return statearr_26074;
})();
var statearr_26075_26096 = state_26054__$1;
(statearr_26075_26096[(2)] = inst_26023);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26054__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26055 === (8))){
var inst_26036 = (state_26054[(2)]);
var state_26054__$1 = state_26054;
var statearr_26076_26097 = state_26054__$1;
(statearr_26076_26097[(2)] = inst_26036);

(statearr_26076_26097[(1)] = (5));


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
});})(c__24743__auto___26082,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24653__auto__,c__24743__auto___26082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24654__auto__ = null;
var cljs$core$async$state_machine__24654__auto____0 = (function (){
var statearr_26077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26077[(0)] = cljs$core$async$state_machine__24654__auto__);

(statearr_26077[(1)] = (1));

return statearr_26077;
});
var cljs$core$async$state_machine__24654__auto____1 = (function (state_26054){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_26054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e26078){if((e26078 instanceof Object)){
var ex__24657__auto__ = e26078;
var statearr_26079_26098 = state_26054;
(statearr_26079_26098[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26099 = state_26054;
state_26054 = G__26099;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$state_machine__24654__auto__ = function(state_26054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24654__auto____1.call(this,state_26054);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24654__auto____0;
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24654__auto____1;
return cljs$core$async$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___26082,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24745__auto__ = (function (){var statearr_26080 = f__24744__auto__.call(null);
(statearr_26080[(6)] = c__24743__auto___26082);

return statearr_26080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___26082,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__26102 = arguments.length;
switch (G__26102) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24743__auto___26156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___26156,out){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___26156,out){
return (function (state_26134){
var state_val_26135 = (state_26134[(1)]);
if((state_val_26135 === (7))){
var inst_26113 = (state_26134[(7)]);
var inst_26114 = (state_26134[(8)]);
var inst_26113__$1 = (state_26134[(2)]);
var inst_26114__$1 = cljs.core.nth.call(null,inst_26113__$1,(0),null);
var inst_26115 = cljs.core.nth.call(null,inst_26113__$1,(1),null);
var inst_26116 = (inst_26114__$1 == null);
var state_26134__$1 = (function (){var statearr_26136 = state_26134;
(statearr_26136[(9)] = inst_26115);

(statearr_26136[(7)] = inst_26113__$1);

(statearr_26136[(8)] = inst_26114__$1);

return statearr_26136;
})();
if(cljs.core.truth_(inst_26116)){
var statearr_26137_26157 = state_26134__$1;
(statearr_26137_26157[(1)] = (8));

} else {
var statearr_26138_26158 = state_26134__$1;
(statearr_26138_26158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (1))){
var inst_26103 = cljs.core.vec.call(null,chs);
var inst_26104 = inst_26103;
var state_26134__$1 = (function (){var statearr_26139 = state_26134;
(statearr_26139[(10)] = inst_26104);

return statearr_26139;
})();
var statearr_26140_26159 = state_26134__$1;
(statearr_26140_26159[(2)] = null);

(statearr_26140_26159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (4))){
var inst_26104 = (state_26134[(10)]);
var state_26134__$1 = state_26134;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26134__$1,(7),inst_26104);
} else {
if((state_val_26135 === (6))){
var inst_26130 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
var statearr_26141_26160 = state_26134__$1;
(statearr_26141_26160[(2)] = inst_26130);

(statearr_26141_26160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (3))){
var inst_26132 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26134__$1,inst_26132);
} else {
if((state_val_26135 === (2))){
var inst_26104 = (state_26134[(10)]);
var inst_26106 = cljs.core.count.call(null,inst_26104);
var inst_26107 = (inst_26106 > (0));
var state_26134__$1 = state_26134;
if(cljs.core.truth_(inst_26107)){
var statearr_26143_26161 = state_26134__$1;
(statearr_26143_26161[(1)] = (4));

} else {
var statearr_26144_26162 = state_26134__$1;
(statearr_26144_26162[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (11))){
var inst_26104 = (state_26134[(10)]);
var inst_26123 = (state_26134[(2)]);
var tmp26142 = inst_26104;
var inst_26104__$1 = tmp26142;
var state_26134__$1 = (function (){var statearr_26145 = state_26134;
(statearr_26145[(10)] = inst_26104__$1);

(statearr_26145[(11)] = inst_26123);

return statearr_26145;
})();
var statearr_26146_26163 = state_26134__$1;
(statearr_26146_26163[(2)] = null);

(statearr_26146_26163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (9))){
var inst_26114 = (state_26134[(8)]);
var state_26134__$1 = state_26134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26134__$1,(11),out,inst_26114);
} else {
if((state_val_26135 === (5))){
var inst_26128 = cljs.core.async.close_BANG_.call(null,out);
var state_26134__$1 = state_26134;
var statearr_26147_26164 = state_26134__$1;
(statearr_26147_26164[(2)] = inst_26128);

(statearr_26147_26164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (10))){
var inst_26126 = (state_26134[(2)]);
var state_26134__$1 = state_26134;
var statearr_26148_26165 = state_26134__$1;
(statearr_26148_26165[(2)] = inst_26126);

(statearr_26148_26165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26135 === (8))){
var inst_26115 = (state_26134[(9)]);
var inst_26104 = (state_26134[(10)]);
var inst_26113 = (state_26134[(7)]);
var inst_26114 = (state_26134[(8)]);
var inst_26118 = (function (){var cs = inst_26104;
var vec__26109 = inst_26113;
var v = inst_26114;
var c = inst_26115;
return ((function (cs,vec__26109,v,c,inst_26115,inst_26104,inst_26113,inst_26114,state_val_26135,c__24743__auto___26156,out){
return (function (p1__26100_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26100_SHARP_);
});
;})(cs,vec__26109,v,c,inst_26115,inst_26104,inst_26113,inst_26114,state_val_26135,c__24743__auto___26156,out))
})();
var inst_26119 = cljs.core.filterv.call(null,inst_26118,inst_26104);
var inst_26104__$1 = inst_26119;
var state_26134__$1 = (function (){var statearr_26149 = state_26134;
(statearr_26149[(10)] = inst_26104__$1);

return statearr_26149;
})();
var statearr_26150_26166 = state_26134__$1;
(statearr_26150_26166[(2)] = null);

(statearr_26150_26166[(1)] = (2));


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
});})(c__24743__auto___26156,out))
;
return ((function (switch__24653__auto__,c__24743__auto___26156,out){
return (function() {
var cljs$core$async$state_machine__24654__auto__ = null;
var cljs$core$async$state_machine__24654__auto____0 = (function (){
var statearr_26151 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26151[(0)] = cljs$core$async$state_machine__24654__auto__);

(statearr_26151[(1)] = (1));

return statearr_26151;
});
var cljs$core$async$state_machine__24654__auto____1 = (function (state_26134){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_26134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e26152){if((e26152 instanceof Object)){
var ex__24657__auto__ = e26152;
var statearr_26153_26167 = state_26134;
(statearr_26153_26167[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26168 = state_26134;
state_26134 = G__26168;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$state_machine__24654__auto__ = function(state_26134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24654__auto____1.call(this,state_26134);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24654__auto____0;
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24654__auto____1;
return cljs$core$async$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___26156,out))
})();
var state__24745__auto__ = (function (){var statearr_26154 = f__24744__auto__.call(null);
(statearr_26154[(6)] = c__24743__auto___26156);

return statearr_26154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___26156,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26170 = arguments.length;
switch (G__26170) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24743__auto___26215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___26215,out){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___26215,out){
return (function (state_26194){
var state_val_26195 = (state_26194[(1)]);
if((state_val_26195 === (7))){
var inst_26176 = (state_26194[(7)]);
var inst_26176__$1 = (state_26194[(2)]);
var inst_26177 = (inst_26176__$1 == null);
var inst_26178 = cljs.core.not.call(null,inst_26177);
var state_26194__$1 = (function (){var statearr_26196 = state_26194;
(statearr_26196[(7)] = inst_26176__$1);

return statearr_26196;
})();
if(inst_26178){
var statearr_26197_26216 = state_26194__$1;
(statearr_26197_26216[(1)] = (8));

} else {
var statearr_26198_26217 = state_26194__$1;
(statearr_26198_26217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (1))){
var inst_26171 = (0);
var state_26194__$1 = (function (){var statearr_26199 = state_26194;
(statearr_26199[(8)] = inst_26171);

return statearr_26199;
})();
var statearr_26200_26218 = state_26194__$1;
(statearr_26200_26218[(2)] = null);

(statearr_26200_26218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (4))){
var state_26194__$1 = state_26194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26194__$1,(7),ch);
} else {
if((state_val_26195 === (6))){
var inst_26189 = (state_26194[(2)]);
var state_26194__$1 = state_26194;
var statearr_26201_26219 = state_26194__$1;
(statearr_26201_26219[(2)] = inst_26189);

(statearr_26201_26219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (3))){
var inst_26191 = (state_26194[(2)]);
var inst_26192 = cljs.core.async.close_BANG_.call(null,out);
var state_26194__$1 = (function (){var statearr_26202 = state_26194;
(statearr_26202[(9)] = inst_26191);

return statearr_26202;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26194__$1,inst_26192);
} else {
if((state_val_26195 === (2))){
var inst_26171 = (state_26194[(8)]);
var inst_26173 = (inst_26171 < n);
var state_26194__$1 = state_26194;
if(cljs.core.truth_(inst_26173)){
var statearr_26203_26220 = state_26194__$1;
(statearr_26203_26220[(1)] = (4));

} else {
var statearr_26204_26221 = state_26194__$1;
(statearr_26204_26221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (11))){
var inst_26171 = (state_26194[(8)]);
var inst_26181 = (state_26194[(2)]);
var inst_26182 = (inst_26171 + (1));
var inst_26171__$1 = inst_26182;
var state_26194__$1 = (function (){var statearr_26205 = state_26194;
(statearr_26205[(8)] = inst_26171__$1);

(statearr_26205[(10)] = inst_26181);

return statearr_26205;
})();
var statearr_26206_26222 = state_26194__$1;
(statearr_26206_26222[(2)] = null);

(statearr_26206_26222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (9))){
var state_26194__$1 = state_26194;
var statearr_26207_26223 = state_26194__$1;
(statearr_26207_26223[(2)] = null);

(statearr_26207_26223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (5))){
var state_26194__$1 = state_26194;
var statearr_26208_26224 = state_26194__$1;
(statearr_26208_26224[(2)] = null);

(statearr_26208_26224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (10))){
var inst_26186 = (state_26194[(2)]);
var state_26194__$1 = state_26194;
var statearr_26209_26225 = state_26194__$1;
(statearr_26209_26225[(2)] = inst_26186);

(statearr_26209_26225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26195 === (8))){
var inst_26176 = (state_26194[(7)]);
var state_26194__$1 = state_26194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26194__$1,(11),out,inst_26176);
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
});})(c__24743__auto___26215,out))
;
return ((function (switch__24653__auto__,c__24743__auto___26215,out){
return (function() {
var cljs$core$async$state_machine__24654__auto__ = null;
var cljs$core$async$state_machine__24654__auto____0 = (function (){
var statearr_26210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26210[(0)] = cljs$core$async$state_machine__24654__auto__);

(statearr_26210[(1)] = (1));

return statearr_26210;
});
var cljs$core$async$state_machine__24654__auto____1 = (function (state_26194){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_26194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e26211){if((e26211 instanceof Object)){
var ex__24657__auto__ = e26211;
var statearr_26212_26226 = state_26194;
(statearr_26212_26226[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26227 = state_26194;
state_26194 = G__26227;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$state_machine__24654__auto__ = function(state_26194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24654__auto____1.call(this,state_26194);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24654__auto____0;
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24654__auto____1;
return cljs$core$async$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___26215,out))
})();
var state__24745__auto__ = (function (){var statearr_26213 = f__24744__auto__.call(null);
(statearr_26213[(6)] = c__24743__auto___26215);

return statearr_26213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___26215,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26229 = (function (f,ch,meta26230){
this.f = f;
this.ch = ch;
this.meta26230 = meta26230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26231,meta26230__$1){
var self__ = this;
var _26231__$1 = this;
return (new cljs.core.async.t_cljs$core$async26229(self__.f,self__.ch,meta26230__$1));
});

cljs.core.async.t_cljs$core$async26229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26231){
var self__ = this;
var _26231__$1 = this;
return self__.meta26230;
});

cljs.core.async.t_cljs$core$async26229.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26229.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26232 = (function (f,ch,meta26230,_,fn1,meta26233){
this.f = f;
this.ch = ch;
this.meta26230 = meta26230;
this._ = _;
this.fn1 = fn1;
this.meta26233 = meta26233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26234,meta26233__$1){
var self__ = this;
var _26234__$1 = this;
return (new cljs.core.async.t_cljs$core$async26232(self__.f,self__.ch,self__.meta26230,self__._,self__.fn1,meta26233__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26234){
var self__ = this;
var _26234__$1 = this;
return self__.meta26233;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26228_SHARP_){
return f1.call(null,(((p1__26228_SHARP_ == null))?null:self__.f.call(null,p1__26228_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26232.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26230","meta26230",-528191907,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26229","cljs.core.async/t_cljs$core$async26229",1319160587,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26233","meta26233",1970423548,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26232";

cljs.core.async.t_cljs$core$async26232.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26232");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26232.
 */
cljs.core.async.__GT_t_cljs$core$async26232 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26232(f__$1,ch__$1,meta26230__$1,___$2,fn1__$1,meta26233){
return (new cljs.core.async.t_cljs$core$async26232(f__$1,ch__$1,meta26230__$1,___$2,fn1__$1,meta26233));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26232(self__.f,self__.ch,self__.meta26230,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26229.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26230","meta26230",-528191907,null)], null);
});

cljs.core.async.t_cljs$core$async26229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26229";

cljs.core.async.t_cljs$core$async26229.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26229");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26229.
 */
cljs.core.async.__GT_t_cljs$core$async26229 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26229(f__$1,ch__$1,meta26230){
return (new cljs.core.async.t_cljs$core$async26229(f__$1,ch__$1,meta26230));
});

}

return (new cljs.core.async.t_cljs$core$async26229(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26235 = (function (f,ch,meta26236){
this.f = f;
this.ch = ch;
this.meta26236 = meta26236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26237,meta26236__$1){
var self__ = this;
var _26237__$1 = this;
return (new cljs.core.async.t_cljs$core$async26235(self__.f,self__.ch,meta26236__$1));
});

cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26237){
var self__ = this;
var _26237__$1 = this;
return self__.meta26236;
});

cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26235.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26236","meta26236",-125165263,null)], null);
});

cljs.core.async.t_cljs$core$async26235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26235";

cljs.core.async.t_cljs$core$async26235.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26235");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26235.
 */
cljs.core.async.__GT_t_cljs$core$async26235 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26235(f__$1,ch__$1,meta26236){
return (new cljs.core.async.t_cljs$core$async26235(f__$1,ch__$1,meta26236));
});

}

return (new cljs.core.async.t_cljs$core$async26235(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26238 = (function (p,ch,meta26239){
this.p = p;
this.ch = ch;
this.meta26239 = meta26239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26240,meta26239__$1){
var self__ = this;
var _26240__$1 = this;
return (new cljs.core.async.t_cljs$core$async26238(self__.p,self__.ch,meta26239__$1));
});

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26240){
var self__ = this;
var _26240__$1 = this;
return self__.meta26239;
});

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26239","meta26239",-1391447877,null)], null);
});

cljs.core.async.t_cljs$core$async26238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26238";

cljs.core.async.t_cljs$core$async26238.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26238");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26238.
 */
cljs.core.async.__GT_t_cljs$core$async26238 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26238(p__$1,ch__$1,meta26239){
return (new cljs.core.async.t_cljs$core$async26238(p__$1,ch__$1,meta26239));
});

}

return (new cljs.core.async.t_cljs$core$async26238(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26242 = arguments.length;
switch (G__26242) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24743__auto___26282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___26282,out){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___26282,out){
return (function (state_26263){
var state_val_26264 = (state_26263[(1)]);
if((state_val_26264 === (7))){
var inst_26259 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26265_26283 = state_26263__$1;
(statearr_26265_26283[(2)] = inst_26259);

(statearr_26265_26283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (1))){
var state_26263__$1 = state_26263;
var statearr_26266_26284 = state_26263__$1;
(statearr_26266_26284[(2)] = null);

(statearr_26266_26284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (4))){
var inst_26245 = (state_26263[(7)]);
var inst_26245__$1 = (state_26263[(2)]);
var inst_26246 = (inst_26245__$1 == null);
var state_26263__$1 = (function (){var statearr_26267 = state_26263;
(statearr_26267[(7)] = inst_26245__$1);

return statearr_26267;
})();
if(cljs.core.truth_(inst_26246)){
var statearr_26268_26285 = state_26263__$1;
(statearr_26268_26285[(1)] = (5));

} else {
var statearr_26269_26286 = state_26263__$1;
(statearr_26269_26286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (6))){
var inst_26245 = (state_26263[(7)]);
var inst_26250 = p.call(null,inst_26245);
var state_26263__$1 = state_26263;
if(cljs.core.truth_(inst_26250)){
var statearr_26270_26287 = state_26263__$1;
(statearr_26270_26287[(1)] = (8));

} else {
var statearr_26271_26288 = state_26263__$1;
(statearr_26271_26288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (3))){
var inst_26261 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26263__$1,inst_26261);
} else {
if((state_val_26264 === (2))){
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26263__$1,(4),ch);
} else {
if((state_val_26264 === (11))){
var inst_26253 = (state_26263[(2)]);
var state_26263__$1 = state_26263;
var statearr_26272_26289 = state_26263__$1;
(statearr_26272_26289[(2)] = inst_26253);

(statearr_26272_26289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (9))){
var state_26263__$1 = state_26263;
var statearr_26273_26290 = state_26263__$1;
(statearr_26273_26290[(2)] = null);

(statearr_26273_26290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (5))){
var inst_26248 = cljs.core.async.close_BANG_.call(null,out);
var state_26263__$1 = state_26263;
var statearr_26274_26291 = state_26263__$1;
(statearr_26274_26291[(2)] = inst_26248);

(statearr_26274_26291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (10))){
var inst_26256 = (state_26263[(2)]);
var state_26263__$1 = (function (){var statearr_26275 = state_26263;
(statearr_26275[(8)] = inst_26256);

return statearr_26275;
})();
var statearr_26276_26292 = state_26263__$1;
(statearr_26276_26292[(2)] = null);

(statearr_26276_26292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26264 === (8))){
var inst_26245 = (state_26263[(7)]);
var state_26263__$1 = state_26263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26263__$1,(11),out,inst_26245);
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
});})(c__24743__auto___26282,out))
;
return ((function (switch__24653__auto__,c__24743__auto___26282,out){
return (function() {
var cljs$core$async$state_machine__24654__auto__ = null;
var cljs$core$async$state_machine__24654__auto____0 = (function (){
var statearr_26277 = [null,null,null,null,null,null,null,null,null];
(statearr_26277[(0)] = cljs$core$async$state_machine__24654__auto__);

(statearr_26277[(1)] = (1));

return statearr_26277;
});
var cljs$core$async$state_machine__24654__auto____1 = (function (state_26263){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_26263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e26278){if((e26278 instanceof Object)){
var ex__24657__auto__ = e26278;
var statearr_26279_26293 = state_26263;
(statearr_26279_26293[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26294 = state_26263;
state_26263 = G__26294;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$state_machine__24654__auto__ = function(state_26263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24654__auto____1.call(this,state_26263);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24654__auto____0;
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24654__auto____1;
return cljs$core$async$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___26282,out))
})();
var state__24745__auto__ = (function (){var statearr_26280 = f__24744__auto__.call(null);
(statearr_26280[(6)] = c__24743__auto___26282);

return statearr_26280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___26282,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26296 = arguments.length;
switch (G__26296) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24743__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto__){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto__){
return (function (state_26359){
var state_val_26360 = (state_26359[(1)]);
if((state_val_26360 === (7))){
var inst_26355 = (state_26359[(2)]);
var state_26359__$1 = state_26359;
var statearr_26361_26399 = state_26359__$1;
(statearr_26361_26399[(2)] = inst_26355);

(statearr_26361_26399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (20))){
var inst_26325 = (state_26359[(7)]);
var inst_26336 = (state_26359[(2)]);
var inst_26337 = cljs.core.next.call(null,inst_26325);
var inst_26311 = inst_26337;
var inst_26312 = null;
var inst_26313 = (0);
var inst_26314 = (0);
var state_26359__$1 = (function (){var statearr_26362 = state_26359;
(statearr_26362[(8)] = inst_26314);

(statearr_26362[(9)] = inst_26313);

(statearr_26362[(10)] = inst_26311);

(statearr_26362[(11)] = inst_26312);

(statearr_26362[(12)] = inst_26336);

return statearr_26362;
})();
var statearr_26363_26400 = state_26359__$1;
(statearr_26363_26400[(2)] = null);

(statearr_26363_26400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (1))){
var state_26359__$1 = state_26359;
var statearr_26364_26401 = state_26359__$1;
(statearr_26364_26401[(2)] = null);

(statearr_26364_26401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (4))){
var inst_26300 = (state_26359[(13)]);
var inst_26300__$1 = (state_26359[(2)]);
var inst_26301 = (inst_26300__$1 == null);
var state_26359__$1 = (function (){var statearr_26365 = state_26359;
(statearr_26365[(13)] = inst_26300__$1);

return statearr_26365;
})();
if(cljs.core.truth_(inst_26301)){
var statearr_26366_26402 = state_26359__$1;
(statearr_26366_26402[(1)] = (5));

} else {
var statearr_26367_26403 = state_26359__$1;
(statearr_26367_26403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (15))){
var state_26359__$1 = state_26359;
var statearr_26371_26404 = state_26359__$1;
(statearr_26371_26404[(2)] = null);

(statearr_26371_26404[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (21))){
var state_26359__$1 = state_26359;
var statearr_26372_26405 = state_26359__$1;
(statearr_26372_26405[(2)] = null);

(statearr_26372_26405[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (13))){
var inst_26314 = (state_26359[(8)]);
var inst_26313 = (state_26359[(9)]);
var inst_26311 = (state_26359[(10)]);
var inst_26312 = (state_26359[(11)]);
var inst_26321 = (state_26359[(2)]);
var inst_26322 = (inst_26314 + (1));
var tmp26368 = inst_26313;
var tmp26369 = inst_26311;
var tmp26370 = inst_26312;
var inst_26311__$1 = tmp26369;
var inst_26312__$1 = tmp26370;
var inst_26313__$1 = tmp26368;
var inst_26314__$1 = inst_26322;
var state_26359__$1 = (function (){var statearr_26373 = state_26359;
(statearr_26373[(8)] = inst_26314__$1);

(statearr_26373[(9)] = inst_26313__$1);

(statearr_26373[(10)] = inst_26311__$1);

(statearr_26373[(11)] = inst_26312__$1);

(statearr_26373[(14)] = inst_26321);

return statearr_26373;
})();
var statearr_26374_26406 = state_26359__$1;
(statearr_26374_26406[(2)] = null);

(statearr_26374_26406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (22))){
var state_26359__$1 = state_26359;
var statearr_26375_26407 = state_26359__$1;
(statearr_26375_26407[(2)] = null);

(statearr_26375_26407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (6))){
var inst_26300 = (state_26359[(13)]);
var inst_26309 = f.call(null,inst_26300);
var inst_26310 = cljs.core.seq.call(null,inst_26309);
var inst_26311 = inst_26310;
var inst_26312 = null;
var inst_26313 = (0);
var inst_26314 = (0);
var state_26359__$1 = (function (){var statearr_26376 = state_26359;
(statearr_26376[(8)] = inst_26314);

(statearr_26376[(9)] = inst_26313);

(statearr_26376[(10)] = inst_26311);

(statearr_26376[(11)] = inst_26312);

return statearr_26376;
})();
var statearr_26377_26408 = state_26359__$1;
(statearr_26377_26408[(2)] = null);

(statearr_26377_26408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (17))){
var inst_26325 = (state_26359[(7)]);
var inst_26329 = cljs.core.chunk_first.call(null,inst_26325);
var inst_26330 = cljs.core.chunk_rest.call(null,inst_26325);
var inst_26331 = cljs.core.count.call(null,inst_26329);
var inst_26311 = inst_26330;
var inst_26312 = inst_26329;
var inst_26313 = inst_26331;
var inst_26314 = (0);
var state_26359__$1 = (function (){var statearr_26378 = state_26359;
(statearr_26378[(8)] = inst_26314);

(statearr_26378[(9)] = inst_26313);

(statearr_26378[(10)] = inst_26311);

(statearr_26378[(11)] = inst_26312);

return statearr_26378;
})();
var statearr_26379_26409 = state_26359__$1;
(statearr_26379_26409[(2)] = null);

(statearr_26379_26409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (3))){
var inst_26357 = (state_26359[(2)]);
var state_26359__$1 = state_26359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26359__$1,inst_26357);
} else {
if((state_val_26360 === (12))){
var inst_26345 = (state_26359[(2)]);
var state_26359__$1 = state_26359;
var statearr_26380_26410 = state_26359__$1;
(statearr_26380_26410[(2)] = inst_26345);

(statearr_26380_26410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (2))){
var state_26359__$1 = state_26359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26359__$1,(4),in$);
} else {
if((state_val_26360 === (23))){
var inst_26353 = (state_26359[(2)]);
var state_26359__$1 = state_26359;
var statearr_26381_26411 = state_26359__$1;
(statearr_26381_26411[(2)] = inst_26353);

(statearr_26381_26411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (19))){
var inst_26340 = (state_26359[(2)]);
var state_26359__$1 = state_26359;
var statearr_26382_26412 = state_26359__$1;
(statearr_26382_26412[(2)] = inst_26340);

(statearr_26382_26412[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (11))){
var inst_26311 = (state_26359[(10)]);
var inst_26325 = (state_26359[(7)]);
var inst_26325__$1 = cljs.core.seq.call(null,inst_26311);
var state_26359__$1 = (function (){var statearr_26383 = state_26359;
(statearr_26383[(7)] = inst_26325__$1);

return statearr_26383;
})();
if(inst_26325__$1){
var statearr_26384_26413 = state_26359__$1;
(statearr_26384_26413[(1)] = (14));

} else {
var statearr_26385_26414 = state_26359__$1;
(statearr_26385_26414[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (9))){
var inst_26347 = (state_26359[(2)]);
var inst_26348 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26359__$1 = (function (){var statearr_26386 = state_26359;
(statearr_26386[(15)] = inst_26347);

return statearr_26386;
})();
if(cljs.core.truth_(inst_26348)){
var statearr_26387_26415 = state_26359__$1;
(statearr_26387_26415[(1)] = (21));

} else {
var statearr_26388_26416 = state_26359__$1;
(statearr_26388_26416[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (5))){
var inst_26303 = cljs.core.async.close_BANG_.call(null,out);
var state_26359__$1 = state_26359;
var statearr_26389_26417 = state_26359__$1;
(statearr_26389_26417[(2)] = inst_26303);

(statearr_26389_26417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (14))){
var inst_26325 = (state_26359[(7)]);
var inst_26327 = cljs.core.chunked_seq_QMARK_.call(null,inst_26325);
var state_26359__$1 = state_26359;
if(inst_26327){
var statearr_26390_26418 = state_26359__$1;
(statearr_26390_26418[(1)] = (17));

} else {
var statearr_26391_26419 = state_26359__$1;
(statearr_26391_26419[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (16))){
var inst_26343 = (state_26359[(2)]);
var state_26359__$1 = state_26359;
var statearr_26392_26420 = state_26359__$1;
(statearr_26392_26420[(2)] = inst_26343);

(statearr_26392_26420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26360 === (10))){
var inst_26314 = (state_26359[(8)]);
var inst_26312 = (state_26359[(11)]);
var inst_26319 = cljs.core._nth.call(null,inst_26312,inst_26314);
var state_26359__$1 = state_26359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26359__$1,(13),out,inst_26319);
} else {
if((state_val_26360 === (18))){
var inst_26325 = (state_26359[(7)]);
var inst_26334 = cljs.core.first.call(null,inst_26325);
var state_26359__$1 = state_26359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26359__$1,(20),out,inst_26334);
} else {
if((state_val_26360 === (8))){
var inst_26314 = (state_26359[(8)]);
var inst_26313 = (state_26359[(9)]);
var inst_26316 = (inst_26314 < inst_26313);
var inst_26317 = inst_26316;
var state_26359__$1 = state_26359;
if(cljs.core.truth_(inst_26317)){
var statearr_26393_26421 = state_26359__$1;
(statearr_26393_26421[(1)] = (10));

} else {
var statearr_26394_26422 = state_26359__$1;
(statearr_26394_26422[(1)] = (11));

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
}
}
}
}
}
}
});})(c__24743__auto__))
;
return ((function (switch__24653__auto__,c__24743__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24654__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24654__auto____0 = (function (){
var statearr_26395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26395[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24654__auto__);

(statearr_26395[(1)] = (1));

return statearr_26395;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24654__auto____1 = (function (state_26359){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_26359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e26396){if((e26396 instanceof Object)){
var ex__24657__auto__ = e26396;
var statearr_26397_26423 = state_26359;
(statearr_26397_26423[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26424 = state_26359;
state_26359 = G__26424;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24654__auto__ = function(state_26359){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24654__auto____1.call(this,state_26359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24654__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24654__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto__))
})();
var state__24745__auto__ = (function (){var statearr_26398 = f__24744__auto__.call(null);
(statearr_26398[(6)] = c__24743__auto__);

return statearr_26398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto__))
);

return c__24743__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__26426 = arguments.length;
switch (G__26426) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__26429 = arguments.length;
switch (G__26429) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__26432 = arguments.length;
switch (G__26432) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24743__auto___26479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___26479,out){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___26479,out){
return (function (state_26456){
var state_val_26457 = (state_26456[(1)]);
if((state_val_26457 === (7))){
var inst_26451 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
var statearr_26458_26480 = state_26456__$1;
(statearr_26458_26480[(2)] = inst_26451);

(statearr_26458_26480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (1))){
var inst_26433 = null;
var state_26456__$1 = (function (){var statearr_26459 = state_26456;
(statearr_26459[(7)] = inst_26433);

return statearr_26459;
})();
var statearr_26460_26481 = state_26456__$1;
(statearr_26460_26481[(2)] = null);

(statearr_26460_26481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (4))){
var inst_26436 = (state_26456[(8)]);
var inst_26436__$1 = (state_26456[(2)]);
var inst_26437 = (inst_26436__$1 == null);
var inst_26438 = cljs.core.not.call(null,inst_26437);
var state_26456__$1 = (function (){var statearr_26461 = state_26456;
(statearr_26461[(8)] = inst_26436__$1);

return statearr_26461;
})();
if(inst_26438){
var statearr_26462_26482 = state_26456__$1;
(statearr_26462_26482[(1)] = (5));

} else {
var statearr_26463_26483 = state_26456__$1;
(statearr_26463_26483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (6))){
var state_26456__$1 = state_26456;
var statearr_26464_26484 = state_26456__$1;
(statearr_26464_26484[(2)] = null);

(statearr_26464_26484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (3))){
var inst_26453 = (state_26456[(2)]);
var inst_26454 = cljs.core.async.close_BANG_.call(null,out);
var state_26456__$1 = (function (){var statearr_26465 = state_26456;
(statearr_26465[(9)] = inst_26453);

return statearr_26465;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26456__$1,inst_26454);
} else {
if((state_val_26457 === (2))){
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26456__$1,(4),ch);
} else {
if((state_val_26457 === (11))){
var inst_26436 = (state_26456[(8)]);
var inst_26445 = (state_26456[(2)]);
var inst_26433 = inst_26436;
var state_26456__$1 = (function (){var statearr_26466 = state_26456;
(statearr_26466[(10)] = inst_26445);

(statearr_26466[(7)] = inst_26433);

return statearr_26466;
})();
var statearr_26467_26485 = state_26456__$1;
(statearr_26467_26485[(2)] = null);

(statearr_26467_26485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (9))){
var inst_26436 = (state_26456[(8)]);
var state_26456__$1 = state_26456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26456__$1,(11),out,inst_26436);
} else {
if((state_val_26457 === (5))){
var inst_26433 = (state_26456[(7)]);
var inst_26436 = (state_26456[(8)]);
var inst_26440 = cljs.core._EQ_.call(null,inst_26436,inst_26433);
var state_26456__$1 = state_26456;
if(inst_26440){
var statearr_26469_26486 = state_26456__$1;
(statearr_26469_26486[(1)] = (8));

} else {
var statearr_26470_26487 = state_26456__$1;
(statearr_26470_26487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (10))){
var inst_26448 = (state_26456[(2)]);
var state_26456__$1 = state_26456;
var statearr_26471_26488 = state_26456__$1;
(statearr_26471_26488[(2)] = inst_26448);

(statearr_26471_26488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26457 === (8))){
var inst_26433 = (state_26456[(7)]);
var tmp26468 = inst_26433;
var inst_26433__$1 = tmp26468;
var state_26456__$1 = (function (){var statearr_26472 = state_26456;
(statearr_26472[(7)] = inst_26433__$1);

return statearr_26472;
})();
var statearr_26473_26489 = state_26456__$1;
(statearr_26473_26489[(2)] = null);

(statearr_26473_26489[(1)] = (2));


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
});})(c__24743__auto___26479,out))
;
return ((function (switch__24653__auto__,c__24743__auto___26479,out){
return (function() {
var cljs$core$async$state_machine__24654__auto__ = null;
var cljs$core$async$state_machine__24654__auto____0 = (function (){
var statearr_26474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26474[(0)] = cljs$core$async$state_machine__24654__auto__);

(statearr_26474[(1)] = (1));

return statearr_26474;
});
var cljs$core$async$state_machine__24654__auto____1 = (function (state_26456){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_26456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e26475){if((e26475 instanceof Object)){
var ex__24657__auto__ = e26475;
var statearr_26476_26490 = state_26456;
(statearr_26476_26490[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26491 = state_26456;
state_26456 = G__26491;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$state_machine__24654__auto__ = function(state_26456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24654__auto____1.call(this,state_26456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24654__auto____0;
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24654__auto____1;
return cljs$core$async$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___26479,out))
})();
var state__24745__auto__ = (function (){var statearr_26477 = f__24744__auto__.call(null);
(statearr_26477[(6)] = c__24743__auto___26479);

return statearr_26477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___26479,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__26493 = arguments.length;
switch (G__26493) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24743__auto___26559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___26559,out){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___26559,out){
return (function (state_26531){
var state_val_26532 = (state_26531[(1)]);
if((state_val_26532 === (7))){
var inst_26527 = (state_26531[(2)]);
var state_26531__$1 = state_26531;
var statearr_26533_26560 = state_26531__$1;
(statearr_26533_26560[(2)] = inst_26527);

(statearr_26533_26560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (1))){
var inst_26494 = (new Array(n));
var inst_26495 = inst_26494;
var inst_26496 = (0);
var state_26531__$1 = (function (){var statearr_26534 = state_26531;
(statearr_26534[(7)] = inst_26496);

(statearr_26534[(8)] = inst_26495);

return statearr_26534;
})();
var statearr_26535_26561 = state_26531__$1;
(statearr_26535_26561[(2)] = null);

(statearr_26535_26561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (4))){
var inst_26499 = (state_26531[(9)]);
var inst_26499__$1 = (state_26531[(2)]);
var inst_26500 = (inst_26499__$1 == null);
var inst_26501 = cljs.core.not.call(null,inst_26500);
var state_26531__$1 = (function (){var statearr_26536 = state_26531;
(statearr_26536[(9)] = inst_26499__$1);

return statearr_26536;
})();
if(inst_26501){
var statearr_26537_26562 = state_26531__$1;
(statearr_26537_26562[(1)] = (5));

} else {
var statearr_26538_26563 = state_26531__$1;
(statearr_26538_26563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (15))){
var inst_26521 = (state_26531[(2)]);
var state_26531__$1 = state_26531;
var statearr_26539_26564 = state_26531__$1;
(statearr_26539_26564[(2)] = inst_26521);

(statearr_26539_26564[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (13))){
var state_26531__$1 = state_26531;
var statearr_26540_26565 = state_26531__$1;
(statearr_26540_26565[(2)] = null);

(statearr_26540_26565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (6))){
var inst_26496 = (state_26531[(7)]);
var inst_26517 = (inst_26496 > (0));
var state_26531__$1 = state_26531;
if(cljs.core.truth_(inst_26517)){
var statearr_26541_26566 = state_26531__$1;
(statearr_26541_26566[(1)] = (12));

} else {
var statearr_26542_26567 = state_26531__$1;
(statearr_26542_26567[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (3))){
var inst_26529 = (state_26531[(2)]);
var state_26531__$1 = state_26531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26531__$1,inst_26529);
} else {
if((state_val_26532 === (12))){
var inst_26495 = (state_26531[(8)]);
var inst_26519 = cljs.core.vec.call(null,inst_26495);
var state_26531__$1 = state_26531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26531__$1,(15),out,inst_26519);
} else {
if((state_val_26532 === (2))){
var state_26531__$1 = state_26531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26531__$1,(4),ch);
} else {
if((state_val_26532 === (11))){
var inst_26511 = (state_26531[(2)]);
var inst_26512 = (new Array(n));
var inst_26495 = inst_26512;
var inst_26496 = (0);
var state_26531__$1 = (function (){var statearr_26543 = state_26531;
(statearr_26543[(7)] = inst_26496);

(statearr_26543[(10)] = inst_26511);

(statearr_26543[(8)] = inst_26495);

return statearr_26543;
})();
var statearr_26544_26568 = state_26531__$1;
(statearr_26544_26568[(2)] = null);

(statearr_26544_26568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (9))){
var inst_26495 = (state_26531[(8)]);
var inst_26509 = cljs.core.vec.call(null,inst_26495);
var state_26531__$1 = state_26531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26531__$1,(11),out,inst_26509);
} else {
if((state_val_26532 === (5))){
var inst_26496 = (state_26531[(7)]);
var inst_26504 = (state_26531[(11)]);
var inst_26499 = (state_26531[(9)]);
var inst_26495 = (state_26531[(8)]);
var inst_26503 = (inst_26495[inst_26496] = inst_26499);
var inst_26504__$1 = (inst_26496 + (1));
var inst_26505 = (inst_26504__$1 < n);
var state_26531__$1 = (function (){var statearr_26545 = state_26531;
(statearr_26545[(12)] = inst_26503);

(statearr_26545[(11)] = inst_26504__$1);

return statearr_26545;
})();
if(cljs.core.truth_(inst_26505)){
var statearr_26546_26569 = state_26531__$1;
(statearr_26546_26569[(1)] = (8));

} else {
var statearr_26547_26570 = state_26531__$1;
(statearr_26547_26570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (14))){
var inst_26524 = (state_26531[(2)]);
var inst_26525 = cljs.core.async.close_BANG_.call(null,out);
var state_26531__$1 = (function (){var statearr_26549 = state_26531;
(statearr_26549[(13)] = inst_26524);

return statearr_26549;
})();
var statearr_26550_26571 = state_26531__$1;
(statearr_26550_26571[(2)] = inst_26525);

(statearr_26550_26571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (10))){
var inst_26515 = (state_26531[(2)]);
var state_26531__$1 = state_26531;
var statearr_26551_26572 = state_26531__$1;
(statearr_26551_26572[(2)] = inst_26515);

(statearr_26551_26572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26532 === (8))){
var inst_26504 = (state_26531[(11)]);
var inst_26495 = (state_26531[(8)]);
var tmp26548 = inst_26495;
var inst_26495__$1 = tmp26548;
var inst_26496 = inst_26504;
var state_26531__$1 = (function (){var statearr_26552 = state_26531;
(statearr_26552[(7)] = inst_26496);

(statearr_26552[(8)] = inst_26495__$1);

return statearr_26552;
})();
var statearr_26553_26573 = state_26531__$1;
(statearr_26553_26573[(2)] = null);

(statearr_26553_26573[(1)] = (2));


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
});})(c__24743__auto___26559,out))
;
return ((function (switch__24653__auto__,c__24743__auto___26559,out){
return (function() {
var cljs$core$async$state_machine__24654__auto__ = null;
var cljs$core$async$state_machine__24654__auto____0 = (function (){
var statearr_26554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26554[(0)] = cljs$core$async$state_machine__24654__auto__);

(statearr_26554[(1)] = (1));

return statearr_26554;
});
var cljs$core$async$state_machine__24654__auto____1 = (function (state_26531){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_26531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e26555){if((e26555 instanceof Object)){
var ex__24657__auto__ = e26555;
var statearr_26556_26574 = state_26531;
(statearr_26556_26574[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26575 = state_26531;
state_26531 = G__26575;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$state_machine__24654__auto__ = function(state_26531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24654__auto____1.call(this,state_26531);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24654__auto____0;
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24654__auto____1;
return cljs$core$async$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___26559,out))
})();
var state__24745__auto__ = (function (){var statearr_26557 = f__24744__auto__.call(null);
(statearr_26557[(6)] = c__24743__auto___26559);

return statearr_26557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___26559,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__26577 = arguments.length;
switch (G__26577) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24743__auto___26647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24743__auto___26647,out){
return (function (){
var f__24744__auto__ = (function (){var switch__24653__auto__ = ((function (c__24743__auto___26647,out){
return (function (state_26619){
var state_val_26620 = (state_26619[(1)]);
if((state_val_26620 === (7))){
var inst_26615 = (state_26619[(2)]);
var state_26619__$1 = state_26619;
var statearr_26621_26648 = state_26619__$1;
(statearr_26621_26648[(2)] = inst_26615);

(statearr_26621_26648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (1))){
var inst_26578 = [];
var inst_26579 = inst_26578;
var inst_26580 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26619__$1 = (function (){var statearr_26622 = state_26619;
(statearr_26622[(7)] = inst_26580);

(statearr_26622[(8)] = inst_26579);

return statearr_26622;
})();
var statearr_26623_26649 = state_26619__$1;
(statearr_26623_26649[(2)] = null);

(statearr_26623_26649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (4))){
var inst_26583 = (state_26619[(9)]);
var inst_26583__$1 = (state_26619[(2)]);
var inst_26584 = (inst_26583__$1 == null);
var inst_26585 = cljs.core.not.call(null,inst_26584);
var state_26619__$1 = (function (){var statearr_26624 = state_26619;
(statearr_26624[(9)] = inst_26583__$1);

return statearr_26624;
})();
if(inst_26585){
var statearr_26625_26650 = state_26619__$1;
(statearr_26625_26650[(1)] = (5));

} else {
var statearr_26626_26651 = state_26619__$1;
(statearr_26626_26651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (15))){
var inst_26609 = (state_26619[(2)]);
var state_26619__$1 = state_26619;
var statearr_26627_26652 = state_26619__$1;
(statearr_26627_26652[(2)] = inst_26609);

(statearr_26627_26652[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (13))){
var state_26619__$1 = state_26619;
var statearr_26628_26653 = state_26619__$1;
(statearr_26628_26653[(2)] = null);

(statearr_26628_26653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (6))){
var inst_26579 = (state_26619[(8)]);
var inst_26604 = inst_26579.length;
var inst_26605 = (inst_26604 > (0));
var state_26619__$1 = state_26619;
if(cljs.core.truth_(inst_26605)){
var statearr_26629_26654 = state_26619__$1;
(statearr_26629_26654[(1)] = (12));

} else {
var statearr_26630_26655 = state_26619__$1;
(statearr_26630_26655[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (3))){
var inst_26617 = (state_26619[(2)]);
var state_26619__$1 = state_26619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26619__$1,inst_26617);
} else {
if((state_val_26620 === (12))){
var inst_26579 = (state_26619[(8)]);
var inst_26607 = cljs.core.vec.call(null,inst_26579);
var state_26619__$1 = state_26619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26619__$1,(15),out,inst_26607);
} else {
if((state_val_26620 === (2))){
var state_26619__$1 = state_26619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26619__$1,(4),ch);
} else {
if((state_val_26620 === (11))){
var inst_26587 = (state_26619[(10)]);
var inst_26583 = (state_26619[(9)]);
var inst_26597 = (state_26619[(2)]);
var inst_26598 = [];
var inst_26599 = inst_26598.push(inst_26583);
var inst_26579 = inst_26598;
var inst_26580 = inst_26587;
var state_26619__$1 = (function (){var statearr_26631 = state_26619;
(statearr_26631[(7)] = inst_26580);

(statearr_26631[(8)] = inst_26579);

(statearr_26631[(11)] = inst_26597);

(statearr_26631[(12)] = inst_26599);

return statearr_26631;
})();
var statearr_26632_26656 = state_26619__$1;
(statearr_26632_26656[(2)] = null);

(statearr_26632_26656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (9))){
var inst_26579 = (state_26619[(8)]);
var inst_26595 = cljs.core.vec.call(null,inst_26579);
var state_26619__$1 = state_26619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26619__$1,(11),out,inst_26595);
} else {
if((state_val_26620 === (5))){
var inst_26580 = (state_26619[(7)]);
var inst_26587 = (state_26619[(10)]);
var inst_26583 = (state_26619[(9)]);
var inst_26587__$1 = f.call(null,inst_26583);
var inst_26588 = cljs.core._EQ_.call(null,inst_26587__$1,inst_26580);
var inst_26589 = cljs.core.keyword_identical_QMARK_.call(null,inst_26580,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26590 = ((inst_26588) || (inst_26589));
var state_26619__$1 = (function (){var statearr_26633 = state_26619;
(statearr_26633[(10)] = inst_26587__$1);

return statearr_26633;
})();
if(cljs.core.truth_(inst_26590)){
var statearr_26634_26657 = state_26619__$1;
(statearr_26634_26657[(1)] = (8));

} else {
var statearr_26635_26658 = state_26619__$1;
(statearr_26635_26658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (14))){
var inst_26612 = (state_26619[(2)]);
var inst_26613 = cljs.core.async.close_BANG_.call(null,out);
var state_26619__$1 = (function (){var statearr_26637 = state_26619;
(statearr_26637[(13)] = inst_26612);

return statearr_26637;
})();
var statearr_26638_26659 = state_26619__$1;
(statearr_26638_26659[(2)] = inst_26613);

(statearr_26638_26659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (10))){
var inst_26602 = (state_26619[(2)]);
var state_26619__$1 = state_26619;
var statearr_26639_26660 = state_26619__$1;
(statearr_26639_26660[(2)] = inst_26602);

(statearr_26639_26660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26620 === (8))){
var inst_26587 = (state_26619[(10)]);
var inst_26583 = (state_26619[(9)]);
var inst_26579 = (state_26619[(8)]);
var inst_26592 = inst_26579.push(inst_26583);
var tmp26636 = inst_26579;
var inst_26579__$1 = tmp26636;
var inst_26580 = inst_26587;
var state_26619__$1 = (function (){var statearr_26640 = state_26619;
(statearr_26640[(7)] = inst_26580);

(statearr_26640[(14)] = inst_26592);

(statearr_26640[(8)] = inst_26579__$1);

return statearr_26640;
})();
var statearr_26641_26661 = state_26619__$1;
(statearr_26641_26661[(2)] = null);

(statearr_26641_26661[(1)] = (2));


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
});})(c__24743__auto___26647,out))
;
return ((function (switch__24653__auto__,c__24743__auto___26647,out){
return (function() {
var cljs$core$async$state_machine__24654__auto__ = null;
var cljs$core$async$state_machine__24654__auto____0 = (function (){
var statearr_26642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26642[(0)] = cljs$core$async$state_machine__24654__auto__);

(statearr_26642[(1)] = (1));

return statearr_26642;
});
var cljs$core$async$state_machine__24654__auto____1 = (function (state_26619){
while(true){
var ret_value__24655__auto__ = (function (){try{while(true){
var result__24656__auto__ = switch__24653__auto__.call(null,state_26619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24656__auto__;
}
break;
}
}catch (e26643){if((e26643 instanceof Object)){
var ex__24657__auto__ = e26643;
var statearr_26644_26662 = state_26619;
(statearr_26644_26662[(5)] = ex__24657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26663 = state_26619;
state_26619 = G__26663;
continue;
} else {
return ret_value__24655__auto__;
}
break;
}
});
cljs$core$async$state_machine__24654__auto__ = function(state_26619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24654__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24654__auto____1.call(this,state_26619);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24654__auto____0;
cljs$core$async$state_machine__24654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24654__auto____1;
return cljs$core$async$state_machine__24654__auto__;
})()
;})(switch__24653__auto__,c__24743__auto___26647,out))
})();
var state__24745__auto__ = (function (){var statearr_26645 = f__24744__auto__.call(null);
(statearr_26645[(6)] = c__24743__auto___26647);

return statearr_26645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24745__auto__);
});})(c__24743__auto___26647,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1527566157819
