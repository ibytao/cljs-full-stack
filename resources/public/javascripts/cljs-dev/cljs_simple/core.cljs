(ns cljs-simple.core
  (:require [antizer.reagent :as ant]
            [calculator :as calc]
            [cljs-simple.ajax-request :as ajax]
            [cljs-simple.antd :as antd]
            [cljs-simple.async-test :as at]
            [cljs-simple.basic-component :as basic-component]
            ;; [cljs-simple.bootstrap-datepicker :as bootstrap-datepicker]
            ;; [cljs-simple.bootstrap-modal :as bootstrap-modal]
            [cljs-simple.component-state :as component-state]
            [cljs-simple.cursors :as cursors]
            ;; [cljs-simple.mojs-animation :as mojs-animation]
            ;; [cljs-simple.react-css-transition-group :as react-css-transition-group]
            [pushy.core :as pushy]
            [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary :refer-macros [defroute]]))

(enable-console-print!)
(println (calc/add 14 250))
;; -------------------------
(secretary/set-config! :prefix "/")

;; -------------------------
;; Views
(defn home-page []
  [:div [:h2 "Welcome to routing"]
   [ant/button {:on-click #(ant/message-info "Hello Rum!")} "Click me"]
   [:ul
    [:li [:a {:href "/basic"} "go to basic component page"]]
    [:li [:a {:href "/state"} "go to state component page"]]
    [:li [:a {:href "/cursors"} "go to cursors page"]]
    [:li [:a {:href "/antd"} "go to antd page"]]
    ;; [:li [:a {:href "/mojs"} "go to mojs page"]]
    ;; [:li [:a {:href "/css-transition"} "go to react css transition group page"]]
    ;; [:li [:a {:href "/bootstrap/modal"} "go to bootstrap modal page"]]
    ;; [:li [:a {:href "/bootstrap/datepicker"} "go to bootstrap datepicker page"]]
    ]])


(defn layout-page [body]
  [:div [:a {:href "/"} "go to home"] body])


(def current-page (atom home-page))
(defn app-view []
  [:div @current-page])

;; -------------------------
;; Routes
(defroute "/" []
  (reset! current-page [home-page]))

(defroute "/basic" []
  (reset! current-page [layout-page [basic-component/foo]]))

(defroute "/state" []
  (reset! current-page [layout-page [component-state/home]]))

(defroute "/cursors" []
  (reset! current-page [layout-page [cursors/home]]))

;; (defroute "/css-transition" []
;;   (reset! current-page [layout-page [react-css-transition-group/home]]))

;; (defroute "/mojs" []
;;   (reset! current-page [layout-page [mojs-animation/home]]))

;; (defroute "/bootstrap/modal" []
;;   (reset! current-page [layout-page [bootstrap-modal/home]]))

;; (defroute "/bootstrap/datepicker" []
;;   (reset! current-page [layout-page [bootstrap-datepicker/home]]))

(defroute "/antd" []
  (reset! current-page [antd/render-layout]))

;; -------------------------
;; Initialize app
(reagent/render-component [app-view] (.getElementById js/document "cljs-target"))

(def history (pushy/pushy secretary/dispatch!
                          (fn [x] (when (secretary/locate-route x) x))))

;; Start event listeners
(pushy/start! history)
