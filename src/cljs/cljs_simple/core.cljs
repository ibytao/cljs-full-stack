(ns cljs-simple.core
  (:require [cljs-simple.ajax-request :as ajax]
            [cljs-simple.basic-component :as basic-component]
            [cljs-simple.bootstrap-datepicker :as bootstrap-datepicker]
            [cljs-simple.bootstrap-modal :as bootstrap-modal]
            [cljs-simple.component-state :as component-state]
            [cljs-simple.cursors :as cursors]
            [cljs-simple.mojs-animation :as mojs-animation]
            [cljs-simple.react-css-transition-group :as react-css-transition-group]
            [reagent.core :as reagent]))

(defn home []
  [:div
   [basic-component/foo]
   [component-state/home]
   [cursors/home]
   [mojs-animation/home]
   [react-css-transition-group/home]
   [bootstrap-modal/home]
   [bootstrap-datepicker/home]
   ])

(reagent/render home (js/document.querySelector "#cljs-target"))
