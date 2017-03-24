// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27215 = [];
var len__26073__auto___27221 = arguments.length;
var i__26074__auto___27222 = (0);
while(true){
if((i__26074__auto___27222 < len__26073__auto___27221)){
args27215.push((arguments[i__26074__auto___27222]));

var G__27223 = (i__26074__auto___27222 + (1));
i__26074__auto___27222 = G__27223;
continue;
} else {
}
break;
}

var G__27217 = args27215.length;
switch (G__27217) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27215.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27218 = (function (f,blockable,meta27219){
this.f = f;
this.blockable = blockable;
this.meta27219 = meta27219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27220,meta27219__$1){
var self__ = this;
var _27220__$1 = this;
return (new cljs.core.async.t_cljs$core$async27218(self__.f,self__.blockable,meta27219__$1));
});

cljs.core.async.t_cljs$core$async27218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27220){
var self__ = this;
var _27220__$1 = this;
return self__.meta27219;
});

cljs.core.async.t_cljs$core$async27218.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27218.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27218.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27218.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27219","meta27219",-1490320740,null)], null);
});

cljs.core.async.t_cljs$core$async27218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27218";

cljs.core.async.t_cljs$core$async27218.cljs$lang$ctorPrWriter = (function (this__25571__auto__,writer__25572__auto__,opt__25573__auto__){
return cljs.core._write.call(null,writer__25572__auto__,"cljs.core.async/t_cljs$core$async27218");
});

cljs.core.async.__GT_t_cljs$core$async27218 = (function cljs$core$async$__GT_t_cljs$core$async27218(f__$1,blockable__$1,meta27219){
return (new cljs.core.async.t_cljs$core$async27218(f__$1,blockable__$1,meta27219));
});

}

return (new cljs.core.async.t_cljs$core$async27218(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args27227 = [];
var len__26073__auto___27230 = arguments.length;
var i__26074__auto___27231 = (0);
while(true){
if((i__26074__auto___27231 < len__26073__auto___27230)){
args27227.push((arguments[i__26074__auto___27231]));

var G__27232 = (i__26074__auto___27231 + (1));
i__26074__auto___27231 = G__27232;
continue;
} else {
}
break;
}

var G__27229 = args27227.length;
switch (G__27229) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27227.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args27234 = [];
var len__26073__auto___27237 = arguments.length;
var i__26074__auto___27238 = (0);
while(true){
if((i__26074__auto___27238 < len__26073__auto___27237)){
args27234.push((arguments[i__26074__auto___27238]));

var G__27239 = (i__26074__auto___27238 + (1));
i__26074__auto___27238 = G__27239;
continue;
} else {
}
break;
}

var G__27236 = args27234.length;
switch (G__27236) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27234.length)].join('')));

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
var args27241 = [];
var len__26073__auto___27244 = arguments.length;
var i__26074__auto___27245 = (0);
while(true){
if((i__26074__auto___27245 < len__26073__auto___27244)){
args27241.push((arguments[i__26074__auto___27245]));

var G__27246 = (i__26074__auto___27245 + (1));
i__26074__auto___27245 = G__27246;
continue;
} else {
}
break;
}

var G__27243 = args27241.length;
switch (G__27243) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27241.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27248 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27248);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27248,ret){
return (function (){
return fn1.call(null,val_27248);
});})(val_27248,ret))
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
var args27249 = [];
var len__26073__auto___27252 = arguments.length;
var i__26074__auto___27253 = (0);
while(true){
if((i__26074__auto___27253 < len__26073__auto___27252)){
args27249.push((arguments[i__26074__auto___27253]));

var G__27254 = (i__26074__auto___27253 + (1));
i__26074__auto___27253 = G__27254;
continue;
} else {
}
break;
}

