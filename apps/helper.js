montar_ancoras = function(view){
    _.each(view.ancoras, function(valor, chave){
        if(chave == 'el'){
            throw Error("Não use 'el' como nome de um elemento para não conflitar com o backbone.")
        }
        view["$" + chave] =   view.$(valor);
    })
};