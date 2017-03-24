(ns cljs-simple.core
  (:require [reagent.core :as reagent]))

(defn say-hello []
  (js/console.log js/React))

(say-hello)
