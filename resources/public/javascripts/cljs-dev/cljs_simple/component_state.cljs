(ns cljs-simple.component-state
  (:require [reagent.core :as reagent]))

(enable-console-print!)

(defn foo []
  (let [component-state (reagent/atom {:count 0})]
    (fn []
      [:div
       [:p "Current count is: " (get @component-state :count)]
       [:button {:on-click #(swap! component-state update-in [:count] inc)} "Increment"]])))

(defn foo-mistake []
  (let [component-state (reagent/atom {:count 0})]
    [:div
     [:p "Current count is: " (get @component-state :count)]
     [:button {:on-click #(swap! component-state update-in [:count] inc)} "Increment"]])
  )

(defn foo-mistake2 []
  (let [component-state (reagent/atom {:count 0})]
    [:div
     [:p "Current count is: " (:count @component-state)]
     (.log js/console (str "Foo Mistake 2 is being rendered"))
     [:button {:on-click #(swap! component-state update-in [:count] inc)} "Increment"]]))

(defn foo-inner-let []
  (let [component-state (reagent/atom {:count 0})]
    (fn []
      (let [count (:count @component-state)]
        [:div
         [:p "Current count is: " count]
         [:button {:on-click #(swap! component-state update-in [:count] inc)} "Increment"]]))))

(defn home []
  [:div
   [:h1 "Foo"]
   [foo]
   [:h1 "Foon Mistake"]
   [foo-mistake]
   [:h1 "Foon Mistake2"]
   [foo-mistake2]
   [:h1 "Foo inner let"]
   [foo-inner-let]
   ])
