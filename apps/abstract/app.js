Synth.Abstract.App = Backbone.View.extend({
    el: ".js_app",
    template : _.template($("#template-abstract-body").html()),

    bindings: {
        '#gerado': 'gerado'
    },

    events: {
        'click .js_gerar':'gerar'
    },

    ancoras: {
        arvore : '.js_ancora_arvore'
    },

    initialize: function(){
        if(!this.options || !this.options.model){
            this.model = new Synth.Abstract.Model.Documento();
        }
    },

    render: function(){
        this.$el.html(this.template());
        this.stickit();
        montar_ancoras(this);
        return this;
    },

    render_items: function(){
        this.$arvore.html('');
        var raiz = _.isArray(this.model.get('root')) ? this.model.get('root') : [this.model.get('root')];

        _.each(raiz, function(item){
            var view = new Synth.Abstract.View.Item({
                model: new Synth.Abstract.Model.Item(item)
            });
            this.$arvore.append(view.render().$el);
        }, this);
        $('.jqui-sort').sortable({connectWith: ".jqui-sort"});
    },

    gerar: function(e){
        var json = this.model.get('gerado');
        var obj = eval('(' + json + ')');
        this.model.set('root', obj);
        this.render_items();
        e.preventDefault();
    }

});