//===============================================================================================================
// Arquivo..........: abstract/collection.js
// Autor............: Bertti, E (EB)
// Ult. Atualização.: 10/01/2014
//
// Classe responsável pela coleção de itens da arvore do abstract
//
//
// Versão     Data     Autor  Comentários
// ==============================================================================================================
// 1.0.0.0  10/01/2014  EB  Criação da classe.
//===============================================================================================================

Synth.Abstract.Collection.Itens = Backbone.Collection.extend({
    model: Synth.Abstract.Model.Item,
    comparator: 'ordem',

    // Função do framework Backbone responsavel pela preparação das informações que virão do servidor
    parse:function(data){
        var ordem = 0;
        _.each(data, function(item){
            item.ordem = ordem;
            ordem++;
        });
        return data;
    }

});