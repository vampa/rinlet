(function($){

    window.Rinlet = {
      Models: {},
      Collections: {},
      Views: {},
      Router: {}
    };

    // MODELS (OBJECTS)
    Rinlet.Tile = Backbone.Model.extend({
        defaults: {
            size: "small", // small, medium, large, full
            title: "date",
            value: "Sep. 5th, 2014"
        },
        initialize: function(){
            // alert("tile created!");
        }
    });

    // COLLECTIONS (GROUPED MODELS)
    Rinlet.Board = Backbone.Collection.extend({
        model: Rinlet.Tile
    });

    // VIEW (VIEW CONTROLLER)
    // GENERATES THE BOARD
    Rinlet.BoardTab = Backbone.View.extend({
        el: $('#content'),
        initialize: function(){
            _.bindAll(this, 'render')
            this.render();
        },
        render: function(){
            (this.$el).html(_.template( $("#board-template").html())({ board: this.collection.toJSON() }));      
        }
    });

    // VIEW (VIEW CONTROLLER)
    // GENERATES THE HEADER WHEN UPDATING ROUTES
    Rinlet.Header = Backbone.View.extend({
        initialize: function(options){
            this.render({ pageTitle: options.pageTitle, active_tab: options.active_tab });
        },
        render: function(options){
            $("ul#navigation li").removeClass("active");
            $("ul#navigation li#"+options.active_tab).addClass("active");
            $("#page-title").html(options.pageTitle);
        }
    });
    
    Rinlet.Router = Backbone.Router.extend({
        refresh: true,
        routes: {
            "" : "home",
            "tv" : "tv",
            "sports" : "sports",
            "news" : "news",
            "social" : "social"
        },
        home: function(){
            new Rinlet.BoardTab({ 
                collection:  new Rinlet.Board([
                    new Rinlet.Tile(),
                    new Rinlet.Tile(),
                    new Rinlet.Tile({size: "medium"})
                ])
            });
            new Rinlet.Header({
                pageTitle: "Welcome back, Dude!",
                active_tab: "home"
            });
        },
        tv: function(){
            new Rinlet.BoardTab({
                collection:  new Rinlet.Board([
                    new Rinlet.Tile({size: "medium"}),
                    new Rinlet.Tile({size: "medium"})
                ])
            });    
            new Rinlet.Header({
                pageTitle: "TV Show Watcher",
                active_tab: "tv"
            });        
        },
        sports: function(){
            new Rinlet.BoardTab({
                collection:  new Rinlet.Board([
                    new Rinlet.Tile({size: "medium"}),
                    new Rinlet.Tile(),
                    new Rinlet.Tile()
                ])
            });   
            new Rinlet.Header({
                pageTitle: "Sports News",
                active_tab: "sports"
            });         
        },
        news: function(){
            new Rinlet.BoardTab({
                collection:  new Rinlet.Board([
                    new Rinlet.Tile(),
                    new Rinlet.Tile({size: "medium"}),
                    new Rinlet.Tile()
                ])
            });  
            new Rinlet.Header({
                pageTitle: "International News Updates",
                active_tab: "news"
            });          
        },
        social: function(){
            new Rinlet.BoardTab({
                collection:  new Rinlet.Board([
                    new Rinlet.Tile(),
                    new Rinlet.Tile({size: "medium"}),
                    new Rinlet.Tile(),
                    new Rinlet.Tile({size: "medium"}),
                    new Rinlet.Tile(),
                    new Rinlet.Tile()
                ])
            }); 
            new Rinlet.Header({
                pageTitle: "Social Media Overview",
                active_tab: "social"
            });           
        }
    });

    new Rinlet.Router;
    Backbone.history.start();

})(jQuery);