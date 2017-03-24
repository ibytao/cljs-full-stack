(ns cljs-simple.bootstrap-datepicker
  (:require [reagent.core :as reagent]))

(defn home-render []
[:div
 [:h1 "bootstrap-datepicker"]
 [:input {:type "text" :placeholder "click to show datepicker" :id "example"}]])

(defn home-did-mount []
  (.ready (js/$ js/document)
          (fn [] (.datepicker (js/$ "#example") (clj->js {:format "dd/mm/yyyy"})))))

;; (defn home-did-mount [this]
;;   (.datepicker (js/$ (reagent/dom-node this)) (clj->js {:format "dd/mm/yy"})))

(defn home []
  (reagent/create-class {:render home-render
                         :component-did-mount home-did-mount}))

