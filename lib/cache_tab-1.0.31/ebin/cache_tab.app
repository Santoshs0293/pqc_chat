{application,cache_tab,
             [{description,"In-memory cache Erlang / Elixir library"},
              {vsn,"1.0.31"},
              {modules,[cache_tab,cache_tab_app,cache_tab_sup,ets_cache,
                        ets_cache_options]},
              {registered,[]},
              {applications,[kernel,stdlib,p1_utils]},
              {mod,{cache_tab_app,[]}},
              {files,["src/","include/","c_src/ets_cache.c","rebar.config",
                      "rebar.config.script","README.md","LICENSE.txt"]},
              {licenses,["Apache 2.0"]},
              {links,[{"Github","https://github.com/processone/cache_tab"}]}]}.
