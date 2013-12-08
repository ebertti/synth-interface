Synth.Route = Backbone.Router.extend({
    routes: {
        "": "abstract_route",
        "abstract": "abstract_route",
        "mapping": "mapping_route"
    },

    abstract_route: function(){
        this.app = new Synth.Abstract.App();
        this.app.render();
    },

    mapping_route: function(){
        this.app = new Synth.Mapping.App();
        this.app.render();
    }
});

$(document).ready(function(){
    window.synth = new Synth.Route();
    Backbone.history.start();
});
