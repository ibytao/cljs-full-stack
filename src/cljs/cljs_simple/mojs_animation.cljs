(ns cljs-simple.mojs-animation
  (:require [calculator :as calc]
            [mojs.player :refer [mojs_player]]
            [reagent.core :as reagent]))

(enable-console-print!)

(println (calc/add 14 25))

(defn translate-y [node]
  (fn [progress]
    (set! (-> node .-style .-transform)
          (str "translateX(" (* 200 progress) "px)"))))

(defn animation-did-mount [this]
  (let [yCurve (js/MojsCurveEditor. (clj->js {:name "yOffset"}))
        squarel (js/mojs.Html.
                 (clj->js
                  {:el "#square"
                   :x {:100 0 :curve (.getEasing yCurve)}
                   :repeat 999
                   :duration 1000}))]
    (.play squarel)
    (mojs_player. (clj->js {:add squarel}))
    ))

(defn animation []
  (reagent/create-class {:render (fn [] [:div#square {:style {:width "5em" :height "5em" :background "red"}}])
                         :component-did-mount animation-did-mount}))

(defn home []
  [:div {:style {:position "relative" :height "7em"}}
   [:h1 "mojs animation"]
   [animation]
   ])
