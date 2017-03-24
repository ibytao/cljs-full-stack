(ns cljs-simple.cursors
  (:require [reagent.core :as reagent]))

(def app-state (reagent/atom {:foo {:bar "Hello Word"
                                    :baz {:quux "Woot"}}}))

(defn inside-app-state []
  [:div
   [:p (str "Inside app-sate: " @app-state)]
   [:p "change state value to change cursor value "
    [:button {:on-click #(swap! app-state update-in [:foo :bar] (fn [bar] (str "world")))} "change state"]]
   ])

(def foo-cursor (reagent/cursor app-state [:foo]))

(defn inside-foo-cursor []
  [:div (str "Inside foo-cursor: " @foo-cursor)])


(defn home []
  [:div
   [:h1 "Cursors"]
   [inside-app-state]
   [inside-foo-cursor]])