var G__27251 = args27249.length;
switch (G__27251) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27249.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__25883__auto___27256 = n;
var x_27257 = (0);
while(true){
if((x_27257 < n__25883__auto___27256)){
(a[x_27257] = (0));

var G__27258 = (x_27257 + (1));
x_27257 = G__27258;
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

var G__27259 = (i + (1));
i = G__27259;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27263 = (function (flag,meta27264){
this.flag = flag;
this.meta27264 = meta27264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27265,meta27264__$1){
var self__ = this;
var _27265__$1 = this;
return (new cljs.core.async.t_cljs$core$async27263(self__.flag,meta27264__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27265){
var self__ = this;
var _27265__$1 = this;
return self__.meta27264;
});})(flag))
;

cljs.core.async.t_cljs$core$async27263.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27263.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27263.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27264","meta27264",1232482310,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27263";

cljs.core.async.t_cljs$core$async27263.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25571__auto__,writer__25572__auto__,opt__25573__auto__){
return cljs.core._write.call(null,writer__25572__auto__,"cljs.core.async/t_cljs$core$async27263");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27263 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27263(flag__$1,meta27264){
return (new cljs.core.async.t_cljs$core$async27263(flag__$1,meta27264));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27263(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27269 = (function (flag,cb,meta27270){
this.flag = flag;
this.cb = cb;
this.meta27270 = meta27270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27271,meta27270__$1){
var self__ = this;
var _27271__$1 = this;
return (new cljs.core.async.t_cljs$core$async27269(self__.flag,self__.cb,meta27270__$1));
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27271){
var self__ = this;
var _27271__$1 = this;
return self__.meta27270;
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27270","meta27270",-1007746192,null)], null);
});

cljs.core.async.t_cljs$core$async27269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27269";

cljs.core.async.t_cljs$core$async27269.cljs$lang$ctorPrWriter = (function (this__25571__auto__,writer__25572__auto__,opt__25573__auto__){
return cljs.core._write.call(null,writer__25572__auto__,"cljs.core.async/t_cljs$core$async27269");
});

cljs.core.async.__GT_t_cljs$core$async27269 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27269(flag__$1,cb__$1,meta27270){
return (new cljs.core.async.t_cljs$core$async27269(flag__$1,cb__$1,meta27270));
});

}

return (new cljs.core.async.t_cljs$core$async27269(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27272_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27272_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27273_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27273_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24965__auto__ = wport;
if(cljs.core.truth_(or__24965__auto__)){
return or__24965__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27274 = (i + (1));
i = G__27274;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24965__auto__ = ret;
if(cljs.core.truth_(or__24965__auto__)){
return or__24965__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24953__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24953__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24953__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__26080__auto__ = [];
var len__26073__auto___27280 = arguments.length;
var i__26074__auto___27281 = (0);
while(true){
if((i__26074__auto___27281 < len__26073__auto___27280)){
args__26080__auto__.push((arguments[i__26074__auto___27281]));

var G__27282 = (i__26074__auto___27281 + (1));
i__26074__auto___27281 = G__27282;
continue;
} else {
}
break;
}

var argseq__26081__auto__ = ((((1) < args__26080__auto__.length))?(new cljs.core.IndexedSeq(args__26080__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26081__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27277){
var map__27278 = p__27277;
var map__27278__$1 = ((((!((map__27278 == null)))?((((map__27278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27278):map__27278);
var opts = map__27278__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27275){
var G__27276 = cljs.core.first.call(null,seq27275);
var seq27275__$1 = cljs.core.next.call(null,seq27275);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27276,seq27275__$1);
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
var args27283 = [];
var len__26073__auto___27333 = arguments.length;
var i__26074__auto___27334 = (0);
while(true){
if((i__26074__auto___27334 < len__26073__auto___27333)){
args27283.push((arguments[i__26074__auto___27334]));

var G__27335 = (i__26074__auto___27334 + (1));
i__26074__auto___27334 = G__27335;
continue;
} else {
}
break;
}

var G__27285 = args27283.length;
switch (G__27285) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27283.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27170__auto___27337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___27337){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___27337){
return (function (state_27309){
var state_val_27310 = (state_27309[(1)]);
if((state_val_27310 === (7))){
var inst_27305 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27311_27338 = state_27309__$1;
(statearr_27311_27338[(2)] = inst_27305);

(statearr_27311_27338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (1))){
var state_27309__$1 = state_27309;
var statearr_27312_27339 = state_27309__$1;
(statearr_27312_27339[(2)] = null);

(statearr_27312_27339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (4))){
var inst_27288 = (state_27309[(7)]);
var inst_27288__$1 = (state_27309[(2)]);
var inst_27289 = (inst_27288__$1 == null);
var state_27309__$1 = (function (){var statearr_27313 = state_27309;
(statearr_27313[(7)] = inst_27288__$1);

return statearr_27313;
})();
if(cljs.core.truth_(inst_27289)){
var statearr_27314_27340 = state_27309__$1;
(statearr_27314_27340[(1)] = (5));

} else {
var statearr_27315_27341 = state_27309__$1;
(statearr_27315_27341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (13))){
var state_27309__$1 = state_27309;
var statearr_27316_27342 = state_27309__$1;
(statearr_27316_27342[(2)] = null);

(statearr_27316_27342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (6))){
var inst_27288 = (state_27309[(7)]);
var state_27309__$1 = state_27309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27309__$1,(11),to,inst_27288);
} else {
if((state_val_27310 === (3))){
var inst_27307 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27309__$1,inst_27307);
} else {
if((state_val_27310 === (12))){
var state_27309__$1 = state_27309;
var statearr_27317_27343 = state_27309__$1;
(statearr_27317_27343[(2)] = null);

(statearr_27317_27343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (2))){
var state_27309__$1 = state_27309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27309__$1,(4),from);
} else {
if((state_val_27310 === (11))){
var inst_27298 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
if(cljs.core.truth_(inst_27298)){
var statearr_27318_27344 = state_27309__$1;
(statearr_27318_27344[(1)] = (12));

} else {
var statearr_27319_27345 = state_27309__$1;
(statearr_27319_27345[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (9))){
var state_27309__$1 = state_27309;
var statearr_27320_27346 = state_27309__$1;
(statearr_27320_27346[(2)] = null);

(statearr_27320_27346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (5))){
var state_27309__$1 = state_27309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27321_27347 = state_27309__$1;
(statearr_27321_27347[(1)] = (8));

} else {
var statearr_27322_27348 = state_27309__$1;
(statearr_27322_27348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (14))){
var inst_27303 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27323_27349 = state_27309__$1;
(statearr_27323_27349[(2)] = inst_27303);

(statearr_27323_27349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (10))){
var inst_27295 = (state_27309[(2)]);
var state_27309__$1 = state_27309;
var statearr_27324_27350 = state_27309__$1;
(statearr_27324_27350[(2)] = inst_27295);

(statearr_27324_27350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27310 === (8))){
var inst_27292 = cljs.core.async.close_BANG_.call(null,to);
var state_27309__$1 = state_27309;
var statearr_27325_27351 = state_27309__$1;
(statearr_27325_27351[(2)] = inst_27292);

(statearr_27325_27351[(1)] = (10));


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
});})(c__27170__auto___27337))
;
return ((function (switch__27058__auto__,c__27170__auto___27337){
return (function() {
var cljs$core$async$state_machine__27059__auto__ = null;
var cljs$core$async$state_machine__27059__auto____0 = (function (){
var statearr_27329 = [null,null,null,null,null,null,null,null];
(statearr_27329[(0)] = cljs$core$async$state_machine__27059__auto__);

(statearr_27329[(1)] = (1));

return statearr_27329;
});
var cljs$core$async$state_machine__27059__auto____1 = (function (state_27309){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_27309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e27330){if((e27330 instanceof Object)){
var ex__27062__auto__ = e27330;
var statearr_27331_27352 = state_27309;
(statearr_27331_27352[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27353 = state_27309;
state_27309 = G__27353;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$state_machine__27059__auto__ = function(state_27309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27059__auto____1.call(this,state_27309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27059__auto____0;
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27059__auto____1;
return cljs$core$async$state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___27337))
})();
var state__27172__auto__ = (function (){var statearr_27332 = f__27171__auto__.call(null);
(statearr_27332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___27337);

return statearr_27332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___27337))
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
return (function (p__27541){
var vec__27542 = p__27541;
var v = cljs.core.nth.call(null,vec__27542,(0),null);
var p = cljs.core.nth.call(null,vec__27542,(1),null);
var job = vec__27542;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27170__auto___27728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___27728,res,vec__27542,v,p,job,jobs,results){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___27728,res,vec__27542,v,p,job,jobs,results){
return (function (state_27549){
var state_val_27550 = (state_27549[(1)]);
if((state_val_27550 === (1))){
var state_27549__$1 = state_27549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27549__$1,(2),res,v);
} else {
if((state_val_27550 === (2))){
var inst_27546 = (state_27549[(2)]);
var inst_27547 = cljs.core.async.close_BANG_.call(null,res);
var state_27549__$1 = (function (){var statearr_27551 = state_27549;
(statearr_27551[(7)] = inst_27546);

return statearr_27551;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27549__$1,inst_27547);
} else {
return null;
}
}
});})(c__27170__auto___27728,res,vec__27542,v,p,job,jobs,results))
;
return ((function (switch__27058__auto__,c__27170__auto___27728,res,vec__27542,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0 = (function (){
var statearr_27555 = [null,null,null,null,null,null,null,null];
(statearr_27555[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__);

(statearr_27555[(1)] = (1));

return statearr_27555;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1 = (function (state_27549){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_27549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e27556){if((e27556 instanceof Object)){
var ex__27062__auto__ = e27556;
var statearr_27557_27729 = state_27549;
(statearr_27557_27729[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27730 = state_27549;
state_27549 = G__27730;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__ = function(state_27549){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1.call(this,state_27549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___27728,res,vec__27542,v,p,job,jobs,results))
})();
var state__27172__auto__ = (function (){var statearr_27558 = f__27171__auto__.call(null);
(statearr_27558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___27728);

return statearr_27558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___27728,res,vec__27542,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27559){
var vec__27560 = p__27559;
var v = cljs.core.nth.call(null,vec__27560,(0),null);
var p = cljs.core.nth.call(null,vec__27560,(1),null);
var job = vec__27560;
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
var n__25883__auto___27731 = n;
var __27732 = (0);
while(true){
if((__27732 < n__25883__auto___27731)){
var G__27563_27733 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27563_27733) {
case "compute":
var c__27170__auto___27735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27732,c__27170__auto___27735,G__27563_27733,n__25883__auto___27731,jobs,results,process,async){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (__27732,c__27170__auto___27735,G__27563_27733,n__25883__auto___27731,jobs,results,process,async){
return (function (state_27576){
var state_val_27577 = (state_27576[(1)]);
if((state_val_27577 === (1))){
var state_27576__$1 = state_27576;
var statearr_27578_27736 = state_27576__$1;
(statearr_27578_27736[(2)] = null);

(statearr_27578_27736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (2))){
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27576__$1,(4),jobs);
} else {
if((state_val_27577 === (3))){
var inst_27574 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27576__$1,inst_27574);
} else {
if((state_val_27577 === (4))){
var inst_27566 = (state_27576[(2)]);
var inst_27567 = process.call(null,inst_27566);
var state_27576__$1 = state_27576;
if(cljs.core.truth_(inst_27567)){
var statearr_27579_27737 = state_27576__$1;
(statearr_27579_27737[(1)] = (5));

} else {
var statearr_27580_27738 = state_27576__$1;
(statearr_27580_27738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (5))){
var state_27576__$1 = state_27576;
var statearr_27581_27739 = state_27576__$1;
(statearr_27581_27739[(2)] = null);

(statearr_27581_27739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (6))){
var state_27576__$1 = state_27576;
var statearr_27582_27740 = state_27576__$1;
(statearr_27582_27740[(2)] = null);

(statearr_27582_27740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27577 === (7))){
var inst_27572 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27583_27741 = state_27576__$1;
(statearr_27583_27741[(2)] = inst_27572);

(statearr_27583_27741[(1)] = (3));


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
});})(__27732,c__27170__auto___27735,G__27563_27733,n__25883__auto___27731,jobs,results,process,async))
;
return ((function (__27732,switch__27058__auto__,c__27170__auto___27735,G__27563_27733,n__25883__auto___27731,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0 = (function (){
var statearr_27587 = [null,null,null,null,null,null,null];
(statearr_27587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__);

(statearr_27587[(1)] = (1));

return statearr_27587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1 = (function (state_27576){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_27576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e27588){if((e27588 instanceof Object)){
var ex__27062__auto__ = e27588;
var statearr_27589_27742 = state_27576;
(statearr_27589_27742[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27743 = state_27576;
state_27576 = G__27743;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__ = function(state_27576){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1.call(this,state_27576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__;
})()
;})(__27732,switch__27058__auto__,c__27170__auto___27735,G__27563_27733,n__25883__auto___27731,jobs,results,process,async))
})();
var state__27172__auto__ = (function (){var statearr_27590 = f__27171__auto__.call(null);
(statearr_27590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___27735);

return statearr_27590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(__27732,c__27170__auto___27735,G__27563_27733,n__25883__auto___27731,jobs,results,process,async))
);


break;
case "async":
var c__27170__auto___27744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27732,c__27170__auto___27744,G__27563_27733,n__25883__auto___27731,jobs,results,process,async){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (__27732,c__27170__auto___27744,G__27563_27733,n__25883__auto___27731,jobs,results,process,async){
return (function (state_27603){
var state_val_27604 = (state_27603[(1)]);
if((state_val_27604 === (1))){
var state_27603__$1 = state_27603;
var statearr_27605_27745 = state_27603__$1;
(statearr_27605_27745[(2)] = null);

(statearr_27605_27745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27604 === (2))){
var state_27603__$1 = state_27603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27603__$1,(4),jobs);
} else {
if((state_val_27604 === (3))){
var inst_27601 = (state_27603[(2)]);
var state_27603__$1 = state_27603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27603__$1,inst_27601);
} else {
if((state_val_27604 === (4))){
var inst_27593 = (state_27603[(2)]);
var inst_27594 = async.call(null,inst_27593);
var state_27603__$1 = state_27603;
if(cljs.core.truth_(inst_27594)){
var statearr_27606_27746 = state_27603__$1;
(statearr_27606_27746[(1)] = (5));

} else {
var statearr_27607_27747 = state_27603__$1;
(statearr_27607_27747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27604 === (5))){
var state_27603__$1 = state_27603;
var statearr_27608_27748 = state_27603__$1;
(statearr_27608_27748[(2)] = null);

(statearr_27608_27748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27604 === (6))){
var state_27603__$1 = state_27603;
var statearr_27609_27749 = state_27603__$1;
(statearr_27609_27749[(2)] = null);

(statearr_27609_27749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27604 === (7))){
var inst_27599 = (state_27603[(2)]);
var state_27603__$1 = state_27603;
var statearr_27610_27750 = state_27603__$1;
(statearr_27610_27750[(2)] = inst_27599);

(statearr_27610_27750[(1)] = (3));


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
});})(__27732,c__27170__auto___27744,G__27563_27733,n__25883__auto___27731,jobs,results,process,async))
;
return ((function (__27732,switch__27058__auto__,c__27170__auto___27744,G__27563_27733,n__25883__auto___27731,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0 = (function (){
var statearr_27614 = [null,null,null,null,null,null,null];
(statearr_27614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__);

(statearr_27614[(1)] = (1));

return statearr_27614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1 = (function (state_27603){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_27603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e27615){if((e27615 instanceof Object)){
var ex__27062__auto__ = e27615;
var statearr_27616_27751 = state_27603;
(statearr_27616_27751[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27752 = state_27603;
state_27603 = G__27752;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__ = function(state_27603){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1.call(this,state_27603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__;
})()
;})(__27732,switch__27058__auto__,c__27170__auto___27744,G__27563_27733,n__25883__auto___27731,jobs,results,process,async))
})();
var state__27172__auto__ = (function (){var statearr_27617 = f__27171__auto__.call(null);
(statearr_27617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___27744);

return statearr_27617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(__27732,c__27170__auto___27744,G__27563_27733,n__25883__auto___27731,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27753 = (__27732 + (1));
__27732 = G__27753;
continue;
} else {
}
break;
}

var c__27170__auto___27754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___27754,jobs,results,process,async){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___27754,jobs,results,process,async){
return (function (state_27639){
var state_val_27640 = (state_27639[(1)]);
if((state_val_27640 === (1))){
var state_27639__$1 = state_27639;
var statearr_27641_27755 = state_27639__$1;
(statearr_27641_27755[(2)] = null);

(statearr_27641_27755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27640 === (2))){
var state_27639__$1 = state_27639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27639__$1,(4),from);
} else {
if((state_val_27640 === (3))){
var inst_27637 = (state_27639[(2)]);
var state_27639__$1 = state_27639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27639__$1,inst_27637);
} else {
if((state_val_27640 === (4))){
var inst_27620 = (state_27639[(7)]);
var inst_27620__$1 = (state_27639[(2)]);
var inst_27621 = (inst_27620__$1 == null);
var state_27639__$1 = (function (){var statearr_27642 = state_27639;
(statearr_27642[(7)] = inst_27620__$1);

return statearr_27642;
})();
if(cljs.core.truth_(inst_27621)){
var statearr_27643_27756 = state_27639__$1;
(statearr_27643_27756[(1)] = (5));

} else {
var statearr_27644_27757 = state_27639__$1;
(statearr_27644_27757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27640 === (5))){
var inst_27623 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27639__$1 = state_27639;
var statearr_27645_27758 = state_27639__$1;
(statearr_27645_27758[(2)] = inst_27623);

(statearr_27645_27758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27640 === (6))){
var inst_27620 = (state_27639[(7)]);
var inst_27625 = (state_27639[(8)]);
var inst_27625__$1 = cljs.core.async.chan.call(null,(1));
var inst_27626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27627 = [inst_27620,inst_27625__$1];
var inst_27628 = (new cljs.core.PersistentVector(null,2,(5),inst_27626,inst_27627,null));
var state_27639__$1 = (function (){var statearr_27646 = state_27639;
(statearr_27646[(8)] = inst_27625__$1);

return statearr_27646;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27639__$1,(8),jobs,inst_27628);
} else {
if((state_val_27640 === (7))){
var inst_27635 = (state_27639[(2)]);
var state_27639__$1 = state_27639;
var statearr_27647_27759 = state_27639__$1;
(statearr_27647_27759[(2)] = inst_27635);

(statearr_27647_27759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27640 === (8))){
var inst_27625 = (state_27639[(8)]);
var inst_27630 = (state_27639[(2)]);
var state_27639__$1 = (function (){var statearr_27648 = state_27639;
(statearr_27648[(9)] = inst_27630);

return statearr_27648;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27639__$1,(9),results,inst_27625);
} else {
if((state_val_27640 === (9))){
var inst_27632 = (state_27639[(2)]);
var state_27639__$1 = (function (){var statearr_27649 = state_27639;
(statearr_27649[(10)] = inst_27632);

return statearr_27649;
})();
var statearr_27650_27760 = state_27639__$1;
(statearr_27650_27760[(2)] = null);

(statearr_27650_27760[(1)] = (2));


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
});})(c__27170__auto___27754,jobs,results,process,async))
;
return ((function (switch__27058__auto__,c__27170__auto___27754,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0 = (function (){
var statearr_27654 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27654[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__);

(statearr_27654[(1)] = (1));

return statearr_27654;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1 = (function (state_27639){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_27639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e27655){if((e27655 instanceof Object)){
var ex__27062__auto__ = e27655;
var statearr_27656_27761 = state_27639;
(statearr_27656_27761[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27762 = state_27639;
state_27639 = G__27762;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__ = function(state_27639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1.call(this,state_27639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___27754,jobs,results,process,async))
})();
var state__27172__auto__ = (function (){var statearr_27657 = f__27171__auto__.call(null);
(statearr_27657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___27754);

return statearr_27657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___27754,jobs,results,process,async))
);


var c__27170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto__,jobs,results,process,async){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto__,jobs,results,process,async){
return (function (state_27695){
var state_val_27696 = (state_27695[(1)]);
if((state_val_27696 === (7))){
var inst_27691 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27697_27763 = state_27695__$1;
(statearr_27697_27763[(2)] = inst_27691);

(statearr_27697_27763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (20))){
var state_27695__$1 = state_27695;
var statearr_27698_27764 = state_27695__$1;
(statearr_27698_27764[(2)] = null);

(statearr_27698_27764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (1))){
var state_27695__$1 = state_27695;
var statearr_27699_27765 = state_27695__$1;
(statearr_27699_27765[(2)] = null);

(statearr_27699_27765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (4))){
var inst_27660 = (state_27695[(7)]);
var inst_27660__$1 = (state_27695[(2)]);
var inst_27661 = (inst_27660__$1 == null);
var state_27695__$1 = (function (){var statearr_27700 = state_27695;
(statearr_27700[(7)] = inst_27660__$1);

return statearr_27700;
})();
if(cljs.core.truth_(inst_27661)){
var statearr_27701_27766 = state_27695__$1;
(statearr_27701_27766[(1)] = (5));

} else {
var statearr_27702_27767 = state_27695__$1;
(statearr_27702_27767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (15))){
var inst_27673 = (state_27695[(8)]);
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27695__$1,(18),to,inst_27673);
} else {
if((state_val_27696 === (21))){
var inst_27686 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27703_27768 = state_27695__$1;
(statearr_27703_27768[(2)] = inst_27686);

(statearr_27703_27768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (13))){
var inst_27688 = (state_27695[(2)]);
var state_27695__$1 = (function (){var statearr_27704 = state_27695;
(statearr_27704[(9)] = inst_27688);

return statearr_27704;
})();
var statearr_27705_27769 = state_27695__$1;
(statearr_27705_27769[(2)] = null);

(statearr_27705_27769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (6))){
var inst_27660 = (state_27695[(7)]);
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27695__$1,(11),inst_27660);
} else {
if((state_val_27696 === (17))){
var inst_27681 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
if(cljs.core.truth_(inst_27681)){
var statearr_27706_27770 = state_27695__$1;
(statearr_27706_27770[(1)] = (19));

} else {
var statearr_27707_27771 = state_27695__$1;
(statearr_27707_27771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (3))){
var inst_27693 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27695__$1,inst_27693);
} else {
if((state_val_27696 === (12))){
var inst_27670 = (state_27695[(10)]);
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27695__$1,(14),inst_27670);
} else {
if((state_val_27696 === (2))){
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27695__$1,(4),results);
} else {
if((state_val_27696 === (19))){
var state_27695__$1 = state_27695;
var statearr_27708_27772 = state_27695__$1;
(statearr_27708_27772[(2)] = null);

(statearr_27708_27772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (11))){
var inst_27670 = (state_27695[(2)]);
var state_27695__$1 = (function (){var statearr_27709 = state_27695;
(statearr_27709[(10)] = inst_27670);

return statearr_27709;
})();
var statearr_27710_27773 = state_27695__$1;
(statearr_27710_27773[(2)] = null);

(statearr_27710_27773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (9))){
var state_27695__$1 = state_27695;
var statearr_27711_27774 = state_27695__$1;
(statearr_27711_27774[(2)] = null);

(statearr_27711_27774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (5))){
var state_27695__$1 = state_27695;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27712_27775 = state_27695__$1;
(statearr_27712_27775[(1)] = (8));

} else {
var statearr_27713_27776 = state_27695__$1;
(statearr_27713_27776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (14))){
var inst_27673 = (state_27695[(8)]);
var inst_27675 = (state_27695[(11)]);
var inst_27673__$1 = (state_27695[(2)]);
var inst_27674 = (inst_27673__$1 == null);
var inst_27675__$1 = cljs.core.not.call(null,inst_27674);
var state_27695__$1 = (function (){var statearr_27714 = state_27695;
(statearr_27714[(8)] = inst_27673__$1);

(statearr_27714[(11)] = inst_27675__$1);

return statearr_27714;
})();
if(inst_27675__$1){
var statearr_27715_27777 = state_27695__$1;
(statearr_27715_27777[(1)] = (15));

} else {
var statearr_27716_27778 = state_27695__$1;
(statearr_27716_27778[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (16))){
var inst_27675 = (state_27695[(11)]);
var state_27695__$1 = state_27695;
var statearr_27717_27779 = state_27695__$1;
(statearr_27717_27779[(2)] = inst_27675);

(statearr_27717_27779[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (10))){
var inst_27667 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27718_27780 = state_27695__$1;
(statearr_27718_27780[(2)] = inst_27667);

(statearr_27718_27780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (18))){
var inst_27678 = (state_27695[(2)]);
var state_27695__$1 = state_27695;
var statearr_27719_27781 = state_27695__$1;
(statearr_27719_27781[(2)] = inst_27678);

(statearr_27719_27781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27696 === (8))){
var inst_27664 = cljs.core.async.close_BANG_.call(null,to);
var state_27695__$1 = state_27695;
var statearr_27720_27782 = state_27695__$1;
(statearr_27720_27782[(2)] = inst_27664);

(statearr_27720_27782[(1)] = (10));


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
});})(c__27170__auto__,jobs,results,process,async))
;
return ((function (switch__27058__auto__,c__27170__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0 = (function (){
var statearr_27724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__);

(statearr_27724[(1)] = (1));

return statearr_27724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1 = (function (state_27695){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_27695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e27725){if((e27725 instanceof Object)){
var ex__27062__auto__ = e27725;
var statearr_27726_27783 = state_27695;
(statearr_27726_27783[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27784 = state_27695;
state_27695 = G__27784;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__ = function(state_27695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1.call(this,state_27695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27059__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto__,jobs,results,process,async))
})();
var state__27172__auto__ = (function (){var statearr_27727 = f__27171__auto__.call(null);
(statearr_27727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto__);

return statearr_27727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto__,jobs,results,process,async))
);

return c__27170__auto__;
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
var args27785 = [];
var len__26073__auto___27788 = arguments.length;
var i__26074__auto___27789 = (0);
while(true){
if((i__26074__auto___27789 < len__26073__auto___27788)){
args27785.push((arguments[i__26074__auto___27789]));

var G__27790 = (i__26074__auto___27789 + (1));
i__26074__auto___27789 = G__27790;
continue;
} else {
}
break;
}

var G__27787 = args27785.length;
switch (G__27787) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27785.length)].join('')));

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
var args27792 = [];
var len__26073__auto___27795 = arguments.length;
var i__26074__auto___27796 = (0);
while(true){
if((i__26074__auto___27796 < len__26073__auto___27795)){
args27792.push((arguments[i__26074__auto___27796]));

var G__27797 = (i__26074__auto___27796 + (1));
i__26074__auto___27796 = G__27797;
continue;
} else {
}
break;
}

var G__27794 = args27792.length;
switch (G__27794) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27792.length)].join('')));

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
var args27799 = [];
var len__26073__auto___27852 = arguments.length;
var i__26074__auto___27853 = (0);
while(true){
if((i__26074__auto___27853 < len__26073__auto___27852)){
args27799.push((arguments[i__26074__auto___27853]));

var G__27854 = (i__26074__auto___27853 + (1));
i__26074__auto___27853 = G__27854;
continue;
} else {
}
break;
}

var G__27801 = args27799.length;
switch (G__27801) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27799.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27170__auto___27856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___27856,tc,fc){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___27856,tc,fc){
return (function (state_27827){
var state_val_27828 = (state_27827[(1)]);
if((state_val_27828 === (7))){
var inst_27823 = (state_27827[(2)]);
var state_27827__$1 = state_27827;
var statearr_27829_27857 = state_27827__$1;
(statearr_27829_27857[(2)] = inst_27823);

(statearr_27829_27857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27828 === (1))){
var state_27827__$1 = state_27827;
var statearr_27830_27858 = state_27827__$1;
(statearr_27830_27858[(2)] = null);

(statearr_27830_27858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27828 === (4))){
var inst_27804 = (state_27827[(7)]);
var inst_27804__$1 = (state_27827[(2)]);
var inst_27805 = (inst_27804__$1 == null);
var state_27827__$1 = (function (){var statearr_27831 = state_27827;
(statearr_27831[(7)] = inst_27804__$1);

return statearr_27831;
})();
if(cljs.core.truth_(inst_27805)){
var statearr_27832_27859 = state_27827__$1;
(statearr_27832_27859[(1)] = (5));

} else {
var statearr_27833_27860 = state_27827__$1;
(statearr_27833_27860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27828 === (13))){
var state_27827__$1 = state_27827;
var statearr_27834_27861 = state_27827__$1;
(statearr_27834_27861[(2)] = null);

(statearr_27834_27861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27828 === (6))){
var inst_27804 = (state_27827[(7)]);
var inst_27810 = p.call(null,inst_27804);
var state_27827__$1 = state_27827;
if(cljs.core.truth_(inst_27810)){
var statearr_27835_27862 = state_27827__$1;
(statearr_27835_27862[(1)] = (9));

} else {
var statearr_27836_27863 = state_27827__$1;
(statearr_27836_27863[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27828 === (3))){
var inst_27825 = (state_27827[(2)]);
var state_27827__$1 = state_27827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27827__$1,inst_27825);
} else {
if((state_val_27828 === (12))){
var state_27827__$1 = state_27827;
var statearr_27837_27864 = state_27827__$1;
(statearr_27837_27864[(2)] = null);

(statearr_27837_27864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27828 === (2))){
var state_27827__$1 = state_27827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27827__$1,(4),ch);
} else {
if((state_val_27828 === (11))){
var inst_27804 = (state_27827[(7)]);
var inst_27814 = (state_27827[(2)]);
var state_27827__$1 = state_27827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27827__$1,(8),inst_27814,inst_27804);
} else {
if((state_val_27828 === (9))){
var state_27827__$1 = state_27827;
var statearr_27838_27865 = state_27827__$1;
(statearr_27838_27865[(2)] = tc);

(statearr_27838_27865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27828 === (5))){
var inst_27807 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27808 = cljs.core.async.close_BANG_.call(null,fc);
var state_27827__$1 = (function (){var statearr_27839 = state_27827;
(statearr_27839[(8)] = inst_27807);

return statearr_27839;
})();
var statearr_27840_27866 = state_27827__$1;
(statearr_27840_27866[(2)] = inst_27808);

(statearr_27840_27866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27828 === (14))){
var inst_27821 = (state_27827[(2)]);
var state_27827__$1 = state_27827;
var statearr_27841_27867 = state_27827__$1;
(statearr_27841_27867[(2)] = inst_27821);

(statearr_27841_27867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27828 === (10))){
var state_27827__$1 = state_27827;
var statearr_27842_27868 = state_27827__$1;
(statearr_27842_27868[(2)] = fc);

(statearr_27842_27868[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27828 === (8))){
var inst_27816 = (state_27827[(2)]);
var state_27827__$1 = state_27827;
if(cljs.core.truth_(inst_27816)){
var statearr_27843_27869 = state_27827__$1;
(statearr_27843_27869[(1)] = (12));

} else {
var statearr_27844_27870 = state_27827__$1;
(statearr_27844_27870[(1)] = (13));

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
});})(c__27170__auto___27856,tc,fc))
;
return ((function (switch__27058__auto__,c__27170__auto___27856,tc,fc){
return (function() {
var cljs$core$async$state_machine__27059__auto__ = null;
var cljs$core$async$state_machine__27059__auto____0 = (function (){
var statearr_27848 = [null,null,null,null,null,null,null,null,null];
(statearr_27848[(0)] = cljs$core$async$state_machine__27059__auto__);

(statearr_27848[(1)] = (1));

return statearr_27848;
});
var cljs$core$async$state_machine__27059__auto____1 = (function (state_27827){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_27827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e27849){if((e27849 instanceof Object)){
var ex__27062__auto__ = e27849;
var statearr_27850_27871 = state_27827;
(statearr_27850_27871[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27872 = state_27827;
state_27827 = G__27872;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$state_machine__27059__auto__ = function(state_27827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27059__auto____1.call(this,state_27827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27059__auto____0;
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27059__auto____1;
return cljs$core$async$state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___27856,tc,fc))
})();
var state__27172__auto__ = (function (){var statearr_27851 = f__27171__auto__.call(null);
(statearr_27851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___27856);

return statearr_27851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___27856,tc,fc))
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
var c__27170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto__){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto__){
return (function (state_27936){
var state_val_27937 = (state_27936[(1)]);
if((state_val_27937 === (7))){
var inst_27932 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27938_27959 = state_27936__$1;
(statearr_27938_27959[(2)] = inst_27932);

(statearr_27938_27959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (1))){
var inst_27916 = init;
var state_27936__$1 = (function (){var statearr_27939 = state_27936;
(statearr_27939[(7)] = inst_27916);

return statearr_27939;
})();
var statearr_27940_27960 = state_27936__$1;
(statearr_27940_27960[(2)] = null);

(statearr_27940_27960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (4))){
var inst_27919 = (state_27936[(8)]);
var inst_27919__$1 = (state_27936[(2)]);
var inst_27920 = (inst_27919__$1 == null);
var state_27936__$1 = (function (){var statearr_27941 = state_27936;
(statearr_27941[(8)] = inst_27919__$1);

return statearr_27941;
})();
if(cljs.core.truth_(inst_27920)){
var statearr_27942_27961 = state_27936__$1;
(statearr_27942_27961[(1)] = (5));

} else {
var statearr_27943_27962 = state_27936__$1;
(statearr_27943_27962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (6))){
var inst_27923 = (state_27936[(9)]);
var inst_27916 = (state_27936[(7)]);
var inst_27919 = (state_27936[(8)]);
var inst_27923__$1 = f.call(null,inst_27916,inst_27919);
var inst_27924 = cljs.core.reduced_QMARK_.call(null,inst_27923__$1);
var state_27936__$1 = (function (){var statearr_27944 = state_27936;
(statearr_27944[(9)] = inst_27923__$1);

return statearr_27944;
})();
if(inst_27924){
var statearr_27945_27963 = state_27936__$1;
(statearr_27945_27963[(1)] = (8));

} else {
var statearr_27946_27964 = state_27936__$1;
(statearr_27946_27964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (3))){
var inst_27934 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27936__$1,inst_27934);
} else {
if((state_val_27937 === (2))){
var state_27936__$1 = state_27936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27936__$1,(4),ch);
} else {
if((state_val_27937 === (9))){
var inst_27923 = (state_27936[(9)]);
var inst_27916 = inst_27923;
var state_27936__$1 = (function (){var statearr_27947 = state_27936;
(statearr_27947[(7)] = inst_27916);

return statearr_27947;
})();
var statearr_27948_27965 = state_27936__$1;
(statearr_27948_27965[(2)] = null);

(statearr_27948_27965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (5))){
var inst_27916 = (state_27936[(7)]);
var state_27936__$1 = state_27936;
var statearr_27949_27966 = state_27936__$1;
(statearr_27949_27966[(2)] = inst_27916);

(statearr_27949_27966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (10))){
var inst_27930 = (state_27936[(2)]);
var state_27936__$1 = state_27936;
var statearr_27950_27967 = state_27936__$1;
(statearr_27950_27967[(2)] = inst_27930);

(statearr_27950_27967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27937 === (8))){
var inst_27923 = (state_27936[(9)]);
var inst_27926 = cljs.core.deref.call(null,inst_27923);
var state_27936__$1 = state_27936;
var statearr_27951_27968 = state_27936__$1;
(statearr_27951_27968[(2)] = inst_27926);

(statearr_27951_27968[(1)] = (10));


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
});})(c__27170__auto__))
;
return ((function (switch__27058__auto__,c__27170__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27059__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27059__auto____0 = (function (){
var statearr_27955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27955[(0)] = cljs$core$async$reduce_$_state_machine__27059__auto__);

(statearr_27955[(1)] = (1));

return statearr_27955;
});
var cljs$core$async$reduce_$_state_machine__27059__auto____1 = (function (state_27936){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_27936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e27956){if((e27956 instanceof Object)){
var ex__27062__auto__ = e27956;
var statearr_27957_27969 = state_27936;
(statearr_27957_27969[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27970 = state_27936;
state_27936 = G__27970;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27059__auto__ = function(state_27936){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27059__auto____1.call(this,state_27936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27059__auto____0;
cljs$core$async$reduce_$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27059__auto____1;
return cljs$core$async$reduce_$_state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto__))
})();
var state__27172__auto__ = (function (){var statearr_27958 = f__27171__auto__.call(null);
(statearr_27958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto__);

return statearr_27958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto__))
);

return c__27170__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto__,f__$1){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto__,f__$1){
return (function (state_27990){
var state_val_27991 = (state_27990[(1)]);
if((state_val_27991 === (1))){
var inst_27985 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27990__$1,(2),inst_27985);
} else {
if((state_val_27991 === (2))){
var inst_27987 = (state_27990[(2)]);
var inst_27988 = f__$1.call(null,inst_27987);
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27990__$1,inst_27988);
} else {
return null;
}
}
});})(c__27170__auto__,f__$1))
;
return ((function (switch__27058__auto__,c__27170__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27059__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27059__auto____0 = (function (){
var statearr_27995 = [null,null,null,null,null,null,null];
(statearr_27995[(0)] = cljs$core$async$transduce_$_state_machine__27059__auto__);

(statearr_27995[(1)] = (1));

return statearr_27995;
});
var cljs$core$async$transduce_$_state_machine__27059__auto____1 = (function (state_27990){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_27990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e27996){if((e27996 instanceof Object)){
var ex__27062__auto__ = e27996;
var statearr_27997_27999 = state_27990;
(statearr_27997_27999[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28000 = state_27990;
state_27990 = G__28000;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27059__auto__ = function(state_27990){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27059__auto____1.call(this,state_27990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27059__auto____0;
cljs$core$async$transduce_$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27059__auto____1;
return cljs$core$async$transduce_$_state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto__,f__$1))
})();
var state__27172__auto__ = (function (){var statearr_27998 = f__27171__auto__.call(null);
(statearr_27998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto__);

return statearr_27998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto__,f__$1))
);

return c__27170__auto__;
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
var args28001 = [];
var len__26073__auto___28053 = arguments.length;
var i__26074__auto___28054 = (0);
while(true){
if((i__26074__auto___28054 < len__26073__auto___28053)){
args28001.push((arguments[i__26074__auto___28054]));

var G__28055 = (i__26074__auto___28054 + (1));
i__26074__auto___28054 = G__28055;
continue;
} else {
}
break;
}

var G__28003 = args28001.length;
switch (G__28003) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28001.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto__){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto__){
return (function (state_28028){
var state_val_28029 = (state_28028[(1)]);
if((state_val_28029 === (7))){
var inst_28010 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
var statearr_28030_28057 = state_28028__$1;
(statearr_28030_28057[(2)] = inst_28010);

(statearr_28030_28057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (1))){
var inst_28004 = cljs.core.seq.call(null,coll);
var inst_28005 = inst_28004;
var state_28028__$1 = (function (){var statearr_28031 = state_28028;
(statearr_28031[(7)] = inst_28005);

return statearr_28031;
})();
var statearr_28032_28058 = state_28028__$1;
(statearr_28032_28058[(2)] = null);

(statearr_28032_28058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (4))){
var inst_28005 = (state_28028[(7)]);
var inst_28008 = cljs.core.first.call(null,inst_28005);
var state_28028__$1 = state_28028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28028__$1,(7),ch,inst_28008);
} else {
if((state_val_28029 === (13))){
var inst_28022 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
var statearr_28033_28059 = state_28028__$1;
(statearr_28033_28059[(2)] = inst_28022);

(statearr_28033_28059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (6))){
var inst_28013 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
if(cljs.core.truth_(inst_28013)){
var statearr_28034_28060 = state_28028__$1;
(statearr_28034_28060[(1)] = (8));

} else {
var statearr_28035_28061 = state_28028__$1;
(statearr_28035_28061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (3))){
var inst_28026 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28028__$1,inst_28026);
} else {
if((state_val_28029 === (12))){
var state_28028__$1 = state_28028;
var statearr_28036_28062 = state_28028__$1;
(statearr_28036_28062[(2)] = null);

(statearr_28036_28062[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (2))){
var inst_28005 = (state_28028[(7)]);
var state_28028__$1 = state_28028;
if(cljs.core.truth_(inst_28005)){
var statearr_28037_28063 = state_28028__$1;
(statearr_28037_28063[(1)] = (4));

} else {
var statearr_28038_28064 = state_28028__$1;
(statearr_28038_28064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (11))){
var inst_28019 = cljs.core.async.close_BANG_.call(null,ch);
var state_28028__$1 = state_28028;
var statearr_28039_28065 = state_28028__$1;
(statearr_28039_28065[(2)] = inst_28019);

(statearr_28039_28065[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (9))){
var state_28028__$1 = state_28028;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28040_28066 = state_28028__$1;
(statearr_28040_28066[(1)] = (11));

} else {
var statearr_28041_28067 = state_28028__$1;
(statearr_28041_28067[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (5))){
var inst_28005 = (state_28028[(7)]);
var state_28028__$1 = state_28028;
var statearr_28042_28068 = state_28028__$1;
(statearr_28042_28068[(2)] = inst_28005);

(statearr_28042_28068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (10))){
var inst_28024 = (state_28028[(2)]);
var state_28028__$1 = state_28028;
var statearr_28043_28069 = state_28028__$1;
(statearr_28043_28069[(2)] = inst_28024);

(statearr_28043_28069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28029 === (8))){
var inst_28005 = (state_28028[(7)]);
var inst_28015 = cljs.core.next.call(null,inst_28005);
var inst_28005__$1 = inst_28015;
var state_28028__$1 = (function (){var statearr_28044 = state_28028;
(statearr_28044[(7)] = inst_28005__$1);

return statearr_28044;
})();
var statearr_28045_28070 = state_28028__$1;
(statearr_28045_28070[(2)] = null);

(statearr_28045_28070[(1)] = (2));


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
});})(c__27170__auto__))
;
return ((function (switch__27058__auto__,c__27170__auto__){
return (function() {
var cljs$core$async$state_machine__27059__auto__ = null;
var cljs$core$async$state_machine__27059__auto____0 = (function (){
var statearr_28049 = [null,null,null,null,null,null,null,null];
(statearr_28049[(0)] = cljs$core$async$state_machine__27059__auto__);

(statearr_28049[(1)] = (1));

return statearr_28049;
});
var cljs$core$async$state_machine__27059__auto____1 = (function (state_28028){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_28028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e28050){if((e28050 instanceof Object)){
var ex__27062__auto__ = e28050;
var statearr_28051_28071 = state_28028;
(statearr_28051_28071[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28072 = state_28028;
state_28028 = G__28072;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$state_machine__27059__auto__ = function(state_28028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27059__auto____1.call(this,state_28028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27059__auto____0;
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27059__auto____1;
return cljs$core$async$state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto__))
})();
var state__27172__auto__ = (function (){var statearr_28052 = f__27171__auto__.call(null);
(statearr_28052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto__);

return statearr_28052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto__))
);

return c__27170__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25628__auto__ = (((_ == null))?null:_);
var m__25629__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,_);
} else {
var m__25629__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25628__auto__ = (((m == null))?null:m);
var m__25629__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25629__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25628__auto__ = (((m == null))?null:m);
var m__25629__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,m,ch);
} else {
var m__25629__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25628__auto__ = (((m == null))?null:m);
var m__25629__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,m);
} else {
var m__25629__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28298 = (function (ch,cs,meta28299){
this.ch = ch;
this.cs = cs;
this.meta28299 = meta28299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28300,meta28299__$1){
var self__ = this;
var _28300__$1 = this;
return (new cljs.core.async.t_cljs$core$async28298(self__.ch,self__.cs,meta28299__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28300){
var self__ = this;
var _28300__$1 = this;
return self__.meta28299;
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28299","meta28299",-1405050116,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28298";

cljs.core.async.t_cljs$core$async28298.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25571__auto__,writer__25572__auto__,opt__25573__auto__){
return cljs.core._write.call(null,writer__25572__auto__,"cljs.core.async/t_cljs$core$async28298");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28298 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28298(ch__$1,cs__$1,meta28299){
return (new cljs.core.async.t_cljs$core$async28298(ch__$1,cs__$1,meta28299));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28298(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27170__auto___28523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___28523,cs,m,dchan,dctr,done){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___28523,cs,m,dchan,dctr,done){
return (function (state_28435){
var state_val_28436 = (state_28435[(1)]);
if((state_val_28436 === (7))){
var inst_28431 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28437_28524 = state_28435__$1;
(statearr_28437_28524[(2)] = inst_28431);

(statearr_28437_28524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (20))){
var inst_28334 = (state_28435[(7)]);
var inst_28346 = cljs.core.first.call(null,inst_28334);
var inst_28347 = cljs.core.nth.call(null,inst_28346,(0),null);
var inst_28348 = cljs.core.nth.call(null,inst_28346,(1),null);
var state_28435__$1 = (function (){var statearr_28438 = state_28435;
(statearr_28438[(8)] = inst_28347);

return statearr_28438;
})();
if(cljs.core.truth_(inst_28348)){
var statearr_28439_28525 = state_28435__$1;
(statearr_28439_28525[(1)] = (22));

} else {
var statearr_28440_28526 = state_28435__$1;
(statearr_28440_28526[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (27))){
var inst_28303 = (state_28435[(9)]);
var inst_28383 = (state_28435[(10)]);
var inst_28378 = (state_28435[(11)]);
var inst_28376 = (state_28435[(12)]);
var inst_28383__$1 = cljs.core._nth.call(null,inst_28376,inst_28378);
var inst_28384 = cljs.core.async.put_BANG_.call(null,inst_28383__$1,inst_28303,done);
var state_28435__$1 = (function (){var statearr_28441 = state_28435;
(statearr_28441[(10)] = inst_28383__$1);

return statearr_28441;
})();
if(cljs.core.truth_(inst_28384)){
var statearr_28442_28527 = state_28435__$1;
(statearr_28442_28527[(1)] = (30));

} else {
var statearr_28443_28528 = state_28435__$1;
(statearr_28443_28528[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (1))){
var state_28435__$1 = state_28435;
var statearr_28444_28529 = state_28435__$1;
(statearr_28444_28529[(2)] = null);

(statearr_28444_28529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (24))){
var inst_28334 = (state_28435[(7)]);
var inst_28353 = (state_28435[(2)]);
var inst_28354 = cljs.core.next.call(null,inst_28334);
var inst_28312 = inst_28354;
var inst_28313 = null;
var inst_28314 = (0);
var inst_28315 = (0);
var state_28435__$1 = (function (){var statearr_28445 = state_28435;
(statearr_28445[(13)] = inst_28312);

(statearr_28445[(14)] = inst_28315);

(statearr_28445[(15)] = inst_28353);

(statearr_28445[(16)] = inst_28314);

(statearr_28445[(17)] = inst_28313);

return statearr_28445;
})();
var statearr_28446_28530 = state_28435__$1;
(statearr_28446_28530[(2)] = null);

(statearr_28446_28530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (39))){
var state_28435__$1 = state_28435;
var statearr_28450_28531 = state_28435__$1;
(statearr_28450_28531[(2)] = null);

(statearr_28450_28531[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (4))){
var inst_28303 = (state_28435[(9)]);
var inst_28303__$1 = (state_28435[(2)]);
var inst_28304 = (inst_28303__$1 == null);
var state_28435__$1 = (function (){var statearr_28451 = state_28435;
(statearr_28451[(9)] = inst_28303__$1);

return statearr_28451;
})();
if(cljs.core.truth_(inst_28304)){
var statearr_28452_28532 = state_28435__$1;
(statearr_28452_28532[(1)] = (5));

} else {
var statearr_28453_28533 = state_28435__$1;
(statearr_28453_28533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (15))){
var inst_28312 = (state_28435[(13)]);
var inst_28315 = (state_28435[(14)]);
var inst_28314 = (state_28435[(16)]);
var inst_28313 = (state_28435[(17)]);
var inst_28330 = (state_28435[(2)]);
var inst_28331 = (inst_28315 + (1));
var tmp28447 = inst_28312;
var tmp28448 = inst_28314;
var tmp28449 = inst_28313;
var inst_28312__$1 = tmp28447;
var inst_28313__$1 = tmp28449;
var inst_28314__$1 = tmp28448;
var inst_28315__$1 = inst_28331;
var state_28435__$1 = (function (){var statearr_28454 = state_28435;
(statearr_28454[(13)] = inst_28312__$1);

(statearr_28454[(14)] = inst_28315__$1);

(statearr_28454[(18)] = inst_28330);

(statearr_28454[(16)] = inst_28314__$1);

(statearr_28454[(17)] = inst_28313__$1);

return statearr_28454;
})();
var statearr_28455_28534 = state_28435__$1;
(statearr_28455_28534[(2)] = null);

(statearr_28455_28534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (21))){
var inst_28357 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28459_28535 = state_28435__$1;
(statearr_28459_28535[(2)] = inst_28357);

(statearr_28459_28535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (31))){
var inst_28383 = (state_28435[(10)]);
var inst_28387 = done.call(null,null);
var inst_28388 = cljs.core.async.untap_STAR_.call(null,m,inst_28383);
var state_28435__$1 = (function (){var statearr_28460 = state_28435;
(statearr_28460[(19)] = inst_28387);

return statearr_28460;
})();
var statearr_28461_28536 = state_28435__$1;
(statearr_28461_28536[(2)] = inst_28388);

(statearr_28461_28536[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (32))){
var inst_28375 = (state_28435[(20)]);
var inst_28378 = (state_28435[(11)]);
var inst_28377 = (state_28435[(21)]);
var inst_28376 = (state_28435[(12)]);
var inst_28390 = (state_28435[(2)]);
var inst_28391 = (inst_28378 + (1));
var tmp28456 = inst_28375;
var tmp28457 = inst_28377;
var tmp28458 = inst_28376;
var inst_28375__$1 = tmp28456;
var inst_28376__$1 = tmp28458;
var inst_28377__$1 = tmp28457;
var inst_28378__$1 = inst_28391;
var state_28435__$1 = (function (){var statearr_28462 = state_28435;
(statearr_28462[(20)] = inst_28375__$1);

(statearr_28462[(11)] = inst_28378__$1);

(statearr_28462[(21)] = inst_28377__$1);

(statearr_28462[(22)] = inst_28390);

(statearr_28462[(12)] = inst_28376__$1);

return statearr_28462;
})();
var statearr_28463_28537 = state_28435__$1;
(statearr_28463_28537[(2)] = null);

(statearr_28463_28537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (40))){
var inst_28403 = (state_28435[(23)]);
var inst_28407 = done.call(null,null);
var inst_28408 = cljs.core.async.untap_STAR_.call(null,m,inst_28403);
var state_28435__$1 = (function (){var statearr_28464 = state_28435;
(statearr_28464[(24)] = inst_28407);

return statearr_28464;
})();
var statearr_28465_28538 = state_28435__$1;
(statearr_28465_28538[(2)] = inst_28408);

(statearr_28465_28538[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (33))){
var inst_28394 = (state_28435[(25)]);
var inst_28396 = cljs.core.chunked_seq_QMARK_.call(null,inst_28394);
var state_28435__$1 = state_28435;
if(inst_28396){
var statearr_28466_28539 = state_28435__$1;
(statearr_28466_28539[(1)] = (36));

} else {
var statearr_28467_28540 = state_28435__$1;
(statearr_28467_28540[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (13))){
var inst_28324 = (state_28435[(26)]);
var inst_28327 = cljs.core.async.close_BANG_.call(null,inst_28324);
var state_28435__$1 = state_28435;
var statearr_28468_28541 = state_28435__$1;
(statearr_28468_28541[(2)] = inst_28327);

(statearr_28468_28541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (22))){
var inst_28347 = (state_28435[(8)]);
var inst_28350 = cljs.core.async.close_BANG_.call(null,inst_28347);
var state_28435__$1 = state_28435;
var statearr_28469_28542 = state_28435__$1;
(statearr_28469_28542[(2)] = inst_28350);

(statearr_28469_28542[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (36))){
var inst_28394 = (state_28435[(25)]);
var inst_28398 = cljs.core.chunk_first.call(null,inst_28394);
var inst_28399 = cljs.core.chunk_rest.call(null,inst_28394);
var inst_28400 = cljs.core.count.call(null,inst_28398);
var inst_28375 = inst_28399;
var inst_28376 = inst_28398;
var inst_28377 = inst_28400;
var inst_28378 = (0);
var state_28435__$1 = (function (){var statearr_28470 = state_28435;
(statearr_28470[(20)] = inst_28375);

(statearr_28470[(11)] = inst_28378);

(statearr_28470[(21)] = inst_28377);

(statearr_28470[(12)] = inst_28376);

return statearr_28470;
})();
var statearr_28471_28543 = state_28435__$1;
(statearr_28471_28543[(2)] = null);

(statearr_28471_28543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (41))){
var inst_28394 = (state_28435[(25)]);
var inst_28410 = (state_28435[(2)]);
var inst_28411 = cljs.core.next.call(null,inst_28394);
var inst_28375 = inst_28411;
var inst_28376 = null;
var inst_28377 = (0);
var inst_28378 = (0);
var state_28435__$1 = (function (){var statearr_28472 = state_28435;
(statearr_28472[(20)] = inst_28375);

(statearr_28472[(11)] = inst_28378);

(statearr_28472[(21)] = inst_28377);

(statearr_28472[(12)] = inst_28376);

(statearr_28472[(27)] = inst_28410);

return statearr_28472;
})();
var statearr_28473_28544 = state_28435__$1;
(statearr_28473_28544[(2)] = null);

(statearr_28473_28544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (43))){
var state_28435__$1 = state_28435;
var statearr_28474_28545 = state_28435__$1;
(statearr_28474_28545[(2)] = null);

(statearr_28474_28545[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (29))){
var inst_28419 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28475_28546 = state_28435__$1;
(statearr_28475_28546[(2)] = inst_28419);

(statearr_28475_28546[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (44))){
var inst_28428 = (state_28435[(2)]);
var state_28435__$1 = (function (){var statearr_28476 = state_28435;
(statearr_28476[(28)] = inst_28428);

return statearr_28476;
})();
var statearr_28477_28547 = state_28435__$1;
(statearr_28477_28547[(2)] = null);

(statearr_28477_28547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (6))){
var inst_28367 = (state_28435[(29)]);
var inst_28366 = cljs.core.deref.call(null,cs);
var inst_28367__$1 = cljs.core.keys.call(null,inst_28366);
var inst_28368 = cljs.core.count.call(null,inst_28367__$1);
var inst_28369 = cljs.core.reset_BANG_.call(null,dctr,inst_28368);
var inst_28374 = cljs.core.seq.call(null,inst_28367__$1);
var inst_28375 = inst_28374;
var inst_28376 = null;
var inst_28377 = (0);
var inst_28378 = (0);
var state_28435__$1 = (function (){var statearr_28478 = state_28435;
(statearr_28478[(20)] = inst_28375);

(statearr_28478[(29)] = inst_28367__$1);

(statearr_28478[(11)] = inst_28378);

(statearr_28478[(21)] = inst_28377);

(statearr_28478[(12)] = inst_28376);

(statearr_28478[(30)] = inst_28369);

return statearr_28478;
})();
var statearr_28479_28548 = state_28435__$1;
(statearr_28479_28548[(2)] = null);

(statearr_28479_28548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (28))){
var inst_28375 = (state_28435[(20)]);
var inst_28394 = (state_28435[(25)]);
var inst_28394__$1 = cljs.core.seq.call(null,inst_28375);
var state_28435__$1 = (function (){var statearr_28480 = state_28435;
(statearr_28480[(25)] = inst_28394__$1);

return statearr_28480;
})();
if(inst_28394__$1){
var statearr_28481_28549 = state_28435__$1;
(statearr_28481_28549[(1)] = (33));

} else {
var statearr_28482_28550 = state_28435__$1;
(statearr_28482_28550[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (25))){
var inst_28378 = (state_28435[(11)]);
var inst_28377 = (state_28435[(21)]);
var inst_28380 = (inst_28378 < inst_28377);
var inst_28381 = inst_28380;
var state_28435__$1 = state_28435;
if(cljs.core.truth_(inst_28381)){
var statearr_28483_28551 = state_28435__$1;
(statearr_28483_28551[(1)] = (27));

} else {
var statearr_28484_28552 = state_28435__$1;
(statearr_28484_28552[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (34))){
var state_28435__$1 = state_28435;
var statearr_28485_28553 = state_28435__$1;
(statearr_28485_28553[(2)] = null);

(statearr_28485_28553[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (17))){
var state_28435__$1 = state_28435;
var statearr_28486_28554 = state_28435__$1;
(statearr_28486_28554[(2)] = null);

(statearr_28486_28554[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (3))){
var inst_28433 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28435__$1,inst_28433);
} else {
if((state_val_28436 === (12))){
var inst_28362 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28487_28555 = state_28435__$1;
(statearr_28487_28555[(2)] = inst_28362);

(statearr_28487_28555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (2))){
var state_28435__$1 = state_28435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28435__$1,(4),ch);
} else {
if((state_val_28436 === (23))){
var state_28435__$1 = state_28435;
var statearr_28488_28556 = state_28435__$1;
(statearr_28488_28556[(2)] = null);

(statearr_28488_28556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (35))){
var inst_28417 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28489_28557 = state_28435__$1;
(statearr_28489_28557[(2)] = inst_28417);

(statearr_28489_28557[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (19))){
var inst_28334 = (state_28435[(7)]);
var inst_28338 = cljs.core.chunk_first.call(null,inst_28334);
var inst_28339 = cljs.core.chunk_rest.call(null,inst_28334);
var inst_28340 = cljs.core.count.call(null,inst_28338);
var inst_28312 = inst_28339;
var inst_28313 = inst_28338;
var inst_28314 = inst_28340;
var inst_28315 = (0);
var state_28435__$1 = (function (){var statearr_28490 = state_28435;
(statearr_28490[(13)] = inst_28312);

(statearr_28490[(14)] = inst_28315);

(statearr_28490[(16)] = inst_28314);

(statearr_28490[(17)] = inst_28313);

return statearr_28490;
})();
var statearr_28491_28558 = state_28435__$1;
(statearr_28491_28558[(2)] = null);

(statearr_28491_28558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (11))){
var inst_28312 = (state_28435[(13)]);
var inst_28334 = (state_28435[(7)]);
var inst_28334__$1 = cljs.core.seq.call(null,inst_28312);
var state_28435__$1 = (function (){var statearr_28492 = state_28435;
(statearr_28492[(7)] = inst_28334__$1);

return statearr_28492;
})();
if(inst_28334__$1){
var statearr_28493_28559 = state_28435__$1;
(statearr_28493_28559[(1)] = (16));

} else {
var statearr_28494_28560 = state_28435__$1;
(statearr_28494_28560[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (9))){
var inst_28364 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28495_28561 = state_28435__$1;
(statearr_28495_28561[(2)] = inst_28364);

(statearr_28495_28561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (5))){
var inst_28310 = cljs.core.deref.call(null,cs);
var inst_28311 = cljs.core.seq.call(null,inst_28310);
var inst_28312 = inst_28311;
var inst_28313 = null;
var inst_28314 = (0);
var inst_28315 = (0);
var state_28435__$1 = (function (){var statearr_28496 = state_28435;
(statearr_28496[(13)] = inst_28312);

(statearr_28496[(14)] = inst_28315);

(statearr_28496[(16)] = inst_28314);

(statearr_28496[(17)] = inst_28313);

return statearr_28496;
})();
var statearr_28497_28562 = state_28435__$1;
(statearr_28497_28562[(2)] = null);

(statearr_28497_28562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (14))){
var state_28435__$1 = state_28435;
var statearr_28498_28563 = state_28435__$1;
(statearr_28498_28563[(2)] = null);

(statearr_28498_28563[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (45))){
var inst_28425 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28499_28564 = state_28435__$1;
(statearr_28499_28564[(2)] = inst_28425);

(statearr_28499_28564[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (26))){
var inst_28367 = (state_28435[(29)]);
var inst_28421 = (state_28435[(2)]);
var inst_28422 = cljs.core.seq.call(null,inst_28367);
var state_28435__$1 = (function (){var statearr_28500 = state_28435;
(statearr_28500[(31)] = inst_28421);

return statearr_28500;
})();
if(inst_28422){
var statearr_28501_28565 = state_28435__$1;
(statearr_28501_28565[(1)] = (42));

} else {
var statearr_28502_28566 = state_28435__$1;
(statearr_28502_28566[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (16))){
var inst_28334 = (state_28435[(7)]);
var inst_28336 = cljs.core.chunked_seq_QMARK_.call(null,inst_28334);
var state_28435__$1 = state_28435;
if(inst_28336){
var statearr_28503_28567 = state_28435__$1;
(statearr_28503_28567[(1)] = (19));

} else {
var statearr_28504_28568 = state_28435__$1;
(statearr_28504_28568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (38))){
var inst_28414 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28505_28569 = state_28435__$1;
(statearr_28505_28569[(2)] = inst_28414);

(statearr_28505_28569[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (30))){
var state_28435__$1 = state_28435;
var statearr_28506_28570 = state_28435__$1;
(statearr_28506_28570[(2)] = null);

(statearr_28506_28570[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (10))){
var inst_28315 = (state_28435[(14)]);
var inst_28313 = (state_28435[(17)]);
var inst_28323 = cljs.core._nth.call(null,inst_28313,inst_28315);
var inst_28324 = cljs.core.nth.call(null,inst_28323,(0),null);
var inst_28325 = cljs.core.nth.call(null,inst_28323,(1),null);
var state_28435__$1 = (function (){var statearr_28507 = state_28435;
(statearr_28507[(26)] = inst_28324);

return statearr_28507;
})();
if(cljs.core.truth_(inst_28325)){
var statearr_28508_28571 = state_28435__$1;
(statearr_28508_28571[(1)] = (13));

} else {
var statearr_28509_28572 = state_28435__$1;
(statearr_28509_28572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (18))){
var inst_28360 = (state_28435[(2)]);
var state_28435__$1 = state_28435;
var statearr_28510_28573 = state_28435__$1;
(statearr_28510_28573[(2)] = inst_28360);

(statearr_28510_28573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (42))){
var state_28435__$1 = state_28435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28435__$1,(45),dchan);
} else {
if((state_val_28436 === (37))){
var inst_28403 = (state_28435[(23)]);
var inst_28303 = (state_28435[(9)]);
var inst_28394 = (state_28435[(25)]);
var inst_28403__$1 = cljs.core.first.call(null,inst_28394);
var inst_28404 = cljs.core.async.put_BANG_.call(null,inst_28403__$1,inst_28303,done);
var state_28435__$1 = (function (){var statearr_28511 = state_28435;
(statearr_28511[(23)] = inst_28403__$1);

return statearr_28511;
})();
if(cljs.core.truth_(inst_28404)){
var statearr_28512_28574 = state_28435__$1;
(statearr_28512_28574[(1)] = (39));

} else {
var statearr_28513_28575 = state_28435__$1;
(statearr_28513_28575[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28436 === (8))){
var inst_28315 = (state_28435[(14)]);
var inst_28314 = (state_28435[(16)]);
var inst_28317 = (inst_28315 < inst_28314);
var inst_28318 = inst_28317;
var state_28435__$1 = state_28435;
if(cljs.core.truth_(inst_28318)){
var statearr_28514_28576 = state_28435__$1;
(statearr_28514_28576[(1)] = (10));

} else {
var statearr_28515_28577 = state_28435__$1;
(statearr_28515_28577[(1)] = (11));

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
});})(c__27170__auto___28523,cs,m,dchan,dctr,done))
;
return ((function (switch__27058__auto__,c__27170__auto___28523,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27059__auto__ = null;
var cljs$core$async$mult_$_state_machine__27059__auto____0 = (function (){
var statearr_28519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28519[(0)] = cljs$core$async$mult_$_state_machine__27059__auto__);

(statearr_28519[(1)] = (1));

return statearr_28519;
});
var cljs$core$async$mult_$_state_machine__27059__auto____1 = (function (state_28435){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_28435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e28520){if((e28520 instanceof Object)){
var ex__27062__auto__ = e28520;
var statearr_28521_28578 = state_28435;
(statearr_28521_28578[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28579 = state_28435;
state_28435 = G__28579;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27059__auto__ = function(state_28435){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27059__auto____1.call(this,state_28435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27059__auto____0;
cljs$core$async$mult_$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27059__auto____1;
return cljs$core$async$mult_$_state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___28523,cs,m,dchan,dctr,done))
})();
var state__27172__auto__ = (function (){var statearr_28522 = f__27171__auto__.call(null);
(statearr_28522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___28523);

return statearr_28522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___28523,cs,m,dchan,dctr,done))
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
var args28580 = [];
var len__26073__auto___28583 = arguments.length;
var i__26074__auto___28584 = (0);
while(true){
if((i__26074__auto___28584 < len__26073__auto___28583)){
args28580.push((arguments[i__26074__auto___28584]));

var G__28585 = (i__26074__auto___28584 + (1));
i__26074__auto___28584 = G__28585;
continue;
} else {
}
break;
}

var G__28582 = args28580.length;
switch (G__28582) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28580.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25628__auto__ = (((m == null))?null:m);
var m__25629__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,m,ch);
} else {
var m__25629__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25628__auto__ = (((m == null))?null:m);
var m__25629__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,m,ch);
} else {
var m__25629__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25628__auto__ = (((m == null))?null:m);
var m__25629__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,m);
} else {
var m__25629__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25628__auto__ = (((m == null))?null:m);
var m__25629__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,m,state_map);
} else {
var m__25629__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25628__auto__ = (((m == null))?null:m);
var m__25629__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,m,mode);
} else {
var m__25629__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26080__auto__ = [];
var len__26073__auto___28597 = arguments.length;
var i__26074__auto___28598 = (0);
while(true){
if((i__26074__auto___28598 < len__26073__auto___28597)){
args__26080__auto__.push((arguments[i__26074__auto___28598]));

var G__28599 = (i__26074__auto___28598 + (1));
i__26074__auto___28598 = G__28599;
continue;
} else {
}
break;
}

var argseq__26081__auto__ = ((((3) < args__26080__auto__.length))?(new cljs.core.IndexedSeq(args__26080__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26081__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28591){
var map__28592 = p__28591;
var map__28592__$1 = ((((!((map__28592 == null)))?((((map__28592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28592):map__28592);
var opts = map__28592__$1;
var statearr_28594_28600 = state;
(statearr_28594_28600[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28592,map__28592__$1,opts){
return (function (val){
var statearr_28595_28601 = state;
(statearr_28595_28601[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28592,map__28592__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28596_28602 = state;
(statearr_28596_28602[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28587){
var G__28588 = cljs.core.first.call(null,seq28587);
var seq28587__$1 = cljs.core.next.call(null,seq28587);
var G__28589 = cljs.core.first.call(null,seq28587__$1);
var seq28587__$2 = cljs.core.next.call(null,seq28587__$1);
var G__28590 = cljs.core.first.call(null,seq28587__$2);
var seq28587__$3 = cljs.core.next.call(null,seq28587__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28588,G__28589,G__28590,seq28587__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28770 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28771){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28771 = meta28771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28772,meta28771__$1){
var self__ = this;
var _28772__$1 = this;
return (new cljs.core.async.t_cljs$core$async28770(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28771__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28772){
var self__ = this;
var _28772__$1 = this;
return self__.meta28771;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28770.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28770.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28770.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28770.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28770.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28770.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28770.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28770.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28771","meta28771",-694045450,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28770";

cljs.core.async.t_cljs$core$async28770.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25571__auto__,writer__25572__auto__,opt__25573__auto__){
return cljs.core._write.call(null,writer__25572__auto__,"cljs.core.async/t_cljs$core$async28770");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28770 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28770(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28771){
return (new cljs.core.async.t_cljs$core$async28770(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28771));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28770(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27170__auto___28937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___28937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___28937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28874){
var state_val_28875 = (state_28874[(1)]);
if((state_val_28875 === (7))){
var inst_28789 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
var statearr_28876_28938 = state_28874__$1;
(statearr_28876_28938[(2)] = inst_28789);

(statearr_28876_28938[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (20))){
var inst_28801 = (state_28874[(7)]);
var state_28874__$1 = state_28874;
var statearr_28877_28939 = state_28874__$1;
(statearr_28877_28939[(2)] = inst_28801);

(statearr_28877_28939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (27))){
var state_28874__$1 = state_28874;
var statearr_28878_28940 = state_28874__$1;
(statearr_28878_28940[(2)] = null);

(statearr_28878_28940[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (1))){
var inst_28776 = (state_28874[(8)]);
var inst_28776__$1 = calc_state.call(null);
var inst_28778 = (inst_28776__$1 == null);
var inst_28779 = cljs.core.not.call(null,inst_28778);
var state_28874__$1 = (function (){var statearr_28879 = state_28874;
(statearr_28879[(8)] = inst_28776__$1);

return statearr_28879;
})();
if(inst_28779){
var statearr_28880_28941 = state_28874__$1;
(statearr_28880_28941[(1)] = (2));

} else {
var statearr_28881_28942 = state_28874__$1;
(statearr_28881_28942[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (24))){
var inst_28848 = (state_28874[(9)]);
var inst_28825 = (state_28874[(10)]);
var inst_28834 = (state_28874[(11)]);
var inst_28848__$1 = inst_28825.call(null,inst_28834);
var state_28874__$1 = (function (){var statearr_28882 = state_28874;
(statearr_28882[(9)] = inst_28848__$1);

return statearr_28882;
})();
if(cljs.core.truth_(inst_28848__$1)){
var statearr_28883_28943 = state_28874__$1;
(statearr_28883_28943[(1)] = (29));

} else {
var statearr_28884_28944 = state_28874__$1;
(statearr_28884_28944[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (4))){
var inst_28792 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
if(cljs.core.truth_(inst_28792)){
var statearr_28885_28945 = state_28874__$1;
(statearr_28885_28945[(1)] = (8));

} else {
var statearr_28886_28946 = state_28874__$1;
(statearr_28886_28946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (15))){
var inst_28819 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
if(cljs.core.truth_(inst_28819)){
var statearr_28887_28947 = state_28874__$1;
(statearr_28887_28947[(1)] = (19));

} else {
var statearr_28888_28948 = state_28874__$1;
(statearr_28888_28948[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (21))){
var inst_28824 = (state_28874[(12)]);
var inst_28824__$1 = (state_28874[(2)]);
var inst_28825 = cljs.core.get.call(null,inst_28824__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28826 = cljs.core.get.call(null,inst_28824__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28827 = cljs.core.get.call(null,inst_28824__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28874__$1 = (function (){var statearr_28889 = state_28874;
(statearr_28889[(13)] = inst_28826);

(statearr_28889[(10)] = inst_28825);

(statearr_28889[(12)] = inst_28824__$1);

return statearr_28889;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28874__$1,(22),inst_28827);
} else {
if((state_val_28875 === (31))){
var inst_28856 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
if(cljs.core.truth_(inst_28856)){
var statearr_28890_28949 = state_28874__$1;
(statearr_28890_28949[(1)] = (32));

} else {
var statearr_28891_28950 = state_28874__$1;
(statearr_28891_28950[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (32))){
var inst_28833 = (state_28874[(14)]);
var state_28874__$1 = state_28874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28874__$1,(35),out,inst_28833);
} else {
if((state_val_28875 === (33))){
var inst_28824 = (state_28874[(12)]);
var inst_28801 = inst_28824;
var state_28874__$1 = (function (){var statearr_28892 = state_28874;
(statearr_28892[(7)] = inst_28801);

return statearr_28892;
})();
var statearr_28893_28951 = state_28874__$1;
(statearr_28893_28951[(2)] = null);

(statearr_28893_28951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (13))){
var inst_28801 = (state_28874[(7)]);
var inst_28808 = inst_28801.cljs$lang$protocol_mask$partition0$;
var inst_28809 = (inst_28808 & (64));
var inst_28810 = inst_28801.cljs$core$ISeq$;
var inst_28811 = (cljs.core.PROTOCOL_SENTINEL === inst_28810);
var inst_28812 = (inst_28809) || (inst_28811);
var state_28874__$1 = state_28874;
if(cljs.core.truth_(inst_28812)){
var statearr_28894_28952 = state_28874__$1;
(statearr_28894_28952[(1)] = (16));

} else {
var statearr_28895_28953 = state_28874__$1;
(statearr_28895_28953[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (22))){
var inst_28834 = (state_28874[(11)]);
var inst_28833 = (state_28874[(14)]);
var inst_28832 = (state_28874[(2)]);
var inst_28833__$1 = cljs.core.nth.call(null,inst_28832,(0),null);
var inst_28834__$1 = cljs.core.nth.call(null,inst_28832,(1),null);
var inst_28835 = (inst_28833__$1 == null);
var inst_28836 = cljs.core._EQ_.call(null,inst_28834__$1,change);
var inst_28837 = (inst_28835) || (inst_28836);
var state_28874__$1 = (function (){var statearr_28896 = state_28874;
(statearr_28896[(11)] = inst_28834__$1);

(statearr_28896[(14)] = inst_28833__$1);

return statearr_28896;
})();
if(cljs.core.truth_(inst_28837)){
var statearr_28897_28954 = state_28874__$1;
(statearr_28897_28954[(1)] = (23));

} else {
var statearr_28898_28955 = state_28874__$1;
(statearr_28898_28955[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (36))){
var inst_28824 = (state_28874[(12)]);
var inst_28801 = inst_28824;
var state_28874__$1 = (function (){var statearr_28899 = state_28874;
(statearr_28899[(7)] = inst_28801);

return statearr_28899;
})();
var statearr_28900_28956 = state_28874__$1;
(statearr_28900_28956[(2)] = null);

(statearr_28900_28956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (29))){
var inst_28848 = (state_28874[(9)]);
var state_28874__$1 = state_28874;
var statearr_28901_28957 = state_28874__$1;
(statearr_28901_28957[(2)] = inst_28848);

(statearr_28901_28957[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (6))){
var state_28874__$1 = state_28874;
var statearr_28902_28958 = state_28874__$1;
(statearr_28902_28958[(2)] = false);

(statearr_28902_28958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (28))){
var inst_28844 = (state_28874[(2)]);
var inst_28845 = calc_state.call(null);
var inst_28801 = inst_28845;
var state_28874__$1 = (function (){var statearr_28903 = state_28874;
(statearr_28903[(15)] = inst_28844);

(statearr_28903[(7)] = inst_28801);

return statearr_28903;
})();
var statearr_28904_28959 = state_28874__$1;
(statearr_28904_28959[(2)] = null);

(statearr_28904_28959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (25))){
var inst_28870 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
var statearr_28905_28960 = state_28874__$1;
(statearr_28905_28960[(2)] = inst_28870);

(statearr_28905_28960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (34))){
var inst_28868 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
var statearr_28906_28961 = state_28874__$1;
(statearr_28906_28961[(2)] = inst_28868);

(statearr_28906_28961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (17))){
var state_28874__$1 = state_28874;
var statearr_28907_28962 = state_28874__$1;
(statearr_28907_28962[(2)] = false);

(statearr_28907_28962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (3))){
var state_28874__$1 = state_28874;
var statearr_28908_28963 = state_28874__$1;
(statearr_28908_28963[(2)] = false);

(statearr_28908_28963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (12))){
var inst_28872 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28874__$1,inst_28872);
} else {
if((state_val_28875 === (2))){
var inst_28776 = (state_28874[(8)]);
var inst_28781 = inst_28776.cljs$lang$protocol_mask$partition0$;
var inst_28782 = (inst_28781 & (64));
var inst_28783 = inst_28776.cljs$core$ISeq$;
var inst_28784 = (cljs.core.PROTOCOL_SENTINEL === inst_28783);
var inst_28785 = (inst_28782) || (inst_28784);
var state_28874__$1 = state_28874;
if(cljs.core.truth_(inst_28785)){
var statearr_28909_28964 = state_28874__$1;
(statearr_28909_28964[(1)] = (5));

} else {
var statearr_28910_28965 = state_28874__$1;
(statearr_28910_28965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (23))){
var inst_28833 = (state_28874[(14)]);
var inst_28839 = (inst_28833 == null);
var state_28874__$1 = state_28874;
if(cljs.core.truth_(inst_28839)){
var statearr_28911_28966 = state_28874__$1;
(statearr_28911_28966[(1)] = (26));

} else {
var statearr_28912_28967 = state_28874__$1;
(statearr_28912_28967[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (35))){
var inst_28859 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
if(cljs.core.truth_(inst_28859)){
var statearr_28913_28968 = state_28874__$1;
(statearr_28913_28968[(1)] = (36));

} else {
var statearr_28914_28969 = state_28874__$1;
(statearr_28914_28969[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (19))){
var inst_28801 = (state_28874[(7)]);
var inst_28821 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28801);
var state_28874__$1 = state_28874;
var statearr_28915_28970 = state_28874__$1;
(statearr_28915_28970[(2)] = inst_28821);

(statearr_28915_28970[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (11))){
var inst_28801 = (state_28874[(7)]);
var inst_28805 = (inst_28801 == null);
var inst_28806 = cljs.core.not.call(null,inst_28805);
var state_28874__$1 = state_28874;
if(inst_28806){
var statearr_28916_28971 = state_28874__$1;
(statearr_28916_28971[(1)] = (13));

} else {
var statearr_28917_28972 = state_28874__$1;
(statearr_28917_28972[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (9))){
var inst_28776 = (state_28874[(8)]);
var state_28874__$1 = state_28874;
var statearr_28918_28973 = state_28874__$1;
(statearr_28918_28973[(2)] = inst_28776);

(statearr_28918_28973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (5))){
var state_28874__$1 = state_28874;
var statearr_28919_28974 = state_28874__$1;
(statearr_28919_28974[(2)] = true);

(statearr_28919_28974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (14))){
var state_28874__$1 = state_28874;
var statearr_28920_28975 = state_28874__$1;
(statearr_28920_28975[(2)] = false);

(statearr_28920_28975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (26))){
var inst_28834 = (state_28874[(11)]);
var inst_28841 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28834);
var state_28874__$1 = state_28874;
var statearr_28921_28976 = state_28874__$1;
(statearr_28921_28976[(2)] = inst_28841);

(statearr_28921_28976[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (16))){
var state_28874__$1 = state_28874;
var statearr_28922_28977 = state_28874__$1;
(statearr_28922_28977[(2)] = true);

(statearr_28922_28977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (38))){
var inst_28864 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
var statearr_28923_28978 = state_28874__$1;
(statearr_28923_28978[(2)] = inst_28864);

(statearr_28923_28978[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (30))){
var inst_28826 = (state_28874[(13)]);
var inst_28825 = (state_28874[(10)]);
var inst_28834 = (state_28874[(11)]);
var inst_28851 = cljs.core.empty_QMARK_.call(null,inst_28825);
var inst_28852 = inst_28826.call(null,inst_28834);
var inst_28853 = cljs.core.not.call(null,inst_28852);
var inst_28854 = (inst_28851) && (inst_28853);
var state_28874__$1 = state_28874;
var statearr_28924_28979 = state_28874__$1;
(statearr_28924_28979[(2)] = inst_28854);

(statearr_28924_28979[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (10))){
var inst_28776 = (state_28874[(8)]);
var inst_28797 = (state_28874[(2)]);
var inst_28798 = cljs.core.get.call(null,inst_28797,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28799 = cljs.core.get.call(null,inst_28797,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28800 = cljs.core.get.call(null,inst_28797,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28801 = inst_28776;
var state_28874__$1 = (function (){var statearr_28925 = state_28874;
(statearr_28925[(16)] = inst_28799);

(statearr_28925[(7)] = inst_28801);

(statearr_28925[(17)] = inst_28800);

(statearr_28925[(18)] = inst_28798);

return statearr_28925;
})();
var statearr_28926_28980 = state_28874__$1;
(statearr_28926_28980[(2)] = null);

(statearr_28926_28980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (18))){
var inst_28816 = (state_28874[(2)]);
var state_28874__$1 = state_28874;
var statearr_28927_28981 = state_28874__$1;
(statearr_28927_28981[(2)] = inst_28816);

(statearr_28927_28981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (37))){
var state_28874__$1 = state_28874;
var statearr_28928_28982 = state_28874__$1;
(statearr_28928_28982[(2)] = null);

(statearr_28928_28982[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28875 === (8))){
var inst_28776 = (state_28874[(8)]);
var inst_28794 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28776);
var state_28874__$1 = state_28874;
var statearr_28929_28983 = state_28874__$1;
(statearr_28929_28983[(2)] = inst_28794);

(statearr_28929_28983[(1)] = (10));


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
});})(c__27170__auto___28937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27058__auto__,c__27170__auto___28937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27059__auto__ = null;
var cljs$core$async$mix_$_state_machine__27059__auto____0 = (function (){
var statearr_28933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28933[(0)] = cljs$core$async$mix_$_state_machine__27059__auto__);

(statearr_28933[(1)] = (1));

return statearr_28933;
});
var cljs$core$async$mix_$_state_machine__27059__auto____1 = (function (state_28874){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_28874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e28934){if((e28934 instanceof Object)){
var ex__27062__auto__ = e28934;
var statearr_28935_28984 = state_28874;
(statearr_28935_28984[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28985 = state_28874;
state_28874 = G__28985;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27059__auto__ = function(state_28874){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27059__auto____1.call(this,state_28874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27059__auto____0;
cljs$core$async$mix_$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27059__auto____1;
return cljs$core$async$mix_$_state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___28937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27172__auto__ = (function (){var statearr_28936 = f__27171__auto__.call(null);
(statearr_28936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___28937);

return statearr_28936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___28937,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25628__auto__ = (((p == null))?null:p);
var m__25629__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25629__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25628__auto__ = (((p == null))?null:p);
var m__25629__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,p,v,ch);
} else {
var m__25629__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28986 = [];
var len__26073__auto___28989 = arguments.length;
var i__26074__auto___28990 = (0);
while(true){
if((i__26074__auto___28990 < len__26073__auto___28989)){
args28986.push((arguments[i__26074__auto___28990]));

var G__28991 = (i__26074__auto___28990 + (1));
i__26074__auto___28990 = G__28991;
continue;
} else {
}
break;
}

var G__28988 = args28986.length;
switch (G__28988) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28986.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25628__auto__ = (((p == null))?null:p);
var m__25629__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,p);
} else {
var m__25629__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25628__auto__ = (((p == null))?null:p);
var m__25629__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25628__auto__)]);
if(!((m__25629__auto__ == null))){
return m__25629__auto__.call(null,p,v);
} else {
var m__25629__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25629__auto____$1 == null))){
return m__25629__auto____$1.call(null,p,v);
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
var args28994 = [];
var len__26073__auto___29119 = arguments.length;
var i__26074__auto___29120 = (0);
while(true){
if((i__26074__auto___29120 < len__26073__auto___29119)){
args28994.push((arguments[i__26074__auto___29120]));

var G__29121 = (i__26074__auto___29120 + (1));
i__26074__auto___29120 = G__29121;
continue;
} else {
}
break;
}

var G__28996 = args28994.length;
switch (G__28996) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28994.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24965__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24965__auto__)){
return or__24965__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24965__auto__,mults){
return (function (p1__28993_SHARP_){
if(cljs.core.truth_(p1__28993_SHARP_.call(null,topic))){
return p1__28993_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28993_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24965__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28997 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28998){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28998 = meta28998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28999,meta28998__$1){
var self__ = this;
var _28999__$1 = this;
return (new cljs.core.async.t_cljs$core$async28997(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28998__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28999){
var self__ = this;
var _28999__$1 = this;
return self__.meta28998;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28997.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28997.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28997.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28997.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28997.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28997.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28998","meta28998",777430467,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28997";

cljs.core.async.t_cljs$core$async28997.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25571__auto__,writer__25572__auto__,opt__25573__auto__){
return cljs.core._write.call(null,writer__25572__auto__,"cljs.core.async/t_cljs$core$async28997");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28997 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28997(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28998){
return (new cljs.core.async.t_cljs$core$async28997(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28998));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28997(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27170__auto___29123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___29123,mults,ensure_mult,p){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___29123,mults,ensure_mult,p){
return (function (state_29071){
var state_val_29072 = (state_29071[(1)]);
if((state_val_29072 === (7))){
var inst_29067 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
var statearr_29073_29124 = state_29071__$1;
(statearr_29073_29124[(2)] = inst_29067);

(statearr_29073_29124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (20))){
var state_29071__$1 = state_29071;
var statearr_29074_29125 = state_29071__$1;
(statearr_29074_29125[(2)] = null);

(statearr_29074_29125[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (1))){
var state_29071__$1 = state_29071;
var statearr_29075_29126 = state_29071__$1;
(statearr_29075_29126[(2)] = null);

(statearr_29075_29126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (24))){
var inst_29050 = (state_29071[(7)]);
var inst_29059 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29050);
var state_29071__$1 = state_29071;
var statearr_29076_29127 = state_29071__$1;
(statearr_29076_29127[(2)] = inst_29059);

(statearr_29076_29127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (4))){
var inst_29002 = (state_29071[(8)]);
var inst_29002__$1 = (state_29071[(2)]);
var inst_29003 = (inst_29002__$1 == null);
var state_29071__$1 = (function (){var statearr_29077 = state_29071;
(statearr_29077[(8)] = inst_29002__$1);

return statearr_29077;
})();
if(cljs.core.truth_(inst_29003)){
var statearr_29078_29128 = state_29071__$1;
(statearr_29078_29128[(1)] = (5));

} else {
var statearr_29079_29129 = state_29071__$1;
(statearr_29079_29129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (15))){
var inst_29044 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
var statearr_29080_29130 = state_29071__$1;
(statearr_29080_29130[(2)] = inst_29044);

(statearr_29080_29130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (21))){
var inst_29064 = (state_29071[(2)]);
var state_29071__$1 = (function (){var statearr_29081 = state_29071;
(statearr_29081[(9)] = inst_29064);

return statearr_29081;
})();
var statearr_29082_29131 = state_29071__$1;
(statearr_29082_29131[(2)] = null);

(statearr_29082_29131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (13))){
var inst_29026 = (state_29071[(10)]);
var inst_29028 = cljs.core.chunked_seq_QMARK_.call(null,inst_29026);
var state_29071__$1 = state_29071;
if(inst_29028){
var statearr_29083_29132 = state_29071__$1;
(statearr_29083_29132[(1)] = (16));

} else {
var statearr_29084_29133 = state_29071__$1;
(statearr_29084_29133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (22))){
var inst_29056 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
if(cljs.core.truth_(inst_29056)){
var statearr_29085_29134 = state_29071__$1;
(statearr_29085_29134[(1)] = (23));

} else {
var statearr_29086_29135 = state_29071__$1;
(statearr_29086_29135[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (6))){
var inst_29002 = (state_29071[(8)]);
var inst_29050 = (state_29071[(7)]);
var inst_29052 = (state_29071[(11)]);
var inst_29050__$1 = topic_fn.call(null,inst_29002);
var inst_29051 = cljs.core.deref.call(null,mults);
var inst_29052__$1 = cljs.core.get.call(null,inst_29051,inst_29050__$1);
var state_29071__$1 = (function (){var statearr_29087 = state_29071;
(statearr_29087[(7)] = inst_29050__$1);

(statearr_29087[(11)] = inst_29052__$1);

return statearr_29087;
})();
if(cljs.core.truth_(inst_29052__$1)){
var statearr_29088_29136 = state_29071__$1;
(statearr_29088_29136[(1)] = (19));

} else {
var statearr_29089_29137 = state_29071__$1;
(statearr_29089_29137[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (25))){
var inst_29061 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
var statearr_29090_29138 = state_29071__$1;
(statearr_29090_29138[(2)] = inst_29061);

(statearr_29090_29138[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (17))){
var inst_29026 = (state_29071[(10)]);
var inst_29035 = cljs.core.first.call(null,inst_29026);
var inst_29036 = cljs.core.async.muxch_STAR_.call(null,inst_29035);
var inst_29037 = cljs.core.async.close_BANG_.call(null,inst_29036);
var inst_29038 = cljs.core.next.call(null,inst_29026);
var inst_29012 = inst_29038;
var inst_29013 = null;
var inst_29014 = (0);
var inst_29015 = (0);
var state_29071__$1 = (function (){var statearr_29091 = state_29071;
(statearr_29091[(12)] = inst_29037);

(statearr_29091[(13)] = inst_29015);

(statearr_29091[(14)] = inst_29014);

(statearr_29091[(15)] = inst_29013);

(statearr_29091[(16)] = inst_29012);

return statearr_29091;
})();
var statearr_29092_29139 = state_29071__$1;
(statearr_29092_29139[(2)] = null);

(statearr_29092_29139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (3))){
var inst_29069 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29071__$1,inst_29069);
} else {
if((state_val_29072 === (12))){
var inst_29046 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
var statearr_29093_29140 = state_29071__$1;
(statearr_29093_29140[(2)] = inst_29046);

(statearr_29093_29140[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (2))){
var state_29071__$1 = state_29071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29071__$1,(4),ch);
} else {
if((state_val_29072 === (23))){
var state_29071__$1 = state_29071;
var statearr_29094_29141 = state_29071__$1;
(statearr_29094_29141[(2)] = null);

(statearr_29094_29141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (19))){
var inst_29002 = (state_29071[(8)]);
var inst_29052 = (state_29071[(11)]);
var inst_29054 = cljs.core.async.muxch_STAR_.call(null,inst_29052);
var state_29071__$1 = state_29071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29071__$1,(22),inst_29054,inst_29002);
} else {
if((state_val_29072 === (11))){
var inst_29026 = (state_29071[(10)]);
var inst_29012 = (state_29071[(16)]);
var inst_29026__$1 = cljs.core.seq.call(null,inst_29012);
var state_29071__$1 = (function (){var statearr_29095 = state_29071;
(statearr_29095[(10)] = inst_29026__$1);

return statearr_29095;
})();
if(inst_29026__$1){
var statearr_29096_29142 = state_29071__$1;
(statearr_29096_29142[(1)] = (13));

} else {
var statearr_29097_29143 = state_29071__$1;
(statearr_29097_29143[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (9))){
var inst_29048 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
var statearr_29098_29144 = state_29071__$1;
(statearr_29098_29144[(2)] = inst_29048);

(statearr_29098_29144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (5))){
var inst_29009 = cljs.core.deref.call(null,mults);
var inst_29010 = cljs.core.vals.call(null,inst_29009);
var inst_29011 = cljs.core.seq.call(null,inst_29010);
var inst_29012 = inst_29011;
var inst_29013 = null;
var inst_29014 = (0);
var inst_29015 = (0);
var state_29071__$1 = (function (){var statearr_29099 = state_29071;
(statearr_29099[(13)] = inst_29015);

(statearr_29099[(14)] = inst_29014);

(statearr_29099[(15)] = inst_29013);

(statearr_29099[(16)] = inst_29012);

return statearr_29099;
})();
var statearr_29100_29145 = state_29071__$1;
(statearr_29100_29145[(2)] = null);

(statearr_29100_29145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (14))){
var state_29071__$1 = state_29071;
var statearr_29104_29146 = state_29071__$1;
(statearr_29104_29146[(2)] = null);

(statearr_29104_29146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (16))){
var inst_29026 = (state_29071[(10)]);
var inst_29030 = cljs.core.chunk_first.call(null,inst_29026);
var inst_29031 = cljs.core.chunk_rest.call(null,inst_29026);
var inst_29032 = cljs.core.count.call(null,inst_29030);
var inst_29012 = inst_29031;
var inst_29013 = inst_29030;
var inst_29014 = inst_29032;
var inst_29015 = (0);
var state_29071__$1 = (function (){var statearr_29105 = state_29071;
(statearr_29105[(13)] = inst_29015);

(statearr_29105[(14)] = inst_29014);

(statearr_29105[(15)] = inst_29013);

(statearr_29105[(16)] = inst_29012);

return statearr_29105;
})();
var statearr_29106_29147 = state_29071__$1;
(statearr_29106_29147[(2)] = null);

(statearr_29106_29147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (10))){
var inst_29015 = (state_29071[(13)]);
var inst_29014 = (state_29071[(14)]);
var inst_29013 = (state_29071[(15)]);
var inst_29012 = (state_29071[(16)]);
var inst_29020 = cljs.core._nth.call(null,inst_29013,inst_29015);
var inst_29021 = cljs.core.async.muxch_STAR_.call(null,inst_29020);
var inst_29022 = cljs.core.async.close_BANG_.call(null,inst_29021);
var inst_29023 = (inst_29015 + (1));
var tmp29101 = inst_29014;
var tmp29102 = inst_29013;
var tmp29103 = inst_29012;
var inst_29012__$1 = tmp29103;
var inst_29013__$1 = tmp29102;
var inst_29014__$1 = tmp29101;
var inst_29015__$1 = inst_29023;
var state_29071__$1 = (function (){var statearr_29107 = state_29071;
(statearr_29107[(17)] = inst_29022);

(statearr_29107[(13)] = inst_29015__$1);

(statearr_29107[(14)] = inst_29014__$1);

(statearr_29107[(15)] = inst_29013__$1);

(statearr_29107[(16)] = inst_29012__$1);

return statearr_29107;
})();
var statearr_29108_29148 = state_29071__$1;
(statearr_29108_29148[(2)] = null);

(statearr_29108_29148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (18))){
var inst_29041 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
var statearr_29109_29149 = state_29071__$1;
(statearr_29109_29149[(2)] = inst_29041);

(statearr_29109_29149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (8))){
var inst_29015 = (state_29071[(13)]);
var inst_29014 = (state_29071[(14)]);
var inst_29017 = (inst_29015 < inst_29014);
var inst_29018 = inst_29017;
var state_29071__$1 = state_29071;
if(cljs.core.truth_(inst_29018)){
var statearr_29110_29150 = state_29071__$1;
(statearr_29110_29150[(1)] = (10));

} else {
var statearr_29111_29151 = state_29071__$1;
(statearr_29111_29151[(1)] = (11));

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
});})(c__27170__auto___29123,mults,ensure_mult,p))
;
return ((function (switch__27058__auto__,c__27170__auto___29123,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27059__auto__ = null;
var cljs$core$async$state_machine__27059__auto____0 = (function (){
var statearr_29115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29115[(0)] = cljs$core$async$state_machine__27059__auto__);

(statearr_29115[(1)] = (1));

return statearr_29115;
});
var cljs$core$async$state_machine__27059__auto____1 = (function (state_29071){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_29071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e29116){if((e29116 instanceof Object)){
var ex__27062__auto__ = e29116;
var statearr_29117_29152 = state_29071;
(statearr_29117_29152[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29153 = state_29071;
state_29071 = G__29153;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$state_machine__27059__auto__ = function(state_29071){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27059__auto____1.call(this,state_29071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27059__auto____0;
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27059__auto____1;
return cljs$core$async$state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___29123,mults,ensure_mult,p))
})();
var state__27172__auto__ = (function (){var statearr_29118 = f__27171__auto__.call(null);
(statearr_29118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___29123);

return statearr_29118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___29123,mults,ensure_mult,p))
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
var args29154 = [];
var len__26073__auto___29157 = arguments.length;
var i__26074__auto___29158 = (0);
while(true){
if((i__26074__auto___29158 < len__26073__auto___29157)){
args29154.push((arguments[i__26074__auto___29158]));

var G__29159 = (i__26074__auto___29158 + (1));
i__26074__auto___29158 = G__29159;
continue;
} else {
}
break;
}

var G__29156 = args29154.length;
switch (G__29156) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29154.length)].join('')));

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
var args29161 = [];
var len__26073__auto___29164 = arguments.length;
var i__26074__auto___29165 = (0);
while(true){
if((i__26074__auto___29165 < len__26073__auto___29164)){
args29161.push((arguments[i__26074__auto___29165]));

var G__29166 = (i__26074__auto___29165 + (1));
i__26074__auto___29165 = G__29166;
continue;
} else {
}
break;
}

var G__29163 = args29161.length;
switch (G__29163) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29161.length)].join('')));

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
var args29168 = [];
var len__26073__auto___29239 = arguments.length;
var i__26074__auto___29240 = (0);
while(true){
if((i__26074__auto___29240 < len__26073__auto___29239)){
args29168.push((arguments[i__26074__auto___29240]));

var G__29241 = (i__26074__auto___29240 + (1));
i__26074__auto___29240 = G__29241;
continue;
} else {
}
break;
}

var G__29170 = args29168.length;
switch (G__29170) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29168.length)].join('')));

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
var c__27170__auto___29243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___29243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___29243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29209){
var state_val_29210 = (state_29209[(1)]);
if((state_val_29210 === (7))){
var state_29209__$1 = state_29209;
var statearr_29211_29244 = state_29209__$1;
(statearr_29211_29244[(2)] = null);

(statearr_29211_29244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (1))){
var state_29209__$1 = state_29209;
var statearr_29212_29245 = state_29209__$1;
(statearr_29212_29245[(2)] = null);

(statearr_29212_29245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (4))){
var inst_29173 = (state_29209[(7)]);
var inst_29175 = (inst_29173 < cnt);
var state_29209__$1 = state_29209;
if(cljs.core.truth_(inst_29175)){
var statearr_29213_29246 = state_29209__$1;
(statearr_29213_29246[(1)] = (6));

} else {
var statearr_29214_29247 = state_29209__$1;
(statearr_29214_29247[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (15))){
var inst_29205 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29215_29248 = state_29209__$1;
(statearr_29215_29248[(2)] = inst_29205);

(statearr_29215_29248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (13))){
var inst_29198 = cljs.core.async.close_BANG_.call(null,out);
var state_29209__$1 = state_29209;
var statearr_29216_29249 = state_29209__$1;
(statearr_29216_29249[(2)] = inst_29198);

(statearr_29216_29249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (6))){
var state_29209__$1 = state_29209;
var statearr_29217_29250 = state_29209__$1;
(statearr_29217_29250[(2)] = null);

(statearr_29217_29250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (3))){
var inst_29207 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29209__$1,inst_29207);
} else {
if((state_val_29210 === (12))){
var inst_29195 = (state_29209[(8)]);
var inst_29195__$1 = (state_29209[(2)]);
var inst_29196 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29195__$1);
var state_29209__$1 = (function (){var statearr_29218 = state_29209;
(statearr_29218[(8)] = inst_29195__$1);

return statearr_29218;
})();
if(cljs.core.truth_(inst_29196)){
var statearr_29219_29251 = state_29209__$1;
(statearr_29219_29251[(1)] = (13));

} else {
var statearr_29220_29252 = state_29209__$1;
(statearr_29220_29252[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (2))){
var inst_29172 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29173 = (0);
var state_29209__$1 = (function (){var statearr_29221 = state_29209;
(statearr_29221[(9)] = inst_29172);

(statearr_29221[(7)] = inst_29173);

return statearr_29221;
})();
var statearr_29222_29253 = state_29209__$1;
(statearr_29222_29253[(2)] = null);

(statearr_29222_29253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (11))){
var inst_29173 = (state_29209[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29209,(10),Object,null,(9));
var inst_29182 = chs__$1.call(null,inst_29173);
var inst_29183 = done.call(null,inst_29173);
var inst_29184 = cljs.core.async.take_BANG_.call(null,inst_29182,inst_29183);
var state_29209__$1 = state_29209;
var statearr_29223_29254 = state_29209__$1;
(statearr_29223_29254[(2)] = inst_29184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (9))){
var inst_29173 = (state_29209[(7)]);
var inst_29186 = (state_29209[(2)]);
var inst_29187 = (inst_29173 + (1));
var inst_29173__$1 = inst_29187;
var state_29209__$1 = (function (){var statearr_29224 = state_29209;
(statearr_29224[(7)] = inst_29173__$1);

(statearr_29224[(10)] = inst_29186);

return statearr_29224;
})();
var statearr_29225_29255 = state_29209__$1;
(statearr_29225_29255[(2)] = null);

(statearr_29225_29255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (5))){
var inst_29193 = (state_29209[(2)]);
var state_29209__$1 = (function (){var statearr_29226 = state_29209;
(statearr_29226[(11)] = inst_29193);

return statearr_29226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29209__$1,(12),dchan);
} else {
if((state_val_29210 === (14))){
var inst_29195 = (state_29209[(8)]);
var inst_29200 = cljs.core.apply.call(null,f,inst_29195);
var state_29209__$1 = state_29209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29209__$1,(16),out,inst_29200);
} else {
if((state_val_29210 === (16))){
var inst_29202 = (state_29209[(2)]);
var state_29209__$1 = (function (){var statearr_29227 = state_29209;
(statearr_29227[(12)] = inst_29202);

return statearr_29227;
})();
var statearr_29228_29256 = state_29209__$1;
(statearr_29228_29256[(2)] = null);

(statearr_29228_29256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (10))){
var inst_29177 = (state_29209[(2)]);
var inst_29178 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29209__$1 = (function (){var statearr_29229 = state_29209;
(statearr_29229[(13)] = inst_29177);

return statearr_29229;
})();
var statearr_29230_29257 = state_29209__$1;
(statearr_29230_29257[(2)] = inst_29178);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29209__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29210 === (8))){
var inst_29191 = (state_29209[(2)]);
var state_29209__$1 = state_29209;
var statearr_29231_29258 = state_29209__$1;
(statearr_29231_29258[(2)] = inst_29191);

(statearr_29231_29258[(1)] = (5));


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
});})(c__27170__auto___29243,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27058__auto__,c__27170__auto___29243,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27059__auto__ = null;
var cljs$core$async$state_machine__27059__auto____0 = (function (){
var statearr_29235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29235[(0)] = cljs$core$async$state_machine__27059__auto__);

(statearr_29235[(1)] = (1));

return statearr_29235;
});
var cljs$core$async$state_machine__27059__auto____1 = (function (state_29209){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_29209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e29236){if((e29236 instanceof Object)){
var ex__27062__auto__ = e29236;
var statearr_29237_29259 = state_29209;
(statearr_29237_29259[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29260 = state_29209;
state_29209 = G__29260;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$state_machine__27059__auto__ = function(state_29209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27059__auto____1.call(this,state_29209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27059__auto____0;
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27059__auto____1;
return cljs$core$async$state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___29243,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27172__auto__ = (function (){var statearr_29238 = f__27171__auto__.call(null);
(statearr_29238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___29243);

return statearr_29238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___29243,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29262 = [];
var len__26073__auto___29320 = arguments.length;
var i__26074__auto___29321 = (0);
while(true){
if((i__26074__auto___29321 < len__26073__auto___29320)){
args29262.push((arguments[i__26074__auto___29321]));

var G__29322 = (i__26074__auto___29321 + (1));
i__26074__auto___29321 = G__29322;
continue;
} else {
}
break;
}

var G__29264 = args29262.length;
switch (G__29264) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29262.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27170__auto___29324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___29324,out){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___29324,out){
return (function (state_29296){
var state_val_29297 = (state_29296[(1)]);
if((state_val_29297 === (7))){
var inst_29275 = (state_29296[(7)]);
var inst_29276 = (state_29296[(8)]);
var inst_29275__$1 = (state_29296[(2)]);
var inst_29276__$1 = cljs.core.nth.call(null,inst_29275__$1,(0),null);
var inst_29277 = cljs.core.nth.call(null,inst_29275__$1,(1),null);
var inst_29278 = (inst_29276__$1 == null);
var state_29296__$1 = (function (){var statearr_29298 = state_29296;
(statearr_29298[(7)] = inst_29275__$1);

(statearr_29298[(9)] = inst_29277);

(statearr_29298[(8)] = inst_29276__$1);

return statearr_29298;
})();
if(cljs.core.truth_(inst_29278)){
var statearr_29299_29325 = state_29296__$1;
(statearr_29299_29325[(1)] = (8));

} else {
var statearr_29300_29326 = state_29296__$1;
(statearr_29300_29326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (1))){
var inst_29265 = cljs.core.vec.call(null,chs);
var inst_29266 = inst_29265;
var state_29296__$1 = (function (){var statearr_29301 = state_29296;
(statearr_29301[(10)] = inst_29266);

return statearr_29301;
})();
var statearr_29302_29327 = state_29296__$1;
(statearr_29302_29327[(2)] = null);

(statearr_29302_29327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (4))){
var inst_29266 = (state_29296[(10)]);
var state_29296__$1 = state_29296;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29296__$1,(7),inst_29266);
} else {
if((state_val_29297 === (6))){
var inst_29292 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29303_29328 = state_29296__$1;
(statearr_29303_29328[(2)] = inst_29292);

(statearr_29303_29328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (3))){
var inst_29294 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29296__$1,inst_29294);
} else {
if((state_val_29297 === (2))){
var inst_29266 = (state_29296[(10)]);
var inst_29268 = cljs.core.count.call(null,inst_29266);
var inst_29269 = (inst_29268 > (0));
var state_29296__$1 = state_29296;
if(cljs.core.truth_(inst_29269)){
var statearr_29305_29329 = state_29296__$1;
(statearr_29305_29329[(1)] = (4));

} else {
var statearr_29306_29330 = state_29296__$1;
(statearr_29306_29330[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (11))){
var inst_29266 = (state_29296[(10)]);
var inst_29285 = (state_29296[(2)]);
var tmp29304 = inst_29266;
var inst_29266__$1 = tmp29304;
var state_29296__$1 = (function (){var statearr_29307 = state_29296;
(statearr_29307[(10)] = inst_29266__$1);

(statearr_29307[(11)] = inst_29285);

return statearr_29307;
})();
var statearr_29308_29331 = state_29296__$1;
(statearr_29308_29331[(2)] = null);

(statearr_29308_29331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (9))){
var inst_29276 = (state_29296[(8)]);
var state_29296__$1 = state_29296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29296__$1,(11),out,inst_29276);
} else {
if((state_val_29297 === (5))){
var inst_29290 = cljs.core.async.close_BANG_.call(null,out);
var state_29296__$1 = state_29296;
var statearr_29309_29332 = state_29296__$1;
(statearr_29309_29332[(2)] = inst_29290);

(statearr_29309_29332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (10))){
var inst_29288 = (state_29296[(2)]);
var state_29296__$1 = state_29296;
var statearr_29310_29333 = state_29296__$1;
(statearr_29310_29333[(2)] = inst_29288);

(statearr_29310_29333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29297 === (8))){
var inst_29275 = (state_29296[(7)]);
var inst_29277 = (state_29296[(9)]);
var inst_29266 = (state_29296[(10)]);
var inst_29276 = (state_29296[(8)]);
var inst_29280 = (function (){var cs = inst_29266;
var vec__29271 = inst_29275;
var v = inst_29276;
var c = inst_29277;
return ((function (cs,vec__29271,v,c,inst_29275,inst_29277,inst_29266,inst_29276,state_val_29297,c__27170__auto___29324,out){
return (function (p1__29261_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29261_SHARP_);
});
;})(cs,vec__29271,v,c,inst_29275,inst_29277,inst_29266,inst_29276,state_val_29297,c__27170__auto___29324,out))
})();
var inst_29281 = cljs.core.filterv.call(null,inst_29280,inst_29266);
var inst_29266__$1 = inst_29281;
var state_29296__$1 = (function (){var statearr_29311 = state_29296;
(statearr_29311[(10)] = inst_29266__$1);

return statearr_29311;
})();
var statearr_29312_29334 = state_29296__$1;
(statearr_29312_29334[(2)] = null);

(statearr_29312_29334[(1)] = (2));


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
});})(c__27170__auto___29324,out))
;
return ((function (switch__27058__auto__,c__27170__auto___29324,out){
return (function() {
var cljs$core$async$state_machine__27059__auto__ = null;
var cljs$core$async$state_machine__27059__auto____0 = (function (){
var statearr_29316 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29316[(0)] = cljs$core$async$state_machine__27059__auto__);

(statearr_29316[(1)] = (1));

return statearr_29316;
});
var cljs$core$async$state_machine__27059__auto____1 = (function (state_29296){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_29296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e29317){if((e29317 instanceof Object)){
var ex__27062__auto__ = e29317;
var statearr_29318_29335 = state_29296;
(statearr_29318_29335[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29336 = state_29296;
state_29296 = G__29336;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$state_machine__27059__auto__ = function(state_29296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27059__auto____1.call(this,state_29296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27059__auto____0;
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27059__auto____1;
return cljs$core$async$state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___29324,out))
})();
var state__27172__auto__ = (function (){var statearr_29319 = f__27171__auto__.call(null);
(statearr_29319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___29324);

return statearr_29319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___29324,out))
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
var args29337 = [];
var len__26073__auto___29386 = arguments.length;
var i__26074__auto___29387 = (0);
while(true){
if((i__26074__auto___29387 < len__26073__auto___29386)){
args29337.push((arguments[i__26074__auto___29387]));

var G__29388 = (i__26074__auto___29387 + (1));
i__26074__auto___29387 = G__29388;
continue;
} else {
}
break;
}

var G__29339 = args29337.length;
switch (G__29339) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29337.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27170__auto___29390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___29390,out){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___29390,out){
return (function (state_29363){
var state_val_29364 = (state_29363[(1)]);
if((state_val_29364 === (7))){
var inst_29345 = (state_29363[(7)]);
var inst_29345__$1 = (state_29363[(2)]);
var inst_29346 = (inst_29345__$1 == null);
var inst_29347 = cljs.core.not.call(null,inst_29346);
var state_29363__$1 = (function (){var statearr_29365 = state_29363;
(statearr_29365[(7)] = inst_29345__$1);

return statearr_29365;
})();
if(inst_29347){
var statearr_29366_29391 = state_29363__$1;
(statearr_29366_29391[(1)] = (8));

} else {
var statearr_29367_29392 = state_29363__$1;
(statearr_29367_29392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (1))){
var inst_29340 = (0);
var state_29363__$1 = (function (){var statearr_29368 = state_29363;
(statearr_29368[(8)] = inst_29340);

return statearr_29368;
})();
var statearr_29369_29394 = state_29363__$1;
(statearr_29369_29394[(2)] = null);

(statearr_29369_29394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (4))){
var state_29363__$1 = state_29363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29363__$1,(7),ch);
} else {
if((state_val_29364 === (6))){
var inst_29358 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29370_29395 = state_29363__$1;
(statearr_29370_29395[(2)] = inst_29358);

(statearr_29370_29395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (3))){
var inst_29360 = (state_29363[(2)]);
var inst_29361 = cljs.core.async.close_BANG_.call(null,out);
var state_29363__$1 = (function (){var statearr_29371 = state_29363;
(statearr_29371[(9)] = inst_29360);

return statearr_29371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29363__$1,inst_29361);
} else {
if((state_val_29364 === (2))){
var inst_29340 = (state_29363[(8)]);
var inst_29342 = (inst_29340 < n);
var state_29363__$1 = state_29363;
if(cljs.core.truth_(inst_29342)){
var statearr_29372_29396 = state_29363__$1;
(statearr_29372_29396[(1)] = (4));

} else {
var statearr_29373_29397 = state_29363__$1;
(statearr_29373_29397[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (11))){
var inst_29340 = (state_29363[(8)]);
var inst_29350 = (state_29363[(2)]);
var inst_29351 = (inst_29340 + (1));
var inst_29340__$1 = inst_29351;
var state_29363__$1 = (function (){var statearr_29374 = state_29363;
(statearr_29374[(8)] = inst_29340__$1);

(statearr_29374[(10)] = inst_29350);

return statearr_29374;
})();
var statearr_29375_29398 = state_29363__$1;
(statearr_29375_29398[(2)] = null);

(statearr_29375_29398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (9))){
var state_29363__$1 = state_29363;
var statearr_29376_29399 = state_29363__$1;
(statearr_29376_29399[(2)] = null);

(statearr_29376_29399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (5))){
var state_29363__$1 = state_29363;
var statearr_29377_29400 = state_29363__$1;
(statearr_29377_29400[(2)] = null);

(statearr_29377_29400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (10))){
var inst_29355 = (state_29363[(2)]);
var state_29363__$1 = state_29363;
var statearr_29378_29401 = state_29363__$1;
(statearr_29378_29401[(2)] = inst_29355);

(statearr_29378_29401[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29364 === (8))){
var inst_29345 = (state_29363[(7)]);
var state_29363__$1 = state_29363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29363__$1,(11),out,inst_29345);
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
});})(c__27170__auto___29390,out))
;
return ((function (switch__27058__auto__,c__27170__auto___29390,out){
return (function() {
var cljs$core$async$state_machine__27059__auto__ = null;
var cljs$core$async$state_machine__27059__auto____0 = (function (){
var statearr_29382 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29382[(0)] = cljs$core$async$state_machine__27059__auto__);

(statearr_29382[(1)] = (1));

return statearr_29382;
});
var cljs$core$async$state_machine__27059__auto____1 = (function (state_29363){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_29363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e29383){if((e29383 instanceof Object)){
var ex__27062__auto__ = e29383;
var statearr_29384_29402 = state_29363;
(statearr_29384_29402[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29403 = state_29363;
state_29363 = G__29403;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$state_machine__27059__auto__ = function(state_29363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27059__auto____1.call(this,state_29363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27059__auto____0;
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27059__auto____1;
return cljs$core$async$state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___29390,out))
})();
var state__27172__auto__ = (function (){var statearr_29385 = f__27171__auto__.call(null);
(statearr_29385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___29390);

return statearr_29385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___29390,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29411 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29411 = (function (f,ch,meta29412){
this.f = f;
this.ch = ch;
this.meta29412 = meta29412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29413,meta29412__$1){
var self__ = this;
var _29413__$1 = this;
return (new cljs.core.async.t_cljs$core$async29411(self__.f,self__.ch,meta29412__$1));
});

cljs.core.async.t_cljs$core$async29411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29413){
var self__ = this;
var _29413__$1 = this;
return self__.meta29412;
});

cljs.core.async.t_cljs$core$async29411.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29411.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29411.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29414 = (function (f,ch,meta29412,_,fn1,meta29415){
this.f = f;
this.ch = ch;
this.meta29412 = meta29412;
this._ = _;
this.fn1 = fn1;
this.meta29415 = meta29415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29416,meta29415__$1){
var self__ = this;
var _29416__$1 = this;
return (new cljs.core.async.t_cljs$core$async29414(self__.f,self__.ch,self__.meta29412,self__._,self__.fn1,meta29415__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29416){
var self__ = this;
var _29416__$1 = this;
return self__.meta29415;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29404_SHARP_){
return f1.call(null,(((p1__29404_SHARP_ == null))?null:self__.f.call(null,p1__29404_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29414.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29412","meta29412",-1302755145,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29411","cljs.core.async/t_cljs$core$async29411",2009270538,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29415","meta29415",1040241905,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29414";

cljs.core.async.t_cljs$core$async29414.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25571__auto__,writer__25572__auto__,opt__25573__auto__){
return cljs.core._write.call(null,writer__25572__auto__,"cljs.core.async/t_cljs$core$async29414");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29414 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29414(f__$1,ch__$1,meta29412__$1,___$2,fn1__$1,meta29415){
return (new cljs.core.async.t_cljs$core$async29414(f__$1,ch__$1,meta29412__$1,___$2,fn1__$1,meta29415));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29414(self__.f,self__.ch,self__.meta29412,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24953__auto__ = ret;
if(cljs.core.truth_(and__24953__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24953__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29411.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29411.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29412","meta29412",-1302755145,null)], null);
});

cljs.core.async.t_cljs$core$async29411.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29411.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29411";

cljs.core.async.t_cljs$core$async29411.cljs$lang$ctorPrWriter = (function (this__25571__auto__,writer__25572__auto__,opt__25573__auto__){
return cljs.core._write.call(null,writer__25572__auto__,"cljs.core.async/t_cljs$core$async29411");
});

cljs.core.async.__GT_t_cljs$core$async29411 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29411(f__$1,ch__$1,meta29412){
return (new cljs.core.async.t_cljs$core$async29411(f__$1,ch__$1,meta29412));
});

}

return (new cljs.core.async.t_cljs$core$async29411(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29420 = (function (f,ch,meta29421){
this.f = f;
this.ch = ch;
this.meta29421 = meta29421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29422,meta29421__$1){
var self__ = this;
var _29422__$1 = this;
return (new cljs.core.async.t_cljs$core$async29420(self__.f,self__.ch,meta29421__$1));
});

cljs.core.async.t_cljs$core$async29420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29422){
var self__ = this;
var _29422__$1 = this;
return self__.meta29421;
});

cljs.core.async.t_cljs$core$async29420.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29420.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29420.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29421","meta29421",-1756791754,null)], null);
});

cljs.core.async.t_cljs$core$async29420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29420";

cljs.core.async.t_cljs$core$async29420.cljs$lang$ctorPrWriter = (function (this__25571__auto__,writer__25572__auto__,opt__25573__auto__){
return cljs.core._write.call(null,writer__25572__auto__,"cljs.core.async/t_cljs$core$async29420");
});

cljs.core.async.__GT_t_cljs$core$async29420 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29420(f__$1,ch__$1,meta29421){
return (new cljs.core.async.t_cljs$core$async29420(f__$1,ch__$1,meta29421));
});

}

return (new cljs.core.async.t_cljs$core$async29420(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29426 = (function (p,ch,meta29427){
this.p = p;
this.ch = ch;
this.meta29427 = meta29427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29428,meta29427__$1){
var self__ = this;
var _29428__$1 = this;
return (new cljs.core.async.t_cljs$core$async29426(self__.p,self__.ch,meta29427__$1));
});

cljs.core.async.t_cljs$core$async29426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29428){
var self__ = this;
var _29428__$1 = this;
return self__.meta29427;
});

cljs.core.async.t_cljs$core$async29426.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29426.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29426.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29426.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29427","meta29427",1800172563,null)], null);
});

cljs.core.async.t_cljs$core$async29426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29426";

cljs.core.async.t_cljs$core$async29426.cljs$lang$ctorPrWriter = (function (this__25571__auto__,writer__25572__auto__,opt__25573__auto__){
return cljs.core._write.call(null,writer__25572__auto__,"cljs.core.async/t_cljs$core$async29426");
});

cljs.core.async.__GT_t_cljs$core$async29426 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29426(p__$1,ch__$1,meta29427){
return (new cljs.core.async.t_cljs$core$async29426(p__$1,ch__$1,meta29427));
});

}

return (new cljs.core.async.t_cljs$core$async29426(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29429 = [];
var len__26073__auto___29473 = arguments.length;
var i__26074__auto___29474 = (0);
while(true){
if((i__26074__auto___29474 < len__26073__auto___29473)){
args29429.push((arguments[i__26074__auto___29474]));

var G__29475 = (i__26074__auto___29474 + (1));
i__26074__auto___29474 = G__29475;
continue;
} else {
}
break;
}

var G__29431 = args29429.length;
switch (G__29431) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29429.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27170__auto___29477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___29477,out){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___29477,out){
return (function (state_29452){
var state_val_29453 = (state_29452[(1)]);
if((state_val_29453 === (7))){
var inst_29448 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
var statearr_29454_29478 = state_29452__$1;
(statearr_29454_29478[(2)] = inst_29448);

(statearr_29454_29478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (1))){
var state_29452__$1 = state_29452;
var statearr_29455_29479 = state_29452__$1;
(statearr_29455_29479[(2)] = null);

(statearr_29455_29479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (4))){
var inst_29434 = (state_29452[(7)]);
var inst_29434__$1 = (state_29452[(2)]);
var inst_29435 = (inst_29434__$1 == null);
var state_29452__$1 = (function (){var statearr_29456 = state_29452;
(statearr_29456[(7)] = inst_29434__$1);

return statearr_29456;
})();
if(cljs.core.truth_(inst_29435)){
var statearr_29457_29480 = state_29452__$1;
(statearr_29457_29480[(1)] = (5));

} else {
var statearr_29458_29481 = state_29452__$1;
(statearr_29458_29481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (6))){
var inst_29434 = (state_29452[(7)]);
var inst_29439 = p.call(null,inst_29434);
var state_29452__$1 = state_29452;
if(cljs.core.truth_(inst_29439)){
var statearr_29459_29482 = state_29452__$1;
(statearr_29459_29482[(1)] = (8));

} else {
var statearr_29460_29483 = state_29452__$1;
(statearr_29460_29483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (3))){
var inst_29450 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29452__$1,inst_29450);
} else {
if((state_val_29453 === (2))){
var state_29452__$1 = state_29452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29452__$1,(4),ch);
} else {
if((state_val_29453 === (11))){
var inst_29442 = (state_29452[(2)]);
var state_29452__$1 = state_29452;
var statearr_29461_29484 = state_29452__$1;
(statearr_29461_29484[(2)] = inst_29442);

(statearr_29461_29484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (9))){
var state_29452__$1 = state_29452;
var statearr_29462_29485 = state_29452__$1;
(statearr_29462_29485[(2)] = null);

(statearr_29462_29485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (5))){
var inst_29437 = cljs.core.async.close_BANG_.call(null,out);
var state_29452__$1 = state_29452;
var statearr_29463_29486 = state_29452__$1;
(statearr_29463_29486[(2)] = inst_29437);

(statearr_29463_29486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (10))){
var inst_29445 = (state_29452[(2)]);
var state_29452__$1 = (function (){var statearr_29464 = state_29452;
(statearr_29464[(8)] = inst_29445);

return statearr_29464;
})();
var statearr_29465_29487 = state_29452__$1;
(statearr_29465_29487[(2)] = null);

(statearr_29465_29487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29453 === (8))){
var inst_29434 = (state_29452[(7)]);
var state_29452__$1 = state_29452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29452__$1,(11),out,inst_29434);
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
});})(c__27170__auto___29477,out))
;
return ((function (switch__27058__auto__,c__27170__auto___29477,out){
return (function() {
var cljs$core$async$state_machine__27059__auto__ = null;
var cljs$core$async$state_machine__27059__auto____0 = (function (){
var statearr_29469 = [null,null,null,null,null,null,null,null,null];
(statearr_29469[(0)] = cljs$core$async$state_machine__27059__auto__);

(statearr_29469[(1)] = (1));

return statearr_29469;
});
var cljs$core$async$state_machine__27059__auto____1 = (function (state_29452){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_29452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e29470){if((e29470 instanceof Object)){
var ex__27062__auto__ = e29470;
var statearr_29471_29488 = state_29452;
(statearr_29471_29488[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29489 = state_29452;
state_29452 = G__29489;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$state_machine__27059__auto__ = function(state_29452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27059__auto____1.call(this,state_29452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27059__auto____0;
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27059__auto____1;
return cljs$core$async$state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___29477,out))
})();
var state__27172__auto__ = (function (){var statearr_29472 = f__27171__auto__.call(null);
(statearr_29472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___29477);

return statearr_29472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___29477,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29490 = [];
var len__26073__auto___29493 = arguments.length;
var i__26074__auto___29494 = (0);
while(true){
if((i__26074__auto___29494 < len__26073__auto___29493)){
args29490.push((arguments[i__26074__auto___29494]));

var G__29495 = (i__26074__auto___29494 + (1));
i__26074__auto___29494 = G__29495;
continue;
} else {
}
break;
}

var G__29492 = args29490.length;
switch (G__29492) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29490.length)].join('')));

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
var c__27170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto__){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto__){
return (function (state_29662){
var state_val_29663 = (state_29662[(1)]);
if((state_val_29663 === (7))){
var inst_29658 = (state_29662[(2)]);
var state_29662__$1 = state_29662;
var statearr_29664_29705 = state_29662__$1;
(statearr_29664_29705[(2)] = inst_29658);

(statearr_29664_29705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (20))){
var inst_29628 = (state_29662[(7)]);
var inst_29639 = (state_29662[(2)]);
var inst_29640 = cljs.core.next.call(null,inst_29628);
var inst_29614 = inst_29640;
var inst_29615 = null;
var inst_29616 = (0);
var inst_29617 = (0);
var state_29662__$1 = (function (){var statearr_29665 = state_29662;
(statearr_29665[(8)] = inst_29615);

(statearr_29665[(9)] = inst_29614);

(statearr_29665[(10)] = inst_29617);

(statearr_29665[(11)] = inst_29639);

(statearr_29665[(12)] = inst_29616);

return statearr_29665;
})();
var statearr_29666_29706 = state_29662__$1;
(statearr_29666_29706[(2)] = null);

(statearr_29666_29706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (1))){
var state_29662__$1 = state_29662;
var statearr_29667_29707 = state_29662__$1;
(statearr_29667_29707[(2)] = null);

(statearr_29667_29707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (4))){
var inst_29603 = (state_29662[(13)]);
var inst_29603__$1 = (state_29662[(2)]);
var inst_29604 = (inst_29603__$1 == null);
var state_29662__$1 = (function (){var statearr_29668 = state_29662;
(statearr_29668[(13)] = inst_29603__$1);

return statearr_29668;
})();
if(cljs.core.truth_(inst_29604)){
var statearr_29669_29708 = state_29662__$1;
(statearr_29669_29708[(1)] = (5));

} else {
var statearr_29670_29709 = state_29662__$1;
(statearr_29670_29709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (15))){
var state_29662__$1 = state_29662;
var statearr_29674_29710 = state_29662__$1;
(statearr_29674_29710[(2)] = null);

(statearr_29674_29710[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (21))){
var state_29662__$1 = state_29662;
var statearr_29675_29711 = state_29662__$1;
(statearr_29675_29711[(2)] = null);

(statearr_29675_29711[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (13))){
var inst_29615 = (state_29662[(8)]);
var inst_29614 = (state_29662[(9)]);
var inst_29617 = (state_29662[(10)]);
var inst_29616 = (state_29662[(12)]);
var inst_29624 = (state_29662[(2)]);
var inst_29625 = (inst_29617 + (1));
var tmp29671 = inst_29615;
var tmp29672 = inst_29614;
var tmp29673 = inst_29616;
var inst_29614__$1 = tmp29672;
var inst_29615__$1 = tmp29671;
var inst_29616__$1 = tmp29673;
var inst_29617__$1 = inst_29625;
var state_29662__$1 = (function (){var statearr_29676 = state_29662;
(statearr_29676[(8)] = inst_29615__$1);

(statearr_29676[(9)] = inst_29614__$1);

(statearr_29676[(10)] = inst_29617__$1);

(statearr_29676[(14)] = inst_29624);

(statearr_29676[(12)] = inst_29616__$1);

return statearr_29676;
})();
var statearr_29677_29712 = state_29662__$1;
(statearr_29677_29712[(2)] = null);

(statearr_29677_29712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (22))){
var state_29662__$1 = state_29662;
var statearr_29678_29713 = state_29662__$1;
(statearr_29678_29713[(2)] = null);

(statearr_29678_29713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (6))){
var inst_29603 = (state_29662[(13)]);
var inst_29612 = f.call(null,inst_29603);
var inst_29613 = cljs.core.seq.call(null,inst_29612);
var inst_29614 = inst_29613;
var inst_29615 = null;
var inst_29616 = (0);
var inst_29617 = (0);
var state_29662__$1 = (function (){var statearr_29679 = state_29662;
(statearr_29679[(8)] = inst_29615);

(statearr_29679[(9)] = inst_29614);

(statearr_29679[(10)] = inst_29617);

(statearr_29679[(12)] = inst_29616);

return statearr_29679;
})();
var statearr_29680_29714 = state_29662__$1;
(statearr_29680_29714[(2)] = null);

(statearr_29680_29714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (17))){
var inst_29628 = (state_29662[(7)]);
var inst_29632 = cljs.core.chunk_first.call(null,inst_29628);
var inst_29633 = cljs.core.chunk_rest.call(null,inst_29628);
var inst_29634 = cljs.core.count.call(null,inst_29632);
var inst_29614 = inst_29633;
var inst_29615 = inst_29632;
var inst_29616 = inst_29634;
var inst_29617 = (0);
var state_29662__$1 = (function (){var statearr_29681 = state_29662;
(statearr_29681[(8)] = inst_29615);

(statearr_29681[(9)] = inst_29614);

(statearr_29681[(10)] = inst_29617);

(statearr_29681[(12)] = inst_29616);

return statearr_29681;
})();
var statearr_29682_29715 = state_29662__$1;
(statearr_29682_29715[(2)] = null);

(statearr_29682_29715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (3))){
var inst_29660 = (state_29662[(2)]);
var state_29662__$1 = state_29662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29662__$1,inst_29660);
} else {
if((state_val_29663 === (12))){
var inst_29648 = (state_29662[(2)]);
var state_29662__$1 = state_29662;
var statearr_29683_29716 = state_29662__$1;
(statearr_29683_29716[(2)] = inst_29648);

(statearr_29683_29716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (2))){
var state_29662__$1 = state_29662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29662__$1,(4),in$);
} else {
if((state_val_29663 === (23))){
var inst_29656 = (state_29662[(2)]);
var state_29662__$1 = state_29662;
var statearr_29684_29717 = state_29662__$1;
(statearr_29684_29717[(2)] = inst_29656);

(statearr_29684_29717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (19))){
var inst_29643 = (state_29662[(2)]);
var state_29662__$1 = state_29662;
var statearr_29685_29718 = state_29662__$1;
(statearr_29685_29718[(2)] = inst_29643);

(statearr_29685_29718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (11))){
var inst_29614 = (state_29662[(9)]);
var inst_29628 = (state_29662[(7)]);
var inst_29628__$1 = cljs.core.seq.call(null,inst_29614);
var state_29662__$1 = (function (){var statearr_29686 = state_29662;
(statearr_29686[(7)] = inst_29628__$1);

return statearr_29686;
})();
if(inst_29628__$1){
var statearr_29687_29719 = state_29662__$1;
(statearr_29687_29719[(1)] = (14));

} else {
var statearr_29688_29720 = state_29662__$1;
(statearr_29688_29720[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (9))){
var inst_29650 = (state_29662[(2)]);
var inst_29651 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29662__$1 = (function (){var statearr_29689 = state_29662;
(statearr_29689[(15)] = inst_29650);

return statearr_29689;
})();
if(cljs.core.truth_(inst_29651)){
var statearr_29690_29721 = state_29662__$1;
(statearr_29690_29721[(1)] = (21));

} else {
var statearr_29691_29722 = state_29662__$1;
(statearr_29691_29722[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (5))){
var inst_29606 = cljs.core.async.close_BANG_.call(null,out);
var state_29662__$1 = state_29662;
var statearr_29692_29723 = state_29662__$1;
(statearr_29692_29723[(2)] = inst_29606);

(statearr_29692_29723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (14))){
var inst_29628 = (state_29662[(7)]);
var inst_29630 = cljs.core.chunked_seq_QMARK_.call(null,inst_29628);
var state_29662__$1 = state_29662;
if(inst_29630){
var statearr_29693_29724 = state_29662__$1;
(statearr_29693_29724[(1)] = (17));

} else {
var statearr_29694_29725 = state_29662__$1;
(statearr_29694_29725[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (16))){
var inst_29646 = (state_29662[(2)]);
var state_29662__$1 = state_29662;
var statearr_29695_29726 = state_29662__$1;
(statearr_29695_29726[(2)] = inst_29646);

(statearr_29695_29726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (10))){
var inst_29615 = (state_29662[(8)]);
var inst_29617 = (state_29662[(10)]);
var inst_29622 = cljs.core._nth.call(null,inst_29615,inst_29617);
var state_29662__$1 = state_29662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29662__$1,(13),out,inst_29622);
} else {
if((state_val_29663 === (18))){
var inst_29628 = (state_29662[(7)]);
var inst_29637 = cljs.core.first.call(null,inst_29628);
var state_29662__$1 = state_29662;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29662__$1,(20),out,inst_29637);
} else {
if((state_val_29663 === (8))){
var inst_29617 = (state_29662[(10)]);
var inst_29616 = (state_29662[(12)]);
var inst_29619 = (inst_29617 < inst_29616);
var inst_29620 = inst_29619;
var state_29662__$1 = state_29662;
if(cljs.core.truth_(inst_29620)){
var statearr_29696_29727 = state_29662__$1;
(statearr_29696_29727[(1)] = (10));

} else {
var statearr_29697_29728 = state_29662__$1;
(statearr_29697_29728[(1)] = (11));

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
});})(c__27170__auto__))
;
return ((function (switch__27058__auto__,c__27170__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27059__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27059__auto____0 = (function (){
var statearr_29701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29701[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27059__auto__);

(statearr_29701[(1)] = (1));

return statearr_29701;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27059__auto____1 = (function (state_29662){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_29662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e29702){if((e29702 instanceof Object)){
var ex__27062__auto__ = e29702;
var statearr_29703_29729 = state_29662;
(statearr_29703_29729[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29730 = state_29662;
state_29662 = G__29730;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27059__auto__ = function(state_29662){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27059__auto____1.call(this,state_29662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27059__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27059__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto__))
})();
var state__27172__auto__ = (function (){var statearr_29704 = f__27171__auto__.call(null);
(statearr_29704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto__);

return statearr_29704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto__))
);

return c__27170__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29731 = [];
var len__26073__auto___29734 = arguments.length;
var i__26074__auto___29735 = (0);
while(true){
if((i__26074__auto___29735 < len__26073__auto___29734)){
args29731.push((arguments[i__26074__auto___29735]));

var G__29736 = (i__26074__auto___29735 + (1));
i__26074__auto___29735 = G__29736;
continue;
} else {
}
break;
}

var G__29733 = args29731.length;
switch (G__29733) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29731.length)].join('')));

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
var args29738 = [];
var len__26073__auto___29741 = arguments.length;
var i__26074__auto___29742 = (0);
while(true){
if((i__26074__auto___29742 < len__26073__auto___29741)){
args29738.push((arguments[i__26074__auto___29742]));

var G__29743 = (i__26074__auto___29742 + (1));
i__26074__auto___29742 = G__29743;
continue;
} else {
}
break;
}

var G__29740 = args29738.length;
switch (G__29740) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29738.length)].join('')));

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
var args29745 = [];
var len__26073__auto___29796 = arguments.length;
var i__26074__auto___29797 = (0);
while(true){
if((i__26074__auto___29797 < len__26073__auto___29796)){
args29745.push((arguments[i__26074__auto___29797]));

var G__29798 = (i__26074__auto___29797 + (1));
i__26074__auto___29797 = G__29798;
continue;
} else {
}
break;
}

var G__29747 = args29745.length;
switch (G__29747) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29745.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27170__auto___29800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___29800,out){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___29800,out){
return (function (state_29771){
var state_val_29772 = (state_29771[(1)]);
if((state_val_29772 === (7))){
var inst_29766 = (state_29771[(2)]);
var state_29771__$1 = state_29771;
var statearr_29773_29801 = state_29771__$1;
(statearr_29773_29801[(2)] = inst_29766);

(statearr_29773_29801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (1))){
var inst_29748 = null;
var state_29771__$1 = (function (){var statearr_29774 = state_29771;
(statearr_29774[(7)] = inst_29748);

return statearr_29774;
})();
var statearr_29775_29802 = state_29771__$1;
(statearr_29775_29802[(2)] = null);

(statearr_29775_29802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (4))){
var inst_29751 = (state_29771[(8)]);
var inst_29751__$1 = (state_29771[(2)]);
var inst_29752 = (inst_29751__$1 == null);
var inst_29753 = cljs.core.not.call(null,inst_29752);
var state_29771__$1 = (function (){var statearr_29776 = state_29771;
(statearr_29776[(8)] = inst_29751__$1);

return statearr_29776;
})();
if(inst_29753){
var statearr_29777_29803 = state_29771__$1;
(statearr_29777_29803[(1)] = (5));

} else {
var statearr_29778_29804 = state_29771__$1;
(statearr_29778_29804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (6))){
var state_29771__$1 = state_29771;
var statearr_29779_29805 = state_29771__$1;
(statearr_29779_29805[(2)] = null);

(statearr_29779_29805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (3))){
var inst_29768 = (state_29771[(2)]);
var inst_29769 = cljs.core.async.close_BANG_.call(null,out);
var state_29771__$1 = (function (){var statearr_29780 = state_29771;
(statearr_29780[(9)] = inst_29768);

return statearr_29780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29771__$1,inst_29769);
} else {
if((state_val_29772 === (2))){
var state_29771__$1 = state_29771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29771__$1,(4),ch);
} else {
if((state_val_29772 === (11))){
var inst_29751 = (state_29771[(8)]);
var inst_29760 = (state_29771[(2)]);
var inst_29748 = inst_29751;
var state_29771__$1 = (function (){var statearr_29781 = state_29771;
(statearr_29781[(10)] = inst_29760);

(statearr_29781[(7)] = inst_29748);

return statearr_29781;
})();
var statearr_29782_29806 = state_29771__$1;
(statearr_29782_29806[(2)] = null);

(statearr_29782_29806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (9))){
var inst_29751 = (state_29771[(8)]);
var state_29771__$1 = state_29771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29771__$1,(11),out,inst_29751);
} else {
if((state_val_29772 === (5))){
var inst_29751 = (state_29771[(8)]);
var inst_29748 = (state_29771[(7)]);
var inst_29755 = cljs.core._EQ_.call(null,inst_29751,inst_29748);
var state_29771__$1 = state_29771;
if(inst_29755){
var statearr_29784_29807 = state_29771__$1;
(statearr_29784_29807[(1)] = (8));

} else {
var statearr_29785_29808 = state_29771__$1;
(statearr_29785_29808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (10))){
var inst_29763 = (state_29771[(2)]);
var state_29771__$1 = state_29771;
var statearr_29786_29809 = state_29771__$1;
(statearr_29786_29809[(2)] = inst_29763);

(statearr_29786_29809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29772 === (8))){
var inst_29748 = (state_29771[(7)]);
var tmp29783 = inst_29748;
var inst_29748__$1 = tmp29783;
var state_29771__$1 = (function (){var statearr_29787 = state_29771;
(statearr_29787[(7)] = inst_29748__$1);

return statearr_29787;
})();
var statearr_29788_29810 = state_29771__$1;
(statearr_29788_29810[(2)] = null);

(statearr_29788_29810[(1)] = (2));


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
});})(c__27170__auto___29800,out))
;
return ((function (switch__27058__auto__,c__27170__auto___29800,out){
return (function() {
var cljs$core$async$state_machine__27059__auto__ = null;
var cljs$core$async$state_machine__27059__auto____0 = (function (){
var statearr_29792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29792[(0)] = cljs$core$async$state_machine__27059__auto__);

(statearr_29792[(1)] = (1));

return statearr_29792;
});
var cljs$core$async$state_machine__27059__auto____1 = (function (state_29771){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_29771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e29793){if((e29793 instanceof Object)){
var ex__27062__auto__ = e29793;
var statearr_29794_29811 = state_29771;
(statearr_29794_29811[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29812 = state_29771;
state_29771 = G__29812;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$state_machine__27059__auto__ = function(state_29771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27059__auto____1.call(this,state_29771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27059__auto____0;
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27059__auto____1;
return cljs$core$async$state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___29800,out))
})();
var state__27172__auto__ = (function (){var statearr_29795 = f__27171__auto__.call(null);
(statearr_29795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___29800);

return statearr_29795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___29800,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29813 = [];
var len__26073__auto___29883 = arguments.length;
var i__26074__auto___29884 = (0);
while(true){
if((i__26074__auto___29884 < len__26073__auto___29883)){
args29813.push((arguments[i__26074__auto___29884]));

var G__29885 = (i__26074__auto___29884 + (1));
i__26074__auto___29884 = G__29885;
continue;
} else {
}
break;
}

var G__29815 = args29813.length;
switch (G__29815) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29813.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27170__auto___29887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___29887,out){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___29887,out){
return (function (state_29853){
var state_val_29854 = (state_29853[(1)]);
if((state_val_29854 === (7))){
var inst_29849 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
var statearr_29855_29888 = state_29853__$1;
(statearr_29855_29888[(2)] = inst_29849);

(statearr_29855_29888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (1))){
var inst_29816 = (new Array(n));
var inst_29817 = inst_29816;
var inst_29818 = (0);
var state_29853__$1 = (function (){var statearr_29856 = state_29853;
(statearr_29856[(7)] = inst_29818);

(statearr_29856[(8)] = inst_29817);

return statearr_29856;
})();
var statearr_29857_29889 = state_29853__$1;
(statearr_29857_29889[(2)] = null);

(statearr_29857_29889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (4))){
var inst_29821 = (state_29853[(9)]);
var inst_29821__$1 = (state_29853[(2)]);
var inst_29822 = (inst_29821__$1 == null);
var inst_29823 = cljs.core.not.call(null,inst_29822);
var state_29853__$1 = (function (){var statearr_29858 = state_29853;
(statearr_29858[(9)] = inst_29821__$1);

return statearr_29858;
})();
if(inst_29823){
var statearr_29859_29890 = state_29853__$1;
(statearr_29859_29890[(1)] = (5));

} else {
var statearr_29860_29891 = state_29853__$1;
(statearr_29860_29891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (15))){
var inst_29843 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
var statearr_29861_29892 = state_29853__$1;
(statearr_29861_29892[(2)] = inst_29843);

(statearr_29861_29892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (13))){
var state_29853__$1 = state_29853;
var statearr_29862_29893 = state_29853__$1;
(statearr_29862_29893[(2)] = null);

(statearr_29862_29893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (6))){
var inst_29818 = (state_29853[(7)]);
var inst_29839 = (inst_29818 > (0));
var state_29853__$1 = state_29853;
if(cljs.core.truth_(inst_29839)){
var statearr_29863_29894 = state_29853__$1;
(statearr_29863_29894[(1)] = (12));

} else {
var statearr_29864_29895 = state_29853__$1;
(statearr_29864_29895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (3))){
var inst_29851 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29853__$1,inst_29851);
} else {
if((state_val_29854 === (12))){
var inst_29817 = (state_29853[(8)]);
var inst_29841 = cljs.core.vec.call(null,inst_29817);
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29853__$1,(15),out,inst_29841);
} else {
if((state_val_29854 === (2))){
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29853__$1,(4),ch);
} else {
if((state_val_29854 === (11))){
var inst_29833 = (state_29853[(2)]);
var inst_29834 = (new Array(n));
var inst_29817 = inst_29834;
var inst_29818 = (0);
var state_29853__$1 = (function (){var statearr_29865 = state_29853;
(statearr_29865[(10)] = inst_29833);

(statearr_29865[(7)] = inst_29818);

(statearr_29865[(8)] = inst_29817);

return statearr_29865;
})();
var statearr_29866_29896 = state_29853__$1;
(statearr_29866_29896[(2)] = null);

(statearr_29866_29896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (9))){
var inst_29817 = (state_29853[(8)]);
var inst_29831 = cljs.core.vec.call(null,inst_29817);
var state_29853__$1 = state_29853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29853__$1,(11),out,inst_29831);
} else {
if((state_val_29854 === (5))){
var inst_29821 = (state_29853[(9)]);
var inst_29826 = (state_29853[(11)]);
var inst_29818 = (state_29853[(7)]);
var inst_29817 = (state_29853[(8)]);
var inst_29825 = (inst_29817[inst_29818] = inst_29821);
var inst_29826__$1 = (inst_29818 + (1));
var inst_29827 = (inst_29826__$1 < n);
var state_29853__$1 = (function (){var statearr_29867 = state_29853;
(statearr_29867[(11)] = inst_29826__$1);

(statearr_29867[(12)] = inst_29825);

return statearr_29867;
})();
if(cljs.core.truth_(inst_29827)){
var statearr_29868_29897 = state_29853__$1;
(statearr_29868_29897[(1)] = (8));

} else {
var statearr_29869_29898 = state_29853__$1;
(statearr_29869_29898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (14))){
var inst_29846 = (state_29853[(2)]);
var inst_29847 = cljs.core.async.close_BANG_.call(null,out);
var state_29853__$1 = (function (){var statearr_29871 = state_29853;
(statearr_29871[(13)] = inst_29846);

return statearr_29871;
})();
var statearr_29872_29899 = state_29853__$1;
(statearr_29872_29899[(2)] = inst_29847);

(statearr_29872_29899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (10))){
var inst_29837 = (state_29853[(2)]);
var state_29853__$1 = state_29853;
var statearr_29873_29900 = state_29853__$1;
(statearr_29873_29900[(2)] = inst_29837);

(statearr_29873_29900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29854 === (8))){
var inst_29826 = (state_29853[(11)]);
var inst_29817 = (state_29853[(8)]);
var tmp29870 = inst_29817;
var inst_29817__$1 = tmp29870;
var inst_29818 = inst_29826;
var state_29853__$1 = (function (){var statearr_29874 = state_29853;
(statearr_29874[(7)] = inst_29818);

(statearr_29874[(8)] = inst_29817__$1);

return statearr_29874;
})();
var statearr_29875_29901 = state_29853__$1;
(statearr_29875_29901[(2)] = null);

(statearr_29875_29901[(1)] = (2));


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
});})(c__27170__auto___29887,out))
;
return ((function (switch__27058__auto__,c__27170__auto___29887,out){
return (function() {
var cljs$core$async$state_machine__27059__auto__ = null;
var cljs$core$async$state_machine__27059__auto____0 = (function (){
var statearr_29879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29879[(0)] = cljs$core$async$state_machine__27059__auto__);

(statearr_29879[(1)] = (1));

return statearr_29879;
});
var cljs$core$async$state_machine__27059__auto____1 = (function (state_29853){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_29853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e29880){if((e29880 instanceof Object)){
var ex__27062__auto__ = e29880;
var statearr_29881_29902 = state_29853;
(statearr_29881_29902[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29903 = state_29853;
state_29853 = G__29903;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$state_machine__27059__auto__ = function(state_29853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27059__auto____1.call(this,state_29853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27059__auto____0;
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27059__auto____1;
return cljs$core$async$state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___29887,out))
})();
var state__27172__auto__ = (function (){var statearr_29882 = f__27171__auto__.call(null);
(statearr_29882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___29887);

return statearr_29882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___29887,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29904 = [];
var len__26073__auto___29978 = arguments.length;
var i__26074__auto___29979 = (0);
while(true){
if((i__26074__auto___29979 < len__26073__auto___29978)){
args29904.push((arguments[i__26074__auto___29979]));

var G__29980 = (i__26074__auto___29979 + (1));
i__26074__auto___29979 = G__29980;
continue;
} else {
}
break;
}

var G__29906 = args29904.length;
switch (G__29906) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29904.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27170__auto___29982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27170__auto___29982,out){
return (function (){
var f__27171__auto__ = (function (){var switch__27058__auto__ = ((function (c__27170__auto___29982,out){
return (function (state_29948){
var state_val_29949 = (state_29948[(1)]);
if((state_val_29949 === (7))){
var inst_29944 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29950_29983 = state_29948__$1;
(statearr_29950_29983[(2)] = inst_29944);

(statearr_29950_29983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (1))){
var inst_29907 = [];
var inst_29908 = inst_29907;
var inst_29909 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29948__$1 = (function (){var statearr_29951 = state_29948;
(statearr_29951[(7)] = inst_29909);

(statearr_29951[(8)] = inst_29908);

return statearr_29951;
})();
var statearr_29952_29984 = state_29948__$1;
(statearr_29952_29984[(2)] = null);

(statearr_29952_29984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (4))){
var inst_29912 = (state_29948[(9)]);
var inst_29912__$1 = (state_29948[(2)]);
var inst_29913 = (inst_29912__$1 == null);
var inst_29914 = cljs.core.not.call(null,inst_29913);
var state_29948__$1 = (function (){var statearr_29953 = state_29948;
(statearr_29953[(9)] = inst_29912__$1);

return statearr_29953;
})();
if(inst_29914){
var statearr_29954_29985 = state_29948__$1;
(statearr_29954_29985[(1)] = (5));

} else {
var statearr_29955_29986 = state_29948__$1;
(statearr_29955_29986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (15))){
var inst_29938 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29956_29987 = state_29948__$1;
(statearr_29956_29987[(2)] = inst_29938);

(statearr_29956_29987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (13))){
var state_29948__$1 = state_29948;
var statearr_29957_29988 = state_29948__$1;
(statearr_29957_29988[(2)] = null);

(statearr_29957_29988[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (6))){
var inst_29908 = (state_29948[(8)]);
var inst_29933 = inst_29908.length;
var inst_29934 = (inst_29933 > (0));
var state_29948__$1 = state_29948;
if(cljs.core.truth_(inst_29934)){
var statearr_29958_29989 = state_29948__$1;
(statearr_29958_29989[(1)] = (12));

} else {
var statearr_29959_29990 = state_29948__$1;
(statearr_29959_29990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (3))){
var inst_29946 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29948__$1,inst_29946);
} else {
if((state_val_29949 === (12))){
var inst_29908 = (state_29948[(8)]);
var inst_29936 = cljs.core.vec.call(null,inst_29908);
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29948__$1,(15),out,inst_29936);
} else {
if((state_val_29949 === (2))){
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29948__$1,(4),ch);
} else {
if((state_val_29949 === (11))){
var inst_29912 = (state_29948[(9)]);
var inst_29916 = (state_29948[(10)]);
var inst_29926 = (state_29948[(2)]);
var inst_29927 = [];
var inst_29928 = inst_29927.push(inst_29912);
var inst_29908 = inst_29927;
var inst_29909 = inst_29916;
var state_29948__$1 = (function (){var statearr_29960 = state_29948;
(statearr_29960[(7)] = inst_29909);

(statearr_29960[(11)] = inst_29928);

(statearr_29960[(8)] = inst_29908);

(statearr_29960[(12)] = inst_29926);

return statearr_29960;
})();
var statearr_29961_29991 = state_29948__$1;
(statearr_29961_29991[(2)] = null);

(statearr_29961_29991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (9))){
var inst_29908 = (state_29948[(8)]);
var inst_29924 = cljs.core.vec.call(null,inst_29908);
var state_29948__$1 = state_29948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29948__$1,(11),out,inst_29924);
} else {
if((state_val_29949 === (5))){
var inst_29909 = (state_29948[(7)]);
var inst_29912 = (state_29948[(9)]);
var inst_29916 = (state_29948[(10)]);
var inst_29916__$1 = f.call(null,inst_29912);
var inst_29917 = cljs.core._EQ_.call(null,inst_29916__$1,inst_29909);
var inst_29918 = cljs.core.keyword_identical_QMARK_.call(null,inst_29909,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29919 = (inst_29917) || (inst_29918);
var state_29948__$1 = (function (){var statearr_29962 = state_29948;
(statearr_29962[(10)] = inst_29916__$1);

return statearr_29962;
})();
if(cljs.core.truth_(inst_29919)){
var statearr_29963_29992 = state_29948__$1;
(statearr_29963_29992[(1)] = (8));

} else {
var statearr_29964_29993 = state_29948__$1;
(statearr_29964_29993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (14))){
var inst_29941 = (state_29948[(2)]);
var inst_29942 = cljs.core.async.close_BANG_.call(null,out);
var state_29948__$1 = (function (){var statearr_29966 = state_29948;
(statearr_29966[(13)] = inst_29941);

return statearr_29966;
})();
var statearr_29967_29994 = state_29948__$1;
(statearr_29967_29994[(2)] = inst_29942);

(statearr_29967_29994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (10))){
var inst_29931 = (state_29948[(2)]);
var state_29948__$1 = state_29948;
var statearr_29968_29995 = state_29948__$1;
(statearr_29968_29995[(2)] = inst_29931);

(statearr_29968_29995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29949 === (8))){
var inst_29912 = (state_29948[(9)]);
var inst_29916 = (state_29948[(10)]);
var inst_29908 = (state_29948[(8)]);
var inst_29921 = inst_29908.push(inst_29912);
var tmp29965 = inst_29908;
var inst_29908__$1 = tmp29965;
var inst_29909 = inst_29916;
var state_29948__$1 = (function (){var statearr_29969 = state_29948;
(statearr_29969[(7)] = inst_29909);

(statearr_29969[(8)] = inst_29908__$1);

(statearr_29969[(14)] = inst_29921);

return statearr_29969;
})();
var statearr_29970_29996 = state_29948__$1;
(statearr_29970_29996[(2)] = null);

(statearr_29970_29996[(1)] = (2));


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
});})(c__27170__auto___29982,out))
;
return ((function (switch__27058__auto__,c__27170__auto___29982,out){
return (function() {
var cljs$core$async$state_machine__27059__auto__ = null;
var cljs$core$async$state_machine__27059__auto____0 = (function (){
var statearr_29974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29974[(0)] = cljs$core$async$state_machine__27059__auto__);

(statearr_29974[(1)] = (1));

return statearr_29974;
});
var cljs$core$async$state_machine__27059__auto____1 = (function (state_29948){
while(true){
var ret_value__27060__auto__ = (function (){try{while(true){
var result__27061__auto__ = switch__27058__auto__.call(null,state_29948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27061__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27061__auto__;
}
break;
}
}catch (e29975){if((e29975 instanceof Object)){
var ex__27062__auto__ = e29975;
var statearr_29976_29997 = state_29948;
(statearr_29976_29997[(5)] = ex__27062__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27060__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29998 = state_29948;
state_29948 = G__29998;
continue;
} else {
return ret_value__27060__auto__;
}
break;
}
});
cljs$core$async$state_machine__27059__auto__ = function(state_29948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27059__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27059__auto____1.call(this,state_29948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27059__auto____0;
cljs$core$async$state_machine__27059__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27059__auto____1;
return cljs$core$async$state_machine__27059__auto__;
})()
;})(switch__27058__auto__,c__27170__auto___29982,out))
})();
var state__27172__auto__ = (function (){var statearr_29977 = f__27171__auto__.call(null);
(statearr_29977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27170__auto___29982);

return statearr_29977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27172__auto__);
});})(c__27170__auto___29982,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1485395953446