(ns cljs-simple.core
  (:require [compojure.core :refer [defroutes GET POST]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [org.httpkit.server :refer [run-server]]
            [ring.middleware.defaults :refer :all]
            [ring.middleware.json :refer [wrap-json-response]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.reload :as reload]
            [ring.util.response :refer [response]]))

(defn handler [id]
  {:body {:id id}})


(defroutes routes
  (GET "/get/:id" [id] ((-> handler wrap-json-response) id))
  (GET "/get-params" request (wrap-json-response (fn [request]
                                                   (response (:params request))) request))

  (POST "/send-message" request (wrap-json-response #(response (:params %)) request))
  (POST "/post-json" request ((-> #(response (:body %)) wrap-json-response) request))

  (route/resources "/")
  (route/not-found "Page not found"))

(def app (-> routes wrap-params))

(defn -main [& args]
  (let [handler (reload/wrap-reload (site #'app))]
    (run-server handler {:port 3000}))
  (println "start server port 3000"))
