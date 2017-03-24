(defproject cljs-simple "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :source-paths ["src/clj"]
  :main cljs-simple.core
  :clean-targets [:target-path "resource/public/javascripts/cljs-dev"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel true
                        :compiler {:output-to "resources/public/javascripts/dev.js"
                                   :output-dir "resources/public/javascripts/cljs-dev/"
                                   :source-map true
                                   :optimizations :none ;;advanced
                                   :externs ["resources/public/vendor/js/mo.min.js" "resources/public/vendor/js/externs.js"]
                                   :pretty-print true
                                   :asset-path "javascripts/cljs-dev"
                                   :main "cljs-simple.core"
                                   :foreign-libs [
                                                  {:file "resources/public/vendor/js/calculator.js"
                                                   :provides ["calculator"]
                                                   :module-type :commonjs}
                                                  {:file "resources/public/vendor/js/mojs_player.js"
                                                   :provides ["mojs.player"]
                                                   :module-type :commonjs}]
                                   }}]}

  :plugins [[lein-cljsbuild "1.1.6-SNAPSHOT"]
            [lein-figwheel "0.5.9-SNAPSHOT"]]

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.clojure/core.async "0.2.395"]
                 [figwheel-sidecar "0.5.9-SNAPSHOT"]
                 [com.cemerick/piggieback "0.2.2-SNAPSHOT"]
                 [cljs-ajax "0.5.8"]
                 [compojure "1.5.2"]
                 [http-kit "2.2.0"]
                 [ring "1.5.1"]
                 [ring/ring-defaults "0.2.2"]
                 [ring/ring-json "0.4.0"]
                 [reagent "0.6.0" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "15.3.0-0"]
                 [org.clojars.frozenlock/reagent-modals "0.2.6"]])
