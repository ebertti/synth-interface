Synth.Abstract.View.Item = Backbone.View.extend({
    tagName: 'li',
    className: 'list-unstyled',
    template : _.template($("#template-abstract-item").html()),

    events: {
        'click .js_adicionar_filhos': "adicionar_filhos",
        'sorted': "sorted"
    },

    bindings: {
        'input[name="repeat"]': 'repeat',
        'input[name="name"]': 'name',
        'select[name="widget_type"]':'widget_type'
    },

    ancoras:{
        'filhos' : '.js_ancora_filhos'
    },

    render: function(){
        this.$el.html(this.template({model: this.model.attributes}));
        this.stickit();
        montar_ancoras(this);
        this.model.get('children').each(function(item){
            this.criar_filho(item)
        }, this);
        return this;
    },

    criar_filho: function(model){
        var view = new Synth.Abstract.View.Item({
            model: model
        });
        this.$filhos.append(view.render().$el);
    },

    adicionar_filhos: function(e){
        e.preventDefault();
        var model = new Synth.Abstract.Model.Item();
        this.criar_filho(model);
        this.model.get('children').shift(model);
    },

    sorted: function(e){
        debugger;
    }

});