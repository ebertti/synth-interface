//===============================================================================================================
// Arquivo..........: abstract/view.js
// Autor............: Bertti, E (EB)
// Ult. Atualização.: 21/01/2014
//
// Classe responsavel pela manipulação de elementos no DOM da pagina.
//
//
// Versão     Data     Autor  Comentários
// ==============================================================================================================
// 1.0.0.0  21/01/2014  EB  Criação da classe.
//===============================================================================================================

Synth.Abstract.View.Item = Backbone.View.extend({
    tagName: 'li',
    className: 'list-unstyled',
    template : _.template($("#template-abstract-item").html()),

    events: {
        'click .js_adicionar_filhos': "adicionar_filhos",
        'click .js_remover': "remover",
        'sortreceive': "sortreceive",
        'sortremove': 'sortremove',
        'sortstop': "sortstop",
        'collection_change': 'collection_change'
    },

    bindings: {
        'input[name="repeatable"]': 'repeatable',
        'input[name="name"]': 'name',
        'input[name="widget_type"]':'widget_type'
    },

    ancoras:{
        'filhos' : '.js_ancora_filhos'
    },

    // Método vindo do framework Backbone responsável por instanciar atributos no objeto
    initialize: function(){
        this.model.on('change:widget_type', this.render, this);
    },

    // Método responsável pela renderização do HTML no navegador
    render: function(){
        this.$el.html(this.template({model: this.model.attributes}));
        this.stickit();
        montar_ancoras(this);
        this.subviews = [];
        this.model.get('children').each(function(item){
            this.criar_filho(item)
        }, this);
        this.$('input[value="' + this.model.get('widget_type') + '"]:first').parent().addClass('active');
        return this;
    },

    // Método responsável pela a instanciação dos filhos do no atual da arvore
    criar_filho: function(model){
        var view = new Synth.Abstract.View.Item({
            model: model
        });
        this.subviews.push(view);
        this.$filhos.append(view.render().$el);
    },

    // Tratamento da ação do botao de adicionar filhos
    adicionar_filhos: function(e){
        e.preventDefault();
        var model = new Synth.Abstract.Model.Item();
        this.criar_filho(model);
        this.model.get('children').add(model);
    },

    // Tratamento da ação de remover o no da arvore
    remover: function(e){
        this.model.destroy();
        this.remove();
    },

    // Metodo de integração com a ordenação pelo jquery ui
    sortreceive: function(e, ui){
        ui.item.trigger('collection_change', this.model.get('children'));
        e.stopPropagation();
    },

    // Metodo de integração com a ordenação pelo jquery ui
    sortremove: function(e, ui){
        ui.item.trigger('remove');
        e.stopPropagation();
    },

    // Evento disparado quando a coleção é alterada
    collection_change: function(e, collection_new){
        var collection_old = this.model.collection;
        collection_old.remove(this.model);
        this.model.set('ordem', this.$el.index());
        collection_new.add(this.model, {at:this.$el.index()})
    },

    // Metodo de integração com a ordenação pelo jquery ui
    sortstop: function(e, ui){

        _.each(this.subviews, function(item){
            item.model.set('ordem', item.$el.index());
        });
        this.model.get('children').sort({silent: true});
         _.invoke(this.subviews, 'remove');
        this.render();
        preparar_ordenacao();
    }

});