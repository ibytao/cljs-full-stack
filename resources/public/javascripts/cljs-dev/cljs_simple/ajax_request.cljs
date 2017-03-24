(ns cljs-simple.ajax-request
  (:require [ajax.core :refer [GET POST ajax-request json-request-format json-response-format url-request-format]]))

(GET "/get-params" {:params {:id 3 :name "bytao"}
                    :handler (fn [response]
                               (.log js/console (str response)))
                    :keywords? true
                    :response-format :json
                    :error-handler (fn [{:keys [status status-text]}]
                                     (.log js/console (str "something bad happened: " status " " status-text)))})

(POST "/send-message" {:params {:id 4 :name "bytao"}
                       :handler #(.log js/console (str %))
                       :format (url-request-format)
                       :response-format :json
                       :keywords? true
                       :error-handler (fn [{:keys [status status-text]}]
                                        (.log js/console (str "something bad happened: " status " " status-text)))})



(ajax-request
 {:uri "/post-json"
  :method :post
  :params {:message "Hello World post json" :user "Bob"}
  :handler #(js/console.log (str %))
  :format (json-request-format)
  :response-format (json-response-format {:keywords? true})})

(ajax-request
 {:uri "http://localhost/~buck/info.php"
  :method :post
  :params {:message "info php" :user "Bob"}
  :handler #(js/console.log (str %))
  :format (json-request-format)
  :response-format (json-response-format {:keywords? true})})

(ajax-request
 {:uri "/send-message"
  :method :post
  :params {:message "Hello World"
           :user    "Bob"}
  :handler (fn [[ok response]] (if ok
                                 (js/console.log (str response))))
  :format (url-request-format)
  :response-format (json-response-format {:keywords? true})})
