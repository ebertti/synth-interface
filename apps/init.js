//===============================================================================================================
// Arquivo..........: init.js
// Autor............: Bertti, E (EB)
// Ult. Atualização.: 10/01/2014
//
// Responsavel por iniciar a aplicação e definir rotas para a navegação da aplicação
//
//
// Versão     Data     Autor  Comentários
// ==============================================================================================================
// 1.0.0.0  10/01/2014  EB  Criação da classe.
//===============================================================================================================

Synth.Route = Backbone.Router.extend({
    routes: {
        "": "abstract_route",
        "abstract": "abstract_route",
        "mapping": "mapping_route"
    },

    // metodo que inicia a aplicacao com a aplicação para montagem da interface abstrata
    abstract_route: function(){
        this.app = new Synth.Abstract.App();
        this.app.render();
    }

});

// quando o comento está pronto, chama este metodo
$(document).ready(function(){
    window.synth = new Synth.Route();
    Backbone.history.start();
});
