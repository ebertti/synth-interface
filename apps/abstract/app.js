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

        this.model.get('root').each(function(model){
            var view = new Synth.Abstract.View.Item({
                model: model
            });
            this.$arvore.append(view.render().$el);
        }, this);

        $('.jqui-sort').sortable(ordenar_params);
    },

    gerar: function(e){
        e.preventDefault();
        var json = this.model.get('gerado');
        var obj = eval('(' + json + ')');
        var raiz = _.isArray(obj) ? obj : [obj];

        var collection = new Synth.Abstract.Collection.Itens();
        _.each(raiz, function(item){
            var model = new Synth.Abstract.Model.Item(item, {parse:true});
            collection.add(model);
        }, this);

        this.model.set('root', collection);
        this.render_items();
    }

});