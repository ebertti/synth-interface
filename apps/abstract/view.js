Synth.Abstract.View.Item = Backbone.View.extend({
    tagName: 'li',
    className: 'list-unstyled',
    template : _.template($("#template-abstract-item").html()),

    events: {
        'click .js_adicionar_filhos': "adicionar_filhos"
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
        var filhos = this.model.get('children');
        _.each(filhos, function(item){
            var view = new Synth.Abstract.View.Item({
                model: new Synth.Abstract.Model.Item(item)
            });
            this.$filhos.append(view.render().$el);
        }, this);
        return this;
    },

    adicionar_filhos: function(e){
        e.preventDefault();
    }

});