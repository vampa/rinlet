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

    // var homeBoard = new Board([new Tile(),new Tile(),new Tile()]);

    // VIEW (VIEW CONTROLLER)
    Rinlet.BoardTab = Backbone.View.extend({
        template: _.template( $("#board-template").html()),
        el: $('#content'),
        initialize: function(){
            _.bindAll(this, 'render')
            
            // this.collection = new Rinlet.Board([
            //     new Rinlet.Tile(),
            //     new Rinlet.Tile(),
            //     new Rinlet.Tile({size: "medium"})
            //     ]);

            this.render();
        },
        render: function(){
            (this.$el).html(this.template({ board: this.collection.toJSON() }));      
        }
    });
    
    Rinlet.Router = Backbone.Router.extend({
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
        },
        tv: function(){
            new Rinlet.BoardTab({ 
                collection:  new Rinlet.Board([
                    new Rinlet.Tile({size: "medium"}),
                    new Rinlet.Tile({size: "medium"})
                ])
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
        },
        news: function(){
            new Rinlet.BoardTab({ 
                collection:  new Rinlet.Board([
                    new Rinlet.Tile(),
                    new Rinlet.Tile({size: "medium"}),
                    new Rinlet.Tile()
                ])
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
        }
    });

    new Rinlet.Router;
    Backbone.history.start();

})(jQuery);