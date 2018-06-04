(ns cljs-simple.bootstrap-modal)

(defn dialog []
  [:div
   [:div.modal-header
    [:button {:type "button" :class "close" :data-dismiss "modal" :aria-label "Close"}
     [:span {:aria-hidden true} "x"]]
    [:h4.modal-title "Modal title"]]
   [:div.modal-body
    [:p "One fine body....;"]]
   [:div.modal-footer
    [:button {:type "button" :class "btn btn-default" :data-dismiss "modal"} "Close"]
    [:button {:type "button" :class "btn btn-primary"} "Save changes"]]]
  )

;; (defn modal-window-button []
;;   [:div.btn.btn-primary
;;    {:on-click #(reagent-modals/modal! [dialog] {})}
;;    "My Modal"])

;; (defn home []
;;   [:div
;;    [:h1 "bootstrap modal"]
;;    [reagent-modals/modal-window]
;;    [modal-window-button]]
;;   )
