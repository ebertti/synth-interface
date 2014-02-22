//===============================================================================================================
// Arquivo..........: abstract/app.cs
// Autor............: Bertti, E (EB)
// Ult. Atualização.: 21/01/2014
//
// Classe responsável pela aplicação do de montagem do abstract do Synth
//
//
// Versão     Data     Autor  Comentários
// ==============================================================================================================
// 1.0.0.0  21/01/2014  EB  Criação da classe.
//===============================================================================================================


Synth.Abstract.App = Backbone.View.extend({
    el: ".js_app",
    template : _.template($("#template-abstract-body").html()),

    bindings: {
        '#gerado': 'gerado',
        '#obtido': 'obtido'
    },

    events: {
        'click .js_gerar':'gerar',
        'click .js_obter':'obter'
    },

    ancoras: {
        arvore : '.js_ancora_arvore',
        text_obtido: '#obtido',
        botao_obtido: '.js_obter'
    },

    // Método vindo do framework Backbone responsável por instanciar atributos no objeto
    initialize: function(){
        if(!this.options || !this.options.model){
            this.model = new Synth.Abstract.Model.Documento();
        }
    },

    // Método responsável pela renderização do HTML no navegador
    render: function(){
        this.$el.html(this.template());
        this.stickit();
        montar_ancoras(this);
        return this;
    },

    // renderiza o arvore depois que o botao gerar é clicado
    render_items: function(){
        this.$arvore.html('');

        this.model.get('root').each(function(model){
            var view = new Synth.Abstract.View.Item({
                model: model
            });
            this.$arvore.append(view.render().$el);
        }, this);
    },

    // tratamento do evento do botão gerar
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
        this.$text_obtido.show();
        this.$botao_obtido.show();
        preparar_ordenacao();
    },

    // tratamento do evento do botao obter
    obter: function(e){
        e.preventDefault();
        var filhos = [];
        this.model.get('root').each(function(model){
            filhos.push(model.toJson());
        });
        this.model.set('obtido', source(filhos.length > 1 ? filhos : filhos[0]))
    }

});