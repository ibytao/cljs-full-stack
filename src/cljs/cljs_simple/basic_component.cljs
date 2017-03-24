(ns cljs-simple.basic-component
  (:require [reagent.core :as reagent]))

;; Form-1 Component
(defn bar []
  [:div "via a simple render function - data in as parameters, and it returns HTML."])

;; Form-2 Component
(defn baz [this]
  (fn []
    [:div "via a function which returns the render function - the returned function is the render function."]))

(defn ul [this]
  [:div
   [:h1 "basic-componetn"]
   [:ol
    [:li [bar]]
    [:li [baz this]]
    [:li "via a map of functions, one of which is the render the rest of the functions are React lifecycle methods which allow for some more advanced interventions."]
    ]]
  )

;; Form-3 Component
(defn foo []
  (reagent/create-class {:render (fn [this] [ul this])
                         :component-did-mount (fn [this] (js/console.log this))
                         :component-will-mount #(js/console.log "basic-component component-will-mount")
                         }))
