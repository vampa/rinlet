(function($){


    // MODELS (OBJECTS)
    var Tile = Backbone.Model.extend({
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
    var Board = Backbone.Collection.extend({
        model: Tile
    });

    // var homeBoard = new Board([new Tile(),new Tile(),new Tile()]);

    // VIEW (VIEW CONTROLLER)
    var Tab = Backbone.View.extend({
        template: _.template( $("#board-template").html()),
        el: $('#content'),
        initialize: function(){
            _.bindAll(this, 'render')
            this.collection = new Board([new Tile(),new Tile(),new Tile()]);
            this.render();
        },
        render: function(){
            (this.$el).html(this.template({ board: this.collection.toJSON() }));      
        }
    });
    
    var tab = new Tab();

})(jQuery);