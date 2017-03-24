(ns cljs-simple.react-css-transition-group
  (:require [reagent.core :as reagent]))

(def css-transition-group
  (reagent/adapt-react-class js/React.addons.CSSTransitionGroup))

(def style
  ".react-css-transition-group li {
  background-color: #44ee22; padding: 10px; margin: 1px; width: 150px;
  border-radius: 5px;
  font-size: 24px;
  text-align: center;
  list-style: none;
  color: #fff;
  height: 2em;
  line-height: 2em;
  padding: 0 0.5em;
  overflow: hidden;
  }

  .react-css-transition-group .foo-enter {
  height: 0;
  transition: height 0.27s ease-out;
  }

  .react-css-transition-group .foo-leave {
  height: 0;
  transition: height 0.27s ease-out;
  }

  .react-css-transition-group .foo-enter-active {
  height: 2em;
  opacity: 1;
  }")

(def app-state
  (reagent/atom {:items []
                 :items-counter 0}))

(defn add-item []
  (let [items (:items @app-state)]
    (swap! app-state update-in [:items-counter] inc)
    (swap! app-state assoc :items (conj items (:items-counter @app-state)))
    ))

(defn delete-item []
  (let [items (:items @app-state)]
    (swap! app-state update-in [:items-counter] dec)
    (swap! app-state assoc :items (vec (butlast items)))
    ))

(defn home []
  [:div
   [:h1 "React css transition group"]
   [:div (str "Total list items to date:  " (:items-counter @app-state))]
   [:button {:on-click #(add-item)} "add"]
   [:button {:on-click #(delete-item)} "delete"]
   [:style style]
   [:ul {:class "react-css-transition-group"}
    [css-transition-group {:transition-name "foo" :transition-leave-timeout 500 :transition-enter-timeout 500}
     (map-indexed (fn [i x]
                    ^{:key i} [:li (str "List Item " x)])
                  (:items @app-state))]]
   ])
