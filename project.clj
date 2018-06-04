(defproject cljs-simple "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj"]
  :main cljs-simple.core
  :clean-targets ^{:protect false} [:target-path "resources/public/javascripts/cljs-dev"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel true
                        :compiler {:output-to "resources/public/javascripts/dev.js"
                                   :output-dir "resources/public/javascripts/cljs-dev/"
                                   :source-map true
                                   :optimizations :none ;;advanced
                                   :externs ["resources/public/vendor/js/mo.min.js" "resources/public/vendor/js/externs.js"]
                                   :closure-warnings {:externs-validation :off
                                                      :non-standard-jsdoc :off}
                                   :pretty-print true
                                   :asset-path "javascripts/cljs-dev"
                                   :main "cljs-simple.core"
                                   :foreign-libs [{:file "resources/public/vendor/js/calculator.js"
                                                   :provides ["calculator"]
                                                   :module-type :es6} ;; or :commonjs / :amd
                                                  {:file "resources/public/vendor/js/mojs_player.js"
                                                   :provides ["mojs.player"]
                                                   :module-type :commonjs}
                                                  ]
                                   }}]}

  :figwheel {:css-dirs ["resources/public/css"]}

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.17-SNAPSHOT"]]

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [org.clojure/core.async "0.4.474"]
                 [figwheel-sidecar "0.5.17-SNAPSHOT"]
                 [com.novemberain/langohr "5.0.0"]
                 [com.cemerick/piggieback "0.2.2-SNAPSHOT"]
                 [cljs-ajax "0.5.8"]
                 [compojure "1.5.2"]
                 [http-kit "2.2.0"]
                 [ring "1.5.1"]
                 [ring/ring-core "1.5.1"]
                 [ring/ring-defaults "0.2.2"]
                 [ring/ring-json "0.4.0"]
                 ;; [reagent "0.6.0" :exclusions [cljsjs/react]]
                 [reagent "0.8.0-alpha2"]
                 [secretary "1.2.3"]
                 [kibu/pushy "0.3.1"]
                 [org.clojars.frozenlock/reagent-modals "0.2.6"]
                 [antizer "0.2.2"]
                 [cljsjs/moment "2.17.1-1"]
                 ])
