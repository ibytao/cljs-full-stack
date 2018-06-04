(ns cljs-simple.async-test
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan close! put! take! alts! >! <! timeout pipe split] :as async]))

(enable-console-print!)

(.log js/console "hello world")

;; create and close channel
(let [c (chan)]
  (close! c))

(let [c (chan)]
  (put! c "async with callbacks")
  (take! c println))

(go
  (let [c (chan 1)]
    (>! c "async, but looks like sync")
    (println (<! c))))

(defn html []
  [:input {:id "query" :type "text"}]
  [:button {:id "search"} "Search"]
  [:p {:id "results"}])
